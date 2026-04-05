#!/usr/bin/env node

import fs from 'fs';
import os from 'os';
import path from 'path';
import { spawn, spawnSync } from 'child_process';

import { ROOT } from './paths.mjs';
const DEFAULT_PORT = 9339;
const DEFAULT_USER_DATA_DIR = '/tmp/shopeecode-login-flow-user';
const DEFAULT_RESULT_PATH = path.join(ROOT, 'mapped', 'rebuilt-login-flow.json');
const DEFAULT_SCREENSHOT_PATH = '/tmp/shopeecode-login-flow.png';
const DEFAULT_OPEN_EXTERNAL_LOG = '/tmp/shopeecode-open-external.jsonl';
const DEFAULT_BROWSER_OUTPUT = '/tmp/shopeecode-browser-login.json';

function parseArgs(argv) {
  const args = {};
  for (let index = 2; index < argv.length; index += 1) {
    const token = argv[index];
    if (!token.startsWith('--')) {
      continue;
    }
    const key = token.slice(2);
    const next = argv[index + 1];
    if (!next || next.startsWith('--')) {
      args[key] = true;
      continue;
    }
    args[key] = next;
    index += 1;
  }
  return args;
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForJson(url, timeoutMs = 60000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return await response.json();
      }
    } catch {}
    await delay(300);
  }
  throw new Error(`Timed out waiting for ${url}`);
}

async function waitForTarget(port, timeoutMs = 60000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const targets = await waitForJson(`http://127.0.0.1:${port}/json/list`, 2000);
      const target = targets.find((entry) => entry.type === 'page' && entry.webSocketDebuggerUrl);
      if (target) {
        return target;
      }
    } catch {}
    await delay(300);
  }
  throw new Error('Timed out waiting for a page target');
}

class CdpClient {
  constructor(wsUrl) {
    this.ws = new WebSocket(wsUrl);
    this.nextId = 1;
    this.pending = new Map();
  }

  async open() {
    await new Promise((resolve, reject) => {
      this.ws.addEventListener('open', resolve, { once: true });
      this.ws.addEventListener('error', reject, { once: true });
    });

    this.ws.addEventListener('message', (event) => {
      const message = JSON.parse(event.data.toString());
      if (typeof message.id !== 'number') {
        return;
      }
      const pending = this.pending.get(message.id);
      if (!pending) {
        return;
      }
      this.pending.delete(message.id);
      if (message.error) {
        pending.reject(new Error(message.error.message));
      } else {
        pending.resolve(message.result);
      }
    });
  }

  async send(method, params = {}) {
    const id = this.nextId++;
    const response = new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
    });
    this.ws.send(JSON.stringify({ id, method, params }));
    return response;
  }

  async close() {
    await new Promise((resolve) => {
      this.ws.addEventListener('close', resolve, { once: true });
      this.ws.close();
    });
  }
}

function buildNodeOptions(extraRequirePath) {
  const parts = [];
  const existing = process.env.NODE_OPTIONS?.trim();
  if (existing) {
    parts.push(existing);
  }
  parts.push(`--require=${extraRequirePath}`);
  return parts.join(' ');
}

function readLastCapturedUrl(logPath) {
  if (!fs.existsSync(logPath)) {
    return null;
  }
  const lines = fs
    .readFileSync(logPath, 'utf8')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);
  for (let index = lines.length - 1; index >= 0; index -= 1) {
    try {
      const entry = JSON.parse(lines[index]);
      if (typeof entry.url === 'string' && entry.url.includes('loginDeepControl')) {
        return entry;
      }
    } catch {}
  }
  return null;
}

async function waitForCapturedUrl(logPath, timeoutMs = 20000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    const entry = readLastCapturedUrl(logPath);
    if (entry) {
      return entry;
    }
    await delay(250);
  }
  throw new Error('Timed out waiting for captured login URL');
}

async function installRendererLoginCapture(cdp) {
  await cdp.send('Runtime.evaluate', {
    expression: `(() => {
      if (globalThis.__shopeeAuthCaptureInstalled) {
        return true;
      }
      const capture = globalThis.__shopeeAuthCapture = { events: [] };
      const recordIfInteresting = (kind, payload) => {
        const json = JSON.stringify(payload, (_, value) => {
          if (typeof value === 'function') {
            return '[function]';
          }
          return value;
        });
        if (!json.includes('loginDeepControl') && !json.includes('cursor.com') && !json.includes('auth/poll')) {
          return;
        }
        capture.events.push({
          kind,
          timestamp: new Date().toISOString(),
          payload
        });
      };

      const patchMethod = (holder, methodName, label) => {
        const original = holder?.[methodName];
        if (typeof original !== 'function' || original.__shopeeWrapped) {
          return;
        }
        const wrapped = function (...args) {
          recordIfInteresting(label, args);
          return original.apply(this, args);
        };
        wrapped.__shopeeWrapped = true;
        holder[methodName] = wrapped;
      };

      patchMethod(globalThis, 'open', 'window.open');
      patchMethod(globalThis.vscode?.ipcRenderer, 'send', 'ipcRenderer.send');
      patchMethod(globalThis.vscode?.ipcRenderer, 'invoke', 'ipcRenderer.invoke');
      patchMethod(globalThis.vscode?.ipcRenderer, 'postMessage', 'ipcRenderer.postMessage');
      globalThis.__shopeeAuthCaptureInstalled = true;
      return true;
    })()`,
    returnByValue: true,
  });
}

async function waitForRendererCapturedUrl(cdp, timeoutMs = 15000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    const evaluation = await cdp.send('Runtime.evaluate', {
      expression: `(() => JSON.stringify(globalThis.__shopeeAuthCapture?.events ?? []))()`,
      returnByValue: true,
    });
    const events = JSON.parse(evaluation.result.value);
    for (const event of events) {
      const payload = Array.isArray(event.payload) ? event.payload : [event.payload];
      const url = payload.find((entry) => typeof entry === 'string' && entry.includes('loginDeepControl'));
      if (url) {
        return {
          source: 'renderer',
          kind: event.kind,
          timestamp: event.timestamp,
          url,
        };
      }
      const nestedUrl = payload
        .flatMap((entry) => (entry && typeof entry === 'object' ? Object.values(entry) : []))
        .find((entry) => typeof entry === 'string' && entry.includes('loginDeepControl'));
      if (nestedUrl) {
        return {
          source: 'renderer',
          kind: event.kind,
          timestamp: event.timestamp,
          url: nestedUrl,
        };
      }
    }
    await delay(250);
  }
  return null;
}

async function evaluateRuntime(cdp) {
  const evaluation = await cdp.send('Runtime.evaluate', {
    expression: `(() => JSON.stringify({
      title: document.title,
      readyState: document.readyState,
      loginButtons: Array.from(document.querySelectorAll('*'))
        .map((button) => (button.innerText || button.textContent || '').trim())
        .filter((text) => text === 'Log In' || text === 'Sign Up'),
      authPromptVisible: document.body.innerText.includes('Cursor’s AI features require you to be logged in') ||
        document.body.innerText.includes('Cursor\\'s AI features require you to be logged in'),
      hasWorkbench: !!document.querySelector('.monaco-workbench'),
      editorSurfaceCount: document.querySelectorAll('.monaco-editor, .tabs-container .tab, .editor-group-container .tab').length
    }))()`,
    returnByValue: true,
  });
  return JSON.parse(evaluation.result.value);
}

async function clickButtonByText(cdp, text) {
  const findResult = await cdp.send('Runtime.evaluate', {
    expression: `(() => {
      const isVisible = (candidate) => {
        const rect = candidate.getBoundingClientRect();
        const style = window.getComputedStyle(candidate);
        return rect.width > 0 && rect.height > 0 && style.visibility !== 'hidden' && style.display !== 'none';
      };
      const button = Array.from(document.querySelectorAll('*')).find(
        (candidate) => (candidate.innerText || candidate.textContent || '').trim() === ${JSON.stringify(text)} && isVisible(candidate)
      );
      if (!button) {
        return null;
      }
      const rect = button.getBoundingClientRect();
      return {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
        width: rect.width,
        height: rect.height
      };
    })()`,
    returnByValue: true,
  });
  const rect = findResult.result.value;
  if (!rect) {
    const debugResult = await cdp.send('Runtime.evaluate', {
      expression: `(() => JSON.stringify({
        title: document.title,
        bodyText: document.body?.innerText?.slice(0, 1200) ?? '',
        visibleTexts: Array.from(document.querySelectorAll('*'))
          .map((candidate) => {
            const rect = candidate.getBoundingClientRect();
            const style = window.getComputedStyle(candidate);
            const text = (candidate.innerText || candidate.textContent || '').trim();
            if (!text || rect.width <= 0 || rect.height <= 0 || style.visibility === 'hidden' || style.display === 'none') {
              return null;
            }
            return text;
          })
          .filter(Boolean)
          .slice(0, 100)
      }))()`,
      returnByValue: true,
    });
    throw new Error(`Could not find button with text "${text}": ${debugResult.result.value}`);
  }
  await cdp.send('Input.dispatchMouseEvent', {
    type: 'mouseMoved',
    x: rect.x,
    y: rect.y,
    button: 'left',
    clickCount: 1,
  });
  await cdp.send('Input.dispatchMouseEvent', {
    type: 'mousePressed',
    x: rect.x,
    y: rect.y,
    button: 'left',
    clickCount: 1,
  });
  await cdp.send('Input.dispatchMouseEvent', {
    type: 'mouseReleased',
    x: rect.x,
    y: rect.y,
    button: 'left',
    clickCount: 1,
  });
  return rect;
}

async function waitForLoginCompletion(cdp, timeoutMs = 90000) {
  const start = Date.now();
  let latest = null;
  while (Date.now() - start < timeoutMs) {
    latest = await evaluateRuntime(cdp);
    if (!latest.authPromptVisible && latest.loginButtons.length === 0 && latest.hasWorkbench) {
      return latest;
    }
    await delay(1000);
  }
  return latest;
}

async function captureScreenshot(cdp, screenshotPath) {
  const screenshot = await cdp.send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(screenshotPath, Buffer.from(screenshot.data, 'base64'));
}

const args = parseArgs(process.argv);
const PORT = Number(args['remote-debugging-port'] ?? DEFAULT_PORT);
const USER_DATA_DIR = args['user-data-dir'] ?? DEFAULT_USER_DATA_DIR;
const RESULT_PATH = args['result-path'] ?? DEFAULT_RESULT_PATH;
const SCREENSHOT_PATH = args['screenshot-path'] ?? DEFAULT_SCREENSHOT_PATH;
const OPEN_EXTERNAL_LOG = args['external-url-log'] ?? DEFAULT_OPEN_EXTERNAL_LOG;
const BROWSER_OUTPUT = args['browser-output'] ?? DEFAULT_BROWSER_OUTPUT;
const CHROME_USER_DATA_DIR =
  args['chrome-user-data-dir'] ?? path.join(os.homedir(), 'Library', 'Application Support', 'Google', 'Chrome');
const CHROME_PROFILE_DIRECTORY = args['chrome-profile-directory'] ?? 'Default';
const BROWSER_TIMEOUT_MS = Number(args['browser-timeout-ms'] ?? 90000);

fs.rmSync(USER_DATA_DIR, { recursive: true, force: true });
fs.rmSync(OPEN_EXTERNAL_LOG, { force: true });
fs.rmSync(BROWSER_OUTPUT, { force: true });

const extraRequirePath = path.join(ROOT, 'scripts', 'intercept-open-external.cjs');
const child = spawn(
  'bash',
  [path.join(ROOT, 'run-electron-rebuilt.sh'), `--remote-debugging-port=${PORT}`],
  {
    cwd: ROOT,
    detached: true,
    env: {
      ...process.env,
      NODE_OPTIONS: buildNodeOptions(extraRequirePath),
      SHOPEECODE_REBUILT_USER_DATA_DIR: USER_DATA_DIR,
      SHOPEECODE_REBUILT_SKIP_PREPARE: '1',
      SHOPEECODE_EXTERNAL_URL_LOG: OPEN_EXTERNAL_LOG,
      SHOPEECODE_EXTERNAL_URL_ALLOW_OPEN: '0',
    },
    stdio: ['ignore', 'pipe', 'pipe'],
  }
);

let stdout = '';
let stderr = '';
child.stdout.on('data', (chunk) => {
  stdout += chunk.toString();
});
child.stderr.on('data', (chunk) => {
  stderr += chunk.toString();
});

const childClosed = new Promise((resolve) => {
  child.once('close', (code, signal) => resolve({ code, signal }));
});

async function terminateChild() {
  if (child.exitCode !== null || child.signalCode !== null) {
    await childClosed;
    return;
  }
  try {
    process.kill(-child.pid, 'SIGTERM');
  } catch {}
  await Promise.race([childClosed, delay(5000)]);
  if (child.exitCode === null && child.signalCode === null) {
    try {
      process.kill(-child.pid, 'SIGKILL');
    } catch {}
    await Promise.race([childClosed, delay(2000)]);
  }
}

let cdp = null;

try {
  await waitForJson(`http://127.0.0.1:${PORT}/json/version`);
  const target = await waitForTarget(PORT);
  cdp = new CdpClient(target.webSocketDebuggerUrl);
  await cdp.open();
  await cdp.send('Runtime.enable');
  await cdp.send('Page.enable');
  await delay(3000);
  await installRendererLoginCapture(cdp);

  const beforeClick = await evaluateRuntime(cdp);
  const clickRect = await clickButtonByText(cdp, 'Log In');
  const capturedUrl =
    (await waitForRendererCapturedUrl(cdp)) ??
    (await waitForCapturedUrl(OPEN_EXTERNAL_LOG));

  const browserResult = spawnSync(
    'python3',
    [
      path.join(ROOT, 'scripts', 'playwright_complete_cursor_login.py'),
      '--login-url',
      capturedUrl.url,
      '--output-path',
      BROWSER_OUTPUT,
      '--chrome-user-data-dir',
      CHROME_USER_DATA_DIR,
      '--chrome-profile-directory',
      CHROME_PROFILE_DIRECTORY,
      '--timeout-ms',
      String(BROWSER_TIMEOUT_MS),
    ],
    {
      cwd: ROOT,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    }
  );

  const browserAuth = fs.existsSync(BROWSER_OUTPUT)
    ? JSON.parse(fs.readFileSync(BROWSER_OUTPUT, 'utf8'))
    : {
        success: false,
        error: browserResult.stderr.trim() || 'browser auth script did not produce output',
      };

  const finalRuntime = await waitForLoginCompletion(cdp, BROWSER_TIMEOUT_MS);
  await captureScreenshot(cdp, SCREENSHOT_PATH);

  const result = {
    generatedAt: new Date().toISOString(),
    target,
    clickRect,
    beforeClick,
    capturedUrl,
    browserAuth,
    finalRuntime,
    screenshotPath: SCREENSHOT_PATH,
    openExternalLogPath: OPEN_EXTERNAL_LOG,
    stdout,
    stderr,
  };

  fs.writeFileSync(RESULT_PATH, JSON.stringify(result, null, 2) + '\n');
  console.log(RESULT_PATH);

  if (browserResult.status !== 0) {
    throw new Error(browserResult.stderr.trim() || 'Browser login helper failed');
  }

  if (finalRuntime.authPromptVisible || finalRuntime.loginButtons.length > 0) {
    throw new Error('Login UI is still visible after browser flow');
  }
} finally {
  if (cdp) {
    try {
      await cdp.close();
    } catch {}
  }
  await terminateChild();
}

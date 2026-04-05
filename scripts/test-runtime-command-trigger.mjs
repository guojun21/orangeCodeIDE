#!/usr/bin/env node

import path from 'path';
import { spawn } from 'child_process';

import { ROOT } from './paths.mjs';
const PORT = 9336;
const USER_DATA_DIR = '/tmp/shopeecode-command-trigger-user';

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForJson(url, timeoutMs = 30000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return await response.json();
      }
    } catch {}
    await delay(500);
  }
  throw new Error(`Timed out waiting for ${url}`);
}

async function waitForTarget(timeoutMs = 30000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const targets = await waitForJson(`http://127.0.0.1:${PORT}/json/list`, 2000);
      const target = targets.find((entry) => entry.type === 'page' && entry.webSocketDebuggerUrl);
      if (target) {
        return target;
      }
    } catch {}
    await delay(500);
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

async function pressShortcut(cdp, modifiers, key, code, windowsVirtualKeyCode) {
  await cdp.send('Input.dispatchKeyEvent', {
    type: 'keyDown',
    key,
    code,
    windowsVirtualKeyCode,
    modifiers,
  });
  await cdp.send('Input.dispatchKeyEvent', {
    type: 'keyUp',
    key,
    code,
    windowsVirtualKeyCode,
    modifiers,
  });
}

async function typeText(cdp, text) {
  for (const char of text) {
    await cdp.send('Input.insertText', { text: char });
    await delay(25);
  }
}

async function pressEnter(cdp) {
  for (const type of ['keyDown', 'char', 'keyUp']) {
    await cdp.send('Input.dispatchKeyEvent', {
      type,
      key: 'Enter',
      code: 'Enter',
      windowsVirtualKeyCode: 13,
      unmodifiedText: '\r',
      text: type === 'char' ? '\r' : undefined,
    });
  }
}

function walk(dirPath) {
  const results = [];
  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    const absolutePath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      results.push(...walk(absolutePath));
    } else {
      results.push(absolutePath);
    }
  }
  return results;
}

import fs from 'fs';

async function waitForLog(relativeSuffix, contains, timeoutMs = 15000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    if (fs.existsSync(USER_DATA_DIR)) {
      const candidate = walk(USER_DATA_DIR)
        .filter((filePath) => filePath.includes('/logs/') && filePath.endsWith(relativeSuffix))
        .sort((left, right) => fs.statSync(right).mtimeMs - fs.statSync(left).mtimeMs)[0];
      if (candidate) {
        const text = fs.readFileSync(candidate, 'utf8');
        if (contains.every((needle) => text.includes(needle))) {
          return candidate;
        }
      }
    }
    await delay(500);
  }
  return null;
}

const child = spawn('bash', [path.join(ROOT, 'run-electron-rebuilt.sh'), `--remote-debugging-port=${PORT}`], {
  cwd: ROOT,
  detached: true,
  env: {
    ...process.env,
    SHOPEECODE_REBUILT_USER_DATA_DIR: USER_DATA_DIR,
  },
  stdio: ['ignore', 'pipe', 'pipe'],
});

const childClosed = new Promise((resolve) => child.once('close', resolve));

async function terminateChild() {
  try {
    process.kill(-child.pid, 'SIGTERM');
  } catch {}
  await Promise.race([childClosed, delay(3000)]);
  try {
    process.kill(-child.pid, 'SIGKILL');
  } catch {}
}

try {
  const target = await waitForTarget();
  const cdp = new CdpClient(target.webSocketDebuggerUrl);
  await cdp.open();
  await cdp.send('Runtime.enable');
  await cdp.send('Page.enable');
  await delay(3000);
  await cdp.send('Page.bringToFront');
  await pressShortcut(cdp, 8 | 4, 'P', 'KeyP', 80);
  await delay(600);
  await typeText(cdp, 'Cursor NDJSON Ingest: Start Server');
  await delay(600);
  await pressEnter(cdp);
  const logPath = await waitForLog(
    'exthost/anysphere.cursor-ndjson-ingest/NDJSON Ingest.log',
    ['NDJSON ingest server started on port']
  );
  console.log(JSON.stringify({ ok: !!logPath, logPath }));
  await cdp.close();
} finally {
  await terminateChild();
}

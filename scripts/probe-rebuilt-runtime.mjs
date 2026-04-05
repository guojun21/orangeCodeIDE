#!/usr/bin/env node

import fs from 'fs';
import net from 'net';
import path from 'path';
import { spawn, spawnSync } from 'child_process';
import { getActiveProfile, sliceMatchesProfile } from './watch-rebuilt-slices.mjs';
import {
  createIsolatedProbeUserDataDir,
  getSharedRebuiltUserDataDir,
} from './rebuilt-user-data.mjs';

import { ROOT } from './paths.mjs';
const WORKSPACE_LABEL = path.basename(ROOT);
const RESULT_PATH = path.join(ROOT, 'mapped', 'rebuilt-runtime-probe.json');
const SLICES_MANIFEST_PATH = path.join(ROOT, 'mapped', 'rebuilt-slices.json');
const DEFAULT_PORT = 9333;
const DEFAULT_USER_DATA_DIR = getSharedRebuiltUserDataDir(
  'SHOPEECODE_REBUILT_PROBE_USER_DATA_DIR',
  'SHOPEECODE_REBUILT_USER_DATA_DIR'
);
const DEFAULT_SCREENSHOT_PATH = '/tmp/shopeecode-rebuilt-probe.png';
const RUNTIME_SMOKE_COMMANDS = [
  {
    id: 'new-untitled-file',
    title: 'File: New Untitled Text File',
    delayMs: 1200,
  },
  {
    id: 'new-terminal',
    title: 'Terminal: Create New Terminal',
    delayMs: 1600,
  },
];

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

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

function canBindPort(port) {
  return new Promise((resolve) => {
    const server = net.createServer();
    server.unref();
    server.once('error', () => resolve(false));
    server.listen(port, '127.0.0.1', () => {
      server.close(() => resolve(true));
    });
  });
}

async function resolveRemoteDebuggingPort(explicitPort) {
  if (explicitPort) {
    return Number(explicitPort);
  }

  if (await canBindPort(DEFAULT_PORT)) {
    return DEFAULT_PORT;
  }

  for (let attempt = 0; attempt < 40; attempt += 1) {
    const candidate = 9400 + Math.floor(Math.random() * 400);
    if (await canBindPort(candidate)) {
      return candidate;
    }
  }

  throw new Error('Unable to allocate a remote debugging port for probe runtime');
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

function globToRegExp(globPattern) {
  const escaped = globPattern.replace(/[|\\{}()[\]^$+?.]/g, '\\$&');
  return new RegExp(`^${escaped.replaceAll('*', '[^/]+')}$`);
}

function listLogValidatedSlices() {
  const manifest = JSON.parse(fs.readFileSync(SLICES_MANIFEST_PATH, 'utf8'));
  const activeProfile = getActiveProfile();
  return manifest.slices.filter(
    (slice) =>
      slice.validation_log_glob &&
      (slice.validation_log_contains?.length ?? 0) > 0 &&
      sliceMatchesProfile(slice, activeProfile)
  );
}

function listCommandTriggeredSlices() {
  const manifest = JSON.parse(fs.readFileSync(SLICES_MANIFEST_PATH, 'utf8'));
  const activeProfile = getActiveProfile();
  return manifest.slices.filter((slice) => slice.validation_command_palette_text && sliceMatchesProfile(slice, activeProfile));
}

function listBrowserViewProbeSlices() {
  const manifest = JSON.parse(fs.readFileSync(SLICES_MANIFEST_PATH, 'utf8'));
  const activeProfile = getActiveProfile();
  return manifest.slices.filter((slice) => slice.validation_browser_view_probe === true && sliceMatchesProfile(slice, activeProfile));
}

function findLatestLog(userDataDir, relativeGlobPattern) {
  if (!fs.existsSync(userDataDir)) {
    return null;
  }

  const matcher = globToRegExp(relativeGlobPattern);
  const matches = walk(userDataDir)
    .map((filePath) => ({
      filePath,
      relativePath: path.relative(userDataDir, filePath).split(path.sep).join('/'),
      mtimeMs: fs.statSync(filePath).mtimeMs,
    }))
    .filter((entry) => matcher.test(entry.relativePath))
    .sort((left, right) => right.mtimeMs - left.mtimeMs);

  return matches[0]?.filePath ?? null;
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
    await delay(500);
  }
  throw new Error(`Timed out waiting for ${url}`);
}

async function waitForTarget(timeoutMs = 60000) {
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

async function listTargets(timeoutMs = 5000) {
  return waitForJson(`http://127.0.0.1:${PORT}/json/list`, timeoutMs);
}

async function waitForNewPageTarget(knownTargetIds, timeoutMs = 15000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    const targets = await listTargets(2000);
    const target = targets.find(
      (entry) =>
        entry.type === 'page' &&
        entry.webSocketDebuggerUrl &&
        !knownTargetIds.has(entry.id)
    );
    if (target) {
      return target;
    }
    await delay(300);
  }
  throw new Error('Timed out waiting for a new browser view page target');
}

async function waitForExtensionLogs(slices, timeoutMs = 15000) {
  const start = Date.now();
  let latestResults = slices.map((slice) => ({
    sliceId: slice.slice_id,
    extensionId: slice.signature_extension_id ?? null,
    logPath: null,
    logContainsAll: false,
    missingLogLines: slice.validation_log_contains ?? [],
  }));

  while (Date.now() - start < timeoutMs) {
    latestResults = slices.map((slice) => {
      const logPath = findLatestLog(USER_DATA_DIR, slice.validation_log_glob);
      const logText = logPath ? fs.readFileSync(logPath, 'utf8') : '';
      const requiredLines = slice.validation_log_contains ?? [];
      const missingLogLines = requiredLines.filter((line) => !logText.includes(line));
      return {
        sliceId: slice.slice_id,
        extensionId: slice.signature_extension_id ?? null,
        logPath,
        logContainsAll: missingLogLines.length === 0,
        missingLogLines,
      };
    });

    if (latestResults.every((entry) => entry.logContainsAll)) {
      return latestResults;
    }
    await delay(500);
  }
  return latestResults;
}

class CdpClient {
  constructor(wsUrl) {
    this.ws = new WebSocket(wsUrl);
    this.nextId = 1;
    this.pending = new Map();
    this.events = [];
  }

  async open() {
    await new Promise((resolve, reject) => {
      this.ws.addEventListener('open', resolve, { once: true });
      this.ws.addEventListener('error', reject, { once: true });
    });

    this.ws.addEventListener('message', (event) => {
      const message = JSON.parse(event.data.toString());
      if (typeof message.id === 'number') {
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
        return;
      }
      this.events.push(message);
    });
  }

  async send(method, params = {}) {
    const id = this.nextId++;
    const payload = { id, method, params };
    const response = new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
    });
    this.ws.send(JSON.stringify(payload));
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
    await delay(20);
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

async function triggerCommandPaletteCommand(cdp, commandTitle) {
  await cdp.send('Page.bringToFront');
  await pressShortcut(cdp, 8 | 4, 'P', 'KeyP', 80);
  await delay(600);
  await typeText(cdp, commandTitle);
  await delay(600);
  await pressEnter(cdp);
}

async function triggerDriverCommand(cdp, commandId) {
  const result = await cdp.send('Runtime.evaluate', {
    expression: `
      (() => {
        window.driver.commandService.executeCommand(${JSON.stringify(commandId)});
        return true;
      })()
    `,
    returnByValue: true,
    awaitPromise: false,
  });
  return result.result?.value ?? null;
}

async function runRuntimeSmokeCommands(cdp) {
  const results = [];
  for (const command of RUNTIME_SMOKE_COMMANDS) {
    await triggerCommandPaletteCommand(cdp, command.title);
    await delay(command.delayMs);
    results.push({
      id: command.id,
      commandTitle: command.title,
    });
  }
  return results;
}

async function evaluateBrowserViewRuntime(cdp) {
  const result = await cdp.send('Runtime.evaluate', {
    expression: `(() => JSON.stringify({
      title: document.title,
      url: location.href,
      readyState: document.readyState,
      hasCursorBrowser: !!window.cursorBrowser,
      canSend: typeof window.cursorBrowser?.send === 'function',
      webAuthnPolyfillApplied: !!navigator.credentials?.__webAuthnPolyfillApplied,
      hasCredentialsCreate: typeof navigator.credentials?.create === 'function',
      hasCredentialsGet: typeof navigator.credentials?.get === 'function'
    }))()`,
    returnByValue: true,
  });

  return JSON.parse(result.result.value);
}

async function waitForBrowserViewProbe(cdp, timeoutMs = 10000) {
  const start = Date.now();
  let last = null;
  while (Date.now() - start < timeoutMs) {
    last = await evaluateBrowserViewRuntime(cdp);
    if (
      last.readyState === 'complete' &&
      last.hasCursorBrowser === true &&
      last.canSend === true &&
      last.webAuthnPolyfillApplied === true
    ) {
      return last;
    }
    await delay(250);
  }
  return last;
}

async function evaluateBrowserViewFallback(cdp) {
  const result = await cdp.send('Runtime.evaluate', {
    expression: `(() => JSON.stringify({
      browserTabClassCount: document.querySelectorAll('.browser-editor-tab').length,
      browserTabTextMatches: Array.from(document.querySelectorAll('.tabs-container .tab, .editor-group-container .tab'))
        .map((node) => node.textContent?.trim() ?? '')
        .filter(Boolean)
        .some((text) => /browser tab/i.test(text)),
      tabTexts: Array.from(document.querySelectorAll('.tabs-container .tab, .editor-group-container .tab'))
        .map((node) => node.textContent?.trim() ?? '')
        .filter(Boolean)
        .slice(0, 20)
    }))()`,
    returnByValue: true,
  });

  return JSON.parse(result.result.value);
}

async function runBrowserViewProbe(slice, knownTargetIds, mainCdp) {
  try {
    const target = await waitForNewPageTarget(
      knownTargetIds,
      slice.validation_browser_view_probe_timeout_ms ?? 15000
    );
    knownTargetIds.add(target.id);

    const browserCdp = new CdpClient(target.webSocketDebuggerUrl);
    await browserCdp.open();
    await browserCdp.send('Runtime.enable');
    await browserCdp.send('Page.enable');
    const runtime = await waitForBrowserViewProbe(
      browserCdp,
      slice.validation_browser_view_probe_timeout_ms ?? 10000
    );
    await browserCdp.close();

    return {
      sliceId: slice.slice_id,
      mode: 'page-target',
      target: {
        id: target.id,
        title: target.title,
        url: target.url,
      },
      runtime,
      passed:
        runtime?.readyState === 'complete' &&
        runtime?.hasCursorBrowser === true &&
        runtime?.canSend === true &&
        runtime?.webAuthnPolyfillApplied === true,
    };
  } catch (error) {
    const fallback = await evaluateBrowserViewFallback(mainCdp);
    return {
      sliceId: slice.slice_id,
      mode: 'main-workbench-fallback',
      target: null,
      runtime: fallback,
      error: error instanceof Error ? error.message : String(error),
      passed:
        fallback.browserTabClassCount >= 1 ||
        fallback.browserTabTextMatches === true,
    };
  }
}

const args = parseArgs(process.argv);
const PORT = await resolveRemoteDebuggingPort(args['remote-debugging-port']);
const EXPLICIT_USER_DATA_DIR = args['user-data-dir'] ?? null;
const USER_DATA_DIR = EXPLICIT_USER_DATA_DIR ?? createIsolatedProbeUserDataDir({
  sourceDir: DEFAULT_USER_DATA_DIR,
  prefix: 'probe',
});
const SCREENSHOT_PATH = args['screenshot-path'] ?? DEFAULT_SCREENSHOT_PATH;
const bootstrapAuth = args['bootstrap-auth-from-thalamus'] === true;
const bootstrapAuthEnvFile = args['thalamus-env'];
const freshUserData = args['fresh-user-data'] === true || process.env.SHOPEECODE_REBUILT_FRESH_USER_DATA === '1';
const USING_SHARED_USER_DATA =
  path.resolve(USER_DATA_DIR) === path.resolve(DEFAULT_USER_DATA_DIR);

if (freshUserData) {
  fs.rmSync(USER_DATA_DIR, { recursive: true, force: true });
}
fs.mkdirSync(path.dirname(USER_DATA_DIR), { recursive: true });

let authBootstrap = null;
if (bootstrapAuth) {
  const bootstrapArgs = [
    path.join(ROOT, 'scripts', 'bootstrap-auth-from-thalamus.mjs'),
    '--user-data-dir',
    USER_DATA_DIR,
  ];
  if (bootstrapAuthEnvFile) {
    bootstrapArgs.push('--env-file', bootstrapAuthEnvFile);
  }

  const bootstrapResult = spawnSync(process.execPath, bootstrapArgs, {
    cwd: ROOT,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  });

  if (bootstrapResult.status !== 0) {
    throw new Error(
      bootstrapResult.stderr.trim() || 'bootstrap-auth-from-thalamus.mjs failed'
    );
  }

  const outputLines = bootstrapResult.stdout
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);
  authBootstrap = JSON.parse(outputLines.at(-1) ?? '{}');
}

const child = spawn('bash', [path.join(ROOT, 'run-electron-rebuilt.sh'), `--remote-debugging-port=${PORT}`], {
  cwd: ROOT,
  detached: true,
  env: {
    ...process.env,
    SHOPEECODE_REBUILT_USER_DATA_DIR: USER_DATA_DIR,
    SHOPEECODE_REBUILT_SKIP_PREPARE: '1',
  },
  stdio: ['ignore', 'pipe', 'pipe'],
});

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

try {
  const versionInfo = await waitForJson(`http://127.0.0.1:${PORT}/json/version`);
  const target = await waitForTarget();
  const cdp = new CdpClient(target.webSocketDebuggerUrl);
  await cdp.open();
  await cdp.send('Runtime.enable');
  await cdp.send('Page.enable');
  await delay(3000);
  const commandTriggeredSlices = listCommandTriggeredSlices();
  const browserViewProbeSliceIds = new Set(listBrowserViewProbeSlices().map((slice) => slice.slice_id));
  const knownTargetIds = new Set((await listTargets()).map((entry) => entry.id));
  const commandResults = [];
  const browserViewProbes = [];
  for (const slice of commandTriggeredSlices) {
    await delay(slice.validation_command_startup_delay_ms ?? 2500);
    if (slice.validation_command_id) {
      await triggerDriverCommand(cdp, slice.validation_command_id);
    } else {
      await triggerCommandPaletteCommand(cdp, slice.validation_command_palette_text);
    }
    commandResults.push({
      sliceId: slice.slice_id,
      commandId: slice.validation_command_id ?? null,
      commandTitle: slice.validation_command_palette_text,
    });
    await delay(slice.validation_command_delay_ms ?? 1200);
    if (browserViewProbeSliceIds.has(slice.slice_id)) {
      browserViewProbes.push(await runBrowserViewProbe(slice, knownTargetIds, cdp));
    }
  }
  const runtimeSmokeCommands = await runRuntimeSmokeCommands(cdp);
  const extensionLogChecks = await waitForExtensionLogs(listLogValidatedSlices());

  const evaluation = await cdp.send('Runtime.evaluate', {
    expression: `(() => {
      const describeNode = (id) => {
        const node = document.getElementById(id);
        if (!node) {
          return null;
        }
        const style = window.getComputedStyle(node);
        const rect = node.getBoundingClientRect();
        return {
          id,
          text: node.textContent,
          connected: node.isConnected,
          display: style.display,
          visibility: style.visibility,
          opacity: style.opacity,
          zIndex: style.zIndex,
          position: style.position,
          background: style.backgroundColor,
          color: style.color,
          rect: {
            x: rect.x,
            y: rect.y,
            width: rect.width,
            height: rect.height
          }
        };
      };

      const countMatches = (...selectors) =>
        selectors.reduce((max, selector) => Math.max(max, document.querySelectorAll(selector).length), 0);

      const bridge = globalThis.vscode ?? null;
      const loginButtons = Array.from(document.querySelectorAll('button'))
        .map((button) => button.textContent?.trim() ?? '')
        .filter((text) => text === 'Log In' || text === 'Sign Up');
      const functionalChecks = {
        bridge: {
          exists: !!bridge,
          hasContextResolveConfiguration: typeof bridge?.context?.resolveConfiguration === 'function',
          hasIpcRendererSend: typeof bridge?.ipcRenderer?.send === 'function',
          processPlatform: bridge?.process?.platform ?? null
        },
        editor: {
          tabCount: countMatches('.tabs-container .tab', '.editor-group-container .tab'),
          surfaceCount: countMatches(
            '.editor-instance .monaco-editor',
            '.editor-container .monaco-editor',
            '.monaco-editor textarea.inputarea',
            '.monaco-editor'
          )
        },
        terminal: {
          nodeCount: countMatches('.terminal-wrapper', '.terminal-instance', '.xterm', '.integrated-terminal', '.terminal-tab')
        },
        explorer: {
          itemCount: countMatches(
            '[id="workbench.view.explorer"] .monaco-list-row',
            '[data-view-id="workbench.explorer.fileView"] .monaco-list-row',
            '.explorer-folders-view .monaco-list-row',
            '.explorer-viewlet .monaco-list-row',
            '.explorer-viewlet .label-name'
          ),
          workspaceLabelVisible: document.body.innerText.includes(${JSON.stringify(WORKSPACE_LABEL)}) || document.body.innerText.includes(${JSON.stringify(WORKSPACE_LABEL.toUpperCase())}),
          filesViewVisible: !!document.querySelector('[id="workbench.view.explorer"], [data-view-id="workbench.explorer.fileView"], .explorer-viewlet, .explorer-folders-view')
        }
      };
      functionalChecks.passed =
        functionalChecks.bridge.exists &&
        functionalChecks.bridge.hasContextResolveConfiguration &&
        functionalChecks.bridge.hasIpcRendererSend &&
        (functionalChecks.editor.tabCount >= 1 || functionalChecks.editor.surfaceCount >= 1) &&
        (functionalChecks.explorer.itemCount >= 1 ||
          functionalChecks.explorer.workspaceLabelVisible ||
          functionalChecks.explorer.filesViewVisible);
      functionalChecks.terminal.advisory = functionalChecks.terminal.nodeCount >= 1;

      return JSON.stringify({
      title: document.title,
      readyState: document.readyState,
      hasWorkbench: !!document.querySelector('.monaco-workbench'),
      loginButtons,
      authPromptVisible: document.body.innerText.includes('Cursor’s AI features require you to be logged in') ||
        document.body.innerText.includes('Cursor\\'s AI features require you to be logged in'),
      workbenchBadgeMarker: globalThis.__SHOPEE_WORKBENCH_REBUILT__ ?? null,
      preloadBridgeInfo: globalThis.vscode?.__shopeeBridgeInfo ?? null,
      statusPanelMarker: globalThis.__SHOPEE_WORKBENCH_STATUS_PANEL__ ?? null,
      badgeNode: !!document.getElementById('__shopee_workbench_rebuilt_badge'),
      statusPanelNode: !!document.getElementById('__shopee_workbench_status_panel'),
      badgeNodeInfo: describeNode('__shopee_workbench_rebuilt_badge'),
      statusPanelNodeInfo: describeNode('__shopee_workbench_status_panel'),
      functionalChecks
    });
    })()`,
    returnByValue: true,
  });

  const screenshot = await cdp.send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(SCREENSHOT_PATH, Buffer.from(screenshot.data, 'base64'));

  const result = {
    generatedAt: new Date().toISOString(),
    userDataDir: USER_DATA_DIR,
    sharedUserDataDir: DEFAULT_USER_DATA_DIR,
    isolatedUserData: !USING_SHARED_USER_DATA,
    versionInfo,
    authBootstrap,
    target: {
      id: target.id,
      title: target.title,
      url: target.url,
    },
    runtime: JSON.parse(evaluation.result.value),
    commandResults,
    browserViewProbes,
    browserViewProbesSummary: {
      totalChecked: browserViewProbes.length,
      passedCount: browserViewProbes.filter((entry) => entry.passed).length,
      failedSliceIds: browserViewProbes.filter((entry) => !entry.passed).map((entry) => entry.sliceId),
    },
    runtimeSmokeCommands,
    extensionLogs: extensionLogChecks,
    extensionLogsSummary: {
      totalChecked: extensionLogChecks.length,
      passedCount: extensionLogChecks.filter((entry) => entry.logContainsAll).length,
      failedSliceIds: extensionLogChecks.filter((entry) => !entry.logContainsAll).map((entry) => entry.sliceId),
      checkedSliceIds: extensionLogChecks.map((entry) => entry.sliceId),
    },
    screenshotPath: SCREENSHOT_PATH,
    stdout,
    stderr,
  };

  fs.writeFileSync(RESULT_PATH, JSON.stringify(result, null, 2) + '\n');
  console.log(RESULT_PATH);

  await cdp.close();
} finally {
  await terminateChild();
  if (EXPLICIT_USER_DATA_DIR === null) {
    fs.rmSync(USER_DATA_DIR, { recursive: true, force: true });
  }
}

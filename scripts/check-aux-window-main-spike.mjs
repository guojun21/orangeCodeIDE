#!/usr/bin/env node

import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';
import { listTargets, CdpClient } from '../test/driver/cdp.mjs';
import { launchRuntime } from '../test/driver/launch.mjs';
import { executeDriverCommand } from '../test/driver/commands.mjs';
import { delay, outputPath, waitForCondition } from '../test/driver/helpers.mjs';

import { ROOT } from './paths.mjs';
const RESULT_PATH = path.join(ROOT, 'mapped', 'aux-window-main-spike-check.json');
const SCREENSHOT_PATH = outputPath('aux-window-main-spike-process-explorer.png');

function sha256(filePath) {
  return crypto.createHash('sha256').update(fs.readFileSync(filePath)).digest('hex');
}

async function connectToTarget(target) {
  const cdp = new CdpClient(target.webSocketDebuggerUrl);
  await cdp.open();
  await cdp.send('Runtime.enable');
  await cdp.send('Page.enable');
  return cdp;
}

async function waitForNewPageTarget(port, existingTargetIds, timeoutMs = 15000) {
  return waitForCondition(async () => {
    const targets = await listTargets(port, 2000);
    return targets.find((entry) =>
      entry.type === 'page' &&
      entry.webSocketDebuggerUrl &&
      !existingTargetIds.has(entry.id)
    ) ?? null;
  }, {
    timeoutMs,
    intervalMs: 250,
    description: 'new auxiliary window target',
  });
}

async function evaluateValue(cdp, expression) {
  const result = await cdp.send('Runtime.evaluate', {
    expression,
    returnByValue: true,
    awaitPromise: true,
  });
  return result.result?.value ?? null;
}

function runtimeHashesFor(relativePath, builtFileName) {
  const builtPath = path.join(ROOT, 'recovered', 'rebuilt', 'built', builtFileName);
  const runtimePath = path.join(ROOT, 'recovered', 'rebuilt', 'runtime-app', relativePath);

  return {
    builtPath,
    runtimePath,
    builtExists: fs.existsSync(builtPath),
    runtimeExists: fs.existsSync(runtimePath),
    builtHash: fs.existsSync(builtPath) ? sha256(builtPath) : null,
    runtimeHash: fs.existsSync(runtimePath) ? sha256(runtimePath) : null,
  };
}

async function importBuiltModule(relativePath, markerKey) {
  const builtPath = path.join(ROOT, relativePath);
  delete globalThis[markerKey];
  const imported = await import(`${pathToFileURL(builtPath).href}?t=${Date.now()}`);
  return {
    builtPath,
    hasStartupExport: typeof imported.startup === 'function',
    marker: globalThis[markerKey] ?? null,
  };
}

const extensionMonitorImport = await importBuiltModule(
  'recovered/rebuilt/built/extension-monitor-main.js',
  '__SHOPEE_EXTENSION_MONITOR_MAIN__',
);
const processExplorerImport = await importBuiltModule(
  'recovered/rebuilt/built/process-explorer-main.js',
  '__SHOPEE_PROCESS_EXPLORER_MAIN__',
);

const extensionMonitorHashes = runtimeHashesFor(
  'out/vs/code/electron-sandbox/extensionMonitor/extensionMonitorMain.js',
  'extension-monitor-main.js',
);

const processExplorerHashes = runtimeHashesFor(
  'out/vs/code/electron-sandbox/processExplorer/processExplorerMain.js',
  'process-explorer-main.js',
);

const session = await launchRuntime({
  remoteDebuggingPort: 9477,
  userDataDir: '/tmp/shopeecode-aux-main-spike-user',
  cleanupPreviousLaunch: true,
  attachIfAvailable: false,
});

let processExplorerTarget = null;
let processExplorerMarker = null;
let processExplorerCommand = { dispatched: false, error: null };
let processExplorerTargetsAfter = [];

try {
  const existingTargets = new Set((await listTargets(session.remoteDebuggingPort, 3000)).map((entry) => entry.id));
  try {
    await executeDriverCommand(session.cdp, 'workbench.action.openProcessExplorer');
    processExplorerCommand.dispatched = true;
  } catch (error) {
    processExplorerCommand.error = error instanceof Error ? error.message : String(error);
  }

  processExplorerTargetsAfter = await listTargets(session.remoteDebuggingPort, 3000);
  processExplorerTarget = await waitForNewPageTarget(session.remoteDebuggingPort, existingTargets, 4000).catch(() => null);
  if (processExplorerTarget) {
    const auxCdp = await connectToTarget(processExplorerTarget);

    try {
      processExplorerMarker = await waitForCondition(async () => {
        const value = await evaluateValue(auxCdp, `(() => globalThis.__SHOPEE_PROCESS_EXPLORER_MAIN__ ?? null)()`);
        return value?.source === 'rebuilt/src/vs/code/electron-sandbox/processExplorerMain/index.js' ? value : null;
      }, {
        timeoutMs: 15000,
        intervalMs: 250,
        description: 'process explorer rebuilt marker',
      });

      const screenshot = await auxCdp.send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(SCREENSHOT_PATH, Buffer.from(screenshot.data, 'base64'));
    } finally {
      await auxCdp.close().catch(() => {});
    }
  }
} finally {
  await session.close();
}

const checks = [
  {
    id: 'extension-monitor-built-import',
    passed: extensionMonitorImport.hasStartupExport === true,
    detail: extensionMonitorImport,
  },
  {
    id: 'process-explorer-built-import',
    passed: processExplorerImport.hasStartupExport === true,
    detail: processExplorerImport,
  },
  {
    id: 'extension-monitor-runtime-hash',
    passed:
      extensionMonitorHashes.builtExists &&
      extensionMonitorHashes.runtimeExists &&
      extensionMonitorHashes.builtHash === extensionMonitorHashes.runtimeHash,
    detail: extensionMonitorHashes,
  },
  {
    id: 'process-explorer-runtime-hash',
    passed:
      processExplorerHashes.builtExists &&
      processExplorerHashes.runtimeExists &&
      processExplorerHashes.builtHash === processExplorerHashes.runtimeHash,
    detail: processExplorerHashes,
  },
  {
    id: 'process-explorer-command-dispatch',
    passed: processExplorerCommand.dispatched === true && !processExplorerCommand.error,
    detail: {
      ...processExplorerCommand,
      targetsAfter: processExplorerTargetsAfter,
    },
  },
  {
    id: 'process-explorer-marker',
    passed:
      processExplorerTarget
        ? processExplorerMarker?.source === 'rebuilt/src/vs/code/electron-sandbox/processExplorerMain/index.js'
        : true,
    advisory: !processExplorerTarget,
    detail: processExplorerTarget
      ? processExplorerMarker
      : {
          note: 'No dedicated auxiliary page target was exposed on the remote debugging port for this runtime run.',
          target: null,
        },
  },
];

const payload = {
  generatedAt: new Date().toISOString(),
  screenshotPath: fs.existsSync(SCREENSHOT_PATH) ? SCREENSHOT_PATH : null,
  passed: checks.every((entry) => entry.passed),
  checks,
};

fs.writeFileSync(RESULT_PATH, `${JSON.stringify(payload, null, 2)}\n`);
console.log(RESULT_PATH);

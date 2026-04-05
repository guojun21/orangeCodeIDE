#!/usr/bin/env node

import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';
import { launchRuntime } from '../test/driver/launch.mjs';
import { ensureQuickInputHidden } from '../test/driver/commands.mjs';
import { waitForCondition } from '../test/driver/helpers.mjs';

import { ROOT } from './paths.mjs';
const PHASE = 'rebuilt';
const RESULT_PATH = path.join(ROOT, 'mapped', 'ptyhost-spike-check.json');
const MARKER_OUTPUT_PATH = path.join(ROOT, 'mapped', 'ptyhost-spike-marker.json');
const TARGET_RUNTIME_BUNDLE = 'out/vs/platform/terminal/node/ptyHostMain.js';
const BUILT_PATH = path.join(ROOT, 'recovered', PHASE, 'built', 'pty-host-main.js');
const RUNTIME_PATH = path.join(ROOT, 'recovered', PHASE, 'runtime-app', TARGET_RUNTIME_BUNDLE);

function runNodeScript(scriptName, args = []) {
  const result = spawnSync(process.execPath, [path.join(ROOT, 'scripts', scriptName), ...args], {
    cwd: ROOT,
    stdio: 'inherit',
  });

  if ((result.status ?? 1) !== 0) {
    throw new Error(`${scriptName} failed with exit code ${result.status ?? 1}`);
  }
}

function sha256(filePath) {
  return crypto.createHash('sha256').update(fs.readFileSync(filePath)).digest('hex');
}

const originalRuntimeBytes = fs.readFileSync(RUNTIME_PATH);

runNodeScript('prepare-rebuilt-runtime.mjs');
runNodeScript('build-rebuilt-slice.mjs', ['--slice', 'pty-host-main', '--phase', PHASE]);

fs.mkdirSync(path.dirname(RUNTIME_PATH), { recursive: true });
fs.copyFileSync(BUILT_PATH, RUNTIME_PATH);
fs.rmSync(MARKER_OUTPUT_PATH, { force: true });

let session;

try {
  process.env.SHOPEECODE_ENTRYPOINT_MARKER_FILE = MARKER_OUTPUT_PATH;

  session = await launchRuntime({
    skipPrepare: true,
    cleanupPreviousLaunch: true,
  });

  await ensureQuickInputHidden(session.cdp);
  const commandDispatch = await session.cdp.send('Runtime.evaluate', {
    expression: `
      (() => {
        window.driver.commandService.executeCommand('workbench.action.terminal.newInActiveWorkspace');
        return true;
      })()
    `,
    returnByValue: true,
    awaitPromise: false,
  });
  const commandResult = commandDispatch.result?.value ?? null;

  const marker = await waitForCondition(async () => {
    if (!fs.existsSync(MARKER_OUTPUT_PATH)) {
      return null;
    }

    return JSON.parse(fs.readFileSync(MARKER_OUTPUT_PATH, 'utf8'));
  }, {
    timeoutMs: 15000,
    description: 'ptyHost marker file written',
  });

  const terminalState = await waitForCondition(async () => {
    const state = await session.evaluateJson(`({
      terminalCount: Math.max(
        document.querySelectorAll('.terminal-wrapper').length,
        document.querySelectorAll('.terminal-instance').length,
        document.querySelectorAll('.xterm').length,
        document.querySelectorAll('.integrated-terminal').length,
        document.querySelectorAll('.terminal-tab').length
      ),
      terminalText: document.querySelector('.xterm')?.textContent ?? null
    })`);

    return state.terminalCount >= 1 ? state : null;
  }, {
    timeoutMs: 8000,
    description: 'terminal visible with ptyHost spike',
  }).catch(() => null);

  const builtHash = sha256(BUILT_PATH);
  const runtimeHash = sha256(RUNTIME_PATH);
  const markerExists = !!marker;

  const checks = [
    {
      id: 'terminal-command-dispatched',
      passed: commandResult !== false,
      detail: { commandId: 'workbench.action.terminal.newInActiveWorkspace', commandResult },
    },
    {
      id: 'marker-file-written',
      passed: markerExists,
      detail: { markerPath: MARKER_OUTPUT_PATH },
    },
    {
      id: 'marker-source',
      passed: marker?.source === 'rebuilt/src/vs/platform/terminal/node/ptyHostMain/index.js',
      detail: marker ?? null,
    },
    {
      id: 'direct-runtime-hash',
      passed: builtHash === runtimeHash,
      detail: { builtHash, runtimeHash, builtPath: BUILT_PATH, runtimePath: RUNTIME_PATH },
    },
    {
      id: 'terminal-opened',
      passed: (terminalState?.terminalCount ?? 0) >= 1,
      detail: terminalState,
      advisory: true,
    },
  ];

  const payload = {
    generatedAt: new Date().toISOString(),
    profile: 'stable+ptyhost-spike',
    passed: checks.every((entry) => entry.passed || entry.advisory === true),
    builtPath: BUILT_PATH,
    runtimePath: RUNTIME_PATH,
    markerOutputPath: MARKER_OUTPUT_PATH,
    checks,
  };

  fs.writeFileSync(RESULT_PATH, JSON.stringify(payload, null, 2) + '\n');
  console.log(RESULT_PATH);
} finally {
  delete process.env.SHOPEECODE_ENTRYPOINT_MARKER_FILE;
  if (session) {
    await session.close();
  }
  fs.writeFileSync(RUNTIME_PATH, originalRuntimeBytes);
}

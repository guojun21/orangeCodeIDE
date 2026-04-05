#!/usr/bin/env node

import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { spawn, spawnSync } from 'child_process';
import { waitForCondition, delay } from '../test/driver/helpers.mjs';

import { ROOT } from './paths.mjs';
const PHASE = 'rebuilt';
const PROFILE = 'watcher-spike';
const RESULT_PATH = path.join(ROOT, 'mapped', 'watcher-spike-check.json');
const MARKER_OUTPUT_PATH = path.join(ROOT, 'mapped', 'watcher-spike-marker.json');
const BUILT_PATH = path.join(ROOT, 'recovered', PHASE, 'built', 'watcher-main.js');
const RUNTIME_PATH = path.join(ROOT, 'recovered', PHASE, 'runtime-app', 'out', 'vs', 'platform', 'files', 'node', 'watcher', 'watcherMain.js');

function runNodeScript(scriptName, args = [], env = {}) {
  const result = spawnSync(process.execPath, [path.join(ROOT, 'scripts', scriptName), ...args], {
    cwd: ROOT,
    stdio: 'inherit',
    env: {
      ...process.env,
      SHOPEECODE_REBUILT_PROFILE: PROFILE,
      ...env,
    },
  });

  if ((result.status ?? 1) !== 0) {
    throw new Error(`${scriptName} failed with exit code ${result.status ?? 1}`);
  }
}

function sha256(filePath) {
  return crypto.createHash('sha256').update(fs.readFileSync(filePath)).digest('hex');
}

async function terminateChild(child) {
  if (!child || child.exitCode !== null || child.killed) {
    return;
  }

  child.kill('SIGTERM');

  await Promise.race([
    new Promise((resolve) => child.once('exit', resolve)),
    delay(2000),
  ]);

  if (child.exitCode === null && !child.killed) {
    child.kill('SIGKILL');
    await Promise.race([
      new Promise((resolve) => child.once('exit', resolve)),
      delay(2000),
    ]);
  }
}

runNodeScript('prepare-rebuilt-runtime.mjs');
fs.rmSync(MARKER_OUTPUT_PATH, { force: true });

const builtHash = fs.existsSync(BUILT_PATH) ? sha256(BUILT_PATH) : null;
const runtimeHash = fs.existsSync(RUNTIME_PATH) ? sha256(RUNTIME_PATH) : null;

const stdout = [];
const stderr = [];

const child = spawn(process.execPath, [RUNTIME_PATH], {
  cwd: ROOT,
  env: {
    ...process.env,
    SHOPEECODE_REBUILT_PROFILE: PROFILE,
    SHOPEECODE_ENTRYPOINT_MARKER_FILE: MARKER_OUTPUT_PATH,
    VSCODE_HANDLES_UNCAUGHT_ERRORS: 'true',
  },
  stdio: ['ignore', 'pipe', 'pipe'],
});

child.stdout.on('data', (chunk) => stdout.push(String(chunk)));
child.stderr.on('data', (chunk) => stderr.push(String(chunk)));

let marker = null;
let checks = [];

try {
  marker = await waitForCondition(async () => {
    if (!fs.existsSync(MARKER_OUTPUT_PATH)) {
      return null;
    }

    return JSON.parse(fs.readFileSync(MARKER_OUTPUT_PATH, 'utf8'));
  }, {
    timeoutMs: 15000,
    description: 'watcher marker file written',
  });

  await delay(750);

  checks = [
    {
      id: 'process-started',
      passed: typeof child.pid === 'number' && child.pid > 0,
      detail: { pid: child.pid ?? null },
    },
    {
      id: 'marker-file-written',
      passed: !!marker,
      detail: { markerPath: MARKER_OUTPUT_PATH },
    },
    {
      id: 'marker-source',
      passed: marker?.source === 'rebuilt/src/vs/platform/files/node/watcherMain/index.js',
      detail: marker ?? null,
    },
    {
      id: 'import-resolved',
      passed: typeof marker?.importResolvedAt === 'string' && Array.isArray(marker?.originalExportKeys),
      detail: marker ?? null,
    },
    {
      id: 'process-still-running',
      passed: (child.exitCode === null && !child.killed) || child.exitCode === 0,
      detail: { exitCode: child.exitCode, killed: child.killed, acceptableExitCodes: [0, null] },
    },
    {
      id: 'direct-runtime-hash',
      passed: !!builtHash && !!runtimeHash && builtHash === runtimeHash,
      detail: { builtPath: BUILT_PATH, runtimePath: RUNTIME_PATH, builtHash, runtimeHash },
    },
    {
      id: 'stderr-empty',
      passed: stderr.join('').trim().length === 0,
      detail: { stderr: stderr.join('').trim() },
      advisory: true,
    },
  ];
} finally {
  await terminateChild(child);
}

const payload = {
  generatedAt: new Date().toISOString(),
  profile: PROFILE,
  passed: checks.every((entry) => entry.passed || entry.advisory === true),
  builtPath: BUILT_PATH,
  runtimePath: RUNTIME_PATH,
  markerOutputPath: MARKER_OUTPUT_PATH,
  stdout: stdout.join('').trim(),
  stderr: stderr.join('').trim(),
  checks,
};

fs.writeFileSync(RESULT_PATH, JSON.stringify(payload, null, 2) + '\n');
console.log(RESULT_PATH);

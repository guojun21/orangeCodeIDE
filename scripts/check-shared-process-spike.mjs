#!/usr/bin/env node

import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { spawn, spawnSync } from 'child_process';
import { waitForCondition, delay } from '../test/driver/helpers.mjs';
import { createIsolatedProbeUserDataDir, DEFAULT_SHARED_REBUILT_USER_DATA_DIR } from './rebuilt-user-data.mjs';

import { ROOT } from './paths.mjs';
const PHASE = 'rebuilt';
const PROFILE = 'shared-process-spike';
const RESULT_PATH = path.join(ROOT, 'mapped', 'shared-process-spike-check.json');
const MARKER_OUTPUT_PATH = path.join(ROOT, 'mapped', 'shared-process-spike-marker.json');
const BUILT_PATH = path.join(ROOT, 'recovered', PHASE, 'built', 'shared-process-runtime.js');
const RUNTIME_PATH = path.join(ROOT, 'recovered', PHASE, 'runtime-app', 'out', 'vs', 'code', 'electron-utility', 'sharedProcess', 'sharedProcessMain.js');

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

function runStablePrepare() {
  const result = spawnSync(process.execPath, [path.join(ROOT, 'scripts', 'prepare-rebuilt-runtime.mjs')], {
    cwd: ROOT,
    stdio: 'inherit',
    env: {
      ...process.env,
      SHOPEECODE_REBUILT_PROFILE: 'stable',
    },
  });

  if ((result.status ?? 1) !== 0) {
    throw new Error(`restore stable runtime failed with exit code ${result.status ?? 1}`);
  }
}

function sha256(filePath) {
  return crypto.createHash('sha256').update(fs.readFileSync(filePath)).digest('hex');
}

async function terminateChild(child) {
  if (!child || child.exitCode !== null || child.killed) {
    return;
  }

  try {
    process.kill(-child.pid, 'SIGTERM');
  } catch {}

  await Promise.race([
    new Promise((resolve) => child.once('exit', resolve)),
    delay(3000),
  ]);

  if (child.exitCode === null && !child.killed) {
    try {
      process.kill(-child.pid, 'SIGKILL');
    } catch {}

    await Promise.race([
      new Promise((resolve) => child.once('exit', resolve)),
      delay(3000),
    ]);
  }
}

await runNodeScript('prepare-rebuilt-runtime.mjs');

fs.rmSync(MARKER_OUTPUT_PATH, { force: true });

const builtHash = fs.existsSync(BUILT_PATH) ? sha256(BUILT_PATH) : null;
const runtimeHash = fs.existsSync(RUNTIME_PATH) ? sha256(RUNTIME_PATH) : null;
const userDataDir = createIsolatedProbeUserDataDir({
  sourceDir: DEFAULT_SHARED_REBUILT_USER_DATA_DIR,
  prefix: 'sps',
});

let child = null;
let marker = null;
let checks = [];
let stdout = '';
let stderr = '';
let exitCode = null;
let signalCode = null;

try {
  child = spawn('bash', [path.join(ROOT, 'run-electron-rebuilt.sh'), ROOT], {
    cwd: ROOT,
    detached: true,
    env: {
      ...process.env,
      SHOPEECODE_REBUILT_PROFILE: PROFILE,
      SHOPEECODE_REBUILT_USER_DATA_DIR: userDataDir,
      SHOPEECODE_REBUILT_SKIP_PREPARE: '1',
      SHOPEECODE_ENTRYPOINT_MARKER_FILE: MARKER_OUTPUT_PATH,
      VSCODE_HANDLES_UNCAUGHT_ERRORS: 'true',
    },
    stdio: ['ignore', 'pipe', 'pipe'],
  });

  child.stdout.on('data', (chunk) => {
    stdout += chunk.toString();
  });
  child.stderr.on('data', (chunk) => {
    stderr += chunk.toString();
  });
  child.on('exit', (code, signal) => {
    exitCode = code;
    signalCode = signal;
  });

  marker = await waitForCondition(async () => {
    if (fs.existsSync(MARKER_OUTPUT_PATH)) {
      const value = JSON.parse(fs.readFileSync(MARKER_OUTPUT_PATH, 'utf8'));
      if (
        value?.source === 'rebuilt/src/vs/code/electron-utility/sharedProcess/sharedProcessMain/index.js' &&
        (typeof value.importResolvedAt === 'string' || typeof value.importFailedAt === 'string')
      ) {
        return value;
      }
    }

    if (exitCode !== null || signalCode !== null) {
      throw new Error(`runtime exited before shared-process marker matured (code=${exitCode}, signal=${signalCode})`);
    }

    return null;
  }, {
    timeoutMs: 30000,
    description: 'shared process marker matured',
  });

  checks = [
    {
      id: 'runtime-started',
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
      passed: marker?.source === 'rebuilt/src/vs/code/electron-utility/sharedProcess/sharedProcessMain/index.js',
      detail: marker ?? null,
    },
    {
      id: 'parent-port-available',
      passed: marker?.parentPortBridged === true || marker?.processParentPortAvailable === true,
      detail: marker ?? null,
    },
    {
      id: 'import-resolved',
      passed: typeof marker?.importResolvedAt === 'string' && Array.isArray(marker?.originalExportKeys) && marker.originalExportKeys.includes('main'),
      detail: marker ?? null,
    },
    {
      id: 'runtime-process-still-running',
      passed: exitCode === null && signalCode === null,
      detail: { exitCode, signalCode },
    },
    {
      id: 'direct-runtime-hash',
      passed: !!builtHash && !!runtimeHash && builtHash === runtimeHash,
      detail: { builtPath: BUILT_PATH, runtimePath: RUNTIME_PATH, builtHash, runtimeHash },
    },
    {
      id: 'stderr-empty',
      passed: stderr.trim().length === 0,
      detail: { stderr: stderr.trim() },
      advisory: true,
    },
  ];
} finally {
  await terminateChild(child);
  fs.rmSync(userDataDir, { recursive: true, force: true });
  runStablePrepare();
}

const payload = {
  generatedAt: new Date().toISOString(),
  profile: PROFILE,
  passed: checks.every((entry) => entry.passed || entry.advisory === true),
  builtPath: BUILT_PATH,
  runtimePath: RUNTIME_PATH,
  markerOutputPath: MARKER_OUTPUT_PATH,
  userDataDir,
  stdout: stdout.trim(),
  stderr: stderr.trim(),
  exitCode,
  signalCode,
  checks,
};

fs.writeFileSync(RESULT_PATH, JSON.stringify(payload, null, 2) + '\n');
console.log(RESULT_PATH);

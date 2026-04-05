#!/usr/bin/env node

import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';

import { ROOT } from './paths.mjs';
const PHASE = 'rebuilt';
const PROFILE = 'cli-process-spike';
const RESULT_PATH = path.join(ROOT, 'mapped', 'cli-process-spike-check.json');
const MARKER_OUTPUT_PATH = path.join(ROOT, 'mapped', 'cli-process-spike-marker.json');
const BUILT_PATH = path.join(ROOT, 'recovered', PHASE, 'built', 'cli-process-main.js');
const RUNTIME_PATH = path.join(ROOT, 'recovered', PHASE, 'runtime-app', 'out', 'vs', 'code', 'node', 'cliProcessMain.js');
const RUNTIME_CLI_PATH = path.join(ROOT, 'recovered', PHASE, 'runtime-app', 'out', 'cli.js');

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

runNodeScript('prepare-rebuilt-runtime.mjs');
fs.rmSync(MARKER_OUTPUT_PATH, { force: true });

const builtHash = fs.existsSync(BUILT_PATH) ? sha256(BUILT_PATH) : null;
const runtimeHash = fs.existsSync(RUNTIME_PATH) ? sha256(RUNTIME_PATH) : null;

let marker = null;
let result = null;

try {
  result = spawnSync(process.execPath, [RUNTIME_CLI_PATH, '--list-extensions'], {
    cwd: ROOT,
    encoding: 'utf8',
    env: {
      ...process.env,
      SHOPEECODE_REBUILT_PROFILE: PROFILE,
      SHOPEECODE_ENTRYPOINT_MARKER_FILE: MARKER_OUTPUT_PATH,
      VSCODE_HANDLES_UNCAUGHT_ERRORS: 'true',
    },
  });

  marker = fs.existsSync(MARKER_OUTPUT_PATH)
    ? JSON.parse(fs.readFileSync(MARKER_OUTPUT_PATH, 'utf8'))
    : null;
} finally {
  runStablePrepare();
}

const checks = [
  {
    id: 'process-exit',
    passed: (result?.status ?? 1) === 0,
    detail: { status: result?.status ?? 1, stderr: result?.stderr?.trim() ?? '' },
  },
  {
    id: 'marker-file-written',
    passed: !!marker,
    detail: { markerPath: MARKER_OUTPUT_PATH },
  },
  {
    id: 'marker-source',
    passed: marker?.source === 'rebuilt/src/vs/code/node/cliProcessMain/index.js',
    detail: marker ?? null,
  },
  {
    id: 'main-export-forwarded',
    passed: Array.isArray(marker?.originalExportKeys) && marker.originalExportKeys.includes('main'),
    detail: marker ?? null,
  },
  {
    id: 'argv-forwarded',
    passed: Array.isArray(marker?.argv) && marker.argv.includes('--list-extensions'),
    detail: marker ?? null,
  },
  {
    id: 'direct-runtime-hash',
    passed: !!builtHash && !!runtimeHash && builtHash === runtimeHash,
    detail: { builtPath: BUILT_PATH, runtimePath: RUNTIME_PATH, builtHash, runtimeHash },
  },
  {
    id: 'stdout-nonempty',
    passed: typeof result?.stdout === 'string' && result.stdout.trim().length > 0,
    detail: { stdout: result?.stdout?.trim() ?? '' },
    advisory: true,
  },
];

const payload = {
  generatedAt: new Date().toISOString(),
  profile: PROFILE,
  passed: checks.every((entry) => entry.passed || entry.advisory === true),
  builtPath: BUILT_PATH,
  runtimePath: RUNTIME_PATH,
  runtimeCliPath: RUNTIME_CLI_PATH,
  markerOutputPath: MARKER_OUTPUT_PATH,
  checks,
};

fs.writeFileSync(RESULT_PATH, JSON.stringify(payload, null, 2) + '\n');
console.log(RESULT_PATH);

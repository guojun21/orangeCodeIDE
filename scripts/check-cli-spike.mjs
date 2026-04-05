#!/usr/bin/env node

import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';

import { ROOT } from './paths.mjs';
const PHASE = 'rebuilt';
const PROFILE = 'cli-spike';
const RESULT_PATH = path.join(ROOT, 'mapped', 'cli-spike-check.json');
const MARKER_OUTPUT_PATH = path.join(ROOT, 'mapped', 'cli-spike-marker.json');

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

runNodeScript('prepare-rebuilt-runtime.mjs');

fs.rmSync(MARKER_OUTPUT_PATH, { force: true });

const runtimeCliPath = path.join(ROOT, 'recovered', PHASE, 'runtime-app', 'out', 'cli.js');
const builtPath = path.join(ROOT, 'recovered', PHASE, 'built', 'cli-runtime.js');
const version = JSON.parse(fs.readFileSync(path.join(ROOT, 'package.json'), 'utf8')).version;

const result = spawnSync(process.execPath, [runtimeCliPath, '--version'], {
  cwd: ROOT,
  encoding: 'utf8',
  env: {
    ...process.env,
    SHOPEECODE_REBUILT_PROFILE: PROFILE,
    SHOPEECODE_ENTRYPOINT_MARKER_FILE: MARKER_OUTPUT_PATH,
    VSCODE_HANDLES_UNCAUGHT_ERRORS: 'true',
  },
});

const runtimeHash = fs.existsSync(runtimeCliPath) ? sha256(runtimeCliPath) : null;
const builtHash = fs.existsSync(builtPath) ? sha256(builtPath) : null;
const markerExists = fs.existsSync(MARKER_OUTPUT_PATH);
const marker = markerExists ? JSON.parse(fs.readFileSync(MARKER_OUTPUT_PATH, 'utf8')) : null;

const checks = [
  {
    id: 'process-exit',
    passed: (result.status ?? 1) === 0,
    detail: { status: result.status ?? 1, stderr: result.stderr?.trim() ?? '' },
  },
  {
    id: 'version-output',
    passed: typeof result.stdout === 'string' && result.stdout.includes(version),
    detail: { stdout: result.stdout?.trim() ?? '' },
  },
  {
    id: 'marker-file-written',
    passed: markerExists,
    detail: { markerPath: MARKER_OUTPUT_PATH },
  },
  {
    id: 'marker-source',
    passed: marker?.source === 'rebuilt/src/cli/index.js',
    detail: marker ?? null,
  },
  {
    id: 'direct-runtime-hash',
    passed: !!builtHash && !!runtimeHash && builtHash === runtimeHash,
    detail: { builtPath, runtimeCliPath, builtHash, runtimeHash },
  },
];

const payload = {
  generatedAt: new Date().toISOString(),
  profile: PROFILE,
  passed: checks.every((entry) => entry.passed),
  builtPath,
  runtimeCliPath,
  markerOutputPath: MARKER_OUTPUT_PATH,
  checks,
};

fs.writeFileSync(RESULT_PATH, JSON.stringify(payload, null, 2) + '\n');
console.log(RESULT_PATH);

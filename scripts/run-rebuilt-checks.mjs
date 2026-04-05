#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execFileSync } from 'child_process';
import { createIsolatedProbeUserDataDir } from './rebuilt-user-data.mjs';

import { ROOT } from './paths.mjs';
const RESULT_PATH = path.join(ROOT, 'mapped', 'rebuilt-check-suite.json');

function run(scriptPath, extraArgs = [], extraEnv = {}) {
  const output = execFileSync(process.execPath, [scriptPath, ...extraArgs], {
    cwd: ROOT,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
    env: {
      ...process.env,
      ...extraEnv,
    },
  }).trim();
  const lines = output.split('\n').map(line => line.trim()).filter(Boolean);
  return lines.at(-1) ?? '';
}

const probeUserDataDir = createIsolatedProbeUserDataDir({ prefix: 'verify' });

try {
  const runtimePath = run(path.join(ROOT, 'scripts', 'prepare-rebuilt-runtime.mjs'));
  const coveragePath = run(path.join(ROOT, 'scripts', 'measure-rebuilt-coverage.mjs'));
  const coverageGatePath = run(path.join(ROOT, 'scripts', 'check-rebuilt-coverage-gate.mjs'));
  const sourceQualityPath = run(path.join(ROOT, 'scripts', 'check-rebuilt-source-quality.mjs'));
  const artifactPath = run(path.join(ROOT, 'scripts', 'check-rebuilt-artifacts.mjs'));
  const integrityPath = run(path.join(ROOT, 'scripts', 'check-runtime-integrity.mjs'));
  const probePath = run(path.join(ROOT, 'scripts', 'probe-rebuilt-runtime.mjs'), [
    '--user-data-dir',
    probeUserDataDir,
  ]);
  const extensionPath = run(path.join(ROOT, 'scripts', 'check-rebuilt-extension-slices.mjs'), [
    '--user-data-dir',
    probeUserDataDir,
  ]);
  const activationPath = run(path.join(ROOT, 'scripts', 'check-rebuilt-extension-activation.mjs'), [
    '--user-data-dir',
    probeUserDataDir,
  ]);
  const runtimeDirectPath = run(path.join(ROOT, 'scripts', 'check-rebuilt-runtime-direct-slices.mjs'));
  const assertOutput = run(path.join(ROOT, 'scripts', 'assert-rebuilt-runtime.mjs'));
  let result = {
    generatedAt: new Date().toISOString(),
    probeUserDataDir,
    runtimePath,
    coveragePath,
    coverageGatePath,
    sourceQualityPath,
    artifactPath,
    integrityPath,
    probePath,
    extensionPath,
    activationPath,
    runtimeDirectPath,
    assertOutput,
    coverage: JSON.parse(fs.readFileSync(coveragePath, 'utf8')),
    coverageGate: JSON.parse(fs.readFileSync(coverageGatePath, 'utf8')),
    sourceQuality: JSON.parse(fs.readFileSync(sourceQualityPath, 'utf8')),
    artifact: JSON.parse(fs.readFileSync(artifactPath, 'utf8')),
    integrity: JSON.parse(fs.readFileSync(integrityPath, 'utf8')),
    probe: JSON.parse(fs.readFileSync(probePath, 'utf8')),
    extension: JSON.parse(fs.readFileSync(extensionPath, 'utf8')),
    activation: JSON.parse(fs.readFileSync(activationPath, 'utf8')),
    runtimeDirect: JSON.parse(fs.readFileSync(runtimeDirectPath, 'utf8')),
  };

  fs.writeFileSync(RESULT_PATH, JSON.stringify(result, null, 2) + '\n');
  const verifyPath = run(path.join(ROOT, 'scripts', 'verify-rebuilt-runtime.mjs'));
  result = {
    ...result,
    verifyPath,
    passed: JSON.parse(fs.readFileSync(verifyPath, 'utf8')).passed,
    verify: JSON.parse(fs.readFileSync(verifyPath, 'utf8')),
  };
  fs.writeFileSync(RESULT_PATH, JSON.stringify(result, null, 2) + '\n');
  console.log(JSON.stringify({ suite: RESULT_PATH, verify: verifyPath }));
} finally {
  fs.rmSync(probeUserDataDir, { recursive: true, force: true });
}

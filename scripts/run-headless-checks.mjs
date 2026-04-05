#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execFileSync } from 'child_process';
import { ROOT } from './paths.mjs';

const RESULT_PATH = path.join(ROOT, 'mapped', 'rebuilt-headless-check-suite.json');

function run(scriptPath, extraArgs = []) {
  const output = execFileSync(process.execPath, [scriptPath, ...extraArgs], {
    cwd: ROOT,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  }).trim();
  const lines = output.split('\n').map((line) => line.trim()).filter(Boolean);
  return lines.at(-1) ?? '';
}

const runtimePath = run(path.join(ROOT, 'scripts', 'prepare-rebuilt-runtime.mjs'));
const coveragePath = run(path.join(ROOT, 'scripts', 'measure-rebuilt-coverage.mjs'));
const coverageGatePath = run(path.join(ROOT, 'scripts', 'check-rebuilt-coverage-gate.mjs'));
const sourceQualityPath = run(path.join(ROOT, 'scripts', 'check-rebuilt-source-quality.mjs'));
const maturityPath = run(path.join(ROOT, 'scripts', 'check-rebuilt-slice-maturity.mjs'));
const artifactPath = run(path.join(ROOT, 'scripts', 'check-rebuilt-artifacts.mjs'));
const integrityPath = run(path.join(ROOT, 'scripts', 'check-runtime-integrity.mjs'));
const extensionPath = run(path.join(ROOT, 'scripts', 'check-rebuilt-extension-slices.mjs'), ['--log-mode', 'hash-only']);
const activationPath = run(path.join(ROOT, 'scripts', 'check-rebuilt-extension-activation.mjs'));
const runtimeDirectPath = run(path.join(ROOT, 'scripts', 'check-rebuilt-runtime-direct-slices.mjs'));
const workerProxyPath = run(path.join(ROOT, 'scripts', 'check-worker-proxy-slices.mjs'));

const result = {
  generatedAt: new Date().toISOString(),
  runtimePath,
  coveragePath,
  coverageGatePath,
  sourceQualityPath,
  maturityPath,
  artifactPath,
  integrityPath,
  extensionPath,
  activationPath,
  runtimeDirectPath,
  workerProxyPath,
  coverage: JSON.parse(fs.readFileSync(coveragePath, 'utf8')),
  coverageGate: JSON.parse(fs.readFileSync(coverageGatePath, 'utf8')),
  sourceQuality: JSON.parse(fs.readFileSync(sourceQualityPath, 'utf8')),
  maturity: JSON.parse(fs.readFileSync(maturityPath, 'utf8')),
  artifact: JSON.parse(fs.readFileSync(artifactPath, 'utf8')),
  integrity: JSON.parse(fs.readFileSync(integrityPath, 'utf8')),
  extension: JSON.parse(fs.readFileSync(extensionPath, 'utf8')),
  activation: JSON.parse(fs.readFileSync(activationPath, 'utf8')),
  runtimeDirect: JSON.parse(fs.readFileSync(runtimeDirectPath, 'utf8')),
  workerProxy: JSON.parse(fs.readFileSync(workerProxyPath, 'utf8')),
};

fs.writeFileSync(RESULT_PATH, JSON.stringify(result, null, 2) + '\n');
console.log(RESULT_PATH);

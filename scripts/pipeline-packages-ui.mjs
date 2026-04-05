#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

import { ROOT } from './paths.mjs';

const sourcePath = path.join(ROOT, 'recovered', 'workbench-desktop-main-focus-segments', 'packages', 'ui', 'dist', 'bundle.js');
const outputRoot = path.join(ROOT, 'recovered', 'packages-ui');
const sanitizedPath = path.join(outputRoot, 'sanitized.js');
const deobfuscatedDir = path.join(outputRoot, 'deobfuscated');
const deobfuscatedPath = path.join(deobfuscatedDir, 'deobfuscated.js');
const bundleJsonPath = path.join(deobfuscatedDir, 'bundle.json');
const analysisPath = path.join(ROOT, 'mapped', 'packages-ui-deobfuscated-analysis.json');
const reportPath = path.join(ROOT, 'mapped', 'packages-ui-pipeline-result.json');

function runCommand(command, args, description) {
  const result = spawnSync(command, args, {
    cwd: ROOT,
    stdio: 'inherit',
    env: process.env,
  });

  if ((result.status ?? 1) !== 0) {
    throw new Error(`${description} failed with exit code ${result.status ?? 1}`);
  }
}

if (!fs.existsSync(sourcePath)) {
  throw new Error(`packages/ui source slice missing: ${sourcePath}`);
}

fs.mkdirSync(outputRoot, { recursive: true });
fs.rmSync(deobfuscatedDir, { recursive: true, force: true });

runCommand(
  process.execPath,
  [path.join(ROOT, 'scripts', 'sanitize-js-slice.mjs'), '--input', sourcePath, '--output', sanitizedPath],
  'sanitize packages/ui slice'
);

runCommand(
  'bash',
  [
    path.join(ROOT, 'scripts', 'use-node22.sh'),
    'npx',
    '--yes',
    'webcrack',
    sanitizedPath,
    '--output',
    deobfuscatedDir,
    '--force',
  ],
  'webcrack packages/ui bundle'
);

runCommand(
  process.execPath,
  [
    path.join(ROOT, 'scripts', 'analyze-deobfuscated-packages-ui.mjs'),
    '--input',
    deobfuscatedPath,
    '--bundle-json',
    bundleJsonPath,
    '--output',
    analysisPath,
  ],
  'analyze deobfuscated packages/ui bundle'
);

const report = {
  generatedAt: new Date().toISOString(),
  sourcePath: path.relative(ROOT, sourcePath),
  sanitizedPath: path.relative(ROOT, sanitizedPath),
  deobfuscatedDir: path.relative(ROOT, deobfuscatedDir),
  deobfuscatedPath: path.relative(ROOT, deobfuscatedPath),
  bundleJsonPath: path.relative(ROOT, bundleJsonPath),
  analysisPath: path.relative(ROOT, analysisPath),
  sizes: {
    sourceBytes: fs.statSync(sourcePath).size,
    sanitizedBytes: fs.statSync(sanitizedPath).size,
    deobfuscatedBytes: fs.existsSync(deobfuscatedPath) ? fs.statSync(deobfuscatedPath).size : null,
  },
  deobfuscatedFiles: fs.readdirSync(deobfuscatedDir).sort(),
  passed:
    fs.existsSync(sanitizedPath) &&
    fs.existsSync(deobfuscatedPath) &&
    fs.existsSync(bundleJsonPath) &&
    fs.existsSync(analysisPath),
};

fs.writeFileSync(reportPath, JSON.stringify(report, null, 2) + '\n');
console.log(reportPath);

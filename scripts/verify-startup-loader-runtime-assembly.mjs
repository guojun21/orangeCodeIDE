#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const DEFAULT_OUTPUT_ROOT = path.join(ROOT, 'recovered', 'startup-loader', 'runtime-app');
const DEFAULT_OUTPUT = path.join(ROOT, 'mapped', 'startup-loader-runtime-assembly-verify.json');
const MANIFEST_RELATIVE = '.shopeecode/startup-loader/manifest.json';
const INPUT_ROOT_RELATIVE = '.shopeecode/startup-loader/input';
const BRIDGE_RELATIVE = '.shopeecode/startup-loader/bridge.js';
const WORKBENCH_PROXY_RELATIVE = 'out/vs/workbench/workbench.desktop.main.js';
const WORKBENCH_ORIGINAL_SIDECAR_RELATIVE = 'out/vs/workbench/workbench.desktop.main.original.js';

function parseArgs(argv) {
  let outputRoot = DEFAULT_OUTPUT_ROOT;
  let outputPath = DEFAULT_OUTPUT;

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--output-root') {
      i += 1;
      outputRoot = path.isAbsolute(argv[i]) ? argv[i] : path.join(ROOT, argv[i]);
      continue;
    }
    if (arg === '--output') {
      i += 1;
      outputPath = path.isAbsolute(argv[i]) ? argv[i] : path.join(ROOT, argv[i]);
      continue;
    }
    throw new Error(`Unknown argument: ${arg}`);
  }

  return { outputRoot, outputPath };
}

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function countFiles(rootPath) {
  if (!fs.existsSync(rootPath)) {
    return 0;
  }

  let count = 0;
  const stack = [rootPath];
  while (stack.length > 0) {
    const current = stack.pop();
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const entryPath = path.join(current, entry.name);
      if (entry.isDirectory()) {
        stack.push(entryPath);
      } else if (entry.isFile()) {
        count += 1;
      }
    }
  }
  return count;
}

function main() {
  const { outputRoot, outputPath } = parseArgs(process.argv.slice(2));
  const manifestPath = path.join(outputRoot, MANIFEST_RELATIVE);
  const inputRoot = path.join(outputRoot, INPUT_ROOT_RELATIVE);
  const bridgePath = path.join(outputRoot, BRIDGE_RELATIVE);
  const workbenchProxyPath = path.join(outputRoot, WORKBENCH_PROXY_RELATIVE);
  const workbenchOriginalSidecarPath = path.join(outputRoot, WORKBENCH_ORIGINAL_SIDECAR_RELATIVE);

  const checks = {
    outputRootExists: fs.existsSync(outputRoot),
    manifestExists: fs.existsSync(manifestPath),
    inputRootExists: fs.existsSync(inputRoot),
    bridgeExists: fs.existsSync(bridgePath),
    workbenchProxyExists: fs.existsSync(workbenchProxyPath),
    workbenchOriginalSidecarExists: fs.existsSync(workbenchOriginalSidecarPath),
  };

  let stagedCountMatches = false;
  let manifest = null;
  let inputFileCount = countFiles(inputRoot);

  if (checks.manifestExists) {
    manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    stagedCountMatches = inputFileCount === manifest.stagedCount;
  }

  checks.stagedCountMatches = stagedCountMatches;

  const failedChecks = Object.entries(checks)
    .filter(([, passed]) => !passed)
    .map(([name]) => name);

  const report = {
    generatedAt: new Date().toISOString(),
    outputRoot: normalizePath(path.relative(ROOT, outputRoot)),
    manifestPath: normalizePath(path.relative(ROOT, manifestPath)),
    inputRoot: normalizePath(path.relative(ROOT, inputRoot)),
    bridgePath: normalizePath(path.relative(ROOT, bridgePath)),
    workbenchProxyPath: normalizePath(path.relative(ROOT, workbenchProxyPath)),
    workbenchOriginalSidecarPath: normalizePath(path.relative(ROOT, workbenchOriginalSidecarPath)),
    inputFileCount,
    expectedStagedCount: manifest?.stagedCount ?? null,
    skippedOriginalCount: manifest?.skippedOriginalCount ?? null,
    checks,
    failedChecks,
    passed: failedChecks.length === 0,
  };

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(report, null, 2));

  console.log(`Startup loader runtime assembly verify: ${normalizePath(path.relative(ROOT, outputPath))}`);
  console.log(`Passed: ${report.passed}`);
  console.log(`Input files: ${inputFileCount}`);

  if (!report.passed) {
    process.exitCode = 1;
  }
}

main();

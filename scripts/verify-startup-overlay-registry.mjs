#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';
import {
  DEFAULT_OVERLAY_REGISTRY_PATH,
  normalizePath,
} from './startup-overlay-resolver.mjs';

const DEFAULT_OUTPUT = path.join(ROOT, 'mapped', 'startup-overlay-verify.json');
const BEAUTIFIED_PREFIX = 'rebuilt/src/project-modules-beautified/';
const RAW_PREFIX = 'rebuilt/src/project-modules-raw/';
const SEED_PREFIX = 'rebuilt/src/vs/workbench/recovered-modules/';

function parseArgs(argv) {
  let registryPath = DEFAULT_OVERLAY_REGISTRY_PATH;
  let outputPath = DEFAULT_OUTPUT;

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--registry') {
      i += 1;
      registryPath = path.isAbsolute(argv[i]) ? argv[i] : path.join(ROOT, argv[i]);
      continue;
    }
    if (arg === '--output') {
      i += 1;
      outputPath = path.isAbsolute(argv[i]) ? argv[i] : path.join(ROOT, argv[i]);
      continue;
    }
    throw new Error(`Unknown argument: ${arg}`);
  }

  return { registryPath, outputPath };
}

function inspect(entry) {
  const selectedLayerValid = ['beautified', 'raw', 'original'].includes(entry.selectedLayer);
  const selectedTargetExists = entry.selectedTargetFile
    ? fs.existsSync(path.join(ROOT, entry.selectedTargetFile))
    : entry.selectedLayer === 'original';
  const beautifiedTargetPathValid = entry.selectedLayer !== 'beautified'
    || entry.selectedTargetFile?.startsWith(BEAUTIFIED_PREFIX);
  const rawTargetPathValid = entry.selectedLayer !== 'raw'
    || entry.selectedTargetFile?.startsWith(RAW_PREFIX);
  const originalFallbackValid = entry.selectedLayer !== 'original'
    || (!entry.selectedTargetFile && Boolean(entry.fallbackReason));
  const seedTargetPathValid = !entry.seedPlaced
    || (typeof entry.seedTargetFile === 'string' && entry.seedTargetFile.startsWith(SEED_PREFIX));
  const seedTargetExists = !entry.seedPlaced
    || fs.existsSync(path.join(ROOT, entry.seedTargetFile));

  const checks = {
    selectedLayerValid,
    selectedTargetExists,
    beautifiedTargetPathValid,
    rawTargetPathValid,
    originalFallbackValid,
    seedTargetPathValid,
    seedTargetExists,
  };

  const failedChecks = Object.entries(checks)
    .filter(([, passed]) => !passed)
    .map(([name]) => name);

  return {
    id: entry.id,
    lane: entry.lane,
    selectedLayer: entry.selectedLayer,
    selectedTargetFile: entry.selectedTargetFile,
    seedPlaced: entry.seedPlaced,
    checks,
    failedChecks,
    passed: failedChecks.length === 0,
  };
}

function main() {
  const { registryPath, outputPath } = parseArgs(process.argv.slice(2));
  const registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
  const results = registry.modules.map(inspect);
  const passedCount = results.filter((item) => item.passed).length;

  const report = {
    generatedAt: new Date().toISOString(),
    registryPath: normalizePath(path.relative(ROOT, registryPath)),
    fileCount: results.length,
    passedCount,
    failedCount: results.length - passedCount,
    selectedLayerCounts: registry.selectedLayerCounts,
    originalFallbackCount: registry.originalFallbackCount,
    overlayReadyCount: registry.overlayReadyCount,
    results,
  };

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(report, null, 2));

  console.log(`Startup overlay verify: ${normalizePath(path.relative(ROOT, outputPath))}`);
  console.log(`Passed: ${passedCount}/${results.length}`);
  console.log(`Selected layers: ${JSON.stringify(registry.selectedLayerCounts)}`);

  if (passedCount !== results.length) {
    process.exitCode = 1;
  }
}

main();

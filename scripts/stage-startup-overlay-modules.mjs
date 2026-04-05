#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

import { ROOT } from './paths.mjs';
import { DEFAULT_OVERLAY_REGISTRY_PATH, normalizePath } from './startup-overlay-resolver.mjs';

const DEFAULT_TARGET_ROOT = path.join(ROOT, 'rebuilt', 'src', 'startup-overlay');
const DEFAULT_OUTPUT = path.join(ROOT, 'mapped', 'startup-overlay-stage-registry.json');

function parseArgs(argv) {
  let registryPath = DEFAULT_OVERLAY_REGISTRY_PATH;
  let targetRoot = DEFAULT_TARGET_ROOT;
  let outputPath = DEFAULT_OUTPUT;
  let cleanTarget = false;
  const lanes = new Set();

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--registry') {
      i += 1;
      registryPath = path.isAbsolute(argv[i]) ? argv[i] : path.join(ROOT, argv[i]);
      continue;
    }
    if (arg === '--target-root') {
      i += 1;
      targetRoot = path.isAbsolute(argv[i]) ? argv[i] : path.join(ROOT, argv[i]);
      continue;
    }
    if (arg === '--output') {
      i += 1;
      outputPath = path.isAbsolute(argv[i]) ? argv[i] : path.join(ROOT, argv[i]);
      continue;
    }
    if (arg === '--lane') {
      i += 1;
      lanes.add(argv[i]);
      continue;
    }
    if (arg === '--clean-target') {
      cleanTarget = true;
      continue;
    }
    throw new Error(`Unknown argument: ${arg}`);
  }

  return {
    registryPath,
    targetRoot,
    outputPath,
    cleanTarget,
    selectedLanes: [...lanes].sort(),
  };
}

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function sha256(filePath) {
  const hash = crypto.createHash('sha256');
  hash.update(fs.readFileSync(filePath));
  return hash.digest('hex');
}

function main() {
  const { registryPath, targetRoot, outputPath, cleanTarget, selectedLanes } = parseArgs(process.argv.slice(2));
  const registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
  const selected = registry.modules.filter((entry) => {
    if (selectedLanes.length === 0) {
      return true;
    }
    return selectedLanes.includes(entry.lane);
  });

  if (cleanTarget) {
    fs.rmSync(targetRoot, {
      recursive: true,
      force: true,
      maxRetries: 10,
      retryDelay: 100,
    });
  }

  const results = selected.map((entry) => {
    if (entry.selectedLayer === 'original' || !entry.selectedTargetFile) {
      return {
        id: entry.id,
        lane: entry.lane,
        selectedLayer: entry.selectedLayer,
        sourceFile: null,
        targetFile: null,
        status: 'skipped-original',
      };
    }

    const sourcePath = path.join(ROOT, entry.selectedTargetFile);
    const targetPath = path.join(targetRoot, entry.id);
    ensureDir(targetPath);
    fs.copyFileSync(sourcePath, targetPath);

    return {
      id: entry.id,
      lane: entry.lane,
      selectedLayer: entry.selectedLayer,
      sourceFile: normalizePath(path.relative(ROOT, sourcePath)),
      targetFile: normalizePath(path.relative(ROOT, targetPath)),
      sha256: sha256(targetPath),
      status: 'staged',
    };
  });

  const report = {
    generatedAt: new Date().toISOString(),
    registryPath: normalizePath(path.relative(ROOT, registryPath)),
    targetRoot: normalizePath(path.relative(ROOT, targetRoot)),
    cleanTarget,
    selectedLanes,
    totalSelected: selected.length,
    stagedCount: results.filter((entry) => entry.status === 'staged').length,
    skippedOriginalCount: results.filter((entry) => entry.status === 'skipped-original').length,
    results,
  };

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(report, null, 2));

  console.log(`Startup overlay stage registry: ${normalizePath(path.relative(ROOT, outputPath))}`);
  console.log(`Selected lanes: ${selectedLanes.join(',') || 'all'}`);
  console.log(`Staged: ${report.stagedCount}`);
  console.log(`Skipped(original): ${report.skippedOriginalCount}`);
}

main();

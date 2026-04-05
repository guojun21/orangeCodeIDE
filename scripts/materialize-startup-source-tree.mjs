#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

import { ROOT } from './paths.mjs';
import { DEFAULT_OVERLAY_REGISTRY_PATH, normalizePath } from './startup-overlay-resolver.mjs';

const TARGET_ROOT = path.join(ROOT, 'rebuilt', 'src', 'vs', 'workbench', 'recovered-modules');
const DEFAULT_OUTPUT = path.join(ROOT, 'mapped', 'startup-source-tree-registry.json');
const WORKBENCH_PREFIX = 'out-build/vs/workbench/';

function parseArgs(argv) {
  let registryPath = DEFAULT_OVERLAY_REGISTRY_PATH;
  let outputPath = DEFAULT_OUTPUT;
  let targetRoot = TARGET_ROOT;
  const lanes = new Set();

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
    if (arg === '--target-root') {
      i += 1;
      targetRoot = path.isAbsolute(argv[i]) ? argv[i] : path.join(ROOT, argv[i]);
      continue;
    }
    if (arg === '--lane') {
      i += 1;
      lanes.add(argv[i]);
      continue;
    }
    throw new Error(`Unknown argument: ${arg}`);
  }

  return {
    registryPath,
    outputPath,
    targetRoot,
    selectedLanes: [...lanes].sort(),
  };
}

function sha256(filePath) {
  const hash = crypto.createHash('sha256');
  hash.update(fs.readFileSync(filePath));
  return hash.digest('hex');
}

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function toRecoveredModulesRelative(moduleId) {
  if (!moduleId.startsWith(WORKBENCH_PREFIX)) {
    return null;
  }
  return moduleId.slice(WORKBENCH_PREFIX.length);
}

function shouldSelect(entry, selectedLanes) {
  if (selectedLanes.length === 0) {
    return true;
  }
  return selectedLanes.includes(entry.lane);
}

function main() {
  const { registryPath, outputPath, targetRoot, selectedLanes } = parseArgs(process.argv.slice(2));
  const overlayRegistry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
  const selected = (overlayRegistry.modules || []).filter((entry) => shouldSelect(entry, selectedLanes));

  const results = selected.map((entry) => {
    const recoveredRelative = toRecoveredModulesRelative(entry.id);
    if (!recoveredRelative) {
      return {
        id: entry.id,
        lane: entry.lane,
        selectedLayer: entry.selectedLayer,
        sourceFile: entry.selectedTargetFile,
        targetFile: null,
        status: 'skipped-non-workbench',
      };
    }

    const targetPath = path.join(targetRoot, recoveredRelative);
    const targetFile = normalizePath(path.relative(ROOT, targetPath));

    if (entry.selectedLayer === 'original' || !entry.selectedTargetFile) {
      return {
        id: entry.id,
        lane: entry.lane,
        selectedLayer: entry.selectedLayer,
        sourceFile: null,
        targetFile,
        status: 'skipped-original',
      };
    }

    const sourcePath = path.join(ROOT, entry.selectedTargetFile);
    if (!fs.existsSync(sourcePath)) {
      return {
        id: entry.id,
        lane: entry.lane,
        selectedLayer: entry.selectedLayer,
        sourceFile: entry.selectedTargetFile,
        targetFile,
        status: 'missing-source',
      };
    }

    ensureDir(targetPath);
    if (fs.existsSync(targetPath)) {
      const existingSha = sha256(targetPath);
      const sourceSha = sha256(sourcePath);
      return {
        id: entry.id,
        lane: entry.lane,
        selectedLayer: entry.selectedLayer,
        sourceFile: entry.selectedTargetFile,
        targetFile,
        sourceSha256: sourceSha,
        targetSha256: existingSha,
        status: existingSha === sourceSha ? 'preserved-identical' : 'preserved-existing',
      };
    }

    fs.copyFileSync(sourcePath, targetPath);
    return {
      id: entry.id,
      lane: entry.lane,
      selectedLayer: entry.selectedLayer,
      sourceFile: entry.selectedTargetFile,
      targetFile,
      sourceSha256: sha256(sourcePath),
      targetSha256: sha256(targetPath),
      status: 'materialized',
    };
  });

  const countStatus = (status) => results.filter((entry) => entry.status === status).length;
  const report = {
    generatedAt: new Date().toISOString(),
    registryPath: normalizePath(path.relative(ROOT, registryPath)),
    targetRoot: normalizePath(path.relative(ROOT, targetRoot)),
    selectedLanes,
    totalSelected: selected.length,
    materializedCount: countStatus('materialized'),
    preservedExistingCount: countStatus('preserved-existing'),
    preservedIdenticalCount: countStatus('preserved-identical'),
    skippedOriginalCount: countStatus('skipped-original'),
    skippedNonWorkbenchCount: countStatus('skipped-non-workbench'),
    missingSourceCount: countStatus('missing-source'),
    results,
  };

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(report, null, 2));

  console.log(`Startup source tree registry: ${normalizePath(path.relative(ROOT, outputPath))}`);
  console.log(`Materialized: ${report.materializedCount}`);
  console.log(`Preserved(existing): ${report.preservedExistingCount}`);
  console.log(`Preserved(identical): ${report.preservedIdenticalCount}`);
  console.log(`Skipped(original): ${report.skippedOriginalCount}`);
}

main();

#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

import { ROOT } from './paths.mjs';
const INVENTORY_PATH = path.join(ROOT, 'mapped', 'runtime-inventory.json');
const SLICES_PATH = path.join(ROOT, 'mapped', 'rebuilt-slices.json');
const RESULT_PATH = path.join(ROOT, 'mapped', 'rebuilt-coverage.json');

function percent(numerator, denominator) {
  if (!denominator) {
    return 0;
  }
  return Number(((numerator / denominator) * 100).toFixed(2));
}

function sum(values) {
  return values.reduce((total, value) => total + value, 0);
}

const inventory = JSON.parse(fs.readFileSync(INVENTORY_PATH, 'utf8'));
const sliceManifest = JSON.parse(fs.readFileSync(SLICES_PATH, 'utf8'));

const runtimeTargets = inventory.outBundles.map((bundle) => ({
  path: bundle.path,
  sizeBytes: bundle.sizeBytes,
  domain: 'runtimeBundles',
  kind: bundle.kind,
  priority: bundle.priority,
  notes: bundle.notes,
}));

const extensionTargets = inventory.cursorExtensions
  .filter((extension) => extension.entryPath && extension.entrySizeBytes)
  .map((extension) => ({
    path: extension.entryPath,
    sizeBytes: extension.entrySizeBytes,
    domain: 'extensionEntries',
    kind: extension.kind,
    priority: extension.priority,
    notes: extension.notes,
    name: extension.name,
  }));

const candidateTargets = [...runtimeTargets, ...extensionTargets];
const candidateTargetMap = new Map(candidateTargets.map((target) => [target.path, target]));

const coveredTargetMap = new Map();
for (const slice of sliceManifest.slices) {
  const existing = coveredTargetMap.get(slice.target_runtime_bundle) ?? {
    path: slice.target_runtime_bundle,
    sliceIds: [],
    strategies: [],
    statuses: [],
  };

  existing.sliceIds.push(slice.slice_id);
  existing.strategies.push(slice.override_patch_strategy);
  existing.statuses.push(slice.status ?? 'unknown');

  const targetInfo = candidateTargetMap.get(slice.target_runtime_bundle);
  if (targetInfo) {
    existing.domain = targetInfo.domain;
    existing.sizeBytes = targetInfo.sizeBytes;
    existing.kind = targetInfo.kind;
    existing.priority = targetInfo.priority;
    existing.notes = targetInfo.notes;
    existing.name = targetInfo.name ?? null;
  } else {
    existing.domain = 'untracked';
    existing.sizeBytes = null;
  }

  coveredTargetMap.set(slice.target_runtime_bundle, existing);
}

const coveredTargets = [...coveredTargetMap.values()];
const coveredPaths = new Set(coveredTargets.map((target) => target.path));

function summarizeDomain(domainName, targets) {
  const totalFiles = targets.length;
  const totalBytes = sum(targets.map((target) => target.sizeBytes ?? 0));
  const covered = targets.filter((target) => coveredPaths.has(target.path));
  const coveredBytes = sum(covered.map((target) => target.sizeBytes ?? 0));
  return {
    totalFiles,
    coveredFiles: covered.length,
    fileCoveragePct: percent(covered.length, totalFiles),
    totalBytes,
    coveredBytes,
    byteCoveragePct: percent(coveredBytes, totalBytes),
    coveredPaths: covered.map((target) => target.path),
    uncoveredPaths: targets.filter((target) => !coveredPaths.has(target.path)).map((target) => target.path),
    directFileReplaceCoveredFiles: covered.filter((target) => {
      const record = coveredTargetMap.get(target.path);
      return record?.strategies.includes('direct-file-replace');
    }).length,
  };
}

const runtimeSummary = summarizeDomain('runtimeBundles', runtimeTargets);
const extensionSummary = summarizeDomain('extensionEntries', extensionTargets);

const replaceableFileCount = runtimeSummary.totalFiles + extensionSummary.totalFiles;
const replaceableBytes = runtimeSummary.totalBytes + extensionSummary.totalBytes;
const coveredFileCount = runtimeSummary.coveredFiles + extensionSummary.coveredFiles;
const coveredBytes = runtimeSummary.coveredBytes + extensionSummary.coveredBytes;

const uncoveredTargets = candidateTargets
  .filter((target) => !coveredPaths.has(target.path))
  .sort((left, right) => {
    const rightPriority = right.priority ?? 0;
    const leftPriority = left.priority ?? 0;
    if (rightPriority !== leftPriority) {
      return rightPriority - leftPriority;
    }
    return (right.sizeBytes ?? 0) - (left.sizeBytes ?? 0);
  });

const result = {
  generatedAt: new Date().toISOString(),
  baseline: {
    runtimeRoot: inventory.runtime.root,
    runtimeName: inventory.runtime.name,
    runtimeVersion: inventory.runtime.version,
  },
  totals: {
    sliceCount: sliceManifest.slices.length,
    uniqueCoveredTargetCount: coveredTargets.length,
    replaceableFileCount,
    coveredFileCount,
    fileCoveragePct: percent(coveredFileCount, replaceableFileCount),
    replaceableBytes,
    coveredBytes,
    byteCoveragePct: percent(coveredBytes, replaceableBytes),
  },
  domains: {
    runtimeBundles: runtimeSummary,
    extensionEntries: extensionSummary,
  },
  strategies: {
    directFileReplaceSliceCount: sliceManifest.slices.filter((slice) => slice.override_patch_strategy === 'direct-file-replace').length,
    hookSliceCount: sliceManifest.slices.filter((slice) => slice.override_patch_strategy !== 'direct-file-replace').length,
  },
  coveredTargets,
  uncoveredTopTargets: uncoveredTargets.slice(0, 12),
};

fs.writeFileSync(RESULT_PATH, JSON.stringify(result, null, 2) + '\n');
console.log(RESULT_PATH);

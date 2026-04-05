#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const DEFAULT_REGISTRY = path.join(ROOT, 'mapped', 'workbench-desktop-main-module-registry.json');
const DEFAULT_OUTPUT = path.join(ROOT, 'mapped', 'startup-critical-modules.json');

const CONTRIB_PREFIXES = [
  'out-build/vs/workbench/contrib/appLayout/',
  'out-build/vs/workbench/contrib/composer/',
  'out-build/vs/workbench/contrib/reviewChanges/',
];

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function parseArgs(argv) {
  let registryPath = DEFAULT_REGISTRY;
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

function classifyLane(moduleId) {
  if (moduleId.startsWith('out-build/vs/workbench/browser/')) {
    return 'browser';
  }
  if (moduleId.startsWith('out-build/vs/workbench/common/')) {
    return 'common';
  }
  if (moduleId.startsWith('out-build/vs/workbench/services/')) {
    return 'services';
  }
  if (moduleId.startsWith('out-build/vs/workbench/contrib/appLayout/')) {
    return 'contrib-appLayout';
  }
  if (moduleId.startsWith('out-build/vs/workbench/contrib/composer/')) {
    return 'contrib-composer';
  }
  if (moduleId.startsWith('out-build/vs/workbench/contrib/reviewChanges/')) {
    return 'contrib-reviewChanges';
  }
  return null;
}

function isStartupCritical(moduleId) {
  return (
    moduleId.startsWith('out-build/vs/workbench/browser/')
    || moduleId.startsWith('out-build/vs/workbench/common/')
    || moduleId.startsWith('out-build/vs/workbench/services/')
    || CONTRIB_PREFIXES.some(prefix => moduleId.startsWith(prefix))
  );
}

function main() {
  const { registryPath, outputPath } = parseArgs(process.argv.slice(2));
  const registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
  const criticalModules = registry.modules
    .filter(entry => isStartupCritical(entry.id))
    .map(entry => ({
      ordinal: entry.ordinal,
      id: entry.id,
      category: entry.category,
      lane: classifyLane(entry.id),
      byteLength: entry.byteLength,
    }));

  const report = {
    generatedAt: new Date().toISOString(),
    sourceRegistryPath: normalizePath(path.relative(ROOT, registryPath)),
    totalCriticalModules: criticalModules.length,
    counts: countBy(criticalModules, entry => entry.lane),
    modules: criticalModules,
  };

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(report, null, 2));

  console.log(`Startup critical modules: ${normalizePath(path.relative(ROOT, outputPath))}`);
  console.log(`Count: ${criticalModules.length}`);
}

function countBy(items, picker) {
  const counts = {};
  for (const item of items) {
    const key = picker(item);
    counts[key] = (counts[key] ?? 0) + 1;
  }
  return counts;
}

main();

#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const registryPath = path.join(ROOT, 'mapped', 'workbench-desktop-main-module-registry.json');
const reportPath = path.join(ROOT, 'mapped', 'workbench-desktop-main-module-registry-verify.json');

const knownCategories = new Set([
  'out-build/vs',
  'out-build/external',
  'out-build/proto',
  'node_modules',
  'packages/constants',
  'packages/ui',
  'packages/utils',
  'packages/context',
  'packages/metrics',
  'packages/agent-kv',
  'packages/agent-core',
  'packages/hooks',
  'packages/agent-exec',
  'packages/agent-client',
  'packages/agent-transcript',
  'packages/agent-analytics',
  'src/proto',
  'src/external',
  '../packages',
  '..'
]);

const failures = [];

if (!fs.existsSync(registryPath)) {
  failures.push({
    check: 'registry-exists',
    message: 'workbench module registry is missing'
  });
}

let registry = null;
if (failures.length === 0) {
  registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
}

if (registry) {
  if (registry.totalModules !== 2717) {
    failures.push({
      check: 'total-modules',
      expected: 2717,
      actual: registry.totalModules
    });
  }

  if (!Array.isArray(registry.modules) || registry.modules.length !== 2717) {
    failures.push({
      check: 'modules-array-length',
      expected: 2717,
      actual: Array.isArray(registry.modules) ? registry.modules.length : null
    });
  }

  const invalidCategoryModules = registry.modules
    .filter((module) => !knownCategories.has(module.category))
    .slice(0, 40)
    .map((module) => ({
      id: module.id,
      category: module.category
    }));
  if (invalidCategoryModules.length > 0) {
    failures.push({
      check: 'known-categories',
      invalidCategoryModules
    });
  }

  const zeroByteModules = registry.modules
    .filter((module) => !Number.isFinite(module.byteLength) || module.byteLength <= 0)
    .slice(0, 40)
    .map((module) => ({
      id: module.id,
      byteLength: module.byteLength
    }));
  if (zeroByteModules.length > 0) {
    failures.push({
      check: 'positive-byte-length',
      zeroByteModules
    });
  }

  if (registry.counts?.cursorPackageHosts !== 12) {
    failures.push({
      check: 'cursor-package-host-count',
      expected: 12,
      actual: registry.counts?.cursorPackageHosts ?? null
    });
  }

  if (!Number.isFinite(registry.counts?.highValueHosts) || registry.counts.highValueHosts < 390) {
    failures.push({
      check: 'high-value-host-floor',
      expectedAtLeast: 390,
      actual: registry.counts?.highValueHosts ?? null
    });
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  registryPath: path.relative(ROOT, registryPath),
  passed: failures.length === 0,
  checks: {
    totalModules: registry?.totalModules ?? null,
    moduleArrayLength: Array.isArray(registry?.modules) ? registry.modules.length : null,
    cursorPackageHosts: registry?.counts?.cursorPackageHosts ?? null,
    highValueHosts: registry?.counts?.highValueHosts ?? null,
    knownCategoryCount: knownCategories.size
  },
  failures
};

fs.writeFileSync(reportPath, JSON.stringify(report, null, 2) + '\n');
console.log(reportPath);

if (failures.length > 0) {
  process.exitCode = 1;
}

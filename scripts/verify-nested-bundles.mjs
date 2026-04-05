#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const registryPath = path.join(ROOT, 'mapped', 'nested-bundle-registry.json');
const outputPath = path.join(ROOT, 'mapped', 'nested-bundle-check.json');

const failures = [];
const registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));

if (registry.summary?.webpackHosts < 1) {
  failures.push({
    check: 'webpack-host-count',
    expectedAtLeast: 1,
    actual: registry.summary?.webpackHosts ?? null,
  });
}

if (registry.summary?.amdHosts < 3) {
  failures.push({
    check: 'amd-host-count',
    expectedAtLeast: 3,
    actual: registry.summary?.amdHosts ?? null,
  });
}

const packagesUiHost = registry.hosts.find((host) => host.id === 'packages/ui/dist/bundle.js');
if (!packagesUiHost) {
  failures.push({
    check: 'packages-ui-host-exists',
    message: 'packages/ui/dist/bundle.js missing from nested host registry',
  });
}

const guessedNames = new Set((packagesUiHost?.packagesUiNestedBundleGuesses ?? []).map((entry) => entry.guessedName));
for (const name of ['layoutBase', 'coseBase', 'cytoscapeCoseBilkent', 'cytoscapeFcose']) {
  if (!guessedNames.has(name)) {
    failures.push({
      check: 'packages-ui-guessed-names',
      missingName: name,
    });
  }
}

if ((packagesUiHost?.packagesUiNestedBundleGuesses ?? []).length < 6) {
  failures.push({
    check: 'packages-ui-webpack-marker-count',
    expectedAtLeast: 6,
    actual: (packagesUiHost?.packagesUiNestedBundleGuesses ?? []).length,
  });
}

const report = {
  generatedAt: new Date().toISOString(),
  registryPath: path.relative(ROOT, registryPath),
  passed: failures.length === 0,
  summary: registry.summary,
  packagesUiHost: packagesUiHost
    ? {
        classification: packagesUiHost.classification,
        markerCounts: packagesUiHost.markerCounts,
        guessedNames: [...guessedNames],
      }
    : null,
  failures,
};

fs.writeFileSync(outputPath, JSON.stringify(report, null, 2) + '\n');
console.log(outputPath);

if (failures.length > 0) {
  process.exitCode = 1;
}

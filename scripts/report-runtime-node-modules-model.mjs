#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import {
  ROOT,
  readRuntimeNodeModulesModelConfig,
} from './runtime-config-entry.mjs';

const EXTERNAL_REPORT_PATH = path.join(ROOT, 'mapped', 'runtime-external-dependencies-report.json');
const RESULT_PATH = path.join(ROOT, 'mapped', 'runtime-node-modules-model-report.json');

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

if (!fs.existsSync(EXTERNAL_REPORT_PATH)) {
  throw new Error(
    `Missing runtime external dependencies report: ${EXTERNAL_REPORT_PATH}. Run "npm run report:runtime-external-dependencies" first.`
  );
}

const model = readRuntimeNodeModulesModelConfig();
const externalReport = readJson(EXTERNAL_REPORT_PATH);
const nodeModules = externalReport.nodeModules ?? {};
const packageEntries = nodeModules.packages ?? [];
const nativeConfig = model.nativeRuntimePackages ?? {};
const expectedNativeNames = Object.keys(nativeConfig).sort();
const nativePackageEntries = packageEntries.filter((entry) => expectedNativeNames.includes(entry.name));
const jsInstallablePackages = packageEntries.filter((entry) => !expectedNativeNames.includes(entry.name));
const unexpectedNativePackages = (nodeModules.nativePackages ?? [])
  .map((entry) => entry.name)
  .filter((name) => !expectedNativeNames.includes(name))
  .sort();
const missingConfiguredNativePackages = expectedNativeNames
  .filter((name) => !packageEntries.some((entry) => entry.name === name))
  .sort();

const result = {
  generatedAt: new Date().toISOString(),
  sourceOfTruth: 'config/runtime/node-modules-model.json',
  packageManager: model.packageManager,
  compatibilityArtifacts: {
    nodeModulesAsar: {
      ...(model.compatibilityArtifacts?.['node_modules.asar'] ?? {}),
      exists: externalReport.nodeModulesAsar?.exists === true,
      sizeBytes: externalReport.nodeModulesAsar?.sizeBytes ?? 0,
    },
  },
  counts: {
    packageCount: nodeModules.packageCount ?? 0,
    jsInstallablePackageCount: jsInstallablePackages.length,
    nativeRuntimePackageCount: nativePackageEntries.length,
    nativeAddonCount: nodeModules.nativeAddonCount ?? 0,
  },
  nativeRuntimePackages: nativePackageEntries
    .map((entry) => ({
      ...entry,
      ...(nativeConfig[entry.name] ?? {}),
      nativeAddons: (nodeModules.nativeAddons ?? []).filter((addon) => addon.package === entry.name),
    }))
    .sort((left, right) => left.name.localeCompare(right.name)),
  jsInstallablePackages,
  expectedNativePackageNames: expectedNativeNames,
  unexpectedNativePackages,
  missingConfiguredNativePackages,
  passed: unexpectedNativePackages.length === 0 && missingConfiguredNativePackages.length === 0,
};

fs.mkdirSync(path.dirname(RESULT_PATH), { recursive: true });
fs.writeFileSync(RESULT_PATH, JSON.stringify(result, null, 2) + '\n');
console.log(RESULT_PATH);

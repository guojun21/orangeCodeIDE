#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { ROOT } from './runtime-config-entry.mjs';

const MODEL_PATH = path.join(
  ROOT,
  'config',
  'runtime',
  'native-runtime-distribution-model.json'
);
const INVENTORY_PATH = path.join(
  ROOT,
  'mapped',
  'runtime-native-artifact-inventory-report.json'
);
const MANIFEST_PATH = path.join(
  ROOT,
  'mapped',
  'runtime-native-runtime-manifest.json'
);
const RESULT_PATH = path.join(
  ROOT,
  'mapped',
  'runtime-native-distribution-plan.json'
);

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

if (!fs.existsSync(MODEL_PATH)) {
  throw new Error(`Missing native runtime distribution model: ${MODEL_PATH}`);
}
if (!fs.existsSync(INVENTORY_PATH)) {
  throw new Error(
    `Missing native artifact inventory report: ${INVENTORY_PATH}. Run "npm run report:runtime-native-artifact-inventory" first.`
  );
}
if (!fs.existsSync(MANIFEST_PATH)) {
  throw new Error(
    `Missing native runtime manifest: ${MANIFEST_PATH}. Run "npm run report:runtime-native-runtime-manifest" first.`
  );
}

const model = readJson(MODEL_PATH);
const inventory = readJson(INVENTORY_PATH);
const manifest = readJson(MANIFEST_PATH);

const packagePlans = (inventory.packageInventories ?? []).map((entry) => {
  const manifestEntry = (manifest.nativeRuntimePackages ?? []).find(
    (candidate) => candidate.name === entry.name
  );
  const override = model.packageOverrides?.[entry.name] ?? {};
  const strategy = {
    ...(model.defaultStrategy ?? {}),
    ...override,
  };
  const helperArtifacts = (entry.configuredRuntimeArtifacts ?? []).filter(
    (artifact) => artifact.kind && artifact.kind !== 'native-addon'
  );

  return {
    name: entry.name,
    version: manifestEntry?.version ?? null,
    ownerSurface: manifestEntry?.ownerSurface ?? null,
    strategyKind: strategy.kind ?? null,
    source: strategy.source ?? null,
    platformScope: strategy.platformScope ?? 'current-platform',
    artifactBundleKind:
      strategy.artifactBundleKind ?? (helperArtifacts.length > 0 ? 'addon-plus-helper' : 'addon-only'),
    notes: strategy.notes ?? manifestEntry?.notes ?? null,
    configuredRuntimeArtifactCount: entry.configuredRuntimeArtifactCount ?? 0,
    helperArtifactCount: helperArtifacts.length,
    configuredRuntimeArtifacts: entry.configuredRuntimeArtifacts ?? [],
    passed: Boolean(strategy.kind) && entry.passed === true,
  };
});

const result = {
  generatedAt: new Date().toISOString(),
  sourceOfTruth: {
    model: 'config/runtime/native-runtime-distribution-model.json',
    inventory: 'mapped/runtime-native-artifact-inventory-report.json',
    manifest: 'mapped/runtime-native-runtime-manifest.json',
  },
  packageCount: packagePlans.length,
  strategies: {
    externalPrebuiltNativeCount: packagePlans.filter(
      (entry) => entry.strategyKind === 'external-prebuilt-native'
    ).length,
    helperBundlePackageCount: packagePlans.filter(
      (entry) => entry.artifactBundleKind === 'addon-plus-helper'
    ).length,
    windowsOnlyPackageCount: packagePlans.filter(
      (entry) => entry.platformScope === 'windows-only'
    ).length,
  },
  packagePlans,
  passed:
    inventory.passed === true &&
    packagePlans.length === (manifest.nativeRuntimePackageCount ?? 0) &&
    packagePlans.every((entry) => entry.passed === true),
};

fs.mkdirSync(path.dirname(RESULT_PATH), { recursive: true });
fs.writeFileSync(RESULT_PATH, JSON.stringify(result, null, 2) + '\n');
console.log(RESULT_PATH);

#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { ROOT } from './runtime-config-entry.mjs';

const NODE_MODULES_MODEL_REPORT_PATH = path.join(
  ROOT,
  'mapped',
  'runtime-node-modules-model-report.json'
);
const HOST_ASSETS_MODEL_REPORT_PATH = path.join(
  ROOT,
  'mapped',
  'runtime-host-assets-model-report.json'
);
const RESULT_PATH = path.join(ROOT, 'mapped', 'runtime-native-runtime-manifest.json');

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

if (!fs.existsSync(NODE_MODULES_MODEL_REPORT_PATH)) {
  throw new Error(
    `Missing runtime node modules model report: ${NODE_MODULES_MODEL_REPORT_PATH}. Run "npm run report:runtime-node-modules-model" first.`
  );
}

if (!fs.existsSync(HOST_ASSETS_MODEL_REPORT_PATH)) {
  throw new Error(
    `Missing runtime host assets model report: ${HOST_ASSETS_MODEL_REPORT_PATH}. Run "npm run report:runtime-host-assets-model" first.`
  );
}

const nodeModulesModel = readJson(NODE_MODULES_MODEL_REPORT_PATH);
const hostAssetsModel = readJson(HOST_ASSETS_MODEL_REPORT_PATH);

const nativePackages = (nodeModulesModel.nativeRuntimePackages ?? []).map((entry) => ({
  name: entry.name,
  version: entry.version,
  ownerSurface: entry.ownerSurface,
  kind: entry.kind,
  notes: entry.notes,
  nativeAddons: entry.nativeAddons ?? [],
}));

const hostAssets = [
  ...(hostAssetsModel.resources?.sections ?? []),
  ...(hostAssetsModel.bin?.sections ?? []),
  ...(hostAssetsModel.policies?.sections ?? []),
].map((section) => ({
  section: section.section,
  kind: section.kind,
  notes: section.notes,
  files: section.files ?? [],
}));

const result = {
  generatedAt: new Date().toISOString(),
  sourceOfTruth: {
    nodeModules: 'mapped/runtime-node-modules-model-report.json',
    hostAssets: 'mapped/runtime-host-assets-model-report.json',
  },
  kind: 'native-runtime-manifest',
  nativeRuntimePackageCount: nativePackages.length,
  nativeRuntimePackages: nativePackages,
  hostAssetSectionCount: hostAssets.length,
  hostAssets,
  passed:
    nativePackages.length === (nodeModulesModel.counts?.nativeRuntimePackageCount ?? 0) &&
    (hostAssetsModel.passed === true),
};

fs.mkdirSync(path.dirname(RESULT_PATH), { recursive: true });
fs.writeFileSync(RESULT_PATH, JSON.stringify(result, null, 2) + '\n');
console.log(RESULT_PATH);

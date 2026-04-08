#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { ROOT } from './runtime-config-entry.mjs';

const NODE_MODULES_MODEL_REPORT_PATH = path.join(
  ROOT,
  'mapped',
  'runtime-node-modules-model-report.json'
);
const RESULT_PATH = path.join(ROOT, 'mapped', 'runtime-package-manager-manifest.json');

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

if (!fs.existsSync(NODE_MODULES_MODEL_REPORT_PATH)) {
  throw new Error(
    `Missing runtime node modules model report: ${NODE_MODULES_MODEL_REPORT_PATH}. Run "npm run report:runtime-node-modules-model" first.`
  );
}

const modelReport = readJson(NODE_MODULES_MODEL_REPORT_PATH);
const dependencies = Object.fromEntries(
  (modelReport.jsInstallablePackages ?? [])
    .map((entry) => [entry.name, entry.version])
    .sort((left, right) => left[0].localeCompare(right[0]))
);

const result = {
  generatedAt: new Date().toISOString(),
  sourceOfTruth: 'mapped/runtime-node-modules-model-report.json',
  kind: 'package-manager-install-manifest',
  packageManager: modelReport.packageManager,
  dependencyCount: Object.keys(dependencies).length,
  dependencies,
  passed: Object.keys(dependencies).length === (modelReport.counts?.jsInstallablePackageCount ?? 0),
};

fs.mkdirSync(path.dirname(RESULT_PATH), { recursive: true });
fs.writeFileSync(RESULT_PATH, JSON.stringify(result, null, 2) + '\n');
console.log(RESULT_PATH);

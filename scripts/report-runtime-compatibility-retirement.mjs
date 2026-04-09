#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { ROOT } from './runtime-config-entry.mjs';

const MODEL_PATH = path.join(
  ROOT,
  'config',
  'runtime',
  'compatibility-retirement-model.json'
);
const NODE_MODULES_MODEL_REPORT_PATH = path.join(
  ROOT,
  'mapped',
  'runtime-node-modules-model-report.json'
);
const RESULT_PATH = path.join(
  ROOT,
  'mapped',
  'runtime-compatibility-retirement-report.json'
);

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

if (!fs.existsSync(MODEL_PATH)) {
  throw new Error(`Missing compatibility retirement model: ${MODEL_PATH}`);
}
if (!fs.existsSync(NODE_MODULES_MODEL_REPORT_PATH)) {
  throw new Error(
    `Missing runtime node modules model report: ${NODE_MODULES_MODEL_REPORT_PATH}. Run "npm run report:runtime-node-modules-model" first.`
  );
}

const model = readJson(MODEL_PATH);
const nodeModulesModel = readJson(NODE_MODULES_MODEL_REPORT_PATH);
const nodeModulesAsar = nodeModulesModel.compatibilityArtifacts?.nodeModulesAsar ?? {};

const artifactReports = Object.entries(model.artifacts ?? {}).map(([id, entry]) => {
  if (id === 'nodeModulesAsar') {
    const exists = nodeModulesAsar.exists === true;
    const sizeBytes = nodeModulesAsar.sizeBytes ?? 0;
    const requiredState = entry.requiredState ?? {};
    const meetsExists =
      requiredState.exists === undefined ? true : requiredState.exists === exists;
    const meetsSize =
      requiredState.maxSizeBytes === undefined
        ? true
        : sizeBytes <= requiredState.maxSizeBytes;
    return {
      artifactId: id,
      kind: entry.kind,
      retirementStatus: entry.retirementStatus,
      notes: entry.notes,
      exists,
      sizeBytes,
      requiredState,
      passed: meetsExists && meetsSize,
    };
  }

  return {
    artifactId: id,
    kind: entry.kind ?? null,
    retirementStatus: entry.retirementStatus ?? null,
    notes: entry.notes ?? null,
    passed: false,
  };
});

const result = {
  generatedAt: new Date().toISOString(),
  sourceOfTruth: 'config/runtime/compatibility-retirement-model.json',
  artifactCount: artifactReports.length,
  readyToRetireCount: artifactReports.filter(
    (artifact) => artifact.retirementStatus === 'ready-to-retire' && artifact.passed === true
  ).length,
  artifacts: artifactReports,
  passed: artifactReports.every((artifact) => artifact.passed === true),
};

fs.mkdirSync(path.dirname(RESULT_PATH), { recursive: true });
fs.writeFileSync(RESULT_PATH, JSON.stringify(result, null, 2) + '\n');
console.log(RESULT_PATH);

#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const MANAGER_ADMISSION_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-manager-admission.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-manager-cleanup-gate.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const admission = readJson(MANAGER_ADMISSION_PATH);
  const sourcePath = path.join(ROOT, admission.sourcePaths.managerSource);
  const source = fs.readFileSync(sourcePath, 'utf8');

  const checks = {
    removesDroppedResources: source.includes('this._resourcesMap.delete('),
    disposesDroppedResources: source.includes('for (const o of i)') && source.includes('o.dispose();'),
    updatesCurrentResourcesSnapshot: source.includes('this._currentResources = s;'),
    firesChangeEventAfterMutation: source.includes('this._onDidChangeResources.fire();'),
    disposeCleansEmitter: source.includes('this._onDidChangeResources.dispose();'),
    disposeCleansCurrentResources: source.includes('for (const n of this._currentResources)') && source.includes('n.dispose();'),
    disposeClearsResourceMap: source.includes('this._resourcesMap.clear();'),
    resourceKeyStable: source.includes('JSON.stringify([n.modifiedUri?.path, n.originalUri?.path])'),
  };

  const failedChecks = Object.entries(checks)
    .filter(([, passed]) => !passed)
    .map(([name]) => name);

  const report = {
    generatedAt: new Date().toISOString(),
    sourcePath: normalizePath(path.relative(ROOT, sourcePath)),
    checks,
    failedChecks,
    passed: failedChecks.length === 0,
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
  console.log(`Passed: ${report.passed}`);
  if (!report.passed) {
    process.exitCode = 1;
  }
}

main();

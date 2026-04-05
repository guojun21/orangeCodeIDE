#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-manager-batch-admission.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-manager-batch-admission-verify.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const report = readJson(INPUT_PATH);
  const checks = {
    lanePinned: report.lane === 'contrib-reviewChanges',
    wavePinned: report.candidateWave?.waveId === 'DRMB1',
    selectedCountPinned: Array.isArray(report.candidateWave?.selectedModules) && report.candidateWave.selectedModules.length === 2,
    managerIncluded: Array.isArray(report.candidateWave?.selectedModules) && report.candidateWave.selectedModules.includes('out-build/vs/workbench/contrib/reviewChanges/browser/ReviewChangesResourceManager.js'),
    serviceIncluded: Array.isArray(report.candidateWave?.selectedModules) && report.candidateWave.selectedModules.includes('out-build/vs/workbench/contrib/reviewChanges/browser/service/reviewChangesService.js'),
    admissionReady: report.decision?.admissionReady === true,
    nextActionPinned: report.decision?.nextAction === 'manager-including-batch-no-op-runtime',
    browserHeld: report.decision?.browserStillHeld === true,
  };

  const failedChecks = Object.entries(checks)
    .filter(([, passed]) => !passed)
    .map(([name]) => name);

  const output = {
    generatedAt: new Date().toISOString(),
    inputPath: normalizePath(path.relative(ROOT, INPUT_PATH)),
    checks,
    failedChecks,
    passed: failedChecks.length === 0,
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(output, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
  console.log(`Passed: ${output.passed}`);
  if (!output.passed) {
    process.exitCode = 1;
  }
}

main();

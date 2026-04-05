#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-resource-admission.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-resource-admission-verify.json');

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
    wavePinned: report.candidate?.waveId === 'DRR1',
    modulePinned: report.candidate?.moduleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/ReviewChangesResource.js',
    sourcePinned: typeof report.candidate?.sourceFile === 'string' && report.candidate.sourceFile.endsWith('/ReviewChangesResource.js'),
    runtimeInputPinned: typeof report.candidate?.runtimeInputFile === 'string' && report.candidate.runtimeInputFile.endsWith('/ReviewChangesResource.js'),
    dualClassRisk: report.riskSignals?.skeletonAndResourceDualClass === true,
    textModelRisk: report.riskSignals?.textModelDisposables === true && report.riskSignals?.createModelReference === true,
    hydrateRisk: report.riskSignals?.hydrateOnConstruct === true,
    admissionReady: report.decision?.admissionReady === true,
    nextActionPinned: report.decision?.nextAction === 'dedicated-no-op-runtime',
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

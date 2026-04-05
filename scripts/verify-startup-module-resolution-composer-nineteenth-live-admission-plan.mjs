#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-nineteenth-live-admission-plan.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-nineteenth-live-admission-plan-verify.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const report = readJson(INPUT_PATH);

  const checks = {
    lanePinned: report.lane === 'contrib-composer',
    phasePinned: report.phase === 'nineteenth-live-admission-plan',
    candidatePinned:
      report.candidate?.waveId === 'DC19L'
      && report.candidate?.moduleId === 'out-build/vs/workbench/contrib/composer/browser/asyncOperationRegistry.js'
      && report.candidate?.sourceFile === 'rebuilt/src/project-modules-beautified/out-build/vs/workbench/contrib/composer/browser/asyncOperationRegistry.js'
      && report.candidate?.runtimeInputFile === 'recovered/startup-loader/input/out-build/vs/workbench/contrib/composer/browser/asyncOperationRegistry.js'
      && report.candidate?.liveShape === 'single-module-live',
    prerequisitesPinned:
      report.prerequisites?.nineteenthNoOpPassed === true
      && report.prerequisites?.nineteenthNoOpWaveId === 'DC19'
      && report.prerequisites?.firstMicroBatchStillProven === true
      && report.prerequisites?.tenthSingleLiveStillProven === true
      && report.prerequisites?.stableSpikeStillGreen === true
      && report.prerequisites?.stableRuntimeStillGreen === true
      && report.prerequisites?.reviewChangesLaneStillFrozen === true
      && report.prerequisites?.broadBrowserStillHeld === true,
    decisionPinned:
      report.decision?.admissionPlanReady === true
      && report.decision?.executionStillPending === true
      && report.decision?.nextApprovedAction === 'composer-nineteenth-live-contract'
      && report.decision?.nextApprovedWaveId === 'DC19L'
      && report.decision?.widerBatchExpansionStillBlocked === true,
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

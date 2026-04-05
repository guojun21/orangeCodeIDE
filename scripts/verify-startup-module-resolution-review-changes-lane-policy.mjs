#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-lane-policy.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-lane-policy-verify.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const report = readJson(INPUT_PATH);
  const provenSingles = report.proven?.singleLive ?? [];
  const provenBatches = report.proven?.microBatchLive ?? [];
  const nextBatchIds = report.candidatePool?.nextBatchModuleIds ?? [];
  const managerHoldIds = report.explicitHold?.managerStatefulIds ?? [];
  const stability = report.baseline?.qualityStability ?? {};

  const checks = {
    lanePinned: report.lane === 'contrib-reviewChanges',
    phasePinned: report.phase === 'lane-policy-freeze',
    renameStillOff: report.immediatePolicy?.renameOnMainline === false,
    threeSinglesProven: provenSingles.length >= 3 && provenSingles.every((entry) => entry.passed === true && entry.enabledCount === 1 && entry.factoryHitCount === 1),
    twoModuleBatchProven: provenBatches.some((entry) => entry.passed === true && entry.enabledCount === 2 && entry.factoryHitCount === 2),
    nextActionPinned: report.immediatePolicy?.nextAction === 'three-module-batch-live',
    nextBatchPinned: nextBatchIds.length === 3 && nextBatchIds.includes('out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciParsingUtils.js'),
    managerHoldPinned: managerHoldIds.includes('out-build/vs/workbench/contrib/reviewChanges/browser/ReviewChangesResourceManager.js'),
    rollbackPolicyPresent:
      Array.isArray(report.rollbackPolicy?.singleModuleKillSwitchOn) && report.rollbackPolicy.singleModuleKillSwitchOn.length >= 3
      && Array.isArray(report.rollbackPolicy?.laneFreezeOn) && report.rollbackPolicy.laneFreezeOn.length >= 3,
    stopConditionsPresent: Array.isArray(report.stopConditions) && report.stopConditions.length >= 4,
    stableRuntimeStillGreen:
      stability.headlessVerifyPassed === true
      && stability.acceptRecorded === true
      && stability.startupLoaderRuntimeGatePassed === true
      && stability.startupLoaderRolloutGatePassed === true,
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

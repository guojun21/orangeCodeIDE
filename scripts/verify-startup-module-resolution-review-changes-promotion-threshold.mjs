#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-promotion-threshold.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-promotion-threshold-verify.json');

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
    lowRiskBatchProven: report.provenSet?.lowRiskBatch?.passed === true && report.provenSet.lowRiskBatch.enabledCount === 3,
    managerSingleLiveProven: report.provenSet?.managerSingleLive?.passed === true && report.provenSet.managerSingleLive.enabledCount === 1,
    managerIncludingBatchProven:
      report.provenSet?.managerIncludingBatchLive?.passed === true
      && report.provenSet.managerIncludingBatchLive.enabledCount === 2,
    resourceSingleLiveProven:
      report.provenSet?.resourceSingleLive?.passed === true
      && report.provenSet.resourceSingleLive.enabledCount === 1,
    browserLaneGlobalLiveProven:
      report.provenSet?.browserLaneGlobalLive?.passed === true
      && report.provenSet.browserLaneGlobalLive.enabledCount === 14
      && report.provenSet.browserLaneGlobalLive.factoryHitCount === 14
      && report.provenSet.browserLaneGlobalLive.overlayHitCount === 14
      && report.provenSet.browserLaneGlobalLive.stickyDisabledCount === 0,
    managerGateSetPassed:
      report.managerGateSet?.admissionVerifyPassed === true
      && report.managerGateSet?.runtimeNoOpPassed === true
      && report.managerGateSet?.cleanupPassed === true
      && report.managerGateSet?.fallbackPassed === true
      && report.managerGateSet?.exportDeltaPassed === true,
    lanePromotionEligible: report.decision?.lanePromotionEligible === true,
    browserReleased:
      report.decision?.browserStillHeld === false
      && report.decision?.browserLaneFrozen === true
      && Array.isArray(report.decision?.browserHoldReason)
      && report.decision.browserHoldReason.length === 0,
    nextActionPinned: report.decision?.nextAction === 'lane-freeze-review',
    browserThresholdsCleared: Array.isArray(report.thresholds?.browserStillBlockedUntil) && report.thresholds.browserStillBlockedUntil.length === 0,
    renameStillOff: report.thresholds?.renameOnMainline === true,
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

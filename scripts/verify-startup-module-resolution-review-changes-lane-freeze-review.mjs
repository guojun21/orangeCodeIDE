#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-lane-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-lane-freeze-review-verify.json');

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
    promotionEligiblePinned: report.currentState?.lanePromotionEligible === true,
    browserReleasedPinned:
      report.currentState?.browserStillHeld === false
      && report.currentState?.browserLaneFrozen === true
      && report.decision?.browserHold === false
      && Array.isArray(report.decision?.browserHoldReason)
      && report.decision.browserHoldReason.length === 0,
    lowRiskBatchPinned: report.currentState?.lowRiskBatch?.passed === true && report.currentState.lowRiskBatch.enabledCount === 3,
    managerSinglePinned: report.currentState?.managerSingleLive?.passed === true && report.currentState.managerSingleLive.enabledCount === 1,
    managerBatchPinned:
      report.currentState?.managerIncludingBatchLive?.passed === true
      && report.currentState.managerIncludingBatchLive.enabledCount === 2,
    resourceSinglePinned:
      report.currentState?.resourceSingleLive?.passed === true
      && report.currentState.resourceSingleLive.enabledCount === 1,
    browserLaneGlobalPinned:
      report.currentState?.browserLaneGlobalLive?.passed === true
      && report.currentState.browserLaneGlobalLive.enabledCount === 14
      && report.currentState.browserLaneGlobalLive.factoryHitCount === 14,
    laneFrozen: report.decision?.laneFrozen === true,
    laneStatePinned: report.decision?.laneState === 'review-changes-lane-global-live-proven',
    nextApprovedStepPinned: report.decision?.nextApprovedStep === null,
    reviewChangesLaneExhausted: report.decision?.reviewChangesLaneExhausted === true,
    crossLaneExecutionBlocked: report.decision?.crossLaneExecutionBlocked === true,
    blockedExpansionPresent:
      Array.isArray(report.guardrails?.blockedNow)
      && report.guardrails.blockedNow.includes('new reviewChanges browser surface expansion')
      && report.guardrails.blockedNow.includes('cross-lane execution without dedicated admission'),
    renameBlocked: Array.isArray(report.guardrails?.blockedNow) && report.guardrails.blockedNow.includes('rename-driven work'),
    minimumWinPinned:
      report.minimumWin?.definition === 'reviewChanges lane freeze review verify green with browser released and laneState fixed to review-changes-lane-global-live-proven',
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

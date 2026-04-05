#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fifth-live-contract-next-step-lock.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fifth-live-contract-next-step-lock-verify.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const report = readJson(INPUT_PATH);
  const allowedNow = report.allowedNow ?? [];
  const blockedNow = report.blockedNow ?? [];
  const stopConditions = report.stopConditions ?? [];
  const minimumWin = report.minimumWin ?? {};
  const thirdBatchEligibilityGate = report.thirdBatchEligibilityGate ?? {};
  const scopeBoundary = report.scopeBoundary ?? {};
  const followUpPriority = report.followUpPriority ?? {};

  const checks = {
    lanePinned: report.lane === 'browser',
    phasePinned: report.phase === 'fifth-live-contract-next-step-lock',
    baselinePinned:
      report.baseline?.laneState === 'four-single-live-proven-first-and-second-batch-live-proven-fifth-live-contract-ready'
      && report.baseline?.firstBatchWaveId === 'DBRB1'
      && report.baseline?.secondBatchWaveId === 'DBRB2'
      && report.baseline?.fifthLiveModuleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciMessageUtils.js'
      && report.baseline?.fifthLiveWaveId === 'DBR5L',
    decisionPinned:
      report.decision?.nextApprovedAction === 'browser-fifth-live-execution'
      && report.decision?.approvedCandidateOnly === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciMessageUtils.js'
      && report.decision?.browserThirdBatchScopeExpansionBlocked === true
      && report.decision?.browserComponentWidgetTemplateBlocked === true
      && report.decision?.browserHeavierUiSurfaceBlocked === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    allowedNowScoped:
      allowedNow.includes('browser fifth live contract artifacts')
      && allowedNow.includes('browser fifth live execution only')
      && allowedNow.includes('browser-specific diagnostics refinement'),
    blockedNowScoped:
      blockedNow.includes('browser third batch scope expansion')
      && blockedNow.includes('browser component or widget live')
      && blockedNow.includes('browser template-surface live')
      && blockedNow.includes('browser heavier UI/view-zone live')
      && blockedNow.includes('browser fifth live batch expansion')
      && blockedNow.includes('cross-lane expansion'),
    stopConditionsPinned:
      stopConditions.includes('do not discuss browser third batch until DBR5L live is executed and frozen')
      && stopConditions.includes('do not start component/widget/template or heavier UI admission before DBR5L live outcome is frozen'),
    minimumWinPinned:
      minimumWin.definition === 'DBR5L live contract / export-delta / fallback / sticky-disable / freeze / next-step lock all verify green and nextApprovedAction uniquely locked to browser-fifth-live-execution'
      && Array.isArray(minimumWin.mustVerify)
      && minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-fifth-live-contract-next-step-lock-verify.json'),
    thirdBatchEligibilityGatePinned:
      thirdBatchEligibilityGate.discussionBlocked === true
      && thirdBatchEligibilityGate.currentProofState === 'four-live-plus-two-batches-plus-fifth-contract-ready'
      && Array.isArray(thirdBatchEligibilityGate.requiredMilestonesBeforeDiscussion)
      && thirdBatchEligibilityGate.requiredMilestonesBeforeDiscussion.includes('DBR5L live execution proven')
      && thirdBatchEligibilityGate.requiredMilestonesBeforeDiscussion.includes('post-DBR5L browser lane freeze review'),
    scopeBoundaryPinned:
      Array.isArray(scopeBoundary.allowOnly)
      && scopeBoundary.allowOnly.includes('DBR5L live contract artifacts')
      && scopeBoundary.allowOnly.includes('browser fifth live contract next-step lock artifacts')
      && Array.isArray(scopeBoundary.mustNotTouch)
      && scopeBoundary.mustNotTouch.includes('browser live execution')
      && scopeBoundary.mustNotTouch.includes('browser third batch'),
    followUpPriorityPinned:
      followUpPriority.next === 'browser-fifth-live-execution'
      && followUpPriority.afterThat === 'browser lane freeze review only after fifth live execution result is frozen',
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

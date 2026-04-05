#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fourth-live-next-step-lock.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fourth-live-next-step-lock-verify.json');

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
  const secondBatchEligibilityGate = report.secondBatchEligibilityGate ?? {};
  const scopeBoundary = report.scopeBoundary ?? {};
  const followUpPriority = report.followUpPriority ?? {};

  const checks = {
    lanePinned: report.lane === 'browser',
    phasePinned: report.phase === 'fourth-live-next-step-lock',
    baselinePinned:
      report.baseline?.laneState === 'three-single-live-proven-first-batch-live-proven-fourth-live-admission-planned'
      && report.baseline?.firstSingleLiveModuleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/hooks/useResourceLineCounts.js'
      && report.baseline?.firstSingleLiveWaveId === 'DBR1L'
      && report.baseline?.secondSingleLiveModuleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/discussionUtils.js'
      && report.baseline?.secondSingleLiveWaveId === 'DBR2L'
      && report.baseline?.thirdSingleLiveModuleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/diffMentionUtils.js'
      && report.baseline?.thirdSingleLiveWaveId === 'DBR3L'
      && report.baseline?.batchWaveId === 'DBRB1'
      && report.baseline?.fourthNoOpModuleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/generatedFilesConstants.js'
      && report.baseline?.fourthNoOpWaveId === 'DBR4'
      && report.baseline?.fourthLiveModuleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/generatedFilesConstants.js'
      && report.baseline?.fourthLiveWaveId === 'DBR4L',
    decisionPinned:
      report.decision?.nextApprovedAction === 'browser-fourth-live-contract'
      && report.decision?.approvedCandidateOnly === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/generatedFilesConstants.js'
      && report.decision?.browserBatchScopeExpansionBlocked === true
      && report.decision?.browserComponentWidgetTemplateBlocked === true
      && report.decision?.browserFourthRunnerUpSwitchBlocked === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    allowedNowScoped:
      allowedNow.includes('browser fourth live admission artifacts')
      && allowedNow.includes('browser fourth live contract planning only')
      && allowedNow.includes('browser-specific diagnostics refinement'),
    blockedNowScoped:
      blockedNow.includes('browser batch scope expansion')
      && blockedNow.includes('browser second batch live')
      && blockedNow.includes('browser component or widget live')
      && blockedNow.includes('browser fourth runner-up switch')
      && blockedNow.includes('browser fourth live execution before contract')
      && blockedNow.includes('cross-lane expansion'),
    stopConditionsPinned:
      stopConditions.includes('do not discuss second browser batch until DBR4L live is executed and frozen')
      && stopConditions.includes('do not switch to ciMessageUtils.js before DBR4L live outcome is frozen'),
    minimumWinPinned:
      minimumWin.definition === 'DBR4L admission plan / freeze / next-step lock all verify green and nextApprovedAction uniquely locked to browser-fourth-live-contract'
      && Array.isArray(minimumWin.mustVerify)
      && minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-fourth-live-next-step-lock-verify.json'),
    secondBatchEligibilityGatePinned:
      secondBatchEligibilityGate.discussionBlocked === true
      && secondBatchEligibilityGate.currentProofState === 'three-live-plus-first-batch-plus-fourth-no-op'
      && Array.isArray(secondBatchEligibilityGate.requiredMilestonesBeforeDiscussion)
      && secondBatchEligibilityGate.requiredMilestonesBeforeDiscussion.includes('DBR4L single-live proven')
      && secondBatchEligibilityGate.requiredMilestonesBeforeDiscussion.includes('post-DBR4L browser lane freeze review'),
    scopeBoundaryPinned:
      Array.isArray(scopeBoundary.allowOnly)
      && scopeBoundary.allowOnly.includes('browser fourth live next-step lock artifacts')
      && Array.isArray(scopeBoundary.mustNotTouch)
      && scopeBoundary.mustNotTouch.includes('browser live execution')
      && scopeBoundary.mustNotTouch.includes('browser batch scope expansion'),
    followUpPriorityPinned:
      followUpPriority.next === 'browser-fourth-live-contract'
      && followUpPriority.afterThat === 'browser lane freeze review only if contract preflight semantics drift',
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

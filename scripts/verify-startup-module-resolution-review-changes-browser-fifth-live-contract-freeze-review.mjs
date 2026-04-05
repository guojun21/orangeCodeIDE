#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fifth-live-contract-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fifth-live-contract-freeze-review-verify.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const report = readJson(INPUT_PATH);
  const blockedNow = report.blockedNow ?? [];
  const blockedSurfaces = report.blockedSurfaces ?? [];
  const runnerUpLock = report.runnerUpLock ?? {};
  const failureClassification = report.failureClassification ?? {};
  const thirdBatchEligibilityGate = report.thirdBatchEligibilityGate ?? {};
  const minimumWin = report.minimumWin ?? {};
  const scopeBoundary = report.scopeBoundary ?? {};
  const followUpPriority = report.followUpPriority ?? {};

  const checks = {
    lanePinned: report.lane === 'browser',
    phasePinned: report.phase === 'fifth-live-contract-freeze-review',
    stableRuntimeStillGreen: report.baseline?.stableRuntimeStillGreen === true,
    provenPinned:
      report.proven?.firstSingleLiveModuleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/hooks/useResourceLineCounts.js'
      && report.proven?.firstSingleLiveWaveId === 'DBR1L'
      && report.proven?.secondSingleLiveModuleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/discussionUtils.js'
      && report.proven?.secondSingleLiveWaveId === 'DBR2L'
      && report.proven?.thirdSingleLiveModuleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/diffMentionUtils.js'
      && report.proven?.thirdSingleLiveWaveId === 'DBR3L'
      && report.proven?.fourthSingleLiveModuleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/generatedFilesConstants.js'
      && report.proven?.fourthSingleLiveWaveId === 'DBR4L'
      && report.proven?.firstBatchWaveId === 'DBRB1'
      && report.proven?.secondBatchWaveId === 'DBRB2'
      && report.proven?.fifthNoOpModuleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciMessageUtils.js'
      && report.proven?.fifthNoOpWaveId === 'DBR5',
    fifthLiveContractPinned:
      report.fifthLiveContract?.moduleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciMessageUtils.js'
      && report.fifthLiveContract?.waveId === 'DBR5L'
      && report.fifthLiveContract?.mode === 'live-canary'
      && report.fifthLiveContract?.resolverEnabled === true
      && report.fifthLiveContract?.laneToggleEnabled === true
      && report.fifthLiveContract?.perModuleKillSwitchEnabled === true
      && report.fifthLiveContract?.exportDeltaPassed === true
      && report.fifthLiveContract?.fallbackPreflightPassed === true
      && report.fifthLiveContract?.stickyPreflightPassed === true,
    freezeDecisionPinned:
      report.decision?.laneFrozen === true
      && report.decision?.laneState === 'four-single-live-proven-first-and-second-batch-live-proven-fifth-live-contract-ready'
      && report.decision?.nextApprovedStep === 'browser-fifth-live-contract-next-step-lock'
      && report.decision?.fifthLiveContractReadyOnly === true
      && report.decision?.browserThirdBatchScopeExpansionStillBlocked === true
      && report.decision?.componentWidgetTemplateStillBlocked === true
      && report.decision?.browserHeavierUiSurfaceStillBlocked === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    blockedSurfacesPinned:
      blockedSurfaces.includes('browser third batch scope expansion')
      && blockedSurfaces.includes('browser component/widget/template live')
      && blockedSurfaces.includes('browser heavier UI/view-zone live')
      && blockedSurfaces.includes('cross-lane expansion')
      && blockedSurfaces.includes('rename-driven work'),
    blockedNowScoped:
      blockedNow.includes('browser third batch scope expansion')
      && blockedNow.includes('browser component or widget live')
      && blockedNow.includes('browser template-surface live')
      && blockedNow.includes('browser heavier UI/view-zone live')
      && blockedNow.includes('browser fifth live execution before explicit run step'),
    runnerUpLockPinned:
      runnerUpLock.locked === true
      && runnerUpLock.approvedCandidateOnly === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciMessageUtils.js'
      && Array.isArray(runnerUpLock.blockedRunnerUps)
      && runnerUpLock.blockedRunnerUps.length === 0,
    failureClassificationPinned:
      Array.isArray(failureClassification.rollbackContractOnlyOn)
      && failureClassification.rollbackContractOnlyOn.length >= 2
      && Array.isArray(failureClassification.freezeBrowserLaneOn)
      && failureClassification.freezeBrowserLaneOn.length >= 3,
    thirdBatchEligibilityGatePinned:
      thirdBatchEligibilityGate.discussionBlocked === true
      && thirdBatchEligibilityGate.currentProofState === 'four-live-plus-two-batches-plus-fifth-contract-ready'
      && Array.isArray(thirdBatchEligibilityGate.requiredMilestonesBeforeDiscussion)
      && thirdBatchEligibilityGate.requiredMilestonesBeforeDiscussion.includes('DBR5L live execution proven')
      && thirdBatchEligibilityGate.requiredMilestonesBeforeDiscussion.includes('post-DBR5L browser lane freeze review'),
    minimumWinPinned:
      minimumWin.definition === 'DBR5L live contract / export-delta / fallback / sticky-disable / freeze / next-step lock all verify green and nextApprovedAction uniquely locked to browser-fifth-live-execution'
      && Array.isArray(minimumWin.mustVerify)
      && minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-fifth-live-contract-freeze-review-verify.json')
      && minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-fifth-live-contract-next-step-lock-verify.json'),
    scopeBoundaryPinned:
      Array.isArray(scopeBoundary.allowOnly)
      && scopeBoundary.allowOnly.includes('DBR5L live contract artifacts')
      && scopeBoundary.allowOnly.includes('browser fifth export-delta artifacts')
      && scopeBoundary.allowOnly.includes('browser fifth fallback preflight artifacts')
      && scopeBoundary.allowOnly.includes('browser fifth sticky-disable preflight artifacts')
      && scopeBoundary.allowOnly.includes('browser fifth live contract freeze artifacts')
      && scopeBoundary.allowOnly.includes('browser fifth live contract next-step lock artifacts')
      && Array.isArray(scopeBoundary.mustNotTouch)
      && scopeBoundary.mustNotTouch.includes('browser live execution')
      && scopeBoundary.mustNotTouch.includes('browser third batch')
      && scopeBoundary.mustNotTouch.includes('browser component/widget/template')
      && scopeBoundary.mustNotTouch.includes('reviewChanges main lane')
      && scopeBoundary.mustNotTouch.includes('composer lane')
      && scopeBoundary.mustNotTouch.includes('mechanical recovery chain'),
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

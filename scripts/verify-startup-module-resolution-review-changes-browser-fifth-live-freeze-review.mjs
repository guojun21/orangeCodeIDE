#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fifth-live-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fifth-live-freeze-review-verify.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const report = readJson(INPUT_PATH);
  const blockedSurfaces = report.blockedSurfaces ?? [];
  const runnerUpLock = report.runnerUpLock ?? {};
  const failureClassification = report.failureClassification ?? {};
  const thirdBatchEligibilityGate = report.thirdBatchEligibilityGate ?? {};
  const minimumWin = report.minimumWin ?? {};
  const scopeBoundary = report.scopeBoundary ?? {};
  const followUpPriority = report.followUpPriority ?? {};
  const requiredBeforeLive = report.fifthLivePlan?.requiredBeforeLive ?? [];

  const checks = {
    lanePinned: report.lane === 'browser',
    phasePinned: report.phase === 'fifth-live-freeze-review',
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
      && report.proven?.secondBatchWaveId === 'DBRB2',
    fifthNoOpPinned:
      report.fifthNoOp?.moduleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciMessageUtils.js'
      && report.fifthNoOp?.waveId === 'DBR5'
      && report.fifthNoOp?.mode === 'no-op-observable'
      && report.fifthNoOp?.result === 'original-pass'
      && report.fifthNoOp?.fallbackReason === 'disabled-global',
    fifthLivePlanPinned:
      report.fifthLivePlan?.moduleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciMessageUtils.js'
      && report.fifthLivePlan?.waveId === 'DBR5L'
      && report.fifthLivePlan?.liveShape === 'single-module-live'
      && requiredBeforeLive.includes('build DBR5L live contract')
      && requiredBeforeLive.includes('run browser-fifth export-delta gate')
      && requiredBeforeLive.includes('run browser-fifth fallback preflight')
      && requiredBeforeLive.includes('run browser-fifth sticky-disable preflight')
      && requiredBeforeLive.includes('apply wrapper patch')
      && requiredBeforeLive.includes('run live gate'),
    blockedSurfacesPinned:
      blockedSurfaces.includes('browser third batch scope expansion')
      && blockedSurfaces.includes('browser component/widget/template live')
      && blockedSurfaces.includes('browser heavier UI/view-zone live')
      && blockedSurfaces.includes('cross-lane expansion')
      && blockedSurfaces.includes('rename-driven work'),
    runnerUpLockPinned:
      runnerUpLock.locked === true
      && runnerUpLock.approvedCandidateOnly === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciMessageUtils.js'
      && Array.isArray(runnerUpLock.blockedRunnerUps)
      && runnerUpLock.blockedRunnerUps.length === 0
      && typeof runnerUpLock.reason === 'string',
    failureClassificationPinned:
      Array.isArray(failureClassification.rollbackAdmissionOnlyOn)
      && Array.isArray(failureClassification.freezeBrowserLaneOn)
      && failureClassification.rollbackAdmissionOnlyOn.length >= 2
      && failureClassification.freezeBrowserLaneOn.length >= 3,
    thirdBatchEligibilityGatePinned:
      thirdBatchEligibilityGate.discussionBlocked === true
      && thirdBatchEligibilityGate.currentProofState === 'four-live-plus-two-batches-plus-fifth-no-op'
      && Array.isArray(thirdBatchEligibilityGate.requiredMilestonesBeforeDiscussion)
      && thirdBatchEligibilityGate.requiredMilestonesBeforeDiscussion.includes('DBR5L single-live proven')
      && thirdBatchEligibilityGate.requiredMilestonesBeforeDiscussion.includes('post-DBR5L browser lane freeze review')
      && thirdBatchEligibilityGate.requiredMilestonesBeforeDiscussion.includes('dedicated browser third-batch admission plan'),
    minimumWinPinned:
      minimumWin.definition === 'DBR5L admission plan / freeze / next-step lock all verify green and nextApprovedAction uniquely locked to browser-fifth-live-contract',
    scopeBoundaryPinned:
      Array.isArray(scopeBoundary.allowOnly)
      && scopeBoundary.allowOnly.includes('DBR5L admission artifacts')
      && scopeBoundary.allowOnly.includes('browser fifth live freeze artifacts')
      && scopeBoundary.allowOnly.includes('browser fifth live next-step lock artifacts')
      && Array.isArray(scopeBoundary.mustNotTouch)
      && scopeBoundary.mustNotTouch.includes('browser live execution')
      && scopeBoundary.mustNotTouch.includes('browser third batch'),
    followUpPriorityPinned:
      followUpPriority.next === 'browser-fifth-live-contract'
      && followUpPriority.afterThat === 'browser lane freeze review only if contract preflight semantics drift',
    freezeDecisionPinned:
      report.decision?.laneFrozen === true
      && report.decision?.laneState === 'four-single-live-proven-first-and-second-batch-live-proven-fifth-live-admission-planned'
      && report.decision?.nextApprovedStep === 'browser-fifth-live-next-step-lock'
      && report.decision?.fifthLiveAdmissionPlannedOnly === true
      && report.decision?.browserThirdBatchScopeExpansionStillBlocked === true
      && report.decision?.componentWidgetTemplateStillBlocked === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    blockedNowScoped:
      Array.isArray(report.blockedNow)
      && report.blockedNow.includes('browser third batch scope expansion')
      && report.blockedNow.includes('browser heavier UI/view-zone live')
      && report.blockedNow.includes('browser template-surface live'),
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

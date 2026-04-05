#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fourth-live-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fourth-live-freeze-review-verify.json');

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
  const secondBatchEligibilityGate = report.secondBatchEligibilityGate ?? {};
  const minimumWin = report.minimumWin ?? {};
  const scopeBoundary = report.scopeBoundary ?? {};
  const followUpPriority = report.followUpPriority ?? {};
  const requiredBeforeLive = report.fourthLivePlan?.requiredBeforeLive ?? [];

  const checks = {
    lanePinned: report.lane === 'browser',
    phasePinned: report.phase === 'fourth-live-freeze-review',
    stableRuntimeStillGreen: report.baseline?.stableRuntimeStillGreen === true,
    provenPinned:
      report.proven?.firstSingleLiveModuleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/hooks/useResourceLineCounts.js'
      && report.proven?.firstSingleLiveWaveId === 'DBR1L'
      && report.proven?.secondSingleLiveModuleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/discussionUtils.js'
      && report.proven?.secondSingleLiveWaveId === 'DBR2L'
      && report.proven?.thirdSingleLiveModuleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/diffMentionUtils.js'
      && report.proven?.thirdSingleLiveWaveId === 'DBR3L'
      && report.proven?.batchWaveId === 'DBRB1',
    fourthNoOpPinned:
      report.fourthNoOp?.moduleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/generatedFilesConstants.js'
      && report.fourthNoOp?.waveId === 'DBR4'
      && report.fourthNoOp?.mode === 'no-op-observable'
      && report.fourthNoOp?.result === 'original-pass'
      && report.fourthNoOp?.fallbackReason === 'disabled-global',
    fourthLivePlanPinned:
      report.fourthLivePlan?.moduleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/generatedFilesConstants.js'
      && report.fourthLivePlan?.waveId === 'DBR4L'
      && report.fourthLivePlan?.liveShape === 'single-module-live'
      && requiredBeforeLive.includes('build DBR4L live contract')
      && requiredBeforeLive.includes('run browser-fourth export-delta gate')
      && requiredBeforeLive.includes('run browser-fourth fallback preflight')
      && requiredBeforeLive.includes('run browser-fourth sticky-disable preflight')
      && requiredBeforeLive.includes('apply wrapper patch')
      && requiredBeforeLive.includes('run live gate'),
    blockedSurfacesPinned:
      blockedSurfaces.includes('browser batch scope expansion')
      && blockedSurfaces.includes('browser second batch live')
      && blockedSurfaces.includes('browser component/widget/template live')
      && blockedSurfaces.includes('cross-lane expansion')
      && blockedSurfaces.includes('rename-driven work'),
    runnerUpLockPinned:
      runnerUpLock.locked === true
      && runnerUpLock.approvedCandidateOnly === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/generatedFilesConstants.js'
      && Array.isArray(runnerUpLock.blockedRunnerUps)
      && runnerUpLock.blockedRunnerUps.length === 1
      && runnerUpLock.blockedRunnerUps[0] === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciMessageUtils.js',
    failureClassificationPinned:
      Array.isArray(failureClassification.rollbackAdmissionOnlyOn)
      && Array.isArray(failureClassification.freezeBrowserLaneOn)
      && failureClassification.rollbackAdmissionOnlyOn.length >= 2
      && failureClassification.freezeBrowserLaneOn.length >= 3,
    secondBatchEligibilityGatePinned:
      secondBatchEligibilityGate.discussionBlocked === true
      && secondBatchEligibilityGate.currentProofState === 'three-live-plus-first-batch-plus-fourth-no-op'
      && Array.isArray(secondBatchEligibilityGate.requiredMilestonesBeforeDiscussion)
      && secondBatchEligibilityGate.requiredMilestonesBeforeDiscussion.includes('DBR4L single-live proven')
      && secondBatchEligibilityGate.requiredMilestonesBeforeDiscussion.includes('post-DBR4L browser lane freeze review'),
    minimumWinPinned:
      minimumWin.definition === 'DBR4L admission plan / freeze / next-step lock all verify green and nextApprovedAction uniquely locked to browser-fourth-live-contract',
    scopeBoundaryPinned:
      Array.isArray(scopeBoundary.allowOnly)
      && scopeBoundary.allowOnly.includes('DBR4L admission artifacts')
      && scopeBoundary.allowOnly.includes('browser fourth live freeze artifacts')
      && scopeBoundary.allowOnly.includes('browser fourth live next-step lock artifacts')
      && Array.isArray(scopeBoundary.mustNotTouch)
      && scopeBoundary.mustNotTouch.includes('browser live execution')
      && scopeBoundary.mustNotTouch.includes('browser batch scope expansion'),
    followUpPriorityPinned:
      followUpPriority.next === 'browser-fourth-live-contract'
      && followUpPriority.afterThat === 'browser lane freeze review only if contract preflight semantics drift',
    freezeDecisionPinned:
      report.decision?.laneFrozen === true
      && report.decision?.laneState === 'three-single-live-proven-first-batch-live-proven-fourth-live-admission-planned'
      && report.decision?.nextApprovedStep === 'browser-fourth-live-next-step-lock'
      && report.decision?.fourthLiveAdmissionPlannedOnly === true
      && report.decision?.browserBatchScopeExpansionStillBlocked === true
      && report.decision?.componentWidgetTemplateStillBlocked === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    blockedNowScoped:
      Array.isArray(report.blockedNow)
      && report.blockedNow.includes('browser batch scope expansion')
      && report.blockedNow.includes('browser second batch live')
      && report.blockedNow.includes('browser fourth runner-up switch')
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

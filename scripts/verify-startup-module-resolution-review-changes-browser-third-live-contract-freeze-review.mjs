#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-live-contract-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-live-contract-freeze-review-verify.json');

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
  const batchEligibilityGate = report.batchEligibilityGate ?? {};
  const minimumWin = report.minimumWin ?? {};
  const scopeBoundary = report.scopeBoundary ?? {};
  const followUpPriority = report.followUpPriority ?? {};

  const checks = {
    lanePinned: report.lane === 'browser',
    phasePinned: report.phase === 'third-live-contract-freeze-review',
    stableRuntimeStillGreen: report.baseline?.stableRuntimeStillGreen === true,
    provenPinned:
      report.proven?.firstSingleLiveModuleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/hooks/useResourceLineCounts.js'
      && report.proven?.firstSingleLiveWaveId === 'DBR1L'
      && report.proven?.secondSingleLiveModuleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/discussionUtils.js'
      && report.proven?.secondSingleLiveWaveId === 'DBR2L'
      && report.proven?.thirdNoOpModuleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/diffMentionUtils.js'
      && report.proven?.thirdNoOpWaveId === 'DBR3',
    thirdLiveContractPinned:
      report.thirdLiveContract?.moduleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/diffMentionUtils.js'
      && report.thirdLiveContract?.waveId === 'DBR3L'
      && report.thirdLiveContract?.mode === 'live-canary'
      && report.thirdLiveContract?.resolverEnabled === true
      && report.thirdLiveContract?.laneToggleEnabled === true
      && report.thirdLiveContract?.perModuleKillSwitchEnabled === true
      && report.thirdLiveContract?.exportDeltaPassed === true
      && report.thirdLiveContract?.fallbackPreflightPassed === true
      && report.thirdLiveContract?.stickyPreflightPassed === true,
    freezeDecisionPinned:
      report.decision?.laneFrozen === true
      && report.decision?.laneState === 'two-single-live-proven-third-live-contract-ready-still-no-batch'
      && report.decision?.nextApprovedStep === 'browser-third-live-contract-next-step-lock'
      && report.decision?.thirdLiveContractReadyOnly === true
      && report.decision?.browserMultiModuleBatchStillBlocked === true
      && report.decision?.componentWidgetTemplateStillBlocked === true
      && report.decision?.browserThirdRunnerUpSwitchBlocked === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    blockedSurfacesPinned:
      blockedSurfaces.includes('browser multi-module batch live')
      && blockedSurfaces.includes('browser component/widget/template live')
      && blockedSurfaces.includes('browser view-zone or heavier UI surface')
      && blockedSurfaces.includes('cross-lane expansion')
      && blockedSurfaces.includes('rename-driven work'),
    blockedNowScoped:
      blockedNow.includes('browser multi-module batch live')
      && blockedNow.includes('browser component or widget live')
      && blockedNow.includes('browser template-surface live')
      && blockedNow.includes('browser third runner-up switch')
      && blockedNow.includes('browser third live execution before explicit run step'),
    runnerUpLockPinned:
      runnerUpLock.locked === true
      && runnerUpLock.approvedCandidateOnly === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/diffMentionUtils.js'
      && Array.isArray(runnerUpLock.blockedRunnerUps)
      && runnerUpLock.blockedRunnerUps.includes('out-build/vs/workbench/contrib/reviewChanges/browser/utils/generatedFilesConstants.js')
      && runnerUpLock.blockedRunnerUps.includes('out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciMessageUtils.js'),
    failureClassificationPinned:
      Array.isArray(failureClassification.rollbackContractOnlyOn)
      && failureClassification.rollbackContractOnlyOn.length >= 2
      && Array.isArray(failureClassification.freezeBrowserLaneOn)
      && failureClassification.freezeBrowserLaneOn.length >= 3,
    batchEligibilityGatePinned:
      batchEligibilityGate.discussionBlocked === true
      && batchEligibilityGate.currentProofState === 'two-live-plus-one-no-op'
      && Array.isArray(batchEligibilityGate.requiredMilestonesBeforeDiscussion)
      && batchEligibilityGate.requiredMilestonesBeforeDiscussion.includes('DBR3L live execution proven')
      && batchEligibilityGate.requiredMilestonesBeforeDiscussion.includes('post-DBR3L browser lane freeze review'),
    minimumWinPinned:
      minimumWin.definition === 'DBR3L live contract / export-delta / fallback / sticky-disable / freeze / next-step lock all verify green and nextApprovedAction uniquely locked to browser-third-live-execution'
      && Array.isArray(minimumWin.mustVerify)
      && minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-third-live-contract-freeze-review-verify.json')
      && minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-third-live-contract-next-step-lock-verify.json'),
    scopeBoundaryPinned:
      Array.isArray(scopeBoundary.allowOnly)
      && scopeBoundary.allowOnly.includes('DBR3L live contract artifacts')
      && scopeBoundary.allowOnly.includes('browser third export-delta artifacts')
      && scopeBoundary.allowOnly.includes('browser third fallback preflight artifacts')
      && scopeBoundary.allowOnly.includes('browser third sticky-disable preflight artifacts')
      && scopeBoundary.allowOnly.includes('browser third live contract freeze artifacts')
      && scopeBoundary.allowOnly.includes('browser third live contract next-step lock artifacts')
      && Array.isArray(scopeBoundary.mustNotTouch)
      && scopeBoundary.mustNotTouch.includes('browser live execution')
      && scopeBoundary.mustNotTouch.includes('browser batch')
      && scopeBoundary.mustNotTouch.includes('reviewChanges main lane')
      && scopeBoundary.mustNotTouch.includes('composer lane')
      && scopeBoundary.mustNotTouch.includes('mechanical recovery chain'),
    followUpPriorityPinned:
      followUpPriority.next === 'browser-third-live-execution'
      && followUpPriority.afterThat === 'browser lane freeze review only after live execution result is frozen',
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

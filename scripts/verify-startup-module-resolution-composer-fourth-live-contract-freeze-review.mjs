#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fourth-live-contract-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fourth-live-contract-freeze-review-verify.json');

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
  const widerBatchEligibilityGate = report.widerBatchEligibilityGate ?? {};
  const minimumWin = report.minimumWin ?? {};
  const scopeBoundary = report.scopeBoundary ?? {};
  const followUpPriority = report.followUpPriority ?? {};

  const checks = {
    lanePinned: report.lane === 'contrib-composer',
    phasePinned: report.phase === 'fourth-live-contract-freeze-review',
    stableRuntimeStillGreen: report.baseline?.stableRuntimeStillGreen === true,
    provenPinned:
      report.proven?.firstSingleLiveModuleId === 'out-build/vs/workbench/contrib/composer/common/composerUtils.js'
      && report.proven?.firstSingleLiveWaveId === 'DC1'
      && report.proven?.secondSingleLiveModuleId === 'out-build/vs/workbench/contrib/composer/browser/composerContextServiceTypes.js'
      && report.proven?.secondSingleLiveWaveId === 'DC2'
      && report.proven?.thirdSingleLiveModuleId === 'out-build/vs/workbench/contrib/composer/browser/composerModelFilters.js'
      && report.proven?.thirdSingleLiveWaveId === 'DC3L'
      && report.proven?.firstMicroBatchWaveId === 'DCB1'
      && report.proven?.fourthNoOpModuleId === 'out-build/vs/workbench/contrib/composer/browser/composerFileChangeHandlerTypes.js'
      && report.proven?.fourthNoOpWaveId === 'DC4',
    fourthLiveContractPinned:
      report.fourthLiveContract?.moduleId === 'out-build/vs/workbench/contrib/composer/browser/composerFileChangeHandlerTypes.js'
      && report.fourthLiveContract?.waveId === 'DC4L'
      && report.fourthLiveContract?.mode === 'live-canary'
      && report.fourthLiveContract?.resolverEnabled === true
      && report.fourthLiveContract?.laneToggleEnabled === true
      && report.fourthLiveContract?.perModuleKillSwitchEnabled === true
      && report.fourthLiveContract?.exportDeltaPassed === true
      && report.fourthLiveContract?.fallbackPreflightPassed === true
      && report.fourthLiveContract?.stickyPreflightPassed === true,
    freezeDecisionPinned:
      report.decision?.laneFrozen === true
      && report.decision?.laneState === 'contrib-composer-three-single-live-one-micro-batch-fourth-live-contract-ready'
      && report.decision?.nextApprovedStep === 'composer-fourth-live-contract-next-step-lock'
      && report.decision?.fourthLiveContractReadyOnly === true
      && report.decision?.widerBatchExpansionStillBlocked === true
      && report.decision?.reviewChangesLaneStillFrozen === true
      && report.decision?.broadBrowserStillHeld === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    blockedSurfacesPinned:
      blockedSurfaces.includes('composer wider batch expansion')
      && blockedSurfaces.includes('new reviewChanges browser surface expansion')
      && blockedSurfaces.includes('cross-lane expansion')
      && blockedSurfaces.includes('rename-driven work'),
    blockedNowScoped:
      blockedNow.includes('composer wider batch expansion')
      && blockedNow.includes('new reviewChanges browser surface expansion')
      && blockedNow.includes('cross-lane expansion')
      && blockedNow.includes('composer fourth live execution before explicit run step'),
    runnerUpLockPinned:
      runnerUpLock.locked === true
      && runnerUpLock.approvedCandidateOnly === 'out-build/vs/workbench/contrib/composer/browser/composerFileChangeHandlerTypes.js'
      && Array.isArray(runnerUpLock.blockedRunnerUps)
      && runnerUpLock.blockedRunnerUps.length === 3
      && runnerUpLock.blockedRunnerUps.includes('out-build/vs/workbench/contrib/composer/browser/composerChatServiceInterface.js')
      && runnerUpLock.blockedRunnerUps.includes('out-build/vs/workbench/contrib/composer/browser/utils/debugLogFileUtils.js')
      && runnerUpLock.blockedRunnerUps.includes('out-build/vs/workbench/contrib/composer/browser/composerBlobStore.js'),
    failureClassificationPinned:
      Array.isArray(failureClassification.rollbackContractOnlyOn)
      && failureClassification.rollbackContractOnlyOn.length >= 2
      && Array.isArray(failureClassification.freezeComposerLaneOn)
      && failureClassification.freezeComposerLaneOn.length >= 3,
    widerBatchEligibilityGatePinned:
      widerBatchEligibilityGate.discussionBlocked === true
      && widerBatchEligibilityGate.currentProofState === 'three-single-live-plus-first-micro-batch-plus-fourth-contract-ready'
      && Array.isArray(widerBatchEligibilityGate.requiredMilestonesBeforeDiscussion)
      && widerBatchEligibilityGate.requiredMilestonesBeforeDiscussion.includes('DC4L live execution proven')
      && widerBatchEligibilityGate.requiredMilestonesBeforeDiscussion.includes('post-DC4L composer lane freeze review'),
    minimumWinPinned:
      minimumWin.definition === 'DC4L live contract / export-delta / fallback / sticky-disable / freeze / next-step lock all verify green and nextApprovedAction uniquely locked to composer-fourth-live-execution'
      && Array.isArray(minimumWin.mustVerify)
      && minimumWin.mustVerify.includes('startup-module-resolution-composer-fourth-live-contract-freeze-review-verify.json')
      && minimumWin.mustVerify.includes('startup-module-resolution-composer-fourth-live-contract-next-step-lock-verify.json'),
    scopeBoundaryPinned:
      Array.isArray(scopeBoundary.allowOnly)
      && scopeBoundary.allowOnly.includes('DC4L live contract artifacts')
      && scopeBoundary.allowOnly.includes('composer fourth export-delta artifacts')
      && scopeBoundary.allowOnly.includes('composer fourth fallback preflight artifacts')
      && scopeBoundary.allowOnly.includes('composer fourth sticky-disable preflight artifacts')
      && scopeBoundary.allowOnly.includes('composer fourth live contract freeze artifacts')
      && scopeBoundary.allowOnly.includes('composer fourth live contract next-step lock artifacts')
      && Array.isArray(scopeBoundary.mustNotTouch)
      && scopeBoundary.mustNotTouch.includes('composer live execution')
      && scopeBoundary.mustNotTouch.includes('composer wider batch expansion')
      && scopeBoundary.mustNotTouch.includes('reviewChanges lane')
      && scopeBoundary.mustNotTouch.includes('browser lane')
      && scopeBoundary.mustNotTouch.includes('mechanical recovery chain'),
    followUpPriorityPinned:
      followUpPriority.next === 'composer-fourth-live-execution'
      && followUpPriority.afterThat === 'composer lane freeze review only after fourth live execution result is frozen',
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

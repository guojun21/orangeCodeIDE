#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-seventh-live-admission-plan.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-seventh-live-admission-plan-verify.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const report = readJson(INPUT_PATH);
  const prerequisites = report.prerequisites ?? {};
  const requiredBeforeLive = report.requiredBeforeLive ?? [];
  const stopConditions = report.stopConditions ?? [];
  const rationale = report.candidate?.rationale ?? [];
  const blockedSurfaces = report.blockedSurfaces ?? [];
  const runnerUpLock = report.runnerUpLock ?? {};
  const failureClassification = report.failureClassification ?? {};
  const widerBatchEligibilityGate = report.widerBatchEligibilityGate ?? {};
  const minimumWin = report.minimumWin ?? {};
  const scopeBoundary = report.scopeBoundary ?? {};
  const reachabilityAssessment = report.reachabilityAssessment ?? {};
  const followUpPriority = report.followUpPriority ?? {};
  const moduleId = 'out-build/vs/workbench/contrib/composer/browser/composerBlobStore.js';

  const checks = {
    lanePinned: report.lane === 'contrib-composer',
    phasePinned: report.phase === 'seventh-live-admission-plan',
    candidatePinned:
      report.candidate?.waveId === 'DC7L'
      && report.candidate?.moduleId === moduleId
      && report.candidate?.sourceFile === 'rebuilt/src/project-modules-beautified/out-build/vs/workbench/contrib/composer/browser/composerBlobStore.js'
      && report.candidate?.runtimeInputFile === 'recovered/startup-loader/input/out-build/vs/workbench/contrib/composer/browser/composerBlobStore.js'
      && report.candidate?.liveShape === 'single-module-live',
    rationalePinned:
      Array.isArray(rationale)
      && rationale.includes('stateful browser-side blob-store holder is now the next smallest remaining composer browser store surface even at live-admission time')
      && rationale.includes('still non-component and non-renderer-facing at admission time, but broader than prior utility and interface candidates so this stage remains contract-planned only')
      && rationale.includes('source and startup-loader input remain aligned after DC7 dedicated no-op runtime freeze')
      && rationale.includes('runner-ups still carry broader browserViewStore, serialization, worktree, or data-creation fan-out than composerBlobStore.js'),
    prerequisitesPinned:
      prerequisites.seventhNoOpPassed === true
      && prerequisites.seventhNoOpWaveId === 'DC7'
      && prerequisites.firstSingleLiveStillProven === true
      && prerequisites.secondSingleLiveStillProven === true
      && prerequisites.thirdSingleLiveStillProven === true
      && prerequisites.fourthSingleLiveStillProven === true
      && prerequisites.fifthSingleLiveStillProven === true
      && prerequisites.sixthSingleLiveStillProven === true
      && prerequisites.firstMicroBatchStillProven === true
      && prerequisites.stableSpikeStillGreen === true
      && prerequisites.stableRuntimeStillGreen === true
      && prerequisites.reviewChangesLaneStillFrozen === true
      && prerequisites.broadBrowserStillHeld === true,
    blockedSurfacesPinned:
      blockedSurfaces.includes('composer wider batch expansion')
      && blockedSurfaces.includes('new reviewChanges browser surface expansion')
      && blockedSurfaces.includes('cross-lane expansion')
      && blockedSurfaces.includes('rename-driven work'),
    requiredBeforeLivePresent:
      requiredBeforeLive.includes('build DC7L live contract')
      && requiredBeforeLive.includes('run composer-seventh export-delta gate')
      && requiredBeforeLive.includes('run composer-seventh fallback preflight')
      && requiredBeforeLive.includes('run composer-seventh sticky-disable preflight')
      && requiredBeforeLive.includes('apply wrapper patch')
      && requiredBeforeLive.includes('run live gate')
      && requiredBeforeLive.includes('run smoke')
      && requiredBeforeLive.includes('run workbench-desktop-main spike')
      && requiredBeforeLive.includes('run accept')
      && requiredBeforeLive.includes('run quality-report'),
    stopConditionsPresent:
      stopConditions.length >= 5
      && stopConditions.includes('DC7L single-live gate does not record overlay-hit')
      && stopConditions.includes('do not discuss wider composer batch while DC7 is only no-op proven'),
    runnerUpLockPinned:
      runnerUpLock.locked === true
      && runnerUpLock.approvedCandidateOnly === moduleId
      && Array.isArray(runnerUpLock.blockedRunnerUps)
      && runnerUpLock.blockedRunnerUps.length === 4
      && runnerUpLock.blockedRunnerUps.includes('out-build/vs/workbench/contrib/composer/browser/browserViewStore.js')
      && runnerUpLock.blockedRunnerUps.includes('out-build/vs/workbench/contrib/composer/browser/capabilities/serializeToolformerBubbleData.js')
      && runnerUpLock.blockedRunnerUps.includes('out-build/vs/workbench/contrib/composer/browser/worktreeGate.js')
      && runnerUpLock.blockedRunnerUps.includes('out-build/vs/workbench/contrib/composer/browser/composerDataCreation.js'),
    failureClassificationPinned:
      Array.isArray(failureClassification.rollbackAdmissionOnlyOn)
      && failureClassification.rollbackAdmissionOnlyOn.length >= 2
      && Array.isArray(failureClassification.freezeComposerLaneOn)
      && failureClassification.freezeComposerLaneOn.length >= 3,
    widerBatchEligibilityGatePinned:
      widerBatchEligibilityGate.discussionBlocked === true
      && widerBatchEligibilityGate.currentProofState === 'six-single-live-plus-first-micro-batch-plus-seventh-no-op'
      && typeof widerBatchEligibilityGate.whyCurrentProofIsInsufficient === 'string'
      && Array.isArray(widerBatchEligibilityGate.requiredMilestonesBeforeDiscussion)
      && widerBatchEligibilityGate.requiredMilestonesBeforeDiscussion.includes('DC7L single-live proven')
      && widerBatchEligibilityGate.requiredMilestonesBeforeDiscussion.includes('post-DC7L composer lane freeze review'),
    minimumWinPinned:
      minimumWin.definition === 'DC7L admission plan / freeze / next-step lock all verify green and nextApprovedAction uniquely locked to composer-seventh-live-contract'
      && Array.isArray(minimumWin.mustVerify)
      && minimumWin.mustVerify.includes('startup-module-resolution-composer-seventh-live-admission-plan-verify.json')
      && minimumWin.mustVerify.includes('startup-module-resolution-composer-seventh-live-freeze-review-verify.json')
      && minimumWin.mustVerify.includes('startup-module-resolution-composer-seventh-live-next-step-lock-verify.json'),
    scopeBoundaryPinned:
      Array.isArray(scopeBoundary.allowOnly)
      && scopeBoundary.allowOnly.includes('DC7L admission artifacts')
      && scopeBoundary.allowOnly.includes('composer seventh live freeze artifacts')
      && scopeBoundary.allowOnly.includes('composer seventh live next-step lock artifacts')
      && Array.isArray(scopeBoundary.mustNotTouch)
      && scopeBoundary.mustNotTouch.includes('composer live execution')
      && scopeBoundary.mustNotTouch.includes('composer wider batch expansion')
      && scopeBoundary.mustNotTouch.includes('reviewChanges lane')
      && scopeBoundary.mustNotTouch.includes('browser lane')
      && scopeBoundary.mustNotTouch.includes('mechanical recovery chain'),
    reachabilityAssessmentPinned:
      reachabilityAssessment.reachable === true
      && reachabilityAssessment.safestShortPath === 'DC7L admission -> seventh-live freeze review -> seventh-live next-step lock -> composer-seventh-live-contract'
      && typeof reachabilityAssessment.biggestGap === 'string',
    followUpPriorityPinned:
      followUpPriority.next === 'composer-seventh-live-contract'
      && followUpPriority.afterThat === 'composer lane freeze review only if contract preflight semantics drift',
    nextActionPinned:
      report.decision?.admissionPlanReady === true
      && report.decision?.executionStillPending === true
      && report.decision?.nextApprovedAction === 'composer-seventh-live-contract'
      && report.decision?.nextApprovedWaveId === 'DC7L'
      && report.decision?.widerBatchExpansionStillBlocked === true,
    rollbackPinned:
      Array.isArray(report.rollbackPolicy?.perModuleKillSwitchOn)
      && report.rollbackPolicy.perModuleKillSwitchOn.length === 1
      && report.rollbackPolicy.perModuleKillSwitchOn[0] === moduleId
      && Array.isArray(report.rollbackPolicy?.laneFreezeOn)
      && report.rollbackPolicy.laneFreezeOn.length >= 3,
    admissionOnly:
      !('runtimeGatePath' in report)
      && !('liveGatePath' in report)
      && !('wrapperPatchPath' in report),
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

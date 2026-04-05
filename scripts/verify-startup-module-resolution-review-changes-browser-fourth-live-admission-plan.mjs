#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fourth-live-admission-plan.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fourth-live-admission-plan-verify.json');

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
  const secondBatchEligibilityGate = report.secondBatchEligibilityGate ?? {};
  const minimumWin = report.minimumWin ?? {};
  const scopeBoundary = report.scopeBoundary ?? {};
  const reachabilityAssessment = report.reachabilityAssessment ?? {};
  const followUpPriority = report.followUpPriority ?? {};
  const moduleId = 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/generatedFilesConstants.js';

  const checks = {
    lanePinned: report.lane === 'browser',
    phasePinned: report.phase === 'fourth-live-admission-plan',
    candidatePinned:
      report.candidate?.waveId === 'DBR4L'
      && report.candidate?.moduleId === moduleId
      && report.candidate?.sourceFile === 'rebuilt/src/project-modules-beautified/out-build/vs/workbench/contrib/reviewChanges/browser/utils/generatedFilesConstants.js'
      && report.candidate?.runtimeInputFile === 'recovered/startup-loader/input/out-build/vs/workbench/contrib/reviewChanges/browser/utils/generatedFilesConstants.js'
      && report.candidate?.liveShape === 'single-module-live',
    rationalePinned:
      Array.isArray(rationale)
      && rationale.includes('constant-oriented browser util candidate with no direct DOM/template/component surface')
      && rationale.includes('no manager/stateful resource-holder signals in the recovered slice')
      && rationale.includes('source and startup-loader input remain aligned after DBR4 no-op runtime freeze')
      && rationale.includes('runner-up ciMessageUtils.js still carries higher initializer ambiguity than generatedFilesConstants.js'),
    prerequisitesPinned:
      prerequisites.fourthNoOpPassed === true
      && prerequisites.fourthNoOpWaveId === 'DBR4'
      && prerequisites.firstSingleLiveStillProven === true
      && prerequisites.secondSingleLiveStillProven === true
      && prerequisites.thirdSingleLiveStillProven === true
      && prerequisites.firstBatchStillProven === true
      && prerequisites.stableSpikeStillGreen === true
      && prerequisites.stableRuntimeStillGreen === true
      && prerequisites.browserBatchScopeExpansionStillBlocked === true,
    blockedSurfacesPinned:
      blockedSurfaces.includes('browser batch scope expansion')
      && blockedSurfaces.includes('browser second batch live')
      && blockedSurfaces.includes('browser component/widget/template live')
      && blockedSurfaces.includes('cross-lane expansion')
      && blockedSurfaces.includes('rename-driven work'),
    requiredBeforeLivePresent:
      requiredBeforeLive.includes('build DBR4L live contract')
      && requiredBeforeLive.includes('run browser-fourth export-delta gate')
      && requiredBeforeLive.includes('run browser-fourth fallback preflight')
      && requiredBeforeLive.includes('run browser-fourth sticky-disable preflight')
      && requiredBeforeLive.includes('apply wrapper patch')
      && requiredBeforeLive.includes('run live gate')
      && requiredBeforeLive.includes('run smoke')
      && requiredBeforeLive.includes('run workbench-desktop-main spike')
      && requiredBeforeLive.includes('run accept')
      && requiredBeforeLive.includes('run quality-report'),
    stopConditionsPresent:
      stopConditions.length >= 5
      && stopConditions.includes('DBR4L single-live gate does not record overlay-hit')
      && stopConditions.includes('do not discuss second browser batch while DBR4 is only no-op proven'),
    runnerUpLockPinned:
      runnerUpLock.locked === true
      && runnerUpLock.approvedCandidateOnly === moduleId
      && Array.isArray(runnerUpLock.blockedRunnerUps)
      && runnerUpLock.blockedRunnerUps.length === 1
      && runnerUpLock.blockedRunnerUps[0] === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciMessageUtils.js',
    failureClassificationPinned:
      Array.isArray(failureClassification.rollbackAdmissionOnlyOn)
      && failureClassification.rollbackAdmissionOnlyOn.length >= 2
      && Array.isArray(failureClassification.freezeBrowserLaneOn)
      && failureClassification.freezeBrowserLaneOn.length >= 3,
    secondBatchEligibilityGatePinned:
      secondBatchEligibilityGate.discussionBlocked === true
      && secondBatchEligibilityGate.currentProofState === 'three-live-plus-first-batch-plus-fourth-no-op'
      && typeof secondBatchEligibilityGate.whyCurrentProofIsInsufficient === 'string'
      && Array.isArray(secondBatchEligibilityGate.requiredMilestonesBeforeDiscussion)
      && secondBatchEligibilityGate.requiredMilestonesBeforeDiscussion.includes('DBR4L single-live proven')
      && secondBatchEligibilityGate.requiredMilestonesBeforeDiscussion.includes('post-DBR4L browser lane freeze review'),
    minimumWinPinned:
      minimumWin.definition === 'DBR4L admission plan / freeze / next-step lock all verify green and nextApprovedAction uniquely locked to browser-fourth-live-contract'
      && Array.isArray(minimumWin.mustVerify)
      && minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-fourth-live-admission-plan-verify.json')
      && minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-fourth-live-freeze-review-verify.json')
      && minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-fourth-live-next-step-lock-verify.json'),
    scopeBoundaryPinned:
      Array.isArray(scopeBoundary.allowOnly)
      && scopeBoundary.allowOnly.includes('DBR4L admission artifacts')
      && scopeBoundary.allowOnly.includes('browser fourth live freeze artifacts')
      && scopeBoundary.allowOnly.includes('browser fourth live next-step lock artifacts')
      && Array.isArray(scopeBoundary.mustNotTouch)
      && scopeBoundary.mustNotTouch.includes('browser live execution')
      && scopeBoundary.mustNotTouch.includes('browser batch scope expansion')
      && scopeBoundary.mustNotTouch.includes('reviewChanges main lane')
      && scopeBoundary.mustNotTouch.includes('composer lane')
      && scopeBoundary.mustNotTouch.includes('mechanical recovery chain'),
    reachabilityAssessmentPinned:
      reachabilityAssessment.reachable === true
      && reachabilityAssessment.safestShortPath === 'DBR4L admission -> fourth-live freeze review -> fourth-live next-step lock -> browser-fourth-live-contract'
      && typeof reachabilityAssessment.biggestGap === 'string',
    followUpPriorityPinned:
      followUpPriority.next === 'browser-fourth-live-contract'
      && followUpPriority.afterThat === 'browser lane freeze review only if contract preflight semantics drift',
    nextActionPinned:
      report.decision?.admissionPlanReady === true
      && report.decision?.executionStillPending === true
      && report.decision?.nextApprovedAction === 'browser-fourth-live-contract'
      && report.decision?.nextApprovedWaveId === 'DBR4L'
      && report.decision?.batchScopeExpansionStillBlocked === true,
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

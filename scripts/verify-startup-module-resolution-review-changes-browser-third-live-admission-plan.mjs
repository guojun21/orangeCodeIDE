#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-live-admission-plan.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-live-admission-plan-verify.json');

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
  const batchEligibilityGate = report.batchEligibilityGate ?? {};
  const minimumWin = report.minimumWin ?? {};
  const scopeBoundary = report.scopeBoundary ?? {};
  const reachabilityAssessment = report.reachabilityAssessment ?? {};
  const followUpPriority = report.followUpPriority ?? {};
  const moduleId = 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/diffMentionUtils.js';

  const checks = {
    lanePinned: report.lane === 'browser',
    phasePinned: report.phase === 'third-live-admission-plan',
    candidatePinned:
      report.candidate?.waveId === 'DBR3L'
      && report.candidate?.moduleId === moduleId
      && report.candidate?.sourceFile === 'rebuilt/src/project-modules-beautified/out-build/vs/workbench/contrib/reviewChanges/browser/utils/diffMentionUtils.js'
      && report.candidate?.runtimeInputFile === 'recovered/startup-loader/input/out-build/vs/workbench/contrib/reviewChanges/browser/utils/diffMentionUtils.js'
      && report.candidate?.liveShape === 'single-module-live',
    rationalePinned:
      Array.isArray(rationale)
      && rationale.includes('util-level browser candidate with no direct DOM/template/component surface')
      && rationale.includes('no manager/stateful resource-holder signals in the recovered slice')
      && rationale.includes('source and startup-loader input currently share the same minimal body shape')
      && rationale.includes('more suitable for a third single-live than the remaining browser util runner-ups'),
    prerequisitesPinned:
      prerequisites.thirdNoOpPassed === true
      && prerequisites.thirdNoOpWaveId === 'DBR3'
      && prerequisites.firstSingleLiveStillProven === true
      && prerequisites.secondSingleLiveStillProven === true
      && prerequisites.stableSpikeStillGreen === true
      && prerequisites.stableRuntimeStillGreen === true
      && prerequisites.browserBatchStillBlocked === true,
    blockedSurfacesPinned:
      blockedSurfaces.includes('browser multi-module batch live')
      && blockedSurfaces.includes('browser component/widget/template live')
      && blockedSurfaces.includes('browser view-zone or heavier UI surface')
      && blockedSurfaces.includes('cross-lane expansion')
      && blockedSurfaces.includes('rename-driven work'),
    requiredBeforeLivePresent:
      requiredBeforeLive.includes('build DBR3L live contract')
      && requiredBeforeLive.includes('run browser-third export-delta gate')
      && requiredBeforeLive.includes('run browser-third fallback preflight')
      && requiredBeforeLive.includes('run browser-third sticky-disable preflight')
      && requiredBeforeLive.includes('apply wrapper patch')
      && requiredBeforeLive.includes('run live gate')
      && requiredBeforeLive.includes('run smoke')
      && requiredBeforeLive.includes('run workbench-desktop-main spike')
      && requiredBeforeLive.includes('run accept')
      && requiredBeforeLive.includes('run quality-report'),
    stopConditionsPresent:
      stopConditions.length >= 5
      && stopConditions.includes('DBR3L single-live gate does not record overlay-hit')
      && stopConditions.includes('do not discuss browser batch while only two browser live and one third browser no-op are proven'),
    runnerUpLockPinned:
      runnerUpLock.locked === true
      && runnerUpLock.approvedCandidateOnly === moduleId
      && Array.isArray(runnerUpLock.blockedRunnerUps)
      && runnerUpLock.blockedRunnerUps.includes('out-build/vs/workbench/contrib/reviewChanges/browser/utils/generatedFilesConstants.js')
      && runnerUpLock.blockedRunnerUps.includes('out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciMessageUtils.js'),
    failureClassificationPinned:
      Array.isArray(failureClassification.rollbackAdmissionOnlyOn)
      && failureClassification.rollbackAdmissionOnlyOn.length >= 2
      && Array.isArray(failureClassification.freezeBrowserLaneOn)
      && failureClassification.freezeBrowserLaneOn.length >= 3,
    batchEligibilityGatePinned:
      batchEligibilityGate.discussionBlocked === true
      && batchEligibilityGate.currentProofState === 'two-live-plus-one-no-op'
      && typeof batchEligibilityGate.whyCurrentProofIsInsufficient === 'string'
      && Array.isArray(batchEligibilityGate.requiredMilestonesBeforeDiscussion)
      && batchEligibilityGate.requiredMilestonesBeforeDiscussion.includes('DBR3L single-live proven')
      && batchEligibilityGate.requiredMilestonesBeforeDiscussion.includes('post-DBR3L browser lane freeze review'),
    minimumWinPinned:
      minimumWin.definition === 'DBR3L admission plan / freeze / next-step lock all verify green and nextApprovedAction uniquely locked to browser-third-live-contract'
      && Array.isArray(minimumWin.mustVerify)
      && minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-third-live-admission-plan-verify.json')
      && minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-third-live-freeze-review-verify.json')
      && minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-third-live-next-step-lock-verify.json'),
    scopeBoundaryPinned:
      Array.isArray(scopeBoundary.allowOnly)
      && scopeBoundary.allowOnly.includes('DBR3L admission artifacts')
      && scopeBoundary.allowOnly.includes('browser third live freeze artifacts')
      && scopeBoundary.allowOnly.includes('browser third live next-step lock artifacts')
      && Array.isArray(scopeBoundary.mustNotTouch)
      && scopeBoundary.mustNotTouch.includes('browser live execution')
      && scopeBoundary.mustNotTouch.includes('browser batch')
      && scopeBoundary.mustNotTouch.includes('reviewChanges main lane')
      && scopeBoundary.mustNotTouch.includes('composer lane')
      && scopeBoundary.mustNotTouch.includes('mechanical recovery chain'),
    reachabilityAssessmentPinned:
      reachabilityAssessment.reachable === true
      && reachabilityAssessment.safestShortPath === 'DBR3L admission -> third-live freeze review -> third-live next-step lock -> browser-third-live-contract'
      && typeof reachabilityAssessment.biggestGap === 'string',
    followUpPriorityPinned:
      followUpPriority.next === 'browser-third-live-contract'
      && followUpPriority.afterThat === 'browser lane freeze review only if contract preflight semantics drift',
    nextActionPinned:
      report.decision?.admissionPlanReady === true
      && report.decision?.executionStillPending === true
      && report.decision?.nextApprovedAction === 'browser-third-live-contract'
      && report.decision?.nextApprovedWaveId === 'DBR3L'
      && report.decision?.multiModuleBatchStillBlocked === true,
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

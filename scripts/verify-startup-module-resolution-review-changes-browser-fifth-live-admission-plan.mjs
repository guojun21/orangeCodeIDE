#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fifth-live-admission-plan.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fifth-live-admission-plan-verify.json');

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
  const thirdBatchEligibilityGate = report.thirdBatchEligibilityGate ?? {};
  const minimumWin = report.minimumWin ?? {};
  const scopeBoundary = report.scopeBoundary ?? {};
  const reachabilityAssessment = report.reachabilityAssessment ?? {};
  const followUpPriority = report.followUpPriority ?? {};
  const moduleId = 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciMessageUtils.js';

  const checks = {
    lanePinned: report.lane === 'browser',
    phasePinned: report.phase === 'fifth-live-admission-plan',
    candidatePinned:
      report.candidate?.waveId === 'DBR5L'
      && report.candidate?.moduleId === moduleId
      && report.candidate?.sourceFile === 'rebuilt/src/project-modules-beautified/out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciMessageUtils.js'
      && report.candidate?.runtimeInputFile === 'recovered/startup-loader/input/out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciMessageUtils.js'
      && report.candidate?.liveShape === 'single-module-live',
    rationalePinned:
      Array.isArray(rationale)
      && rationale.includes('initializer-heavy browser util candidate that still remains outside DOM/template/component surface')
      && rationale.includes('no manager/stateful resource-holder signals are visible in the recovered slice')
      && rationale.includes('source and startup-loader input remain aligned after DBR5 no-op runtime freeze')
      && rationale.includes('although initializer-heavy, DBR5 no-op already proves the module stays observable on the current green baseline')
      && rationale.includes('this is the last remaining browser util candidate and no same-scope runner-up remains'),
    prerequisitesPinned:
      prerequisites.fifthNoOpPassed === true
      && prerequisites.fifthNoOpWaveId === 'DBR5'
      && prerequisites.firstSingleLiveStillProven === true
      && prerequisites.secondSingleLiveStillProven === true
      && prerequisites.thirdSingleLiveStillProven === true
      && prerequisites.fourthSingleLiveStillProven === true
      && prerequisites.firstBatchStillProven === true
      && prerequisites.secondBatchStillProven === true
      && prerequisites.stableSpikeStillGreen === true
      && prerequisites.stableRuntimeStillGreen === true
      && prerequisites.browserThirdBatchScopeExpansionStillBlocked === true,
    blockedSurfacesPinned:
      blockedSurfaces.includes('browser third batch scope expansion')
      && blockedSurfaces.includes('browser component/widget/template live')
      && blockedSurfaces.includes('browser heavier UI/view-zone live')
      && blockedSurfaces.includes('cross-lane expansion')
      && blockedSurfaces.includes('rename-driven work'),
    requiredBeforeLivePresent:
      requiredBeforeLive.includes('build DBR5L live contract')
      && requiredBeforeLive.includes('run browser-fifth export-delta gate')
      && requiredBeforeLive.includes('run browser-fifth fallback preflight')
      && requiredBeforeLive.includes('run browser-fifth sticky-disable preflight')
      && requiredBeforeLive.includes('apply wrapper patch')
      && requiredBeforeLive.includes('run live gate')
      && requiredBeforeLive.includes('run smoke')
      && requiredBeforeLive.includes('run workbench-desktop-main spike')
      && requiredBeforeLive.includes('run accept')
      && requiredBeforeLive.includes('run quality-report'),
    stopConditionsPresent:
      stopConditions.length >= 5
      && stopConditions.includes('DBR5L single-live gate does not record overlay-hit')
      && stopConditions.includes('do not discuss third browser batch while DBR5 is only no-op proven'),
    runnerUpLockPinned:
      runnerUpLock.locked === true
      && runnerUpLock.approvedCandidateOnly === moduleId
      && Array.isArray(runnerUpLock.blockedRunnerUps)
      && runnerUpLock.blockedRunnerUps.length === 0
      && typeof runnerUpLock.reason === 'string',
    failureClassificationPinned:
      Array.isArray(failureClassification.rollbackAdmissionOnlyOn)
      && failureClassification.rollbackAdmissionOnlyOn.length >= 2
      && Array.isArray(failureClassification.freezeBrowserLaneOn)
      && failureClassification.freezeBrowserLaneOn.length >= 3,
    thirdBatchEligibilityGatePinned:
      thirdBatchEligibilityGate.discussionBlocked === true
      && thirdBatchEligibilityGate.currentProofState === 'four-live-plus-two-batches-plus-fifth-no-op'
      && typeof thirdBatchEligibilityGate.whyCurrentProofIsInsufficient === 'string'
      && Array.isArray(thirdBatchEligibilityGate.requiredMilestonesBeforeDiscussion)
      && thirdBatchEligibilityGate.requiredMilestonesBeforeDiscussion.includes('DBR5L single-live proven')
      && thirdBatchEligibilityGate.requiredMilestonesBeforeDiscussion.includes('post-DBR5L browser lane freeze review')
      && thirdBatchEligibilityGate.requiredMilestonesBeforeDiscussion.includes('dedicated browser third-batch admission plan'),
    minimumWinPinned:
      minimumWin.definition === 'DBR5L admission plan / freeze / next-step lock all verify green and nextApprovedAction uniquely locked to browser-fifth-live-contract'
      && Array.isArray(minimumWin.mustVerify)
      && minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-fifth-live-admission-plan-verify.json')
      && minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-fifth-live-freeze-review-verify.json')
      && minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-fifth-live-next-step-lock-verify.json'),
    scopeBoundaryPinned:
      Array.isArray(scopeBoundary.allowOnly)
      && scopeBoundary.allowOnly.includes('DBR5L admission artifacts')
      && scopeBoundary.allowOnly.includes('browser fifth live freeze artifacts')
      && scopeBoundary.allowOnly.includes('browser fifth live next-step lock artifacts')
      && Array.isArray(scopeBoundary.mustNotTouch)
      && scopeBoundary.mustNotTouch.includes('browser live execution')
      && scopeBoundary.mustNotTouch.includes('browser third batch')
      && scopeBoundary.mustNotTouch.includes('browser component/widget/template')
      && scopeBoundary.mustNotTouch.includes('reviewChanges main lane')
      && scopeBoundary.mustNotTouch.includes('composer lane')
      && scopeBoundary.mustNotTouch.includes('mechanical recovery chain'),
    reachabilityAssessmentPinned:
      reachabilityAssessment.reachable === true
      && reachabilityAssessment.safestShortPath === 'DBR5L admission -> fifth-live freeze review -> fifth-live next-step lock -> browser-fifth-live-contract'
      && typeof reachabilityAssessment.biggestGap === 'string',
    followUpPriorityPinned:
      followUpPriority.next === 'browser-fifth-live-contract'
      && followUpPriority.afterThat === 'browser lane freeze review only if contract preflight semantics drift',
    nextActionPinned:
      report.decision?.admissionPlanReady === true
      && report.decision?.executionStillPending === true
      && report.decision?.nextApprovedAction === 'browser-fifth-live-contract'
      && report.decision?.nextApprovedWaveId === 'DBR5L'
      && report.decision?.thirdBatchScopeExpansionStillBlocked === true,
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

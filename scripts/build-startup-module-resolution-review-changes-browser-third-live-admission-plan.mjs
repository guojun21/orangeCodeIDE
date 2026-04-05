#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const THIRD_RUNTIME_NEXT_STEP_LOCK_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-runtime-next-step-lock.json');
const THIRD_RUNTIME_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-runtime-freeze-review.json');
const THIRD_RUNTIME_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-browser-third-module-resolution-runtime-gate.json');
const THIRD_ADMISSION_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-admission.json');
const FIRST_BROWSER_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-browser-module-resolution-live-gate.json');
const SECOND_BROWSER_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-browser-second-module-resolution-live-gate.json');
const SPIKE_PATH = path.join(ROOT, 'mapped', 'workbench-desktop-main-spike-check.json');
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-live-admission-plan.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const thirdRuntimeLock = readJson(THIRD_RUNTIME_NEXT_STEP_LOCK_PATH);
  const thirdRuntimeFreeze = readJson(THIRD_RUNTIME_FREEZE_REVIEW_PATH);
  const thirdRuntimeGate = readJson(THIRD_RUNTIME_GATE_PATH);
  const thirdAdmission = readJson(THIRD_ADMISSION_PATH);
  const firstBrowserLiveGate = readJson(FIRST_BROWSER_LIVE_GATE_PATH);
  const secondBrowserLiveGate = readJson(SECOND_BROWSER_LIVE_GATE_PATH);
  const spike = readJson(SPIKE_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);

  const moduleId = thirdAdmission.approvedCandidate?.moduleId ?? null;
  const sourceFile = thirdAdmission.approvedCandidate?.sourceFile ?? null;
  const runtimeInputFile = thirdAdmission.approvedCandidate?.runtimeInputFile ?? null;

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'third-live-admission-plan',
    sources: {
      thirdRuntimeNextStepLock: normalizePath(path.relative(ROOT, THIRD_RUNTIME_NEXT_STEP_LOCK_PATH)),
      thirdRuntimeFreezeReview: normalizePath(path.relative(ROOT, THIRD_RUNTIME_FREEZE_REVIEW_PATH)),
      thirdRuntimeGate: normalizePath(path.relative(ROOT, THIRD_RUNTIME_GATE_PATH)),
      thirdAdmission: normalizePath(path.relative(ROOT, THIRD_ADMISSION_PATH)),
      firstSingleLiveGate: normalizePath(path.relative(ROOT, FIRST_BROWSER_LIVE_GATE_PATH)),
      secondSingleLiveGate: normalizePath(path.relative(ROOT, SECOND_BROWSER_LIVE_GATE_PATH)),
      spike: normalizePath(path.relative(ROOT, SPIKE_PATH)),
      accept: normalizePath(path.relative(ROOT, ACCEPT_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    candidate: {
      waveId: 'DBR3L',
      moduleId,
      sourceFile,
      runtimeInputFile,
      rationale: [
        'util-level browser candidate with no direct DOM/template/component surface',
        'no manager/stateful resource-holder signals in the recovered slice',
        'source and startup-loader input currently share the same minimal body shape',
        'more suitable for a third single-live than the remaining browser util runner-ups',
      ],
      liveShape: 'single-module-live',
    },
    prerequisites: {
      thirdNoOpPassed: thirdRuntimeGate.passed === true,
      thirdNoOpWaveId: thirdRuntimeGate.expectedWaveId ?? null,
      firstSingleLiveStillProven:
        firstBrowserLiveGate.passed === true
        && firstBrowserLiveGate.expectedWaveId === 'DBR1L',
      secondSingleLiveStillProven:
        secondBrowserLiveGate.passed === true
        && secondBrowserLiveGate.expectedWaveId === 'DBR2L',
      stableSpikeStillGreen: spike.passed === true,
      stableRuntimeStillGreen:
        quality.stability?.headlessVerifyPassed === true
        && quality.stability?.acceptRecorded === true
        && quality.stability?.startupLoaderRuntimeGatePassed === true
        && quality.stability?.startupLoaderRolloutGatePassed === true,
      latestAcceptAt: accept.generatedAt ?? null,
      browserBatchStillBlocked: thirdRuntimeLock.decision?.browserMultiModuleBatchBlocked === true,
    },
    blockedSurfaces: [
      'browser multi-module batch live',
      'browser component/widget/template live',
      'browser view-zone or heavier UI surface',
      'cross-lane expansion',
      'rename-driven work',
    ],
    requiredBeforeLive: [
      'build DBR3L live contract',
      'run browser-third export-delta gate',
      'run browser-third fallback preflight',
      'run browser-third sticky-disable preflight',
      'apply wrapper patch',
      'run live gate',
      'run smoke',
      'run workbench-desktop-main spike',
      'run accept',
      'run quality-report',
    ],
    stopConditions: [
      'DBR3L single-live gate does not record overlay-hit',
      'smoke fails or regresses before workbench ready',
      'spike fails or hangs after DBR3L enablement',
      'accept fails with browser-adjacent runtime regression',
      'quality-report no longer shows stable rollout gates as green',
      'do not discuss browser batch while only two browser live and one third browser no-op are proven',
    ],
    runnerUpLock: {
      locked: true,
      approvedCandidateOnly: moduleId,
      blockedRunnerUps: [
        'out-build/vs/workbench/contrib/reviewChanges/browser/utils/generatedFilesConstants.js',
        'out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciMessageUtils.js',
      ],
    },
    failureClassification: {
      rollbackAdmissionOnlyOn: [
        'admission fields are incomplete or drift from the approved DBR3L candidate lock',
        'requiredBeforeLive no longer fully defines the browser-third live-contract preflight chain',
      ],
      freezeBrowserLaneOn: [
        'browser third admission artifacts no longer uniquely lock the next step to browser-third-live-contract',
        'smoke or spike regression is attributable to browser-lane changes during DBR3L follow-up execution',
        'accept or quality-report regression is attributable to browser lane after DBR3L enablement',
      ],
    },
    batchEligibilityGate: {
      discussionBlocked: true,
      currentProofState: 'two-live-plus-one-no-op',
      whyCurrentProofIsInsufficient: 'two proven browser single-live modules plus one third browser no-op only proves single-module progression remains controllable; it does not yet prove multi-module interaction ordering, fallback isolation, or sticky-disable behavior under browser batch conditions',
      requiredMilestonesBeforeDiscussion: [
        'DBR3L single-live proven',
        'post-DBR3L browser lane freeze review',
      ],
    },
    minimumWin: {
      definition: 'DBR3L admission plan / freeze / next-step lock all verify green and nextApprovedAction uniquely locked to browser-third-live-contract',
      mustVerify: [
        'startup-module-resolution-review-changes-browser-third-live-admission-plan-verify.json',
        'startup-module-resolution-review-changes-browser-third-live-freeze-review-verify.json',
        'startup-module-resolution-review-changes-browser-third-live-next-step-lock-verify.json',
      ],
    },
    scopeBoundary: {
      allowOnly: [
        'DBR3L admission artifacts',
        'browser third live freeze artifacts',
        'browser third live next-step lock artifacts',
      ],
      mustNotTouch: [
        'browser live execution',
        'browser batch',
        'reviewChanges main lane',
        'composer lane',
        'mechanical recovery chain',
      ],
    },
    reachabilityAssessment: {
      reachable: true,
      safestShortPath: 'DBR3L admission -> third-live freeze review -> third-live next-step lock -> browser-third-live-contract',
      biggestGap: 'browser-third live-contract specific preflight artifacts are not yet materialized, so admission must stop before contract/live execution',
    },
    followUpPriority: {
      next: 'browser-third-live-contract',
      afterThat: 'browser lane freeze review only if contract preflight semantics drift',
    },
    rollbackPolicy: {
      perModuleKillSwitchOn: [
        moduleId,
      ],
      laneFreezeOn: [
        'browser third single-live failure with ambiguous cause',
        'smoke or spike regression after DBR3L enablement',
        'accept regression attributable to browser lane',
      ],
    },
    decision: {
      admissionPlanReady: true,
      executionStillPending: true,
      nextApprovedAction: 'browser-third-live-contract',
      nextApprovedWaveId: 'DBR3L',
      multiModuleBatchStillBlocked: true,
    },
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

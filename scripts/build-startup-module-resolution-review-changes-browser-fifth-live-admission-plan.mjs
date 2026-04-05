#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const FIFTH_RUNTIME_NEXT_STEP_LOCK_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fifth-runtime-next-step-lock.json');
const FIFTH_RUNTIME_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fifth-runtime-freeze-review.json');
const FIFTH_RUNTIME_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-browser-fifth-module-resolution-runtime-gate.json');
const FIFTH_ADMISSION_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fifth-admission.json');
const FIRST_BROWSER_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-browser-module-resolution-live-gate.json');
const SECOND_BROWSER_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-browser-second-module-resolution-live-gate.json');
const THIRD_BROWSER_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-browser-third-module-resolution-live-gate.json');
const FOURTH_BROWSER_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-browser-fourth-module-resolution-live-gate.json');
const FIRST_BATCH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-browser-batch-module-resolution-live-gate.json');
const SECOND_BATCH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-browser-second-batch-module-resolution-live-gate.json');
const SPIKE_PATH = path.join(ROOT, 'mapped', 'workbench-desktop-main-spike-check.json');
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fifth-live-admission-plan.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const fifthRuntimeLock = readJson(FIFTH_RUNTIME_NEXT_STEP_LOCK_PATH);
  const fifthRuntimeFreeze = readJson(FIFTH_RUNTIME_FREEZE_REVIEW_PATH);
  const fifthRuntimeGate = readJson(FIFTH_RUNTIME_GATE_PATH);
  const fifthAdmission = readJson(FIFTH_ADMISSION_PATH);
  const firstBrowserLiveGate = readJson(FIRST_BROWSER_LIVE_GATE_PATH);
  const secondBrowserLiveGate = readJson(SECOND_BROWSER_LIVE_GATE_PATH);
  const thirdBrowserLiveGate = readJson(THIRD_BROWSER_LIVE_GATE_PATH);
  const fourthBrowserLiveGate = readJson(FOURTH_BROWSER_LIVE_GATE_PATH);
  const firstBatchLiveGate = readJson(FIRST_BATCH_LIVE_GATE_PATH);
  const secondBatchLiveGate = readJson(SECOND_BATCH_LIVE_GATE_PATH);
  const spike = readJson(SPIKE_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);

  const moduleId = fifthAdmission.approvedCandidate?.moduleId ?? null;
  const sourceFile = fifthAdmission.approvedCandidate?.sourceFile ?? null;
  const runtimeInputFile = fifthAdmission.approvedCandidate?.runtimeInputFile ?? null;

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'fifth-live-admission-plan',
    sources: {
      fifthRuntimeNextStepLock: normalizePath(path.relative(ROOT, FIFTH_RUNTIME_NEXT_STEP_LOCK_PATH)),
      fifthRuntimeFreezeReview: normalizePath(path.relative(ROOT, FIFTH_RUNTIME_FREEZE_REVIEW_PATH)),
      fifthRuntimeGate: normalizePath(path.relative(ROOT, FIFTH_RUNTIME_GATE_PATH)),
      fifthAdmission: normalizePath(path.relative(ROOT, FIFTH_ADMISSION_PATH)),
      firstSingleLiveGate: normalizePath(path.relative(ROOT, FIRST_BROWSER_LIVE_GATE_PATH)),
      secondSingleLiveGate: normalizePath(path.relative(ROOT, SECOND_BROWSER_LIVE_GATE_PATH)),
      thirdSingleLiveGate: normalizePath(path.relative(ROOT, THIRD_BROWSER_LIVE_GATE_PATH)),
      fourthSingleLiveGate: normalizePath(path.relative(ROOT, FOURTH_BROWSER_LIVE_GATE_PATH)),
      firstBatchLiveGate: normalizePath(path.relative(ROOT, FIRST_BATCH_LIVE_GATE_PATH)),
      secondBatchLiveGate: normalizePath(path.relative(ROOT, SECOND_BATCH_LIVE_GATE_PATH)),
      spike: normalizePath(path.relative(ROOT, SPIKE_PATH)),
      accept: normalizePath(path.relative(ROOT, ACCEPT_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    candidate: {
      waveId: 'DBR5L',
      moduleId,
      sourceFile,
      runtimeInputFile,
      rationale: [
        'initializer-heavy browser util candidate that still remains outside DOM/template/component surface',
        'no manager/stateful resource-holder signals are visible in the recovered slice',
        'source and startup-loader input remain aligned after DBR5 no-op runtime freeze',
        'although initializer-heavy, DBR5 no-op already proves the module stays observable on the current green baseline',
        'this is the last remaining browser util candidate and no same-scope runner-up remains',
      ],
      liveShape: 'single-module-live',
    },
    prerequisites: {
      fifthNoOpPassed: fifthRuntimeGate.passed === true,
      fifthNoOpWaveId: fifthRuntimeGate.expectedWaveId ?? null,
      firstSingleLiveStillProven:
        firstBrowserLiveGate.passed === true
        && firstBrowserLiveGate.expectedWaveId === 'DBR1L',
      secondSingleLiveStillProven:
        secondBrowserLiveGate.passed === true
        && secondBrowserLiveGate.expectedWaveId === 'DBR2L',
      thirdSingleLiveStillProven:
        thirdBrowserLiveGate.passed === true
        && thirdBrowserLiveGate.expectedWaveId === 'DBR3L',
      fourthSingleLiveStillProven:
        fourthBrowserLiveGate.passed === true
        && fourthBrowserLiveGate.expectedWaveId === 'DBR4L',
      firstBatchStillProven:
        firstBatchLiveGate.passed === true
        && firstBatchLiveGate.expectedWaveId === 'DBRB1',
      secondBatchStillProven:
        secondBatchLiveGate.passed === true
        && secondBatchLiveGate.expectedWaveId === 'DBRB2',
      stableSpikeStillGreen: spike.passed === true,
      stableRuntimeStillGreen:
        quality.stability?.headlessVerifyPassed === true
        && quality.stability?.acceptRecorded === true
        && quality.stability?.startupLoaderRuntimeGatePassed === true
        && quality.stability?.startupLoaderRolloutGatePassed === true,
      latestAcceptAt: accept.generatedAt ?? null,
      browserThirdBatchScopeExpansionStillBlocked: fifthRuntimeLock.decision?.browserThirdBatchScopeExpansionBlocked === true,
    },
    blockedSurfaces: [
      'browser third batch scope expansion',
      'browser component/widget/template live',
      'browser heavier UI/view-zone live',
      'cross-lane expansion',
      'rename-driven work',
    ],
    requiredBeforeLive: [
      'build DBR5L live contract',
      'run browser-fifth export-delta gate',
      'run browser-fifth fallback preflight',
      'run browser-fifth sticky-disable preflight',
      'apply wrapper patch',
      'run live gate',
      'run smoke',
      'run workbench-desktop-main spike',
      'run accept',
      'run quality-report',
    ],
    stopConditions: [
      'DBR5L single-live gate does not record overlay-hit',
      'smoke fails or regresses before workbench ready',
      'spike fails or hangs after DBR5L enablement',
      'accept fails with browser-adjacent runtime regression',
      'quality-report no longer shows stable rollout gates as green',
      'do not discuss third browser batch while DBR5 is only no-op proven',
    ],
    runnerUpLock: {
      locked: true,
      approvedCandidateOnly: moduleId,
      blockedRunnerUps: [],
      reason: 'ciMessageUtils.js is the final remaining browser util candidate, so there is no same-scope runner-up left',
    },
    failureClassification: {
      rollbackAdmissionOnlyOn: [
        'admission fields drift from the approved DBR5L candidate lock',
        'requiredBeforeLive no longer fully defines the browser-fifth live-contract preflight chain',
      ],
      freezeBrowserLaneOn: [
        'browser fifth admission artifacts no longer uniquely lock the next step to browser-fifth-live-contract',
        'smoke or spike regression is attributable to browser-lane changes during DBR5L follow-up execution',
        'accept or quality-report regression is attributable to browser lane after DBR5L enablement',
      ],
    },
    thirdBatchEligibilityGate: {
      discussionBlocked: true,
      currentProofState: 'four-live-plus-two-batches-plus-fifth-no-op',
      whyCurrentProofIsInsufficient: 'a proven second batch plus a fifth no-op only proves the last util candidate remains observable; it does not yet prove live interaction ordering or fallback isolation with ciMessageUtils.js enabled',
      requiredMilestonesBeforeDiscussion: [
        'DBR5L single-live proven',
        'post-DBR5L browser lane freeze review',
        'dedicated browser third-batch admission plan',
      ],
    },
    minimumWin: {
      definition: 'DBR5L admission plan / freeze / next-step lock all verify green and nextApprovedAction uniquely locked to browser-fifth-live-contract',
      mustVerify: [
        'startup-module-resolution-review-changes-browser-fifth-live-admission-plan-verify.json',
        'startup-module-resolution-review-changes-browser-fifth-live-freeze-review-verify.json',
        'startup-module-resolution-review-changes-browser-fifth-live-next-step-lock-verify.json',
      ],
    },
    scopeBoundary: {
      allowOnly: [
        'DBR5L admission artifacts',
        'browser fifth live freeze artifacts',
        'browser fifth live next-step lock artifacts',
      ],
      mustNotTouch: [
        'browser live execution',
        'browser third batch',
        'browser component/widget/template',
        'reviewChanges main lane',
        'composer lane',
        'mechanical recovery chain',
      ],
    },
    reachabilityAssessment: {
      reachable: true,
      safestShortPath: 'DBR5L admission -> fifth-live freeze review -> fifth-live next-step lock -> browser-fifth-live-contract',
      biggestGap: 'browser-fifth live-contract specific preflight artifacts are not yet materialized, so admission must stop before contract/live execution',
    },
    followUpPriority: {
      next: 'browser-fifth-live-contract',
      afterThat: 'browser lane freeze review only if contract preflight semantics drift',
    },
    rollbackPolicy: {
      perModuleKillSwitchOn: [
        moduleId,
      ],
      laneFreezeOn: [
        'browser fifth single-live failure with ambiguous cause',
        'smoke or spike regression after DBR5L enablement',
        'accept regression attributable to browser lane',
      ],
    },
    decision: {
      admissionPlanReady: true,
      executionStillPending: true,
      nextApprovedAction: 'browser-fifth-live-contract',
      nextApprovedWaveId: 'DBR5L',
      thirdBatchScopeExpansionStillBlocked: true,
    },
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

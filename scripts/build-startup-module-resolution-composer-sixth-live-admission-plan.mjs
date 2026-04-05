#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const SIXTH_RUNTIME_NEXT_STEP_LOCK_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-sixth-runtime-next-step-lock.json');
const SIXTH_RUNTIME_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-sixth-runtime-freeze-review.json');
const SIXTH_RUNTIME_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-sixth-module-resolution-runtime-gate.json');
const SIXTH_ADMISSION_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-sixth-admission.json');
const COMPOSER_SINGLE_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-module-resolution-live-gate.json');
const COMPOSER_CONTEXT_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-context-module-resolution-live-gate.json');
const COMPOSER_THIRD_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-third-module-resolution-live-gate.json');
const COMPOSER_FOURTH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-fourth-module-resolution-live-gate.json');
const COMPOSER_FIFTH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-fifth-module-resolution-live-gate.json');
const COMPOSER_BATCH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-live-both-module-resolution-live-gate.json');
const SPIKE_PATH = path.join(ROOT, 'mapped', 'workbench-desktop-main-spike-check.json');
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-sixth-live-admission-plan.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const sixthRuntimeLock = readJson(SIXTH_RUNTIME_NEXT_STEP_LOCK_PATH);
  const sixthRuntimeFreeze = readJson(SIXTH_RUNTIME_FREEZE_REVIEW_PATH);
  const sixthRuntimeGate = readJson(SIXTH_RUNTIME_GATE_PATH);
  const sixthAdmission = readJson(SIXTH_ADMISSION_PATH);
  const composerSingleLiveGate = readJson(COMPOSER_SINGLE_LIVE_GATE_PATH);
  const composerContextLiveGate = readJson(COMPOSER_CONTEXT_LIVE_GATE_PATH);
  const composerThirdLiveGate = readJson(COMPOSER_THIRD_LIVE_GATE_PATH);
  const composerFourthLiveGate = readJson(COMPOSER_FOURTH_LIVE_GATE_PATH);
  const composerFifthLiveGate = readJson(COMPOSER_FIFTH_LIVE_GATE_PATH);
  const composerBatchLiveGate = readJson(COMPOSER_BATCH_LIVE_GATE_PATH);
  const spike = readJson(SPIKE_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);

  const moduleId = sixthAdmission.approvedCandidate?.moduleId ?? null;
  const sourceFile = sixthAdmission.approvedCandidate?.sourceFile ?? null;
  const runtimeInputFile = sixthAdmission.approvedCandidate?.runtimeInputFile ?? null;

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-composer',
    phase: 'sixth-live-admission-plan',
    sources: {
      sixthRuntimeNextStepLock: normalizePath(path.relative(ROOT, SIXTH_RUNTIME_NEXT_STEP_LOCK_PATH)),
      sixthRuntimeFreezeReview: normalizePath(path.relative(ROOT, SIXTH_RUNTIME_FREEZE_REVIEW_PATH)),
      sixthRuntimeGate: normalizePath(path.relative(ROOT, SIXTH_RUNTIME_GATE_PATH)),
      sixthAdmission: normalizePath(path.relative(ROOT, SIXTH_ADMISSION_PATH)),
      firstSingleLiveGate: normalizePath(path.relative(ROOT, COMPOSER_SINGLE_LIVE_GATE_PATH)),
      secondSingleLiveGate: normalizePath(path.relative(ROOT, COMPOSER_CONTEXT_LIVE_GATE_PATH)),
      thirdSingleLiveGate: normalizePath(path.relative(ROOT, COMPOSER_THIRD_LIVE_GATE_PATH)),
      fourthSingleLiveGate: normalizePath(path.relative(ROOT, COMPOSER_FOURTH_LIVE_GATE_PATH)),
      fifthSingleLiveGate: normalizePath(path.relative(ROOT, COMPOSER_FIFTH_LIVE_GATE_PATH)),
      firstMicroBatchGate: normalizePath(path.relative(ROOT, COMPOSER_BATCH_LIVE_GATE_PATH)),
      spike: normalizePath(path.relative(ROOT, SPIKE_PATH)),
      accept: normalizePath(path.relative(ROOT, ACCEPT_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    candidate: {
      waveId: 'DC6L',
      moduleId,
      sourceFile,
      runtimeInputFile,
      rationale: [
        'small browser-side debug-log utility remains narrower than blob-store, browserViewStore, and worktree-gate holder surfaces even at live-admission time',
        'still non-component and non-renderer-facing at admission time despite touching debug-log path and filename rules',
        'source and startup-loader input remain aligned after DC6 dedicated no-op runtime freeze',
        'runner-ups still carry broader blob-store, store-holder, serialization, or worktree fan-out than debugLogFileUtils.js',
      ],
      liveShape: 'single-module-live',
    },
    prerequisites: {
      sixthNoOpPassed: sixthRuntimeGate.passed === true,
      sixthNoOpWaveId: sixthRuntimeGate.expectedWaveId ?? null,
      firstSingleLiveStillProven:
        composerSingleLiveGate.passed === true
        && composerSingleLiveGate.expectedWaveId === 'DC1',
      secondSingleLiveStillProven:
        composerContextLiveGate.passed === true
        && composerContextLiveGate.expectedWaveId === 'DC2',
      thirdSingleLiveStillProven:
        composerThirdLiveGate.passed === true
        && composerThirdLiveGate.expectedWaveId === 'DC3L',
      fourthSingleLiveStillProven:
        composerFourthLiveGate.passed === true
        && composerFourthLiveGate.expectedWaveId === 'DC4L',
      fifthSingleLiveStillProven:
        composerFifthLiveGate.passed === true
        && composerFifthLiveGate.expectedWaveId === 'DC5L',
      firstMicroBatchStillProven:
        composerBatchLiveGate.passed === true
        && composerBatchLiveGate.expectedWaveId === 'DCB1',
      stableSpikeStillGreen: spike.passed === true,
      stableRuntimeStillGreen:
        quality.stability?.headlessVerifyPassed === true
        && quality.stability?.acceptRecorded === true
        && quality.stability?.startupLoaderRuntimeGatePassed === true
        && quality.stability?.startupLoaderRolloutGatePassed === true,
      latestAcceptAt: accept.generatedAt ?? null,
      reviewChangesLaneStillFrozen: sixthRuntimeLock.decision?.reviewChangesLaneFrozen === true,
      broadBrowserStillHeld: sixthRuntimeLock.decision?.broadBrowserHeld === true,
    },
    blockedSurfaces: [
      'composer wider batch expansion',
      'new reviewChanges browser surface expansion',
      'cross-lane expansion',
      'rename-driven work',
    ],
    requiredBeforeLive: [
      'build DC6L live contract',
      'run composer-sixth export-delta gate',
      'run composer-sixth fallback preflight',
      'run composer-sixth sticky-disable preflight',
      'apply wrapper patch',
      'run live gate',
      'run smoke',
      'run workbench-desktop-main spike',
      'run accept',
      'run quality-report',
    ],
    stopConditions: [
      'DC6L single-live gate does not record overlay-hit',
      'smoke fails or regresses before workbench ready',
      'spike fails or hangs after DC6L enablement',
      'accept fails with composer-adjacent runtime regression',
      'quality-report no longer shows stable rollout gates as green',
      'do not discuss wider composer batch while DC6 is only no-op proven',
    ],
    runnerUpLock: {
      locked: true,
      approvedCandidateOnly: moduleId,
      blockedRunnerUps: [
        'out-build/vs/workbench/contrib/composer/browser/composerBlobStore.js',
        'out-build/vs/workbench/contrib/composer/browser/browserViewStore.js',
        'out-build/vs/workbench/contrib/composer/browser/capabilities/serializeToolformerBubbleData.js',
        'out-build/vs/workbench/contrib/composer/browser/worktreeGate.js',
      ],
    },
    failureClassification: {
      rollbackAdmissionOnlyOn: [
        'admission fields drift from the approved DC6L candidate lock',
        'requiredBeforeLive no longer fully defines the composer-sixth live-contract preflight chain',
      ],
      freezeComposerLaneOn: [
        'composer sixth admission artifacts no longer uniquely lock the next step to composer-sixth-live-contract',
        'smoke or spike regression is attributable to composer-lane changes during DC6L follow-up execution',
        'accept or quality-report regression is attributable to composer lane after DC6L enablement',
      ],
    },
    widerBatchEligibilityGate: {
      discussionBlocked: true,
      currentProofState: 'five-single-live-plus-first-micro-batch-plus-sixth-no-op',
      whyCurrentProofIsInsufficient: 'a proven sixth no-op only proves the next single-module candidate remains observable; it does not yet prove wider-batch interaction ordering or fallback isolation with DC6L enabled',
      requiredMilestonesBeforeDiscussion: [
        'DC6L single-live proven',
        'post-DC6L composer lane freeze review',
      ],
    },
    minimumWin: {
      definition: 'DC6L admission plan / freeze / next-step lock all verify green and nextApprovedAction uniquely locked to composer-sixth-live-contract',
      mustVerify: [
        'startup-module-resolution-composer-sixth-live-admission-plan-verify.json',
        'startup-module-resolution-composer-sixth-live-freeze-review-verify.json',
        'startup-module-resolution-composer-sixth-live-next-step-lock-verify.json',
      ],
    },
    scopeBoundary: {
      allowOnly: [
        'DC6L admission artifacts',
        'composer sixth live freeze artifacts',
        'composer sixth live next-step lock artifacts',
      ],
      mustNotTouch: [
        'composer live execution',
        'composer wider batch expansion',
        'reviewChanges lane',
        'browser lane',
        'mechanical recovery chain',
      ],
    },
    reachabilityAssessment: {
      reachable: true,
      safestShortPath: 'DC6L admission -> sixth-live freeze review -> sixth-live next-step lock -> composer-sixth-live-contract',
      biggestGap: 'composer-sixth live-contract specific preflight artifacts are not yet materialized, so admission must stop before contract/live execution',
    },
    followUpPriority: {
      next: 'composer-sixth-live-contract',
      afterThat: 'composer lane freeze review only if contract preflight semantics drift',
    },
    rollbackPolicy: {
      perModuleKillSwitchOn: [
        moduleId,
      ],
      laneFreezeOn: [
        'composer sixth single-live failure with ambiguous cause',
        'smoke or spike regression after DC6L enablement',
        'accept regression attributable to composer lane',
      ],
    },
    decision: {
      admissionPlanReady: true,
      executionStillPending: true,
      nextApprovedAction: 'composer-sixth-live-contract',
      nextApprovedWaveId: 'DC6L',
      widerBatchExpansionStillBlocked: true,
    },
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

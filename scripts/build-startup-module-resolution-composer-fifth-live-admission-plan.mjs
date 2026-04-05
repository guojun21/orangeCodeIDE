#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const FIFTH_RUNTIME_NEXT_STEP_LOCK_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fifth-runtime-next-step-lock.json');
const FIFTH_RUNTIME_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fifth-runtime-freeze-review.json');
const FIFTH_RUNTIME_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-fifth-module-resolution-runtime-gate.json');
const FIFTH_ADMISSION_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fifth-admission.json');
const COMPOSER_SINGLE_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-module-resolution-live-gate.json');
const COMPOSER_CONTEXT_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-context-module-resolution-live-gate.json');
const COMPOSER_THIRD_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-third-module-resolution-live-gate.json');
const COMPOSER_FOURTH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-fourth-module-resolution-live-gate.json');
const COMPOSER_BATCH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-live-both-module-resolution-live-gate.json');
const SPIKE_PATH = path.join(ROOT, 'mapped', 'workbench-desktop-main-spike-check.json');
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fifth-live-admission-plan.json');

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
  const composerSingleLiveGate = readJson(COMPOSER_SINGLE_LIVE_GATE_PATH);
  const composerContextLiveGate = readJson(COMPOSER_CONTEXT_LIVE_GATE_PATH);
  const composerThirdLiveGate = readJson(COMPOSER_THIRD_LIVE_GATE_PATH);
  const composerFourthLiveGate = readJson(COMPOSER_FOURTH_LIVE_GATE_PATH);
  const composerBatchLiveGate = readJson(COMPOSER_BATCH_LIVE_GATE_PATH);
  const spike = readJson(SPIKE_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);

  const moduleId = fifthAdmission.approvedCandidate?.moduleId ?? null;
  const sourceFile = fifthAdmission.approvedCandidate?.sourceFile ?? null;
  const runtimeInputFile = fifthAdmission.approvedCandidate?.runtimeInputFile ?? null;

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-composer',
    phase: 'fifth-live-admission-plan',
    sources: {
      fifthRuntimeNextStepLock: normalizePath(path.relative(ROOT, FIFTH_RUNTIME_NEXT_STEP_LOCK_PATH)),
      fifthRuntimeFreezeReview: normalizePath(path.relative(ROOT, FIFTH_RUNTIME_FREEZE_REVIEW_PATH)),
      fifthRuntimeGate: normalizePath(path.relative(ROOT, FIFTH_RUNTIME_GATE_PATH)),
      fifthAdmission: normalizePath(path.relative(ROOT, FIFTH_ADMISSION_PATH)),
      firstSingleLiveGate: normalizePath(path.relative(ROOT, COMPOSER_SINGLE_LIVE_GATE_PATH)),
      secondSingleLiveGate: normalizePath(path.relative(ROOT, COMPOSER_CONTEXT_LIVE_GATE_PATH)),
      thirdSingleLiveGate: normalizePath(path.relative(ROOT, COMPOSER_THIRD_LIVE_GATE_PATH)),
      fourthSingleLiveGate: normalizePath(path.relative(ROOT, COMPOSER_FOURTH_LIVE_GATE_PATH)),
      firstMicroBatchGate: normalizePath(path.relative(ROOT, COMPOSER_BATCH_LIVE_GATE_PATH)),
      spike: normalizePath(path.relative(ROOT, SPIKE_PATH)),
      accept: normalizePath(path.relative(ROOT, ACCEPT_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    candidate: {
      waveId: 'DC5L',
      moduleId,
      sourceFile,
      runtimeInputFile,
      rationale: [
        'small browser-side service interface module that stays narrower than blob-store and browserViewStore holders even at live-admission time',
        'still non-component and non-renderer-facing at admission time',
        'source and startup-loader input remain aligned after DC5 dedicated no-op runtime freeze',
        'runner-ups still carry broader blob-store, browserViewStore, or serialization fan-out than composerChatServiceInterface.js',
      ],
      liveShape: 'single-module-live',
    },
    prerequisites: {
      fifthNoOpPassed: fifthRuntimeGate.passed === true,
      fifthNoOpWaveId: fifthRuntimeGate.expectedWaveId ?? null,
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
      reviewChangesLaneStillFrozen: fifthRuntimeLock.decision?.reviewChangesLaneFrozen === true,
      broadBrowserStillHeld: fifthRuntimeLock.decision?.broadBrowserHeld === true,
    },
    blockedSurfaces: [
      'composer wider batch expansion',
      'new reviewChanges browser surface expansion',
      'cross-lane expansion',
      'rename-driven work',
    ],
    requiredBeforeLive: [
      'build DC5L live contract',
      'run composer-fifth export-delta gate',
      'run composer-fifth fallback preflight',
      'run composer-fifth sticky-disable preflight',
      'apply wrapper patch',
      'run live gate',
      'run smoke',
      'run workbench-desktop-main spike',
      'run accept',
      'run quality-report',
    ],
    stopConditions: [
      'DC5L single-live gate does not record overlay-hit',
      'smoke fails or regresses before workbench ready',
      'spike fails or hangs after DC5L enablement',
      'accept fails with composer-adjacent runtime regression',
      'quality-report no longer shows stable rollout gates as green',
      'do not discuss wider composer batch while DC5 is only no-op proven',
    ],
    runnerUpLock: {
      locked: true,
      approvedCandidateOnly: moduleId,
      blockedRunnerUps: [
        'out-build/vs/workbench/contrib/composer/browser/utils/debugLogFileUtils.js',
        'out-build/vs/workbench/contrib/composer/browser/composerBlobStore.js',
        'out-build/vs/workbench/contrib/composer/browser/browserViewStore.js',
        'out-build/vs/workbench/contrib/composer/browser/capabilities/serializeToolformerBubbleData.js',
      ],
    },
    failureClassification: {
      rollbackAdmissionOnlyOn: [
        'admission fields drift from the approved DC5L candidate lock',
        'requiredBeforeLive no longer fully defines the composer-fifth live-contract preflight chain',
      ],
      freezeComposerLaneOn: [
        'composer fifth admission artifacts no longer uniquely lock the next step to composer-fifth-live-contract',
        'smoke or spike regression is attributable to composer-lane changes during DC5L follow-up execution',
        'accept or quality-report regression is attributable to composer lane after DC5L enablement',
      ],
    },
    widerBatchEligibilityGate: {
      discussionBlocked: true,
      currentProofState: 'four-single-live-plus-first-micro-batch-plus-fifth-no-op',
      whyCurrentProofIsInsufficient: 'a proven fifth no-op only proves the next single-module candidate remains observable; it does not yet prove wider-batch interaction ordering or fallback isolation with DC5L enabled',
      requiredMilestonesBeforeDiscussion: [
        'DC5L single-live proven',
        'post-DC5L composer lane freeze review',
      ],
    },
    minimumWin: {
      definition: 'DC5L admission plan / freeze / next-step lock all verify green and nextApprovedAction uniquely locked to composer-fifth-live-contract',
      mustVerify: [
        'startup-module-resolution-composer-fifth-live-admission-plan-verify.json',
        'startup-module-resolution-composer-fifth-live-freeze-review-verify.json',
        'startup-module-resolution-composer-fifth-live-next-step-lock-verify.json',
      ],
    },
    scopeBoundary: {
      allowOnly: [
        'DC5L admission artifacts',
        'composer fifth live freeze artifacts',
        'composer fifth live next-step lock artifacts',
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
      safestShortPath: 'DC5L admission -> fifth-live freeze review -> fifth-live next-step lock -> composer-fifth-live-contract',
      biggestGap: 'composer-fifth live-contract specific preflight artifacts are not yet materialized, so admission must stop before contract/live execution',
    },
    followUpPriority: {
      next: 'composer-fifth-live-contract',
      afterThat: 'composer lane freeze review only if contract preflight semantics drift',
    },
    rollbackPolicy: {
      perModuleKillSwitchOn: [
        moduleId,
      ],
      laneFreezeOn: [
        'composer fifth single-live failure with ambiguous cause',
        'smoke or spike regression after DC5L enablement',
        'accept regression attributable to composer lane',
      ],
    },
    decision: {
      admissionPlanReady: true,
      executionStillPending: true,
      nextApprovedAction: 'composer-fifth-live-contract',
      nextApprovedWaveId: 'DC5L',
      widerBatchExpansionStillBlocked: true,
    },
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

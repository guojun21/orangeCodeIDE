#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const SEVENTH_RUNTIME_NEXT_STEP_LOCK_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-seventh-runtime-next-step-lock.json');
const SEVENTH_RUNTIME_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-seventh-runtime-freeze-review.json');
const SEVENTH_RUNTIME_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-seventh-module-resolution-runtime-gate.json');
const SEVENTH_ADMISSION_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-seventh-admission.json');
const COMPOSER_SINGLE_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-module-resolution-live-gate.json');
const COMPOSER_CONTEXT_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-context-module-resolution-live-gate.json');
const COMPOSER_THIRD_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-third-module-resolution-live-gate.json');
const COMPOSER_FOURTH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-fourth-module-resolution-live-gate.json');
const COMPOSER_FIFTH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-fifth-module-resolution-live-gate.json');
const COMPOSER_SIXTH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-sixth-module-resolution-live-gate.json');
const COMPOSER_BATCH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-live-both-module-resolution-live-gate.json');
const SPIKE_PATH = path.join(ROOT, 'mapped', 'workbench-desktop-main-spike-check.json');
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-seventh-live-admission-plan.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const seventhRuntimeLock = readJson(SEVENTH_RUNTIME_NEXT_STEP_LOCK_PATH);
  const seventhRuntimeFreeze = readJson(SEVENTH_RUNTIME_FREEZE_REVIEW_PATH);
  const seventhRuntimeGate = readJson(SEVENTH_RUNTIME_GATE_PATH);
  const seventhAdmission = readJson(SEVENTH_ADMISSION_PATH);
  const composerSingleLiveGate = readJson(COMPOSER_SINGLE_LIVE_GATE_PATH);
  const composerContextLiveGate = readJson(COMPOSER_CONTEXT_LIVE_GATE_PATH);
  const composerThirdLiveGate = readJson(COMPOSER_THIRD_LIVE_GATE_PATH);
  const composerFourthLiveGate = readJson(COMPOSER_FOURTH_LIVE_GATE_PATH);
  const composerFifthLiveGate = readJson(COMPOSER_FIFTH_LIVE_GATE_PATH);
  const composerSixthLiveGate = readJson(COMPOSER_SIXTH_LIVE_GATE_PATH);
  const composerBatchLiveGate = readJson(COMPOSER_BATCH_LIVE_GATE_PATH);
  const spike = readJson(SPIKE_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);

  const moduleId = seventhAdmission.approvedCandidate?.moduleId ?? null;
  const sourceFile = seventhAdmission.approvedCandidate?.sourceFile ?? null;
  const runtimeInputFile = seventhAdmission.approvedCandidate?.runtimeInputFile ?? null;

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-composer',
    phase: 'seventh-live-admission-plan',
    sources: {
      seventhRuntimeNextStepLock: normalizePath(path.relative(ROOT, SEVENTH_RUNTIME_NEXT_STEP_LOCK_PATH)),
      seventhRuntimeFreezeReview: normalizePath(path.relative(ROOT, SEVENTH_RUNTIME_FREEZE_REVIEW_PATH)),
      seventhRuntimeGate: normalizePath(path.relative(ROOT, SEVENTH_RUNTIME_GATE_PATH)),
      seventhAdmission: normalizePath(path.relative(ROOT, SEVENTH_ADMISSION_PATH)),
      firstSingleLiveGate: normalizePath(path.relative(ROOT, COMPOSER_SINGLE_LIVE_GATE_PATH)),
      secondSingleLiveGate: normalizePath(path.relative(ROOT, COMPOSER_CONTEXT_LIVE_GATE_PATH)),
      thirdSingleLiveGate: normalizePath(path.relative(ROOT, COMPOSER_THIRD_LIVE_GATE_PATH)),
      fourthSingleLiveGate: normalizePath(path.relative(ROOT, COMPOSER_FOURTH_LIVE_GATE_PATH)),
      fifthSingleLiveGate: normalizePath(path.relative(ROOT, COMPOSER_FIFTH_LIVE_GATE_PATH)),
      sixthSingleLiveGate: normalizePath(path.relative(ROOT, COMPOSER_SIXTH_LIVE_GATE_PATH)),
      firstMicroBatchGate: normalizePath(path.relative(ROOT, COMPOSER_BATCH_LIVE_GATE_PATH)),
      spike: normalizePath(path.relative(ROOT, SPIKE_PATH)),
      accept: normalizePath(path.relative(ROOT, ACCEPT_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    candidate: {
      waveId: 'DC7L',
      moduleId,
      sourceFile,
      runtimeInputFile,
      rationale: [
        'stateful browser-side blob-store holder is now the next smallest remaining composer browser store surface even at live-admission time',
        'still non-component and non-renderer-facing at admission time, but broader than prior utility and interface candidates so this stage remains contract-planned only',
        'source and startup-loader input remain aligned after DC7 dedicated no-op runtime freeze',
        'runner-ups still carry broader browserViewStore, serialization, worktree, or data-creation fan-out than composerBlobStore.js',
      ],
      liveShape: 'single-module-live',
    },
    prerequisites: {
      seventhNoOpPassed: seventhRuntimeGate.passed === true,
      seventhNoOpWaveId: seventhRuntimeGate.expectedWaveId ?? null,
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
      sixthSingleLiveStillProven:
        composerSixthLiveGate.passed === true
        && composerSixthLiveGate.expectedWaveId === 'DC6L',
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
      reviewChangesLaneStillFrozen: seventhRuntimeLock.decision?.reviewChangesLaneFrozen === true,
      broadBrowserStillHeld: seventhRuntimeLock.decision?.broadBrowserHeld === true,
    },
    blockedSurfaces: [
      'composer wider batch expansion',
      'new reviewChanges browser surface expansion',
      'cross-lane expansion',
      'rename-driven work',
    ],
    requiredBeforeLive: [
      'build DC7L live contract',
      'run composer-seventh export-delta gate',
      'run composer-seventh fallback preflight',
      'run composer-seventh sticky-disable preflight',
      'apply wrapper patch',
      'run live gate',
      'run smoke',
      'run workbench-desktop-main spike',
      'run accept',
      'run quality-report',
    ],
    stopConditions: [
      'DC7L single-live gate does not record overlay-hit',
      'smoke fails or regresses before workbench ready',
      'spike fails or hangs after DC7L enablement',
      'accept fails with composer-adjacent runtime regression',
      'quality-report no longer shows stable rollout gates as green',
      'do not discuss wider composer batch while DC7 is only no-op proven',
    ],
    runnerUpLock: {
      locked: true,
      approvedCandidateOnly: moduleId,
      blockedRunnerUps: [
        'out-build/vs/workbench/contrib/composer/browser/browserViewStore.js',
        'out-build/vs/workbench/contrib/composer/browser/capabilities/serializeToolformerBubbleData.js',
        'out-build/vs/workbench/contrib/composer/browser/worktreeGate.js',
        'out-build/vs/workbench/contrib/composer/browser/composerDataCreation.js',
      ],
    },
    failureClassification: {
      rollbackAdmissionOnlyOn: [
        'admission fields drift from the approved DC7L candidate lock',
        'requiredBeforeLive no longer fully defines the composer-seventh live-contract preflight chain',
      ],
      freezeComposerLaneOn: [
        'composer seventh admission artifacts no longer uniquely lock the next step to composer-seventh-live-contract',
        'smoke or spike regression is attributable to composer-lane changes during DC7L follow-up execution',
        'accept or quality-report regression is attributable to composer lane after DC7L enablement',
      ],
    },
    widerBatchEligibilityGate: {
      discussionBlocked: true,
      currentProofState: 'six-single-live-plus-first-micro-batch-plus-seventh-no-op',
      whyCurrentProofIsInsufficient: 'a proven seventh no-op only proves the next stateful store-holder candidate remains observable; it does not yet prove wider-batch interaction ordering or fallback isolation with DC7L enabled',
      requiredMilestonesBeforeDiscussion: [
        'DC7L single-live proven',
        'post-DC7L composer lane freeze review',
      ],
    },
    minimumWin: {
      definition: 'DC7L admission plan / freeze / next-step lock all verify green and nextApprovedAction uniquely locked to composer-seventh-live-contract',
      mustVerify: [
        'startup-module-resolution-composer-seventh-live-admission-plan-verify.json',
        'startup-module-resolution-composer-seventh-live-freeze-review-verify.json',
        'startup-module-resolution-composer-seventh-live-next-step-lock-verify.json',
      ],
    },
    scopeBoundary: {
      allowOnly: [
        'DC7L admission artifacts',
        'composer seventh live freeze artifacts',
        'composer seventh live next-step lock artifacts',
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
      safestShortPath: 'DC7L admission -> seventh-live freeze review -> seventh-live next-step lock -> composer-seventh-live-contract',
      biggestGap: 'composer-seventh live-contract specific preflight artifacts are not yet materialized, so admission must stop before contract/live execution',
    },
    followUpPriority: {
      next: 'composer-seventh-live-contract',
      afterThat: 'composer lane freeze review only if contract preflight semantics drift',
    },
    rollbackPolicy: {
      perModuleKillSwitchOn: [
        moduleId,
      ],
      laneFreezeOn: [
        'composer seventh single-live failure with ambiguous cause',
        'smoke or spike regression after DC7L enablement',
        'accept regression attributable to composer lane',
      ],
    },
    decision: {
      admissionPlanReady: true,
      executionStillPending: true,
      nextApprovedAction: 'composer-seventh-live-contract',
      nextApprovedWaveId: 'DC7L',
      widerBatchExpansionStillBlocked: true,
    },
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

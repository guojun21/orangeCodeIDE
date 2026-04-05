#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const EIGHTH_RUNTIME_NEXT_STEP_LOCK_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-eighth-runtime-next-step-lock.json');
const EIGHTH_RUNTIME_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-eighth-runtime-freeze-review.json');
const EIGHTH_RUNTIME_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-eighth-module-resolution-runtime-gate.json');
const EIGHTH_ADMISSION_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-eighth-admission.json');
const COMPOSER_SINGLE_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-module-resolution-live-gate.json');
const COMPOSER_CONTEXT_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-context-module-resolution-live-gate.json');
const COMPOSER_THIRD_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-third-module-resolution-live-gate.json');
const COMPOSER_FOURTH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-fourth-module-resolution-live-gate.json');
const COMPOSER_FIFTH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-fifth-module-resolution-live-gate.json');
const COMPOSER_SIXTH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-sixth-module-resolution-live-gate.json');
const COMPOSER_SEVENTH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-seventh-module-resolution-live-gate.json');
const COMPOSER_BATCH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-live-both-module-resolution-live-gate.json');
const SPIKE_PATH = path.join(ROOT, 'mapped', 'workbench-desktop-main-spike-check.json');
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-eighth-live-admission-plan.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const eighthRuntimeLock = readJson(EIGHTH_RUNTIME_NEXT_STEP_LOCK_PATH);
  const eighthRuntimeFreeze = readJson(EIGHTH_RUNTIME_FREEZE_REVIEW_PATH);
  const eighthRuntimeGate = readJson(EIGHTH_RUNTIME_GATE_PATH);
  const eighthAdmission = readJson(EIGHTH_ADMISSION_PATH);
  const composerSingleLiveGate = readJson(COMPOSER_SINGLE_LIVE_GATE_PATH);
  const composerContextLiveGate = readJson(COMPOSER_CONTEXT_LIVE_GATE_PATH);
  const composerThirdLiveGate = readJson(COMPOSER_THIRD_LIVE_GATE_PATH);
  const composerFourthLiveGate = readJson(COMPOSER_FOURTH_LIVE_GATE_PATH);
  const composerFifthLiveGate = readJson(COMPOSER_FIFTH_LIVE_GATE_PATH);
  const composerSixthLiveGate = readJson(COMPOSER_SIXTH_LIVE_GATE_PATH);
  const composerSeventhLiveGate = readJson(COMPOSER_SEVENTH_LIVE_GATE_PATH);
  const composerBatchLiveGate = readJson(COMPOSER_BATCH_LIVE_GATE_PATH);
  const spike = readJson(SPIKE_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);

  const moduleId = eighthAdmission.approvedCandidate?.moduleId ?? null;
  const sourceFile = eighthAdmission.approvedCandidate?.sourceFile ?? null;
  const runtimeInputFile = eighthAdmission.approvedCandidate?.runtimeInputFile ?? null;

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-composer',
    phase: 'eighth-live-admission-plan',
    sources: {
      eighthRuntimeNextStepLock: normalizePath(path.relative(ROOT, EIGHTH_RUNTIME_NEXT_STEP_LOCK_PATH)),
      eighthRuntimeFreezeReview: normalizePath(path.relative(ROOT, EIGHTH_RUNTIME_FREEZE_REVIEW_PATH)),
      eighthRuntimeGate: normalizePath(path.relative(ROOT, EIGHTH_RUNTIME_GATE_PATH)),
      eighthAdmission: normalizePath(path.relative(ROOT, EIGHTH_ADMISSION_PATH)),
      firstSingleLiveGate: normalizePath(path.relative(ROOT, COMPOSER_SINGLE_LIVE_GATE_PATH)),
      secondSingleLiveGate: normalizePath(path.relative(ROOT, COMPOSER_CONTEXT_LIVE_GATE_PATH)),
      thirdSingleLiveGate: normalizePath(path.relative(ROOT, COMPOSER_THIRD_LIVE_GATE_PATH)),
      fourthSingleLiveGate: normalizePath(path.relative(ROOT, COMPOSER_FOURTH_LIVE_GATE_PATH)),
      fifthSingleLiveGate: normalizePath(path.relative(ROOT, COMPOSER_FIFTH_LIVE_GATE_PATH)),
      sixthSingleLiveGate: normalizePath(path.relative(ROOT, COMPOSER_SIXTH_LIVE_GATE_PATH)),
      seventhSingleLiveGate: normalizePath(path.relative(ROOT, COMPOSER_SEVENTH_LIVE_GATE_PATH)),
      firstMicroBatchGate: normalizePath(path.relative(ROOT, COMPOSER_BATCH_LIVE_GATE_PATH)),
      spike: normalizePath(path.relative(ROOT, SPIKE_PATH)),
      accept: normalizePath(path.relative(ROOT, ACCEPT_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    candidate: {
      waveId: 'DC8L',
      moduleId,
      sourceFile,
      runtimeInputFile,
      rationale: [
        'browser-side view-state store token is now the smallest remaining composer browser holder that coordinates browser editor lifecycle without directly rendering widgets',
        'it is closer to pane and tab orchestration than prior blob or utility candidates, so this stage must stay contract-planned only and must not jump straight to execution',
        'source and startup-loader input remain aligned after DC8 dedicated no-op runtime freeze',
        'runner-ups still carry broader serialization, worktree, analytics, or data-creation fan-out than browserViewStore.js',
      ],
      liveShape: 'single-module-live',
    },
    prerequisites: {
      eighthNoOpPassed: eighthRuntimeGate.passed === true,
      eighthNoOpWaveId: eighthRuntimeGate.expectedWaveId ?? null,
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
      seventhSingleLiveStillProven:
        composerSeventhLiveGate.passed === true
        && composerSeventhLiveGate.expectedWaveId === 'DC7L',
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
      reviewChangesLaneStillFrozen: eighthRuntimeLock.decision?.reviewChangesLaneFrozen === true,
      broadBrowserStillHeld: eighthRuntimeLock.decision?.broadBrowserHeld === true,
    },
    blockedSurfaces: [
      'composer wider batch expansion',
      'composer browser widget or renderer expansion',
      'new reviewChanges browser surface expansion',
      'cross-lane expansion',
      'rename-driven work',
    ],
    requiredBeforeLive: [
      'build DC8L live contract',
      'run composer-eighth export-delta gate',
      'run composer-eighth fallback preflight',
      'run composer-eighth sticky-disable preflight',
      'apply wrapper patch',
      'run live gate',
      'run smoke',
      'run workbench-desktop-main spike',
      'run accept',
      'run quality-report',
    ],
    stopConditions: [
      'DC8L single-live gate does not record overlay-hit',
      'browser editor tab or headless state orchestration regresses under DC8L enablement',
      'smoke fails or regresses before workbench ready',
      'spike fails or hangs after DC8L enablement',
      'accept fails with composer-adjacent runtime regression',
      'quality-report no longer shows stable rollout gates as green',
      'do not discuss wider composer batch while DC8 is only no-op proven',
    ],
    runnerUpLock: {
      locked: true,
      approvedCandidateOnly: moduleId,
      blockedRunnerUps: [
        'out-build/vs/workbench/contrib/composer/browser/capabilities/serializeToolformerBubbleData.js',
        'out-build/vs/workbench/contrib/composer/browser/worktreeGate.js',
        'out-build/vs/workbench/contrib/composer/browser/composerDataCreation.js',
        'out-build/vs/workbench/contrib/composer/browser/browserAnalytics.js',
      ],
    },
    failureClassification: {
      rollbackAdmissionOnlyOn: [
        'admission fields drift from the approved DC8L candidate lock',
        'requiredBeforeLive no longer fully defines the composer-eighth live-contract preflight chain',
      ],
      freezeComposerLaneOn: [
        'composer eighth admission artifacts no longer uniquely lock the next step to composer-eighth-live-contract',
        'smoke or spike regression is attributable to composer-lane changes during DC8L follow-up execution',
        'accept or quality-report regression is attributable to composer lane after DC8L enablement',
      ],
    },
    widerBatchEligibilityGate: {
      discussionBlocked: true,
      currentProofState: 'seven-single-live-plus-first-micro-batch-plus-eighth-no-op',
      whyCurrentProofIsInsufficient: 'a proven eighth no-op only proves the browser view-state token remains observable; it does not yet prove browser editor lifecycle ordering or fallback isolation with DC8L enabled',
      requiredMilestonesBeforeDiscussion: [
        'DC8L single-live proven',
        'post-DC8L composer lane freeze review',
      ],
    },
    minimumWin: {
      definition: 'DC8L admission plan / freeze / next-step lock all verify green and nextApprovedAction uniquely locked to composer-eighth-live-contract',
      mustVerify: [
        'startup-module-resolution-composer-eighth-live-admission-plan-verify.json',
        'startup-module-resolution-composer-eighth-live-freeze-review-verify.json',
        'startup-module-resolution-composer-eighth-live-next-step-lock-verify.json',
      ],
    },
    scopeBoundary: {
      allowOnly: [
        'DC8L admission artifacts',
        'composer eighth live freeze artifacts',
        'composer eighth live next-step lock artifacts',
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
      safestShortPath: 'DC8L admission -> eighth-live freeze review -> eighth-live next-step lock -> composer-eighth-live-contract',
      biggestGap: 'composer-eighth live-contract specific preflight artifacts are not yet materialized, so admission must stop before contract/live execution',
    },
    followUpPriority: {
      next: 'composer-eighth-live-contract',
      afterThat: 'composer lane freeze review only if contract preflight semantics drift',
    },
    rollbackPolicy: {
      perModuleKillSwitchOn: [
        moduleId,
      ],
      laneFreezeOn: [
        'composer eighth single-live failure with ambiguous cause',
        'smoke or spike regression after DC8L enablement',
        'accept regression attributable to composer lane',
      ],
    },
    decision: {
      admissionPlanReady: true,
      executionStillPending: true,
      nextApprovedAction: 'composer-eighth-live-contract',
      nextApprovedWaveId: 'DC8L',
      widerBatchExpansionStillBlocked: true,
    },
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

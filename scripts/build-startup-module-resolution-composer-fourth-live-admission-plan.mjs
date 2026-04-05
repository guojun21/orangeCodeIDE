#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const FOURTH_RUNTIME_NEXT_STEP_LOCK_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fourth-runtime-next-step-lock.json');
const FOURTH_RUNTIME_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fourth-runtime-freeze-review.json');
const FOURTH_RUNTIME_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-fourth-module-resolution-runtime-gate.json');
const FOURTH_ADMISSION_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fourth-admission.json');
const COMPOSER_SINGLE_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-module-resolution-live-gate.json');
const COMPOSER_CONTEXT_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-context-module-resolution-live-gate.json');
const COMPOSER_THIRD_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-third-module-resolution-live-gate.json');
const COMPOSER_BATCH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-live-both-module-resolution-live-gate.json');
const SPIKE_PATH = path.join(ROOT, 'mapped', 'workbench-desktop-main-spike-check.json');
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fourth-live-admission-plan.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const fourthRuntimeLock = readJson(FOURTH_RUNTIME_NEXT_STEP_LOCK_PATH);
  const fourthRuntimeFreeze = readJson(FOURTH_RUNTIME_FREEZE_REVIEW_PATH);
  const fourthRuntimeGate = readJson(FOURTH_RUNTIME_GATE_PATH);
  const fourthAdmission = readJson(FOURTH_ADMISSION_PATH);
  const composerSingleLiveGate = readJson(COMPOSER_SINGLE_LIVE_GATE_PATH);
  const composerContextLiveGate = readJson(COMPOSER_CONTEXT_LIVE_GATE_PATH);
  const composerThirdLiveGate = readJson(COMPOSER_THIRD_LIVE_GATE_PATH);
  const composerBatchLiveGate = readJson(COMPOSER_BATCH_LIVE_GATE_PATH);
  const spike = readJson(SPIKE_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);

  const moduleId = fourthAdmission.approvedCandidate?.moduleId ?? null;
  const sourceFile = fourthAdmission.approvedCandidate?.sourceFile ?? null;
  const runtimeInputFile = fourthAdmission.approvedCandidate?.runtimeInputFile ?? null;

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-composer',
    phase: 'fourth-live-admission-plan',
    sources: {
      fourthRuntimeNextStepLock: normalizePath(path.relative(ROOT, FOURTH_RUNTIME_NEXT_STEP_LOCK_PATH)),
      fourthRuntimeFreezeReview: normalizePath(path.relative(ROOT, FOURTH_RUNTIME_FREEZE_REVIEW_PATH)),
      fourthRuntimeGate: normalizePath(path.relative(ROOT, FOURTH_RUNTIME_GATE_PATH)),
      fourthAdmission: normalizePath(path.relative(ROOT, FOURTH_ADMISSION_PATH)),
      firstSingleLiveGate: normalizePath(path.relative(ROOT, COMPOSER_SINGLE_LIVE_GATE_PATH)),
      secondSingleLiveGate: normalizePath(path.relative(ROOT, COMPOSER_CONTEXT_LIVE_GATE_PATH)),
      thirdSingleLiveGate: normalizePath(path.relative(ROOT, COMPOSER_THIRD_LIVE_GATE_PATH)),
      firstMicroBatchGate: normalizePath(path.relative(ROOT, COMPOSER_BATCH_LIVE_GATE_PATH)),
      spike: normalizePath(path.relative(ROOT, SPIKE_PATH)),
      accept: normalizePath(path.relative(ROOT, ACCEPT_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    candidate: {
      waveId: 'DC4L',
      moduleId,
      sourceFile,
      runtimeInputFile,
      rationale: [
        'tiny browser-scope handler-types module that remains non-DOM and non-component at live-admission time',
        'no manager/stateful resource-holder behavior is exposed in the recovered slice',
        'source and startup-loader input remain aligned after DC4 dedicated no-op runtime freeze',
        'runner-ups still carry broader chat-service, debug-log, or blob-store semantics than composerFileChangeHandlerTypes.js',
      ],
      liveShape: 'single-module-live',
    },
    prerequisites: {
      fourthNoOpPassed: fourthRuntimeGate.passed === true,
      fourthNoOpWaveId: fourthRuntimeGate.expectedWaveId ?? null,
      firstSingleLiveStillProven:
        composerSingleLiveGate.passed === true
        && composerSingleLiveGate.expectedWaveId === 'DC1',
      secondSingleLiveStillProven:
        composerContextLiveGate.passed === true
        && composerContextLiveGate.expectedWaveId === 'DC2',
      thirdSingleLiveStillProven:
        composerThirdLiveGate.passed === true
        && composerThirdLiveGate.expectedWaveId === 'DC3L',
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
      reviewChangesLaneStillFrozen: fourthRuntimeLock.decision?.reviewChangesLaneFrozen === true,
      broadBrowserStillHeld: fourthRuntimeLock.decision?.broadBrowserHeld === true,
    },
    blockedSurfaces: [
      'composer wider batch expansion',
      'new reviewChanges browser surface expansion',
      'cross-lane expansion',
      'rename-driven work',
    ],
    requiredBeforeLive: [
      'build DC4L live contract',
      'run composer-fourth export-delta gate',
      'run composer-fourth fallback preflight',
      'run composer-fourth sticky-disable preflight',
      'apply wrapper patch',
      'run live gate',
      'run smoke',
      'run workbench-desktop-main spike',
      'run accept',
      'run quality-report',
    ],
    stopConditions: [
      'DC4L single-live gate does not record overlay-hit',
      'smoke fails or regresses before workbench ready',
      'spike fails or hangs after DC4L enablement',
      'accept fails with composer-adjacent runtime regression',
      'quality-report no longer shows stable rollout gates as green',
      'do not discuss wider composer batch while DC4 is only no-op proven',
    ],
    runnerUpLock: {
      locked: true,
      approvedCandidateOnly: moduleId,
      blockedRunnerUps: [
        'out-build/vs/workbench/contrib/composer/browser/composerChatServiceInterface.js',
        'out-build/vs/workbench/contrib/composer/browser/utils/debugLogFileUtils.js',
        'out-build/vs/workbench/contrib/composer/browser/composerBlobStore.js',
      ],
    },
    failureClassification: {
      rollbackAdmissionOnlyOn: [
        'admission fields drift from the approved DC4L candidate lock',
        'requiredBeforeLive no longer fully defines the composer-fourth live-contract preflight chain',
      ],
      freezeComposerLaneOn: [
        'composer fourth admission artifacts no longer uniquely lock the next step to composer-fourth-live-contract',
        'smoke or spike regression is attributable to composer-lane changes during DC4L follow-up execution',
        'accept or quality-report regression is attributable to composer lane after DC4L enablement',
      ],
    },
    widerBatchEligibilityGate: {
      discussionBlocked: true,
      currentProofState: 'three-single-live-plus-first-micro-batch-plus-fourth-no-op',
      whyCurrentProofIsInsufficient: 'a proven fourth no-op only proves the next single-module candidate remains observable; it does not yet prove wider-batch interaction ordering or fallback isolation with DC4L enabled',
      requiredMilestonesBeforeDiscussion: [
        'DC4L single-live proven',
        'post-DC4L composer lane freeze review',
      ],
    },
    minimumWin: {
      definition: 'DC4L admission plan / freeze / next-step lock all verify green and nextApprovedAction uniquely locked to composer-fourth-live-contract',
      mustVerify: [
        'startup-module-resolution-composer-fourth-live-admission-plan-verify.json',
        'startup-module-resolution-composer-fourth-live-freeze-review-verify.json',
        'startup-module-resolution-composer-fourth-live-next-step-lock-verify.json',
      ],
    },
    scopeBoundary: {
      allowOnly: [
        'DC4L admission artifacts',
        'composer fourth live freeze artifacts',
        'composer fourth live next-step lock artifacts',
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
      safestShortPath: 'DC4L admission -> fourth-live freeze review -> fourth-live next-step lock -> composer-fourth-live-contract',
      biggestGap: 'composer-fourth live-contract specific preflight artifacts are not yet materialized, so admission must stop before contract/live execution',
    },
    followUpPriority: {
      next: 'composer-fourth-live-contract',
      afterThat: 'composer lane freeze review only if contract preflight semantics drift',
    },
    rollbackPolicy: {
      perModuleKillSwitchOn: [
        moduleId,
      ],
      laneFreezeOn: [
        'composer fourth single-live failure with ambiguous cause',
        'smoke or spike regression after DC4L enablement',
        'accept regression attributable to composer lane',
      ],
    },
    decision: {
      admissionPlanReady: true,
      executionStillPending: true,
      nextApprovedAction: 'composer-fourth-live-contract',
      nextApprovedWaveId: 'DC4L',
      widerBatchExpansionStillBlocked: true,
    },
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

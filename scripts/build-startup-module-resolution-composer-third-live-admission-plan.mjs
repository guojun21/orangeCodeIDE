#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const THIRD_RUNTIME_NEXT_STEP_LOCK_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-third-runtime-next-step-lock.json');
const THIRD_RUNTIME_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-third-runtime-freeze-review.json');
const THIRD_RUNTIME_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-third-module-resolution-runtime-gate.json');
const THIRD_ADMISSION_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-third-admission.json');
const COMPOSER_SINGLE_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-module-resolution-live-gate.json');
const COMPOSER_CONTEXT_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-context-module-resolution-live-gate.json');
const COMPOSER_BATCH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-live-both-module-resolution-live-gate.json');
const SPIKE_PATH = path.join(ROOT, 'mapped', 'workbench-desktop-main-spike-check.json');
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-third-live-admission-plan.json');

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
  const composerSingleLiveGate = readJson(COMPOSER_SINGLE_LIVE_GATE_PATH);
  const composerContextLiveGate = readJson(COMPOSER_CONTEXT_LIVE_GATE_PATH);
  const composerBatchLiveGate = readJson(COMPOSER_BATCH_LIVE_GATE_PATH);
  const spike = readJson(SPIKE_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);

  const moduleId = thirdAdmission.approvedCandidate?.moduleId ?? null;
  const sourceFile = thirdAdmission.approvedCandidate?.sourceFile ?? null;
  const runtimeInputFile = thirdAdmission.approvedCandidate?.runtimeInputFile ?? null;

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-composer',
    phase: 'third-live-admission-plan',
    sources: {
      thirdRuntimeNextStepLock: normalizePath(path.relative(ROOT, THIRD_RUNTIME_NEXT_STEP_LOCK_PATH)),
      thirdRuntimeFreezeReview: normalizePath(path.relative(ROOT, THIRD_RUNTIME_FREEZE_REVIEW_PATH)),
      thirdRuntimeGate: normalizePath(path.relative(ROOT, THIRD_RUNTIME_GATE_PATH)),
      thirdAdmission: normalizePath(path.relative(ROOT, THIRD_ADMISSION_PATH)),
      firstSingleLiveGate: normalizePath(path.relative(ROOT, COMPOSER_SINGLE_LIVE_GATE_PATH)),
      secondSingleLiveGate: normalizePath(path.relative(ROOT, COMPOSER_CONTEXT_LIVE_GATE_PATH)),
      firstMicroBatchGate: normalizePath(path.relative(ROOT, COMPOSER_BATCH_LIVE_GATE_PATH)),
      spike: normalizePath(path.relative(ROOT, SPIKE_PATH)),
      accept: normalizePath(path.relative(ROOT, ACCEPT_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    candidate: {
      waveId: 'DC3L',
      moduleId,
      sourceFile,
      runtimeInputFile,
      rationale: [
        'tiny browser-path composer filter module with no visible DOM/component/widget touch points',
        'no manager/stateful resource-holder behavior exposed in the recovered slice',
        'source and startup-loader input remain aligned after DC3 no-op runtime freeze',
        'runner-ups still carry broader handler, interface, or debug-log semantics than composerModelFilters.js',
      ],
      liveShape: 'single-module-live',
    },
    prerequisites: {
      thirdNoOpPassed: thirdRuntimeGate.passed === true,
      thirdNoOpWaveId: thirdRuntimeGate.expectedWaveId ?? null,
      firstSingleLiveStillProven:
        composerSingleLiveGate.passed === true
        && composerSingleLiveGate.expectedWaveId === 'DC1',
      secondSingleLiveStillProven:
        composerContextLiveGate.passed === true
        && composerContextLiveGate.expectedWaveId === 'DC2',
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
      reviewChangesLaneStillFrozen: thirdRuntimeLock.decision?.reviewChangesLaneFrozen === true,
      broadBrowserStillHeld: thirdRuntimeLock.decision?.broadBrowserHeld === true,
    },
    blockedSurfaces: [
      'composer wider batch expansion',
      'new reviewChanges browser surface expansion',
      'cross-lane expansion',
      'rename-driven work',
    ],
    requiredBeforeLive: [
      'build DC3L live contract',
      'run composer-third export-delta gate',
      'run composer-third fallback preflight',
      'run composer-third sticky-disable preflight',
      'apply wrapper patch',
      'run live gate',
      'run smoke',
      'run workbench-desktop-main spike',
      'run accept',
      'run quality-report',
    ],
    stopConditions: [
      'DC3L single-live gate does not record overlay-hit',
      'smoke fails or regresses before workbench ready',
      'spike fails or hangs after DC3L enablement',
      'accept fails with composer-adjacent runtime regression',
      'quality-report no longer shows stable rollout gates as green',
      'do not discuss wider composer batch while DC3 is only no-op proven',
    ],
    runnerUpLock: {
      locked: true,
      approvedCandidateOnly: moduleId,
      blockedRunnerUps: [
        'out-build/vs/workbench/contrib/composer/browser/composerFileChangeHandlerTypes.js',
        'out-build/vs/workbench/contrib/composer/browser/composerChatServiceInterface.js',
        'out-build/vs/workbench/contrib/composer/browser/utils/debugLogFileUtils.js',
      ],
    },
    failureClassification: {
      rollbackAdmissionOnlyOn: [
        'admission fields drift from the approved DC3L candidate lock',
        'requiredBeforeLive no longer fully defines the composer-third live-contract preflight chain',
      ],
      freezeComposerLaneOn: [
        'composer third admission artifacts no longer uniquely lock the next step to composer-third-live-contract',
        'smoke or spike regression is attributable to composer-lane changes during DC3L follow-up execution',
        'accept or quality-report regression is attributable to composer lane after DC3L enablement',
      ],
    },
    widerBatchEligibilityGate: {
      discussionBlocked: true,
      currentProofState: 'two-single-live-plus-first-micro-batch-plus-third-no-op',
      whyCurrentProofIsInsufficient: 'a proven first micro-batch plus a third no-op only proves the next single-module candidate remains observable; it does not yet prove wider-batch interaction ordering or fallback isolation with DC3L enabled',
      requiredMilestonesBeforeDiscussion: [
        'DC3L single-live proven',
        'post-DC3L composer lane freeze review',
      ],
    },
    minimumWin: {
      definition: 'DC3L admission plan / freeze / next-step lock all verify green and nextApprovedAction uniquely locked to composer-third-live-contract',
      mustVerify: [
        'startup-module-resolution-composer-third-live-admission-plan-verify.json',
        'startup-module-resolution-composer-third-live-freeze-review-verify.json',
        'startup-module-resolution-composer-third-live-next-step-lock-verify.json',
      ],
    },
    scopeBoundary: {
      allowOnly: [
        'DC3L admission artifacts',
        'composer third live freeze artifacts',
        'composer third live next-step lock artifacts',
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
      safestShortPath: 'DC3L admission -> third-live freeze review -> third-live next-step lock -> composer-third-live-contract',
      biggestGap: 'composer-third live-contract specific preflight artifacts are not yet materialized, so admission must stop before contract/live execution',
    },
    followUpPriority: {
      next: 'composer-third-live-contract',
      afterThat: 'composer lane freeze review only if contract preflight semantics drift',
    },
    rollbackPolicy: {
      perModuleKillSwitchOn: [
        moduleId,
      ],
      laneFreezeOn: [
        'composer third single-live failure with ambiguous cause',
        'smoke or spike regression after DC3L enablement',
        'accept regression attributable to composer lane',
      ],
    },
    decision: {
      admissionPlanReady: true,
      executionStillPending: true,
      nextApprovedAction: 'composer-third-live-contract',
      nextApprovedWaveId: 'DC3L',
      widerBatchExpansionStillBlocked: true,
    },
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

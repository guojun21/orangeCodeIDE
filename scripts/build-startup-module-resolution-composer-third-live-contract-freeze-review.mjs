#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const THIRD_LIVE_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-third-live-freeze-review.json');
const THIRD_LIVE_ADMISSION_PLAN_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-third-live-admission-plan.json');
const THIRD_LIVE_CONTRACT_PATH = path.join(ROOT, 'mapped', 'contrib-composer-third-module-resolution-live-contract.json');
const THIRD_EXPORT_DELTA_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-third-export-delta-gate.json');
const THIRD_FALLBACK_PREFLIGHT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-third-fallback-preflight.json');
const THIRD_STICKY_PREFLIGHT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-third-sticky-disable-preflight.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-third-live-contract-freeze-review.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const thirdLiveFreezeReview = readJson(THIRD_LIVE_FREEZE_REVIEW_PATH);
  const thirdLiveAdmissionPlan = readJson(THIRD_LIVE_ADMISSION_PLAN_PATH);
  const thirdLiveContract = readJson(THIRD_LIVE_CONTRACT_PATH);
  const thirdExportDelta = readJson(THIRD_EXPORT_DELTA_PATH);
  const thirdFallbackPreflight = readJson(THIRD_FALLBACK_PREFLIGHT_PATH);
  const thirdStickyPreflight = readJson(THIRD_STICKY_PREFLIGHT_PATH);
  const quality = readJson(QUALITY_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-composer',
    phase: 'third-live-contract-freeze-review',
    sources: {
      thirdLiveFreezeReview: normalizePath(path.relative(ROOT, THIRD_LIVE_FREEZE_REVIEW_PATH)),
      thirdLiveAdmissionPlan: normalizePath(path.relative(ROOT, THIRD_LIVE_ADMISSION_PLAN_PATH)),
      thirdLiveContract: normalizePath(path.relative(ROOT, THIRD_LIVE_CONTRACT_PATH)),
      thirdExportDeltaGate: normalizePath(path.relative(ROOT, THIRD_EXPORT_DELTA_PATH)),
      thirdFallbackPreflight: normalizePath(path.relative(ROOT, THIRD_FALLBACK_PREFLIGHT_PATH)),
      thirdStickyPreflight: normalizePath(path.relative(ROOT, THIRD_STICKY_PREFLIGHT_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    baseline: {
      laneState: thirdLiveFreezeReview.decision?.laneState ?? null,
      stableRuntimeStillGreen:
        quality.stability?.headlessVerifyPassed === true
        && quality.stability?.startupLoaderRuntimeGatePassed === true
        && quality.stability?.startupLoaderRolloutGatePassed === true,
    },
    proven: {
      firstSingleLiveModuleId: thirdLiveFreezeReview.proven?.firstSingleLiveModuleId ?? null,
      firstSingleLiveWaveId: thirdLiveFreezeReview.proven?.firstSingleLiveWaveId ?? null,
      secondSingleLiveModuleId: thirdLiveFreezeReview.proven?.secondSingleLiveModuleId ?? null,
      secondSingleLiveWaveId: thirdLiveFreezeReview.proven?.secondSingleLiveWaveId ?? null,
      firstMicroBatchWaveId: thirdLiveFreezeReview.proven?.firstMicroBatchWaveId ?? null,
      thirdNoOpModuleId: thirdLiveFreezeReview.thirdNoOp?.moduleId ?? null,
      thirdNoOpWaveId: thirdLiveFreezeReview.thirdNoOp?.waveId ?? null,
    },
    thirdLiveContract: {
      moduleId: thirdLiveAdmissionPlan.candidate?.moduleId ?? null,
      waveId: thirdLiveContract.canary?.waveId ?? null,
      mode: thirdLiveContract.mode ?? null,
      resolverEnabled: thirdLiveContract.defaults?.resolverEnabled ?? null,
      laneToggleEnabled: thirdLiveContract.defaults?.laneToggles?.['deep-zone-composer'] ?? null,
      perModuleKillSwitchEnabled:
        thirdLiveContract.defaults?.perModuleKillSwitch?.['out-build/vs/workbench/contrib/composer/browser/composerModelFilters.js'] === false,
      exportDeltaPassed: thirdExportDelta.passed === true,
      fallbackPreflightPassed: thirdFallbackPreflight.passed === true,
      stickyPreflightPassed: thirdStickyPreflight.passed === true,
    },
    blockedSurfaces: thirdLiveAdmissionPlan.blockedSurfaces ?? [],
    runnerUpLock: thirdLiveFreezeReview.runnerUpLock ?? {},
    failureClassification: {
      rollbackContractOnlyOn: [
        'live contract no longer pins DC3L to composerModelFilters.js in live-canary mode',
        'composer-third export/fallback/sticky preflight chain is incomplete or no longer all green',
      ],
      freezeComposerLaneOn: [
        'composer third contract artifacts no longer uniquely lock the next step to composer-third-live-execution',
        'preflight evidence suggests composer lane fallback or sticky-disable semantics are no longer trustworthy with composerModelFilters.js prepared for live',
        'quality-report or rollout stability regresses while preparing DC3L live execution',
      ],
    },
    widerBatchEligibilityGate: {
      discussionBlocked: true,
      currentProofState: 'two-single-live-plus-first-micro-batch-plus-third-contract-ready',
      whyCurrentProofIsInsufficient: 'a ready third live contract plus green composer-third preflight still does not count as a proven third live execution, so wider-batch discussion remains premature until DC3L live execution is proven and frozen',
      requiredMilestonesBeforeDiscussion: [
        'DC3L live execution proven',
        'post-DC3L composer lane freeze review',
      ],
    },
    minimumWin: {
      definition: 'DC3L live contract / export-delta / fallback / sticky-disable / freeze / next-step lock all verify green and nextApprovedAction uniquely locked to composer-third-live-execution',
      mustVerify: [
        'startup-module-resolution-composer-third-live-contract-freeze-review-verify.json',
        'startup-module-resolution-composer-third-live-contract-next-step-lock-verify.json',
      ],
    },
    scopeBoundary: {
      allowOnly: [
        'DC3L live contract artifacts',
        'composer third export-delta artifacts',
        'composer third fallback preflight artifacts',
        'composer third sticky-disable preflight artifacts',
        'composer third live contract freeze artifacts',
        'composer third live contract next-step lock artifacts',
      ],
      mustNotTouch: [
        'composer live execution',
        'composer wider batch expansion',
        'reviewChanges lane',
        'browser lane',
        'mechanical recovery chain',
      ],
    },
    followUpPriority: {
      next: 'composer-third-live-execution',
      afterThat: 'composer lane freeze review only after third live execution result is frozen',
    },
    decision: {
      laneFrozen: true,
      laneState: 'contrib-composer-two-single-live-one-micro-batch-third-live-contract-ready',
      nextApprovedStep: 'composer-third-live-contract-next-step-lock',
      thirdLiveContractReadyOnly: true,
      widerBatchExpansionStillBlocked: true,
      reviewChangesLaneStillFrozen: true,
      broadBrowserStillHeld: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    blockedNow: [
      'composer wider batch expansion',
      'new reviewChanges browser surface expansion',
      'cross-lane expansion',
      'rename-driven work',
      'composer third live execution before explicit run step',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

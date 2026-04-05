#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const SEVENTH_LIVE_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-seventh-live-freeze-review.json');
const SEVENTH_LIVE_ADMISSION_PLAN_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-seventh-live-admission-plan.json');
const SEVENTH_LIVE_CONTRACT_PATH = path.join(ROOT, 'mapped', 'contrib-composer-seventh-module-resolution-live-contract.json');
const SEVENTH_EXPORT_DELTA_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-seventh-export-delta-gate.json');
const SEVENTH_FALLBACK_PREFLIGHT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-seventh-fallback-preflight.json');
const SEVENTH_STICKY_PREFLIGHT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-seventh-sticky-disable-preflight.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-seventh-live-contract-freeze-review.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const seventhLiveFreezeReview = readJson(SEVENTH_LIVE_FREEZE_REVIEW_PATH);
  const seventhLiveAdmissionPlan = readJson(SEVENTH_LIVE_ADMISSION_PLAN_PATH);
  const seventhLiveContract = readJson(SEVENTH_LIVE_CONTRACT_PATH);
  const seventhExportDelta = readJson(SEVENTH_EXPORT_DELTA_PATH);
  const seventhFallbackPreflight = readJson(SEVENTH_FALLBACK_PREFLIGHT_PATH);
  const seventhStickyPreflight = readJson(SEVENTH_STICKY_PREFLIGHT_PATH);
  const quality = readJson(QUALITY_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-composer',
    phase: 'seventh-live-contract-freeze-review',
    sources: {
      seventhLiveFreezeReview: normalizePath(path.relative(ROOT, SEVENTH_LIVE_FREEZE_REVIEW_PATH)),
      seventhLiveAdmissionPlan: normalizePath(path.relative(ROOT, SEVENTH_LIVE_ADMISSION_PLAN_PATH)),
      seventhLiveContract: normalizePath(path.relative(ROOT, SEVENTH_LIVE_CONTRACT_PATH)),
      seventhExportDeltaGate: normalizePath(path.relative(ROOT, SEVENTH_EXPORT_DELTA_PATH)),
      seventhFallbackPreflight: normalizePath(path.relative(ROOT, SEVENTH_FALLBACK_PREFLIGHT_PATH)),
      seventhStickyPreflight: normalizePath(path.relative(ROOT, SEVENTH_STICKY_PREFLIGHT_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    baseline: {
      laneState: seventhLiveFreezeReview.decision?.laneState ?? null,
      stableRuntimeStillGreen:
        quality.stability?.headlessVerifyPassed === true
        && quality.stability?.startupLoaderRuntimeGatePassed === true
        && quality.stability?.startupLoaderRolloutGatePassed === true,
    },
    proven: {
      firstSingleLiveModuleId: seventhLiveFreezeReview.proven?.firstSingleLiveModuleId ?? null,
      firstSingleLiveWaveId: seventhLiveFreezeReview.proven?.firstSingleLiveWaveId ?? null,
      secondSingleLiveModuleId: seventhLiveFreezeReview.proven?.secondSingleLiveModuleId ?? null,
      secondSingleLiveWaveId: seventhLiveFreezeReview.proven?.secondSingleLiveWaveId ?? null,
      thirdSingleLiveModuleId: seventhLiveFreezeReview.proven?.thirdSingleLiveModuleId ?? null,
      thirdSingleLiveWaveId: seventhLiveFreezeReview.proven?.thirdSingleLiveWaveId ?? null,
      fourthSingleLiveModuleId: seventhLiveFreezeReview.proven?.fourthSingleLiveModuleId ?? null,
      fourthSingleLiveWaveId: seventhLiveFreezeReview.proven?.fourthSingleLiveWaveId ?? null,
      fifthSingleLiveModuleId: seventhLiveFreezeReview.proven?.fifthSingleLiveModuleId ?? null,
      fifthSingleLiveWaveId: seventhLiveFreezeReview.proven?.fifthSingleLiveWaveId ?? null,
      sixthSingleLiveModuleId: seventhLiveFreezeReview.proven?.sixthSingleLiveModuleId ?? null,
      sixthSingleLiveWaveId: seventhLiveFreezeReview.proven?.sixthSingleLiveWaveId ?? null,
      firstMicroBatchWaveId: seventhLiveFreezeReview.proven?.firstMicroBatchWaveId ?? null,
      seventhNoOpModuleId: seventhLiveFreezeReview.seventhNoOp?.moduleId ?? null,
      seventhNoOpWaveId: seventhLiveFreezeReview.seventhNoOp?.waveId ?? null,
    },
    seventhLiveContract: {
      moduleId: seventhLiveAdmissionPlan.candidate?.moduleId ?? null,
      waveId: seventhLiveContract.canary?.waveId ?? null,
      mode: seventhLiveContract.mode ?? null,
      resolverEnabled: seventhLiveContract.defaults?.resolverEnabled ?? null,
      laneToggleEnabled: seventhLiveContract.defaults?.laneToggles?.['deep-zone-composer'] ?? null,
      perModuleKillSwitchEnabled:
        seventhLiveContract.defaults?.perModuleKillSwitch?.['out-build/vs/workbench/contrib/composer/browser/composerBlobStore.js'] === false,
      exportDeltaPassed: seventhExportDelta.passed === true,
      fallbackPreflightPassed: seventhFallbackPreflight.passed === true,
      stickyPreflightPassed: seventhStickyPreflight.passed === true,
    },
    blockedSurfaces: seventhLiveAdmissionPlan.blockedSurfaces ?? [],
    runnerUpLock: seventhLiveFreezeReview.runnerUpLock ?? {},
    failureClassification: {
      rollbackContractOnlyOn: [
        'live contract no longer pins DC7L to composerBlobStore.js in live-canary mode',
        'composer-seventh export/fallback/sticky preflight chain is incomplete or no longer all green',
      ],
      freezeComposerLaneOn: [
        'composer seventh contract artifacts no longer uniquely lock the next step to composer-seventh-live-execution',
        'preflight evidence suggests composer lane fallback or sticky-disable semantics are no longer trustworthy with composerBlobStore.js prepared for live',
        'quality-report or rollout stability regresses while preparing DC7L live execution',
      ],
    },
    widerBatchEligibilityGate: {
      discussionBlocked: true,
      currentProofState: 'six-single-live-plus-first-micro-batch-plus-seventh-contract-ready',
      whyCurrentProofIsInsufficient: 'a ready seventh live contract plus green composer-seventh preflight still does not count as a proven seventh live execution, so wider-batch discussion remains premature until DC7L live execution is proven and frozen',
      requiredMilestonesBeforeDiscussion: [
        'DC7L live execution proven',
        'post-DC7L composer lane freeze review',
      ],
    },
    minimumWin: {
      definition: 'DC7L live contract / export-delta / fallback / sticky-disable / freeze / next-step lock all verify green and nextApprovedAction uniquely locked to composer-seventh-live-execution',
      mustVerify: [
        'startup-module-resolution-composer-seventh-live-contract-freeze-review-verify.json',
        'startup-module-resolution-composer-seventh-live-contract-next-step-lock-verify.json',
      ],
    },
    scopeBoundary: {
      allowOnly: [
        'DC7L live contract artifacts',
        'composer seventh export-delta artifacts',
        'composer seventh fallback preflight artifacts',
        'composer seventh sticky-disable preflight artifacts',
        'composer seventh live contract freeze artifacts',
        'composer seventh live contract next-step lock artifacts',
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
      next: 'composer-seventh-live-execution',
      afterThat: 'composer lane freeze review only after seventh live execution result is frozen',
    },
    decision: {
      laneFrozen: true,
      laneState: 'contrib-composer-six-single-live-one-micro-batch-seventh-live-contract-ready',
      nextApprovedStep: 'composer-seventh-live-contract-next-step-lock',
      seventhLiveContractReadyOnly: true,
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
      'composer seventh live execution before explicit run step',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

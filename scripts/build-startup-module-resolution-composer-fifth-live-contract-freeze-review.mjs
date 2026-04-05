#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const FIFTH_LIVE_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fifth-live-freeze-review.json');
const FIFTH_LIVE_ADMISSION_PLAN_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fifth-live-admission-plan.json');
const FIFTH_LIVE_CONTRACT_PATH = path.join(ROOT, 'mapped', 'contrib-composer-fifth-module-resolution-live-contract.json');
const FIFTH_EXPORT_DELTA_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fifth-export-delta-gate.json');
const FIFTH_FALLBACK_PREFLIGHT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fifth-fallback-preflight.json');
const FIFTH_STICKY_PREFLIGHT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fifth-sticky-disable-preflight.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fifth-live-contract-freeze-review.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const fifthLiveFreezeReview = readJson(FIFTH_LIVE_FREEZE_REVIEW_PATH);
  const fifthLiveAdmissionPlan = readJson(FIFTH_LIVE_ADMISSION_PLAN_PATH);
  const fifthLiveContract = readJson(FIFTH_LIVE_CONTRACT_PATH);
  const fifthExportDelta = readJson(FIFTH_EXPORT_DELTA_PATH);
  const fifthFallbackPreflight = readJson(FIFTH_FALLBACK_PREFLIGHT_PATH);
  const fifthStickyPreflight = readJson(FIFTH_STICKY_PREFLIGHT_PATH);
  const quality = readJson(QUALITY_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-composer',
    phase: 'fifth-live-contract-freeze-review',
    sources: {
      fifthLiveFreezeReview: normalizePath(path.relative(ROOT, FIFTH_LIVE_FREEZE_REVIEW_PATH)),
      fifthLiveAdmissionPlan: normalizePath(path.relative(ROOT, FIFTH_LIVE_ADMISSION_PLAN_PATH)),
      fifthLiveContract: normalizePath(path.relative(ROOT, FIFTH_LIVE_CONTRACT_PATH)),
      fifthExportDeltaGate: normalizePath(path.relative(ROOT, FIFTH_EXPORT_DELTA_PATH)),
      fifthFallbackPreflight: normalizePath(path.relative(ROOT, FIFTH_FALLBACK_PREFLIGHT_PATH)),
      fifthStickyPreflight: normalizePath(path.relative(ROOT, FIFTH_STICKY_PREFLIGHT_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    baseline: {
      laneState: fifthLiveFreezeReview.decision?.laneState ?? null,
      stableRuntimeStillGreen:
        quality.stability?.headlessVerifyPassed === true
        && quality.stability?.startupLoaderRuntimeGatePassed === true
        && quality.stability?.startupLoaderRolloutGatePassed === true,
    },
    proven: {
      firstSingleLiveModuleId: fifthLiveFreezeReview.proven?.firstSingleLiveModuleId ?? null,
      firstSingleLiveWaveId: fifthLiveFreezeReview.proven?.firstSingleLiveWaveId ?? null,
      secondSingleLiveModuleId: fifthLiveFreezeReview.proven?.secondSingleLiveModuleId ?? null,
      secondSingleLiveWaveId: fifthLiveFreezeReview.proven?.secondSingleLiveWaveId ?? null,
      thirdSingleLiveModuleId: fifthLiveFreezeReview.proven?.thirdSingleLiveModuleId ?? null,
      thirdSingleLiveWaveId: fifthLiveFreezeReview.proven?.thirdSingleLiveWaveId ?? null,
      fourthSingleLiveModuleId: fifthLiveFreezeReview.proven?.fourthSingleLiveModuleId ?? null,
      fourthSingleLiveWaveId: fifthLiveFreezeReview.proven?.fourthSingleLiveWaveId ?? null,
      firstMicroBatchWaveId: fifthLiveFreezeReview.proven?.firstMicroBatchWaveId ?? null,
      fifthNoOpModuleId: fifthLiveFreezeReview.fifthNoOp?.moduleId ?? null,
      fifthNoOpWaveId: fifthLiveFreezeReview.fifthNoOp?.waveId ?? null,
    },
    fifthLiveContract: {
      moduleId: fifthLiveAdmissionPlan.candidate?.moduleId ?? null,
      waveId: fifthLiveContract.canary?.waveId ?? null,
      mode: fifthLiveContract.mode ?? null,
      resolverEnabled: fifthLiveContract.defaults?.resolverEnabled ?? null,
      laneToggleEnabled: fifthLiveContract.defaults?.laneToggles?.['deep-zone-composer'] ?? null,
      perModuleKillSwitchEnabled:
        fifthLiveContract.defaults?.perModuleKillSwitch?.['out-build/vs/workbench/contrib/composer/browser/composerChatServiceInterface.js'] === false,
      exportDeltaPassed: fifthExportDelta.passed === true,
      fallbackPreflightPassed: fifthFallbackPreflight.passed === true,
      stickyPreflightPassed: fifthStickyPreflight.passed === true,
    },
    blockedSurfaces: fifthLiveAdmissionPlan.blockedSurfaces ?? [],
    runnerUpLock: fifthLiveFreezeReview.runnerUpLock ?? {},
    failureClassification: {
      rollbackContractOnlyOn: [
        'live contract no longer pins DC5L to composerChatServiceInterface.js in live-canary mode',
        'composer-fifth export/fallback/sticky preflight chain is incomplete or no longer all green',
      ],
      freezeComposerLaneOn: [
        'composer fifth contract artifacts no longer uniquely lock the next step to composer-fifth-live-execution',
        'preflight evidence suggests composer lane fallback or sticky-disable semantics are no longer trustworthy with composerChatServiceInterface.js prepared for live',
        'quality-report or rollout stability regresses while preparing DC5L live execution',
      ],
    },
    widerBatchEligibilityGate: {
      discussionBlocked: true,
      currentProofState: 'four-single-live-plus-first-micro-batch-plus-fifth-contract-ready',
      whyCurrentProofIsInsufficient: 'a ready fifth live contract plus green composer-fifth preflight still does not count as a proven fifth live execution, so wider-batch discussion remains premature until DC5L live execution is proven and frozen',
      requiredMilestonesBeforeDiscussion: [
        'DC5L live execution proven',
        'post-DC5L composer lane freeze review',
      ],
    },
    minimumWin: {
      definition: 'DC5L live contract / export-delta / fallback / sticky-disable / freeze / next-step lock all verify green and nextApprovedAction uniquely locked to composer-fifth-live-execution',
      mustVerify: [
        'startup-module-resolution-composer-fifth-live-contract-freeze-review-verify.json',
        'startup-module-resolution-composer-fifth-live-contract-next-step-lock-verify.json',
      ],
    },
    scopeBoundary: {
      allowOnly: [
        'DC5L live contract artifacts',
        'composer fifth export-delta artifacts',
        'composer fifth fallback preflight artifacts',
        'composer fifth sticky-disable preflight artifacts',
        'composer fifth live contract freeze artifacts',
        'composer fifth live contract next-step lock artifacts',
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
      next: 'composer-fifth-live-execution',
      afterThat: 'composer lane freeze review only after fifth live execution result is frozen',
    },
    decision: {
      laneFrozen: true,
      laneState: 'contrib-composer-four-single-live-one-micro-batch-fifth-live-contract-ready',
      nextApprovedStep: 'composer-fifth-live-contract-next-step-lock',
      fifthLiveContractReadyOnly: true,
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
      'composer fifth live execution before explicit run step',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

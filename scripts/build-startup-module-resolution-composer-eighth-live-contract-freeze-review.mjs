#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const EIGHTH_LIVE_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-eighth-live-freeze-review.json');
const EIGHTH_LIVE_ADMISSION_PLAN_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-eighth-live-admission-plan.json');
const EIGHTH_LIVE_CONTRACT_PATH = path.join(ROOT, 'mapped', 'contrib-composer-eighth-module-resolution-live-contract.json');
const EIGHTH_EXPORT_DELTA_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-eighth-export-delta-gate.json');
const EIGHTH_FALLBACK_PREFLIGHT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-eighth-fallback-preflight.json');
const EIGHTH_STICKY_PREFLIGHT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-eighth-sticky-disable-preflight.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-eighth-live-contract-freeze-review.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const eighthLiveFreezeReview = readJson(EIGHTH_LIVE_FREEZE_REVIEW_PATH);
  const eighthLiveAdmissionPlan = readJson(EIGHTH_LIVE_ADMISSION_PLAN_PATH);
  const eighthLiveContract = readJson(EIGHTH_LIVE_CONTRACT_PATH);
  const eighthExportDelta = readJson(EIGHTH_EXPORT_DELTA_PATH);
  const eighthFallbackPreflight = readJson(EIGHTH_FALLBACK_PREFLIGHT_PATH);
  const eighthStickyPreflight = readJson(EIGHTH_STICKY_PREFLIGHT_PATH);
  const quality = readJson(QUALITY_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-composer',
    phase: 'eighth-live-contract-freeze-review',
    sources: {
      eighthLiveFreezeReview: normalizePath(path.relative(ROOT, EIGHTH_LIVE_FREEZE_REVIEW_PATH)),
      eighthLiveAdmissionPlan: normalizePath(path.relative(ROOT, EIGHTH_LIVE_ADMISSION_PLAN_PATH)),
      eighthLiveContract: normalizePath(path.relative(ROOT, EIGHTH_LIVE_CONTRACT_PATH)),
      eighthExportDeltaGate: normalizePath(path.relative(ROOT, EIGHTH_EXPORT_DELTA_PATH)),
      eighthFallbackPreflight: normalizePath(path.relative(ROOT, EIGHTH_FALLBACK_PREFLIGHT_PATH)),
      eighthStickyPreflight: normalizePath(path.relative(ROOT, EIGHTH_STICKY_PREFLIGHT_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    baseline: {
      laneState: eighthLiveFreezeReview.decision?.laneState ?? null,
      stableRuntimeStillGreen:
        quality.stability?.headlessVerifyPassed === true
        && quality.stability?.startupLoaderRuntimeGatePassed === true
        && quality.stability?.startupLoaderRolloutGatePassed === true,
    },
    proven: {
      firstMicroBatchWaveId: eighthLiveFreezeReview.proven?.firstMicroBatchWaveId ?? null,
      eighthNoOpModuleId: eighthLiveFreezeReview.eighthNoOp?.moduleId ?? null,
      eighthNoOpWaveId: eighthLiveFreezeReview.eighthNoOp?.waveId ?? null,
    },
    eighthLiveContract: {
      moduleId: eighthLiveAdmissionPlan.candidate?.moduleId ?? null,
      waveId: eighthLiveContract.canary?.waveId ?? null,
      mode: eighthLiveContract.mode ?? null,
      resolverEnabled: eighthLiveContract.defaults?.resolverEnabled ?? null,
      laneToggleEnabled: eighthLiveContract.defaults?.laneToggles?.['deep-zone-composer'] ?? null,
      perModuleKillSwitchEnabled:
        eighthLiveContract.defaults?.perModuleKillSwitch?.['out-build/vs/workbench/contrib/composer/browser/browserViewStore.js'] === false,
      exportDeltaPassed: eighthExportDelta.passed === true,
      fallbackPreflightPassed: eighthFallbackPreflight.passed === true,
      stickyPreflightPassed: eighthStickyPreflight.passed === true,
    },
    blockedSurfaces: eighthLiveAdmissionPlan.blockedSurfaces ?? [],
    runnerUpLock: eighthLiveFreezeReview.runnerUpLock ?? {},
    failureClassification: {
      rollbackContractOnlyOn: [
        'live contract no longer pins DC8L to browserViewStore.js in live-canary mode',
        'composer-eighth export/fallback/sticky preflight chain is incomplete or no longer all green',
      ],
      freezeComposerLaneOn: [
        'composer eighth contract artifacts no longer uniquely lock the next step to composer-eighth-live-execution',
        'preflight evidence suggests browser editor lifecycle fallback or sticky-disable semantics are no longer trustworthy with browserViewStore.js prepared for live',
        'quality-report or rollout stability regresses while preparing DC8L live execution',
      ],
    },
    widerBatchEligibilityGate: {
      discussionBlocked: true,
      currentProofState: 'seven-single-live-plus-first-micro-batch-plus-eighth-contract-ready',
      whyCurrentProofIsInsufficient: 'a ready eighth live contract plus green composer-eighth preflight still does not count as a proven eighth live execution, so wider-batch discussion remains premature until DC8L live execution is proven and frozen',
      requiredMilestonesBeforeDiscussion: [
        'DC8L live execution proven',
        'post-DC8L composer lane freeze review',
      ],
    },
    minimumWin: {
      definition: 'DC8L live contract / export-delta / fallback / sticky-disable / freeze / next-step lock all verify green and nextApprovedAction uniquely locked to composer-eighth-live-execution',
      mustVerify: [
        'startup-module-resolution-composer-eighth-live-contract-freeze-review-verify.json',
        'startup-module-resolution-composer-eighth-live-contract-next-step-lock-verify.json',
      ],
    },
    scopeBoundary: {
      allowOnly: [
        'DC8L live contract artifacts',
        'composer eighth export-delta artifacts',
        'composer eighth fallback preflight artifacts',
        'composer eighth sticky-disable preflight artifacts',
        'composer eighth live contract freeze artifacts',
        'composer eighth live contract next-step lock artifacts',
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
      next: 'composer-eighth-live-execution',
      afterThat: 'composer lane freeze review only after eighth live execution result is frozen',
    },
    decision: {
      laneFrozen: true,
      laneState: 'contrib-composer-seven-single-live-one-micro-batch-eighth-live-contract-ready',
      nextApprovedStep: 'composer-eighth-live-contract-next-step-lock',
      eighthLiveContractReadyOnly: true,
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
      'composer eighth live execution before explicit run step',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

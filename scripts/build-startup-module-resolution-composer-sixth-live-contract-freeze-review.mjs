#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const SIXTH_LIVE_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-sixth-live-freeze-review.json');
const SIXTH_LIVE_ADMISSION_PLAN_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-sixth-live-admission-plan.json');
const SIXTH_LIVE_CONTRACT_PATH = path.join(ROOT, 'mapped', 'contrib-composer-sixth-module-resolution-live-contract.json');
const SIXTH_EXPORT_DELTA_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-sixth-export-delta-gate.json');
const SIXTH_FALLBACK_PREFLIGHT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-sixth-fallback-preflight.json');
const SIXTH_STICKY_PREFLIGHT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-sixth-sticky-disable-preflight.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-sixth-live-contract-freeze-review.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const sixthLiveFreezeReview = readJson(SIXTH_LIVE_FREEZE_REVIEW_PATH);
  const sixthLiveAdmissionPlan = readJson(SIXTH_LIVE_ADMISSION_PLAN_PATH);
  const sixthLiveContract = readJson(SIXTH_LIVE_CONTRACT_PATH);
  const sixthExportDelta = readJson(SIXTH_EXPORT_DELTA_PATH);
  const sixthFallbackPreflight = readJson(SIXTH_FALLBACK_PREFLIGHT_PATH);
  const sixthStickyPreflight = readJson(SIXTH_STICKY_PREFLIGHT_PATH);
  const quality = readJson(QUALITY_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-composer',
    phase: 'sixth-live-contract-freeze-review',
    sources: {
      sixthLiveFreezeReview: normalizePath(path.relative(ROOT, SIXTH_LIVE_FREEZE_REVIEW_PATH)),
      sixthLiveAdmissionPlan: normalizePath(path.relative(ROOT, SIXTH_LIVE_ADMISSION_PLAN_PATH)),
      sixthLiveContract: normalizePath(path.relative(ROOT, SIXTH_LIVE_CONTRACT_PATH)),
      sixthExportDeltaGate: normalizePath(path.relative(ROOT, SIXTH_EXPORT_DELTA_PATH)),
      sixthFallbackPreflight: normalizePath(path.relative(ROOT, SIXTH_FALLBACK_PREFLIGHT_PATH)),
      sixthStickyPreflight: normalizePath(path.relative(ROOT, SIXTH_STICKY_PREFLIGHT_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    baseline: {
      laneState: sixthLiveFreezeReview.decision?.laneState ?? null,
      stableRuntimeStillGreen:
        quality.stability?.headlessVerifyPassed === true
        && quality.stability?.startupLoaderRuntimeGatePassed === true
        && quality.stability?.startupLoaderRolloutGatePassed === true,
    },
    proven: {
      firstSingleLiveModuleId: sixthLiveFreezeReview.proven?.firstSingleLiveModuleId ?? null,
      firstSingleLiveWaveId: sixthLiveFreezeReview.proven?.firstSingleLiveWaveId ?? null,
      secondSingleLiveModuleId: sixthLiveFreezeReview.proven?.secondSingleLiveModuleId ?? null,
      secondSingleLiveWaveId: sixthLiveFreezeReview.proven?.secondSingleLiveWaveId ?? null,
      thirdSingleLiveModuleId: sixthLiveFreezeReview.proven?.thirdSingleLiveModuleId ?? null,
      thirdSingleLiveWaveId: sixthLiveFreezeReview.proven?.thirdSingleLiveWaveId ?? null,
      fourthSingleLiveModuleId: sixthLiveFreezeReview.proven?.fourthSingleLiveModuleId ?? null,
      fourthSingleLiveWaveId: sixthLiveFreezeReview.proven?.fourthSingleLiveWaveId ?? null,
      fifthSingleLiveModuleId: sixthLiveFreezeReview.proven?.fifthSingleLiveModuleId ?? null,
      fifthSingleLiveWaveId: sixthLiveFreezeReview.proven?.fifthSingleLiveWaveId ?? null,
      firstMicroBatchWaveId: sixthLiveFreezeReview.proven?.firstMicroBatchWaveId ?? null,
      sixthNoOpModuleId: sixthLiveFreezeReview.sixthNoOp?.moduleId ?? null,
      sixthNoOpWaveId: sixthLiveFreezeReview.sixthNoOp?.waveId ?? null,
    },
    sixthLiveContract: {
      moduleId: sixthLiveAdmissionPlan.candidate?.moduleId ?? null,
      waveId: sixthLiveContract.canary?.waveId ?? null,
      mode: sixthLiveContract.mode ?? null,
      resolverEnabled: sixthLiveContract.defaults?.resolverEnabled ?? null,
      laneToggleEnabled: sixthLiveContract.defaults?.laneToggles?.['deep-zone-composer'] ?? null,
      perModuleKillSwitchEnabled:
        sixthLiveContract.defaults?.perModuleKillSwitch?.['out-build/vs/workbench/contrib/composer/browser/utils/debugLogFileUtils.js'] === false,
      exportDeltaPassed: sixthExportDelta.passed === true,
      fallbackPreflightPassed: sixthFallbackPreflight.passed === true,
      stickyPreflightPassed: sixthStickyPreflight.passed === true,
    },
    blockedSurfaces: sixthLiveAdmissionPlan.blockedSurfaces ?? [],
    runnerUpLock: sixthLiveFreezeReview.runnerUpLock ?? {},
    failureClassification: {
      rollbackContractOnlyOn: [
        'live contract no longer pins DC6L to debugLogFileUtils.js in live-canary mode',
        'composer-sixth export/fallback/sticky preflight chain is incomplete or no longer all green',
      ],
      freezeComposerLaneOn: [
        'composer sixth contract artifacts no longer uniquely lock the next step to composer-sixth-live-execution',
        'preflight evidence suggests composer lane fallback or sticky-disable semantics are no longer trustworthy with debugLogFileUtils.js prepared for live',
        'quality-report or rollout stability regresses while preparing DC6L live execution',
      ],
    },
    widerBatchEligibilityGate: {
      discussionBlocked: true,
      currentProofState: 'five-single-live-plus-first-micro-batch-plus-sixth-contract-ready',
      whyCurrentProofIsInsufficient: 'a ready sixth live contract plus green composer-sixth preflight still does not count as a proven sixth live execution, so wider-batch discussion remains premature until DC6L live execution is proven and frozen',
      requiredMilestonesBeforeDiscussion: [
        'DC6L live execution proven',
        'post-DC6L composer lane freeze review',
      ],
    },
    minimumWin: {
      definition: 'DC6L live contract / export-delta / fallback / sticky-disable / freeze / next-step lock all verify green and nextApprovedAction uniquely locked to composer-sixth-live-execution',
      mustVerify: [
        'startup-module-resolution-composer-sixth-live-contract-freeze-review-verify.json',
        'startup-module-resolution-composer-sixth-live-contract-next-step-lock-verify.json',
      ],
    },
    scopeBoundary: {
      allowOnly: [
        'DC6L live contract artifacts',
        'composer sixth export-delta artifacts',
        'composer sixth fallback preflight artifacts',
        'composer sixth sticky-disable preflight artifacts',
        'composer sixth live contract freeze artifacts',
        'composer sixth live contract next-step lock artifacts',
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
      next: 'composer-sixth-live-execution',
      afterThat: 'composer lane freeze review only after sixth live execution result is frozen',
    },
    decision: {
      laneFrozen: true,
      laneState: 'contrib-composer-five-single-live-one-micro-batch-sixth-live-contract-ready',
      nextApprovedStep: 'composer-sixth-live-contract-next-step-lock',
      sixthLiveContractReadyOnly: true,
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
      'composer sixth live execution before explicit run step',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

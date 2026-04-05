#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const FOURTH_LIVE_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fourth-live-freeze-review.json');
const FOURTH_LIVE_ADMISSION_PLAN_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fourth-live-admission-plan.json');
const FOURTH_LIVE_CONTRACT_PATH = path.join(ROOT, 'mapped', 'contrib-composer-fourth-module-resolution-live-contract.json');
const FOURTH_EXPORT_DELTA_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fourth-export-delta-gate.json');
const FOURTH_FALLBACK_PREFLIGHT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fourth-fallback-preflight.json');
const FOURTH_STICKY_PREFLIGHT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fourth-sticky-disable-preflight.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fourth-live-contract-freeze-review.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const fourthLiveFreezeReview = readJson(FOURTH_LIVE_FREEZE_REVIEW_PATH);
  const fourthLiveAdmissionPlan = readJson(FOURTH_LIVE_ADMISSION_PLAN_PATH);
  const fourthLiveContract = readJson(FOURTH_LIVE_CONTRACT_PATH);
  const fourthExportDelta = readJson(FOURTH_EXPORT_DELTA_PATH);
  const fourthFallbackPreflight = readJson(FOURTH_FALLBACK_PREFLIGHT_PATH);
  const fourthStickyPreflight = readJson(FOURTH_STICKY_PREFLIGHT_PATH);
  const quality = readJson(QUALITY_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-composer',
    phase: 'fourth-live-contract-freeze-review',
    sources: {
      fourthLiveFreezeReview: normalizePath(path.relative(ROOT, FOURTH_LIVE_FREEZE_REVIEW_PATH)),
      fourthLiveAdmissionPlan: normalizePath(path.relative(ROOT, FOURTH_LIVE_ADMISSION_PLAN_PATH)),
      fourthLiveContract: normalizePath(path.relative(ROOT, FOURTH_LIVE_CONTRACT_PATH)),
      fourthExportDeltaGate: normalizePath(path.relative(ROOT, FOURTH_EXPORT_DELTA_PATH)),
      fourthFallbackPreflight: normalizePath(path.relative(ROOT, FOURTH_FALLBACK_PREFLIGHT_PATH)),
      fourthStickyPreflight: normalizePath(path.relative(ROOT, FOURTH_STICKY_PREFLIGHT_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    baseline: {
      laneState: fourthLiveFreezeReview.decision?.laneState ?? null,
      stableRuntimeStillGreen:
        quality.stability?.headlessVerifyPassed === true
        && quality.stability?.startupLoaderRuntimeGatePassed === true
        && quality.stability?.startupLoaderRolloutGatePassed === true,
    },
    proven: {
      firstSingleLiveModuleId: fourthLiveFreezeReview.proven?.firstSingleLiveModuleId ?? null,
      firstSingleLiveWaveId: fourthLiveFreezeReview.proven?.firstSingleLiveWaveId ?? null,
      secondSingleLiveModuleId: fourthLiveFreezeReview.proven?.secondSingleLiveModuleId ?? null,
      secondSingleLiveWaveId: fourthLiveFreezeReview.proven?.secondSingleLiveWaveId ?? null,
      thirdSingleLiveModuleId: fourthLiveFreezeReview.proven?.thirdSingleLiveModuleId ?? null,
      thirdSingleLiveWaveId: fourthLiveFreezeReview.proven?.thirdSingleLiveWaveId ?? null,
      firstMicroBatchWaveId: fourthLiveFreezeReview.proven?.firstMicroBatchWaveId ?? null,
      fourthNoOpModuleId: fourthLiveFreezeReview.fourthNoOp?.moduleId ?? null,
      fourthNoOpWaveId: fourthLiveFreezeReview.fourthNoOp?.waveId ?? null,
    },
    fourthLiveContract: {
      moduleId: fourthLiveAdmissionPlan.candidate?.moduleId ?? null,
      waveId: fourthLiveContract.canary?.waveId ?? null,
      mode: fourthLiveContract.mode ?? null,
      resolverEnabled: fourthLiveContract.defaults?.resolverEnabled ?? null,
      laneToggleEnabled: fourthLiveContract.defaults?.laneToggles?.['deep-zone-composer'] ?? null,
      perModuleKillSwitchEnabled:
        fourthLiveContract.defaults?.perModuleKillSwitch?.['out-build/vs/workbench/contrib/composer/browser/composerFileChangeHandlerTypes.js'] === false,
      exportDeltaPassed: fourthExportDelta.passed === true,
      fallbackPreflightPassed: fourthFallbackPreflight.passed === true,
      stickyPreflightPassed: fourthStickyPreflight.passed === true,
    },
    blockedSurfaces: fourthLiveAdmissionPlan.blockedSurfaces ?? [],
    runnerUpLock: fourthLiveFreezeReview.runnerUpLock ?? {},
    failureClassification: {
      rollbackContractOnlyOn: [
        'live contract no longer pins DC4L to composerFileChangeHandlerTypes.js in live-canary mode',
        'composer-fourth export/fallback/sticky preflight chain is incomplete or no longer all green',
      ],
      freezeComposerLaneOn: [
        'composer fourth contract artifacts no longer uniquely lock the next step to composer-fourth-live-execution',
        'preflight evidence suggests composer lane fallback or sticky-disable semantics are no longer trustworthy with composerFileChangeHandlerTypes.js prepared for live',
        'quality-report or rollout stability regresses while preparing DC4L live execution',
      ],
    },
    widerBatchEligibilityGate: {
      discussionBlocked: true,
      currentProofState: 'three-single-live-plus-first-micro-batch-plus-fourth-contract-ready',
      whyCurrentProofIsInsufficient: 'a ready fourth live contract plus green composer-fourth preflight still does not count as a proven fourth live execution, so wider-batch discussion remains premature until DC4L live execution is proven and frozen',
      requiredMilestonesBeforeDiscussion: [
        'DC4L live execution proven',
        'post-DC4L composer lane freeze review',
      ],
    },
    minimumWin: {
      definition: 'DC4L live contract / export-delta / fallback / sticky-disable / freeze / next-step lock all verify green and nextApprovedAction uniquely locked to composer-fourth-live-execution',
      mustVerify: [
        'startup-module-resolution-composer-fourth-live-contract-freeze-review-verify.json',
        'startup-module-resolution-composer-fourth-live-contract-next-step-lock-verify.json',
      ],
    },
    scopeBoundary: {
      allowOnly: [
        'DC4L live contract artifacts',
        'composer fourth export-delta artifacts',
        'composer fourth fallback preflight artifacts',
        'composer fourth sticky-disable preflight artifacts',
        'composer fourth live contract freeze artifacts',
        'composer fourth live contract next-step lock artifacts',
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
      next: 'composer-fourth-live-execution',
      afterThat: 'composer lane freeze review only after fourth live execution result is frozen',
    },
    decision: {
      laneFrozen: true,
      laneState: 'contrib-composer-three-single-live-one-micro-batch-fourth-live-contract-ready',
      nextApprovedStep: 'composer-fourth-live-contract-next-step-lock',
      fourthLiveContractReadyOnly: true,
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
      'composer fourth live execution before explicit run step',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

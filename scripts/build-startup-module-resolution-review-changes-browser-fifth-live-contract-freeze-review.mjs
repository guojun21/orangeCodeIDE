#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const FIFTH_LIVE_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fifth-live-freeze-review.json');
const FIFTH_LIVE_ADMISSION_PLAN_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fifth-live-admission-plan.json');
const FIFTH_LIVE_CONTRACT_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-browser-fifth-module-resolution-live-contract.json');
const FIFTH_EXPORT_DELTA_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fifth-export-delta-gate.json');
const FIFTH_FALLBACK_PREFLIGHT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fifth-fallback-preflight.json');
const FIFTH_STICKY_PREFLIGHT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fifth-sticky-disable-preflight.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fifth-live-contract-freeze-review.json');

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
    lane: 'browser',
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
      firstBatchWaveId: fifthLiveFreezeReview.proven?.firstBatchWaveId ?? null,
      secondBatchWaveId: fifthLiveFreezeReview.proven?.secondBatchWaveId ?? null,
      fifthNoOpModuleId: fifthLiveFreezeReview.fifthNoOp?.moduleId ?? null,
      fifthNoOpWaveId: fifthLiveFreezeReview.fifthNoOp?.waveId ?? null,
    },
    fifthLiveContract: {
      moduleId: fifthLiveAdmissionPlan.candidate?.moduleId ?? null,
      waveId: fifthLiveContract.canary?.waveId ?? null,
      mode: fifthLiveContract.mode ?? null,
      resolverEnabled: fifthLiveContract.defaults?.resolverEnabled ?? null,
      laneToggleEnabled: fifthLiveContract.defaults?.laneToggles?.['deep-zone-browser'] ?? null,
      perModuleKillSwitchEnabled:
        fifthLiveContract.defaults?.perModuleKillSwitch?.['out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciMessageUtils.js'] === false,
      exportDeltaPassed: fifthExportDelta.passed === true,
      fallbackPreflightPassed: fifthFallbackPreflight.passed === true,
      stickyPreflightPassed: fifthStickyPreflight.passed === true,
    },
    blockedSurfaces: fifthLiveAdmissionPlan.blockedSurfaces ?? [],
    runnerUpLock: fifthLiveFreezeReview.runnerUpLock ?? {},
    failureClassification: {
      rollbackContractOnlyOn: [
        'live contract no longer pins DBR5L to ciMessageUtils.js in live-canary mode',
        'browser-fifth export/fallback/sticky preflight chain is incomplete or no longer all green',
      ],
      freezeBrowserLaneOn: [
        'browser fifth contract artifacts no longer uniquely lock the next step to browser-fifth-live-execution',
        'preflight evidence suggests browser lane fallback or sticky-disable semantics are no longer trustworthy with ciMessageUtils.js prepared for live',
        'quality-report or rollout stability regresses while preparing DBR5L live execution',
      ],
    },
    thirdBatchEligibilityGate: {
      discussionBlocked: true,
      currentProofState: 'four-live-plus-two-batches-plus-fifth-contract-ready',
      whyCurrentProofIsInsufficient: 'a ready fifth live contract plus green browser-fifth preflight still does not count as a proven fifth live execution, so third-batch discussion remains premature until DBR5L live execution is proven and frozen',
      requiredMilestonesBeforeDiscussion: [
        'DBR5L live execution proven',
        'post-DBR5L browser lane freeze review',
      ],
    },
    minimumWin: {
      definition: 'DBR5L live contract / export-delta / fallback / sticky-disable / freeze / next-step lock all verify green and nextApprovedAction uniquely locked to browser-fifth-live-execution',
      mustVerify: [
        'startup-module-resolution-review-changes-browser-fifth-live-contract-freeze-review-verify.json',
        'startup-module-resolution-review-changes-browser-fifth-live-contract-next-step-lock-verify.json',
      ],
    },
    scopeBoundary: {
      allowOnly: [
        'DBR5L live contract artifacts',
        'browser fifth export-delta artifacts',
        'browser fifth fallback preflight artifacts',
        'browser fifth sticky-disable preflight artifacts',
        'browser fifth live contract freeze artifacts',
        'browser fifth live contract next-step lock artifacts',
      ],
      mustNotTouch: [
        'browser live execution',
        'browser third batch',
        'browser component/widget/template',
        'reviewChanges main lane',
        'composer lane',
        'mechanical recovery chain',
      ],
    },
    followUpPriority: {
      next: 'browser-fifth-live-execution',
      afterThat: 'browser lane freeze review only after fifth live execution result is frozen',
    },
    decision: {
      laneFrozen: true,
      laneState: 'four-single-live-proven-first-and-second-batch-live-proven-fifth-live-contract-ready',
      nextApprovedStep: 'browser-fifth-live-contract-next-step-lock',
      fifthLiveContractReadyOnly: true,
      browserThirdBatchScopeExpansionStillBlocked: true,
      componentWidgetTemplateStillBlocked: true,
      browserHeavierUiSurfaceStillBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    blockedNow: [
      'browser third batch scope expansion',
      'browser component or widget live',
      'browser template-surface live',
      'browser heavier UI/view-zone live',
      'cross-lane expansion',
      'rename-driven work',
      'browser fifth live execution before explicit run step',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

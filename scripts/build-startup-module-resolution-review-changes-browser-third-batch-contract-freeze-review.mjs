#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const THIRD_BATCH_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-batch-freeze-review.json');
const THIRD_BATCH_CONTRACT_PLAN_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-batch-contract-plan.json');
const THIRD_BATCH_EXPORT_DELTA_PREFLIGHT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-batch-export-delta-preflight.json');
const THIRD_BATCH_FALLBACK_PREFLIGHT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-batch-fallback-preflight.json');
const THIRD_BATCH_STICKY_PREFLIGHT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-batch-sticky-disable-preflight.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-batch-contract-freeze-review.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const thirdBatchFreezeReview = readJson(THIRD_BATCH_FREEZE_REVIEW_PATH);
  const thirdBatchContractPlan = readJson(THIRD_BATCH_CONTRACT_PLAN_PATH);
  const thirdBatchExportDeltaPreflight = readJson(THIRD_BATCH_EXPORT_DELTA_PREFLIGHT_PATH);
  const thirdBatchFallbackPreflight = readJson(THIRD_BATCH_FALLBACK_PREFLIGHT_PATH);
  const thirdBatchStickyPreflight = readJson(THIRD_BATCH_STICKY_PREFLIGHT_PATH);
  const quality = readJson(QUALITY_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'browser-third-batch-contract-freeze-review',
    sources: {
      browserThirdBatchFreezeReview: normalizePath(path.relative(ROOT, THIRD_BATCH_FREEZE_REVIEW_PATH)),
      browserThirdBatchContractPlan: normalizePath(path.relative(ROOT, THIRD_BATCH_CONTRACT_PLAN_PATH)),
      browserThirdBatchExportDeltaPreflight: normalizePath(path.relative(ROOT, THIRD_BATCH_EXPORT_DELTA_PREFLIGHT_PATH)),
      browserThirdBatchFallbackPreflight: normalizePath(path.relative(ROOT, THIRD_BATCH_FALLBACK_PREFLIGHT_PATH)),
      browserThirdBatchStickyDisablePreflight: normalizePath(path.relative(ROOT, THIRD_BATCH_STICKY_PREFLIGHT_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    baseline: {
      laneState: thirdBatchFreezeReview.decision?.laneState ?? null,
      latestAcceptAt: thirdBatchFreezeReview.baseline?.latestAcceptAt ?? null,
      stableRuntimeStillGreen:
        quality.stability?.headlessVerifyPassed === true
        && quality.stability?.startupLoaderRuntimeGatePassed === true
        && quality.stability?.startupLoaderRolloutGatePassed === true,
    },
    proven: thirdBatchFreezeReview.proven ?? {},
    plannedBatch: thirdBatchFreezeReview.plannedBatch ?? {},
    batchContract: {
      batchWaveId: thirdBatchContractPlan.batchContractPlan?.batchWaveId ?? null,
      selectedModules: thirdBatchContractPlan.batchContractPlan?.selectedModules ?? [],
      selectedWaves: thirdBatchContractPlan.batchContractPlan?.selectedWaves ?? [],
      output: thirdBatchContractPlan.batchContractPlan?.output ?? null,
      runtimeCopy: thirdBatchContractPlan.batchContractPlan?.runtimeCopy ?? null,
      mode: thirdBatchContractPlan.batchContractPlan?.mode ?? null,
      enableResolver: thirdBatchContractPlan.batchContractPlan?.enableResolver ?? null,
      enableDedicatedLane: thirdBatchContractPlan.batchContractPlan?.enableDedicatedLane ?? null,
      planningOnly: thirdBatchContractPlan.batchContractPlan?.planningOnly ?? null,
      exportDeltaPassed: thirdBatchExportDeltaPreflight.passed === true,
      fallbackPreflightPassed: thirdBatchFallbackPreflight.passed === true,
      stickyDisablePreflightPassed: thirdBatchStickyPreflight.passed === true,
      expectedModuleCount: thirdBatchExportDeltaPreflight.expectedModuleCount ?? null,
      observedModuleCount: thirdBatchExportDeltaPreflight.observedModuleCount ?? null,
    },
    runnerUpLock: thirdBatchContractPlan.runnerUpLock ?? {},
    failureClassification: {
      rollbackContractOnlyOn: [
        'third-batch contract plan no longer pins DBRB3A to the approved five-module browser batch',
        'browser third-batch export/fallback/sticky preflight chain is incomplete or no longer all green',
      ],
      freezeBrowserLaneOn: [
        'browser third-batch contract artifacts no longer uniquely lock the next step to browser-third-batch-live-execution',
        'preflight evidence suggests browser third-batch fallback or sticky-disable semantics are no longer trustworthy',
        'quality-report or rollout stability regresses while preparing browser third-batch execution',
      ],
    },
    minimumWin: {
      definition: 'browser third-batch contract plan / export-delta / fallback / sticky-disable / freeze / next-step lock all verify green and nextApprovedAction uniquely locked to browser-third-batch-live-execution',
      mustVerify: [
        'startup-module-resolution-review-changes-browser-third-batch-contract-plan-verify.json',
        'startup-module-resolution-review-changes-browser-third-batch-export-delta-preflight.json',
        'startup-module-resolution-review-changes-browser-third-batch-fallback-preflight.json',
        'startup-module-resolution-review-changes-browser-third-batch-sticky-disable-preflight.json',
        'startup-module-resolution-review-changes-browser-third-batch-contract-freeze-review-verify.json',
        'startup-module-resolution-review-changes-browser-third-batch-contract-next-step-lock-verify.json',
      ],
    },
    scopeBoundary: {
      allowOnly: [
        'browser third-batch contract plan artifacts',
        'browser third-batch preflight artifacts',
        'browser third-batch contract freeze artifacts',
        'browser third-batch contract next-step lock artifacts',
      ],
      mustNotTouch: [
        'browser third-batch contract file generation',
        'browser third-batch wrapper patch',
        'browser third-batch live gate',
        'browser third-batch execution',
        'browser component/widget/template',
        'browser heavier UI/view-zone',
        'cross-lane expansion',
        'rename-driven work',
      ],
    },
    followUpPriority: {
      next: 'browser-third-batch-live-execution',
      afterThat: 'browser third-batch execution freeze review only after batch live outcome is frozen',
    },
    decision: {
      laneFrozen: true,
      laneState: 'five-single-live-proven-first-and-second-batch-live-proven-third-batch-contract-ready',
      nextApprovedStep: 'browser-third-batch-contract-next-step-lock',
      batchContractReadyOnly: true,
      browserThirdBatchLiveStillBlocked: true,
      browserComponentWidgetTemplateStillBlocked: true,
      browserHeavierUiSurfaceStillBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    blockedNow: [
      'browser third-batch live before explicit run step',
      'browser component/widget/template',
      'browser heavier UI/view-zone',
      'cross-lane expansion',
      'rename-driven work',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

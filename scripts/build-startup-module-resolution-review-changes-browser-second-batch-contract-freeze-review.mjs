#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const SECOND_BATCH_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-batch-freeze-review.json');
const SECOND_BATCH_CONTRACT_PLAN_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-batch-contract-plan.json');
const SECOND_BATCH_EXPORT_DELTA_PREFLIGHT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-batch-export-delta-preflight.json');
const SECOND_BATCH_FALLBACK_PREFLIGHT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-batch-fallback-preflight.json');
const SECOND_BATCH_STICKY_PREFLIGHT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-batch-sticky-disable-preflight.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-batch-contract-freeze-review.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const secondBatchFreezeReview = readJson(SECOND_BATCH_FREEZE_REVIEW_PATH);
  const secondBatchContractPlan = readJson(SECOND_BATCH_CONTRACT_PLAN_PATH);
  const secondBatchExportDeltaPreflight = readJson(SECOND_BATCH_EXPORT_DELTA_PREFLIGHT_PATH);
  const secondBatchFallbackPreflight = readJson(SECOND_BATCH_FALLBACK_PREFLIGHT_PATH);
  const secondBatchStickyPreflight = readJson(SECOND_BATCH_STICKY_PREFLIGHT_PATH);
  const quality = readJson(QUALITY_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'browser-second-batch-contract-freeze-review',
    sources: {
      browserSecondBatchFreezeReview: normalizePath(path.relative(ROOT, SECOND_BATCH_FREEZE_REVIEW_PATH)),
      browserSecondBatchContractPlan: normalizePath(path.relative(ROOT, SECOND_BATCH_CONTRACT_PLAN_PATH)),
      browserSecondBatchExportDeltaPreflight: normalizePath(path.relative(ROOT, SECOND_BATCH_EXPORT_DELTA_PREFLIGHT_PATH)),
      browserSecondBatchFallbackPreflight: normalizePath(path.relative(ROOT, SECOND_BATCH_FALLBACK_PREFLIGHT_PATH)),
      browserSecondBatchStickyDisablePreflight: normalizePath(path.relative(ROOT, SECOND_BATCH_STICKY_PREFLIGHT_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    baseline: {
      laneState: secondBatchFreezeReview.decision?.laneState ?? null,
      latestAcceptAt: secondBatchFreezeReview.baseline?.latestAcceptAt ?? null,
      stableRuntimeStillGreen:
        quality.stability?.headlessVerifyPassed === true
        && quality.stability?.startupLoaderRuntimeGatePassed === true
        && quality.stability?.startupLoaderRolloutGatePassed === true,
    },
    proven: secondBatchFreezeReview.proven ?? {},
    plannedBatch: secondBatchFreezeReview.plannedBatch ?? {},
    batchContract: {
      batchWaveId: secondBatchContractPlan.batchContractPlan?.batchWaveId ?? null,
      selectedModules: secondBatchContractPlan.batchContractPlan?.selectedModules ?? [],
      selectedWaves: secondBatchContractPlan.batchContractPlan?.selectedWaves ?? [],
      output: secondBatchContractPlan.batchContractPlan?.output ?? null,
      runtimeCopy: secondBatchContractPlan.batchContractPlan?.runtimeCopy ?? null,
      mode: secondBatchContractPlan.batchContractPlan?.mode ?? null,
      enableResolver: secondBatchContractPlan.batchContractPlan?.enableResolver ?? null,
      enableDedicatedLane: secondBatchContractPlan.batchContractPlan?.enableDedicatedLane ?? null,
      planningOnly: secondBatchContractPlan.batchContractPlan?.planningOnly ?? null,
      exportDeltaPassed: secondBatchExportDeltaPreflight.passed === true,
      fallbackPreflightPassed: secondBatchFallbackPreflight.passed === true,
      stickyDisablePreflightPassed: secondBatchStickyPreflight.passed === true,
      expectedModuleCount: secondBatchExportDeltaPreflight.expectedModuleCount ?? null,
      observedModuleCount: secondBatchExportDeltaPreflight.observedModuleCount ?? null,
    },
    runnerUpLock: secondBatchContractPlan.runnerUpLock ?? {},
    failureClassification: {
      rollbackContractOnlyOn: [
        'second-batch contract plan no longer pins DBRB2A to the approved four-module browser batch',
        'browser second-batch export/fallback/sticky preflight chain is incomplete or no longer all green',
      ],
      freezeBrowserLaneOn: [
        'browser second-batch contract artifacts no longer uniquely lock the next step to browser-second-batch-live-execution',
        'preflight evidence suggests browser second-batch fallback or sticky-disable semantics are no longer trustworthy',
        'quality-report or rollout stability regresses while preparing browser second-batch execution',
      ],
    },
    minimumWin: {
      definition: 'browser second-batch contract plan / export-delta / fallback / sticky-disable / freeze / next-step lock all verify green and nextApprovedAction uniquely locked to browser-second-batch-live-execution',
      mustVerify: [
        'startup-module-resolution-review-changes-browser-second-batch-contract-plan-verify.json',
        'startup-module-resolution-review-changes-browser-second-batch-export-delta-preflight.json',
        'startup-module-resolution-review-changes-browser-second-batch-fallback-preflight.json',
        'startup-module-resolution-review-changes-browser-second-batch-sticky-disable-preflight.json',
        'startup-module-resolution-review-changes-browser-second-batch-contract-freeze-review-verify.json',
        'startup-module-resolution-review-changes-browser-second-batch-contract-next-step-lock-verify.json',
      ],
    },
    scopeBoundary: {
      allowOnly: [
        'browser second-batch contract plan artifacts',
        'browser second-batch preflight artifacts',
        'browser second-batch contract freeze artifacts',
        'browser second-batch contract next-step lock artifacts',
      ],
      mustNotTouch: [
        'browser second-batch contract file generation',
        'browser second-batch wrapper patch',
        'browser second-batch live gate',
        'browser second-batch execution',
        'browser fifth candidate admission',
        'component/widget/template',
        'cross-lane expansion',
        'rename-driven work',
      ],
    },
    followUpPriority: {
      next: 'browser-second-batch-live-execution',
      afterThat: 'browser second-batch execution freeze review only after batch live outcome is frozen',
    },
    decision: {
      laneFrozen: true,
      laneState: 'four-single-live-proven-first-batch-live-proven-second-batch-contract-ready',
      nextApprovedStep: 'browser-second-batch-contract-next-step-lock',
      batchContractReadyOnly: true,
      browserSecondBatchLiveStillBlocked: true,
      browserComponentWidgetTemplateStillBlocked: true,
      browserFifthCandidateAdmissionStillBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    blockedNow: [
      'browser second-batch live before explicit run step',
      'browser component/widget/template',
      'browser fifth candidate admission',
      'cross-lane expansion',
      'rename-driven work',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

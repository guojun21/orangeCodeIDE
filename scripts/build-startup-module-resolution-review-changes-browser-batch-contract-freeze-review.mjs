#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const BATCH_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-batch-freeze-review.json');
const BATCH_CONTRACT_PLAN_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-batch-contract-plan.json');
const BATCH_EXPORT_DELTA_PREFLIGHT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-batch-export-delta-preflight.json');
const BATCH_FALLBACK_PREFLIGHT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-batch-fallback-preflight.json');
const BATCH_STICKY_PREFLIGHT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-batch-sticky-disable-preflight.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-batch-contract-freeze-review.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const batchFreezeReview = readJson(BATCH_FREEZE_REVIEW_PATH);
  const batchContractPlan = readJson(BATCH_CONTRACT_PLAN_PATH);
  const batchExportDeltaPreflight = readJson(BATCH_EXPORT_DELTA_PREFLIGHT_PATH);
  const batchFallbackPreflight = readJson(BATCH_FALLBACK_PREFLIGHT_PATH);
  const batchStickyPreflight = readJson(BATCH_STICKY_PREFLIGHT_PATH);
  const quality = readJson(QUALITY_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'browser-batch-contract-freeze-review',
    sources: {
      browserBatchFreezeReview: normalizePath(path.relative(ROOT, BATCH_FREEZE_REVIEW_PATH)),
      browserBatchContractPlan: normalizePath(path.relative(ROOT, BATCH_CONTRACT_PLAN_PATH)),
      browserBatchExportDeltaPreflight: normalizePath(path.relative(ROOT, BATCH_EXPORT_DELTA_PREFLIGHT_PATH)),
      browserBatchFallbackPreflight: normalizePath(path.relative(ROOT, BATCH_FALLBACK_PREFLIGHT_PATH)),
      browserBatchStickyDisablePreflight: normalizePath(path.relative(ROOT, BATCH_STICKY_PREFLIGHT_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    baseline: {
      laneState: batchFreezeReview.decision?.laneState ?? null,
      latestAcceptAt: batchFreezeReview.baseline?.latestAcceptAt ?? null,
      stableRuntimeStillGreen:
        quality.stability?.headlessVerifyPassed === true
        && quality.stability?.startupLoaderRuntimeGatePassed === true
        && quality.stability?.startupLoaderRolloutGatePassed === true,
    },
    proven: batchFreezeReview.proven ?? {},
    plannedBatch: batchFreezeReview.plannedBatch ?? {},
    batchContract: {
      batchWaveId: batchContractPlan.batchContractPlan?.batchWaveId ?? null,
      selectedModules: batchContractPlan.batchContractPlan?.selectedModules ?? [],
      selectedWaves: batchContractPlan.batchContractPlan?.selectedWaves ?? [],
      output: batchContractPlan.batchContractPlan?.output ?? null,
      runtimeCopy: batchContractPlan.batchContractPlan?.runtimeCopy ?? null,
      mode: batchContractPlan.batchContractPlan?.mode ?? null,
      enableResolver: batchContractPlan.batchContractPlan?.enableResolver ?? null,
      enableDedicatedLane: batchContractPlan.batchContractPlan?.enableDedicatedLane ?? null,
      planningOnly: batchContractPlan.batchContractPlan?.planningOnly ?? null,
      exportDeltaPassed: batchExportDeltaPreflight.passed === true,
      fallbackPreflightPassed: batchFallbackPreflight.passed === true,
      stickyDisablePreflightPassed: batchStickyPreflight.passed === true,
      expectedModuleCount: batchExportDeltaPreflight.expectedModuleCount ?? null,
      observedModuleCount: batchExportDeltaPreflight.observedModuleCount ?? null,
    },
    runnerUpLock: batchContractPlan.runnerUpLock ?? {},
    failureClassification: {
      rollbackContractOnlyOn: [
        'batch contract plan no longer pins DBRB1A to the approved three-module browser batch',
        'browser batch export/fallback/sticky preflight chain is incomplete or no longer all green',
      ],
      freezeBrowserLaneOn: [
        'browser batch contract artifacts no longer uniquely lock the next step to browser-batch-live-execution',
        'preflight evidence suggests browser batch fallback or sticky-disable semantics are no longer trustworthy',
        'quality-report or rollout stability regresses while preparing browser batch execution',
      ],
    },
    minimumWin: {
      definition: 'browser batch contract plan / export-delta / fallback / sticky-disable / freeze / next-step lock all verify green and nextApprovedAction uniquely locked to browser-batch-live-execution',
      mustVerify: [
        'startup-module-resolution-review-changes-browser-batch-contract-plan-verify.json',
        'startup-module-resolution-review-changes-browser-batch-export-delta-preflight.json',
        'startup-module-resolution-review-changes-browser-batch-fallback-preflight.json',
        'startup-module-resolution-review-changes-browser-batch-sticky-disable-preflight.json',
        'startup-module-resolution-review-changes-browser-batch-contract-freeze-review-verify.json',
        'startup-module-resolution-review-changes-browser-batch-contract-next-step-lock-verify.json',
      ],
    },
    scopeBoundary: {
      allowOnly: [
        'browser batch contract plan artifacts',
        'browser batch preflight artifacts',
        'browser batch contract freeze artifacts',
        'browser batch contract next-step lock artifacts',
      ],
      mustNotTouch: [
        'browser batch contract file generation',
        'browser batch wrapper patch',
        'browser batch live gate',
        'browser batch execution',
        'browser fourth candidate admission',
        'component/widget/template',
        'cross-lane expansion',
        'rename-driven work',
      ],
    },
    followUpPriority: {
      next: 'browser-batch-live-execution',
      afterThat: 'browser batch execution freeze review only after batch live outcome is frozen',
    },
    decision: {
      laneFrozen: true,
      laneState: 'three-single-live-proven-batch-contract-ready',
      nextApprovedStep: 'browser-batch-contract-next-step-lock',
      batchContractReadyOnly: true,
      browserBatchLiveStillBlocked: true,
      browserComponentWidgetTemplateStillBlocked: true,
      browserFourthCandidateAdmissionStillBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    blockedNow: [
      'browser batch live before explicit run step',
      'browser component/widget/template',
      'browser fourth candidate admission',
      'cross-lane expansion',
      'rename-driven work',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

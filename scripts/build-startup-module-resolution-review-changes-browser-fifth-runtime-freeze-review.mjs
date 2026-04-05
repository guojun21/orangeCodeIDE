#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const SECOND_BATCH_LIVE_EXECUTION_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-batch-live-execution-freeze-review.json');
const FIFTH_ADMISSION_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fifth-admission.json');
const FIFTH_RUNTIME_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-browser-fifth-module-resolution-runtime-gate.json');
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fifth-runtime-freeze-review.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const secondBatchLiveExecutionFreezeReview = readJson(SECOND_BATCH_LIVE_EXECUTION_FREEZE_REVIEW_PATH);
  const fifthAdmission = readJson(FIFTH_ADMISSION_PATH);
  const fifthRuntimeGate = readJson(FIFTH_RUNTIME_GATE_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);

  const runtimeResult = fifthRuntimeGate.runtimeState?.resolution?.results?.[0]?.result ?? null;
  const diagnostics = fifthRuntimeGate.runtimeState?.resolution?.diagnostics ?? null;

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'fifth-runtime-freeze-review',
    sources: {
      secondBatchLiveExecutionFreezeReview: normalizePath(path.relative(ROOT, SECOND_BATCH_LIVE_EXECUTION_FREEZE_REVIEW_PATH)),
      fifthAdmission: normalizePath(path.relative(ROOT, FIFTH_ADMISSION_PATH)),
      fifthRuntimeGate: normalizePath(path.relative(ROOT, FIFTH_RUNTIME_GATE_PATH)),
      accept: normalizePath(path.relative(ROOT, ACCEPT_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    baseline: {
      latestAcceptAt: accept.generatedAt ?? null,
      stableRuntimeStillGreen:
        quality.stability?.headlessVerifyPassed === true
        && quality.stability?.acceptRecorded === true
        && quality.stability?.startupLoaderRuntimeGatePassed === true
        && quality.stability?.startupLoaderRolloutGatePassed === true,
    },
    proven: {
      firstSingleLiveModuleId: secondBatchLiveExecutionFreezeReview.proven?.firstSingleLiveModuleId ?? null,
      firstSingleLiveWaveId: secondBatchLiveExecutionFreezeReview.proven?.firstSingleLiveWaveId ?? null,
      secondSingleLiveModuleId: secondBatchLiveExecutionFreezeReview.proven?.secondSingleLiveModuleId ?? null,
      secondSingleLiveWaveId: secondBatchLiveExecutionFreezeReview.proven?.secondSingleLiveWaveId ?? null,
      thirdSingleLiveModuleId: secondBatchLiveExecutionFreezeReview.proven?.thirdSingleLiveModuleId ?? null,
      thirdSingleLiveWaveId: secondBatchLiveExecutionFreezeReview.proven?.thirdSingleLiveWaveId ?? null,
      fourthSingleLiveModuleId: secondBatchLiveExecutionFreezeReview.proven?.fourthSingleLiveModuleId ?? null,
      fourthSingleLiveWaveId: secondBatchLiveExecutionFreezeReview.proven?.fourthSingleLiveWaveId ?? null,
      firstBatchWaveId: secondBatchLiveExecutionFreezeReview.proven?.firstBatchWaveId ?? null,
      secondBatchWaveId: secondBatchLiveExecutionFreezeReview.proven?.secondBatchWaveId ?? null,
      approvedSecondBatch: secondBatchLiveExecutionFreezeReview.proven?.approvedSecondBatch ?? [],
    },
    fifthNoOp: {
      moduleId: fifthAdmission.approvedCandidate?.moduleId ?? null,
      waveId: fifthRuntimeGate.expectedWaveId ?? fifthAdmission.approvedCandidate?.waveId ?? null,
      mode: fifthRuntimeGate.runtimeState?.resolution?.mode ?? null,
      canaryCount: fifthRuntimeGate.runtimeState?.resolution?.canaryCount ?? null,
      result: runtimeResult?.result ?? null,
      fallbackReason: runtimeResult?.fallbackReason ?? null,
      originalPassCount: diagnostics?.counters?.originalPassCount ?? null,
      overlayHitCount: diagnostics?.counters?.overlayHitCount ?? null,
      stickyDisabledCount: diagnostics?.counters?.stickyDisabledCount ?? null,
    },
    decision: {
      laneFrozen: true,
      laneState: 'four-single-live-proven-first-and-second-batch-live-proven-fifth-no-op-proven',
      nextApprovedStep: 'browser-fifth-runtime-next-step-lock',
      fifthNoOpProvenOnly: true,
      fifthLiveStillBlocked: true,
      browserThirdBatchScopeExpansionStillBlocked: true,
      componentWidgetTemplateStillBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    blockedNow: [
      'browser third batch scope expansion',
      'browser component or widget live',
      'browser template-surface live',
      'cross-lane expansion',
      'rename-driven work',
      'browser fifth live execution without admission',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

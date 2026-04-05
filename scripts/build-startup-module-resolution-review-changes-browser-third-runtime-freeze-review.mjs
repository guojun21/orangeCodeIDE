#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const SECOND_LIVE_EXECUTION_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-live-execution-freeze-review.json');
const THIRD_ADMISSION_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-admission.json');
const THIRD_RUNTIME_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-browser-third-module-resolution-runtime-gate.json');
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-runtime-freeze-review.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const secondLiveExecutionFreezeReview = readJson(SECOND_LIVE_EXECUTION_FREEZE_REVIEW_PATH);
  const thirdAdmission = readJson(THIRD_ADMISSION_PATH);
  const thirdRuntimeGate = readJson(THIRD_RUNTIME_GATE_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);

  const runtimeResult = thirdRuntimeGate.runtimeState?.resolution?.results?.[0]?.result ?? null;
  const diagnostics = thirdRuntimeGate.runtimeState?.resolution?.diagnostics ?? null;

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'third-runtime-freeze-review',
    sources: {
      secondLiveExecutionFreezeReview: normalizePath(path.relative(ROOT, SECOND_LIVE_EXECUTION_FREEZE_REVIEW_PATH)),
      thirdAdmission: normalizePath(path.relative(ROOT, THIRD_ADMISSION_PATH)),
      thirdRuntimeGate: normalizePath(path.relative(ROOT, THIRD_RUNTIME_GATE_PATH)),
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
      firstSingleLiveModuleId: secondLiveExecutionFreezeReview.proven?.firstSingleLiveModuleId ?? null,
      firstSingleLiveWaveId: secondLiveExecutionFreezeReview.proven?.firstSingleLiveWaveId ?? null,
      secondSingleLiveModuleId: secondLiveExecutionFreezeReview.proven?.secondSingleLiveModuleId ?? null,
      secondSingleLiveWaveId: secondLiveExecutionFreezeReview.proven?.secondSingleLiveWaveId ?? null,
    },
    thirdNoOp: {
      moduleId: thirdAdmission.approvedCandidate?.moduleId ?? null,
      waveId: thirdRuntimeGate.expectedWaveId ?? thirdAdmission.approvedCandidate?.waveId ?? null,
      mode: thirdRuntimeGate.runtimeState?.resolution?.mode ?? null,
      canaryCount: thirdRuntimeGate.runtimeState?.resolution?.canaryCount ?? null,
      result: runtimeResult?.result ?? null,
      fallbackReason: runtimeResult?.fallbackReason ?? null,
      originalPassCount: diagnostics?.counters?.originalPassCount ?? null,
      overlayHitCount: diagnostics?.counters?.overlayHitCount ?? null,
      stickyDisabledCount: diagnostics?.counters?.stickyDisabledCount ?? null,
    },
    decision: {
      laneFrozen: true,
      laneState: 'two-single-live-proven-third-no-op-proven-still-no-batch',
      nextApprovedStep: 'browser-third-runtime-next-step-lock',
      thirdNoOpProvenOnly: true,
      thirdLiveStillBlocked: true,
      browserMultiModuleBatchStillBlocked: true,
      componentWidgetTemplateStillBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    blockedNow: [
      'browser multi-module batch live',
      'browser component or widget live',
      'browser template-surface live',
      'cross-lane expansion',
      'rename-driven work',
      'browser third live execution without admission',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

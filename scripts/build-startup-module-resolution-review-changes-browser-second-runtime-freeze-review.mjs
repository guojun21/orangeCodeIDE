#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const BROWSER_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-freeze-review.json');
const SECOND_ADMISSION_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-admission.json');
const SECOND_RUNTIME_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-browser-second-module-resolution-runtime-gate.json');
const EXPORT_DELTA_GATE_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-export-delta-gate.json');
const FALLBACK_GATE_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fallback-gate.json');
const STICKY_DISABLE_AUDIT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-sticky-disable-audit.json');
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-runtime-freeze-review.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const firstFreezeReview = readJson(BROWSER_FREEZE_REVIEW_PATH);
  const secondAdmission = readJson(SECOND_ADMISSION_PATH);
  const secondRuntimeGate = readJson(SECOND_RUNTIME_GATE_PATH);
  const exportDeltaGate = readJson(EXPORT_DELTA_GATE_PATH);
  const fallbackGate = readJson(FALLBACK_GATE_PATH);
  const stickyDisableAudit = readJson(STICKY_DISABLE_AUDIT_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);

  const runtimeResult = secondRuntimeGate.runtimeState?.resolution?.results?.[0]?.result ?? null;
  const diagnostics = secondRuntimeGate.runtimeState?.resolution?.diagnostics ?? null;

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'second-runtime-freeze-review',
    sources: {
      provenSingleLiveFreezeReview: normalizePath(path.relative(ROOT, BROWSER_FREEZE_REVIEW_PATH)),
      secondAdmission: normalizePath(path.relative(ROOT, SECOND_ADMISSION_PATH)),
      secondRuntimeGate: normalizePath(path.relative(ROOT, SECOND_RUNTIME_GATE_PATH)),
      exportDeltaBaseline: normalizePath(path.relative(ROOT, EXPORT_DELTA_GATE_PATH)),
      fallbackBaseline: normalizePath(path.relative(ROOT, FALLBACK_GATE_PATH)),
      stickyDisableBaseline: normalizePath(path.relative(ROOT, STICKY_DISABLE_AUDIT_PATH)),
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
      browserSpecificGateBaselinesStillGreen:
        exportDeltaGate.passed === true
        && fallbackGate.passed === true
        && stickyDisableAudit.passed === true,
    },
    proven: {
      moduleId: firstFreezeReview.proven?.moduleId ?? null,
      waveId: firstFreezeReview.proven?.waveId ?? null,
      overlayProbeIds: firstFreezeReview.proven?.overlayProbeIds ?? [],
      factoryHitIds: firstFreezeReview.proven?.factoryHitIds ?? [],
      diagnostics: firstFreezeReview.proven?.diagnostics ?? null,
    },
    secondNoOp: {
      moduleId: secondAdmission.approvedCandidate?.moduleId ?? null,
      waveId: secondRuntimeGate.expectedWaveId ?? secondAdmission.approvedCandidate?.waveId ?? null,
      mode: secondRuntimeGate.runtimeState?.resolution?.mode ?? null,
      canaryCount: secondRuntimeGate.runtimeState?.resolution?.canaryCount ?? null,
      result: runtimeResult?.result ?? null,
      fallbackReason: runtimeResult?.fallbackReason ?? null,
      originalPassCount: diagnostics?.counters?.originalPassCount ?? null,
      overlayHitCount: diagnostics?.counters?.overlayHitCount ?? null,
      stickyDisabledCount: diagnostics?.counters?.stickyDisabledCount ?? null,
    },
    decision: {
      laneFrozen: true,
      laneState: 'single-live-proven-second-no-op-proven-still-no-batch',
      nextApprovedStep: 'browser-second-runtime-next-step-lock',
      secondNoOpProvenOnly: true,
      secondLiveStillBlocked: true,
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
      'browser second live execution without admission',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

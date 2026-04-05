#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const ELEVENTH_LIVE_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fifteenth-live-freeze-review.json');
const ELEVENTH_LIVE_ADMISSION_PLAN_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fifteenth-live-admission-plan.json');
const ELEVENTH_LIVE_CONTRACT_PATH = path.join(ROOT, 'mapped', 'contrib-composer-fifteenth-module-resolution-live-contract.json');
const ELEVENTH_EXPORT_DELTA_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fifteenth-export-delta-gate.json');
const ELEVENTH_FALLBACK_PREFLIGHT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fifteenth-fallback-preflight.json');
const ELEVENTH_STICKY_PREFLIGHT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fifteenth-sticky-disable-preflight.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fifteenth-live-contract-freeze-review.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const fifteenthLiveFreezeReview = readJson(ELEVENTH_LIVE_FREEZE_REVIEW_PATH);
  const fifteenthLiveAdmissionPlan = readJson(ELEVENTH_LIVE_ADMISSION_PLAN_PATH);
  const fifteenthLiveContract = readJson(ELEVENTH_LIVE_CONTRACT_PATH);
  const fifteenthExportDelta = readJson(ELEVENTH_EXPORT_DELTA_PATH);
  const fifteenthFallbackPreflight = readJson(ELEVENTH_FALLBACK_PREFLIGHT_PATH);
  const fifteenthStickyPreflight = readJson(ELEVENTH_STICKY_PREFLIGHT_PATH);
  const quality = readJson(QUALITY_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-composer',
    phase: 'fifteenth-live-contract-freeze-review',
    sources: {
      fifteenthLiveFreezeReview: normalizePath(path.relative(ROOT, ELEVENTH_LIVE_FREEZE_REVIEW_PATH)),
      fifteenthLiveAdmissionPlan: normalizePath(path.relative(ROOT, ELEVENTH_LIVE_ADMISSION_PLAN_PATH)),
      fifteenthLiveContract: normalizePath(path.relative(ROOT, ELEVENTH_LIVE_CONTRACT_PATH)),
      fifteenthExportDeltaGate: normalizePath(path.relative(ROOT, ELEVENTH_EXPORT_DELTA_PATH)),
      fifteenthFallbackPreflight: normalizePath(path.relative(ROOT, ELEVENTH_FALLBACK_PREFLIGHT_PATH)),
      fifteenthStickyPreflight: normalizePath(path.relative(ROOT, ELEVENTH_STICKY_PREFLIGHT_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    baseline: {
      laneState: fifteenthLiveFreezeReview.decision?.laneState ?? null,
      stableRuntimeStillGreen:
        quality.stability?.headlessVerifyPassed === true
        && quality.stability?.startupLoaderRuntimeGatePassed === true
        && quality.stability?.startupLoaderRolloutGatePassed === true,
    },
    proven: {
      firstMicroBatchWaveId: fifteenthLiveFreezeReview.proven?.firstMicroBatchWaveId ?? null,
      fifteenthNoOpModuleId: fifteenthLiveFreezeReview.fifteenthNoOp?.moduleId ?? null,
      fifteenthNoOpWaveId: fifteenthLiveFreezeReview.fifteenthNoOp?.waveId ?? null,
    },
    fifteenthLiveContract: {
      moduleId: fifteenthLiveAdmissionPlan.candidate?.moduleId ?? null,
      waveId: fifteenthLiveContract.canary?.waveId ?? null,
      mode: fifteenthLiveContract.mode ?? null,
      resolverEnabled: fifteenthLiveContract.defaults?.resolverEnabled ?? null,
      laneToggleEnabled: fifteenthLiveContract.defaults?.laneToggles?.['deep-zone-composer'] ?? null,
      perModuleKillSwitchEnabled:
        fifteenthLiveContract.defaults?.perModuleKillSwitch?.['out-build/vs/workbench/contrib/composer/browser/bubbleComposerDataHandle.js'] === false,
      exportDeltaPassed: fifteenthExportDelta.passed === true,
      fallbackPreflightPassed: fifteenthFallbackPreflight.passed === true,
      stickyPreflightPassed: fifteenthStickyPreflight.passed === true,
    },
    decision: {
      laneFrozen: true,
      laneState: 'contrib-composer-eleven-single-live-one-micro-batch-fifteenth-live-contract-ready',
      nextApprovedStep: 'composer-fifteenth-live-contract-next-step-lock',
      fifteenthLiveContractReadyOnly: true,
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
      'composer fifteenth live execution before explicit run step',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

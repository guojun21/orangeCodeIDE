#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const ELEVENTH_LIVE_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-nineteenth-live-freeze-review.json');
const ELEVENTH_LIVE_ADMISSION_PLAN_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-nineteenth-live-admission-plan.json');
const ELEVENTH_LIVE_CONTRACT_PATH = path.join(ROOT, 'mapped', 'contrib-composer-nineteenth-module-resolution-live-contract.json');
const ELEVENTH_EXPORT_DELTA_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-nineteenth-export-delta-gate.json');
const ELEVENTH_FALLBACK_PREFLIGHT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-nineteenth-fallback-preflight.json');
const ELEVENTH_STICKY_PREFLIGHT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-nineteenth-sticky-disable-preflight.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-nineteenth-live-contract-freeze-review.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const nineteenthLiveFreezeReview = readJson(ELEVENTH_LIVE_FREEZE_REVIEW_PATH);
  const nineteenthLiveAdmissionPlan = readJson(ELEVENTH_LIVE_ADMISSION_PLAN_PATH);
  const nineteenthLiveContract = readJson(ELEVENTH_LIVE_CONTRACT_PATH);
  const nineteenthExportDelta = readJson(ELEVENTH_EXPORT_DELTA_PATH);
  const nineteenthFallbackPreflight = readJson(ELEVENTH_FALLBACK_PREFLIGHT_PATH);
  const nineteenthStickyPreflight = readJson(ELEVENTH_STICKY_PREFLIGHT_PATH);
  const quality = readJson(QUALITY_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-composer',
    phase: 'nineteenth-live-contract-freeze-review',
    sources: {
      nineteenthLiveFreezeReview: normalizePath(path.relative(ROOT, ELEVENTH_LIVE_FREEZE_REVIEW_PATH)),
      nineteenthLiveAdmissionPlan: normalizePath(path.relative(ROOT, ELEVENTH_LIVE_ADMISSION_PLAN_PATH)),
      nineteenthLiveContract: normalizePath(path.relative(ROOT, ELEVENTH_LIVE_CONTRACT_PATH)),
      nineteenthExportDeltaGate: normalizePath(path.relative(ROOT, ELEVENTH_EXPORT_DELTA_PATH)),
      nineteenthFallbackPreflight: normalizePath(path.relative(ROOT, ELEVENTH_FALLBACK_PREFLIGHT_PATH)),
      nineteenthStickyPreflight: normalizePath(path.relative(ROOT, ELEVENTH_STICKY_PREFLIGHT_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    baseline: {
      laneState: nineteenthLiveFreezeReview.decision?.laneState ?? null,
      stableRuntimeStillGreen:
        quality.stability?.headlessVerifyPassed === true
        && quality.stability?.startupLoaderRuntimeGatePassed === true
        && quality.stability?.startupLoaderRolloutGatePassed === true,
    },
    proven: {
      firstMicroBatchWaveId: nineteenthLiveFreezeReview.proven?.firstMicroBatchWaveId ?? null,
      nineteenthNoOpModuleId: nineteenthLiveFreezeReview.nineteenthNoOp?.moduleId ?? null,
      nineteenthNoOpWaveId: nineteenthLiveFreezeReview.nineteenthNoOp?.waveId ?? null,
    },
    nineteenthLiveContract: {
      moduleId: nineteenthLiveAdmissionPlan.candidate?.moduleId ?? null,
      waveId: nineteenthLiveContract.canary?.waveId ?? null,
      mode: nineteenthLiveContract.mode ?? null,
      resolverEnabled: nineteenthLiveContract.defaults?.resolverEnabled ?? null,
      laneToggleEnabled: nineteenthLiveContract.defaults?.laneToggles?.['deep-zone-composer'] ?? null,
      perModuleKillSwitchEnabled:
        nineteenthLiveContract.defaults?.perModuleKillSwitch?.['out-build/vs/workbench/contrib/composer/browser/asyncOperationRegistry.js'] === false,
      exportDeltaPassed: nineteenthExportDelta.passed === true,
      fallbackPreflightPassed: nineteenthFallbackPreflight.passed === true,
      stickyPreflightPassed: nineteenthStickyPreflight.passed === true,
    },
    decision: {
      laneFrozen: true,
      laneState: 'contrib-composer-eleven-single-live-one-micro-batch-nineteenth-live-contract-ready',
      nextApprovedStep: 'composer-nineteenth-live-contract-next-step-lock',
      nineteenthLiveContractReadyOnly: true,
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
      'composer nineteenth live execution before explicit run step',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

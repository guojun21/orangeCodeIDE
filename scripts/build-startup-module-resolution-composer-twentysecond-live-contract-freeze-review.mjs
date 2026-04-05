#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const ELEVENTH_LIVE_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-twentysecond-live-freeze-review.json');
const ELEVENTH_LIVE_ADMISSION_PLAN_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-twentysecond-live-admission-plan.json');
const ELEVENTH_LIVE_CONTRACT_PATH = path.join(ROOT, 'mapped', 'contrib-composer-twentysecond-module-resolution-live-contract.json');
const ELEVENTH_EXPORT_DELTA_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-twentysecond-export-delta-gate.json');
const ELEVENTH_FALLBACK_PREFLIGHT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-twentysecond-fallback-preflight.json');
const ELEVENTH_STICKY_PREFLIGHT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-twentysecond-sticky-disable-preflight.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-twentysecond-live-contract-freeze-review.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const twentyfirstLiveFreezeReview = readJson(ELEVENTH_LIVE_FREEZE_REVIEW_PATH);
  const twentyfirstLiveAdmissionPlan = readJson(ELEVENTH_LIVE_ADMISSION_PLAN_PATH);
  const twentyfirstLiveContract = readJson(ELEVENTH_LIVE_CONTRACT_PATH);
  const twentyfirstExportDelta = readJson(ELEVENTH_EXPORT_DELTA_PATH);
  const twentyfirstFallbackPreflight = readJson(ELEVENTH_FALLBACK_PREFLIGHT_PATH);
  const twentyfirstStickyPreflight = readJson(ELEVENTH_STICKY_PREFLIGHT_PATH);
  const quality = readJson(QUALITY_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-composer',
    phase: 'twentyfirst-live-contract-freeze-review',
    sources: {
      twentyfirstLiveFreezeReview: normalizePath(path.relative(ROOT, ELEVENTH_LIVE_FREEZE_REVIEW_PATH)),
      twentyfirstLiveAdmissionPlan: normalizePath(path.relative(ROOT, ELEVENTH_LIVE_ADMISSION_PLAN_PATH)),
      twentyfirstLiveContract: normalizePath(path.relative(ROOT, ELEVENTH_LIVE_CONTRACT_PATH)),
      twentyfirstExportDeltaGate: normalizePath(path.relative(ROOT, ELEVENTH_EXPORT_DELTA_PATH)),
      twentyfirstFallbackPreflight: normalizePath(path.relative(ROOT, ELEVENTH_FALLBACK_PREFLIGHT_PATH)),
      twentyfirstStickyPreflight: normalizePath(path.relative(ROOT, ELEVENTH_STICKY_PREFLIGHT_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    baseline: {
      laneState: twentyfirstLiveFreezeReview.decision?.laneState ?? null,
      stableRuntimeStillGreen:
        quality.stability?.headlessVerifyPassed === true
        && quality.stability?.startupLoaderRuntimeGatePassed === true
        && quality.stability?.startupLoaderRolloutGatePassed === true,
    },
    proven: {
      firstMicroBatchWaveId: twentyfirstLiveFreezeReview.proven?.firstMicroBatchWaveId ?? null,
      twentyfirstNoOpModuleId: twentyfirstLiveFreezeReview.twentyfirstNoOp?.moduleId ?? null,
      twentyfirstNoOpWaveId: twentyfirstLiveFreezeReview.twentyfirstNoOp?.waveId ?? null,
    },
    twentyfirstLiveContract: {
      moduleId: twentyfirstLiveAdmissionPlan.candidate?.moduleId ?? null,
      waveId: twentyfirstLiveContract.canary?.waveId ?? null,
      mode: twentyfirstLiveContract.mode ?? null,
      resolverEnabled: twentyfirstLiveContract.defaults?.resolverEnabled ?? null,
      laneToggleEnabled: twentyfirstLiveContract.defaults?.laneToggles?.['deep-zone-composer'] ?? null,
      perModuleKillSwitchEnabled:
        twentyfirstLiveContract.defaults?.perModuleKillSwitch?.['out-build/vs/workbench/contrib/composer/browser/browserScreenshotService.js'] === false,
      exportDeltaPassed: twentyfirstExportDelta.passed === true,
      fallbackPreflightPassed: twentyfirstFallbackPreflight.passed === true,
      stickyPreflightPassed: twentyfirstStickyPreflight.passed === true,
    },
    decision: {
      laneFrozen: true,
      laneState: 'contrib-composer-eleven-single-live-one-micro-batch-twentyfirst-live-contract-ready',
      nextApprovedStep: 'composer-twentysecond-live-contract-next-step-lock',
      twentyfirstLiveContractReadyOnly: true,
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
      'composer twentyfirst live execution before explicit run step',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

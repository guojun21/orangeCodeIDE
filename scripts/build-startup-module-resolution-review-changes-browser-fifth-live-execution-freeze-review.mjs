#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const FIFTH_LIVE_CONTRACT_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fifth-live-contract-freeze-review.json');
const FIFTH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-browser-fifth-module-resolution-live-gate.json');
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fifth-live-execution-freeze-review.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const contractFreezeReview = readJson(FIFTH_LIVE_CONTRACT_FREEZE_REVIEW_PATH);
  const liveGate = readJson(FIFTH_LIVE_GATE_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);
  const fifthModuleId = 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciMessageUtils.js';

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'fifth-live-execution-freeze-review',
    sources: {
      fifthLiveContractFreezeReview: normalizePath(path.relative(ROOT, FIFTH_LIVE_CONTRACT_FREEZE_REVIEW_PATH)),
      fifthLiveGate: normalizePath(path.relative(ROOT, FIFTH_LIVE_GATE_PATH)),
      accept: normalizePath(path.relative(ROOT, ACCEPT_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    baseline: {
      laneState: contractFreezeReview.decision?.laneState ?? null,
      latestAcceptAt: accept.generatedAt ?? null,
      stableRuntimeStillGreen:
        quality.stability?.headlessVerifyPassed === true
        && quality.stability?.acceptRecorded === true
        && quality.stability?.startupLoaderRuntimeGatePassed === true
        && quality.stability?.startupLoaderRolloutGatePassed === true,
    },
    proven: {
      firstSingleLiveModuleId: contractFreezeReview.proven?.firstSingleLiveModuleId ?? null,
      firstSingleLiveWaveId: contractFreezeReview.proven?.firstSingleLiveWaveId ?? null,
      secondSingleLiveModuleId: contractFreezeReview.proven?.secondSingleLiveModuleId ?? null,
      secondSingleLiveWaveId: contractFreezeReview.proven?.secondSingleLiveWaveId ?? null,
      thirdSingleLiveModuleId: contractFreezeReview.proven?.thirdSingleLiveModuleId ?? null,
      thirdSingleLiveWaveId: contractFreezeReview.proven?.thirdSingleLiveWaveId ?? null,
      fourthSingleLiveModuleId: contractFreezeReview.proven?.fourthSingleLiveModuleId ?? null,
      fourthSingleLiveWaveId: contractFreezeReview.proven?.fourthSingleLiveWaveId ?? null,
      firstBatchWaveId: contractFreezeReview.proven?.firstBatchWaveId ?? null,
      secondBatchWaveId: contractFreezeReview.proven?.secondBatchWaveId ?? null,
      fifthSingleLiveModuleId: fifthModuleId,
      fifthSingleLiveWaveId: liveGate.expectedWaveId ?? null,
      enabledIds: liveGate.enabledIds ?? [],
      overlayProbeIds: liveGate.overlayProbeIds ?? [],
      factoryHitIds: liveGate.factoryHitIds ?? [],
      diagnostics: liveGate.runtimeState?.resolution?.diagnostics?.counters ?? null,
    },
    decision: {
      laneFrozen: true,
      laneState: 'five-single-live-proven-first-and-second-batch-live-proven',
      nextApprovedStep: 'browser-fifth-live-execution-next-step-lock',
      thirdBatchDiscussionUnlocked: true,
      browserThirdBatchLiveStillBlocked: true,
      browserComponentWidgetTemplateStillBlocked: true,
      browserHeavierUiSurfaceStillBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    blockedNow: [
      'browser third batch live',
      'browser component or widget admission',
      'browser template-surface admission',
      'browser heavier UI/view-zone admission',
      'cross-lane expansion',
      'rename-driven work',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

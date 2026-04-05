#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const BATCH_CONTRACT_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-batch-contract-freeze-review.json');
const BATCH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-browser-batch-module-resolution-live-gate.json');
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-batch-live-execution-freeze-review.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const contractFreezeReview = readJson(BATCH_CONTRACT_FREEZE_REVIEW_PATH);
  const liveGate = readJson(BATCH_LIVE_GATE_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'browser-batch-live-execution-freeze-review',
    sources: {
      browserBatchContractFreezeReview: normalizePath(path.relative(ROOT, BATCH_CONTRACT_FREEZE_REVIEW_PATH)),
      browserBatchLiveGate: normalizePath(path.relative(ROOT, BATCH_LIVE_GATE_PATH)),
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
        && quality.stability?.startupLoaderRolloutGatePassed === true
        && quality.stability?.startupModuleResolutionRolloutDisciplinePassed === true
        && quality.stability?.startupModuleResolutionDeepZoneAdmissionPassed === true,
    },
    proven: {
      firstSingleLiveModuleId: contractFreezeReview.proven?.firstSingleLiveModuleId ?? null,
      firstSingleLiveWaveId: contractFreezeReview.proven?.firstSingleLiveWaveId ?? null,
      secondSingleLiveModuleId: contractFreezeReview.proven?.secondSingleLiveModuleId ?? null,
      secondSingleLiveWaveId: contractFreezeReview.proven?.secondSingleLiveWaveId ?? null,
      thirdSingleLiveModuleId: contractFreezeReview.proven?.thirdSingleLiveModuleId ?? null,
      thirdSingleLiveWaveId: contractFreezeReview.proven?.thirdSingleLiveWaveId ?? null,
      batchWaveId: liveGate.expectedWaveId ?? null,
      approvedBatch: liveGate.enabledIds ?? [],
      overlayProbeIds: liveGate.overlayProbeIds ?? [],
      factoryHitIds: liveGate.factoryHitIds ?? [],
      diagnostics: liveGate.runtimeState?.resolution?.diagnostics?.counters ?? null,
    },
    decision: {
      laneFrozen: true,
      laneState: 'three-single-live-proven-first-batch-live-proven',
      nextApprovedStep: 'browser-batch-live-execution-next-step-lock',
      batchScopeFrozen: true,
      browserComponentWidgetTemplateStillBlocked: true,
      browserBatchScopeExpansionStillBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    blockedNow: [
      'browser batch scope expansion',
      'browser component/widget/template',
      'cross-lane expansion',
      'rename-driven work',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

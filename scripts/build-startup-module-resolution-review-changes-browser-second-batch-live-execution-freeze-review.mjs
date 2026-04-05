#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const SECOND_BATCH_CONTRACT_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-batch-contract-freeze-review.json');
const SECOND_BATCH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-browser-second-batch-module-resolution-live-gate.json');
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-batch-live-execution-freeze-review.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const contractFreezeReview = readJson(SECOND_BATCH_CONTRACT_FREEZE_REVIEW_PATH);
  const liveGate = readJson(SECOND_BATCH_LIVE_GATE_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'browser-second-batch-live-execution-freeze-review',
    sources: {
      browserSecondBatchContractFreezeReview: normalizePath(path.relative(ROOT, SECOND_BATCH_CONTRACT_FREEZE_REVIEW_PATH)),
      browserSecondBatchLiveGate: normalizePath(path.relative(ROOT, SECOND_BATCH_LIVE_GATE_PATH)),
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
      firstBatchWaveId: contractFreezeReview.proven?.batchWaveId ?? null,
      fourthSingleLiveModuleId: contractFreezeReview.proven?.fourthSingleLiveModuleId ?? null,
      fourthSingleLiveWaveId: contractFreezeReview.proven?.fourthSingleLiveWaveId ?? null,
      secondBatchWaveId: liveGate.expectedWaveId ?? null,
      approvedSecondBatch: liveGate.enabledIds ?? [],
      overlayProbeIds: liveGate.overlayProbeIds ?? [],
      factoryHitIds: liveGate.factoryHitIds ?? [],
      diagnostics: liveGate.runtimeState?.resolution?.diagnostics?.counters ?? null,
    },
    decision: {
      laneFrozen: true,
      laneState: 'four-single-live-proven-first-and-second-batch-live-proven',
      nextApprovedStep: 'browser-second-batch-live-execution-next-step-lock',
      fifthCandidateDiscussionUnlocked: true,
      browserThirdBatchScopeExpansionStillBlocked: true,
      browserComponentWidgetTemplateStillBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    blockedNow: [
      'browser third batch scope expansion',
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

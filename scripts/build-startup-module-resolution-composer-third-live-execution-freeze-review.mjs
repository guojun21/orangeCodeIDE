#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const THIRD_LIVE_CONTRACT_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-third-live-contract-freeze-review.json');
const THIRD_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-third-module-resolution-live-gate.json');
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-third-live-execution-freeze-review.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const contractFreezeReview = readJson(THIRD_LIVE_CONTRACT_FREEZE_REVIEW_PATH);
  const liveGate = readJson(THIRD_LIVE_GATE_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);
  const moduleId = 'out-build/vs/workbench/contrib/composer/browser/composerModelFilters.js';

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-composer',
    phase: 'composer-third-live-execution-freeze-review',
    sources: {
      thirdLiveContractFreezeReview: normalizePath(path.relative(ROOT, THIRD_LIVE_CONTRACT_FREEZE_REVIEW_PATH)),
      thirdLiveGate: normalizePath(path.relative(ROOT, THIRD_LIVE_GATE_PATH)),
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
      firstMicroBatchWaveId: contractFreezeReview.proven?.firstMicroBatchWaveId ?? null,
      thirdSingleLiveModuleId: moduleId,
      thirdSingleLiveWaveId: liveGate.expectedWaveId ?? null,
      enabledIds: liveGate.enabledIds ?? [],
      overlayProbeIds: liveGate.overlayProbeIds ?? [],
      factoryHitIds: liveGate.factoryHitIds ?? [],
      diagnostics: liveGate.runtimeState?.resolution?.diagnostics?.counters ?? null,
    },
    decision: {
      laneFrozen: true,
      laneState: 'contrib-composer-three-single-live-one-micro-batch-proven',
      nextApprovedStep: 'composer-third-live-execution-next-step-lock',
      widerBatchDiscussionStillBlocked: true,
      reviewChangesLaneStillFrozen: true,
      broadBrowserStillHeld: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    blockedNow: [
      'composer wider batch expansion',
      'new reviewChanges browser surface expansion',
      'broad browser expansion',
      'cross-lane expansion',
      'rename-driven work',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

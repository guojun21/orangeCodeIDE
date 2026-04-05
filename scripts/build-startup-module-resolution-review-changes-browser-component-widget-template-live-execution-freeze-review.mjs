#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const CONTRACT_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-component-widget-template-contract-freeze-review.json');
const LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-browser-component-widget-template-module-resolution-live-gate.json');
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-component-widget-template-live-execution-freeze-review.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const contractFreezeReview = readJson(CONTRACT_FREEZE_REVIEW_PATH);
  const liveGate = readJson(LIVE_GATE_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'browser-component-widget-template-live-execution-freeze-review',
    sources: {
      browserComponentWidgetTemplateContractFreezeReview: normalizePath(path.relative(ROOT, CONTRACT_FREEZE_REVIEW_PATH)),
      browserComponentWidgetTemplateLiveGate: normalizePath(path.relative(ROOT, LIVE_GATE_PATH)),
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
      ...contractFreezeReview.proven,
      firstBatchWaveId: contractFreezeReview.proven?.firstBatchWaveId ?? null,
      secondBatchWaveId: contractFreezeReview.proven?.secondBatchWaveId ?? null,
      thirdBatchWaveId: contractFreezeReview.proven?.thirdBatchWaveId ?? null,
      componentWidgetTemplateWaveId: liveGate.expectedWaveId ?? null,
      approvedSurface: liveGate.enabledIds ?? [],
      overlayProbeIds: liveGate.overlayProbeIds ?? [],
      factoryHitIds: liveGate.factoryHitIds ?? [],
      diagnostics: liveGate.runtimeState?.resolution?.diagnostics?.counters ?? null,
    },
    decision: {
      laneFrozen: true,
      laneState: 'five-single-live-proven-first-and-second-and-third-batch-live-proven-component-widget-template-live-proven',
      nextApprovedStep: 'browser-component-widget-template-live-execution-next-step-lock',
      heavierUiDiscussionUnlocked: true,
      browserHeavierUiSurfaceStillBlocked: true,
      browserFurtherUtilBatchExpansionStillBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    blockedNow: [
      'browser heavier UI/view-zone admission',
      'browser further util-batch expansion',
      'cross-lane expansion',
      'rename-driven work',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

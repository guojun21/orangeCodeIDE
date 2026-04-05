#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const FIFTH_LIVE_CONTRACT_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fifth-live-contract-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fifth-live-contract-next-step-lock.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const freezeReview = readJson(FIFTH_LIVE_CONTRACT_FREEZE_REVIEW_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'fifth-live-contract-next-step-lock',
    sources: {
      fifthLiveContractFreezeReview: normalizePath(path.relative(ROOT, FIFTH_LIVE_CONTRACT_FREEZE_REVIEW_PATH)),
    },
    baseline: {
      laneState: freezeReview.decision?.laneState ?? null,
      firstBatchWaveId: freezeReview.proven?.firstBatchWaveId ?? null,
      secondBatchWaveId: freezeReview.proven?.secondBatchWaveId ?? null,
      fifthLiveModuleId: freezeReview.fifthLiveContract?.moduleId ?? null,
      fifthLiveWaveId: freezeReview.fifthLiveContract?.waveId ?? null,
    },
    decision: {
      nextApprovedAction: 'browser-fifth-live-execution',
      approvedCandidateOnly: 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciMessageUtils.js',
      browserThirdBatchScopeExpansionBlocked: true,
      browserComponentWidgetTemplateBlocked: true,
      browserHeavierUiSurfaceBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    minimumWin: freezeReview.minimumWin ?? {},
    thirdBatchEligibilityGate: freezeReview.thirdBatchEligibilityGate ?? {},
    scopeBoundary: freezeReview.scopeBoundary ?? {},
    followUpPriority: freezeReview.followUpPriority ?? {},
    allowedNow: [
      'browser fifth live contract artifacts',
      'browser fifth live execution only',
      'browser-specific diagnostics refinement',
    ],
    blockedNow: [
      'browser third batch scope expansion',
      'browser component or widget live',
      'browser template-surface live',
      'browser heavier UI/view-zone live',
      'cross-lane expansion',
      'rename-driven work',
      'browser fifth live batch expansion',
    ],
    stopConditions: [
      'do not discuss browser third batch until DBR5L live is executed and frozen',
      'do not start component/widget/template or heavier UI admission before DBR5L live outcome is frozen',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

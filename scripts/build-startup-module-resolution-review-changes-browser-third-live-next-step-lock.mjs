#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const THIRD_LIVE_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-live-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-live-next-step-lock.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const freezeReview = readJson(THIRD_LIVE_FREEZE_REVIEW_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'third-live-next-step-lock',
    sources: {
      thirdLiveFreezeReview: normalizePath(path.relative(ROOT, THIRD_LIVE_FREEZE_REVIEW_PATH)),
    },
    baseline: {
      laneState: freezeReview.decision?.laneState ?? null,
      firstSingleLiveModuleId: freezeReview.proven?.firstSingleLiveModuleId ?? null,
      firstSingleLiveWaveId: freezeReview.proven?.firstSingleLiveWaveId ?? null,
      secondSingleLiveModuleId: freezeReview.proven?.secondSingleLiveModuleId ?? null,
      secondSingleLiveWaveId: freezeReview.proven?.secondSingleLiveWaveId ?? null,
      thirdNoOpModuleId: freezeReview.thirdNoOp?.moduleId ?? null,
      thirdNoOpWaveId: freezeReview.thirdNoOp?.waveId ?? null,
      thirdLiveModuleId: freezeReview.thirdLivePlan?.moduleId ?? null,
      thirdLiveWaveId: freezeReview.thirdLivePlan?.waveId ?? null,
    },
    decision: {
      nextApprovedAction: 'browser-third-live-contract',
      approvedCandidateOnly: 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/diffMentionUtils.js',
      browserMultiModuleBatchBlocked: true,
      browserComponentWidgetTemplateBlocked: true,
      browserThirdRunnerUpSwitchBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    minimumWin: freezeReview.minimumWin ?? {},
    batchEligibilityGate: freezeReview.batchEligibilityGate ?? {},
    scopeBoundary: freezeReview.scopeBoundary ?? {},
    followUpPriority: freezeReview.followUpPriority ?? {},
    allowedNow: [
      'browser third live admission artifacts',
      'browser third live contract planning only',
      'browser-specific diagnostics refinement',
    ],
    blockedNow: [
      'browser multi-module batch live',
      'browser component or widget live',
      'browser template-surface live',
      'browser third runner-up switch',
      'cross-lane expansion',
      'rename-driven work',
      'browser third live execution before contract',
    ],
    stopConditions: [
      'do not discuss browser batch until DBR3L live is executed and frozen',
      'do not switch to generatedFilesConstants.js or ciMessageUtils.js before DBR3L live outcome is frozen',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

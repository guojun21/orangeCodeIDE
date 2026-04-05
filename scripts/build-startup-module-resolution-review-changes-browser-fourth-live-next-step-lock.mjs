#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const FOURTH_LIVE_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fourth-live-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fourth-live-next-step-lock.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const freezeReview = readJson(FOURTH_LIVE_FREEZE_REVIEW_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'fourth-live-next-step-lock',
    sources: {
      fourthLiveFreezeReview: normalizePath(path.relative(ROOT, FOURTH_LIVE_FREEZE_REVIEW_PATH)),
    },
    baseline: {
      laneState: freezeReview.decision?.laneState ?? null,
      firstSingleLiveModuleId: freezeReview.proven?.firstSingleLiveModuleId ?? null,
      firstSingleLiveWaveId: freezeReview.proven?.firstSingleLiveWaveId ?? null,
      secondSingleLiveModuleId: freezeReview.proven?.secondSingleLiveModuleId ?? null,
      secondSingleLiveWaveId: freezeReview.proven?.secondSingleLiveWaveId ?? null,
      thirdSingleLiveModuleId: freezeReview.proven?.thirdSingleLiveModuleId ?? null,
      thirdSingleLiveWaveId: freezeReview.proven?.thirdSingleLiveWaveId ?? null,
      batchWaveId: freezeReview.proven?.batchWaveId ?? null,
      fourthNoOpModuleId: freezeReview.fourthNoOp?.moduleId ?? null,
      fourthNoOpWaveId: freezeReview.fourthNoOp?.waveId ?? null,
      fourthLiveModuleId: freezeReview.fourthLivePlan?.moduleId ?? null,
      fourthLiveWaveId: freezeReview.fourthLivePlan?.waveId ?? null,
    },
    decision: {
      nextApprovedAction: 'browser-fourth-live-contract',
      approvedCandidateOnly: 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/generatedFilesConstants.js',
      browserBatchScopeExpansionBlocked: true,
      browserComponentWidgetTemplateBlocked: true,
      browserFourthRunnerUpSwitchBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    minimumWin: freezeReview.minimumWin ?? {},
    secondBatchEligibilityGate: freezeReview.secondBatchEligibilityGate ?? {},
    scopeBoundary: freezeReview.scopeBoundary ?? {},
    followUpPriority: freezeReview.followUpPriority ?? {},
    allowedNow: [
      'browser fourth live admission artifacts',
      'browser fourth live contract planning only',
      'browser-specific diagnostics refinement',
    ],
    blockedNow: [
      'browser batch scope expansion',
      'browser second batch live',
      'browser component or widget live',
      'browser template-surface live',
      'browser fourth runner-up switch',
      'cross-lane expansion',
      'rename-driven work',
      'browser fourth live execution before contract',
    ],
    stopConditions: [
      'do not discuss second browser batch until DBR4L live is executed and frozen',
      'do not switch to ciMessageUtils.js before DBR4L live outcome is frozen',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

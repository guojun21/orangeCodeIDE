#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const THIRD_LIVE_CONTRACT_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-live-contract-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-live-contract-next-step-lock.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const freezeReview = readJson(THIRD_LIVE_CONTRACT_FREEZE_REVIEW_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'third-live-contract-next-step-lock',
    sources: {
      thirdLiveContractFreezeReview: normalizePath(path.relative(ROOT, THIRD_LIVE_CONTRACT_FREEZE_REVIEW_PATH)),
    },
    baseline: {
      laneState: freezeReview.decision?.laneState ?? null,
      thirdLiveModuleId: freezeReview.thirdLiveContract?.moduleId ?? null,
      thirdLiveWaveId: freezeReview.thirdLiveContract?.waveId ?? null,
    },
    decision: {
      nextApprovedAction: 'browser-third-live-execution',
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
      'browser third live contract artifacts',
      'browser third live execution only',
      'browser-specific diagnostics refinement',
    ],
    blockedNow: [
      'browser multi-module batch live',
      'browser component or widget live',
      'browser template-surface live',
      'browser third runner-up switch',
      'cross-lane expansion',
      'rename-driven work',
      'browser third live batch expansion',
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

#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const SECOND_LIVE_CONTRACT_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-live-contract-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-live-contract-next-step-lock.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const freezeReview = readJson(SECOND_LIVE_CONTRACT_FREEZE_REVIEW_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'second-live-contract-next-step-lock',
    sources: {
      secondLiveContractFreezeReview: normalizePath(path.relative(ROOT, SECOND_LIVE_CONTRACT_FREEZE_REVIEW_PATH)),
    },
    baseline: {
      laneState: freezeReview.decision?.laneState ?? null,
      secondLiveModuleId: freezeReview.secondLiveContract?.moduleId ?? null,
      secondLiveWaveId: freezeReview.secondLiveContract?.waveId ?? null,
    },
    decision: {
      nextApprovedAction: 'browser-second-live-execution',
      approvedCandidateOnly: 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/discussionUtils.js',
      browserMultiModuleBatchBlocked: true,
      browserComponentWidgetTemplateBlocked: true,
      browserSecondRunnerUpSwitchBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    allowedNow: [
      'browser second live contract artifacts',
      'browser second live execution only',
      'browser-specific diagnostics refinement',
    ],
    blockedNow: [
      'browser multi-module batch live',
      'browser component or widget live',
      'browser template-surface live',
      'browser second runner-up switch',
      'cross-lane expansion',
      'rename-driven work',
      'browser second live batch expansion',
    ],
    stopConditions: [
      'do not discuss browser batch until DBR2L live is executed and frozen',
      'do not switch to diffMentionUtils.js or other runner-ups before DBR2L live outcome is frozen',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

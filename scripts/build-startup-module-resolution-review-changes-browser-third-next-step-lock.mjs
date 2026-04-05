#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const THIRD_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-next-step-lock.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const freezeReview = readJson(THIRD_FREEZE_REVIEW_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'third-next-step-lock',
    sources: {
      thirdFreezeReview: normalizePath(path.relative(ROOT, THIRD_FREEZE_REVIEW_PATH)),
    },
    baseline: {
      laneState: freezeReview.decision?.laneState ?? null,
      firstSingleLiveModuleId: freezeReview.proven?.firstSingleLiveModuleId ?? null,
      firstSingleLiveWaveId: freezeReview.proven?.firstSingleLiveWaveId ?? null,
      secondSingleLiveModuleId: freezeReview.proven?.secondSingleLiveModuleId ?? null,
      secondSingleLiveWaveId: freezeReview.proven?.secondSingleLiveWaveId ?? null,
      plannedModuleId: freezeReview.plannedCandidate?.moduleId ?? null,
      plannedWaveId: freezeReview.plannedCandidate?.waveId ?? null,
    },
    decision: {
      nextApprovedAction: 'browser-third-dedicated-no-op-runtime-plan',
      approvedCandidateOnly: 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/diffMentionUtils.js',
      browserMultiModuleBatchBlocked: true,
      browserComponentWidgetTemplateBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    allowedNow: [
      'browser third candidate admission artifacts',
      'browser third dedicated no-op runtime planning only',
      'browser-specific diagnostics refinement',
    ],
    blockedNow: [
      'browser multi-module batch live',
      'browser component or widget live',
      'browser template-surface live',
      'cross-lane expansion',
      'rename-driven work',
      'browser third candidate live execution',
    ],
    stopConditions: [
      'do not discuss DBR3L until DBR3A dedicated no-op runtime gate completes',
      'do not approve browser batch while only two browser single-live and one third admission candidate are frozen',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

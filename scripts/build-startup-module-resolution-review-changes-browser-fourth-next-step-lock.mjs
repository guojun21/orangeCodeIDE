#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const FOURTH_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fourth-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fourth-next-step-lock.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const freezeReview = readJson(FOURTH_FREEZE_REVIEW_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'fourth-next-step-lock',
    sources: {
      fourthFreezeReview: normalizePath(path.relative(ROOT, FOURTH_FREEZE_REVIEW_PATH)),
    },
    baseline: {
      laneState: freezeReview.decision?.laneState ?? null,
      batchWaveId: freezeReview.proven?.batchWaveId ?? null,
      approvedBatch: freezeReview.proven?.approvedBatch ?? [],
      plannedModuleId: freezeReview.plannedCandidate?.moduleId ?? null,
      plannedWaveId: freezeReview.plannedCandidate?.waveId ?? null,
    },
    decision: {
      nextApprovedAction: 'browser-fourth-dedicated-no-op-runtime-plan',
      approvedCandidateOnly: 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/generatedFilesConstants.js',
      browserBatchScopeExpansionBlocked: true,
      browserComponentWidgetTemplateBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    allowedNow: [
      'browser fourth candidate admission artifacts',
      'browser fourth dedicated no-op runtime planning only',
      'browser-specific diagnostics refinement',
    ],
    blockedNow: [
      'browser batch scope expansion',
      'browser second batch live',
      'browser component or widget live',
      'browser template-surface live',
      'cross-lane expansion',
      'rename-driven work',
      'runner-up switch without fourth-candidate admission freeze',
      'browser fourth candidate live execution',
    ],
    stopConditions: [
      'do not discuss DBR4L until DBR4A dedicated no-op runtime gate completes',
      'do not widen browser batch beyond DBRB1 members before browser fourth candidate planning outcome is frozen',
      'do not switch to ciMessageUtils.js outside a dedicated fourth-candidate admission plan',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

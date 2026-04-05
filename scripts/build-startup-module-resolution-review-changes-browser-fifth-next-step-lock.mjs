#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const FIFTH_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fifth-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fifth-next-step-lock.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const freezeReview = readJson(FIFTH_FREEZE_REVIEW_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'fifth-next-step-lock',
    sources: {
      fifthFreezeReview: normalizePath(path.relative(ROOT, FIFTH_FREEZE_REVIEW_PATH)),
    },
    baseline: {
      laneState: freezeReview.decision?.laneState ?? null,
      firstBatchWaveId: freezeReview.proven?.firstBatchWaveId ?? null,
      secondBatchWaveId: freezeReview.proven?.secondBatchWaveId ?? null,
      plannedModuleId: freezeReview.plannedCandidate?.moduleId ?? null,
      plannedWaveId: freezeReview.plannedCandidate?.waveId ?? null,
    },
    decision: {
      nextApprovedAction: 'browser-fifth-dedicated-no-op-runtime-plan',
      approvedCandidateOnly: 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciMessageUtils.js',
      browserThirdBatchScopeExpansionBlocked: true,
      browserComponentWidgetTemplateBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    allowedNow: [
      'browser fifth candidate admission artifacts',
      'browser fifth dedicated no-op runtime planning only',
      'browser-specific diagnostics refinement',
    ],
    blockedNow: [
      'browser third batch scope expansion',
      'browser component or widget live',
      'browser template-surface live',
      'cross-lane expansion',
      'rename-driven work',
      'browser fifth candidate live execution',
      'alternate browser util selection after fifth-candidate admission freeze',
    ],
    stopConditions: [
      'do not discuss DBR5L until DBR5A dedicated no-op runtime gate completes',
      'do not widen browser batch beyond DBRB2 members before browser fifth candidate planning outcome is frozen',
      'do not start component/widget/template admission before browser fifth candidate runtime outcome is frozen',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

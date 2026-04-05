#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const FOURTH_RUNTIME_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fourth-runtime-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fourth-runtime-next-step-lock.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const freezeReview = readJson(FOURTH_RUNTIME_FREEZE_REVIEW_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'fourth-runtime-next-step-lock',
    sources: {
      fourthRuntimeFreezeReview: normalizePath(path.relative(ROOT, FOURTH_RUNTIME_FREEZE_REVIEW_PATH)),
    },
    baseline: {
      laneState: freezeReview.decision?.laneState ?? null,
      batchWaveId: freezeReview.proven?.batchWaveId ?? null,
      firstSingleLiveModuleId: freezeReview.proven?.firstSingleLiveModuleId ?? null,
      firstSingleLiveWaveId: freezeReview.proven?.firstSingleLiveWaveId ?? null,
      secondSingleLiveModuleId: freezeReview.proven?.secondSingleLiveModuleId ?? null,
      secondSingleLiveWaveId: freezeReview.proven?.secondSingleLiveWaveId ?? null,
      thirdSingleLiveModuleId: freezeReview.proven?.thirdSingleLiveModuleId ?? null,
      thirdSingleLiveWaveId: freezeReview.proven?.thirdSingleLiveWaveId ?? null,
      fourthNoOpModuleId: freezeReview.fourthNoOp?.moduleId ?? null,
      fourthNoOpWaveId: freezeReview.fourthNoOp?.waveId ?? null,
    },
    decision: {
      nextApprovedAction: 'browser-fourth-live-admission-plan',
      approvedCandidateOnly: 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/generatedFilesConstants.js',
      browserBatchScopeExpansionBlocked: true,
      browserComponentWidgetTemplateBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    allowedNow: [
      'browser fourth dedicated no-op runtime artifacts',
      'browser fourth live admission planning only',
      'browser-specific diagnostics refinement',
    ],
    blockedNow: [
      'browser batch scope expansion',
      'browser second batch live',
      'browser component or widget live',
      'browser template-surface live',
      'cross-lane expansion',
      'rename-driven work',
      'runner-up switch without fourth-live admission freeze',
      'browser fourth live execution before admission',
    ],
    stopConditions: [
      'do not discuss DBR4L until DBR4 dedicated no-op runtime is frozen and locked',
      'do not widen browser batch beyond DBRB1 members before browser fourth live admission outcome is frozen',
      'do not switch to ciMessageUtils.js outside a dedicated fourth-candidate admission plan',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

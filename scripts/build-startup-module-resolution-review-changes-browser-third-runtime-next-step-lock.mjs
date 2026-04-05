#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const THIRD_RUNTIME_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-runtime-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-runtime-next-step-lock.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const freezeReview = readJson(THIRD_RUNTIME_FREEZE_REVIEW_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'third-runtime-next-step-lock',
    sources: {
      thirdRuntimeFreezeReview: normalizePath(path.relative(ROOT, THIRD_RUNTIME_FREEZE_REVIEW_PATH)),
    },
    baseline: {
      laneState: freezeReview.decision?.laneState ?? null,
      firstSingleLiveModuleId: freezeReview.proven?.firstSingleLiveModuleId ?? null,
      firstSingleLiveWaveId: freezeReview.proven?.firstSingleLiveWaveId ?? null,
      secondSingleLiveModuleId: freezeReview.proven?.secondSingleLiveModuleId ?? null,
      secondSingleLiveWaveId: freezeReview.proven?.secondSingleLiveWaveId ?? null,
      thirdNoOpModuleId: freezeReview.thirdNoOp?.moduleId ?? null,
      thirdNoOpWaveId: freezeReview.thirdNoOp?.waveId ?? null,
    },
    decision: {
      nextApprovedAction: 'browser-third-live-admission-plan',
      approvedCandidateOnly: 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/diffMentionUtils.js',
      browserMultiModuleBatchBlocked: true,
      browserComponentWidgetTemplateBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    allowedNow: [
      'browser third dedicated no-op runtime artifacts',
      'browser third live admission planning only',
      'browser-specific diagnostics refinement',
    ],
    blockedNow: [
      'browser multi-module batch live',
      'browser component or widget live',
      'browser template-surface live',
      'cross-lane expansion',
      'rename-driven work',
      'browser third live execution before admission',
    ],
    stopConditions: [
      'do not discuss DBR3L until DBR3 dedicated no-op runtime is frozen and locked',
      'do not approve browser batch while only two browser live and one third browser no-op are proven',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

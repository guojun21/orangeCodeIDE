#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const THIRD_RUNTIME_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-third-runtime-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-third-runtime-next-step-lock.json');

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
    lane: 'contrib-composer',
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
      firstMicroBatchWaveId: freezeReview.proven?.firstMicroBatchWaveId ?? null,
      thirdNoOpModuleId: freezeReview.thirdNoOp?.moduleId ?? null,
      thirdNoOpWaveId: freezeReview.thirdNoOp?.waveId ?? null,
    },
    decision: {
      nextApprovedAction: 'composer-third-live-admission-plan',
      approvedCandidateOnly: 'out-build/vs/workbench/contrib/composer/browser/composerModelFilters.js',
      reviewChangesLaneFrozen: true,
      broadBrowserHeld: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    allowedNow: [
      'composer third dedicated no-op runtime artifacts',
      'composer third live admission planning only',
      'composer-specific diagnostics refinement',
    ],
    blockedNow: [
      'composer third live execution before admission',
      'composer wider batch expansion',
      'new reviewChanges browser surface expansion',
      'cross-lane expansion',
      'rename-driven work',
    ],
    stopConditions: [
      'do not discuss DC3L execution until DC3 dedicated no-op runtime is frozen and locked',
      'do not reopen reviewChanges or browser lane expansion while composer continuation is still in third-candidate transition',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const ELEVENTH_RUNTIME_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-twentysixth-runtime-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-twentysixth-runtime-next-step-lock.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const freezeReview = readJson(ELEVENTH_RUNTIME_FREEZE_REVIEW_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-composer',
    phase: 'twentyfirst-runtime-next-step-lock',
    sources: {
      twentyfirstRuntimeFreezeReview: normalizePath(path.relative(ROOT, ELEVENTH_RUNTIME_FREEZE_REVIEW_PATH)),
    },
    baseline: {
      laneState: freezeReview.decision?.laneState ?? null,
      tenthSingleLiveModuleId: freezeReview.proven?.tenthSingleLiveModuleId ?? null,
      tenthSingleLiveWaveId: freezeReview.proven?.tenthSingleLiveWaveId ?? null,
      firstMicroBatchWaveId: freezeReview.proven?.firstMicroBatchWaveId ?? null,
      twentyfirstNoOpModuleId: freezeReview.twentyfirstNoOp?.moduleId ?? null,
      twentyfirstNoOpWaveId: freezeReview.twentyfirstNoOp?.waveId ?? null,
    },
    decision: {
      nextApprovedAction: 'composer-twentysixth-live-admission-plan',
      approvedCandidateOnly: 'out-build/vs/workbench/contrib/composer/browser/composer.js',
      reviewChangesLaneFrozen: true,
      broadBrowserHeld: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    allowedNow: [
      'composer twentyfirst dedicated no-op runtime artifacts',
      'composer twentyfirst live admission planning only',
      'composer-specific diagnostics refinement',
    ],
    blockedNow: [
      'composer twentyfirst live execution before admission',
      'composer wider batch expansion',
      'new reviewChanges browser surface expansion',
      'cross-lane expansion',
      'rename-driven work',
    ],
    stopConditions: [
      'do not discuss DC26L execution until DC26 dedicated no-op runtime is frozen and locked',
      'do not reopen reviewChanges or browser lane expansion while composer continuation is still in twentyfirst-candidate transition',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

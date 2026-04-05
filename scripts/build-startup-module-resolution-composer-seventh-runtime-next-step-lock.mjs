#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const SEVENTH_RUNTIME_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-seventh-runtime-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-seventh-runtime-next-step-lock.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const freezeReview = readJson(SEVENTH_RUNTIME_FREEZE_REVIEW_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-composer',
    phase: 'seventh-runtime-next-step-lock',
    sources: {
      seventhRuntimeFreezeReview: normalizePath(path.relative(ROOT, SEVENTH_RUNTIME_FREEZE_REVIEW_PATH)),
    },
    baseline: {
      laneState: freezeReview.decision?.laneState ?? null,
      firstSingleLiveModuleId: freezeReview.proven?.firstSingleLiveModuleId ?? null,
      firstSingleLiveWaveId: freezeReview.proven?.firstSingleLiveWaveId ?? null,
      secondSingleLiveModuleId: freezeReview.proven?.secondSingleLiveModuleId ?? null,
      secondSingleLiveWaveId: freezeReview.proven?.secondSingleLiveWaveId ?? null,
      thirdSingleLiveModuleId: freezeReview.proven?.thirdSingleLiveModuleId ?? null,
      thirdSingleLiveWaveId: freezeReview.proven?.thirdSingleLiveWaveId ?? null,
      fourthSingleLiveModuleId: freezeReview.proven?.fourthSingleLiveModuleId ?? null,
      fourthSingleLiveWaveId: freezeReview.proven?.fourthSingleLiveWaveId ?? null,
      fifthSingleLiveModuleId: freezeReview.proven?.fifthSingleLiveModuleId ?? null,
      fifthSingleLiveWaveId: freezeReview.proven?.fifthSingleLiveWaveId ?? null,
      sixthSingleLiveModuleId: freezeReview.proven?.sixthSingleLiveModuleId ?? null,
      sixthSingleLiveWaveId: freezeReview.proven?.sixthSingleLiveWaveId ?? null,
      firstMicroBatchWaveId: freezeReview.proven?.firstMicroBatchWaveId ?? null,
      seventhNoOpModuleId: freezeReview.seventhNoOp?.moduleId ?? null,
      seventhNoOpWaveId: freezeReview.seventhNoOp?.waveId ?? null,
    },
    decision: {
      nextApprovedAction: 'composer-seventh-live-admission-plan',
      approvedCandidateOnly: 'out-build/vs/workbench/contrib/composer/browser/composerBlobStore.js',
      reviewChangesLaneFrozen: true,
      broadBrowserHeld: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    allowedNow: [
      'composer seventh dedicated no-op runtime artifacts',
      'composer seventh live admission planning only',
      'composer-specific diagnostics refinement',
    ],
    blockedNow: [
      'composer seventh live execution before admission',
      'composer wider batch expansion',
      'new reviewChanges browser surface expansion',
      'cross-lane expansion',
      'rename-driven work',
    ],
    stopConditions: [
      'do not discuss DC7L execution until DC7 dedicated no-op runtime is frozen and locked',
      'do not reopen reviewChanges or browser lane expansion while composer continuation is still in seventh-candidate transition',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

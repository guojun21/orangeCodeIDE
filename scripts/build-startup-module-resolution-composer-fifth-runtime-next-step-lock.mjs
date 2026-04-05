#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const FIFTH_RUNTIME_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fifth-runtime-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fifth-runtime-next-step-lock.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const freezeReview = readJson(FIFTH_RUNTIME_FREEZE_REVIEW_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-composer',
    phase: 'fifth-runtime-next-step-lock',
    sources: {
      fifthRuntimeFreezeReview: normalizePath(path.relative(ROOT, FIFTH_RUNTIME_FREEZE_REVIEW_PATH)),
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
      firstMicroBatchWaveId: freezeReview.proven?.firstMicroBatchWaveId ?? null,
      fifthNoOpModuleId: freezeReview.fifthNoOp?.moduleId ?? null,
      fifthNoOpWaveId: freezeReview.fifthNoOp?.waveId ?? null,
    },
    decision: {
      nextApprovedAction: 'composer-fifth-live-admission-plan',
      approvedCandidateOnly: 'out-build/vs/workbench/contrib/composer/browser/composerChatServiceInterface.js',
      reviewChangesLaneFrozen: true,
      broadBrowserHeld: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    allowedNow: [
      'composer fifth dedicated no-op runtime artifacts',
      'composer fifth live admission planning only',
      'composer-specific diagnostics refinement',
    ],
    blockedNow: [
      'composer fifth live execution before admission',
      'composer wider batch expansion',
      'new reviewChanges browser surface expansion',
      'cross-lane expansion',
      'rename-driven work',
    ],
    stopConditions: [
      'do not discuss DC5L execution until DC5 dedicated no-op runtime is frozen and locked',
      'do not reopen reviewChanges or browser lane expansion while composer continuation is still in fifth-candidate transition',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

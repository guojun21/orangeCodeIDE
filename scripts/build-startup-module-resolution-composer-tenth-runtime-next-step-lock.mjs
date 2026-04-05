#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const TENTH_RUNTIME_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-tenth-runtime-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-tenth-runtime-next-step-lock.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const freezeReview = readJson(TENTH_RUNTIME_FREEZE_REVIEW_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-composer',
    phase: 'tenth-runtime-next-step-lock',
    sources: {
      tenthRuntimeFreezeReview: normalizePath(path.relative(ROOT, TENTH_RUNTIME_FREEZE_REVIEW_PATH)),
    },
    baseline: {
      laneState: freezeReview.decision?.laneState ?? null,
      ninthSingleLiveModuleId: freezeReview.proven?.ninthSingleLiveModuleId ?? null,
      ninthSingleLiveWaveId: freezeReview.proven?.ninthSingleLiveWaveId ?? null,
      firstMicroBatchWaveId: freezeReview.proven?.firstMicroBatchWaveId ?? null,
      tenthNoOpModuleId: freezeReview.tenthNoOp?.moduleId ?? null,
      tenthNoOpWaveId: freezeReview.tenthNoOp?.waveId ?? null,
    },
    decision: {
      nextApprovedAction: 'composer-tenth-live-admission-plan',
      approvedCandidateOnly: 'out-build/vs/workbench/contrib/composer/browser/worktreeGate.js',
      reviewChangesLaneFrozen: true,
      broadBrowserHeld: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    allowedNow: [
      'composer tenth dedicated no-op runtime artifacts',
      'composer tenth live admission planning only',
      'composer-specific diagnostics refinement',
    ],
    blockedNow: [
      'composer tenth live execution before admission',
      'composer wider batch expansion',
      'new reviewChanges browser surface expansion',
      'cross-lane expansion',
      'rename-driven work',
    ],
    stopConditions: [
      'do not discuss DC10L execution until DC10 dedicated no-op runtime is frozen and locked',
      'do not reopen reviewChanges or browser lane expansion while composer continuation is still in tenth-candidate transition',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

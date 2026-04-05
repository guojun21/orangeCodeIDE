#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const TENTH_LIVE_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-tenth-live-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-tenth-live-next-step-lock.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const freezeReview = readJson(TENTH_LIVE_FREEZE_REVIEW_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-composer',
    phase: 'tenth-live-next-step-lock',
    sources: {
      tenthLiveFreezeReview: normalizePath(path.relative(ROOT, TENTH_LIVE_FREEZE_REVIEW_PATH)),
    },
    baseline: {
      laneState: freezeReview.decision?.laneState ?? null,
      ninthSingleLiveModuleId: freezeReview.proven?.ninthSingleLiveModuleId ?? null,
      ninthSingleLiveWaveId: freezeReview.proven?.ninthSingleLiveWaveId ?? null,
      firstMicroBatchWaveId: freezeReview.proven?.firstMicroBatchWaveId ?? null,
      tenthNoOpModuleId: freezeReview.tenthNoOp?.moduleId ?? null,
      tenthNoOpWaveId: freezeReview.tenthNoOp?.waveId ?? null,
      tenthLiveModuleId: freezeReview.tenthLivePlan?.moduleId ?? null,
      tenthLiveWaveId: freezeReview.tenthLivePlan?.waveId ?? null,
    },
    decision: {
      nextApprovedAction: 'composer-tenth-live-contract',
      approvedCandidateOnly: 'out-build/vs/workbench/contrib/composer/browser/worktreeGate.js',
      widerBatchExpansionBlocked: true,
      composerTenthRunnerUpSwitchBlocked: true,
      reviewChangesLaneStillFrozen: true,
      broadBrowserStillHeld: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    allowedNow: [
      'composer tenth live admission artifacts',
      'composer tenth live contract planning only',
      'composer-specific diagnostics refinement',
    ],
    blockedNow: [
      'composer wider batch expansion',
      'composer tenth runner-up switch',
      'new reviewChanges browser surface expansion',
      'cross-lane expansion',
      'rename-driven work',
      'composer tenth live execution before contract',
    ],
    stopConditions: [
      'do not discuss wider composer batch until DC10L live is executed and frozen',
      'do not switch to composer runner-ups before DC10L live outcome is frozen',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

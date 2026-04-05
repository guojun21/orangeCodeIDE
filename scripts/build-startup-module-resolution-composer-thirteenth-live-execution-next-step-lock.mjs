#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const ELEVENTH_LIVE_EXECUTION_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-thirteenth-live-execution-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-thirteenth-live-execution-next-step-lock.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const freezeReview = readJson(ELEVENTH_LIVE_EXECUTION_FREEZE_REVIEW_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-composer',
    phase: 'composer-thirteenth-live-execution-next-step-lock',
    sources: {
      thirteenthLiveExecutionFreezeReview: normalizePath(path.relative(ROOT, ELEVENTH_LIVE_EXECUTION_FREEZE_REVIEW_PATH)),
    },
    baseline: {
      laneState: freezeReview.decision?.laneState ?? null,
      firstMicroBatchWaveId: freezeReview.proven?.firstMicroBatchWaveId ?? null,
      thirteenthSingleLiveModuleId: freezeReview.proven?.thirteenthSingleLiveModuleId ?? null,
      thirteenthSingleLiveWaveId: freezeReview.proven?.thirteenthSingleLiveWaveId ?? null,
    },
    decision: {
      nextApprovedAction: 'composer-lane-freeze-review',
      composerLaneFreezeMayStartOnlyAfterThirteenthLiveFreeze: true,
      widerBatchDiscussionStillBlocked: true,
      reviewChangesLaneStillFrozen: true,
      broadBrowserStillHeld: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    allowedNow: [
      'composer thirteenth live freeze artifacts',
      'composer lane freeze review only',
      'composer-specific diagnostics refinement',
    ],
    blockedNow: [
      'composer wider batch expansion',
      'new reviewChanges browser surface expansion',
      'broad browser expansion',
      'cross-lane expansion',
      'rename-driven work',
    ],
    stopConditions: [
      'do not discuss wider composer batch before a dedicated composer lane freeze review is completed',
      'do not reopen reviewChanges or browser lane expansion before composer lane freeze outcome is recorded',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

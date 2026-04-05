#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const THRESHOLD_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-promotion-threshold.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-lane-freeze-review.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const threshold = readJson(THRESHOLD_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-reviewChanges',
    sources: {
      threshold: normalizePath(path.relative(ROOT, THRESHOLD_PATH)),
    },
    currentState: {
      lanePromotionEligible: threshold.decision?.lanePromotionEligible === true,
      browserStillHeld: threshold.decision?.browserStillHeld === true,
      browserLaneFrozen: threshold.decision?.browserLaneFrozen === true,
      lowRiskBatch: threshold.provenSet?.lowRiskBatch ?? null,
      managerSingleLive: threshold.provenSet?.managerSingleLive ?? null,
      managerIncludingBatchLive: threshold.provenSet?.managerIncludingBatchLive ?? null,
      resourceSingleLive: threshold.provenSet?.resourceSingleLive ?? null,
      browserLaneGlobalLive: threshold.provenSet?.browserLaneGlobalLive ?? null,
      latestAcceptAt: threshold.stability?.latestAcceptAt ?? null,
      stableRuntimeStillGreen: threshold.stability?.rolloutGatePassed === true,
    },
    decision: {
      laneFrozen: true,
      laneState: 'review-changes-lane-global-live-proven',
      nextApprovedStep: null,
      browserHold: false,
      browserHoldReason: threshold.decision?.browserHoldReason ?? [],
      reviewChangesLaneExhausted: true,
      crossLaneExecutionBlocked: true,
      renameOnMainline: false,
    },
    guardrails: {
      allowedNow: [
        'reviewChanges lane-freeze review artifacts',
        'separate cross-lane planning only through dedicated admission and freeze',
        'browser-specific diagnostics refinement only if stability regresses',
      ],
      blockedNow: [
        'new reviewChanges browser surface expansion',
        'cross-lane execution without dedicated admission',
        'generic module-count chasing',
        'rename-driven work',
      ],
      unblockCrossLaneWhen: [
        'a separate non-reviewChanges lane admission and freeze plan is approved',
        'current accept and quality stability remain green',
      ],
    },
    minimumWin: {
      definition: 'reviewChanges lane freeze review verify green with browser released and laneState fixed to review-changes-lane-global-live-proven',
      mustVerify: [
        'startup-module-resolution-review-changes-lane-freeze-review-verify.json',
      ],
    },
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

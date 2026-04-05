#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const COMPOSER_ELEVENTH_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fourteenth-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fourteenth-next-step-lock.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const freezeReview = readJson(COMPOSER_ELEVENTH_FREEZE_REVIEW_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-composer',
    phase: 'fourteenth-next-step-lock',
    sources: {
      composerFourteenthFreezeReview: normalizePath(path.relative(ROOT, COMPOSER_ELEVENTH_FREEZE_REVIEW_PATH)),
    },
    baseline: {
      laneState: freezeReview.decision?.laneState ?? null,
      nextCandidateModuleId: freezeReview.currentState?.nextCandidateModuleId ?? null,
      nextCandidateWaveId: freezeReview.currentState?.nextCandidateWaveId ?? null,
    },
    decision: {
      nextApprovedAction: 'composer-fourteenth-dedicated-no-op-runtime-plan',
      approvedCandidateOnly: 'out-build/vs/workbench/contrib/composer/browser/browserTabId.js',
      reviewChangesLaneFrozen: true,
      broadBrowserStillHeld: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    allowedNow: [
      'composer fourteenth candidate admission artifacts',
      'composer fourteenth dedicated no-op runtime planning only',
      'composer-specific diagnostics refinement',
    ],
    blockedNow: [
      'composer fourteenth candidate live execution',
      'composer wider batch expansion',
      'new reviewChanges browser surface expansion',
      'cross-lane expansion',
      'rename-driven work',
    ],
    stopConditions: [
      'do not discuss DC14L until DC14A dedicated no-op runtime gate completes',
      'do not reopen reviewChanges or browser lane expansion while composer continuation is still in candidate-only planning',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const ELEVENTH_LIVE_CONTRACT_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-eleventh-live-contract-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-eleventh-live-contract-next-step-lock.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const freezeReview = readJson(ELEVENTH_LIVE_CONTRACT_FREEZE_REVIEW_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-composer',
    phase: 'eleventh-live-contract-next-step-lock',
    sources: {
      eleventhLiveContractFreezeReview: normalizePath(path.relative(ROOT, ELEVENTH_LIVE_CONTRACT_FREEZE_REVIEW_PATH)),
    },
    baseline: {
      laneState: freezeReview.decision?.laneState ?? null,
      firstMicroBatchWaveId: freezeReview.proven?.firstMicroBatchWaveId ?? null,
      eleventhLiveModuleId: freezeReview.eleventhLiveContract?.moduleId ?? null,
      eleventhLiveWaveId: freezeReview.eleventhLiveContract?.waveId ?? null,
    },
    decision: {
      nextApprovedAction: 'composer-eleventh-live-execution',
      approvedCandidateOnly: 'out-build/vs/workbench/contrib/composer/browser/composerDataCreation.js',
      widerBatchExpansionBlocked: true,
      reviewChangesLaneStillFrozen: true,
      broadBrowserStillHeld: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    allowedNow: [
      'composer eleventh live contract artifacts',
      'composer eleventh live execution only',
    ],
    blockedNow: [
      'composer wider batch expansion',
      'new reviewChanges browser surface expansion',
      'cross-lane expansion',
      'composer eleventh live batch expansion',
      'rename-driven work',
    ],
    stopConditions: [
      'do not discuss wider composer batch until DC11L live is executed and frozen',
      'do not reopen reviewChanges or browser lane expansion before DC11L live outcome is frozen',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

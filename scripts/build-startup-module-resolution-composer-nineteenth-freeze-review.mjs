#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const COMPOSER_LANE_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-lane-freeze-review.json');
const COMPOSER_ELEVENTH_ADMISSION_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-nineteenth-admission.json');
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-nineteenth-freeze-review.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const laneFreezeReview = readJson(COMPOSER_LANE_FREEZE_REVIEW_PATH);
  const nineteenthAdmission = readJson(COMPOSER_ELEVENTH_ADMISSION_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-composer',
    phase: 'nineteenth-freeze-review',
    sources: {
      composerLaneFreezeReview: normalizePath(path.relative(ROOT, COMPOSER_LANE_FREEZE_REVIEW_PATH)),
      composerEighteenthAdmission: normalizePath(path.relative(ROOT, COMPOSER_ELEVENTH_ADMISSION_PATH)),
      accept: normalizePath(path.relative(ROOT, ACCEPT_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    baseline: {
      latestAcceptAt: accept.generatedAt ?? null,
      stableRuntimeStillGreen:
        quality.stability?.headlessVerifyPassed === true
        && quality.stability?.acceptRecorded === true
        && quality.stability?.startupLoaderRuntimeGatePassed === true
        && quality.stability?.startupLoaderRolloutGatePassed === true,
    },
    currentState: {
      laneState: laneFreezeReview.decision?.laneState ?? null,
      nextCandidateModuleId: nineteenthAdmission.approvedCandidate?.moduleId ?? null,
      nextCandidateWaveId: nineteenthAdmission.approvedCandidate?.waveId ?? null,
    },
    decision: {
      laneFrozen: true,
      laneState: 'contrib-composer-ten-single-live-one-micro-batch-nineteenth-candidate-planned',
      nextApprovedStep: 'composer-nineteenth-next-step-lock',
      nineteenthCandidatePlannedOnly: true,
      widerBatchStillBlocked: true,
      reviewChangesLaneStillFrozen: true,
      broadBrowserStillHeld: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    blockedNow: [
      'composer nineteenth live execution',
      'composer wider batch expansion',
      'new reviewChanges browser surface expansion',
      'cross-lane expansion',
      'rename-driven work',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

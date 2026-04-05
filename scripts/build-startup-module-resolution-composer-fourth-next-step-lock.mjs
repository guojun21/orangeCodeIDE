#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const FOURTH_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fourth-freeze-review.json');
const DEEP_ZONE_ADMISSION_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-deep-zone-admission.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fourth-next-step-lock.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const freezeReview = readJson(FOURTH_FREEZE_REVIEW_PATH);
  const deepZoneAdmission = readJson(DEEP_ZONE_ADMISSION_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-composer',
    phase: 'fourth-next-step-lock',
    sources: {
      fourthFreezeReview: normalizePath(path.relative(ROOT, FOURTH_FREEZE_REVIEW_PATH)),
      deepZoneAdmission: normalizePath(path.relative(ROOT, DEEP_ZONE_ADMISSION_PATH)),
    },
    baseline: {
      laneState: freezeReview.decision?.laneState ?? null,
      firstSingleLiveModuleId: freezeReview.proven?.firstSingleLiveModuleId ?? null,
      firstSingleLiveWaveId: freezeReview.proven?.firstSingleLiveWaveId ?? null,
      secondSingleLiveModuleId: freezeReview.proven?.secondSingleLiveModuleId ?? null,
      secondSingleLiveWaveId: freezeReview.proven?.secondSingleLiveWaveId ?? null,
      thirdSingleLiveModuleId: freezeReview.proven?.thirdSingleLiveModuleId ?? null,
      thirdSingleLiveWaveId: freezeReview.proven?.thirdSingleLiveWaveId ?? null,
      firstMicroBatchWaveId: freezeReview.proven?.firstMicroBatchWaveId ?? null,
      plannedModuleId: freezeReview.plannedCandidate?.moduleId ?? null,
      plannedWaveId: freezeReview.plannedCandidate?.waveId ?? null,
    },
    decision: {
      nextApprovedAction: 'composer-fourth-dedicated-no-op-runtime-plan',
      approvedCandidateOnly: 'out-build/vs/workbench/contrib/composer/browser/composerFileChangeHandlerTypes.js',
      reviewChangesLaneFrozen: deepZoneAdmission.decision?.reviewChangesLaneClosed === true,
      broadBrowserHeld: deepZoneAdmission.decision?.browserLaneHeld === true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    allowedNow: [
      'composer fourth candidate admission artifacts',
      'composer fourth dedicated no-op runtime planning only',
      'composer-specific diagnostics refinement',
    ],
    blockedNow: [
      'composer fourth candidate live execution',
      'composer wider batch expansion',
      'new reviewChanges browser surface expansion',
      'cross-lane expansion',
      'rename-driven work',
    ],
    stopConditions: [
      'do not discuss DC4L until DC4A dedicated no-op runtime gate completes',
      'do not reopen reviewChanges or browser lane expansion while composer continuation is still in candidate-only planning',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

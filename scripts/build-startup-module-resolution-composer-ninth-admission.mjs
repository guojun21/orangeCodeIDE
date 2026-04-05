#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const COMPOSER_LANE_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-lane-freeze-review.json');
const DEEP_ZONE_ADMISSION_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-deep-zone-admission.json');
const DEEP_ZONE_CANARY_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-deep-zone-canary-plan.json');
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-ninth-admission.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const laneFreezeReview = readJson(COMPOSER_LANE_FREEZE_REVIEW_PATH);
  const deepZoneAdmission = readJson(DEEP_ZONE_ADMISSION_PATH);
  const deepZoneCanary = readJson(DEEP_ZONE_CANARY_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);

  const moduleId = 'out-build/vs/workbench/contrib/composer/browser/capabilities/serializeToolformerBubbleData.js';
  const sourceFile = 'rebuilt/src/project-modules-beautified/out-build/vs/workbench/contrib/composer/browser/capabilities/serializeToolformerBubbleData.js';
  const runtimeInputFile = 'recovered/startup-loader/input/out-build/vs/workbench/contrib/composer/browser/capabilities/serializeToolformerBubbleData.js';

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-composer',
    phase: 'ninth-admission',
    sources: {
      composerLaneFreezeReview: normalizePath(path.relative(ROOT, COMPOSER_LANE_FREEZE_REVIEW_PATH)),
      deepZoneAdmission: normalizePath(path.relative(ROOT, DEEP_ZONE_ADMISSION_PATH)),
      deepZoneCanary: normalizePath(path.relative(ROOT, DEEP_ZONE_CANARY_PATH)),
      accept: normalizePath(path.relative(ROOT, ACCEPT_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    approvedCandidate: {
      waveId: 'DC9A',
      moduleId,
      sourceFile,
      runtimeInputFile,
      rationale: [
        'tiny composer browser capability serializer surface is now the next smallest remaining staged composer candidate after eight single-live waves',
        'stays below widget or render surface and remains planning-only at admission time even though it sits inside browser capabilities',
        'source and startup-loader input already exist and remain byte-for-byte auditable before dedicated runtime',
        'deep-zone canary ranking now places serializeToolformerBubbleData.js first once browserViewStore.js is frozen into the proven set',
      ],
      riskClass: 'capability-serializer-planning-only',
    },
    currentState: {
      laneState: laneFreezeReview.decision?.laneState ?? null,
      laneContinuationAllowed: laneFreezeReview.decision?.composerLaneContinuationAllowed === true,
      lanePromotionEligible: laneFreezeReview.currentState?.lanePromotionEligible === true,
      stableRuntimeStillGreen: laneFreezeReview.currentState?.stableRuntimeStillGreen === true,
      latestAcceptAt: accept.generatedAt ?? null,
      deepZoneNextExecutableStep: deepZoneAdmission.decision?.nextExecutableStep ?? null,
      deepZoneCurrentCandidate: deepZoneCanary.currentRecommendation?.nextCandidateId ?? null,
    },
    blockedNow: [
      'composer ninth live execution',
      'composer wider batch expansion',
      'new reviewChanges browser surface expansion',
      'cross-lane expansion',
      'rename-driven work',
    ],
    decision: {
      admissionReady: true,
      executionStillPending: true,
      approvedWaveId: 'DC9A',
      nextApprovedAction: 'composer-ninth-dedicated-no-op-runtime-plan',
      runtimeGatePlannedInThisPhase: false,
      livePlannedInThisPhase: false,
      reviewChangesLaneFrozen: true,
      broadBrowserStillHeld: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

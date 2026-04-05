#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const COMPOSER_LANE_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-lane-freeze-review.json');
const DEEP_ZONE_ADMISSION_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-deep-zone-admission.json');
const DEEP_ZONE_CANARY_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-deep-zone-canary-plan.json');
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-eighth-admission.json');

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

  const moduleId = 'out-build/vs/workbench/contrib/composer/browser/browserViewStore.js';
  const sourceFile = 'rebuilt/src/project-modules-beautified/out-build/vs/workbench/contrib/composer/browser/browserViewStore.js';
  const runtimeInputFile = 'recovered/startup-loader/input/out-build/vs/workbench/contrib/composer/browser/browserViewStore.js';

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-composer',
    phase: 'eighth-admission',
    sources: {
      composerLaneFreezeReview: normalizePath(path.relative(ROOT, COMPOSER_LANE_FREEZE_REVIEW_PATH)),
      deepZoneAdmission: normalizePath(path.relative(ROOT, DEEP_ZONE_ADMISSION_PATH)),
      deepZoneCanary: normalizePath(path.relative(ROOT, DEEP_ZONE_CANARY_PATH)),
      accept: normalizePath(path.relative(ROOT, ACCEPT_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    approvedCandidate: {
      waveId: 'DC8A',
      moduleId,
      sourceFile,
      runtimeInputFile,
      rationale: [
        'browser-side view state store is now the smallest remaining non-renderer composer browser surface after seven single-live waves',
        'it is a keyed store token rather than a DOM-touching component, so candidate planning can stay narrow and store-scoped',
        'source and startup-loader input are identical and trivially auditable before dedicated runtime',
        'composer continuation now steps from blob storage into browser view state registration without widening to widget or component rendering',
      ],
      riskClass: 'browser-view-store-token-planning-only',
    },
    currentState: {
      laneState: laneFreezeReview.decision?.laneState ?? null,
      laneContinuationAllowed: laneFreezeReview.decision?.composerLaneContinuationAllowed === true,
      lanePromotionEligible: laneFreezeReview.currentState?.lanePromotionEligible === true,
      stableRuntimeStillGreen: laneFreezeReview.currentState?.stableRuntimeStillGreen === true,
      latestAcceptAt: accept.generatedAt ?? null,
      latestQualityAt: quality.generatedAt ?? null,
      deepZoneNextExecutableStep: deepZoneAdmission.decision?.nextExecutableStep ?? null,
      deepZoneCurrentCandidate: deepZoneCanary.currentRecommendation?.nextCandidateId ?? null,
    },
    blockedNow: [
      'composer eighth live execution',
      'composer wider batch expansion',
      'new reviewChanges browser surface expansion',
      'cross-lane expansion',
      'rename-driven work',
    ],
    decision: {
      admissionReady: true,
      executionStillPending: true,
      approvedWaveId: 'DC8A',
      nextApprovedAction: 'composer-eighth-dedicated-no-op-runtime-plan',
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

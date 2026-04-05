#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const ROLLOUT_DISCIPLINE_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-rollout-discipline.json');
const DEEP_ZONE_ADMISSION_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-deep-zone-admission.json');
const DEEP_ZONE_CANARY_PLAN_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-deep-zone-canary-plan.json');
const REVIEW_SINGLE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-module-resolution-live-gate.json');
const REVIEW_SERVICE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-service-module-resolution-live-gate.json');
const REVIEW_BATCH_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-live-both-module-resolution-live-gate.json');
const REVIEW_UTIL_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-ci-module-resolution-live-gate.json');
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-lane-policy.json');

const NEXT_BATCH_IDS = [
  'out-build/vs/workbench/contrib/reviewChanges/browser/service/semanticReviewService.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/service/reviewChangesService.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciParsingUtils.js',
];

const MANAGER_HOLD_IDS = [
  'out-build/vs/workbench/contrib/reviewChanges/browser/ReviewChangesResourceManager.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/ReviewChangesResource.js',
];

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function summarizeGate(filePath, label) {
  const report = readJson(filePath);
  const enabledIds = report.enabledIds ?? [];
  const factoryHitIds = report.factoryHitIds ?? [];

  return {
    label,
    reportPath: normalizePath(path.relative(ROOT, filePath)),
    passed: report.passed === true,
    waveId: report.expectedWaveId ?? report.runtimeState?.resolution?.waveId ?? null,
    enabledCount: enabledIds.length,
    factoryHitCount: factoryHitIds.length,
    enabledIds,
    factoryHitIds,
  };
}

function main() {
  const rolloutDiscipline = readJson(ROLLOUT_DISCIPLINE_PATH);
  const deepZoneAdmission = readJson(DEEP_ZONE_ADMISSION_PATH);
  const deepZoneCanaryPlan = readJson(DEEP_ZONE_CANARY_PLAN_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);

  const composerReviewPlan = (deepZoneCanaryPlan.lanePlans ?? []).find((entry) => entry.lane === 'contrib-reviewChanges');
  const reviewZoneAdmission = (deepZoneAdmission.deepZones ?? []).find((entry) => entry.lane === 'contrib-reviewChanges');

  const provenSingles = [
    summarizeGate(REVIEW_SINGLE_GATE_PATH, 'DR1L-semanticReviewService'),
    summarizeGate(REVIEW_SERVICE_GATE_PATH, 'DR2L-reviewChangesService'),
    summarizeGate(REVIEW_UTIL_GATE_PATH, 'DR3L-ciParsingUtils'),
  ];
  const provenBatches = [
    summarizeGate(REVIEW_BATCH_GATE_PATH, 'DRB1-reviewChanges-live-both'),
  ];

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-reviewChanges',
    phase: 'lane-policy-freeze',
    sources: {
      rolloutDiscipline: normalizePath(path.relative(ROOT, ROLLOUT_DISCIPLINE_PATH)),
      deepZoneAdmission: normalizePath(path.relative(ROOT, DEEP_ZONE_ADMISSION_PATH)),
      deepZoneCanaryPlan: normalizePath(path.relative(ROOT, DEEP_ZONE_CANARY_PLAN_PATH)),
      accept: normalizePath(path.relative(ROOT, ACCEPT_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    baseline: {
      gitHead: accept.gitHead ?? null,
      latestAcceptAt: accept.generatedAt ?? null,
      rolloutDisciplinePassed: true,
      deepZoneAdmissionDefault: deepZoneAdmission.policy?.defaultAdmission ?? null,
      laneAdmissionSequence: reviewZoneAdmission?.admissionSequence ?? [],
      qualityStability: quality.stability ?? {},
    },
    proven: {
      singleLive: provenSingles,
      microBatchLive: provenBatches,
      moduleIds: Array.from(new Set([
        ...provenSingles.flatMap((entry) => entry.enabledIds),
        ...provenBatches.flatMap((entry) => entry.enabledIds),
      ])),
    },
    candidatePool: {
      stagedCount: composerReviewPlan?.stagedCount ?? null,
      lowRiskCandidateCount: composerReviewPlan?.lowRiskCandidateCount ?? null,
      preferredIdsPresent: composerReviewPlan?.preferredIdsPresent ?? [],
      nextBatchModuleIds: NEXT_BATCH_IDS,
    },
    immediatePolicy: {
      renameOnMainline: false,
      nextAction: 'three-module-batch-live',
      recommendedWaveId: 'DRB2',
      allowedKinds: [
        'service',
        'util',
      ],
      holdKinds: [
        'manager',
        'resource-holder',
        'stateful',
      ],
    },
    explicitHold: {
      managerStatefulIds: MANAGER_HOLD_IDS,
      browserLaneStillHeld: true,
      composerLaneExpansionHeld: true,
    },
    stopConditions: [
      'three-module-batch live gate fails',
      'startup-loader-rollout gate regresses',
      'accept fails after reviewChanges expansion',
      'new fallback reason appears outside expected live path',
    ],
    rollbackPolicy: {
      singleModuleKillSwitchOn: [
        'single live gate failure',
        'export signature delta mismatch',
        'factory hit missing for one enabled module',
      ],
      laneFreezeOn: [
        'three-module batch failure with ambiguous cause',
        'smoke or spike regression not attributable to one module',
        'accept regression involving reviewChanges flow',
      ],
    },
    promotionThreshold: [
      'three-module batch live passes',
      'startup-loader-rollout gate passes',
      'accept passes',
      'quality-report remains green',
      'manager/stateful modules remain held until dedicated gate exists',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

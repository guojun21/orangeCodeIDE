#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const COMPOSER_SINGLE_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-module-resolution-live-gate.json');
const COMPOSER_CONTEXT_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-context-module-resolution-live-gate.json');
const COMPOSER_BATCH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-live-both-module-resolution-live-gate.json');
const THIRD_ADMISSION_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-third-admission.json');
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-third-freeze-review.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const composerSingleLiveGate = readJson(COMPOSER_SINGLE_LIVE_GATE_PATH);
  const composerContextLiveGate = readJson(COMPOSER_CONTEXT_LIVE_GATE_PATH);
  const composerBatchLiveGate = readJson(COMPOSER_BATCH_LIVE_GATE_PATH);
  const thirdAdmission = readJson(THIRD_ADMISSION_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-composer',
    phase: 'third-candidate-freeze-review',
    sources: {
      composerSingleLiveGate: normalizePath(path.relative(ROOT, COMPOSER_SINGLE_LIVE_GATE_PATH)),
      composerContextLiveGate: normalizePath(path.relative(ROOT, COMPOSER_CONTEXT_LIVE_GATE_PATH)),
      composerBatchLiveGate: normalizePath(path.relative(ROOT, COMPOSER_BATCH_LIVE_GATE_PATH)),
      thirdAdmission: normalizePath(path.relative(ROOT, THIRD_ADMISSION_PATH)),
      accept: normalizePath(path.relative(ROOT, ACCEPT_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    baseline: {
      latestAcceptAt: accept.generatedAt ?? null,
      stableRuntimeStillGreen:
        quality.stability?.headlessVerifyPassed === true
        && quality.stability?.acceptRecorded === true
        && quality.stability?.startupLoaderRolloutGatePassed === true
        && quality.stability?.startupModuleResolutionDeepZoneAdmissionPassed === true,
    },
    proven: {
      firstSingleLiveModuleId: composerSingleLiveGate.enabledIds?.[0] ?? null,
      firstSingleLiveWaveId: composerSingleLiveGate.expectedWaveId ?? null,
      secondSingleLiveModuleId: composerContextLiveGate.enabledIds?.[0] ?? null,
      secondSingleLiveWaveId: composerContextLiveGate.expectedWaveId ?? null,
      firstMicroBatchWaveId: composerBatchLiveGate.expectedWaveId ?? null,
      firstMicroBatchModuleIds: composerBatchLiveGate.enabledIds ?? [],
    },
    plannedCandidate: {
      moduleId: thirdAdmission.approvedCandidate?.moduleId ?? null,
      waveId: thirdAdmission.approvedCandidate?.waveId ?? null,
      riskClass: thirdAdmission.approvedCandidate?.riskClass ?? null,
      runnerUps: (thirdAdmission.runnerUps ?? []).map((entry) => entry.moduleId),
    },
    decision: {
      laneFrozen: true,
      laneState: 'contrib-composer-two-single-live-one-micro-batch-third-candidate-planned',
      nextApprovedStep: 'composer-third-next-step-lock',
      thirdCandidatePlannedOnly: true,
      reviewChangesLaneStillFrozen: true,
      broadBrowserStillHeld: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    blockedNow: [
      'composer third candidate live execution',
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

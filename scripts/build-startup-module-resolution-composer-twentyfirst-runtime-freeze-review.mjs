#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const ELEVENTH_ADMISSION_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-twentyfirst-admission.json');
const ELEVENTH_RUNTIME_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-twentyfirst-module-resolution-runtime-gate.json');
const COMPOSER_SINGLE_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-module-resolution-live-gate.json');
const COMPOSER_CONTEXT_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-context-module-resolution-live-gate.json');
const COMPOSER_BATCH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-live-both-module-resolution-live-gate.json');
const COMPOSER_THIRD_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-third-module-resolution-live-gate.json');
const COMPOSER_FOURTH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-fourth-module-resolution-live-gate.json');
const COMPOSER_FIFTH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-fifth-module-resolution-live-gate.json');
const COMPOSER_SIXTH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-sixth-module-resolution-live-gate.json');
const COMPOSER_SEVENTH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-seventh-module-resolution-live-gate.json');
const COMPOSER_EIGHTH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-eighth-module-resolution-live-gate.json');
const COMPOSER_NINTH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-ninth-module-resolution-live-gate.json');
const COMPOSER_TENTH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-tenth-module-resolution-live-gate.json');
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-twentyfirst-runtime-freeze-review.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const twentyfirstAdmission = readJson(ELEVENTH_ADMISSION_PATH);
  const twentyfirstRuntimeGate = readJson(ELEVENTH_RUNTIME_GATE_PATH);
  const composerSingleLiveGate = readJson(COMPOSER_SINGLE_LIVE_GATE_PATH);
  const composerContextLiveGate = readJson(COMPOSER_CONTEXT_LIVE_GATE_PATH);
  const composerBatchLiveGate = readJson(COMPOSER_BATCH_LIVE_GATE_PATH);
  const composerThirdLiveGate = readJson(COMPOSER_THIRD_LIVE_GATE_PATH);
  const composerFourthLiveGate = readJson(COMPOSER_FOURTH_LIVE_GATE_PATH);
  const composerFifthLiveGate = readJson(COMPOSER_FIFTH_LIVE_GATE_PATH);
  const composerSixthLiveGate = readJson(COMPOSER_SIXTH_LIVE_GATE_PATH);
  const composerSeventhLiveGate = readJson(COMPOSER_SEVENTH_LIVE_GATE_PATH);
  const composerEighthLiveGate = readJson(COMPOSER_EIGHTH_LIVE_GATE_PATH);
  const composerNinthLiveGate = readJson(COMPOSER_NINTH_LIVE_GATE_PATH);
  const composerTenthLiveGate = readJson(COMPOSER_TENTH_LIVE_GATE_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);

  const runtimeResult = twentyfirstRuntimeGate.runtimeState?.resolution?.results?.[0]?.result ?? null;
  const diagnostics = twentyfirstRuntimeGate.runtimeState?.resolution?.diagnostics ?? null;

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-composer',
    phase: 'twentyfirst-runtime-freeze-review',
    sources: {
      twentyfirstAdmission: normalizePath(path.relative(ROOT, ELEVENTH_ADMISSION_PATH)),
      twentyfirstRuntimeGate: normalizePath(path.relative(ROOT, ELEVENTH_RUNTIME_GATE_PATH)),
      composerSingleLiveGate: normalizePath(path.relative(ROOT, COMPOSER_SINGLE_LIVE_GATE_PATH)),
      composerContextLiveGate: normalizePath(path.relative(ROOT, COMPOSER_CONTEXT_LIVE_GATE_PATH)),
      composerBatchLiveGate: normalizePath(path.relative(ROOT, COMPOSER_BATCH_LIVE_GATE_PATH)),
      composerThirdLiveGate: normalizePath(path.relative(ROOT, COMPOSER_THIRD_LIVE_GATE_PATH)),
      composerFourthLiveGate: normalizePath(path.relative(ROOT, COMPOSER_FOURTH_LIVE_GATE_PATH)),
      composerFifthLiveGate: normalizePath(path.relative(ROOT, COMPOSER_FIFTH_LIVE_GATE_PATH)),
      composerSixthLiveGate: normalizePath(path.relative(ROOT, COMPOSER_SIXTH_LIVE_GATE_PATH)),
      composerSeventhLiveGate: normalizePath(path.relative(ROOT, COMPOSER_SEVENTH_LIVE_GATE_PATH)),
      composerEighthLiveGate: normalizePath(path.relative(ROOT, COMPOSER_EIGHTH_LIVE_GATE_PATH)),
      composerNinthLiveGate: normalizePath(path.relative(ROOT, COMPOSER_NINTH_LIVE_GATE_PATH)),
      composerTenthLiveGate: normalizePath(path.relative(ROOT, COMPOSER_TENTH_LIVE_GATE_PATH)),
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
      thirdSingleLiveModuleId: composerThirdLiveGate.enabledIds?.[0] ?? null,
      thirdSingleLiveWaveId: composerThirdLiveGate.expectedWaveId ?? null,
      fourthSingleLiveModuleId: composerFourthLiveGate.enabledIds?.[0] ?? null,
      fourthSingleLiveWaveId: composerFourthLiveGate.expectedWaveId ?? null,
      fifthSingleLiveModuleId: composerFifthLiveGate.enabledIds?.[0] ?? null,
      fifthSingleLiveWaveId: composerFifthLiveGate.expectedWaveId ?? null,
      sixthSingleLiveModuleId: composerSixthLiveGate.enabledIds?.[0] ?? null,
      sixthSingleLiveWaveId: composerSixthLiveGate.expectedWaveId ?? null,
      seventhSingleLiveModuleId: composerSeventhLiveGate.enabledIds?.[0] ?? null,
      seventhSingleLiveWaveId: composerSeventhLiveGate.expectedWaveId ?? null,
      eighthSingleLiveModuleId: composerEighthLiveGate.enabledIds?.[0] ?? null,
      eighthSingleLiveWaveId: composerEighthLiveGate.expectedWaveId ?? null,
      ninthSingleLiveModuleId: composerNinthLiveGate.enabledIds?.[0] ?? null,
      ninthSingleLiveWaveId: composerNinthLiveGate.expectedWaveId ?? null,
      tenthSingleLiveModuleId: composerTenthLiveGate.enabledIds?.[0] ?? null,
      tenthSingleLiveWaveId: composerTenthLiveGate.expectedWaveId ?? null,
      firstMicroBatchWaveId: composerBatchLiveGate.expectedWaveId ?? null,
      firstMicroBatchModuleIds: composerBatchLiveGate.enabledIds ?? [],
    },
    twentyfirstNoOp: {
      moduleId: twentyfirstAdmission.approvedCandidate?.moduleId ?? null,
      waveId: twentyfirstRuntimeGate.expectedWaveId ?? null,
      mode: twentyfirstRuntimeGate.runtimeState?.resolution?.mode ?? null,
      canaryCount: twentyfirstRuntimeGate.runtimeState?.resolution?.canaryCount ?? null,
      result: runtimeResult?.result ?? null,
      fallbackReason: runtimeResult?.fallbackReason ?? null,
      originalPassCount: diagnostics?.counters?.originalPassCount ?? null,
      overlayHitCount: diagnostics?.counters?.overlayHitCount ?? null,
      stickyDisabledCount: diagnostics?.counters?.stickyDisabledCount ?? null,
    },
    decision: {
      laneFrozen: true,
      laneState: 'contrib-composer-eleven-single-live-one-micro-batch-twentyfirst-no-op-proven',
      nextApprovedStep: 'composer-twentyfirst-runtime-next-step-lock',
      twentyfirstNoOpProvenOnly: true,
      twentyfirstLiveStillBlocked: true,
      reviewChangesLaneStillFrozen: true,
      broadBrowserStillHeld: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    blockedNow: [
      'composer twentyfirst live execution before admission',
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

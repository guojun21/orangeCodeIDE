#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const ELEVENTH_RUNTIME_NEXT_STEP_LOCK_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-twelfth-runtime-next-step-lock.json');
const ELEVENTH_RUNTIME_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-twelfth-runtime-freeze-review.json');
const ELEVENTH_RUNTIME_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-twelfth-module-resolution-runtime-gate.json');
const ELEVENTH_ADMISSION_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-twelfth-admission.json');
const COMPOSER_SINGLE_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-module-resolution-live-gate.json');
const COMPOSER_CONTEXT_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-context-module-resolution-live-gate.json');
const COMPOSER_THIRD_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-third-module-resolution-live-gate.json');
const COMPOSER_FOURTH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-fourth-module-resolution-live-gate.json');
const COMPOSER_FIFTH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-fifth-module-resolution-live-gate.json');
const COMPOSER_SIXTH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-sixth-module-resolution-live-gate.json');
const COMPOSER_SEVENTH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-seventh-module-resolution-live-gate.json');
const COMPOSER_EIGHTH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-eighth-module-resolution-live-gate.json');
const COMPOSER_NINTH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-ninth-module-resolution-live-gate.json');
const COMPOSER_TENTH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-tenth-module-resolution-live-gate.json');
const COMPOSER_BATCH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-live-both-module-resolution-live-gate.json');
const SPIKE_PATH = path.join(ROOT, 'mapped', 'workbench-desktop-main-spike-check.json');
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-twelfth-live-admission-plan.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const twelfthRuntimeLock = readJson(ELEVENTH_RUNTIME_NEXT_STEP_LOCK_PATH);
  const twelfthRuntimeFreeze = readJson(ELEVENTH_RUNTIME_FREEZE_REVIEW_PATH);
  const twelfthRuntimeGate = readJson(ELEVENTH_RUNTIME_GATE_PATH);
  const twelfthAdmission = readJson(ELEVENTH_ADMISSION_PATH);
  const composerSingleLiveGate = readJson(COMPOSER_SINGLE_LIVE_GATE_PATH);
  const composerContextLiveGate = readJson(COMPOSER_CONTEXT_LIVE_GATE_PATH);
  const composerThirdLiveGate = readJson(COMPOSER_THIRD_LIVE_GATE_PATH);
  const composerFourthLiveGate = readJson(COMPOSER_FOURTH_LIVE_GATE_PATH);
  const composerFifthLiveGate = readJson(COMPOSER_FIFTH_LIVE_GATE_PATH);
  const composerSixthLiveGate = readJson(COMPOSER_SIXTH_LIVE_GATE_PATH);
  const composerSeventhLiveGate = readJson(COMPOSER_SEVENTH_LIVE_GATE_PATH);
  const composerEighthLiveGate = readJson(COMPOSER_EIGHTH_LIVE_GATE_PATH);
  const composerNinthLiveGate = readJson(COMPOSER_NINTH_LIVE_GATE_PATH);
  const composerTenthLiveGate = readJson(COMPOSER_TENTH_LIVE_GATE_PATH);
  const composerBatchLiveGate = readJson(COMPOSER_BATCH_LIVE_GATE_PATH);
  const spike = readJson(SPIKE_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);

  const moduleId = twelfthAdmission.approvedCandidate?.moduleId ?? null;
  const sourceFile = twelfthAdmission.approvedCandidate?.sourceFile ?? null;
  const runtimeInputFile = twelfthAdmission.approvedCandidate?.runtimeInputFile ?? null;

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-composer',
    phase: 'twelfth-live-admission-plan',
    sources: {
      twelfthRuntimeNextStepLock: normalizePath(path.relative(ROOT, ELEVENTH_RUNTIME_NEXT_STEP_LOCK_PATH)),
      twelfthRuntimeFreezeReview: normalizePath(path.relative(ROOT, ELEVENTH_RUNTIME_FREEZE_REVIEW_PATH)),
      twelfthRuntimeGate: normalizePath(path.relative(ROOT, ELEVENTH_RUNTIME_GATE_PATH)),
      twelfthAdmission: normalizePath(path.relative(ROOT, ELEVENTH_ADMISSION_PATH)),
      firstSingleLiveGate: normalizePath(path.relative(ROOT, COMPOSER_SINGLE_LIVE_GATE_PATH)),
      secondSingleLiveGate: normalizePath(path.relative(ROOT, COMPOSER_CONTEXT_LIVE_GATE_PATH)),
      thirdSingleLiveGate: normalizePath(path.relative(ROOT, COMPOSER_THIRD_LIVE_GATE_PATH)),
      fourthSingleLiveGate: normalizePath(path.relative(ROOT, COMPOSER_FOURTH_LIVE_GATE_PATH)),
      fifthSingleLiveGate: normalizePath(path.relative(ROOT, COMPOSER_FIFTH_LIVE_GATE_PATH)),
      sixthSingleLiveGate: normalizePath(path.relative(ROOT, COMPOSER_SIXTH_LIVE_GATE_PATH)),
      seventhSingleLiveGate: normalizePath(path.relative(ROOT, COMPOSER_SEVENTH_LIVE_GATE_PATH)),
      eighthSingleLiveGate: normalizePath(path.relative(ROOT, COMPOSER_EIGHTH_LIVE_GATE_PATH)),
      ninthSingleLiveGate: normalizePath(path.relative(ROOT, COMPOSER_NINTH_LIVE_GATE_PATH)),
      tenthSingleLiveGate: normalizePath(path.relative(ROOT, COMPOSER_TENTH_LIVE_GATE_PATH)),
      firstMicroBatchGate: normalizePath(path.relative(ROOT, COMPOSER_BATCH_LIVE_GATE_PATH)),
      spike: normalizePath(path.relative(ROOT, SPIKE_PATH)),
      accept: normalizePath(path.relative(ROOT, ACCEPT_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    candidate: {
      waveId: 'DC12L',
      moduleId,
      sourceFile,
      runtimeInputFile,
      rationale: [
        'browserAnalytics.js is the next narrow composer browser analytics candidate after composerDataCreation.js is frozen into the proven set',
        'it stays in a narrow browser analytics and URL-state boundary rather than dropping directly into widget or render execution',
        'source and startup-loader input remain aligned after DC12 dedicated no-op runtime freeze',
        'runner-ups still fan out into broader browser surface, storage, agent coordination, or editor state than browserAnalytics.js',
      ],
      liveShape: 'single-module-live',
    },
    prerequisites: {
      twelfthNoOpPassed: twelfthRuntimeGate.passed === true,
      twelfthNoOpWaveId: twelfthRuntimeGate.expectedWaveId ?? null,
      firstSingleLiveStillProven: composerSingleLiveGate.passed === true && composerSingleLiveGate.expectedWaveId === 'DC1',
      secondSingleLiveStillProven: composerContextLiveGate.passed === true && composerContextLiveGate.expectedWaveId === 'DC2',
      thirdSingleLiveStillProven: composerThirdLiveGate.passed === true && composerThirdLiveGate.expectedWaveId === 'DC3L',
      fourthSingleLiveStillProven: composerFourthLiveGate.passed === true && composerFourthLiveGate.expectedWaveId === 'DC4L',
      fifthSingleLiveStillProven: composerFifthLiveGate.passed === true && composerFifthLiveGate.expectedWaveId === 'DC5L',
      sixthSingleLiveStillProven: composerSixthLiveGate.passed === true && composerSixthLiveGate.expectedWaveId === 'DC6L',
      seventhSingleLiveStillProven: composerSeventhLiveGate.passed === true && composerSeventhLiveGate.expectedWaveId === 'DC7L',
      eighthSingleLiveStillProven: composerEighthLiveGate.passed === true && composerEighthLiveGate.expectedWaveId === 'DC8L',
      ninthSingleLiveStillProven: composerNinthLiveGate.passed === true && composerNinthLiveGate.expectedWaveId === 'DC9L',
      tenthSingleLiveStillProven: composerTenthLiveGate.passed === true && composerTenthLiveGate.expectedWaveId === 'DC10L',
      firstMicroBatchStillProven: composerBatchLiveGate.passed === true && composerBatchLiveGate.expectedWaveId === 'DCB1',
      stableSpikeStillGreen: spike.passed === true,
      stableRuntimeStillGreen:
        quality.stability?.headlessVerifyPassed === true
        && quality.stability?.acceptRecorded === true
        && quality.stability?.startupLoaderRuntimeGatePassed === true
        && quality.stability?.startupLoaderRolloutGatePassed === true,
      latestAcceptAt: accept.generatedAt ?? null,
      reviewChangesLaneStillFrozen: twelfthRuntimeLock.decision?.reviewChangesLaneFrozen === true,
      broadBrowserStillHeld: twelfthRuntimeLock.decision?.broadBrowserHeld === true,
    },
    blockedSurfaces: [
      'composer wider batch expansion',
      'composer browser widget or renderer expansion',
      'new reviewChanges browser surface expansion',
      'cross-lane expansion',
      'rename-driven work',
    ],
    requiredBeforeLive: [
      'build DC12L live contract',
      'run composer-twelfth export-delta gate',
      'run composer-twelfth fallback preflight',
      'run composer-twelfth sticky-disable preflight',
      'apply wrapper patch',
      'run live gate',
      'run smoke',
      'run workbench-desktop-main spike',
      'run accept',
      'run quality-report',
    ],
    decision: {
      admissionPlanReady: true,
      executionStillPending: true,
      nextApprovedAction: 'composer-twelfth-live-contract',
      nextApprovedWaveId: 'DC12L',
      widerBatchExpansionStillBlocked: true,
    },
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

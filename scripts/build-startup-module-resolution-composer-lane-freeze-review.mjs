#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const SEVENTEENTH_LIVE_EXECUTION_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-seventeenth-live-execution-freeze-review.json');
const SEVENTEENTH_LIVE_EXECUTION_NEXT_STEP_LOCK_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-seventeenth-live-execution-next-step-lock.json');
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
const COMPOSER_ELEVENTH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-eleventh-module-resolution-live-gate.json');
const COMPOSER_TWELFTH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-twelfth-module-resolution-live-gate.json');
const COMPOSER_THIRTEENTH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-thirteenth-module-resolution-live-gate.json');
const COMPOSER_FOURTEENTH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-fourteenth-module-resolution-live-gate.json');
const COMPOSER_FIFTEENTH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-fifteenth-module-resolution-live-gate.json');
const COMPOSER_SIXTEENTH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-sixteenth-module-resolution-live-gate.json');
const COMPOSER_SEVENTEENTH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-seventeenth-module-resolution-live-gate.json');
const COMPOSER_EIGHTEENTH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-eighteenth-module-resolution-live-gate.json');
const COMPOSER_NINETEENTH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-nineteenth-module-resolution-live-gate.json');
const COMPOSER_TWENTIETH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-twentieth-module-resolution-live-gate.json');
const COMPOSER_TWENTYFIRST_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-twentyfirst-module-resolution-live-gate.json');
const COMPOSER_TWENTYSECOND_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-twentysecond-module-resolution-live-gate.json');
const COMPOSER_TWENTYTHIRD_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-twentythird-module-resolution-live-gate.json');
const COMPOSER_TWENTYFOURTH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-twentyfourth-module-resolution-live-gate.json');
const COMPOSER_TWENTYFIFTH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-twentyfifth-module-resolution-live-gate.json');
const COMPOSER_TWENTYSIXTH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-twentysixth-module-resolution-live-gate.json');
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-lane-freeze-review.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const seventeenthLiveExecutionFreezeReview = readJson(SEVENTEENTH_LIVE_EXECUTION_FREEZE_REVIEW_PATH);
  const seventeenthLiveExecutionNextStepLock = readJson(SEVENTEENTH_LIVE_EXECUTION_NEXT_STEP_LOCK_PATH);
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
  const composerEleventhLiveGate = readJson(COMPOSER_ELEVENTH_LIVE_GATE_PATH);
  const composerTwelfthLiveGate = readJson(COMPOSER_TWELFTH_LIVE_GATE_PATH);
  const composerThirteenthLiveGate = readJson(COMPOSER_THIRTEENTH_LIVE_GATE_PATH);
  const composerFourteenthLiveGate = readJson(COMPOSER_FOURTEENTH_LIVE_GATE_PATH);
  const composerFifteenthLiveGate = readJson(COMPOSER_FIFTEENTH_LIVE_GATE_PATH);
  const composerSixteenthLiveGate = readJson(COMPOSER_SIXTEENTH_LIVE_GATE_PATH);
  const composerSeventeenthLiveGate = readJson(COMPOSER_SEVENTEENTH_LIVE_GATE_PATH);
  const composerEighteenthLiveGate = readJson(COMPOSER_EIGHTEENTH_LIVE_GATE_PATH);
  const composerNineteenthLiveGate = readJson(COMPOSER_NINETEENTH_LIVE_GATE_PATH);
  const composerTwentiethLiveGate = readJson(COMPOSER_TWENTIETH_LIVE_GATE_PATH);
  const composerTwentyfirstLiveGate = readJson(COMPOSER_TWENTYFIRST_LIVE_GATE_PATH);
  const composerTwentysecondLiveGate = readJson(COMPOSER_TWENTYSECOND_LIVE_GATE_PATH);
  const composerTwentythirdLiveGate = readJson(COMPOSER_TWENTYTHIRD_LIVE_GATE_PATH);
  const composerTwentyfourthLiveGate = readJson(COMPOSER_TWENTYFOURTH_LIVE_GATE_PATH);
  const composerTwentyfifthLiveGate = readJson(COMPOSER_TWENTYFIFTH_LIVE_GATE_PATH);
  const composerTwentysixthLiveGate = readJson(COMPOSER_TWENTYSIXTH_LIVE_GATE_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-composer',
    sources: {
      seventeenthLiveExecutionFreezeReview: normalizePath(path.relative(ROOT, SEVENTEENTH_LIVE_EXECUTION_FREEZE_REVIEW_PATH)),
      seventeenthLiveExecutionNextStepLock: normalizePath(path.relative(ROOT, SEVENTEENTH_LIVE_EXECUTION_NEXT_STEP_LOCK_PATH)),
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
      composerEleventhLiveGate: normalizePath(path.relative(ROOT, COMPOSER_ELEVENTH_LIVE_GATE_PATH)),
      composerTwelfthLiveGate: normalizePath(path.relative(ROOT, COMPOSER_TWELFTH_LIVE_GATE_PATH)),
      composerThirteenthLiveGate: normalizePath(path.relative(ROOT, COMPOSER_THIRTEENTH_LIVE_GATE_PATH)),
      composerFourteenthLiveGate: normalizePath(path.relative(ROOT, COMPOSER_FOURTEENTH_LIVE_GATE_PATH)),
      composerFifteenthLiveGate: normalizePath(path.relative(ROOT, COMPOSER_FIFTEENTH_LIVE_GATE_PATH)),
      composerSixteenthLiveGate: normalizePath(path.relative(ROOT, COMPOSER_SIXTEENTH_LIVE_GATE_PATH)),
      composerSeventeenthLiveGate: normalizePath(path.relative(ROOT, COMPOSER_SEVENTEENTH_LIVE_GATE_PATH)),
      composerEighteenthLiveGate: normalizePath(path.relative(ROOT, COMPOSER_EIGHTEENTH_LIVE_GATE_PATH)),
      composerNineteenthLiveGate: normalizePath(path.relative(ROOT, COMPOSER_NINETEENTH_LIVE_GATE_PATH)),
      composerTwentiethLiveGate: normalizePath(path.relative(ROOT, COMPOSER_TWENTIETH_LIVE_GATE_PATH)),
      composerTwentyfirstLiveGate: normalizePath(path.relative(ROOT, COMPOSER_TWENTYFIRST_LIVE_GATE_PATH)),
      composerTwentysecondLiveGate: normalizePath(path.relative(ROOT, COMPOSER_TWENTYSECOND_LIVE_GATE_PATH)),
      composerTwentythirdLiveGate: normalizePath(path.relative(ROOT, COMPOSER_TWENTYTHIRD_LIVE_GATE_PATH)),
      composerTwentyfourthLiveGate: normalizePath(path.relative(ROOT, COMPOSER_TWENTYFOURTH_LIVE_GATE_PATH)),
      accept: normalizePath(path.relative(ROOT, ACCEPT_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    currentState: {
      lanePromotionEligible: seventeenthLiveExecutionNextStepLock.decision?.nextApprovedAction === 'composer-lane-freeze-review',
      widerBatchStillBlocked: seventeenthLiveExecutionNextStepLock.decision?.widerBatchDiscussionStillBlocked === true,
      firstSingleLive: {
        passed: composerSingleLiveGate.passed === true,
        enabledCount: composerSingleLiveGate.enabledIds?.length ?? 0,
        factoryHitCount: composerSingleLiveGate.factoryHitIds?.length ?? 0,
      },
      secondSingleLive: {
        passed: composerContextLiveGate.passed === true,
        enabledCount: composerContextLiveGate.enabledIds?.length ?? 0,
        factoryHitCount: composerContextLiveGate.factoryHitIds?.length ?? 0,
      },
      firstMicroBatch: {
        passed: composerBatchLiveGate.passed === true,
        enabledCount: composerBatchLiveGate.enabledIds?.length ?? 0,
        factoryHitCount: composerBatchLiveGate.factoryHitIds?.length ?? 0,
      },
      thirdSingleLive: {
        passed: composerThirdLiveGate.passed === true,
        enabledCount: composerThirdLiveGate.enabledIds?.length ?? 0,
        factoryHitCount: composerThirdLiveGate.factoryHitIds?.length ?? 0,
      },
      fourthSingleLive: {
        passed: composerFourthLiveGate.passed === true,
        enabledCount: composerFourthLiveGate.enabledIds?.length ?? 0,
        factoryHitCount: composerFourthLiveGate.factoryHitIds?.length ?? 0,
      },
      fifthSingleLive: {
        passed: composerFifthLiveGate.passed === true,
        enabledCount: composerFifthLiveGate.enabledIds?.length ?? 0,
        factoryHitCount: composerFifthLiveGate.factoryHitIds?.length ?? 0,
      },
      sixthSingleLive: {
        passed: composerSixthLiveGate.passed === true,
        enabledCount: composerSixthLiveGate.enabledIds?.length ?? 0,
        factoryHitCount: composerSixthLiveGate.factoryHitIds?.length ?? 0,
      },
      seventhSingleLive: {
        passed: composerSeventhLiveGate.passed === true,
        enabledCount: composerSeventhLiveGate.enabledIds?.length ?? 0,
        factoryHitCount: composerSeventhLiveGate.factoryHitIds?.length ?? 0,
      },
      eighthSingleLive: {
        passed: composerEighthLiveGate.passed === true,
        enabledCount: composerEighthLiveGate.enabledIds?.length ?? 0,
        factoryHitCount: composerEighthLiveGate.factoryHitIds?.length ?? 0,
      },
      ninthSingleLive: {
        passed: composerNinthLiveGate.passed === true,
        enabledCount: composerNinthLiveGate.enabledIds?.length ?? 0,
        factoryHitCount: composerNinthLiveGate.factoryHitIds?.length ?? 0,
      },
      tenthSingleLive: {
        passed: composerTenthLiveGate.passed === true,
        enabledCount: composerTenthLiveGate.enabledIds?.length ?? 0,
        factoryHitCount: composerTenthLiveGate.factoryHitIds?.length ?? 0,
      },
      eleventhSingleLive: {
        passed: composerEleventhLiveGate.passed === true,
        enabledCount: composerEleventhLiveGate.enabledIds?.length ?? 0,
        factoryHitCount: composerEleventhLiveGate.factoryHitIds?.length ?? 0,
      },
      twelfthSingleLive: {
        passed: composerTwelfthLiveGate.passed === true,
        enabledCount: composerTwelfthLiveGate.enabledIds?.length ?? 0,
        factoryHitCount: composerTwelfthLiveGate.factoryHitIds?.length ?? 0,
      },
      thirteenthSingleLive: {
        passed: composerThirteenthLiveGate.passed === true,
        enabledCount: composerThirteenthLiveGate.enabledIds?.length ?? 0,
        factoryHitCount: composerThirteenthLiveGate.factoryHitIds?.length ?? 0,
      },
      fourteenthSingleLive: {
        passed: composerFourteenthLiveGate.passed === true,
        enabledCount: composerFourteenthLiveGate.enabledIds?.length ?? 0,
        factoryHitCount: composerFourteenthLiveGate.factoryHitIds?.length ?? 0,
      },
      fifteenthSingleLive: {
        passed: composerFifteenthLiveGate.passed === true,
        enabledCount: composerFifteenthLiveGate.enabledIds?.length ?? 0,
        factoryHitCount: composerFifteenthLiveGate.factoryHitIds?.length ?? 0,
      },
      sixteenthSingleLive: {
        passed: composerSixteenthLiveGate.passed === true,
        enabledCount: composerSixteenthLiveGate.enabledIds?.length ?? 0,
        factoryHitCount: composerSixteenthLiveGate.factoryHitIds?.length ?? 0,
      },
      seventeenthSingleLive: {
        passed: composerSeventeenthLiveGate.passed === true,
        enabledCount: composerSeventeenthLiveGate.enabledIds?.length ?? 0,
        factoryHitCount: composerSeventeenthLiveGate.factoryHitIds?.length ?? 0,
      },
      eighteenthLiveBlocked: {
        passed: composerEighteenthLiveGate.passed === true,
        enabledCount: composerEighteenthLiveGate.enabledIds?.length ?? 0,
        factoryHitCount: composerEighteenthLiveGate.factoryHitIds?.length ?? 0,
        failedChecks: composerEighteenthLiveGate.failedChecks ?? [],
      },
      nineteenthSingleLive: {
        passed: composerNineteenthLiveGate.passed === true,
        enabledCount: composerNineteenthLiveGate.enabledIds?.length ?? 0,
        factoryHitCount: composerNineteenthLiveGate.factoryHitIds?.length ?? 0,
      },
      twentiethSingleLive: {
        passed: composerTwentiethLiveGate.passed === true,
        enabledCount: composerTwentiethLiveGate.enabledIds?.length ?? 0,
        factoryHitCount: composerTwentiethLiveGate.factoryHitIds?.length ?? 0,
      },
      twentyfirstLiveBlocked: {
        passed: false,
        enabledCount: composerTwentyfirstLiveGate.enabledIds?.length ?? 0,
        factoryHitCount: composerTwentyfirstLiveGate.factoryHitIds?.length ?? 0,
        blockedBy: 'accept:test-agent',
        failedChecks: [
          'composer ready timeout under DC21L live execution',
        ],
      },
      twentysecondSingleLive: {
        passed: composerTwentysecondLiveGate.passed === true,
        enabledCount: composerTwentysecondLiveGate.enabledIds?.length ?? 0,
        factoryHitCount: composerTwentysecondLiveGate.factoryHitIds?.length ?? 0,
      },
      twentythirdSingleLive: {
        passed: composerTwentythirdLiveGate.passed === true,
        enabledCount: composerTwentythirdLiveGate.enabledIds?.length ?? 0,
        factoryHitCount: composerTwentythirdLiveGate.factoryHitIds?.length ?? 0,
      },
      twentyfourthSingleLive: {
        passed: composerTwentyfourthLiveGate.passed === true,
        enabledCount: composerTwentyfourthLiveGate.enabledIds?.length ?? 0,
        factoryHitCount: composerTwentyfourthLiveGate.factoryHitIds?.length ?? 0,
      },
      twentyfifthSingleLive: {
        passed: composerTwentyfifthLiveGate.passed === true,
        enabledCount: composerTwentyfifthLiveGate.enabledIds?.length ?? 0,
        factoryHitCount: composerTwentyfifthLiveGate.factoryHitIds?.length ?? 0,
      },
      twentysixthSingleLive: {
        passed: composerTwentysixthLiveGate.passed === true,
        enabledCount: composerTwentysixthLiveGate.enabledIds?.length ?? 0,
        factoryHitCount: composerTwentysixthLiveGate.factoryHitIds?.length ?? 0,
      },
      latestAcceptAt: accept.generatedAt ?? null,
      stableRuntimeStillGreen:
        quality.stability?.headlessVerifyPassed === true
        && quality.stability?.acceptRecorded === true
        && quality.stability?.startupLoaderRuntimeGatePassed === true
        && quality.stability?.startupLoaderRolloutGatePassed === true
        && typeof seventeenthLiveExecutionFreezeReview.generatedAt === 'string',
    },
    decision: {
      laneFrozen: true,
      laneState: 'contrib-composer-lane-twentyfour-single-live-two-live-blocked-one-micro-batch-proven',
      nextApprovedStep: 'composer-twentyseventh-candidate-admission-plan',
      liveBlockedCandidates: [
        'out-build/vs/workbench/contrib/composer/browser/worktreeSetupRunner.js',
        'out-build/vs/workbench/contrib/composer/browser/composerTextModelService.js',
      ],
      composerLaneContinuationAllowed: true,
      widerBatchStillBlocked: true,
      reviewChangesLaneStillFrozen: true,
      broadBrowserStillHeld: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    guardrails: {
      allowedNow: [
        'composer lane-freeze review artifacts',
        'composer twentyseventh-candidate admission planning only',
        'composer-specific diagnostics refinement only if stability regresses',
      ],
      blockedNow: [
        'composer wider batch expansion',
        'new reviewChanges browser surface expansion',
        'broad browser expansion',
        'cross-lane execution without dedicated admission',
        'rename-driven work',
      ],
      unblockWiderBatchWhen: [
        'a separate composer twentyseventh-candidate path is frozen and proven',
        'current accept and quality stability remain green',
      ],
    },
    minimumWin: {
      definition: 'composer lane freeze review verify green with laneState fixed to contrib-composer-lane-twentyfour-single-live-two-live-blocked-one-micro-batch-proven',
      mustVerify: [
        'startup-module-resolution-composer-lane-freeze-review-verify.json',
      ],
    },
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const NINTH_RUNTIME_NEXT_STEP_LOCK_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-ninth-runtime-next-step-lock.json');
const NINTH_RUNTIME_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-ninth-runtime-freeze-review.json');
const NINTH_RUNTIME_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-ninth-module-resolution-runtime-gate.json');
const NINTH_ADMISSION_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-ninth-admission.json');
const COMPOSER_SINGLE_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-module-resolution-live-gate.json');
const COMPOSER_CONTEXT_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-context-module-resolution-live-gate.json');
const COMPOSER_THIRD_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-third-module-resolution-live-gate.json');
const COMPOSER_FOURTH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-fourth-module-resolution-live-gate.json');
const COMPOSER_FIFTH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-fifth-module-resolution-live-gate.json');
const COMPOSER_SIXTH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-sixth-module-resolution-live-gate.json');
const COMPOSER_SEVENTH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-seventh-module-resolution-live-gate.json');
const COMPOSER_EIGHTH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-eighth-module-resolution-live-gate.json');
const COMPOSER_BATCH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-live-both-module-resolution-live-gate.json');
const SPIKE_PATH = path.join(ROOT, 'mapped', 'workbench-desktop-main-spike-check.json');
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-ninth-live-admission-plan.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const ninthRuntimeLock = readJson(NINTH_RUNTIME_NEXT_STEP_LOCK_PATH);
  const ninthRuntimeFreeze = readJson(NINTH_RUNTIME_FREEZE_REVIEW_PATH);
  const ninthRuntimeGate = readJson(NINTH_RUNTIME_GATE_PATH);
  const ninthAdmission = readJson(NINTH_ADMISSION_PATH);
  const composerSingleLiveGate = readJson(COMPOSER_SINGLE_LIVE_GATE_PATH);
  const composerContextLiveGate = readJson(COMPOSER_CONTEXT_LIVE_GATE_PATH);
  const composerThirdLiveGate = readJson(COMPOSER_THIRD_LIVE_GATE_PATH);
  const composerFourthLiveGate = readJson(COMPOSER_FOURTH_LIVE_GATE_PATH);
  const composerFifthLiveGate = readJson(COMPOSER_FIFTH_LIVE_GATE_PATH);
  const composerSixthLiveGate = readJson(COMPOSER_SIXTH_LIVE_GATE_PATH);
  const composerSeventhLiveGate = readJson(COMPOSER_SEVENTH_LIVE_GATE_PATH);
  const composerEighthLiveGate = readJson(COMPOSER_EIGHTH_LIVE_GATE_PATH);
  const composerBatchLiveGate = readJson(COMPOSER_BATCH_LIVE_GATE_PATH);
  const spike = readJson(SPIKE_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);

  const moduleId = ninthAdmission.approvedCandidate?.moduleId ?? null;
  const sourceFile = ninthAdmission.approvedCandidate?.sourceFile ?? null;
  const runtimeInputFile = ninthAdmission.approvedCandidate?.runtimeInputFile ?? null;

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-composer',
    phase: 'ninth-live-admission-plan',
    sources: {
      ninthRuntimeNextStepLock: normalizePath(path.relative(ROOT, NINTH_RUNTIME_NEXT_STEP_LOCK_PATH)),
      ninthRuntimeFreezeReview: normalizePath(path.relative(ROOT, NINTH_RUNTIME_FREEZE_REVIEW_PATH)),
      ninthRuntimeGate: normalizePath(path.relative(ROOT, NINTH_RUNTIME_GATE_PATH)),
      ninthAdmission: normalizePath(path.relative(ROOT, NINTH_ADMISSION_PATH)),
      firstSingleLiveGate: normalizePath(path.relative(ROOT, COMPOSER_SINGLE_LIVE_GATE_PATH)),
      secondSingleLiveGate: normalizePath(path.relative(ROOT, COMPOSER_CONTEXT_LIVE_GATE_PATH)),
      thirdSingleLiveGate: normalizePath(path.relative(ROOT, COMPOSER_THIRD_LIVE_GATE_PATH)),
      fourthSingleLiveGate: normalizePath(path.relative(ROOT, COMPOSER_FOURTH_LIVE_GATE_PATH)),
      fifthSingleLiveGate: normalizePath(path.relative(ROOT, COMPOSER_FIFTH_LIVE_GATE_PATH)),
      sixthSingleLiveGate: normalizePath(path.relative(ROOT, COMPOSER_SIXTH_LIVE_GATE_PATH)),
      seventhSingleLiveGate: normalizePath(path.relative(ROOT, COMPOSER_SEVENTH_LIVE_GATE_PATH)),
      eighthSingleLiveGate: normalizePath(path.relative(ROOT, COMPOSER_EIGHTH_LIVE_GATE_PATH)),
      firstMicroBatchGate: normalizePath(path.relative(ROOT, COMPOSER_BATCH_LIVE_GATE_PATH)),
      spike: normalizePath(path.relative(ROOT, SPIKE_PATH)),
      accept: normalizePath(path.relative(ROOT, ACCEPT_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    candidate: {
      waveId: 'DC9L',
      moduleId,
      sourceFile,
      runtimeInputFile,
      rationale: [
        'tiny toolformer bubble serializer is now the narrowest remaining composer browser capability surface after eight single-live waves',
        'it stays below widget or render execution but sits on the browser capability path, so this stage must stop at contract planning and not jump directly to execution',
        'source and startup-loader input remain aligned after DC9 dedicated no-op runtime freeze',
        'runner-ups still carry broader worktree, data-creation, analytics, or agent routing fan-out than serializeToolformerBubbleData.js',
      ],
      liveShape: 'single-module-live',
    },
    prerequisites: {
      ninthNoOpPassed: ninthRuntimeGate.passed === true,
      ninthNoOpWaveId: ninthRuntimeGate.expectedWaveId ?? null,
      firstSingleLiveStillProven:
        composerSingleLiveGate.passed === true
        && composerSingleLiveGate.expectedWaveId === 'DC1',
      secondSingleLiveStillProven:
        composerContextLiveGate.passed === true
        && composerContextLiveGate.expectedWaveId === 'DC2',
      thirdSingleLiveStillProven:
        composerThirdLiveGate.passed === true
        && composerThirdLiveGate.expectedWaveId === 'DC3L',
      fourthSingleLiveStillProven:
        composerFourthLiveGate.passed === true
        && composerFourthLiveGate.expectedWaveId === 'DC4L',
      fifthSingleLiveStillProven:
        composerFifthLiveGate.passed === true
        && composerFifthLiveGate.expectedWaveId === 'DC5L',
      sixthSingleLiveStillProven:
        composerSixthLiveGate.passed === true
        && composerSixthLiveGate.expectedWaveId === 'DC6L',
      seventhSingleLiveStillProven:
        composerSeventhLiveGate.passed === true
        && composerSeventhLiveGate.expectedWaveId === 'DC7L',
      eighthSingleLiveStillProven:
        composerEighthLiveGate.passed === true
        && composerEighthLiveGate.expectedWaveId === 'DC8L',
      firstMicroBatchStillProven:
        composerBatchLiveGate.passed === true
        && composerBatchLiveGate.expectedWaveId === 'DCB1',
      stableSpikeStillGreen: spike.passed === true,
      stableRuntimeStillGreen:
        quality.stability?.headlessVerifyPassed === true
        && quality.stability?.acceptRecorded === true
        && quality.stability?.startupLoaderRuntimeGatePassed === true
        && quality.stability?.startupLoaderRolloutGatePassed === true,
      latestAcceptAt: accept.generatedAt ?? null,
      reviewChangesLaneStillFrozen: ninthRuntimeLock.decision?.reviewChangesLaneFrozen === true,
      broadBrowserStillHeld: ninthRuntimeLock.decision?.broadBrowserHeld === true,
    },
    blockedSurfaces: [
      'composer wider batch expansion',
      'composer browser widget or renderer expansion',
      'new reviewChanges browser surface expansion',
      'cross-lane expansion',
      'rename-driven work',
    ],
    requiredBeforeLive: [
      'build DC9L live contract',
      'run composer-ninth export-delta gate',
      'run composer-ninth fallback preflight',
      'run composer-ninth sticky-disable preflight',
      'apply wrapper patch',
      'run live gate',
      'run smoke',
      'run workbench-desktop-main spike',
      'run accept',
      'run quality-report',
    ],
    stopConditions: [
      'DC9L single-live gate does not record overlay-hit',
      'toolformer bubble capability serialization regresses under DC9L enablement',
      'smoke fails or regresses before workbench ready',
      'spike fails or hangs after DC9L enablement',
      'accept fails with composer-adjacent runtime regression',
      'quality-report no longer shows stable rollout gates as green',
      'do not discuss wider composer batch while DC9 is only no-op proven',
    ],
    runnerUpLock: {
      locked: true,
      approvedCandidateOnly: moduleId,
      blockedRunnerUps: [
        'out-build/vs/workbench/contrib/composer/browser/worktreeGate.js',
        'out-build/vs/workbench/contrib/composer/browser/composerDataCreation.js',
        'out-build/vs/workbench/contrib/composer/browser/browserAnalytics.js',
        'out-build/vs/workbench/contrib/composer/browser/composerAgent.js',
      ],
    },
    failureClassification: {
      rollbackAdmissionOnlyOn: [
        'admission fields drift from the approved DC9L candidate lock',
        'requiredBeforeLive no longer fully defines the composer-ninth live-contract preflight chain',
      ],
      freezeComposerLaneOn: [
        'composer ninth admission artifacts no longer uniquely lock the next step to composer-ninth-live-contract',
        'smoke or spike regression is attributable to composer-lane changes during DC9L follow-up execution',
        'accept or quality-report regression is attributable to composer lane after DC9L enablement',
      ],
    },
    widerBatchEligibilityGate: {
      discussionBlocked: true,
      currentProofState: 'eight-single-live-plus-first-micro-batch-plus-ninth-no-op',
      whyCurrentProofIsInsufficient: 'a proven ninth no-op only proves the capability serializer remains observable; it does not yet prove DC9L overlay ordering or fallback isolation with live enablement',
      requiredMilestonesBeforeDiscussion: [
        'DC9L single-live proven',
        'post-DC9L composer lane freeze review',
      ],
    },
    minimumWin: {
      definition: 'DC9L admission plan / freeze / next-step lock all verify green and nextApprovedAction uniquely locked to composer-ninth-live-contract',
      mustVerify: [
        'startup-module-resolution-composer-ninth-live-admission-plan-verify.json',
        'startup-module-resolution-composer-ninth-live-freeze-review-verify.json',
        'startup-module-resolution-composer-ninth-live-next-step-lock-verify.json',
      ],
    },
    scopeBoundary: {
      allowOnly: [
        'DC9L admission artifacts',
        'composer ninth live freeze artifacts',
        'composer ninth live next-step lock artifacts',
      ],
      mustNotTouch: [
        'composer live execution',
        'composer wider batch expansion',
        'reviewChanges lane',
        'browser lane',
        'mechanical recovery chain',
      ],
    },
    reachabilityAssessment: {
      reachable: true,
      safestShortPath: 'DC9L admission -> ninth-live freeze review -> ninth-live next-step lock -> composer-ninth-live-contract',
      biggestGap: 'composer-ninth live-contract specific preflight artifacts are not yet materialized, so admission must stop before contract/live execution',
    },
    followUpPriority: {
      next: 'composer-ninth-live-contract',
      afterThat: 'composer lane freeze review only if contract preflight semantics drift',
    },
    rollbackPolicy: {
      perModuleKillSwitchOn: [
        moduleId,
      ],
      laneFreezeOn: [
        'composer ninth single-live failure with ambiguous cause',
        'smoke or spike regression after DC9L enablement',
        'accept regression attributable to composer lane',
      ],
    },
    decision: {
      admissionPlanReady: true,
      executionStillPending: true,
      nextApprovedAction: 'composer-ninth-live-contract',
      nextApprovedWaveId: 'DC9L',
      widerBatchExpansionStillBlocked: true,
    },
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

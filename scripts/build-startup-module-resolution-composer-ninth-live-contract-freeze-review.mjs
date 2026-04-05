#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const NINTH_LIVE_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-ninth-live-freeze-review.json');
const NINTH_LIVE_ADMISSION_PLAN_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-ninth-live-admission-plan.json');
const NINTH_LIVE_CONTRACT_PATH = path.join(ROOT, 'mapped', 'contrib-composer-ninth-module-resolution-live-contract.json');
const NINTH_EXPORT_DELTA_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-ninth-export-delta-gate.json');
const NINTH_FALLBACK_PREFLIGHT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-ninth-fallback-preflight.json');
const NINTH_STICKY_PREFLIGHT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-ninth-sticky-disable-preflight.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-ninth-live-contract-freeze-review.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const ninthLiveFreezeReview = readJson(NINTH_LIVE_FREEZE_REVIEW_PATH);
  const ninthLiveAdmissionPlan = readJson(NINTH_LIVE_ADMISSION_PLAN_PATH);
  const ninthLiveContract = readJson(NINTH_LIVE_CONTRACT_PATH);
  const ninthExportDelta = readJson(NINTH_EXPORT_DELTA_PATH);
  const ninthFallbackPreflight = readJson(NINTH_FALLBACK_PREFLIGHT_PATH);
  const ninthStickyPreflight = readJson(NINTH_STICKY_PREFLIGHT_PATH);
  const quality = readJson(QUALITY_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-composer',
    phase: 'ninth-live-contract-freeze-review',
    sources: {
      ninthLiveFreezeReview: normalizePath(path.relative(ROOT, NINTH_LIVE_FREEZE_REVIEW_PATH)),
      ninthLiveAdmissionPlan: normalizePath(path.relative(ROOT, NINTH_LIVE_ADMISSION_PLAN_PATH)),
      ninthLiveContract: normalizePath(path.relative(ROOT, NINTH_LIVE_CONTRACT_PATH)),
      ninthExportDeltaGate: normalizePath(path.relative(ROOT, NINTH_EXPORT_DELTA_PATH)),
      ninthFallbackPreflight: normalizePath(path.relative(ROOT, NINTH_FALLBACK_PREFLIGHT_PATH)),
      ninthStickyPreflight: normalizePath(path.relative(ROOT, NINTH_STICKY_PREFLIGHT_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    baseline: {
      laneState: ninthLiveFreezeReview.decision?.laneState ?? null,
      stableRuntimeStillGreen:
        quality.stability?.headlessVerifyPassed === true
        && quality.stability?.startupLoaderRuntimeGatePassed === true
        && quality.stability?.startupLoaderRolloutGatePassed === true,
    },
    proven: {
      firstMicroBatchWaveId: ninthLiveFreezeReview.proven?.firstMicroBatchWaveId ?? null,
      ninthNoOpModuleId: ninthLiveFreezeReview.ninthNoOp?.moduleId ?? null,
      ninthNoOpWaveId: ninthLiveFreezeReview.ninthNoOp?.waveId ?? null,
    },
    ninthLiveContract: {
      moduleId: ninthLiveAdmissionPlan.candidate?.moduleId ?? null,
      waveId: ninthLiveContract.canary?.waveId ?? null,
      mode: ninthLiveContract.mode ?? null,
      resolverEnabled: ninthLiveContract.defaults?.resolverEnabled ?? null,
      laneToggleEnabled: ninthLiveContract.defaults?.laneToggles?.['deep-zone-composer'] ?? null,
      perModuleKillSwitchEnabled:
        ninthLiveContract.defaults?.perModuleKillSwitch?.['out-build/vs/workbench/contrib/composer/browser/capabilities/serializeToolformerBubbleData.js'] === false,
      exportDeltaPassed: ninthExportDelta.passed === true,
      fallbackPreflightPassed: ninthFallbackPreflight.passed === true,
      stickyPreflightPassed: ninthStickyPreflight.passed === true,
    },
    blockedSurfaces: ninthLiveAdmissionPlan.blockedSurfaces ?? [],
    runnerUpLock: ninthLiveFreezeReview.runnerUpLock ?? {},
    failureClassification: {
      rollbackContractOnlyOn: [
        'live contract no longer pins DC9L to serializeToolformerBubbleData.js in live-canary mode',
        'composer-ninth export/fallback/sticky preflight chain is incomplete or no longer all green',
      ],
      freezeComposerLaneOn: [
        'composer ninth contract artifacts no longer uniquely lock the next step to composer-ninth-live-execution',
        'preflight evidence suggests toolformer bubble serializer fallback or sticky-disable semantics are no longer trustworthy with serializeToolformerBubbleData.js prepared for live',
        'quality-report or rollout stability regresses while preparing DC9L live execution',
      ],
    },
    widerBatchEligibilityGate: {
      discussionBlocked: true,
      currentProofState: 'eight-single-live-plus-first-micro-batch-plus-ninth-contract-ready',
      whyCurrentProofIsInsufficient: 'a ready ninth live contract plus green composer-ninth preflight still does not count as a proven ninth live execution, so wider-batch discussion remains premature until DC9L live execution is proven and frozen',
      requiredMilestonesBeforeDiscussion: [
        'DC9L live execution proven',
        'post-DC9L composer lane freeze review',
      ],
    },
    minimumWin: {
      definition: 'DC9L live contract / export-delta / fallback / sticky-disable / freeze / next-step lock all verify green and nextApprovedAction uniquely locked to composer-ninth-live-execution',
      mustVerify: [
        'startup-module-resolution-composer-ninth-live-contract-freeze-review-verify.json',
        'startup-module-resolution-composer-ninth-live-contract-next-step-lock-verify.json',
      ],
    },
    scopeBoundary: {
      allowOnly: [
        'DC9L live contract artifacts',
        'composer ninth export-delta artifacts',
        'composer ninth fallback preflight artifacts',
        'composer ninth sticky-disable preflight artifacts',
        'composer ninth live contract freeze artifacts',
        'composer ninth live contract next-step lock artifacts',
      ],
      mustNotTouch: [
        'composer live execution',
        'composer wider batch expansion',
        'reviewChanges lane',
        'browser lane',
        'mechanical recovery chain',
      ],
    },
    followUpPriority: {
      next: 'composer-ninth-live-execution',
      afterThat: 'composer lane freeze review only after ninth live execution result is frozen',
    },
    decision: {
      laneFrozen: true,
      laneState: 'contrib-composer-eight-single-live-one-micro-batch-ninth-live-contract-ready',
      nextApprovedStep: 'composer-ninth-live-contract-next-step-lock',
      ninthLiveContractReadyOnly: true,
      widerBatchExpansionStillBlocked: true,
      reviewChangesLaneStillFrozen: true,
      broadBrowserStillHeld: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    blockedNow: [
      'composer wider batch expansion',
      'new reviewChanges browser surface expansion',
      'cross-lane expansion',
      'rename-driven work',
      'composer ninth live execution before explicit run step',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

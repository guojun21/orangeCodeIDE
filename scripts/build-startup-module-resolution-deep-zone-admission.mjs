#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const DISCIPLINE_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-rollout-discipline.json');
const DISCIPLINE_VERIFY_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-rollout-discipline-verify.json');
const COMPOSER_RUNTIME_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-module-resolution-runtime-gate.json');
const COMPOSER_SINGLE_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-module-resolution-live-gate.json');
const COMPOSER_CONTEXT_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-context-module-resolution-live-gate.json');
const COMPOSER_BATCH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-live-both-module-resolution-live-gate.json');
const COMPOSER_FOURTH_RUNTIME_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-fourth-module-resolution-runtime-gate.json');
const COMPOSER_FOURTH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-fourth-module-resolution-live-gate.json');
const COMPOSER_FIFTH_RUNTIME_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-fifth-module-resolution-runtime-gate.json');
const COMPOSER_FIFTH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-fifth-module-resolution-live-gate.json');
const COMPOSER_SIXTH_RUNTIME_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-sixth-module-resolution-runtime-gate.json');
const COMPOSER_SIXTH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-sixth-module-resolution-live-gate.json');
const COMPOSER_SEVENTH_RUNTIME_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-seventh-module-resolution-runtime-gate.json');
const COMPOSER_SEVENTH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-seventh-module-resolution-live-gate.json');
const COMPOSER_EIGHTH_RUNTIME_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-eighth-module-resolution-runtime-gate.json');
const COMPOSER_EIGHTH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-eighth-module-resolution-live-gate.json');
const COMPOSER_NINTH_RUNTIME_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-ninth-module-resolution-runtime-gate.json');
const COMPOSER_TENTH_RUNTIME_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-tenth-module-resolution-runtime-gate.json');
const COMPOSER_TENTH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-tenth-module-resolution-live-gate.json');
const COMPOSER_ELEVENTH_RUNTIME_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-eleventh-module-resolution-runtime-gate.json');
const COMPOSER_ELEVENTH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-eleventh-module-resolution-live-gate.json');
const COMPOSER_TWELFTH_RUNTIME_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-twelfth-module-resolution-runtime-gate.json');
const COMPOSER_TWELFTH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-twelfth-module-resolution-live-gate.json');
const COMPOSER_THIRTEENTH_RUNTIME_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-thirteenth-module-resolution-runtime-gate.json');
const COMPOSER_THIRTEENTH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-thirteenth-module-resolution-live-gate.json');
const COMPOSER_FOURTEENTH_RUNTIME_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-fourteenth-module-resolution-runtime-gate.json');
const COMPOSER_FOURTEENTH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-fourteenth-module-resolution-live-gate.json');
const COMPOSER_FIFTEENTH_RUNTIME_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-fifteenth-module-resolution-runtime-gate.json');
const COMPOSER_FIFTEENTH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-fifteenth-module-resolution-live-gate.json');
const COMPOSER_SIXTEENTH_RUNTIME_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-sixteenth-module-resolution-runtime-gate.json');
const COMPOSER_SIXTEENTH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-sixteenth-module-resolution-live-gate.json');
const COMPOSER_SEVENTEENTH_RUNTIME_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-seventeenth-module-resolution-runtime-gate.json');
const COMPOSER_SEVENTEENTH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-seventeenth-module-resolution-live-gate.json');
const REVIEW_CHANGES_LANE_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-lane-freeze-review.json');
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-deep-zone-admission.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function summarizeGate(filePath, label) {
  const report = readJson(filePath);
  return {
    label,
    reportPath: normalizePath(path.relative(ROOT, filePath)),
    passed: report.passed === true,
    expectedWaveId: report.expectedWaveId ?? null,
    enabledCount: Array.isArray(report.enabledIds) ? report.enabledIds.length : null,
    factoryHitCount: Array.isArray(report.factoryHitIds) ? report.factoryHitIds.length : null,
    overlayHitCount:
      report.runtimeState?.resolution?.diagnostics?.counters?.overlayHitCount
      ?? report.runtimeState?.resolution?.diagnostics?.overlayHitCount
      ?? null,
    originalPassCount:
      report.runtimeState?.resolution?.diagnostics?.counters?.originalPassCount
      ?? report.runtimeState?.resolution?.diagnostics?.originalPassCount
      ?? null,
  };
}

function main() {
  const discipline = readJson(DISCIPLINE_PATH);
  const disciplineVerify = readJson(DISCIPLINE_VERIFY_PATH);
  const composerRuntimeGate = readJson(COMPOSER_RUNTIME_GATE_PATH);
  const composerSingleLiveGate = readJson(COMPOSER_SINGLE_LIVE_GATE_PATH);
  const composerContextLiveGate = readJson(COMPOSER_CONTEXT_LIVE_GATE_PATH);
  const composerBatchLiveGate = readJson(COMPOSER_BATCH_LIVE_GATE_PATH);
  const composerFourthRuntimeGate = readJson(COMPOSER_FOURTH_RUNTIME_GATE_PATH);
  const composerFourthLiveGate = readJson(COMPOSER_FOURTH_LIVE_GATE_PATH);
  const composerFifthRuntimeGate = readJson(COMPOSER_FIFTH_RUNTIME_GATE_PATH);
  const composerFifthLiveGate = readJson(COMPOSER_FIFTH_LIVE_GATE_PATH);
  const composerSixthRuntimeGate = readJson(COMPOSER_SIXTH_RUNTIME_GATE_PATH);
  const composerSixthLiveGate = readJson(COMPOSER_SIXTH_LIVE_GATE_PATH);
  const composerSeventhRuntimeGate = readJson(COMPOSER_SEVENTH_RUNTIME_GATE_PATH);
  const composerSeventhLiveGate = readJson(COMPOSER_SEVENTH_LIVE_GATE_PATH);
  const composerEighthRuntimeGate = readJson(COMPOSER_EIGHTH_RUNTIME_GATE_PATH);
  const composerEighthLiveGate = readJson(COMPOSER_EIGHTH_LIVE_GATE_PATH);
  const composerNinthRuntimeGate = readJson(COMPOSER_NINTH_RUNTIME_GATE_PATH);
  const composerTenthRuntimeGate = readJson(COMPOSER_TENTH_RUNTIME_GATE_PATH);
  const composerTenthLiveGate = readJson(COMPOSER_TENTH_LIVE_GATE_PATH);
  const composerEleventhRuntimeGate = readJson(COMPOSER_ELEVENTH_RUNTIME_GATE_PATH);
  const composerEleventhLiveGate = readJson(COMPOSER_ELEVENTH_LIVE_GATE_PATH);
  const composerTwelfthRuntimeGate = readJson(COMPOSER_TWELFTH_RUNTIME_GATE_PATH);
  const composerTwelfthLiveGate = readJson(COMPOSER_TWELFTH_LIVE_GATE_PATH);
  const composerThirteenthRuntimeGate = readJson(COMPOSER_THIRTEENTH_RUNTIME_GATE_PATH);
  const composerThirteenthLiveGate = readJson(COMPOSER_THIRTEENTH_LIVE_GATE_PATH);
  const composerFourteenthRuntimeGate = readJson(COMPOSER_FOURTEENTH_RUNTIME_GATE_PATH);
  const composerFourteenthLiveGate = readJson(COMPOSER_FOURTEENTH_LIVE_GATE_PATH);
  const composerFifteenthRuntimeGate = readJson(COMPOSER_FIFTEENTH_RUNTIME_GATE_PATH);
  const composerFifteenthLiveGate = readJson(COMPOSER_FIFTEENTH_LIVE_GATE_PATH);
  const composerSixteenthRuntimeGate = readJson(COMPOSER_SIXTEENTH_RUNTIME_GATE_PATH);
  const composerSixteenthLiveGate = readJson(COMPOSER_SIXTEENTH_LIVE_GATE_PATH);
  const composerSeventeenthRuntimeGate = readJson(COMPOSER_SEVENTEENTH_RUNTIME_GATE_PATH);
  const composerSeventeenthLiveGate = readJson(COMPOSER_SEVENTEENTH_LIVE_GATE_PATH);
  const reviewChangesLaneFreeze = readJson(REVIEW_CHANGES_LANE_FREEZE_REVIEW_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);
  const provenLabels = new Set(
    (discipline.provenMicroWaves ?? [])
      .filter((entry) => entry.passed === true)
      .map((entry) => entry.label),
  );
  const requiredBaselineLabels = ['S1-services-common-live', 'F1-dual-foundation-live'];

  const composerSummary = {
    dedicatedNoOpRuntime: summarizeGate(COMPOSER_RUNTIME_GATE_PATH, 'DC1-contrib-composer-no-op'),
    firstSingleLive: summarizeGate(COMPOSER_SINGLE_LIVE_GATE_PATH, 'DC1-contrib-composer-single-live'),
    secondSingleLive: summarizeGate(COMPOSER_CONTEXT_LIVE_GATE_PATH, 'DC2-contrib-composer-single-live'),
    firstMicroBatchLive: summarizeGate(COMPOSER_BATCH_LIVE_GATE_PATH, 'DCB1-contrib-composer-micro-batch'),
    fourthDedicatedNoOpRuntime: summarizeGate(COMPOSER_FOURTH_RUNTIME_GATE_PATH, 'DC4-contrib-composer-no-op'),
    fourthSingleLive: summarizeGate(COMPOSER_FOURTH_LIVE_GATE_PATH, 'DC4L-contrib-composer-single-live'),
    fifthDedicatedNoOpRuntime: summarizeGate(COMPOSER_FIFTH_RUNTIME_GATE_PATH, 'DC5-contrib-composer-no-op'),
    fifthSingleLive: summarizeGate(COMPOSER_FIFTH_LIVE_GATE_PATH, 'DC5L-contrib-composer-single-live'),
    sixthDedicatedNoOpRuntime: summarizeGate(COMPOSER_SIXTH_RUNTIME_GATE_PATH, 'DC6-contrib-composer-no-op'),
    sixthSingleLive: summarizeGate(COMPOSER_SIXTH_LIVE_GATE_PATH, 'DC6L-contrib-composer-single-live'),
    seventhDedicatedNoOpRuntime: summarizeGate(COMPOSER_SEVENTH_RUNTIME_GATE_PATH, 'DC7-contrib-composer-no-op'),
    seventhSingleLive: summarizeGate(COMPOSER_SEVENTH_LIVE_GATE_PATH, 'DC7L-contrib-composer-single-live'),
    eighthDedicatedNoOpRuntime: summarizeGate(COMPOSER_EIGHTH_RUNTIME_GATE_PATH, 'DC8-contrib-composer-no-op'),
    eighthSingleLive: summarizeGate(COMPOSER_EIGHTH_LIVE_GATE_PATH, 'DC8L-contrib-composer-single-live'),
    ninthDedicatedNoOpRuntime: summarizeGate(COMPOSER_NINTH_RUNTIME_GATE_PATH, 'DC9-contrib-composer-no-op'),
    tenthDedicatedNoOpRuntime: summarizeGate(COMPOSER_TENTH_RUNTIME_GATE_PATH, 'DC10-contrib-composer-no-op'),
    tenthSingleLive: summarizeGate(COMPOSER_TENTH_LIVE_GATE_PATH, 'DC10L-contrib-composer-single-live'),
    eleventhDedicatedNoOpRuntime: summarizeGate(COMPOSER_ELEVENTH_RUNTIME_GATE_PATH, 'DC11-contrib-composer-no-op'),
    eleventhSingleLive: summarizeGate(COMPOSER_ELEVENTH_LIVE_GATE_PATH, 'DC11L-contrib-composer-single-live'),
    twelfthDedicatedNoOpRuntime: summarizeGate(COMPOSER_TWELFTH_RUNTIME_GATE_PATH, 'DC12-contrib-composer-no-op'),
    twelfthSingleLive: summarizeGate(COMPOSER_TWELFTH_LIVE_GATE_PATH, 'DC12L-contrib-composer-single-live'),
    thirteenthDedicatedNoOpRuntime: summarizeGate(COMPOSER_THIRTEENTH_RUNTIME_GATE_PATH, 'DC13-contrib-composer-no-op'),
    thirteenthSingleLive: summarizeGate(COMPOSER_THIRTEENTH_LIVE_GATE_PATH, 'DC13L-contrib-composer-single-live'),
    fourteenthDedicatedNoOpRuntime: summarizeGate(COMPOSER_FOURTEENTH_RUNTIME_GATE_PATH, 'DC14-contrib-composer-no-op'),
    fourteenthSingleLive: summarizeGate(COMPOSER_FOURTEENTH_LIVE_GATE_PATH, 'DC14L-contrib-composer-single-live'),
    fifteenthDedicatedNoOpRuntime: summarizeGate(COMPOSER_FIFTEENTH_RUNTIME_GATE_PATH, 'DC15-contrib-composer-no-op'),
    fifteenthSingleLive: summarizeGate(COMPOSER_FIFTEENTH_LIVE_GATE_PATH, 'DC15L-contrib-composer-single-live'),
    sixteenthDedicatedNoOpRuntime: summarizeGate(COMPOSER_SIXTEENTH_RUNTIME_GATE_PATH, 'DC16-contrib-composer-no-op'),
    sixteenthSingleLive: summarizeGate(COMPOSER_SIXTEENTH_LIVE_GATE_PATH, 'DC16L-contrib-composer-single-live'),
    seventeenthDedicatedNoOpRuntime: summarizeGate(COMPOSER_SEVENTEENTH_RUNTIME_GATE_PATH, 'DC17-contrib-composer-no-op'),
    seventeenthSingleLive: summarizeGate(COMPOSER_SEVENTEENTH_LIVE_GATE_PATH, 'DC17L-contrib-composer-single-live'),
  };

  const reviewChangesSummary = {
    laneState: reviewChangesLaneFreeze.decision?.laneState ?? null,
    laneFrozen: reviewChangesLaneFreeze.decision?.laneFrozen === true,
    browserLaneFrozen: reviewChangesLaneFreeze.currentState?.browserLaneFrozen === true,
    browserGlobalSurfaceCount: reviewChangesLaneFreeze.currentState?.browserLaneGlobalLive?.enabledCount ?? null,
    managerBatchPassed: reviewChangesLaneFreeze.currentState?.managerIncludingBatchLive?.passed === true,
    latestAcceptAt: reviewChangesLaneFreeze.currentState?.latestAcceptAt ?? null,
  };

  const report = {
    generatedAt: new Date().toISOString(),
    sources: {
      discipline: normalizePath(path.relative(ROOT, DISCIPLINE_PATH)),
      disciplineVerify: normalizePath(path.relative(ROOT, DISCIPLINE_VERIFY_PATH)),
      composerRuntimeGate: normalizePath(path.relative(ROOT, COMPOSER_RUNTIME_GATE_PATH)),
      composerSingleLiveGate: normalizePath(path.relative(ROOT, COMPOSER_SINGLE_LIVE_GATE_PATH)),
      composerContextLiveGate: normalizePath(path.relative(ROOT, COMPOSER_CONTEXT_LIVE_GATE_PATH)),
      composerBatchLiveGate: normalizePath(path.relative(ROOT, COMPOSER_BATCH_LIVE_GATE_PATH)),
      composerFourthRuntimeGate: normalizePath(path.relative(ROOT, COMPOSER_FOURTH_RUNTIME_GATE_PATH)),
      composerFourthLiveGate: normalizePath(path.relative(ROOT, COMPOSER_FOURTH_LIVE_GATE_PATH)),
      composerFifthRuntimeGate: normalizePath(path.relative(ROOT, COMPOSER_FIFTH_RUNTIME_GATE_PATH)),
      composerFifthLiveGate: normalizePath(path.relative(ROOT, COMPOSER_FIFTH_LIVE_GATE_PATH)),
      composerSixthRuntimeGate: normalizePath(path.relative(ROOT, COMPOSER_SIXTH_RUNTIME_GATE_PATH)),
      composerSixthLiveGate: normalizePath(path.relative(ROOT, COMPOSER_SIXTH_LIVE_GATE_PATH)),
      composerSeventhRuntimeGate: normalizePath(path.relative(ROOT, COMPOSER_SEVENTH_RUNTIME_GATE_PATH)),
      composerSeventhLiveGate: normalizePath(path.relative(ROOT, COMPOSER_SEVENTH_LIVE_GATE_PATH)),
      composerEighthRuntimeGate: normalizePath(path.relative(ROOT, COMPOSER_EIGHTH_RUNTIME_GATE_PATH)),
      composerEighthLiveGate: normalizePath(path.relative(ROOT, COMPOSER_EIGHTH_LIVE_GATE_PATH)),
      composerNinthRuntimeGate: normalizePath(path.relative(ROOT, COMPOSER_NINTH_RUNTIME_GATE_PATH)),
      composerTenthRuntimeGate: normalizePath(path.relative(ROOT, COMPOSER_TENTH_RUNTIME_GATE_PATH)),
      composerTenthLiveGate: normalizePath(path.relative(ROOT, COMPOSER_TENTH_LIVE_GATE_PATH)),
      composerEleventhRuntimeGate: normalizePath(path.relative(ROOT, COMPOSER_ELEVENTH_RUNTIME_GATE_PATH)),
      composerEleventhLiveGate: normalizePath(path.relative(ROOT, COMPOSER_ELEVENTH_LIVE_GATE_PATH)),
      composerTwelfthRuntimeGate: normalizePath(path.relative(ROOT, COMPOSER_TWELFTH_RUNTIME_GATE_PATH)),
      composerTwelfthLiveGate: normalizePath(path.relative(ROOT, COMPOSER_TWELFTH_LIVE_GATE_PATH)),
      composerThirteenthRuntimeGate: normalizePath(path.relative(ROOT, COMPOSER_THIRTEENTH_RUNTIME_GATE_PATH)),
      composerThirteenthLiveGate: normalizePath(path.relative(ROOT, COMPOSER_THIRTEENTH_LIVE_GATE_PATH)),
      composerFourteenthRuntimeGate: normalizePath(path.relative(ROOT, COMPOSER_FOURTEENTH_RUNTIME_GATE_PATH)),
      composerFourteenthLiveGate: normalizePath(path.relative(ROOT, COMPOSER_FOURTEENTH_LIVE_GATE_PATH)),
      composerFifteenthRuntimeGate: normalizePath(path.relative(ROOT, COMPOSER_FIFTEENTH_RUNTIME_GATE_PATH)),
      composerFifteenthLiveGate: normalizePath(path.relative(ROOT, COMPOSER_FIFTEENTH_LIVE_GATE_PATH)),
      composerSixteenthRuntimeGate: normalizePath(path.relative(ROOT, COMPOSER_SIXTEENTH_RUNTIME_GATE_PATH)),
      composerSixteenthLiveGate: normalizePath(path.relative(ROOT, COMPOSER_SIXTEENTH_LIVE_GATE_PATH)),
      composerSeventeenthRuntimeGate: normalizePath(path.relative(ROOT, COMPOSER_SEVENTEENTH_RUNTIME_GATE_PATH)),
      composerSeventeenthLiveGate: normalizePath(path.relative(ROOT, COMPOSER_SEVENTEENTH_LIVE_GATE_PATH)),
      reviewChangesLaneFreezeReview: normalizePath(path.relative(ROOT, REVIEW_CHANGES_LANE_FREEZE_REVIEW_PATH)),
      accept: normalizePath(path.relative(ROOT, ACCEPT_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    disciplinePassed: disciplineVerify.passed === true,
    baselineRequirements: {
      requiredProvenMicroWaves: requiredBaselineLabels,
      satisfied: requiredBaselineLabels.every((label) => provenLabels.has(label)),
    },
    policy: {
      defaultAdmission: 'deny',
      renameOnMainline: false,
      requireDedicatedToggle: true,
      requirePerModuleKillSwitch: true,
      requireFallbackReasonCoverage: true,
      requireIndependentContractPerDeepZone: true,
      requireIndependentNoOpRuntimeGate: true,
      requireIndependentSingleModuleLiveGate: true,
      requireIndependentBatchLiveGate: true,
      requireFullRolloutGateAfterAdmission: true,
      requireAcceptAndQualityAfterAdmission: true,
      activeAdmittedLanes: ['contrib-composer', 'contrib-reviewChanges'],
      blockedLanes: ['browser'],
    },
    deepZones: [
      {
        lane: 'contrib-composer',
        status: 'active-partially-proven',
        admissionSequence: [
          'dedicated-contract',
          'dedicated-no-op-runtime-gate',
          'single-module-live-gate',
          'micro-batch-live-gate',
          'startup-loader-rollout-gate',
          'accept',
          'quality-report',
        ],
        provenArtifacts: composerSummary,
        nextRecommendedFocus: 'composer-twentyseventh-candidate-admission-plan',
        liveBlockedCandidates: [
          'out-build/vs/workbench/contrib/composer/browser/worktreeSetupRunner.js',
          'out-build/vs/workbench/contrib/composer/browser/composerTextModelService.js',
        ],
        forbiddenUntilSatisfied: false,
      },
      {
        lane: 'contrib-reviewChanges',
        status: 'frozen-global-proven',
        frozenState: reviewChangesSummary,
        nextRecommendedFocus: null,
        forbiddenUntilSatisfied: false,
      },
      {
        lane: 'browser',
        status: 'deferred-blocked',
        admissionSequence: [
          'dedicated-contract',
          'dedicated-no-op-runtime-gate',
          'single-module-live-gate',
          'micro-batch-live-gate',
          'startup-loader-rollout-gate',
          'accept',
          'quality-report',
        ],
        requiredArtifacts: [
          'mapped/browser-module-resolution-contract.json',
          'mapped/browser-module-resolution-runtime-gate.json',
          'mapped/browser-module-resolution-live-gate.json',
          'mapped/browser-module-resolution-batch-gate.json',
        ],
        blockedUntil: [
          'contrib-composer lane advances beyond its initial proven subset',
          'a separate broad browser admission and freeze path is approved',
        ],
        forbiddenUntilSatisfied: true,
      },
    ],
    stability: {
      latestAcceptAt: accept.generatedAt ?? null,
      acceptRecorded: quality.stability?.acceptRecorded === true,
      headlessVerifyPassed: quality.stability?.headlessVerifyPassed === true,
      rolloutGatePassed: quality.stability?.startupLoaderRolloutGatePassed === true,
      deepZoneAdmissionStillGreen: quality.stability?.startupModuleResolutionDeepZoneAdmissionPassed === true,
    },
    decision: {
      nextExecutableLane: 'contrib-composer',
      nextExecutableStep: 'composer-twentyseventh-candidate-admission-plan',
      reviewChangesLaneClosed: reviewChangesSummary.laneFrozen === true,
      browserLaneHeld: true,
      renameOnMainline: false,
    },
    blockedByDefault: ['browser'],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

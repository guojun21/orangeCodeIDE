#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const FOURTH_RUNTIME_NEXT_STEP_LOCK_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fourth-runtime-next-step-lock.json');
const FOURTH_RUNTIME_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fourth-runtime-freeze-review.json');
const FOURTH_RUNTIME_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-browser-fourth-module-resolution-runtime-gate.json');
const FOURTH_ADMISSION_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fourth-admission.json');
const FIRST_BROWSER_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-browser-module-resolution-live-gate.json');
const SECOND_BROWSER_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-browser-second-module-resolution-live-gate.json');
const THIRD_BROWSER_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-browser-third-module-resolution-live-gate.json');
const BATCH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-browser-batch-module-resolution-live-gate.json');
const SPIKE_PATH = path.join(ROOT, 'mapped', 'workbench-desktop-main-spike-check.json');
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fourth-live-admission-plan.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const fourthRuntimeLock = readJson(FOURTH_RUNTIME_NEXT_STEP_LOCK_PATH);
  const fourthRuntimeFreeze = readJson(FOURTH_RUNTIME_FREEZE_REVIEW_PATH);
  const fourthRuntimeGate = readJson(FOURTH_RUNTIME_GATE_PATH);
  const fourthAdmission = readJson(FOURTH_ADMISSION_PATH);
  const firstBrowserLiveGate = readJson(FIRST_BROWSER_LIVE_GATE_PATH);
  const secondBrowserLiveGate = readJson(SECOND_BROWSER_LIVE_GATE_PATH);
  const thirdBrowserLiveGate = readJson(THIRD_BROWSER_LIVE_GATE_PATH);
  const batchLiveGate = readJson(BATCH_LIVE_GATE_PATH);
  const spike = readJson(SPIKE_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);

  const moduleId = fourthAdmission.approvedCandidate?.moduleId ?? null;
  const sourceFile = fourthAdmission.approvedCandidate?.sourceFile ?? null;
  const runtimeInputFile = fourthAdmission.approvedCandidate?.runtimeInputFile ?? null;

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'fourth-live-admission-plan',
    sources: {
      fourthRuntimeNextStepLock: normalizePath(path.relative(ROOT, FOURTH_RUNTIME_NEXT_STEP_LOCK_PATH)),
      fourthRuntimeFreezeReview: normalizePath(path.relative(ROOT, FOURTH_RUNTIME_FREEZE_REVIEW_PATH)),
      fourthRuntimeGate: normalizePath(path.relative(ROOT, FOURTH_RUNTIME_GATE_PATH)),
      fourthAdmission: normalizePath(path.relative(ROOT, FOURTH_ADMISSION_PATH)),
      firstSingleLiveGate: normalizePath(path.relative(ROOT, FIRST_BROWSER_LIVE_GATE_PATH)),
      secondSingleLiveGate: normalizePath(path.relative(ROOT, SECOND_BROWSER_LIVE_GATE_PATH)),
      thirdSingleLiveGate: normalizePath(path.relative(ROOT, THIRD_BROWSER_LIVE_GATE_PATH)),
      batchLiveGate: normalizePath(path.relative(ROOT, BATCH_LIVE_GATE_PATH)),
      spike: normalizePath(path.relative(ROOT, SPIKE_PATH)),
      accept: normalizePath(path.relative(ROOT, ACCEPT_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    candidate: {
      waveId: 'DBR4L',
      moduleId,
      sourceFile,
      runtimeInputFile,
      rationale: [
        'constant-oriented browser util candidate with no direct DOM/template/component surface',
        'no manager/stateful resource-holder signals in the recovered slice',
        'source and startup-loader input remain aligned after DBR4 no-op runtime freeze',
        'runner-up ciMessageUtils.js still carries higher initializer ambiguity than generatedFilesConstants.js',
      ],
      liveShape: 'single-module-live',
    },
    prerequisites: {
      fourthNoOpPassed: fourthRuntimeGate.passed === true,
      fourthNoOpWaveId: fourthRuntimeGate.expectedWaveId ?? null,
      firstSingleLiveStillProven:
        firstBrowserLiveGate.passed === true
        && firstBrowserLiveGate.expectedWaveId === 'DBR1L',
      secondSingleLiveStillProven:
        secondBrowserLiveGate.passed === true
        && secondBrowserLiveGate.expectedWaveId === 'DBR2L',
      thirdSingleLiveStillProven:
        thirdBrowserLiveGate.passed === true
        && thirdBrowserLiveGate.expectedWaveId === 'DBR3L',
      firstBatchStillProven:
        batchLiveGate.passed === true
        && batchLiveGate.expectedWaveId === 'DBRB1',
      stableSpikeStillGreen: spike.passed === true,
      stableRuntimeStillGreen:
        quality.stability?.headlessVerifyPassed === true
        && quality.stability?.acceptRecorded === true
        && quality.stability?.startupLoaderRuntimeGatePassed === true
        && quality.stability?.startupLoaderRolloutGatePassed === true,
      latestAcceptAt: accept.generatedAt ?? null,
      browserBatchScopeExpansionStillBlocked: fourthRuntimeLock.decision?.browserBatchScopeExpansionBlocked === true,
    },
    blockedSurfaces: [
      'browser batch scope expansion',
      'browser second batch live',
      'browser component/widget/template live',
      'cross-lane expansion',
      'rename-driven work',
    ],
    requiredBeforeLive: [
      'build DBR4L live contract',
      'run browser-fourth export-delta gate',
      'run browser-fourth fallback preflight',
      'run browser-fourth sticky-disable preflight',
      'apply wrapper patch',
      'run live gate',
      'run smoke',
      'run workbench-desktop-main spike',
      'run accept',
      'run quality-report',
    ],
    stopConditions: [
      'DBR4L single-live gate does not record overlay-hit',
      'smoke fails or regresses before workbench ready',
      'spike fails or hangs after DBR4L enablement',
      'accept fails with browser-adjacent runtime regression',
      'quality-report no longer shows stable rollout gates as green',
      'do not discuss second browser batch while DBR4 is only no-op proven',
    ],
    runnerUpLock: {
      locked: true,
      approvedCandidateOnly: moduleId,
      blockedRunnerUps: [
        'out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciMessageUtils.js',
      ],
    },
    failureClassification: {
      rollbackAdmissionOnlyOn: [
        'admission fields drift from the approved DBR4L candidate lock',
        'requiredBeforeLive no longer fully defines the browser-fourth live-contract preflight chain',
      ],
      freezeBrowserLaneOn: [
        'browser fourth admission artifacts no longer uniquely lock the next step to browser-fourth-live-contract',
        'smoke or spike regression is attributable to browser-lane changes during DBR4L follow-up execution',
        'accept or quality-report regression is attributable to browser lane after DBR4L enablement',
      ],
    },
    secondBatchEligibilityGate: {
      discussionBlocked: true,
      currentProofState: 'three-live-plus-first-batch-plus-fourth-no-op',
      whyCurrentProofIsInsufficient: 'a proven first batch plus a fourth no-op only proves the next single-module candidate remains observable; it does not yet prove second-batch interaction ordering or fallback isolation with DBR4 enabled',
      requiredMilestonesBeforeDiscussion: [
        'DBR4L single-live proven',
        'post-DBR4L browser lane freeze review',
      ],
    },
    minimumWin: {
      definition: 'DBR4L admission plan / freeze / next-step lock all verify green and nextApprovedAction uniquely locked to browser-fourth-live-contract',
      mustVerify: [
        'startup-module-resolution-review-changes-browser-fourth-live-admission-plan-verify.json',
        'startup-module-resolution-review-changes-browser-fourth-live-freeze-review-verify.json',
        'startup-module-resolution-review-changes-browser-fourth-live-next-step-lock-verify.json',
      ],
    },
    scopeBoundary: {
      allowOnly: [
        'DBR4L admission artifacts',
        'browser fourth live freeze artifacts',
        'browser fourth live next-step lock artifacts',
      ],
      mustNotTouch: [
        'browser live execution',
        'browser batch scope expansion',
        'reviewChanges main lane',
        'composer lane',
        'mechanical recovery chain',
      ],
    },
    reachabilityAssessment: {
      reachable: true,
      safestShortPath: 'DBR4L admission -> fourth-live freeze review -> fourth-live next-step lock -> browser-fourth-live-contract',
      biggestGap: 'browser-fourth live-contract specific preflight artifacts are not yet materialized, so admission must stop before contract/live execution',
    },
    followUpPriority: {
      next: 'browser-fourth-live-contract',
      afterThat: 'browser lane freeze review only if contract preflight semantics drift',
    },
    rollbackPolicy: {
      perModuleKillSwitchOn: [
        moduleId,
      ],
      laneFreezeOn: [
        'browser fourth single-live failure with ambiguous cause',
        'smoke or spike regression after DBR4L enablement',
        'accept regression attributable to browser lane',
      ],
    },
    decision: {
      admissionPlanReady: true,
      executionStillPending: true,
      nextApprovedAction: 'browser-fourth-live-contract',
      nextApprovedWaveId: 'DBR4L',
      batchScopeExpansionStillBlocked: true,
    },
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

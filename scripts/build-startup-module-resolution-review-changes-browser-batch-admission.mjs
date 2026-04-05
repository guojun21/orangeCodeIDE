#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const THIRD_LIVE_EXECUTION_NEXT_STEP_LOCK_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-live-execution-next-step-lock.json');
const FIRST_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-browser-module-resolution-live-gate.json');
const SECOND_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-browser-second-module-resolution-live-gate.json');
const THIRD_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-browser-third-module-resolution-live-gate.json');
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const ROLLOUT_GATE_PATH = path.join(ROOT, 'mapped', 'startup-loader-rollout-gate.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-batch-admission.json');

const BATCH_MODULES = [
  'out-build/vs/workbench/contrib/reviewChanges/browser/hooks/useResourceLineCounts.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/discussionUtils.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/diffMentionUtils.js',
];

const BLOCKED_CANDIDATES = [
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/generatedFilesConstants.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciMessageUtils.js',
];

const REQUIRED_BEFORE_BATCH = [
  'build browser batch live contract',
  'run browser-batch export-delta preflight',
  'run browser-batch fallback preflight',
  'run browser-batch sticky-disable preflight',
  'apply batch wrapper patch',
  'run batch live gate',
  'run smoke',
  'run workbench-desktop-main spike',
  'run accept',
  'run quality-report',
];

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const thirdLock = readJson(THIRD_LIVE_EXECUTION_NEXT_STEP_LOCK_PATH);
  const firstLiveGate = readJson(FIRST_LIVE_GATE_PATH);
  const secondLiveGate = readJson(SECOND_LIVE_GATE_PATH);
  const thirdLiveGate = readJson(THIRD_LIVE_GATE_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);
  const rolloutGate = readJson(ROLLOUT_GATE_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'browser-batch-admission-plan',
    sources: {
      thirdLiveExecutionNextStepLock: normalizePath(path.relative(ROOT, THIRD_LIVE_EXECUTION_NEXT_STEP_LOCK_PATH)),
      firstLiveGate: normalizePath(path.relative(ROOT, FIRST_LIVE_GATE_PATH)),
      secondLiveGate: normalizePath(path.relative(ROOT, SECOND_LIVE_GATE_PATH)),
      thirdLiveGate: normalizePath(path.relative(ROOT, THIRD_LIVE_GATE_PATH)),
      accept: normalizePath(path.relative(ROOT, ACCEPT_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
      rolloutGate: normalizePath(path.relative(ROOT, ROLLOUT_GATE_PATH)),
    },
    batchCandidate: {
      batchWaveId: 'DBRB1A',
      batchSize: 3,
      selectedModules: BATCH_MODULES,
      selectedWaves: ['DBR1L', 'DBR2L', 'DBR3L'],
      blockedCandidates: BLOCKED_CANDIDATES,
    },
    rationale: {
      selectionRule: 'three already-proven browser single-live modules only',
      whyThisBatch: [
        'useResourceLineCounts.js is the only browser hook already proven as single-live',
        'discussionUtils.js and diffMentionUtils.js are lightweight util surfaces already proven as single-live',
        'the batch introduces no new candidate, no manager/stateful holder, and no component/widget/template surface',
      ],
      fourthCandidateDeferred: true,
    },
    prerequisites: {
      browserBatchAdmissionUnlocked: thirdLock.decision?.nextApprovedAction === 'browser-batch-admission-plan',
      firstSingleLiveProven: firstLiveGate.passed === true,
      secondSingleLiveProven: secondLiveGate.passed === true,
      thirdSingleLiveProven: thirdLiveGate.passed === true,
      stableAcceptRecorded: typeof accept.generatedAt === 'string',
      stableQualityGreen:
        quality.stability?.headlessVerifyPassed === true
        && quality.stability?.acceptRecorded === true
        && quality.stability?.startupLoaderRolloutGatePassed === true,
      rolloutGatePassed: rolloutGate.passed === true,
      componentWidgetTemplateStillBlocked: thirdLock.decision?.browserComponentWidgetTemplateBlocked === true,
      fourthCandidateStillBlocked: thirdLock.decision?.browserFourthCandidateAdmissionBlocked === true,
    },
    requiredBeforeBatch: REQUIRED_BEFORE_BATCH,
    blockedSurfaces: [
      'browser batch live',
      'browser component/widget/template',
      'browser fourth candidate admission',
      'cross-lane expansion',
      'rename',
    ],
    runnerUpLock: {
      locked: true,
      blockedRunnerUps: [
        'out-build/vs/workbench/contrib/reviewChanges/browser/utils/generatedFilesConstants.js',
        'out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciMessageUtils.js',
      ],
    },
    failureClassification: {
      rollbackAdmissionOnlyOn: [
        'batch admission fields drift from the approved three-single-live set',
        'requiredBeforeBatch no longer fully defines the browser-batch contract and preflight chain',
      ],
      freezeBrowserLaneOn: [
        'browser batch admission artifacts no longer uniquely lock the next step to browser-batch-contract-plan',
        'batch admission begins to imply browser batch execution in the same phase',
        'stable quality or rollout assumptions regress while browser batch admission is being prepared',
      ],
    },
    minimumWin: {
      definition: 'browser batch admission / freeze / next-step lock all verify green and nextApprovedAction uniquely locked to browser-batch-contract-plan',
      mustVerify: [
        'startup-module-resolution-review-changes-browser-batch-admission-verify.json',
      ],
    },
    scopeBoundary: {
      allowOnly: [
        'browser batch admission artifacts',
      ],
      mustNotTouch: [
        'browser batch execution',
        'browser fourth candidate admission',
        'component/widget/template',
        'cross-lane expansion',
      ],
    },
    followUpPriority: {
      next: 'browser-batch-contract-plan',
    },
    decision: {
      admissionReady:
        thirdLock.decision?.nextApprovedAction === 'browser-batch-admission-plan'
        && firstLiveGate.passed === true
        && secondLiveGate.passed === true
        && thirdLiveGate.passed === true
        && rolloutGate.passed === true,
      nextApprovedAction: 'browser-batch-contract-plan',
      browserBatchExecutionStillBlocked: true,
      browserFourthCandidateStillBlocked: true,
    },
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

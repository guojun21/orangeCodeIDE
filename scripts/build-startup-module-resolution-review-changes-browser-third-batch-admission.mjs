#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const FIFTH_LIVE_EXECUTION_NEXT_STEP_LOCK_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fifth-live-execution-next-step-lock.json');
const SECOND_BATCH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-browser-second-batch-module-resolution-live-gate.json');
const FIFTH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-browser-fifth-module-resolution-live-gate.json');
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const ROLLOUT_GATE_PATH = path.join(ROOT, 'mapped', 'startup-loader-rollout-gate.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-batch-admission.json');

const BATCH_MODULES = [
  'out-build/vs/workbench/contrib/reviewChanges/browser/hooks/useResourceLineCounts.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/discussionUtils.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/diffMentionUtils.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/generatedFilesConstants.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciMessageUtils.js',
];

const REQUIRED_BEFORE_BATCH = [
  'build browser third batch live contract',
  'run browser-third-batch export-delta preflight',
  'run browser-third-batch fallback preflight',
  'run browser-third-batch sticky-disable preflight',
  'apply third batch wrapper patch',
  'run third batch live gate',
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
  const fifthLock = readJson(FIFTH_LIVE_EXECUTION_NEXT_STEP_LOCK_PATH);
  const secondBatchLiveGate = readJson(SECOND_BATCH_LIVE_GATE_PATH);
  const fifthLiveGate = readJson(FIFTH_LIVE_GATE_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);
  const rolloutGate = readJson(ROLLOUT_GATE_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'browser-third-batch-admission-plan',
    sources: {
      fifthLiveExecutionNextStepLock: normalizePath(path.relative(ROOT, FIFTH_LIVE_EXECUTION_NEXT_STEP_LOCK_PATH)),
      secondBatchLiveGate: normalizePath(path.relative(ROOT, SECOND_BATCH_LIVE_GATE_PATH)),
      fifthLiveGate: normalizePath(path.relative(ROOT, FIFTH_LIVE_GATE_PATH)),
      accept: normalizePath(path.relative(ROOT, ACCEPT_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
      rolloutGate: normalizePath(path.relative(ROOT, ROLLOUT_GATE_PATH)),
    },
    batchCandidate: {
      batchWaveId: 'DBRB3A',
      batchSize: 5,
      selectedModules: BATCH_MODULES,
      selectedWaves: ['DBR1L', 'DBR2L', 'DBR3L', 'DBR4L', 'DBR5L'],
      blockedCandidates: [],
    },
    rationale: {
      selectionRule: 'reuse only already-proven browser single-live modules and the already-proven second browser batch',
      whyThisBatch: [
        'useResourceLineCounts.js, discussionUtils.js, diffMentionUtils.js, and generatedFilesConstants.js already survived DBRB2 browser batch live',
        'ciMessageUtils.js is now independently proven as DBR5L single-live and can be admitted as the only new member of the third batch shortlist',
        'the third batch still excludes component/widget/template surfaces, heavier browser UI/view-zone surfaces, and cross-lane expansion',
      ],
      whyNoRunnerUpRemains:
        'ciMessageUtils.js was the last same-scope browser util candidate, so the third batch admission no longer has any same-scope runner-up to switch to',
    },
    prerequisites: {
      thirdBatchAdmissionUnlocked: fifthLock.decision?.nextApprovedAction === 'browser-third-batch-admission-plan',
      secondBatchLiveProven: secondBatchLiveGate.passed === true,
      fifthSingleLiveProven: fifthLiveGate.passed === true,
      stableAcceptRecorded: typeof accept.generatedAt === 'string',
      stableQualityGreen:
        quality.stability?.headlessVerifyPassed === true
        && quality.stability?.acceptRecorded === true
        && quality.stability?.startupLoaderRolloutGatePassed === true,
      rolloutGatePassed: rolloutGate.passed === true,
      componentWidgetTemplateStillBlocked: fifthLock.decision?.browserComponentWidgetTemplateBlocked === true,
      heavierUiStillBlocked: fifthLock.decision?.browserHeavierUiSurfaceBlocked === true,
    },
    requiredBeforeBatch: REQUIRED_BEFORE_BATCH,
    blockedSurfaces: [
      'browser third batch live',
      'browser component/widget/template',
      'browser heavier UI/view-zone',
      'cross-lane expansion',
      'rename',
    ],
    runnerUpLock: {
      locked: true,
      blockedRunnerUps: [],
      candidatePoolExhausted: true,
      reason: 'all same-scope browser util candidates are already frozen inside proven single-live or proven batch sets',
    },
    failureClassification: {
      rollbackAdmissionOnlyOn: [
        'third-batch admission fields drift from the approved five-single-live set',
        'requiredBeforeBatch no longer fully defines the browser-third-batch contract and preflight chain',
      ],
      freezeBrowserLaneOn: [
        'browser-third-batch admission artifacts no longer uniquely lock the next step to browser-third-batch-contract-plan',
        'third-batch admission begins to imply browser-third-batch execution in the same phase',
        'stable quality or rollout assumptions regress while third-batch admission is being prepared',
      ],
    },
    minimumWin: {
      definition: 'browser third-batch admission / freeze / next-step lock all verify green and nextApprovedAction uniquely locked to browser-third-batch-contract-plan',
      mustVerify: [
        'startup-module-resolution-review-changes-browser-third-batch-admission-verify.json',
      ],
    },
    scopeBoundary: {
      allowOnly: [
        'browser third-batch admission artifacts',
      ],
      mustNotTouch: [
        'browser third-batch execution',
        'browser component/widget/template',
        'browser heavier UI/view-zone',
        'cross-lane expansion',
      ],
    },
    followUpPriority: {
      next: 'browser-third-batch-contract-plan',
    },
    decision: {
      admissionReady:
        fifthLock.decision?.nextApprovedAction === 'browser-third-batch-admission-plan'
        && secondBatchLiveGate.passed === true
        && fifthLiveGate.passed === true
        && rolloutGate.passed === true,
      nextApprovedAction: 'browser-third-batch-contract-plan',
      browserThirdBatchExecutionStillBlocked: true,
      browserComponentWidgetTemplateStillBlocked: true,
      browserHeavierUiSurfaceStillBlocked: true,
    },
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

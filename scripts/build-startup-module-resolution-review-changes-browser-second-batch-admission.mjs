#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const FOURTH_LIVE_EXECUTION_NEXT_STEP_LOCK_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fourth-live-execution-next-step-lock.json');
const FIRST_BATCH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-browser-batch-module-resolution-live-gate.json');
const FOURTH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-browser-fourth-module-resolution-live-gate.json');
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const ROLLOUT_GATE_PATH = path.join(ROOT, 'mapped', 'startup-loader-rollout-gate.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-batch-admission.json');

const BATCH_MODULES = [
  'out-build/vs/workbench/contrib/reviewChanges/browser/hooks/useResourceLineCounts.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/discussionUtils.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/diffMentionUtils.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/generatedFilesConstants.js',
];

const BLOCKED_CANDIDATES = [
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciMessageUtils.js',
];

const REQUIRED_BEFORE_BATCH = [
  'build browser second batch live contract',
  'run browser-second-batch export-delta preflight',
  'run browser-second-batch fallback preflight',
  'run browser-second-batch sticky-disable preflight',
  'apply second batch wrapper patch',
  'run second batch live gate',
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
  const fourthLock = readJson(FOURTH_LIVE_EXECUTION_NEXT_STEP_LOCK_PATH);
  const firstBatchLiveGate = readJson(FIRST_BATCH_LIVE_GATE_PATH);
  const fourthLiveGate = readJson(FOURTH_LIVE_GATE_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);
  const rolloutGate = readJson(ROLLOUT_GATE_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'browser-second-batch-admission-plan',
    sources: {
      fourthLiveExecutionNextStepLock: normalizePath(path.relative(ROOT, FOURTH_LIVE_EXECUTION_NEXT_STEP_LOCK_PATH)),
      firstBatchLiveGate: normalizePath(path.relative(ROOT, FIRST_BATCH_LIVE_GATE_PATH)),
      fourthLiveGate: normalizePath(path.relative(ROOT, FOURTH_LIVE_GATE_PATH)),
      accept: normalizePath(path.relative(ROOT, ACCEPT_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
      rolloutGate: normalizePath(path.relative(ROOT, ROLLOUT_GATE_PATH)),
    },
    batchCandidate: {
      batchWaveId: 'DBRB2A',
      batchSize: 4,
      selectedModules: BATCH_MODULES,
      selectedWaves: ['DBR1L', 'DBR2L', 'DBR3L', 'DBR4L'],
      blockedCandidates: BLOCKED_CANDIDATES,
    },
    rationale: {
      selectionRule: 'reuse only already-proven browser single-live modules and the already-proven first browser batch',
      whyThisBatch: [
        'useResourceLineCounts.js, discussionUtils.js, and diffMentionUtils.js already survived DBRB1 browser batch live',
        'generatedFilesConstants.js is now independently proven as DBR4L single-live and can be admitted as the only new member of the second batch shortlist',
        'the second batch still excludes manager/stateful holders, component/widget/template surfaces, and heavier browser UI surfaces',
      ],
      whyRunnerUpDeferred:
        'ciMessageUtils.js remains initializer-heavier than generatedFilesConstants.js and stays outside the second batch until a separate fifth-candidate plan is explicitly unlocked',
    },
    prerequisites: {
      secondBatchAdmissionUnlocked: fourthLock.decision?.nextApprovedAction === 'browser-second-batch-admission-plan',
      firstBatchLiveProven: firstBatchLiveGate.passed === true,
      fourthSingleLiveProven: fourthLiveGate.passed === true,
      stableAcceptRecorded: typeof accept.generatedAt === 'string',
      stableQualityGreen:
        quality.stability?.headlessVerifyPassed === true
        && quality.stability?.acceptRecorded === true
        && quality.stability?.startupLoaderRolloutGatePassed === true,
      rolloutGatePassed: rolloutGate.passed === true,
      componentWidgetTemplateStillBlocked: fourthLock.decision?.browserComponentWidgetTemplateBlocked === true,
      fifthCandidateStillBlocked: fourthLock.decision?.browserFifthCandidateAdmissionBlocked === true,
    },
    requiredBeforeBatch: REQUIRED_BEFORE_BATCH,
    blockedSurfaces: [
      'browser second batch live',
      'browser component/widget/template',
      'browser fifth candidate admission',
      'cross-lane expansion',
      'rename',
    ],
    runnerUpLock: {
      locked: true,
      blockedRunnerUps: BLOCKED_CANDIDATES,
    },
    failureClassification: {
      rollbackAdmissionOnlyOn: [
        'second-batch admission fields drift from the approved four-single-live set',
        'requiredBeforeBatch no longer fully defines the browser-second-batch contract and preflight chain',
      ],
      freezeBrowserLaneOn: [
        'browser-second-batch admission artifacts no longer uniquely lock the next step to browser-second-batch-contract-plan',
        'second-batch admission begins to imply browser-second-batch execution in the same phase',
        'stable quality or rollout assumptions regress while second-batch admission is being prepared',
      ],
    },
    minimumWin: {
      definition: 'browser second-batch admission / freeze / next-step lock all verify green and nextApprovedAction uniquely locked to browser-second-batch-contract-plan',
      mustVerify: [
        'startup-module-resolution-review-changes-browser-second-batch-admission-verify.json',
      ],
    },
    scopeBoundary: {
      allowOnly: [
        'browser second-batch admission artifacts',
      ],
      mustNotTouch: [
        'browser second-batch execution',
        'browser fifth candidate admission',
        'component/widget/template',
        'cross-lane expansion',
      ],
    },
    followUpPriority: {
      next: 'browser-second-batch-contract-plan',
    },
    decision: {
      admissionReady:
        fourthLock.decision?.nextApprovedAction === 'browser-second-batch-admission-plan'
        && firstBatchLiveGate.passed === true
        && fourthLiveGate.passed === true
        && rolloutGate.passed === true,
      nextApprovedAction: 'browser-second-batch-contract-plan',
      browserSecondBatchExecutionStillBlocked: true,
      browserFifthCandidateStillBlocked: true,
    },
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

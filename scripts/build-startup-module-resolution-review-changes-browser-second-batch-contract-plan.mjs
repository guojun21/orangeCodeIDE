#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const SECOND_BATCH_NEXT_STEP_LOCK_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-batch-next-step-lock.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-batch-contract-plan.json');

const EXPECTED_MODULES = [
  'out-build/vs/workbench/contrib/reviewChanges/browser/hooks/useResourceLineCounts.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/discussionUtils.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/diffMentionUtils.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/generatedFilesConstants.js',
];

const EXPECTED_WAVES = ['DBR1L', 'DBR2L', 'DBR3L', 'DBR4L'];
const PLANNED_PREFLIGHT_CHAIN = ['export-delta', 'fallback', 'sticky-disable'];

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function arrayEquals(a, b) {
  return Array.isArray(a)
    && Array.isArray(b)
    && a.length === b.length
    && a.every((item, index) => item === b[index]);
}

function main() {
  const secondBatchNextStepLock = readJson(SECOND_BATCH_NEXT_STEP_LOCK_PATH);
  const approvedBatch = secondBatchNextStepLock.decision?.approvedBatchOnly ?? [];

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'browser-second-batch-contract-plan',
    sources: {
      browserSecondBatchNextStepLock: normalizePath(path.relative(ROOT, SECOND_BATCH_NEXT_STEP_LOCK_PATH)),
    },
    baseline: {
      laneState: secondBatchNextStepLock.baseline?.laneState ?? null,
      batchWaveId: secondBatchNextStepLock.baseline?.batchWaveId ?? null,
      approvedBatch,
    },
    batchContractPlan: {
      batchWaveId: 'DBRB2A',
      selectedModules: EXPECTED_MODULES,
      selectedWaves: EXPECTED_WAVES,
      output: 'mapped/contrib-review-changes-browser-second-batch-module-resolution-live-contract.json',
      runtimeCopy: 'mapped/contrib-review-changes-browser-second-batch-module-resolution-live-contract.runtime.json',
      mode: 'live-canary',
      enableResolver: true,
      enableDedicatedLane: true,
      planningOnly: true,
    },
    plannedPreflightChain: PLANNED_PREFLIGHT_CHAIN,
    runnerUpLock: secondBatchNextStepLock.runnerUpLock ?? {},
    failureClassification: {
      rollbackContractPlanOnlyOn: [
        'second-batch contract plan no longer pins DBRB2A to the approved four-module browser batch',
        'planned preflight chain drifts away from export-delta, fallback, and sticky-disable only',
      ],
      freezeBrowserLaneOn: [
        'browser second-batch contract plan no longer uniquely locks the next step to browser-second-batch-contract-preflight',
        'browser second-batch contract plan starts to imply wrapper patch, live gate, or batch execution in the same phase',
        'approvedBatchOnly, runnerUpLock, or scopeBoundary drift away from the second-batch admission lock',
      ],
    },
    minimumWin: {
      definition: 'browser second-batch contract plan verify green and nextApprovedAction uniquely locked to browser-second-batch-contract-preflight',
      mustVerify: [
        'startup-module-resolution-review-changes-browser-second-batch-contract-plan-verify.json',
      ],
    },
    scopeBoundary: {
      allowOnly: [
        'browser second-batch contract plan artifacts',
      ],
      mustNotTouch: [
        'browser second-batch contract file generation',
        'browser second-batch wrapper patch',
        'browser second-batch live gate',
        'browser second-batch execution',
        'browser fifth candidate admission',
        'component/widget/template',
        'cross-lane expansion',
      ],
    },
    followUpPriority: {
      next: 'browser-second-batch-contract-preflight',
      afterThat: 'browser-second-batch-contract-freeze-review',
    },
    decision: {
      contractPlanReady:
        secondBatchNextStepLock.decision?.nextApprovedAction === 'browser-second-batch-contract-plan'
        && arrayEquals(approvedBatch, EXPECTED_MODULES),
      nextApprovedAction: 'browser-second-batch-contract-preflight',
      browserSecondBatchLiveStillBlocked: true,
      browserComponentWidgetTemplateStillBlocked: secondBatchNextStepLock.decision?.browserComponentWidgetTemplateBlocked === true,
      browserFifthCandidateAdmissionStillBlocked: secondBatchNextStepLock.decision?.browserFifthCandidateAdmissionBlocked === true,
      crossLaneExpansionBlocked: secondBatchNextStepLock.decision?.crossLaneExpansionBlocked === true,
      renameOnMainline: secondBatchNextStepLock.decision?.renameOnMainline ?? false,
    },
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

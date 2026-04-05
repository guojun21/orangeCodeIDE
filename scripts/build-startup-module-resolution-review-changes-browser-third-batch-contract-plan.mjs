#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const THIRD_BATCH_NEXT_STEP_LOCK_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-batch-next-step-lock.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-batch-contract-plan.json');

const EXPECTED_MODULES = [
  'out-build/vs/workbench/contrib/reviewChanges/browser/hooks/useResourceLineCounts.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/discussionUtils.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/diffMentionUtils.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/generatedFilesConstants.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciMessageUtils.js',
];

const EXPECTED_WAVES = ['DBR1L', 'DBR2L', 'DBR3L', 'DBR4L', 'DBR5L'];
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
  const thirdBatchNextStepLock = readJson(THIRD_BATCH_NEXT_STEP_LOCK_PATH);
  const approvedBatch = thirdBatchNextStepLock.decision?.approvedBatchOnly ?? [];

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'browser-third-batch-contract-plan',
    sources: {
      browserThirdBatchNextStepLock: normalizePath(path.relative(ROOT, THIRD_BATCH_NEXT_STEP_LOCK_PATH)),
    },
    baseline: {
      laneState: thirdBatchNextStepLock.baseline?.laneState ?? null,
      batchWaveId: thirdBatchNextStepLock.baseline?.batchWaveId ?? null,
      approvedBatch,
    },
    batchContractPlan: {
      batchWaveId: 'DBRB3A',
      selectedModules: EXPECTED_MODULES,
      selectedWaves: EXPECTED_WAVES,
      output: 'mapped/contrib-review-changes-browser-third-batch-module-resolution-live-contract.json',
      runtimeCopy: 'mapped/contrib-review-changes-browser-third-batch-module-resolution-live-contract.runtime.json',
      mode: 'live-canary',
      enableResolver: true,
      enableDedicatedLane: true,
      planningOnly: true,
    },
    plannedPreflightChain: PLANNED_PREFLIGHT_CHAIN,
    runnerUpLock: thirdBatchNextStepLock.runnerUpLock ?? {},
    failureClassification: {
      rollbackContractPlanOnlyOn: [
        'third-batch contract plan no longer pins DBRB3A to the approved five-module browser batch',
        'planned preflight chain drifts away from export-delta, fallback, and sticky-disable only',
      ],
      freezeBrowserLaneOn: [
        'browser third-batch contract plan no longer uniquely locks the next step to browser-third-batch-contract-preflight',
        'browser third-batch contract plan starts to imply wrapper patch, live gate, or batch execution in the same phase',
        'approvedBatchOnly, runnerUpLock, or scopeBoundary drift away from the third-batch admission lock',
      ],
    },
    minimumWin: {
      definition: 'browser third-batch contract plan verify green and nextApprovedAction uniquely locked to browser-third-batch-contract-preflight',
      mustVerify: [
        'startup-module-resolution-review-changes-browser-third-batch-contract-plan-verify.json',
      ],
    },
    scopeBoundary: {
      allowOnly: [
        'browser third-batch contract plan artifacts',
      ],
      mustNotTouch: [
        'browser third-batch contract file generation',
        'browser third-batch wrapper patch',
        'browser third-batch live gate',
        'browser third-batch execution',
        'browser component/widget/template',
        'browser heavier UI/view-zone',
        'cross-lane expansion',
      ],
    },
    followUpPriority: {
      next: 'browser-third-batch-contract-preflight',
      afterThat: 'browser-third-batch-contract-freeze-review',
    },
    decision: {
      contractPlanReady:
        thirdBatchNextStepLock.decision?.nextApprovedAction === 'browser-third-batch-contract-plan'
        && arrayEquals(approvedBatch, EXPECTED_MODULES),
      nextApprovedAction: 'browser-third-batch-contract-preflight',
      browserThirdBatchLiveStillBlocked: true,
      browserComponentWidgetTemplateStillBlocked: thirdBatchNextStepLock.decision?.browserComponentWidgetTemplateBlocked === true,
      browserHeavierUiSurfaceStillBlocked: thirdBatchNextStepLock.decision?.browserHeavierUiSurfaceBlocked === true,
      crossLaneExpansionBlocked: thirdBatchNextStepLock.decision?.crossLaneExpansionBlocked === true,
      renameOnMainline: thirdBatchNextStepLock.decision?.renameOnMainline ?? false,
    },
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

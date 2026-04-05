#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const BATCH_NEXT_STEP_LOCK_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-batch-next-step-lock.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-batch-contract-plan.json');

const EXPECTED_MODULES = [
  'out-build/vs/workbench/contrib/reviewChanges/browser/hooks/useResourceLineCounts.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/discussionUtils.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/diffMentionUtils.js',
];

const EXPECTED_WAVES = ['DBR1L', 'DBR2L', 'DBR3L'];

const PLANNED_PREFLIGHT_CHAIN = [
  'export-delta',
  'fallback',
  'sticky-disable',
];

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
  const batchNextStepLock = readJson(BATCH_NEXT_STEP_LOCK_PATH);
  const approvedBatch = batchNextStepLock.decision?.approvedBatchOnly ?? [];

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'browser-batch-contract-plan',
    sources: {
      browserBatchNextStepLock: normalizePath(path.relative(ROOT, BATCH_NEXT_STEP_LOCK_PATH)),
    },
    baseline: {
      laneState: batchNextStepLock.baseline?.laneState ?? null,
      batchWaveId: batchNextStepLock.baseline?.batchWaveId ?? null,
      approvedBatch,
    },
    batchContractPlan: {
      batchWaveId: 'DBRB1A',
      selectedModules: EXPECTED_MODULES,
      selectedWaves: EXPECTED_WAVES,
      output: 'mapped/contrib-review-changes-browser-batch-module-resolution-live-contract.json',
      runtimeCopy: 'mapped/contrib-review-changes-browser-batch-module-resolution-live-contract.runtime.json',
      mode: 'live-canary',
      enableResolver: true,
      enableDedicatedLane: true,
      planningOnly: true,
    },
    plannedPreflightChain: PLANNED_PREFLIGHT_CHAIN,
    runnerUpLock: batchNextStepLock.runnerUpLock ?? {},
    failureClassification: {
      rollbackContractPlanOnlyOn: [
        'batch contract plan no longer pins DBRB1A to the approved three-module browser batch',
        'planned preflight chain drifts away from export-delta, fallback, and sticky-disable only',
      ],
      freezeBrowserLaneOn: [
        'browser batch contract plan no longer uniquely locks the next step to browser-batch-contract-preflight',
        'browser batch contract plan starts to imply wrapper patch, live gate, or batch execution in the same phase',
        'approvedBatchOnly, runnerUpLock, or scopeBoundary drift away from the batch-admission lock',
      ],
    },
    minimumWin: {
      definition: 'browser batch contract plan verify green and nextApprovedAction uniquely locked to browser-batch-contract-preflight',
      mustVerify: [
        'startup-module-resolution-review-changes-browser-batch-contract-plan-verify.json',
      ],
    },
    scopeBoundary: {
      allowOnly: [
        'browser batch contract plan artifacts',
      ],
      mustNotTouch: [
        'browser batch contract file generation',
        'browser batch wrapper patch',
        'browser batch live gate',
        'browser batch execution',
        'browser fourth candidate admission',
        'component/widget/template',
        'cross-lane expansion',
      ],
    },
    followUpPriority: {
      next: 'browser-batch-contract-preflight',
      afterThat: 'browser-batch-contract-freeze-review',
    },
    decision: {
      contractPlanReady:
        batchNextStepLock.decision?.nextApprovedAction === 'browser-batch-contract-plan'
        && arrayEquals(approvedBatch, EXPECTED_MODULES),
      nextApprovedAction: 'browser-batch-contract-preflight',
      browserBatchLiveStillBlocked: true,
      browserComponentWidgetTemplateStillBlocked: batchNextStepLock.decision?.browserComponentWidgetTemplateBlocked === true,
      browserFourthCandidateAdmissionStillBlocked: batchNextStepLock.decision?.browserFourthCandidateAdmissionBlocked === true,
      crossLaneExpansionBlocked: batchNextStepLock.decision?.crossLaneExpansionBlocked === true,
      renameOnMainline: batchNextStepLock.decision?.renameOnMainline ?? false,
    },
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

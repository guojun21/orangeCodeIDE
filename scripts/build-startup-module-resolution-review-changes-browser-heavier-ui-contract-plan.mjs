#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const HEAVIER_UI_NEXT_STEP_LOCK_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-heavier-ui-next-step-lock.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-heavier-ui-contract-plan.json');

const EXPECTED_SURFACE = [
  'out-build/vs/workbench/contrib/reviewChanges/browser/ReviewChangesResource.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/ReviewChangesResourceManager.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/diffCommentViewZoneManager.js',
];

const RESOURCE_FIRST = [
  'out-build/vs/workbench/contrib/reviewChanges/browser/ReviewChangesResource.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/ReviewChangesResourceManager.js',
];

const VIEW_ZONE_LATER = [
  'out-build/vs/workbench/contrib/reviewChanges/browser/diffCommentViewZoneManager.js',
];

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
  const nextStepLock = readJson(HEAVIER_UI_NEXT_STEP_LOCK_PATH);
  const approvedSurface = nextStepLock.decision?.approvedSurfaceOnly ?? [];

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'browser-heavier-ui-contract-plan',
    sources: {
      browserHeavierUiNextStepLock: normalizePath(path.relative(ROOT, HEAVIER_UI_NEXT_STEP_LOCK_PATH)),
    },
    baseline: {
      laneState: nextStepLock.baseline?.laneState ?? null,
      surfaceWaveId: nextStepLock.baseline?.surfaceWaveId ?? null,
      approvedSurface,
    },
    heavierUiContractPlan: {
      surfaceWaveId: 'DBHUI1A',
      selectedModules: EXPECTED_SURFACE,
      resourceFirst: RESOURCE_FIRST,
      viewZoneLater: VIEW_ZONE_LATER,
      output: 'mapped/contrib-review-changes-browser-heavier-ui-module-resolution-live-contract.json',
      runtimeCopy: 'mapped/contrib-review-changes-browser-heavier-ui-module-resolution-live-contract.runtime.json',
      mode: 'live-canary',
      enableResolver: true,
      enableDedicatedLane: true,
      lockResourceSubsetBeforeLive: true,
      planningOnly: true,
    },
    plannedPreflightChain: PLANNED_PREFLIGHT_CHAIN,
    failureClassification: {
      rollbackContractPlanOnlyOn: [
        'heavier UI contract plan no longer pins DBHUI1A to the approved three-module surface',
        'resource-first ordering drifts before contract preflight is frozen',
        'planned preflight chain drifts away from export-delta, fallback, and sticky-disable only',
      ],
      freezeBrowserLaneOn: [
        'browser heavier UI contract plan no longer uniquely locks the next step to browser-heavier-ui-contract-preflight',
        'contract planning starts to imply wrapper patch, live gate, or execution in the same phase',
        'contract planning starts to widen into broader editor/widget/view-zone surfaces',
      ],
    },
    minimumWin: {
      definition: 'browser heavier UI contract plan verify green and nextApprovedAction uniquely locked to browser-heavier-ui-contract-preflight',
      mustVerify: [
        'startup-module-resolution-review-changes-browser-heavier-ui-contract-plan-verify.json',
      ],
    },
    scopeBoundary: {
      allowOnly: [
        'browser heavier UI contract plan artifacts',
      ],
      mustNotTouch: [
        'browser heavier UI contract file generation',
        'browser heavier UI export-delta preflight results',
        'browser heavier UI fallback preflight results',
        'browser heavier UI sticky-disable preflight results',
        'browser heavier UI live execution',
        'browser broader editor/widget/view-zone admission',
        'browser further util-batch expansion',
        'cross-lane expansion',
      ],
    },
    followUpPriority: {
      next: 'browser-heavier-ui-contract-preflight',
      afterThat: 'browser-heavier-ui-contract-freeze-review',
    },
    decision: {
      contractPlanReady:
        nextStepLock.decision?.nextApprovedAction === 'browser-heavier-ui-contract-plan'
        && arrayEquals(approvedSurface, EXPECTED_SURFACE),
      nextApprovedAction: 'browser-heavier-ui-contract-preflight',
      browserHeavierUiLiveStillBlocked: true,
      browserBroaderUiAdmissionStillBlocked: nextStepLock.decision?.browserBroaderUiAdmissionBlocked === true,
      browserFurtherUtilBatchExpansionStillBlocked: nextStepLock.decision?.browserFurtherUtilBatchExpansionBlocked === true,
      crossLaneExpansionBlocked: nextStepLock.decision?.crossLaneExpansionBlocked === true,
      renameOnMainline: nextStepLock.decision?.renameOnMainline ?? false,
    },
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

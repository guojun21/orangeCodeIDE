#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const HEAVIER_UI_LIVE_EXECUTION_NEXT_STEP_LOCK_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-heavier-ui-live-execution-next-step-lock.json');
const HEAVIER_UI_LIVE_EXECUTION_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-heavier-ui-live-execution-freeze-review.json');
const REVIEW_CHANGES_SINGLE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-module-resolution-live-gate.json');
const REVIEW_CHANGES_SERVICE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-service-module-resolution-live-gate.json');
const REVIEW_CHANGES_CI_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-ci-module-resolution-live-gate.json');
const REVIEW_CHANGES_BATCH_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-live-both-module-resolution-live-gate.json');
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-broader-editor-widget-view-zone-admission.json');

const SURFACE_MODULES = [
  'out-build/vs/workbench/contrib/reviewChanges/browser/service/semanticReviewService.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/service/reviewChangesService.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciParsingUtils.js',
];

const SERVICE_BRIDGE_FIRST = [
  'out-build/vs/workbench/contrib/reviewChanges/browser/service/semanticReviewService.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/service/reviewChangesService.js',
];

const UTIL_SUPPORT_LATER = [
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciParsingUtils.js',
];

const REQUIRED_BEFORE_CONTRACT = [
  'build browser broader editor/widget/view-zone contract plan',
  'lock a service-bridge subset before any live preparation',
  'run browser broader editor/widget/view-zone export-delta preflight',
  'run browser broader editor/widget/view-zone fallback preflight',
  'run browser broader editor/widget/view-zone sticky-disable preflight',
  'prepare wrapper patch only after contract freeze',
  'run broader editor/widget/view-zone live gate',
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

function projectPathForModule(moduleId) {
  return normalizePath(path.join('rebuilt', 'src', 'project-modules-beautified', moduleId));
}

function runtimeInputPathForModule(moduleId) {
  return normalizePath(path.join('recovered', 'startup-loader', 'input', moduleId));
}

function main() {
  const nextStepLock = readJson(HEAVIER_UI_LIVE_EXECUTION_NEXT_STEP_LOCK_PATH);
  const heavierUiFreeze = readJson(HEAVIER_UI_LIVE_EXECUTION_FREEZE_REVIEW_PATH);
  const reviewSingleGate = readJson(REVIEW_CHANGES_SINGLE_GATE_PATH);
  const reviewServiceGate = readJson(REVIEW_CHANGES_SERVICE_GATE_PATH);
  const reviewCiGate = readJson(REVIEW_CHANGES_CI_GATE_PATH);
  const reviewBatchGate = readJson(REVIEW_CHANGES_BATCH_GATE_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'browser-broader-editor-widget-view-zone-admission-plan',
    sources: {
      browserHeavierUiLiveExecutionNextStepLock: normalizePath(path.relative(ROOT, HEAVIER_UI_LIVE_EXECUTION_NEXT_STEP_LOCK_PATH)),
      browserHeavierUiLiveExecutionFreezeReview: normalizePath(path.relative(ROOT, HEAVIER_UI_LIVE_EXECUTION_FREEZE_REVIEW_PATH)),
      reviewChangesSingleLiveGate: normalizePath(path.relative(ROOT, REVIEW_CHANGES_SINGLE_GATE_PATH)),
      reviewChangesServiceLiveGate: normalizePath(path.relative(ROOT, REVIEW_CHANGES_SERVICE_GATE_PATH)),
      reviewChangesCiLiveGate: normalizePath(path.relative(ROOT, REVIEW_CHANGES_CI_GATE_PATH)),
      reviewChangesBatchLiveGate: normalizePath(path.relative(ROOT, REVIEW_CHANGES_BATCH_GATE_PATH)),
      accept: normalizePath(path.relative(ROOT, ACCEPT_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    surfaceCandidate: {
      surfaceWaveId: 'DBEWV1A',
      surfaceSize: SURFACE_MODULES.length,
      selectedModules: SURFACE_MODULES,
      serviceBridgeFirst: SERVICE_BRIDGE_FIRST,
      utilSupportLater: UTIL_SUPPORT_LATER,
      sourceFiles: SURFACE_MODULES.map(projectPathForModule),
      runtimeInputFiles: SURFACE_MODULES.map(runtimeInputPathForModule),
      remainingRunnerUps: [],
    },
    rationale: {
      admissionRule: 'move from heavier UI live-proven status into the final browser-side bridge surface before any truly broader editor/widget/view-zone live discussion',
      whyThisSurface: [
        'semanticReviewService.js, reviewChangesService.js, and ciParsingUtils.js are the only remaining reviewChanges browser bridge modules not yet admitted in the browser lane',
        'all three already have prior live proof in the dedicated contrib-reviewChanges lane, so this admission can reuse real runtime evidence instead of opening a fresh unproven surface',
        'this step still does not unlock broader editor/widget/view-zone live; it only fixes the bridge subset that any later broader UI discussion would have to pass through',
      ],
      whyServiceBridgeFirst: [
        'semanticReviewService.js and reviewChangesService.js form the narrower service bridge pair and already proved they can run as single-live and micro-batch in the reviewChanges lane',
        'ciParsingUtils.js remains inside the admitted bridge surface but is explicitly held behind the service-first subset during contract planning',
      ],
      whyThisIsStillPlanningOnly: [
        'the bridge trio is not being re-proven live in this phase; this is only an admission lock for the next contract stage',
        'actual broader editor/widget/view-zone live remains blocked until a dedicated contract, preflight, and execution chain is built on top of this admitted bridge',
      ],
    },
    prerequisites: {
      broaderUiAdmissionUnlocked:
        nextStepLock.decision?.nextApprovedAction === 'browser-broader-editor-widget-view-zone-admission-plan',
      heavierUiLiveProven: heavierUiFreeze.proven?.heavierUiWaveId === 'DBHUI1',
      componentWidgetTemplateLiveProven: heavierUiFreeze.proven?.componentWidgetTemplateWaveId === 'DBCWT1',
      fiveSingleLiveStillProven: heavierUiFreeze.proven?.fifthSingleLiveWaveId === 'DBR5L',
      thirdBatchStillProven: heavierUiFreeze.proven?.thirdBatchWaveId === 'DBRB3',
      priorReviewChangesSingleProven: reviewSingleGate.expectedWaveId === 'DR1L',
      priorReviewChangesServiceProven: reviewServiceGate.expectedWaveId === 'DR2L',
      priorReviewChangesCiProven: reviewCiGate.expectedWaveId === 'DR3L',
      priorReviewChangesBatchProven: reviewBatchGate.expectedWaveId === 'DRB1',
      stableAcceptRecorded: typeof accept.generatedAt === 'string',
      stableQualityGreen:
        quality.stability?.headlessVerifyPassed === true
        && quality.stability?.acceptRecorded === true
        && quality.stability?.startupLoaderRolloutGatePassed === true,
      candidatePoolExhausted: true,
      broaderUiLiveStillBlocked: nextStepLock.decision?.browserBroaderUiLiveBlocked === true,
      furtherUtilBatchExpansionBlocked: nextStepLock.decision?.browserFurtherUtilBatchExpansionBlocked === true,
    },
    requiredBeforeContract: REQUIRED_BEFORE_CONTRACT,
    blockedSurfaces: [
      'browser broader editor/widget/view-zone live',
      'browser global editor/widget/view-zone expansion beyond the approved bridge surface',
      'browser further util-batch expansion',
      'cross-lane expansion',
      'rename',
    ],
    failureClassification: {
      rollbackAdmissionOnlyOn: [
        'broader bridge admission fields drift from the approved three-module service/util bridge surface',
        'service-first ordering is no longer fixed before contract planning',
      ],
      freezeBrowserLaneOn: [
        'broader bridge admission no longer uniquely locks the next step to browser-broader-editor-widget-view-zone-contract-plan',
        'admission starts to widen beyond semanticReviewService.js, reviewChangesService.js, and ciParsingUtils.js',
        'stable quality assumptions regress while broader bridge admission is being prepared',
      ],
    },
    minimumWin: {
      definition: 'browser broader editor/widget/view-zone admission / freeze / next-step lock all verify green and nextApprovedAction uniquely locked to browser-broader-editor-widget-view-zone-contract-plan',
      mustVerify: [
        'startup-module-resolution-review-changes-browser-broader-editor-widget-view-zone-admission-verify.json',
        'startup-module-resolution-review-changes-browser-broader-editor-widget-view-zone-freeze-review-verify.json',
        'startup-module-resolution-review-changes-browser-broader-editor-widget-view-zone-next-step-lock-verify.json',
      ],
    },
    scopeBoundary: {
      allowOnly: [
        'browser broader editor/widget/view-zone admission artifacts',
      ],
      mustNotTouch: [
        'browser broader editor/widget/view-zone contract artifacts',
        'browser broader editor/widget/view-zone live execution',
        'browser global editor/widget/view-zone expansion beyond the approved bridge surface',
        'browser further util-batch expansion',
        'cross-lane expansion',
      ],
    },
    followUpPriority: {
      next: 'browser-broader-editor-widget-view-zone-contract-plan',
      afterThat: 'browser-broader-editor-widget-view-zone-contract-preflight',
    },
    decision: {
      admissionReady: true,
      nextApprovedAction: 'browser-broader-editor-widget-view-zone-contract-plan',
      browserBroaderUiLiveStillBlocked: true,
      browserGlobalEditorWidgetViewZoneStillBlocked: true,
      browserFurtherUtilBatchExpansionStillBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

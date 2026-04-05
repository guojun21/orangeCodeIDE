#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const THIRD_BATCH_LIVE_EXECUTION_NEXT_STEP_LOCK_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-batch-live-execution-next-step-lock.json');
const THIRD_BATCH_LIVE_EXECUTION_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-batch-live-execution-freeze-review.json');
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-component-widget-template-admission.json');

const SURFACE_MODULES = [
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/CIStatusIndicator.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesEllipsisMenu.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesSummaryHeader.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesMarkdownDescription.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesFileList/ReviewChangesFileItem.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesFileList/ReviewChangesFileList.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/CursorDiffPane.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesFindWidget.js',
];

const PRESENTATIONAL_FIRST = [
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/CIStatusIndicator.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesEllipsisMenu.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesSummaryHeader.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesMarkdownDescription.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesFileList/ReviewChangesFileItem.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesFileList/ReviewChangesFileList.js',
];

const INTERACTIVE_LATER = [
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/CursorDiffPane.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesFindWidget.js',
];

const BLOCKED_OUTSIDE_SURFACE = [
  'out-build/vs/workbench/contrib/reviewChanges/browser/diffCommentViewZoneManager.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/ReviewChangesResource.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/ReviewChangesResourceManager.js',
];

const REQUIRED_BEFORE_CONTRACT = [
  'build browser component/widget/template contract plan',
  'lock a presentational-first subset before any live preparation',
  'run browser component/widget/template export-delta preflight',
  'run browser component/widget/template fallback preflight',
  'run browser component/widget/template sticky-disable preflight',
  'prepare wrapper patch only after contract freeze',
  'run component/widget/template live gate',
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
  const nextStepLock = readJson(THIRD_BATCH_LIVE_EXECUTION_NEXT_STEP_LOCK_PATH);
  const thirdBatchFreeze = readJson(THIRD_BATCH_LIVE_EXECUTION_FREEZE_REVIEW_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'browser-component-widget-template-admission-plan',
    sources: {
      browserThirdBatchLiveExecutionNextStepLock: normalizePath(path.relative(ROOT, THIRD_BATCH_LIVE_EXECUTION_NEXT_STEP_LOCK_PATH)),
      browserThirdBatchLiveExecutionFreezeReview: normalizePath(path.relative(ROOT, THIRD_BATCH_LIVE_EXECUTION_FREEZE_REVIEW_PATH)),
      accept: normalizePath(path.relative(ROOT, ACCEPT_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    surfaceCandidate: {
      surfaceWaveId: 'DBCWT1A',
      surfaceSize: SURFACE_MODULES.length,
      selectedModules: SURFACE_MODULES,
      presentationalFirst: PRESENTATIONAL_FIRST,
      interactiveLater: INTERACTIVE_LATER,
      sourceFiles: SURFACE_MODULES.map(projectPathForModule),
      runtimeInputFiles: SURFACE_MODULES.map(runtimeInputPathForModule),
      blockedOutsideSurface: BLOCKED_OUTSIDE_SURFACE,
    },
    rationale: {
      admissionRule: 'move from exhausted util/batch lane into the next lighter browser UI layer without unlocking heavier view-zone surfaces',
      whyThisSurface: [
        'the browser util candidate pool is exhausted and already frozen inside five single-live proofs plus three batch proofs',
        'component/widget/template modules are the next explicit layer unlocked by the third-batch live execution next-step lock',
        'this phase still excludes diffCommentViewZoneManager.js and other heavier browser UI/view-zone holders',
      ],
      whyPresentationalFirst: [
        'CIStatusIndicator.js, ReviewChangesEllipsisMenu.js, ReviewChangesSummaryHeader.js, ReviewChangesMarkdownDescription.js, and ReviewChangesFileList/* are smaller presentational components with narrower startup impact',
        'CursorDiffPane.js and ReviewChangesFindWidget.js stay in the same admitted surface but are explicitly deferred behind the presentational-first subset during contract planning',
      ],
    },
    prerequisites: {
      componentWidgetTemplateAdmissionUnlocked:
        nextStepLock.decision?.nextApprovedAction === 'browser-component-widget-template-admission-plan',
      thirdBatchLiveProven: thirdBatchFreeze.proven?.thirdBatchWaveId === 'DBRB3',
      fiveSingleLiveStillProven: thirdBatchFreeze.decision?.laneState === 'five-single-live-proven-first-and-second-and-third-batch-live-proven',
      stableAcceptRecorded: typeof accept.generatedAt === 'string',
      stableQualityGreen:
        quality.stability?.headlessVerifyPassed === true
        && quality.stability?.acceptRecorded === true
        && quality.stability?.startupLoaderRolloutGatePassed === true,
      heavierUiStillBlocked: nextStepLock.decision?.browserHeavierUiSurfaceBlocked === true,
      furtherUtilBatchExpansionBlocked: nextStepLock.decision?.browserFurtherUtilBatchExpansionBlocked === true,
    },
    requiredBeforeContract: REQUIRED_BEFORE_CONTRACT,
    blockedSurfaces: [
      'browser component/widget/template live',
      'browser heavier UI/view-zone admission',
      'browser further util-batch expansion',
      'cross-lane expansion',
      'rename',
    ],
    failureClassification: {
      rollbackAdmissionOnlyOn: [
        'component/widget/template admission fields drift from the approved eight-module surface',
        'presentational-first ordering is no longer fixed before contract planning',
      ],
      freezeBrowserLaneOn: [
        'component/widget/template admission no longer uniquely locks the next step to browser-component-widget-template-contract-plan',
        'admission starts to pull diffCommentViewZoneManager.js or other heavier UI holders into the same surface',
        'stable quality assumptions regress while component/widget/template admission is being prepared',
      ],
    },
    minimumWin: {
      definition: 'browser component/widget/template admission / freeze / next-step lock all verify green and nextApprovedAction uniquely locked to browser-component-widget-template-contract-plan',
      mustVerify: [
        'startup-module-resolution-review-changes-browser-component-widget-template-admission-verify.json',
      ],
    },
    scopeBoundary: {
      allowOnly: [
        'browser component/widget/template admission artifacts',
      ],
      mustNotTouch: [
        'browser component/widget/template contract artifacts',
        'browser component/widget/template live execution',
        'browser heavier UI/view-zone',
        'browser further util-batch expansion',
        'cross-lane expansion',
      ],
    },
    followUpPriority: {
      next: 'browser-component-widget-template-contract-plan',
    },
    decision: {
      admissionReady:
        nextStepLock.decision?.nextApprovedAction === 'browser-component-widget-template-admission-plan'
        && thirdBatchFreeze.proven?.thirdBatchWaveId === 'DBRB3'
        && quality.stability?.acceptRecorded === true,
      nextApprovedAction: 'browser-component-widget-template-contract-plan',
      browserComponentWidgetTemplateLiveStillBlocked: true,
      browserHeavierUiSurfaceStillBlocked: true,
      browserFurtherUtilBatchExpansionStillBlocked: true,
    },
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const BROADER_LIVE_EXECUTION_NEXT_STEP_LOCK_PATH = path.join(
  ROOT,
  'mapped',
  'startup-module-resolution-review-changes-browser-broader-editor-widget-view-zone-live-execution-next-step-lock.json'
);
const BROADER_LIVE_EXECUTION_FREEZE_REVIEW_PATH = path.join(
  ROOT,
  'mapped',
  'startup-module-resolution-review-changes-browser-broader-editor-widget-view-zone-live-execution-freeze-review.json'
);
const COMPONENT_WIDGET_TEMPLATE_LIVE_EXECUTION_FREEZE_REVIEW_PATH = path.join(
  ROOT,
  'mapped',
  'startup-module-resolution-review-changes-browser-component-widget-template-live-execution-freeze-review.json'
);
const HEAVIER_UI_LIVE_EXECUTION_FREEZE_REVIEW_PATH = path.join(
  ROOT,
  'mapped',
  'startup-module-resolution-review-changes-browser-heavier-ui-live-execution-freeze-review.json'
);
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(
  ROOT,
  'mapped',
  'startup-module-resolution-review-changes-browser-global-editor-widget-view-zone-admission.json'
);

const BROADER_SURFACE_MODULES = [
  'out-build/vs/workbench/contrib/reviewChanges/browser/service/semanticReviewService.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/service/reviewChangesService.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciParsingUtils.js',
];

const COMPONENT_WIDGET_TEMPLATE_MODULES = [
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/CIStatusIndicator.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesEllipsisMenu.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesSummaryHeader.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesMarkdownDescription.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesFileList/ReviewChangesFileItem.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesFileList/ReviewChangesFileList.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/CursorDiffPane.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesFindWidget.js',
];

const HEAVIER_UI_MODULES = [
  'out-build/vs/workbench/contrib/reviewChanges/browser/ReviewChangesResource.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/ReviewChangesResourceManager.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/diffCommentViewZoneManager.js',
];

const FROZEN_UTIL_MODULES = [
  'out-build/vs/workbench/contrib/reviewChanges/browser/hooks/useResourceLineCounts.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/discussionUtils.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/diffMentionUtils.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/generatedFilesConstants.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciMessageUtils.js',
];

const GLOBAL_SURFACE_MODULES = [
  ...BROADER_SURFACE_MODULES,
  ...COMPONENT_WIDGET_TEMPLATE_MODULES,
  ...HEAVIER_UI_MODULES,
];

const REQUIRED_BEFORE_CONTRACT = [
  'build browser global editor/widget/view-zone contract plan',
  'lock a bridge-and-component-first subset before any live preparation',
  'run browser global editor/widget/view-zone export-delta preflight',
  'run browser global editor/widget/view-zone fallback preflight',
  'run browser global editor/widget/view-zone sticky-disable preflight',
  'prepare wrapper patch only after contract freeze',
  'run global editor/widget/view-zone live gate',
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

function sameSet(a, b) {
  return Array.isArray(a)
    && Array.isArray(b)
    && JSON.stringify([...a].sort()) === JSON.stringify([...b].sort());
}

function main() {
  const nextStepLock = readJson(BROADER_LIVE_EXECUTION_NEXT_STEP_LOCK_PATH);
  const broaderFreeze = readJson(BROADER_LIVE_EXECUTION_FREEZE_REVIEW_PATH);
  const componentFreeze = readJson(COMPONENT_WIDGET_TEMPLATE_LIVE_EXECUTION_FREEZE_REVIEW_PATH);
  const heavierFreeze = readJson(HEAVIER_UI_LIVE_EXECUTION_FREEZE_REVIEW_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);

  const allReviewChangesBrowserModules = [
    ...GLOBAL_SURFACE_MODULES,
    ...FROZEN_UTIL_MODULES,
  ];

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'browser-global-editor-widget-view-zone-admission-plan',
    sources: {
      browserBroaderEditorWidgetViewZoneLiveExecutionNextStepLock: normalizePath(path.relative(ROOT, BROADER_LIVE_EXECUTION_NEXT_STEP_LOCK_PATH)),
      browserBroaderEditorWidgetViewZoneLiveExecutionFreezeReview: normalizePath(path.relative(ROOT, BROADER_LIVE_EXECUTION_FREEZE_REVIEW_PATH)),
      browserComponentWidgetTemplateLiveExecutionFreezeReview: normalizePath(path.relative(ROOT, COMPONENT_WIDGET_TEMPLATE_LIVE_EXECUTION_FREEZE_REVIEW_PATH)),
      browserHeavierUiLiveExecutionFreezeReview: normalizePath(path.relative(ROOT, HEAVIER_UI_LIVE_EXECUTION_FREEZE_REVIEW_PATH)),
      accept: normalizePath(path.relative(ROOT, ACCEPT_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    surfaceCandidate: {
      surfaceWaveId: 'DBGEWV1A',
      surfaceSize: GLOBAL_SURFACE_MODULES.length,
      selectedModules: GLOBAL_SURFACE_MODULES,
      bridgeAndComponentFirst: [
        ...BROADER_SURFACE_MODULES,
        ...COMPONENT_WIDGET_TEMPLATE_MODULES,
      ],
      heavierUiLast: HEAVIER_UI_MODULES,
      sourceFiles: GLOBAL_SURFACE_MODULES.map(projectPathForModule),
      runtimeInputFiles: GLOBAL_SURFACE_MODULES.map(runtimeInputPathForModule),
      alreadyFrozenOutsideSurface: FROZEN_UTIL_MODULES,
    },
    rationale: {
      admissionRule: 'compose the already proven browser bridge, component/widget/template, and heavier UI holders into a single global editor/widget/view-zone surface without reopening util or batch work',
      whyThisSurface: [
        'all reviewChanges browser modules are now accounted for, so the only meaningful next browser step is a global composition of the already proven non-util surfaces',
        'component/widget/template, heavier UI, and broader editor/widget/view-zone all already reached live-proven status separately, so this admission does not introduce any fresh browser file',
        'the five util/hook modules remain frozen outside the global surface because they are already exhausted and proven through single-live plus batch waves',
      ],
      whyBridgeAndComponentFirst: [
        'semanticReviewService.js, reviewChangesService.js, ciParsingUtils.js, and the admitted component/widget/template layer form the lower-risk bridge-and-component core that can be contract-planned before the heavier holders are reintroduced',
        'ReviewChangesResource.js, ReviewChangesResourceManager.js, and diffCommentViewZoneManager.js stay inside the admitted global surface but remain explicitly deferred behind the bridge-and-component-first subset during contract planning',
      ],
      whyThisIsStillPlanningOnly: [
        'global editor/widget/view-zone live remains blocked until a dedicated contract, preflight, and execution chain is built on top of this admitted surface',
        'this phase only locks the final browser surface boundary; it does not yet materialize a global live contract or wrapper patch',
      ],
    },
    prerequisites: {
      globalAdmissionUnlocked:
        nextStepLock.decision?.nextApprovedAction === 'browser-global-editor-widget-view-zone-admission-plan',
      broaderEditorWidgetViewZoneLiveProven: broaderFreeze.proven?.broaderEditorWidgetViewZoneWaveId === 'DBEWV1',
      componentWidgetTemplateLiveProven: componentFreeze.proven?.componentWidgetTemplateWaveId === 'DBCWT1',
      heavierUiLiveProven: heavierFreeze.proven?.heavierUiWaveId === 'DBHUI1',
      fiveSingleLiveStillProven: broaderFreeze.proven?.fifthSingleLiveWaveId === 'DBR5L',
      thirdBatchStillProven: broaderFreeze.proven?.thirdBatchWaveId === 'DBRB3',
      stableAcceptRecorded: typeof accept.generatedAt === 'string',
      stableQualityGreen:
        quality.stability?.headlessVerifyPassed === true
        && quality.stability?.acceptRecorded === true
        && quality.stability?.startupLoaderRolloutGatePassed === true,
      reviewChangesBrowserInventoryAccountedFor:
        GLOBAL_SURFACE_MODULES.length + FROZEN_UTIL_MODULES.length === allReviewChangesBrowserModules.length,
      noRemainingBrowserModulesOutsideGlobalSurface:
        allReviewChangesBrowserModules.every((moduleId) => GLOBAL_SURFACE_MODULES.includes(moduleId) || FROZEN_UTIL_MODULES.includes(moduleId)),
      componentSurfacePinned: sameSet(componentFreeze.proven?.approvedSurface ?? [], COMPONENT_WIDGET_TEMPLATE_MODULES),
      heavierSurfacePinned: sameSet(heavierFreeze.proven?.approvedSurface ?? [], HEAVIER_UI_MODULES),
      broaderSurfacePinned: sameSet(broaderFreeze.proven?.approvedSurface ?? [], BROADER_SURFACE_MODULES),
      globalLiveStillBlocked: nextStepLock.decision?.browserGlobalEditorWidgetViewZoneLiveBlocked === true,
      furtherUtilBatchExpansionBlocked: nextStepLock.decision?.browserFurtherUtilBatchExpansionBlocked === true,
    },
    requiredBeforeContract: REQUIRED_BEFORE_CONTRACT,
    blockedSurfaces: [
      'browser global editor/widget/view-zone live',
      'browser beyond the approved reviewChanges global editor/widget/view-zone surface',
      'browser further util-batch expansion',
      'cross-lane expansion',
      'rename',
    ],
    failureClassification: {
      rollbackAdmissionOnlyOn: [
        'global admission fields drift from the approved 14-module browser non-util surface',
        'bridge-and-component-first ordering is no longer fixed before contract planning',
      ],
      freezeBrowserLaneOn: [
        'global admission no longer uniquely locks the next step to browser-global-editor-widget-view-zone-contract-plan',
        'admission starts to widen beyond the approved reviewChanges browser inventory',
        'stable quality assumptions regress while global admission is being prepared',
      ],
    },
    minimumWin: {
      definition: 'browser global editor/widget/view-zone admission / freeze / next-step lock all verify green and nextApprovedAction uniquely locked to browser-global-editor-widget-view-zone-contract-plan',
      mustVerify: [
        'startup-module-resolution-review-changes-browser-global-editor-widget-view-zone-admission-verify.json',
        'startup-module-resolution-review-changes-browser-global-editor-widget-view-zone-freeze-review-verify.json',
        'startup-module-resolution-review-changes-browser-global-editor-widget-view-zone-next-step-lock-verify.json',
      ],
    },
    scopeBoundary: {
      allowOnly: [
        'browser global editor/widget/view-zone admission artifacts',
      ],
      mustNotTouch: [
        'browser global editor/widget/view-zone contract artifacts',
        'browser global editor/widget/view-zone live execution',
        'browser further util-batch expansion',
        'cross-lane expansion',
      ],
    },
    followUpPriority: {
      next: 'browser-global-editor-widget-view-zone-contract-plan',
      afterThat: 'browser-global-editor-widget-view-zone-contract-preflight',
    },
    decision: {
      admissionReady: true,
      nextApprovedAction: 'browser-global-editor-widget-view-zone-contract-plan',
      browserGlobalEditorWidgetViewZoneLiveStillBlocked: true,
      browserBeyondReviewChangesGlobalSurfaceStillBlocked: true,
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

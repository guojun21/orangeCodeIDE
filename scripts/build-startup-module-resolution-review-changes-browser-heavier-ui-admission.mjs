#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const COMPONENT_WIDGET_TEMPLATE_LIVE_EXECUTION_NEXT_STEP_LOCK_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-component-widget-template-live-execution-next-step-lock.json');
const COMPONENT_WIDGET_TEMPLATE_LIVE_EXECUTION_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-component-widget-template-live-execution-freeze-review.json');
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-heavier-ui-admission.json');

const SURFACE_MODULES = [
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

const REQUIRED_BEFORE_CONTRACT = [
  'build browser heavier UI/view-zone contract plan',
  'lock a resource-first subset before any live preparation',
  'run browser heavier UI/view-zone export-delta preflight',
  'run browser heavier UI/view-zone fallback preflight',
  'run browser heavier UI/view-zone sticky-disable preflight',
  'prepare wrapper patch only after contract freeze',
  'run heavier UI/view-zone live gate',
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
  const nextStepLock = readJson(COMPONENT_WIDGET_TEMPLATE_LIVE_EXECUTION_NEXT_STEP_LOCK_PATH);
  const componentWidgetTemplateFreeze = readJson(COMPONENT_WIDGET_TEMPLATE_LIVE_EXECUTION_FREEZE_REVIEW_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'browser-heavier-ui-admission-plan',
    sources: {
      browserComponentWidgetTemplateLiveExecutionNextStepLock: normalizePath(path.relative(ROOT, COMPONENT_WIDGET_TEMPLATE_LIVE_EXECUTION_NEXT_STEP_LOCK_PATH)),
      browserComponentWidgetTemplateLiveExecutionFreezeReview: normalizePath(path.relative(ROOT, COMPONENT_WIDGET_TEMPLATE_LIVE_EXECUTION_FREEZE_REVIEW_PATH)),
      accept: normalizePath(path.relative(ROOT, ACCEPT_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    surfaceCandidate: {
      surfaceWaveId: 'DBHUI1A',
      surfaceSize: SURFACE_MODULES.length,
      selectedModules: SURFACE_MODULES,
      resourceFirst: RESOURCE_FIRST,
      viewZoneLater: VIEW_ZONE_LATER,
      sourceFiles: SURFACE_MODULES.map(projectPathForModule),
      runtimeInputFiles: SURFACE_MODULES.map(runtimeInputPathForModule),
      remainingRunnerUps: [],
    },
    rationale: {
      admissionRule: 'move from component/widget/template live-proven status into the final heavier browser UI/view-zone layer without reopening util or batch expansion',
      whyThisSurface: [
        'the admitted component/widget/template surface is already live-proven, so the only remaining reviewChanges browser modules are heavier holders around resource/view-zone behavior',
        'ReviewChangesResource.js and ReviewChangesResourceManager.js form a narrower resource/control pair and can be contract-planned ahead of diffCommentViewZoneManager.js',
        'this admission still stays inside reviewChanges browser scope and does not unlock broader editor/widget/view-zone surfaces',
      ],
      whyResourceFirst: [
        'ReviewChangesResource.js and ReviewChangesResourceManager.js are easier to reason about than diffCommentViewZoneManager.js because they do not directly introduce view-zone rendering into the first contract subset',
        'diffCommentViewZoneManager.js remains inside the admitted surface but is explicitly deferred behind the resource-first subset during contract planning',
      ],
    },
    prerequisites: {
      heavierUiAdmissionUnlocked:
        nextStepLock.decision?.nextApprovedAction === 'browser-heavier-ui-admission-plan',
      componentWidgetTemplateLiveProven:
        componentWidgetTemplateFreeze.proven?.componentWidgetTemplateWaveId === 'DBCWT1',
      fiveSingleLiveStillProven: componentWidgetTemplateFreeze.proven?.fifthSingleLiveWaveId === 'DBR5L',
      thirdBatchStillProven: componentWidgetTemplateFreeze.proven?.thirdBatchWaveId === 'DBRB3',
      stableAcceptRecorded: typeof accept.generatedAt === 'string',
      stableQualityGreen:
        quality.stability?.headlessVerifyPassed === true
        && quality.stability?.acceptRecorded === true
        && quality.stability?.startupLoaderRolloutGatePassed === true,
      candidatePoolExhausted: true,
      heavierUiLiveStillBlocked: nextStepLock.decision?.browserHeavierUiLiveBlocked === true,
      furtherUtilBatchExpansionBlocked: nextStepLock.decision?.browserFurtherUtilBatchExpansionBlocked === true,
    },
    requiredBeforeContract: REQUIRED_BEFORE_CONTRACT,
    blockedSurfaces: [
      'browser heavier UI/view-zone live',
      'browser broader editor/widget/view-zone admission',
      'browser further util-batch expansion',
      'cross-lane expansion',
      'rename',
    ],
    failureClassification: {
      rollbackAdmissionOnlyOn: [
        'heavier UI admission fields drift from the approved three-module surface',
        'resource-first ordering is no longer fixed before contract planning',
      ],
      freezeBrowserLaneOn: [
        'heavier UI admission no longer uniquely locks the next step to browser-heavier-ui-contract-plan',
        'admission starts to widen beyond ReviewChangesResource.js, ReviewChangesResourceManager.js, and diffCommentViewZoneManager.js',
        'stable quality assumptions regress while heavier UI admission is being prepared',
      ],
    },
    minimumWin: {
      definition: 'browser heavier UI admission / freeze / next-step lock all verify green and nextApprovedAction uniquely locked to browser-heavier-ui-contract-plan',
      mustVerify: [
        'startup-module-resolution-review-changes-browser-heavier-ui-admission-verify.json',
      ],
    },
    scopeBoundary: {
      allowOnly: [
        'browser heavier UI admission artifacts',
      ],
      mustNotTouch: [
        'browser heavier UI contract artifacts',
        'browser heavier UI live execution',
        'browser broader editor/widget/view-zone admission',
        'browser further util-batch expansion',
        'cross-lane expansion',
      ],
    },
    followUpPriority: {
      next: 'browser-heavier-ui-contract-plan',
    },
    decision: {
      admissionReady:
        nextStepLock.decision?.nextApprovedAction === 'browser-heavier-ui-admission-plan'
        && componentWidgetTemplateFreeze.proven?.componentWidgetTemplateWaveId === 'DBCWT1'
        && quality.stability?.acceptRecorded === true,
      nextApprovedAction: 'browser-heavier-ui-contract-plan',
      browserHeavierUiLiveStillBlocked: true,
      browserBroaderUiSurfaceStillBlocked: true,
      browserFurtherUtilBatchExpansionStillBlocked: true,
    },
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const ADMISSION_PATH = path.join(
  ROOT,
  'mapped',
  'startup-module-resolution-review-changes-browser-global-editor-widget-view-zone-admission.json'
);
const BROADER_LIVE_EXECUTION_FREEZE_REVIEW_PATH = path.join(
  ROOT,
  'mapped',
  'startup-module-resolution-review-changes-browser-broader-editor-widget-view-zone-live-execution-freeze-review.json'
);
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(
  ROOT,
  'mapped',
  'startup-module-resolution-review-changes-browser-global-editor-widget-view-zone-freeze-review.json'
);

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const admission = readJson(ADMISSION_PATH);
  const broaderFreeze = readJson(BROADER_LIVE_EXECUTION_FREEZE_REVIEW_PATH);
  const quality = readJson(QUALITY_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'browser-global-editor-widget-view-zone-freeze-review',
    sources: {
      browserGlobalEditorWidgetViewZoneAdmission: normalizePath(path.relative(ROOT, ADMISSION_PATH)),
      browserBroaderEditorWidgetViewZoneLiveExecutionFreezeReview: normalizePath(path.relative(ROOT, BROADER_LIVE_EXECUTION_FREEZE_REVIEW_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    baseline: {
      laneState: broaderFreeze.decision?.laneState ?? null,
      latestAcceptAt: broaderFreeze.baseline?.latestAcceptAt ?? null,
      stableRuntimeStillGreen:
        quality.stability?.headlessVerifyPassed === true
        && quality.stability?.acceptRecorded === true
        && quality.stability?.startupLoaderRolloutGatePassed === true,
    },
    proven: broaderFreeze.proven ?? {},
    admittedSurface: {
      surfaceWaveId: admission.surfaceCandidate?.surfaceWaveId ?? null,
      surfaceSize: admission.surfaceCandidate?.surfaceSize ?? null,
      selectedModules: admission.surfaceCandidate?.selectedModules ?? [],
      bridgeAndComponentFirst: admission.surfaceCandidate?.bridgeAndComponentFirst ?? [],
      heavierUiLast: admission.surfaceCandidate?.heavierUiLast ?? [],
      alreadyFrozenOutsideSurface: admission.surfaceCandidate?.alreadyFrozenOutsideSurface ?? [],
      requiredBeforeContract: admission.requiredBeforeContract ?? [],
    },
    failureClassification: admission.failureClassification ?? {},
    minimumWin: {
      definition: admission.minimumWin?.definition ?? null,
      mustVerify: [
        ...(admission.minimumWin?.mustVerify ?? []),
        'startup-module-resolution-review-changes-browser-global-editor-widget-view-zone-freeze-review-verify.json',
      ],
    },
    scopeBoundary: {
      allowOnly: [
        ...(admission.scopeBoundary?.allowOnly ?? []),
        'browser global editor/widget/view-zone freeze artifacts',
      ],
      mustNotTouch: admission.scopeBoundary?.mustNotTouch ?? [],
    },
    followUpPriority: admission.followUpPriority ?? {},
    decision: {
      laneFrozen: true,
      laneState: 'five-single-live-proven-first-and-second-and-third-batch-live-proven-component-widget-template-live-proven-heavier-ui-live-proven-broader-editor-widget-view-zone-live-proven-global-editor-widget-view-zone-admission-planned',
      nextApprovedStep: 'browser-global-editor-widget-view-zone-next-step-lock',
      contractStillNotReady: true,
      browserGlobalEditorWidgetViewZoneLiveStillBlocked: true,
      browserBeyondReviewChangesGlobalSurfaceStillBlocked: true,
      browserFurtherUtilBatchExpansionStillBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    blockedNow: [
      'browser global editor/widget/view-zone live',
      'browser beyond the approved reviewChanges global editor/widget/view-zone surface',
      'browser further util-batch expansion',
      'cross-lane expansion',
      'rename-driven work',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

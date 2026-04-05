#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const ADMISSION_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-broader-editor-widget-view-zone-admission.json');
const HEAVIER_UI_LIVE_EXECUTION_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-heavier-ui-live-execution-freeze-review.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-broader-editor-widget-view-zone-freeze-review.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const admission = readJson(ADMISSION_PATH);
  const heavierUiFreeze = readJson(HEAVIER_UI_LIVE_EXECUTION_FREEZE_REVIEW_PATH);
  const quality = readJson(QUALITY_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'browser-broader-editor-widget-view-zone-freeze-review',
    sources: {
      browserBroaderEditorWidgetViewZoneAdmission: normalizePath(path.relative(ROOT, ADMISSION_PATH)),
      browserHeavierUiLiveExecutionFreezeReview: normalizePath(path.relative(ROOT, HEAVIER_UI_LIVE_EXECUTION_FREEZE_REVIEW_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    baseline: {
      laneState: heavierUiFreeze.decision?.laneState ?? null,
      latestAcceptAt: heavierUiFreeze.baseline?.latestAcceptAt ?? null,
      stableRuntimeStillGreen:
        quality.stability?.headlessVerifyPassed === true
        && quality.stability?.acceptRecorded === true
        && quality.stability?.startupLoaderRolloutGatePassed === true,
    },
    proven: heavierUiFreeze.proven ?? {},
    admittedSurface: {
      surfaceWaveId: admission.surfaceCandidate?.surfaceWaveId ?? null,
      surfaceSize: admission.surfaceCandidate?.surfaceSize ?? null,
      selectedModules: admission.surfaceCandidate?.selectedModules ?? [],
      serviceBridgeFirst: admission.surfaceCandidate?.serviceBridgeFirst ?? [],
      utilSupportLater: admission.surfaceCandidate?.utilSupportLater ?? [],
      requiredBeforeContract: admission.requiredBeforeContract ?? [],
    },
    failureClassification: admission.failureClassification ?? {},
    minimumWin: {
      definition: admission.minimumWin?.definition ?? null,
      mustVerify: [
        ...(admission.minimumWin?.mustVerify ?? []),
        'startup-module-resolution-review-changes-browser-broader-editor-widget-view-zone-freeze-review-verify.json',
      ],
    },
    scopeBoundary: {
      allowOnly: [
        ...(admission.scopeBoundary?.allowOnly ?? []),
        'browser broader editor/widget/view-zone freeze artifacts',
      ],
      mustNotTouch: admission.scopeBoundary?.mustNotTouch ?? [],
    },
    followUpPriority: admission.followUpPriority ?? {},
    decision: {
      laneFrozen: true,
      laneState: 'five-single-live-proven-first-and-second-and-third-batch-live-proven-component-widget-template-live-proven-heavier-ui-live-proven-broader-editor-widget-view-zone-admission-planned',
      nextApprovedStep: 'browser-broader-editor-widget-view-zone-next-step-lock',
      contractStillNotReady: true,
      browserBroaderUiLiveStillBlocked: true,
      browserGlobalEditorWidgetViewZoneStillBlocked: true,
      browserFurtherUtilBatchExpansionStillBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    blockedNow: [
      'browser broader editor/widget/view-zone live',
      'browser global editor/widget/view-zone expansion beyond the approved bridge surface',
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

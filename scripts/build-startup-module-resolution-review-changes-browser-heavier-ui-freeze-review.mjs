#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const ADMISSION_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-heavier-ui-admission.json');
const COMPONENT_WIDGET_TEMPLATE_LIVE_EXECUTION_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-component-widget-template-live-execution-freeze-review.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-heavier-ui-freeze-review.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const admission = readJson(ADMISSION_PATH);
  const componentWidgetTemplateFreeze = readJson(COMPONENT_WIDGET_TEMPLATE_LIVE_EXECUTION_FREEZE_REVIEW_PATH);
  const quality = readJson(QUALITY_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'browser-heavier-ui-freeze-review',
    sources: {
      browserHeavierUiAdmission: normalizePath(path.relative(ROOT, ADMISSION_PATH)),
      browserComponentWidgetTemplateLiveExecutionFreezeReview: normalizePath(path.relative(ROOT, COMPONENT_WIDGET_TEMPLATE_LIVE_EXECUTION_FREEZE_REVIEW_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    baseline: {
      laneState: componentWidgetTemplateFreeze.decision?.laneState ?? null,
      latestAcceptAt: componentWidgetTemplateFreeze.baseline?.latestAcceptAt ?? null,
      stableRuntimeStillGreen:
        quality.stability?.headlessVerifyPassed === true
        && quality.stability?.acceptRecorded === true
        && quality.stability?.startupLoaderRolloutGatePassed === true,
    },
    proven: componentWidgetTemplateFreeze.proven ?? {},
    admittedSurface: {
      surfaceWaveId: admission.surfaceCandidate?.surfaceWaveId ?? null,
      surfaceSize: admission.surfaceCandidate?.surfaceSize ?? null,
      selectedModules: admission.surfaceCandidate?.selectedModules ?? [],
      resourceFirst: admission.surfaceCandidate?.resourceFirst ?? [],
      viewZoneLater: admission.surfaceCandidate?.viewZoneLater ?? [],
      requiredBeforeContract: admission.requiredBeforeContract ?? [],
    },
    failureClassification: admission.failureClassification ?? {},
    minimumWin: {
      definition: admission.minimumWin?.definition ?? null,
      mustVerify: [
        ...(admission.minimumWin?.mustVerify ?? []),
        'startup-module-resolution-review-changes-browser-heavier-ui-freeze-review-verify.json',
      ],
    },
    scopeBoundary: {
      allowOnly: [
        ...(admission.scopeBoundary?.allowOnly ?? []),
        'browser heavier UI freeze artifacts',
      ],
      mustNotTouch: admission.scopeBoundary?.mustNotTouch ?? [],
    },
    followUpPriority: admission.followUpPriority ?? {},
    decision: {
      laneFrozen: true,
      laneState: 'five-single-live-proven-first-and-second-and-third-batch-live-proven-component-widget-template-live-proven-heavier-ui-admission-planned',
      nextApprovedStep: 'browser-heavier-ui-next-step-lock',
      contractStillNotReady: true,
      browserHeavierUiLiveStillBlocked: true,
      browserBroaderUiSurfaceStillBlocked: true,
      browserFurtherUtilBatchExpansionStillBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    blockedNow: [
      'browser heavier UI/view-zone live',
      'browser broader editor/widget/view-zone admission',
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

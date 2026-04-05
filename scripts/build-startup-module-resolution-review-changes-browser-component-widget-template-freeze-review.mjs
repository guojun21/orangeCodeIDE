#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const ADMISSION_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-component-widget-template-admission.json');
const THIRD_BATCH_FREEZE_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-batch-live-execution-freeze-review.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-component-widget-template-freeze-review.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const admission = readJson(ADMISSION_PATH);
  const thirdBatchFreeze = readJson(THIRD_BATCH_FREEZE_PATH);
  const quality = readJson(QUALITY_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'browser-component-widget-template-freeze-review',
    sources: {
      componentWidgetTemplateAdmission: normalizePath(path.relative(ROOT, ADMISSION_PATH)),
      browserThirdBatchLiveExecutionFreezeReview: normalizePath(path.relative(ROOT, THIRD_BATCH_FREEZE_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    baseline: {
      laneState: thirdBatchFreeze.decision?.laneState ?? null,
      latestAcceptAt: thirdBatchFreeze.baseline?.latestAcceptAt ?? null,
      stableRuntimeStillGreen:
        quality.stability?.headlessVerifyPassed === true
        && quality.stability?.acceptRecorded === true
        && quality.stability?.startupLoaderRolloutGatePassed === true,
    },
    proven: thirdBatchFreeze.proven ?? {},
    admittedSurface: {
      surfaceWaveId: admission.surfaceCandidate?.surfaceWaveId ?? null,
      surfaceSize: admission.surfaceCandidate?.surfaceSize ?? null,
      selectedModules: admission.surfaceCandidate?.selectedModules ?? [],
      presentationalFirst: admission.surfaceCandidate?.presentationalFirst ?? [],
      interactiveLater: admission.surfaceCandidate?.interactiveLater ?? [],
      blockedOutsideSurface: admission.surfaceCandidate?.blockedOutsideSurface ?? [],
      requiredBeforeContract: admission.requiredBeforeContract ?? [],
    },
    failureClassification: admission.failureClassification ?? {},
    minimumWin: {
      definition: admission.minimumWin?.definition ?? null,
      mustVerify: [
        ...(admission.minimumWin?.mustVerify ?? []),
        'startup-module-resolution-review-changes-browser-component-widget-template-freeze-review-verify.json',
      ],
    },
    scopeBoundary: {
      allowOnly: [
        ...(admission.scopeBoundary?.allowOnly ?? []),
        'browser component/widget/template freeze artifacts',
      ],
      mustNotTouch: admission.scopeBoundary?.mustNotTouch ?? [],
    },
    followUpPriority: admission.followUpPriority ?? {},
    decision: {
      laneFrozen: true,
      laneState: 'five-single-live-proven-first-and-second-and-third-batch-live-proven-component-widget-template-admission-planned',
      nextApprovedStep: 'browser-component-widget-template-next-step-lock',
      contractStillNotReady: true,
      browserComponentWidgetTemplateLiveStillBlocked: true,
      browserHeavierUiSurfaceStillBlocked: true,
      browserFurtherUtilBatchExpansionStillBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    blockedNow: [
      'browser component/widget/template live',
      'browser heavier UI/view-zone admission',
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

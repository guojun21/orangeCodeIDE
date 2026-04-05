#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const GLOBAL_LIVE_FREEZE_REVIEW_PATH = path.join(
  ROOT,
  'mapped',
  'startup-module-resolution-review-changes-browser-global-editor-widget-view-zone-live-execution-freeze-review.json'
);
const GLOBAL_LIVE_NEXT_STEP_LOCK_PATH = path.join(
  ROOT,
  'mapped',
  'startup-module-resolution-review-changes-browser-global-editor-widget-view-zone-live-execution-next-step-lock.json'
);
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(
  ROOT,
  'mapped',
  'startup-module-resolution-review-changes-browser-lane-freeze-review.json'
);

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const globalFreezeReview = readJson(GLOBAL_LIVE_FREEZE_REVIEW_PATH);
  const globalNextStepLock = readJson(GLOBAL_LIVE_NEXT_STEP_LOCK_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'browser-lane-freeze-review',
    sources: {
      browserGlobalEditorWidgetViewZoneLiveExecutionFreezeReview: normalizePath(path.relative(ROOT, GLOBAL_LIVE_FREEZE_REVIEW_PATH)),
      browserGlobalEditorWidgetViewZoneLiveExecutionNextStepLock: normalizePath(path.relative(ROOT, GLOBAL_LIVE_NEXT_STEP_LOCK_PATH)),
      accept: normalizePath(path.relative(ROOT, ACCEPT_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    baseline: {
      laneState: globalFreezeReview.decision?.laneState ?? null,
      latestAcceptAt: accept.generatedAt ?? null,
      stableRuntimeStillGreen:
        quality.stability?.headlessVerifyPassed === true
        && quality.stability?.acceptRecorded === true
        && quality.stability?.startupLoaderRuntimeGatePassed === true
        && quality.stability?.startupLoaderRolloutGatePassed === true
        && quality.stability?.startupModuleResolutionRolloutDisciplinePassed === true
        && quality.stability?.startupModuleResolutionDeepZoneAdmissionPassed === true,
    },
    proven: {
      firstSingleLiveWaveId: globalFreezeReview.proven?.firstSingleLiveWaveId ?? null,
      secondSingleLiveWaveId: globalFreezeReview.proven?.secondSingleLiveWaveId ?? null,
      thirdSingleLiveWaveId: globalFreezeReview.proven?.thirdSingleLiveWaveId ?? null,
      fourthSingleLiveWaveId: globalFreezeReview.proven?.fourthSingleLiveWaveId ?? null,
      fifthSingleLiveWaveId: globalFreezeReview.proven?.fifthSingleLiveWaveId ?? null,
      firstBatchWaveId: globalFreezeReview.proven?.firstBatchWaveId ?? null,
      secondBatchWaveId: globalFreezeReview.proven?.secondBatchWaveId ?? null,
      thirdBatchWaveId: globalFreezeReview.proven?.thirdBatchWaveId ?? null,
      componentWidgetTemplateWaveId: globalFreezeReview.proven?.componentWidgetTemplateWaveId ?? null,
      heavierUiWaveId: globalFreezeReview.proven?.heavierUiWaveId ?? null,
      broaderEditorWidgetViewZoneWaveId: globalFreezeReview.proven?.broaderEditorWidgetViewZoneWaveId ?? null,
      globalEditorWidgetViewZoneWaveId: globalFreezeReview.proven?.globalEditorWidgetViewZoneWaveId ?? null,
      approvedGlobalSurface: globalFreezeReview.proven?.approvedSurface ?? [],
      overlayProbeIds: globalFreezeReview.proven?.overlayProbeIds ?? [],
      factoryHitIds: globalFreezeReview.proven?.factoryHitIds ?? [],
      diagnostics: globalFreezeReview.proven?.diagnostics ?? null,
    },
    decision: {
      laneFrozen: true,
      laneState: 'review-changes-browser-lane-global-live-proven',
      nextApprovedAction: 'review-changes-lane-freeze-review',
      browserSurfaceExhausted: true,
      browserBeyondReviewChangesGlobalSurfaceExpansionBlocked: true,
      browserFurtherUtilBatchExpansionBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    guardrails: {
      allowedNow: [
        'browser lane freeze artifacts',
        'reviewChanges lane freeze review only',
        'browser-specific diagnostics refinement',
      ],
      blockedNow: [
        'browser beyond the approved reviewChanges global editor/widget/view-zone surface expansion',
        'browser further util-batch expansion',
        'cross-lane expansion',
        'rename-driven work',
      ],
      stopConditions: [
        'do not reopen browser util or batch expansion after candidate pool exhaustion',
        'do not start post-browser promotion work before reviewChanges lane freeze review concludes',
        'do not widen browser global surface beyond DBGEWV1 after browser lane freeze is recorded',
      ],
    },
    transition: {
      fromNextApprovedAction: globalNextStepLock.decision?.nextApprovedAction ?? null,
      browserLaneFreezeMayStartOnlyAfterGlobalFreeze:
        globalNextStepLock.decision?.browserLaneFreezeMayStartOnlyAfterGlobalFreeze === true,
    },
    minimumWin: {
      definition: 'browser lane freeze review verify green and nextApprovedAction uniquely locked to review-changes-lane-freeze-review',
      mustVerify: [
        'startup-module-resolution-review-changes-browser-lane-freeze-review-verify.json',
      ],
    },
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

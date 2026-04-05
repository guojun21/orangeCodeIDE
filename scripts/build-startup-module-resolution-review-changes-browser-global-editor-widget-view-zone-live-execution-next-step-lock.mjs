#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const FREEZE_REVIEW_PATH = path.join(
  ROOT,
  'mapped',
  'startup-module-resolution-review-changes-browser-global-editor-widget-view-zone-live-execution-freeze-review.json'
);
const OUTPUT_PATH = path.join(
  ROOT,
  'mapped',
  'startup-module-resolution-review-changes-browser-global-editor-widget-view-zone-live-execution-next-step-lock.json'
);

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const freezeReview = readJson(FREEZE_REVIEW_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'browser-global-editor-widget-view-zone-live-execution-next-step-lock',
    sources: {
      browserGlobalEditorWidgetViewZoneLiveExecutionFreezeReview: normalizePath(path.relative(ROOT, FREEZE_REVIEW_PATH)),
    },
    baseline: {
      laneState: freezeReview.decision?.laneState ?? null,
      globalEditorWidgetViewZoneWaveId: freezeReview.proven?.globalEditorWidgetViewZoneWaveId ?? null,
      approvedSurface: freezeReview.proven?.approvedSurface ?? [],
    },
    decision: {
      nextApprovedAction: 'browser-lane-freeze-review',
      browserLaneFreezeMayStartOnlyAfterGlobalFreeze: true,
      browserBeyondReviewChangesGlobalSurfaceExpansionBlocked: true,
      browserFurtherUtilBatchExpansionBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    allowedNow: [
      'browser global editor/widget/view-zone live freeze artifacts',
      'browser lane freeze review only',
      'browser-specific diagnostics refinement',
    ],
    blockedNow: [
      'browser beyond the approved reviewChanges global editor/widget/view-zone surface expansion',
      'browser further util-batch expansion',
      'cross-lane expansion',
      'rename-driven work',
    ],
    stopConditions: [
      'do not widen global editor/widget/view-zone execution beyond DBGEWV1 after the surface live outcome is frozen',
      'do not reopen browser util or batch expansion after candidate pool exhaustion',
      'do not start cross-lane or post-browser promotion work before browser lane freeze review concludes',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

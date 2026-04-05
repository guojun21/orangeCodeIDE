#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const FREEZE_REVIEW_PATH = path.join(
  ROOT,
  'mapped',
  'startup-module-resolution-review-changes-browser-broader-editor-widget-view-zone-live-execution-freeze-review.json'
);
const OUTPUT_PATH = path.join(
  ROOT,
  'mapped',
  'startup-module-resolution-review-changes-browser-broader-editor-widget-view-zone-live-execution-next-step-lock.json'
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
    phase: 'browser-broader-editor-widget-view-zone-live-execution-next-step-lock',
    sources: {
      browserBroaderEditorWidgetViewZoneLiveExecutionFreezeReview: normalizePath(path.relative(ROOT, FREEZE_REVIEW_PATH)),
    },
    baseline: {
      laneState: freezeReview.decision?.laneState ?? null,
      broaderEditorWidgetViewZoneWaveId: freezeReview.proven?.broaderEditorWidgetViewZoneWaveId ?? null,
      approvedSurface: freezeReview.proven?.approvedSurface ?? [],
    },
    decision: {
      nextApprovedAction: 'browser-global-editor-widget-view-zone-admission-plan',
      globalEditorWidgetViewZoneAdmissionMayStartOnlyAfterBroaderFreeze: true,
      browserGlobalEditorWidgetViewZoneLiveBlocked: true,
      browserFurtherUtilBatchExpansionBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    allowedNow: [
      'browser broader editor/widget/view-zone live freeze artifacts',
      'browser global editor/widget/view-zone admission planning only',
      'browser-specific diagnostics refinement',
    ],
    blockedNow: [
      'browser global editor/widget/view-zone live',
      'browser further util-batch expansion',
      'cross-lane expansion',
      'rename-driven work',
    ],
    stopConditions: [
      'do not start global editor/widget/view-zone live before a dedicated global admission, contract, and execution chain is completed',
      'do not reopen browser util or batch expansion after candidate pool exhaustion',
      'do not widen broader editor/widget/view-zone execution beyond DBEWV1 after the surface live outcome is frozen',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-broader-editor-widget-view-zone-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-broader-editor-widget-view-zone-next-step-lock.json');

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
    phase: 'browser-broader-editor-widget-view-zone-next-step-lock',
    sources: {
      browserBroaderEditorWidgetViewZoneFreezeReview: normalizePath(path.relative(ROOT, FREEZE_REVIEW_PATH)),
    },
    baseline: {
      laneState: freezeReview.decision?.laneState ?? null,
      surfaceWaveId: freezeReview.admittedSurface?.surfaceWaveId ?? null,
      approvedSurface: freezeReview.admittedSurface?.selectedModules ?? [],
    },
    decision: {
      nextApprovedAction: 'browser-broader-editor-widget-view-zone-contract-plan',
      approvedSurfaceOnly: freezeReview.admittedSurface?.selectedModules ?? [],
      browserBroaderUiLiveBlocked: true,
      browserGlobalEditorWidgetViewZoneExpansionBlocked: true,
      browserFurtherUtilBatchExpansionBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    allowedNow: [
      'browser broader editor/widget/view-zone admission freeze artifacts',
      'browser broader editor/widget/view-zone contract planning only',
      'browser-specific diagnostics refinement',
    ],
    blockedNow: [
      'browser broader editor/widget/view-zone live',
      'browser global editor/widget/view-zone expansion beyond the approved bridge surface',
      'browser further util-batch expansion',
      'cross-lane expansion',
      'rename-driven work',
    ],
    stopConditions: [
      'do not execute broader editor/widget/view-zone live before a dedicated contract, preflight, and freeze chain is completed',
      'do not widen broader editor/widget/view-zone admission beyond DBEWV1A before contract outcome is frozen',
      'do not reopen browser util or batch expansion after candidate pool exhaustion',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

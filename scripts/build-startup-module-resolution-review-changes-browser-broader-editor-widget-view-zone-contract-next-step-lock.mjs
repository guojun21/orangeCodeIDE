#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const CONTRACT_FREEZE_REVIEW_PATH = path.join(
  ROOT,
  'mapped',
  'startup-module-resolution-review-changes-browser-broader-editor-widget-view-zone-contract-freeze-review.json'
);
const OUTPUT_PATH = path.join(
  ROOT,
  'mapped',
  'startup-module-resolution-review-changes-browser-broader-editor-widget-view-zone-contract-next-step-lock.json'
);

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const freezeReview = readJson(CONTRACT_FREEZE_REVIEW_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'browser-broader-editor-widget-view-zone-contract-next-step-lock',
    sources: {
      browserBroaderEditorWidgetViewZoneContractFreezeReview: normalizePath(path.relative(ROOT, CONTRACT_FREEZE_REVIEW_PATH)),
    },
    baseline: {
      laneState: freezeReview.decision?.laneState ?? null,
      surfaceWaveId: freezeReview.broaderEditorWidgetViewZoneContract?.surfaceWaveId ?? null,
      approvedSurface: freezeReview.broaderEditorWidgetViewZoneContract?.selectedModules ?? [],
    },
    decision: {
      nextApprovedAction: 'browser-broader-editor-widget-view-zone-live-execution',
      approvedSurfaceOnly: freezeReview.broaderEditorWidgetViewZoneContract?.selectedModules ?? [],
      browserBroaderUiLiveBlocked: true,
      browserGlobalEditorWidgetViewZoneExpansionBlocked: true,
      browserFurtherUtilBatchExpansionBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    minimumWin: freezeReview.minimumWin ?? {},
    scopeBoundary: freezeReview.scopeBoundary ?? {},
    followUpPriority: freezeReview.followUpPriority ?? {},
    allowedNow: [
      'browser broader editor/widget/view-zone contract artifacts',
      'browser broader editor/widget/view-zone live execution only',
      'browser-specific diagnostics refinement',
    ],
    blockedNow: [
      'browser global editor/widget/view-zone expansion beyond the approved bridge surface',
      'browser further util-batch expansion',
      'cross-lane expansion',
      'rename-driven work',
    ],
    stopConditions: [
      'do not widen broader editor/widget/view-zone execution beyond DBEWV1A before execution outcome is frozen',
      'do not start global browser/editor/widget/view-zone expansion before broader bridge execution outcome is frozen',
      'do not reopen browser util or batch expansion after candidate pool exhaustion',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

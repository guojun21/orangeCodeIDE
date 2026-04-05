#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const CONTRACT_FREEZE_REVIEW_PATH = path.join(
  ROOT,
  'mapped',
  'startup-module-resolution-review-changes-browser-global-editor-widget-view-zone-contract-freeze-review.json'
);
const OUTPUT_PATH = path.join(
  ROOT,
  'mapped',
  'startup-module-resolution-review-changes-browser-global-editor-widget-view-zone-contract-next-step-lock.json'
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
    phase: 'browser-global-editor-widget-view-zone-contract-next-step-lock',
    sources: {
      browserGlobalEditorWidgetViewZoneContractFreezeReview: normalizePath(path.relative(ROOT, CONTRACT_FREEZE_REVIEW_PATH)),
    },
    baseline: {
      laneState: freezeReview.decision?.laneState ?? null,
      surfaceWaveId: freezeReview.globalEditorWidgetViewZoneContract?.surfaceWaveId ?? null,
      approvedSurface: freezeReview.globalEditorWidgetViewZoneContract?.selectedModules ?? [],
    },
    decision: {
      nextApprovedAction: 'browser-global-editor-widget-view-zone-live-execution',
      approvedSurfaceOnly: freezeReview.globalEditorWidgetViewZoneContract?.selectedModules ?? [],
      browserGlobalEditorWidgetViewZoneLiveBlocked: true,
      browserBeyondReviewChangesGlobalSurfaceExpansionBlocked: true,
      browserFurtherUtilBatchExpansionBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    minimumWin: freezeReview.minimumWin ?? {},
    scopeBoundary: freezeReview.scopeBoundary ?? {},
    followUpPriority: freezeReview.followUpPriority ?? {},
    allowedNow: [
      'browser global editor/widget/view-zone contract artifacts',
      'browser global editor/widget/view-zone live execution only',
      'browser-specific diagnostics refinement',
    ],
    blockedNow: [
      'browser beyond the approved reviewChanges global editor/widget/view-zone surface expansion',
      'browser further util-batch expansion',
      'cross-lane expansion',
      'rename-driven work',
    ],
    stopConditions: [
      'do not widen global editor/widget/view-zone execution beyond DBGEWV1A before execution outcome is frozen',
      'do not start browser lane beyond the approved reviewChanges global editor/widget/view-zone surface before global execution outcome is frozen',
      'do not reopen browser util or batch expansion after candidate pool exhaustion',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

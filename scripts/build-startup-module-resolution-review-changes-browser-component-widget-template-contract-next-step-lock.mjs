#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const CONTRACT_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-component-widget-template-contract-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-component-widget-template-contract-next-step-lock.json');

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
    phase: 'browser-component-widget-template-contract-next-step-lock',
    sources: {
      browserComponentWidgetTemplateContractFreezeReview: normalizePath(path.relative(ROOT, CONTRACT_FREEZE_REVIEW_PATH)),
    },
    baseline: {
      laneState: freezeReview.decision?.laneState ?? null,
      surfaceWaveId: freezeReview.componentWidgetTemplateContract?.surfaceWaveId ?? null,
      approvedSurface: freezeReview.componentWidgetTemplateContract?.selectedModules ?? [],
    },
    decision: {
      nextApprovedAction: 'browser-component-widget-template-live-execution',
      approvedSurfaceOnly: freezeReview.componentWidgetTemplateContract?.selectedModules ?? [],
      browserComponentWidgetTemplateLiveBlocked: true,
      browserHeavierUiSurfaceBlocked: true,
      browserFurtherUtilBatchExpansionBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    minimumWin: freezeReview.minimumWin ?? {},
    scopeBoundary: freezeReview.scopeBoundary ?? {},
    followUpPriority: freezeReview.followUpPriority ?? {},
    allowedNow: [
      'browser component/widget/template contract artifacts',
      'browser component/widget/template live execution only',
      'browser-specific diagnostics refinement',
    ],
    blockedNow: [
      'browser heavier UI/view-zone',
      'browser further util-batch expansion',
      'cross-lane expansion',
      'rename-driven work',
    ],
    stopConditions: [
      'do not widen component/widget/template execution beyond DBCWT1A before execution outcome is frozen',
      'do not start heavier UI admission before component/widget/template execution outcome is frozen',
      'do not reopen browser util or batch expansion after candidate pool exhaustion',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

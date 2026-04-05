#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-component-widget-template-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-component-widget-template-next-step-lock.json');

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
    phase: 'browser-component-widget-template-next-step-lock',
    sources: {
      browserComponentWidgetTemplateFreezeReview: normalizePath(path.relative(ROOT, FREEZE_REVIEW_PATH)),
    },
    baseline: {
      laneState: freezeReview.decision?.laneState ?? null,
      surfaceWaveId: freezeReview.admittedSurface?.surfaceWaveId ?? null,
      approvedSurface: freezeReview.admittedSurface?.selectedModules ?? [],
    },
    decision: {
      nextApprovedAction: 'browser-component-widget-template-contract-plan',
      approvedSurfaceOnly: freezeReview.admittedSurface?.selectedModules ?? [],
      browserComponentWidgetTemplateLiveBlocked: true,
      browserHeavierUiSurfaceBlocked: true,
      browserFurtherUtilBatchExpansionBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    allowedNow: [
      'browser component/widget/template admission freeze artifacts',
      'browser component/widget/template contract planning only',
      'browser-specific diagnostics refinement',
    ],
    blockedNow: [
      'browser component/widget/template live',
      'browser heavier UI/view-zone admission',
      'browser further util-batch expansion',
      'cross-lane expansion',
      'rename-driven work',
    ],
    stopConditions: [
      'do not execute component/widget/template live before a dedicated contract, preflight, and freeze chain is completed',
      'do not start heavier UI admission before component/widget/template execution outcome is frozen',
      'do not reopen browser util or batch expansion after candidate pool exhaustion',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

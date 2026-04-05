#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-component-widget-template-live-execution-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-component-widget-template-live-execution-next-step-lock.json');

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
    phase: 'browser-component-widget-template-live-execution-next-step-lock',
    sources: {
      browserComponentWidgetTemplateLiveExecutionFreezeReview: normalizePath(path.relative(ROOT, FREEZE_REVIEW_PATH)),
    },
    baseline: {
      laneState: freezeReview.decision?.laneState ?? null,
      componentWidgetTemplateWaveId: freezeReview.proven?.componentWidgetTemplateWaveId ?? null,
      approvedSurface: freezeReview.proven?.approvedSurface ?? [],
    },
    decision: {
      nextApprovedAction: 'browser-heavier-ui-admission-plan',
      heavierUiAdmissionMayStartOnlyAfterComponentWidgetTemplateFreeze: true,
      browserHeavierUiLiveBlocked: true,
      browserFurtherUtilBatchExpansionBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    allowedNow: [
      'browser component/widget/template live freeze artifacts',
      'browser heavier UI/view-zone admission planning only',
      'browser-specific diagnostics refinement',
    ],
    blockedNow: [
      'browser heavier UI/view-zone live',
      'browser further util-batch expansion',
      'cross-lane expansion',
      'rename-driven work',
    ],
    stopConditions: [
      'do not start heavier UI live before a dedicated heavier-ui admission, contract, and execution chain is completed',
      'do not reopen browser util or batch expansion after candidate pool exhaustion',
      'do not widen component/widget/template execution beyond DBCWT1 after the surface live outcome is frozen',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

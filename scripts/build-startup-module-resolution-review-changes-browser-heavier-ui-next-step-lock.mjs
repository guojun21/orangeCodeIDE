#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-heavier-ui-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-heavier-ui-next-step-lock.json');

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
    phase: 'browser-heavier-ui-next-step-lock',
    sources: {
      browserHeavierUiFreezeReview: normalizePath(path.relative(ROOT, FREEZE_REVIEW_PATH)),
    },
    baseline: {
      laneState: freezeReview.decision?.laneState ?? null,
      surfaceWaveId: freezeReview.admittedSurface?.surfaceWaveId ?? null,
      approvedSurface: freezeReview.admittedSurface?.selectedModules ?? [],
    },
    decision: {
      nextApprovedAction: 'browser-heavier-ui-contract-plan',
      approvedSurfaceOnly: freezeReview.admittedSurface?.selectedModules ?? [],
      browserHeavierUiLiveBlocked: true,
      browserBroaderUiAdmissionBlocked: true,
      browserFurtherUtilBatchExpansionBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    allowedNow: [
      'browser heavier UI admission freeze artifacts',
      'browser heavier UI contract planning only',
      'browser-specific diagnostics refinement',
    ],
    blockedNow: [
      'browser heavier UI/view-zone live',
      'browser broader editor/widget/view-zone admission',
      'browser further util-batch expansion',
      'cross-lane expansion',
      'rename-driven work',
    ],
    stopConditions: [
      'do not execute heavier UI live before a dedicated contract, preflight, and freeze chain is completed',
      'do not start broader browser/editor/widget/view-zone admission before heavier UI execution outcome is frozen',
      'do not reopen browser util or batch expansion after candidate pool exhaustion',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const CONTRACT_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-heavier-ui-contract-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-heavier-ui-contract-next-step-lock.json');

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
    phase: 'browser-heavier-ui-contract-next-step-lock',
    sources: {
      browserHeavierUiContractFreezeReview: normalizePath(path.relative(ROOT, CONTRACT_FREEZE_REVIEW_PATH)),
    },
    baseline: {
      laneState: freezeReview.decision?.laneState ?? null,
      surfaceWaveId: freezeReview.heavierUiContract?.surfaceWaveId ?? null,
      approvedSurface: freezeReview.heavierUiContract?.selectedModules ?? [],
    },
    decision: {
      nextApprovedAction: 'browser-heavier-ui-live-execution',
      approvedSurfaceOnly: freezeReview.heavierUiContract?.selectedModules ?? [],
      browserHeavierUiLiveBlocked: true,
      browserBroaderUiAdmissionBlocked: true,
      browserFurtherUtilBatchExpansionBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    minimumWin: freezeReview.minimumWin ?? {},
    scopeBoundary: freezeReview.scopeBoundary ?? {},
    followUpPriority: freezeReview.followUpPriority ?? {},
    allowedNow: [
      'browser heavier UI contract artifacts',
      'browser heavier UI live execution only',
      'browser-specific diagnostics refinement',
    ],
    blockedNow: [
      'browser broader editor/widget/view-zone admission',
      'browser further util-batch expansion',
      'cross-lane expansion',
      'rename-driven work',
    ],
    stopConditions: [
      'do not widen heavier UI execution beyond DBHUI1A before execution outcome is frozen',
      'do not start broader browser/editor/widget/view-zone admission before heavier UI execution outcome is frozen',
      'do not reopen browser util or batch expansion after candidate pool exhaustion',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();

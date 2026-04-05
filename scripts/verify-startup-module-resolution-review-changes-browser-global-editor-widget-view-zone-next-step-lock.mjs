#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(
  ROOT,
  'mapped',
  'startup-module-resolution-review-changes-browser-global-editor-widget-view-zone-next-step-lock.json'
);
const OUTPUT_PATH = path.join(
  ROOT,
  'mapped',
  'startup-module-resolution-review-changes-browser-global-editor-widget-view-zone-next-step-lock-verify.json'
);

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const report = readJson(INPUT_PATH);
  const allowedNow = report.allowedNow ?? [];
  const blockedNow = report.blockedNow ?? [];
  const stopConditions = report.stopConditions ?? [];

  const checks = {
    lanePinned: report.lane === 'browser',
    phasePinned: report.phase === 'browser-global-editor-widget-view-zone-next-step-lock',
    baselinePinned:
      report.baseline?.laneState === 'five-single-live-proven-first-and-second-and-third-batch-live-proven-component-widget-template-live-proven-heavier-ui-live-proven-broader-editor-widget-view-zone-live-proven-global-editor-widget-view-zone-admission-planned'
      && report.baseline?.globalEditorWidgetViewZoneWaveId === 'DBGEWV1A'
      && Array.isArray(report.baseline?.approvedSurface)
      && report.baseline.approvedSurface.length === 14,
    decisionPinned:
      report.decision?.nextApprovedAction === 'browser-global-editor-widget-view-zone-contract-plan'
      && Array.isArray(report.decision?.approvedSurfaceOnly)
      && report.decision.approvedSurfaceOnly.length === 14
      && report.decision?.browserGlobalEditorWidgetViewZoneLiveBlocked === true
      && report.decision?.browserBeyondReviewChangesGlobalSurfaceExpansionBlocked === true
      && report.decision?.browserFurtherUtilBatchExpansionBlocked === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    allowedNowPinned:
      allowedNow.includes('browser global editor/widget/view-zone admission freeze artifacts')
      && allowedNow.includes('browser global editor/widget/view-zone contract planning only')
      && allowedNow.includes('browser-specific diagnostics refinement'),
    blockedNowPinned:
      blockedNow.includes('browser global editor/widget/view-zone live')
      && blockedNow.includes('browser beyond the approved reviewChanges global editor/widget/view-zone surface expansion')
      && blockedNow.includes('browser further util-batch expansion')
      && blockedNow.includes('cross-lane expansion')
      && blockedNow.includes('rename-driven work'),
    stopConditionsPinned:
      stopConditions.includes('do not execute global editor/widget/view-zone live before a dedicated contract, preflight, and freeze chain is completed')
      && stopConditions.includes('do not widen global editor/widget/view-zone admission beyond DBGEWV1A before contract outcome is frozen')
      && stopConditions.includes('do not reopen browser util or batch expansion after candidate pool exhaustion'),
  };

  const failedChecks = Object.entries(checks)
    .filter(([, passed]) => !passed)
    .map(([name]) => name);

  const output = {
    generatedAt: new Date().toISOString(),
    inputPath: normalizePath(path.relative(ROOT, INPUT_PATH)),
    checks,
    failedChecks,
    passed: failedChecks.length === 0,
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(output, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
  console.log(`Passed: ${output.passed}`);
  if (!output.passed) {
    process.exitCode = 1;
  }
}

main();

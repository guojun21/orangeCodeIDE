#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(
  ROOT,
  'mapped',
  'startup-module-resolution-review-changes-browser-lane-freeze-review.json'
);
const OUTPUT_PATH = path.join(
  ROOT,
  'mapped',
  'startup-module-resolution-review-changes-browser-lane-freeze-review-verify.json'
);

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const report = readJson(INPUT_PATH);
  const allowedNow = report.guardrails?.allowedNow ?? [];
  const blockedNow = report.guardrails?.blockedNow ?? [];
  const stopConditions = report.guardrails?.stopConditions ?? [];

  const checks = {
    lanePinned: report.lane === 'browser',
    phasePinned: report.phase === 'browser-lane-freeze-review',
    baselinePinned:
      report.baseline?.laneState === 'five-single-live-proven-first-and-second-and-third-batch-live-proven-component-widget-template-live-proven-heavier-ui-live-proven-broader-editor-widget-view-zone-live-proven-global-editor-widget-view-zone-live-proven'
      && report.baseline?.stableRuntimeStillGreen === true,
    provenPinned:
      report.proven?.firstSingleLiveWaveId === 'DBR1L'
      && report.proven?.secondSingleLiveWaveId === 'DBR2L'
      && report.proven?.thirdSingleLiveWaveId === 'DBR3L'
      && report.proven?.fourthSingleLiveWaveId === 'DBR4L'
      && report.proven?.fifthSingleLiveWaveId === 'DBR5L'
      && report.proven?.firstBatchWaveId === 'DBRB1'
      && report.proven?.secondBatchWaveId === 'DBRB2'
      && report.proven?.thirdBatchWaveId === 'DBRB3'
      && report.proven?.componentWidgetTemplateWaveId === 'DBCWT1'
      && report.proven?.heavierUiWaveId === 'DBHUI1'
      && report.proven?.broaderEditorWidgetViewZoneWaveId === 'DBEWV1'
      && report.proven?.globalEditorWidgetViewZoneWaveId === 'DBGEWV1'
      && Array.isArray(report.proven?.approvedGlobalSurface)
      && report.proven.approvedGlobalSurface.length === 14
      && report.proven?.diagnostics?.overlayHitCount === 14
      && report.proven?.diagnostics?.stickyDisabledCount === 0,
    decisionPinned:
      report.decision?.laneFrozen === true
      && report.decision?.laneState === 'review-changes-browser-lane-global-live-proven'
      && report.decision?.nextApprovedAction === 'review-changes-lane-freeze-review'
      && report.decision?.browserSurfaceExhausted === true
      && report.decision?.browserBeyondReviewChangesGlobalSurfaceExpansionBlocked === true
      && report.decision?.browserFurtherUtilBatchExpansionBlocked === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    guardrailsPinned:
      allowedNow.includes('browser lane freeze artifacts')
      && allowedNow.includes('reviewChanges lane freeze review only')
      && blockedNow.includes('browser beyond the approved reviewChanges global editor/widget/view-zone surface expansion')
      && blockedNow.includes('browser further util-batch expansion')
      && blockedNow.includes('cross-lane expansion')
      && blockedNow.includes('rename-driven work')
      && stopConditions.includes('do not reopen browser util or batch expansion after candidate pool exhaustion')
      && stopConditions.includes('do not start post-browser promotion work before reviewChanges lane freeze review concludes')
      && stopConditions.includes('do not widen browser global surface beyond DBGEWV1 after browser lane freeze is recorded'),
    transitionPinned:
      report.transition?.fromNextApprovedAction === 'browser-lane-freeze-review'
      && report.transition?.browserLaneFreezeMayStartOnlyAfterGlobalFreeze === true,
    minimumWinPinned:
      report.minimumWin?.definition === 'browser lane freeze review verify green and nextApprovedAction uniquely locked to review-changes-lane-freeze-review'
      && Array.isArray(report.minimumWin?.mustVerify)
      && report.minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-lane-freeze-review-verify.json'),
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

#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fourth-live-execution-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fourth-live-execution-freeze-review-verify.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const report = readJson(INPUT_PATH);
  const blockedNow = report.blockedNow ?? [];
  const fourthModuleId = 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/generatedFilesConstants.js';

  const checks = {
    lanePinned: report.lane === 'browser',
    phasePinned: report.phase === 'fourth-live-execution-freeze-review',
    baselinePinned:
      report.baseline?.laneState === 'three-single-live-proven-first-batch-live-proven-fourth-live-contract-ready'
      && typeof report.baseline?.latestAcceptAt === 'string'
      && report.baseline?.stableRuntimeStillGreen === true,
    firstLivePinned:
      report.proven?.firstSingleLiveModuleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/hooks/useResourceLineCounts.js'
      && report.proven?.firstSingleLiveWaveId === 'DBR1L',
    secondLivePinned:
      report.proven?.secondSingleLiveModuleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/discussionUtils.js'
      && report.proven?.secondSingleLiveWaveId === 'DBR2L',
    thirdLivePinned:
      report.proven?.thirdSingleLiveModuleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/diffMentionUtils.js'
      && report.proven?.thirdSingleLiveWaveId === 'DBR3L',
    batchPinned: report.proven?.batchWaveId === 'DBRB1',
    fourthLivePinned:
      report.proven?.fourthSingleLiveModuleId === fourthModuleId
      && report.proven?.fourthSingleLiveWaveId === 'DBR4L'
      && (report.proven?.overlayProbeIds ?? []).includes(fourthModuleId)
      && (report.proven?.factoryHitIds ?? []).includes(fourthModuleId)
      && (report.proven?.diagnostics?.overlayHitCount ?? 0) >= 1,
    decisionPinned:
      report.decision?.laneFrozen === true
      && report.decision?.laneState === 'four-single-live-proven-first-batch-live-proven'
      && report.decision?.nextApprovedStep === 'browser-fourth-live-execution-next-step-lock'
      && report.decision?.secondBatchDiscussionUnlocked === true
      && report.decision?.browserSecondBatchLiveStillBlocked === true
      && report.decision?.browserComponentWidgetTemplateStillBlocked === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    blockedNowScoped:
      blockedNow.includes('browser second batch live')
      && blockedNow.includes('browser component or widget live')
      && blockedNow.includes('browser template-surface live')
      && blockedNow.includes('cross-lane expansion')
      && blockedNow.includes('browser runner-up admission before second-batch planning'),
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

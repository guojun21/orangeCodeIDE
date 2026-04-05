#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-batch-live-execution-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-batch-live-execution-freeze-review-verify.json');

const APPROVED_BATCH = [
  'out-build/vs/workbench/contrib/reviewChanges/browser/hooks/useResourceLineCounts.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/discussionUtils.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/diffMentionUtils.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/generatedFilesConstants.js',
];

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function sameSet(left, right) {
  const l = [...new Set(left ?? [])].sort();
  const r = [...new Set(right ?? [])].sort();
  return JSON.stringify(l) === JSON.stringify(r);
}

function main() {
  const report = readJson(INPUT_PATH);
  const blockedNow = report.blockedNow ?? [];

  const checks = {
    lanePinned: report.lane === 'browser',
    phasePinned: report.phase === 'browser-second-batch-live-execution-freeze-review',
    baselinePinned:
      report.baseline?.laneState === 'four-single-live-proven-first-batch-live-proven-second-batch-contract-ready'
      && typeof report.baseline?.latestAcceptAt === 'string'
      && report.baseline?.stableRuntimeStillGreen === true,
    firstLivePinned:
      report.proven?.firstSingleLiveModuleId === APPROVED_BATCH[0]
      && report.proven?.firstSingleLiveWaveId === 'DBR1L',
    secondLivePinned:
      report.proven?.secondSingleLiveModuleId === APPROVED_BATCH[1]
      && report.proven?.secondSingleLiveWaveId === 'DBR2L',
    thirdLivePinned:
      report.proven?.thirdSingleLiveModuleId === APPROVED_BATCH[2]
      && report.proven?.thirdSingleLiveWaveId === 'DBR3L',
    fourthLivePinned:
      report.proven?.fourthSingleLiveModuleId === APPROVED_BATCH[3]
      && report.proven?.fourthSingleLiveWaveId === 'DBR4L',
    secondBatchLivePinned:
      report.proven?.firstBatchWaveId === 'DBRB1'
      && report.proven?.secondBatchWaveId === 'DBRB2'
      && sameSet(report.proven?.approvedSecondBatch, APPROVED_BATCH)
      && sameSet(report.proven?.overlayProbeIds, APPROVED_BATCH)
      && sameSet(report.proven?.factoryHitIds, APPROVED_BATCH)
      && (report.proven?.diagnostics?.overlayHitCount ?? -1) === 4
      && (report.proven?.diagnostics?.originalPassCount ?? -1) === 0
      && (report.proven?.diagnostics?.fallbackCount ?? -1) === 0
      && (report.proven?.diagnostics?.stickyDisabledCount ?? -1) === 0,
    decisionPinned:
      report.decision?.laneFrozen === true
      && report.decision?.laneState === 'four-single-live-proven-first-and-second-batch-live-proven'
      && report.decision?.nextApprovedStep === 'browser-second-batch-live-execution-next-step-lock'
      && report.decision?.fifthCandidateDiscussionUnlocked === true
      && report.decision?.browserThirdBatchScopeExpansionStillBlocked === true
      && report.decision?.browserComponentWidgetTemplateStillBlocked === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    blockedNowScoped:
      blockedNow.includes('browser third batch scope expansion')
      && blockedNow.includes('browser component/widget/template')
      && blockedNow.includes('cross-lane expansion')
      && blockedNow.includes('rename-driven work'),
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

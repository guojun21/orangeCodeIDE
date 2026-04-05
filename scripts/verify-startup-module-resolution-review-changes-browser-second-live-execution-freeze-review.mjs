#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-live-execution-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-live-execution-freeze-review-verify.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const report = readJson(INPUT_PATH);
  const blockedNow = report.blockedNow ?? [];
  const secondModuleId = 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/discussionUtils.js';

  const checks = {
    lanePinned: report.lane === 'browser',
    phasePinned: report.phase === 'second-live-execution-freeze-review',
    baselinePinned:
      report.baseline?.laneState === 'single-live-proven-second-live-contract-ready-still-no-batch'
      && typeof report.baseline?.latestAcceptAt === 'string'
      && report.baseline?.stableRuntimeStillGreen === true,
    firstLivePinned:
      report.proven?.firstSingleLiveModuleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/hooks/useResourceLineCounts.js'
      && report.proven?.firstSingleLiveWaveId === 'DBR1L',
    secondLivePinned:
      report.proven?.secondSingleLiveModuleId === secondModuleId
      && report.proven?.secondSingleLiveWaveId === 'DBR2L'
      && (report.proven?.overlayProbeIds ?? []).includes(secondModuleId)
      && (report.proven?.factoryHitIds ?? []).includes(secondModuleId)
      && (report.proven?.diagnostics?.overlayHitCount ?? 0) >= 1,
    decisionPinned:
      report.decision?.laneFrozen === true
      && report.decision?.laneState === 'two-single-live-proven-still-no-batch'
      && report.decision?.nextApprovedStep === 'browser-second-live-execution-next-step-lock'
      && report.decision?.browserMultiModuleBatchStillBlocked === true
      && report.decision?.componentWidgetTemplateStillBlocked === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    blockedNowScoped:
      blockedNow.includes('browser multi-module batch live')
      && blockedNow.includes('browser component or widget live')
      && blockedNow.includes('browser template-surface live')
      && blockedNow.includes('cross-lane expansion')
      && blockedNow.includes('browser third candidate execution before admission'),
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

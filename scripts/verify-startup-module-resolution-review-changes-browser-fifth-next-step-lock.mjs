#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fifth-next-step-lock.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fifth-next-step-lock-verify.json');

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
    phasePinned: report.phase === 'fifth-next-step-lock',
    baselinePinned:
      report.baseline?.laneState === 'four-single-live-proven-first-and-second-batch-live-proven-fifth-candidate-planned'
      && report.baseline?.firstBatchWaveId === 'DBRB1'
      && report.baseline?.secondBatchWaveId === 'DBRB2'
      && report.baseline?.plannedModuleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciMessageUtils.js'
      && report.baseline?.plannedWaveId === 'DBR5A',
    decisionPinned:
      report.decision?.nextApprovedAction === 'browser-fifth-dedicated-no-op-runtime-plan'
      && report.decision?.approvedCandidateOnly === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciMessageUtils.js'
      && report.decision?.browserThirdBatchScopeExpansionBlocked === true
      && report.decision?.browserComponentWidgetTemplateBlocked === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    allowedNowScoped:
      allowedNow.includes('browser fifth candidate admission artifacts')
      && allowedNow.includes('browser fifth dedicated no-op runtime planning only'),
    blockedNowScoped:
      blockedNow.includes('browser third batch scope expansion')
      && blockedNow.includes('browser component or widget live')
      && blockedNow.includes('browser template-surface live')
      && blockedNow.includes('cross-lane expansion')
      && blockedNow.includes('browser fifth candidate live execution'),
    stopConditionsPinned:
      stopConditions.includes('do not discuss DBR5L until DBR5A dedicated no-op runtime gate completes')
      && stopConditions.includes('do not widen browser batch beyond DBRB2 members before browser fifth candidate planning outcome is frozen')
      && stopConditions.includes('do not start component/widget/template admission before browser fifth candidate runtime outcome is frozen'),
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

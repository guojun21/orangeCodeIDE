#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-lane-policy.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-lane-policy-verify.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const report = readJson(INPUT_PATH);
  const runtimeGate = report.browserMeasuredNoOp?.runtimeGate ?? {};
  const allowedNow = report.allowedNow ?? [];
  const blockedNow = report.blockedNow ?? [];
  const stability = report.baseline?.qualityStability ?? {};

  const checks = {
    lanePinned: report.lane === 'browser',
    phasePinned: report.phase === 'measured-no-op-hold',
    admissionReady: report.browserMeasuredNoOp?.admissionReady === true,
    admissionVerifyPassed: report.browserMeasuredNoOp?.admissionVerifyPassed === true,
    runtimeGatePassed: runtimeGate.passed === true,
    runtimeNoOpShape:
      runtimeGate.expectedWaveId === 'DBR1'
      && runtimeGate.overlayHitCount === 0
      && runtimeGate.originalPassCount === 1,
    modulePinned:
      report.browserMeasuredNoOp?.moduleId
      === 'out-build/vs/workbench/contrib/reviewChanges/browser/hooks/useResourceLineCounts.js',
    nextActionPinned: report.decision?.nextApprovedAction === 'browser-single-live-admission-plan',
    liveStillBlocked: report.decision?.liveStillBlocked === true,
    renameStillOff: report.decision?.renameOnMainline === false,
    inheritedManagerBatchProven: report.inheritedPrereqs?.managerIncludingBatchLive?.passed === true,
    inheritedStatefulProven: report.inheritedPrereqs?.secondStatefulCandidateLive?.passed === true,
    allowedNowScoped:
      allowedNow.includes('browser single-live admission planning for DBR1 only')
      && allowedNow.includes('browser export-signature and fallback diagnostics for DBR1 only'),
    blockedNowScoped:
      blockedNow.includes('browser live canary execution')
      && blockedNow.includes('browser multi-module batch live')
      && blockedNow.includes('browser component or widget modules'),
    stableRuntimeStillGreen:
      stability.headlessVerifyPassed === true
      && stability.acceptRecorded === true
      && stability.startupLoaderRuntimeGatePassed === true
      && stability.startupLoaderRolloutGatePassed === true,
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

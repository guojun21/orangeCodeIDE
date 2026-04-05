#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-manager-admission.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-manager-admission-verify.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const report = readJson(INPUT_PATH);
  const checks = {
    lanePinned: report.lane === 'contrib-reviewChanges',
    managerCategoryPinned: report.admissionDecision?.category === 'manager-stateful',
    nextActionPinned: report.admissionDecision?.nextAction === 'dedicated-no-op-runtime-gate',
    managerHoldPinned: report.policyChecks?.managerHoldPinned === true,
    browserStillHeld: report.policyChecks?.browserStillHeld === true,
    startupInputPresent: report.riskSignals?.startupInputPresent === true,
    mutableStateDetected:
      report.riskSignals?.mutableResourceMap === true
      && report.riskSignals?.currentResourcesArray === true,
    cleanupHooksDetected:
      report.riskSignals?.disposesRemovedResources === true
      && report.riskSignals?.clearsResourceMapOnDispose === true,
    eventingDetected: report.riskSignals?.emitsChangeEvent === true,
    resourceHydrationDetected:
      report.riskSignals?.hydratesResourceSkeletons === true
      && report.riskSignals?.companionResourceHydratesModels === true,
    liveStillBlocked: report.admissionDecision?.liveStillBlocked === true,
    managerGatesEnumerated: Array.isArray(report.admissionDecision?.liveBlockedUntil) && report.admissionDecision.liveBlockedUntil.length >= 5,
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

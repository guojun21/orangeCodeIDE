#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-admission.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-admission-verify.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const report = readJson(INPUT_PATH);
  const checks = {
    lanePinned: report.lane === 'browser',
    wavePinned: report.candidate?.waveId === 'DBR1',
    modulePinned: report.candidate?.moduleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/hooks/useResourceLineCounts.js',
    sourcePinned: typeof report.candidate?.sourceFile === 'string' && report.candidate.sourceFile.endsWith('/useResourceLineCounts.js'),
    saferThanPresent: Array.isArray(report.comparison?.saferThan) && report.comparison.saferThan.length >= 2,
    deferredBrowserPresent: Array.isArray(report.comparison?.deferredBrowserModules) && report.comparison.deferredBrowserModules.length >= 3,
    admissionReady: report.decision?.admissionReady === true,
    nextActionPinned: report.decision?.nextAction === 'browser-dedicated-no-op-runtime',
    liveStillBlocked: report.decision?.liveStillBlocked === true,
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

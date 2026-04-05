#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-rollout-discipline.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-rollout-discipline-verify.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const report = readJson(INPUT_PATH);
  const proven = report.provenMicroWaves ?? [];
  const checks = {
    candidatePoolPresent: (report.candidatePool?.candidatePoolCount ?? 0) >= 1,
    deferredLanesPresent: Array.isArray(report.lanePolicy?.deferredLanes) && report.lanePolicy.deferredLanes.length >= 1,
    forbiddenDeepZonesPinned:
      Array.isArray(report.currentPolicy?.nextForbiddenExpansion)
      && report.currentPolicy.nextForbiddenExpansion.includes('browser')
      && report.currentPolicy.nextForbiddenExpansion.includes('contrib-composer')
      && report.currentPolicy.nextForbiddenExpansion.includes('contrib-reviewChanges'),
    renameStillOffMainline: report.currentPolicy?.renameOnMainline === false,
    provenMicroWavesPresent: proven.length >= 4,
    provenMicroWavesAllPassing: proven.length >= 4 && proven.every((entry) => entry.passed === true),
    liveFoundationBatchProven: proven.some((entry) => entry.label === 'F1-dual-foundation-live' && entry.passed === true && entry.enabledCount === 2 && entry.hitCount === 2),
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

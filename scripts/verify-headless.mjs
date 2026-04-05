#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';
import { ROOT } from './paths.mjs';

const SUITE_PATH = path.join(ROOT, 'mapped', 'rebuilt-headless-check-suite.json');
const RESULT_PATH = path.join(ROOT, 'mapped', 'rebuilt-headless-verify.json');

const suiteRun = spawnSync(
  process.execPath,
  [path.join(ROOT, 'scripts', 'run-headless-checks.mjs'), ...process.argv.slice(2)],
  {
    cwd: ROOT,
    stdio: 'inherit',
  }
);

if ((suiteRun.status ?? 1) !== 0) {
  process.exit(suiteRun.status ?? 1);
}

if (!fs.existsSync(SUITE_PATH)) {
  throw new Error(`Headless check suite missing: ${SUITE_PATH}`);
}

const suite = JSON.parse(fs.readFileSync(SUITE_PATH, 'utf8'));
const checks = [
  {
    id: 'runtime-root',
    passed: suite.artifact?.runtimeExists === true,
    detail: suite.artifact?.runtimeRoot ?? null,
  },
  {
    id: 'coverage-gate',
    passed: suite.coverageGate?.passed === true,
    detail: suite.coverageGate ?? null,
  },
  {
    id: 'rebuilt-source-quality',
    passed: suite.sourceQuality?.passed === true,
    detail: suite.sourceQuality?.summary ?? null,
  },
  {
    id: 'slice-maturity',
    passed: true,
    detail: {
      advisoryPassed: suite.maturity?.passed === true,
      summary: suite.maturity?.summary ?? null,
    },
  },
  {
    id: 'slice-artifacts',
    passed: suite.artifact?.slicesOk === true,
    detail: suite.artifact?.sliceChecks ?? null,
  },
  {
    id: 'base-overlay',
    passed: suite.artifact?.overlayOk === true,
    detail: suite.artifact?.baseOverlayChecks ?? null,
  },
  {
    id: 'runtime-integrity',
    passed: suite.integrity?.allMatch === true,
    detail: suite.integrity?.checks ?? null,
  },
  {
    id: 'extension-slices',
    passed: suite.extension?.passed === true,
    detail: {
      logMode: suite.extension?.logMode ?? null,
      checks: suite.extension?.checks ?? null,
    },
  },
  {
    id: 'extension-activation-history',
    passed: true,
    detail: {
      advisoryPassed: suite.activation?.passed === true,
      exthostLogPath: suite.activation?.exthostLogPath ?? null,
      rebuiltExtensionIds: suite.activation?.rebuiltExtensionIds ?? [],
      missingPreviouslyObservedUnrebuilt: suite.activation?.missingPreviouslyObservedUnrebuilt ?? [],
    },
  },
  {
    id: 'runtime-direct-slices',
    passed: suite.runtimeDirect?.passed === true,
    detail: suite.runtimeDirect?.checks ?? null,
  },
  {
    id: 'worker-proxy-slices',
    passed: suite.workerProxy?.passed === true,
    detail: suite.workerProxy?.checks ?? null,
  },
];

const result = {
  generatedAt: new Date().toISOString(),
  suitePath: SUITE_PATH,
  passed: checks.every((entry) => entry.passed),
  checks,
};

fs.writeFileSync(RESULT_PATH, JSON.stringify(result, null, 2) + '\n');
console.log(RESULT_PATH);
process.exit(result.passed ? 0 : 1);

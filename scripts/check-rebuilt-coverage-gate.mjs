#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

import { ROOT } from './paths.mjs';
const COVERAGE_PATH = path.join(ROOT, 'mapped', 'rebuilt-coverage.json');
const BASELINE_PATH = path.join(ROOT, 'mapped', 'rebuilt-coverage-baseline.json');
const HISTORY_PATH = path.join(ROOT, 'mapped', 'rebuilt-coverage-history.jsonl');
const RESULT_PATH = path.join(ROOT, 'mapped', 'rebuilt-coverage-gate.json');
const ACCEPT_BASELINE = process.env.SHOPEECODE_ACCEPT_COVERAGE_BASELINE === '1';

if (!fs.existsSync(COVERAGE_PATH)) {
  throw new Error(`Coverage report missing: ${COVERAGE_PATH}`);
}

const coverage = JSON.parse(fs.readFileSync(COVERAGE_PATH, 'utf8'));
const extensionCoverage = coverage.domains?.extensionEntries;

if (!extensionCoverage) {
  throw new Error('Missing extensionEntries coverage summary');
}

const current = {
  coveredFiles: extensionCoverage.coveredFiles,
  totalFiles: extensionCoverage.totalFiles,
  fileCoveragePct: extensionCoverage.fileCoveragePct,
  coveredBytes: extensionCoverage.coveredBytes,
  totalBytes: extensionCoverage.totalBytes,
  byteCoveragePct: extensionCoverage.byteCoveragePct,
  generatedAt: coverage.generatedAt,
};

let baseline;
let baselineSource = 'existing';
let updatedBaseline = false;

if (!fs.existsSync(BASELINE_PATH)) {
  baseline = current;
  baselineSource = 'initialized-from-current';
  updatedBaseline = true;
} else {
  baseline = JSON.parse(fs.readFileSync(BASELINE_PATH, 'utf8'));
}

if (ACCEPT_BASELINE) {
  baseline = current;
  baselineSource = 'accepted-from-current';
  updatedBaseline = true;
}

const regressions = [];
if (current.coveredFiles < baseline.coveredFiles) {
  regressions.push({
    metric: 'coveredFiles',
    baseline: baseline.coveredFiles,
    current: current.coveredFiles,
  });
}
if (current.coveredBytes < baseline.coveredBytes) {
  regressions.push({
    metric: 'coveredBytes',
    baseline: baseline.coveredBytes,
    current: current.coveredBytes,
  });
}

const improved =
  current.coveredFiles > baseline.coveredFiles ||
  current.coveredBytes > baseline.coveredBytes;

if (improved && !ACCEPT_BASELINE) {
  baseline = current;
  baselineSource = 'advanced-to-current';
  updatedBaseline = true;
}

if (updatedBaseline) {
  fs.writeFileSync(BASELINE_PATH, JSON.stringify(baseline, null, 2) + '\n');
}

function readLastHistoryEntry() {
  if (!fs.existsSync(HISTORY_PATH)) {
    return null;
  }

  const lines = fs.readFileSync(HISTORY_PATH, 'utf8')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length === 0) {
    return null;
  }

  try {
    return JSON.parse(lines.at(-1));
  } catch {
    return null;
  }
}

const historyEntry = {
  generatedAt: new Date().toISOString(),
  current,
  baseline,
  baselineSource,
  passed: regressions.length === 0,
  regressions,
};

const lastHistoryEntry = readLastHistoryEntry();
const shouldAppendHistory =
  !lastHistoryEntry ||
  JSON.stringify(lastHistoryEntry.current) !== JSON.stringify(historyEntry.current) ||
  lastHistoryEntry.baselineSource !== historyEntry.baselineSource ||
  JSON.stringify(lastHistoryEntry.regressions) !== JSON.stringify(historyEntry.regressions) ||
  lastHistoryEntry.passed !== historyEntry.passed;

if (shouldAppendHistory) {
  fs.appendFileSync(HISTORY_PATH, `${JSON.stringify(historyEntry)}\n`);
}

const result = {
  generatedAt: new Date().toISOString(),
  coveragePath: COVERAGE_PATH,
  baselinePath: BASELINE_PATH,
  historyPath: HISTORY_PATH,
  baselineSource,
  updatedBaseline,
  historyAppended: shouldAppendHistory,
  passed: regressions.length === 0,
  regressions,
  current,
  baseline,
};

fs.writeFileSync(RESULT_PATH, JSON.stringify(result, null, 2) + '\n');
console.log(RESULT_PATH);

#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { ROOT } from './paths.mjs';

const MAPPED = path.join(ROOT, 'mapped');
const OUTPUT_PATH = path.join(MAPPED, 'quality-report.json');

function readJson(name) {
  const filePath = path.join(MAPPED, name);
  if (!fs.existsSync(filePath)) {
    throw new Error(`missing required report: ${filePath}`);
  }
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function readOptionalJson(name) {
  const filePath = path.join(MAPPED, name);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function countBy(items, getKey) {
  const result = {};
  for (const item of items) {
    const key = getKey(item);
    result[key] = (result[key] ?? 0) + 1;
  }
  return result;
}

const coverage = readJson('rebuilt-coverage.json');
const headlessVerify = readJson('rebuilt-headless-verify.json');
const headlessSuite = readJson('rebuilt-headless-check-suite.json');
const rebuiltSliceMaturity = readJson('rebuilt-slice-maturity.json');
const workbenchSpike = readJson('workbench-desktop-main-spike-check.json');
const rebuiltSlices = readJson('rebuilt-slices.json');
const acceptLatest = readOptionalJson('accept-latest.json');
const startupLoaderRuntimeGate = readOptionalJson('startup-loader-runtime-gate.json');
const startupLoaderRolloutGate = readOptionalJson('startup-loader-rollout-gate.json');
const startupModuleResolutionRolloutDiscipline = readOptionalJson('startup-module-resolution-rollout-discipline-verify.json');
const startupModuleResolutionDeepZoneAdmission = readOptionalJson('startup-module-resolution-deep-zone-admission-verify.json');

const slices = rebuiltSlices.slices ?? [];
const activeStableSlices = slices.filter((slice) => Array.isArray(slice.profiles) && slice.profiles.includes('stable'));
const statusCounts = countBy(slices, (slice) => slice.status ?? 'unknown');
const spikeDispositionCounts = countBy(
  slices.filter((slice) => slice.spike_disposition),
  (slice) => slice.spike_disposition
);
const maturitySummary = rebuiltSliceMaturity.summary ?? headlessSuite.maturity?.summary ?? null;
const maturityGeneratedAt = rebuiltSliceMaturity.generatedAt ?? headlessSuite.maturity?.generatedAt ?? null;
const contractChecks = {};
for (const check of workbenchSpike.checks ?? []) {
  contractChecks[check.id] = {
    passed: !!check.passed,
    advisory: !!check.advisory,
  };
}

const report = {
  generatedAt: new Date().toISOString(),
  sources: {
    coverage: path.join(MAPPED, 'rebuilt-coverage.json'),
    headlessVerify: path.join(MAPPED, 'rebuilt-headless-verify.json'),
    headlessSuite: path.join(MAPPED, 'rebuilt-headless-check-suite.json'),
    workbenchSpike: path.join(MAPPED, 'workbench-desktop-main-spike-check.json'),
    slices: path.join(MAPPED, 'rebuilt-slices.json'),
    acceptLatest: path.join(MAPPED, 'accept-latest.json'),
    startupLoaderRuntimeGate: path.join(MAPPED, 'startup-loader-runtime-gate.json'),
    startupLoaderRolloutGate: path.join(MAPPED, 'startup-loader-rollout-gate.json'),
    startupModuleResolutionRolloutDiscipline: path.join(MAPPED, 'startup-module-resolution-rollout-discipline-verify.json'),
    startupModuleResolutionDeepZoneAdmission: path.join(MAPPED, 'startup-module-resolution-deep-zone-admission-verify.json'),
  },
  topLine: {
    stableSliceCount: activeStableSlices.length,
    spikeSliceCount: statusCounts.spike ?? 0,
    archivedSliceCount: statusCounts.archived ?? 0,
    supersededSliceCount: statusCounts.superseded ?? 0,
    totalSliceCount: coverage.totals?.sliceCount ?? slices.length,
    totalTargetCoveragePct: coverage.totals?.fileCoveragePct ?? null,
    runtimeCoveragePct: coverage.domains?.runtimeBundles?.fileCoveragePct ?? null,
    extensionCoveragePct: coverage.domains?.extensionEntries?.fileCoveragePct ?? null,
    fullRebuiltCount: maturitySummary?.byMaturity?.['full-rebuilt'] ?? 0,
    proxyPassthroughCount: maturitySummary?.byMaturity?.['proxy-passthrough'] ?? 0,
    fullRebuiltPct:
      activeStableSlices.length > 0 && maturitySummary?.byMaturity?.['full-rebuilt'] != null
        ? Number(((maturitySummary.byMaturity['full-rebuilt'] / activeStableSlices.length) * 100).toFixed(2))
        : null,
    latestAcceptAt: acceptLatest?.generatedAt ?? null,
    latestAcceptHead: acceptLatest?.gitHead ?? null,
  },
  coverage: {
    totals: coverage.totals,
    domains: coverage.domains,
  },
  maturity: {
    generatedAt: maturityGeneratedAt,
    summary: maturitySummary,
  },
  contractLayer: {
    generatedAt: workbenchSpike.generatedAt ?? null,
    configurationBaselineEstablished:
      contractChecks['configuration-keys-baseline']?.passed === true &&
      (workbenchSpike.configurationDelta?.addedCount ?? 1) === 0 &&
      (workbenchSpike.configurationDelta?.removedCount ?? 1) === 0,
    exportBaselineEstablished:
      contractChecks['export-keys-baseline']?.passed === true &&
      (workbenchSpike.exportDelta?.addedCount ?? 1) === 0 &&
      (workbenchSpike.exportDelta?.removedCount ?? 1) === 0,
    mainReturnContractEstablished: contractChecks['main-return-contract']?.passed === true,
    tslibInterceptionHealthy:
      contractChecks['tslib-interception']?.passed === true &&
      (workbenchSpike.checks ?? []).find((check) => check.id === 'tslib-interception')?.detail?.rebuiltTslibExportCount === 31,
    configurationDelta: workbenchSpike.configurationDelta ?? null,
    exportDelta: workbenchSpike.exportDelta ?? null,
    mainReturnContract: workbenchSpike.mainReturnContract ?? null,
  },
  stability: {
    headlessVerifyPassed: !!headlessVerify.passed,
    acceptRecorded: !!acceptLatest,
    startupLoaderRuntimeGatePassed: startupLoaderRuntimeGate?.passed ?? null,
    startupLoaderRolloutGatePassed: startupLoaderRolloutGate?.passedSoFar ?? startupLoaderRolloutGate?.passed ?? null,
    startupModuleResolutionRolloutDisciplinePassed: startupModuleResolutionRolloutDiscipline?.passed ?? null,
    startupModuleResolutionDeepZoneAdmissionPassed: startupModuleResolutionDeepZoneAdmission?.passed ?? null,
    spikeDispositionCounts,
    statusCounts,
  },
};

fs.writeFileSync(OUTPUT_PATH, JSON.stringify(report, null, 2) + '\n');
console.log(OUTPUT_PATH);

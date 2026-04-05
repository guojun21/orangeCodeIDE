#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const CONTRACT_PATH = path.join(ROOT, 'mapped', 'contrib-composer-twentyfourth-module-resolution-live-contract.json');
const RUNTIME_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-twentyfourth-module-resolution-runtime-gate.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-twentyfourth-sticky-disable-preflight.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const contract = readJson(CONTRACT_PATH);
  const runtimeGate = readJson(RUNTIME_GATE_PATH);
  const diagnostics = runtimeGate.runtimeState?.resolution?.diagnostics ?? null;
  const resetDiagnostics = runtimeGate.runtimeState?.resolution?.resetDiagnosticsResult ?? null;

  const checks = {
    contractStickyDisabledEmpty:
      Array.isArray(contract.defaults?.stickyDisabledModules)
      && contract.defaults.stickyDisabledModules.length === 0,
    baselineStickyDisabledCountZero: (diagnostics?.counters?.stickyDisabledCount ?? -1) === 0,
    baselineStickyDisabledModulesEmpty:
      Array.isArray(diagnostics?.stickyDisabledModules)
      && diagnostics.stickyDisabledModules.length === 0,
    resetStickyDisabledCountZero: (resetDiagnostics?.counters?.stickyDisabledCount ?? -1) === 0,
    resetStickyDisabledModulesEmpty:
      Array.isArray(resetDiagnostics?.stickyDisabledModules)
      && resetDiagnostics.stickyDisabledModules.length === 0,
    noStickyDisableResultObserved:
      !(Array.isArray(diagnostics?.events) && diagnostics.events.some((entry) => entry?.result === 'sticky-disabled')),
  };

  const failedChecks = Object.entries(checks)
    .filter(([, passed]) => !passed)
    .map(([name]) => name);

  const report = {
    generatedAt: new Date().toISOString(),
    contractPath: normalizePath(path.relative(ROOT, CONTRACT_PATH)),
    baselineRuntimeGatePath: normalizePath(path.relative(ROOT, RUNTIME_GATE_PATH)),
    checks,
    failedChecks,
    passed: failedChecks.length === 0,
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
  console.log(`Passed: ${report.passed}`);
  if (!report.passed) {
    process.exitCode = 1;
  }
}

main();

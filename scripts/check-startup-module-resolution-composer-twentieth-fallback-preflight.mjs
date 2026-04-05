#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const CONTRACT_PATH = path.join(ROOT, 'mapped', 'contrib-composer-twentieth-module-resolution-live-contract.json');
const RUNTIME_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-twentieth-module-resolution-runtime-gate.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-twentieth-fallback-preflight.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const contract = readJson(CONTRACT_PATH);
  const runtimeGate = readJson(RUNTIME_GATE_PATH);
  const result = runtimeGate.runtimeState?.resolution?.results?.[0]?.result ?? null;
  const diagnostics = runtimeGate.runtimeState?.resolution?.diagnostics ?? null;
  const reasonCodes = contract.diagnostics?.reasonCodes ?? [];

  const checks = {
    contractLiveModeEnabled: contract.mode === 'live-canary' && contract.defaults?.resolverEnabled === true,
    contractRequiresFallbackOnResolverError: contract.guardrails?.fallbackOnResolverError === true,
    contractRequiresFallbackOnTimeout: contract.guardrails?.fallbackOnTimeout === true,
    contractRequiresFallbackOnSignatureMismatch: contract.guardrails?.fallbackOnSignatureMismatch === true,
    reasonCodesIncludeDisabledGlobal: Array.isArray(reasonCodes) && reasonCodes.includes('disabled-global'),
    baselineObservedOriginalPass: result?.result === 'original-pass',
    baselineObservedExpectedFallbackReason: result?.fallbackReason === 'disabled-global',
    noUnexpectedFallbackCount: (diagnostics?.counters?.fallbackCount ?? -1) === 0,
    noUnexpectedOverlayHit: (diagnostics?.counters?.overlayHitCount ?? -1) === 0,
    diagnosticsEventRecorded: Array.isArray(diagnostics?.events) && diagnostics.events.length === 1,
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

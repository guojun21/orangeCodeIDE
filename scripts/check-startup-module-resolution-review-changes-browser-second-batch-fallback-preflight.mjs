#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const CONTRACT_PLAN_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-batch-contract-plan.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-batch-fallback-preflight.json');

const MODULE_CONFIGS = [
  {
    moduleId: 'out-build/vs/workbench/contrib/reviewChanges/browser/hooks/useResourceLineCounts.js',
    waveId: 'DBR1L',
    liveContractPath: path.join(ROOT, 'mapped', 'contrib-review-changes-browser-module-resolution-live-contract.json'),
    runtimeGatePath: path.join(ROOT, 'mapped', 'contrib-review-changes-browser-module-resolution-runtime-gate.json'),
  },
  {
    moduleId: 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/discussionUtils.js',
    waveId: 'DBR2L',
    liveContractPath: path.join(ROOT, 'mapped', 'contrib-review-changes-browser-second-module-resolution-live-contract.json'),
    runtimeGatePath: path.join(ROOT, 'mapped', 'contrib-review-changes-browser-second-module-resolution-runtime-gate.json'),
  },
  {
    moduleId: 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/diffMentionUtils.js',
    waveId: 'DBR3L',
    liveContractPath: path.join(ROOT, 'mapped', 'contrib-review-changes-browser-third-module-resolution-live-contract.json'),
    runtimeGatePath: path.join(ROOT, 'mapped', 'contrib-review-changes-browser-third-module-resolution-runtime-gate.json'),
  },
  {
    moduleId: 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/generatedFilesConstants.js',
    waveId: 'DBR4L',
    liveContractPath: path.join(ROOT, 'mapped', 'contrib-review-changes-browser-fourth-module-resolution-live-contract.json'),
    runtimeGatePath: path.join(ROOT, 'mapped', 'contrib-review-changes-browser-fourth-module-resolution-runtime-gate.json'),
  },
];

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function findResultForModule(runtimeGate, moduleId) {
  const results = runtimeGate.runtimeState?.resolution?.results ?? [];
  return results.find((entry) => entry?.result?.moduleId === moduleId)?.result ?? null;
}

function main() {
  const contractPlan = readJson(CONTRACT_PLAN_PATH);
  const selectedModules = contractPlan.batchContractPlan?.selectedModules ?? [];
  const selectedWaves = contractPlan.batchContractPlan?.selectedWaves ?? [];

  const modules = MODULE_CONFIGS
    .filter((config) => selectedModules.includes(config.moduleId))
    .map((config) => {
      const liveContract = readJson(config.liveContractPath);
      const runtimeGate = readJson(config.runtimeGatePath);
      const diagnostics = runtimeGate.runtimeState?.resolution?.diagnostics ?? null;
      const result = findResultForModule(runtimeGate, config.moduleId);
      const reasonCodes = liveContract.diagnostics?.reasonCodes ?? [];

      const checks = {
        contractLiveModeEnabled: liveContract.mode === 'live-canary' && liveContract.defaults?.resolverEnabled === true,
        contractRequiresFallbackOnResolverError: liveContract.guardrails?.fallbackOnResolverError === true,
        contractRequiresFallbackOnTimeout: liveContract.guardrails?.fallbackOnTimeout === true,
        contractRequiresFallbackOnSignatureMismatch: liveContract.guardrails?.fallbackOnSignatureMismatch === true,
        reasonCodesIncludeDisabledGlobal: Array.isArray(reasonCodes) && reasonCodes.includes('disabled-global'),
        baselineObservedOriginalPass: result?.result === 'original-pass',
        baselineObservedExpectedFallbackReason: result?.fallbackReason === 'disabled-global',
        noUnexpectedFallbackCount: (diagnostics?.counters?.fallbackCount ?? -1) === 0,
        noUnexpectedOverlayHit: (diagnostics?.counters?.overlayHitCount ?? -1) === 0,
        diagnosticsEventRecorded:
          Array.isArray(diagnostics?.events)
          && diagnostics.events.some((entry) => entry?.moduleId === config.moduleId),
      };

      const failedChecks = Object.entries(checks)
        .filter(([, passed]) => !passed)
        .map(([name]) => name);

      return {
        moduleId: config.moduleId,
        waveId: config.waveId,
        liveContractPath: normalizePath(path.relative(ROOT, config.liveContractPath)),
        baselineRuntimeGatePath: normalizePath(path.relative(ROOT, config.runtimeGatePath)),
        result,
        diagnostics,
        checks,
        failedChecks,
        passed: failedChecks.length === 0,
      };
    });

  const failedModules = modules
    .filter((entry) => !entry.passed)
    .map((entry) => entry.moduleId);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'browser-second-batch-fallback-preflight',
    contractPlanPath: normalizePath(path.relative(ROOT, CONTRACT_PLAN_PATH)),
    expectedModuleCount: selectedModules.length,
    observedModuleCount: modules.length,
    selectedModules,
    selectedWaves,
    failedModules,
    modules,
    passed:
      selectedModules.length === 4
      && modules.length === 4
      && failedModules.length === 0,
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

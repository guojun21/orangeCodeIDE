#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';
import { createIsolatedProbeUserDataDir } from './rebuilt-user-data.mjs';
import { launchRuntime } from '../test/driver/launch.mjs';

const RUNTIME_ROOT = path.join(ROOT, 'recovered', 'startup-loader', 'runtime-app');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-input-gate.json');
const CONTRACT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-contract.json');
const SHORT_PROBE_ROOT = path.join('/tmp', 'shc-sri');

function tailLines(input, count = 80) {
  return String(input || '')
    .split(/\r?\n/)
    .filter(Boolean)
    .slice(-count);
}

async function main() {
  const contract = fs.existsSync(CONTRACT_PATH)
    ? JSON.parse(fs.readFileSync(CONTRACT_PATH, 'utf8'))
    : null;

  let session = null;
  let report;

  try {
    session = await launchRuntime({
      runtimeRoot: RUNTIME_ROOT,
      skipPrepare: true,
      userDataDir: createIsolatedProbeUserDataDir({
        sourceDir: null,
        rootDir: SHORT_PROBE_ROOT,
        prefix: 'sri',
      }),
    });

    const probeState = await session.evaluateJson(`(() => {
      const loader = globalThis.__SHOPEE_STARTUP_LOADER__;
      const contract = loader?.getResolutionContract?.() ?? loader?.contract ?? null;
      const canaryModules = loader?.getCanaryModules?.() ?? contract?.canary?.modules ?? [];
      loader?.resetDiagnostics?.();
      const probeResults = canaryModules.map((entry) => loader?.probeResolution?.(entry.id) ?? null);
      const diagnostics = loader?.getDiagnostics?.() ?? null;
      return {
        loaderStatus: loader?.status ?? null,
        mode: loader?.mode ?? contract?.mode ?? null,
        hasProbeResolution: typeof loader?.probeResolution === 'function',
        hasGetDiagnostics: typeof loader?.getDiagnostics === 'function',
        hasResetDiagnostics: typeof loader?.resetDiagnostics === 'function',
        canaryCount: canaryModules.length,
        canaryIds: canaryModules.map((entry) => entry.id),
        requiredFields: contract?.diagnostics?.requiredFields ?? [],
        reasonCodes: contract?.diagnostics?.reasonCodes ?? [],
        probeResults,
        diagnostics,
      };
    })()`);

    const expectedCanaryCount = contract?.canary?.totalCount ?? 0;
    const checks = {
      runtimeRootExists: fs.existsSync(RUNTIME_ROOT),
      loaderStatusLoaded: probeState.loaderStatus === 'loaded',
      modeIsNoOpObservable: probeState.mode === 'no-op-observable',
      contractCanaryCountMatches: probeState.canaryCount === expectedCanaryCount && expectedCanaryCount >= 3,
      probeFunctionPresent: probeState.hasProbeResolution === true,
      diagnosticsFunctionsPresent:
        probeState.hasGetDiagnostics === true && probeState.hasResetDiagnostics === true,
      requiredFieldsPresent: Array.isArray(probeState.requiredFields) && probeState.requiredFields.length >= 8,
      reasonCodesPresent: Array.isArray(probeState.reasonCodes) && probeState.reasonCodes.length >= 8,
      diagnosticsEventCountMatches:
        (probeState.diagnostics?.events?.length ?? -1) === probeState.canaryCount,
      diagnosticsOriginalPassMatches:
        (probeState.diagnostics?.counters?.originalPassCount ?? -1) === probeState.canaryCount,
      overlayHitStillZero:
        (probeState.diagnostics?.counters?.overlayHitCount ?? -1) === 0,
      probeResultsUseNoOpFallback:
        Array.isArray(probeState.probeResults)
        && probeState.probeResults.length === probeState.canaryCount
        && probeState.probeResults.every((entry) => entry?.result === 'original-pass' && entry?.fallbackReason === 'disabled-global'),
    };

    const failedChecks = Object.entries(checks)
      .filter(([, passed]) => !passed)
      .map(([name]) => name);

    report = {
      generatedAt: new Date().toISOString(),
      runtimeRoot: path.relative(ROOT, RUNTIME_ROOT).split(path.sep).join('/'),
      contractPath: path.relative(ROOT, CONTRACT_PATH).split(path.sep).join('/'),
      passed: failedChecks.length === 0,
      checks,
      failedChecks,
      probeState,
      stdoutTail: tailLines(session.stdout()),
      stderrTail: tailLines(session.stderr()),
    };
  } catch (error) {
    report = {
      generatedAt: new Date().toISOString(),
      runtimeRoot: path.relative(ROOT, RUNTIME_ROOT).split(path.sep).join('/'),
      contractPath: path.relative(ROOT, CONTRACT_PATH).split(path.sep).join('/'),
      passed: false,
      error: error instanceof Error
        ? {
            name: error.name,
            message: error.message,
            stack: error.stack,
          }
        : { message: String(error) },
      stdoutTail: session ? tailLines(session.stdout()) : [],
      stderrTail: session ? tailLines(session.stderr()) : [],
    };
  } finally {
    if (session) {
      await session.close();
    }
  }

  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(`Startup module resolution input gate: ${path.relative(ROOT, OUTPUT_PATH).split(path.sep).join('/')}`);
  console.log(`Passed: ${report.passed}`);
  if (!report.passed) {
    process.exitCode = 1;
  }
}

main();

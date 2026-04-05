#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';
import { createIsolatedProbeUserDataDir } from './rebuilt-user-data.mjs';
import { launchRuntime } from '../test/driver/launch.mjs';

const RUNTIME_ROOT = path.join(ROOT, 'recovered', 'startup-loader', 'runtime-app');
const DEFAULT_CONTRACT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-contract.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-runtime-gate.json');
const SHORT_PROBE_ROOT = path.join('/tmp', 'shc-srr');

function tailLines(input, count = 80) {
  return String(input || '')
    .split(/\r?\n/)
    .filter(Boolean)
    .slice(-count);
}

function parseArgs(argv) {
  let contractPath = DEFAULT_CONTRACT_PATH;
  let outputPath = OUTPUT_PATH;
  let expectedMode = 'no-op-observable';
  let minCanaryCount = 3;
  let expectedWaveId = null;
  let expectedOverlayHitCount = 0;
  let expectedOriginalPassCount = null;

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === '--contract') {
      index += 1;
      contractPath = path.isAbsolute(argv[index]) ? argv[index] : path.join(ROOT, argv[index]);
      continue;
    }
    if (arg === '--output') {
      index += 1;
      outputPath = path.isAbsolute(argv[index]) ? argv[index] : path.join(ROOT, argv[index]);
      continue;
    }
    if (arg === '--expected-mode') {
      index += 1;
      expectedMode = argv[index];
      continue;
    }
    if (arg === '--min-canary-count') {
      index += 1;
      minCanaryCount = Number(argv[index]);
      continue;
    }
    if (arg === '--expected-wave-id') {
      index += 1;
      expectedWaveId = argv[index];
      continue;
    }
    if (arg === '--expected-overlay-hit-count') {
      index += 1;
      expectedOverlayHitCount = Number(argv[index]);
      continue;
    }
    if (arg === '--expected-original-pass-count') {
      index += 1;
      expectedOriginalPassCount = Number(argv[index]);
      continue;
    }
    throw new Error(`Unknown argument: ${arg}`);
  }

  return {
    contractPath,
    outputPath,
    expectedMode,
    minCanaryCount,
    expectedWaveId,
    expectedOverlayHitCount,
    expectedOriginalPassCount,
  };
}

async function main() {
  const {
    contractPath,
    outputPath,
    expectedMode,
    minCanaryCount,
    expectedWaveId,
    expectedOverlayHitCount,
    expectedOriginalPassCount,
  } = parseArgs(process.argv.slice(2));
  const contract = JSON.parse(fs.readFileSync(contractPath, 'utf8'));
  let session = null;
  let report;

  try {
    session = await launchRuntime({
      runtimeRoot: RUNTIME_ROOT,
      skipPrepare: true,
      userDataDir: createIsolatedProbeUserDataDir({
        sourceDir: null,
        rootDir: SHORT_PROBE_ROOT,
        prefix: 'srr',
      }),
    });

    const runtimeState = await session.evaluateJson(`(() => {
      const startupLoader = globalThis.__SHOPEE_STARTUP_LOADER__ ?? null;
      const proxy = globalThis.__SHOPEE_WORKBENCH_DESKTOP_MAIN_PROXY__ ?? null;
      const resolution = globalThis.__SHOPEE_STARTUP_MODULE_RESOLUTION__ ?? null;
      return {
        readyState: document.readyState,
        hasWorkbench: !!document.querySelector('.monaco-workbench'),
        startupLoaderStatus: startupLoader?.status ?? null,
        proxyMarkerPresent: !!proxy,
        resolution,
      };
    })()`);

    const diagnostics = runtimeState.resolution?.diagnostics ?? null;
    const canaryCount = runtimeState.resolution?.canaryCount ?? 0;
    const allWaveIds = (runtimeState.resolution?.results ?? [])
      .map((entry) => entry?.result?.waveId)
      .filter(Boolean);
    const checks = {
      runtimeRootExists: fs.existsSync(RUNTIME_ROOT),
      workbenchReady: runtimeState.readyState === 'complete' && runtimeState.hasWorkbench === true,
      startupLoaderLoaded: runtimeState.startupLoaderStatus === 'loaded',
      proxyMarkerPresent: runtimeState.proxyMarkerPresent === true,
      resolutionMarkerPresent: Boolean(runtimeState.resolution),
      resolutionStatusProbed: runtimeState.resolution?.status === 'probed',
      modeMatchesExpected: runtimeState.resolution?.mode === expectedMode,
      canaryCountMatches:
        typeof runtimeState.resolution?.canaryCount === 'number'
        && canaryCount >= minCanaryCount
        && runtimeState.resolution.canaryIds?.length === canaryCount
        && canaryCount === (contract.canary?.totalCount ?? -1),
      diagnosticsPresent: Boolean(diagnostics),
      diagnosticsEventCountMatches:
        (diagnostics?.events?.length ?? -1) === canaryCount,
      diagnosticsOriginalPassMatches: expectedOriginalPassCount == null
        ? true
        : (diagnostics?.counters?.originalPassCount ?? -1) === expectedOriginalPassCount,
      diagnosticsOverlayHitMatches:
        (diagnostics?.counters?.overlayHitCount ?? -1) === expectedOverlayHitCount,
      waveMatchesExpected: expectedWaveId == null
        ? true
        : allWaveIds.length === canaryCount && allWaveIds.every((waveId) => waveId === expectedWaveId),
      runtimeCanaryResultsMatchNoOp:
        Array.isArray(runtimeState.resolution?.results)
        && runtimeState.resolution.results.length === canaryCount
        && runtimeState.resolution.results.every((entry) =>
          entry?.result?.result === 'original-pass'
          && entry?.result?.fallbackReason === 'disabled-global'
        ),
    };

    const failedChecks = Object.entries(checks)
      .filter(([, passed]) => !passed)
      .map(([name]) => name);

    report = {
      generatedAt: new Date().toISOString(),
      runtimeRoot: path.relative(ROOT, RUNTIME_ROOT).split(path.sep).join('/'),
      contractPath: path.relative(ROOT, contractPath).split(path.sep).join('/'),
      expectedMode,
      expectedWaveId,
      minCanaryCount,
      expectedOverlayHitCount,
      expectedOriginalPassCount,
      checks,
      failedChecks,
      passed: failedChecks.length === 0,
      runtimeState,
      stdoutTail: tailLines(session.stdout()),
      stderrTail: tailLines(session.stderr()),
    };
  } catch (error) {
    report = {
      generatedAt: new Date().toISOString(),
      runtimeRoot: path.relative(ROOT, RUNTIME_ROOT).split(path.sep).join('/'),
      contractPath: path.relative(ROOT, contractPath).split(path.sep).join('/'),
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

  fs.writeFileSync(outputPath, `${JSON.stringify(report, null, 2)}\n`);
  console.log(`Startup module resolution runtime gate: ${path.relative(ROOT, outputPath).split(path.sep).join('/')}`);
  console.log(`Passed: ${report.passed}`);
  if (!report.passed) {
    process.exitCode = 1;
  }
}

main();

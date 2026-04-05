#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';
import { createIsolatedProbeUserDataDir } from './rebuilt-user-data.mjs';
import { launchRuntime } from '../test/driver/launch.mjs';

const RUNTIME_ROOT = path.join(ROOT, 'recovered', 'startup-loader', 'runtime-app');
const CONTRACT_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-browser-second-batch-module-resolution-live-contract.json');
const PATCH_REPORT_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-browser-second-batch-module-resolution-wrapper-patch.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-browser-second-batch-module-resolution-live-gate.json');
const SHORT_PROBE_ROOT = path.join('/tmp', 'shc-rcb2');

function tailLines(input, count = 80) {
  return String(input || '')
    .split(/\r?\n/)
    .filter(Boolean)
    .slice(-count);
}

function normalizeRuntimeError(error) {
  if (!(error instanceof Error)) {
    return { message: String(error) };
  }
  return {
    name: error.name,
    message: error.message,
    stack: error.stack,
    remoteDebuggingPort: error.remoteDebuggingPort ?? null,
    runtimeRoot: error.runtimeRoot ?? null,
    runtimeUserDataDir: error.runtimeUserDataDir ?? null,
    runtimeLaunchDiagnostics: error.runtimeLaunchDiagnostics ?? null,
  };
}

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function parseArgs(argv) {
  let contractPath = CONTRACT_PATH;
  let patchReportPath = PATCH_REPORT_PATH;
  let outputPath = OUTPUT_PATH;
  let shortProbeRoot = SHORT_PROBE_ROOT;
  let expectedWaveId = 'DBRB2';
  let minEnabledCount = 4;

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === '--contract') {
      index += 1;
      contractPath = path.isAbsolute(argv[index]) ? argv[index] : path.join(ROOT, argv[index]);
      continue;
    }
    if (arg === '--patch-report') {
      index += 1;
      patchReportPath = path.isAbsolute(argv[index]) ? argv[index] : path.join(ROOT, argv[index]);
      continue;
    }
    if (arg === '--output') {
      index += 1;
      outputPath = path.isAbsolute(argv[index]) ? argv[index] : path.join(ROOT, argv[index]);
      continue;
    }
    if (arg === '--short-probe-root') {
      index += 1;
      shortProbeRoot = path.isAbsolute(argv[index]) ? argv[index] : path.join(ROOT, argv[index]);
      continue;
    }
    if (arg === '--expected-wave-id') {
      index += 1;
      expectedWaveId = argv[index];
      continue;
    }
    if (arg === '--min-enabled-count') {
      index += 1;
      minEnabledCount = Number(argv[index]);
      continue;
    }
    throw new Error(`Unknown argument: ${arg}`);
  }

  return {
    contractPath,
    patchReportPath,
    outputPath,
    shortProbeRoot,
    expectedWaveId,
    minEnabledCount,
  };
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function uniqueSorted(values) {
  return [...new Set(values.filter(Boolean))].sort();
}

function sameSet(left, right) {
  return JSON.stringify(uniqueSorted(left)) === JSON.stringify(uniqueSorted(right));
}

function buildEnabledIds(contract) {
  const explicitWaveToggleMap = new Map(Object.entries(contract.waveToggleMap || {}));
  const waveById = new Map(
    Object.entries(contract.laneGroups || {}).flatMap(([waveId, ids]) =>
      (ids || []).map((id) => [id, waveId])
    )
  );

  return (contract.canary?.modules || [])
    .filter((moduleEntry) => {
      const waveId = waveById.get(moduleEntry.id) ?? null;
      const toggleKey = explicitWaveToggleMap.get(waveId) ?? null;
      return contract.defaults?.resolverEnabled === true
        && (toggleKey ? contract.defaults?.laneToggles?.[toggleKey] === true : false)
        && contract.defaults?.perModuleKillSwitch?.[moduleEntry.id] !== true;
    })
    .map((moduleEntry) => moduleEntry.id);
}

async function main() {
  const {
    contractPath,
    patchReportPath,
    outputPath,
    shortProbeRoot,
    expectedWaveId,
    minEnabledCount,
  } = parseArgs(process.argv.slice(2));

  const contract = readJson(contractPath);
  const patchReport = readJson(patchReportPath);
  const enabledIds = buildEnabledIds(contract);

  let session = null;
  let report;

  try {
    session = await launchRuntime({
      runtimeRoot: RUNTIME_ROOT,
      skipPrepare: true,
      userDataDir: createIsolatedProbeUserDataDir({
        sourceDir: null,
        rootDir: shortProbeRoot,
        prefix: 'rcb2',
      }),
    });

    const runtimeState = await session.evaluateJson(`(() => {
      const resolution = globalThis.__SHOPEE_STARTUP_MODULE_RESOLUTION__ ?? null;
      const factoryPatch = globalThis.__SHOPEE_STARTUP_MODULE_FACTORY_PATCH__ ?? null;
      return {
        readyState: document.readyState,
        hasWorkbench: !!document.querySelector('.monaco-workbench'),
        resolution,
        factoryPatch,
      };
    })()`);

    const probeResults = runtimeState.resolution?.results ?? [];
    const overlayProbeIds = uniqueSorted(
      probeResults
        .filter((entry) => entry?.result?.result === 'overlay-hit')
        .map((entry) => entry.id)
    );
    const factoryHitIds = uniqueSorted(
      runtimeState.factoryPatch?.hits?.map((entry) => entry.id) ?? []
    );
    const patchIds = uniqueSorted((patchReport.patches ?? []).map((entry) => entry.id));
    const resultWaveIds = uniqueSorted(
      probeResults
        .map((entry) => entry?.result?.waveId)
        .filter(Boolean)
    );
    const diagnostics = runtimeState.resolution?.diagnostics?.counters ?? {};
    const stickyDisabledModules = runtimeState.resolution?.diagnostics?.stickyDisabledModules ?? [];

    const checks = {
      runtimeRootExists: fs.existsSync(RUNTIME_ROOT),
      workbenchReady: runtimeState.readyState === 'complete' && runtimeState.hasWorkbench === true,
      resolutionMarkerPresent: Boolean(runtimeState.resolution),
      resolutionStatusProbed: runtimeState.resolution?.status === 'probed',
      liveModeEnabled: runtimeState.resolution?.mode === 'live-canary',
      enabledModuleCountMatches: enabledIds.length === minEnabledCount,
      enabledIdsExactMatch: sameSet(enabledIds, contract.canary?.modules?.map((entry) => entry.id) ?? []),
      patchReportChanged: patchReport?.changed === true && patchReport?.patchedCount === minEnabledCount,
      patchIdsExactMatch: sameSet(patchIds, enabledIds),
      waveMatchesExpected: resultWaveIds.length === 1 && resultWaveIds[0] === expectedWaveId,
      overlayProbeIdsExactMatch: sameSet(overlayProbeIds, enabledIds),
      factoryHitIdsExactMatch: sameSet(factoryHitIds, enabledIds),
      diagnosticsOverlayCountMatches: (diagnostics.overlayHitCount ?? -1) === enabledIds.length,
      diagnosticsOriginalPassZero: (diagnostics.originalPassCount ?? -1) === 0,
      diagnosticsFallbackZero: (diagnostics.fallbackCount ?? -1) === 0,
      diagnosticsStickyDisabledZero: (diagnostics.stickyDisabledCount ?? -1) === 0,
      stickyDisabledModulesEmpty: stickyDisabledModules.length === 0,
    };

    const failedChecks = Object.entries(checks)
      .filter(([, passed]) => !passed)
      .map(([name]) => name);

    report = {
      generatedAt: new Date().toISOString(),
      runtimeRoot: normalizePath(path.relative(ROOT, RUNTIME_ROOT)),
      contractPath: normalizePath(path.relative(ROOT, contractPath)),
      patchReportPath: normalizePath(path.relative(ROOT, patchReportPath)),
      minEnabledCount,
      expectedWaveId,
      enabledIds: uniqueSorted(enabledIds),
      patchIds,
      overlayProbeIds,
      factoryHitIds,
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
      runtimeRoot: normalizePath(path.relative(ROOT, RUNTIME_ROOT)),
      contractPath: normalizePath(path.relative(ROOT, contractPath)),
      patchReportPath: normalizePath(path.relative(ROOT, patchReportPath)),
      minEnabledCount,
      expectedWaveId,
      passed: false,
      error: normalizeRuntimeError(error),
      stdoutTail: session ? tailLines(session.stdout()) : tailLines(error?.runtimeStdout),
      stderrTail: session ? tailLines(session.stderr()) : tailLines(error?.runtimeStderr),
    };
  } finally {
    if (session) {
      await session.close();
    }
  }

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, `${JSON.stringify(report, null, 2)}\n`);
  console.log(`Browser second batch live gate: ${normalizePath(path.relative(ROOT, outputPath))}`);
  console.log(`Passed: ${report.passed}`);

  if (!report.passed) {
    process.exitCode = 1;
  }
}

main();

#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';
import { createIsolatedProbeUserDataDir } from './rebuilt-user-data.mjs';
import { launchRuntime } from '../test/driver/launch.mjs';

const RUNTIME_ROOT = path.join(ROOT, 'recovered', 'startup-loader', 'runtime-app');
const CONTRACT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-live-canary-contract.json');
const PATCH_REPORT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-wrapper-patch.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-live-canary-gate.json');
const SHORT_PROBE_ROOT = path.join('/tmp', 'shc-smlc');

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

function parseArgs(argv) {
  let contractPath = CONTRACT_PATH;
  let patchReportPath = PATCH_REPORT_PATH;
  let outputPath = OUTPUT_PATH;
  let shortProbeRoot = SHORT_PROBE_ROOT;
  let minEnabledCount = 1;
  let expectedWaveId = null;

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
    if (arg === '--min-enabled-count') {
      index += 1;
      minEnabledCount = Number(argv[index]);
      continue;
    }
    if (arg === '--expected-wave-id') {
      index += 1;
      expectedWaveId = argv[index];
      continue;
    }
    throw new Error(`Unknown argument: ${arg}`);
  }

  return {
    contractPath,
    patchReportPath,
    outputPath,
    shortProbeRoot,
    minEnabledCount,
    expectedWaveId,
  };
}

function buildEnabledIds(contract) {
  const explicitWaveToggleMap = new Map(Object.entries(contract.waveToggleMap || {}));
  const laneToggleByWave = new Map([
    ['S1', 'services-canary'],
    ['S2', 'services-low-risk'],
    ['S3', 'services-broader'],
    ['F1', 'foundation'],
  ]);
  const waveById = new Map(
    Object.entries(contract.laneGroups || {}).flatMap(([waveId, ids]) =>
      (ids || []).map((id) => [id, waveId])
    )
  );

  return (contract.canary?.modules || [])
    .filter((moduleEntry) => {
      const waveId = waveById.get(moduleEntry.id) ?? null;
      const toggleKey = explicitWaveToggleMap.get(waveId) ?? laneToggleByWave.get(waveId) ?? null;
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
    minEnabledCount,
    expectedWaveId,
  } = parseArgs(process.argv.slice(2));
  const contract = JSON.parse(fs.readFileSync(contractPath, 'utf8'));
  const patchReport = JSON.parse(fs.readFileSync(patchReportPath, 'utf8'));
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
        prefix: 'smlc',
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
    const overlayProbeIds = probeResults
      .filter((entry) => entry?.result?.result === 'overlay-hit')
      .map((entry) => entry.id);
    const factoryHitIds = runtimeState.factoryPatch?.hits?.map((entry) => entry.id) ?? [];
    const resultWaveIds = probeResults
      .map((entry) => entry?.result?.waveId)
      .filter(Boolean);

    const checks = {
      runtimeRootExists: fs.existsSync(RUNTIME_ROOT),
      patchReportChanged: patchReport?.changed === true && patchReport?.patchedCount >= 1,
      workbenchReady: runtimeState.readyState === 'complete' && runtimeState.hasWorkbench === true,
      resolutionMarkerPresent: Boolean(runtimeState.resolution),
      resolutionStatusProbed: runtimeState.resolution?.status === 'probed',
      liveModeEnabled: runtimeState.resolution?.mode === 'live-canary',
      enabledModuleCountMatches: enabledIds.length >= minEnabledCount,
      waveMatchesExpected: expectedWaveId == null
        ? true
        : resultWaveIds.length === probeResults.length && resultWaveIds.every((waveId) => waveId === expectedWaveId),
      overlayProbeIdsMatch:
        enabledIds.length >= minEnabledCount && enabledIds.every((id) => overlayProbeIds.includes(id)),
      diagnosticsOverlayCountMatches:
        (runtimeState.resolution?.diagnostics?.counters?.overlayHitCount ?? -1) === enabledIds.length,
      actualFactoryHitRecorded:
        factoryHitIds.length >= minEnabledCount && enabledIds.every((id) => factoryHitIds.includes(id)),
    };

    const failedChecks = Object.entries(checks)
      .filter(([, passed]) => !passed)
      .map(([name]) => name);

    report = {
      generatedAt: new Date().toISOString(),
      runtimeRoot: path.relative(ROOT, RUNTIME_ROOT).split(path.sep).join('/'),
      contractPath: path.relative(ROOT, contractPath).split(path.sep).join('/'),
      patchReportPath: path.relative(ROOT, patchReportPath).split(path.sep).join('/'),
      minEnabledCount,
      expectedWaveId,
      enabledIds,
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
      runtimeRoot: path.relative(ROOT, RUNTIME_ROOT).split(path.sep).join('/'),
      contractPath: path.relative(ROOT, contractPath).split(path.sep).join('/'),
      patchReportPath: path.relative(ROOT, patchReportPath).split(path.sep).join('/'),
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
  console.log(`Startup module resolution live canary gate: ${path.relative(ROOT, outputPath).split(path.sep).join('/')}`);
  console.log(`Passed: ${report.passed}`);

  if (!report.passed) {
    process.exitCode = 1;
  }
}

main();

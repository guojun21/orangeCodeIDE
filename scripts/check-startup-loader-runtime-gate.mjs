#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';
import { createIsolatedProbeUserDataDir } from './rebuilt-user-data.mjs';
import { launchRuntime } from '../test/driver/launch.mjs';

const RUNTIME_ROOT = path.join(ROOT, 'recovered', 'startup-loader', 'runtime-app');
const ASSEMBLY_VERIFY_PATH = path.join(ROOT, 'mapped', 'startup-loader-runtime-assembly-verify.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-loader-runtime-gate.json');
const SHORT_PROBE_ROOT = path.join('/tmp', 'shc-slg');

function tailLines(input, count = 80) {
  return String(input || '')
    .split(/\r?\n/)
    .filter(Boolean)
    .slice(-count);
}

async function main() {
  const assemblyVerify = fs.existsSync(ASSEMBLY_VERIFY_PATH)
    ? JSON.parse(fs.readFileSync(ASSEMBLY_VERIFY_PATH, 'utf8'))
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
        prefix: 'slg',
      }),
    });

    const runtimeState = await session.evaluateJson(`({
      readyState: document.readyState,
      hasWorkbench: !!document.querySelector('.monaco-workbench'),
      title: document.title,
      workbenchMarker: globalThis.__SHOPEE_WORKBENCH_REBUILT__ ?? null,
      proxyMarker: globalThis.__SHOPEE_WORKBENCH_DESKTOP_MAIN_PROXY__ ?? null,
      startupLoader: globalThis.__SHOPEE_STARTUP_LOADER__ ?? null
    })`);

    const checks = {
      runtimeRootExists: fs.existsSync(RUNTIME_ROOT),
      assemblyVerifyPassed: assemblyVerify?.passed === true,
      workbenchReady: runtimeState.readyState === 'complete' && runtimeState.hasWorkbench === true,
      workbenchMarkerPresent: Boolean(runtimeState.workbenchMarker),
      proxyMarkerPresent: Boolean(runtimeState.proxyMarker),
      startupLoaderPresent: Boolean(runtimeState.startupLoader),
      startupLoaderLoaded: runtimeState.startupLoader?.status === 'loaded',
    };

    const failedChecks = Object.entries(checks)
      .filter(([, passed]) => !passed)
      .map(([name]) => name);

    report = {
      generatedAt: new Date().toISOString(),
      runtimeRoot: path.relative(ROOT, RUNTIME_ROOT).split(path.sep).join('/'),
      assemblyVerifyPath: path.relative(ROOT, ASSEMBLY_VERIFY_PATH).split(path.sep).join('/'),
      assemblyVerifyPassed: assemblyVerify?.passed ?? false,
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
      assemblyVerifyPath: path.relative(ROOT, ASSEMBLY_VERIFY_PATH).split(path.sep).join('/'),
      assemblyVerifyPassed: assemblyVerify?.passed ?? false,
      passed: false,
      error: error instanceof Error ? {
        name: error.name,
        message: error.message,
        stack: error.stack,
        remoteDebuggingPort: error.remoteDebuggingPort ?? null,
        runtimeRoot: error.runtimeRoot ?? null,
      } : {
        message: String(error),
      },
      stdoutTail: session ? tailLines(session.stdout()) : tailLines(error?.runtimeStdout),
      stderrTail: session ? tailLines(session.stderr()) : tailLines(error?.runtimeStderr),
    };
  } finally {
    if (session) {
      await session.close();
    }
  }

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(report, null, 2));
  console.log(`Startup loader runtime gate: ${path.relative(ROOT, OUTPUT_PATH).split(path.sep).join('/')}`);
  console.log(`Passed: ${report.passed}`);

  if (!report.passed) {
    process.exitCode = 1;
  }
}

main();

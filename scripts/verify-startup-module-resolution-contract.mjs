#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const DEFAULT_CONTRACT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-contract.json');
const DEFAULT_RUNTIME_COPY_PATH = path.join(
  ROOT,
  'recovered',
  'startup-loader',
  'overrides',
  '.shopeecode',
  'startup-loader',
  'module-resolution-contract.json',
);
const DEFAULT_OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-contract-verify.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function parseArgs(argv) {
  let contractPath = DEFAULT_CONTRACT_PATH;
  let runtimeCopyPath = DEFAULT_RUNTIME_COPY_PATH;
  let outputPath = DEFAULT_OUTPUT_PATH;
  let expectMode = 'no-op-observable';
  let expectedWaveId = null;
  let minModules = 3;

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === '--contract') {
      index += 1;
      contractPath = path.isAbsolute(argv[index]) ? argv[index] : path.join(ROOT, argv[index]);
      continue;
    }
    if (arg === '--runtime-copy') {
      index += 1;
      runtimeCopyPath = path.isAbsolute(argv[index]) ? argv[index] : path.join(ROOT, argv[index]);
      continue;
    }
    if (arg === '--output') {
      index += 1;
      outputPath = path.isAbsolute(argv[index]) ? argv[index] : path.join(ROOT, argv[index]);
      continue;
    }
    if (arg === '--expect-mode') {
      index += 1;
      expectMode = argv[index];
      continue;
    }
    if (arg === '--expected-wave-id') {
      index += 1;
      expectedWaveId = argv[index];
      continue;
    }
    if (arg === '--min-modules') {
      index += 1;
      minModules = Number(argv[index]);
      continue;
    }
    throw new Error(`Unknown argument: ${arg}`);
  }

  return { contractPath, runtimeCopyPath, outputPath, expectMode, expectedWaveId, minModules };
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function shaLike(value) {
  return JSON.stringify(value);
}

function main() {
  const { contractPath, runtimeCopyPath, outputPath, expectMode, expectedWaveId, minModules } = parseArgs(process.argv.slice(2));

  const checks = {
    contractExists: fs.existsSync(contractPath),
    runtimeCopyExists: fs.existsSync(runtimeCopyPath),
  };

  let contract = null;
  let runtimeCopy = null;
  if (checks.contractExists) {
    contract = readJson(contractPath);
  }
  if (checks.runtimeCopyExists) {
    runtimeCopy = readJson(runtimeCopyPath);
  }

  checks.modeMatchesExpected = contract?.mode === expectMode;
  checks.canaryModulesPresent = (contract?.canary?.totalCount ?? 0) >= minModules;
  checks.globalToggleDefaultsOff = contract?.defaults?.resolverEnabled === false;
  checks.laneTogglesPresent = Boolean(contract?.defaults?.laneToggles && Object.keys(contract.defaults.laneToggles).length >= 4);
  checks.killSwitchPresent = Boolean(contract?.defaults?.perModuleKillSwitch && Object.keys(contract.defaults.perModuleKillSwitch).length === (contract?.canary?.totalCount ?? -1));
  checks.requiredFieldsPresent = Array.isArray(contract?.diagnostics?.requiredFields) && contract.diagnostics.requiredFields.length >= 8;
  checks.reasonCodesPresent = Array.isArray(contract?.diagnostics?.reasonCodes) && contract.diagnostics.reasonCodes.length >= 8;
  checks.runtimeCopyMatches = contract && runtimeCopy ? shaLike(contract) === shaLike(runtimeCopy) : false;
  if (expectedWaveId) {
    checks.waveMatchesExpected = contract?.canary?.waveId === expectedWaveId;
  }

  const failedChecks = Object.entries(checks)
    .filter(([, passed]) => !passed)
    .map(([name]) => name);

  const report = {
    generatedAt: new Date().toISOString(),
    contractPath: normalizePath(path.relative(ROOT, contractPath)),
    runtimeCopyPath: normalizePath(path.relative(ROOT, runtimeCopyPath)),
    checks,
    failedChecks,
    passed: failedChecks.length === 0,
    expectedWaveId,
    expectedMode: expectMode,
    minModules,
    canaryModules: contract?.canary?.modules?.map((moduleEntry) => moduleEntry.id) ?? [],
    diagnosticFields: contract?.diagnostics?.requiredFields ?? [],
    reasonCodes: contract?.diagnostics?.reasonCodes ?? [],
  };

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, `${JSON.stringify(report, null, 2)}\n`);

  console.log(`Startup module resolution contract verify: ${normalizePath(path.relative(ROOT, outputPath))}`);
  console.log(`Passed: ${report.passed}`);

  if (!report.passed) {
    process.exitCode = 1;
  }
}

main();

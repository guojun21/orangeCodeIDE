#!/usr/bin/env node

import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const CONTRACT_PLAN_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-batch-contract-plan.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-batch-export-delta-preflight.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function readText(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

function normalizeModuleBody(source) {
  return source
    .replace(/^"use strict";\s*/m, '')
    .replace(/^\/\/ Module:.*$/gm, '')
    .replace(/^\/\/ Offset:.*$/gm, '')
    .replace(/^\/\/ Size:.*$/gm, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function summarizeSource(source) {
  const normalizedBody = normalizeModuleBody(source);
  const bodyHash = crypto.createHash('sha256').update(normalizedBody).digest('hex');
  const topLevelCalls = [...normalizedBody.matchAll(/\b([A-Za-z_$][\w$]*)\s*\(/g)].map((match) => match[1]);

  return {
    normalizedBody,
    bodyHash,
    byteLength: Buffer.byteLength(normalizedBody, 'utf8'),
    topLevelCalls: [...new Set(topLevelCalls)],
  };
}

function moduleIdToSourcePath(moduleId) {
  return path.join(ROOT, 'rebuilt', 'src', 'project-modules-beautified', moduleId);
}

function moduleIdToInputPath(moduleId) {
  return path.join(ROOT, 'recovered', 'startup-loader', 'input', moduleId);
}

function main() {
  const contractPlan = readJson(CONTRACT_PLAN_PATH);
  const selectedModules = contractPlan.batchContractPlan?.selectedModules ?? [];
  const selectedWaves = contractPlan.batchContractPlan?.selectedWaves ?? [];

  const modules = selectedModules.map((moduleId, index) => {
    const sourcePath = moduleIdToSourcePath(moduleId);
    const inputPath = moduleIdToInputPath(moduleId);
    const sourceSummary = summarizeSource(readText(sourcePath));
    const inputSummary = summarizeSource(readText(inputPath));

    const checks = {
      bodyHashMatches: sourceSummary.bodyHash === inputSummary.bodyHash,
      normalizedBodyMatches: sourceSummary.normalizedBody === inputSummary.normalizedBody,
      byteLengthMatches: sourceSummary.byteLength === inputSummary.byteLength,
      topLevelCallsMatch: JSON.stringify(sourceSummary.topLevelCalls) === JSON.stringify(inputSummary.topLevelCalls),
    };

    const failedChecks = Object.entries(checks)
      .filter(([, passed]) => !passed)
      .map(([name]) => name);

    return {
      moduleId,
      waveId: selectedWaves[index] ?? null,
      sourcePath: normalizePath(path.relative(ROOT, sourcePath)),
      inputPath: normalizePath(path.relative(ROOT, inputPath)),
      sourceSummary,
      inputSummary,
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
    phase: 'browser-third-batch-export-delta-preflight',
    contractPlanPath: normalizePath(path.relative(ROOT, CONTRACT_PLAN_PATH)),
    expectedModuleCount: selectedModules.length,
    observedModuleCount: modules.length,
    failedModules,
    modules,
    passed:
      selectedModules.length === 5
      && modules.length === 5
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

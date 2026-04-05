#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

import { ROOT } from './paths.mjs';

const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-loader-rollout-gate.json');
const MAPPED = path.join(ROOT, 'mapped');

const STEPS = [
  {
    id: 'build',
    cmd: ['bash', ['scripts/use-node22.sh', 'npm', 'run', 'build']],
  },
  {
    id: 'verify-headless',
    cmd: ['bash', ['scripts/use-node22.sh', 'npm', 'run', 'verify:headless']],
  },
  {
    id: 'smoke',
    cmd: ['bash', ['scripts/use-node22.sh', 'npm', 'run', 'test:smoke']],
  },
  {
    id: 'workbench-spike',
    cmd: ['bash', ['scripts/use-node22.sh', 'npm', 'run', 'test:workbench-desktop-main:spike']],
  },
  {
    id: 'startup-loader-runtime-gate',
    cmd: ['bash', ['scripts/use-node22.sh', 'npm', 'run', 'test:startup-loader-runtime-gate:full']],
  },
  {
    id: 'startup-module-resolution-rollout-discipline',
    cmd: ['bash', ['scripts/use-node22.sh', 'npm', 'run', 'test:startup-module-resolution-rollout-discipline:full']],
  },
  {
    id: 'startup-module-resolution-deep-zone-admission',
    cmd: ['bash', ['scripts/use-node22.sh', 'npm', 'run', 'test:startup-module-resolution-deep-zone-admission:full']],
  },
  {
    id: 'quality-report',
    cmd: ['bash', ['scripts/use-node22.sh', 'npm', 'run', 'report:quality']],
  },
];

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readOptionalJson(fileName) {
  const filePath = path.join(MAPPED, fileName);
  if (!fs.existsSync(filePath)) {
    return null;
  }

  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch {
    return null;
  }
}

function writeOutput(output) {
  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(output, null, 2)}\n`);
}

function buildOutput(steps, failedStep, options = {}) {
  const spike = readOptionalJson('workbench-desktop-main-spike-check.json');
  const runtimeGate = readOptionalJson('startup-loader-runtime-gate.json');
  const rolloutDiscipline = readOptionalJson('startup-module-resolution-rollout-discipline-verify.json');
  const deepZoneAdmission = readOptionalJson('startup-module-resolution-deep-zone-admission-verify.json');
  const quality = readOptionalJson('quality-report.json');
  const passedSoFar = failedStep === null;

  return {
    generatedAt: new Date().toISOString(),
    steps,
    failedStep,
    passed: options.passedOverride ?? passedSoFar,
    passedSoFar,
    qualityStepPending: options.qualityStepPending ?? false,
    sources: {
      spike: normalizePath(path.relative(ROOT, path.join(MAPPED, 'workbench-desktop-main-spike-check.json'))),
      startupLoaderRuntimeGate: normalizePath(path.relative(ROOT, path.join(MAPPED, 'startup-loader-runtime-gate.json'))),
      startupModuleResolutionRolloutDiscipline: normalizePath(path.relative(ROOT, path.join(MAPPED, 'startup-module-resolution-rollout-discipline-verify.json'))),
      startupModuleResolutionDeepZoneAdmission: normalizePath(path.relative(ROOT, path.join(MAPPED, 'startup-module-resolution-deep-zone-admission-verify.json'))),
      qualityReport: normalizePath(path.relative(ROOT, path.join(MAPPED, 'quality-report.json'))),
    },
    summary: {
      spikePassed: spike?.passed ?? null,
      startupLoaderRuntimeGatePassed: runtimeGate?.passed ?? null,
      startupModuleResolutionRolloutDisciplinePassed: rolloutDiscipline?.passed ?? null,
      startupModuleResolutionDeepZoneAdmissionPassed: deepZoneAdmission?.passed ?? null,
      qualityGeneratedAt: quality?.generatedAt ?? null,
    },
  };
}

function runStep(step) {
  const [command, args] = step.cmd;
  const startedAt = new Date();
  const result = spawnSync(command, args, {
    cwd: ROOT,
    stdio: 'inherit',
    env: process.env,
  });
  const finishedAt = new Date();
  return {
    id: step.id,
    startedAt: startedAt.toISOString(),
    finishedAt: finishedAt.toISOString(),
    durationMs: finishedAt.getTime() - startedAt.getTime(),
    exitCode: result.status ?? 1,
    passed: (result.status ?? 1) === 0,
  };
}

function main() {
  const steps = [];
  let failedStep = null;

  for (const step of STEPS) {
    if (step.id === 'quality-report' && failedStep === null) {
      writeOutput(buildOutput(steps, failedStep, {
        passedOverride: true,
        qualityStepPending: true,
      }));
    }
    const result = runStep(step);
    steps.push(result);
    if (!result.passed) {
      failedStep = result.id;
      break;
    }
  }
  const output = buildOutput(steps, failedStep, {
    passedOverride: failedStep === null,
    qualityStepPending: false,
  });
  writeOutput(output);
  console.log(`Startup loader rollout gate: ${normalizePath(path.relative(ROOT, OUTPUT_PATH))}`);
  console.log(`Passed: ${output.passed}`);

  if (!output.passed) {
    process.exitCode = 1;
  }
}

main();

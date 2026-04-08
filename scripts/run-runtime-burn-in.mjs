#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { spawn } from 'child_process';
import { ROOT } from './paths.mjs';

const USE_NODE22 = path.join(ROOT, 'scripts', 'use-node22.sh');
const OUTPUT_DIR = path.join(ROOT, 'test', '.output');
const STATUS_PATH = path.join(OUTPUT_DIR, 'runtime-burn-in-status.json');
const HISTORY_PATH = path.join(OUTPUT_DIR, 'runtime-burn-in-history.jsonl');
const HEARTBEAT_INTERVAL_MS = 5000;

function parseArgs(argv) {
  const args = {};
  for (let index = 2; index < argv.length; index += 1) {
    const token = argv[index];
    if (!token.startsWith('--')) {
      continue;
    }
    const key = token.slice(2);
    const next = argv[index + 1];
    if (!next || next.startsWith('--')) {
      args[key] = true;
      continue;
    }
    args[key] = next;
    index += 1;
  }
  return args;
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function writeJson(filePath, payload) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, JSON.stringify(payload, null, 2) + '\n');
}

function appendJsonl(filePath, payload) {
  ensureDir(path.dirname(filePath));
  fs.appendFileSync(filePath, `${JSON.stringify(payload)}\n`);
}

function nowState() {
  const now = new Date();
  return {
    iso: now.toISOString(),
    local: now.toString(),
    epochMs: now.getTime(),
  };
}

function parseNumber(rawValue, label) {
  const value = Number(rawValue);
  if (!Number.isFinite(value) || value < 0) {
    throw new Error(`Invalid ${label}: ${rawValue}`);
  }
  return value;
}

function parseDeadline(rawValue) {
  const deadline = new Date(rawValue);
  if (Number.isNaN(deadline.getTime())) {
    throw new Error(`Invalid deadline-at: ${rawValue}`);
  }
  return deadline;
}

function createSteps({ forceBootstrap }) {
  const bootstrapArgs = forceBootstrap ? ['--', '--force'] : [];
  return [
    { id: 'bootstrap:runtime', command: ['npm', 'run', 'bootstrap:runtime', ...bootstrapArgs] },
    { id: 'bootstrap:vscode', command: ['npm', 'run', 'bootstrap:vscode', ...bootstrapArgs] },
    { id: 'build:first', command: ['npm', 'run', 'build'] },
    { id: 'test:watcher:spike', command: ['npm', 'run', 'test:watcher:spike'] },
    { id: 'test:workbench-desktop-main:spike', command: ['npm', 'run', 'test:workbench-desktop-main:spike'] },
    { id: 'build:second', command: ['npm', 'run', 'build'] },
    { id: 'verify:runtime-gui', command: ['npm', 'run', 'verify:runtime-gui'] },
    { id: 'report:runtime-origins', command: ['npm', 'run', 'report:runtime-origins'] },
    { id: 'report:runtime-residuals', command: ['npm', 'run', 'report:runtime-residuals'] },
    { id: 'report:runtime-ownership', command: ['npm', 'run', 'report:runtime-ownership'] },
    { id: 'report:runtime-external-dependencies', command: ['npm', 'run', 'report:runtime-external-dependencies'] },
    { id: 'report:runtime-node-modules-model', command: ['npm', 'run', 'report:runtime-node-modules-model'] },
    { id: 'report:runtime-host-assets-model', command: ['npm', 'run', 'report:runtime-host-assets-model'] },
    { id: 'report:runtime-package-manager-manifest', command: ['npm', 'run', 'report:runtime-package-manager-manifest'] },
    { id: 'report:runtime-native-runtime-manifest', command: ['npm', 'run', 'report:runtime-native-runtime-manifest'] },
    { id: 'verify:runtime-package-manager-resolution', command: ['npm', 'run', 'verify:runtime-package-manager-resolution'] },
    { id: 'verify:runtime-boundary', command: ['npm', 'run', 'verify:runtime-boundary'] },
    { id: 'verify:runtime-independence', command: ['npm', 'run', 'verify:runtime-independence'] },
    { id: 'report:public-bootstrap', command: ['npm', 'run', 'report:public-bootstrap'] },
  ];
}

function runCommand(command, iteration, onHeartbeat) {
  return new Promise((resolve, reject) => {
    const child = spawn('bash', [USE_NODE22, ...command], {
      cwd: ROOT,
      stdio: 'inherit',
      env: {
        ...process.env,
        ORANGECODEIDE_BURN_IN_ITERATION: String(iteration),
      },
    });
    const heartbeat = setInterval(() => {
      onHeartbeat?.();
    }, HEARTBEAT_INTERVAL_MS);
    heartbeat.unref();

    child.on('error', (error) => {
      clearInterval(heartbeat);
      reject(error);
    });

    child.on('exit', (code, signal) => {
      clearInterval(heartbeat);
      if (signal) {
        resolve({ status: 1, signal });
        return;
      }
      resolve({ status: code ?? 1, signal: null });
    });
  });
}

const args = parseArgs(process.argv);
const hoursTarget = parseNumber(args.hours ?? '9', 'hours');
const maxIterations = args['max-iterations'] ? parseNumber(args['max-iterations'], 'max-iterations') : null;
const forceBootstrapEveryIteration = args['force-bootstrap-every-iteration'] === true;
const started = nowState();
const deadline = args['deadline-at']
  ? parseDeadline(args['deadline-at'])
  : new Date(started.epochMs + hoursTarget * 60 * 60 * 1000);
const deadlineMs = deadline.getTime();
const runId = started.iso.replace(/[:.]/g, '-');
const appendHistory = args['append-history'] === true;

ensureDir(OUTPUT_DIR);
if (!appendHistory) {
  fs.rmSync(HISTORY_PATH, { force: true });
}

const baseStatus = {
  runId,
  startedAt: started.iso,
  startedAtLocal: started.local,
  deadlineAt: deadline.toISOString(),
  deadlineAtLocal: deadline.toString(),
  hoursTarget,
  running: true,
  completed: false,
  passed: false,
  allGreenSoFar: true,
  awaitingFix: false,
  currentIteration: 0,
  completedIterations: 0,
  currentStep: null,
  currentStepStartedAt: null,
  currentStepHeartbeatAt: null,
  lastSuccessfulStep: null,
  lastSuccessfulStepAt: null,
  stopReason: null,
  latestSystemTime: started.iso,
  latestSystemTimeLocal: started.local,
  maxIterations,
  stepOrder: createSteps({ forceBootstrap: true }).map((step) => step.id),
  historyPath: path.relative(ROOT, HISTORY_PATH),
};

function updateStatus(patch) {
  const state = nowState();
  Object.assign(baseStatus, patch, {
    latestSystemTime: state.iso,
    latestSystemTimeLocal: state.local,
  });
  writeJson(STATUS_PATH, baseStatus);
}

function recordHistory(payload) {
  appendJsonl(HISTORY_PATH, payload);
}

updateStatus({});
recordHistory({
  event: 'run-start',
  runId,
  startedAt: started.iso,
  startedAtLocal: started.local,
  deadlineAt: deadline.toISOString(),
  deadlineAtLocal: deadline.toString(),
  hoursTarget,
  maxIterations,
});

for (let iteration = 1; ; iteration += 1) {
  const forceBootstrap = forceBootstrapEveryIteration || iteration === 1;
  const steps = createSteps({ forceBootstrap });
  const cycleStart = nowState();

  updateStatus({
    currentIteration: iteration,
    currentStep: null,
  });
  recordHistory({
    event: 'iteration-start',
    runId,
    iteration,
    startedAt: cycleStart.iso,
    startedAtLocal: cycleStart.local,
    forceBootstrap,
  });

  for (const step of steps) {
    const stepStart = nowState();
    updateStatus({
      currentIteration: iteration,
      currentStep: step.id,
      currentStepStartedAt: stepStart.iso,
      currentStepHeartbeatAt: stepStart.iso,
    });
    recordHistory({
      event: 'step-start',
      runId,
      iteration,
      stepId: step.id,
      command: step.command,
      startedAt: stepStart.iso,
      startedAtLocal: stepStart.local,
    });

    const result = await runCommand(step.command, iteration, () => {
      const heartbeat = nowState();
      updateStatus({
        currentIteration: iteration,
        currentStep: step.id,
        currentStepStartedAt: stepStart.iso,
        currentStepHeartbeatAt: heartbeat.iso,
      });
    });
    const stepEnd = nowState();
    const exitCode = result.status ?? 1;
    const success = exitCode === 0;

  recordHistory({
    event: 'step-end',
      runId,
      iteration,
      stepId: step.id,
      command: step.command,
      endedAt: stepEnd.iso,
      endedAtLocal: stepEnd.local,
      exitCode,
      success,
    });

    if (!success) {
      updateStatus({
        running: false,
        completed: false,
        passed: false,
        allGreenSoFar: false,
        awaitingFix: true,
        currentIteration: iteration,
        currentStep: step.id,
        currentStepHeartbeatAt: stepEnd.iso,
        stopReason: 'step-failed-awaiting-fix',
        failure: {
          iteration,
          stepId: step.id,
          exitCode,
          endedAt: stepEnd.iso,
          endedAtLocal: stepEnd.local,
        },
      });
      recordHistory({
        event: 'run-paused-for-fix',
        runId,
        iteration,
        stepId: step.id,
        endedAt: stepEnd.iso,
        endedAtLocal: stepEnd.local,
        exitCode,
        deadlineAt: deadline.toISOString(),
        deadlineAtLocal: deadline.toString(),
      });
      process.exit(exitCode);
    }

    updateStatus({
      awaitingFix: false,
      lastSuccessfulStep: step.id,
      lastSuccessfulStepAt: stepEnd.iso,
      currentStepHeartbeatAt: stepEnd.iso,
    });
  }

  const cycleEnd = nowState();
  updateStatus({
    completedIterations: iteration,
    currentStep: null,
    currentStepStartedAt: null,
    currentStepHeartbeatAt: null,
  });
  recordHistory({
    event: 'iteration-complete',
    runId,
    iteration,
    endedAt: cycleEnd.iso,
    endedAtLocal: cycleEnd.local,
  });

  const reachedMaxIterations = maxIterations !== null && iteration >= maxIterations;
  const deadlineReached = cycleEnd.epochMs >= deadlineMs;

  if (reachedMaxIterations || deadlineReached) {
    updateStatus({
      running: false,
      completed: true,
      passed: true,
      awaitingFix: false,
      currentStep: null,
      currentStepStartedAt: null,
      currentStepHeartbeatAt: null,
      stopReason: reachedMaxIterations
        ? 'max-iterations-reached'
        : 'deadline-reached-after-green-cycle',
      finishedAt: cycleEnd.iso,
      finishedAtLocal: cycleEnd.local,
    });
    recordHistory({
      event: 'run-complete',
      runId,
      endedAt: cycleEnd.iso,
      endedAtLocal: cycleEnd.local,
      completedIterations: iteration,
      stopReason: reachedMaxIterations
        ? 'max-iterations-reached'
        : 'deadline-reached-after-green-cycle',
    });
    break;
  }
}

console.log(STATUS_PATH);

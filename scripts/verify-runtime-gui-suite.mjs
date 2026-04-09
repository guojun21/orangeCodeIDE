#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';
import { ROOT } from './paths.mjs';

const USE_NODE22 = path.join(ROOT, 'scripts', 'use-node22.sh');
const LAUNCH_HISTORY_PATH = path.join(ROOT, 'test', '.output', 'runtime-launch-history.jsonl');

const SUITES = {
  smoke: {
    runner: path.join(ROOT, 'test', 'run-smoke.mjs'),
    reportPath: path.join(ROOT, 'mapped', 'runtime-gui-smoke-report.json'),
  },
  agent: {
    runner: path.join(ROOT, 'test', 'run-agent.mjs'),
    reportPath: path.join(ROOT, 'mapped', 'runtime-gui-agent-authenticated-report.json'),
  },
  'agent-shell': {
    runner: path.join(ROOT, 'test', 'agent', 'public-bootstrap.test.mjs'),
    reportPath: path.join(ROOT, 'mapped', 'runtime-gui-agent-report.json'),
  },
};

const DEFAULT_SPAWN = {
  cwd: ROOT,
  stdio: 'inherit',
  env: {
    ...process.env,
    SHOPEECODE_TEST_ISOLATE_USER_DATA: '1',
  },
};

function createSuiteRunner(suite) {
  if (suite.runner.endsWith('.test.mjs')) {
    return ['bash', [USE_NODE22, 'node', '--test', '--test-force-exit', '--test-concurrency=1', suite.runner], DEFAULT_SPAWN];
  }

  return ['bash', [USE_NODE22, 'node', suite.runner], DEFAULT_SPAWN];
}

function parseArgs(argv) {
  const args = {};
  for (let index = 2; index < argv.length; index += 1) {
    const token = argv[index];
    if (!token.startsWith('--')) {
      continue;
    }
    const key = token.slice(2);
    const value = argv[index + 1];
    if (!value || value.startsWith('--')) {
      throw new Error(`Missing value for --${key}`);
    }
    args[key] = value;
    index += 1;
  }
  return args;
}

function readJsonl(filePath) {
  if (!fs.existsSync(filePath)) {
    return [];
  }
  return fs
    .readFileSync(filePath, 'utf8')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => JSON.parse(line));
}

function normalizeRelative(filePath) {
  return path.relative(ROOT, filePath).split(path.sep).join('/');
}

function uniqueByPid(launches) {
  const seen = new Set();
  const result = [];
  for (const launch of launches) {
    if (!launch?.pid || seen.has(launch.pid)) {
      continue;
    }
    seen.add(launch.pid);
    result.push(launch);
  }
  return result;
}

function isProcessGroupAlive(pid) {
  if (!pid) {
    return false;
  }
  try {
    process.kill(-pid, 0);
    return true;
  } catch {
    return false;
  }
}

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function killProcessGroup(pid) {
  if (!pid) {
    return { pid, aliveBefore: false, cleaned: false };
  }

  const aliveBefore = isProcessGroupAlive(pid);
  if (!aliveBefore) {
    return { pid, aliveBefore: false, cleaned: true };
  }

  try {
    process.kill(-pid, 'SIGTERM');
  } catch {}
  await delay(1200);

  let cleaned = !isProcessGroupAlive(pid);
  if (!cleaned) {
    try {
      process.kill(-pid, 'SIGKILL');
    } catch {}
    await delay(500);
    cleaned = !isProcessGroupAlive(pid);
  }

  return { pid, aliveBefore, cleaned };
}

const args = parseArgs(process.argv);
const suiteId = args.suite;
const suite = SUITES[suiteId];

if (!suiteId || !suite) {
  throw new Error(`Usage: verify-runtime-gui-suite.mjs --suite <${Object.keys(SUITES).join('|')}>`);
}

const launchesBefore = readJsonl(LAUNCH_HISTORY_PATH);
const staleLaunches = uniqueByPid(launchesBefore.filter((launch) => isProcessGroupAlive(launch.pid)));
const staleCleanup = [];
for (const launch of staleLaunches) {
  staleCleanup.push({
    pid: launch.pid,
    generatedAt: launch.generatedAt ?? null,
    rebuiltProfile: launch.rebuiltProfile ?? null,
    ...(await killProcessGroup(launch.pid)),
  });
}
const launchedAt = new Date().toISOString();
const [cmd, runnerArgs, options] = createSuiteRunner(suite);
const result = spawnSync(cmd, runnerArgs, options);
const launchesAfter = readJsonl(LAUNCH_HISTORY_PATH);
const newLaunches = launchesAfter.slice(launchesBefore.length);
const cleanup = [];

for (const launch of newLaunches) {
  cleanup.push(await killProcessGroup(launch.pid));
}

const report = {
  generatedAt: new Date().toISOString(),
  suite: suiteId,
  launchedAt,
  runner: normalizeRelative(suite.runner),
  launchHistoryPath: normalizeRelative(LAUNCH_HISTORY_PATH),
  launchCountBefore: launchesBefore.length,
  launchCountAfter: launchesAfter.length,
  launchCountDelta: newLaunches.length,
  staleLaunchesFound: staleLaunches.length,
  staleCleanup,
  launches: newLaunches,
  cleanup,
  exitCode: result.status ?? 1,
  passed: (result.status ?? 1) === 0 && newLaunches.length > 0,
};

fs.mkdirSync(path.dirname(suite.reportPath), { recursive: true });
fs.writeFileSync(suite.reportPath, JSON.stringify(report, null, 2) + '\n');
console.log(suite.reportPath);
process.exit(result.status ?? 1);

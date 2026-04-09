#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { spawn } from 'child_process';
import { ROOT } from './paths.mjs';

const USE_NODE22 = path.join(ROOT, 'scripts', 'use-node22.sh');
const RUNNER = path.join(ROOT, 'scripts', 'run-runtime-burn-in.mjs');
const OUTPUT_DIR = path.join(ROOT, 'test', '.output');
const PID_PATH = path.join(OUTPUT_DIR, 'runtime-burn-in.pid.json');
const LOG_PATH = path.join(OUTPUT_DIR, 'runtime-burn-in.latest.log');

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

function isPidAlive(pid) {
  if (!pid) {
    return false;
  }
  try {
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJson(filePath, payload) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, JSON.stringify(payload, null, 2) + '\n');
}

const args = parseArgs(process.argv);
const hours = args.hours ?? '9';
const forceRestart = args['force-restart'] === true;

ensureDir(OUTPUT_DIR);

if (fs.existsSync(PID_PATH)) {
  const existing = readJson(PID_PATH);
  if (isPidAlive(existing.pid)) {
    if (!forceRestart) {
      throw new Error(`Runtime burn-in daemon already running with pid ${existing.pid}`);
    }
    process.kill(existing.pid, 'SIGTERM');
  }
}

fs.rmSync(LOG_PATH, { force: true });
const logFd = fs.openSync(LOG_PATH, 'a');
const child = spawn('bash', [USE_NODE22, 'node', RUNNER, '--hours', hours], {
  cwd: ROOT,
  detached: true,
  stdio: ['ignore', logFd, logFd],
  env: process.env,
});

child.unref();
fs.closeSync(logFd);

const startedAt = new Date();
const deadline = new Date(startedAt.getTime() + Number(hours) * 60 * 60 * 1000);

writeJson(PID_PATH, {
  pid: child.pid,
  startedAt: startedAt.toISOString(),
  startedAtLocal: startedAt.toString(),
  hoursTarget: Number(hours),
  deadlineAt: deadline.toISOString(),
  deadlineAtLocal: deadline.toString(),
  logPath: path.relative(ROOT, LOG_PATH),
  runner: path.relative(ROOT, RUNNER),
});

console.log(PID_PATH);

#!/usr/bin/env node

import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { spawn, spawnSync } from 'child_process';
import { waitForCondition, delay } from '../test/driver/helpers.mjs';
import { createIsolatedProbeUserDataDir, DEFAULT_SHARED_REBUILT_USER_DATA_DIR } from './rebuilt-user-data.mjs';

import { ROOT } from './paths.mjs';
const PROFILE = 'agent-exec-spike';
const RESULT_PATH = path.join(ROOT, 'mapped', 'agent-exec-spike-check.json');
const PHASE = 'rebuilt';
const BUILT_PATH = path.join(ROOT, 'recovered', PHASE, 'built', 'cursor-agent-exec-main.js');
const RUNTIME_PATH = path.join(ROOT, 'recovered', PHASE, 'runtime-app', 'extensions', 'cursor-agent-exec', 'dist', 'main.js');

function walk(dirPath) {
  const entries = [];
  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    const absolutePath = path.join(dirPath, entry.name);
    try {
      if (entry.isDirectory()) {
        entries.push(...walk(absolutePath));
      } else {
        entries.push(absolutePath);
      }
    } catch (error) {
      if (error?.code !== 'ENOENT') {
        throw error;
      }
    }
  }
  return entries;
}

function globToRegExp(globPattern) {
  const escaped = globPattern.replace(/[|\\{}()[\]^$+?.]/g, '\\$&');
  return new RegExp(`^${escaped.replaceAll('*', '[^/]+')}$`);
}

function findLatestLog(userDataDir, relativeGlobPattern) {
  if (!fs.existsSync(userDataDir)) {
    return null;
  }

  const matcher = globToRegExp(relativeGlobPattern);
  const matches = walk(userDataDir)
    .map((filePath) => {
      try {
        return {
          filePath,
          relativePath: path.relative(userDataDir, filePath).split(path.sep).join('/'),
          mtimeMs: fs.statSync(filePath).mtimeMs,
        };
      } catch (error) {
        if (error?.code === 'ENOENT') {
          return null;
        }
        throw error;
      }
    })
    .filter(Boolean)
    .filter((entry) => matcher.test(entry.relativePath))
    .sort((left, right) => right.mtimeMs - left.mtimeMs);

  return matches[0]?.filePath ?? null;
}

function sha256(filePath) {
  return crypto.createHash('sha256').update(fs.readFileSync(filePath)).digest('hex');
}

function runNodeScript(scriptName, args = [], env = {}) {
  const result = spawnSync(process.execPath, [path.join(ROOT, 'scripts', scriptName), ...args], {
    cwd: ROOT,
    stdio: 'inherit',
    env: {
      ...process.env,
      SHOPEECODE_REBUILT_PROFILE: PROFILE,
      ...env,
    },
  });

  if ((result.status ?? 1) !== 0) {
    throw new Error(`${scriptName} failed with exit code ${result.status ?? 1}`);
  }
}

function runStablePrepare() {
  const result = spawnSync(process.execPath, [path.join(ROOT, 'scripts', 'prepare-rebuilt-runtime.mjs')], {
    cwd: ROOT,
    stdio: 'inherit',
    env: {
      ...process.env,
      SHOPEECODE_REBUILT_PROFILE: 'stable',
    },
  });

  if ((result.status ?? 1) !== 0) {
    throw new Error(`restore stable runtime failed with exit code ${result.status ?? 1}`);
  }
}

async function terminateChild(child) {
  if (!child || child.exitCode !== null || child.killed) {
    return;
  }

  try {
    process.kill(-child.pid, 'SIGTERM');
  } catch {}

  await Promise.race([
    new Promise((resolve) => child.once('exit', resolve)),
    delay(3000),
  ]);

  if (child.exitCode === null && !child.killed) {
    try {
      process.kill(-child.pid, 'SIGKILL');
    } catch {}

    await Promise.race([
      new Promise((resolve) => child.once('exit', resolve)),
      delay(3000),
    ]);
  }
}

await runNodeScript('prepare-rebuilt-runtime.mjs');

const userDataDir = createIsolatedProbeUserDataDir({
  sourceDir: DEFAULT_SHARED_REBUILT_USER_DATA_DIR,
  prefix: 'ae',
});

let child = null;
let stdout = '';
let stderr = '';
let exitCode = null;
let signalCode = null;

try {
  child = spawn('bash', [path.join(ROOT, 'run-electron-rebuilt.sh'), ROOT], {
    cwd: ROOT,
    detached: true,
    env: {
      ...process.env,
      SHOPEECODE_REBUILT_PROFILE: PROFILE,
      SHOPEECODE_REBUILT_USER_DATA_DIR: userDataDir,
      SHOPEECODE_REBUILT_SKIP_PREPARE: '1',
      VSCODE_HANDLES_UNCAUGHT_ERRORS: 'true',
    },
    stdio: ['ignore', 'pipe', 'pipe'],
  });

  child.stdout.on('data', (chunk) => {
    stdout += chunk.toString();
  });
  child.stderr.on('data', (chunk) => {
    stderr += chunk.toString();
  });
  child.on('exit', (code, signal) => {
    exitCode = code;
    signalCode = signal;
  });

  const exthostLogPath = await waitForCondition(async () => {
    const candidate = findLatestLog(userDataDir, 'logs/*/window*/exthost/exthost.log');
    if (!candidate) {
      return null;
    }

    const text = fs.readFileSync(candidate, 'utf8');
    if (text.includes('Extension activated success: anysphere.cursor-agent-exec')) {
      return candidate;
    }

    if (exitCode !== null || signalCode !== null) {
      throw new Error(`runtime exited before agent-exec activation (code=${exitCode}, signal=${signalCode})`);
    }

    return null;
  }, {
    timeoutMs: 30000,
    description: 'agent-exec activation success logged',
  });

  const exthostLogText = fs.readFileSync(exthostLogPath, 'utf8');
  const outputLogPath = findLatestLog(
    userDataDir,
    'logs/*/window*/output_logging_*/*-Cursor Agent Exec.log'
  );
  const outputLogText = outputLogPath ? fs.readFileSync(outputLogPath, 'utf8') : '';
  const builtHash = fs.existsSync(BUILT_PATH) ? sha256(BUILT_PATH) : null;
  const runtimeHash = fs.existsSync(RUNTIME_PATH) ? sha256(RUNTIME_PATH) : null;

  const checks = [
    {
      id: 'runtime-started',
      passed: typeof child.pid === 'number' && child.pid > 0,
      detail: { pid: child.pid ?? null },
    },
    {
      id: 'extension-runtime-hash',
      passed: !!builtHash && !!runtimeHash && builtHash === runtimeHash,
      detail: { builtPath: BUILT_PATH, runtimePath: RUNTIME_PATH, builtHash, runtimeHash },
    },
    {
      id: 'activation-succeeded',
      passed: exthostLogText.includes('Extension activated success: anysphere.cursor-agent-exec'),
      detail: { exthostLogPath },
    },
    {
      id: 'output-log-written',
      passed:
        !!outputLogPath &&
        outputLogText.includes('cursor-agent-exec extension activating') &&
        outputLogText.includes('cursor-agent-exec extension activated'),
      detail: { outputLogPath },
      advisory: true,
    },
    {
      id: 'stderr-empty',
      passed: stderr.trim().length === 0,
      detail: { stderr: stderr.trim() },
      advisory: true,
    },
  ];

  const payload = {
    generatedAt: new Date().toISOString(),
    profile: PROFILE,
    userDataDir,
    stdout: stdout.trim(),
    stderr: stderr.trim(),
    exitCode,
    signalCode,
    exthostLogPath,
    outputLogPath,
    passed: checks.every((entry) => entry.passed || entry.advisory === true),
    checks,
  };

  fs.writeFileSync(RESULT_PATH, JSON.stringify(payload, null, 2) + '\n');
  console.log(RESULT_PATH);
} finally {
  await terminateChild(child);
  fs.rmSync(userDataDir, { recursive: true, force: true });
  runStablePrepare();
}

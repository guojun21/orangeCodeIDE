#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { spawn } from 'child_process';
import net from 'net';
import { CdpClient, waitForJson, waitForPageTarget } from './cdp.mjs';
import { ROOT, LAUNCH_HISTORY_PATH, appendJsonl, delay, outputPath, waitForCondition } from './helpers.mjs';
import { SELECTORS } from './selectors.mjs';
import {
  cleanupUserDataLocks,
  createIsolatedProbeUserDataDir,
  DEFAULT_PROBE_REBUILT_USER_DATA_ROOT,
  getSharedRebuiltUserDataDir,
} from '../../scripts/rebuilt-user-data.mjs';

const LAST_LAUNCH_RECORD_PATH = outputPath('last-runtime-launch.json');
const DEFAULT_SHORT_SPIKE_PROBE_REBUILT_USER_DATA_ROOT = path.join('/tmp', 'shc-spk');

async function resolveDefaultPort() {
  if (process.env.SHOPEECODE_TEST_PORT) {
    return Number(process.env.SHOPEECODE_TEST_PORT);
  }

  return await new Promise((resolve, reject) => {
    const server = net.createServer();
    server.unref();
    server.on('error', reject);
    server.listen(0, '127.0.0.1', () => {
      const address = server.address();
      if (!address || typeof address === 'string') {
        server.close(() => reject(new Error('Failed to resolve free debug port')));
        return;
      }
      const { port } = address;
      server.close((error) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(port);
      });
    });
  });
}

function readLastLaunchRecord() {
  if (!fs.existsSync(LAST_LAUNCH_RECORD_PATH)) {
    return null;
  }

  try {
    return JSON.parse(fs.readFileSync(LAST_LAUNCH_RECORD_PATH, 'utf8'));
  } catch {
    return null;
  }
}

function writeLastLaunchRecord(record) {
  fs.writeFileSync(LAST_LAUNCH_RECORD_PATH, `${JSON.stringify(record, null, 2)}\n`);
}

function clearLastLaunchRecord(pid) {
  const record = readLastLaunchRecord();
  if (!record) {
    return;
  }

  if (!pid || record.pid === pid) {
    fs.rmSync(LAST_LAUNCH_RECORD_PATH, { force: true });
  }
}

async function killProcessGroup(pid) {
  if (!pid) {
    return;
  }

  try {
    process.kill(-pid, 'SIGTERM');
  } catch {}
  await delay(1500);

  try {
    process.kill(-pid, 0);
    process.kill(-pid, 'SIGKILL');
  } catch {}
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

async function cleanupPreviousRecordedLaunch() {
  const record = readLastLaunchRecord();
  if (!record?.pid) {
    return;
  }

  try {
    process.kill(-record.pid, 0);
  } catch {
    clearLastLaunchRecord(record.pid);
    return;
  }

  await killProcessGroup(record.pid);
  clearLastLaunchRecord(record.pid);
}

async function createSession({
  child = null,
  cdp,
  target,
  versionInfo,
  userDataDir,
  remoteDebuggingPort,
  stdoutRef = () => '',
  stderrRef = () => '',
  attached = false,
  ephemeralUserDataDir = null,
  workbenchReadyTimeoutMs = 60000,
} = {}) {
  const session = {
    child,
    cdp,
    target,
    versionInfo,
    userDataDir,
    remoteDebuggingPort,
    attached,
    stdout() {
      return stdoutRef();
    },
    stderr() {
      return stderrRef();
    },
    async evaluateValue(expression) {
      const result = await cdp.send('Runtime.evaluate', {
        expression,
        returnByValue: true,
        awaitPromise: true,
      });
      return result.result?.value ?? null;
    },
    async evaluateJson(expression) {
      const value = await this.evaluateValue(`(() => JSON.stringify(${expression}))()`);
      return JSON.parse(value);
    },
    async screenshot(name = `test-${Date.now()}.png`) {
      const result = await cdp.send('Page.captureScreenshot', { format: 'png' });
      const filePath = outputPath(name);
      fs.writeFileSync(filePath, Buffer.from(result.data, 'base64'));
      return filePath;
    },
    async close() {
      try {
        await cdp.close();
      } catch {}

      if (attached) {
        return;
      }

      if (!child || child.exitCode !== null || child.signalCode !== null) {
        clearLastLaunchRecord(child?.pid);
        if (ephemeralUserDataDir) {
          fs.rmSync(ephemeralUserDataDir, { recursive: true, force: true });
        } else {
          cleanupUserDataLocks(userDataDir);
        }
        return;
      }

      await killProcessGroup(child.pid);
      clearLastLaunchRecord(child.pid);
      if (ephemeralUserDataDir) {
        fs.rmSync(ephemeralUserDataDir, { recursive: true, force: true });
      } else {
        cleanupUserDataLocks(userDataDir);
      }
    },
  };

  await waitForCondition(async () => {
    const state = await session.evaluateJson(`({
      readyState: document.readyState,
      hasWorkbench: !!document.querySelector(${JSON.stringify(SELECTORS.WORKBENCH)}),
      title: document.title,
      smokeDriver: typeof window.driver !== 'undefined'
    })`);
    return state.readyState === 'complete' && state.hasWorkbench ? state : null;
  }, {
    timeoutMs: workbenchReadyTimeoutMs,
    description: 'workbench ready',
  });

  session.smokeTestDriverAvailable = await session.evaluateValue(`typeof window.driver !== 'undefined'`);
  return session;
}

async function tryAttachExistingRuntime({
  userDataDir,
  remoteDebuggingPort,
} = {}) {
  try {
    const versionInfo = await waitForJson(remoteDebuggingPort, '/json/version', 1200);
    const target = await waitForPageTarget(remoteDebuggingPort, 1200);
    const cdp = new CdpClient(target.webSocketDebuggerUrl);
    await cdp.open();
    await cdp.send('Runtime.enable');
    await cdp.send('Page.enable');
    return createSession({
      child: null,
      cdp,
      target,
      versionInfo,
      userDataDir,
      remoteDebuggingPort,
      attached: true,
    });
  } catch {
    return null;
  }
}

export async function launchRuntime({
  userDataDir = getSharedRebuiltUserDataDir('SHOPEECODE_TEST_USER_DATA_DIR', 'SHOPEECODE_REBUILT_USER_DATA_DIR'),
  remoteDebuggingPort = null,
  workspacePath = ROOT,
  runtimeRoot = null,
  enableSmokeTestDriver = true,
  skipPrepare = true,
  cleanupPreviousLaunch = true,
  attachIfAvailable = false,
  isolateUserData = process.env.SHOPEECODE_TEST_ISOLATE_USER_DATA === '1',
  extraEnv = {},
} = {}) {
  const rebuiltProfile =
    extraEnv.SHOPEECODE_REBUILT_PROFILE ??
    process.env.SHOPEECODE_REBUILT_PROFILE ??
    'stable';
  const effectiveRemoteDebuggingPort = remoteDebuggingPort ?? await resolveDefaultPort();
  const startupTimeoutMs =
    rebuiltProfile === 'workbench-desktop-main-spike' ? 120000 : 60000;
  let effectiveUserDataDir = userDataDir;
  let ephemeralUserDataDir = null;

  const maybeIsolateUserDataDir = (prefix) => {
    const normalizedUserDataDir = path.resolve(effectiveUserDataDir);
    const normalizedProbeRoot = path.resolve(DEFAULT_PROBE_REBUILT_USER_DATA_ROOT);
    const normalizedShortProbeRoot = path.resolve(DEFAULT_SHORT_SPIKE_PROBE_REBUILT_USER_DATA_ROOT);
    const alreadyIsolatedProbeDir =
      normalizedUserDataDir === normalizedProbeRoot ||
      normalizedUserDataDir.startsWith(`${normalizedProbeRoot}${path.sep}`) ||
      normalizedUserDataDir === normalizedShortProbeRoot ||
      normalizedUserDataDir.startsWith(`${normalizedShortProbeRoot}${path.sep}`);

    if (alreadyIsolatedProbeDir) {
      ephemeralUserDataDir = effectiveUserDataDir;
      return;
    }

    ephemeralUserDataDir = createIsolatedProbeUserDataDir({
      sourceDir: effectiveUserDataDir,
      rootDir: DEFAULT_SHORT_SPIKE_PROBE_REBUILT_USER_DATA_ROOT,
      prefix,
    });
    effectiveUserDataDir = ephemeralUserDataDir;
  };

  if (rebuiltProfile === 'workbench-desktop-main-spike') {
    maybeIsolateUserDataDir('spike-test');
  } else if (isolateUserData) {
    maybeIsolateUserDataDir('gui-test');
  }

  fs.mkdirSync(path.dirname(effectiveUserDataDir), { recursive: true });

  if (attachIfAvailable) {
    const attachedSession = await tryAttachExistingRuntime({
      userDataDir: effectiveUserDataDir,
      remoteDebuggingPort: effectiveRemoteDebuggingPort,
    });
    if (attachedSession) {
      return attachedSession;
    }
  }

  if (cleanupPreviousLaunch) {
    await cleanupPreviousRecordedLaunch();
    cleanupUserDataLocks(effectiveUserDataDir);
  }

  const args = [
    path.join(ROOT, 'run-electron-rebuilt.sh'),
    `--remote-debugging-port=${effectiveRemoteDebuggingPort}`,
  ];

  if (enableSmokeTestDriver) {
    args.push('--enable-smoke-test-driver');
  }

  args.push(workspacePath);

  const child = spawn('bash', args, {
    cwd: ROOT,
    detached: true,
    env: {
      ...process.env,
      SHOPEECODE_REBUILT_USER_DATA_DIR: effectiveUserDataDir,
      SHOPEECODE_REBUILT_SKIP_PREPARE: skipPrepare ? '1' : '0',
      ...(runtimeRoot ? { SHOPEECODE_REBUILT_RUNTIME_ROOT: runtimeRoot } : {}),
      ...extraEnv,
    },
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  writeLastLaunchRecord({
      pid: child.pid,
      remoteDebuggingPort: effectiveRemoteDebuggingPort,
      userDataDir: effectiveUserDataDir,
      startedAt: new Date().toISOString(),
  });
  appendJsonl(LAUNCH_HISTORY_PATH, {
    event: 'launch',
    generatedAt: new Date().toISOString(),
    pid: child.pid,
    remoteDebuggingPort: effectiveRemoteDebuggingPort,
    rebuiltProfile,
    workspacePath,
    runtimeRoot: runtimeRoot ?? path.join(ROOT, 'recovered', 'rebuilt', 'runtime-app'),
    userDataDir: effectiveUserDataDir,
    ephemeralUserDataDir,
    enableSmokeTestDriver,
    skipPrepare,
  });

  let stdout = '';
  let stderr = '';
  child.stdout.on('data', (chunk) => {
    stdout += chunk.toString();
  });
  child.stderr.on('data', (chunk) => {
    stderr += chunk.toString();
  });

  let cdp;
  try {
    const versionInfo = await waitForJson(effectiveRemoteDebuggingPort, '/json/version', startupTimeoutMs);
    const target = await waitForPageTarget(effectiveRemoteDebuggingPort, startupTimeoutMs);
    cdp = new CdpClient(target.webSocketDebuggerUrl);
    await cdp.open();
    await cdp.send('Runtime.enable');
    await cdp.send('Page.enable');
    const session = await createSession({
      child,
      cdp,
      target,
      versionInfo,
      userDataDir: effectiveUserDataDir,
      remoteDebuggingPort: effectiveRemoteDebuggingPort,
      stdoutRef: () => stdout,
      stderrRef: () => stderr,
      attached: false,
      ephemeralUserDataDir,
      workbenchReadyTimeoutMs: startupTimeoutMs,
    });
    return session;
  } catch (error) {
    const launchDiagnostics = {
      childPid: child.pid,
      childExitCode: child.exitCode,
      childSignalCode: child.signalCode,
      processAliveBeforeCleanup: isProcessGroupAlive(child.pid),
      remoteDebuggingPort: effectiveRemoteDebuggingPort,
      userDataDir: effectiveUserDataDir,
      ephemeralUserDataDir,
      runtimeRoot: runtimeRoot ?? path.join(ROOT, 'recovered', 'rebuilt', 'runtime-app'),
      lastLaunchRecord: readLastLaunchRecord(),
    };
    try {
      if (cdp) {
        await cdp.close();
      }
    } catch {}
    await killProcessGroup(child.pid);
    clearLastLaunchRecord(child.pid);
    if (ephemeralUserDataDir) {
      fs.rmSync(ephemeralUserDataDir, { recursive: true, force: true });
    } else {
      cleanupUserDataLocks(effectiveUserDataDir);
    }
    if (error && typeof error === 'object') {
      error.runtimeStdout = stdout;
      error.runtimeStderr = stderr;
      error.remoteDebuggingPort = effectiveRemoteDebuggingPort;
      error.runtimeRoot = runtimeRoot ?? path.join(ROOT, 'recovered', 'rebuilt', 'runtime-app');
      error.runtimeUserDataDir = effectiveUserDataDir;
      error.runtimeLaunchDiagnostics = launchDiagnostics;
    }
    throw error;
  }
}

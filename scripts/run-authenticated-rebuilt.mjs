#!/usr/bin/env node

import path from 'path';
import { spawnSync } from 'child_process';
import { ROOT } from './paths.mjs';
import { getSharedRebuiltUserDataDir } from './rebuilt-user-data.mjs';

const DEFAULT_USER_DATA_DIR = getSharedRebuiltUserDataDir(
  'SHOPEECODE_REBUILT_AUTH_USER_DATA_DIR',
  'SHOPEECODE_REBUILT_USER_DATA_DIR'
);

function parseArgs(argv) {
  const args = {};
  const passthrough = [];

  for (let index = 2; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === '--') {
      passthrough.push(...argv.slice(index + 1));
      break;
    }
    if (!token.startsWith('--')) {
      passthrough.push(token);
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

  return { args, passthrough };
}

function runNodeScript(scriptName, scriptArgs = []) {
  const result = spawnSync(process.execPath, [path.join(ROOT, 'scripts', scriptName), ...scriptArgs], {
    cwd: ROOT,
    stdio: 'inherit',
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

const { args, passthrough } = parseArgs(process.argv);
const userDataDir = args['user-data-dir'] ?? DEFAULT_USER_DATA_DIR;
const envFilePath = args['env-file'];

runNodeScript('prepare-rebuilt-runtime.mjs');

const seedArgs = ['--user-data-dir', userDataDir];
if (envFilePath) {
  seedArgs.push('--env-file', envFilePath);
}
runNodeScript('bootstrap-auth-from-thalamus.mjs', seedArgs);

const electronArgs = ['run-electron-rebuilt.sh', ...passthrough];
const child = spawnSync('bash', electronArgs, {
  cwd: ROOT,
  stdio: 'inherit',
  env: {
    ...process.env,
    SHOPEECODE_REBUILT_USER_DATA_DIR: userDataDir,
    SHOPEECODE_REBUILT_SKIP_PREPARE: '1',
  },
});

process.exit(child.status ?? 1);

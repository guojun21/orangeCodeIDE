#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';

import { ROOT } from './paths.mjs';
const DEFAULT_USER_DATA_DIR = '/tmp/shopeecode-rebuilt-auth-user';
const DEFAULT_THALAMUS_ENV_PATH =
  '/Users/ruicheng.gu/Documents/bs/shopeeCode/reference/cursor/external/thalamus-py/.env';
const DEFAULT_REFRESH_TOKEN_PLACEHOLDER = 'thalamus-bootstrap-refresh-placeholder';

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

function sqlQuote(value) {
  return `'${String(value).replaceAll("'", "''")}'`;
}

function getGlobalStorageDir(userDataDir) {
  return path.join(userDataDir, 'User', 'globalStorage');
}

function getStateDbPath(userDataDir) {
  return path.join(getGlobalStorageDir(userDataDir), 'state.vscdb');
}

function readCursorToken(envFilePath) {
  if (!fs.existsSync(envFilePath)) {
    throw new Error(`Thalamus env file not found: ${envFilePath}`);
  }

  const text = fs.readFileSync(envFilePath, 'utf8');
  const match = text.match(/^CURSOR_TOKEN=(.+)$/m);
  if (!match) {
    throw new Error(`CURSOR_TOKEN missing from: ${envFilePath}`);
  }

  const token = match[1].trim();
  if (!token) {
    throw new Error(`CURSOR_TOKEN empty in: ${envFilePath}`);
  }

  return token;
}

function runSqlite(dbPath, sql) {
  const result = spawnSync('sqlite3', [dbPath, sql], {
    cwd: ROOT,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  });

  if (result.status !== 0) {
    throw new Error(result.stderr.trim() || `sqlite3 failed for ${dbPath}`);
  }
}

function seedCursorAuth({ userDataDir, token }) {
  const globalStorageDir = getGlobalStorageDir(userDataDir);
  const dbPath = getStateDbPath(userDataDir);
  fs.mkdirSync(globalStorageDir, { recursive: true });

  const sql = [
    'CREATE TABLE IF NOT EXISTS ItemTable (key TEXT UNIQUE ON CONFLICT REPLACE, value BLOB);',
    'CREATE TABLE IF NOT EXISTS cursorDiskKV (key TEXT UNIQUE ON CONFLICT REPLACE, value BLOB);',
    `INSERT OR REPLACE INTO ItemTable(key, value) VALUES ('cursorAuth/accessToken', ${sqlQuote(token)});`,
    `INSERT OR REPLACE INTO ItemTable(key, value) VALUES ('cursorAuth/refreshToken', ${sqlQuote(DEFAULT_REFRESH_TOKEN_PLACEHOLDER)});`,
    "INSERT OR IGNORE INTO ItemTable(key, value) VALUES ('cursorAuth/stripeMembershipType', 'free');",
  ].join(' ');

  runSqlite(dbPath, sql);
  return dbPath;
}

const args = parseArgs(process.argv);
const userDataDir = args['user-data-dir'] ?? DEFAULT_USER_DATA_DIR;
const envFilePath = args['env-file'] ?? DEFAULT_THALAMUS_ENV_PATH;
const token = readCursorToken(envFilePath);
const dbPath = seedCursorAuth({ userDataDir, token });

const result = {
  seeded: true,
  userDataDir,
  dbPath,
  tokenLength: token.length,
  source: 'thalamus-env',
  envFilePath,
};

console.log(JSON.stringify(result));

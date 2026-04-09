#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';

import { ROOT } from './paths.mjs';
import { getSharedRebuiltUserDataDir } from './rebuilt-user-data.mjs';

const DEFAULT_USER_DATA_DIR = getSharedRebuiltUserDataDir(
  'SHOPEECODE_REBUILT_AUTH_USER_DATA_DIR',
  'SHOPEECODE_REBUILT_USER_DATA_DIR'
);
const DEFAULT_CURSOR_STATE_DB_PATH = path.join(
  process.env.HOME ?? '/Users/ruicheng.gu',
  'Library',
  'Application Support',
  'Cursor',
  'User',
  'globalStorage',
  'state.vscdb'
);
const DEFAULT_THALAMUS_ENV_PATH =
  '/Users/ruicheng.gu/Documents/bs/shopeeCode/reference/cursor/external/thalamus-py/.env';
const DEFAULT_REFRESH_TOKEN_PLACEHOLDER = 'thalamus-bootstrap-refresh-placeholder';
const CURSOR_AUTH_KEYS = [
  'cursorAuth/accessToken',
  'cursorAuth/refreshToken',
  'cursorAuth/cachedEmail',
  'cursorAuth/cachedSignUpType',
  'cursorAuth/stripeMembershipType',
  'cursorAuth/stripeSubscriptionStatus',
  'cursorAuth/stripeCustomerId',
];

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

function querySqlite(dbPath, sql) {
  const result = spawnSync('sqlite3', [dbPath, sql], {
    cwd: ROOT,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  });

  if (result.status !== 0) {
    throw new Error(result.stderr.trim() || `sqlite3 query failed for ${dbPath}`);
  }

  return result.stdout.trim();
}

function readCursorAuthFromStateDb(dbPath) {
  if (!fs.existsSync(dbPath)) {
    return null;
  }

  const quotedKeys = CURSOR_AUTH_KEYS.map(sqlQuote).join(', ');
  const sql = `SELECT key || '|' || CAST(value AS TEXT) FROM ItemTable WHERE key IN (${quotedKeys}) ORDER BY key;`;
  const output = querySqlite(dbPath, sql);
  if (!output) {
    return null;
  }

  const entries = Object.create(null);
  for (const line of output.split('\n')) {
    if (!line.trim()) {
      continue;
    }
    const [key, ...rest] = line.split('|');
    const value = rest.join('|');
    if (!key) {
      continue;
    }
    entries[key] = value;
  }

  if (!entries['cursorAuth/accessToken']) {
    return null;
  }

  return entries;
}

function buildCursorAuthSeedEntries({ cursorStateEntries, thalamusToken }) {
  if (cursorStateEntries?.['cursorAuth/accessToken']) {
    return {
      source: 'cursor-state-db',
      entries: cursorStateEntries,
    };
  }

  return {
    source: 'thalamus-env',
    entries: {
      'cursorAuth/accessToken': thalamusToken,
      'cursorAuth/refreshToken': DEFAULT_REFRESH_TOKEN_PLACEHOLDER,
      'cursorAuth/stripeMembershipType': 'free',
    },
  };
}

function seedCursorAuth({ userDataDir, entries }) {
  const globalStorageDir = getGlobalStorageDir(userDataDir);
  const dbPath = getStateDbPath(userDataDir);
  fs.mkdirSync(globalStorageDir, { recursive: true });

  const inserts = Object.entries(entries)
    .filter(([, value]) => value !== undefined && value !== null && value !== '')
    .map(([key, value]) => `INSERT OR REPLACE INTO ItemTable(key, value) VALUES (${sqlQuote(key)}, ${sqlQuote(value)});`);
  const sqlStatements = [
    'CREATE TABLE IF NOT EXISTS ItemTable (key TEXT UNIQUE ON CONFLICT REPLACE, value BLOB);',
    'CREATE TABLE IF NOT EXISTS cursorDiskKV (key TEXT UNIQUE ON CONFLICT REPLACE, value BLOB);',
    ...inserts,
    "INSERT OR IGNORE INTO ItemTable(key, value) VALUES ('cursorAuth/stripeMembershipType', 'free');",
  ];
  const sql = sqlStatements.join(' ');

  runSqlite(dbPath, sql);
  return dbPath;
}

const args = parseArgs(process.argv);
const userDataDir = args['user-data-dir'] ?? DEFAULT_USER_DATA_DIR;
const sourceStateDbPath = args['source-state-db'] ?? DEFAULT_CURSOR_STATE_DB_PATH;
const envFilePath = args['env-file'] ?? DEFAULT_THALAMUS_ENV_PATH;
const cursorStateEntries =
  args['force-thalamus-env'] === true ? null : readCursorAuthFromStateDb(sourceStateDbPath);
const token = cursorStateEntries ? null : readCursorToken(envFilePath);
const seed = buildCursorAuthSeedEntries({
  cursorStateEntries,
  thalamusToken: token,
});
const dbPath = seedCursorAuth({ userDataDir, entries: seed.entries });

const result = {
  seeded: true,
  userDataDir,
  dbPath,
  tokenLength: String(seed.entries['cursorAuth/accessToken'] ?? '').length,
  source: seed.source,
  sourceStateDbPath,
  envFilePath,
  seededKeys: Object.keys(seed.entries).sort(),
};

console.log(JSON.stringify(result));

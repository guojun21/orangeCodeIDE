#!/usr/bin/env node

import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { getActiveProfile, sliceMatchesProfile } from './watch-rebuilt-slices.mjs';
import { getSharedRebuiltUserDataDir } from './rebuilt-user-data.mjs';

import { ROOT } from './paths.mjs';
import { readRuntimeAssemblies, getAssemblyById } from './runtime-config.mjs';
const SLICES_MANIFEST = path.join(ROOT, 'mapped', 'rebuilt-slices.json');
const RESULT_PATH = path.join(ROOT, 'mapped', 'rebuilt-extension-check.json');

function sha256(filePath) {
  return crypto.createHash('sha256').update(fs.readFileSync(filePath)).digest('hex');
}

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

function materialize(template, phase) {
  return template.replaceAll('{phase}', phase);
}

function globToRegExp(globPattern) {
  const escaped = globPattern.replace(/[|\\{}()[\]^$+?.]/g, '\\$&');
  return new RegExp(`^${escaped.replaceAll('*', '[^/]+')}$`);
}

function findLatestLog(userDataDir, relativeGlobSuffix) {
  if (!userDataDir || !fs.existsSync(userDataDir)) {
    return null;
  }

  const matcher = globToRegExp(relativeGlobSuffix);
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
    .map((filePath) => ({
      filePath: filePath.filePath,
      mtimeMs: filePath.mtimeMs,
    }))
    .sort((left, right) => right.mtimeMs - left.mtimeMs);

  return matches[0]?.filePath ?? null;
}

const args = parseArgs(process.argv);
const userDataDir = args['user-data-dir'] ?? getSharedRebuiltUserDataDir(
  'SHOPEECODE_REBUILT_PROBE_USER_DATA_DIR',
  'SHOPEECODE_REBUILT_USER_DATA_DIR'
);
const logMode = args['log-mode'] ?? 'require';
const activeProfile = getActiveProfile();

const slicesManifest = JSON.parse(fs.readFileSync(SLICES_MANIFEST, 'utf8'));
const assembliesManifest = readRuntimeAssemblies();
const rebuiltAssembly = getAssemblyById('rebuilt-runtime', assembliesManifest);

if (!rebuiltAssembly) {
  throw new Error('Missing rebuilt-runtime assembly');
}

const phase = rebuiltAssembly.phase;
const runtimeRoot = path.join(ROOT, rebuiltAssembly.outputRoot);
const extensionSlices = slicesManifest.slices.filter(
  (slice) => slice.target_runtime_bundle.startsWith('extensions/') && sliceMatchesProfile(slice, activeProfile)
);

const checks = extensionSlices.map((slice) => {
  const builtPath = path.join(ROOT, materialize(slice.build_output_template, phase));
  const runtimePath = path.join(runtimeRoot, slice.target_runtime_bundle);
  const builtExists = fs.existsSync(builtPath);
  const runtimeExists = fs.existsSync(runtimePath);
  const builtHash = builtExists ? sha256(builtPath) : null;
  const runtimeHash = runtimeExists ? sha256(runtimePath) : null;

  const logPath = slice.validation_log_glob
    ? findLatestLog(userDataDir, slice.validation_log_glob)
    : null;
  const logText = logPath ? fs.readFileSync(logPath, 'utf8') : '';
  const requiredLogLines = slice.validation_log_contains ?? [];
  const missingLogLines = requiredLogLines.filter((line) => !logText.includes(line));
  const logContainsAll = logMode === 'hash-only' ? true : missingLogLines.length === 0;

  return {
    sliceId: slice.slice_id,
    builtPath,
    runtimePath,
    builtExists,
    runtimeExists,
    builtHash,
    runtimeHash,
    runtimeMatchesBuilt: builtExists && runtimeExists && builtHash === runtimeHash,
    logMode,
    logPath,
    logContainsAll,
    missingLogLines: logMode === 'hash-only' ? [] : missingLogLines,
  };
});

const result = {
  generatedAt: new Date().toISOString(),
  phase,
  activeProfile,
  userDataDir,
  logMode,
  passed: checks.every((entry) => entry.runtimeMatchesBuilt && entry.logContainsAll),
  checks,
};

fs.writeFileSync(RESULT_PATH, JSON.stringify(result, null, 2) + '\n');
console.log(RESULT_PATH);

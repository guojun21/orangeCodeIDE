#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { getSharedRebuiltUserDataDir } from './rebuilt-user-data.mjs';
import { getActiveProfile, sliceMatchesProfile } from './watch-rebuilt-slices.mjs';

import { ROOT } from './paths.mjs';
import { getAssemblyById, readRuntimeAssemblies } from './runtime-config.mjs';
const SLICES_PATH = path.join(ROOT, 'mapped', 'rebuilt-slices.json');
const RESULT_PATH = path.join(ROOT, 'mapped', 'rebuilt-extension-activation.json');

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

function getCursorExtensions(extensionsRoot) {
  const results = [];
  for (const entry of fs.readdirSync(extensionsRoot, { withFileTypes: true })) {
    if (!entry.isDirectory() || !entry.name.startsWith('cursor-')) {
      continue;
    }
    const packagePath = path.join(extensionsRoot, entry.name, 'package.json');
    if (!fs.existsSync(packagePath)) {
      continue;
    }
    const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
    results.push({
      dirName: entry.name,
      extensionId: `${pkg.publisher}.${pkg.name}`,
      activationEvents: pkg.activationEvents ?? [],
    });
  }
  return results.sort((left, right) => left.extensionId.localeCompare(right.extensionId));
}

const args = parseArgs(process.argv);
const userDataDir = args['user-data-dir'] ?? getSharedRebuiltUserDataDir(
  'SHOPEECODE_REBUILT_PROBE_USER_DATA_DIR',
  'SHOPEECODE_REBUILT_USER_DATA_DIR'
);
const runtimeRootArg = args['runtime-root'] ?? process.env.SHOPEECODE_REBUILT_RUNTIME_ROOT ?? null;
const activeProfile = getActiveProfile();
const previousPath = fs.existsSync(RESULT_PATH) ? RESULT_PATH : null;
const previous = previousPath ? JSON.parse(fs.readFileSync(previousPath, 'utf8')) : null;
const assemblies = readRuntimeAssemblies();
const rebuiltAssembly = getAssemblyById('rebuilt-runtime', assemblies);
const runtimeRoot = runtimeRootArg
  ? path.resolve(runtimeRootArg)
  : path.join(ROOT, rebuiltAssembly?.outputRoot ?? 'recovered/rebuilt/runtime-app');
const extensionsRoot = path.join(runtimeRoot, 'extensions');

const exthostLogPath = findLatestLog(userDataDir, 'logs/*/window*/exthost/exthost.log');
const exthostLogText = exthostLogPath ? fs.readFileSync(exthostLogPath, 'utf8') : '';

const sliceManifest = JSON.parse(fs.readFileSync(SLICES_PATH, 'utf8'));
const slicesByExtensionDir = new Map(
  sliceManifest.slices
    .filter((slice) => slice.target_runtime_bundle.startsWith('extensions/'))
    .filter((slice) => sliceMatchesProfile(slice, activeProfile))
    .map((slice) => [slice.target_runtime_bundle.split('/')[1], slice])
);
const rebuiltExtensionDirs = new Set(
  [...slicesByExtensionDir.keys()]
);

const checks = getCursorExtensions(extensionsRoot).map((extension) => {
  const slice = slicesByExtensionDir.get(extension.dirName);
  const activationAttempted = exthostLogText.includes(`ExtensionService#_doActivateExtension ${extension.extensionId}`);
  const activationSucceeded = exthostLogText.includes(`Extension activated success: ${extension.extensionId}`);
  const commandTriggered = Boolean(slice?.validation_command_palette_text);
  return {
    extensionId: extension.extensionId,
    dirName: extension.dirName,
    activationEvents: extension.activationEvents,
    rebuilt: rebuiltExtensionDirs.has(extension.dirName),
    commandTriggered,
    startupCandidate:
      extension.activationEvents.includes('*') ||
      extension.activationEvents.includes('onStartupFinished'),
    activationAttempted,
    activationSucceeded,
    observed: activationAttempted || activationSucceeded,
  };
});

const rebuiltChecks = checks.filter((entry) => entry.rebuilt);
const observedUnrebuilt = checks
  .filter((entry) => !entry.rebuilt && entry.observed)
  .map((entry) => entry.extensionId)
  .sort();
const previousObservedUnrebuilt = previous?.observedUnrebuiltExtensionIds ?? [];
const missingPreviouslyObservedUnrebuilt = previousObservedUnrebuilt.filter(
  (extensionId) =>
    !observedUnrebuilt.includes(extensionId) &&
    !rebuiltChecks.some((entry) => entry.extensionId === extensionId)
);

const result = {
  generatedAt: new Date().toISOString(),
  activeProfile,
  userDataDir,
  runtimeRoot,
  extensionsRoot,
  exthostLogPath,
  passed:
    !!exthostLogPath &&
    rebuiltChecks.every((entry) => entry.commandTriggered || entry.activationSucceeded) &&
    missingPreviouslyObservedUnrebuilt.length === 0,
  rebuiltExtensionIds: rebuiltChecks.map((entry) => entry.extensionId).sort(),
  rebuiltExtensionDirs: [...rebuiltExtensionDirs].sort(),
  observedUnrebuiltExtensionIds: observedUnrebuilt,
  missingPreviouslyObservedUnrebuilt,
  checks,
};

fs.writeFileSync(RESULT_PATH, JSON.stringify(result, null, 2) + '\n');
console.log(RESULT_PATH);

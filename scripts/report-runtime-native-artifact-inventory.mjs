#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import {
  ROOT,
  resolveRuntimeInputRoot,
} from './runtime-config-entry.mjs';

const NATIVE_RUNTIME_MANIFEST_PATH = path.join(
  ROOT,
  'mapped',
  'runtime-native-runtime-manifest.json'
);
const RESULT_PATH = path.join(
  ROOT,
  'mapped',
  'runtime-native-artifact-inventory-report.json'
);

const BINARY_EXTENSIONS = new Set(['.node', '.so', '.dylib', '.dll', '.exe']);

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function toPosix(filePath) {
  return filePath.split(path.sep).join('/');
}

function normalizeRelative(filePath) {
  return toPosix(path.relative(ROOT, filePath));
}

function walkFiles(root) {
  const results = [];
  if (!fs.existsSync(root)) {
    return results;
  }

  const stack = [root];
  while (stack.length > 0) {
    const current = stack.pop();
    const entries = fs.readdirSync(current, { withFileTypes: true });
    for (const entry of entries) {
      const absolutePath = path.join(current, entry.name);
      if (entry.isDirectory()) {
        stack.push(absolutePath);
        continue;
      }
      if (entry.isFile()) {
        results.push(absolutePath);
      }
    }
  }
  return results;
}

function isBinaryArtifact(relativePath, stats) {
  const posixPath = toPosix(relativePath);
  const extension = path.extname(posixPath).toLowerCase();
  if (BINARY_EXTENSIONS.has(extension)) {
    return true;
  }
  if (posixPath.includes('/node_modules/') && !posixPath.includes('/build/Release/')) {
    return false;
  }
  if (posixPath.includes('/build/Release/')) {
    return true;
  }
  return (stats.mode & 0o111) !== 0 && /(^|\/)(bin|build|Release)\//.test(posixPath);
}

if (!fs.existsSync(NATIVE_RUNTIME_MANIFEST_PATH)) {
  throw new Error(
    `Missing runtime native runtime manifest: ${NATIVE_RUNTIME_MANIFEST_PATH}. Run "npm run report:runtime-native-runtime-manifest" first.`
  );
}

const runtimeInputRoot = resolveRuntimeInputRoot({
  explicitRoot: process.env.ORANGECODEIDE_RUNTIME_INPUT_ROOT ?? null,
});
const manifest = readJson(NATIVE_RUNTIME_MANIFEST_PATH);

const packageInventories = (manifest.nativeRuntimePackages ?? []).map((entry) => {
  const packageRoot = path.join(runtimeInputRoot, 'node_modules', ...entry.name.split('/'));
  const packageRootExists = fs.existsSync(packageRoot);
  const configuredAddonPaths = (entry.nativeAddons ?? []).map((addon) => toPosix(addon.path));
  const configuredRuntimeArtifactPaths = [
    ...configuredAddonPaths,
    ...((entry.extraRuntimeArtifacts ?? []).map((artifact) => toPosix(artifact.path))),
  ];
  const configuredRuntimeArtifactSet = new Set(configuredRuntimeArtifactPaths);
  const allFiles = walkFiles(packageRoot);
  const binaryArtifacts = allFiles
    .map((absolutePath) => {
      const stats = fs.statSync(absolutePath);
      const relativeToRuntime = toPosix(path.relative(runtimeInputRoot, absolutePath));
      const relativeToPackage = toPosix(path.relative(packageRoot, absolutePath));
      return {
        path: relativeToRuntime,
        packageRelativePath: relativeToPackage,
        fileName: path.basename(absolutePath),
        sizeBytes: stats.size,
        executable: (stats.mode & 0o111) !== 0,
        extension: path.extname(absolutePath).toLowerCase() || null,
        isConfiguredRuntimeArtifact: configuredRuntimeArtifactSet.has(relativeToRuntime),
      };
    })
    .filter((artifact) =>
      isBinaryArtifact(
        path.join('node_modules', ...entry.name.split('/'), artifact.packageRelativePath),
        { mode: artifact.executable ? 0o755 : 0o644 }
      )
    )
    .sort((left, right) => left.path.localeCompare(right.path));

  const configuredAddons = (entry.nativeAddons ?? []).map((addon) => {
    const absolutePath = path.join(runtimeInputRoot, ...addon.path.split('/'));
    const exists = fs.existsSync(absolutePath);
    const stats = exists ? fs.statSync(absolutePath) : null;
    return {
      ...addon,
      exists,
      sizeBytes: stats?.size ?? 0,
    };
  });

  const configuredRuntimeArtifacts = [
    ...configuredAddons.map((artifact) => ({
      ...artifact,
      kind: 'native-addon',
    })),
    ...((entry.extraRuntimeArtifacts ?? []).map((artifact) => {
      const absolutePath = path.join(runtimeInputRoot, ...artifact.path.split('/'));
      const exists = fs.existsSync(absolutePath);
      const stats = exists ? fs.statSync(absolutePath) : null;
      return {
        ...artifact,
        exists,
        sizeBytes: stats?.size ?? 0,
      };
    })),
  ];

  const missingConfiguredRuntimeArtifacts = configuredRuntimeArtifacts
    .filter((artifact) => artifact.exists !== true)
    .map((artifact) => artifact.path);
  const unexpectedBinaryArtifacts = binaryArtifacts.filter(
    (artifact) => artifact.isConfiguredRuntimeArtifact !== true
  );

  return {
    name: entry.name,
    version: entry.version,
    ownerSurface: entry.ownerSurface,
    kind: entry.kind,
    notes: entry.notes,
    packageRoot: normalizeRelative(packageRoot),
    packageRootExists,
    configuredAddonCount: configuredAddons.length,
    configuredRuntimeArtifactCount: configuredRuntimeArtifacts.length,
    binaryArtifactCount: binaryArtifacts.length,
    configuredAddons,
    configuredRuntimeArtifacts,
    binaryArtifacts,
    missingConfiguredRuntimeArtifacts,
    unexpectedBinaryArtifacts,
    passed: packageRootExists && missingConfiguredRuntimeArtifacts.length === 0,
  };
});

const result = {
  generatedAt: new Date().toISOString(),
  runtimeInputRoot: normalizeRelative(runtimeInputRoot),
  sourceOfTruth: 'mapped/runtime-native-runtime-manifest.json',
  packageCount: packageInventories.length,
  configuredAddonCount: packageInventories.reduce(
    (sum, entry) => sum + entry.configuredAddonCount,
    0
  ),
  configuredRuntimeArtifactCount: packageInventories.reduce(
    (sum, entry) => sum + entry.configuredRuntimeArtifactCount,
    0
  ),
  binaryArtifactCount: packageInventories.reduce(
    (sum, entry) => sum + entry.binaryArtifactCount,
    0
  ),
  missingConfiguredRuntimeArtifactCount: packageInventories.reduce(
    (sum, entry) => sum + entry.missingConfiguredRuntimeArtifacts.length,
    0
  ),
  packagesWithUnexpectedArtifacts: packageInventories
    .filter((entry) => entry.unexpectedBinaryArtifacts.length > 0)
    .map((entry) => ({
      name: entry.name,
      unexpectedBinaryArtifactCount: entry.unexpectedBinaryArtifacts.length,
      artifacts: entry.unexpectedBinaryArtifacts.map((artifact) => artifact.path),
    })),
  packageInventories,
  passed: packageInventories.every((entry) => entry.passed === true),
};

fs.mkdirSync(path.dirname(RESULT_PATH), { recursive: true });
fs.writeFileSync(RESULT_PATH, JSON.stringify(result, null, 2) + '\n');
console.log(RESULT_PATH);

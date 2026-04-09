#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

import { ROOT } from './paths.mjs';
import { acquireDirectoryLock, releaseDirectoryLock } from './directory-lock.mjs';
import {
  getAssemblyById,
  getRequiredRuntimeItems,
  materializeTemplate,
  readRuntimeAssemblies,
  readRuntimeCliLauncherTemplate,
  readRuntimeProductTemplateConfig,
  readRuntimeTunnelLauncherTemplate,
  resolveRuntimeInputRoot,
} from './runtime-config.mjs';
const ASSEMBLY_LOCK_PATH = path.join(ROOT, '.runtime-assembly.lock');
const RUNTIME_RESOURCE_ASSETS_ROOT = path.join(ROOT, 'config', 'runtime', 'assets', 'darwin');
const GENERATED_RESOURCE_ASSET_FILES = [
  'resources/darwin/trayNotifyWhite.png',
  'resources/darwin/trayNotifyWhite@2x.png',
  'resources/darwin/trayTemplate.png',
  'resources/darwin/trayTemplate@2x.png',
];
const GENERATED_RESOURCE_HELPER_FILES = [
  'resources/helpers/crepectl',
  'resources/helpers/cursor-terminal-wrapper',
  'resources/helpers/cursorsandbox',
  'resources/helpers/node',
];

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

function copyFile(relativePath, sourceRoot, outputRoot) {
  const sourcePath = path.join(sourceRoot, relativePath);
  const outputPath = path.join(outputRoot, relativePath);
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.copyFileSync(sourcePath, outputPath);
}

function copyTree(sourceRoot, outputRoot) {
  if (!fs.existsSync(sourceRoot)) {
    throw new Error(`Override root does not exist: ${sourceRoot}`);
  }
  fs.cpSync(sourceRoot, outputRoot, { recursive: true, force: true });
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJson(filePath, payload) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(payload, null, 2) + '\n');
}

function writeExecutableFile(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content);
  fs.chmodSync(filePath, 0o755);
}

function createExternalRuntimeBinaryLauncher({
  runtimeInputRoot,
  relativePath,
  label,
} = {}) {
  const stagedBinaryPath = path.join(runtimeInputRoot, relativePath);
  return `#!/usr/bin/env bash
set -euo pipefail

TARGET=""

if [[ -n "\${ORANGECODEIDE_RUNTIME_INPUT_ROOT:-}" ]]; then
  TARGET="\${ORANGECODEIDE_RUNTIME_INPUT_ROOT}/${relativePath}"
fi

if [[ -z "\${TARGET}" ]]; then
  TARGET="${stagedBinaryPath}"
fi

if [[ ! -x "\${TARGET}" ]]; then
  echo "Error: ${label} runtime binary not found: \${TARGET}" 1>&2
  echo "Hint: run 'npm run bootstrap:runtime -- --force' to refresh the staged runtime dependency." 1>&2
  exit 1
fi

exec "\${TARGET}" "$@"
`;
}

function generateProductConfig(runtimeInputRoot, outputRoot) {
  const template = readRuntimeProductTemplateConfig();
  const seedPath = path.join(runtimeInputRoot, template.seedRelativePath ?? 'product.json');
  if (!fs.existsSync(seedPath)) {
    throw new Error(`Missing runtime product seed: ${seedPath}`);
  }
  const seed = readJson(seedPath);
  const variables = { ...(template.variables ?? {}) };
  const output = { ...seed };

  for (const [key, value] of Object.entries(template.set ?? {})) {
    output[key] = typeof value === 'string' ? materializeTemplate(value, variables) : value;
  }

  for (const key of template.delete ?? []) {
    delete output[key];
  }

  writeJson(path.join(outputRoot, 'product.json'), output);
}

function generateCliLaunchers(outputRoot) {
  const template = readRuntimeCliLauncherTemplate();
  for (const relativePath of ['bin/code', 'bin/cursor']) {
    writeExecutableFile(path.join(outputRoot, relativePath), template);
  }
}

function generateTunnelLaunchers(runtimeInputRoot, outputRoot) {
  const binRoot = path.join(outputRoot, 'bin');
  const codeTunnelPath = path.join(binRoot, 'code-tunnel');
  const cursorTunnelPath = path.join(binRoot, 'cursor-tunnel');
  const stagedCursorTunnelPath = path.join(runtimeInputRoot, 'bin', 'cursor-tunnel');
  if (!fs.existsSync(stagedCursorTunnelPath)) {
    throw new Error(`Missing staged cursor-tunnel binary: ${stagedCursorTunnelPath}`);
  }

  const template = readRuntimeTunnelLauncherTemplate().replace(
    '__CURSOR_TUNNEL_BINARY__',
    stagedCursorTunnelPath
  );

  fs.rmSync(cursorTunnelPath, { force: true });
  writeExecutableFile(cursorTunnelPath, template);
  fs.rmSync(codeTunnelPath, { force: true });
  fs.symlinkSync('cursor-tunnel', codeTunnelPath);
}

function copyRepoResourceAssets(outputRoot) {
  for (const relativePath of GENERATED_RESOURCE_ASSET_FILES) {
    const sourcePath = path.join(RUNTIME_RESOURCE_ASSETS_ROOT, path.basename(relativePath));
    if (!fs.existsSync(sourcePath)) {
      throw new Error(`Missing repo resource asset: ${sourcePath}`);
    }
    const outputPath = path.join(outputRoot, relativePath);
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.copyFileSync(sourcePath, outputPath);
  }
}

function generateResourceHelperLaunchers(runtimeInputRoot, outputRoot) {
  for (const relativePath of GENERATED_RESOURCE_HELPER_FILES) {
    const outputPath = path.join(outputRoot, relativePath);
    fs.rmSync(outputPath, { force: true });
    writeExecutableFile(outputPath, createExternalRuntimeBinaryLauncher({
      runtimeInputRoot,
      relativePath,
      label: relativePath,
    }));
  }
}

function copyGeneratedRuntimeAssets(runtimeInputRoot, outputRoot) {
  const sourcePackageJson = path.join(ROOT, 'package.json');
  const targetPackageJson = path.join(outputRoot, 'package.json');
  fs.copyFileSync(sourcePackageJson, targetPackageJson);
  generateProductConfig(runtimeInputRoot, outputRoot);
  generateCliLaunchers(outputRoot);
  generateTunnelLaunchers(runtimeInputRoot, outputRoot);
  copyRepoResourceAssets(outputRoot);
  generateResourceHelperLaunchers(runtimeInputRoot, outputRoot);
  return [
    'package.json',
    'product.json',
    'bin/code',
    'bin/cursor',
    'bin/code-tunnel',
    'bin/cursor-tunnel',
    ...GENERATED_RESOURCE_ASSET_FILES,
    ...GENERATED_RESOURCE_HELPER_FILES,
  ];
}

function copyRequiredRuntimeItems(sourceRoot, outputRoot, relativePaths) {
  for (const relativePath of relativePaths) {
    const sourcePath = path.join(sourceRoot, relativePath);
    const outputPath = path.join(outputRoot, relativePath);
    if (!fs.existsSync(sourcePath)) {
      throw new Error(`Missing runtime input item: ${sourcePath}`);
    }
    const stat = fs.statSync(sourcePath);
    if (stat.isDirectory()) {
      fs.cpSync(sourcePath, outputPath, { recursive: true, force: true, dereference: true });
    } else {
      fs.mkdirSync(path.dirname(outputPath), { recursive: true });
      fs.copyFileSync(sourcePath, outputPath);
    }
  }
}

function removeTree(targetPath) {
  fs.rmSync(targetPath, {
    recursive: true,
    force: true,
    maxRetries: 20,
    retryDelay: 100,
  });
}

const args = parseArgs(process.argv);
const assemblyId = args.assembly;
const explicitRuntimeInputRoot = args['runtime-input-root'] ?? process.env.ORANGECODEIDE_RUNTIME_INPUT_ROOT ?? null;

if (!assemblyId) {
  throw new Error('Usage: assemble-runtime-from-slices.mjs --assembly <assembly-id>');
}

const manifest = readRuntimeAssemblies({ runtimeInputRoot: explicitRuntimeInputRoot });
const baseline = manifest.baseline;
const assembly = getAssemblyById(assemblyId, manifest);

if (!assembly) {
  throw new Error(`Unknown assembly: ${assemblyId}`);
}

const runtimeInputRoot = resolveRuntimeInputRoot({ explicitRoot: explicitRuntimeInputRoot });
const outputRoot = path.join(ROOT, assembly.outputRoot);
const phase2OverlayRoot = path.join(ROOT, baseline.phase2OverlayRoot);
const requiredRuntimeItems = getRequiredRuntimeItems();

await acquireDirectoryLock(ASSEMBLY_LOCK_PATH, {
  label: 'assembly lock',
});

try {
  removeTree(outputRoot);
  fs.mkdirSync(outputRoot, { recursive: true });

  copyRequiredRuntimeItems(runtimeInputRoot, outputRoot, requiredRuntimeItems);
  const generatedRuntimeAssets = copyGeneratedRuntimeAssets(runtimeInputRoot, outputRoot);
  const generatedTopLevelItems = Array.from(
    new Set(
      generatedRuntimeAssets
        .map((entry) => entry.split('/')[0])
        .filter(Boolean)
    )
  );

  for (const relativePath of baseline.phase2OverlayFiles) {
    copyFile(relativePath, phase2OverlayRoot, outputRoot);
  }

  for (const overrideRoot of assembly.overrideRoots) {
    copyTree(path.join(ROOT, overrideRoot), outputRoot);
  }

  const assemblyManifest = {
    generatedAt: new Date().toISOString(),
    sourceOfTruth: 'config/runtime/assemblies.json',
    assemblyId: assembly.assemblyId,
    phase: assembly.phase,
    outputRoot,
    runtimeInputRoot,
    runtimeInputMode: 'external-runtime-input',
    copiedRuntimeItems: requiredRuntimeItems,
    generatedRuntimeAssets,
    generatedTopLevelItems,
    phase2OverlayRoot,
    copiedBaseOverlayFiles: baseline.phase2OverlayFiles,
    overrideRoots: assembly.overrideRoots.map((entry) => path.join(ROOT, entry)),
  };
  const assemblyManifestPath = path.join(
    ROOT,
    'mapped',
    `${assembly.phase}-runtime-assembly-manifest.json`
  );
  fs.writeFileSync(assemblyManifestPath, JSON.stringify(assemblyManifest, null, 2) + '\n');
} finally {
  releaseDirectoryLock(ASSEMBLY_LOCK_PATH);
}

console.log(outputRoot);

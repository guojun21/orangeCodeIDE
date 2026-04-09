#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import {
  getAssemblyById,
  readRuntimeAssemblies,
  readRuntimeHostAssetsModelConfig,
  resolveRuntimeInputRoot,
  ROOT,
} from './runtime-config-entry.mjs';
import { getActiveProfile, loadSliceManifest, sliceMatchesProfile } from './watch-rebuilt-slices.mjs';

const RESULT_PATH = path.join(ROOT, 'mapped', 'runtime-external-dependencies-report.json');

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

function normalizeRelative(filePath, basePath = ROOT) {
  return path.relative(basePath, filePath).split(path.sep).join('/');
}

function walkFiles(rootDir) {
  if (!fs.existsSync(rootDir)) {
    return [];
  }
  const files = [];
  for (const entry of fs.readdirSync(rootDir, { withFileTypes: true })) {
    const absolutePath = path.join(rootDir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkFiles(absolutePath));
      continue;
    }
    files.push(absolutePath);
  }
  return files;
}

function readJsonIfExists(filePath) {
  if (!fs.existsSync(filePath)) {
    return null;
  }
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function pickFirstPackageSegments(parts) {
  if (parts[0]?.startsWith('@') && parts.length >= 2) {
    return parts.slice(0, 2);
  }
  return parts.slice(0, 1);
}

function summarizeNodeModules(nodeModulesRoot) {
  const packageStats = new Map();
  const nativeAddons = [];
  const files = walkFiles(nodeModulesRoot);

  for (const filePath of files) {
    const relativePath = normalizeRelative(filePath, nodeModulesRoot);
    const parts = relativePath.split('/');
    const packageSegments = pickFirstPackageSegments(parts);
    if (packageSegments.length === 0) {
      continue;
    }
    const packageName = packageSegments.join('/');
    const packageDir = packageSegments.join('/');
    if (!packageStats.has(packageName)) {
      packageStats.set(packageName, {
        name: packageName,
        packageDir,
        fileCount: 0,
        nativeAddonPaths: [],
      });
    }
    const entry = packageStats.get(packageName);
    entry.fileCount += 1;
    if (filePath.endsWith('.node')) {
      const addon = {
        package: packageName,
        path: `node_modules/${relativePath}`,
        fileName: path.basename(filePath),
      };
      entry.nativeAddonPaths.push(addon.path);
      nativeAddons.push(addon);
    }
  }

  const packages = Array.from(packageStats.values())
    .map((entry) => {
      const packageJson = readJsonIfExists(path.join(nodeModulesRoot, entry.packageDir, 'package.json'));
      return {
        name: entry.name,
        version: packageJson?.version ?? null,
        fileCount: entry.fileCount,
        hasNativeAddon: entry.nativeAddonPaths.length > 0,
        nativeAddonCount: entry.nativeAddonPaths.length,
      };
    })
    .sort((left, right) => {
      if (right.fileCount !== left.fileCount) {
        return right.fileCount - left.fileCount;
      }
      return left.name.localeCompare(right.name);
    });

  const nativePackages = packages.filter((entry) => entry.hasNativeAddon);

  return {
    exists: fs.existsSync(nodeModulesRoot),
    packageCount: packages.length,
    fileCount: files.length,
    jsOnlyPackageCount: packages.length - nativePackages.length,
    nativePackageCount: nativePackages.length,
    nativeAddonCount: nativeAddons.length,
    topPackagesByFileCount: packages.slice(0, 25),
    nativePackages,
    nativeAddons,
    packages,
  };
}

function summarizeNodeModulesAsar(asarPath) {
  if (!fs.existsSync(asarPath)) {
    return {
      exists: false,
      sizeBytes: 0,
    };
  }
  const stats = fs.statSync(asarPath);
  return {
    exists: true,
    path: normalizeRelative(asarPath),
    sizeBytes: stats.size,
  };
}

function deriveExtensionId(packageJson, fallbackName) {
  if (packageJson?.publisher && packageJson?.name) {
    return `${packageJson.publisher}.${packageJson.name}`;
  }
  if (packageJson?.name) {
    return packageJson.name;
  }
  return fallbackName;
}

function summarizeExtensions(extensionsRoot, generatedExtensionDirs) {
  if (!fs.existsSync(extensionsRoot)) {
    return {
      exists: false,
      totalTopLevelDirCount: 0,
      extensionPackageDirCount: 0,
      supportDirCount: 0,
      generatedExtensionDirCount: 0,
      externalExtensionDirCount: 0,
      generatedExtensions: [],
      externalExtensions: [],
      supportDirectories: [],
    };
  }

  const directoryEntries = fs.readdirSync(extensionsRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => {
      const dirPath = path.join(extensionsRoot, entry.name);
      const files = walkFiles(dirPath);
      const packageJson = readJsonIfExists(path.join(dirPath, 'package.json'));
      return {
        dirName: entry.name,
        hasPackageJson: packageJson !== null,
        extensionId: deriveExtensionId(packageJson, entry.name),
        version: packageJson?.version ?? null,
        fileCount: files.length,
        generated: generatedExtensionDirs.has(entry.name),
      };
    })
    .sort((left, right) => {
      if (right.fileCount !== left.fileCount) {
        return right.fileCount - left.fileCount;
      }
      return left.dirName.localeCompare(right.dirName);
    });

  const extensionEntries = directoryEntries.filter((entry) => entry.hasPackageJson);
  const supportDirectories = directoryEntries.filter((entry) => !entry.hasPackageJson);
  const generatedExtensions = extensionEntries.filter((entry) => entry.generated);
  const externalExtensions = extensionEntries.filter((entry) => !entry.generated);

  return {
    exists: true,
    totalTopLevelDirCount: directoryEntries.length,
    extensionPackageDirCount: extensionEntries.length,
    supportDirCount: supportDirectories.length,
    generatedExtensionDirCount: generatedExtensions.length,
    externalExtensionDirCount: externalExtensions.length,
    generatedExtensions,
    externalExtensions,
    topExternalExtensionsByFileCount: externalExtensions.slice(0, 25),
    supportDirectories: supportDirectories.map((entry) => ({
      dirName: entry.dirName,
      fileCount: entry.fileCount,
    })),
  };
}

function summarizeFilesByFirstSegment(rootDir, prefix) {
  const files = walkFiles(rootDir).map((filePath) => normalizeRelative(filePath, rootDir));
  const groups = new Map();

  for (const relativePath of files) {
    const key = relativePath.includes('/') ? relativePath.split('/')[0] : '.';
    if (!groups.has(key)) {
      groups.set(key, []);
    }
    groups.get(key).push(relativePath);
  }

  const categories = Array.from(groups.entries())
    .map(([name, members]) => ({
      name,
      count: members.length,
      sample: members.slice(0, 20).map((member) => `${prefix}/${member}`),
    }))
    .sort((left, right) => right.count - left.count);

  return {
    exists: fs.existsSync(rootDir),
    fileCount: files.length,
    files: files.map((relativePath) => `${prefix}/${relativePath}`),
    categories,
  };
}

function summarizeBin(binRoot) {
  const base = summarizeFilesByFirstSegment(binRoot, 'bin');
  if (!base.exists) {
    return base;
  }

  const hostAssetsModel = readRuntimeHostAssetsModelConfig();
  const binKinds = new Map();
  for (const section of Object.values(hostAssetsModel.bin ?? {})) {
    for (const filePath of section.files ?? []) {
      binKinds.set(filePath, section.kind ?? null);
    }
  }

  const files = base.files.map((relativePath) => {
    const absolutePath = path.join(ROOT, relativePath);
    const stats = fs.statSync(absolutePath);
    const linkStats = fs.lstatSync(absolutePath);
    const kind = binKinds.get(relativePath) ?? null;
    return {
      path: relativePath,
      sizeBytes: stats.size,
      executable: (stats.mode & 0o111) !== 0,
      symlink: linkStats.isSymbolicLink(),
      symlinkTarget: linkStats.isSymbolicLink() ? fs.readlinkSync(absolutePath) : null,
      kind,
      generated: kind === 'generated-launcher',
      external: kind !== 'generated-launcher',
    };
  });

  return {
    ...base,
    generatedFileCount: files.filter((entry) => entry.generated).length,
    externalFileCount: files.filter((entry) => entry.external).length,
    files,
  };
}

function summarizeProduct(productPath) {
  if (!fs.existsSync(productPath)) {
    return {
      exists: false,
    };
  }

  const product = JSON.parse(fs.readFileSync(productPath, 'utf8'));
  return {
    exists: true,
    path: normalizeRelative(productPath),
    branding: {
      nameShort: product.nameShort ?? null,
      nameLong: product.nameLong ?? null,
      applicationName: product.applicationName ?? null,
      dataFolderName: product.dataFolderName ?? null,
      darwinBundleIdentifier: product.darwinBundleIdentifier ?? null,
      linuxIconName: product.linuxIconName ?? null,
      win32AppUserModelId: product.win32AppUserModelId ?? null,
    },
    serviceEndpoints: {
      licenseUrl: product.licenseUrl ?? null,
      updateUrl: product.updateUrl ?? null,
      documentationUrl: product.documentationUrl ?? null,
      extensionsGallery: product.extensionsGallery
        ? {
            serviceUrl: product.extensionsGallery.serviceUrl ?? null,
            itemUrl: product.extensionsGallery.itemUrl ?? null,
            resourceUrlTemplate: product.extensionsGallery.resourceUrlTemplate ?? null,
            controlUrl: product.extensionsGallery.controlUrl ?? null,
          }
        : null,
    },
    featureFlags: {
      builtInExtensionsCount: Array.isArray(product.builtInExtensions) ? product.builtInExtensions.length : 0,
      trustedExtensionAuthAccessCount: product.trustedExtensionAuthAccess
        ? Object.keys(product.trustedExtensionAuthAccess).length
        : 0,
      extensionSyncedKeysCount: product.extensionSyncedKeys
        ? Object.keys(product.extensionSyncedKeys).length
        : 0,
      hasDefaultChatAgent: Boolean(product.defaultChatAgent),
    },
  };
}

const args = parseArgs(process.argv);
const assemblyId = args.assembly ?? 'rebuilt-runtime';
const runtimeInputRoot = resolveRuntimeInputRoot({
  explicitRoot: args['runtime-input-root'] ?? process.env.ORANGECODEIDE_RUNTIME_INPUT_ROOT ?? null,
});
const assemblies = readRuntimeAssemblies({ runtimeInputRoot });
const assembly = getAssemblyById(assemblyId, assemblies);

if (!assembly) {
  throw new Error(`Unknown assembly: ${assemblyId}`);
}

const runtimeRoot = path.join(ROOT, assembly.outputRoot);
const activeProfile = getActiveProfile();
const sliceManifest = loadSliceManifest();
const activeSlices = sliceManifest.slices.filter((slice) => sliceMatchesProfile(slice, activeProfile));
const generatedExtensionDirs = new Set(
  activeSlices
    .filter((slice) => slice.target_runtime_bundle.startsWith('extensions/'))
    .map((slice) => slice.target_runtime_bundle.split('/')[1])
    .filter(Boolean)
);

const nodeModulesRoot = path.join(runtimeRoot, 'node_modules');
const extensionsRoot = path.join(runtimeRoot, 'extensions');
const resourcesRoot = path.join(runtimeRoot, 'resources');
const binRoot = path.join(runtimeRoot, 'bin');
const policiesRoot = path.join(runtimeRoot, 'policies');
const productPath = path.join(runtimeRoot, 'product.json');
const nodeModulesAsarPath = path.join(runtimeRoot, 'node_modules.asar');

const result = {
  generatedAt: new Date().toISOString(),
  assemblyId,
  activeProfile,
  runtimeInputRoot: normalizeRelative(runtimeInputRoot),
  outputRoot: normalizeRelative(runtimeRoot),
  nodeModules: summarizeNodeModules(nodeModulesRoot),
  nodeModulesAsar: summarizeNodeModulesAsar(nodeModulesAsarPath),
  extensions: summarizeExtensions(extensionsRoot, generatedExtensionDirs),
  resources: summarizeFilesByFirstSegment(resourcesRoot, 'resources'),
  bin: summarizeBin(binRoot),
  policies: summarizeFilesByFirstSegment(policiesRoot, 'policies'),
  product: summarizeProduct(productPath),
  passed: fs.existsSync(runtimeRoot),
};

fs.mkdirSync(path.dirname(RESULT_PATH), { recursive: true });
fs.writeFileSync(RESULT_PATH, JSON.stringify(result, null, 2) + '\n');
console.log(RESULT_PATH);

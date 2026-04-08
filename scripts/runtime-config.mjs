#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { ROOT } from './paths.mjs';

export { ROOT };

export const RUNTIME_CONFIG_ROOT = path.join(ROOT, 'config', 'runtime');
export const RUNTIME_DEPENDENCIES_CONFIG_PATH = path.join(RUNTIME_CONFIG_ROOT, 'dependencies.json');
export const RUNTIME_ASSEMBLIES_CONFIG_PATH = path.join(RUNTIME_CONFIG_ROOT, 'assemblies.json');
export const RUNTIME_OWNERSHIP_CONFIG_PATH = path.join(RUNTIME_CONFIG_ROOT, 'ownership.json');
export const RUNTIME_NODE_MODULES_MODEL_CONFIG_PATH = path.join(
  RUNTIME_CONFIG_ROOT,
  'node-modules-model.json'
);
export const RUNTIME_HOST_ASSETS_MODEL_CONFIG_PATH = path.join(
  RUNTIME_CONFIG_ROOT,
  'host-assets-model.json'
);
export const RUNTIME_PACKAGE_MANAGER_RESOLUTION_CONFIG_PATH = path.join(
  RUNTIME_CONFIG_ROOT,
  'package-manager-resolution.json'
);
export const RUNTIME_PRODUCT_TEMPLATE_CONFIG_PATH = path.join(
  RUNTIME_CONFIG_ROOT,
  'product-template.json'
);
export const RUNTIME_ASSEMBLIES_REPORT_PATH = path.join(ROOT, 'mapped', 'runtime-assemblies.json');
export const RUNTIME_BOOTSTRAP_MANIFEST_PATH = path.join(ROOT, 'mapped', 'bootstrap-runtime-baseline.json');

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJson(filePath, payload) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(payload, null, 2) + '\n');
}

export function materializeTemplate(template, vars = {}) {
  return String(template).replace(/\{([^}]+)\}/g, (_, key) => {
    if (!(key in vars)) {
      throw new Error(`Missing template variable: ${key}`);
    }
    return String(vars[key]);
  });
}

export function readRuntimeDependencies() {
  return readJson(RUNTIME_DEPENDENCIES_CONFIG_PATH);
}

export function readRuntimeAssembliesConfig() {
  return readJson(RUNTIME_ASSEMBLIES_CONFIG_PATH);
}

export function readRuntimeOwnershipConfig() {
  return readJson(RUNTIME_OWNERSHIP_CONFIG_PATH);
}

export function readRuntimeNodeModulesModelConfig() {
  return readJson(RUNTIME_NODE_MODULES_MODEL_CONFIG_PATH);
}

export function readRuntimeHostAssetsModelConfig() {
  return readJson(RUNTIME_HOST_ASSETS_MODEL_CONFIG_PATH);
}

export function readRuntimePackageManagerResolutionConfig() {
  return readJson(RUNTIME_PACKAGE_MANAGER_RESOLUTION_CONFIG_PATH);
}

export function readRuntimeProductTemplateConfig() {
  return readJson(RUNTIME_PRODUCT_TEMPLATE_CONFIG_PATH);
}

export function readBootstrapRuntimeManifest() {
  if (!fs.existsSync(RUNTIME_BOOTSTRAP_MANIFEST_PATH)) {
    return null;
  }
  return readJson(RUNTIME_BOOTSTRAP_MANIFEST_PATH);
}

export function getRequiredRuntimeItems() {
  return readRuntimeDependencies().runtime.requiredRuntimeItems;
}

export function readPackageVersion() {
  const packageJsonPath = path.join(ROOT, 'package.json');
  const packageJson = readJson(packageJsonPath);
  return packageJson.version;
}

export function resolveDefaultCursorRelease(explicitValue = null) {
  if (explicitValue) {
    return explicitValue;
  }
  const version = readPackageVersion();
  const [major, minor] = String(version).split('.');
  if (!major || !minor) {
    throw new Error(`Unable to derive Cursor release series from package version: ${version}`);
  }
  return `${major}.${minor}`;
}

export function getStagedRuntimeRoot(cursorRelease) {
  const dependencies = readRuntimeDependencies();
  const release = resolveDefaultCursorRelease(cursorRelease);
  return path.join(
    ROOT,
    materializeTemplate(dependencies.runtime.cursorDistribution.stagedRuntimeRootTemplate, {
      cursorRelease: release,
    })
  );
}

export function resolveRuntimeInputRoot({ explicitRoot = null, cursorRelease = null } = {}) {
  if (explicitRoot) {
    return fs.realpathSync(explicitRoot);
  }

  const bootstrapManifest = readBootstrapRuntimeManifest();
  if (bootstrapManifest?.stagedRuntimeRoot && fs.existsSync(bootstrapManifest.stagedRuntimeRoot)) {
    return fs.realpathSync(bootstrapManifest.stagedRuntimeRoot);
  }

  const fallbackRoot = getStagedRuntimeRoot(
    cursorRelease ?? bootstrapManifest?.cursorRelease ?? null
  );
  if (!fs.existsSync(fallbackRoot)) {
    throw new Error(
      `Runtime input root not found: ${fallbackRoot}. Run "npm run bootstrap:runtime -- --force" first.`
    );
  }
  return fs.realpathSync(fallbackRoot);
}

export function syncRuntimeAssembliesReport({
  cursorRelease = null,
  runtimeInputRoot = null,
} = {}) {
  const config = readRuntimeAssembliesConfig();
  const release = resolveDefaultCursorRelease(cursorRelease);
  const sourceRoot = runtimeInputRoot ?? path.join(
    ROOT,
    materializeTemplate(config.baseline.runtimeInputRootTemplate, { cursorRelease: release })
  );
  const report = {
    generatedAt: new Date().toISOString(),
    sourceOfTruth: path.relative(ROOT, RUNTIME_ASSEMBLIES_CONFIG_PATH).split(path.sep).join('/'),
    baseline: {
      runtime_dependency_id: config.baseline.runtimeDependencyId,
      runtime_input_root_template: config.baseline.runtimeInputRootTemplate,
      runtime_root: path.relative(ROOT, sourceRoot).split(path.sep).join('/'),
      phase2_overlay_root: config.baseline.phase2OverlayRoot,
      phase2_overlay_files: config.baseline.phase2OverlayFiles,
    },
    assemblies: config.assemblies.map((assembly) => ({
      assembly_id: assembly.assemblyId,
      phase: assembly.phase,
      output_root: assembly.outputRoot,
      override_roots: assembly.overrideRoots,
      status: assembly.status,
    })),
  };
  writeJson(RUNTIME_ASSEMBLIES_REPORT_PATH, report);
  return report;
}

export function readRuntimeAssemblies({
  cursorRelease = null,
  runtimeInputRoot = null,
} = {}) {
  syncRuntimeAssembliesReport({ cursorRelease, runtimeInputRoot });
  return readRuntimeAssembliesConfig();
}

export function getAssemblyById(assemblyId, config = readRuntimeAssembliesConfig()) {
  return config.assemblies.find((entry) => entry.assemblyId === assemblyId) ?? null;
}

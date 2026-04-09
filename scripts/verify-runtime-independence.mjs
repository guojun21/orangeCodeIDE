#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import {
  getAssemblyById,
  readRuntimeAssemblies,
  readRuntimeOwnershipConfig,
  resolveRuntimeInputRoot,
  ROOT,
} from './runtime-config-entry.mjs';

const ORIGIN_REPORT_PATH = path.join(ROOT, 'mapped', 'runtime-origin-report.json');
const OWNERSHIP_REPORT_PATH = path.join(ROOT, 'mapped', 'runtime-ownership-report.json');
const BOUNDARY_REPORT_PATH = path.join(ROOT, 'mapped', 'runtime-boundary-check.json');
const RESIDUALS_REPORT_PATH = path.join(ROOT, 'mapped', 'runtime-residuals-report.json');
const EXTERNAL_DEPENDENCIES_REPORT_PATH = path.join(
  ROOT,
  'mapped',
  'runtime-external-dependencies-report.json'
);
const NODE_MODULES_MODEL_REPORT_PATH = path.join(
  ROOT,
  'mapped',
  'runtime-node-modules-model-report.json'
);
const HOST_ASSETS_MODEL_REPORT_PATH = path.join(
  ROOT,
  'mapped',
  'runtime-host-assets-model-report.json'
);
const PACKAGE_MANAGER_MANIFEST_PATH = path.join(
  ROOT,
  'mapped',
  'runtime-package-manager-manifest.json'
);
const PACKAGE_MANAGER_RESOLUTION_PATH = path.join(
  ROOT,
  'mapped',
  'runtime-package-manager-resolution-report.json'
);
const PACKAGE_MANAGER_INSTALL_PATH = path.join(
  ROOT,
  'mapped',
  'runtime-package-manager-install-report.json'
);
const NATIVE_RUNTIME_MANIFEST_PATH = path.join(
  ROOT,
  'mapped',
  'runtime-native-runtime-manifest.json'
);
const NATIVE_ARTIFACT_INVENTORY_PATH = path.join(
  ROOT,
  'mapped',
  'runtime-native-artifact-inventory-report.json'
);
const NATIVE_DISTRIBUTION_PLAN_PATH = path.join(
  ROOT,
  'mapped',
  'runtime-native-distribution-plan.json'
);
const NODE_MODULES_DEBASELINE_PLAN_PATH = path.join(
  ROOT,
  'mapped',
  'runtime-node-modules-debaseline-plan.json'
);
const RESULT_PATH = path.join(ROOT, 'mapped', 'runtime-independence-report.json');

function readJsonIfExists(filePath) {
  if (!fs.existsSync(filePath)) {
    return null;
  }
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function normalizeRelative(filePath) {
  return path.relative(ROOT, filePath).split(path.sep).join('/');
}

const runtimeInputRoot = resolveRuntimeInputRoot({
  explicitRoot: process.env.ORANGECODEIDE_RUNTIME_INPUT_ROOT ?? null,
});
const assemblies = readRuntimeAssemblies({ runtimeInputRoot });
const rebuiltAssembly = getAssemblyById('rebuilt-runtime', assemblies);
const ownership = readRuntimeOwnershipConfig();
const originReport = readJsonIfExists(ORIGIN_REPORT_PATH);
const ownershipReport = readJsonIfExists(OWNERSHIP_REPORT_PATH);
const boundaryReport = readJsonIfExists(BOUNDARY_REPORT_PATH);
const residualsReport = readJsonIfExists(RESIDUALS_REPORT_PATH);
const externalDependenciesReport = readJsonIfExists(EXTERNAL_DEPENDENCIES_REPORT_PATH);
const nodeModulesModelReport = readJsonIfExists(NODE_MODULES_MODEL_REPORT_PATH);
const hostAssetsModelReport = readJsonIfExists(HOST_ASSETS_MODEL_REPORT_PATH);
const packageManagerManifest = readJsonIfExists(PACKAGE_MANAGER_MANIFEST_PATH);
const packageManagerResolution = readJsonIfExists(PACKAGE_MANAGER_RESOLUTION_PATH);
const packageManagerInstall = readJsonIfExists(PACKAGE_MANAGER_INSTALL_PATH);
const nativeRuntimeManifest = readJsonIfExists(NATIVE_RUNTIME_MANIFEST_PATH);
const nativeArtifactInventory = readJsonIfExists(NATIVE_ARTIFACT_INVENTORY_PATH);
const nativeDistributionPlan = readJsonIfExists(NATIVE_DISTRIBUTION_PLAN_PATH);
const nodeModulesDebaselinePlan = readJsonIfExists(NODE_MODULES_DEBASELINE_PLAN_PATH);

if (!rebuiltAssembly) {
  throw new Error('Missing rebuilt-runtime assembly');
}

const residualExternalItems = Object.entries(ownership.topLevel)
  .filter(([, entry]) => entry.kind !== 'generated')
  .map(([name, entry]) => ({
    path: name,
    kind: entry.kind,
    notes: entry.notes,
    runtimeOrigin: originReport?.topLevelOrigins?.find((origin) => origin.path === name)?.source ?? null,
  }));

const topLevelSummary = Object.entries(ownership.topLevel).map(([name, entry]) => ({
  path: name,
  ownershipKind: entry.kind,
  runtimeOrigin: originReport?.topLevelOrigins?.find((origin) => origin.path === name)?.source ?? null,
}));

const result = {
  generatedAt: new Date().toISOString(),
  assemblyId: rebuiltAssembly.assemblyId,
  runtimeInputRoot: normalizeRelative(runtimeInputRoot),
  outputRoot: rebuiltAssembly.outputRoot,
  boundaryPassed: boundaryReport?.passed === true,
  sourceOfTruth: {
    assemblies: 'config/runtime/assemblies.json',
    ownership: 'config/runtime/ownership.json',
    nodeModulesModel: 'config/runtime/node-modules-model.json',
    hostAssetsModel: 'config/runtime/host-assets-model.json',
    packageManagerResolution: 'config/runtime/package-manager-resolution.json',
  },
  externalDependencyInventory: externalDependenciesReport
    ? {
        nodeModules: {
          packageCount: externalDependenciesReport.nodeModules?.packageCount ?? 0,
          nativePackageCount: externalDependenciesReport.nodeModules?.nativePackageCount ?? 0,
          nativeAddonCount: externalDependenciesReport.nodeModules?.nativeAddonCount ?? 0,
        },
        extensions: {
          generatedExtensionDirCount:
            externalDependenciesReport.extensions?.generatedExtensionDirCount ?? 0,
          externalExtensionDirCount:
            externalDependenciesReport.extensions?.externalExtensionDirCount ?? 0,
        },
        resources: {
          fileCount: externalDependenciesReport.resources?.fileCount ?? 0,
        },
        bin: {
          fileCount: externalDependenciesReport.bin?.fileCount ?? 0,
        },
        policies: {
          fileCount: externalDependenciesReport.policies?.fileCount ?? 0,
        },
        product: {
          exists: externalDependenciesReport.product?.exists === true,
        },
        nodeModulesAsar: {
          exists: externalDependenciesReport.nodeModulesAsar?.exists === true,
          sizeBytes: externalDependenciesReport.nodeModulesAsar?.sizeBytes ?? 0,
        },
      }
    : null,
  nodeModulesModel: nodeModulesModelReport
    ? {
        packageCount: nodeModulesModelReport.counts?.packageCount ?? 0,
        jsInstallablePackageCount: nodeModulesModelReport.counts?.jsInstallablePackageCount ?? 0,
        nativeRuntimePackageCount: nodeModulesModelReport.counts?.nativeRuntimePackageCount ?? 0,
        nativeAddonCount: nodeModulesModelReport.counts?.nativeAddonCount ?? 0,
        unexpectedNativePackages: nodeModulesModelReport.unexpectedNativePackages ?? [],
        missingConfiguredNativePackages: nodeModulesModelReport.missingConfiguredNativePackages ?? [],
      }
    : null,
  hostAssetsModel: hostAssetsModelReport
    ? {
        resources: {
          fileCount: hostAssetsModelReport.resources?.fileCount ?? 0,
          unclassifiedFiles: hostAssetsModelReport.resources?.unclassifiedFiles ?? [],
        },
        bin: {
          fileCount: hostAssetsModelReport.bin?.fileCount ?? 0,
          unclassifiedFiles: hostAssetsModelReport.bin?.unclassifiedFiles ?? [],
        },
        policies: {
          fileCount: hostAssetsModelReport.policies?.fileCount ?? 0,
          unclassifiedFiles: hostAssetsModelReport.policies?.unclassifiedFiles ?? [],
        },
        product: {
          exists: hostAssetsModelReport.product?.exists === true,
        },
      }
    : null,
  runtimeManifests: {
    packageManager: packageManagerManifest
      ? {
          dependencyCount: packageManagerManifest.dependencyCount ?? 0,
          passed: packageManagerManifest.passed === true,
        }
      : null,
    packageManagerResolution: packageManagerResolution
      ? {
          resolvedDependencyCount: packageManagerResolution.resolvedDependencyCount ?? 0,
          aliasedDependencyCount: packageManagerResolution.aliasedDependencyCount ?? 0,
          omittedDependencyCount: packageManagerResolution.omittedDependencyCount ?? 0,
          externalizedDependencyCount:
            packageManagerResolution.externalizedDependencyCount ?? 0,
          unresolvedDependencyCount:
            packageManagerResolution.unresolvedDependencyCount ?? 0,
          unresolvedDependencies:
            packageManagerResolution.unresolvedDependencies ?? [],
          passed: packageManagerResolution.passed === true,
        }
      : null,
    packageManagerInstall: packageManagerInstall
      ? {
          declaredDependencyCount: packageManagerInstall.declaredDependencyCount ?? 0,
          installedDependencyCount: packageManagerInstall.installedDependencyCount ?? 0,
          missingDependencyCount: packageManagerInstall.missingDependencyCount ?? 0,
          missingDependencies: packageManagerInstall.missingDependencies ?? [],
          passed: packageManagerInstall.passed === true,
        }
      : null,
    nativeRuntime: nativeRuntimeManifest
      ? {
          nativeRuntimePackageCount: nativeRuntimeManifest.nativeRuntimePackageCount ?? 0,
          hostAssetSectionCount: nativeRuntimeManifest.hostAssetSectionCount ?? 0,
          passed: nativeRuntimeManifest.passed === true,
        }
      : null,
    nativeArtifactInventory: nativeArtifactInventory
      ? {
          packageCount: nativeArtifactInventory.packageCount ?? 0,
          configuredAddonCount: nativeArtifactInventory.configuredAddonCount ?? 0,
          configuredRuntimeArtifactCount:
            nativeArtifactInventory.configuredRuntimeArtifactCount ?? 0,
          binaryArtifactCount: nativeArtifactInventory.binaryArtifactCount ?? 0,
          missingConfiguredRuntimeArtifactCount:
            nativeArtifactInventory.missingConfiguredRuntimeArtifactCount ?? 0,
          passed: nativeArtifactInventory.passed === true,
        }
      : null,
    nativeDistributionPlan: nativeDistributionPlan
      ? {
          packageCount: nativeDistributionPlan.packageCount ?? 0,
          externalPrebuiltNativeCount:
            nativeDistributionPlan.strategies?.externalPrebuiltNativeCount ?? 0,
          helperBundlePackageCount:
            nativeDistributionPlan.strategies?.helperBundlePackageCount ?? 0,
          windowsOnlyPackageCount:
            nativeDistributionPlan.strategies?.windowsOnlyPackageCount ?? 0,
          passed: nativeDistributionPlan.passed === true,
        }
      : null,
    nodeModulesDebaselinePlan: nodeModulesDebaselinePlan
      ? {
          targetResidualPath: nodeModulesDebaselinePlan.targetResidualPath ?? null,
          phaseCount: nodeModulesDebaselinePlan.phases?.length ?? 0,
          readyPhaseCount: (nodeModulesDebaselinePlan.phases ?? []).filter(
            (phase) => phase.status === 'ready'
          ).length,
          passed: nodeModulesDebaselinePlan.passed === true,
        }
      : null,
  },
  topLevelSummary,
  residualFileCounts: residualsReport?.topLevelResidualCounts ?? {},
  outResidualGroups: residualsReport?.outResidualGroups ?? [],
  residualExternalItems,
  isFullyIndependent: residualExternalItems.length === 0,
  passed:
    boundaryReport?.passed === true &&
    originReport !== null &&
    ownershipReport !== null &&
    residualsReport !== null &&
    externalDependenciesReport !== null &&
    nodeModulesModelReport !== null &&
    nodeModulesModelReport.passed === true &&
    hostAssetsModelReport !== null &&
    hostAssetsModelReport.passed === true &&
    packageManagerManifest !== null &&
    packageManagerManifest.passed === true &&
    packageManagerResolution !== null &&
    packageManagerResolution.passed === true &&
    packageManagerInstall !== null &&
    packageManagerInstall.passed === true &&
    nativeRuntimeManifest !== null &&
    nativeRuntimeManifest.passed === true &&
    nativeArtifactInventory !== null &&
    nativeArtifactInventory.passed === true &&
    nativeDistributionPlan !== null &&
    nativeDistributionPlan.passed === true &&
    nodeModulesDebaselinePlan !== null &&
    nodeModulesDebaselinePlan.passed === true &&
    topLevelSummary.length > 0,
};

fs.mkdirSync(path.dirname(RESULT_PATH), { recursive: true });
fs.writeFileSync(RESULT_PATH, JSON.stringify(result, null, 2) + '\n');
console.log(RESULT_PATH);

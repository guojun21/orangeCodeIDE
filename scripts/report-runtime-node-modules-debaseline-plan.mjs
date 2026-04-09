#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { ROOT } from './runtime-config-entry.mjs';

const PLAN_CONFIG_PATH = path.join(
  ROOT,
  'config',
  'runtime',
  'node-modules-debaseline-plan.json'
);
const NODE_MODULES_MODEL_REPORT_PATH = path.join(
  ROOT,
  'mapped',
  'runtime-node-modules-model-report.json'
);
const PACKAGE_MANAGER_MANIFEST_PATH = path.join(
  ROOT,
  'mapped',
  'runtime-package-manager-manifest.json'
);
const PACKAGE_MANAGER_INSTALL_PATH = path.join(
  ROOT,
  'mapped',
  'runtime-package-manager-install-report.json'
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
const RESULT_PATH = path.join(
  ROOT,
  'mapped',
  'runtime-node-modules-debaseline-plan.json'
);

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

for (const requiredPath of [
  PLAN_CONFIG_PATH,
  NODE_MODULES_MODEL_REPORT_PATH,
  PACKAGE_MANAGER_MANIFEST_PATH,
  PACKAGE_MANAGER_INSTALL_PATH,
  NATIVE_ARTIFACT_INVENTORY_PATH,
  NATIVE_DISTRIBUTION_PLAN_PATH,
]) {
  if (!fs.existsSync(requiredPath)) {
    throw new Error(`Missing required input: ${requiredPath}`);
  }
}

const planConfig = readJson(PLAN_CONFIG_PATH);
const nodeModulesModel = readJson(NODE_MODULES_MODEL_REPORT_PATH);
const packageManagerManifest = readJson(PACKAGE_MANAGER_MANIFEST_PATH);
const packageManagerInstall = readJson(PACKAGE_MANAGER_INSTALL_PATH);
const nativeArtifactInventory = readJson(NATIVE_ARTIFACT_INVENTORY_PATH);
const nativeDistributionPlan = readJson(NATIVE_DISTRIBUTION_PLAN_PATH);

const helperBundlePackages = (nativeDistributionPlan.packagePlans ?? [])
  .filter((entry) => entry.artifactBundleKind === 'addon-plus-helper')
  .map((entry) => ({
    name: entry.name,
    ownerSurface: entry.ownerSurface,
    helperArtifactCount: entry.helperArtifactCount,
    helperArtifacts: (entry.configuredRuntimeArtifacts ?? []).filter(
      (artifact) => artifact.kind && artifact.kind !== 'native-addon'
    ),
  }));

const result = {
  generatedAt: new Date().toISOString(),
  sourceOfTruth: 'config/runtime/node-modules-debaseline-plan.json',
  targetResidualPath: planConfig.targetResidualPath,
  currentState: {
    totalPackageCount: nodeModulesModel.counts?.packageCount ?? 0,
    jsInstallablePackageCount: nodeModulesModel.counts?.jsInstallablePackageCount ?? 0,
    nativeRuntimePackageCount: nodeModulesModel.counts?.nativeRuntimePackageCount ?? 0,
    declaredJsDependencyCount: packageManagerInstall.declaredDependencyCount ?? 0,
    installedJsDependencyCount: packageManagerInstall.installedDependencyCount ?? 0,
    configuredNativeRuntimeArtifactCount:
      nativeArtifactInventory.configuredRuntimeArtifactCount ?? 0,
    helperBundlePackageCount:
      nativeDistributionPlan.strategies?.helperBundlePackageCount ?? 0,
  },
  phases: (planConfig.phases ?? []).map((phase) => {
    if (phase.id === 'js-package-manager-input') {
      return {
        ...phase,
        status:
          packageManagerManifest.passed === true && packageManagerInstall.passed === true
            ? 'ready'
            : 'blocked',
        details: {
          dependencyCount: packageManagerManifest.dependencyCount ?? 0,
          declaredDependencyCount: packageManagerInstall.declaredDependencyCount ?? 0,
          installedDependencyCount: packageManagerInstall.installedDependencyCount ?? 0,
          missingDependencyCount: packageManagerInstall.missingDependencyCount ?? 0,
        },
      };
    }
    if (phase.id === 'native-prebuilt-bundles') {
      return {
        ...phase,
        status: nativeDistributionPlan.passed === true ? 'ready' : 'blocked',
        details: {
          nativeRuntimePackageCount: nativeDistributionPlan.packageCount ?? 0,
          externalPrebuiltNativeCount:
            nativeDistributionPlan.strategies?.externalPrebuiltNativeCount ?? 0,
          windowsOnlyPackageCount:
            nativeDistributionPlan.strategies?.windowsOnlyPackageCount ?? 0,
        },
      };
    }
    if (phase.id === 'helper-binary-model') {
      return {
        ...phase,
        status:
          nativeArtifactInventory.passed === true && helperBundlePackages.length > 0
            ? 'ready'
            : 'blocked',
        details: {
          helperBundlePackageCount: helperBundlePackages.length,
          helperBundlePackages,
        },
      };
    }
    if (phase.id === 'compatibility-retirement') {
      return {
        ...phase,
        status: 'pending',
        details: {
          compatibilityArtifacts:
            nodeModulesModel.compatibilityArtifacts ?? {},
        },
      };
    }
    return {
      ...phase,
      status: 'pending',
      details: {},
    };
  }),
  nativePackages: (nativeDistributionPlan.packagePlans ?? []).map((entry) => ({
    name: entry.name,
    ownerSurface: entry.ownerSurface,
    strategyKind: entry.strategyKind,
    artifactBundleKind: entry.artifactBundleKind,
    configuredRuntimeArtifactCount: entry.configuredRuntimeArtifactCount,
  })),
  passed:
    packageManagerManifest.passed === true &&
    packageManagerInstall.passed === true &&
    nativeArtifactInventory.passed === true &&
    nativeDistributionPlan.passed === true,
};

fs.mkdirSync(path.dirname(RESULT_PATH), { recursive: true });
fs.writeFileSync(RESULT_PATH, JSON.stringify(result, null, 2) + '\n');
console.log(RESULT_PATH);

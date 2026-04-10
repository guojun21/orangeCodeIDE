#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { ROOT } from './paths.mjs';

const INPUTS = {
  runtimeBootstrap: path.join(ROOT, 'mapped', 'bootstrap-runtime-baseline.json'),
  vscodeBootstrap: path.join(ROOT, 'mapped', 'bootstrap-vscode-reference.json'),
  watcherSpike: path.join(ROOT, 'mapped', 'watcher-spike-check.json'),
  workbenchSpike: path.join(ROOT, 'mapped', 'workbench-desktop-main-spike-check.json'),
  runtimeGuiSmoke: path.join(ROOT, 'mapped', 'runtime-gui-smoke-report.json'),
  runtimeGuiAgent: path.join(ROOT, 'mapped', 'runtime-gui-agent-report.json'),
  runtimeBoundary: path.join(ROOT, 'mapped', 'runtime-boundary-check.json'),
  runtimeOrigins: path.join(ROOT, 'mapped', 'runtime-origin-report.json'),
  runtimeResiduals: path.join(ROOT, 'mapped', 'runtime-residuals-report.json'),
  runtimeOwnership: path.join(ROOT, 'mapped', 'runtime-ownership-report.json'),
  runtimeExternalDependencies: path.join(
    ROOT,
    'mapped',
    'runtime-external-dependencies-report.json'
  ),
  runtimeNodeModulesModel: path.join(ROOT, 'mapped', 'runtime-node-modules-model-report.json'),
  runtimeHostAssetsModel: path.join(ROOT, 'mapped', 'runtime-host-assets-model-report.json'),
  runtimePackageManagerManifest: path.join(ROOT, 'mapped', 'runtime-package-manager-manifest.json'),
  runtimePackageManagerInstall: path.join(
    ROOT,
    'mapped',
    'runtime-package-manager-install-report.json'
  ),
  runtimeNativeRuntimeManifest: path.join(ROOT, 'mapped', 'runtime-native-runtime-manifest.json'),
  runtimePackageManagerResolution: path.join(
    ROOT,
    'mapped',
    'runtime-package-manager-resolution-report.json'
  ),
  runtimeIndependence: path.join(ROOT, 'mapped', 'runtime-independence-report.json'),
};

const OUTPUT = path.join(ROOT, 'mapped', 'public-bootstrap-verify.json');

function readJson(filePath) {
  if (!fs.existsSync(filePath)) {
    return null;
  }
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

const runtimeBootstrap = readJson(INPUTS.runtimeBootstrap);
const vscodeBootstrap = readJson(INPUTS.vscodeBootstrap);
const watcherSpike = readJson(INPUTS.watcherSpike);
const workbenchSpike = readJson(INPUTS.workbenchSpike);
const runtimeGuiSmoke = readJson(INPUTS.runtimeGuiSmoke);
const runtimeGuiAgent = readJson(INPUTS.runtimeGuiAgent);
const runtimeBoundary = readJson(INPUTS.runtimeBoundary);
const runtimeOrigins = readJson(INPUTS.runtimeOrigins);
const runtimeResiduals = readJson(INPUTS.runtimeResiduals);
const runtimeOwnership = readJson(INPUTS.runtimeOwnership);
const runtimeExternalDependencies = readJson(INPUTS.runtimeExternalDependencies);
const runtimeNodeModulesModel = readJson(INPUTS.runtimeNodeModulesModel);
const runtimeHostAssetsModel = readJson(INPUTS.runtimeHostAssetsModel);
const runtimePackageManagerManifest = readJson(INPUTS.runtimePackageManagerManifest);
const runtimePackageManagerInstall = readJson(INPUTS.runtimePackageManagerInstall);
const runtimeNativeRuntimeManifest = readJson(INPUTS.runtimeNativeRuntimeManifest);
const runtimePackageManagerResolution = readJson(INPUTS.runtimePackageManagerResolution);
const runtimeIndependence = readJson(INPUTS.runtimeIndependence);

const missing = Object.entries(INPUTS)
  .filter(([, filePath]) => !fs.existsSync(filePath))
  .map(([key]) => key);

const corePassed =
  missing.length === 0 &&
  runtimeBootstrap !== null &&
  vscodeBootstrap !== null &&
  watcherSpike?.passed === true &&
  workbenchSpike?.passed === true &&
  runtimeBoundary?.passed === true &&
  runtimeIndependence?.passed === true;

const guiPassed = runtimeGuiSmoke?.passed === true && runtimeGuiAgent?.passed === true;
const passed = corePassed;

const result = {
  generatedAt: new Date().toISOString(),
  passed,
  verificationProfile: {
    defaultCommand: 'npm run verify:public-bootstrap',
    defaultMode: 'core-no-gui',
    defaultIncludesGui: false,
    guiOptInCommand: 'npm run verify:public-bootstrap:gui',
    manualIsolatedCommand: 'npm run dev:auth:isolated',
    corePassed,
    guiPassed,
  },
  missing,
  steps: {
    runtimeBootstrap: runtimeBootstrap
      ? {
          source: runtimeBootstrap.source ?? null,
          archive: runtimeBootstrap.archive ?? null,
          url: runtimeBootstrap.url ?? null,
          cursorRelease: runtimeBootstrap.cursorRelease ?? null,
          distributionUrl: runtimeBootstrap.distributionUrl ?? null,
          stagedRuntimeRoot: runtimeBootstrap.stagedRuntimeRoot ?? null,
        }
      : null,
    vscodeBootstrap: vscodeBootstrap
      ? {
          tag: vscodeBootstrap.tag ?? null,
          sourceUrl: vscodeBootstrap.sourceUrl ?? null,
        }
      : null,
    watcherSpike: watcherSpike
      ? {
          passed: watcherSpike.passed === true,
          generatedAt: watcherSpike.generatedAt ?? null,
        }
      : null,
    workbenchSpike: workbenchSpike
      ? {
          passed: workbenchSpike.passed === true,
          generatedAt: workbenchSpike.generatedAt ?? null,
        }
      : null,
    runtimeGuiSmoke: runtimeGuiSmoke
      ? {
          passed: runtimeGuiSmoke.passed === true,
          requiredForDefaultPass: false,
          launchCountDelta: runtimeGuiSmoke.launchCountDelta ?? 0,
          runner: runtimeGuiSmoke.runner ?? null,
        }
      : null,
    runtimeGuiAgent: runtimeGuiAgent
      ? {
          passed: runtimeGuiAgent.passed === true,
          requiredForDefaultPass: false,
          launchCountDelta: runtimeGuiAgent.launchCountDelta ?? 0,
          runner: runtimeGuiAgent.runner ?? null,
        }
      : null,
    runtimeBoundary: runtimeBoundary
      ? {
          passed: runtimeBoundary.passed === true,
          stagedRuntimeRoot: runtimeBoundary.stagedRuntimeRoot ?? null,
        }
      : null,
    runtimeOrigins: runtimeOrigins
      ? {
          passed: runtimeOrigins.passed === true,
          topLevelOrigins: runtimeOrigins.topLevelOrigins ?? [],
        }
      : null,
    runtimeResiduals: runtimeResiduals
      ? {
          passed: runtimeResiduals.passed === true,
          topLevelResidualCounts: runtimeResiduals.topLevelResidualCounts ?? {},
          outResidualGroups: runtimeResiduals.outResidualGroups ?? [],
        }
      : null,
    runtimeOwnership: runtimeOwnership
      ? {
          passed: runtimeOwnership.passed === true,
          trackedExtensionEntries: runtimeOwnership.extensions?.trackedEntryCount ?? null,
          totalExtensionEntries: runtimeOwnership.extensions?.totalEntryCount ?? null,
        }
      : null,
    runtimeExternalDependencies: runtimeExternalDependencies
      ? {
          passed: runtimeExternalDependencies.passed === true,
          nodeModulePackageCount: runtimeExternalDependencies.nodeModules?.packageCount ?? 0,
          nativeNodeModulePackageCount:
            runtimeExternalDependencies.nodeModules?.nativePackageCount ?? 0,
          externalExtensionDirCount:
            runtimeExternalDependencies.extensions?.externalExtensionDirCount ?? 0,
          resourceFileCount: runtimeExternalDependencies.resources?.fileCount ?? 0,
          binFileCount: runtimeExternalDependencies.bin?.fileCount ?? 0,
          policyFileCount: runtimeExternalDependencies.policies?.fileCount ?? 0,
        }
      : null,
    runtimeNodeModulesModel: runtimeNodeModulesModel
      ? {
          passed: runtimeNodeModulesModel.passed === true,
          jsInstallablePackageCount:
            runtimeNodeModulesModel.counts?.jsInstallablePackageCount ?? 0,
          nativeRuntimePackageCount:
            runtimeNodeModulesModel.counts?.nativeRuntimePackageCount ?? 0,
          unexpectedNativePackages:
            runtimeNodeModulesModel.unexpectedNativePackages ?? [],
          missingConfiguredNativePackages:
            runtimeNodeModulesModel.missingConfiguredNativePackages ?? [],
        }
      : null,
    runtimeHostAssetsModel: runtimeHostAssetsModel
      ? {
          passed: runtimeHostAssetsModel.passed === true,
          resourceFileCount: runtimeHostAssetsModel.resources?.fileCount ?? 0,
          binFileCount: runtimeHostAssetsModel.bin?.fileCount ?? 0,
          policyFileCount: runtimeHostAssetsModel.policies?.fileCount ?? 0,
          productExists: runtimeHostAssetsModel.product?.exists === true,
          unclassifiedResourceFiles: runtimeHostAssetsModel.resources?.unclassifiedFiles ?? [],
          unclassifiedBinFiles: runtimeHostAssetsModel.bin?.unclassifiedFiles ?? [],
          unclassifiedPolicyFiles: runtimeHostAssetsModel.policies?.unclassifiedFiles ?? [],
        }
      : null,
    runtimePackageManagerManifest: runtimePackageManagerManifest
      ? {
          passed: runtimePackageManagerManifest.passed === true,
          dependencyCount: runtimePackageManagerManifest.dependencyCount ?? 0,
        }
      : null,
    runtimePackageManagerInstall: runtimePackageManagerInstall
      ? {
          passed: runtimePackageManagerInstall.passed === true,
          installSkipped: runtimePackageManagerInstall.installSkipped === true,
          reuseReason: runtimePackageManagerInstall.reuseReason ?? null,
          installedDependencyCount:
            runtimePackageManagerInstall.installedDependencyCount ?? 0,
          missingDependencyCount: runtimePackageManagerInstall.missingDependencyCount ?? 0,
        }
      : null,
    runtimeNativeRuntimeManifest: runtimeNativeRuntimeManifest
      ? {
          passed: runtimeNativeRuntimeManifest.passed === true,
          nativeRuntimePackageCount:
            runtimeNativeRuntimeManifest.nativeRuntimePackageCount ?? 0,
          hostAssetSectionCount: runtimeNativeRuntimeManifest.hostAssetSectionCount ?? 0,
        }
      : null,
    runtimePackageManagerResolution: runtimePackageManagerResolution
      ? {
          passed: runtimePackageManagerResolution.passed === true,
          resolvedDependencyCount:
            runtimePackageManagerResolution.resolvedDependencyCount ?? 0,
          unresolvedDependencyCount:
            runtimePackageManagerResolution.unresolvedDependencyCount ?? 0,
          unresolvedDependencies:
            runtimePackageManagerResolution.unresolvedDependencies ?? [],
        }
      : null,
    runtimeIndependence: runtimeIndependence
      ? {
          passed: runtimeIndependence.passed === true,
          isFullyIndependent: runtimeIndependence.isFullyIndependent ?? null,
          residualExternalItems: runtimeIndependence.residualExternalItems ?? [],
        }
      : null,
  },
};

fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
fs.writeFileSync(OUTPUT, JSON.stringify(result, null, 2) + '\n');
console.log(OUTPUT);

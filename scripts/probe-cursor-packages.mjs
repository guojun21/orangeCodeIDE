#!/usr/bin/env node

/**
 * Probes the 12 Cursor-owned packages embedded in the workbench bundle.
 * For each package, reports: module count, total bytes, entry point,
 * key exports/identifiers, and nested bundle indicators.
 */

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const registryPath = path.join(ROOT, 'mapped', 'workbench-desktop-main-module-registry.json');
const binaryRegistryPath = path.join(ROOT, 'recovered', 'binary-crack', 'workbench-bundle-complete-module-registry.txt');
const segmentsDir = path.join(ROOT, 'recovered', 'workbench-desktop-main-focus-segments');
const binaryModulesDir = path.join(ROOT, 'recovered', 'binary-crack', 'modules-all');
const outputPath = path.join(ROOT, 'mapped', 'cursor-packages-probe-summary.json');

const CURSOR_PACKAGES = [
  'agent-analytics', 'agent-client', 'agent-core', 'agent-exec',
  'agent-kv', 'agent-transcript', 'constants', 'context',
  'hooks', 'metrics', 'ui', 'utils',
];

let allModules = [];

if (fs.existsSync(registryPath)) {
  const registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
  allModules = registry.modules.map(m => m.id);
} else if (fs.existsSync(binaryRegistryPath)) {
  allModules = fs.readFileSync(binaryRegistryPath, 'utf8')
    .split('\n')
    .filter(Boolean);
}

const packages = [];

for (const pkg of CURSOR_PACKAGES) {
  const packageModules = allModules.filter(
    m => m.includes(`packages/${pkg}/`) || m.includes(`packages/${pkg}.`)
  );

  let totalBytes = 0;
  const moduleFiles = [];

  for (const mod of packageModules) {
    const candidates = [
      path.join(binaryModulesDir, '_parent_packages', mod.replace(`../packages/`, '')),
      path.join(binaryModulesDir, 'packages', mod.replace(`packages/`, '')),
      path.join(segmentsDir, mod),
    ];

    for (const candidate of candidates) {
      if (fs.existsSync(candidate)) {
        const stat = fs.statSync(candidate);
        totalBytes += stat.size;
        moduleFiles.push({
          path: mod,
          bytes: stat.size,
        });
        break;
      }
    }
  }

  const entryModule = packageModules.find(m => m.endsWith('/index.ts') || m.endsWith('/index.js'));

  let keyIdentifiers = [];
  if (pkg === 'ui') {
    keyIdentifiers = ['packages/ui/dist/bundle.js (18.8MB webpack subbundle)'];
  } else {
    const sourceFiles = packageModules
      .filter(m => !m.endsWith('/index.ts') && !m.endsWith('/index.js'))
      .map(m => m.split('/').pop());
    keyIdentifiers = sourceFiles.slice(0, 10);
  }

  const pkgInfo = {
    id: pkg,
    fullPrefix: `packages/${pkg}`,
    moduleCount: packageModules.length,
    totalBytes,
    entryModule: entryModule || null,
    modules: packageModules,
    keyFiles: keyIdentifiers,
    hasNestedBundle: pkg === 'ui',
  };

  packages.push(pkgInfo);
  console.log(`${pkg}: ${packageModules.length} modules, ${totalBytes} bytes, entry=${entryModule || 'none'}`);
}

const output = {
  generatedAt: new Date().toISOString(),
  totalPackages: packages.length,
  totalModulesAcrossPackages: packages.reduce((s, p) => s + p.moduleCount, 0),
  packages,
};

fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
console.log(`\nResult: ${outputPath}`);

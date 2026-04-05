#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const registryPath = path.join(ROOT, 'mapped', 'workbench-desktop-main-module-registry.json');
const bundlePath = path.join(ROOT, 'out', 'vs', 'workbench', 'workbench.desktop.main.js');
const packagesUiAnalysisPath = path.join(ROOT, 'mapped', 'packages-ui-deobfuscated-analysis.json');
const outputPath = path.join(ROOT, 'mapped', 'nested-bundle-registry.json');

const registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
const bundleSource = fs.readFileSync(bundlePath, 'utf8');
const packagesUiAnalysis = fs.existsSync(packagesUiAnalysisPath)
  ? JSON.parse(fs.readFileSync(packagesUiAnalysisPath, 'utf8'))
  : null;

function countMatches(text, pattern) {
  const flags = pattern.flags.includes('g') ? pattern.flags : `${pattern.flags}g`;
  const matcher = new RegExp(pattern.source, flags);
  let count = 0;
  while (matcher.exec(text) !== null) {
    count += 1;
  }
  return count;
}

function collectSourceMapRefs(text, limit = 10) {
  const refs = [];
  const pattern = /\/\/# sourceMappingURL=([^\n]+)/g;
  let match;
  while ((match = pattern.exec(text)) !== null && refs.length < limit) {
    refs.push(match[1].trim());
  }
  return refs;
}

function classifyHost(module) {
  const reasons = [];
  if (module.hasNestedWebpack) {
    reasons.push('webpack-host');
  }
  if (module.hasDefineAmd) {
    reasons.push('amd-host');
  }
  if (module.hasEmbeddedSourcemap) {
    reasons.push('embedded-sourcemap');
  }
  if (module.id.startsWith('packages/')) {
    reasons.push('cursor-package');
  }
  return reasons;
}

const candidateHosts = registry.modules.filter(
  (module) =>
    module.hasNestedWebpack ||
    module.hasDefineAmd ||
    module.hasEmbeddedSourcemap ||
    module.id.startsWith('packages/')
);

const hosts = candidateHosts.map((module) => {
  const rawSource = bundleSource.slice(module.startIndex, module.endIndexExclusive);
  const webpackRequireCount = countMatches(rawSource, /__webpack_require__/g);
  const webpackUmdCount = countMatches(rawSource, /webpackUniversalModuleDefinition/g);
  const defineAmdCount = countMatches(rawSource, /define\.amd/g);
  const parcelRequireCount = countMatches(rawSource, /parcelRequire/g);
  const sourceMapRefs = collectSourceMapRefs(rawSource);
  const classification = classifyHost(module);

  const host = {
    ordinal: module.ordinal,
    id: module.id,
    category: module.category,
    byteLength: module.byteLength,
    classification,
    markerCounts: {
      webpackRequireCount,
      webpackUmdCount,
      defineAmdCount,
      parcelRequireCount,
      sourceMapRefCount: sourceMapRefs.length
    },
    sourceMapRefs,
    likelyPackagers: module.likelyPackagers,
    signals: {
      hasNestedWebpack: module.hasNestedWebpack,
      hasDefineAmd: module.hasDefineAmd,
      hasEmbeddedSourcemap: module.hasEmbeddedSourcemap,
      hasCreateContextSignal: module.hasCreateContextSignal,
      hasCursorThemeSignal: module.hasCursorThemeSignal,
      hasAgentSignal: module.hasAgentSignal
    }
  };

  if (module.id === 'packages/ui/dist/bundle.js' && packagesUiAnalysis) {
    host.packagesUiNestedBundleGuesses = packagesUiAnalysis.webpackMarkers.map((marker) => ({
      guessedName: marker.guessedName,
      line: marker.line
    }));
    host.packagesUiConceptHitCounts = Object.fromEntries(
      Object.entries(packagesUiAnalysis.conceptHits).map(([concept, hits]) => [concept, Array.isArray(hits) ? hits.length : 0])
    );
  }

  return host;
});

const report = {
  generatedAt: new Date().toISOString(),
  bundlePath: path.relative(ROOT, bundlePath),
  registryPath: path.relative(ROOT, registryPath),
  candidateHostCount: candidateHosts.length,
  summary: {
    webpackHosts: hosts.filter((host) => host.classification.includes('webpack-host')).length,
    amdHosts: hosts.filter((host) => host.classification.includes('amd-host')).length,
    embeddedSourcemapHosts: hosts.filter((host) => host.classification.includes('embedded-sourcemap')).length,
    cursorPackageHosts: hosts.filter((host) => host.classification.includes('cursor-package')).length
  },
  hosts
};

fs.writeFileSync(outputPath, JSON.stringify(report, null, 2) + '\n');
console.log(outputPath);

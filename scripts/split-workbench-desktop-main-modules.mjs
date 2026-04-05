#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const args = process.argv.slice(2);
const writeSegments = args.includes('--write-segments');
const matchIndex = args.indexOf('--match');
const outputDirIndex = args.indexOf('--output-dir');
const limitIndex = args.indexOf('--limit');
const selectionModeIndex = args.indexOf('--selection-mode');
const minBytesIndex = args.indexOf('--min-bytes');
const cleanOutput = args.includes('--clean-output');

const matchPattern =
  matchIndex >= 0 && args[matchIndex + 1]
    ? new RegExp(args[matchIndex + 1], 'i')
    : null;
const outputDir =
  outputDirIndex >= 0 && args[outputDirIndex + 1]
    ? path.resolve(ROOT, args[outputDirIndex + 1])
    : path.join(ROOT, 'recovered', 'workbench-desktop-main-segments');
const writeLimit =
  limitIndex >= 0 && Number.isFinite(Number(args[limitIndex + 1]))
    ? Number(args[limitIndex + 1])
    : Number.POSITIVE_INFINITY;
const selectionMode =
  selectionModeIndex >= 0 && args[selectionModeIndex + 1]
    ? args[selectionModeIndex + 1]
    : 'all';
const minBytes =
  minBytesIndex >= 0 && Number.isFinite(Number(args[minBytesIndex + 1]))
    ? Number(args[minBytesIndex + 1])
    : 10 * 1024;

const bundlePath = path.join(ROOT, 'out', 'vs', 'workbench', 'workbench.desktop.main.js');
const outputPath = path.join(ROOT, 'mapped', 'workbench-desktop-main-module-segments.json');
const registryOutputPath = path.join(ROOT, 'mapped', 'workbench-desktop-main-module-registry.json');
const source = fs.readFileSync(bundlePath, 'utf8');

function buildLineStarts(text) {
  const starts = [0];
  for (let index = 0; index < text.length; index += 1) {
    if (text.charCodeAt(index) === 10) {
      starts.push(index + 1);
    }
  }
  return starts;
}

function lineOfIndex(lineStarts, index) {
  let low = 0;
  let high = lineStarts.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (lineStarts[mid] <= index) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return high + 1;
}

function categorizeModule(id) {
  if (id.startsWith('out-build/vs/')) {
    return 'out-build/vs';
  }
  if (id.startsWith('out-build/external/')) {
    return 'out-build/external';
  }
  if (id.startsWith('node_modules/')) {
    return 'node_modules';
  }

  return id.split('/').slice(0, 2).join('/') || id;
}

function sanitizeId(id) {
  return id.replace(/[^a-zA-Z0-9/._-]+/g, '_');
}

function previewOfSegment(segmentSource) {
  return segmentSource.replace(/\s+/g, ' ').slice(0, 160);
}

function detectLikelyPackagers(segmentSource) {
  const results = [];
  if (segmentSource.includes('Ae({"')) {
    results.push('cursor-workbench-wrapper');
  }
  if (segmentSource.includes('__webpack_require__') || segmentSource.includes('webpackUniversalModuleDefinition')) {
    results.push('webpack-subbundle');
  }
  if (segmentSource.includes('parcelRequire')) {
    results.push('parcel-subbundle');
  }
  if (segmentSource.includes('define.amd')) {
    results.push('umd-or-amd-wrapper');
  }
  return results;
}

function detectSegmentSignals(segmentSource) {
  const likelyPackagers = detectLikelyPackagers(segmentSource);
  const agentSignalPatterns = [
    'agentIdeUnification',
    'unifiedAppLayout',
    'ModelPickerProvider',
    'ui-file-tree',
    'Lightbox',
    'composerBarIsVisible',
    'quickAgentPopupIsVisible',
    'browserEditorActive',
    'backgroundComposerService',
    'PlanTodosSection',
    'AgentRow',
    'Streamdown',
    'DiffProvider'
  ];
  return {
    likelyPackagers,
    hasNestedWebpack: likelyPackagers.includes('webpack-subbundle'),
    hasDefineAmd: likelyPackagers.includes('umd-or-amd-wrapper'),
    hasEmbeddedSourcemap: segmentSource.includes('sourceMappingURL='),
    hasCreateContextSignal: segmentSource.includes('createContext('),
    hasCursorThemeSignal: segmentSource.includes('cursor-dark') || segmentSource.includes('cursor-light'),
    hasAgentSignal: agentSignalPatterns.some((pattern) => segmentSource.includes(pattern))
  };
}

const interestingIdPattern =
  /(contrib\/composer|contrib\/appLayout|platform\/reactivestorage|browserEditor|backgroundComposer|glassTheme|unifiedAppLayout)/i;

function highValueReasonsForSegment(segment) {
  const reasons = [];
  if (segment.byteLength > minBytes) {
    reasons.push(`size>${minBytes}`);
  }
  if (segment.id.startsWith('packages/')) {
    reasons.push('cursor-package');
  }
  if (segment.hasNestedWebpack) {
    reasons.push('nested-webpack');
  }
  if (segment.hasDefineAmd) {
    reasons.push('amd-or-umd');
  }
  if (segment.hasEmbeddedSourcemap) {
    reasons.push('embedded-sourcemap');
  }
  if (segment.hasCreateContextSignal) {
    reasons.push('create-context');
  }
  if (segment.hasCursorThemeSignal) {
    reasons.push('cursor-theme');
  }
  if (segment.hasAgentSignal) {
    reasons.push('agent-signal');
  }
  if (interestingIdPattern.test(segment.id)) {
    reasons.push('interesting-path');
  }
  return reasons;
}

function selectSegments(segmentsToSelect) {
  if (matchPattern) {
    return segmentsToSelect.filter((segment) => matchPattern.test(segment.id));
  }
  if (selectionMode === 'high-value') {
    return segmentsToSelect.filter((segment) => segment.highValueReasons.length > 0);
  }
  return segmentsToSelect;
}

function countBy(values) {
  const counts = new Map();
  for (const value of values) {
    counts.set(value, (counts.get(value) ?? 0) + 1);
  }
  return [...counts.entries()]
    .sort((left, right) => right[1] - left[1] || left[0].localeCompare(right[0]))
    .map(([key, count]) => ({ key, count }));
}

const modulePattern = /Ae\(\{\"([^\"]+)\"\(\)\{/g;
const matches = [];
let match;

while ((match = modulePattern.exec(source)) !== null) {
  matches.push({
    id: match[1],
    startIndex: match.index
  });
}

const lineStarts = buildLineStarts(source);
const sourceMapCommentIndex = source.lastIndexOf('//# sourceMappingURL=');
const effectiveEnd = sourceMapCommentIndex >= 0 ? sourceMapCommentIndex : source.length;

const segments = matches.map((entry, index) => {
  const nextStart = index + 1 < matches.length ? matches[index + 1].startIndex : effectiveEnd;
  const segmentSource = source.slice(entry.startIndex, nextStart);
  const startLine = lineOfIndex(lineStarts, entry.startIndex);
  const endLineInclusive = Math.max(startLine, lineOfIndex(lineStarts, Math.max(entry.startIndex, nextStart - 1)));
  const signals = detectSegmentSignals(segmentSource);

  return {
    id: entry.id,
    category: categorizeModule(entry.id),
    startIndex: entry.startIndex,
    endIndexExclusive: nextStart,
    startLine,
    endLineInclusive,
    byteLength: Buffer.byteLength(segmentSource),
    preview: previewOfSegment(segmentSource),
    ...signals
  };
});

for (const segment of segments) {
  segment.highValueReasons = highValueReasonsForSegment(segment);
}

const registryModules = segments.map((segment, index) => ({
  ordinal: index + 1,
  id: segment.id,
  category: segment.category,
  startIndex: segment.startIndex,
  endIndexExclusive: segment.endIndexExclusive,
  startLine: segment.startLine,
  endLineInclusive: segment.endLineInclusive,
  byteLength: segment.byteLength,
  hasNestedWebpack: segment.hasNestedWebpack,
  hasDefineAmd: segment.hasDefineAmd,
  hasEmbeddedSourcemap: segment.hasEmbeddedSourcemap,
  hasCreateContextSignal: segment.hasCreateContextSignal,
  hasCursorThemeSignal: segment.hasCursorThemeSignal,
  hasAgentSignal: segment.hasAgentSignal,
  likelyPackagers: segment.likelyPackagers,
  highValueReasons: segment.highValueReasons,
  preview: segment.preview
}));

const focusPattern = /(workbench|composer|browser|glass|layout|theme|agent|background)/i;
const focusSegments = segments.filter((segment) => focusPattern.test(segment.id));
const selectedSegments = selectSegments(segments);

if (writeSegments) {
  if (cleanOutput && fs.existsSync(outputDir)) {
    fs.rmSync(outputDir, { recursive: true, force: true });
  }
  fs.mkdirSync(outputDir, { recursive: true });
  let written = 0;

  for (const segment of selectedSegments) {
    if (written >= writeLimit) {
      break;
    }

    const filePath = path.join(outputDir, sanitizeId(segment.id));
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, source.slice(segment.startIndex, segment.endIndexExclusive));
    written += 1;
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  bundlePath: path.relative(ROOT, bundlePath),
  totalModuleWrappers: segments.length,
  topLevelPrefixBytes: matches.length > 0 ? matches[0].startIndex : 0,
  tailBytesAfterLastModule: source.length - effectiveEnd,
  writeSegments,
  selectedSegmentCount: selectedSegments.length,
  selectionMode,
  minBytes,
  writeLimit: Number.isFinite(writeLimit) ? writeLimit : null,
  outputDir: writeSegments ? path.relative(ROOT, outputDir) : null,
  categories: countBy(segments.map((segment) => segment.category)),
  focusSummary: {
    count: focusSegments.length,
    samples: focusSegments.slice(0, 40).map((segment) => ({
      id: segment.id,
      startLine: segment.startLine,
      byteLength: segment.byteLength
    }))
  },
  largestSegments: [...segments]
    .sort((left, right) => right.byteLength - left.byteLength)
    .slice(0, 40),
  segments
};

const registryReport = {
  generatedAt: new Date().toISOString(),
  bundlePath: path.relative(ROOT, bundlePath),
  totalModules: registryModules.length,
  counts: {
    nestedWebpackHosts: registryModules.filter((segment) => segment.hasNestedWebpack).length,
    defineAmdHosts: registryModules.filter((segment) => segment.hasDefineAmd).length,
    embeddedSourcemapHosts: registryModules.filter((segment) => segment.hasEmbeddedSourcemap).length,
    createContextHosts: registryModules.filter((segment) => segment.hasCreateContextSignal).length,
    cursorThemeHosts: registryModules.filter((segment) => segment.hasCursorThemeSignal).length,
    agentSignalHosts: registryModules.filter((segment) => segment.hasAgentSignal).length,
    cursorPackageHosts: registryModules.filter((segment) => segment.id.startsWith('packages/')).length,
    highValueHosts: registryModules.filter((segment) => segment.highValueReasons.length > 0).length
  },
  categories: countBy(registryModules.map((segment) => segment.category)),
  cursorPackages: registryModules.filter((segment) => segment.id.startsWith('packages/')),
  nestedBundleHosts: registryModules.filter((segment) => segment.hasNestedWebpack || segment.hasDefineAmd),
  embeddedSourcemapHosts: registryModules.filter((segment) => segment.hasEmbeddedSourcemap),
  largestModules: [...registryModules]
    .sort((left, right) => right.byteLength - left.byteLength)
    .slice(0, 80),
  modules: registryModules
};

fs.writeFileSync(outputPath, JSON.stringify(report, null, 2) + '\n');
fs.writeFileSync(registryOutputPath, JSON.stringify(registryReport, null, 2) + '\n');
console.log(outputPath);
console.log(registryOutputPath);

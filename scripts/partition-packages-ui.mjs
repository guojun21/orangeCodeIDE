#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const sourcePath = path.join(ROOT, 'recovered', 'packages-ui', 'deobfuscated', 'deobfuscated.js');
const analysisPath = path.join(ROOT, 'mapped', 'packages-ui-deobfuscated-analysis.json');
const outputPath = path.join(ROOT, 'mapped', 'packages-ui-partition.json');

const source = fs.readFileSync(sourcePath, 'utf8');
const analysis = JSON.parse(fs.readFileSync(analysisPath, 'utf8'));

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

function collectOccurrences(text, term, lineStarts, limit = 40) {
  const hits = [];
  let index = 0;
  while (index < text.length && hits.length < limit) {
    const found = text.indexOf(term, index);
    if (found < 0) {
      break;
    }
    hits.push({
      term,
      index: found,
      line: lineOfIndex(lineStarts, found),
    });
    index = found + term.length;
  }
  return hits;
}

function regionFromHits(id, label, classification, hits, symbols, paddingBytes = 2048) {
  if (hits.length === 0) {
    return null;
  }
  const minIndex = Math.max(0, Math.min(...hits.map((hit) => hit.index)) - paddingBytes);
  const maxIndex = Math.min(
    source.length,
    Math.max(...hits.map((hit) => hit.index + hit.term.length)) + paddingBytes
  );
  return {
    id,
    label,
    classification,
    byteRange: {
      start: minIndex,
      endExclusive: maxIndex,
      length: maxIndex - minIndex,
    },
    lineRange: {
      start: lineOfIndex(lineStarts, minIndex),
      endInclusive: lineOfIndex(lineStarts, Math.max(minIndex, maxIndex - 1)),
    },
    symbols,
    hitCount: hits.length,
    anchors: hits.slice(0, 20),
  };
}

const lineStarts = buildLineStarts(source);

const cursorOwnGroups = [
  {
    id: 'trusted-types-policy',
    label: 'Trusted Types policy',
    classification: 'cursor-own',
    terms: ['anysphereUiPolicy'],
    symbols: ['anysphereUiPolicy'],
  },
  {
    id: 'file-tree',
    label: 'File tree and controller',
    classification: 'cursor-own',
    terms: ['ui-file-tree', 'FileTree', 'LazyFileTreeController'],
    symbols: ['ui-file-tree', 'FileTree', 'LazyFileTreeController'],
  },
  {
    id: 'model-picker',
    label: 'Model picker',
    classification: 'cursor-own',
    terms: ['ModelPickerProvider', 'ModelPickerMenuContent'],
    symbols: ['ModelPickerProvider', 'ModelPickerMenuContent'],
  },
  {
    id: 'lightbox',
    label: 'Lightbox',
    classification: 'cursor-own',
    terms: ['Lightbox'],
    symbols: ['Lightbox'],
  },
  {
    id: 'plan-and-agent-ui',
    label: 'Plan and agent UI',
    classification: 'cursor-own',
    terms: ['PlanTodosSection', 'AgentRow', 'FilterTabBar', 'MultilinePasteWarning'],
    symbols: ['PlanTodosSection', 'AgentRow', 'FilterTabBar', 'MultilinePasteWarning'],
  },
  {
    id: 'diff-ui',
    label: 'Diff UI',
    classification: 'cursor-own',
    terms: ['DiffProvider', 'DiffContent'],
    symbols: ['DiffProvider', 'DiffContent'],
  },
  {
    id: 'streamdown-markdown',
    label: 'Streamdown and markdown render chain',
    classification: 'mixed',
    terms: ['Streamdown', 'Markdown', 'prosemirror', 'tiptap', 'mermaid', 'shiki', 'sonner'],
    symbols: ['Streamdown', 'Markdown', 'prosemirror', 'tiptap', 'mermaid', 'shiki', 'sonner'],
  },
];

const cursorRegions = cursorOwnGroups
  .map((group) => {
    const hits = group.terms.flatMap((term) => collectOccurrences(source, term, lineStarts));
    return regionFromHits(group.id, group.label, group.classification, hits, group.symbols);
  })
  .filter(Boolean);

const thirdPartyRegions = analysis.webpackMarkers.map((marker, index, markers) => {
  const nextMarker = markers[index + 1];
  const start = marker.index;
  const end = nextMarker ? nextMarker.index : Math.min(source.length, marker.index + 250000);
  return {
    id: `third-party-${marker.guessedName}-${index + 1}`,
    label: `Third-party nested bundle: ${marker.guessedName}`,
    classification: 'third-party',
    byteRange: {
      start,
      endExclusive: end,
      length: end - start,
    },
    lineRange: {
      start: marker.line,
      endInclusive: lineOfIndex(lineStarts, Math.max(start, end - 1)),
    },
    symbols: [marker.guessedName],
    hitCount: 1,
    anchors: [
      {
        term: marker.guessedName,
        index: marker.index,
        line: marker.line,
      },
    ],
  };
});

const regions = [...thirdPartyRegions, ...cursorRegions].sort(
  (left, right) => left.byteRange.start - right.byteRange.start
);

const report = {
  generatedAt: new Date().toISOString(),
  sourcePath: path.relative(ROOT, sourcePath),
  analysisPath: path.relative(ROOT, analysisPath),
  summary: {
    regionCount: regions.length,
    cursorOwnCount: regions.filter((region) => region.classification === 'cursor-own').length,
    mixedCount: regions.filter((region) => region.classification === 'mixed').length,
    thirdPartyCount: regions.filter((region) => region.classification === 'third-party').length,
  },
  regions,
};

fs.writeFileSync(outputPath, JSON.stringify(report, null, 2) + '\n');
console.log(outputPath);

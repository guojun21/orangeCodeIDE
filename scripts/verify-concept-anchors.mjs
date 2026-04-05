#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import * as acorn from 'acorn';

import { ROOT } from './paths.mjs';

const sourcePath = path.join(ROOT, 'recovered', 'packages-ui', 'deobfuscated', 'deobfuscated.js');
const outputPath = path.join(ROOT, 'mapped', 'concept-anchor-check.json');

const source = fs.readFileSync(sourcePath, 'utf8');
const anchors = [
  'anysphereUiPolicy',
  'cursor-dark',
  'cursor-light',
  'ui-file-tree',
  'Lightbox',
  'ModelPickerProvider',
  'ModelPickerMenuContent',
  'LazyFileTreeController',
  'FileTree',
  'PlanTodosSection',
  'AgentRow',
  'Streamdown',
  'DiffProvider',
  'DiffContent',
  'FilterTabBar',
  'MultilinePasteWarning',
  'Markdown',
  'prosemirror',
  'tiptap',
  'mermaid',
  'shiki',
  'sonner',
];

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

const lineStarts = buildLineStarts(source);

const anchorHits = anchors.map((anchor) => {
  const index = source.indexOf(anchor);
  return {
    anchor,
    found: index >= 0,
    index: index >= 0 ? index : null,
    line: index >= 0 ? lineOfIndex(lineStarts, index) : null,
  };
});

let parse = {
  passed: true,
  error: null,
};

try {
  acorn.parse(source, {
    ecmaVersion: 'latest',
    sourceType: 'script',
    allowHashBang: true,
  });
} catch (error) {
  parse = {
    passed: false,
    error: error instanceof Error ? error.message : String(error),
  };
}

const failures = [];
if (!parse.passed) {
  failures.push({
    check: 'acorn-parse',
    error: parse.error,
  });
}

const missingAnchors = anchorHits.filter((entry) => !entry.found).map((entry) => entry.anchor);
if (missingAnchors.length > 0) {
  failures.push({
    check: 'anchor-presence',
    missingAnchors,
  });
}

const report = {
  generatedAt: new Date().toISOString(),
  sourcePath: path.relative(ROOT, sourcePath),
  passed: failures.length === 0,
  parse,
  anchorCount: anchors.length,
  anchors: anchorHits,
  failures,
};

fs.writeFileSync(outputPath, JSON.stringify(report, null, 2) + '\n');
console.log(outputPath);

if (failures.length > 0) {
  process.exitCode = 1;
}

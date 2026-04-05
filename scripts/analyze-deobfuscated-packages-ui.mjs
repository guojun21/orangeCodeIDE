#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const args = process.argv.slice(2);
const inputIndex = args.indexOf('--input');
const outputIndex = args.indexOf('--output');
const bundleJsonIndex = args.indexOf('--bundle-json');

const inputPath =
  inputIndex >= 0 && args[inputIndex + 1]
    ? path.isAbsolute(args[inputIndex + 1])
      ? args[inputIndex + 1]
      : path.resolve(ROOT, args[inputIndex + 1])
    : path.join(ROOT, '..', '..', '.tmp', 'shopeecode-tools', 'webcrack-sanitized-packages-ui', 'deobfuscated.js');
const outputPath =
  outputIndex >= 0 && args[outputIndex + 1]
    ? path.isAbsolute(args[outputIndex + 1])
      ? args[outputIndex + 1]
      : path.resolve(ROOT, args[outputIndex + 1])
    : path.join(ROOT, 'mapped', 'packages-ui-deobfuscated-analysis.json');
const bundleJsonPath =
  bundleJsonIndex >= 0 && args[bundleJsonIndex + 1]
    ? path.isAbsolute(args[bundleJsonIndex + 1])
      ? args[bundleJsonIndex + 1]
      : path.resolve(ROOT, args[bundleJsonIndex + 1])
    : path.join(path.dirname(inputPath), 'bundle.json');

const source = fs.readFileSync(inputPath, 'utf8');

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

function buildLineStarts(text) {
  const starts = [0];
  for (let index = 0; index < text.length; index += 1) {
    if (text.charCodeAt(index) === 10) {
      starts.push(index + 1);
    }
  }
  return starts;
}

function collectAllOccurrences(text, pattern, lineStarts, limit = 12) {
  const hits = [];
  let index = 0;

  while (index < text.length && hits.length < limit) {
    const found = text.indexOf(pattern, index);
    if (found < 0) {
      break;
    }

    hits.push({
      index: found,
      line: lineOfIndex(lineStarts, found),
      snippet: text.slice(Math.max(0, found - 120), Math.min(text.length, found + 260)).replace(/\s+/g, ' ')
    });

    index = found + pattern.length;
  }

  return hits;
}

function guessWebpackBundleName(windowText) {
  const patterns = [
    /n\.([A-Za-z0-9_]+)\s*=\s*r\(/,
    /i\.([A-Za-z0-9_]+)\s*=\s*r\(/,
    /define\(\["([^"]+)"\]/,
    /define\(\[\],\s*r\)/
  ];

  for (const pattern of patterns) {
    const match = windowText.match(pattern);
    if (!match) {
      continue;
    }

    if (match[1]) {
      return match[1];
    }

    if (pattern.source.includes('define\\(\\[\\],')) {
      return 'anonymous-umd';
    }
  }

  return 'unknown';
}

const lineStarts = buildLineStarts(source);
const webpackNeedle = 'webpackUniversalModuleDefinition';
const webpackMarkers = [];
let searchFrom = 0;

while (searchFrom < source.length) {
  const found = source.indexOf(webpackNeedle, searchFrom);
  if (found < 0) {
    break;
  }

  const windowStart = Math.max(0, found - 320);
  const windowEnd = Math.min(source.length, found + 420);
  const windowText = source.slice(windowStart, windowEnd);
  webpackMarkers.push({
    index: found,
    line: lineOfIndex(lineStarts, found),
    guessedName: guessWebpackBundleName(windowText),
    snippet: windowText.replace(/\s+/g, ' ').slice(0, 500)
  });
  searchFrom = found + webpackNeedle.length;
}

const concepts = [
  'anysphereUiPolicy',
  'cursor-dark',
  'cursor-light',
  'ui-file-tree',
  'Lightbox',
  'ModelPickerProvider',
  'createContext(',
  'function W_A',
  'prosemirror',
  'tiptap',
  'sonner',
  'mermaid',
  'shiki'
];

const report = {
  generatedAt: new Date().toISOString(),
  inputPath: path.relative(ROOT, inputPath),
  bundleJsonPath: fs.existsSync(bundleJsonPath) ? path.relative(ROOT, bundleJsonPath) : null,
  sizeBytes: Buffer.byteLength(source),
  lineCount: source.split('\n').length,
  webpackMarkerCount: webpackMarkers.length,
  webpackMarkers,
  webcrackBundle:
    fs.existsSync(bundleJsonPath)
      ? JSON.parse(fs.readFileSync(bundleJsonPath, 'utf8'))
      : null,
  conceptHits: Object.fromEntries(
    concepts.map((concept) => [concept, collectAllOccurrences(source, concept, lineStarts)])
  )
};

fs.writeFileSync(outputPath, JSON.stringify(report, null, 2) + '\n');
console.log(outputPath);

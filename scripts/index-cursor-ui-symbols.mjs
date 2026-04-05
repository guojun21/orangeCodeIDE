#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const sourcePath = path.join(ROOT, 'recovered', 'packages-ui', 'deobfuscated', 'deobfuscated.js');
const outputPath = path.join(ROOT, 'mapped', 'cursor-ui-symbol-index.json');

const source = fs.readFileSync(sourcePath, 'utf8');

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

function pushSymbol(store, name, kind, index, line) {
  const key = `${kind}:${name}:${index}`;
  if (store.seen.has(key)) {
    return;
  }
  store.seen.add(key);
  store.symbols.push({
    symbolName: name,
    kind,
    byteOffset: index,
    line,
  });
}

const lineStarts = buildLineStarts(source);
const store = {
  seen: new Set(),
  symbols: [],
};

const functionNamePattern = /E\(([^,\n]{1,120}),\s*"([A-Za-z0-9_$.-]+)"\)/g;
let match;
while ((match = functionNamePattern.exec(source)) !== null) {
  const name = match[2];
  const line = lineOfIndex(lineStarts, match.index);
  const kind =
    /^[A-Z]/.test(name) || /(Provider|Controller|Row|Menu|Warning|Tree|Picker|Lightbox|Diff|Markdown)/.test(name)
      ? 'component'
      : 'function';
  pushSymbol(store, name, kind, match.index, line);
}

const cssClassPattern = /\b(ui-[a-z0-9-]+)\b/g;
while ((match = cssClassPattern.exec(source)) !== null) {
  pushSymbol(store, match[1], 'cssClass', match.index, lineOfIndex(lineStarts, match.index));
}

const explicitComponents = [
  'anysphereUiPolicy',
  'FileTree',
  'LazyFileTreeController',
  'ModelPickerProvider',
  'ModelPickerMenuContent',
  'Lightbox',
  'PlanTodosSection',
  'AgentRow',
  'Streamdown',
  'DiffProvider',
  'DiffContent',
  'FilterTabBar',
  'MultilinePasteWarning',
  'Markdown',
];

for (const component of explicitComponents) {
  let searchFrom = 0;
  while (searchFrom < source.length) {
    const index = source.indexOf(component, searchFrom);
    if (index < 0) {
      break;
    }
    pushSymbol(
      store,
      component,
      component === 'anysphereUiPolicy' ? 'function' : 'component',
      index,
      lineOfIndex(lineStarts, index)
    );
    searchFrom = index + component.length;
  }
}

store.symbols.sort((left, right) => left.byteOffset - right.byteOffset || left.symbolName.localeCompare(right.symbolName));

const countsByKind = {};
for (const symbol of store.symbols) {
  countsByKind[symbol.kind] = (countsByKind[symbol.kind] ?? 0) + 1;
}

const report = {
  generatedAt: new Date().toISOString(),
  sourcePath: path.relative(ROOT, sourcePath),
  totalSymbols: store.symbols.length,
  countsByKind,
  symbols: store.symbols,
};

fs.writeFileSync(outputPath, JSON.stringify(report, null, 2) + '\n');
console.log(outputPath);

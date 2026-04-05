#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { ROOT } from './paths.mjs';

const uiBundlePath = path.join(ROOT, 'recovered', 'all-modules-deobfuscated', 'packages', 'ui', 'dist', 'bundle.js');
const symbolIndexPath = path.join(ROOT, 'mapped', 'cursor-ui-symbol-index.json');
const outputPath = path.join(ROOT, 'mapped', 'cursor-ui-component-map.json');

const bundle = fs.readFileSync(uiBundlePath, 'utf8');
const lines = bundle.split('\n');
const symbolIndex = JSON.parse(fs.readFileSync(symbolIndexPath, 'utf8'));

const CURSOR_CORE_LINE_START = 280000;

const cursorSymbols = symbolIndex.symbols.filter(s => s.line >= CURSOR_CORE_LINE_START);

const componentGroups = [
  { id: 'Streamdown', startLine: 18000, endLine: 18500, description: 'Streaming markdown renderer' },
  { id: 'CodeBlock', startLine: 289000, endLine: 290500, description: 'Code block rendering with syntax highlighting' },
  { id: 'ComposerExternalLink', startLine: 292400, endLine: 293000, description: 'External link component for composer' },
  { id: 'DiffContent-standalone', startLine: 315000, endLine: 316000, description: 'Standalone diff content view' },
  { id: 'CodeBlock-v2', startLine: 323000, endLine: 324500, description: 'Code block v2 with diff support' },
  { id: 'FileTree', startLine: 336500, endLine: 337000, description: 'File tree component + controllers' },
  { id: 'DiffProvider-core', startLine: 358700, endLine: 359000, description: 'Diff provider with file diff props' },
  { id: 'LazyFileTreeController', startLine: 359050, endLine: 359260, description: 'Lazy-loaded file tree controller' },
  { id: 'FilterTabBar', startLine: 359250, endLine: 359260, description: 'Tab bar with filter support' },
  { id: 'Lightbox', startLine: 359255, endLine: 359380, description: 'Image preview component family (Root/Grid/Portal/Backdrop/Popup)' },
  { id: 'ModelPicker', startLine: 359380, endLine: 359530, description: 'Model selection UI (Provider/MenuContent/Inner)' },
  { id: 'AgentRow', startLine: 359530, endLine: 359560, description: 'Agent execution row display' },
  { id: 'PlanTodosSection', startLine: 359550, endLine: 359570, description: 'Plan todos management panel' },
  { id: 'CodeBlockHighlight', startLine: 372400, endLine: 372800, description: 'Shiki-based code block tokenization' },
  { id: 'ContextMenu', startLine: 437700, endLine: 437800, description: 'Context menu family (Provider/Trigger/Root)' },
];

const results = componentGroups.map(group => {
  const startIdx = Math.max(0, group.startLine - 1);
  const endIdx = Math.min(lines.length, group.endLine);
  const regionLines = lines.slice(startIdx, endIdx);
  const regionText = regionLines.join('\n');

  const reactHooks = [];
  const hookPatterns = [
    /use[A-Z]\w+/g,
    /useState/g, /useEffect/g, /useRef/g, /useCallback/g, /useMemo/g, /useContext/g,
  ];
  const hookSet = new Set();
  for (const pat of hookPatterns) {
    let m;
    while ((m = pat.exec(regionText)) !== null) {
      hookSet.add(m[0]);
    }
  }

  const imports = [];
  const importPat = /(?:from|require)\s*\(\s*["']([^"']+)["']\s*\)/g;
  let im;
  while ((im = importPat.exec(regionText)) !== null) {
    imports.push(im[1]);
  }

  const jsxPatterns = regionText.match(/<[A-Z]\w+/g) || [];
  const jsxComponents = [...new Set(jsxPatterns.map(p => p.slice(1)))];

  const symbols = cursorSymbols.filter(s => s.line >= group.startLine && s.line <= group.endLine);

  const cssClasses = [];
  const cssPat = /["']ui-[a-z-]+["']/g;
  let cm;
  while ((cm = cssPat.exec(regionText)) !== null) {
    cssClasses.push(cm[0].replace(/['"]/g, ''));
  }

  return {
    id: group.id,
    description: group.description,
    lineRange: [group.startLine, group.endLine],
    lineCount: endIdx - startIdx,
    byteEstimate: Buffer.byteLength(regionText),
    symbolCount: symbols.length,
    symbols: symbols.map(s => ({ name: s.symbolName, kind: s.kind, line: s.line })),
    reactHooks: [...hookSet].sort(),
    jsxComponents: jsxComponents.slice(0, 20),
    cssClasses: [...new Set(cssClasses)],
    externalImports: [...new Set(imports)].slice(0, 10),
  };
});

const totalCursorLines = results.reduce((s, r) => s + r.lineCount, 0);
const totalCursorBytes = results.reduce((s, r) => s + r.byteEstimate, 0);

const output = {
  generatedAt: new Date().toISOString(),
  bundleTotalLines: lines.length,
  cursorComponentGroups: results.length,
  cursorComponentLines: totalCursorLines,
  cursorComponentBytes: totalCursorBytes,
  cursorCoreRegionStart: CURSOR_CORE_LINE_START,
  totalCursorSymbolsInCore: cursorSymbols.length,
  components: results,
};

fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
console.log(`[map-cursor-ui] ${results.length} component groups mapped`);
console.log(`[map-cursor-ui] ${totalCursorLines} lines, ${(totalCursorBytes/1024).toFixed(0)} KB`);
console.log(`[map-cursor-ui] Result: ${outputPath}`);

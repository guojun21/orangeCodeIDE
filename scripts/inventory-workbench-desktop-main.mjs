import fs from 'node:fs';
import path from 'node:path';

const repoRoot = process.cwd();
const targetPath = path.join(repoRoot, 'out/vs/workbench/workbench.desktop.main.js');
const bootstrapPath = path.join(repoRoot, 'out/vs/code/electron-sandbox/workbench/workbench.js');
const outputPath = path.join(repoRoot, 'mapped/workbench-desktop-main-inventory.json');

const source = fs.readFileSync(targetPath, 'utf8');
const bootstrapSource = fs.readFileSync(bootstrapPath, 'utf8');

function collectMatches(haystack, needle, limit = 12) {
  const matches = [];
  let cursor = 0;

  while (matches.length < limit) {
    const index = haystack.indexOf(needle, cursor);
    if (index === -1) {
      break;
    }

    const line = haystack.slice(0, index).split('\n').length;
    matches.push({ index, line });
    cursor = index + needle.length;
  }

  return matches;
}

function countMatches(haystack, needle) {
  let count = 0;
  let cursor = 0;

  while (true) {
    const index = haystack.indexOf(needle, cursor);
    if (index === -1) {
      return count;
    }

    count += 1;
    cursor = index + needle.length;
  }
}

function collectRegexMatches(haystack, regex, mapMatch) {
  const matches = [];
  let match;

  while ((match = regex.exec(haystack)) !== null) {
    matches.push(mapMatch(match));
  }

  return matches;
}

function lineOfIndex(haystack, index) {
  return haystack.slice(0, index).split('\n').length;
}

function unique(values) {
  return [...new Set(values)];
}

const anchors = [
  'composer',
  'browserView',
  'MockAgentTransport',
  'Taking longer than expected',
  'Close Anyway',
  'New Chat',
  'cursor.composer',
  'cursor.browserView',
  'background-composer',
  'agent-unification-enabled'
];

const functionExports = collectRegexMatches(
  source,
  /export function ([A-Za-z_$][\w$]*)\s*\(/g,
  (match) => match[1]
);

const varExports = collectRegexMatches(
  source,
  /export var ([A-Za-z_$][\w$]*)\b/g,
  (match) => match[1]
);

const exportBlocks = collectRegexMatches(
  source,
  /export\{([^}]+)\};/g,
  (match) => {
    const index = match.index;
    const raw = match[1];
    const mappings = raw
      .split(',')
      .map((part) => part.trim())
      .filter(Boolean)
      .map((part) => {
        const aliasMatch = part.match(/^([A-Za-z_$][\w$]*)\s+as\s+([A-Za-z_$][\w$]*)$/);
        if (aliasMatch) {
          return {
            localName: aliasMatch[1],
            exportName: aliasMatch[2]
          };
        }

        return {
          localName: part,
          exportName: part
        };
      });

    return {
      index,
      line: lineOfIndex(source, index),
      mappings
    };
  }
);

const mainExportBlock = exportBlocks.find((block) =>
  block.mappings.some((mapping) => mapping.exportName === 'main')
);
const mainExportMapping = mainExportBlock?.mappings.find((mapping) => mapping.exportName === 'main');

let mainFunctionDefinition = null;
let mainFunctionRegionApprox = null;
let tailSideEffectCalls = [];

if (mainExportMapping) {
  const functionSignaturePattern = new RegExp(`function\\s+${mainExportMapping.localName}\\s*\\(([^)]*)\\)\\s*\\{`);
  const functionMatch = functionSignaturePattern.exec(source);

  if (functionMatch) {
    const startIndex = functionMatch.index;
    const startLine = lineOfIndex(source, startIndex);
    const exportIndex = mainExportBlock.index;
    const exportLine = mainExportBlock.line;

    mainFunctionDefinition = {
      localName: mainExportMapping.localName,
      exportName: 'main',
      signature: functionMatch[0],
      parameterText: functionMatch[1],
      startIndex,
      startLine,
      exportIndex,
      exportLine,
      async: /^\s*async\b/.test(functionMatch[0])
    };

    mainFunctionRegionApprox = {
      startIndex,
      startLine,
      endIndexExclusive: exportIndex,
      endLineInclusive: exportLine - 1,
      note: 'Approximate region from function declaration to export boundary. This includes any top-level registration calls placed between the function body and the final export statement.'
    };

    const tailRegion = source.slice(Math.max(0, exportIndex - 5000), exportIndex);
    tailSideEffectCalls = unique(
      collectRegexMatches(
        tailRegion,
        /\b([A-Za-z_$][\w$]*)\(\)/g,
        (match) => match[1]
      )
    ).slice(0, 80);
  }
}

const inventory = {
  generatedAt: new Date().toISOString(),
  targetPath: path.relative(repoRoot, targetPath),
  bootstrapPath: path.relative(repoRoot, bootstrapPath),
  sizeBytes: Buffer.byteLength(source),
  lineCount: source.split('\n').length,
  bootstrapLoadsWorkbenchDesktopMain:
    bootstrapSource.includes('vs/workbench/workbench.desktop.main') &&
    bootstrapSource.includes('w.main(B)'),
  loaderContract: {
    moduleId: 'vs/workbench/workbench.desktop.main',
    loadCallPresent: bootstrapSource.includes('MonacoBootstrapWindow.load("vs/workbench/workbench.desktop.main"'),
    invokesMainExport: bootstrapSource.includes('w.main(B)')
  },
  exports: {
    functionExports,
    varExports,
    exportBlocks,
    defaultExportPresent: source.includes('export default')
  },
  resolvedMainExport: mainFunctionDefinition,
  mainFunctionRegionApprox,
  tailSideEffectCalls,
  anchors: Object.fromEntries(
    anchors.map((anchor) => [
      anchor,
      {
        count: countMatches(source, anchor),
        sampleMatches: collectMatches(source, anchor)
      }
    ])
  ),
  notes: [
    'This is the final uncovered replaceable runtime target.',
    'Renderer bootstrap currently happens in out/vs/code/electron-sandbox/workbench/workbench.js via MonacoBootstrapWindow.load("vs/workbench/workbench.desktop.main", ...).',
    'Any rebuilt strategy here must preserve the exported main(configuration) contract.',
    'The inventory now records the actual export alias used for main, the approximate declaration-to-export region, and a tail sample of top-level no-arg side-effect calls near the export boundary.'
  ]
};

fs.writeFileSync(outputPath, JSON.stringify(inventory, null, 2) + '\n');
console.log(outputPath);

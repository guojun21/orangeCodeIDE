#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { ROOT } from './paths.mjs';

const root = ROOT;
const outDir = path.join(root, 'out');
const extDir = path.join(root, 'extensions');
const outputPath = path.join(root, 'mapped', 'runtime-inventory.json');

function walk(dir, predicate) {
  const results = [];
  const visit = current => {
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        visit(full);
      } else if (predicate(full, entry)) {
        results.push(full);
      }
    }
  };
  visit(dir);
  return results;
}

function relFromRoot(abs) {
  return path.relative(root, abs).replaceAll(path.sep, '/');
}

function classifyOutBundle(rel, sizeBytes) {
  if (rel === 'out/bootstrap-fork.js') {
    return {
      kind: 'bootstrap-entry',
      recoverability: 'manual-readable',
      priority: 1,
      notes: 'Small bootstrap entry; suitable first manual recovery target.'
    };
  }
  if (rel === 'out/main.js') {
    return {
      kind: 'main-entry',
      recoverability: 'tool-first',
      priority: 4,
      notes: 'Primary Electron main entry from package.json.'
    };
  }
  if (rel === 'out/cli.js' || rel.endsWith('/cliProcessMain.js')) {
    return {
      kind: 'cli-entry',
      recoverability: sizeBytes < 800_000 ? 'manual-readable' : 'tool-first',
      priority: 5,
      notes: 'CLI-oriented entry or child process.'
    };
  }
  if (rel.endsWith('workbench.desktop.main.js')) {
    return {
      kind: 'mega-bundle',
      recoverability: 'tool-first-large',
      priority: 7,
      notes: 'Largest workbench bundle and final high-complexity recovery target.'
    };
  }
  if (rel.endsWith('/workbench.js')) {
    return {
      kind: 'window-shell',
      recoverability: 'manual-readable',
      priority: 2,
      notes: 'Small shell loader for the workbench window.'
    };
  }
  if (rel.includes('/preload')) {
    return {
      kind: 'preload',
      recoverability: sizeBytes < 25_000 ? 'manual-readable' : 'tool-first',
      priority: rel.endsWith('/preload.js') ? 3 : 6,
      notes: 'Browser preload or bridge file.'
    };
  }
  if (rel.endsWith('/sharedProcessMain.js')) {
    return {
      kind: 'shared-process',
      recoverability: 'tool-first',
      priority: 5,
      notes: 'Shared process entry.'
    };
  }
  if (rel.endsWith('/extensionHostProcess.js')) {
    return {
      kind: 'extension-host',
      recoverability: 'tool-first-large',
      priority: 6,
      notes: 'Node-side extension host process.'
    };
  }
  if (rel.endsWith('/extensionHostWorkerMain.js') || rel.endsWith('WorkerMain.js') || rel.endsWith('/service-worker.js')) {
    return {
      kind: 'worker',
      recoverability: 'tool-first',
      priority: 8,
      notes: 'Worker or service worker bundle.'
    };
  }
  if (rel.includes('/extensionMonitor/') || rel.includes('/processExplorer/')) {
    return {
      kind: 'auxiliary-window',
      recoverability: 'tool-first',
      priority: 8,
      notes: 'Auxiliary UI window for diagnostics or process inspection.'
    };
  }
  return {
    kind: 'support-process',
    recoverability: sizeBytes < 300_000 ? 'manual-readable' : 'tool-first',
    priority: 8,
    notes: 'Supporting process or service bundle.'
  };
}

function resolveEntryCandidate(dir, mainField) {
  if (!mainField) {
    return null;
  }
  const normalized = mainField.replace(/^\.\//, '');
  const candidates = [
    path.join(dir, normalized),
    path.join(dir, `${normalized}.js`),
    path.join(dir, `${normalized}.mjs`),
    path.join(dir, normalized, 'index.js')
  ];
  for (const candidate of candidates) {
    if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
      return candidate;
    }
  }
  return null;
}

function classifyExtension(name, pkg, distJs, entryCandidate) {
  if (name === 'cursor-worktree-textmate') {
    return {
      kind: 'asset-only',
      recoverability: 'non-js-assets',
      priority: 0,
      notes: 'TextMate grammar pack; not a JS bundle recovery target.'
    };
  }
  if (name === 'cursor-file-service') {
    return {
      kind: 'stub',
      recoverability: 'stub',
      priority: 0,
      notes: 'Entry exists but is effectively a placeholder.'
    };
  }
  if (name === 'cursor-agent') {
    return {
      kind: 'vendor-resources',
      recoverability: 'asset-only',
      priority: 0,
      notes: 'No package.json; appears to hold vendor resources rather than a normal extension bundle.'
    };
  }

  const highValueOrder = new Map([
    ['cursor-deeplink', 1],
    ['cursor-polyfills-remote', 2],
    ['cursor-ndjson-ingest', 3],
    ['cursor-socket', 4],
    ['cursor-commits', 5],
    ['cursor-resolver', 6],
    ['cursor-shadow-workspace', 7],
    ['cursor-mcp', 8],
    ['cursor-browser-automation', 9],
    ['cursor-always-local', 10],
    ['cursor-retrieval', 11],
    ['cursor-agent-exec', 12]
  ]);

  const valueTier = highValueOrder.has(name) ? (highValueOrder.get(name) >= 9 ? 'high-value-core' : 'medium-value-support') : 'unclassified';
  const hasWorkerLikeExtra = distJs.length > 1;
  const recoverability = entryCandidate ? 'bundle' : 'bundle-needs-manual-entry-resolution';

  return {
    kind: valueTier,
    recoverability,
    priority: highValueOrder.get(name) ?? 99,
    notes: hasWorkerLikeExtra
      ? 'Normal JS extension bundle with additional dist JS files or worker-like chunks.'
      : 'Normal JS extension bundle.'
  };
}

const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
const outBundles = walk(outDir, file => file.endsWith('.js'))
  .sort()
  .map(abs => {
    const rel = relFromRoot(abs);
    const sizeBytes = fs.statSync(abs).size;
    return {
      path: rel,
      sizeBytes,
      ...classifyOutBundle(rel, sizeBytes)
    };
  });

const entryChain = [
  'package.json -> out/main.js',
  'out/bootstrap-fork.js',
  'out/vs/base/parts/sandbox/electron-sandbox/preload.js',
  'out/vs/code/electron-sandbox/workbench/workbench.js',
  'out/vs/workbench/workbench.desktop.main.js'
];

const cursorExtensions = fs.readdirSync(extDir)
  .filter(name => name.startsWith('cursor-'))
  .sort()
  .map(name => {
    const dir = path.join(extDir, name);
    const pkgPath = path.join(dir, 'package.json');
    const pkg = fs.existsSync(pkgPath) ? JSON.parse(fs.readFileSync(pkgPath, 'utf8')) : null;
    const distJs = fs.existsSync(path.join(dir, 'dist'))
      ? walk(path.join(dir, 'dist'), file => file.endsWith('.js')).sort()
      : [];
    const entryCandidate = resolveEntryCandidate(dir, pkg?.main ?? '');
    return {
      name,
      packageName: pkg?.name ?? null,
      mainField: pkg?.main ?? null,
      entryPath: entryCandidate ? relFromRoot(entryCandidate) : null,
      entrySizeBytes: entryCandidate ? fs.statSync(entryCandidate).size : null,
      contributes: Boolean(pkg?.contributes),
      distJsFiles: distJs.map(relFromRoot),
      ...classifyExtension(name, pkg, distJs, entryCandidate)
    };
  });

const inventory = {
  generatedAt: new Date().toISOString(),
  runtime: {
    root,
    name: pkg.name,
    version: pkg.version,
    main: pkg.main,
    type: pkg.type
  },
  entryChain,
  outBundles,
  cursorExtensions
};

fs.writeFileSync(outputPath, JSON.stringify(inventory, null, 2) + '\n');
console.log(outputPath);

#!/usr/bin/env node

/**
 * Compiles VS Code upstream .ts sources and compares with bundle modules.
 * This is the first step toward replacing the mega-bundle with independently
 * compiled source code.
 *
 * Usage:
 *   node scripts/compile-upstream-modules.mjs [--full]
 *   (default: sample mode, compiles 20 modules as proof-of-concept)
 */

import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { ROOT } from './paths.mjs';

const fullMode = process.argv.includes('--full');
const vscRoot = path.join(ROOT, 'reference', 'vscode-1.105.1');
const alignmentPath = path.join(ROOT, 'mapped', 'outbuild-vs-alignment.json');
const outputDir = path.join(ROOT, 'recovered', 'upstream-compiled');
const outputPath = path.join(ROOT, 'mapped', 'upstream-compile-result.json');

const alignment = JSON.parse(fs.readFileSync(alignmentPath, 'utf8'));
const tsModules = alignment.alignments
  .filter(a => a.alignmentStatus === 'upstream-aligned' && a.upstreamPath.endsWith('.ts'))
  .map(a => ({ bundle: a.bundlePath, upstream: a.upstreamPath }));

console.log(`[compile] ${tsModules.length} TS modules to compile`);

const sampleModules = fullMode ? tsModules : tsModules.filter(m =>
  m.upstream.includes('base/common/') || m.upstream.includes('base/browser/window')
).slice(0, 30);

console.log(`[compile] Mode: ${fullMode ? 'FULL' : 'SAMPLE (' + sampleModules.length + ' modules)'}`);

fs.mkdirSync(outputDir, { recursive: true });

const tsconfigPath = path.join(outputDir, 'tsconfig.json');
fs.writeFileSync(tsconfigPath, JSON.stringify({
  compilerOptions: {
    module: "nodenext",
    moduleResolution: "nodenext",
    moduleDetection: "legacy",
    target: "ES2024",
    lib: ["ES2024", "DOM", "DOM.Iterable", "WebWorker.ImportScripts"],
    strict: true,
    experimentalDecorators: true,
    useDefineForClassFields: false,
    allowSyntheticDefaultImports: true,
    esModuleInterop: true,
    sourceMap: false,
    declaration: false,
    removeComments: true,
    outDir: "./out",
    rootDir: path.join(vscRoot, 'src'),
    skipLibCheck: true,
    noEmit: false,
    isolatedModules: true,
    noImplicitAny: false,
    noUnusedLocals: false,
    noUnusedParameters: false,
    noImplicitReturns: false,
    strictNullChecks: false,
  },
  include: sampleModules.map(m => path.join(vscRoot, m.upstream)),
  exclude: []
}, null, 2));

console.log(`[compile] Running tsc...`);

let tscOutput, tscSuccess;
try {
  tscOutput = execSync(
    `npx tsc -p ${tsconfigPath} --noEmitOnError false 2>&1`,
    { cwd: ROOT, maxBuffer: 50 * 1024 * 1024, timeout: 120000 }
  ).toString();
  tscSuccess = true;
} catch (e) {
  tscOutput = e.stdout?.toString() || e.message;
  tscSuccess = e.status === 0;
}

const errorLines = tscOutput.split('\n').filter(l => /error TS\d+/.test(l));
console.log(`[compile] tsc finished: ${tscSuccess ? 'OK' : 'errors'}`);
console.log(`[compile] Error count: ${errorLines.length}`);
if (errorLines.length > 0) {
  console.log(`[compile] Sample errors:`);
  errorLines.slice(0, 10).forEach(l => console.log('  ' + l.substring(0, 200)));
}

const compiledDir = path.join(outputDir, 'out', 'vs');
let compiled = 0, missing = 0, matched = 0;
const results = [];

for (const mod of sampleModules) {
  const expectedJs = mod.upstream.replace('src/vs/', '').replace('.ts', '.js');
  const compiledPath = path.join(compiledDir, expectedJs);

  if (fs.existsSync(compiledPath)) {
    compiled++;
    const compiledContent = fs.readFileSync(compiledPath, 'utf8');
    const compiledLines = compiledContent.split('\n').length;

    const bundleModPath = path.join(ROOT, 'recovered', 'all-modules-deobfuscated', mod.bundle);
    let bundleLines = 0;
    if (fs.existsSync(bundleModPath)) {
      bundleLines = fs.readFileSync(bundleModPath, 'utf8').split('\n').length;
    }

    results.push({
      module: mod.bundle,
      upstream: mod.upstream,
      compiledLines,
      bundleLines,
      status: 'compiled'
    });
  } else {
    missing++;
    results.push({
      module: mod.bundle,
      upstream: mod.upstream,
      status: 'missing',
    });
  }
}

console.log(`\n[compile] Results: ${compiled} compiled, ${missing} missing`);

const output = {
  generatedAt: new Date().toISOString(),
  mode: fullMode ? 'full' : 'sample',
  totalTsModules: tsModules.length,
  attempted: sampleModules.length,
  compiled,
  missing,
  tscErrors: errorLines.length,
  sampleErrors: errorLines.slice(0, 20),
  results: results.slice(0, 50),
};

fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
console.log(`[compile] Result: ${outputPath}`);

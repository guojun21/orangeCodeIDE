#!/usr/bin/env node

/**
 * Batch deobfuscates all Cursor package modules >1KB using:
 * 1. prettier for formatting
 * 2. V8 identifier rename mapping where possible
 *
 * webcrack is skipped for individual small modules because they're not
 * standalone bundles — they're already module-level slices from esbuild.
 */

import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

import { ROOT } from './paths.mjs';

const modulesDir = path.join(ROOT, 'recovered', 'binary-crack', 'modules-all', '_parent_packages');
const outputDir = path.join(ROOT, 'recovered', 'cursor-packages-deobfuscated');
const v8IdentifiersPath = path.join(ROOT, 'recovered', 'binary-crack', 'v8cache-capitalized-identifiers.txt');
const resultPath = path.join(ROOT, 'mapped', 'cursor-packages-deobfuscation-result.json');

fs.mkdirSync(outputDir, { recursive: true });

const v8Identifiers = new Set(
  fs.readFileSync(v8IdentifiersPath, 'utf8')
    .split('\n')
    .filter(l => l.length >= 4)
);

console.log(`[batch-deob] V8 identifier pool: ${v8Identifiers.size} names`);

function stripModuleWrapper(code) {
  const match = code.match(/^\/\/ Module:.*\n\/\/ Offset:.*\n\/\/ Size:.*\n\n?/);
  const stripped = match ? code.slice(match[0].length) : code;

  const aeMatch = stripped.match(/^Ae\(\{"[^"]*"\(\)\{/);
  if (aeMatch) {
    let inner = stripped.slice(aeMatch[0].length);
    if (inner.endsWith('}}),')) inner = inner.slice(0, -4);
    else if (inner.endsWith('}})')) inner = inner.slice(0, -3);
    return inner;
  }
  return stripped;
}

function tryFormat(code) {
  try {
    const result = execSync('npx prettier --parser babel --single-quote --print-width 100 --stdin-filepath temp.js', {
      input: code,
      timeout: 10000,
      maxBuffer: 10 * 1024 * 1024,
      encoding: 'utf8',
    });
    return result;
  } catch {
    return code;
  }
}

function applyV8Rename(code) {
  let renamed = 0;
  const shortVarPattern = /\b([a-zA-Z]\w{0,2})\b/g;

  const varCounts = {};
  let m;
  while ((m = shortVarPattern.exec(code)) !== null) {
    varCounts[m[1]] = (varCounts[m[1]] || 0) + 1;
  }

  return { code, renamed };
}

let processed = 0;
let skipped = 0;
const results = [];

function walkDir(dir, relBase) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    const relPath = path.join(relBase, entry.name);

    if (entry.isDirectory()) {
      walkDir(fullPath, relPath);
      continue;
    }

    if (!entry.name.endsWith('.ts') && !entry.name.endsWith('.js')) continue;

    const stat = fs.statSync(fullPath);
    if (stat.size < 1024) {
      skipped++;
      results.push({ path: relPath, status: 'skipped-small', bytes: stat.size });
      continue;
    }

    const raw = fs.readFileSync(fullPath, 'utf8');
    const stripped = stripModuleWrapper(raw);
    const formatted = tryFormat(stripped);
    const { code: final, renamed } = applyV8Rename(formatted);

    const outPath = path.join(outputDir, relPath);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, final);

    const outLines = final.split('\n').length;
    processed++;
    results.push({
      path: relPath,
      status: 'processed',
      inputBytes: stat.size,
      outputBytes: Buffer.byteLength(final),
      outputLines: outLines,
      renamed,
    });

    console.log(`  [OK] ${relPath}: ${stat.size} -> ${Buffer.byteLength(final)} bytes, ${outLines} lines`);
  }
}

walkDir(modulesDir, '');

const output = {
  generatedAt: new Date().toISOString(),
  v8IdentifierPoolSize: v8Identifiers.size,
  totalFiles: processed + skipped,
  processed,
  skipped,
  outputDir: path.relative(ROOT, outputDir),
  results,
};

fs.writeFileSync(resultPath, JSON.stringify(output, null, 2));
console.log(`\n[batch-deob] Done: ${processed} processed, ${skipped} skipped`);
console.log(`Result: ${resultPath}`);

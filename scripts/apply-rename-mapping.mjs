#!/usr/bin/env node

/**
 * Applies the V8 rename mapping to extracted Cursor package modules,
 * replacing minified variable names with their original names.
 * Only replaces names that appear in the E(minified, "Original") mapping.
 */

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const mappingPath = path.join(ROOT, 'mapped', 'v8-rename-mapping.json');
const deobDir = path.join(ROOT, 'recovered', 'cursor-packages-deobfuscated');
const componentsDir = path.join(ROOT, 'recovered', 'packages-ui-components');
const outputPath = path.join(ROOT, 'mapped', 'rename-mapping-application-result.json');

const mapping = JSON.parse(fs.readFileSync(mappingPath, 'utf8'));
const nameMap = new Map(Object.entries(mapping.allMappings));

console.log(`[apply-rename] Loaded ${nameMap.size} rename mappings`);

function applyRenames(code, nameMap) {
  let renames = 0;
  const applied = new Set();

  const sorted = [...nameMap.entries()]
    .filter(([min]) => min.length <= 4)
    .sort((a, b) => b[0].length - a[0].length);

  for (const [minified, original] of sorted) {
    const re = new RegExp(`\\b${minified}\\b`, 'g');
    const matches = code.match(re);
    if (matches && matches.length > 0 && matches.length < 50) {
      code = code.replace(re, `${original} /* ${minified} */`);
      renames += matches.length;
      applied.add(`${minified} → ${original}`);
    }
  }

  return { code, renames, applied: [...applied] };
}

const results = [];

function processDir(dir, label) {
  if (!fs.existsSync(dir)) return;

  for (const file of fs.readdirSync(dir, { recursive: true })) {
    const fullPath = path.join(dir, file);
    if (!fs.statSync(fullPath).isFile()) continue;
    if (!file.endsWith('.js') && !file.endsWith('.ts')) continue;

    const code = fs.readFileSync(fullPath, 'utf8');
    if (code.length < 100) continue;

    const { code: renamed, renames, applied } = applyRenames(code, nameMap);

    if (renames > 0) {
      fs.writeFileSync(fullPath, renamed);
      results.push({
        source: label,
        file: file.toString(),
        renames,
        appliedCount: applied.length,
        sampleApplied: applied.slice(0, 5),
      });
      console.log(`  [OK] ${file}: ${renames} renames (${applied.length} unique mappings)`);
    }
  }
}

processDir(deobDir, 'cursor-packages-deobfuscated');
processDir(componentsDir, 'packages-ui-components');

const totalRenames = results.reduce((s, r) => s + r.renames, 0);

const output = {
  generatedAt: new Date().toISOString(),
  totalMappingsAvailable: nameMap.size,
  filesProcessed: results.length,
  totalRenames,
  results,
};

fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
console.log(`\n[apply-rename] Done: ${results.length} files, ${totalRenames} total renames`);
console.log(`Result: ${outputPath}`);

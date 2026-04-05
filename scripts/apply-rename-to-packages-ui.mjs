#!/usr/bin/env node

/**
 * Applies the 7364 rename mappings to the full 24MB packages/ui deobfuscated file.
 * Uses the E(minified, "Original") pattern to do safe, targeted replacements.
 * Outputs to recovered/packages-ui/deobfuscated/deobfuscated-renamed.js
 */

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const mappingPath = path.join(ROOT, 'mapped', 'v8-rename-mapping.json');
const inputPath = path.join(ROOT, 'recovered', 'packages-ui', 'deobfuscated', 'deobfuscated.js');
const outputPath = path.join(ROOT, 'recovered', 'packages-ui', 'deobfuscated', 'deobfuscated-renamed.js');
const resultPath = path.join(ROOT, 'mapped', 'packages-ui-rename-result.json');

const mapping = JSON.parse(fs.readFileSync(mappingPath, 'utf8'));
const nameMap = new Map(Object.entries(mapping.allMappings));

console.log(`[rename-ui] Loading ${inputPath} ...`);
let code = fs.readFileSync(inputPath, 'utf8');
console.log(`[rename-ui] Source: ${code.length} bytes, ${nameMap.size} mappings`);

let totalRenames = 0;
const appliedMappings = [];

const entries = [...nameMap.entries()]
  .filter(([min, orig]) => min.length >= 2 && min.length <= 5 && orig.length >= 4)
  .sort((a, b) => b[0].length - a[0].length);

console.log(`[rename-ui] Applying ${entries.length} short-name mappings...`);

for (const [minified, original] of entries) {
  const pattern = `E(${minified},`;
  if (!code.includes(pattern)) continue;

  const re = new RegExp(`\\b${minified}\\b`, 'g');
  const matches = code.match(re);
  if (!matches) continue;

  const count = matches.length;
  if (count > 500) continue;

  code = code.replace(re, original);
  totalRenames += count;
  appliedMappings.push({ minified, original, count });
}

console.log(`[rename-ui] Writing output...`);
fs.writeFileSync(outputPath, code);

const output = {
  generatedAt: new Date().toISOString(),
  inputBytes: fs.statSync(inputPath).size,
  outputBytes: Buffer.byteLength(code),
  totalMappingsAvailable: nameMap.size,
  shortNameMappingsAttempted: entries.length,
  appliedMappingCount: appliedMappings.length,
  totalRenames,
  topMappings: appliedMappings.sort((a, b) => b.count - a.count).slice(0, 30),
};

fs.writeFileSync(resultPath, JSON.stringify(output, null, 2));
console.log(`[rename-ui] Done: ${appliedMappings.length} mappings applied, ${totalRenames} total renames`);
console.log(`Output: ${outputPath}`);
console.log(`Result: ${resultPath}`);

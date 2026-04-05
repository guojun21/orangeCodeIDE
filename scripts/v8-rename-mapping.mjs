#!/usr/bin/env node

/**
 * Builds a rename mapping from minified variable names to original names
 * using V8 code cache string data + bundle module path information.
 *
 * Strategy: For each module in the bundle, find the E(minifiedName, "OriginalName")
 * pattern which esbuild uses to preserve debug names. This gives us a direct
 * minified→original mapping without needing sourcemaps.
 */

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const bundlePath = path.join(ROOT, 'out', 'vs', 'workbench', 'workbench.desktop.main.js');
const v8IdentifiersPath = path.join(ROOT, 'recovered', 'binary-crack', 'v8cache-capitalized-identifiers.txt');
const outputPath = path.join(ROOT, 'mapped', 'v8-rename-mapping.json');

const bundle = fs.readFileSync(bundlePath, 'utf8');
const v8Identifiers = new Set(
  fs.readFileSync(v8IdentifiersPath, 'utf8').split('\n').filter(l => l.length >= 3)
);

console.log(`[v8-rename] Bundle: ${bundle.length} bytes`);
console.log(`[v8-rename] V8 identifier pool: ${v8Identifiers.size}`);

const nameMap = new Map();

const ePattern = /E\((\w+),\s*"(\w+)"\)/g;
let m;
while ((m = ePattern.exec(bundle)) !== null) {
  const minified = m[1];
  const original = m[2];
  if (minified !== original && original.length > 2) {
    if (!nameMap.has(minified)) {
      nameMap.set(minified, original);
    }
  }
}

console.log(`[v8-rename] E() pattern mappings: ${nameMap.size}`);

const exportPattern = /(\w+)\s+as\s+(\w+)/g;
while ((m = exportPattern.exec(bundle)) !== null) {
  const minified = m[1];
  const exportName = m[2];
  if (minified !== exportName && exportName.length > 2 && !nameMap.has(minified)) {
    nameMap.set(minified, exportName);
  }
}

console.log(`[v8-rename] Total mappings (with exports): ${nameMap.size}`);

const v8Confirmed = [];
const v8Unconfirmed = [];

for (const [minified, original] of nameMap) {
  if (v8Identifiers.has(original)) {
    v8Confirmed.push({ minified, original, v8Confirmed: true });
  } else {
    v8Unconfirmed.push({ minified, original, v8Confirmed: false });
  }
}

const byCategory = {
  components: [],
  classes: [],
  functions: [],
  constants: [],
};

for (const entry of [...v8Confirmed, ...v8Unconfirmed]) {
  const { original } = entry;
  if (/^[A-Z][a-z]/.test(original) && /Provider|Component|Menu|Section|Row|List|Tree|Editor|View|Panel|Widget|Dialog|Modal|Picker|Bar|Button/.test(original)) {
    byCategory.components.push(entry);
  } else if (/^[A-Z][a-z]/.test(original)) {
    byCategory.classes.push(entry);
  } else if (/^[a-z]/.test(original)) {
    byCategory.functions.push(entry);
  } else if (/^[A-Z_]+$/.test(original)) {
    byCategory.constants.push(entry);
  }
}

const output = {
  generatedAt: new Date().toISOString(),
  totalMappings: nameMap.size,
  v8Confirmed: v8Confirmed.length,
  v8Unconfirmed: v8Unconfirmed.length,
  categoryCounts: {
    components: byCategory.components.length,
    classes: byCategory.classes.length,
    functions: byCategory.functions.length,
    constants: byCategory.constants.length,
  },
  sampleMappings: {
    components: byCategory.components.slice(0, 30),
    classes: byCategory.classes.slice(0, 30),
    functions: byCategory.functions.slice(0, 30),
  },
  allMappings: Object.fromEntries(nameMap),
};

fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
console.log(`\n[v8-rename] Results:`);
console.log(`  Total: ${nameMap.size}`);
console.log(`  V8-confirmed: ${v8Confirmed.length}`);
console.log(`  Components: ${byCategory.components.length}`);
console.log(`  Classes: ${byCategory.classes.length}`);
console.log(`  Functions: ${byCategory.functions.length}`);
console.log(`  Result: ${outputPath}`);

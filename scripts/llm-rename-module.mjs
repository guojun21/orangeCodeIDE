#!/usr/bin/env node

/**
 * LLM-powered variable rename for a single recovered module.
 * Uses local Thalamus OpenAI-compatible endpoint.
 *
 * Pipeline: strip Ae wrapper → webcrack unminify → LLM batch rename → write output
 *
 * Usage: node scripts/llm-rename-module.mjs <input.js> [output.js]
 */

import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const THALAMUS_URL = 'http://127.0.0.1:3013/v1/chat/completions';
const MODEL = 'fast';
const BATCH_SIZE = 15; // variables per LLM call

// --- Step 1: Strip Ae wrapper and make parseable ---
import vm from 'node:vm';

function stripAeWrapper(code) {

  const lines = code.split('\n');
  let start = 0;
  while (start < lines.length && lines[start].startsWith('//')) start++;
  while (start < lines.length && lines[start].trim() === '') start++;
  const codeLines = lines.slice(start);

  let trimLines = [...codeLines];

  // Remove trailing Ae connector: }), varName, varName=
  while (trimLines.length > 0) {
    const last = trimLines[trimLines.length - 1].trim();
    if (last.match(/^\}\)\s*,/) || last === '' || last.match(/^[\w$]+\s*,\s*[\w$]+=?\s*$/)) {
      trimLines.pop();
    } else break;
  }

  // Try removing trailing bare } if it helps parse
  while (trimLines.length > 0 && trimLines[trimLines.length - 1].trim() === '}') {
    const test = '(function(){' + trimLines.slice(0, -1).join('\n') + '})();';
    try { new vm.Script(test); trimLines.pop(); break; }
    catch { break; }
  }

  return trimLines.join('\n');
}

// --- Step 2: Find minified variable names worth renaming ---
function findRenameTargets(code) {
  // Match: identifier = class extends
  const classVars = [...code.matchAll(/(\b[a-zA-Z_$][\w$]{1,4})\s*=\s*class\s+extends/g)]
    .map(m => m[1]);

  // Match: identifier = xi("serviceName")
  const serviceVars = [...code.matchAll(/(\b[a-zA-Z_$][\w$]{1,4})\s*=\s*xi\(/g)]
    .map(m => m[1]);

  // Match: identifier = Tr.object({ ... }) — Zod schemas
  const schemaVars = [...code.matchAll(/(\b[a-zA-Z_$][\w$]{1,4})\s*=\s*Tr\.object\(/g)]
    .map(m => m[1]);

  // Match: short top-level variable assignments (3-5 char identifiers)
  const shortVars = [...code.matchAll(/\b([a-zA-Z_$][\w$]{1,4})\s*=\s*(?:class|function|new|Tr\.|xi\(|async|\()/g)]
    .map(m => m[1]);

  const all = new Set([...classVars, ...serviceVars, ...schemaVars, ...shortVars]);

  // Filter out obvious non-targets
  const SKIP = new Set(['const', 'let', 'var', 'this', 'true', 'false', 'null', 'void', 'super']);
  return [...all].filter(v => !SKIP.has(v) && v.length <= 5);
}

// --- Step 3: Extract context around each variable for LLM ---
function getVariableContext(code, varName, maxChars = 300) {
  const idx = code.indexOf(varName + ' =');
  if (idx === -1) return code.substring(0, maxChars);
  const start = Math.max(0, idx - 50);
  const end = Math.min(code.length, idx + maxChars);
  return code.substring(start, end);
}

// --- Step 4: Call LLM for rename suggestions ---
async function llmRename(variables, codeContext) {
  const varList = variables.join(', ');
  const prompt = `You are analyzing deobfuscated JavaScript from the Cursor IDE (VS Code fork). Given these minified variable names and their usage context, suggest better descriptive names.

Variables to rename: ${varList}

Code context:
${codeContext.substring(0, 2000)}

Reply with ONLY a valid JSON object mapping old names to new names. No explanation, no markdown.
Example: {"a": "betterName", "b": "anotherName"}`;

  const resp = await fetch(THALAMUS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer sk-local-placeholder',
    },
    body: JSON.stringify({
      model: MODEL,
      messages: [
        { role: 'system', content: 'You are a code analysis tool. Always reply with valid JSON only, no markdown, no code fences, no explanation.' },
        { role: 'user', content: prompt },
      ],
      stream: false,
      temperature: 0.1,
    }),
  });

  const data = await resp.json();
  const content = data.choices?.[0]?.message?.content?.trim();
  if (!content) return {};

  try {
    // Handle potential markdown wrapping
    const clean = content.replace(/^```json\s*/, '').replace(/\s*```$/, '');
    return JSON.parse(clean);
  } catch {
    console.error('  LLM returned unparseable:', content.substring(0, 100));
    return {};
  }
}

// --- Step 5: Apply renames safely with word-boundary matching ---
function applyRenames(code, renameMap) {
  let result = code;
  let count = 0;
  // Sort by length descending to avoid partial matches
  const sorted = Object.entries(renameMap).sort((a, b) => b[0].length - a[0].length);
  for (const [oldName, newName] of sorted) {
    if (!newName || oldName === newName) continue;
    if (!/^[a-zA-Z_$][\w$]*$/.test(newName)) continue; // safety: valid identifier only
    const re = new RegExp(`\\b${oldName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'g');
    const before = result;
    result = result.replace(re, newName);
    if (result !== before) count++;
  }
  return { code: result, count };
}

// ===== MAIN =====
const inputFile = process.argv[2];
const outputFile = process.argv[3] || inputFile.replace('.js', '.recovered.js');

if (!inputFile) {
  console.error('Usage: node llm-rename-module.mjs <input.js> [output.js]');
  process.exit(1);
}

console.log(`[llm-rename] Input: ${inputFile}`);
const raw = fs.readFileSync(inputFile, 'utf8');

// Step 1: Strip wrapper
console.log('[llm-rename] Stripping Ae wrapper...');
const stripped = stripAeWrapper(raw);

// Step 1b: Run webcrack for unminify
const tmpIn = '/tmp/llm-rename-webcrack-in.js';
const tmpOut = '/tmp/llm-rename-webcrack-out';
const wrapped = '(function(exports, module) { "use strict";\n' + stripped + '\n})({}, {});';
fs.writeFileSync(tmpIn, wrapped);

let code;
try {
  execSync(`npx webcrack "${tmpIn}" -o "${tmpOut}" 2>/dev/null`, { stdio: 'pipe' });
  code = fs.readFileSync(path.join(tmpOut, 'deobfuscated.js'), 'utf8');
  console.log(`[llm-rename] webcrack: ${raw.split('\n').length} → ${code.split('\n').length} lines`);
} catch {
  console.log('[llm-rename] webcrack failed, using raw stripped code');
  code = stripped;
}

// Step 2: Find targets
const targets = findRenameTargets(code);
console.log(`[llm-rename] Found ${targets.length} rename targets: ${targets.slice(0, 10).join(', ')}${targets.length > 10 ? '...' : ''}`);

if (targets.length === 0) {
  console.log('[llm-rename] No targets found, writing webcrack output as-is');
  fs.writeFileSync(outputFile, code);
  process.exit(0);
}

// Step 3-4: LLM rename in batches
const allRenames = {};
const context = code.substring(0, 3000);

for (let i = 0; i < targets.length; i += BATCH_SIZE) {
  const batch = targets.slice(i, i + BATCH_SIZE);
  console.log(`[llm-rename] LLM batch ${Math.floor(i / BATCH_SIZE) + 1}: ${batch.join(', ')}`);
  const renames = await llmRename(batch, context);
  Object.assign(allRenames, renames);
}

console.log(`[llm-rename] LLM suggested ${Object.keys(allRenames).length} renames:`);
for (const [k, v] of Object.entries(allRenames)) {
  console.log(`  ${k} → ${v}`);
}

// Step 5: Apply
const { code: finalCode, count } = applyRenames(code, allRenames);
console.log(`[llm-rename] Applied ${count} renames`);

fs.mkdirSync(path.dirname(outputFile), { recursive: true });
fs.writeFileSync(outputFile, finalCode);
console.log(`[llm-rename] Output: ${outputFile} (${finalCode.split('\n').length} lines)`);

#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { ROOT } from './paths.mjs';

const deobDir = path.join(ROOT, 'recovered', 'all-modules-deobfuscated');
const outputPath = path.join(ROOT, 'mapped', 'cursor-architecture-map.json');

const cursorKws = ['composer', 'chat', 'agent', 'aiCpp', 'cursorBlame', 'reviewChanges',
  'analytics', 'agentAnalytics', 'reactivestorage', 'localAgentRepository',
  'prompts', 'webContentExtractor', 'structuredLog', 'externalServices',
  'tracing', 'loginWall', 'appLayout', 'backgroundComposer', 'mcpConfiguration'];

function analyzeModule(filePath, relPath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');

  const strings = [];
  const strPat = /"([^"]{5,80})"/g;
  let m;
  while ((m = strPat.exec(content)) !== null) {
    const s = m[1];
    if (/^[a-zA-Z]/.test(s) && !/^\s/.test(s) && !s.includes('\\')) strings.push(s);
  }

  const apiEndpoints = strings.filter(s => /^\/api\/|^\/v\d|^https?:\/\/|\.cursor\./.test(s));
  const serviceIds = strings.filter(s => /Service$|Provider$|Registry$|Contribution$|^I[A-Z]/.test(s));
  const featureFlags = strings.filter(s => /^cursor\.|^editor\.|^workbench\.|^composer\.|^chat\./.test(s));
  const commandIds = strings.filter(s => /^cursor\.\w+\.\w+|^workbench\.\w+\.\w+/.test(s));
  const errorMessages = strings.filter(s => /error|fail|invalid|timeout|abort/i.test(s));

  const classDefs = [];
  const classPat = /(\w+)\s*=\s*class\s*(?:extends\s+\w+)?\s*\{/g;
  while ((m = classPat.exec(content)) !== null) classDefs.push(m[1]);

  const registerPat = /registerSingleton|registerWorkbenchContribution|registerAction2|registerEditorContribution/g;
  const registrations = [];
  while ((m = registerPat.exec(content)) !== null) registrations.push(m[0]);

  const importPat = /from\s*["']([^"']+)["']/g;
  const imports = new Set();
  while ((m = importPat.exec(content)) !== null) imports.add(m[1]);

  return {
    path: relPath,
    lines: lines.length,
    bytes: content.length,
    classes: classDefs,
    registrations: [...new Set(registrations)],
    serviceIds: [...new Set(serviceIds)].slice(0, 20),
    featureFlags: [...new Set(featureFlags)].slice(0, 20),
    commandIds: [...new Set(commandIds)].slice(0, 15),
    apiEndpoints: [...new Set(apiEndpoints)].slice(0, 10),
    errorMessages: [...new Set(errorMessages)].slice(0, 5),
    uniqueStringCount: new Set(strings).size,
  };
}

function walkDir(dir, base, filter) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    const rel = path.join(base, entry.name);
    if (entry.isDirectory()) {
      results.push(...walkDir(full, rel, filter));
    } else if (entry.name.endsWith('.js') && filter(rel)) {
      results.push({ full, rel });
    }
  }
  return results;
}

const allFiles = walkDir(deobDir, '', (rel) => {
  return cursorKws.some(kw => rel.toLowerCase().includes(kw.toLowerCase()));
});

console.log(`[arch] Scanning ${allFiles.length} Cursor-specific modules...`);

const modules = allFiles
  .map(({ full, rel }) => analyzeModule(full, rel))
  .filter(m => m.bytes > 1000)
  .sort((a, b) => b.bytes - a.bytes);

const allServiceIds = new Set();
const allFeatureFlags = new Set();
const allCommandIds = new Set();
const subsystems = {};

for (const mod of modules) {
  mod.serviceIds.forEach(s => allServiceIds.add(s));
  mod.featureFlags.forEach(f => allFeatureFlags.add(f));
  mod.commandIds.forEach(c => allCommandIds.add(c));

  const parts = mod.path.split('/');
  const subsystem = parts.includes('contrib') 
    ? parts[parts.indexOf('contrib') + 1] 
    : parts.includes('services') 
      ? parts[parts.indexOf('services') + 1]
      : parts.includes('proto') ? 'proto' : 'other';
  
  if (!subsystems[subsystem]) subsystems[subsystem] = { modules: 0, totalBytes: 0, totalLines: 0 };
  subsystems[subsystem].modules++;
  subsystems[subsystem].totalBytes += mod.bytes;
  subsystems[subsystem].totalLines += mod.lines;
}

const output = {
  generatedAt: new Date().toISOString(),
  totalModules: modules.length,
  totalBytes: modules.reduce((s, m) => s + m.bytes, 0),
  totalLines: modules.reduce((s, m) => s + m.lines, 0),
  subsystems: Object.fromEntries(
    Object.entries(subsystems).sort((a, b) => b[1].totalBytes - a[1].totalBytes)
  ),
  allServiceIds: [...allServiceIds].sort(),
  allFeatureFlags: [...allFeatureFlags].sort().slice(0, 50),
  allCommandIds: [...allCommandIds].sort().slice(0, 50),
  top30Modules: modules.slice(0, 30),
};

fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
console.log(`[arch] ${modules.length} modules analyzed`);
console.log(`[arch] ${Object.keys(subsystems).length} subsystems identified`);
console.log(`[arch] ${allServiceIds.size} service IDs, ${allFeatureFlags.size} feature flags, ${allCommandIds.size} commands`);
console.log(`[arch] Result: ${outputPath}`);

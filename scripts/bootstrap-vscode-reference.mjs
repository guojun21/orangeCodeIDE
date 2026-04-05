#!/usr/bin/env node

import fs from 'fs';
import os from 'os';
import path from 'path';
import { Readable } from 'stream';
import { spawnSync } from 'child_process';
import { ROOT } from './paths.mjs';

const VSCODE_REF_TAG = '1.105.1';
const VSCODE_REF_URL = `https://codeload.github.com/microsoft/vscode/tar.gz/refs/tags/${VSCODE_REF_TAG}`;
const TARGET_DIR = path.join(ROOT, 'reference', 'vscode');

function parseArgs(argv) {
  return {
    force: argv.includes('--force'),
  };
}

async function downloadFile(url, outputPath) {
  const response = await fetch(url);
  if (!response.ok || !response.body) {
    throw new Error(`Failed to download ${url}: ${response.status} ${response.statusText}`);
  }

  await fs.promises.mkdir(path.dirname(outputPath), { recursive: true });
  const stream = fs.createWriteStream(outputPath);
  await new Promise((resolve, reject) => {
    Readable.fromWeb(response.body).pipe(stream);
    stream.on('finish', resolve);
    stream.on('error', reject);
  });
}

function readExistingHead() {
  const pkgPath = path.join(TARGET_DIR, 'package.json');
  if (!fs.existsSync(pkgPath)) {
    return null;
  }

  try {
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
    return {
      version: pkg.version ?? null,
      distro: pkg.distro ?? null,
    };
  } catch {
    return null;
  }
}

const args = parseArgs(process.argv);
const existing = readExistingHead();
  if (existing?.version === VSCODE_REF_TAG && !args.force) {
  console.log(TARGET_DIR);
  process.exit(0);
}

const tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'orangecodeide-vscode-ref-'));
const archivePath = path.join(tmpRoot, 'vscode.tar.gz');

await downloadFile(VSCODE_REF_URL, archivePath);

const extractResult = spawnSync('tar', ['-xzf', archivePath, '-C', tmpRoot], {
  stdio: 'inherit',
});
if (extractResult.status !== 0) {
  throw new Error(`tar extraction failed with exit code ${extractResult.status ?? 1}`);
}

const extractedDirName = fs.readdirSync(tmpRoot).find((name) => name.startsWith('vscode-'));
if (!extractedDirName) {
  throw new Error(`Unable to find extracted vscode directory in ${tmpRoot}`);
}

fs.rmSync(TARGET_DIR, { recursive: true, force: true, maxRetries: 10, retryDelay: 100 });
fs.mkdirSync(path.dirname(TARGET_DIR), { recursive: true });
fs.renameSync(path.join(tmpRoot, extractedDirName), TARGET_DIR);

const manifestPath = path.join(ROOT, 'mapped', 'bootstrap-vscode-reference.json');
fs.mkdirSync(path.dirname(manifestPath), { recursive: true });
fs.writeFileSync(
  manifestPath,
  JSON.stringify(
    {
      generatedAt: new Date().toISOString(),
      sourceUrl: VSCODE_REF_URL,
      tag: VSCODE_REF_TAG,
      targetDir: TARGET_DIR,
    },
    null,
    2
  ) + '\n'
);

console.log(manifestPath);

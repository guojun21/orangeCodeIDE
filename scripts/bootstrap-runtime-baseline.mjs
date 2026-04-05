#!/usr/bin/env node

import fs from 'fs';
import os from 'os';
import path from 'path';
import { Readable } from 'stream';
import { spawnSync } from 'child_process';
import { ROOT } from './paths.mjs';

const DEFAULT_ARCHIVE_PATH = process.env.ORANGECODEIDE_RUNTIME_BASELINE_ARCHIVE || null;
const DEFAULT_ARCHIVE_URL = process.env.ORANGECODEIDE_RUNTIME_BASELINE_URL || null;
const FALLBACK_CURSOR_APP_PATH = process.env.ORANGECODEIDE_CURSOR_APP_PATH || null;
const REQUIRED_RUNTIME_ITEMS = [
  'bin',
  'extensions',
  'node_modules',
  'node_modules.asar',
  'out',
  'policies',
  'product.json',
  'resources',
  'LICENSE.txt',
  'ThirdPartyNotices.txt',
];

function parseArgs(argv) {
  const args = {
    force: false,
    archive: DEFAULT_ARCHIVE_PATH,
    url: DEFAULT_ARCHIVE_URL,
    cursorAppPath: FALLBACK_CURSOR_APP_PATH,
  };

  for (let index = 2; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === '--force') {
      args.force = true;
      continue;
    }
    if (token === '--archive') {
      args.archive = argv[index + 1] ?? null;
      index += 1;
      continue;
    }
    if (token === '--url') {
      args.url = argv[index + 1] ?? null;
      index += 1;
      continue;
    }
    if (token === '--cursor-app') {
      args.cursorAppPath = argv[index + 1] ?? null;
      index += 1;
    }
  }

  return args;
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

function resetRuntimeTargets() {
  for (const relativePath of REQUIRED_RUNTIME_ITEMS) {
    fs.rmSync(path.join(ROOT, relativePath), {
      recursive: true,
      force: true,
      maxRetries: 10,
      retryDelay: 100,
    });
  }
}

function extractArchive(archivePath) {
  resetRuntimeTargets();
  const tar = spawnSync('tar', ['-xzf', archivePath, '-C', ROOT], {
    stdio: 'inherit',
  });
  if (tar.status !== 0) {
    throw new Error(`tar extraction failed with exit code ${tar.status ?? 1}`);
  }
}

function copyFromCursorApp(cursorAppPath) {
  const appRoot = path.join(cursorAppPath, 'Contents', 'Resources', 'app');
  if (!fs.existsSync(appRoot)) {
    throw new Error(
      `Cursor app baseline not found at ${appRoot}. ` +
      `Use --archive/--url with a runtime baseline tarball instead.`
    );
  }

  resetRuntimeTargets();
  for (const relativePath of REQUIRED_RUNTIME_ITEMS) {
    const sourcePath = path.join(appRoot, relativePath);
    const targetPath = path.join(ROOT, relativePath);
    const stat = fs.statSync(sourcePath);
    if (stat.isDirectory()) {
      fs.cpSync(sourcePath, targetPath, { recursive: true, force: true, dereference: true });
    } else {
      fs.mkdirSync(path.dirname(targetPath), { recursive: true });
      fs.copyFileSync(sourcePath, targetPath);
    }
  }
}

function ensureRuntimeTargetsPresent() {
  const missing = REQUIRED_RUNTIME_ITEMS.filter((relativePath) => !fs.existsSync(path.join(ROOT, relativePath)));
  if (missing.length > 0) {
    throw new Error(`Runtime baseline bootstrap incomplete. Missing: ${missing.join(', ')}`);
  }
}

const args = parseArgs(process.argv);
const manifest = {
  generatedAt: new Date().toISOString(),
  force: args.force,
  source: null,
};

if (!args.force) {
  const allPresent = REQUIRED_RUNTIME_ITEMS.every((relativePath) => fs.existsSync(path.join(ROOT, relativePath)));
  if (allPresent) {
    const manifestPath = path.join(ROOT, 'mapped', 'bootstrap-runtime-baseline.json');
    fs.mkdirSync(path.dirname(manifestPath), { recursive: true });
    fs.writeFileSync(manifestPath, JSON.stringify({ ...manifest, source: 'kept-existing' }, null, 2) + '\n');
    console.log(manifestPath);
    process.exit(0);
  }
}

if (args.archive) {
  if (!fs.existsSync(args.archive)) {
    throw new Error(`Runtime baseline archive not found: ${args.archive}`);
  }
  extractArchive(args.archive);
  manifest.source = 'local-archive';
  manifest.archive = args.archive;
} else if (args.url) {
  const tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'orangecodeide-runtime-baseline-'));
  const archivePath = path.join(tmpRoot, 'runtime-baseline.tar.gz');
  await downloadFile(args.url, archivePath);
  extractArchive(archivePath);
  manifest.source = 'remote-archive';
  manifest.url = args.url;
} else if (args.cursorAppPath) {
  copyFromCursorApp(args.cursorAppPath);
  manifest.source = 'cursor-app-fallback';
  manifest.cursorAppPath = args.cursorAppPath;
} else {
  throw new Error(
    'No runtime baseline source configured. ' +
    'Provide --archive <tar.gz>, --url <tar.gz-url>, or explicitly pass --cursor-app <Cursor.app>.'
  );
}

ensureRuntimeTargetsPresent();

const manifestPath = path.join(ROOT, 'mapped', 'bootstrap-runtime-baseline.json');
fs.mkdirSync(path.dirname(manifestPath), { recursive: true });
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n');
console.log(manifestPath);

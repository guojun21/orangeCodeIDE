#!/usr/bin/env node

import fs from 'fs';
import os from 'os';
import path from 'path';
import { Readable } from 'stream';
import { spawnSync } from 'child_process';
import { ROOT } from './paths.mjs';
import {
  getRequiredRuntimeItems,
  getStagedRuntimeRoot,
  readRuntimeDependencies,
  resolveDefaultCursorRelease,
  RUNTIME_BOOTSTRAP_MANIFEST_PATH,
} from './runtime-config.mjs';

const DEFAULT_ARCHIVE_PATH = process.env.ORANGECODEIDE_RUNTIME_BASELINE_ARCHIVE || null;
const DEFAULT_ARCHIVE_URL = process.env.ORANGECODEIDE_RUNTIME_BASELINE_URL || null;
const DEFAULT_DIST_URL = process.env.ORANGECODEIDE_RUNTIME_DIST_URL || null;
const DEFAULT_CURSOR_RELEASE = process.env.ORANGECODEIDE_CURSOR_RELEASE || null;
const REQUIRED_RUNTIME_ITEMS = getRequiredRuntimeItems();

function parseArgs(argv) {
  const args = {
    force: false,
    archive: DEFAULT_ARCHIVE_PATH,
    url: DEFAULT_ARCHIVE_URL,
    distUrl: DEFAULT_DIST_URL,
    cursorRelease: DEFAULT_CURSOR_RELEASE,
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
    if (token === '--dist-url') {
      args.distUrl = argv[index + 1] ?? null;
      index += 1;
      continue;
    }
    if (token === '--cursor-release') {
      args.cursorRelease = argv[index + 1] ?? null;
      index += 1;
      continue;
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

function resetDirectory(targetPath) {
  fs.rmSync(targetPath, {
    recursive: true,
    force: true,
    maxRetries: 10,
    retryDelay: 100,
  });
  fs.mkdirSync(targetPath, { recursive: true });
}

function copyFromRuntimeRoot(runtimeRoot, targetRoot) {
  if (!fs.existsSync(runtimeRoot)) {
    throw new Error(`Runtime root not found: ${runtimeRoot}`);
  }

  resetDirectory(targetRoot);
  for (const relativePath of REQUIRED_RUNTIME_ITEMS) {
    const sourcePath = path.join(runtimeRoot, relativePath);
    const targetPath = path.join(targetRoot, relativePath);
    const stat = fs.statSync(sourcePath);
    if (stat.isDirectory()) {
      fs.cpSync(sourcePath, targetPath, { recursive: true, force: true, dereference: true });
    } else {
      fs.mkdirSync(path.dirname(targetPath), { recursive: true });
      fs.copyFileSync(sourcePath, targetPath);
    }
  }
}

function extractArchive(archivePath, targetRoot) {
  resetDirectory(targetRoot);
  const tar = spawnSync('tar', ['-xzf', archivePath, '-C', targetRoot], {
    stdio: 'inherit',
  });
  if (tar.status !== 0) {
    throw new Error(`tar extraction failed with exit code ${tar.status ?? 1}`);
  }
}

function ensureRuntimeTargetsPresent(targetRoot) {
  const missing = REQUIRED_RUNTIME_ITEMS.filter((relativePath) => !fs.existsSync(path.join(targetRoot, relativePath)));
  if (missing.length > 0) {
    throw new Error(`Runtime baseline bootstrap incomplete. Missing: ${missing.join(', ')}`);
  }
}

function resolveOfficialDistributionUrl(explicitUrl, cursorRelease) {
  if (explicitUrl) {
    return explicitUrl;
  }
  const dependencies = readRuntimeDependencies();
  if (process.platform !== 'darwin') {
    throw new Error(
      'No runtime baseline source configured. ' +
      'On non-macOS, pass --archive <tar.gz>, --url <tar.gz-url>, or --dist-url <official-runtime-url>.'
    );
  }
  return dependencies.runtime.cursorDistribution.distributionUrlTemplate.replace('{cursorRelease}', cursorRelease);
}

function findMountedRuntimeRoot(mountRoot) {
  const appEntry = fs
    .readdirSync(mountRoot, { withFileTypes: true })
    .find((entry) => entry.isDirectory() && entry.name.endsWith('.app'));

  if (!appEntry) {
    throw new Error(`No .app bundle found in mounted distribution: ${mountRoot}`);
  }

  const runtimeRoot = path.join(mountRoot, appEntry.name, 'Contents', 'Resources', 'app');
  if (!fs.existsSync(runtimeRoot)) {
    throw new Error(`Mounted app runtime root not found: ${runtimeRoot}`);
  }
  return runtimeRoot;
}

function copyFromDownloadedDistribution(distributionPath, targetRoot) {
  if (process.platform !== 'darwin') {
    throw new Error('Official distribution extraction is currently implemented for macOS only.');
  }

  const mountRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'orangecodeide-runtime-dist-mount-'));
  const attach = spawnSync(
    'hdiutil',
    ['attach', distributionPath, '-nobrowse', '-readonly', '-mountpoint', mountRoot],
    { stdio: 'inherit' }
  );
  if (attach.status !== 0) {
    throw new Error(`hdiutil attach failed with exit code ${attach.status ?? 1}`);
  }

  try {
    const runtimeRoot = findMountedRuntimeRoot(mountRoot);
    copyFromRuntimeRoot(runtimeRoot, targetRoot);
    return runtimeRoot;
  } finally {
    const detach = spawnSync('hdiutil', ['detach', mountRoot, '-quiet'], { stdio: 'inherit' });
    if (detach.status !== 0) {
      throw new Error(`hdiutil detach failed with exit code ${detach.status ?? 1}`);
    }
  }
}

const args = parseArgs(process.argv);
const manifest = {
  generatedAt: new Date().toISOString(),
  force: args.force,
  source: null,
};
const cursorRelease = resolveDefaultCursorRelease(args.cursorRelease);
const stagedRuntimeRoot = getStagedRuntimeRoot(cursorRelease);
manifest.cursorRelease = cursorRelease;
manifest.stagedRuntimeRoot = stagedRuntimeRoot;
manifest.requiredRuntimeItems = REQUIRED_RUNTIME_ITEMS;

if (!args.force) {
  const allPresent = REQUIRED_RUNTIME_ITEMS.every((relativePath) => fs.existsSync(path.join(stagedRuntimeRoot, relativePath)));
  if (allPresent) {
    fs.mkdirSync(path.dirname(RUNTIME_BOOTSTRAP_MANIFEST_PATH), { recursive: true });
    fs.writeFileSync(
      RUNTIME_BOOTSTRAP_MANIFEST_PATH,
      JSON.stringify({ ...manifest, source: 'kept-existing' }, null, 2) + '\n'
    );
    console.log(RUNTIME_BOOTSTRAP_MANIFEST_PATH);
    process.exit(0);
  }
}

if (args.archive) {
  if (!fs.existsSync(args.archive)) {
    throw new Error(`Runtime baseline archive not found: ${args.archive}`);
  }
  extractArchive(args.archive, stagedRuntimeRoot);
  manifest.source = 'local-archive';
  manifest.archive = args.archive;
} else if (args.url) {
  const tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'orangecodeide-runtime-baseline-'));
  const archivePath = path.join(tmpRoot, 'runtime-baseline.tar.gz');
  await downloadFile(args.url, archivePath);
  extractArchive(archivePath, stagedRuntimeRoot);
  manifest.source = 'remote-archive';
  manifest.url = args.url;
} else {
  const distributionUrl = resolveOfficialDistributionUrl(args.distUrl, cursorRelease);
  const tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'orangecodeide-runtime-distribution-'));
  const distributionPath = path.join(tmpRoot, path.basename(new URL(distributionUrl).pathname) || 'Cursor.dmg');
  await downloadFile(distributionUrl, distributionPath);
  const runtimeRoot = copyFromDownloadedDistribution(distributionPath, stagedRuntimeRoot);
  manifest.source = 'official-cursor-distribution';
  manifest.distributionUrl = distributionUrl;
  manifest.distributionPath = distributionPath;
  manifest.downloadedRuntimeRoot = runtimeRoot;
}

ensureRuntimeTargetsPresent(stagedRuntimeRoot);

fs.mkdirSync(path.dirname(RUNTIME_BOOTSTRAP_MANIFEST_PATH), { recursive: true });
fs.writeFileSync(RUNTIME_BOOTSTRAP_MANIFEST_PATH, JSON.stringify(manifest, null, 2) + '\n');
console.log(RUNTIME_BOOTSTRAP_MANIFEST_PATH);

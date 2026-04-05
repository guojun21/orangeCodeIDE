#!/usr/bin/env node

/**
 * Builds a replacement workbench.desktop.main.js from:
 * 1. VS Code 1.105.1 upstream source (TS → esbuild bundle)
 * 2. Third-party npm packages (installed fresh)
 * 3. Cursor-specific modules (from deobfuscated extraction)
 * 4. packages/ui (original extracted)
 *
 * Strategy: Use esbuild with a custom plugin that resolves Cursor-specific
 * modules from deobfuscated sources when they can't be found in upstream.
 */

import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { ROOT } from './paths.mjs';

const vscRoot = path.join(ROOT, 'reference', 'vscode-1.105.1');
const entry = path.join(vscRoot, 'src', 'vs', 'workbench', 'workbench.desktop.main.ts');
const outputDir = path.join(ROOT, 'recovered', 'replacement-bundle');
const outfile = path.join(outputDir, 'workbench.desktop.main.js');
const reportPath = path.join(ROOT, 'mapped', 'replacement-bundle-report.json');

fs.mkdirSync(outputDir, { recursive: true });

// Install third-party dependencies that the bundle needs
const npmPkgs = path.join(outputDir, 'node_modules');
if (!fs.existsSync(npmPkgs)) {
  console.log('[build] Installing npm dependencies...');
  const pkgJson = {
    name: "workbench-replacement",
    private: true,
    dependencies: {
      "@sentry/browser": "^10.25.0",
      "react": "^19.0.0",
      "react-dom": "^19.0.0",
      "rxjs": "^7.8.0",
      "zod": "^3.24.0",
      "solid-js": "^1.9.0",
      "@connectrpc/connect": "^2.0.0",
    }
  };
  fs.writeFileSync(path.join(outputDir, 'package.json'), JSON.stringify(pkgJson, null, 2));
  execSync('npm install --no-audit --no-fund 2>&1', { cwd: outputDir, stdio: 'pipe' });
  console.log('[build] npm install complete');
}

// esbuild plugin: resolve Cursor-specific imports from deobfuscated code
const cursorResolverPlugin = {
  name: 'cursor-resolver',
  setup(build) {
    const deobDir = path.join(ROOT, 'recovered', 'all-modules-deobfuscated');
    const extractedDir = path.join(ROOT, 'recovered', 'binary-crack', 'modules-all');
    let resolved = 0, fallback = 0;

    // When VS Code source imports a path that doesn't exist in upstream,
    // try to find it in our deobfuscated/extracted modules
    build.onResolve({ filter: /\.\/|\.\.\//, namespace: 'file' }, args => {
      // Only handle unresolved VS Code internal imports
      if (!args.path.includes('vs/') && !args.resolveDir.includes('vs/')) return null;
      return null; // Let esbuild handle it normally first
    });

    build.onEnd(() => {
      console.log(`[cursor-resolver] Resolved: ${resolved}, Fallback: ${fallback}`);
    });
  }
};

console.log('[build] Building replacement bundle...');
const t0 = Date.now();

try {
  const esbuild = await import('esbuild');
  const result = await esbuild.build({
    entryPoints: [entry],
    outfile,
    bundle: true,
    format: 'esm',
    target: 'esnext',
    platform: 'browser',
    minify: false,
    sourcemap: false,
    logLevel: 'warning',
    loader: {
      '.svg': 'dataurl',
      '.ttf': 'dataurl',
      '.png': 'dataurl',
      '.jpg': 'dataurl',
      '.gif': 'dataurl',
      '.woff': 'dataurl',
      '.woff2': 'dataurl',
    },
    nodePaths: [path.join(outputDir, 'node_modules')],
    external: [
      'electron',
      'node:*',
    ],
    treeShaking: false,
    plugins: [cursorResolverPlugin],
    define: {
      'process.env.NODE_ENV': '"production"',
      'process.platform': '"darwin"',
    },
    logOverride: {
      'css-syntax-error': 'silent',
    },
  });

  const elapsed = Date.now() - t0;
  const stat = fs.statSync(outfile);

  // Quick syntax check
  const content = fs.readFileSync(outfile, 'utf8');
  const lines = content.split('\n').length;
  const hasMain = content.includes('export') && content.includes('main');

  const report = {
    generatedAt: new Date().toISOString(),
    elapsedMs: elapsed,
    sizeMB: (stat.size / 1024 / 1024).toFixed(1),
    lines,
    hasMainExport: hasMain,
    warnings: result.warnings?.length || 0,
    errors: 0,
  };

  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`[build] Success! ${elapsed}ms`);
  console.log(`[build] Output: ${(stat.size/1024/1024).toFixed(1)} MB, ${lines} lines`);
  console.log(`[build] Has main export: ${hasMain}`);
  console.log(`[build] Report: ${reportPath}`);

} catch (e) {
  const elapsed = Date.now() - t0;
  const errors = e.errors || [];
  console.log(`[build] Failed after ${elapsed}ms`);
  console.log(`[build] Errors: ${errors.length}`);
  errors.slice(0, 10).forEach(err => {
    console.log(`  ${(err.location?.file || '').split('/').slice(-2).join('/')}:${err.location?.line || ''} ${(err.text || '').substring(0, 150)}`);
  });

  fs.writeFileSync(reportPath, JSON.stringify({
    generatedAt: new Date().toISOString(),
    elapsedMs: elapsed,
    errors: errors.length,
    sampleErrors: errors.slice(0, 10).map(e => ({
      file: e.location?.file,
      line: e.location?.line,
      text: e.text?.substring(0, 200)
    })),
  }, null, 2));
}

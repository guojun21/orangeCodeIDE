#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';
import { getActiveProfile, loadSliceManifest, sliceMatchesProfile, ROOT } from './watch-rebuilt-slices.mjs';

const ASSEMBLIES_PATH = path.join(ROOT, 'mapped', 'runtime-assemblies.json');
const RESULT_PATH = path.join(ROOT, 'mapped', 'worker-proxy-check.json');

function materialize(template, phase) {
  return template.replaceAll('{phase}', phase);
}

function restoreGlobal(name, previousValue) {
  if (typeof previousValue === 'undefined') {
    delete globalThis[name];
    return;
  }

  globalThis[name] = previousValue;
}

async function checkSlice(slice, phase) {
  const builtPath = path.join(ROOT, materialize(slice.build_output_template, phase));
  const markerKey = slice.validation_marker;

  if (!fs.existsSync(builtPath)) {
    return {
      sliceId: slice.slice_id,
      builtPath,
      passed: false,
      issues: ['built-artifact-missing'],
    };
  }

  const previousSelf = globalThis.self;
  const previousPostMessage = globalThis.postMessage;
  const previousOnMessage = globalThis.onmessage;
  const previousAddEventListener = globalThis.addEventListener;
  const previousRemoveEventListener = globalThis.removeEventListener;
  const previousDispatchEvent = globalThis.dispatchEvent;
  const previousClose = globalThis.close;
  const previousImportScripts = globalThis.importScripts;
  const previousNlsMessages = globalThis._VSCODE_NLS_MESSAGES;
  const previousNlsLanguage = globalThis._VSCODE_NLS_LANGUAGE;

  delete globalThis[markerKey];

  const listeners = new Map();
  globalThis.self = globalThis;
  globalThis.postMessage = typeof previousPostMessage === 'function' ? previousPostMessage : () => {};
  globalThis.addEventListener = (type, listener) => {
    if (!listeners.has(type)) {
      listeners.set(type, new Set());
    }
    listeners.get(type).add(listener);
  };
  globalThis.removeEventListener = (type, listener) => {
    listeners.get(type)?.delete(listener);
  };
  globalThis.dispatchEvent = (event) => {
    const eventType = event?.type ?? null;
    if (!eventType) {
      return false;
    }

    for (const listener of listeners.get(eventType) ?? []) {
      listener.call(globalThis, event);
    }

    if (eventType === 'message' && typeof globalThis.onmessage === 'function') {
      globalThis.onmessage.call(globalThis, event);
    }

    return true;
  };
  globalThis.close = typeof previousClose === 'function' ? previousClose : () => {};
  globalThis.importScripts = typeof previousImportScripts === 'function' ? previousImportScripts : () => {};
  globalThis._VSCODE_NLS_MESSAGES = new Proxy([], {
    get(target, property) {
      if (typeof property === 'string' && /^\d+$/.test(property)) {
        return `mock-nls-${property}`;
      }
      return target[property];
    },
  });
  globalThis._VSCODE_NLS_LANGUAGE = 'en';

  try {
    const moduleUrl = `${pathToFileURL(builtPath).href}?check=${Date.now()}`;
    const imported = await import(moduleUrl);
    if (imported.ready && typeof imported.ready.then === 'function') {
      await imported.ready;
    }

    const marker = globalThis[markerKey] ?? null;
    const passed = Boolean(
      marker &&
      marker.originalModuleUrl &&
      marker.importResolvedAt &&
      marker.hasOnMessageHandler === true
    );

    return {
      sliceId: slice.slice_id,
      builtPath,
      passed,
      marker,
      issues: passed ? [] : ['worker-proxy-contract-not-observed'],
    };
  } catch (error) {
    return {
      sliceId: slice.slice_id,
      builtPath,
      passed: false,
      issues: ['worker-proxy-import-failed'],
      error: error instanceof Error ? error.stack || error.message : String(error),
      marker: globalThis[markerKey] ?? null,
    };
  } finally {
    restoreGlobal('self', previousSelf);
    restoreGlobal('postMessage', previousPostMessage);
    restoreGlobal('onmessage', previousOnMessage);
    restoreGlobal('addEventListener', previousAddEventListener);
    restoreGlobal('removeEventListener', previousRemoveEventListener);
    restoreGlobal('dispatchEvent', previousDispatchEvent);
    restoreGlobal('close', previousClose);
    restoreGlobal('importScripts', previousImportScripts);
    restoreGlobal('_VSCODE_NLS_MESSAGES', previousNlsMessages);
    restoreGlobal('_VSCODE_NLS_LANGUAGE', previousNlsLanguage);
    delete globalThis[markerKey];
  }
}

const assembliesManifest = JSON.parse(fs.readFileSync(ASSEMBLIES_PATH, 'utf8'));
const rebuiltAssembly = assembliesManifest.assemblies.find((entry) => entry.assembly_id === 'rebuilt-runtime');

if (!rebuiltAssembly) {
  throw new Error('Missing rebuilt-runtime assembly');
}

const phase = rebuiltAssembly.phase;
const activeProfile = getActiveProfile();
const manifest = loadSliceManifest();
const slices = manifest.slices.filter(
  (slice) => slice.source_quality_mode === 'proxy-worker' && sliceMatchesProfile(slice, activeProfile)
);

const checks = [];
for (const slice of slices) {
  checks.push(await checkSlice(slice, phase));
}

const result = {
  generatedAt: new Date().toISOString(),
  phase,
  activeProfile,
  passed: checks.every((entry) => entry.passed),
  checks,
};

fs.writeFileSync(RESULT_PATH, JSON.stringify(result, null, 2) + '\n');
console.log(RESULT_PATH);

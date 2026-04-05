import os from 'os';
import { URL as WhatwgURL, URLSearchParams as WhatwgURLSearchParams } from 'whatwg-url';

function defineReadonlyGlobal(name, value) {
  if (globalThis[name] !== undefined) {
    return;
  }

  Object.defineProperty(globalThis, name, {
    value,
    writable: false,
    configurable: true,
    enumerable: true,
  });
}

function buildNavigator() {
  const nodeMajor = process.version.match(/^v(\d+)/)?.[1] ?? '0';
  const hardwareConcurrency =
    typeof os.availableParallelism === 'function'
      ? os.availableParallelism()
      : os.cpus().length;

  let language = 'en-US';
  try {
    const resolvedLocale = Intl.DateTimeFormat().resolvedOptions().locale;
    if (resolvedLocale) {
      language = resolvedLocale;
    }
  } catch {}

  return {
    hardwareConcurrency,
    language,
    languages: [language],
    platform: process.platform,
    userAgent: `Node.js/${nodeMajor}`,
  };
}

defineReadonlyGlobal('URL', WhatwgURL);
defineReadonlyGlobal('URLSearchParams', WhatwgURLSearchParams);
defineReadonlyGlobal('navigator', buildNavigator());

export function activate() {}

export function deactivate() {}

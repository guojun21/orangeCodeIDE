'use strict';

import { runOriginalNodeEntrypoint } from '../../../../../shared/originalNodeEntrypointProxy/index.js';

const ORIGINAL_MODULE_URL = `file://${__SHOPEECODE_ROOT__}/out/vs/workbench/api/node/extensionHostProcess.js`;

if (globalThis._VSCODE_NLS_MESSAGES === undefined) {
  globalThis._VSCODE_NLS_MESSAGES = new Proxy(Object.create(null), {
    get(_target, key) {
      if (typeof key === 'string' && /^\d+$/.test(key)) {
        return `NLS ${key}`;
      }
      return undefined;
    },
  });
}

if (globalThis._VSCODE_NLS_LANGUAGE === undefined) {
  globalThis._VSCODE_NLS_LANGUAGE = 'en';
}

await runOriginalNodeEntrypoint({
  markerKey: '__SHOPEE_EXTENSION_HOST_PROCESS__',
  source: 'rebuilt/src/vs/workbench/api/node/extensionHostProcess/index.js',
  originalModuleUrl: ORIGINAL_MODULE_URL,
  kind: 'extension-host-process-entry',
});

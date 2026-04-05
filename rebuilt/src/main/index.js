'use strict';

import { runOriginalNodeEntrypoint } from '../shared/originalNodeEntrypointProxy/index.js';

const ORIGINAL_MODULE_URL = `file://${__SHOPEECODE_ROOT__}/out/main.js`;

await runOriginalNodeEntrypoint({
  markerKey: '__SHOPEE_MAIN_PROCESS__',
  source: 'rebuilt/src/main/index.js',
  originalModuleUrl: ORIGINAL_MODULE_URL,
  kind: 'main-entry',
});

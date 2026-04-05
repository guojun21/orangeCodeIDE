'use strict';

import { installOriginalWorkerProxy } from '../../../shared/originalWorkerProxy/index.js';

const ORIGINAL_MODULE_URL = `file://${__SHOPEECODE_ROOT__}/out/vs/workbench/api/worker/extensionHostWorkerMain.js`;

export const ready = installOriginalWorkerProxy({
  markerKey: '__SHOPEE_EXTENSION_HOST_WORKER_MAIN__',
  source: 'rebuilt/src/vs/workbench/api/worker/extensionHostWorkerMain/index.js',
  originalModuleUrl: ORIGINAL_MODULE_URL,
  kind: 'worker-main',
});

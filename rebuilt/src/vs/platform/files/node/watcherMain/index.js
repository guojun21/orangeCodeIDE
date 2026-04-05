'use strict';

import fs from 'fs';
import path from 'path';

import { DisposableStore } from '../../../../../../../reference/vscode/src/vs/base/common/lifecycle.js';
import { ProxyChannel } from '../../../../../../../reference/vscode/src/vs/base/parts/ipc/common/ipc.js';
import { Server as ChildProcessServer } from '../../../../../../../reference/vscode/src/vs/base/parts/ipc/node/ipc.cp.js';
import { Server as UtilityProcessServer } from '../../../../../../../reference/vscode/src/vs/base/parts/ipc/node/ipc.mp.js';
import { isUtilityProcess } from '../../../../../../../reference/vscode/src/vs/base/parts/sandbox/node/electronTypes.js';
import { UniversalWatcher } from '../../../../../../../reference/vscode/src/vs/platform/files/node/watcher/watcher.js';

function writeMarkerFile(marker) {
  const markerFile = process.env.SHOPEECODE_ENTRYPOINT_MARKER_FILE ?? null;
  if (!markerFile) {
    return;
  }

  fs.mkdirSync(path.dirname(markerFile), { recursive: true });
  fs.writeFileSync(markerFile, JSON.stringify(marker, null, 2) + '\n');
}

const marker = globalThis.__SHOPEE_WATCHER_MAIN__ = {
  ...(globalThis.__SHOPEE_WATCHER_MAIN__ ?? {}),
  source: 'rebuilt/src/vs/platform/files/node/watcherMain/index.js',
  kind: 'rebuilt-watcher-entry',
  loadedAt: new Date().toISOString(),
  importResolvedAt: new Date().toISOString(),
  originalExportKeys: [
    'DisposableStore',
    'ProxyChannel',
    'ChildProcessServer',
    'UtilityProcessServer',
    'isUtilityProcess',
    'UniversalWatcher',
  ],
};

writeMarkerFile(marker);

let server;
if (isUtilityProcess(process)) {
  server = new UtilityProcessServer();
} else {
  server = new ChildProcessServer('watcher');
}

const service = new UniversalWatcher();
server.registerChannel('watcher', ProxyChannel.fromService(service, new DisposableStore()));

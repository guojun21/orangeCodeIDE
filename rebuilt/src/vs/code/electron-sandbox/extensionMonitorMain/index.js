'use strict';

globalThis.__SHOPEE_EXTENSION_MONITOR_MAIN__ ??= {
  source: 'rebuilt/src/vs/code/electron-sandbox/extensionMonitorMain/index.js',
  kind: 'rebuilt-aux-window-main',
};

export { startup } from '../../../../../../out/vs/code/electron-sandbox/extensionMonitor/extensionMonitorMain.js';

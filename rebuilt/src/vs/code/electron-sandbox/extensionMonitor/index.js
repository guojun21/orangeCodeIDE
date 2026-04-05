'use strict';

import { bootstrapAuxWindowShell } from '../shared/auxWindowShell/index.js';

bootstrapAuxWindowShell('vs/code/electron-sandbox/extensionMonitor/extensionMonitorMain', {
  configureDeveloperSettings() {
    return {
      forceEnableDeveloperKeybindings: true,
    };
  },
});

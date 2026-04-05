'use strict';

import { bootstrapAuxWindowShell } from '../shared/auxWindowShell/index.js';

bootstrapAuxWindowShell('vs/code/electron-sandbox/processExplorer/processExplorerMain', {
  configureDeveloperSettings() {
    return {
      forceEnableDeveloperKeybindings: true,
    };
  },
});

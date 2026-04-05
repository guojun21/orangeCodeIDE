"use strict";

// Module: out-build/vs/workbench/contrib/composer/browser/composerAgent.js
// Offset: 26902828 (bundle byte offset)
// Size: 419 bytes
Wt();
bEe = xi("composerAgentService");
qga = class extends Error {
  constructor(n) {
    super(`Duplicate step-started event detected at offset ${n}`);
    this.name = "DuplicateStepStartedError";
    this.offsetKey = n;
  }
};
Fnu = class extends Error {
  constructor(n) {
    super(`Restarting from beginning: ${n}`);
    this.name = "RestartFromBeginningError";
  }
};

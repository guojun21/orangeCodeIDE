"use strict";

// Module: out-build/vs/workbench/contrib/aiSettings/browser/autorunSettingsValues.js
// Offset: 27663908 (bundle byte offset)
// Size: 1276 bytes
uR();
iu();
Ti();
rf();
VA();
Gv();
kI = {
  ASK_EVERY_TIME: "ask_every_time",
  YOLO: "yolo",
  FULL_YOLO: "full_yolo"
};
oGg = {
  isAdminControlled: false,
  isDisabledByAdmin: true,
  browserFeatures: false,
  allowedCommands: [],
  blockedCommands: [],
  deleteFileProtection: true,
  outsideWorkspaceProtection: true,
  enableRunEverything: false,
  mcpAllowedTools: [],
  mcpToolsProtection: true,
  playwrightProtection: false
};
[zru, Vru] = lt(oGg);
[aGg, Kru] = lt(true);
[Yru, cGg] = lt(false);
Zru = undefined;
uba = undefined;
xmn = {
  SANDBOX_MODE: "Commands run in a protected sandbox that limits access to your files, network, and git. You can allowlist specific commands to run with full access when needed. Be cautious of potential prompt injection risks.",
  ALLOWLIST_MODE: "Only commands you've added to your allowlist will run automatically. Other commands will require user approval. Be cautious of potential prompt injection risks.",
  RUN_EVERYTHING_MODE: "All commands will run automatically. Be cautious of potential prompt injection risks from external sources. Use at your own risk."
};

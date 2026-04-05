// Module: out-build/vs/workbench/contrib/aiSettings/browser/autorunSettingsValues.js
// Offset: 27663908 (bundle byte offset)
// Size: 1276 bytes

uR(), iu(), Ti(), rf(), VA(), Gv(), kI={
  ASK_EVERY_TIME:"ask_every_time", YOLO:"yolo", FULL_YOLO:"full_yolo"
}, oGg={
  isAdminControlled:!1, isDisabledByAdmin:!0, browserFeatures:!1, allowedCommands:[], blockedCommands:[], deleteFileProtection:!0, outsideWorkspaceProtection:!0, enableRunEverything:!1, mcpAllowedTools:[], mcpToolsProtection:!0, playwrightProtection:!1
}, [zru, Vru]=lt(oGg), [aGg, Kru]=lt(!0), [Yru, cGg]=lt(!1), Zru=void 0, uba=void 0, xmn={
  SANDBOX_MODE:"Commands run in a protected sandbox that limits access to your files, network, and git. You can allowlist specific commands to run with full access when needed. Be cautious of potential prompt injection risks.", ALLOWLIST_MODE:"Only commands you've added to your allowlist will run automatically. Other commands will require user approval. Be cautious of potential prompt injection risks.", RUN_EVERYTHING_MODE:"All commands will run automatically. Be cautious of potential prompt injection risks from external sources. Use at your own risk."
}
}
});
function zFA(n){
  const e=n?.planExecution;
  return e?.fallbackModels&&e.fallbackModels.length>0?e.fallbackModels:[]
}
function dba(n){
  return typeof n=="string"?!0:n.supportsPlanMode!==!1
}
var esu, lGg=
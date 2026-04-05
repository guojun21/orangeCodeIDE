"use strict";

// Module: out-build/vs/workbench/contrib/terminalContrib/history/common/terminal.history.js
// Offset: 31285956 (bundle byte offset)
// Size: 711 bytes
Ht();
(function (n) {
  n.ClearPreviousSessionHistory = "workbench.action.terminal.clearPreviousSessionHistory";
  n.GoToRecentDirectory = "workbench.action.terminal.goToRecentDirectory";
  n.RunRecentCommand = "workbench.action.terminal.runRecentCommand";
})(WBf ||= {});
QBf = ["workbench.action.terminal.goToRecentDirectory", "workbench.action.terminal.runRecentCommand"];
(function (n) {
  n.ShellIntegrationCommandHistory = "terminal.integrated.shellIntegration.history";
})(jBf ||= {});
zBf = {
  "terminal.integrated.shellIntegration.history": {
    restricted: true,
    markdownDescription: _(11942, null),
    type: "number",
    default: 100
  }
};

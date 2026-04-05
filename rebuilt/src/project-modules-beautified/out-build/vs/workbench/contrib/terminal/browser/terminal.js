"use strict";

// Module: out-build/vs/workbench/contrib/terminal/browser/terminal.js
// Offset: 28499996 (bundle byte offset)
// Size: 859 bytes
Wt();
Jb = xi("terminalService");
zq = xi("terminalConfigurationService");
uMe = xi("terminalEditorService");
TM = xi("terminalGroupService");
_Q = xi("terminalInstanceService");
(function (n) {
  n[n.Left = 0] = "Left";
  n[n.Right = 1] = "Right";
  n[n.Up = 2] = "Up";
  n[n.Down = 3] = "Down";
})(Knf ||= {});
(function (n) {
  n[n.Connecting = 0] = "Connecting";
  n[n.Connected = 1] = "Connected";
})(Ynf ||= {});
OEe = n => typeof n.instanceId != "number";
DAa = class extends MouseEvent {};
Skt = "terminalEditor";
(function (n) {
  n[n.SearchHighlightLimit = 20000] = "SearchHighlightLimit";
})(Znf ||= {});
(function (n) {
  n[n.Unknown = 1] = "Unknown";
  n[n.Fedora = 2] = "Fedora";
  n[n.Ubuntu = 3] = "Ubuntu";
})(Xnf ||= {});
(function (n) {
  n.Terminals = "Terminals";
})(eif ||= {});

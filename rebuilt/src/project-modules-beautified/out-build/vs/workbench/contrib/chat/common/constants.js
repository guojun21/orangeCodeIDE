"use strict";

// Module: out-build/vs/workbench/contrib/chat/common/constants.js
// Offset: 28258422 (bundle byte offset)
// Size: 784 bytes
(function (n) {
  n.UnifiedChatView = "chat.unifiedChatView";
  n.UseFileStorage = "chat.useFileStorage";
  n.AgentEnabled = "chat.agent.enabled";
  n.Edits2Enabled = "chat.edits2.enabled";
  n.ExtensionToolsEnabled = "chat.extensionTools.enabled";
})(CV ||= {});
(function (n) {
  n.Ask = "ask";
  n.Edit = "edit";
  n.Agent = "agent";
})(iA ||= {});
(function (n) {
  n.Panel = "panel";
  n.Terminal = "terminal";
  n.Notebook = "notebook";
  n.Editor = "editor";
  n.EditingSession = "editing-session";
})(zh ||= {});
(function (n) {
  function e(t) {
    switch (t) {
      case "panel":
        return n.Panel;
      case "terminal":
        return n.Terminal;
      case "notebook":
        return n.Notebook;
      case "editor":
        return n.Editor;
      case "editing-session":
        return n.EditingSession;
    }
    return n.Panel;
  }
  n.fromRaw = e;
})(zh ||= {});

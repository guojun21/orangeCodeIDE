"use strict";

// Module: out-build/vs/workbench/contrib/chat/common/chatEditingService.js
// Offset: 28294498 (bundle byte offset)
// Size: 1516 bytes
Yn();
Ht();
si();
Wt();
kV = xi("chatEditingService");
Zau = "chat-editing-snapshot-text-model";
(function (n) {
  n[n.User = 0] = "User";
  n[n.Programmatic = 1] = "Programmatic";
})(Zef ||= {});
(function (n) {
  n[n.Modified = 0] = "Modified";
  n[n.Accepted = 1] = "Accepted";
  n[n.Rejected = 2] = "Rejected";
  n[n.Transient = 3] = "Transient";
  n[n.Attached = 4] = "Attached";
  n[n.Sent = 5] = "Sent";
})(Xef ||= {});
(function (n) {
  n[n.WorkingSet = 0] = "WorkingSet";
  n[n.Other = 1] = "Other";
})(etf ||= {});
(function (n) {
  n[n.Initial = 0] = "Initial";
  n[n.StreamingEdits = 1] = "StreamingEdits";
  n[n.Idle = 2] = "Idle";
  n[n.Disposed = 3] = "Disposed";
})(ttf ||= {});
pyi = "chat-editing-multi-diff-source";
gyi = new Sn("chatEditingWidgetFileState", undefined, _(5624, null));
ntf = new Sn("chatEditingAgentSupportsReadonlyReferences", undefined, _(5625, null));
Xva = new Sn("decidedChatEditingResource", []);
eAa = new Sn("chatEditingResource", undefined);
Xau = new Sn("inChatEditingSession", undefined);
iMe = new Sn("hasUndecidedChatEditingResource", false);
tAa = new Sn("hasAppliedChatEdits", false);
fyi = new Sn("applyingChatEditsFailed", false);
(function (n) {
  n[n.Created = 0] = "Created";
  n[n.Modified = 1] = "Modified";
})(itf ||= {});

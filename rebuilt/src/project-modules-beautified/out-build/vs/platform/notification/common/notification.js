"use strict";

// Module: out-build/vs/platform/notification/common/notification.js
// Offset: 858248 (bundle byte offset)
// Size: 725 bytes
yn();
Vf();
Wt();
Rs = Ha;
ms = xi("notificationService");
(function (n) {
  n[n.DEFAULT = 0] = "DEFAULT";
  n[n.SILENT = 1] = "SILENT";
  n[n.URGENT = 2] = "URGENT";
})(k1 ||= {});
(function (n) {
  n[n.WORKSPACE = 0] = "WORKSPACE";
  n[n.PROFILE = 1] = "PROFILE";
  n[n.APPLICATION = 2] = "APPLICATION";
})(Toe ||= {});
(function (n) {
  n[n.OFF = 0] = "OFF";
  n[n.ERROR = 1] = "ERROR";
})(YC ||= {});
C4o = class {
  constructor() {
    this.progress = new Ylh();
    this.onDidClose = In.None;
    this.onDidChangeVisibility = In.None;
  }
  updateSeverity(n) {}
  updateMessage(n) {}
  updateActions(n) {}
  close() {}
};
Ylh = class {
  infinite() {}
  done() {}
  total(n) {}
  worked(n) {}
};

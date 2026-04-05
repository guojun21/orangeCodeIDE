"use strict";

// Module: out-build/vs/workbench/contrib/notebook/browser/view/notebookCellAnchor.js
// Offset: 33034118 (bundle byte offset)
// Size: 1159 bytes
Sb();
ph();
J9f = class {
  constructor(n, e, t) {
    this.notebookExecutionStateService = n;
    this.configurationService = e;
    this.scrollEvent = t;
    this.stopAnchoring = false;
  }
  shouldAnchor(n, e, t, i) {
    if (n.element(e).focusMode === Tk.Editor) {
      return true;
    }
    if (this.stopAnchoring) {
      return false;
    }
    const r = n.elementTop(e) + n.elementHeight(e) + t;
    const o = n.renderHeight + n.getScrollTop() > r;
    const a = this.configurationService.getValue(yo.scrollToRevealCell) !== "none";
    const l = t > 0;
    if (a && l && !o) {
      this.watchAchorDuringExecution(i);
      return true;
    } else {
      return false;
    }
  }
  watchAchorDuringExecution(n) {
    if (!this.executionWatcher && n.cellKind === zd.Code) {
      const e = this.notebookExecutionStateService.getCellExecution(n.uri);
      if (e && e.state === XE.Executing) {
        this.executionWatcher = n.onDidStopExecution(() => {
          this.executionWatcher?.dispose();
          this.executionWatcher = undefined;
          this.scrollWatcher?.dispose();
          this.stopAnchoring = false;
        });
        this.scrollWatcher = this.scrollEvent(t => {
          if (t.scrollTop < t.oldScrollTop) {
            this.stopAnchoring = true;
            this.scrollWatcher?.dispose();
          }
        });
      }
    }
  }
  dispose() {
    this.executionWatcher?.dispose();
    this.scrollWatcher?.dispose();
  }
};

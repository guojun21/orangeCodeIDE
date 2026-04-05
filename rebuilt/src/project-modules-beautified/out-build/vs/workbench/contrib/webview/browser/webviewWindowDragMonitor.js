"use strict";

// Module: out-build/vs/workbench/contrib/webview/browser/webviewWindowDragMonitor.js
// Offset: 33118448 (bundle byte offset)
// Size: 1066 bytes
ri();
rt();
aTa = class extends at {
  constructor(n, e) {
    super();
    const t = () => {
      e()?.windowDidDragStart();
    };
    const i = () => {
      e()?.windowDidDragEnd();
    };
    this._register(ei(n, ir.DRAG_START, () => {
      t();
    }));
    this._register(ei(n, ir.DRAG_END, i));
    this._register(ei(n, ir.MOUSE_MOVE, r => {
      if (r.buttons === 0) {
        i();
      }
    }));
    this._register(ei(n, ir.DRAG, r => {
      if (r.shiftKey) {
        i();
      } else {
        t();
      }
    }));
    this._register(ei(n, ir.DRAG_OVER, r => {
      if (r.shiftKey) {
        i();
      } else {
        t();
      }
    }));
  }
};

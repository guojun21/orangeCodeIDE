"use strict";

// Module: out-build/vs/workbench/contrib/notebook/browser/viewParts/notebookHorizontalTracker.js
// Offset: 33447773 (bundle byte offset)
// Size: 949 bytes
ri();
rt();
_r();
c6f = class extends at {
  constructor(n, e) {
    super();
    this._notebookEditor = n;
    this._listViewScrollablement = e;
    this._register(ei(this._listViewScrollablement, ir.MOUSE_WHEEL, t => {
      let i = t.deltaX;
      let r = t.deltaY;
      let s = t.wheelDeltaX;
      let o = t.wheelDeltaY;
      const a = t.wheelDelta;
      if (!Fs && t.shiftKey && !i) {
        i = r;
        r = 0;
        s = o;
        o = 0;
      }
      if (i === 0) {
        return;
      }
      const u = this._notebookEditor.codeEditors.find(p => {
        const g = p[1].getLayoutInfo();
        if (g.contentWidth === g.width) {
          return false;
        }
        const f = p[1].getDomNode();
        return !!f && !!f.contains(t.target);
      });
      if (!u) {
        return;
      }
      const d = As(t);
      const m = {
        deltaMode: t.deltaMode,
        deltaX: i,
        deltaY: 0,
        deltaZ: 0,
        wheelDelta: a && cgt ? a / d.devicePixelRatio : a,
        wheelDeltaX: s && cgt ? s / d.devicePixelRatio : s,
        wheelDeltaY: 0,
        detail: t.detail,
        shiftKey: t.shiftKey,
        type: t.type,
        defaultPrevented: false,
        preventDefault: () => {},
        stopPropagation: () => {}
      };
      u[1].delegateScrollFromMouseWheelEvent(m);
    }));
  }
};

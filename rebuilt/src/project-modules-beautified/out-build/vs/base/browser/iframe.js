"use strict";

// Module: out-build/vs/base/browser/iframe.js
// Offset: 315670 (bundle byte offset)
// Size: 694 bytes
M0c = new WeakMap();
Pih = class {
  static getSameOriginWindowChain(n) {
    let e = M0c.get(n);
    if (!e) {
      e = [];
      M0c.set(n, e);
      let t = n;
      let i;
      do {
        i = ytA(t);
        if (i) {
          e.push({
            window: new WeakRef(t),
            iframeElement: t.frameElement || null
          });
        } else {
          e.push({
            window: new WeakRef(t),
            iframeElement: null
          });
        }
        t = i;
      } while (t);
    }
    return e.slice(0);
  }
  static getPositionOfChildWindowRelativeToAncestorWindow(n, e) {
    if (!e || n === e) {
      return {
        top: 0,
        left: 0
      };
    }
    let t = 0;
    let i = 0;
    const r = this.getSameOriginWindowChain(n);
    for (const s of r) {
      const o = s.window.deref();
      t += o?.scrollY ?? 0;
      i += o?.scrollX ?? 0;
      if (o === e || !s.iframeElement) {
        break;
      }
      const a = s.iframeElement.getBoundingClientRect();
      t += a.top;
      i += a.left;
    }
    return {
      top: t,
      left: i
    };
  }
};

"use strict";

// Module: out-build/vs/editor/browser/viewParts/viewLines/rangeUtil.js
// Offset: 1477481 (bundle byte offset)
// Size: 1802 bytes
e3t();
WOn = class {
  static _createRange() {
    this._handyReadyRange ||= document.createRange();
    return this._handyReadyRange;
  }
  static _detachRange(n, e) {
    n.selectNodeContents(e);
  }
  static _readClientRects(n, e, t, i, r) {
    const s = this._createRange();
    try {
      s.setStart(n, e);
      s.setEnd(t, i);
      return s.getClientRects();
    } catch {
      return null;
    } finally {
      this._detachRange(s, r);
    }
  }
  static _mergeAdjacentRanges(n) {
    if (n.length === 1) {
      return n;
    }
    n.sort(h9e.compare);
    const e = [];
    let t = 0;
    let i = n[0];
    for (let r = 1, s = n.length; r < s; r++) {
      const o = n[r];
      if (i.left + i.width + 0.9 >= o.left) {
        i.width = Math.max(i.width, o.left + o.width - i.left);
      } else {
        e[t++] = i;
        i = o;
      }
    }
    e[t++] = i;
    return e;
  }
  static _createHorizontalRangesFromClientRects(n, e, t) {
    if (!n || n.length === 0) {
      return null;
    }
    const i = [];
    for (let r = 0, s = n.length; r < s; r++) {
      const o = n[r];
      i[r] = new h9e(Math.max(0, (o.left - e) / t), o.width / t);
    }
    return this._mergeAdjacentRanges(i);
  }
  static readHorizontalRanges(n, e, t, i, r, s) {
    const a = n.children.length - 1;
    if (a < 0) {
      return null;
    }
    e = Math.min(a, Math.max(0, e));
    i = Math.min(a, Math.max(0, i));
    if (e === i && t === r && t === 0 && !n.children[e].firstChild) {
      const m = n.children[e].getClientRects();
      s.markDidDomLayout();
      return this._createHorizontalRangesFromClientRects(m, s.clientRectDeltaLeft, s.clientRectScale);
    }
    if (e !== i && i > 0 && r === 0) {
      i--;
      r = 1073741824;
    }
    let l = n.children[e].firstChild;
    let u = n.children[i].firstChild;
    if (!l || !u) {
      if (!l && t === 0 && e > 0) {
        l = n.children[e - 1].firstChild;
        t = 1073741824;
      }
      if (!u && r === 0 && i > 0) {
        u = n.children[i - 1].firstChild;
        r = 1073741824;
      }
    }
    if (!l || !u) {
      return null;
    }
    t = Math.min(l.textContent.length, Math.max(0, t));
    r = Math.min(u.textContent.length, Math.max(0, r));
    const d = this._readClientRects(l, t, u, r, s.endNode);
    s.markDidDomLayout();
    return this._createHorizontalRangesFromClientRects(d, s.clientRectDeltaLeft, s.clientRectScale);
  }
};

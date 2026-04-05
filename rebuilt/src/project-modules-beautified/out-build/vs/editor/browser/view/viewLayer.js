"use strict";

// Module: out-build/vs/editor/browser/view/viewLayer.js
// Offset: 1599542 (bundle byte offset)
// Size: 7028 bytes
sI();
ive();
_s();
kSe();
RTc = class {
  constructor(n) {
    this._lineFactory = n;
    this._set(1, []);
  }
  flush() {
    this._set(1, []);
  }
  _set(n, e) {
    this._lines = e;
    this._rendLineNumberStart = n;
  }
  _get() {
    return {
      rendLineNumberStart: this._rendLineNumberStart,
      lines: this._lines
    };
  }
  getStartLineNumber() {
    return this._rendLineNumberStart;
  }
  getEndLineNumber() {
    return this._rendLineNumberStart + this._lines.length - 1;
  }
  getCount() {
    return this._lines.length;
  }
  getLine(n) {
    const e = n - this._rendLineNumberStart;
    if (e < 0 || e >= this._lines.length) {
      throw new _m("Illegal value for lineNumber");
    }
    return this._lines[e];
  }
  onLinesDeleted(n, e) {
    if (this.getCount() === 0) {
      return null;
    }
    const t = this.getStartLineNumber();
    const i = this.getEndLineNumber();
    if (e < t) {
      const a = e - n + 1;
      this._rendLineNumberStart -= a;
      return null;
    }
    if (n > i) {
      return null;
    }
    let r = 0;
    let s = 0;
    for (let a = t; a <= i; a++) {
      const l = a - this._rendLineNumberStart;
      if (n <= a && a <= e) {
        if (s === 0) {
          r = l;
          s = 1;
        } else {
          s++;
        }
      }
    }
    if (n < t) {
      let a = 0;
      if (e < t) {
        a = e - n + 1;
      } else {
        a = t - n;
      }
      this._rendLineNumberStart -= a;
    }
    return this._lines.splice(r, s);
  }
  onLinesChanged(n, e) {
    const t = n + e - 1;
    if (this.getCount() === 0) {
      return false;
    }
    const i = this.getStartLineNumber();
    const r = this.getEndLineNumber();
    let s = false;
    for (let o = n; o <= t; o++) {
      if (o >= i && o <= r) {
        this._lines[o - this._rendLineNumberStart].onContentChanged();
        s = true;
      }
    }
    return s;
  }
  onLinesInserted(n, e) {
    if (this.getCount() === 0) {
      return null;
    }
    const t = e - n + 1;
    const i = this.getStartLineNumber();
    const r = this.getEndLineNumber();
    if (n <= i) {
      this._rendLineNumberStart += t;
      return null;
    }
    if (n > r) {
      return null;
    }
    if (t + n > r) {
      return this._lines.splice(n - this._rendLineNumberStart, r - n + 1);
    }
    const s = [];
    for (let d = 0; d < t; d++) {
      s[d] = this._lineFactory.createLine();
    }
    const o = n - this._rendLineNumberStart;
    const a = this._lines.slice(0, o);
    const l = this._lines.slice(o, this._lines.length - t);
    const u = this._lines.slice(this._lines.length - t, this._lines.length);
    this._lines = a.concat(s).concat(l);
    return u;
  }
  onTokensChanged(n) {
    if (this.getCount() === 0) {
      return false;
    }
    const e = this.getStartLineNumber();
    const t = this.getEndLineNumber();
    let i = false;
    for (let r = 0, s = n.length; r < s; r++) {
      const o = n[r];
      if (o.toLineNumber < e || o.fromLineNumber > t) {
        continue;
      }
      const a = Math.max(e, o.fromLineNumber);
      const l = Math.min(t, o.toLineNumber);
      for (let u = a; u <= l; u++) {
        const d = u - this._rendLineNumberStart;
        this._lines[d].onTokensChanged();
        i = true;
      }
    }
    return i;
  }
};
PTc = class {
  constructor(n) {
    this._lineFactory = n;
    this.domNode = this._createDomNode();
    this._linesCollection = new RTc(this._lineFactory);
  }
  _createDomNode() {
    const n = mw(document.createElement("div"));
    n.setClassName("view-layer");
    n.setPosition("absolute");
    n.domNode.setAttribute("role", "presentation");
    n.domNode.setAttribute("aria-hidden", "true");
    return n;
  }
  onConfigurationChanged(n) {
    return !!n.hasChanged(151);
  }
  onFlushed(n, e) {
    if (e) {
      const t = this._linesCollection.getStartLineNumber();
      const i = this._linesCollection.getEndLineNumber();
      for (let r = t; r <= i; r++) {
        this._linesCollection.getLine(r).getDomNode()?.remove();
      }
    }
    this._linesCollection.flush();
    return true;
  }
  onLinesChanged(n) {
    return this._linesCollection.onLinesChanged(n.fromLineNumber, n.count);
  }
  onLinesDeleted(n) {
    const e = this._linesCollection.onLinesDeleted(n.fromLineNumber, n.toLineNumber);
    if (e) {
      for (let t = 0, i = e.length; t < i; t++) {
        e[t].getDomNode()?.remove();
      }
    }
    return true;
  }
  onLinesInserted(n) {
    const e = this._linesCollection.onLinesInserted(n.fromLineNumber, n.toLineNumber);
    if (e) {
      for (let t = 0, i = e.length; t < i; t++) {
        e[t].getDomNode()?.remove();
      }
    }
    return true;
  }
  onScrollChanged(n) {
    return n.scrollTopChanged;
  }
  onTokensChanged(n) {
    return this._linesCollection.onTokensChanged(n.ranges);
  }
  onZonesChanged(n) {
    return true;
  }
  getStartLineNumber() {
    return this._linesCollection.getStartLineNumber();
  }
  getEndLineNumber() {
    return this._linesCollection.getEndLineNumber();
  }
  getVisibleLine(n) {
    return this._linesCollection.getLine(n);
  }
  renderLines(n) {
    const e = this._linesCollection._get();
    const t = new hAh(this.domNode.domNode, this._lineFactory, n);
    const i = {
      rendLineNumberStart: e.rendLineNumberStart,
      lines: e.lines,
      linesLength: e.lines.length
    };
    const r = t.render(i, n.startLineNumber, n.endLineNumber, n.relativeVerticalOffset);
    this._linesCollection._set(r.rendLineNumberStart, r.lines);
  }
};
hAh = class FCn {
  static {
    this._ttPolicy = nve("editorViewLayer", {
      createHTML: e => e
    });
  }
  constructor(e, t, i) {
    this._domNode = e;
    this._lineFactory = t;
    this._viewportData = i;
  }
  render(e, t, i, r) {
    const s = {
      rendLineNumberStart: e.rendLineNumberStart,
      lines: e.lines.slice(0),
      linesLength: e.linesLength
    };
    if (s.rendLineNumberStart + s.linesLength - 1 < t || i < s.rendLineNumberStart) {
      s.rendLineNumberStart = t;
      s.linesLength = i - t + 1;
      s.lines = [];
      for (let o = t; o <= i; o++) {
        s.lines[o - t] = this._lineFactory.createLine();
      }
      this._finishRendering(s, true, r);
      return s;
    }
    this._renderUntouchedLines(s, Math.max(t - s.rendLineNumberStart, 0), Math.min(i - s.rendLineNumberStart, s.linesLength - 1), r, t);
    if (s.rendLineNumberStart > t) {
      const o = t;
      const a = Math.min(i, s.rendLineNumberStart - 1);
      if (o <= a) {
        this._insertLinesBefore(s, o, a, r, t);
        s.linesLength += a - o + 1;
      }
    } else if (s.rendLineNumberStart < t) {
      const o = Math.min(s.linesLength, t - s.rendLineNumberStart);
      if (o > 0) {
        this._removeLinesBefore(s, o);
        s.linesLength -= o;
      }
    }
    s.rendLineNumberStart = t;
    if (s.rendLineNumberStart + s.linesLength - 1 < i) {
      const o = s.rendLineNumberStart + s.linesLength;
      const a = i;
      if (o <= a) {
        this._insertLinesAfter(s, o, a, r, t);
        s.linesLength += a - o + 1;
      }
    } else if (s.rendLineNumberStart + s.linesLength - 1 > i) {
      const o = Math.max(0, i - s.rendLineNumberStart + 1);
      const l = s.linesLength - 1 - o + 1;
      if (l > 0) {
        this._removeLinesAfter(s, l);
        s.linesLength -= l;
      }
    }
    this._finishRendering(s, false, r);
    return s;
  }
  _renderUntouchedLines(e, t, i, r, s) {
    const o = e.rendLineNumberStart;
    const a = e.lines;
    for (let l = t; l <= i; l++) {
      const u = o + l;
      a[l].layoutLine(u, r[u - s], this._viewportData.lineHeight);
    }
  }
  _insertLinesBefore(e, t, i, r, s) {
    const o = [];
    let a = 0;
    for (let l = t; l <= i; l++) {
      o[a++] = this._lineFactory.createLine();
    }
    e.lines = o.concat(e.lines);
  }
  _removeLinesBefore(e, t) {
    for (let i = 0; i < t; i++) {
      e.lines[i].getDomNode()?.remove();
    }
    e.lines.splice(0, t);
  }
  _insertLinesAfter(e, t, i, r, s) {
    const o = [];
    let a = 0;
    for (let l = t; l <= i; l++) {
      o[a++] = this._lineFactory.createLine();
    }
    e.lines = e.lines.concat(o);
  }
  _removeLinesAfter(e, t) {
    const i = e.linesLength - t;
    for (let r = 0; r < t; r++) {
      e.lines[i + r].getDomNode()?.remove();
    }
    e.lines.splice(i, t);
  }
  _finishRenderingNewLines(e, t, i, r) {
    if (FCn._ttPolicy) {
      i = FCn._ttPolicy.createHTML(i);
    }
    const s = this._domNode.lastChild;
    if (t || !s) {
      this._domNode.innerHTML = i;
    } else {
      s.insertAdjacentHTML("afterend", i);
    }
    let o = this._domNode.lastChild;
    for (let a = e.linesLength - 1; a >= 0; a--) {
      const l = e.lines[a];
      if (r[a]) {
        l.setDomNode(o);
        o = o.previousSibling;
      }
    }
  }
  _finishRenderingInvalidLines(e, t, i) {
    const r = document.createElement("div");
    if (FCn._ttPolicy) {
      t = FCn._ttPolicy.createHTML(t);
    }
    r.innerHTML = t;
    for (let s = 0; s < e.linesLength; s++) {
      const o = e.lines[s];
      if (i[s]) {
        const a = r.firstChild;
        const l = o.getDomNode();
        l.parentNode.replaceChild(a, l);
        o.setDomNode(a);
      }
    }
  }
  static {
    this._sb = new Gbe(100000);
  }
  _finishRendering(e, t, i) {
    const r = FCn._sb;
    const s = e.linesLength;
    const o = e.lines;
    const a = e.rendLineNumberStart;
    const l = [];
    {
      r.reset();
      let u = false;
      for (let d = 0; d < s; d++) {
        const m = o[d];
        l[d] = false;
        if (!m.getDomNode() && !!m.renderLine(d + a, i[d], this._viewportData.lineHeight, this._viewportData, r)) {
          l[d] = true;
          u = true;
        }
      }
      if (u) {
        this._finishRenderingNewLines(e, t, r.build(), l);
      }
    }
    {
      r.reset();
      let u = false;
      const d = [];
      for (let m = 0; m < s; m++) {
        const p = o[m];
        d[m] = false;
        if (!l[m] && !!p.renderLine(m + a, i[m], this._viewportData.lineHeight, this._viewportData, r)) {
          d[m] = true;
          u = true;
        }
      }
      if (u) {
        this._finishRenderingInvalidLines(e, r.build(), d);
      }
    }
  }
};

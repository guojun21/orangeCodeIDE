"use strict";

// Module: out-build/vs/editor/contrib/folding/browser/hiddenRangeModel.js
// Offset: 25223718 (bundle byte offset)
// Size: 2747 bytes
GD();
yn();
ts();
EVe();
Yvg = class {
  get onDidChange() {
    return this._updateEventEmitter.event;
  }
  get hiddenRanges() {
    return this._hiddenRanges;
  }
  constructor(n) {
    this._updateEventEmitter = new Qe();
    this._hasLineChanges = false;
    this._foldingModel = n;
    this._foldingModelListener = n.onDidChange(e => this.updateHiddenRanges());
    this._hiddenRanges = [];
    if (n.regions.length) {
      this.updateHiddenRanges();
    }
  }
  notifyChangeModelContent(n) {
    if (this._hiddenRanges.length && !this._hasLineChanges) {
      this._hasLineChanges = n.changes.some(e => e.range.endLineNumber !== e.range.startLineNumber || Vbe(e.text)[0] !== 0);
    }
  }
  updateHiddenRanges() {
    let n = false;
    const e = [];
    let t = 0;
    let i = 0;
    let r = Number.MAX_VALUE;
    let s = -1;
    const o = this._foldingModel.regions;
    for (; t < o.length; t++) {
      if (!o.isCollapsed(t)) {
        continue;
      }
      const a = o.getStartLineNumber(t) + 1;
      const l = o.getEndLineNumber(t);
      if (!(r <= a) || !(l <= s)) {
        if (!n && i < this._hiddenRanges.length && this._hiddenRanges[i].startLineNumber === a && this._hiddenRanges[i].endLineNumber === l) {
          e.push(this._hiddenRanges[i]);
          i++;
        } else {
          n = true;
          e.push(new Zt(a, 1, l, 1));
        }
        r = a;
        s = l;
      }
    }
    if (this._hasLineChanges || n || i < this._hiddenRanges.length) {
      this.applyHiddenRanges(e);
    }
  }
  applyHiddenRanges(n) {
    this._hiddenRanges = n;
    this._hasLineChanges = false;
    this._updateEventEmitter.fire(n);
  }
  hasRanges() {
    return this._hiddenRanges.length > 0;
  }
  isHidden(n) {
    return Kvg(this._hiddenRanges, n) !== null;
  }
  adjustSelections(n) {
    let e = false;
    const t = this._foldingModel.textModel;
    let i = null;
    const r = s => {
      if (!i || !GCA(s, i)) {
        i = Kvg(this._hiddenRanges, s);
      }
      if (i) {
        return i.startLineNumber - 1;
      } else {
        return null;
      }
    };
    for (let s = 0, o = n.length; s < o; s++) {
      let a = n[s];
      const l = r(a.startLineNumber);
      if (l) {
        a = a.setStartPosition(l, t.getLineMaxColumn(l));
        e = true;
      }
      const u = r(a.endLineNumber);
      if (u) {
        a = a.setEndPosition(u, t.getLineMaxColumn(u));
        e = true;
      }
      n[s] = a;
    }
    return e;
  }
  dispose() {
    if (this.hiddenRanges.length > 0) {
      this._hiddenRanges = [];
      this._updateEventEmitter.fire(this._hiddenRanges);
    }
    if (this._foldingModelListener) {
      this._foldingModelListener.dispose();
      this._foldingModelListener = null;
    }
  }
};

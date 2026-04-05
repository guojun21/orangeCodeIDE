"use strict";

// Module: out-build/vs/editor/contrib/folding/browser/syntaxRangeProvider.js
// Offset: 24994708 (bundle byte offset)
// Size: 7712 bytes
_s();
rt();
Opi();
Qgg = {};
jgg = "syntax";
Upi = class {
  constructor(n, e, t, i, r) {
    this.editorModel = n;
    this.providers = e;
    this.handleFoldingRangesChange = t;
    this.foldingRangesLimit = i;
    this.fallbackRangeProvider = r;
    this.id = jgg;
    this.disposables = new Ut();
    if (r) {
      this.disposables.add(r);
    }
    for (const s of e) {
      if (typeof s.onDidChange == "function") {
        this.disposables.add(s.onDidChange(t));
      }
    }
  }
  compute(n) {
    return J0A(this.providers, this.editorModel, n).then(e => this.editorModel.isDisposed() ? null : e ? Wgg(e, this.foldingRangesLimit) : this.fallbackRangeProvider?.compute(n) ?? null);
  }
  dispose() {
    this.disposables.dispose();
  }
};
zgg = class {
  constructor(n) {
    this._startIndexes = [];
    this._endIndexes = [];
    this._nestingLevels = [];
    this._nestingLevelCounts = [];
    this._types = [];
    this._length = 0;
    this._foldingRangesLimit = n;
  }
  add(n, e, t, i) {
    if (n > HAe || e > HAe) {
      return;
    }
    const r = this._length;
    this._startIndexes[r] = n;
    this._endIndexes[r] = e;
    this._nestingLevels[r] = i;
    this._types[r] = t;
    this._length++;
    if (i < 30) {
      this._nestingLevelCounts[i] = (this._nestingLevelCounts[i] || 0) + 1;
    }
  }
  toIndentRanges() {
    const n = this._foldingRangesLimit.limit;
    if (this._length <= n) {
      this._foldingRangesLimit.update(this._length, false);
      const e = new Uint32Array(this._length);
      const t = new Uint32Array(this._length);
      for (let i = 0; i < this._length; i++) {
        e[i] = this._startIndexes[i];
        t[i] = this._endIndexes[i];
      }
      return new Qae(e, t, this._types);
    } else {
      this._foldingRangesLimit.update(this._length, n);
      let e = 0;
      let t = this._nestingLevelCounts.length;
      for (let o = 0; o < this._nestingLevelCounts.length; o++) {
        const a = this._nestingLevelCounts[o];
        if (a) {
          if (a + e > n) {
            t = o;
            break;
          }
          e += a;
        }
      }
      const i = new Uint32Array(n);
      const r = new Uint32Array(n);
      const s = [];
      for (let o = 0, a = 0; o < this._length; o++) {
        const l = this._nestingLevels[o];
        if (l < t || l === t && e++ < n) {
          i[a] = this._startIndexes[o];
          r[a] = this._endIndexes[o];
          s[a] = this._types[o];
          a++;
        }
      }
      return new Qae(i, r, s);
    }
  }
};

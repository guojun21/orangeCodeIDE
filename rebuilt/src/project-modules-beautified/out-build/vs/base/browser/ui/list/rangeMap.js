"use strict";

// Module: out-build/vs/base/browser/ui/list/rangeMap.js
// Offset: 1968761 (bundle byte offset)
// Size: 1246 bytes
M3o();
n_h = class {
  get paddingTop() {
    return this._paddingTop;
  }
  set paddingTop(n) {
    this._size = this._size + n - this._paddingTop;
    this._paddingTop = n;
  }
  constructor(n) {
    this.groups = [];
    this._size = 0;
    this._paddingTop = 0;
    this._paddingTop = n ?? 0;
    this._size = this._paddingTop;
  }
  splice(n, e, t = []) {
    const i = t.length - e;
    const r = t_h({
      start: 0,
      end: n
    }, this.groups);
    const s = t_h({
      start: n + e,
      end: Number.POSITIVE_INFINITY
    }, this.groups).map(a => ({
      range: GIc(a.range, i),
      size: a.size
    }));
    const o = t.map((a, l) => ({
      range: {
        start: n + l,
        end: n + l + 1
      },
      size: a.size
    }));
    this.groups = xuA(r, o, s);
    this._size = this._paddingTop + this.groups.reduce((a, l) => a + l.size * (l.range.end - l.range.start), 0);
  }
  get count() {
    const n = this.groups.length;
    if (n) {
      return this.groups[n - 1].range.end;
    } else {
      return 0;
    }
  }
  get size() {
    return this._size;
  }
  indexAt(n) {
    if (n < 0) {
      return -1;
    }
    if (n < this._paddingTop) {
      return 0;
    }
    let e = 0;
    let t = this._paddingTop;
    for (const i of this.groups) {
      const r = i.range.end - i.range.start;
      const s = t + r * i.size;
      if (n < s) {
        return e + Math.floor((n - t) / i.size);
      }
      e += r;
      t = s;
    }
    return e;
  }
  indexAfter(n) {
    return Math.min(this.indexAt(n) + 1, this.count);
  }
  positionAt(n) {
    if (n < 0) {
      return -1;
    }
    let e = 0;
    let t = 0;
    for (const i of this.groups) {
      const r = i.range.end - i.range.start;
      const s = t + r;
      if (n < s) {
        return this._paddingTop + e + (n - t) * i.size;
      }
      e += r * i.size;
      t = s;
    }
    return -1;
  }
};

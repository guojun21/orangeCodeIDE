"use strict";

// Module: out-build/vs/workbench/contrib/notebook/browser/view/notebookCellListView.js
// Offset: 33028897 (bundle byte offset)
// Size: 5221 bytes
ZVe();
UVe();
Cwu = class {
  get paddingTop() {
    return this._paddingTop;
  }
  set paddingTop(n) {
    this._size = this._size + n - this._paddingTop;
    this._paddingTop = n;
  }
  get count() {
    return this._items.length;
  }
  get size() {
    return this._size;
  }
  constructor(n) {
    this._items = [];
    this._whitespace = [];
    this._prefixSumComputer = new iTc([]);
    this._size = 0;
    this._paddingTop = 0;
    this._paddingTop = n ?? 0;
    this._size = this._paddingTop;
  }
  getWhitespaces() {
    return this._whitespace;
  }
  restoreWhitespace(n) {
    this._whitespace = n;
    this._size = this._paddingTop + this._items.reduce((e, t) => e + t.size, 0) + this._whitespace.reduce((e, t) => e + t.size, 0);
  }
  splice(n, e, t) {
    const i = t ?? [];
    this._items.splice(n, e, ...i);
    this._size = this._paddingTop + this._items.reduce((s, o) => s + o.size, 0) + this._whitespace.reduce((s, o) => s + o.size, 0);
    this._prefixSumComputer.removeValues(n, e);
    const r = [];
    for (let s = 0; s < i.length; s++) {
      const o = s + n;
      const a = this._whitespace.filter(l => l.afterPosition === o + 1);
      if (a.length > 0) {
        r.push(i[s].size + a.reduce((l, u) => l + u.size, 0));
      } else {
        r.push(i[s].size);
      }
    }
    this._prefixSumComputer.insertValues(n, r);
    for (let s = n; s < this._items.length; s++) {
      const o = this._whitespace.filter(a => a.afterPosition === s + 1);
      if (o.length > 0) {
        this._prefixSumComputer.setValue(s, this._items[s].size + o.reduce((a, l) => a + l.size, 0));
      } else {
        this._prefixSumComputer.setValue(s, this._items[s].size);
      }
    }
  }
  insertWhitespace(n, e, t) {
    let i = 0;
    const r = this._whitespace.filter(s => s.afterPosition === e);
    if (r.length > 0) {
      i = Math.max(...r.map(s => s.priority)) + 1;
    }
    this._whitespace.push({
      id: n,
      afterPosition: e,
      size: t,
      priority: i
    });
    this._size += t;
    this._whitespace.sort((s, o) => s.afterPosition === o.afterPosition ? s.priority - o.priority : s.afterPosition - o.afterPosition);
    if (e > 0) {
      const s = e - 1;
      const a = this._items[s].size + t;
      this._prefixSumComputer.setValue(s, a);
    }
  }
  changeOneWhitespace(n, e, t) {
    const i = this._whitespace.findIndex(r => r.id === n);
    if (i !== -1) {
      const r = this._whitespace[i];
      const s = r.afterPosition;
      r.afterPosition = e;
      const o = r.size;
      const a = t - o;
      r.size = t;
      this._size += a;
      if (s > 0 && s <= this._items.length) {
        const l = s - 1;
        const d = this._items[l].size;
        this._prefixSumComputer.setValue(l, d);
      }
      if (e > 0 && e <= this._items.length) {
        const l = e - 1;
        const d = this._items[l].size + t;
        this._prefixSumComputer.setValue(l, d);
      }
    }
  }
  removeWhitespace(n) {
    const e = this._whitespace.findIndex(t => t.id === n);
    if (e !== -1) {
      const t = this._whitespace[e];
      this._whitespace.splice(e, 1);
      this._size -= t.size;
      if (t.afterPosition > 0) {
        const i = t.afterPosition - 1;
        const r = this._items[i].size;
        const s = this._whitespace.filter(a => a.afterPosition === t.afterPosition);
        const o = r + s.reduce((a, l) => a + l.size, 0);
        this._prefixSumComputer.setValue(i, o);
      }
    }
  }
  getWhitespacePosition(n) {
    const e = this._whitespace.find(a => a.id === n);
    if (!e) {
      throw new Error("Whitespace not found");
    }
    const t = e.afterPosition;
    if (t === 0) {
      return this._whitespace.filter(l => l.afterPosition === t && l.priority < e.priority).reduce((l, u) => l + u.size, 0) + this.paddingTop;
    }
    const i = this._whitespace.filter(a => a.afterPosition === 0).reduce((a, l) => a + l.size, 0);
    const r = t - 1;
    const s = this._prefixSumComputer.getPrefixSum(r);
    const o = this._items[r].size;
    return s + o + i + this.paddingTop;
  }
  indexAt(n) {
    if (n < 0) {
      return -1;
    }
    const e = this._whitespace.filter(i => i.afterPosition === 0).reduce((i, r) => i + r.size, 0);
    const t = n - (this._paddingTop + e);
    if (t <= 0) {
      return 0;
    } else if (t >= this._size - this._paddingTop - e) {
      return this.count;
    } else {
      return this._prefixSumComputer.getIndexOf(Math.trunc(t)).index;
    }
  }
  indexAfter(n) {
    const e = this.indexAt(n);
    return Math.min(e + 1, this._items.length);
  }
  positionAt(n) {
    if (n < 0 || this.count === 0 || n >= this.count) {
      return -1;
    }
    const e = this._whitespace.filter(t => t.afterPosition === 0).reduce((t, i) => t + i.size, 0);
    return this._prefixSumComputer.getPrefixSum(n) + this._paddingTop + e;
  }
};
H9f = class extends joe {
  constructor() {
    super(...arguments);
    this._lastWhitespaceId = 0;
    this._renderingStack = 0;
  }
  get inRenderingTransaction() {
    return this._renderingStack > 0;
  }
  get notebookRangeMap() {
    return this.rangeMap;
  }
  render(n, e, t, i, r, s) {
    this._renderingStack++;
    super.render(n, e, t, i, r, s);
    this._renderingStack--;
  }
  _rerender(n, e, t) {
    this._renderingStack++;
    super._rerender(n, e, t);
    this._renderingStack--;
  }
  createRangeMap(n) {
    const e = this.rangeMap;
    if (e) {
      const t = new Cwu(n);
      t.restoreWhitespace(e.getWhitespaces());
      return t;
    } else {
      return new Cwu(n);
    }
  }
  insertWhitespace(n, e) {
    const t = this.scrollTop;
    const i = `${++this._lastWhitespaceId}`;
    const r = this.getRenderRange(this.lastRenderTop, this.lastRenderHeight);
    const s = this.elementTop(n);
    const o = t > s;
    this.notebookRangeMap.insertWhitespace(i, n, e);
    const a = o ? t + e : t;
    this.render(r, a, this.lastRenderHeight, undefined, undefined, false);
    this._rerender(a, this.renderHeight, false);
    this.eventuallyUpdateScrollDimensions();
    return i;
  }
  changeOneWhitespace(n, e, t) {
    const i = this.scrollTop;
    const r = this.getRenderRange(this.lastRenderTop, this.lastRenderHeight);
    if (this.notebookRangeMap.getWhitespacePosition(n) > i) {
      this.notebookRangeMap.changeOneWhitespace(n, e, t);
      this.render(r, i, this.lastRenderHeight, undefined, undefined, false);
      this._rerender(i, this.renderHeight, false);
      this.eventuallyUpdateScrollDimensions();
    } else {
      this.notebookRangeMap.changeOneWhitespace(n, e, t);
      this.eventuallyUpdateScrollDimensions();
    }
  }
  removeWhitespace(n) {
    const e = this.scrollTop;
    const t = this.getRenderRange(this.lastRenderTop, this.lastRenderHeight);
    this.notebookRangeMap.removeWhitespace(n);
    this.render(t, e, this.lastRenderHeight, undefined, undefined, false);
    this._rerender(e, this.renderHeight, false);
    this.eventuallyUpdateScrollDimensions();
  }
  getWhitespacePosition(n) {
    return this.notebookRangeMap.getWhitespacePosition(n);
  }
};

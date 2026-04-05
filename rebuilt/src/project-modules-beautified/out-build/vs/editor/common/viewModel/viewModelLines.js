"use strict";

// Module: out-build/vs/editor/common/viewModel/viewModelLines.js
// Offset: 1391827 (bundle byte offset)
// Size: 20177 bytes
Vs();
tl();
ts();
GEc();
bv();
Tft();
Uxc();
jaA();
UVe();
Lte();
Ubh = class {
  constructor(n, e, t, i, r, s, o, a, l, u) {
    this._editorId = n;
    this.model = e;
    this._validModelVersionId = -1;
    this._domLineBreaksComputerFactory = t;
    this._monospaceLineBreaksComputerFactory = i;
    this.fontInfo = r;
    this.tabSize = s;
    this.wrappingStrategy = o;
    this.wrappingColumn = a;
    this.wrappingIndent = l;
    this.wordBreak = u;
    this._constructLines(true, null);
  }
  dispose() {
    this.hiddenAreasDecorationIds = this.model.deltaDecorations(this.hiddenAreasDecorationIds, []);
  }
  createCoordinatesConverter() {
    return new $bh(this);
  }
  _constructLines(n, e) {
    this.modelLineProjections = [];
    if (n) {
      this.hiddenAreasDecorationIds = this.model.deltaDecorations(this.hiddenAreasDecorationIds, []);
    }
    const t = this.model.getLinesContent();
    const i = this.model.getInjectedTextDecorations(this._editorId);
    const r = t.length;
    const s = this.createLineBreaksComputer();
    const o = new Ebe(o9e.fromDecorations(i));
    for (let f = 0; f < r; f++) {
      const A = o.takeWhile(w => w.lineNumber === f + 1);
      s.addRequest(t[f], A, e ? e[f] : null);
    }
    const a = s.finalize();
    const l = [];
    const u = this.hiddenAreasDecorationIds.map(f => this.model.getDecorationRange(f)).sort(Zt.compareRangesUsingStarts);
    let d = 1;
    let m = 0;
    let p = -1;
    let g = p + 1 < u.length ? m + 1 : r + 2;
    for (let f = 0; f < r; f++) {
      const A = f + 1;
      if (A === g) {
        p++;
        d = u[p].startLineNumber;
        m = u[p].endLineNumber;
        g = p + 1 < u.length ? m + 1 : r + 2;
      }
      const w = A >= d && A <= m;
      const C = eTc(a[f], !w);
      l[f] = C.getViewLineCount();
      this.modelLineProjections[f] = C;
    }
    this._validModelVersionId = this.model.getVersionId();
    this.projectedModelLineLineCounts = new iTc(l);
  }
  getHiddenAreas() {
    return this.hiddenAreasDecorationIds.map(n => this.model.getDecorationRange(n));
  }
  setHiddenAreas(n) {
    const e = n.map(m => this.model.validateRange(m));
    const t = zaA(e);
    const i = this.hiddenAreasDecorationIds.map(m => this.model.getDecorationRange(m)).sort(Zt.compareRangesUsingStarts);
    if (t.length === i.length) {
      let m = false;
      for (let p = 0; p < t.length; p++) {
        if (!t[p].equalsRange(i[p])) {
          m = true;
          break;
        }
      }
      if (!m) {
        return false;
      }
    }
    const r = t.map(m => ({
      range: m,
      options: Zh.EMPTY
    }));
    this.hiddenAreasDecorationIds = this.model.deltaDecorations(this.hiddenAreasDecorationIds, r);
    const s = t;
    let o = 1;
    let a = 0;
    let l = -1;
    let u = l + 1 < s.length ? a + 1 : this.modelLineProjections.length + 2;
    let d = false;
    for (let m = 0; m < this.modelLineProjections.length; m++) {
      const p = m + 1;
      if (p === u) {
        l++;
        o = s[l].startLineNumber;
        a = s[l].endLineNumber;
        u = l + 1 < s.length ? a + 1 : this.modelLineProjections.length + 2;
      }
      let g = false;
      if (p >= o && p <= a) {
        if (this.modelLineProjections[m].isVisible()) {
          this.modelLineProjections[m] = this.modelLineProjections[m].setVisible(false);
          g = true;
        }
      } else {
        d = true;
        if (!this.modelLineProjections[m].isVisible()) {
          this.modelLineProjections[m] = this.modelLineProjections[m].setVisible(true);
          g = true;
        }
      }
      if (g) {
        const f = this.modelLineProjections[m].getViewLineCount();
        this.projectedModelLineLineCounts.setValue(m, f);
      }
    }
    if (!d) {
      this.setHiddenAreas([]);
    }
    return true;
  }
  modelPositionIsVisible(n, e) {
    if (n < 1 || n > this.modelLineProjections.length) {
      return false;
    } else {
      return this.modelLineProjections[n - 1].isVisible();
    }
  }
  getModelLineViewLineCount(n) {
    if (n < 1 || n > this.modelLineProjections.length) {
      return 1;
    } else {
      return this.modelLineProjections[n - 1].getViewLineCount();
    }
  }
  setTabSize(n) {
    if (this.tabSize === n) {
      return false;
    } else {
      this.tabSize = n;
      this._constructLines(false, null);
      return true;
    }
  }
  setWrappingSettings(n, e, t, i, r) {
    const s = this.fontInfo.equals(n);
    const o = this.wrappingStrategy === e;
    const a = this.wrappingColumn === t;
    const l = this.wrappingIndent === i;
    const u = this.wordBreak === r;
    if (s && o && a && l && u) {
      return false;
    }
    const d = s && o && !a && l && u;
    this.fontInfo = n;
    this.wrappingStrategy = e;
    this.wrappingColumn = t;
    this.wrappingIndent = i;
    this.wordBreak = r;
    let m = null;
    if (d) {
      m = [];
      for (let p = 0, g = this.modelLineProjections.length; p < g; p++) {
        m[p] = this.modelLineProjections[p].getProjectionData();
      }
    }
    this._constructLines(false, m);
    return true;
  }
  createLineBreaksComputer() {
    return (this.wrappingStrategy === "advanced" ? this._domLineBreaksComputerFactory : this._monospaceLineBreaksComputerFactory).createLineBreaksComputer(this.fontInfo, this.tabSize, this.wrappingColumn, this.wrappingIndent, this.wordBreak);
  }
  onModelFlushed() {
    this._constructLines(true, null);
  }
  onModelLinesDeleted(n, e, t) {
    if (!n || n <= this._validModelVersionId) {
      return null;
    }
    const i = e === 1 ? 1 : this.projectedModelLineLineCounts.getPrefixSum(e - 1) + 1;
    const r = this.projectedModelLineLineCounts.getPrefixSum(t);
    this.modelLineProjections.splice(e - 1, t - e + 1);
    this.projectedModelLineLineCounts.removeValues(e - 1, t - e + 1);
    return new GOo(i, r);
  }
  onModelLinesInserted(n, e, t, i) {
    if (!n || n <= this._validModelVersionId) {
      return null;
    }
    const r = e > 2 && !this.modelLineProjections[e - 2].isVisible();
    const s = e === 1 ? 1 : this.projectedModelLineLineCounts.getPrefixSum(e - 1) + 1;
    let o = 0;
    const a = [];
    const l = [];
    for (let u = 0, d = i.length; u < d; u++) {
      const m = eTc(i[u], !r);
      a.push(m);
      const p = m.getViewLineCount();
      o += p;
      l[u] = p;
    }
    this.modelLineProjections = this.modelLineProjections.slice(0, e - 1).concat(a).concat(this.modelLineProjections.slice(e - 1));
    this.projectedModelLineLineCounts.insertValues(e - 1, l);
    return new WOo(s, s + o - 1);
  }
  onModelLineChanged(n, e, t) {
    if (n !== null && n <= this._validModelVersionId) {
      return [false, null, null, null];
    }
    const i = e - 1;
    const r = this.modelLineProjections[i].getViewLineCount();
    const s = this.modelLineProjections[i].isVisible();
    const o = eTc(t, s);
    this.modelLineProjections[i] = o;
    const a = this.modelLineProjections[i].getViewLineCount();
    let l = false;
    let u = 0;
    let d = -1;
    let m = 0;
    let p = -1;
    let g = 0;
    let f = -1;
    if (r > a) {
      u = this.projectedModelLineLineCounts.getPrefixSum(e - 1) + 1;
      d = u + a - 1;
      g = d + 1;
      f = g + (r - a) - 1;
      l = true;
    } else if (r < a) {
      u = this.projectedModelLineLineCounts.getPrefixSum(e - 1) + 1;
      d = u + r - 1;
      m = d + 1;
      p = m + (a - r) - 1;
      l = true;
    } else {
      u = this.projectedModelLineLineCounts.getPrefixSum(e - 1) + 1;
      d = u + a - 1;
    }
    this.projectedModelLineLineCounts.setValue(i, a);
    const A = u <= d ? new Oxc(u, d - u + 1) : null;
    const w = m <= p ? new WOo(m, p) : null;
    const C = g <= f ? new GOo(g, f) : null;
    return [l, A, w, C];
  }
  acceptVersionId(n) {
    this._validModelVersionId = n;
    if (this.modelLineProjections.length === 1 && !this.modelLineProjections[0].isVisible()) {
      this.setHiddenAreas([]);
    }
  }
  getViewLineCount() {
    return this.projectedModelLineLineCounts.getTotalSum();
  }
  _toValidViewLineNumber(n) {
    if (n < 1) {
      return 1;
    }
    const e = this.getViewLineCount();
    if (n > e) {
      return e;
    } else {
      return n | 0;
    }
  }
  getActiveIndentGuide(n, e, t) {
    n = this._toValidViewLineNumber(n);
    e = this._toValidViewLineNumber(e);
    t = this._toValidViewLineNumber(t);
    const i = this.convertViewPositionToModelPosition(n, this.getViewLineMinColumn(n));
    const r = this.convertViewPositionToModelPosition(e, this.getViewLineMinColumn(e));
    const s = this.convertViewPositionToModelPosition(t, this.getViewLineMinColumn(t));
    const o = this.model.guides.getActiveIndentGuide(i.lineNumber, r.lineNumber, s.lineNumber);
    const a = this.convertModelPositionToViewPosition(o.startLineNumber, 1);
    const l = this.convertModelPositionToViewPosition(o.endLineNumber, this.model.getLineMaxColumn(o.endLineNumber));
    return {
      startLineNumber: a.lineNumber,
      endLineNumber: l.lineNumber,
      indent: o.indent
    };
  }
  getViewLineInfo(n) {
    n = this._toValidViewLineNumber(n);
    const e = this.projectedModelLineLineCounts.getIndexOf(n - 1);
    const t = e.index;
    const i = e.remainder;
    return new sTc(t + 1, i);
  }
  getMinColumnOfViewLine(n) {
    return this.modelLineProjections[n.modelLineNumber - 1].getViewLineMinColumn(this.model, n.modelLineNumber, n.modelLineWrappedLineIdx);
  }
  getMaxColumnOfViewLine(n) {
    return this.modelLineProjections[n.modelLineNumber - 1].getViewLineMaxColumn(this.model, n.modelLineNumber, n.modelLineWrappedLineIdx);
  }
  getModelStartPositionOfViewLine(n) {
    const e = this.modelLineProjections[n.modelLineNumber - 1];
    const t = e.getViewLineMinColumn(this.model, n.modelLineNumber, n.modelLineWrappedLineIdx);
    const i = e.getModelColumnOfViewPosition(n.modelLineWrappedLineIdx, t);
    return new ar(n.modelLineNumber, i);
  }
  getModelEndPositionOfViewLine(n) {
    const e = this.modelLineProjections[n.modelLineNumber - 1];
    const t = e.getViewLineMaxColumn(this.model, n.modelLineNumber, n.modelLineWrappedLineIdx);
    const i = e.getModelColumnOfViewPosition(n.modelLineWrappedLineIdx, t);
    return new ar(n.modelLineNumber, i);
  }
  getViewLineInfosGroupedByModelRanges(n, e) {
    const t = this.getViewLineInfo(n);
    const i = this.getViewLineInfo(e);
    const r = new Array();
    let s = this.getModelStartPositionOfViewLine(t);
    let o = new Array();
    for (let a = t.modelLineNumber; a <= i.modelLineNumber; a++) {
      const l = this.modelLineProjections[a - 1];
      if (l.isVisible()) {
        const u = a === t.modelLineNumber ? t.modelLineWrappedLineIdx : 0;
        const d = a === i.modelLineNumber ? i.modelLineWrappedLineIdx + 1 : l.getViewLineCount();
        for (let m = u; m < d; m++) {
          o.push(new sTc(a, m));
        }
      }
      if (!l.isVisible() && s) {
        const u = new ar(a - 1, this.model.getLineMaxColumn(a - 1) + 1);
        const d = Zt.fromPositions(s, u);
        r.push(new oTc(d, o));
        o = [];
        s = null;
      } else if (l.isVisible() && !s) {
        s = new ar(a, 1);
      }
    }
    if (s) {
      const a = Zt.fromPositions(s, this.getModelEndPositionOfViewLine(i));
      r.push(new oTc(a, o));
    }
    return r;
  }
  getViewLinesBracketGuides(n, e, t, i) {
    const r = t ? this.convertViewPositionToModelPosition(t.lineNumber, t.column) : null;
    const s = [];
    for (const o of this.getViewLineInfosGroupedByModelRanges(n, e)) {
      const a = o.modelRange.startLineNumber;
      const l = this.model.guides.getLinesBracketGuides(a, o.modelRange.endLineNumber, r, i);
      for (const u of o.viewLines) {
        const m = l[u.modelLineNumber - a].map(p => {
          if (p.forWrappedLinesAfterColumn !== -1 && this.modelLineProjections[u.modelLineNumber - 1].getViewPositionOfModelPosition(0, p.forWrappedLinesAfterColumn).lineNumber >= u.modelLineWrappedLineIdx || p.forWrappedLinesBeforeOrAtColumn !== -1 && this.modelLineProjections[u.modelLineNumber - 1].getViewPositionOfModelPosition(0, p.forWrappedLinesBeforeOrAtColumn).lineNumber < u.modelLineWrappedLineIdx) {
            return;
          }
          if (!p.horizontalLine) {
            return p;
          }
          let g = -1;
          if (p.column !== -1) {
            const w = this.modelLineProjections[u.modelLineNumber - 1].getViewPositionOfModelPosition(0, p.column);
            if (w.lineNumber === u.modelLineWrappedLineIdx) {
              g = w.column;
            } else if (w.lineNumber < u.modelLineWrappedLineIdx) {
              g = this.getMinColumnOfViewLine(u);
            } else if (w.lineNumber > u.modelLineWrappedLineIdx) {
              return;
            }
          }
          const f = this.convertModelPositionToViewPosition(u.modelLineNumber, p.horizontalLine.endColumn);
          const A = this.modelLineProjections[u.modelLineNumber - 1].getViewPositionOfModelPosition(0, p.horizontalLine.endColumn);
          if (A.lineNumber === u.modelLineWrappedLineIdx) {
            return new BVe(p.visibleColumn, g, p.className, new BOt(p.horizontalLine.top, f.column), -1, -1);
          } else if (A.lineNumber < u.modelLineWrappedLineIdx || p.visibleColumn !== -1) {
            return undefined;
          } else {
            return new BVe(p.visibleColumn, g, p.className, new BOt(p.horizontalLine.top, this.getMaxColumnOfViewLine(u)), -1, -1);
          }
        });
        s.push(m.filter(p => !!p));
      }
    }
    return s;
  }
  getViewLinesIndentGuides(n, e) {
    n = this._toValidViewLineNumber(n);
    e = this._toValidViewLineNumber(e);
    const t = this.convertViewPositionToModelPosition(n, this.getViewLineMinColumn(n));
    const i = this.convertViewPositionToModelPosition(e, this.getViewLineMaxColumn(e));
    let r = [];
    const s = [];
    const o = [];
    const a = t.lineNumber - 1;
    const l = i.lineNumber - 1;
    let u = null;
    for (let g = a; g <= l; g++) {
      const f = this.modelLineProjections[g];
      if (f.isVisible()) {
        const A = f.getViewLineNumberOfModelPosition(0, g === a ? t.column : 1);
        const w = f.getViewLineNumberOfModelPosition(0, this.model.getLineMaxColumn(g + 1));
        const C = w - A + 1;
        let x = 0;
        if (C > 1 && f.getViewLineMinColumn(this.model, g + 1, w) === 1) {
          x = A === 0 ? 1 : 2;
        }
        s.push(C);
        o.push(x);
        if (u === null) {
          u = new ar(g + 1, 0);
        }
      } else if (u !== null) {
        r = r.concat(this.model.guides.getLinesIndentGuides(u.lineNumber, g));
        u = null;
      }
    }
    if (u !== null) {
      r = r.concat(this.model.guides.getLinesIndentGuides(u.lineNumber, i.lineNumber));
      u = null;
    }
    const d = e - n + 1;
    const m = new Array(d);
    let p = 0;
    for (let g = 0, f = r.length; g < f; g++) {
      let A = r[g];
      const w = Math.min(d - p, s[g]);
      const C = o[g];
      let x;
      if (C === 2) {
        x = 0;
      } else if (C === 1) {
        x = 1;
      } else {
        x = w;
      }
      for (let I = 0; I < w; I++) {
        if (I === x) {
          A = 0;
        }
        m[p++] = A;
      }
    }
    return m;
  }
  getViewLineContent(n) {
    const e = this.getViewLineInfo(n);
    return this.modelLineProjections[e.modelLineNumber - 1].getViewLineContent(this.model, e.modelLineNumber, e.modelLineWrappedLineIdx);
  }
  getViewLineLength(n) {
    const e = this.getViewLineInfo(n);
    return this.modelLineProjections[e.modelLineNumber - 1].getViewLineLength(this.model, e.modelLineNumber, e.modelLineWrappedLineIdx);
  }
  getViewLineMinColumn(n) {
    const e = this.getViewLineInfo(n);
    return this.modelLineProjections[e.modelLineNumber - 1].getViewLineMinColumn(this.model, e.modelLineNumber, e.modelLineWrappedLineIdx);
  }
  getViewLineMaxColumn(n) {
    const e = this.getViewLineInfo(n);
    return this.modelLineProjections[e.modelLineNumber - 1].getViewLineMaxColumn(this.model, e.modelLineNumber, e.modelLineWrappedLineIdx);
  }
  getViewLineData(n) {
    const e = this.getViewLineInfo(n);
    return this.modelLineProjections[e.modelLineNumber - 1].getViewLineData(this.model, e.modelLineNumber, e.modelLineWrappedLineIdx);
  }
  getViewLinesData(n, e, t) {
    n = this._toValidViewLineNumber(n);
    e = this._toValidViewLineNumber(e);
    const i = this.projectedModelLineLineCounts.getIndexOf(n - 1);
    let r = n;
    const s = i.index;
    const o = i.remainder;
    const a = [];
    for (let l = s, u = this.model.getLineCount(); l < u; l++) {
      const d = this.modelLineProjections[l];
      if (!d.isVisible()) {
        continue;
      }
      const m = l === s ? o : 0;
      let p = d.getViewLineCount() - m;
      let g = false;
      if (r + p > e) {
        g = true;
        p = e - r + 1;
      }
      d.getViewLinesData(this.model, l + 1, m, p, r - n, t, a);
      r += p;
      if (g) {
        break;
      }
    }
    return a;
  }
  validateViewPosition(n, e, t) {
    n = this._toValidViewLineNumber(n);
    const i = this.projectedModelLineLineCounts.getIndexOf(n - 1);
    const r = i.index;
    const s = i.remainder;
    const o = this.modelLineProjections[r];
    const a = o.getViewLineMinColumn(this.model, r + 1, s);
    const l = o.getViewLineMaxColumn(this.model, r + 1, s);
    if (e < a) {
      e = a;
    }
    if (e > l) {
      e = l;
    }
    const u = o.getModelColumnOfViewPosition(s, e);
    if (this.model.validatePosition(new ar(r + 1, u)).equals(t)) {
      return new ar(n, e);
    } else {
      return this.convertModelPositionToViewPosition(t.lineNumber, t.column);
    }
  }
  validateViewRange(n, e) {
    const t = this.validateViewPosition(n.startLineNumber, n.startColumn, e.getStartPosition());
    const i = this.validateViewPosition(n.endLineNumber, n.endColumn, e.getEndPosition());
    return new Zt(t.lineNumber, t.column, i.lineNumber, i.column);
  }
  convertViewPositionToModelPosition(n, e) {
    const t = this.getViewLineInfo(n);
    const i = this.modelLineProjections[t.modelLineNumber - 1].getModelColumnOfViewPosition(t.modelLineWrappedLineIdx, e);
    return this.model.validatePosition(new ar(t.modelLineNumber, i));
  }
  convertViewRangeToModelRange(n) {
    const e = this.convertViewPositionToModelPosition(n.startLineNumber, n.startColumn);
    const t = this.convertViewPositionToModelPosition(n.endLineNumber, n.endColumn);
    return new Zt(e.lineNumber, e.column, t.lineNumber, t.column);
  }
  convertModelPositionToViewPosition(n, e, t = 2, i = false, r = false) {
    const s = this.model.validatePosition(new ar(n, e));
    const o = s.lineNumber;
    const a = s.column;
    let l = o - 1;
    let u = false;
    if (r) {
      while (l < this.modelLineProjections.length && !this.modelLineProjections[l].isVisible()) {
        l++;
        u = true;
      }
    } else {
      while (l > 0 && !this.modelLineProjections[l].isVisible()) {
        l--;
        u = true;
      }
    }
    if (l === 0 && !this.modelLineProjections[l].isVisible()) {
      return new ar(i ? 0 : 1, 1);
    }
    const d = 1 + this.projectedModelLineLineCounts.getPrefixSum(l);
    let m;
    if (u) {
      if (r) {
        m = this.modelLineProjections[l].getViewPositionOfModelPosition(d, 1, t);
      } else {
        m = this.modelLineProjections[l].getViewPositionOfModelPosition(d, this.model.getLineMaxColumn(l + 1), t);
      }
    } else {
      m = this.modelLineProjections[o - 1].getViewPositionOfModelPosition(d, a, t);
    }
    return m;
  }
  convertModelRangeToViewRange(n, e = 0) {
    if (n.isEmpty()) {
      const t = this.convertModelPositionToViewPosition(n.startLineNumber, n.startColumn, e);
      return Zt.fromPositions(t);
    } else {
      const t = this.convertModelPositionToViewPosition(n.startLineNumber, n.startColumn, 1);
      const i = this.convertModelPositionToViewPosition(n.endLineNumber, n.endColumn, 0);
      return new Zt(t.lineNumber, t.column, i.lineNumber, i.column);
    }
  }
  getViewLineNumberOfModelPosition(n, e) {
    let t = n - 1;
    if (this.modelLineProjections[t].isVisible()) {
      const r = 1 + this.projectedModelLineLineCounts.getPrefixSum(t);
      return this.modelLineProjections[t].getViewLineNumberOfModelPosition(r, e);
    }
    while (t > 0 && !this.modelLineProjections[t].isVisible()) {
      t--;
    }
    if (t === 0 && !this.modelLineProjections[t].isVisible()) {
      return 1;
    }
    const i = 1 + this.projectedModelLineLineCounts.getPrefixSum(t);
    return this.modelLineProjections[t].getViewLineNumberOfModelPosition(i, this.model.getLineMaxColumn(t + 1));
  }
  getDecorationsInRange(n, e, t, i, r) {
    const s = this.convertViewPositionToModelPosition(n.startLineNumber, n.startColumn);
    const o = this.convertViewPositionToModelPosition(n.endLineNumber, n.endColumn);
    if (o.lineNumber - s.lineNumber <= n.endLineNumber - n.startLineNumber) {
      return this.model.getDecorationsInRange(new Zt(s.lineNumber, 1, o.lineNumber, o.column), e, t, i, r);
    }
    let a = [];
    const l = s.lineNumber - 1;
    const u = o.lineNumber - 1;
    let d = null;
    for (let f = l; f <= u; f++) {
      if (this.modelLineProjections[f].isVisible()) {
        if (d === null) {
          d = new ar(f + 1, f === l ? s.column : 1);
        }
      } else if (d !== null) {
        const w = this.model.getLineMaxColumn(f);
        a = a.concat(this.model.getDecorationsInRange(new Zt(d.lineNumber, d.column, f, w), e, t, i));
        d = null;
      }
    }
    if (d !== null) {
      a = a.concat(this.model.getDecorationsInRange(new Zt(d.lineNumber, d.column, o.lineNumber, o.column), e, t, i));
      d = null;
    }
    a.sort((f, A) => {
      const w = Zt.compareRangesUsingStarts(f.range, A.range);
      if (w === 0) {
        if (f.id < A.id) {
          return -1;
        } else if (f.id > A.id) {
          return 1;
        } else {
          return 0;
        }
      } else {
        return w;
      }
    });
    const m = [];
    let p = 0;
    let g = null;
    for (const f of a) {
      const A = f.id;
      if (g !== A) {
        g = A;
        m[p++] = f;
      }
    }
    return m;
  }
  getInjectedTextAt(n) {
    const e = this.getViewLineInfo(n.lineNumber);
    return this.modelLineProjections[e.modelLineNumber - 1].getInjectedTextAt(e.modelLineWrappedLineIdx, n.column);
  }
  normalizePosition(n, e) {
    const t = this.getViewLineInfo(n.lineNumber);
    return this.modelLineProjections[t.modelLineNumber - 1].normalizePosition(t.modelLineWrappedLineIdx, n, e);
  }
  getLineIndentColumn(n) {
    const e = this.getViewLineInfo(n);
    if (e.modelLineWrappedLineIdx === 0) {
      return this.model.getLineIndentColumn(e.modelLineNumber);
    } else {
      return 0;
    }
  }
};
sTc = class {
  get isWrappedLineContinuation() {
    return this.modelLineWrappedLineIdx > 0;
  }
  constructor(n, e) {
    this.modelLineNumber = n;
    this.modelLineWrappedLineIdx = e;
  }
};
oTc = class {
  constructor(n, e) {
    this.modelRange = n;
    this.viewLines = e;
  }
};
$bh = class {
  constructor(n) {
    this._lines = n;
  }
  convertViewPositionToModelPosition(n) {
    return this._lines.convertViewPositionToModelPosition(n.lineNumber, n.column);
  }
  convertViewRangeToModelRange(n) {
    return this._lines.convertViewRangeToModelRange(n);
  }
  validateViewPosition(n, e) {
    return this._lines.validateViewPosition(n.lineNumber, n.column, e);
  }
  validateViewRange(n, e) {
    return this._lines.validateViewRange(n, e);
  }
  convertModelPositionToViewPosition(n, e, t, i) {
    return this._lines.convertModelPositionToViewPosition(n.lineNumber, n.column, e, t, i);
  }
  convertModelRangeToViewRange(n, e) {
    return this._lines.convertModelRangeToViewRange(n, e);
  }
  modelPositionIsVisible(n) {
    return this._lines.modelPositionIsVisible(n.lineNumber, n.column);
  }
  getModelLineViewLineCount(n) {
    return this._lines.getModelLineViewLineCount(n);
  }
  getViewLineNumberOfModelPosition(n, e) {
    return this._lines.getViewLineNumberOfModelPosition(n, e);
  }
};
(function (n) {
  n[n.BlockNone = 0] = "BlockNone";
  n[n.BlockSubsequent = 1] = "BlockSubsequent";
  n[n.BlockAll = 2] = "BlockAll";
})(qbh ||= {});
Hbh = class {
  constructor(n) {
    this.model = n;
  }
  dispose() {}
  createCoordinatesConverter() {
    return new Jbh(this);
  }
  getHiddenAreas() {
    return [];
  }
  setHiddenAreas(n) {
    return false;
  }
  setTabSize(n) {
    return false;
  }
  setWrappingSettings(n, e, t, i) {
    return false;
  }
  createLineBreaksComputer() {
    const n = [];
    return {
      addRequest: (e, t, i) => {
        n.push(null);
      },
      finalize: () => n
    };
  }
  onModelFlushed() {}
  onModelLinesDeleted(n, e, t) {
    return new GOo(e, t);
  }
  onModelLinesInserted(n, e, t, i) {
    return new WOo(e, t);
  }
  onModelLineChanged(n, e, t) {
    return [false, new Oxc(e, 1), null, null];
  }
  acceptVersionId(n) {}
  getViewLineCount() {
    return this.model.getLineCount();
  }
  getActiveIndentGuide(n, e, t) {
    return {
      startLineNumber: n,
      endLineNumber: n,
      indent: 0
    };
  }
  getViewLinesBracketGuides(n, e, t) {
    return new Array(e - n + 1).fill([]);
  }
  getViewLinesIndentGuides(n, e) {
    const t = e - n + 1;
    const i = new Array(t);
    for (let r = 0; r < t; r++) {
      i[r] = 0;
    }
    return i;
  }
  getViewLineContent(n) {
    return this.model.getLineContent(n);
  }
  getViewLineLength(n) {
    return this.model.getLineLength(n);
  }
  getViewLineMinColumn(n) {
    return this.model.getLineMinColumn(n);
  }
  getViewLineMaxColumn(n) {
    return this.model.getLineMaxColumn(n);
  }
  getViewLineData(n) {
    const e = this.model.tokenization.getLineTokens(n);
    const t = e.getLineContent();
    return new VOo(t, false, 1, t.length + 1, 0, e.inflate(), null);
  }
  getViewLinesData(n, e, t) {
    const i = this.model.getLineCount();
    n = Math.min(Math.max(1, n), i);
    e = Math.min(Math.max(1, e), i);
    const r = [];
    for (let s = n; s <= e; s++) {
      const o = s - n;
      r[o] = t[o] ? this.getViewLineData(s) : null;
    }
    return r;
  }
  getDecorationsInRange(n, e, t, i, r) {
    return this.model.getDecorationsInRange(n, e, t, i, r);
  }
  normalizePosition(n, e) {
    return this.model.normalizePosition(n, e);
  }
  getLineIndentColumn(n) {
    return this.model.getLineIndentColumn(n);
  }
  getInjectedTextAt(n) {
    return null;
  }
};
Jbh = class {
  constructor(n) {
    this._lines = n;
  }
  _validPosition(n) {
    return this._lines.model.validatePosition(n);
  }
  _validRange(n) {
    return this._lines.model.validateRange(n);
  }
  convertViewPositionToModelPosition(n) {
    return this._validPosition(n);
  }
  convertViewRangeToModelRange(n) {
    return this._validRange(n);
  }
  validateViewPosition(n, e) {
    return this._validPosition(e);
  }
  validateViewRange(n, e) {
    return this._validRange(e);
  }
  convertModelPositionToViewPosition(n) {
    return this._validPosition(n);
  }
  convertModelRangeToViewRange(n) {
    return this._validRange(n);
  }
  modelPositionIsVisible(n) {
    const e = this._lines.model.getLineCount();
    return !(n.lineNumber < 1) && !(n.lineNumber > e);
  }
  modelRangeIsVisible(n) {
    const e = this._lines.model.getLineCount();
    return !(n.startLineNumber < 1) && !(n.startLineNumber > e) && !(n.endLineNumber < 1) && !(n.endLineNumber > e);
  }
  getModelLineViewLineCount(n) {
    return 1;
  }
  getViewLineNumberOfModelPosition(n, e) {
    return n;
  }
};

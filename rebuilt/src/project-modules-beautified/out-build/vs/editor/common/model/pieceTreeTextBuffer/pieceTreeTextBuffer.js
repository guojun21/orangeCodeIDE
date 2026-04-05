"use strict";

// Module: out-build/vs/editor/common/model/pieceTreeTextBuffer/pieceTreeTextBuffer.js
// Offset: 1175024 (bundle byte offset)
// Size: 7608 bytes
yn();
oa();
ts();
xw();
ggh();
EVe();
Oph();
rt();
bOo = class uNi extends at {
  constructor(e, t, i, r, s, o, a) {
    super();
    this._onDidChangeContent = this._register(new Qe());
    this.onDidChangeContent = this._onDidChangeContent.event;
    this._BOM = t;
    this._mightContainNonBasicASCII = !o;
    this._mightContainRTL = r;
    this._mightContainUnusualLineTerminators = s;
    this._pieceTree = new pgh(e, i, a);
  }
  equals(e) {
    if (!(e instanceof uNi) || this._BOM !== e._BOM || this.getEOL() !== e.getEOL()) {
      return false;
    } else {
      return this._pieceTree.equal(e._pieceTree);
    }
  }
  mightContainRTL() {
    return this._mightContainRTL;
  }
  mightContainUnusualLineTerminators() {
    return this._mightContainUnusualLineTerminators;
  }
  resetMightContainUnusualLineTerminators() {
    this._mightContainUnusualLineTerminators = false;
  }
  mightContainNonBasicASCII() {
    return this._mightContainNonBasicASCII;
  }
  getBOM() {
    return this._BOM;
  }
  getEOL() {
    return this._pieceTree.getEOL();
  }
  createSnapshot(e) {
    return this._pieceTree.createSnapshot(e ? this._BOM : "");
  }
  getOffsetAt(e, t) {
    return this._pieceTree.getOffsetAt(e, t);
  }
  getPositionAt(e) {
    return this._pieceTree.getPositionAt(e);
  }
  getRangeAt(e, t) {
    const i = e + t;
    const r = this.getPositionAt(e);
    const s = this.getPositionAt(i);
    return new Zt(r.lineNumber, r.column, s.lineNumber, s.column);
  }
  getValueInRange(e, t = 0) {
    if (e.isEmpty()) {
      return "";
    }
    const i = this._getEndOfLine(t);
    return this._pieceTree.getValueInRange(e, i);
  }
  getValueLengthInRange(e, t = 0) {
    if (e.isEmpty()) {
      return 0;
    }
    if (e.startLineNumber === e.endLineNumber) {
      return e.endColumn - e.startColumn;
    }
    const i = this.getOffsetAt(e.startLineNumber, e.startColumn);
    const r = this.getOffsetAt(e.endLineNumber, e.endColumn);
    let s = 0;
    const o = this._getEndOfLine(t);
    const a = this.getEOL();
    if (o.length !== a.length) {
      const l = o.length - a.length;
      const u = e.endLineNumber - e.startLineNumber;
      s = l * u;
    }
    return r - i + s;
  }
  getCharacterCountInRange(e, t = 0) {
    if (this._mightContainNonBasicASCII) {
      let i = 0;
      const r = e.startLineNumber;
      const s = e.endLineNumber;
      for (let o = r; o <= s; o++) {
        const a = this.getLineContent(o);
        const l = o === r ? e.startColumn - 1 : 0;
        const u = o === s ? e.endColumn - 1 : a.length;
        for (let d = l; d < u; d++) {
          if (d3(a.charCodeAt(d))) {
            i = i + 1;
            d = d + 1;
          } else {
            i = i + 1;
          }
        }
      }
      i += this._getEndOfLine(t).length * (s - r);
      return i;
    }
    return this.getValueLengthInRange(e, t);
  }
  getNearestChunk(e) {
    return this._pieceTree.getNearestChunk(e);
  }
  getLength() {
    return this._pieceTree.getLength();
  }
  getLineCount() {
    return this._pieceTree.getLineCount();
  }
  getLinesContent() {
    return this._pieceTree.getLinesContent();
  }
  getLineContent(e) {
    return this._pieceTree.getLineContent(e);
  }
  getLineCharCode(e, t) {
    return this._pieceTree.getLineCharCode(e, t);
  }
  getCharCode(e) {
    return this._pieceTree.getCharCode(e);
  }
  getLineLength(e) {
    return this._pieceTree.getLineLength(e);
  }
  getLineMinColumn(e) {
    return 1;
  }
  getLineMaxColumn(e) {
    return this.getLineLength(e) + 1;
  }
  getLineFirstNonWhitespaceColumn(e) {
    const t = TH(this.getLineContent(e));
    if (t === -1) {
      return 0;
    } else {
      return t + 1;
    }
  }
  getLineLastNonWhitespaceColumn(e) {
    const t = mde(this.getLineContent(e));
    if (t === -1) {
      return 0;
    } else {
      return t + 2;
    }
  }
  _getEndOfLine(e) {
    switch (e) {
      case 1:
        return `
`;
      case 2:
        return `\r
`;
      case 0:
        return this.getEOL();
      default:
        throw new Error("Unknown EOL preference");
    }
  }
  setEOL(e) {
    this._pieceTree.setEOL(e);
  }
  applyEdits(e, t, i) {
    let r = this._mightContainRTL;
    let s = this._mightContainUnusualLineTerminators;
    let o = this._mightContainNonBasicASCII;
    let a = true;
    let l = [];
    for (let A = 0; A < e.length; A++) {
      const w = e[A];
      if (a && w._isTracked) {
        a = false;
      }
      const C = w.range;
      if (w.text) {
        let N = true;
        if (!o) {
          N = !fgt(w.text);
          o = N;
        }
        if (!r && N) {
          r = Tze(w.text);
        }
        if (!s && N) {
          s = Wih(w.text);
        }
      }
      let x = "";
      let I = 0;
      let B = 0;
      let R = 0;
      if (w.text) {
        let N;
        [I, B, R, N] = Vbe(w.text);
        const M = this.getEOL();
        if (N === 0 || N === (M === `\r
` ? 2 : 1)) {
          x = w.text;
        } else {
          x = w.text.replace(/\r\n|\r|\n/g, M);
        }
      }
      l[A] = {
        sortIndex: A,
        identifier: w.identifier || null,
        range: C,
        rangeOffset: this.getOffsetAt(C.startLineNumber, C.startColumn),
        rangeLength: this.getValueLengthInRange(C),
        text: x,
        eolCount: I,
        firstLineLength: B,
        lastLineLength: R,
        forceMoveMarkers: !!w.forceMoveMarkers,
        isAutoWhitespaceEdit: w.isAutoWhitespaceEdit || false
      };
    }
    l.sort(uNi._sortOpsAscending);
    let u = false;
    for (let A = 0, w = l.length - 1; A < w; A++) {
      const C = l[A].range.getEndPosition();
      const x = l[A + 1].range.getStartPosition();
      if (x.isBeforeOrEqual(C)) {
        if (x.isBefore(C)) {
          throw new Error("Overlapping ranges are not allowed!");
        }
        u = true;
      }
    }
    if (a) {
      l = this._reduceOperations(l);
    }
    const d = i || t ? uNi._getInverseEditRanges(l) : [];
    const m = [];
    if (t) {
      for (let A = 0; A < l.length; A++) {
        const w = l[A];
        const C = d[A];
        if (w.isAutoWhitespaceEdit && w.range.isEmpty()) {
          for (let x = C.startLineNumber; x <= C.endLineNumber; x++) {
            let I = "";
            if (x !== C.startLineNumber || !(I = this.getLineContent(w.range.startLineNumber), TH(I) !== -1)) {
              m.push({
                lineNumber: x,
                oldContent: I
              });
            }
          }
        }
      }
    }
    let p = null;
    if (i) {
      let A = 0;
      p = [];
      for (let w = 0; w < l.length; w++) {
        const C = l[w];
        const x = d[w];
        const I = this.getValueInRange(C.range);
        const B = C.rangeOffset + A;
        A += C.text.length - I.length;
        p[w] = {
          sortIndex: C.sortIndex,
          identifier: C.identifier,
          range: x,
          text: I,
          textChange: new BSe(C.rangeOffset, I, B, C.text)
        };
      }
      if (!u) {
        p.sort((w, C) => w.sortIndex - C.sortIndex);
      }
    }
    this._mightContainRTL = r;
    this._mightContainUnusualLineTerminators = s;
    this._mightContainNonBasicASCII = o;
    const g = this._doApplyEdits(l);
    let f = null;
    if (t && m.length > 0) {
      m.sort((A, w) => w.lineNumber - A.lineNumber);
      f = [];
      for (let A = 0, w = m.length; A < w; A++) {
        const C = m[A].lineNumber;
        if (A > 0 && m[A - 1].lineNumber === C) {
          continue;
        }
        const x = m[A].oldContent;
        const I = this.getLineContent(C);
        if (I.length !== 0 && I !== x && TH(I) === -1) {
          f.push(C);
        }
      }
    }
    this._onDidChangeContent.fire();
    return new lph(p, g, f);
  }
  _reduceOperations(e) {
    if (e.length < 1000) {
      return e;
    } else {
      return [this._toSingleEditOperation(e)];
    }
  }
  _toSingleEditOperation(e) {
    let t = false;
    const i = e[0].range;
    const r = e[e.length - 1].range;
    const s = new Zt(i.startLineNumber, i.startColumn, r.endLineNumber, r.endColumn);
    let o = i.startLineNumber;
    let a = i.startColumn;
    const l = [];
    for (let g = 0, f = e.length; g < f; g++) {
      const A = e[g];
      const w = A.range;
      t = t || A.forceMoveMarkers;
      l.push(this.getValueInRange(new Zt(o, a, w.startLineNumber, w.startColumn)));
      if (A.text.length > 0) {
        l.push(A.text);
      }
      o = w.endLineNumber;
      a = w.endColumn;
    }
    const u = l.join("");
    const [d, m, p] = Vbe(u);
    return {
      sortIndex: 0,
      identifier: e[0].identifier,
      range: s,
      rangeOffset: this.getOffsetAt(s.startLineNumber, s.startColumn),
      rangeLength: this.getValueLengthInRange(s, 0),
      text: u,
      eolCount: d,
      firstLineLength: m,
      lastLineLength: p,
      forceMoveMarkers: t,
      isAutoWhitespaceEdit: false
    };
  }
  _doApplyEdits(e) {
    e.sort(uNi._sortOpsDescending);
    const t = [];
    for (let i = 0; i < e.length; i++) {
      const r = e[i];
      const s = r.range.startLineNumber;
      const o = r.range.startColumn;
      const a = r.range.endLineNumber;
      const l = r.range.endColumn;
      if (s === a && o === l && r.text.length === 0) {
        continue;
      }
      if (r.text) {
        this._pieceTree.delete(r.rangeOffset, r.rangeLength);
        this._pieceTree.insert(r.rangeOffset, r.text, true);
      } else {
        this._pieceTree.delete(r.rangeOffset, r.rangeLength);
      }
      const u = new Zt(s, o, a, l);
      t.push({
        range: u,
        rangeLength: r.rangeLength,
        text: r.text,
        rangeOffset: r.rangeOffset,
        forceMoveMarkers: r.forceMoveMarkers
      });
    }
    return t;
  }
  findMatchesLineByLine(e, t, i, r) {
    return this._pieceTree.findMatchesLineByLine(e, t, i, r);
  }
  getPieceTree() {
    return this._pieceTree;
  }
  static _getInverseEditRange(e, t) {
    const i = e.startLineNumber;
    const r = e.startColumn;
    const [s, o, a] = Vbe(t);
    let l;
    if (t.length > 0) {
      const u = s + 1;
      if (u === 1) {
        l = new Zt(i, r, i, r + o);
      } else {
        l = new Zt(i, r, i + u - 1, a + 1);
      }
    } else {
      l = new Zt(i, r, i, r);
    }
    return l;
  }
  static _getInverseEditRanges(e) {
    const t = [];
    let i = 0;
    let r = 0;
    let s = null;
    for (let o = 0, a = e.length; o < a; o++) {
      const l = e[o];
      let u;
      let d;
      if (s) {
        if (s.range.endLineNumber === l.range.startLineNumber) {
          u = i;
          d = r + (l.range.startColumn - s.range.endColumn);
        } else {
          u = i + (l.range.startLineNumber - s.range.endLineNumber);
          d = l.range.startColumn;
        }
      } else {
        u = l.range.startLineNumber;
        d = l.range.startColumn;
      }
      let m;
      if (l.text.length > 0) {
        const p = l.eolCount + 1;
        if (p === 1) {
          m = new Zt(u, d, u, d + l.firstLineLength);
        } else {
          m = new Zt(u, d, u + p - 1, l.lastLineLength + 1);
        }
      } else {
        m = new Zt(u, d, u, d);
      }
      i = m.endLineNumber;
      r = m.endColumn;
      t.push(m);
      s = l;
    }
    return t;
  }
  static _sortOpsAscending(e, t) {
    const i = Zt.compareRangesUsingEnds(e.range, t.range);
    if (i === 0) {
      return e.sortIndex - t.sortIndex;
    } else {
      return i;
    }
  }
  static _sortOpsDescending(e, t) {
    const i = Zt.compareRangesUsingEnds(e.range, t.range);
    if (i === 0) {
      return t.sortIndex - e.sortIndex;
    } else {
      return -i;
    }
  }
};

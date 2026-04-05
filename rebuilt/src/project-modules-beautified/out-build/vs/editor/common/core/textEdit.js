"use strict";

// Module: out-build/vs/editor/common/core/textEdit.js
// Offset: 2136835 (bundle byte offset)
// Size: 8018 bytes
Vs();
Lv();
_s();
oa();
tl();
vIc();
ts();
Kbe();
Fte = class UCn {
  static fromOffsetEdit(e, t) {
    const i = e.edits.map(r => new cI(t.getTransformer().getRange(r.replaceRange), r.newText));
    return new UCn(i);
  }
  static single(e, t) {
    return new UCn([new cI(e, t)]);
  }
  static insert(e, t) {
    return new UCn([new cI(Zt.fromPositions(e, e), t)]);
  }
  constructor(e) {
    this.edits = e;
    _te(() => SBe(e, (t, i) => t.range.getEndPosition().isBeforeOrEqual(i.range.getStartPosition())));
  }
  normalize() {
    const e = [];
    for (const t of this.edits) {
      if (e.length > 0 && e[e.length - 1].range.getEndPosition().equals(t.range.getStartPosition())) {
        const i = e[e.length - 1];
        e[e.length - 1] = new cI(i.range.plusRange(t.range), i.text + t.text);
      } else if (!t.isEmpty) {
        e.push(t);
      }
    }
    return new UCn(e);
  }
  mapPosition(e) {
    let t = 0;
    let i = 0;
    let r = 0;
    for (const s of this.edits) {
      const o = s.range.getStartPosition();
      if (e.isBeforeOrEqual(o)) {
        break;
      }
      const a = s.range.getEndPosition();
      const l = YN.ofText(s.text);
      if (e.isBefore(a)) {
        const u = new ar(o.lineNumber + t, o.column + (o.lineNumber + t === i ? r : 0));
        const d = l.addToPosition(u);
        return s5o(u, d);
      }
      if (o.lineNumber + t !== i) {
        r = 0;
      }
      t += l.lineCount - (s.range.endLineNumber - s.range.startLineNumber);
      if (l.lineCount === 0) {
        if (a.lineNumber !== o.lineNumber) {
          r += l.columnCount - (a.column - 1);
        } else {
          r += l.columnCount - (a.column - o.column);
        }
      } else {
        r = l.columnCount;
      }
      i = a.lineNumber + t;
    }
    return new ar(e.lineNumber + t, e.column + (e.lineNumber + t === i ? r : 0));
  }
  mapRange(e) {
    function t(o) {
      if (o instanceof ar) {
        return o;
      } else {
        return o.getStartPosition();
      }
    }
    function i(o) {
      if (o instanceof ar) {
        return o;
      } else {
        return o.getEndPosition();
      }
    }
    const r = t(this.mapPosition(e.getStartPosition()));
    const s = i(this.mapPosition(e.getEndPosition()));
    return s5o(r, s);
  }
  inverseMapPosition(e, t) {
    return this.inverse(t).mapPosition(e);
  }
  inverseMapRange(e, t) {
    return this.inverse(t).mapRange(e);
  }
  apply(e) {
    let t = "";
    let i = new ar(1, 1);
    for (const s of this.edits) {
      const o = s.range;
      const a = o.getStartPosition();
      const l = o.getEndPosition();
      const u = s5o(i, a);
      if (!u.isEmpty()) {
        t += e.getValueOfRange(u);
      }
      t += s.text;
      i = l;
    }
    const r = s5o(i, e.endPositionExclusive);
    if (!r.isEmpty()) {
      t += e.getValueOfRange(r);
    }
    return t;
  }
  applyToString(e) {
    const t = new cKe(e);
    return this.apply(t);
  }
  inverse(e) {
    const t = this.getNewRanges();
    return new UCn(this.edits.map((i, r) => new cI(t[r], e.getValueOfRange(i.range))));
  }
  getNewRanges() {
    const e = [];
    let t = 0;
    let i = 0;
    let r = 0;
    for (const s of this.edits) {
      const o = YN.ofText(s.text);
      const a = ar.lift({
        lineNumber: s.range.startLineNumber + i,
        column: s.range.startColumn + (s.range.startLineNumber === t ? r : 0)
      });
      const l = o.createRange(a);
      e.push(l);
      i = l.endLineNumber - s.range.endLineNumber;
      r = l.endColumn - s.range.endColumn;
      t = s.range.endLineNumber;
    }
    return e;
  }
  toSingle(e) {
    if (this.edits.length === 0) {
      throw new _m();
    }
    if (this.edits.length === 1) {
      return this.edits[0];
    }
    const t = this.edits[0].range.getStartPosition();
    const i = this.edits[this.edits.length - 1].range.getEndPosition();
    let r = "";
    for (let s = 0; s < this.edits.length; s++) {
      const o = this.edits[s];
      r += o.text;
      if (s < this.edits.length - 1) {
        const a = this.edits[s + 1];
        const l = Zt.fromPositions(o.range.getEndPosition(), a.range.getStartPosition());
        const u = e.getValueOfRange(l);
        r += u;
      }
    }
    return new cI(Zt.fromPositions(t, i), r);
  }
  equals(e) {
    return cg(this.edits, e.edits, (t, i) => t.equals(i));
  }
};
cI = class bNi {
  static joinEdits(e, t) {
    if (e.length === 0) {
      throw new _m();
    }
    if (e.length === 1) {
      return e[0];
    }
    const i = e[0].range.getStartPosition();
    const r = e[e.length - 1].range.getEndPosition();
    let s = "";
    for (let o = 0; o < e.length; o++) {
      const a = e[o];
      s += a.text;
      if (o < e.length - 1) {
        const l = e[o + 1];
        const u = Zt.fromPositions(a.range.getEndPosition(), l.range.getStartPosition());
        const d = t.getValueOfRange(u);
        s += d;
      }
    }
    return new bNi(Zt.fromPositions(i, r), s);
  }
  constructor(e, t) {
    this.range = e;
    this.text = t;
  }
  get isEmpty() {
    return this.range.isEmpty() && this.text.length === 0;
  }
  static equals(e, t) {
    return e.range.equalsRange(t.range) && e.text === t.text;
  }
  toSingleEditOperation() {
    return {
      range: this.range,
      text: this.text
    };
  }
  toEdit() {
    return new Fte([this]);
  }
  equals(e) {
    return bNi.equals(this, e);
  }
  extendToCoverRange(e, t) {
    if (this.range.containsRange(e)) {
      return this;
    }
    const i = this.range.plusRange(e);
    const r = t.getValueOfRange(Zt.fromPositions(i.getStartPosition(), this.range.getStartPosition()));
    const s = t.getValueOfRange(Zt.fromPositions(this.range.getEndPosition(), i.getEndPosition()));
    const o = r + this.text + s;
    return new bNi(i, o);
  }
  extendToFullLine(e) {
    const t = new Zt(this.range.startLineNumber, 1, this.range.endLineNumber, e.getTransformer().getLineLength(this.range.endLineNumber) + 1);
    return this.extendToCoverRange(t, e);
  }
  removeCommonPrefix(e) {
    const t = e.getValueOfRange(this.range).replaceAll(`\r
`, `
`);
    const i = this.text.replaceAll(`\r
`, `
`);
    const r = voe(t, i);
    const s = YN.ofText(t.substring(0, r)).addToPosition(this.range.getStartPosition());
    const o = i.substring(r);
    const a = Zt.fromPositions(s, this.range.getEndPosition());
    return new bNi(a, o);
  }
  isEffectiveDeletion(e) {
    let t = this.text.replaceAll(`\r
`, `
`);
    let i = e.getValueOfRange(this.range).replaceAll(`\r
`, `
`);
    const r = voe(t, i);
    t = t.substring(r);
    i = i.substring(r);
    const s = xze(t, i);
    t = t.substring(0, t.length - s);
    i = i.substring(0, i.length - s);
    return t === "";
  }
};
o5o = class {
  constructor() {
    this._transformer = undefined;
  }
  get endPositionExclusive() {
    return this.length.addToPosition(new ar(1, 1));
  }
  get lineRange() {
    return this.length.toLineRange();
  }
  getValue() {
    return this.getValueOfRange(this.length.toRange());
  }
  getLineLength(n) {
    return this.getValueOfRange(new Zt(n, 1, n, Number.MAX_SAFE_INTEGER)).length;
  }
  getTransformer() {
    this._transformer ||= new h3t(this.getValue());
    return this._transformer;
  }
  getLineAt(n) {
    return this.getValueOfRange(new Zt(n, 1, n, Number.MAX_SAFE_INTEGER));
  }
  getLines() {
    const n = this.getValue();
    return Zv(n);
  }
};
B0h = class extends o5o {
  constructor(n, e) {
    Qb(e >= 1);
    super();
    this._getLineContent = n;
    this._lineCount = e;
  }
  getValueOfRange(n) {
    if (n.startLineNumber === n.endLineNumber) {
      return this._getLineContent(n.startLineNumber).substring(n.startColumn - 1, n.endColumn - 1);
    }
    let e = this._getLineContent(n.startLineNumber).substring(n.startColumn - 1);
    for (let t = n.startLineNumber + 1; t < n.endLineNumber; t++) {
      e += `
${this._getLineContent(t)}`;
    }
    e += `
${this._getLineContent(n.endLineNumber).substring(0, n.endColumn - 1)}`;
    return e;
  }
  getLineLength(n) {
    return this._getLineContent(n).length;
  }
  get length() {
    const n = this._getLineContent(this._lineCount);
    return new YN(this._lineCount - 1, n.length);
  }
};
y3n = class extends B0h {
  constructor(n) {
    super(e => n[e - 1], n.length);
  }
};
cKe = class extends o5o {
  constructor(n) {
    super();
    this.value = n;
    this._t = new h3t(this.value);
  }
  getValueOfRange(n) {
    return this._t.getOffsetRange(n).substring(this.value);
  }
  get length() {
    return this._t.textLength;
  }
};

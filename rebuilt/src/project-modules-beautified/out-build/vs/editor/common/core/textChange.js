"use strict";

// Module: out-build/vs/editor/common/core/textChange.js
// Offset: 1109185 (bundle byte offset)
// Size: 4242 bytes
Ql();
kSe();
BSe = class DTe {
  get oldLength() {
    return this.oldText.length;
  }
  get oldEnd() {
    return this.oldPosition + this.oldText.length;
  }
  get newLength() {
    return this.newText.length;
  }
  get newEnd() {
    return this.newPosition + this.newText.length;
  }
  constructor(e, t, i, r) {
    this.oldPosition = e;
    this.oldText = t;
    this.newPosition = i;
    this.newText = r;
  }
  shift(e) {
    return new DTe(this.oldPosition + e, this.oldText, this.newPosition + e, this.newText);
  }
  toString() {
    if (this.oldText.length === 0) {
      return `(insert@${this.oldPosition} "${hOo(this.newText)}")`;
    } else if (this.newText.length === 0) {
      return `(delete@${this.oldPosition} "${hOo(this.oldText)}")`;
    } else {
      return `(replace@${this.oldPosition} "${hOo(this.oldText)}" with "${hOo(this.newText)}")`;
    }
  }
  static _writeStringSize(e) {
    return 4 + e.length * 2;
  }
  static _writeString(e, t, i) {
    const r = t.length;
    SY(e, r, i);
    i += 4;
    for (let s = 0; s < r; s++) {
      rnA(e, t.charCodeAt(s), i);
      i += 2;
    }
    return i;
  }
  static _readString(e, t) {
    const i = CY(e, t);
    t += 4;
    return arA(e, t, i);
  }
  writeSize() {
    return 8 + DTe._writeStringSize(this.oldText) + DTe._writeStringSize(this.newText);
  }
  write(e, t) {
    SY(e, this.oldPosition, t);
    t += 4;
    SY(e, this.newPosition, t);
    t += 4;
    t = DTe._writeString(e, this.oldText, t);
    t = DTe._writeString(e, this.newText, t);
    return t;
  }
  static read(e, t, i) {
    const r = CY(e, t);
    t += 4;
    const s = CY(e, t);
    t += 4;
    const o = DTe._readString(e, t);
    t += DTe._writeStringSize(o);
    const a = DTe._readString(e, t);
    t += DTe._writeStringSize(a);
    i.push(new DTe(r, o, s, a));
    return t;
  }
};
Fph = class fJe {
  constructor(e, t) {
    this._prevEdits = e;
    this._currEdits = t;
    this._result = [];
    this._resultLen = 0;
    this._prevLen = this._prevEdits.length;
    this._prevDeltaOffset = 0;
    this._currLen = this._currEdits.length;
    this._currDeltaOffset = 0;
  }
  compress() {
    let e = 0;
    let t = 0;
    let i = this._getPrev(e);
    let r = this._getCurr(t);
    while (e < this._prevLen || t < this._currLen) {
      if (i === null) {
        this._acceptCurr(r);
        r = this._getCurr(++t);
        continue;
      }
      if (r === null) {
        this._acceptPrev(i);
        i = this._getPrev(++e);
        continue;
      }
      if (r.oldEnd <= i.newPosition) {
        this._acceptCurr(r);
        r = this._getCurr(++t);
        continue;
      }
      if (i.newEnd <= r.oldPosition) {
        this._acceptPrev(i);
        i = this._getPrev(++e);
        continue;
      }
      if (r.oldPosition < i.newPosition) {
        const [u, d] = fJe._splitCurr(r, i.newPosition - r.oldPosition);
        this._acceptCurr(u);
        r = d;
        continue;
      }
      if (i.newPosition < r.oldPosition) {
        const [u, d] = fJe._splitPrev(i, r.oldPosition - i.newPosition);
        this._acceptPrev(u);
        i = d;
        continue;
      }
      let a;
      let l;
      if (r.oldEnd === i.newEnd) {
        a = i;
        l = r;
        i = this._getPrev(++e);
        r = this._getCurr(++t);
      } else if (r.oldEnd < i.newEnd) {
        const [u, d] = fJe._splitPrev(i, r.oldLength);
        a = u;
        l = r;
        i = d;
        r = this._getCurr(++t);
      } else {
        const [u, d] = fJe._splitCurr(r, i.newLength);
        a = i;
        l = u;
        i = this._getPrev(++e);
        r = d;
      }
      this._result[this._resultLen++] = new BSe(a.oldPosition, a.oldText, l.newPosition, l.newText);
      this._prevDeltaOffset += a.newLength - a.oldLength;
      this._currDeltaOffset += l.newLength - l.oldLength;
    }
    const s = fJe._merge(this._result);
    return fJe._removeNoOps(s);
  }
  _acceptCurr(e) {
    this._result[this._resultLen++] = fJe._rebaseCurr(this._prevDeltaOffset, e);
    this._currDeltaOffset += e.newLength - e.oldLength;
  }
  _getCurr(e) {
    if (e < this._currLen) {
      return this._currEdits[e];
    } else {
      return null;
    }
  }
  _acceptPrev(e) {
    this._result[this._resultLen++] = fJe._rebasePrev(this._currDeltaOffset, e);
    this._prevDeltaOffset += e.newLength - e.oldLength;
  }
  _getPrev(e) {
    if (e < this._prevLen) {
      return this._prevEdits[e];
    } else {
      return null;
    }
  }
  static _rebaseCurr(e, t) {
    return new BSe(t.oldPosition - e, t.oldText, t.newPosition, t.newText);
  }
  static _rebasePrev(e, t) {
    return new BSe(t.oldPosition, t.oldText, t.newPosition + e, t.newText);
  }
  static _splitPrev(e, t) {
    const i = e.newText.substr(0, t);
    const r = e.newText.substr(t);
    return [new BSe(e.oldPosition, e.oldText, e.newPosition, i), new BSe(e.oldEnd, "", e.newPosition + t, r)];
  }
  static _splitCurr(e, t) {
    const i = e.oldText.substr(0, t);
    const r = e.oldText.substr(t);
    return [new BSe(e.oldPosition, i, e.newPosition, e.newText), new BSe(e.oldPosition + t, r, e.newEnd, "")];
  }
  static _merge(e) {
    if (e.length === 0) {
      return e;
    }
    const t = [];
    let i = 0;
    let r = e[0];
    for (let s = 1; s < e.length; s++) {
      const o = e[s];
      if (r.oldEnd === o.oldPosition) {
        r = new BSe(r.oldPosition, r.oldText + o.oldText, r.newPosition, r.newText + o.newText);
      } else {
        t[i++] = r;
        r = o;
      }
    }
    t[i++] = r;
    return t;
  }
  static _removeNoOps(e) {
    if (e.length === 0) {
      return e;
    }
    const t = [];
    let i = 0;
    for (let r = 0; r < e.length; r++) {
      const s = e[r];
      if (s.oldText !== s.newText) {
        t[i++] = s;
      }
    }
    return t;
  }
};

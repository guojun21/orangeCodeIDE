"use strict";

// Module: out-build/vs/editor/common/tokens/contiguousMultilineTokens.js
// Offset: 1199101 (bundle byte offset)
// Size: 2748 bytes
Vs();
Ql();
tl();
EVe();
Pgh();
Ix();
lxc = class KJb {
  static deserialize(e, t, i) {
    const r = new Uint32Array(e.buffer);
    const s = CY(e, t);
    t += 4;
    const o = CY(e, t);
    t += 4;
    const a = [];
    for (let l = 0; l < o; l++) {
      const u = CY(e, t);
      t += 4;
      a.push(r.subarray(t / 4, t / 4 + u / 4));
      t += u;
    }
    i.push(new KJb(s, a));
    return t;
  }
  get startLineNumber() {
    return this._startLineNumber;
  }
  get endLineNumber() {
    return this._startLineNumber + this._tokens.length - 1;
  }
  constructor(e, t) {
    this._startLineNumber = e;
    this._tokens = t;
  }
  getLineRange() {
    return new rh(this._startLineNumber, this._startLineNumber + this._tokens.length);
  }
  getLineTokens(e) {
    return this._tokens[e - this._startLineNumber];
  }
  appendLineTokens(e) {
    this._tokens.push(e);
  }
  serializeSize() {
    let e = 0;
    e += 4;
    e += 4;
    for (let t = 0; t < this._tokens.length; t++) {
      const i = this._tokens[t];
      if (!(i instanceof Uint32Array)) {
        throw new Error("Not supported!");
      }
      e += 4;
      e += i.byteLength;
    }
    return e;
  }
  serialize(e, t) {
    SY(e, this._startLineNumber, t);
    t += 4;
    SY(e, this._tokens.length, t);
    t += 4;
    for (let i = 0; i < this._tokens.length; i++) {
      const r = this._tokens[i];
      if (!(r instanceof Uint32Array)) {
        throw new Error("Not supported!");
      }
      SY(e, r.byteLength, t);
      t += 4;
      e.set(new Uint8Array(r.buffer), t);
      t += r.byteLength;
    }
    return t;
  }
  applyEdit(e, t) {
    const [i, r] = Vbe(t);
    this._acceptDeleteRange(e);
    this._acceptInsertText(new ar(e.startLineNumber, e.startColumn), i, r);
  }
  _acceptDeleteRange(e) {
    if (e.startLineNumber === e.endLineNumber && e.startColumn === e.endColumn) {
      return;
    }
    const t = e.startLineNumber - this._startLineNumber;
    const i = e.endLineNumber - this._startLineNumber;
    if (i < 0) {
      const r = i - t;
      this._startLineNumber -= r;
      return;
    }
    if (!(t >= this._tokens.length)) {
      if (t < 0 && i >= this._tokens.length) {
        this._startLineNumber = 0;
        this._tokens = [];
        return;
      }
      if (t === i) {
        this._tokens[t] = cz.delete(this._tokens[t], e.startColumn - 1, e.endColumn - 1);
        return;
      }
      if (t >= 0) {
        this._tokens[t] = cz.deleteEnding(this._tokens[t], e.startColumn - 1);
        if (i < this._tokens.length) {
          const r = cz.deleteBeginning(this._tokens[i], e.endColumn - 1);
          this._tokens[t] = cz.append(this._tokens[t], r);
          this._tokens.splice(t + 1, i - t);
        } else {
          this._tokens[t] = cz.append(this._tokens[t], null);
          this._tokens = this._tokens.slice(0, t + 1);
        }
      } else {
        const r = -t;
        this._startLineNumber -= r;
        this._tokens[i] = cz.deleteBeginning(this._tokens[i], e.endColumn - 1);
        this._tokens = this._tokens.slice(i);
      }
    }
  }
  _acceptInsertText(e, t, i) {
    if (t === 0 && i === 0) {
      return;
    }
    const r = e.lineNumber - this._startLineNumber;
    if (r < 0) {
      this._startLineNumber += t;
      return;
    }
    if (!(r >= this._tokens.length)) {
      if (t === 0) {
        this._tokens[r] = cz.insert(this._tokens[r], e.column - 1, i);
        return;
      }
      this._tokens[r] = cz.deleteEnding(this._tokens[r], e.column - 1);
      this._tokens[r] = cz.insert(this._tokens[r], e.column - 1, i);
      this._insertLines(e.lineNumber, t);
    }
  }
  _insertLines(e, t) {
    if (t === 0) {
      return;
    }
    const i = [];
    for (let r = 0; r < t; r++) {
      i[r] = null;
    }
    this._tokens = $2n(this._tokens, e, i);
  }
};

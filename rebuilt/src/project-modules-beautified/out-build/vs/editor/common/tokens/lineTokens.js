"use strict";

// Module: out-build/vs/editor/common/tokens/lineTokens.js
// Offset: 786612 (bundle byte offset)
// Size: 5421 bytes
tVe();
$I();
l4o();
_s();
OB = class NDt {
  static createEmpty(e, t) {
    const i = NDt.defaultTokenMetadata;
    const r = new Uint32Array(2);
    r[0] = e.length;
    r[1] = i;
    return new NDt(r, e, t);
  }
  static createFromTextAndMetadata(e, t) {
    let i = 0;
    let r = "";
    const s = new Array();
    for (const {
      text: o,
      metadata: a
    } of e) {
      s.push(i + o.length, a);
      i += o.length;
      r += o;
    }
    return new NDt(new Uint32Array(s), r, t);
  }
  static convertToEndOffset(e, t) {
    const r = (e.length >>> 1) - 1;
    for (let s = 0; s < r; s++) {
      e[s << 1] = e[s + 1 << 1];
    }
    e[r << 1] = t;
  }
  static findIndexInTokensArray(e, t) {
    if (e.length <= 2) {
      return 0;
    }
    let i = 0;
    let r = (e.length >>> 1) - 1;
    while (i < r) {
      const s = i + Math.floor((r - i) / 2);
      const o = e[s << 1];
      if (o === t) {
        return s + 1;
      }
      if (o < t) {
        i = s + 1;
      } else if (o > t) {
        r = s;
      }
    }
    return i;
  }
  static {
    this.defaultTokenMetadata = 33587200;
  }
  constructor(e, t, i) {
    this._lineTokensBrand = undefined;
    if ((e.length > 1 ? e[e.length - 2] : 0) !== t.length) {
      Gc(new Error("Token length and text length do not match!"));
    }
    this._tokens = e;
    this._tokensCount = this._tokens.length >>> 1;
    this._text = t;
    this.languageIdCodec = i;
  }
  equals(e) {
    if (e instanceof NDt) {
      return this.slicedEquals(e, 0, this._tokensCount);
    } else {
      return false;
    }
  }
  slicedEquals(e, t, i) {
    if (this._text !== e._text || this._tokensCount !== e._tokensCount) {
      return false;
    }
    const r = t << 1;
    const s = r + (i << 1);
    for (let o = r; o < s; o++) {
      if (this._tokens[o] !== e._tokens[o]) {
        return false;
      }
    }
    return true;
  }
  getLineContent() {
    return this._text;
  }
  getCount() {
    return this._tokensCount;
  }
  getStartOffset(e) {
    if (e > 0) {
      return this._tokens[e - 1 << 1];
    } else {
      return 0;
    }
  }
  getMetadata(e) {
    return this._tokens[(e << 1) + 1];
  }
  getLanguageId(e) {
    const t = this._tokens[(e << 1) + 1];
    const i = pF.getLanguageId(t);
    return this.languageIdCodec.decodeLanguageId(i);
  }
  getStandardTokenType(e) {
    const t = this._tokens[(e << 1) + 1];
    return pF.getTokenType(t);
  }
  getForeground(e) {
    const t = this._tokens[(e << 1) + 1];
    return pF.getForeground(t);
  }
  getClassName(e) {
    const t = this._tokens[(e << 1) + 1];
    return pF.getClassNameFromMetadata(t);
  }
  getInlineStyle(e, t) {
    const i = this._tokens[(e << 1) + 1];
    return pF.getInlineStyleFromMetadata(i, t);
  }
  getPresentation(e) {
    const t = this._tokens[(e << 1) + 1];
    return pF.getPresentationFromMetadata(t);
  }
  getEndOffset(e) {
    return this._tokens[e << 1];
  }
  findTokenIndexAtOffset(e) {
    return NDt.findIndexInTokensArray(this._tokens, e);
  }
  inflate() {
    return this;
  }
  sliceAndInflate(e, t, i) {
    return new klh(this, e, t, i);
  }
  sliceZeroCopy(e) {
    return this.sliceAndInflate(e.start, e.endExclusive, 0);
  }
  withInserted(e) {
    if (e.length === 0) {
      return this;
    }
    let t = 0;
    let i = 0;
    let r = "";
    const s = new Array();
    let o = 0;
    while (true) {
      const a = t < this._tokensCount ? this._tokens[t << 1] : -1;
      const l = i < e.length ? e[i] : null;
      if (a !== -1 && (l === null || a <= l.offset)) {
        r += this._text.substring(o, a);
        const u = this._tokens[(t << 1) + 1];
        s.push(r.length, u);
        t++;
        o = a;
      } else if (l) {
        if (l.offset > o) {
          r += this._text.substring(o, l.offset);
          const u = this._tokens[(t << 1) + 1];
          s.push(r.length, u);
          o = l.offset;
        }
        r += l.text;
        s.push(r.length, l.tokenMetadata);
        i++;
      } else {
        break;
      }
    }
    return new NDt(new Uint32Array(s), r, this.languageIdCodec);
  }
  getTokensInRange(e) {
    const t = new Slh();
    const i = this.findTokenIndexAtOffset(e.start);
    const r = this.findTokenIndexAtOffset(e.endExclusive);
    for (let s = i; s <= r; s++) {
      const a = new dm(this.getStartOffset(s), this.getEndOffset(s)).intersectionLength(e);
      if (a > 0) {
        t.add(a, this.getMetadata(s));
      }
    }
    return t.build();
  }
  getTokenText(e) {
    const t = this.getStartOffset(e);
    const i = this.getEndOffset(e);
    return this._text.substring(t, i);
  }
  forEach(e) {
    const t = this.getCount();
    for (let i = 0; i < t; i++) {
      e(i);
    }
  }
  extractObject() {
    return {
      tokens: this._tokens,
      text: this._text
    };
  }
  toString() {
    let e = "";
    this.forEach(t => {
      e += `[${this.getTokenText(t)}]{${this.getClassName(t)}}`;
    });
    return e;
  }
};
klh = class PJb {
  constructor(e, t, i, r) {
    this._source = e;
    this._startOffset = t;
    this._endOffset = i;
    this._deltaOffset = r;
    this._firstTokenIndex = e.findTokenIndexAtOffset(t);
    this.languageIdCodec = e.languageIdCodec;
    this._tokensCount = 0;
    for (let s = this._firstTokenIndex, o = e.getCount(); s < o && !(e.getStartOffset(s) >= i); s++) {
      this._tokensCount++;
    }
  }
  getMetadata(e) {
    return this._source.getMetadata(this._firstTokenIndex + e);
  }
  getLanguageId(e) {
    return this._source.getLanguageId(this._firstTokenIndex + e);
  }
  getLineContent() {
    return this._source.getLineContent().substring(this._startOffset, this._endOffset);
  }
  equals(e) {
    if (e instanceof PJb) {
      return this._startOffset === e._startOffset && this._endOffset === e._endOffset && this._deltaOffset === e._deltaOffset && this._source.slicedEquals(e._source, this._firstTokenIndex, this._tokensCount);
    } else {
      return false;
    }
  }
  getCount() {
    return this._tokensCount;
  }
  getStandardTokenType(e) {
    return this._source.getStandardTokenType(this._firstTokenIndex + e);
  }
  getForeground(e) {
    return this._source.getForeground(this._firstTokenIndex + e);
  }
  getEndOffset(e) {
    const t = this._source.getEndOffset(this._firstTokenIndex + e);
    return Math.min(this._endOffset, t) - this._startOffset + this._deltaOffset;
  }
  getClassName(e) {
    return this._source.getClassName(this._firstTokenIndex + e);
  }
  getInlineStyle(e, t) {
    return this._source.getInlineStyle(this._firstTokenIndex + e, t);
  }
  getPresentation(e) {
    return this._source.getPresentation(this._firstTokenIndex + e);
  }
  findTokenIndexAtOffset(e) {
    return this._source.findTokenIndexAtOffset(e + this._startOffset - this._deltaOffset) - this._firstTokenIndex;
  }
  getTokenText(e) {
    const t = this._firstTokenIndex + e;
    const i = this._source.getStartOffset(t);
    const r = this._source.getEndOffset(t);
    let s = this._source.getTokenText(t);
    if (i < this._startOffset) {
      s = s.substring(this._startOffset - i);
    }
    if (r > this._endOffset) {
      s = s.substring(0, s.length - (r - this._endOffset));
    }
    return s;
  }
  forEach(e) {
    for (let t = 0; t < this.getCount(); t++) {
      e(t);
    }
  }
};

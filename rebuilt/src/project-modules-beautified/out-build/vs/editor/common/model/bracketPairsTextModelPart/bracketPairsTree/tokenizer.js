"use strict";

// Module: out-build/vs/editor/common/model/bracketPairsTextModelPart/bracketPairsTree/tokenizer.js
// Offset: 1076659 (bundle byte offset)
// Size: 4636 bytes
_s();
tVe();
cOo();
X5e();
TOt();
(function (n) {
  n[n.Text = 0] = "Text";
  n[n.OpeningBracket = 1] = "OpeningBracket";
  n[n.ClosingBracket = 2] = "ClosingBracket";
})(Aph ||= {});
e9e = class {
  constructor(n, e, t, i, r) {
    this.length = n;
    this.kind = e;
    this.bracketId = t;
    this.bracketIds = i;
    this.astNode = r;
  }
};
BEc = class {
  constructor(n, e) {
    this.textModel = n;
    this.bracketTokens = e;
    this.reader = new yph(this.textModel, this.bracketTokens);
    this._offset = vW;
    this.didPeek = false;
    this.peeked = null;
    this.textBufferLineCount = n.getLineCount();
    this.textBufferLastLineLength = n.getLineLength(this.textBufferLineCount);
  }
  get offset() {
    return this._offset;
  }
  get length() {
    return ZN(this.textBufferLineCount - 1, this.textBufferLastLineLength);
  }
  getText() {
    return this.textModel.getValue();
  }
  skip(n) {
    this.didPeek = false;
    this._offset = $B(this._offset, n);
    const e = Lde(this._offset);
    this.reader.setPosition(e.lineCount, e.columnCount);
  }
  read() {
    let n;
    if (this.peeked) {
      this.didPeek = false;
      n = this.peeked;
    } else {
      n = this.reader.read();
    }
    if (n) {
      this._offset = $B(this._offset, n.length);
    }
    return n;
  }
  peek() {
    if (!this.didPeek) {
      this.peeked = this.reader.read();
      this.didPeek = true;
    }
    return this.peeked;
  }
};
yph = class {
  constructor(n, e) {
    this.textModel = n;
    this.bracketTokens = e;
    this.lineIdx = 0;
    this.line = null;
    this.lineCharOffset = 0;
    this.lineTokens = null;
    this.lineTokenOffset = 0;
    this.peekedToken = null;
    this.textBufferLineCount = n.getLineCount();
    this.textBufferLastLineLength = n.getLineLength(this.textBufferLineCount);
  }
  setPosition(n, e) {
    if (n === this.lineIdx) {
      this.lineCharOffset = e;
      if (this.line !== null) {
        this.lineTokenOffset = this.lineCharOffset === 0 ? 0 : this.lineTokens.findTokenIndexAtOffset(this.lineCharOffset);
      }
    } else {
      this.lineIdx = n;
      this.lineCharOffset = e;
      this.line = null;
    }
    this.peekedToken = null;
  }
  read() {
    if (this.peekedToken) {
      const r = this.peekedToken;
      this.peekedToken = null;
      this.lineCharOffset += r.length;
      return r;
    }
    if (this.lineIdx > this.textBufferLineCount - 1 || this.lineIdx === this.textBufferLineCount - 1 && this.lineCharOffset >= this.textBufferLastLineLength) {
      return null;
    }
    if (this.line === null) {
      this.lineTokens = this.textModel.tokenization.getLineTokens(this.lineIdx + 1);
      this.line = this.lineTokens.getLineContent();
      this.lineTokenOffset = this.lineCharOffset === 0 ? 0 : this.lineTokens.findTokenIndexAtOffset(this.lineCharOffset);
    }
    const n = this.lineIdx;
    const e = this.lineCharOffset;
    let t = 0;
    while (true) {
      const r = this.lineTokens;
      const s = r.getCount();
      let o = null;
      if (this.lineTokenOffset < s) {
        const a = r.getMetadata(this.lineTokenOffset);
        while (this.lineTokenOffset + 1 < s && a === r.getMetadata(this.lineTokenOffset + 1)) {
          this.lineTokenOffset++;
        }
        const l = pF.getTokenType(a) === 0;
        const u = pF.containsBalancedBrackets(a);
        const d = r.getEndOffset(this.lineTokenOffset);
        if (u && l && this.lineCharOffset < d) {
          const m = r.getLanguageId(this.lineTokenOffset);
          const p = this.line.substring(this.lineCharOffset, d);
          const g = this.bracketTokens.getSingleLanguageBracketTokens(m);
          const f = g.regExpGlobal;
          if (f) {
            f.lastIndex = 0;
            const A = f.exec(p);
            if (A) {
              o = g.getToken(A[0]);
              if (o) {
                this.lineCharOffset += A.index;
              }
            }
          }
        }
        t += d - this.lineCharOffset;
        if (o) {
          if (n !== this.lineIdx || e !== this.lineCharOffset) {
            this.peekedToken = o;
            break;
          } else {
            this.lineCharOffset += o.length;
            return o;
          }
        } else {
          this.lineTokenOffset++;
          this.lineCharOffset = d;
        }
      } else if (this.lineIdx === this.textBufferLineCount - 1 || (this.lineIdx++, this.lineTokens = this.textModel.tokenization.getLineTokens(this.lineIdx + 1), this.lineTokenOffset = 0, this.line = this.lineTokens.getLineContent(), this.lineCharOffset = 0, t += 33, t > 1000)) {
        break;
      }
      if (t > 1500) {
        break;
      }
    }
    const i = koA(n, e, this.lineIdx, this.lineCharOffset);
    return new e9e(i, 0, -1, Ooe.getEmpty(), new IVe(i));
  }
};
wph = class {
  constructor(n, e) {
    this.text = n;
    this._offset = vW;
    this.idx = 0;
    const t = e.getRegExpStr();
    const i = t ? new RegExp(`${t}|
`, "gi") : null;
    const r = [];
    let s;
    let o = 0;
    let a = 0;
    let l = 0;
    let u = 0;
    const d = [];
    for (let g = 0; g < 60; g++) {
      d.push(new e9e(ZN(0, g), 0, -1, Ooe.getEmpty(), new IVe(ZN(0, g))));
    }
    const m = [];
    for (let g = 0; g < 60; g++) {
      m.push(new e9e(ZN(1, g), 0, -1, Ooe.getEmpty(), new IVe(ZN(1, g))));
    }
    if (i) {
      for (i.lastIndex = 0; (s = i.exec(n)) !== null;) {
        const g = s.index;
        const f = s[0];
        if (f === `
`) {
          o++;
          a = g + 1;
        } else {
          if (l !== g) {
            let A;
            if (u === o) {
              const w = g - l;
              if (w < d.length) {
                A = d[w];
              } else {
                const C = ZN(0, w);
                A = new e9e(C, 0, -1, Ooe.getEmpty(), new IVe(C));
              }
            } else {
              const w = o - u;
              const C = g - a;
              if (w === 1 && C < m.length) {
                A = m[C];
              } else {
                const x = ZN(w, C);
                A = new e9e(x, 0, -1, Ooe.getEmpty(), new IVe(x));
              }
            }
            r.push(A);
          }
          r.push(e.getToken(f));
          l = g + f.length;
          u = o;
        }
      }
    }
    const p = n.length;
    if (l !== p) {
      const g = u === o ? ZN(0, p - l) : ZN(o - u, p - a);
      r.push(new e9e(g, 0, -1, Ooe.getEmpty(), new IVe(g)));
    }
    this.length = ZN(o, p - a);
    this.tokens = r;
  }
  get offset() {
    return this._offset;
  }
  read() {
    return this.tokens[this.idx++] || null;
  }
  peek() {
    return this.tokens[this.idx] || null;
  }
  skip(n) {
    throw new O2n();
  }
  getText() {
    return this.text;
  }
};

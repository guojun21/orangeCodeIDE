"use strict";

// Module: out-build/vs/editor/common/codecs/markdownCodec/parsers/markdownLink.js
// Offset: 31074263 (bundle byte offset)
// Size: 1465 bytes
fSa();
ySa();
Lv();
Jgu();
Ggu();
wSa();
t0i();
SSa();
vIf();
Qgu = [I1t, Mqe, X_i, Z_i].map(n => n.symbol);
jgu = class extends Fqe {
  constructor(n) {
    super([n]);
  }
  accept(n) {
    if (Qgu.includes(n.text)) {
      return {
        result: "failure",
        wasTokenConsumed: false
      };
    } else if (n instanceof e0i) {
      return {
        result: "success",
        nextParser: new AIf([...this.tokens, n]),
        wasTokenConsumed: true
      };
    } else {
      this.currentTokens.push(n);
      return {
        result: "success",
        nextParser: this,
        wasTokenConsumed: true
      };
    }
  }
};
AIf = class extends Fqe {
  accept(n) {
    if (n instanceof s0i) {
      return {
        result: "success",
        wasTokenConsumed: true,
        nextParser: new yIf([...this.tokens], n)
      };
    } else {
      return {
        result: "failure",
        wasTokenConsumed: false
      };
    }
  }
};
yIf = class extends Fqe {
  constructor(n, e) {
    super([e]);
    this.captionTokens = n;
    this.openParensCount = 1;
  }
  get tokens() {
    return [...this.captionTokens, ...this.currentTokens];
  }
  accept(n) {
    if (n instanceof s0i) {
      this.openParensCount += 1;
    }
    if (n instanceof xSa && (this.openParensCount -= 1, Qb(this.openParensCount >= 0, `Unexpected right parenthesis token encountered: '${n}'.`), this.openParensCount === 0)) {
      const {
        startLineNumber: e,
        startColumn: t
      } = this.captionTokens[0].range;
      const i = this.captionTokens.map(s => s.text).join("");
      this.currentTokens.push(n);
      const r = this.currentTokens.map(s => s.text).join("");
      return {
        result: "success",
        wasTokenConsumed: true,
        nextParser: new Cit(e, t, i, r)
      };
    }
    if (Qgu.includes(n.text)) {
      return {
        result: "failure",
        wasTokenConsumed: false
      };
    } else {
      this.currentTokens.push(n);
      return {
        result: "success",
        nextParser: this,
        wasTokenConsumed: true
      };
    }
  }
};

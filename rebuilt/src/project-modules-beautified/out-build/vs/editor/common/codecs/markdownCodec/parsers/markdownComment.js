"use strict";

// Module: out-build/vs/editor/common/codecs/markdownCodec/parsers/markdownComment.js
// Offset: 31080737 (bundle byte offset)
// Size: 1930 bytes
ts();
_If();
Vs();
Lv();
vsy();
_Sa();
CSa();
SSa();
Vgu = class extends Fqe {
  constructor(n) {
    super([n]);
  }
  accept(n) {
    const e = this.currentTokens[this.currentTokens.length - 1];
    if (n instanceof Sit && e instanceof D1t) {
      this.currentTokens.push(n);
      return {
        result: "success",
        nextParser: this,
        wasTokenConsumed: true
      };
    }
    if (n instanceof Oqe) {
      this.currentTokens.push(n);
      if (e instanceof Sit) {
        return {
          result: "success",
          nextParser: this,
          wasTokenConsumed: true
        };
      }
      if (e instanceof Oqe) {
        const t = this.currentTokens[0];
        const i = this.currentTokens[1];
        const r = this.currentTokens[2];
        const s = this.currentTokens[3];
        Qb(t instanceof D1t, `The first token must be a '<', got '${t}'.`);
        Qb(i instanceof Sit, `The second token must be a '!', got '${i}'.`);
        Qb(r instanceof Oqe, `The third token must be a '-', got '${r}'.`);
        Qb(s instanceof Oqe, `The fourth token must be a '-', got '${s}'.`);
        this.isConsumed = true;
        return {
          result: "success",
          nextParser: new TSa([t, i, r, s]),
          wasTokenConsumed: true
        };
      }
    }
    this.isConsumed = true;
    return {
      result: "failure",
      wasTokenConsumed: false
    };
  }
};
__decorate([i0i], Vgu.prototype, "accept", null);
TSa = class extends Fqe {
  constructor(n) {
    super(n);
  }
  accept(n) {
    if (n instanceof n0i && this.endsWithDashes) {
      this.currentTokens.push(n);
      return {
        result: "success",
        nextParser: this.asMarkdownComment(),
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
  asMarkdownComment() {
    this.isConsumed = true;
    const n = this.currentTokens.map(Zpt("text")).join("");
    return new IIf(this.range, n);
  }
  get range() {
    const n = this.currentTokens[0];
    const e = this.currentTokens[this.currentTokens.length - 1];
    return new Zt(n.range.startLineNumber, n.range.startColumn, e.range.endLineNumber, e.range.endColumn);
  }
  get endsWithDashes() {
    return !!(this.currentTokens[this.currentTokens.length - 1] instanceof Oqe) && !!(this.currentTokens[this.currentTokens.length - 2] instanceof Oqe);
  }
};
__decorate([i0i], TSa.prototype, "accept", null);

"use strict";

// Module: out-build/vs/editor/common/codecs/markdownCodec/parsers/markdownImage.js
// Offset: 31075728 (bundle byte offset)
// Size: 943 bytes
fSa();
hsy();
t0i();
SSa();
wIf();
zgu = class extends Fqe {
  constructor(n) {
    super([n]);
  }
  get tokens() {
    const n = this.markdownLinkParser?.tokens ?? [];
    return [...this.currentTokens, ...n];
  }
  accept(n) {
    if (!this.markdownLinkParser) {
      if (n instanceof Qgn) {
        this.markdownLinkParser = new jgu(n);
        return {
          result: "success",
          nextParser: this,
          wasTokenConsumed: true
        };
      } else {
        return {
          result: "failure",
          wasTokenConsumed: false
        };
      }
    }
    const e = this.markdownLinkParser.accept(n);
    const {
      result: t,
      wasTokenConsumed: i
    } = e;
    if (t === "success") {
      const {
        nextParser: r
      } = e;
      if (r instanceof Cit) {
        this.isConsumed = true;
        const s = this.currentTokens[0];
        return {
          result: t,
          wasTokenConsumed: i,
          nextParser: new bIf(s.range.startLineNumber, s.range.startColumn, `${s.text}${r.caption}`, r.reference)
        };
      }
      this.markdownLinkParser = r;
      return {
        result: t,
        wasTokenConsumed: i,
        nextParser: this
      };
    }
    this.isConsumed = true;
    return e;
  }
};
__decorate([i0i], zgu.prototype, "accept", null);

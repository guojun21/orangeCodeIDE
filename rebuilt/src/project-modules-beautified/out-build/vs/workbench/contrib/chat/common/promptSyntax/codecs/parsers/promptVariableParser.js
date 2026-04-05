"use strict";

// Module: out-build/vs/workbench/contrib/chat/common/promptSyntax/codecs/parsers/promptVariableParser.js
// Offset: 31069786 (bundle byte offset)
// Size: 2613 bytes
Vs();
Lv();
ts();
Hgu();
mIf();
Ugu();
pIf();
gIf();
ySa();
Jgu();
Ggu();
wSa();
_Sa();
t0i();
CSa();
SSa();
r0i = [ASa, vSa, Mqe, I1t, X_i, Z_i].map(n => n.symbol);
Wgu = [Ggn, Wgn, Sit, D1t, n0i, Qgn, e0i].map(n => n.symbol);
kSa = class extends Fqe {
  constructor(n) {
    super([n]);
  }
  accept(n) {
    if (r0i.includes(n.text)) {
      try {
        return {
          result: "success",
          nextParser: this.asPromptVariable(),
          wasTokenConsumed: false
        };
      } catch {
        return {
          result: "failure",
          wasTokenConsumed: false
        };
      } finally {
        this.isConsumed = true;
      }
    }
    if (n instanceof Wgn) {
      this.isConsumed = true;
      if (this.currentTokens.length <= 1) {
        return {
          result: "failure",
          wasTokenConsumed: false
        };
      } else {
        return {
          result: "success",
          nextParser: new ESa([...this.currentTokens, n]),
          wasTokenConsumed: true
        };
      }
    } else if (Wgu.includes(n.text)) {
      this.isConsumed = true;
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
  asPromptVariable() {
    Qb(this.currentTokens.length > 1, "Cannot create a prompt variable out of incomplete token sequence.");
    const n = this.currentTokens[0];
    const e = this.currentTokens[this.currentTokens.length - 1];
    const i = this.currentTokens.slice(1).map(Zpt("text")).join("");
    return new qgu(new Zt(n.range.startLineNumber, n.range.startColumn, e.range.endLineNumber, e.range.endColumn), i);
  }
};
__decorate([i0i], kSa.prototype, "accept", null);
ESa = class extends Fqe {
  constructor(n) {
    const e = n[0];
    const t = n[n.length - 1];
    Qb(n.length > 2, `Tokens list must contain at least 3 items, got '${n.length}'.`);
    Qb(e instanceof Ggn, `The first token must be a '#', got '${e} '.`);
    Qb(t instanceof Wgn, `The last token must be a ':', got '${t} '.`);
    super([...n]);
  }
  accept(n) {
    if (r0i.includes(n.text)) {
      this.isConsumed = true;
      const e = this.currentTokens[0];
      const t = this.currentTokens[this.currentTokens.length - 1];
      const i = this.currentTokens.slice(1, this.startTokensCount - 1);
      const r = this.currentTokens.slice(this.startTokensCount);
      const s = new Zt(e.range.startLineNumber, e.range.startColumn, t.range.endLineNumber, t.range.endColumn);
      const o = i.map(Zpt("text")).join("");
      const a = r.map(Zpt("text")).join("");
      return {
        result: "success",
        nextParser: new Y_i(s, o, a),
        wasTokenConsumed: false
      };
    }
    this.currentTokens.push(n);
    return {
      result: "success",
      nextParser: this,
      wasTokenConsumed: true
    };
  }
  asPromptVariableWithData() {
    const n = this.currentTokens.slice(1, this.startTokensCount - 1);
    const e = this.currentTokens.slice(this.startTokensCount);
    const t = n.map(Zpt("text")).join("");
    const i = e.map(Zpt("text")).join("");
    const r = this.currentTokens[0];
    const s = this.currentTokens[this.currentTokens.length - 1];
    return new Y_i(new Zt(r.range.startLineNumber, r.range.startColumn, s.range.endLineNumber, s.range.endColumn), t, i);
  }
};
__decorate([i0i], ESa.prototype, "accept", null);

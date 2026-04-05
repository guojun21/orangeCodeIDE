"use strict";

// Module: out-build/vs/editor/common/languages/supports/languageBracketsConfiguration.js
// Offset: 770929 (bundle byte offset)
// Size: 3402 bytes
nFn();
e4o();
ulh = class {
  constructor(n, e) {
    this.languageId = n;
    const t = e.brackets ? llh(e.brackets) : [];
    const i = new $Ft(o => {
      const a = new Set();
      return {
        info: new dlh(this, o, a),
        closing: a
      };
    });
    const r = new $Ft(o => {
      const a = new Set();
      const l = new Set();
      return {
        info: new hlh(this, o, a, l),
        opening: a,
        openingColorized: l
      };
    });
    for (const [o, a] of t) {
      const l = i.get(o);
      const u = r.get(a);
      l.closing.add(u.info);
      u.opening.add(l.info);
    }
    const s = e.colorizedBracketPairs ? llh(e.colorizedBracketPairs) : t.filter(o => o[0] !== "<" || o[1] !== ">");
    for (const [o, a] of s) {
      const l = i.get(o);
      const u = r.get(a);
      l.closing.add(u.info);
      u.openingColorized.add(l.info);
      u.opening.add(l.info);
    }
    this._openingBrackets = new Map([...i.cachedValues].map(([o, a]) => [o, a.info]));
    this._closingBrackets = new Map([...r.cachedValues].map(([o, a]) => [o, a.info]));
  }
  get openingBrackets() {
    return [...this._openingBrackets.values()];
  }
  get closingBrackets() {
    return [...this._closingBrackets.values()];
  }
  getOpeningBracketInfo(n) {
    return this._openingBrackets.get(n);
  }
  getClosingBracketInfo(n) {
    return this._closingBrackets.get(n);
  }
  getBracketInfo(n) {
    return this.getOpeningBracketInfo(n) || this.getClosingBracketInfo(n);
  }
  getBracketRegExp(n) {
    const e = Array.from([...this._openingBrackets.keys(), ...this._closingBrackets.keys()]);
    return A4n(e, n);
  }
};
Xkc = class {
  constructor(n, e) {
    this.config = n;
    this.bracketText = e;
  }
  get languageId() {
    return this.config.languageId;
  }
};
dlh = class extends Xkc {
  constructor(n, e, t) {
    super(n, e);
    this.openedBrackets = t;
    this.isOpeningBracket = true;
  }
};
hlh = class extends Xkc {
  constructor(n, e, t, i) {
    super(n, e);
    this.openingBrackets = t;
    this.openingColorizedBrackets = i;
    this.isOpeningBracket = false;
  }
  closes(n) {
    if (n.config !== this.config) {
      return false;
    } else {
      return this.openingBrackets.has(n);
    }
  }
  closesColorized(n) {
    if (n.config !== this.config) {
      return false;
    } else {
      return this.openingColorizedBrackets.has(n);
    }
  }
  getOpeningBrackets() {
    return [...this.openingBrackets];
  }
};

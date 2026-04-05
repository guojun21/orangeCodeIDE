"use strict";

// Module: out-build/vs/editor/common/model/bracketPairsTextModelPart/bracketPairsTree/brackets.js
// Offset: 1081295 (bundle byte offset)
// Size: 3327 bytes
oa();
cOo();
X5e();
TOt();
REc();
_ph = class jJb {
  static createFromLanguage(e, t) {
    function i(s) {
      return t.getKey(`${s.languageId}:::${s.bracketText}`);
    }
    const r = new Map();
    for (const s of e.bracketsNew.openingBrackets) {
      const o = ZN(0, s.bracketText.length);
      const a = i(s);
      const l = Ooe.getEmpty().add(a, EEc);
      r.set(s.bracketText, new e9e(o, 1, a, l, DEc.create(o, s, l)));
    }
    for (const s of e.bracketsNew.closingBrackets) {
      const o = ZN(0, s.bracketText.length);
      let a = Ooe.getEmpty();
      const l = s.getOpeningBrackets();
      for (const u of l) {
        a = a.add(i(u), EEc);
      }
      r.set(s.bracketText, new e9e(o, 2, i(l[0]), a, DEc.create(o, s, a)));
    }
    return new jJb(r);
  }
  constructor(e) {
    this.map = e;
    this.hasRegExp = false;
    this._regExpGlobal = null;
  }
  getRegExpStr() {
    if (this.isEmpty) {
      return null;
    }
    {
      const e = [...this.map.keys()];
      e.sort();
      e.reverse();
      return e.map(t => IoA(t)).join("|");
    }
  }
  get regExpGlobal() {
    if (!this.hasRegExp) {
      const e = this.getRegExpStr();
      this._regExpGlobal = e ? new RegExp(e, "gi") : null;
      this.hasRegExp = true;
    }
    return this._regExpGlobal;
  }
  getToken(e) {
    return this.map.get(e.toLowerCase());
  }
  findClosingTokenText(e) {
    for (const [t, i] of this.map) {
      if (i.kind === 2 && i.bracketIds.intersects(e)) {
        return t;
      }
    }
  }
  get isEmpty() {
    return this.map.size === 0;
  }
};
PEc = class {
  constructor(n, e) {
    this.denseKeyProvider = n;
    this.getLanguageConfiguration = e;
    this.languageIdToBracketTokens = new Map();
  }
  didLanguageChange(n) {
    return this.languageIdToBracketTokens.has(n);
  }
  getSingleLanguageBracketTokens(n) {
    let e = this.languageIdToBracketTokens.get(n);
    if (!e) {
      e = _ph.createFromLanguage(this.getLanguageConfiguration(n), this.denseKeyProvider);
      this.languageIdToBracketTokens.set(n, e);
    }
    return e;
  }
  getToken(n, e) {
    return this.getSingleLanguageBracketTokens(e).getToken(n);
  }
};

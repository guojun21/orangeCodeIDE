"use strict";

// Module: out-build/vs/editor/common/languages/languageConfigurationRegistry.js
// Offset: 774331 (bundle byte offset)
// Size: 4791 bytes
yn();
rt();
oa();
Jbe();
Xze();
srA();
grA();
frA();
brA();
e4o();
Wt();
Ei();
Ku();
Er();
WE();
BrA();
s4o = class {
  constructor(n) {
    this.languageId = n;
  }
  affects(n) {
    if (this.languageId) {
      return this.languageId === n;
    } else {
      return true;
    }
  }
};
JS = xi("languageConfigurationService");
o4o = class extends at {
  constructor(e, t) {
    super();
    this.configurationService = e;
    this.languageService = t;
    this._registry = this._register(new blh());
    this.onDidChangeEmitter = this._register(new Qe());
    this.onDidChange = this.onDidChangeEmitter.event;
    this.configurations = new Map();
    const i = new Set(Object.values(a4o));
    this._register(this.configurationService.onDidChangeConfiguration(r => {
      const s = r.change.keys.some(a => i.has(a));
      const o = r.change.overrides.filter(([a, l]) => l.some(u => i.has(u))).map(([a]) => a);
      if (s) {
        this.configurations.clear();
        this.onDidChangeEmitter.fire(new s4o(undefined));
      } else {
        for (const a of o) {
          if (this.languageService.isRegisteredLanguageId(a)) {
            this.configurations.delete(a);
            this.onDidChangeEmitter.fire(new s4o(a));
          }
        }
      }
    }));
    this._register(this._registry.onDidChange(r => {
      this.configurations.delete(r.languageId);
      this.onDidChangeEmitter.fire(new s4o(r.languageId));
    }));
  }
  register(e, t, i) {
    return this._registry.register(e, t, i);
  }
  getLanguageConfiguration(e) {
    let t = this.configurations.get(e);
    if (!t) {
      t = RrA(e, this._registry, this.configurationService, this.languageService);
      this.configurations.set(e, t);
    }
    return t;
  }
};
o4o = __decorate([__param(0, Fn), __param(1, Jl)], o4o);
a4o = {
  brackets: "editor.language.brackets",
  colorizedBracketPairs: "editor.language.colorizedBracketPairs"
};
flh = class {
  constructor(n) {
    this.languageId = n;
    this._resolved = null;
    this._entries = [];
    this._order = 0;
    this._resolved = null;
  }
  register(n, e) {
    const t = new e1c(n, e, ++this._order);
    this._entries.push(t);
    this._resolved = null;
    return Cte($i(() => {
      for (let i = 0; i < this._entries.length; i++) {
        if (this._entries[i] === t) {
          this._entries.splice(i, 1);
          this._resolved = null;
          break;
        }
      }
    }));
  }
  getResolvedConfiguration() {
    if (!this._resolved) {
      const n = this._resolve();
      if (n) {
        this._resolved = new _4n(this.languageId, n);
      }
    }
    return this._resolved;
  }
  _resolve() {
    if (this._entries.length === 0) {
      return null;
    } else {
      this._entries.sort(e1c.cmp);
      return glh(this._entries.map(n => n.configuration));
    }
  }
};
e1c = class {
  constructor(n, e, t) {
    this.configuration = n;
    this.priority = e;
    this.order = t;
  }
  static cmp(n, e) {
    if (n.priority === e.priority) {
      return n.order - e.order;
    } else {
      return n.priority - e.priority;
    }
  }
};
t1c = class {
  constructor(n) {
    this.languageId = n;
  }
};
blh = class extends at {
  constructor() {
    super();
    this._entries = new Map();
    this._onDidChange = this._register(new Qe());
    this.onDidChange = this._onDidChange.event;
    this._register(this.register(o_, {
      brackets: [["(", ")"], ["[", "]"], ["{", "}"]],
      surroundingPairs: [{
        open: "{",
        close: "}"
      }, {
        open: "[",
        close: "]"
      }, {
        open: "(",
        close: ")"
      }, {
        open: "<",
        close: ">"
      }, {
        open: "\"",
        close: "\""
      }, {
        open: "'",
        close: "'"
      }, {
        open: "`",
        close: "`"
      }],
      colorizedBracketPairs: [],
      folding: {
        offSide: true
      }
    }, 0));
  }
  register(n, e, t = 0) {
    let i = this._entries.get(n);
    if (!i) {
      i = new flh(n);
      this._entries.set(n, i);
    }
    const r = i.register(e, t);
    this._onDidChange.fire(new t1c(n));
    return Cte($i(() => {
      r.dispose();
      this._onDidChange.fire(new t1c(n));
    }));
  }
  getLanguageConfiguration(n) {
    return this._entries.get(n)?.getResolvedConfiguration() || null;
  }
};
_4n = class BJb {
  constructor(e, t) {
    this.languageId = e;
    this.underlyingConfig = t;
    this._brackets = null;
    this._electricCharacter = null;
    this._onEnterSupport = this.underlyingConfig.brackets || this.underlyingConfig.indentationRules || this.underlyingConfig.onEnterRules ? new $ch(this.underlyingConfig) : null;
    this.comments = BJb._handleComments(this.underlyingConfig);
    this.characterPair = new Dch(this.underlyingConfig);
    this.wordDefinition = this.underlyingConfig.wordPattern || $4t;
    this.indentationRules = this.underlyingConfig.indentationRules;
    if (this.underlyingConfig.indentationRules) {
      this.indentRulesSupport = new Uch(this.underlyingConfig.indentationRules);
    } else {
      this.indentRulesSupport = null;
    }
    this.foldingRules = this.underlyingConfig.folding || {};
    this.bracketsNew = new ulh(e, this.underlyingConfig);
  }
  getWordDefinition() {
    return v4n(this.wordDefinition);
  }
  get brackets() {
    if (!this._brackets && this.underlyingConfig.brackets) {
      this._brackets = new Mch(this.languageId, this.underlyingConfig.brackets);
    }
    return this._brackets;
  }
  get electricCharacter() {
    this._electricCharacter ||= new Fch(this.brackets);
    return this._electricCharacter;
  }
  onEnter(e, t, i, r) {
    if (this._onEnterSupport) {
      return this._onEnterSupport.onEnter(e, t, i, r);
    } else {
      return null;
    }
  }
  getAutoClosingPairs() {
    return new Ich(this.characterPair.getAutoClosingPairs());
  }
  getAutoCloseBeforeSet(e) {
    return this.characterPair.getAutoCloseBeforeSet(e);
  }
  getSurroundingPairs() {
    return this.characterPair.getSurroundingPairs();
  }
  static _handleComments(e) {
    const t = e.comments;
    if (!t) {
      return null;
    }
    const i = {};
    if (t.lineComment) {
      i.lineCommentToken = t.lineComment;
    }
    if (t.blockComment) {
      const [r, s] = t.blockComment;
      i.blockCommentStartToken = r;
      i.blockCommentEndToken = s;
    }
    return i;
  }
};
Vi(JS, o4o, 1);

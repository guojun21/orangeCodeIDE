"use strict";

// Module: out-build/vs/workbench/contrib/codeEditor/browser/inspectEditorTokens/inspectEditorTokens.js
// Offset: 32791877 (bundle byte offset)
// Size: 13010 bytes
Vly();
Ht();
ri();
xf();
rt();
Cu();
ts();
Tg();
tVe();
Ku();
So();
M5f();
wxa();
r7();
Po();
SSi();
Ei();
Ujl();
zr();
Cm();
vEt();
Cb = Ct;
wrt = class extends at {
  static {
    zyu = this;
  }
  static {
    this.ID = "editor.contrib.inspectEditorTokens";
  }
  static get(e) {
    return e.getContribution(zyu.ID);
  }
  constructor(e, t, i, r, s, o, a, l) {
    super();
    this._editor = e;
    this._textMateService = t;
    this._treeSitterService = i;
    this._themeService = s;
    this._languageService = r;
    this._notificationService = o;
    this._configurationService = a;
    this._languageFeaturesService = l;
    this._widget = null;
    this._register(this._editor.onDidChangeModel(u => this.stop()));
    this._register(this._editor.onDidChangeModelLanguage(u => this.stop()));
    this._register(this._editor.onKeyUp(u => u.keyCode === 9 && this.stop()));
  }
  dispose() {
    this.stop();
    super.dispose();
  }
  launch() {
    if (!this._widget) {
      if (this._editor.hasModel() && this._editor.getModel().uri.scheme !== _n.vscodeNotebookCell) {
        this._widget = new j5f(this._editor, this._textMateService, this._treeSitterService, this._languageService, this._themeService, this._notificationService, this._configurationService, this._languageFeaturesService);
      }
    }
  }
  stop() {
    if (this._widget) {
      this._widget.dispose();
      this._widget = null;
    }
  }
  toggle() {
    if (this._widget) {
      this.stop();
    } else {
      this.launch();
    }
  }
};
wrt = zyu = __decorate([__param(1, obn), __param(2, yrt), __param(3, Jl), __param(4, d5), __param(5, ms), __param(6, Fn), __param(7, $u)], wrt);
Q5f = class extends vu {
  constructor() {
    super({
      id: "editor.action.inspectTMScopes",
      label: dt(5771, "Developer: Inspect Editor Tokens and Scopes"),
      precondition: undefined
    });
  }
  run(n, e) {
    wrt.get(e)?.toggle();
  }
};
j5f = class fzb extends at {
  static {
    this._ID = "editor.contrib.inspectEditorTokensWidget";
  }
  constructor(e, t, i, r, s, o, a, l) {
    super();
    this.allowEditorOverflow = true;
    this._isDisposed = false;
    this._editor = e;
    this._languageService = r;
    this._themeService = s;
    this._textMateService = t;
    this._treeSitterService = i;
    this._notificationService = o;
    this._configurationService = a;
    this._languageFeaturesService = l;
    this._model = this._editor.getModel();
    this._domNode = document.createElement("div");
    this._domNode.className = "token-inspect-widget";
    this._currentRequestCancellationTokenSource = new Wc();
    this._beginCompute(this._editor.getPosition());
    this._register(this._editor.onDidChangeCursorPosition(u => this._beginCompute(this._editor.getPosition())));
    this._register(s.onDidColorThemeChange(u => this._beginCompute(this._editor.getPosition())));
    this._register(a.onDidChangeConfiguration(u => u.affectsConfiguration("editor.semanticHighlighting.enabled") && this._beginCompute(this._editor.getPosition())));
    this._editor.addContentWidget(this);
  }
  dispose() {
    this._isDisposed = true;
    this._editor.removeContentWidget(this);
    this._currentRequestCancellationTokenSource.cancel();
    super.dispose();
  }
  getId() {
    return fzb._ID;
  }
  _beginCompute(e) {
    const t = this._textMateService.createTokenizer(this._model.getLanguageId());
    const i = this._computeSemanticTokens(e);
    const r = this._treeSitterService.getParseResult(this._model);
    th(this._domNode);
    this._domNode.appendChild(document.createTextNode(_(5770, null)));
    Promise.all([t, i]).then(([s, o]) => {
      if (!this._isDisposed) {
        this._compute(s, o, r, e);
        this._domNode.style.maxWidth = `${Math.max(this._editor.getLayoutInfo().width * 0.66, 500)}px`;
        this._editor.layoutContentWidget(this);
      }
    }, s => {
      this._notificationService.warn(s);
      setTimeout(() => {
        wrt.get(this._editor)?.stop();
      });
    });
  }
  _isSemanticColoringEnabled() {
    const e = this._configurationService.getValue(Qgi, {
      overrideIdentifier: this._model.getLanguageId(),
      resource: this._model.uri
    })?.enabled;
    if (typeof e == "boolean") {
      return e;
    } else {
      return this._themeService.getColorTheme().semanticHighlighting;
    }
  }
  _compute(e, t, i, r) {
    const s = e && this._getTokensAtPosition(e, r);
    const o = t && this._getSemanticTokenAtPosition(t, r);
    const a = i && this._getTreeSitterTokenAtPosition(i, r);
    if (!s && !o && !a) {
      um(this._domNode, "No grammar or semantic tokens available.");
      return;
    }
    const l = s?.metadata;
    const u = o?.metadata;
    const d = o && W5f(this._model.getValueInRange(o.range));
    const m = s && W5f(this._model.getLineContent(r.lineNumber).substring(s.token.startIndex, s.token.endIndex));
    const p = d || m || "";
    um(this._domNode, Cb("h2.tiw-token", undefined, p, Cb("span.tiw-token-length", undefined, `${p.length} ${p.length === 1 ? "char" : "chars"}`)));
    Rt(this._domNode, Cb("hr.tiw-metadata-separator", {
      style: "clear:both"
    }));
    Rt(this._domNode, Cb("table.tiw-metadata-table", undefined, Cb("tbody", undefined, Cb("tr", undefined, Cb("td.tiw-metadata-key", undefined, "language"), Cb("td.tiw-metadata-value", undefined, l?.languageId || "")), Cb("tr", undefined, Cb("td.tiw-metadata-key", undefined, "standard token type"), Cb("td.tiw-metadata-value", undefined, this._tokenTypeToString(l?.tokenType || 0))), ...this._formatMetadata(u, l))));
    if (o) {
      Rt(this._domNode, Cb("hr.tiw-metadata-separator"));
      const g = Rt(this._domNode, Cb("table.tiw-metadata-table", undefined));
      const f = Rt(g, Cb("tbody", undefined, Cb("tr", undefined, Cb("td.tiw-metadata-key", undefined, "semantic token type"), Cb("td.tiw-metadata-value", undefined, o.type))));
      if (o.modifiers.length) {
        Rt(f, Cb("tr", undefined, Cb("td.tiw-metadata-key", undefined, "modifiers"), Cb("td.tiw-metadata-value", undefined, o.modifiers.join(" "))));
      }
      if (o.metadata) {
        const A = ["foreground", "bold", "italic", "underline", "strikethrough"];
        const w = {};
        const C = new Array();
        for (const x of A) {
          if (o.metadata[x] !== undefined) {
            const I = o.definitions[x];
            const B = this._renderTokenStyleDefinition(I, x);
            const R = B.map(M => wf(M) ? M.outerHTML : M).join();
            let N = w[R];
            if (!N) {
              w[R] = N = [];
              C.push([B, R]);
            }
            N.push(x);
          }
        }
        for (const [x, I] of C) {
          Rt(f, Cb("tr", undefined, Cb("td.tiw-metadata-key", undefined, w[I].join(", ")), Cb("td.tiw-metadata-value", undefined, ...x)));
        }
      }
    }
    if (s) {
      const g = this._themeService.getColorTheme();
      Rt(this._domNode, Cb("hr.tiw-metadata-separator"));
      const f = Rt(this._domNode, Cb("table.tiw-metadata-table"));
      const A = Rt(f, Cb("tbody"));
      if (m && m !== p) {
        Rt(A, Cb("tr", undefined, Cb("td.tiw-metadata-key", undefined, "textmate token"), Cb("td.tiw-metadata-value", undefined, `${m} (${m.length})`)));
      }
      const w = new Array();
      for (let I = s.token.scopes.length - 1; I >= 0; I--) {
        w.push(s.token.scopes[I]);
        if (I > 0) {
          w.push(Cb("br"));
        }
      }
      Rt(A, Cb("tr", undefined, Cb("td.tiw-metadata-key", undefined, "textmate scopes"), Cb("td.tiw-metadata-value.tiw-metadata-scopes", undefined, ...w)));
      const C = L5f(g, s.token.scopes, false);
      const x = o?.metadata?.foreground;
      if (C) {
        if (x !== s.metadata.foreground) {
          let I = Cb("code.tiw-theme-selector", undefined, C.rawSelector, Cb("br"), JSON.stringify(C.settings, null, "\t"));
          if (x) {
            I = Cb("s", undefined, I);
          }
          Rt(A, Cb("tr", undefined, Cb("td.tiw-metadata-key", undefined, "foreground"), Cb("td.tiw-metadata-value", undefined, I)));
        }
      } else if (!x) {
        Rt(A, Cb("tr", undefined, Cb("td.tiw-metadata-key", undefined, "foreground"), Cb("td.tiw-metadata-value", undefined, "No theme selector")));
      }
    }
    if (a) {
      const g = a[a.length - 1];
      Rt(this._domNode, Cb("hr.tiw-metadata-separator"));
      const f = Rt(this._domNode, Cb("table.tiw-metadata-table"));
      const A = Rt(f, Cb("tbody"));
      Rt(A, Cb("tr", undefined, Cb("td.tiw-metadata-key", undefined, `tree-sitter token ${g.id}`), Cb("td.tiw-metadata-value", undefined, `${g.text}`)));
      const w = new Array();
      let C = a.length - 1;
      let x = a[C];
      while (x.parent || C > 0) {
        w.push(x.type);
        x = x.parent ?? a[--C];
        if (x) {
          w.push(Cb("br"));
        }
      }
      Rt(A, Cb("tr", undefined, Cb("td.tiw-metadata-key", undefined, "tree-sitter tree"), Cb("td.tiw-metadata-value.tiw-metadata-scopes", undefined, ...w)));
      const B = RSe.get(this._model.getLanguageId())?.captureAtPosition(r.lineNumber, r.column, this._model);
      if (B && B.length > 0) {
        Rt(A, Cb("tr", undefined, Cb("td.tiw-metadata-key", undefined, "foreground"), Cb("td.tiw-metadata-value", undefined, B.map(R => R.name).join(" "))));
      }
    }
  }
  _formatMetadata(e, t) {
    const i = new Array();
    function r(u) {
      const d = e?.[u] || t?.[u];
      if (d !== undefined) {
        const m = e?.[u] ? "tiw-metadata-semantic" : "";
        i.push(Cb("tr", undefined, Cb("td.tiw-metadata-key", undefined, u), Cb(`td.tiw-metadata-value.${m}`, undefined, d)));
      }
      return d;
    }
    const s = r("foreground");
    const o = r("background");
    if (s && o) {
      const u = Xr.fromHex(o);
      const d = Xr.fromHex(s);
      if (u.isOpaque()) {
        i.push(Cb("tr", undefined, Cb("td.tiw-metadata-key", undefined, "contrast ratio"), Cb("td.tiw-metadata-value", undefined, u.getContrastRatio(d.makeOpaque(u)).toFixed(2))));
      } else {
        i.push(Cb("tr", undefined, Cb("td.tiw-metadata-key", undefined, "Contrast ratio cannot be precise for background colors that use transparency"), Cb("td.tiw-metadata-value")));
      }
    }
    const a = new Array();
    function l(u) {
      let d;
      if (e && e[u]) {
        d = Cb("span.tiw-metadata-semantic", undefined, u);
      } else if (t && t[u]) {
        d = u;
      }
      if (d) {
        if (a.length) {
          a.push(" ");
        }
        a.push(d);
      }
    }
    l("bold");
    l("italic");
    l("underline");
    l("strikethrough");
    if (a.length) {
      i.push(Cb("tr", undefined, Cb("td.tiw-metadata-key", undefined, "font style"), Cb("td.tiw-metadata-value", undefined, ...a)));
    }
    return i;
  }
  _decodeMetadata(e) {
    const t = this._themeService.getColorTheme().tokenColorMap;
    const i = pF.getLanguageId(e);
    const r = pF.getTokenType(e);
    const s = pF.getFontStyle(e);
    const o = pF.getForeground(e);
    const a = pF.getBackground(e);
    return {
      languageId: this._languageService.languageIdCodec.decodeLanguageId(i),
      tokenType: r,
      bold: s & 2 ? true : undefined,
      italic: s & 1 ? true : undefined,
      underline: s & 4 ? true : undefined,
      strikethrough: s & 8 ? true : undefined,
      foreground: t[o],
      background: t[a]
    };
  }
  _tokenTypeToString(e) {
    switch (e) {
      case 0:
        return "Other";
      case 1:
        return "Comment";
      case 2:
        return "String";
      case 3:
        return "RegEx";
      default:
        return "??";
    }
  }
  _getTokensAtPosition(e, t) {
    const i = t.lineNumber;
    const r = this._getStateBeforeLine(e, i);
    const s = e.tokenizeLine(this._model.getLineContent(i), r);
    const o = e.tokenizeLine2(this._model.getLineContent(i), r);
    let a = 0;
    for (let u = s.tokens.length - 1; u >= 0; u--) {
      const d = s.tokens[u];
      if (t.column - 1 >= d.startIndex) {
        a = u;
        break;
      }
    }
    let l = 0;
    for (let u = o.tokens.length >>> 1; u >= 0; u--) {
      if (t.column - 1 >= o.tokens[u << 1]) {
        l = u;
        break;
      }
    }
    return {
      token: s.tokens[a],
      metadata: this._decodeMetadata(o.tokens[(l << 1) + 1])
    };
  }
  _getStateBeforeLine(e, t) {
    let i = null;
    for (let r = 1; r < t; r++) {
      i = e.tokenizeLine(this._model.getLineContent(r), i).ruleStack;
    }
    return i;
  }
  isSemanticTokens(e) {
    return e && e.data;
  }
  async _computeSemanticTokens(e) {
    if (!this._isSemanticColoringEnabled()) {
      return null;
    }
    const t = this._languageFeaturesService.documentSemanticTokensProvider.ordered(this._model);
    if (t.length) {
      const r = t[0];
      const s = await Promise.resolve(r.provideDocumentSemanticTokens(this._model, null, this._currentRequestCancellationTokenSource.token));
      if (this.isSemanticTokens(s)) {
        return {
          tokens: s,
          legend: r.getLegend()
        };
      }
    }
    const i = this._languageFeaturesService.documentRangeSemanticTokensProvider.ordered(this._model);
    if (i.length) {
      const r = i[0];
      const s = e.lineNumber;
      const o = new Zt(s, 1, s, this._model.getLineMaxColumn(s));
      const a = await Promise.resolve(r.provideDocumentRangeSemanticTokens(this._model, o, this._currentRequestCancellationTokenSource.token));
      if (this.isSemanticTokens(a)) {
        return {
          tokens: a,
          legend: r.getLegend()
        };
      }
    }
    return null;
  }
  _getSemanticTokenAtPosition(e, t) {
    const i = e.tokens.data;
    const r = this._model.getLanguageId();
    let s = 0;
    let o = 0;
    const a = t.lineNumber - 1;
    const l = t.column - 1;
    for (let u = 0; u < i.length; u += 5) {
      const d = i[u];
      const m = i[u + 1];
      const p = i[u + 2];
      const g = i[u + 3];
      const f = i[u + 4];
      const A = s + d;
      const w = d === 0 ? o + m : m;
      if (a === A && w <= l && l < w + p) {
        const C = e.legend.tokenTypes[g] || "not in legend (ignored)";
        const x = [];
        let I = f;
        for (let H = 0; I > 0 && H < e.legend.tokenModifiers.length; H++) {
          if (I & 1) {
            x.push(e.legend.tokenModifiers[H]);
          }
          I = I >> 1;
        }
        if (I > 0) {
          x.push("not in legend (ignored)");
        }
        const B = new Zt(A + 1, w + 1, A + 1, w + 1 + p);
        const R = {};
        const N = this._themeService.getColorTheme().tokenColorMap;
        const O = this._themeService.getColorTheme().getTokenStyleMetadata(C, x, r, true, R);
        let $;
        if (O) {
          $ = {
            languageId: undefined,
            tokenType: 0,
            bold: O?.bold,
            italic: O?.italic,
            underline: O?.underline,
            strikethrough: O?.strikethrough,
            foreground: N[O?.foreground || 0],
            background: undefined
          };
        }
        return {
          type: C,
          modifiers: x,
          range: B,
          metadata: $,
          definitions: R
        };
      }
      s = A;
      o = w;
    }
    return null;
  }
  _walkTreeforPosition(e, t) {
    const i = this._model.getOffsetAt(t);
    e.gotoFirstChild();
    let r = false;
    let s = null;
    do {
      if (e.currentNode.startIndex <= i && i < e.currentNode.endIndex) {
        r = true;
        s = e.currentNode;
      } else {
        r = false;
      }
    } while (r ? e.gotoFirstChild() : e.gotoNextSibling());
    return s;
  }
  _getTreeSitterTokenAtPosition(e, t) {
    let i = e.parseResult;
    if (!i?.tree) {
      return null;
    }
    const r = [];
    do {
      const s = i.tree.walk();
      const o = this._walkTreeforPosition(s, t);
      if (o) {
        r.push(o);
        i = e.getInjection(o.startIndex, i.languageId);
      } else {
        i = undefined;
      }
    } while (i?.tree);
    if (r.length > 0) {
      return r;
    } else {
      return null;
    }
  }
  _renderTokenStyleDefinition(e, t) {
    const i = new Array();
    if (e === undefined) {
      return i;
    }
    const r = this._themeService.getColorTheme();
    if (Array.isArray(e)) {
      const s = {};
      r.resolveScopes(e, s);
      const o = s[t];
      if (o && s.scope) {
        const a = Cb("ul.tiw-metadata-values");
        const l = Array.isArray(o.scope) ? o.scope : [String(o.scope)];
        for (const u of l) {
          a.appendChild(Cb("li.tiw-metadata-value.tiw-metadata-scopes", undefined, u));
        }
        i.push(s.scope.join(" "), a, Cb("code.tiw-theme-selector", undefined, JSON.stringify(o.settings, null, "\t")));
        return i;
      }
      return i;
    } else if (wSi.is(e)) {
      const s = r.getTokenStylingRuleScope(e);
      if (s === "setting") {
        i.push(`User settings: ${e.selector.id} - ${this._renderStyleProperty(e.style, t)}`);
        return i;
      } else {
        if (s === "theme") {
          i.push(`Color theme: ${e.selector.id} - ${this._renderStyleProperty(e.style, t)}`);
        }
        return i;
      }
    } else {
      const s = r.resolveTokenStyleValue(e);
      i.push(`Default: ${s ? this._renderStyleProperty(s, t) : ""}`);
      return i;
    }
  }
  _renderStyleProperty(e, t) {
    switch (t) {
      case "foreground":
        if (e.foreground) {
          return Xr.Format.CSS.formatHexA(e.foreground, true);
        } else {
          return "";
        }
      default:
        if (e[t] !== undefined) {
          return String(e[t]);
        } else {
          return "";
        }
    }
  }
  getDomNode() {
    return this._domNode;
  }
  getPosition() {
    return {
      position: this._editor.getPosition(),
      preference: [2, 1]
    };
  }
};
Mg(wrt.ID, wrt, 4);
ac(Q5f);

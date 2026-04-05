"use strict";

// Module: out-build/vs/workbench/contrib/snippets/browser/snippetCompletionProvider.js
// Offset: 30966214 (bundle byte offset)
// Size: 3887 bytes
tg();
oa();
tl();
ts();
Ku();
Vde();
Ht();
Iqe();
Hpu();
Q_();
Sx();
QE();
hs();
zpu = "_snippet.markAsUsed";
Ss.registerCommand(zpu, (n, ...e) => {
  const t = n.get(Wye);
  const [i] = e;
  if (i instanceof wCa) {
    t.updateUsageTimestamp(i);
  }
});
Ign = class {
  constructor(n, e) {
    this.snippet = n;
    this.label = {
      label: n.prefix,
      description: n.name
    };
    this.detail = _(10865, null, n.description || n.name, n.source);
    this.insertText = n.codeSnippet;
    this.extensionId = n.extensionId;
    this.range = e;
    this.sortText = `${n.snippetSource === 3 ? "z" : "a"}-${n.prefix}`;
    this.kind = 27;
    this.insertTextRules = 4;
    this.command = {
      id: zpu,
      title: "",
      arguments: [n]
    };
  }
  resolve() {
    this.documentation = new _c().appendCodeblock("", Ute.asInsertText(this.snippet.codeSnippet));
    return this;
  }
  static compareByLabel(n, e) {
    return R4(n.label.label, e.label.label);
  }
};
BCa = class {
  constructor(e, t, i) {
    this._languageService = e;
    this._snippets = t;
    this._languageConfigurationService = i;
    this._debugDisplayName = "snippetCompletions";
  }
  async provideCompletionItems(e, t, i) {
    const r = new J_();
    const s = t.lineNumber;
    const o = e.getWordAtPosition(t) ?? {
      startColumn: t.column,
      endColumn: t.column,
      word: ""
    };
    const a = e.getLineContent(t.lineNumber).toLowerCase();
    const l = a.substring(0, o.startColumn + o.word.length - 1);
    const u = this._computeSnippetPositions(e, s, o, l);
    const d = t.column - 1;
    const m = i.triggerCharacter?.toLowerCase() ?? "";
    const p = this._getLanguageIdAtPosition(e, t);
    const g = this._languageConfigurationService.getLanguageConfiguration(p);
    const f = new Set(await this._snippets.getSnippets(p));
    const A = [];
    for (const w of f) {
      if (i.triggerKind === 1 && !w.prefixLow.startsWith(m)) {
        continue;
      }
      let C;
      for (const $ of u) {
        if ((!$.prefixLow.match(/^\s/) || !!w.prefixLow.match(/^\s/)) && $Ic($.prefixLow, 0, $.prefixLow.length, w.prefixLow, 0, w.prefixLow.length)) {
          C = $;
          break;
        }
      }
      if (!C) {
        continue;
      }
      const x = C.startColumn - 1;
      const I = w.prefixLow.length - (d - x);
      const B = c2o(a, w.prefixLow, d, d + I, d - x);
      const R = t.with(undefined, x + 1);
      let N = B === 0 ? t.column + I : t.column;
      if (d < a.length && g.getAutoClosingPairs().autoClosingPairsCloseSingleChar.get(a[d])?.some(W => W.open === a[R.column - 1] && w.prefix.startsWith(W.open) && w.prefix[w.prefix.length - 1] === W.close)) {
        N++;
      }
      const M = Zt.fromPositions({
        lineNumber: s,
        column: C.startColumn
      }, {
        lineNumber: s,
        column: N
      });
      const O = M.setEndPosition(s, t.column);
      A.push(new Ign(w, {
        replace: M,
        insert: O
      }));
      f.delete(w);
    }
    if (!m && (/\s/.test(a[t.column - 2]) || !a)) {
      for (const w of f) {
        const C = Zt.fromPositions(t);
        const x = a.indexOf(w.prefixLow, d) === d ? C.setEndPosition(t.lineNumber, t.column + w.prefixLow.length) : C;
        A.push(new Ign(w, {
          replace: x,
          insert: C
        }));
      }
    }
    this._disambiguateSnippets(A);
    return {
      suggestions: A,
      duration: r.elapsed()
    };
  }
  _disambiguateSnippets(e) {
    e.sort(Ign.compareByLabel);
    for (let t = 0; t < e.length; t++) {
      const i = e[t];
      let r = t + 1;
      for (; r < e.length && i.label === e[r].label; r++) {
        e[r].label.label = _(10866, null, e[r].label.label, e[r].snippet.name);
      }
      if (r > t + 1) {
        e[t].label.label = _(10867, null, e[t].label.label, e[t].snippet.name);
        t = r;
      }
    }
  }
  resolveCompletionItem(e) {
    if (e instanceof Ign) {
      return e.resolve();
    } else {
      return e;
    }
  }
  _computeSnippetPositions(e, t, i, r) {
    const s = [];
    for (let o = 1; o < i.startColumn; o++) {
      const a = e.getWordAtPosition(new ar(t, o));
      s.push({
        startColumn: o,
        prefixLow: r.substring(o - 1),
        isWord: !!a
      });
      if (a) {
        o = a.endColumn;
        s.push({
          startColumn: a.endColumn,
          prefixLow: r.substring(a.endColumn - 1),
          isWord: false
        });
      }
    }
    if (i.word.length > 0 || s.length === 0) {
      s.push({
        startColumn: i.startColumn,
        prefixLow: r.substring(i.startColumn - 1),
        isWord: true
      });
    }
    return s;
  }
  _getLanguageIdAtPosition(e, t) {
    e.tokenization.tokenizeIfCheap(t.lineNumber);
    let i = e.getLanguageIdAtPosition(t.lineNumber, t.column);
    if (!this._languageService.getLanguageName(i)) {
      i = e.getLanguageId();
    }
    return i;
  }
};
BCa = __decorate([__param(0, Jl), __param(1, Wye), __param(2, JS)], BCa);

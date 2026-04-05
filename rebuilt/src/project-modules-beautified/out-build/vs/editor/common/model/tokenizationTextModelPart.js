"use strict";

// Module: out-build/vs/editor/common/model/tokenizationTextModelPart.js
// Offset: 1228964 (bundle byte offset)
// Size: 12611 bytes
_r();
_s();
yn();
rt();
EVe();
Ix();
tl();
Jbe();
Tg();
Ku();
QE();
$ph();
hxc();
pxc();
daA();
uxc();
haA();
maA();
Wt();
kOo = [];
EOo = false;
xOo = SOo = class extends HEc {
  constructor(e, t, i, r, s, o, a) {
    super();
    this._textModel = e;
    this._bracketPairsTextModelPart = t;
    this._languageId = i;
    this._attachedViews = r;
    this._languageService = s;
    this._languageConfigurationService = o;
    this._instantiationService = a;
    this._semanticTokens = new Vgh(this._languageService.languageIdCodec);
    this._onDidChangeLanguage = this._register(new Qe());
    this.onDidChangeLanguage = this._onDidChangeLanguage.event;
    this._onDidChangeLanguageConfiguration = this._register(new Qe());
    this.onDidChangeLanguageConfiguration = this._onDidChangeLanguageConfiguration.event;
    this._onDidChangeTokens = this._register(new Qe());
    this.onDidChangeTokens = this._onDidChangeTokens.event;
    this._tokensDisposables = this._register(new Ut());
    this._register(In.filter(RSe.onDidChange, l => l.changedLanguages.includes(this._languageId))(() => {
      this.createPreferredTokenProvider();
    }));
    this.createPreferredTokenProvider();
  }
  createGrammarTokens() {
    return this._register(new fxc(this._languageService.languageIdCodec, this._textModel, () => this._languageId, this._attachedViews));
  }
  createTreeSitterTokens() {
    return this._register(this._instantiationService.createInstance(wOn, this._languageService.languageIdCodec, this._textModel, () => this._languageId));
  }
  createTokens(e) {
    const t = this._tokens !== undefined;
    this._tokens?.dispose();
    this._tokens = e ? this.createTreeSitterTokens() : this.createGrammarTokens();
    this._tokensDisposables.clear();
    this._tokensDisposables.add(this._tokens.onDidChangeTokens(i => {
      this._emitModelTokensChangedEvent(i);
    }));
    this._tokensDisposables.add(this._tokens.onDidChangeBackgroundTokenizationState(i => {
      this._bracketPairsTextModelPart.handleDidChangeBackgroundTokenizationState();
    }));
    if (t) {
      this._tokens.resetTokenization();
    }
  }
  createPreferredTokenProvider() {
    if (RSe.get(this._languageId)) {
      if (!(this._tokens instanceof wOn)) {
        this.createTokens(true);
      }
    } else if (!(this._tokens instanceof fxc)) {
      this.createTokens(false);
    }
  }
  _hasListeners() {
    return this._onDidChangeLanguage.hasListeners() || this._onDidChangeLanguageConfiguration.hasListeners() || this._onDidChangeTokens.hasListeners();
  }
  handleLanguageConfigurationServiceChange(e) {
    if (e.affects(this._languageId)) {
      this._onDidChangeLanguageConfiguration.fire({});
    }
  }
  handleDidChangeContent(e) {
    if (e.isFlush) {
      this._semanticTokens.flush();
    } else if (!e.isEolChange) {
      for (const t of e.changes) {
        const [i, r, s] = Vbe(t.text);
        this._semanticTokens.acceptEdit(t.range, i, r, s, t.text.length > 0 ? t.text.charCodeAt(0) : 0);
      }
    }
    this._tokens.handleDidChangeContent(e);
  }
  handleDidChangeAttached() {
    this._tokens.handleDidChangeAttached();
  }
  getLineTokens(e) {
    this.validateLineNumber(e);
    const t = this._tokens.getLineTokens(e);
    return this._semanticTokens.addSparseTokens(e, t);
  }
  _emitModelTokensChangedEvent(e) {
    if (!this._textModel._isDisposing()) {
      this._bracketPairsTextModelPart.handleDidChangeTokens(e);
      this._onDidChangeTokens.fire(e);
    }
  }
  validateLineNumber(e) {
    if (e < 1 || e > this._textModel.getLineCount()) {
      throw new _m("Illegal value for lineNumber");
    }
  }
  get hasTokens() {
    return this._tokens.hasTokens;
  }
  resetTokenization() {
    this._tokens.resetTokenization();
  }
  get backgroundTokenizationState() {
    return this._tokens.backgroundTokenizationState;
  }
  forceTokenization(e) {
    this.validateLineNumber(e);
    this._tokens.forceTokenization(e);
  }
  hasAccurateTokensForLine(e) {
    this.validateLineNumber(e);
    return this._tokens.hasAccurateTokensForLine(e);
  }
  isCheapToTokenize(e) {
    this.validateLineNumber(e);
    return this._tokens.isCheapToTokenize(e);
  }
  tokenizeIfCheap(e) {
    this.validateLineNumber(e);
    this._tokens.tokenizeIfCheap(e);
  }
  getTokenTypeIfInsertingCharacter(e, t, i) {
    return this._tokens.getTokenTypeIfInsertingCharacter(e, t, i);
  }
  tokenizeLinesAt(e, t) {
    return this._tokens.tokenizeLinesAt(e, t);
  }
  setSemanticTokens(e, t) {
    this._semanticTokens.set(e, t);
    this._emitModelTokensChangedEvent({
      semanticTokensApplied: e !== null,
      ranges: [{
        fromLineNumber: 1,
        toLineNumber: this._textModel.getLineCount()
      }]
    });
  }
  hasCompleteSemanticTokens() {
    return this._semanticTokens.isComplete();
  }
  hasSomeSemanticTokens() {
    return !this._semanticTokens.isEmpty();
  }
  setPartialSemanticTokens(e, t) {
    if (this.hasCompleteSemanticTokens()) {
      return;
    }
    const i = this._textModel.validateRange(this._semanticTokens.setPartial(e, t));
    this._emitModelTokensChangedEvent({
      semanticTokensApplied: true,
      ranges: [{
        fromLineNumber: i.startLineNumber,
        toLineNumber: i.endLineNumber
      }]
    });
  }
  getWordAtPosition(e) {
    this.assertNotDisposed();
    const t = this._textModel.validatePosition(e);
    const i = this._textModel.getLineContent(t.lineNumber);
    const r = this.getLineTokens(t.lineNumber);
    const s = r.findTokenIndexAtOffset(t.column - 1);
    const [o, a] = SOo._findLanguageBoundaries(r, s);
    const l = O5e(t.column, this.getLanguageConfiguration(r.getLanguageId(s)).getWordDefinition(), i.substring(o, a), o);
    if (l && l.startColumn <= e.column && e.column <= l.endColumn) {
      return l;
    }
    if (s > 0 && o === t.column - 1) {
      const [u, d] = SOo._findLanguageBoundaries(r, s - 1);
      const m = O5e(t.column, this.getLanguageConfiguration(r.getLanguageId(s - 1)).getWordDefinition(), i.substring(u, d), u);
      if (m && m.startColumn <= e.column && e.column <= m.endColumn) {
        return m;
      }
    }
    return null;
  }
  getLanguageConfiguration(e) {
    return this._languageConfigurationService.getLanguageConfiguration(e);
  }
  static _findLanguageBoundaries(e, t) {
    const i = e.getLanguageId(t);
    let r = 0;
    for (let o = t; o >= 0 && e.getLanguageId(o) === i; o--) {
      r = e.getStartOffset(o);
    }
    let s = e.getLineContent().length;
    for (let o = t, a = e.getCount(); o < a && e.getLanguageId(o) === i; o++) {
      s = e.getEndOffset(o);
    }
    return [r, s];
  }
  getWordUntilPosition(e) {
    const t = this.getWordAtPosition(e);
    if (t) {
      return {
        word: t.word.substr(0, e.column - t.startColumn),
        startColumn: t.startColumn,
        endColumn: e.column
      };
    } else {
      return {
        word: "",
        startColumn: e.column,
        endColumn: e.column
      };
    }
  }
  getWordsUntilPosition(e) {
    this.assertNotDisposed();
    const t = [];
    const i = this._textModel.validatePosition(e);
    const r = this.getLineTokens(i.lineNumber);
    const s = r.findTokenIndexAtOffset(i.column - 1);
    for (let o = 0; o < s; o++) {
      t.push({
        startLineNumber: i.lineNumber,
        endLineNumber: i.lineNumber,
        startColumn: r.getStartOffset(o),
        endColumn: r.getEndOffset(o)
      });
    }
    return t;
  }
  getLanguageId() {
    return this._languageId;
  }
  getLanguageIdAtPosition(e, t) {
    const i = this._textModel.validatePosition(new ar(e, t));
    const r = this.getLineTokens(i.lineNumber);
    return r.getLanguageId(r.findTokenIndexAtOffset(i.column - 1));
  }
  setLanguageId(e, t = "api") {
    if (this._languageId === e) {
      return;
    }
    const i = {
      oldLanguage: this._languageId,
      newLanguage: e,
      source: t
    };
    this._languageId = e;
    this._bracketPairsTextModelPart.handleDidChangeLanguage(i);
    this._tokens.resetTokenization();
    this.createPreferredTokenProvider();
    this._onDidChangeLanguage.fire(i);
    this._onDidChangeLanguageConfiguration.fire({});
  }
};
xOo = SOo = __decorate([__param(4, Jl), __param(5, JS), __param(6, ln)], xOo);
fxc = class extends mxc {
  _scheduleRefreshAllVisibleLineTokens() {
    if (!this._refreshScheduled) {
      this._refreshScheduled = true;
      paA(() => {
        this._refreshScheduled = false;
        if (!this._textModel.isDisposed()) {
          this.refreshAllVisibleLineTokens();
        }
      });
    }
  }
  constructor(n, e, t, i) {
    super(n, e, t);
    this._tokenizer = null;
    this._backgroundTokenizationState = 1;
    this._onDidChangeBackgroundTokenizationState = this._register(new Qe());
    this.onDidChangeBackgroundTokenizationState = this._onDidChangeBackgroundTokenizationState.event;
    this._defaultBackgroundTokenizer = null;
    this._backgroundTokenizer = this._register(new uo());
    this._tokens = new gxc(this._languageIdCodec);
    this._debugBackgroundTokenizer = this._register(new uo());
    this._attachedViewStates = this._register(new mp());
    this._refreshScheduled = false;
    this._register(pT.onDidChange(r => {
      const s = this.getLanguageId();
      if (r.changedLanguages.indexOf(s) === -1) {
        if (r.changedColorMap && !this._tokenizer) {
          pT.getOrCreate(s);
        }
        return;
      }
      this.resetTokenization();
    }));
    this.resetTokenization();
    this._register(i.onDidChangeVisibleRanges(({
      view: r,
      state: s
    }) => {
      if (s) {
        let o = this._attachedViewStates.get(r);
        if (!o) {
          o = new Hgh(() => this.refreshRanges(o.lineRanges));
          this._attachedViewStates.set(r, o);
        }
        o.handleStateChange(s);
      } else {
        this._attachedViewStates.deleteAndDispose(r);
      }
    }));
  }
  resetTokenization(n = true) {
    this._tokens.flush();
    this._debugBackgroundTokens?.flush();
    this._debugBackgroundStates &&= new _Oo(this._textModel.getLineCount());
    if (n) {
      this._onDidChangeTokens.fire({
        semanticTokensApplied: false,
        ranges: [{
          fromLineNumber: 1,
          toLineNumber: this._textModel.getLineCount()
        }]
      });
    }
    const e = () => {
      if (this._textModel.isTooLargeForTokenization()) {
        return [null, null];
      }
      const r = pT.get(this.getLanguageId());
      if (!r) {
        return [null, null];
      }
      let s;
      try {
        s = r.getInitialState();
      } catch (o) {
        Gc(o);
        return [null, null];
      }
      return [r, s];
    };
    const [t, i] = e();
    if (t && i) {
      this._tokenizer = new Fgh(this._textModel.getLineCount(), t, this._textModel, this._languageIdCodec);
    } else {
      this._tokenizer = null;
    }
    this._backgroundTokenizer.clear();
    this._defaultBackgroundTokenizer = null;
    if (this._tokenizer) {
      const r = {
        setTokens: s => {
          this.setTokens(s);
        },
        backgroundTokenizationFinished: () => {
          if (this._backgroundTokenizationState === 2) {
            return;
          }
          const s = 2;
          this._backgroundTokenizationState = s;
          this._onDidChangeBackgroundTokenizationState.fire();
        },
        setEndState: (s, o) => {
          if (!this._tokenizer) {
            return;
          }
          const a = this._tokenizer.store.getFirstInvalidEndStateLineNumber();
          if (a !== null && s >= a) {
            this._tokenizer?.store.setEndState(s, o);
          }
        }
      };
      if (t && t.createBackgroundTokenizer && !t.backgroundTokenizerShouldOnlyVerifyTokens) {
        this._backgroundTokenizer.value = t.createBackgroundTokenizer(this._textModel, r);
      }
      if (!this._backgroundTokenizer.value && !this._textModel.isTooLargeForTokenization()) {
        this._backgroundTokenizer.value = this._defaultBackgroundTokenizer = new Ugh(this._tokenizer, r);
        this._defaultBackgroundTokenizer.handleChanges();
      }
      if (t?.backgroundTokenizerShouldOnlyVerifyTokens && t.createBackgroundTokenizer) {
        this._debugBackgroundTokens = new gxc(this._languageIdCodec);
        this._debugBackgroundStates = new _Oo(this._textModel.getLineCount());
        this._debugBackgroundTokenizer.clear();
        this._debugBackgroundTokenizer.value = t.createBackgroundTokenizer(this._textModel, {
          setTokens: s => {
            this._debugBackgroundTokens?.setMultilineTokens(s, this._textModel);
          },
          backgroundTokenizationFinished() {},
          setEndState: (s, o) => {
            this._debugBackgroundStates?.setEndState(s, o);
          }
        });
      } else {
        this._debugBackgroundTokens = undefined;
        this._debugBackgroundStates = undefined;
        this._debugBackgroundTokenizer.value = undefined;
      }
    }
    this._scheduleRefreshAllVisibleLineTokens();
  }
  handleDidChangeAttached() {
    this._defaultBackgroundTokenizer?.handleChanges();
  }
  handleDidChangeContent(n) {
    if (n.isFlush) {
      this.resetTokenization(false);
    } else if (!n.isEolChange) {
      for (const e of n.changes) {
        const [t, i] = Vbe(e.text);
        this._tokens.acceptEdit(e.range, t, i);
        this._debugBackgroundTokens?.acceptEdit(e.range, t, i);
      }
      this._debugBackgroundStates?.acceptChanges(n.changes);
      if (this._tokenizer) {
        this._tokenizer.store.acceptChanges(n.changes);
      }
      this._defaultBackgroundTokenizer?.handleChanges();
    }
  }
  setTokens(n) {
    const {
      changes: e
    } = this._tokens.setMultilineTokens(n, this._textModel);
    if (e.length > 0) {
      this._onDidChangeTokens.fire({
        semanticTokensApplied: false,
        ranges: e
      });
    }
    return {
      changes: e
    };
  }
  refreshAllVisibleLineTokens() {
    const n = rh.joinMany([...this._attachedViewStates].map(([e, t]) => t.lineRanges));
    this.refreshRanges(n);
  }
  refreshRanges(n) {
    for (const e of n) {
      this.refreshRange(e.startLineNumber, e.endLineNumberExclusive - 1);
    }
  }
  refreshRange(n, e) {
    if (!this._tokenizer) {
      return;
    }
    n = Math.max(1, Math.min(this._textModel.getLineCount(), n));
    e = Math.min(this._textModel.getLineCount(), e);
    const t = new MOt();
    const {
      heuristicTokens: i
    } = this._tokenizer.tokenizeHeuristically(t, n, e);
    const r = this.setTokens(t.finalize());
    if (i) {
      for (const s of r.changes) {
        this._backgroundTokenizer.value?.requestTokens(s.fromLineNumber, s.toLineNumber + 1);
      }
    }
    this._defaultBackgroundTokenizer?.checkFinished();
  }
  forceTokenization(n) {
    const e = new MOt();
    this._tokenizer?.updateTokensUntilLine(e, n);
    this.setTokens(e.finalize());
    this._defaultBackgroundTokenizer?.checkFinished();
  }
  hasAccurateTokensForLine(n) {
    if (this._tokenizer) {
      return this._tokenizer.hasAccurateTokensForLine(n);
    } else {
      return true;
    }
  }
  isCheapToTokenize(n) {
    if (this._tokenizer) {
      return this._tokenizer.isCheapToTokenize(n);
    } else {
      return true;
    }
  }
  getLineTokens(n) {
    const e = this._textModel.getLineContent(n);
    const t = this._tokens.getTokens(this._textModel.getLanguageId(), n - 1, e);
    if (this._debugBackgroundTokens && this._debugBackgroundStates && this._tokenizer && this._debugBackgroundStates.getFirstInvalidEndStateLineNumberOrMax() > n && this._tokenizer.store.getFirstInvalidEndStateLineNumberOrMax() > n) {
      const i = this._debugBackgroundTokens.getTokens(this._textModel.getLanguageId(), n - 1, e);
      if (!t.equals(i) && this._debugBackgroundTokenizer.value?.reportMismatchingTokens) {
        this._debugBackgroundTokenizer.value.reportMismatchingTokens(n);
      }
    }
    return t;
  }
  getTokenTypeIfInsertingCharacter(n, e, t) {
    if (!this._tokenizer) {
      return 0;
    }
    const i = this._textModel.validatePosition(new ar(n, e));
    this.forceTokenization(i.lineNumber);
    return this._tokenizer.getTokenTypeIfInsertingCharacter(i, t);
  }
  tokenizeLinesAt(n, e) {
    if (this._tokenizer) {
      this.forceTokenization(n);
      return this._tokenizer.tokenizeLinesAt(n, e);
    } else {
      return null;
    }
  }
  get hasTokens() {
    return this._tokens.hasTokens;
  }
};

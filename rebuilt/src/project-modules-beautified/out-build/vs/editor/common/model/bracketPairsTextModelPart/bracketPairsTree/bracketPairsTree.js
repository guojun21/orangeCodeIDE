"use strict";

// Module: out-build/vs/editor/common/model/bracketPairsTextModelPart/bracketPairsTree/bracketPairsTree.js
// Offset: 1091900 (bundle byte offset)
// Size: 3534 bytes
yn();
rt();
SoA();
iOo();
Cph();
X5e();
Tph();
TOt();
REc();
Vs();
Dph();
Pph = class extends at {
  didLanguageChange(n) {
    return this.brackets.didLanguageChange(n);
  }
  constructor(n, e) {
    super();
    this.textModel = n;
    this.getLanguageConfiguration = e;
    this.didChangeEmitter = new Qe();
    this.denseKeyProvider = new xEc();
    this.brackets = new PEc(this.denseKeyProvider, this.getLanguageConfiguration);
    this.onDidChange = this.didChangeEmitter.event;
    this.queuedTextEditsForInitialAstWithoutTokens = [];
    this.queuedTextEdits = [];
    if (n.tokenization.hasTokens) {
      if (n.tokenization.backgroundTokenizationState === 2) {
        this.initialAstWithoutTokens = undefined;
        this.astWithTokens = this.parseDocumentFromTextBuffer([], undefined, false);
      } else {
        this.initialAstWithoutTokens = this.parseDocumentFromTextBuffer([], undefined, true);
        this.astWithTokens = this.initialAstWithoutTokens;
      }
    } else {
      const t = this.brackets.getSingleLanguageBracketTokens(this.textModel.getLanguageId());
      const i = new wph(this.textModel.getValue(), t);
      this.initialAstWithoutTokens = MEc(i, [], undefined, true);
      this.astWithTokens = this.initialAstWithoutTokens;
    }
  }
  handleDidChangeBackgroundTokenizationState() {
    if (this.textModel.tokenization.backgroundTokenizationState === 2) {
      const n = this.initialAstWithoutTokens === undefined;
      this.initialAstWithoutTokens = undefined;
      if (!n) {
        this.didChangeEmitter.fire();
      }
    }
  }
  handleDidChangeTokens({
    ranges: n
  }) {
    const e = n.map(t => new TVe(ZN(t.fromLineNumber - 1, 0), ZN(t.toLineNumber, 0), ZN(t.toLineNumber - t.fromLineNumber + 1, 0)));
    this.handleEdits(e, true);
    if (!this.initialAstWithoutTokens) {
      this.didChangeEmitter.fire();
    }
  }
  handleContentChanged(n) {
    const e = TVe.fromModelContentChanges(n.changes);
    this.handleEdits(e, false);
  }
  handleEdits(n, e) {
    const t = lOo(this.queuedTextEdits, n);
    this.queuedTextEdits = t;
    if (this.initialAstWithoutTokens && !e) {
      this.queuedTextEditsForInitialAstWithoutTokens = lOo(this.queuedTextEditsForInitialAstWithoutTokens, n);
    }
  }
  flushQueue() {
    if (this.queuedTextEdits.length > 0) {
      this.astWithTokens = this.parseDocumentFromTextBuffer(this.queuedTextEdits, this.astWithTokens, false);
      this.queuedTextEdits = [];
    }
    if (this.queuedTextEditsForInitialAstWithoutTokens.length > 0) {
      this.initialAstWithoutTokens &&= this.parseDocumentFromTextBuffer(this.queuedTextEditsForInitialAstWithoutTokens, this.initialAstWithoutTokens, false);
      this.queuedTextEditsForInitialAstWithoutTokens = [];
    }
  }
  parseDocumentFromTextBuffer(n, e, t) {
    const r = e;
    const s = new BEc(this.textModel, this.brackets);
    return MEc(s, n, r, t);
  }
  getBracketsInRange(n, e) {
    this.flushQueue();
    const t = ZN(n.startLineNumber - 1, n.startColumn - 1);
    const i = ZN(n.endLineNumber - 1, n.endColumn - 1);
    return new DFt(r => {
      const s = this.initialAstWithoutTokens || this.astWithTokens;
      FEc(s, vW, s.length, t, i, r, 0, 0, new Map(), e);
    });
  }
  getBracketPairsInRange(n, e) {
    this.flushQueue();
    const t = xOt(n.getStartPosition());
    const i = xOt(n.getEndPosition());
    return new DFt(r => {
      const s = this.initialAstWithoutTokens || this.astWithTokens;
      const o = new Lph(r, e, this.textModel);
      OEc(s, vW, s.length, t, i, o, 0, new Map());
    });
  }
  getFirstBracketAfter(n) {
    this.flushQueue();
    const e = this.initialAstWithoutTokens || this.astWithTokens;
    return Rph(e, vW, e.length, xOt(n));
  }
  getFirstBracketBefore(n) {
    this.flushQueue();
    const e = this.initialAstWithoutTokens || this.astWithTokens;
    return Bph(e, vW, e.length, xOt(n));
  }
};
Lph = class {
  constructor(n, e, t) {
    this.push = n;
    this.includeMinIndentation = e;
    this.textModel = t;
  }
};

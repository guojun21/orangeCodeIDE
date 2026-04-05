"use strict";

// Module: out-build/vs/editor/common/languages/supports/indentationLineProcessor.js
// Offset: 792033 (bundle byte offset)
// Size: 3997 bytes
oa();
u4n();
LH();
u4o = class {
  constructor(n, e, t) {
    this._indentRulesSupport = e;
    this._indentationLineProcessor = new i1c(n, t);
  }
  shouldIncrease(n, e) {
    const t = this._indentationLineProcessor.getProcessedLine(n, e);
    return this._indentRulesSupport.shouldIncrease(t);
  }
  shouldDecrease(n, e) {
    const t = this._indentationLineProcessor.getProcessedLine(n, e);
    return this._indentRulesSupport.shouldDecrease(t);
  }
  shouldIgnore(n, e) {
    const t = this._indentationLineProcessor.getProcessedLine(n, e);
    return this._indentRulesSupport.shouldIgnore(t);
  }
  shouldIndentNextLine(n, e) {
    const t = this._indentationLineProcessor.getProcessedLine(n, e);
    return this._indentRulesSupport.shouldIndentNextLine(t);
  }
};
d4o = class {
  constructor(n, e) {
    this.model = n;
    this.indentationLineProcessor = new i1c(n, e);
  }
  getProcessedTokenContextAroundRange(n) {
    const e = this._getProcessedTokensBeforeRange(n);
    const t = this._getProcessedTokensAfterRange(n);
    const i = this._getProcessedPreviousLineTokens(n);
    return {
      beforeRangeProcessedTokens: e,
      afterRangeProcessedTokens: t,
      previousLineProcessedTokens: i
    };
  }
  _getProcessedTokensBeforeRange(n) {
    this.model.tokenization.forceTokenization(n.startLineNumber);
    const e = this.model.tokenization.getLineTokens(n.startLineNumber);
    const t = Zgt(e, n.startColumn - 1);
    let i;
    if (n1c(this.model, n.getStartPosition())) {
      const s = n.startColumn - 1 - t.firstCharOffset;
      const o = t.firstCharOffset;
      const a = o + s;
      i = e.sliceAndInflate(o, a, 0);
    } else {
      const s = n.startColumn - 1;
      i = e.sliceAndInflate(0, s, 0);
    }
    return this.indentationLineProcessor.getProcessedTokens(i);
  }
  _getProcessedTokensAfterRange(n) {
    const e = n.isEmpty() ? n.getStartPosition() : n.getEndPosition();
    this.model.tokenization.forceTokenization(e.lineNumber);
    const t = this.model.tokenization.getLineTokens(e.lineNumber);
    const i = Zgt(t, e.column - 1);
    const r = e.column - 1 - i.firstCharOffset;
    const s = i.firstCharOffset + r;
    const o = i.firstCharOffset + i.getLineLength();
    const a = t.sliceAndInflate(s, o, 0);
    return this.indentationLineProcessor.getProcessedTokens(a);
  }
  _getProcessedPreviousLineTokens(n) {
    const e = p => {
      this.model.tokenization.forceTokenization(p);
      const g = this.model.tokenization.getLineTokens(p);
      const f = this.model.getLineMaxColumn(p) - 1;
      return Zgt(g, f);
    };
    this.model.tokenization.forceTokenization(n.startLineNumber);
    const t = this.model.tokenization.getLineTokens(n.startLineNumber);
    const i = Zgt(t, n.startColumn - 1);
    const r = OB.createEmpty("", i.languageIdCodec);
    const s = n.startLineNumber - 1;
    if (s === 0 || i.firstCharOffset !== 0) {
      return r;
    }
    const l = e(s);
    if (i.languageId !== l.languageId) {
      return r;
    }
    const d = l.toIViewLineTokens();
    return this.indentationLineProcessor.getProcessedTokens(d);
  }
};
i1c = class {
  constructor(n, e) {
    this.model = n;
    this.languageConfigurationService = e;
  }
  getProcessedLine(n, e) {
    const t = (s, o) => {
      const a = rE(s);
      return o + s.substring(a.length);
    };
    this.model.tokenization.forceTokenization?.(n);
    const i = this.model.tokenization.getLineTokens(n);
    let r = this.getProcessedTokens(i).getLineContent();
    if (e !== undefined) {
      r = t(r, e);
    }
    return r;
  }
  getProcessedTokens(n) {
    const e = a => a === 2 || a === 3 || a === 1;
    const t = n.getLanguageId(0);
    const r = this.languageConfigurationService.getLanguageConfiguration(t).bracketsNew.getBracketRegExp({
      global: true
    });
    const s = [];
    n.forEach(a => {
      const l = n.getStandardTokenType(a);
      let u = n.getTokenText(a);
      if (e(l)) {
        u = u.replace(r, "");
      }
      const d = n.getMetadata(a);
      s.push({
        text: u,
        metadata: d
      });
    });
    return OB.createFromTextAndMetadata(s, n.languageIdCodec);
  }
};

"use strict";

// Module: out-build/vs/editor/common/model/textModelTokens.js
// Offset: 1203162 (bundle byte offset)
// Size: 7627 bytes
vr();
_s();
_r();
Sx();
EVe();
Ix();
$I();
cxc();
aaA();
uxc();
LH();
(function (n) {
  n[n.CHEAP_TOKENIZATION_LENGTH_LIMIT = 2048] = "CHEAP_TOKENIZATION_LENGTH_LIMIT";
})(Ngh ||= {});
Mgh = class {
  constructor(n, e) {
    this.tokenizationSupport = e;
    this.initialState = this.tokenizationSupport.getInitialState();
    this.store = new _Oo(n);
  }
  getStartState(n) {
    return this.store.getStartState(n, this.initialState);
  }
  getFirstInvalidLine() {
    return this.store.getFirstInvalidLine(this.initialState);
  }
};
Fgh = class extends Mgh {
  constructor(n, e, t, i) {
    super(n, e);
    this._textModel = t;
    this._languageIdCodec = i;
  }
  updateTokensUntilLine(n, e) {
    const t = this._textModel.getLanguageId();
    while (true) {
      const i = this.getFirstInvalidLine();
      if (!i || i.lineNumber > e) {
        break;
      }
      const r = this._textModel.getLineContent(i.lineNumber);
      const s = yOn(this._languageIdCodec, t, this.tokenizationSupport, r, true, i.startState);
      n.add(i.lineNumber, s.tokens);
      this.store.setEndState(i.lineNumber, s.endState);
    }
  }
  getTokenTypeIfInsertingCharacter(n, e) {
    const t = this.getStartState(n.lineNumber);
    if (!t) {
      return 0;
    }
    const i = this._textModel.getLanguageId();
    const r = this._textModel.getLineContent(n.lineNumber);
    const s = r.substring(0, n.column - 1) + e + r.substring(n.column - 1);
    const o = yOn(this._languageIdCodec, i, this.tokenizationSupport, s, true, t);
    const a = new OB(o.tokens, s, this._languageIdCodec);
    if (a.getCount() === 0) {
      return 0;
    }
    const l = a.findTokenIndexAtOffset(n.column - 1);
    return a.getStandardTokenType(l);
  }
  tokenizeLinesAt(n, e) {
    const t = this.getStartState(n);
    if (!t) {
      return null;
    }
    const i = this._textModel.getLanguageId();
    const r = [];
    let s = t;
    for (const o of e) {
      const a = yOn(this._languageIdCodec, i, this.tokenizationSupport, o, true, s);
      r.push(new OB(a.tokens, o, this._languageIdCodec));
      s = a.endState;
    }
    return r;
  }
  hasAccurateTokensForLine(n) {
    const e = this.store.getFirstInvalidEndStateLineNumberOrMax();
    return n < e;
  }
  isCheapToTokenize(n) {
    const e = this.store.getFirstInvalidEndStateLineNumberOrMax();
    return n < e || n === e && this._textModel.getLineLength(n) < 2048;
  }
  tokenizeHeuristically(n, e, t) {
    if (t <= this.store.getFirstInvalidEndStateLineNumberOrMax()) {
      return {
        heuristicTokens: false
      };
    }
    if (e <= this.store.getFirstInvalidEndStateLineNumberOrMax()) {
      this.updateTokensUntilLine(n, t);
      return {
        heuristicTokens: false
      };
    }
    let i = this.guessStartState(e);
    const r = this._textModel.getLanguageId();
    for (let s = e; s <= t; s++) {
      const o = this._textModel.getLineContent(s);
      const a = yOn(this._languageIdCodec, r, this.tokenizationSupport, o, true, i);
      n.add(s, a.tokens);
      i = a.endState;
    }
    return {
      heuristicTokens: true
    };
  }
  guessStartState(n) {
    let {
      likelyRelevantLines: e,
      initialState: t
    } = Lgh(this._textModel, n, this);
    t ||= this.tokenizationSupport.getInitialState();
    const i = this._textModel.getLanguageId();
    let r = t;
    for (const s of e) {
      r = yOn(this._languageIdCodec, i, this.tokenizationSupport, s, false, r).endState;
    }
    return r;
  }
};
_Oo = class {
  constructor(n) {
    this.lineCount = n;
    this._tokenizationStateStore = new dxc();
    this._invalidEndStatesLineNumbers = new Ogh();
    this._invalidEndStatesLineNumbers.addRange(new dm(1, n + 1));
  }
  getEndState(n) {
    return this._tokenizationStateStore.getEndState(n);
  }
  setEndState(n, e) {
    if (!e) {
      throw new _m("Cannot set null/undefined state");
    }
    this._invalidEndStatesLineNumbers.delete(n);
    const t = this._tokenizationStateStore.setEndState(n, e);
    if (t && n < this.lineCount) {
      this._invalidEndStatesLineNumbers.addRange(new dm(n + 1, n + 2));
    }
    return t;
  }
  acceptChange(n, e) {
    this.lineCount += e - n.length;
    this._tokenizationStateStore.acceptChange(n, e);
    this._invalidEndStatesLineNumbers.addRangeAndResize(new dm(n.startLineNumber, n.endLineNumberExclusive), e);
  }
  acceptChanges(n) {
    for (const e of n) {
      const [t] = Vbe(e.text);
      this.acceptChange(new rh(e.range.startLineNumber, e.range.endLineNumber + 1), t + 1);
    }
  }
  invalidateEndStateRange(n) {
    this._invalidEndStatesLineNumbers.addRange(new dm(n.startLineNumber, n.endLineNumberExclusive));
  }
  getFirstInvalidEndStateLineNumber() {
    return this._invalidEndStatesLineNumbers.min;
  }
  getFirstInvalidEndStateLineNumberOrMax() {
    return this.getFirstInvalidEndStateLineNumber() || Number.MAX_SAFE_INTEGER;
  }
  allStatesValid() {
    return this._invalidEndStatesLineNumbers.min === null;
  }
  getStartState(n, e) {
    if (n === 1) {
      return e;
    } else {
      return this.getEndState(n - 1);
    }
  }
  getFirstInvalidLine(n) {
    const e = this.getFirstInvalidEndStateLineNumber();
    if (e === null) {
      return null;
    }
    const t = this.getStartState(e, n);
    if (!t) {
      throw new _m("Start state must be defined");
    }
    return {
      lineNumber: e,
      startState: t
    };
  }
};
dxc = class {
  constructor() {
    this._lineEndStates = new Rgh(null);
  }
  getEndState(n) {
    return this._lineEndStates.get(n);
  }
  setEndState(n, e) {
    const t = this._lineEndStates.get(n);
    if (t && t.equals(e)) {
      return false;
    } else {
      this._lineEndStates.set(n, e);
      return true;
    }
  }
  acceptChange(n, e) {
    let t = n.length;
    if (e > 0 && t > 0) {
      t--;
      e--;
    }
    this._lineEndStates.replace(n.startLineNumber, t, e);
  }
  acceptChanges(n) {
    for (const e of n) {
      const [t] = Vbe(e.text);
      this.acceptChange(new rh(e.range.startLineNumber, e.range.endLineNumber + 1), t + 1);
    }
  }
};
Ogh = class {
  constructor() {
    this._ranges = [];
  }
  getRanges() {
    return this._ranges;
  }
  get min() {
    if (this._ranges.length === 0) {
      return null;
    } else {
      return this._ranges[0].start;
    }
  }
  removeMin() {
    if (this._ranges.length === 0) {
      return null;
    }
    const n = this._ranges[0];
    if (n.start + 1 === n.endExclusive) {
      this._ranges.shift();
    } else {
      this._ranges[0] = new dm(n.start + 1, n.endExclusive);
    }
    return n.start;
  }
  delete(n) {
    const e = this._ranges.findIndex(t => t.contains(n));
    if (e !== -1) {
      const t = this._ranges[e];
      if (t.start === n) {
        if (t.endExclusive === n + 1) {
          this._ranges.splice(e, 1);
        } else {
          this._ranges[e] = new dm(n + 1, t.endExclusive);
        }
      } else if (t.endExclusive === n + 1) {
        this._ranges[e] = new dm(t.start, n);
      } else {
        this._ranges.splice(e, 1, new dm(t.start, n), new dm(n + 1, t.endExclusive));
      }
    }
  }
  addRange(n) {
    dm.addRange(n, this._ranges);
  }
  addRangeAndResize(n, e) {
    let t = 0;
    while (!(t >= this._ranges.length) && !(n.start <= this._ranges[t].endExclusive)) {
      t++;
    }
    let i = t;
    while (!(i >= this._ranges.length) && !(n.endExclusive < this._ranges[i].start)) {
      i++;
    }
    const r = e - n.length;
    for (let s = i; s < this._ranges.length; s++) {
      this._ranges[s] = this._ranges[s].delta(r);
    }
    if (t === i) {
      const s = new dm(n.start, n.start + e);
      if (!s.isEmpty) {
        this._ranges.splice(t, 0, s);
      }
    } else {
      const s = Math.min(n.start, this._ranges[t].start);
      const o = Math.max(n.endExclusive, this._ranges[i - 1].endExclusive);
      const a = new dm(s, o + r);
      if (a.isEmpty) {
        this._ranges.splice(t, i - t);
      } else {
        this._ranges.splice(t, i - t, a);
      }
    }
  }
  toString() {
    return this._ranges.map(n => n.toString()).join(" + ");
  }
};
Ugh = class {
  constructor(n, e) {
    this._tokenizerWithStateStore = n;
    this._backgroundTokenStore = e;
    this._isDisposed = false;
    this._isScheduled = false;
  }
  dispose() {
    this._isDisposed = true;
  }
  handleChanges() {
    this._beginBackgroundTokenization();
  }
  _beginBackgroundTokenization() {
    if (!this._isScheduled && !!this._tokenizerWithStateStore._textModel.isAttachedToEditor() && !!this._hasLinesToTokenize()) {
      this._isScheduled = true;
      Mze(n => {
        this._isScheduled = false;
        this._backgroundTokenizeWithDeadline(n);
      });
    }
  }
  _backgroundTokenizeWithDeadline(n) {
    const e = Date.now() + n.timeRemaining();
    const t = () => {
      if (!this._isDisposed && !!this._tokenizerWithStateStore._textModel.isAttachedToEditor() && !!this._hasLinesToTokenize()) {
        this._backgroundTokenizeForAtLeast1ms();
        if (Date.now() < e) {
          l5e(t);
        } else {
          this._beginBackgroundTokenization();
        }
      }
    };
    t();
  }
  _backgroundTokenizeForAtLeast1ms() {
    const n = this._tokenizerWithStateStore._textModel.getLineCount();
    const e = new MOt();
    const t = J_.create(false);
    do {
      if (t.elapsed() > 1 || this._tokenizeOneInvalidLine(e) >= n) {
        break;
      }
    } while (this._hasLinesToTokenize());
    this._backgroundTokenStore.setTokens(e.finalize());
    this.checkFinished();
  }
  _hasLinesToTokenize() {
    if (this._tokenizerWithStateStore) {
      return !this._tokenizerWithStateStore.store.allStatesValid();
    } else {
      return false;
    }
  }
  _tokenizeOneInvalidLine(n) {
    const e = this._tokenizerWithStateStore?.getFirstInvalidLine();
    if (e) {
      this._tokenizerWithStateStore.updateTokensUntilLine(n, e.lineNumber);
      return e.lineNumber;
    } else {
      return this._tokenizerWithStateStore._textModel.getLineCount() + 1;
    }
  }
  checkFinished() {
    if (!this._isDisposed) {
      if (this._tokenizerWithStateStore.store.allStatesValid()) {
        this._backgroundTokenStore.backgroundTokenizationFinished();
      }
    }
  }
  requestTokens(n, e) {
    this._tokenizerWithStateStore.store.invalidateEndStateRange(new rh(n, e));
  }
};

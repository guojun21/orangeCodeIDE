"use strict";

// Module: out-build/vs/editor/common/model/tokens.js
// Offset: 1210789 (bundle byte offset)
// Size: 2322 bytes
Vs();
vr();
yn();
rt();
Ix();
$gh = class {
  constructor() {
    this._onDidChangeVisibleRanges = new Qe();
    this.onDidChangeVisibleRanges = this._onDidChangeVisibleRanges.event;
    this._views = new Set();
  }
  attachView() {
    const n = new qgh(e => {
      this._onDidChangeVisibleRanges.fire({
        view: n,
        state: e
      });
    });
    this._views.add(n);
    return n;
  }
  detachView(n) {
    this._views.delete(n);
    this._onDidChangeVisibleRanges.fire({
      view: n,
      state: undefined
    });
  }
};
qgh = class {
  constructor(n) {
    this.handleStateChange = n;
  }
  setVisibleLines(n, e) {
    const t = n.map(i => new rh(i.startLineNumber, i.endLineNumber + 1));
    this.handleStateChange({
      visibleLineRanges: t,
      stabilized: e
    });
  }
};
Hgh = class extends at {
  get lineRanges() {
    return this._lineRanges;
  }
  constructor(n) {
    super();
    this._refreshTokens = n;
    this.runner = this._register(new Hu(() => this.update(), 50));
    this._computedLineRanges = [];
    this._lineRanges = [];
  }
  update() {
    if (!cg(this._computedLineRanges, this._lineRanges, (n, e) => n.equals(e))) {
      this._computedLineRanges = this._lineRanges;
      this._refreshTokens();
    }
  }
  handleStateChange(n) {
    this._lineRanges = n.visibleLineRanges;
    if (n.stabilized) {
      this.runner.cancel();
      this.update();
    } else {
      this.runner.schedule();
    }
  }
};
mxc = class extends at {
  get backgroundTokenizationState() {
    return this._backgroundTokenizationState;
  }
  constructor(n, e, t) {
    super();
    this._languageIdCodec = n;
    this._textModel = e;
    this.getLanguageId = t;
    this._onDidChangeTokens = this._register(new Qe());
    this.onDidChangeTokens = this._onDidChangeTokens.event;
  }
  tokenizeIfCheap(n) {
    if (this.isCheapToTokenize(n)) {
      this.forceTokenization(n);
    }
  }
};

"use strict";

// Module: out-build/vs/editor/contrib/stickyScroll/browser/stickyScrollProvider.js
// Offset: 25476902 (bundle byte offset)
// Size: 3409 bytes
rt();
Cm();
Po();
vr();
Vs();
yn();
QE();
ekA();
iwg = class {
  constructor(n, e, t, i) {
    this.startLineNumber = n;
    this.endLineNumber = e;
    this.top = t;
    this.height = i;
  }
};
tua = class extends at {
  static {
    this.ID = "store.contrib.stickyScrollController";
  }
  constructor(e, t, i) {
    super();
    this._languageFeaturesService = t;
    this._languageConfigurationService = i;
    this._onDidChangeStickyScroll = this._register(new Qe());
    this.onDidChangeStickyScroll = this._onDidChangeStickyScroll.event;
    this._model = null;
    this._cts = null;
    this._stickyModelProvider = null;
    this._editor = e;
    this._sessionStore = this._register(new Ut());
    this._updateSoon = this._register(new Hu(() => this.update(), 50));
    this._register(this._editor.onDidChangeConfiguration(r => {
      if (r.hasChanged(120)) {
        this.readConfiguration();
      }
    }));
    this.readConfiguration();
  }
  readConfiguration() {
    this._sessionStore.clear();
    if (this._editor.getOption(120).enabled) {
      this._sessionStore.add(this._editor.onDidChangeModel(() => {
        this._model = null;
        this.updateStickyModelProvider();
        this._onDidChangeStickyScroll.fire();
        this.update();
      }));
      this._sessionStore.add(this._editor.onDidChangeHiddenAreas(() => this.update()));
      this._sessionStore.add(this._editor.onDidChangeModelContent(() => this._updateSoon.schedule()));
      this._sessionStore.add(this._languageFeaturesService.documentSymbolProvider.onDidChange(() => this.update()));
      this._sessionStore.add($i(() => {
        this._stickyModelProvider?.dispose();
        this._stickyModelProvider = null;
      }));
      this.updateStickyModelProvider();
      this.update();
    }
  }
  getVersionId() {
    return this._model?.version;
  }
  updateStickyModelProvider() {
    this._stickyModelProvider?.dispose();
    this._stickyModelProvider = null;
    const e = this._editor;
    if (e.hasModel()) {
      this._stickyModelProvider = new Yla(e, () => this._updateSoon.schedule(), this._languageConfigurationService, this._languageFeaturesService);
    }
  }
  async update() {
    this._cts?.dispose(true);
    this._cts = new Wc();
    await this.updateStickyModel(this._cts.token);
    this._onDidChangeStickyScroll.fire();
  }
  async updateStickyModel(e) {
    if (!this._editor.hasModel() || !this._stickyModelProvider || this._editor.getModel().isTooLargeForTokenization()) {
      this._model = null;
      return;
    }
    const t = await this._stickyModelProvider.update(e);
    if (!e.isCancellationRequested) {
      this._model = t;
    }
  }
  updateIndex(e) {
    if (e === -1) {
      e = 0;
    } else if (e < 0) {
      e = -e - 2;
    }
    return e;
  }
  getCandidateStickyLinesIntersectingFromStickyModel(e, t, i, r, s, o) {
    if (t.children.length === 0) {
      return;
    }
    let a = o;
    const l = [];
    for (let m = 0; m < t.children.length; m++) {
      const p = t.children[m];
      if (p.range) {
        l.push(p.range.startLineNumber);
      }
    }
    const u = this.updateIndex(s5e(l, e.startLineNumber, (m, p) => m - p));
    const d = this.updateIndex(s5e(l, e.startLineNumber + r, (m, p) => m - p));
    for (let m = u; m <= d; m++) {
      const p = t.children[m];
      if (!p) {
        return;
      }
      const g = p.range;
      if (g) {
        const f = g.startLineNumber;
        const A = g.endLineNumber;
        if (e.startLineNumber <= A + 1 && f - 1 <= e.endLineNumber && f !== a) {
          a = f;
          const w = this._editor.getOption(68);
          i.push(new iwg(f, A - 1, s, w));
          this.getCandidateStickyLinesIntersectingFromStickyModel(e, p, i, r + 1, s + w, f);
        }
      } else {
        this.getCandidateStickyLinesIntersectingFromStickyModel(e, p, i, r, s, o);
      }
    }
  }
  getCandidateStickyLinesIntersecting(e) {
    if (!this._model?.element) {
      return [];
    }
    let t = [];
    this.getCandidateStickyLinesIntersectingFromStickyModel(e, this._model.element, t, 0, 0, -1);
    const i = this._editor._getViewModel()?.getHiddenAreas();
    if (i) {
      for (const r of i) {
        t = t.filter(s => !(s.startLineNumber >= r.startLineNumber) || !(s.endLineNumber <= r.endLineNumber + 1));
      }
    }
    return t;
  }
};
tua = __decorate([__param(1, $u), __param(2, JS)], tua);

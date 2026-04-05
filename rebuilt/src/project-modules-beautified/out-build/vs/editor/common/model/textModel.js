"use strict";

// Module: out-build/vs/editor/common/model/textModel.js
// Offset: 1268316 (bundle byte offset)
// Size: 41484 bytes
Vs();
xf();
_s();
yn();
rt();
gde();
oa();
Yn();
EVe();
Pkc();
tl();
ts();
db();
z4o();
Ku();
QE();
xw();
FoA();
OoA();
DOt();
Hph();
qoA();
sgh();
exc();
bgh();
i9e();
gaA();
pxc();
Tft();
Wt();
VD();
gT();
Rde();
hd();
hs();
LOn = 0;
kfh = 999;
Efh = 10000;
xfh = class {
  constructor(n) {
    this._source = n;
    this._eos = false;
  }
  read() {
    if (this._eos) {
      return null;
    }
    const n = [];
    let e = 0;
    let t = 0;
    do {
      const i = this._source.read();
      if (i === null) {
        this._eos = true;
        if (e === 0) {
          return null;
        } else {
          return n.join("");
        }
      }
      if (i.length > 0) {
        n[e++] = i;
        t += i.length;
      }
      if (t >= 65536) {
        return n.join("");
      }
    } while (true);
  }
};
GOt = () => {
  throw new Error("Invalid change accessor");
};
(function (n) {
  n[n.Relaxed = 0] = "Relaxed";
  n[n.SurrogatePairs = 1] = "SurrogatePairs";
})(Tfh ||= {});
N6 = class extends at {
  static {
    Fft = this;
  }
  static {
    this._MODEL_SYNC_LIMIT = 52428800;
  }
  static {
    this.LARGE_FILE_SIZE_THRESHOLD = 20971520;
  }
  static {
    this.LARGE_FILE_LINE_COUNT_THRESHOLD = 300000;
  }
  static {
    this.LARGE_FILE_HEAP_OPERATION_THRESHOLD = 268435456;
  }
  static {
    this.DEFAULT_CREATION_OPTIONS = {
      isForSimpleWidget: false,
      tabSize: J$.tabSize,
      indentSize: J$.indentSize,
      insertSpaces: J$.insertSpaces,
      detectIndentation: false,
      defaultEOL: 1,
      trimAutoWhitespace: J$.trimAutoWhitespace,
      largeFileOptimizations: J$.largeFileOptimizations,
      bracketPairColorizationOptions: J$.bracketPairColorizationOptions
    };
  }
  static resolveOptions(e, t) {
    if (t.detectIndentation) {
      const i = Jph(e, t.tabSize, t.insertSpaces);
      return new nOo({
        tabSize: i.tabSize,
        indentSize: "tabSize",
        insertSpaces: i.insertSpaces,
        trimAutoWhitespace: t.trimAutoWhitespace,
        defaultEOL: t.defaultEOL,
        bracketPairColorizationOptions: t.bracketPairColorizationOptions
      });
    }
    return new nOo(t);
  }
  get onDidChangeLanguage() {
    return this._tokenizationTextModelPart.onDidChangeLanguage;
  }
  get onDidChangeLanguageConfiguration() {
    return this._tokenizationTextModelPart.onDidChangeLanguageConfiguration;
  }
  get onDidChangeTokens() {
    return this._tokenizationTextModelPart.onDidChangeTokens;
  }
  onDidChangeContent(e) {
    return this._eventEmitter.slowEvent(t => e(t.contentChangedEvent));
  }
  onDidChangeContentOrInjectedText(e) {
    return H_(this._eventEmitter.fastEvent(t => e(t)), this._onDidChangeInjectedText.event(t => e(t)));
  }
  _isDisposing() {
    return this.__isDisposing;
  }
  get tokenization() {
    return this._tokenizationTextModelPart;
  }
  get bracketPairs() {
    return this._bracketPairs;
  }
  get guides() {
    return this._guidesTextModelPart;
  }
  constructor(e, t, i, r = null, s = false, o = false, a, l, u, d, m, p, g) {
    super();
    this.skipLSPSync = s;
    this.skipLSPRegistration = o;
    this._undoRedoService = a;
    this._languageService = l;
    this._languageConfigurationService = u;
    this._tooltipService = d;
    this.instantiationService = m;
    this._modelService = p;
    this._commandService = g;
    this._onWillDispose = this._register(new Qe());
    this.onWillDispose = this._onWillDispose.event;
    this._onDidChangeDecorations = this._register(new Rfh(I => this.handleBeforeFireDecorationsChangedEvent(I)));
    this.onDidChangeDecorations = this._onDidChangeDecorations.event;
    this._onDidChangeOptions = this._register(new Qe());
    this.onDidChangeOptions = this._onDidChangeOptions.event;
    this._onDidChangeAttached = this._register(new Qe());
    this.onDidChangeAttached = this._onDidChangeAttached.event;
    this._onDidChangeInjectedText = this._register(new Qe());
    this._eventEmitter = this._register(new Pfh());
    this._languageSelectionListener = this._register(new uo());
    this.syncedWithLSP = false;
    this._deltaDecorationCallCnt = 0;
    this._attachedViews = new $gh();
    LOn++;
    this.id = "$model" + LOn;
    this.isForSimpleWidget = i.isForSimpleWidget;
    if (typeof r === "undefined" || r === null) {
      this._associatedResource = je.parse("inmemory://model/" + LOn);
    } else {
      this._associatedResource = r;
    }
    this._attachedEditorCount = 0;
    const {
      textBuffer: f,
      disposable: A
    } = POn(e, i.defaultEOL);
    this._buffer = f;
    this._bufferDisposable = A;
    const w = this._buffer.getLineCount();
    const C = this._buffer.getValueLengthInRange(new Zt(1, 1, w, this._buffer.getLineLength(w) + 1), 0);
    if (i.largeFileOptimizations) {
      this._isTooLargeForTokenization = C > Fft.LARGE_FILE_SIZE_THRESHOLD || w > Fft.LARGE_FILE_LINE_COUNT_THRESHOLD;
      this._isTooLargeForHeapOperation = C > Fft.LARGE_FILE_HEAP_OPERATION_THRESHOLD;
    } else {
      this._isTooLargeForTokenization = false;
      this._isTooLargeForHeapOperation = false;
    }
    this._options = Fft.resolveOptions(this._buffer, i);
    const x = typeof t == "string" ? t : t.languageId;
    if (typeof t != "string") {
      this._languageSelectionListener.value = t.onDidChange(() => this._setLanguage(t.languageId));
    }
    this._bracketPairs = this._register(new Nph(this, this._languageConfigurationService));
    this._guidesTextModelPart = this._register(new qph(this, this._languageConfigurationService));
    this._decorationProvider = this._register(new Mph(this));
    this._tokenizationTextModelPart = this.instantiationService.createInstance(xOo, this, this._bracketPairs, x, this._attachedViews);
    this._isTooLargeForSyncing = C > Fft._MODEL_SYNC_LIMIT;
    this._versionId = 1;
    this._alternativeVersionId = 1;
    this._initialUndoRedoSnapshot = null;
    this._isDisposed = false;
    this.__isDisposing = false;
    this._instanceId = V0c(LOn);
    this._lastDecorationId = 0;
    this._decorations = Object.create(null);
    this._decorationsTree = new Bxc();
    this._commandManager = new Uph(this, this._undoRedoService);
    this._isUndoing = false;
    this._isRedoing = false;
    this._trimAutoWhitespaceLines = null;
    this._register(this._decorationProvider.onDidChange(() => {
      this._onDidChangeDecorations.beginDeferredEmit();
      this._onDidChangeDecorations.fire();
      this._onDidChangeDecorations.endDeferredEmit();
    }));
    if (!o) {
      this._languageService.requestRichLanguageFeatures(x);
    }
    this._register(this._languageConfigurationService.onDidChange(I => {
      this._bracketPairs.handleLanguageConfigurationServiceChange(I);
      this._tokenizationTextModelPart.handleLanguageConfigurationServiceChange(I);
    }));
    this.reactiveStorageReducers = new Lfh(this);
    [this.nonPersistentReactiveStorage, this.setNonPersistentReactiveStorage] = this.createEmptyNonPersistentStorage();
  }
  createEmptyNonPersistentStorage() {
    return v3(sph(), undefined);
  }
  dispose() {
    this.__isDisposing = true;
    this._onWillDispose.fire();
    this._tokenizationTextModelPart.dispose();
    this._isDisposed = true;
    super.dispose();
    this._bufferDisposable.dispose();
    this.__isDisposing = false;
    const e = new bOo([], "", `
`, false, false, true, true);
    e.dispose();
    this._buffer = e;
    this._bufferDisposable = at.None;
  }
  _hasListeners() {
    return this._onWillDispose.hasListeners() || this._onDidChangeDecorations.hasListeners() || this._tokenizationTextModelPart._hasListeners() || this._onDidChangeOptions.hasListeners() || this._onDidChangeAttached.hasListeners() || this._onDidChangeInjectedText.hasListeners() || this._eventEmitter.hasListeners();
  }
  _assertNotDisposed() {
    if (this._isDisposed) {
      throw new _m("Model is disposed!");
    }
  }
  equalsTextBuffer(e) {
    this._assertNotDisposed();
    return this._buffer.equals(e);
  }
  getTextBuffer() {
    this._assertNotDisposed();
    return this._buffer;
  }
  _emitContentChangedEvent(e, t) {
    if (!this.__isDisposing) {
      this._tokenizationTextModelPart.handleDidChangeContent(t);
      this._bracketPairs.handleDidChangeContent(t);
      this._eventEmitter.fire(new COn(e, t));
    }
  }
  setValue(e) {
    this._assertNotDisposed();
    if (e == null) {
      throw uw();
    }
    const {
      textBuffer: t,
      disposable: i
    } = POn(e, this._options.defaultEOL);
    this._setValueFromTextBuffer(t, i);
  }
  _createContentChanged2(e, t, i, r, s, o, a, l, u) {
    return {
      changes: [{
        range: e,
        rangeOffset: t,
        rangeLength: i,
        text: s
      }],
      eol: this._buffer.getEOL(),
      isEolChange: u,
      versionId: this.getVersionId(),
      isUndoing: o,
      isRedoing: a,
      isFlush: l
    };
  }
  _setValueFromTextBuffer(e, t) {
    this._assertNotDisposed();
    const i = this.getFullModelRange();
    const r = this.getValueLengthInRange(i);
    const s = this.getLineCount();
    const o = this.getLineMaxColumn(s);
    this._buffer = e;
    this._bufferDisposable.dispose();
    this._bufferDisposable = t;
    this._increaseVersionId();
    this._decorations = Object.create(null);
    this._decorationsTree = new Bxc();
    this._commandManager.clear();
    this._trimAutoWhitespaceLines = null;
    this._emitContentChangedEvent(new _On([new Ygh()], this._versionId, false, false), this._createContentChanged2(new Zt(1, 1, s, o), 0, r, new ar(s, o), this.getValue(), false, false, true, false));
  }
  setEOL(e) {
    this._assertNotDisposed();
    const t = e === 1 ? `\r
` : `
`;
    if (this._buffer.getEOL() === t) {
      return;
    }
    const i = this.getFullModelRange();
    const r = this.getValueLengthInRange(i);
    const s = this.getLineCount();
    const o = this.getLineMaxColumn(s);
    this._onBeforeEOLChange();
    this._buffer.setEOL(t);
    this._increaseVersionId();
    this._onAfterEOLChange();
    this._emitContentChangedEvent(new _On([new efh()], this._versionId, false, false), this._createContentChanged2(new Zt(1, 1, s, o), 0, r, new ar(s, o), this.getValue(), false, false, false, true));
  }
  _onBeforeEOLChange() {
    this._decorationsTree.ensureAllNodesHaveRanges(this);
  }
  _onAfterEOLChange() {
    const e = this.getVersionId();
    const t = this._decorationsTree.collectNodesPostOrder();
    for (let i = 0, r = t.length; i < r; i++) {
      const s = t[i];
      const o = s.range;
      const a = s.cachedAbsoluteStart - s.start;
      const l = this._buffer.getOffsetAt(o.startLineNumber, o.startColumn);
      const u = this._buffer.getOffsetAt(o.endLineNumber, o.endColumn);
      s.cachedAbsoluteStart = l;
      s.cachedAbsoluteEnd = u;
      s.cachedVersionId = e;
      s.start = l - a;
      s.end = u - a;
      RVe(s);
    }
  }
  onBeforeAttached() {
    this._attachedEditorCount++;
    if (this._attachedEditorCount === 1) {
      this._tokenizationTextModelPart.handleDidChangeAttached();
      this._onDidChangeAttached.fire(undefined);
    }
    return this._attachedViews.attachView();
  }
  onBeforeDetached(e) {
    this._attachedEditorCount--;
    if (this._attachedEditorCount === 0) {
      this._tokenizationTextModelPart.handleDidChangeAttached();
      this._onDidChangeAttached.fire(undefined);
    }
    this._attachedViews.detachView(e);
  }
  isAttachedToEditor() {
    return this._attachedEditorCount > 0;
  }
  getAttachedEditorCount() {
    return this._attachedEditorCount;
  }
  isTooLargeForSyncing() {
    return this._isTooLargeForSyncing;
  }
  isTooLargeForTokenization() {
    return this._isTooLargeForTokenization;
  }
  isTooLargeForHeapOperation() {
    return this._isTooLargeForHeapOperation;
  }
  isDisposed() {
    return this._isDisposed;
  }
  isDominatedByLongLines() {
    this._assertNotDisposed();
    if (this.isTooLargeForTokenization()) {
      return false;
    }
    let e = 0;
    let t = 0;
    const i = this._buffer.getLineCount();
    for (let r = 1; r <= i; r++) {
      const s = this._buffer.getLineLength(r);
      if (s >= Efh) {
        t += s;
      } else {
        e += s;
      }
    }
    return t > e;
  }
  get uri() {
    return this._associatedResource;
  }
  getOptions() {
    this._assertNotDisposed();
    return this._options;
  }
  getFormattingOptions() {
    return {
      tabSize: this._options.indentSize,
      insertSpaces: this._options.insertSpaces
    };
  }
  updateOptions(e) {
    this._assertNotDisposed();
    const t = typeof e.tabSize !== "undefined" ? e.tabSize : this._options.tabSize;
    const i = typeof e.indentSize !== "undefined" ? e.indentSize : this._options.originalIndentSize;
    const r = typeof e.insertSpaces !== "undefined" ? e.insertSpaces : this._options.insertSpaces;
    const s = typeof e.trimAutoWhitespace !== "undefined" ? e.trimAutoWhitespace : this._options.trimAutoWhitespace;
    const o = typeof e.bracketColorizationOptions !== "undefined" ? e.bracketColorizationOptions : this._options.bracketPairColorizationOptions;
    const a = new nOo({
      tabSize: t,
      indentSize: i,
      insertSpaces: r,
      defaultEOL: this._options.defaultEOL,
      trimAutoWhitespace: s,
      bracketPairColorizationOptions: o
    });
    if (this._options.equals(a)) {
      return;
    }
    const l = this._options.createChangeEvent(a);
    this._options = a;
    this._bracketPairs.handleDidChangeOptions(l);
    this._decorationProvider.handleDidChangeOptions(l);
    this._onDidChangeOptions.fire(l);
  }
  detectIndentation(e, t) {
    this._assertNotDisposed();
    const i = Jph(this._buffer, t, e);
    this.updateOptions({
      insertSpaces: i.insertSpaces,
      tabSize: i.tabSize,
      indentSize: i.tabSize
    });
  }
  normalizeIndentation(e) {
    this._assertNotDisposed();
    return Rkc(e, this._options.indentSize, this._options.insertSpaces);
  }
  getVersionId() {
    this._assertNotDisposed();
    return this._versionId;
  }
  mightContainRTL() {
    return this._buffer.mightContainRTL();
  }
  mightContainUnusualLineTerminators() {
    return this._buffer.mightContainUnusualLineTerminators();
  }
  removeUnusualLineTerminators(e = null) {
    const t = this.findMatches(K0c.source, false, true, false, null, false, 1073741824);
    this._buffer.resetMightContainUnusualLineTerminators();
    this.pushEditOperations(e, t.map(i => ({
      range: i.range,
      text: null
    })), () => null);
  }
  mightContainNonBasicASCII() {
    return this._buffer.mightContainNonBasicASCII();
  }
  getAlternativeVersionId() {
    this._assertNotDisposed();
    return this._alternativeVersionId;
  }
  getInitialUndoRedoSnapshot() {
    this._assertNotDisposed();
    return this._initialUndoRedoSnapshot;
  }
  getOffsetAt(e) {
    this._assertNotDisposed();
    const t = this._validatePosition(e.lineNumber, e.column, 0);
    return this._buffer.getOffsetAt(t.lineNumber, t.column);
  }
  getPositionAt(e) {
    this._assertNotDisposed();
    const t = Math.min(this._buffer.getLength(), Math.max(0, e));
    return this._buffer.getPositionAt(t);
  }
  _increaseVersionId() {
    this._versionId = this._versionId + 1;
    this._alternativeVersionId = this._versionId;
  }
  _overwriteVersionId(e) {
    this._versionId = e;
  }
  _overwriteAlternativeVersionId(e) {
    this._alternativeVersionId = e;
  }
  _overwriteInitialUndoRedoSnapshot(e) {
    this._initialUndoRedoSnapshot = e;
  }
  getValue(e, t = false) {
    this._assertNotDisposed();
    if (this.isTooLargeForHeapOperation()) {
      throw new _m("Operation would exceed heap memory limits");
    }
    const i = this.getFullModelRange();
    const r = this.getValueInRange(i, e);
    if (t) {
      return this._buffer.getBOM() + r;
    } else {
      return r;
    }
  }
  createSnapshot(e = false) {
    return new xfh(this._buffer.createSnapshot(e));
  }
  getValueLength(e, t = false) {
    this._assertNotDisposed();
    const i = this.getFullModelRange();
    const r = this.getValueLengthInRange(i, e);
    if (t) {
      return this._buffer.getBOM().length + r;
    } else {
      return r;
    }
  }
  getValueInRange(e, t = 0) {
    this._assertNotDisposed();
    return this._buffer.getValueInRange(this.validateRange(e), t);
  }
  getValueLengthInRange(e, t = 0) {
    this._assertNotDisposed();
    return this._buffer.getValueLengthInRange(this.validateRange(e), t);
  }
  getCharacterCountInRange(e, t = 0) {
    this._assertNotDisposed();
    return this._buffer.getCharacterCountInRange(this.validateRange(e), t);
  }
  getLineCount() {
    this._assertNotDisposed();
    return this._buffer.getLineCount();
  }
  getLineContent(e) {
    this._assertNotDisposed();
    if (e < 1 || e > this.getLineCount()) {
      throw new _m("Illegal value for lineNumber");
    }
    return this._buffer.getLineContent(e);
  }
  getLineLength(e) {
    this._assertNotDisposed();
    if (e < 1 || e > this.getLineCount()) {
      throw new _m("Illegal value for lineNumber");
    }
    return this._buffer.getLineLength(e);
  }
  getLinesContent() {
    this._assertNotDisposed();
    if (this.isTooLargeForHeapOperation()) {
      throw new _m("Operation would exceed heap memory limits");
    }
    return this._buffer.getLinesContent();
  }
  getEOL() {
    this._assertNotDisposed();
    return this._buffer.getEOL();
  }
  getEndOfLineSequence() {
    this._assertNotDisposed();
    if (this._buffer.getEOL() === `
`) {
      return 0;
    } else {
      return 1;
    }
  }
  getLineMinColumn(e) {
    this._assertNotDisposed();
    return 1;
  }
  getLineMaxColumn(e) {
    this._assertNotDisposed();
    if (e < 1 || e > this.getLineCount()) {
      throw new _m("Illegal value for lineNumber");
    }
    return this._buffer.getLineLength(e) + 1;
  }
  getLineFirstNonWhitespaceColumn(e) {
    this._assertNotDisposed();
    if (e < 1 || e > this.getLineCount()) {
      throw new _m("Illegal value for lineNumber");
    }
    return this._buffer.getLineFirstNonWhitespaceColumn(e);
  }
  getLineLastNonWhitespaceColumn(e) {
    this._assertNotDisposed();
    if (e < 1 || e > this.getLineCount()) {
      throw new _m("Illegal value for lineNumber");
    }
    return this._buffer.getLineLastNonWhitespaceColumn(e);
  }
  _validateRangeRelaxedNoAllocations(e) {
    const t = this._buffer.getLineCount();
    const i = e.startLineNumber;
    const r = e.startColumn;
    let s = Math.floor(typeof i == "number" && !isNaN(i) ? i : 1);
    let o = Math.floor(typeof r == "number" && !isNaN(r) ? r : 1);
    if (s < 1) {
      s = 1;
      o = 1;
    } else if (s > t) {
      s = t;
      o = this.getLineMaxColumn(s);
    } else if (o <= 1) {
      o = 1;
    } else {
      const m = this.getLineMaxColumn(s);
      if (o >= m) {
        o = m;
      }
    }
    const a = e.endLineNumber;
    const l = e.endColumn;
    let u = Math.floor(typeof a == "number" && !isNaN(a) ? a : 1);
    let d = Math.floor(typeof l == "number" && !isNaN(l) ? l : 1);
    if (u < 1) {
      u = 1;
      d = 1;
    } else if (u > t) {
      u = t;
      d = this.getLineMaxColumn(u);
    } else if (d <= 1) {
      d = 1;
    } else {
      const m = this.getLineMaxColumn(u);
      if (d >= m) {
        d = m;
      }
    }
    if (i === s && r === o && a === u && l === d && e instanceof Zt && !(e instanceof Vl)) {
      return e;
    } else {
      return new Zt(s, o, u, d);
    }
  }
  _isValidPosition(e, t, i) {
    if (typeof e != "number" || typeof t != "number" || isNaN(e) || isNaN(t) || e < 1 || t < 1 || (e | 0) !== e || (t | 0) !== t) {
      return false;
    }
    const r = this._buffer.getLineCount();
    if (e > r) {
      return false;
    }
    if (t === 1) {
      return true;
    }
    const s = this.getLineMaxColumn(e);
    if (t > s) {
      return false;
    }
    if (i === 1) {
      const o = this._buffer.getLineCharCode(e, t - 2);
      if (d3(o)) {
        return false;
      }
    }
    return true;
  }
  _validatePosition(e, t, i) {
    const r = Math.floor(typeof e == "number" && !isNaN(e) ? e : 1);
    const s = Math.floor(typeof t == "number" && !isNaN(t) ? t : 1);
    const o = this._buffer.getLineCount();
    if (r < 1) {
      return new ar(1, 1);
    }
    if (r > o) {
      return new ar(o, this.getLineMaxColumn(o));
    }
    if (s <= 1) {
      return new ar(r, 1);
    }
    const a = this.getLineMaxColumn(r);
    if (s >= a) {
      return new ar(r, a);
    }
    if (i === 1) {
      const l = this._buffer.getLineCharCode(r, s - 2);
      if (d3(l)) {
        return new ar(r, s - 1);
      }
    }
    return new ar(r, s);
  }
  validatePosition(e) {
    this._assertNotDisposed();
    if (e instanceof ar && this._isValidPosition(e.lineNumber, e.column, 1)) {
      return e;
    } else {
      return this._validatePosition(e.lineNumber, e.column, 1);
    }
  }
  isValidRange(e) {
    return this._isValidRange(e, 1);
  }
  _isValidRange(e, t) {
    const i = e.startLineNumber;
    const r = e.startColumn;
    const s = e.endLineNumber;
    const o = e.endColumn;
    if (!this._isValidPosition(i, r, 0) || !this._isValidPosition(s, o, 0)) {
      return false;
    }
    if (t === 1) {
      const a = r > 1 ? this._buffer.getLineCharCode(i, r - 2) : 0;
      const l = o > 1 && o <= this._buffer.getLineLength(s) ? this._buffer.getLineCharCode(s, o - 2) : 0;
      const u = d3(a);
      const d = d3(l);
      return !u && !d;
    }
    return true;
  }
  validateRange(e) {
    this._assertNotDisposed();
    if (e instanceof Zt && !(e instanceof Vl) && this._isValidRange(e, 1)) {
      return e;
    }
    const i = this._validatePosition(e.startLineNumber, e.startColumn, 0);
    const r = this._validatePosition(e.endLineNumber, e.endColumn, 0);
    const s = i.lineNumber;
    const o = i.column;
    const a = r.lineNumber;
    const l = r.column;
    {
      const u = o > 1 ? this._buffer.getLineCharCode(s, o - 2) : 0;
      const d = l > 1 && l <= this._buffer.getLineLength(a) ? this._buffer.getLineCharCode(a, l - 2) : 0;
      const m = d3(u);
      const p = d3(d);
      if (!m && !p) {
        return new Zt(s, o, a, l);
      } else if (s === a && o === l) {
        return new Zt(s, o - 1, a, l - 1);
      } else if (m && p) {
        return new Zt(s, o - 1, a, l + 1);
      } else if (m) {
        return new Zt(s, o - 1, a, l);
      } else {
        return new Zt(s, o, a, l + 1);
      }
    }
    return new Zt(s, o, a, l);
  }
  modifyPosition(e, t) {
    this._assertNotDisposed();
    const i = this.getOffsetAt(e) + t;
    return this.getPositionAt(Math.min(this._buffer.getLength(), Math.max(0, i)));
  }
  getFullModelRange() {
    this._assertNotDisposed();
    const e = this.getLineCount();
    return new Zt(1, 1, e, this.getLineMaxColumn(e));
  }
  findMatchesLineByLine(e, t, i, r) {
    return this._buffer.findMatchesLineByLine(e, t, i, r);
  }
  findMatches(e, t, i, r, s, o, a = kfh) {
    this._assertNotDisposed();
    let l = null;
    if (t !== null) {
      if (!Array.isArray(t)) {
        t = [t];
      }
      if (t.every(m => Zt.isIRange(m))) {
        l = t.map(m => this.validateRange(m));
      }
    }
    if (l === null) {
      l = [this.getFullModelRange()];
    }
    l = l.sort((m, p) => m.startLineNumber - p.startLineNumber || m.startColumn - p.startColumn);
    const u = [];
    u.push(l.reduce((m, p) => Zt.areIntersecting(m, p) ? m.plusRange(p) : (u.push(m), p)));
    let d;
    if (!i && e.indexOf(`
`) < 0) {
      const p = new Nde(e, i, r, s).parseSearchRequest();
      if (!p) {
        return [];
      }
      d = g => this.findMatchesLineByLine(g, p, o, a);
    } else {
      d = m => bOn.findMatches(this, new Nde(e, i, r, s), m, o, a);
    }
    return u.map(d).reduce((m, p) => m.concat(p), []);
  }
  findNextMatch(e, t, i, r, s, o) {
    this._assertNotDisposed();
    const a = this.validatePosition(t);
    if (!i && e.indexOf(`
`) < 0) {
      const u = new Nde(e, i, r, s).parseSearchRequest();
      if (!u) {
        return null;
      }
      const d = this.getLineCount();
      let m = new Zt(a.lineNumber, a.column, d, this.getLineMaxColumn(d));
      let p = this.findMatchesLineByLine(m, u, o, 1);
      bOn.findNextMatch(this, new Nde(e, i, r, s), a, o);
      if (p.length > 0 || (m = new Zt(1, 1, a.lineNumber, this.getLineMaxColumn(a.lineNumber)), p = this.findMatchesLineByLine(m, u, o, 1), p.length > 0)) {
        return p[0];
      } else {
        return null;
      }
    }
    return bOn.findNextMatch(this, new Nde(e, i, r, s), a, o);
  }
  findPreviousMatch(e, t, i, r, s, o) {
    this._assertNotDisposed();
    const a = this.validatePosition(t);
    return bOn.findPreviousMatch(this, new Nde(e, i, r, s), a, o);
  }
  pushStackElement() {
    this._commandManager.pushStackElement();
  }
  popStackElement() {
    this._commandManager.popStackElement();
  }
  pushEOL(e) {
    if ((this.getEOL() === `
` ? 0 : 1) !== e) {
      try {
        this._onDidChangeDecorations.beginDeferredEmit();
        this._eventEmitter.beginDeferredEmit();
        if (this._initialUndoRedoSnapshot === null) {
          this._initialUndoRedoSnapshot = this._undoRedoService.createSnapshot(this.uri);
        }
        this._commandManager.pushEOL(e);
      } finally {
        this._eventEmitter.endDeferredEmit();
        this._onDidChangeDecorations.endDeferredEmit();
      }
    }
  }
  _validateEditOperation(e) {
    if (e instanceof sOn) {
      return e;
    } else {
      return new sOn(e.identifier || null, this.validateRange(e.range), e.text, e.forceMoveMarkers || false, e.isAutoWhitespaceEdit || false, e._isTracked || false);
    }
  }
  _validateEditOperations(e) {
    const t = [];
    for (let i = 0, r = e.length; i < r; i++) {
      t[i] = this._validateEditOperation(e[i]);
    }
    return t;
  }
  pushEditOperations(e, t, i, r, s) {
    try {
      this._onDidChangeDecorations.beginDeferredEmit();
      this._eventEmitter.beginDeferredEmit();
      return this._pushEditOperations(e, this._validateEditOperations(t), i, r, s);
    } finally {
      this._eventEmitter.endDeferredEmit();
      this._onDidChangeDecorations.endDeferredEmit();
    }
  }
  _pushEditOperations(e, t, i, r, s) {
    this._tooltipService.registerEvent("editor.type.push_edit_operation");
    if (this._options.trimAutoWhitespace && this._trimAutoWhitespaceLines) {
      const o = t.map(l => ({
        range: this.validateRange(l.range),
        text: l.text
      }));
      let a = true;
      if (e) {
        for (let l = 0, u = e.length; l < u; l++) {
          const d = e[l];
          let m = false;
          for (let p = 0, g = o.length; p < g; p++) {
            const f = o[p].range;
            const A = f.startLineNumber > d.endLineNumber;
            const w = d.startLineNumber > f.endLineNumber;
            if (!A && !w) {
              m = true;
              break;
            }
          }
          if (!m) {
            a = false;
            break;
          }
        }
      }
      if (a) {
        for (let l = 0, u = this._trimAutoWhitespaceLines.length; l < u; l++) {
          const d = this._trimAutoWhitespaceLines[l];
          const m = this.getLineMaxColumn(d);
          let p = true;
          for (let g = 0, f = o.length; g < f; g++) {
            const A = o[g].range;
            const w = o[g].text;
            if (!(d < A.startLineNumber) && !(d > A.endLineNumber) && (d !== A.startLineNumber || A.startColumn !== m || !A.isEmpty() || !w || !(w.length > 0) || w.charAt(0) !== `
`) && (d !== A.startLineNumber || A.startColumn !== 1 || !A.isEmpty() || !w || !(w.length > 0) || w.charAt(w.length - 1) !== `
`)) {
              p = false;
              break;
            }
          }
          if (p) {
            const g = new Zt(d, 1, d, m);
            t.push(new sOn(null, g, null, false, false, false));
          }
        }
      }
      this._trimAutoWhitespaceLines = null;
    }
    if (this._initialUndoRedoSnapshot === null) {
      this._initialUndoRedoSnapshot = this._undoRedoService.createSnapshot(this.uri);
    }
    return this._commandManager.pushEditOperation(e, t, i, r, s);
  }
  _applyUndo(e, t, i, r) {
    this._tooltipService.registerEvent("editor.type.undo");
    const s = e.map(o => {
      const a = this.getPositionAt(o.newPosition);
      const l = this.getPositionAt(o.newEnd);
      return {
        range: new Zt(a.lineNumber, a.column, l.lineNumber, l.column),
        text: o.oldText
      };
    });
    this._applyUndoRedoEdits(s, t, true, false, i, r);
  }
  _applyRedo(e, t, i, r) {
    this._tooltipService.registerEvent("editor.type.redo");
    const s = e.map(o => {
      const a = this.getPositionAt(o.oldPosition);
      const l = this.getPositionAt(o.oldEnd);
      return {
        range: new Zt(a.lineNumber, a.column, l.lineNumber, l.column),
        text: o.newText
      };
    });
    this._applyUndoRedoEdits(s, t, false, true, i, r);
  }
  _applyUndoRedoEdits(e, t, i, r, s, o) {
    try {
      this._onDidChangeDecorations.beginDeferredEmit();
      this._eventEmitter.beginDeferredEmit();
      this._isUndoing = i;
      this._isRedoing = r;
      this.applyEdits(e, false);
      this.setEOL(t);
      this._overwriteAlternativeVersionId(s);
    } finally {
      this._isUndoing = false;
      this._isRedoing = false;
      this._eventEmitter.endDeferredEmit(o);
      this._onDidChangeDecorations.endDeferredEmit();
    }
  }
  applyEdits(e, t = false, i = false) {
    try {
      this._onDidChangeDecorations.beginDeferredEmit();
      this._eventEmitter.beginDeferredEmit();
      const r = this._validateEditOperations(e);
      const s = this._doApplyEdits(r, t);
      if (i) {
        for (const o of r) {
          this._undoRedoService.rebaseStack(this.uri, this._buffer.getOffsetAt(o.range.startLineNumber, o.range.startColumn), this._buffer.getOffsetAt(o.range.endLineNumber, o.range.endColumn), o.text?.length ?? 0, o.range.endLineNumber, o.range.endColumn, (o.text?.split(this.getEOL()).length ?? 1) - Math.max(1, o.range.endLineNumber - o.range.startLineNumber), o.text?.split(this.getEOL())[o.text.split(this.getEOL()).length - 1].length ?? 0 - o.range.endColumn + (o.range.startLineNumber === o.range.endLineNumber ? o.range.startColumn : 0));
        }
      }
      return s;
    } finally {
      this._eventEmitter.endDeferredEmit();
      this._onDidChangeDecorations.endDeferredEmit();
    }
  }
  _doApplyEdits(e, t) {
    const i = this._buffer.getLineCount();
    const r = this._buffer.applyEdits(e, this._options.trimAutoWhitespace, t);
    const s = this._buffer.getLineCount();
    const o = r.changes;
    this._trimAutoWhitespaceLines = r.trimAutoWhitespaceLineNumbers;
    if (o.length !== 0) {
      for (let u = 0, d = o.length; u < d; u++) {
        const m = o[u];
        this._decorationsTree.acceptReplace(m.rangeOffset, m.rangeLength, m.text.length, m.forceMoveMarkers);
      }
      const a = [];
      this._increaseVersionId();
      let l = i;
      for (let u = 0, d = o.length; u < d; u++) {
        const m = o[u];
        const [p] = Vbe(m.text);
        this._onDidChangeDecorations.fire();
        const g = m.range.startLineNumber;
        const f = m.range.endLineNumber;
        const A = f - g;
        const w = p;
        const C = Math.min(A, w);
        const x = w - A;
        const I = s - l - x + g;
        const B = I;
        const R = I + w;
        const N = this._decorationsTree.getInjectedTextInInterval(this, this.getOffsetAt(new ar(B, 1)), this.getOffsetAt(new ar(R, this.getLineMaxColumn(R))), 0);
        const M = o9e.fromDecorations(N);
        const O = new Ebe(M);
        for (let $ = C; $ >= 0; $--) {
          const H = g + $;
          const W = I + $;
          O.takeFromEndWhile(Y => Y.lineNumber > W);
          const z = O.takeFromEndWhile(Y => Y.lineNumber === W);
          a.push(new bxc(H, this.getLineContent(W), z));
        }
        if (C < A) {
          const $ = g + C;
          a.push(new Zgh($ + 1, f));
        }
        if (C < w) {
          const $ = new Ebe(M);
          const H = g + C;
          const W = w - C;
          const z = s - l - W + H + 1;
          const Y = [];
          const j = [];
          for (let X = 0; X < W; X++) {
            const ee = z + X;
            j[X] = this.getLineContent(ee);
            $.takeWhile(re => re.lineNumber < ee);
            Y[X] = $.takeWhile(re => re.lineNumber === ee);
          }
          a.push(new Xgh(H + 1, g + w, j, Y));
        }
        l += x;
      }
      this._emitContentChangedEvent(new _On(a, this.getVersionId(), this._isUndoing, this._isRedoing), {
        changes: o,
        eol: this._buffer.getEOL(),
        isEolChange: false,
        versionId: this.getVersionId(),
        isUndoing: this._isUndoing,
        isRedoing: this._isRedoing,
        isFlush: false
      });
    }
    if (r.reverseEdits === null) {
      return undefined;
    } else {
      return r.reverseEdits;
    }
  }
  undo() {
    return this._undoRedoService.undo(this.uri);
  }
  canUndo() {
    return this._undoRedoService.canUndo(this.uri);
  }
  redo() {
    return this._undoRedoService.redo(this.uri);
  }
  canRedo() {
    return this._undoRedoService.canRedo(this.uri);
  }
  handleBeforeFireDecorationsChangedEvent(e) {
    if (e === null || e.size === 0) {
      return;
    }
    const i = Array.from(e).map(r => new bxc(r, this.getLineContent(r), this._getInjectedTextInLine(r)));
    this._onDidChangeInjectedText.fire(new vxc(i));
  }
  changeDecorations(e, t = 0) {
    this._assertNotDisposed();
    try {
      this._onDidChangeDecorations.beginDeferredEmit();
      return this._changeDecorations(t, e);
    } finally {
      this._onDidChangeDecorations.endDeferredEmit();
    }
  }
  _changeDecorations(e, t) {
    const i = {
      addDecoration: (s, o) => this._deltaDecorationsImpl(e, [], [{
        range: s,
        options: o
      }])[0],
      changeDecoration: (s, o) => {
        this._changeDecorationImpl(s, o);
      },
      changeDecorationOptions: (s, o) => {
        this._changeDecorationOptionsImpl(s, Sfh(o));
      },
      removeDecoration: s => {
        this._deltaDecorationsImpl(e, [s], []);
      },
      deltaDecorations: (s, o) => s.length === 0 && o.length === 0 ? [] : this._deltaDecorationsImpl(e, s, o)
    };
    let r = null;
    try {
      r = t(i);
    } catch (s) {
      Gc(s);
    }
    i.addDecoration = GOt;
    i.changeDecoration = GOt;
    i.changeDecorationOptions = GOt;
    i.removeDecoration = GOt;
    i.deltaDecorations = GOt;
    return r;
  }
  deltaDecorations(e, t, i = 0) {
    this._assertNotDisposed();
    e ||= [];
    if (e.length === 0 && t.length === 0) {
      return [];
    }
    try {
      this._deltaDecorationCallCnt++;
      if (this._deltaDecorationCallCnt > 1) {
        console.warn("Invoking deltaDecorations recursively could lead to leaking decorations.");
        Gc(new Error("Invoking deltaDecorations recursively could lead to leaking decorations."));
      }
      this._onDidChangeDecorations.beginDeferredEmit();
      return this._deltaDecorationsImpl(i, e, t);
    } finally {
      this._onDidChangeDecorations.endDeferredEmit();
      this._deltaDecorationCallCnt--;
    }
  }
  _getTrackedRange(e) {
    return this.getDecorationRange(e);
  }
  _setTrackedRange(e, t, i) {
    const r = e ? this._decorations[e] : null;
    if (!r) {
      if (t) {
        return this._deltaDecorationsImpl(0, [], [{
          range: t,
          options: Pxc[i]
        }], true)[0];
      } else {
        return null;
      }
    }
    if (!t) {
      this._decorationsTree.delete(r);
      delete this._decorations[r.id];
      return null;
    }
    const s = this._validateRangeRelaxedNoAllocations(t);
    const o = this._buffer.getOffsetAt(s.startLineNumber, s.startColumn);
    const a = this._buffer.getOffsetAt(s.endLineNumber, s.endColumn);
    this._decorationsTree.delete(r);
    r.reset(this.getVersionId(), o, a, s);
    r.setOptions(Pxc[i]);
    this._decorationsTree.insert(r);
    return r.id;
  }
  removeAllDecorationsWithOwnerId(e) {
    if (this._isDisposed) {
      return;
    }
    const t = this._decorationsTree.collectNodesFromOwner(e);
    for (let i = 0, r = t.length; i < r; i++) {
      const s = t[i];
      this._decorationsTree.delete(s);
      delete this._decorations[s.id];
    }
  }
  getDecorationOptions(e) {
    const t = this._decorations[e];
    if (t) {
      return t.options;
    } else {
      return null;
    }
  }
  getDecorationRange(e) {
    const t = this._decorations[e];
    if (t) {
      return this._decorationsTree.getNodeRange(this, t);
    } else {
      return null;
    }
  }
  getLineDecorations(e, t = 0, i = false) {
    if (e < 1 || e > this.getLineCount()) {
      return [];
    } else {
      return this.getLinesDecorations(e, e, t, i);
    }
  }
  getLinesDecorations(e, t, i = 0, r = false, s = false) {
    const o = this.getLineCount();
    const a = Math.min(o, Math.max(1, e));
    const l = Math.min(o, Math.max(1, t));
    const u = this.getLineMaxColumn(l);
    const d = new Zt(a, 1, l, u);
    const m = this._getDecorationsInRange(d, i, r, s);
    n0c(m, this._decorationProvider.getDecorationsInRange(d, i, r));
    return m;
  }
  getDecorationsInRange(e, t = 0, i = false, r = false, s = false) {
    const o = this.validateRange(e);
    const a = this._getDecorationsInRange(o, t, i, s);
    n0c(a, this._decorationProvider.getDecorationsInRange(o, t, i, r));
    return a;
  }
  getOverviewRulerDecorations(e = 0, t = false) {
    return this._decorationsTree.getAll(this, e, t, true, false);
  }
  getInjectedTextDecorations(e = 0) {
    return this._decorationsTree.getAllInjectedText(this, e);
  }
  _getInjectedTextInLine(e) {
    const t = this._buffer.getOffsetAt(e, 1);
    const i = t + this._buffer.getLineLength(e);
    const r = this._decorationsTree.getInjectedTextInInterval(this, t, i, 0);
    return o9e.fromDecorations(r).filter(s => s.lineNumber === e);
  }
  getAllDecorations(e = 0, t = false) {
    let i = this._decorationsTree.getAll(this, e, t, false, false);
    i = i.concat(this._decorationProvider.getAllDecorations(e, t));
    return i;
  }
  getAllMarginDecorations(e = 0) {
    return this._decorationsTree.getAll(this, e, false, false, true);
  }
  _getDecorationsInRange(e, t, i, r) {
    const s = this._buffer.getOffsetAt(e.startLineNumber, e.startColumn);
    const o = this._buffer.getOffsetAt(e.endLineNumber, e.endColumn);
    return this._decorationsTree.getAllInInterval(this, s, o, t, i, r);
  }
  getRangeAt(e, t) {
    return this._buffer.getRangeAt(e, t - e);
  }
  _changeDecorationImpl(e, t) {
    const i = this._decorations[e];
    if (!i) {
      return;
    }
    if (i.options.after) {
      const a = this.getDecorationRange(e);
      this._onDidChangeDecorations.recordLineAffectedByInjectedText(a.endLineNumber);
    }
    if (i.options.before) {
      const a = this.getDecorationRange(e);
      this._onDidChangeDecorations.recordLineAffectedByInjectedText(a.startLineNumber);
    }
    const r = this._validateRangeRelaxedNoAllocations(t);
    const s = this._buffer.getOffsetAt(r.startLineNumber, r.startColumn);
    const o = this._buffer.getOffsetAt(r.endLineNumber, r.endColumn);
    this._decorationsTree.delete(i);
    i.reset(this.getVersionId(), s, o, r);
    this._decorationsTree.insert(i);
    this._onDidChangeDecorations.checkAffectedAndFire(i.options);
    if (i.options.after) {
      this._onDidChangeDecorations.recordLineAffectedByInjectedText(r.endLineNumber);
    }
    if (i.options.before) {
      this._onDidChangeDecorations.recordLineAffectedByInjectedText(r.startLineNumber);
    }
  }
  _changeDecorationOptionsImpl(e, t) {
    const i = this._decorations[e];
    if (!i) {
      return;
    }
    const r = !!i.options.overviewRuler && !!i.options.overviewRuler.color;
    const s = !!t.overviewRuler && !!t.overviewRuler.color;
    this._onDidChangeDecorations.checkAffectedAndFire(i.options);
    this._onDidChangeDecorations.checkAffectedAndFire(t);
    if (i.options.after || t.after) {
      const l = this._decorationsTree.getNodeRange(this, i);
      this._onDidChangeDecorations.recordLineAffectedByInjectedText(l.endLineNumber);
    }
    if (i.options.before || t.before) {
      const l = this._decorationsTree.getNodeRange(this, i);
      this._onDidChangeDecorations.recordLineAffectedByInjectedText(l.startLineNumber);
    }
    const o = r !== s;
    const a = LaA(t) !== qOo(i);
    if (o || a) {
      this._decorationsTree.delete(i);
      i.setOptions(t);
      this._decorationsTree.insert(i);
    } else {
      i.setOptions(t);
    }
  }
  _deltaDecorationsImpl(e, t, i, r = false) {
    const s = this.getVersionId();
    const o = t.length;
    let a = 0;
    const l = i.length;
    let u = 0;
    this._onDidChangeDecorations.beginDeferredEmit();
    try {
      const d = new Array(l);
      while (a < o || u < l) {
        let m = null;
        if (a < o) {
          do {
            m = this._decorations[t[a++]];
          } while (!m && a < o);
          if (m) {
            if (m.options.after) {
              const p = this._decorationsTree.getNodeRange(this, m);
              this._onDidChangeDecorations.recordLineAffectedByInjectedText(p.endLineNumber);
            }
            if (m.options.before) {
              const p = this._decorationsTree.getNodeRange(this, m);
              this._onDidChangeDecorations.recordLineAffectedByInjectedText(p.startLineNumber);
            }
            this._decorationsTree.delete(m);
            if (!r) {
              this._onDidChangeDecorations.checkAffectedAndFire(m.options);
            }
          }
        }
        if (u < l) {
          if (!m) {
            const C = ++this._lastDecorationId;
            const x = `${this._instanceId};${C}`;
            m = new pOo(x, 0, 0);
            this._decorations[x] = m;
          }
          const p = i[u];
          const g = this._validateRangeRelaxedNoAllocations(p.range);
          const f = Sfh(p.options);
          const A = this._buffer.getOffsetAt(g.startLineNumber, g.startColumn);
          const w = this._buffer.getOffsetAt(g.endLineNumber, g.endColumn);
          m.ownerId = e;
          m.reset(s, A, w, g);
          m.setOptions(f);
          if (m.options.after) {
            this._onDidChangeDecorations.recordLineAffectedByInjectedText(g.endLineNumber);
          }
          if (m.options.before) {
            this._onDidChangeDecorations.recordLineAffectedByInjectedText(g.startLineNumber);
          }
          if (!r) {
            this._onDidChangeDecorations.checkAffectedAndFire(f);
          }
          this._decorationsTree.insert(m);
          d[u] = m.id;
          u++;
        } else if (m) {
          delete this._decorations[m.id];
        }
      }
      return d;
    } finally {
      this._onDidChangeDecorations.endDeferredEmit();
    }
  }
  getLanguageId() {
    return this.tokenization.getLanguageId();
  }
  setLanguage(e, t) {
    if (typeof e == "string") {
      this._languageSelectionListener.clear();
      this._setLanguage(e, t);
    } else {
      this._languageSelectionListener.value = e.onDidChange(() => this._setLanguage(e.languageId, t));
      this._setLanguage(e.languageId, t);
    }
  }
  _setLanguage(e, t) {
    this.tokenization.setLanguageId(e, t);
    this._languageService.requestRichLanguageFeatures(e);
  }
  getLanguageIdAtPosition(e, t) {
    return this.tokenization.getLanguageIdAtPosition(e, t);
  }
  getWordAtPosition(e) {
    return this._tokenizationTextModelPart.getWordAtPosition(e);
  }
  getTokenTypeAtPosition_DANGEROUS_BECAUSE_COSTS_1_MS(e) {
    const t = this._tokenizationTextModelPart.getLineTokens(e.lineNumber);
    const i = t.findTokenIndexAtOffset(e.column - 1);
    return t.getStandardTokenType(i);
  }
  getWordUntilPosition(e) {
    return this._tokenizationTextModelPart.getWordUntilPosition(e);
  }
  getWordsUntilPosition(e) {
    return this._tokenizationTextModelPart.getWordsUntilPosition(e);
  }
  normalizePosition(e, t) {
    return e;
  }
  getLineIndentColumn(e) {
    return $Oo(this.getLineContent(e)) + 1;
  }
  toString() {
    return `TextModel(${this.uri.toString()})`;
  }
};
N6 = Fft = __decorate([__param(6, qB), __param(7, Jl), __param(8, JS), __param(9, FY), __param(10, ln), __param(11, Il), __param(12, fr)], N6);
Bxc = class {
  constructor() {
    this._decorationsTree0 = new mOn();
    this._decorationsTree1 = new mOn();
    this._injectedTextDecorationsTree = new mOn();
  }
  ensureAllNodesHaveRanges(n) {
    this.getAll(n, 0, false, false, false);
  }
  _ensureNodesHaveRanges(n, e) {
    for (const t of e) {
      if (t.range === null) {
        t.range = n.getRangeAt(t.cachedAbsoluteStart, t.cachedAbsoluteEnd);
      }
    }
    return e;
  }
  getAllInInterval(n, e, t, i, r, s) {
    const o = n.getVersionId();
    const a = this._intervalSearch(e, t, i, r, o, s);
    return this._ensureNodesHaveRanges(n, a);
  }
  _intervalSearch(n, e, t, i, r, s) {
    const o = this._decorationsTree0.intervalSearch(n, e, t, i, r, s);
    const a = this._decorationsTree1.intervalSearch(n, e, t, i, r, s);
    const l = this._injectedTextDecorationsTree.intervalSearch(n, e, t, i, r, s);
    return o.concat(a).concat(l);
  }
  getInjectedTextInInterval(n, e, t, i) {
    const r = n.getVersionId();
    const s = this._injectedTextDecorationsTree.intervalSearch(e, t, i, false, r, false);
    return this._ensureNodesHaveRanges(n, s).filter(o => o.options.showIfCollapsed || !o.range.isEmpty());
  }
  getAllInjectedText(n, e) {
    const t = n.getVersionId();
    const i = this._injectedTextDecorationsTree.search(e, false, t, false);
    return this._ensureNodesHaveRanges(n, i).filter(r => r.options.showIfCollapsed || !r.range.isEmpty());
  }
  getAll(n, e, t, i, r) {
    const s = n.getVersionId();
    const o = this._search(e, t, i, s, r);
    return this._ensureNodesHaveRanges(n, o);
  }
  _search(n, e, t, i, r) {
    if (t) {
      return this._decorationsTree1.search(n, e, i, r);
    }
    {
      const s = this._decorationsTree0.search(n, e, i, r);
      const o = this._decorationsTree1.search(n, e, i, r);
      const a = this._injectedTextDecorationsTree.search(n, e, i, r);
      return s.concat(o).concat(a);
    }
  }
  collectNodesFromOwner(n) {
    const e = this._decorationsTree0.collectNodesFromOwner(n);
    const t = this._decorationsTree1.collectNodesFromOwner(n);
    const i = this._injectedTextDecorationsTree.collectNodesFromOwner(n);
    return e.concat(t).concat(i);
  }
  collectNodesPostOrder() {
    const n = this._decorationsTree0.collectNodesPostOrder();
    const e = this._decorationsTree1.collectNodesPostOrder();
    const t = this._injectedTextDecorationsTree.collectNodesPostOrder();
    return n.concat(e).concat(t);
  }
  insert(n) {
    if (qOo(n)) {
      this._injectedTextDecorationsTree.insert(n);
    } else if (Dxc(n)) {
      this._decorationsTree1.insert(n);
    } else {
      this._decorationsTree0.insert(n);
    }
  }
  delete(n) {
    if (qOo(n)) {
      this._injectedTextDecorationsTree.delete(n);
    } else if (Dxc(n)) {
      this._decorationsTree1.delete(n);
    } else {
      this._decorationsTree0.delete(n);
    }
  }
  getNodeRange(n, e) {
    const t = n.getVersionId();
    if (e.cachedVersionId !== t) {
      this._resolveNode(e, t);
    }
    if (e.range === null) {
      e.range = n.getRangeAt(e.cachedAbsoluteStart, e.cachedAbsoluteEnd);
    }
    return e.range;
  }
  _resolveNode(n, e) {
    if (qOo(n)) {
      this._injectedTextDecorationsTree.resolveNode(n, e);
    } else if (Dxc(n)) {
      this._decorationsTree1.resolveNode(n, e);
    } else {
      this._decorationsTree0.resolveNode(n, e);
    }
  }
  acceptReplace(n, e, t, i) {
    this._decorationsTree0.acceptReplace(n, e, t, i);
    this._decorationsTree1.acceptReplace(n, e, t, i);
    this._injectedTextDecorationsTree.acceptReplace(n, e, t, i);
  }
};
Rxc = class {
  constructor(n) {
    this.color = n.color || "";
    this.darkColor = n.darkColor || "";
  }
};
Ifh = class extends Rxc {
  constructor(n) {
    super(n);
    this._resolvedColor = null;
    this.position = typeof n.position == "number" ? n.position : Tx.Center;
  }
  getColor(n) {
    if (!this._resolvedColor) {
      if (n.type !== "light" && this.darkColor) {
        this._resolvedColor = this._resolveColor(this.darkColor, n);
      } else {
        this._resolvedColor = this._resolveColor(this.color, n);
      }
    }
    return this._resolvedColor;
  }
  invalidateCachedColor() {
    this._resolvedColor = null;
  }
  _resolveColor(n, e) {
    if (typeof n == "string") {
      return n;
    }
    const t = n ? e.getColor(n.id) : null;
    if (t) {
      return t.toString();
    } else {
      return "";
    }
  }
};
Dfh = class {
  constructor(n) {
    this.position = n?.position ?? G$.Center;
    this.persistLane = n?.persistLane;
  }
};
Bfh = class extends Rxc {
  constructor(n) {
    super(n);
    this.position = n.position;
    this.sectionHeaderStyle = n.sectionHeaderStyle ?? null;
    this.sectionHeaderText = n.sectionHeaderText ?? null;
  }
  getColor(n) {
    if (!this._resolvedColor) {
      if (n.type !== "light" && this.darkColor) {
        this._resolvedColor = this._resolveColor(this.darkColor, n);
      } else {
        this._resolvedColor = this._resolveColor(this.color, n);
      }
    }
    return this._resolvedColor;
  }
  invalidateCachedColor() {
    this._resolvedColor = undefined;
  }
  _resolveColor(n, e) {
    if (typeof n == "string") {
      return Xr.fromHex(n);
    } else {
      return e.getColor(n.id);
    }
  }
};
WOt = class vad {
  static from(e) {
    if (e instanceof vad) {
      return e;
    } else {
      return new vad(e);
    }
  }
  constructor(e) {
    this.content = e.content || "";
    this.tokens = e.tokens ?? null;
    this.inlineClassName = e.inlineClassName || null;
    this.inlineClassNameAffectsLetterSpacing = e.inlineClassNameAffectsLetterSpacing || false;
    this.attachedData = e.attachedData || null;
    this.cursorStops = e.cursorStops || null;
    this.order = e.order;
  }
};
Zh = class Aad {
  static register(e) {
    return new Aad(e);
  }
  static createDynamic(e) {
    return new Aad(e);
  }
  constructor(e) {
    this.description = e.description;
    this.blockClassName = e.blockClassName ? hRe(e.blockClassName) : null;
    this.blockDoesNotCollapse = e.blockDoesNotCollapse ?? null;
    this.blockIsAfterEnd = e.blockIsAfterEnd ?? null;
    this.blockPadding = e.blockPadding ?? null;
    this.stickiness = e.stickiness || 0;
    this.zIndex = e.zIndex || 0;
    this.className = e.className ? hRe(e.className) : null;
    this.shouldFillLineOnLineBreak = e.shouldFillLineOnLineBreak ?? null;
    this.hoverMessage = e.hoverMessage || null;
    this.glyphMarginHoverMessage = e.glyphMarginHoverMessage || null;
    this.lineNumberHoverMessage = e.lineNumberHoverMessage || null;
    this.isWholeLine = e.isWholeLine || false;
    this.showIfCollapsed = e.showIfCollapsed || false;
    this.collapseOnReplaceEdit = e.collapseOnReplaceEdit || false;
    this.overviewRuler = e.overviewRuler ? new Ifh(e.overviewRuler) : null;
    this.minimap = e.minimap ? new Bfh(e.minimap) : null;
    this.glyphMargin = e.glyphMarginClassName ? new Dfh(e.glyphMargin) : null;
    this.glyphMarginClassName = e.glyphMarginClassName ? hRe(e.glyphMarginClassName) : null;
    this.linesDecorationsClassName = e.linesDecorationsClassName ? hRe(e.linesDecorationsClassName) : null;
    this.lineNumberClassName = e.lineNumberClassName ? hRe(e.lineNumberClassName) : null;
    this.linesDecorationsTooltip = e.linesDecorationsTooltip ? xtA(e.linesDecorationsTooltip) : null;
    this.firstLineDecorationClassName = e.firstLineDecorationClassName ? hRe(e.firstLineDecorationClassName) : null;
    this.marginClassName = e.marginClassName ? hRe(e.marginClassName) : null;
    this.inlineClassName = e.inlineClassName ? hRe(e.inlineClassName) : null;
    this.inlineClassNameAffectsLetterSpacing = e.inlineClassNameAffectsLetterSpacing || false;
    this.beforeContentClassName = e.beforeContentClassName ? hRe(e.beforeContentClassName) : null;
    this.afterContentClassName = e.afterContentClassName ? hRe(e.afterContentClassName) : null;
    this.after = e.after ? WOt.from(e.after) : null;
    this.before = e.before ? WOt.from(e.before) : null;
    this.hideInCommentTokens = e.hideInCommentTokens ?? false;
    this.hideInStringTokens = e.hideInStringTokens ?? false;
  }
};
Zh.EMPTY = Zh.register({
  description: "empty"
});
Pxc = [Zh.register({
  description: "tracked-range-always-grows-when-typing-at-edges",
  stickiness: 0
}), Zh.register({
  description: "tracked-range-never-grows-when-typing-at-edges",
  stickiness: 1
}), Zh.register({
  description: "tracked-range-grows-only-when-typing-before",
  stickiness: 2
}), Zh.register({
  description: "tracked-range-grows-only-when-typing-after",
  stickiness: 3
})];
Rfh = class extends at {
  constructor(n) {
    super();
    this.handleBeforeFire = n;
    this._actual = this._register(new Qe());
    this.event = this._actual.event;
    this._affectedInjectedTextLines = null;
    this._deferredCnt = 0;
    this._shouldFireDeferred = false;
    this._affectsMinimap = false;
    this._affectsOverviewRuler = false;
    this._affectsGlyphMargin = false;
    this._affectsLineNumber = false;
  }
  hasListeners() {
    return this._actual.hasListeners();
  }
  beginDeferredEmit() {
    this._deferredCnt++;
  }
  endDeferredEmit() {
    this._deferredCnt--;
    if (this._deferredCnt === 0) {
      if (this._shouldFireDeferred) {
        this.doFire();
      }
      this._affectedInjectedTextLines?.clear();
      this._affectedInjectedTextLines = null;
    }
  }
  recordLineAffectedByInjectedText(n) {
    this._affectedInjectedTextLines ||= new Set();
    this._affectedInjectedTextLines.add(n);
  }
  checkAffectedAndFire(n) {
    this._affectsMinimap ||= !!n.minimap?.position;
    this._affectsOverviewRuler ||= !!n.overviewRuler?.color;
    this._affectsGlyphMargin ||= !!n.glyphMarginClassName;
    this._affectsLineNumber ||= !!n.lineNumberClassName;
    this.tryFire();
  }
  fire() {
    this._affectsMinimap = true;
    this._affectsOverviewRuler = true;
    this._affectsGlyphMargin = true;
    this.tryFire();
  }
  tryFire() {
    if (this._deferredCnt === 0) {
      this.doFire();
    } else {
      this._shouldFireDeferred = true;
    }
  }
  doFire() {
    this.handleBeforeFire(this._affectedInjectedTextLines);
    const n = {
      affectsMinimap: this._affectsMinimap,
      affectsOverviewRuler: this._affectsOverviewRuler,
      affectsGlyphMargin: this._affectsGlyphMargin,
      affectsLineNumber: this._affectsLineNumber
    };
    this._shouldFireDeferred = false;
    this._affectsMinimap = false;
    this._affectsOverviewRuler = false;
    this._affectsGlyphMargin = false;
    this._actual.fire(n);
  }
};
Pfh = class extends at {
  constructor() {
    super();
    this._fastEmitter = this._register(new Qe());
    this.fastEvent = this._fastEmitter.event;
    this._slowEmitter = this._register(new Qe());
    this.slowEvent = this._slowEmitter.event;
    this._deferredCnt = 0;
    this._deferredEvent = null;
  }
  hasListeners() {
    return this._fastEmitter.hasListeners() || this._slowEmitter.hasListeners();
  }
  beginDeferredEmit() {
    this._deferredCnt++;
  }
  endDeferredEmit(n = null) {
    this._deferredCnt--;
    if (this._deferredCnt === 0 && this._deferredEvent !== null) {
      this._deferredEvent.rawContentChangedEvent.resultingSelection = n;
      const e = this._deferredEvent;
      this._deferredEvent = null;
      this._fastEmitter.fire(e);
      this._slowEmitter.fire(e);
    }
  }
  fire(n) {
    if (this._deferredCnt > 0) {
      if (this._deferredEvent) {
        this._deferredEvent = this._deferredEvent.merge(n);
      } else {
        this._deferredEvent = n;
      }
      return;
    }
    this._fastEmitter.fire(n);
    this._slowEmitter.fire(n);
  }
};
Lfh = class {
  constructor(n) {
    this.model = n;
  }
};

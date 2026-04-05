"use strict";

// Module: out-build/vs/workbench/contrib/notebook/common/model/notebookCellTextModel.js
// Offset: 32944835 (bundle byte offset)
// Size: 18023 bytes
yn();
iw();
rt();
Bc();
ts();
exc();
bv();
WE();
k9f();
vr();
ant();
oa();
HSi = class Ycd extends at {
  get outputs() {
    return this._outputs;
  }
  get metadata() {
    return this._metadata;
  }
  set metadata(e) {
    this._metadata = e;
    this._hash = null;
    this._onDidChangeMetadata.fire();
  }
  get internalMetadata() {
    return this._internalMetadata;
  }
  set internalMetadata(e) {
    const t = this._internalMetadata.lastRunSuccess !== e.lastRunSuccess;
    e = {
      ...e,
      runStartTimeAdjustment: vuy(this._internalMetadata, e)
    };
    this._internalMetadata = e;
    this._hash = null;
    this._onDidChangeInternalMetadata.fire({
      lastRunSuccessChanged: t
    });
  }
  get language() {
    return this._language;
  }
  set language(e) {
    if (!this._textModel || this._textModel.getLanguageId() !== this._languageService.getLanguageIdByLanguageName(e) || this._textModel.getLanguageId() !== this._languageService.getLanguageIdByLanguageName(this.language)) {
      this._hasLanguageSetExplicitly = true;
      this._setLanguageInternal(e);
    }
  }
  get mime() {
    return this._mime;
  }
  set mime(e) {
    if (this._mime !== e) {
      this._mime = e;
      this._hash = null;
      this._onDidChangeContent.fire("mime");
    }
  }
  get textBuffer() {
    if (this._textBuffer) {
      return this._textBuffer;
    } else {
      this._textBuffer = this._register(POn(this._source, 1).textBuffer);
      this._register(this._textBuffer.onDidChangeContent(() => {
        this._hash = null;
        if (!this._textModel) {
          this._onDidChangeContent.fire("content");
        }
        this.autoDetectLanguage();
      }));
      return this._textBuffer;
    }
  }
  get alternativeId() {
    return this._alternativeId;
  }
  get textModel() {
    return this._textModel;
  }
  set textModel(e) {
    if (this._textModel !== e) {
      this._textModelDisposables.clear();
      this._textModel = e;
      if (this._textModel) {
        this.setRegisteredLanguage(this._languageService, this._textModel.getLanguageId(), this.language);
        this._textModelDisposables.add(this._textModel.onDidChangeLanguage(t => this.setRegisteredLanguage(this._languageService, t.newLanguage, this.language)));
        this._textModelDisposables.add(this._textModel.onWillDispose(() => this.textModel = undefined));
        this._textModelDisposables.add(this._textModel.onDidChangeContent(t => {
          if (this._textModel) {
            this._versionId = this._textModel.getVersionId();
            this._alternativeId = this._textModel.getAlternativeVersionId();
          }
          this._textBufferHash = null;
          this._onDidChangeContent.fire("content");
          this._onDidChangeContent.fire({
            type: "model",
            event: t
          });
        }));
        this._textModel._overwriteVersionId(this._versionId);
        this._textModel._overwriteAlternativeVersionId(this._versionId);
        this._onDidChangeTextModel.fire();
      }
    }
  }
  setRegisteredLanguage(e, t, i) {
    const r = t === o_ || t === "jupyter";
    if (!e.isRegisteredLanguageId(i) && r) {
      this._onDidChangeLanguage.fire(i);
    } else {
      this.language = t;
    }
  }
  static {
    this.AUTO_DETECT_LANGUAGE_THROTTLE_DELAY = 600;
  }
  get hasLanguageSetExplicitly() {
    return this._hasLanguageSetExplicitly;
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g = undefined) {
    super();
    this.uri = e;
    this.handle = t;
    this._source = i;
    this._language = r;
    this._mime = s;
    this.cellKind = o;
    this.collapseState = d;
    this.transientOptions = m;
    this._languageService = p;
    this._languageDetectionService = g;
    this._onDidChangeTextModel = this._register(new Qe());
    this.onDidChangeTextModel = this._onDidChangeTextModel.event;
    this._onDidChangeOutputs = this._register(new Qe());
    this.onDidChangeOutputs = this._onDidChangeOutputs.event;
    this._onDidChangeOutputItems = this._register(new Qe());
    this.onDidChangeOutputItems = this._onDidChangeOutputItems.event;
    this._onDidChangeContent = this._register(new Qe());
    this.onDidChangeContent = this._onDidChangeContent.event;
    this._onDidChangeMetadata = this._register(new Qe());
    this.onDidChangeMetadata = this._onDidChangeMetadata.event;
    this._onDidChangeInternalMetadata = this._register(new Qe());
    this.onDidChangeInternalMetadata = this._onDidChangeInternalMetadata.event;
    this._onDidChangeLanguage = this._register(new Qe());
    this.onDidChangeLanguage = this._onDidChangeLanguage.event;
    this._textBufferHash = null;
    this._hash = null;
    this._versionId = 1;
    this._alternativeId = 1;
    this._textModelDisposables = this._register(new Ut());
    this._textModel = undefined;
    this.autoDetectLanguageThrottler = this._register(new L4(Ycd.AUTO_DETECT_LANGUAGE_THROTTLE_DELAY));
    this._autoLanguageDetectionEnabled = false;
    this._hasLanguageSetExplicitly = false;
    this._outputs = a.map(f => new qSi(f));
    this._metadata = l ?? {};
    this._internalMetadata = u ?? {};
  }
  enableAutoLanguageDetection() {
    this._autoLanguageDetectionEnabled = true;
    this.autoDetectLanguage();
  }
  async autoDetectLanguage() {
    if (this._autoLanguageDetectionEnabled) {
      this.autoDetectLanguageThrottler.trigger(() => this._doAutoDetectLanguage());
    }
  }
  async _doAutoDetectLanguage() {
    if (this.hasLanguageSetExplicitly) {
      return;
    }
    const e = await this._languageDetectionService?.detectLanguage(this.uri);
    if (e) {
      if (!this._textModel || this._textModel.getLanguageId() !== this._languageService.getLanguageIdByLanguageName(e) || this._textModel.getLanguageId() !== this._languageService.getLanguageIdByLanguageName(this.language)) {
        this._setLanguageInternal(e);
      }
    }
  }
  _setLanguageInternal(e) {
    const t = this._languageService.getLanguageIdByLanguageName(e);
    if (t !== null) {
      if (this._textModel) {
        const i = this._languageService.createById(t);
        this._textModel.setLanguage(i.languageId);
      }
      if (this._language !== e) {
        this._language = e;
        this._hash = null;
        this._onDidChangeLanguage.fire(e);
        this._onDidChangeContent.fire("language");
      }
    }
  }
  resetTextBuffer(e) {
    this._textBuffer = e;
  }
  getValue() {
    const e = this.getFullModelRange();
    if (this.textBuffer.getEOL() === `
`) {
      return this.textBuffer.getValueInRange(e, 1);
    } else {
      return this.textBuffer.getValueInRange(e, 2);
    }
  }
  getTextBufferHash() {
    if (this._textBufferHash !== null) {
      return this._textBufferHash;
    }
    const e = new yde();
    const t = this.textBuffer.createSnapshot(false);
    let i;
    while (i = t.read()) {
      e.update(i);
    }
    this._textBufferHash = e.digest();
    return this._textBufferHash;
  }
  getHashValue() {
    if (this._hash !== null) {
      return this._hash;
    } else {
      this._hash = VC([VC(this.language), this.getTextBufferHash(), this._getPersisentMetadata(), this.transientOptions.transientOutputs ? [] : this._outputs.map(e => ({
        outputs: e.outputs.map(t => ({
          mime: t.mime,
          data: Array.from(t.data.buffer)
        })),
        metadata: e.metadata
      }))]);
      return this._hash;
    }
  }
  _getPersisentMetadata() {
    return CEt(this.transientOptions.transientCellMetadata, this.metadata, this.language);
  }
  getTextLength() {
    return this.textBuffer.getLength();
  }
  getFullModelRange() {
    const e = this.textBuffer.getLineCount();
    return new Zt(1, 1, e, this.textBuffer.getLineLength(e) + 1);
  }
  spliceNotebookCellOutputs(e) {
    if (e.deleteCount > 0 && e.newOutputs.length > 0) {
      const t = Math.min(e.deleteCount, e.newOutputs.length);
      for (let r = 0; r < t; r++) {
        const s = this.outputs[e.start + r];
        const o = e.newOutputs[r];
        this.replaceOutput(s.outputId, o);
      }
      this.outputs.splice(e.start + t, e.deleteCount - t, ...e.newOutputs.slice(t)).forEach(r => r.dispose());
      this._onDidChangeOutputs.fire({
        start: e.start + t,
        deleteCount: e.deleteCount - t,
        newOutputs: e.newOutputs.slice(t)
      });
    } else {
      this.outputs.splice(e.start, e.deleteCount, ...e.newOutputs).forEach(i => i.dispose());
      this._onDidChangeOutputs.fire(e);
    }
  }
  replaceOutput(e, t) {
    const i = this.outputs.findIndex(s => s.outputId === e);
    if (i < 0) {
      return false;
    } else {
      this.outputs[i].replaceData({
        outputs: t.outputs,
        outputId: t.outputId,
        metadata: t.metadata
      });
      t.dispose();
      this._onDidChangeOutputItems.fire();
      return true;
    }
  }
  changeOutputItems(e, t, i) {
    const r = this.outputs.findIndex(o => o.outputId === e);
    if (r < 0) {
      return false;
    }
    const s = this.outputs[r];
    if (t) {
      s.appendData(i);
    } else {
      s.replaceData({
        outputId: e,
        outputs: i,
        metadata: s.metadata
      });
    }
    this._onDidChangeOutputItems.fire();
    return true;
  }
  _outputNotEqualFastCheck(e, t) {
    if (e.length !== t.length) {
      return false;
    }
    for (let i = 0; i < this.outputs.length; i++) {
      const r = e[i];
      const s = t[i];
      if (r.outputs.length !== s.outputs.length) {
        return false;
      }
      for (let o = 0; o < r.outputs.length; o++) {
        if (r.outputs[o].mime !== s.outputs[o].mime || r.outputs[o].data.byteLength !== s.outputs[o].data.byteLength) {
          return false;
        }
      }
    }
    return true;
  }
  equal(e) {
    if (this.language !== e.language || this.outputs.length !== e.outputs.length || this.getTextLength() !== e.getTextLength() || !this.transientOptions.transientOutputs && !this._outputNotEqualFastCheck(this.outputs, e.outputs)) {
      return false;
    } else {
      return this.getHashValue() === e.getHashValue();
    }
  }
  fastEqual(e, t) {
    if (this.language !== e.language || this.mime !== e.mime || this.cellKind !== e.cellKind || !t && (this.internalMetadata?.executionOrder !== e.internalMetadata?.executionOrder || this.internalMetadata?.lastRunSuccess !== e.internalMetadata?.lastRunSuccess || this.internalMetadata?.runStartTime !== e.internalMetadata?.runStartTime || this.internalMetadata?.runStartTimeAdjustment !== e.internalMetadata?.runStartTimeAdjustment || this.internalMetadata?.runEndTime !== e.internalMetadata?.runEndTime)) {
      return false;
    }
    if (this._textBuffer) {
      if (!Ycd.linesAreEqual(this.textBuffer.getLinesContent(), e.source)) {
        return false;
      }
    } else if (this._source !== e.source) {
      return false;
    }
    return true;
  }
  static linesAreEqual(e, t) {
    const i = Zv(t);
    if (e.length !== i.length) {
      return false;
    }
    for (let r = 0; r < e.length; r++) {
      if (e[r] !== i[r]) {
        return false;
      }
    }
    return true;
  }
  dispose() {
    Bo(this._outputs);
    const e = new bOo([], "", `
`, false, false, true, true);
    e.dispose();
    this._textBuffer = e;
    super.dispose();
  }
};

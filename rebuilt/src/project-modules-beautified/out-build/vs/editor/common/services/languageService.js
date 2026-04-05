"use strict";

// Module: out-build/vs/editor/common/services/languageService.js
// Offset: 30957957 (bundle byte offset)
// Size: 3904 bytes
yn();
rt();
Mry();
Tg();
WE();
Uc();
aTf = class Acd extends at {
  static {
    this.instanceCount = 0;
  }
  constructor(e = false) {
    super();
    this._onDidRequestBasicLanguageFeatures = this._register(new Qe());
    this.onDidRequestBasicLanguageFeatures = this._onDidRequestBasicLanguageFeatures.event;
    this._onDidRequestRichLanguageFeatures = this._register(new Qe());
    this.onDidRequestRichLanguageFeatures = this._onDidRequestRichLanguageFeatures.event;
    this._onDidChange = this._register(new Qe({
      leakWarningThreshold: 200
    }));
    this.onDidChange = this._onDidChange.event;
    this._requestedBasicLanguages = new Set();
    this._requestedRichLanguages = new Set();
    Acd.instanceCount++;
    this._registry = this._register(new oTf(true, e));
    this.languageIdCodec = this._registry.languageIdCodec;
    this._register(this._registry.onDidChange(() => this._onDidChange.fire()));
  }
  dispose() {
    Acd.instanceCount--;
    super.dispose();
  }
  registerLanguage(e) {
    return this._registry.registerLanguage(e);
  }
  isRegisteredLanguageId(e) {
    return this._registry.isRegisteredLanguageId(e);
  }
  getRegisteredLanguageIds() {
    return this._registry.getRegisteredLanguageIds();
  }
  getSortedRegisteredLanguageNames() {
    return this._registry.getSortedRegisteredLanguageNames();
  }
  getLanguageName(e) {
    return this._registry.getLanguageName(e);
  }
  getMimeType(e) {
    return this._registry.getMimeType(e);
  }
  getIcon(e) {
    return this._registry.getIcon(e);
  }
  getExtensions(e) {
    return this._registry.getExtensions(e);
  }
  getFilenames(e) {
    return this._registry.getFilenames(e);
  }
  getConfigurationFiles(e) {
    return this._registry.getConfigurationFiles(e);
  }
  getLanguageIdByLanguageName(e) {
    return this._registry.getLanguageIdByLanguageName(e);
  }
  getLanguageIdByMimeType(e) {
    return this._registry.getLanguageIdByMimeType(e);
  }
  guessLanguageIdByFilepathOrFirstLine(e, t) {
    return this._registry.guessLanguageIdByFilepathOrFirstLine(e, t).at(0) ?? null;
  }
  createById(e) {
    return new P_i(this.onDidChange, () => this._createAndGetLanguageIdentifier(e));
  }
  createByMimeType(e) {
    return new P_i(this.onDidChange, () => {
      const t = this.getLanguageIdByMimeType(e);
      return this._createAndGetLanguageIdentifier(t);
    });
  }
  createByFilepathOrFirstLine(e, t) {
    return new P_i(this.onDidChange, () => {
      const i = this.guessLanguageIdByFilepathOrFirstLine(e, t);
      return this._createAndGetLanguageIdentifier(i);
    });
  }
  createByLanguageNameOrFilepathOrFirstLine(e, t, i) {
    return new P_i(this.onDidChange, () => {
      let r = null;
      if (e) {
        r = this.getLanguageIdByLanguageName(e);
      }
      r ||= this.guessLanguageIdByFilepathOrFirstLine(t, i);
      return this._createAndGetLanguageIdentifier(r);
    });
  }
  _createAndGetLanguageIdentifier(e) {
    if (!e || !this.isRegisteredLanguageId(e)) {
      e = o_;
    }
    return e;
  }
  requestBasicLanguageFeatures(e) {
    if (!this._requestedBasicLanguages.has(e)) {
      this._requestedBasicLanguages.add(e);
      this._onDidRequestBasicLanguageFeatures.fire(e);
    }
  }
  requestRichLanguageFeatures(e) {
    if (!this._requestedRichLanguages.has(e)) {
      this._requestedRichLanguages.add(e);
      this.requestBasicLanguageFeatures(e);
      pT.getOrCreate(e);
      this._onDidRequestRichLanguageFeatures.fire(e);
    }
  }
};
P_i = class {
  constructor(n, e) {
    this._value = tp(this, n, () => e());
    this.onDidChange = In.fromObservable(this._value);
  }
  get languageId() {
    return this._value.get();
  }
};

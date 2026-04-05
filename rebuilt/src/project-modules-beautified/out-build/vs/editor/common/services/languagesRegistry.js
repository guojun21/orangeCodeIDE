"use strict";

// Module: out-build/vs/editor/common/services/languagesRegistry.js
// Offset: 30953199 (bundle byte offset)
// Size: 4758 bytes
yn();
rt();
oa();
R_i();
WE();
Mp();
Ws();
Qye = Object.prototype.hasOwnProperty;
jpu = "vs.editor.nullLanguage";
sTf = class {
  constructor() {
    this._languageIdToLanguage = [];
    this._languageToLanguageId = new Map();
    this._register(jpu, 0);
    this._register(o_, 1);
    this._nextLanguageId = 2;
  }
  _register(n, e) {
    this._languageIdToLanguage[e] = n;
    this._languageToLanguageId.set(n, e);
  }
  register(n) {
    if (this._languageToLanguageId.has(n)) {
      return;
    }
    const e = this._nextLanguageId++;
    this._register(n, e);
  }
  encodeLanguageId(n) {
    return this._languageToLanguageId.get(n) || 0;
  }
  decodeLanguageId(n) {
    return this._languageIdToLanguage[n] || jpu;
  }
};
oTf = class vcd extends at {
  static {
    this.instanceCount = 0;
  }
  constructor(e = true, t = false) {
    super();
    this._onDidChange = this._register(new Qe());
    this.onDidChange = this._onDidChange.event;
    vcd.instanceCount++;
    this._warnOnOverwrite = t;
    this.languageIdCodec = new sTf();
    this._dynamicLanguages = [];
    this._languages = {};
    this._mimeTypesMap = {};
    this._nameMap = {};
    this._lowercaseNameMap = {};
    if (e) {
      this._initializeFromRegistry();
      this._register(zBe.onDidChangeLanguages(i => {
        this._initializeFromRegistry();
      }));
    }
  }
  dispose() {
    vcd.instanceCount--;
    super.dispose();
  }
  setDynamicLanguages(e) {
    this._dynamicLanguages = e;
    this._initializeFromRegistry();
  }
  _initializeFromRegistry() {
    this._languages = {};
    this._mimeTypesMap = {};
    this._nameMap = {};
    this._lowercaseNameMap = {};
    Rry();
    const e = [].concat(zBe.getLanguages()).concat(this._dynamicLanguages);
    this._registerLanguages(e);
  }
  registerLanguage(e) {
    return zBe.registerLanguage(e);
  }
  _registerLanguages(e) {
    for (const t of e) {
      this._registerLanguage(t);
    }
    this._mimeTypesMap = {};
    this._nameMap = {};
    this._lowercaseNameMap = {};
    Object.keys(this._languages).forEach(t => {
      const i = this._languages[t];
      if (i.name) {
        this._nameMap[i.name] = i.identifier;
      }
      i.aliases.forEach(r => {
        this._lowercaseNameMap[r.toLowerCase()] = i.identifier;
      });
      i.mimetypes.forEach(r => {
        this._mimeTypesMap[r] = i.identifier;
      });
    });
    Di.as(Dh.Configuration).registerOverrideIdentifiers(this.getRegisteredLanguageIds());
    this._onDidChange.fire();
  }
  _registerLanguage(e) {
    const t = e.id;
    let i;
    if (Qye.call(this._languages, t)) {
      i = this._languages[t];
    } else {
      this.languageIdCodec.register(t);
      i = {
        identifier: t,
        name: null,
        mimetypes: [],
        aliases: [],
        extensions: [],
        filenames: [],
        configurationFiles: [],
        icons: []
      };
      this._languages[t] = i;
    }
    this._mergeLanguage(i, e);
  }
  _mergeLanguage(e, t) {
    const i = t.id;
    let r = null;
    if (Array.isArray(t.mimetypes) && t.mimetypes.length > 0) {
      e.mimetypes.push(...t.mimetypes);
      r = t.mimetypes[0];
    }
    if (!r) {
      r = `text/x-${i}`;
      e.mimetypes.push(r);
    }
    if (Array.isArray(t.extensions)) {
      if (t.configuration) {
        e.extensions = t.extensions.concat(e.extensions);
      } else {
        e.extensions = e.extensions.concat(t.extensions);
      }
      for (const a of t.extensions) {
        kCa({
          id: i,
          mime: r,
          extension: a
        }, this._warnOnOverwrite);
      }
    }
    if (Array.isArray(t.filenames)) {
      for (const a of t.filenames) {
        kCa({
          id: i,
          mime: r,
          filename: a
        }, this._warnOnOverwrite);
        e.filenames.push(a);
      }
    }
    if (Array.isArray(t.filenamePatterns)) {
      for (const a of t.filenamePatterns) {
        kCa({
          id: i,
          mime: r,
          filepattern: a
        }, this._warnOnOverwrite);
      }
    }
    if (typeof t.firstLine == "string" && t.firstLine.length > 0) {
      let a = t.firstLine;
      if (a.charAt(0) !== "^") {
        a = "^" + a;
      }
      try {
        const l = new RegExp(a);
        if (!DtA(l)) {
          kCa({
            id: i,
            mime: r,
            firstline: l
          }, this._warnOnOverwrite);
        }
      } catch (l) {
        console.warn(`[${t.id}]: Invalid regular expression \`${a}\`: `, l);
      }
    }
    e.aliases.push(i);
    let s = null;
    if (typeof t.aliases !== "undefined" && Array.isArray(t.aliases)) {
      if (t.aliases.length === 0) {
        s = [null];
      } else {
        s = t.aliases;
      }
    }
    if (s !== null) {
      for (const a of s) {
        if (!!a && a.length !== 0) {
          e.aliases.push(a);
        }
      }
    }
    const o = s !== null && s.length > 0;
    if (!o || s[0] !== null) {
      const a = (o ? s[0] : null) || i;
      if (o || !e.name) {
        e.name = a;
      }
    }
    if (t.configuration) {
      e.configurationFiles.push(t.configuration);
    }
    if (t.icon) {
      e.icons.push(t.icon);
    }
  }
  isRegisteredLanguageId(e) {
    if (e) {
      return Qye.call(this._languages, e);
    } else {
      return false;
    }
  }
  getRegisteredLanguageIds() {
    return Object.keys(this._languages);
  }
  getSortedRegisteredLanguageNames() {
    const e = [];
    for (const t in this._nameMap) {
      if (Qye.call(this._nameMap, t)) {
        e.push({
          languageName: t,
          languageId: this._nameMap[t]
        });
      }
    }
    e.sort((t, i) => Tbe(t.languageName, i.languageName));
    return e;
  }
  getLanguageName(e) {
    if (Qye.call(this._languages, e)) {
      return this._languages[e].name;
    } else {
      return null;
    }
  }
  getMimeType(e) {
    return Qye.call(this._languages, e) && this._languages[e].mimetypes[0] || null;
  }
  getExtensions(e) {
    if (Qye.call(this._languages, e)) {
      return this._languages[e].extensions;
    } else {
      return [];
    }
  }
  getFilenames(e) {
    if (Qye.call(this._languages, e)) {
      return this._languages[e].filenames;
    } else {
      return [];
    }
  }
  getIcon(e) {
    return Qye.call(this._languages, e) && this._languages[e].icons[0] || null;
  }
  getConfigurationFiles(e) {
    if (Qye.call(this._languages, e)) {
      return this._languages[e].configurationFiles || [];
    } else {
      return [];
    }
  }
  getLanguageIdByLanguageName(e) {
    const t = e.toLowerCase();
    if (Qye.call(this._lowercaseNameMap, t)) {
      return this._lowercaseNameMap[t];
    } else {
      return null;
    }
  }
  getLanguageIdByMimeType(e) {
    if (e && Qye.call(this._mimeTypesMap, e)) {
      return this._mimeTypesMap[e];
    } else {
      return null;
    }
  }
  guessLanguageIdByFilepathOrFirstLine(e, t) {
    if (!e && !t) {
      return [];
    } else {
      return Lry(e, t);
    }
  }
};

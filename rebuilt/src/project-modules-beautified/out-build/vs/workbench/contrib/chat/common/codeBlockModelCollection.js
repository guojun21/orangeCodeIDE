"use strict";

// Module: out-build/vs/workbench/contrib/chat/common/codeBlockModelCollection.js
// Offset: 30877235 (bundle byte offset)
// Size: 2851 bytes
Ef();
rt();
zr();
Yn();
ts();
Ku();
td();
iAa();
Wq();
T_i = class extends at {
  constructor(e, t, i) {
    super();
    this.tag = e;
    this.languageService = t;
    this.textModelService = i;
    this._models = new Map();
    this.maxModelCount = 100;
  }
  dispose() {
    super.dispose();
    this.clear();
  }
  get(e, t, i) {
    const r = this._models.get(this.getKey(e, t, i));
    if (r) {
      return {
        model: r.model.then(s => s.object.textEditorModel),
        vulns: r.vulns,
        codemapperUri: r.codemapperUri,
        isEdit: r.isEdit
      };
    }
  }
  getOrCreate(e, t, i) {
    const r = this.get(e, t, i);
    if (r) {
      return r;
    }
    const s = this.getCodeBlockUri(e, t, i);
    const o = this.textModelService.createModelReference(s);
    for (this._models.set(this.getKey(e, t, i), {
      model: o,
      vulns: [],
      codemapperUri: undefined
    }); this._models.size > this.maxModelCount;) {
      const a = bl.first(this._models.keys());
      if (!a) {
        break;
      }
      this.delete(a);
    }
    return {
      model: o.then(a => a.object.textEditorModel),
      vulns: [],
      codemapperUri: undefined
    };
  }
  delete(e) {
    const t = this._models.get(e);
    if (t) {
      t.model.then(i => i.object.dispose());
      this._models.delete(e);
    }
  }
  clear() {
    this._models.forEach(async e => (await e.model).dispose());
    this._models.clear();
  }
  updateSync(e, t, i, r) {
    const s = this.getOrCreate(e, t, i);
    const o = ftf(r.text);
    const a = Rxf(o.newText, r.languageId);
    this.setVulns(e, t, i, o.vulnerabilities);
    const l = gtf(a);
    if (l) {
      this.setCodemapperUri(e, t, i, l.uri, l.isEdit);
    }
    if (r.isComplete) {
      this.markCodeBlockCompleted(e, t, i);
    }
    return this.get(e, t, i) ?? s;
  }
  markCodeBlockCompleted(e, t, i) {
    this._models.get(this.getKey(e, t, i));
  }
  async update(e, t, i, r) {
    const s = this.getOrCreate(e, t, i);
    const o = ftf(r.text);
    let a = Rxf(o.newText, r.languageId);
    this.setVulns(e, t, i, o.vulnerabilities);
    const l = gtf(a);
    if (l) {
      this.setCodemapperUri(e, t, i, l.uri, l.isEdit);
      a = l.textWithoutResult;
    }
    if (r.isComplete) {
      this.markCodeBlockCompleted(e, t, i);
    }
    const u = await s.model;
    if (u.isDisposed()) {
      return s;
    }
    if (r.languageId) {
      const m = this.languageService.getLanguageIdByLanguageName(r.languageId);
      if (m && m !== u.getLanguageId()) {
        u.setLanguage(m);
      }
    }
    const d = u.getValue(1);
    if (a === d) {
      return s;
    }
    if (a.startsWith(d)) {
      const m = a.slice(d.length);
      const p = u.getLineCount();
      const g = u.getLineMaxColumn(p);
      u.applyEdits([{
        range: new Zt(p, g, p, g),
        text: m
      }]);
    } else {
      u.setValue(a);
    }
    return s;
  }
  setCodemapperUri(e, t, i, r, s) {
    const o = this._models.get(this.getKey(e, t, i));
    if (o) {
      o.codemapperUri = r;
      o.isEdit = s;
    }
  }
  setVulns(e, t, i, r) {
    const s = this._models.get(this.getKey(e, t, i));
    if (s) {
      s.vulns = r;
    }
  }
  getKey(e, t, i) {
    return `${e}/${t.id}/${i}`;
  }
  getCodeBlockUri(e, t, i) {
    const r = this.getUriMetaData(t);
    const s = this.tag ? `${this.tag}-${i}` : `${i}`;
    return je.from({
      scheme: _n.vscodeChatCodeBlock,
      authority: e,
      path: `/${t.id}/${s}`,
      fragment: r ? JSON.stringify(r) : undefined
    });
  }
  getUriMetaData(e) {
    if (rA(e)) {
      return {
        references: e.contentReferences.map(t => {
          if (typeof t.reference == "string") {
            return;
          }
          const i = "variableName" in t.reference ? t.reference.value : t.reference;
          if (i) {
            if (je.isUri(i)) {
              return {
                uri: i.toJSON()
              };
            } else {
              return {
                uri: i.uri.toJSON(),
                range: i.range
              };
            }
          }
        })
      };
    }
  }
};
T_i = __decorate([__param(1, Jl), __param(2, El)], T_i);

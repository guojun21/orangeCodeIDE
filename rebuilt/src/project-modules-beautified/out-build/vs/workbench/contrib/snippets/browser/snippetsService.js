"use strict";

// Module: out-build/vs/workbench/contrib/snippets/browser/snippetsService.js
// Offset: 30974779 (bundle byte offset)
// Size: 7326 bytes
rt();
Yr();
oa();
Ku();
pme();
Ht();
qg();
ns();
Op();
jr();
ps();
Hpu();
xI();
DCa();
uTf();
vit();
cu();
kr();
Js();
Wt();
Ff();
QE();
Kw();
Vs();
(function (n) {
  function e(t, i, r) {
    if (E6(i.path)) {
      t.collector.error(_(10888, null, t.description.name, String(i.path)));
      return null;
    }
    if (E6(i.language) && !i.path.endsWith(".code-snippets")) {
      t.collector.error(_(10889, null, t.description.name, String(i.path)));
      return null;
    }
    if (!E6(i.language) && !r.isRegisteredLanguageId(i.language)) {
      t.collector.error(_(10890, null, t.description.name, String(i.language)));
      return null;
    }
    const s = t.description.extensionLocation;
    const o = Wo(s, i.path);
    if (f9(o, s)) {
      return {
        language: i.language,
        location: o
      };
    } else {
      t.collector.error(_(10891, null, t.description.name, o.path, s.path));
      return null;
    }
  }
  n.toValidSnippet = e;
  n.snippetsContribution = {
    description: _(10892, null),
    type: "array",
    defaultSnippets: [{
      body: [{
        language: "",
        path: ""
      }]
    }],
    items: {
      type: "object",
      defaultSnippets: [{
        body: {
          language: "${1:id}",
          path: "./snippets/${2:id}.json."
        }
      }],
      properties: {
        language: {
          description: _(10893, null),
          type: "string"
        },
        path: {
          description: _(10894, null),
          type: "string"
        }
      }
    }
  };
  n.point = K0.registerExtensionPoint({
    extensionPoint: "snippets",
    deps: [v1t],
    jsonSchema: n.snippetsContribution
  });
})(LCa ||= {});
NCa = class {
  static {
    RCa = this;
  }
  static {
    this._key = "snippets.ignoredSnippets";
  }
  constructor(e) {
    this._storageService = e;
    const t = e.get(RCa._key, 0, "");
    let i;
    try {
      i = JSON.parse(t);
    } catch {}
    this._ignored = kBe(i) ? new Set(i) : new Set();
  }
  isIgnored(e) {
    return this._ignored.has(e);
  }
  updateIgnored(e, t) {
    let i = false;
    if (this._ignored.has(e) && !t) {
      this._ignored.delete(e);
      i = true;
    } else if (!this._ignored.has(e) && t) {
      this._ignored.add(e);
      i = true;
    }
    if (i) {
      this._storageService.store(RCa._key, JSON.stringify(Array.from(this._ignored)), 0, 0);
    }
  }
};
NCa = RCa = __decorate([__param(0, Hi)], NCa);
MCa = class {
  static {
    PCa = this;
  }
  static {
    this._key = "snippets.usageTimestamps";
  }
  constructor(e) {
    this._storageService = e;
    const t = e.get(PCa._key, 0, "");
    let i;
    try {
      i = JSON.parse(t);
    } catch {
      i = [];
    }
    this._usages = Array.isArray(i) ? new Map(i) : new Map();
  }
  getUsageTimestamp(e) {
    return this._usages.get(e);
  }
  updateUsageTimestamp(e) {
    this._usages.delete(e);
    this._usages.set(e, Date.now());
    const t = [...this._usages].slice(-100);
    this._storageService.store(PCa._key, JSON.stringify(t), 0, 0);
  }
};
MCa = PCa = __decorate([__param(0, Hi)], MCa);
FCa = class {
  constructor(e, t, i, r, s, o, a, l, u, d, m) {
    this._environmentService = e;
    this._userDataProfileService = t;
    this._contextService = i;
    this._languageService = r;
    this._logService = s;
    this._fileService = o;
    this._textfileService = a;
    this._extensionResourceLoaderService = l;
    this._disposables = new Ut();
    this._pendingWork = [];
    this._files = new fu();
    this._pendingWork.push(Promise.resolve(u.when(3).then(() => {
      this._initExtensionSnippets();
      this._initUserSnippets();
      this._initWorkspaceSnippets();
    })));
    tSA(new BCa(this._languageService, this, m));
    this._enablement = d.createInstance(NCa);
    this._usageTimestamps = d.createInstance(MCa);
  }
  dispose() {
    this._disposables.dispose();
  }
  isEnabled(e) {
    return !this._enablement.isIgnored(e.snippetIdentifier);
  }
  updateEnablement(e, t) {
    this._enablement.updateIgnored(e.snippetIdentifier, !t);
  }
  updateUsageTimestamp(e) {
    this._usageTimestamps.updateUsageTimestamp(e.snippetIdentifier);
  }
  _joinSnippets() {
    const e = this._pendingWork.slice(0);
    this._pendingWork.length = 0;
    return Promise.all(e);
  }
  async getSnippetFiles() {
    await this._joinSnippets();
    return this._files.values();
  }
  async getSnippets(e, t) {
    await this._joinSnippets();
    const i = [];
    const r = [];
    if (e) {
      if (this._languageService.isRegisteredLanguageId(e)) {
        for (const s of this._files.values()) {
          r.push(s.load().then(o => o.select(e, i)).catch(o => this._logService.error(o, s.location.toString())));
        }
      }
    } else {
      for (const s of this._files.values()) {
        r.push(s.load().then(o => NMo(i, i.length, o.data)).catch(o => this._logService.error(o, s.location.toString())));
      }
    }
    await Promise.all(r);
    return this._filterAndSortSnippets(i, t);
  }
  getSnippetsSync(e, t) {
    const i = [];
    if (this._languageService.isRegisteredLanguageId(e)) {
      for (const r of this._files.values()) {
        r.load().catch(s => {});
        r.select(e, i);
      }
    }
    return this._filterAndSortSnippets(i, t);
  }
  _filterAndSortSnippets(e, t) {
    const i = [];
    for (const r of e) {
      if ((!!r.prefix || !!t?.includeNoPrefixSnippets) && (!!this.isEnabled(r) || !!t?.includeDisabledSnippets) && (typeof t?.fileTemplateSnippets != "boolean" || t.fileTemplateSnippets === r.isFileTemplate)) {
        i.push(r);
      }
    }
    return i.sort((r, s) => {
      let o = 0;
      if (!t?.noRecencySort) {
        const a = this._usageTimestamps.getUsageTimestamp(r.snippetIdentifier) ?? -1;
        o = (this._usageTimestamps.getUsageTimestamp(s.snippetIdentifier) ?? -1) - a;
      }
      if (o === 0) {
        o = this._compareSnippet(r, s);
      }
      return o;
    });
  }
  _compareSnippet(e, t) {
    if (e.snippetSource < t.snippetSource) {
      return -1;
    } else if (e.snippetSource > t.snippetSource) {
      return 1;
    } else if (e.source < t.source) {
      return -1;
    } else if (e.source > t.source || e.name > t.name) {
      return 1;
    } else if (e.name < t.name) {
      return -1;
    } else {
      return 0;
    }
  }
  _initExtensionSnippets() {
    LCa.point.setHandler(e => {
      for (const [t, i] of this._files) {
        if (i.source === 3) {
          this._files.delete(t);
        }
      }
      for (const t of e) {
        for (const i of t.value) {
          const r = LCa.toValidSnippet(t, i, this._languageService);
          if (!r) {
            continue;
          }
          const s = this._files.get(r.location);
          if (s) {
            if (s.defaultScopes) {
              s.defaultScopes.push(r.language);
            } else {
              s.defaultScopes = [];
            }
          } else {
            const o = new _Ca(3, r.location, r.language ? [r.language] : undefined, t.description, this._fileService, this._extensionResourceLoaderService);
            this._files.set(o.location, o);
            if (this._environmentService.isExtensionDevelopment) {
              o.load().then(a => {
                if (a.data.some(l => l.isBogous)) {
                  t.collector.warn(_(10895, null, t.description.name));
                }
              }, a => {
                t.collector.warn(_(10896, null, o.location.toString()));
              });
            }
          }
        }
      }
    });
  }
  _initWorkspaceSnippets() {
    const e = new Ut();
    const t = () => {
      e.clear();
      this._pendingWork.push(this._initWorkspaceFolderSnippets(this._contextService.getWorkspace(), e));
    };
    this._disposables.add(e);
    this._disposables.add(this._contextService.onDidChangeWorkspaceFolders(t));
    this._disposables.add(this._contextService.onDidChangeWorkbenchState(t));
    t();
  }
  async _initWorkspaceFolderSnippets(e, t) {
    const i = e.folders.map(async r => {
      const s = r.toResource(".vscode");
      if (await this._fileService.exists(s)) {
        this._initFolderSnippets(2, s, t);
      } else {
        t.add(this._fileService.onDidFilesChange(a => {
          if (a.contains(s, 1)) {
            this._initFolderSnippets(2, s, t);
          }
        }));
      }
    });
    await Promise.all(i);
  }
  async _initUserSnippets() {
    const e = new Ut();
    const t = async () => {
      e.clear();
      const i = this._userDataProfileService.currentProfile.snippetsHome;
      await this._fileService.createFolder(i);
      await this._initFolderSnippets(1, i, e);
    };
    this._disposables.add(e);
    this._disposables.add(this._userDataProfileService.onDidChangeCurrentProfile(i => i.join((async () => {
      this._pendingWork.push(t());
    })())));
    await t();
  }
  _initFolderSnippets(e, t, i) {
    const r = new Ut();
    const s = async () => {
      r.clear();
      if (await this._fileService.exists(t)) {
        try {
          const o = await this._fileService.resolve(t);
          for (const a of o.children || []) {
            r.add(this._addSnippetFile(a.resource, e));
          }
        } catch (o) {
          this._logService.error(`Failed snippets from folder '${t.toString()}'`, o);
        }
      }
    };
    i.add(this._textfileService.files.onDidSave(o => {
      if (f9(o.model.resource, t)) {
        s();
      }
    }));
    i.add(Ory(this._fileService, t, s));
    i.add(r);
    return s();
  }
  _addSnippetFile(e, t) {
    const i = hk(e);
    if (t === 1 && i === ".json") {
      const r = ca(e).replace(/\.json/, "");
      this._files.set(e, new _Ca(t, e, [r], undefined, this._fileService, this._extensionResourceLoaderService));
    } else if (i === ".code-snippets") {
      this._files.set(e, new _Ca(t, e, undefined, undefined, this._fileService, this._extensionResourceLoaderService));
    }
    return {
      dispose: () => this._files.delete(e)
    };
  }
};
FCa = __decorate([__param(0, lg), __param(1, Py), __param(2, Lr), __param(3, Jl), __param(4, Rr), __param(5, Gr), __param(6, Gg), __param(7, NMe), __param(8, ap), __param(9, ln), __param(10, JS)], FCa);

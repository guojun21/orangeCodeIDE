"use strict";

// Module: out-build/vs/workbench/contrib/snippets/browser/snippetsFile.js
// Offset: 30917056 (bundle byte offset)
// Size: 3639 bytes
aB();
Ht();
Hl();
Vde();
UAg();
Yr();
Js();
Ef();
ri();
zxf = class {
  constructor(n) {
    this.isBogous = false;
    this.isTrivial = false;
    this.usesClipboardVariable = false;
    this.usesSelectionVariable = false;
    this.codeSnippet = n;
    const e = new Ute().parse(n, false);
    const t = new Map();
    let i = 0;
    for (const s of e.placeholders) {
      i = Math.max(i, s.index);
    }
    if (e.placeholders.length === 0) {
      this.isTrivial = true;
    } else if (i === 0) {
      const s = e.children.at(-1);
      this.isTrivial = s instanceof Zoe && s.isFinalTabstop;
    }
    const r = [...e.children];
    while (r.length > 0) {
      const s = r.shift();
      if (s instanceof j3n) {
        if (s.children.length === 0 && !OAg[s.name]) {
          const o = t.has(s.name) ? t.get(s.name) : ++i;
          t.set(s.name, o);
          const a = new Zoe(o).appendChild(new gz(s.name));
          e.replace(s, [a]);
          this.isBogous = true;
        }
        switch (s.name) {
          case "CLIPBOARD":
            this.usesClipboardVariable = true;
            break;
          case "SELECTION":
          case "TM_SELECTED_TEXT":
            this.usesSelectionVariable = true;
            break;
        }
      } else {
        r.push(...s.children);
      }
    }
    if (this.isBogous) {
      this.codeSnippet = e.toTextmateString();
    }
  }
};
wCa = class {
  constructor(n, e, t, i, r, s, o, a, l, u) {
    this.isFileTemplate = n;
    this.scopes = e;
    this.name = t;
    this.prefix = i;
    this.description = r;
    this.body = s;
    this.source = o;
    this.snippetSource = a;
    this.snippetIdentifier = l;
    this.extensionId = u;
    this.prefixLow = i.toLowerCase();
    this._bodyInsights = new T5e($c(), () => new zxf(this.body));
  }
  get codeSnippet() {
    return this._bodyInsights.value.codeSnippet;
  }
  get isBogous() {
    return this._bodyInsights.value.isBogous;
  }
  get isTrivial() {
    return this._bodyInsights.value.isTrivial;
  }
  get needsClipboard() {
    return this._bodyInsights.value.usesClipboardVariable;
  }
  get usesSelection() {
    return this._bodyInsights.value.usesSelectionVariable;
  }
};
(function (n) {
  n[n.User = 1] = "User";
  n[n.Workspace = 2] = "Workspace";
  n[n.Extension = 3] = "Extension";
})(Vxf ||= {});
_Ca = class {
  constructor(n, e, t, i, r, s) {
    this.source = n;
    this.location = e;
    this.defaultScopes = t;
    this._extension = i;
    this._fileService = r;
    this._extensionResourceLoaderService = s;
    this.data = [];
    this.isGlobalSnippets = QD(e.path) === ".code-snippets";
    this.isUserSnippets = !this._extension;
  }
  select(n, e) {
    if (this.isGlobalSnippets || !this.isUserSnippets) {
      this._scopeSelect(n, e);
    } else {
      this._filepathSelect(n, e);
    }
  }
  _filepathSelect(n, e) {
    if (n + ".json" === fd(this.location.path)) {
      e.push(...this.data);
    }
  }
  _scopeSelect(n, e) {
    for (const i of this.data) {
      const r = i.scopes.length;
      if (r === 0) {
        e.push(i);
      } else {
        for (let s = 0; s < r; s++) {
          if (i.scopes[s] === n) {
            e.push(i);
            break;
          }
        }
      }
    }
    const t = n.lastIndexOf(".");
    if (t >= 0) {
      this._scopeSelect(n.substring(0, t), e);
    }
  }
  async _load() {
    if (this._extension) {
      return this._extensionResourceLoaderService.readExtensionResource(this.location);
    } else {
      return (await this._fileService.readFile(this.location)).value.toString();
    }
  }
  load() {
    this._loadPromise ||= Promise.resolve(this._load()).then(n => {
      const e = L1(n);
      if (SEe(e) === "object") {
        for (const [t, i] of Object.entries(e)) {
          if (Iry(i)) {
            this._parseSnippet(t, i, this.data);
          } else {
            for (const [r, s] of Object.entries(i)) {
              this._parseSnippet(r, s, this.data);
            }
          }
        }
      }
      return this;
    });
    return this._loadPromise;
  }
  reset() {
    this._loadPromise = undefined;
    this.data.length = 0;
  }
  _parseSnippet(n, e, t) {
    let {
      isFileTemplate: i,
      prefix: r,
      body: s,
      description: o
    } = e;
    r ||= "";
    if (Array.isArray(s)) {
      s = s.join(`
`);
    }
    if (typeof s != "string") {
      return;
    }
    if (Array.isArray(o)) {
      o = o.join(`
`);
    }
    let a;
    if (this.defaultScopes) {
      a = this.defaultScopes;
    } else if (typeof e.scope == "string") {
      a = e.scope.split(",").map(u => u.trim()).filter(Boolean);
    } else {
      a = [];
    }
    let l;
    if (this._extension) {
      l = this._extension.displayName || this._extension.name;
    } else if (this.source === 2) {
      l = _(10885, null);
    } else if (this.isGlobalSnippets) {
      l = _(10886, null);
    } else {
      l = _(10887, null);
    }
    for (const u of bl.wrap(r)) {
      t.push(new wCa(!!i, a, n, u, o, s, l, this.source, this._extension ? `${eN(this._extension.extensionLocation, this.location)}/${n}` : `${fd(this.location.path)}/${n}`, this._extension?.identifier));
    }
  }
};

"use strict";

// Module: out-build/vs/workbench/common/resources.js
// Offset: 28018245 (bundle byte offset)
// Size: 2968 bytes
Yn();
np();
Hl();
yn();
Yr();
rt();
iR();
ps();
Ei();
zr();
cu();
d2();
ikt = class extends at {
  static {
    jNe = this;
  }
  static {
    this.NO_FOLDER = null;
  }
  constructor(e, t, i, r) {
    super();
    this.getExpression = e;
    this.shouldUpdate = t;
    this.contextService = i;
    this.configurationService = r;
    this._onExpressionChange = this._register(new Qe());
    this.onExpressionChange = this._onExpressionChange.event;
    this.mapFolderToParsedExpression = new Map();
    this.mapFolderToConfiguredExpression = new Map();
    this.updateExpressions(false);
    this.registerListeners();
  }
  registerListeners() {
    this._register(this.configurationService.onDidChangeConfiguration(e => {
      if (this.shouldUpdate(e)) {
        this.updateExpressions(true);
      }
    }));
    this._register(this.contextService.onDidChangeWorkspaceFolders(() => this.updateExpressions(true)));
  }
  updateExpressions(e) {
    let t = false;
    for (const o of this.contextService.getWorkspace().folders) {
      const a = o.uri.toString();
      const l = this.doGetExpression(o.uri);
      const u = this.mapFolderToConfiguredExpression.get(a);
      if (l) {
        if (!u || !fv(u.expression, l.expression)) {
          t = true;
          this.mapFolderToParsedExpression.set(a, jae(l.expression));
          this.mapFolderToConfiguredExpression.set(a, l);
        }
      } else if (u) {
        t = true;
        this.mapFolderToParsedExpression.delete(a);
        this.mapFolderToConfiguredExpression.delete(a);
      }
    }
    const i = new lT(this.contextService.getWorkspace().folders.map(o => o.uri));
    for (const [o] of this.mapFolderToConfiguredExpression) {
      if (o !== jNe.NO_FOLDER) {
        if (!i.has(je.parse(o))) {
          this.mapFolderToParsedExpression.delete(o);
          this.mapFolderToConfiguredExpression.delete(o);
          t = true;
        }
      }
    }
    const r = this.doGetExpression(undefined);
    const s = this.mapFolderToConfiguredExpression.get(jNe.NO_FOLDER);
    if (r) {
      if (!s || !fv(s.expression, r.expression)) {
        t = true;
        this.mapFolderToParsedExpression.set(jNe.NO_FOLDER, jae(r.expression));
        this.mapFolderToConfiguredExpression.set(jNe.NO_FOLDER, r);
      }
    } else if (s) {
      t = true;
      this.mapFolderToParsedExpression.delete(jNe.NO_FOLDER);
      this.mapFolderToConfiguredExpression.delete(jNe.NO_FOLDER);
    }
    if (e && t) {
      this._onExpressionChange.fire();
    }
  }
  doGetExpression(e) {
    const t = this.getExpression(e);
    if (!t) {
      return;
    }
    const i = Object.keys(t);
    if (i.length === 0) {
      return;
    }
    let r = false;
    const s = Object.create(null);
    for (const o of i) {
      r ||= FR(o);
      let a = o;
      const l = tCc(a, true);
      if (l) {
        const u = l.toLowerCase();
        if (l !== l.toLowerCase()) {
          a = `${u}${a.substring(1)}`;
        }
      }
      s[a] = t[o];
    }
    return {
      expression: s,
      hasAbsolutePath: r
    };
  }
  matches(e, t) {
    if (this.mapFolderToParsedExpression.size === 0) {
      return false;
    }
    const i = this.contextService.getWorkspaceFolder(e);
    let r;
    let s;
    if (i && this.mapFolderToParsedExpression.has(i.uri.toString())) {
      r = this.mapFolderToParsedExpression.get(i.uri.toString());
      s = this.mapFolderToConfiguredExpression.get(i.uri.toString());
    } else {
      r = this.mapFolderToParsedExpression.get(jNe.NO_FOLDER);
      s = this.mapFolderToConfiguredExpression.get(jNe.NO_FOLDER);
    }
    if (!r) {
      return false;
    }
    let o;
    if (i) {
      o = eN(i.uri, e);
    } else {
      o = this.uriToPath(e);
    }
    if (typeof o == "string" && r(o, undefined, t)) {
      return true;
    } else if (o !== this.uriToPath(e) && s?.hasAbsolutePath) {
      return !!r(this.uriToPath(e), undefined, t);
    } else {
      return false;
    }
  }
  uriToPath(e) {
    if (e.scheme === _n.file) {
      return e.fsPath;
    } else {
      return e.path;
    }
  }
};
ikt = jNe = __decorate([__param(2, Lr), __param(3, Fn)], ikt);

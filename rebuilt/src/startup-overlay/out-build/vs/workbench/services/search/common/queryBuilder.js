"use strict";

// Module: out-build/vs/workbench/services/search/common/queryBuilder.js
// Offset: 28180293 (bundle byte offset)
// Size: 9605 bytes
Vs();
Ate();
iR();
iL();
cu();
zr();
Hl();
Yr();
oa();
Js();
Yn();
i9e();
Ht();
Ei();
jr();
_d();
ps();
od();
_g();
wE();
yV = class {
  constructor(e, t, i, r, s, o) {
    this.configurationService = e;
    this.workspaceContextService = t;
    this.editorGroupsService = i;
    this.logService = r;
    this.pathService = s;
    this.uriIdentityService = o;
  }
  aiText(e, t, i = {}) {
    return {
      ...this.commonQuery(t?.map(K4n), i),
      type: 3,
      contentPattern: e
    };
  }
  text(e, t, i = {}) {
    e = this.getContentPattern(e, i);
    const r = this.configurationService.getValue();
    const s = t && t.some(a => !this.configurationService.getValue({
      resource: a
    }).search.useRipgrep);
    return {
      ...this.commonQuery(t?.map(K4n), i),
      type: 2,
      contentPattern: e,
      previewOptions: i.previewOptions,
      maxFileSize: i.maxFileSize,
      usePCRE2: r.search.usePCRE2 || s || false,
      surroundingContext: i.surroundingContext,
      userDisabledExcludesAndIgnoreFiles: i.disregardExcludeSettings && i.disregardIgnoreFiles,
      useIndex: i.useIndex
    };
  }
  getContentPattern(e, t) {
    const i = this.configurationService.getValue();
    if (e.isRegExp) {
      e.pattern = e.pattern.replace(/\r?\n/g, "\\n");
    }
    const r = {
      ...e,
      wordSeparators: i.editor.wordSeparators
    };
    if (this.isCaseSensitive(e, t)) {
      r.isCaseSensitive = true;
    }
    if (this.isMultiline(e)) {
      r.isMultiline = true;
    }
    if (t.notebookSearchConfig?.includeMarkupInput) {
      r.notebookInfo ||= {};
      r.notebookInfo.isInNotebookMarkdownInput = t.notebookSearchConfig.includeMarkupInput;
    }
    if (t.notebookSearchConfig?.includeMarkupPreview) {
      r.notebookInfo ||= {};
      r.notebookInfo.isInNotebookMarkdownPreview = t.notebookSearchConfig.includeMarkupPreview;
    }
    if (t.notebookSearchConfig?.includeCodeInput) {
      r.notebookInfo ||= {};
      r.notebookInfo.isInNotebookCellInput = t.notebookSearchConfig.includeCodeInput;
    }
    if (t.notebookSearchConfig?.includeOutput) {
      r.notebookInfo ||= {};
      r.notebookInfo.isInNotebookCellOutput = t.notebookSearchConfig.includeOutput;
    }
    return r;
  }
  file(e, t = {}) {
    return {
      ...this.commonQuery(e, t),
      type: 1,
      filePattern: t.filePattern ? t.filePattern.trim() : t.filePattern,
      exists: t.exists,
      sortByScore: t.sortByScore,
      cacheKey: t.cacheKey,
      shouldGlobMatchFilePattern: t.shouldGlobSearch
    };
  }
  handleIncludeExclude(e, t) {
    if (!e) {
      return {};
    }
    if (Array.isArray(e)) {
      e = e.filter(i => i.length > 0).map(gva);
      if (!e.length) {
        return {};
      }
    } else {
      e = gva(e);
    }
    if (t) {
      return this.parseSearchPaths(e);
    } else {
      return {
        pattern: cau(...(Array.isArray(e) ? e : [e]))
      };
    }
  }
  commonQuery(e = [], t = {}) {
    let i = Array.isArray(t.excludePattern) ? t.excludePattern.map(d => d.pattern).flat() : t.excludePattern;
    i = i?.length === 1 ? i[0] : i;
    const r = this.handleIncludeExclude(t.includePattern, t.expandPatterns);
    const s = this.handleIncludeExclude(i, t.expandPatterns);
    const o = e.length > 1;
    const a = (r.searchPaths && r.searchPaths.length ? r.searchPaths.map(d => this.getFolderQueryForSearchPath(d, t, s)) : e.map(d => this.getFolderQueryForRoot(d, t, s, o))).filter(d => !!d);
    const l = {
      _reason: t._reason,
      folderQueries: a,
      usingSearchPaths: !!r.searchPaths && !!r.searchPaths.length,
      extraFileResources: t.extraFileResources,
      excludePattern: s.pattern,
      includePattern: r.pattern,
      onlyOpenEditors: t.onlyOpenEditors,
      maxResults: t.maxResults,
      onlyFileScheme: t.onlyFileScheme
    };
    if (t.onlyOpenEditors) {
      const d = lh(this.editorGroupsService.groups.flatMap(g => g.editors.map(f => f.resource)));
      this.logService.trace("QueryBuilder#commonQuery - openEditor URIs", JSON.stringify(d));
      const m = d.filter(g => WAi(l, g.fsPath));
      const p = this.commonQueryFromFileList(m);
      this.logService.trace("QueryBuilder#commonQuery - openEditor Query", JSON.stringify(p));
      return {
        ...l,
        ...p
      };
    }
    const u = t.extraFileResources && t.extraFileResources.filter(d => WAi(l, d.fsPath));
    l.extraFileResources = u && u.length ? u : undefined;
    return l;
  }
  commonQueryFromFileList(e) {
    const t = [];
    const i = new fu();
    const r = {};
    let s = false;
    e.forEach(o => {
      if (o.scheme === _n.walkThrough) {
        return;
      }
      if (yCc(o)) {
        const l = this.workspaceContextService.getWorkspaceFolder(o)?.uri ?? this.uriIdentityService.extUri.dirname(o);
        let u = i.get(l);
        if (!u) {
          s = true;
          u = {
            folder: l,
            includePattern: {}
          };
          t.push(u);
          i.set(l, u);
        }
        const d = DBe(l.fsPath, o.fsPath);
        ed(u.includePattern)[d.replace(/\\/g, "/")] = true;
      } else if (o.fsPath) {
        s = true;
        r[o.fsPath] = true;
      }
    });
    return {
      folderQueries: t,
      includePattern: r,
      usingSearchPaths: true,
      excludePattern: s ? undefined : {
        "**/*": true
      }
    };
  }
  isCaseSensitive(e, t) {
    if (t.isSmartCase) {
      if (e.isRegExp) {
        if (z0c(e.pattern, true)) {
          return true;
        }
      } else if (z0c(e.pattern)) {
        return true;
      }
    }
    return !!e.isCaseSensitive;
  }
  isMultiline(e) {
    if (e.isMultiline || e.isRegExp && YEc(e.pattern) || e.pattern.indexOf(`
`) >= 0) {
      return true;
    } else {
      return !!e.isMultiline;
    }
  }
  parseSearchPaths(e) {
    const t = m => FR(m) || /^\.\.?([\/\\]|$)/.test(m);
    const r = (Array.isArray(e) ? e : E9A(e)).map(m => {
      const p = this.pathService.resolvedUserHome;
      if (p) {
        return mBc(m, p.scheme === _n.file ? p.fsPath : p.path);
      } else {
        return m;
      }
    });
    const s = vze(r, m => t(m) ? "searchPaths" : "exprSegments");
    const o = (s.exprSegments || []).map(m => xH(m, "/")).map(m => xH(m, "\\")).map(m => {
      if (m[0] === ".") {
        m = "*" + m;
      }
      return x9A(m);
    });
    const a = {};
    const l = this.expandSearchPathPatterns(s.searchPaths || []);
    if (l && l.length) {
      a.searchPaths = l;
    }
    const u = o.flat();
    const d = cau(...u);
    if (d) {
      a.pattern = d;
    }
    return a;
  }
  getExcludesForFolder(e, t) {
    if (t.disregardExcludeSettings) {
      return undefined;
    } else {
      return GAi(e, !t.disregardSearchExcludeSettings);
    }
  }
  expandSearchPathPatterns(e) {
    if (!e || !e.length) {
      return [];
    }
    const t = e.flatMap(r => {
      let {
        pathPortion: s,
        globPortion: o
      } = k9A(r);
      o &&= lau(o);
      return this.expandOneSearchPath(s).flatMap(l => this.resolveOneSearchPathPattern(l, o));
    });
    const i = new Map();
    t.forEach(r => {
      const s = r.searchPath.toString();
      const o = i.get(s);
      if (o) {
        if (r.pattern) {
          o.pattern = o.pattern || {};
          o.pattern[r.pattern] = true;
        }
      } else {
        i.set(s, {
          searchPath: r.searchPath,
          pattern: r.pattern ? cau(r.pattern) : undefined
        });
      }
    });
    return Array.from(i.values());
  }
  expandOneSearchPath(e) {
    if (FR(e)) {
      const t = this.workspaceContextService.getWorkspace().folders;
      if (t[0] && t[0].uri.scheme !== _n.file) {
        return [{
          searchPath: t[0].uri.with({
            path: e
          })
        }];
      } else {
        return [{
          searchPath: je.file(k6(e))
        }];
      }
    }
    if (this.workspaceContextService.getWorkbenchState() === 2) {
      const t = this.workspaceContextService.getWorkspace().folders[0].uri;
      e = gva(e);
      if (e.startsWith("../") || e === "..") {
        const r = Rm.resolve(t.path, e);
        return [{
          searchPath: t.with({
            path: r
          })
        }];
      }
      const i = lau(e);
      return [{
        searchPath: t,
        pattern: i
      }];
    } else {
      if (e === "./" || e === ".\\") {
        return [];
      }
      {
        const t = e.replace(/^\.[\/\\]/, "");
        const r = this.workspaceContextService.getWorkspace().folders.map(s => {
          const o = t.match(new RegExp(`^${UI(s.name)}(?:/(.*)|$)`));
          if (o) {
            return {
              match: o,
              folder: s
            };
          } else {
            return null;
          }
        }).filter(Ch);
        if (r.length) {
          return r.map(s => {
            const o = s.match[1];
            return {
              searchPath: s.folder.uri,
              pattern: o && lau(o)
            };
          });
        }
        {
          const s = e.match(/\.[\/\\](.+)[\/\\]?/);
          const o = s ? s[1] : e;
          const a = _(14465, null, o);
          throw new Error(a);
        }
      }
    }
  }
  resolveOneSearchPathPattern(e, t) {
    const i = e.pattern && t ? `${e.pattern}/${t}` : e.pattern || t;
    const r = [{
      searchPath: e.searchPath,
      pattern: i
    }];
    if (i && !i.endsWith("**")) {
      r.push({
        searchPath: e.searchPath,
        pattern: i + "/**"
      });
    }
    return r;
  }
  getFolderQueryForSearchPath(e, t, i) {
    const r = this.getFolderQueryForRoot(K4n(e.searchPath), t, i, false);
    if (r) {
      return {
        ...r,
        includePattern: e.pattern
      };
    } else {
      return null;
    }
  }
  getFolderQueryForRoot(e, t, i, r) {
    let s;
    const o = je.isUri(e) ? e : e.uri;
    let a = t.excludePattern?.map(g => {
      const f = t.excludePattern && S9A(g) ? g.uri : undefined;
      if (!f || !je.isUri(e) || !this.uriIdentityService.extUri.isEqual(e, f)) {
        return f;
      } else {
        return undefined;
      }
    });
    if (!a?.length) {
      a = [undefined];
    }
    if (i.searchPaths) {
      const g = i.searchPaths.filter(f => Zc(f.searchPath, o))[0];
      if (g && !g.pattern) {
        return null;
      }
      if (g) {
        s = g.pattern;
      }
    }
    const l = this.configurationService.getValue({
      resource: o
    });
    const d = {
      ...(this.getExcludesForFolder(l, t) || {}),
      ...(s || {})
    };
    const m = je.isUri(e) ? ca(e) : e.name;
    const p = a.map(g => Object.keys(d).length > 0 ? {
      folder: g,
      pattern: d
    } : undefined).filter(g => g);
    return {
      folder: o,
      folderName: r ? m : undefined,
      excludePattern: p,
      fileEncoding: l.files && l.files.encoding,
      disregardIgnoreFiles: typeof t.disregardIgnoreFiles == "boolean" ? t.disregardIgnoreFiles : !l.search.useIgnoreFiles,
      disregardGlobalIgnoreFiles: typeof t.disregardGlobalIgnoreFiles == "boolean" ? t.disregardGlobalIgnoreFiles : !l.search.useGlobalIgnoreFiles,
      disregardParentIgnoreFiles: typeof t.disregardParentIgnoreFiles == "boolean" ? t.disregardParentIgnoreFiles : !l.search.useParentIgnoreFiles,
      ignoreSymlinks: typeof t.ignoreSymlinks == "boolean" ? t.ignoreSymlinks : !l.search.followSymlinks
    };
  }
};
yV = __decorate([__param(0, Fn), __param(1, Lr), __param(2, da), __param(3, Rr), __param(4, kp), __param(5, xl)], yV);

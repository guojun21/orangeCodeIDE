"use strict";

// Module: out-build/vs/workbench/services/extensionRecommendations/common/workspaceExtensionsConfig.js
// Offset: 32604367 (bundle byte offset)
// Size: 8402 bytes
Vs();
yn();
aB();
rt();
oR();
ns();
Er();
Wt();
ps();
Kl();
hd();
Ku();
Ht();
Qme();
cu();
X1t = ".vscode/extensions.json";
irt = xi("IWorkspaceExtensionsConfigService");
PEa = class extends at {
  constructor(e, t, i, r, s, o) {
    super();
    this.workspaceContextService = e;
    this.fileService = t;
    this.quickInputService = i;
    this.modelService = r;
    this.languageService = s;
    this.jsonEditingService = o;
    this._onDidChangeExtensionsConfigs = this._register(new Qe());
    this.onDidChangeExtensionsConfigs = this._onDidChangeExtensionsConfigs.event;
    this._register(e.onDidChangeWorkspaceFolders(a => this._onDidChangeExtensionsConfigs.fire()));
    this._register(t.onDidFilesChange(a => {
      const l = e.getWorkspace();
      if (l.configuration && a.affects(l.configuration) || l.folders.some(u => a.affects(u.toResource(X1t)))) {
        this._onDidChangeExtensionsConfigs.fire();
      }
    }));
  }
  async getExtensionsConfigs() {
    const e = this.workspaceContextService.getWorkspace();
    const t = [];
    const i = e.configuration ? await this.resolveWorkspaceExtensionConfig(e.configuration) : undefined;
    if (i) {
      t.push(i);
    }
    t.push(...(await Promise.all(e.folders.map(r => this.resolveWorkspaceFolderExtensionConfig(r)))));
    return t;
  }
  async getRecommendations() {
    const e = await this.getExtensionsConfigs();
    return xb(e.flatMap(t => t.recommendations ? t.recommendations.map(i => i.toLowerCase()) : []));
  }
  async getUnwantedRecommendations() {
    const e = await this.getExtensionsConfigs();
    return xb(e.flatMap(t => t.unwantedRecommendations ? t.unwantedRecommendations.map(i => i.toLowerCase()) : []));
  }
  async toggleRecommendation(e) {
    e = e.toLowerCase();
    const t = this.workspaceContextService.getWorkspace();
    const i = t.configuration ? await this.resolveWorkspaceExtensionConfig(t.configuration) : undefined;
    const r = new fu();
    await Promise.all(t.folders.map(async u => {
      const d = await this.resolveWorkspaceFolderExtensionConfig(u);
      r.set(u.uri, d);
    }));
    const s = i && i.recommendations?.some(u => u.toLowerCase() === e);
    const o = t.folders.filter(u => r.get(u.uri)?.recommendations?.some(d => d.toLowerCase() === e));
    const a = s || o.length > 0;
    const l = a ? await this.pickWorkspaceOrFolders(o, s ? t : undefined, _(14123, null)) : await this.pickWorkspaceOrFolders(t.folders, t.configuration ? t : undefined, _(14124, null));
    for (const u of l) {
      if (bOt(u)) {
        await this.addOrRemoveWorkspaceRecommendation(e, u, i, !a);
      } else {
        await this.addOrRemoveWorkspaceFolderRecommendation(e, u, r.get(u.uri), !a);
      }
    }
  }
  async toggleUnwantedRecommendation(e) {
    const t = this.workspaceContextService.getWorkspace();
    const i = t.configuration ? await this.resolveWorkspaceExtensionConfig(t.configuration) : undefined;
    const r = new fu();
    await Promise.all(t.folders.map(async u => {
      const d = await this.resolveWorkspaceFolderExtensionConfig(u);
      r.set(u.uri, d);
    }));
    const s = i && i.unwantedRecommendations?.some(u => u === e);
    const o = t.folders.filter(u => r.get(u.uri)?.unwantedRecommendations?.some(d => d === e));
    const a = s || o.length > 0;
    const l = a ? await this.pickWorkspaceOrFolders(o, s ? t : undefined, _(14125, null)) : await this.pickWorkspaceOrFolders(t.folders, t.configuration ? t : undefined, _(14126, null));
    for (const u of l) {
      if (bOt(u)) {
        await this.addOrRemoveWorkspaceUnwantedRecommendation(e, u, i, !a);
      } else {
        await this.addOrRemoveWorkspaceFolderUnwantedRecommendation(e, u, r.get(u.uri), !a);
      }
    }
  }
  async addOrRemoveWorkspaceFolderRecommendation(e, t, i, r) {
    const s = [];
    if (r) {
      if (Array.isArray(i.recommendations)) {
        s.push({
          path: ["recommendations", -1],
          value: e
        });
      } else {
        s.push({
          path: ["recommendations"],
          value: [e]
        });
      }
      const o = this.getEditToRemoveValueFromArray(["unwantedRecommendations"], i.unwantedRecommendations, e);
      if (o) {
        s.push(o);
      }
    } else if (i.recommendations) {
      const o = this.getEditToRemoveValueFromArray(["recommendations"], i.recommendations, e);
      if (o) {
        s.push(o);
      }
    }
    if (s.length) {
      return this.jsonEditingService.write(t.toResource(X1t), s, true);
    }
  }
  async addOrRemoveWorkspaceRecommendation(e, t, i, r) {
    const s = [];
    if (i) {
      if (r) {
        const o = ["extensions", "recommendations"];
        if (Array.isArray(i.recommendations)) {
          s.push({
            path: [...o, -1],
            value: e
          });
        } else {
          s.push({
            path: o,
            value: [e]
          });
        }
        const a = this.getEditToRemoveValueFromArray(["extensions", "unwantedRecommendations"], i.unwantedRecommendations, e);
        if (a) {
          s.push(a);
        }
      } else if (i.recommendations) {
        const o = this.getEditToRemoveValueFromArray(["extensions", "recommendations"], i.recommendations, e);
        if (o) {
          s.push(o);
        }
      }
    } else if (r) {
      s.push({
        path: ["extensions"],
        value: {
          recommendations: [e]
        }
      });
    }
    if (s.length) {
      return this.jsonEditingService.write(t.configuration, s, true);
    }
  }
  async addOrRemoveWorkspaceFolderUnwantedRecommendation(e, t, i, r) {
    const s = [];
    if (r) {
      const o = ["unwantedRecommendations"];
      if (Array.isArray(i.unwantedRecommendations)) {
        s.push({
          path: [...o, -1],
          value: e
        });
      } else {
        s.push({
          path: o,
          value: [e]
        });
      }
      const a = this.getEditToRemoveValueFromArray(["recommendations"], i.recommendations, e);
      if (a) {
        s.push(a);
      }
    } else if (i.unwantedRecommendations) {
      const o = this.getEditToRemoveValueFromArray(["unwantedRecommendations"], i.unwantedRecommendations, e);
      if (o) {
        s.push(o);
      }
    }
    if (s.length) {
      return this.jsonEditingService.write(t.toResource(X1t), s, true);
    }
  }
  async addOrRemoveWorkspaceUnwantedRecommendation(e, t, i, r) {
    const s = [];
    if (i) {
      if (r) {
        const o = ["extensions", "unwantedRecommendations"];
        if (Array.isArray(i.recommendations)) {
          s.push({
            path: [...o, -1],
            value: e
          });
        } else {
          s.push({
            path: o,
            value: [e]
          });
        }
        const a = this.getEditToRemoveValueFromArray(["extensions", "recommendations"], i.recommendations, e);
        if (a) {
          s.push(a);
        }
      } else if (i.unwantedRecommendations) {
        const o = this.getEditToRemoveValueFromArray(["extensions", "unwantedRecommendations"], i.unwantedRecommendations, e);
        if (o) {
          s.push(o);
        }
      }
    } else if (r) {
      s.push({
        path: ["extensions"],
        value: {
          unwantedRecommendations: [e]
        }
      });
    }
    if (s.length) {
      return this.jsonEditingService.write(t.configuration, s, true);
    }
  }
  async pickWorkspaceOrFolders(e, t, i) {
    const r = t ? [...e, t] : [...e];
    if (r.length === 1) {
      return r;
    }
    const s = e.map(a => ({
      label: a.name,
      description: _(14127, null),
      workspaceOrFolder: a,
      iconClasses: yS(this.modelService, this.languageService, a.uri, xg.ROOT_FOLDER)
    }));
    if (t) {
      s.push({
        type: "separator"
      });
      s.push({
        label: _(14128, null),
        workspaceOrFolder: t
      });
    }
    return ((await this.quickInputService.pick(s, {
      placeHolder: i,
      canPickMany: true
    })) || []).map(a => a.workspaceOrFolder);
  }
  async resolveWorkspaceExtensionConfig(e) {
    try {
      const t = await this.fileService.readFile(e);
      const i = L1(t.value.toString()).extensions;
      if (i) {
        return this.parseExtensionConfig(i);
      } else {
        return undefined;
      }
    } catch {}
  }
  async resolveWorkspaceFolderExtensionConfig(e) {
    try {
      const t = await this.fileService.readFile(e.toResource(X1t));
      const i = L1(t.value.toString());
      return this.parseExtensionConfig(i);
    } catch {}
    return {};
  }
  parseExtensionConfig(e) {
    return {
      recommendations: xb((e.recommendations || []).map(t => t.toLowerCase())),
      unwantedRecommendations: xb((e.unwantedRecommendations || []).map(t => t.toLowerCase()))
    };
  }
  getEditToRemoveValueFromArray(e, t, i) {
    const r = t?.indexOf(i);
    if (r !== undefined && r !== -1) {
      return {
        path: [...e, r],
        value: undefined
      };
    }
  }
};
PEa = __decorate([__param(0, Lr), __param(1, Gr), __param(2, ha), __param(3, Il), __param(4, Jl), __param(5, bX)], PEa);
Vi(irt, PEa, 1);

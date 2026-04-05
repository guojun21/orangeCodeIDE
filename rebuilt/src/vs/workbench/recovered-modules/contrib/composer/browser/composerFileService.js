"use strict";

// Module: out-build/vs/workbench/contrib/composer/browser/composerFileService.js
// Offset: 26923311 (bundle byte offset)
// Size: 7080 bytes
Ql();
rt();
zr();
Yn();
ns();
Er();
Wt();
VA();
ss();
Ff();
lce();
Zk();
ps();
gye();
Q0();
kr();
Wu();
ZFg = 500;
YZ = xi("composerFileService");
lQ = class extends at {
  constructor(e, t, i, r, s, o, a, l) {
    super();
    this._fileService = e;
    this._editorService = t;
    this._textFileService = i;
    this._notebookModelResolverService = r;
    this._composerEventService = s;
    this._workspaceContextService = o;
    this._experimentService = a;
    this._storageService = l;
    this._register(this._fileService.onDidFilesChange(u => {
      this._composerEventService.fireDidFilesChange(u);
    }));
  }
  async createFolder(e) {
    const {
      uri: t,
      composerData: i
    } = e;
    const r = this.getURIForComposer(t, i);
    return this._fileService.createFolder(r);
  }
  async createNewFileAndMaybeFolder(e, t, i) {
    const r = this.getURIForComposer(e, t);
    const s = await this.exists({
      uri: r,
      composerData: t
    });
    const o = [];
    if (!s) {
      let a = r.fsPath;
      while (a.length > 0) {
        const d = a.split("/").slice(0, -1).join("/");
        if (await this.exists({
          uri: je.file(d),
          composerData: t
        })) {
          break;
        }
        o.push({
          uri: je.file(d)
        });
        a = d;
      }
      await this._fileService.createFile(r, Ms.fromString(""), {
        overwrite: i
      });
      const l = 10;
      let u = 0;
      while (!(await this.exists({
        uri: r,
        composerData: t
      })) && u < l) {
        await new Promise(d => setTimeout(d, ZFg));
        u++;
      }
      if (u === l) {
        console.error(`[composer] Failed to create file ${r.toString()} after ${l} attempts`);
        return [];
      }
    }
    return o;
  }
  async writeFile(e) {
    const {
      uri: t,
      composerData: i,
      bufferOrReadableOrStream: r,
      options: s
    } = e;
    const o = this.getURIForComposer(t, i);
    return this._fileService.writeFile(o, r, s);
  }
  async deleteFolder(e) {
    const {
      uri: t,
      composerData: i,
      ...r
    } = e;
    const s = this.getURIForComposer(t, i);
    if (await this.exists({
      uri: s,
      composerData: i
    })) {
      try {
        await this._fileService.del(s, {
          recursive: true,
          ...r
        });
      } catch (o) {
        console.error(`Error deleting folder ${s.toString()}:`, o);
      }
    }
  }
  async resolve(e) {
    const {
      uri: t,
      composerData: i,
      options: r
    } = e;
    const s = this.getURIForComposer(t, i);
    return this._fileService.resolve(s, r);
  }
  watch(e) {
    const {
      uri: t,
      composerData: i,
      options: r
    } = e;
    const s = this.getURIForComposer(t, i);
    return this._fileService.watch(s, r);
  }
  async stat(e) {
    const {
      uri: t,
      composerData: i
    } = e;
    const r = this.getURIForComposer(t, i);
    return this._fileService.stat(r);
  }
  async readFile(e) {
    const {
      uri: t,
      composerData: i
    } = e;
    const r = this.getURIForComposer(t, i);
    return await this._fileService.readFile(r);
  }
  async exists(e) {
    const {
      uri: t,
      composerData: i
    } = e;
    const r = this.getURIForComposer(t, i);
    return await this._fileService.exists(r);
  }
  async deleteFile(e) {
    const {
      uri: t,
      composerData: i
    } = e;
    const r = this.getURIForComposer(t, i);
    this._composerEventService.fireToRemoveDiffs({
      uri: r
    });
    try {
      await this.revertFile({
        uri: r,
        composerData: i,
        options: {
          soft: false
        }
      });
      if (await this.exists({
        uri: r,
        composerData: i
      })) {
        await this._fileService.del(r, {
          recursive: true
        });
        const o = {
          resource: r,
          type: 2
        };
        const a = new V5e([o], true);
        this._composerEventService.fireDidFilesChange(a);
      }
      const s = this._editorService.findEditors(r);
      for (const o of s) {
        await this._editorService.closeEditor(o);
      }
    } catch (s) {
      console.error(`Error deleting file ${r.toString()}:`, s);
    }
  }
  async deleteNewFileAndMaybeFolder(e, t, i) {
    const r = this.getURIForComposer(e, i);
    if (!i?.newlyCreatedFiles?.find(o => o.uri.toString() === r.toString())) {
      return false;
    }
    try {
      await this.deleteFile({
        uri: r,
        composerData: i
      });
      this._composerEventService.fireNewFileDeleted({
        composerId: t,
        uri: r
      });
      return true;
    } catch (o) {
      console.error(`Error deleting file ${r.toString()}:`, o);
      return false;
    }
  }
  async saveFiles(e) {
    const {
      uris: t,
      composerData: i,
      options: r
    } = e;
    await Promise.allSettled(t.map(async s => {
      await this.saveFile({
        uri: this.getURIForComposer(s, i),
        composerData: i,
        options: r
      });
    }));
  }
  async saveFile(e) {
    const {
      uri: t,
      composerData: i,
      options: r
    } = e;
    let s = this.getURIForComposer(t, i);
    if (s.scheme === _n.vscodeNotebookCell) {
      s = wgt(s);
    }
    const a = Bh(this._storageService) || r?.force === true;
    if (s.path.endsWith(".ipynb")) {
      if (!this._notebookModelResolverService.isDirty(s) && !a) {
        return true;
      }
      let u;
      try {
        u = await this._notebookModelResolverService.resolve(s);
        return await u.object.save({
          ...r,
          force: a
        });
      } catch (d) {
        console.error("[composer] Error saving notebook:", d);
        return false;
      } finally {
        u?.dispose();
      }
    } else if (!this._textFileService.isDirty(s) && !a) {
      return true;
    } else {
      return !!(await this._textFileService.save(s, {
        reason: 1,
        force: a,
        ...r
      }));
    }
  }
  async revertFile(e) {
    const {
      uri: t,
      composerData: i,
      options: r
    } = e;
    let s = this.getURIForComposer(t, i);
    if (s.scheme === _n.vscodeNotebookCell) {
      s = wgt(s);
    }
    if (s.path.endsWith(".ipynb")) {
      if (!this._notebookModelResolverService.isDirty(s)) {
        return;
      }
      let a;
      try {
        a = await this._notebookModelResolverService.resolve(s);
        await a.object.revert(r);
      } catch (l) {
        console.error("[composer] Error reverting notebook:", l);
      } finally {
        a?.dispose();
      }
    } else {
      if (!this._textFileService.isDirty(s)) {
        return;
      }
      await this._textFileService.revert(s, r);
    }
  }
  getURIForComposer(e, t) {
    return TSt(e, t, this._workspaceContextService);
  }
};
__decorate([Gs("ComposerFileService.createFolder")], lQ.prototype, "createFolder", null);
__decorate([Gs("ComposerFileService.createNewFileAndMaybeFolder")], lQ.prototype, "createNewFileAndMaybeFolder", null);
__decorate([Gs("ComposerFileService.writeFile")], lQ.prototype, "writeFile", null);
__decorate([Gs("ComposerFileService.deleteFolder")], lQ.prototype, "deleteFolder", null);
__decorate([Gs("ComposerFileService.resolve")], lQ.prototype, "resolve", null);
__decorate([Gs("ComposerFileService.watch")], lQ.prototype, "watch", null);
__decorate([Gs("ComposerFileService.stat")], lQ.prototype, "stat", null);
__decorate([Gs("ComposerFileService.readFile")], lQ.prototype, "readFile", null);
__decorate([Gs("ComposerFileService.exists")], lQ.prototype, "exists", null);
__decorate([Gs("ComposerService.deleteFile")], lQ.prototype, "deleteFile", null);
__decorate([Gs("ComposerFileService.deleteNewFileAndMaybeFolder")], lQ.prototype, "deleteNewFileAndMaybeFolder", null);
__decorate([Gs("ComposerFileService.saveFiles")], lQ.prototype, "saveFiles", null);
__decorate([Gs("ComposerFileService.saveFile")], lQ.prototype, "saveFile", null);
__decorate([Gs("ComposerFileService.revertFile")], lQ.prototype, "revertFile", null);
lQ = __decorate([__param(0, Gr), __param(1, yi), __param(2, Gg), __param(3, Lq), __param(4, BA), __param(5, Lr), __param(6, Tl), __param(7, Hi)], lQ);
Vi(YZ, lQ, 1);

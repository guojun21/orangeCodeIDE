"use strict";

// Module: out-build/vs/workbench/contrib/reviewChanges/browser/ReviewChangesResource.js
// Offset: 34046703 (bundle byte offset)
// Size: 5663 bytes
ml();
rt();
Uc();
Yn();
gNe();
npy();
DEt();
spy();
l7 = class Izb extends Nrt {
  constructor(e) {
    super(e.originalUri, e.modifiedUri, e.goToFileUri, e.contextKeys, e.status, e.originalContents, e.modifiedContents);
    this.type = "skeleton";
    this.args = e;
    if (e.linesAdded !== undefined && e.linesRemoved !== undefined) {
      this.linesAdded = e.linesAdded;
      this.linesRemoved = e.linesRemoved;
    } else {
      const i = opy(e.originalContents, e.modifiedContents);
      this.linesAdded = i.linesAdded;
      this.linesRemoved = i.linesRemoved;
    }
    this.skipInlineDiffSync = e.skipInlineDiffSync ?? false;
    this.skipLineCounts = e.skipLineCounts ?? false;
    this.renamedFromPath = e.renamedFromPath;
  }
  getKey() {
    return JSON.stringify([this.modifiedUri?.toString(), this.originalUri?.toString()]);
  }
  static revive(e, t, i) {
    const r = e.originalUri ? je.revive(e.originalUri) : undefined;
    const s = e.modifiedUri ? je.revive(e.modifiedUri) : undefined;
    const o = e.goToFileUri ? je.revive(e.goToFileUri) : undefined;
    const a = {
      instantiationService: t,
      composerTextModelService: i,
      originalUri: r,
      modifiedUri: s,
      goToFileUri: o,
      contextKeys: e.contextKeys,
      status: e.status,
      originalContents: e.originalContents,
      modifiedContents: e.modifiedContents,
      linesAdded: e.linesAdded,
      linesRemoved: e.linesRemoved,
      skipLineCounts: e.skipLineCounts,
      renamedFromPath: e.renamedFromPath
    };
    return new Izb(a);
  }
};
_N = class Dzb extends Nrt {
  constructor(e) {
    super(e.originalUri, e.modifiedUri, e.goToFileUri, e.contextKeys, e.status, e.originalContents, e.modifiedContents);
    this.type = "resource";
    this._textModelDisposables = new Ut();
    this.args = e;
    this.instantiationService = e.instantiationService;
    this.composerTextModelService = e.composerTextModelService;
    this.skipInlineDiffSync = e.skipInlineDiffSync ?? false;
    this._skipLineCounts = e.skipLineCounts === true && e.linesAdded !== undefined && e.linesRemoved !== undefined;
    this._linesAdded = Ua("ReviewChangesResource.linesAdded", 0);
    this.linesAdded = this._linesAdded;
    this._linesRemoved = Ua("ReviewChangesResource.linesRemoved", 0);
    this.linesRemoved = this._linesRemoved;
    if (e.linesAdded !== undefined && e.linesRemoved !== undefined) {
      this._linesAdded.set(e.linesAdded, undefined);
      this._linesRemoved.set(e.linesRemoved, undefined);
    }
    this._comments = Ua("ReviewChangesResource.comments", []);
    this.comments = this._comments;
    this.hydrate();
  }
  static hydrateSkeleton(e) {
    const t = e.args;
    return new Dzb(t);
  }
  static generateScheme(e) {
    const t = this.computeStableHash(e);
    return `${V2o}-${t}-anysphere`;
  }
  static computeStableHash(e) {
    let t = 2166136261;
    for (let r = 0; r < e.length; r++) {
      t ^= e.charCodeAt(r);
      t += (t << 1) + (t << 4) + (t << 7) + (t << 8) + (t << 24);
    }
    return (t >>> 0).toString(16).padStart(8, "0");
  }
  getSkeleton() {
    return new l7(this.args);
  }
  hydrate() {
    if (this.originalUri) {
      this._registerURI(this.originalUri, "original");
    }
    if (this.modifiedUri) {
      this._registerURI(this.modifiedUri, "modified");
    }
    Promise.all([this.originalModel, this.modifiedModel]).then(([e, t]) => {
      this._updateCounts();
    });
  }
  _registerURI(e, t) {
    const i = e.scheme;
    const r = t === "original" ? this.originalContents : this.modifiedContents;
    if ((i.startsWith(V2o) || i === "untitled") && r !== undefined) {
      const a = this.instantiationService.createInstance(tBa, r);
      const l = this.composerTextModelService.registerTextModelContentProvider(i, a);
      this._textModelDisposables.add(l);
    }
    const o = this.composerTextModelService.createModelReference(e, undefined).then(async a => {
      this._textModelDisposables.add(a);
      this._textModelDisposables.add(a.object.textEditorModel.onDidChangeContent(() => {
        this._updateCounts();
      }));
      return a;
    });
    if (t === "original") {
      this.originalModel = o;
    } else {
      this.modifiedModel = o;
    }
  }
  async _updateCounts() {
    if (!this._skipLineCounts) {
      if (!this.originalModel && this.modifiedModel) {
        try {
          const t = (await this.modifiedModel).object.textEditorModel;
          pp(i => {
            this._linesAdded.set(t.getLineCount(), i);
            this._linesRemoved.set(0, i);
          });
        } catch {
          pp(e => {
            this._linesAdded.set(0, e);
            this._linesRemoved.set(0, e);
          });
        }
        return;
      }
      if (this.originalModel && !this.modifiedModel) {
        try {
          const t = (await this.originalModel).object.textEditorModel;
          pp(i => {
            this._linesAdded.set(0, i);
            this._linesRemoved.set(t.getLineCount(), i);
          });
        } catch {
          pp(e => {
            this._linesAdded.set(0, e);
            this._linesRemoved.set(0, e);
          });
        }
        return;
      }
      if (!!this.originalModel && !!this.modifiedModel) {
        try {
          const e = await this.originalModel;
          const t = await this.modifiedModel;
          const i = e.object.textEditorModel;
          const r = t.object.textEditorModel;
          if (i.getValue().length === 0) {
            pp(m => {
              this._linesAdded.set(r.getLineCount(), m);
              this._linesRemoved.set(0, m);
            });
            return;
          }
          const s = i.getLinesContent();
          const o = r.getLinesContent();
          const l = yJ.getDefault().computeDiff(s, o, {
            ignoreTrimWhitespace: false,
            maxComputationTimeMs: 1000,
            computeMoves: false
          });
          let u = 0;
          let d = 0;
          for (const m of l.changes) {
            const p = m.original.length;
            const g = m.modified.length;
            if (p === 0 && g > 0) {
              u += g;
            } else if (p > 0 && g === 0) {
              d += p;
            } else if (p > 0 && g > 0) {
              d += p;
              u += g;
            }
          }
          pp(m => {
            this._linesAdded.set(u, m);
            this._linesRemoved.set(d, m);
          });
        } catch {
          pp(t => {
            this._linesAdded.set(0, t);
            this._linesRemoved.set(0, t);
          });
        }
      }
    }
  }
  setComments(e) {
    this._comments.set(e, undefined);
  }
  addComment(e) {
    const t = this._comments.get();
    const i = t.findIndex(r => r.id === e.id);
    if (i >= 0) {
      const r = [...t];
      r[i] = e;
      this._comments.set(r, undefined);
    } else {
      this._comments.set([...t, e], undefined);
    }
  }
  removeComment(e) {
    const t = this._comments.get();
    this._comments.set(t.filter(i => i.id !== e), undefined);
  }
  clearComments() {
    this._comments.set([], undefined);
  }
  createCommentRenderer(e, t, i, r) {
    const s = new uqf({
      comments: this.comments,
      editor: e,
      widget: t,
      githubPRService: i,
      onCommentPosted: r,
      instantiationService: this.instantiationService
    });
    return {
      dispose: () => s.dispose()
    };
  }
  dispose() {
    const e = this.originalUri?.toString();
    const t = this.modifiedUri?.toString();
    this._textModelDisposables.dispose();
  }
  toArgs() {
    return {
      instantiationService: this.instantiationService,
      composerTextModelService: this.composerTextModelService,
      originalUri: this.originalUri,
      modifiedUri: this.modifiedUri,
      goToFileUri: this.goToFileUri,
      contextKeys: this.contextKeys,
      status: this.status,
      originalContents: this.originalContents,
      modifiedContents: this.modifiedContents
    };
  }
};

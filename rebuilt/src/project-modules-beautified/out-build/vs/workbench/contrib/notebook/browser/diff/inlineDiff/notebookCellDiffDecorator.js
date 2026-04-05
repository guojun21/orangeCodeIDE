"use strict";

// Module: out-build/vs/workbench/contrib/notebook/browser/diff/inlineDiff/notebookCellDiffDecorator.js
// Offset: 33644477 (bundle byte offset)
// Size: 4250 bytes
rt();
Uc();
vr();
Hk();
Jr();
fbt();
B3t();
xw();
bv();
Lte();
ts();
pwe();
L6f();
DIa = class extends Ut {
  constructor(e, t, i, r, s, o) {
    super();
    this.modifiedCell = t;
    this.originalCell = i;
    this.editor = r;
    this._editorWorkerService = s;
    this.originalCellModelFactory = o;
    this._viewZones = [];
    this.throttledDecorator = new L4(50);
    this.perEditorDisposables = this.add(new Ut());
    const a = tp(e.onDidChangeVisibleRanges, () => e.visibleRanges);
    const l = Ro(u => {
      if (!a.read(u).map(g => e.getCellsInRange(g)).flat().map(g => g.handle).includes(t.handle)) {
        return;
      }
      const p = e.codeEditors.find(g => g[0].handle === t.handle)?.[1];
      if (p?.getModel() === this.modifiedCell.textModel) {
        return p;
      }
    });
    this.add(M0((u, d) => {
      const m = l.read(u);
      this.perEditorDisposables.clear();
      if (m) {
        d.add(m.onDidChangeModel(() => {
          this.perEditorDisposables.clear();
        }));
        d.add(m.onDidChangeModelContent(() => {
          this.update(m);
        }));
        d.add(m.onDidChangeConfiguration(p => {
          if (p.hasChanged(52) || p.hasChanged(68)) {
            this.update(m);
          }
        }));
        this.update(m);
      }
    }));
  }
  update(e) {
    this.throttledDecorator.trigger(() => this._updateImpl(e));
  }
  async _updateImpl(e) {
    if (this.isDisposed) {
      return;
    }
    if (e.getOption(63)) {
      this.perEditorDisposables.clear();
      return;
    }
    const t = e.getModel();
    if (!t || t !== this.modifiedCell.textModel) {
      this.perEditorDisposables.clear();
      return;
    }
    const i = this.getOrCreateOriginalModel(e);
    if (!i) {
      this.perEditorDisposables.clear();
      return;
    }
    const r = t.getVersionId();
    const s = await this._editorWorkerService.computeDiff(i.uri, t.uri, {
      computeMoves: true,
      ignoreTrimWhitespace: false,
      maxComputationTimeMs: Number.MAX_SAFE_INTEGER
    }, "advanced");
    if (!this.isDisposed) {
      if (s && !s.identical && this.modifiedCell.textModel && i && t === e.getModel() && e.getModel()?.getVersionId() === r) {
        this._updateWithDiff(e, i, s, this.modifiedCell.textModel);
      } else {
        this.perEditorDisposables.clear();
      }
    }
  }
  getOrCreateOriginalModel(e) {
    if (!this._originalModel) {
      const t = e.getModel();
      if (!t) {
        return;
      }
      this._originalModel = this.add(this.originalCellModelFactory.getOrCreate(t.uri, this.originalCell.getValue(), t.getLanguageId(), this.modifiedCell.cellKind)).object;
    }
    return this._originalModel;
  }
  _updateWithDiff(e, t, i, r) {
    if (Bhy(i, this.diffForPreviouslyAppliedDecorators)) {
      return;
    }
    this.perEditorDisposables.clear();
    const s = e.createDecorationsCollection();
    this.perEditorDisposables.add($i(() => {
      e.changeViewZones(p => {
        for (const g of this._viewZones) {
          p.removeZone(g);
        }
      });
      this._viewZones = [];
      s.clear();
      this.diffForPreviouslyAppliedDecorators = undefined;
    }));
    this.diffForPreviouslyAppliedDecorators = i;
    const o = Zh.createDynamic({
      ..._3n,
      stickiness: 1
    });
    const a = Zh.createDynamic({
      ...f5o,
      stickiness: 1
    });
    const l = (p, g) => Zh.createDynamic({
      description: "chat-editing-decoration",
      overviewRuler: {
        color: b9(p),
        position: Tx.Left
      },
      minimap: {
        color: b9(g),
        position: 2
      }
    });
    const u = l(Wbn, Uki);
    const d = l(Qbn, $ki);
    const m = l(qki, xIa);
    e.changeViewZones(p => {
      for (const x of this._viewZones) {
        p.removeZone(x);
      }
      this._viewZones = [];
      const g = [];
      const f = t.mightContainNonBasicASCII();
      const A = t.mightContainRTL();
      const w = hKe.fromEditor(this.editor);
      const C = r.getLineCount();
      for (const x of i.changes) {
        const I = x.original;
        t.tokenization.forceTokenization(Math.max(1, I.endLineNumberExclusive - 1));
        const B = new dKe(I.mapToLineArray($ => t.tokenization.getLineTokens($)), [], f, A);
        const R = [];
        for (const $ of x.innerChanges || []) {
          R.push(new Ode($.originalRange.delta(-(x.original.startLineNumber - 1)), D3t.className, 0));
          if ((!$.originalRange.isEmpty() || $.originalRange.startLineNumber !== 1 || $.modifiedRange.endLineNumber !== C) && !$.modifiedRange.isEmpty()) {
            g.push({
              range: $.modifiedRange,
              options: o
            });
          }
        }
        const N = R.length === 1 && R[0].range.isEmpty() && x.original.startLineNumber === 1;
        if (!x.modified.isEmpty && (!N || x.modified.endLineNumberExclusive - 1 !== C)) {
          g.push({
            range: x.modified.toInclusiveRange(),
            options: a
          });
        }
        if (x.original.isEmpty) {
          g.push({
            range: x.modified.toInclusiveRange(),
            options: d
          });
        } else if (x.modified.isEmpty) {
          g.push({
            range: new Zt(x.modified.startLineNumber - 1, 1, x.modified.startLineNumber, 1),
            options: m
          });
        } else {
          g.push({
            range: x.modified.toInclusiveRange(),
            options: u
          });
        }
        const M = document.createElement("div");
        M.className = "chat-editing-original-zone view-lines line-delete monaco-mouse-cursor-text";
        const O = gbt(B, w, R, M);
        if (!N) {
          const $ = {
            afterLineNumber: x.modified.startLineNumber - 1,
            heightInLines: O.heightInLines,
            domNode: M,
            ordinal: 50002
          };
          this._viewZones.push(p.addZone($));
        }
      }
      s.set(g);
    });
  }
};
DIa = __decorate([__param(4, c_), __param(5, K_u)], DIa);

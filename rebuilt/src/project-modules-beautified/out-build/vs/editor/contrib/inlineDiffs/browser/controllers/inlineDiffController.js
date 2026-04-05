"use strict";

// Module: out-build/vs/editor/contrib/inlineDiffs/browser/controllers/inlineDiffController.js
// Offset: 33956557 (bundle byte offset)
// Size: 17285 bytes
vr();
ml();
rt();
_r();
Yr();
Bc();
Ht();
hs();
Ei();
si();
Wt();
Dd();
rf();
kr();
Pa();
Io();
_d();
cp();
Vw();
mce();
ss();
Wu();
uQ();
lv();
Cu();
Oh();
sie();
Tmy();
_M();
Fvi();
tl();
Qh();
Ku();
wq();
k7e();
Pmy();
Nmy();
Urt = new Sn("inlineDiffs.activeEditorWithDiffs", false, {
  type: "boolean",
  description: _(1387, null)
});
GDa = new Sn("inlineDiffs.hasInlineDiffsInAnyEditor", false, {
  type: "boolean",
  description: _(1388, null)
});
P$f = class extends vu {
  constructor() {
    super({
      id: k$f,
      label: "View All Changes",
      alias: "View All Changes",
      precondition: Ee.or(Ci.editorHasPromptBar.isEqualTo(true), Ci.hasDisplayedDiff)
    });
  }
  async run(n, e) {
    const t = n.get(K3);
    const i = n.get(yi);
    const r = t.getDescriptors().filter(o => o.metadata?.source === gce);
    if (r.length === 0) {
      return;
    }
    const s = {
      resources: r.map(o => o.uri)
    };
    await i.openEditor(s);
  }
};
ac(P$f);
ac(class extends vu {
  constructor() {
    super({
      id: hvn,
      label: "Accept Edits",
      alias: "Accept Edits",
      precondition: Urt,
      kbOpts: {
        kbExpr: Ci.editorTextFocus,
        primary: 2051,
        weight: 500
      }
    });
  }
  run(e, t, i) {
    const r = e.get(ku);
    const s = e.get(ea);
    s.publicLogCapture("Accepted Diff");
    s.publicLogCapture("did.edit.accepted", {
      model: r.applicationUserPersistentStorage.aiSettings.modelConfig["cmd-k"]?.modelName
    });
    wN.get(t)?.acceptSuggestion(i, "both");
  }
});
ac(class extends vu {
  constructor() {
    super({
      id: MDa,
      label: "Accept Partial Edit",
      alias: "Accept Partial Edit",
      precondition: Urt,
      kbOpts: {
        kbExpr: Ci.editorTextFocus,
        primary: Sc ? 3127 : 2103,
        weight: 500
      }
    });
  }
  run(e, t, i) {
    e.get(ea).publicLogCapture("Accepted Partial Diff");
    const r = e.get(ea);
    const s = e.get(ku);
    const o = e.get(Hi);
    const a = e.get(K3);
    const l = e.get(fr);
    r.publicLogCapture("did.edit.acceptedpartial", {
      model: s.applicationUserPersistentStorage.aiSettings.modelConfig["cmd-k"]?.modelName
    });
    const u = wN.get(t);
    if (u) {
      u.acceptPartialSuggestion(i, "both");
      Mmy(t, u, o, a, l);
    }
  }
});
L$f = class extends vu {
  constructor() {
    super({
      id: S$f,
      label: "Reject All Edits",
      alias: "Reject All Edits",
      precondition: Ee.or(Ci.editorHasPromptBar.isEqualTo(true), Ci.hasDisplayedDiff),
      kbOpts: {
        kbExpr: Ci.editorTextFocus,
        primary: 2053,
        weight: 500
      }
    });
  }
  run(n, e, t) {
    n.get(ea).publicLogCapture("Rejected Diff");
    const i = n.get(ku);
    const r = n.get(I2);
    n.get(ea).publicLogCapture("did.edit.rejected", {
      model: i.applicationUserPersistentStorage.aiSettings.modelConfig["cmd-k"]?.modelName
    });
    n.get(fl).listCodeEditors().forEach(l => {
      wN.get(l)?.rejectSuggestion(t, "both");
      const u = r.getPromptBars();
      if (u.length === 0) {
        return;
      }
      const d = l.getSelection();
      let m;
      if (!d) {
        m = u[u.length - 1].id;
      } else {
        let p = Infinity;
        for (const g of u) {
          const f = l.getModel()?.getDecorationRange(g.currentRangeDecorationId);
          if (!f) {
            continue;
          }
          if (f.intersectRanges(d)) {
            m = g.id;
            break;
          }
          const A = Math.min(Math.abs(d.startLineNumber - f.startLineNumber), Math.abs(d.endLineNumber - f.endLineNumber));
          if (A < p) {
            p = A;
            m = g.id;
          }
        }
      }
      n.get(fr).executeCommand(TFn, m);
      n.get(fr).executeCommand(LBe, m);
    });
  }
};
ac(L$f);
ac(class extends vu {
  constructor() {
    super({
      id: mvn,
      label: "Undo Edits",
      alias: "Undo Edits",
      precondition: Urt,
      kbOpts: {
        kbExpr: Ci.editorTextFocus,
        primary: 3073,
        weight: 500
      }
    });
  }
  run(e, t, i) {
    const r = e.get(ku);
    const s = e.get(ea);
    const o = e.get(I2);
    s.publicLogCapture("Rejected Diff");
    s.publicLogCapture("did.edit.rejected", {
      model: r.applicationUserPersistentStorage.aiSettings.modelConfig["cmd-k"]?.modelName
    });
    wN.get(t)?.rejectSuggestion(i, "both");
    const a = o.getPromptBars();
    if (a.length === 0) {
      return;
    }
    const l = t.getSelection();
    let u;
    if (!l) {
      u = a[a.length - 1].id;
    } else {
      let d = Infinity;
      for (const m of a) {
        const p = t.getModel()?.getDecorationRange(m.currentRangeDecorationId);
        if (!p) {
          continue;
        }
        if (p.intersectRanges(l)) {
          u = m.id;
          break;
        }
        const g = Math.min(Math.abs(l.startLineNumber - p.startLineNumber), Math.abs(l.endLineNumber - p.endLineNumber));
        if (g < d) {
          d = g;
          u = m.id;
        }
      }
    }
    e.get(fr).executeCommand(TFn, u);
    e.get(fr).executeCommand(LBe, u);
  }
});
ac(class extends vu {
  constructor() {
    super({
      id: FDa,
      label: "Reject Partial Edit",
      alias: "Reject Partial Edit",
      precondition: Urt,
      kbOpts: {
        kbExpr: Ci.editorTextFocus,
        primary: 2092,
        weight: 500
      }
    });
  }
  run(e, t, i) {
    const r = e.get(ea);
    const s = e.get(ku);
    const o = e.get(Hi);
    const a = e.get(fL);
    const l = e.get(fr);
    r.publicLogCapture("Rejected Partial Diff");
    r.publicLogCapture("did.edit.rejectedpartial", {
      model: s.applicationUserPersistentStorage.aiSettings.modelConfig["cmd-k"]?.modelName
    });
    const u = wN.get(t);
    if (u) {
      u.rejectPartialSuggestion(i, "both");
    }
  }
});
N$f = class extends vu {
  constructor() {
    super({
      id: l1i,
      label: "Cancel Edits",
      alias: "Cancel Edits",
      precondition: Ci.hasActivelyGeneratingDiff,
      kbOpts: {
        kbExpr: Ci.editorTextFocus,
        primary: 3073,
        weight: 600
      }
    });
  }
  run(n, e, t) {
    n.get(ea).publicLogCapture("Cancelled Diff");
    wN.get(e)?.cancelGeneration(t, "both");
  }
};
(function (n) {
  n[n.AllowAll = 0] = "AllowAll";
  n[n.AllowOnlyNonGenerating = 1] = "AllowOnlyNonGenerating";
  n[n.AllowOnlyGenerating = 2] = "AllowOnlyGenerating";
})(E7e ||= {});
wN = class extends at {
  static {
    X0u = this;
  }
  static {
    this.ID = "editor.contrib.inlineDiffController";
  }
  static get(e) {
    return e.getContribution(X0u.ID);
  }
  findClosestDiffToCursorId(e, t = "notPromptBar") {
    const i = this._editor.getPosition();
    let r = null;
    let s = Infinity;
    const o = this._editor.getModel()?.uri;
    const a = this._getDiffsForEditor(o).filter(l => t === "both" || t === "promptBar" == (this.cmdKStateService.getPromptBarByDiffId(l.id) !== undefined));
    for (const l of a) {
      const u = this.aiService.inprogressAIGenerations.value.some(g => g.generationUUID === l.metadata?.generationId);
      if (e === E7e.AllowOnlyNonGenerating && u || e === E7e.AllowOnlyGenerating && !u) {
        continue;
      }
      if (!i) {
        r = l.id;
        break;
      }
      const d = l.currentRange.startLineNumber;
      const m = l.currentRange.endLineNumberExclusive;
      const p = Math.min(Math.abs(i.lineNumber - d), Math.abs(i.lineNumber - m));
      if (p < s) {
        s = p;
        r = l.id;
      }
    }
    return r || null;
  }
  rejectSuggestion(e, t) {
    if (!this._editor.hasModel()) {
      return;
    }
    const i = e?.id ?? this.findClosestDiffToCursorId(E7e.AllowOnlyNonGenerating, t);
    if (i) {
      this._diffChangeSourceRegistry.reject(i);
    }
  }
  acceptSuggestion(e, t) {
    if (!this._editor.hasModel()) {
      return;
    }
    const i = e?.id ?? this.findClosestDiffToCursorId(E7e.AllowOnlyNonGenerating, t);
    if (i) {
      this._diffChangeSourceRegistry.accept(i);
    }
  }
  acceptPartialSuggestion(e, t) {
    if (!this._editor.hasModel()) {
      return;
    }
    const i = e?.diffId ?? this.findClosestDiffToCursorId(E7e.AllowOnlyNonGenerating, t);
    if (!i) {
      return;
    }
    const r = e?.line ? new ar(e.line(), 1) : this._editor.getPosition();
    if (!r) {
      return;
    }
    const s = this._diffChangeSourceRegistry.getDescriptorById(i);
    if (!s) {
      return;
    }
    const o = mmn(s.descriptor, r);
    if (o) {
      this._diffChangeSourceRegistry.acceptChange(i, o);
    }
  }
  rejectPartialSuggestion(e, t) {
    if (!this._editor.hasModel()) {
      return;
    }
    const i = e?.diffId ?? this.findClosestDiffToCursorId(E7e.AllowOnlyNonGenerating, t);
    if (!i) {
      return;
    }
    const r = e?.line ? new ar(e.line(), 1) : this._editor.getPosition();
    if (!r) {
      return;
    }
    const s = this.cmdKStateService.getPromptBarByDiffId(i);
    const o = this._diffChangeSourceRegistry.getDescriptorById(i);
    if (!o) {
      return;
    }
    const a = mmn(o.descriptor, r);
    if (a && this._diffChangeSourceRegistry.rejectChange(i, a) && s) {
      this.commandService.executeCommand(TFn, s.id);
      this.commandService.executeCommand(LBe, s.id);
    }
  }
  cancelGeneration(e, t) {
    const i = e?.id ?? this.findClosestDiffToCursorId(E7e.AllowOnlyGenerating, t);
    if (i) {
      this._diffChangeSourceRegistry.cancel(i);
    }
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g) {
    super();
    this._instantiationService = t;
    this.languageService = i;
    this._inlineDiffService = s;
    this._diffChangeSourceRegistry = o;
    this.commandService = l;
    this._themeService = u;
    this.configurationService = d;
    this.aiService = m;
    this.cmdKStateService = p;
    this.experimentService = g;
    this.displayedDiffCache = new Map();
    this._editor = e;
    this.extUri = a.extUri;
    this._hasDisplayedDiff = Ci.hasDisplayedDiff.bindTo(e.contextKeyService);
    this._hasActivelyGeneratingDiff = Ci.hasActivelyGeneratingDiff.bindTo(e.contextKeyService);
    this._activeEditorWithDiffs = Urt.bindTo(e.contextKeyService);
    this._hasInlineDiffsInAnyEditor = GDa.bindTo(e.contextKeyService);
    this._showPartialAcceptRejectWidgets = true;
    this._showDiffsScheduler = this._register(new Hu(() => this.showDiffs(), 100));
    this._diffUpdateScheduler = this._register(new Hu(() => {
      this.showDiffs();
      this.updateContextKeys();
    }, 0));
    const f = Z4.inPeekEditor.getValue(r);
    const A = Ci.inDiffEditor.getValue(r);
    const w = Ci.isEmbeddedDiffEditor.getValue(r);
    const C = A && !w;
    const B = this._editor.getDomNode()?.getAttribute("data-uri")?.startsWith("output:");
    if (!f && !C && !B) {
      this._register(this._editor.onDidChangeModel(N => {
        for (const M of this.displayedDiffCache.keys()) {
          this.removeDiff(M);
        }
        this.displayedDiffCache.clear();
        this.showDiffs();
        this.updateContextKeys();
      }));
      this._register(this._diffChangeSourceRegistry.onDidChange(() => {
        this._diffUpdateScheduler.schedule();
      }));
      this._register(this.aiService.inprogressAIGenerations.event(() => {
        this.showDiffs();
        this.updateContextKeys();
      }));
      this.showDiffs();
      this.updateContextKeys();
      this._register(this._editor.onDidChangeModelContent(() => {
        this._showDiffsScheduler.schedule();
      }));
    }
  }
  updateContextKeys() {
    if (!this._editor.hasModel()) {
      this._activeEditorWithDiffs.set(false);
    } else {
      const t = this._editor.getModel();
      const i = this._getDiffsForEditor(t.uri);
      this._activeEditorWithDiffs.set(i.length > 0);
    }
    const e = this._diffChangeSourceRegistry.getDescriptors().length > 0;
    this._hasInlineDiffsInAnyEditor.set(e);
  }
  _getReviewChangesComposerId() {
    if (this._diffChangeSourceRegistry.isLegacyInlineDiffsUsed()) {
      return;
    }
    const e = this._editor.contextKeyService.getContextKeyValue("reviewChangesComposerId");
    if (typeof e == "string" && e.length > 0) {
      return e;
    } else {
      return undefined;
    }
  }
  _getDiffsForEditor(e) {
    if (!e) {
      return [];
    }
    const t = this._getReviewChangesComposerId();
    const i = this._diffChangeSourceRegistry.getDescriptors().filter(r => VV(r, e));
    if (t) {
      return i.filter(r => r.metadata?.composerId === t);
    } else {
      return i;
    }
  }
  navigateToChange(e, t) {
    if (!this._editor.hasModel()) {
      return;
    }
    const i = this._editor.getModel();
    const r = i.getLineCount();
    const s = this._getDiffsForEditor(i.uri).flatMap(u => u.changes.map(d => {
      const m = Xtt(u, d);
      const p = Ffa(u, d, r);
      return {
        startLineNumber: m.startLineNumber,
        endLineNumber: m.endLineNumber,
        widgetLine: p
      };
    })).sort((u, d) => u.startLineNumber - d.startLineNumber);
    if (s.length === 0) {
      return;
    }
    let o;
    if (t !== undefined) {
      o = t - 1;
    } else {
      const u = this._editor.getPosition();
      if (!u) {
        return;
      }
      o = s.findIndex(d => u.lineNumber >= d.startLineNumber && u.lineNumber <= d.endLineNumber || u.lineNumber === d.widgetLine);
    }
    if (o === -1) {
      const u = this._editor.getPosition();
      if (!u) {
        return;
      }
      if (e === "next") {
        o = s.findIndex(d => d.startLineNumber > u.lineNumber);
        if (o === -1 && s.length > 0) {
          o = 0;
        }
      } else {
        o = -1;
        for (let d = s.length - 1; d >= 0; d--) {
          if (s[d].endLineNumber < u.lineNumber) {
            o = d;
            break;
          }
        }
        if (o === -1 && s.length > 0) {
          o = s.length - 1;
        }
      }
    } else if (e === "next") {
      o = (o + 1) % s.length;
    } else {
      o = (o - 1 + s.length) % s.length;
    }
    const l = s[o].widgetLine;
    this._editor.setPosition({
      lineNumber: l,
      column: 1
    });
    this._editor.revealLineInCenter(l);
  }
  async showDiffs() {
    if (!this._editor.hasModel() || this._editor.getIsAddedMultiDiffEditor?.()) {
      return;
    }
    const e = this._editor.getModel().uri;
    const t = this.aiService.inprogressAIGenerations.value;
    const i = this._getDiffsForEditor(e);
    let r = false;
    for (const o of i) {
      const l = t.some(u => u.generationUUID === o.metadata?.generationId) && true;
      r = r || l;
      this.showDiff(o, l);
    }
    for (const o of this.displayedDiffCache.keys()) {
      if (!i.some(a => a.id === o)) {
        this.removeDiff(o);
      }
    }
    if (r) {
      this._hasActivelyGeneratingDiff.set(true);
    } else {
      this._hasActivelyGeneratingDiff.set(false);
    }
    if (i.filter(o => this.cmdKStateService.getPromptBarByDiffId(o.id) === undefined).length > 0) {
      this._hasDisplayedDiff.set(true);
    } else {
      this._hasDisplayedDiff.set(false);
    }
  }
  getZoneWidgets(e, t) {
    if (!this._editor.hasModel()) {
      return [];
    }
    if (!this.shouldDisplayRemovedLineZones()) {
      for (const a of t) {
        a.dispose();
      }
      return [];
    }
    if (e.metadata?.hideDeletionViewZones) {
      for (const a of t) {
        a.dispose();
      }
      return [];
    }
    if (e.metadata?.hideDecorations) {
      for (const a of t) {
        a.dispose();
      }
      return [];
    }
    if (this._editor.getIsMultiDiffEditor?.()) {
      return [];
    }
    const i = this.configurationService.getValue(c4t) ?? IFn;
    const r = this.experimentService.getDynamicConfig("inline_diff_performance_config")?.maxDecorations ?? 100;
    if (i && e.changes.length > r) {
      for (const a of t) {
        a.dispose();
      }
      return [];
    }
    const s = [];
    const o = [];
    try {
      for (const a of e.changes) {
        if (a.removedTextLines.length === 0 || a.indentation) {
          continue;
        }
        let l = e.currentRange.startLineNumber + a.addedRange.startLineNumber - 1 - 1;
        let u;
        if (l === 0) {
          u = 1;
        } else {
          u = this._editor.getModel().getLineMaxColumn(l);
        }
        const d = `${a.removedLinesOriginalRange.startLineNumber}-${a.removedLinesOriginalRange.endLineNumberExclusive}`;
        const m = {
          lineNumber: l,
          column: u
        };
        let p = false;
        for (const f of t) {
          if (f.id === d) {
            p = true;
            f.updatePosition(m);
            s.push(f);
            o.push(d);
          }
        }
        const g = [];
        if (e.originalLineTokens) {
          for (const f of a.removedTextLines) {
            const A = e.originalLineTokens.find(w => w.text === f);
            g.push(A);
          }
        }
        if (!p) {
          const f = new HDa(d, this._editor, a.removedTextLines, g, a.relativeInnerChanges, m, this.languageService, this._themeService, this.configurationService);
          f.showWidget();
          s.push(f);
        }
      }
    } catch (a) {
      console.error("Error creating removed lines widgets!", a);
    }
    for (const a of t) {
      if (!o.includes(a.id)) {
        a.dispose();
      }
    }
    return s;
  }
  setShowPartialAcceptRejectWidgets(e) {
    this._showPartialAcceptRejectWidgets = e;
    this._diffUpdateScheduler.schedule();
  }
  shouldDisplayRemovedLineZones() {
    return true;
  }
  shouldRenderPartialWidgets() {
    return this._showPartialAcceptRejectWidgets;
  }
  getRemovedNumLinesInRange(e, t) {
    let i = 0;
    for (const r of this.displayedDiffCache.get(e)?.zoneWidgets ?? []) {
      const s = r.position?.lineNumber;
      if (s !== undefined && s >= t.startLineNumber && s <= t.endLineNumber) {
        i += r.getHeightInLines();
      }
    }
    return i;
  }
  showDiff(e, t) {
    try {
      const i = this.displayedDiffCache.get(e.id);
      let r = [];
      if (i) {
        r = i.zoneWidgets;
      }
      let s = i?.partialWidgets ?? [];
      const o = this.getZoneWidgets(e, r);
      const a = t ? [] : e.changes;
      const l = this.configurationService.getValue(c4t) ?? IFn;
      const u = this.experimentService.getDynamicConfig("inline_diff_performance_config")?.maxDecorations ?? 100;
      const d = l && e.changes.length > u;
      const p = this._editor.getIsMultiDiffEditor?.() ?? false ? false : e.metadata?.hideDecorations ?? false;
      const g = this.shouldRenderPartialWidgets() && !t && !d && !p;
      if (!g && s.length > 0) {
        for (const f of s) {
          f.dispose();
        }
        s = [];
      }
      if (g) {
        const f = this._editor.getModel();
        if (!f) {
          return;
        }
        const A = f.getLineCount();
        const w = new Set(a.map(x => Ffa(e, x, A)));
        const C = [];
        for (const x of s) {
          if (!w.has(x.line())) {
            C.push(x);
          }
        }
        for (const x of C) {
          x.dispose();
        }
        s = s.filter(x => w.has(x.line()));
        for (const x of w) {
          if (!s.find(B => B.line() === x)) {
            s.push(this._instantiationService.createInstance(qDa, e.id + "-partial" + Wr(), e.id, e.metadata?.composerId, x, this._editor));
          }
        }
      }
      this.displayedDiffCache.set(e.id, {
        zoneWidgets: o,
        partialWidgets: s
      });
    } catch (i) {
      console.error(i);
      const r = this.displayedDiffCache.get(e.id);
      if (r) {
        for (const s of r.partialWidgets) {
          s.dispose();
        }
        for (const s of r.zoneWidgets) {
          s.dispose();
        }
      }
      this.displayedDiffCache.delete(e.id);
    }
  }
  removeDiff(e) {
    const t = this.displayedDiffCache.get(e);
    if (t) {
      for (const i of t.partialWidgets) {
        i.dispose();
      }
      for (const i of t.zoneWidgets) {
        i.dispose();
      }
      this.displayedDiffCache.delete(e);
    }
  }
  focusOnCurrentChange(e) {
    if (!this._editor.hasModel()) {
      return;
    }
    const t = this._editor.getModel();
    const i = t.getLineCount();
    const r = this._getDiffsForEditor(t.uri).flatMap(o => o.changes.map(a => {
      const l = Xtt(o, a);
      return {
        startLineNumber: l.startLineNumber,
        endLineNumber: l.endLineNumber,
        widgetLine: Ffa(o, a, i)
      };
    })).sort((o, a) => o.startLineNumber - a.startLineNumber);
    if (r.length === 0) {
      return;
    }
    const s = r[e - 1];
    if (s) {
      const o = s.widgetLine;
      this._editor.setPosition({
        lineNumber: o,
        column: 1
      });
      this._editor.revealLineInCenter(o);
    }
  }
  dispose() {
    for (const [e, t] of this.displayedDiffCache.entries()) {
      for (const i of t.partialWidgets) {
        i.dispose();
      }
      for (const i of t.zoneWidgets) {
        i.dispose();
      }
    }
    this.displayedDiffCache.clear();
    super.dispose();
  }
};
wN = X0u = __decorate([__param(1, ln), __param(2, Jl), __param(3, wi), __param(4, fL), __param(5, K3), __param(6, xl), __param(7, fr), __param(8, bo), __param(9, Fn), __param(10, Jv), __param(11, I2), __param(12, Tl)], wN);
Mg(wN.ID, wN, 3);
ac(N$f);
ac(class extends vu {
  constructor() {
    super({
      id: ODa,
      label: "Go to Next Change",
      alias: "Go to Next Change",
      precondition: Urt,
      kbOpts: {
        kbExpr: Ci.editorTextFocus,
        primary: 552,
        weight: 100
      }
    });
  }
  run(e, t) {
    wN.get(t)?.navigateToChange("next");
  }
});
ac(class extends vu {
  constructor() {
    super({
      id: UDa,
      label: "Go to Previous Change",
      alias: "Go to Previous Change",
      precondition: Urt,
      kbOpts: {
        kbExpr: Ci.editorTextFocus,
        primary: 553,
        weight: 100
      }
    });
  }
  run(e, t) {
    wN.get(t)?.navigateToChange("previous");
  }
});
ac(class extends vu {
  constructor() {
    super({
      id: pvn,
      label: "Go to Previous Diff File",
      alias: "Go to Previous Diff File",
      precondition: GDa,
      kbOpts: {
        kbExpr: Ci.editorTextFocus,
        primary: 550,
        weight: 1100
      }
    });
  }
  async run(e, t) {
    const i = e.get(yi);
    const r = e.get(K3);
    const s = e.get(Oa);
    const a = r.getDescriptors().filter(w => w.metadata?.source === gce).filter(w => !s.isWorktreeComposer(w.metadata?.composerId)).filter(w => !FSt(w.uri)).map(w => ({
      uri: w.uri,
      currentRange: w.currentRange,
      composerMetadata: w.metadata?.composerId ? {
        composerId: w.metadata.composerId
      } : undefined,
      createdAt: w.metadata?.createdAt,
      hideDecorations: w.metadata?.hideDecorations
    })).filter(w => !w.hideDecorations);
    const l = t.getModel()?.uri;
    const u = R$f(l, a);
    const d = u ? a.filter(w => w.composerMetadata?.composerId === u) : a;
    const m = JDa(d.slice());
    if (!l || m.length === 0) {
      return;
    }
    let p;
    const g = m.findIndex(w => Iu.isEqual(w, l));
    if (g === -1) {
      p = m.length - 1;
    } else {
      p = g - 1;
      if (p < 0) {
        p = m.length - 1;
      }
    }
    const f = m[p];
    await i.openEditor({
      resource: f
    });
    const A = i.activeTextEditorControl;
    if (Ig(A)) {
      wN.get(A)?.focusOnCurrentChange(1);
    }
  }
});
ac(class extends vu {
  constructor() {
    super({
      id: gvn,
      label: "Go to Next Diff File",
      alias: "Go to Next Diff File",
      precondition: GDa,
      kbOpts: {
        kbExpr: Ci.editorTextFocus,
        primary: 554,
        weight: 1100
      }
    });
  }
  async run(e, t) {
    const i = e.get(yi);
    const r = e.get(K3);
    const s = e.get(Oa);
    const a = r.getDescriptors().filter(w => w.metadata?.source === gce).filter(w => !s.isWorktreeComposer(w.metadata?.composerId)).filter(w => !FSt(w.uri)).map(w => ({
      uri: w.uri,
      currentRange: w.currentRange,
      composerMetadata: w.metadata?.composerId ? {
        composerId: w.metadata.composerId
      } : undefined,
      createdAt: w.metadata?.createdAt,
      hideDecorations: w.metadata?.hideDecorations
    })).filter(w => !w.hideDecorations);
    const l = t.getModel()?.uri;
    const u = R$f(l, a);
    const d = u ? a.filter(w => w.composerMetadata?.composerId === u) : a;
    const m = JDa(d.slice());
    if (!l || m.length === 0) {
      return;
    }
    let p;
    const g = m.findIndex(w => Iu.isEqual(w, l));
    if (g === -1) {
      p = 0;
    } else {
      p = g + 1;
      if (p >= m.length) {
        p = 0;
      }
    }
    const f = m[p];
    await i.openEditor({
      resource: f
    });
    const A = i.activeTextEditorControl;
    if (Ig(A)) {
      wN.get(A)?.focusOnCurrentChange(1);
    }
  }
});

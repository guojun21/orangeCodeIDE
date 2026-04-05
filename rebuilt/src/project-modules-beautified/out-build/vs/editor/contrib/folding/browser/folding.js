"use strict";

// Module: out-build/vs/editor/contrib/folding/browser/folding.js
// Offset: 25233114 (bundle byte offset)
// Size: 20820 bytes
vr();
Po();
_s();
G_();
rt();
oa();
Js();
OCA();
A9e();
Cu();
Qh();
Tg();
QE();
Vvg();
WCA();
xQl();
Ht();
si();
DQl();
Opi();
Jca();
So();
xve();
Sx();
Cm();
yn();
hs();
Yn();
hd();
Ei();
Dd();
z9 = new Sn("foldingEnabled", false);
AJ = class extends at {
  static {
    ECt = this;
  }
  static {
    this.ID = "editor.contrib.folding";
  }
  static get(e) {
    return e.getContribution(ECt.ID);
  }
  static getFoldingRangeProviders(e, t) {
    const i = e.foldingRangeProvider.ordered(t);
    return ECt._foldingRangeSelector?.(i, t) ?? i;
  }
  static setFoldingRangeProviderSelector(e) {
    ECt._foldingRangeSelector = e;
    return {
      dispose: () => {
        ECt._foldingRangeSelector = undefined;
      }
    };
  }
  constructor(e, t, i, r, s, o, a) {
    super();
    this.contextKeyService = t;
    this.languageConfigurationService = i;
    this.reactiveStorageService = o;
    this.languageFeaturesService = a;
    this.localToDispose = this._register(new Ut());
    this.editor = e;
    this._foldingLimitReporter = this._register(new BQl(e));
    const l = this.editor.getOptions();
    this._isEnabled = l.get(45);
    this._useFoldingProviders = l.get(46) !== "indentation";
    this._unfoldOnClickAfterEndOfLine = l.get(50);
    this._restoringViewState = false;
    this._currentModelHasFoldedImports = false;
    this._foldingImportsByDefault = l.get(48);
    this.updateDebounceInfo = s.for(a.foldingRangeProvider, "Folding", {
      min: 200
    });
    this.foldingModel = null;
    this.hiddenRangeModel = null;
    this.rangeProvider = null;
    this.foldingRegionPromise = null;
    this.foldingModelPromise = null;
    this.updateScheduler = null;
    this.cursorChangedScheduler = null;
    this.mouseDownInfo = null;
    this.foldingDecorationProvider = new iAg(e, o);
    this.foldingDecorationProvider.showFoldingControls = l.get(115);
    this.foldingDecorationProvider.showFoldingHighlights = l.get(47);
    this.foldingEnabled = z9.bindTo(this.contextKeyService);
    this.foldingEnabled.set(this._isEnabled);
    this._register(this.editor.onDidChangeModel(() => this.onModelChanged()));
    this._register(this.editor.onDidChangeConfiguration(u => {
      if (u.hasChanged(45)) {
        this._isEnabled = this.editor.getOptions().get(45);
        this.foldingEnabled.set(this._isEnabled);
        this.onModelChanged();
      }
      if (u.hasChanged(49)) {
        this.onModelChanged();
      }
      if (u.hasChanged(115) || u.hasChanged(47)) {
        const d = this.editor.getOptions();
        this.foldingDecorationProvider.showFoldingControls = d.get(115);
        this.foldingDecorationProvider.showFoldingHighlights = d.get(47);
        this.triggerFoldingModelChanged();
      }
      if (u.hasChanged(46)) {
        this._useFoldingProviders = this.editor.getOptions().get(46) !== "indentation";
        this.onFoldingStrategyChanged();
      }
      if (u.hasChanged(50)) {
        this._unfoldOnClickAfterEndOfLine = this.editor.getOptions().get(50);
      }
      if (u.hasChanged(48)) {
        this._foldingImportsByDefault = this.editor.getOptions().get(48);
      }
    }));
    this.onModelChanged();
  }
  get limitReporter() {
    return this._foldingLimitReporter;
  }
  saveViewState() {
    const e = this.editor.getModel();
    if (!e || !this._isEnabled || e.isTooLargeForTokenization()) {
      return {};
    }
    if (this.foldingModel) {
      const t = this.foldingModel.getMemento();
      const i = this.rangeProvider ? this.rangeProvider.id : undefined;
      return {
        collapsedRegions: t,
        lineCount: e.getLineCount(),
        provider: i,
        foldedImports: this._currentModelHasFoldedImports
      };
    }
  }
  restoreViewState(e) {
    const t = this.editor.getModel();
    if (!!t && !!this._isEnabled && !t.isTooLargeForTokenization() && !!this.hiddenRangeModel && e && (this._currentModelHasFoldedImports = !!e.foldedImports, e.collapsedRegions && e.collapsedRegions.length > 0 && this.foldingModel)) {
      this._restoringViewState = true;
      try {
        this.foldingModel.applyMemento(e.collapsedRegions);
      } finally {
        this._restoringViewState = false;
      }
    }
  }
  onModelChanged() {
    this.localToDispose.clear();
    const e = this.editor.getModel();
    if (!!this._isEnabled && !!e && !e.isTooLargeForTokenization()) {
      this._currentModelHasFoldedImports = false;
      this.foldingModel = new zvg(e, this.foldingDecorationProvider);
      this.localToDispose.add(this.foldingModel);
      this.hiddenRangeModel = new Yvg(this.foldingModel);
      this.localToDispose.add(this.hiddenRangeModel);
      this.localToDispose.add(this.hiddenRangeModel.onDidChange(t => this.onHiddenRangesChanges(t)));
      this.updateScheduler = new Nv(this.updateDebounceInfo.get(e));
      this.localToDispose.add(this.updateScheduler);
      this.cursorChangedScheduler = new Hu(() => this.revealCursor(), 200);
      this.localToDispose.add(this.cursorChangedScheduler);
      this.localToDispose.add(this.languageFeaturesService.foldingRangeProvider.onDidChange(() => this.onFoldingStrategyChanged()));
      this.localToDispose.add(this.editor.onDidChangeModelLanguageConfiguration(() => this.onFoldingStrategyChanged()));
      this.localToDispose.add(this.editor.onDidChangeModelContent(t => this.onDidChangeModelContent(t)));
      this.localToDispose.add(this.editor.onDidChangeCursorPosition(() => this.onCursorPositionChanged()));
      this.localToDispose.add(this.editor.onMouseDown(t => this.onEditorMouseDown(t)));
      this.localToDispose.add(this.editor.onMouseUp(t => this.onEditorMouseUp(t)));
      this.localToDispose.add({
        dispose: () => {
          if (this.foldingRegionPromise) {
            this.foldingRegionPromise.cancel();
            this.foldingRegionPromise = null;
          }
          this.updateScheduler?.cancel();
          this.updateScheduler = null;
          this.foldingModel = null;
          this.foldingModelPromise = null;
          this.hiddenRangeModel = null;
          this.cursorChangedScheduler = null;
          this.rangeProvider?.dispose();
          this.rangeProvider = null;
        }
      });
      this.triggerFoldingModelChanged();
    }
  }
  onFoldingStrategyChanged() {
    this.rangeProvider?.dispose();
    this.rangeProvider = null;
    this.triggerFoldingModelChanged();
  }
  getRangeProvider(e) {
    if (this.rangeProvider) {
      return this.rangeProvider;
    }
    const t = new fgi(e, this.languageConfigurationService, this._foldingLimitReporter);
    this.rangeProvider = t;
    if (this._useFoldingProviders && this.foldingModel) {
      const i = ECt.getFoldingRangeProviders(this.languageFeaturesService, e);
      if (i.length > 0) {
        this.rangeProvider = new Upi(e, i, () => this.triggerFoldingModelChanged(), this._foldingLimitReporter, t);
      }
    }
    return this.rangeProvider;
  }
  getFoldingModel() {
    return this.foldingModelPromise;
  }
  onDidChangeModelContent(e) {
    this.hiddenRangeModel?.notifyChangeModelContent(e);
    this.triggerFoldingModelChanged();
  }
  triggerFoldingModelChanged() {
    if (this.updateScheduler) {
      if (this.foldingRegionPromise) {
        this.foldingRegionPromise.cancel();
        this.foldingRegionPromise = null;
      }
      this.foldingModelPromise = this.updateScheduler.trigger(() => {
        const e = this.foldingModel;
        if (!e) {
          return null;
        }
        const t = new J_();
        const i = this.getRangeProvider(e.textModel);
        const r = this.foldingRegionPromise = dw(s => i.compute(s));
        return r.then(s => {
          if (s && r === this.foldingRegionPromise) {
            let o;
            if (this._foldingImportsByDefault && !this._currentModelHasFoldedImports) {
              const u = s.setCollapsedAllOfType(qY.Imports.value, true);
              if (u) {
                o = $Se.capture(this.editor);
                this._currentModelHasFoldedImports = u;
              }
            }
            const a = this.editor.getSelections();
            e.update(s, jCA(a));
            this.applyAutoFoldAgentLog(e, e.textModel);
            o?.restore(this.editor);
            const l = this.updateDebounceInfo.update(e.textModel, t.elapsed());
            if (this.updateScheduler) {
              this.updateScheduler.defaultDelay = l;
            }
          }
          return e;
        });
      }).then(undefined, e => {
        Gc(e);
        return null;
      });
    }
  }
  onHiddenRangesChanges(e) {
    if (this.hiddenRangeModel && e.length && !this._restoringViewState) {
      const t = this.editor.getSelections();
      if (t && this.hiddenRangeModel.adjustSelections(t)) {
        this.editor.setSelections(t);
      }
    }
    this.editor.setHiddenAreas(e, this);
  }
  onCursorPositionChanged() {
    if (this.hiddenRangeModel && this.hiddenRangeModel.hasRanges()) {
      this.cursorChangedScheduler.schedule();
    }
  }
  revealCursor() {
    const e = this.getFoldingModel();
    if (e) {
      e.then(t => {
        if (t) {
          const i = this.editor.getSelections();
          if (i && i.length > 0) {
            const r = [];
            for (const s of i) {
              const o = s.selectionStartLineNumber;
              if (this.hiddenRangeModel && this.hiddenRangeModel.isHidden(o)) {
                r.push(...t.getAllRegionsAtLine(o, a => a.isCollapsed && o > a.startLineNumber));
              }
            }
            if (r.length) {
              t.toggleCollapseState(r);
              this.reveal(i[0].getPosition());
            }
          }
        }
      }).then(undefined, Gc);
    }
  }
  onEditorMouseDown(e) {
    this.mouseDownInfo = null;
    if (!this.hiddenRangeModel || !e.target || !e.target.range || !e.event.leftButton && !e.event.middleButton) {
      return;
    }
    const t = e.target.range;
    let i = false;
    switch (e.target.type) {
      case 4:
        {
          const r = e.target.detail;
          const s = e.target.element.offsetLeft;
          if (r.offsetX - s < 4) {
            return;
          }
          i = true;
          break;
        }
      case 7:
        {
          if (this._unfoldOnClickAfterEndOfLine && this.hiddenRangeModel.hasRanges() && !e.target.detail.isAfterLines) {
            break;
          }
          return;
        }
      case 6:
        {
          if (this.hiddenRangeModel.hasRanges()) {
            const r = this.editor.getModel();
            if (r && t.startColumn === r.getLineMaxColumn(t.startLineNumber)) {
              break;
            }
          }
          return;
        }
      default:
        return;
    }
    this.mouseDownInfo = {
      lineNumber: t.startLineNumber,
      iconClicked: i
    };
  }
  onEditorMouseUp(e) {
    const t = this.foldingModel;
    if (!t || !this.mouseDownInfo || !e.target) {
      return;
    }
    const i = this.mouseDownInfo.lineNumber;
    const r = this.mouseDownInfo.iconClicked;
    const s = e.target.range;
    if (!s || s.startLineNumber !== i) {
      return;
    }
    if (r) {
      if (e.target.type !== 4) {
        return;
      }
    } else {
      const a = this.editor.getModel();
      if (!a || s.startColumn !== a.getLineMaxColumn(i)) {
        return;
      }
    }
    const o = t.getRegionAtLine(i);
    if (o && o.startLineNumber === i) {
      const a = o.isCollapsed;
      if (r || a) {
        const l = e.event.altKey;
        let u = [];
        if (l) {
          const d = p => !p.containedBy(o) && !o.containedBy(p);
          const m = t.getRegionsInside(null, d);
          for (const p of m) {
            if (p.isCollapsed) {
              u.push(p);
            }
          }
          if (u.length === 0) {
            u = m;
          }
        } else {
          const d = e.event.middleButton || e.event.shiftKey;
          if (d) {
            for (const m of t.getRegionsInside(o)) {
              if (m.isCollapsed === a) {
                u.push(m);
              }
            }
          }
          if (a || !d || u.length === 0) {
            u.push(o);
          }
        }
        t.toggleCollapseState(u);
        this.reveal({
          lineNumber: i,
          column: 1
        });
      }
    }
  }
  reveal(e) {
    this.editor.revealPositionInCenterIfOutsideViewport(e, 0);
  }
  applyAutoFoldAgentLog(e, t) {
    if (!e || !t) {
      return;
    }
    const i = e.regions;
    const r = [];
    const s = /^\s*#\s*region\b/i;
    const o = /^\s*\/\/\s*#?region\b/i;
    for (let a = 0; a < i.length; a++) {
      if (i.isCollapsed(a)) {
        continue;
      }
      const l = i.getType(a);
      if (l !== undefined && l !== qY.Region.value) {
        continue;
      }
      const u = i.getStartLineNumber(a);
      const d = t.getLineContent(u);
      if (!d.includes("agent log")) {
        continue;
      }
      if (l === qY.Region.value || s.test(d) || o.test(d)) {
        r.push(i.toRegion(a));
      }
    }
    if (r.length) {
      e.toggleCollapseState(r);
    }
  }
};
AJ = ECt = __decorate([__param(1, wi), __param(2, JS), __param(3, ms), __param(4, ene), __param(5, ku), __param(6, $u)], AJ);
BQl = class extends at {
  constructor(n) {
    super();
    this.editor = n;
    this._onDidChange = this._register(new Qe());
    this.onDidChange = this._onDidChange.event;
    this._computed = 0;
    this._limited = false;
  }
  get limit() {
    return this.editor.getOptions().get(49);
  }
  get computed() {
    return this._computed;
  }
  get limited() {
    return this._limited;
  }
  update(n, e) {
    if (n !== this._computed || e !== this._limited) {
      this._computed = n;
      this._limited = e;
      this._onDidChange.fire();
    }
  }
};
mU = class extends vu {
  runEditorCommand(n, e, t) {
    const i = n.get(JS);
    const r = AJ.get(e);
    if (!r) {
      return;
    }
    const s = r.getFoldingModel();
    if (s) {
      this.reportTelemetry(n, e);
      return s.then(o => {
        if (o) {
          this.invoke(r, o, e, t, i);
          const a = e.getSelection();
          if (a) {
            r.reveal(a.getStartPosition());
          }
        }
      });
    }
  }
  getSelectedLines(n) {
    const e = n.getSelections();
    if (e) {
      return e.map(t => t.startLineNumber);
    } else {
      return [];
    }
  }
  getLineNumbers(n, e) {
    if (n && n.selectionLines) {
      return n.selectionLines.map(t => t + 1);
    } else {
      return this.getSelectedLines(e);
    }
  }
  run(n, e) {}
};
sAg = class extends mU {
  constructor() {
    super({
      id: "editor.unfold",
      label: dt(1121, "Unfold"),
      precondition: z9,
      kbOpts: {
        kbExpr: Ci.editorTextFocus,
        primary: 3166,
        mac: {
          primary: 2654
        },
        weight: 100
      },
      metadata: {
        description: "Unfold the content in the editor",
        args: [{
          name: "Unfold editor argument",
          description: `Property-value pairs that can be passed through this argument:
						* 'levels': Number of levels to unfold. If not set, defaults to 1.
						* 'direction': If 'up', unfold given number of levels up otherwise unfolds down.
						* 'selectionLines': Array of the start lines (0-based) of the editor selections to apply the unfold action to. If not set, the active selection(s) will be used.
						`,
          constraint: rAg,
          schema: {
            type: "object",
            properties: {
              levels: {
                type: "number",
                default: 1
              },
              direction: {
                type: "string",
                enum: ["up", "down"],
                default: "down"
              },
              selectionLines: {
                type: "array",
                items: {
                  type: "number"
                }
              }
            }
          }
        }]
      }
    });
  }
  invoke(n, e, t, i) {
    const r = i && i.levels || 1;
    const s = this.getLineNumbers(i, t);
    if (i && i.direction === "up") {
      Qvg(e, false, r, s);
    } else {
      udn(e, false, r, s);
    }
  }
};
oAg = class extends mU {
  constructor() {
    super({
      id: "editor.unfoldRecursively",
      label: dt(1122, "Unfold Recursively"),
      precondition: z9,
      kbOpts: {
        kbExpr: Ci.editorTextFocus,
        primary: Ma(Gm, 2142),
        mac: {
          primary: Ma(Np, 2142)
        },
        weight: 100
      }
    });
  }
  invoke(n, e, t, i) {
    udn(e, false, Number.MAX_VALUE, this.getSelectedLines(t));
  }
};
aAg = class extends mU {
  constructor() {
    super({
      id: "editor.fold",
      label: dt(1123, "Fold"),
      precondition: z9,
      kbOpts: {
        kbExpr: Ci.editorTextFocus,
        primary: 3164,
        mac: {
          primary: 2652
        },
        weight: 100
      },
      metadata: {
        description: "Fold the content in the editor",
        args: [{
          name: "Fold editor argument",
          description: `Property-value pairs that can be passed through this argument:
							* 'levels': Number of levels to fold.
							* 'direction': If 'up', folds given number of levels up otherwise folds down.
							* 'selectionLines': Array of the start lines (0-based) of the editor selections to apply the fold action to. If not set, the active selection(s) will be used.
							If no levels or direction is set, folds the region at the locations or if already collapsed, the first uncollapsed parent instead.
						`,
          constraint: rAg,
          schema: {
            type: "object",
            properties: {
              levels: {
                type: "number"
              },
              direction: {
                type: "string",
                enum: ["up", "down"]
              },
              selectionLines: {
                type: "array",
                items: {
                  type: "number"
                }
              }
            }
          }
        }]
      }
    });
  }
  invoke(n, e, t, i) {
    const r = this.getLineNumbers(i, t);
    const s = i && i.levels;
    const o = i && i.direction;
    if (typeof s != "number" && typeof o != "string") {
      UCA(e, true, r);
    } else if (o === "up") {
      Qvg(e, true, s || 1, r);
    } else {
      udn(e, true, s || 1, r);
    }
  }
};
cAg = class extends mU {
  constructor() {
    super({
      id: "editor.toggleFold",
      label: dt(1124, "Toggle Fold"),
      precondition: z9,
      kbOpts: {
        kbExpr: Ci.editorTextFocus,
        primary: Ma(Gm, 2090),
        mac: {
          primary: Ma(Np, 2090)
        },
        weight: 100
      }
    });
  }
  invoke(n, e, t) {
    const i = this.getSelectedLines(t);
    SQl(e, 1, i);
  }
};
lAg = class extends mU {
  constructor() {
    super({
      id: "editor.foldRecursively",
      label: dt(1125, "Fold Recursively"),
      precondition: z9,
      kbOpts: {
        kbExpr: Ci.editorTextFocus,
        primary: Ma(Gm, 2140),
        mac: {
          primary: Ma(Np, 2140)
        },
        weight: 100
      }
    });
  }
  invoke(n, e, t) {
    const i = this.getSelectedLines(t);
    udn(e, true, Number.MAX_VALUE, i);
  }
};
uAg = class extends mU {
  constructor() {
    super({
      id: "editor.toggleFoldRecursively",
      label: dt(1126, "Toggle Fold Recursively"),
      precondition: z9,
      kbOpts: {
        kbExpr: Ci.editorTextFocus,
        primary: Ma(Gm, 3114),
        mac: {
          primary: Ma(Np, 3114)
        },
        weight: 100
      }
    });
  }
  invoke(n, e, t) {
    const i = this.getSelectedLines(t);
    SQl(e, Number.MAX_VALUE, i);
  }
};
dAg = class extends mU {
  constructor() {
    super({
      id: "editor.foldAllBlockComments",
      label: dt(1127, "Fold All Block Comments"),
      precondition: z9,
      kbOpts: {
        kbExpr: Ci.editorTextFocus,
        primary: Ma(Gm, 2138),
        mac: {
          primary: Ma(Np, 2138)
        },
        weight: 100
      }
    });
  }
  invoke(n, e, t, i, r) {
    if (e.regions.hasTypes()) {
      EQl(e, qY.Comment.value, true);
    } else {
      const s = t.getModel();
      if (!s) {
        return;
      }
      const o = r.getLanguageConfiguration(s.getLanguageId()).comments;
      if (o && o.blockCommentStartToken) {
        const a = new RegExp("^\\s*" + UI(o.blockCommentStartToken));
        kQl(e, a, true);
      }
    }
  }
};
hAg = class extends mU {
  constructor() {
    super({
      id: "editor.foldAllMarkerRegions",
      label: dt(1128, "Fold All Regions"),
      precondition: z9,
      kbOpts: {
        kbExpr: Ci.editorTextFocus,
        primary: Ma(Gm, 2077),
        mac: {
          primary: Ma(Np, 2077)
        },
        weight: 100
      }
    });
  }
  invoke(n, e, t, i, r) {
    if (e.regions.hasTypes()) {
      EQl(e, qY.Region.value, true);
    } else {
      const s = t.getModel();
      if (!s) {
        return;
      }
      const o = r.getLanguageConfiguration(s.getLanguageId()).foldingRules;
      if (o && o.markers && o.markers.start) {
        const a = new RegExp(o.markers.start);
        kQl(e, a, true);
      }
    }
  }
};
mAg = class extends mU {
  constructor() {
    super({
      id: "editor.unfoldAllMarkerRegions",
      label: dt(1129, "Unfold All Regions"),
      precondition: z9,
      kbOpts: {
        kbExpr: Ci.editorTextFocus,
        primary: Ma(Gm, 2078),
        mac: {
          primary: Ma(Np, 2078)
        },
        weight: 100
      }
    });
  }
  invoke(n, e, t, i, r) {
    if (e.regions.hasTypes()) {
      EQl(e, qY.Region.value, false);
    } else {
      const s = t.getModel();
      if (!s) {
        return;
      }
      const o = r.getLanguageConfiguration(s.getLanguageId()).foldingRules;
      if (o && o.markers && o.markers.start) {
        const a = new RegExp(o.markers.start);
        kQl(e, a, false);
      }
    }
  }
};
pAg = class extends mU {
  constructor() {
    super({
      id: "editor.foldAllExcept",
      label: dt(1130, "Fold All Except Selected"),
      precondition: z9,
      kbOpts: {
        kbExpr: Ci.editorTextFocus,
        primary: Ma(Gm, 2136),
        mac: {
          primary: Ma(Np, 2136)
        },
        weight: 100
      }
    });
  }
  invoke(n, e, t) {
    const i = this.getSelectedLines(t);
    jvg(e, true, i);
  }
};
gAg = class extends mU {
  constructor() {
    super({
      id: "editor.unfoldAllExcept",
      label: dt(1131, "Unfold All Except Selected"),
      precondition: z9,
      kbOpts: {
        kbExpr: Ci.editorTextFocus,
        primary: Ma(Gm, 2134),
        mac: {
          primary: Ma(Np, 2134)
        },
        weight: 100
      }
    });
  }
  invoke(n, e, t) {
    const i = this.getSelectedLines(t);
    jvg(e, false, i);
  }
};
fAg = class extends mU {
  constructor() {
    super({
      id: "editor.foldAll",
      label: dt(1132, "Fold All"),
      precondition: z9,
      kbOpts: {
        kbExpr: Ci.editorTextFocus,
        primary: Ma(Gm, 2069),
        mac: {
          primary: Ma(Np, 2069)
        },
        weight: 100
      }
    });
  }
  invoke(n, e, t) {
    udn(e, true);
  }
};
bAg = class extends mU {
  constructor() {
    super({
      id: "editor.unfoldAll",
      label: dt(1133, "Unfold All"),
      precondition: z9,
      kbOpts: {
        kbExpr: Ci.editorTextFocus,
        primary: Ma(Gm, 2088),
        mac: {
          primary: Ma(Np, 2088)
        },
        weight: 100
      }
    });
  }
  invoke(n, e, t) {
    udn(e, false);
  }
};
RQl = class ucd extends mU {
  static {
    this.ID_PREFIX = "editor.foldLevel";
  }
  static {
    this.ID = e => ucd.ID_PREFIX + e;
  }
  getFoldingLevel() {
    return parseInt(this.id.substr(ucd.ID_PREFIX.length));
  }
  invoke(e, t, i) {
    $CA(t, this.getFoldingLevel(), true, this.getSelectedLines(i));
  }
};
vAg = class extends mU {
  constructor() {
    super({
      id: "editor.gotoParentFold",
      label: dt(1134, "Go to Parent Fold"),
      precondition: z9,
      kbOpts: {
        kbExpr: Ci.editorTextFocus,
        weight: 100
      }
    });
  }
  invoke(n, e, t) {
    const i = this.getSelectedLines(t);
    if (i.length > 0) {
      const r = qCA(i[0], e);
      if (r !== null) {
        t.setSelection({
          startLineNumber: r,
          startColumn: 1,
          endLineNumber: r,
          endColumn: 1
        });
      }
    }
  }
};
AAg = class extends mU {
  constructor() {
    super({
      id: "editor.gotoPreviousFold",
      label: dt(1135, "Go to Previous Folding Range"),
      precondition: z9,
      kbOpts: {
        kbExpr: Ci.editorTextFocus,
        weight: 100
      }
    });
  }
  invoke(n, e, t) {
    const i = this.getSelectedLines(t);
    if (i.length > 0) {
      const r = HCA(i[0], e);
      if (r !== null) {
        t.setSelection({
          startLineNumber: r,
          startColumn: 1,
          endLineNumber: r,
          endColumn: 1
        });
      }
    }
  }
};
yAg = class extends mU {
  constructor() {
    super({
      id: "editor.gotoNextFold",
      label: dt(1136, "Go to Next Folding Range"),
      precondition: z9,
      kbOpts: {
        kbExpr: Ci.editorTextFocus,
        weight: 100
      }
    });
  }
  invoke(n, e, t) {
    const i = this.getSelectedLines(t);
    if (i.length > 0) {
      const r = JCA(i[0], e);
      if (r !== null) {
        t.setSelection({
          startLineNumber: r,
          startColumn: 1,
          endLineNumber: r,
          endColumn: 1
        });
      }
    }
  }
};
wAg = class extends mU {
  constructor() {
    super({
      id: "editor.createFoldingRangeFromSelection",
      label: dt(1137, "Create Folding Range from Selection"),
      precondition: z9,
      kbOpts: {
        kbExpr: Ci.editorTextFocus,
        primary: Ma(Gm, 2135),
        mac: {
          primary: Ma(Np, 2135)
        },
        weight: 100
      }
    });
  }
  invoke(n, e, t) {
    const i = [];
    const r = t.getSelections();
    if (r) {
      for (const s of r) {
        let o = s.endLineNumber;
        if (s.endColumn === 1) {
          --o;
        }
        if (o > s.startLineNumber) {
          i.push({
            startLineNumber: s.startLineNumber,
            endLineNumber: o,
            type: undefined,
            isCollapsed: true,
            source: 1
          });
          t.setSelection({
            startLineNumber: s.startLineNumber,
            startColumn: 1,
            endLineNumber: s.startLineNumber,
            endColumn: 1
          });
        }
      }
      if (i.length > 0) {
        i.sort((o, a) => o.startLineNumber - a.startLineNumber);
        const s = Qae.sanitizeAndMerge(e.regions, i, t.getModel()?.getLineCount());
        e.updatePost(Qae.fromFoldRanges(s));
      }
    }
  }
};
_Ag = class extends mU {
  constructor() {
    super({
      id: "editor.removeManualFoldingRanges",
      label: dt(1138, "Remove Manual Folding Ranges"),
      precondition: z9,
      kbOpts: {
        kbExpr: Ci.editorTextFocus,
        primary: Ma(Gm, 2137),
        mac: {
          primary: Ma(Np, 2137)
        },
        weight: 100
      }
    });
  }
  invoke(n, e, t) {
    const i = t.getSelections();
    if (i) {
      const r = [];
      for (const s of i) {
        const {
          startLineNumber: o,
          endLineNumber: a
        } = s;
        r.push(a >= o ? {
          startLineNumber: o,
          endLineNumber: a
        } : {
          endLineNumber: a,
          startLineNumber: o
        });
      }
      e.removeManualRanges(r);
      n.triggerFoldingModelChanged();
    }
  }
};
CAg = class extends mU {
  constructor() {
    super({
      id: "editor.toggleImportFold",
      label: dt(1139, "Toggle Import Fold"),
      alias: "Toggle Import Fold",
      precondition: z9,
      kbOpts: {
        kbExpr: Ci.editorTextFocus,
        weight: 100
      }
    });
  }
  async invoke(n, e) {
    const t = [];
    const i = e.regions;
    for (let r = i.length - 1; r >= 0; r--) {
      if (i.getType(r) === qY.Imports.value) {
        t.push(i.toRegion(r));
      }
    }
    e.toggleCollapseState(t);
    n.triggerFoldingModelChanged();
  }
};
Mg(AJ.ID, AJ, 0);
ac(sAg);
ac(oAg);
ac(aAg);
ac(lAg);
ac(uAg);
ac(fAg);
ac(bAg);
ac(dAg);
ac(hAg);
ac(mAg);
ac(pAg);
ac(gAg);
ac(cAg);
ac(vAg);
ac(AAg);
ac(yAg);
ac(wAg);
ac(_Ag);
ac(CAg);
for (let n = 1; n <= 7; n++) {
  XiA(new RQl({
    id: RQl.ID(n),
    label: dt(1140, "Fold Level {0}", n),
    precondition: z9,
    kbOpts: {
      kbExpr: Ci.editorTextFocus,
      primary: Ma(Gm, 21 + n | 2048),
      mac: {
        primary: Ma(Np, 21 + n | 2048)
      },
      weight: 100
    }
  }));
}
Ss.registerCommand("_executeFoldingRangeProvider", async function (n, ...e) {
  const [t] = e;
  if (!(t instanceof je)) {
    throw uw();
  }
  const i = n.get($u);
  const r = n.get(Il).getModel(t);
  if (!r) {
    throw uw();
  }
  const s = n.get(Fn);
  if (!s.getValue("editor.folding", {
    resource: t
  })) {
    return [];
  }
  const o = n.get(JS);
  const a = s.getValue("editor.foldingStrategy", {
    resource: t
  });
  const l = {
    get limit() {
      return s.getValue("editor.foldingMaximumRegions", {
        resource: t
      });
    },
    update: (g, f) => {}
  };
  const u = new fgi(r, o, l);
  let d = u;
  if (a !== "indentation") {
    const g = AJ.getFoldingRangeProviders(i, r);
    if (g.length) {
      d = new Upi(r, g, () => {}, l, u);
    }
  }
  const m = await d.compute(Cs.None);
  const p = [];
  try {
    if (m) {
      for (let g = 0; g < m.length; g++) {
        const f = m.getType(g);
        p.push({
          start: m.getStartLineNumber(g),
          end: m.getEndLineNumber(g),
          kind: f ? qY.fromValue(f) : undefined
        });
      }
    }
    return p;
  } finally {
    d.dispose();
  }
});

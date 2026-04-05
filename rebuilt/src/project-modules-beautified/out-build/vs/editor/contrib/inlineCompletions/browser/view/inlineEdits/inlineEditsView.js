"use strict";

// Module: out-build/vs/editor/contrib/inlineCompletions/browser/view/inlineEdits/inlineEditsView.js
// Offset: 25550740 (bundle byte offset)
// Size: 8859 bytes
Nbe();
_s();
yn();
rt();
Uc();
Wt();
V$();
Ix();
ts();
EW();
Kbe();
WY();
bv();
hkA();
_dn();
mkA();
pkA();
gkA();
fkA();
bkA();
vkA();
ykA();
t$e();
wkA();
fua = Iwg = class extends at {
  constructor(e, t, i, r, s, o) {
    super();
    this._editor = e;
    this._host = t;
    this._model = i;
    this._ghostTextIndicator = r;
    this._focusIsInMenu = s;
    this._instantiationService = o;
    this._tabAction = Ro(a => this._model.read(a)?.tabAction.read(a) ?? sV.Inactive);
    this._uiState = Ro(this, a => {
      const l = this._model.read(a);
      if (!l || !this._constructorDone.read(a)) {
        return;
      }
      l.handleInlineEditShown();
      const u = l.inlineEdit;
      let d = zH.fromEdit(u.edit);
      let m = u.edit.apply(u.originalText);
      let p = a5o(d, u.originalText, new cKe(m));
      const g = u.originalText.lineRange.intersect(u.originalLineRange.join(rh.ofLength(u.originalLineRange.startLineNumber, u.lineEdit.newLines.length)));
      let f = this.determineRenderState(l, a, p, new cKe(m), g);
      if (!f) {
        l.abort(`unable to determine view: tried to render ${this._previousView?.view}`);
        return;
      }
      if (f.kind === "sideBySide") {
        const w = okA(m, u.modifiedLineRange);
        m = w.applyToString(m);
        d = rkA(d, w);
        p = a5o(d, u.originalText, new cKe(m));
      }
      this._previewTextModel.setLanguage(this._editor.getModel().getLanguageId());
      if (this._previewTextModel.getValue() !== m) {
        this._previewTextModel.setValue(m);
      }
      if (l.showCollapsed.read(a) && !this._indicator.read(a)?.isHoverVisible.read(a)) {
        f = {
          kind: "collapsed"
        };
      }
      return {
        state: f,
        diff: p,
        edit: u,
        newText: m,
        newTextLineCount: u.modifiedLineRange.length,
        originalDisplayRange: g
      };
    });
    this._indicatorCyclicDependencyCircuitBreaker = Ua(this, false);
    this._indicator = Ite(this, (a, l) => {
      if (!this._indicatorCyclicDependencyCircuitBreaker.read(a)) {
        return;
      }
      const u = uF({
        owner: this,
        equalsFn: Ngt(jsh())
      }, m => {
        const p = this._ghostTextIndicator.read(m);
        if (p) {
          return p.lineRange;
        }
        const g = this._uiState.read(m);
        if (g?.state?.kind === "insertionMultiLine") {
          return this._insertion.originalLines.read(m);
        } else {
          return g?.originalDisplayRange;
        }
      });
      const d = Ro(this, m => {
        const p = this._model.read(m);
        if (p) {
          return p;
        }
        const g = this._ghostTextIndicator.read(m);
        if (g) {
          return g.model;
        } else {
          return p;
        }
      });
      return l.add(this._instantiationService.createInstance(oua, this._editorObs, u, this._gutterIndicatorOffset, this._host, d, this._inlineEditsIsHovered, this._focusIsInMenu));
    });
    this._inlineEditsIsHovered = Ro(this, a => this._sideBySide.isHovered.read(a) || this._wordReplacementViews.read(a).some(l => l.isHovered.read(a)) || this._deletion.isHovered.read(a) || this._inlineDiffView.isHovered.read(a) || this._lineReplacementView.isHovered.read(a) || this._insertion.isHovered.read(a));
    this._gutterIndicatorOffset = Ro(this, a => this._uiState.read(a)?.state?.kind === "insertionMultiLine" ? this._insertion.startLineOffset.read(a) : 0);
    this._editorObs = HB(this._editor);
    this._constructorDone = Ua(this, false);
    this._previewTextModel = this._register(this._instantiationService.createInstance(N6, "", this._editor.getModel().getLanguageId(), {
      ...N6.DEFAULT_CREATION_OPTIONS,
      bracketPairColorizationOptions: {
        enabled: true,
        independentColorPoolPerBracketType: false
      }
    }, null, false, false));
    this._sideBySide = this._register(this._instantiationService.createInstance(Wgi, this._editor, this._model.map(a => a?.inlineEdit), this._previewTextModel, this._uiState.map(a => a && a.state?.kind === "sideBySide" ? {
      newTextLineCount: a.newTextLineCount,
      originalDisplayRange: a.originalDisplayRange
    } : undefined), this._tabAction));
    this._deletion = this._register(this._instantiationService.createInstance(wwg, this._editor, this._model.map(a => a?.inlineEdit), this._uiState.map(a => a && a.state?.kind === "deletion" ? {
      originalRange: a.state.originalRange,
      deletions: a.state.deletions
    } : undefined), this._tabAction));
    this._insertion = this._register(this._instantiationService.createInstance(hua, this._editor, this._uiState.map(a => a && a.state?.kind === "insertionMultiLine" ? {
      lineNumber: a.state.lineNumber,
      startColumn: a.state.column,
      text: a.state.text
    } : undefined), this._tabAction));
    this._inlineCollapsedView = this._register(this._instantiationService.createInstance(vwg, this._editor, this._model.map((a, l) => this._uiState.read(l)?.state?.kind === "collapsed" ? a?.inlineEdit : undefined)));
    this._inlineDiffViewState = Ro(this, a => {
      const l = this._uiState.read(a);
      if (!!l && !!l.state && l.state.kind !== "wordReplacements" && l.state.kind !== "lineReplacement" && l.state.kind !== "insertionMultiLine" && l.state.kind !== "collapsed") {
        return {
          modifiedText: new cKe(l.newText),
          diff: l.diff,
          mode: l.state.kind,
          modifiedCodeEditor: this._sideBySide.previewEditor
        };
      }
    });
    this._inlineDiffView = this._register(new kwg(this._editor, this._inlineDiffViewState, this._previewTextModel));
    this._useCodeShifting = this._editorObs.getOption(64).map(a => a.edits.allowCodeShifting);
    this._renderSideBySide = this._editorObs.getOption(64).map(a => a.edits.renderSideBySide);
    this._useMultiLineGhostText = this._editorObs.getOption(64).map(a => a.edits.useMultiLineGhostText);
    this._wordReplacementViews = jFn(this, this._uiState.map(a => a?.state?.kind === "wordReplacements" ? a.state.replacements : []), (a, l) => l.add(this._instantiationService.createInstance(RCt, this._editorObs, a, this._tabAction)));
    this._lineReplacementView = this._register(this._instantiationService.createInstance(mua, this._editorObs, this._uiState.map(a => a?.state?.kind === "lineReplacement" ? {
      originalRange: a.state.originalRange,
      modifiedRange: a.state.modifiedRange,
      modifiedLines: a.state.modifiedLines,
      replacements: a.state.replacements
    } : undefined), this._tabAction));
    this._register(M0((a, l) => {
      const u = this._model.read(a);
      if (u) {
        l.add(In.any(this._sideBySide.onDidClick, this._deletion.onDidClick, this._lineReplacementView.onDidClick, this._insertion.onDidClick, ...this._wordReplacementViews.read(a).map(d => d.onDidClick), this._inlineDiffView.onDidClick)(d => {
          if (this._viewHasBeenShownLongerThan(350)) {
            d.preventDefault();
            u.accept();
          }
        }));
      }
    }));
    this._indicator.recomputeInitiallyAndOnChange(this._store);
    this._wordReplacementViews.recomputeInitiallyAndOnChange(this._store);
    this._indicatorCyclicDependencyCircuitBreaker.set(true, undefined);
    this._constructorDone.set(true, undefined);
  }
  getCacheId(e) {
    const t = e.inlineEdit;
    if (this._host.get()?.inPartialAcceptFlow.get()) {
      return `${t.inlineCompletion.id}_${t.edit.edits.map(i => i.range.toString() + i.text).join(",")}`;
    } else {
      return t.inlineCompletion.id;
    }
  }
  determineView(e, t, i, r, s) {
    const o = e.inlineEdit;
    const a = this._previousView?.id === this.getCacheId(e);
    const l = this._previousView?.editorWidth !== this._editorObs.layoutInfoWidth.read(t) && (this._previousView?.view === "sideBySide" || this._previousView?.view === "lineReplacement");
    if (a && !l) {
      return this._previousView.view;
    }
    const u = i.flatMap(A => A.innerChanges ?? []);
    const d = u.length === 1;
    if (d && this._useCodeShifting.read(t) !== "never" && _kA(i, o.cursorPosition)) {
      return "insertionInline";
    }
    if (u.map(A => ({
      original: o.originalText.getValueOfRange(A.originalRange),
      modified: r.getValueOfRange(A.modifiedRange)
    })).every(({
      original: A,
      modified: w
    }) => w.trim() === "" && A.length > 0 && (A.length > w.length || A.trim() !== ""))) {
      return "deletion";
    }
    if (CkA(i) && this._useMultiLineGhostText.read(t) && this._useCodeShifting.read(t) === "always") {
      return "insertionMultiLine";
    }
    const p = o.originalLineRange.length;
    const g = o.modifiedLineRange.length;
    if (u.every(A => YN.ofRange(A.originalRange).columnCount < RCt.MAX_LENGTH && YN.ofRange(A.modifiedRange).columnCount < RCt.MAX_LENGTH) && d && p === 1 && g === 1 && (!u.some(A => A.originalRange.isEmpty()) || !xwg(u.map(A => new cI(A.originalRange, "")), o.originalText).some(A => A.range.isEmpty() && YN.ofRange(A.range).columnCount < RCt.MAX_LENGTH))) {
      return "wordReplacements";
    } else if (p > 0 && g > 0) {
      if (this._renderSideBySide.read(t) !== "never" && Wgi.fitsInsideViewport(this._editor, this._previewTextModel, o, s, t)) {
        return "sideBySide";
      } else {
        return "lineReplacement";
      }
    } else {
      return "sideBySide";
    }
  }
  determineRenderState(e, t, i, r, s) {
    const o = e.inlineEdit;
    const a = this.determineView(e, t, i, r, s);
    this._previousView = {
      id: this.getCacheId(e),
      view: a,
      editorWidth: this._editor.getLayoutInfo().width,
      timestamp: Date.now()
    };
    switch (a) {
      case "insertionInline":
        return {
          kind: "insertionInline"
        };
      case "sideBySide":
        return {
          kind: "sideBySide"
        };
      case "collapsed":
        return {
          kind: "collapsed"
        };
    }
    const l = i.flatMap(d => d.innerChanges ?? []);
    if (a === "deletion") {
      return {
        kind: "deletion",
        originalRange: o.originalLineRange,
        deletions: l.map(d => d.originalRange)
      };
    }
    if (a === "insertionMultiLine") {
      const d = l[0];
      return {
        kind: "insertionMultiLine",
        lineNumber: d.originalRange.startLineNumber,
        column: d.originalRange.startColumn,
        text: r.getValueOfRange(d.modifiedRange)
      };
    }
    const u = l.map(d => new cI(d.originalRange, r.getValueOfRange(d.modifiedRange)));
    if (u.length !== 0) {
      if (a === "wordReplacements") {
        let d = SkA(u, o.originalText);
        if (d.some(m => m.range.isEmpty())) {
          d = xwg(u, o.originalText);
        }
        return {
          kind: "wordReplacements",
          replacements: d
        };
      }
      if (a === "lineReplacement") {
        return {
          kind: "lineReplacement",
          originalRange: o.originalLineRange,
          modifiedRange: o.modifiedLineRange,
          modifiedLines: o.modifiedLineRange.mapToLineArray(d => r.getLineAt(d)),
          replacements: l.map(d => ({
            originalRange: d.originalRange,
            modifiedRange: d.modifiedRange
          }))
        };
      }
    }
  }
  _viewHasBeenShownLongerThan(e) {
    const t = this._previousView?.timestamp;
    if (!t) {
      throw new _m("viewHasBeenShownLongThan called before a view has been shown");
    }
    return Date.now() - t >= e;
  }
};
fua = Iwg = __decorate([__param(5, ln)], fua);

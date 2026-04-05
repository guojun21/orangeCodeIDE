"use strict";

// Module: out-build/vs/editor/contrib/find/browser/findController.js
// Offset: 25198636 (bundle byte offset)
// Size: 17069 bytes
vr();
rt();
oa();
Cu();
az();
Qh();
xw();
YUe();
PCA();
wla();
Tla();
Ht();
dr();
Kf();
si();
pl();
ka();
So();
Kl();
kr();
Io();
Id();
yn();
MCA();
FCA();
Mvg = 524288;
(function (n) {
  n[n.NoFocusChange = 0] = "NoFocusChange";
  n[n.FocusFindInput = 1] = "FocusFindInput";
  n[n.FocusReplaceInput = 2] = "FocusReplaceInput";
})(Fvg ||= {});
G3 = class extends at {
  static {
    AQl = this;
  }
  static {
    this.ID = "editor.contrib.findController";
  }
  get editor() {
    return this._editor;
  }
  static get(e) {
    return e.getContribution(AQl.ID);
  }
  constructor(e, t, i, r, s, o) {
    super();
    this._onDidChangeState = new Qe();
    this.onDidChangeState = this._onDidChangeState.event;
    this._editor = e;
    this._findWidgetVisible = hNe.bindTo(t);
    this._contextKeyService = t;
    this._storageService = i;
    this._clipboardService = r;
    this._notificationService = s;
    this._hoverService = o;
    this._updateHistoryDelayer = new Nv(500);
    this._state = this._register(new pgi());
    this.loadQueryState();
    this._register(this._state.onFindReplaceStateChange(a => this._onStateChanged(a)));
    this._model = null;
    this._register(this._editor.onDidChangeModel(() => {
      const a = this._editor.getModel() && this._state.isRevealed;
      this.disposeModel();
      this._state.change({
        searchScope: null,
        matchCase: this._storageService.getBoolean("editor.matchCase", 1, false),
        wholeWord: this._storageService.getBoolean("editor.wholeWord", 1, false),
        isRegex: this._storageService.getBoolean("editor.isRegex", 1, false),
        preserveCase: this._storageService.getBoolean("editor.preserveCase", 1, false)
      }, false);
      if (a) {
        this._start({
          forceRevealReplace: false,
          seedSearchStringFromSelection: "none",
          seedSearchStringFromNonEmptySelection: false,
          seedSearchStringFromGlobalClipboard: false,
          shouldFocus: 0,
          shouldAnimate: false,
          updateSearchScope: false,
          loop: this._editor.getOption(43).loop
        });
      }
    }));
    this._register(this._state.onFindReplaceStateChange(a => this._onDidChangeState.fire(a)));
  }
  dispose() {
    this.disposeModel();
    super.dispose();
  }
  disposeModel() {
    if (this._model) {
      this._model.dispose();
      this._model = null;
    }
  }
  _onStateChanged(e) {
    this.saveQueryState(e);
    if (e.isRevealed) {
      if (this._state.isRevealed) {
        this._findWidgetVisible.set(true);
      } else {
        this._findWidgetVisible.reset();
        this.disposeModel();
      }
    }
    if (e.searchString) {
      this.setGlobalBufferTerm(this._state.searchString);
    }
  }
  saveQueryState(e) {
    if (e.isRegex) {
      this._storageService.store("editor.isRegex", this._state.actualIsRegex, 1, 1);
    }
    if (e.wholeWord) {
      this._storageService.store("editor.wholeWord", this._state.actualWholeWord, 1, 1);
    }
    if (e.matchCase) {
      this._storageService.store("editor.matchCase", this._state.actualMatchCase, 1, 1);
    }
    if (e.preserveCase) {
      this._storageService.store("editor.preserveCase", this._state.actualPreserveCase, 1, 1);
    }
  }
  loadQueryState() {
    this._state.change({
      matchCase: this._storageService.getBoolean("editor.matchCase", 1, this._state.matchCase),
      wholeWord: this._storageService.getBoolean("editor.wholeWord", 1, this._state.wholeWord),
      isRegex: this._storageService.getBoolean("editor.isRegex", 1, this._state.isRegex),
      preserveCase: this._storageService.getBoolean("editor.preserveCase", 1, this._state.preserveCase)
    }, false);
  }
  isFindInputFocused() {
    return !!hgi.getValue(this._contextKeyService);
  }
  getState() {
    return this._state;
  }
  closeFindWidget() {
    this._state.change({
      isRevealed: false,
      searchScope: null
    }, false);
    this._editor.focus();
  }
  toggleCaseSensitive() {
    this._state.change({
      matchCase: !this._state.matchCase
    }, false);
    if (!this._state.isRevealed) {
      this.highlightFindOptions();
    }
  }
  toggleWholeWords() {
    this._state.change({
      wholeWord: !this._state.wholeWord
    }, false);
    if (!this._state.isRevealed) {
      this.highlightFindOptions();
    }
  }
  toggleRegex() {
    this._state.change({
      isRegex: !this._state.isRegex
    }, false);
    if (!this._state.isRevealed) {
      this.highlightFindOptions();
    }
  }
  togglePreserveCase() {
    this._state.change({
      preserveCase: !this._state.preserveCase
    }, false);
    if (!this._state.isRevealed) {
      this.highlightFindOptions();
    }
  }
  toggleSearchScope() {
    if (this._state.searchScope) {
      this._state.change({
        searchScope: null
      }, true);
    } else if (this._editor.hasModel()) {
      let e = this._editor.getSelections();
      e = e.map(t => {
        if (t.endColumn === 1 && t.endLineNumber > t.startLineNumber) {
          t = t.setEndPosition(t.endLineNumber - 1, this._editor.getModel().getLineMaxColumn(t.endLineNumber - 1));
        }
        if (t.isEmpty()) {
          return null;
        } else {
          return t;
        }
      }).filter(t => !!t);
      if (e.length) {
        this._state.change({
          searchScope: e
        }, true);
      }
    }
  }
  setSearchString(e) {
    if (this._state.isRegex) {
      e = UI(e);
    }
    this._state.change({
      searchString: e
    }, false);
  }
  highlightFindOptions(e = false) {}
  async _start(e, t) {
    this.disposeModel();
    if (!this._editor.hasModel()) {
      return;
    }
    const i = {
      ...t,
      isRevealed: true
    };
    if (e.seedSearchStringFromSelection === "single") {
      const r = cdn(this._editor, e.seedSearchStringFromSelection, e.seedSearchStringFromNonEmptySelection);
      if (r) {
        if (this._state.isRegex) {
          i.searchString = UI(r);
        } else {
          i.searchString = r;
        }
      }
    } else if (e.seedSearchStringFromSelection === "multiple" && !e.updateSearchScope) {
      const r = cdn(this._editor, e.seedSearchStringFromSelection);
      if (r) {
        i.searchString = r;
      }
    }
    if (!i.searchString && e.seedSearchStringFromGlobalClipboard) {
      const r = await this.getGlobalBufferTerm();
      if (!this._editor.hasModel()) {
        return;
      }
      if (r) {
        i.searchString = r;
      }
    }
    if (e.forceRevealReplace || i.isReplaceRevealed) {
      i.isReplaceRevealed = true;
    } else if (!this._findWidgetVisible.get()) {
      i.isReplaceRevealed = false;
    }
    if (e.updateSearchScope) {
      const r = this._editor.getSelections();
      if (r.some(s => !s.isEmpty())) {
        i.searchScope = r;
      }
    }
    i.loop = e.loop;
    this._state.change(i, false);
    this._model ||= new uvg(this._editor, this._state);
  }
  start(e, t) {
    return this._start(e, t);
  }
  moveToNextMatch() {
    if (this._model) {
      this._model.moveToNextMatch();
      return true;
    } else {
      return false;
    }
  }
  moveToPrevMatch() {
    if (this._model) {
      this._model.moveToPrevMatch();
      return true;
    } else {
      return false;
    }
  }
  goToMatch(e) {
    if (this._model) {
      this._model.moveToMatch(e);
      return true;
    } else {
      return false;
    }
  }
  replace() {
    if (this._model) {
      this._model.replace();
      return true;
    } else {
      return false;
    }
  }
  replaceAll() {
    if (this._model) {
      if (this._editor.getModel()?.isTooLargeForHeapOperation()) {
        this._notificationService.warn(_(1078, null));
        return false;
      } else {
        this._model.replaceAll();
        return true;
      }
    } else {
      return false;
    }
  }
  selectAllMatches() {
    if (this._model) {
      this._model.selectAllMatches();
      this._editor.focus();
      return true;
    } else {
      return false;
    }
  }
  async getGlobalBufferTerm() {
    if (this._editor.getOption(43).globalFindClipboard && this._editor.hasModel() && !this._editor.getModel().isTooLargeForSyncing()) {
      return this._clipboardService.readFindText();
    } else {
      return "";
    }
  }
  setGlobalBufferTerm(e) {
    if (this._editor.getOption(43).globalFindClipboard && this._editor.hasModel() && !this._editor.getModel().isTooLargeForSyncing()) {
      this._clipboardService.writeFindText(e);
    }
  }
};
G3 = AQl = __decorate([__param(1, wi), __param(2, Hi), __param(3, jm), __param(4, ms), __param(5, Kc)], G3);
ldn = class extends G3 {
  constructor(e, t, i, r, s, o, a, l, u) {
    super(e, i, a, l, o, u);
    this._contextViewService = t;
    this._keybindingService = r;
    this._themeService = s;
    this._onWidgetHeightChanged = new Qe();
    this.onWidgetHeightChanged = this._onWidgetHeightChanged.event;
    this._widget = null;
    this._findOptionsWidget = null;
    this._findWidgetSearchHistory = Ila.getOrCreate(a);
    this._replaceWidgetHistory = Dla.getOrCreate(a);
  }
  async _start(e, t) {
    if (!this._widget) {
      this._createFindWidget();
    }
    const i = this._editor.getSelection();
    let r = false;
    switch (this._editor.getOption(43).autoFindInSelection) {
      case "always":
        r = true;
        break;
      case "never":
        r = false;
        break;
      case "multiline":
        {
          r = !!i && i.startLineNumber !== i.endLineNumber;
          break;
        }
      default:
        break;
    }
    e.updateSearchScope = e.updateSearchScope || r;
    await super._start(e, t);
    if (this._widget) {
      if (e.shouldFocus === 2) {
        this._widget.focusReplaceInput();
      } else if (e.shouldFocus === 1) {
        this._widget.focusFindInput();
      }
    }
  }
  focusFindInputWithoutSelecting() {
    if (this._widget) {
      this._widget.focusFindInputWithoutSelecting();
    }
  }
  isActive() {
    return this._widget?.isActive() ?? false;
  }
  getWidgetHeight() {
    if (this._state.isRevealed) {
      return this._widget?.getHeight();
    }
  }
  highlightFindOptions(e = false) {
    if (!this._widget) {
      this._createFindWidget();
    }
    if (this._state.isRevealed && !e) {
      this._widget.highlightFindOptions();
    } else {
      this._findOptionsWidget.highlightFindOptions();
    }
  }
  _createFindWidget() {
    this._widget = this._register(new Nvg(this._editor, this, this._state, this._contextViewService, this._keybindingService, this._contextKeyService, this._themeService, this._storageService, this._notificationService, this._hoverService, this._findWidgetSearchHistory, this._replaceWidgetHistory, this._onWidgetHeightChanged.fire.bind(this._onWidgetHeightChanged)));
    this._findOptionsWidget = this._register(new dvg(this._editor, this._state, this._keybindingService));
  }
  saveViewState() {
    return this._widget?.getViewState();
  }
  restoreViewState(e) {
    this._widget?.setViewState(e);
  }
};
ldn = __decorate([__param(1, sy), __param(2, wi), __param(3, mo), __param(4, bo), __param(5, ms), __param(6, Hi), __param(7, jm), __param(8, Kc)], ldn);
yQl = nch(new Dkc({
  id: bE.StartFindAction,
  label: dt(1085, "Find"),
  precondition: Ee.or(Ci.focus, Ee.has("editorIsOpen"), Ee.has("activeEditorIsReviewChanges")),
  kbOpts: {
    kbExpr: Ee.or(Ci.focus, Ee.has("activeEditorIsReviewChanges")),
    primary: 2084,
    weight: 100
  },
  menuOpts: {
    menuId: st.MenubarEditMenu,
    group: "3_find",
    title: _(1079, null),
    order: 1
  }
}));
yQl.addImplementation(0, (n, e, t) => {
  const i = G3.get(e);
  if (i) {
    return i.start({
      forceRevealReplace: false,
      seedSearchStringFromSelection: e.getOption(43).seedSearchStringFromSelection !== "never" ? "single" : "none",
      seedSearchStringFromNonEmptySelection: e.getOption(43).seedSearchStringFromSelection === "selection",
      seedSearchStringFromGlobalClipboard: e.getOption(43).globalFindClipboard,
      shouldFocus: 1,
      shouldAnimate: true,
      updateSearchScope: false,
      loop: e.getOption(43).loop
    });
  } else {
    return false;
  }
});
Ovg = {
  description: "Open a new In-Editor Find Widget.",
  args: [{
    name: "Open a new In-Editor Find Widget args",
    schema: {
      properties: {
        searchString: {
          type: "string"
        },
        replaceString: {
          type: "string"
        },
        isRegex: {
          type: "boolean"
        },
        matchWholeWord: {
          type: "boolean"
        },
        isCaseSensitive: {
          type: "boolean"
        },
        preserveCase: {
          type: "boolean"
        },
        findInSelection: {
          type: "boolean"
        }
      }
    }
  }]
};
Uvg = class extends vu {
  constructor() {
    super({
      id: bE.StartFindWithArgs,
      label: dt(1086, "Find with Arguments"),
      precondition: undefined,
      kbOpts: {
        kbExpr: null,
        primary: 0,
        weight: 100
      },
      metadata: Ovg
    });
  }
  async run(n, e, t) {
    const i = G3.get(e);
    if (i) {
      const r = t ? {
        searchString: t.searchString,
        replaceString: t.replaceString,
        isReplaceRevealed: t.replaceString !== undefined,
        isRegex: t.isRegex,
        wholeWord: t.matchWholeWord,
        matchCase: t.isCaseSensitive,
        preserveCase: t.preserveCase
      } : {};
      await i.start({
        forceRevealReplace: false,
        seedSearchStringFromSelection: i.getState().searchString.length === 0 && e.getOption(43).seedSearchStringFromSelection !== "never" ? "single" : "none",
        seedSearchStringFromNonEmptySelection: e.getOption(43).seedSearchStringFromSelection === "selection",
        seedSearchStringFromGlobalClipboard: true,
        shouldFocus: 1,
        shouldAnimate: true,
        updateSearchScope: t?.findInSelection || false,
        loop: e.getOption(43).loop
      }, r);
      i.setGlobalBufferTerm(i.getState().searchString);
    }
  }
};
$vg = class extends vu {
  constructor() {
    super({
      id: bE.StartFindWithSelection,
      label: dt(1087, "Find with Selection"),
      precondition: undefined,
      kbOpts: {
        kbExpr: null,
        primary: 0,
        mac: {
          primary: 2083
        },
        weight: 100
      }
    });
  }
  async run(n, e) {
    const t = G3.get(e);
    if (t) {
      await t.start({
        forceRevealReplace: false,
        seedSearchStringFromSelection: "multiple",
        seedSearchStringFromNonEmptySelection: false,
        seedSearchStringFromGlobalClipboard: false,
        shouldFocus: 0,
        shouldAnimate: true,
        updateSearchScope: false,
        loop: e.getOption(43).loop
      });
      t.setGlobalBufferTerm(t.getState().searchString);
    }
  }
};
wQl = class extends vu {
  async run(n, e) {
    const t = G3.get(e);
    if (t && !this._run(t)) {
      await t.start({
        forceRevealReplace: false,
        seedSearchStringFromSelection: t.getState().searchString.length === 0 && e.getOption(43).seedSearchStringFromSelection !== "never" ? "single" : "none",
        seedSearchStringFromNonEmptySelection: e.getOption(43).seedSearchStringFromSelection === "selection",
        seedSearchStringFromGlobalClipboard: true,
        shouldFocus: 0,
        shouldAnimate: true,
        updateSearchScope: false,
        loop: e.getOption(43).loop
      });
      this._run(t);
    }
  }
};
qvg = class extends wQl {
  constructor() {
    super({
      id: bE.NextMatchFindAction,
      label: dt(1088, "Find Next"),
      precondition: undefined,
      kbOpts: [{
        kbExpr: Ee.or(Ci.focus, Ee.has("activeEditorIsReviewChanges")),
        primary: 61,
        mac: {
          primary: 2085,
          secondary: [61]
        },
        weight: 100
      }, {
        kbExpr: Ee.and(Ci.focus, hgi),
        primary: 3,
        weight: 100
      }]
    });
  }
  _run(n) {
    if (n.moveToNextMatch()) {
      n.editor.pushUndoStop();
      return true;
    } else {
      return false;
    }
  }
};
Hvg = class extends wQl {
  constructor() {
    super({
      id: bE.PreviousMatchFindAction,
      label: dt(1089, "Find Previous"),
      precondition: undefined,
      kbOpts: [{
        kbExpr: Ee.or(Ci.focus, Ee.has("activeEditorIsReviewChanges")),
        primary: 1085,
        mac: {
          primary: 3109,
          secondary: [1085]
        },
        weight: 100
      }, {
        kbExpr: Ee.and(Ci.focus, hgi),
        primary: 1027,
        weight: 100
      }]
    });
  }
  _run(n) {
    return n.moveToPrevMatch();
  }
};
Jvg = class extends vu {
  constructor() {
    super({
      id: bE.GoToMatchFindAction,
      label: dt(1090, "Go to Match..."),
      precondition: hNe
    });
    this._highlightDecorations = [];
  }
  run(n, e, t) {
    const i = G3.get(e);
    if (!i) {
      return;
    }
    const r = i.getState().matchesCount;
    if (r < 1) {
      n.get(ms).notify({
        severity: Rs.Warning,
        message: _(1080, null)
      });
      return;
    }
    const s = n.get(ha);
    const o = new Ut();
    const a = o.add(s.createInputBox());
    a.placeholder = _(1081, null, r);
    const l = d => {
      const m = parseInt(d);
      if (isNaN(m)) {
        return;
      }
      const p = i.getState().matchesCount;
      if (m > 0 && m <= p) {
        return m - 1;
      }
      if (m < 0 && m >= -p) {
        return p + m;
      }
    };
    const u = d => {
      const m = l(d);
      if (typeof m == "number") {
        a.validationMessage = undefined;
        i.goToMatch(m);
        const p = i.getState().currentMatch;
        if (p) {
          this.addDecorations(e, p);
        }
      } else {
        a.validationMessage = _(1082, null, i.getState().matchesCount);
        this.clearDecorations(e);
      }
    };
    o.add(a.onDidChangeValue(d => {
      u(d);
    }));
    o.add(a.onDidAccept(() => {
      const d = l(a.value);
      if (typeof d == "number") {
        i.goToMatch(d);
        a.hide();
      } else {
        a.validationMessage = _(1083, null, i.getState().matchesCount);
      }
    }));
    o.add(a.onDidHide(() => {
      this.clearDecorations(e);
      o.dispose();
    }));
    a.show();
  }
  clearDecorations(n) {
    n.changeDecorations(e => {
      this._highlightDecorations = e.deltaDecorations(this._highlightDecorations, []);
    });
  }
  addDecorations(n, e) {
    n.changeDecorations(t => {
      this._highlightDecorations = t.deltaDecorations(this._highlightDecorations, [{
        range: e,
        options: {
          description: "find-match-quick-access-range-highlight",
          className: "rangeHighlight",
          isWholeLine: true
        }
      }, {
        range: e,
        options: {
          description: "find-match-quick-access-range-highlight-overview",
          overviewRuler: {
            color: kC(fEc),
            position: Tx.Full
          }
        }
      }]);
    });
  }
};
_Ql = class extends vu {
  async run(n, e) {
    const t = G3.get(e);
    if (!t) {
      return;
    }
    const i = cdn(e, "single", false);
    if (i) {
      t.setSearchString(i);
    }
    if (!this._run(t)) {
      await t.start({
        forceRevealReplace: false,
        seedSearchStringFromSelection: "none",
        seedSearchStringFromNonEmptySelection: false,
        seedSearchStringFromGlobalClipboard: false,
        shouldFocus: 0,
        shouldAnimate: true,
        updateSearchScope: false,
        loop: e.getOption(43).loop
      });
      this._run(t);
    }
  }
};
Gvg = class extends _Ql {
  constructor() {
    super({
      id: bE.NextSelectionMatchFindAction,
      label: dt(1091, "Find Next Selection"),
      precondition: undefined,
      kbOpts: {
        kbExpr: Ci.focus,
        primary: 2109,
        weight: 100
      }
    });
  }
  _run(n) {
    return n.moveToNextMatch();
  }
};
Wvg = class extends _Ql {
  constructor() {
    super({
      id: bE.PreviousSelectionMatchFindAction,
      label: dt(1092, "Find Previous Selection"),
      precondition: undefined,
      kbOpts: {
        kbExpr: Ci.focus,
        primary: 3133,
        weight: 100
      }
    });
  }
  _run(n) {
    return n.moveToPrevMatch();
  }
};
CQl = nch(new Dkc({
  id: bE.StartFindReplaceAction,
  label: dt(1093, "Replace"),
  precondition: Ee.or(Ci.focus, Ee.has("editorIsOpen")),
  kbOpts: {
    kbExpr: null,
    primary: 2086,
    mac: {
      primary: 2596
    },
    weight: 100
  },
  menuOpts: {
    menuId: st.MenubarEditMenu,
    group: "3_find",
    title: _(1084, null),
    order: 2
  }
}));
CQl.addImplementation(0, (n, e, t) => {
  if (!e.hasModel() || e.getOption(96)) {
    return false;
  }
  const i = G3.get(e);
  if (!i) {
    return false;
  }
  const r = e.getSelection();
  const s = i.isFindInputFocused();
  const o = !r.isEmpty() && r.startLineNumber === r.endLineNumber && e.getOption(43).seedSearchStringFromSelection !== "never" && !s;
  const a = s || o ? 2 : 1;
  return i.start({
    forceRevealReplace: true,
    seedSearchStringFromSelection: o ? "single" : "none",
    seedSearchStringFromNonEmptySelection: e.getOption(43).seedSearchStringFromSelection === "selection",
    seedSearchStringFromGlobalClipboard: e.getOption(43).seedSearchStringFromSelection !== "never",
    shouldFocus: a,
    shouldAnimate: true,
    updateSearchScope: false,
    loop: e.getOption(43).loop
  });
});
Mg(G3.ID, ldn, 0);
ac(Uvg);
ac($vg);
ac(qvg);
ac(Hvg);
ac(Jvg);
ac(Gvg);
ac(Wvg);
QAe = dF.bindToContribution(G3.get);
ld(new QAe({
  id: bE.CloseFindWidgetCommand,
  precondition: hNe,
  handler: n => n.closeFindWidget(),
  kbOpts: {
    weight: 105,
    kbExpr: Ee.and(Ci.focus, Ee.not("isComposing")),
    primary: 9,
    secondary: [1033]
  }
}));
ld(new QAe({
  id: bE.ToggleCaseSensitiveCommand,
  precondition: undefined,
  handler: n => n.toggleCaseSensitive(),
  kbOpts: {
    weight: 105,
    kbExpr: Ci.focus,
    primary: yCt.primary,
    mac: yCt.mac,
    win: yCt.win,
    linux: yCt.linux
  }
}));
ld(new QAe({
  id: bE.ToggleWholeWordCommand,
  precondition: undefined,
  handler: n => n.toggleWholeWords(),
  kbOpts: {
    weight: 105,
    kbExpr: Ci.focus,
    primary: wCt.primary,
    mac: wCt.mac,
    win: wCt.win,
    linux: wCt.linux
  }
}));
ld(new QAe({
  id: bE.ToggleRegexCommand,
  precondition: undefined,
  handler: n => n.toggleRegex(),
  kbOpts: {
    weight: 105,
    kbExpr: Ci.focus,
    primary: _Ct.primary,
    mac: _Ct.mac,
    win: _Ct.win,
    linux: _Ct.linux
  }
}));
ld(new QAe({
  id: bE.ToggleSearchScopeCommand,
  precondition: undefined,
  handler: n => n.toggleSearchScope(),
  kbOpts: {
    weight: 105,
    kbExpr: Ci.focus,
    primary: mgi.primary,
    mac: mgi.mac,
    win: mgi.win,
    linux: mgi.linux
  }
}));
ld(new QAe({
  id: bE.TogglePreserveCaseCommand,
  precondition: undefined,
  handler: n => n.togglePreserveCase(),
  kbOpts: {
    weight: 105,
    kbExpr: Ci.focus,
    primary: tdn.primary,
    mac: tdn.mac,
    win: tdn.win,
    linux: tdn.linux
  }
}));
ld(new QAe({
  id: bE.ReplaceOneAction,
  precondition: hNe,
  handler: n => n.replace(),
  kbOpts: {
    weight: 105,
    kbExpr: Ci.focus,
    primary: 3094
  }
}));
ld(new QAe({
  id: bE.ReplaceOneAction,
  precondition: hNe,
  handler: n => n.replace(),
  kbOpts: {
    weight: 105,
    kbExpr: Ee.and(Ci.focus, Ala),
    primary: 3
  }
}));
ld(new QAe({
  id: bE.ReplaceAllAction,
  precondition: hNe,
  handler: n => n.replaceAll(),
  kbOpts: {
    weight: 105,
    kbExpr: Ci.focus,
    primary: 2563
  }
}));
ld(new QAe({
  id: bE.ReplaceAllAction,
  precondition: hNe,
  handler: n => n.replaceAll(),
  kbOpts: {
    weight: 105,
    kbExpr: Ee.and(Ci.focus, Ala),
    primary: undefined,
    mac: {
      primary: 2051
    }
  }
}));
ld(new QAe({
  id: bE.SelectAllMatchesAction,
  precondition: hNe,
  handler: n => n.selectAllMatches(),
  kbOpts: {
    weight: 105,
    kbExpr: Ci.focus,
    primary: 515
  }
}));

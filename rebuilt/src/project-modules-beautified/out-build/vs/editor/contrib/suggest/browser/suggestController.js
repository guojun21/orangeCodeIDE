"use strict";

// Module: out-build/vs/editor/contrib/suggest/browser/suggestController.js
// Offset: 25416436 (bundle byte offset)
// Size: 18679 bytes
Ew();
Vs();
Po();
_s();
yn();
hde();
rt();
_r();
Sx();
Js();
A9e();
Cu();
nI();
tl();
ts();
Qh();
pU();
Vde();
yyg();
NSA();
Ht();
hs();
si();
Wt();
jr();
pme();
MSA();
FSA();
xyg();
$SA();
Uyg();
Pa();
Yr();
iw();
ri();
bv();
Dd();
$yg = false;
qyg = class {
  constructor(n, e) {
    this._model = n;
    this._position = e;
    this._decorationOptions = Zh.register({
      description: "suggest-line-suffix",
      stickiness: 1
    });
    if (n.getLineMaxColumn(e.lineNumber) !== e.column) {
      const i = n.getOffsetAt(e);
      const r = n.getPositionAt(i + 1);
      n.changeDecorations(s => {
        if (this._marker) {
          s.removeDecoration(this._marker);
        }
        this._marker = s.addDecoration(Zt.fromPositions(e, r), this._decorationOptions);
      });
    }
  }
  dispose() {
    if (this._marker && !this._model.isDisposed()) {
      this._model.changeDecorations(n => {
        n.removeDecoration(this._marker);
        this._marker = undefined;
      });
    }
  }
  delta(n) {
    if (this._model.isDisposed() || this._position.lineNumber !== n.lineNumber) {
      return 0;
    }
    if (this._marker) {
      const e = this._model.getDecorationRange(this._marker);
      return this._model.getOffsetAt(e.getStartPosition()) - this._model.getOffsetAt(n);
    } else {
      return this._model.getLineMaxColumn(n.lineNumber) - n.column;
    }
  }
};
(function (n) {
  n[n.None = 0] = "None";
  n[n.NoBeforeUndoStop = 1] = "NoBeforeUndoStop";
  n[n.NoAfterUndoStop = 2] = "NoAfterUndoStop";
  n[n.KeepAlternativeSuggestions = 4] = "KeepAlternativeSuggestions";
  n[n.AlternativeOverwriteConfig = 8] = "AlternativeOverwriteConfig";
})(Hyg ||= {});
aR = class {
  static {
    fjl = this;
  }
  static {
    this.ID = "editor.contrib.suggestController";
  }
  static get(e) {
    return e.getContribution(fjl.ID);
  }
  constructor(e, t, i, r, s, o, a, l) {
    this._memoryService = t;
    this._commandService = i;
    this._contextKeyService = r;
    this._instantiationService = s;
    this._logService = o;
    this._reactiveStorageService = a;
    this._telemetryService = l;
    this._lineSuffix = new uo();
    this._toDispose = new Ut();
    this._selectors = new Jyg(p => p.priority);
    this._onWillInsertSuggestItem = new Qe();
    this.onWillInsertSuggestItem = this._onWillInsertSuggestItem.event;
    this._onFireCommand = new Qe();
    this.onFireCommand = this._onFireCommand.event;
    this.editor = e;
    this.model = s.createInstance(Fgi, this.editor);
    this._selectors.register({
      priority: 0,
      select: (p, g, f) => this._memoryService.select(p, g, f)
    });
    const u = Xf.InsertMode.bindTo(r);
    u.set(e.getOption(123).insertMode);
    this._toDispose.add(this.model.onDidTrigger(() => u.set(e.getOption(123).insertMode)));
    this.widget = this._toDispose.add(new T5e(As(e.getDomNode()), () => {
      const p = this._instantiationService.createInstance(Wla, this.editor);
      this._toDispose.add(p);
      this._toDispose.add(p.onDidSelect(C => this._insertSuggestion(C, 0), this));
      const g = new wyg(this.editor, this._reactiveStorageService, p, this.model, C => this._insertSuggestion(C, 2));
      this._toDispose.add(g);
      const f = Xf.MakesTextEdit.bindTo(this._contextKeyService);
      const A = Xf.HasInsertAndReplaceRange.bindTo(this._contextKeyService);
      const w = Xf.CanResolve.bindTo(this._contextKeyService);
      this._toDispose.add($i(() => {
        f.reset();
        A.reset();
        w.reset();
      }));
      this._toDispose.add(p.onDidFocus(({
        item: C
      }) => {
        const x = this.editor.getPosition();
        const I = C.editStart.column;
        const B = x.column;
        let R = true;
        if (this.editor.getOption(1) === "smart" && this.model.state === 2 && !C.completion.additionalTextEdits && !(C.completion.insertTextRules & 4) && B - I === C.completion.insertText.length) {
          R = this.editor.getModel().getValueInRange({
            startLineNumber: x.lineNumber,
            startColumn: I,
            endLineNumber: x.lineNumber,
            endColumn: B
          }) !== C.completion.insertText;
        }
        f.set(R);
        A.set(!ar.equals(C.editInsertEnd, C.editReplaceEnd));
        w.set(!!C.provider.resolveCompletionItem || !!C.completion.documentation || C.completion.detail !== C.completion.label);
      }));
      this._toDispose.add(p.onDetailsKeyDown(C => {
        if (C.toKeyCodeChord().equals(new _Y(true, false, false, false, 33)) || Fs && C.toKeyCodeChord().equals(new _Y(false, false, false, true, 33))) {
          C.stopPropagation();
          return;
        }
        if (!C.toKeyCodeChord().isModifierKey()) {
          this.editor.focus();
        }
      }));
      return p;
    }));
    this._overtypingCapturer = this._toDispose.add(new T5e(As(e.getDomNode()), () => this._toDispose.add(new Tyg(this.editor, this.model))));
    this._alternatives = this._toDispose.add(new T5e(As(e.getDomNode()), () => this._toDispose.add(new TCt(this.editor, this._contextKeyService))));
    this._toDispose.add(s.createInstance(Ngi, e));
    this._toDispose.add(this.model.onDidTrigger(p => {
      this.widget.value.showTriggered(p.auto, p.shy ? 250 : 50);
      this._lineSuffix.value = new qyg(this.editor.getModel(), p.position);
    }));
    this._toDispose.add(this.model.onDidSuggest(p => {
      if (p.triggerOptions.shy) {
        return;
      }
      let g = -1;
      for (const A of this._selectors.itemsOrderedByPriorityDesc) {
        g = A.select(this.editor.getModel(), this.editor.getPosition(), p.completionModel.items);
        if (g !== -1) {
          break;
        }
      }
      if (g === -1) {
        g = 0;
      }
      if (this.model.state === 0) {
        return;
      }
      let f = false;
      if (p.triggerOptions.auto) {
        const A = this.editor.getOption(123);
        if (A.selectionMode === "never" || A.selectionMode === "always") {
          f = A.selectionMode === "never";
        } else if (A.selectionMode === "whenTriggerCharacter") {
          f = p.triggerOptions.triggerKind !== 1;
        } else if (A.selectionMode === "whenQuickSuggestion") {
          f = p.triggerOptions.triggerKind === 1 && !p.triggerOptions.refilter;
        }
      }
      this.widget.value.showSuggestions(p.completionModel, g, p.isFrozen, p.triggerOptions.auto, f);
    }));
    this._toDispose.add(this.model.onDidCancel(p => {
      if (!p.retrigger) {
        this.widget.value.hideWidget();
      }
    }));
    this._toDispose.add(this.editor.onDidBlurEditorWidget(() => {
      if (!$yg) {
        this.model.cancel();
        this.model.clear();
      }
    }));
    const d = Xf.AcceptSuggestionsOnEnter.bindTo(r);
    const m = () => {
      const p = this.editor.getOption(1);
      d.set(p === "on" || p === "smart");
    };
    this._toDispose.add(this.editor.onDidChangeConfiguration(() => m()));
    m();
  }
  dispose() {
    this._alternatives.dispose();
    this._toDispose.dispose();
    this.widget.dispose();
    this.model.dispose();
    this._lineSuffix.dispose();
    this._onWillInsertSuggestItem.dispose();
  }
  _insertSuggestion(e, t) {
    if (!e || !e.item) {
      this._alternatives.value.reset();
      this.model.cancel();
      this.model.clear();
      return;
    }
    if (!this.editor.hasModel()) {
      return;
    }
    const i = tx.get(this.editor);
    if (!i) {
      return;
    }
    this._onWillInsertSuggestItem.fire({
      item: e.item
    });
    const r = this.editor.getModel();
    const s = r.getAlternativeVersionId();
    const {
      item: o
    } = e;
    const a = [];
    const l = new Wc();
    if (!(t & 1)) {
      this.editor.pushUndoStop();
    }
    const u = this.getOverwriteInfo(o, !!(t & 8));
    this._memoryService.memorize(r, this.editor.getPosition(), o);
    const d = o.isResolved;
    let m = -1;
    let p = -1;
    if (Array.isArray(o.completion.additionalTextEdits)) {
      this.model.cancel();
      const f = $Se.capture(this.editor);
      this.editor.executeEdits("suggestController.additionalTextEdits.sync", o.completion.additionalTextEdits.map(A => {
        let w = Zt.lift(A.range);
        if (w.startLineNumber === o.position.lineNumber && w.startColumn > o.position.column) {
          const C = this.editor.getPosition().column - o.position.column;
          const x = C;
          const I = Zt.spansMultipleLines(w) ? 0 : C;
          w = new Zt(w.startLineNumber, w.startColumn + x, w.endLineNumber, w.endColumn + I);
        }
        return zb.replaceMove(w, A.text);
      }));
      f.restoreRelativeVerticalPositionOfCursor(this.editor);
    } else if (!d) {
      const f = new J_();
      let A;
      const w = r.onDidChangeContent(B => {
        if (B.isFlush) {
          l.cancel();
          w.dispose();
          return;
        }
        for (const R of B.changes) {
          const N = Zt.getEndPosition(R.range);
          if (!A || ar.isBefore(N, A)) {
            A = N;
          }
        }
      });
      const C = t;
      t |= 2;
      let x = false;
      const I = this.editor.onWillType(() => {
        I.dispose();
        x = true;
        if (!(C & 2)) {
          this.editor.pushUndoStop();
        }
      });
      a.push(o.resolve(l.token).then(() => {
        if (!o.completion.additionalTextEdits || l.token.isCancellationRequested) {
          return;
        }
        if (A && o.completion.additionalTextEdits.some(R => ar.isBefore(A, Zt.getStartPosition(R.range)))) {
          return false;
        }
        if (x) {
          this.editor.pushUndoStop();
        }
        const B = $Se.capture(this.editor);
        this.editor.executeEdits("suggestController.additionalTextEdits.async", o.completion.additionalTextEdits.map(R => zb.replaceMove(Zt.lift(R.range), R.text)));
        B.restoreRelativeVerticalPositionOfCursor(this.editor);
        if (x || !(C & 2)) {
          this.editor.pushUndoStop();
        }
        return true;
      }).then(B => {
        this._logService.trace("[suggest] async resolving of edits DONE (ms, applied?)", f.elapsed(), B);
        p = B === true ? 1 : B === false ? 0 : -2;
      }).finally(() => {
        w.dispose();
        I.dispose();
      }));
    }
    let {
      insertText: g
    } = o.completion;
    if (!(o.completion.insertTextRules & 4)) {
      g = Ute.escape(g);
    }
    this.model.cancel();
    i.insert(g, {
      overwriteBefore: u.overwriteBefore,
      overwriteAfter: u.overwriteAfter,
      undoStopBefore: false,
      undoStopAfter: false,
      adjustWhitespace: !(o.completion.insertTextRules & 1),
      clipboardText: e.model.clipboardText,
      overtypingCapturer: this._overtypingCapturer.value
    });
    if (!(t & 2)) {
      this.editor.pushUndoStop();
    }
    if (o.completion.command) {
      if (o.completion.command.id === Qla.id) {
        this.model.trigger({
          auto: true,
          retrigger: true
        });
      } else {
        this._onFireCommand.fire(o.completion.command);
        const f = new J_();
        a.push(this._commandService.executeCommand(o.completion.command.id, ...(o.completion.command.arguments ? [...o.completion.command.arguments] : [])).catch(A => {
          if (o.completion.extensionId) {
            JE(A);
          } else {
            Gc(A);
          }
        }).finally(() => {
          m = f.elapsed();
        }));
      }
    }
    if (t & 4) {
      this._alternatives.value.set(e, f => {
        for (l.cancel(); r.canUndo();) {
          if (s !== r.getAlternativeVersionId()) {
            r.undo();
          }
          this._insertSuggestion(f, (t & 8 ? 8 : 0) | 3);
          break;
        }
      });
    }
    this._alertCompletionItem(o);
    Promise.all(a).finally(() => {
      this._reportSuggestionAcceptedTelemetry(o, r, d, m, p, e.index, e.model.items);
      this.model.clear();
      l.dispose();
    });
  }
  _reportSuggestionAcceptedTelemetry(e, t, i, r, s, o, a) {
    if (Math.random() > 0.0001) {
      return;
    }
    const l = new Map();
    for (let p = 0; p < Math.min(30, a.length); p++) {
      const g = a[p].textLabel;
      if (l.has(g)) {
        l.get(g).push(p);
      } else {
        l.set(g, [p]);
      }
    }
    const u = l.get(e.textLabel);
    const m = u && u.length > 1 ? u[0] : -1;
    this._telemetryService.publicLog2("suggest.acceptedSuggestion", {
      extensionId: e.extensionId?.value ?? "unknown",
      providerId: e.provider._debugDisplayName ?? "unknown",
      kind: e.completion.kind,
      basenameHash: VC(ca(t.uri)).toString(16),
      languageId: t.getLanguageId(),
      fileExtension: hk(t.uri),
      resolveInfo: e.provider.resolveCompletionItem ? i ? 1 : 0 : -1,
      resolveDuration: e.resolveDuration,
      commandDuration: r,
      additionalEditsAsync: s,
      index: o,
      firstIndex: m
    });
  }
  getOverwriteInfo(e, t) {
    Kd(this.editor.hasModel());
    let i = this.editor.getOption(123).insertMode === "replace";
    if (t) {
      i = !i;
    }
    const r = e.position.column - e.editStart.column;
    const s = (i ? e.editReplaceEnd.column : e.editInsertEnd.column) - e.position.column;
    const o = this.editor.getPosition().column - e.position.column;
    const a = this._lineSuffix.value ? this._lineSuffix.value.delta(this.editor.getPosition()) : 0;
    return {
      overwriteBefore: r + o,
      overwriteAfter: s + a
    };
  }
  _alertCompletionItem(e) {
    if (q_(e.completion.additionalTextEdits)) {
      const t = _(1603, null, e.textLabel, e.completion.additionalTextEdits.length);
      W_(t);
    }
  }
  triggerSuggest(e, t, i) {
    if (this.editor.hasModel()) {
      this.model.trigger({
        auto: t ?? false,
        completionOptions: {
          providerFilter: e,
          kindFilter: i ? new Set() : undefined
        }
      });
      this.editor.revealPosition(this.editor.getPosition(), 0);
      this.editor.focus();
    }
  }
  triggerSuggestAndAcceptBest(e) {
    if (!this.editor.hasModel()) {
      return;
    }
    const t = this.editor.getPosition();
    const i = () => {
      if (t.equals(this.editor.getPosition())) {
        this._commandService.executeCommand(e.fallback);
      }
    };
    const r = s => {
      if (s.completion.insertTextRules & 4 || s.completion.additionalTextEdits) {
        return true;
      }
      const o = this.editor.getPosition();
      const a = s.editStart.column;
      const l = o.column;
      if (l - a !== s.completion.insertText.length) {
        return true;
      } else {
        return this.editor.getModel().getValueInRange({
          startLineNumber: o.lineNumber,
          startColumn: a,
          endLineNumber: o.lineNumber,
          endColumn: l
        }) !== s.completion.insertText;
      }
    };
    In.once(this.model.onDidTrigger)(s => {
      const o = [];
      In.any(this.model.onDidTrigger, this.model.onDidCancel)(() => {
        Bo(o);
        i();
      }, undefined, o);
      this.model.onDidSuggest(({
        completionModel: a
      }) => {
        Bo(o);
        if (a.items.length === 0) {
          i();
          return;
        }
        const l = this._memoryService.select(this.editor.getModel(), this.editor.getPosition(), a.items);
        const u = a.items[l];
        if (!r(u)) {
          i();
          return;
        }
        this.editor.pushUndoStop();
        this._insertSuggestion({
          index: l,
          item: u,
          model: a
        }, 7);
      }, undefined, o);
    });
    this.model.trigger({
      auto: false,
      shy: true
    });
    this.editor.revealPosition(t, 0);
    this.editor.focus();
  }
  acceptSelectedSuggestion(e, t) {
    const i = this.widget.value.getFocusedItem();
    let r = 0;
    if (e) {
      r |= 4;
    }
    if (t) {
      r |= 8;
    }
    this._insertSuggestion(i, r);
  }
  acceptNextSuggestion() {
    this._alternatives.value.next();
  }
  acceptPrevSuggestion() {
    this._alternatives.value.prev();
  }
  cancelSuggestWidget() {
    this.model.cancel();
    this.model.clear();
    this.widget.value.hideWidget();
  }
  focusSuggestion() {
    this.widget.value.focusSelected();
  }
  selectNextSuggestion() {
    this.widget.value.selectNext();
  }
  selectNextPageSuggestion() {
    this.widget.value.selectNextPage();
  }
  selectLastSuggestion() {
    this.widget.value.selectLast();
  }
  selectPrevSuggestion() {
    this.widget.value.selectPrevious();
  }
  selectPrevPageSuggestion() {
    this.widget.value.selectPreviousPage();
  }
  selectFirstSuggestion() {
    this.widget.value.selectFirst();
  }
  toggleSuggestionDetails() {
    this.widget.value.toggleDetails();
  }
  toggleExplainMode() {
    this.widget.value.toggleExplainMode();
  }
  toggleSuggestionFocus() {
    this.widget.value.toggleDetailsFocus();
  }
  resetWidgetSize() {
    this.widget.value.resetPersistedSize();
  }
  forceRenderingAbove() {
    this.widget.value.forceRenderingAbove();
  }
  stopForceRenderingAbove() {
    if (this.widget.isInitialized) {
      this.widget.value.stopForceRenderingAbove();
    }
  }
  registerSelector(e) {
    return this._selectors.register(e);
  }
};
aR = fjl = __decorate([__param(1, Lgi), __param(2, fr), __param(3, wi), __param(4, ln), __param(5, Rr), __param(6, ku), __param(7, ea)], aR);
Jyg = class {
  constructor(n) {
    this.prioritySelector = n;
    this._items = new Array();
  }
  register(n) {
    if (this._items.indexOf(n) !== -1) {
      throw new Error("Value is already registered");
    }
    this._items.push(n);
    this._items.sort((e, t) => this.prioritySelector(t) - this.prioritySelector(e));
    return {
      dispose: () => {
        const e = this._items.indexOf(n);
        if (e >= 0) {
          this._items.splice(e, 1);
        }
      }
    };
  }
  get itemsOrderedByPriorityDesc() {
    return this._items;
  }
};
Qla = class rQb extends vu {
  static {
    this.id = "editor.action.triggerSuggest";
  }
  constructor() {
    super({
      id: rQb.id,
      label: dt(1611, "Trigger Suggest"),
      precondition: Ee.and(Ci.writable, Ci.hasCompletionItemProvider, Xf.Visible.toNegated()),
      kbOpts: {
        kbExpr: Ci.textInputFocus,
        primary: 2058,
        secondary: [2087],
        mac: {
          primary: 266,
          secondary: [521, 2087]
        },
        weight: 100
      }
    });
  }
  run(e, t, i) {
    const r = aR.get(t);
    if (!r) {
      return;
    }
    let s;
    if (i && typeof i == "object" && i.auto === true) {
      s = true;
    }
    r.triggerSuggest(undefined, s, undefined);
  }
};
Mg(aR.ID, aR, 2);
ac(Qla);
jne = 190;
nQ = dF.bindToContribution(aR.get);
ld(new nQ({
  id: "acceptSelectedSuggestion",
  precondition: Ee.and(Xf.Visible, Xf.HasFocusedSuggestion),
  handler(n) {
    n.acceptSelectedSuggestion(true, false);
  },
  kbOpts: [{
    primary: 2,
    kbExpr: Ee.and(Xf.Visible, Ci.textInputFocus),
    weight: jne
  }, {
    primary: 3,
    kbExpr: Ee.and(Xf.Visible, Ci.textInputFocus, Xf.AcceptSuggestionsOnEnter, Xf.MakesTextEdit),
    weight: jne
  }],
  menuOpts: [{
    menuId: ZUe,
    title: _(1604, null),
    group: "left",
    order: 1,
    when: Xf.HasInsertAndReplaceRange.toNegated()
  }, {
    menuId: ZUe,
    title: _(1605, null),
    group: "left",
    order: 1,
    when: Ee.and(Xf.HasInsertAndReplaceRange, Xf.InsertMode.isEqualTo("insert"))
  }, {
    menuId: ZUe,
    title: _(1606, null),
    group: "left",
    order: 1,
    when: Ee.and(Xf.HasInsertAndReplaceRange, Xf.InsertMode.isEqualTo("replace"))
  }]
}));
ld(new nQ({
  id: "acceptAlternativeSelectedSuggestion",
  precondition: Ee.and(Xf.Visible, Ci.textInputFocus, Xf.HasFocusedSuggestion),
  kbOpts: {
    weight: jne,
    kbExpr: Ci.textInputFocus,
    primary: 1027,
    secondary: [1026]
  },
  handler(n) {
    n.acceptSelectedSuggestion(false, true);
  },
  menuOpts: [{
    menuId: ZUe,
    group: "left",
    order: 2,
    when: Ee.and(Xf.HasInsertAndReplaceRange, Xf.InsertMode.isEqualTo("insert")),
    title: _(1607, null)
  }, {
    menuId: ZUe,
    group: "left",
    order: 2,
    when: Ee.and(Xf.HasInsertAndReplaceRange, Xf.InsertMode.isEqualTo("replace")),
    title: _(1608, null)
  }]
}));
Ss.registerCommandAlias("acceptSelectedSuggestionOnEnter", "acceptSelectedSuggestion");
ld(new nQ({
  id: "hideSuggestWidget",
  precondition: Xf.Visible,
  handler: n => n.cancelSuggestWidget(),
  kbOpts: {
    weight: jne,
    kbExpr: Ci.textInputFocus,
    primary: 9,
    secondary: [1033]
  }
}));
ld(new nQ({
  id: "selectNextSuggestion",
  precondition: Ee.and(Xf.Visible, Ee.or(Xf.MultipleSuggestions, Xf.HasFocusedSuggestion.negate())),
  handler: n => n.selectNextSuggestion(),
  kbOpts: {
    weight: jne,
    kbExpr: Ci.textInputFocus,
    primary: 18,
    secondary: [2066],
    mac: {
      primary: 18,
      secondary: [2066, 300]
    }
  }
}));
ld(new nQ({
  id: "selectNextPageSuggestion",
  precondition: Ee.and(Xf.Visible, Ee.or(Xf.MultipleSuggestions, Xf.HasFocusedSuggestion.negate())),
  handler: n => n.selectNextPageSuggestion(),
  kbOpts: {
    weight: jne,
    kbExpr: Ci.textInputFocus,
    primary: 12,
    secondary: [2060]
  }
}));
ld(new nQ({
  id: "selectLastSuggestion",
  precondition: Ee.and(Xf.Visible, Ee.or(Xf.MultipleSuggestions, Xf.HasFocusedSuggestion.negate())),
  handler: n => n.selectLastSuggestion()
}));
ld(new nQ({
  id: "selectPrevSuggestion",
  precondition: Ee.and(Xf.Visible, Ee.or(Xf.MultipleSuggestions, Xf.HasFocusedSuggestion.negate())),
  handler: n => n.selectPrevSuggestion(),
  kbOpts: {
    weight: jne,
    kbExpr: Ci.textInputFocus,
    primary: 16,
    secondary: [2064],
    mac: {
      primary: 16,
      secondary: [2064, 302]
    }
  }
}));
ld(new nQ({
  id: "selectPrevPageSuggestion",
  precondition: Ee.and(Xf.Visible, Ee.or(Xf.MultipleSuggestions, Xf.HasFocusedSuggestion.negate())),
  handler: n => n.selectPrevPageSuggestion(),
  kbOpts: {
    weight: jne,
    kbExpr: Ci.textInputFocus,
    primary: 11,
    secondary: [2059]
  }
}));
ld(new nQ({
  id: "selectFirstSuggestion",
  precondition: Ee.and(Xf.Visible, Ee.or(Xf.MultipleSuggestions, Xf.HasFocusedSuggestion.negate())),
  handler: n => n.selectFirstSuggestion()
}));
ld(new nQ({
  id: "focusSuggestion",
  precondition: Ee.and(Xf.Visible, Xf.HasFocusedSuggestion.negate()),
  handler: n => n.focusSuggestion(),
  kbOpts: {
    weight: jne,
    kbExpr: Ci.textInputFocus,
    primary: 2058,
    secondary: [2087],
    mac: {
      primary: 266,
      secondary: [2087]
    }
  }
}));
ld(new nQ({
  id: "focusAndAcceptSuggestion",
  precondition: Ee.and(Xf.Visible, Xf.HasFocusedSuggestion.negate()),
  handler: n => {
    n.focusSuggestion();
    n.acceptSelectedSuggestion(true, false);
  }
}));
ld(new nQ({
  id: "toggleSuggestionDetails",
  precondition: Ee.and(Xf.Visible, Xf.HasFocusedSuggestion),
  handler: n => n.toggleSuggestionDetails(),
  kbOpts: {
    weight: jne,
    kbExpr: Ci.textInputFocus,
    primary: 2058,
    secondary: [2087],
    mac: {
      primary: 266,
      secondary: [2087]
    }
  },
  menuOpts: [{
    menuId: ZUe,
    group: "right",
    order: 1,
    when: Ee.and(Xf.DetailsVisible, Xf.CanResolve),
    title: _(1609, null)
  }, {
    menuId: ZUe,
    group: "right",
    order: 1,
    when: Ee.and(Xf.DetailsVisible.toNegated(), Xf.CanResolve),
    title: _(1610, null)
  }]
}));
ld(new nQ({
  id: "toggleExplainMode",
  precondition: Xf.Visible,
  handler: n => n.toggleExplainMode(),
  kbOpts: {
    weight: 100,
    primary: 2138
  }
}));
ld(new nQ({
  id: "toggleSuggestionFocus",
  precondition: Xf.Visible,
  handler: n => n.toggleSuggestionFocus(),
  kbOpts: {
    weight: jne,
    kbExpr: Ci.textInputFocus,
    primary: 2570,
    mac: {
      primary: 778
    }
  }
}));
ld(new nQ({
  id: "insertBestCompletion",
  precondition: Ee.and(Ci.textInputFocus, Ee.equals("config.editor.tabCompletion", "on"), Ngi.AtEnd, Xf.Visible.toNegated(), TCt.OtherSuggestions.toNegated(), tx.InSnippetMode.toNegated()),
  handler: (n, e) => {
    n.triggerSuggestAndAcceptBest($g(e) ? {
      fallback: "tab",
      ...e
    } : {
      fallback: "tab"
    });
  },
  kbOpts: {
    weight: jne,
    primary: 2
  }
}));
ld(new nQ({
  id: "insertNextSuggestion",
  precondition: Ee.and(Ci.textInputFocus, Ee.equals("config.editor.tabCompletion", "on"), TCt.OtherSuggestions, Xf.Visible.toNegated(), tx.InSnippetMode.toNegated()),
  handler: n => n.acceptNextSuggestion(),
  kbOpts: {
    weight: jne,
    kbExpr: Ci.textInputFocus,
    primary: 2
  }
}));
ld(new nQ({
  id: "insertPrevSuggestion",
  precondition: Ee.and(Ci.textInputFocus, Ee.equals("config.editor.tabCompletion", "on"), TCt.OtherSuggestions, Xf.Visible.toNegated(), tx.InSnippetMode.toNegated()),
  handler: n => n.acceptPrevSuggestion(),
  kbOpts: {
    weight: jne,
    kbExpr: Ci.textInputFocus,
    primary: 1026
  }
}));
ac(class extends vu {
  constructor() {
    super({
      id: "editor.action.resetSuggestSize",
      label: dt(1612, "Reset Suggest Widget Size"),
      precondition: undefined
    });
  }
  run(n, e) {
    aR.get(e)?.resetWidgetSize();
  }
});

"use strict";

// Module: out-build/vs/workbench/contrib/inlineChat/browser/inlineChatWidget.js
// Offset: 32929434 (bundle byte offset)
// Size: 12744 bytes
ri();
mb();
bS();
yn();
rt();
Uc();
EDc();
Ix();
db();
WY();
td();
Ht();
o5();
zg();
QEf();
dg();
vT();
dr();
Ei();
si();
Id();
Wt();
E_();
ka();
Px();
Nl();
ky();
A9f();
m9f();
lbn();
hxa();
_E();
xS();
Wq();
PV();
buy();
dbn = class {
  constructor(e, t, i, r, s, o, a, l, u, d, m) {
    this._options = t;
    this._instantiationService = i;
    this._contextKeyService = r;
    this._keybindingService = s;
    this._accessibilityService = o;
    this._configurationService = a;
    this._accessibleViewService = l;
    this._textModelResolverService = u;
    this._chatService = d;
    this._hoverService = m;
    this._elements = kl("div.inline-chat@root", [kl("div.chat-widget@chatWidget"), kl("div.accessibleViewer@accessibleViewer"), kl("div.status@status", [kl("div.label.info.hidden@infoLabel"), kl("div.actions.hidden@toolbar1"), kl("div.label.status.hidden@statusLabel"), kl("div.actions.secondary.hidden@toolbar2")])]);
    this._store = new Ut();
    this._onDidChangeHeight = this._store.add(new Qe());
    this.onDidChangeHeight = In.filter(this._onDidChangeHeight.event, O => !this._isLayouting);
    this._requestInProgress = Ua(this, false);
    this.requestInProgress = this._requestInProgress;
    this._isLayouting = false;
    this.scopedContextKeyService = this._store.add(r.createScoped(this._elements.chatWidget));
    const p = i.createChild(new EA([wi, this.scopedContextKeyService]), this._store);
    this._chatWidget = p.createInstance(o2e, e, undefined, {
      autoScroll: true,
      defaultElementHeight: 32,
      renderStyle: "minimal",
      renderInputOnTop: false,
      renderFollowups: true,
      supportsFileReferences: true,
      filter: O => !rA(O) || O.errorDetails ? true : O.response.value.length !== 0 && !O.response.value.every(H => H.kind === "textEditGroup" && t.chatWidgetViewOptions?.rendererOptions?.renderTextEditsAsSummary?.(H.uri)),
      ...t.chatWidgetViewOptions
    }, {
      listForeground: axf,
      listBackground: gpu,
      overlayBackground: Cqe,
      inputEditorBackground: Ide,
      resultEditorBackground: Wm
    });
    this._elements.root.classList.toggle("in-zone-widget", !!t.inZoneWidget);
    this._chatWidget.render(this._elements.chatWidget);
    this._elements.chatWidget.style.setProperty(YBe(i5f), zo(gpu));
    this._chatWidget.setVisible(true);
    this._store.add(this._chatWidget);
    const g = qa.isResponse.bindTo(this.scopedContextKeyService);
    const f = qa.responseVote.bindTo(this.scopedContextKeyService);
    const A = qa.responseSupportsIssueReporting.bindTo(this.scopedContextKeyService);
    const w = qa.responseHasError.bindTo(this.scopedContextKeyService);
    const C = qa.responseIsFiltered.bindTo(this.scopedContextKeyService);
    const x = this._store.add(new Ut());
    this._store.add(this._chatWidget.onDidChangeViewModel(() => {
      x.clear();
      const O = this._chatWidget.viewModel;
      if (O) {
        x.add($i(() => {
          M.context = undefined;
          g.reset();
          f.reset();
          w.reset();
          C.reset();
          A.reset();
        }));
        x.add(O.onDidChange(() => {
          this._requestInProgress.set(O.requestInProgress, undefined);
          const $ = O.getItems().at(-1);
          M.context = $;
          g.set(rA($));
          f.set(rA($) ? $.vote === upn.Down ? "down" : $.vote === upn.Up ? "up" : "" : "");
          w.set(rA($) && $.errorDetails !== undefined);
          C.set(!!rA($) && !!$.errorDetails?.responseIsFiltered);
          A.set(rA($) && ($.agent?.metadata.supportIssueReporting ?? false));
          this._onDidChangeHeight.fire();
        }));
        this._onDidChangeHeight.fire();
      }
    }));
    this._store.add(this.chatWidget.onDidChangeContentHeight(() => {
      this._onDidChangeHeight.fire();
    }));
    this._ctxResponseFocused = KEf.bindTo(this._contextKeyService);
    const I = this._store.add(CC(this.domNode));
    this._store.add(I.onDidBlur(() => this._ctxResponseFocused.set(false)));
    this._store.add(I.onDidFocus(() => this._ctxResponseFocused.set(true)));
    this._ctxInputEditorFocused = RV.bindTo(r);
    this._store.add(this._chatWidget.inputEditor.onDidFocusEditorWidget(() => this._ctxInputEditorFocused.set(true)));
    this._store.add(this._chatWidget.inputEditor.onDidBlurEditorWidget(() => this._ctxInputEditorFocused.set(false)));
    const B = t.statusMenuId instanceof st ? t.statusMenuId : t.statusMenuId.menu;
    const R = t.statusMenuId instanceof st ? undefined : t.statusMenuId.options;
    const N = p.createInstance(f_i, this._elements.toolbar1, B, {
      toolbarOptions: {
        primaryGroup: "0_main"
      },
      telemetrySource: t.chatWidgetViewOptions?.menus?.telemetrySource,
      menuOptions: {
        renderShortTitle: true
      },
      ...R
    });
    this._store.add(N.onDidChange(() => this._onDidChangeHeight.fire()));
    this._store.add(N);
    const M = p.createInstance(nL, this._elements.toolbar2, t.secondaryMenuId ?? st.for(""), {
      telemetrySource: t.chatWidgetViewOptions?.menus?.telemetrySource,
      menuOptions: {
        renderShortTitle: true,
        shouldForwardArgs: true
      },
      actionViewItemProvider: (O, $) => O instanceof Ub && O.item.id === ubn ? p.createInstance(MSi, O, $) : GR(p, O, $)
    });
    this._store.add(M.onDidChangeMenuItems(() => this._onDidChangeHeight.fire()));
    this._store.add(M);
    this._store.add(this._configurationService.onDidChangeConfiguration(O => {
      if (O.affectsConfiguration("accessibility.verbosity.inlineChat")) {
        this._updateAriaLabel();
      }
    }));
    this._elements.root.tabIndex = 0;
    this._elements.statusLabel.tabIndex = 0;
    this._updateAriaLabel();
    this._store.add(this._hoverService.setupManagedHover(Sm("element"), this._elements.statusLabel, () => this._elements.statusLabel.dataset.title));
    this._store.add(this._chatService.onDidPerformUserAction(O => {
      if (O.sessionId === this._chatWidget.viewModel?.model.sessionId && O.action.kind === "vote") {
        this.updateStatus("Thank you for your feedback!", {
          resetAfter: 1250
        });
      }
    }));
  }
  _updateAriaLabel() {
    this._elements.root.ariaLabel = this._accessibleViewService.getOpenAriaHint("accessibility.verbosity.inlineChat");
    if (this._accessibilityService.isScreenReaderOptimized()) {
      let e = y9f;
      if (this._configurationService.getValue("accessibility.verbosity.inlineChat")) {
        const t = this._keybindingService.lookupKeybinding("editor.action.accessibilityHelp")?.getLabel();
        e = t ? _(8206, null, t) : _(8207, null);
      }
      this._chatWidget.inputEditor.updateOptions({
        ariaLabel: e
      });
    }
  }
  dispose() {
    this._store.dispose();
  }
  get domNode() {
    return this._elements.root;
  }
  get chatWidget() {
    return this._chatWidget;
  }
  saveState() {
    this._chatWidget.saveState();
  }
  layout(e) {
    const t = this.contentHeight;
    this._isLayouting = true;
    try {
      this._doLayout(e);
    } finally {
      this._isLayouting = false;
      if (this.contentHeight !== t) {
        this._onDidChangeHeight.fire();
      }
    }
  }
  _doLayout(e) {
    const t = this._getExtraHeight();
    const i = DH(this._elements.status);
    this._elements.root.style.height = `${e.height - t}px`;
    this._elements.root.style.width = `${e.width}px`;
    this._chatWidget.layout(e.height - i - t, e.width);
  }
  get contentHeight() {
    const e = {
      chatWidgetContentHeight: this._chatWidget.contentHeight,
      statusHeight: DH(this._elements.status),
      extraHeight: this._getExtraHeight()
    };
    return e.chatWidgetContentHeight + e.statusHeight + e.extraHeight;
  }
  get minHeight() {
    let e = 100;
    for (const i of this._chatWidget.viewModel?.getItems() ?? []) {
      if (rA(i) && i.response.value.some(r => r.kind === "textEditGroup" && !r.state?.applied)) {
        e = 270;
        break;
      }
    }
    let t = this.contentHeight;
    t -= this._chatWidget.contentHeight;
    t += Math.min(this._chatWidget.input.contentHeight + e, this._chatWidget.contentHeight);
    return t;
  }
  _getExtraHeight() {
    if (this._options.inZoneWidget) {
      return 1;
    } else {
      return 6;
    }
  }
  get value() {
    return this._chatWidget.getInput();
  }
  set value(e) {
    this._chatWidget.setInput(e);
  }
  selectAll() {
    this._chatWidget.inputEditor.setSelection(new Vl(1, 1, Number.MAX_SAFE_INTEGER, 1));
  }
  set placeholder(e) {
    this._chatWidget.setInputPlaceholder(e);
  }
  toggleStatus(e) {
    this._elements.toolbar1.classList.toggle("hidden", !e);
    this._elements.toolbar2.classList.toggle("hidden", !e);
    this._elements.status.classList.toggle("hidden", !e);
    this._elements.infoLabel.classList.toggle("hidden", !e);
    this._onDidChangeHeight.fire();
  }
  updateToolbar(e) {
    this._elements.root.classList.toggle("toolbar", e);
    this._elements.toolbar1.classList.toggle("hidden", !e);
    this._elements.toolbar2.classList.toggle("hidden", !e);
    this._elements.status.classList.toggle("actions", e);
    this._elements.infoLabel.classList.toggle("hidden", e);
    this._onDidChangeHeight.fire();
  }
  async getCodeBlockInfo(e) {
    const {
      viewModel: t
    } = this._chatWidget;
    if (!t) {
      return;
    }
    const r = t.getItems().filter(s => rA(s)).at(-1);
    if (r) {
      return t.codeBlockModelCollection.get(t.sessionId, r, e)?.model;
    }
  }
  get responseContent() {
    return this._chatWidget.viewModel?.model.getRequests()?.at(-1)?.response?.response.toString();
  }
  getChatModel() {
    return this._chatWidget.viewModel?.model;
  }
  setChatModel(e, t) {
    this._chatWidget.setModel(e, {
      ...t,
      inputValue: undefined
    });
  }
  updateInfo(e) {
    this._elements.infoLabel.classList.toggle("hidden", !e);
    const t = a_(e);
    um(this._elements.infoLabel, ...t);
    this._onDidChangeHeight.fire();
  }
  updateStatus(e, t = {}) {
    const i = typeof t.resetAfter == "number";
    if (i && !this._elements.statusLabel.dataset.state) {
      const s = this._elements.statusLabel.innerText;
      const o = this._elements.statusLabel.dataset.title;
      const a = Array.from(this._elements.statusLabel.classList.values());
      setTimeout(() => {
        this.updateStatus(s, {
          classes: a,
          keepMessage: true,
          title: o
        });
      }, t.resetAfter);
    }
    const r = a_(e);
    um(this._elements.statusLabel, ...r);
    this._elements.statusLabel.className = `label status ${(t.classes ?? []).join(" ")}`;
    this._elements.statusLabel.classList.toggle("hidden", !e);
    if (i) {
      this._elements.statusLabel.dataset.state = "temp";
    } else {
      delete this._elements.statusLabel.dataset.state;
    }
    if (t.title) {
      this._elements.statusLabel.dataset.title = t.title;
    } else {
      delete this._elements.statusLabel.dataset.title;
    }
    this._onDidChangeHeight.fire();
  }
  reset() {
    this._chatWidget.attachmentModel.clear();
    this._chatWidget.saveState();
    um(this._elements.statusLabel);
    this._elements.statusLabel.classList.toggle("hidden", true);
    this._elements.toolbar1.classList.add("hidden");
    this._elements.toolbar2.classList.add("hidden");
    this.updateInfo("");
    this._elements.accessibleViewer.classList.toggle("hidden", true);
    this._onDidChangeHeight.fire();
  }
  focus() {
    this._chatWidget.focusInput();
  }
  hasFocus() {
    return this.domNode.contains(_C());
  }
};
dbn = __decorate([__param(2, ln), __param(3, wi), __param(4, mo), __param(5, Cf), __param(6, Fn), __param(7, L2), __param(8, El), __param(9, ES), __param(10, Kc)], dbn);
y9f = _(8208, null);
jxa = class extends dbn {
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g) {
    const f = g.getContainer(As(t.getContainerDomNode())).appendChild(Ct(".inline-chat-overflow.monaco-editor"));
    super(e, {
      ...i,
      chatWidgetViewOptions: {
        ...i.chatWidgetViewOptions,
        editorOverflowWidgetsDomNode: f
      }
    }, o, r, s, a, l, u, d, m, p);
    this._parentEditor = t;
    this._accessibleViewer = this._store.add(new uo());
    this._store.add($i(() => {
      f.remove();
    }));
  }
  get contentHeight() {
    let e = super.contentHeight;
    if (this._accessibleViewer.value) {
      e += this._accessibleViewer.value.height + 8;
    }
    return e;
  }
  _doLayout(e) {
    let t = e.height;
    if (this._accessibleViewer.value) {
      this._accessibleViewer.value.width = e.width - 12;
      t -= this._accessibleViewer.value.height + 8;
    }
    super._doLayout(e.with(undefined, t));
    this._elements.root.style.height = `${e.height - this._getExtraHeight()}px`;
  }
  reset() {
    this._accessibleViewer.clear();
    super.reset();
  }
  showAccessibleHunk(e, t) {
    this._elements.accessibleViewer.classList.remove("hidden");
    this._accessibleViewer.clear();
    this._accessibleViewer.value = this._instantiationService.createInstance(zxa, this._elements.accessibleViewer, e, t, new w9f(this._parentEditor, e, t));
    this._onDidChangeHeight.fire();
  }
};
jxa = __decorate([__param(3, wi), __param(4, mo), __param(5, ln), __param(6, Cf), __param(7, Fn), __param(8, L2), __param(9, El), __param(10, ES), __param(11, Kc), __param(12, vS)], jxa);
zxa = Qxa = class extends yRe {
  set width(e) {
    this._width2.set(e, undefined);
  }
  constructor(e, t, i, r, s) {
    const o = Ua("width", 0);
    const a = Ua("diff", Qxa._asMapping(i));
    const l = Ro(m => [a.read(m)]);
    const u = Math.min(10, 8 + a.get().changedLineCount);
    const d = r.getModifiedOptions().get(68) * u;
    super(e, F0(true), () => {}, F0(false), o, F0(d), l, r, s);
    this.height = d;
    this._width2 = o;
    this._store.add(t.textModelN.onDidChangeContent(() => {
      a.set(Qxa._asMapping(i), undefined);
    }));
  }
  static _asMapping(e) {
    const t = e.getRanges0();
    const i = e.getRangesN();
    const r = rh.fromRangeInclusive(t[0]);
    const s = rh.fromRangeInclusive(i[0]);
    const o = [];
    for (let a = 1; a < t.length; a++) {
      o.push(new zH(t[a], i[a]));
    }
    return new _3(r, s, o);
  }
};
zxa = Qxa = __decorate([__param(4, ln)], zxa);
w9f = class {
  constructor(n, e, t) {
    this._editor = n;
    this._session = e;
    this._hunk = t;
  }
  getOriginalModel() {
    return this._session.textModel0;
  }
  getModifiedModel() {
    return this._session.textModelN;
  }
  getOriginalOptions() {
    return this._editor.getOptions();
  }
  getModifiedOptions() {
    return this._editor.getOptions();
  }
  originalReveal(n) {}
  modifiedReveal(n) {
    this._editor.revealRangeInCenterIfOutsideViewport(n || this._hunk.getRangesN()[0], 0);
  }
  modifiedSetSelection(n) {}
  modifiedFocus() {
    this._editor.focus();
  }
  getModifiedPosition() {
    return this._hunk.getRangesN()[0].getStartPosition();
  }
};

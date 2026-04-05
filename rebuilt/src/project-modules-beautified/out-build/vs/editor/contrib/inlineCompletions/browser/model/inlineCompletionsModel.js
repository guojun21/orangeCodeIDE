"use strict";

// Module: out-build/vs/editor/contrib/inlineCompletions/browser/model/inlineCompletionsModel.js
// Offset: 25335686 (bundle byte offset)
// Size: 20186 bytes
GD();
Nbe();
_s();
yn();
rt();
Uc();
oa();
Js();
zg();
hs();
Wt();
nI();
V$();
koe();
Ix();
tl();
ts();
db();
EW();
Kbe();
Tg();
QE();
q3t();
pU();
Tgi();
gSA();
vSA();
Fla();
RSA();
PSA();
Dgi();
$la = class extends at {
  get isAcceptingPartially() {
    return this._isAcceptingPartially;
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m) {
    super();
    this.textModel = e;
    this._selectedSuggestItem = t;
    this._textModelVersionId = i;
    this._positions = r;
    this._debounceValue = s;
    this._enabled = o;
    this._editor = a;
    this._instantiationService = l;
    this._commandService = u;
    this._languageConfigurationService = d;
    this._accessibilityService = m;
    this._isActive = Ua(this, false);
    this._onlyRequestInlineEditsSignal = IY(this);
    this._forceUpdateExplicitlySignal = IY(this);
    this._noDelaySignal = IY(this);
    this.isHidden = Ua(this, false);
    this._selectedInlineCompletionId = Ua(this, undefined);
    this.primaryPosition = Ro(this, f => this._positions.read(f)[0] ?? new ar(1, 1));
    this._isAcceptingPartially = false;
    this._onDidAccept = new Qe();
    this.onDidAccept = this._onDidAccept.event;
    this._lastShownInlineCompletionInfo = undefined;
    this._lastAcceptedInlineCompletionInfo = undefined;
    this._didUndoInlineEdits = FSc({
      owner: this,
      createEmptyChangeSummary: () => ({
        didUndo: false
      }),
      handleChange: (f, A) => {
        A.didUndo = f.didChange(this._textModelVersionId) && !!f.change?.isUndoing;
        return true;
      }
    }, (f, A) => {
      const w = this._textModelVersionId.read(f);
      if (w !== null && this._lastAcceptedInlineCompletionInfo && this._lastAcceptedInlineCompletionInfo.textModelVersionIdAfter === w - 1 && this._lastAcceptedInlineCompletionInfo.inlineCompletion.isInlineEdit && A.didUndo) {
        this._lastAcceptedInlineCompletionInfo = undefined;
        return true;
      } else {
        return false;
      }
    });
    this._preserveCurrentCompletionReasons = new Set([e$e.Redo, e$e.Undo, e$e.AcceptWord]);
    this.dontRefetchSignal = IY(this);
    this._fetchInlineCompletionsPromise = FSc({
      owner: this,
      createEmptyChangeSummary: () => ({
        dontRefetch: false,
        preserveCurrentCompletion: false,
        inlineCompletionTriggerKind: Ybe.Automatic,
        onlyRequestInlineEdits: false,
        shouldDebounce: true
      }),
      handleChange: (f, A) => {
        if (f.didChange(this._textModelVersionId) && this._preserveCurrentCompletionReasons.has(this._getReason(f.change))) {
          A.preserveCurrentCompletion = true;
        } else if (f.didChange(this._forceUpdateExplicitlySignal)) {
          A.inlineCompletionTriggerKind = Ybe.Explicit;
        } else if (f.didChange(this.dontRefetchSignal)) {
          A.dontRefetch = true;
        } else if (f.didChange(this._onlyRequestInlineEditsSignal)) {
          A.onlyRequestInlineEdits = true;
        } else if (f.didChange(this._noDelaySignal)) {
          A.shouldDebounce = false;
        }
        return true;
      }
    }, (f, A) => {
      this._source.clearOperationOnTextModelChange.read(f);
      this._noDelaySignal.read(f);
      this.dontRefetchSignal.read(f);
      this._onlyRequestInlineEditsSignal.read(f);
      this._forceUpdateExplicitlySignal.read(f);
      if ((!this._enabled.read(f) || !this._selectedSuggestItem.read(f)) && !this._isActive.read(f)) {
        this._source.cancelUpdate();
        return;
      }
      this._textModelVersionId.read(f);
      const C = this._source.suggestWidgetInlineCompletions.get();
      const x = this._selectedSuggestItem.read(f);
      if (C && !x) {
        const O = this._source.inlineCompletions.get();
        pp($ => {
          if (!O || C.request.versionId > O.request.versionId) {
            this._source.inlineCompletions.set(C.clone(), $);
          }
          this._source.clearSuggestWidgetInlineCompletions($);
        });
      }
      const I = this.primaryPosition.get();
      if (A.dontRefetch) {
        return Promise.resolve(true);
      }
      if (this._didUndoInlineEdits.read(f)) {
        pp(O => {
          this._source.clear(O);
        });
        return;
      }
      let B = {
        triggerKind: A.inlineCompletionTriggerKind,
        selectedSuggestionInfo: x?.toSelectedSuggestionInfo(),
        includeInlineCompletions: !A.onlyRequestInlineEdits,
        includeInlineEdits: this._inlineEditsEnabled.read(f)
      };
      if (B.triggerKind === Ybe.Automatic && this.textModel.getAlternativeVersionId() === this._lastShownInlineCompletionInfo?.alternateTextModelVersionId) {
        B = {
          ...B,
          includeInlineCompletions: !this._lastShownInlineCompletionInfo.inlineCompletion.isInlineEdit,
          includeInlineEdits: this._lastShownInlineCompletionInfo.inlineCompletion.isInlineEdit
        };
      }
      const R = this.selectedInlineCompletion.get() ?? this._inlineCompletionItems.get()?.inlineEdit;
      const N = A.preserveCurrentCompletion || R?.forwardStable ? R : undefined;
      const M = this._jumpedToId.map(O => !!O && O === this._inlineCompletionItems.get()?.inlineEdit?.semanticId);
      return this._source.fetch(I, B, N, A.shouldDebounce, M);
    });
    this._inlineCompletionItems = uF({
      owner: this
    }, f => {
      const A = this._source.inlineCompletions.read(f);
      if (!A) {
        return;
      }
      const w = this.primaryPosition.read(f);
      let C;
      const x = [];
      for (const I of A.inlineCompletions) {
        if (I.sourceInlineCompletion.isInlineEdit) {
          C = I;
        } else if (I.isVisible(this.textModel, w, f)) {
          x.push(I);
        }
      }
      if (x.length !== 0) {
        C = undefined;
      }
      return {
        inlineCompletions: x,
        inlineEdit: C
      };
    });
    this._filteredInlineCompletionItems = uF({
      owner: this,
      equalsFn: Y2o()
    }, f => this.isHidden.get() ? [] : this._inlineCompletionItems.read(f)?.inlineCompletions ?? []);
    this.selectedInlineCompletionIndex = Ro(this, f => {
      const A = this._selectedInlineCompletionId.read(f);
      const w = this._filteredInlineCompletionItems.read(f);
      const C = this._selectedInlineCompletionId === undefined ? -1 : w.findIndex(x => x.semanticId === A);
      if (C === -1) {
        this._selectedInlineCompletionId.set(undefined, undefined);
        return 0;
      } else {
        return C;
      }
    });
    this.selectedInlineCompletion = Ro(this, f => {
      const A = this._filteredInlineCompletionItems.read(f);
      const w = this.selectedInlineCompletionIndex.read(f);
      return A[w];
    });
    this.activeCommands = uF({
      owner: this,
      equalsFn: Y2o()
    }, f => this.selectedInlineCompletion.read(f)?.source.inlineCompletions.commands ?? []);
    this.inlineCompletionsCount = Ro(this, f => {
      if (this.lastTriggerKind.read(f) === Ybe.Explicit) {
        return this._filteredInlineCompletionItems.read(f).length;
      }
    });
    this._hasVisiblePeekWidgets = Ro(this, f => this._editorObs.openedPeekWidgets.read(f) > 0);
    this.state = uF({
      owner: this,
      equalsFn: (f, A) => !f || !A ? f === A : f.kind === "ghostText" && A.kind === "ghostText" ? zAg(f.ghostTexts, A.ghostTexts) && f.inlineCompletion === A.inlineCompletion && f.suggestItem === A.suggestItem : f.kind === "inlineEdit" && A.kind === "inlineEdit" ? f.inlineEdit.equals(A.inlineEdit) && f.cursorAtInlineEdit === A.cursorAtInlineEdit : false
    }, f => {
      const A = this.textModel;
      const C = this._inlineCompletionItems.read(f)?.inlineEdit;
      if (C) {
        if (this._hasVisiblePeekWidgets.read(f)) {
          return;
        }
        let I = C.toSingleTextEdit(f);
        I = XUe(I, A);
        const B = this.primaryPosition.read(f);
        const R = rh.fromRangeInclusive(I.range).addMargin(1, 1).contains(B.lineNumber);
        if (!R && !(C.inlineCompletion.cursorShowRange?.containsPosition(B) ?? true) && !this._inAcceptFlow.read(f)) {
          return;
        }
        const M = C.inlineCompletion.source.inlineCompletions.commands;
        const O = new fyg(I, M ?? [], C.inlineCompletion);
        const $ = C.updatedEdit.read(f);
        const H = $ ? Fte.fromOffsetEdit($, new bKe(this.textModel)).edits : [I];
        return {
          kind: "inlineEdit",
          inlineEdit: O,
          inlineCompletion: C,
          edits: H,
          cursorAtInlineEdit: R
        };
      }
      const x = this._selectedSuggestItem.read(f);
      if (x) {
        const I = XUe(x.toSingleTextEdit(), A);
        const B = this._computeAugmentation(I, f);
        if (!this._suggestPreviewEnabled.read(f) && !B) {
          return;
        }
        const N = B?.edit ?? I;
        const M = B ? B.edit.text.length - I.text.length : 0;
        const O = this._suggestPreviewMode.read(f);
        const $ = this._positions.read(f);
        const H = [N, ...sjl(this.textModel, $, N)];
        const W = H.map((Y, j) => YAg(Y, A, O, $[j], M)).filter(Ch);
        const z = W[0] ?? new fdn(N.range.endLineNumber, []);
        return {
          kind: "ghostText",
          edits: H,
          primaryGhostText: z,
          ghostTexts: W,
          inlineCompletion: B?.completion,
          suggestItem: x
        };
      } else {
        if (!this._isActive.read(f)) {
          return;
        }
        const I = this.selectedInlineCompletion.read(f);
        if (!I) {
          return;
        }
        const B = I.toSingleTextEdit(f);
        const R = this._inlineSuggestMode.read(f);
        const N = this._positions.read(f);
        const M = [B, ...sjl(this.textModel, N, B)];
        const O = M.map(($, H) => YAg($, A, R, N[H], 0)).filter(Ch);
        if (O[0]) {
          return {
            kind: "ghostText",
            edits: M,
            primaryGhostText: O[0],
            ghostTexts: O,
            inlineCompletion: I,
            suggestItem: undefined
          };
        } else {
          return undefined;
        }
      }
    });
    this.status = Ro(this, f => {
      if (this._source.loading.read(f)) {
        return "loading";
      }
      const A = this.state.read(f);
      if (A?.kind === "ghostText") {
        return "ghostText";
      } else if (A?.kind === "inlineEdit") {
        return "inlineEdit";
      } else {
        return "noSuggestion";
      }
    });
    this.inlineCompletionState = Ro(this, f => {
      const A = this.state.read(f);
      if (!!A && A.kind === "ghostText" && !this._editorObs.inComposition.read(f)) {
        return A;
      }
    });
    this.inlineEditState = Ro(this, f => {
      const A = this.state.read(f);
      if (!!A && A.kind === "inlineEdit") {
        return A;
      }
    });
    this.inlineEditAvailable = Ro(this, f => !!this.inlineEditState.read(f));
    this.warning = Ro(this, f => this.inlineCompletionState.read(f)?.inlineCompletion?.sourceInlineCompletion.warning);
    this.ghostTexts = uF({
      owner: this,
      equalsFn: zAg
    }, f => {
      const A = this.inlineCompletionState.read(f);
      if (A) {
        return A.ghostTexts;
      }
    });
    this.primaryGhostText = uF({
      owner: this,
      equalsFn: VAg
    }, f => {
      const A = this.inlineCompletionState.read(f);
      if (A) {
        return A?.primaryGhostText;
      }
    });
    this.showCollapsed = Ro(this, f => {
      const A = this.state.read(f);
      if (!A || A.kind !== "inlineEdit") {
        return false;
      }
      const w = A.inlineCompletion.updatedEditModelVersion === this._textModelVersionId.read(f);
      return (this._inlineEditsShowCollapsedEnabled.read(f) || !w) && this._jumpedToId.read(f) !== A.inlineCompletion.semanticId && !this._inAcceptFlow.read(f);
    });
    this._tabShouldIndent = Ro(this, f => {
      if (this._inAcceptFlow.read(f)) {
        return false;
      }
      function A(x) {
        return x.startLineNumber !== x.endLineNumber;
      }
      function w(x, I) {
        const B = x.getLineIndentColumn(I);
        const R = x.getLineLastNonWhitespaceColumn(I);
        const N = Math.max(R, B);
        return new Zt(I, B, I, N);
      }
      return this._editorObs.selections.read(f)?.some(x => x.isEmpty() ? this.textModel.getLineLength(x.startLineNumber) === 0 : A(x) || x.containsRange(w(this.textModel, x.startLineNumber)));
    });
    this.tabShouldJumpToInlineEdit = Ro(this, f => {
      if (this._tabShouldIndent.read(f)) {
        return false;
      }
      const A = this.inlineEditState.read(f);
      if (A) {
        if (this.showCollapsed.read(f)) {
          return true;
        } else {
          return !A.cursorAtInlineEdit;
        }
      } else {
        return false;
      }
    });
    this.tabShouldAcceptInlineEdit = Ro(this, f => {
      const A = this.inlineEditState.read(f);
      if (!A || this.showCollapsed.read(f)) {
        return false;
      } else if (A.inlineEdit.range.startLineNumber === this._editorObs.cursorLineNumber.read(f) || this._jumpedToId.read(f) === A.inlineCompletion.semanticId) {
        return true;
      } else if (this._tabShouldIndent.read(f)) {
        return false;
      } else {
        return A.cursorAtInlineEdit;
      }
    });
    this._inAcceptPartialFlow = Ua(this, false);
    this.inPartialAcceptFlow = this._inAcceptPartialFlow;
    this._jumpedToId = Ua(this, undefined);
    this._inAcceptFlow = Ua(this, false);
    this.inAcceptFlow = this._inAcceptFlow;
    this._source = this._register(this._instantiationService.createInstance(Ula, this.textModel, this._textModelVersionId, this._debounceValue));
    this.lastTriggerKind = this._source.inlineCompletions.map(this, f => f?.request.context.triggerKind);
    this._editorObs = HB(this._editor);
    this._suggestPreviewEnabled = this._editorObs.getOption(123).map(f => f.preview);
    this._suggestPreviewMode = this._editorObs.getOption(123).map(f => f.previewMode);
    this._inlineSuggestMode = this._editorObs.getOption(64).map(f => f.mode);
    this._inlineEditsEnabled = this._editorObs.getOption(64).map(f => !!f.edits.enabled);
    this._inlineEditsShowCollapsedEnabled = this._editorObs.getOption(64).map(f => f.edits.showCollapsed);
    this._register($gt(this._fetchInlineCompletionsPromise));
    let p;
    this._register(Oc(f => {
      const w = this.inlineCompletionState.read(f)?.inlineCompletion;
      if (w?.semanticId !== p?.semanticId && (p = w, w)) {
        const C = w.inlineCompletion;
        const x = C.source;
        x.provider.handleItemDidShow?.(x.inlineCompletions, C.sourceInlineCompletion, C.insertText);
      }
    }));
    this._register(Oc(f => {
      const A = this._source.inlineCompletions.read(f);
      if (A) {
        for (const w of A.inlineCompletions) {
          if (w.updatedEdit.read(f) === undefined) {
            this.stop();
            break;
          }
        }
      }
    }));
    this._register(Oc(f => {
      this._editorObs.versionId.read(f);
      this._inAcceptFlow.set(false, undefined);
    }));
    this._register(Oc(f => {
      if (this.state.map(w => !w || w.kind === "inlineEdit" && !w.cursorAtInlineEdit).read(f)) {
        this._jumpedToId.set(undefined, undefined);
      }
    }));
    const g = this.inlineEditState.map(f => f?.inlineCompletion.semanticId);
    this._register(Oc(f => {
      if (g.read(f)) {
        this._editor.pushUndoStop();
        this._lastShownInlineCompletionInfo = {
          alternateTextModelVersionId: this.textModel.getAlternativeVersionId(),
          inlineCompletion: this.state.get().inlineCompletion.inlineCompletion
        };
      }
    }));
    this._didUndoInlineEdits.recomputeInitiallyAndOnChange(this._store);
  }
  debugGetSelectedSuggestItem() {
    return this._selectedSuggestItem;
  }
  getIndentationInfo(e) {
    let t = false;
    let i = true;
    const r = this?.primaryGhostText.read(e);
    if (this?._selectedSuggestItem && r && r.parts.length > 0) {
      const {
        column: s,
        lines: o
      } = r.parts[0];
      const a = o[0].line;
      const l = this.textModel.getLineIndentColumn(r.lineNumber);
      if (s <= l) {
        let d = TH(a);
        if (d === -1) {
          d = a.length - 1;
        }
        t = d > 0;
        const m = this.textModel.getOptions().tabSize;
        i = ZP.visibleColumnFromColumn(a, d + 1, m) < m;
      }
    }
    return {
      startsWithIndentation: t,
      startsWithIndentationLessThanTabSize: i
    };
  }
  _getReason(e) {
    if (e?.isUndoing) {
      return e$e.Undo;
    } else if (e?.isRedoing) {
      return e$e.Redo;
    } else if (this.isAcceptingPartially) {
      return e$e.AcceptWord;
    } else {
      return e$e.Other;
    }
  }
  async trigger(e, t) {
    h4t(e, i => {
      if (t?.onlyFetchInlineEdits) {
        this._onlyRequestInlineEditsSignal.trigger(i);
      }
      if (t?.noDelay) {
        this._noDelaySignal.trigger(i);
      }
      this._isActive.set(true, i);
    });
    await this._fetchInlineCompletionsPromise.get();
  }
  async triggerExplicitly(e, t = false) {
    h4t(e, i => {
      if (t) {
        this._onlyRequestInlineEditsSignal.trigger(i);
      }
      this._isActive.set(true, i);
      this._inAcceptFlow.set(true, i);
      this._forceUpdateExplicitlySignal.trigger(i);
    });
    await this._fetchInlineCompletionsPromise.get();
  }
  stop(e = "automatic", t) {
    h4t(t, i => {
      if (e === "explicitCancel") {
        const r = this.state.get()?.inlineCompletion;
        const s = r?.source;
        const o = r?.sourceInlineCompletion;
        if (o && s?.provider.handleRejection) {
          s.provider.handleRejection(s.inlineCompletions, o);
        }
      }
      this._inAcceptPartialFlow.set(false, i);
      this._isActive.set(false, i);
      this._source.clear(i);
    });
  }
  _computeAugmentation(e, t) {
    const i = this.textModel;
    const r = this._source.suggestWidgetInlineCompletions.read(t);
    const s = r ? r.inlineCompletions : [this.selectedInlineCompletion.read(t)].filter(Ch);
    return TFt(s, a => {
      let l = a.toSingleTextEdit(t);
      l = XUe(l, i, Zt.fromPositions(l.range.getStartPosition(), e.range.getEndPosition()));
      if (KAg(l, e)) {
        return {
          completion: a,
          edit: l
        };
      } else {
        return undefined;
      }
    });
  }
  async _deltaSelectedInlineCompletionIndex(e) {
    await this.triggerExplicitly();
    const t = this._filteredInlineCompletionItems.get() || [];
    if (t.length > 0) {
      const i = (this.selectedInlineCompletionIndex.get() + e + t.length) % t.length;
      this._selectedInlineCompletionId.set(t[i].semanticId, undefined);
    } else {
      this._selectedInlineCompletionId.set(undefined, undefined);
    }
  }
  async next() {
    await this._deltaSelectedInlineCompletionIndex(1);
  }
  async previous() {
    await this._deltaSelectedInlineCompletionIndex(-1);
  }
  async accept(e = this._editor) {
    if (e.getModel() !== this.textModel) {
      throw new _m();
    }
    if (this._inAcceptPartialFlow.get()) {
      this._inAcceptPartialFlow.set(false, undefined);
      this.jump();
      return;
    }
    let t;
    const i = this.state.get();
    if (i?.kind === "ghostText") {
      if (!i || i.primaryGhostText.isEmpty() || !i.inlineCompletion) {
        return;
      }
      t = i.inlineCompletion;
    } else if (i?.kind === "inlineEdit") {
      t = i.inlineCompletion;
    } else {
      return;
    }
    const r = t.toInlineCompletion(undefined);
    if (r.command) {
      r.source.addRef();
    }
    e.pushUndoStop();
    if (r.snippetInfo) {
      e.executeEdits("inlineSuggestion.accept", [zb.replace(r.range, ""), ...r.additionalTextEdits]);
      e.setPosition(r.snippetInfo.range.getStartPosition(), "inlineCompletionAccept");
      tx.get(e)?.insert(r.snippetInfo.snippet, {
        undoStopBefore: false
      });
    } else {
      const s = i.edits;
      const o = jQl(s).map(a => Vl.fromPositions(a));
      e.executeEdits("inlineSuggestion.accept", [...s.map(a => zb.replace(a.range, a.text)), ...r.additionalTextEdits]);
      e.setSelections(i.kind === "inlineEdit" ? o.slice(-1) : o, "inlineCompletionAccept");
      if (i.kind === "inlineEdit" && !this._accessibilityService.isMotionReduced()) {
        const a = new Fte(s).getNewRanges();
        const l = this._store.add(new byg(e, a, () => {
          this._store.delete(l);
        }));
      }
    }
    this._onDidAccept.fire();
    this.stop();
    if (r.command) {
      await this._commandService.executeCommand(r.command.id, ...(r.command.arguments || [])).then(undefined, JE);
      r.source.removeRef();
    }
    this._inAcceptFlow.set(true, undefined);
    this._lastAcceptedInlineCompletionInfo = {
      textModelVersionIdAfter: this.textModel.getVersionId(),
      inlineCompletion: r
    };
  }
  async acceptNextWord(e) {
    await this._acceptNext(e, (t, i) => {
      const r = this.textModel.getLanguageIdAtPosition(t.lineNumber, t.column);
      const s = this._languageConfigurationService.getLanguageConfiguration(r);
      const o = new RegExp(s.wordDefinition.source, s.wordDefinition.flags.replace("g", ""));
      const a = i.match(o);
      let l = 0;
      if (a && a.index !== undefined) {
        if (a.index === 0) {
          l = a[0].length;
        } else {
          l = a.index;
        }
      } else {
        l = i.length;
      }
      const d = /\s+/g.exec(i);
      if (d && d.index !== undefined && d.index + d[0].length < l) {
        l = d.index + d[0].length;
      }
      return l;
    }, 0);
  }
  async acceptNextLine(e) {
    await this._acceptNext(e, (t, i) => {
      const r = i.match(/\n/);
      if (r && r.index !== undefined) {
        return r.index + 1;
      } else {
        return i.length;
      }
    }, 1);
  }
  async clearCopilotSuggestions() {
    pp(e => {
      this._source.clear(e);
    });
  }
  async _acceptNext(e, t, i) {
    if (e.getModel() !== this.textModel) {
      throw new _m();
    }
    const r = this.inlineCompletionState.get();
    if (!r || r.primaryGhostText.isEmpty() || !r.inlineCompletion) {
      return;
    }
    const s = r.primaryGhostText;
    const o = r.inlineCompletion.toInlineCompletion(undefined);
    if (o.snippetInfo || o.filterText !== o.insertText) {
      await this.accept(e);
      return;
    }
    const a = s.parts[0];
    const l = new ar(s.lineNumber, a.column);
    const u = a.text;
    const d = t(l, u);
    if (d === u.length && s.parts.length === 1) {
      this.accept(e);
      return;
    }
    const m = u.substring(0, d);
    const p = this._positions.get();
    const g = p[0];
    o.source.addRef();
    try {
      this._isAcceptingPartially = true;
      try {
        e.pushUndoStop();
        const f = Zt.fromPositions(g, l);
        const A = e.getModel().getValueInRange(f) + m;
        const w = new cI(f, A);
        const C = [w, ...sjl(this.textModel, p, w)];
        const x = jQl(C).map(I => Vl.fromPositions(I));
        e.executeEdits("inlineSuggestion.accept", C.map(I => zb.replace(I.range, I.text)));
        e.setSelections(x, "inlineCompletionPartialAccept");
        e.revealPositionInCenterIfOutsideViewport(e.getPosition(), 1);
      } finally {
        this._isAcceptingPartially = false;
      }
      if (o.source.provider.handlePartialAccept) {
        const f = Zt.fromPositions(o.range.getStartPosition(), YN.ofText(m).addToPosition(l));
        const w = e.getModel().getValueInRange(f, 1).length;
        o.source.provider.handlePartialAccept(o.source.inlineCompletions, o.sourceInlineCompletion, w, {
          kind: i,
          acceptedLength: w
        });
      }
    } finally {
      o.source.removeRef();
    }
  }
  async acceptNextInlineEditPart(e) {
    if (e.getModel() !== this.textModel) {
      throw new _m();
    }
    const t = this.inlineEditState.get();
    const i = t?.inlineCompletion.updatedEdit.get();
    const r = t?.inlineCompletion.toInlineCompletion(undefined);
    if (!i || i.isEmpty || !r) {
      return;
    }
    const s = i.edits[0];
    const o = new cI(Zt.fromPositions(this.textModel.getPositionAt(s.replaceRange.start), this.textModel.getPositionAt(s.replaceRange.endExclusive)), s.newText);
    if (!this._editor.getSelection()?.getStartPosition().equals(o.range.getStartPosition()) || !this._inAcceptPartialFlow.get()) {
      this._inAcceptPartialFlow.set(true, undefined);
      this.jump();
      return;
    }
    const l = i.edits[1] ?? undefined;
    const u = l ? new cI(Zt.fromPositions(this.textModel.getPositionAt(l.replaceRange.start), this.textModel.getPositionAt(l.replaceRange.endExclusive)), l.newText) : undefined;
    r.source.addRef();
    try {
      this._isAcceptingPartially = true;
      try {
        e.pushUndoStop();
        let d;
        if (u) {
          const [p, g] = HAg([o, u]);
          d = [Vl.fromPositions(g.getStartPosition())];
        } else {
          d = jQl([o]).map(p => Vl.fromPositions(p));
        }
        const m = [o];
        e.executeEdits("inlineSuggestion.accept", m.map(p => zb.replace(p.range, p.text)));
        e.setSelections(d, "inlineCompletionPartialAccept");
        e.revealPositionInCenterIfOutsideViewport(e.getPosition(), 1);
      } finally {
        this._isAcceptingPartially = false;
      }
    } finally {
      r.source.removeRef();
    }
  }
  handleSuggestAccepted(e) {
    const t = XUe(e.toSingleTextEdit(), this.textModel);
    const i = this._computeAugmentation(t, undefined);
    if (!i) {
      return;
    }
    const r = i.completion.source;
    const s = i.completion.sourceInlineCompletion;
    const o = i.completion.toInlineCompletion(undefined);
    const l = this.textModel.getValueInRange(o.range, 1).length + t.text.length;
    r.provider.handlePartialAccept?.(r.inlineCompletions, s, t.text.length, {
      kind: 2,
      acceptedLength: l
    });
  }
  extractReproSample() {
    const e = this.textModel.getValue();
    const t = this.state.get()?.inlineCompletion?.toInlineCompletion(undefined);
    return {
      documentValue: e,
      inlineCompletion: t?.sourceInlineCompletion
    };
  }
  jump() {
    const e = this.inlineEditState.get();
    if (e) {
      pp(t => {
        this._jumpedToId.set(e.inlineCompletion.semanticId, t);
        this.dontRefetchSignal.trigger(t);
        const i = e.inlineCompletion.toSingleTextEdit(undefined);
        this._editor.setPosition(i.range.getStartPosition(), "inlineCompletions.jump");
        if (i.range.startLineNumber === i.range.endLineNumber && !i.text.includes(`
`)) {
          this._editor.revealPosition(i.range.getStartPosition());
        } else {
          const s = new Zt(i.range.startLineNumber - 1, 1, i.range.endLineNumber + 1, 1);
          this._editor.revealRange(s, 1);
        }
        this._editor.focus();
      });
    }
  }
  async handleInlineEditShown(e) {
    if (!e.didShow) {
      e.markAsShown();
      e.source.provider.handleItemDidShow?.(e.source.inlineCompletions, e.sourceInlineCompletion, e.insertText);
      if (e.shownCommand) {
        await this._commandService.executeCommand(e.shownCommand.id, ...(e.shownCommand.arguments || []));
      }
    }
  }
};
$la = __decorate([__param(7, ln), __param(8, fr), __param(9, JS), __param(10, Cf)], $la);
(function (n) {
  n[n.Undo = 0] = "Undo";
  n[n.Redo = 1] = "Redo";
  n[n.AcceptWord = 2] = "AcceptWord";
  n[n.Other = 3] = "Other";
})(e$e ||= {});
byg = class extends at {
  constructor(n, e, t) {
    super();
    if (t) {
      this._register({
        dispose: () => t()
      });
    }
    this._register(HB(n).setDecorations(F0(e.map(s => ({
      range: s,
      options: {
        description: "animation",
        className: "edits-fadeout-decoration",
        zIndex: 1
      }
    })))));
    const i = new zQl(1, 0, 1000, pSA);
    const r = new QAg(i);
    this._register(Oc(s => {
      const o = r.getValue(s);
      n.getContainerDomNode().style.setProperty("--animation-opacity", o.toString());
      if (i.isFinished()) {
        this.dispose();
      }
    }));
  }
};

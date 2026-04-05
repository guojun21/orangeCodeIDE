"use strict";

// Module: out-build/vs/editor/contrib/suggest/browser/suggestModel.js
// Offset: 25370196 (bundle byte offset)
// Size: 11242 bytes
vr();
Po();
_s();
yn();
rt();
oa();
db();
Hk();
Cyg();
Kf();
Ei();
si();
jr();
Pa();
kyg();
pme();
Cm();
Q_();
Js();
pdn();
pU();
qg();
VA();
jet = class {
  static shouldAutoTrigger(n) {
    if (!n.hasModel()) {
      return false;
    }
    const e = n.getModel();
    const t = n.getPosition();
    e.tokenization.tokenizeIfCheap(t.lineNumber);
    const i = e.getWordAtPosition(t);
    return !!i && (i.endColumn === t.column || i.startColumn + 1 === t.column) && !!isNaN(Number(i.word));
  }
  constructor(n, e, t) {
    this.leadingLineContent = n.getLineContent(e.lineNumber).substr(0, e.column - 1);
    this.leadingWord = n.getWordUntilPosition(e);
    this.lineNumber = e.lineNumber;
    this.column = e.column;
    this.triggerOptions = t;
  }
};
(function (n) {
  n[n.Idle = 0] = "Idle";
  n[n.Manual = 1] = "Manual";
  n[n.Auto = 2] = "Auto";
})(Eyg ||= {});
Fgi = hjl = class {
  constructor(e, t, i, r, s, o, a, l, u) {
    this._editor = e;
    this._editorWorkerService = t;
    this._clipboardService = i;
    this._telemetryService = r;
    this._logService = s;
    this._contextKeyService = o;
    this._configurationService = a;
    this._languageFeaturesService = l;
    this._envService = u;
    this._toDispose = new Ut();
    this._triggerCharacterListener = new Ut();
    this._triggerQuickSuggest = new O$();
    this._triggerState = undefined;
    this._completionDisposables = new Ut();
    this._onDidCancel = new Qe();
    this._onDidTrigger = new Qe();
    this._onDidSuggest = new Qe();
    this.onDidCancel = this._onDidCancel.event;
    this.onDidTrigger = this._onDidTrigger.event;
    this.onDidSuggest = this._onDidSuggest.event;
    this._currentSelection = this._editor.getSelection() || new Vl(1, 1, 1, 1);
    this._toDispose.add(this._editor.onDidChangeModel(() => {
      this._updateTriggerCharacters();
      this.cancel();
    }));
    this._toDispose.add(this._editor.onDidChangeModelLanguage(() => {
      this._updateTriggerCharacters();
      this.cancel();
    }));
    this._toDispose.add(this._editor.onDidChangeConfiguration(() => {
      this._updateTriggerCharacters();
    }));
    this._toDispose.add(this._languageFeaturesService.completionProvider.onDidChange(() => {
      this._updateTriggerCharacters();
      this._updateActiveSuggestSession();
    }));
    let d = false;
    this._toDispose.add(this._editor.onDidCompositionStart(() => {
      d = true;
    }));
    this._toDispose.add(this._editor.onDidCompositionEnd(() => {
      d = false;
      this._onCompositionEnd();
    }));
    this._toDispose.add(this._editor.onDidChangeCursorSelection(m => {
      if (!d) {
        this._onCursorChange(m);
      }
    }));
    this._toDispose.add(this._editor.onDidChangeModelContent(() => {
      if (!d && this._triggerState !== undefined) {
        this._refilterCompletionItems();
      }
    }));
    this._updateTriggerCharacters();
  }
  dispose() {
    Bo(this._triggerCharacterListener);
    Bo([this._onDidCancel, this._onDidSuggest, this._onDidTrigger, this._triggerQuickSuggest]);
    this._toDispose.dispose();
    this._completionDisposables.dispose();
    this.cancel();
  }
  _updateTriggerCharacters() {
    this._triggerCharacterListener.clear();
    if (this._editor.getOption(96) || !this._editor.hasModel() || !this._editor.getOption(126)) {
      return;
    }
    const e = new Map();
    for (const i of this._languageFeaturesService.completionProvider.all(this._editor.getModel())) {
      for (const r of i.triggerCharacters || []) {
        let s = e.get(r);
        if (!s) {
          s = new Set();
          const o = eSA();
          if (o) {
            s.add(o);
          }
          e.set(r, s);
        }
        s.add(i);
      }
    }
    const t = i => {
      if (!USA(this._editor, this._contextKeyService, this._configurationService) || jet.shouldAutoTrigger(this._editor)) {
        return;
      }
      if (!i) {
        const o = this._editor.getPosition();
        i = this._editor.getModel().getLineContent(o.lineNumber).substr(0, o.column - 1);
      }
      let r = "";
      if (ggt(i.charCodeAt(i.length - 1))) {
        if (d3(i.charCodeAt(i.length - 2))) {
          r = i.substr(i.length - 2);
        }
      } else {
        r = i.charAt(i.length - 1);
      }
      const s = e.get(r);
      if (s) {
        const o = new Map();
        if (this._completionModel) {
          for (const [a, l] of this._completionModel.getItemsByProvider()) {
            if (!s.has(a)) {
              o.set(a, l);
            }
          }
        }
        this.trigger({
          auto: true,
          triggerKind: 1,
          triggerCharacter: r,
          retrigger: !!this._completionModel,
          clipboardText: this._completionModel?.clipboardText,
          completionOptions: {
            providerFilter: s,
            providerItemsToReuse: o
          }
        });
      }
    };
    this._triggerCharacterListener.add(this._editor.onDidType(t));
    this._triggerCharacterListener.add(this._editor.onDidCompositionEnd(() => t()));
  }
  get state() {
    if (this._triggerState) {
      if (this._triggerState.auto) {
        return 2;
      } else {
        return 1;
      }
    } else {
      return 0;
    }
  }
  cancel(e = false) {
    if (this._triggerState !== undefined) {
      this._triggerQuickSuggest.cancel();
      this._requestToken?.cancel();
      this._requestToken = undefined;
      this._triggerState = undefined;
      this._completionModel = undefined;
      this._context = undefined;
      this._onDidCancel.fire({
        retrigger: e
      });
    }
  }
  clear() {
    this._completionDisposables.clear();
  }
  _updateActiveSuggestSession() {
    if (this._triggerState !== undefined) {
      if (!this._editor.hasModel() || !this._languageFeaturesService.completionProvider.has(this._editor.getModel())) {
        this.cancel();
      } else {
        this.trigger({
          auto: this._triggerState.auto,
          retrigger: true
        });
      }
    }
  }
  _onCursorChange(e) {
    if (!this._editor.hasModel()) {
      return;
    }
    const t = this._currentSelection;
    this._currentSelection = this._editor.getSelection();
    if (!e.selection.isEmpty() || e.reason !== 0 && e.reason !== 3 || e.source !== "keyboard" && e.source !== "deleteLeft") {
      this.cancel();
      return;
    }
    if (this._triggerState === undefined && e.reason === 0) {
      if (t.containsRange(this._currentSelection) || t.getEndPosition().isBeforeOrEqual(this._currentSelection.getPosition())) {
        this._doTriggerQuickSuggest();
      }
    } else if (this._triggerState !== undefined && e.reason === 3) {
      this._refilterCompletionItems();
    }
  }
  _onCompositionEnd() {
    if (this._triggerState === undefined) {
      this._doTriggerQuickSuggest();
    } else {
      this._refilterCompletionItems();
    }
  }
  _doTriggerQuickSuggest() {
    if (!xCt.isAllOff(this._editor.getOption(94)) && (!this._editor.getOption(123).snippetsPreventQuickSuggestions || !tx.get(this._editor)?.isInSnippet())) {
      this.cancel();
      this._triggerQuickSuggest.cancelAndSet(() => {
        if (this._triggerState !== undefined || !jet.shouldAutoTrigger(this._editor) || !this._editor.hasModel() || !this._editor.hasWidgetFocus()) {
          return;
        }
        const e = this._editor.getModel();
        const t = this._editor.getPosition();
        const i = this._editor.getOption(94);
        if (!xCt.isAllOff(i)) {
          if (!xCt.isAllOn(i)) {
            e.tokenization.tokenizeIfCheap(t.lineNumber);
            const r = e.tokenization.getLineTokens(t.lineNumber);
            const s = r.getStandardTokenType(r.findTokenIndexAtOffset(Math.max(t.column - 1 - 1, 0)));
            if (xCt.valueFor(i, s) !== "on") {
              return;
            }
          }
          if (OSA(this._editor, this._contextKeyService, this._configurationService) && this._languageFeaturesService.completionProvider.has(e)) {
            this.trigger({
              auto: true
            });
          }
        }
      }, this._editor.getOption(95));
    }
  }
  _refilterCompletionItems() {
    Kd(this._editor.hasModel());
    Kd(this._triggerState !== undefined);
    const e = this._editor.getModel();
    const t = this._editor.getPosition();
    const i = new jet(e, t, {
      ...this._triggerState,
      refilter: true
    });
    this._onNewContext(i);
  }
  trigger(e) {
    if (!this._editor.hasModel()) {
      return;
    }
    const t = this._editor.getModel();
    const i = new jet(t, this._editor.getPosition(), e);
    this.cancel(e.retrigger);
    this._triggerState = e;
    this._onDidTrigger.fire({
      auto: e.auto,
      shy: e.shy ?? false,
      position: this._editor.getPosition()
    });
    this._context = i;
    let r = {
      triggerKind: e.triggerKind ?? 0
    };
    if (e.triggerCharacter) {
      r = {
        triggerKind: 1,
        triggerCharacter: e.triggerCharacter
      };
    }
    this._requestToken = new Wc();
    const s = this._editor.getOption(117);
    let o = 1;
    switch (s) {
      case "top":
        o = 0;
        break;
      case "bottom":
        o = 2;
        break;
    }
    const {
      itemKind: a,
      showDeprecated: l
    } = hjl.createSuggestFilter(this._editor);
    const u = new wgi(o, e.completionOptions?.kindFilter ?? a, e.completionOptions?.providerFilter, e.completionOptions?.providerItemsToReuse, l);
    const d = ljl.create(this._editorWorkerService, this._editor);
    const m = this._editor.getPosition();
    const p = this._requestToken.token;
    const g = $be("suggest.provideSuggestionItems", async () => Lla(this._languageFeaturesService.completionProvider, t, m, u, r, p));
    Promise.all([g, d]).then(async ([f, A]) => {
      this._requestToken?.dispose();
      if (!this._editor.hasModel()) {
        f.disposable.dispose();
        return;
      }
      let w = e?.clipboardText;
      if (!w && f.needsClipboard) {
        w = await this._clipboardService.readText();
      }
      if (this._triggerState === undefined) {
        f.disposable.dispose();
        return;
      }
      const C = this._editor.getModel();
      const x = new jet(C, this._editor.getPosition(), e);
      const I = {
        ...o3n.default,
        firstMatchCanBeWeak: !this._editor.getOption(123).matchOnWordStartOnly
      };
      this._completionModel = new djl(f.items, this._context.column, {
        leadingLineContent: x.leadingLineContent,
        characterCountDelta: x.column - this._context.column
      }, A, this._editor.getOption(123), this._editor.getOption(117), I, w);
      this._completionDisposables.add(f.disposable);
      this._onNewContext(x);
      this._reportDurationsTelemetry(f.durations);
      if (!this._envService.isBuilt || this._envService.isExtensionDevelopment) {
        for (const B of f.items) {
          if (B.isInvalid) {
            this._logService.warn(`[suggest] did IGNORE invalid completion item from ${B.provider._debugDisplayName}`, B.completion);
          }
        }
      }
    }).catch(Gc);
  }
  _reportDurationsTelemetry(e) {
    if (!(Math.random() > 0.0001)) {
      setTimeout(() => {
        this._telemetryService.publicLog2("suggest.durations.json", {
          data: JSON.stringify(e)
        });
        this._logService.debug("suggest.durations.json", e);
      });
    }
  }
  static createSuggestFilter(e) {
    const t = new Set();
    if (e.getOption(117) === "none") {
      t.add(27);
    }
    const r = e.getOption(123);
    if (!r.showMethods) {
      t.add(0);
    }
    if (!r.showFunctions) {
      t.add(1);
    }
    if (!r.showConstructors) {
      t.add(2);
    }
    if (!r.showFields) {
      t.add(3);
    }
    if (!r.showVariables) {
      t.add(4);
    }
    if (!r.showClasses) {
      t.add(5);
    }
    if (!r.showStructs) {
      t.add(6);
    }
    if (!r.showInterfaces) {
      t.add(7);
    }
    if (!r.showModules) {
      t.add(8);
    }
    if (!r.showProperties) {
      t.add(9);
    }
    if (!r.showEvents) {
      t.add(10);
    }
    if (!r.showOperators) {
      t.add(11);
    }
    if (!r.showUnits) {
      t.add(12);
    }
    if (!r.showValues) {
      t.add(13);
    }
    if (!r.showConstants) {
      t.add(14);
    }
    if (!r.showEnums) {
      t.add(15);
    }
    if (!r.showEnumMembers) {
      t.add(16);
    }
    if (!r.showKeywords) {
      t.add(17);
    }
    if (!r.showWords) {
      t.add(18);
    }
    if (!r.showColors) {
      t.add(19);
    }
    if (!r.showFiles) {
      t.add(20);
    }
    if (!r.showReferences) {
      t.add(21);
    }
    if (!r.showColors) {
      t.add(22);
    }
    if (!r.showFolders) {
      t.add(23);
    }
    if (!r.showTypeParameters) {
      t.add(24);
    }
    if (!r.showSnippets) {
      t.add(27);
    }
    if (!r.showUsers) {
      t.add(25);
    }
    if (!r.showIssues) {
      t.add(26);
    }
    return {
      itemKind: t,
      showDeprecated: r.showDeprecated
    };
  }
  _onNewContext(e) {
    if (this._context) {
      if (e.lineNumber !== this._context.lineNumber) {
        this.cancel();
        return;
      }
      if (rE(e.leadingLineContent) !== rE(this._context.leadingLineContent)) {
        this.cancel();
        return;
      }
      if (e.column < this._context.column) {
        if (e.leadingWord.word) {
          this.trigger({
            auto: this._context.triggerOptions.auto,
            retrigger: true
          });
        } else {
          this.cancel();
        }
        return;
      }
      if (this._completionModel) {
        if (e.leadingWord.word.length !== 0 && e.leadingWord.startColumn > this._context.leadingWord.startColumn) {
          if (jet.shouldAutoTrigger(this._editor) && this._context) {
            const i = this._completionModel.getItemsByProvider();
            this.trigger({
              auto: this._context.triggerOptions.auto,
              retrigger: true,
              clipboardText: this._completionModel.clipboardText,
              completionOptions: {
                providerItemsToReuse: i
              }
            });
          }
          return;
        }
        if (e.column > this._context.column && this._completionModel.getIncompleteProvider().size > 0 && e.leadingWord.word.length !== 0) {
          const t = new Map();
          const i = new Set();
          for (const [r, s] of this._completionModel.getItemsByProvider()) {
            if (s.length > 0 && s[0].container.incomplete) {
              i.add(r);
            } else {
              t.set(r, s);
            }
          }
          this.trigger({
            auto: this._context.triggerOptions.auto,
            triggerKind: 2,
            retrigger: true,
            clipboardText: this._completionModel.clipboardText,
            completionOptions: {
              providerFilter: i,
              providerItemsToReuse: t
            }
          });
        } else {
          const t = this._completionModel.lineContext;
          let i = false;
          this._completionModel.lineContext = {
            leadingLineContent: e.leadingLineContent,
            characterCountDelta: e.column - this._context.column
          };
          if (this._completionModel.items.length === 0) {
            const r = jet.shouldAutoTrigger(this._editor);
            if (!this._context) {
              this.cancel();
              return;
            }
            if (r && this._context.leadingWord.endColumn < e.leadingWord.startColumn) {
              this.trigger({
                auto: this._context.triggerOptions.auto,
                retrigger: true
              });
              return;
            }
            if (this._context.triggerOptions.auto) {
              this.cancel();
              return;
            } else {
              this._completionModel.lineContext = t;
              i = this._completionModel.items.length > 0;
              if (i && e.leadingWord.word.length === 0) {
                this.cancel();
                return;
              }
            }
          }
          this._onDidSuggest.fire({
            completionModel: this._completionModel,
            triggerOptions: e.triggerOptions,
            isFrozen: i
          });
        }
      }
    }
  }
};
Fgi = hjl = __decorate([__param(1, c_), __param(2, jm), __param(3, ea), __param(4, Rr), __param(5, wi), __param(6, Fn), __param(7, $u), __param(8, lg)], Fgi);

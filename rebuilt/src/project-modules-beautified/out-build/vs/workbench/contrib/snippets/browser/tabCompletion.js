"use strict";

// Module: out-build/vs/workbench/contrib/snippets/browser/tabCompletion.js
// Offset: 30982105 (bundle byte offset)
// Size: 4487 bytes
si();
Iqe();
gTf();
ts();
Cu();
pU();
pme();
Qh();
uTf();
Kf();
dve();
Cm();
zye = class {
  static {
    OCa = this;
  }
  static {
    this.ID = "editor.tabCompletionController";
  }
  static {
    this.ContextKey = new Sn("hasSnippetCompletions", undefined);
  }
  static get(e) {
    return e.getContribution(OCa.ID);
  }
  constructor(e, t, i, r, s) {
    this._editor = e;
    this._snippetService = t;
    this._clipboardService = i;
    this._languageFeaturesService = r;
    this._activeSnippets = [];
    this._hasSnippets = OCa.ContextKey.bindTo(s);
    this._configListener = this._editor.onDidChangeConfiguration(o => {
      if (o.hasChanged(128)) {
        this._update();
      }
    });
    this._update();
  }
  dispose() {
    this._configListener.dispose();
    this._selectionListener?.dispose();
  }
  _update() {
    const e = this._editor.getOption(128) === "onlySnippets";
    if (this._enabled !== e) {
      this._enabled = e;
      if (this._enabled) {
        this._selectionListener = this._editor.onDidChangeCursorSelection(t => this._updateSnippets());
        if (this._editor.getModel()) {
          this._updateSnippets();
        }
      } else {
        this._selectionListener?.dispose();
      }
    }
  }
  _updateSnippets() {
    this._activeSnippets = [];
    this._completionProvider?.dispose();
    if (!this._editor.hasModel()) {
      return;
    }
    const e = this._editor.getSelection();
    const t = this._editor.getModel();
    t.tokenization.tokenizeIfCheap(e.positionLineNumber);
    const i = t.getLanguageIdAtPosition(e.positionLineNumber, e.positionColumn);
    const r = this._snippetService.getSnippetsSync(i);
    if (!r) {
      this._hasSnippets.set(false);
      return;
    }
    if (Zt.isEmpty(e)) {
      const o = Ury(t, e.getPosition());
      if (o) {
        for (const a of r) {
          if (o.endsWith(a.prefix)) {
            this._activeSnippets.push(a);
          }
        }
      }
    } else if (!Zt.spansMultipleLines(e) && t.getValueLengthInRange(e) <= 100) {
      const o = t.getValueInRange(e);
      if (o) {
        for (const a of r) {
          if (o === a.prefix) {
            this._activeSnippets.push(a);
          }
        }
      }
    }
    const s = this._activeSnippets.length;
    if (s === 0) {
      this._hasSnippets.set(false);
    } else if (s === 1) {
      this._hasSnippets.set(true);
    } else {
      this._hasSnippets.set(true);
      this._completionProvider = {
        _debugDisplayName: "tabCompletion",
        dispose: () => {
          o.dispose();
        },
        provideCompletionItems: (a, l) => a !== t || !e.containsPosition(l) ? undefined : {
          suggestions: this._activeSnippets.map(d => {
            const m = Zt.fromPositions(l.delta(0, -d.prefix.length), l);
            return new Ign(d, m);
          })
        }
      };
      const o = this._languageFeaturesService.completionProvider.register({
        language: t.getLanguageId(),
        pattern: t.uri.fsPath,
        scheme: t.uri.scheme
      }, this._completionProvider);
    }
  }
  async performSnippetCompletions() {
    if (this._editor.hasModel()) {
      if (this._activeSnippets.length === 1) {
        const [e] = this._activeSnippets;
        let t;
        if (e.needsClipboard) {
          const i = new z3n(this._editor, 5);
          t = await this._clipboardService.readText();
          if (!i.validate(this._editor)) {
            return;
          }
        }
        tx.get(this._editor)?.insert(e.codeSnippet, {
          overwriteBefore: e.prefix.length,
          overwriteAfter: 0,
          clipboardText: t
        });
      } else if (this._activeSnippets.length > 1 && this._completionProvider) {
        RAg(this._editor, this._completionProvider);
      }
    }
  }
};
zye = OCa = __decorate([__param(1, Wye), __param(2, jm), __param(3, $u), __param(4, wi)], zye);
Mg(zye.ID, zye, 0);
fTf = dF.bindToContribution(zye.get);
ld(new fTf({
  id: "insertSnippet",
  precondition: zye.ContextKey,
  handler: n => n.performSnippetCompletions(),
  kbOpts: {
    weight: 100,
    kbExpr: Ee.and(Ci.editorTextFocus, Ci.tabDoesNotMoveFocus, tx.InSnippetMode.toNegated()),
    primary: 2
  }
}));

"use strict";

// Module: out-build/vs/editor/contrib/gotoSymbol/browser/peek/referencesController.js
// Offset: 25066249 (bundle byte offset)
// Size: 6708 bytes
vr();
_s();
G_();
rt();
Oh();
tl();
ts();
wq();
yq();
Ht();
hs();
Ei();
si();
Wt();
Hw();
Rf();
So();
kr();
eCt();
kCA();
Qh();
Av();
$et = new Sn("referenceSearchVisible", false, _(1218, null));
z1e = class {
  static {
    ala = this;
  }
  static {
    this.ID = "editor.contrib.referencesController";
  }
  static get(e) {
    return e.getContribution(ala.ID);
  }
  constructor(e, t, i, r, s, o, a, l) {
    this._defaultTreeKeyboardSupport = e;
    this._editor = t;
    this._editorService = r;
    this._notificationService = s;
    this._instantiationService = o;
    this._storageService = a;
    this._configurationService = l;
    this._disposables = new Ut();
    this._requestIdPool = 0;
    this._ignoreModelChangeEvent = false;
    this._referenceSearchVisible = $et.bindTo(i);
  }
  dispose() {
    this._referenceSearchVisible.reset();
    this._disposables.dispose();
    this._widget?.dispose();
    this._model?.dispose();
    this._widget = undefined;
    this._model = undefined;
  }
  getWidget() {
    return this._widget;
  }
  toggleWidget(e, t, i) {
    let r;
    if (this._widget) {
      r = this._widget.position;
    }
    this.closeWidget();
    if (r && e.containsPosition(r)) {
      return;
    }
    this._peekMode = i;
    this._referenceSearchVisible.set(true);
    this._disposables.add(this._editor.onDidChangeModelLanguage(() => {
      this.closeWidget();
    }));
    this._disposables.add(this._editor.onDidChangeModel(() => {
      if (!this._ignoreModelChangeEvent) {
        this.closeWidget();
      }
    }));
    const s = "peekViewLayout";
    const o = Ubg.fromJSON(this._storageService.get(s, 0, "{}"));
    this._widget = this._instantiationService.createInstance(ola, this._editor, this._defaultTreeKeyboardSupport, o);
    this._widget.setTitle(_(1219, null));
    this._widget.show(e);
    this._disposables.add(this._widget.onDidClose(() => {
      t.cancel();
      if (this._widget) {
        this._storageService.store(s, JSON.stringify(this._widget.layoutData), 0, 1);
        if (!this._widget.isClosing) {
          this.closeWidget();
        }
        this._widget = undefined;
      } else {
        this.closeWidget();
      }
    }));
    this._disposables.add(this._widget.onDidSelectReference(l => {
      const {
        element: u,
        kind: d
      } = l;
      if (u) {
        switch (d) {
          case "open":
            if (l.source !== "editor" || !this._configurationService.getValue("editor.stablePeek")) {
              this.openReference(u, false, false);
            }
            break;
          case "side":
            this.openReference(u, true, false);
            break;
          case "goto":
            if (i) {
              this._gotoReference(u, true);
            } else {
              this.openReference(u, false, true);
            }
            break;
        }
      }
    }));
    const a = ++this._requestIdPool;
    t.then(l => {
      if (a !== this._requestIdPool || !this._widget) {
        l.dispose();
        return;
      }
      this._model?.dispose();
      this._model = l;
      return this._widget.setModel(this._model).then(() => {
        if (this._widget && this._model && this._editor.hasModel()) {
          if (this._model.isEmpty) {
            this._widget.setMetaTitle("");
          } else {
            this._widget.setMetaTitle(_(1220, null, this._model.title, this._model.references.length));
          }
          const u = this._editor.getModel().uri;
          const d = new ar(e.startLineNumber, e.startColumn);
          const m = this._model.nearestReference(u, d);
          if (m) {
            return this._widget.setSelection(m).then(() => {
              if (this._widget && this._editor.getOption(91) === "editor") {
                this._widget.focusOnPreviewEditor();
              }
            });
          }
        }
      });
    }, l => {
      this._notificationService.error(l);
    });
  }
  changeFocusBetweenPreviewAndReferences() {
    if (this._widget) {
      if (this._widget.isPreviewEditorFocused()) {
        this._widget.focusOnReferenceTree();
      } else {
        this._widget.focusOnPreviewEditor();
      }
    }
  }
  async goToNextOrPreviousReference(e) {
    if (!this._editor.hasModel() || !this._model || !this._widget) {
      return;
    }
    const t = this._widget.position;
    if (!t) {
      return;
    }
    const i = this._model.nearestReference(this._editor.getModel().uri, t);
    if (!i) {
      return;
    }
    const r = this._model.nextOrPreviousReference(i, e);
    const s = this._editor.hasTextFocus();
    const o = this._widget.isPreviewEditorFocused();
    await this._widget.setSelection(r);
    await this._gotoReference(r, false);
    if (s) {
      this._editor.focus();
    } else if (this._widget && o) {
      this._widget.focusOnPreviewEditor();
    }
  }
  async revealReference(e) {
    if (!!this._editor.hasModel() && !!this._model && !!this._widget) {
      await this._widget.revealReference(e);
    }
  }
  closeWidget(e = true) {
    this._widget?.dispose();
    this._model?.dispose();
    this._referenceSearchVisible.reset();
    this._disposables.clear();
    this._widget = undefined;
    this._model = undefined;
    if (e) {
      this._editor.focus();
    }
    this._requestIdPool += 1;
  }
  _gotoReference(e, t) {
    this._widget?.hide();
    this._ignoreModelChangeEvent = true;
    const i = Zt.lift(e.range).collapseToStart();
    return this._editorService.openCodeEditor({
      resource: e.uri,
      options: {
        selection: i,
        selectionSource: "code.jump",
        pinned: t
      }
    }, this._editor).then(r => {
      this._ignoreModelChangeEvent = false;
      if (!r || !this._widget) {
        this.closeWidget();
        return;
      }
      if (this._editor === r) {
        this._widget.show(i);
        this._widget.focusOnReferenceTree();
      } else {
        const s = ala.get(r);
        const o = this._model.clone();
        this.closeWidget();
        r.focus();
        s?.toggleWidget(i, dw(a => Promise.resolve(o)), this._peekMode ?? false);
      }
    }, r => {
      this._ignoreModelChangeEvent = false;
      Gc(r);
    });
  }
  openReference(e, t, i) {
    if (!t) {
      this.closeWidget();
    }
    const {
      uri: r,
      range: s
    } = e;
    this._editorService.openCodeEditor({
      resource: r,
      options: {
        selection: s,
        selectionSource: "code.jump",
        pinned: i
      }
    }, this._editor, t);
  }
};
z1e = ala = __decorate([__param(2, wi), __param(3, fl), __param(4, ms), __param(5, ln), __param(6, Hi), __param(7, Fn)], z1e);
qo.registerCommandAndKeybindingRule({
  id: "togglePeekWidgetFocus",
  weight: 100,
  primary: Ma(Gm, 60),
  mac: {
    primary: Ma(Np, 60)
  },
  when: Ee.or($et, Z4.inPeekEditor),
  handler(n) {
    fCt(n, e => {
      e.changeFocusBetweenPreviewAndReferences();
    });
  }
});
qo.registerCommandAndKeybindingRule({
  id: "goToNextReference",
  weight: 90,
  primary: 62,
  secondary: [70],
  when: Ee.or($et, Z4.inPeekEditor),
  handler(n) {
    fCt(n, e => {
      e.goToNextOrPreviousReference(true);
    });
  }
});
qo.registerCommandAndKeybindingRule({
  id: "goToPreviousReference",
  weight: 90,
  primary: 1086,
  secondary: [1094],
  when: Ee.or($et, Z4.inPeekEditor),
  handler(n) {
    fCt(n, e => {
      e.goToNextOrPreviousReference(false);
    });
  }
});
Ss.registerCommandAlias("goToNextReferenceFromEmbeddedEditor", "goToNextReference");
Ss.registerCommandAlias("goToPreviousReferenceFromEmbeddedEditor", "goToPreviousReference");
Ss.registerCommandAlias("closeReferenceSearchEditor", "closeReferenceSearch");
Ss.registerCommand("closeReferenceSearch", n => fCt(n, e => e.closeWidget()));
qo.registerKeybindingRule({
  id: "closeReferenceSearch",
  weight: -1,
  primary: 9,
  secondary: [1033],
  when: Ee.and(Z4.inPeekEditor, Ee.not("config.editor.stablePeek"))
});
qo.registerKeybindingRule({
  id: "closeReferenceSearch",
  weight: 250,
  primary: 9,
  secondary: [1033],
  when: Ee.and($et, Ee.not("config.editor.stablePeek"), Ee.or(Ci.editorTextFocus, eQ.negate()))
});
qo.registerCommandAndKeybindingRule({
  id: "revealReference",
  weight: 200,
  primary: 3,
  mac: {
    primary: 3,
    secondary: [2066]
  },
  when: Ee.and($et, D1, Ipi.negate(), Dpi.negate()),
  handler(n) {
    const t = n.get(Nh).lastFocusedList?.getFocus();
    if (Array.isArray(t) && t[0] instanceof tNe) {
      fCt(n, i => i.revealReference(t[0]));
    }
  }
});
qo.registerCommandAndKeybindingRule({
  id: "openReferenceToSide",
  weight: 100,
  primary: 2051,
  mac: {
    primary: 259
  },
  when: Ee.and($et, D1, Ipi.negate(), Dpi.negate()),
  handler(n) {
    const t = n.get(Nh).lastFocusedList?.getFocus();
    if (Array.isArray(t) && t[0] instanceof tNe) {
      fCt(n, i => i.openReference(t[0], true, true));
    }
  }
});
Ss.registerCommand("openReference", n => {
  const t = n.get(Nh).lastFocusedList?.getFocus();
  if (Array.isArray(t) && t[0] instanceof tNe) {
    fCt(n, i => i.openReference(t[0], false, true));
  }
});

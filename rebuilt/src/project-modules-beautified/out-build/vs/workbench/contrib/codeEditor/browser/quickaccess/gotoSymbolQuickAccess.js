"use strict";

// Module: out-build/vs/workbench/contrib/codeEditor/browser/quickaccess/gotoSymbolQuickAccess.js
// Offset: 28234806 (bundle byte offset)
// Size: 3993 bytes
Ht();
Kl();
ss();
Ws();
eX();
R9A();
Ei();
rt();
vr();
Po();
dr();
iX();
Q_();
_s();
Kmn();
lv();
od();
eV();
Cm();
si();
gie();
kW();
Tye = class extends _nt {
  static {
    Cau = this;
  }
  constructor(e, t, i, r, s, o) {
    super(r, o, {
      openSideBySideDirection: () => this.configuration.openSideBySideDirection
    });
    this.editorService = e;
    this.editorGroupService = t;
    this.configurationService = i;
    this.outlineService = s;
    this.onDidActiveTextEditorControlChange = this.editorService.onDidActiveEditorChange;
  }
  get configuration() {
    const e = this.configurationService.getValue().workbench?.editor;
    return {
      openEditorPinned: !e?.enablePreviewFromQuickOpen || !e?.enablePreview,
      openSideBySideDirection: e?.openSideBySideDirection
    };
  }
  get activeTextEditorControl() {
    if (!tCt(this.editorService.activeEditorPane?.getControl())) {
      return this.editorService.activeTextEditorControl;
    }
  }
  gotoLocation(e, t) {
    if ((t.keyMods.alt || this.configuration.openEditorPinned && t.keyMods.ctrlCmd || t.forceSideBySide) && this.editorService.activeEditor) {
      e.restoreViewState?.();
      const i = {
        selection: t.range,
        pinned: t.keyMods.ctrlCmd || this.configuration.openEditorPinned,
        preserveFocus: t.preserveFocus
      };
      this.editorGroupService.sideGroup.openEditor(this.editorService.activeEditor, i);
    } else {
      super.gotoLocation(e, t);
    }
  }
  static {
    this.SYMBOL_PICKS_TIMEOUT = 8000;
  }
  async getSymbolPicks(e, t, i, r, s) {
    if (!(await Promise.race([this.waitForLanguageSymbolRegistry(e, r), Af(Cau.SYMBOL_PICKS_TIMEOUT)])) || s.isCancellationRequested) {
      return [];
    } else {
      return this.doGetSymbolPicks(this.getDocumentSymbols(e, s), o8(t), i, s, e);
    }
  }
  provideWithoutTextEditor(e) {
    if (this.canPickWithOutlineService()) {
      return this.doGetOutlinePicks(e);
    } else {
      return super.provideWithoutTextEditor(e);
    }
  }
  canPickWithOutlineService() {
    if (this.editorService.activeEditorPane) {
      return this.outlineService.canCreateOutline(this.editorService.activeEditorPane);
    } else {
      return false;
    }
  }
  doGetOutlinePicks(e) {
    const t = this.editorService.activeEditorPane;
    if (!t) {
      return at.None;
    }
    const i = new Wc();
    const r = new Ut();
    r.add($i(() => i.dispose(true)));
    e.busy = true;
    this.outlineService.createOutline(t, 4, i.token).then(s => {
      if (!s) {
        return;
      }
      if (i.token.isCancellationRequested) {
        s.dispose();
        return;
      }
      r.add(s);
      const o = s.captureViewState();
      r.add($i(() => {
        if (e.selectedItems.length === 0) {
          o.dispose();
        }
      }));
      const a = s.config.quickPickDataSource.getQuickPickElements();
      const l = a.map((m, p) => ({
        kind: 0,
        index: p,
        score: 0,
        label: m.label,
        description: m.description,
        ariaLabel: m.ariaLabel,
        iconClasses: m.iconClasses
      }));
      r.add(e.onDidAccept(() => {
        e.hide();
        const [m] = e.selectedItems;
        if (m && a[m.index]) {
          s.reveal(a[m.index].element, {}, false, false);
        }
      }));
      const u = () => {
        const m = l.filter(p => {
          if (e.value === "@") {
            p.score = 0;
            p.highlights = undefined;
            return true;
          }
          const g = e.value.substring(_nt.PREFIX.length).trim();
          const f = A3t(p.label);
          const A = w9e(g, g.toLowerCase(), 0, f.text, f.text.toLowerCase(), 0, {
            firstMatchCanBeWeak: true,
            boostFullMatch: true
          });
          if (A) {
            p.score = A[1];
            p.highlights = {
              label: $3o(g, f) ?? undefined
            };
            return true;
          } else {
            return false;
          }
        });
        if (m.length === 0) {
          const p = _(5785, null);
          e.items = [{
            label: p,
            index: -1,
            kind: 14
          }];
          e.ariaLabel = p;
        } else {
          e.items = m;
        }
      };
      u();
      r.add(e.onDidChangeValue(u));
      const d = new uo();
      r.add(d);
      r.add(e.onDidChangeActive(() => {
        const [m] = e.activeItems;
        if (m && a[m.index]) {
          d.value = s.preview(a[m.index].element);
        } else {
          d.clear();
        }
      }));
    }).catch(s => {
      Gc(s);
      e.hide();
    }).finally(() => {
      e.busy = false;
    });
    return r;
  }
};
Tye = Cau = __decorate([__param(0, yi), __param(1, da), __param(2, Fn), __param(3, $u), __param(4, lkt), __param(5, Gne)], Tye);
Sau = class _Qb extends rn {
  static {
    this.ID = "workbench.action.gotoSymbol";
  }
  constructor() {
    super({
      id: _Qb.ID,
      title: {
        ...dt(5790, "Go to Symbol in Editor..."),
        mnemonicTitle: _(5786, null)
      },
      f1: true,
      keybinding: {
        when: Ee.and(AL.negate(), Ece.negate()),
        weight: 200,
        primary: 3117
      },
      menu: [{
        id: st.MenubarGoMenu,
        group: "4_symbol_nav",
        order: 1
      }]
    });
  }
  run(e) {
    e.get(ha).quickAccess.show(Tye.PREFIX, {
      itemActivation: IW.NONE
    });
  }
};
Dt(Sau);
Di.as(kJ.Quickaccess).registerQuickAccessProvider({
  ctor: Tye,
  prefix: _nt.PREFIX,
  contextKey: "inFileSymbolsPicker",
  placeholder: _(5787, null),
  helpEntries: [{
    description: _(5788, null),
    prefix: _nt.PREFIX,
    commandId: Sau.ID,
    commandCenterOrder: 40
  }, {
    description: _(5789, null),
    prefix: _nt.PREFIX_BY_CATEGORY
  }]
});

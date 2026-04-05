"use strict";

// Module: out-build/vs/workbench/contrib/composer/browser/browserEditor.contribution.js
// Offset: 32290899 (bundle byte offset)
// Size: 13861 bytes
qi();
rt();
Yn();
Ht();
ip();
dr();
hs();
ru();
Fc();
Mf();
Wt();
Wu();
Ws();
kr();
Pa();
Io();
eu();
ox();
hB();
Nu();
xT();
Zq();
Ht();
Ud();
od();
ss();
AD();
Ac();
UCf();
Git();
Mm();
si();
TV();
Gcy();
sOf();
oOf();
Vf();
e0 = class extends XS {
  static {
    Mfn = this;
  }
  static {
    this.TypeID = "workbench.input.browserEditor";
  }
  static {
    this.EditorID = "workbench.editor.browserEditor";
  }
  get typeId() {
    return Mfn.TypeID;
  }
  get editorId() {
    return Mfn.EditorID;
  }
  get resource() {
    return je.from({
      scheme: "cursor-browser",
      path: this.browserId
    });
  }
  getName() {
    if (this.pageTitle) {
      return this.pageTitle;
    } else {
      return "Browser Tab";
    }
  }
  getIcon() {
    return Be.globe;
  }
  getFaviconUri() {
    if (this.faviconUrl) {
      return je.parse(this.faviconUrl);
    } else {
      return undefined;
    }
  }
  getLastUrl() {
    return this.lastUrl;
  }
  setLastUrl(e) {
    this.lastUrl = e;
  }
  constructor(e, t, i, r, s, o, a) {
    super();
    this.instantiationService = r;
    this.browserViewStore = s;
    this.dialogService = o;
    this.commandService = a;
    this.disposables = new Ut();
    this._isBeingHidden = false;
    this.closeHandler = this;
    this.browserId = e;
    this.initialUrl = t;
    this.transient = i ?? false;
    this.subscribeToTabState();
  }
  showConfirm() {
    if (this._isBeingHidden) {
      return false;
    } else {
      return this.browserViewStore.wasHeadless(this.browserId);
    }
  }
  async confirm(e) {
    const {
      result: t
    } = await this.dialogService.prompt({
      type: Ha.Warning,
      message: _(6039, null),
      detail: _(6040, null),
      buttons: [{
        label: _(6041, null),
        run: () => "hide"
      }, {
        label: _(6042, null),
        run: () => "close"
      }],
      cancelButton: {
        run: () => "cancel"
      }
    });
    if (t === "hide") {
      this._isBeingHidden = true;
      await this.commandService.executeCommand("cursor.browserView.hideTab", this.browserId);
      return 1;
    } else if (t === "close") {
      return 1;
    } else {
      return 2;
    }
  }
  subscribeToTabState() {
    const e = this.browserViewStore.getTabState(this.browserId);
    if (e) {
      e.recomputeInitiallyAndOnChange(this.disposables, t => {
        this.pageTitle = t?.pageTitle;
        this.faviconUrl = t?.favicon;
        if (t?.url && t.url !== "about:blank") {
          this.lastUrl = t.url;
        }
        this._onDidChangeLabel.fire();
      });
    }
  }
  resetTitle() {
    this.pageTitle = undefined;
    this.faviconUrl = undefined;
    this._onDidChangeLabel.fire();
  }
  toUntyped() {
    return {
      resource: this.resource,
      options: {
        override: Mfn.EditorID,
        ...(this.getLastUrl() && {
          browserInitialUrl: this.getLastUrl()
        })
      }
    };
  }
  get capabilities() {
    return 2;
  }
  matches(e) {
    if (e instanceof Mfn) {
      return e.browserId === this.browserId;
    } else {
      return super.matches(e);
    }
  }
  dispose() {
    this.disposables.dispose();
    super.dispose();
  }
  getLabelExtraClasses() {
    return ["browser-editor-tab"];
  }
};
e0 = Mfn = __decorate([__param(3, ln), __param(4, BC), __param(5, Ml), __param(6, fr)], e0);
O1a = class extends fD {
  static {
    AAu = this;
  }
  static {
    this.ID = e0.EditorID;
  }
  constructor(e, t, i, r, s, o, a, l, u) {
    super(AAu.ID, e, t, i, r);
    this.instantiationService = s;
    this.browserViewStore = o;
    this.editorGroupsService = a;
    this.dialogService = l;
    this.commandService = u;
    this._groupCloseListeners = new Map();
  }
  createEditor(e) {}
  async setInput(e, t, i, r) {
    await super.setInput(e, t, i, r);
    const s = this.getContainer();
    if (s) {
      const o = e.browserId;
      const a = this._currentBrowserId;
      if (a && a !== o) {
        const u = this.browserViewStore.getView(a);
        if (u) {
          u.setPaneVisible(false);
        }
      }
      this._currentBrowserId = o;
      let l = this.browserViewStore.getView(o);
      if (!l) {
        l = this.browserViewStore.createView(o);
        await l.createBrowserView();
        if (r.isCancellationRequested) {
          await this.browserViewStore.destroyView(o);
          return;
        }
        if (e.initialUrl) {
          if (e.initialUrl === "about:blank") {
            l.updateTabState({
              url: ""
            });
          } else {
            l.updateTabState({
              url: e.initialUrl
            });
            l.navigate(e.initialUrl);
          }
        }
        e.subscribeToTabState();
      }
      this.browserViewStore.setActiveViewId(o);
      this.browserViewStore.setBrowserEditorTransient(e.transient);
      if (!this._render || this._renderBrowserId !== o) {
        this._render?.dispose();
        this._render = Jcy(s, this.instantiationService, o, {
          initialPreserveFocus: t?.preserveFocus,
          transient: e.transient
        });
        this._renderBrowserId = o;
      }
      if (!this._groupCloseListeners.has(o)) {
        const u = this.group.onWillCloseEditor(async d => {
          let m;
          if (d.editor instanceof e0 && d.editor.browserId === o) {
            m = d.editor;
          } else if (d.editor instanceof O1) {
            if (d.editor.primary instanceof e0 && d.editor.primary.browserId === o) {
              m = d.editor.primary;
            } else if (d.editor.secondary instanceof e0 && d.editor.secondary.browserId === o) {
              m = d.editor.secondary;
            }
          }
          if (!!m && d.context !== iV.MOVE) {
            if (d.context === iV.REPLACE) {
              const p = this.group.activeEditor;
              if (p instanceof e0 && p.browserId === o || p instanceof O1 && (p.primary instanceof e0 && p.primary.browserId === o || p.secondary instanceof e0 && p.secondary.browserId === o)) {
                return;
              }
            }
            if (m._isBeingHidden) {
              m._isBeingHidden = false;
              this._groupCloseListeners.get(o)?.dispose();
              this._groupCloseListeners.delete(o);
              return;
            }
            try {
              await this.browserViewStore.destroyView(o);
            } catch (p) {
              console.error("[BrowserEditorPane] Failed to destroy browser view:", p);
            }
            this._groupCloseListeners.get(o)?.dispose();
            this._groupCloseListeners.delete(o);
          }
        });
        this._groupCloseListeners.set(o, u);
      }
      if (this.isVisible()) {
        l.setPaneVisible(true);
      }
    }
  }
  layout(e) {}
  focus() {
    this._render?.focus?.();
  }
  setEditorVisible(e) {
    super.setEditorVisible(e);
    this.browserViewStore.setBrowserEditorActive(e);
    if (!e) {
      this.browserViewStore.setBrowserEditorTransient(false);
    }
    if (this._currentBrowserId) {
      if (this.browserViewStore.isHeadless(this._currentBrowserId)) {
        return;
      }
      const i = this.browserViewStore.getView(this._currentBrowserId);
      if (i) {
        i.setPaneVisible(e);
      }
      if (!e) {
        this.browserViewStore.hideView(this._currentBrowserId);
      }
    }
  }
  dispose() {
    this._render?.dispose();
    this._render = undefined;
    for (const e of this._groupCloseListeners.values()) {
      e.dispose();
    }
    this._groupCloseListeners.clear();
    super.dispose();
  }
};
O1a = AAu = __decorate([__param(1, ea), __param(2, bo), __param(3, Hi), __param(4, ln), __param(5, BC), __param(6, da), __param(7, Ml), __param(8, fr)], O1a);
yAu = class zjb extends rn {
  static {
    this.ID = "workbench.action.openBrowserEditor";
  }
  constructor() {
    super({
      id: zjb.ID,
      title: dt(6043, "Open Browser"),
      category: Br.View,
      f1: false,
      menu: [{
        id: st.MenubarAppearanceMenu,
        group: "1_toggle_view",
        order: 4,
        when: Vpn
      }]
    });
  }
  async run(e, t) {
    const i = e.get(ln);
    const r = e.get(yi);
    const s = e.get(BC);
    const o = e.get(Cc);
    const a = e.get(fr);
    const l = typeof t?.url == "string" ? t.url : undefined;
    const u = t?.preserveFocus ?? false;
    const d = t?.inactive ?? false;
    const m = t?.transient ?? false;
    if (t?.trackingId) {
      try {
        e.get(uh).trackEvent("browser.editor.opened", {
          trackingId: t.trackingId,
          opener: vAu(t.trackingId)
        });
      } catch {}
    }
    if (o.isGlass) {
      const f = !l && !u && !d;
      try {
        await a.executeCommand("glass.openBrowserTab", {
          url: l,
          preserveFocus: u,
          inactive: d,
          focusOmnibar: f,
          browserId: t?.browserId,
          transient: m
        });
        return;
      } catch (A) {
        console.error("[OpenBrowserEditorAction] Failed to open glass browser tab, falling back to editor:", A);
      }
    }
    const p = t?.browserId ?? o7e();
    if (d && l) {
      const f = s.createView(p);
      await f.createBrowserView();
      f.updateTabState({
        url: l
      });
      f.navigate(l);
    }
    const g = i.createInstance(e0, p, l, m);
    await r.openEditor(g, {
      pinned: true,
      revealIfOpened: !u && !d,
      revealIfVisible: !u && !d,
      preserveFocus: u || d,
      inactive: d
    }, B1);
  }
};
Dt(yAu);
cOf = class Vjb extends rn {
  static {
    this.ID = "workbench.action.focusOrOpenBrowserEditor";
  }
  constructor() {
    super({
      id: Vjb.ID,
      title: dt(6044, "Focus or Open Browser"),
      category: Br.View,
      f1: false
    });
  }
  async run(e) {
    const t = e.get(yi);
    const i = e.get(da);
    const r = e.get(Cc);
    const s = e.get(fr);
    for (const u of i.groups) {
      for (const d of u.editors) {
        if (d instanceof e0) {
          await t.openEditor(d, {
            pinned: true,
            preserveFocus: false
          }, u);
          return;
        }
      }
    }
    if (r.isGlass) {
      try {
        await s.executeCommand("glass.openBrowserTab", {
          preserveFocus: false,
          inactive: false,
          focusOmnibar: true
        });
        return;
      } catch (u) {
        console.error("[FocusOrOpenBrowserEditorAction] Failed to open glass browser tab, falling back to editor:", u);
      }
    }
    const o = e.get(ln);
    const a = o7e();
    const l = o.createInstance(e0, a, undefined, undefined);
    await t.openEditor(l, {
      pinned: true,
      preserveFocus: false
    }, B1);
  }
};
Dt(cOf);
lOf = class Kjb extends rn {
  static {
    this.ID = "workbench.action.newBrowserTab";
  }
  constructor() {
    super({
      id: Kjb.ID,
      title: dt(6045, "New Browser Tab"),
      category: Br.View,
      f1: true,
      precondition: Vpn,
      keybinding: {
        primary: 2098,
        weight: 500,
        when: ow.isEqualTo(e0.EditorID)
      }
    });
  }
  async run(e, t) {
    const i = e.get(Cc);
    const r = e.get(fr);
    const s = e.get(yi);
    const l = e.get(wi).getContextKeyValue("inQuickInput") ? "command_palette" : "keyboard_shortcut";
    try {
      e.get(uh).trackEvent("browser.editor.opened", {
        trackingId: l,
        opener: vAu(l)
      });
    } catch {}
    if (i.isGlass) {
      try {
        await r.executeCommand("glass.openBrowserTab", {
          preserveFocus: false,
          inactive: false,
          focusOmnibar: true
        });
        return;
      } catch (f) {
        console.error("[NewBrowserTabAction] Failed to open glass browser tab, falling back to editor:", f);
      }
    }
    const u = e.get(ln);
    const d = e.get(da);
    let m = B1;
    if (t?.sourceBrowserId) {
      for (const f of d.groups) {
        for (const A of f.editors) {
          if (A instanceof e0 && A.browserId === t.sourceBrowserId) {
            m = f;
            break;
          }
        }
        if (m !== B1) {
          break;
        }
      }
    }
    const p = o7e();
    const g = u.createInstance(e0, p, undefined, undefined);
    await s.openEditor(g, {
      pinned: true
    }, m);
  }
};
Dt(lOf);
uOf = class Yjb extends rn {
  static {
    this.ID = "workbench.action.reloadBrowserTab";
  }
  constructor() {
    super({
      id: Yjb.ID,
      title: dt(6046, "Reload Browser Tab"),
      category: Br.View,
      f1: true,
      precondition: Vpn,
      keybinding: {
        primary: 2096,
        weight: 600,
        when: ow.isEqualTo(e0.EditorID)
      }
    });
  }
  async run(e) {
    const t = e.get(yi);
    const i = e.get(fr);
    const r = t.activeEditor;
    if (r instanceof e0) {
      await i.executeCommand("cursor.browserView.reload", r.browserId);
    }
  }
};
Dt(uOf);
dOf = class Zjb extends rn {
  static {
    this.ID = "workbench.action.focusBrowserLocationBar";
  }
  constructor() {
    super({
      id: Zjb.ID,
      title: dt(6047, "Focus Browser Location Bar"),
      category: Br.View,
      f1: true,
      precondition: Vpn,
      keybinding: {
        primary: 2090,
        weight: 600,
        when: Ee.and(ow.isEqualTo(e0.EditorID), LEe.negate(), Bnt.negate(), oyi.negate(), mmu.negate())
      }
    });
  }
  async run(e) {
    const t = e.get(yi);
    const i = e.get(BC);
    const r = t.activeEditor;
    if (r instanceof e0) {
      i.requestFocusUrlBar(r.browserId);
    }
  }
};
Dt(dOf);
hOf = class Xjb extends rn {
  static {
    this.ID = "cursor.openCursorWebsite";
  }
  constructor() {
    super({
      id: Xjb.ID,
      title: dt(6048, "Open cursor.com in Browser"),
      category: Br.View,
      f1: true,
      precondition: Vpn
    });
  }
  async run(e) {
    const t = e.get(fr);
    const r = e.get(Tl).getDynamicConfigParam("browser_default_url_config", "defaultUrl") ?? "https://cursor.com";
    let s = "https://cursor.com";
    try {
      if (new URL(r).origin === "https://cursor.com") {
        s = r;
      }
    } catch {}
    await t.executeCommand(yAu.ID, {
      url: s
    });
  }
};
Dt(hOf);
mOf = class ezb extends rn {
  static {
    this.ID = "cursor.openYearInReview";
  }
  constructor() {
    super({
      id: ezb.ID,
      title: dt(6049, "Open Year in Review"),
      f1: false
    });
  }
  async run(e) {
    await e.get(Ja).open("https://cursor.com/2025", {
      openExternal: true
    });
  }
};
Dt(mOf);
Ss.registerCommand("browser.splitEditorWithNewBrowserTab", async (n, e, t) => {
  const i = n.get(ln);
  const r = n.get(BC);
  if (!(e instanceof e0)) {
    return;
  }
  const s = aOf(e, r);
  const o = o7e();
  const a = i.createInstance(e0, o, s, undefined);
  await t.replaceEditors([{
    editor: e,
    replacement: i.createInstance(O1, undefined, undefined, e, a),
    forceReplaceDirty: true
  }]);
});
Ss.registerCommand("browser.splitEditorWithNewBrowserTabToDirection", async (n, e, t, i, r) => {
  const s = n.get(ln);
  const o = n.get(da);
  const a = n.get(yi);
  const l = n.get(BC);
  if (!(e instanceof e0)) {
    return;
  }
  const u = aOf(e, l);
  const d = o7e();
  const m = s.createInstance(e0, d, u, undefined);
  let p = o.findGroup({
    direction: i
  }, t);
  p ||= o.addGroup(t, i);
  await a.openEditor(m, {
    pinned: true,
    preserveFocus: r
  }, p);
  if (!r) {
    p.focus();
  }
});
pOf = class {
  canSerialize(n) {
    if (n instanceof e0) {
      return !n.transient;
    } else {
      return false;
    }
  }
  serialize(n) {
    if (!(n instanceof e0)) {
      return;
    }
    const e = {
      browserId: n.browserId,
      lastUrl: n.getLastUrl()
    };
    return JSON.stringify(e);
  }
  deserialize(n, e) {
    try {
      const t = JSON.parse(e);
      if (t.browserId) {
        return n.createInstance(e0, t.browserId, t.lastUrl, undefined);
      } else {
        return n.createInstance(e0, o7e(), undefined, undefined);
      }
    } catch {
      return n.createInstance(e0, o7e(), undefined, undefined);
    }
  }
};
pCi = class extends at {
  static {
    this.ID = "workbench.contrib.browserEditorResolver";
  }
  constructor(e, t) {
    super();
    this._register(e.registerEditor("cursor-browser:/**", {
      id: e0.EditorID,
      label: "Browser",
      priority: dy.builtin
    }, {
      canSupportResource: i => i?.scheme === "cursor-browser"
    }, {
      createEditorInput: ({
        resource: i,
        options: r
      }) => {
        const s = r?.browserInitialUrl;
        const o = o7e();
        return {
          editor: t.createInstance(e0, o, s, undefined),
          options: r
        };
      }
    }));
  }
};
pCi = __decorate([__param(0, vD), __param(1, ln)], pCi);
Hc(pCi.ID, pCi, 1);
Di.as(Jp.EditorPane).registerEditorPane(oC.create(O1a, e0.EditorID, "Browser"), [new Xl(e0)]);
Di.as(Jp.EditorFactory).registerEditorSerializer(e0.TypeID, pOf);

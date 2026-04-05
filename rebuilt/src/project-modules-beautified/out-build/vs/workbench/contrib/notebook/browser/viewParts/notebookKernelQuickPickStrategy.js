"use strict";

// Module: out-build/vs/workbench/contrib/notebook/browser/viewParts/notebookKernelQuickPickStrategy.js
// Offset: 33365012 (bundle byte offset)
// Size: 12142 bytes
Vs();
vr();
Po();
qi();
yn();
rt();
oa();
Ht();
hs();
Pd();
jr();
Rl();
Kl();
Jr();
v0();
Sb();
bJ();
bO();
_u();
Yn();
Fc();
AN();
kS();
Xk();
f_u = 200;
V8f = class {
  constructor(n, e, t, i, r, s, o, a, l) {
    this._notebookKernelService = n;
    this._productService = e;
    this._quickInputService = t;
    this._labelService = i;
    this._logService = r;
    this._extensionWorkbenchService = s;
    this._extensionService = o;
    this._commandService = a;
    this._extensionManagementServerService = l;
  }
  async showQuickPick(n, e, t) {
    const i = n.textModel;
    const r = n.scopedContextKeyService;
    const s = this._getMatchingResult(i);
    const {
      selected: o,
      all: a
    } = s;
    let l;
    if (e) {
      for (const w of a) {
        if (w.id === e) {
          l = w;
          break;
        }
      }
      if (!l) {
        this._logService.warn(`wanted kernel DOES NOT EXIST, wanted: ${e}, all: ${a.map(w => w.id)}`);
        return false;
      }
    }
    if (l) {
      this._selecteKernel(i, l);
      return true;
    }
    const u = new Ut();
    const d = u.add(this._quickInputService.createQuickPick({
      useSeparators: true
    }));
    const m = this._getKernelPickerQuickPickItems(i, s, this._notebookKernelService, r);
    if (m.length === 1 && Ndy(m[0]) && !t) {
      const w = await this._handleQuickPick(n, m[0], m);
      u.dispose();
      return w;
    }
    d.items = m;
    d.canSelectMany = false;
    d.placeholder = o ? _(9505, null, this._labelService.getUriLabel(i.uri, {
      relative: true
    })) : _(9506, null, this._labelService.getUriLabel(i.uri, {
      relative: true
    }));
    d.busy = this._notebookKernelService.getKernelDetectionTasks(i).length > 0;
    const p = this._notebookKernelService.onDidChangeKernelDetectionTasks(() => {
      d.busy = this._notebookKernelService.getKernelDetectionTasks(i).length > 0;
    });
    const g = m.length === 0 ? dw(w => this._showInstallKernelExtensionRecommendation(i, d, this._extensionWorkbenchService, w)) : undefined;
    const f = In.debounce(In.any(this._notebookKernelService.onDidChangeSourceActions, this._notebookKernelService.onDidAddKernel, this._notebookKernelService.onDidRemoveKernel, this._notebookKernelService.onDidChangeNotebookAffinity), (w, C) => w, f_u)(async () => {
      d.busy = false;
      g?.cancel();
      const w = d.activeItems;
      const C = this._getMatchingResult(i);
      const x = this._getKernelPickerQuickPickItems(i, C, this._notebookKernelService, r);
      d.keepScrollPosition = true;
      const I = [];
      for (const B of w) {
        if (yki(B)) {
          const R = B.kernel.id;
          const N = x.find(M => yki(M) && M.kernel.id === R);
          if (N) {
            I.push(N);
          }
        } else if (QTa(B)) {
          const R = x.find(N => QTa(N) && N.action.action.id === B.action.action.id);
          if (R) {
            I.push(R);
          }
        }
      }
      d.items = x;
      d.activeItems = I;
    }, this);
    const A = await new Promise((w, C) => {
      u.add(d.onDidAccept(() => {
        const x = d.selectedItems[0];
        w(x ? {
          selected: x,
          items: d.items
        } : {
          selected: undefined,
          items: d.items
        });
        d.hide();
      }));
      u.add(d.onDidHide(() => {
        p.dispose();
        f.dispose();
        d.dispose();
        w({
          selected: undefined,
          items: d.items
        });
      }));
      d.show();
    });
    u.dispose();
    if (A.selected) {
      return await this._handleQuickPick(n, A.selected, A.items);
    } else {
      return false;
    }
  }
  _getMatchingResult(n) {
    return this._notebookKernelService.getMatchingKernel(n);
  }
  async _handleQuickPick(n, e, t) {
    if (yki(e)) {
      const i = e.kernel;
      this._selecteKernel(n.textModel, i);
      return true;
    }
    if (j8f(e)) {
      await this._showKernelExtension(this._extensionWorkbenchService, this._extensionService, this._extensionManagementServerService, n.textModel.viewType, []);
    } else if (jTa(e)) {
      await this._showKernelExtension(this._extensionWorkbenchService, this._extensionService, this._extensionManagementServerService, n.textModel.viewType, e.extensionIds, this._productService.quality !== "stable");
    } else if (QTa(e)) {
      e.action.runAction();
    }
    return true;
  }
  _selecteKernel(n, e) {
    this._notebookKernelService.selectKernelForNotebook(e, n);
  }
  async _showKernelExtension(n, e, t, i, r, s) {
    const o = [];
    const a = [];
    const l = [];
    for (const d of r) {
      const m = (await n.getExtensions([{
        id: d
      }], Cs.None))[0];
      if (m.enablementState === 9 || m.enablementState === 10 || m.enablementState === 2) {
        l.push(m);
      } else if (!n.installed.some(p => ic(p.identifier, m.identifier))) {
        if ((await n.canInstall(m)) === true) {
          o.push(m);
        }
      } else if (t.remoteExtensionManagementServer) {
        if (n.installed.some(p => ic(p.identifier, m.identifier) && p.server === t.remoteExtensionManagementServer)) {
          continue;
        }
        if (await n.canInstall(m)) {
          a.push(m);
        }
      }
    }
    if (o.length || l.length || a.length) {
      await Promise.all([...o.map(async d => {
        await n.install(d, {
          installPreReleaseVersion: s ?? false,
          context: {
            skipWalkthrough: true
          }
        }, 15);
      }), ...l.map(async d => {
        switch (d.enablementState) {
          case 10:
            await n.setEnablement([d], 12);
            return;
          case 9:
            await n.setEnablement([d], 11);
            return;
          case 2:
            await n.setEnablement([d], 3);
            return;
          default:
            break;
        }
      }), ...a.map(async d => {
        await n.installInServer(d, this._extensionManagementServerService.remoteExtensionManagementServer);
      })]);
      await e.activateByEvent(`onNotebook:${i}`);
      return true;
    }
    const u = i.split(/[^a-z0-9]/ig).map(zih).join("");
    await n.openSearch(`@tag:notebookKernel${u}`);
    return false;
  }
  async _showInstallKernelExtensionRecommendation(n, e, t, i) {
    e.busy = true;
    const r = await this._getKernelRecommendationsQuickPickItems(n, t);
    e.busy = false;
    if (!i.isCancellationRequested && r && e.items.length === 0) {
      e.items = r;
    }
  }
  async _getKernelRecommendationsQuickPickItems(n, e) {
    const t = [];
    const i = this.getSuggestedLanguage(n);
    const r = i ? this.getSuggestedKernelFromLanguage(n.viewType, i) : undefined;
    if (r) {
      await e.queryLocal();
      if (e.installed.filter(o => (o.enablementState === 3 || o.enablementState === 11 || o.enablementState === 12) && r.extensionIds.includes(o.identifier.id)).length === r.extensionIds.length) {
        return;
      }
      t.push({
        id: "installSuggested",
        description: r.displayName ?? r.extensionIds.join(", "),
        label: `$(${Be.lightbulb.id}) ${_(9507, null)}`,
        extensionIds: r.extensionIds
      });
    }
    t.push({
      id: "install",
      label: _(9508, null)
    });
    return t;
  }
  getSuggestedLanguage(n) {
    let t = n.metadata?.metadata?.language_info?.name;
    if (!t) {
      const i = n.cells.map(r => r.language).filter(r => r !== "markdown");
      if (i.length > 1) {
        const r = i[0];
        if (i.every(s => s === r)) {
          t = r;
        }
      }
    }
    return t;
  }
  getSuggestedKernelFromLanguage(n, e) {
    return UIa.get(n)?.get(e);
  }
};
Dbn = class extends V8f {
  constructor(e, t, i, r, s, o, a, l, u, d, m) {
    super(e, t, i, r, s, o, a, u, l);
    this._notebookKernelHistoryService = d;
    this._openerService = m;
  }
  _getKernelPickerQuickPickItems(e, t, i, r) {
    const s = [];
    if (t.selected) {
      const a = g_u(t.selected, t.selected);
      s.push(a);
    }
    t.suggestions.filter(a => a.id !== t.selected?.id).map(a => g_u(a, t.selected)).forEach(a => {
      s.push(a);
    });
    const o = s.length === 0;
    if (s.length > 0) {
      s.push({
        type: "separator"
      });
    }
    s.push({
      id: "selectAnother",
      label: _(9509, null),
      autoRun: o
    });
    return s;
  }
  _selecteKernel(e, t) {
    const i = this._notebookKernelService.getMatchingKernel(e);
    if (i.selected) {
      this._notebookKernelHistoryService.addMostRecentKernel(i.selected);
    }
    super._selecteKernel(e, t);
    this._notebookKernelHistoryService.addMostRecentKernel(t);
  }
  _getMatchingResult(e) {
    const {
      selected: t,
      all: i
    } = this._notebookKernelHistoryService.getKernels(e);
    const r = this._notebookKernelService.getMatchingKernel(e);
    return {
      selected: t,
      all: r.all,
      suggestions: i,
      hidden: []
    };
  }
  async _handleQuickPick(e, t, i) {
    if (t.id === "selectAnother") {
      return this.displaySelectAnotherQuickPick(e, i.length === 1 && i[0] === t);
    } else {
      return super._handleQuickPick(e, t, i);
    }
  }
  async displaySelectAnotherQuickPick(e, t) {
    const i = e.textModel;
    const s = (await this._calculdateKernelSources(e)).find(u => jTa(u));
    if (s && jTa(s) && (await this._showKernelExtension(this._extensionWorkbenchService, this._extensionService, this._extensionManagementServerService, e.textModel.viewType, s.extensionIds, this._productService.quality !== "stable"))) {
      return this.displaySelectAnotherQuickPick(e, false);
    }
    const o = new Ut();
    const a = o.add(this._quickInputService.createQuickPick({
      useSeparators: true
    }));
    const l = await new Promise(u => {
      a.title = _(t ? 9510 : 9511, null);
      a.placeholder = _(9512, null);
      a.busy = true;
      a.buttons = [this._quickInputService.backButton];
      a.show();
      o.add(a.onDidTriggerButton(d => {
        if (d === this._quickInputService.backButton) {
          u(d);
        }
      }));
      o.add(a.onDidTriggerItemButton(async d => {
        if (z8f(d.item) && d.item.documentation !== undefined) {
          const m = je.isUri(d.item.documentation) ? je.parse(d.item.documentation) : await this._commandService.executeCommand(d.item.documentation);
          this._openerService.open(m, {
            openExternal: true
          });
        }
      }));
      o.add(a.onDidAccept(async () => {
        u(a.selectedItems[0]);
      }));
      o.add(a.onDidHide(() => {
        u(undefined);
      }));
      this._calculdateKernelSources(e).then(d => {
        a.items = d;
        if (a.items.length > 0) {
          a.busy = false;
        }
      });
      o.add(In.debounce(In.any(this._notebookKernelService.onDidChangeSourceActions, this._notebookKernelService.onDidAddKernel, this._notebookKernelService.onDidRemoveKernel), (d, m) => d, f_u)(async () => {
        a.busy = true;
        const d = await this._calculdateKernelSources(e);
        a.items = d;
        a.busy = false;
      }));
    });
    a.hide();
    o.dispose();
    if (l === this._quickInputService.backButton) {
      return this.showQuickPick(e, undefined, true);
    }
    if (l) {
      const u = l;
      if (z8f(u)) {
        try {
          const d = await this._executeCommand(i, u.command);
          if (d) {
            const {
              all: m
            } = await this._getMatchingResult(i);
            const p = m.find(g => g.id === `ms-toolsai.jupyter/${d}`);
            if (p) {
              await this._selecteKernel(i, p);
            }
            return true;
          } else {
            return this.displaySelectAnotherQuickPick(e, false);
          }
        } catch {
          return false;
        }
      } else {
        if (yki(u)) {
          await this._selecteKernel(i, u.kernel);
          return true;
        }
        if (Ldy(u)) {
          await this._selectOneKernel(i, u.label, u.kernels);
          return true;
        }
        if (QTa(u)) {
          try {
            await u.action.runAction();
            return true;
          } catch {
            return false;
          }
        } else {
          if (j8f(u)) {
            await this._showKernelExtension(this._extensionWorkbenchService, this._extensionService, this._extensionManagementServerService, e.textModel.viewType, []);
            return true;
          }
          if (jTa(u)) {
            await this._showKernelExtension(this._extensionWorkbenchService, this._extensionService, this._extensionManagementServerService, e.textModel.viewType, u.extensionIds, this._productService.quality !== "stable");
            return this.displaySelectAnotherQuickPick(e, false);
          }
        }
      }
    }
    return false;
  }
  async _calculdateKernelSources(e) {
    const t = e.textModel;
    const i = this._notebookKernelService.getSourceActions(t, e.scopedContextKeyService);
    const r = await this._notebookKernelService.getKernelSourceActions2(t);
    const s = this._getMatchingResult(t);
    if (i.length === 0 && s.all.length === 0 && r.length === 0) {
      return (await this._getKernelRecommendationsQuickPickItems(t, this._extensionWorkbenchService)) ?? [];
    }
    const o = s.all.filter(u => u.extension.value !== Wki);
    const a = [];
    for (const u of yte(o, (d, m) => d.extension.value === m.extension.value ? 0 : 1)) {
      const d = this._extensionService.extensions.find(p => p.identifier.value === u[0].extension.value);
      const m = d?.displayName ?? d?.description ?? u[0].extension.value;
      if (u.length > 1) {
        a.push({
          label: m,
          kernels: u
        });
      } else {
        a.push({
          label: u[0].label,
          kernel: u[0]
        });
      }
    }
    const l = r.filter(u => u.command);
    a.push(...l.map(u => {
      const d = u.documentation ? [{
        iconClass: Qt.asClassName(Be.info),
        tooltip: _(9513, null)
      }] : [];
      return {
        id: typeof u.command == "string" ? u.command : u.command.id,
        label: u.label,
        description: u.description,
        command: u.command,
        documentation: u.documentation,
        buttons: d
      };
    }));
    for (const u of i) {
      const d = {
        action: u,
        picked: false,
        label: u.action.label,
        tooltip: u.action.tooltip
      };
      a.push(d);
    }
    return a;
  }
  async _selectOneKernel(e, t, i) {
    const r = i.map(a => g_u(a, undefined));
    const s = new Ut();
    const o = s.add(this._quickInputService.createQuickPick({
      useSeparators: true
    }));
    o.items = r;
    o.canSelectMany = false;
    o.title = _(9514, null, t);
    s.add(o.onDidAccept(async () => {
      if (o.selectedItems && o.selectedItems.length > 0 && yki(o.selectedItems[0])) {
        await this._selecteKernel(e, o.selectedItems[0].kernel);
      }
      o.hide();
      o.dispose();
    }));
    s.add(o.onDidHide(() => {
      s.dispose();
    }));
    o.show();
  }
  async _executeCommand(e, t) {
    const i = typeof t == "string" ? t : t.id;
    const r = typeof t == "string" ? [] : t.arguments ?? [];
    if (typeof t == "string" || !t.arguments || !Array.isArray(t.arguments) || t.arguments.length === 0) {
      r.unshift({
        uri: e.uri,
        $mid: 14
      });
    }
    if (typeof t == "string") {
      return this._commandService.executeCommand(i);
    } else {
      return this._commandService.executeCommand(i, ...r);
    }
  }
  static updateKernelStatusAction(e, t, i, r) {
    if (i.getKernelDetectionTasks(e).length) {
      const u = i.getMatchingKernel(e);
      t.enabled = true;
      t.class = Qt.asClassName(Qt.modify(lNe, "spin"));
      if (u.selected) {
        t.label = u.selected.label;
        const d = u.selected.description ?? u.selected.detail;
        t.tooltip = d ? _(9515, null, d) : _(9516, null);
      } else {
        t.label = _(9517, null);
      }
      return;
    }
    const o = i.getRunningSourceActions(e);
    const a = (u, d) => {
      const m = u.action;
      t.class = d ? Qt.asClassName(Qt.modify(lNe, "spin")) : Qt.asClassName(zca);
      t.label = m.label;
      t.enabled = true;
    };
    if (o.length) {
      return a(o[0], true);
    }
    const {
      selected: l
    } = r.getKernels(e);
    if (l) {
      t.label = l.label;
      t.class = Qt.asClassName(zca);
      t.tooltip = l.description ?? l.detail ?? "";
    } else {
      t.label = _(9518, null);
      t.class = Qt.asClassName(zca);
      t.tooltip = "";
    }
  }
  static async resolveKernel(e, t, i, r) {
    const s = i.getKernels(e);
    if (s.selected) {
      return s.selected;
    }
    await r.executeCommand(uwe);
    const {
      selected: o
    } = i.getKernels(e);
    return o;
  }
};
Dbn = __decorate([__param(0, NM), __param(1, za), __param(2, ha), __param(3, Ol), __param(4, Rr), __param(5, Em), __param(6, su), __param(7, dP), __param(8, fr), __param(9, v7e), __param(10, Ja)], Dbn);

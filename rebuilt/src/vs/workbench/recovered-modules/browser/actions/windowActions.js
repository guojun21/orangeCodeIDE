"use strict";

// Module: out-build/vs/workbench/browser/actions/windowActions.js
// Offset: 31374251 (bundle byte offset)
// Size: 6761 bytes
Ht();
ru();
dr();
G_();
Mm();
Av();
ip();
Hw();
Kl();
ps();
Pd();
ka();
hd();
Ku();
vL();
oR();
ns();
iL();
_r();
si();
TEe();
wm();
cu();
qi();
Jr();
hs();
Ei();
Hoy();
ri();
r8();
W9();
eu();
Mbu = "inRecentFilesPicker";
Fbu = class extends rn {
  constructor(n) {
    super(n);
    this.removeFromRecentlyOpened = {
      iconClass: Qt.asClassName(Be.removeClose),
      tooltip: _(3209, null)
    };
    this.dirtyRecentlyOpenedFolder = {
      iconClass: "dirty-workspace " + Qt.asClassName(Be.closeDirty),
      tooltip: _(3210, null),
      alwaysVisible: true
    };
    this.dirtyRecentlyOpenedWorkspace = {
      ...this.dirtyRecentlyOpenedFolder,
      tooltip: _(3211, null)
    };
  }
  async run(n) {
    const e = n.get(CM);
    const t = n.get(ha);
    const i = n.get(Lr);
    const r = n.get(Ol);
    const s = n.get(mo);
    const o = n.get(Il);
    const a = n.get(Jl);
    const l = n.get(wd);
    const u = n.get(Ml);
    const d = await e.getRecentlyOpened();
    const m = await e.getDirtyWorkspaces();
    let p = false;
    const g = new fu();
    const f = new fu();
    for (const H of m) {
      if (gLf(H)) {
        g.set(H.folderUri, true);
      } else {
        f.set(H.workspace.configPath, H.workspace);
        p = true;
      }
    }
    const A = new fu();
    const w = new fu();
    for (const H of d.workspaces) {
      if (cnt(H)) {
        A.set(H.folderUri, true);
      } else {
        w.set(H.workspace.configPath, H.workspace);
        p = true;
      }
    }
    const C = [];
    for (const H of d.workspaces) {
      const W = cnt(H) ? g.has(H.folderUri) : f.has(H.workspace.configPath);
      C.push(this.toQuickPick(o, a, r, H, W));
    }
    for (const H of m) {
      if (gLf(H) && !A.has(H.folderUri)) {
        C.push(this.toQuickPick(o, a, r, H, true));
      } else if (qoy(H) && !w.has(H.workspace.configPath)) {
        C.push(this.toQuickPick(o, a, r, H, true));
      }
    }
    const x = d.files.map(H => this.toQuickPick(o, a, r, H, false));
    const I = d.workspaces[0];
    const B = I && i.isCurrentWorkspace(_mn(I) ? I.workspace : I.folderUri);
    let R;
    const N = {
      type: "separator",
      label: _(p ? 3212 : 3213, null)
    };
    const M = {
      type: "separator",
      label: _(3214, null)
    };
    const O = [N, ...C, M, ...x];
    const $ = await t.pick(O, {
      contextKey: Mbu,
      activeItem: [...C, ...x][B ? 1 : 0],
      placeHolder: _(Fs ? 3215 : 3216, null),
      matchOnDescription: true,
      onKeyMods: H => R = H,
      quickNavigate: this.isQuickNavigate() ? {
        keybindings: s.lookupKeybindings(this.desc.id)
      } : undefined,
      hideInput: this.isQuickNavigate(),
      onDidTriggerItemButton: async H => {
        if (H.button === this.removeFromRecentlyOpened) {
          await e.removeRecentlyOpened([H.item.resource]);
          H.removeItem();
        } else if (H.button === this.dirtyRecentlyOpenedFolder || H.button === this.dirtyRecentlyOpenedWorkspace) {
          const W = H.button === this.dirtyRecentlyOpenedWorkspace;
          const {
            confirmed: z
          } = await u.confirm({
            title: _(W ? 3217 : 3218, null),
            message: _(W ? 3219 : 3220, null),
            detail: _(W ? 3221 : 3222, null)
          });
          if (z) {
            l.openWindow([H.item.openable], {
              remoteAuthority: H.item.remoteAuthority || null
            });
            t.cancel();
          }
        }
      }
    });
    if ($) {
      return l.openWindow([$.openable], {
        forceNewWindow: R?.ctrlCmd,
        forceReuseWindow: R?.alt,
        remoteAuthority: $.remoteAuthority || null
      });
    }
  }
  toQuickPick(n, e, t, i, r) {
    let s;
    let o;
    let a;
    let l;
    let u = false;
    if (cnt(i)) {
      l = i.folderUri;
      o = yS(n, e, l, xg.FOLDER);
      s = {
        folderUri: l
      };
      a = i.label || t.getWorkspaceLabel(l, {
        verbose: 2
      });
    } else if (_mn(i)) {
      l = i.workspace.configPath;
      o = yS(n, e, l, xg.ROOT_FOLDER);
      s = {
        workspaceUri: l
      };
      a = i.label || t.getWorkspaceLabel(i.workspace, {
        verbose: 2
      });
      u = true;
    } else {
      l = i.fileUri;
      o = yS(n, e, l, xg.FILE);
      s = {
        fileUri: l
      };
      a = i.label || t.getUriLabel(l, {
        appendWorkspaceSuffix: true
      });
    }
    const {
      name: d,
      parentPath: m
    } = gBc(a);
    return {
      iconClasses: o,
      label: d,
      ariaLabel: r ? _(u ? 3223 : 3224, null, d) : d,
      description: m,
      buttons: r ? [u ? this.dirtyRecentlyOpenedWorkspace : this.dirtyRecentlyOpenedFolder] : [this.removeFromRecentlyOpened],
      openable: s,
      resource: l,
      remoteAuthority: i.remoteAuthority
    };
  }
};
qit = class Wjb extends Fbu {
  static {
    this.ID = "workbench.action.openRecent";
  }
  constructor() {
    super({
      id: Wjb.ID,
      title: {
        ...dt(3231, "Open Recent..."),
        mnemonicTitle: _(3225, null)
      },
      category: Br.File,
      f1: true,
      keybinding: {
        weight: 200,
        primary: 2096,
        mac: {
          primary: 304
        }
      },
      menu: {
        id: st.MenubarRecentMenu,
        group: "y_more",
        order: 1
      }
    });
  }
  isQuickNavigate() {
    return false;
  }
};
fLf = class extends Fbu {
  constructor() {
    super({
      id: "workbench.action.quickOpenRecent",
      title: dt(3232, "Quick Open Recent..."),
      category: Br.File,
      f1: false
    });
  }
  isQuickNavigate() {
    return true;
  }
};
bLf = class extends rn {
  constructor() {
    super({
      id: "workbench.action.toggleFullScreen",
      title: {
        ...dt(3233, "Toggle Full Screen"),
        mnemonicTitle: _(3226, null)
      },
      category: Br.View,
      f1: true,
      keybinding: {
        weight: 200,
        primary: 69,
        mac: {
          primary: 2340
        }
      },
      precondition: nWl.toNegated(),
      toggled: iyi,
      menu: [{
        id: st.MenubarAppearanceMenu,
        group: "1_toggle_view",
        order: 1
      }]
    });
  }
  async run(n) {
    const e = n.get(Cc);
    const t = n.get(wd);
    if (Q1e(e.remoteAuthority)) {
      const i = n.get(rx);
      const r = await i.getMainWindowInWindow();
      if (r) {
        await i.runActionInWindow({
          windowId: r.windowId,
          actionId: "workbench.action.toggleFullScreen",
          args: {}
        });
        return;
      }
    }
    return t.toggleFullScreen($c());
  }
};
O0i = class Qjb extends rn {
  static {
    this.ID = "workbench.action.reloadWindow";
  }
  constructor() {
    super({
      id: Qjb.ID,
      title: dt(3234, "Reload Window"),
      category: Br.Developer,
      f1: true,
      keybinding: {
        weight: 250,
        when: Gy,
        primary: 3120
      }
    });
  }
  async run(e) {
    return e.get(wd).reload();
  }
};
vLf = class extends rn {
  constructor() {
    super({
      id: "workbench.action.showAboutDialog",
      title: {
        ...dt(3235, "About"),
        mnemonicTitle: _(3227, null)
      },
      category: Br.Help,
      f1: true,
      menu: {
        id: st.MenubarHelpMenu,
        group: "z_about",
        order: 1,
        when: MAe.toNegated()
      }
    });
  }
  run(n) {
    return n.get(Ml).about();
  }
};
ALf = class extends rn {
  constructor() {
    super({
      id: "workbench.action.newWindow",
      title: {
        ...dt(3236, "New Window"),
        mnemonicTitle: _(3228, null)
      },
      f1: true,
      keybinding: {
        weight: 200,
        primary: Eu ? Sc ? Ma(Gm, 1068) : 3628 : 3116,
        secondary: Eu ? [3116] : undefined
      },
      menu: {
        id: st.MenubarFileMenu,
        group: "1_new",
        order: 3
      }
    });
  }
  run(n) {
    return n.get(wd).openWindow({
      remoteAuthority: null
    });
  }
};
yLf = class extends rn {
  constructor() {
    super({
      id: "workbench.action.blur",
      title: dt(3237, "Remove keyboard focus from focused element")
    });
  }
  run() {
    const n = _C();
    if (wf(n)) {
      n.blur();
    }
  }
};
Dt(ALf);
Dt(bLf);
Dt(fLf);
Dt(qit);
Dt(O0i);
Dt(vLf);
Dt(yLf);
Obu = Ee.and(kce, Ee.has(Mbu));
Ubu = "workbench.action.quickOpenNavigateNextInRecentFilesPicker";
qo.registerCommandAndKeybindingRule({
  id: Ubu,
  weight: 250,
  handler: Eye(Ubu, true),
  when: Obu,
  primary: 2096,
  mac: {
    primary: 304
  }
});
$bu = "workbench.action.quickOpenNavigatePreviousInRecentFilesPicker";
qo.registerCommandAndKeybindingRule({
  id: $bu,
  weight: 250,
  handler: Eye($bu, false),
  when: Obu,
  primary: 3120,
  mac: {
    primary: 1328
  }
});
Ss.registerCommand("workbench.action.toggleConfirmBeforeClose", n => {
  const e = n.get(Fn);
  const t = e.inspect("window.confirmBeforeClose").userValue;
  return e.updateValue("window.confirmBeforeClose", t === "never" ? "keyboardOnly" : "never");
});
or.appendMenuItem(st.MenubarFileMenu, {
  group: "z_ConfirmClose",
  command: {
    id: "workbench.action.toggleConfirmBeforeClose",
    title: _(3229, null),
    toggled: Ee.notEquals("config.window.confirmBeforeClose", "never")
  },
  order: 1,
  when: uU
});
or.appendMenuItem(st.MenubarFileMenu, {
  title: _(3230, null),
  submenu: st.MenubarRecentMenu,
  group: "2_open",
  order: 4
});
U0i = class Vcd extends rn {
  static {
    this.ID = "workbench.action.keychord.leader";
  }
  constructor() {
    super({
      id: Vcd.ID,
      title: {
        value: "Keychord leader keybinding",
        original: "Keychord leader keybinding"
      },
      precondition: Ee.false(),
      keybinding: {
        primary: Gm,
        mac: {
          primary: Np
        },
        weight: 200,
        when: Ee.false()
      }
    });
  }
  run(e) {
    e.get(Ml).info(`Go to the keyboard shortcut settings and change the value of ${Vcd.ID} to change the keychord leader keybinding`);
  }
};
Dt(U0i);

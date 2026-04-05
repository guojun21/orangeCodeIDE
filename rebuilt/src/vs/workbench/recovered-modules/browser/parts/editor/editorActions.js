"use strict";

// Module: out-build/vs/workbench/browser/parts/editor/editorActions.js
// Offset: 31312221 (bundle byte offset)
// Size: 34093 bytes
ri();
nl();
qi();
ml();
G_();
_r();
Jr();
Ht();
ip();
dr();
hs();
Ei();
si();
wD();
Qh();
ru();
ka();
Rf();
jr();
Xg();
Kl();
vL();
Mm();
Nu();
Zq();
I0i();
od();
AD();
ss();
N1();
e5();
zp();
exe();
l5();
ufn();
sba();
pR = class extends rn {
  constructor(n, e, t) {
    super(n);
    this.commandId = e;
    this.commandArgs = t;
  }
  run(n) {
    return n.get(fr).executeCommand(this.commandId, this.commandArgs);
  }
};
fbu = class extends rn {
  getDirection(n) {
    return dNe(n);
  }
  async run(n, ...e) {
    const t = n.get(da);
    const i = n.get(Fn);
    const r = n.get(yi);
    const s = n.get(Nh);
    const o = this.getDirection(i);
    const a = gO(e, r, t, s);
    await ska(n, o, a);
  }
};
_Rf = class Tjb extends fbu {
  static {
    this.ID = v0i;
  }
  constructor() {
    super({
      id: Tjb.ID,
      title: dt(3590, "Split Editor"),
      f1: true,
      keybinding: {
        weight: 200,
        primary: 2141
      },
      category: Br.View
    });
  }
};
CRf = class extends fbu {
  constructor() {
    super({
      id: "workbench.action.splitEditorOrthogonal",
      title: dt(3591, "Split Editor Orthogonal"),
      f1: true,
      keybinding: {
        weight: 200,
        primary: Ma(Gm, 2141),
        mac: {
          primary: Ma(Np, 2141)
        }
      },
      category: Br.View
    });
  }
  getDirection(n) {
    if (dNe(n) === 3) {
      return 1;
    } else {
      return 3;
    }
  }
};
SRf = class extends pR {
  constructor() {
    super({
      id: Fit,
      title: dt(3592, "Split Editor Left"),
      f1: true,
      keybinding: {
        weight: 200,
        primary: Ma(Gm, 2141),
        mac: {
          primary: Ma(Np, 2141)
        }
      },
      category: Br.View
    }, Fit);
  }
};
kRf = class extends pR {
  constructor() {
    super({
      id: Gqe,
      title: dt(3593, "Split Editor Right"),
      f1: true,
      keybinding: {
        weight: 200,
        primary: Ma(Gm, 2141),
        mac: {
          primary: Ma(Np, 2141)
        }
      },
      category: Br.View
    }, Gqe);
  }
};
ERf = class extends pR {
  static {
    this.LABEL = _(3567, null);
  }
  constructor() {
    super({
      id: Mit,
      title: dt(3594, "Split Editor Up"),
      f1: true,
      keybinding: {
        weight: 200,
        primary: Ma(Gm, 2141),
        mac: {
          primary: Ma(Np, 2141)
        }
      },
      category: Br.View
    }, Mit);
  }
};
xRf = class extends pR {
  static {
    this.LABEL = _(3568, null);
  }
  constructor() {
    super({
      id: Jqe,
      title: dt(3595, "Split Editor Down"),
      f1: true,
      keybinding: {
        weight: 200,
        primary: Ma(Gm, 2141),
        mac: {
          primary: Ma(Np, 2141)
        }
      },
      category: Br.View
    }, Jqe);
  }
};
TRf = class extends rn {
  constructor() {
    super({
      id: "workbench.action.joinTwoGroups",
      title: dt(3596, "Join Editor Group with Next Group"),
      f1: true,
      category: Br.View
    });
  }
  async run(n, e) {
    const t = n.get(da);
    let i;
    if (e && typeof e.groupId == "number") {
      i = t.getGroup(e.groupId);
    } else {
      i = t.activeGroup;
    }
    if (i) {
      const r = [3, 1, 2, 0];
      for (const s of r) {
        const o = t.findGroup({
          direction: s
        }, i);
        if (o && i !== o) {
          t.mergeGroup(i, o);
          break;
        }
      }
    }
  }
};
IRf = class extends rn {
  constructor() {
    super({
      id: "workbench.action.joinAllGroups",
      title: dt(3597, "Join All Editor Groups"),
      f1: true,
      category: Br.View
    });
  }
  async run(n) {
    const e = n.get(da);
    e.mergeAllGroups(e.activeGroup);
  }
};
DRf = class extends rn {
  constructor() {
    super({
      id: "workbench.action.navigateEditorGroups",
      title: dt(3598, "Navigate Between Editor Groups"),
      f1: true,
      category: Br.View
    });
  }
  async run(n) {
    const e = n.get(da);
    e.findGroup({
      location: 2
    }, e.activeGroup, true)?.focus();
  }
};
BRf = class extends rn {
  constructor() {
    super({
      id: "workbench.action.focusActiveEditorGroup",
      title: dt(3599, "Focus Active Editor Group"),
      f1: true,
      category: Br.View
    });
  }
  async run(n) {
    n.get(da).activeGroup.focus();
  }
};
Kqe = class extends rn {
  constructor(n, e) {
    super(n);
    this.scope = e;
  }
  async run(n) {
    const e = n.get(da);
    e.findGroup(this.scope, e.activeGroup, true)?.focus();
  }
};
RRf = class extends Kqe {
  constructor() {
    super({
      id: "workbench.action.focusFirstEditorGroup",
      title: dt(3600, "Focus First Editor Group"),
      f1: true,
      keybinding: {
        weight: 200,
        primary: 2070
      },
      category: Br.View
    }, {
      location: 0
    });
  }
};
PRf = class extends Kqe {
  constructor() {
    super({
      id: "workbench.action.focusLastEditorGroup",
      title: dt(3601, "Focus Last Editor Group"),
      f1: true,
      category: Br.View
    }, {
      location: 1
    });
  }
};
LRf = class extends Kqe {
  constructor() {
    super({
      id: "workbench.action.focusNextGroup",
      title: dt(3602, "Focus Next Editor Group"),
      f1: true,
      category: Br.View
    }, {
      location: 2
    });
  }
};
NRf = class extends Kqe {
  constructor() {
    super({
      id: "workbench.action.focusPreviousGroup",
      title: dt(3603, "Focus Previous Editor Group"),
      f1: true,
      category: Br.View
    }, {
      location: 3
    });
  }
};
MRf = class extends Kqe {
  constructor() {
    super({
      id: "workbench.action.focusLeftGroup",
      title: dt(3604, "Focus Left Editor Group"),
      f1: true,
      keybinding: {
        weight: 200,
        primary: Ma(Gm, 2063),
        mac: {
          primary: Ma(Np, 2063)
        }
      },
      category: Br.View
    }, {
      direction: 2
    });
  }
};
FRf = class extends Kqe {
  constructor() {
    super({
      id: "workbench.action.focusRightGroup",
      title: dt(3605, "Focus Right Editor Group"),
      f1: true,
      keybinding: {
        weight: 200,
        primary: Ma(Gm, 2065),
        mac: {
          primary: Ma(Np, 2065)
        }
      },
      category: Br.View
    }, {
      direction: 3
    });
  }
};
ORf = class extends Kqe {
  constructor() {
    super({
      id: "workbench.action.focusAboveGroup",
      title: dt(3606, "Focus Editor Group Above"),
      f1: true,
      keybinding: {
        weight: 200,
        primary: Ma(Gm, 2064),
        mac: {
          primary: Ma(Np, 2064)
        }
      },
      category: Br.View
    }, {
      direction: 0
    });
  }
};
URf = class extends Kqe {
  constructor() {
    super({
      id: "workbench.action.focusBelowGroup",
      title: dt(3607, "Focus Editor Group Below"),
      f1: true,
      keybinding: {
        weight: 200,
        primary: Ma(Gm, 2066),
        mac: {
          primary: Ma(Np, 2066)
        }
      },
      category: Br.View
    }, {
      direction: 1
    });
  }
};
yfn = class extends Hs {
  static {
    this.ID = "workbench.action.closeActiveEditor";
  }
  static {
    this.LABEL = _(3569, null);
  }
  constructor(e, t, i) {
    super(e, t, Qt.asClassName(Be.close));
    this.commandService = i;
  }
  run(e) {
    return this.commandService.executeCommand($ce, undefined, e);
  }
};
yfn = __decorate([__param(2, fr)], yfn);
Yqe = class extends Hs {
  static {
    this.ID = "workbench.action.unpinActiveEditor";
  }
  static {
    this.LABEL = _(3570, null);
  }
  constructor(e, t, i) {
    super(e, t, Qt.asClassName(Be.pinned));
    this.commandService = i;
  }
  run(e) {
    return this.commandService.executeCommand(Nit, undefined, e);
  }
};
Yqe = __decorate([__param(2, fr)], Yqe);
wfn = class extends Hs {
  static {
    this.ID = "workbench.action.closeActiveEditor";
  }
  static {
    this.LABEL = _(3571, null);
  }
  constructor(e, t, i) {
    super(e, t, Qt.asClassName(Be.close));
    this.editorGroupService = i;
  }
  async run(e) {
    const t = e ? this.editorGroupService.getGroup(e.groupId) : this.editorGroupService.activeGroup;
    if (!t) {
      return;
    }
    const i = e?.editorIndex !== undefined ? t.getEditorByIndex(e.editorIndex) : t.activeEditor;
    if (!i) {
      return;
    }
    const r = [];
    if (t.isSelected(i)) {
      r.push(...t.selectedEditors);
    } else {
      r.push(i);
    }
    for (const s of r) {
      await t.closeEditor(s, {
        preserveFocus: e?.preserveFocus
      });
    }
  }
};
wfn = __decorate([__param(2, da)], wfn);
$Rf = class extends rn {
  constructor() {
    super({
      id: "workbench.action.revertAndCloseActiveEditor",
      title: dt(3608, "Revert and Close Editor"),
      f1: true,
      category: Br.View
    });
  }
  async run(n) {
    const e = n.get(yi);
    const t = n.get(Rr);
    const i = e.activeEditorPane;
    if (i) {
      const r = i.input;
      const s = i.group;
      try {
        await e.revert({
          editor: r,
          groupId: s.id
        });
      } catch (o) {
        t.error(o);
        await e.revert({
          editor: r,
          groupId: s.id
        }, {
          soft: true
        });
      }
      await s.closeEditor(r);
    }
  }
};
qRf = class extends rn {
  constructor() {
    super({
      id: "workbench.action.closeEditorsToTheLeft",
      title: dt(3609, "Close Editors to the Left in Group"),
      f1: true,
      category: Br.View
    });
  }
  async run(n, e) {
    const t = n.get(da);
    const {
      group: i,
      editor: r
    } = this.getTarget(t, e);
    if (i && r) {
      await i.closeEditors({
        direction: 0,
        except: r,
        excludeSticky: true
      });
    }
  }
  getTarget(n, e) {
    if (e) {
      return {
        editor: e.editor,
        group: n.getGroup(e.groupId)
      };
    } else {
      return {
        group: n.activeGroup,
        editor: n.activeGroup.activeEditor
      };
    }
  }
};
bbu = class extends rn {
  groupsToClose(n) {
    const e = [];
    const t = n.getGroups(2);
    for (let i = t.length - 1; i >= 0; i--) {
      e.push(t[i]);
    }
    return e;
  }
  async run(n) {
    const e = n.get(yi);
    const t = n.get(Rr);
    const i = n.get(Ib);
    const r = n.get(da);
    const s = n.get(IC);
    const o = n.get(oy);
    const a = new Set();
    const l = new Set();
    const u = new Set();
    const d = new Map();
    for (const {
      editor: m,
      groupId: p
    } of e.getEditors(1, {
      excludeSticky: this.excludeSticky
    })) {
      let g = false;
      if (m.closeHandler) {
        g = m.closeHandler.showConfirm();
      } else {
        g = m.isDirty() && !m.isSaving();
      }
      if (g) {
        if (typeof m.closeHandler?.confirm == "function") {
          let f = d.get(m.typeId);
          if (!f) {
            f = new Set();
            d.set(m.typeId, f);
          }
          f.add({
            editor: m,
            groupId: p
          });
        } else if (!m.hasCapability(4) && s.getAutoSaveMode(m).mode === 3) {
          l.add({
            editor: m,
            groupId: p
          });
        } else if (kw && (Sc || xv) && !m.hasCapability(4) && s.getAutoSaveMode(m).mode === 4) {
          u.add({
            editor: m,
            groupId: p
          });
        } else {
          a.add({
            editor: m,
            groupId: p
          });
        }
      }
    }
    if (a.size > 0) {
      const m = Array.from(a.values());
      await this.revealEditorsToConfirm(m, r);
      switch (await o.showSaveConfirm(m.map(({
        editor: g
      }) => g instanceof O1 ? g.primary.getName() : g.getName()))) {
        case 2:
          return;
        case 1:
          await this.revertEditors(e, t, i, m);
          break;
        case 0:
          await e.save(m, {
            reason: 1
          });
          break;
      }
    }
    for (const [, m] of d) {
      const p = Array.from(m.values());
      await this.revealEditorsToConfirm(p, r);
      const g = await p.at(0)?.editor.closeHandler?.confirm?.(p);
      if (typeof g == "number") {
        switch (g) {
          case 2:
            return;
          case 1:
            await this.revertEditors(e, t, i, p);
            break;
          case 0:
            await e.save(p, {
              reason: 1
            });
            break;
        }
      }
    }
    if (l.size > 0) {
      const m = Array.from(l.values());
      await e.save(m, {
        reason: 3
      });
    }
    if (u.size > 0) {
      const m = Array.from(u.values());
      await e.save(m, {
        reason: 4
      });
    }
    return this.doCloseAll(r);
  }
  revertEditors(n, e, t, i) {
    return t.withProgress({
      location: 10,
      delay: 800,
      title: _(3572, null)
    }, () => this.doRevertEditors(n, e, i));
  }
  async doRevertEditors(n, e, t) {
    try {
      await n.revert(t);
    } catch (i) {
      e.error(i);
      await n.revert(t, {
        soft: true
      });
    }
  }
  async revealEditorsToConfirm(n, e) {
    try {
      const t = new Set();
      for (const {
        editor: i,
        groupId: r
      } of n) {
        if (t.has(r)) {
          continue;
        }
        t.add(r);
        await e.getGroup(r)?.openEditor(i);
      }
    } catch {}
  }
  async doCloseAll(n) {
    await Promise.all(this.groupsToClose(n).map(e => e.closeAllEditors({
      excludeSticky: this.excludeSticky
    })));
  }
};
Jka = class jcd extends bbu {
  static {
    this.ID = "workbench.action.closeAllEditors";
  }
  static {
    this.LABEL = dt(3610, "Close All Editors");
  }
  constructor() {
    super({
      id: jcd.ID,
      title: jcd.LABEL,
      f1: true,
      keybinding: {
        weight: 200,
        primary: Ma(Gm, 2101),
        mac: {
          primary: Ma(Np, 2101)
        }
      },
      icon: Be.closeAll,
      category: Br.View
    });
  }
  get excludeSticky() {
    return true;
  }
};
HRf = class extends bbu {
  constructor() {
    super({
      id: "workbench.action.closeAllGroups",
      title: dt(3611, "Close All Editor Groups"),
      f1: true,
      keybinding: {
        weight: 200,
        primary: Ma(Gm, 3125),
        mac: {
          primary: Ma(Np, 3125)
        }
      },
      category: Br.View
    });
  }
  get excludeSticky() {
    return false;
  }
  async doCloseAll(n) {
    await super.doCloseAll(n);
    for (const e of this.groupsToClose(n)) {
      n.removeGroup(e);
    }
  }
};
JRf = class extends rn {
  constructor() {
    super({
      id: "workbench.action.closeEditorsInOtherGroups",
      title: dt(3612, "Close Editors in Other Groups"),
      f1: true,
      category: Br.View
    });
  }
  async run(n, e) {
    const t = n.get(da);
    const i = e ? t.getGroup(e.groupId) : t.activeGroup;
    await Promise.all(t.getGroups(1).map(async r => {
      if (!i || r.id !== i.id) {
        return r.closeAllEditors({
          excludeSticky: true
        });
      }
    }));
  }
};
GRf = class extends rn {
  constructor() {
    super({
      id: "workbench.action.closeEditorInAllGroups",
      title: dt(3613, "Close Editor in All Groups"),
      f1: true,
      category: Br.View
    });
  }
  async run(n) {
    const e = n.get(yi);
    const t = n.get(da);
    const i = e.activeEditor;
    if (i) {
      await Promise.all(t.getGroups(1).map(r => r.closeEditor(i)));
    }
  }
};
vbu = class extends rn {
  constructor(n, e, t) {
    super(n);
    this.direction = e;
    this.isMove = t;
  }
  async run(n, e) {
    const t = n.get(da);
    let i;
    if (e && typeof e.groupId == "number") {
      i = t.getGroup(e.groupId);
    } else {
      i = t.activeGroup;
    }
    if (i) {
      let r;
      if (this.isMove) {
        const s = this.findTargetGroup(t, i);
        if (s) {
          r = t.moveGroup(i, s, this.direction);
        }
      } else {
        r = t.copyGroup(i, i, this.direction);
      }
      if (r) {
        t.activateGroup(r);
      }
    }
  }
  findTargetGroup(n, e) {
    const t = [this.direction];
    switch (this.direction) {
      case 2:
      case 3:
        t.push(0, 1);
        break;
      case 0:
      case 1:
        t.push(2, 3);
        break;
    }
    for (const i of t) {
      const r = n.findGroup({
        direction: i
      }, e);
      if (r) {
        return r;
      }
    }
  }
};
D0i = class extends vbu {
  constructor(n, e) {
    super(n, e, true);
  }
};
WRf = class extends D0i {
  constructor() {
    super({
      id: "workbench.action.moveActiveEditorGroupLeft",
      title: dt(3614, "Move Editor Group Left"),
      f1: true,
      keybinding: {
        weight: 200,
        primary: Ma(Gm, 15),
        mac: {
          primary: Ma(Np, 15)
        }
      },
      category: Br.View
    }, 2);
  }
};
QRf = class extends D0i {
  constructor() {
    super({
      id: "workbench.action.moveActiveEditorGroupRight",
      title: dt(3615, "Move Editor Group Right"),
      f1: true,
      keybinding: {
        weight: 200,
        primary: Ma(Gm, 17),
        mac: {
          primary: Ma(Np, 17)
        }
      },
      category: Br.View
    }, 3);
  }
};
jRf = class extends D0i {
  constructor() {
    super({
      id: "workbench.action.moveActiveEditorGroupUp",
      title: dt(3616, "Move Editor Group Up"),
      f1: true,
      keybinding: {
        weight: 200,
        primary: Ma(Gm, 16),
        mac: {
          primary: Ma(Np, 16)
        }
      },
      category: Br.View
    }, 0);
  }
};
zRf = class extends D0i {
  constructor() {
    super({
      id: "workbench.action.moveActiveEditorGroupDown",
      title: dt(3617, "Move Editor Group Down"),
      f1: true,
      keybinding: {
        weight: 200,
        primary: Ma(Gm, 18),
        mac: {
          primary: Ma(Np, 18)
        }
      },
      category: Br.View
    }, 1);
  }
};
B0i = class extends vbu {
  constructor(n, e) {
    super(n, e, false);
  }
};
VRf = class extends B0i {
  constructor() {
    super({
      id: "workbench.action.duplicateActiveEditorGroupLeft",
      title: dt(3618, "Duplicate Editor Group Left"),
      f1: true,
      category: Br.View
    }, 2);
  }
};
KRf = class extends B0i {
  constructor() {
    super({
      id: "workbench.action.duplicateActiveEditorGroupRight",
      title: dt(3619, "Duplicate Editor Group Right"),
      f1: true,
      category: Br.View
    }, 3);
  }
};
YRf = class extends B0i {
  constructor() {
    super({
      id: "workbench.action.duplicateActiveEditorGroupUp",
      title: dt(3620, "Duplicate Editor Group Up"),
      f1: true,
      category: Br.View
    }, 0);
  }
};
ZRf = class extends B0i {
  constructor() {
    super({
      id: "workbench.action.duplicateActiveEditorGroupDown",
      title: dt(3621, "Duplicate Editor Group Down"),
      f1: true,
      category: Br.View
    }, 1);
  }
};
XRf = class extends rn {
  constructor() {
    super({
      id: "workbench.action.minimizeOtherEditors",
      title: dt(3622, "Expand Editor Group"),
      f1: true,
      category: Br.View,
      precondition: yQ
    });
  }
  async run(n) {
    n.get(da).arrangeGroups(1);
  }
};
ePf = class extends rn {
  constructor() {
    super({
      id: "workbench.action.minimizeOtherEditorsHideSidebar",
      title: dt(3623, "Expand Editor Group and Hide Side Bars"),
      f1: true,
      category: Br.View,
      precondition: Ee.or(yQ, Tce, tMe)
    });
  }
  async run(n) {
    const e = n.get(da);
    const t = n.get(Vu);
    t.setPartHidden(true, "workbench.parts.sidebar");
    t.setPartHidden(true, "workbench.parts.auxiliarybar");
    e.arrangeGroups(1);
  }
};
tPf = class extends rn {
  constructor() {
    super({
      id: "workbench.action.evenEditorWidths",
      title: dt(3624, "Reset Editor Group Sizes"),
      f1: true,
      category: Br.View
    });
  }
  async run(n) {
    n.get(da).arrangeGroups(2);
  }
};
nPf = class extends rn {
  constructor() {
    super({
      id: "workbench.action.evenEditorWidthsExcludingAgent",
      title: dt(3625, "Reset Editor Group Sizes (Excluding Agent)"),
      f1: true,
      category: Br.View
    });
  }
  async run(n) {
    const e = n.get(da);
    const i = e.getGroups(2).filter(o => {
      const a = o.activeEditor;
      if (a) {
        return a.typeId !== h3 && a.typeId !== SSc;
      } else {
        return true;
      }
    });
    if (i.length < 2) {
      return;
    }
    let r = 0;
    for (const o of i) {
      const a = e.getSize(o);
      r += a.width;
    }
    const s = Math.floor(r / i.length);
    for (let o = 0; o < i.length; o++) {
      const a = i[o];
      const l = e.getSize(a);
      const u = o === i.length - 1 ? r - s * (i.length - 1) : s;
      e.setSize(a, {
        width: u,
        height: l.height
      });
    }
  }
};
iPf = class extends rn {
  constructor() {
    super({
      id: "workbench.action.toggleEditorWidths",
      title: dt(3626, "Toggle Editor Group Sizes"),
      f1: true,
      category: Br.View
    });
  }
  async run(n) {
    n.get(da).toggleExpandGroup();
  }
};
rPf = class extends rn {
  constructor() {
    super({
      id: "workbench.action.maximizeEditorHideSidebar",
      title: dt(3627, "Maximize Editor Group and Hide Side Bars"),
      f1: true,
      category: Br.View,
      precondition: Ee.or(Ee.and(tqe.negate(), gkt), Tce, tMe)
    });
  }
  async run(n) {
    const e = n.get(Vu);
    const t = n.get(da);
    if (n.get(yi).activeEditor) {
      e.setPartHidden(true, "workbench.parts.sidebar");
      e.setPartHidden(true, "workbench.parts.auxiliarybar");
      t.arrangeGroups(0);
    }
  }
};
sPf = class extends rn {
  constructor() {
    super({
      id: A0i,
      title: dt(3628, "Toggle Maximize Editor Group"),
      f1: true,
      category: Br.View,
      precondition: Ee.or(gkt, tqe),
      keybinding: {
        weight: 200,
        primary: Ma(Gm, 2091),
        mac: {
          primary: Ma(Np, 2091)
        }
      },
      menu: [{
        id: st.EditorTitle,
        order: -10000,
        group: "navigation",
        when: Ee.and(tqe)
      }, {
        id: st.EmptyEditorGroup,
        order: -10000,
        group: "navigation",
        when: Ee.and(tqe)
      }],
      icon: Be.screenFull,
      toggled: tqe
    });
  }
  async run(n, ...e) {
    const t = n.get(da);
    const i = n.get(yi);
    const r = n.get(Nh);
    const s = gO(e, i, t, r);
    if (s.groupedEditors.length) {
      t.toggleMaximizeGroup(s.groupedEditors[0].group);
    }
  }
};
U1t = class extends rn {
  async run(n) {
    const e = n.get(da);
    const t = this.navigate(e);
    if (!t) {
      return;
    }
    const {
      groupId: i,
      editor: r
    } = t;
    if (!r) {
      return;
    }
    const s = e.getGroup(i);
    if (s) {
      await s.openEditor(r);
    }
  }
};
oPf = class extends U1t {
  constructor() {
    super({
      id: "workbench.action.nextEditor",
      title: dt(3629, "Open Next Editor"),
      f1: true,
      keybinding: {
        weight: 200,
        primary: 2060,
        mac: {
          primary: 2577,
          secondary: [3166]
        }
      },
      category: Br.View
    });
  }
  async run(n) {
    return super.run(n);
  }
  navigate(n) {
    const e = n.activeGroup;
    const t = e.getEditors(1);
    const i = e.activeEditor ? t.indexOf(e.activeEditor) : -1;
    if (i + 1 < t.length) {
      return {
        editor: t[i + 1],
        groupId: e.id
      };
    }
    const r = new Set();
    let s = n.activeGroup;
    while (s && !r.has(s.id)) {
      s = n.findGroup({
        location: 2
      }, s, true);
      if (s) {
        r.add(s.id);
        const o = s.getEditors(1);
        if (o.length > 0) {
          return {
            editor: o[0],
            groupId: s.id
          };
        }
      }
    }
  }
};
aPf = class extends U1t {
  constructor() {
    super({
      id: "workbench.action.previousEditor",
      title: dt(3630, "Open Previous Editor"),
      f1: true,
      keybinding: {
        weight: 200,
        primary: 2059,
        mac: {
          primary: 2575,
          secondary: [3164]
        }
      },
      category: Br.View
    });
  }
  async run(n) {
    return super.run(n);
  }
  navigate(n) {
    const e = n.activeGroup;
    const t = e.getEditors(1);
    const i = e.activeEditor ? t.indexOf(e.activeEditor) : -1;
    if (i > 0) {
      return {
        editor: t[i - 1],
        groupId: e.id
      };
    }
    const r = new Set();
    let s = n.activeGroup;
    while (s && !r.has(s.id)) {
      s = n.findGroup({
        location: 3
      }, s, true);
      if (s) {
        r.add(s.id);
        const o = s.getEditors(1);
        if (o.length > 0) {
          return {
            editor: o[o.length - 1],
            groupId: s.id
          };
        }
      }
    }
  }
};
cPf = class extends U1t {
  constructor() {
    super({
      id: "workbench.action.nextEditorInGroup",
      title: dt(3631, "Open Next Editor in Group"),
      f1: true,
      keybinding: {
        weight: 200,
        primary: Ma(Gm, 2060),
        mac: {
          primary: Ma(Np, 2577)
        }
      },
      category: Br.View
    });
  }
  navigate(n) {
    const e = n.activeGroup;
    const t = e.getEditors(1);
    const i = e.activeEditor ? t.indexOf(e.activeEditor) : -1;
    return {
      editor: i + 1 < t.length ? t[i + 1] : t[0],
      groupId: e.id
    };
  }
};
lPf = class extends U1t {
  constructor() {
    super({
      id: "workbench.action.previousEditorInGroup",
      title: dt(3632, "Open Previous Editor in Group"),
      f1: true,
      keybinding: {
        weight: 200,
        primary: Ma(Gm, 2059),
        mac: {
          primary: Ma(Np, 2575)
        }
      },
      category: Br.View
    });
  }
  navigate(n) {
    const e = n.activeGroup;
    const t = e.getEditors(1);
    const i = e.activeEditor ? t.indexOf(e.activeEditor) : -1;
    return {
      editor: i > 0 ? t[i - 1] : t[t.length - 1],
      groupId: e.id
    };
  }
};
uPf = class extends U1t {
  constructor() {
    super({
      id: "workbench.action.firstEditorInGroup",
      title: dt(3633, "Open First Editor in Group"),
      f1: true,
      category: Br.View
    });
  }
  navigate(n) {
    const e = n.activeGroup;
    return {
      editor: e.getEditors(1)[0],
      groupId: e.id
    };
  }
};
dPf = class extends U1t {
  constructor() {
    super({
      id: "workbench.action.lastEditorInGroup",
      title: dt(3634, "Open Last Editor in Group"),
      f1: true,
      keybinding: {
        weight: 200,
        primary: 533,
        secondary: [2078],
        mac: {
          primary: 277,
          secondary: [2078]
        }
      },
      category: Br.View
    });
  }
  navigate(n) {
    const e = n.activeGroup;
    const t = e.getEditors(1);
    return {
      editor: t[t.length - 1],
      groupId: e.id
    };
  }
};
Zqe = class Ijb extends rn {
  static {
    this.ID = "workbench.action.navigateForward";
  }
  static {
    this.LABEL = _(3573, null);
  }
  constructor() {
    super({
      id: Ijb.ID,
      title: {
        ...dt(3635, "Go Forward"),
        mnemonicTitle: _(3574, null)
      },
      f1: true,
      icon: Be.arrowRight,
      precondition: Ee.has("canNavigateForward"),
      keybinding: {
        weight: 200,
        win: {
          primary: 529,
          secondary: [123]
        },
        mac: {
          primary: 1368,
          secondary: [123]
        },
        linux: {
          primary: 3160,
          secondary: [123]
        }
      },
      menu: [{
        id: st.MenubarGoMenu,
        group: "1_history_nav",
        order: 2
      }, {
        id: st.CommandCenter,
        order: 2,
        when: Ee.has("config.workbench.navigationControl.enabled")
      }]
    });
  }
  async run(e) {
    await e.get(ek).goForward(0);
  }
};
Xqe = class Djb extends rn {
  static {
    this.ID = "workbench.action.navigateBack";
  }
  static {
    this.LABEL = _(3575, null);
  }
  constructor() {
    super({
      id: Djb.ID,
      title: {
        ...dt(3636, "Go Back"),
        mnemonicTitle: _(3576, null)
      },
      f1: true,
      precondition: Ee.has("canNavigateBack"),
      icon: Be.arrowLeft,
      keybinding: {
        weight: 200,
        win: {
          primary: 527,
          secondary: [122]
        },
        mac: {
          primary: 344,
          secondary: [122]
        },
        linux: {
          primary: 2648,
          secondary: [122]
        }
      },
      menu: [{
        id: st.MenubarGoMenu,
        group: "1_history_nav",
        order: 1
      }, {
        id: st.CommandCenter,
        order: 1,
        when: Ee.has("config.workbench.navigationControl.enabled")
      }]
    });
  }
  async run(e) {
    await e.get(ek).goBack(0);
  }
};
hPf = class extends rn {
  constructor() {
    super({
      id: "workbench.action.navigateLast",
      title: dt(3637, "Go Previous"),
      f1: true
    });
  }
  async run(n) {
    await n.get(ek).goPrevious(0);
  }
};
mPf = class extends rn {
  constructor() {
    super({
      id: "workbench.action.navigateForwardInEditLocations",
      title: dt(3638, "Go Forward in Edit Locations"),
      f1: true
    });
  }
  async run(n) {
    await n.get(ek).goForward(1);
  }
};
pPf = class extends rn {
  constructor() {
    super({
      id: "workbench.action.navigateBackInEditLocations",
      title: dt(3639, "Go Back in Edit Locations"),
      f1: true
    });
  }
  async run(n) {
    await n.get(ek).goBack(1);
  }
};
gPf = class extends rn {
  constructor() {
    super({
      id: "workbench.action.navigatePreviousInEditLocations",
      title: dt(3640, "Go Previous in Edit Locations"),
      f1: true
    });
  }
  async run(n) {
    await n.get(ek).goPrevious(1);
  }
};
fPf = class extends rn {
  constructor() {
    super({
      id: "workbench.action.navigateToLastEditLocation",
      title: dt(3641, "Go to Last Edit Location"),
      f1: true,
      keybinding: {
        weight: 200,
        primary: Ma(Gm, 2095),
        mac: {
          primary: Ma(Np, 2095)
        }
      }
    });
  }
  async run(n) {
    await n.get(ek).goLast(1);
  }
};
bPf = class extends rn {
  constructor() {
    super({
      id: "workbench.action.navigateForwardInNavigationLocations",
      title: dt(3642, "Go Forward in Navigation Locations"),
      f1: true
    });
  }
  async run(n) {
    await n.get(ek).goForward(2);
  }
};
vPf = class extends rn {
  constructor() {
    super({
      id: "workbench.action.navigateBackInNavigationLocations",
      title: dt(3643, "Go Back in Navigation Locations"),
      f1: true
    });
  }
  async run(n) {
    await n.get(ek).goBack(2);
  }
};
APf = class extends rn {
  constructor() {
    super({
      id: "workbench.action.navigatePreviousInNavigationLocations",
      title: dt(3644, "Go Previous in Navigation Locations"),
      f1: true
    });
  }
  async run(n) {
    await n.get(ek).goPrevious(2);
  }
};
yPf = class extends rn {
  constructor() {
    super({
      id: "workbench.action.navigateToLastNavigationLocation",
      title: dt(3645, "Go to Last Navigation Location"),
      f1: true
    });
  }
  async run(n) {
    await n.get(ek).goLast(2);
  }
};
Abu = class Bjb extends rn {
  static {
    this.ID = "workbench.action.reopenClosedEditor";
  }
  constructor() {
    super({
      id: Bjb.ID,
      title: dt(3646, "Reopen Closed Editor"),
      f1: true,
      keybinding: {
        weight: 200,
        primary: 3122
      },
      category: Br.View
    });
  }
  async run(e) {
    await e.get(ek).reopenLastClosedEditor();
  }
};
ybu = class Rjb extends rn {
  static {
    this.ID = "workbench.action.clearRecentFiles";
  }
  constructor() {
    super({
      id: Rjb.ID,
      title: dt(3647, "Clear Recently Opened..."),
      f1: true,
      category: Br.File
    });
  }
  async run(e) {
    const t = e.get(Ml);
    const i = e.get(CM);
    const r = e.get(ek);
    const {
      confirmed: s
    } = await t.confirm({
      type: "warning",
      message: _(3577, null),
      detail: _(3578, null),
      primaryButton: _(3579, null)
    });
    if (s) {
      i.clearRecentlyOpened();
      r.clearRecentlyOpened();
    }
  }
};
wbu = class Pjb extends rn {
  static {
    this.ID = "workbench.action.showEditorsInActiveGroup";
  }
  constructor() {
    super({
      id: Pjb.ID,
      title: dt(3648, "Show Editors in Active Group By Most Recently Used"),
      f1: true,
      category: Br.View
    });
  }
  async run(e) {
    e.get(ha).quickAccess.show($$e.PREFIX);
  }
};
_bu = class Ljb extends rn {
  static {
    this.ID = "workbench.action.showAllEditors";
  }
  constructor() {
    super({
      id: Ljb.ID,
      title: dt(3649, "Show All Editors By Appearance"),
      f1: true,
      keybinding: {
        weight: 200,
        primary: Ma(Gm, 2094),
        mac: {
          primary: Ma(Np, 2094)
        }
      },
      category: Br.File
    });
  }
  async run(e) {
    e.get(ha).quickAccess.show(kmn.PREFIX);
  }
};
Cbu = class Njb extends rn {
  static {
    this.ID = "workbench.action.showAllEditorsByMostRecentlyUsed";
  }
  constructor() {
    super({
      id: Njb.ID,
      title: dt(3650, "Show All Editors By Most Recently Used"),
      f1: true,
      category: Br.View
    });
  }
  async run(e) {
    e.get(ha).quickAccess.show(q$e.PREFIX);
  }
};
R0i = class extends rn {
  constructor(n, e, t) {
    super(n);
    this.prefix = e;
    this.itemActivation = t;
  }
  async run(n) {
    const e = n.get(mo);
    const t = n.get(ha);
    const i = e.lookupKeybindings(this.desc.id);
    t.quickAccess.show(this.prefix, {
      quickNavigateConfiguration: {
        keybindings: i
      },
      itemActivation: this.itemActivation
    });
  }
};
wPf = class extends R0i {
  constructor() {
    super({
      id: "workbench.action.quickOpenPreviousRecentlyUsedEditor",
      title: dt(3651, "Quick Open Previous Recently Used Editor"),
      f1: true,
      category: Br.View
    }, q$e.PREFIX, undefined);
  }
};
_Pf = class extends R0i {
  constructor() {
    super({
      id: "workbench.action.quickOpenLeastRecentlyUsedEditor",
      title: dt(3652, "Quick Open Least Recently Used Editor"),
      f1: true,
      category: Br.View
    }, q$e.PREFIX, undefined);
  }
};
CPf = class extends R0i {
  constructor() {
    super({
      id: "workbench.action.quickOpenPreviousRecentlyUsedEditorInGroup",
      title: dt(3653, "Quick Open Previous Recently Used Editor in Group"),
      f1: true,
      keybinding: {
        weight: 200,
        primary: 2050,
        mac: {
          primary: 258
        }
      },
      precondition: Ee.and(rpn.toNegated(), Ee.or(Ci.focus, ow), lo.focus.negate(), WMe.agentsPaneFocused.negate(), Ee.has("composerFocused").negate(), LEe.negate(), Bnt.negate(), oyi.negate()),
      category: Br.View
    }, $$e.PREFIX, undefined);
  }
};
SPf = class extends R0i {
  constructor() {
    super({
      id: "workbench.action.quickOpenLeastRecentlyUsedEditorInGroup",
      title: dt(3654, "Quick Open Least Recently Used Editor in Group"),
      f1: true,
      keybinding: {
        weight: 200,
        primary: 3074,
        mac: {
          primary: 1282
        }
      },
      precondition: Ee.and(rpn.toNegated(), Ee.or(Ci.focus, ow), lo.focus.negate(), WMe.agentsPaneFocused.negate(), Ee.has("composerFocused").negate(), LEe.negate(), Bnt.negate(), oyi.negate()),
      category: Br.View
    }, $$e.PREFIX, IW.LAST);
  }
};
kPf = class zcd extends rn {
  static {
    this.ID = "workbench.action.openPreviousEditorFromHistory";
  }
  constructor() {
    super({
      id: zcd.ID,
      title: dt(3655, "Quick Open Previous Editor from History"),
      f1: true
    });
  }
  async run(e) {
    const t = e.get(mo);
    const i = e.get(ha);
    const r = e.get(da);
    const s = t.lookupKeybindings(zcd.ID);
    let o;
    if (r.activeGroup.count === 0) {
      o = IW.FIRST;
    }
    i.quickAccess.show("", {
      quickNavigateConfiguration: {
        keybindings: s
      },
      itemActivation: o
    });
  }
};
EPf = class extends rn {
  constructor() {
    super({
      id: "workbench.action.openNextRecentlyUsedEditor",
      title: dt(3656, "Open Next Recently Used Editor"),
      f1: true,
      category: Br.View
    });
  }
  async run(n) {
    n.get(ek).openNextRecentlyUsedEditor();
  }
};
xPf = class extends rn {
  constructor() {
    super({
      id: "workbench.action.openPreviousRecentlyUsedEditor",
      title: dt(3657, "Open Previous Recently Used Editor"),
      f1: true,
      category: Br.View
    });
  }
  async run(n) {
    n.get(ek).openPreviouslyUsedEditor();
  }
};
TPf = class extends rn {
  constructor() {
    super({
      id: "workbench.action.openNextRecentlyUsedEditorInGroup",
      title: dt(3658, "Open Next Recently Used Editor In Group"),
      f1: true,
      category: Br.View
    });
  }
  async run(n) {
    const e = n.get(ek);
    const t = n.get(da);
    e.openNextRecentlyUsedEditor(t.activeGroup.id);
  }
};
IPf = class extends rn {
  constructor() {
    super({
      id: "workbench.action.openPreviousRecentlyUsedEditorInGroup",
      title: dt(3659, "Open Previous Recently Used Editor In Group"),
      f1: true,
      category: Br.View
    });
  }
  async run(n) {
    const e = n.get(ek);
    const t = n.get(da);
    e.openPreviouslyUsedEditor(t.activeGroup.id);
  }
};
DPf = class extends rn {
  constructor() {
    super({
      id: "workbench.action.clearEditorHistory",
      title: dt(3660, "Clear Editor History"),
      f1: true
    });
  }
  async run(n) {
    const e = n.get(Ml);
    const t = n.get(ek);
    const {
      confirmed: i
    } = await e.confirm({
      type: "warning",
      message: _(3580, null),
      detail: _(3581, null),
      primaryButton: _(3582, null)
    });
    if (i) {
      t.clear();
    }
  }
};
BPf = class extends pR {
  constructor() {
    super({
      id: "workbench.action.moveEditorLeftInGroup",
      title: dt(3661, "Move Editor Left"),
      keybinding: {
        weight: 200,
        primary: 3083,
        mac: {
          primary: Ma(Np, 3087)
        }
      },
      f1: true,
      category: Br.View
    }, twe, {
      to: "left"
    });
  }
};
RPf = class extends pR {
  constructor() {
    super({
      id: "workbench.action.moveEditorRightInGroup",
      title: dt(3662, "Move Editor Right"),
      keybinding: {
        weight: 200,
        primary: 3084,
        mac: {
          primary: Ma(Np, 3089)
        }
      },
      f1: true,
      category: Br.View
    }, twe, {
      to: "right"
    });
  }
};
PPf = class extends pR {
  constructor() {
    super({
      id: "workbench.action.moveEditorToPreviousGroup",
      title: dt(3663, "Move Editor into Previous Group"),
      keybinding: {
        weight: 200,
        primary: 2575,
        mac: {
          primary: 2319
        }
      },
      f1: true,
      category: Br.View
    }, twe, {
      to: "previous",
      by: "group"
    });
  }
};
LPf = class extends pR {
  constructor() {
    super({
      id: "workbench.action.moveEditorToNextGroup",
      title: dt(3664, "Move Editor into Next Group"),
      f1: true,
      keybinding: {
        weight: 200,
        primary: 2577,
        mac: {
          primary: 2321
        }
      },
      category: Br.View
    }, twe, {
      to: "next",
      by: "group"
    });
  }
};
NPf = class extends pR {
  constructor() {
    super({
      id: "workbench.action.moveEditorToAboveGroup",
      title: dt(3665, "Move Editor into Group Above"),
      f1: true,
      category: Br.View
    }, twe, {
      to: "up",
      by: "group"
    });
  }
};
MPf = class extends pR {
  constructor() {
    super({
      id: "workbench.action.moveEditorToBelowGroup",
      title: dt(3666, "Move Editor into Group Below"),
      f1: true,
      category: Br.View
    }, twe, {
      to: "down",
      by: "group"
    });
  }
};
FPf = class extends pR {
  constructor() {
    super({
      id: "workbench.action.moveEditorToLeftGroup",
      title: dt(3667, "Move Editor into Left Group"),
      f1: true,
      category: Br.View
    }, twe, {
      to: "left",
      by: "group"
    });
  }
};
OPf = class extends pR {
  constructor() {
    super({
      id: "workbench.action.moveEditorToRightGroup",
      title: dt(3668, "Move Editor into Right Group"),
      f1: true,
      category: Br.View
    }, twe, {
      to: "right",
      by: "group"
    });
  }
};
UPf = class extends pR {
  constructor() {
    super({
      id: "workbench.action.moveEditorToFirstGroup",
      title: dt(3669, "Move Editor into First Group"),
      f1: true,
      keybinding: {
        weight: 200,
        primary: 1558,
        mac: {
          primary: 2326
        }
      },
      category: Br.View
    }, twe, {
      to: "first",
      by: "group"
    });
  }
};
$Pf = class extends pR {
  constructor() {
    super({
      id: "workbench.action.moveEditorToLastGroup",
      title: dt(3670, "Move Editor into Last Group"),
      f1: true,
      keybinding: {
        weight: 200,
        primary: 1566,
        mac: {
          primary: 2334
        }
      },
      category: Br.View
    }, twe, {
      to: "last",
      by: "group"
    });
  }
};
qPf = class extends pR {
  constructor() {
    super({
      id: "workbench.action.splitEditorToPreviousGroup",
      title: dt(3671, "Split Editor into Previous Group"),
      f1: true,
      category: Br.View
    }, JMe, {
      to: "previous",
      by: "group"
    });
  }
};
HPf = class extends pR {
  constructor() {
    super({
      id: "workbench.action.splitEditorToNextGroup",
      title: dt(3672, "Split Editor into Next Group"),
      f1: true,
      category: Br.View
    }, JMe, {
      to: "next",
      by: "group"
    });
  }
};
JPf = class extends pR {
  constructor() {
    super({
      id: "workbench.action.splitEditorToAboveGroup",
      title: dt(3673, "Split Editor into Group Above"),
      f1: true,
      category: Br.View
    }, JMe, {
      to: "up",
      by: "group"
    });
  }
};
GPf = class extends pR {
  constructor() {
    super({
      id: "workbench.action.splitEditorToBelowGroup",
      title: dt(3674, "Split Editor into Group Below"),
      f1: true,
      category: Br.View
    }, JMe, {
      to: "down",
      by: "group"
    });
  }
};
WPf = class extends pR {
  static {
    this.ID = "workbench.action.splitEditorToLeftGroup";
  }
  static {
    this.LABEL = _(3583, null);
  }
  constructor() {
    super({
      id: "workbench.action.splitEditorToLeftGroup",
      title: dt(3675, "Split Editor into Left Group"),
      f1: true,
      category: Br.View
    }, JMe, {
      to: "left",
      by: "group"
    });
  }
};
QPf = class extends pR {
  constructor() {
    super({
      id: "workbench.action.splitEditorToRightGroup",
      title: dt(3676, "Split Editor into Right Group"),
      f1: true,
      category: Br.View
    }, JMe, {
      to: "right",
      by: "group"
    });
  }
};
jPf = class extends pR {
  constructor() {
    super({
      id: "workbench.action.splitEditorToFirstGroup",
      title: dt(3677, "Split Editor into First Group"),
      f1: true,
      category: Br.View
    }, JMe, {
      to: "first",
      by: "group"
    });
  }
};
zPf = class extends pR {
  constructor() {
    super({
      id: "workbench.action.splitEditorToLastGroup",
      title: dt(3678, "Split Editor into Last Group"),
      f1: true,
      category: Br.View
    }, JMe, {
      to: "last",
      by: "group"
    });
  }
};
Sbu = class Mjb extends pR {
  static {
    this.ID = "workbench.action.editorLayoutSingle";
  }
  constructor() {
    super({
      id: Mjb.ID,
      title: dt(3679, "Single Column Editor Layout"),
      f1: true,
      category: Br.View
    }, GMe, {
      groups: [{}],
      orientation: 0
    });
  }
};
kbu = class Fjb extends pR {
  static {
    this.ID = "workbench.action.editorLayoutTwoColumns";
  }
  constructor() {
    super({
      id: Fjb.ID,
      title: dt(3680, "Two Columns Editor Layout"),
      f1: true,
      category: Br.View
    }, GMe, {
      groups: [{}, {}],
      orientation: 0
    });
  }
};
Ebu = class Ojb extends pR {
  static {
    this.ID = "workbench.action.editorLayoutThreeColumns";
  }
  constructor() {
    super({
      id: Ojb.ID,
      title: dt(3681, "Three Columns Editor Layout"),
      f1: true,
      category: Br.View
    }, GMe, {
      groups: [{}, {}, {}],
      orientation: 0
    });
  }
};
xbu = class Ujb extends pR {
  static {
    this.ID = "workbench.action.editorLayoutTwoRows";
  }
  constructor() {
    super({
      id: Ujb.ID,
      title: dt(3682, "Two Rows Editor Layout"),
      f1: true,
      category: Br.View
    }, GMe, {
      groups: [{}, {}],
      orientation: 1
    });
  }
};
Tbu = class $jb extends pR {
  static {
    this.ID = "workbench.action.editorLayoutThreeRows";
  }
  constructor() {
    super({
      id: $jb.ID,
      title: dt(3683, "Three Rows Editor Layout"),
      f1: true,
      category: Br.View
    }, GMe, {
      groups: [{}, {}, {}],
      orientation: 1
    });
  }
};
Ibu = class qjb extends pR {
  static {
    this.ID = "workbench.action.editorLayoutTwoByTwoGrid";
  }
  constructor() {
    super({
      id: qjb.ID,
      title: dt(3684, "Grid Editor Layout (2x2)"),
      f1: true,
      category: Br.View
    }, GMe, {
      groups: [{
        groups: [{}, {}]
      }, {
        groups: [{}, {}]
      }],
      orientation: 0
    });
  }
};
Dbu = class Hjb extends pR {
  static {
    this.ID = "workbench.action.editorLayoutTwoColumnsBottom";
  }
  constructor() {
    super({
      id: Hjb.ID,
      title: dt(3685, "Two Columns Bottom Editor Layout"),
      f1: true,
      category: Br.View
    }, GMe, {
      groups: [{}, {
        groups: [{}, {}]
      }],
      orientation: 1
    });
  }
};
Bbu = class Jjb extends pR {
  static {
    this.ID = "workbench.action.editorLayoutTwoRowsRight";
  }
  constructor() {
    super({
      id: Jjb.ID,
      title: dt(3686, "Two Rows Right Editor Layout"),
      f1: true,
      category: Br.View
    }, GMe, {
      groups: [{}, {
        groups: [{}, {}]
      }],
      orientation: 0
    });
  }
};
P0i = class extends rn {
  constructor(n, e) {
    super(n);
    this.direction = e;
  }
  async run(n) {
    const e = n.get(da);
    const t = n.get(Vu);
    const i = Jy();
    const r = t.hasFocus("workbench.parts.editor") || i.activeElement === i.body;
    const s = e.addGroup(e.activeGroup, this.direction);
    e.activateGroup(s);
    if (r) {
      s.focus();
    }
  }
};
VPf = class extends P0i {
  constructor() {
    super({
      id: "workbench.action.newGroupLeft",
      title: dt(3687, "New Editor Group to the Left"),
      f1: true,
      category: Br.View
    }, 2);
  }
};
KPf = class extends P0i {
  constructor() {
    super({
      id: "workbench.action.newGroupRight",
      title: dt(3688, "New Editor Group to the Right"),
      f1: true,
      category: Br.View
    }, 3);
  }
};
YPf = class extends P0i {
  constructor() {
    super({
      id: "workbench.action.newGroupAbove",
      title: dt(3689, "New Editor Group Above"),
      f1: true,
      category: Br.View
    }, 0);
  }
};
ZPf = class extends P0i {
  constructor() {
    super({
      id: "workbench.action.newGroupBelow",
      title: dt(3690, "New Editor Group Below"),
      f1: true,
      category: Br.View
    }, 1);
  }
};
XPf = class extends rn {
  constructor() {
    super({
      id: "workbench.action.toggleEditorType",
      title: dt(3691, "Toggle Editor Type"),
      f1: true,
      category: Br.View,
      precondition: Dnt
    });
  }
  async run(n) {
    const e = n.get(yi);
    const t = n.get(vD);
    const i = e.activeEditorPane;
    if (!i) {
      return;
    }
    const r = gp.getCanonicalUri(i.input);
    if (!r) {
      return;
    }
    const s = t.getEditors(r).map(o => o.id).filter(o => o !== i.input.editorId);
    if (s.length !== 0) {
      await e.replaceEditors([{
        editor: i.input,
        replacement: {
          resource: r,
          options: {
            override: s[0]
          }
        }
      }], i.group);
    }
  }
};
eLf = class extends rn {
  constructor() {
    super({
      id: "workbench.action.reopenTextEditor",
      title: dt(3692, "Reopen Editor with Text Editor"),
      f1: true,
      category: Br.View,
      precondition: Dnt
    });
  }
  async run(n) {
    const e = n.get(yi);
    const t = e.activeEditorPane;
    if (!t) {
      return;
    }
    const i = gp.getCanonicalUri(t.input);
    if (i) {
      await e.replaceEditors([{
        editor: t.input,
        replacement: {
          resource: i,
          options: {
            override: G0.id
          }
        }
      }], t.group);
    }
  }
};
Rbu = class extends rn {
  constructor(n, e, t, i) {
    super({
      id: n,
      title: e,
      category: Br.View,
      precondition: ow,
      keybinding: t,
      f1: true
    });
    this.move = i;
  }
  async run(n, ...e) {
    const t = n.get(da);
    const i = n.get(yi);
    const r = n.get(Nh);
    const s = gO(e, i, t, r);
    if (!s.groupedEditors.length) {
      return;
    }
    const o = await t.createAuxiliaryEditorPart();
    const {
      group: a,
      editors: l
    } = s.groupedEditors[0];
    const u = HSa(a, l, s.preserveFocus);
    if (this.move) {
      a.moveEditors(u, o.activeGroup);
    } else {
      a.copyEditors(u, o.activeGroup);
    }
    o.activeGroup.focus();
  }
};
tLf = class extends Rbu {
  constructor() {
    super(y0i, {
      ...dt(3693, "Move Editor into New Window"),
      mnemonicTitle: _(3584, null)
    }, undefined, true);
  }
};
nLf = class extends Rbu {
  constructor() {
    super(gka, {
      ...dt(3694, "Copy Editor into New Window"),
      mnemonicTitle: _(3585, null)
    }, {
      primary: Ma(Gm, 45),
      weight: 200,
      mac: {
        primary: Ma(Np, 45)
      }
    }, false);
  }
};
Pbu = class extends rn {
  constructor(n, e, t) {
    super({
      id: n,
      title: e,
      category: Br.View,
      f1: true
    });
    this.move = t;
  }
  async run(n) {
    const e = n.get(da);
    const t = e.activeGroup;
    const i = await e.createAuxiliaryEditorPart();
    e.mergeGroup(t, i.activeGroup, {
      mode: this.move ? 1 : 0
    });
    i.activeGroup.focus();
  }
};
iLf = class extends Pbu {
  constructor() {
    super(Mfu, {
      ...dt(3695, "Move Editor Group into New Window"),
      mnemonicTitle: _(3586, null)
    }, true);
  }
};
rLf = class extends Pbu {
  constructor() {
    super(Ffu, {
      ...dt(3696, "Copy Editor Group into New Window"),
      mnemonicTitle: _(3587, null)
    }, false);
  }
};
sLf = class extends rn {
  constructor() {
    super({
      id: "workbench.action.restoreEditorsToMainWindow",
      title: {
        ...dt(3697, "Restore Editors into Main Window"),
        mnemonicTitle: _(3588, null)
      },
      f1: true,
      precondition: pD,
      category: Br.View
    });
  }
  async run(n) {
    const e = n.get(da);
    e.mergeAllGroups(e.mainPart.activeGroup);
  }
};
oLf = class extends rn {
  constructor() {
    super({
      id: Ofu,
      title: {
        ...dt(3698, "New Empty Editor Window"),
        mnemonicTitle: _(3589, null)
      },
      f1: true,
      category: Br.View
    });
  }
  async run(n) {
    (await n.get(da).createAuxiliaryEditorPart()).activeGroup.focus();
  }
};

"use strict";

// Module: out-build/vs/workbench/contrib/chat/browser/chatEditing/chatEditingActions.js
// Offset: 30991687 (bundle byte offset)
// Size: 8775 bytes
Po();
qi();
Yr();
Yn();
lv();
tl();
Qh();
Tg();
Cm();
td();
Ht();
dr();
Ei();
si();
ru();
wI();
Rf();
od();
ss();
wTf();
_E();
Hq();
xS();
Wq();
SS();
Ice();
kk();
Ait = class extends rn {
  constructor(n) {
    super({
      category: cO,
      ...n
    });
  }
  run(n, ...e) {
    const t = _Tf(n, e);
    if (!!t && !!t.editingSession) {
      return this.runEditingSessionAction(n, t.editingSession, t.chatWidget, ...e);
    }
  }
};
N_i = class extends Ait {
  runEditingSessionAction(n, e, t, ...i) {
    const r = [];
    if (je.isUri(i[0])) {
      r.push(i[0]);
    } else if (t) {
      r.push(...t.input.selectedElements);
    }
    if (r.length) {
      return this.runWorkingSetAction(n, e, t, ...r);
    }
  }
};
Dt(class extends N_i {
  constructor() {
    super({
      id: "chatEditing.removeFileFromWorkingSet",
      title: dt(5284, "Remove File"),
      icon: Be.close,
      precondition: qa.requestInProgress.negate(),
      menu: [{
        id: st.ChatEditingWidgetModifiedFilesToolbar,
        order: 5,
        group: "navigation"
      }]
    });
  }
  async runWorkingSetAction(e, t, i, ...r) {
    const s = e.get(Ml);
    const o = t.entries.get().filter(a => r.includes(a.modifiedURI) && a.state.get() === 0);
    if (o.length > 0) {
      const a = o.length > 1 ? _(5258, null, o.length) : ca(o[0].modifiedURI);
      if (!(await s.confirm({
        title: _(5259, null, a),
        message: _(5260, null, a),
        primaryButton: _(5261, null),
        type: "info"
      })).confirmed) {
        return;
      }
    }
    await t.reject(...r);
    t.remove(0, ...r);
    for (const a of r) {
      i.attachmentModel.delete(a.toString());
    }
    if (i.attachmentModel.fileAttachments.length === 0) {
      i.input.relatedFiles?.clear();
    }
  }
});
Dt(class extends N_i {
  constructor() {
    super({
      id: "chatEditing.openFileInDiff",
      title: dt(5285, "Open Changes in Diff Editor"),
      icon: Be.diffSingle,
      menu: [{
        id: st.ChatEditingWidgetModifiedFilesToolbar,
        when: Ee.equals(gyi.key, 0),
        order: 2,
        group: "navigation"
      }]
    });
  }
  async runWorkingSetAction(e, t, i, ...r) {
    const s = e.get(yi);
    for (const o of r) {
      const a = t.getEntry(o);
      if (a?.state.get() === 0) {
        await s.openEditor({
          original: {
            resource: je.from(a.originalURI, true)
          },
          modified: {
            resource: je.from(a.modifiedURI, true)
          }
        });
      } else {
        await s.openEditor({
          resource: o
        });
      }
    }
  }
});
Dt(class extends N_i {
  constructor() {
    super({
      id: "chatEditing.acceptFile",
      title: dt(5286, "Keep"),
      icon: Be.check,
      precondition: qa.requestInProgress.negate(),
      menu: [{
        when: Ee.and(Ee.equals("resourceScheme", pyi), Ee.notIn(eAa.key, Xva.key)),
        id: st.MultiDiffEditorFileToolbar,
        order: 0,
        group: "navigation"
      }, {
        id: st.ChatEditingWidgetModifiedFilesToolbar,
        when: Ee.equals(gyi.key, 0),
        order: 0,
        group: "navigation"
      }]
    });
  }
  async runWorkingSetAction(e, t, i, ...r) {
    await t.accept(...r);
  }
});
Dt(class extends N_i {
  constructor() {
    super({
      id: "chatEditing.discardFile",
      title: dt(5287, "Undo"),
      icon: Be.discard,
      precondition: qa.requestInProgress.negate(),
      menu: [{
        when: Ee.and(Ee.equals("resourceScheme", pyi), Ee.notIn(eAa.key, Xva.key)),
        id: st.MultiDiffEditorFileToolbar,
        order: 2,
        group: "navigation"
      }, {
        id: st.ChatEditingWidgetModifiedFilesToolbar,
        when: Ee.equals(gyi.key, 0),
        order: 1,
        group: "navigation"
      }]
    });
  }
  async runWorkingSetAction(e, t, i, ...r) {
    await t.reject(...r);
  }
});
CTf = class extends Ait {
  constructor() {
    super({
      id: "chatEditing.acceptAllFiles",
      title: _(5262, null),
      icon: Be.check,
      tooltip: _(5263, null),
      precondition: Ee.and(qa.requestInProgress.negate(), iMe),
      keybinding: {
        primary: 2051,
        when: Ee.and(qa.requestInProgress.negate(), iMe, qa.inChatInput),
        weight: 200
      },
      menu: [{
        id: st.ChatEditingWidgetToolbar,
        group: "navigation",
        order: 0,
        when: Ee.and(fyi.negate(), Ee.and(iMe))
      }]
    });
  }
  async runEditingSessionAction(n, e, t, ...i) {
    await e.accept();
  }
};
Dt(CTf);
STf = class extends Ait {
  constructor() {
    super({
      id: "chatEditing.discardAllFiles",
      title: _(5264, null),
      icon: Be.discard,
      tooltip: _(5265, null),
      precondition: Ee.and(qa.requestInProgress.negate(), iMe),
      menu: [{
        id: st.ChatEditingWidgetToolbar,
        group: "navigation",
        order: 1,
        when: Ee.and(fyi.negate(), iMe)
      }],
      keybinding: {
        when: Ee.and(qa.requestInProgress.negate(), iMe, qa.inChatInput, qa.inputHasText.negate()),
        weight: 200,
        primary: 2049
      }
    });
  }
  async runEditingSessionAction(n, e, t, ...i) {
    await qry(n, e);
  }
};
Dt(STf);
Zpu = class NQb extends Ait {
  static {
    this.ID = "chatEditing.clearWorkingSet";
  }
  constructor() {
    super({
      id: NQb.ID,
      title: _(5270, null),
      icon: Be.clearAll,
      tooltip: _(5271, null),
      precondition: Ee.and(qa.requestInProgress.negate()),
      menu: [{
        id: st.ChatEditingWidgetToolbar,
        group: "navigation",
        order: 5,
        when: tAa.negate()
      }]
    });
  }
  async runEditingSessionAction(e, t, i, ...r) {
    const s = [...t.entries.get()].map(l => l.modifiedURI);
    t.remove(0, ...s);
    const a = (i.attachmentModel ? i.attachmentModel.fileAttachments : []).map(l => l.toString());
    i.attachmentModel.delete(...a);
  }
};
Dt(Zpu);
Xpu = class DWa extends Ait {
  static {
    this.ID = "chatEditing.viewChanges";
  }
  static {
    this.LABEL = _(5272, null);
  }
  constructor() {
    super({
      id: DWa.ID,
      title: DWa.LABEL,
      tooltip: DWa.LABEL,
      f1: false,
      icon: Be.diffMultiple,
      precondition: iMe,
      menu: [{
        id: st.ChatEditingWidgetToolbar,
        group: "navigation",
        order: 4,
        when: Ee.and(fyi.negate(), Ee.and(tAa, iMe))
      }]
    });
  }
  async runEditingSessionAction(e, t, i, ...r) {
    await t.show();
  }
};
Dt(Xpu);
Dt(class extends Ait {
  constructor() {
    super({
      id: "workbench.action.chat.addSelectedFilesToWorkingSet",
      title: dt(5288, "Add Selected Files to Working Set"),
      icon: Be.attach,
      precondition: qa.location.isEqualTo(zh.EditingSession),
      f1: true
    });
  }
  async runEditingSessionAction(e, t, i, ...r) {
    const s = e.get(Nh);
    const o = e.get(da);
    const a = [];
    for (const l of o.getGroups(1)) {
      for (const u of l.selectedEditors) {
        if (u.resource) {
          a.push(u.resource);
        }
      }
    }
    if (a.length === 0) {
      const l = s.lastFocusedList?.getSelection();
      if (l?.length) {
        for (const u of l) {
          if (u && typeof u == "object" && "resource" in u && je.isUri(u.resource)) {
            a.push(u.resource);
          }
        }
      }
    }
    for (const l of a) {
      await i.attachmentModel.addFile(l);
    }
  }
});
Dt(class extends rn {
  constructor() {
    super({
      id: "workbench.action.chat.undoEdits",
      title: dt(5289, "Undo Requests"),
      f1: false,
      category: cO,
      icon: Be.x,
      keybinding: {
        primary: 20,
        mac: {
          primary: 2049
        },
        when: Ee.and(qa.inChatSession, Ci.textInputFocus.negate()),
        weight: 200
      },
      menu: [{
        id: st.ChatMessageTitle,
        group: "navigation",
        order: 2,
        when: qa.isRequest
      }]
    });
  }
  async run(e, ...t) {
    let i = t[0];
    if (!rA(i) && !Gq(i)) {
      i = e.get(M1).lastFocusedWidget?.getFocus();
    }
    if (!i) {
      return;
    }
    const r = e.get(Fn);
    const s = e.get(Ml);
    const a = e.get(ES).getSession(i.sessionId);
    if (!a) {
      return;
    }
    const l = a.editingSession;
    if (!l) {
      return;
    }
    const u = Gq(i) ? i.id : rA(i) ? i.requestId : undefined;
    if (u) {
      const d = a.getRequests();
      const m = d.findIndex(B => B.id === u);
      const p = d.length - m;
      const g = d.slice(m);
      const f = new Set(g.map(B => B.id));
      const A = l.entries.get().filter(B => f.has(B.lastModifyingRequestId)) ?? [];
      const w = A.length > 0 && r.getValue("chat.editing.confirmEditRequestRemoval") === true;
      let C;
      if (p === 1) {
        if (A.length === 1) {
          C = _(5273, null, ca(A[0].modifiedURI));
        } else {
          C = _(5274, null, A.length);
        }
      } else if (A.length === 1) {
        C = _(5275, null, ca(A[0].modifiedURI));
      } else {
        C = _(5276, null, A.length);
      }
      const x = w ? await s.confirm({
        title: p === 1 ? _(5277, null) : _(5278, null, p),
        message: C,
        primaryButton: _(5279, null),
        checkbox: {
          label: _(5280, null),
          checked: false
        },
        type: "info"
      }) : {
        confirmed: true
      };
      if (!x.confirmed) {
        return;
      }
      if (x.checkboxChecked) {
        await r.updateValue("chat.editing.confirmEditRequestRemoval", false);
      }
      const I = d[m].id;
      await l.restoreSnapshot(I, undefined);
    }
  }
});
Dt(class MQb extends rn {
  static {
    this.id = "chat.openFileUpdatedBySnapshot";
  }
  constructor() {
    super({
      id: MQb.id,
      title: _(5281, null),
      menu: [{
        id: st.ChatEditingCodeBlockContext,
        group: "navigation",
        order: 0
      }]
    });
  }
  async run(e, ...t) {
    const i = t[0];
    if (!i?.sessionId) {
      return;
    }
    await e.get(yi).openEditor({
      resource: i.uri
    });
  }
});
Dt(class FQb extends rn {
  static {
    this.id = "chat.openFileSnapshot";
  }
  constructor() {
    super({
      id: FQb.id,
      title: _(5282, null),
      menu: [{
        id: st.ChatEditingCodeBlockContext,
        group: "navigation",
        order: 1
      }]
    });
  }
  async run(e, ...t) {
    const i = t[0];
    if (!i?.sessionId) {
      return;
    }
    const r = e.get(ES);
    const s = e.get(kV);
    const o = e.get(yi);
    const a = r.getSession(i.sessionId);
    if (!a) {
      return;
    }
    const l = s.getEditingSession(a.sessionId)?.getSnapshotUri(i.requestId, i.uri, i.stopId);
    if (l) {
      const u = await o.openEditor({
        resource: l,
        label: _(5283, null, ca(i.uri)),
        options: {
          transient: true,
          activation: X4.ACTIVATE
        }
      });
      if (Ig(u)) {
        u.updateOptions({
          readOnly: true
        });
      }
    }
  }
});
Dt(class extends Ait {
  constructor() {
    super({
      id: "workbench.action.edits.addFilesFromReferences",
      title: dt(5290, "Add Files From References"),
      f1: false,
      category: cO,
      menu: {
        id: st.ChatInputSymbolAttachmentContext,
        group: "navigation",
        order: 1,
        when: Ee.and(qa.chatMode.isEqualTo(iA.Ask), Ci.hasReferenceProvider)
      }
    });
  }
  async runEditingSessionAction(e, t, i, ...r) {
    if (r.length === 0 || !Agh(r[0])) {
      return;
    }
    const s = e.get(El);
    const o = e.get($u);
    const a = r[0];
    const u = (await s.createModelReference(a.uri)).object.textEditorModel;
    if (!u) {
      return;
    }
    const d = new ar(a.range.startLineNumber, a.range.startColumn);
    const [m, p, g] = await Promise.all([this.getReferences(d, u, o), this.getDefinitions(d, u, o), this.getImplementations(d, u, o)]);
    const f = [];
    for (const A of [...p, ...g, ...m]) {
      f.push(i.attachmentModel.asVariableEntry(A.uri));
    }
    i.attachmentModel.addContext(...f);
  }
  async getReferences(e, t, i) {
    const r = i.referenceProvider.all(t);
    return (await Promise.all(r.map(async o => (await o.provideReferences(t, e, {
      includeDeclaration: true
    }, Cs.None)) ?? []))).flat();
  }
  async getDefinitions(e, t, i) {
    const r = i.definitionProvider.all(t);
    return (await Promise.all(r.map(async o => (await o.provideDefinition(t, e, Cs.None)) ?? []))).flat();
  }
  async getImplementations(e, t, i) {
    const r = i.implementationProvider.all(t);
    return (await Promise.all(r.map(async o => (await o.provideImplementation(t, e, Cs.None)) ?? []))).flat();
  }
});

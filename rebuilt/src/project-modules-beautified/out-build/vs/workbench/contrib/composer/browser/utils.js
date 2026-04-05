"use strict";

// Module: out-build/vs/workbench/contrib/composer/browser/utils.js
// Offset: 26628491 (bundle byte offset)
// Size: 20337 bytes
Ti();
ri();
_r();
Yn();
wI();
So();
Fc();
f$e();
cv();
Vg();
MWl();
gE();
of();
UF();
mtu = "composer-keep-all-no-inline-diffs-toast-shown";
nce = n => Fs ? `\u2318${n}` : `^${n}`;
ice = async (n, e, t) => {
  if (Kun(e, {
    filePathOrUri: n,
    selection: t?.selection
  })) {
    return;
  }
  let i;
  if (typeof n == "string") {
    i = e.workspaceContextService.resolveRelativePath(n);
  } else {
    i = n;
  }
  if (t?.selection) {
    i = b2(i, {
      startLineNumber: t.selection.startLineNumber,
      startColumn: t.selection.startColumn ?? 1,
      endLineNumber: t.selection.endLineNumber ?? t.selection.startLineNumber,
      endColumn: t.selection.endColumn ?? t.selection.startColumn ?? 1
    });
  }
  const r = i.with({
    fragment: "",
    query: ""
  });
  if (!(await e.fileService.exists(r))) {
    return;
  }
  if (t?.preferNeighboringGroup) {
    zNg(i, e, t.openToSide);
    return;
  }
  const o = t?.openToSide ?? false;
  const a = t?.preserveFocus ?? true;
  if (!o) {
    const l = e.editorService.activeEditorPane?.group ?? e.editorGroupService.activeGroup;
    const u = e.editorGroupService.mainPart.getGroups(1);
    const d = l ? [l, ...u.filter(p => p.id !== l.id)] : u;
    const m = mCt(d);
    if (m && l && m.id !== l.id) {
      m.focus();
      await e.openerService.open(i, {
        openToSide: false,
        editorOptions: {
          revealIfVisible: true,
          revealIfOpened: true,
          source: rR.USER,
          preserveFocus: a
        },
        fromUserGesture: true
      });
      if (a) {
        l.focus();
      }
      return;
    }
  }
  e.openerService.open(i, {
    openToSide: o,
    editorOptions: {
      revealIfVisible: true,
      revealIfOpened: true,
      source: rR.USER,
      preserveFocus: a
    },
    fromUserGesture: true
  });
};
zNg = async (n, e, t = true, i) => {
  if (Kun(e, {
    filePathOrUri: n,
    selection: i
  })) {
    return;
  }
  let r;
  if (typeof n == "string") {
    const a = n.trim();
    if (!a) {
      return;
    }
    r = e.workspaceContextService.resolveRelativePath(a);
  } else {
    r = n;
  }
  if (i) {
    r = b2(r, {
      startLineNumber: i.startLineNumber,
      startColumn: i.startColumn ?? 1,
      endLineNumber: i.endLineNumber ?? i.startLineNumber,
      endColumn: i.endColumn ?? i.startColumn ?? 1
    });
  }
  const s = r.with({
    fragment: "",
    query: ""
  });
  if (await e.fileService.exists(s)) {
    if (t) {
      const a = GNg(e.editorGroupService);
      if (a) {
        const l = e.editorGroupService.activeGroup;
        a.focus();
        await e.openerService.open(r, {
          openToSide: false,
          editorOptions: {
            revealIfVisible: false,
            revealIfOpened: false,
            source: rR.USER,
            preserveFocus: true
          },
          fromUserGesture: true
        });
        l.focus();
        return;
      }
      e.openerService.open(r, {
        openToSide: true,
        editorOptions: {
          revealIfVisible: true,
          revealIfOpened: true,
          source: rR.USER,
          preserveFocus: true
        },
        fromUserGesture: true
      });
    } else {
      e.openerService.open(r, {
        openToSide: false,
        editorOptions: {
          revealIfVisible: true,
          revealIfOpened: true,
          source: rR.USER,
          preserveFocus: true
        },
        fromUserGesture: true
      });
    }
  }
};
bhn = (n, e, t) => {
  if (t?.preferNeighboringGroup) {
    VNg(n, e, t);
    return;
  }
  const i = n.uri.path ?? "";
  const r = {
    startLineNumber: n.range.selectionStartLineNumber,
    startColumn: 1,
    endLineNumber: n.range.positionLineNumber,
    endColumn: 1
  };
  if (Kun(e, {
    filePathOrUri: i,
    selection: r
  })) {
    return;
  }
  const s = e.workspaceContextService.resolveRelativePath(i);
  if (!s) {
    return;
  }
  const o = b2(s, r);
  const a = e.editorService.activeEditorPane?.group ?? e.editorGroupService.activeGroup;
  const l = e.editorGroupService.mainPart.getGroups(1);
  const u = a ? [a, ...l.filter(p => p.id !== a.id)] : l;
  const d = mCt(u);
  const m = t?.preserveFocus;
  if (!t?.openToSide && d && a && d.id !== a.id) {
    d.focus();
    e.openerService.open(o, {
      openToSide: false,
      editorOptions: {
        revealIfVisible: true,
        revealIfOpened: true,
        source: rR.USER,
        preserveFocus: m
      },
      fromUserGesture: true,
      ...t
    }).finally(() => {
      if (m) {
        a.focus();
      }
    });
    return;
  }
  e.openerService.open(o, {
    openToSide: false,
    editorOptions: {
      revealIfVisible: true,
      revealIfOpened: true,
      source: rR.USER,
      preserveFocus: m
    },
    fromUserGesture: true,
    ...t
  });
};
VNg = async (n, e, t) => {
  const i = n.uri.path ?? "";
  const r = {
    startLineNumber: n.range.selectionStartLineNumber,
    startColumn: 1,
    endLineNumber: n.range.positionLineNumber,
    endColumn: 1
  };
  if (Kun(e, {
    filePathOrUri: i,
    selection: r
  })) {
    return;
  }
  const s = e.workspaceContextService.resolveRelativePath(i);
  if (!s) {
    return;
  }
  const o = b2(s, r);
  if ((t?.preferNeighboringGroup ?? true) && !t?.openToSide) {
    const l = GNg(e.editorGroupService);
    if (l) {
      const u = e.editorGroupService.activeGroup;
      l.focus();
      await e.openerService.open(o, {
        ...t,
        openToSide: false,
        editorOptions: {
          revealIfVisible: false,
          revealIfOpened: false,
          source: rR.USER,
          preserveFocus: t?.editorOptions?.preserveFocus,
          ...t?.editorOptions
        },
        fromUserGesture: true
      });
      if (t?.editorOptions?.preserveFocus) {
        u.focus();
      }
      return;
    }
  }
  e.openerService.open(o, {
    ...t,
    editorOptions: {
      revealIfVisible: true,
      revealIfOpened: true,
      source: rR.USER,
      ...t?.editorOptions
    },
    openToSide: t?.openToSide,
    fromUserGesture: true
  });
};

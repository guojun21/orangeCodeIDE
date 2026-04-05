"use strict";

// Module: out-build/vs/workbench/services/selectedContext/browser/utils.js
// Offset: 25051322 (bundle byte offset)
// Size: 2912 bytes
cv();
qp();
W9();
zr();
Hl();
Yr();
Yn();
lv();
ts();
db();
wI();
Fc();
MWl();
tV();
ss();
Q9();
Kun = (n, {
  filePathOrUri: e,
  selection: t
}) => {
  if (!n.workbenchEnvironmentService.isGlass) {
    return false;
  }
  let i = e;
  let r = t;
  if (je.isUri(e)) {
    const a = J3n(e);
    i = a.uri;
    r ??= a.selection;
  }
  const s = r ? {
    startLineNumber: r.startLineNumber,
    startColumn: r.startColumn ?? 1,
    endLineNumber: r.endLineNumber ?? r.startLineNumber,
    endColumn: r.endColumn ?? r.startColumn ?? 1
  } : undefined;
  let o;
  if (typeof i == "string") {
    o = {
      path: i,
      selection: s
    };
  } else {
    o = {
      uri: i,
      selection: s
    };
  }
  if (o) {
    n.commandService.executeCommand("glass.openFileInStableTab", o).catch(a => {
      console.error("Failed to open file in Glass stable tab:", a);
      n.notificationService.error("Failed to open file");
    });
  }
  return true;
};
gCt = (n, {
  filePathOrUri: e,
  selection: t,
  openToSide: i,
  fromGroup: r,
  preserveFocus: s,
  originalUri: o
}) => {
  try {
    if (Kun(n, {
      filePathOrUri: e,
      selection: t
    })) {
      return;
    }
    let a;
    if (typeof e == "string") {
      a = n.workspaceContextService.resolveRelativePath(e);
    } else {
      a = e;
    }
    if (t) {
      a = b2(a, {
        startLineNumber: t.startLineNumber,
        startColumn: t.startColumn ?? 1,
        endLineNumber: t.endLineNumber ?? t.startLineNumber,
        endColumn: t.endColumn ?? t.startColumn ?? 1
      });
    }
    if (a.path === "/") {
      return;
    }
    Nbg({
      uri: a,
      originalUri: o,
      services: {
        fileService: n.fileService,
        editorService: n.editorService,
        editorGroupsService: n.editorGroupService,
        prettyDialogService: n.prettyDialogService,
        notificationService: n.notificationService,
        workspaceContextService: n.workspaceContextService
      },
      openToSide: i,
      fromGroup: r,
      preserveFocus: s
    });
  } catch (a) {
    console.error("Failed to open file:", e, a);
    n.notificationService.error(`Failed to open file: ${e}`);
  }
};
Nbg = async ({
  uri: n,
  originalUri: e,
  services: t,
  openToSide: i,
  fromGroup: r,
  preserveFocus: s
}) => {
  if (!(await t.fileService.exists(n))) {
    return;
  }
  let a = B1;
  if (i) {
    const d = r ?? t.editorService.activeEditorPane?.group;
    if (d) {
      const m = t.editorGroupsService.findGroup({
        direction: 3
      }, d);
      const p = t.editorGroupsService.findGroup({
        direction: 2
      }, d);
      const g = t.editorGroupsService.findGroup({
        direction: 1
      }, d);
      const f = [m, p, g];
      const A = hCt(f);
      const w = mCt(f);
      if (A) {
        a = A;
      } else {
        const C = hCt(t.editorGroupsService.mainPart.getGroups(1), d.id);
        if (C) {
          a = C;
        } else if (w) {
          a = w;
        } else {
          a = Aw;
        }
      }
    } else {
      a = Aw;
    }
  } else {
    const d = r ?? t.editorService.activeEditorPane?.group;
    const m = t.editorGroupsService.mainPart.getGroups(1);
    const p = d ? [d, ...m.filter(f => f.id !== d.id)] : m;
    const g = mCt(p);
    if (g) {
      a = g;
    }
  }
  let {
    selection: l,
    uri: u
  } = J3n(n);
  if (u.scheme === _n.file) {
    u = g2o(u);
  }
  t.editorService.openEditor({
    ...(e !== undefined ? {
      original: {
        resource: e
      },
      modified: {
        resource: u
      }
    } : {
      resource: u
    }),
    options: {
      selection: l,
      revealIfVisible: true,
      revealIfOpened: true,
      source: rR.USER,
      preserveFocus: s ?? true
    }
  }, a);
};
Mbg = (n, e) => {
  if (e === "/" || e === "\\") {
    const t = n.workspaceContextService.getWorkspace().folders;
    if (t.length === 1) {
      return fd(t[0].uri.path);
    }
  }
  return "";
};
zWl = n => ({
  ...n,
  fileSelections: n.fileSelections?.map(e => ({
    ...e,
    uri: je.revive(e.uri)
  })),
  selectedImages: n.selectedImages?.map(e => ({
    ...e,
    loadedAt: Date.now()
  }))
});
rla = {
  authority: "",
  fragment: "",
  path: "",
  query: "",
  scheme: "terminal"
};
Fbg = 10000;

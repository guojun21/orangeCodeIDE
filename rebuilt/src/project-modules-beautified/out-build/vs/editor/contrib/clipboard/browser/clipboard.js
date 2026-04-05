"use strict";

// Module: out-build/vs/editor/contrib/clipboard/browser/clipboard.js
// Offset: 2469525 (bundle byte offset)
// Size: 4039 bytes
Ay();
ri();
_r();
Ht();
dr();
Kf();
si();
VOn();
nwh();
Cu();
Oh();
Qh();
IRe();
SKe = "9_cutcopypaste";
ekh = kw || document.queryCommandSupported("cut");
$Bc = kw || document.queryCommandSupported("copy");
tkh = typeof navigator.clipboard === "undefined" || u3 ? document.queryCommandSupported("paste") : true;
B9e = ekh ? UBc(new N5e({
  id: "editor.action.clipboardCutAction",
  precondition: undefined,
  kbOpts: kw ? {
    primary: 2102,
    win: {
      primary: 2102,
      secondary: [1044]
    },
    weight: 100
  } : undefined,
  menuOpts: [{
    menuId: st.MenubarEditMenu,
    group: "2_ccp",
    title: _(950, null),
    order: 1
  }, {
    menuId: st.EditorContext,
    group: SKe,
    title: _(951, null),
    when: Ci.writable,
    order: 1
  }, {
    menuId: st.CommandPalette,
    group: "",
    title: _(952, null),
    order: 1
  }, {
    menuId: st.SimpleEditorContext,
    group: SKe,
    title: _(953, null),
    when: Ci.writable,
    order: 1
  }]
})) : undefined;
R9e = $Bc ? UBc(new N5e({
  id: "editor.action.clipboardCopyAction",
  precondition: undefined,
  kbOpts: kw ? {
    primary: 2081,
    win: {
      primary: 2081,
      secondary: [2067]
    },
    weight: 100
  } : undefined,
  menuOpts: [{
    menuId: st.MenubarEditMenu,
    group: "2_ccp",
    title: _(954, null),
    order: 2
  }, {
    menuId: st.EditorContext,
    group: SKe,
    title: _(955, null),
    order: 2
  }, {
    menuId: st.CommandPalette,
    group: "",
    title: _(956, null),
    order: 1
  }, {
    menuId: st.SimpleEditorContext,
    group: SKe,
    title: _(957, null),
    order: 2
  }]
})) : undefined;
or.appendMenuItem(st.MenubarEditMenu, {
  submenu: st.MenubarCopy,
  title: dt(962, "Copy As"),
  group: "2_ccp",
  order: 3
});
or.appendMenuItem(st.EditorContext, {
  submenu: st.EditorContextCopy,
  title: dt(963, "Copy As"),
  group: SKe,
  order: 3
});
or.appendMenuItem(st.EditorContext, {
  submenu: st.EditorContextShare,
  title: dt(964, "Share"),
  group: "11_share",
  order: -1,
  when: Ee.and(Ee.notEquals("resourceScheme", "output"), Ci.editorTextFocus)
});
or.appendMenuItem(st.ExplorerContext, {
  submenu: st.ExplorerContextShare,
  title: dt(965, "Share"),
  group: "11_share",
  order: -1
});
eke = tkh ? UBc(new N5e({
  id: "editor.action.clipboardPasteAction",
  precondition: undefined,
  kbOpts: kw ? {
    primary: 2100,
    win: {
      primary: 2100,
      secondary: [1043]
    },
    linux: {
      primary: 2100,
      secondary: [1043]
    },
    weight: 100
  } : undefined,
  menuOpts: [{
    menuId: st.MenubarEditMenu,
    group: "2_ccp",
    title: _(958, null),
    order: 4
  }, {
    menuId: st.EditorContext,
    group: SKe,
    title: _(959, null),
    when: Ci.writable,
    order: 4
  }, {
    menuId: st.CommandPalette,
    group: "",
    title: _(960, null),
    order: 1
  }, {
    menuId: st.SimpleEditorContext,
    group: SKe,
    title: _(961, null),
    when: Ci.writable,
    order: 4
  }]
})) : undefined;
nkh = class extends vu {
  constructor() {
    super({
      id: "editor.action.clipboardCopyWithSyntaxHighlightingAction",
      label: dt(966, "Copy with Syntax Highlighting"),
      precondition: undefined,
      kbOpts: {
        kbExpr: Ci.textInputFocus,
        primary: 0,
        weight: 100
      }
    });
  }
  run(n, e) {
    if (!!e.hasModel() && (!!e.getOption(38) || !e.getSelection().isEmpty())) {
      l3o.forceCopyWithSyntaxHighlighting = true;
      e.focus();
      e.getContainerDomNode().ownerDocument.execCommand("copy");
      l3o.forceCopyWithSyntaxHighlighting = false;
    }
  }
};
XSh(B9e, "cut");
XSh(R9e, "copy");
if (eke) {
  eke.addImplementation(10000, "code-editor", (n, e) => {
    const t = n.get(fl);
    const i = n.get(jm);
    const r = t.getFocusedCodeEditor();
    if (r && r.hasModel() && r.hasTextFocus()) {
      let s;
      if (r.getOption(157)) {
        const a = yIc.get(r.getId());
        if (a) {
          s = a.executePaste();
        } else {
          s = false;
        }
      } else {
        s = r.getContainerDomNode().ownerDocument.execCommand("paste");
      }
      if (s) {
        return ZH.get(r)?.finishedPaste() ?? Promise.resolve();
      } else if (Eu) {
        return (async () => {
          const a = await i.readText();
          if (a !== "") {
            const l = n3t.INSTANCE.get(a);
            let u = false;
            let d = null;
            let m = null;
            if (l) {
              u = r.getOption(38) && !!l.isFromEmptySelection;
              d = typeof l.multicursorText !== "undefined" ? l.multicursorText : null;
              m = l.mode;
            }
            r.trigger("keyboard", "paste", {
              text: a,
              pasteOnNewLine: u,
              multicursorText: d,
              mode: m
            });
          }
        })();
      } else {
        return true;
      }
    }
    return false;
  });
  eke.addImplementation(0, "generic-dom", (n, e) => {
    Jy().execCommand("paste");
    return true;
  });
}
if ($Bc) {
  ac(nkh);
}

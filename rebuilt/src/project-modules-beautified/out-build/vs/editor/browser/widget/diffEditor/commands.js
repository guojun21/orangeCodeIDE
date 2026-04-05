"use strict";

// Module: out-build/vs/editor/browser/widget/diffEditor/commands.js
// Offset: 2364102 (bundle byte offset)
// Size: 3377 bytes
ri();
qi();
Cu();
Oh();
TW();
Qh();
Ht();
dr();
Ei();
si();
B3t();
rSh = class extends rn {
  constructor() {
    super({
      id: "diffEditor.toggleCollapseUnchangedRegions",
      title: dt(205, "Toggle Collapse Unchanged Regions"),
      icon: Be.map,
      toggled: Ee.has("config.diffEditor.hideUnchangedRegions.enabled"),
      precondition: Ee.has("isInDiffEditor"),
      menu: {
        when: Ee.has("isInDiffEditor"),
        id: st.EditorTitle,
        order: 22,
        group: "navigation"
      }
    });
  }
  run(n, ...e) {
    const t = n.get(Fn);
    const i = !t.getValue("diffEditor.hideUnchangedRegions.enabled");
    t.updateValue("diffEditor.hideUnchangedRegions.enabled", i);
  }
};
lBc = class extends rn {
  constructor() {
    super({
      id: "diffEditor.toggleShowMovedCodeBlocks",
      title: dt(206, "Toggle Show Moved Code Blocks"),
      precondition: Ee.has("isInDiffEditor")
    });
  }
  run(n, ...e) {
    const t = n.get(Fn);
    const i = !t.getValue("diffEditor.experimental.showMoves");
    t.updateValue("diffEditor.experimental.showMoves", i);
  }
};
uBc = class extends rn {
  constructor() {
    super({
      id: "diffEditor.toggleUseInlineViewWhenSpaceIsLimited",
      title: dt(207, "Toggle Use Inline View When Space Is Limited"),
      precondition: Ee.has("isInDiffEditor")
    });
  }
  run(n, ...e) {
    const t = n.get(Fn);
    const i = !t.getValue("diffEditor.useInlineViewWhenSpaceIsLimited");
    t.updateValue("diffEditor.useInlineViewWhenSpaceIsLimited", i);
  }
};
J3t = dt(208, "Diff Editor");
sSh = class extends xx {
  constructor() {
    super({
      id: "diffEditor.switchSide",
      title: dt(209, "Switch Side"),
      icon: Be.arrowSwap,
      precondition: Ee.has("isInDiffEditor"),
      f1: true,
      category: J3t
    });
  }
  runEditorCommand(n, e, t) {
    const i = H3t(n);
    if (i instanceof JB) {
      if (t && t.dryRun) {
        return {
          destinationSelection: i.mapToOtherSide().destinationSelection
        };
      }
      i.switchSide();
    }
  }
};
oSh = class extends xx {
  constructor() {
    super({
      id: "diffEditor.exitCompareMove",
      title: dt(210, "Exit Compare Move"),
      icon: Be.close,
      precondition: Ci.comparingMovedCode,
      f1: false,
      category: J3t,
      keybinding: {
        weight: 10000,
        primary: 9
      }
    });
  }
  runEditorCommand(n, e, ...t) {
    const i = H3t(n);
    if (i instanceof JB) {
      i.exitCompareMove();
    }
  }
};
aSh = class extends xx {
  constructor() {
    super({
      id: "diffEditor.collapseAllUnchangedRegions",
      title: dt(211, "Collapse All Unchanged Regions"),
      icon: Be.fold,
      precondition: Ee.has("isInDiffEditor"),
      f1: true,
      category: J3t
    });
  }
  runEditorCommand(n, e, ...t) {
    const i = H3t(n);
    if (i instanceof JB) {
      i.collapseAllUnchangedRegions();
    }
  }
};
cSh = class extends xx {
  constructor() {
    super({
      id: "diffEditor.showAllUnchangedRegions",
      title: dt(212, "Show All Unchanged Regions"),
      icon: Be.unfold,
      precondition: Ee.has("isInDiffEditor"),
      f1: true,
      category: J3t
    });
  }
  runEditorCommand(n, e, ...t) {
    const i = H3t(n);
    if (i instanceof JB) {
      i.showAllUnchangedRegions();
    }
  }
};
J5o = class extends rn {
  constructor() {
    super({
      id: "diffEditor.revert",
      title: dt(213, "Revert"),
      f1: false,
      category: J3t
    });
  }
  run(n, e) {
    const t = ghA(n, e.originalUri, e.modifiedUri);
    if (t instanceof JB) {
      t.revertRangeMappings(e.mapping.innerChanges ?? []);
    }
  }
};
dBc = dt(214, "Accessible Diff Viewer");
G3t = class FGb extends rn {
  static {
    this.id = "editor.action.accessibleDiffViewer.next";
  }
  constructor() {
    super({
      id: FGb.id,
      title: dt(215, "Go to Next Difference"),
      category: dBc,
      precondition: Ee.has("isInDiffEditor"),
      keybinding: {
        primary: 65,
        weight: 100
      },
      f1: true
    });
  }
  run(e) {
    H3t(e)?.accessibleDiffViewerNext();
  }
};
G5o = class OGb extends rn {
  static {
    this.id = "editor.action.accessibleDiffViewer.prev";
  }
  constructor() {
    super({
      id: OGb.id,
      title: dt(216, "Go to Previous Difference"),
      category: dBc,
      precondition: Ee.has("isInDiffEditor"),
      keybinding: {
        primary: 1089,
        weight: 100
      },
      f1: true
    });
  }
  run(e) {
    H3t(e)?.accessibleDiffViewerPrev();
  }
};

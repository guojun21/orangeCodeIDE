"use strict";

// Module: out-build/vs/workbench/contrib/notebook/browser/controller/cellOutputActions.js
// Offset: 33269897 (bundle byte offset)
// Size: 2174 bytes
Ht();
dr();
Kf();
Fc();
AN();
i1();
bJ();
jr();
fki();
ss();
Sb();
ph();
si();
lce();
r_u = "notebook.cellOutput.copy";
Dt(class extends rn {
  constructor() {
    super({
      id: "notebook.cellOuput.showEmptyOutputs",
      title: _(9099, null),
      menu: {
        id: st.NotebookOutputToolbar,
        when: Ee.and(zEe, ypu)
      },
      f1: false,
      category: o7
    });
  }
  run(e, t) {
    const i = t.cell;
    if (i && i.cellKind === zd.Code) {
      for (let r = 1; r < i.outputsViewModels.length; r++) {
        if (!i.outputsViewModels[r].visible.get()) {
          i.outputsViewModels[r].setVisible(true, true);
          i.updateOutputHeight(r, 1, "command");
        }
      }
    }
  }
});
Dt(class extends rn {
  constructor() {
    super({
      id: r_u,
      title: _(9100, null),
      menu: {
        id: st.NotebookOutputToolbar,
        when: zEe
      },
      category: o7,
      icon: Vca
    });
  }
  getNoteboookEditor(e, t) {
    if (t && "notebookEditor" in t) {
      return t.notebookEditor;
    } else {
      return sA(e.activeEditorPane);
    }
  }
  async run(e, t) {
    const i = this.getNoteboookEditor(e.get(yi), t);
    if (!i) {
      return;
    }
    let r;
    if (t && "outputId" in t && typeof t.outputId == "string") {
      r = i_u(t.outputId, i);
    } else if (t && "outputViewModel" in t) {
      r = t.outputViewModel;
    }
    if (!r) {
      const o = i.getActiveCell();
      if (!o) {
        return;
      }
      if (o.focusedOutputId !== undefined) {
        r = o.outputsViewModels.find(a => a.model.outputId === o.focusedOutputId);
      } else {
        r = o.outputsViewModels.find(a => a.pickedMimeType?.isTrusted);
      }
    }
    if (!r) {
      return;
    }
    const s = r.pickedMimeType?.mimeType;
    if (s?.startsWith("image/")) {
      const o = {
        skipReveal: true,
        outputId: r.model.outputId,
        altOutputId: r.model.alternativeOutputId
      };
      await i.focusNotebookCell(r.cellViewModel, "output", o);
      i.copyOutputImage(r);
    } else {
      const o = e.get(jm);
      const a = e.get(Rr);
      bdy(s, r, o, a);
    }
  }
});
N8f = "notebook.cellOutput.openInTextEditor";
Dt(class extends rn {
  constructor() {
    super({
      id: N8f,
      title: _(9101, null),
      f1: false,
      category: o7,
      icon: Vca
    });
  }
  getNoteboookEditor(e, t) {
    if (t && "notebookEditor" in t) {
      return t.notebookEditor;
    } else {
      return sA(e.activeEditorPane);
    }
  }
  async run(e, t) {
    const i = this.getNoteboookEditor(e.get(yi), t);
    const r = e.get(Lq);
    if (!i) {
      return;
    }
    let s;
    if (t && "outputId" in t && typeof t.outputId == "string") {
      s = i_u(t.outputId, i);
    } else if (t && "outputViewModel" in t) {
      s = t.outputViewModel;
    }
    const o = e.get(Ja);
    if (s?.model.outputId && i.textModel?.uri) {
      const a = await r.resolve(i.textModel.uri);
      await o.open(Dg.generateCellOutputUriWithId(i.textModel.uri, s.model.outputId));
      a.dispose();
    }
  }
});

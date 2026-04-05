"use strict";

// Module: out-build/vs/workbench/contrib/notebook/browser/controller/coreActions.js
// Offset: 33239280 (bundle byte offset)
// Size: 2945 bytes
Yn();
Ht();
dr();
si();
Sb();
i1();
W1e();
ss();
Nu();
LU();
Pa();
Yr();
uwe = "_notebook.selectKernel";
o7 = dt(9141, "Notebook");
h2e = "inline/cell";
E8f = "inline/output";
UU = 100;
x8f = 201;
(function (n) {
  n[n.RunSection = 0] = "RunSection";
  n[n.EditCell = 1] = "EditCell";
  n[n.ExecuteAboveCells = 2] = "ExecuteAboveCells";
  n[n.ExecuteCellAndBelow = 3] = "ExecuteCellAndBelow";
  n[n.SaveCell = 4] = "SaveCell";
  n[n.SplitCell = 5] = "SplitCell";
  n[n.ClearCellOutput = 6] = "ClearCellOutput";
})(T8f ||= {});
(function (n) {
  n.Copy = "1_copy";
  n.Insert = "2_insert";
  n.Edit = "3_edit";
  n.Share = "4_share";
})(I8f ||= {});
MT = class extends rn {
  constructor(n) {
    if (n.f1 !== false) {
      n.f1 = false;
      const e = {
        id: st.CommandPalette,
        when: Ee.or(SE, bpu, dxf)
      };
      if (n.menu) {
        if (!Array.isArray(n.menu)) {
          n.menu = [n.menu];
        }
      } else {
        n.menu = [];
      }
      n.menu = [...n.menu, e];
    }
    n.category = o7;
    super(n);
  }
  async run(n, e, ...t) {
    Ywu(n, this.desc.id, e);
    if (!!this.isNotebookActionContext(e) || !(e = this.getEditorContextFromArgsOrActive(n, e, ...t), !e)) {
      return this.runWithContext(n, e);
    }
  }
  isNotebookActionContext(n) {
    return !!n && !!n.notebookEditor;
  }
  getEditorContextFromArgsOrActive(n, e, ...t) {
    return aki(n.get(yi));
  }
};
$U = class extends rn {
  constructor(n) {
    if (n.f1 !== false) {
      n.f1 = false;
      const e = {
        id: st.CommandPalette,
        when: SE
      };
      if (n.menu) {
        if (!Array.isArray(n.menu)) {
          n.menu = [n.menu];
        }
      } else {
        n.menu = [];
      }
      n.menu = [...n.menu, e];
    }
    n.category = o7;
    super(n);
  }
  parseArgs(n, ...e) {}
  async run(n, ...e) {
    const t = e[0];
    Ywu(n, this.desc.id, t);
    if (k8f(t)) {
      return this.runWithContext(n, t);
    }
    const r = this.parseArgs(n, ...e);
    if (r) {
      return this.runWithContext(n, r);
    }
    const s = lki(n);
    if (s) {
      const o = s.getSelections().length === 0 ? [s.getFocus()] : s.getSelections();
      return this.runWithContext(n, {
        ui: false,
        notebookEditor: s,
        selectedCells: Z_u(s, o)
      });
    }
  }
};
cx = class extends MT {
  isCellActionContext(n) {
    return !!n && !!n.notebookEditor && !!n.cell;
  }
  getCellContextFromArgs(n, e, ...t) {}
  async run(n, e, ...t) {
    Ywu(n, this.desc.id, e);
    if (this.isCellActionContext(e)) {
      return this.runWithContext(n, e);
    }
    const i = this.getCellContextFromArgs(n, e, ...t);
    if (i) {
      return this.runWithContext(n, i);
    }
    const r = this.getEditorContextFromArgsOrActive(n);
    if (this.isCellActionContext(r)) {
      return this.runWithContext(n, r);
    }
  }
};
Zwu = Ee.or(Ee.greater(w_i.key, 0), Ee.greater(tCa.key, 0));
ETa = [{
  isOptional: true,
  name: "options",
  description: "The cell range options",
  schema: {
    type: "object",
    required: ["ranges"],
    properties: {
      ranges: {
        type: "array",
        items: [{
          type: "object",
          required: ["start", "end"],
          properties: {
            start: {
              type: "number"
            },
            end: {
              type: "number"
            }
          }
        }]
      },
      document: {
        type: "object",
        description: "The document uri"
      },
      autoReveal: {
        type: "boolean",
        description: "Whether the cell should be revealed into view automatically"
      }
    }
  }
}];
or.appendMenuItem(st.NotebookCellTitle, {
  submenu: st.NotebookCellInsert,
  title: _(9138, null),
  group: "2_insert",
  when: n1.isEqualTo(true)
});
or.appendMenuItem(st.EditorContext, {
  submenu: st.NotebookCellTitle,
  title: _(9139, null),
  group: "2_insert",
  when: dv
});
or.appendMenuItem(st.NotebookCellTitle, {
  title: _(9140, null),
  submenu: st.EditorContextShare,
  group: "4_share"
});

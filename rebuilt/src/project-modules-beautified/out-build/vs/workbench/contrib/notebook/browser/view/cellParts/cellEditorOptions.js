"use strict";

// Module: out-build/vs/workbench/contrib/notebook/browser/view/cellParts/cellEditorOptions.js
// Offset: 33242225 (bundle byte offset)
// Size: 3347 bytes
yn();
Ht();
dr();
Ei();
Mp();
si();
Ws();
Mm();
AN();
i1();
LQ();
ph();
xbn = class extends JV {
  set tabSize(n) {
    if (this._tabSize !== n) {
      this._tabSize = n;
      this._onDidChange.fire();
    }
  }
  get tabSize() {
    return this._tabSize;
  }
  set indentSize(n) {
    if (this._indentSize !== n) {
      this._indentSize = n;
      this._onDidChange.fire();
    }
  }
  get indentSize() {
    return this._indentSize;
  }
  set insertSpaces(n) {
    if (this._insertSpaces !== n) {
      this._insertSpaces = n;
      this._onDidChange.fire();
    }
  }
  get insertSpaces() {
    return this._insertSpaces;
  }
  constructor(n, e, t) {
    super();
    this.base = n;
    this.notebookOptions = e;
    this.configurationService = t;
    this._lineNumbers = "inherit";
    this._onDidChange = this._register(new Qe());
    this.onDidChange = this._onDidChange.event;
    this._register(n.onDidChange(() => {
      this._recomputeOptions();
    }));
    this._value = this._computeEditorOptions();
  }
  updateState(n, e) {
    if (e.cellLineNumberChanged) {
      this.setLineNumbers(n.lineNumbers);
    }
  }
  _recomputeOptions() {
    this._value = this._computeEditorOptions();
    this._onDidChange.fire();
  }
  _computeEditorOptions() {
    const n = this.base.value;
    const e = this.notebookOptions.getDisplayOptions().editorOptionsCustomizations;
    const t = e?.["editor.indentSize"];
    if (t !== undefined) {
      this.indentSize = t;
    }
    const i = e?.["editor.insertSpaces"];
    if (i !== undefined) {
      this.insertSpaces = i;
    }
    const r = e?.["editor.tabSize"];
    if (r !== undefined) {
      this.tabSize = r;
    }
    let s = n.lineNumbers;
    switch (this._lineNumbers) {
      case "inherit":
        if (this.configurationService.getValue("notebook.lineNumbers") === "on") {
          if (n.lineNumbers === "off") {
            s = "on";
          }
        } else {
          s = "off";
        }
        break;
      case "on":
        if (n.lineNumbers === "off") {
          s = "on";
        }
        break;
      case "off":
        s = "off";
        break;
    }
    const o = {};
    if (n.lineNumbers !== s) {
      o.lineNumbers = s;
    }
    if (this.notebookOptions.getLayoutConfiguration().disableRulers) {
      o.rulers = [];
    }
    return {
      ...n,
      ...o
    };
  }
  getUpdatedValue(n, e) {
    const t = this.getValue(n, e);
    delete t.hover;
    return t;
  }
  getValue(n, e) {
    return {
      ...this._value,
      padding: this.notebookOptions.computeEditorPadding(n, e)
    };
  }
  getDefaultValue() {
    return {
      ...this._value,
      padding: {
        top: 12,
        bottom: 12
      }
    };
  }
  setLineNumbers(n) {
    this._lineNumbers = n;
    this._recomputeOptions();
  }
};
Di.as(Dh.Configuration).registerConfiguration({
  id: "notebook",
  order: 100,
  type: "object",
  properties: {
    "notebook.lineNumbers": {
      type: "string",
      enum: ["off", "on"],
      default: "off",
      markdownDescription: _(9470, null)
    }
  }
});
Dt(class extends rn {
  constructor() {
    super({
      id: "notebook.toggleLineNumbers",
      title: dt(9473, "Toggle Notebook Line Numbers"),
      precondition: dv,
      menu: [{
        id: st.NotebookToolbar,
        group: "notebookLayout",
        order: 2,
        when: Ee.equals("config.notebook.globalToolbar", true)
      }],
      category: o7,
      f1: true,
      toggled: {
        condition: Ee.notEquals("config.notebook.lineNumbers", "off"),
        title: _(9471, null)
      }
    });
  }
  async run(e) {
    const t = e.get(Fn);
    if (t.getValue("notebook.lineNumbers") === "on") {
      t.updateValue("notebook.lineNumbers", "off");
    } else {
      t.updateValue("notebook.lineNumbers", "on");
    }
  }
});
Dt(class extends $U {
  constructor() {
    super({
      id: "notebook.cell.toggleLineNumbers",
      title: _(9472, null),
      precondition: ow.isEqualTo(lCt),
      menu: [{
        id: st.NotebookCellTitle,
        group: "View",
        order: 1
      }],
      toggled: Ee.or(Z0a.isEqualTo("on"), Ee.and(Z0a.isEqualTo("inherit"), Ee.equals("config.notebook.lineNumbers", "on")))
    });
  }
  async runWithContext(e, t) {
    if (t.ui) {
      this.updateCell(e.get(Fn), t.cell);
    } else {
      const i = e.get(Fn);
      t.selectedCells.forEach(r => {
        this.updateCell(i, r);
      });
    }
  }
  updateCell(e, t) {
    const i = e.getValue("notebook.lineNumbers") === "on";
    const r = t.lineNumbers;
    if (r === "on" || r === "inherit" && i) {
      t.lineNumbers = "off";
    } else {
      t.lineNumbers = "on";
    }
  }
});

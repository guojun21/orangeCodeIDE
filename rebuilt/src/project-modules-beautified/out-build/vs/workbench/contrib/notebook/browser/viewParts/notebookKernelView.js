"use strict";

// Module: out-build/vs/workbench/contrib/notebook/browser/viewParts/notebookKernelView.js
// Offset: 33377154 (bundle byte offset)
// Size: 5508 bytes
Rx();
nl();
qi();
Jr();
Ht();
dr();
si();
HA();
Wt();
AN();
Sb();
K8f();
i1();
bO();
ss();
Dt(class extends rn {
  constructor() {
    super({
      id: uwe,
      category: o7,
      title: dt(9520, "Select Notebook Kernel"),
      f1: true,
      precondition: SE,
      menu: [{
        id: st.EditorTitle,
        when: Ee.and(SE, Ee.notEquals("config.notebook.globalToolbar", true)),
        group: "navigation",
        order: -10
      }, {
        id: st.NotebookToolbar,
        when: Ee.equals("config.notebook.globalToolbar", true),
        group: "status",
        order: -10
      }, {
        id: st.InteractiveToolbar,
        when: w_i.notEqualsTo(0),
        group: "status",
        order: -10
      }],
      metadata: {
        description: _(9519, null),
        args: [{
          name: "kernelInfo",
          description: "The kernel info",
          schema: {
            type: "object",
            required: ["id", "extension"],
            properties: {
              id: {
                type: "string"
              },
              extension: {
                type: "string"
              },
              notebookEditorId: {
                type: "string"
              }
            }
          }
        }]
      }
    });
  }
  async run(n, e) {
    const t = n.get(ln);
    const i = n.get(yi);
    const r = Mdy(i, e);
    if (!r || !r.hasModel()) {
      return false;
    }
    let s = e && "id" in e ? e.id : undefined;
    let o = e && "extension" in e ? e.extension : undefined;
    if (s && (typeof s != "string" || typeof o != "string")) {
      s = undefined;
      o = undefined;
    }
    const a = r.textModel;
    const u = n.get(NM).getMatchingKernel(a);
    const {
      selected: d
    } = u;
    if (d && s && d.id === s && $h.equals(d.extension, o)) {
      return true;
    }
    const m = s ? `${o}/${s}` : undefined;
    return t.createInstance(Dbn).showQuickPick(r, m);
  }
});
xrt = class extends aI {
  constructor(e, t, i, r, s) {
    const o = new Hs("fakeAction", undefined, undefined, true, a => e.run(a));
    super(undefined, o, {
      ...i,
      label: false,
      icon: false
    });
    this._editor = t;
    this._notebookKernelService = r;
    this._notebookKernelHistoryService = s;
    this._isLoading = false;
    this._register(o);
    this._register(t.onDidChangeModel(this._update, this));
    this._register(r.onDidAddKernel(this._update, this));
    this._register(r.onDidRemoveKernel(this._update, this));
    this._register(r.onDidChangeNotebookAffinity(this._update, this));
    this._register(r.onDidChangeSelectedNotebooks(this._update, this));
    this._register(r.onDidChangeSourceActions(this._update, this));
    this._register(r.onDidChangeKernelDetectionTasks(this._update, this));
  }
  render(e) {
    this._update();
    super.render(e);
    e.classList.add("kernel-action-view-item");
    this._spinner = document.createElement("span");
    this._spinner.classList.add("kernel-spinner", ...Qt.asClassNameArray(Qt.modify(Be.loading, "spin")));
    this._spinner.style.display = "none";
    e.appendChild(this._spinner);
    this._kernelLabel = document.createElement("a");
    this._kernelLabel.setAttribute("role", "button");
    e.appendChild(this._kernelLabel);
    this.updateLabel();
    this.updateEnabled();
    this._updateSpinnerVisibility();
  }
  isFocused() {
    return !!this._kernelLabel && this._kernelLabel.tabIndex === 0;
  }
  focus() {
    if (this._kernelLabel) {
      this._kernelLabel.tabIndex = 0;
      this._kernelLabel.focus();
    }
  }
  blur() {
    if (this._kernelLabel) {
      this._kernelLabel.tabIndex = -1;
    }
  }
  setFocusable(e) {
    if (this._kernelLabel) {
      this._kernelLabel.tabIndex = e ? 0 : -1;
    }
  }
  updateLabel() {
    if (this._kernelLabel) {
      this._kernelLabel.classList.add("kernel-label");
      this._kernelLabel.innerText = this._action.label;
      this._kernelLabel.setAttribute("aria-label", this._action.label || "");
    }
  }
  updateEnabled() {
    if (this._action.enabled) {
      if (this._kernelLabel) {
        this._kernelLabel.removeAttribute("aria-disabled");
        this._kernelLabel.classList.remove("disabled");
      }
      this.element?.classList.remove("disabled");
    } else {
      if (this._kernelLabel) {
        this._kernelLabel.setAttribute("aria-disabled", "true");
        this._kernelLabel.classList.add("disabled");
      }
      this.element?.classList.add("disabled");
    }
  }
  _updateSpinnerVisibility() {
    if (this._spinner) {
      this._spinner.style.display = this._isLoading ? "inline-block" : "none";
    }
  }
  _update() {
    const e = this._editor.textModel;
    if (!e) {
      this._resetAction();
      return;
    }
    Dbn.updateKernelStatusAction(e, this._action, this._notebookKernelService, this._notebookKernelHistoryService);
    this._isLoading = this._action.class?.includes("spin") ?? false;
    this._updateSpinnerVisibility();
    this.updateLabel();
    this.updateEnabled();
  }
  _resetAction() {
    this._action.enabled = false;
    this._action.label = "";
    this._action.class = "";
    this._isLoading = false;
    this._updateSpinnerVisibility();
    this.updateLabel();
    this.updateEnabled();
  }
};
xrt = __decorate([__param(3, NM), __param(4, v7e)], xrt);

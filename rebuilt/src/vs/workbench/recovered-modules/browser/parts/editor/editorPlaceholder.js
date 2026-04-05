"use strict";

// Module: out-build/vs/workbench/browser/parts/editor/editorPlaceholder.js
// Offset: 31405165 (bundle byte offset)
// Size: 3611 bytes
Koy();
Ht();
oa();
Vf();
Nu();
hB();
Pa();
zI();
Io();
ri();
rt();
kr();
Js();
hs();
ps();
wI();
ox();
fk();
$b();
$0i();
ns();
mk();
ru();
Sfn = class extends fD {
  static {
    Kbu = this;
  }
  static {
    this.PLACEHOLDER_LABEL_MAX_LENGTH = 1024;
  }
  constructor(e, t, i, r, s) {
    super(e, t, i, r, s);
    this.inputDisposable = this._register(new uo());
  }
  createEditor(e) {
    this.container = Ct(".monaco-editor-pane-placeholder", {
      tabIndex: 0
    });
    this.container.style.outline = "none";
    this.scrollbar = this._register(new vF(this.container, {
      horizontal: 1,
      vertical: 1
    }));
    e.appendChild(this.scrollbar.getDomNode());
  }
  async setInput(e, t, i, r) {
    await super.setInput(e, t, i, r);
    if (!r.isCancellationRequested) {
      this.inputDisposable.value = await this.renderInput(e, t);
    }
  }
  async renderInput(e, t) {
    const [i, r] = dde(this.container, this.scrollbar);
    th(i);
    const s = new Ut();
    const {
      icon: o,
      label: a,
      actions: l
    } = await this.getContents(e, t, s);
    const u = qFt(a, Kbu.PLACEHOLDER_LABEL_MAX_LENGTH);
    const d = i.appendChild(Ct(".editor-placeholder-icon-container"));
    const m = s.add(new sxe(d));
    m.text = o;
    const p = i.appendChild(Ct(".editor-placeholder-label-container"));
    const g = Ct("span");
    g.textContent = u;
    p.appendChild(g);
    i.setAttribute("aria-label", `${YSa(e, undefined, this.group, undefined)}, ${u}`);
    if (l.length) {
      const f = i.appendChild(Ct(".editor-placeholder-buttons-container"));
      const A = s.add(new D9e(f));
      for (let w = 0; w < l.length; w++) {
        const C = s.add(A.addButton({
          ...lE,
          secondary: w !== 0
        }));
        C.label = l[w].label;
        s.add(C.onDidClick(x => {
          if (x) {
            zu.stop(x, true);
          }
          l[w].run();
        }));
      }
    }
    r.scanDomNode();
    return s;
  }
  clearInput() {
    if (this.container) {
      th(this.container);
    }
    this.inputDisposable.clear();
    super.clearInput();
  }
  layout(e) {
    const [t, i] = dde(this.container, this.scrollbar);
    Jgt(t, e.width, e.height);
    i.scanDomNode();
    t.classList.toggle("max-height-200px", e.height <= 200);
  }
  focus() {
    super.focus();
    this.container?.focus();
  }
  dispose() {
    this.container?.remove();
    super.dispose();
  }
};
Sfn = Kbu = __decorate([__param(2, ea), __param(3, bo), __param(4, Hi)], Sfn);
Xka = class extends Sfn {
  static {
    q0i = this;
  }
  static {
    this.ID = "workbench.editors.workspaceTrustRequiredEditor";
  }
  static {
    this.LABEL = _(3746, null);
  }
  static {
    this.DESCRIPTOR = oC.create(q0i, this.ID, this.LABEL);
  }
  constructor(e, t, i, r, s, o) {
    super(q0i.ID, e, t, i, o);
    this.commandService = r;
    this.workspaceService = s;
  }
  getTitle() {
    return q0i.LABEL;
  }
  async getContents() {
    return {
      icon: "$(workspace-untrusted)",
      label: oE(fW(this.workspaceService.getWorkspace())) ? _(3747, null) : _(3748, null),
      actions: [{
        label: _(3749, null),
        run: () => this.commandService.executeCommand("workbench.trust.manage")
      }]
    };
  }
};
Xka = q0i = __decorate([__param(1, ea), __param(2, bo), __param(3, fr), __param(4, Lr), __param(5, Hi)], Xka);
e1a = class extends Sfn {
  static {
    Zka = this;
  }
  static {
    this.ID = "workbench.editors.errorEditor";
  }
  static {
    this.LABEL = _(3750, null);
  }
  static {
    this.DESCRIPTOR = oC.create(Zka, this.ID, this.LABEL);
  }
  constructor(e, t, i, r, s, o) {
    super(Zka.ID, e, t, i, r);
    this.fileService = s;
    this.dialogService = o;
  }
  async getContents(e, t, i) {
    const r = e.resource;
    const s = t.error;
    const o = s?.fileOperationResult === 1;
    let a;
    if (o) {
      a = _(3751, null);
    } else if (jun(s) && s.forceMessage) {
      a = s.message;
    } else if (s) {
      a = _(3752, null);
    } else {
      a = _(3753, null);
    }
    let l = "$(error)";
    if (jun(s)) {
      if (s.forceSeverity === Ha.Info) {
        l = "$(info)";
      } else if (s.forceSeverity === Ha.Warning) {
        l = "$(warning)";
      }
    }
    let u;
    if (jun(s) && s.actions.length > 0) {
      u = s.actions.map(d => ({
        label: d.label,
        run: () => {
          const m = d.run();
          if (m instanceof Promise) {
            m.catch(p => this.dialogService.error(Jw(p)));
          }
        }
      }));
    } else {
      u = [{
        label: _(3754, null),
        run: () => this.group.openEditor(e, {
          ...t,
          source: rR.USER
        })
      }];
    }
    if (o && r && this.fileService.hasProvider(r)) {
      i.add(this.fileService.onDidFilesChange(d => {
        if (d.contains(r, 1, 0)) {
          this.group.openEditor(e, t);
        }
      }));
    }
    return {
      icon: l,
      label: a,
      actions: u ?? []
    };
  }
};
e1a = Zka = __decorate([__param(1, ea), __param(2, bo), __param(3, Hi), __param(4, Gr), __param(5, Ml)], e1a);

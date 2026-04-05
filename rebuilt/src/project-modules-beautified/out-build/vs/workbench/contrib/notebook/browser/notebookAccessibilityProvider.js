"use strict";

// Module: out-build/vs/workbench/contrib/notebook/browser/notebookAccessibilityProvider.js
// Offset: 33445367 (bundle byte offset)
// Size: 2406 bytes
yn();
rt();
Uc();
Ht();
Ei();
ka();
ph();
uD();
fki();
zg();
Ew();
cIa = class extends at {
  constructor(e, t, i, r, s, o) {
    super();
    this.viewModel = e;
    this.isReplHistory = t;
    this.notebookExecutionStateService = i;
    this.keybindingService = r;
    this.configurationService = s;
    this.accessibilityService = o;
    this._onDidAriaLabelChange = new Qe();
    this.onDidAriaLabelChange = this._onDidAriaLabelChange.event;
    this._register(In.debounce(this.notebookExecutionStateService.onDidChangeExecution, (a, l) => this.mergeEvents(a, l), 100)(a => {
      if (!a.length) {
        return;
      }
      const l = this.viewModel();
      if (l) {
        for (const d of a) {
          const m = l.getCellByHandle(d.cellHandle);
          if (m) {
            this._onDidAriaLabelChange.fire(m);
          }
        }
        const u = a[a.length - 1];
        if (this.shouldReadCellOutputs(u.state)) {
          const d = l.getCellByHandle(u.cellHandle);
          if (d && d.outputsViewModels.length) {
            const m = t_u(l.notebookDocument, d, true);
            W_(m);
          }
        }
      }
    }, this));
  }
  shouldReadCellOutputs(e) {
    return e === undefined && this.isReplHistory && this.accessibilityService.isScreenReaderOptimized() && this.configurationService.getValue("accessibility.replEditor.readLastExecutionOutput");
  }
  get verbositySettingId() {
    if (this.isReplHistory) {
      return "accessibility.verbosity.replEditor";
    } else {
      return "accessibility.verbosity.notebook";
    }
  }
  getAriaLabel(e) {
    const t = In.filter(this.onDidAriaLabelChange, i => i === e);
    return tp(this, t, () => {
      const i = this.viewModel();
      if (i && i.getCellIndex(e) >= 0) {
        return this.getLabel(e);
      } else {
        return "";
      }
    });
  }
  createItemLabel(e, t) {
    if (this.isReplHistory) {
      return `cell${e}`;
    } else {
      return `${t === zd.Markup ? "markdown" : "code"} cell${e}`;
    }
  }
  getLabel(e) {
    const t = this.notebookExecutionStateService.getCellExecution(e.uri)?.state;
    const i = t === XE.Executing ? ", executing" : t === XE.Pending ? ", pending" : "";
    return this.createItemLabel(i, e.cellKind);
  }
  get widgetAriaLabelName() {
    if (this.isReplHistory) {
      return _(9366, null);
    } else {
      return _(9367, null);
    }
  }
  getWidgetAriaLabel() {
    const e = this.keybindingService.lookupKeybinding("editor.action.accessibilityHelp")?.getLabel();
    if (this.configurationService.getValue(this.verbositySettingId)) {
      if (e) {
        return _(9368, null, this.widgetAriaLabelName, e);
      } else {
        return _(9369, null, this.widgetAriaLabelName);
      }
    } else {
      return this.widgetAriaLabelName;
    }
  }
  mergeEvents(e, t) {
    const i = this.viewModel();
    const r = e || [];
    if (i && t.type === vJ.cell && t.affectsNotebook(i.uri)) {
      const s = r.findIndex(o => o.cellHandle === t.cellHandle);
      if (s >= 0) {
        r.splice(s, 1);
      }
      r.push({
        cellHandle: t.cellHandle,
        state: t.changed?.state
      });
    }
    return r;
  }
};
cIa = __decorate([__param(2, pE), __param(3, mo), __param(4, Fn), __param(5, Cf)], cIa);

"use strict";

// Module: out-build/vs/workbench/contrib/notebook/browser/view/cellParts/cellOutput.js
// Offset: 33272071 (bundle byte offset)
// Size: 16728 bytes
ri();
y3();
nl();
rt();
Ht();
dg();
vT();
dr();
si();
Wt();
Fc();
Kl();
Jr();
v0();
Sb();
bJ();
LQ();
ph();
uD();
z0();
s_u();
Uc();
i1();
fki();
Ert = class extends at {
  constructor(e, t, i, r, s, o, a, l, u, d, m) {
    super();
    this.notebookEditor = e;
    this.viewCell = t;
    this.cellOutputContainer = i;
    this.outputContainer = r;
    this.output = s;
    this.notebookService = o;
    this.quickInputService = a;
    this.menuService = u;
    this.extensionsWorkbenchService = d;
    this.instantiationService = m;
    this.toolbarDisposables = this._register(new Ut());
    this.toolbarAttached = false;
    this._outputHeightTimer = null;
    this.contextKeyService = l;
    this._register(this.output.model.onDidChangeData(() => {
      this.rerender();
    }));
    this._register(this.output.onDidResetRenderer(() => {
      this.rerender();
    }));
  }
  detach() {
    this.renderedOutputContainer?.remove();
    let e = 0;
    if (this.innerContainer) {
      for (let t = 0; t < this.innerContainer.childNodes.length && (this.innerContainer.childNodes[t].className === "rendered-output" && e++, !(e > 1)); t++);
      if (e === 0) {
        this.innerContainer.remove();
      }
    }
    this.notebookEditor.removeInset(this.output);
  }
  updateDOMTop(e) {
    if (this.innerContainer) {
      this.innerContainer.style.top = `${e}px`;
    }
  }
  rerender() {
    if (this.notebookEditor.hasModel() && this.innerContainer && this.renderResult && this.renderResult.type === 1) {
      const [e, t] = this.output.resolveMimeTypes(this.notebookEditor.textModel, this.notebookEditor.activeKernel?.preloadProvides);
      const i = e[t];
      if (i.mimeType === this.renderResult.mimeType && i.rendererId === this.renderResult.renderer.id) {
        const r = this.viewCell.outputsViewModels.indexOf(this.output);
        this.notebookEditor.updateOutput(this.viewCell, this.renderResult, this.viewCell.getOutputOffset(r));
        return;
      }
    }
    if (this.innerContainer) {
      const e = this.innerContainer.nextElementSibling;
      this.toolbarDisposables.clear();
      const t = this.innerContainer;
      if (t) {
        t.remove();
        this.notebookEditor.removeInset(this.output);
      }
      this.render(e);
    } else {
      const e = this.cellOutputContainer.renderedOutputEntries.findIndex(i => i.element === this);
      const t = e > 0 && this.cellOutputContainer.renderedOutputEntries[e - 1].element.innerContainer?.parentElement ? this.cellOutputContainer.renderedOutputEntries[e - 1].element.innerContainer : undefined;
      this.render(t);
    }
    this._relayoutCell();
  }
  _generateInnerOutputContainer(e, t) {
    this.innerContainer = Ct(".output-inner-container");
    if (e && e.nextElementSibling) {
      this.outputContainer.domNode.insertBefore(this.innerContainer, e.nextElementSibling);
    } else {
      this.outputContainer.domNode.appendChild(this.innerContainer);
    }
    this.innerContainer.setAttribute("output-mime-type", t.mimeType);
    return this.innerContainer;
  }
  render(e) {
    const t = this.viewCell.outputsViewModels.indexOf(this.output);
    if (this.viewCell.isOutputCollapsed || !this.notebookEditor.hasModel()) {
      this.cellOutputContainer.flagAsStale();
      return;
    }
    if (!Dg.parse(this.viewCell.uri)?.notebook) {
      return;
    }
    const r = this.notebookEditor.textModel;
    const [s, o] = this.output.resolveMimeTypes(r, this.notebookEditor.activeKernel?.preloadProvides);
    if (!s.find(d => d.isTrusted) || s.length === 0) {
      this.viewCell.updateOutputHeight(t, 0, "CellOutputElement#noMimeType");
      return;
    }
    const a = s[o];
    let l = this.notebookService.getRendererInfo(a.rendererId);
    if (!l && a.mimeType.indexOf("text/") > -1) {
      l = this.notebookService.getRendererInfo("vscode.builtin-renderer");
    }
    const u = this._generateInnerOutputContainer(e, a);
    if (t === 0 || this.output.visible.get()) {
      this._attachToolbar(u, r, this.notebookEditor.activeKernel, t, s);
    } else {
      this._register(Oc(d => {
        const m = d.readObservable(this.output.visible);
        if (m && !this.toolbarAttached) {
          this._attachToolbar(u, r, this.notebookEditor.activeKernel, t, s);
        } else if (!m) {
          this.toolbarDisposables.clear();
        }
        this.cellOutputContainer.checkForHiddenOutputs();
      }));
      this.cellOutputContainer.hasHiddenOutputs.set(true, undefined);
    }
    this.renderedOutputContainer = Rt(u, Ct(".rendered-output"));
    this.renderResult = l ? {
      type: 1,
      renderer: l,
      source: this.output,
      mimeType: a.mimeType
    } : this._renderMissingRenderer(this.output, a.mimeType);
    this.output.pickedMimeType = a;
    if (!this.renderResult) {
      this.viewCell.updateOutputHeight(t, 0, "CellOutputElement#renderResultUndefined");
      return;
    }
    this.notebookEditor.createOutput(this.viewCell, this.renderResult, this.viewCell.getOutputOffset(t), false);
    u.classList.add("background");
    return {
      initRenderIsSynchronous: false
    };
  }
  _renderMissingRenderer(e, t) {
    if (!e.model.outputs.length) {
      return this._renderMessage(e, _(9474, null));
    }
    if (!t) {
      const r = e.model.outputs.map(s => s.mime).join(", ");
      return this._renderMessage(e, _(9475, null, r));
    }
    return this._renderSearchForMimetype(e, t);
  }
  _renderSearchForMimetype(e, t) {
    const i = `@tag:notebookRenderer ${t}`;
    const r = Ct("p", undefined, `No renderer could be found for mimetype "${t}", but one might be available on the Marketplace.`);
    const s = Ct("a", {
      href: `command:workbench.extensions.search?%22${i}%22`,
      class: "monaco-button monaco-text-button",
      tabindex: 0,
      role: "button",
      style: "padding: 8px; text-decoration: none; color: rgb(255, 255, 255); background-color: rgb(14, 99, 156); max-width: 200px;"
    }, "Search Marketplace");
    return {
      type: 0,
      source: e,
      htmlContent: r.outerHTML + s.outerHTML
    };
  }
  _renderMessage(e, t) {
    const i = Ct("p", undefined, t);
    return {
      type: 0,
      source: e,
      htmlContent: i.outerHTML
    };
  }
  shouldEnableCopy(e) {
    if (!e.find(t => BTa.indexOf(t.mimeType) || t.mimeType.startsWith("image/"))) {
      return false;
    }
    if (Let(e[0].mimeType)) {
      const t = this.output.cellViewModel;
      const i = t.outputsViewModels.indexOf(this.output);
      if (i > 0) {
        const r = t.model.outputs[i - 1];
        return !Let(r.outputs[0].mime);
      }
    }
    return true;
  }
  async _attachToolbar(e, t, i, r, s) {
    const o = s.filter(C => C.isTrusted).length > 1;
    const a = this.shouldEnableCopy(s);
    if (r > 0 && !o && !a || !this.notebookEditor.hasModel()) {
      return;
    }
    e.style.position = "relative";
    const l = Ct(".cell-output-toolbar");
    e.appendChild(l);
    const u = this.toolbarDisposables.add(this.instantiationService.createInstance(KI, l, {
      renderDropdownAsChildElement: false
    }));
    u.context = {
      ui: true,
      cell: this.output.cellViewModel,
      outputViewModel: this.output,
      notebookEditor: this.notebookEditor,
      $mid: 13
    };
    const d = this.toolbarDisposables.add(new Hs("notebook.output.pickMimetype", _(9476, null), Qt.asClassName(RWl), undefined, async C => this._pickActiveMimeTypeRenderer(e, t, i, this.output)));
    const m = this.toolbarDisposables.add(this.contextKeyService.createScoped(e));
    const p = ypu.bindTo(m);
    const g = Apu.bindTo(m);
    const f = wpu.bindTo(m);
    g.set(r === 0);
    if (s[r]) {
      f.set(s[r].mimeType);
    }
    this.toolbarDisposables.add(Oc(C => {
      p.set(C.readObservable(this.cellOutputContainer.hasHiddenOutputs));
    }));
    const A = this.toolbarDisposables.add(this.menuService.createMenu(st.NotebookOutputToolbar, m));
    const w = () => {
      let {
        secondary: C
      } = tM(A.getActions({
        shouldForwardArgs: true
      }), () => false);
      if (!a) {
        C = C.filter(x => x.id !== r_u);
      }
      if (o) {
        C = [d, ...C];
      }
      u.setActions([], C);
    };
    w();
    this.toolbarDisposables.add(A.onDidChange(w));
  }
  async _pickActiveMimeTypeRenderer(e, t, i, r) {
    const [s, o] = r.resolveMimeTypes(t, i?.preloadProvides);
    const a = [];
    const l = [];
    s.forEach((w, C) => {
      if (w.isTrusted) {
        (w.rendererId === uCt ? l : a).push({
          label: w.mimeType,
          id: w.mimeType,
          index: C,
          picked: C === o,
          detail: this._generateRendererInfo(w.rendererId),
          description: C === o ? _(9477, null) : undefined
        });
      }
    });
    if (l.some(w => F8f.includes(w.id))) {
      l.push({
        label: _(9478, null),
        id: "installRenderers",
        index: s.length
      });
    }
    const u = new Ut();
    const d = u.add(this.quickInputService.createQuickPick({
      useSeparators: true
    }));
    d.items = [...a, {
      type: "separator"
    }, ...l];
    d.activeItems = a.filter(w => !!w.picked);
    d.placeholder = a.length !== s.length ? _(9479, null) : _(9480, null);
    const m = await new Promise(w => {
      u.add(d.onDidAccept(() => {
        w(d.selectedItems.length === 1 ? d.selectedItems[0] : undefined);
        u.dispose();
      }));
      d.show();
    });
    if (m === undefined || m.index === o) {
      return;
    }
    if (m.id === "installRenderers") {
      this._showJupyterExtension();
      return;
    }
    const p = e.nextElementSibling;
    this.toolbarDisposables.clear();
    const g = this.innerContainer;
    if (g) {
      g.remove();
      this.notebookEditor.removeInset(r);
    }
    r.pickedMimeType = s[m.index];
    this.viewCell.updateOutputMinHeight(this.viewCell.layoutInfo.outputTotalHeight);
    const {
      mimeType: f,
      rendererId: A
    } = s[m.index];
    this.notebookService.updateMimePreferredRenderer(t.viewType, f, A, s.map(w => w.mimeType));
    this.render(p);
    this._validateFinalOutputHeight(false);
    this._relayoutCell();
  }
  async _showJupyterExtension() {
    await this.extensionsWorkbenchService.openSearch(`@id:${Wki}`);
  }
  _generateRendererInfo(e) {
    const t = this.notebookService.getRendererInfo(e);
    if (t) {
      return `${t.displayName !== "" ? t.displayName : t.id} (${t.extensionId.value})`;
    } else {
      return _(9481, null);
    }
  }
  _validateFinalOutputHeight(e) {
    if (this._outputHeightTimer !== null) {
      clearTimeout(this._outputHeightTimer);
    }
    if (e) {
      this.viewCell.unlockOutputHeight();
    } else {
      this._outputHeightTimer = setTimeout(() => {
        this.viewCell.unlockOutputHeight();
      }, 1000);
    }
  }
  _relayoutCell() {
    this.notebookEditor.layoutNotebookCell(this.viewCell, this.viewCell.layoutInfo.totalHeight);
  }
  dispose() {
    if (this._outputHeightTimer) {
      this.viewCell.unlockOutputHeight();
      clearTimeout(this._outputHeightTimer);
    }
    super.dispose();
  }
};
Ert = __decorate([__param(5, JA), __param(6, ha), __param(7, wi), __param(8, xd), __param(9, Em), __param(10, ln)], Ert);
Ibn = class {
  constructor(n, e) {
    this.model = n;
    this.element = e;
  }
};
(function (n) {
  n[n.Execution = 1] = "Execution";
  n[n.Other = 2] = "Other";
})(M8f ||= {});
RTa = class extends JV {
  checkForHiddenOutputs() {
    if (this._outputEntries.find(e => e.model.visible)) {
      this.hasHiddenOutputs.set(true, undefined);
    } else {
      this.hasHiddenOutputs.set(false, undefined);
    }
  }
  get renderedOutputEntries() {
    return this._outputEntries;
  }
  constructor(e, t, i, r, s, o, a) {
    super();
    this.notebookEditor = e;
    this.viewCell = t;
    this.templateData = i;
    this.options = r;
    this.openerService = s;
    this._notebookExecutionStateService = o;
    this.instantiationService = a;
    this._outputEntries = [];
    this._hasStaleOutputs = false;
    this.hasHiddenOutputs = Ua("hasHiddenOutputs", false);
    this._outputHeightTimer = null;
    this._register(t.onDidStartExecution(() => {
      t.updateOutputMinHeight(t.layoutInfo.outputTotalHeight);
    }));
    this._register(t.onDidStopExecution(() => {
      this._validateFinalOutputHeight(false);
    }));
    this._register(t.onDidChangeOutputs(l => {
      const d = this._notebookExecutionStateService.getCellExecution(t.uri) ? 1 : 2;
      this._updateOutputs(l, d);
    }));
    this._register(t.onDidChangeLayout(() => {
      this.updateInternalLayoutNow(t);
    }));
  }
  updateInternalLayoutNow(e) {
    this.templateData.outputContainer.setTop(e.layoutInfo.outputContainerOffset);
    this.templateData.outputShowMoreContainer.setTop(e.layoutInfo.outputShowMoreContainerOffset);
    this._outputEntries.forEach(t => {
      const i = this.viewCell.outputsViewModels.indexOf(t.model);
      if (i >= 0) {
        const r = this.viewCell.getOutputOffsetInContainer(i);
        t.element.updateDOMTop(r);
      }
    });
  }
  render() {
    try {
      this._doRender();
    } finally {
      this._relayoutCell();
    }
  }
  flagAsStale() {
    this._hasStaleOutputs = true;
  }
  _doRender() {
    if (this.viewCell.outputsViewModels.length > 0) {
      if (this.viewCell.layoutInfo.outputTotalHeight !== 0) {
        this.viewCell.updateOutputMinHeight(this.viewCell.layoutInfo.outputTotalHeight);
      }
      gv(this.templateData.outputContainer.domNode);
      for (let e = 0; e < Math.min(this.options.limit, this.viewCell.outputsViewModels.length); e++) {
        const t = this.viewCell.outputsViewModels[e];
        const i = this.instantiationService.createInstance(Ert, this.notebookEditor, this.viewCell, this, this.templateData.outputContainer, t);
        this._outputEntries.push(new Ibn(t, i));
        i.render(undefined);
      }
      if (this.viewCell.outputsViewModels.length > this.options.limit) {
        gv(this.templateData.outputShowMoreContainer.domNode);
        this.viewCell.updateOutputShowMoreContainerHeight(46);
      }
      this._validateFinalOutputHeight(false);
    } else {
      Ng(this.templateData.outputContainer.domNode);
    }
    this.templateData.outputShowMoreContainer.domNode.innerText = "";
    if (this.viewCell.outputsViewModels.length > this.options.limit) {
      this.templateData.outputShowMoreContainer.domNode.appendChild(this._generateShowMoreElement(this.templateData.templateDisposables));
    } else {
      Ng(this.templateData.outputShowMoreContainer.domNode);
      this.viewCell.updateOutputShowMoreContainerHeight(0);
    }
  }
  viewUpdateShowOutputs(e) {
    if (this._hasStaleOutputs) {
      this._hasStaleOutputs = false;
      this._outputEntries.forEach(t => {
        t.element.rerender();
      });
    }
    for (let t = 0; t < this._outputEntries.length; t++) {
      const r = this._outputEntries[t].element;
      if (r.renderResult) {
        this.notebookEditor.createOutput(this.viewCell, r.renderResult, this.viewCell.getOutputOffset(t), false);
      } else {
        r.render(undefined);
      }
    }
    this._relayoutCell();
  }
  viewUpdateHideOuputs() {
    for (let e = 0; e < this._outputEntries.length; e++) {
      this.notebookEditor.hideInset(this._outputEntries[e].model);
    }
  }
  _validateFinalOutputHeight(e) {
    if (this._outputHeightTimer !== null) {
      clearTimeout(this._outputHeightTimer);
    }
    const t = this._notebookExecutionStateService.getCellExecution(this.viewCell.uri);
    if (e) {
      this.viewCell.unlockOutputHeight();
    } else if (t?.state !== XE.Executing) {
      this._outputHeightTimer = setTimeout(() => {
        this.viewCell.unlockOutputHeight();
      }, 200);
    }
  }
  _updateOutputs(e, t = 2) {
    const i = this.viewCell.layoutInfo.outputTotalHeight;
    this.viewCell.updateOutputMinHeight(i);
    if (this.viewCell.outputsViewModels.length) {
      gv(this.templateData.outputContainer.domNode);
    } else {
      Ng(this.templateData.outputContainer.domNode);
    }
    this.viewCell.spliceOutputHeights(e.start, e.deleteCount, e.newOutputs.map(r => 0));
    this._renderNow(e, t);
  }
  _renderNow(e, t) {
    if (e.start >= this.options.limit) {
      return;
    }
    const i = this._outputEntries.slice(0, e.start);
    const r = this._outputEntries.slice(e.start, e.start + e.deleteCount);
    const s = this._outputEntries.slice(e.start + e.deleteCount);
    let o = this.viewCell.outputsViewModels.slice(e.start, e.start + e.newOutputs.length);
    if (i.length + o.length + s.length > this.options.limit) {
      if (i.length + o.length > this.options.limit) {
        [...r, ...s].forEach(l => {
          l.element.detach();
          l.element.dispose();
        });
        o = o.slice(0, this.options.limit - i.length);
        const a = o.map(l => new Ibn(l, this.instantiationService.createInstance(Ert, this.notebookEditor, this.viewCell, this, this.templateData.outputContainer, l)));
        this._outputEntries = [...i, ...a];
        for (let l = i.length; l < this._outputEntries.length; l++) {
          this._outputEntries[l].element.render(undefined);
        }
      } else {
        const a = s.slice(this.options.limit - i.length - o.length);
        [...r, ...a].forEach(d => {
          d.element.detach();
          d.element.dispose();
        });
        const l = i.length + o.length;
        const u = o.map(d => new Ibn(d, this.instantiationService.createInstance(Ert, this.notebookEditor, this.viewCell, this, this.templateData.outputContainer, d)));
        this._outputEntries = [...i, ...u, ...s.slice(0, this.options.limit - i.length - o.length)];
        for (let d = i.length; d < l; d++) {
          const m = d - 1 >= 0 && this._outputEntries[d - 1] && this._outputEntries[d - 1].element.innerContainer?.parentElement ? this._outputEntries[d - 1].element.innerContainer : undefined;
          this._outputEntries[d].element.render(m);
        }
      }
    } else {
      r.forEach(d => {
        d.element.detach();
        d.element.dispose();
      });
      const a = i.length + o.length;
      const l = o.map(d => new Ibn(d, this.instantiationService.createInstance(Ert, this.notebookEditor, this.viewCell, this, this.templateData.outputContainer, d)));
      let u = [];
      if (i.length + l.length + s.length < this.viewCell.outputsViewModels.length) {
        const d = Math.min(this.options.limit, this.viewCell.outputsViewModels.length);
        u = this.viewCell.outputsViewModels.slice(i.length + l.length + s.length, d).map(m => new Ibn(m, this.instantiationService.createInstance(Ert, this.notebookEditor, this.viewCell, this, this.templateData.outputContainer, m)));
      }
      this._outputEntries = [...i, ...l, ...s, ...u];
      for (let d = i.length; d < a; d++) {
        const m = d - 1 >= 0 && this._outputEntries[d - 1] && this._outputEntries[d - 1].element.innerContainer?.parentElement ? this._outputEntries[d - 1].element.innerContainer : undefined;
        this._outputEntries[d].element.render(m);
      }
      for (let d = 0; d < u.length; d++) {
        this._outputEntries[i.length + o.length + s.length + d].element.render(undefined);
      }
    }
    if (this.viewCell.outputsViewModels.length > this.options.limit) {
      gv(this.templateData.outputShowMoreContainer.domNode);
      if (!this.templateData.outputShowMoreContainer.domNode.hasChildNodes()) {
        this.templateData.outputShowMoreContainer.domNode.appendChild(this._generateShowMoreElement(this.templateData.templateDisposables));
      }
      this.viewCell.updateOutputShowMoreContainerHeight(46);
    } else {
      Ng(this.templateData.outputShowMoreContainer.domNode);
    }
    this._relayoutCell();
    this._validateFinalOutputHeight(t === 2 && this.viewCell.outputsViewModels.length === 0);
  }
  _generateShowMoreElement(e) {
    const t = {
      value: `There are more than ${this.options.limit} outputs, [show more (open the raw output data in a text editor) ...](command:workbench.action.openLargeOutput)`,
      isTrusted: true,
      supportThemeIcons: true
    };
    const i = Jde(t, {
      actionHandler: {
        callback: r => {
          if (r === "command:workbench.action.openLargeOutput") {
            this.openerService.open(Dg.generateCellOutputUriWithId(this.notebookEditor.textModel.uri));
          }
        },
        disposables: e
      }
    });
    e.add(i);
    i.element.classList.add("output-show-more");
    return i.element;
  }
  _relayoutCell() {
    this.notebookEditor.layoutNotebookCell(this.viewCell, this.viewCell.layoutInfo.totalHeight);
  }
  dispose() {
    this.viewCell.updateOutputMinHeight(0);
    if (this._outputHeightTimer) {
      clearTimeout(this._outputHeightTimer);
    }
    this._outputEntries.forEach(e => {
      e.element.dispose();
    });
    super.dispose();
  }
};
RTa = __decorate([__param(4, Ja), __param(5, pE), __param(6, ln)], RTa);
F8f = ["application/geo+json", "application/vdom.v1+json", "application/vnd.dataresource+json", "application/vnd.plotly.v1+json", "application/vnd.vega.v2+json", "application/vnd.vega.v3+json", "application/vnd.vega.v4+json", "application/vnd.vega.v5+json", "application/vnd.vegalite.v1+json", "application/vnd.vegalite.v2+json", "application/vnd.vegalite.v3+json", "application/vnd.vegalite.v4+json", "application/x-nteract-model-debug+json", "image/svg+xml", "text/latex", "text/vnd.plotly.v1+html", "application/vnd.jupyter.widget-view+json", "application/vnd.code.notebook.error"];

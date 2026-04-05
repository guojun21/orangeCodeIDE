"use strict";

// Module: out-build/vs/workbench/browser/labels.js
// Offset: 30898218 (bundle byte offset)
// Size: 10214 bytes
Ht();
Yn();
Yr();
Jne();
Ku();
ps();
Ei();
hd();
Ff();
Jye();
zr();
ns();
Io();
yn();
Pd();
oR();
rt();
Wt();
iL();
Gpi();
eu();
p1t = {
  onDidChangeVisibility: In.None
};
c5 = class extends at {
  constructor(e, t, i, r, s, o, a, l, u, d, m) {
    super();
    this.instantiationService = t;
    this.configurationService = i;
    this.modelService = r;
    this.workspaceService = s;
    this.languageService = o;
    this.decorationsService = a;
    this.themeService = l;
    this.labelService = u;
    this.textFileService = d;
    this.environmentService = m;
    this._onDidChangeDecorations = this._register(new Qe());
    this.onDidChangeDecorations = this._onDidChangeDecorations.event;
    this.widgets = [];
    this.labels = [];
    this.registerListeners(e);
  }
  registerListeners(e) {
    this._register(e.onDidChangeVisibility(t => {
      this.widgets.forEach(i => i.notifyVisibilityChanged(t));
    }));
    this._register(this.languageService.onDidChange(() => this.widgets.forEach(t => t.notifyExtensionsRegistered())));
    this._register(this.modelService.onModelLanguageChanged(t => {
      if (t.model.uri) {
        this.widgets.forEach(i => i.notifyModelLanguageChanged(t.model));
      }
    }));
    this._register(this.modelService.onModelAdded(t => {
      if (t.uri) {
        this.widgets.forEach(i => i.notifyModelAdded(t));
      }
    }));
    this._register(this.workspaceService.onDidChangeWorkspaceFolders(() => {
      this.widgets.forEach(t => t.notifyWorkspaceFoldersChange());
    }));
    this._register(this.decorationsService.onDidChangeDecorations(t => {
      let i = false;
      this.widgets.forEach(r => {
        if (r.notifyFileDecorationsChanges(t)) {
          i = true;
        }
      });
      if (i) {
        this._onDidChangeDecorations.fire();
      }
    }));
    this._register(this.themeService.onDidColorThemeChange(() => this.widgets.forEach(t => t.notifyThemeChange())));
    this._register(this.configurationService.onDidChangeConfiguration(t => {
      if (t.affectsConfiguration(gOt)) {
        this.widgets.forEach(i => i.notifyFileAssociationsChange());
      }
    }));
    this._register(this.labelService.onDidChangeFormatters(t => {
      this.widgets.forEach(i => i.notifyFormattersChange(t.scheme));
    }));
    this._register(this.textFileService.untitled.onDidChangeLabel(t => {
      this.widgets.forEach(i => i.notifyUntitledLabelChange(t.resource));
    }));
  }
  get(e) {
    return this.labels[e];
  }
  create(e, t) {
    const i = this.instantiationService.createInstance(vCa, e, t);
    const r = {
      element: i.element,
      onDidRender: i.onDidRender,
      setLabel: (s, o, a) => i.setLabel(s, o, a),
      setResource: (s, o) => i.setResource(s, o),
      setFile: (s, o) => i.setFile(s, o),
      clear: () => i.clear(),
      dispose: () => this.disposeWidget(i)
    };
    this.labels.push(r);
    this.widgets.push(i);
    return r;
  }
  disposeWidget(e) {
    const t = this.widgets.indexOf(e);
    if (t > -1) {
      this.widgets.splice(t, 1);
      this.labels.splice(t, 1);
    }
    Bo(e);
  }
  clear() {
    this.widgets = Bo(this.widgets);
    this.labels = [];
  }
  dispose() {
    super.dispose();
    this.clear();
  }
};
c5 = __decorate([__param(1, ln), __param(2, Fn), __param(3, Il), __param(4, Lr), __param(5, Jl), __param(6, Nie), __param(7, bo), __param(8, Ol), __param(9, Gg), __param(10, Cc)], c5);
RMe = class extends c5 {
  get element() {
    return this.label;
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m, p) {
    super(p1t, i, r, s, o, a, l, u, d, m, p);
    this.label = this._register(this.create(e, t));
  }
};
RMe = __decorate([__param(2, ln), __param(3, Fn), __param(4, Il), __param(5, Lr), __param(6, Jl), __param(7, Nie), __param(8, bo), __param(9, Ol), __param(10, Gg), __param(11, Cc)], RMe);
(function (n) {
  n[n.Basic = 1] = "Basic";
  n[n.Full = 2] = "Full";
})(g1t ||= {});
vCa = class extends fJ {
  constructor(e, t, i, r, s, o, a, l, u, d) {
    super(e, t);
    this.languageService = i;
    this.modelService = r;
    this.decorationsService = s;
    this.labelService = o;
    this.textFileService = a;
    this.contextService = l;
    this.notebookDocumentService = u;
    this.environmentService = d;
    this._onDidRender = this._register(new Qe());
    this.onDidRender = this._onDidRender.event;
    this.label = undefined;
    this.decoration = this._register(new uo());
    this.options = undefined;
    this.computedIconClasses = undefined;
    this.computedLanguageId = undefined;
    this.computedPathLabel = undefined;
    this.computedWorkspaceFolderLabel = undefined;
    this.needsRedraw = undefined;
    this.isHidden = false;
  }
  notifyVisibilityChanged(e) {
    if (e === this.isHidden) {
      this.isHidden = !e;
      if (e && this.needsRedraw) {
        this.render({
          updateIcon: this.needsRedraw === g1t.Full,
          updateDecoration: this.needsRedraw === g1t.Full
        });
        this.needsRedraw = undefined;
      }
    }
  }
  notifyModelLanguageChanged(e) {
    this.handleModelEvent(e);
  }
  notifyModelAdded(e) {
    this.handleModelEvent(e);
  }
  handleModelEvent(e) {
    const t = BMe(this.label);
    if (t && Zc(e.uri, t) && this.computedLanguageId !== e.getLanguageId()) {
      this.computedLanguageId = e.getLanguageId();
      this.render({
        updateIcon: true,
        updateDecoration: false
      });
    }
  }
  notifyFileDecorationsChanges(e) {
    if (!this.options) {
      return false;
    }
    const t = BMe(this.label);
    if (t && this.options.fileDecorations && e.affectsResource(t)) {
      return this.render({
        updateIcon: false,
        updateDecoration: true
      });
    } else {
      return false;
    }
  }
  notifyExtensionsRegistered() {
    this.render({
      updateIcon: true,
      updateDecoration: false
    });
  }
  notifyThemeChange() {
    this.render({
      updateIcon: false,
      updateDecoration: false
    });
  }
  notifyFileAssociationsChange() {
    this.render({
      updateIcon: true,
      updateDecoration: false
    });
  }
  notifyFormattersChange(e) {
    if (BMe(this.label)?.scheme === e) {
      this.render({
        updateIcon: false,
        updateDecoration: false
      });
    }
  }
  notifyUntitledLabelChange(e) {
    if (Zc(e, BMe(this.label))) {
      this.render({
        updateIcon: false,
        updateDecoration: false
      });
    }
  }
  notifyWorkspaceFoldersChange() {
    if (typeof this.computedWorkspaceFolderLabel == "string") {
      const e = BMe(this.label);
      if (je.isUri(e) && this.label?.name === this.computedWorkspaceFolderLabel) {
        this.setFile(e, this.options);
      }
    }
  }
  setFile(e, t) {
    const i = t?.hideLabel;
    let r;
    if (!i) {
      if (t?.fileKind === xg.ROOT_FOLDER) {
        const o = this.contextService.getWorkspaceFolder(e);
        if (o) {
          r = o.name;
          this.computedWorkspaceFolderLabel = r;
        }
      }
      r ||= pz(GP(e));
    }
    let s;
    if (!t?.hidePath) {
      const o = this.labelService.getUriLabel(Td(e), {
        relative: true
      });
      if (o && o !== ".") {
        s = o;
      }
    }
    this.setResource({
      resource: e,
      name: r,
      description: s,
      range: t?.range
    }, t);
  }
  setResource(e, t = Object.create(null)) {
    const i = BMe(e);
    const r = e?.resource && !je.isUri(e.resource);
    if (!t.forceLabel && !r && i?.scheme === _n.untitled) {
      const u = this.textFileService.untitled.get(i);
      if (u && !u.hasAssociatedFilePath) {
        if (typeof e.name == "string") {
          e.name = u.name;
        }
        if (typeof e.description == "string") {
          const m = u.resource.path;
          if (e.name !== m) {
            e.description = m;
          } else {
            e.description = undefined;
          }
        }
        const d = u.resource.path;
        if (u.name !== d) {
          t.title = `${u.name} \u2022 ${d}`;
        } else {
          t.title = d;
        }
      }
    }
    if (!t.forceLabel && !r && i?.scheme === _n.vscodeNotebookCell) {
      const u = this.notebookDocumentService.getNotebook(i);
      const d = u?.getCellIndex(i);
      if (u && d !== undefined && typeof e.name == "string") {
        t.title = _(3265, null, e.name, `${d + 1}`);
      }
      if (typeof e.name == "string" && u && d !== undefined && typeof e.name == "string") {
        e.name = _(3266, null, e.name, `${d + 1}`);
      }
    }
    if (!t.forceLabel && !r && i?.scheme === _n.vscodeNotebookCellOutput) {
      const u = this.notebookDocumentService.getNotebook(i);
      const d = _Wl(i);
      if (d?.cellFragment) {
        if (!d.notebook) {
          return;
        }
        const m = d.notebook.with({
          scheme: _n.vscodeNotebookCell,
          fragment: d.cellFragment
        });
        const p = u?.getCellIndex(m);
        const g = d.outputIndex;
        if (p !== undefined && g !== undefined && typeof e.name == "string") {
          e.name = _(3267, null, e.name, `${p + 1}`, `${g + 1}`);
        } else if (p !== undefined && typeof e.name == "string") {
          e.name = _(3268, null, e.name, `${p + 1}`);
        }
      }
    }
    const s = this.hasResourceChanged(e);
    const o = s || this.hasPathLabelChanged(e);
    const a = this.hasFileKindChanged(t);
    const l = this.hasIconChanged(t);
    this.label = e;
    this.options = t;
    if (s) {
      this.computedLanguageId = undefined;
    }
    if (o) {
      this.computedPathLabel = undefined;
    }
    this.render({
      updateIcon: s || a || l,
      updateDecoration: s || a
    });
  }
  hasFileKindChanged(e) {
    const t = e?.fileKind;
    const i = this.options?.fileKind;
    return t !== i;
  }
  hasResourceChanged(e) {
    const t = BMe(e);
    const i = BMe(this.label);
    if (t && i) {
      return t.toString() !== i.toString();
    } else {
      return !!t || !!i;
    }
  }
  hasPathLabelChanged(e) {
    const t = BMe(e);
    return !!t && this.computedPathLabel !== this.labelService.getUriLabel(t);
  }
  hasIconChanged(e) {
    return this.options?.icon !== e?.icon;
  }
  clear() {
    this.label = undefined;
    this.options = undefined;
    this.computedLanguageId = undefined;
    this.computedIconClasses = undefined;
    this.computedPathLabel = undefined;
    this.setLabel("");
  }
  render(e) {
    if (this.isHidden) {
      if (this.needsRedraw !== g1t.Full) {
        this.needsRedraw = e.updateIcon || e.updateDecoration ? g1t.Full : g1t.Basic;
      }
      return false;
    }
    if (e.updateIcon) {
      this.computedIconClasses = undefined;
    }
    if (!this.label) {
      return false;
    }
    const t = {
      title: "",
      italic: this.options?.italic,
      strikethrough: this.options?.strikethrough,
      matches: this.options?.matches,
      descriptionMatches: this.options?.descriptionMatches,
      extraClasses: [],
      separator: this.options?.separator,
      domId: this.options?.domId,
      disabledCommand: this.options?.disabledCommand,
      labelEscapeNewLines: this.options?.labelEscapeNewLines,
      descriptionTitle: this.options?.descriptionTitle
    };
    const i = BMe(this.label);
    if (this.options?.title !== undefined) {
      t.title = this.options.title;
    }
    if (i && i.scheme !== _n.data && (!this.options?.title || typeof this.options.title != "string" && !this.options.title.markdownNotSupportedFallback)) {
      this.computedPathLabel ||= this.labelService.getUriLabel(i);
      if (!t.title || typeof t.title == "string") {
        t.title = this.computedPathLabel;
      } else {
        t.title.markdownNotSupportedFallback ||= this.computedPathLabel;
      }
    }
    if (this.options && !this.options.hideIcon) {
      this.computedIconClasses ||= yS(this.modelService, this.languageService, i, this.options.fileKind, this.options.icon);
      if (je.isUri(this.options.icon)) {
        t.iconPath = this.options.icon;
      }
      if (this.options.iconElement) {
        t.iconElement = this.options.iconElement;
      }
      t.extraClasses = this.computedIconClasses.slice(0);
    }
    if (this.options?.extraClasses) {
      t.extraClasses.push(...this.options.extraClasses);
    }
    if (this.options?.fileDecorations && i) {
      if (e.updateDecoration) {
        this.decoration.value = this.decorationsService.getDecoration(i, this.options.fileKind !== xg.FILE);
      }
      const r = this.decoration.value;
      if (r) {
        if (r.tooltip) {
          if (typeof t.title == "string") {
            t.title = `${t.title} \u2022 ${r.tooltip}`;
          } else if (typeof t.title?.markdown == "string") {
            const s = `${t.title.markdown} \u2022 ${r.tooltip}`;
            t.title = {
              markdown: s,
              markdownNotSupportedFallback: s
            };
          }
        }
        if (r.strikethrough) {
          t.strikethrough = true;
        }
        if (this.options.fileDecorations.colors) {
          t.extraClasses.push(r.labelClassName);
        }
        if (this.options.fileDecorations.badges) {
          t.extraClasses.push(r.badgeClassName);
          t.extraClasses.push(r.iconClassName);
        }
      }
    }
    if (this.label.range) {
      t.suffix = this.label.range.startLineNumber !== this.label.range.endLineNumber ? `:${this.label.range.startLineNumber}-${this.label.range.endLineNumber}` : `:${this.label.range.startLineNumber}`;
    }
    this.setLabel(this.label.name ?? "", this.label.description, t);
    this._onDidRender.fire();
    return true;
  }
  dispose() {
    super.dispose();
    this.label = undefined;
    this.options = undefined;
    this.computedLanguageId = undefined;
    this.computedIconClasses = undefined;
    this.computedPathLabel = undefined;
    this.computedWorkspaceFolderLabel = undefined;
  }
};
vCa = __decorate([__param(2, Jl), __param(3, Il), __param(4, Nie), __param(5, Ol), __param(6, Gg), __param(7, Lr), __param(8, Jpi), __param(9, Cc)], vCa);

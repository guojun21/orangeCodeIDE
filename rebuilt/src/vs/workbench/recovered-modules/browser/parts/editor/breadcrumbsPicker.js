"use strict";

// Module: out-build/vs/workbench/browser/parts/editor/breadcrumbsPicker.js
// Offset: 31429758 (bundle byte offset)
// Size: 9178 bytes
unt();
_s();
yn();
Q_();
iR();
rt();
Hl();
Yr();
Yn();
GLf();
Ei();
ns();
Wt();
Rf();
Nl();
ps();
zF();
Ybu();
Io();
Ht();
ss();
sw();
zr();
J0i = class {
  constructor(e, t, i, r, s) {
    this.resource = t;
    this._instantiationService = i;
    this._themeService = r;
    this._configurationService = s;
    this._disposables = new Ut();
    this._fakeEvent = new UIEvent("fakeEvent");
    this._onWillPickElement = new Qe();
    this.onWillPickElement = this._onWillPickElement.event;
    this._previewDispoables = new uo();
    this._domNode = document.createElement("div");
    this._domNode.className = "monaco-breadcrumbs-picker show-file-icons";
    e.appendChild(this._domNode);
  }
  dispose() {
    this._disposables.dispose();
    this._previewDispoables.dispose();
    this._onWillPickElement.dispose();
    this._domNode.remove();
    setTimeout(() => this._tree.dispose(), 0);
  }
  async show(e, t, i, r, s) {
    const a = this._themeService.getColorTheme().getColor(y1c);
    this._arrow = document.createElement("div");
    this._arrow.className = "arrow";
    this._arrow.style.borderColor = `transparent transparent ${a ? a.toString() : ""}`;
    this._domNode.appendChild(this._arrow);
    this._treeContainer = document.createElement("div");
    this._treeContainer.style.background = a ? a.toString() : "";
    this._treeContainer.style.paddingTop = "2px";
    this._treeContainer.style.borderRadius = "3px";
    this._treeContainer.style.boxShadow = `0 0 8px 2px ${this._themeService.getColorTheme().getColor(Tde)}`;
    this._treeContainer.style.border = `1px solid ${this._themeService.getColorTheme().getColor(G5e)}`;
    this._domNode.appendChild(this._treeContainer);
    this._layoutInfo = {
      maxHeight: t,
      width: i,
      arrowSize: r,
      arrowOffset: s,
      inputHeight: 0
    };
    this._tree = this._createTree(this._treeContainer, e);
    this._disposables.add(this._tree.onDidOpen(async l => {
      const {
        element: u,
        editorOptions: d,
        sideBySide: m
      } = l;
      await this._revealElement(u, {
        ...d,
        preserveFocus: false
      }, m);
    }));
    this._disposables.add(this._tree.onDidChangeFocus(l => {
      this._previewDispoables.value = this._previewElement(l.elements[0]);
    }));
    this._disposables.add(this._tree.onDidChangeContentHeight(() => {
      this._layout();
    }));
    this._domNode.focus();
    try {
      await this._setInput(e);
      this._layout();
    } catch (l) {
      Gc(l);
    }
  }
  _layout() {
    const e = this._layoutInfo.arrowSize * 2;
    const t = Math.min(this._layoutInfo.maxHeight - e, this._tree.contentHeight);
    const i = t + e;
    this._domNode.style.height = `${i}px`;
    this._domNode.style.width = `${this._layoutInfo.width}px`;
    this._arrow.style.top = `-${this._layoutInfo.arrowSize * 2}px`;
    this._arrow.style.borderWidth = `${this._layoutInfo.arrowSize}px`;
    this._arrow.style.marginLeft = `${this._layoutInfo.arrowOffset}px`;
    this._treeContainer.style.height = `${t}px`;
    this._treeContainer.style.width = `${this._layoutInfo.width}px`;
    this._tree.layout(t, this._layoutInfo.width);
  }
  restoreViewState() {}
};
J0i = __decorate([__param(2, ln), __param(3, bo), __param(4, Fn)], J0i);
WLf = class {
  getHeight(n) {
    return 22;
  }
  getTemplateId(n) {
    return "FileStat";
  }
};
QLf = class {
  getId(n) {
    if (je.isUri(n)) {
      return n.toString();
    } else if (bOt(n)) {
      return n.id;
    } else if (TSe(n)) {
      return n.uri.toString();
    } else {
      return n.resource.toString();
    }
  }
};
s1a = class {
  constructor(e, t) {
    this._fileService = e;
    this._editorService = t;
  }
  hasChildren(e) {
    return je.isUri(e) || bOt(e) || TSe(e) || e.isDirectory;
  }
  async getChildren(e) {
    if (bOt(e)) {
      return e.folders;
    }
    let t;
    if (TSe(e)) {
      t = e.uri;
    } else if (je.isUri(e)) {
      t = e;
    } else {
      t = e.resource;
    }
    const r = (await this._fileService.resolve(t)).children ?? [];
    if (ca(t) === "plans" && ca(Td(t)) === ".cursor") {
      const a = this._editorService.getEditors(0).map(m => m.editor.resource).filter(m => m !== undefined && m.scheme === _n.cursorPlan);
      const l = [];
      for (const m of a) {
        try {
          const p = await this._fileService.stat(m);
          const g = {
            resource: m,
            name: ca(m),
            isFile: true,
            isDirectory: false,
            isSymbolicLink: false,
            mtime: p.mtime,
            ctime: p.ctime,
            size: p.size,
            readonly: false,
            locked: false,
            children: undefined,
            etag: `${p.mtime}`
          };
          l.push(g);
        } catch {}
      }
      const u = new Set(r.map(m => m.name));
      const d = l.filter(m => !u.has(m.name));
      return [...r, ...d];
    }
    return r;
  }
};
s1a = __decorate([__param(0, Gr), __param(1, yi)], s1a);
o1a = class {
  constructor(e, t) {
    this._labels = e;
    this._configService = t;
    this.templateId = "FileStat";
  }
  renderTemplate(e) {
    return this._labels.create(e, {
      supportHighlights: true
    });
  }
  renderElement(e, t, i) {
    const r = this._configService.getValue("explorer.decorations");
    const {
      element: s
    } = e;
    let o;
    let a;
    if (TSe(s)) {
      o = s.uri;
      a = xg.ROOT_FOLDER;
    } else {
      o = s.resource;
      a = s.isDirectory ? xg.FOLDER : xg.FILE;
    }
    i.setFile(o, {
      fileKind: a,
      hidePath: true,
      fileDecorations: r,
      matches: oI(e.filterData),
      extraClasses: ["picker-item"]
    });
  }
  disposeTemplate(e) {
    e.dispose();
  }
};
o1a = __decorate([__param(1, Fn)], o1a);
jLf = class {
  getKeyboardNavigationLabel(n) {
    return n.name;
  }
};
zLf = class {
  getWidgetAriaLabel() {
    return _(3400, null);
  }
  getAriaLabel(n) {
    return n.name;
  }
};
a1a = class {
  constructor(e, t) {
    this._workspaceService = e;
    this._cachedExpressions = new Map();
    this._disposables = new Ut();
    const i = axe.FileExcludes.bindTo(t);
    const r = () => {
      e.getWorkspace().folders.forEach(s => {
        const o = i.getValue({
          resource: s.uri
        });
        if (!o) {
          return;
        }
        const a = {};
        for (const l in o) {
          if (typeof o[l] != "boolean") {
            continue;
          }
          const u = l.indexOf("**/") !== 0 ? Rm.join(s.uri.path, l) : l;
          a[u] = o[l];
        }
        this._cachedExpressions.set(s.uri.toString(), jae(a));
      });
    };
    r();
    this._disposables.add(i);
    this._disposables.add(i.onDidChange(r));
    this._disposables.add(e.onDidChangeWorkspaceFolders(r));
  }
  dispose() {
    this._disposables.dispose();
  }
  filter(e, t) {
    if (TSe(e)) {
      return true;
    }
    const i = this._workspaceService.getWorkspaceFolder(e.resource);
    if (!i || !this._cachedExpressions.has(i.uri.toString())) {
      return true;
    } else {
      return !this._cachedExpressions.get(i.uri.toString())(DBe(i.uri.path, e.resource.path), ca(e.resource));
    }
  }
};
a1a = __decorate([__param(0, Lr), __param(1, Fn)], a1a);
VLf = class {
  compare(n, e) {
    if (TSe(n) && TSe(e)) {
      return n.index - e.index;
    } else if (n.isDirectory === e.isDirectory) {
      return HNe(n.name, e.name);
    } else if (n.isDirectory) {
      return -1;
    } else {
      return 1;
    }
  }
};
c1a = class extends J0i {
  constructor(e, t, i, r, s, o, a) {
    super(e, t, i, r, s);
    this._workspaceService = o;
    this._editorService = a;
  }
  _createTree(e) {
    this._treeContainer.classList.add("file-icon-themable-tree");
    this._treeContainer.classList.add("show-file-icons");
    const t = r => {
      this._treeContainer.classList.toggle("align-icons-and-twisties", r.hasFileIcons && !r.hasFolderIcons);
      this._treeContainer.classList.toggle("hide-arrows", r.hidesExplorerArrows === true);
    };
    this._disposables.add(this._themeService.onDidFileIconThemeChange(t));
    t(this._themeService.getFileIconTheme());
    const i = this._instantiationService.createInstance(c5, p1t);
    this._disposables.add(i);
    return this._instantiationService.createInstance(Eq, "BreadcrumbsFilePicker", e, new WLf(), [this._instantiationService.createInstance(o1a, i)], this._instantiationService.createInstance(s1a), {
      multipleSelectionSupport: false,
      sorter: new VLf(),
      filter: this._instantiationService.createInstance(a1a),
      identityProvider: new QLf(),
      keyboardNavigationLabelProvider: new jLf(),
      accessibilityProvider: this._instantiationService.createInstance(zLf),
      showNotFoundMessage: false,
      overrideStyles: {
        listBackground: y1c
      }
    });
  }
  async _setInput(e) {
    const {
      uri: t,
      kind: i
    } = e;
    let r;
    if (i === xg.ROOT_FOLDER) {
      r = this._workspaceService.getWorkspace();
    } else if (t.scheme === _n.cursorPlan) {
      const a = this._workspaceService.getWorkspace();
      if (a.folders.length > 0) {
        const l = a.folders[0].uri;
        r = je.joinPath(l, ".cursor", "plans");
      } else {
        r = Td(t);
      }
    } else {
      r = Td(t);
    }
    const s = this._tree;
    await s.setInput(r);
    let o;
    for (const {
      element: a
    } of s.getNode().children) {
      if (TSe(a) && Zc(a.uri, t)) {
        o = a;
        break;
      } else if (Zc(a.resource, t)) {
        o = a;
        break;
      }
    }
    if (o) {
      s.reveal(o, 0.5);
      s.setFocus([o], this._fakeEvent);
    }
    s.domFocus();
  }
  _previewElement(e) {
    return at.None;
  }
  async _revealElement(e, t, i) {
    if (!TSe(e) && e.isFile) {
      this._onWillPickElement.fire();
      await this._editorService.openEditor({
        resource: e.resource,
        options: t
      }, i ? Aw : undefined);
      return true;
    } else {
      return false;
    }
  }
};
c1a = __decorate([__param(2, ln), __param(3, bo), __param(4, Fn), __param(5, Lr), __param(6, yi)], c1a);
l1a = class {
  constructor(e, t, i) {
    this.comparator = e;
    this._order = i.getValue(t, "breadcrumbs.symbolSortOrder");
  }
  compare(e, t) {
    if (this._order === "name") {
      return this.comparator.compareByName(e, t);
    } else if (this._order === "type") {
      return this.comparator.compareByType(e, t);
    } else {
      return this.comparator.compareByPosition(e, t);
    }
  }
};
l1a = __decorate([__param(2, uy)], l1a);
KLf = class extends J0i {
  _createTree(n, e) {
    const {
      config: t
    } = e.outline;
    return this._instantiationService.createInstance(Mun, "BreadcrumbsOutlinePicker", n, t.delegate, t.renderers, t.treeDataSource, {
      ...t.options,
      sorter: this._instantiationService.createInstance(l1a, t.comparator, undefined),
      collapseByDefault: true,
      expandOnlyOnTwistieClick: true,
      multipleSelectionSupport: false,
      showNotFoundMessage: false
    });
  }
  _setInput(n) {
    const e = n.outline.captureViewState();
    this.restoreViewState = () => {
      e.dispose();
    };
    const t = this._tree;
    t.setInput(n.outline);
    if (n.element !== n.outline) {
      t.reveal(n.element, 0.5);
      t.setFocus([n.element], this._fakeEvent);
    }
    t.domFocus();
    return Promise.resolve();
  }
  _previewElement(n) {
    return this._tree.getInput().preview(n);
  }
  async _revealElement(n, e, t) {
    this._onWillPickElement.fire();
    await this._tree.getInput().reveal(n, e, t, false);
    return true;
  }
};

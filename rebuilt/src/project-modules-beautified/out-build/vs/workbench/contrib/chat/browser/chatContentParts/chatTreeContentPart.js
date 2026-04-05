"use strict";

// Module: out-build/vs/workbench/contrib/chat/browser/chatContentParts/chatTreeContentPart.js
// Offset: 32848715 (bundle byte offset)
// Size: 3304 bytes
ri();
yn();
rt();
Ht();
Ei();
ns();
Wt();
Rf();
Fc();
Io();
zF();
bEa();
KAu();
X5f = Ct;
RSi = class extends at {
  constructor(e, t, i, r, s) {
    super();
    this.openerService = s;
    this._onDidChangeHeight = this._register(new Qe());
    this.onDidChangeHeight = this._onDidChangeHeight.event;
    const o = this._register(i.get());
    this.tree = o.object;
    this.onDidFocus = this.tree.onDidFocus;
    this._register(this.tree.onDidOpen(a => {
      if (a.element && !("children" in a.element)) {
        this.openerService.open(a.element.uri);
      }
    }));
    this._register(this.tree.onDidChangeCollapseState(() => {
      this._onDidChangeHeight.fire();
    }));
    this._register(this.tree.onContextMenu(a => {
      a.browserEvent.preventDefault();
      a.browserEvent.stopPropagation();
    }));
    this.tree.setInput(e).then(() => {
      if (!o.isStale()) {
        this.tree.layout();
        this._onDidChangeHeight.fire();
      }
    });
    this.domNode = this.tree.getHTMLElement().parentElement;
  }
  domFocus() {
    this.tree.domFocus();
  }
  hasSameContent(e) {
    return e.kind === "treeData";
  }
  addDisposable(e) {
    this._register(e);
  }
};
RSi = __decorate([__param(4, Ja)], RSi);
Nxa = class extends at {
  get inUse() {
    return this._pool.inUse;
  }
  constructor(e, t, i, r) {
    super();
    this._onDidChangeVisibility = e;
    this.instantiationService = t;
    this.configService = i;
    this.themeService = r;
    this._pool = this._register(new wCi(() => this.treeFactory()));
  }
  treeFactory() {
    const e = this._register(this.instantiationService.createInstance(c5, {
      onDidChangeVisibility: this._onDidChangeVisibility
    }));
    const t = X5f(".interactive-response-progress-tree");
    this._register(zAu(t, this.themeService));
    return this.instantiationService.createInstance(Bet, "ChatListRenderer", t, new e9f(), new t9f(), [new n9f(e, this.configService.getValue("explorer.decorations"))], new i9f(), {
      collapseByDefault: () => false,
      expandOnlyOnTwistieClick: () => false,
      identityProvider: {
        getId: r => r.uri.toString()
      },
      accessibilityProvider: {
        getAriaLabel: r => r.label,
        getWidgetAriaLabel: () => _(5246, null)
      },
      alwaysConsumeMouseWheel: false
    });
  }
  get() {
    const e = this._pool.get();
    let t = false;
    return {
      object: e,
      isStale: () => t,
      dispose: () => {
        t = true;
        this._pool.release(e);
      }
    };
  }
};
Nxa = __decorate([__param(1, ln), __param(2, Fn), __param(3, bo)], Nxa);
e9f = class bzb {
  static {
    this.ITEM_HEIGHT = 22;
  }
  getHeight(e) {
    return bzb.ITEM_HEIGHT;
  }
  getTemplateId(e) {
    return "chatListTreeTemplate";
  }
};
t9f = class {
  isIncompressible(n) {
    return !n.children;
  }
};
n9f = class {
  constructor(n, e) {
    this.labels = n;
    this.decorations = e;
    this.templateId = "chatListTreeTemplate";
  }
  renderCompressedElements(n, e, t, i) {
    t.label.element.style.display = "flex";
    const r = n.element.elements.map(s => s.label);
    t.label.setResource({
      resource: n.element.elements[0].uri,
      name: r
    }, {
      title: n.element.elements[0].label,
      fileKind: n.children ? xg.FOLDER : xg.FILE,
      extraClasses: ["explorer-item"],
      fileDecorations: this.decorations
    });
  }
  renderTemplate(n) {
    const e = new Ut();
    const t = e.add(this.labels.create(n, {
      supportHighlights: true
    }));
    return {
      templateDisposables: e,
      label: t
    };
  }
  renderElement(n, e, t, i) {
    t.label.element.style.display = "flex";
    if (!n.children.length && n.element.type !== JI.Directory) {
      t.label.setFile(n.element.uri, {
        fileKind: xg.FILE,
        hidePath: true,
        fileDecorations: this.decorations
      });
    } else {
      t.label.setResource({
        resource: n.element.uri,
        name: n.element.label
      }, {
        title: n.element.label,
        fileKind: xg.FOLDER,
        fileDecorations: this.decorations
      });
    }
  }
  disposeTemplate(n) {
    n.templateDisposables.dispose();
  }
};
i9f = class {
  hasChildren(n) {
    return !!n.children;
  }
  async getChildren(n) {
    return n.children ?? [];
  }
};

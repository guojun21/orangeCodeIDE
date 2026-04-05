"use strict";

// Module: out-build/vs/editor/contrib/gotoSymbol/browser/peek/referencesTree.js
// Offset: 24979933 (bundle byte offset)
// Size: 2710 bytes
ri();
aNe();
$Ae();
Jne();
Q_();
rt();
Yr();
td();
Ht();
Wt();
ka();
Pd();
$b();
eCt();
Oca = class {
  constructor(e) {
    this._resolverService = e;
  }
  hasChildren(e) {
    return e instanceof $ne || e instanceof X0t;
  }
  getChildren(e) {
    if (e instanceof $ne) {
      return e.groups;
    }
    if (e instanceof X0t) {
      return e.resolve(this._resolverService).then(t => t.children);
    }
    throw new Error("bad tree");
  }
};
Oca = __decorate([__param(0, El)], Oca);
Ogg = class {
  getHeight() {
    return 23;
  }
  getTemplateId(n) {
    if (n instanceof X0t) {
      return Fpi.id;
    } else {
      return mWl.id;
    }
  }
};
Uca = class {
  constructor(e) {
    this._keybindingService = e;
  }
  getKeyboardNavigationLabel(e) {
    if (e instanceof tNe) {
      const t = e.parent.getPreview(e)?.preview(e.range);
      if (t) {
        return t.value;
      }
    }
    return ca(e.uri);
  }
  mightProducePrintableCharacter(e) {
    return this._keybindingService.mightProducePrintableCharacter(e);
  }
};
Uca = __decorate([__param(0, mo)], Uca);
Ugg = class {
  getId(n) {
    if (n instanceof tNe) {
      return n.id;
    } else {
      return n.uri;
    }
  }
};
$ca = class extends at {
  constructor(e, t) {
    super();
    this._labelService = t;
    const i = document.createElement("div");
    i.classList.add("reference-file");
    this.file = this._register(new fJ(i, {
      supportHighlights: true
    }));
    this.badge = this._register(new ume(Rt(i, Ct(".count")), {}, lve));
    e.appendChild(i);
  }
  set(e, t) {
    const i = Td(e.uri);
    this.file.setLabel(this._labelService.getUriBasenameLabel(e.uri), this._labelService.getUriLabel(i, {
      relative: true
    }), {
      title: this._labelService.getUriLabel(e.uri),
      matches: t
    });
    const r = e.children.length;
    this.badge.setCount(r);
    if (r > 1) {
      this.badge.setTitleFormat(_(1221, null, r));
    } else {
      this.badge.setTitleFormat(_(1222, null, r));
    }
  }
};
$ca = __decorate([__param(1, Ol)], $ca);
Fpi = class {
  static {
    hWl = this;
  }
  static {
    this.id = "FileReferencesRenderer";
  }
  constructor(e) {
    this._instantiationService = e;
    this.templateId = hWl.id;
  }
  renderTemplate(e) {
    return this._instantiationService.createInstance($ca, e);
  }
  renderElement(e, t, i) {
    i.set(e.element, oI(e.filterData));
  }
  disposeTemplate(e) {
    e.dispose();
  }
};
Fpi = hWl = __decorate([__param(0, ln)], Fpi);
$gg = class extends at {
  constructor(n) {
    super();
    this.label = this._register(new qx(n));
  }
  set(n, e) {
    const t = n.parent.getPreview(n)?.preview(n.range);
    if (!t || !t.value) {
      this.label.set(`${ca(n.uri)}:${n.range.startLineNumber + 1}:${n.range.startColumn + 1}`);
    } else {
      const {
        value: i,
        highlight: r
      } = t;
      if (e && !hz.isDefault(e)) {
        this.label.element.classList.toggle("referenceMatch", false);
        this.label.set(i, oI(e));
      } else {
        this.label.element.classList.toggle("referenceMatch", true);
        this.label.set(i, [r]);
      }
    }
  }
};
mWl = class UWb {
  constructor() {
    this.templateId = UWb.id;
  }
  static {
    this.id = "OneReferenceRenderer";
  }
  renderTemplate(e) {
    return new $gg(e);
  }
  renderElement(e, t, i) {
    i.set(e.element, e.filterData);
  }
  disposeTemplate(e) {
    e.dispose();
  }
};
qgg = class {
  getWidgetAriaLabel() {
    return _(1223, null);
  }
  getAriaLabel(n) {
    return n.ariaMessage;
  }
};

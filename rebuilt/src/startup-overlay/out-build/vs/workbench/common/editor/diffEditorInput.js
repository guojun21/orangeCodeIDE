"use strict";

// Module: out-build/vs/workbench/common/editor/diffEditorInput.js
// Offset: 31138399 (bundle byte offset)
// Size: 4051 bytes
Ht();
Zq();
Nu();
ifn();
cDf();
pfu();
ss();
iL();
wI();
kE = class extends O1 {
  static {
    QSa = this;
  }
  static {
    this.ID = "workbench.editors.diffEditorInput";
  }
  get typeId() {
    return QSa.ID;
  }
  get editorId() {
    if (this.modified.editorId === this.original.editorId) {
      return this.modified.editorId;
    } else {
      return undefined;
    }
  }
  get capabilities() {
    let e = super.capabilities;
    if (this.labels.forceDescription) {
      e |= 64;
    }
    return e;
  }
  constructor(e, t, i, r, s, o) {
    super(e, t, i, r, o);
    this.original = i;
    this.modified = r;
    this.forceOpenAsBinary = s;
    this.cachedModel = undefined;
    this.labels = this.computeLabels();
  }
  computeLabels() {
    let e;
    let t = false;
    if (this.preferredName) {
      e = this.preferredName;
    } else {
      const d = this.original.getName();
      const m = this.modified.getName();
      e = _(4395, null, d, m);
      t = d === m;
    }
    let i;
    let r;
    let s;
    if (this.preferredDescription) {
      i = this.preferredDescription;
      r = this.preferredDescription;
      s = this.preferredDescription;
    } else {
      i = this.computeLabel(this.original.getDescription(0), this.modified.getDescription(0));
      s = this.computeLabel(this.original.getDescription(2), this.modified.getDescription(2));
      const d = this.original.getDescription(1);
      const m = this.modified.getDescription(1);
      if (typeof d == "string" && typeof m == "string" && (d || m)) {
        const [p, g] = wSh([d, m]);
        r = this.computeLabel(p, g);
      }
    }
    let o = this.computeLabel(this.original.getTitle(0) ?? this.original.getName(), this.modified.getTitle(0) ?? this.modified.getName(), " ↔ ");
    let a = this.computeLabel(this.original.getTitle(1) ?? this.original.getName(), this.modified.getTitle(1) ?? this.modified.getName(), " ↔ ");
    let l = this.computeLabel(this.original.getTitle(2) ?? this.original.getName(), this.modified.getTitle(2) ?? this.modified.getName(), " ↔ ");
    const u = this.getPreferredTitle();
    if (u) {
      o = `${u} (${o})`;
      a = `${u} (${a})`;
      l = `${u} (${l})`;
    }
    return {
      name: e,
      shortDescription: i,
      mediumDescription: r,
      longDescription: s,
      forceDescription: t,
      shortTitle: o,
      mediumTitle: a,
      longTitle: l
    };
  }
  computeLabel(e, t, i = " - ") {
    if (!!e && !!t) {
      if (e === t) {
        return t;
      } else {
        return `${e}${i}${t}`;
      }
    }
  }
  getName() {
    return this.labels.name;
  }
  getDescription(e = 1) {
    switch (e) {
      case 0:
        return this.labels.shortDescription;
      case 2:
        return this.labels.longDescription;
      case 1:
      default:
        return this.labels.mediumDescription;
    }
  }
  getTitle(e) {
    switch (e) {
      case 0:
        return this.labels.shortTitle;
      case 2:
        return this.labels.longTitle;
      default:
      case 1:
        return this.labels.mediumTitle;
    }
  }
  async resolve() {
    const e = await this.createModel();
    this.cachedModel?.dispose();
    this.cachedModel = e;
    return this.cachedModel;
  }
  prefersEditorPane(e) {
    if (this.forceOpenAsBinary) {
      return e.find(t => t.typeId === qWl);
    } else {
      return e.find(t => t.typeId === tla);
    }
  }
  async createModel() {
    const [e, t] = await Promise.all([this.original.resolve(), this.modified.resolve()]);
    if (t instanceof qMe && e instanceof qMe) {
      return new WSa(e, t);
    } else {
      return new mfu(jfg(e) ? e : undefined, jfg(t) ? t : undefined);
    }
  }
  toUntyped(e) {
    const t = super.toUntyped(e);
    if (t) {
      return {
        ...t,
        modified: t.primary,
        original: t.secondary
      };
    }
  }
  matches(e) {
    if (this === e) {
      return true;
    } else if (e instanceof QSa) {
      return this.modified.matches(e.modified) && this.original.matches(e.original) && e.forceOpenAsBinary === this.forceOpenAsBinary;
    } else if (nV(e)) {
      return this.modified.matches(e.modified) && this.original.matches(e.original);
    } else {
      return false;
    }
  }
  dispose() {
    if (this.cachedModel) {
      this.cachedModel.dispose();
      this.cachedModel = undefined;
    }
    super.dispose();
  }
};
kE = QSa = __decorate([__param(5, yi)], kE);
lDf = class extends lfu {
  createEditorInput(n, e, t, i, r) {
    return n.createInstance(kE, e, t, i, r, undefined);
  }
};

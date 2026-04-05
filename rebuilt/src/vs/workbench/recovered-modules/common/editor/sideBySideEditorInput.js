"use strict";

// Module: out-build/vs/workbench/common/editor/sideBySideEditorInput.js
// Offset: 31102151 (bundle byte offset)
// Size: 5493 bytes
yn();
Ht();
Ws();
ss();
Nu();
xT();
O1 = class extends XS {
  static {
    Xgn = this;
  }
  static {
    this.ID = "workbench.editorinputs.sidebysideEditorInput";
  }
  get typeId() {
    return Xgn.ID;
  }
  get capabilities() {
    let e = this.primary.capabilities;
    e &= -33;
    if (this.secondary.hasCapability(16)) {
      e |= 16;
    }
    if (this.secondary.hasCapability(8)) {
      e |= 8;
    }
    e |= 256;
    return e;
  }
  get resource() {
    if (this.hasIdenticalSides) {
      return this.primary.resource;
    }
  }
  constructor(e, t, i, r, s) {
    super();
    this.preferredName = e;
    this.preferredDescription = t;
    this.secondary = i;
    this.primary = r;
    this.editorService = s;
    this.hasIdenticalSides = this.primary.matches(this.secondary);
    this.registerListeners();
  }
  registerListeners() {
    this._register(In.once(In.any(this.primary.onWillDispose, this.secondary.onWillDispose))(() => {
      if (!this.isDisposed()) {
        this.dispose();
      }
    }));
    this._register(this.primary.onDidChangeDirty(() => this._onDidChangeDirty.fire()));
    this._register(this.primary.onDidChangeCapabilities(() => this._onDidChangeCapabilities.fire()));
    this._register(this.secondary.onDidChangeCapabilities(() => this._onDidChangeCapabilities.fire()));
    this._register(this.primary.onDidChangeLabel(() => this._onDidChangeLabel.fire()));
    this._register(this.secondary.onDidChangeLabel(() => this._onDidChangeLabel.fire()));
  }
  getName() {
    const e = this.getPreferredName();
    return e || (this.hasIdenticalSides ? this.primary.getName() : _(4396, null, this.secondary.getName(), this.primary.getName()));
  }
  getPreferredName() {
    return this.preferredName;
  }
  getDescription(e) {
    const t = this.getPreferredDescription();
    return t || (this.hasIdenticalSides ? this.primary.getDescription(e) : super.getDescription(e));
  }
  getPreferredDescription() {
    return this.preferredDescription;
  }
  getTitle(e) {
    let t;
    if (this.hasIdenticalSides) {
      t = this.primary.getTitle(e) ?? this.getName();
    } else {
      t = super.getTitle(e);
    }
    const i = this.getPreferredTitle();
    if (i) {
      t = `${i} (${t})`;
    }
    return t;
  }
  getPreferredTitle() {
    if (this.preferredName && this.preferredDescription) {
      return `${this.preferredName} ${this.preferredDescription}`;
    }
    if (this.preferredName || this.preferredDescription) {
      return this.preferredName ?? this.preferredDescription;
    }
  }
  getLabelExtraClasses() {
    if (this.hasIdenticalSides) {
      return this.primary.getLabelExtraClasses();
    } else {
      return super.getLabelExtraClasses();
    }
  }
  getAriaLabel() {
    if (this.hasIdenticalSides) {
      return this.primary.getAriaLabel();
    } else {
      return super.getAriaLabel();
    }
  }
  getTelemetryDescriptor() {
    return {
      ...this.primary.getTelemetryDescriptor(),
      ...super.getTelemetryDescriptor()
    };
  }
  isDirty() {
    return this.primary.isDirty();
  }
  isSaving() {
    return this.primary.isSaving();
  }
  async save(e, t) {
    const i = await this.primary.save(e, t);
    return this.saveResultToEditor(i);
  }
  async saveAs(e, t) {
    const i = await this.primary.saveAs(e, t);
    return this.saveResultToEditor(i);
  }
  saveResultToEditor(e) {
    if (!e || !this.hasIdenticalSides) {
      return e;
    }
    if (this.primary.matches(e)) {
      return this;
    }
    if (e instanceof XS) {
      return new Xgn(this.preferredName, this.preferredDescription, e, e, this.editorService);
    }
    if (!nV(e) && !Jun(e) && !j1e(e) && !JAe(e) && !Gun(e)) {
      return {
        primary: e,
        secondary: e,
        label: this.preferredName,
        description: this.preferredDescription
      };
    }
  }
  revert(e, t) {
    return this.primary.revert(e, t);
  }
  async rename(e, t) {
    if (!this.hasIdenticalSides) {
      return;
    }
    const i = await this.primary.rename(e, t);
    if (i) {
      if (D_(i.editor)) {
        return {
          editor: new Xgn(this.preferredName, this.preferredDescription, i.editor, i.editor, this.editorService),
          options: {
            ...i.options,
            viewState: Hun(this, e, this.editorService)
          }
        };
      }
      if (xq(i.editor)) {
        return {
          editor: {
            label: this.preferredName,
            description: this.preferredDescription,
            primary: i.editor,
            secondary: i.editor,
            options: {
              ...i.options,
              viewState: Hun(this, e, this.editorService)
            }
          }
        };
      }
    }
  }
  isReadonly() {
    return this.primary.isReadonly();
  }
  toUntyped(e) {
    const t = this.primary.toUntyped(e);
    const i = this.secondary.toUntyped(e);
    if (t && i && !nV(t) && !nV(i) && !Jun(t) && !Jun(i) && !j1e(t) && !j1e(i) && !JAe(t) && !JAe(i) && !Gun(t) && !Gun(i)) {
      const r = {
        label: this.preferredName,
        description: this.preferredDescription,
        primary: t,
        secondary: i
      };
      if (typeof e?.preserveViewState == "number") {
        r.options = {
          viewState: Hun(this, e.preserveViewState, this.editorService)
        };
      }
      return r;
    }
  }
  matches(e) {
    if (this === e) {
      return true;
    } else if (tgi(e) || nV(e)) {
      return false;
    } else if (e instanceof Xgn) {
      return this.primary.matches(e.primary) && this.secondary.matches(e.secondary);
    } else if (j1e(e)) {
      return this.primary.matches(e.primary) && this.secondary.matches(e.secondary);
    } else {
      return false;
    }
  }
};
O1 = Xgn = __decorate([__param(4, yi)], O1);
lfu = class {
  canSerialize(n) {
    const e = n;
    if (e.primary && e.secondary) {
      const [t, i] = this.getSerializers(e.secondary.typeId, e.primary.typeId);
      return !!t?.canSerialize(e.secondary) && !!i?.canSerialize(e.primary);
    }
    return false;
  }
  serialize(n) {
    const e = n;
    if (e.primary && e.secondary) {
      const [t, i] = this.getSerializers(e.secondary.typeId, e.primary.typeId);
      if (i && t) {
        const r = i.serialize(e.primary);
        const s = t.serialize(e.secondary);
        if (r && s) {
          const o = {
            name: e.getPreferredName(),
            description: e.getPreferredDescription(),
            primarySerialized: r,
            secondarySerialized: s,
            primaryTypeId: e.primary.typeId,
            secondaryTypeId: e.secondary.typeId
          };
          return JSON.stringify(o);
        }
      }
    }
  }
  deserialize(n, e) {
    const t = JSON.parse(e);
    const [i, r] = this.getSerializers(t.secondaryTypeId, t.primaryTypeId);
    if (r && i) {
      const s = r.deserialize(n, t.primarySerialized);
      const o = i.deserialize(n, t.secondarySerialized);
      if (s instanceof XS && o instanceof XS) {
        return this.createEditorInput(n, t.name, t.description, o, s);
      }
    }
  }
  getSerializers(n, e) {
    const t = Di.as(Jp.EditorFactory);
    return [t.getEditorSerializer(n), t.getEditorSerializer(e)];
  }
};
KIf = class extends lfu {
  createEditorInput(n, e, t, i, r) {
    return n.createInstance(O1, e, t, i, r);
  }
};

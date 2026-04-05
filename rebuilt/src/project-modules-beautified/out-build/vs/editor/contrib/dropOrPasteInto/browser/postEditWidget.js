"use strict";

// Module: out-build/vs/editor/contrib/dropOrPasteInto/browser/postEditWidget.js
// Offset: 2454652 (bundle byte offset)
// Size: 3933 bytes
ri();
fk();
vr();
qi();
mk();
_s();
yn();
rt();
Jr();
Ht();
MBc();
si();
Wt();
ka();
So();
YI();
dve();
EBc();
FhA();
i9o = class extends at {
  static {
    FBc = this;
  }
  static {
    this.baseId = "editor.widget.postEditWidget";
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m) {
    super();
    this.typeId = e;
    this.editor = t;
    this.showCommand = r;
    this.range = s;
    this.edits = o;
    this.onSelectNewEdit = a;
    this.additionalActions = l;
    this._keybindingService = d;
    this._actionWidgetService = m;
    this.allowEditorOverflow = true;
    this.suppressMouseDown = true;
    this.create();
    this.visibleContext = i.bindTo(u);
    this.visibleContext.set(true);
    this._register($i(() => this.visibleContext.reset()));
    this.editor.addContentWidget(this);
    this.editor.layoutContentWidget(this);
    this._register($i(() => this.editor.removeContentWidget(this)));
    this._register(this.editor.onDidChangeCursorPosition(p => {
      this.dispose();
    }));
    this._register(In.runAndSubscribe(d.onDidUpdateKeybindings, () => {
      this._updateButtonTitle();
    }));
  }
  _updateButtonTitle() {
    const e = this._keybindingService.lookupKeybinding(this.showCommand.id)?.getLabel();
    this.button.element.title = this.showCommand.label + (e ? ` (${e})` : "");
  }
  create() {
    this.domNode = Ct(".post-edit-widget");
    this.button = this._register(new pw(this.domNode, {
      supportIcons: true
    }));
    this.button.label = "$(insert)";
    this._register(ei(this.domNode, ir.CLICK, () => this.showSelector()));
  }
  getId() {
    return FBc.baseId + "." + this.typeId;
  }
  getDomNode() {
    return this.domNode;
  }
  getPosition() {
    return {
      position: this.range.getEndPosition(),
      preference: [2]
    };
  }
  showSelector() {
    const e = qS(this.button.element);
    const t = {
      x: e.left + e.width,
      y: e.top + e.height
    };
    this._actionWidgetService.show("postEditWidget", false, this.edits.allEdits.map((i, r) => ({
      kind: "action",
      item: i,
      label: i.title,
      disabled: false,
      canPreview: false,
      group: {
        title: "",
        icon: Qt.fromId(r === this.edits.activeEditIndex ? Be.check.id : Be.blank.id)
      }
    })), {
      onHide: () => {
        this.editor.focus();
      },
      onSelect: i => {
        this._actionWidgetService.hide(false);
        const r = this.edits.allEdits.findIndex(s => s === i);
        if (r !== this.edits.activeEditIndex) {
          return this.onSelectNewEdit(r);
        }
      }
    }, t, this.editor.getDomNode() ?? undefined, this.additionalActions);
  }
};
i9o = FBc = __decorate([__param(8, wi), __param(9, mo), __param(10, TRe)], i9o);
Z3n = class extends at {
  constructor(e, t, i, r, s, o, a, l) {
    super();
    this._id = e;
    this._editor = t;
    this._visibleContext = i;
    this._showCommand = r;
    this._getAdditionalActions = s;
    this._instantiationService = o;
    this._bulkEditService = a;
    this._notificationService = l;
    this._currentWidget = this._register(new uo());
    this._register(In.any(t.onDidChangeModel, t.onDidChangeModelContent)(() => this.clear()));
  }
  async applyEditAndShowIfNeeded(e, t, i, r, s) {
    if (!e.length || !this._editor.hasModel()) {
      return;
    }
    const o = this._editor.getModel();
    const a = t.allEdits.at(t.activeEditIndex);
    if (!a) {
      return;
    }
    const l = async C => {
      const x = this._editor.getModel();
      if (x) {
        await x.undo();
        this.applyEditAndShowIfNeeded(e, {
          activeEditIndex: C,
          allEdits: t.allEdits
        }, i, r, s);
      }
    };
    const u = (C, x) => {
      if (!bf(C)) {
        this._notificationService.error(x);
        if (i) {
          this.show(e[0], t, l);
        }
      }
    };
    const d = new ERe(this._editor, 3, undefined, s);
    let m;
    try {
      m = await Egt(r(a, d.token), d.token);
    } catch (C) {
      return u(C, _(1075, null, a.title, Jw(C)));
    } finally {
      d.dispose();
    }
    if (s.isCancellationRequested) {
      return;
    }
    const p = OSh(o.uri, e, m);
    const g = e[0];
    const f = o.deltaDecorations([], [{
      range: g,
      options: {
        description: "paste-line-suffix",
        stickiness: 0
      }
    }]);
    this._editor.focus();
    let A;
    let w;
    try {
      A = await this._bulkEditService.apply(p, {
        editor: this._editor,
        token: s
      });
      w = o.getDecorationRange(f[0]);
    } catch (C) {
      return u(C, _(1076, null, a.title, Jw(C)));
    } finally {
      o.deltaDecorations(f, []);
    }
    if (!s.isCancellationRequested) {
      if (i && A.isApplied && t.allEdits.length > 1) {
        this.show(w ?? g, t, l);
      }
    }
  }
  show(e, t, i) {
    this.clear();
    if (this._editor.hasModel()) {
      this._currentWidget.value = this._instantiationService.createInstance(i9o, this._id, this._editor, this._visibleContext, this._showCommand, e, t, i, this._getAdditionalActions());
    }
  }
  clear() {
    this._currentWidget.clear();
  }
  tryShowSelector() {
    this._currentWidget.value?.showSelector();
  }
};
Z3n = __decorate([__param(5, ln), __param(6, rL), __param(7, ms)], Z3n);

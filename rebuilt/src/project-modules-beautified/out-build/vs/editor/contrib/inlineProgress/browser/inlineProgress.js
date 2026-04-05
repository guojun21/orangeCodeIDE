"use strict";

// Module: out-build/vs/editor/contrib/inlineProgress/browser/inlineProgress.js
// Offset: 2424255 (bundle byte offset)
// Size: 2369 bytes
ri();
vr();
qi();
rt();
oa();
Jr();
IhA();
ts();
bv();
Wt();
HSh = Zh.register({
  description: "inline-progress-widget",
  stickiness: 1,
  showIfCollapsed: true,
  after: {
    content: Dze,
    inlineClassName: "inline-editor-progress-decoration",
    inlineClassNameAffectsLetterSpacing: true
  }
});
JSh = class jGb extends at {
  static {
    this.baseId = "editor.widget.inlineProgressWidget";
  }
  constructor(e, t, i, r, s) {
    super();
    this.typeId = e;
    this.editor = t;
    this.range = i;
    this.delegate = s;
    this.allowEditorOverflow = false;
    this.suppressMouseDown = true;
    this.create(r);
    this.editor.addContentWidget(this);
    this.editor.layoutContentWidget(this);
  }
  create(e) {
    this.domNode = Ct(".inline-progress-widget");
    this.domNode.role = "button";
    this.domNode.title = e;
    const t = Ct("span.icon");
    this.domNode.append(t);
    t.classList.add(...Qt.asClassNameArray(Be.loading), "codicon-modifier-spin");
    const i = () => {
      const r = this.editor.getOption(68);
      this.domNode.style.height = `${r}px`;
      this.domNode.style.width = `${Math.ceil(r * 0.8)}px`;
    };
    i();
    this._register(this.editor.onDidChangeConfiguration(r => {
      if (r.hasChanged(54) || r.hasChanged(68)) {
        i();
      }
    }));
    this._register(ei(this.domNode, ir.CLICK, r => {
      this.delegate.cancel();
    }));
  }
  getId() {
    return jGb.baseId + "." + this.typeId;
  }
  getDomNode() {
    return this.domNode;
  }
  getPosition() {
    return {
      position: {
        lineNumber: this.range.startLineNumber,
        column: this.range.startColumn
      },
      preference: [0]
    };
  }
  dispose() {
    super.dispose();
    this.editor.removeContentWidget(this);
  }
};
K3n = class extends at {
  constructor(e, t, i) {
    super();
    this.id = e;
    this._editor = t;
    this._instantiationService = i;
    this._showDelay = 500;
    this._showPromise = this._register(new uo());
    this._currentWidget = this._register(new uo());
    this._operationIdPool = 0;
    this._currentDecorations = t.createDecorationsCollection();
  }
  dispose() {
    super.dispose();
    this._currentDecorations.clear();
  }
  async showWhile(e, t, i, r, s) {
    const o = this._operationIdPool++;
    this._currentOperation = o;
    this.clear();
    this._showPromise.value = nC(() => {
      const a = Zt.fromPositions(e);
      if (this._currentDecorations.set([{
        range: a,
        options: HSh
      }]).length > 0) {
        this._currentWidget.value = this._instantiationService.createInstance(JSh, this.id, this._editor, a, t, r);
      }
    }, s ?? this._showDelay);
    try {
      return await i;
    } finally {
      if (this._currentOperation === o) {
        this.clear();
        this._currentOperation = undefined;
      }
    }
  }
  clear() {
    this._showPromise.clear();
    this._currentDecorations.clear();
    this._currentWidget.clear();
  }
};
K3n = __decorate([__param(2, ln)], K3n);

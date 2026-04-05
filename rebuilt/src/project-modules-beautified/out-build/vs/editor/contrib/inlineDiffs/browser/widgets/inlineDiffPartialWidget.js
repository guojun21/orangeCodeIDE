"use strict";

// Module: out-build/vs/editor/contrib/inlineDiffs/browser/widgets/inlineDiffPartialWidget.js
// Offset: 33940384 (bundle byte offset)
// Size: 8563 bytes
ri();
Dx();
rt();
hs();
Wt();
ka();
Dd();
Ud();
mce();
sie();
Fvi();
tl();
$Da();
Rmy();
qDa = class extends at {
  static {
    A2e = this;
  }
  static {
    this._instances = new Set();
  }
  static {
    this._activeMouseEditor = null;
  }
  static {
    this._isMouseInsideActiveEditor = false;
  }
  static {
    this._editorMouseMoveListeners = new Map();
  }
  static refreshWidgetsForEditor(e) {
    for (const t of this._instances) {
      if (t._editor === e) {
        t.refreshVisibility();
      }
    }
  }
  static refreshAllWidgets() {
    for (const e of this._instances) {
      e.refreshVisibility();
    }
  }
  static registerEditorMouseMoveListener(e) {
    const t = this._editorMouseMoveListeners.get(e);
    if (t) {
      t.count++;
      return;
    }
    const i = e.onMouseMove(r => {
      this.handleEditorMouseMoveEvent(e, r);
    });
    this._editorMouseMoveListeners.set(e, {
      count: 1,
      disposable: i
    });
  }
  static deregisterEditorMouseMoveListener(e) {
    const t = this._editorMouseMoveListeners.get(e);
    if (t) {
      if (t.count === 1) {
        t.disposable.dispose();
        this._editorMouseMoveListeners.delete(e);
        return;
      }
      t.count--;
    }
  }
  static handleEditorMouseMoveEvent(e, t) {
    let i = false;
    for (const r of this._instances) {
      if (r._editor === e) {
        i = r.handleEditorMouseMove(t) || i;
      }
    }
    if (i) {
      this.handleMouseMoveInEditor(e);
    }
  }
  static handleMouseMoveInEditor(e) {
    const t = this._activeMouseEditor !== e;
    const i = !this._isMouseInsideActiveEditor;
    this._activeMouseEditor = e;
    this._isMouseInsideActiveEditor = true;
    if (t || i) {
      this.refreshAllWidgets();
      return;
    }
    this.refreshWidgetsForEditor(e);
  }
  static handleMouseLeaveEditor(e) {
    if (this._activeMouseEditor === e && !!this._isMouseInsideActiveEditor) {
      this._isMouseInsideActiveEditor = false;
      this.refreshWidgetsForEditor(e);
    }
  }
  getEditor() {
    return this._editor;
  }
  getComposerRequestID() {
    return this._diffChangeSourceRegistry.getDescriptorById(this.diffId)?.descriptor.metadata?.generationId;
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m, p) {
    super();
    this.id = e;
    this.diffId = t;
    this.composerId = i;
    this._editor = s;
    this.keybindingService = o;
    this.commandService = a;
    this.analyticsService = l;
    this._reactiveStorageService = u;
    this._diffChangeSourceRegistry = d;
    this.instantiationService = m;
    this.cmdKStateService = p;
    this._overlayPosition = null;
    this._position = null;
    A2e._instances.add(this);
    this.id = e;
    this._isMultiDiffEditor = this._editor.getIsMultiDiffEditor?.() ?? false;
    this._hasSeenMouseMoveInEditor = !this._isMultiDiffEditor;
    this._latestInteractionPosition = null;
    this._latestInteractionSource = "cursor";
    this.reactiveStorageRoot = this._register(this._reactiveStorageService.createScoped(this));
    this._domNode = Ct("div.acceptRejectPartialEditWidget");
    this._domNode.style.display = "none";
    this._overlayDomNode = Ct("div.acceptRejectPartialEditOverlay");
    this._overlayDomNode.style.pointerEvents = "none";
    this._overlayDomNode.style.zIndex = "11";
    this._overlayDomNode.style.display = "none";
    const g = `${this.id}:overlay`;
    this._overlayWidget = {
      getId: () => g,
      getDomNode: () => this._overlayDomNode,
      getPosition: () => this._overlayPosition
    };
    this._editor.addOverlayWidget(this._overlayWidget);
    [this.line, this.setLine] = this.reactiveStorageRoot.createSignal(r);
    [this.isOnEditorEnd, this.setIsOnEditorEnd] = this.reactiveStorageRoot.createSignal(false);
    this.updatePosition(r);
    this._register(Bmy(this._overlayDomNode, this, this.instantiationService, this.isOnEditorEnd));
    this._register(E1.ignoreTarget(this._domNode));
    this.allowEditorOverflow = false;
    A2e.registerEditorMouseMoveListener(this._editor);
    const f = this._editor;
    this._register({
      dispose: () => A2e.deregisterEditorMouseMoveListener(f)
    });
    this._editor.addContentWidget(this);
    this.layoutOverlayAtAnchor();
    this._register(this._editor.onDidChangeModel(() => {
      this.validatePosition();
      this.updatePosition(this.line());
      this.updateLatestInteraction(this._editor.getPosition(), "cursor");
      this.refreshVisibility();
    }));
    this.reactiveStorageRoot.onChangeEffect({
      deps: [this.line],
      onChange: ({
        deps: A
      }) => {
        this.updatePosition(A[0]);
        this._editor.layoutContentWidget(this);
        this.layoutOverlayAtAnchor();
        this.refreshVisibility();
      }
    });
    this.updateLatestInteraction(this._editor.getPosition(), "cursor");
    this.refreshVisibility();
    this._register(this._editor.onMouseLeave(() => {
      A2e.handleMouseLeaveEditor(this._editor);
    }));
    this._register(this._editor.onDidScrollChange(() => {
      this.refreshVisibility();
      this.layoutOverlayAtAnchor();
    }));
    this._register(this._editor.onDidLayoutChange(() => {
      this.layoutOverlayAtAnchor();
      this.refreshVisibility();
    }));
    this._register(this._editor.onDidChangeCursorPosition(A => {
      this.updateLatestInteraction(A.position, "cursor");
      this.refreshVisibility();
    }));
    this._register(this._editor.onDidChangeCursorSelection(A => {
      this.updateLatestInteraction(A.selection.getStartPosition(), "cursor");
      this.refreshVisibility();
    }));
    this._register(this._diffChangeSourceRegistry.onDidChange(() => this.refreshVisibility()));
    this._register(this.cmdKStateService.onDiffAttachmentChanged(() => this.refreshVisibility()));
  }
  updateLatestInteraction(e, t) {
    this._latestInteractionPosition = e;
    this._latestInteractionSource = t;
  }
  handleEditorMouseMove(e) {
    const t = e.target.element;
    if (!e.target.position && wf(t) && this._overlayDomNode.contains(t)) {
      return false;
    } else {
      if (e.target.position) {
        this._hasSeenMouseMoveInEditor = true;
        this.updateLatestInteraction(e.target.position, "mouse");
      }
      return true;
    }
  }
  hideOverlay() {
    this._overlayDomNode.style.display = "none";
  }
  layoutOverlayAtAnchor() {
    const e = this._editor.getLayoutInfo();
    const t = this._editor.getScrolledVisiblePosition(new ar(this.line(), 1));
    if (!e || !t) {
      this._overlayPosition = null;
      this.hideOverlay();
      this._editor.layoutOverlayWidget(this._overlayWidget);
      return;
    }
    this._overlayDomNode.style.width = `${e.contentWidth}px`;
    this._overlayPosition = {
      preference: {
        top: t.top,
        left: e.contentLeft
      }
    };
    this._editor.layoutOverlayWidget(this._overlayWidget);
  }
  isLineVisible(e) {
    return this._editor.getVisibleRanges().some(t => t.startLineNumber <= e && e <= t.endLineNumber);
  }
  isWidgetOnEditorEnd(e, t) {
    for (const i of e.changes) {
      const s = Xtt(e, i).endLineNumber + 1;
      if (Math.min(s, t) === this.line() && s > t) {
        return true;
      }
    }
    return false;
  }
  getFirstVisibleWidgetInEditor() {
    const e = Array.from(A2e._instances).filter(t => t._editor === this._editor).filter(t => t.isLineVisible(t.line()));
    if (e.length === 0) {
      return null;
    } else {
      e.sort((t, i) => {
        const r = t.line() - i.line();
        if (r !== 0) {
          return r;
        } else {
          return t.id.localeCompare(i.id);
        }
      });
      return e[0];
    }
  }
  refreshVisibility() {
    const e = this._editor.getModel();
    if (!e) {
      this.hideOverlay();
      this.setIsOnEditorEnd(false);
      return;
    }
    if (this._isMultiDiffEditor && !this._hasSeenMouseMoveInEditor) {
      this.hideOverlay();
      this.setIsOnEditorEnd(false);
      return;
    }
    const t = this.line();
    if (!this.isLineVisible(t)) {
      this.hideOverlay();
      this.setIsOnEditorEnd(false);
      return;
    }
    if (this._latestInteractionSource === "mouse" && A2e._activeMouseEditor && A2e._activeMouseEditor !== this._editor) {
      this.hideOverlay();
      this.setIsOnEditorEnd(false);
      return;
    }
    const i = this._latestInteractionPosition ?? (this._latestInteractionSource === "mouse" ? null : this._editor.getPosition());
    if (!i) {
      if (this._latestInteractionSource === "mouse") {
        this.hideOverlay();
      }
      this.setIsOnEditorEnd(false);
      return;
    }
    const r = this._diffChangeSourceRegistry.getDescriptorById(this.diffId);
    if (!r) {
      this.hideOverlay();
      this.setIsOnEditorEnd(false);
      return;
    }
    const s = r.descriptor;
    const o = e.getLineCount();
    const a = mmn(s, new ar(i.lineNumber, i.column));
    if (!a) {
      this.hideOverlay();
      this.setIsOnEditorEnd(false);
      return;
    }
    const l = Ffa(s, a, o);
    let u = t === l;
    if (!u && !this._isMultiDiffEditor && !this.isLineVisible(l)) {
      u = this.getFirstVisibleWidgetInEditor() === this;
    }
    if (!u) {
      this.hideOverlay();
      this.setIsOnEditorEnd(false);
      return;
    }
    this._overlayDomNode.style.display = "block";
    this.layoutOverlayAtAnchor();
    this.setIsOnEditorEnd(this.isWidgetOnEditorEnd(s, o));
  }
  updatePosition(e) {
    const t = this._editor.getModel();
    if (!t || e <= 0 || e > t.getLineCount()) {
      this._position = null;
      this.hideOverlay();
      this._overlayPosition = null;
      try {
        this._editor.layoutOverlayWidget(this._overlayWidget);
      } catch {}
      return;
    }
    this._position = {
      position: {
        lineNumber: e,
        column: 1
      },
      preference: [0, 2]
    };
    try {
      this._editor.layoutContentWidget(this);
      try {
        this._editor.layoutOverlayWidget(this._overlayWidget);
      } catch {}
    } catch {
      this._position = null;
    }
  }
  validatePosition() {
    const e = this.line();
    const t = this._editor.getModel();
    if (!t || e <= 0 || e > t.getLineCount()) {
      this._position = null;
      this.hideOverlay();
      this._overlayPosition = null;
      try {
        this._editor.layoutOverlayWidget(this._overlayWidget);
      } catch {}
    }
  }
  dispose() {
    A2e._instances.delete(this);
    this._editor.removeContentWidget(this);
    try {
      this._editor.removeOverlayWidget(this._overlayWidget);
    } catch {}
    if (this._domNode) {
      this._domNode.remove();
    }
    if (this._overlayDomNode) {
      this._overlayDomNode.remove();
    }
    super.dispose();
  }
  getId() {
    return this.id;
  }
  getDomNode() {
    return this._domNode;
  }
  getPosition() {
    return this._position;
  }
  getRemovedText() {
    const e = this._diffChangeSourceRegistry.getDescriptorById(this.diffId);
    if (!e) {
      return;
    }
    const t = mmn(e.descriptor, new ar(this.line(), 1));
    if (t) {
      return t.removedTextLines.join(`
`);
    }
  }
};
qDa = A2e = __decorate([__param(5, mo), __param(6, fr), __param(7, uh), __param(8, ku), __param(9, K3), __param(10, ln), __param(11, I2)], qDa);

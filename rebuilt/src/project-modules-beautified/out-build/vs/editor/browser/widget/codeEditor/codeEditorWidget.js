"use strict";

// Module: out-build/vs/editor/browser/widget/codeEditor/codeEditorWidget.js
// Offset: 1885193 (bundle byte offset)
// Size: 47390 bytes
ri();
_s();
yn();
iw();
rt();
zr();
Ht();
zg();
dr();
hs();
si();
Wt();
E_();
So();
Nl();
Io();
Rde();
pk();
koe();
az();
tl();
ts();
db();
VFo();
_oA();
kVe();
Qh();
QE();
bv();
Cm();
FaA();
ZaA();
HY();
hvh();
qOn();
Cu();
Oh();
rcA();
euA();
ruA();
fAh();
suA();
ouA();
WS = class extends at {
  static {
    tbt = this;
  }
  static {
    this.dropIntoEditorDecorationOptions = Zh.register({
      description: "workbench-dnd-target",
      className: "dnd-target"
    });
  }
  get isChatCodeblock() {
    return this._configuration.isChatCodeblock;
  }
  get cursorCodeBlockType() {
    return this._configuration.cursorCodeBlockType;
  }
  get isSimpleWidget() {
    return this._configuration.isSimpleWidget;
  }
  get contextMenuId() {
    return this._configuration.contextMenuId;
  }
  get contextKeyService() {
    return this._contextKeyService;
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g) {
    super();
    this.languageConfigurationService = m;
    this._tooltipService = g;
    this._deliveryQueue = sih();
    this._contributions = this._register(new uwh());
    this._onDidDispose = this._register(new Qe());
    this.onDidDispose = this._onDidDispose.event;
    this._onDidChangeModelContent = this._register(new Qe({
      deliveryQueue: this._deliveryQueue
    }));
    this.onDidChangeModelContent = this._onDidChangeModelContent.event;
    this._onDidChangeModelLanguage = this._register(new Qe({
      deliveryQueue: this._deliveryQueue
    }));
    this.onDidChangeModelLanguage = this._onDidChangeModelLanguage.event;
    this._onDidChangeModelLanguageConfiguration = this._register(new Qe({
      deliveryQueue: this._deliveryQueue
    }));
    this.onDidChangeModelLanguageConfiguration = this._onDidChangeModelLanguageConfiguration.event;
    this._onDidChangeModelOptions = this._register(new Qe({
      deliveryQueue: this._deliveryQueue
    }));
    this.onDidChangeModelOptions = this._onDidChangeModelOptions.event;
    this._onDidChangeModelDecorations = this._register(new Qe({
      deliveryQueue: this._deliveryQueue
    }));
    this.onDidChangeModelDecorations = this._onDidChangeModelDecorations.event;
    this._onDidChangeModelTokens = this._register(new Qe({
      deliveryQueue: this._deliveryQueue
    }));
    this.onDidChangeModelTokens = this._onDidChangeModelTokens.event;
    this._onDidChangeConfiguration = this._register(new Qe({
      deliveryQueue: this._deliveryQueue
    }));
    this.onDidChangeConfiguration = this._onDidChangeConfiguration.event;
    this._onWillChangeModel = this._register(new Qe({
      deliveryQueue: this._deliveryQueue
    }));
    this.onWillChangeModel = this._onWillChangeModel.event;
    this._onDidChangeModel = this._register(new Qe({
      deliveryQueue: this._deliveryQueue
    }));
    this.onDidChangeModel = this._onDidChangeModel.event;
    this._onDidChangeCursorPosition = this._register(new Qe({
      deliveryQueue: this._deliveryQueue
    }));
    this.onDidChangeCursorPosition = this._onDidChangeCursorPosition.event;
    this._onDidChangeCursorSelection = this._register(new Qe({
      deliveryQueue: this._deliveryQueue
    }));
    this.onDidChangeCursorSelection = this._onDidChangeCursorSelection.event;
    this._onDidAttemptReadOnlyEdit = this._register(new GH(this._contributions, this._deliveryQueue));
    this.onDidAttemptReadOnlyEdit = this._onDidAttemptReadOnlyEdit.event;
    this._onDidLayoutChange = this._register(new Qe({
      deliveryQueue: this._deliveryQueue
    }));
    this.onDidLayoutChange = this._onDidLayoutChange.event;
    this._editorTextFocus = this._register(new CIc({
      deliveryQueue: this._deliveryQueue
    }));
    this.onDidFocusEditorText = this._editorTextFocus.onDidChangeToTrue;
    this.onDidBlurEditorText = this._editorTextFocus.onDidChangeToFalse;
    this._editorWidgetFocus = this._register(new CIc({
      deliveryQueue: this._deliveryQueue
    }));
    this.onDidFocusEditorWidget = this._editorWidgetFocus.onDidChangeToTrue;
    this.onDidBlurEditorWidget = this._editorWidgetFocus.onDidChangeToFalse;
    this._onWillType = this._register(new GH(this._contributions, this._deliveryQueue));
    this.onWillType = this._onWillType.event;
    this._onDidType = this._register(new GH(this._contributions, this._deliveryQueue));
    this.onDidType = this._onDidType.event;
    this._onDidCompositionStart = this._register(new GH(this._contributions, this._deliveryQueue));
    this.onDidCompositionStart = this._onDidCompositionStart.event;
    this._onDidCompositionEnd = this._register(new GH(this._contributions, this._deliveryQueue));
    this.onDidCompositionEnd = this._onDidCompositionEnd.event;
    this._onDidPaste = this._register(new GH(this._contributions, this._deliveryQueue));
    this.onDidPaste = this._onDidPaste.event;
    this._onMouseUp = this._register(new GH(this._contributions, this._deliveryQueue));
    this.onMouseUp = this._onMouseUp.event;
    this._onMouseDown = this._register(new GH(this._contributions, this._deliveryQueue));
    this.onMouseDown = this._onMouseDown.event;
    this._onMouseDrag = this._register(new GH(this._contributions, this._deliveryQueue));
    this.onMouseDrag = this._onMouseDrag.event;
    this._onMouseDrop = this._register(new GH(this._contributions, this._deliveryQueue));
    this.onMouseDrop = this._onMouseDrop.event;
    this._onMouseDropCanceled = this._register(new GH(this._contributions, this._deliveryQueue));
    this.onMouseDropCanceled = this._onMouseDropCanceled.event;
    this._onDropIntoEditor = this._register(new GH(this._contributions, this._deliveryQueue));
    this.onDropIntoEditor = this._onDropIntoEditor.event;
    this._onContextMenu = this._register(new GH(this._contributions, this._deliveryQueue));
    this.onContextMenu = this._onContextMenu.event;
    this._onMouseMove = this._register(new GH(this._contributions, this._deliveryQueue));
    this.onMouseMove = this._onMouseMove.event;
    this._onMouseLeave = this._register(new GH(this._contributions, this._deliveryQueue));
    this.onMouseLeave = this._onMouseLeave.event;
    this._onMouseWheel = this._register(new GH(this._contributions, this._deliveryQueue));
    this.onMouseWheel = this._onMouseWheel.event;
    this._onKeyUp = this._register(new GH(this._contributions, this._deliveryQueue));
    this.onKeyUp = this._onKeyUp.event;
    this._onKeyDown = this._register(new GH(this._contributions, this._deliveryQueue));
    this.onKeyDown = this._onKeyDown.event;
    this._onDidContentSizeChange = this._register(new Qe({
      deliveryQueue: this._deliveryQueue
    }));
    this.onDidContentSizeChange = this._onDidContentSizeChange.event;
    this._onDidScrollChange = this._register(new Qe({
      deliveryQueue: this._deliveryQueue
    }));
    this.onDidScrollChange = this._onDidScrollChange.event;
    this._onDidChangeViewZones = this._register(new Qe({
      deliveryQueue: this._deliveryQueue
    }));
    this.onDidChangeViewZones = this._onDidChangeViewZones.event;
    this._onDidChangeHiddenAreas = this._register(new Qe({
      deliveryQueue: this._deliveryQueue
    }));
    this.onDidChangeHiddenAreas = this._onDidChangeHiddenAreas.event;
    this._updateCounter = 0;
    this._onWillTriggerEditorOperationEvent = this._register(new Qe());
    this.onWillTriggerEditorOperationEvent = this._onWillTriggerEditorOperationEvent.event;
    this._onBeginUpdate = this._register(new Qe());
    this.onBeginUpdate = this._onBeginUpdate.event;
    this._onEndUpdate = this._register(new Qe());
    this.onEndUpdate = this._onEndUpdate.event;
    this._onBeforeExecuteEdit = this._register(new Qe());
    this.onBeforeExecuteEdit = this._onBeforeExecuteEdit.event;
    this._actions = new Map();
    this._bannerDomNode = null;
    this._dropIntoEditorDecorations = this.createDecorationsCollection();
    this.inComposition = false;
    s.willCreateCodeEditor();
    this.shouldShowHover = true;
    const f = {
      ...t,
      ...(i.hideLineNumbers ? {
        lineNumbers: "off"
      } : {})
    };
    this._domElement = e;
    this._overflowWidgetsDomNode = f.overflowWidgetsDomNode;
    delete f.overflowWidgetsDomNode;
    this._id = ++hwh;
    this._decorationTypeKeysToIds = {};
    this._decorationTypeSubtypes = {};
    this._telemetryData = i.telemetryData;
    this._isMultiDiffEditor = i.isMultiDiffEditor ?? false;
    this._isAddedMultiDiffEditor = i.isAddedMultiDiffEditor ?? false;
    this._isDeletedMultiDiffEditor = i.isDeletedMultiDiffEditor ?? false;
    this._configuration = this._register(this._createConfiguration(i.isSimpleWidget || false, i.contextMenuId ?? (i.isSimpleWidget ? st.SimpleEditorContext : st.EditorContext), f, d, i.isChatCodeblock ?? false, i.cursorCodeBlockType));
    this._register(this._configuration.onDidChange(C => {
      this._onDidChangeConfiguration.fire(C);
      const x = this._configuration.options;
      if (C.hasChanged(151)) {
        const I = x.get(151);
        this._onDidLayoutChange.fire(I);
      }
    }));
    this._contextKeyService = this._register(a.createScoped(this._domElement));
    if (i.contextKeyValues) {
      for (const [C, x] of Object.entries(i.contextKeyValues)) {
        this._contextKeyService.createKey(C, x);
      }
    }
    this._notificationService = u;
    this._codeEditorService = s;
    this._commandService = o;
    this._themeService = l;
    this._register(new gwh(this, this._contextKeyService, this._tooltipService));
    this._register(new fwh(this, this._contextKeyService, p));
    this._instantiationService = this._register(r.createChild(new EA([wi, this._contextKeyService])));
    this._modelData = null;
    this._contentWidgets = {};
    this._overlayWidgets = {};
    this._glyphMarginWidgets = {};
    let A;
    if (Array.isArray(i.contributions)) {
      A = i.contributions;
    } else {
      A = SC.getEditorContributions();
    }
    this._contributions.initialize(this, A, this._instantiationService);
    for (const C of SC.getEditorActions()) {
      if (this._actions.has(C.id)) {
        Gc(new Error(`Cannot have two actions with the same id ${C.id}`));
        continue;
      }
      const x = new Vmh(C.id, C.label, C.alias, C.metadata, C.precondition ?? undefined, I => this._instantiationService.invokeFunction(B => Promise.resolve(C.runEditorCommand(B, this, I))), this._contextKeyService);
      this._actions.set(x.id, x);
    }
    const w = () => !this._configuration.options.get(96) && this._configuration.options.get(36).enabled;
    this._register(new PH(this._domElement, {
      onDragOver: C => {
        if (!w()) {
          return;
        }
        const x = this.getTargetAtClientPoint(C.clientX, C.clientY);
        if (x?.position) {
          this.showDropIndicatorAt(x.position);
        }
      },
      onDrop: async C => {
        if (!w() || (this.removeDropIndicator(), !C.dataTransfer)) {
          return;
        }
        const x = this.getTargetAtClientPoint(C.clientX, C.clientY);
        if (x?.position) {
          this._onDropIntoEditor.fire({
            position: x.position,
            event: C
          });
        }
      },
      onDragLeave: () => {
        this.removeDropIndicator();
      },
      onDragEnd: () => {
        this.removeDropIndicator();
      }
    }));
    this._codeEditorService.addCodeEditor(this);
  }
  writeScreenReaderContent(e) {
    this._modelData?.view.writeScreenReaderContent(e);
  }
  _createConfiguration(e, t, i, r, s = false, o = undefined) {
    return new HOn(e, t, i, this._domElement, r, s, o);
  }
  getId() {
    return this.getEditorType() + ":" + this._id;
  }
  getEditorType() {
    return SVe.ICodeEditor;
  }
  dispose() {
    this._codeEditorService.removeCodeEditor(this);
    this._actions.clear();
    this._contentWidgets = {};
    this._overlayWidgets = {};
    this._removeDecorationTypes();
    this._postDetachModelCleanup(this._detachModel());
    this._onDidDispose.fire();
    super.dispose();
  }
  invokeWithinContext(e) {
    return this._instantiationService.invokeFunction(e);
  }
  updateOptions(e) {
    this._configuration.updateOptions(e || {});
  }
  getOptions() {
    return this._configuration.options;
  }
  getOption(e) {
    return this._configuration.options.get(e);
  }
  getRawOptions() {
    return this._configuration.getRawOptions();
  }
  getOverflowWidgetsDomNode() {
    return this._overflowWidgetsDomNode;
  }
  getConfiguredWordAtPosition(e) {
    if (this._modelData) {
      return B6.getWordAtPosition(this._modelData.model, this._configuration.options.get(136), this._configuration.options.get(135), e);
    } else {
      return null;
    }
  }
  getValue(e = null) {
    if (!this._modelData) {
      return "";
    }
    const t = !!e && !!e.preserveBOM;
    let i = 0;
    if (e && e.lineEnding && e.lineEnding === `
`) {
      i = 1;
    } else if (e && e.lineEnding && e.lineEnding === `\r
`) {
      i = 2;
    }
    return this._modelData.model.getValue(i, t);
  }
  setValue(e) {
    try {
      this._beginUpdate();
      if (!this._modelData) {
        return;
      }
      this._modelData.model.setValue(e);
    } finally {
      this._endUpdate();
    }
  }
  getModel() {
    if (this._modelData) {
      return this._modelData.model;
    } else {
      return null;
    }
  }
  getIsMultiDiffEditor() {
    return this._isMultiDiffEditor;
  }
  getIsAddedMultiDiffEditor() {
    return this._isAddedMultiDiffEditor;
  }
  getIsDeletedMultiDiffEditor() {
    return this._isDeletedMultiDiffEditor;
  }
  setModel(e = null) {
    try {
      this._beginUpdate();
      const t = e;
      if (this._modelData === null && t === null || this._modelData && this._modelData.model === t) {
        return;
      }
      const i = {
        oldModelUrl: this._modelData?.model.uri || null,
        newModelUrl: t?.uri || null
      };
      this._onWillChangeModel.fire(i);
      const r = this.hasTextFocus();
      const s = this._detachModel();
      this._attachModel(t);
      if (this.hasModel()) {
        if (r) {
          this.focus();
        }
      } else {
        this._editorTextFocus.setValue(false);
        this._editorWidgetFocus.setValue(false);
      }
      this._removeDecorationTypes();
      this._onDidChangeModel.fire(i);
      this._postDetachModelCleanup(s);
      this._contributionsDisposable = this._contributions.onAfterModelAttached();
    } finally {
      this._endUpdate();
    }
  }
  _removeDecorationTypes() {
    this._decorationTypeKeysToIds = {};
    if (this._decorationTypeSubtypes) {
      for (const e in this._decorationTypeSubtypes) {
        const t = this._decorationTypeSubtypes[e];
        for (const i in t) {
          this._removeDecorationType(e + "-" + i);
        }
      }
      this._decorationTypeSubtypes = {};
    }
  }
  getVisibleRanges() {
    if (this._modelData) {
      return this._modelData.viewModel.getVisibleRanges();
    } else {
      return [];
    }
  }
  getVisibleRangesPlusViewportAboveBelow() {
    if (this._modelData) {
      return this._modelData.viewModel.getVisibleRangesPlusViewportAboveBelow();
    } else {
      return [];
    }
  }
  getWhitespaces() {
    if (this._modelData) {
      return this._modelData.viewModel.viewLayout.getWhitespaces();
    } else {
      return [];
    }
  }
  static _getVerticalOffsetAfterPosition(e, t, i, r) {
    const s = e.model.validatePosition({
      lineNumber: t,
      column: i
    });
    const o = e.viewModel.coordinatesConverter.convertModelPositionToViewPosition(s);
    return e.viewModel.viewLayout.getVerticalOffsetAfterLineNumber(o.lineNumber, r);
  }
  getTopForLineNumber(e, t = false) {
    if (this._modelData) {
      return tbt._getVerticalOffsetForPosition(this._modelData, e, 1, t);
    } else {
      return -1;
    }
  }
  getTopForPosition(e, t) {
    if (this._modelData) {
      return tbt._getVerticalOffsetForPosition(this._modelData, e, t, false);
    } else {
      return -1;
    }
  }
  static _getVerticalOffsetForPosition(e, t, i, r = false) {
    const s = e.model.validatePosition({
      lineNumber: t,
      column: i
    });
    const o = e.viewModel.coordinatesConverter.convertModelPositionToViewPosition(s);
    return e.viewModel.viewLayout.getVerticalOffsetForLineNumber(o.lineNumber, r);
  }
  getBottomForLineNumber(e, t = false) {
    if (!this._modelData) {
      return -1;
    }
    const i = this._modelData.model.getLineMaxColumn(e);
    return tbt._getVerticalOffsetAfterPosition(this._modelData, e, i, t);
  }
  setHiddenAreas(e, t, i) {
    this._modelData?.viewModel.setHiddenAreas(e.map(r => Zt.lift(r)), t, i);
  }
  getVisibleColumnFromPosition(e) {
    if (!this._modelData) {
      return e.column;
    }
    const t = this._modelData.model.validatePosition(e);
    const i = this._modelData.model.getOptions().tabSize;
    return ZP.visibleColumnFromColumn(this._modelData.model.getLineContent(t.lineNumber), t.column, i) + 1;
  }
  getStatusbarColumn(e) {
    if (!this._modelData) {
      return e.column;
    }
    const t = this._modelData.model.validatePosition(e);
    const i = this._modelData.model.getOptions().tabSize;
    return ZP.toStatusbarColumn(this._modelData.model.getLineContent(t.lineNumber), t.column, i);
  }
  getPosition() {
    if (this._modelData) {
      return this._modelData.viewModel.getPosition();
    } else {
      return null;
    }
  }
  setPosition(e, t = "api") {
    if (this._modelData) {
      if (!ar.isIPosition(e)) {
        throw new Error("Invalid arguments");
      }
      this._modelData.viewModel.setSelections(t, [{
        selectionStartLineNumber: e.lineNumber,
        selectionStartColumn: e.column,
        positionLineNumber: e.lineNumber,
        positionColumn: e.column
      }]);
    }
  }
  _sendRevealRange(e, t, i, r) {
    if (!this._modelData) {
      return;
    }
    if (!Zt.isIRange(e)) {
      throw new Error("Invalid arguments");
    }
    const s = this._modelData.model.validateRange(e);
    const o = this._modelData.viewModel.coordinatesConverter.convertModelRangeToViewRange(s);
    this._modelData.viewModel.revealRange("api", i, o, t, r);
  }
  revealLine(e, t = 0) {
    this._revealLine(e, 0, t);
  }
  revealLineInCenter(e, t = 0) {
    this._revealLine(e, 1, t);
  }
  revealLineInCenterIfOutsideViewport(e, t = 0) {
    this._revealLine(e, 2, t);
  }
  revealLineNearTop(e, t = 0) {
    this._revealLine(e, 5, t);
  }
  _revealLine(e, t, i) {
    if (typeof e != "number") {
      throw new Error("Invalid arguments");
    }
    this._sendRevealRange(new Zt(e, 1, e, 1), t, false, i);
  }
  revealPosition(e, t = 0) {
    this._revealPosition(e, 0, true, t);
  }
  revealPositionInCenter(e, t = 0) {
    this._revealPosition(e, 1, true, t);
  }
  revealPositionInCenterIfOutsideViewport(e, t = 0) {
    this._revealPosition(e, 2, true, t);
  }
  revealPositionNearTop(e, t = 0) {
    this._revealPosition(e, 5, true, t);
  }
  _revealPosition(e, t, i, r) {
    if (!ar.isIPosition(e)) {
      throw new Error("Invalid arguments");
    }
    this._sendRevealRange(new Zt(e.lineNumber, e.column, e.lineNumber, e.column), t, i, r);
  }
  getSelection() {
    if (this._modelData) {
      return this._modelData.viewModel.getSelection();
    } else {
      return null;
    }
  }
  getSelections() {
    if (this._modelData) {
      return this._modelData.viewModel.getSelections();
    } else {
      return null;
    }
  }
  setSelection(e, t = "api") {
    const i = Vl.isISelection(e);
    const r = Zt.isIRange(e);
    if (!i && !r) {
      throw new Error("Invalid arguments");
    }
    if (i) {
      this._setSelectionImpl(e, t);
    } else if (r) {
      const s = {
        selectionStartLineNumber: e.startLineNumber,
        selectionStartColumn: e.startColumn,
        positionLineNumber: e.endLineNumber,
        positionColumn: e.endColumn
      };
      this._setSelectionImpl(s, t);
    }
  }
  _setSelectionImpl(e, t) {
    if (!this._modelData) {
      return;
    }
    const i = new Vl(e.selectionStartLineNumber, e.selectionStartColumn, e.positionLineNumber, e.positionColumn);
    this._modelData.viewModel.setSelections(t, [i]);
  }
  revealLines(e, t, i = 0) {
    this._revealLines(e, t, 0, i);
  }
  revealLinesInCenter(e, t, i = 0) {
    this._revealLines(e, t, 1, i);
  }
  revealLinesInCenterIfOutsideViewport(e, t, i = 0) {
    this._revealLines(e, t, 2, i);
  }
  revealLinesNearTop(e, t, i = 0) {
    this._revealLines(e, t, 5, i);
  }
  _revealLines(e, t, i, r) {
    if (typeof e != "number" || typeof t != "number") {
      throw new Error("Invalid arguments");
    }
    this._sendRevealRange(new Zt(e, 1, t, 1), i, false, r);
  }
  revealRange(e, t = 0, i = false, r = true) {
    this._revealRange(e, i ? 1 : 0, r, t);
  }
  revealRangeInCenter(e, t = 0) {
    this._revealRange(e, 1, true, t);
  }
  revealRangeInCenterIfOutsideViewport(e, t = 0) {
    this._revealRange(e, 2, true, t);
  }
  revealRangeNearTop(e, t = 0) {
    this._revealRange(e, 5, true, t);
  }
  revealRangeNearTopIfOutsideViewport(e, t = 0) {
    this._revealRange(e, 6, true, t);
  }
  revealRangeAtTop(e, t = 0) {
    this._revealRange(e, 3, true, t);
  }
  _revealRange(e, t, i, r) {
    if (!Zt.isIRange(e)) {
      throw new Error("Invalid arguments");
    }
    this._sendRevealRange(Zt.lift(e), t, i, r);
  }
  setSelections(e, t = "api", i = 0) {
    if (this._modelData) {
      if (!e || e.length === 0) {
        throw new Error("Invalid arguments");
      }
      for (let r = 0, s = e.length; r < s; r++) {
        if (!Vl.isISelection(e[r])) {
          throw new Error("Invalid arguments");
        }
      }
      this._modelData.viewModel.setSelections(t, e, i);
    }
  }
  getContentWidth() {
    if (this._modelData) {
      return this._modelData.viewModel.viewLayout.getContentWidth();
    } else {
      return -1;
    }
  }
  getScrollWidth() {
    if (this._modelData) {
      return this._modelData.viewModel.viewLayout.getScrollWidth();
    } else {
      return -1;
    }
  }
  getScrollLeft() {
    if (this._modelData) {
      return this._modelData.viewModel.viewLayout.getCurrentScrollLeft();
    } else {
      return -1;
    }
  }
  getContentHeight() {
    if (this._modelData) {
      return this._modelData.viewModel.viewLayout.getContentHeight();
    } else {
      return -1;
    }
  }
  getScrollHeight() {
    if (this._modelData) {
      return this._modelData.viewModel.viewLayout.getScrollHeight();
    } else {
      return -1;
    }
  }
  getScrollTop() {
    if (this._modelData) {
      return this._modelData.viewModel.viewLayout.getCurrentScrollTop();
    } else {
      return -1;
    }
  }
  setScrollLeft(e, t = 1) {
    if (this._modelData) {
      if (typeof e != "number") {
        throw new Error("Invalid arguments");
      }
      this._modelData.viewModel.viewLayout.setScrollPosition({
        scrollLeft: e
      }, t);
    }
  }
  setScrollTop(e, t = 1) {
    if (this._modelData) {
      if (typeof e != "number") {
        throw new Error("Invalid arguments");
      }
      this._modelData.viewModel.viewLayout.setScrollPosition({
        scrollTop: e
      }, t);
    }
  }
  setScrollPosition(e, t = 1) {
    if (this._modelData) {
      this._modelData.viewModel.viewLayout.setScrollPosition(e, t);
    }
  }
  hasPendingScrollAnimation() {
    if (this._modelData) {
      return this._modelData.viewModel.viewLayout.hasPendingScrollAnimation();
    } else {
      return false;
    }
  }
  saveViewState() {
    if (!this._modelData) {
      return null;
    }
    const e = this._contributions.saveViewState();
    const t = this._modelData.viewModel.saveCursorState();
    const i = this._modelData.viewModel.saveState();
    return {
      cursorState: t,
      viewState: i,
      contributionsState: e
    };
  }
  restoreViewState(e) {
    if (!this._modelData || !this._modelData.hasRealView) {
      return;
    }
    const t = e;
    if (t && t.cursorState && t.viewState) {
      const i = t.cursorState;
      if (Array.isArray(i)) {
        if (i.length > 0) {
          this._modelData.viewModel.restoreCursorState(i);
        }
      } else {
        this._modelData.viewModel.restoreCursorState([i]);
      }
      this._contributions.restoreViewState(t.contributionsState || {});
      const r = this._modelData.viewModel.reduceRestoreState(t.viewState);
      this._modelData.view.restoreState(r);
    }
  }
  handleInitialized() {
    this._getViewModel()?.visibleLinesStabilized();
  }
  onVisible() {
    this._modelData?.view.refreshFocusState();
  }
  onHide() {
    this._modelData?.view.refreshFocusState();
  }
  getContribution(e) {
    return this._contributions.get(e);
  }
  getActions() {
    return Array.from(this._actions.values());
  }
  getSupportedActions() {
    let e = this.getActions();
    e = e.filter(t => t.isSupported());
    return e;
  }
  getAction(e) {
    return this._actions.get(e) || null;
  }
  trigger(e, t, i) {
    i = i || {};
    try {
      this._onWillTriggerEditorOperationEvent.fire({
        source: e,
        handlerId: t,
        payload: i
      });
      this._beginUpdate();
      switch (t) {
        case "compositionStart":
          this._startComposition();
          return;
        case "compositionEnd":
          this._endComposition(e);
          return;
        case "type":
          {
            const s = i;
            this._type(e, s.text || "");
            return;
          }
        case "replacePreviousChar":
          {
            const s = i;
            this._compositionType(e, s.text || "", s.replaceCharCnt || 0, 0, 0);
            return;
          }
        case "compositionType":
          {
            const s = i;
            this._compositionType(e, s.text || "", s.replacePrevCharCnt || 0, s.replaceNextCharCnt || 0, s.positionDelta || 0);
            return;
          }
        case "paste":
          {
            const s = i;
            this._paste(e, s.text || "", s.pasteOnNewLine || false, s.multicursorText || null, s.mode || null, s.clipboardEvent);
            return;
          }
        case "cut":
          this._cut(e);
          return;
      }
      const r = this.getAction(t);
      if (r) {
        Promise.resolve(r.run(i)).then(undefined, Gc);
        return;
      }
      if (!this._modelData || this._triggerEditorCommand(e, t, i)) {
        return;
      }
      this._triggerCommand(t, i);
    } finally {
      this._endUpdate();
    }
  }
  _triggerCommand(e, t) {
    this._commandService.executeCommand(e, t);
  }
  _startComposition() {
    if (this._modelData) {
      this.inComposition = true;
      this._modelData.viewModel.startComposition();
      this._onDidCompositionStart.fire();
    }
  }
  _endComposition(e) {
    if (this._modelData) {
      this.inComposition = false;
      this._modelData.viewModel.endComposition(e);
      this._onDidCompositionEnd.fire();
    }
  }
  _type(e, t) {
    if (!!this._modelData && t.length !== 0) {
      if (e === "keyboard") {
        this._onWillType.fire(t);
      }
      this._modelData.viewModel.type(t, e);
      if (e === "keyboard") {
        this._onDidType.fire(t);
      }
    }
  }
  _compositionType(e, t, i, r, s) {
    if (this._modelData) {
      this._modelData.viewModel.compositionType(t, i, r, s, e);
    }
  }
  _paste(e, t, i, r, s, o) {
    if (!this._modelData) {
      return;
    }
    const a = this._modelData.viewModel;
    const l = a.getSelection().getStartPosition();
    a.paste(t, i, r, e);
    const u = a.getSelection().getStartPosition();
    if (e === "keyboard") {
      this._onDidPaste.fire({
        clipboardEvent: o,
        range: new Zt(l.lineNumber, l.column, u.lineNumber, u.column),
        languageId: s
      });
    }
  }
  _cut(e) {
    if (this._modelData) {
      this._modelData.viewModel.cut(e);
    }
  }
  _triggerEditorCommand(e, t, i) {
    const r = SC.getEditorCommand(t);
    if (r) {
      i = i || {};
      i.source = e;
      this._instantiationService.invokeFunction(s => {
        Promise.resolve(r.runEditorCommand(s, this, i)).then(undefined, Gc);
      });
      return true;
    } else {
      return false;
    }
  }
  _getViewModel() {
    if (this._modelData) {
      return this._modelData.viewModel;
    } else {
      return null;
    }
  }
  pushUndoStop() {
    if (!this._modelData || this._configuration.options.get(96)) {
      return false;
    } else {
      this._modelData.model.pushStackElement();
      return true;
    }
  }
  popUndoStop() {
    if (!this._modelData || this._configuration.options.get(96)) {
      return false;
    } else {
      this._modelData.model.popStackElement();
      return true;
    }
  }
  executeEdits(e, t, i) {
    if (!this._modelData || this._configuration.options.get(96)) {
      return false;
    }
    let r;
    if (i) {
      if (Array.isArray(i)) {
        r = () => i;
      } else {
        r = i;
      }
    } else {
      r = () => null;
    }
    this._onBeforeExecuteEdit.fire({
      source: e ?? undefined
    });
    this._modelData.viewModel.executeEdits(e, t, r);
    return true;
  }
  executeCommand(e, t) {
    if (this._modelData) {
      this._modelData.viewModel.executeCommand(t, e);
    }
  }
  executeCommands(e, t) {
    if (this._modelData) {
      this._modelData.viewModel.executeCommands(t, e);
    }
  }
  createDecorationsCollection(e) {
    return new bwh(this, e);
  }
  changeDecorations(e) {
    if (this._modelData) {
      return this._modelData.model.changeDecorations(e, this._id);
    } else {
      return null;
    }
  }
  getLineDecorations(e) {
    if (this._modelData) {
      return this._modelData.model.getLineDecorations(e, this._id, K4o(this._configuration.options));
    } else {
      return null;
    }
  }
  getDecorationsInRange(e) {
    if (this._modelData) {
      return this._modelData.model.getDecorationsInRange(e, this._id, K4o(this._configuration.options));
    } else {
      return null;
    }
  }
  deltaDecorations(e, t) {
    if (this._modelData) {
      if (e.length === 0 && t.length === 0) {
        return e;
      } else {
        return this._modelData.model.deltaDecorations(e, t, this._id);
      }
    } else {
      return [];
    }
  }
  removeDecorations(e) {
    if (!!this._modelData && e.length !== 0) {
      this._modelData.model.changeDecorations(t => {
        t.deltaDecorations(e, []);
      });
    }
  }
  setDecorationsByType(e, t, i) {
    const r = {};
    const s = this._decorationTypeSubtypes[t] || {};
    this._decorationTypeSubtypes[t] = r;
    const o = [];
    for (const l of i) {
      let u = t;
      if (l.renderOptions) {
        const m = VC(l.renderOptions).toString(16);
        u = t + "-" + m;
        if (!s[m] && !r[m]) {
          this._registerDecorationType(e, u, l.renderOptions, t);
        }
        r[m] = true;
      }
      const d = this._resolveDecorationOptions(u, !!l.hoverMessage);
      if (l.hoverMessage) {
        d.hoverMessage = l.hoverMessage;
      }
      o.push({
        range: l.range,
        options: d
      });
    }
    for (const l in s) {
      if (!r[l]) {
        this._removeDecorationType(t + "-" + l);
      }
    }
    const a = this._decorationTypeKeysToIds[t] || [];
    this.changeDecorations(l => this._decorationTypeKeysToIds[t] = l.deltaDecorations(a, o));
  }
  setDecorationsByTypeFast(e, t) {
    const i = this._decorationTypeSubtypes[e] || {};
    for (const a in i) {
      this._removeDecorationType(e + "-" + a);
    }
    this._decorationTypeSubtypes[e] = {};
    const r = Zh.createDynamic(this._resolveDecorationOptions(e, false));
    const s = new Array(t.length);
    for (let a = 0, l = t.length; a < l; a++) {
      s[a] = {
        range: t[a],
        options: r
      };
    }
    const o = this._decorationTypeKeysToIds[e] || [];
    this.changeDecorations(a => this._decorationTypeKeysToIds[e] = a.deltaDecorations(o, s));
  }
  removeDecorationsByType(e) {
    const t = this._decorationTypeKeysToIds[e];
    if (t) {
      this.changeDecorations(i => i.deltaDecorations(t, []));
    }
    if (this._decorationTypeKeysToIds.hasOwnProperty(e)) {
      delete this._decorationTypeKeysToIds[e];
    }
    if (this._decorationTypeSubtypes.hasOwnProperty(e)) {
      delete this._decorationTypeSubtypes[e];
    }
  }
  getLayoutInfo() {
    return this._configuration.options.get(151);
  }
  createOverviewRuler(e) {
    if (!this._modelData || !this._modelData.hasRealView) {
      return null;
    } else {
      return this._modelData.view.createOverviewRuler(e);
    }
  }
  getContainerDomNode() {
    return this._domElement;
  }
  getDomNode() {
    if (!this._modelData || !this._modelData.hasRealView) {
      return null;
    } else {
      return this._modelData.view.domNode.domNode;
    }
  }
  delegateVerticalScrollbarPointerDown(e) {
    if (!!this._modelData && !!this._modelData.hasRealView) {
      this._modelData.view.delegateVerticalScrollbarPointerDown(e);
    }
  }
  delegateScrollFromMouseWheelEvent(e) {
    if (!!this._modelData && !!this._modelData.hasRealView) {
      this._modelData.view.delegateScrollFromMouseWheelEvent(e);
    }
  }
  layout(e, t = false) {
    this._configuration.observeContainer(e);
    if (!t) {
      this.render();
    }
  }
  focus() {
    if (!!this._modelData && !!this._modelData.hasRealView) {
      this._modelData.view.focus();
    }
  }
  hasTextFocus() {
    if (!this._modelData || !this._modelData.hasRealView) {
      return false;
    } else {
      return this._modelData.view.isFocused();
    }
  }
  hasWidgetFocus() {
    if (!this._modelData || !this._modelData.hasRealView) {
      return false;
    } else {
      return this._modelData.view.isWidgetFocused();
    }
  }
  addContentWidget(e) {
    const t = {
      widget: e,
      position: e.getPosition()
    };
    if (this._contentWidgets.hasOwnProperty(e.getId())) {
      console.warn("Overwriting a content widget with the same id:" + e.getId());
    }
    this._contentWidgets[e.getId()] = t;
    if (this._modelData && this._modelData.hasRealView) {
      this._modelData.view.addContentWidget(t);
    }
  }
  layoutContentWidget(e) {
    const t = e.getId();
    if (this._contentWidgets.hasOwnProperty(t)) {
      const i = this._contentWidgets[t];
      i.position = e.getPosition();
      if (this._modelData && this._modelData.hasRealView) {
        this._modelData.view.layoutContentWidget(i);
      }
    }
  }
  removeContentWidget(e) {
    const t = e.getId();
    if (this._contentWidgets.hasOwnProperty(t)) {
      const i = this._contentWidgets[t];
      delete this._contentWidgets[t];
      if (this._modelData && this._modelData.hasRealView) {
        this._modelData.view.removeContentWidget(i);
      }
    }
  }
  addOverlayWidget(e) {
    const t = {
      widget: e,
      position: e.getPosition()
    };
    if (this._overlayWidgets.hasOwnProperty(e.getId())) {
      console.warn("Overwriting an overlay widget with the same id.");
    }
    this._overlayWidgets[e.getId()] = t;
    if (this._modelData && this._modelData.hasRealView) {
      this._modelData.view.addOverlayWidget(t);
    }
  }
  layoutOverlayWidget(e) {
    const t = e.getId();
    if (this._overlayWidgets.hasOwnProperty(t)) {
      const i = this._overlayWidgets[t];
      i.position = e.getPosition();
      if (this._modelData && this._modelData.hasRealView) {
        this._modelData.view.layoutOverlayWidget(i);
      }
    }
  }
  removeOverlayWidget(e) {
    const t = e.getId();
    if (this._overlayWidgets.hasOwnProperty(t)) {
      const i = this._overlayWidgets[t];
      delete this._overlayWidgets[t];
      if (this._modelData && this._modelData.hasRealView) {
        this._modelData.view.removeOverlayWidget(i);
      }
    }
  }
  addGlyphMarginWidget(e) {
    const t = {
      widget: e,
      position: e.getPosition()
    };
    if (this._glyphMarginWidgets.hasOwnProperty(e.getId())) {
      console.warn("Overwriting a glyph margin widget with the same id.");
    }
    this._glyphMarginWidgets[e.getId()] = t;
    if (this._modelData && this._modelData.hasRealView) {
      this._modelData.view.addGlyphMarginWidget(t);
    }
  }
  layoutGlyphMarginWidget(e) {
    const t = e.getId();
    if (this._glyphMarginWidgets.hasOwnProperty(t)) {
      const i = this._glyphMarginWidgets[t];
      i.position = e.getPosition();
      if (this._modelData && this._modelData.hasRealView) {
        this._modelData.view.layoutGlyphMarginWidget(i);
      }
    }
  }
  removeGlyphMarginWidget(e) {
    const t = e.getId();
    if (this._glyphMarginWidgets.hasOwnProperty(t)) {
      const i = this._glyphMarginWidgets[t];
      delete this._glyphMarginWidgets[t];
      if (this._modelData && this._modelData.hasRealView) {
        this._modelData.view.removeGlyphMarginWidget(i);
      }
    }
  }
  changeViewZones(e) {
    if (!!this._modelData && !!this._modelData.hasRealView) {
      this._modelData.view.change(e);
    }
  }
  getTargetAtClientPoint(e, t) {
    if (!this._modelData || !this._modelData.hasRealView) {
      return null;
    } else {
      return this._modelData.view.getTargetAtClientPoint(e, t);
    }
  }
  getScrolledVisiblePosition(e) {
    if (!this._modelData || !this._modelData.hasRealView) {
      return null;
    }
    const t = this._modelData.model.validatePosition(e);
    const i = this._configuration.options;
    const r = i.get(151);
    const s = tbt._getVerticalOffsetForPosition(this._modelData, t.lineNumber, t.column) - this.getScrollTop();
    const o = this._modelData.view.getOffsetForColumn(t.lineNumber, t.column) + r.glyphMarginWidth + r.lineNumbersWidth + r.decorationsWidth - this.getScrollLeft();
    return {
      top: s,
      left: o,
      height: i.get(68)
    };
  }
  getOffsetForColumn(e, t) {
    if (!this._modelData || !this._modelData.hasRealView) {
      return -1;
    } else {
      return this._modelData.view.getOffsetForColumn(e, t);
    }
  }
  render(e = false) {
    if (!!this._modelData && !!this._modelData.hasRealView) {
      this._modelData.viewModel.batchEvents(() => {
        this._modelData.view.render(true, e);
      });
    }
  }
  setAriaOptions(e) {
    if (!!this._modelData && !!this._modelData.hasRealView) {
      this._modelData.view.setAriaOptions(e);
    }
  }
  applyFontInfo(e) {
    bF(e, this._configuration.options.get(52));
  }
  setBanner(e, t) {
    if (this._bannerDomNode && this._domElement.contains(this._bannerDomNode)) {
      this._bannerDomNode.remove();
    }
    this._bannerDomNode = e;
    this._configuration.setReservedHeight(e ? t : 0);
    if (this._bannerDomNode) {
      this._domElement.prepend(this._bannerDomNode);
    }
  }
  _attachModel(e) {
    if (!e) {
      this._modelData = null;
      return;
    }
    const t = [];
    this._domElement.setAttribute("data-mode-id", e.getLanguageId());
    this._configuration.setIsDominatedByLongLines(e.isDominatedByLongLines());
    this._configuration.setModelLineCount(e.getLineCount());
    const i = e.onBeforeAttached();
    const r = new jbh(this._id, this._configuration, e, cwh.create(As(this._domElement)), $fh.create(this._configuration.options), a => r_(As(this._domElement), a), this.languageConfigurationService, this._themeService, i, {
      batchChanges: a => {
        try {
          this._beginUpdate();
          return a();
        } finally {
          this._endUpdate();
        }
      }
    });
    t.push(e.onWillDispose(() => this.setModel(null)));
    t.push(r.onEvent(a => {
      switch (a.kind) {
        case 0:
          this._onDidContentSizeChange.fire(a);
          break;
        case 1:
          this._editorTextFocus.setValue(a.hasFocus);
          break;
        case 2:
          this._editorWidgetFocus.setValue(a.hasFocus);
          break;
        case 3:
          this._onDidScrollChange.fire(a);
          break;
        case 4:
          this._onDidChangeViewZones.fire();
          break;
        case 5:
          this._onDidChangeHiddenAreas.fire();
          break;
        case 6:
          this._onDidAttemptReadOnlyEdit.fire();
          break;
        case 7:
          {
            if (a.reachedMaxCursorCount) {
              const m = this.getOption(81);
              const p = _(203, null, m);
              this._notificationService.prompt(Rs.Warning, p, [{
                label: "Find and Replace",
                run: () => {
                  this._commandService.executeCommand("editor.action.startFindReplaceAction");
                }
              }, {
                label: _(204, null),
                run: () => {
                  this._commandService.executeCommand("workbench.action.openSettings2", {
                    query: "editor.multiCursorLimit"
                  });
                }
              }]);
            }
            const l = [];
            for (let m = 0, p = a.selections.length; m < p; m++) {
              l[m] = a.selections[m].getPosition();
            }
            const u = {
              position: l[0],
              secondaryPositions: l.slice(1),
              reason: a.reason,
              source: a.source
            };
            this._onDidChangeCursorPosition.fire(u);
            const d = {
              selection: a.selections[0],
              secondarySelections: a.selections.slice(1),
              modelVersionId: a.modelVersionId,
              oldSelections: a.oldSelections,
              oldModelVersionId: a.oldModelVersionId,
              source: a.source,
              reason: a.reason
            };
            this._onDidChangeCursorSelection.fire(d);
            break;
          }
        case 8:
          this._onDidChangeModelDecorations.fire(a.event);
          break;
        case 9:
          this._domElement.setAttribute("data-mode-id", e.getLanguageId());
          this._onDidChangeModelLanguage.fire(a.event);
          break;
        case 10:
          this._onDidChangeModelLanguageConfiguration.fire(a.event);
          break;
        case 11:
          this._onDidChangeModelContent.fire(a.event);
          break;
        case 12:
          this._onDidChangeModelOptions.fire(a.event);
          break;
        case 13:
          this._onDidChangeModelTokens.fire(a.event);
          break;
      }
    }));
    const [s, o] = this._createView(r);
    if (o) {
      this._domElement.appendChild(s.domNode.domNode);
      let a = Object.keys(this._contentWidgets);
      for (let l = 0, u = a.length; l < u; l++) {
        const d = a[l];
        s.addContentWidget(this._contentWidgets[d]);
      }
      a = Object.keys(this._overlayWidgets);
      for (let l = 0, u = a.length; l < u; l++) {
        const d = a[l];
        s.addOverlayWidget(this._overlayWidgets[d]);
      }
      a = Object.keys(this._glyphMarginWidgets);
      for (let l = 0, u = a.length; l < u; l++) {
        const d = a[l];
        s.addGlyphMarginWidget(this._glyphMarginWidgets[d]);
      }
      s.render(false, true);
      s.domNode.domNode.setAttribute("data-uri", e.uri.toString());
    }
    this._modelData = new mwh(e, r, s, o, t, i);
  }
  _createView(e) {
    let t;
    if (this.isSimpleWidget) {
      t = {
        paste: (s, o, a, l) => {
          this._paste("keyboard", s, o, a, l);
        },
        type: s => {
          this._type("keyboard", s);
        },
        compositionType: (s, o, a, l) => {
          this._compositionType("keyboard", s, o, a, l);
        },
        startComposition: () => {
          this._startComposition();
        },
        endComposition: () => {
          this._endComposition("keyboard");
        },
        cut: () => {
          this._cut("keyboard");
        }
      };
    } else {
      t = {
        paste: (s, o, a, l) => {
          const u = {
            text: s,
            pasteOnNewLine: o,
            multicursorText: a,
            mode: l
          };
          this._commandService.executeCommand("paste", u);
        },
        type: s => {
          const o = {
            text: s
          };
          this._commandService.executeCommand("type", o);
        },
        compositionType: (s, o, a, l) => {
          if (a || l) {
            const u = {
              text: s,
              replacePrevCharCnt: o,
              replaceNextCharCnt: a,
              positionDelta: l
            };
            this._commandService.executeCommand("compositionType", u);
          } else {
            const u = {
              text: s,
              replaceCharCnt: o
            };
            this._commandService.executeCommand("replacePreviousChar", u);
          }
        },
        startComposition: () => {
          this._commandService.executeCommand("compositionStart", {});
        },
        endComposition: () => {
          this._commandService.executeCommand("compositionEnd", {});
        },
        cut: () => {
          this._commandService.executeCommand("cut", {});
        }
      };
    }
    const i = new MTc(e.coordinatesConverter);
    i.onKeyDown = s => this._onKeyDown.fire(s);
    i.onKeyUp = s => this._onKeyUp.fire(s);
    i.onContextMenu = s => this._onContextMenu.fire(s);
    i.onMouseMove = s => this._onMouseMove.fire(s);
    i.onMouseLeave = s => this._onMouseLeave.fire(s);
    i.onMouseDown = s => this._onMouseDown.fire(s);
    i.onMouseUp = s => this._onMouseUp.fire(s);
    i.onMouseDrag = s => this._onMouseDrag.fire(s);
    i.onMouseDrop = s => this._onMouseDrop.fire(s);
    i.onMouseDropCanceled = s => this._onMouseDropCanceled.fire(s);
    i.onMouseWheel = s => this._onMouseWheel.fire(s);
    return [new _3o(this._domElement, this.getId(), t, this._configuration, this._themeService.getColorTheme(), e, i, this._overflowWidgetsDomNode, this._instantiationService), true];
  }
  _postDetachModelCleanup(e) {
    e?.removeAllDecorationsWithOwnerId(this._id);
  }
  _detachModel() {
    this._contributionsDisposable?.dispose();
    this._contributionsDisposable = undefined;
    if (!this._modelData) {
      return null;
    }
    const e = this._modelData.model;
    const t = this._modelData.hasRealView ? this._modelData.view.domNode.domNode : null;
    this._modelData.dispose();
    this._modelData = null;
    this._domElement.removeAttribute("data-mode-id");
    if (t && this._domElement.contains(t)) {
      t.remove();
    }
    if (this._bannerDomNode && this._domElement.contains(this._bannerDomNode)) {
      this._bannerDomNode.remove();
    }
    return e;
  }
  _registerDecorationType(e, t, i, r) {
    this._codeEditorService.registerDecorationType(e, t, i, r, this);
  }
  _removeDecorationType(e) {
    this._codeEditorService.removeDecorationType(e);
  }
  _resolveDecorationOptions(e, t) {
    return this._codeEditorService.resolveDecorationOptions(e, t);
  }
  getTelemetryData() {
    return this._telemetryData;
  }
  hasModel() {
    return this._modelData !== null;
  }
  showDropIndicatorAt(e) {
    const t = [{
      range: new Zt(e.lineNumber, e.column, e.lineNumber, e.column),
      options: tbt.dropIntoEditorDecorationOptions
    }];
    this._dropIntoEditorDecorations.set(t);
    this.revealPosition(e, 1);
  }
  removeDropIndicator() {
    this._dropIntoEditorDecorations.clear();
  }
  setContextValue(e, t) {
    this._contextKeyService.createKey(e, t);
  }
  _beginUpdate() {
    this._updateCounter++;
    if (this._updateCounter === 1) {
      this._onBeginUpdate.fire();
    }
  }
  _endUpdate() {
    this._updateCounter--;
    if (this._updateCounter === 0) {
      this._onEndUpdate.fire();
    }
  }
};
WS = tbt = __decorate([__param(3, ln), __param(4, fl), __param(5, fr), __param(6, wi), __param(7, bo), __param(8, ms), __param(9, Cf), __param(10, JS), __param(11, $u), __param(12, FY)], WS);
hwh = 0;
mwh = class {
  constructor(n, e, t, i, r, s) {
    this.model = n;
    this.viewModel = e;
    this.view = t;
    this.hasRealView = i;
    this.listenersToRemove = r;
    this.attachedView = s;
  }
  dispose() {
    Bo(this.listenersToRemove);
    this.model.onBeforeDetached(this.attachedView);
    if (this.hasRealView) {
      this.view.dispose();
    }
    this.viewModel.dispose();
  }
};
(function (n) {
  n[n.NotSet = 0] = "NotSet";
  n[n.False = 1] = "False";
  n[n.True = 2] = "True";
})(pwh ||= {});
CIc = class extends at {
  constructor(n) {
    super();
    this._emitterOptions = n;
    this._onDidChangeToTrue = this._register(new Qe(this._emitterOptions));
    this.onDidChangeToTrue = this._onDidChangeToTrue.event;
    this._onDidChangeToFalse = this._register(new Qe(this._emitterOptions));
    this.onDidChangeToFalse = this._onDidChangeToFalse.event;
    this._value = 0;
  }
  setValue(n) {
    const e = n ? 2 : 1;
    if (this._value !== e) {
      this._value = e;
      if (this._value === 2) {
        this._onDidChangeToTrue.fire();
      } else if (this._value === 1) {
        this._onDidChangeToFalse.fire();
      }
    }
  }
};
GH = class extends Qe {
  constructor(n, e) {
    super({
      deliveryQueue: e
    });
    this._contributions = n;
  }
  fire(n) {
    this._contributions.onBeforeInteractionEvent();
    super.fire(n);
  }
};
gwh = class extends at {
  constructor(n, e, t) {
    super();
    this._editor = n;
    e.createKey("editorId", n.getId());
    this._editorSimpleInput = Ci.editorSimpleInput.bindTo(e);
    this._editorFocus = Ci.focus.bindTo(e);
    this._textInputFocus = Ci.textInputFocus.bindTo(e);
    this._editorTextFocus = Ci.editorTextFocus.bindTo(e);
    this._tabMovesFocus = Ci.tabMovesFocus.bindTo(e);
    this._editorReadonly = Ci.readOnly.bindTo(e);
    this._inDiffEditor = Ci.inDiffEditor.bindTo(e);
    this._editorColumnSelection = Ci.columnSelection.bindTo(e);
    this._hasMultipleSelections = Ci.hasMultipleSelections.bindTo(e);
    this._hasNonEmptySelection = Ci.hasNonEmptySelection.bindTo(e);
    this._canUndo = Ci.canUndo.bindTo(e);
    this._canRedo = Ci.canRedo.bindTo(e);
    this._register(this._editor.onDidChangeConfiguration(() => this._updateFromConfig()));
    this._register(this._editor.onDidChangeCursorSelection(() => this._updateFromSelection()));
    this._register(this._editor.onDidFocusEditorWidget(() => this._updateFromFocus()));
    this._register(this._editor.onDidBlurEditorWidget(() => this._updateFromFocus()));
    this._register(this._editor.onDidFocusEditorText(() => {
      if (!this._editorReadonly.get() && !this._editor.isChatCodeblock) {
        t.registerEvent("editor.focus");
      }
      this._updateFromFocus();
    }));
    this._register(this._editor.onDidBlurEditorText(() => this._updateFromFocus()));
    this._register(this._editor.onDidChangeModel(() => this._updateFromModel()));
    this._register(this._editor.onDidChangeConfiguration(() => this._updateFromModel()));
    this._register(OSe.onDidChangeTabFocus(i => this._tabMovesFocus.set(i)));
    this._updateFromConfig();
    this._updateFromSelection();
    this._updateFromFocus();
    this._updateFromModel();
    this._editorSimpleInput.set(this._editor.isSimpleWidget);
  }
  _updateFromConfig() {
    const n = this._editor.getOptions();
    this._tabMovesFocus.set(OSe.getTabFocusMode());
    this._editorReadonly.set(n.get(96));
    this._inDiffEditor.set(n.get(63));
    this._editorColumnSelection.set(n.get(22));
  }
  _updateFromSelection() {
    const n = this._editor.getSelections();
    if (n) {
      this._hasMultipleSelections.set(n.length > 1);
      this._hasNonEmptySelection.set(n.some(e => !e.isEmpty()));
    } else {
      this._hasMultipleSelections.reset();
      this._hasNonEmptySelection.reset();
    }
  }
  _updateFromFocus() {
    this._editorFocus.set(this._editor.hasWidgetFocus() && !this._editor.isSimpleWidget);
    this._editorTextFocus.set(this._editor.hasTextFocus() && !this._editor.isSimpleWidget);
    this._textInputFocus.set(this._editor.hasTextFocus());
  }
  _updateFromModel() {
    const n = this._editor.getModel();
    this._canUndo.set(!!n && !!n.canUndo());
    this._canRedo.set(!!n && !!n.canRedo());
  }
};
fwh = class extends at {
  constructor(n, e, t) {
    super();
    this._editor = n;
    this._contextKeyService = e;
    this._languageFeaturesService = t;
    this._langId = Ci.languageId.bindTo(e);
    this._hasCompletionItemProvider = Ci.hasCompletionItemProvider.bindTo(e);
    this._hasCodeActionsProvider = Ci.hasCodeActionsProvider.bindTo(e);
    this._hasCodeLensProvider = Ci.hasCodeLensProvider.bindTo(e);
    this._hasDefinitionProvider = Ci.hasDefinitionProvider.bindTo(e);
    this._hasDeclarationProvider = Ci.hasDeclarationProvider.bindTo(e);
    this._hasImplementationProvider = Ci.hasImplementationProvider.bindTo(e);
    this._hasTypeDefinitionProvider = Ci.hasTypeDefinitionProvider.bindTo(e);
    this._hasHoverProvider = Ci.hasHoverProvider.bindTo(e);
    this._hasDocumentHighlightProvider = Ci.hasDocumentHighlightProvider.bindTo(e);
    this._hasDocumentSymbolProvider = Ci.hasDocumentSymbolProvider.bindTo(e);
    this._hasReferenceProvider = Ci.hasReferenceProvider.bindTo(e);
    this._hasRenameProvider = Ci.hasRenameProvider.bindTo(e);
    this._hasSignatureHelpProvider = Ci.hasSignatureHelpProvider.bindTo(e);
    this._hasInlayHintsProvider = Ci.hasInlayHintsProvider.bindTo(e);
    this._hasDocumentFormattingProvider = Ci.hasDocumentFormattingProvider.bindTo(e);
    this._hasDocumentSelectionFormattingProvider = Ci.hasDocumentSelectionFormattingProvider.bindTo(e);
    this._hasMultipleDocumentFormattingProvider = Ci.hasMultipleDocumentFormattingProvider.bindTo(e);
    this._hasMultipleDocumentSelectionFormattingProvider = Ci.hasMultipleDocumentSelectionFormattingProvider.bindTo(e);
    this._isInEmbeddedEditor = Ci.isInEmbeddedEditor.bindTo(e);
    const i = () => this._update();
    this._register(n.onDidChangeModel(i));
    this._register(n.onDidChangeModelLanguage(i));
    this._register(t.completionProvider.onDidChange(i));
    this._register(t.codeActionProvider.onDidChange(i));
    this._register(t.codeLensProvider.onDidChange(i));
    this._register(t.definitionProvider.onDidChange(i));
    this._register(t.declarationProvider.onDidChange(i));
    this._register(t.implementationProvider.onDidChange(i));
    this._register(t.typeDefinitionProvider.onDidChange(i));
    this._register(t.hoverProvider.onDidChange(i));
    this._register(t.documentHighlightProvider.onDidChange(i));
    this._register(t.documentSymbolProvider.onDidChange(i));
    this._register(t.referenceProvider.onDidChange(i));
    this._register(t.renameProvider.onDidChange(i));
    this._register(t.documentFormattingEditProvider.onDidChange(i));
    this._register(t.documentRangeFormattingEditProvider.onDidChange(i));
    this._register(t.signatureHelpProvider.onDidChange(i));
    this._register(t.inlayHintsProvider.onDidChange(i));
    i();
  }
  dispose() {
    super.dispose();
  }
  reset() {
    this._contextKeyService.bufferChangeEvents(() => {
      this._langId.reset();
      this._hasCompletionItemProvider.reset();
      this._hasCodeActionsProvider.reset();
      this._hasCodeLensProvider.reset();
      this._hasDefinitionProvider.reset();
      this._hasDeclarationProvider.reset();
      this._hasImplementationProvider.reset();
      this._hasTypeDefinitionProvider.reset();
      this._hasHoverProvider.reset();
      this._hasDocumentHighlightProvider.reset();
      this._hasDocumentSymbolProvider.reset();
      this._hasReferenceProvider.reset();
      this._hasRenameProvider.reset();
      this._hasDocumentFormattingProvider.reset();
      this._hasDocumentSelectionFormattingProvider.reset();
      this._hasSignatureHelpProvider.reset();
      this._isInEmbeddedEditor.reset();
    });
  }
  _update() {
    const n = this._editor.getModel();
    if (!n) {
      this.reset();
      return;
    }
    this._contextKeyService.bufferChangeEvents(() => {
      this._langId.set(n.getLanguageId());
      this._hasCompletionItemProvider.set(this._languageFeaturesService.completionProvider.has(n));
      this._hasCodeActionsProvider.set(this._languageFeaturesService.codeActionProvider.has(n));
      this._hasCodeLensProvider.set(this._languageFeaturesService.codeLensProvider.has(n));
      this._hasDefinitionProvider.set(this._languageFeaturesService.definitionProvider.has(n));
      this._hasDeclarationProvider.set(this._languageFeaturesService.declarationProvider.has(n));
      this._hasImplementationProvider.set(this._languageFeaturesService.implementationProvider.has(n));
      this._hasTypeDefinitionProvider.set(this._languageFeaturesService.typeDefinitionProvider.has(n));
      this._hasHoverProvider.set(this._languageFeaturesService.hoverProvider.has(n));
      this._hasDocumentHighlightProvider.set(this._languageFeaturesService.documentHighlightProvider.has(n));
      this._hasDocumentSymbolProvider.set(this._languageFeaturesService.documentSymbolProvider.has(n));
      this._hasReferenceProvider.set(this._languageFeaturesService.referenceProvider.has(n));
      this._hasRenameProvider.set(this._languageFeaturesService.renameProvider.has(n));
      this._hasSignatureHelpProvider.set(this._languageFeaturesService.signatureHelpProvider.has(n));
      this._hasInlayHintsProvider.set(this._languageFeaturesService.inlayHintsProvider.has(n));
      this._hasDocumentFormattingProvider.set(this._languageFeaturesService.documentFormattingEditProvider.has(n) || this._languageFeaturesService.documentRangeFormattingEditProvider.has(n));
      this._hasDocumentSelectionFormattingProvider.set(this._languageFeaturesService.documentRangeFormattingEditProvider.has(n));
      this._hasMultipleDocumentFormattingProvider.set(this._languageFeaturesService.documentFormattingEditProvider.all(n).length + this._languageFeaturesService.documentRangeFormattingEditProvider.all(n).length > 1);
      this._hasMultipleDocumentSelectionFormattingProvider.set(this._languageFeaturesService.documentRangeFormattingEditProvider.all(n).length > 1);
      this._isInEmbeddedEditor.set(n.uri.scheme === _n.walkThroughSnippet || n.uri.scheme === _n.vscodeChatCodeBlock);
    });
  }
};
bwh = class {
  get length() {
    return this._decorationIds.length;
  }
  constructor(n, e) {
    this._editor = n;
    this._decorationIds = [];
    this._isChangingDecorations = false;
    if (Array.isArray(e) && e.length > 0) {
      this.set(e);
    }
  }
  onDidChange(n, e, t) {
    return this._editor.onDidChangeModelDecorations(i => {
      if (!this._isChangingDecorations) {
        n.call(e, i);
      }
    }, t);
  }
  getRange(n) {
    if (!this._editor.hasModel() || n >= this._decorationIds.length) {
      return null;
    } else {
      return this._editor.getModel().getDecorationRange(this._decorationIds[n]);
    }
  }
  getRanges() {
    if (!this._editor.hasModel()) {
      return [];
    }
    const n = this._editor.getModel();
    const e = [];
    for (const t of this._decorationIds) {
      const i = n.getDecorationRange(t);
      if (i) {
        e.push(i);
      }
    }
    return e;
  }
  has(n) {
    return this._decorationIds.includes(n.id);
  }
  clear() {
    if (this._decorationIds.length !== 0) {
      this.set([]);
    }
  }
  set(n) {
    try {
      this._isChangingDecorations = true;
      this._editor.changeDecorations(e => {
        this._decorationIds = e.deltaDecorations(this._decorationIds, n);
      });
    } finally {
      this._isChangingDecorations = false;
    }
    return this._decorationIds;
  }
  append(n) {
    let e = [];
    try {
      this._isChangingDecorations = true;
      this._editor.changeDecorations(t => {
        e = t.deltaDecorations([], n);
        this._decorationIds = this._decorationIds.concat(e);
      });
    } finally {
      this._isChangingDecorations = false;
    }
    return e;
  }
};
vwh = encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 6 3' enable-background='new 0 0 6 3' height='3' width='6'><g fill='");
Awh = encodeURIComponent("'><polygon points='5.5,0 2.5,3 1.1,3 4.1,0'/><polygon points='4,0 6,2 6,0.6 5.4,0'/><polygon points='0,2 1,3 2.4,3 0,0.6'/></g></svg>");
ywh = encodeURIComponent("<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"3\" width=\"12\"><g fill=\"");
wwh = encodeURIComponent("\"><circle cx=\"1\" cy=\"1\" r=\"1\"/><circle cx=\"5\" cy=\"1\" r=\"1\"/><circle cx=\"9\" cy=\"1\" r=\"1\"/></g></svg>");
HI((n, e) => {
  const t = n.getColor(Ioe);
  if (t) {
    e.addRule(`.monaco-editor .squiggly-error { background: url("data:image/svg+xml,${ebt(t)}") repeat-x bottom left; }`);
    e.addRule(`:root { --monaco-editor-error-decoration: url("data:image/svg+xml,${ebt(t)}"); }`);
  }
  const i = n.getColor(PY);
  if (i) {
    e.addRule(`.monaco-editor .squiggly-ai { background: url("data:image/svg+xml,${ebt(i)}") repeat-x bottom left; }`);
  }
  const r = n.getColor(w9);
  if (r) {
    e.addRule(`.monaco-editor .squiggly-warning { background: url("data:image/svg+xml,${ebt(r)}") repeat-x bottom left; }`);
    e.addRule(`:root { --monaco-editor-warning-decoration: url("data:image/svg+xml,${ebt(r)}"); }`);
  }
  const s = n.getColor(H$);
  if (s) {
    e.addRule(`.monaco-editor .squiggly-info { background: url("data:image/svg+xml,${ebt(s)}") repeat-x bottom left; }`);
    e.addRule(`:root { --monaco-editor-info-decoration: url("data:image/svg+xml,${ebt(s)}"); }`);
  }
  const o = n.getColor(muh);
  if (o) {
    e.addRule(`.monaco-editor .squiggly-hint { background: url("data:image/svg+xml,${dwh(o)}") no-repeat bottom left; }`);
    e.addRule(`:root { --monaco-editor-hint-decoration: url("data:image/svg+xml,${dwh(o)}"); }`);
  }
  const a = n.getColor(Rmh);
  if (a) {
    e.addRule(`.monaco-editor.showUnused .squiggly-inline-unnecessary { opacity: ${a.rgba.a}; }`);
    e.addRule(`:root { --monaco-editor-unnecessary-decoration-opacity: ${a.rgba.a}; }`);
  }
});

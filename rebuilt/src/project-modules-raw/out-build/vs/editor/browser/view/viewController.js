// Module: out-build/vs/editor/browser/view/viewController.js
// Offset: 1594326 (bundle byte offset)
// Size: 5129 bytes

nVe(), tl(), _r(), dAh=class{
  constructor(n, e, t, i){
    this.configuration=n, this.viewModel=e, this.userInputEvents=t, this.commandDelegate=i
  }
  paste(n, e, t, i){
    this.commandDelegate.paste(n, e, t, i)
  }
  type(n){
    this.commandDelegate.type(n)
  }
  compositionType(n, e, t, i){
    this.commandDelegate.compositionType(n, e, t, i)
  }
  compositionStart(){
    this.commandDelegate.startComposition()
  }
  compositionEnd(){
    this.commandDelegate.endComposition()
  }
  cut(){
    this.commandDelegate.cut()
  }
  setSelection(n){
    F4.SetSelection.runCoreEditorCommand(this.viewModel, {
      source:"keyboard",selection:n
    })
  }
  _validateViewColumn(n){
    const e=this.viewModel.getLineMinColumn(n.lineNumber);
    return n.column<e?new ar(n.lineNumber, e):n
  }
  _hasMulticursorModifier(n){
    switch(this.configuration.options.get(79)){
      case"altKey":return n.altKey;
      case"ctrlKey":return n.ctrlKey;
      case"metaKey":return n.metaKey;
      default:return!1
    }
  }
  _hasNonMulticursorModifier(n){
    switch(this.configuration.options.get(79)){
      case"altKey":return n.ctrlKey||n.metaKey;
      case"ctrlKey":return n.altKey||n.metaKey;
      case"metaKey":return n.ctrlKey||n.altKey;
      default:return!1
    }
  }
  dispatchMouse(n){
    const e=this.configuration.options, t=xv&&e.get(112), i=e.get(22);
    n.middleButton&&!t?this._columnSelect(n.position, n.mouseColumn, n.inSelectionMode):n.startedOnLineNumbers?this._hasMulticursorModifier(n)?n.inSelectionMode?this._lastCursorLineSelect(n.position, n.revealType):this._createCursor(n.position, !0):n.inSelectionMode?this._lineSelectDrag(n.position, n.revealType):this._lineSelect(n.position, n.revealType):n.mouseDownCount>=4?this._selectAll():n.mouseDownCount===3?this._hasMulticursorModifier(n)?n.inSelectionMode?this._lastCursorLineSelectDrag(n.position, n.revealType):this._lastCursorLineSelect(n.position, n.revealType):n.inSelectionMode?this._lineSelectDrag(n.position, n.revealType):this._lineSelect(n.position, n.revealType):n.mouseDownCount===2?n.onInjectedText||(this._hasMulticursorModifier(n)?this._lastCursorWordSelect(n.position, n.revealType):n.inSelectionMode?this._wordSelectDrag(n.position, n.revealType):this._wordSelect(n.position, n.revealType)):this._hasMulticursorModifier(n)?this._hasNonMulticursorModifier(n)||(n.shiftKey?this._columnSelect(n.position, n.mouseColumn, !0):n.inSelectionMode?this._lastCursorMoveToSelect(n.position, n.revealType):this._createCursor(n.position, !1)):n.inSelectionMode?n.altKey?this._columnSelect(n.position, n.mouseColumn, !0):i?this._columnSelect(n.position, n.mouseColumn, !0):this._moveToSelect(n.position, n.revealType):this.moveTo(n.position, n.revealType)
  }
  _usualArgs(n, e){
    return n=this._validateViewColumn(n), {
      source:"mouse",position:this._convertViewToModelPosition(n),viewPosition:n,revealType:e
    }
  }
  moveTo(n, e){
    F4.MoveTo.runCoreEditorCommand(this.viewModel, this._usualArgs(n, e))
  }
  _moveToSelect(n, e){
    F4.MoveToSelect.runCoreEditorCommand(this.viewModel, this._usualArgs(n, e))
  }
  _columnSelect(n, e, t){
    n=this._validateViewColumn(n), F4.ColumnSelect.runCoreEditorCommand(this.viewModel, {
      source:"mouse",position:this._convertViewToModelPosition(n),viewPosition:n,mouseColumn:e,doColumnSelect:t
    })
  }
  _createCursor(n, e){
    n=this._validateViewColumn(n), F4.CreateCursor.runCoreEditorCommand(this.viewModel, {
      source:"mouse",position:this._convertViewToModelPosition(n),viewPosition:n,wholeLine:e
    })
  }
  _lastCursorMoveToSelect(n, e){
    F4.LastCursorMoveToSelect.runCoreEditorCommand(this.viewModel, this._usualArgs(n, e))
  }
  _wordSelect(n, e){
    F4.WordSelect.runCoreEditorCommand(this.viewModel, this._usualArgs(n, e))
  }
  _wordSelectDrag(n, e){
    F4.WordSelectDrag.runCoreEditorCommand(this.viewModel, this._usualArgs(n, e))
  }
  _lastCursorWordSelect(n, e){
    F4.LastCursorWordSelect.runCoreEditorCommand(this.viewModel, this._usualArgs(n, e))
  }
  _lineSelect(n, e){
    F4.LineSelect.runCoreEditorCommand(this.viewModel, this._usualArgs(n, e))
  }
  _lineSelectDrag(n, e){
    F4.LineSelectDrag.runCoreEditorCommand(this.viewModel, this._usualArgs(n, e))
  }
  _lastCursorLineSelect(n, e){
    F4.LastCursorLineSelect.runCoreEditorCommand(this.viewModel, this._usualArgs(n, e))
  }
  _lastCursorLineSelectDrag(n, e){
    F4.LastCursorLineSelectDrag.runCoreEditorCommand(this.viewModel, this._usualArgs(n, e))
  }
  _selectAll(){
    F4.SelectAll.runCoreEditorCommand(this.viewModel, {
      source:"mouse"
    })
  }
  _convertViewToModelPosition(n){
    return this.viewModel.coordinatesConverter.convertViewPositionToModelPosition(n)
  }
  emitKeyDown(n){
    this.userInputEvents.emitKeyDown(n)
  }
  emitKeyUp(n){
    this.userInputEvents.emitKeyUp(n)
  }
  emitContextMenu(n){
    this.userInputEvents.emitContextMenu(n)
  }
  emitMouseMove(n){
    this.userInputEvents.emitMouseMove(n)
  }
  emitMouseLeave(n){
    this.userInputEvents.emitMouseLeave(n)
  }
  emitMouseUp(n){
    this.userInputEvents.emitMouseUp(n)
  }
  emitMouseDown(n){
    this.userInputEvents.emitMouseDown(n)
  }
  emitMouseDrag(n){
    this.userInputEvents.emitMouseDrag(n)
  }
  emitMouseDrop(n){
    this.userInputEvents.emitMouseDrop(n)
  }
  emitMouseDropCanceled(){
    this.userInputEvents.emitMouseDropCanceled()
  }
  emitMouseWheel(n){
    this.userInputEvents.emitMouseWheel(n)
  }
}
}
});
function nve(n, e){
  const t=globalThis.MonacoEnvironment;
  if(t?.createTrustedTypesPolicy)try{
    return t.createTrustedTypesPolicy(n, e)
  }
  catch(i){
    Gc(i);
    return
  }
  try{
    return globalThis.trustedTypes?.createPolicy(n, e)
  }
  catch(i){
    Gc(i);
    return
  }
}
var ive=
// Module: out-build/vs/editor/contrib/gotoSymbol/browser/link/clickLinkGesture.js
// Offset: 24742952 (bundle byte offset)
// Size: 3841 bytes

yn(), rt(), _r(), gca=class{
  constructor(n, e){
    this.target=n.target, this.isLeftClick=n.event.leftButton, this.isMiddleClick=n.event.middleButton, this.isRightClick=n.event.rightButton, this.hasTriggerModifier=_Gl(n.event, e.triggerModifier), this.hasSideBySideModifier=_Gl(n.event, e.triggerSideBySideModifier), this.isNoneOrSingleMouseDown=n.event.detail<=1
  }
}, CGl=class{
  constructor(n, e){
    this.keyCodeIsTriggerKey=n.keyCode===e.triggerKey, this.keyCodeIsSideBySideKey=n.keyCode===e.triggerSideBySideKey, this.hasTriggerModifier=_Gl(n, e.triggerModifier)
  }
}, vpi=class{
  constructor(n, e, t, i){
    this.triggerKey=n, this.triggerModifier=e, this.triggerSideBySideKey=t, this.triggerSideBySideModifier=i
  }
  equals(n){
    return this.triggerKey===n.triggerKey&&this.triggerModifier===n.triggerModifier&&this.triggerSideBySideKey===n.triggerSideBySideKey&&this.triggerSideBySideModifier===n.triggerSideBySideModifier
  }
}, Cun=class extends at{
  constructor(n, e){
    super(), this._onMouseMoveOrRelevantKeyDown=this._register(new Qe), this.onMouseMoveOrRelevantKeyDown=this._onMouseMoveOrRelevantKeyDown.event, this._onExecute=this._register(new Qe), this.onExecute=this._onExecute.event, this._onCancel=this._register(new Qe), this.onCancel=this._onCancel.event, this._editor=n, this._extractLineNumberFromMouseEvent=e?.extractLineNumberFromMouseEvent??(t=>t.target.position?t.target.position.lineNumber:0), this._opts=rpg(this._editor.getOption(79)), this._lastMouseMoveEvent=null, this._hasTriggerKeyOnMouseDown=!1, this._lineNumberOnMouseDown=0, this._register(this._editor.onDidChangeConfiguration(t=>{
      if(t.hasChanged(79)){
        const i=rpg(this._editor.getOption(79));
        if(this._opts.equals(i))return;
        this._opts=i,this._lastMouseMoveEvent=null,this._hasTriggerKeyOnMouseDown=!1,this._lineNumberOnMouseDown=0,this._onCancel.fire()
      }
    })), this._register(this._editor.onMouseMove(t=>this._onEditorMouseMove(new gca(t, this._opts)))), this._register(this._editor.onMouseDown(t=>this._onEditorMouseDown(new gca(t, this._opts)))), this._register(this._editor.onMouseUp(t=>this._onEditorMouseUp(new gca(t, this._opts)))), this._register(this._editor.onKeyDown(t=>this._onEditorKeyDown(new CGl(t, this._opts)))), this._register(this._editor.onKeyUp(t=>this._onEditorKeyUp(new CGl(t, this._opts)))), this._register(this._editor.onMouseDrag(()=>this._resetHandler())), this._register(this._editor.onDidChangeCursorSelection(t=>this._onDidChangeCursorSelection(t))), this._register(this._editor.onDidChangeModel(t=>this._resetHandler())), this._register(this._editor.onDidChangeModelContent(()=>this._resetHandler())), this._register(this._editor.onDidScrollChange(t=>{
      (t.scrollTopChanged||t.scrollLeftChanged)&&this._resetHandler()
    }))
  }
  _onDidChangeCursorSelection(n){
    n.selection&&n.selection.startColumn!==n.selection.endColumn&&this._resetHandler()
  }
  _onEditorMouseMove(n){
    this._lastMouseMoveEvent=n, this._onMouseMoveOrRelevantKeyDown.fire([n, null])
  }
  _onEditorMouseDown(n){
    this._hasTriggerKeyOnMouseDown=n.hasTriggerModifier, this._lineNumberOnMouseDown=this._extractLineNumberFromMouseEvent(n)
  }
  _onEditorMouseUp(n){
    const e=this._extractLineNumberFromMouseEvent(n);
    this._hasTriggerKeyOnMouseDown&&this._lineNumberOnMouseDown&&this._lineNumberOnMouseDown===e&&this._onExecute.fire(n)
  }
  _onEditorKeyDown(n){
    this._lastMouseMoveEvent&&(n.keyCodeIsTriggerKey||n.keyCodeIsSideBySideKey&&n.hasTriggerModifier)?this._onMouseMoveOrRelevantKeyDown.fire([this._lastMouseMoveEvent, n]):n.hasTriggerModifier&&this._onCancel.fire()
  }
  _onEditorKeyUp(n){
    n.keyCodeIsTriggerKey&&this._onCancel.fire()
  }
  _resetHandler(){
    this._lastMouseMoveEvent=null, this._hasTriggerKeyOnMouseDown=!1, this._onCancel.fire()
  }
}
}
});
function spg(n){
  return je.from({
    scheme:_n.command, path:n.id, query:n.arguments&&encodeURIComponent(JSON.stringify(n.arguments))
  }).toString()
}
var SGl, opg, kGl, EGl=
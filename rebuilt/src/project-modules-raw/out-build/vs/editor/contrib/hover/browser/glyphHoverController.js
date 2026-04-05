// Module: out-build/vs/editor/contrib/hover/browser/glyphHoverController.js
// Offset: 30885591 (bundle byte offset)
// Size: 3352 bytes

rt(), Wt(), vr(), b$o(), gla(), _ry(), gCa=!1, IQ=class extends at{
  static{
    Mpu=this
  }
  static{
    this.ID="editor.contrib.marginHover"
  }
  constructor(e, t){
    super(), this._editor=e, this._instantiationService=t, this.shouldKeepOpenOnEditorMouseMoveOrLeave=!1, this._listenersStore=new Ut, this._hoverState={
      mouseDown:!1
    }, this._reactToEditorMouseMoveRunner=this._register(new Hu(()=>this._reactToEditorMouseMove(this._mouseMoveEvent), 0)), this._hookListeners(), this._register(this._editor.onDidChangeConfiguration(i=>{
      i.hasChanged(62)&&(this._unhookListeners(),this._hookListeners())
    }))
  }
  static get(e){
    return e.getContribution(Mpu.ID)
  }
  _hookListeners(){
    const e=this._editor.getOption(62);
    this._hoverSettings={
      enabled:e.enabled,sticky:e.sticky,hidingDelay:e.hidingDelay
    }, e.enabled?(this._listenersStore.add(this._editor.onMouseDown(t=>this._onEditorMouseDown(t))), this._listenersStore.add(this._editor.onMouseUp(()=>this._onEditorMouseUp())), this._listenersStore.add(this._editor.onMouseMove(t=>this._onEditorMouseMove(t))), this._listenersStore.add(this._editor.onKeyDown(t=>this._onKeyDown(t)))):(this._listenersStore.add(this._editor.onMouseMove(t=>this._onEditorMouseMove(t))), this._listenersStore.add(this._editor.onKeyDown(t=>this._onKeyDown(t)))), this._listenersStore.add(this._editor.onMouseLeave(t=>this._onEditorMouseLeave(t))), this._listenersStore.add(this._editor.onDidChangeModel(()=>{
      this._cancelScheduler(),this.hideGlyphHover()
    })), this._listenersStore.add(this._editor.onDidChangeModelContent(()=>this._cancelScheduler())), this._listenersStore.add(this._editor.onDidScrollChange(t=>this._onEditorScrollChanged(t)))
  }
  _unhookListeners(){
    this._listenersStore.clear()
  }
  _cancelScheduler(){
    this._mouseMoveEvent=void 0, this._reactToEditorMouseMoveRunner.cancel()
  }
  _onEditorScrollChanged(e){
    (e.scrollTopChanged||e.scrollLeftChanged)&&this.hideGlyphHover()
  }
  _onEditorMouseDown(e){
    this._hoverState.mouseDown=!0, !this._isMouseOnGlyphHoverWidget(e)&&this.hideGlyphHover()
  }
  _isMouseOnGlyphHoverWidget(e){
    const t=this._glyphWidget?.getDomNode();
    return t?f$o(t, e.event.posx, e.event.posy):!1
  }
  _onEditorMouseUp(){
    this._hoverState.mouseDown=!1
  }
  _onEditorMouseLeave(e){
    this.shouldKeepOpenOnEditorMouseMoveOrLeave||(this._cancelScheduler(), this._isMouseOnGlyphHoverWidget(e))||gCa||this.hideGlyphHover()
  }
  _shouldNotRecomputeCurrentHoverWidget(e){
    const t=this._hoverSettings.sticky, i=this._isMouseOnGlyphHoverWidget(e);
    return t&&i
  }
  _onEditorMouseMove(e){
    if(this.shouldKeepOpenOnEditorMouseMoveOrLeave)return;
    if(this._mouseMoveEvent=e, this._shouldNotRecomputeCurrentHoverWidget(e)){
      this._reactToEditorMouseMoveRunner.cancel();
      return
    }
    this._reactToEditorMouseMove(e)
  }
  _reactToEditorMouseMove(e){
    !e||this._tryShowHoverWidget(e)||gCa||this.hideGlyphHover()
  }
  _tryShowHoverWidget(e){
    return this._getOrCreateGlyphWidget().showsOrWillShow(e)
  }
  _onKeyDown(e){
    this._editor.hasModel()&&(e.keyCode===5||e.keyCode===6||e.keyCode===57||e.keyCode===4||this.hideGlyphHover())
  }
  hideGlyphHover(){
    gCa||this._glyphWidget?.hide()
  }
  _getOrCreateGlyphWidget(){
    return this._glyphWidget||(this._glyphWidget=this._instantiationService.createInstance(pCa, this._editor)), this._glyphWidget
  }
  dispose(){
    super.dispose(), this._unhookListeners(), this._listenersStore.dispose(), this._glyphWidget?.dispose()
  }
}, IQ=Mpu=__decorate([__param(1, ln)], IQ)
}
}), Cry=
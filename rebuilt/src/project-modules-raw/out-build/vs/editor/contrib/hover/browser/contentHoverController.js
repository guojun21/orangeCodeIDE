// Module: out-build/vs/editor/contrib/hover/browser/contentHoverController.js
// Offset: 25119527 (bundle byte offset)
// Size: 6253 bytes

u$o(), rt(), Wt(), g$o(), ka(), vr(), b$o(), DCA(), gla(), yn(), Kbg(), fla=!1, ex=class extends at{
  static{
    rQl=this
  }
  static{
    this.ID="editor.contrib.contentHover"
  }
  constructor(e, t, i){
    super(), this._editor=e, this._instantiationService=t, this._keybindingService=i, this._onHoverContentsChanged=this._register(new Qe), this.onHoverContentsChanged=this._onHoverContentsChanged.event, this.shouldKeepOpenOnEditorMouseMoveOrLeave=!1, this._listenersStore=new Ut, this._isMouseDown=!1, this._reactToEditorMouseMoveRunner=this._register(new Hu(()=>{
      this._mouseMoveEvent&&this._reactToEditorMouseMove(this._mouseMoveEvent)
    }, 0)), this._hookListeners(), this._register(this._editor.onDidChangeConfiguration(r=>{
      r.hasChanged(62)&&(this._unhookListeners(),this._hookListeners())
    }))
  }
  static get(e){
    return e.getContribution(rQl.ID)
  }
  _hookListeners(){
    const e=this._editor.getOption(62);
    this._hoverSettings={
      enabled:e.enabled,sticky:e.sticky,hidingDelay:e.hidingDelay
    }, e.enabled||this._cancelSchedulerAndHide(), this._listenersStore.add(this._editor.onMouseDown(t=>this._onEditorMouseDown(t))), this._listenersStore.add(this._editor.onMouseUp(()=>this._onEditorMouseUp())), this._listenersStore.add(this._editor.onMouseMove(t=>this._onEditorMouseMove(t))), this._listenersStore.add(this._editor.onKeyDown(t=>this._onKeyDown(t))), this._listenersStore.add(this._editor.onMouseLeave(t=>this._onEditorMouseLeave(t))), this._listenersStore.add(this._editor.onDidChangeModel(()=>this._cancelSchedulerAndHide())), this._listenersStore.add(this._editor.onDidChangeModelContent(()=>this._cancelScheduler())), this._listenersStore.add(this._editor.onDidScrollChange(t=>this._onEditorScrollChanged(t)))
  }
  _unhookListeners(){
    this._listenersStore.clear()
  }
  _cancelSchedulerAndHide(){
    this._cancelScheduler(), this.hideContentHover()
  }
  _cancelScheduler(){
    this._mouseMoveEvent=void 0, this._reactToEditorMouseMoveRunner.cancel()
  }
  _onEditorScrollChanged(e){
    (e.scrollTopChanged||e.scrollLeftChanged)&&this.hideContentHover()
  }
  _onEditorMouseDown(e){
    this._isMouseDown=!0, !this._shouldKeepHoverWidgetVisible(e)&&this.hideContentHover()
  }
  _shouldKeepHoverWidgetVisible(e){
    return this._isMouseOnContentHoverWidget(e)||this._isContentWidgetResizing()||Vbg(e)
  }
  _isMouseOnContentHoverWidget(e){
    return this._contentWidget?f$o(this._contentWidget.getDomNode(), e.event.posx, e.event.posy):!1
  }
  _onEditorMouseUp(){
    this._isMouseDown=!1
  }
  _onEditorMouseLeave(e){
    this.shouldKeepOpenOnEditorMouseMoveOrLeave||(this._cancelScheduler(), this._shouldKeepHoverWidgetVisible(e))||fla||this.hideContentHover()
  }
  _shouldKeepCurrentHover(e){
    const t=this._contentWidget;
    if(!t)return!1;
    const i=this._hoverSettings.sticky, r=(d, m)=>{
      const p=this._isMouseOnContentHoverWidget(d);
      return m&&p
    }, s=d=>{
      const m=t.isColorPickerVisible,p=this._isMouseOnContentHoverWidget(d),g=m&&p,f=m&&this._isMouseDown;
      return g||f
    }, o=(d, m)=>{
      const p=d.event.browserEvent.view;
      return p?m&&t.containsNode(p.document.activeElement)&&!p.getSelection()?.isCollapsed:!1
    }, a=t.isFocused, l=t.isResizing, u=this._hoverSettings.sticky&&t.isVisibleFromKeyboard;
    return this.shouldKeepOpenOnEditorMouseMoveOrLeave||a||l||u||r(e, i)||s(e)||o(e, i)
  }
  _onEditorMouseMove(e){
    if(this._mouseMoveEvent=e, this._shouldKeepCurrentHover(e)){
      this._reactToEditorMouseMoveRunner.cancel();
      return
    }
    if(this._shouldRescheduleHoverComputation()){
      this._reactToEditorMouseMoveRunner.isScheduled()||this._reactToEditorMouseMoveRunner.schedule(this._hoverSettings.hidingDelay);
      return
    }
    this._reactToEditorMouseMove(e)
  }
  _shouldRescheduleHoverComputation(){
    const e=this._hoverSettings.hidingDelay;
    return(this._contentWidget?.isVisible??!1)&&this._hoverSettings.sticky&&e>0
  }
  _reactToEditorMouseMove(e){
    this._hoverSettings.enabled&&this._getOrCreateContentWidget().showsOrWillShow(e)||fla||this.hideContentHover()
  }
  _onKeyDown(e){
    if(!this._contentWidget)return;
    const t=this._isPotentialKeyboardShortcut(e), i=this._isModifierKeyPressed(e);
    t||i||this._contentWidget.isFocused&&e.keyCode===2||this.hideContentHover()
  }
  _isPotentialKeyboardShortcut(e){
    if(!this._editor.hasModel()||!this._contentWidget)return!1;
    const t=this._keybindingService.softDispatch(e, this._editor.getDomNode()), i=t.kind===1, r=t.kind===2&&(t.commandId===E5c||t.commandId===Lvt||t.commandId===Nvt)&&this._contentWidget.isVisible;
    return i||r
  }
  _isModifierKeyPressed(e){
    return e.keyCode===5||e.keyCode===6||e.keyCode===57||e.keyCode===4
  }
  hideContentHover(){
    fla||Mvt.dropDownVisible||this._contentWidget?.hide()
  }
  _getOrCreateContentWidget(){
    return this._contentWidget||(this._contentWidget=this._instantiationService.createInstance(pla, this._editor), this._listenersStore.add(this._contentWidget.onContentsChanged(()=>this._onHoverContentsChanged.fire()))), this._contentWidget
  }
  showContentHover(e, t, i, r){
    this._getOrCreateContentWidget().startShowingAtRange(e, t, i, r)
  }
  _isContentWidgetResizing(){
    return this._contentWidget?.widget.isResizing||!1
  }
  focusedHoverPartIndex(){
    return this._getOrCreateContentWidget().focusedHoverPartIndex()
  }
  doesHoverAtIndexSupportVerbosityAction(e, t){
    return this._getOrCreateContentWidget().doesHoverAtIndexSupportVerbosityAction(e, t)
  }
  updateHoverVerbosityLevel(e, t, i){
    this._getOrCreateContentWidget().updateHoverVerbosityLevel(e, t, i)
  }
  focus(){
    this._contentWidget?.focus()
  }
  focusHoverPartWithIndex(e){
    this._contentWidget?.focusHoverPartWithIndex(e)
  }
  scrollUp(){
    this._contentWidget?.scrollUp()
  }
  scrollDown(){
    this._contentWidget?.scrollDown()
  }
  scrollLeft(){
    this._contentWidget?.scrollLeft()
  }
  scrollRight(){
    this._contentWidget?.scrollRight()
  }
  pageUp(){
    this._contentWidget?.pageUp()
  }
  pageDown(){
    this._contentWidget?.pageDown()
  }
  goToTop(){
    this._contentWidget?.goToTop()
  }
  goToBottom(){
    this._contentWidget?.goToBottom()
  }
  getWidgetContent(){
    return this._contentWidget?.getWidgetContent()
  }
  getAccessibleWidgetContent(){
    return this._contentWidget?.getAccessibleWidgetContent()
  }
  getAccessibleWidgetContentAtIndex(e){
    return this._contentWidget?.getAccessibleWidgetContentAtIndex(e)
  }
  get isColorPickerVisible(){
    return this._contentWidget?.isColorPickerVisible
  }
  get isHoverVisible(){
    return this._contentWidget?.isVisible
  }
  dispose(){
    super.dispose(), this._unhookListeners(), this._listenersStore.dispose(), this._contentWidget?.dispose()
  }
}, ex=rQl=__decorate([__param(1, ln), __param(2, mo)], ex)
}
}), sQl, j9, Ybg, dme=
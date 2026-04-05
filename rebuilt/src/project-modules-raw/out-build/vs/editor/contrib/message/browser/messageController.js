// Module: out-build/vs/editor/contrib/message/browser/messageController.js
// Offset: 2428483 (bundle byte offset)
// Size: 3691 bytes

y3(), Ew(), yn(), tg(), rt(), DhA(), Cu(), ts(), oN(), Ht(), si(), Fc(), ri(), C3=class{
  static{
    e9o=this
  }
  static{
    this.ID="editor.contrib.messageController"
  }
  static{
    this.MESSAGE_VISIBLE=new Sn("messageVisible", !1, _(1435, null))
  }
  static get(e){
    return e.getContribution(e9o.ID)
  }
  constructor(e, t, i){
    this._openerService=i, this._messageWidget=new uo, this._messageListeners=new Ut, this._mouseOverMessage=!1, this._editor=e, this._visible=e9o.MESSAGE_VISIBLE.bindTo(t)
  }
  dispose(){
    this._message?.dispose(), this._messageListeners.dispose(), this._messageWidget.dispose(), this._visible.reset()
  }
  isVisible(){
    return this._visible.get()
  }
  showMessage(e, t){
    W_(bT(e)?e.value:e), this._visible.set(!0), this._messageWidget.clear(), this._messageListeners.clear(), this._message=bT(e)?Jde(e, {
      actionHandler:{
        callback:r=>{
          this.closeMessage(),Y3t(this._openerService,r,bT(e)?e.isTrusted:void 0)
        },disposables:this._messageListeners
      }
    }):void 0, this._messageWidget.value=new DBc(this._editor, t, typeof e=="string"?e:this._message.element), this._messageListeners.add(In.debounce(this._editor.onDidBlurEditorText, (r, s)=>s, 0)(()=>{
      this._mouseOverMessage||this._messageWidget.value&&HS(_C(),this._messageWidget.value.getDomNode())||this.closeMessage()
    })), this._messageListeners.add(this._editor.onDidChangeCursorPosition(()=>this.closeMessage())), this._messageListeners.add(this._editor.onDidDispose(()=>this.closeMessage())), this._messageListeners.add(this._editor.onDidChangeModel(()=>this.closeMessage())), this._messageListeners.add(ei(this._messageWidget.value.getDomNode(), ir.MOUSE_ENTER, ()=>this._mouseOverMessage=!0, !0)), this._messageListeners.add(ei(this._messageWidget.value.getDomNode(), ir.MOUSE_LEAVE, ()=>this._mouseOverMessage=!1, !0));
    let i;
    this._messageListeners.add(this._editor.onMouseMove(r=>{
      r.target.position&&(i?i.containsPosition(r.target.position)||this.closeMessage():i=new Zt(t.lineNumber-3,1,r.target.position.lineNumber+3,1))
    }))
  }
  closeMessage(){
    this._visible.reset(), this._messageListeners.clear(), this._messageWidget.value&&this._messageListeners.add(DBc.fadeOut(this._messageWidget.value))
  }
}, C3=e9o=__decorate([__param(1, wi), __param(2, Ja)], C3), GSh=dF.bindToContribution(C3.get), ld(new GSh({
  id:"leaveEditorMessage", precondition:C3.MESSAGE_VISIBLE, handler:n=>n.closeMessage(), kbOpts:{
    weight:130, primary:9
  }
})), DBc=class{
  static fadeOut(n){
    const e=()=>{
      n.dispose(),clearTimeout(t),n.getDomNode().removeEventListener("animationend",e)
    }, t=setTimeout(e, 110);
    return n.getDomNode().addEventListener("animationend", e), n.getDomNode().classList.add("fadeOut"), {
      dispose:e
    }
  }
  constructor(n, {
    lineNumber:e, column:t
  }, i){
    this.allowEditorOverflow=!0, this.suppressMouseDown=!1, this._editor=n, this._editor.revealLinesInCenterIfOutsideViewport(e, e, 0), this._position={
      lineNumber:e,column:t
    }, this._domNode=document.createElement("div"), this._domNode.classList.add("monaco-editor-overlaymessage"), this._domNode.style.marginLeft="-6px";
    const r=document.createElement("div");
    r.classList.add("anchor", "top"), this._domNode.appendChild(r);
    const s=document.createElement("div");
    typeof i=="string"?(s.classList.add("message"), s.textContent=i):(i.classList.add("message"), s.appendChild(i)), this._domNode.appendChild(s);
    const o=document.createElement("div");
    o.classList.add("anchor", "below"), this._domNode.appendChild(o), this._editor.addContentWidget(this), this._domNode.classList.add("fadeIn")
  }
  dispose(){
    this._editor.removeContentWidget(this)
  }
  getId(){
    return"messageoverlay"
  }
  getDomNode(){
    return this._domNode
  }
  getPosition(){
    return{
      position:this._position,preference:[1,2],positionAffinity:1
    }
  }
  afterRender(n){
    this._domNode.classList.toggle("below", n===2)
  }
}, Mg(C3.ID, C3, 4)
}
}), PhA=
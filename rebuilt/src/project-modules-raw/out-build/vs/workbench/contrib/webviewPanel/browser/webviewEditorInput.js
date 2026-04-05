// Module: out-build/vs/workbench/contrib/webviewPanel/browser/webviewEditorInput.js
// Offset: 33443091 (bundle byte offset)
// Size: 1554 bytes

zr(), Yn(), Bc(), xT(), qU=class xzb extends XS{
  static{
    this.typeId="workbench.editors.webviewInput"
  }
  get typeId(){
    return xzb.typeId
  }
  get editorId(){
    return this.viewType
  }
  get capabilities(){
    return 138
  }
  get resource(){
    return je.from({
      scheme:_n.webviewPanel,path:`webview-panel/webview-${this._resourceId}`
    })
  }
  constructor(e, t, i){
    super(), this._iconManager=i, this._resourceId=Wr(), this._hasTransfered=!1, this.viewType=e.viewType, this.providedId=e.providedId, this._name=e.name, this._webview=t
  }
  dispose(){
    this.isDisposed()||this._hasTransfered||this._webview?.dispose(), super.dispose()
  }
  getName(){
    return this._name
  }
  getTitle(e){
    return this.getName()
  }
  getDescription(){
    
  }
  setName(e){
    this._name=e, this.webview.setTitle(e), this._onDidChangeLabel.fire()
  }
  get webview(){
    return this._webview
  }
  get extension(){
    return this.webview.extension
  }
  get iconPath(){
    return this._iconPath
  }
  set iconPath(e){
    this._iconPath=e, this._iconManager.setIcons(this._resourceId, e)
  }
  matches(e){
    return super.matches(e)||e===this
  }
  get group(){
    return this._group
  }
  updateGroup(e){
    this._group=e
  }
  transfer(e){
    if(!this._hasTransfered)return this._hasTransfered=!0, e._webview=this._webview, e
  }
  claim(e, t, i){
    return this._webview.claim(e, t, i)
  }
}
}
});
function Lbn(n, e){
  n?.addImplementation(o6f, "webview", t=>{
    const r=t.get(Wie).activeWebview;
    if(r?.isFocused)return e(r), !0;
    if(_C()?.classList.contains("action-menu-item")){
      const s=t.get(yi);
      if(s.activeEditor instanceof qU)return e(s.activeEditor.webview),!0
    }
    return!1
  })
}
var o6f, xki, a6f=
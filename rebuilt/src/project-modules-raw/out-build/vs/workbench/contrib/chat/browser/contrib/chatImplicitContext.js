// Module: out-build/vs/workbench/contrib/chat/browser/contrib/chatImplicitContext.js
// Offset: 32556242 (bundle byte offset)
// Size: 4506 bytes

Po(), yn(), rt(), zr(), Uc(), Yr(), Yn(), lv(), Oh(), Ei(), ss(), Sb(), Hq(), xS(), SS(), EEa(), kk(), TCi=class extends at{
  static{
    this.ID="chat.implicitContext"
  }
  constructor(e, t, i, r, s, o, a){
    super(), this.codeEditorService=e, this.editorService=t, this.chatWidgetService=i, this.chatService=r, this.chatEditingService=s, this.configurationService=o, this.ignoredFilesService=a, this._currentCancelTokenSource=this._register(new uo), this._implicitContextEnablement=this.configurationService.getValue("chat.implicitContext.enabled");
    const l=this._register(new Ut);
    this._register(In.runAndSubscribe(t.onDidActiveEditorChange, (()=>{
      l.clear();
      const u=this.findActiveCodeEditor();
      u&&l.add(In.debounce(In.any(u.onDidChangeModel,u.onDidChangeCursorSelection,u.onDidScrollChange),()=>{
        
      },500)(()=>this.updateImplicitContext()));
      const d=this.findActiveNotebookEditor();
      d&&l.add(In.debounce(In.any(d.onDidChangeModel,d.onDidChangeActiveCell),()=>{
        
      },500)(()=>this.updateImplicitContext())),this.updateImplicitContext()
    }))), this._register(Oc(u=>{
      this.chatEditingService.editingSessionsObs.read(u),this.updateImplicitContext()
    })), this._register(this.configurationService.onDidChangeConfiguration(u=>{
      u.affectsConfiguration("chat.implicitContext.enabled")&&(this._implicitContextEnablement=this.configurationService.getValue("chat.implicitContext.enabled"),this.updateImplicitContext())
    })), this._register(this.chatService.onDidSubmitRequest(({
      chatSessionId:u
    })=>{
      const d=this.chatWidgetService.getWidgetBySessionId(u);
      d?.input.implicitContext&&this._implicitContextEnablement[d.location]==="first"&&d.viewModel?.getItems().length!==0&&d.input.implicitContext.setValue(void 0,!1)
    })), this._register(this.chatWidgetService.onDidAddWidget(async u=>{
      await this.updateImplicitContext(u)
    }))
  }
  findActiveCodeEditor(){
    const e=this.codeEditorService.getActiveCodeEditor();
    if(e){
      const t=e.getModel();
      if(t?.uri.scheme===_n.vscodeNotebookCell)return;
      if(t)return e
    }
    for(const t of this.editorService.getVisibleTextEditorControls(0)){
      let i;
      if(iB(t))i=t.getModifiedEditor();
      else if(Ig(t))i=t;
      else continue;
      if(i.getModel())return i
    }
  }
  findActiveNotebookEditor(){
    return sA(this.editorService.activeEditorPane)
  }
  async updateImplicitContext(e){
    const t=this._currentCancelTokenSource.value=new Wc, i=this.findActiveCodeEditor(), r=i?.getModel(), s=i?.getSelection();
    let o, a=!1;
    if(r)if(s&&!s.isEmpty())o={
      uri:r.uri,range:s
    }, a=!0;
    else{
      const m=i?.getVisibleRanges();
      if(m&&m.length>0){
        let p=m[0];
        m.slice(1).forEach(g=>{
          p=p.plusRange(g)
        }),o={
          uri:r.uri,range:p
        }
      }
      else o=r.uri
    }
    const l=this.findActiveNotebookEditor();
    if(l){
      const m=l.getActiveCell();
      m?o=m.uri:o=l.textModel?.uri
    }
    const u=o instanceof je?o:o?.uri;
    if(u&&await this.ignoredFilesService.fileIsIgnored(u, t.token)&&(o=void 0), t.token.isCancellationRequested)return;
    const d=e?[e]:[...this.chatWidgetService.getWidgetsByLocations(zh.Panel), ...this.chatWidgetService.getWidgetsByLocations(zh.EditingSession), ...this.chatWidgetService.getWidgetsByLocations(zh.Editor)];
    for(const m of d){
      if(!m.input.implicitContext)continue;
      const p=this._implicitContextEnablement[m.location],g=m.viewModel?.getItems().length===0;
      p==="first"&&!g?m.input.implicitContext.setValue(void 0,!1):p==="always"||p==="first"&&g?m.input.implicitContext.setValue(o,a):p==="never"&&m.input.implicitContext.setValue(void 0,!1)
    }
  }
}, TCi=__decorate([__param(0, fl), __param(1, yi), __param(2, M1), __param(3, ES), __param(4, kV), __param(5, Fn), __param(6, xCi)], TCi), o3f=class extends at{
  get id(){
    return je.isUri(this.value)?"vscode.implicit.file":this.value?this._isSelection?"vscode.implicit.selection":"vscode.implicit.viewport":"vscode.implicit"
  }
  get name(){
    return je.isUri(this.value)?`file:${ca(this.value)}`:this.value?`file:${ca(this.value.uri)}`:"implicit"
  }
  get modelDescription(){
    return je.isUri(this.value)?"User's active file":this._isSelection?"User's active selection":"User's current visible code"
  }
  get isSelection(){
    return this._isSelection
  }
  get value(){
    return this._value
  }
  get enabled(){
    return this._enabled
  }
  set enabled(n){
    this._enabled=n, this._onDidChangeValue.fire()
  }
  constructor(n){
    super(), this.kind="implicit", this.isFile=!0, this._isSelection=!1, this._onDidChangeValue=new Qe, this.onDidChangeValue=this._onDidChangeValue.event, this._enabled=!0, this._value=n
  }
  setValue(n, e){
    this._value=n, this._isSelection=e, this._onDidChangeValue.fire()
  }
  toBaseEntry(){
    return{
      id:this.id,name:this.name,value:this.value,isFile:!0,modelDescription:this.modelDescription
    }
  }
}
}
}), ICi, c3f, l3f=
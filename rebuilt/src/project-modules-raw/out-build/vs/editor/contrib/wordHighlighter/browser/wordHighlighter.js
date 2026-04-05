// Module: out-build/vs/editor/contrib/wordHighlighter/browser/wordHighlighter.js
// Offset: 32766030 (bundle byte offset)
// Size: 13215 bytes

Ht(), Ew(), vr(), Po(), _s(), rt(), cu(), zr(), Yr(), Ei(), si(), jr(), lv(), Cu(), Oh(), ts(), Qh(), Rvt(), bxa(), xw(), Cm(), td(), x5f(), Wly(), Axa=new Sn("hasWordHighlights", !1), Oyu=class{
  constructor(n, e, t){
    this._model=n, this._selection=e, this._wordSeparators=t, this._wordRange=this._getCurrentWordRange(n, e), this._result=null
  }
  get result(){
    return this._result||(this._result=dw(n=>this._compute(this._model, this._selection, this._wordSeparators, n))), this._result
  }
  _getCurrentWordRange(n, e){
    const t=n.getWordAtPosition(e.getPosition());
    return t?new Zt(e.startLineNumber, t.startColumn, e.startLineNumber, t.endColumn):null
  }
  isValid(n, e, t){
    const i=e.startLineNumber, r=e.startColumn, s=e.endColumn, o=this._getCurrentWordRange(n, e);
    let a=!!(this._wordRange&&this._wordRange.equalsRange(o));
    for(let l=0, u=t.length;
    !a&&l<u;
    l++){
      const d=t.getRange(l);
      d&&d.startLineNumber===i&&d.startColumn<=r&&d.endColumn>=s&&(a=!0)
    }
    return a
  }
  cancel(){
    this.result.cancel()
  }
}, I5f=class extends Oyu{
  constructor(n, e, t, i){
    super(n, e, t), this._providers=i
  }
  _compute(n, e, t, i){
    return T5f(this._providers, n, e.getPosition(), i).then(r=>r||new fu)
  }
}, D5f=class extends Oyu{
  constructor(n, e, t, i, r){
    super(n, e, t), this._providers=i, this._otherModels=r
  }
  _compute(n, e, t, i){
    return Qly(this._providers, n, e.getPosition(), i, this._otherModels).then(r=>r||new fu)
  }
}, RY("_executeDocumentHighlights", async(n, e, t)=>{
  const i=n.get($u);
  return(await T5f(i.documentHighlightProvider, e, t, Cs.None))?.get(e.uri)
}), yxa=class{
  static{
    mP=this
  }
  static{
    this.storedDecorationIDs=new fu
  }
  static{
    this.query=null
  }
  constructor(e, t, i, r, s, o, a, l){
    this.toUnhook=new Ut, this.workerRequestTokenId=0, this.workerRequestCompleted=!1, this.workerRequestValue=new fu, this.lastCursorPositionChangeTime=0, this.renderDecorationsTimer=-1, this.runDelayer=this.toUnhook.add(new Nv(25)), this.editor=e, this.providers=t, this.multiDocumentProviders=i, this.codeEditorService=o, this.textModelService=s, this.configurationService=a, this.logService=l, this._hasWordHighlights=Axa.bindTo(r), this._ignorePositionChangeEvent=!1, this.occurrencesHighlightEnablement=this.editor.getOption(82), this.occurrencesHighlightDelay=this.configurationService.getValue("editor.occurrencesHighlightDelay"), this.model=this.editor.getModel(), this.toUnhook.add(e.onDidChangeCursorPosition(u=>{
      e.getModel().uri.toString()==="output:anysphere.cursor-always-local.Cursor%20Tab"&&u.source!=="mouse"||this._ignorePositionChangeEvent||this.occurrencesHighlightEnablement!=="off"&&this.runDelayer.trigger(()=>{
        this._onPositionChanged(u)
      })
    })), this.toUnhook.add(e.onDidFocusEditorText(u=>{
      this.occurrencesHighlightEnablement!=="off"&&(this.workerRequest||this.runDelayer.trigger(()=>{
        this._run()
      }))
    })), this.toUnhook.add(e.onDidChangeModelContent(u=>{
      OR(this.model.uri,"output")||this._stopAll()
    })), this.toUnhook.add(e.onDidChangeModel(u=>{
      !u.newModelUrl&&u.oldModelUrl?this._stopSingular():mP.query&&this._run()
    })), this.toUnhook.add(e.onDidChangeConfiguration(u=>{
      const d=this.editor.getOption(82);
      if(this.occurrencesHighlightEnablement!==d)switch(this.occurrencesHighlightEnablement=d,d){
        case"off":this._stopAll();
        break;
        case"singleFile":this._stopAll(mP.query?.modelInfo?.modelURI);
        break;
        case"multiFile":mP.query&&this._run(!0);
        break;
        default:console.warn("Unknown occurrencesHighlight setting value:",d);
        break
      }
    })), this.toUnhook.add(this.configurationService.onDidChangeConfiguration(u=>{
      if(u.affectsConfiguration("editor.occurrencesHighlightDelay")){
        const d=a.getValue("editor.occurrencesHighlightDelay");
        this.occurrencesHighlightDelay!==d&&(this.occurrencesHighlightDelay=d)
      }
    })), this.toUnhook.add(e.onDidBlurEditorWidget(()=>{
      const u=this.codeEditorService.getFocusedCodeEditor();
      u?u.getModel()?.uri.scheme===_n.vscodeNotebookCell&&this.editor.getModel()?.uri.scheme!==_n.vscodeNotebookCell&&this._stopAll():this._stopAll()
    })), this.decorations=this.editor.createDecorationsCollection(), this.workerRequestTokenId=0, this.workerRequest=null, this.workerRequestCompleted=!1, this.lastCursorPositionChangeTime=0, this.renderDecorationsTimer=-1, mP.query&&this._run()
  }
  hasDecorations(){
    return this.decorations.length>0
  }
  restore(e){
    this.occurrencesHighlightEnablement!=="off"&&(this.runDelayer.cancel(), this.runDelayer.trigger(()=>{
      this._run(!1,e)
    }))
  }
  trigger(){
    this.runDelayer.cancel(), this._run(!1, 0)
  }
  stop(){
    this.occurrencesHighlightEnablement!=="off"&&this._stopAll()
  }
  _getSortedHighlights(){
    return this.decorations.getRanges().sort(Zt.compareRangesUsingStarts)
  }
  moveNext(){
    const e=this._getSortedHighlights(), i=(e.findIndex(s=>s.containsPosition(this.editor.getPosition()))+1)%e.length, r=e[i];
    try{
      this._ignorePositionChangeEvent=!0,this.editor.setPosition(r.getStartPosition()),this.editor.revealRangeInCenterIfOutsideViewport(r);
      const s=this._getWord();
      if(s){
        const o=this.editor.getModel().getLineContent(r.startLineNumber);
        W_(`${o}, ${i+1} of ${e.length} for '${s.word}'`)
      }
    }
    finally{
      this._ignorePositionChangeEvent=!1
    }
  }
  moveBack(){
    const e=this._getSortedHighlights(), i=(e.findIndex(s=>s.containsPosition(this.editor.getPosition()))-1+e.length)%e.length, r=e[i];
    try{
      this._ignorePositionChangeEvent=!0,this.editor.setPosition(r.getStartPosition()),this.editor.revealRangeInCenterIfOutsideViewport(r);
      const s=this._getWord();
      if(s){
        const o=this.editor.getModel().getLineContent(r.startLineNumber);
        W_(`${o}, ${i+1} of ${e.length} for '${s.word}'`)
      }
    }
    finally{
      this._ignorePositionChangeEvent=!1
    }
  }
  _removeSingleDecorations(){
    if(!this.editor.hasModel())return;
    const e=mP.storedDecorationIDs.get(this.editor.getModel().uri);
    e&&(this.editor.removeDecorations(e), mP.storedDecorationIDs.delete(this.editor.getModel().uri), this.decorations.length>0&&(this.decorations.clear(), this._hasWordHighlights.set(!1)))
  }
  _removeAllDecorations(e){
    const t=this.codeEditorService.listCodeEditors(), i=[];
    for(const r of t){
      if(!r.hasModel()||Zc(r.getModel().uri,e))continue;
      const s=mP.storedDecorationIDs.get(r.getModel().uri);
      if(!s)continue;
      r.removeDecorations(s),i.push(r.getModel().uri);
      const o=HV.get(r);
      o?.wordHighlighter&&o.wordHighlighter.decorations.length>0&&(o.wordHighlighter.decorations.clear(),o.wordHighlighter.workerRequest=null,o.wordHighlighter._hasWordHighlights.set(!1))
    }
    for(const r of i)mP.storedDecorationIDs.delete(r)
  }
  _stopSingular(){
    this._removeSingleDecorations(), this.editor.hasTextFocus()&&(this.editor.getModel()?.uri.scheme!==_n.vscodeNotebookCell&&mP.query?.modelInfo?.modelURI.scheme!==_n.vscodeNotebookCell?(mP.query=null, this._run()):mP.query?.modelInfo&&(mP.query.modelInfo=null)), this.renderDecorationsTimer!==-1&&(clearTimeout(this.renderDecorationsTimer), this.renderDecorationsTimer=-1), this.workerRequest!==null&&(this.workerRequest.cancel(), this.workerRequest=null), this.workerRequestCompleted||(this.workerRequestTokenId++, this.workerRequestCompleted=!0)
  }
  _stopAll(e){
    this._removeAllDecorations(e), this.renderDecorationsTimer!==-1&&(clearTimeout(this.renderDecorationsTimer), this.renderDecorationsTimer=-1), this.workerRequest!==null&&(this.workerRequest.cancel(), this.workerRequest=null), this.workerRequestCompleted||(this.workerRequestTokenId++, this.workerRequestCompleted=!0)
  }
  _onPositionChanged(e){
    if(this.occurrencesHighlightEnablement==="off"){
      this._stopAll();
      return
    }
    if(e.source!=="api"&&e.reason!==3){
      this._stopAll();
      return
    }
    this._run()
  }
  _getWord(){
    const e=this.editor.getSelection(), t=e.startLineNumber, i=e.startColumn;
    return this.model.isDisposed()?null:this.model.getWordAtPosition({
      lineNumber:t,column:i
    })
  }
  getOtherModelsToHighlight(e){
    if(!e)return[];
    if(e.uri.scheme===_n.vscodeNotebookCell){
      const s=[],o=this.codeEditorService.listCodeEditors();
      for(const a of o){
        const l=a.getModel();
        l&&l!==e&&l.uri.scheme===_n.vscodeNotebookCell&&s.push(l)
      }
      return s
    }
    const i=[], r=this.codeEditorService.listCodeEditors();
    for(const s of r){
      if(!iB(s))continue;
      const o=s.getModel();
      o&&e===o.modified&&i.push(o.modified)
    }
    if(i.length)return i;
    if(this.occurrencesHighlightEnablement==="singleFile")return[];
    for(const s of r){
      const o=s.getModel();
      o&&o!==e&&i.push(o)
    }
    return i
  }
  async _run(e, t){
    if(this.editor.hasTextFocus()){
      const r=this.editor.getSelection();
      if(!r||r.startLineNumber!==r.endLineNumber){
        mP.query=null,this._stopAll();
        return
      }
      const s=r.startColumn,o=r.endColumn,a=this._getWord();
      if(!a||a.startColumn>s||a.endColumn<o){
        mP.query=null,this._stopAll();
        return
      }
      mP.query={
        modelInfo:{
          modelURI:this.model.uri,selection:r
        }
      }
    }
    else if(!mP.query){
      this._stopAll();
      return
    }
    if(this.lastCursorPositionChangeTime=new Date().getTime(), Zc(this.editor.getModel().uri, mP.query.modelInfo?.modelURI)){
      if(!e){
        const a=this.decorations.getRanges();
        for(const l of a)if(l.containsPosition(this.editor.getPosition()))return
      }
      this._stopAll(e?this.model.uri:void 0);
      const r=++this.workerRequestTokenId;
      this.workerRequestCompleted=!1;
      const s=this.getOtherModelsToHighlight(this.editor.getModel());
      if(!mP.query||!mP.query.modelInfo)return;
      const o=await this.textModelService.createModelReference(mP.query.modelInfo.modelURI);
      try{
        this.workerRequest=this.computeWithModel(o.object.textEditorModel,mP.query.modelInfo.selection,s),this.workerRequest?.result.then(a=>{
          r===this.workerRequestTokenId&&(this.workerRequestCompleted=!0,this.workerRequestValue=a||[],this._beginRenderDecorations(t??this.occurrencesHighlightDelay))
        },Gc)
      }
      catch(a){
        this.logService.error("Unexpected error during occurrence request. Log: ",a)
      }
      finally{
        o.dispose()
      }
    }
    else if(this.model.uri.scheme===_n.vscodeNotebookCell){
      const r=++this.workerRequestTokenId;
      if(this.workerRequestCompleted=!1,!mP.query||!mP.query.modelInfo)return;
      const s=await this.textModelService.createModelReference(mP.query.modelInfo.modelURI);
      try{
        this.workerRequest=this.computeWithModel(s.object.textEditorModel,mP.query.modelInfo.selection,[this.model]),this.workerRequest?.result.then(o=>{
          r===this.workerRequestTokenId&&(this.workerRequestCompleted=!0,this.workerRequestValue=o||[],this._beginRenderDecorations(t??this.occurrencesHighlightDelay))
        },Gc)
      }
      catch(o){
        this.logService.error("Unexpected error during occurrence request. Log: ",o)
      }
      finally{
        s.dispose()
      }
    }
  }
  computeWithModel(e, t, i){
    return i.length?zly(this.multiDocumentProviders, e, t, this.editor.getOption(136), i):jly(this.providers, e, t, this.editor.getOption(136))
  }
  _beginRenderDecorations(e){
    const t=new Date().getTime(), i=this.lastCursorPositionChangeTime+e;
    t>=i?(this.renderDecorationsTimer=-1, this.renderDecorations()):this.renderDecorationsTimer=setTimeout(()=>{
      this.renderDecorations()
    }, i-t)
  }
  renderDecorations(){
    this.renderDecorationsTimer=-1;
    const e=this.codeEditorService.listCodeEditors();
    for(const t of e){
      const i=HV.get(t);
      if(!i)continue;
      const r=[],s=t.getModel()?.uri;
      if(s&&this.workerRequestValue.has(s)){
        const o=mP.storedDecorationIDs.get(s),a=this.workerRequestValue.get(s);
        if(a)for(const u of a)u.range&&r.push({
          range:u.range,options:Jly(u.kind)
        });
        let l=[];
        t.changeDecorations(u=>{
          l=u.deltaDecorations(o??[],r)
        }),mP.storedDecorationIDs=mP.storedDecorationIDs.set(s,l),r.length>0&&(i.wordHighlighter?.decorations.set(r),i.wordHighlighter?._hasWordHighlights.set(!0))
      }
    }
    this.workerRequest=null
  }
  dispose(){
    this._stopSingular(), this.toUnhook.dispose()
  }
}, yxa=mP=__decorate([__param(4, El), __param(5, fl), __param(6, Fn), __param(7, Rr)], yxa), HV=class extends at{
  static{
    Fyu=this
  }
  static{
    this.ID="editor.contrib.wordHighlighter"
  }
  static get(e){
    return e.getContribution(Fyu.ID)
  }
  constructor(e, t, i, r, s, o, a){
    super(), this._wordHighlighter=null;
    const l=()=>{
      e.hasModel()&&!e.getModel().isTooLargeForTokenization()&&e.getModel().uri.scheme!==_n.accessibleView&&(this._wordHighlighter=new yxa(e,i.documentHighlightProvider,i.multiDocumentHighlightProvider,t,s,r,o,a))
    };
    this._register(e.onDidChangeModel(u=>{
      this._wordHighlighter&&(!u.newModelUrl&&u.oldModelUrl?.scheme!==_n.vscodeNotebookCell&&this.wordHighlighter?.stop(),this._wordHighlighter.dispose(),this._wordHighlighter=null),l()
    })), l()
  }
  get wordHighlighter(){
    return this._wordHighlighter
  }
  saveViewState(){
    return!!(this._wordHighlighter&&this._wordHighlighter.hasDecorations())
  }
  moveNext(){
    this._wordHighlighter?.moveNext()
  }
  moveBack(){
    this._wordHighlighter?.moveBack()
  }
  restoreViewState(e){
    this._wordHighlighter&&e&&this._wordHighlighter.restore(250)
  }
  stopHighlighting(){
    this._wordHighlighter?.stop()
  }
  dispose(){
    this._wordHighlighter&&(this._wordHighlighter.dispose(), this._wordHighlighter=null), super.dispose()
  }
}, HV=Fyu=__decorate([__param(1, wi), __param(2, $u), __param(3, fl), __param(4, El), __param(5, Fn), __param(6, Rr)], HV), Uyu=class extends vu{
  constructor(n, e){
    super(e), this._isNext=n
  }
  run(n, e){
    const t=HV.get(e);
    t&&(this._isNext?t.moveNext():t.moveBack())
  }
}, B5f=class extends Uyu{
  constructor(){
    super(!0, {
      id:"editor.action.wordHighlight.next",label:dt(1711,"Go to Next Symbol Highlight"),precondition:Axa,kbOpts:{
        kbExpr:Ci.editorTextFocus,primary:65,weight:100
      }
    })
  }
}, R5f=class extends Uyu{
  constructor(){
    super(!1, {
      id:"editor.action.wordHighlight.prev",label:dt(1712,"Go to Previous Symbol Highlight"),precondition:Axa,kbOpts:{
        kbExpr:Ci.editorTextFocus,primary:1089,weight:100
      }
    })
  }
}, P5f=class extends vu{
  constructor(){
    super({
      id:"editor.action.wordHighlight.trigger",label:dt(1713,"Trigger Symbol Highlight"),precondition:void 0,kbOpts:{
        kbExpr:Ci.editorTextFocus,primary:0,weight:100
      }
    })
  }
  run(n, e, t){
    const i=HV.get(e);
    i&&i.restoreViewState(!0)
  }
}, Mg(HV.ID, HV, 0), ac(B5f), ac(R5f), ac(P5f), Bvt(vxa)
}
}), Vly=
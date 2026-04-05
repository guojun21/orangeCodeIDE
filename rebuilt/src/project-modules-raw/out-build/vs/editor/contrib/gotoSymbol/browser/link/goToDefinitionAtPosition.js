// Module: out-build/vs/editor/contrib/gotoSymbol/browser/link/goToDefinitionAtPosition.js
// Offset: 27494046 (bundle byte offset)
// Size: 5851 bytes

vr(), _s(), tg(), rt(), Q2A(), dve(), Cu(), ts(), Ku(), td(), Api(), wq(), Ht(), si(), agi(), wet(), Cm(), bv(), L$e=class{
  static{
    Pvi=this
  }
  static{
    this.ID="editor.contrib.gotodefinitionatposition"
  }
  static{
    this.MAX_SOURCE_PREVIEW_LINES=8
  }
  constructor(e, t, i, r){
    this.textModelResolverService=t, this.languageService=i, this.languageFeaturesService=r, this.toUnhook=new Ut, this.toUnhookForKeyboard=new Ut, this.currentWordAtPosition=null, this.previousPromise=null, this.editor=e, this.linkDecorations=this.editor.createDecorationsCollection();
    const s=new Cun(e);
    this.toUnhook.add(s), this.toUnhook.add(s.onMouseMoveOrRelevantKeyDown(([o, a])=>{
      this.startFindDefinitionFromMouse(o,a??void 0)
    })), this.toUnhook.add(s.onExecute(o=>{
      this.isEnabled(o)&&this.gotoDefinition(o.target.position,o.hasSideBySideModifier).catch(a=>{
        Gc(a)
      }).finally(()=>{
        this.removeLinkDecorations()
      })
    })), this.toUnhook.add(s.onCancel(()=>{
      this.removeLinkDecorations(),this.currentWordAtPosition=null
    }))
  }
  static get(e){
    return e.getContribution(Pvi.ID)
  }
  async startFindDefinitionFromCursor(e){
    await this.startFindDefinition(e), this.toUnhookForKeyboard.add(this.editor.onDidChangeCursorPosition(()=>{
      this.currentWordAtPosition=null,this.removeLinkDecorations(),this.toUnhookForKeyboard.clear()
    })), this.toUnhookForKeyboard.add(this.editor.onKeyDown(t=>{
      t&&(this.currentWordAtPosition=null,this.removeLinkDecorations(),this.toUnhookForKeyboard.clear())
    }))
  }
  startFindDefinitionFromMouse(e, t){
    if(e.target.type===9&&this.linkDecorations.length>0)return;
    if(!this.editor.hasModel()||!this.isEnabled(e, t)){
      this.currentWordAtPosition=null,this.removeLinkDecorations();
      return
    }
    const i=e.target.position;
    this.startFindDefinition(i)
  }
  async startFindDefinition(e){
    this.toUnhookForKeyboard.clear();
    const t=e?this.editor.getModel()?.getWordAtPosition(e):null;
    if(!t){
      this.currentWordAtPosition=null,this.removeLinkDecorations();
      return
    }
    if(this.currentWordAtPosition&&this.currentWordAtPosition.startColumn===t.startColumn&&this.currentWordAtPosition.endColumn===t.endColumn&&this.currentWordAtPosition.word===t.word)return;
    this.currentWordAtPosition=t;
    const i=new z3n(this.editor, 15);
    this.previousPromise&&(this.previousPromise.cancel(), this.previousPromise=null), this.previousPromise=dw(o=>this.findDefinition(e, o));
    let r;
    try{
      r=await this.previousPromise
    }
    catch(o){
      Gc(o);
      return
    }
    if(!r||!r.length||!i.validate(this.editor)){
      this.removeLinkDecorations();
      return
    }
    const s=r[0].originSelectionRange?Zt.lift(r[0].originSelectionRange):new Zt(e.lineNumber, t.startColumn, e.lineNumber, t.endColumn);
    if(r.length>1){
      let o=s;
      for(const{
        originSelectionRange:a
      }
      of r)a&&(o=Zt.plusRange(o,a));
      this.addDecoration(o,new _c().appendText(_(1217,null,r.length)))
    }
    else{
      const o=r[0];
      return o.uri?this.textModelResolverService.createModelReference(o.uri).then(a=>{
        if(!a.object||!a.object.textEditorModel){
          a.dispose();
          return
        }
        const{
          object:{
            textEditorModel:l
          }
        }
        =a,{
          startLineNumber:u
        }
        =o.range;
        if(u<1||u>l.getLineCount()){
          a.dispose();
          return
        }
        const d=this.getPreviewValue(l,u,o),m=this.languageService.guessLanguageIdByFilepathOrFirstLine(l.uri);
        this.addDecoration(s,d?new _c().appendCodeblock(m||"",d):void 0),a.dispose()
      }):void 0
    }
  }
  getPreviewValue(e, t, i){
    let r=i.range;
    return r.endLineNumber-r.startLineNumber>=Pvi.MAX_SOURCE_PREVIEW_LINES&&(r=this.getPreviewRangeBasedOnIndentation(e, t)), r=e.validateRange(r), this.stripIndentationFromPreviewRange(e, t, r)
  }
  stripIndentationFromPreviewRange(e, t, i){
    let s=e.getLineFirstNonWhitespaceColumn(t);
    for(let a=t+1;
    a<i.endLineNumber;
    a++){
      const l=e.getLineFirstNonWhitespaceColumn(a);
      s=Math.min(s,l)
    }
    return e.getValueInRange(i).replace(new RegExp(`^\\s{${s-1}}`, "gm"), "").trim()
  }
  getPreviewRangeBasedOnIndentation(e, t){
    const i=e.getLineFirstNonWhitespaceColumn(t), r=Math.min(e.getLineCount(), t+Pvi.MAX_SOURCE_PREVIEW_LINES);
    let s=t+1;
    for(;
    s<r;
    s++){
      const o=e.getLineFirstNonWhitespaceColumn(s);
      if(i===o)break
    }
    return new Zt(t, 1, s+1, 1)
  }
  addDecoration(e, t){
    const i={
      range:e,options:{
        description:"goto-definition-link",inlineClassName:"goto-definition-link",hoverMessage:t
      }
    };
    this.linkDecorations.set([i])
  }
  removeLinkDecorations(){
    this.linkDecorations.clear()
  }
  isEnabled(e, t){
    return this.editor.hasModel()&&e.isLeftClick&&e.isNoneOrSingleMouseDown&&e.target.type===6&&!(e.target.detail.injectedText?.options instanceof WOt)&&(e.hasTriggerModifier||(t?t.keyCodeIsTriggerKey:!1))&&this.languageFeaturesService.definitionProvider.has(this.editor.getModel())
  }
  findDefinition(e, t){
    const i=this.editor.getModel();
    return i?F1e(this.languageFeaturesService.definitionProvider, i, e, !1, t):Promise.resolve(null)
  }
  gotoDefinition(e, t){
    return this.editor.setPosition(e), this.editor.invokeWithinContext(i=>{
      const r=!t&&this.editor.getOption(93)&&!this.isInPeekEditor(i);
      return new bCt({
        openToSide:t,openInPeek:r,muteMessage:!0
      },{
        title:{
          value:"",original:""
        },id:"",precondition:void 0
      }).run(i)
    })
  }
  isInPeekEditor(e){
    const t=e.get(wi);
    return Z4.inPeekEditor.getValue(t)
  }
  dispose(){
    this.toUnhook.dispose(), this.toUnhookForKeyboard.dispose()
  }
}, L$e=Pvi=__decorate([__param(1, El), __param(2, Jl), __param(3, $u)], L$e), Mg(L$e.ID, L$e, 2)
}
});
function amn(n, e){
  if(typeof e=="string")return Eme(n, e);
  if(e)return N$e(n, e)
}
function N$e(n, e){
  let t=e;
  if(e.scheme==="git"&&e.query)try{
    const s=JSON.parse(e.query);
    typeof s.path=="string"&&(t=je.file(s.path))
  }
  catch{
    
  }
  t.scheme.startsWith(V2o)&&(t=t.with({
    scheme:"file"
  }));
  const i=n.asRelativePath(t, !1);
  if(typeof i=="string"&&i.length>0)return i.replace(/\\/g, "/").replace(/^\//, "");
  const r=t.path||"";
  return r?r.replace(/\\/g, "/").replace(/^\//, ""):void 0
}
function Eme(n, e){
  if(!e)return;
  const t=n.resolveRelativePath(e);
  return((t?n.asRelativePath(t, !1):void 0)??t?.path??e).replace(/\\/g, "/").replace(/^\//, "")
}
function FSt(n){
  if(!n)return!1;
  const t=(n.path||n.fsPath).replace(/\\/g, "/");
  return/\/\.cursor\/worktrees(?:\/|$)/.test(t)
}
var uQ=
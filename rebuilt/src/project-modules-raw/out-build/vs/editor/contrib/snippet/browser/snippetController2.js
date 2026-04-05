// Module: out-build/vs/editor/contrib/snippet/browser/snippetController2.js
// Offset: 25285638 (bundle byte offset)
// Size: 6445 bytes

rt(), Js(), Cu(), tl(), Qh(), QE(), Cm(), pme(), Ht(), si(), jr(), $Ag(), Egi={
  overwriteBefore:0, overwriteAfter:0, undoStopBefore:!0, undoStopAfter:!0, adjustWhitespace:!0, clipboardText:void 0, overtypingCapturer:void 0
}, tx=class{
  static{
    gdn=this
  }
  static{
    this.ID="snippetController2"
  }
  static get(e){
    return e.getContribution(gdn.ID)
  }
  static{
    this.InSnippetMode=new Sn("inSnippetMode", !1, _(1542, null))
  }
  static{
    this.HasNextTabstop=new Sn("hasNextTabstop", !1, _(1543, null))
  }
  static{
    this.HasPrevTabstop=new Sn("hasPrevTabstop", !1, _(1544, null))
  }
  constructor(e, t, i, r, s){
    this._editor=e, this._logService=t, this._languageFeaturesService=i, this._languageConfigurationService=s, this._snippetListener=new Ut, this._modelVersionId=-1, this._inSnippet=gdn.InSnippetMode.bindTo(r), this._hasNextTabstop=gdn.HasNextTabstop.bindTo(r), this._hasPrevTabstop=gdn.HasPrevTabstop.bindTo(r)
  }
  dispose(){
    this._inSnippet.reset(), this._hasPrevTabstop.reset(), this._hasNextTabstop.reset(), this._session?.dispose(), this._snippetListener.dispose()
  }
  apply(e, t){
    try{
      this._doInsert(e,typeof t>"u"?Egi:{
        ...Egi,...t
      })
    }
    catch(i){
      this.cancel(),this._logService.error(i),this._logService.error("snippet_error"),this._logService.error("insert_edits=",e),this._logService.error("existing_template=",this._session?this._session._logInfo():"<no_session>")
    }
  }
  insert(e, t){
    try{
      this._doInsert(e,typeof t>"u"?Egi:{
        ...Egi,...t
      })
    }
    catch(i){
      this.cancel(),this._logService.error(i),this._logService.error("snippet_error"),this._logService.error("insert_template=",e),this._logService.error("existing_template=",this._session?this._session._logInfo():"<no_session>")
    }
  }
  _doInsert(e, t){
    if(this._editor.hasModel()){
      if(this._snippetListener.clear(),t.undoStopBefore&&this._editor.getModel().pushStackElement(),this._session&&typeof e!="string"&&this.cancel(),this._session?(Kd(typeof e=="string"),this._session.merge(e,t)):(this._modelVersionId=this._editor.getModel().getAlternativeVersionId(),this._session=new kgi(this._editor,e,t,this._languageConfigurationService),this._session.insert()),t.undoStopAfter&&this._editor.getModel().pushStackElement(),this._session?.hasChoice){
        const i={
          _debugDisplayName:"snippetChoiceCompletions",provideCompletionItems:(u,d)=>{
            if(!this._session||u!==this._editor.getModel()||!ar.equals(this._editor.getPosition(),d))return;
            const{
              activeChoice:m
            }
            =this._session;
            if(!m||m.choice.options.length===0)return;
            const p=u.getValueInRange(m.range),g=!!m.choice.options.find(A=>A.value===p),f=[];
            for(let A=0;
            A<m.choice.options.length;
            A++){
              const w=m.choice.options[A];
              f.push({
                kind:13,label:w.value,insertText:w.value,sortText:"a".repeat(A+1),range:m.range,filterText:g?`${p}_${w.value}`:void 0,command:{
                  id:"jumpToNextSnippetPlaceholder",title:_(1545,null)
                }
              })
            }
            return{
              suggestions:f
            }
          }
        },r=this._editor.getModel();
        let s,o=!1;
        const a=()=>{
          s?.dispose(),o=!1
        },l=()=>{
          o||(s=this._languageFeaturesService.completionProvider.register({
            language:r.getLanguageId(),pattern:r.uri.fsPath,scheme:r.uri.scheme,exclusive:!0
          },i),this._snippetListener.add(s),o=!0)
        };
        this._choiceCompletions={
          provider:i,enable:l,disable:a
        }
      }
      this._updateState(),this._snippetListener.add(this._editor.onDidChangeModelContent(i=>i.isFlush&&this.cancel())),this._snippetListener.add(this._editor.onDidChangeModel(()=>this.cancel())),this._snippetListener.add(this._editor.onDidChangeCursorSelection(()=>this._updateState()))
    }
  }
  _updateState(){
    if(!(!this._session||!this._editor.hasModel())){
      if(this._modelVersionId===this._editor.getModel().getAlternativeVersionId())return this.cancel();
      if(!this._session.hasPlaceholder)return this.cancel();
      if(this._session.isAtLastPlaceholder||!this._session.isSelectionWithinPlaceholders())return this._editor.getModel().pushStackElement(),this.cancel();
      this._inSnippet.set(!0),this._hasPrevTabstop.set(!this._session.isAtFirstPlaceholder),this._hasNextTabstop.set(!this._session.isAtLastPlaceholder),this._handleChoice()
    }
  }
  _handleChoice(){
    if(!this._session||!this._editor.hasModel()){
      this._currentChoice=void 0;
      return
    }
    const{
      activeChoice:e
    }
    =this._session;
    if(!e||!this._choiceCompletions){
      this._choiceCompletions?.disable(),this._currentChoice=void 0;
      return
    }
    this._currentChoice!==e.choice&&(this._currentChoice=e.choice, this._choiceCompletions.enable(), queueMicrotask(()=>{
      RAg(this._editor,this._choiceCompletions.provider)
    }))
  }
  finish(){
    for(;
    this._inSnippet.get();
    )this.next()
  }
  cancel(e=!1){
    this._inSnippet.reset(), this._hasPrevTabstop.reset(), this._hasNextTabstop.reset(), this._snippetListener.clear(), this._currentChoice=void 0, this._session?.dispose(), this._session=void 0, this._modelVersionId=-1, e&&this._editor.setSelections([this._editor.getSelection()])
  }
  prev(){
    this._session?.prev(), this._updateState()
  }
  next(){
    this._session?.next(), this._updateState()
  }
  isInSnippet(){
    return!!this._inSnippet.get()
  }
  getSessionEnclosingRange(){
    if(this._session)return this._session.getEnclosingRange()
  }
}, tx=gdn=__decorate([__param(1, Rr), __param(2, $u), __param(3, wi), __param(4, JS)], tx), Mg(tx.ID, tx, 4), xgi=dF.bindToContribution(tx.get), ld(new xgi({
  id:"jumpToNextSnippetPlaceholder", precondition:Ee.and(tx.InSnippetMode, tx.HasNextTabstop), handler:n=>n.next(), kbOpts:{
    weight:130, kbExpr:Ci.textInputFocus, primary:2
  }
})), ld(new xgi({
  id:"jumpToPrevSnippetPlaceholder", precondition:Ee.and(tx.InSnippetMode, tx.HasPrevTabstop), handler:n=>n.prev(), kbOpts:{
    weight:130, kbExpr:Ci.textInputFocus, primary:1026
  }
})), ld(new xgi({
  id:"leaveSnippet", precondition:tx.InSnippetMode, handler:n=>n.cancel(!0), kbOpts:{
    weight:130, kbExpr:Ci.textInputFocus, primary:9, secondary:[1033]
  }
})), ld(new xgi({
  id:"acceptSnippet", precondition:tx.InSnippetMode, handler:n=>n.finish()
}))
}
});
function lSA(){
  return JAg
}
function uSA(n, e){
  return new ar(n.lineNumber+e.lineNumber-1, e.lineNumber===1?n.column+e.column-1:e.column)
}
function qAg(n, e){
  return new ar(n.lineNumber-e.lineNumber+1, n.lineNumber-e.lineNumber===0?n.column-e.column+1:n.column)
}
function dSA(n, e){
  const i=new h3t(n).getOffset(e);
  return n.substring(i)
}
function jQl(n){
  return HAg(n).map(t=>t.getEndPosition())
}
function HAg(n){
  const e=Dnh.createSortPermutation(n, JP(r=>r.range, Zt.compareRangesUsingStarts)), i=new Fte(e.apply(n)).getNewRanges();
  return e.inverse().apply(i)
}
function hSA(n, e){
  const t=Ua("result", []), i=[];
  return e.add(Oc(r=>{
    const s=n.read(r);
    pp(o=>{
      if(s.length!==i.length){
        i.length=s.length;
        for(let a=0;
        a<i.length;
        a++)i[a]||(i[a]=Ua("item",s[a]));
        t.set([...i],o)
      }
      i.forEach((a,l)=>a.set(s[l],o))
    })
  })), t
}
var JAg, GAg, WAg, Tgi=
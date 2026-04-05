// Module: out-build/vs/editor/contrib/inlineCompletions/browser/model/inlineCompletionsSource.js
// Offset: 25321349 (bundle byte offset)
// Size: 13459 bytes

Vs(), GD(), Po(), Nbe(), _s(), Q_(), rt(), Uc(), oa(), Ei(), Wt(), jr(), AF(), Y1e(), $I(), ts(), EW(), Kbe(), gNe(), Tg(), QE(), XQl(), Cm(), TSA(), Dgi(), FAg(), Ula=class extends at{
  static{
    tjl=this
  }
  static{
    this._requestId=0
  }
  constructor(e, t, i, r, s, o, a, l){
    super(), this._textModel=e, this._versionId=t, this._debounceValue=i, this._languageFeaturesService=r, this._languageConfigurationService=s, this._logService=o, this._configurationService=a, this._instantiationService=l, this._updateOperation=this._register(new uo), this.inlineCompletions=this._register(m4t("inlineCompletions", void 0)), this.suggestWidgetInlineCompletions=this._register(m4t("suggestWidgetInlineCompletions", void 0)), this.clearOperationOnTextModelChange=Ro(this, u=>{
      this._versionId.read(u),this._updateOperation.clear()
    }), this._loadingCount=Ua(this, 0), this.loading=this._loadingCount.map(this, u=>u>0), this._loggingEnabled=C9("editor.inlineSuggest.logFetch", !1, this._configurationService).recomputeInitiallyAndOnChange(this._store), this._structuredFetchLogger=this._register(this._instantiationService.createInstance(Cgi.cast(), "editor.inlineSuggest.logFetch.commandId")), this.clearOperationOnTextModelChange.recomputeInitiallyAndOnChange(this._store)
  }
  _log(e){
    this._loggingEnabled.get()&&this._logService.info(sSA(e)), this._structuredFetchLogger.log(e)
  }
  fetch(e, t, i, r, s){
    const o=new uyg(e, t, this._textModel.getVersionId()), a=t.selectedSuggestionInfo?this.suggestWidgetInlineCompletions:this.inlineCompletions;
    if(this._updateOperation.value?.request.satisfies(o))return this._updateOperation.value.promise;
    if(a.get()?.request.satisfies(o))return Promise.resolve(!0);
    const l=!!this._updateOperation.value;
    this._updateOperation.clear();
    const u=new Wc, d=(async()=>{
      this._loadingCount.set(this._loadingCount.get()+1,void 0);
      try{
        const p=this._debounceValue.get(this._textModel),g=_nh(this._languageFeaturesService.inlineCompletionsProvider.all(this._textModel).map(R=>R.debounceDelayMs),ntA(p9))??p;
        if((l||r&&t.triggerKind===Ybe.Automatic)&&await ISA(g,u.token),u.token.isCancellationRequested||this._store.isDisposed||this._textModel.getVersionId()!==o.versionId)return!1;
        const A=tjl._requestId++;
        (this._loggingEnabled.get()||this._structuredFetchLogger.isEnabled.get())&&this._log({
          sourceId:"InlineCompletions.fetch",kind:"start",requestId:A,modelUri:this._textModel.uri.toString(),modelVersion:this._textModel.getVersionId(),context:{
            triggerKind:t.triggerKind
          },time:Date.now()
        });
        const w=new Date;
        let C,x;
        try{
          C=await SSA(this._languageFeaturesService.inlineCompletionsProvider,e,this._textModel,t,u.token,this._languageConfigurationService)
        }
        catch(R){
          throw x=R,R
        }
        finally{
          if(this._loggingEnabled.get()||this._structuredFetchLogger.isEnabled.get()){
            (u.token.isCancellationRequested||this._store.isDisposed||this._textModel.getVersionId()!==o.versionId)&&(x="canceled");
            const R=C?.completions.map(N=>({
              range:N.range.toString(),text:N.insertText,isInlineEdit:!!N.isInlineEdit,source:N.source.provider.groupId
            }));
            this._log({
              sourceId:"InlineCompletions.fetch",kind:"end",requestId:A,durationMs:Date.now()-w.getTime(),error:x,result:R,time:Date.now()
            })
          }
        }
        if(u.token.isCancellationRequested||this._store.isDisposed||this._textModel.getVersionId()!==o.versionId||s.get())return C.dispose(),!1;
        if(i&&i.isInlineEdit&&i.updatedEditModelVersion===this._textModel.getVersionId()&&(i.canBeReused(this._textModel,e)||C.has(i.inlineCompletion)||C.isEmpty()))return i.reuse(),C.dispose(),!1;
        const I=new Date;
        this._debounceValue.update(this._textModel,I.getTime()-w.getTime());
        const B=new hyg(C,o,this._textModel,this._versionId);
        if(i&&!i.isInlineEdit&&i.canBeReused(this._textModel,e)){
          const R=i.toInlineCompletion(void 0);
          C.has(R)||B.prepend(i.inlineCompletion,R.range,!0)
        }
        this._updateOperation.clear(),pp(R=>{
          a.set(B,R)
        })
      }
      finally{
        this._loadingCount.set(this._loadingCount.get()-1,void 0)
      }
      return!0
    })(), m=new dyg(o, u, d);
    return this._updateOperation.value=m, d
  }
  clear(e){
    this._updateOperation.clear(), this.inlineCompletions.set(void 0, e), this.suggestWidgetInlineCompletions.set(void 0, e)
  }
  clearSuggestWidgetInlineCompletions(e){
    this._updateOperation.value?.request.context.selectedSuggestionInfo&&this._updateOperation.clear(), this.suggestWidgetInlineCompletions.set(void 0, e)
  }
  cancelUpdate(){
    this._updateOperation.clear()
  }
}, Ula=tjl=__decorate([__param(3, $u), __param(4, JS), __param(5, Rr), __param(6, Fn), __param(7, ln)], Ula), uyg=class{
  constructor(n, e, t){
    this.position=n, this.context=e, this.versionId=t
  }
  satisfies(n){
    return this.position.equals(n.position)&&Ngt(this.context.selectedSuggestionInfo, n.context.selectedSuggestionInfo, jsh())&&(n.context.triggerKind===Ybe.Automatic||this.context.triggerKind===Ybe.Explicit)&&this.versionId===n.versionId
  }
  get isExplicitRequest(){
    return this.context.triggerKind===Ybe.Explicit
  }
}, dyg=class{
  constructor(n, e, t){
    this.request=n, this.cancellationTokenSource=e, this.promise=t
  }
  dispose(){
    this.cancellationTokenSource.cancel()
  }
}, hyg=class{
  get inlineCompletions(){
    return this._inlineCompletions
  }
  constructor(n, e, t, i){
    this.inlineCompletionProviderResult=n, this.request=e, this._textModel=t, this._versionId=i, this._refCount=1, this._prependedInlineCompletionItems=[], this._inlineCompletions=n.completions.map(r=>new njl(r, void 0, this._textModel, this._versionId, this.request))
  }
  clone(){
    return this._refCount++, this
  }
  dispose(){
    if(this._refCount--, this._refCount===0){
      this.inlineCompletionProviderResult.dispose();
      for(const n of this._prependedInlineCompletionItems)n.source.removeRef();
      this._inlineCompletions.forEach(n=>n.dispose())
    }
  }
  prepend(n, e, t){
    t&&n.source.addRef(), this._inlineCompletions.unshift(new njl(n, e, this._textModel, this._versionId, this.request)), this._prependedInlineCompletionItems.push(n)
  }
}, njl=class extends at{
  get forwardStable(){
    return this.source.inlineCompletions.enableForwardStability??!1
  }
  get updatedEdit(){
    return this._updatedEditObj.offsetEdit
  }
  get updatedEditModelVersion(){
    return this._updatedEditObj.modelVersion
  }
  get source(){
    return this.inlineCompletion.source
  }
  get sourceInlineCompletion(){
    return this.inlineCompletion.sourceInlineCompletion
  }
  get isInlineEdit(){
    return this.inlineCompletion.isInlineEdit
  }
  constructor(n, e, t, i, r){
    super(), this.inlineCompletion=n, this._textModel=t, this._modelVersion=i, this.request=r, this._updatedRange=Ro(s=>{
      const o=this.updatedEdit.read(s);
      if(!(!o||o.edits.length===0))return Zt.fromPositions(this._textModel.getPositionAt(o.edits[0].replaceRange.start),this._textModel.getPositionAt(o.edits[o.edits.length-1].replaceRange.endExclusive))
    }), this.semanticId=JSON.stringify([this.inlineCompletion.filterText, this.inlineCompletion.insertText, this.inlineCompletion.range.getStartPosition().toString()]), this._updatedEditObj=this._register(this._toUpdatedEdit(e??this.inlineCompletion.range, this.inlineCompletion.insertText))
  }
  toInlineCompletion(n){
    const e=this.toSingleTextEdit(n);
    return this.inlineCompletion.withRangeInsertTextAndFilterText(e.range, e.text, e.text)
  }
  toSingleTextEdit(n){
    this._modelVersion.read(n);
    const e=this.updatedEdit.read(n);
    if(!e)return new cI(this._updatedRange.read(n)??gyg, this.inlineCompletion.insertText);
    const t=e.edits[0].replaceRange.start, i=e.edits[e.edits.length-1].replaceRange.endExclusive, r=new dm(t, i), s=Zt.fromPositions(this._textModel.getPositionAt(r.start), this._textModel.getPositionAt(r.endExclusive));
    let o=this._textModel.getValueInRange(s);
    for(let a=e.edits.length-1;
    a>=0;
    a--){
      const l=e.edits[a],u=l.replaceRange.start-t,d=l.replaceRange.endExclusive-t;
      o=o.substring(0,u)+l.newText+o.substring(d)
    }
    return new cI(s, o)
  }
  isVisible(n, e, t){
    const i=XUe(this.toSingleTextEdit(t), n), r=this._updatedRange.read(t);
    if(!r||!this.inlineCompletion.range.getStartPosition().equals(r.getStartPosition())||e.lineNumber!==i.range.startLineNumber||i.isEmpty)return!1;
    const s=n.getValueInRange(i.range, 1), o=i.text, a=Math.max(0, e.column-i.range.startColumn);
    let l=o.substring(0, a), u=o.substring(a), d=s.substring(0, a), m=s.substring(a);
    const p=n.getLineIndentColumn(i.range.startLineNumber);
    return i.range.startColumn<=p&&(d=d.trimStart(), d.length===0&&(m=m.trimStart()), l=l.trimStart(), l.length===0&&(u=u.trimStart())), l.startsWith(d)&&!!DIc(m, u)
  }
  reuse(){
    this._updatedEditObj.reuse()
  }
  canBeReused(n, e){
    if(!this.updatedEdit.get())return!1;
    if(this.sourceInlineCompletion.isInlineEdit)return this._updatedEditObj.lastChangePartOfInlineEdit;
    const t=this._updatedRange.read(void 0);
    return!!t&&t.containsPosition(e)&&this.isVisible(n, e, void 0)&&YN.ofRange(t).isGreaterThanOrEqualTo(YN.ofRange(this.inlineCompletion.range))
  }
  _toUpdatedEdit(n, e){
    return this.isInlineEdit?this._toInlineEditEdit(n, e):this._toInlineCompletionEdit(n, e)
  }
  _toInlineCompletionEdit(n, e){
    const t=this._textModel.getOffsetAt(n.getStartPosition()), i=this._textModel.getOffsetAt(n.getEndPosition()), r=dm.ofStartAndLength(t, i-t), s=new Vae([new E2(r, e)]);
    return new ijl(s, this._textModel, this._modelVersion, !1)
  }
  _toInlineEditEdit(n, e){
    const t=this._textModel.getEOL(), i=this._textModel.getValueInRange(n), r=e.replace(/\r\n|\r|\n/g, t), a=yJ.getDefault().computeDiff(Zv(i), Zv(r), {
      ignoreTrimWhitespace:!1,computeMoves:!1,extendToSubwords:!0,maxComputationTimeMs:500
    }).changes.flatMap(m=>m.innerChanges??[]);
    function l(m, p){
      const g=YN.fromPosition(p.getStartPosition());
      return YN.ofRange(p).createRange(g.addToPosition(m))
    }
    const u=new cKe(r), d=new Vae(a.map(m=>{
      const p=l(n.getStartPosition(),m.originalRange),g=this._textModel.getOffsetAt(p.getStartPosition()),f=this._textModel.getOffsetAt(p.getEndPosition()),A=dm.ofStartAndLength(g,f-g),w=u.getValueOfRange(m.modifiedRange),C=this._textModel.getValueInRange(p),x=new E2(A,w);
      return DSA(x,C,a.length,this._textModel)
    }));
    return new ijl(d, this._textModel, this._modelVersion, !0)
  }
}, ijl=class extends at{
  get modelVersion(){
    return this._inlineEditModelVersion
  }
  get lastChangePartOfInlineEdit(){
    return this._lastChangePartOfInlineEdit
  }
  get offsetEdit(){
    return this._updatedEdit.map(n=>n??void 0)
  }
  constructor(n, e, t, i){
    super(), this._textModel=e, this._modelVersion=t, this._lastChangePartOfInlineEdit=!1, this._updatedEdit=FSc({
      owner:this,equalityComparer:Ngt((r,s)=>r?.equals(s)),createEmptyChangeSummary:()=>[],handleChange:(r,s)=>(r.didChange(this._modelVersion)&&r.change&&s.push(Qet.fromContentChanges(r.change.changes)),!0)
    }, (r, s)=>{
      this._modelVersion.read(r);
      for(const o of s)this._innerEdits=this._applyTextModelChanges(o,this._innerEdits);
      if(this._innerEdits.length!==0){
        if(this._innerEdits.some(o=>o.edit===void 0))throw new _m("UpdatedEdit: Invalid state");
        return new Vae(this._innerEdits.map(o=>o.edit))
      }
    }), this._inlineEditModelVersion=this._modelVersion.get()??-1, this._innerEdits=n.edits.map(r=>{
      if(i){
        const s=Zt.fromPositions(this._textModel.getPositionAt(r.replaceRange.start),this._textModel.getPositionAt(r.replaceRange.endExclusive)),o=this._textModel.getValueInRange(s);
        return new pyg(r,o)
      }
      return new myg(r)
    }), this._updatedEdit.recomputeInitiallyAndOnChange(this._store)
  }
  _applyTextModelChanges(n, e){
    for(const i of e)i.applyTextModelChanges(n);
    if(e.some(i=>i.edit===void 0))return[];
    const t=this._modelVersion.get();
    return this._lastChangePartOfInlineEdit=e.some(i=>i.lastChangeUpdatedEdit), this._lastChangePartOfInlineEdit&&(this._inlineEditModelVersion=t??-1), t===null||this._inlineEditModelVersion+20<t?[]:(e=e.filter(i=>!i.edit.isEmpty), e.length===0?[]:e)
  }
  reuse(){
    this._inlineEditModelVersion=this._modelVersion.get()??-1
  }
}, rjl=class{
  get edit(){
    return this._edit
  }
  get lastChangeUpdatedEdit(){
    return this._lastChangeUpdatedEdit
  }
  constructor(n){
    this._lastChangeUpdatedEdit=!1, this._edit=n
  }
  applyTextModelChanges(n){
    if(this._lastChangeUpdatedEdit=!1, !this._edit)throw new _m("UpdatedInnerEdits: No edit to apply changes to");
    const e=this.applyChanges(this._edit, n);
    if(!e){
      this._edit=void 0;
      return
    }
    this._edit=e.edit, this._lastChangeUpdatedEdit=e.editHasChanged
  }
}, myg=class extends rjl{
  constructor(n){
    super(n)
  }
  applyChanges(n, e){
    const t=ySA([n.replaceRange], e)[0];
    return{
      edit:new E2(t,n.newText),editHasChanged:!t.equals(n.replaceRange)
    }
  }
}, pyg=class extends rjl{
  constructor(n, e){
    super(n), this._prefixLength=voe(n.newText, e), this._suffixLength=xze(n.newText, e), this._trimmedNewText=n.newText.substring(this._prefixLength, n.newText.length-this._suffixLength)
  }
  applyChanges(n, e){
    let t=n.replaceRange.start, i=n.replaceRange.endExclusive, r=n.newText, s=!1;
    const o=this._prefixLength>0||this._suffixLength>0;
    for(let a=e.edits.length-1;
    a>=0;
    a--){
      const l=e.edits[a],u=l.newText.length>0&&l.replaceRange.isEmpty;
      if(u&&!o&&l.replaceRange.start===t&&r.startsWith(l.newText)){
        t+=l.newText.length,r=r.substring(l.newText.length),i=Math.max(t,i),s=!0;
        continue
      }
      if(u&&o&&l.replaceRange.start===t+this._prefixLength&&this._trimmedNewText.startsWith(l.newText)){
        i+=l.newText.length,s=!0,this._prefixLength+=l.newText.length,this._trimmedNewText=this._trimmedNewText.substring(l.newText.length);
        continue
      }
      if(l.newText.length===0&&l.replaceRange.length>0&&l.replaceRange.start>=t+this._prefixLength&&l.replaceRange.endExclusive<=i-this._suffixLength){
        i-=l.replaceRange.length,s=!0;
        continue
      }
      if(l.equals(n)){
        s=!0,t=l.replaceRange.endExclusive,r="";
        continue
      }
      if(!(l.replaceRange.start>i)){
        if(l.replaceRange.endExclusive<t){
          t+=l.newText.length-l.replaceRange.length,i+=l.newText.length-l.replaceRange.length;
          continue
        }
        return
      }
    }
    return this._trimmedNewText.length===0&&t+this._prefixLength===i-this._suffixLength?{
      edit:new E2(new dm(t+this._prefixLength,t+this._prefixLength),""),editHasChanged:!0
    }
    :{
      edit:new E2(new dm(t,i),r),editHasChanged:s
    }
  }
}, gyg=new Zt(1, 1, 1, 1)
}
}), fyg, PSA=
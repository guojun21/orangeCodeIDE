// Module: out-build/vs/editor/contrib/inlineCompletions/browser/model/inlineCompletionsModel.js
// Offset: 25335686 (bundle byte offset)
// Size: 20186 bytes

GD(), Nbe(), _s(), yn(), rt(), Uc(), oa(), Js(), zg(), hs(), Wt(), nI(), V$(), koe(), Ix(), tl(), ts(), db(), EW(), Kbe(), Tg(), QE(), q3t(), pU(), Tgi(), gSA(), vSA(), Fla(), RSA(), PSA(), Dgi(), $la=class extends at{
  get isAcceptingPartially(){
    return this._isAcceptingPartially
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m){
    super(), this.textModel=e, this._selectedSuggestItem=t, this._textModelVersionId=i, this._positions=r, this._debounceValue=s, this._enabled=o, this._editor=a, this._instantiationService=l, this._commandService=u, this._languageConfigurationService=d, this._accessibilityService=m, this._isActive=Ua(this, !1), this._onlyRequestInlineEditsSignal=IY(this), this._forceUpdateExplicitlySignal=IY(this), this._noDelaySignal=IY(this), this.isHidden=Ua(this, !1), this._selectedInlineCompletionId=Ua(this, void 0), this.primaryPosition=Ro(this, f=>this._positions.read(f)[0]??new ar(1, 1)), this._isAcceptingPartially=!1, this._onDidAccept=new Qe, this.onDidAccept=this._onDidAccept.event, this._lastShownInlineCompletionInfo=void 0, this._lastAcceptedInlineCompletionInfo=void 0, this._didUndoInlineEdits=FSc({
      owner:this,createEmptyChangeSummary:()=>({
        didUndo:!1
      }),handleChange:(f,A)=>(A.didUndo=f.didChange(this._textModelVersionId)&&!!f.change?.isUndoing,!0)
    }, (f, A)=>{
      const w=this._textModelVersionId.read(f);
      return w!==null&&this._lastAcceptedInlineCompletionInfo&&this._lastAcceptedInlineCompletionInfo.textModelVersionIdAfter===w-1&&this._lastAcceptedInlineCompletionInfo.inlineCompletion.isInlineEdit&&A.didUndo?(this._lastAcceptedInlineCompletionInfo=void 0,!0):!1
    }), this._preserveCurrentCompletionReasons=new Set([e$e.Redo, e$e.Undo, e$e.AcceptWord]), this.dontRefetchSignal=IY(this), this._fetchInlineCompletionsPromise=FSc({
      owner:this,createEmptyChangeSummary:()=>({
        dontRefetch:!1,preserveCurrentCompletion:!1,inlineCompletionTriggerKind:Ybe.Automatic,onlyRequestInlineEdits:!1,shouldDebounce:!0
      }),handleChange:(f,A)=>(f.didChange(this._textModelVersionId)&&this._preserveCurrentCompletionReasons.has(this._getReason(f.change))?A.preserveCurrentCompletion=!0:f.didChange(this._forceUpdateExplicitlySignal)?A.inlineCompletionTriggerKind=Ybe.Explicit:f.didChange(this.dontRefetchSignal)?A.dontRefetch=!0:f.didChange(this._onlyRequestInlineEditsSignal)?A.onlyRequestInlineEdits=!0:f.didChange(this._noDelaySignal)&&(A.shouldDebounce=!1),!0)
    }, (f, A)=>{
      if(this._source.clearOperationOnTextModelChange.read(f),this._noDelaySignal.read(f),this.dontRefetchSignal.read(f),this._onlyRequestInlineEditsSignal.read(f),this._forceUpdateExplicitlySignal.read(f),!(this._enabled.read(f)&&this._selectedSuggestItem.read(f)||this._isActive.read(f))){
        this._source.cancelUpdate();
        return
      }
      this._textModelVersionId.read(f);
      const C=this._source.suggestWidgetInlineCompletions.get(),x=this._selectedSuggestItem.read(f);
      if(C&&!x){
        const O=this._source.inlineCompletions.get();
        pp($=>{
          (!O||C.request.versionId>O.request.versionId)&&this._source.inlineCompletions.set(C.clone(),$),this._source.clearSuggestWidgetInlineCompletions($)
        })
      }
      const I=this.primaryPosition.get();
      if(A.dontRefetch)return Promise.resolve(!0);
      if(this._didUndoInlineEdits.read(f)){
        pp(O=>{
          this._source.clear(O)
        });
        return
      }
      let B={
        triggerKind:A.inlineCompletionTriggerKind,selectedSuggestionInfo:x?.toSelectedSuggestionInfo(),includeInlineCompletions:!A.onlyRequestInlineEdits,includeInlineEdits:this._inlineEditsEnabled.read(f)
      };
      B.triggerKind===Ybe.Automatic&&this.textModel.getAlternativeVersionId()===this._lastShownInlineCompletionInfo?.alternateTextModelVersionId&&(B={
        ...B,includeInlineCompletions:!this._lastShownInlineCompletionInfo.inlineCompletion.isInlineEdit,includeInlineEdits:this._lastShownInlineCompletionInfo.inlineCompletion.isInlineEdit
      });
      const R=this.selectedInlineCompletion.get()??this._inlineCompletionItems.get()?.inlineEdit,N=A.preserveCurrentCompletion||R?.forwardStable?R:void 0,M=this._jumpedToId.map(O=>!!O&&O===this._inlineCompletionItems.get()?.inlineEdit?.semanticId);
      return this._source.fetch(I,B,N,A.shouldDebounce,M)
    }), this._inlineCompletionItems=uF({
      owner:this
    }, f=>{
      const A=this._source.inlineCompletions.read(f);
      if(!A)return;
      const w=this.primaryPosition.read(f);
      let C;
      const x=[];
      for(const I of A.inlineCompletions)I.sourceInlineCompletion.isInlineEdit?C=I:I.isVisible(this.textModel,w,f)&&x.push(I);
      return x.length!==0&&(C=void 0),{
        inlineCompletions:x,inlineEdit:C
      }
    }), this._filteredInlineCompletionItems=uF({
      owner:this,equalsFn:Y2o()
    }, f=>this.isHidden.get()?[]:this._inlineCompletionItems.read(f)?.inlineCompletions??[]), this.selectedInlineCompletionIndex=Ro(this, f=>{
      const A=this._selectedInlineCompletionId.read(f),w=this._filteredInlineCompletionItems.read(f),C=this._selectedInlineCompletionId===void 0?-1:w.findIndex(x=>x.semanticId===A);
      return C===-1?(this._selectedInlineCompletionId.set(void 0,void 0),0):C
    }), this.selectedInlineCompletion=Ro(this, f=>{
      const A=this._filteredInlineCompletionItems.read(f),w=this.selectedInlineCompletionIndex.read(f);
      return A[w]
    }), this.activeCommands=uF({
      owner:this,equalsFn:Y2o()
    }, f=>this.selectedInlineCompletion.read(f)?.source.inlineCompletions.commands??[]), this.inlineCompletionsCount=Ro(this, f=>{
      if(this.lastTriggerKind.read(f)===Ybe.Explicit)return this._filteredInlineCompletionItems.read(f).length
    }), this._hasVisiblePeekWidgets=Ro(this, f=>this._editorObs.openedPeekWidgets.read(f)>0), this.state=uF({
      owner:this,equalsFn:(f,A)=>!f||!A?f===A:f.kind==="ghostText"&&A.kind==="ghostText"?zAg(f.ghostTexts,A.ghostTexts)&&f.inlineCompletion===A.inlineCompletion&&f.suggestItem===A.suggestItem:f.kind==="inlineEdit"&&A.kind==="inlineEdit"?f.inlineEdit.equals(A.inlineEdit)&&f.cursorAtInlineEdit===A.cursorAtInlineEdit:!1
    }, f=>{
      const A=this.textModel,C=this._inlineCompletionItems.read(f)?.inlineEdit;
      if(C){
        if(this._hasVisiblePeekWidgets.read(f))return;
        let I=C.toSingleTextEdit(f);
        I=XUe(I,A);
        const B=this.primaryPosition.read(f),R=rh.fromRangeInclusive(I.range).addMargin(1,1).contains(B.lineNumber);
        if(!(R||(C.inlineCompletion.cursorShowRange?.containsPosition(B)??!0))&&!this._inAcceptFlow.read(f))return;
        const M=C.inlineCompletion.source.inlineCompletions.commands,O=new fyg(I,M??[],C.inlineCompletion),$=C.updatedEdit.read(f),H=$?Fte.fromOffsetEdit($,new bKe(this.textModel)).edits:[I];
        return{
          kind:"inlineEdit",inlineEdit:O,inlineCompletion:C,edits:H,cursorAtInlineEdit:R
        }
      }
      const x=this._selectedSuggestItem.read(f);
      if(x){
        const I=XUe(x.toSingleTextEdit(),A),B=this._computeAugmentation(I,f);
        if(!this._suggestPreviewEnabled.read(f)&&!B)return;
        const N=B?.edit??I,M=B?B.edit.text.length-I.text.length:0,O=this._suggestPreviewMode.read(f),$=this._positions.read(f),H=[N,...sjl(this.textModel,$,N)],W=H.map((Y,j)=>YAg(Y,A,O,$[j],M)).filter(Ch),z=W[0]??new fdn(N.range.endLineNumber,[]);
        return{
          kind:"ghostText",edits:H,primaryGhostText:z,ghostTexts:W,inlineCompletion:B?.completion,suggestItem:x
        }
      }
      else{
        if(!this._isActive.read(f))return;
        const I=this.selectedInlineCompletion.read(f);
        if(!I)return;
        const B=I.toSingleTextEdit(f),R=this._inlineSuggestMode.read(f),N=this._positions.read(f),M=[B,...sjl(this.textModel,N,B)],O=M.map(($,H)=>YAg($,A,R,N[H],0)).filter(Ch);
        return O[0]?{
          kind:"ghostText",edits:M,primaryGhostText:O[0],ghostTexts:O,inlineCompletion:I,suggestItem:void 0
        }
        :void 0
      }
    }), this.status=Ro(this, f=>{
      if(this._source.loading.read(f))return"loading";
      const A=this.state.read(f);
      return A?.kind==="ghostText"?"ghostText":A?.kind==="inlineEdit"?"inlineEdit":"noSuggestion"
    }), this.inlineCompletionState=Ro(this, f=>{
      const A=this.state.read(f);
      if(!(!A||A.kind!=="ghostText")&&!this._editorObs.inComposition.read(f))return A
    }), this.inlineEditState=Ro(this, f=>{
      const A=this.state.read(f);
      if(!(!A||A.kind!=="inlineEdit"))return A
    }), this.inlineEditAvailable=Ro(this, f=>!!this.inlineEditState.read(f)), this.warning=Ro(this, f=>this.inlineCompletionState.read(f)?.inlineCompletion?.sourceInlineCompletion.warning), this.ghostTexts=uF({
      owner:this,equalsFn:zAg
    }, f=>{
      const A=this.inlineCompletionState.read(f);
      if(A)return A.ghostTexts
    }), this.primaryGhostText=uF({
      owner:this,equalsFn:VAg
    }, f=>{
      const A=this.inlineCompletionState.read(f);
      if(A)return A?.primaryGhostText
    }), this.showCollapsed=Ro(this, f=>{
      const A=this.state.read(f);
      if(!A||A.kind!=="inlineEdit")return!1;
      const w=A.inlineCompletion.updatedEditModelVersion===this._textModelVersionId.read(f);
      return(this._inlineEditsShowCollapsedEnabled.read(f)||!w)&&this._jumpedToId.read(f)!==A.inlineCompletion.semanticId&&!this._inAcceptFlow.read(f)
    }), this._tabShouldIndent=Ro(this, f=>{
      if(this._inAcceptFlow.read(f))return!1;
      function A(x){
        return x.startLineNumber!==x.endLineNumber
      }
      function w(x,I){
        const B=x.getLineIndentColumn(I),R=x.getLineLastNonWhitespaceColumn(I),N=Math.max(R,B);
        return new Zt(I,B,I,N)
      }
      return this._editorObs.selections.read(f)?.some(x=>x.isEmpty()?this.textModel.getLineLength(x.startLineNumber)===0:A(x)||x.containsRange(w(this.textModel,x.startLineNumber)))
    }), this.tabShouldJumpToInlineEdit=Ro(this, f=>{
      if(this._tabShouldIndent.read(f))return!1;
      const A=this.inlineEditState.read(f);
      return A?this.showCollapsed.read(f)?!0:!A.cursorAtInlineEdit:!1
    }), this.tabShouldAcceptInlineEdit=Ro(this, f=>{
      const A=this.inlineEditState.read(f);
      return!A||this.showCollapsed.read(f)?!1:A.inlineEdit.range.startLineNumber===this._editorObs.cursorLineNumber.read(f)||this._jumpedToId.read(f)===A.inlineCompletion.semanticId?!0:this._tabShouldIndent.read(f)?!1:A.cursorAtInlineEdit
    }), this._inAcceptPartialFlow=Ua(this, !1), this.inPartialAcceptFlow=this._inAcceptPartialFlow, this._jumpedToId=Ua(this, void 0), this._inAcceptFlow=Ua(this, !1), this.inAcceptFlow=this._inAcceptFlow, this._source=this._register(this._instantiationService.createInstance(Ula, this.textModel, this._textModelVersionId, this._debounceValue)), this.lastTriggerKind=this._source.inlineCompletions.map(this, f=>f?.request.context.triggerKind), this._editorObs=HB(this._editor), this._suggestPreviewEnabled=this._editorObs.getOption(123).map(f=>f.preview), this._suggestPreviewMode=this._editorObs.getOption(123).map(f=>f.previewMode), this._inlineSuggestMode=this._editorObs.getOption(64).map(f=>f.mode), this._inlineEditsEnabled=this._editorObs.getOption(64).map(f=>!!f.edits.enabled), this._inlineEditsShowCollapsedEnabled=this._editorObs.getOption(64).map(f=>f.edits.showCollapsed), this._register($gt(this._fetchInlineCompletionsPromise));
    let p;
    this._register(Oc(f=>{
      const w=this.inlineCompletionState.read(f)?.inlineCompletion;
      if(w?.semanticId!==p?.semanticId&&(p=w,w)){
        const C=w.inlineCompletion,x=C.source;
        x.provider.handleItemDidShow?.(x.inlineCompletions,C.sourceInlineCompletion,C.insertText)
      }
    })), this._register(Oc(f=>{
      const A=this._source.inlineCompletions.read(f);
      if(A){
        for(const w of A.inlineCompletions)if(w.updatedEdit.read(f)===void 0){
          this.stop();
          break
        }
      }
    })), this._register(Oc(f=>{
      this._editorObs.versionId.read(f),this._inAcceptFlow.set(!1,void 0)
    })), this._register(Oc(f=>{
      this.state.map(w=>!w||w.kind==="inlineEdit"&&!w.cursorAtInlineEdit).read(f)&&this._jumpedToId.set(void 0,void 0)
    }));
    const g=this.inlineEditState.map(f=>f?.inlineCompletion.semanticId);
    this._register(Oc(f=>{
      g.read(f)&&(this._editor.pushUndoStop(),this._lastShownInlineCompletionInfo={
        alternateTextModelVersionId:this.textModel.getAlternativeVersionId(),inlineCompletion:this.state.get().inlineCompletion.inlineCompletion
      })
    })), this._didUndoInlineEdits.recomputeInitiallyAndOnChange(this._store)
  }
  debugGetSelectedSuggestItem(){
    return this._selectedSuggestItem
  }
  getIndentationInfo(e){
    let t=!1, i=!0;
    const r=this?.primaryGhostText.read(e);
    if(this?._selectedSuggestItem&&r&&r.parts.length>0){
      const{
        column:s,lines:o
      }
      =r.parts[0],a=o[0].line,l=this.textModel.getLineIndentColumn(r.lineNumber);
      if(s<=l){
        let d=TH(a);
        d===-1&&(d=a.length-1),t=d>0;
        const m=this.textModel.getOptions().tabSize;
        i=ZP.visibleColumnFromColumn(a,d+1,m)<m
      }
    }
    return{
      startsWithIndentation:t,startsWithIndentationLessThanTabSize:i
    }
  }
  _getReason(e){
    return e?.isUndoing?e$e.Undo:e?.isRedoing?e$e.Redo:this.isAcceptingPartially?e$e.AcceptWord:e$e.Other
  }
  async trigger(e, t){
    h4t(e, i=>{
      t?.onlyFetchInlineEdits&&this._onlyRequestInlineEditsSignal.trigger(i),t?.noDelay&&this._noDelaySignal.trigger(i),this._isActive.set(!0,i)
    }), await this._fetchInlineCompletionsPromise.get()
  }
  async triggerExplicitly(e, t=!1){
    h4t(e, i=>{
      t&&this._onlyRequestInlineEditsSignal.trigger(i),this._isActive.set(!0,i),this._inAcceptFlow.set(!0,i),this._forceUpdateExplicitlySignal.trigger(i)
    }), await this._fetchInlineCompletionsPromise.get()
  }
  stop(e="automatic", t){
    h4t(t, i=>{
      if(e==="explicitCancel"){
        const r=this.state.get()?.inlineCompletion,s=r?.source,o=r?.sourceInlineCompletion;
        o&&s?.provider.handleRejection&&s.provider.handleRejection(s.inlineCompletions,o)
      }
      this._inAcceptPartialFlow.set(!1,i),this._isActive.set(!1,i),this._source.clear(i)
    })
  }
  _computeAugmentation(e, t){
    const i=this.textModel, r=this._source.suggestWidgetInlineCompletions.read(t), s=r?r.inlineCompletions:[this.selectedInlineCompletion.read(t)].filter(Ch);
    return TFt(s, a=>{
      let l=a.toSingleTextEdit(t);
      return l=XUe(l,i,Zt.fromPositions(l.range.getStartPosition(),e.range.getEndPosition())),KAg(l,e)?{
        completion:a,edit:l
      }
      :void 0
    })
  }
  async _deltaSelectedInlineCompletionIndex(e){
    await this.triggerExplicitly();
    const t=this._filteredInlineCompletionItems.get()||[];
    if(t.length>0){
      const i=(this.selectedInlineCompletionIndex.get()+e+t.length)%t.length;
      this._selectedInlineCompletionId.set(t[i].semanticId,void 0)
    }
    else this._selectedInlineCompletionId.set(void 0, void 0)
  }
  async next(){
    await this._deltaSelectedInlineCompletionIndex(1)
  }
  async previous(){
    await this._deltaSelectedInlineCompletionIndex(-1)
  }
  async accept(e=this._editor){
    if(e.getModel()!==this.textModel)throw new _m;
    if(this._inAcceptPartialFlow.get()){
      this._inAcceptPartialFlow.set(!1,void 0),this.jump();
      return
    }
    let t;
    const i=this.state.get();
    if(i?.kind==="ghostText"){
      if(!i||i.primaryGhostText.isEmpty()||!i.inlineCompletion)return;
      t=i.inlineCompletion
    }
    else if(i?.kind==="inlineEdit")t=i.inlineCompletion;
    else return;
    const r=t.toInlineCompletion(void 0);
    if(r.command&&r.source.addRef(), e.pushUndoStop(), r.snippetInfo)e.executeEdits("inlineSuggestion.accept", [zb.replace(r.range, ""), ...r.additionalTextEdits]), e.setPosition(r.snippetInfo.range.getStartPosition(), "inlineCompletionAccept"), tx.get(e)?.insert(r.snippetInfo.snippet, {
      undoStopBefore:!1
    });
    else{
      const s=i.edits,o=jQl(s).map(a=>Vl.fromPositions(a));
      if(e.executeEdits("inlineSuggestion.accept",[...s.map(a=>zb.replace(a.range,a.text)),...r.additionalTextEdits]),e.setSelections(i.kind==="inlineEdit"?o.slice(-1):o,"inlineCompletionAccept"),i.kind==="inlineEdit"&&!this._accessibilityService.isMotionReduced()){
        const a=new Fte(s).getNewRanges(),l=this._store.add(new byg(e,a,()=>{
          this._store.delete(l)
        }))
      }
    }
    this._onDidAccept.fire(), this.stop(), r.command&&(await this._commandService.executeCommand(r.command.id, ...r.command.arguments||[]).then(void 0, JE), r.source.removeRef()), this._inAcceptFlow.set(!0, void 0), this._lastAcceptedInlineCompletionInfo={
      textModelVersionIdAfter:this.textModel.getVersionId(),inlineCompletion:r
    }
  }
  async acceptNextWord(e){
    await this._acceptNext(e, (t, i)=>{
      const r=this.textModel.getLanguageIdAtPosition(t.lineNumber,t.column),s=this._languageConfigurationService.getLanguageConfiguration(r),o=new RegExp(s.wordDefinition.source,s.wordDefinition.flags.replace("g","")),a=i.match(o);
      let l=0;
      a&&a.index!==void 0?a.index===0?l=a[0].length:l=a.index:l=i.length;
      const d=/\s+/g.exec(i);
      return d&&d.index!==void 0&&d.index+d[0].length<l&&(l=d.index+d[0].length),l
    }, 0)
  }
  async acceptNextLine(e){
    await this._acceptNext(e, (t, i)=>{
      const r=i.match(/\n/);
      return r&&r.index!==void 0?r.index+1:i.length
    }, 1)
  }
  async clearCopilotSuggestions(){
    pp(e=>{
      this._source.clear(e)
    })
  }
  async _acceptNext(e, t, i){
    if(e.getModel()!==this.textModel)throw new _m;
    const r=this.inlineCompletionState.get();
    if(!r||r.primaryGhostText.isEmpty()||!r.inlineCompletion)return;
    const s=r.primaryGhostText, o=r.inlineCompletion.toInlineCompletion(void 0);
    if(o.snippetInfo||o.filterText!==o.insertText){
      await this.accept(e);
      return
    }
    const a=s.parts[0], l=new ar(s.lineNumber, a.column), u=a.text, d=t(l, u);
    if(d===u.length&&s.parts.length===1){
      this.accept(e);
      return
    }
    const m=u.substring(0, d), p=this._positions.get(), g=p[0];
    o.source.addRef();
    try{
      this._isAcceptingPartially=!0;
      try{
        e.pushUndoStop();
        const f=Zt.fromPositions(g,l),A=e.getModel().getValueInRange(f)+m,w=new cI(f,A),C=[w,...sjl(this.textModel,p,w)],x=jQl(C).map(I=>Vl.fromPositions(I));
        e.executeEdits("inlineSuggestion.accept",C.map(I=>zb.replace(I.range,I.text))),e.setSelections(x,"inlineCompletionPartialAccept"),e.revealPositionInCenterIfOutsideViewport(e.getPosition(),1)
      }
      finally{
        this._isAcceptingPartially=!1
      }
      if(o.source.provider.handlePartialAccept){
        const f=Zt.fromPositions(o.range.getStartPosition(),YN.ofText(m).addToPosition(l)),w=e.getModel().getValueInRange(f,1).length;
        o.source.provider.handlePartialAccept(o.source.inlineCompletions,o.sourceInlineCompletion,w,{
          kind:i,acceptedLength:w
        })
      }
    }
    finally{
      o.source.removeRef()
    }
  }
  async acceptNextInlineEditPart(e){
    if(e.getModel()!==this.textModel)throw new _m;
    const t=this.inlineEditState.get(), i=t?.inlineCompletion.updatedEdit.get(), r=t?.inlineCompletion.toInlineCompletion(void 0);
    if(!i||i.isEmpty||!r)return;
    const s=i.edits[0], o=new cI(Zt.fromPositions(this.textModel.getPositionAt(s.replaceRange.start), this.textModel.getPositionAt(s.replaceRange.endExclusive)), s.newText);
    if(!this._editor.getSelection()?.getStartPosition().equals(o.range.getStartPosition())||!this._inAcceptPartialFlow.get()){
      this._inAcceptPartialFlow.set(!0,void 0),this.jump();
      return
    }
    const l=i.edits[1]??void 0, u=l?new cI(Zt.fromPositions(this.textModel.getPositionAt(l.replaceRange.start), this.textModel.getPositionAt(l.replaceRange.endExclusive)), l.newText):void 0;
    r.source.addRef();
    try{
      this._isAcceptingPartially=!0;
      try{
        e.pushUndoStop();
        let d;
        if(u){
          const[p,g]=HAg([o,u]);
          d=[Vl.fromPositions(g.getStartPosition())]
        }
        else d=jQl([o]).map(p=>Vl.fromPositions(p));
        const m=[o];
        e.executeEdits("inlineSuggestion.accept",m.map(p=>zb.replace(p.range,p.text))),e.setSelections(d,"inlineCompletionPartialAccept"),e.revealPositionInCenterIfOutsideViewport(e.getPosition(),1)
      }
      finally{
        this._isAcceptingPartially=!1
      }
    }
    finally{
      r.source.removeRef()
    }
  }
  handleSuggestAccepted(e){
    const t=XUe(e.toSingleTextEdit(), this.textModel), i=this._computeAugmentation(t, void 0);
    if(!i)return;
    const r=i.completion.source, s=i.completion.sourceInlineCompletion, o=i.completion.toInlineCompletion(void 0), l=this.textModel.getValueInRange(o.range, 1).length+t.text.length;
    r.provider.handlePartialAccept?.(r.inlineCompletions, s, t.text.length, {
      kind:2,acceptedLength:l
    })
  }
  extractReproSample(){
    const e=this.textModel.getValue(), t=this.state.get()?.inlineCompletion?.toInlineCompletion(void 0);
    return{
      documentValue:e,inlineCompletion:t?.sourceInlineCompletion
    }
  }
  jump(){
    const e=this.inlineEditState.get();
    e&&pp(t=>{
      this._jumpedToId.set(e.inlineCompletion.semanticId,t),this.dontRefetchSignal.trigger(t);
      const i=e.inlineCompletion.toSingleTextEdit(void 0);
      if(this._editor.setPosition(i.range.getStartPosition(),"inlineCompletions.jump"),i.range.startLineNumber===i.range.endLineNumber&&!i.text.includes(`
`))this._editor.revealPosition(i.range.getStartPosition());
      else{
        const s=new Zt(i.range.startLineNumber-1,1,i.range.endLineNumber+1,1);
        this._editor.revealRange(s,1)
      }
      this._editor.focus()
    })
  }
  async handleInlineEditShown(e){
    e.didShow||(e.markAsShown(), e.source.provider.handleItemDidShow?.(e.source.inlineCompletions, e.sourceInlineCompletion, e.insertText), e.shownCommand&&await this._commandService.executeCommand(e.shownCommand.id, ...e.shownCommand.arguments||[]))
  }
}, $la=__decorate([__param(7, ln), __param(8, fr), __param(9, JS), __param(10, Cf)], $la), (function(n){
  n[n.Undo=0]="Undo", n[n.Redo=1]="Redo", n[n.AcceptWord=2]="AcceptWord", n[n.Other=3]="Other"
})(e$e||(e$e={
  
})), byg=class extends at{
  constructor(n, e, t){
    super(), t&&this._register({
      dispose:()=>t()
    }), this._register(HB(n).setDecorations(F0(e.map(s=>({
      range:s,options:{
        description:"animation",className:"edits-fadeout-decoration",zIndex:1
      }
    })))));
    const i=new zQl(1, 0, 1e3, pSA), r=new QAg(i);
    this._register(Oc(s=>{
      const o=r.getValue(s);
      n.getContainerDomNode().style.setProperty("--animation-opacity",o.toString()),i.isFinished()&&this.dispose()
    }))
  }
}
}
}), Pgi, qla, ojl, vyg, Ayg, Hla, Lgi, yyg=
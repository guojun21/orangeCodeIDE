// Module: out-build/vs/workbench/contrib/aiDiff/browser/tokenStreamingNoVZDiff.js
// Offset: 33817672 (bundle byte offset)
// Size: 7032 bytes

Yki(), rt(), ivn(), Oh(), ts(), Hk(), VD(), F0u(), HIa(), dDa(), hDa=class extends at{
  constructor(e, t, i, r, s, o, a){
    super(), this.model=e, this.mainEditor=t, this.options=r, this.diffingService=s, this.codeEditorService=o, this.editorWorkerService=a, this.streamingCurrentCharacterDecorationId=void 0, this.greenDecIds=[], this.replaceText="", this.streamIsFinished=!1, this.originalText=void 0, this.undoRedoGroup=new FOt, this.originalEditorSelection=void 0, this.showingOrHidingAbortController=new AbortController, this.decorationId=e.deltaDecorations([], [this.getDecorationOptions(i)])[0]
  }
  getDecorationOptions(e){
    let t;
    return t={
      description:"token streaming diff",className:"cpp-suggestion-text-decoration-debug "+(this.options.decorationClassName??""),stickiness:0
    }, {
      range:{
        startLineNumber:e.startLineNumber,startColumn:e.startColumn,endLineNumber:e.endLineNumber,endColumn:e.endColumn
      },options:t
    }
  }
  isShowing(){
    return this.originalText!==void 0
  }
  append(e){
    if(this.streamIsFinished){
      console.error("Trying to append to a finished diff...");
      return
    }
    this.replaceText+=e, this.flushDisplay().catch(t=>console.error(t))
  }
  async setReplaceText(e){
    this.streamIsFinished=!0, this.replaceText=e, await this.flushDisplay({
      isFinal:!0
    }).catch(t=>console.error(t))
  }
  async finish(){
    return this.streamIsFinished=!0, this.flushDisplay({
      isFinal:!0
    })
  }
  async flushDisplay(e){
    this.flusher&&await this.flusher.process({
      runEvenIfAlreadyProcessing:!1,waitUntilProcessed:e?.isFinal===!0
    })
  }
  async flushDisplayIntern(e){
    try{
      if(!this.isShowing())return;
      if(this.replaceText===""&&!this.streamIsFinished){
        this.showStreamingCurrentCharacter("");
        return
      }
      if(this.model.getDecorationRange(this.decorationId)){
        const i=this.getCurrentModelText(),r=this.replaceText,s=this.originalText??"";
        let{
          changes:o
        }
        =await this.editorWorkerService.computeWordDiff_FOR_STRINGS_SMALLER_THAN_100_KB_ONLY(s,r,{
          computeMoves:!1,ignoreTrimWhitespace:!1,maxComputationTimeMs:100,onlyCareAboutPrefixOfOriginalLines:!this.streamIsFinished
        });
        if(!this.streamIsFinished){
          const d=o.at(-1);
          d&&d.removed===!0&&(d.removed=!1);
          const m=o.at(-2);
          d&&m&&m.added===!0&&d.value.startsWith(m.value)&&(o=[...o.slice(0,-2),d])
        }
        let a="";
        for(const d of o)d.removed===!1&&(a+=d.value);
        const{
          changes:l
        }
        =await this.editorWorkerService.computeWordDiff_FOR_STRINGS_SMALLER_THAN_100_KB_ONLY(i,a,{
          computeMoves:!1,ignoreTrimWhitespace:!1,maxComputationTimeMs:100,onlyCareAboutPrefixOfOriginalLines:!1
        });
        if(!this.isShowing())return;
        const u=this.getCurrentModelText();
        if(i!==u||e.aborted)return;
        this.updateVisibleSuggestionText(l),this.showStreamingCurrentCharacter(r),this.updateSuggestionGreenHighlights(o)
      }
    }
    finally{
      
    }
  }
  updateSuggestionGreenHighlights(e){
    const t=this.getCurrentRange();
    if(!t)return;
    const{
      greenRanges:i
    }
    =L0u(e, t, "post-change");
    this.greenDecIds=this.model.deltaDecorations(this.greenDecIds, i.map(r=>({
      range:{
        startLineNumber:r.startLineNumber,startColumn:r.startColumn,endLineNumber:r.endLineNumber,endColumn:r.endColumn
      },options:{
        description:"green",className:"token-streaming-diff-green-background",stickiness:1
      }
    })))
  }
  revertGreenHighlights(){
    this.greenDecIds.length>0&&(this.model.deltaDecorations(this.greenDecIds, []), this.greenDecIds=[])
  }
  showStreamingCurrentCharacter(e){
    if(this.streamIsFinished){
      this.revertStreamingCurrentCharacter();
      return
    }
    const t=this.model.getDecorationRange(this.decorationId);
    if(!t)return;
    const i=e.split(`
`), r=i.at(-1);
    if(r===void 0)return;
    const s=r.length, o=t.startLineNumber+i.length-1, a=Math.max(i.length===1?Math.max(t.startColumn+s-1, t.startColumn):s-1, 1), l={
      startLineNumber:o,startColumn:a,endLineNumber:o,endColumn:a+2
    }, d={
      range:this.model.validateRange(l),options:{
        description:"token streaming diff streaming",className:e.length===0?"cpp-suggestion-text-decoration-debug-streaming-pending":"cpp-suggestion-text-decoration-debug-streaming",stickiness:1
      }
    };
    this.streamingCurrentCharacterDecorationId=this.model.deltaDecorations(this.streamingCurrentCharacterDecorationId?[this.streamingCurrentCharacterDecorationId]:[], [d]).at(0)
  }
  revertStreamingCurrentCharacter(){
    this.streamingCurrentCharacterDecorationId&&(this.model.deltaDecorations([this.streamingCurrentCharacterDecorationId], []), this.streamingCurrentCharacterDecorationId=void 0)
  }
  updateVisibleSuggestionText(e){
    let t=this.model.getDecorationRange(this.decorationId);
    if(!t)return;
    let i=t.startLineNumber, r=t.startColumn, s=[];
    for(const o of e){
      const a=o.value.split(`
`),l=i+a.length-1,u=a.length>1?a[a.length-1].length+1:r+o.value.length;
      o.added===!0?s.push({
        range:new Zt(i,r,i,r),text:o.value
      }):o.removed===!0&&s.push({
        range:new Zt(i,r,l,u),text:""
      }),o.added!==!0&&(r=u,i=l)
    }
    rvn.current=!0, this.options.shouldAppendToUndoRedoGroup?this.model.pushEditOperations([], s, ()=>null, this.undoRedoGroup):this.model.applyEdits(s)
  }
  saveOriginalSelectionMaybe(){
    if(this.mainEditor?.getModel()?.id!==this.model.id)return;
    const e=this.mainEditor.getSelection(), t=this.model.getDecorationRange(this.decorationId);
    t!==null&&e!==null&&e.intersectRanges(t)!==null&&(this.mainEditor.setPosition({
      lineNumber:e.startLineNumber,column:e.startColumn
    }, "cpp-peek"), this.mainEditor.setSelection(new Zt(e.startLineNumber, e.startColumn, e.startLineNumber, e.startColumn), "cpp-peek"), this.originalEditorSelection=e!==null?e:void 0)
  }
  revertOriginalSelectionMaybe(){
    this.mainEditor?.getModel()?.id===this.model.id&&this.originalEditorSelection!==void 0&&this.mainEditor.setSelection(this.originalEditorSelection, "cpp-revert")
  }
  async show(e){
    if(!this.isShowing()){
      const t=this.getNewAbortController();
      this.flusher=new e$f(async i=>(await this.flushDisplayIntern(i),v2e("success")),t.signal,i=>console.error(i),50),this.originalText=this.getCurrentModelText(),this.saveOriginalSelectionMaybe()
    }
    e?.dontFlush!==!0&&await this.flushDisplay()
  }
  async revertSuggestionText(e, t){
    if(this.model.getDecorationRange(this.decorationId)){
      const r=this.getCurrentModelText(),{
        changes:s
      }
      =await this.diffingService.wordDiff(r,e);
      if(this.isShowing())return;
      const o=this.getCurrentModelText();
      if(r!==o||t.aborted)return;
      this.updateVisibleSuggestionText(s)
    }
  }
  async accept(){
    this.isShowing()||await this.show(), this.dispose()
  }
  getNewAbortController(){
    return this.showingOrHidingAbortController.abort(), this.showingOrHidingAbortController=new AbortController, this.showingOrHidingAbortController
  }
  async hide(){
    if(this.isShowing()){
      const e=this.getNewAbortController(),t=this.originalText??"";
      if(this.originalText=void 0,await this.revertSuggestionText(t,e.signal),e.signal.aborted)return;
      this.revertStreamingCurrentCharacter(),this.revertGreenHighlights(),this.revertOriginalSelectionMaybe()
    }
  }
  dispose(){
    super.dispose(), this.model.deltaDecorations([this.decorationId], []), this.revertGreenHighlights(), this.revertStreamingCurrentCharacter()
  }
  getCurrentRange(){
    return this.model.getDecorationRange(this.decorationId)
  }
  getCurrentModelText(){
    const e=this.model.getDecorationRange(this.decorationId);
    return e===null?"":this.model.getValueInRange(e)
  }
}, hDa=__decorate([__param(4, Kbn), __param(5, fl), __param(6, c_)], hDa)
}
}), O0u, mDa, t$f=
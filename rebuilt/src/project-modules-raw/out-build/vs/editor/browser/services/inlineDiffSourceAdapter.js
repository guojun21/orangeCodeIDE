// Module: out-build/vs/editor/browser/services/inlineDiffSourceAdapter.js
// Offset: 33883745 (bundle byte offset)
// Size: 2589 bytes

yn(), rt(), Yr(), tl(), w$f=class extends at{
  constructor(n, e){
    super(), this._inlineDiffService=n, this._diffDecorationVisibilityService=e, this.sourceId="inlineDiffService", this._onDidChange=this._register(new Qe), this.onDidChange=this._onDidChange.event, this._register(this._inlineDiffService.inlineDiffs.event(()=>{
      this._onDidChange.fire()
    })), this._register(this._diffDecorationVisibilityService.onDidChangeGlobal(()=>{
      this._onDidChange.fire()
    }))
  }
  _getDiffs(){
    return this._inlineDiffService.inlineDiffs.nonReactive()
  }
  getDescriptors(){
    return this._getDiffs().map(n=>this._toDescriptor(n))
  }
  getDescriptorsForUri(n){
    return this._getDiffs().filter(e=>Iu.isEqual(e.uri, n)).map(e=>this._toDescriptor(e))
  }
  getDescriptorById(n){
    const e=this._getDiffs().find(t=>t.id===n);
    return e?this._toDescriptor(e):void 0
  }
  canHandle(n){
    return this._inlineDiffService.getHandlerByDiffId(n)!==void 0
  }
  accept(n, e){
    return this._inlineDiffService.acceptDiff(n, e), Promise.resolve()
  }
  reject(n, e, t){
    return this._inlineDiffService.rejectDiff(n, e, t), Promise.resolve()
  }
  acceptChange(n, e){
    const t=this._changeToPosition(n, e);
    return t?this._inlineDiffService.acceptPartialDiff(n, t):!0
  }
  rejectChange(n, e){
    const t=this._changeToPosition(n, e);
    return t?this._inlineDiffService.rejectPartialDiff(n, t):!0
  }
  cancel(n){
    this._inlineDiffService.cancelDiff(n)
  }
  getBaselineTextLines(n){
    return this._getDiffs().find(t=>t.id===n)?.originalTextLines
  }
  getRecentDiffDescriptors(n){
    throw new Error("Not implemented")
  }
  _shouldHideDecorations(n){
    return this._diffDecorationVisibilityService.shouldHideInlineDiffs()
  }
  _toDescriptor(n){
    const e=n.activeLine!==void 0, t=this._shouldHideDecorations(n), i=t;
    return{
      id:n.id,sourceId:this.sourceId,uri:n.uri,currentRange:{
        startLineNumber:n.currentRange.startLineNumber,endLineNumberExclusive:n.currentRange.endLineNumberExclusive
      },changes:n.changes,originalLineTokens:n.originalLineTokens,streamingState:e?{
        activeLine:n.activeLine,pendingRange:n.pendingRange?{
          startLineNumber:n.pendingRange.startLineNumber,endLineNumberExclusive:n.pendingRange.endLineNumberExclusive
        }
        :void 0
      }
      :void 0,metadata:{
        generationId:n.generationUUID,composerId:n.composerMetadata?.composerId,toolCallId:n.composerMetadata?.toolCallId??n.toolCallId,hideDeletionViewZones:i,source:n.source,showNativeAcceptReject:n.showNativeAcceptReject,createdAt:n.createdAt,hideDecorations:t
      }
    }
  }
  _changeToPosition(n, e){
    const t=this._getDiffs().find(r=>r.id===n);
    if(!t)return;
    const i=t.currentRange.startLineNumber+e.addedRange.startLineNumber-1;
    return new ar(i, 1)
  }
}
}
}), mpe, K0u, _$f=
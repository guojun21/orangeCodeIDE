// Module: out-build/vs/editor/common/cursor/cursorCollection.js
// Offset: 1321104 (bundle byte offset)
// Size: 3439 bytes

Vs(), GD(), Eoe(), OaA(), tl(), ts(), db(), Mxc=class{
  constructor(n){
    this.context=n, this.cursors=[new Nxc(n)], this.lastAddedCursorIndex=0
  }
  dispose(){
    for(const n of this.cursors)n.dispose(this.context)
  }
  startTrackingSelections(){
    for(const n of this.cursors)n.startTrackingSelection(this.context)
  }
  stopTrackingSelections(){
    for(const n of this.cursors)n.stopTrackingSelection(this.context)
  }
  updateContext(n){
    this.context=n
  }
  ensureValidState(){
    for(const n of this.cursors)n.ensureValidState(this.context)
  }
  readSelectionFromMarkers(){
    return this.cursors.map(n=>n.readSelectionFromMarkers(this.context))
  }
  getAll(){
    return this.cursors.map(n=>n.asCursorState())
  }
  getViewPositions(){
    return this.cursors.map(n=>n.viewState.position)
  }
  getTopMostViewPosition(){
    return Cnh(this.cursors, JP(n=>n.viewState.position, ar.compare)).viewState.position
  }
  getBottomMostViewPosition(){
    return _nh(this.cursors, JP(n=>n.viewState.position, ar.compare)).viewState.position
  }
  getSelections(){
    return this.cursors.map(n=>n.modelState.selection)
  }
  getViewSelections(){
    return this.cursors.map(n=>n.viewState.selection)
  }
  setSelections(n){
    this.setStates(s_.fromModelSelections(n))
  }
  getPrimaryCursor(){
    return this.cursors[0].asCursorState()
  }
  setStates(n){
    n!==null&&(this.cursors[0].setState(this.context, n[0].modelState, n[0].viewState), this._setSecondaryStates(n.slice(1)))
  }
  _setSecondaryStates(n){
    const e=this.cursors.length-1, t=n.length;
    if(e<t){
      const i=t-e;
      for(let r=0;
      r<i;
      r++)this._addSecondaryCursor()
    }
    else if(e>t){
      const i=e-t;
      for(let r=0;
      r<i;
      r++)this._removeSecondaryCursor(this.cursors.length-2)
    }
    for(let i=0;
    i<t;
    i++)this.cursors[i+1].setState(this.context, n[i].modelState, n[i].viewState)
  }
  killSecondaryCursors(){
    this._setSecondaryStates([])
  }
  _addSecondaryCursor(){
    this.cursors.push(new Nxc(this.context)), this.lastAddedCursorIndex=this.cursors.length-1
  }
  getLastAddedCursorIndex(){
    return this.cursors.length===1||this.lastAddedCursorIndex===0?0:this.lastAddedCursorIndex
  }
  _removeSecondaryCursor(n){
    this.lastAddedCursorIndex>=n+1&&this.lastAddedCursorIndex--, this.cursors[n+1].dispose(this.context), this.cursors.splice(n+1, 1)
  }
  normalize(){
    if(this.cursors.length===1)return;
    const n=this.cursors.slice(0), e=[];
    for(let t=0, i=n.length;
    t<i;
    t++)e.push({
      index:t,selection:n[t].modelState.selection
    });
    e.sort(JP(t=>t.selection, Zt.compareRangesUsingStarts));
    for(let t=0;
    t<e.length-1;
    t++){
      const i=e[t],r=e[t+1],s=i.selection,o=r.selection;
      if(!this.context.cursorConfig.multiCursorMergeOverlapping)continue;
      let a;
      if(o.isEmpty()||s.isEmpty()?a=o.getStartPosition().isBeforeOrEqual(s.getEndPosition()):a=o.getStartPosition().isBefore(s.getEndPosition()),a){
        const l=i.index<r.index?t:t+1,u=i.index<r.index?t+1:t,d=e[u].index,m=e[l].index,p=e[u].selection,g=e[l].selection;
        if(!p.equalsSelection(g)){
          const f=p.plusRange(g),A=p.selectionStartLineNumber===p.startLineNumber&&p.selectionStartColumn===p.startColumn,w=g.selectionStartLineNumber===g.startLineNumber&&g.selectionStartColumn===g.startColumn;
          let C;
          d===this.lastAddedCursorIndex?(C=A,this.lastAddedCursorIndex=m):C=w;
          let x;
          C?x=new Vl(f.startLineNumber,f.startColumn,f.endLineNumber,f.endColumn):x=new Vl(f.endLineNumber,f.endColumn,f.startLineNumber,f.startColumn),e[l].selection=x;
          const I=s_.fromModelSelection(x);
          n[m].setState(this.context,I.modelState,I.viewState)
        }
        for(const f of e)f.index>d&&f.index--;
        n.splice(d,1),e.splice(u,1),this._removeSecondaryCursor(d-1),t--
      }
    }
  }
}
}
}), Fxc, $aA=
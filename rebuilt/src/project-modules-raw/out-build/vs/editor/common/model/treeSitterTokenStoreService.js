// Module: out-build/vs/editor/common/model/treeSitterTokenStoreService.js
// Offset: 1218299 (bundle byte offset)
// Size: 2689 bytes

ts(), Wgh(), Er(), Wt(), rt(), COo=xi("treeSitterTokenizationStoreService"), Qgh=class{
  constructor(){
    this.tokens=new Map
  }
  setTokens(n, e, t){
    const i=new Ut, r=i.add(new Ggh(n));
    this.tokens.set(n, {
      store:r,accurateVersion:n.getVersionId(),disposables:i,guessVersion:n.getVersionId()
    }), r.buildStore(e, t), i.add(n.onWillDispose(()=>{
      const s=this.tokens.get(n);
      s&&(s.disposables.dispose(),this.tokens.delete(n))
    }))
  }
  handleContentChanged(n, e){
    const t=this.tokens.get(n);
    if(t){
      t.guessVersion=e.versionId;
      for(const i of e.changes)if(i.text.length>i.rangeLength){
        const r=i.rangeOffset>0?i.rangeOffset-1:i.rangeOffset,s=t.store.getTokenAt(r);
        let o;
        s?(o={
          startOffsetInclusive:s.startOffsetInclusive,length:s.length+i.text.length-i.rangeLength,token:s.token
        },t.store.markForRefresh(r,i.rangeOffset+(i.text.length>i.rangeLength?i.text.length:i.rangeLength))):o={
          startOffsetInclusive:r,length:i.text.length,token:0
        },t.store.update(s?.length??0,[o],qoe.EditGuess)
      }
      else if(i.text.length<i.rangeLength){
        const r=i.rangeLength-i.text.length;
        t.store.delete(r,i.rangeOffset)
      }
    }
  }
  rangeHasTokens(n, e, t){
    const i=this.tokens.get(n);
    return i?i.store.rangeHasTokens(n.getOffsetAt(e.getStartPosition()), n.getOffsetAt(e.getEndPosition()), t):!1
  }
  hasTokens(n, e){
    const t=this.tokens.get(n);
    return t?!e||t.guessVersion===t.accurateVersion?!0:!t.store.rangeNeedsRefresh(n.getOffsetAt(e.getStartPosition()), n.getOffsetAt(e.getEndPosition())):!1
  }
  getTokens(n, e){
    const t=this.tokens.get(n)?.store;
    if(!t)return;
    const i=n.getOffsetAt({
      lineNumber:e,column:1
    }), r=t.getTokensInRange(i, n.getOffsetAt({
      lineNumber:e,column:n.getLineLength(e)
    })+1), s=new Uint32Array(r.length*2);
    for(let o=0;
    o<r.length;
    o++)s[o*2]=r[o].startOffsetInclusive-i+r[o].length, s[o*2+1]=r[o].token;
    return s
  }
  updateTokens(n, e, t, i){
    const r=this.tokens.get(n);
    if(r){
      r.accurateVersion=e;
      for(const s of t){
        const o=s.newTokens.length>0?s.newTokens[s.newTokens.length-1]:void 0;
        let a;
        o&&r.guessVersion>=e?a=o.startOffsetInclusive+o.length-s.newTokens[0].startOffsetInclusive:s.oldRangeLength?a=s.oldRangeLength:a=0,r.store.update(a,s.newTokens,i)
      }
    }
  }
  markForRefresh(n, e){
    const t=this.tokens.get(n)?.store;
    t&&t.markForRefresh(n.getOffsetAt(e.getStartPosition()), n.getOffsetAt(e.getEndPosition()))
  }
  getNeedsRefresh(n){
    const e=this.tokens.get(n)?.store.getNeedsRefresh();
    return e?e.map(t=>({
      range:Zt.fromPositions(n.getPositionAt(t.startOffset),n.getPositionAt(t.endOffset)),startOffset:t.startOffset,endOffset:t.endOffset
    })):[]
  }
  delete(n){
    const e=this.tokens.get(n);
    e&&(e.disposables.dispose(), this.tokens.delete(n))
  }
  dispose(){
    for(const[, n]of this.tokens)n.disposables.dispose()
  }
}, Vi(COo, Qgh, 1)
}
}), wOn, daA=
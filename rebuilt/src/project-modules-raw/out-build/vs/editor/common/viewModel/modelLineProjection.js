// Module: out-build/vs/editor/common/viewModel/modelLineProjection.js
// Offset: 1382747 (bundle byte offset)
// Size: 5414 bytes

LH(), tl(), Tft(), Lte(), Obh=class{
  constructor(n, e){
    this._projectionData=n, this._isVisible=e
  }
  isVisible(){
    return this._isVisible
  }
  setVisible(n){
    return this._isVisible=n, this
  }
  getProjectionData(){
    return this._projectionData
  }
  getViewLineCount(){
    return this._isVisible?this._projectionData.getOutputLineCount():0
  }
  getViewLineContent(n, e, t){
    this._assertVisible();
    const i=t>0?this._projectionData.breakOffsets[t-1]:0, r=this._projectionData.breakOffsets[t];
    let s;
    if(this._projectionData.injectionOffsets!==null){
      const o=this._projectionData.injectionOffsets.map((l,u)=>new o9e(0,0,l+1,this._projectionData.injectionOptions[u],this._projectionData.injectionOptions[u].order??0));
      o.sort((l,u)=>l.column===u.column?l.order-u.order:l.column-u.column),s=o9e.applyInjectedText(n.getLineContent(e),o).substring(i,r)
    }
    else s=n.getValueInRange({
      startLineNumber:e,startColumn:i+1,endLineNumber:e,endColumn:r+1
    });
    return t>0&&(s=Fbh(this._projectionData.wrappedTextIndentLength)+s), s
  }
  getViewLineLength(n, e, t){
    return this._assertVisible(), this._projectionData.getLineLength(t)
  }
  getViewLineMinColumn(n, e, t){
    return this._assertVisible(), this._projectionData.getMinOutputOffset(t)+1
  }
  getViewLineMaxColumn(n, e, t){
    return this._assertVisible(), this._projectionData.getMaxOutputOffset(t)+1
  }
  getViewLineData(n, e, t){
    const i=new Array;
    return this.getViewLinesData(n, e, t, 1, 0, [!0], i), i[0]
  }
  getViewLinesData(n, e, t, i, r, s, o){
    this._assertVisible();
    const a=this._projectionData, l=a.injectionOffsets, u=a.injectionOptions;
    let d=null;
    if(l){
      d=[];
      let p=0,g=0;
      for(let f=0;
      f<a.getOutputLineCount();
      f++){
        const A=new Array;
        d[f]=A;
        const w=f>0?a.breakOffsets[f-1]:0,C=a.breakOffsets[f];
        for(;
        g<l.length;
        ){
          const x=u[g].content.length,I=l[g]+p,B=I+x;
          if(I>C)break;
          if(w<B){
            const R=u[g];
            if(R.inlineClassName){
              const N=f>0?a.wrappedTextIndentLength:0,M=N+Math.max(I-w,0),O=N+Math.min(B-w,C-w);
              M!==O&&A.push(new Tbh(M,O,R.inlineClassName,R.inlineClassNameAffectsLetterSpacing))
            }
          }
          if(B<=C)p+=x,g++;
          else break
        }
      }
    }
    let m;
    if(l){
      const p=l.map((f,A)=>A).sort((f,A)=>{
        const w=l[f],C=l[A];
        if(w===C){
          const x=u[f].order??0,I=u[A].order??0;
          return x-I
        }
        return w-C
      }),g=[];
      for(const f of p){
        const A=l[f],w=u[f].tokens;
        w?w.forEach((C,x)=>{
          g.push({
            offset:A,text:C.substring(u[f].content),tokenMetadata:x.metadata
          })
        }):g.push({
          offset:A,text:u[f].content,tokenMetadata:OB.defaultTokenMetadata
        })
      }
      m=n.tokenization.getLineTokens(e).withInserted(g)
    }
    else m=n.tokenization.getLineTokens(e);
    for(let p=t;
    p<t+i;
    p++){
      const g=r+p-t;
      if(!s[g]){
        o[g]=null;
        continue
      }
      o[g]=this._getViewLineData(m,d?d[p]:null,p)
    }
  }
  _getViewLineData(n, e, t){
    this._assertVisible();
    const i=this._projectionData, r=t>0?i.wrappedTextIndentLength:0, s=t>0?i.breakOffsets[t-1]:0, o=i.breakOffsets[t], a=n.sliceAndInflate(s, o, r);
    let l=a.getLineContent();
    t>0&&(l=Fbh(i.wrappedTextIndentLength)+l);
    const u=this._projectionData.getMinOutputOffset(t)+1, d=l.length+1, m=t+1<this.getViewLineCount(), p=t===0?0:i.breakOffsetsVisibleColumn[t-1];
    return new VOo(l, m, u, d, p, a, e)
  }
  getModelColumnOfViewPosition(n, e){
    return this._assertVisible(), this._projectionData.translateToInputOffset(n, e-1)+1
  }
  getViewPositionOfModelPosition(n, e, t=2){
    return this._assertVisible(), this._projectionData.translateToOutputPosition(e-1, t).toPosition(n)
  }
  getViewLineNumberOfModelPosition(n, e){
    this._assertVisible();
    const t=this._projectionData.translateToOutputPosition(e-1);
    return n+t.outputLineIndex
  }
  normalizePosition(n, e, t){
    const i=e.lineNumber-n;
    return this._projectionData.normalizeOutputPosition(n, e.column-1, t).toPosition(i)
  }
  getInjectedTextAt(n, e){
    return this._projectionData.getInjectedText(n, e-1)
  }
  _assertVisible(){
    if(!this._isVisible)throw new Error("Not supported")
  }
}, tTc=class lGb{
  static{
    this.INSTANCE=new lGb
  }
  constructor(){
    
  }
  isVisible(){
    return!0
  }
  setVisible(e){
    return e?this:nTc.INSTANCE
  }
  getProjectionData(){
    return null
  }
  getViewLineCount(){
    return 1
  }
  getViewLineContent(e, t, i){
    return e.getLineContent(t)
  }
  getViewLineLength(e, t, i){
    return e.getLineLength(t)
  }
  getViewLineMinColumn(e, t, i){
    return e.getLineMinColumn(t)
  }
  getViewLineMaxColumn(e, t, i){
    return e.getLineMaxColumn(t)
  }
  getViewLineData(e, t, i){
    const r=e.tokenization.getLineTokens(t), s=r.getLineContent();
    return new VOo(s, !1, 1, s.length+1, 0, r.inflate(), null)
  }
  getViewLinesData(e, t, i, r, s, o, a){
    if(!o[s]){
      a[s]=null;
      return
    }
    a[s]=this.getViewLineData(e, t, 0)
  }
  getModelColumnOfViewPosition(e, t){
    return t
  }
  getViewPositionOfModelPosition(e, t){
    return new ar(e, t)
  }
  getViewLineNumberOfModelPosition(e, t){
    return e
  }
  normalizePosition(e, t, i){
    return t
  }
  getInjectedTextAt(e, t){
    return null
  }
}, nTc=class uGb{
  static{
    this.INSTANCE=new uGb
  }
  constructor(){
    
  }
  isVisible(){
    return!1
  }
  setVisible(e){
    return e?tTc.INSTANCE:this
  }
  getProjectionData(){
    return null
  }
  getViewLineCount(){
    return 0
  }
  getViewLineContent(e, t, i){
    throw new Error("Not supported")
  }
  getViewLineLength(e, t, i){
    throw new Error("Not supported")
  }
  getViewLineMinColumn(e, t, i){
    throw new Error("Not supported")
  }
  getViewLineMaxColumn(e, t, i){
    throw new Error("Not supported")
  }
  getViewLineData(e, t, i){
    throw new Error("Not supported")
  }
  getViewLinesData(e, t, i, r, s, o, a){
    throw new Error("Not supported")
  }
  getModelColumnOfViewPosition(e, t){
    throw new Error("Not supported")
  }
  getViewPositionOfModelPosition(e, t){
    throw new Error("Not supported")
  }
  getViewLineNumberOfModelPosition(e, t){
    throw new Error("Not supported")
  }
  normalizePosition(e, t, i){
    throw new Error("Not supported")
  }
  getInjectedTextAt(e, t){
    throw new Error("Not supported")
  }
}, YOo=[""]
}
}), Uft, iTc, rTc, UVe=
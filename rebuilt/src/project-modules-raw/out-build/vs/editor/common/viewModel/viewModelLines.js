// Module: out-build/vs/editor/common/viewModel/viewModelLines.js
// Offset: 1391827 (bundle byte offset)
// Size: 20177 bytes

Vs(), tl(), ts(), GEc(), bv(), Tft(), Uxc(), jaA(), UVe(), Lte(), Ubh=class{
  constructor(n, e, t, i, r, s, o, a, l, u){
    this._editorId=n, this.model=e, this._validModelVersionId=-1, this._domLineBreaksComputerFactory=t, this._monospaceLineBreaksComputerFactory=i, this.fontInfo=r, this.tabSize=s, this.wrappingStrategy=o, this.wrappingColumn=a, this.wrappingIndent=l, this.wordBreak=u, this._constructLines(!0, null)
  }
  dispose(){
    this.hiddenAreasDecorationIds=this.model.deltaDecorations(this.hiddenAreasDecorationIds, [])
  }
  createCoordinatesConverter(){
    return new $bh(this)
  }
  _constructLines(n, e){
    this.modelLineProjections=[], n&&(this.hiddenAreasDecorationIds=this.model.deltaDecorations(this.hiddenAreasDecorationIds, []));
    const t=this.model.getLinesContent(), i=this.model.getInjectedTextDecorations(this._editorId), r=t.length, s=this.createLineBreaksComputer(), o=new Ebe(o9e.fromDecorations(i));
    for(let f=0;
    f<r;
    f++){
      const A=o.takeWhile(w=>w.lineNumber===f+1);
      s.addRequest(t[f],A,e?e[f]:null)
    }
    const a=s.finalize(), l=[], u=this.hiddenAreasDecorationIds.map(f=>this.model.getDecorationRange(f)).sort(Zt.compareRangesUsingStarts);
    let d=1, m=0, p=-1, g=p+1<u.length?m+1:r+2;
    for(let f=0;
    f<r;
    f++){
      const A=f+1;
      A===g&&(p++,d=u[p].startLineNumber,m=u[p].endLineNumber,g=p+1<u.length?m+1:r+2);
      const w=A>=d&&A<=m,C=eTc(a[f],!w);
      l[f]=C.getViewLineCount(),this.modelLineProjections[f]=C
    }
    this._validModelVersionId=this.model.getVersionId(), this.projectedModelLineLineCounts=new iTc(l)
  }
  getHiddenAreas(){
    return this.hiddenAreasDecorationIds.map(n=>this.model.getDecorationRange(n))
  }
  setHiddenAreas(n){
    const e=n.map(m=>this.model.validateRange(m)), t=zaA(e), i=this.hiddenAreasDecorationIds.map(m=>this.model.getDecorationRange(m)).sort(Zt.compareRangesUsingStarts);
    if(t.length===i.length){
      let m=!1;
      for(let p=0;
      p<t.length;
      p++)if(!t[p].equalsRange(i[p])){
        m=!0;
        break
      }
      if(!m)return!1
    }
    const r=t.map(m=>({
      range:m,options:Zh.EMPTY
    }));
    this.hiddenAreasDecorationIds=this.model.deltaDecorations(this.hiddenAreasDecorationIds, r);
    const s=t;
    let o=1, a=0, l=-1, u=l+1<s.length?a+1:this.modelLineProjections.length+2, d=!1;
    for(let m=0;
    m<this.modelLineProjections.length;
    m++){
      const p=m+1;
      p===u&&(l++,o=s[l].startLineNumber,a=s[l].endLineNumber,u=l+1<s.length?a+1:this.modelLineProjections.length+2);
      let g=!1;
      if(p>=o&&p<=a?this.modelLineProjections[m].isVisible()&&(this.modelLineProjections[m]=this.modelLineProjections[m].setVisible(!1),g=!0):(d=!0,this.modelLineProjections[m].isVisible()||(this.modelLineProjections[m]=this.modelLineProjections[m].setVisible(!0),g=!0)),g){
        const f=this.modelLineProjections[m].getViewLineCount();
        this.projectedModelLineLineCounts.setValue(m,f)
      }
    }
    return d||this.setHiddenAreas([]), !0
  }
  modelPositionIsVisible(n, e){
    return n<1||n>this.modelLineProjections.length?!1:this.modelLineProjections[n-1].isVisible()
  }
  getModelLineViewLineCount(n){
    return n<1||n>this.modelLineProjections.length?1:this.modelLineProjections[n-1].getViewLineCount()
  }
  setTabSize(n){
    return this.tabSize===n?!1:(this.tabSize=n, this._constructLines(!1, null), !0)
  }
  setWrappingSettings(n, e, t, i, r){
    const s=this.fontInfo.equals(n), o=this.wrappingStrategy===e, a=this.wrappingColumn===t, l=this.wrappingIndent===i, u=this.wordBreak===r;
    if(s&&o&&a&&l&&u)return!1;
    const d=s&&o&&!a&&l&&u;
    this.fontInfo=n, this.wrappingStrategy=e, this.wrappingColumn=t, this.wrappingIndent=i, this.wordBreak=r;
    let m=null;
    if(d){
      m=[];
      for(let p=0,g=this.modelLineProjections.length;
      p<g;
      p++)m[p]=this.modelLineProjections[p].getProjectionData()
    }
    return this._constructLines(!1, m), !0
  }
  createLineBreaksComputer(){
    return(this.wrappingStrategy==="advanced"?this._domLineBreaksComputerFactory:this._monospaceLineBreaksComputerFactory).createLineBreaksComputer(this.fontInfo, this.tabSize, this.wrappingColumn, this.wrappingIndent, this.wordBreak)
  }
  onModelFlushed(){
    this._constructLines(!0, null)
  }
  onModelLinesDeleted(n, e, t){
    if(!n||n<=this._validModelVersionId)return null;
    const i=e===1?1:this.projectedModelLineLineCounts.getPrefixSum(e-1)+1, r=this.projectedModelLineLineCounts.getPrefixSum(t);
    return this.modelLineProjections.splice(e-1, t-e+1), this.projectedModelLineLineCounts.removeValues(e-1, t-e+1), new GOo(i, r)
  }
  onModelLinesInserted(n, e, t, i){
    if(!n||n<=this._validModelVersionId)return null;
    const r=e>2&&!this.modelLineProjections[e-2].isVisible(), s=e===1?1:this.projectedModelLineLineCounts.getPrefixSum(e-1)+1;
    let o=0;
    const a=[], l=[];
    for(let u=0, d=i.length;
    u<d;
    u++){
      const m=eTc(i[u],!r);
      a.push(m);
      const p=m.getViewLineCount();
      o+=p,l[u]=p
    }
    return this.modelLineProjections=this.modelLineProjections.slice(0, e-1).concat(a).concat(this.modelLineProjections.slice(e-1)), this.projectedModelLineLineCounts.insertValues(e-1, l), new WOo(s, s+o-1)
  }
  onModelLineChanged(n, e, t){
    if(n!==null&&n<=this._validModelVersionId)return[!1, null, null, null];
    const i=e-1, r=this.modelLineProjections[i].getViewLineCount(), s=this.modelLineProjections[i].isVisible(), o=eTc(t, s);
    this.modelLineProjections[i]=o;
    const a=this.modelLineProjections[i].getViewLineCount();
    let l=!1, u=0, d=-1, m=0, p=-1, g=0, f=-1;
    r>a?(u=this.projectedModelLineLineCounts.getPrefixSum(e-1)+1, d=u+a-1, g=d+1, f=g+(r-a)-1, l=!0):r<a?(u=this.projectedModelLineLineCounts.getPrefixSum(e-1)+1, d=u+r-1, m=d+1, p=m+(a-r)-1, l=!0):(u=this.projectedModelLineLineCounts.getPrefixSum(e-1)+1, d=u+a-1), this.projectedModelLineLineCounts.setValue(i, a);
    const A=u<=d?new Oxc(u, d-u+1):null, w=m<=p?new WOo(m, p):null, C=g<=f?new GOo(g, f):null;
    return[l, A, w, C]
  }
  acceptVersionId(n){
    this._validModelVersionId=n, this.modelLineProjections.length===1&&!this.modelLineProjections[0].isVisible()&&this.setHiddenAreas([])
  }
  getViewLineCount(){
    return this.projectedModelLineLineCounts.getTotalSum()
  }
  _toValidViewLineNumber(n){
    if(n<1)return 1;
    const e=this.getViewLineCount();
    return n>e?e:n|0
  }
  getActiveIndentGuide(n, e, t){
    n=this._toValidViewLineNumber(n), e=this._toValidViewLineNumber(e), t=this._toValidViewLineNumber(t);
    const i=this.convertViewPositionToModelPosition(n, this.getViewLineMinColumn(n)), r=this.convertViewPositionToModelPosition(e, this.getViewLineMinColumn(e)), s=this.convertViewPositionToModelPosition(t, this.getViewLineMinColumn(t)), o=this.model.guides.getActiveIndentGuide(i.lineNumber, r.lineNumber, s.lineNumber), a=this.convertModelPositionToViewPosition(o.startLineNumber, 1), l=this.convertModelPositionToViewPosition(o.endLineNumber, this.model.getLineMaxColumn(o.endLineNumber));
    return{
      startLineNumber:a.lineNumber,endLineNumber:l.lineNumber,indent:o.indent
    }
  }
  getViewLineInfo(n){
    n=this._toValidViewLineNumber(n);
    const e=this.projectedModelLineLineCounts.getIndexOf(n-1), t=e.index, i=e.remainder;
    return new sTc(t+1, i)
  }
  getMinColumnOfViewLine(n){
    return this.modelLineProjections[n.modelLineNumber-1].getViewLineMinColumn(this.model, n.modelLineNumber, n.modelLineWrappedLineIdx)
  }
  getMaxColumnOfViewLine(n){
    return this.modelLineProjections[n.modelLineNumber-1].getViewLineMaxColumn(this.model, n.modelLineNumber, n.modelLineWrappedLineIdx)
  }
  getModelStartPositionOfViewLine(n){
    const e=this.modelLineProjections[n.modelLineNumber-1], t=e.getViewLineMinColumn(this.model, n.modelLineNumber, n.modelLineWrappedLineIdx), i=e.getModelColumnOfViewPosition(n.modelLineWrappedLineIdx, t);
    return new ar(n.modelLineNumber, i)
  }
  getModelEndPositionOfViewLine(n){
    const e=this.modelLineProjections[n.modelLineNumber-1], t=e.getViewLineMaxColumn(this.model, n.modelLineNumber, n.modelLineWrappedLineIdx), i=e.getModelColumnOfViewPosition(n.modelLineWrappedLineIdx, t);
    return new ar(n.modelLineNumber, i)
  }
  getViewLineInfosGroupedByModelRanges(n, e){
    const t=this.getViewLineInfo(n), i=this.getViewLineInfo(e), r=new Array;
    let s=this.getModelStartPositionOfViewLine(t), o=new Array;
    for(let a=t.modelLineNumber;
    a<=i.modelLineNumber;
    a++){
      const l=this.modelLineProjections[a-1];
      if(l.isVisible()){
        const u=a===t.modelLineNumber?t.modelLineWrappedLineIdx:0,d=a===i.modelLineNumber?i.modelLineWrappedLineIdx+1:l.getViewLineCount();
        for(let m=u;
        m<d;
        m++)o.push(new sTc(a,m))
      }
      if(!l.isVisible()&&s){
        const u=new ar(a-1,this.model.getLineMaxColumn(a-1)+1),d=Zt.fromPositions(s,u);
        r.push(new oTc(d,o)),o=[],s=null
      }
      else l.isVisible()&&!s&&(s=new ar(a,1))
    }
    if(s){
      const a=Zt.fromPositions(s,this.getModelEndPositionOfViewLine(i));
      r.push(new oTc(a,o))
    }
    return r
  }
  getViewLinesBracketGuides(n, e, t, i){
    const r=t?this.convertViewPositionToModelPosition(t.lineNumber, t.column):null, s=[];
    for(const o of this.getViewLineInfosGroupedByModelRanges(n, e)){
      const a=o.modelRange.startLineNumber,l=this.model.guides.getLinesBracketGuides(a,o.modelRange.endLineNumber,r,i);
      for(const u of o.viewLines){
        const m=l[u.modelLineNumber-a].map(p=>{
          if(p.forWrappedLinesAfterColumn!==-1&&this.modelLineProjections[u.modelLineNumber-1].getViewPositionOfModelPosition(0,p.forWrappedLinesAfterColumn).lineNumber>=u.modelLineWrappedLineIdx||p.forWrappedLinesBeforeOrAtColumn!==-1&&this.modelLineProjections[u.modelLineNumber-1].getViewPositionOfModelPosition(0,p.forWrappedLinesBeforeOrAtColumn).lineNumber<u.modelLineWrappedLineIdx)return;
          if(!p.horizontalLine)return p;
          let g=-1;
          if(p.column!==-1){
            const w=this.modelLineProjections[u.modelLineNumber-1].getViewPositionOfModelPosition(0,p.column);
            if(w.lineNumber===u.modelLineWrappedLineIdx)g=w.column;
            else if(w.lineNumber<u.modelLineWrappedLineIdx)g=this.getMinColumnOfViewLine(u);
            else if(w.lineNumber>u.modelLineWrappedLineIdx)return
          }
          const f=this.convertModelPositionToViewPosition(u.modelLineNumber,p.horizontalLine.endColumn),A=this.modelLineProjections[u.modelLineNumber-1].getViewPositionOfModelPosition(0,p.horizontalLine.endColumn);
          return A.lineNumber===u.modelLineWrappedLineIdx?new BVe(p.visibleColumn,g,p.className,new BOt(p.horizontalLine.top,f.column),-1,-1):A.lineNumber<u.modelLineWrappedLineIdx||p.visibleColumn!==-1?void 0:new BVe(p.visibleColumn,g,p.className,new BOt(p.horizontalLine.top,this.getMaxColumnOfViewLine(u)),-1,-1)
        });
        s.push(m.filter(p=>!!p))
      }
    }
    return s
  }
  getViewLinesIndentGuides(n, e){
    n=this._toValidViewLineNumber(n), e=this._toValidViewLineNumber(e);
    const t=this.convertViewPositionToModelPosition(n, this.getViewLineMinColumn(n)), i=this.convertViewPositionToModelPosition(e, this.getViewLineMaxColumn(e));
    let r=[];
    const s=[], o=[], a=t.lineNumber-1, l=i.lineNumber-1;
    let u=null;
    for(let g=a;
    g<=l;
    g++){
      const f=this.modelLineProjections[g];
      if(f.isVisible()){
        const A=f.getViewLineNumberOfModelPosition(0,g===a?t.column:1),w=f.getViewLineNumberOfModelPosition(0,this.model.getLineMaxColumn(g+1)),C=w-A+1;
        let x=0;
        C>1&&f.getViewLineMinColumn(this.model,g+1,w)===1&&(x=A===0?1:2),s.push(C),o.push(x),u===null&&(u=new ar(g+1,0))
      }
      else u!==null&&(r=r.concat(this.model.guides.getLinesIndentGuides(u.lineNumber,g)),u=null)
    }
    u!==null&&(r=r.concat(this.model.guides.getLinesIndentGuides(u.lineNumber, i.lineNumber)), u=null);
    const d=e-n+1, m=new Array(d);
    let p=0;
    for(let g=0, f=r.length;
    g<f;
    g++){
      let A=r[g];
      const w=Math.min(d-p,s[g]),C=o[g];
      let x;
      C===2?x=0:C===1?x=1:x=w;
      for(let I=0;
      I<w;
      I++)I===x&&(A=0),m[p++]=A
    }
    return m
  }
  getViewLineContent(n){
    const e=this.getViewLineInfo(n);
    return this.modelLineProjections[e.modelLineNumber-1].getViewLineContent(this.model, e.modelLineNumber, e.modelLineWrappedLineIdx)
  }
  getViewLineLength(n){
    const e=this.getViewLineInfo(n);
    return this.modelLineProjections[e.modelLineNumber-1].getViewLineLength(this.model, e.modelLineNumber, e.modelLineWrappedLineIdx)
  }
  getViewLineMinColumn(n){
    const e=this.getViewLineInfo(n);
    return this.modelLineProjections[e.modelLineNumber-1].getViewLineMinColumn(this.model, e.modelLineNumber, e.modelLineWrappedLineIdx)
  }
  getViewLineMaxColumn(n){
    const e=this.getViewLineInfo(n);
    return this.modelLineProjections[e.modelLineNumber-1].getViewLineMaxColumn(this.model, e.modelLineNumber, e.modelLineWrappedLineIdx)
  }
  getViewLineData(n){
    const e=this.getViewLineInfo(n);
    return this.modelLineProjections[e.modelLineNumber-1].getViewLineData(this.model, e.modelLineNumber, e.modelLineWrappedLineIdx)
  }
  getViewLinesData(n, e, t){
    n=this._toValidViewLineNumber(n), e=this._toValidViewLineNumber(e);
    const i=this.projectedModelLineLineCounts.getIndexOf(n-1);
    let r=n;
    const s=i.index, o=i.remainder, a=[];
    for(let l=s, u=this.model.getLineCount();
    l<u;
    l++){
      const d=this.modelLineProjections[l];
      if(!d.isVisible())continue;
      const m=l===s?o:0;
      let p=d.getViewLineCount()-m,g=!1;
      if(r+p>e&&(g=!0,p=e-r+1),d.getViewLinesData(this.model,l+1,m,p,r-n,t,a),r+=p,g)break
    }
    return a
  }
  validateViewPosition(n, e, t){
    n=this._toValidViewLineNumber(n);
    const i=this.projectedModelLineLineCounts.getIndexOf(n-1), r=i.index, s=i.remainder, o=this.modelLineProjections[r], a=o.getViewLineMinColumn(this.model, r+1, s), l=o.getViewLineMaxColumn(this.model, r+1, s);
    e<a&&(e=a), e>l&&(e=l);
    const u=o.getModelColumnOfViewPosition(s, e);
    return this.model.validatePosition(new ar(r+1, u)).equals(t)?new ar(n, e):this.convertModelPositionToViewPosition(t.lineNumber, t.column)
  }
  validateViewRange(n, e){
    const t=this.validateViewPosition(n.startLineNumber, n.startColumn, e.getStartPosition()), i=this.validateViewPosition(n.endLineNumber, n.endColumn, e.getEndPosition());
    return new Zt(t.lineNumber, t.column, i.lineNumber, i.column)
  }
  convertViewPositionToModelPosition(n, e){
    const t=this.getViewLineInfo(n), i=this.modelLineProjections[t.modelLineNumber-1].getModelColumnOfViewPosition(t.modelLineWrappedLineIdx, e);
    return this.model.validatePosition(new ar(t.modelLineNumber, i))
  }
  convertViewRangeToModelRange(n){
    const e=this.convertViewPositionToModelPosition(n.startLineNumber, n.startColumn), t=this.convertViewPositionToModelPosition(n.endLineNumber, n.endColumn);
    return new Zt(e.lineNumber, e.column, t.lineNumber, t.column)
  }
  convertModelPositionToViewPosition(n, e, t=2, i=!1, r=!1){
    const s=this.model.validatePosition(new ar(n, e)), o=s.lineNumber, a=s.column;
    let l=o-1, u=!1;
    if(r)for(;
    l<this.modelLineProjections.length&&!this.modelLineProjections[l].isVisible();
    )l++, u=!0;
    else for(;
    l>0&&!this.modelLineProjections[l].isVisible();
    )l--, u=!0;
    if(l===0&&!this.modelLineProjections[l].isVisible())return new ar(i?0:1, 1);
    const d=1+this.projectedModelLineLineCounts.getPrefixSum(l);
    let m;
    return u?r?m=this.modelLineProjections[l].getViewPositionOfModelPosition(d, 1, t):m=this.modelLineProjections[l].getViewPositionOfModelPosition(d, this.model.getLineMaxColumn(l+1), t):m=this.modelLineProjections[o-1].getViewPositionOfModelPosition(d, a, t), m
  }
  convertModelRangeToViewRange(n, e=0){
    if(n.isEmpty()){
      const t=this.convertModelPositionToViewPosition(n.startLineNumber,n.startColumn,e);
      return Zt.fromPositions(t)
    }
    else{
      const t=this.convertModelPositionToViewPosition(n.startLineNumber,n.startColumn,1),i=this.convertModelPositionToViewPosition(n.endLineNumber,n.endColumn,0);
      return new Zt(t.lineNumber,t.column,i.lineNumber,i.column)
    }
  }
  getViewLineNumberOfModelPosition(n, e){
    let t=n-1;
    if(this.modelLineProjections[t].isVisible()){
      const r=1+this.projectedModelLineLineCounts.getPrefixSum(t);
      return this.modelLineProjections[t].getViewLineNumberOfModelPosition(r,e)
    }
    for(;
    t>0&&!this.modelLineProjections[t].isVisible();
    )t--;
    if(t===0&&!this.modelLineProjections[t].isVisible())return 1;
    const i=1+this.projectedModelLineLineCounts.getPrefixSum(t);
    return this.modelLineProjections[t].getViewLineNumberOfModelPosition(i, this.model.getLineMaxColumn(t+1))
  }
  getDecorationsInRange(n, e, t, i, r){
    const s=this.convertViewPositionToModelPosition(n.startLineNumber, n.startColumn), o=this.convertViewPositionToModelPosition(n.endLineNumber, n.endColumn);
    if(o.lineNumber-s.lineNumber<=n.endLineNumber-n.startLineNumber)return this.model.getDecorationsInRange(new Zt(s.lineNumber, 1, o.lineNumber, o.column), e, t, i, r);
    let a=[];
    const l=s.lineNumber-1, u=o.lineNumber-1;
    let d=null;
    for(let f=l;
    f<=u;
    f++)if(this.modelLineProjections[f].isVisible())d===null&&(d=new ar(f+1, f===l?s.column:1));
    else if(d!==null){
      const w=this.model.getLineMaxColumn(f);
      a=a.concat(this.model.getDecorationsInRange(new Zt(d.lineNumber,d.column,f,w),e,t,i)),d=null
    }
    d!==null&&(a=a.concat(this.model.getDecorationsInRange(new Zt(d.lineNumber, d.column, o.lineNumber, o.column), e, t, i)), d=null), a.sort((f, A)=>{
      const w=Zt.compareRangesUsingStarts(f.range,A.range);
      return w===0?f.id<A.id?-1:f.id>A.id?1:0:w
    });
    const m=[];
    let p=0, g=null;
    for(const f of a){
      const A=f.id;
      g!==A&&(g=A,m[p++]=f)
    }
    return m
  }
  getInjectedTextAt(n){
    const e=this.getViewLineInfo(n.lineNumber);
    return this.modelLineProjections[e.modelLineNumber-1].getInjectedTextAt(e.modelLineWrappedLineIdx, n.column)
  }
  normalizePosition(n, e){
    const t=this.getViewLineInfo(n.lineNumber);
    return this.modelLineProjections[t.modelLineNumber-1].normalizePosition(t.modelLineWrappedLineIdx, n, e)
  }
  getLineIndentColumn(n){
    const e=this.getViewLineInfo(n);
    return e.modelLineWrappedLineIdx===0?this.model.getLineIndentColumn(e.modelLineNumber):0
  }
}, sTc=class{
  get isWrappedLineContinuation(){
    return this.modelLineWrappedLineIdx>0
  }
  constructor(n, e){
    this.modelLineNumber=n, this.modelLineWrappedLineIdx=e
  }
}, oTc=class{
  constructor(n, e){
    this.modelRange=n, this.viewLines=e
  }
}, $bh=class{
  constructor(n){
    this._lines=n
  }
  convertViewPositionToModelPosition(n){
    return this._lines.convertViewPositionToModelPosition(n.lineNumber, n.column)
  }
  convertViewRangeToModelRange(n){
    return this._lines.convertViewRangeToModelRange(n)
  }
  validateViewPosition(n, e){
    return this._lines.validateViewPosition(n.lineNumber, n.column, e)
  }
  validateViewRange(n, e){
    return this._lines.validateViewRange(n, e)
  }
  convertModelPositionToViewPosition(n, e, t, i){
    return this._lines.convertModelPositionToViewPosition(n.lineNumber, n.column, e, t, i)
  }
  convertModelRangeToViewRange(n, e){
    return this._lines.convertModelRangeToViewRange(n, e)
  }
  modelPositionIsVisible(n){
    return this._lines.modelPositionIsVisible(n.lineNumber, n.column)
  }
  getModelLineViewLineCount(n){
    return this._lines.getModelLineViewLineCount(n)
  }
  getViewLineNumberOfModelPosition(n, e){
    return this._lines.getViewLineNumberOfModelPosition(n, e)
  }
}, (function(n){
  n[n.BlockNone=0]="BlockNone", n[n.BlockSubsequent=1]="BlockSubsequent", n[n.BlockAll=2]="BlockAll"
})(qbh||(qbh={
  
})), Hbh=class{
  constructor(n){
    this.model=n
  }
  dispose(){
    
  }
  createCoordinatesConverter(){
    return new Jbh(this)
  }
  getHiddenAreas(){
    return[]
  }
  setHiddenAreas(n){
    return!1
  }
  setTabSize(n){
    return!1
  }
  setWrappingSettings(n, e, t, i){
    return!1
  }
  createLineBreaksComputer(){
    const n=[];
    return{
      addRequest:(e,t,i)=>{
        n.push(null)
      },finalize:()=>n
    }
  }
  onModelFlushed(){
    
  }
  onModelLinesDeleted(n, e, t){
    return new GOo(e, t)
  }
  onModelLinesInserted(n, e, t, i){
    return new WOo(e, t)
  }
  onModelLineChanged(n, e, t){
    return[!1, new Oxc(e, 1), null, null]
  }
  acceptVersionId(n){
    
  }
  getViewLineCount(){
    return this.model.getLineCount()
  }
  getActiveIndentGuide(n, e, t){
    return{
      startLineNumber:n,endLineNumber:n,indent:0
    }
  }
  getViewLinesBracketGuides(n, e, t){
    return new Array(e-n+1).fill([])
  }
  getViewLinesIndentGuides(n, e){
    const t=e-n+1, i=new Array(t);
    for(let r=0;
    r<t;
    r++)i[r]=0;
    return i
  }
  getViewLineContent(n){
    return this.model.getLineContent(n)
  }
  getViewLineLength(n){
    return this.model.getLineLength(n)
  }
  getViewLineMinColumn(n){
    return this.model.getLineMinColumn(n)
  }
  getViewLineMaxColumn(n){
    return this.model.getLineMaxColumn(n)
  }
  getViewLineData(n){
    const e=this.model.tokenization.getLineTokens(n), t=e.getLineContent();
    return new VOo(t, !1, 1, t.length+1, 0, e.inflate(), null)
  }
  getViewLinesData(n, e, t){
    const i=this.model.getLineCount();
    n=Math.min(Math.max(1, n), i), e=Math.min(Math.max(1, e), i);
    const r=[];
    for(let s=n;
    s<=e;
    s++){
      const o=s-n;
      r[o]=t[o]?this.getViewLineData(s):null
    }
    return r
  }
  getDecorationsInRange(n, e, t, i, r){
    return this.model.getDecorationsInRange(n, e, t, i, r)
  }
  normalizePosition(n, e){
    return this.model.normalizePosition(n, e)
  }
  getLineIndentColumn(n){
    return this.model.getLineIndentColumn(n)
  }
  getInjectedTextAt(n){
    return null
  }
}, Jbh=class{
  constructor(n){
    this._lines=n
  }
  _validPosition(n){
    return this._lines.model.validatePosition(n)
  }
  _validRange(n){
    return this._lines.model.validateRange(n)
  }
  convertViewPositionToModelPosition(n){
    return this._validPosition(n)
  }
  convertViewRangeToModelRange(n){
    return this._validRange(n)
  }
  validateViewPosition(n, e){
    return this._validPosition(e)
  }
  validateViewRange(n, e){
    return this._validRange(e)
  }
  convertModelPositionToViewPosition(n){
    return this._validPosition(n)
  }
  convertModelRangeToViewRange(n){
    return this._validRange(n)
  }
  modelPositionIsVisible(n){
    const e=this._lines.model.getLineCount();
    return!(n.lineNumber<1||n.lineNumber>e)
  }
  modelRangeIsVisible(n){
    const e=this._lines.model.getLineCount();
    return!(n.startLineNumber<1||n.startLineNumber>e||n.endLineNumber<1||n.endLineNumber>e)
  }
  getModelLineViewLineCount(n){
    return 1
  }
  getViewLineNumberOfModelPosition(n, e){
    return n
  }
}
}
}), $Ve, Gbh, KaA=
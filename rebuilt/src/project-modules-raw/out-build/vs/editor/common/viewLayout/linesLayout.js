// Module: out-build/vs/editor/common/viewLayout/linesLayout.js
// Offset: 1358643 (bundle byte offset)
// Size: 9581 bytes

oa(), Cbh=class{
  constructor(){
    this._hasPending=!1, this._inserts=[], this._changes=[], this._removes=[]
  }
  insert(n){
    this._hasPending=!0, this._inserts.push(n)
  }
  change(n){
    this._hasPending=!0, this._changes.push(n)
  }
  remove(n){
    this._hasPending=!0, this._removes.push(n)
  }
  mustCommit(){
    return this._hasPending
  }
  commit(n){
    if(!this._hasPending)return;
    const e=this._inserts, t=this._changes, i=this._removes;
    this._hasPending=!1, this._inserts=[], this._changes=[], this._removes=[], n._commitPendingChanges(e, t, i)
  }
}, Sbh=class{
  constructor(n, e, t, i, r){
    this.id=n, this.afterLineNumber=e, this.ordinal=t, this.height=i, this.minWidth=r, this.prefixSum=0
  }
}, kbh=class Cad{
  static{
    this.INSTANCE_COUNT=0
  }
  constructor(e, t, i, r){
    this._instanceId=V0c(++Cad.INSTANCE_COUNT), this._pendingChanges=new Cbh, this._lastWhitespaceId=0, this._arr=[], this._prefixSumValidIndex=-1, this._minWidth=-1, this._lineCount=e, this._lineHeight=t, this._paddingTop=i, this._paddingBottom=r
  }
  static findInsertionIndex(e, t, i){
    let r=0, s=e.length;
    for(;
    r<s;
    ){
      const o=r+s>>>1;
      t===e[o].afterLineNumber?i<e[o].ordinal?s=o:r=o+1:t<e[o].afterLineNumber?s=o:r=o+1
    }
    return r
  }
  setLineHeight(e){
    this._checkPendingChanges(), this._lineHeight=e
  }
  setPadding(e, t){
    this._paddingTop=e, this._paddingBottom=t
  }
  onFlushed(e){
    this._checkPendingChanges(), this._lineCount=e
  }
  changeWhitespace(e){
    let t=!1;
    try{
      e({
        insertWhitespace:(r,s,o,a)=>{
          t=!0,r=r|0,s=s|0,o=o|0,a=a|0;
          const l=this._instanceId+ ++this._lastWhitespaceId;
          return this._pendingChanges.insert(new Sbh(l,r,s,o,a)),l
        },changeOneWhitespace:(r,s,o)=>{
          t=!0,s=s|0,o=o|0,this._pendingChanges.change({
            id:r,newAfterLineNumber:s,newHeight:o
          })
        },removeWhitespace:r=>{
          t=!0,this._pendingChanges.remove({
            id:r
          })
        }
      })
    }
    finally{
      this._pendingChanges.commit(this)
    }
    return t
  }
  _commitPendingChanges(e, t, i){
    if((e.length>0||i.length>0)&&(this._minWidth=-1), e.length+t.length+i.length<=1){
      for(const l of e)this._insertWhitespace(l);
      for(const l of t)this._changeOneWhitespace(l.id,l.newAfterLineNumber,l.newHeight);
      for(const l of i){
        const u=this._findWhitespaceIndex(l.id);
        u!==-1&&this._removeWhitespace(u)
      }
      return
    }
    const r=new Set;
    for(const l of i)r.add(l.id);
    const s=new Map;
    for(const l of t)s.set(l.id, l);
    const o=l=>{
      const u=[];
      for(const d of l)if(!r.has(d.id)){
        if(s.has(d.id)){
          const m=s.get(d.id);
          d.afterLineNumber=m.newAfterLineNumber,d.height=m.newHeight
        }
        u.push(d)
      }
      return u
    }, a=o(this._arr).concat(o(e));
    a.sort((l, u)=>l.afterLineNumber===u.afterLineNumber?l.ordinal-u.ordinal:l.afterLineNumber-u.afterLineNumber), this._arr=a, this._prefixSumValidIndex=-1
  }
  _checkPendingChanges(){
    this._pendingChanges.mustCommit()&&this._pendingChanges.commit(this)
  }
  _insertWhitespace(e){
    const t=Cad.findInsertionIndex(this._arr, e.afterLineNumber, e.ordinal);
    this._arr.splice(t, 0, e), this._prefixSumValidIndex=Math.min(this._prefixSumValidIndex, t-1)
  }
  _findWhitespaceIndex(e){
    const t=this._arr;
    for(let i=0, r=t.length;
    i<r;
    i++)if(t[i].id===e)return i;
    return-1
  }
  _changeOneWhitespace(e, t, i){
    const r=this._findWhitespaceIndex(e);
    if(r!==-1&&(this._arr[r].height!==i&&(this._arr[r].height=i, this._prefixSumValidIndex=Math.min(this._prefixSumValidIndex, r-1)), this._arr[r].afterLineNumber!==t)){
      const s=this._arr[r];
      this._removeWhitespace(r),s.afterLineNumber=t,this._insertWhitespace(s)
    }
  }
  _removeWhitespace(e){
    this._arr.splice(e, 1), this._prefixSumValidIndex=Math.min(this._prefixSumValidIndex, e-1)
  }
  onLinesDeleted(e, t){
    this._checkPendingChanges(), e=e|0, t=t|0, this._lineCount-=t-e+1;
    for(let i=0, r=this._arr.length;
    i<r;
    i++){
      const s=this._arr[i].afterLineNumber;
      e<=s&&s<=t?this._arr[i].afterLineNumber=e-1:s>t&&(this._arr[i].afterLineNumber-=t-e+1)
    }
  }
  onLinesInserted(e, t){
    this._checkPendingChanges(), e=e|0, t=t|0, this._lineCount+=t-e+1;
    for(let i=0, r=this._arr.length;
    i<r;
    i++){
      const s=this._arr[i].afterLineNumber;
      e<=s&&(this._arr[i].afterLineNumber+=t-e+1)
    }
  }
  getWhitespacesTotalHeight(){
    return this._checkPendingChanges(), this._arr.length===0?0:this.getWhitespacesAccumulatedHeight(this._arr.length-1)
  }
  getWhitespacesAccumulatedHeight(e){
    this._checkPendingChanges(), e=e|0;
    let t=Math.max(0, this._prefixSumValidIndex+1);
    t===0&&(this._arr[0].prefixSum=this._arr[0].height, t++);
    for(let i=t;
    i<=e;
    i++)this._arr[i].prefixSum=this._arr[i-1].prefixSum+this._arr[i].height;
    return this._prefixSumValidIndex=Math.max(this._prefixSumValidIndex, e), this._arr[e].prefixSum
  }
  getLinesTotalHeight(){
    this._checkPendingChanges();
    const e=this._lineHeight*this._lineCount, t=this.getWhitespacesTotalHeight();
    return e+t+this._paddingTop+this._paddingBottom
  }
  getWhitespaceAccumulatedHeightBeforeLineNumber(e){
    this._checkPendingChanges(), e=e|0;
    const t=this._findLastWhitespaceBeforeLineNumber(e);
    return t===-1?0:this.getWhitespacesAccumulatedHeight(t)
  }
  _findLastWhitespaceBeforeLineNumber(e){
    e=e|0;
    const t=this._arr;
    let i=0, r=t.length-1;
    for(;
    i<=r;
    ){
      const o=(r-i|0)/2|0,a=i+o|0;
      if(t[a].afterLineNumber<e){
        if(a+1>=t.length||t[a+1].afterLineNumber>=e)return a;
        i=a+1|0
      }
      else r=a-1|0
    }
    return-1
  }
  _findFirstWhitespaceAfterLineNumber(e){
    e=e|0;
    const i=this._findLastWhitespaceBeforeLineNumber(e)+1;
    return i<this._arr.length?i:-1
  }
  getFirstWhitespaceIndexAfterLineNumber(e){
    return this._checkPendingChanges(), e=e|0, this._findFirstWhitespaceAfterLineNumber(e)
  }
  getVerticalOffsetForLineNumber(e, t=!1){
    this._checkPendingChanges(), e=e|0;
    let i;
    e>1?i=this._lineHeight*(e-1):i=0;
    const r=this.getWhitespaceAccumulatedHeightBeforeLineNumber(e-(t?1:0));
    return i+r+this._paddingTop
  }
  getVerticalOffsetAfterLineNumber(e, t=!1){
    this._checkPendingChanges(), e=e|0;
    const i=this._lineHeight*e, r=this.getWhitespaceAccumulatedHeightBeforeLineNumber(e+(t?1:0));
    return i+r+this._paddingTop
  }
  hasWhitespace(){
    return this._checkPendingChanges(), this.getWhitespacesCount()>0
  }
  getWhitespaceMinWidth(){
    if(this._checkPendingChanges(), this._minWidth===-1){
      let e=0;
      for(let t=0,i=this._arr.length;
      t<i;
      t++)e=Math.max(e,this._arr[t].minWidth);
      this._minWidth=e
    }
    return this._minWidth
  }
  isAfterLines(e){
    this._checkPendingChanges();
    const t=this.getLinesTotalHeight();
    return e>t
  }
  isInTopPadding(e){
    return this._paddingTop===0?!1:(this._checkPendingChanges(), e<this._paddingTop)
  }
  isInBottomPadding(e){
    if(this._paddingBottom===0)return!1;
    this._checkPendingChanges();
    const t=this.getLinesTotalHeight();
    return e>=t-this._paddingBottom
  }
  getLineNumberAtOrAfterVerticalOffset(e){
    if(this._checkPendingChanges(), e=e|0, e<0)return 1;
    const t=this._lineCount|0, i=this._lineHeight;
    let r=1, s=t;
    for(;
    r<s;
    ){
      const o=(r+s)/2|0,a=this.getVerticalOffsetForLineNumber(o)|0;
      if(e>=a+i)r=o+1;
      else{
        if(e>=a)return o;
        s=o
      }
    }
    return r>t?t:r
  }
  getLinesViewportData(e, t){
    this._checkPendingChanges(), e=e|0, t=t|0;
    const i=this._lineHeight, r=this.getLineNumberAtOrAfterVerticalOffset(e)|0, s=this.getVerticalOffsetForLineNumber(r)|0;
    let o=this._lineCount|0, a=this.getFirstWhitespaceIndexAfterLineNumber(r)|0;
    const l=this.getWhitespacesCount()|0;
    let u, d;
    a===-1?(a=l, d=o+1, u=0):(d=this.getAfterLineNumberForWhitespaceIndex(a)|0, u=this.getHeightForWhitespaceIndex(a)|0);
    let m=s, p=m;
    const g=5e5;
    let f=0;
    s>=g&&(f=Math.floor(s/g)*g, f=Math.floor(f/i)*i, p-=f);
    const A=[], w=e+(t-e)/2;
    let C=-1;
    for(let R=r;
    R<=o;
    R++){
      if(C===-1){
        const N=m,M=m+i;
        (N<=w&&w<M||N>w)&&(C=R)
      }
      for(m+=i,A[R-r]=p,p+=i;
      d===R;
      )p+=u,m+=u,a++,a>=l?d=o+1:(d=this.getAfterLineNumberForWhitespaceIndex(a)|0,u=this.getHeightForWhitespaceIndex(a)|0);
      if(m>=t){
        o=R;
        break
      }
    }
    C===-1&&(C=o);
    const x=this.getVerticalOffsetForLineNumber(o)|0;
    let I=r, B=o;
    return I<B&&s<e&&I++, I<B&&x+i>t&&B--, {
      bigNumbersDelta:f,startLineNumber:r,endLineNumber:o,relativeVerticalOffset:A,centeredLineNumber:C,completelyVisibleStartLineNumber:I,completelyVisibleEndLineNumber:B,lineHeight:this._lineHeight
    }
  }
  getVerticalOffsetForWhitespaceIndex(e){
    this._checkPendingChanges(), e=e|0;
    const t=this.getAfterLineNumberForWhitespaceIndex(e);
    let i;
    t>=1?i=this._lineHeight*t:i=0;
    let r;
    return e>0?r=this.getWhitespacesAccumulatedHeight(e-1):r=0, i+r+this._paddingTop
  }
  getWhitespaceIndexAtOrAfterVerticallOffset(e){
    this._checkPendingChanges(), e=e|0;
    let t=0, i=this.getWhitespacesCount()-1;
    if(i<0)return-1;
    const r=this.getVerticalOffsetForWhitespaceIndex(i), s=this.getHeightForWhitespaceIndex(i);
    if(e>=r+s)return-1;
    for(;
    t<i;
    ){
      const o=Math.floor((t+i)/2),a=this.getVerticalOffsetForWhitespaceIndex(o),l=this.getHeightForWhitespaceIndex(o);
      if(e>=a+l)t=o+1;
      else{
        if(e>=a)return o;
        i=o
      }
    }
    return t
  }
  getWhitespaceAtVerticalOffset(e){
    this._checkPendingChanges(), e=e|0;
    const t=this.getWhitespaceIndexAtOrAfterVerticallOffset(e);
    if(t<0||t>=this.getWhitespacesCount())return null;
    const i=this.getVerticalOffsetForWhitespaceIndex(t);
    if(i>e)return null;
    const r=this.getHeightForWhitespaceIndex(t), s=this.getIdForWhitespaceIndex(t), o=this.getAfterLineNumberForWhitespaceIndex(t);
    return{
      id:s,afterLineNumber:o,verticalOffset:i,height:r
    }
  }
  getWhitespaceViewportData(e, t){
    this._checkPendingChanges(), e=e|0, t=t|0;
    const i=this.getWhitespaceIndexAtOrAfterVerticallOffset(e), r=this.getWhitespacesCount()-1;
    if(i<0)return[];
    const s=[];
    for(let o=i;
    o<=r;
    o++){
      const a=this.getVerticalOffsetForWhitespaceIndex(o),l=this.getHeightForWhitespaceIndex(o);
      if(a>=t)break;
      s.push({
        id:this.getIdForWhitespaceIndex(o),afterLineNumber:this.getAfterLineNumberForWhitespaceIndex(o),verticalOffset:a,height:l
      })
    }
    return s
  }
  getWhitespaces(){
    return this._checkPendingChanges(), this._arr.slice(0)
  }
  getWhitespacesCount(){
    return this._checkPendingChanges(), this._arr.length
  }
  getIdForWhitespaceIndex(e){
    return this._checkPendingChanges(), e=e|0, this._arr[e].id
  }
  getAfterLineNumberForWhitespaceIndex(e){
    return this._checkPendingChanges(), e=e|0, this._arr[e].afterLineNumber
  }
  getHeightForWhitespaceIndex(e){
    return this._checkPendingChanges(), e=e|0, this._arr[e].height
  }
}
}
}), zxc, Ebh, VOo, zOt, xbh, Ode, Tbh, Vxc, KOo, Lte=
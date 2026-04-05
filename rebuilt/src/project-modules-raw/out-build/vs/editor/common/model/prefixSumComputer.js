// Module: out-build/vs/editor/common/model/prefixSumComputer.js
// Offset: 1388161 (bundle byte offset)
// Size: 3666 bytes

Vs(), jFo(), Uft=class{
  constructor(n){
    this.values=n, this.prefixSum=new Uint32Array(n.length), this.prefixSumValidIndex=new Int32Array(1), this.prefixSumValidIndex[0]=-1
  }
  getCount(){
    return this.values.length
  }
  insertValues(n, e){
    n=O4t(n);
    const t=this.values, i=this.prefixSum, r=e.length;
    return r===0?!1:(this.values=new Uint32Array(t.length+r), this.values.set(t.subarray(0, n), 0), this.values.set(t.subarray(n), n+r), this.values.set(e, n), n-1<this.prefixSumValidIndex[0]&&(this.prefixSumValidIndex[0]=n-1), this.prefixSum=new Uint32Array(this.values.length), this.prefixSumValidIndex[0]>=0&&this.prefixSum.set(i.subarray(0, this.prefixSumValidIndex[0]+1)), !0)
  }
  setValue(n, e){
    return n=O4t(n), e=O4t(e), this.values[n]===e?!1:(this.values[n]=e, n-1<this.prefixSumValidIndex[0]&&(this.prefixSumValidIndex[0]=n-1), !0)
  }
  removeValues(n, e){
    n=O4t(n), e=O4t(e);
    const t=this.values, i=this.prefixSum;
    if(n>=t.length)return!1;
    const r=t.length-n;
    return e>=r&&(e=r), e===0?!1:(this.values=new Uint32Array(t.length-e), this.values.set(t.subarray(0, n), 0), this.values.set(t.subarray(n+e), n), this.prefixSum=new Uint32Array(this.values.length), n-1<this.prefixSumValidIndex[0]&&(this.prefixSumValidIndex[0]=n-1), this.prefixSumValidIndex[0]>=0&&this.prefixSum.set(i.subarray(0, this.prefixSumValidIndex[0]+1)), !0)
  }
  getTotalSum(){
    return this.values.length===0?0:this._getPrefixSum(this.values.length-1)
  }
  getPrefixSum(n){
    return n<0?0:(n=O4t(n), this._getPrefixSum(n))
  }
  _getPrefixSum(n){
    if(n<=this.prefixSumValidIndex[0])return this.prefixSum[n];
    let e=this.prefixSumValidIndex[0]+1;
    e===0&&(this.prefixSum[0]=this.values[0], e++), n>=this.values.length&&(n=this.values.length-1);
    for(let t=e;
    t<=n;
    t++)this.prefixSum[t]=this.prefixSum[t-1]+this.values[t];
    return this.prefixSumValidIndex[0]=Math.max(this.prefixSumValidIndex[0], n), this.prefixSum[n]
  }
  getIndexOf(n){
    n=Math.floor(n), this.getTotalSum();
    let e=0, t=this.values.length-1, i=0, r=0, s=0;
    for(;
    e<=t;
    )if(i=e+(t-e)/2|0, r=this.prefixSum[i], s=r-this.values[i], n<s)t=i-1;
    else if(n>=r)e=i+1;
    else break;
    return new rTc(i, n-s)
  }
}, iTc=class{
  constructor(n){
    this._values=n, this._isValid=!1, this._validEndIndex=-1, this._prefixSum=[], this._indexBySum=[]
  }
  getTotalSum(){
    return this._ensureValid(), this._indexBySum.length
  }
  getPrefixSum(n){
    return this._ensureValid(), n===0?0:this._prefixSum[n-1]
  }
  getIndexOf(n){
    this._ensureValid();
    const e=this._indexBySum[n], t=e>0?this._prefixSum[e-1]:0;
    return new rTc(e, n-t)
  }
  removeValues(n, e){
    this._values.splice(n, e), this._invalidate(n)
  }
  insertValues(n, e){
    this._values=$2n(this._values, n, e), this._invalidate(n)
  }
  _invalidate(n){
    this._isValid=!1, this._validEndIndex=Math.min(this._validEndIndex, n-1)
  }
  _ensureValid(){
    if(!this._isValid){
      for(let n=this._validEndIndex+1,e=this._values.length;
      n<e;
      n++){
        const t=this._values[n],i=n>0?this._prefixSum[n-1]:0;
        this._prefixSum[n]=i+t;
        for(let r=0;
        r<t;
        r++)this._indexBySum[i+r]=n
      }
      this._prefixSum.length=this._values.length,this._indexBySum.length=this._prefixSum[this._prefixSum.length-1],this._isValid=!0,this._validEndIndex=this._values.length-1
    }
  }
  setValue(n, e){
    this._values[n]!==e&&(this._values[n]=e, this._invalidate(n))
  }
}, rTc=class{
  constructor(n, e){
    this.index=n, this.remainder=e, this._prefixSumIndexOfResultBrand=void 0, this.index=n, this.remainder=e
  }
}
}
});
function zaA(n){
  if(n.length===0)return[];
  const e=n.slice();
  e.sort(Zt.compareRangesUsingStarts);
  const t=[];
  let i=e[0].startLineNumber, r=e[0].endLineNumber;
  for(let s=1, o=e.length;
  s<o;
  s++){
    const a=e[s];
    a.startLineNumber>r+1?(t.push(new Zt(i, 1, r, 1)), i=a.startLineNumber, r=a.endLineNumber):a.endLineNumber>r&&(r=a.endLineNumber)
  }
  return t.push(new Zt(i, 1, r, 1)), t
}
var Ubh, sTc, oTc, $bh, qbh, Hbh, Jbh, VaA=
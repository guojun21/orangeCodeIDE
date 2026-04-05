// Module: out-build/vs/editor/common/core/textLength.js
// Offset: 1061204 (bundle byte offset)
// Size: 3009 bytes

Ix(), tl(), ts(), YN=class S_e{
  static{
    this.zero=new S_e(0, 0)
  }
  static lengthDiffNonNegative(e, t){
    return t.isLessThan(e)?S_e.zero:e.lineCount===t.lineCount?new S_e(0, t.columnCount-e.columnCount):new S_e(t.lineCount-e.lineCount, t.columnCount)
  }
  static betweenPositions(e, t){
    return e.lineNumber===t.lineNumber?new S_e(0, t.column-e.column):new S_e(t.lineNumber-e.lineNumber, t.column-1)
  }
  static fromPosition(e){
    return new S_e(e.lineNumber-1, e.column-1)
  }
  static ofRange(e){
    return S_e.betweenPositions(e.getStartPosition(), e.getEndPosition())
  }
  static ofText(e){
    let t=0, i=0;
    for(const r of e)r===`
`?(t++, i=0):i++;
    return new S_e(t, i)
  }
  constructor(e, t){
    this.lineCount=e, this.columnCount=t
  }
  isZero(){
    return this.lineCount===0&&this.columnCount===0
  }
  isLessThan(e){
    return this.lineCount!==e.lineCount?this.lineCount<e.lineCount:this.columnCount<e.columnCount
  }
  isGreaterThan(e){
    return this.lineCount!==e.lineCount?this.lineCount>e.lineCount:this.columnCount>e.columnCount
  }
  isGreaterThanOrEqualTo(e){
    return this.lineCount!==e.lineCount?this.lineCount>e.lineCount:this.columnCount>=e.columnCount
  }
  equals(e){
    return this.lineCount===e.lineCount&&this.columnCount===e.columnCount
  }
  compare(e){
    return this.lineCount!==e.lineCount?this.lineCount-e.lineCount:this.columnCount-e.columnCount
  }
  add(e){
    return e.lineCount===0?new S_e(this.lineCount, this.columnCount+e.columnCount):new S_e(this.lineCount+e.lineCount, e.columnCount)
  }
  createRange(e){
    return this.lineCount===0?new Zt(e.lineNumber, e.column, e.lineNumber, e.column+this.columnCount):new Zt(e.lineNumber, e.column, e.lineNumber+this.lineCount, this.columnCount+1)
  }
  toRange(){
    return new Zt(1, 1, this.lineCount+1, this.columnCount+1)
  }
  toLineRange(){
    return rh.ofLength(1, this.lineCount+1)
  }
  addToPosition(e){
    return this.lineCount===0?new ar(e.lineNumber, e.column+this.columnCount):new ar(e.lineNumber+this.lineCount, this.columnCount+1)
  }
  addToRange(e){
    return Zt.fromPositions(this.addToPosition(e.getStartPosition()), this.addToPosition(e.getEndPosition()))
  }
  toString(){
    return`${this.lineCount},${this.columnCount}`
  }
}
}
});
function koA(n, e, t, i){
  return n!==t?ZN(t-n, i):ZN(0, i-e)
}
function oOn(n){
  return n===0
}
function ZN(n, e){
  return n*Pte+e
}
function Lde(n){
  const e=n, t=Math.floor(e/Pte), i=e-t*Pte;
  return new YN(t, i)
}
function EoA(n){
  return Math.floor(n/Pte)
}
function BB_(n){
  return n
}
function $B(n, e){
  let t=n+e;
  return e>=Pte&&(t=t-n%Pte), t
}
function xoA(n, e){
  return n.reduce((t, i)=>$B(t, e(i)), vW)
}
function hph(n, e){
  return n===e
}
function aOn(n, e){
  const t=n, i=e;
  if(i-t<=0)return vW;
  const s=Math.floor(t/Pte), o=Math.floor(i/Pte), a=i-o*Pte;
  if(s===o){
    const l=t-s*Pte;
    return ZN(0, a-l)
  }
  else return ZN(o-s, a)
}
function kOt(n, e){
  return n<e
}
function EOt(n, e){
  return n<=e
}
function cOn(n, e){
  return n>=e
}
function xOt(n){
  return ZN(n.lineNumber-1, n.column-1)
}
function wft(n, e){
  const t=n, i=Math.floor(t/Pte), r=t-i*Pte, s=e, o=Math.floor(s/Pte), a=s-o*Pte;
  return new Zt(i+1, r+1, o+1, a+1)
}
function ToA(n){
  const e=Zv(n);
  return ZN(e.length-1, e[e.length-1].length)
}
var vW, Pte, X5e=
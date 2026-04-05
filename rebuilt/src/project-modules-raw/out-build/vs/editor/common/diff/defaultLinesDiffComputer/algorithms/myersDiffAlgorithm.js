// Module: out-build/vs/editor/common/diff/defaultLinesDiffComputer/algorithms/myersDiffAlgorithm.js
// Offset: 2176809 (bundle byte offset)
// Size: 2157 bytes

$I(), pbt(), w5o=class{
  compute(n, e, t=R3t.instance){
    if(n.length===0||e.length===0)return WSe.trivial(n, e);
    const i=n, r=e;
    function s(f, A){
      for(;
      f<i.length&&A<r.length&&i.getElement(f)===r.getElement(A);
      )f++,A++;
      return f
    }
    let o=0;
    const a=new tCh;
    a.set(0, s(0, 0));
    const l=new nCh;
    l.set(0, a.get(0)===0?null:new NDc(null, 0, 0, a.get(0)));
    let u=0;
    e:for(;
    ;
    ){
      if(o++,!t.isValid())return WSe.trivialTimedOut(i,r);
      const f=-Math.min(o,r.length+o%2),A=Math.min(o,i.length+o%2);
      for(u=f;
      u<=A;
      u+=2){
        let w=0;
        const C=u===A?-1:a.get(u+1),x=u===f?-1:a.get(u-1)+1;
        w++;
        const I=Math.min(Math.max(C,x),i.length),B=I-u;
        if(w++,I>i.length||B>r.length)continue;
        const R=s(I,B);
        a.set(u,R);
        const N=I===C?l.get(u+1):l.get(u-1);
        if(l.set(u,R!==I?new NDc(N,I,B,R-I):N),a.get(u)===i.length&&a.get(u)-u===r.length)break e
      }
    }
    let d=l.get(u);
    const m=[];
    let p=i.length, g=r.length;
    for(;
    ;
    ){
      const f=d?d.x+d.length:0,A=d?d.y+d.length:0;
      if((f!==p||A!==g)&&m.push(new H4(new dm(f,p),new dm(A,g))),!d)break;
      p=d.x,g=d.y,d=d.prev
    }
    return m.reverse(), new WSe(m, !1)
  }
}, NDc=class{
  constructor(n, e, t, i){
    this.prev=n, this.x=e, this.y=t, this.length=i
  }
}, tCh=class{
  constructor(){
    this.positiveArr=new Int32Array(10), this.negativeArr=new Int32Array(10)
  }
  get(n){
    return n<0?(n=-n-1, this.negativeArr[n]):this.positiveArr[n]
  }
  set(n, e){
    if(n<0){
      if(n=-n-1,n>=this.negativeArr.length){
        const t=this.negativeArr;
        this.negativeArr=new Int32Array(t.length*2),this.negativeArr.set(t)
      }
      this.negativeArr[n]=e
    }
    else{
      if(n>=this.positiveArr.length){
        const t=this.positiveArr;
        this.positiveArr=new Int32Array(t.length*2),this.positiveArr.set(t)
      }
      this.positiveArr[n]=e
    }
  }
}, nCh=class{
  constructor(){
    this.positiveArr=[], this.negativeArr=[]
  }
  get(n){
    return n<0?(n=-n-1, this.negativeArr[n]):this.positiveArr[n]
  }
  set(n, e){
    n<0?(n=-n-1, this.negativeArr[n]=e):this.positiveArr[n]=e
  }
}
}
});
function N3t(n){
  return n>=97&&n<=122||n>=65&&n<=90||n>=48&&n<=57
}
function iCh(n){
  return n>=65&&n<=90
}
function rCh(n){
  return aCh[n]
}
function sCh(n){
  return n===10?8:n===13?7:RDc(n)?6:n>=97&&n<=122?0:n>=65&&n<=90?1:n>=48&&n<=57?2:n===-1?3:n===44||n===59?5:4
}
var C3n, oCh, aCh, cCh=
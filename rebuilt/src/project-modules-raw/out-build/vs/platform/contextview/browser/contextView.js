// Module: out-build/vs/platform/contextview/browser/contextView.js
// Offset: 2216838 (bundle byte offset)
// Size: 2823 bytes

Wt(), sy=xi("contextViewService"), kc=xi("contextMenuService")
}
});
function ACh(n, e, t, i, r, s){
  const o=new Ebe(yCh(n, i)), a=new Ebe(yCh(e, r)), l=n.getOption(68), u=e.getOption(68), d=[];
  let m=0, p=0;
  function g(A, w){
    for(;
    ;
    ){
      let C=o.peek(),x=a.peek();
      if(C&&C.lineNumber>=A&&(C=void 0),x&&x.lineNumber>=w&&(x=void 0),!C&&!x)break;
      const I=C?C.lineNumber-m:Number.MAX_VALUE,B=x?x.lineNumber-p:Number.MAX_VALUE;
      I<B?(o.dequeue(),x={
        lineNumber:C.lineNumber-m+p,heightInPx:0
      }):I>B?(a.dequeue(),C={
        lineNumber:x.lineNumber-p+m,heightInPx:0
      }):(o.dequeue(),a.dequeue()),d.push({
        originalRange:rh.ofLength(C.lineNumber,1),modifiedRange:rh.ofLength(x.lineNumber,1),originalHeightInPx:l+C.heightInPx,modifiedHeightInPx:u+x.heightInPx,diff:void 0
      })
    }
  }
  for(const A of t){
    let w=function(R, N, M=!1){
      if(R<B||N<I)return;
      if(x)x=!1;
      else if(!M&&(R===B||N===I))return;
      const O=new rh(B,R),$=new rh(I,N);
      if(O.isEmpty&&$.isEmpty)return;
      const H=o.takeWhile(z=>z.lineNumber<R)?.reduce((z,Y)=>z+Y.heightInPx,0)??0,W=a.takeWhile(z=>z.lineNumber<N)?.reduce((z,Y)=>z+Y.heightInPx,0)??0;
      d.push({
        originalRange:O,modifiedRange:$,originalHeightInPx:O.length*l+H,modifiedHeightInPx:$.length*u+W,diff:A.lineRangeMapping
      }),B=R,I=N
    };
    var f=w;
    const C=A.lineRangeMapping;
    g(C.original.startLineNumber, C.modified.startLineNumber);
    let x=!0, I=C.modified.startLineNumber, B=C.original.startLineNumber;
    if(s)for(const R of C.innerChanges||[]){
      R.originalRange.startColumn>1&&R.modifiedRange.startColumn>1&&w(R.originalRange.startLineNumber,R.modifiedRange.startLineNumber);
      const N=n.getModel(),M=R.originalRange.endLineNumber<=N.getLineCount()?N.getLineMaxColumn(R.originalRange.endLineNumber):Number.MAX_SAFE_INTEGER;
      R.originalRange.endColumn<M&&w(R.originalRange.endLineNumber,R.modifiedRange.endLineNumber)
    }
    w(C.original.endLineNumberExclusive, C.modified.endLineNumberExclusive, !0), m=C.original.endLineNumberExclusive, p=C.modified.endLineNumberExclusive
  }
  return g(Number.MAX_VALUE, Number.MAX_VALUE), d
}
function yCh(n, e){
  const t=[], i=[], r=n.getOption(152).wrappingColumn!==-1, s=n._getViewModel().coordinatesConverter, o=n.getOption(68);
  if(r)for(let l=1;
  l<=n.getModel().getLineCount();
  l++){
    const u=s.getModelLineViewLineCount(l);
    u>1&&i.push({
      lineNumber:l,heightInPx:o*(u-1)
    })
  }
  for(const l of n.getWhitespaces()){
    if(e.has(l.id))continue;
    const u=l.afterLineNumber===0?0:s.convertViewPositionToModelPosition(new ar(l.afterLineNumber, 1)).lineNumber;
    t.push({
      lineNumber:u,heightInPx:l.height
    })
  }
  return AdA(t, i, l=>l.lineNumber, (l, u)=>({
    lineNumber:l.lineNumber, heightInPx:l.heightInPx+u.heightInPx
  }))
}
function qDc(n){
  return n.innerChanges?n.innerChanges.every(e=>C5o(e.modifiedRange)&&C5o(e.originalRange)||e.originalRange.equalsRange(new Zt(1, 1, 1, 1))):!1
}
function C5o(n){
  return n.startLineNumber===n.endLineNumber
}
var S5o, k5o=
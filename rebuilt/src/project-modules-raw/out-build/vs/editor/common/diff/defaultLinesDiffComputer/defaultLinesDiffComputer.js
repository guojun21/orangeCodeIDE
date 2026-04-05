// Module: out-build/vs/editor/common/diff/defaultLinesDiffComputer/defaultLinesDiffComputer.js
// Offset: 2193493 (bundle byte offset)
// Size: 5133 bytes

BdA(), Vs(), Lv(), Ix(), $I(), ts(), EW(), L3t(), WY(), pbt(), RdA(), MDc(), UdA(), mCh(), gCh(), cCh(), _5o=class{
  constructor(){
    this.dynamicProgrammingDiffing=new eCh, this.myersDiffingAlgorithm=new w5o, this.streamingDPDiffing=new X0h
  }
  computeDiff(n, e, t){
    if(n.length===0&&e.length===0)return new Voe([], [], !1);
    if(n.length===0)return new Voe([new _3(new rh(1, 1), new rh(1, e.length+1), void 0)], [], !1);
    if(e.length===0)return new Voe([new _3(new rh(1, n.length+1), new rh(1, 1), void 0)], [], !1);
    if(n.length<=1&&cg(n, e, (M, O)=>M===O))return new Voe([], [], !1);
    if(n.length===1&&n[0].length===0||e.length===1&&e[0].length===0)return new Voe([new _3(new rh(1, n.length+1), new rh(1, e.length+1), [new zH(new Zt(1, 1, n.length, n[n.length-1].length+1), new Zt(1, 1, e.length, e[e.length-1].length+1))])], [], !1);
    const i=t.maxComputationTimeMs===0?R3t.instance:new Z0h(t.maxComputationTimeMs, t.shouldGracefullyFallBackOnTimeout), r=!t.ignoreTrimWhitespace, s=new Map;
    function o(M){
      let O=s.get(M);
      return O===void 0&&(O=s.size,s.set(M,O)),O
    }
    const a=n.length*e.length<1e6&&t.onlyCareAboutPrefixOfOriginalLines===!0, l=n.map(M=>o(a?M:M.trim())), u=e.map(M=>o(a?M:M.trim())), d=n.every(M=>M.trim().length===0), m=new S3n(l, n), p=new S3n(u, e), g=a?d?WSe.trivial(m, p):this.streamingDPDiffing.compute(m, p, i, (M, O)=>n[M]===e[O]?e[O].length===0?.1:1+Math.log(1+e[O].length):.99):m.length+p.length<1700?this.dynamicProgrammingDiffing.compute(m, p, i, (M, O)=>n[M]===e[O]?e[O].length===0?.1:1+Math.log(1+e[O].length):.99):this.myersDiffingAlgorithm.compute(m, p, i);
    let f=g.diffs, A=g.hitTimeout;
    if(a){
      const M=f.map(O=>new _3(new rh(O.seq1Range.start+1,O.seq1Range.endExclusive+1),new rh(O.seq2Range.start+1,O.seq2Range.endExclusive+1),void 0));
      return new Voe(M,[],A)
    }
    const w=A;
    if(f=FDc(m, p, f), f=JdA(m, p, f), t.skipDiffRefinement){
      const M=f.map(O=>new _3(new rh(O.seq1Range.start+1,O.seq1Range.endExclusive+1),new rh(O.seq2Range.start+1,O.seq2Range.endExclusive+1),void 0));
      return new Voe(M,[],A)
    }
    const C=[], x=M=>{
      if(r)for(let O=0;
      O<M;
      O++){
        const $=I+O,H=B+O;
        if(n[$]!==e[H]){
          const W=this.refineDiff(n,e,new H4(new dm($,$+1),new dm(H,H+1)),i,r,t);
          for(const z of W.mappings)C.push(z);
          W.hitTimeout&&(A=!0)
        }
      }
    };
    let I=0, B=0;
    for(const M of f){
      _te(()=>M.seq1Range.start-I===M.seq2Range.start-B);
      const O=M.seq1Range.start-I;
      x(O),I=M.seq1Range.endExclusive,B=M.seq2Range.endExclusive;
      const $=this.refineDiff(n,e,M,i,r,t);
      $.hitTimeout&&(A=!0);
      for(const H of $.mappings)C.push(H)
    }
    x(n.length-I);
    const R=a5o(C, new y3n(n), new y3n(e));
    let N=[];
    if(t.computeMoves&&(N=this.computeMoves(R, n, e, l, u, i, r, t)), _te(()=>{
      function M($,H){
        if($.lineNumber<1||$.lineNumber>H.length)return!1;
        const W=H[$.lineNumber-1];
        return!($.column<1||$.column>W.length+1)
      }
      function O($,H){
        return!($.startLineNumber<1||$.startLineNumber>H.length+1||$.endLineNumberExclusive<1||$.endLineNumberExclusive>H.length+1)
      }
      for(const $ of R){
        if(!$.innerChanges)return!1;
        for(const H of $.innerChanges)if(!(M(H.modifiedRange.getStartPosition(),e)&&M(H.modifiedRange.getEndPosition(),e)&&M(H.originalRange.getStartPosition(),n)&&M(H.originalRange.getEndPosition(),n)))return!1;
        if(!O($.modified,e)||!O($.original,n))return!1
      }
      return!0
    }), t.shouldGracefullyFallBackOnTimeout===!0&&A&&!w){
      const M=f.map(O=>new _3(new rh(O.seq1Range.start+1,O.seq1Range.endExclusive+1),new rh(O.seq2Range.start+1,O.seq2Range.endExclusive+1),void 0));
      return new Voe(M,[],w)
    }
    return new Voe(R, N, A)
  }
  computeMoves(n, e, t, i, r, s, o, a){
    return PdA(n, e, t, i, r, s).map(d=>{
      const m=this.refineDiff(e,t,new H4(d.original.toOffsetRange(),d.modified.toOffsetRange()),s,o,a),p=a5o(m.mappings,new y3n(e),new y3n(t),!0);
      return new LDc(d,p)
    })
  }
  refineDiff(n, e, t, i, r, s){
    const a=WdA(t).toRangeMapping2(n, e), l=new C3n(n, a.originalRange, r), u=new C3n(e, a.modifiedRange, r), d=l.length+u.length<500?this.dynamicProgrammingDiffing.compute(l, u, i):this.myersDiffingAlgorithm.compute(l, u, i), m=!1;
    let p=d.diffs;
    m&&H4.assertSorted(p), p=FDc(l, u, p), m&&H4.assertSorted(p), p=hCh(l, u, p, (f, A)=>f.findWordContaining(A)), m&&H4.assertSorted(p), s.extendToSubwords&&(p=hCh(l, u, p, (f, A)=>f.findSubWordContaining(A), !0), m&&H4.assertSorted(p)), p=qdA(l, u, p), m&&H4.assertSorted(p), p=GdA(l, u, p), m&&H4.assertSorted(p);
    const g=p.map(f=>new zH(l.translateRange(f.seq1Range), u.translateRange(f.seq2Range)));
    return m&&zH.assertSorted(g), {
      mappings:g,hitTimeout:d.hitTimeout
    }
  }
}
}
});
function QdA(n, e, t){
  const i=e.getLineCount()===1&&e.getValueLength()===0;
  return{
    changes:n.changes.map(r=>i?new _3(new rh(1, 1), r.modified, void 0):new _3(r.original, r.modified, r.innerChanges?r.innerChanges.map(s=>jdA(s, e, t)):void 0)), moves:n.moves, identical:n.identical, quitEarly:n.quitEarly
  }
}
function jdA(n, e, t){
  let i=n.originalRange, r=n.modifiedRange;
  return i.startColumn===1&&r.startColumn===1&&(i.endColumn!==1||r.endColumn!==1)&&i.endColumn===e.getLineMaxColumn(i.endLineNumber)&&r.endColumn===t.getLineMaxColumn(r.endLineNumber)&&i.endLineNumber<e.getLineCount()&&r.endLineNumber<t.getLineCount()&&(i=i.setEndPosition(i.endLineNumber+1, 1), r=r.setEndPosition(r.endLineNumber+1, 1)), new zH(i, r)
}
function tR_(n, e, t, i){
  
}
function nR_(n, e, t, i){
  
}
var k3n, E3n, UDc, M3t, fCh, x3n=
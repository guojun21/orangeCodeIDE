// Module: out-build/vs/editor/common/model/bracketPairsTextModelPart/fixBrackets.js
// Offset: 25314899 (bundle byte offset)
// Size: 2856 bytes

Cph(), X5e(), Tph(), TOt(), REc(), oyg=class{
  constructor(n){
    this.lines=n, this.tokenization={
      getLineTokens:e=>this.lines[e-1]
    }
  }
  getValue(){
    return this.lines.map(n=>n.getLineContent()).join(`
`)
  }
  getLineCount(){
    return this.lines.length
  }
  getLineLength(n){
    return this.lines[n-1].getLineContent().length
  }
}
}
});
async function SSA(n, e, t, i, r=Cs.None, s){
  const o=Wr(), a=new Wc(r), l=a.token, u={
    ...i, requestUuid:o
  }, d=e instanceof ar?xSA(e, t):e, m=n.all(t), p=new RFt;
  for(const R of m)R.groupId&&p.add(R.groupId, R);
  function g(R){
    if(!R.yieldsToGroupIds)return[];
    const N=[];
    for(const M of R.yieldsToGroupIds||[]){
      const O=p.get(M);
      for(const $ of O)N.push($)
    }
    return N
  }
  const f=new Map, A=new Set;
  function w(R, N){
    if(N=[...N, R], A.has(R))return N;
    A.add(R);
    try{
      const M=g(R);
      for(const O of M){
        const $=w(O,N);
        if($)return $
      }
    }
    finally{
      A.delete(R)
    }
  }
  function C(R){
    const N=f.get(R);
    if(N)return N;
    const M=w(R, []);
    M&&JE(new Error(`Inline completions: cyclic yield-to dependency detected. Path: ${M.map($=>$.toString?$.toString():""+$).join(" -> ")}`));
    const O=new wy;
    return f.set(R, O.p), (async()=>{
      if(!M){
        const $=g(R);
        for(const H of $){
          const W=await C(H);
          if(W&&W.inlineCompletions.items.length>0)return
        }
      }
      return x(R)
    })().then($=>O.complete($), $=>O.error($)), O.p
  }
  async function x(R){
    let N;
    try{
      e instanceof ar?N=await R.provideInlineCompletions(t,e,u,l):N=await R.provideInlineEditsForRange?.(t,e,u,l)
    }
    catch(O){
      JE(O);
      return
    }
    if(!N)return;
    const M=new cyg(N, R);
    return kSA(l, ()=>M.removeRef()), M
  }
  const I=IH.fromPromisesResolveOrder(m.map(C));
  if(l.isCancellationRequested)return a.dispose(!0), new ejl([], new Set, []);
  const B=await ESA(u, I, d, t, s);
  return a.dispose(!0), B
}
function kSA(n, e){
  if(n.isCancellationRequested)return e(), at.None;
  {
    const t=n.onCancellationRequested(()=>{
      t.dispose(),e()
    });
    return{
      dispose:()=>t.dispose()
    }
  }
}
async function ESA(n, e, t, i, r){
  const s=new Map;
  let o=!1;
  const a=[];
  for await(const l of e)if(l){
    l.addRef(), a.push(l);
    for(const u of l.inlineCompletions.items){
      if(!n.includeInlineEdits&&(u.isInlineEdit||u.showInlineEditMenu)||!n.includeInlineCompletions&&!(u.isInlineEdit||u.showInlineEditMenu))continue;
      const d=lyg.from(u,l,t,i,r);
      s.set(d.hash(),d),!(u.isInlineEdit||u.showInlineEditMenu)&&n.triggerKind===Ybe.Automatic&&(d.toSingleTextEdit().removeCommonPrefix(new bKe(i)).isEmpty||(o=!0))
    }
    if(o)break
  }
  return new ejl(Array.from(s.values()), new Set(s.keys()), a)
}
function xSA(n, e){
  const t=e.getWordAtPosition(n), i=e.getLineMaxColumn(n.lineNumber);
  return t?new Zt(n.lineNumber, t.startColumn, n.lineNumber, i):Zt.fromPositions(n, n.with(void 0, i))
}
function ayg(n, e, t, i){
  const r=t.getLineContent(e.lineNumber), s=E2.replace(new dm(e.column-1, r.length), n), a=t.tokenization.tokenizeLinesAt(e.lineNumber, [s.apply(r)])?.[0].sliceZeroCopy(s.getRangeAfterApply());
  return a?_SA(a, i):n
}
var ejl, cyg, lyg, TSA=
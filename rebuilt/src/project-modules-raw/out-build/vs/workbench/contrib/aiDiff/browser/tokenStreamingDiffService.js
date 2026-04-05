// Module: out-build/vs/workbench/contrib/aiDiff/browser/tokenStreamingDiffService.js
// Offset: 33824704 (bundle byte offset)
// Size: 815 bytes

rt(), Er(), Wt(), ymy(), O0u=xi("tokenStreamingDiffService"), mDa=class extends at{
  constructor(e){
    super(), this.instantiationService=e
  }
  create(e, t, i, r){
    return this.instantiationService.createInstance(hDa, e, t, i, r)
  }
}, mDa=__decorate([__param(0, ln)], mDa), Vi(O0u, mDa, 1)
}
});
async function pDa(n, e, t){
  const i=e.split(`
`), r=t.split(`
`), s=await n.computeLinesDiff(i, r, {
    ignoreTrimWhitespace:!1, computeMoves:!1, maxComputationTimeMs:500
  });
  let o=0, a=0;
  for(const l of s.changes){
    for(let u=l.original.startLineNumber;
    u<l.original.endLineNumberExclusive;
    u++){
      const d=u-1;
      i[d].trim()&&a++
    }
    for(let u=l.modified.startLineNumber;
    u<l.modified.endLineNumberExclusive;
    u++){
      const d=u-1;
      r[d].trim()&&o++
    }
  }
  return{
    linesAdded:o, linesRemoved:a
  }
}
var wmy=
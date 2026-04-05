// Module: out-build/vs/workbench/contrib/multiDiffEditor/browser/multiDiffSourceResolverService.js
// Offset: 33626593 (bundle byte offset)
// Size: 2117 bytes

_s(), rt(), Wt(), Hbn=xi("multiDiffSourceResolverService"), Nrt=class{
  constructor(n, e, t, i, r, s, o){
    if(this.originalUri=n, this.modifiedUri=e, this.goToFileUri=t, this.contextKeys=i, this.status=r, this.originalContents=s, this.modifiedContents=o, !n&&!e)throw new _m("Invalid arguments")
  }
  getKey(){
    return JSON.stringify([this.modifiedUri?.toString(), this.originalUri?.toString()])
  }
}, D6f=class{
  constructor(){
    this._resolvers=new Set
  }
  registerResolver(n){
    if(this._resolvers.has(n))throw new _m("Duplicate resolver");
    return this._resolvers.add(n), $i(()=>this._resolvers.delete(n))
  }
  resolve(n){
    for(const e of this._resolvers)if(e.canHandleUri(n))return e.resolveDiffSource(n);
    return Promise.resolve(void 0)
  }
}
}
});
function wIa(n, e, t){
  const i=t.cellsDiff.changes, r=[];
  let s=0, o=0, a=-1;
  for(let l=0;
  l<i.length;
  l++){
    const u=i[l];
    for(let m=0;
    m<u.originalStart-s;
    m++){
      const p=n.cells[s+m],g=e.cells[o+m];
      p.getHashValue()===g.getHashValue()?r.push({
        originalCellIndex:s+m,modifiedCellIndex:o+m,type:"unchanged"
      }):(a===-1&&(a=r.length),r.push({
        originalCellIndex:s+m,modifiedCellIndex:o+m,type:"modified"
      }))
    }
    const d=Chy(u, n, e);
    d.length&&a===-1&&(a=r.length), r.push(...d), s=u.originalStart+u.originalLength, o=u.modifiedStart+u.modifiedLength
  }
  for(let l=s;
  l<n.cells.length;
  l++)r.push({
    originalCellIndex:l, modifiedCellIndex:l-s+o, type:"unchanged"
  });
  return{
    cellDiffInfo:r, firstChangeIndex:a
  }
}
function Chy(n, e, t){
  const i=[], r=Math.min(n.originalLength, n.modifiedLength);
  for(let s=0;
  s<r;
  s++){
    const o=e.cells[n.originalStart+s], a=t.cells[n.modifiedStart+s];
    if(o.cellKind!==a.cellKind)i.push({
      originalCellIndex:n.originalStart+s,type:"delete"
    }), i.push({
      modifiedCellIndex:n.modifiedStart+s,type:"insert"
    });
    else{
      const l=o.equal(a);
      i.push({
        originalCellIndex:n.originalStart+s,modifiedCellIndex:n.modifiedStart+s,type:l?"unchanged":"modified"
      })
    }
  }
  for(let s=r;
  s<n.originalLength;
  s++)i.push({
    originalCellIndex:n.originalStart+s, type:"delete"
  });
  for(let s=r;
  s<n.modifiedLength;
  s++)i.push({
    modifiedCellIndex:n.modifiedStart+s, type:"insert"
  });
  return i
}
var _Ia=
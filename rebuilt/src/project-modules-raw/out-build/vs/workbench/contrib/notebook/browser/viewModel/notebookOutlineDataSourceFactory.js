// Module: out-build/vs/workbench/contrib/notebook/browser/viewModel/notebookOutlineDataSourceFactory.js
// Offset: 33434546 (bundle byte offset)
// Size: 1680 bytes

rt(), Wt(), Jdy(), sIa=class extends igt{
  constructor(e){
    super(), this.instantiationService=e
  }
  createReferencedObject(e, t){
    return this.instantiationService.createInstance(rIa, t)
  }
  destroyReferencedObject(e, t){
    t.dispose()
  }
}, sIa=__decorate([__param(0, ln)], sIa), oIa=xi("INotebookCellOutlineDataSourceFactory"), aIa=class{
  constructor(e){
    this._data=e.createInstance(sIa)
  }
  getOrCreate(e){
    return this._data.acquire(e.getId(), e)
  }
}, aIa=__decorate([__param(0, ln)], aIa)
}
});
function Eki(n, e, t, i){
  const r=n.scrollTop-i, s=n.visibleRanges[0];
  if(!s)return new Map;
  if(s.start===0){
    const p=n.cellAt(0), g=kX.getVisibleOutlineEntry(0, t);
    if(p&&g&&p.cellKind===zd.Markup&&g.level<7&&n.scrollTop>22)return kX.checkCollapsedStickyLines(g, 100, n)
  }
  let o, a;
  const l=s.start-1;
  for(let p=l;
  p<s.end;
  p++){
    if(o=n.cellAt(p), !o)return new Map;
    if(a=kX.getVisibleOutlineEntry(p, t), !a)continue;
    const g=n.cellAt(p+1);
    if(!g){
      const A=n.getLayoutInfo().scrollHeight,w=Math.floor(A/22);
      return kX.checkCollapsedStickyLines(a,w,n)
    }
    const f=kX.getVisibleOutlineEntry(p+1, t);
    if(f&&g.cellKind===zd.Markup&&f.level<7){
      const A=e.getCellViewScrollTop(g),w=kX.computeStickyHeight(a),C=kX.computeStickyHeight(f);
      if(r+w<A){
        const x=Math.floor((A-r)/22);
        return kX.checkCollapsedStickyLines(a,x,n)
      }
      else{
        if(C>=w)return kX.checkCollapsedStickyLines(f,100,n);
        if(C<w){
          const x=A-r;
          if(x>=C){
            const I=Math.floor(x/22);
            return kX.checkCollapsedStickyLines(a,I,n)
          }
          else return kX.checkCollapsedStickyLines(f,100,n)
        }
      }
    }
  }
  const u=n.getLayoutInfo().scrollHeight, d=Math.floor((u-r)/22);
  return kX.checkCollapsedStickyLines(a, d, n)
}
var k_u, E_u, s6f, kX, Gdy=
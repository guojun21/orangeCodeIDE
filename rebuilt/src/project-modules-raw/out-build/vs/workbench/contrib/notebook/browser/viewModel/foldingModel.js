// Module: out-build/vs/workbench/contrib/notebook/browser/viewModel/foldingModel.js
// Offset: 25015668 (bundle byte offset)
// Size: 4006 bytes

y3(), yn(), rt(), vRe(), Opi(), Jca(), ph(), W1e(), xfg={
  limit:5e3, update:()=>{
    
  }
}, Tfg=class{
  get regions(){
    return this._regions
  }
  constructor(){
    this._viewModel=null, this._viewModelStore=new Ut, this._onDidFoldingRegionChanges=new Qe, this.onDidFoldingRegionChanged=this._onDidFoldingRegionChanges.event, this._foldingRangeDecorationIds=[], this._regions=new Qae(new Uint32Array(0), new Uint32Array(0))
  }
  dispose(){
    this._onDidFoldingRegionChanges.dispose(), this._viewModelStore.dispose()
  }
  detachViewModel(){
    this._viewModelStore.clear(), this._viewModel=null
  }
  attachViewModel(n){
    this._viewModel=n, this._viewModelStore.add(this._viewModel.onDidChangeViewCells(()=>{
      this.recompute()
    })), this._viewModelStore.add(this._viewModel.onDidChangeSelection(()=>{
      if(!this._viewModel)return;
      const e=Qne(this._viewModel.getSelections());
      let t=!1;
      e.forEach(i=>{
        let r=this.regions.findRange(i+1);
        for(;
        r!==-1;
        )this._regions.isCollapsed(r)&&i>this._regions.getStartLineNumber(r)-1&&(this._regions.setCollapsed(r,!1),t=!0),r=this._regions.getParentIndex(r)
      }),t&&this._onDidFoldingRegionChanges.fire()
    })), this.recompute()
  }
  getRegionAtLine(n){
    if(this._regions){
      const e=this._regions.findRange(n);
      if(e>=0)return this._regions.toRegion(e)
    }
    return null
  }
  getRegionsInside(n, e){
    const t=[], i=n?n.regionIndex+1:0, r=n?n.endLineNumber:Number.MAX_VALUE;
    if(e&&e.length===2){
      const s=[];
      for(let o=i,a=this._regions.length;
      o<a;
      o++){
        const l=this._regions.toRegion(o);
        if(this._regions.getStartLineNumber(o)<r){
          for(;
          s.length>0&&!l.containedBy(s[s.length-1]);
          )s.pop();
          s.push(l),e(l,s.length)&&t.push(l)
        }
        else break
      }
    }
    else for(let s=i, o=this._regions.length;
    s<o;
    s++){
      const a=this._regions.toRegion(s);
      if(this._regions.getStartLineNumber(s)<r)(!e||e(a))&&t.push(a);
      else break
    }
    return t
  }
  getAllRegionsAtLine(n, e){
    const t=[];
    if(this._regions){
      let i=this._regions.findRange(n),r=1;
      for(;
      i>=0;
      ){
        const s=this._regions.toRegion(i);
        (!e||e(s,r))&&t.push(s),r++,i=s.parentIndex
      }
    }
    return t
  }
  setCollapsed(n, e){
    this._regions.setCollapsed(n, e)
  }
  recompute(){
    if(!this._viewModel)return;
    const n=this._viewModel, e=n.viewCells, t=[];
    for(let d=0;
    d<e.length;
    d++){
      const m=e[d];
      if(m.cellKind!==zd.Markup||m.language!=="markdown")continue;
      const p=Math.min(7,...Array.from(Efg(m.getText()),g=>g.depth));
      p<7&&t.push({
        index:d,level:p,endIndex:0
      })
    }
    const i=t.map((d, m)=>{
      let p;
      for(let f=m+1;
      f<t.length;
      ++f)if(t[f].level<=d.level){
        p=t[f].index-1;
        break
      }
      const g=p!==void 0?p:e.length-1;
      return{
        start:d.index+1,end:g+1,rank:1
      }
    }).filter(d=>d.start!==d.end), r=Wgg(i, xfg);
    let s=0;
    const o=()=>{
      for(;
      s<this._regions.length;
      ){
        const d=this._regions.isCollapsed(s);
        if(s++,d)return s-1
      }
      return-1
    };
    let a=0, l=o();
    for(;
    l!==-1&&a<r.length;
    ){
      const d=n.getTrackedRange(this._foldingRangeDecorationIds[l]);
      if(d){
        const m=d.start;
        for(;
        a<r.length;
        ){
          const p=r.getStartLineNumber(a)-1;
          if(m>=p)r.setCollapsed(a,m===p),a++;
          else break
        }
      }
      l=o()
    }
    for(;
    a<r.length;
    )r.setCollapsed(a, !1), a++;
    const u=[];
    for(let d=0;
    d<r.length;
    d++){
      const m=r.toRegion(d);
      u.push({
        start:m.startLineNumber-1,end:m.endLineNumber-1
      })
    }
    this._foldingRangeDecorationIds.forEach(d=>n.setTrackedRange(d, null, 3)), this._foldingRangeDecorationIds=u.map(d=>n.setTrackedRange(null, d, 3)).filter(d=>d!==null), this._regions=r, this._onDidFoldingRegionChanges.fire()
  }
  getMemento(){
    const n=[];
    let e=0;
    for(;
    e<this._regions.length;
    ){
      if(this._regions.isCollapsed(e)){
        const i=this._regions.toRegion(e);
        n.push({
          start:i.startLineNumber-1,end:i.endLineNumber-1
        })
      }
      e++
    }
    return n
  }
  applyMemento(n){
    if(!this._viewModel)return!1;
    let e=0, t=0;
    for(;
    t<n.length&&e<this._regions.length;
    ){
      if(this._viewModel.getTrackedRange(this._foldingRangeDecorationIds[e])){
        const r=n[t].start;
        for(;
        e<this._regions.length;
        ){
          const s=this._regions.getStartLineNumber(e)-1;
          if(r>=s)this._regions.setCollapsed(e,r===s),e++;
          else break
        }
      }
      t++
    }
    for(;
    e<this._regions.length;
    )this._regions.setCollapsed(e, !1), e++;
    return!0
  }
}
}
}), zca, dCt, Dfg, Bfg, Rfg, Pfg, cCA, Lfg, Nfg, Mfg, Ffg, Ofg, Ufg, xWl, TWl, IWl, lNe, DWl, BWl, $fg, Net, qfg, Hfg, RWl, Vca, Jfg, Gfg, Wfg, bJ=
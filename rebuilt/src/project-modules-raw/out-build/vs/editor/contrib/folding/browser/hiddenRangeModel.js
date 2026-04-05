// Module: out-build/vs/editor/contrib/folding/browser/hiddenRangeModel.js
// Offset: 25223718 (bundle byte offset)
// Size: 2747 bytes

GD(), yn(), ts(), EVe(), Yvg=class{
  get onDidChange(){
    return this._updateEventEmitter.event
  }
  get hiddenRanges(){
    return this._hiddenRanges
  }
  constructor(n){
    this._updateEventEmitter=new Qe, this._hasLineChanges=!1, this._foldingModel=n, this._foldingModelListener=n.onDidChange(e=>this.updateHiddenRanges()), this._hiddenRanges=[], n.regions.length&&this.updateHiddenRanges()
  }
  notifyChangeModelContent(n){
    this._hiddenRanges.length&&!this._hasLineChanges&&(this._hasLineChanges=n.changes.some(e=>e.range.endLineNumber!==e.range.startLineNumber||Vbe(e.text)[0]!==0))
  }
  updateHiddenRanges(){
    let n=!1;
    const e=[];
    let t=0, i=0, r=Number.MAX_VALUE, s=-1;
    const o=this._foldingModel.regions;
    for(;
    t<o.length;
    t++){
      if(!o.isCollapsed(t))continue;
      const a=o.getStartLineNumber(t)+1,l=o.getEndLineNumber(t);
      r<=a&&l<=s||(!n&&i<this._hiddenRanges.length&&this._hiddenRanges[i].startLineNumber===a&&this._hiddenRanges[i].endLineNumber===l?(e.push(this._hiddenRanges[i]),i++):(n=!0,e.push(new Zt(a,1,l,1))),r=a,s=l)
    }
    (this._hasLineChanges||n||i<this._hiddenRanges.length)&&this.applyHiddenRanges(e)
  }
  applyHiddenRanges(n){
    this._hiddenRanges=n, this._hasLineChanges=!1, this._updateEventEmitter.fire(n)
  }
  hasRanges(){
    return this._hiddenRanges.length>0
  }
  isHidden(n){
    return Kvg(this._hiddenRanges, n)!==null
  }
  adjustSelections(n){
    let e=!1;
    const t=this._foldingModel.textModel;
    let i=null;
    const r=s=>((!i||!GCA(s, i))&&(i=Kvg(this._hiddenRanges, s)), i?i.startLineNumber-1:null);
    for(let s=0, o=n.length;
    s<o;
    s++){
      let a=n[s];
      const l=r(a.startLineNumber);
      l&&(a=a.setStartPosition(l,t.getLineMaxColumn(l)),e=!0);
      const u=r(a.endLineNumber);
      u&&(a=a.setEndPosition(u,t.getLineMaxColumn(u)),e=!0),n[s]=a
    }
    return e
  }
  dispose(){
    this.hiddenRanges.length>0&&(this._hiddenRanges=[], this._updateEventEmitter.fire(this._hiddenRanges)), this._foldingModelListener&&(this._foldingModelListener.dispose(), this._foldingModelListener=null)
  }
}
}
});
function QCA(n, e, t, i=tAg){
  const r=n.getOptions().tabSize, s=new eAg(i);
  let o;
  t&&(o=new RegExp(`(${t.start.source})|(?:${t.end.source})`));
  const a=[], l=n.getLineCount()+1;
  a.push({
    indent:-1, endAbove:l, line:l
  });
  for(let u=n.getLineCount();
  u>0;
  u--){
    const d=n.getLineContent(u), m=mOo(d, r);
    let p=a[a.length-1];
    if(m===-1){
      e&&(p.endAbove=u);
      continue
    }
    let g;
    if(o&&(g=d.match(o)))if(g[1]){
      let f=a.length-1;
      for(;
      f>0&&a[f].indent!==-2;
      )f--;
      if(f>0){
        a.length=f+1,p=a[f],s.insertFirst(u,p.line,m),p.line=u,p.indent=m,p.endAbove=u;
        continue
      }
    }
    else{
      a.push({
        indent:-2,endAbove:u,line:u
      });
      continue
    }
    if(p.indent>m){
      do a.pop(),p=a[a.length-1];
      while(p.indent>m);
      const f=p.endAbove-1;
      f-u>=1&&s.insertFirst(u,f,m)
    }
    p.indent===m?p.endAbove=u:a.push({
      indent:m,endAbove:u,line:u
    })
  }
  return s.toIndentRanges(n)
}
var Zvg, Xvg, fgi, eAg, tAg, xQl=
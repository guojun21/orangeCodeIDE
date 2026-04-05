// Module: out-build/vs/editor/contrib/folding/browser/foldingModel.js
// Offset: 25218843 (bundle byte offset)
// Size: 4875 bytes

yn(), Opi(), iw(), zvg=class{
  get regions(){
    return this._regions
  }
  get textModel(){
    return this._textModel
  }
  get decorationProvider(){
    return this._decorationProvider
  }
  constructor(n, e){
    this._updateEventEmitter=new Qe, this.onDidChange=this._updateEventEmitter.event, this._textModel=n, this._decorationProvider=e, this._regions=new Qae(new Uint32Array(0), new Uint32Array(0)), this._editorDecorationIds=[]
  }
  toggleCollapseState(n){
    if(!n.length)return;
    n=n.sort((t, i)=>t.regionIndex-i.regionIndex);
    const e={
      
    };
    this._decorationProvider.changeDecorations(t=>{
      let i=0,r=-1,s=-1;
      const o=a=>{
        for(;
        i<a;
        ){
          const l=this._regions.getEndLineNumber(i),u=this._regions.isCollapsed(i);
          if(l<=r){
            const d=this.regions.getSource(i)!==0;
            t.changeDecorationOptions(this._editorDecorationIds[i],this._decorationProvider.getDecorationOption(u,l<=s,d))
          }
          u&&l>s&&(s=l),i++
        }
      };
      for(const a of n){
        const l=a.regionIndex,u=this._editorDecorationIds[l];
        if(u&&!e[u]){
          e[u]=!0,o(l);
          const d=!this._regions.isCollapsed(l);
          this._regions.setCollapsed(l,d),r=Math.max(r,this._regions.getEndLineNumber(l))
        }
      }
      o(this._regions.length)
    }), this._updateEventEmitter.fire({
      model:this,collapseStateChanged:n
    })
  }
  removeManualRanges(n){
    const e=new Array, t=i=>{
      for(const r of n)if(!(r.startLineNumber>i.endLineNumber||i.startLineNumber>r.endLineNumber))return!0;
      return!1
    };
    for(let i=0;
    i<this._regions.length;
    i++){
      const r=this._regions.toFoldRange(i);
      (r.source===0||!t(r))&&e.push(r)
    }
    this.updatePost(Qae.fromFoldRanges(e))
  }
  update(n, e){
    const t=this._currentFoldedOrManualRanges(e), i=Qae.sanitizeAndMerge(n, t, this._textModel.getLineCount(), e);
    this.updatePost(Qae.fromFoldRanges(i))
  }
  updatePost(n){
    const e=[];
    let t=-1;
    for(let i=0, r=n.length;
    i<r;
    i++){
      const s=n.getStartLineNumber(i),o=n.getEndLineNumber(i),a=n.isCollapsed(i),l=n.getSource(i)!==0,u={
        startLineNumber:s,startColumn:this._textModel.getLineMaxColumn(s),endLineNumber:o,endColumn:this._textModel.getLineMaxColumn(o)+1
      };
      e.push({
        range:u,options:this._decorationProvider.getDecorationOption(a,o<=t,l)
      }),a&&o>t&&(t=o)
    }
    this._decorationProvider.changeDecorations(i=>this._editorDecorationIds=i.deltaDecorations(this._editorDecorationIds, e)), this._regions=n, this._updateEventEmitter.fire({
      model:this
    })
  }
  _currentFoldedOrManualRanges(n){
    const e=[];
    for(let t=0, i=this._regions.length;
    t<i;
    t++){
      let r=this.regions.isCollapsed(t);
      const s=this.regions.getSource(t);
      if(r||s!==0){
        const o=this._regions.toFoldRange(t),a=this._textModel.getDecorationRange(this._editorDecorationIds[t]);
        a&&(r&&n?.startsInside(a.startLineNumber+1,a.endLineNumber)&&(r=!1),e.push({
          startLineNumber:a.startLineNumber,endLineNumber:a.endLineNumber,type:o.type,isCollapsed:r,source:s
        }))
      }
    }
    return e
  }
  getMemento(){
    const n=this._currentFoldedOrManualRanges(), e=[], t=this._textModel.getLineCount();
    for(let i=0, r=n.length;
    i<r;
    i++){
      const s=n[i];
      if(s.startLineNumber>=s.endLineNumber||s.startLineNumber<1||s.endLineNumber>t)continue;
      const o=this._getLinesChecksum(s.startLineNumber+1,s.endLineNumber);
      e.push({
        startLineNumber:s.startLineNumber,endLineNumber:s.endLineNumber,isCollapsed:s.isCollapsed,source:s.source,checksum:o
      })
    }
    return e.length>0?e:void 0
  }
  applyMemento(n){
    if(!Array.isArray(n))return;
    const e=[], t=this._textModel.getLineCount();
    for(const r of n){
      if(r.startLineNumber>=r.endLineNumber||r.startLineNumber<1||r.endLineNumber>t)continue;
      const s=this._getLinesChecksum(r.startLineNumber+1,r.endLineNumber);
      (!r.checksum||s===r.checksum)&&e.push({
        startLineNumber:r.startLineNumber,endLineNumber:r.endLineNumber,type:void 0,isCollapsed:r.isCollapsed??!0,source:r.source??0
      })
    }
    const i=Qae.sanitizeAndMerge(this._regions, e, t);
    this.updatePost(Qae.fromFoldRanges(i))
  }
  _getLinesChecksum(n, e){
    return VC(this._textModel.getLineContent(n)+this._textModel.getLineContent(e))%1e6
  }
  dispose(){
    this._decorationProvider.removeDecorations(this._editorDecorationIds)
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
}
}
});
function GCA(n, e){
  return n>=e.startLineNumber&&n<=e.endLineNumber
}
function Kvg(n, e){
  const t=Sbe(n, i=>e<i.startLineNumber)-1;
  return t>=0&&n[t].endLineNumber>=e?n[t]:null
}
var Yvg, WCA=
// Module: out-build/vs/workbench/contrib/notebook/browser/view/notebookCellListView.js
// Offset: 33028897 (bundle byte offset)
// Size: 5221 bytes

ZVe(), UVe(), Cwu=class{
  get paddingTop(){
    return this._paddingTop
  }
  set paddingTop(n){
    this._size=this._size+n-this._paddingTop, this._paddingTop=n
  }
  get count(){
    return this._items.length
  }
  get size(){
    return this._size
  }
  constructor(n){
    this._items=[], this._whitespace=[], this._prefixSumComputer=new iTc([]), this._size=0, this._paddingTop=0, this._paddingTop=n??0, this._size=this._paddingTop
  }
  getWhitespaces(){
    return this._whitespace
  }
  restoreWhitespace(n){
    this._whitespace=n, this._size=this._paddingTop+this._items.reduce((e, t)=>e+t.size, 0)+this._whitespace.reduce((e, t)=>e+t.size, 0)
  }
  splice(n, e, t){
    const i=t??[];
    this._items.splice(n, e, ...i), this._size=this._paddingTop+this._items.reduce((s, o)=>s+o.size, 0)+this._whitespace.reduce((s, o)=>s+o.size, 0), this._prefixSumComputer.removeValues(n, e);
    const r=[];
    for(let s=0;
    s<i.length;
    s++){
      const o=s+n,a=this._whitespace.filter(l=>l.afterPosition===o+1);
      a.length>0?r.push(i[s].size+a.reduce((l,u)=>l+u.size,0)):r.push(i[s].size)
    }
    this._prefixSumComputer.insertValues(n, r);
    for(let s=n;
    s<this._items.length;
    s++){
      const o=this._whitespace.filter(a=>a.afterPosition===s+1);
      o.length>0?this._prefixSumComputer.setValue(s,this._items[s].size+o.reduce((a,l)=>a+l.size,0)):this._prefixSumComputer.setValue(s,this._items[s].size)
    }
  }
  insertWhitespace(n, e, t){
    let i=0;
    const r=this._whitespace.filter(s=>s.afterPosition===e);
    if(r.length>0&&(i=Math.max(...r.map(s=>s.priority))+1), this._whitespace.push({
      id:n,afterPosition:e,size:t,priority:i
    }), this._size+=t, this._whitespace.sort((s, o)=>s.afterPosition===o.afterPosition?s.priority-o.priority:s.afterPosition-o.afterPosition), e>0){
      const s=e-1,a=this._items[s].size+t;
      this._prefixSumComputer.setValue(s,a)
    }
  }
  changeOneWhitespace(n, e, t){
    const i=this._whitespace.findIndex(r=>r.id===n);
    if(i!==-1){
      const r=this._whitespace[i],s=r.afterPosition;
      r.afterPosition=e;
      const o=r.size,a=t-o;
      if(r.size=t,this._size+=a,s>0&&s<=this._items.length){
        const l=s-1,d=this._items[l].size;
        this._prefixSumComputer.setValue(l,d)
      }
      if(e>0&&e<=this._items.length){
        const l=e-1,d=this._items[l].size+t;
        this._prefixSumComputer.setValue(l,d)
      }
    }
  }
  removeWhitespace(n){
    const e=this._whitespace.findIndex(t=>t.id===n);
    if(e!==-1){
      const t=this._whitespace[e];
      if(this._whitespace.splice(e,1),this._size-=t.size,t.afterPosition>0){
        const i=t.afterPosition-1,r=this._items[i].size,s=this._whitespace.filter(a=>a.afterPosition===t.afterPosition),o=r+s.reduce((a,l)=>a+l.size,0);
        this._prefixSumComputer.setValue(i,o)
      }
    }
  }
  getWhitespacePosition(n){
    const e=this._whitespace.find(a=>a.id===n);
    if(!e)throw new Error("Whitespace not found");
    const t=e.afterPosition;
    if(t===0)return this._whitespace.filter(l=>l.afterPosition===t&&l.priority<e.priority).reduce((l, u)=>l+u.size, 0)+this.paddingTop;
    const i=this._whitespace.filter(a=>a.afterPosition===0).reduce((a, l)=>a+l.size, 0), r=t-1, s=this._prefixSumComputer.getPrefixSum(r), o=this._items[r].size;
    return s+o+i+this.paddingTop
  }
  indexAt(n){
    if(n<0)return-1;
    const e=this._whitespace.filter(i=>i.afterPosition===0).reduce((i, r)=>i+r.size, 0), t=n-(this._paddingTop+e);
    return t<=0?0:t>=this._size-this._paddingTop-e?this.count:this._prefixSumComputer.getIndexOf(Math.trunc(t)).index
  }
  indexAfter(n){
    const e=this.indexAt(n);
    return Math.min(e+1, this._items.length)
  }
  positionAt(n){
    if(n<0||this.count===0||n>=this.count)return-1;
    const e=this._whitespace.filter(t=>t.afterPosition===0).reduce((t, i)=>t+i.size, 0);
    return this._prefixSumComputer.getPrefixSum(n)+this._paddingTop+e
  }
}, H9f=class extends joe{
  constructor(){
    super(...arguments), this._lastWhitespaceId=0, this._renderingStack=0
  }
  get inRenderingTransaction(){
    return this._renderingStack>0
  }
  get notebookRangeMap(){
    return this.rangeMap
  }
  render(n, e, t, i, r, s){
    this._renderingStack++, super.render(n, e, t, i, r, s), this._renderingStack--
  }
  _rerender(n, e, t){
    this._renderingStack++, super._rerender(n, e, t), this._renderingStack--
  }
  createRangeMap(n){
    const e=this.rangeMap;
    if(e){
      const t=new Cwu(n);
      return t.restoreWhitespace(e.getWhitespaces()),t
    }
    else return new Cwu(n)
  }
  insertWhitespace(n, e){
    const t=this.scrollTop, i=`${++this._lastWhitespaceId}`, r=this.getRenderRange(this.lastRenderTop, this.lastRenderHeight), s=this.elementTop(n), o=t>s;
    this.notebookRangeMap.insertWhitespace(i, n, e);
    const a=o?t+e:t;
    return this.render(r, a, this.lastRenderHeight, void 0, void 0, !1), this._rerender(a, this.renderHeight, !1), this.eventuallyUpdateScrollDimensions(), i
  }
  changeOneWhitespace(n, e, t){
    const i=this.scrollTop, r=this.getRenderRange(this.lastRenderTop, this.lastRenderHeight);
    this.notebookRangeMap.getWhitespacePosition(n)>i?(this.notebookRangeMap.changeOneWhitespace(n, e, t), this.render(r, i, this.lastRenderHeight, void 0, void 0, !1), this._rerender(i, this.renderHeight, !1), this.eventuallyUpdateScrollDimensions()):(this.notebookRangeMap.changeOneWhitespace(n, e, t), this.eventuallyUpdateScrollDimensions())
  }
  removeWhitespace(n){
    const e=this.scrollTop, t=this.getRenderRange(this.lastRenderTop, this.lastRenderHeight);
    this.notebookRangeMap.removeWhitespace(n), this.render(t, e, this.lastRenderHeight, void 0, void 0, !1), this._rerender(e, this.renderHeight, !1), this.eventuallyUpdateScrollDimensions()
  }
  getWhitespacePosition(n){
    return this.notebookRangeMap.getWhitespacePosition(n)
  }
}
}
}), J9f, Tuy=
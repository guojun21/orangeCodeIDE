// Module: out-build/vs/editor/browser/view/viewLayer.js
// Offset: 1599542 (bundle byte offset)
// Size: 7028 bytes

sI(), ive(), _s(), kSe(), RTc=class{
  constructor(n){
    this._lineFactory=n, this._set(1, [])
  }
  flush(){
    this._set(1, [])
  }
  _set(n, e){
    this._lines=e, this._rendLineNumberStart=n
  }
  _get(){
    return{
      rendLineNumberStart:this._rendLineNumberStart,lines:this._lines
    }
  }
  getStartLineNumber(){
    return this._rendLineNumberStart
  }
  getEndLineNumber(){
    return this._rendLineNumberStart+this._lines.length-1
  }
  getCount(){
    return this._lines.length
  }
  getLine(n){
    const e=n-this._rendLineNumberStart;
    if(e<0||e>=this._lines.length)throw new _m("Illegal value for lineNumber");
    return this._lines[e]
  }
  onLinesDeleted(n, e){
    if(this.getCount()===0)return null;
    const t=this.getStartLineNumber(), i=this.getEndLineNumber();
    if(e<t){
      const a=e-n+1;
      return this._rendLineNumberStart-=a,null
    }
    if(n>i)return null;
    let r=0, s=0;
    for(let a=t;
    a<=i;
    a++){
      const l=a-this._rendLineNumberStart;
      n<=a&&a<=e&&(s===0?(r=l,s=1):s++)
    }
    if(n<t){
      let a=0;
      e<t?a=e-n+1:a=t-n,this._rendLineNumberStart-=a
    }
    return this._lines.splice(r, s)
  }
  onLinesChanged(n, e){
    const t=n+e-1;
    if(this.getCount()===0)return!1;
    const i=this.getStartLineNumber(), r=this.getEndLineNumber();
    let s=!1;
    for(let o=n;
    o<=t;
    o++)o>=i&&o<=r&&(this._lines[o-this._rendLineNumberStart].onContentChanged(), s=!0);
    return s
  }
  onLinesInserted(n, e){
    if(this.getCount()===0)return null;
    const t=e-n+1, i=this.getStartLineNumber(), r=this.getEndLineNumber();
    if(n<=i)return this._rendLineNumberStart+=t, null;
    if(n>r)return null;
    if(t+n>r)return this._lines.splice(n-this._rendLineNumberStart, r-n+1);
    const s=[];
    for(let d=0;
    d<t;
    d++)s[d]=this._lineFactory.createLine();
    const o=n-this._rendLineNumberStart, a=this._lines.slice(0, o), l=this._lines.slice(o, this._lines.length-t), u=this._lines.slice(this._lines.length-t, this._lines.length);
    return this._lines=a.concat(s).concat(l), u
  }
  onTokensChanged(n){
    if(this.getCount()===0)return!1;
    const e=this.getStartLineNumber(), t=this.getEndLineNumber();
    let i=!1;
    for(let r=0, s=n.length;
    r<s;
    r++){
      const o=n[r];
      if(o.toLineNumber<e||o.fromLineNumber>t)continue;
      const a=Math.max(e,o.fromLineNumber),l=Math.min(t,o.toLineNumber);
      for(let u=a;
      u<=l;
      u++){
        const d=u-this._rendLineNumberStart;
        this._lines[d].onTokensChanged(),i=!0
      }
    }
    return i
  }
}, PTc=class{
  constructor(n){
    this._lineFactory=n, this.domNode=this._createDomNode(), this._linesCollection=new RTc(this._lineFactory)
  }
  _createDomNode(){
    const n=mw(document.createElement("div"));
    return n.setClassName("view-layer"), n.setPosition("absolute"), n.domNode.setAttribute("role", "presentation"), n.domNode.setAttribute("aria-hidden", "true"), n
  }
  onConfigurationChanged(n){
    return!!n.hasChanged(151)
  }
  onFlushed(n, e){
    if(e){
      const t=this._linesCollection.getStartLineNumber(),i=this._linesCollection.getEndLineNumber();
      for(let r=t;
      r<=i;
      r++)this._linesCollection.getLine(r).getDomNode()?.remove()
    }
    return this._linesCollection.flush(), !0
  }
  onLinesChanged(n){
    return this._linesCollection.onLinesChanged(n.fromLineNumber, n.count)
  }
  onLinesDeleted(n){
    const e=this._linesCollection.onLinesDeleted(n.fromLineNumber, n.toLineNumber);
    if(e)for(let t=0, i=e.length;
    t<i;
    t++)e[t].getDomNode()?.remove();
    return!0
  }
  onLinesInserted(n){
    const e=this._linesCollection.onLinesInserted(n.fromLineNumber, n.toLineNumber);
    if(e)for(let t=0, i=e.length;
    t<i;
    t++)e[t].getDomNode()?.remove();
    return!0
  }
  onScrollChanged(n){
    return n.scrollTopChanged
  }
  onTokensChanged(n){
    return this._linesCollection.onTokensChanged(n.ranges)
  }
  onZonesChanged(n){
    return!0
  }
  getStartLineNumber(){
    return this._linesCollection.getStartLineNumber()
  }
  getEndLineNumber(){
    return this._linesCollection.getEndLineNumber()
  }
  getVisibleLine(n){
    return this._linesCollection.getLine(n)
  }
  renderLines(n){
    const e=this._linesCollection._get(), t=new hAh(this.domNode.domNode, this._lineFactory, n), i={
      rendLineNumberStart:e.rendLineNumberStart,lines:e.lines,linesLength:e.lines.length
    }, r=t.render(i, n.startLineNumber, n.endLineNumber, n.relativeVerticalOffset);
    this._linesCollection._set(r.rendLineNumberStart, r.lines)
  }
}, hAh=class FCn{
  static{
    this._ttPolicy=nve("editorViewLayer", {
      createHTML:e=>e
    })
  }
  constructor(e, t, i){
    this._domNode=e, this._lineFactory=t, this._viewportData=i
  }
  render(e, t, i, r){
    const s={
      rendLineNumberStart:e.rendLineNumberStart,lines:e.lines.slice(0),linesLength:e.linesLength
    };
    if(s.rendLineNumberStart+s.linesLength-1<t||i<s.rendLineNumberStart){
      s.rendLineNumberStart=t,s.linesLength=i-t+1,s.lines=[];
      for(let o=t;
      o<=i;
      o++)s.lines[o-t]=this._lineFactory.createLine();
      return this._finishRendering(s,!0,r),s
    }
    if(this._renderUntouchedLines(s, Math.max(t-s.rendLineNumberStart, 0), Math.min(i-s.rendLineNumberStart, s.linesLength-1), r, t), s.rendLineNumberStart>t){
      const o=t,a=Math.min(i,s.rendLineNumberStart-1);
      o<=a&&(this._insertLinesBefore(s,o,a,r,t),s.linesLength+=a-o+1)
    }
    else if(s.rendLineNumberStart<t){
      const o=Math.min(s.linesLength,t-s.rendLineNumberStart);
      o>0&&(this._removeLinesBefore(s,o),s.linesLength-=o)
    }
    if(s.rendLineNumberStart=t, s.rendLineNumberStart+s.linesLength-1<i){
      const o=s.rendLineNumberStart+s.linesLength,a=i;
      o<=a&&(this._insertLinesAfter(s,o,a,r,t),s.linesLength+=a-o+1)
    }
    else if(s.rendLineNumberStart+s.linesLength-1>i){
      const o=Math.max(0,i-s.rendLineNumberStart+1),l=s.linesLength-1-o+1;
      l>0&&(this._removeLinesAfter(s,l),s.linesLength-=l)
    }
    return this._finishRendering(s, !1, r), s
  }
  _renderUntouchedLines(e, t, i, r, s){
    const o=e.rendLineNumberStart, a=e.lines;
    for(let l=t;
    l<=i;
    l++){
      const u=o+l;
      a[l].layoutLine(u,r[u-s],this._viewportData.lineHeight)
    }
  }
  _insertLinesBefore(e, t, i, r, s){
    const o=[];
    let a=0;
    for(let l=t;
    l<=i;
    l++)o[a++]=this._lineFactory.createLine();
    e.lines=o.concat(e.lines)
  }
  _removeLinesBefore(e, t){
    for(let i=0;
    i<t;
    i++)e.lines[i].getDomNode()?.remove();
    e.lines.splice(0, t)
  }
  _insertLinesAfter(e, t, i, r, s){
    const o=[];
    let a=0;
    for(let l=t;
    l<=i;
    l++)o[a++]=this._lineFactory.createLine();
    e.lines=e.lines.concat(o)
  }
  _removeLinesAfter(e, t){
    const i=e.linesLength-t;
    for(let r=0;
    r<t;
    r++)e.lines[i+r].getDomNode()?.remove();
    e.lines.splice(i, t)
  }
  _finishRenderingNewLines(e, t, i, r){
    FCn._ttPolicy&&(i=FCn._ttPolicy.createHTML(i));
    const s=this._domNode.lastChild;
    t||!s?this._domNode.innerHTML=i:s.insertAdjacentHTML("afterend", i);
    let o=this._domNode.lastChild;
    for(let a=e.linesLength-1;
    a>=0;
    a--){
      const l=e.lines[a];
      r[a]&&(l.setDomNode(o),o=o.previousSibling)
    }
  }
  _finishRenderingInvalidLines(e, t, i){
    const r=document.createElement("div");
    FCn._ttPolicy&&(t=FCn._ttPolicy.createHTML(t)), r.innerHTML=t;
    for(let s=0;
    s<e.linesLength;
    s++){
      const o=e.lines[s];
      if(i[s]){
        const a=r.firstChild,l=o.getDomNode();
        l.parentNode.replaceChild(a,l),o.setDomNode(a)
      }
    }
  }
  static{
    this._sb=new Gbe(1e5)
  }
  _finishRendering(e, t, i){
    const r=FCn._sb, s=e.linesLength, o=e.lines, a=e.rendLineNumberStart, l=[];
    {
      r.reset();
      let u=!1;
      for(let d=0;
      d<s;
      d++){
        const m=o[d];
        l[d]=!1,!(m.getDomNode()||!m.renderLine(d+a,i[d],this._viewportData.lineHeight,this._viewportData,r))&&(l[d]=!0,u=!0)
      }
      u&&this._finishRenderingNewLines(e,t,r.build(),l)
    }
    {
      r.reset();
      let u=!1;
      const d=[];
      for(let m=0;
      m<s;
      m++){
        const p=o[m];
        d[m]=!1,!(l[m]||!p.renderLine(m+a,i[m],this._viewportData.lineHeight,this._viewportData,r))&&(d[m]=!0,u=!0)
      }
      u&&this._finishRenderingInvalidLines(e,r.build(),d)
    }
  }
}
}
}), NTc, mAh, pAh, gAh, DcA=
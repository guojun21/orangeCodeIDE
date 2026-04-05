// Module: out-build/vs/editor/browser/viewParts/glyphMargin/glyphMargin.js
// Offset: 1634986 (bundle byte offset)
// Size: 6950 bytes

sI(), Vs(), UcA(), WVe(), j$(), tl(), ts(), xw(), h3o=class{
  constructor(n, e, t, i, r){
    this.startLineNumber=n, this.endLineNumber=e, this.className=t, this.tooltip=i, this._decorationToRenderBrand=void 0, this.zIndex=r??0
  }
}, SAh=class{
  constructor(n, e, t){
    this.className=n, this.zIndex=e, this.tooltip=t
  }
}, kAh=class{
  constructor(){
    this.decorations=[]
  }
  add(n){
    this.decorations.push(n)
  }
  getDecorations(){
    return this.decorations
  }
}, $Tc=class extends p9e{
  _render(n, e, t){
    const i=[];
    for(let o=n;
    o<=e;
    o++){
      const a=o-n;
      i[a]=new kAh
    }
    if(t.length===0)return i;
    t.sort((o, a)=>o.className===a.className?o.startLineNumber===a.startLineNumber?o.endLineNumber-a.endLineNumber:o.startLineNumber-a.startLineNumber:o.className<a.className?-1:1);
    let r=null, s=0;
    for(let o=0, a=t.length;
    o<a;
    o++){
      const l=t[o],u=l.className,d=l.zIndex;
      let m=Math.max(l.startLineNumber,n)-n;
      const p=Math.min(l.endLineNumber,e)-n;
      r===u?(m=Math.max(s+1,m),s=Math.max(s,p)):(r=u,s=p);
      for(let g=m;
      g<=s;
      g++)i[g].add(new SAh(u,d,l.tooltip))
    }
    return i
  }
}, EAh=class extends yW{
  constructor(n){
    super(n), this._widgets={
      
    }, this._context=n;
    const e=this._context.configuration.options, t=e.get(151);
    this.domNode=mw(document.createElement("div")), this.domNode.setClassName("glyph-margin-widgets"), this.domNode.setPosition("absolute"), this.domNode.setTop(0), this._lineHeight=e.get(68), this._glyphMargin=e.get(59), this._glyphMarginLeft=t.glyphMarginLeft, this._glyphMarginWidth=t.glyphMarginWidth, this._glyphMarginDecorationLaneCount=t.glyphMarginDecorationLaneCount, this._managedDomNodes=[], this._decorationGlyphsToRender=[]
  }
  dispose(){
    this._managedDomNodes=[], this._decorationGlyphsToRender=[], this._widgets={
      
    }, super.dispose()
  }
  getWidgets(){
    return Object.values(this._widgets)
  }
  onConfigurationChanged(n){
    const e=this._context.configuration.options, t=e.get(151);
    return this._lineHeight=e.get(68), this._glyphMargin=e.get(59), this._glyphMarginLeft=t.glyphMarginLeft, this._glyphMarginWidth=t.glyphMarginWidth, this._glyphMarginDecorationLaneCount=t.glyphMarginDecorationLaneCount, !0
  }
  onDecorationsChanged(n){
    return!0
  }
  onFlushed(n){
    return!0
  }
  onLinesChanged(n){
    return!0
  }
  onLinesDeleted(n){
    return!0
  }
  onLinesInserted(n){
    return!0
  }
  onScrollChanged(n){
    return n.scrollTopChanged
  }
  onZonesChanged(n){
    return!0
  }
  addWidget(n){
    const e=mw(n.getDomNode());
    this._widgets[n.getId()]={
      widget:n,preference:n.getPosition(),domNode:e,renderInfo:null
    }, e.setPosition("absolute"), e.setDisplay("none"), e.setAttribute("widgetId", n.getId()), this.domNode.appendChild(e), this.setShouldRender()
  }
  setWidgetPosition(n, e){
    const t=this._widgets[n.getId()];
    return t.preference.lane===e.lane&&t.preference.zIndex===e.zIndex&&Zt.equalsRange(t.preference.range, e.range)?!1:(t.preference=e, this.setShouldRender(), !0)
  }
  removeWidget(n){
    const e=n.getId();
    if(this._widgets[e]){
      const i=this._widgets[e].domNode.domNode;
      delete this._widgets[e],i.remove(),this.setShouldRender()
    }
  }
  _collectDecorationBasedGlyphRenderRequest(n, e){
    const t=n.visibleRange.startLineNumber, i=n.visibleRange.endLineNumber, r=n.getDecorationsInViewport();
    for(const s of r){
      const o=s.options.glyphMarginClassName;
      if(!o)continue;
      const a=Math.max(s.range.startLineNumber,t),l=Math.min(s.range.endLineNumber,i),u=s.options.glyphMargin?.position??G$.Center,d=s.options.zIndex??0;
      for(let m=a;
      m<=l;
      m++){
        const p=this._context.viewModel.coordinatesConverter.convertViewPositionToModelPosition(new ar(m,0)),g=this._context.viewModel.glyphLanes.getLanesAtLine(p.lineNumber).indexOf(u);
        e.push(new TAh(m,g,d,o))
      }
    }
  }
  _collectWidgetBasedGlyphRenderRequest(n, e){
    const t=n.visibleRange.startLineNumber, i=n.visibleRange.endLineNumber;
    for(const r of Object.values(this._widgets)){
      const s=r.preference.range,{
        startLineNumber:o,endLineNumber:a
      }
      =this._context.viewModel.coordinatesConverter.convertModelRangeToViewRange(Zt.lift(s));
      if(!o||!a||a<t||o>i)continue;
      const l=Math.max(o,t),u=this._context.viewModel.coordinatesConverter.convertViewPositionToModelPosition(new ar(l,0)),d=this._context.viewModel.glyphLanes.getLanesAtLine(u.lineNumber).indexOf(r.preference.lane);
      e.push(new IAh(l,d,r.preference.zIndex,r))
    }
  }
  _collectSortedGlyphRenderRequests(n){
    const e=[];
    return this._collectDecorationBasedGlyphRenderRequest(n, e), this._collectWidgetBasedGlyphRenderRequest(n, e), e.sort((t, i)=>t.lineNumber===i.lineNumber?t.laneIndex===i.laneIndex?t.zIndex===i.zIndex?i.type===t.type?t.type===0&&i.type===0?t.className<i.className?-1:1:0:i.type-t.type:i.zIndex-t.zIndex:t.laneIndex-i.laneIndex:t.lineNumber-i.lineNumber), e
  }
  prepareRender(n){
    if(!this._glyphMargin){
      this._decorationGlyphsToRender=[];
      return
    }
    for(const i of Object.values(this._widgets))i.renderInfo=null;
    const e=new Ebe(this._collectSortedGlyphRenderRequests(n)), t=[];
    for(;
    e.length>0;
    ){
      const i=e.peek();
      if(!i)break;
      const r=e.takeWhile(o=>o.lineNumber===i.lineNumber&&o.laneIndex===i.laneIndex);
      if(!r||r.length===0)break;
      const s=r[0];
      if(s.type===0){
        const o=[];
        for(const a of r){
          if(a.zIndex!==s.zIndex||a.type!==s.type)break;
          (o.length===0||o[o.length-1]!==a.className)&&o.push(a.className)
        }
        t.push(s.accept(o.join(" ")))
      }
      else s.widget.renderInfo={
        lineNumber:s.lineNumber,laneIndex:s.laneIndex
      }
    }
    this._decorationGlyphsToRender=t
  }
  render(n){
    if(!this._glyphMargin){
      for(const t of Object.values(this._widgets))t.domNode.setDisplay("none");
      for(;
      this._managedDomNodes.length>0;
      )this._managedDomNodes.pop()?.domNode.remove();
      return
    }
    const e=Math.round(this._glyphMarginWidth/this._glyphMarginDecorationLaneCount);
    for(const t of Object.values(this._widgets))if(!t.renderInfo)t.domNode.setDisplay("none");
    else{
      const i=n.viewportData.relativeVerticalOffset[t.renderInfo.lineNumber-n.viewportData.startLineNumber],r=this._glyphMarginLeft+t.renderInfo.laneIndex*this._lineHeight;
      t.domNode.setDisplay("block"),t.domNode.setTop(i),t.domNode.setLeft(r),t.domNode.setWidth(e),t.domNode.setHeight(this._lineHeight)
    }
    for(let t=0;
    t<this._decorationGlyphsToRender.length;
    t++){
      const i=this._decorationGlyphsToRender[t],r=n.viewportData.relativeVerticalOffset[i.lineNumber-n.viewportData.startLineNumber],s=this._glyphMarginLeft+i.laneIndex*this._lineHeight;
      let o;
      t<this._managedDomNodes.length?o=this._managedDomNodes[t]:(o=mw(document.createElement("div")),this._managedDomNodes.push(o),this.domNode.appendChild(o)),o.setClassName("cgmr codicon "+i.combinedClassName),o.setPosition("absolute"),o.setTop(r),o.setLeft(s),o.setWidth(e),o.setHeight(this._lineHeight)
    }
    for(;
    this._managedDomNodes.length>this._decorationGlyphsToRender.length;
    )this._managedDomNodes.pop()?.domNode.remove()
  }
}, (function(n){
  n[n.Decoration=0]="Decoration", n[n.Widget=1]="Widget"
})(xAh||(xAh={
  
})), TAh=class{
  constructor(n, e, t, i){
    this.lineNumber=n, this.laneIndex=e, this.zIndex=t, this.className=i, this.type=0
  }
  accept(n){
    return new DAh(this.lineNumber, this.laneIndex, n)
  }
}, IAh=class{
  constructor(n, e, t, i){
    this.lineNumber=n, this.laneIndex=e, this.zIndex=t, this.widget=i, this.type=1
  }
}, DAh=class{
  constructor(n, e, t){
    this.lineNumber=n, this.laneIndex=e, this.combinedClassName=t
  }
}
}
}), $cA=
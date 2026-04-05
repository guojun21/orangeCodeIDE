// Module: out-build/vs/editor/browser/viewParts/viewZones/viewZones.js
// Offset: 1745971 (bundle byte offset)
// Size: 6781 bytes

sI(), _s(), j$(), tl(), g3o=()=>{
  throw new Error("Invalid change accessor")
}, gyh=class extends yW{
  constructor(n){
    super(n);
    const e=this._context.configuration.options, t=e.get(151);
    this._lineHeight=e.get(68), this._contentWidth=t.contentWidth, this._contentLeft=t.contentLeft, this.domNode=mw(document.createElement("div")), this.domNode.setClassName("view-zones"), this.domNode.setPosition("absolute"), this.domNode.setAttribute("role", "presentation"), this.domNode.setAttribute("aria-hidden", "true"), this.marginDomNode=mw(document.createElement("div")), this.marginDomNode.setClassName("margin-view-zones"), this.marginDomNode.setPosition("absolute"), this.marginDomNode.setAttribute("role", "presentation"), this.marginDomNode.setAttribute("aria-hidden", "true"), this._zones={
      
    }
  }
  dispose(){
    super.dispose(), this._zones={
      
    }
  }
  _recomputeWhitespacesProps(){
    const n=this._context.viewLayout.getWhitespaces(), e=new Map;
    for(const i of n)e.set(i.id, i);
    let t=!1;
    return this._context.viewModel.changeWhitespace(i=>{
      const r=Object.keys(this._zones);
      for(let s=0,o=r.length;
      s<o;
      s++){
        const a=r[s],l=this._zones[a],u=this._computeWhitespaceProps(l.delegate);
        l.isInHiddenArea=u.isInHiddenArea;
        const d=e.get(a);
        d&&(d.afterLineNumber!==u.afterViewLineNumber||d.height!==u.heightInPx)&&(i.changeOneWhitespace(a,u.afterViewLineNumber,u.heightInPx),this._safeCallOnComputedHeight(l.delegate,u.heightInPx),t=!0)
      }
    }), t
  }
  onConfigurationChanged(n){
    const e=this._context.configuration.options, t=e.get(151);
    return this._lineHeight=e.get(68), this._contentWidth=t.contentWidth, this._contentLeft=t.contentLeft, n.hasChanged(68)&&this._recomputeWhitespacesProps(), !0
  }
  onLineMappingChanged(n){
    return this._recomputeWhitespacesProps()
  }
  onLinesDeleted(n){
    return!0
  }
  onScrollChanged(n){
    return n.scrollTopChanged||n.scrollWidthChanged
  }
  onZonesChanged(n){
    return!0
  }
  onLinesInserted(n){
    return!0
  }
  _getZoneOrdinal(n){
    return n.ordinal??n.afterColumn??1e4
  }
  _computeWhitespaceProps(n){
    if(n.afterLineNumber===0)return{
      isInHiddenArea:!1,afterViewLineNumber:0,heightInPx:this._heightInPixels(n),minWidthInPx:this._minWidthInPixels(n)
    };
    let e;
    if(typeof n.afterColumn<"u")e=this._context.viewModel.model.validatePosition({
      lineNumber:n.afterLineNumber,column:n.afterColumn
    });
    else{
      const s=this._context.viewModel.model.validatePosition({
        lineNumber:n.afterLineNumber,column:1
      }).lineNumber;
      e=new ar(s,this._context.viewModel.model.getLineMaxColumn(s))
    }
    let t;
    e.column===this._context.viewModel.model.getLineMaxColumn(e.lineNumber)?t=this._context.viewModel.model.validatePosition({
      lineNumber:e.lineNumber+1,column:1
    }):t=this._context.viewModel.model.validatePosition({
      lineNumber:e.lineNumber,column:e.column+1
    });
    const i=this._context.viewModel.coordinatesConverter.convertModelPositionToViewPosition(e, n.afterColumnAffinity, !0), r=n.showInHiddenAreas||this._context.viewModel.coordinatesConverter.modelPositionIsVisible(t);
    return{
      isInHiddenArea:!r,showEvenWhenNotInViewport:n.showEvenWhenNotInViewport,afterViewLineNumber:i.lineNumber,heightInPx:r?this._heightInPixels(n):0,minWidthInPx:this._minWidthInPixels(n)
    }
  }
  changeViewZones(n){
    let e=!1;
    return this._context.viewModel.changeWhitespace(t=>{
      const i={
        addZone:r=>(e=!0,this._addZone(t,r)),removeZone:r=>{
          r&&(e=this._removeZone(t,r)||e)
        },layoutZone:r=>{
          r&&(e=this._layoutZone(t,r)||e)
        }
      };
      vlA(n,i),i.addZone=g3o,i.removeZone=g3o,i.layoutZone=g3o
    }), e
  }
  _addZone(n, e){
    const t=this._computeWhitespaceProps(e), r={
      whitespaceId:n.insertWhitespace(t.afterViewLineNumber,this._getZoneOrdinal(e),t.heightInPx,t.minWidthInPx),delegate:e,isInHiddenArea:t.isInHiddenArea,isVisible:!1,domNode:mw(e.domNode),marginDomNode:e.marginDomNode?mw(e.marginDomNode):null,showEvenWhenNotInViewport:e.showEvenWhenNotInViewport
    };
    return this._safeCallOnComputedHeight(r.delegate, t.heightInPx), r.domNode.setPosition("absolute"), r.domNode.domNode.style.width="100%", r.domNode.setDisplay("none"), r.domNode.setAttribute("monaco-view-zone", r.whitespaceId), this.domNode.appendChild(r.domNode), r.marginDomNode&&(r.marginDomNode.setPosition("absolute"), r.marginDomNode.domNode.style.width="100%", r.marginDomNode.setDisplay("none"), r.marginDomNode.setAttribute("monaco-view-zone", r.whitespaceId), this.marginDomNode.appendChild(r.marginDomNode)), this._zones[r.whitespaceId]=r, this.setShouldRender(), r.whitespaceId
  }
  _removeZone(n, e){
    if(this._zones.hasOwnProperty(e)){
      const t=this._zones[e];
      return delete this._zones[e],n.removeWhitespace(t.whitespaceId),t.domNode.removeAttribute("monaco-visible-view-zone"),t.domNode.removeAttribute("monaco-view-zone"),t.domNode.domNode.remove(),t.marginDomNode&&(t.marginDomNode.removeAttribute("monaco-visible-view-zone"),t.marginDomNode.removeAttribute("monaco-view-zone"),t.marginDomNode.domNode.remove()),this.setShouldRender(),!0
    }
    return!1
  }
  _layoutZone(n, e){
    if(this._zones.hasOwnProperty(e)){
      const t=this._zones[e],i=this._computeWhitespaceProps(t.delegate);
      return t.isInHiddenArea=i.isInHiddenArea,n.changeOneWhitespace(t.whitespaceId,i.afterViewLineNumber,i.heightInPx),this._safeCallOnComputedHeight(t.delegate,i.heightInPx),this.setShouldRender(),!0
    }
    return!1
  }
  shouldSuppressMouseDownOnViewZone(n){
    return this._zones.hasOwnProperty(n)?!!this._zones[n].delegate.suppressMouseDown:!1
  }
  _heightInPixels(n){
    return typeof n.heightInPx=="number"?n.heightInPx:typeof n.heightInLines=="number"?this._lineHeight*n.heightInLines:this._lineHeight
  }
  _minWidthInPixels(n){
    return typeof n.minWidthInPx=="number"?n.minWidthInPx:0
  }
  _safeCallOnComputedHeight(n, e){
    if(typeof n.onComputedHeight=="function")try{
      n.onComputedHeight(e)
    }
    catch(t){
      Gc(t)
    }
  }
  _safeCallOnDomNodeTop(n, e){
    if(typeof n.onDomNodeTop=="function")try{
      n.onDomNodeTop(e)
    }
    catch(t){
      Gc(t)
    }
  }
  prepareRender(n){
    
  }
  render(n){
    const e=n.viewportData.whitespaceViewportData, t={
      
    };
    let i=!1;
    for(const s of e){
      const o=this._zones[s.id];
      o&&(o.isInHiddenArea&&!o.showEvenWhenNotInViewport||(t[s.id]=s,i=!0))
    }
    const r=Object.keys(this._zones);
    for(let s=0, o=r.length;
    s<o;
    s++){
      const a=r[s],l=this._zones[a];
      if(!l||!t.hasOwnProperty(a)&&l.showEvenWhenNotInViewport)continue;
      let u=0,d=0,m="none";
      t.hasOwnProperty(a)?(u=t[a].verticalOffset-n.bigNumbersDelta,d=t[a].height,m="block",l.isVisible||(l.domNode.setAttribute("monaco-visible-view-zone","true"),l.isVisible=!0),this._safeCallOnDomNodeTop(l.delegate,n.getScrolledTopFromAbsoluteTop(t[a].verticalOffset))):(l.isVisible&&(l.domNode.removeAttribute("monaco-visible-view-zone"),l.isVisible=!1),this._safeCallOnDomNodeTop(l.delegate,n.getScrolledTopFromAbsoluteTop(-1e6))),l.domNode.setTop(u),l.domNode.setHeight(d),l.domNode.setDisplay(m),l.marginDomNode&&(l.marginDomNode.setTop(u),l.marginDomNode.setHeight(d),l.marginDomNode.setDisplay(m))
    }
    i&&(this.domNode.setWidth(Math.max(n.scrollWidth, this._contentWidth)), this.marginDomNode.setWidth(this._contentLeft))
  }
}
}
}), ylA=
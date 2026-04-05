// Module: out-build/vs/editor/browser/viewParts/overlayWidgets/overlayWidgets.js
// Offset: 1710697 (bundle byte offset)
// Size: 3495 bytes

ilA(), sI(), j$(), ri(), ZAh=class extends yW{
  constructor(n, e){
    super(n), this._viewDomNode=e;
    const i=this._context.configuration.options.get(151);
    this._widgets={
      
    }, this._verticalScrollbarWidth=i.verticalScrollbarWidth, this._minimapWidth=i.minimap.minimapWidth, this._horizontalScrollbarHeight=i.horizontalScrollbarHeight, this._editorHeight=i.height, this._editorWidth=i.width, this._viewDomNodeRect={
      top:0,left:0,width:0,height:0
    }, this._domNode=mw(document.createElement("div")), tve.write(this._domNode, 4), this._domNode.setClassName("overlayWidgets"), this.overflowingOverlayWidgetsDomNode=mw(document.createElement("div")), tve.write(this.overflowingOverlayWidgetsDomNode, 5), this.overflowingOverlayWidgetsDomNode.setClassName("overflowingOverlayWidgets")
  }
  dispose(){
    super.dispose(), this._widgets={
      
    }
  }
  getDomNode(){
    return this._domNode
  }
  onConfigurationChanged(n){
    const t=this._context.configuration.options.get(151);
    return this._verticalScrollbarWidth=t.verticalScrollbarWidth, this._minimapWidth=t.minimap.minimapWidth, this._horizontalScrollbarHeight=t.horizontalScrollbarHeight, this._editorHeight=t.height, this._editorWidth=t.width, !0
  }
  addWidget(n){
    const e=mw(n.getDomNode());
    this._widgets[n.getId()]={
      widget:n,preference:null,domNode:e
    }, e.setPosition("absolute"), e.setAttribute("widgetId", n.getId()), n.allowEditorOverflow?this.overflowingOverlayWidgetsDomNode.appendChild(e):this._domNode.appendChild(e), this.setShouldRender(), this._updateMaxMinWidth()
  }
  setWidgetPosition(n, e){
    const t=this._widgets[n.getId()], i=e?e.preference:null, r=e?.stackOridinal;
    return t.preference===i&&t.stack===r?(this._updateMaxMinWidth(), !1):(t.preference=i, t.stack=r, this.setShouldRender(), this._updateMaxMinWidth(), !0)
  }
  removeWidget(n){
    const e=n.getId();
    if(this._widgets.hasOwnProperty(e)){
      const i=this._widgets[e].domNode.domNode;
      delete this._widgets[e],i.remove(),this.setShouldRender(),this._updateMaxMinWidth()
    }
  }
  _updateMaxMinWidth(){
    let n=0;
    const e=Object.keys(this._widgets);
    for(let t=0, i=e.length;
    t<i;
    t++){
      const r=e[t],o=this._widgets[r].widget.getMinContentWidthInPx?.();
      typeof o<"u"&&(n=Math.max(n,o))
    }
    this._context.viewLayout.setOverlayWidgetsMinWidth(n)
  }
  _renderWidget(n, e){
    const t=n.domNode;
    if(n.preference===null){
      t.setTop("");
      return
    }
    const i=2*this._verticalScrollbarWidth+this._minimapWidth;
    if(n.preference===0||n.preference===1){
      if(n.preference===1){
        const r=t.domNode.clientHeight;
        t.setTop(this._editorHeight-r-2*this._horizontalScrollbarHeight)
      }
      else t.setTop(0);
      n.stack!==void 0?(t.setTop(e[n.preference]),e[n.preference]+=t.domNode.clientWidth):t.setRight(i)
    }
    else if(n.preference===2)t.domNode.style.right="50%", n.stack!==void 0?(t.setTop(e[2]), e[2]+=t.domNode.clientHeight):t.setTop(0);
    else if(n.preference===3)t.setTop(""), t.setBottom(this._horizontalScrollbarHeight), t.setWidth("100%");
    else{
      const{
        top:r,left:s
      }
      =n.preference;
      if(this._context.configuration.options.get(44)&&n.widget.allowEditorOverflow){
        const a=this._viewDomNodeRect;
        t.setTop(r+a.top),t.setLeft(s+a.left),t.setPosition("fixed")
      }
      else t.setTop(r),t.setLeft(s),t.setPosition("absolute")
    }
  }
  prepareRender(n){
    this._viewDomNodeRect=qS(this._viewDomNode.domNode)
  }
  render(n){
    this._domNode.setWidth(this._editorWidth);
    const e=Object.keys(this._widgets), t=Array.from({
      length:3
    }, ()=>0);
    e.sort((i, r)=>(this._widgets[i].stack||0)-(this._widgets[r].stack||0));
    for(let i=0, r=e.length;
    i<r;
    i++){
      const s=e[i];
      this._renderWidget(this._widgets[s],t)
    }
  }
}
}
}), XAh, eyh, tyh, nyh, iyh, slA=
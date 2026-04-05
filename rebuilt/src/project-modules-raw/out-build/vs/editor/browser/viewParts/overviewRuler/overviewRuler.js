// Module: out-build/vs/editor/browser/viewParts/overviewRuler/overviewRuler.js
// Offset: 1723996 (bundle byte offset)
// Size: 2599 bytes

sI(), oyh(), Gft(), ayh=class extends qVe{
  constructor(n, e){
    super(), this._context=n;
    const t=this._context.configuration.options;
    this._domNode=mw(document.createElement("canvas")), this._domNode.setClassName(e), this._domNode.setPosition("absolute"), this._domNode.setLayerHinting(!0), this._domNode.setContain("strict"), this._zoneManager=new syh(i=>this._context.viewLayout.getVerticalOffsetForLineNumber(i)), this._zoneManager.setDOMWidth(0), this._zoneManager.setDOMHeight(0), this._zoneManager.setOuterHeight(this._context.viewLayout.getScrollHeight()), this._zoneManager.setLineHeight(t.get(68)), this._zoneManager.setPixelRatio(t.get(149)), this._context.addEventHandler(this)
  }
  dispose(){
    this._context.removeEventHandler(this), super.dispose()
  }
  onConfigurationChanged(n){
    const e=this._context.configuration.options;
    return n.hasChanged(68)&&(this._zoneManager.setLineHeight(e.get(68)), this._render()), n.hasChanged(149)&&(this._zoneManager.setPixelRatio(e.get(149)), this._domNode.setWidth(this._zoneManager.getDOMWidth()), this._domNode.setHeight(this._zoneManager.getDOMHeight()), this._domNode.domNode.width=this._zoneManager.getCanvasWidth(), this._domNode.domNode.height=this._zoneManager.getCanvasHeight(), this._render()), !0
  }
  onFlushed(n){
    return this._render(), !0
  }
  onScrollChanged(n){
    return n.scrollHeightChanged&&(this._zoneManager.setOuterHeight(n.scrollHeight), this._render()), !0
  }
  onZonesChanged(n){
    return this._render(), !0
  }
  getDomNode(){
    return this._domNode.domNode
  }
  setLayout(n){
    this._domNode.setTop(n.top), this._domNode.setRight(n.right);
    let e=!1;
    e=this._zoneManager.setDOMWidth(n.width)||e, e=this._zoneManager.setDOMHeight(n.height)||e, e&&(this._domNode.setWidth(this._zoneManager.getDOMWidth()), this._domNode.setHeight(this._zoneManager.getDOMHeight()), this._domNode.domNode.width=this._zoneManager.getCanvasWidth(), this._domNode.domNode.height=this._zoneManager.getCanvasHeight(), this._render())
  }
  setZones(n){
    this._zoneManager.setZones(n), this._render()
  }
  _render(){
    if(this._zoneManager.getOuterHeight()===0)return!1;
    const n=this._zoneManager.getCanvasWidth(), e=this._zoneManager.getCanvasHeight(), t=this._zoneManager.resolveColorZones(), i=this._zoneManager.getId2Color(), r=this._domNode.domNode.getContext("2d");
    return r.clearRect(0, 0, n, e), t.length>0&&this._renderOneLane(r, t, i, n), !0
  }
  _renderOneLane(n, e, t, i){
    let r=0, s=0, o=0;
    for(const a of e){
      const l=a.colorId,u=a.from,d=a.to;
      l!==r?(n.fillRect(0,s,i,o-s),r=l,n.fillStyle=t[r],s=u,o=d):o>=u?o=Math.max(o,d):(n.fillRect(0,s,i,o-s),s=u,o=d)
    }
    n.fillRect(0, s, i, o-s)
  }
}
}
}), alA=
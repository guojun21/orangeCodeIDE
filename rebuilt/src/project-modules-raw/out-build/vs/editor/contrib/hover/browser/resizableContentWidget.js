// Module: out-build/vs/editor/contrib/hover/browser/resizableContentWidget.js
// Offset: 4223939 (bundle byte offset)
// Size: 1772 bytes

eUn(), rt(), tl(), ri(), QJh=30, jJh=24, zJh=class extends at{
  constructor(n, e=new Lu(10, 10)){
    super(), this._editor=n, this.allowEditorOverflow=!0, this.suppressMouseDown=!1, this._resizableNode=this._register(new G9t), this._contentPosition=null, this._isResizing=!1, this._resizableNode.domNode.style.position="absolute", this._resizableNode.minSize=Lu.lift(e), this._resizableNode.layout(e.height, e.width), this._resizableNode.enableSashes(!0, !0, !0, !0), this._register(this._resizableNode.onDidResize(t=>{
      this._resize(new Lu(t.dimension.width,t.dimension.height)),t.done&&(this._isResizing=!1)
    })), this._register(this._resizableNode.onDidWillResize(()=>{
      this._isResizing=!0
    }))
  }
  get isResizing(){
    return this._isResizing
  }
  getDomNode(){
    return this._resizableNode.domNode
  }
  getPosition(){
    return this._contentPosition
  }
  get position(){
    return this._contentPosition?.position?ar.lift(this._contentPosition.position):void 0
  }
  _availableVerticalSpaceAbove(n){
    const e=this._editor.getDomNode(), t=this._editor.getScrolledVisiblePosition(n);
    return!e||!t?void 0:qS(e).top+t.top-QJh
  }
  _availableVerticalSpaceBelow(n){
    const e=this._editor.getDomNode(), t=this._editor.getScrolledVisiblePosition(n);
    if(!e||!t)return;
    const i=qS(e), r=DY(e.ownerDocument.body), s=i.top+t.top+t.height;
    return r.height-s-jJh
  }
  _findPositionPreference(n, e){
    const t=Math.min(this._availableVerticalSpaceBelow(e)??1/0, n), i=Math.min(this._availableVerticalSpaceAbove(e)??1/0, n), r=Math.min(Math.max(i, t), n), s=Math.min(n, r);
    let o;
    return this._editor.getOption(62).above?o=s<=i?1:2:o=s<=t?2:1, o===1?this._resizableNode.enableSashes(!0, !0, !1, !1):this._resizableNode.enableSashes(!1, !0, !0, !1), o
  }
  _resize(n){
    this._resizableNode.layout(n.height, n.width)
  }
}
}
}), nAA=
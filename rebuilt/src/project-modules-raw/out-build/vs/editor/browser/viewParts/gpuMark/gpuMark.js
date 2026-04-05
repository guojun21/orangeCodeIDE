// Module: out-build/vs/editor/browser/viewParts/gpuMark/gpuMark.js
// Offset: 1860969 (bundle byte offset)
// Size: 1231 bytes

WVe(), JTc(), ZlA(), rwh=class CGb extends p9e{
  static{
    this.CLASS_NAME="gpu-mark"
  }
  constructor(e, t){
    super(), this._viewGpuContext=t, this._context=e, this._renderResult=null, this._context.addEventHandler(this)
  }
  dispose(){
    this._context.removeEventHandler(this), this._renderResult=null, super.dispose()
  }
  onConfigurationChanged(e){
    return!0
  }
  onCursorStateChanged(e){
    return!0
  }
  onFlushed(e){
    return!0
  }
  onLinesChanged(e){
    return!0
  }
  onLinesDeleted(e){
    return!0
  }
  onLinesInserted(e){
    return!0
  }
  onScrollChanged(e){
    return e.scrollTopChanged
  }
  onZonesChanged(e){
    return!0
  }
  onDecorationsChanged(e){
    return!0
  }
  prepareRender(e){
    const t=e.visibleRange.startLineNumber, i=e.visibleRange.endLineNumber, r=e.viewportData, s=new KOn(this._context.configuration, this._context.theme.type), o=[];
    for(let a=t;
    a<=i;
    a++){
      const l=a-t,u=this._viewGpuContext.canRenderDetailed(s,r,a);
      o[l]=u.length?`<div class="${CGb.CLASS_NAME}" title="Cannot render on GPU: ${u.join(", ")}"></div>`:""
    }
    this._renderResult=o
  }
  render(e, t){
    if(!this._renderResult)return"";
    const i=t-e;
    return i<0||i>=this._renderResult.length?"":this._renderResult[i]
  }
}
}
});
function jVe(n){
  try{
    return n()
  }
  catch(e){
    return Gc(e), null
  }
}
var _3o, swh, owh, euA=
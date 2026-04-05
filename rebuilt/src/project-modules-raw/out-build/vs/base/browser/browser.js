// Module: out-build/vs/base/browser/browser.js
// Offset: 282904 (bundle byte offset)
// Size: 1767 bytes

if(iu(), yn(), a5e=class nJb{
  constructor(){
    this.mapWindowIdToZoomLevel=new Map, this._onDidChangeZoomLevel=new Qe, this.onDidChangeZoomLevel=this._onDidChangeZoomLevel.event, this.mapWindowIdToZoomFactor=new Map, this._onDidChangeFullscreen=new Qe, this.onDidChangeFullscreen=this._onDidChangeFullscreen.event, this.mapWindowIdToFullScreen=new Map
  }
  static{
    this.INSTANCE=new nJb
  }
  getZoomLevel(e){
    return this.mapWindowIdToZoomLevel.get(this.getWindowId(e))??0
  }
  setZoomLevel(e, t){
    if(this.getZoomLevel(t)===e)return;
    const i=this.getWindowId(t);
    this.mapWindowIdToZoomLevel.set(i, e), this._onDidChangeZoomLevel.fire(i)
  }
  getZoomFactor(e){
    return this.mapWindowIdToZoomFactor.get(this.getWindowId(e))??1
  }
  setZoomFactor(e, t){
    this.mapWindowIdToZoomFactor.set(this.getWindowId(t), e)
  }
  setFullscreen(e, t){
    if(this.isFullscreen(t)===e)return;
    const i=this.getWindowId(t);
    this.mapWindowIdToFullScreen.set(i, e), this._onDidChangeFullscreen.fire(i)
  }
  isFullscreen(e){
    return!!this.mapWindowIdToFullScreen.get(this.getWindowId(e))
  }
  getWindowId(e){
    return e.vscodeWindowId
  }
}, rgt=a5e.INSTANCE.onDidChangeZoomLevel, boe=a5e.INSTANCE.onDidChangeFullscreen, sgt=navigator.userAgent, u3=sgt.indexOf("Firefox")>=0, wze=sgt.indexOf("AppleWebKit")>=0, _ze=sgt.indexOf("Chrome")>=0, kte=!_ze&&sgt.indexOf("Safari")>=0, lih=!_ze&&!kte&&wze, ptA=sgt.indexOf("Electron/")>=0, p0c=sgt.indexOf("Android")>=0, V2n=!1, typeof bi.matchMedia=="function"){
  const n=bi.matchMedia("(display-mode: standalone) or (display-mode: window-controls-overlay)"), e=bi.matchMedia("(display-mode: fullscreen)");
  V2n=n.matches, utA(bi, n, ({
    matches:t
  })=>{
    V2n&&e.matches||(V2n=t)
  })
}
}
});
function g0c(){
  return globalThis._VSCODE_NLS_MESSAGES
}
function JMo(){
  return globalThis._VSCODE_NLS_LANGUAGE
}
var uih=
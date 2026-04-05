// Module: out-build/vs/editor/common/config/editorZoom.js
// Offset: 1446685 (bundle byte offset)
// Size: 416 bytes

yn(), Ude=new class{
  constructor(){
    this._zoomLevel=0, this._onDidChangeZoomLevel=new Qe, this.onDidChangeZoomLevel=this._onDidChangeZoomLevel.event
  }
  getZoomLevel(){
    return this._zoomLevel
  }
  setZoomLevel(n){
    n=Math.min(Math.max(-5, n), 20), this._zoomLevel!==n&&(this._zoomLevel=n, this._onDidChangeZoomLevel.fire(this._zoomLevel))
  }
}
}
}), lTc, $ft, Xbe, uTc, XOo, MSe=
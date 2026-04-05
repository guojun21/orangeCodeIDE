// Module: out-build/vs/base/browser/globalPointerMoveMonitor.js
// Offset: 1467001 (bundle byte offset)
// Size: 1271 bytes

ri(), rt(), Jft=class{
  constructor(){
    this._hooks=new Ut, this._pointerMoveCallback=null, this._onStopCallback=null
  }
  dispose(){
    this.stopMonitoring(!1), this._hooks.dispose()
  }
  stopMonitoring(n, e){
    if(!this.isMonitoring())return;
    this._hooks.clear(), this._pointerMoveCallback=null;
    const t=this._onStopCallback;
    this._onStopCallback=null, n&&t&&t(e)
  }
  isMonitoring(){
    return!!this._pointerMoveCallback
  }
  startMonitoring(n, e, t, i, r){
    this.isMonitoring()&&this.stopMonitoring(!1), this._pointerMoveCallback=i, this._onStopCallback=r;
    let s=n;
    try{
      n.setPointerCapture(e),this._hooks.add($i(()=>{
        try{
          n.releasePointerCapture(e)
        }
        catch{
          
        }
      }))
    }
    catch{
      s=As(n)
    }
    this._hooks.add(ei(s, ir.POINTER_MOVE, o=>{
      if(o.buttons!==t){
        this.stopMonitoring(!0);
        return
      }
      o.preventDefault(),this._pointerMoveCallback(o)
    })), this._hooks.add(ei(s, ir.POINTER_UP, o=>this.stopMonitoring(!0)))
  }
}
}
});
function hTc(n){
  const e=qS(n);
  return new mvh(e.left, e.top, e.width, e.height)
}
function mTc(n, e, t){
  const i=e.width/n.offsetWidth, r=e.height/n.offsetHeight, s=(t.x-e.x)/i, o=(t.y-e.y)/r;
  return new pvh(s, o)
}
function scA(n){
  return n.replace(/(^[A-Z])/, ([e])=>e.toLowerCase()).replace(/([A-Z])/g, ([e])=>`-${e.toLowerCase()}`)
}
var GOn, pTc, mvh, pvh, mRe, gvh, fvh, bvh, gTc, vvh, XOt=
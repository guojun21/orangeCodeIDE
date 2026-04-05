// Module: out-build/vs/editor/browser/editorDom.js
// Offset: 1468272 (bundle byte offset)
// Size: 3818 bytes

ri(), KC(), ZOt(), h0(), vr(), rt(), Nl(), GOn=class{
  constructor(n, e){
    this.x=n, this.y=e, this._pageCoordinatesBrand=void 0
  }
  toClientCoordinates(n){
    return new pTc(this.x-n.scrollX, this.y-n.scrollY)
  }
}, pTc=class{
  constructor(n, e){
    this.clientX=n, this.clientY=e, this._clientCoordinatesBrand=void 0
  }
  toPageCoordinates(n){
    return new GOn(this.clientX+n.scrollX, this.clientY+n.scrollY)
  }
}, mvh=class{
  constructor(n, e, t, i){
    this.x=n, this.y=e, this.width=t, this.height=i, this._editorPagePositionBrand=void 0
  }
}, pvh=class{
  constructor(n, e){
    this.x=n, this.y=e, this._positionRelativeToEditorBrand=void 0
  }
}, mRe=class extends yy{
  constructor(n, e, t){
    super(As(t), n), this._editorMouseEventBrand=void 0, this.isFromPointerCapture=e, this.pos=new GOn(this.posx, this.posy), this.editorPos=hTc(t), this.relativePos=mTc(t, this.editorPos, this.pos)
  }
}, gvh=class{
  constructor(n){
    this._editorViewDomNode=n
  }
  _create(n){
    return new mRe(n, !1, this._editorViewDomNode)
  }
  onContextMenu(n, e){
    return ei(n, ir.CONTEXT_MENU, t=>{
      e(this._create(t))
    })
  }
  onMouseUp(n, e){
    return ei(n, ir.MOUSE_UP, t=>{
      e(this._create(t))
    })
  }
  onMouseDown(n, e){
    return ei(n, ir.MOUSE_DOWN, t=>{
      e(this._create(t))
    })
  }
  onPointerDown(n, e){
    return ei(n, ir.POINTER_DOWN, t=>{
      e(this._create(t),t.pointerId)
    })
  }
  onMouseLeave(n, e){
    return ei(n, ir.MOUSE_LEAVE, t=>{
      e(this._create(t))
    })
  }
  onMouseMove(n, e){
    return ei(n, ir.MOUSE_MOVE, t=>e(this._create(t)))
  }
}, fvh=class{
  constructor(n){
    this._editorViewDomNode=n
  }
  _create(n){
    return new mRe(n, !1, this._editorViewDomNode)
  }
  onPointerUp(n, e){
    return ei(n, "pointerup", t=>{
      e(this._create(t))
    })
  }
  onPointerDown(n, e){
    return ei(n, ir.POINTER_DOWN, t=>{
      e(this._create(t),t.pointerId)
    })
  }
  onPointerLeave(n, e){
    return ei(n, ir.POINTER_LEAVE, t=>{
      e(this._create(t))
    })
  }
  onPointerMove(n, e){
    return ei(n, "pointermove", t=>e(this._create(t)))
  }
}, bvh=class extends at{
  constructor(n){
    super(), this._editorViewDomNode=n, this._globalPointerMoveMonitor=this._register(new Jft), this._keydownListener=null
  }
  startMonitoring(n, e, t, i, r){
    this._keydownListener=_f(n.ownerDocument, "keydown", s=>{
      s.toKeyCodeChord().isModifierKey()||this._globalPointerMoveMonitor.stopMonitoring(!0,s.browserEvent)
    }, !0), this._globalPointerMoveMonitor.startMonitoring(n, e, t, s=>{
      i(new mRe(s,!0,this._editorViewDomNode))
    }, s=>{
      this._keydownListener.dispose(),r(s)
    })
  }
  stopMonitoring(){
    this._globalPointerMoveMonitor.stopMonitoring(!0)
  }
}, gTc=class mGb{
  static{
    this._idPool=0
  }
  constructor(e){
    this._editor=e, this._instanceId=++mGb._idPool, this._counter=0, this._rules=new Map, this._garbageCollectionScheduler=new Hu(()=>this.garbageCollect(), 1e3)
  }
  createClassNameRef(e){
    const t=this.getOrCreateRule(e);
    return t.increaseRefCount(), {
      className:t.className,dispose:()=>{
        t.decreaseRefCount(),this._garbageCollectionScheduler.schedule()
      }
    }
  }
  getOrCreateRule(e){
    const t=this.computeUniqueKey(e);
    let i=this._rules.get(t);
    if(!i){
      const r=this._counter++;
      i=new vvh(t,`dyn-rule-${this._instanceId}-${r}`,YFn(this._editor.getContainerDomNode())?this._editor.getContainerDomNode():void 0,e),this._rules.set(t,i)
    }
    return i
  }
  computeUniqueKey(e){
    return JSON.stringify(e)
  }
  garbageCollect(){
    for(const e of this._rules.values())e.hasReferences()||(this._rules.delete(e.key), e.dispose())
  }
}, vvh=class{
  constructor(n, e, t, i){
    this.key=n, this.className=e, this.properties=i, this._referenceCount=0, this._styleElementDisposables=new Ut, this._styleElement=wC(t, void 0, this._styleElementDisposables), this._styleElement.textContent=this.getCssText(this.className, this.properties)
  }
  getCssText(n, e){
    let t=`.${n} {`;
    for(const i in e){
      const r=e[i];
      let s;
      typeof r=="object"?s=zo(r.id):s=r;
      const o=scA(i);
      t+=`
	${o}: ${s};`
    }
    return t+=`
}`, t
  }
  dispose(){
    this._styleElementDisposables.dispose(), this._styleElement=void 0
  }
  increaseRefCount(){
    this._referenceCount++
  }
  decreaseRefCount(){
    this._referenceCount--
  }
  hasReferences(){
    return this._referenceCount>0
  }
}
}
}), qVe, Gft=
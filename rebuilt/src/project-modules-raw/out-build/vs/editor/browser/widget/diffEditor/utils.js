// Module: out-build/vs/editor/browser/widget/diffEditor/utils.js
// Offset: 2133601 (bundle byte offset)
// Size: 3234 bytes

GD(), Po(), rt(), Uc(), Ybh(), tl(), ts(), Kbe(), wDc=class extends at{
  get width(){
    return this._width
  }
  get height(){
    return this._height
  }
  get automaticLayout(){
    return this._automaticLayout
  }
  constructor(n, e){
    super(), this._automaticLayout=!1, this.elementSizeObserver=this._register(new cTc(n, e)), this._width=Ua(this, this.elementSizeObserver.getWidth()), this._height=Ua(this, this.elementSizeObserver.getHeight()), this._register(this.elementSizeObserver.onDidChange(t=>pp(i=>{
      this._width.set(this.elementSizeObserver.getWidth(),i),this._height.set(this.elementSizeObserver.getHeight(),i)
    })))
  }
  observe(n){
    this.elementSizeObserver.observe(n)
  }
  setAutomaticLayout(n){
    this._automaticLayout=n, n?this.elementSizeObserver.startObserving():this.elementSizeObserver.stopObserving()
  }
}, i5o=class extends at{
  constructor(n, e, t){
    super(), this._register(new T0h(n, t)), this._register(aKe(t, {
      height:e.actualHeight,top:e.actualTop
    }))
  }
}, dbt=class{
  get afterLineNumber(){
    return this._afterLineNumber.get()
  }
  constructor(n, e){
    this._afterLineNumber=n, this.heightInPx=e, this.domNode=document.createElement("div"), this._actualTop=Ua(this, void 0), this._actualHeight=Ua(this, void 0), this.actualTop=this._actualTop, this.actualHeight=this._actualHeight, this.showInHiddenAreas=!0, this.onChange=this._afterLineNumber, this.onDomNodeTop=t=>{
      this._actualTop.set(t,void 0)
    }, this.onComputedHeight=t=>{
      this._actualHeight.set(t,void 0)
    }
  }
}, T0h=class TGb{
  static{
    this._counter=0
  }
  constructor(e, t){
    this._editor=e, this._domElement=t, this._overlayWidgetId=`managedOverlayWidget-${TGb._counter++}`, this._overlayWidget={
      getId:()=>this._overlayWidgetId,getDomNode:()=>this._domElement,getPosition:()=>null
    }, this._editor.addOverlayWidget(this._overlayWidget)
  }
  dispose(){
    this._editor.removeOverlayWidget(this._overlayWidget)
  }
}, I0h=class extends Wc{
  dispose(){
    super.dispose(!0)
  }
}, hbt=class{
  static create(n, e=void 0){
    return new r5o(n, n, e)
  }
  static createWithDisposable(n, e, t=void 0){
    const i=new Ut;
    return i.add(e), i.add(n), new r5o(n, i, t)
  }
  static createOfNonDisposable(n, e, t=void 0){
    return new r5o(n, e, t)
  }
  [Symbol.dispose](){
    this.dispose()
  }
}, r5o=class extends hbt{
  constructor(n, e, t){
    super(), this.object=n, this._disposable=e, this._debugOwner=t, this._refCount=1, this._isDisposed=!1, this._owners=[], t&&this._addOwner(t)
  }
  _addOwner(n){
    n&&this._owners.push(n)
  }
  createNewRef(n){
    return this._refCount++, n&&this._addOwner(n), new D0h(this, n)
  }
  dispose(){
    this._isDisposed||(this._isDisposed=!0, this._decreaseRefCount(this._debugOwner))
  }
  _decreaseRefCount(n){
    if(this._refCount--, this._refCount===0&&this._disposable.dispose(), n){
      const e=this._owners.indexOf(n);
      e!==-1&&this._owners.splice(e,1)
    }
  }
}, D0h=class extends hbt{
  constructor(n, e){
    super(), this._base=n, this._debugOwner=e, this._isDisposed=!1
  }
  get object(){
    return this._base.object
  }
  createNewRef(n){
    return this._base.createNewRef(n)
  }
  dispose(){
    this._isDisposed||(this._isDisposed=!0, this._base._decreaseRefCount(this._debugOwner))
  }
}
}
});
function s5o(n, e){
  if(n.lineNumber===e.lineNumber&&n.column===Number.MAX_SAFE_INTEGER)return Zt.fromPositions(e, e);
  if(!n.isBeforeOrEqual(e))throw new _m("start must be before end");
  return new Zt(n.lineNumber, n.column, e.lineNumber, e.column)
}
var Fte, cI, o5o, B0h, y3n, cKe, EW=
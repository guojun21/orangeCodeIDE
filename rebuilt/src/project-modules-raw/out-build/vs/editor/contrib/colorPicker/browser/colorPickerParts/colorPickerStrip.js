// Module: out-build/vs/editor/contrib/colorPicker/browser/colorPickerParts/colorPickerStrip.js
// Offset: 24730242 (bundle byte offset)
// Size: 2168 bytes

_et(), ri(), ZOt(), xf(), yn(), rt(), _un=Ct, AGl=class extends at{
  constructor(n, e, t){
    super(), this.model=e, this._onDidChange=new Qe, this.onDidChange=this._onDidChange.event, this._onColorFlushed=new Qe, this.onColorFlushed=this._onColorFlushed.event, t==="standalone"?(this.domNode=Rt(n, _un(".standalone-strip")), this.overlay=Rt(this.domNode, _un(".standalone-overlay"))):(this.domNode=Rt(n, _un(".strip")), this.overlay=Rt(this.domNode, _un(".overlay"))), this.slider=Rt(this.domNode, _un(".slider")), this.slider.style.top="0px", this._register(ei(this.domNode, ir.POINTER_DOWN, i=>this.onPointerDown(i))), this._register(e.onDidChangeColor(this.onDidChangeColor, this)), this.layout()
  }
  layout(){
    this.height=this.domNode.offsetHeight-this.slider.offsetHeight;
    const n=this.getValue(this.model.color);
    this.updateSliderPosition(n)
  }
  onDidChangeColor(n){
    const e=this.getValue(n);
    this.updateSliderPosition(e)
  }
  onPointerDown(n){
    if(!n.target||!(n.target instanceof Element))return;
    const e=this._register(new Jft), t=qS(this.domNode);
    this.domNode.classList.add("grabbing"), n.target!==this.slider&&this.onDidChangeTop(n.offsetY), e.startMonitoring(n.target, n.pointerId, n.buttons, r=>this.onDidChangeTop(r.pageY-t.top), ()=>null);
    const i=ei(n.target.ownerDocument, ir.POINTER_UP, ()=>{
      this._onColorFlushed.fire(),i.dispose(),e.stopMonitoring(!0),this.domNode.classList.remove("grabbing")
    }, !0)
  }
  onDidChangeTop(n){
    const e=Math.max(0, Math.min(1, 1-n/this.height));
    this.updateSliderPosition(e), this._onDidChange.fire(e)
  }
  updateSliderPosition(n){
    this.slider.style.top=`${(1-n)*this.height}px`
  }
}, Jmg=class extends AGl{
  constructor(n, e, t){
    super(n, e, t), this.domNode.classList.add("opacity-strip"), this.onDidChangeColor(this.model.color)
  }
  onDidChangeColor(n){
    super.onDidChangeColor(n);
    const{
      r:e,g:t,b:i
    }
    =n.rgba, r=new Xr(new Sa(e, t, i, 1)), s=new Xr(new Sa(e, t, i, 0));
    this.overlay.style.background=`linear-gradient(to bottom, ${r} 0%, ${s} 100%)`
  }
  getValue(n){
    return n.hsva.a
  }
}, Gmg=class extends AGl{
  constructor(n, e, t){
    super(n, e, t), this.domNode.classList.add("hue-strip")
  }
  getValue(n){
    return 1-n.hsva.h/360
  }
}
}
}), Wmg, Qmg, X_A=
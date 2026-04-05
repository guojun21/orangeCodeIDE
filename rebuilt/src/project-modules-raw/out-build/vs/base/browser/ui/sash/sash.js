// Module: out-build/vs/base/browser/ui/sash/sash.js
// Offset: 2255070 (bundle byte offset)
// Size: 8690 bytes

ri(), KC(), z$(), Dx(), vr(), U0(), yn(), rt(), _r(), YdA(), ECh=!1, (function(n){
  n.North="north", n.South="south", n.East="east", n.West="west"
})(x5o||(x5o={
  
})), (function(n){
  n[n.VERTICAL=0]="VERTICAL", n[n.HORIZONTAL=1]="HORIZONTAL"
})(xCh||(xCh={
  
})), (function(n){
  n[n.Disabled=0]="Disabled", n[n.AtMinimum=1]="AtMinimum", n[n.AtMaximum=2]="AtMaximum", n[n.Enabled=3]="Enabled"
})(TCh||(TCh={
  
})), JDc=4, GDc=new Qe, WDc=300, QDc=new Qe, T5o=class{
  constructor(n){
    this.el=n, this.disposables=new Ut
  }
  get onPointerMove(){
    return this.disposables.add(new Hg(As(this.el), "mousemove")).event
  }
  get onPointerUp(){
    return this.disposables.add(new Hg(As(this.el), "mouseup")).event
  }
  dispose(){
    this.disposables.dispose()
  }
}, __decorate([cl], T5o.prototype, "onPointerMove", null), __decorate([cl], T5o.prototype, "onPointerUp", null), I5o=class{
  get onPointerMove(){
    return this.disposables.add(new Hg(this.el, MA.Change)).event
  }
  get onPointerUp(){
    return this.disposables.add(new Hg(this.el, MA.End)).event
  }
  constructor(n){
    this.el=n, this.disposables=new Ut
  }
  dispose(){
    this.disposables.dispose()
  }
}, __decorate([cl], I5o.prototype, "onPointerMove", null), __decorate([cl], I5o.prototype, "onPointerUp", null), I3n=class{
  get onPointerMove(){
    return this.factory.onPointerMove
  }
  get onPointerUp(){
    return this.factory.onPointerUp
  }
  constructor(n){
    this.factory=n
  }
  dispose(){
    
  }
}, __decorate([cl], I3n.prototype, "onPointerMove", null), __decorate([cl], I3n.prototype, "onPointerUp", null), D3n="pointer-events-disabled", Qde=class GFe extends at{
  get state(){
    return this._state
  }
  get orthogonalStartSash(){
    return this._orthogonalStartSash
  }
  get orthogonalEndSash(){
    return this._orthogonalEndSash
  }
  set state(e){
    this._state!==e&&(this.el.classList.toggle("disabled", e===0), this.el.classList.toggle("minimum", e===1), this.el.classList.toggle("maximum", e===2), this._state=e, this.onDidEnablementChange.fire(e))
  }
  set orthogonalStartSash(e){
    if(this._orthogonalStartSash!==e){
      if(this.orthogonalStartDragHandleDisposables.clear(),this.orthogonalStartSashDisposables.clear(),e){
        const t=i=>{
          this.orthogonalStartDragHandleDisposables.clear(),i!==0&&(this._orthogonalStartDragHandle=Rt(this.el,Ct(".orthogonal-drag-handle.start")),this.orthogonalStartDragHandleDisposables.add($i(()=>this._orthogonalStartDragHandle.remove())),this.orthogonalStartDragHandleDisposables.add(new Hg(this._orthogonalStartDragHandle,"mouseenter")).event(()=>GFe.onMouseEnter(e),void 0,this.orthogonalStartDragHandleDisposables),this.orthogonalStartDragHandleDisposables.add(new Hg(this._orthogonalStartDragHandle,"mouseleave")).event(()=>GFe.onMouseLeave(e),void 0,this.orthogonalStartDragHandleDisposables))
        };
        this.orthogonalStartSashDisposables.add(e.onDidEnablementChange.event(t,this)),t(e.state)
      }
      this._orthogonalStartSash=e
    }
  }
  set orthogonalEndSash(e){
    if(this._orthogonalEndSash!==e){
      if(this.orthogonalEndDragHandleDisposables.clear(),this.orthogonalEndSashDisposables.clear(),e){
        const t=i=>{
          this.orthogonalEndDragHandleDisposables.clear(),i!==0&&(this._orthogonalEndDragHandle=Rt(this.el,Ct(".orthogonal-drag-handle.end")),this.orthogonalEndDragHandleDisposables.add($i(()=>this._orthogonalEndDragHandle.remove())),this.orthogonalEndDragHandleDisposables.add(new Hg(this._orthogonalEndDragHandle,"mouseenter")).event(()=>GFe.onMouseEnter(e),void 0,this.orthogonalEndDragHandleDisposables),this.orthogonalEndDragHandleDisposables.add(new Hg(this._orthogonalEndDragHandle,"mouseleave")).event(()=>GFe.onMouseLeave(e),void 0,this.orthogonalEndDragHandleDisposables))
        };
        this.orthogonalEndSashDisposables.add(e.onDidEnablementChange.event(t,this)),t(e.state)
      }
      this._orthogonalEndSash=e
    }
  }
  constructor(e, t, i){
    super(), this.hoverDelay=WDc, this.hoverDelayer=this._register(new Nv(this.hoverDelay)), this._state=3, this.onDidEnablementChange=this._register(new Qe), this._onDidStart=this._register(new Qe), this._onDidChange=this._register(new Qe), this._onDidReset=this._register(new Qe), this._onDidEnd=this._register(new Qe), this.orthogonalStartSashDisposables=this._register(new Ut), this.orthogonalStartDragHandleDisposables=this._register(new Ut), this.orthogonalEndSashDisposables=this._register(new Ut), this.orthogonalEndDragHandleDisposables=this._register(new Ut), this.onDidStart=this._onDidStart.event, this.onDidChange=this._onDidChange.event, this.onDidReset=this._onDidReset.event, this.onDidEnd=this._onDidEnd.event, this.linkedSash=void 0, this.el=Rt(e, Ct(".monaco-sash")), i.orthogonalEdge&&this.el.classList.add(`orthogonal-edge-${i.orthogonalEdge}`), Fs&&this.el.classList.add("mac");
    const r=this._register(new Hg(this.el, "mousedown")).event;
    this._register(r(m=>this.onPointerStart(m, new T5o(e)), this));
    const s=this._register(new Hg(this.el, "dblclick")).event;
    this._register(s(this.onPointerDoublePress, this));
    const o=this._register(new Hg(this.el, "mouseenter")).event;
    this._register(o(()=>GFe.onMouseEnter(this)));
    const a=this._register(new Hg(this.el, "mouseleave")).event;
    this._register(a(()=>GFe.onMouseLeave(this))), this._register(E1.addTarget(this.el));
    const l=this._register(new Hg(this.el, MA.Start)).event;
    this._register(l(m=>this.onPointerStart(m, new I5o(this.el)), this));
    const u=this._register(new Hg(this.el, MA.Tap)).event;
    let d;
    this._register(u(m=>{
      if(d){
        clearTimeout(d),d=void 0,this.onPointerDoublePress(m);
        return
      }
      clearTimeout(d),d=setTimeout(()=>d=void 0,250)
    }, this)), typeof i.size=="number"?(this.size=i.size, i.orientation===0?this.el.style.width=`${this.size}px`:this.el.style.height=`${this.size}px`):(this.size=JDc, this._register(GDc.event(m=>{
      this.size=m,this.layout()
    }))), this._register(QDc.event(m=>this.hoverDelay=m)), this.layoutProvider=t, this.orthogonalStartSash=i.orthogonalStartSash, this.orthogonalEndSash=i.orthogonalEndSash, this.orientation=i.orientation||0, this.orientation===1?(this.el.classList.add("horizontal"), this.el.classList.remove("vertical")):(this.el.classList.remove("horizontal"), this.el.classList.add("vertical")), this.el.classList.toggle("debug", ECh), this.layout()
  }
  onPointerStart(e, t){
    zu.stop(e);
    let i=!1;
    if(!e.__orthogonalSashEvent){
      const A=this.getOrthogonalSash(e);
      A&&(i=!0,e.__orthogonalSashEvent=!0,A.onPointerStart(e,new I3n(t)))
    }
    if(this.linkedSash&&!e.__linkedSashEvent&&(e.__linkedSashEvent=!0, this.linkedSash.onPointerStart(e, new I3n(t))), !this.state)return;
    const r=this.el.ownerDocument.getElementsByTagName("iframe");
    for(const A of r)A.classList.add(D3n);
    const s=this.el.ownerDocument.getElementsByTagName("webview");
    for(const A of s)A.classList.add(D3n);
    const o=e.pageX, a=e.pageY, l=e.altKey, u={
      startX:o,currentX:o,startY:a,currentY:a,altKey:l
    };
    this.el.classList.add("active"), this._onDidStart.fire(u);
    const d=wC(this.el), m=()=>{
      let A="";
      i?A="all-scroll":this.orientation===1?this.state===1?A="s-resize":this.state===2?A="n-resize":A=Fs?"row-resize":"ns-resize":this.state===1?A="e-resize":this.state===2?A="w-resize":A=Fs?"col-resize":"ew-resize",d.textContent=`* { cursor: ${A} !important; }`
    }, p=new Ut;
    m(), i||this.onDidEnablementChange.event(m, null, p);
    const g=A=>{
      zu.stop(A,!1);
      const w={
        startX:o,currentX:A.pageX,startY:a,currentY:A.pageY,altKey:l
      };
      this._onDidChange.fire(w)
    }, f=A=>{
      zu.stop(A,!1),d.remove(),this.el.classList.remove("active"),this._onDidEnd.fire(),p.dispose();
      for(const w of r)w.classList.remove(D3n);
      for(const w of s)w.classList.remove(D3n)
    };
    t.onPointerMove(g, null, p), t.onPointerUp(f, null, p), p.add(t)
  }
  onPointerDoublePress(e){
    const t=this.getOrthogonalSash(e);
    t&&t._onDidReset.fire(), this.linkedSash&&this.linkedSash._onDidReset.fire(), this._onDidReset.fire()
  }
  static onMouseEnter(e, t=!1){
    e.el.classList.contains("active")?(e.hoverDelayer.cancel(), e.el.classList.add("hover")):e.hoverDelayer.trigger(()=>e.el.classList.add("hover"), e.hoverDelay).then(void 0, ()=>{
      
    }), !t&&e.linkedSash&&GFe.onMouseEnter(e.linkedSash, !0)
  }
  static onMouseLeave(e, t=!1){
    e.hoverDelayer.cancel(), e.el.classList.remove("hover"), !t&&e.linkedSash&&GFe.onMouseLeave(e.linkedSash, !0)
  }
  clearSashHoverState(){
    GFe.onMouseLeave(this)
  }
  layout(){
    if(this.orientation===0){
      const e=this.layoutProvider,t=e.getVerticalSashLeft(this)-this.size/2,i=e.getVerticalSashTop?.(this)??0;
      this.el.style.transform=`translate3d(${t}px, ${i}px, 0)`,e.getVerticalSashHeight&&(this.el.style.height=e.getVerticalSashHeight(this)+"px")
    }
    else{
      const e=this.layoutProvider,t=e.getHorizontalSashTop(this)-this.size/2,i=e.getHorizontalSashLeft?.(this)??0;
      this.el.style.transform=`translate3d(${i}px, ${t}px, 0)`,e.getHorizontalSashWidth&&(this.el.style.width=e.getHorizontalSashWidth(this)+"px")
    }
  }
  getOrthogonalSash(e){
    const t=e.initialTarget??e.target;
    if(!(!t||!wf(t))&&t.classList.contains("orthogonal-drag-handle"))return t.classList.contains("start")?this.orthogonalStartSash:this.orthogonalEndSash
  }
  dispose(){
    super.dispose(), this.el.remove()
  }
}
}
}), ICh, jDc, DCh=
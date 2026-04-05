// Module: out-build/vs/base/browser/touch.js
// Offset: 1527197 (bundle byte offset)
// Size: 5082 bytes

ri(), iu(), U0(), yn(), rt(), l2(), (function(n){
  n.Tap="-monaco-gesturetap", n.Change="-monaco-gesturechange", n.Start="-monaco-gesturestart", n.End="-monaco-gesturesend", n.Contextmenu="-monaco-gesturecontextmenu"
})(MA||(MA={
  
})), E1=class nee extends at{
  static{
    this.SCROLL_FRICTION=-.005
  }
  static{
    this.HOLD_DELAY=700
  }
  static{
    this.CLEAR_TAP_COUNT_TIME=400
  }
  constructor(){
    super(), this.dispatched=!1, this.targets=new WD, this.ignoreTargets=new WD, this.activeTouches={
      
    }, this.handle=null, this._lastSetTapCountTime=0, this._register(In.runAndSubscribe(ez, ({
      window:e,disposables:t
    })=>{
      t.add(ei(e.document,"touchstart",i=>this.onTouchStart(i),{
        passive:!1
      })),t.add(ei(e.document,"touchend",i=>this.onTouchEnd(e,i))),t.add(ei(e.document,"touchmove",i=>this.onTouchMove(i),{
        passive:!1
      }))
    }, {
      window:bi,disposables:this._store
    }))
  }
  static addTarget(e){
    if(!nee.isTouchDevice())return at.None;
    nee.INSTANCE||(nee.INSTANCE=Cte(new nee));
    const t=nee.INSTANCE.targets.push(e);
    return $i(t)
  }
  static ignoreTarget(e){
    if(!nee.isTouchDevice())return at.None;
    nee.INSTANCE||(nee.INSTANCE=Cte(new nee));
    const t=nee.INSTANCE.ignoreTargets.push(e);
    return $i(t)
  }
  static isTouchDevice(){
    return"ontouchstart"in bi||navigator.maxTouchPoints>0
  }
  dispose(){
    this.handle&&(this.handle.dispose(), this.handle=null), super.dispose()
  }
  onTouchStart(e){
    const t=Date.now();
    this.handle&&(this.handle.dispose(), this.handle=null);
    for(let i=0, r=e.targetTouches.length;
    i<r;
    i++){
      const s=e.targetTouches.item(i);
      this.activeTouches[s.identifier]={
        id:s.identifier,initialTarget:s.target,initialTimeStamp:t,initialPageX:s.pageX,initialPageY:s.pageY,rollingTimestamps:[t],rollingPageX:[s.pageX],rollingPageY:[s.pageY]
      };
      const o=this.newGestureEvent(MA.Start,s.target);
      o.pageX=s.pageX,o.pageY=s.pageY,this.dispatchEvent(o)
    }
    this.dispatched&&(e.preventDefault(), e.stopPropagation(), this.dispatched=!1)
  }
  onTouchEnd(e, t){
    const i=Date.now(), r=Object.keys(this.activeTouches).length;
    for(let s=0, o=t.changedTouches.length;
    s<o;
    s++){
      const a=t.changedTouches.item(s);
      if(!this.activeTouches.hasOwnProperty(String(a.identifier))){
        console.warn("move of an UNKNOWN touch",a);
        continue
      }
      const l=this.activeTouches[a.identifier],u=Date.now()-l.initialTimeStamp;
      if(u<nee.HOLD_DELAY&&Math.abs(l.initialPageX-l.rollingPageX.at(-1))<30&&Math.abs(l.initialPageY-l.rollingPageY.at(-1))<30){
        const d=this.newGestureEvent(MA.Tap,l.initialTarget);
        d.pageX=l.rollingPageX.at(-1),d.pageY=l.rollingPageY.at(-1),this.dispatchEvent(d)
      }
      else if(u>=nee.HOLD_DELAY&&Math.abs(l.initialPageX-l.rollingPageX.at(-1))<30&&Math.abs(l.initialPageY-l.rollingPageY.at(-1))<30){
        const d=this.newGestureEvent(MA.Contextmenu,l.initialTarget);
        d.pageX=l.rollingPageX.at(-1),d.pageY=l.rollingPageY.at(-1),this.dispatchEvent(d)
      }
      else if(r===1){
        const d=l.rollingPageX.at(-1),m=l.rollingPageY.at(-1),p=l.rollingTimestamps.at(-1)-l.rollingTimestamps[0],g=d-l.rollingPageX[0],f=m-l.rollingPageY[0],A=[...this.targets].filter(w=>l.initialTarget instanceof Node&&w.contains(l.initialTarget));
        this.inertia(e,A,i,Math.abs(g)/p,g>0?1:-1,d,Math.abs(f)/p,f>0?1:-1,m)
      }
      this.dispatchEvent(this.newGestureEvent(MA.End,l.initialTarget)),delete this.activeTouches[a.identifier]
    }
    this.dispatched&&(t.preventDefault(), t.stopPropagation(), this.dispatched=!1)
  }
  newGestureEvent(e, t){
    const i=document.createEvent("CustomEvent");
    return i.initEvent(e, !1, !0), i.initialTarget=t, i.tapCount=0, i
  }
  dispatchEvent(e){
    if(e.type===MA.Tap){
      const t=new Date().getTime();
      let i=0;
      t-this._lastSetTapCountTime>nee.CLEAR_TAP_COUNT_TIME?i=1:i=2,this._lastSetTapCountTime=t,e.tapCount=i
    }
    else(e.type===MA.Change||e.type===MA.Contextmenu)&&(this._lastSetTapCountTime=0);
    if(e.initialTarget instanceof Node){
      for(const i of this.ignoreTargets)if(i.contains(e.initialTarget))return;
      const t=[];
      for(const i of this.targets)if(i.contains(e.initialTarget)){
        let r=0,s=e.initialTarget;
        for(;
        s&&s!==i;
        )r++,s=s.parentElement;
        t.push([r,i])
      }
      t.sort((i,r)=>i[0]-r[0]);
      for(const[i,r]of t)r.dispatchEvent(e),this.dispatched=!0
    }
  }
  inertia(e, t, i, r, s, o, a, l, u){
    this.handle=r_(e, ()=>{
      const d=Date.now(),m=d-i;
      let p=0,g=0,f=!0;
      r+=nee.SCROLL_FRICTION*m,a+=nee.SCROLL_FRICTION*m,r>0&&(f=!1,p=s*r*m),a>0&&(f=!1,g=l*a*m);
      const A=this.newGestureEvent(MA.Change);
      A.translationX=p,A.translationY=g,t.forEach(w=>w.dispatchEvent(A)),f||this.inertia(e,t,d,r,s,o+p,a,l,u+g)
    })
  }
  onTouchMove(e){
    const t=Date.now();
    for(let i=0, r=e.changedTouches.length;
    i<r;
    i++){
      const s=e.changedTouches.item(i);
      if(!this.activeTouches.hasOwnProperty(String(s.identifier))){
        console.warn("end of an UNKNOWN touch",s);
        continue
      }
      const o=this.activeTouches[s.identifier],a=this.newGestureEvent(MA.Change,o.initialTarget);
      a.translationX=s.pageX-o.rollingPageX.at(-1),a.translationY=s.pageY-o.rollingPageY.at(-1),a.pageX=s.pageX,a.pageY=s.pageY,this.dispatchEvent(a),o.rollingPageX.length>3&&(o.rollingPageX.shift(),o.rollingPageY.shift(),o.rollingTimestamps.shift()),o.rollingPageX.push(s.pageX),o.rollingPageY.push(s.pageY),o.rollingTimestamps.push(t)
    }
    this.dispatched&&(e.preventDefault(), e.stopPropagation(), this.dispatched=!1)
  }
}, __decorate([cl], E1, "isTouchDevice", null)
}
}), HR, $4=
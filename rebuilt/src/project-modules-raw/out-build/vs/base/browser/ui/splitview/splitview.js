// Module: out-build/vs/base/browser/ui/splitview/splitview.js
// Offset: 24770755 (bundle byte offset)
// Size: 17969 bytes

ri(), z$(), jSe(), zI(), Vs(), xf(), yn(), rt(), sE(), NSe(), Js(), f0A(), jSe(), ypg={
  separatorBorder:Xr.transparent
}, fca=0, (function(n){
  n[n.Normal=0]="Normal", n[n.Low=1]="Low", n[n.High=2]="High"
})(wpg||(wpg={
  
})), BGl=class{
  set size(n){
    this._size=n
  }
  get size(){
    return this._size
  }
  get cachedVisibleSize(){
    return this._cachedVisibleSize
  }
  get visible(){
    return typeof this._cachedVisibleSize>"u"
  }
  setVisible(n, e){
    if(n!==this.visible){
      n?(this.size=zA(this._cachedVisibleSize,this.viewMinimumSize,this.viewMaximumSize),this._cachedVisibleSize=void 0):(this._cachedVisibleSize=typeof e=="number"?e:this.size,this.size=0),this.container.classList.toggle("visible",n);
      try{
        this.view.setVisible?.(n)
      }
      catch(t){
        console.error("Splitview: Failed to set visible view"),console.error(t)
      }
    }
  }
  get minimumSize(){
    return this.visible?this.view.minimumSize:0
  }
  get viewMinimumSize(){
    return this.view.minimumSize
  }
  get maximumSize(){
    return this.visible?this.view.maximumSize:0
  }
  get viewMaximumSize(){
    return this.view.maximumSize
  }
  get priority(){
    return this.view.priority
  }
  get proportionalLayout(){
    return this.view.proportionalLayout??!0
  }
  get snap(){
    return!!this.view.snap
  }
  set enabled(n){
    this.container.style.pointerEvents=n?"":"none"
  }
  constructor(n, e, t, i){
    this.container=n, this.view=e, this.disposable=i, this._cachedVisibleSize=void 0, typeof t=="number"?(this._size=t, this._cachedVisibleSize=void 0, n.classList.add("visible")):(this._size=0, this._cachedVisibleSize=t.cachedVisibleSize)
  }
  layout(n, e){
    this.layoutContainer(n);
    try{
      this.view.layout(this.size,n,e)
    }
    catch(t){
      console.error("Splitview: Failed to layout view"),console.error(t)
    }
  }
  dispose(){
    this.disposable.dispose()
  }
}, _pg=class extends BGl{
  layoutContainer(n){
    this.container.style.top=`${n}px`, this.container.style.height=`${this.size}px`
  }
}, Cpg=class extends BGl{
  layoutContainer(n){
    this.container.style.left=`${n}px`, this.container.style.width=`${this.size}px`
  }
}, (function(n){
  n[n.Idle=0]="Idle", n[n.Busy=1]="Busy"
})(Zz||(Zz={
  
})), (function(n){
  n.Distribute={
    type:"distribute"
  };
  function e(r){
    return{
      type:"split",index:r
    }
  }
  n.Split=e;
  function t(r){
    return{
      type:"auto",index:r
    }
  }
  n.Auto=t;
  function i(r){
    return{
      type:"invisible",cachedVisibleSize:r
    }
  }
  n.Invisible=i
})(tP||(tP={
  
})), Xz=class extends at{
  get contentSize(){
    return this._contentSize
  }
  get length(){
    return this.viewItems.length
  }
  get minimumSize(){
    return this.viewItems.reduce((n, e)=>n+e.minimumSize, 0)
  }
  get maximumSize(){
    return this.length===0?Number.POSITIVE_INFINITY:this.viewItems.reduce((n, e)=>n+e.maximumSize, 0)
  }
  get orthogonalStartSash(){
    return this._orthogonalStartSash
  }
  get orthogonalEndSash(){
    return this._orthogonalEndSash
  }
  get startSnappingEnabled(){
    return this._startSnappingEnabled
  }
  get endSnappingEnabled(){
    return this._endSnappingEnabled
  }
  set orthogonalStartSash(n){
    for(const e of this.sashItems)e.sash.orthogonalStartSash=n;
    this._orthogonalStartSash=n
  }
  set orthogonalEndSash(n){
    for(const e of this.sashItems)e.sash.orthogonalEndSash=n;
    this._orthogonalEndSash=n
  }
  get sashes(){
    return this.sashItems.map(n=>n.sash)
  }
  set startSnappingEnabled(n){
    this._startSnappingEnabled!==n&&(this._startSnappingEnabled=n, this.updateSashEnablement())
  }
  set endSnappingEnabled(n){
    this._endSnappingEnabled!==n&&(this._endSnappingEnabled=n, this.updateSashEnablement())
  }
  constructor(n, e={
    
  }){
    super(), this.size=0, this._contentSize=0, this.proportions=void 0, this.viewItems=[], this.sashItems=[], this.state=Zz.Idle, this._onDidSashChange=this._register(new Qe), this._onDidSashReset=this._register(new Qe), this._startSnappingEnabled=!0, this._endSnappingEnabled=!0, this.onDidSashChange=this._onDidSashChange.event, this.onDidSashReset=this._onDidSashReset.event, this.orientation=e.orientation??0, this.inverseAltBehavior=e.inverseAltBehavior??!1, this.proportionalLayout=e.proportionalLayout??!0, this.getSashOrthogonalSize=e.getSashOrthogonalSize, this.el=document.createElement("div"), this.el.classList.add("monaco-split-view2"), this.el.classList.add(this.orientation===0?"vertical":"horizontal"), n.appendChild(this.el), this.sashContainer=Rt(this.el, Ct(".sash-container")), this.viewContainer=Ct(".split-view-container"), this.scrollable=this._register(new Fde({
      forceIntegerValues:!0,smoothScrollDuration:125,scheduleAtNextAnimationFrame:i=>r_(As(this.el),i)
    })), this.scrollableElement=this._register(new Yft(this.viewContainer, {
      vertical:this.orientation===0?e.scrollbarVisibility??1:2,horizontal:this.orientation===1?e.scrollbarVisibility??1:2
    }, this.scrollable));
    const t=this._register(new Hg(this.viewContainer, "scroll")).event;
    this._register(t(i=>{
      const r=this.scrollableElement.getScrollPosition(),s=Math.abs(this.viewContainer.scrollLeft-r.scrollLeft)<=1?void 0:this.viewContainer.scrollLeft,o=Math.abs(this.viewContainer.scrollTop-r.scrollTop)<=1?void 0:this.viewContainer.scrollTop;
      (s!==void 0||o!==void 0)&&this.scrollableElement.setScrollPosition({
        scrollLeft:s,scrollTop:o
      })
    })), this.onDidScroll=this.scrollableElement.onScroll, this._register(this.onDidScroll(i=>{
      i.scrollTopChanged&&(this.viewContainer.scrollTop=i.scrollTop),i.scrollLeftChanged&&(this.viewContainer.scrollLeft=i.scrollLeft)
    })), Rt(this.el, this.scrollableElement.getDomNode()), this.style(e.styles||ypg), e.descriptor&&(this.size=e.descriptor.size, e.descriptor.views.forEach((i, r)=>{
      const s=Df(i.visible)||i.visible?i.size:{
        type:"invisible",cachedVisibleSize:i.size
      },o=i.view;
      this.doAddView(o,s,r,!0)
    }), this._contentSize=this.viewItems.reduce((i, r)=>i+r.size, 0), this.saveProportions())
  }
  style(n){
    n.separatorBorder.isTransparent()?(this.el.classList.remove("separator-border"), this.el.style.removeProperty("--separator-border")):(this.el.classList.add("separator-border"), this.el.style.setProperty("--separator-border", n.separatorBorder.toString()))
  }
  addView(n, e, t=this.viewItems.length, i){
    this.doAddView(n, e, t, i)
  }
  removeView(n, e){
    if(n<0||n>=this.viewItems.length)throw new Error("Index out of bounds");
    if(this.state!==Zz.Idle)throw new Error("Cant modify splitview");
    this.state=Zz.Busy;
    try{
      e?.type==="auto"&&(this.areViewsDistributed()?e={
        type:"distribute"
      }
      :e={
        type:"split",index:e.index
      });
      const t=e?.type==="split"?this.viewItems[e.index]:void 0,i=this.viewItems.splice(n,1)[0];
      if(t&&(t.size+=i.size),this.viewItems.length>=1){
        const s=Math.max(n-1,0);
        this.sashItems.splice(s,1)[0].disposable.dispose()
      }
      this.relayout(),e?.type==="distribute"&&this.distributeViewSizes();
      const r=i.view;
      return i.dispose(),r
    }
    finally{
      this.state=Zz.Idle
    }
  }
  removeAllViews(){
    if(this.state!==Zz.Idle)throw new Error("Cant modify splitview");
    this.state=Zz.Busy;
    try{
      const n=this.viewItems.splice(0,this.viewItems.length);
      for(const t of n)t.dispose();
      const e=this.sashItems.splice(0,this.sashItems.length);
      for(const t of e)t.disposable.dispose();
      return this.relayout(),n.map(t=>t.view)
    }
    finally{
      this.state=Zz.Idle
    }
  }
  moveView(n, e){
    if(this.state!==Zz.Idle)throw new Error("Cant modify splitview");
    const t=this.getViewCachedVisibleSize(n), i=typeof t>"u"?this.getViewSize(n):tP.Invisible(t), r=this.removeView(n);
    this.addView(r, i, e)
  }
  swapViews(n, e){
    if(this.state!==Zz.Idle)throw new Error("Cant modify splitview");
    if(n>e)return this.swapViews(e, n);
    const t=this.getViewSize(n), i=this.getViewSize(e), r=this.removeView(e), s=this.removeView(n);
    this.addView(r, t, n), this.addView(s, i, e)
  }
  isViewVisible(n){
    if(n<0||n>=this.viewItems.length)throw new Error("Index out of bounds");
    return this.viewItems[n].visible
  }
  setViewVisible(n, e){
    if(n<0||n>=this.viewItems.length)throw new Error("Index out of bounds");
    this.viewItems[n].setVisible(e), this.distributeEmptySpace(n), this.layoutViews(), this.saveProportions()
  }
  getViewCachedVisibleSize(n){
    if(n<0||n>=this.viewItems.length)throw new Error("Index out of bounds");
    return this.viewItems[n].cachedVisibleSize
  }
  layout(n, e){
    const t=Math.max(this.size, this._contentSize);
    if(this.size=n, this.layoutContext=e, this.proportions){
      let i=0;
      for(let r=0;
      r<this.viewItems.length;
      r++){
        const s=this.viewItems[r],o=this.proportions[r];
        typeof o=="number"?i+=o:n-=s.size
      }
      for(let r=0;
      r<this.viewItems.length;
      r++){
        const s=this.viewItems[r],o=this.proportions[r];
        typeof o=="number"&&i>0&&(s.size=zA(Math.round(o*n/i),s.minimumSize,s.maximumSize))
      }
    }
    else{
      const i=_H(this.viewItems.length),r=i.filter(o=>this.viewItems[o].priority===1),s=i.filter(o=>this.viewItems[o].priority===2);
      this.resize(this.viewItems.length-1,n-t,void 0,r,s)
    }
    this.distributeEmptySpace(), this.layoutViews()
  }
  saveProportions(){
    this.proportionalLayout&&this._contentSize>0&&(this.proportions=this.viewItems.map(n=>n.proportionalLayout&&n.visible?n.size/this._contentSize:void 0))
  }
  onSashStart({
    sash:n, start:e, alt:t
  }){
    fca++;
    for(const o of this.viewItems)o.enabled=!1;
    const i=this.sashItems.findIndex(o=>o.sash===n), r=H_(ei(this.el.ownerDocument.body, "keydown", o=>s(this.sashDragState.current, o.altKey)), ei(this.el.ownerDocument.body, "keyup", ()=>s(this.sashDragState.current, !1))), s=(o, a)=>{
      const l=this.viewItems.map(g=>g.size);
      let u=Number.NEGATIVE_INFINITY,d=Number.POSITIVE_INFINITY;
      if(this.inverseAltBehavior&&(a=!a),a)if(i===this.sashItems.length-1){
        const f=this.viewItems[i];
        u=(f.minimumSize-f.size)/2,d=(f.maximumSize-f.size)/2
      }
      else{
        const f=this.viewItems[i+1];
        u=(f.size-f.maximumSize)/2,d=(f.size-f.minimumSize)/2
      }
      let m,p;
      if(!a){
        const g=_H(i,-1),f=_H(i+1,this.viewItems.length),A=g.reduce((M,O)=>M+(this.viewItems[O].minimumSize-l[O]),0),w=g.reduce((M,O)=>M+(this.viewItems[O].viewMaximumSize-l[O]),0),C=f.length===0?Number.POSITIVE_INFINITY:f.reduce((M,O)=>M+(l[O]-this.viewItems[O].minimumSize),0),x=f.length===0?Number.NEGATIVE_INFINITY:f.reduce((M,O)=>M+(l[O]-this.viewItems[O].viewMaximumSize),0),I=Math.max(A,x),B=Math.min(C,w),R=this.findFirstSnapIndex(g),N=this.findFirstSnapIndex(f);
        if(typeof R=="number"){
          const M=this.viewItems[R],O=Math.floor(M.viewMinimumSize/2);
          m={
            index:R,limitDelta:M.visible?I-O:I+O,size:M.size
          }
        }
        if(typeof N=="number"){
          const M=this.viewItems[N],O=Math.floor(M.viewMinimumSize/2);
          p={
            index:N,limitDelta:M.visible?B+O:B-O,size:M.size
          }
        }
      }
      this.sashDragState={
        start:o,current:o,index:i,sizes:l,minDelta:u,maxDelta:d,alt:a,snapBefore:m,snapAfter:p,disposable:r
      }
    };
    s(e, t)
  }
  onSashChange({
    current:n
  }){
    const{
      index:e,start:t,sizes:i,alt:r,minDelta:s,maxDelta:o,snapBefore:a,snapAfter:l
    }
    =this.sashDragState;
    this.sashDragState.current=n;
    const u=n-t, d=this.resize(e, u, i, void 0, void 0, s, o, a, l);
    if(r){
      const m=e===this.sashItems.length-1,p=this.viewItems.map(x=>x.size),g=m?e:e+1,f=this.viewItems[g],A=f.size-f.maximumSize,w=f.size-f.minimumSize,C=m?e-1:e+1;
      this.resize(C,-d,p,void 0,void 0,A,w)
    }
    this.distributeEmptySpace(), this.layoutViews()
  }
  onSashEnd(n){
    fca--, this._onDidSashChange.fire(n), this.sashDragState.disposable.dispose(), this.sashDragState=void 0, this.saveProportions(), this.updateScrollableElement();
    for(const e of this.viewItems)e.enabled=!0
  }
  onViewChange(n, e){
    const t=this.viewItems.indexOf(n);
    t<0||t>=this.viewItems.length||(e=typeof e=="number"?e:n.size, e=zA(e, n.minimumSize, n.maximumSize), this.inverseAltBehavior&&t>0?(this.resize(t-1, Math.floor((n.size-e)/2)), this.distributeEmptySpace(), this.layoutViews()):(n.size=e, this.relayout([t], void 0)))
  }
  resizeView(n, e){
    if(!(n<0||n>=this.viewItems.length)){
      if(this.state!==Zz.Idle)throw new Error("Cant modify splitview");
      this.state=Zz.Busy;
      try{
        const t=_H(this.viewItems.length).filter(o=>o!==n),i=[...t.filter(o=>this.viewItems[o].priority===1),n],r=t.filter(o=>this.viewItems[o].priority===2),s=this.viewItems[n];
        e=Math.round(e),e=zA(e,s.minimumSize,Math.min(s.maximumSize,this.size)),s.size=e,this.relayout(i,r)
      }
      finally{
        this.state=Zz.Idle
      }
    }
  }
  isViewExpanded(n){
    if(n<0||n>=this.viewItems.length)return!1;
    for(const e of this.viewItems)if(e!==this.viewItems[n]&&e.size>e.minimumSize)return!1;
    return!0
  }
  distributeViewSizes(){
    const n=[];
    let e=0;
    for(const o of this.viewItems)o.maximumSize-o.minimumSize>0&&(n.push(o), e+=o.size);
    const t=Math.floor(e/n.length);
    for(const o of n)o.size=zA(t, o.minimumSize, o.maximumSize);
    const i=_H(this.viewItems.length), r=i.filter(o=>this.viewItems[o].priority===1), s=i.filter(o=>this.viewItems[o].priority===2);
    this.relayout(r, s)
  }
  getViewSize(n){
    return n<0||n>=this.viewItems.length?-1:this.viewItems[n].size
  }
  doAddView(n, e, t=this.viewItems.length, i){
    if(this.state!==Zz.Idle)throw new Error("Cant modify splitview");
    this.state=Zz.Busy;
    try{
      const r=Ct(".split-view-view");
      t===this.viewItems.length?this.viewContainer.appendChild(r):this.viewContainer.insertBefore(r,this.viewContainer.children.item(t));
      const s=n.onDidChange(m=>this.onViewChange(u,m)),o=$i(()=>r.remove()),a=H_(s,o);
      let l;
      typeof e=="number"?l=e:(e.type==="auto"&&(this.areViewsDistributed()?e={
        type:"distribute"
      }
      :e={
        type:"split",index:e.index
      }),e.type==="split"?l=this.getViewSize(e.index)/2:e.type==="invisible"?l={
        cachedVisibleSize:e.cachedVisibleSize
      }
      :l=n.minimumSize);
      const u=this.orientation===0?new _pg(r,n,l,a):new Cpg(r,n,l,a);
      if(this.viewItems.splice(t,0,u),this.viewItems.length>1){
        const m={
          orthogonalStartSash:this.orthogonalStartSash,orthogonalEndSash:this.orthogonalEndSash
        },p=this.orientation===0?new Qde(this.sashContainer,{
          getHorizontalSashTop:M=>this.getSashPosition(M),getHorizontalSashWidth:this.getSashOrthogonalSize
        },{
          ...m,orientation:1
        }):new Qde(this.sashContainer,{
          getVerticalSashLeft:M=>this.getSashPosition(M),getVerticalSashHeight:this.getSashOrthogonalSize
        },{
          ...m,orientation:0
        }),g=this.orientation===0?M=>({
          sash:p,start:M.startY,current:M.currentY,alt:M.altKey
        }):M=>({
          sash:p,start:M.startX,current:M.currentX,alt:M.altKey
        }),A=In.map(p.onDidStart,g)(this.onSashStart,this),C=In.map(p.onDidChange,g)(this.onSashChange,this),I=In.map(p.onDidEnd,()=>this.sashItems.findIndex(M=>M.sash===p))(this.onSashEnd,this),B=p.onDidReset(()=>{
          const M=this.sashItems.findIndex(z=>z.sash===p),O=_H(M,-1),$=_H(M+1,this.viewItems.length),H=this.findFirstSnapIndex(O),W=this.findFirstSnapIndex($);
          typeof H=="number"&&!this.viewItems[H].visible||typeof W=="number"&&!this.viewItems[W].visible||this._onDidSashReset.fire(M)
        }),R=H_(A,C,I,B,p),N={
          sash:p,disposable:R
        };
        this.sashItems.splice(t-1,0,N)
      }
      r.appendChild(n.element);
      let d;
      typeof e!="number"&&e.type==="split"&&(d=[e.index]),i||this.relayout([t],d),!i&&typeof e!="number"&&e.type==="distribute"&&this.distributeViewSizes()
    }
    finally{
      this.state=Zz.Idle
    }
  }
  relayout(n, e){
    const t=this.viewItems.reduce((i, r)=>i+r.size, 0);
    this.resize(this.viewItems.length-1, this.size-t, void 0, n, e), this.distributeEmptySpace(), this.layoutViews(), this.saveProportions()
  }
  resize(n, e, t=this.viewItems.map(u=>u.size), i, r, s=Number.NEGATIVE_INFINITY, o=Number.POSITIVE_INFINITY, a, l){
    if(n<0||n>=this.viewItems.length)return 0;
    const u=_H(n, -1), d=_H(n+1, this.viewItems.length);
    if(r)for(const N of r)t0c(u, N), t0c(d, N);
    if(i)for(const N of i)LMo(u, N), LMo(d, N);
    const m=u.map(N=>this.viewItems[N]), p=u.map(N=>t[N]), g=d.map(N=>this.viewItems[N]), f=d.map(N=>t[N]), A=u.reduce((N, M)=>N+(this.viewItems[M].minimumSize-t[M]), 0), w=u.reduce((N, M)=>N+(this.viewItems[M].maximumSize-t[M]), 0), C=d.length===0?Number.POSITIVE_INFINITY:d.reduce((N, M)=>N+(t[M]-this.viewItems[M].minimumSize), 0), x=d.length===0?Number.NEGATIVE_INFINITY:d.reduce((N, M)=>N+(t[M]-this.viewItems[M].maximumSize), 0), I=Math.max(A, x, s), B=Math.min(C, w, o);
    let R=!1;
    if(a){
      const N=this.viewItems[a.index],M=e>=a.limitDelta;
      R=M!==N.visible,N.setVisible(M,a.size)
    }
    if(!R&&l){
      const N=this.viewItems[l.index],M=e<l.limitDelta;
      R=M!==N.visible,N.setVisible(M,l.size)
    }
    if(R)return this.resize(n, e, t, i, r, s, o);
    e=zA(e, I, B);
    for(let N=0, M=e;
    N<m.length;
    N++){
      const O=m[N],$=zA(p[N]+M,O.minimumSize,O.maximumSize),H=$-p[N];
      M-=H,O.size=$
    }
    for(let N=0, M=e;
    N<g.length;
    N++){
      const O=g[N],$=zA(f[N]-M,O.minimumSize,O.maximumSize),H=$-f[N];
      M+=H,O.size=$
    }
    return e
  }
  distributeEmptySpace(n){
    const e=this.viewItems.reduce((o, a)=>o+a.size, 0);
    let t=this.size-e;
    const i=_H(this.viewItems.length-1, -1), r=i.filter(o=>this.viewItems[o].priority===1), s=i.filter(o=>this.viewItems[o].priority===2);
    for(const o of s)t0c(i, o);
    for(const o of r)LMo(i, o);
    typeof n=="number"&&LMo(i, n);
    for(let o=0;
    t!==0&&o<i.length;
    o++){
      const a=this.viewItems[i[o]],l=zA(a.size+t,a.minimumSize,a.maximumSize),u=l-a.size;
      t-=u,a.size=l
    }
  }
  layoutViews(){
    this._contentSize=this.viewItems.reduce((e, t)=>e+t.size, 0);
    let n=0;
    for(const e of this.viewItems)e.layout(n, this.layoutContext), n+=e.size;
    this.sashItems.forEach(e=>e.sash.layout()), this.updateSashEnablement(), fca===0&&this.updateScrollableElement()
  }
  updateScrollableElement(){
    this.orientation===0?this.scrollableElement.setScrollDimensions({
      height:this.size,scrollHeight:this._contentSize
    }):this.scrollableElement.setScrollDimensions({
      width:this.size,scrollWidth:this._contentSize
    })
  }
  updateSashEnablement(){
    let n=!1;
    const e=this.viewItems.map(a=>n=a.size-a.minimumSize>0||n);
    n=!1;
    const t=this.viewItems.map(a=>n=a.maximumSize-a.size>0||n), i=[...this.viewItems].reverse();
    n=!1;
    const r=i.map(a=>n=a.size-a.minimumSize>0||n).reverse();
    n=!1;
    const s=i.map(a=>n=a.maximumSize-a.size>0||n).reverse();
    let o=0;
    for(let a=0;
    a<this.sashItems.length;
    a++){
      const{
        sash:l
      }
      =this.sashItems[a],u=this.viewItems[a];
      o+=u.size;
      const d=!(e[a]&&s[a+1]),m=!(t[a]&&r[a+1]);
      if(d&&m){
        const p=_H(a,-1),g=_H(a+1,this.viewItems.length),f=this.findFirstSnapIndex(p),A=this.findFirstSnapIndex(g),w=typeof f=="number"&&!this.viewItems[f].visible,C=typeof A=="number"&&!this.viewItems[A].visible;
        w&&r[a]&&(o>0||this.startSnappingEnabled)?l.state=1:C&&e[a]&&(o<this._contentSize||this.endSnappingEnabled)?l.state=2:l.state=0
      }
      else d&&!m?l.state=1:!d&&m?l.state=2:l.state=3
    }
  }
  getSashPosition(n){
    let e=0;
    for(let t=0;
    t<this.sashItems.length;
    t++)if(e+=this.viewItems[t].size, this.sashItems[t].sash===n)return e;
    return 0
  }
  findFirstSnapIndex(n){
    for(const e of n){
      const t=this.viewItems[e];
      if(t.visible&&t.snap)return e
    }
    for(const e of n){
      const t=this.viewItems[e];
      if(t.visible&&t.maximumSize-t.minimumSize>0)return;
      if(!t.visible&&t.snap)return e
    }
  }
  areViewsDistributed(){
    let n, e;
    for(const t of this.viewItems)if(n=n===void 0?t.size:Math.min(n, t.size), e=e===void 0?t.size:Math.max(e, t.size), e-n>2)return!1;
    return!0
  }
  dispose(){
    this.sashDragState?.disposable.dispose(), Bo(this.viewItems), this.viewItems=[], this.sashItems.forEach(n=>n.disposable.dispose()), this.sashItems=[], super.dispose()
  }
}
}
}), b0A=
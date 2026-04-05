// Module: out-build/vs/base/browser/ui/list/listView.js
// Offset: 1971998 (bundle byte offset)
// Size: 32219 bytes

dz(), ri(), z$(), Dx(), zI(), Vs(), vr(), U0(), yn(), rt(), M3o(), NSe(), TuA(), IuA(), _s(), sE(), sbt(), YVe={
  CurrentDragAndDropData:void 0
}, (function(n){
  n[n.TOP=0]="TOP", n[n.CENTER_TOP=1]="CENTER_TOP", n[n.CENTER_BOTTOM=2]="CENTER_BOTTOM", n[n.BOTTOM=3]="BOTTOM"
})(r_h||(r_h={
  
})), JSe={
  useShadows:!0, verticalScrollMode:1, setRowLineHeight:!0, setRowHeight:!0, supportDynamicHeights:!1, dnd:{
    getDragElements(n){
      return[n]
    }, getDragURI(){
      return null
    }, onDragStart(){
      
    }, onDragOver(){
      return!1
    }, drop(){
      
    }, dispose(){
      
    }
  }, horizontalScrolling:!1, transformOptimization:!0, alwaysConsumeMouseWheel:!0
}, ove=class{
  get context(){
    return this._context
  }
  set context(n){
    this._context=n
  }
  constructor(n){
    this.elements=n
  }
  update(){
    
  }
  getData(){
    return this.elements
  }
}, WIc=class{
  constructor(n){
    this.elements=n
  }
  update(){
    
  }
  getData(){
    return this.elements
  }
}, f3t=class{
  constructor(){
    this.types=[], this.files=[]
  }
  update(n){
    if(n.types&&this.types.splice(0, this.types.length, ...n.types), n.files){
      this.files.splice(0,this.files.length);
      for(let e=0;
      e<n.files.length;
      e++){
        const t=n.files.item(e);
        t&&(t.size||t.type)&&this.files.push(t)
      }
    }
  }
  getData(){
    return{
      types:this.types,files:this.files
    }
  }
}, s_h=class{
  constructor(n){
    n?.getSetSize?this.getSetSize=n.getSetSize.bind(n):this.getSetSize=(e, t, i)=>i, n?.getPosInSet?this.getPosInSet=n.getPosInSet.bind(n):this.getPosInSet=(e, t)=>t+1, n?.getRole?this.getRole=n.getRole.bind(n):this.getRole=e=>"listitem", n?.isChecked?this.isChecked=n.isChecked.bind(n):this.isChecked=e=>{
      
    }
  }
}, joe=class EGb{
  static{
    this.InstanceCount=0
  }
  get contentHeight(){
    return this.rangeMap.size
  }
  get contentWidth(){
    return this.scrollWidth??0
  }
  get onDidScroll(){
    return this.scrollableElement.onScroll
  }
  get onWillScroll(){
    return this.scrollableElement.onWillScroll
  }
  get containerDomNode(){
    return this.rowsContainer
  }
  get scrollableElementDomNode(){
    return this.scrollableElement.getDomNode()
  }
  get horizontalScrolling(){
    return this._horizontalScrolling
  }
  set horizontalScrolling(e){
    if(e!==this._horizontalScrolling){
      if(e&&this.supportDynamicHeights)throw new Error("Horizontal scrolling and dynamic heights not supported simultaneously");
      if(this._horizontalScrolling=e,this.domNode.classList.toggle("horizontal-scrolling",this._horizontalScrolling),this._horizontalScrolling){
        for(const t of this.items)this.measureItemWidth(t);
        this.updateScrollWidth(),this.scrollableElement.setScrollDimensions({
          width:KFn(this.domNode)
        }),this.rowsContainer.style.width=`${Math.max(this.scrollWidth||0,this.renderWidth)}px`
      }
      else this.scrollableElementWidthDelayer.cancel(),this.scrollableElement.setScrollDimensions({
        width:this.renderWidth,scrollWidth:this.renderWidth
      }),this.rowsContainer.style.width=""
    }
  }
  constructor(e, t, i, r=JSe){
    if(this.virtualDelegate=t, this.domId=`list_id_${++EGb.InstanceCount}`, this.renderers=new Map, this.renderWidth=0, this._scrollHeight=0, this.scrollableElementUpdateDisposable=null, this.scrollableElementWidthDelayer=new Nv(50), this.splicing=!1, this.dragOverAnimationStopDisposable=at.None, this.dragOverMouseY=0, this.canDrop=!1, this.currentDragFeedbackDisposable=at.None, this.onDragLeaveTimeout=at.None, this.currentSelectionDisposable=at.None, this.disposables=new Ut, this._onDidChangeContentHeight=new Qe, this._onDidChangeContentWidth=new Qe, this.onDidChangeContentHeight=In.latch(this._onDidChangeContentHeight.event, void 0, this.disposables), this.onDidChangeContentWidth=In.latch(this._onDidChangeContentWidth.event, void 0, this.disposables), this._horizontalScrolling=!1, r.horizontalScrolling&&r.supportDynamicHeights)throw new Error("Horizontal scrolling and dynamic heights not supported simultaneously");
    this.items=[], this.itemId=0, this.rangeMap=this.createRangeMap(r.paddingTop??0);
    for(const o of i)this.renderers.set(o.templateId, o);
    if(this.cache=this.disposables.add(new i_h(this.renderers)), this.lastRenderTop=0, this.lastRenderHeight=0, this.domNode=document.createElement("div"), this.domNode.className="monaco-list", this.domNode.classList.add(this.domId), this.domNode.tabIndex=0, this.domNode.classList.toggle("mouse-support", typeof r.mouseSupport=="boolean"?r.mouseSupport:!0), this._horizontalScrolling=r.horizontalScrolling??JSe.horizontalScrolling, this.domNode.classList.toggle("horizontal-scrolling", this._horizontalScrolling), this.paddingBottom=typeof r.paddingBottom>"u"?0:r.paddingBottom, this.itemGap=typeof r.itemGap>"u"?0:r.itemGap, this.accessibilityProvider=new s_h(r.accessibilityProvider), this.rowsContainer=document.createElement("div"), this.rowsContainer.className="monaco-list-rows", (r.transformOptimization??JSe.transformOptimization)&&(this.rowsContainer.style.transform="translate3d(0px, 0px, 0px)", this.rowsContainer.style.overflow="hidden", this.rowsContainer.style.contain="strict"), this.disposables.add(E1.addTarget(this.rowsContainer)), this.scrollable=this.disposables.add(new Fde({
      forceIntegerValues:!0,smoothScrollDuration:r.smoothScrolling??!1?125:0,scheduleAtNextAnimationFrame:o=>r_(As(this.domNode),o)
    })), this.scrollableElement=this.disposables.add(new Yft(this.rowsContainer, {
      alwaysConsumeMouseWheel:r.alwaysConsumeMouseWheel??JSe.alwaysConsumeMouseWheel,horizontal:1,vertical:r.verticalScrollMode??JSe.verticalScrollMode,useShadows:r.useShadows??JSe.useShadows,mouseWheelScrollSensitivity:r.mouseWheelScrollSensitivity,fastScrollSensitivity:r.fastScrollSensitivity,scrollByPage:r.scrollByPage
    }, this.scrollable)), this.domNode.appendChild(this.scrollableElement.getDomNode()), e.appendChild(this.domNode), this.scrollableElement.onScroll(this.onScroll, this, this.disposables), this.disposables.add(ei(this.rowsContainer, MA.Change, o=>this.onTouchChange(o))), this.disposables.add(ei(this.scrollableElement.getDomNode(), "scroll", o=>{
      const a=o.target,l=a.scrollTop;
      a.scrollTop=0,r.scrollToActiveElement&&this.setScrollTop(this.scrollTop+l)
    })), this.disposables.add(ei(this.domNode, "dragover", o=>this.onDragOver(this.toDragEvent(o)))), this.disposables.add(ei(this.domNode, "drop", o=>this.onDrop(this.toDragEvent(o)))), this.disposables.add(ei(this.domNode, "dragleave", o=>this.onDragLeave(this.toDragEvent(o)))), this.disposables.add(ei(this.domNode, "dragend", o=>this.onDragEnd(o))), r.userSelection){
      if(r.dnd)throw new Error("DND and user selection cannot be used simultaneously");
      this.disposables.add(ei(this.domNode,"mousedown",o=>this.onPotentialSelectionStart(o)))
    }
    this.setRowLineHeight=r.setRowLineHeight??JSe.setRowLineHeight, this.setRowHeight=r.setRowHeight??JSe.setRowHeight, this.supportDynamicHeights=r.supportDynamicHeights??JSe.supportDynamicHeights, this.dnd=r.dnd??this.disposables.add(JSe.dnd), this.layout(r.initialSize?.height, r.initialSize?.width), r.scrollToActiveElement&&this._setupFocusObserver(e)
  }
  _setupFocusObserver(e){
    this.disposables.add(ei(e, "focus", ()=>{
      const t=_C();
      this.activeElement!==t&&t!==null&&(this.activeElement=t,this._scrollToActiveElement(this.activeElement,e))
    }, !0))
  }
  _scrollToActiveElement(e, t){
    const i=t.getBoundingClientRect(), s=e.getBoundingClientRect().top-i.top;
    s<0&&this.setScrollTop(this.scrollTop+s)
  }
  updateOptions(e){
    if(e.paddingBottom!==void 0&&(this.paddingBottom=e.paddingBottom, this.scrollableElement.setScrollDimensions({
      scrollHeight:this.scrollHeight
    })), e.smoothScrolling!==void 0&&this.scrollable.setSmoothScrollDuration(e.smoothScrolling?125:0), e.horizontalScrolling!==void 0&&(this.horizontalScrolling=e.horizontalScrolling), e.itemGap!==void 0&&e.itemGap!==this.itemGap){
      this.itemGap=e.itemGap;
      const i=this.items.slice();
      this.rangeMap=this.createRangeMap(this.rangeMap.paddingTop),this._splice(0,i.length,i.map(r=>r.element))
    }
    let t;
    if(e.scrollByPage!==void 0&&(t={
      ...t??{
        
      },scrollByPage:e.scrollByPage
    }), e.mouseWheelScrollSensitivity!==void 0&&(t={
      ...t??{
        
      },mouseWheelScrollSensitivity:e.mouseWheelScrollSensitivity
    }), e.fastScrollSensitivity!==void 0&&(t={
      ...t??{
        
      },fastScrollSensitivity:e.fastScrollSensitivity
    }), t&&this.scrollableElement.updateOptions(t), e.paddingTop!==void 0&&e.paddingTop!==this.rangeMap.paddingTop){
      const i=this.getRenderRange(this.lastRenderTop,this.lastRenderHeight),r=e.paddingTop-this.rangeMap.paddingTop;
      this.rangeMap.paddingTop=e.paddingTop,this.render(i,Math.max(0,this.lastRenderTop+r),this.lastRenderHeight,void 0,void 0,!0),this.setScrollTop(this.lastRenderTop),this.eventuallyUpdateScrollDimensions(),this.supportDynamicHeights&&this._rerender(this.lastRenderTop,this.lastRenderHeight)
    }
  }
  delegateScrollFromMouseWheelEvent(e){
    this.scrollableElement.delegateScrollFromMouseWheelEvent(e)
  }
  delegateVerticalScrollbarPointerDown(e){
    this.scrollableElement.delegateVerticalScrollbarPointerDown(e)
  }
  updateElementHeight(e, t, i){
    if(e<0||e>=this.items.length)return;
    const r=this.items[e].size;
    if(typeof t>"u"){
      if(!this.supportDynamicHeights){
        console.warn("Dynamic heights not supported",new Error().stack);
        return
      }
      this.items[e].lastDynamicHeightWidth=void 0,t=r+this.probeDynamicHeight(e)
    }
    if(r===t)return;
    const s=this.getRenderRange(this.lastRenderTop, this.lastRenderHeight);
    let o=0;
    e<s.start||i!==null&&i>e&&i<s.end?o=t-r:o=0;
    const a=this.itemGap>0?t+this.itemGap:t;
    this.rangeMap.splice(e, 1, [{
      size:a
    }
    ]), this.items[e].size=t, this.render(s, Math.max(0, this.lastRenderTop+o), this.lastRenderHeight, void 0, void 0, !0), this.setScrollTop(this.lastRenderTop), this.eventuallyUpdateScrollDimensions(), this.supportDynamicHeights?this._rerender(this.lastRenderTop, this.lastRenderHeight):this._onDidChangeContentHeight.fire(this.contentHeight)
  }
  createRangeMap(e){
    return new n_h(e)
  }
  splice(e, t, i=[]){
    if(this.splicing)throw new Error("Can't run recursive splices.");
    this.splicing=!0;
    try{
      return this._splice(e,t,i)
    }
    finally{
      this.splicing=!1,this._onDidChangeContentHeight.fire(this.contentHeight)
    }
  }
  _splice(e, t, i=[]){
    const r=this.getRenderRange(this.lastRenderTop, this.lastRenderHeight), s={
      start:e,end:e+t
    }, o=QH.intersect(r, s), a=new Map;
    for(let R=o.end-1;
    R>=o.start;
    R--){
      const N=this.items[R];
      if(N.dragStartDisposable.dispose(),N.checkedDisposable.dispose(),N.row){
        let M=a.get(N.templateId);
        M||(M=[],a.set(N.templateId,M));
        const O=this.renderers.get(N.templateId);
        O&&O.disposeElement&&O.disposeElement(N.element,R,N.row.templateData,N.size),M.unshift(N.row)
      }
      N.row=null,N.stale=!0
    }
    const l={
      start:e+t,end:this.items.length
    }, u=QH.intersect(l, r), d=QH.relativeComplement(l, r), m=i.map(R=>({
      id:String(this.itemId++),element:R,templateId:this.virtualDelegate.getTemplateId(R),size:this.virtualDelegate.getHeight(R),width:void 0,hasDynamicHeight:!!this.virtualDelegate.hasDynamicHeight&&this.virtualDelegate.hasDynamicHeight(R),lastDynamicHeightWidth:void 0,row:null,uri:void 0,dropTarget:!1,dragStartDisposable:at.None,checkedDisposable:at.None,stale:!1
    }));
    let p;
    if(e===0&&t>=this.items.length){
      if(this.rangeMap=this.createRangeMap(this.rangeMap.paddingTop),this.itemGap>0){
        const R=m.map(N=>({
          ...N,size:N.size+this.itemGap
        }));
        if(R.length>0){
          const N=R[R.length-1];
          R[R.length-1]={
            ...N,size:N.size-this.itemGap
          }
        }
        this.rangeMap.splice(0,0,R)
      }
      else this.rangeMap.splice(0,0,m);
      p=this.items,this.items=m
    }
    else{
      if(this.itemGap>0){
        const R=m.map(N=>({
          ...N,size:N.size+this.itemGap
        }));
        if(R.length>0&&e+R.length===this.items.length+R.length){
          const N=R[R.length-1];
          R[R.length-1]={
            ...N,size:N.size-this.itemGap
          }
        }
        this.rangeMap.splice(e,t,R)
      }
      else this.rangeMap.splice(e,t,m);
      p=MMo(this.items,e,t,m)
    }
    const g=i.length-t, f=this.getRenderRange(this.lastRenderTop, this.lastRenderHeight), A=GIc(u, g), w=QH.intersect(f, A);
    for(let R=w.start;
    R<w.end;
    R++)this.updateItemInDOM(this.items[R], R);
    const C=QH.relativeComplement(A, f);
    for(const R of C)for(let N=R.start;
    N<R.end;
    N++)this.removeItemFromDOM(N);
    const x=d.map(R=>GIc(R, g)), B=[{
      start:e,end:e+i.length
    }, ...x].map(R=>QH.intersect(f, R)).reverse();
    for(const R of B)for(let N=R.end-1;
    N>=R.start;
    N--){
      const M=this.items[N],$=a.get(M.templateId)?.pop();
      this.insertItemInDOM(N,$)
    }
    for(const R of a.values())for(const N of R)this.cache.release(N);
    return this.eventuallyUpdateScrollDimensions(), this.supportDynamicHeights&&this._rerender(this.scrollTop, this.renderHeight), p.map(R=>R.element)
  }
  eventuallyUpdateScrollDimensions(){
    this._scrollHeight=this.contentHeight, this.rowsContainer.style.height=`${this._scrollHeight}px`, this.scrollableElementUpdateDisposable||(this.scrollableElementUpdateDisposable=r_(As(this.domNode), ()=>{
      this.scrollableElement.setScrollDimensions({
        scrollHeight:this.scrollHeight
      }),this.updateScrollWidth(),this.scrollableElementUpdateDisposable=null
    }))
  }
  eventuallyUpdateScrollWidth(){
    if(!this.horizontalScrolling){
      this.scrollableElementWidthDelayer.cancel();
      return
    }
    this.scrollableElementWidthDelayer.trigger(()=>this.updateScrollWidth())
  }
  updateScrollWidth(){
    if(!this.horizontalScrolling)return;
    let e=0;
    for(const t of this.items)typeof t.width<"u"&&(e=Math.max(e, t.width));
    this.scrollWidth=e, this.scrollableElement.setScrollDimensions({
      scrollWidth:e===0?0:e+10
    }), this._onDidChangeContentWidth.fire(this.scrollWidth)
  }
  updateWidth(e){
    if(!this.horizontalScrolling||typeof this.scrollWidth>"u")return;
    const t=this.items[e];
    this.measureItemWidth(t), typeof t.width<"u"&&t.width>this.scrollWidth&&(this.scrollWidth=t.width, this.scrollableElement.setScrollDimensions({
      scrollWidth:this.scrollWidth+10
    }), this._onDidChangeContentWidth.fire(this.scrollWidth))
  }
  rerender(){
    if(this.supportDynamicHeights){
      for(const e of this.items)e.lastDynamicHeightWidth=void 0;
      this._rerender(this.lastRenderTop,this.lastRenderHeight)
    }
  }
  get length(){
    return this.items.length
  }
  get renderHeight(){
    return this.scrollableElement.getScrollDimensions().height
  }
  get firstVisibleIndex(){
    return this.getVisibleRange(this.lastRenderTop, this.lastRenderHeight).start
  }
  get firstMostlyVisibleIndex(){
    const e=this.firstVisibleIndex, t=this.rangeMap.positionAt(e), i=this.rangeMap.positionAt(e+1);
    return i!==-1&&(i-t)/2+t<this.scrollTop?e+1:e
  }
  get lastVisibleIndex(){
    return this.getRenderRange(this.lastRenderTop, this.lastRenderHeight).end-1
  }
  element(e){
    return this.items[e].element
  }
  indexOf(e){
    return this.items.findIndex(t=>t.element===e)
  }
  domElement(e){
    const t=this.items[e].row;
    return t&&t.domNode
  }
  elementHeight(e){
    return this.items[e].size
  }
  elementTop(e){
    return this.rangeMap.positionAt(e)
  }
  indexAt(e){
    return this.rangeMap.indexAt(e)
  }
  indexAfter(e){
    return this.rangeMap.indexAfter(e)
  }
  layout(e, t){
    const i={
      height:typeof e=="number"?e:QSc(this.domNode)
    };
    this.scrollableElementUpdateDisposable&&(this.scrollableElementUpdateDisposable.dispose(), this.scrollableElementUpdateDisposable=null, i.scrollHeight=this.scrollHeight), this.scrollableElement.setScrollDimensions(i), typeof t<"u"&&(this.renderWidth=t, this.supportDynamicHeights&&this._rerender(this.scrollTop, this.renderHeight)), this.horizontalScrolling&&this.scrollableElement.setScrollDimensions({
      width:typeof t=="number"?t:KFn(this.domNode)
    })
  }
  render(e, t, i, r, s, o=!1){
    const a=this.getRenderRange(t, i), l=QH.relativeComplement(a, e).reverse(), u=QH.relativeComplement(e, a);
    if(o){
      const d=QH.intersect(e,a);
      for(let m=d.start;
      m<d.end;
      m++)this.updateItemInDOM(this.items[m],m)
    }
    this.cache.transact(()=>{
      for(const d of u)for(let m=d.start;
      m<d.end;
      m++)this.removeItemFromDOM(m);
      for(const d of l)for(let m=d.end-1;
      m>=d.start;
      m--)this.insertItemInDOM(m)
    }), r!==void 0&&(this.rowsContainer.style.left=`-${r}px`), this.rowsContainer.style.top=`-${t}px`, this.horizontalScrolling&&s!==void 0&&(this.rowsContainer.style.width=`${Math.max(s,this.renderWidth)}px`), this.lastRenderTop=t, this.lastRenderHeight=i
  }
  insertItemInDOM(e, t){
    const i=this.items[e];
    if(!i.row)if(t)i.row=t, i.stale=!0;
    else{
      const l=this.cache.alloc(i.templateId);
      i.row=l.row,i.stale||=l.isReusingConnectedDomNode
    }
    const r=this.accessibilityProvider.getRole(i.element)||"listitem";
    i.row.domNode.setAttribute("role", r);
    const s=this.accessibilityProvider.isChecked(i.element);
    if(typeof s=="boolean")i.row.domNode.setAttribute("aria-checked", String(!!s));
    else if(s){
      const l=u=>i.row.domNode.setAttribute("aria-checked",String(!!u));
      l(s.value),i.checkedDisposable=s.onDidChange(()=>l(s.value))
    }
    if(i.stale||!i.row.domNode.parentElement){
      const l=this.items.at(e+1)?.row?.domNode??null;
      (i.row.domNode.parentElement!==this.rowsContainer||i.row.domNode.nextElementSibling!==l)&&this.rowsContainer.insertBefore(i.row.domNode,l),i.stale=!1
    }
    this.updateItemInDOM(i, e);
    const o=this.renderers.get(i.templateId);
    if(!o)throw new Error(`No renderer found for template id ${i.templateId}`);
    o?.renderElement(i.element, e, i.row.templateData, i.size);
    const a=this.dnd.getDragURI(i.element);
    i.dragStartDisposable.dispose(), i.row.domNode.draggable=!!a, a&&(i.dragStartDisposable=ei(i.row.domNode, "dragstart", l=>this.onDragStart(i.element, a, l))), this.horizontalScrolling&&(this.measureItemWidth(i), this.eventuallyUpdateScrollWidth())
  }
  measureItemWidth(e){
    if(!e.row||!e.row.domNode)return;
    e.row.domNode.style.width="fit-content", e.width=KFn(e.row.domNode);
    const t=As(e.row.domNode).getComputedStyle(e.row.domNode);
    t.paddingLeft&&(e.width+=parseFloat(t.paddingLeft)), t.paddingRight&&(e.width+=parseFloat(t.paddingRight)), e.row.domNode.style.width=""
  }
  updateItemInDOM(e, t){
    e.row.domNode.style.top=`${this.elementTop(t)}px`, this.setRowHeight&&(e.row.domNode.style.height=`${e.size}px`), this.setRowLineHeight&&(e.row.domNode.style.lineHeight=`${e.size}px`), e.row.domNode.setAttribute("data-index", `${t}`), e.row.domNode.setAttribute("data-last-element", t===this.length-1?"true":"false"), e.row.domNode.setAttribute("data-parity", t%2===0?"even":"odd"), e.row.domNode.setAttribute("aria-setsize", String(this.accessibilityProvider.getSetSize(e.element, t, this.length))), e.row.domNode.setAttribute("aria-posinset", String(this.accessibilityProvider.getPosInSet(e.element, t))), e.row.domNode.setAttribute("id", this.getElementDomId(t)), e.row.domNode.classList.toggle("drop-target", e.dropTarget)
  }
  removeItemFromDOM(e){
    const t=this.items[e];
    if(t.dragStartDisposable.dispose(), t.checkedDisposable.dispose(), t.row){
      const i=this.renderers.get(t.templateId);
      i&&i.disposeElement&&i.disposeElement(t.element,e,t.row.templateData,t.size),this.cache.release(t.row),t.row=null
    }
    this.horizontalScrolling&&this.eventuallyUpdateScrollWidth()
  }
  getScrollTop(){
    return this.scrollableElement.getScrollPosition().scrollTop
  }
  setScrollTop(e, t){
    this.scrollableElementUpdateDisposable&&(this.scrollableElementUpdateDisposable.dispose(), this.scrollableElementUpdateDisposable=null, this.scrollableElement.setScrollDimensions({
      scrollHeight:this.scrollHeight
    })), this.scrollableElement.setScrollPosition({
      scrollTop:e,reuseAnimation:t
    })
  }
  getScrollLeft(){
    return this.scrollableElement.getScrollPosition().scrollLeft
  }
  setScrollLeft(e){
    this.scrollableElementUpdateDisposable&&(this.scrollableElementUpdateDisposable.dispose(), this.scrollableElementUpdateDisposable=null, this.scrollableElement.setScrollDimensions({
      scrollWidth:this.scrollWidth
    })), this.scrollableElement.setScrollPosition({
      scrollLeft:e
    })
  }
  get scrollTop(){
    return this.getScrollTop()
  }
  set scrollTop(e){
    this.setScrollTop(e)
  }
  get scrollHeight(){
    return this._scrollHeight+(this.horizontalScrolling?10:0)+this.paddingBottom
  }
  get onMouseClick(){
    return In.map(this.disposables.add(new Hg(this.domNode, "click")).event, e=>this.toMouseEvent(e), this.disposables)
  }
  get onMouseDblClick(){
    return In.map(this.disposables.add(new Hg(this.domNode, "dblclick")).event, e=>this.toMouseEvent(e), this.disposables)
  }
  get onMouseMiddleClick(){
    return In.filter(In.map(this.disposables.add(new Hg(this.domNode, "auxclick")).event, e=>this.toMouseEvent(e), this.disposables), e=>e.browserEvent.button===1, this.disposables)
  }
  get onMouseUp(){
    return In.map(this.disposables.add(new Hg(this.domNode, "mouseup")).event, e=>this.toMouseEvent(e), this.disposables)
  }
  get onMouseDown(){
    return In.map(this.disposables.add(new Hg(this.domNode, "mousedown")).event, e=>this.toMouseEvent(e), this.disposables)
  }
  get onMouseOver(){
    return In.map(this.disposables.add(new Hg(this.domNode, "mouseover")).event, e=>this.toMouseEvent(e), this.disposables)
  }
  get onMouseMove(){
    return In.map(this.disposables.add(new Hg(this.domNode, "mousemove")).event, e=>this.toMouseEvent(e), this.disposables)
  }
  get onMouseOut(){
    return In.map(this.disposables.add(new Hg(this.domNode, "mouseout")).event, e=>this.toMouseEvent(e), this.disposables)
  }
  get onContextMenu(){
    return In.any(In.map(this.disposables.add(new Hg(this.domNode, "contextmenu")).event, e=>this.toMouseEvent(e), this.disposables), In.map(this.disposables.add(new Hg(this.domNode, MA.Contextmenu)).event, e=>this.toGestureEvent(e), this.disposables))
  }
  get onTouchStart(){
    return In.map(this.disposables.add(new Hg(this.domNode, "touchstart")).event, e=>this.toTouchEvent(e), this.disposables)
  }
  get onTap(){
    return In.map(this.disposables.add(new Hg(this.rowsContainer, MA.Tap)).event, e=>this.toGestureEvent(e), this.disposables)
  }
  toMouseEvent(e){
    const t=this.getItemIndexFromEventTarget(e.target||null), i=typeof t>"u"?void 0:this.items[t], r=i&&i.element;
    return{
      browserEvent:e,index:t,element:r
    }
  }
  toTouchEvent(e){
    const t=this.getItemIndexFromEventTarget(e.target||null), i=typeof t>"u"?void 0:this.items[t], r=i&&i.element;
    return{
      browserEvent:e,index:t,element:r
    }
  }
  toGestureEvent(e){
    const t=this.getItemIndexFromEventTarget(e.initialTarget||null), i=typeof t>"u"?void 0:this.items[t], r=i&&i.element;
    return{
      browserEvent:e,index:t,element:r
    }
  }
  toDragEvent(e){
    const t=this.getItemIndexFromEventTarget(e.target||null), i=typeof t>"u"?void 0:this.items[t], r=i&&i.element, s=this.getTargetSector(e, t);
    return{
      browserEvent:e,index:t,element:r,sector:s
    }
  }
  onScroll(e){
    try{
      const t=this.getRenderRange(this.lastRenderTop,this.lastRenderHeight);
      this.render(t,e.scrollTop,e.height,e.scrollLeft,e.scrollWidth),this.supportDynamicHeights&&this._rerender(e.scrollTop,e.height,e.inSmoothScrolling)
    }
    catch(t){
      throw console.error("Got bad scroll event:",e),t
    }
  }
  onTouchChange(e){
    e.preventDefault(), e.stopPropagation(), this.scrollTop-=e.translationY
  }
  onDragStart(e, t, i){
    if(!i.dataTransfer)return;
    const r=this.dnd.getDragElements(e);
    i.dataTransfer.effectAllowed="copyMove", i.dataTransfer.setData(fT.TEXT, t);
    let s;
    this.dnd.getDragLabel&&(s=this.dnd.getDragLabel(r, i)), typeof s>"u"&&(s=String(r.length)), rbt(i, this.domNode, s, [this.domId]), this.domNode.classList.add("dragging"), this.currentDragData=new ove(r), YVe.CurrentDragAndDropData=new WIc(r), this.dnd.onDragStart?.(this.currentDragData, i)
  }
  onPotentialSelectionStart(e){
    this.currentSelectionDisposable.dispose();
    const t=lFo(this.domNode), i=this.currentSelectionDisposable=new Ut, r=i.add(new Ut);
    r.add(ei(this.domNode, "selectstart", ()=>{
      r.add(ei(t,"mousemove",s=>{
        t.getSelection()?.isCollapsed===!1&&this.setupDragAndDropScrollTopAnimation(s)
      })),i.add($i(()=>{
        const s=this.getRenderRange(this.lastRenderTop,this.lastRenderHeight);
        this.currentSelectionBounds=void 0,this.render(s,this.lastRenderTop,this.lastRenderHeight,void 0,void 0)
      })),i.add(ei(t,"selectionchange",()=>{
        const s=t.getSelection();
        if(!s||s.isCollapsed){
          r.isDisposed&&i.dispose();
          return
        }
        let o=this.getIndexOfListElement(s.anchorNode),a=this.getIndexOfListElement(s.focusNode);
        o!==void 0&&a!==void 0&&(a<o&&([o,a]=[a,o]),this.currentSelectionBounds={
          start:o,end:a
        })
      }))
    })), r.add(ei(t, "mouseup", ()=>{
      r.dispose(),this.teardownDragAndDropScrollTopAnimation(),t.getSelection()?.isCollapsed!==!1&&i.dispose()
    }))
  }
  getIndexOfListElement(e){
    if(!(!e||!this.domNode.contains(e)))for(;
    e&&e!==this.domNode;
    ){
      if(e.dataset?.index)return Number(e.dataset.index);
      e=e.parentElement
    }
  }
  onDragOver(e){
    if(e.browserEvent.preventDefault(), this.onDragLeaveTimeout.dispose(), YVe.CurrentDragAndDropData&&YVe.CurrentDragAndDropData.getData()==="vscode-ui"||(this.setupDragAndDropScrollTopAnimation(e.browserEvent), !e.browserEvent.dataTransfer))return!1;
    if(!this.currentDragData)if(YVe.CurrentDragAndDropData)this.currentDragData=YVe.CurrentDragAndDropData;
    else{
      if(!e.browserEvent.dataTransfer.types)return!1;
      this.currentDragData=new f3t
    }
    const t=this.dnd.onDragOver(this.currentDragData, e.element, e.index, e.sector, e.browserEvent);
    if(this.canDrop=typeof t=="boolean"?t:t.accept, !this.canDrop)return this.currentDragFeedback=void 0, this.currentDragFeedbackDisposable.dispose(), !1;
    e.browserEvent.dataTransfer.dropEffect=typeof t!="boolean"&&t.effect?.type===0?"copy":"move";
    let i;
    typeof t!="boolean"&&t.feedback?i=t.feedback:typeof e.index>"u"?i=[-1]:i=[e.index], i=xb(i).filter(s=>s>=-1&&s<this.length).sort((s, o)=>s-o), i=i[0]===-1?[-1]:i;
    let r=typeof t!="boolean"&&t.effect&&t.effect.position?t.effect.position:"drop-target";
    if(BuA(this.currentDragFeedback, i)&&this.currentDragFeedbackPosition===r)return!0;
    if(this.currentDragFeedback=i, this.currentDragFeedbackPosition=r, this.currentDragFeedbackDisposable.dispose(), i[0]===-1)this.domNode.classList.add(r), this.rowsContainer.classList.add(r), this.currentDragFeedbackDisposable=$i(()=>{
      this.domNode.classList.remove(r),this.rowsContainer.classList.remove(r)
    });
    else{
      if(i.length>1&&r!=="drop-target")throw new Error("Can't use multiple feedbacks with position different than 'over'");
      r==="drop-target-after"&&i[0]<this.length-1&&(i[0]+=1,r="drop-target-before");
      for(const s of i){
        const o=this.items[s];
        o.dropTarget=!0,o.row?.domNode.classList.add(r)
      }
      this.currentDragFeedbackDisposable=$i(()=>{
        for(const s of i){
          const o=this.items[s];
          o.dropTarget=!1,o.row?.domNode.classList.remove(r)
        }
      })
    }
    return!0
  }
  onDragLeave(e){
    this.onDragLeaveTimeout.dispose(), this.onDragLeaveTimeout=nC(()=>this.clearDragOverFeedback(), 100, this.disposables), this.currentDragData&&this.dnd.onDragLeave?.(this.currentDragData, e.element, e.index, e.browserEvent)
  }
  onDrop(e){
    if(!this.canDrop)return;
    const t=this.currentDragData;
    this.teardownDragAndDropScrollTopAnimation(), this.clearDragOverFeedback(), this.domNode.classList.remove("dragging"), this.currentDragData=void 0, YVe.CurrentDragAndDropData=void 0, !(!t||!e.browserEvent.dataTransfer)&&(e.browserEvent.preventDefault(), t.update(e.browserEvent.dataTransfer), this.dnd.drop(t, e.element, e.index, e.sector, e.browserEvent))
  }
  onDragEnd(e){
    this.canDrop=!1, this.teardownDragAndDropScrollTopAnimation(), this.clearDragOverFeedback(), this.domNode.classList.remove("dragging"), this.currentDragData=void 0, YVe.CurrentDragAndDropData=void 0, this.dnd.onDragEnd?.(e)
  }
  clearDragOverFeedback(){
    this.currentDragFeedback=void 0, this.currentDragFeedbackPosition=void 0, this.currentDragFeedbackDisposable.dispose(), this.currentDragFeedbackDisposable=at.None
  }
  setupDragAndDropScrollTopAnimation(e){
    if(!this.dragOverAnimationDisposable){
      const t=x5e(this.domNode).top;
      this.dragOverAnimationDisposable=Qoh(As(this.domNode),this.animateDragAndDropScrollTop.bind(this,t))
    }
    this.dragOverAnimationStopDisposable.dispose(), this.dragOverAnimationStopDisposable=nC(()=>{
      this.dragOverAnimationDisposable&&(this.dragOverAnimationDisposable.dispose(),this.dragOverAnimationDisposable=void 0)
    }, 1e3, this.disposables), this.dragOverMouseY=e.pageY
  }
  animateDragAndDropScrollTop(e){
    if(this.dragOverMouseY===void 0)return;
    const t=this.dragOverMouseY-e, i=this.renderHeight-35;
    t<35?this.scrollTop+=Math.max(-14, Math.floor(.3*(t-35))):t>i&&(this.scrollTop+=Math.min(14, Math.floor(.3*(t-i))))
  }
  teardownDragAndDropScrollTopAnimation(){
    this.dragOverAnimationStopDisposable.dispose(), this.dragOverAnimationDisposable&&(this.dragOverAnimationDisposable.dispose(), this.dragOverAnimationDisposable=void 0)
  }
  getTargetSector(e, t){
    if(t===void 0)return;
    const i=e.offsetY/this.items[t].size, r=Math.floor(i/.25);
    return zA(r, 0, 3)
  }
  getItemIndexFromEventTarget(e){
    const t=this.scrollableElement.getDomNode();
    let i=e;
    for(;
    (wf(i)||Uoh(i))&&i!==this.rowsContainer&&t.contains(i);
    ){
      const r=i.getAttribute("data-index");
      if(r){
        const s=Number(r);
        if(!isNaN(s))return s
      }
      i=i.parentElement
    }
  }
  getVisibleRange(e, t){
    return{
      start:this.rangeMap.indexAt(e),end:this.rangeMap.indexAfter(e+t-1)
    }
  }
  getRenderRange(e, t){
    const i=this.getVisibleRange(e, t);
    if(this.currentSelectionBounds){
      const r=this.rangeMap.count;
      i.start=Math.min(i.start,this.currentSelectionBounds.start,r),i.end=Math.min(Math.max(i.end,this.currentSelectionBounds.end+1),r)
    }
    return i
  }
  _rerender(e, t, i){
    const r=this.getRenderRange(e, t);
    let s, o;
    e===this.elementTop(r.start)?(s=r.start, o=0):r.end-r.start>1&&(s=r.start+1, o=this.elementTop(s)-e);
    let a=0;
    for(;
    ;
    ){
      const l=this.getRenderRange(e,t);
      let u=!1;
      for(let d=l.start;
      d<l.end;
      d++){
        const m=this.probeDynamicHeight(d);
        m!==0&&this.rangeMap.splice(d,1,[this.items[d]]),a+=m,u=u||m!==0
      }
      if(!u){
        a!==0&&this.eventuallyUpdateScrollDimensions();
        const d=QH.relativeComplement(r,l);
        for(const p of d)for(let g=p.start;
        g<p.end;
        g++)this.items[g].row&&this.removeItemFromDOM(g);
        const m=QH.relativeComplement(l,r).reverse();
        for(const p of m)for(let g=p.end-1;
        g>=p.start;
        g--)this.insertItemInDOM(g);
        for(let p=l.start;
        p<l.end;
        p++)this.items[p].row&&this.updateItemInDOM(this.items[p],p);
        if(typeof s=="number"){
          const p=this.scrollable.getFutureScrollPosition().scrollTop-e,g=this.elementTop(s)-o+p;
          this.setScrollTop(g,i)
        }
        this._onDidChangeContentHeight.fire(this.contentHeight);
        return
      }
    }
  }
  probeDynamicHeight(e){
    const t=this.items[e];
    if(this.virtualDelegate.getDynamicHeight){
      const o=this.virtualDelegate.getDynamicHeight(t.element);
      if(o!==null){
        const a=t.size;
        return t.size=o,t.lastDynamicHeightWidth=this.renderWidth,o-a
      }
    }
    if(!t.hasDynamicHeight||t.lastDynamicHeightWidth===this.renderWidth||this.virtualDelegate.hasDynamicHeight&&!this.virtualDelegate.hasDynamicHeight(t.element))return 0;
    const i=t.size;
    if(t.row)return t.row.domNode.style.height="", t.size=t.row.domNode.offsetHeight, t.size===0&&!HS(t.row.domNode, As(t.row.domNode).document.body)&&console.warn("Measuring item node that is not in DOM! Add ListView to the DOM before measuring row height!", new Error().stack), t.lastDynamicHeightWidth=this.renderWidth, t.size-i;
    const{
      row:r
    }
    =this.cache.alloc(t.templateId);
    r.domNode.style.height="", this.rowsContainer.appendChild(r.domNode);
    const s=this.renderers.get(t.templateId);
    if(!s)throw new _m("Missing renderer for templateId: "+t.templateId);
    return s.renderElement(t.element, e, r.templateData, void 0), t.size=r.domNode.offsetHeight, s.disposeElement?.(t.element, e, r.templateData, void 0), this.virtualDelegate.setDynamicHeight?.(t.element, t.size), t.lastDynamicHeightWidth=this.renderWidth, r.domNode.remove(), this.cache.release(r), t.size-i
  }
  getElementDomId(e){
    return`${this.domId}_${e}`
  }
  dispose(){
    for(const e of this.items)if(e.dragStartDisposable.dispose(), e.checkedDisposable.dispose(), e.row){
      const t=this.renderers.get(e.row.templateId);
      t&&(t.disposeElement?.(e.element,-1,e.row.templateData,void 0),t.disposeTemplate(e.row.templateData))
    }
    this.items=[], this.domNode?.remove(), this.dragOverAnimationDisposable?.dispose(), this.disposables.dispose()
  }
}, __decorate([cl], joe.prototype, "onMouseClick", null), __decorate([cl], joe.prototype, "onMouseDblClick", null), __decorate([cl], joe.prototype, "onMouseMiddleClick", null), __decorate([cl], joe.prototype, "onMouseUp", null), __decorate([cl], joe.prototype, "onMouseDown", null), __decorate([cl], joe.prototype, "onMouseOver", null), __decorate([cl], joe.prototype, "onMouseMove", null), __decorate([cl], joe.prototype, "onMouseOut", null), __decorate([cl], joe.prototype, "onContextMenu", null), __decorate([cl], joe.prototype, "onTouchStart", null), __decorate([cl], joe.prototype, "onTap", null)
}
});
function c3n(n, e){
  return n.classList.contains(e)?!0:n.classList.contains("monaco-list")||!n.parentElement?!1:c3n(n.parentElement, e)
}
function b3t(n){
  return c3n(n, "monaco-editor")
}
function RuA(n){
  return c3n(n, "monaco-custom-toggle")
}
function PuA(n){
  return c3n(n, "action-item")
}
function l3n(n){
  return c3n(n, "monaco-tree-sticky-row")
}
function u3n(n){
  return n.classList.contains("monaco-tree-sticky-container")
}
function o_h(n){
  return n.tagName==="A"&&n.classList.contains("monaco-button")||n.tagName==="DIV"&&n.classList.contains("monaco-button-dropdown")?!0:n.classList.contains("monaco-list")||!n.parentElement?!1:o_h(n.parentElement)
}
function a_h(n){
  return Fs?n.browserEvent.metaKey:n.browserEvent.ctrlKey
}
function c_h(n){
  return n.browserEvent.shiftKey
}
function LuA(n){
  return I6(n)&&n.button===2
}
function NuA(n, e){
  const t=n.indexOf(e);
  if(t===-1)return[];
  const i=[];
  let r=t-1;
  for(;
  r>=0&&n[r]===e-(t-r);
  )i.push(n[r--]);
  for(i.reverse(), r=t;
  r<n.length&&n[r]===e+(r-t);
  )i.push(n[r++]);
  return i
}
function QIc(n, e){
  const t=[];
  let i=0, r=0;
  for(;
  i<n.length||r<e.length;
  )if(i>=n.length)t.push(e[r++]);
  else if(r>=e.length)t.push(n[i++]);
  else if(n[i]===e[r]){
    t.push(n[i]), i++, r++;
    continue
  }
  else n[i]<e[r]?t.push(n[i++]):t.push(e[r++]);
  return t
}
function MuA(n, e){
  const t=[];
  let i=0, r=0;
  for(;
  i<n.length||r<e.length;
  )if(i>=n.length)t.push(e[r++]);
  else if(r>=e.length)t.push(n[i++]);
  else if(n[i]===e[r]){
    i++, r++;
    continue
  }
  else n[i]<e[r]?t.push(n[i++]):r++;
  return t
}
var l_h, d3n, u_h, F3o, jIc, bRe, v3t, zIc, d_h, h_h, VIc, O3o, U3o, KIc, m_h, YIc, p_h, g_h, f_h, JR, SW=
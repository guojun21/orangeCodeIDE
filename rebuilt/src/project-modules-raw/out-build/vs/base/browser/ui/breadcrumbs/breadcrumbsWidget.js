// Module: out-build/vs/base/browser/ui/breadcrumbs/breadcrumbsWidget.js
// Offset: 31415240 (bundle byte offset)
// Size: 6086 bytes

ri(), KC(), zI(), Vs(), Jr(), yn(), rt(), Zoy(), n1a=class{
  
}, HLf=class{
  constructor(n, e, t, i){
    this._disposables=new Ut, this._onDidSelectItem=new Qe, this._onDidFocusItem=new Qe, this._onDidChangeFocus=new Qe, this.onDidSelectItem=this._onDidSelectItem.event, this.onDidFocusItem=this._onDidFocusItem.event, this.onDidChangeFocus=this._onDidChangeFocus.event, this._items=new Array, this._nodes=new Array, this._freeNodes=new Array, this._enabled=!0, this._focusedItemIdx=-1, this._selectedItemIdx=-1, this._domNode=document.createElement("div"), this._domNode.className="monaco-breadcrumbs", this._domNode.tabIndex=0, this._domNode.setAttribute("role", "list"), this._scrollable=new vF(this._domNode, {
      vertical:2,horizontal:1,horizontalScrollbarSize:e,useShadows:!1,scrollYToX:!0
    }), this._separatorIcon=t, this._disposables.add(this._scrollable), this._disposables.add(_f(this._domNode, "click", o=>this._onClick(o))), n.appendChild(this._scrollable.getDomNode());
    const r=wC(this._domNode);
    this._style(r, i);
    const s=CC(this._domNode);
    this._disposables.add(s), this._disposables.add(s.onDidBlur(o=>this._onDidChangeFocus.fire(!1))), this._disposables.add(s.onDidFocus(o=>this._onDidChangeFocus.fire(!0)))
  }
  setHorizontalScrollbarSize(n){
    this._scrollable.updateOptions({
      horizontalScrollbarSize:n
    })
  }
  dispose(){
    this._disposables.dispose(), this._pendingLayout?.dispose(), this._pendingDimLayout?.dispose(), this._onDidSelectItem.dispose(), this._onDidFocusItem.dispose(), this._onDidChangeFocus.dispose(), this._domNode.remove(), this._nodes.length=0, this._freeNodes.length=0
  }
  layout(n){
    n&&Lu.equals(n, this._dimension)||(n?(this._pendingDimLayout?.dispose(), this._pendingDimLayout=this._updateDimensions(n)):(this._pendingLayout?.dispose(), this._pendingLayout=this._updateScrollbar()))
  }
  _updateDimensions(n){
    const e=new Ut;
    return e.add(VFn(As(this._domNode), ()=>{
      this._dimension=n,this._domNode.style.width=`${n.width}px`,this._domNode.style.height=`${n.height}px`,e.add(this._updateScrollbar())
    })), e
  }
  _updateScrollbar(){
    return Roh(As(this._domNode), ()=>{
      Roh(As(this._domNode),()=>{
        this._scrollable.setRevealOnScroll(!1),this._scrollable.scanDomNode(),this._scrollable.setRevealOnScroll(!0)
      })
    })
  }
  _style(n, e){
    let t="";
    e.breadcrumbsBackground&&(t+=`.monaco-breadcrumbs { background-color: ${e.breadcrumbsBackground}}`), e.breadcrumbsForeground&&(t+=`.monaco-breadcrumbs .monaco-breadcrumb-item { color: ${e.breadcrumbsForeground}}
`), e.breadcrumbsFocusForeground&&(t+=`.monaco-breadcrumbs .monaco-breadcrumb-item.focused { color: ${e.breadcrumbsFocusForeground}}
`), e.breadcrumbsFocusAndSelectionForeground&&(t+=`.monaco-breadcrumbs .monaco-breadcrumb-item.focused.selected { color: ${e.breadcrumbsFocusAndSelectionForeground}}
`), e.breadcrumbsHoverForeground&&(t+=`.monaco-breadcrumbs:not(.disabled	) .monaco-breadcrumb-item:hover:not(.focused):not(.selected) { color: ${e.breadcrumbsHoverForeground}}
`), n.innerText=t
  }
  setEnabled(n){
    this._enabled=n, this._domNode.classList.toggle("disabled", !this._enabled)
  }
  domFocus(){
    const n=this._focusedItemIdx>=0?this._focusedItemIdx:this._items.length-1;
    n>=0&&n<this._items.length?this._focus(n, void 0):this._domNode.focus()
  }
  isDOMFocused(){
    return UR(this._domNode)
  }
  getFocused(){
    return this._items[this._focusedItemIdx]
  }
  setFocused(n, e){
    this._focus(this._items.indexOf(n), e)
  }
  focusPrev(n){
    this._focusedItemIdx>0&&this._focus(this._focusedItemIdx-1, n)
  }
  focusNext(n){
    this._focusedItemIdx+1<this._nodes.length&&this._focus(this._focusedItemIdx+1, n)
  }
  _focus(n, e){
    this._focusedItemIdx=-1;
    for(let t=0;
    t<this._nodes.length;
    t++){
      const i=this._nodes[t];
      t!==n?i.classList.remove("focused"):(this._focusedItemIdx=t,i.classList.add("focused"),i.focus())
    }
    this._reveal(this._focusedItemIdx, !0), this._onDidFocusItem.fire({
      type:"focus",item:this._items[this._focusedItemIdx],node:this._nodes[this._focusedItemIdx],payload:e
    })
  }
  reveal(n){
    const e=this._items.indexOf(n);
    e>=0&&this._reveal(e, !1)
  }
  revealLast(){
    this._reveal(this._items.length-1, !1)
  }
  _reveal(n, e){
    if(n<0||n>=this._nodes.length)return;
    const t=this._nodes[n];
    if(!t)return;
    const{
      width:i
    }
    =this._scrollable.getScrollDimensions(), {
      scrollLeft:r
    }
    =this._scrollable.getScrollPosition();
    (!e||t.offsetLeft>r+i||t.offsetLeft<r)&&(this._scrollable.setRevealOnScroll(!1), this._scrollable.setScrollPosition({
      scrollLeft:t.offsetLeft
    }), this._scrollable.setRevealOnScroll(!0))
  }
  getSelection(){
    return this._items[this._selectedItemIdx]
  }
  setSelection(n, e){
    this._select(this._items.indexOf(n), e)
  }
  _select(n, e){
    this._selectedItemIdx=-1;
    for(let t=0;
    t<this._nodes.length;
    t++){
      const i=this._nodes[t];
      t!==n?i.classList.remove("selected"):(this._selectedItemIdx=t,i.classList.add("selected"))
    }
    this._onDidSelectItem.fire({
      type:"select",item:this._items[this._selectedItemIdx],node:this._nodes[this._selectedItemIdx],payload:e
    })
  }
  getItems(){
    return this._items
  }
  setItems(n){
    let e, t=[];
    try{
      e=etA(this._items,n,(i,r)=>i.equals(r)),t=this._items.splice(e,this._items.length-e,...n.slice(e)),this._render(e),Bo(t),Bo(n.slice(0,e)),this._focus(-1,void 0)
    }
    catch(i){
      const r=new Error(`BreadcrumbsItem#setItems: newItems: ${n.length}, prefix: ${e}, removed: ${t.length}`);
      throw r.name=i.name,r.stack=i.stack,r
    }
  }
  _render(n){
    let e=!1;
    for(;
    n<this._items.length&&n<this._nodes.length;
    n++){
      const t=this._items[n],i=this._nodes[n];
      this._renderItem(t,i),e=!0
    }
    for(;
    n<this._nodes.length;
    ){
      const t=this._nodes.pop();
      t&&(this._freeNodes.push(t),t.remove(),e=!0)
    }
    for(;
    n<this._items.length;
    n++){
      const t=this._items[n],i=this._freeNodes.length>0?this._freeNodes.pop():document.createElement("div");
      i&&(this._renderItem(t,i),this._domNode.appendChild(i),this._nodes.push(i),e=!0)
    }
    e&&this.layout(void 0)
  }
  _renderItem(n, e){
    th(e), e.className="";
    try{
      n.render(e)
    }
    catch(i){
      e.innerText="<<RENDER ERROR>>",console.error(i)
    }
    e.tabIndex=-1, e.setAttribute("role", "listitem"), e.classList.add("monaco-breadcrumb-item");
    const t=Ct(Qt.asCSSSelector(this._separatorIcon));
    e.appendChild(t)
  }
  _onClick(n){
    if(this._enabled)for(let e=n.target;
    e;
    e=e.parentElement){
      const t=this._nodes.indexOf(e);
      if(t>=0){
        this._focus(t,n),this._select(t,n);
        break
      }
    }
  }
}
}
}), oxe, JLf, axe, Ybu=
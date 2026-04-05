// Module: out-build/vs/base/browser/ui/list/listWidget.js
// Offset: 2004217 (bundle byte offset)
// Size: 32964 bytes

ri(), KC(), yF(), z$(), Tb(), Dx(), Ew(), uuA(), Vs(), vr(), xf(), U0(), yn(), Q_(), rt(), sE(), _r(), Js(), Zwh(), a3n(), ZVe(), h0(), Uc(), l_h=class{
  constructor(n){
    this.trait=n, this.renderedElements=[]
  }
  get templateId(){
    return`template:${this.trait.name}`
  }
  renderTemplate(n){
    return n
  }
  renderElement(n, e, t){
    const i=this.renderedElements.findIndex(r=>r.templateData===t);
    if(i>=0){
      const r=this.renderedElements[i];
      this.trait.unrender(t),r.index=e
    }
    else{
      const r={
        index:e,templateData:t
      };
      this.renderedElements.push(r)
    }
    this.trait.renderIndex(e, t)
  }
  splice(n, e, t){
    const i=[];
    for(const r of this.renderedElements)r.index<n?i.push(r):r.index>=n+e&&i.push({
      index:r.index+t-e,templateData:r.templateData
    });
    this.renderedElements=i
  }
  renderIndexes(n){
    for(const{
      index:e,templateData:t
    }
    of this.renderedElements)n.indexOf(e)>-1&&this.trait.renderIndex(e, t)
  }
  disposeTemplate(n){
    const e=this.renderedElements.findIndex(t=>t.templateData===n);
    e<0||this.renderedElements.splice(e, 1)
  }
}, d3n=class{
  get name(){
    return this._trait
  }
  get renderer(){
    return new l_h(this)
  }
  constructor(n){
    this._trait=n, this.indexes=[], this.sortedIndexes=[], this._onChange=new Qe, this.onChange=this._onChange.event
  }
  splice(n, e, t){
    const i=t.length-e, r=n+e, s=[];
    let o=0;
    for(;
    o<this.sortedIndexes.length&&this.sortedIndexes[o]<n;
    )s.push(this.sortedIndexes[o++]);
    for(let a=0;
    a<t.length;
    a++)t[a]&&s.push(a+n);
    for(;
    o<this.sortedIndexes.length&&this.sortedIndexes[o]>=r;
    )s.push(this.sortedIndexes[o++]+i);
    this.renderer.splice(n, e, t.length), this._set(s, s)
  }
  renderIndex(n, e){
    e.classList.toggle(this._trait, this.contains(n))
  }
  unrender(n){
    n.classList.remove(this._trait)
  }
  set(n, e){
    return this._set(n, [...n].sort(YIc), e)
  }
  _set(n, e, t){
    const i=this.indexes, r=this.sortedIndexes;
    this.indexes=n, this.sortedIndexes=e;
    const s=QIc(r, n);
    return this.renderer.renderIndexes(s), this._onChange.fire({
      indexes:n,browserEvent:t
    }), i
  }
  get(){
    return this.indexes
  }
  contains(n){
    return s5e(this.sortedIndexes, n, YIc)>=0
  }
  dispose(){
    Bo(this._onChange)
  }
}, __decorate([cl], d3n.prototype, "renderer", null), u_h=class extends d3n{
  constructor(n){
    super("selected"), this.setAriaSelected=n
  }
  renderIndex(n, e){
    super.renderIndex(n, e), this.setAriaSelected&&(this.contains(n)?e.setAttribute("aria-selected", "true"):e.setAttribute("aria-selected", "false"))
  }
}, F3o=class{
  constructor(n, e, t){
    this.trait=n, this.view=e, this.identityProvider=t
  }
  splice(n, e, t){
    if(!this.identityProvider)return this.trait.splice(n, e, new Array(t.length).fill(!1));
    const i=this.trait.get().map(o=>this.identityProvider.getId(this.view.element(o)).toString());
    if(i.length===0)return this.trait.splice(n, e, new Array(t.length).fill(!1));
    const r=new Set(i), s=t.map(o=>r.has(this.identityProvider.getId(o).toString()));
    this.trait.splice(n, e, s)
  }
}, jIc=class{
  get onKeyDown(){
    return In.chain(this.disposables.add(new Hg(this.view.domNode, "keydown")).event, n=>n.filter(e=>!dW(e.target)).map(e=>new vh(e)))
  }
  constructor(n, e, t){
    this.list=n, this.view=e, this.disposables=new Ut, this.multipleSelectionDisposables=new Ut, this.multipleSelectionSupport=t.multipleSelectionSupport, this.disposables.add(this.onKeyDown(i=>{
      switch(i.keyCode){
        case 3:return this.onEnter(i);
        case 16:return this.onUpArrow(i);
        case 18:return this.onDownArrow(i);
        case 11:return this.onPageUpArrow(i);
        case 12:return this.onPageDownArrow(i);
        case 9:return this.onEscape(i);
        case 31:this.multipleSelectionSupport&&(Fs?i.metaKey:i.ctrlKey)&&this.onCtrlA(i)
      }
    }))
  }
  updateOptions(n){
    n.multipleSelectionSupport!==void 0&&(this.multipleSelectionSupport=n.multipleSelectionSupport)
  }
  onEnter(n){
    n.preventDefault(), n.stopPropagation(), this.list.setSelection(this.list.getFocus(), n.browserEvent)
  }
  onUpArrow(n){
    n.preventDefault(), n.stopPropagation(), this.list.focusPrevious(1, !1, n.browserEvent);
    const e=this.list.getFocus()[0];
    this.list.setAnchor(e), this.list.reveal(e), this.view.domNode.focus()
  }
  onDownArrow(n){
    n.preventDefault(), n.stopPropagation(), this.list.focusNext(1, !1, n.browserEvent);
    const e=this.list.getFocus()[0];
    this.list.setAnchor(e), this.list.reveal(e), this.view.domNode.focus()
  }
  onPageUpArrow(n){
    n.preventDefault(), n.stopPropagation(), this.list.focusPreviousPage(n.browserEvent);
    const e=this.list.getFocus()[0];
    this.list.setAnchor(e), this.list.reveal(e), this.view.domNode.focus()
  }
  onPageDownArrow(n){
    n.preventDefault(), n.stopPropagation(), this.list.focusNextPage(n.browserEvent);
    const e=this.list.getFocus()[0];
    this.list.setAnchor(e), this.list.reveal(e), this.view.domNode.focus()
  }
  onCtrlA(n){
    n.preventDefault(), n.stopPropagation(), this.list.setSelection(_H(this.list.length), n.browserEvent), this.list.setAnchor(void 0), this.view.domNode.focus()
  }
  onEscape(n){
    this.list.getSelection().length&&(n.preventDefault(), n.stopPropagation(), this.list.setSelection([], n.browserEvent), this.list.setAnchor(void 0), this.view.domNode.focus())
  }
  dispose(){
    this.disposables.dispose(), this.multipleSelectionDisposables.dispose()
  }
}, __decorate([cl], jIc.prototype, "onKeyDown", null), (function(n){
  n[n.Automatic=0]="Automatic", n[n.Trigger=1]="Trigger"
})(bRe||(bRe={
  
})), (function(n){
  n[n.Idle=0]="Idle", n[n.Typing=1]="Typing"
})(v3t||(v3t={
  
})), zIc=new class{
  mightProducePrintableCharacter(n){
    return n.ctrlKey||n.metaKey||n.altKey?!1:n.keyCode>=31&&n.keyCode<=56||n.keyCode>=21&&n.keyCode<=30||n.keyCode>=98&&n.keyCode<=107||n.keyCode>=85&&n.keyCode<=95
  }
}, d_h=class{
  constructor(n, e, t, i, r){
    this.list=n, this.view=e, this.keyboardNavigationLabelProvider=t, this.keyboardNavigationEventFilter=i, this.delegate=r, this.enabled=!1, this.state=v3t.Idle, this.mode=bRe.Automatic, this.triggered=!1, this.previouslyFocused=-1, this.enabledDisposables=new Ut, this.disposables=new Ut, this.updateOptions(n.options)
  }
  updateOptions(n){
    n.typeNavigationEnabled??!0?this.enable():this.disable(), this.mode=n.typeNavigationMode??bRe.Automatic
  }
  trigger(){
    this.triggered=!this.triggered
  }
  enable(){
    if(this.enabled)return;
    let n=!1;
    const e=In.chain(this.enabledDisposables.add(new Hg(this.view.domNode, "keydown")).event, r=>r.filter(s=>!dW(s.target)).filter(()=>this.mode===bRe.Automatic||this.triggered).map(s=>new vh(s)).filter(s=>n||this.keyboardNavigationEventFilter(s)).filter(s=>this.delegate.mightProducePrintableCharacter(s)).forEach(s=>zu.stop(s, !0)).map(s=>s.browserEvent.key)), t=In.debounce(e, ()=>null, 800, void 0, void 0, void 0, this.enabledDisposables);
    In.reduce(In.any(e, t), (r, s)=>s===null?null:(r||"")+s, void 0, this.enabledDisposables)(this.onInput, this, this.enabledDisposables), t(this.onClear, this, this.enabledDisposables), e(()=>n=!0, void 0, this.enabledDisposables), t(()=>n=!1, void 0, this.enabledDisposables), this.enabled=!0, this.triggered=!1
  }
  disable(){
    this.enabled&&(this.enabledDisposables.clear(), this.enabled=!1, this.triggered=!1)
  }
  onClear(){
    const n=this.list.getFocus();
    if(n.length>0&&n[0]===this.previouslyFocused){
      const e=this.list.options.accessibilityProvider?.getAriaLabel(this.list.element(n[0]));
      typeof e=="string"?W_(e):e&&W_(e.get())
    }
    this.previouslyFocused=-1
  }
  onInput(n){
    if(!n){
      this.state=v3t.Idle,this.triggered=!1;
      return
    }
    const e=this.list.getFocus(), t=e.length>0?e[0]:0, i=this.state===v3t.Idle?1:0;
    this.state=v3t.Typing;
    for(let r=0;
    r<this.list.length;
    r++){
      const s=(t+r+i)%this.list.length,o=this.keyboardNavigationLabelProvider.getKeyboardNavigationLabel(this.view.element(s)),a=o&&o.toString();
      if(this.list.options.typeNavigationEnabled){
        if(typeof a<"u"){
          if(KVe(n,a)){
            this.previouslyFocused=t,this.list.setFocus([s]),this.list.reveal(s);
            return
          }
          const l=FIc(n,a);
          if(l&&l[0].end-l[0].start>1&&l.length===1){
            this.previouslyFocused=t,this.list.setFocus([s]),this.list.reveal(s);
            return
          }
        }
      }
      else if(typeof a>"u"||KVe(n,a)){
        this.previouslyFocused=t,this.list.setFocus([s]),this.list.reveal(s);
        return
      }
    }
  }
  dispose(){
    this.disable(), this.enabledDisposables.dispose(), this.disposables.dispose()
  }
}, h_h=class{
  constructor(n, e){
    this.list=n, this.view=e, this.disposables=new Ut;
    const t=In.chain(this.disposables.add(new Hg(e.domNode, "keydown")).event, r=>r.filter(s=>!dW(s.target)).map(s=>new vh(s)));
    In.chain(t, r=>r.filter(s=>s.keyCode===2&&!s.ctrlKey&&!s.metaKey&&!s.shiftKey&&!s.altKey))(this.onTab, this, this.disposables)
  }
  onTab(n){
    if(n.target!==this.view.domNode)return;
    const e=this.list.getFocus();
    if(e.length===0)return;
    const t=this.view.domElement(e[0]);
    if(!t)return;
    const i=t.querySelector("[tabIndex]");
    if(!i||!wf(i)||i.tabIndex===-1)return;
    const r=As(i).getComputedStyle(i);
    r.visibility==="hidden"||r.display==="none"||(n.preventDefault(), n.stopPropagation(), i.focus())
  }
  dispose(){
    this.disposables.dispose()
  }
}, VIc={
  isSelectionSingleChangeEvent:a_h, isSelectionRangeChangeEvent:c_h
}, O3o=class{
  constructor(n){
    this.list=n, this.disposables=new Ut, this._onPointer=new Qe, this.onPointer=this._onPointer.event, n.options.multipleSelectionSupport!==!1&&(this.multipleSelectionController=this.list.options.multipleSelectionController||VIc), this.mouseSupport=typeof n.options.mouseSupport>"u"||!!n.options.mouseSupport, this.mouseSupport&&(n.onMouseDown(this.onMouseDown, this, this.disposables), n.onContextMenu(this.onContextMenu, this, this.disposables), n.onMouseDblClick(this.onDoubleClick, this, this.disposables), n.onTouchStart(this.onMouseDown, this, this.disposables), this.disposables.add(E1.addTarget(n.getHTMLElement()))), In.any(n.onMouseClick, n.onMouseMiddleClick, n.onTap)(this.onViewPointer, this, this.disposables)
  }
  updateOptions(n){
    n.multipleSelectionSupport!==void 0&&(this.multipleSelectionController=void 0, n.multipleSelectionSupport&&(this.multipleSelectionController=this.list.options.multipleSelectionController||VIc))
  }
  isSelectionSingleChangeEvent(n){
    return this.multipleSelectionController?this.multipleSelectionController.isSelectionSingleChangeEvent(n):!1
  }
  isSelectionRangeChangeEvent(n){
    return this.multipleSelectionController?this.multipleSelectionController.isSelectionRangeChangeEvent(n):!1
  }
  isSelectionChangeEvent(n){
    return this.isSelectionSingleChangeEvent(n)||this.isSelectionRangeChangeEvent(n)
  }
  onMouseDown(n){
    b3t(n.browserEvent.target)||_C()!==n.browserEvent.target&&this.list.domFocus()
  }
  onContextMenu(n){
    if(dW(n.browserEvent.target)||b3t(n.browserEvent.target))return;
    const e=typeof n.index>"u"?[]:[n.index];
    this.list.setFocus(e, n.browserEvent)
  }
  onViewPointer(n){
    if(!this.mouseSupport||dW(n.browserEvent.target)||b3t(n.browserEvent.target)||n.browserEvent.isHandledByList)return;
    n.browserEvent.isHandledByList=!0;
    const e=n.index;
    if(typeof e>"u"){
      this.list.setFocus([],n.browserEvent),this.list.setSelection([],n.browserEvent),this.list.setAnchor(void 0);
      return
    }
    if(this.isSelectionChangeEvent(n))return this.changeSelection(n);
    this.list.setFocus([e], n.browserEvent), this.list.setAnchor(e), LuA(n.browserEvent)||this.list.setSelection([e], n.browserEvent), this._onPointer.fire(n)
  }
  onDoubleClick(n){
    if(dW(n.browserEvent.target)||b3t(n.browserEvent.target)||this.isSelectionChangeEvent(n)||n.browserEvent.isHandledByList)return;
    n.browserEvent.isHandledByList=!0;
    const e=this.list.getFocus();
    this.list.setSelection(e, n.browserEvent)
  }
  changeSelection(n){
    const e=n.index;
    let t=this.list.getAnchor();
    if(this.isSelectionRangeChangeEvent(n)){
      typeof t>"u"&&(t=this.list.getFocus()[0]??e,this.list.setAnchor(t));
      const i=Math.min(t,e),r=Math.max(t,e),s=_H(i,r+1),o=this.list.getSelection(),a=NuA(QIc(o,[t]),t);
      if(a.length===0)return;
      const l=QIc(s,MuA(o,a));
      this.list.setSelection(l,n.browserEvent),this.list.setFocus([e],n.browserEvent)
    }
    else if(this.isSelectionSingleChangeEvent(n)){
      const i=this.list.getSelection(),r=i.filter(s=>s!==e);
      this.list.setFocus([e]),this.list.setAnchor(e),i.length===r.length?this.list.setSelection([...r,e],n.browserEvent):this.list.setSelection(r,n.browserEvent)
    }
  }
  dispose(){
    this.disposables.dispose()
  }
}, U3o=class{
  constructor(n, e){
    this.styleElement=n, this.selectorSuffix=e
  }
  style(n){
    const e=this.selectorSuffix&&`.${this.selectorSuffix}`, t=[];
    n.listBackground&&t.push(`.monaco-list${e} .monaco-list-rows { background: ${n.listBackground}; }`), n.listFocusBackground&&(t.push(`.monaco-list${e}:focus .monaco-list-row.focused { background-color: ${n.listFocusBackground}; }`), t.push(`.monaco-list${e}:focus .monaco-list-row.focused:hover { background-color: ${n.listFocusBackground}; }`)), n.listFocusForeground&&t.push(`.monaco-list${e}:focus .monaco-list-row.focused { color: ${n.listFocusForeground}; }`), n.listActiveSelectionBackground&&(t.push(`.monaco-list${e}:focus .monaco-list-row.selected { background-color: ${n.listActiveSelectionBackground}; }`), t.push(`.monaco-list${e}:focus .monaco-list-row.selected:hover { background-color: ${n.listActiveSelectionBackground}; }`)), n.listActiveSelectionForeground&&t.push(`.monaco-list${e}:focus .monaco-list-row.selected { color: ${n.listActiveSelectionForeground}; }`), n.listActiveSelectionIconForeground&&t.push(`.monaco-list${e}:focus .monaco-list-row.selected .codicon { color: ${n.listActiveSelectionIconForeground}; }`), n.listFocusAndSelectionBackground&&t.push(`
				.monaco-drag-image${e},
				.monaco-list${e}:focus .monaco-list-row.selected.focused { background-color: ${n.listFocusAndSelectionBackground}; }
			`), n.listFocusAndSelectionForeground&&t.push(`
				.monaco-drag-image${e},
				.monaco-list${e}:focus .monaco-list-row.selected.focused { color: ${n.listFocusAndSelectionForeground}; }
			`), n.listInactiveFocusForeground&&(t.push(`.monaco-list${e} .monaco-list-row.focused { color:  ${n.listInactiveFocusForeground}; }`), t.push(`.monaco-list${e} .monaco-list-row.focused:hover { color:  ${n.listInactiveFocusForeground}; }`)), n.listInactiveSelectionIconForeground&&t.push(`.monaco-list${e} .monaco-list-row.focused .codicon { color:  ${n.listInactiveSelectionIconForeground}; }`), n.listInactiveFocusBackground&&(t.push(`.monaco-list${e} .monaco-list-row.focused { background-color:  ${n.listInactiveFocusBackground}; }`), t.push(`.monaco-list${e} .monaco-list-row.focused:hover { background-color:  ${n.listInactiveFocusBackground}; }`)), n.listInactiveSelectionBackground&&(t.push(`.monaco-list${e} .monaco-list-row.selected { background-color:  ${n.listInactiveSelectionBackground}; }`), t.push(`.monaco-list${e} .monaco-list-row.selected:hover { background-color:  ${n.listInactiveSelectionBackground}; }`)), n.listInactiveSelectionForeground&&t.push(`.monaco-list${e} .monaco-list-row.selected { color: ${n.listInactiveSelectionForeground}; }`), n.listHoverBackground&&t.push(`.monaco-list${e}:not(.drop-target):not(.dragging) .monaco-list-row:hover:not(.selected):not(.focused) { background-color: ${n.listHoverBackground}; }`), n.listHoverForeground&&t.push(`.monaco-list${e}:not(.drop-target):not(.dragging) .monaco-list-row:hover:not(.selected):not(.focused) { color:  ${n.listHoverForeground}; }`);
    const i=pRe(n.listFocusAndSelectionOutline, pRe(n.listSelectionOutline, n.listFocusOutline??""));
    i&&t.push(`.monaco-list${e}:focus .monaco-list-row.focused.selected { outline: 1px solid ${i}; outline-offset: -1px;}`), n.listFocusOutline&&t.push(`
				.monaco-drag-image${e},
				.monaco-list${e}:focus .monaco-list-row.focused,
				.monaco-workbench.context-menu-visible .monaco-list${e}.last-focused .monaco-list-row.focused { outline: 1px solid ${n.listFocusOutline}; outline-offset: -1px; }
			`);
    const r=pRe(n.listSelectionOutline, n.listInactiveFocusOutline??"");
    r&&t.push(`.monaco-list${e} .monaco-list-row.focused.selected { outline: 1px dotted ${r}; outline-offset: -1px; }`), n.listSelectionOutline&&t.push(`.monaco-list${e} .monaco-list-row.selected { outline: 1px dotted ${n.listSelectionOutline}; outline-offset: -1px; }`), n.listInactiveFocusOutline&&t.push(`.monaco-list${e} .monaco-list-row.focused { outline: 1px dotted ${n.listInactiveFocusOutline}; outline-offset: -1px; }`), n.listHoverOutline&&t.push(`.monaco-list${e} .monaco-list-row:hover { outline: 1px dashed ${n.listHoverOutline}; outline-offset: -1px; }`), n.listDropOverBackground&&t.push(`
				.monaco-list${e}.drop-target,
				.monaco-list${e} .monaco-list-rows.drop-target,
				.monaco-list${e} .monaco-list-row.drop-target { background-color: ${n.listDropOverBackground} !important; color: inherit !important; }
			`), n.listDropBetweenBackground&&(t.push(`
			.monaco-list${e} .monaco-list-rows.drop-target-before .monaco-list-row:first-child::before,
			.monaco-list${e} .monaco-list-row.drop-target-before::before {
				content: ""; position: absolute; top: 0px; left: 0px; width: 100%; height: 1px;
				background-color: ${n.listDropBetweenBackground};
			}`), t.push(`
			.monaco-list${e} .monaco-list-rows.drop-target-after .monaco-list-row:last-child::after,
			.monaco-list${e} .monaco-list-row.drop-target-after::after {
				content: ""; position: absolute; bottom: 0px; left: 0px; width: 100%; height: 1px;
				background-color: ${n.listDropBetweenBackground};
			}`)), n.tableColumnsBorder&&t.push(`
				.monaco-table > .monaco-split-view2,
				.monaco-table > .monaco-split-view2 .monaco-sash.vertical::before,
				.monaco-workbench:not(.reduce-motion) .monaco-table:hover > .monaco-split-view2,
				.monaco-workbench:not(.reduce-motion) .monaco-table:hover > .monaco-split-view2 .monaco-sash.vertical::before {
					border-color: ${n.tableColumnsBorder};
				}

				.monaco-workbench:not(.reduce-motion) .monaco-table > .monaco-split-view2,
				.monaco-workbench:not(.reduce-motion) .monaco-table > .monaco-split-view2 .monaco-sash.vertical::before {
					border-color: transparent;
				}
			`), n.tableOddRowsBackgroundColor&&t.push(`
				.monaco-table .monaco-list-row[data-parity=odd]:not(.focused):not(.selected):not(:hover) .monaco-table-tr,
				.monaco-table .monaco-list:not(:focus) .monaco-list-row[data-parity=odd].focused:not(.selected):not(:hover) .monaco-table-tr,
				.monaco-table .monaco-list:not(.focused) .monaco-list-row[data-parity=odd].focused:not(.selected):not(:hover) .monaco-table-tr {
					background-color: ${n.tableOddRowsBackgroundColor};
				}
			`), this.styleElement.textContent=t.join(`
`)
  }
}, KIc={
  listFocusBackground:"#7FB0D0", listActiveSelectionBackground:"#0E639C", listActiveSelectionForeground:"#FFFFFF", listActiveSelectionIconForeground:"#FFFFFF", listFocusAndSelectionOutline:"#90C2F9", listFocusAndSelectionBackground:"#094771", listFocusAndSelectionForeground:"#FFFFFF", listInactiveSelectionBackground:"#3F3F46", listInactiveSelectionIconForeground:"#FFFFFF", listHoverBackground:"#2A2D2E", listDropOverBackground:"#383B3D", listDropBetweenBackground:"#EEEEEE", treeIndentGuidesStroke:"#a9a9a9", treeInactiveIndentGuidesStroke:Xr.fromHex("#a9a9a9").transparent(.4).toString(), tableColumnsBorder:Xr.fromHex("#cccccc").transparent(.2).toString(), tableOddRowsBackgroundColor:Xr.fromHex("#cccccc").transparent(.04).toString(), listBackground:void 0, listFocusForeground:void 0, listInactiveSelectionForeground:void 0, listInactiveFocusForeground:void 0, listInactiveFocusBackground:void 0, listHoverForeground:void 0, listFocusOutline:void 0, listInactiveFocusOutline:void 0, listSelectionOutline:void 0, listHoverOutline:void 0, treeStickyScrollBackground:void 0, treeStickyScrollBorder:void 0, treeStickyScrollShadow:void 0
}, m_h={
  keyboardSupport:!0, mouseSupport:!0, multipleSelectionSupport:!0, dnd:{
    getDragURI(){
      return null
    }, onDragStart(){
      
    }, onDragOver(){
      return!1
    }, drop(){
      
    }, dispose(){
      
    }
  }
}, YIc=(n, e)=>n-e, p_h=class{
  constructor(n, e){
    this._templateId=n, this.renderers=e
  }
  get templateId(){
    return this._templateId
  }
  renderTemplate(n){
    return this.renderers.map(e=>e.renderTemplate(n))
  }
  renderElement(n, e, t, i){
    let r=0;
    for(const s of this.renderers)s.renderElement(n, e, t[r++], i)
  }
  disposeElement(n, e, t, i){
    let r=0;
    for(const s of this.renderers)s.disposeElement?.(n, e, t[r], i), r+=1
  }
  disposeTemplate(n){
    let e=0;
    for(const t of this.renderers)t.disposeTemplate(n[e++])
  }
}, g_h=class{
  constructor(n){
    this.accessibilityProvider=n, this.templateId="a18n"
  }
  renderTemplate(n){
    return{
      container:n,disposables:new Ut
    }
  }
  renderElement(n, e, t){
    const i=this.accessibilityProvider.getAriaLabel(n), r=i&&typeof i!="string"?i:F0(i);
    t.disposables.add(Oc(o=>{
      this.setAriaLabel(o.readObservable(r),t.container)
    }));
    const s=this.accessibilityProvider.getAriaLevel&&this.accessibilityProvider.getAriaLevel(n);
    typeof s=="number"?t.container.setAttribute("aria-level", `${s}`):t.container.removeAttribute("aria-level")
  }
  setAriaLabel(n, e){
    n?e.setAttribute("aria-label", n):e.removeAttribute("aria-label")
  }
  disposeElement(n, e, t, i){
    t.disposables.clear()
  }
  disposeTemplate(n){
    n.disposables.dispose()
  }
}, f_h=class{
  constructor(n, e){
    this.list=n, this.dnd=e
  }
  getDragElements(n){
    const e=this.list.getSelectedElements();
    return e.indexOf(n)>-1?e:[n]
  }
  getDragURI(n){
    return this.dnd.getDragURI(n)
  }
  getDragLabel(n, e){
    if(this.dnd.getDragLabel)return this.dnd.getDragLabel(n, e)
  }
  onDragStart(n, e){
    this.dnd.onDragStart?.(n, e)
  }
  onDragOver(n, e, t, i, r){
    return this.dnd.onDragOver(n, e, t, i, r)
  }
  onDragLeave(n, e, t, i){
    this.dnd.onDragLeave?.(n, e, t, i)
  }
  onDragEnd(n){
    this.dnd.onDragEnd?.(n)
  }
  drop(n, e, t, i, r){
    this.dnd.drop(n, e, t, i, r)
  }
  dispose(){
    this.dnd.dispose()
  }
}, JR=class{
  get onDidChangeFocus(){
    return In.map(this.eventBufferer.wrapEvent(this.focus.onChange), n=>this.toListEvent(n), this.disposables)
  }
  get onDidChangeSelection(){
    return In.map(this.eventBufferer.wrapEvent(this.selection.onChange), n=>this.toListEvent(n), this.disposables)
  }
  get domId(){
    return this.view.domId
  }
  get onDidScroll(){
    return this.view.onDidScroll
  }
  get onMouseClick(){
    return this.view.onMouseClick
  }
  get onMouseDblClick(){
    return this.view.onMouseDblClick
  }
  get onMouseMiddleClick(){
    return this.view.onMouseMiddleClick
  }
  get onPointer(){
    return this.mouseController.onPointer
  }
  get onMouseUp(){
    return this.view.onMouseUp
  }
  get onMouseDown(){
    return this.view.onMouseDown
  }
  get onMouseOver(){
    return this.view.onMouseOver
  }
  get onMouseMove(){
    return this.view.onMouseMove
  }
  get onMouseOut(){
    return this.view.onMouseOut
  }
  get onTouchStart(){
    return this.view.onTouchStart
  }
  get onTap(){
    return this.view.onTap
  }
  get onContextMenu(){
    let n=!1;
    const e=In.chain(this.disposables.add(new Hg(this.view.domNode, "keydown")).event, r=>r.map(s=>new vh(s)).filter(s=>n=s.keyCode===58||s.shiftKey&&s.keyCode===68).map(s=>zu.stop(s, !0)).filter(()=>!1)), t=In.chain(this.disposables.add(new Hg(this.view.domNode, "keyup")).event, r=>r.forEach(()=>n=!1).map(s=>new vh(s)).filter(s=>s.keyCode===58||s.shiftKey&&s.keyCode===68).map(s=>zu.stop(s, !0)).map(({
      browserEvent:s
    })=>{
      const o=this.getFocus(),a=o.length?o[0]:void 0,l=typeof a<"u"?this.view.element(a):void 0,u=typeof a<"u"?this.view.domElement(a):this.view.domNode;
      return{
        index:a,element:l,anchor:u,browserEvent:s
      }
    })), i=In.chain(this.view.onContextMenu, r=>r.filter(s=>!n).map(({
      element:s,index:o,browserEvent:a
    })=>({
      element:s,index:o,anchor:new yy(As(this.view.domNode),a),browserEvent:a
    })));
    return In.any(e, t, i)
  }
  get onKeyDown(){
    return this.disposables.add(new Hg(this.view.domNode, "keydown")).event
  }
  get onKeyUp(){
    return this.disposables.add(new Hg(this.view.domNode, "keyup")).event
  }
  get onKeyPress(){
    return this.disposables.add(new Hg(this.view.domNode, "keypress")).event
  }
  get onDidFocus(){
    return In.signal(this.disposables.add(new Hg(this.view.domNode, "focus", !0)).event)
  }
  get onDidBlur(){
    return In.signal(this.disposables.add(new Hg(this.view.domNode, "blur", !0)).event)
  }
  constructor(n, e, t, i, r=m_h){
    this.user=n, this._options=r, this.focus=new d3n("focused"), this.anchor=new d3n("anchor"), this.eventBufferer=new LFt, this._ariaLabel="", this.disposables=new Ut, this._onDidDispose=new Qe, this.onDidDispose=this._onDidDispose.event;
    const s=this._options.accessibilityProvider&&this._options.accessibilityProvider.getWidgetRole?this._options.accessibilityProvider?.getWidgetRole():"list";
    this.selection=new u_h(s!=="listbox");
    const o=[this.focus.renderer, this.selection.renderer];
    this.accessibilityProvider=r.accessibilityProvider, this.accessibilityProvider&&(o.push(new g_h(this.accessibilityProvider)), this.accessibilityProvider.onDidChangeActiveDescendant?.(this.onDidChangeActiveDescendant, this, this.disposables)), i=i.map(l=>new p_h(l.templateId, [...o, l]));
    const a={
      ...r,dnd:r.dnd&&new f_h(this,r.dnd)
    };
    if(this.view=this.createListView(e, t, i, a), this.view.domNode.setAttribute("role", s), r.styleController)this.styleController=r.styleController(this.view.domId);
    else{
      const l=wC(this.view.domNode);
      this.styleController=new U3o(l,this.view.domId)
    }
    if(this.spliceable=new Lwh([new F3o(this.focus, this.view, r.identityProvider), new F3o(this.selection, this.view, r.identityProvider), new F3o(this.anchor, this.view, r.identityProvider), this.view]), this.disposables.add(this.focus), this.disposables.add(this.selection), this.disposables.add(this.anchor), this.disposables.add(this.view), this.disposables.add(this._onDidDispose), this.disposables.add(new h_h(this, this.view)), (typeof r.keyboardSupport!="boolean"||r.keyboardSupport)&&(this.keyboardController=new jIc(this, this.view, r), this.disposables.add(this.keyboardController)), r.keyboardNavigationLabelProvider){
      const l=r.keyboardNavigationDelegate||zIc;
      this.typeNavigationController=new d_h(this,this.view,r.keyboardNavigationLabelProvider,r.keyboardNavigationEventFilter??(()=>!0),l),this.disposables.add(this.typeNavigationController)
    }
    this.mouseController=this.createMouseController(r), this.disposables.add(this.mouseController), this.onDidChangeFocus(this._onFocusChange, this, this.disposables), this.onDidChangeSelection(this._onSelectionChange, this, this.disposables), this.accessibilityProvider&&(this.ariaLabel=this.accessibilityProvider.getWidgetAriaLabel()), this._options.multipleSelectionSupport!==!1&&this.view.domNode.setAttribute("aria-multiselectable", "true")
  }
  createListView(n, e, t, i){
    return new joe(n, e, t, i)
  }
  createMouseController(n){
    return new O3o(this)
  }
  updateOptions(n={
    
  }){
    this._options={
      ...this._options,...n
    }, this.typeNavigationController?.updateOptions(this._options), this._options.multipleSelectionController!==void 0&&(this._options.multipleSelectionSupport?this.view.domNode.setAttribute("aria-multiselectable", "true"):this.view.domNode.removeAttribute("aria-multiselectable")), this.mouseController.updateOptions(n), this.keyboardController?.updateOptions(n), this.view.updateOptions(n)
  }
  get options(){
    return this._options
  }
  splice(n, e, t=[]){
    if(n<0||n>this.view.length)throw new HSe(this.user, `Invalid start index: ${n}`);
    if(e<0)throw new HSe(this.user, `Invalid delete count: ${e}`);
    e===0&&t.length===0||this.eventBufferer.bufferEvents(()=>this.spliceable.splice(n, e, t))
  }
  updateWidth(n){
    this.view.updateWidth(n)
  }
  updateElementHeight(n, e){
    this.view.updateElementHeight(n, e, null)
  }
  rerender(){
    this.view.rerender()
  }
  element(n){
    return this.view.element(n)
  }
  indexOf(n){
    return this.view.indexOf(n)
  }
  indexAt(n){
    return this.view.indexAt(n)
  }
  get length(){
    return this.view.length
  }
  get contentHeight(){
    return this.view.contentHeight
  }
  get contentWidth(){
    return this.view.contentWidth
  }
  get onDidChangeContentHeight(){
    return this.view.onDidChangeContentHeight
  }
  get onDidChangeContentWidth(){
    return this.view.onDidChangeContentWidth
  }
  get scrollTop(){
    return this.view.getScrollTop()
  }
  set scrollTop(n){
    this.view.setScrollTop(n)
  }
  get scrollLeft(){
    return this.view.getScrollLeft()
  }
  set scrollLeft(n){
    this.view.setScrollLeft(n)
  }
  get scrollHeight(){
    return this.view.scrollHeight
  }
  get renderHeight(){
    return this.view.renderHeight
  }
  get firstVisibleIndex(){
    return this.view.firstVisibleIndex
  }
  get firstMostlyVisibleIndex(){
    return this.view.firstMostlyVisibleIndex
  }
  get lastVisibleIndex(){
    return this.view.lastVisibleIndex
  }
  get ariaLabel(){
    return this._ariaLabel
  }
  set ariaLabel(n){
    this._ariaLabel=n, this.view.domNode.setAttribute("aria-label", n)
  }
  domFocus(){
    this.view.domNode.focus({
      preventScroll:!0
    })
  }
  layout(n, e){
    this.view.layout(n, e)
  }
  triggerTypeNavigation(){
    this.typeNavigationController?.trigger()
  }
  setSelection(n, e){
    for(const t of n)if(t<0||t>=this.length)throw new HSe(this.user, `Invalid index ${t}`);
    this.selection.set(n, e)
  }
  getSelection(){
    return this.selection.get()
  }
  getSelectedElements(){
    return this.getSelection().map(n=>this.view.element(n))
  }
  setAnchor(n){
    if(typeof n>"u"){
      this.anchor.set([]);
      return
    }
    if(n<0||n>=this.length)throw new HSe(this.user, `Invalid index ${n}`);
    this.anchor.set([n])
  }
  getAnchor(){
    return this.anchor.get().at(0)
  }
  getAnchorElement(){
    const n=this.getAnchor();
    return typeof n>"u"?void 0:this.element(n)
  }
  setFocus(n, e){
    for(const t of n)if(t<0||t>=this.length)throw new HSe(this.user, `Invalid index ${t}`);
    this.focus.set(n, e)
  }
  focusNext(n=1, e=!1, t, i){
    if(this.length===0)return;
    const r=this.focus.get(), s=this.findNextIndex(r.length>0?r[0]+n:0, e, i);
    s>-1&&this.setFocus([s], t)
  }
  focusPrevious(n=1, e=!1, t, i){
    if(this.length===0)return;
    const r=this.focus.get(), s=this.findPreviousIndex(r.length>0?r[0]-n:0, e, i);
    s>-1&&this.setFocus([s], t)
  }
  async focusNextPage(n, e){
    let t=this.view.indexAt(this.view.getScrollTop()+this.view.renderHeight);
    t=t===0?0:t-1;
    const i=this.getFocus()[0];
    if(i!==t&&(i===void 0||t>i)){
      const r=this.findPreviousIndex(t,!1,e);
      r>-1&&i!==r?this.setFocus([r],n):this.setFocus([t],n)
    }
    else{
      const r=this.view.getScrollTop();
      let s=r+this.view.renderHeight;
      t>i&&(s-=this.view.elementHeight(t)),this.view.setScrollTop(s),this.view.getScrollTop()!==r&&(this.setFocus([]),await Af(0),await this.focusNextPage(n,e))
    }
  }
  async focusPreviousPage(n, e, t=()=>0){
    let i;
    const r=t(), s=this.view.getScrollTop()+r;
    s===0?i=this.view.indexAt(s):i=this.view.indexAfter(s-1);
    const o=this.getFocus()[0];
    if(o!==i&&(o===void 0||o>=i)){
      const a=this.findNextIndex(i,!1,e);
      a>-1&&o!==a?this.setFocus([a],n):this.setFocus([i],n)
    }
    else{
      const a=s;
      this.view.setScrollTop(s-this.view.renderHeight-r),this.view.getScrollTop()+t()!==a&&(this.setFocus([]),await Af(0),await this.focusPreviousPage(n,e,t))
    }
  }
  focusLast(n, e){
    if(this.length===0)return;
    const t=this.findPreviousIndex(this.length-1, !1, e);
    t>-1&&this.setFocus([t], n)
  }
  focusFirst(n, e){
    this.focusNth(0, n, e)
  }
  focusNth(n, e, t){
    if(this.length===0)return;
    const i=this.findNextIndex(n, !1, t);
    i>-1&&this.setFocus([i], e)
  }
  findNextIndex(n, e=!1, t){
    for(let i=0;
    i<this.length;
    i++){
      if(n>=this.length&&!e)return-1;
      if(n=n%this.length,!t||t(this.element(n)))return n;
      n++
    }
    return-1
  }
  findPreviousIndex(n, e=!1, t){
    for(let i=0;
    i<this.length;
    i++){
      if(n<0&&!e)return-1;
      if(n=(this.length+n%this.length)%this.length,!t||t(this.element(n)))return n;
      n--
    }
    return-1
  }
  getFocus(){
    return this.focus.get()
  }
  getFocusedElements(){
    return this.getFocus().map(n=>this.view.element(n))
  }
  reveal(n, e, t=0){
    if(n<0||n>=this.length)throw new HSe(this.user, `Invalid index ${n}`);
    const i=this.view.getScrollTop(), r=this.view.elementTop(n), s=this.view.elementHeight(n);
    if(_1(e)){
      const o=s-this.view.renderHeight+t;
      this.view.setScrollTop(o*zA(e,0,1)+r-t)
    }
    else{
      const o=r+s,a=i+this.view.renderHeight;
      r<i+t&&o>=a||(r<i+t||o>=a&&s>=this.view.renderHeight?this.view.setScrollTop(r-t):o>=a&&this.view.setScrollTop(o-this.view.renderHeight))
    }
  }
  getRelativeTop(n, e=0){
    if(n<0||n>=this.length)throw new HSe(this.user, `Invalid index ${n}`);
    const t=this.view.getScrollTop(), i=this.view.elementTop(n), r=this.view.elementHeight(n);
    if(i<t+e||i+r>t+this.view.renderHeight)return null;
    const s=r-this.view.renderHeight+e;
    return Math.abs((t+e-i)/s)
  }
  isDOMFocused(){
    return zP(this.view.domNode)
  }
  getHTMLElement(){
    return this.view.domNode
  }
  getScrollableElement(){
    return this.view.scrollableElementDomNode
  }
  getElementID(n){
    return this.view.getElementDomId(n)
  }
  getElementTop(n){
    return this.view.elementTop(n)
  }
  style(n){
    this.styleController.style(n)
  }
  toListEvent({
    indexes:n, browserEvent:e
  }){
    return{
      indexes:n,elements:n.map(t=>this.view.element(t)),browserEvent:e
    }
  }
  _onFocusChange(){
    const n=this.focus.get();
    this.view.domNode.classList.toggle("element-focused", n.length>0), this.onDidChangeActiveDescendant()
  }
  onDidChangeActiveDescendant(){
    const n=this.focus.get();
    if(n.length>0){
      let e;
      this.accessibilityProvider?.getActiveDescendantId&&(e=this.accessibilityProvider.getActiveDescendantId(this.view.element(n[0]))),this.view.domNode.setAttribute("aria-activedescendant",e||this.view.getElementDomId(n[0]))
    }
    else this.view.domNode.removeAttribute("aria-activedescendant")
  }
  _onSelectionChange(){
    const n=this.selection.get();
    this.view.domNode.classList.toggle("selection-none", n.length===0), this.view.domNode.classList.toggle("selection-single", n.length===1), this.view.domNode.classList.toggle("selection-multiple", n.length>1)
  }
  dispose(){
    this._onDidDispose.fire(), this.disposables.dispose(), this._onDidDispose.dispose()
  }
}, __decorate([cl], JR.prototype, "onDidChangeFocus", null), __decorate([cl], JR.prototype, "onDidChangeSelection", null), __decorate([cl], JR.prototype, "onContextMenu", null), __decorate([cl], JR.prototype, "onKeyDown", null), __decorate([cl], JR.prototype, "onKeyUp", null), __decorate([cl], JR.prototype, "onKeyPress", null), __decorate([cl], JR.prototype, "onDidFocus", null), __decorate([cl], JR.prototype, "onDidBlur", null)
}
});
function FuA(n){
  return n.replace(v_h, (e, t)=>t?e:`\\${e}`)
}
function OuA(n){
  return n.replace(A_h, e=>`\\${e}`)
}
function zoe(n){
  return n.indexOf(b_h)===-1?n:n.replace(y_h, (e, t, i, r)=>i?e:t||r||"")
}
function ZIc(n){
  return n?n.replace(/\$\((.*?)\)/g, (e, t)=>` ${t} `).trim():""
}
function A3t(n){
  H3o.lastIndex=0;
  let e="";
  const t=[];
  let i=0;
  for(;
  ;
  ){
    const r=H3o.lastIndex, s=H3o.exec(n), o=n.substring(r, s?.index);
    if(o.length>0){
      e+=o;
      for(let a=0;
      a<o.length;
      a++)t.push(i)
    }
    if(!s)break;
    i+=s[0].length
  }
  return{
    text:e, iconOffsets:t
  }
}
function $3o(n, e, t=!1){
  const{
    text:i, iconOffsets:r
  }
  =e;
  if(!r||r.length===0)return CW(n, i, t);
  const s=BBe(i, " "), o=i.length-s.length, a=CW(n, s, t);
  if(a)for(const l of a){
    const u=r[l.start+o]+o;
    l.start+=u, l.end+=u
  }
  return a
}
var b_h, q3o, v_h, A_h, y_h, H3o, kW=
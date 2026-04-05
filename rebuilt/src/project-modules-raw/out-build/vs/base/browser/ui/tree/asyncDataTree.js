// Module: out-build/vs/base/browser/ui/tree/asyncDataTree.js
// Offset: 24920883 (bundle byte offset)
// Size: 22305 bytes

ZVe(), LAe(), wca(), zGl(), iNe(), vr(), qi(), Jr(), _s(), yn(), Ef(), rt(), Js(), Po(), Q_(), Vs(), Ht(), pgg=class MWb{
  get element(){
    return this.node.element.element
  }
  get children(){
    return this.node.children.map(e=>new MWb(e))
  }
  get depth(){
    return this.node.depth
  }
  get visibleChildrenCount(){
    return this.node.visibleChildrenCount
  }
  get visibleChildIndex(){
    return this.node.visibleChildIndex
  }
  get collapsible(){
    return this.node.collapsible
  }
  get collapsed(){
    return this.node.collapsed
  }
  get visible(){
    return this.node.visible
  }
  get filterData(){
    return this.node.filterData
  }
  constructor(e){
    this.node=e
  }
}, ggg=class{
  constructor(n, e, t){
    this.renderer=n, this.nodeMapper=e, this.onDidChangeTwistieState=t, this.renderedNodes=new Map, this.templateId=n.templateId
  }
  renderTemplate(n){
    return{
      templateData:this.renderer.renderTemplate(n)
    }
  }
  renderElement(n, e, t, i){
    this.renderer.renderElement(this.nodeMapper.map(n), e, t.templateData, i)
  }
  renderTwistie(n, e){
    return n.slow?(e.classList.add(...Qt.asClassNameArray(Be.treeItemLoading)), !0):(e.classList.remove(...Qt.asClassNameArray(Be.treeItemLoading)), !1)
  }
  disposeElement(n, e, t, i){
    this.renderer.disposeElement?.(this.nodeMapper.map(n), e, t.templateData, i)
  }
  disposeTemplate(n){
    this.renderer.disposeTemplate(n.templateData)
  }
  dispose(){
    this.renderedNodes.clear()
  }
}, fgg=class extends ove{
  set context(n){
    this.data.context=n
  }
  get context(){
    return this.data.context
  }
  constructor(n){
    super(n.elements.map(e=>e.element)), this.data=n
  }
}, bgg=class{
  constructor(n){
    this.dnd=n
  }
  getDragURI(n){
    return this.dnd.getDragURI(n.element)
  }
  getDragLabel(n, e){
    if(this.dnd.getDragLabel)return this.dnd.getDragLabel(n.map(t=>t.element), e)
  }
  onDragStart(n, e){
    this.dnd.onDragStart?.(YGl(n), e)
  }
  onDragOver(n, e, t, i, r, s=!0){
    return this.dnd.onDragOver(YGl(n), e&&e.element, t, i, r)
  }
  drop(n, e, t, i, r){
    this.dnd.drop(YGl(n), e&&e.element, t, i, r)
  }
  onDragEnd(n){
    this.dnd.onDragEnd?.(n)
  }
  dispose(){
    this.dnd.dispose()
  }
}, vgg=class extends HGl{
  constructor(n, e, t){
    super(e, t), this.findProvider=n, this.isFindSessionActive=!1
  }
  filter(n, e){
    const t=super.filter(n, e);
    if(!this.isFindSessionActive||this.findMode===nR.Highlight||!this.findProvider.isVisible)return t;
    const i=Spi(t)?t.visibility:t;
    return oCt(i)===0?0:this.findProvider.isVisible(n)?t:0
  }
}, Agg=class extends JGl{
  constructor(n, e, t, i, r){
    super(n, t, i, r), this.findProvider=e, this.filter=t, this.activeSession=!1, this.asyncWorkInProgress=!1, this.taskQueue=new L4(250), this.disposables.add($i(async()=>{
      this.activeSession&&await this.findProvider.endSession?.()
    }))
  }
  applyPattern(n){
    this.renderMessage(!1), this.activeTokenSource?.cancel(), this.activeTokenSource=new Wc, this.taskQueue.trigger(()=>this.applyPatternAsync())
  }
  async applyPatternAsync(){
    const n=this.activeTokenSource?.token;
    if(!n||n.isCancellationRequested)return;
    const e=this.pattern;
    if(e===""){
      this.activeSession&&(this.asyncWorkInProgress=!0,await this.deactivateFindSession(),this.asyncWorkInProgress=!1,n.isCancellationRequested||(this.filter.reset(),super.applyPattern("")));
      return
    }
    this.activeSession||this.activateFindSession(), this.asyncWorkInProgress=!0, this.activeFindMetadata=void 0;
    const t=await this.findProvider.find(e, {
      matchType:this.matchType,findMode:this.mode
    }, n);
    n.isCancellationRequested||t===void 0||(this.asyncWorkInProgress=!1, this.activeFindMetadata=t, this.filter.reset(), super.applyPattern(e), t.warningMessage&&this.renderMessage(!0, t.warningMessage))
  }
  activateFindSession(){
    this.activeSession=!0, this.filter.isFindSessionActive=!0, this.findProvider.startSession?.()
  }
  async deactivateFindSession(){
    this.activeSession=!1, this.filter.isFindSessionActive=!1, await this.findProvider.endSession?.()
  }
  render(){
    if(this.asyncWorkInProgress||!this.activeFindMetadata)return;
    const n=this.activeFindMetadata.matchCount===0&&this.pattern.length>0;
    this.renderMessage(n), this.pattern.length&&this.alertResults(this.activeFindMetadata.matchCount)
  }
  onDidToggleChange(n){
    this.toggles.set(n.id, n.isChecked), this.filter.findMode=this.mode, this.filter.findMatchType=this.matchType, this.placeholder=this.mode===nR.Filter?_(41, null):_(42, null), this.applyPattern(this.pattern)
  }
  shouldAllowFocus(n){
    return this.shouldFocusWhenNavigating(n)
  }
  shouldFocusWhenNavigating(n){
    if(!this.activeSession||!this.activeFindMetadata)return!0;
    const e=n.element?.element;
    return e&&this.activeFindMetadata.isMatch(e)?!0:!hz.isDefault(n.filterData)
  }
}, kq=class{
  get onDidScroll(){
    return this.tree.onDidScroll
  }
  get onDidChangeFocus(){
    return In.map(this.tree.onDidChangeFocus, hgg)
  }
  get onDidChangeSelection(){
    return In.map(this.tree.onDidChangeSelection, hgg)
  }
  get onKeyDown(){
    return this.tree.onKeyDown
  }
  get onMouseClick(){
    return In.map(this.tree.onMouseClick, Tca)
  }
  get onMouseDblClick(){
    return In.map(this.tree.onMouseDblClick, Tca)
  }
  get onContextMenu(){
    return In.map(this.tree.onContextMenu, L0A)
  }
  get onTap(){
    return In.map(this.tree.onTap, Tca)
  }
  get onPointer(){
    return In.map(this.tree.onPointer, Tca)
  }
  get onDidFocus(){
    return this.tree.onDidFocus
  }
  get onDidBlur(){
    return this.tree.onDidBlur
  }
  get onDidChangeModel(){
    return this.tree.onDidChangeModel
  }
  get onDidChangeCollapseState(){
    return this.tree.onDidChangeCollapseState
  }
  get onDidUpdateOptions(){
    return this.tree.onDidUpdateOptions
  }
  get onDidChangeStickyScrollFocused(){
    return this.tree.onDidChangeStickyScrollFocused
  }
  get findMode(){
    return this.findController?this.findController.mode:this.tree.findMode
  }
  set findMode(n){
    this.findController?this.findController.mode=n:this.tree.findMode=n
  }
  get findMatchType(){
    return this.findController?this.findController.matchType:this.tree.findMatchType
  }
  set findMatchType(n){
    this.findController?this.findController.matchType=n:this.tree.findMatchType=n
  }
  get expandOnlyOnTwistieClick(){
    if(typeof this.tree.expandOnlyOnTwistieClick=="boolean")return this.tree.expandOnlyOnTwistieClick;
    const n=this.tree.expandOnlyOnTwistieClick;
    return e=>n(this.nodes.get(e===this.root.element?null:e)||null)
  }
  get onDidDispose(){
    return this.tree.onDidDispose
  }
  constructor(n, e, t, i, r, s={
    
  }){
    this.user=n, this.dataSource=r, this.nodes=new Map, this.subTreeRefreshPromises=new Map, this.refreshPromises=new Map, this._onDidRender=new Qe, this._onDidChangeNodeSlowState=new Qe, this.nodeMapper=new yca(l=>new pgg(l)), this.disposables=new Ut, this.identityProvider=s.identityProvider, this.autoExpandSingleChildren=typeof s.autoExpandSingleChildren>"u"?!1:s.autoExpandSingleChildren, this.sorter=s.sorter, this.getDefaultCollapseState=l=>s.collapseByDefault?s.collapseByDefault(l)?Cq.PreserveOrCollapsed:Cq.PreserveOrExpanded:void 0;
    let o=!1, a;
    if(s.findProvider&&(s.findWidgetEnabled??!0)&&s.keyboardNavigationLabelProvider&&s.contextViewProvider&&(o=!0, a=new vgg(s.findProvider, s.keyboardNavigationLabelProvider, s.filter)), this.tree=this.createTree(n, e, t, i, {
      ...s,findWidgetEnabled:!o,filter:a??s.filter
    }), this.root=VGl({
      element:void 0,parent:null,hasChildren:!0,defaultCollapseState:void 0
    }), this.identityProvider&&(this.root={
      ...this.root,id:null
    }), this.nodes.set(null, this.root), this.tree.onDidChangeCollapseState(this._onDidChangeCollapseState, this, this.disposables), o){
      const l={
        styles:s.findWidgetStyles,showNotFoundMessage:s.showNotFoundMessage,defaultFindMatchType:s.defaultFindMatchType,defaultFindMode:s.defaultFindMode
      };
      this.findController=this.disposables.add(new Agg(this.tree,s.findProvider,a,this.tree.options.contextViewProvider,l)),this.focusNavigationFilter=u=>this.findController.shouldFocusWhenNavigating(u),this.onDidChangeFindOpenState=this.findController.onDidChangeOpenState,this.onDidChangeFindMode=this.findController.onDidChangeMode,this.onDidChangeFindMatchType=this.findController.onDidChangeMatchType
    }
    else this.onDidChangeFindOpenState=this.tree.onDidChangeFindOpenState, this.onDidChangeFindMode=this.tree.onDidChangeFindMode, this.onDidChangeFindMatchType=this.tree.onDidChangeFindMatchType
  }
  createTree(n, e, t, i, r){
    const s=new Cca(t), o=i.map(l=>new ggg(l, this.nodeMapper, this._onDidChangeNodeSlowState.event)), a=mgg(r)||{
      
    };
    return new Hne(n, e, s, o, a)
  }
  updateOptions(n={
    
  }){
    this.findController&&(n.defaultFindMode!==void 0&&(this.findController.mode=n.defaultFindMode), n.defaultFindMatchType!==void 0&&(this.findController.matchType=n.defaultFindMatchType)), this.tree.updateOptions(n)
  }
  get options(){
    return this.tree.options
  }
  getHTMLElement(){
    return this.tree.getHTMLElement()
  }
  get contentHeight(){
    return this.tree.contentHeight
  }
  get contentWidth(){
    return this.tree.contentWidth
  }
  get onDidChangeContentHeight(){
    return this.tree.onDidChangeContentHeight
  }
  get onDidChangeContentWidth(){
    return this.tree.onDidChangeContentWidth
  }
  get scrollTop(){
    return this.tree.scrollTop
  }
  set scrollTop(n){
    this.tree.scrollTop=n
  }
  get scrollLeft(){
    return this.tree.scrollLeft
  }
  set scrollLeft(n){
    this.tree.scrollLeft=n
  }
  get scrollHeight(){
    return this.tree.scrollHeight
  }
  get renderHeight(){
    return this.tree.renderHeight
  }
  get lastVisibleElement(){
    return this.tree.lastVisibleElement.element
  }
  get ariaLabel(){
    return this.tree.ariaLabel
  }
  set ariaLabel(n){
    this.tree.ariaLabel=n
  }
  domFocus(){
    this.tree.domFocus()
  }
  isDOMFocused(){
    return this.tree.isDOMFocused()
  }
  navigate(n){
    let e;
    return n&&(e=this.getDataNode(n)), new Cgg(this.tree.navigate(e))
  }
  layout(n, e){
    this.tree.layout(n, e)
  }
  style(n){
    this.tree.style(n)
  }
  getInput(){
    return this.root.element
  }
  async setInput(n, e){
    this.refreshPromises.forEach(i=>i.cancel()), this.refreshPromises.clear(), this.root.element=n;
    const t=e&&{
      viewState:e,focus:[],selection:[]
    };
    await this._updateChildren(n, !0, !1, t), t&&(this.tree.setFocus(t.focus), this.tree.setSelection(t.selection)), e&&typeof e.scrollTop=="number"&&(this.scrollTop=e.scrollTop)
  }
  async updateChildren(n=this.root.element, e=!0, t=!1, i){
    await this._updateChildren(n, e, t, void 0, i)
  }
  async _updateChildren(n=this.root.element, e=!0, t=!1, i, r){
    if(typeof this.root.element>"u")throw new Sq(this.user, "Tree input not set");
    this.root.refreshPromise&&(await this.root.refreshPromise, await In.toPromise(this._onDidRender.event));
    const s=this.getDataNode(n);
    if(await this.refreshAndRenderNode(s, e, i, r), t)try{
      this.tree.rerender(s)
    }
    catch{
      
    }
  }
  resort(n=this.root.element, e=!0){
    this.tree.resort(this.getDataNode(n), e)
  }
  hasNode(n){
    return n===this.root.element||this.nodes.has(n)
  }
  rerender(n){
    if(n===void 0||n===this.root.element){
      this.tree.rerender();
      return
    }
    const e=this.getDataNode(n);
    this.tree.rerender(e)
  }
  updateElementHeight(n, e){
    const t=this.getDataNode(n);
    this.tree.updateElementHeight(t, e)
  }
  updateWidth(n){
    const e=this.getDataNode(n);
    this.tree.updateWidth(e)
  }
  getNode(n=this.root.element){
    const e=this.getDataNode(n), t=this.tree.getNode(e===this.root?null:e);
    return this.nodeMapper.map(t)
  }
  collapse(n, e=!1){
    const t=this.getDataNode(n);
    return this.tree.collapse(t===this.root?null:t, e)
  }
  async expand(n, e=!1){
    if(typeof this.root.element>"u")throw new Sq(this.user, "Tree input not set");
    this.root.refreshPromise&&(await this.root.refreshPromise, await In.toPromise(this._onDidRender.event));
    const t=this.getDataNode(n);
    if(this.tree.hasElement(t)&&!this.tree.isCollapsible(t)||(t.refreshPromise&&(await this.root.refreshPromise, await In.toPromise(this._onDidRender.event)), t!==this.root&&!t.refreshPromise&&!this.tree.isCollapsed(t)))return!1;
    const i=this.tree.expand(t===this.root?null:t, e);
    return t.refreshPromise&&(await this.root.refreshPromise, await In.toPromise(this._onDidRender.event)), i
  }
  toggleCollapsed(n, e=!1){
    return this.tree.toggleCollapsed(this.getDataNode(n), e)
  }
  expandAll(){
    this.tree.expandAll()
  }
  async expandTo(n){
    if(!this.dataSource.getParent)throw new Error("Can't expand to element without getParent method");
    const e=[];
    for(;
    !this.hasNode(n);
    )n=this.dataSource.getParent(n), n!==this.root.element&&e.push(n);
    for(const t of bl.reverse(e))await this.expand(t);
    this.tree.expandTo(this.getDataNode(n))
  }
  collapseAll(){
    this.tree.collapseAll()
  }
  isCollapsible(n){
    return this.tree.isCollapsible(this.getDataNode(n))
  }
  isCollapsed(n){
    return this.tree.isCollapsed(this.getDataNode(n))
  }
  triggerTypeNavigation(){
    this.tree.triggerTypeNavigation()
  }
  openFind(){
    this.findController?this.findController.open():this.tree.openFind()
  }
  closeFind(){
    this.findController?this.findController.close():this.tree.closeFind()
  }
  refilter(){
    this.tree.refilter()
  }
  setAnchor(n){
    this.tree.setAnchor(typeof n>"u"?void 0:this.getDataNode(n))
  }
  getAnchor(){
    return this.tree.getAnchor()?.element
  }
  setSelection(n, e){
    const t=n.map(i=>this.getDataNode(i));
    this.tree.setSelection(t, e)
  }
  getSelection(){
    return this.tree.getSelection().map(e=>e.element)
  }
  setFocus(n, e){
    const t=n.map(i=>this.getDataNode(i));
    this.tree.setFocus(t, e)
  }
  focusNext(n=1, e=!1, t){
    this.tree.focusNext(n, e, t, this.focusNavigationFilter)
  }
  focusPrevious(n=1, e=!1, t){
    this.tree.focusPrevious(n, e, t, this.focusNavigationFilter)
  }
  focusNextPage(n){
    return this.tree.focusNextPage(n, this.focusNavigationFilter)
  }
  focusPreviousPage(n){
    return this.tree.focusPreviousPage(n, this.focusNavigationFilter)
  }
  focusLast(n){
    this.tree.focusLast(n, this.focusNavigationFilter)
  }
  focusFirst(n){
    this.tree.focusFirst(n, this.focusNavigationFilter)
  }
  getFocus(){
    return this.tree.getFocus().map(e=>e.element)
  }
  getStickyScrollFocus(){
    return this.tree.getStickyScrollFocus().map(e=>e.element)
  }
  getFocusedPart(){
    return this.tree.getFocusedPart()
  }
  reveal(n, e){
    this.tree.reveal(this.getDataNode(n), e)
  }
  getRelativeTop(n){
    return this.tree.getRelativeTop(this.getDataNode(n))
  }
  getParentElement(n){
    const e=this.tree.getParentElement(this.getDataNode(n));
    return e&&e.element
  }
  getFirstElementChild(n=this.root.element){
    const e=this.getDataNode(n), t=this.tree.getFirstElementChild(e===this.root?null:e);
    return t&&t.element
  }
  getDataNode(n){
    const e=this.nodes.get(n===this.root.element?null:n);
    if(!e){
      const t=this.identityProvider?.getId(n).toString();
      throw new Sq(this.user,`Data tree node not found${t?`: ${
        t
      }
      `:""}`)
    }
    return e
  }
  async refreshAndRenderNode(n, e, t, i){
    this.disposables.isDisposed||(await this.refreshNode(n, e, t), !this.disposables.isDisposed&&this.render(n, t, i))
  }
  async refreshNode(n, e, t){
    let i;
    if(this.subTreeRefreshPromises.forEach((r, s)=>{
      !i&&P0A(s,n)&&(i=r.then(()=>this.refreshNode(n,e,t)))
    }), i)return i;
    if(n!==this.root&&this.tree.getNode(n).collapsed){
      n.hasChildren=!!this.dataSource.hasChildren(n.element),n.stale=!0,this.setChildren(n,[],e,t);
      return
    }
    return this.doRefreshSubTree(n, e, t)
  }
  async doRefreshSubTree(n, e, t){
    let i;
    n.refreshPromise=new Promise(r=>i=r), this.subTreeRefreshPromises.set(n, n.refreshPromise), n.refreshPromise.finally(()=>{
      n.refreshPromise=void 0,this.subTreeRefreshPromises.delete(n)
    });
    try{
      const r=await this.doRefreshNode(n,e,t);
      n.stale=!1,await ib.settled(r.map(s=>this.doRefreshSubTree(s,e,t)))
    }
    finally{
      i()
    }
  }
  async doRefreshNode(n, e, t){
    n.hasChildren=!!this.dataSource.hasChildren(n.element);
    let i;
    if(!n.hasChildren)i=Promise.resolve(bl.empty());
    else{
      const r=this.doGetChildren(n);
      if(s0c(r))i=Promise.resolve(r);
      else{
        const s=Af(800);
        s.then(()=>{
          n.slow=!0,this._onDidChangeNodeSlowState.fire(n)
        },o=>null),i=r.finally(()=>s.cancel())
      }
    }
    try{
      const r=await i;
      return this.setChildren(n,r,e,t)
    }
    catch(r){
      if(n!==this.root&&this.tree.hasElement(n)&&this.tree.collapse(n),bf(r))return[];
      throw r
    }
    finally{
      n.slow&&(n.slow=!1,this._onDidChangeNodeSlowState.fire(n))
    }
  }
  doGetChildren(n){
    let e=this.refreshPromises.get(n);
    if(e)return e;
    const t=this.dataSource.getChildren(n.element);
    return s0c(t)?this.processChildren(t):(e=dw(async()=>this.processChildren(await t)), this.refreshPromises.set(n, e), e.finally(()=>{
      this.refreshPromises.delete(n)
    }))
  }
  _onDidChangeCollapseState({
    node:n, deep:e
  }){
    n.element!==null&&!n.collapsed&&n.element.stale&&(e?this.collapse(n.element.element):this.refreshAndRenderNode(n.element, !1).catch(Gc))
  }
  setChildren(n, e, t, i){
    const r=[...e];
    if(n.children.length===0&&r.length===0)return[];
    const s=new Map, o=new Map;
    for(const u of n.children)s.set(u.element, u), this.identityProvider&&o.set(u.id, {
      node:u,collapsed:this.tree.hasElement(u)&&this.tree.isCollapsed(u)
    });
    const a=[], l=r.map(u=>{
      const d=!!this.dataSource.hasChildren(u);
      if(!this.identityProvider){
        const f=VGl({
          element:u,parent:n,hasChildren:d,defaultCollapseState:this.getDefaultCollapseState(u)
        });
        return d&&f.defaultCollapseState===Cq.PreserveOrExpanded&&a.push(f),f
      }
      const m=this.identityProvider.getId(u).toString(),p=o.get(m);
      if(p){
        const f=p.node;
        return s.delete(f.element),this.nodes.delete(f.element),this.nodes.set(u,f),f.element=u,f.hasChildren=d,t?p.collapsed?(f.children.forEach(A=>ZGl(A,w=>this.nodes.delete(w.element))),f.children.splice(0,f.children.length),f.stale=!0):a.push(f):d&&!p.collapsed&&a.push(f),f
      }
      const g=VGl({
        element:u,parent:n,id:m,hasChildren:d,defaultCollapseState:this.getDefaultCollapseState(u)
      });
      return i&&i.viewState.focus&&i.viewState.focus.indexOf(m)>-1&&i.focus.push(g),i&&i.viewState.selection&&i.viewState.selection.indexOf(m)>-1&&i.selection.push(g),(i&&i.viewState.expanded&&i.viewState.expanded.indexOf(m)>-1||d&&g.defaultCollapseState===Cq.PreserveOrExpanded)&&a.push(g),g
    });
    for(const u of s.values())ZGl(u, d=>this.nodes.delete(d.element));
    for(const u of l)this.nodes.set(u.element, u);
    return MMo(n.children, 0, n.children.length, l), n!==this.root&&this.autoExpandSingleChildren&&l.length===1&&a.length===0&&(l[0].forceExpanded=!0, a.push(l[0])), a
  }
  render(n, e, t){
    const i=n.children.map(s=>this.asTreeElement(s, e)), r=t&&{
      ...t,diffIdentityProvider:t.diffIdentityProvider&&{
        getId(s){
          return t.diffIdentityProvider.getId(s.element)
        }
      }
    };
    this.tree.setChildren(n===this.root?null:n, i, r), n!==this.root&&this.tree.setCollapsible(n, n.hasChildren), this._onDidRender.fire()
  }
  asTreeElement(n, e){
    if(n.stale)return{
      element:n,collapsible:n.hasChildren,collapsed:!0
    };
    let t;
    return e&&e.viewState.expanded&&n.id&&e.viewState.expanded.indexOf(n.id)>-1?t=!1:n.forceExpanded?(t=!1, n.forceExpanded=!1):t=n.defaultCollapseState, {
      element:n,children:n.hasChildren?bl.map(n.children,i=>this.asTreeElement(i,e)):[],collapsible:n.hasChildren,collapsed:t
    }
  }
  processChildren(n){
    return this.sorter&&(n=[...n].sort(this.sorter.compare.bind(this.sorter))), n
  }
  getViewState(){
    if(!this.identityProvider)throw new Sq(this.user, "Can't get tree view state without an identity provider");
    const n=o=>this.identityProvider.getId(o).toString(), e=this.getFocus().map(n), t=this.getSelection().map(n), i=[], r=this.tree.getNode(), s=[r];
    for(;
    s.length>0;
    ){
      const o=s.pop();
      o!==r&&o.collapsible&&!o.collapsed&&i.push(n(o.element.element)),NMo(s,s.length,o.children)
    }
    return{
      focus:e,selection:t,expanded:i,scrollTop:this.scrollTop
    }
  }
  dispose(){
    this.disposables.dispose(), this.tree.dispose()
  }
}, ygg=class FWb{
  get element(){
    return{
      elements:this.node.element.elements.map(e=>e.element),incompressible:this.node.element.incompressible
    }
  }
  get children(){
    return this.node.children.map(e=>new FWb(e))
  }
  get depth(){
    return this.node.depth
  }
  get visibleChildrenCount(){
    return this.node.visibleChildrenCount
  }
  get visibleChildIndex(){
    return this.node.visibleChildIndex
  }
  get collapsible(){
    return this.node.collapsible
  }
  get collapsed(){
    return this.node.collapsed
  }
  get visible(){
    return this.node.visible
  }
  get filterData(){
    return this.node.filterData
  }
  constructor(e){
    this.node=e
  }
}, wgg=class{
  constructor(n, e, t, i){
    this.renderer=n, this.nodeMapper=e, this.compressibleNodeMapperProvider=t, this.onDidChangeTwistieState=i, this.renderedNodes=new Map, this.disposables=[], this.templateId=n.templateId
  }
  renderTemplate(n){
    return{
      templateData:this.renderer.renderTemplate(n)
    }
  }
  renderElement(n, e, t, i){
    this.renderer.renderElement(this.nodeMapper.map(n), e, t.templateData, i)
  }
  renderCompressedElements(n, e, t, i){
    this.renderer.renderCompressedElements(this.compressibleNodeMapperProvider().map(n), e, t.templateData, i)
  }
  renderTwistie(n, e){
    return n.slow?(e.classList.add(...Qt.asClassNameArray(Be.treeItemLoading)), !0):(e.classList.remove(...Qt.asClassNameArray(Be.treeItemLoading)), !1)
  }
  disposeElement(n, e, t, i){
    this.renderer.disposeElement?.(this.nodeMapper.map(n), e, t.templateData, i)
  }
  disposeCompressedElements(n, e, t, i){
    this.renderer.disposeCompressedElements?.(this.compressibleNodeMapperProvider().map(n), e, t.templateData, i)
  }
  disposeTemplate(n){
    this.renderer.disposeTemplate(n.templateData)
  }
  dispose(){
    this.renderedNodes.clear(), this.disposables=Bo(this.disposables)
  }
}, _gg=class extends kq{
  constructor(n, e, t, i, r, s, o={
    
  }){
    super(n, e, t, r, s, o), this.compressionDelegate=i, this.compressibleNodeMapper=new yca(a=>new ygg(a)), this.filter=o.filter
  }
  getCompressedTreeNode(n){
    const e=this.getDataNode(n);
    return this.tree.getCompressedTreeNode(e).element
  }
  createTree(n, e, t, i, r){
    const s=new Cca(t), o=i.map(l=>new wgg(l, this.nodeMapper, ()=>this.compressibleNodeMapper, this._onDidChangeNodeSlowState.event)), a=N0A(r)||{
      
    };
    return new jGl(n, e, s, o, a)
  }
  asTreeElement(n, e){
    return{
      incompressible:this.compressionDelegate.isIncompressible(n.element),...super.asTreeElement(n,e)
    }
  }
  getViewState(){
    if(!this.identityProvider)throw new Sq(this.user, "Can't get tree view state without an identity provider");
    const n=o=>this.identityProvider.getId(o).toString(), e=this.getFocus().map(n), t=this.getSelection().map(n), i=[], r=this.tree.getCompressedTreeNode(), s=[r];
    for(;
    s.length>0;
    ){
      const o=s.pop();
      if(o!==r&&o.collapsible&&!o.collapsed)for(const a of o.element.elements)i.push(n(a.element));
      s.push(...o.children)
    }
    return{
      focus:e,selection:t,expanded:i,scrollTop:this.scrollTop
    }
  }
  render(n, e, t){
    if(!this.identityProvider)return super.render(n, e);
    const i=p=>this.identityProvider.getId(p).toString(), r=p=>{
      const g=new Set;
      for(const f of p){
        const A=this.tree.getCompressedTreeNode(f===this.root?null:f);
        if(A.element)for(const w of A.element.elements)g.add(i(w.element))
      }
      return g
    }, s=r(this.tree.getSelection()), o=r(this.tree.getFocus());
    super.render(n, e, t);
    const a=this.getSelection();
    let l=!1;
    const u=this.getFocus();
    let d=!1;
    const m=p=>{
      const g=p.element;
      if(g)for(let f=0;
      f<g.elements.length;
      f++){
        const A=i(g.elements[f].element),w=g.elements[g.elements.length-1].element;
        s.has(A)&&a.indexOf(w)===-1&&(a.push(w),l=!0),o.has(A)&&u.indexOf(w)===-1&&(u.push(w),d=!0)
      }
      p.children.forEach(m)
    };
    m(this.tree.getCompressedTreeNode(n===this.root?null:n)), l&&this.setSelection(a), d&&this.setFocus(u)
  }
  processChildren(n){
    return this.filter&&(n=bl.filter(n, e=>{
      const t=this.filter.filter(e,1),i=M0A(t);
      if(i===2)throw new Error("Recursive tree visibility not supported in async data compressed trees");
      return i===1
    })), super.processChildren(n)
  }
  navigate(n){
    return super.navigate(n)
  }
}, Cgg=class{
  constructor(n){
    this.navigator=n
  }
  current(){
    const n=this.navigator.current();
    return n===null?null:n.element
  }
  previous(){
    return this.navigator.previous(), this.current()
  }
  first(){
    return this.navigator.first(), this.current()
  }
  last(){
    return this.navigator.last(), this.current()
  }
  next(){
    return this.navigator.next(), this.current()
  }
}
}
}), lme, Sgg=
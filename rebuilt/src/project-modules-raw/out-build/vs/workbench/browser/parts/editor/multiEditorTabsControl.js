// Module: out-build/vs/workbench/browser/parts/editor/multiEditorTabsControl.js
// Offset: 32314909 (bundle byte offset)
// Size: 50162 bytes

Ay(), ri(), Tb(), h0(), Dx(), Ov(), sbt(), zI(), Vs(), vr(), ml(), _s(), iL(), rt(), cu(), np(), Hl(), _r(), Yr(), Jr(), Js(), lgi(), Xun(), Ht(), dr(), hs(), Ei(), si(), pl(), sN(), wI(), Wt(), ka(), So(), Kl(), kr(), Nl(), qI(), Io(), Mm(), Nu(), eNf(), ky(), z0i(), r8(), V0i(), n7e(), V3(), a7e(), J0(), cp(), of(), Efn(), od(), AD(), ss(), Wu(), wm(), zp(), _g(), Hit(), A8(), ox(), zF(), Ffn(), exe(), L0i(), l5(), J1a(), Vcy(), AOf=160, Ufn=class extends Ofn{
  static{
    ipe=this
  }
  static{
    this.SCROLLBAR_SIZES={
      default:3,large:10
    }
  }
  static{
    this.TAB_WIDTH={
      compact:38,shrink:80,fit:120
    }
  }
  static{
    this.DRAG_OVER_OPEN_TAB_THRESHOLD=1500
  }
  static{
    this.MOUSE_WHEEL_EVENT_THRESHOLD=150
  }
  static{
    this.MOUSE_WHEEL_DISTANCE_THRESHOLD=1.5
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g, f, A, w, C, x, I, B, R, N, M, O, $){
    super(e, t, i, r, s, o, a, l, u, d, m, p, w, C, I), this.editorService=g, this.pathService=f, this.treeViewsDragAndDropService=A, this.commandService=x, this.experimentService=I, this.layoutService=B, this.configurationService=R, this.storageService=N, this.composerService=M, this.composerDataService=O, this.backgroundComposerService=$, this.fgComposerTransfer=GB.getInstance(), this.bcTransfer=GB.getInstance(), this.closeEditorAction=this._register(this.instantiationService.createInstance(wfn, wfn.ID, wfn.LABEL)), this.unpinEditorAction=this._register(this.instantiationService.createInstance(Yqe, Yqe.ID, Yqe.LABEL)), this.tabResourceLabels=this._register(this.instantiationService.createInstance(c5, p1t)), this.tabLabels=[], this.tabActionBars=[], this.tabDisposables=[], this.dimensions={
      container:Lu.None,available:Lu.None
    }, this.layoutScheduler=this._register(new uo), this.path=Sc?iE:Rm, this.lastMouseWheelEventTime=0, this.isMouseOverTabs=!1, this.editorGroupPosition=H1a, this.updateEditorLabelScheduler=this._register(new Hu(()=>this.doUpdateEditorLabels(), 0)), (async()=>this.path=await this.pathService.path)(), this._register(this.tabResourceLabels.onDidChangeDecorations(()=>this.doHandleDecorationsChange()));
    const H=()=>{
      this.updateEditorGroupPosition(),this.updateLayoutActionsContainerVisibility(),this.tabsAndActionsContainer&&Fs&&this.updateTabsContainerTrafficLightsSpacing(),this.updateTabsContainerBorderRight(),this.layout(this.dimensions)
    }, W=new Set([Tce.key, ONe, spn.key]);
    this._register(l.onDidChangeContext(z=>{
      z.affectsSome(W)&&H(),z.affectsSome(new Set([opn.key]))&&As(this.parent).requestAnimationFrame(()=>{
        H()
      })
    })), this._register(this.layoutService.onDidChangePartVisibility(()=>{
      H()
    })), this._register(this.configurationService.onDidChangeConfiguration(z=>{
      z.affectsConfiguration("workbench.sideBar.location")&&H()
    })), this.editorGroupsService=this.instantiationService.invokeFunction(z=>z.get(da)), this._register(this.editorGroupsService.onDidAddGroup(()=>{
      H()
    })), this._register(this.editorGroupsService.onDidRemoveGroup(()=>{
      H()
    })), this._register(this.editorGroupsService.onDidMoveGroup(()=>{
      H()
    })), this._register(this.editorService.onDidVisibleEditorsChange(()=>{
      H()
    })), this._register(this.experimentService.onDidChangeGates(z=>{
      (!z.changedGates||z.changedGates.has("chat_editor_group_enabled"))&&H()
    })), queueMicrotask(()=>{
      H()
    })
  }
  create(e){
    return super.create(e), this.titleContainer=e, this.tabsAndActionsContainer=Ct(".tabs-and-actions-container"), this.titleContainer.appendChild(this.tabsAndActionsContainer), this.createLeftActionsContainer(this.tabsAndActionsContainer), this.tabsContainer=Ct(".tabs-container", {
      role:"tablist",draggable:!0
    }), this._register(E1.addTarget(this.tabsContainer)), this.tabSizingFixedDisposables=this._register(new Ut), this.updateTabSizing(!1), this.tabsScrollbar=this.createTabsScrollbar(this.tabsContainer), this.tabsAndActionsContainer.appendChild(this.tabsScrollbar.getDomNode()), Fs&&this._register(boe(()=>{
      this.tabsAndActionsContainer&&this.updateTabsContainerTrafficLightsSpacing()
    })), this.registerTabsContainerListeners(this.tabsContainer, this.tabsScrollbar), this.createEditorActionsToolBar(this.tabsAndActionsContainer, ["editor-actions"]), this.createLayoutActionsContainer(this.tabsAndActionsContainer), this.updateTabsControlVisibility(), this.tabsAndActionsContainer
  }
  getLayoutActionsContainer(){
    return this.layoutActionsContainer
  }
  getLeftActionsContainer(){
    return this.leftActionsContainer
  }
  isNoTitlebarLayoutActive(){
    return Jit(this.contextKeyService)
  }
  getEditorActionsToolbarWidth(){
    const e=this.editorActionsToolbarContainer?.getBoundingClientRect().width??0;
    if(Number.isFinite(e)&&e>0)return e;
    const t=this.editorActionsToolbarContainer?.offsetWidth??0;
    return Number.isFinite(t)&&t>0?t:AOf
  }
  updateLayoutActionsContainerVisibility(){
    !this.layoutActionsContainer||!this.tabsAndActionsContainer||!this.contextKeyService||!this.tabsScrollbar||(this.layoutActionsResizeObserver||(this.layoutActionsResizeObserver=vOf({
      layoutActionsContainer:this.layoutActionsContainer,onWidthChange:()=>this.layout(this.dimensions)
    })), this.updateTabsContainerTrafficLightsSpacing())
  }
  updateEditorGroupPosition(){
    this.editorGroupPosition=bOf(this.instantiationService, this.groupView)
  }
  getLayoutPositioningState(){
    return wAu({
      contextKeyService:this.contextKeyService,layoutService:this.layoutService,storageService:this.storageService,configurationService:this.configurationService,experimentService:this.experimentService,editorGroupsContainer:this.editorGroupsService.mainPart
    })
  }
  isInsideAuxiliaryBar(){
    return this.parent.closest(".part.auxiliarybar")!==null
  }
  updateTabsContainerTrafficLightsSpacing(){
    const e=this.tabsAndActionsContainer;
    if(!e?.style)return;
    const t=gOf(e, {
      contextKeyService:this.contextKeyService,layoutService:this.layoutService,storageService:this.storageService,configurationService:this.configurationService,experimentService:this.experimentService,editorGroupsContainer:this.editorGroupsService.mainPart
    }), i=t!==void 0&&t>0&&this.editorGroupPosition.isTopMost&&this.editorGroupPosition.isLeftMost;
    i?e.style.setProperty("padding-left", `${t}px`, "important"):e.style.removeProperty("padding-left"), e.classList.toggle("tabs-border-left", i)
  }
  updateSingleTabClass(){
    const e=this.tabsAndActionsContainer;
    e&&e.classList.toggle("single-tab", this.tabsModel.count===1)
  }
  updateTabsContainerBorderRight(){
    const e=this.tabsContainer;
    if(!e)return;
    let t=!1;
    if(this.groupsView.partOptions.editorActionsLocation!=="hidden"){
      const i=this.groupsView.partOptions.wrapTabs,r=this.tabsScrollbar?.getScrollDimensions(),s=r?r.scrollWidth>r.width:!1;
      if(!i)s&&(t=!0);
      else if(!(this.tabsAndActionsContainer?.classList.contains("wrapping")??!1)&&!s)t=!1;
      else{
        const a=this.getLayoutPositioningState();
        t=this.editorGroupPosition.isTopMost&&this.editorGroupPosition.isRightMost&&a.noTitlebarLayoutEnabled&&a.isRightEdgeEmpty||s
      }
    }
    if(t){
      const i=this.getColor(r_i)||this.getColor(Du);
      e.style.borderRight=i?`1px solid ${i}`:""
    }
    else e.style.borderRight=""
  }
  createTabsScrollbar(e){
    const t=this._register(new a3o(e, {
      horizontal:1,horizontalScrollbarSize:this.getTabsScrollbarSizing(),vertical:2,scrollYToX:!0,useShadows:!1
    }));
    return this._register(t.onScroll(i=>{
      i.scrollLeftChanged&&(e.scrollLeft=i.scrollLeft),(i.scrollWidthChanged||i.widthChanged)&&this.updateTabsContainerBorderRight()
    })), t
  }
  updateTabsScrollbarSizing(){
    this.tabsScrollbar?.updateOptions({
      horizontalScrollbarSize:this.getTabsScrollbarSizing()
    })
  }
  updateTabSizing(e){
    const[t, i]=dde(this.tabsContainer, this.tabSizingFixedDisposables);
    i.clear();
    const r=this.groupsView.partOptions;
    r.tabSizing==="fixed"?(t.style.setProperty("--tab-sizing-fixed-min-width", `${r.tabSizingFixedMinWidth}px`), t.style.setProperty("--tab-sizing-fixed-max-width", `${r.tabSizingFixedMaxWidth}px`), i.add(ei(t, ir.MOUSE_ENTER, ()=>{
      this.isMouseOverTabs=!0
    })), i.add(ei(t, ir.MOUSE_LEAVE, ()=>{
      this.isMouseOverTabs=!1,this.updateTabsFixedWidth(!1)
    }))):e&&(t.style.removeProperty("--tab-sizing-fixed-min-width"), t.style.removeProperty("--tab-sizing-fixed-max-width"), this.updateTabsFixedWidth(!1))
  }
  updateTabsFixedWidth(e){
    this.forEachTab((t, i, r)=>{
      if(e){
        const{
          width:s
        }
        =r.getBoundingClientRect();
        r.style.setProperty("--tab-sizing-current-width",`${s}px`)
      }
      else r.style.removeProperty("--tab-sizing-current-width")
    })
  }
  getTabsScrollbarSizing(){
    return this.groupsView.partOptions.titleScrollbarSizing!=="large"?ipe.SCROLLBAR_SIZES.default:ipe.SCROLLBAR_SIZES.large
  }
  registerTabsContainerListeners(e, t){
    this._register(ei(e, ir.SCROLL, ()=>{
      e.classList.contains("scroll")&&t.setScrollPosition({
        scrollLeft:e.scrollLeft
      })
    }));
    for(const o of[MA.Tap, ir.DBLCLICK])this._register(ei(e, o, a=>{
      if(o===ir.DBLCLICK){
        if(a.target!==e)return
      }
      else if(a.tapCount!==2||a.initialTarget!==e)return;
      if(zu.stop(a),this.tabsModel.activeEditor?.typeId===h3){
        this.commandService.executeCommand(HZ,{
          targetGroup:this.groupView,source:"composer_header"
        });
        return
      }
      this.editorService.openEditor({
        resource:void 0,options:{
          pinned:!0,index:this.groupView.count,override:G0.id
        }
      },this.groupView.id)
    }));
    this._register(ei(e, ir.MOUSE_DOWN, o=>{
      o.button===1&&o.preventDefault()
    })), xv&&this._register(ei(e, ir.MOUSE_UP, o=>{
      o.button===1&&o.preventDefault()
    }));
    let i, r=!1;
    this._register(new PH(e, {
      onDragStart:o=>{
        r=this.onGroupDragStart(o,e)
      },onDrag:o=>{
        i=o
      },onDragEnter:o=>{
        if(e.classList.add("scroll"),o.target!==e){
          this.updateDropBlockedFeedback(e,!1);
          return
        }
        if(!this.isSupportedDropTransfer(o)){
          o.dataTransfer&&(o.dataTransfer.dropEffect="none");
          const a=this.isDropBlockedForChatEditorGroup(o);
          this.updateDropBlockedFeedback(e,a);
          return
        }
        this.editorTransfer.hasData(RT.prototype)||o.dataTransfer&&(o.dataTransfer.dropEffect="copy"),this.updateDropFeedback(e,!0,o),this.updateDropBlockedFeedback(e,!1)
      },onDragOver:o=>{
        this.updateDropBlockedFeedback(e,!this.isSupportedDropTransfer(o)&&this.isDropBlockedForChatEditorGroup(o))
      },onDragLeave:o=>{
        this.updateDropFeedback(e,!1,o),this.updateDropBlockedFeedback(e,!1),e.classList.remove("scroll")
      },onDragEnd:o=>{
        this.updateDropFeedback(e,!1,o),this.updateDropBlockedFeedback(e,!1),e.classList.remove("scroll"),this.onGroupDragEnd(o,i,e,r)
      },onDrop:o=>{
        if(this.updateDropFeedback(e,!1,o),this.updateDropBlockedFeedback(e,!1),e.classList.remove("scroll"),o.target===e){
          const a=this.groupTransfer.hasData(VF.prototype);
          this.onDrop(o,a?this.groupView.count:this.tabsModel.count,e)
        }
      }
    })), this._register(ei(e, ir.MOUSE_WHEEL, o=>{
      const a=this.groupView.activeEditor;
      if(!a||this.groupView.count<2)return;
      if(this.groupsView.partOptions.scrollToSwitchTabs===!0){
        if(o.shiftKey)return
      }
      else if(!o.shiftKey)return;
      const l=Date.now();
      if(l-this.lastMouseWheelEventTime<ipe.MOUSE_WHEEL_EVENT_THRESHOLD-2*(Math.abs(o.deltaX)+Math.abs(o.deltaY)))return;
      this.lastMouseWheelEventTime=l;
      let u;
      if(o.deltaX+o.deltaY<-ipe.MOUSE_WHEEL_DISTANCE_THRESHOLD)u=-1;
      else if(o.deltaX+o.deltaY>ipe.MOUSE_WHEEL_DISTANCE_THRESHOLD)u=1;
      else return;
      const d=this.groupView.getEditorByIndex(this.groupView.getIndexOfEditor(a)+u);
      d&&(this.groupView.openEditor(d),zu.stop(o,!0))
    }));
    const s=o=>{
      zu.stop(o);
      let a=e;
      I6(o)&&(a=new yy(As(this.parent),o)),this.contextMenuService.showContextMenu({
        getAnchor:()=>a,menuId:st.EditorTabsBarContext,contextKeyService:this.contextKeyService,menuActionOptions:{
          shouldForwardArgs:!0
        },getActionsContext:()=>({
          groupId:this.groupView.id
        }),getKeyBinding:l=>this.getKeybinding(l),onHide:()=>this.groupView.focus()
      })
    };
    this._register(ei(e, MA.Contextmenu, o=>s(o))), this._register(ei(e, ir.CONTEXT_MENU, o=>s(o)))
  }
  doHandleDecorationsChange(){
    this.layout(this.dimensions)
  }
  updateEditorActionsToolbar(){
    super.updateEditorActionsToolbar(), this.layout(this.dimensions)
  }
  openEditor(e, t){
    const i=this.handleOpenedEditors();
    return t?.focusTabControl&&this.withTab(e, (r, s, o)=>o.focus()), i
  }
  openEditors(e){
    return this.handleOpenedEditors()
  }
  handleOpenedEditors(){
    this.updateTabsControlVisibility(), this.updateSingleTabClass();
    const[e, t]=dde(this.tabsContainer, this.tabsScrollbar), i=this.getTabChildrenOffset();
    for(let a=e.children.length-i;
    a<this.tabsModel.count;
    a++)e.appendChild(this.createTab(a, e, t));
    const r=this.didActiveEditorChange(), s=this.tabLabels;
    this.computeTabLabels();
    let o=!1;
    return r||s.length!==this.tabLabels.length||s.some((a, l)=>!this.equalsEditorInputLabel(a, this.tabLabels.at(l)))?(this.redraw({
      forceRevealActiveTab:!0
    }), o=!0):this.layout(this.dimensions, {
      forceRevealActiveTab:!0
    }), o
  }
  didActiveEditorChange(){
    return!!(!this.activeTabLabel?.editor&&this.tabsModel.activeEditor||this.activeTabLabel?.editor&&!this.tabsModel.activeEditor||!this.activeTabLabel?.editor||!this.tabsModel.isActive(this.activeTabLabel.editor))
  }
  equalsEditorInputLabel(e, t){
    return e===t?!0:!e||!t?!1:e.name===t.name&&e.description===t.description&&e.forceDescription===t.forceDescription&&e.title===t.title&&e.ariaLabel===t.ariaLabel
  }
  beforeCloseEditor(e){
    if(this.isMouseOverTabs&&this.groupsView.partOptions.tabSizing==="fixed"){
      const t=this.tabsModel.isLast(e);
      this.updateTabsFixedWidth(!t)
    }
  }
  closeEditor(e){
    this.handleClosedEditors()
  }
  closeEditors(e){
    this.handleClosedEditors()
  }
  handleClosedEditors(){
    if(this.updateSingleTabClass(), this.tabsModel.count){
      const e=ed(this.tabsContainer),t=this.getTabChildrenOffset();
      for(;
      e.children.length-t>this.tabsModel.count;
      ){
        const i=e.children.length-t-1;
        this.getTabAtIndex(i)?.remove(),Bo(this.tabDisposables.pop())
      }
      this.computeTabLabels(),this.redraw({
        forceRevealActiveTab:!0
      })
    }
    else this.tabsContainer&&th(this.tabsContainer), this.tabDisposables=Bo(this.tabDisposables), this.tabResourceLabels.clear(), this.tabLabels=[], this.activeTabLabel=void 0, this.tabActionBars=[], this.clearEditorActionsToolbar(), this.updateTabsControlVisibility()
  }
  moveEditor(e, t, i){
    const r=this.tabLabels[t];
    this.tabLabels.splice(t, 1), this.tabLabels.splice(i, 0, r), this.forEachTab((s, o, a, l, u, d)=>{
      this.redrawTab(s,o,a,l,u,d)
    }, Math.min(t, i), Math.max(t, i)), this.layout(this.dimensions, {
      forceRevealActiveTab:!0
    })
  }
  pinEditor(e){
    this.withTab(e, (t, i, r, s, o)=>this.redrawTabLabel(t, i, r, s, o))
  }
  stickEditor(e){
    this.doHandleStickyEditorChange(e)
  }
  unstickEditor(e){
    this.doHandleStickyEditorChange(e)
  }
  doHandleStickyEditorChange(e){
    this.withTab(e, (t, i, r, s, o, a)=>this.redrawTab(t, i, r, s, o, a)), this.forEachTab((t, i, r, s, o)=>{
      this.redrawTabBorders(i,r)
    }), this.layout(this.dimensions, {
      forceRevealActiveTab:!0
    })
  }
  setActive(e){
    this.forEachTab((t, i, r, s, o, a)=>{
      this.redrawTabSelectedActiveAndDirty(e,t,r,a)
    }), this.updateEditorActionsToolbar(), this.layout(this.dimensions, {
      forceRevealActiveTab:!0
    })
  }
  updateEditorSelections(){
    this.forEachTab((e, t, i, r, s, o)=>{
      this.redrawTabSelectedActiveAndDirty(this.groupsView.activeGroup===this.groupView,e,i,o)
    })
  }
  updateEditorLabel(e){
    this.updateEditorLabelScheduler.schedule()
  }
  doUpdateEditorLabels(){
    this.computeTabLabels(), this.forEachTab((e, t, i, r, s)=>{
      this.redrawTabLabel(e,t,i,r,s)
    }), this.layout(this.dimensions)
  }
  updateEditorDirty(e){
    this.withTab(e, (t, i, r, s, o, a)=>this.redrawTabSelectedActiveAndDirty(this.groupsView.activeGroup===this.groupView, t, r, a))
  }
  updateOptions(e, t){
    super.updateOptions(e, t), e.labelFormat!==t.labelFormat&&this.computeTabLabels(), e.titleScrollbarSizing!==t.titleScrollbarSizing&&this.updateTabsScrollbarSizing(), e.alwaysShowEditorActions!==t.alwaysShowEditorActions&&this.updateEditorActionsToolbar(), (e.tabSizingFixedMinWidth!==t.tabSizingFixedMinWidth||e.tabSizingFixedMaxWidth!==t.tabSizingFixedMaxWidth||e.tabSizing!==t.tabSizing)&&this.updateTabSizing(!0), (e.labelFormat!==t.labelFormat||e.tabActionLocation!==t.tabActionLocation||e.tabActionCloseVisibility!==t.tabActionCloseVisibility||e.tabActionUnpinVisibility!==t.tabActionUnpinVisibility||e.tabSizing!==t.tabSizing||e.pinnedTabSizing!==t.pinnedTabSizing||e.showIcons!==t.showIcons||e.hasIcons!==t.hasIcons||e.highlightModifiedTabs!==t.highlightModifiedTabs||e.wrapTabs!==t.wrapTabs||!fv(e.decorations, t.decorations))&&this.redraw(), (e.wrapTabs!==t.wrapTabs||e.editorActionsLocation!==t.editorActionsLocation)&&this.updateTabsContainerBorderRight()
  }
  updateStyles(){
    this.redraw()
  }
  forEachTab(e, t, i){
    this.tabsModel.getEditors(1).forEach((r, s)=>{
      typeof t=="number"&&t>s||typeof i=="number"&&i<s||this.doWithTab(s,r,e)
    })
  }
  withTab(e, t){
    this.doWithTab(this.tabsModel.indexOf(e), e, t)
  }
  doWithTab(e, t, i){
    const r=ed(this.tabsContainer), s=this.getTabChildrenOffset(), o=r.children[e+s];
    if(!this.tabResourceLabels)return;
    const a=this.tabResourceLabels.get(e), l=this.tabLabels[e], u=this.tabActionBars[e];
    o&&a&&l&&i(t, e, o, a, l, u)
  }
  createTab(e, t, i){
    const r=Ct(".tab", {
      draggable:!0,role:"tab"
    });
    this._register(E1.addTarget(r));
    const s=Ct(".tab-border-top-container");
    r.appendChild(s);
    const o=this.tabResourceLabels.create(r, {
      hoverTargetOverride:r,supportIcons:!0,supportDescriptionHighlights:!0
    }), a=Ct(".tab-actions");
    r.appendChild(a);
    const l=this, u=new q1a({
      groupId:this.groupView.id,get editorIndex(){
        return l.toEditorIndex(e)
      }
    }), d=new Gf(a, {
      ariaLabel:_(3826,null),actionRunner:u
    }), m=d.onWillRun(w=>{
      w.action.id===this.closeEditorAction.id&&this.blockRevealActiveTabOnce()
    }), p=H_(u, d, m, $i(kbe(this.tabActionBars, d))), g=Ct(".tab-fade-hider");
    r.appendChild(g);
    const f=Ct(".tab-border-bottom-container");
    r.appendChild(f);
    const A=this.registerTabListeners(r, e, t, i);
    return this.tabDisposables.push(H_(A, p, u, o)), r
  }
  toEditorIndex(e){
    const t=ed(this.tabsModel.getEditorByIndex(e));
    return this.groupView.getIndexOfEditor(t)
  }
  registerTabListeners(e, t, i, r){
    const s=new Ut, o=async(d, m)=>{
      if(e.blur(),I6(d)&&(d.button!==0||Fs&&d.ctrlKey)){
        d.button===1&&d.preventDefault();
        return
      }
      if(this.originatesFromTabActionBar(d))return;
      const p=this.tabsModel.getEditorByIndex(t);
      if(p)if(d.shiftKey){
        let g;
        if(this.lastSingleSelectSelectedEditor&&this.tabsModel.isSelected(this.lastSingleSelectSelectedEditor))g=this.lastSingleSelectSelectedEditor;
        else{
          const f=ed(this.groupView.activeEditor);
          this.lastSingleSelectSelectedEditor=f,g=f
        }
        await this.selectEditorsBetween(p,g)
      }
      else if(d.ctrlKey&&!Fs||d.metaKey&&Fs)this.tabsModel.isSelected(p)?await this.unselectEditor(p):(await this.selectEditor(p),this.lastSingleSelectSelectedEditor=p);
      else{
        const g=this.tabsModel.isSelected(p)?this.groupView.selectedEditors.filter(f=>!f.matches(p)):[];
        await this.groupView.openEditor(p,{
          preserveFocus:m,activation:X4.ACTIVATE
        },{
          inactiveSelection:g,focusTabControl:!0
        })
      }
    }, a=d=>{
      zu.stop(d);
      const m=this.tabsModel.getEditorByIndex(t);
      m&&this.onTabContextMenu(m,d,e)
    };
    s.add(ei(e, ir.MOUSE_DOWN, d=>o(d, !1))), s.add(ei(e, MA.Tap, d=>o(d, !0))), s.add(ei(e, MA.Change, d=>{
      r.setScrollPosition({
        scrollLeft:r.getScrollPosition().scrollLeft-d.translationX
      })
    })), s.add(ei(e, ir.MOUSE_UP, async d=>{
      if(zu.stop(d),e.blur(),I6(d)&&(d.button!==0||Fs&&d.ctrlKey)||this.originatesFromTabActionBar(d))return;
      !(d.ctrlKey&&!Fs||d.metaKey&&Fs)&&!d.shiftKey&&this.groupView.selectedEditors.length>1&&await this.unselectAllEditors()
    })), s.add(ei(e, ir.AUXCLICK, d=>{
      if(d.button===1){
        zu.stop(d,!0);
        const m=this.tabsModel.getEditorByIndex(t);
        if(m){
          if($Wl(this.tabsModel,m,zUe.MOUSE,this.groupsView.partOptions))return;
          this.blockRevealActiveTabOnce(),this.closeEditorAction.run({
            groupId:this.groupView.id,editorIndex:this.groupView.getIndexOfEditor(m)
          })
        }
      }
    })), s.add(ei(e, ir.KEY_DOWN, d=>{
      const m=new vh(d);
      m.shiftKey&&m.keyCode===68&&a(d)
    })), s.add(ei(e, MA.Contextmenu, d=>{
      a(d)
    })), s.add(ei(e, ir.KEY_UP, d=>{
      const m=new vh(d);
      let p=!1;
      if(m.equals(3)||m.equals(10)){
        p=!0;
        const g=this.tabsModel.getEditorByIndex(t);
        g&&this.groupView.openEditor(g)
      }
      else if([15,17,16,18,14,13].some(g=>m.equals(g))){
        let g=this.toEditorIndex(t);
        m.equals(15)||m.equals(16)?g=g-1:m.equals(17)||m.equals(18)?g=g+1:m.equals(14)?g=0:g=this.groupView.count-1;
        const f=this.groupView.getEditorByIndex(g);
        f&&(p=!0,this.groupView.openEditor(f,{
          preserveFocus:!0
        },{
          focusTabControl:!0
        }))
      }
      p&&zu.stop(d,!0),r.setScrollPosition({
        scrollLeft:i.scrollLeft
      })
    }));
    for(const d of[MA.Tap, ir.DBLCLICK])s.add(ei(e, d, m=>{
      if(d===ir.DBLCLICK)zu.stop(m);
      else if(m.tapCount!==2)return;
      const p=this.tabsModel.getEditorByIndex(t);
      if(p&&this.tabsModel.isPinned(p))switch(this.groupsView.partOptions.doubleClickTabToToggleEditorGroupSizes){
        case"maximize":this.groupsView.toggleMaximizeGroup(this.groupView);
        break;
        case"expand":this.groupsView.toggleExpandGroup(this.groupView);
        break;
        case"off":break
      }
      else this.groupView.pinEditor(p)
    }));
    s.add(ei(e, ir.CONTEXT_MENU, d=>{
      zu.stop(d,!0);
      const m=this.tabsModel.getEditorByIndex(t);
      m&&this.onTabContextMenu(m,d,e)
    }, !0));
    let l, u=!1;
    return s.add(new PH(e, {
      onDragStart:d=>{
        const m=this.tabsModel.getEditorByIndex(t);
        if(!m)return;
        u=this.isNewWindowOperation(d);
        const p=this.groupView.selectedEditors;
        if(this.editorTransfer.setData(p.map(g=>new RT({
          editor:g,groupId:this.groupView.id
        })),RT.prototype),d.dataTransfer)if(d.dataTransfer.effectAllowed="copyMove",p.length>1){
          const g=`${m.getName()} + ${p.length-1}`;
          rbt(d,e,g)
        }
        else d.dataTransfer.setDragImage(e,0,0);
        this.doFillResourceDataTransfers(p,d,u),r_(As(this.parent),()=>this.updateDropFeedback(e,!1,d,t))
      },onDrag:d=>{
        l=d
      },onDragEnter:d=>{
        if(!this.isSupportedDropTransfer(d)){
          d.dataTransfer&&(d.dataTransfer.dropEffect="none");
          const m=this.isDropBlockedForChatEditorGroup(d);
          this.updateDropBlockedFeedback(i,m);
          return
        }
        this.editorTransfer.hasData(RT.prototype)||d.dataTransfer&&(d.dataTransfer.dropEffect="copy"),this.updateDropFeedback(e,!0,d,t),this.updateDropBlockedFeedback(i,!1)
      },onDragOver:(d,m)=>{
        if(m>=ipe.DRAG_OVER_OPEN_TAB_THRESHOLD){
          const g=this.tabsModel.getEditorByIndex(t);
          g&&this.tabsModel.activeEditor!==g&&this.groupView.openEditor(g,{
            preserveFocus:!0
          })
        }
        const p=!this.isSupportedDropTransfer(d)&&this.isDropBlockedForChatEditorGroup(d);
        this.updateDropBlockedFeedback(i,p),!p&&this.updateDropFeedback(e,!0,d,t)
      },onDragLeave:d=>{
        this.updateDropFeedback(e,!1,d,t),this.updateDropBlockedFeedback(i,!1)
      },onDragEnd:async d=>{
        this.updateDropFeedback(e,!1,d,t),this.updateDropBlockedFeedback(i,!1);
        const m=this.editorTransfer.getData(RT.prototype);
        if(this.editorTransfer.clearData(RT.prototype),!u||lLf()||!m||m.length===0)return;
        const p=await this.maybeCreateAuxiliaryEditorPartAt(d,e);
        if(!p)return;
        const g=p.activeGroup,f=HSa(this.groupView,m.map(A=>A.identifier.editor));
        this.isMoveOperation(l??d,g.id,m[0].identifier.editor)?this.groupView.moveEditors(f,g):this.groupView.copyEditors(f,g),g.focus()
      },onDrop:d=>{
        this.updateDropFeedback(e,!1,d,t),this.updateDropBlockedFeedback(i,!1);
        let m=t;
        this.getTabDragOverLocation(d,e)==="right"&&m++,this.onDrop(d,m,i)
      }
    })), s
  }
  isSupportedDropTransfer(e){
    if(!!this.groupsView.groupOnlyContainsComposerEditors?.(this.groupView)){
      const i=this.groupTransfer.hasData(VF.prototype)?this.groupTransfer.getData(VF.prototype):void 0;
      let r=!1;
      if(Array.isArray(i)&&i.length>0){
        const s=this.editorPartsView.getGroup(i[0].identifier);
        r=!!s&&!!this.groupsView.groupOnlyContainsComposerEditors?.(s)
      }
      if(!xfn()&&!svu()&&!r)return!1
    }
    if(this.groupTransfer.hasData(VF.prototype)){
      const i=this.groupTransfer.getData(VF.prototype);
      return!(Array.isArray(i)&&i.length>0&&i[0].identifier===this.groupView.id)
    }
    return!!(this.editorTransfer.hasData(RT.prototype)||xfn()||e.dataTransfer&&e.dataTransfer.types.length>0)
  }
  isDropBlockedForChatEditorGroup(e){
    if(!this.editorGroupsService.getPart(this.groupView).isChatOnlyEditorPart||xfn()||svu())return!1;
    const i=this.groupTransfer.hasData(VF.prototype)?this.groupTransfer.getData(VF.prototype):void 0;
    if(Array.isArray(i)&&i.length>0){
      const r=this.editorPartsView.getGroup(i[0].identifier);
      if(!!r&&!!this.groupsView.groupOnlyContainsComposerEditors?.(r))return!1
    }
    return this.editorTransfer.hasData(RT.prototype)||this.groupTransfer.hasData(VF.prototype)||e.dataTransfer!==null&&e.dataTransfer.types.length>0
  }
  updateDropBlockedFeedback(e, t){
    e.classList.toggle("drop-blocked", t)
  }
  async redirectDropToMainPart(e){
    const i=this.editorGroupsService.mainPart.getGroups(1).find(r=>r.count>0)||this.editorGroupsService.mainPart.activeGroup;
    if(this.editorTransfer.hasData(RT.prototype)){
      const r=this.editorTransfer.getData(RT.prototype);
      if(Array.isArray(r)&&r.length>0){
        const s=this.editorPartsView.getGroup(r[0].identifier.groupId);
        if(s)for(const o of r){
          const a=o.identifier.editor;
          s.id===o.identifier.groupId&&(this.isMoveOperation(e,o.identifier.groupId,a)?s.moveEditor(a,i,{
            pinned:!0
          }):s.copyEditor(a,i,{
            pinned:!0
          }))
        }
      }
      i.focus(),this.editorTransfer.clearData(RT.prototype);
      return
    }
    if(this.groupTransfer.hasData(VF.prototype)){
      const r=this.groupTransfer.getData(VF.prototype);
      if(Array.isArray(r)&&r.length>0){
        const s=this.editorPartsView.getGroup(r[0].identifier);
        if(s){
          const o={
            
          };
          this.isMoveOperation(e,s.id)||(o.mode=0),this.editorGroupsService.mainPart.mergeGroup(s,i,o)
        }
      }
      i.focus(),this.groupTransfer.clearData(VF.prototype);
      return
    }
    e.dataTransfer&&e.dataTransfer.types.length>0&&this.instantiationService.createInstance($it, {
      allowWorkspaceOpen:!1
    }).handleDrop(e, As(this.parent), ()=>i, ()=>i.focus(), {
      pinned:!0
    })
  }
  updateDropFeedback(e, t, i, r){
    const s=typeof r=="number";
    let o;
    t?s?o=this.computeDropTarget(i, r, e):o={
      leftElement:e.lastElementChild,rightElement:void 0
    }
    :o=void 0, this.updateDropTarget(o)
  }
  updateDropTarget(e){
    const t=this.dropTarget;
    if(t===e||t&&e&&t.leftElement===e.leftElement&&t.rightElement===e.rightElement)return;
    const i="drop-target-left", r="drop-target-right";
    t&&(t.leftElement?.classList.remove(i), t.rightElement?.classList.remove(r)), e&&(e.leftElement?.classList.add(i), e.rightElement?.classList.add(r)), this.dropTarget=e
  }
  getTabDragOverLocation(e, t){
    const i=t.getBoundingClientRect();
    return e.clientX-i.left<=i.width/2?"left":"right"
  }
  computeDropTarget(e, t, i){
    const r=this.getTabDragOverLocation(e, i)==="left", s=t===this.tabsModel.count-1;
    if(r&&t===0)return{
      leftElement:void 0,rightElement:i
    };
    if(!r&&s)return{
      leftElement:i,rightElement:void 0
    };
    const a=r?i.previousElementSibling:i, l=r?i:i.nextElementSibling;
    return{
      leftElement:a,rightElement:l
    }
  }
  async selectEditor(e){
    this.groupView.isActive(e)||await this.groupView.setSelection(e, this.groupView.selectedEditors)
  }
  async selectEditorsBetween(e, t){
    const i=this.groupView.getIndexOfEditor(e);
    if(i===-1)throw new _m;
    const r=this.groupView.getIndexOfEditor(t);
    if(r===-1)throw new _m;
    let s=this.groupView.selectedEditors, o=r;
    for(;
    o>=0&&o<=this.groupView.count-1;
    ){
      o=r<i?o-1:o+1;
      const m=this.groupView.getEditorByIndex(o);
      if(!m||!this.groupView.isSelected(m))break;
      s=s.filter(p=>!p.matches(m))
    }
    const a=r<i?r:i, l=r<i?i:r, u=this.groupView.getEditors(1).slice(a, l+1);
    for(const m of u)this.groupView.isSelected(m)||s.push(m);
    const d=s.filter(m=>!m.matches(e));
    await this.groupView.setSelection(e, d)
  }
  async unselectEditor(e){
    const t=this.groupView.isActive(e);
    if(t&&this.groupView.selectedEditors.length===1)return;
    let i=ed(this.groupView.activeEditor);
    if(t){
      const s=this.groupView.getEditors(0);
      for(let o=1;
      o<s.length;
      o++){
        const a=s[o];
        if(this.groupView.isSelected(a)){
          i=a;
          break
        }
      }
    }
    const r=this.groupView.selectedEditors.filter(s=>!s.matches(e)&&!s.matches(i));
    await this.groupView.setSelection(i, r)
  }
  async unselectAllEditors(){
    if(this.groupView.selectedEditors.length>1){
      const e=ed(this.groupView.activeEditor);
      await this.groupView.setSelection(e,[])
    }
  }
  computeTabLabels(){
    const{
      labelFormat:e
    }
    =this.groupsView.partOptions, {
      verbosity:t,shortenDuplicates:i
    }
    =this.getLabelConfigFlags(e), r=[];
    let s=-1;
    this.tabsModel.getEditors(1).forEach((o, a)=>{
      const l=gp.getOriginalUri(o,{
        supportSideBySide:op.PRIMARY
      }),u=l?jMe(l):!1,d=o.getName();
      r.push({
        editor:o,name:d,description:o.getDescription(t),forceDescription:o.hasCapability(64),title:o.getTitle(2),ariaLabel:YSa(o,a,this.groupView,this.editorPartsView.count)
      }),o===this.tabsModel.activeEditor&&(s=a)
    }), i&&this.shortenTabLabels(r), this.tabLabels=r, this.activeTabLabel=r[s]
  }
  shortenTabLabels(e){
    const t=new Map;
    for(const i of e)typeof i.description=="string"?Xpt(t, i.name, []).push(i):i.description="";
    for(const[, i]of t){
      if(i.length===1&&!i[0].forceDescription){
        i[0].description="";
        continue
      }
      const r=new Map;
      for(const l of i)Xpt(r,l.description,[]).push(l);
      let s=!1;
      for(const[,l]of r)if(!s&&l.length>1){
        const[u,...d]=l.map(({
          editor:m
        })=>m.getDescription(2));
        s=d.some(m=>m!==u)
      }
      if(s){
        r.clear();
        for(const l of i)l.description=l.editor.getDescription(2),Xpt(r,l.description,[]).push(l)
      }
      const o=[];
      for(const[l]of r)o.push(l);
      if(o.length===1){
        for(const l of r.get(o[0])||[])l.forceDescription||(l.description="");
        continue
      }
      const a=wSh(o,this.path.sep);
      o.forEach((l,u)=>{
        for(const d of r.get(l)||[])d.description=a[u]
      })
    }
  }
  getLabelConfigFlags(e){
    switch(e){
      case"short":return{
        verbosity:0,shortenDuplicates:!1
      };
      case"medium":return{
        verbosity:1,shortenDuplicates:!1
      };
      case"long":return{
        verbosity:2,shortenDuplicates:!1
      };
      default:return{
        verbosity:1,shortenDuplicates:!0
      }
    }
  }
  redraw(e){
    if(this.tabsAndActionsContainer){
      let t=this.getColor(I1f);
      !t&&Poe(this.theme.type)&&(t=this.getColor(r_i)||this.getColor(Du)),t?(this.tabsAndActionsContainer.classList.add("tabs-border-bottom"),this.tabsAndActionsContainer.style.setProperty("--tabs-border-bottom-color",t.toString())):(this.tabsAndActionsContainer.classList.remove("tabs-border-bottom"),this.tabsAndActionsContainer.style.removeProperty("--tabs-border-bottom-color"))
    }
    this.forEachTab((t, i, r, s, o, a)=>{
      this.redrawTab(t,i,r,s,o,a)
    }), this.updateEditorActionsToolbar(), this.layout(this.dimensions, e)
  }
  redrawTab(e, t, i, r, s, o){
    const a=this.tabsModel.isSticky(t), l=this.groupsView.partOptions;
    this.redrawTabLabel(e, t, i, r, s);
    const u=a&&l.tabActionUnpinVisibility, d=!u&&l.tabActionCloseVisibility, m=u||d;
    let p;
    m?p=u?this.unpinEditorAction:this.closeEditorAction:p=a?this.unpinEditorAction:this.closeEditorAction, o.hasAction(p)||(o.isEmpty()||o.clear(), o.push(p, {
      icon:!0,label:!1,keybinding:this.getKeybindingLabel(p)
    })), i.classList.toggle("pinned-action-off", a&&!u), i.classList.toggle("close-action-off", !u&&!d);
    for(const f of["left", "right"])i.classList.toggle(`tab-actions-${f}`, m&&l.tabActionLocation===f);
    const g=a&&l.pinnedTabSizing==="shrink"?"shrink":l.tabSizing;
    for(const f of["fit", "shrink", "fixed"])i.classList.toggle(`sizing-${f}`, g===f);
    i.classList.toggle("has-icon", l.showIcons&&l.hasIcons), i.classList.toggle("sticky", a);
    for(const f of["normal", "compact", "shrink"])i.classList.toggle(`sticky-${f}`, a&&l.pinnedTabSizing===f);
    if(!l.wrapTabs&&a&&l.pinnedTabSizing!=="normal"){
      let f=0;
      switch(l.pinnedTabSizing){
        case"compact":f=ipe.TAB_WIDTH.compact;
        break;
        case"shrink":f=ipe.TAB_WIDTH.shrink;
        break
      }
      i.style.left=`${t*f}px`
    }
    else i.style.left="auto";
    this.redrawTabBorders(t, i), this.redrawTabSelectedActiveAndDirty(this.groupsView.activeGroup===this.groupView, e, i, o)
  }
  redrawTabLabel(e, t, i, r, s){
    const o=this.groupsView.partOptions;
    let a, l=!1, u=!!o.decorations?.badges;
    const d=!!o.decorations?.colors;
    let m;
    const p=gp.getOriginalUri(e, {
      supportSideBySide:op.PRIMARY
    }), g=p?jMe(p):!1;
    o.pinnedTabSizing==="compact"&&this.tabsModel.isSticky(t)?(a=o.showIcons&&o.hasIcons?"":s.name?.charAt(0).toUpperCase(), m="", l=!0, u=!1):(a=s.name, m=g?"$(git-branch)":s.description||""), s.ariaLabel&&(i.setAttribute("aria-label", s.ariaLabel), i.setAttribute("aria-description", ""));
    let f=e.getIcon(), A;
    if(Wcy(e)){
      const R=e.getFaviconUri();
      R&&(f=R)
    }
    Qt.isThemeIcon(f)&&f.id===kfn.id&&(f=void 0, A=iay());
    const w=e.getLabelExtraClasses(), C=w.includes("composer-empty-chat"), x=zMe(e.typeId), I=o.showIcons===!1||x&&!f&&!A;
    r.setResource({
      name:a,description:m,resource:gp.getOriginalUri(e,{
        supportSideBySide:op.BOTH
      })
    }, {
      title:C?"":this.getHoverTitle(e),extraClasses:lh(["tab-label",u?"tab-label-has-badge":void 0,zMe(e.typeId)?"composer-tab-label":void 0,g?"worktree-tab-label":void 0].concat(w)),italic:!this.tabsModel.isPinned(e),forceLabel:l,fileDecorations:{
        colors:d,badges:u
      },icon:f,iconElement:A,hideIcon:I
    }), i.classList.toggle("icon-hidden", I);
    const B=gp.getOriginalUri(e, {
      supportSideBySide:op.PRIMARY
    });
    B?i.setAttribute("data-resource-name", GP(B)):i.removeAttribute("data-resource-name")
  }
  redrawTabSelectedActiveAndDirty(e, t, i, r){
    const s=this.tabsModel.isActive(t), o=this.doRedrawTabDirty(e, s, t, i);
    this.doRedrawTabActive(e, !o, t, i, r)
  }
  doRedrawTabActive(e, t, i, r, s){
    const o=this.tabsModel.isActive(i), a=this.tabsModel.isSelected(i);
    if(r.classList.toggle("active", o), r.classList.toggle("selected", a), r.setAttribute("aria-selected", o?"true":"false"), r.tabIndex=o?0:-1, s.setFocusable(o), o){
      const u=this.getColor(e?s_i:_1f);
      r.classList.toggle("tab-border-bottom",!!u),r.style.setProperty("--tab-border-bottom-color",u??"")
    }
    let l=null;
    t&&(o&&(l=this.getColor(e?o_i:C1f)), l===null&&a&&(l=this.getColor(S1f))), r.classList.toggle("tab-border-top", !!l), r.style.setProperty("--tab-border-top-color", l??"")
  }
  doRedrawTabDirty(e, t, i, r){
    let s=!1;
    if(i.isDirty()&&!i.isSaving())if(r.classList.add("dirty"), this.groupsView.partOptions.highlightModifiedTabs){
      let o;
      e&&t?o=this.getColor(mgn):e&&!t?o=this.getColor(D0a):!e&&t?o=this.getColor(E1f):o=this.getColor(x1f),o&&(s=!0,r.classList.add("dirty-border-top"),r.style.setProperty("--tab-dirty-border-top-color",o))
    }
    else r.classList.remove("dirty-border-top"), r.style.removeProperty("--tab-dirty-border-top-color");
    else r.classList.remove("dirty", "dirty-border-top"), r.style.removeProperty("--tab-dirty-border-top-color");
    return s
  }
  redrawTabBorders(e, t){
    const r=this.tabsModel.isSticky(e)&&this.tabsModel.stickyCount===e+1, s=this.tabsModel.stickyCount!==this.tabsModel.count, o=this.tabsModel.getEditorByIndex(e), a=o?gp.getOriginalUri(o, {
      supportSideBySide:op.PRIMARY
    }):void 0, l=a?jMe(a):!1, u=o?this.tabsModel.isActive(o):!1, d=this.tabsModel.activeEditor, m=d?gp.getOriginalUri(d, {
      supportSideBySide:op.PRIMARY
    }):void 0, p=m?jMe(m):!1, g=(r&&s?this.getColor(w1f):void 0)||this.getColor(r_i)||this.getColor(Du);
    t.style.borderRight=g?`1px solid ${g}`:"";
    const f=this.getColor(Pmu);
    l&&u&&f?(t.style.borderRight=`1px solid ${f}`, t.style.borderLeft=`1px solid ${f}`, t.style.borderTop=`1px solid ${f}`):(t.style.outline=this.getColor(x_)?`1px solid ${this.getColor(x_)}`:"", t.style.outlineOffset="", t.style.borderTop="", t.style.borderLeft=""), p&&!u&&f?t.style.borderBottom=`1px solid ${f}`:t.style.borderBottom=""
  }
  prepareEditorActions(e, t){
    if(this.groupsView.activeGroup===this.groupView)return e;
    {
      const r=[N1t,...dGl];
      return{
        primary:this.groupsView.partOptions.alwaysShowEditorActions?e.primary:e.primary.filter(s=>r.includes(s.id)),secondary:e.secondary
      }
    }
  }
  getHeight(){
    return this.dimensions.used?this.dimensions.used.height:this.computeHeight()
  }
  computeHeight(){
    let e;
    return this.visible?this.groupsView.partOptions.wrapTabs&&this.tabsAndActionsContainer?.classList.contains("wrapping")?e=this.tabsAndActionsContainer.offsetHeight:e=this.tabHeight:e=0, e
  }
  layout(e, t){
    if(e&&this.dimensions&&Object.assign(this.dimensions, e), this.visible&&this.layoutScheduler){
      if(!this.layoutScheduler.value){
        const r=r_(As(this.parent),()=>{
          this.dimensions&&this.layoutScheduler&&(this.doLayout(this.dimensions,this.layoutScheduler.value?.options),this.layoutScheduler.clear())
        });
        this.layoutScheduler.value={
          options:t,dispose:()=>r.dispose()
        }
      }
      const i=this.layoutScheduler.value;
      t?.forceRevealActiveTab&&i&&(i.options={
        ...i.options,forceRevealActiveTab:!0
      })
    }
    return this.dimensions&&!this.dimensions.used&&e?.container&&(this.dimensions.used=new Lu(e.container.width, this.computeHeight())), this.dimensions?.used??new Lu(0, 0)
  }
  doLayout(e, t){
    e.container!==Lu.None&&e.available!==Lu.None&&this.doLayoutTabs(e, t);
    const i=this.dimensions.used, r=this.dimensions.used=new Lu(e.container.width, this.computeHeight());
    i&&i.height!==r.height&&this.groupView.relayout()
  }
  doLayoutTabs(e, t){
    this.doLayoutTabsWrapping(e)||this.doLayoutTabsNonWrapping(t)
  }
  doLayoutTabsWrapping(e){
    const[t, i, r, s]=dde(this.tabsAndActionsContainer, this.tabsContainer, this.editorActionsToolbarContainer, this.tabsScrollbar), o=t.classList.contains("wrapping");
    let a=o;
    const l=this.leftActionsContainer, u=d=>{
      const m=a;
      a=d,t.classList.toggle("wrapping",a),l&&m!==a&&(a?i.prepend(l):t.prepend(l)),i.style.setProperty("--last-tab-margin-right",a?`${r.offsetWidth}px`:"0");
      for(const p of i.children)p.classList.contains("tab")&&p.classList.remove("last-in-row")
    };
    if(this.groupsView.partOptions.wrapTabs){
      const d=i.offsetWidth,m=i.scrollWidth,p=this.tabsModel.count>1,g=()=>{
        const f=this.getLastTab();
        return f?!(f.offsetWidth+r.offsetWidth-e.available.width>1):!0
      };
      p&&m>d&&g()&&u(!0),a&&(!p||i.offsetHeight>e.available.height||m<=d&&i.offsetHeight===this.tabHeight||!g()?u(!1):u(!0))
    }
    else o&&u(!1);
    if(a!==o&&this.updateTabsContainerBorderRight(), a&&!o){
      const d=i.offsetWidth;
      s.setScrollDimensions({
        width:d,scrollWidth:d
      })
    }
    if(a){
      const d=new Map;
      let m,p;
      for(const g of i.children){
        const f=g;
        if(!f.classList.contains("tab"))continue;
        const A=f.offsetTop;
        A!==m&&(m=A,p&&d.set(p,!0)),p=f,d.set(f,!1)
      }
      p&&d.set(p,!0);
      for(const[g,f]of d)g.classList.toggle("last-in-row",f)
    }
    return a
  }
  doLayoutTabsNonWrapping(e){
    const[t, i]=dde(this.tabsContainer, this.tabsScrollbar), r=t.offsetWidth, s=t.scrollWidth;
    let o=0;
    if(this.tabsModel.stickyCount>0){
      let B=0;
      switch(this.groupsView.partOptions.pinnedTabSizing){
        case"compact":B=ipe.TAB_WIDTH.compact;
        break;
        case"shrink":B=ipe.TAB_WIDTH.shrink;
        break
      }
      o=this.tabsModel.stickyCount*B
    }
    const a=this.tabsModel.activeEditor?this.getTabAndIndex(this.tabsModel.activeEditor):void 0, [l, u]=a??[void 0, void 0];
    let d=this.groupsView.partOptions.pinnedTabSizing!=="normal"&&typeof u=="number"&&this.tabsModel.isSticky(u), m=r-o;
    this.tabsModel.stickyCount>0&&m<ipe.TAB_WIDTH.fit?(t.classList.add("disable-sticky-tabs"), m=r, o=0, d=!1):t.classList.remove("disable-sticky-tabs");
    let p, g;
    !this.blockRevealActiveTab&&l&&(p=l.offsetLeft, g=l.offsetWidth);
    const{
      width:f,scrollWidth:A
    }
    =i.getScrollDimensions();
    i.setScrollDimensions({
      width:r,scrollWidth:s
    });
    const w=f!==r||A!==s;
    if(this.blockRevealActiveTab||typeof p!="number"||typeof g!="number"||d||!w&&!e?.forceRevealActiveTab){
      this.blockRevealActiveTab=!1;
      return
    }
    const C=i.getScrollPosition().scrollLeft, x=g<=m, I=p-o;
    x&&C+m<I+g?i.setScrollPosition({
      scrollLeft:C+(I+g-(C+m))
    }):(C>I||!x)&&i.setScrollPosition({
      scrollLeft:I
    })
  }
  updateTabsControlVisibility(){
    ed(this.tabsAndActionsContainer).classList.toggle("empty", !this.visible), !this.visible&&this.dimensions&&(this.dimensions.used=void 0)
  }
  get visible(){
    return this.tabsModel.count>0
  }
  getTabAndIndex(e){
    const t=this.tabsModel.indexOf(e), i=this.getTabAtIndex(t);
    if(i)return[i, t]
  }
  getTabChildrenOffset(){
    return this.tabsContainer?.firstElementChild?.classList.contains("left-actions-container")?1:0
  }
  getTabAtIndex(e){
    if(e>=0){
      const t=ed(this.tabsContainer),i=this.getTabChildrenOffset();
      return t.children[e+i]
    }
  }
  getLastTab(){
    return this.getTabAtIndex(this.tabsModel.count-1)
  }
  blockRevealActiveTabOnce(){
    this.blockRevealActiveTab=!0
  }
  originatesFromTabActionBar(e){
    let t;
    return I6(e)?t=e.target||e.srcElement:t=e.initialTarget, !!_oe(t, "action-item", "tab")
  }
  async onDrop(e, t, i){
    if(zu.stop(e, !0), this.updateDropFeedback(i, !1, e, t), i.classList.remove("scroll"), this.isDropBlockedForChatEditorGroup(e)){
      await this.redirectDropToMainPart(e);
      return
    }
    let r=this.tabsModel instanceof ivu?t+this.groupView.stickyCount:t;
    const s={
      sticky:this.tabsModel instanceof nvu&&this.tabsModel.stickyCount===r,index:r
    };
    if(this.groupTransfer.hasData(VF.prototype)){
      const o=this.groupTransfer.getData(VF.prototype);
      if(Array.isArray(o)&&o.length>0){
        const a=this.editorPartsView.getGroup(o[0].identifier);
        if(a){
          const l={
            index:r
          };
          this.isMoveOperation(e,a.id)||(l.mode=0),this.groupsView.mergeGroup(a,this.groupView,l)
        }
        this.groupView.focus(),this.groupTransfer.clearData(VF.prototype)
      }
    }
    else if(this.editorTransfer.hasData(RT.prototype)){
      const o=this.editorTransfer.getData(RT.prototype);
      if(Array.isArray(o)&&o.length>0){
        const a=this.editorPartsView.getGroup(o[0].identifier.groupId);
        if(a)for(const l of o){
          const u=l.identifier.editor;
          if(a.id!==l.identifier.groupId)continue;
          const d=a.getIndexOfEditor(u);
          a===this.groupView&&d<r&&r--,this.isMoveOperation(e,l.identifier.groupId,u)?a.moveEditor(u,this.groupView,{
            ...s,index:r
          }):a.copyEditor(u,this.groupView,{
            ...s,index:r
          }),r++
        }
      }
      this.groupView.focus(),this.editorTransfer.clearData(RT.prototype)
    }
    else if(this.treeItemsTransfer.hasData(hme.prototype)){
      const o=this.treeItemsTransfer.getData(hme.prototype);
      if(Array.isArray(o)&&o.length>0){
        const a=[];
        for(const l of o){
          const u=await this.treeViewsDragAndDropService.removeDragOperationTransfer(l.identifier);
          if(u){
            const d=await cLf(u);
            a.push(...d.map(m=>({
              ...m,options:{
                ...m.options,pinned:!0,index:r
              }
            })))
          }
        }
        this.editorService.openEditors(a,this.groupView,{
          validateTrust:!0
        })
      }
      this.treeItemsTransfer.clearData(hme.prototype)
    }
    else if(this.fgComposerTransfer.hasData(qce.prototype)){
      const o=this.fgComposerTransfer.getData(qce.prototype);
      if(Array.isArray(o)&&o.length>0){
        const a=o[0].composerId,l=this.getComposerEditorForId(a),u=l?this.groupView.getIndexOfEditor(l):-1;
        await this.composerService.handleOpenComposerEditor(a,{
          skipShowAndFocus:!1,openInNewTab:!0,targetGroup:this.groupView,createNewIfEmptyPane:!1
        }),this.moveComposerEditorToTargetIndex(a,r,u)
      }
      this.groupView.focus(),this.fgComposerTransfer.clearData(qce.prototype)
    }
    else if(this.bcTransfer.hasData(lxe.prototype)){
      const o=this.bcTransfer.getData(lxe.prototype);
      if(Array.isArray(o)&&o.length>0){
        const a=o[0].bcId,l=this.getComposerEditorIndices();
        await this.backgroundComposerService.openBackgroundComposerAsChat(a,{
          targetGroup:this.groupView
        });
        const u=this.getOpenedComposerIdFromActiveOrNew(l)??this.composerDataService.findComposerIdByBackgroundAgentId(a);
        if(u){
          const d=l.get(u)??-1;
          this.moveComposerEditorToTargetIndex(u,r,d)
        }
      }
      this.groupView.focus(),this.bcTransfer.clearData(lxe.prototype)
    }
    else this.instantiationService.createInstance($it, {
      allowWorkspaceOpen:!1
    }).handleDrop(e, As(this.parent), ()=>this.groupView, ()=>this.groupView.focus(), s)
  }
  getComposerEditorForId(e){
    return this.groupView.editors.find(t=>t.typeId===h3&&t.resource?.path===e)
  }
  getComposerEditorIndices(){
    const e=new Map;
    for(const t of this.groupView.editors){
      if(t.typeId!==h3)continue;
      const i=t.resource?.path;
      i!==void 0&&e.set(i,this.groupView.getIndexOfEditor(t))
    }
    return e
  }
  getOpenedComposerIdFromActiveOrNew(e){
    const t=this.groupView.activeEditor;
    return t?.typeId===h3?t.resource?.path:this.groupView.editors.find(r=>{
      if(r.typeId!==h3)return!1;
      const s=r.resource?.path;
      return s!==void 0&&!e.has(s)
    })?.resource?.path
  }
  moveComposerEditorToTargetIndex(e, t, i){
    const r=this.getComposerEditorForId(e);
    if(!r)return;
    let s=t;
    i>=0&&i<s&&s--, s=Math.max(0, Math.min(s, this.groupView.count-1));
    const o=this.groupView.getIndexOfEditor(r);
    o>=0&&o!==s&&this.groupView.moveEditor(r, this.groupView, {
      index:s
    })
  }
  dispose(){
    super.dispose(), this.layoutActionsResizeObserver?.disconnect(), this.layoutActionsResizeObserver=void 0, this.tabDisposables=Bo(this.tabDisposables)
  }
}, Ufn=ipe=__decorate([__param(5, kc), __param(6, ln), __param(7, wi), __param(8, mo), __param(9, ms), __param(10, ha), __param(11, bo), __param(12, yi), __param(13, kp), __param(14, Zun), __param(15, vD), __param(16, wd), __param(17, fr), __param(18, Tl), __param(19, Vu), __param(20, Fn), __param(21, Hi), __param(22, ag), __param(23, Oa), __param(24, rx)], Ufn), HI((n, e)=>{
  const t=n.getColor(r_i);
  t&&e.addRule(`
			.monaco-workbench .part.editor > .content .editor-group-container > .title > .tabs-and-actions-container.wrapping .tabs-container > .tab {
				border-bottom: 1px solid ${t};
			}
		`);
  const i=n.getColor(x_);
  i&&e.addRule(`
			.monaco-workbench .part.editor > .content .editor-group-container.active > .title .tabs-container > .tab.active,
			.monaco-workbench .part.editor > .content .editor-group-container.active > .title .tabs-container > .tab.active:hover  {
				outline: 1px solid;
				outline-offset: -5px;
			}

			.monaco-workbench .part.editor > .content .editor-group-container > .title .tabs-container > .tab.selected:not(.active):not(:hover)  {
				outline: 1px dotted;
				outline-offset: -5px;
			}

			.monaco-workbench .part.editor > .content .editor-group-container.active > .title .tabs-container > .tab.active:focus {
				outline-style: solid;
			}

			.monaco-workbench .part.editor > .content .editor-group-container > .title .tabs-container > .tab.active {
				outline: 1px dotted;
				outline-offset: -5px;
			}

			.monaco-workbench .part.editor > .content .editor-group-container > .title .tabs-container > .tab:hover  {
				outline: 1px solid;
				outline-offset: -5px;
			}

			.monaco-workbench .part.editor > .content .editor-group-container > .title .tabs-container > .tab.active > .tab-actions .action-label,
			.monaco-workbench .part.editor > .content .editor-group-container > .title .tabs-container > .tab.active:hover > .tab-actions .action-label,
			.monaco-workbench .part.editor > .content .editor-group-container > .title .tabs-container > .tab.dirty > .tab-actions .action-label,
			.monaco-workbench .part.editor > .content .editor-group-container > .title .tabs-container > .tab.sticky > .tab-actions .action-label,
			.monaco-workbench .part.editor > .content .editor-group-container > .title .tabs-container > .tab:hover > .tab-actions .action-label {
				opacity: 1 !important;
			}
		`);
  const r=n.getColor(Du);
  r&&e.addRule(`
			.monaco-workbench .part.editor > .content .editor-group-container > .title .editor-actions {
				outline: 1px solid ${r}
			}
		`);
  const s=n.getColor(x0a);
  s&&e.addRule(`
			.monaco-workbench .part.editor > .content .editor-group-container.active > .title .tabs-container > .tab:not(.selected):hover {
				background-color: ${s} !important;
			}
		`);
  const o=n.getColor(A1f);
  o&&e.addRule(`
			.monaco-workbench .part.editor > .content .editor-group-container > .title .tabs-container > .tab:not(.selected):hover  {
				background-color: ${o} !important;
			}
		`);
  const a=n.getColor(T0a);
  a&&e.addRule(`
			.monaco-workbench .part.editor > .content .editor-group-container.active > .title .tabs-container > .tab:not(.selected):hover  {
				color: ${a} !important;
			}
		`);
  const l=n.getColor(y1f);
  l&&e.addRule(`
			.monaco-workbench .part.editor > .content .editor-group-container > .title .tabs-container > .tab:not(.selected):hover  {
				color: ${l} !important;
			}
		`);
  const u=n.getColor(I0a);
  u&&e.addRule(`
			.monaco-workbench .part.editor > .content .editor-group-container.active > .title .tabs-container > .tab:hover > .tab-border-bottom-container {
				display: block;
				position: absolute;
				left: 0;
				pointer-events: none;
				width: 100%;
				z-index: 10;
				bottom: 0;
				height: 1px;
				background-color: ${u};
			}
		`);
  const d=n.getColor(k1f);
  if(d&&e.addRule(`
			.monaco-workbench .part.editor > .content .editor-group-container > .title .tabs-container > .tab:hover > .tab-border-bottom-container  {
				display: block;
				position: absolute;
				left: 0;
				pointer-events: none;
				width: 100%;
				z-index: 10;
				bottom: 0;
				height: 1px;
				background-color: ${d};
			}
		`), !Poe(n.type)&&!kte&&!i){
    const m=hgn(n), p=n.getColor(Wm), g=n.getColor(Lmu), f=n.getColor(Cqe);
    let A;
    g&&p&&(A=g.flatten(p, p, m));
    let w;
    g&&p&&f&&p&&(w=g.flatten(p, f, p, m));
    const C=(M, O, $=!1)=>`
			.monaco-workbench .part.editor > .content:not(.dragged-over) .editor-group-container${$?".active":""} > .title .tabs-container > .tab.sizing-shrink:not(.dragged):not(.sticky-compact):hover > .tab-label > .monaco-icon-label-container::after,
			.monaco-workbench .part.editor > .content:not(.dragged-over) .editor-group-container${$?".active":""} > .title .tabs-container > .tab.sizing-fixed:not(.dragged):not(.sticky-compact):hover > .tab-label > .monaco-icon-label-container::after {
				background: linear-gradient(to left, ${M}, transparent) !important;
			}

			.monaco-workbench .part.editor > .content.dragged-over .editor-group-container${$?".active":""} > .title .tabs-container > .tab.sizing-shrink:not(.dragged):not(.sticky-compact):hover > .tab-label > .monaco-icon-label-container::after,
			.monaco-workbench .part.editor > .content.dragged-over .editor-group-container${$?".active":""} > .title .tabs-container > .tab.sizing-fixed:not(.dragged):not(.sticky-compact):hover > .tab-label > .monaco-icon-label-container::after {
				background: linear-gradient(to left, ${O}, transparent) !important;
			}
		`;
    if(s&&A&&w){
      const M=s.flatten(A),O=s.flatten(w);
      e.addRule(C(M,O,!0))
    }
    if(o&&A&&w){
      const M=o.flatten(A),O=o.flatten(w);
      e.addRule(C(M,O))
    }
    if(f&&w){
      const M=f.flatten(w);
      e.addRule(`
				.monaco-workbench .part.editor > .content.dragged-over .editor-group-container.active > .title .tabs-container > .tab.sizing-shrink.dragged-over:not(.active):not(.dragged):not(.sticky-compact) > .tab-label > .monaco-icon-label-container::after,
				.monaco-workbench .part.editor > .content.dragged-over .editor-group-container:not(.active) > .title .tabs-container > .tab.sizing-shrink.dragged-over:not(.dragged):not(.sticky-compact) > .tab-label > .monaco-icon-label-container::after,
				.monaco-workbench .part.editor > .content.dragged-over .editor-group-container.active > .title .tabs-container > .tab.sizing-fixed.dragged-over:not(.active):not(.dragged):not(.sticky-compact) > .tab-label > .monaco-icon-label-container::after,
				.monaco-workbench .part.editor > .content.dragged-over .editor-group-container:not(.active) > .title .tabs-container > .tab.sizing-fixed.dragged-over:not(.dragged):not(.sticky-compact) > .tab-label > .monaco-icon-label-container::after {
					background: linear-gradient(to left, ${M}, transparent) !important;
				}
		`)
    }
    const x=(M, O, $, H)=>`
				.monaco-workbench .part.editor > .content:not(.dragged-over) .editor-group-container${$?".active":":not(.active)"} > .title .tabs-container > .tab.sizing-shrink${H?".active":""}:not(.dragged):not(.sticky-compact) > .tab-label > .monaco-icon-label-container::after,
				.monaco-workbench .part.editor > .content:not(.dragged-over) .editor-group-container${$?".active":":not(.active)"} > .title .tabs-container > .tab.sizing-fixed${H?".active":""}:not(.dragged):not(.sticky-compact) > .tab-label > .monaco-icon-label-container::after {
					background: linear-gradient(to left, ${M}, transparent);
				}

				.monaco-workbench .part.editor > .content.dragged-over .editor-group-container${$?".active":":not(.active)"} > .title .tabs-container > .tab.sizing-shrink${H?".active":""}:not(.dragged):not(.sticky-compact) > .tab-label > .monaco-icon-label-container::after,
				.monaco-workbench .part.editor > .content.dragged-over .editor-group-container${$?".active":":not(.active)"} > .title .tabs-container > .tab.sizing-fixed${H?".active":""}:not(.dragged):not(.sticky-compact) > .tab-label > .monaco-icon-label-container::after {
					background: linear-gradient(to left, ${O}, transparent);
				}
		`, I=n.getColor(E0a);
    if(I&&A&&w){
      const M=I.flatten(A),O=I.flatten(w);
      e.addRule(x(M,O,!0,!0))
    }
    const B=n.getColor(f1f);
    if(B&&A&&w){
      const M=B.flatten(A),O=B.flatten(w);
      e.addRule(x(M,O,!1,!0))
    }
    const R=n.getColor(Bmu);
    if(R&&A&&w){
      const M=R.flatten(A),O=R.flatten(w);
      e.addRule(x(M,O,!0,!1))
    }
    const N=n.getColor(b1f);
    if(N&&A&&w){
      const M=N.flatten(A),O=N.flatten(w);
      e.addRule(x(M,O,!1,!1))
    }
  }
})
}
}), G1a, Kcy=
// Module: out-build/vs/workbench/browser/parts/editor/singleEditorTabsControl.js
// Offset: 32370353 (bundle byte offset)
// Size: 8865 bytes

ri(), Dx(), Ay(), xf(), _r(), rt(), np(), Js(), Ei(), si(), pl(), Wt(), ka(), So(), Kl(), $b(), Io(), Nu(), ky(), n7e(), V3(), of(), Wu(), zp(), Mm(), AD(), wm(), Hit(), zF(), XLf(), od(), Mm(), l5(), J1a(), Ffn(), kr(), wOf(), W1a=class extends Ofn{
  get breadcrumbsControl(){
    return this.breadcrumbsControlFactory?.control
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g, f, A, w, C, x){
    super(e, t, i, r, s, o, a, l, u, d, m, p, g, f, A), this.layoutService=w, this.configurationService=C, this.storageService=x, this.activeLabel=Object.create(null), this.editorGroupPosition=H1a, this.dimensions={
      container:Lu.None,available:Lu.None
    };
    const I=()=>{
      this.updateEditorGroupPosition(),this.updateLayoutActionsContainerVisibility()
    }, B=new Set([Tce.key, ONe]);
    this._register(l.onDidChangeContext(R=>{
      R.affectsSome(B)&&I(),R.affectsSome(new Set([opn.key]))&&As(this.parent).requestAnimationFrame(()=>{
        I()
      })
    })), this._register(this.layoutService.onDidChangePartVisibility(()=>{
      I()
    })), this._register(this.configurationService.onDidChangeConfiguration(R=>{
      (R.affectsConfiguration("workbench.sideBar.location")||R.affectsConfiguration("workbench.editor.showTabs"))&&I()
    })), this.editorGroupsService=this.instantiationService.invokeFunction(R=>R.get(da)), this._register(this.editorGroupsService.onDidAddGroup(()=>{
      I()
    })), this._register(this.editorGroupsService.onDidRemoveGroup(()=>{
      I()
    })), this._register(this.editorGroupsService.onDidMoveGroup(()=>{
      I()
    })), this._register(A.onDidChangeGates(R=>{
      (!R.changedGates||R.changedGates.has("chat_editor_group_enabled"))&&I()
    })), queueMicrotask(()=>{
      I()
    })
  }
  create(e){
    super.create(e);
    const t=this.titleContainer=e;
    t.draggable=!0, this.registerContainerListeners(t), this._register(E1.addTarget(t)), this.titleAndActionsContainer=Ct(".title-and-actions-container"), t.appendChild(this.titleAndActionsContainer), this.createLeftActionsContainer(this.titleAndActionsContainer);
    const i=Ct(".label-container");
    return this.titleAndActionsContainer.appendChild(i), this.editorLabel=this._register(this.instantiationService.createInstance(RMe, i, {
      
    })).element, this._register(ei(this.editorLabel.element, ir.CLICK, r=>this.onTitleLabelClick(r))), this.breadcrumbsControlFactory=this._register(this.instantiationService.createInstance(Q0i, i, this.groupView, {
      showFileIcons:!1,showSymbolIcons:!0,showDecorationColors:!1,widgetStyles:{
        ...eBc,breadcrumbsBackground:Xr.transparent.toString()
      },showPlaceholder:!1,dragEditor:!0
    })), this._register(this.breadcrumbsControlFactory.onDidEnablementChange(()=>this.handleBreadcrumbsEnablementChange())), t.classList.toggle("breadcrumbs", !!this.breadcrumbsControl), this._register($i(()=>t.classList.remove("breadcrumbs"))), this.createEditorActionsToolBar(this.titleAndActionsContainer, ["title-actions"]), this.createLayoutActionsContainer(this.titleAndActionsContainer), Fs&&this._register(boe(()=>{
      this.titleAndActionsContainer&&this.updateTitleContainerTrafficLightsSpacing()
    })), t
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
  updateEditorGroupPosition(){
    this.editorGroupPosition=bOf(this.instantiationService, this.groupView)
  }
  updateLayoutActionsContainerVisibility(){
    !this.layoutActionsContainer||!this.titleAndActionsContainer||!this.contextKeyService||(this.layoutActionsResizeObserver||(this.layoutActionsResizeObserver=vOf({
      layoutActionsContainer:this.layoutActionsContainer,onWidthChange:()=>this.layout(this.dimensions)
    })), Fs&&this.updateTitleContainerTrafficLightsSpacing())
  }
  updateTitleContainerTrafficLightsSpacing(){
    const e=this.titleAndActionsContainer;
    if(!e?.style)return;
    const t=gOf(e, {
      contextKeyService:this.contextKeyService,layoutService:this.layoutService,storageService:this.storageService,configurationService:this.configurationService,experimentService:this.experimentService,editorGroupsContainer:this.editorGroupsService.mainPart
    });
    t!==void 0&&this.editorGroupPosition.isTopMost&&this.editorGroupPosition.isLeftMost?e.style.setProperty("padding-left", `${t}px`, "important"):e.style.removeProperty("padding-left")
  }
  registerContainerListeners(e){
    let t, i=!1;
    this._register(new PH(e, {
      onDragStart:r=>{
        i=this.onGroupDragStart(r,e)
      },onDrag:r=>{
        t=r
      },onDragEnd:r=>{
        this.onGroupDragEnd(r,t,e,i)
      }
    })), this._register(ei(e, ir.DBLCLICK, r=>this.onTitleDoubleClick(r))), this._register(ei(e, ir.AUXCLICK, r=>this.onTitleAuxClick(r))), this._register(ei(e, MA.Tap, r=>this.onTitleTap(r)));
    for(const r of[ir.CONTEXT_MENU, MA.Contextmenu])this._register(ei(e, r, s=>{
      this.tabsModel.activeEditor&&this.onTabContextMenu(this.tabsModel.activeEditor,s,e)
    }))
  }
  onTitleLabelClick(e){
    zu.stop(e, !1), setTimeout(()=>this.quickInputService.quickAccess.show())
  }
  onTitleDoubleClick(e){
    zu.stop(e), this.groupView.pinEditor()
  }
  onTitleAuxClick(e){
    e.button===1&&this.tabsModel.activeEditor&&(zu.stop(e, !0), $Wl(this.tabsModel, this.tabsModel.activeEditor, zUe.MOUSE, this.groupsView.partOptions)||this.groupView.closeEditor(this.tabsModel.activeEditor))
  }
  onTitleTap(e){
    const t=e.initialTarget;
    !wf(t)||!this.editorLabel||!HS(t, this.editorLabel.element)||setTimeout(()=>this.quickInputService.quickAccess.show(), 50)
  }
  openEditor(e){
    return this.doHandleOpenEditor()
  }
  openEditors(e){
    return this.doHandleOpenEditor()
  }
  doHandleOpenEditor(){
    const e=this.ifActiveEditorChanged(()=>this.redraw());
    return e||this.ifActiveEditorPropertiesChanged(()=>this.redraw()), e
  }
  beforeCloseEditor(e){
    
  }
  closeEditor(e){
    this.ifActiveEditorChanged(()=>this.redraw())
  }
  closeEditors(e){
    this.ifActiveEditorChanged(()=>this.redraw())
  }
  moveEditor(e, t, i){
    this.ifActiveEditorChanged(()=>this.redraw())
  }
  pinEditor(e){
    this.ifEditorIsActive(e, ()=>this.redraw())
  }
  stickEditor(e){
    
  }
  unstickEditor(e){
    
  }
  setActive(e){
    this.redraw()
  }
  updateEditorSelections(){
    
  }
  updateEditorLabel(e){
    this.ifEditorIsActive(e, ()=>this.redraw())
  }
  updateEditorDirty(e){
    this.ifEditorIsActive(e, ()=>{
      const t=ed(this.titleContainer);
      e.isDirty()&&!e.isSaving()?t.classList.add("dirty"):t.classList.remove("dirty")
    })
  }
  updateOptions(e, t){
    super.updateOptions(e, t), (e.labelFormat!==t.labelFormat||!fv(e.decorations, t.decorations))&&this.redraw()
  }
  updateStyles(){
    this.redraw()
  }
  handleBreadcrumbsEnablementChange(){
    ed(this.titleContainer).classList.toggle("breadcrumbs", !!this.breadcrumbsControl), this.redraw()
  }
  ifActiveEditorChanged(e){
    return!this.activeLabel.editor&&this.tabsModel.activeEditor||this.activeLabel.editor&&!this.tabsModel.activeEditor||!this.activeLabel.editor||!this.tabsModel.isActive(this.activeLabel.editor)?(e(), !0):!1
  }
  ifActiveEditorPropertiesChanged(e){
    !this.activeLabel.editor||!this.tabsModel.activeEditor||this.activeLabel.pinned!==this.tabsModel.isPinned(this.tabsModel.activeEditor)&&e()
  }
  ifEditorIsActive(e, t){
    this.tabsModel.isActive(e)&&t()
  }
  redraw(){
    const e=this.tabsModel.activeEditor??void 0, t=this.groupsView.partOptions, i=e?this.tabsModel.isPinned(e):!1, r=this.groupsView.activeGroup===this.groupView;
    this.activeLabel={
      editor:e,pinned:i
    }, this.breadcrumbsControl&&(r?(this.breadcrumbsControl.update(), this.breadcrumbsControl.domNode.classList.toggle("preview", !i)):this.breadcrumbsControl.hide());
    const[s, o]=dde(this.titleContainer, this.editorLabel);
    if(!e)s.classList.remove("dirty"), o.clear(), this.clearEditorActionsToolbar();
    else{
      this.updateEditorDirty(e);
      const{
        labelFormat:a
      }
      =this.groupsView.partOptions;
      let l;
      this.breadcrumbsControl&&!this.breadcrumbsControl.isHidden()||a==="default"&&!r?l="":l=e.getDescription(this.getVerbosity(a))||"";
      const u=gp.getOriginalUri(e,{
        supportSideBySide:op.PRIMARY
      }),d=u?jMe(u):!1,m=e.getName(),p=d?`${m} (Worktree)`:m;
      o.setResource({
        resource:gp.getOriginalUri(e,{
          supportSideBySide:op.BOTH
        }),name:p,description:l
      },{
        title:this.getHoverTitle(e),italic:!i||d,extraClasses:["single-tab","title-label",d?"worktree-tab-label":void 0].filter(Boolean).concat(e.getLabelExtraClasses()),fileDecorations:{
          colors:!!t.decorations?.colors,badges:!!t.decorations?.badges
        },icon:e.getIcon(),hideIcon:t.showIcons===!1
      }),r?s.style.color=this.getColor(_qe)||"":s.style.color=this.getColor(v1f)||"",this.updateEditorActionsToolbar()
    }
  }
  getVerbosity(e){
    switch(e){
      case"short":return 0;
      case"long":return 2;
      default:return 1
    }
  }
  prepareEditorActions(e, t){
    if(this.groupsView.activeGroup===this.groupView)return e;
    {
      const r=[$ce,N1t,...dGl];
      return{
        primary:this.groupsView.partOptions.alwaysShowEditorActions?e.primary:e.primary.filter(s=>r.includes(s.id)),secondary:e.secondary
      }
    }
  }
  getHeight(){
    return this.tabHeight
  }
  layout(e){
    return this.dimensions=e, this.breadcrumbsControl?.layout(void 0), new Lu(e.container.width, this.getHeight())
  }
  dispose(){
    super.dispose(), this.layoutActionsResizeObserver?.disconnect(), this.layoutActionsResizeObserver=void 0
  }
}, W1a=__decorate([__param(5, kc), __param(6, ln), __param(7, wi), __param(8, mo), __param(9, ms), __param(10, ha), __param(11, bo), __param(12, vD), __param(13, wd), __param(14, Tl), __param(15, Vu), __param(16, Fn), __param(17, Hi)], W1a)
}
}), Q1a, Xcy=
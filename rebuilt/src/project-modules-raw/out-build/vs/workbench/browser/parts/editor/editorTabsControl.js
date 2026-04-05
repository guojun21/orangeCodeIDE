// Module: out-build/vs/workbench/browser/parts/editor/editorTabsControl.js
// Offset: 32305528 (bundle byte offset)
// Size: 9276 bytes

zcy(), Ht(), dz(), ri(), h0(), Ov(), nl(), rt(), dg(), dr(), si(), pl(), Wt(), ka(), So(), Kl(), Io(), A8(), hB(), Nu(), Mm(), Js(), Ay(), _s(), Zq(), vT(), sN(), AD(), l5(), od(), _r(), wm(), E_(), tg(), sbt(), Wu(), n7e(), q1a=class extends jD{
  constructor(n){
    super(), this.context=n
  }
  run(n, e){
    let t=this.context;
    return e?.preserveFocus&&(t={
      ...this.context,preserveFocus:!0
    }), super.run(n, t)
  }
}, Ofn=class extends NH{
  static{
    $1a=this
  }
  static{
    this.EDITOR_TAB_HEIGHT={
      normal:35,compact:22
    }
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g, f, A){
    super(p), this.parent=e, this.editorPartsView=t, this.groupsView=i, this.groupView=r, this.tabsModel=s, this.contextMenuService=o, this.instantiationService=a, this.contextKeyService=l, this.keybindingService=u, this.notificationService=d, this.quickInputService=m, this.editorResolverService=g, this.hostService=f, this.experimentService=A, this.editorTransfer=GB.getInstance(), this.groupTransfer=GB.getInstance(), this.treeItemsTransfer=GB.getInstance(), this.editorActionsToolbarDisposables=this._register(new Ut), this.editorActionsDisposables=this._register(new Ut), this.renderDropdownAsChildElement=!1;
    const w=this.create(e);
    this.contextMenuContextKeyService=this._register(this.contextKeyService.createScoped(w));
    const C=this._register(this.instantiationService.createChild(new EA([wi, this.contextMenuContextKeyService])));
    this.resourceContext=this._register(C.createInstance(Ep)), this.editorPinnedContext=Uva.bindTo(this.contextMenuContextKeyService), this.editorIsFirstContext=Fau.bindTo(this.contextMenuContextKeyService), this.editorIsLastContext=ryi.bindTo(this.contextMenuContextKeyService), this.editorStickyContext=PEe.bindTo(this.contextMenuContextKeyService), this.editorAvailableEditorIds=Dnt.bindTo(this.contextMenuContextKeyService), this.editorCanSplitInGroupContext=Int.bindTo(this.contextMenuContextKeyService), this.sideBySideEditorContext=fie.bindTo(this.contextMenuContextKeyService), this.groupLockedContext=Dye.bindTo(this.contextMenuContextKeyService)
  }
  create(e){
    return this.updateTabHeight(), e
  }
  get editorActionsEnabled(){
    const{
      editorActionsLocation:e,showTabs:t
    }
    =this.groupsView.partOptions;
    return t==="none"?!1:e==="default"||e==="titleBar"&&Jit(this.contextKeyService)
  }
  isInsideAuxiliaryBar(){
    return this.editorActionsToolbarContainer?.closest(".part.auxiliarybar")!=null
  }
  createEditorActionsToolBar(e, t){
    this.editorActionsToolbarContainer=Ct("div"), this.editorActionsToolbarContainer.classList.add(...t), e.appendChild(this.editorActionsToolbarContainer), this.handleEditorActionToolBarVisibility(this.editorActionsToolbarContainer)
  }
  createLayoutActionsContainer(e){
    this.layoutActionsContainer=Ct("div"), this.layoutActionsContainer.classList.add("layout-actions-container"), e.appendChild(this.layoutActionsContainer)
  }
  createLeftActionsContainer(e){
    this.leftActionsContainer=Ct("div"), this.leftActionsContainer.classList.add("left-actions-container"), e.prepend(this.leftActionsContainer)
  }
  handleEditorActionToolBarVisibility(e){
    const t=this.editorActionsEnabled, i=!!this.editorActionsToolbar;
    t&&!i?this.doCreateEditorActionsToolBar(e):!t&&i&&(this.editorActionsToolbar?.getElement().remove(), this.editorActionsToolbar=void 0, this.editorActionsToolbarDisposables.clear(), this.editorActionsDisposables.clear()), e.classList.toggle("hidden", !t)
  }
  doCreateEditorActionsToolBar(e){
    const t={
      groupId:this.groupView.id
    };
    this.editorActionsToolbar=this.editorActionsToolbarDisposables.add(this.instantiationService.createInstance(KI, e, {
      actionViewItemProvider:(i,r)=>this.actionViewItemProvider(i,r),orientation:0,ariaLabel:_(3824,null),getKeyBinding:i=>this.getKeybinding(i),actionRunner:this.editorActionsToolbarDisposables.add(new q1a(t)),anchorAlignmentProvider:()=>1,renderDropdownAsChildElement:this.renderDropdownAsChildElement,telemetrySource:"editorPart",resetMenu:st.EditorTitle,overflowBehavior:{
        maxItems:9,exempted:Ufu
      },highlightToggledItems:!0
    })), this.editorActionsToolbar.context=t, this.editorActionsToolbarDisposables.add(this.editorActionsToolbar.actionRunner.onDidRun(i=>{
      i.error&&!bf(i.error)&&this.notificationService.error(i.error)
    }))
  }
  actionViewItemProvider(e, t){
    const i=this.groupView.activeEditorPane;
    if(i instanceof fD){
      const r=i.getActionViewItem(e,t);
      if(r)return r
    }
    return GR(this.instantiationService, e, {
      ...t,menuAsChild:this.renderDropdownAsChildElement
    })
  }
  updateEditorActionsToolbar(){
    if(!this.editorActionsEnabled||!this.editorActionsToolbar)return;
    this.editorActionsDisposables.clear();
    const e=this.groupView.createEditorActions(this.editorActionsDisposables);
    this.editorActionsDisposables.add(e.onDidChange(()=>this.updateEditorActionsToolbar()));
    const{
      primary:t,secondary:i
    }
    =this.prepareEditorActions(e.actions, this.experimentService);
    this.editorActionsToolbar.setActions(jH(t), jH(i))
  }
  getEditorPaneAwareContextKeyService(){
    return this.groupView.activeEditorPane?.scopedContextKeyService??this.contextKeyService
  }
  clearEditorActionsToolbar(){
    if(!this.editorActionsEnabled)return;
    ed(this.editorActionsToolbar).setActions([], [])
  }
  onGroupDragStart(e, t){
    if(e.target!==t)return!1;
    const i=this.isNewWindowOperation(e);
    this.groupTransfer.setData([new VF(this.groupView.id)], VF.prototype), e.dataTransfer&&(e.dataTransfer.effectAllowed="copyMove");
    let r=!1;
    if(this.groupsView.partOptions.showTabs==="multiple"?r=this.doFillResourceDataTransfers(this.groupView.getEditors(1), e, i):this.groupView.activeEditor&&(r=this.doFillResourceDataTransfers([this.groupView.activeEditor], e, i)), !r&&u3&&e.dataTransfer?.setData(fT.TEXT, String(this.groupView.label)), this.groupView.activeEditor){
      let s=this.groupView.activeEditor.getName();
      this.groupsView.partOptions.showTabs==="multiple"&&this.groupView.count>1&&(s=_(3825,null,s,this.groupView.count-1)),rbt(e,t,s)
    }
    return i
  }
  async onGroupDragEnd(e, t, i, r){
    if(this.groupTransfer.clearData(VF.prototype), e.target!==i||!r||lLf())return;
    const s=await this.maybeCreateAuxiliaryEditorPartAt(e, i);
    if(!s)return;
    const o=s.activeGroup;
    this.groupsView.mergeGroup(this.groupView, o.id, {
      mode:this.isMoveOperation(t??e,o.id)?1:0
    }), o.focus()
  }
  async maybeCreateAuxiliaryEditorPartAt(e, t){
    const{
      point:i,display:r
    }
    =await this.hostService.getCursorScreenPoint()??{
      point:{
        x:e.screenX,y:e.screenY
      }
    }, s=$c();
    if(s.document.visibilityState==="visible"&&s.document.hasFocus()&&i.x>=s.screenX&&i.x<=s.screenX+s.outerWidth&&i.y>=s.screenY&&i.y<=s.screenY+s.outerHeight)return;
    const o=t.offsetWidth/2, a=30+t.offsetHeight/2, l={
      x:i.x-o,y:i.y-a
    };
    return r&&(l.x<r.x&&(l.x=r.x), l.y<r.y&&(l.y=r.y)), this.editorPartsView.createAuxiliaryEditorPart({
      bounds:l
    })
  }
  isNewWindowOperation(e){
    return this.groupsView.partOptions.dragToOpenWindow?!e.altKey:e.altKey
  }
  isMoveOperation(e, t, i){
    return i?.hasCapability(8)?!0:!(e.ctrlKey&&!Fs||e.altKey&&Fs)||t===this.groupView.id
  }
  doFillResourceDataTransfers(e, t, i){
    return e.length?(this.instantiationService.invokeFunction(Yme, e.map(r=>({
      editor:r,groupId:this.groupView.id
    })), t, {
      disableStandardTransfer:i
    }), !0):!1
  }
  onTabContextMenu(e, t, i){
    this.resourceContext.set(gp.getOriginalUri(e, {
      supportSideBySide:op.PRIMARY
    })), this.editorPinnedContext.set(this.tabsModel.isPinned(e)), this.editorIsFirstContext.set(this.tabsModel.isFirst(e)), this.editorIsLastContext.set(this.tabsModel.isLast(e)), this.editorStickyContext.set(this.tabsModel.isSticky(e)), this.groupLockedContext.set(this.tabsModel.isLocked), this.editorCanSplitInGroupContext.set(e.hasCapability(32)), this.sideBySideEditorContext.set(e.typeId===O1.ID), Pef(this.editorAvailableEditorIds, e, this.editorResolverService);
    let r=i;
    I6(t)&&(r=new yy(As(i), t)), this.contextMenuService.showContextMenu({
      getAnchor:()=>r,menuId:st.EditorTitleContext,menuActionOptions:{
        shouldForwardArgs:!0,arg:this.resourceContext.get()
      },contextKeyService:this.contextMenuContextKeyService,getActionsContext:()=>({
        groupId:this.groupView.id,editorIndex:this.groupView.getIndexOfEditor(e)
      }),getKeyBinding:s=>this.keybindingService.lookupKeybinding(s.id,this.contextMenuContextKeyService),onHide:()=>this.groupsView.activeGroup.focus()
    })
  }
  getKeybinding(e){
    return this.keybindingService.lookupKeybinding(e.id, this.getEditorPaneAwareContextKeyService())
  }
  getKeybindingLabel(e){
    const t=this.getKeybinding(e);
    return t?t.getLabel()??void 0:void 0
  }
  get tabHeight(){
    return this.groupsView.partOptions.tabHeight!=="compact"?$1a.EDITOR_TAB_HEIGHT.normal:$1a.EDITOR_TAB_HEIGHT.compact
  }
  getHoverTitle(e){
    const t=e.getTitle(2);
    return this.tabsModel.isPinned(e)?t:{
      markdown:new _c("",{
        supportThemeIcons:!0,isTrusted:!0
      }).appendText(t).appendMarkdown(' (_preview_ [$(gear)](command:workbench.action.openSettings?%5B%22workbench.editor.enablePreview%22%5D "Configure Preview Mode"))'),markdownNotSupportedFallback:t+" (preview)"
    }
  }
  updateTabHeight(){
    this.parent.style.setProperty("--editor-group-tab-height", `${this.tabHeight}px`)
  }
  updateOptions(e, t){
    e.tabHeight!==t.tabHeight&&this.updateTabHeight(), (e.editorActionsLocation!==t.editorActionsLocation||e.showTabs!==t.showTabs)&&this.editorActionsToolbarContainer&&(this.handleEditorActionToolBarVisibility(this.editorActionsToolbarContainer), this.updateEditorActionsToolbar())
  }
}, Ofn=$1a=__decorate([__param(5, kc), __param(6, ln), __param(7, wi), __param(8, mo), __param(9, ms), __param(10, ha), __param(11, bo), __param(12, vD), __param(13, wd), __param(14, Tl)], Ofn), H1a={
  isTopMost:!0, isBottomMost:!0, isLeftMost:!0, isRightMost:!0
}
}
}), Vcy=
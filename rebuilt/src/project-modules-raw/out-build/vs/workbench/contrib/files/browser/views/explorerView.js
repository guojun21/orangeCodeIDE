// Module: out-build/vs/workbench/contrib/files/browser/views/explorerView.js
// Offset: 32504755 (bundle byte offset)
// Size: 18098 bytes

Ht(), O4(), U0(), gD(), Tka(), ri(), zp(), mly(), ps(), Ei(), ka(), Wt(), Xg(), pl(), si(), Mm(), Jye(), Rf(), dz(), ss(), od(), nk(), Pd(), GOf(), Io(), dr(), Pa(), hfn(), zF(), kr(), Kf(), ns(), yn(), jh(), Bp(), Fc(), _d(), Nu(), $ie(), qi(), hs(), AD(), wI(), cu(), Id(), MWl(), WOf={
  getId:n=>n instanceof w0i?`new:${n.getId()}`:n.getId()
}, bly={
  id:"fuzzyMatch", title:"Fuzzy Match", icon:Be.searchFuzzy, isChecked:!1
}, Y1t=class extends BT{
  static{
    gEa=this
  }
  static{
    this.TREE_VIEW_STATE_STORAGE_KEY="workbench.explorer.treeViewState"
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g, f, A, w, C, x, I, B, R, N, M, O, $, H){
    super(e, m, t, g, p, i, r, $, w, x), this.contextService=s, this.progressService=o, this.editorService=a, this.editorGroupsService=l, this.editorResolverService=u, this.layoutService=d, this.decorationService=f, this.labelService=A, this.telemetryService=C, this.explorerService=I, this.storageService=B, this.clipboardService=R, this.fileService=N, this.uriIdentityService=M, this.commandService=O, this.contextViewService=H, this._autoReveal=!1, this.delegate=e.delegate, this.resourceContext=r.createInstance(Ep), this._register(this.resourceContext), this.parentReadonlyContext=lgu.bindTo(p), this.folderContext=dB.bindTo(p), this.readonlyContext=cgu.bindTo(p), this.availableEditorIdsContext=ugu.bindTo(p), this.rootContext=gX.bindTo(p), this.resourceMoveableToTrash=Ngn.bindTo(p), this.compressedFocusContext=Mgn.bindTo(p), this.compressedFocusFirstContext=jCa.bindTo(p), this.compressedFocusLastContext=zCa.bindTo(p), this.viewHasSomeCollapsibleRootItem=TTf.bindTo(p), this.viewVisibleContextKey=wit.bindTo(p), this.explorerService.registerView(this)
  }
  getPreferredOpenTargetGroup(e){
    const t=this.editorService.activeEditorPane?.group??this.editorGroupsService.activeGroup, i=this.editorGroupsService.mainPart.getGroups(1);
    if(e){
      if(!t)return Aw;
      const s=this.editorGroupsService.findGroup({
        direction:3
      },t),o=this.editorGroupsService.findGroup({
        direction:2
      },t),a=this.editorGroupsService.findGroup({
        direction:1
      },t),l=[s,o,a],u=hCt(l);
      if(u)return u;
      const d=hCt(i,t.id);
      return d||(mCt(l)??Aw)
    }
    const r=t?[t, ...i.filter(s=>s.id!==t.id)]:i;
    return mCt(r)??B1
  }
  get autoReveal(){
    return this._autoReveal
  }
  set autoReveal(e){
    this._autoReveal=e
  }
  get name(){
    return this.labelService.getWorkspaceLabel(this.contextService.getWorkspace())
  }
  get title(){
    return this.name
  }
  set title(e){
    
  }
  setVisible(e){
    this.viewVisibleContextKey.set(e), super.setVisible(e)
  }
  get fileCopiedContextKey(){
    return Vfu.bindTo(this.contextKeyService)
  }
  get resourceCutContextKey(){
    return dgu.bindTo(this.contextKeyService)
  }
  renderHeader(e){
    super.renderHeader(e), this.dragHandler=new IIc(e, ()=>this.setExpanded(!0));
    const t=e.querySelector(".title"), i=()=>{
      t.textContent=this.name,this.updateTitle(this.name),this.ariaHeaderLabel=_(8078,null,this.name),t.setAttribute("aria-label",this.ariaHeaderLabel)
    };
    this._register(this.contextService.onDidChangeWorkspaceName(i)), this._register(this.labelService.onDidChangeFormatters(i)), i()
  }
  layoutBody(e, t){
    super.layoutBody(e, t), this.tree.layout(e, t)
  }
  renderBody(e){
    super.renderBody(e), this.container=e, this.treeContainer=Rt(e, Ct(".explorer-folders-view")), this.createTree(this.treeContainer), this._register(this.labelService.onDidChangeFormatters(()=>{
      this._onDidChangeTitleArea.fire()
    })), this.onConfigurationUpdated(void 0), this._register(this.editorService.onDidActiveEditorChange(()=>{
      this.selectActiveFile()
    })), this._register(this.configurationService.onDidChangeConfiguration(t=>this.onConfigurationUpdated(t))), this._register(this.onDidChangeBodyVisibility(async t=>{
      t&&(await this.setTreeInput(),this.updateAnyCollapsedContext(),this.selectActiveFile(!0))
    })), this._register(ei(As(this.container), ir.PASTE, async t=>{
      if(!(!this.hasFocus()||this.readonlyContext.get()||this.explorerService.isEditable(void 0)||dW(t.target))){
        if(t.clipboardData?.files?.length)await this.commandService.executeCommand("filesExplorer.paste",t.clipboardData?.files);
        else if(t.clipboardData){
          const i=t.clipboardData.getData("text/plain");
          i&&i.trim().length>0&&(t.preventDefault(),await this.commandService.executeCommand("explorer.createFileFromPaste",i))
        }
      }
    }))
  }
  focus(){
    if(super.focus(), this.tree.domFocus(), this.tree.getFocusedPart()===0){
      const e=this.tree.getFocus();
      e.length===1&&this._autoReveal&&this.tree.reveal(e[0],.5)
    }
  }
  hasFocus(){
    return UR(this.container)
  }
  getFocus(){
    return this.tree.getFocus()
  }
  focusNext(){
    this.tree.focusNext()
  }
  focusLast(){
    this.tree.focusLast()
  }
  getContext(e){
    const t=this.tree.getFocusedPart()===1?this.tree.getStickyScrollFocus():this.tree.getFocus();
    return fly(t, this.tree.getSelection(), e, this.renderer)
  }
  isItemVisible(e){
    return this.filter?this.filter.filter(e, 1):!1
  }
  isItemCollapsed(e){
    return this.tree.isCollapsed(e)
  }
  async setEditable(e, t){
    t?(this.horizontalScrolling=this.tree.options.horizontalScrolling, this.horizontalScrolling&&this.tree.updateOptions({
      horizontalScrolling:!1
    }), await this.tree.expand(e.parent)):(this.horizontalScrolling!==void 0&&this.tree.updateOptions({
      horizontalScrolling:this.horizontalScrolling
    }), this.horizontalScrolling=void 0, this.treeContainer.classList.remove("highlight")), await this.refresh(!1, e.parent, !1), t?(this.treeContainer.classList.add("highlight"), this.tree.reveal(e)):this.tree.domFocus()
  }
  async selectActiveFile(e=this._autoReveal){
    if(this._autoReveal){
      const t=gp.getCanonicalUri(this.editorService.activeEditor,{
        supportSideBySide:op.PRIMARY
      });
      if(t){
        const i=this.tree.getFocus(),r=this.tree.getSelection();
        return i.length===1&&this.uriIdentityService.extUri.isEqual(i[0].resource,t)&&r.length===1&&this.uriIdentityService.extUri.isEqual(r[0].resource,t)?void 0:this.explorerService.select(t,e)
      }
    }
  }
  createTree(e){
    this.filter=this.instantiationService.createInstance(dEa), this._register(this.filter), this._register(this.filter.onDidChange(()=>this.refresh(!0)));
    const t=this.instantiationService.createInstance(c5, {
      onDidChangeVisibility:this.onDidChangeBodyVisibility
    });
    this._register(t), this.findProvider=this.instantiationService.createInstance(uEa, this.filter, ()=>this.tree);
    const i=a=>this.tree.updateWidth(a);
    this.renderer=this.instantiationService.createInstance(yCi, e, t, this.findProvider.highlightTree, i), this._register(this.renderer), this._register(zAu(e, this.themeService));
    const r=()=>this.configurationService.getValue("explorer.compactFolders"), s=a=>this.configurationService.getValue({
      resource:a?.root.resource
    }).explorer.fileNesting;
    this.tree=this.instantiationService.createInstance(Bet, "FileExplorer", e, new WAu, new JOf, [this.renderer], this.instantiationService.createInstance(lEa, this.filter, this.findProvider), {
      compressionEnabled:r(),accessibilityProvider:this.renderer,identityProvider:WOf,keyboardNavigationLabelProvider:{
        getKeyboardNavigationLabel:a=>{
          if(!this.explorerService.isEditable(a))return a.name
        },getCompressedNodeKeyboardNavigationLabel:a=>{
          if(!a.some(l=>this.explorerService.isEditable(l)))return a.map(l=>l.name).join("/")
        }
      },multipleSelectionSupport:!0,filter:this.filter,sorter:this.instantiationService.createInstance(hEa),dnd:this.instantiationService.createInstance(mEa,a=>this.isItemCollapsed(a)),collapseByDefault:a=>!(a instanceof v8&&(a.hasNests&&s(a).expand||this.findProvider.isShowingFilterResults())),autoExpandSingleChildren:!0,expandOnlyOnTwistieClick:a=>{
        if(a instanceof v8){
          if(a.hasNests)return!0;
          if(this.configurationService.getValue("workbench.tree.expandMode")==="doubleClick")return!0
        }
        return!1
      },paddingBottom:WAu.ITEM_HEIGHT,overrideStyles:this.getLocationBasedColors().listOverrideStyles,findProvider:this.findProvider,contextViewProvider:this.contextViewService
    }), this._register(this.tree), this._register(this.themeService.onDidColorThemeChange(()=>this.tree.rerender()));
    const o=In.filter(this.configurationService.onDidChangeConfiguration, a=>a.affectsConfiguration("explorer.compactFolders"));
    this._register(o(a=>this.tree.updateOptions({
      compressionEnabled:r()
    }))), hgu.bindTo(this.tree.contextKeyService), QCa.bindTo(this.tree.contextKeyService), this._register(this.tree.onDidChangeFocus(a=>this.onFocusChanged(a.elements))), this.onFocusChanged([]), this._register(this.tree.onDidOpen(async a=>{
      const l=a.element;
      if(!l)return;
      if(!(BH(a.browserEvent)&&a.browserEvent.shiftKey)){
        if(l.isDirectory||this.explorerService.isEditable(void 0))return;
        this.telemetryService.publicLog2("workbenchActionExecuted",{
          id:"workbench.files.openFile",from:"explorer"
        });
        try{
          this.delegate?.willOpenElement(a.browserEvent);
          const d=this.getPreferredOpenTargetGroup(a.sideBySide);
          await this.editorService.openEditor({
            resource:l.resource,options:{
              preserveFocus:a.editorOptions.preserveFocus,pinned:a.editorOptions.pinned,source:rR.USER
            }
          },d)
        }
        finally{
          this.delegate?.didOpenElement()
        }
      }
    })), this._register(this.tree.onContextMenu(a=>this.onContextMenu(a))), this._register(this.tree.onDidScroll(async a=>{
      const l=this.explorerService.getEditable();
      a.scrollTopChanged&&l&&this.tree.getRelativeTop(l.stat)===null&&await l.data.onFinish("",!1)
    })), this._register(this.tree.onDidChangeCollapseState(a=>{
      const l=a.node.element?.element;
      l&&this.renderer.getCompressedNavigationController(l instanceof Array?l[0]:l)?.forEach(d=>d.updateCollapsed(a.node.collapsed)),this.updateAnyCollapsedContext()
    })), this.updateAnyCollapsedContext(), this._register(this.tree.onMouseDblClick(a=>{
      const l=this.configurationService.getValue("workbench.list.scrollByPage");
      a.element===null&&!l&&this.commandService.executeCommand(pfn)
    })), this._register(this.storageService.onWillSaveState(()=>{
      this.storeTreeViewState()
    }))
  }
  onConfigurationUpdated(e){
    if(!e||e.affectsConfiguration("explorer.autoReveal")){
      const t=this.configurationService.getValue();
      this._autoReveal=t?.explorer?.autoReveal
    }
    e&&(e.affectsConfiguration("explorer.decorations.colors")||e.affectsConfiguration("explorer.decorations.badges"))&&this.refresh(!0)
  }
  storeTreeViewState(){
    this.storageService.store(gEa.TREE_VIEW_STATE_STORAGE_KEY, JSON.stringify(this.tree.getViewState()), 1, 1)
  }
  setContextKeys(e){
    const t=this.contextService.getWorkspace().folders, i=e?e.resource:t[t.length-1].uri;
    if(e=e||this.explorerService.findClosest(i), this.resourceContext.set(i), this.folderContext.set(!!e&&e.isDirectory), this.readonlyContext.set(!!e&&!!e.isReadonly), this.parentReadonlyContext.set(!!e?.parent?.isReadonly), this.rootContext.set(!!e&&e.isRoot), i){
      const r=i?this.editorResolverService.getEditors(i).map(s=>s.id):[];
      this.availableEditorIdsContext.set(r.join(","))
    }
    else this.availableEditorIdsContext.reset()
  }
  async onContextMenu(e){
    if(dW(e.browserEvent.target))return;
    const t=e.element;
    let i=e.anchor;
    if(wf(i)&&t){
      const a=this.renderer.getCompressedNavigationController(t);
      a&&a.length>0&&(BH(e.browserEvent)||dly(e.browserEvent.target)?i=a[0].labels[a[0].index]:a.forEach(l=>l.last()))
    }
    this.fileCopiedContextKey.set(await this.clipboardService.hasResources()), this.setContextKeys(t);
    const r=this.tree.getSelection(), s=this.explorerService.roots;
    let o;
    if(t instanceof v8){
      const a=this.renderer.getCompressedNavigationController(t);
      o=a&&a.length?a[0].current.resource:t.resource
    }
    else o=s.length===1?s[0].resource:{
      
    };
    this.contextMenuService.showContextMenu({
      menuId:st.ExplorerContext,menuActionOptions:{
        arg:o,shouldForwardArgs:!0
      },contextKeyService:this.tree.contextKeyService,getAnchor:()=>i,onHide:a=>{
        a&&this.tree.domFocus()
      },getActionsContext:()=>t&&r&&r.indexOf(t)>=0?r.map(a=>a.resource):t instanceof v8?[t.resource]:[]
    })
  }
  onFocusChanged(e){
    const t=e&&e.length?e[0]:void 0;
    if(this.setContextKeys(t), t){
      const r=!!this.configurationService.getValue().files?.enableTrash,s=this.fileService.hasCapability(t.resource,4096);
      this.resourceMoveableToTrash.set(r&&s)
    }
    else this.resourceMoveableToTrash.reset();
    const i=t&&this.renderer.getCompressedNavigationController(t);
    if(!i){
      this.compressedFocusContext.set(!1);
      return
    }
    this.compressedFocusContext.set(!0), i.forEach(r=>{
      this.updateCompressedNavigationContextKeys(r)
    })
  }
  refresh(e, t, i=!0){
    if(!this.tree||!this.isBodyVisible()||t&&!this.tree.hasNode(t)||this.findProvider?.isShowingFilterResults()&&e)return Promise.resolve(void 0);
    i&&this.explorerService.isEditable(void 0)&&this.tree.domFocus();
    const r=t||this.tree.getInput();
    return this.tree.updateChildren(r, e, !!t)
  }
  getOptimalWidth(){
    const e=this.tree.getHTMLElement(), t=[].slice.call(e.querySelectorAll(".explorer-item .label-name"));
    return jSc(e, t)
  }
  async setTreeInput(){
    if(!this.isBodyVisible())return Promise.resolve(void 0);
    this.setTreeInputPromise&&await this.setTreeInputPromise;
    const e=!this.tree.getInput();
    e&&Yh("code/willResolveExplorer");
    const t=this.explorerService.roots;
    let i=t[0];
    (this.contextService.getWorkbenchState()!==2||t[0].error)&&(i=t);
    let r;
    if(this.tree&&this.tree.getInput())r=this.tree.getViewState();
    else{
      const a=this.storageService.get(gEa.TREE_VIEW_STATE_STORAGE_KEY,1);
      a&&(r=JSON.parse(a))
    }
    const s=this.tree.getInput(), o=this.setTreeInputPromise=this.tree.setInput(i, r).then(async()=>{
      if(Array.isArray(i)){
        if(!r||s instanceof v8)for(let a=0;
        a<Math.min(i.length,5);
        a++)try{
          await this.tree.expand(i[a])
        }
        catch{
          
        }
        if(!s&&i.length===1&&this.configurationService.getValue().explorer.expandSingleFolderWorkspaces&&await this.tree.expand(i[0]).catch(()=>{
          
        }),Array.isArray(s)){
          const a=new fu;
          s.forEach(l=>a.set(l.resource,!0)),await Promise.all(i.map(async l=>{
            if(!a.has(l.resource))try{
              await this.tree.expand(l)
            }
            catch{
              
            }
          }))
        }
      }
      e&&Yh("code/didResolveExplorer")
    });
    this.progressService.withProgress({
      location:1,delay:this.layoutService.isRestored()?800:1500
    }, a=>o), await o, this.decorationsProvider||(this.decorationsProvider=new pEa(this.explorerService, this.contextService), this._register(this.decorationService.registerDecorationsProvider(this.decorationsProvider)))
  }
  async selectResource(e, t=this._autoReveal, i=0){
    if(i===2||!e||!this.isBodyVisible())return;
    this.setTreeInputPromise&&await this.setTreeInputPromise;
    let r=this.explorerService.findClosestRoot(e);
    for(;
    r&&r.resource.toString()!==e.toString();
    ){
      try{
        await this.tree.expand(r)
      }
      catch{
        return this.selectResource(e,t,i+1)
      }
      if(!r.children.size)r=null;
      else for(const s of r.children.values()){
        if(this.uriIdentityService.extUri.isEqualOrParent(e,s.resource)){
          r=s;
          break
        }
        r=null
      }
    }
    if(r){
      if(r===this.tree.getInput()){
        this.tree.setFocus([]),this.tree.setSelection([]);
        return
      }
      try{
        r.nestedParent&&await this.tree.expand(r.nestedParent),(t===!0||t==="force")&&this.tree.getRelativeTop(r)===null&&this.tree.reveal(r,.5),this.tree.setFocus([r]),this.tree.setSelection([r])
      }
      catch{
        return this.selectResource(e,t,i+1)
      }
    }
  }
  itemsCopied(e, t, i){
    this.fileCopiedContextKey.set(e.length>0), this.resourceCutContextKey.set(t&&e.length>0), i?.forEach(r=>this.tree.rerender(r)), t&&e.forEach(r=>this.tree.rerender(r))
  }
  expandAll(){
    this.explorerService.isEditable(void 0)&&this.tree.domFocus(), this.tree.expandAll()
  }
  collapseAll(){
    this.explorerService.isEditable(void 0)&&this.tree.domFocus();
    const e=this.tree.getInput();
    if(Array.isArray(e)&&ply(this.tree, e)){
      e.forEach(t=>{
        t.children.forEach(i=>this.tree.hasNode(i)&&this.tree.collapse(i,!0))
      });
      return
    }
    this.tree.collapseAll()
  }
  previousCompressedStat(){
    const e=this.tree.getFocus();
    if(!e.length)return;
    this.renderer.getCompressedNavigationController(e[0]).forEach(i=>{
      i.previous(),this.updateCompressedNavigationContextKeys(i)
    })
  }
  nextCompressedStat(){
    const e=this.tree.getFocus();
    if(!e.length)return;
    this.renderer.getCompressedNavigationController(e[0]).forEach(i=>{
      i.next(),this.updateCompressedNavigationContextKeys(i)
    })
  }
  firstCompressedStat(){
    const e=this.tree.getFocus();
    if(!e.length)return;
    this.renderer.getCompressedNavigationController(e[0]).forEach(i=>{
      i.first(),this.updateCompressedNavigationContextKeys(i)
    })
  }
  lastCompressedStat(){
    const e=this.tree.getFocus();
    if(!e.length)return;
    this.renderer.getCompressedNavigationController(e[0]).forEach(i=>{
      i.last(),this.updateCompressedNavigationContextKeys(i)
    })
  }
  updateCompressedNavigationContextKeys(e){
    this.compressedFocusFirstContext.set(e.index===0), this.compressedFocusLastContext.set(e.index===e.count-1)
  }
  updateAnyCollapsedContext(){
    const e=this.tree.getInput();
    if(e===void 0)return;
    const t=Array.isArray(e)?e:Array.from(e.children.values());
    this.viewHasSomeCollapsibleRootItem.set(gly(this.tree, t)), this.storeTreeViewState()
  }
  hasPhantomElements(){
    return!!this.findProvider?.isShowingFilterResults()
  }
  dispose(){
    this.dragHandler?.dispose(), super.dispose()
  }
}, __decorate([cl], Y1t.prototype, "fileCopiedContextKey", null), __decorate([cl], Y1t.prototype, "resourceCutContextKey", null), Y1t=gEa=__decorate([__param(1, kc), __param(2, fp), __param(3, ln), __param(4, Lr), __param(5, Ib), __param(6, yi), __param(7, da), __param(8, vD), __param(9, Vu), __param(10, mo), __param(11, wi), __param(12, Fn), __param(13, Nie), __param(14, Ol), __param(15, bo), __param(16, ea), __param(17, Kc), __param(18, DC), __param(19, Hi), __param(20, jm), __param(21, Gr), __param(22, xl), __param(23, fr), __param(24, Ja), __param(25, sy)], Y1t), VAu=Ee.or(Ee.and(dB, ZEe), Ee.and(dB.toNegated(), lgu.toNegated())), Dt(class extends rn{
  constructor(){
    super({
      id:"workbench.files.action.createFileFromExplorer",title:_(8079,null),f1:!1,icon:Be.newFile,precondition:VAu,menu:{
        id:st.ViewTitle,group:"navigation",when:Ee.equals("view",GJ),order:10
      }
    })
  }
  run(n){
    n.get(fr).executeCommand(pfn)
  }
}), Dt(class extends rn{
  constructor(){
    super({
      id:"workbench.files.action.createFolderFromExplorer",title:_(8080,null),f1:!1,icon:Be.newFolder,precondition:VAu,menu:{
        id:st.ViewTitle,group:"navigation",when:Ee.equals("view",GJ),order:20
      }
    })
  }
  run(n){
    n.get(fr).executeCommand(C0i)
  }
}), Dt(class extends rn{
  constructor(){
    super({
      id:"workbench.files.action.refreshFilesExplorer",title:dt(8081,"Refresh Explorer"),f1:!0,icon:Be.refresh,menu:{
        id:st.ViewTitle,group:"navigation",when:Ee.equals("view",GJ),order:30
      },metadata:{
        description:dt(8082,"Forces a refresh of the Explorer.")
      },precondition:mgu.negate()
    })
  }
  async run(n){
    const e=n.get(yu), t=n.get(DC);
    await e.openView(GJ), await t.refresh()
  }
}), Dt(class extends rn{
  constructor(){
    super({
      id:"workbench.files.action.collapseExplorerFolders",title:dt(8083,"Collapse Folders in Explorer"),f1:!0,icon:Be.collapseAll,menu:{
        id:st.ViewTitle,group:"navigation",when:Ee.equals("view",GJ),order:40
      },metadata:{
        description:dt(8084,"Folds all folders in the Explorer.")
      }
    })
  }
  run(n){
    const t=n.get(yu).getViewWithId(GJ);
    t!==null&&t.collapseAll()
  }
})
}
}), YAu, fEa, QOf=
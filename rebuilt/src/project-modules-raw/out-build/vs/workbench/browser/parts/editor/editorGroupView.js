// Module: out-build/vs/workbench/browser/parts/editor/editorGroupView.js
// Offset: 32384866 (bundle byte offset)
// Size: 30321 bytes

ri(), h0(), Dx(), Ov(), IMe(), Vs(), vr(), ml(), yn(), iw(), rt(), zr(), _r(), Yr(), Yn(), R_i(), Ht(), dg(), dr(), Ei(), si(), pl(), ru(), wI(), ns(), Wt(), E_(), ka(), jr(), Xg(), kr(), Pa(), l8(), $b(), Nl(), Io(), _d(), Mm(), Nu(), Xq(), Qka(), Zq(), ky(), Q0(), m8(), of(), AD(), ss(), Wu(), N1(), wm(), k_i(), exe(), zoy(), Voy(), hB(), Yoy(), Xcy(), ely(), KMe=trt=class extends NH{
  static createNew(e, t, i, r, s, o){
    return s.createInstance(trt, null, e, t, i, r, o)
  }
  static createFromSerialized(e, t, i, r, s, o, a){
    return o.createInstance(trt, e, t, i, r, s, a)
  }
  static createCopy(e, t, i, r, s, o, a){
    return o.createInstance(trt, e, t, i, r, s, a)
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g, f, A, w, C, x, I, B, R, N, M, O, $, H){
    super(u), this.editorPartsView=t, this.groupsView=i, this.groupsLabel=r, this._index=s, this.instantiationService=a, this.contextKeyService=l, this.telemetryService=d, this.keybindingService=m, this.menuService=p, this.contextMenuService=g, this.fileDialogService=f, this.editorService=A, this.filesConfigurationService=w, this.uriIdentityService=C, this.logService=x, this.editorResolverService=I, this.hostService=B, this.dialogService=R, this.fileService=N, this.experimentService=M, this.configurationService=O, this.appLayoutService=$, this.storageService=H, this._onDidFocus=this._register(new Qe), this.onDidFocus=this._onDidFocus.event, this._onWillDispose=this._register(new Qe), this.onWillDispose=this._onWillDispose.event, this._onDidModelChange=this._register(new Qe), this.onDidModelChange=this._onDidModelChange.event, this._onDidActiveEditorChange=this._register(new Qe), this.onDidActiveEditorChange=this._onDidActiveEditorChange.event, this._onDidOpenEditorFail=this._register(new Qe), this.onDidOpenEditorFail=this._onDidOpenEditorFail.event, this._onWillCloseEditor=this._register(new Qe), this.onWillCloseEditor=this._onWillCloseEditor.event, this._onDidCloseEditor=this._register(new Qe), this.onDidCloseEditor=this._onDidCloseEditor.event, this._onWillMoveEditor=this._register(new Qe), this.onWillMoveEditor=this._onWillMoveEditor.event, this._onWillOpenEditor=this._register(new Qe), this.onWillOpenEditor=this._onWillOpenEditor.event, this.suppressNextTransientClearOnFocus=!1, this.disposedEditorsWorker=this._register(new ZFt(z=>this.handleDisposedEditors(z), 0)), this.mapEditorToPendingConfirmation=new Map, this.containerToolBarMenuDisposable=this._register(new uo), this.whenRestoredPromise=new wy, this.whenRestored=this.whenRestoredPromise.p, this._disposed=!1, this.element=Ct("div"), this._onDidChange=this._register(new CH), this.onDidChange=this._onDidChange.event, e instanceof trt?this.model=this._register(e.model.clone()):Gka(e)?this.model=this._register(a.createInstance(N0i, e)):this.model=this._register(a.createInstance(N0i, void 0)), this.scopedContextKeyService=this._register(this.contextKeyService.createScoped(this.element)), this.element.classList.add(...lh(["editor-group-container", this.model.isLocked?"locked":void 0])), this.registerContainerListeners(), this.createContainerToolbar(), this.createContainerContextMenu(), this._register(this.instantiationService.createInstance(Yka, this.element)), this._register(this.instantiationService.createInstance(jka, this.element, this)), this.progressBar=this._register(new qye(this.element, VSe)), this.progressBar.hide(), this.scopedInstantiationService=this._register(this.instantiationService.createChild(new EA([wi, this.scopedContextKeyService], [p2, this._register(new Tpu(this.progressBar, this))]))), this.resourceContext=this._register(this.scopedInstantiationService.createInstance(Ep)), this.handleGroupContextKeys(), this.titleContainer=Ct(".title"), this.element.appendChild(this.titleContainer), this.titleControl=this._register(this.scopedInstantiationService.createInstance(Q1a, this.titleContainer, this.editorPartsView, this.groupsView, this, this.model)), this.editorContainer=Ct(".editor-container"), this.element.appendChild(this.editorContainer), this.editorPane=this._register(this.scopedInstantiationService.createInstance(t1a, this.element, this.editorContainer, this)), this._onDidChange.input=this.editorPane.onDidChangeSizeConstraints, this.doTrackFocus(), this.updateTitleContainer(), this.updateContainer(), this.updateStyles(), (this.restoreEditors(e, o)??Promise.resolve()).finally(()=>{
      this.whenRestoredPromise.complete()
    }), this.registerListeners()
  }
  handleGroupContextKeys(){
    const e=this.editorPartsView.bind(ipn, this), t=this.editorPartsView.bind(Uva, this), i=this.editorPartsView.bind(Fau, this), r=this.editorPartsView.bind(ryi, this), s=this.editorPartsView.bind(PEe, this), o=this.editorPartsView.bind($au, this), a=this.editorPartsView.bind(Dye, this), l=pkt.bindTo(this.scopedContextKeyService), u=qau.bindTo(this.scopedContextKeyService), d=Hau.bindTo(this.scopedContextKeyService), m=this.editorPartsView.bind(ow, this), p=this.editorPartsView.bind(Nef, this), g=this.editorPartsView.bind(Uau, this), f=this.editorPartsView.bind(Oau, this), A=this.editorPartsView.bind($va, this), w=this.editorPartsView.bind(Hva, this), C=this.editorPartsView.bind(AQ, this), x=this.editorPartsView.bind(Dnt, this), I=this.editorPartsView.bind(Int, this), B=this.editorPartsView.bind(qva, this), R=this.editorPartsView.bind(fie, this), N=this._register(new uo), M=()=>{
      N.clear(),this.scopedContextKeyService.bufferChangeEvents(()=>{
        const $=this.activeEditor,H=this.activeEditorPane;
        if(this.resourceContext.set(gp.getOriginalUri($,{
          supportSideBySide:op.PRIMARY
        })),Pef(x,$,this.editorResolverService),$?(I.set($.hasCapability(32)),B.set($.resource?.scheme===_n.reviewChanges||$.resource?.scheme===_n.reviewPr),R.set($.typeId===O1.ID),e.set($.isDirty()&&!$.isSaving()),N.value=$.onDidChangeDirty(()=>{
          e.set($.isDirty()&&!$.isSaving())
        })):(I.set(!1),B.set(!1),R.set(!1),e.set(!1)),H){
          m.set(H.getId()),g.set(!H.input.hasCapability(4)),p.set(!!H.input.isReadonly());
          const W=gp.getOriginalUri(H.input,{
            supportSideBySide:op.PRIMARY
          }),z=gp.getOriginalUri(H.input,{
            supportSideBySide:op.SECONDARY
          });
          A.set(H.input instanceof kE&&!H.input.original.isReadonly()&&!!W&&(this.fileService.hasProvider(W)||W.scheme===_n.untitled)&&!!z&&(this.fileService.hasProvider(z)||z.scheme===_n.untitled)),f.set(!!W&&this.fileService.hasProvider(W)&&!this.fileService.hasCapability(W,2048));
          const Y=H?.getId()===tla;
          C.set(Y),w.set(Y)
        }
        else m.reset(),g.reset(),p.reset(),A.reset(),f.reset()
      })
    }, O=$=>{
      switch($.kind){
        case 3:a.set(this.isLocked);
        break;
        case 8:i.set(this.model.isFirst(this.model.activeEditor)),r.set(this.model.isLast(this.model.activeEditor)),t.set(this.model.activeEditor?this.model.isPinned(this.model.activeEditor):!1),s.set(this.model.activeEditor?this.model.isSticky(this.model.activeEditor):!1);
        break;
        case 6:t.set(this.model.activeEditor?this.model.isPinned(this.model.activeEditor):!1),s.set(this.model.activeEditor?this.model.isSticky(this.model.activeEditor):!1);
        case 5:case 7:i.set(this.model.isFirst(this.model.activeEditor)),r.set(this.model.isLast(this.model.activeEditor));
        break;
        case 11:$.editor&&$.editor===this.model.activeEditor&&t.set(this.model.isPinned(this.model.activeEditor));
        break;
        case 13:$.editor&&$.editor===this.model.activeEditor&&s.set(this.model.isSticky(this.model.activeEditor));
        break;
        case 4:l.set(this.model.selectedEditors.length>1),u.set(this.model.selectedEditors.length===2),d.set(this.model.selectedEditors.every(H=>H.resource&&(this.fileService.hasProvider(H.resource)||H.resource.scheme===_n.untitled)));
        break
      }
      o.set(this.count)
    };
    this._register(this.onDidModelChange($=>O($))), this._register(this.onDidActiveEditorChange(()=>M())), M(), O({
      kind:8
    }), O({
      kind:3
    })
  }
  registerContainerListeners(){
    this._register(ei(this.element, ir.DBLCLICK, e=>{
      this.isEmpty&&zu.stop(e)
    })), this._register(ei(this.element, ir.AUXCLICK, e=>{
      this.isEmpty&&e.button===1&&(zu.stop(e,!0),this.groupsView.removeGroup(this))
    }))
  }
  createContainerToolbar(){
    const e=Ct(".editor-group-container-toolbar");
    this.element.appendChild(e);
    const t=this._register(new Gf(e, {
      ariaLabel:_(3726,null),highlightToggledItems:!0
    })), i=this._register(this.menuService.createMenu(st.EmptyEditorGroup, this.scopedContextKeyService)), r=()=>{
      this.containerToolBarMenuDisposable.value=$i(()=>t.clear());
      const s=tM(i.getActions({
        arg:{
          groupId:this.id
        },shouldForwardArgs:!0
      }),"navigation");
      for(const o of[...s.primary,...s.secondary]){
        const a=this.keybindingService.lookupKeybinding(o.id);
        t.push(o,{
          icon:!0,label:!1,keybinding:a?.getLabel()
        })
      }
    };
    r(), this._register(i.onDidChange(r))
  }
  createContainerContextMenu(){
    this._register(ei(this.element, ir.CONTEXT_MENU, e=>this.onShowContainerContextMenu(e))), this._register(ei(this.element, MA.Contextmenu, ()=>this.onShowContainerContextMenu()))
  }
  onShowContainerContextMenu(e){
    if(!this.isEmpty)return;
    let t=this.element;
    e&&(t=new yy(As(this.element), e)), this.contextMenuService.showContextMenu({
      menuId:st.EmptyEditorGroupContext,contextKeyService:this.contextKeyService,getAnchor:()=>t,onHide:()=>this.focus()
    })
  }
  doTrackFocus(){
    const e=this._register(CC(this.element));
    this._register(e.onDidFocus(()=>{
      this.isEmpty&&this._onDidFocus.fire()
    }));
    const t=i=>{
      let r;
      if(I6(i)){
        if(i.button!==0||Fs&&i.ctrlKey)return;
        r=i.target
      }
      else r=i.initialTarget;
      _oe(r,"monaco-action-bar",this.titleContainer)||_oe(r,"monaco-breadcrumb-item",this.titleContainer)||setTimeout(()=>{
        this.focus()
      })
    };
    this._register(ei(this.titleContainer, ir.MOUSE_DOWN, i=>t(i))), this._register(ei(this.titleContainer, MA.Tap, i=>t(i))), this._register(this.editorPane.onDidFocus(()=>{
      this._onDidFocus.fire()
    }))
  }
  updateContainer(){
    this.isEmpty?(this.tryScheduleAutoCloseEmptyGroup(), this.element.classList.add("empty"), this.element.tabIndex=0, this.element.setAttribute("aria-label", _(3727, null, this.ariaLabel))):(this.element.classList.remove("empty"), this.element.removeAttribute("tabIndex"), this.element.removeAttribute("aria-label")), this.updateStyles()
  }
  shouldAutoCloseEmptyGroup(){
    return!(!this.isEmpty||this.active||this.groupsView.groups.length<=1||!this.groupsView.partOptions.closeEmptyGroups||!Bh(this.storageService)||!this.model.hasHadEditors)
  }
  tryScheduleAutoCloseEmptyGroup(){
    return this.shouldAutoCloseEmptyGroup()?(Promise.resolve().then(()=>{
      this.disposed||!this.shouldAutoCloseEmptyGroup()||this.groupsView.removeGroup(this)
    }), !0):!1
  }
  updateTitleContainer(){
    this.titleContainer.classList.toggle("tabs", this.groupsView.partOptions.showTabs==="multiple"), this.titleContainer.classList.toggle("show-file-icons", this.groupsView.partOptions.showIcons)
  }
  updateComposerEditorContainer(){
    const e=this.editors.some(i=>i.typeId===h3), t=this.element.classList.contains("has-composer-editor");
    this.element.classList.toggle("has-composer-editor", e), t!==e&&this.relayout()
  }
  restoreEditors(e, t){
    if(this.count===0)return;
    let i;
    e instanceof trt?i=eDf(e):i=Object.create(null);
    const r=this.model.activeEditor;
    if(!r)return;
    i.pinned=this.model.isPinned(r), i.sticky=this.model.isSticky(r), i.preserveFocus=!0;
    const s={
      preserveWindowOrder:!0,skipTitleUpdate:!0
    }, o=_C(), a=this.doShowEditor(r, {
      active:!0,isNew:!1
    }, i, s).then(()=>{
      this.groupsView.activeGroup===this&&o&&zP(o)&&!t?.preserveFocus&&this.focus()
    });
    return this.titleControl.openEditors(this.editors), this.updateComposerEditorContainer(), a
  }
  registerListeners(){
    this._register(this.model.onDidModelChange(e=>this.onDidGroupModelChange(e))), this._register(this.groupsView.onDidChangeEditorPartOptions(e=>this.onDidChangeEditorPartOptions(e))), this._register(this.groupsView.onDidVisibilityChange(e=>this.onDidVisibilityChange(e))), this._register(this.onDidFocus(()=>this.onDidGainFocus())), this._register(this.configurationService.onDidChangeConfiguration(e=>{
      e.affectsConfiguration("cursor.enable_agent_window_ide_unification_setting")&&this.tryScheduleAutoCloseEmptyGroup()
    }))
  }
  onDidGroupModelChange(e){
    switch(this._onDidModelChange.fire(e), e.kind){
      case 3:this.element.classList.toggle("locked",this.isLocked);
      break;
      case 4:this.onDidChangeEditorSelection();
      break;
      case 5:case 6:case 7:this.updateComposerEditorContainer();
      break
    }
    if(e.editor)switch(e.kind){
      case 5:Poy(e)&&this.onDidOpenEditor(e.editor,e.editorIndex);
      break;
      case 6:Noy(e)&&this.handleOnDidCloseEditor(e.editor,e.editorIndex,e.context,e.sticky);
      break;
      case 15:this.onWillDisposeEditor(e.editor);
      break;
      case 14:this.onDidChangeEditorDirty(e.editor);
      break;
      case 12:this.onDidChangeEditorTransient(e.editor);
      break;
      case 9:this.onDidChangeEditorLabel(e.editor);
      break
    }
  }
  onDidOpenEditor(e, t){
    this.telemetryService.publicLog("editorOpened", this.toEditorTelemetryDescriptor(e)), this.updateContainer()
  }
  handleOnDidCloseEditor(e, t, i, r){
    this._onWillCloseEditor.fire({
      groupId:this.id,editor:e,context:i,index:t,sticky:r
    });
    const s=[e];
    e instanceof O1&&s.push(e.primary, e.secondary);
    for(const o of s)this.canDispose(o)&&o.dispose();
    this.updateContainer(), this._onDidCloseEditor.fire({
      groupId:this.id,editor:e,context:i,index:t,sticky:r
    })
  }
  canDispose(e){
    for(const t of this.editorPartsView.groups)if(t instanceof trt&&t.model.contains(e, {
      strictEquals:!0,supportSideBySide:op.ANY
    }))return!1;
    return!0
  }
  toResourceTelemetryDescriptor(e){
    if(!e)return;
    const t=e?e.scheme===_n.file?e.fsPath:e.path:void 0;
    if(!t)return;
    let i=hk(e);
    const r=i.indexOf("?");
    return i=r!==-1?i.substr(0, r):i, {
      mimeType:new X$e(Qpu(e).join(", ")),scheme:e.scheme,ext:i,path:VC(t)
    }
  }
  toEditorTelemetryDescriptor(e){
    const t=e.getTelemetryDescriptor(), i=gp.getOriginalUri(e, {
      supportSideBySide:op.BOTH
    });
    return je.isUri(i)?(t.resource=this.toResourceTelemetryDescriptor(i), t):(i&&(i.primary&&(t.resource=this.toResourceTelemetryDescriptor(i.primary)), i.secondary&&(t.resourceSecondary=this.toResourceTelemetryDescriptor(i.secondary))), t)
  }
  onWillDisposeEditor(e){
    this.disposedEditorsWorker.work(e)
  }
  handleDisposedEditors(e){
    let t;
    const i=[];
    for(const r of e){
      const s=this.model.findEditor(r);
      if(!s)continue;
      const o=s[0];
      o.isDisposed()&&(this.model.isActive(o)?t=o:i.push(o))
    }
    for(const r of i)this.doCloseEditor(r, !0);
    t&&this.doCloseEditor(t, !0)
  }
  onDidChangeEditorPartOptions(e){
    this.updateTitleContainer(), this.titleControl.updateOptions(e.oldPartOptions, e.newPartOptions), (e.oldPartOptions.showTabs!==e.newPartOptions.showTabs||e.oldPartOptions.tabHeight!==e.newPartOptions.tabHeight||e.oldPartOptions.showTabs==="multiple"&&e.oldPartOptions.pinnedTabsOnSeparateRow!==e.newPartOptions.pinnedTabsOnSeparateRow)&&(this.relayout(), this.model.activeEditor&&this.titleControl.openEditors(this.model.getEditors(1))), this.updateStyles(), e.oldPartOptions.enablePreview&&!e.newPartOptions.enablePreview&&this.model.previewEditor&&this.pinEditor(this.model.previewEditor), e.oldPartOptions.closeEmptyGroups!==e.newPartOptions.closeEmptyGroups&&this.tryScheduleAutoCloseEmptyGroup()
  }
  onDidChangeEditorDirty(e){
    this.pinEditor(e), this.titleControl.updateEditorDirty(e)
  }
  onDidChangeEditorTransient(e){
    !this.model.isTransient(e)&&!this.groupsView.partOptions.enablePreview&&this.pinEditor(e)
  }
  onDidChangeEditorLabel(e){
    this.titleControl.updateEditorLabel(e)
  }
  onDidChangeEditorSelection(){
    this.titleControl.updateEditorSelections()
  }
  onDidVisibilityChange(e){
    this.editorPane.setVisible(e)
  }
  onDidGainFocus(){
    this.activeEditor&&this.model.setTransient(this.activeEditor, !1)
  }
  get index(){
    return this._index
  }
  get label(){
    return this.groupsLabel?_(3728, null, this.groupsLabel, this._index+1):_(3729, null, this._index+1)
  }
  get ariaLabel(){
    return this.groupsLabel?_(3730, null, this.groupsLabel, this._index+1):_(3731, null, this._index+1)
  }
  get disposed(){
    return this._disposed
  }
  get isEmpty(){
    return this.count===0
  }
  get titleHeight(){
    return this.titleControl.getHeight()
  }
  get leftActionsContainer(){
    return this.titleControl.leftActionsContainer
  }
  notifyIndexChanged(e){
    this._index!==e&&(this._index=e, this.model.setIndex(e))
  }
  notifyLabelChanged(e){
    this.groupsLabel!==e&&(this.groupsLabel=e, this.model.setLabel(e))
  }
  setActive(e){
    this.active=e, !e&&this.activeEditor&&this.selectedEditors.length>1&&this.setSelection(this.activeEditor, []), this.element.classList.toggle("active", e), this.element.classList.toggle("inactive", !e), this.titleControl.setActive(e), this.updateStyles(), this.model.setActive(void 0), e||this.tryScheduleAutoCloseEmptyGroup()
  }
  get id(){
    return this.model.id
  }
  get windowId(){
    return this.groupsView.windowId
  }
  get editors(){
    return this.model.getEditors(1)
  }
  get count(){
    return this.model.count
  }
  get stickyCount(){
    return this.model.stickyCount
  }
  get activeEditorPane(){
    return this.editorPane?this.editorPane.activeEditorPane??void 0:void 0
  }
  get activeEditor(){
    return this.model.activeEditor
  }
  get selectedEditors(){
    return this.model.selectedEditors
  }
  get previewEditor(){
    return this.model.previewEditor
  }
  isPinned(e){
    return this.model.isPinned(e)
  }
  isSticky(e){
    return this.model.isSticky(e)
  }
  isSelected(e){
    return this.model.isSelected(e)
  }
  isTransient(e){
    return this.model.isTransient(e)
  }
  isActive(e){
    return this.model.isActive(e)
  }
  async setSelection(e, t){
    this.isActive(e)?this.model.setSelection(e, t):await this.openEditor(e, {
      activation:X4.ACTIVATE
    }, {
      inactiveSelection:t
    })
  }
  contains(e, t){
    return this.model.contains(e, t)
  }
  getEditors(e, t){
    return this.model.getEditors(e, t)
  }
  findEditors(e, t){
    const i=this.uriIdentityService.asCanonicalUri(e);
    return this.getEditors(1).filter(r=>{
      if(r.resource&&Zc(r.resource,i))return!0;
      if(t?.supportSideBySide===op.PRIMARY||t?.supportSideBySide===op.ANY){
        const s=gp.getCanonicalUri(r,{
          supportSideBySide:op.PRIMARY
        });
        if(s&&Zc(s,i))return!0
      }
      if(t?.supportSideBySide===op.SECONDARY||t?.supportSideBySide===op.ANY){
        const s=gp.getCanonicalUri(r,{
          supportSideBySide:op.SECONDARY
        });
        if(s&&Zc(s,i))return!0
      }
      return!1
    })
  }
  getEditorByIndex(e){
    return this.model.getEditorByIndex(e)
  }
  getIndexOfEditor(e){
    return this.model.indexOf(e)
  }
  isFirst(e){
    return this.model.isFirst(e)
  }
  isLast(e){
    return this.model.isLast(e)
  }
  focus(){
    this.activeEditorPane?this.activeEditorPane.focus():this.element.focus(), this._onDidFocus.fire()
  }
  pinEditor(e=this.activeEditor||void 0){
    if(e&&!this.model.isPinned(e)){
      const t=this.model.pin(e);
      t&&this.titleControl.pinEditor(t)
    }
  }
  stickEditor(e=this.activeEditor||void 0){
    this.doStickEditor(e, !0)
  }
  unstickEditor(e=this.activeEditor||void 0){
    this.doStickEditor(e, !1)
  }
  doStickEditor(e, t){
    if(e&&this.model.isSticky(e)!==t){
      const i=this.getIndexOfEditor(e),r=t?this.model.stick(e):this.model.unstick(e);
      if(!r)return;
      const s=this.getIndexOfEditor(r);
      s!==i&&this.titleControl.moveEditor(r,i,s,!0),t?this.titleControl.stickEditor(r):this.titleControl.unstickEditor(r)
    }
  }
  async openEditor(e, t, i){
    return this.doOpenEditor(e, t, {
      ...i,supportSideBySide:op.BOTH
    })
  }
  async doOpenEditor(e, t, i){
    if(!e||e.isDisposed())return;
    this._onWillOpenEditor.fire({
      editor:e,groupId:this.id
    });
    const r=t?.sticky||!this.groupsView.partOptions.enablePreview&&!t?.transient||e.isDirty()||(t?.pinned??typeof t?.index=="number")||typeof t?.index=="number"&&this.model.isSticky(t.index)||e.hasCapability(512), s={
      index:t?t.index:void 0,pinned:r,sticky:t?.sticky||typeof t?.index=="number"&&this.model.isSticky(t.index),transient:!!t?.transient,inactiveSelection:i?.inactiveSelection,active:this.count===0||!t||!t.inactive,supportSideBySide:i?.supportSideBySide
    };
    !s.active&&!s.pinned&&this.model.activeEditor&&!this.model.isPinned(this.model.activeEditor)&&(s.active=!0);
    let o=!1, a=!1;
    if(t?.silentOpen?(o=!1, a=!1):t?.activation===X4.ACTIVATE?o=!0:t?.activation===X4.RESTORE?a=!0:t?.activation===X4.PRESERVE?(o=!1, a=!1):s.active&&(o=!t||!t.preserveFocus, a=!o), typeof s.index=="number"){
      const m=this.model.indexOf(e);
      m!==-1&&m!==s.index&&this.doMoveEditorInsideGroup(e,s)
    }
    const{
      editor:l,isNew:u
    }
    =this.model.openEditor(e, s);
    u&&this.count===1&&this.editorPartsView.groups.length>1&&l.editorId&&this.groupsView.partOptions.autoLockGroups?.has(l.editorId)&&this.lock(!0);
    const d=this.doShowEditor(l, {
      active:!!s.active,isNew:u
    }, t, i);
    return o?this.groupsView.activateGroup(this):a&&this.groupsView.restoreGroup(this), d
  }
  doShowEditor(e, t, i, r){
    let s;
    return t.active?s=(async()=>{
      const{
        pane:o,changed:a,cancelled:l,error:u
      }
      =await this.editorPane.openEditor(e,i,r,{
        newInGroup:t.isNew
      });
      if(!l)return a&&this._onDidActiveEditorChange.fire({
        editor:e
      }),u&&this._onDidOpenEditorFail.fire(e),!o&&this.activeEditor===e&&this.doCloseEditor(e,i?.preserveFocus,{
        fromError:!0
      }),o
    })():s=Promise.resolve(void 0), r?.skipTitleUpdate||this.titleControl.openEditor(e, r), s
  }
  async openEditors(e){
    const t=lh(e).filter(({
      editor:a
    })=>!a.isDisposed()), i=t.at(0);
    if(!i)return;
    const r={
      supportSideBySide:op.BOTH
    };
    await this.doOpenEditor(i.editor, i.options, r);
    const s=t.slice(1), o=this.getIndexOfEditor(i.editor)+1;
    return await ib.settled(s.map(({
      editor:a,options:l
    }, u)=>this.doOpenEditor(a, {
      ...l,inactive:!0,pinned:!0,index:o+u
    }, {
      ...r,skipTitleUpdate:!0
    }))), this.titleControl.openEditors(s.map(({
      editor:a
    })=>a)), this.editorPane.activeEditorPane??void 0
  }
  moveEditors(e, t){
    const i={
      skipTitleUpdate:this!==t
    };
    let r=!1;
    const s=new Set;
    for(const{
      editor:o,options:a
    }
    of e)this.moveEditor(o, t, a, i)?s.add(o):r=!0;
    return i.skipTitleUpdate&&(t.titleControl.openEditors(Array.from(s)), this.titleControl.closeEditors(Array.from(s))), !r
  }
  moveEditor(e, t, i, r){
    return this===t?(this.doMoveEditorInsideGroup(e, i), !0):this.doMoveOrCopyEditorAcrossGroups(e, t, i, {
      ...r,keepCopy:!1
    })
  }
  doMoveEditorInsideGroup(e, t){
    const i=t?t.index:void 0;
    if(typeof i!="number")return;
    const r=this.model.indexOf(e), s=this.model.getEditorByIndex(r);
    if(s){
      if(r!==i){
        const o=this.model.stickyCount;
        this.model.moveEditor(s,i),this.model.pin(s),this.titleControl.moveEditor(s,r,i,o!==this.model.stickyCount),this.titleControl.pinEditor(s)
      }
      t?.sticky&&this.stickEditor(s)
    }
  }
  doMoveOrCopyEditorAcrossGroups(e, t, i, r){
    const s=r?.keepCopy;
    if(!s||e.hasCapability(8)){
      const a=e.canMove(this.id,t.id);
      if(typeof a=="string")return this.dialogService.error(a,_(3732,null)),!1
    }
    const o=eDf(this, e, {
      ...i,pinned:!0,sticky:i?.sticky??(!s&&this.model.isSticky(e))
    });
    return s||this._onWillMoveEditor.fire({
      groupId:this.id,editor:e,target:t.id
    }), t.doOpenEditor(s?e.copy():e, o, r), s||this.doCloseEditor(e, !0, {
      ...r,context:iV.MOVE
    }), !0
  }
  copyEditors(e, t){
    const i={
      skipTitleUpdate:this!==t
    };
    for(const{
      editor:r,options:s
    }
    of e)this.copyEditor(r, t, s, i);
    if(i.skipTitleUpdate){
      const r=e.map(({
        editor:s
      })=>s);
      t.titleControl.openEditors(r)
    }
  }
  copyEditor(e, t, i, r){
    this===t?this.doMoveEditorInsideGroup(e, i):this.doMoveOrCopyEditorAcrossGroups(e, t, i, {
      ...r,keepCopy:!0
    })
  }
  async closeEditor(e=this.activeEditor||void 0, t){
    return this.doCloseEditorWithConfirmationHandling(e, t)
  }
  async doCloseEditorWithConfirmationHandling(e=this.activeEditor||void 0, t, i){
    return!e||await this.handleCloseConfirmation([e])?!1:(this.doCloseEditor(e, t?.preserveFocus, i), !0)
  }
  doCloseEditor(e, t=this.groupsView.activeGroup!==this, i){
    i?.skipTitleUpdate||this.titleControl.beforeCloseEditor(e), this.model.isActive(e)?this.doCloseActiveEditor(t, i):this.doCloseInactiveEditor(e, i), i?.skipTitleUpdate||this.titleControl.closeEditor(e)
  }
  doCloseActiveEditor(e=this.groupsView.activeGroup!==this, t){
    const i=this.activeEditor, r=!e&&this.shouldRestoreFocus(this.element), s=this.groupsView.partOptions.closeEmptyGroups;
    if(s&&this.active&&this.count===1){
      const l=this.groupsView.getGroups(1)[1];
      l&&(r?l.focus():this.groupsView.activateGroup(l,!0))
    }
    i&&this.model.closeEditor(i, t?.context);
    const o=this.model.activeEditor;
    if(o){
      let a;
      e&&this.groupsView.activeGroup!==this&&(a=X4.PRESERVE);
      const l={
        preserveFocus:e,activation:a,ignoreError:t?.fromError
      },u={
        preserveWindowOrder:!0
      };
      this.doOpenEditor(o,l,u)
    }
    else i&&this.editorPane.closeEditor(i), r&&!s&&this.focus(), this._onDidActiveEditorChange.fire({
      editor:void 0
    }), s&&this.groupsView.removeGroup(this, e)
  }
  shouldRestoreFocus(e){
    const t=_C();
    return t===e.ownerDocument.body?!0:HS(t, e)
  }
  doCloseInactiveEditor(e, t){
    this.model.closeEditor(e, t?.context)
  }
  async handleCloseConfirmation(e, t=!1){
    if(!e.length)return!1;
    const i=e.shift();
    let r=this.mapEditorToPendingConfirmation.get(i);
    r||(t?(i.revert(this.id), r=Promise.resolve(!1)):(r=this.doHandleCloseConfirmation(i), this.mapEditorToPendingConfirmation.set(i, r)));
    let s;
    try{
      s=await r
    }
    finally{
      this.mapEditorToPendingConfirmation.delete(i)
    }
    return s||this.handleCloseConfirmation(e)
  }
  async doHandleCloseConfirmation(e, t, i=!1){
    if(!this.shouldConfirmClose(e)||e instanceof O1&&this.model.contains(e.primary)||this.editorPartsView.groups.some(a=>{
      if(a===this)return!1;
      const l=a;
      return!!(l.contains(e,{
        supportSideBySide:op.BOTH
      })||e instanceof O1&&l.contains(e.primary))
    }))return!1;
    let r=2, s=1, o=!1;
    if(!e.hasCapability(4)&&!t?.skipAutoSave&&!e.closeHandler&&(this.filesConfigurationService.getAutoSaveMode(e).mode===3?(o=!0, r=0, s=3):kw&&(Sc||xv)&&this.filesConfigurationService.getAutoSaveMode(e).mode===4&&(o=!0, r=0, s=4)), !o)if((!this.activeEditor||!this.activeEditor.matches(e))&&await this.doOpenEditor(e), await this.hostService.focus(As(this.element)), typeof e.closeHandler?.confirm=="function")r=await e.closeHandler.confirm([{
      editor:e,groupId:this.id
    }
    ]);
    else{
      let a;
      e instanceof O1?a=e.primary.getName():a=e.getName(),r=await this.fileDialogService.showSaveConfirm([a])
    }
    if(!e.closeHandler&&!this.shouldConfirmClose(e))return r===2;
    switch(r){
      case 0:return!await e.save(this.id,{
        reason:s
      })&&o?this.doHandleCloseConfirmation(e,{
        skipAutoSave:!0
      }):e.isDirty();
      case 1:try{
        return await e.revert(this.id),e.isDirty()
      }
      catch(a){
        return this.logService.error(a),await e.revert(this.id,{
          soft:!0
        }),e.isDirty()
      }
      case 2:return!0
    }
  }
  shouldConfirmClose(e){
    return e.closeHandler?e.closeHandler.showConfirm():e.isDirty()&&!e.isSaving()
  }
  async closeEditors(e, t){
    if(this.isEmpty)return!0;
    const i=this.doGetEditorsToClose(e);
    return await this.handleCloseConfirmation(i.slice(0))?!1:(this.doCloseEditors(i, t), !0)
  }
  doGetEditorsToClose(e){
    if(Array.isArray(e))return e;
    const t=e, i=typeof t.direction=="number";
    let r=this.model.getEditors(i?1:0, t);
    return t.savedOnly?r=r.filter(s=>!s.isDirty()||s.isSaving()):i&&t.except?r=t.direction===0?r.slice(0, this.model.indexOf(t.except, r)):r.slice(this.model.indexOf(t.except, r)+1):t.except&&(r=r.filter(s=>t.except&&!s.matches(t.except))), r
  }
  doCloseEditors(e, t){
    let i=!1;
    for(const r of e)this.isActive(r)?i=!0:this.doCloseInactiveEditor(r);
    i&&this.doCloseActiveEditor(t?.preserveFocus), e.length&&this.titleControl.closeEditors(e)
  }
  async closeAllEditors(e, t=!1){
    if(this.isEmpty)return this.groupsView.partOptions.closeEmptyGroups&&this.groupsView.removeGroup(this), !0;
    let i=this.model.getEditors(0, e);
    return e?.excludeConfirming&&(i=i.filter(s=>!this.shouldConfirmClose(s))), await this.handleCloseConfirmation(i, t)?!1:(this.doCloseAllEditors(e), !0)
  }
  doCloseAllEditors(e){
    let t=this.model.getEditors(1, e);
    e?.excludeConfirming&&(t=t.filter(r=>!this.shouldConfirmClose(r)));
    const i=[];
    for(const r of t)this.isActive(r)||this.doCloseInactiveEditor(r), i.push(r);
    this.activeEditor&&i.includes(this.activeEditor)&&this.doCloseActiveEditor(), i.length&&this.titleControl.closeEditors(i)
  }
  async replaceEditors(e){
    let t;
    const i=[];
    for(let{
      editor:r,replacement:s,forceReplaceDirty:o,options:a
    }
    of e){
      const l=this.getIndexOfEditor(r);
      if(l>=0){
        const u=this.isActive(r);
        a?a.index=l:a={
          index:l
        },a.inactive=!u,a.pinned=a.pinned??!0;
        const d={
          editor:r,replacement:s,forceReplaceDirty:o,options:a
        };
        u?t=d:i.push(d)
      }
    }
    for(const{
      editor:r,replacement:s,forceReplaceDirty:o,options:a
    }
    of i)if(await this.doOpenEditor(s, a), !r.matches(s)){
      let l=!1;
      if(o?(this.doCloseEditor(r,!0,{
        context:iV.REPLACE
      }),l=!0):l=await this.doCloseEditorWithConfirmationHandling(r,{
        preserveFocus:!0
      },{
        context:iV.REPLACE
      }),!l)return
    }
    if(t){
      const r=this.doOpenEditor(t.replacement,t.options);
      t.editor.matches(t.replacement)||(t.forceReplaceDirty?this.doCloseEditor(t.editor,!0,{
        context:iV.REPLACE
      }):await this.doCloseEditorWithConfirmationHandling(t.editor,{
        preserveFocus:!0
      },{
        context:iV.REPLACE
      })),await r
    }
  }
  get isLocked(){
    return this.model.isLocked
  }
  lock(e){
    this.model.lock(e)
  }
  createEditorActions(e){
    let t={
      primary:[],secondary:[]
    }, i;
    const r=this.activeEditorPane;
    if(r instanceof fD){
      const s=r.scopedContextKeyService??this.scopedContextKeyService,o=e.add(this.menuService.createMenu(st.EditorTitle,s,{
        emitEventsForSubmenuChanges:!0,eventDebounceDelay:0
      }));
      i=o.onDidChange;
      const a=(l,u)=>u==="navigation"&&l.actions.length<=1;
      t=tM(o.getActions({
        arg:this.resourceContext.get(),shouldForwardArgs:!0
      }),"navigation",a)
    }
    else{
      const s=e.add(new Qe);
      i=s.event,e.add(this.onDidActiveEditorChange(()=>s.fire()))
    }
    return{
      actions:t,onDidChange:i
    }
  }
  updateStyles(){
    const e=this.isEmpty;
    e?this.element.style.backgroundColor=this.getColor(T1f)||"":this.element.style.backgroundColor="";
    const t=this.getColor(B1f)||this.getColor(Du);
    !e&&t?(this.titleContainer.classList.add("title-border-bottom"), this.titleContainer.style.setProperty("--title-border-bottom-color", t)):(this.titleContainer.classList.remove("title-border-bottom"), this.titleContainer.style.removeProperty("--title-border-bottom-color"));
    const{
      showTabs:i
    }
    =this.groupsView.partOptions;
    this.titleContainer.style.backgroundColor=this.getColor(i==="multiple"?Lmu:D1f)||"", this.editorContainer&&(this.editorContainer.style.backgroundColor=this.getColor(Wm)||"")
  }
  get minimumWidth(){
    return this.editorPane.minimumWidth
  }
  get minimumHeight(){
    return this.editorPane.minimumHeight
  }
  get maximumWidth(){
    return this.editorPane.maximumWidth
  }
  get maximumHeight(){
    return this.editorPane.maximumHeight
  }
  get preferredWidth(){
    if(this.groupsView.groupOnlyContainsComposerEditors&&this.groupsView.groupOnlyContainsComposerEditors(this))return lun
  }
  get preferredHeight(){
    
  }
  get proportionalLayout(){
    return this.groupsView.groupOnlyContainsComposerEditors&&this.groupsView.groupOnlyContainsComposerEditors(this)?!1:this.lastLayout?!(this.lastLayout.width===this.minimumWidth||this.lastLayout.height===this.minimumHeight):!0
  }
  layout(e, t, i, r){
    this.lastLayout={
      width:e,height:t,top:i,left:r
    }, this.element.classList.toggle("max-height-478px", t<=478);
    const s=this.titleControl.layout({
      container:new Lu(e,t),available:new Lu(e,t-this.editorPane.minimumHeight)
    });
    this.progressBar.getContainer().style.top=`${Math.max(this.titleHeight.offset-2,0)}px`;
    const o=Math.max(0, t-s.height);
    this.editorContainer.style.height=`${o}px`, this.editorPane.layout({
      width:e,height:o,top:i+s.height,left:r
    })
  }
  relayout(){
    if(this.lastLayout){
      const{
        width:e,height:t,top:i,left:r
      }
      =this.lastLayout;
      this.layout(e,t,i,r)
    }
  }
  setBoundarySashes(e){
    this.editorPane.setBoundarySashes(e)
  }
  toJSON(){
    return this.model.serialize()
  }
  dispose(){
    this._disposed=!0, this._onWillDispose.fire(), super.dispose()
  }
}, KMe=trt=__decorate([__param(6, ln), __param(7, wi), __param(8, bo), __param(9, ea), __param(10, mo), __param(11, xd), __param(12, kc), __param(13, oy), __param(14, yi), __param(15, IC), __param(16, xl), __param(17, Rr), __param(18, vD), __param(19, wd), __param(20, Ml), __param(21, Gr), __param(22, Tl), __param(23, Fn), __param(24, xM), __param(25, Hi)], KMe)
}
}), gCi, fCi, iwe, COf, j1a, kAu, EAu, xAu, SOf, kOf, EOf=
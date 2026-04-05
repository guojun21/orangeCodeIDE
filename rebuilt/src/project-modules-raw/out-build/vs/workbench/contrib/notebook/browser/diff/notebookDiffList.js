// Module: out-build/vs/workbench/contrib/notebook/browser/diff/notebookDiffList.js
// Offset: 33609245 (bundle byte offset)
// Size: 13030 bytes

ghy(), ri(), KC(), SW(), rt(), Ei(), si(), Wt(), ka(), Rf(), Io(), Rrt(), Ahy(), VI(), TW(), dr(), pl(), So(), hki(), MSe(), Nte(), vT(), dIa(), zg(), Ht(), Cu(), x9e(), vIa=class{
  constructor(e, t){
    this.configurationService=t;
    const i=this.configurationService.getValue("editor");
    this.lineHeight=Xbe.createFromRawSettings(i, M6.getInstance(e).value).lineHeight
  }
  getHeight(e){
    return e.getHeight(this.lineHeight)
  }
  hasDynamicHeight(e){
    return!1
  }
  getTemplateId(e){
    switch(e.type){
      case"delete":case"insert":return Mki.TEMPLATE_ID;
      case"modified":case"unchanged":return Fki.TEMPLATE_ID;
      case"placeholder":return Lki.TEMPLATE_ID;
      case"modifiedMetadata":case"unchangedMetadata":return Nki.TEMPLATE_ID
    }
  }
}, vIa=__decorate([__param(1, Fn)], vIa), Lki=class{
  static{
    J_u=this
  }
  static{
    this.TEMPLATE_ID="cell_diff_placeholder"
  }
  constructor(e, t){
    this.notebookEditor=e, this.instantiationService=t
  }
  get templateId(){
    return J_u.TEMPLATE_ID
  }
  renderTemplate(e){
    const t=Ct(".cell-placeholder-body");
    Rt(e, t);
    const i=new Ut, r=new k6f(t), s=Rt(t, Ct(".contents")), o=Rt(s, Ct("span.text", {
      title:_(9284,null)
    }));
    return{
      body:t,container:e,placeholder:o,marginOverlay:r,elementDisposables:i
    }
  }
  renderElement(e, t, i, r){
    i.body.classList.remove("left", "right", "full"), i.elementDisposables.add(this.instantiationService.createInstance(S6f, e, i))
  }
  disposeTemplate(e){
    e.container.innerText=""
  }
  disposeElement(e, t, i){
    i.elementDisposables.clear()
  }
}, Lki=J_u=__decorate([__param(1, ln)], Lki), Nki=class{
  static{
    G_u=this
  }
  static{
    this.TEMPLATE_ID="notebook_metadata_diff_side_by_side"
  }
  constructor(e, t, i, r, s, o, a, l, u, d){
    this.notebookEditor=e, this.instantiationService=t, this.contextMenuService=i, this.keybindingService=r, this.menuService=s, this.contextKeyService=o, this.notificationService=a, this.themeService=l, this.accessibilityService=u, this.actionBadgeService=d
  }
  get templateId(){
    return G_u.TEMPLATE_ID
  }
  renderTemplate(e){
    const t=Ct(".cell-body");
    Rt(e, t);
    const i=Ct(".cell-diff-editor-container");
    Rt(t, i);
    const r=Rt(i, Ct(".input-header-container")), s=Rt(i, Ct(".source-container")), {
      editor:o,editorContainer:a
    }
    =this._buildSourceEditor(s), l=Rt(s, Ct(".editor-input-toolbar-container")), u=Rt(l, Ct("div.property-toolbar")), d=this.instantiationService.createInstance(KI, u, {
      actionViewItemProvider:(x,I)=>{
        if(x instanceof Ub)return new Tbn(x,{
          hoverDelegate:I.hoverDelegate
        },this.keybindingService,this.notificationService,this.contextKeyService,this.themeService,this.contextMenuService,this.accessibilityService,this.actionBadgeService)
      },highlightToggledItems:!0
    }), m=Rt(t, Ct(".border-container")), p=Rt(m, Ct(".left-border")), g=Rt(m, Ct(".right-border")), f=Rt(m, Ct(".top-border")), A=Rt(m, Ct(".bottom-border")), w=new H_u(t), C=new Ut;
    return{
      body:t,container:e,diffEditorContainer:i,cellHeaderContainer:r,sourceEditor:o,editorContainer:a,inputToolbarContainer:l,toolbar:d,leftBorder:p,rightBorder:g,topBorder:f,bottomBorder:A,marginOverlay:w,elementDisposables:C
    }
  }
  _buildSourceEditor(e){
    return E6f(this.instantiationService, this.notebookEditor, e, {
      readOnly:!0
    })
  }
  renderElement(e, t, i, r){
    i.body.classList.remove("full"), i.elementDisposables.add(this.instantiationService.createInstance(gIa, this.notebookEditor, e, i))
  }
  disposeTemplate(e){
    e.container.innerText="", e.sourceEditor.dispose(), e.toolbar?.dispose(), e.elementDisposables.dispose()
  }
  disposeElement(e, t, i){
    i.toolbar&&(i.toolbar.context=void 0), i.elementDisposables.clear()
  }
}, Nki=G_u=__decorate([__param(1, ln), __param(2, kc), __param(3, mo), __param(4, xd), __param(5, wi), __param(6, ms), __param(7, bo), __param(8, Cf), __param(9, cve)], Nki), Mki=class{
  static{
    W_u=this
  }
  static{
    this.TEMPLATE_ID="cell_diff_single"
  }
  constructor(e, t){
    this.notebookEditor=e, this.instantiationService=t
  }
  get templateId(){
    return W_u.TEMPLATE_ID
  }
  renderTemplate(e){
    const t=Ct(".cell-body");
    Rt(e, t);
    const i=Ct(".cell-diff-editor-container");
    Rt(t, i);
    const r=Rt(t, Ct(".diagonal-fill")), s=Rt(i, Ct(".input-header-container")), o=Rt(i, Ct(".source-container")), {
      editor:a,editorContainer:l
    }
    =this._buildSourceEditor(o), u=Rt(i, Ct(".metadata-header-container")), d=Rt(i, Ct(".metadata-info-container")), m=Rt(i, Ct(".output-header-container")), p=Rt(i, Ct(".output-info-container")), g=Rt(t, Ct(".border-container")), f=Rt(g, Ct(".left-border")), A=Rt(g, Ct(".right-border")), w=Rt(g, Ct(".top-border")), C=Rt(g, Ct(".bottom-border"));
    return{
      body:t,container:e,editorContainer:l,diffEditorContainer:i,diagonalFill:r,cellHeaderContainer:s,sourceEditor:a,metadataHeaderContainer:u,metadataInfoContainer:d,outputHeaderContainer:m,outputInfoContainer:p,leftBorder:f,rightBorder:A,topBorder:w,bottomBorder:C,elementDisposables:new Ut
    }
  }
  _buildSourceEditor(e){
    return yhy(this.instantiationService, this.notebookEditor, e)
  }
  renderElement(e, t, i, r){
    switch(i.body.classList.remove("left", "right", "full"), e.type){
      case"delete":i.elementDisposables.add(this.instantiationService.createInstance(fIa,this.notebookEditor,e,i));
      return;
      case"insert":i.elementDisposables.add(this.instantiationService.createInstance(bIa,this.notebookEditor,e,i));
      return;
      default:break
    }
  }
  disposeTemplate(e){
    e.container.innerText="", e.sourceEditor.dispose(), e.elementDisposables.dispose()
  }
  disposeElement(e, t, i){
    i.elementDisposables.clear()
  }
}, Mki=W_u=__decorate([__param(1, ln)], Mki), Fki=class{
  static{
    Q_u=this
  }
  static{
    this.TEMPLATE_ID="cell_diff_side_by_side"
  }
  constructor(e, t, i, r, s, o, a, l, u, d){
    this.notebookEditor=e, this.instantiationService=t, this.contextMenuService=i, this.keybindingService=r, this.menuService=s, this.contextKeyService=o, this.notificationService=a, this.themeService=l, this.accessibilityService=u, this.actionBadgeService=d
  }
  get templateId(){
    return Q_u.TEMPLATE_ID
  }
  renderTemplate(e){
    const t=Ct(".cell-body");
    Rt(e, t);
    const i=Ct(".cell-diff-editor-container");
    Rt(t, i);
    const r=Rt(i, Ct(".input-header-container")), s=Rt(i, Ct(".source-container")), {
      editor:o,editorContainer:a
    }
    =this._buildSourceEditor(s), l=Rt(s, Ct(".editor-input-toolbar-container")), u=Rt(l, Ct("div.property-toolbar")), d=this.instantiationService.createInstance(KI, u, {
      actionViewItemProvider:(N,M)=>{
        if(N instanceof Ub)return new Tbn(N,{
          hoverDelegate:M.hoverDelegate
        },this.keybindingService,this.notificationService,this.contextKeyService,this.themeService,this.contextMenuService,this.accessibilityService,this.actionBadgeService)
      },highlightToggledItems:!0
    }), m=Rt(i, Ct(".metadata-header-container")), p=Rt(i, Ct(".metadata-info-container")), g=Rt(i, Ct(".output-header-container")), f=Rt(i, Ct(".output-info-container")), A=Rt(t, Ct(".border-container")), w=Rt(A, Ct(".left-border")), C=Rt(A, Ct(".right-border")), x=Rt(A, Ct(".top-border")), I=Rt(A, Ct(".bottom-border")), B=new H_u(t), R=new Ut;
    return{
      body:t,container:e,diffEditorContainer:i,cellHeaderContainer:r,sourceEditor:o,editorContainer:a,inputToolbarContainer:l,toolbar:d,metadataHeaderContainer:m,metadataInfoContainer:p,outputHeaderContainer:g,outputInfoContainer:f,leftBorder:w,rightBorder:C,topBorder:x,bottomBorder:I,marginOverlay:B,elementDisposables:R
    }
  }
  _buildSourceEditor(e){
    return E6f(this.instantiationService, this.notebookEditor, e)
  }
  renderElement(e, t, i, r){
    switch(i.body.classList.remove("left", "right", "full"), e.type){
      case"unchanged":i.elementDisposables.add(this.instantiationService.createInstance(Pki,this.notebookEditor,e,i));
      return;
      case"modified":i.elementDisposables.add(this.instantiationService.createInstance(Pki,this.notebookEditor,e,i));
      return;
      default:break
    }
  }
  disposeTemplate(e){
    e.container.innerText="", e.sourceEditor.dispose(), e.toolbar?.dispose(), e.elementDisposables.dispose()
  }
  disposeElement(e, t, i){
    i.toolbar&&(i.toolbar.context=void 0), i.elementDisposables.clear()
  }
}, Fki=Q_u=__decorate([__param(1, ln), __param(2, kc), __param(3, mo), __param(4, xd), __param(5, wi), __param(6, ms), __param(7, bo), __param(8, Cf), __param(9, cve)], Fki), x6f=class extends O3o{
  onViewPointer(n){
    if(b3t(n.browserEvent.target)){
      const e=typeof n.index>"u"?[]:[n.index];
      this.list.setFocus(e,n.browserEvent)
    }
    else super.onViewPointer(n)
  }
}, AIa=class extends tQ{
  get rowsContainer(){
    return this.view.containerDomNode
  }
  constructor(e, t, i, r, s, o, a, l, u){
    super(e, t, i, r, o, s, a, l, u)
  }
  createMouseController(e){
    return new x6f(this)
  }
  getCellViewScrollTop(e){
    const t=this.indexOf(e);
    return this.view.elementTop(t)
  }
  getScrollHeight(){
    return this.view.scrollHeight
  }
  triggerScrollFromMouseWheelEvent(e){
    this.view.delegateScrollFromMouseWheelEvent(e)
  }
  delegateVerticalScrollbarPointerDown(e){
    this.view.delegateVerticalScrollbarPointerDown(e)
  }
  clear(){
    super.splice(0, this.length)
  }
  updateElementHeight2(e, t){
    const i=this.indexOf(e), r=this.getFocus();
    this.view.updateElementHeight(i, t, r.length?r[0]:null)
  }
  style(e){
    const t=this.view.domId;
    this.styleElement||(this.styleElement=wC(this.view.domNode));
    const i=t&&`.${t}`, r=[];
    e.listBackground&&r.push(`.monaco-list${i} > div.monaco-scrollable-element > .monaco-list-rows { background: ${e.listBackground}; }`), e.listFocusBackground&&(r.push(`.monaco-list${i}:focus > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.focused { background-color: ${e.listFocusBackground}; }`), r.push(`.monaco-list${i}:focus > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.focused:hover { background-color: ${e.listFocusBackground}; }`)), e.listFocusForeground&&r.push(`.monaco-list${i}:focus > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.focused { color: ${e.listFocusForeground}; }`), e.listActiveSelectionBackground&&(r.push(`.monaco-list${i}:focus > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.selected { background-color: ${e.listActiveSelectionBackground}; }`), r.push(`.monaco-list${i}:focus > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.selected:hover { background-color: ${e.listActiveSelectionBackground}; }`)), e.listActiveSelectionForeground&&r.push(`.monaco-list${i}:focus > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.selected { color: ${e.listActiveSelectionForeground}; }`), e.listFocusAndSelectionBackground&&r.push(`
				.monaco-drag-image${i},
				.monaco-list${i}:focus > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.selected.focused { background-color: ${e.listFocusAndSelectionBackground}; }
			`), e.listFocusAndSelectionForeground&&r.push(`
				.monaco-drag-image${i},
				.monaco-list${i}:focus > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.selected.focused { color: ${e.listFocusAndSelectionForeground}; }
			`), e.listInactiveFocusBackground&&(r.push(`.monaco-list${i} > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.focused { background-color:  ${e.listInactiveFocusBackground}; }`), r.push(`.monaco-list${i} > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.focused:hover { background-color:  ${e.listInactiveFocusBackground}; }`)), e.listInactiveSelectionBackground&&(r.push(`.monaco-list${i} > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.selected { background-color:  ${e.listInactiveSelectionBackground}; }`), r.push(`.monaco-list${i} > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.selected:hover { background-color:  ${e.listInactiveSelectionBackground}; }`)), e.listInactiveSelectionForeground&&r.push(`.monaco-list${i} > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.selected { color: ${e.listInactiveSelectionForeground}; }`), e.listHoverBackground&&r.push(`.monaco-list${i}:not(.drop-target) > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row:hover:not(.selected):not(.focused) { background-color:  ${e.listHoverBackground}; }`), e.listHoverForeground&&r.push(`.monaco-list${i} > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row:hover:not(.selected):not(.focused) { color:  ${e.listHoverForeground}; }`), e.listSelectionOutline&&r.push(`.monaco-list${i} > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.selected { outline: 1px dotted ${e.listSelectionOutline}; outline-offset: -1px; }`), e.listFocusOutline&&r.push(`
				.monaco-drag-image${i},
				.monaco-list${i}:focus > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.focused { outline: 1px solid ${e.listFocusOutline}; outline-offset: -1px; }
			`), e.listInactiveFocusOutline&&r.push(`.monaco-list${i} > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.focused { outline: 1px dotted ${e.listInactiveFocusOutline}; outline-offset: -1px; }`), e.listHoverOutline&&r.push(`.monaco-list${i} > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row:hover { outline: 1px dashed ${e.listHoverOutline}; outline-offset: -1px; }`), e.listDropOverBackground&&r.push(`
				.monaco-list${i}.drop-target,
				.monaco-list${i} > div.monaco-scrollable-element > .monaco-list-rows.drop-target,
				.monaco-list${i} > div.monaco-scrollable-element > .monaco-list-row.drop-target { background-color: ${e.listDropOverBackground} !important; color: inherit !important; }
			`);
    const s=r.join(`
`);
    s!==this.styleElement.textContent&&(this.styleElement.textContent=s)
  }
}, AIa=__decorate([__param(6, Nh), __param(7, Fn), __param(8, ln)], AIa)
}
}), T6f, IEt, qbn=
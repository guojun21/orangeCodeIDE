// Module: out-build/vs/workbench/contrib/notebook/browser/view/renderers/cellRenderer.js
// Offset: 33325069 (bundle byte offset)
// Size: 8108 bytes

Nte(), ri(), sI(), rt(), VI(), MSe(), Qh(), WE(), Ht(), dr(), Ei(), si(), pl(), Wt(), E_(), ka(), So(), LQ(), Juy(), rdy(), O9f(), sdy(), q9f(), ody(), uki(), ldy(), udy(), ddy(), mdy(), pdy(), fdy(), ydy(), _dy(), Cdy(), Sdy(), kdy(), Edy(), ph(), uD(), gR=Ct, $Ta=class extends at{
  constructor(e, t){
    super(), this.configurationService=t;
    const i=this.configurationService.getValue("editor");
    this.lineHeight=Xbe.createFromRawSettings(i, M6.getInstance(e).value).lineHeight
  }
  getHeight(e){
    return e.getHeight(this.lineHeight)
  }
  getDynamicHeight(e){
    return e.getDynamicHeight()
  }
  getTemplateId(e){
    return e.cellKind===zd.Markup?bki.TEMPLATE_ID:vki.TEMPLATE_ID
  }
}, $Ta=__decorate([__param(1, Fn)], $Ta), h_u=class extends at{
  constructor(n, e, t, i, r, s, o, a, l, u){
    super(), this.instantiationService=n, this.notebookEditor=e, this.contextMenuService=t, this.menuService=i, this.keybindingService=s, this.notificationService=o, this.contextKeyServiceProvider=a, this.dndController=u, this.editorOptions=this._register(new xbn(this.notebookEditor.getBaseCellEditorOptions(l), this.notebookEditor.notebookOptions, r))
  }
  dispose(){
    super.dispose(), this.dndController=void 0
  }
}, bki=class extends h_u{
  static{
    u_u=this
  }
  static{
    this.TEMPLATE_ID="markdown_cell"
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m){
    super(o, e, a, l, s, u, d, r, "markdown", t), this.renderedEditors=i, this._notebookExecutionStateService=m
  }
  get templateId(){
    return u_u.TEMPLATE_ID
  }
  renderTemplate(e){
    e.classList.add("markdown-cell-row");
    const t=Rt(e, Ct(".cell-inner-container")), i=new Ut, r=i.add(this.contextKeyServiceProvider(t)), s=Rt(e, gR(".cell-decoration")), o=Rt(t, gR(".cell-title-toolbar")), a=new qH(Rt(t, gR(".cell-focus-indicator.cell-focus-indicator-top"))), l=new qH(Rt(t, Ct(".cell-focus-indicator.cell-focus-indicator-side.cell-focus-indicator-left"))), u=Rt(l.domNode, Ct(".notebook-folding-indicator")), d=new qH(Rt(t, Ct(".cell-focus-indicator.cell-focus-indicator-side.cell-focus-indicator-right"))), m=Rt(t, gR(".cell.code")), p=Rt(m, gR(".cell-editor-part")), g=Rt(p, gR(".cell-chat-part")), f=Rt(m, gR(".input-collapse-container"));
    f.style.display="none";
    const A=Rt(p, gR(".cell-editor-container"));
    p.style.display="none";
    const w=Rt(t, gR(".cell-comment-container")), C=Rt(t, gR(".cell.markdown")), x=Rt(t, gR(".cell-bottom-toolbar-container")), I=i.add(this.instantiationService.createChild(new EA([wi, r]))), B={
      toggle:($,H)=>t.classList.toggle($,H)
    }, R=i.add(I.createInstance(gki, o, B, this.notebookEditor.creationOptions.menuIds.cellTitleToolbar, this.notebookEditor.creationOptions.menuIds.cellDeleteToolbar, this.notebookEditor)), N=new qH(Rt(t, gR(".cell-focus-indicator.cell-focus-indicator-bottom"))), M=new fwu(As(e), [i.add(I.createInstance(Bwu, this.notebookEditor, g)), i.add(I.createInstance(dki, this.notebookEditor, t, p, void 0)), i.add(new e_u(this.notebookEditor, R, a, l, d, N)), i.add(new OTa(this.notebookEditor, Rt(t, gR(".notebook-folded-hint")), this._notebookExecutionStateService)), i.add(new Vwu(this.notebookEditor, e, s)), i.add(I.createInstance(oki, this.notebookEditor, w)), i.add(new o_u(this.notebookEditor, f)), i.add(new Xwu(t, void 0, this.notebookEditor)), i.add(new _wu(t)), i.add(I.createInstance(KSi, this.notebookEditor))], [R, i.add(I.createInstance(pki, this.notebookEditor, o, x))]);
    return i.add(M), {
      rootContainer:e,cellInputCollapsedContainer:f,instantiationService:I,container:t,cellContainer:C,editorPart:p,editorContainer:A,foldingIndicator:u,templateDisposables:i,elementDisposables:i.add(new Ut),cellParts:M,toJSON:()=>({
        
      })
    }
  }
  renderElement(e, t, i, r){
    if(!this.notebookEditor.hasModel())throw new Error("The notebook editor is not attached with view model yet.");
    i.currentRenderedCell=e, i.currentEditor=void 0, i.editorPart.style.display="none", i.cellContainer.innerText="", r!==void 0&&i.elementDisposables.add(i.instantiationService.createInstance(UTa, this.notebookEditor, e, i, this.renderedEditors))
  }
  disposeTemplate(e){
    e.templateDisposables.dispose()
  }
  disposeElement(e, t, i){
    i.elementDisposables.clear()
  }
}, bki=u_u=__decorate([__param(4, Fn), __param(5, ln), __param(6, kc), __param(7, xd), __param(8, mo), __param(9, ms), __param(10, pE)], bki), vki=class extends h_u{
  static{
    d_u=this
  }
  static{
    this.TEMPLATE_ID="code_cell"
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m){
    super(u, e, a, l, o, d, m, s, o_, r), this.renderedEditors=t, this.editorPool=i
  }
  get templateId(){
    return d_u.TEMPLATE_ID
  }
  renderTemplate(e){
    e.classList.add("code-cell-row");
    const t=Rt(e, Ct(".cell-inner-container")), i=new Ut, r=i.add(this.contextKeyServiceProvider(t)), s=Rt(e, gR(".cell-decoration")), o=new qH(Rt(t, gR(".cell-focus-indicator.cell-focus-indicator-top"))), a=Rt(t, gR(".cell-title-toolbar")), l=new qH(Rt(t, Ct(".cell-focus-indicator.cell-focus-indicator-side.cell-focus-indicator-left"))), u=Rt(t, gR(".cell-chat-part")), d=Rt(t, gR(".cell.code")), m=Rt(d, gR(".run-button-container")), p=Rt(d, gR(".input-collapse-container"));
    p.style.display="none";
    const g=Rt(l.domNode, gR("div.execution-count-label"));
    g.title=_(9500, null);
    const f=Rt(d, gR(".cell-editor-part")), A=Rt(f, gR(".cell-editor-container")), w=Rt(t, gR(".cell-comment-container")), C=i.add(this.contextKeyServiceProvider(f)), x=i.add(this.instantiationService.createChild(new EA([wi, C])));
    Ci.inCompositeEditor.bindTo(C).set(!0);
    const I=x.createInstance(WS, A, {
      ...this.editorOptions.getDefaultValue(),dimension:{
        width:0,height:0
      },scrollbar:{
        vertical:"hidden",horizontal:"auto",handleMouseWheel:!1,useShadows:!1
      }
    }, {
      contributions:this.notebookEditor.creationOptions.cellEditorContributions
    });
    i.add(I);
    const B=new qH(Rt(t, gR(".output"))), R=Rt(B.domNode, gR(".output-collapse-container")), N=new qH(Rt(t, gR(".output-show-more-container"))), M=new qH(Rt(t, Ct(".cell-focus-indicator.cell-focus-indicator-side.cell-focus-indicator-right"))), O=Rt(t, gR(".cell-editor-focus-sink"));
    O.setAttribute("tabindex", "0");
    const $=Rt(t, gR(".cell-bottom-toolbar-container")), H=new qH(Rt(t, gR(".cell-focus-indicator.cell-focus-indicator-bottom"))), W=i.add(this.instantiationService.createChild(new EA([wi, r]))), z={
      toggle:(he,be)=>t.classList.toggle(he,be)
    }, Y=i.add(W.createInstance(gki, a, z, this.notebookEditor.creationOptions.menuIds.cellTitleToolbar, this.notebookEditor.creationOptions.menuIds.cellDeleteToolbar, this.notebookEditor)), j=i.add(new e_u(this.notebookEditor, Y, o, l, M, H)), X=[j, i.add(W.createInstance(Bwu, this.notebookEditor, u)), i.add(W.createInstance(dki, this.notebookEditor, t, f, I)), i.add(W.createInstance(TTa, f, p)), i.add(new Vwu(this.notebookEditor, e, s)), i.add(W.createInstance(oki, this.notebookEditor, w)), i.add(W.createInstance(xTa, this.notebookEditor, g)), i.add(W.createInstance(MTa, this.notebookEditor, R)), i.add(new o_u(this.notebookEditor, p)), i.add(new Xwu(t, O, this.notebookEditor)), i.add(new _wu(t)), i.add(W.createInstance(KSi, this.notebookEditor))], {
      cellExecutePrimary:ee,cellExecuteToolbar:re
    }
    =this.notebookEditor.creationOptions.menuIds;
    ee&&re&&X.push(i.add(W.createInstance(NTa, this.notebookEditor, r, t, m, ee, re)));
    const ne=new fwu(As(e), X, [Y, i.add(W.createInstance(pki, this.notebookEditor, a, $))]);
    i.add(ne);
    const pe={
      rootContainer:e,editorPart:f,cellInputCollapsedContainer:p,cellOutputCollapsedContainer:R,instantiationService:W,container:t,cellContainer:d,focusSinkElement:O,outputContainer:B,outputShowMoreContainer:N,editor:I,templateDisposables:i,elementDisposables:i.add(new Ut),cellParts:ne,toJSON:()=>({
        
      })
    }, le=[l.domNode, j.codeFocusIndicator.domNode, j.outputFocusIndicator.domNode];
    return this.dndController?.registerDragHandle(pe, e, le, ()=>new S8f().getDragImage(pe, pe.editor, "code")), pe
  }
  renderElement(e, t, i, r){
    if(!this.notebookEditor.hasModel())throw new Error("The notebook editor is not attached with view model yet.");
    i.currentRenderedCell=e, r!==void 0&&(i.outputContainer.domNode.innerText="", i.outputContainer.domNode.appendChild(i.cellOutputCollapsedContainer), i.elementDisposables.add(i.instantiationService.createInstance(LTa, this.notebookEditor, e, i, this.editorPool)), this.renderedEditors.set(e, i.editor))
  }
  disposeTemplate(e){
    e.templateDisposables.dispose()
  }
  disposeElement(e, t, i, r){
    i.elementDisposables.clear(), this.renderedEditors.delete(e)
  }
}, vki=d_u=__decorate([__param(5, Fn), __param(6, kc), __param(7, xd), __param(8, ln), __param(9, mo), __param(10, ms)], vki)
}
}), U8f, Tdy=
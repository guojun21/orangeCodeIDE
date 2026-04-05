// Module: out-build/vs/workbench/browser/parts/editor/multiRowEditorTabsControl.js
// Offset: 32365071 (bundle byte offset)
// Size: 4119 bytes

ri(), Wt(), yOf(), rt(), eNf(), G1a=class extends at{
  get leftActionsContainer(){
    return this.unstickyEditorTabsControl.leftActionsContainer
  }
  constructor(e, t, i, r, s, o){
    super(), this.parent=e, this.groupsView=i, this.groupView=r, this.model=s, this.instantiationService=o;
    const a=this._register(new nvu(this.model)), l=this._register(new ivu(this.model));
    this.stickyEditorTabsControl=this._register(this.instantiationService.createInstance(Ufn, this.parent, t, this.groupsView, this.groupView, a)), this.unstickyEditorTabsControl=this._register(this.instantiationService.createInstance(Ufn, this.parent, t, this.groupsView, this.groupView, l)), this.handleTabBarsStateChange()
  }
  handleTabBarsStateChange(){
    this.activeControl=this.model.activeEditor?this.getEditorTabsController(this.model.activeEditor):void 0, this.handleTabBarsLayoutChange()
  }
  handleTabBarsLayoutChange(){
    if(this.groupView.count===0)return;
    const e=this.parent.classList.contains("two-tab-bars"), t=this.groupView.count!==this.groupView.stickyCount&&this.groupView.stickyCount>0;
    this.parent.classList.toggle("two-tab-bars", t), e!==t&&this.groupView.relayout()
  }
  didActiveControlChange(){
    return this.activeControl!==(this.model.activeEditor?this.getEditorTabsController(this.model.activeEditor):void 0)
  }
  getEditorTabsController(e){
    return this.model.isSticky(e)?this.stickyEditorTabsControl:this.unstickyEditorTabsControl
  }
  openEditor(e, t){
    const i=this.didActiveControlChange(), s=this.getEditorTabsController(e).openEditor(e, t)||i;
    return s&&this.handleOpenedEditors(), s
  }
  openEditors(e){
    const t=e.filter(l=>this.model.isSticky(l)), i=e.filter(l=>!this.model.isSticky(l)), r=this.didActiveControlChange(), s=this.stickyEditorTabsControl.openEditors(t), o=this.unstickyEditorTabsControl.openEditors(i), a=s||o||r;
    return a&&this.handleOpenedEditors(), a
  }
  handleOpenedEditors(){
    this.handleTabBarsStateChange()
  }
  beforeCloseEditor(e){
    this.getEditorTabsController(e).beforeCloseEditor(e)
  }
  closeEditor(e){
    this.stickyEditorTabsControl.closeEditor(e), this.unstickyEditorTabsControl.closeEditor(e), this.handleClosedEditors()
  }
  closeEditors(e){
    const t=e.filter(r=>this.model.isSticky(r)), i=e.filter(r=>!this.model.isSticky(r));
    this.stickyEditorTabsControl.closeEditors(t), this.unstickyEditorTabsControl.closeEditors(i), this.handleClosedEditors()
  }
  handleClosedEditors(){
    this.handleTabBarsStateChange()
  }
  moveEditor(e, t, i, r){
    r?(this.model.isSticky(e)?(this.stickyEditorTabsControl.openEditor(e), this.unstickyEditorTabsControl.closeEditor(e)):(this.stickyEditorTabsControl.closeEditor(e), this.unstickyEditorTabsControl.openEditor(e)), this.handleTabBarsStateChange()):this.model.isSticky(e)?this.stickyEditorTabsControl.moveEditor(e, t, i, r):this.unstickyEditorTabsControl.moveEditor(e, t-this.model.stickyCount, i-this.model.stickyCount, r)
  }
  pinEditor(e){
    this.getEditorTabsController(e).pinEditor(e)
  }
  stickEditor(e){
    this.unstickyEditorTabsControl.closeEditor(e), this.stickyEditorTabsControl.openEditor(e), this.handleTabBarsStateChange()
  }
  unstickEditor(e){
    this.stickyEditorTabsControl.closeEditor(e), this.unstickyEditorTabsControl.openEditor(e), this.handleTabBarsStateChange()
  }
  setActive(e){
    this.stickyEditorTabsControl.setActive(e), this.unstickyEditorTabsControl.setActive(e)
  }
  updateEditorSelections(){
    this.stickyEditorTabsControl.updateEditorSelections(), this.unstickyEditorTabsControl.updateEditorSelections()
  }
  updateEditorLabel(e){
    this.getEditorTabsController(e).updateEditorLabel(e)
  }
  updateEditorDirty(e){
    this.getEditorTabsController(e).updateEditorDirty(e)
  }
  updateOptions(e, t){
    this.stickyEditorTabsControl.updateOptions(e, t), this.unstickyEditorTabsControl.updateOptions(e, t)
  }
  layout(e){
    const t=this.stickyEditorTabsControl.layout(e), i={
      container:e.container,available:new Lu(e.available.width,e.available.height-t.height)
    }, r=this.unstickyEditorTabsControl.layout(i);
    return new Lu(e.container.width, t.height+r.height)
  }
  getHeight(){
    return this.stickyEditorTabsControl.getHeight()+this.unstickyEditorTabsControl.getHeight()
  }
  dispose(){
    this.parent.classList.toggle("two-tab-bars", !1), super.dispose()
  }
}, G1a=__decorate([__param(5, ln)], G1a)
}
}), wOf=
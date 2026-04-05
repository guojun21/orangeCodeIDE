// Module: out-build/vs/workbench/browser/parts/editor/noEditorTabsControl.js
// Offset: 32369288 (bundle byte offset)
// Size: 1065 bytes

wOf(), J1a(), ri(), _Of=class extends Ofn{
  constructor(){
    super(...arguments), this.activeEditor=null
  }
  prepareEditorActions(n, e){
    return{
      primary:[],secondary:[]
    }
  }
  openEditor(n){
    return this.handleOpenedEditors()
  }
  openEditors(n){
    return this.handleOpenedEditors()
  }
  handleOpenedEditors(){
    const n=this.activeEditorChanged();
    return this.activeEditor=this.tabsModel.activeEditor, n
  }
  activeEditorChanged(){
    return!!(!this.activeEditor&&this.tabsModel.activeEditor||this.activeEditor&&!this.tabsModel.activeEditor||!this.activeEditor||!this.tabsModel.isActive(this.activeEditor))
  }
  beforeCloseEditor(n){
    
  }
  closeEditor(n){
    this.handleClosedEditors()
  }
  closeEditors(n){
    this.handleClosedEditors()
  }
  handleClosedEditors(){
    this.activeEditor=this.tabsModel.activeEditor
  }
  moveEditor(n, e, t){
    
  }
  pinEditor(n){
    
  }
  stickEditor(n){
    
  }
  unstickEditor(n){
    
  }
  setActive(n){
    
  }
  updateEditorSelections(){
    
  }
  updateEditorLabel(n){
    
  }
  updateEditorDirty(n){
    
  }
  getHeight(){
    return 0
  }
  layout(n){
    return new Lu(n.container.width, this.getHeight())
  }
}
}
}), W1a, Zcy=
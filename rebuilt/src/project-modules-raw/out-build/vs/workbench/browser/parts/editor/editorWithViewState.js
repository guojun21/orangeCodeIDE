// Module: out-build/vs/workbench/browser/parts/editor/editorWithViewState.js
// Offset: 31119934 (bundle byte offset)
// Size: 2660 bytes

yn(), Nu(), hB(), kr(), Wt(), Pa(), Io(), sw(), od(), ss(), rt(), Uqe=class extends fD{
  constructor(e, t, i, r, s, o, a, l, u, d){
    super(e, t, r, l, o), this.instantiationService=s, this.textResourceConfigurationService=a, this.editorService=u, this.editorGroupService=d, this.groupListener=this._register(new uo), this.viewState=this.getEditorMemento(d, a, i, 100)
  }
  setEditorVisible(e){
    this.groupListener.value=this.group.onWillCloseEditor(t=>this.onWillCloseEditor(t)), super.setEditorVisible(e)
  }
  onWillCloseEditor(e){
    const t=e.editor;
    t===this.input&&this.updateEditorViewState(t)
  }
  clearInput(){
    this.updateEditorViewState(this.input), super.clearInput()
  }
  saveState(){
    this.updateEditorViewState(this.input), super.saveState()
  }
  updateEditorViewState(e){
    if(!e||!this.tracksEditorViewState(e))return;
    const t=this.toEditorViewStateResource(e);
    t&&(this.tracksDisposedEditorViewState()||(this.editorViewStateDisposables||(this.editorViewStateDisposables=new Map), this.editorViewStateDisposables.has(e)||this.editorViewStateDisposables.set(e, In.once(e.onWillDispose)(()=>{
      this.clearEditorViewState(t,this.group),this.editorViewStateDisposables?.delete(e)
    }))), e.isDisposed()&&!this.tracksDisposedEditorViewState()||!this.shouldRestoreEditorViewState(e)&&!this.group.contains(e)?this.clearEditorViewState(t, this.group):e.isDisposed()||this.saveEditorViewState(t))
  }
  shouldRestoreEditorViewState(e, t){
    return t?.newInGroup?this.textResourceConfigurationService.getValue(gp.getOriginalUri(e, {
      supportSideBySide:op.PRIMARY
    }), "workbench.editor.restoreViewState")!==!1:!0
  }
  getViewState(){
    const e=this.input;
    if(!e||!this.tracksEditorViewState(e))return;
    const t=this.toEditorViewStateResource(e);
    if(t)return this.computeEditorViewState(t)
  }
  saveEditorViewState(e){
    const t=this.computeEditorViewState(e);
    t&&this.viewState.saveEditorState(this.group, e, t)
  }
  loadEditorViewState(e, t){
    if(!e||!this.tracksEditorViewState(e)||!this.shouldRestoreEditorViewState(e, t))return;
    const i=this.toEditorViewStateResource(e);
    if(i)return this.viewState.loadEditorState(this.group, i)
  }
  moveEditorViewState(e, t, i){
    return this.viewState.moveEditorState(e, t, i)
  }
  clearEditorViewState(e, t){
    this.viewState.clearEditorState(e, t)
  }
  dispose(){
    if(super.dispose(), this.editorViewStateDisposables){
      for(const[,e]of this.editorViewStateDisposables)e.dispose();
      this.editorViewStateDisposables=void 0
    }
  }
  tracksDisposedEditorViewState(){
    return!1
  }
}, Uqe=__decorate([__param(3, ea), __param(4, ln), __param(5, Hi), __param(6, uy), __param(7, bo), __param(8, yi), __param(9, da)], Uqe)
}
});
function Rsy(n){
  const e=n;
  return typeof e?.primary=="object"&&typeof e.secondary=="object"
}
var P1t, Oce, sDf, h0i=
// Module: out-build/vs/workbench/browser/quickaccess.js
// Offset: 28200722 (bundle byte offset)
// Size: 1349 bytes

Ht(), si(), ka(), Kl(), rt(), lv(), od(), ss(), dau="inQuickOpen", ief=new Sn(dau, !1, _(4065, null)), kce=Ee.has(dau), hau="inFilesPicker", mau=Ee.and(kce, Ee.has(hau)), Vmn=class extends at{
  constructor(e, t){
    super(), this.editorService=e, this.editorGroupsService=t, this._editorViewState=void 0, this.openedTransientEditors=new Set
  }
  set(){
    if(this._editorViewState)return;
    const e=this.editorService.activeEditorPane;
    e&&(this._editorViewState={
      group:e.group,editor:e.input,state:r0A(e.getControl())?.saveViewState()??void 0
    })
  }
  async openTransientEditor(e, t){
    e.options={
      ...e.options,transient:!0
    };
    const i=await this.editorService.openEditor(e, t);
    return i?.input&&i.input!==this._editorViewState?.editor&&i.group.isTransient(i.input)&&this.openedTransientEditors.add(i.input), i
  }
  async restore(){
    if(this._editorViewState){
      for(const e of this.openedTransientEditors)if(!e.isDirty())for(const t of this.editorGroupsService.groups)t.isTransient(e)&&await t.closeEditor(e,{
        preserveFocus:!0
      });
      await this._editorViewState.group.openEditor(this._editorViewState.editor,{
        viewState:this._editorViewState.state,preserveFocus:!0
      }),this.reset()
    }
  }
  reset(){
    this._editorViewState=void 0, this.openedTransientEditors.clear()
  }
  dispose(){
    super.dispose(), this.reset()
  }
}, Vmn=__decorate([__param(0, yi), __param(1, da)], Vmn)
}
}), pau, ref=
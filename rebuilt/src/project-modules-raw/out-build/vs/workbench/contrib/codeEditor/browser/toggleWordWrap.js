// Module: out-build/vs/workbench/contrib/codeEditor/browser/toggleWordWrap.js
// Offset: 32982939 (bundle byte offset)
// Size: 4595 bytes

ri(), iu(), qi(), yn(), rt(), Cu(), Oh(), O3n(), Qh(), Ht(), dr(), si(), Av(), Wt(), Ac(), ss(), bwu="transientWordWrapState", eTa="isWordWrapMinified", tTa="isDominatedByLongLines", vwu=new Sn("canToggleWordWrap", !1, !0), Awu=new Sn("editorWordWrap", !1, _(5809, null)), WSi="editor.action.toggleWordWrap", M9f=class extends vu{
  constructor(){
    super({
      id:WSi,label:dt(5813,"View: Toggle Word Wrap"),precondition:void 0,kbOpts:{
        kbExpr:null,primary:568,weight:100
      }
    })
  }
  run(n, e){
    const t=n.get(fl), i=n.get(ln);
    if(!pbn(t, e))return;
    const r=e.getModel(), s=mbn(r, t);
    let o;
    s?o=null:o={
      wordWrapOverride:e.getOption(152).wrappingColumn===-1?"on":"off"
    }, c2e(r, o, t);
    const a=i.invokeFunction(iSh, e);
    if(a){
      const l=a.getOriginalEditor(),u=a.getModifiedEditor(),d=l===e?u:l;
      pbn(t,d)&&(c2e(d.getModel(),o,t),a.updateOptions({
        
      }))
    }
  }
}, QSi=class extends at{
  static{
    this.ID="editor.contrib.toggleWordWrapController"
  }
  constructor(e, t, i){
    super(), this._editor=e, this._contextKeyService=t, this._codeEditorService=i;
    const s=this._editor.getOptions().get(152), o=this._contextKeyService.createKey(eTa, s.isWordWrapMinified), a=this._contextKeyService.createKey(tTa, s.isDominatedByLongLines);
    let l=!1;
    this._register(e.onDidChangeConfiguration(d=>{
      if(!d.hasChanged(152))return;
      const p=this._editor.getOptions().get(152);
      o.set(p.isWordWrapMinified),a.set(p.isDominatedByLongLines),l||u()
    })), this._register(e.onDidChangeModel(d=>{
      u()
    })), this._register(i.onDidChangeTransientModelProperty(()=>{
      u()
    }));
    const u=()=>{
      if(!pbn(this._codeEditorService,this._editor))return;
      const d=mbn(this._editor.getModel(),this._codeEditorService);
      try{
        l=!0,this._applyWordWrapState(d)
      }
      finally{
        l=!1
      }
    }
  }
  _applyWordWrapState(e){
    const t=e?e.wordWrapOverride:"inherit";
    this._editor.updateOptions({
      wordWrapOverride2:t
    })
  }
}, QSi=__decorate([__param(1, wi), __param(2, fl)], QSi), jSi=class extends at{
  static{
    this.ID="diffeditor.contrib.toggleWordWrapController"
  }
  constructor(e, t){
    super(), this._diffEditor=e, this._codeEditorService=t, this._register(this._diffEditor.onDidChangeModel(()=>{
      this._ensureSyncedWordWrapToggle()
    }))
  }
  _ensureSyncedWordWrapToggle(){
    const e=this._diffEditor.getOriginalEditor(), t=this._diffEditor.getModifiedEditor();
    if(!e.hasModel()||!t.hasModel())return;
    const i=mbn(e.getModel(), this._codeEditorService), r=mbn(t.getModel(), this._codeEditorService);
    i&&!r&&pbn(this._codeEditorService, e)&&(c2e(t.getModel(), i, this._codeEditorService), this._diffEditor.updateOptions({
      
    })), !i&&r&&pbn(this._codeEditorService, t)&&(c2e(e.getModel(), r, this._codeEditorService), this._diffEditor.updateOptions({
      
    }))
  }
}, jSi=__decorate([__param(1, fl)], jSi), zSi=class extends at{
  static{
    this.ID="workbench.contrib.editorWordWrapContextKeyTracker"
  }
  constructor(e, t, i){
    super(), this._editorService=e, this._codeEditorService=t, this._contextService=i, this._register(In.runAndSubscribe(ez, ({
      window:r,disposables:s
    })=>{
      s.add(ei(r,"focus",()=>this._update(),!0)),s.add(ei(r,"blur",()=>this._update(),!0))
    }, {
      window:bi,disposables:this._store
    })), this._register(this._editorService.onDidActiveEditorChange(()=>this._update())), this._canToggleWordWrap=vwu.bindTo(this._contextService), this._editorWordWrap=Awu.bindTo(this._contextService), this._activeEditor=null, this._activeEditorListener=new Ut, this._update()
  }
  _update(){
    const e=this._codeEditorService.getFocusedCodeEditor()||this._codeEditorService.getActiveCodeEditor();
    this._activeEditor!==e&&(this._activeEditorListener.clear(), this._activeEditor=e, e&&(this._activeEditorListener.add(e.onDidChangeModel(()=>this._updateFromCodeEditor())), this._activeEditorListener.add(e.onDidChangeConfiguration(t=>{
      t.hasChanged(152)&&this._updateFromCodeEditor()
    })), this._updateFromCodeEditor()))
  }
  _updateFromCodeEditor(){
    if(pbn(this._codeEditorService, this._activeEditor)){
      const e=this._activeEditor.getOption(152);
      this._setValues(!0,e.wrappingColumn!==-1)
    }
    else return this._setValues(!1, !1)
  }
  _setValues(e, t){
    this._canToggleWordWrap.set(e), this._editorWordWrap.set(t)
  }
}, zSi=__decorate([__param(0, yi), __param(1, fl), __param(2, wi)], zSi), Hc(zSi.ID, zSi, 3), Mg(QSi.ID, QSi, 0), ich(jSi.ID, jSi), ac(M9f), or.appendMenuItem(st.EditorTitle, {
  command:{
    id:WSi, title:_(5810, null), icon:Be.wordWrap
  }, group:"navigation", order:1, when:Ee.and(Ee.has(tTa), Ee.has(eTa))
}), or.appendMenuItem(st.EditorTitle, {
  command:{
    id:WSi, title:_(5811, null), icon:Be.wordWrap
  }, group:"navigation", order:1, when:Ee.and(Ci.inDiffEditor.negate(), Ee.has(tTa), Ee.not(eTa))
}), or.appendMenuItem(st.MenubarViewMenu, {
  command:{
    id:WSi, title:_(5812, null), toggled:Awu, precondition:vwu
  }, when:Ee.notEquals(Gae.key, !0), order:1, group:"6_editor"
})
}
}), ywu, F9f=
// Module: out-build/vs/workbench/services/untitled/common/untitledTextEditorService.js
// Offset: 31173988 (bundle byte offset)
// Size: 6311 bytes

Yn(), Wt(), _fu(), Ei(), yn(), cu(), zr(), rt(), Er(), Pit=xi("untitledTextEditorService"), eka=class extends at{
  static{
    Cfu=this
  }
  static{
    this.UNTITLED_WITHOUT_ASSOCIATED_RESOURCE_REGEX=/Untitled-\d+/
  }
  constructor(e, t){
    super(), this.instantiationService=e, this.configurationService=t, this._onDidSave=this._register(new Qe), this.onDidSave=this._onDidSave.event, this._onDidChangeDirty=this._register(new Qe), this.onDidChangeDirty=this._onDidChangeDirty.event, this._onDidChangeEncoding=this._register(new Qe), this.onDidChangeEncoding=this._onDidChangeEncoding.event, this._onDidCreate=this._register(new Qe), this.onDidCreate=this._onDidCreate.event, this._onWillDispose=this._register(new Qe), this.onWillDispose=this._onWillDispose.event, this._onDidChangeLabel=this._register(new Qe), this.onDidChangeLabel=this._onDidChangeLabel.event, this.mapResourceToModel=new fu
  }
  get(e){
    return this.mapResourceToModel.get(e)
  }
  getValue(e){
    return this.get(e)?.textEditorModel?.getValue()
  }
  async resolve(e){
    const t=this.doCreateOrGet(e);
    return await t.resolve(), t
  }
  create(e){
    return this.doCreateOrGet(e)
  }
  doCreateOrGet(e=Object.create(null)){
    const t=this.massageOptions(e);
    return t.untitledResource&&this.mapResourceToModel.has(t.untitledResource)?this.mapResourceToModel.get(t.untitledResource):this.doCreate(t)
  }
  massageOptions(e){
    const t=Object.create(null);
    if(e.associatedResource?(t.untitledResource=je.from({
      scheme:_n.untitled,authority:e.associatedResource.authority,fragment:e.associatedResource.fragment,path:e.associatedResource.path,query:e.associatedResource.query
    }), t.associatedResource=e.associatedResource):e.untitledResource?.scheme===_n.untitled&&(t.untitledResource=e.untitledResource), e.languageId)t.languageId=e.languageId;
    else if(!t.associatedResource){
      const i=this.configurationService.getValue();
      i.files?.defaultLanguage&&(t.languageId=i.files.defaultLanguage)
    }
    return t.encoding=e.encoding, t.initialValue=e.initialValue, t
  }
  doCreate(e){
    let t=e.untitledResource;
    if(!t){
      let r=1;
      do t=je.from({
        scheme:_n.untitled,path:`Untitled-${r}`
      }),r++;
      while(this.mapResourceToModel.has(t))
    }
    const i=this._register(this.instantiationService.createInstance(lfn, t, !!e.associatedResource, e.initialValue, e.languageId, e.encoding));
    return this.registerModel(i), i
  }
  registerModel(e){
    const t=new Ut;
    t.add(e.onDidChangeDirty(()=>this._onDidChangeDirty.fire(e))), t.add(e.onDidChangeName(()=>this._onDidChangeLabel.fire(e))), t.add(e.onDidChangeEncoding(()=>this._onDidChangeEncoding.fire(e))), t.add(e.onWillDispose(()=>this._onWillDispose.fire(e))), In.once(e.onWillDispose)(()=>{
      this.mapResourceToModel.delete(e.resource),t.dispose()
    }), this.mapResourceToModel.set(e.resource, e), this._onDidCreate.fire(e), e.isDirty()&&this._onDidChangeDirty.fire(e)
  }
  isUntitledWithAssociatedResource(e){
    return e.scheme===_n.untitled&&e.path.length>1&&!Cfu.UNTITLED_WITHOUT_ASSOCIATED_RESOURCE_REGEX.test(e.path)
  }
  canDispose(e){
    return e.isDisposed()?!0:this.doCanDispose(e)
  }
  async doCanDispose(e){
    return e.isDirty()?(await In.toPromise(e.onDidChangeDirty), this.canDispose(e)):!0
  }
  notifyDidSave(e, t){
    this._onDidSave.fire({
      source:e,target:t
    })
  }
}, eka=Cfu=__decorate([__param(0, ln), __param(1, Fn)], eka), Vi(Pit, eka, 1)
}
});
function Gsy(){
  qo.registerCommandAndKeybindingRule({
    id:nka, weight:200, when:Hva, primary:575, handler:(a, ...l)=>e(a, l, !0)
  }), or.appendMenuItem(st.CommandPalette, {
    command:{
      id:nka,title:dt(3403,"Go to Next Change")
    }
  }), qo.registerCommandAndKeybindingRule({
    id:ika, weight:200, when:Hva, primary:1599, handler:(a, ...l)=>e(a, l, !1)
  }), or.appendMenuItem(st.CommandPalette, {
    command:{
      id:ika,title:dt(3404,"Go to Previous Change")
    }
  });
  function n(a, l){
    const u=a.get(yi), d=l.length>0&&l[0]instanceof je?l[0]:void 0;
    for(const m of[u.activeEditorPane, ...u.visibleEditorPanes])if(m instanceof $qe&&(!d||m.input instanceof kE&&Zc(m.input.primary.resource, d)))return m
  }
  function e(a, l, u){
    const d=n(a, l);
    d&&d.getControl()?.goToDiff(u?"next":"previous")
  }
  let t;
  (function(a){
    a[a.Original=0]="Original", a[a.Modified=1]="Modified", a[a.Toggle=2]="Toggle"
  })(t||(t={
    
  }));
  function i(a, l, u){
    const d=n(a, l);
    if(d)switch(u){
      case t.Original:d.getControl()?.getOriginalEditor().focus();
      break;
      case t.Modified:d.getControl()?.getModifiedEditor().focus();
      break;
      case t.Toggle:return d.getControl()?.getModifiedEditor().hasWidgetFocus()?i(a,l,t.Original):i(a,l,t.Modified)
    }
  }
  function r(a, l){
    const u=a.get(uy), m=n(a, l)?.getControl()?.getModifiedEditor()?.getModel();
    if(!m)return;
    const p="diffEditor.renderSideBySide", g=u.getValue(m.uri, p);
    u.updateValue(m.uri, p, !g)
  }
  function s(a, l){
    const u=a.get(uy), m=n(a, l)?.getControl()?.getModifiedEditor()?.getModel();
    if(!m)return;
    const p="diffEditor.ignoreTrimWhitespace", g=u.getValue(m.uri, p);
    u.updateValue(m.uri, p, !g)
  }
  async function o(a, l){
    const u=a.get(yi), d=n(a, l), m=d?.group, p=d?.input;
    if(!d||typeof m>"u"||!(p instanceof kE)||!p.modified.resource)return;
    const g=p.toUntyped({
      preserveViewState:m.id,preserveResource:!0
    });
    g&&(p.modified.isModified()&&u.findEditors({
      resource:p.modified.resource,typeId:p.modified.typeId,editorId:p.modified.editorId
    }).length===0&&await u.openEditor({
      ...g.modified,options:{
        ...g.modified.options,pinned:!0,inactive:!0
      }
    }, m), await u.replaceEditors([{
      editor:p,replacement:{
        ...g,original:g.modified,modified:g.original,options:{
          ...g.options,pinned:!0
        }
      }
    }
    ], m))
  }
  qo.registerCommandAndKeybindingRule({
    id:tka, weight:200, when:void 0, primary:void 0, handler:(a, ...l)=>r(a, l)
  }), qo.registerCommandAndKeybindingRule({
    id:Sfu, weight:200, when:void 0, primary:void 0, handler:(a, ...l)=>i(a, l, t.Modified)
  }), qo.registerCommandAndKeybindingRule({
    id:kfu, weight:200, when:void 0, primary:void 0, handler:(a, ...l)=>i(a, l, t.Original)
  }), qo.registerCommandAndKeybindingRule({
    id:Efu, weight:200, when:void 0, primary:void 0, handler:(a, ...l)=>i(a, l, t.Toggle)
  }), qo.registerCommandAndKeybindingRule({
    id:xfu, weight:200, when:void 0, primary:void 0, handler:(a, ...l)=>s(a, l)
  }), qo.registerCommandAndKeybindingRule({
    id:rka, weight:200, when:void 0, primary:void 0, handler:(a, ...l)=>o(a, l)
  }), or.appendMenuItem(st.CommandPalette, {
    command:{
      id:tka,title:dt(3405,"Toggle Inline View"),category:_(3401,null)
    }, when:AQ
  }), or.appendMenuItem(st.CommandPalette, {
    command:{
      id:rka,title:dt(3406,"Swap Left and Right Editor Side"),category:_(3402,null)
    }, when:Ee.and(AQ, $va)
  })
}
var tka, nka, ika, Sfu, kfu, Efu, EDf, xfu, rka, xDf=
// Module: out-build/vs/workbench/browser/labels.js
// Offset: 30898218 (bundle byte offset)
// Size: 10214 bytes

Ht(), Yn(), Yr(), Jne(), Ku(), ps(), Ei(), hd(), Ff(), Jye(), zr(), ns(), Io(), yn(), Pd(), oR(), rt(), Wt(), iL(), Gpi(), eu(), p1t={
  onDidChangeVisibility:In.None
}, c5=class extends at{
  constructor(e, t, i, r, s, o, a, l, u, d, m){
    super(), this.instantiationService=t, this.configurationService=i, this.modelService=r, this.workspaceService=s, this.languageService=o, this.decorationsService=a, this.themeService=l, this.labelService=u, this.textFileService=d, this.environmentService=m, this._onDidChangeDecorations=this._register(new Qe), this.onDidChangeDecorations=this._onDidChangeDecorations.event, this.widgets=[], this.labels=[], this.registerListeners(e)
  }
  registerListeners(e){
    this._register(e.onDidChangeVisibility(t=>{
      this.widgets.forEach(i=>i.notifyVisibilityChanged(t))
    })), this._register(this.languageService.onDidChange(()=>this.widgets.forEach(t=>t.notifyExtensionsRegistered()))), this._register(this.modelService.onModelLanguageChanged(t=>{
      t.model.uri&&this.widgets.forEach(i=>i.notifyModelLanguageChanged(t.model))
    })), this._register(this.modelService.onModelAdded(t=>{
      t.uri&&this.widgets.forEach(i=>i.notifyModelAdded(t))
    })), this._register(this.workspaceService.onDidChangeWorkspaceFolders(()=>{
      this.widgets.forEach(t=>t.notifyWorkspaceFoldersChange())
    })), this._register(this.decorationsService.onDidChangeDecorations(t=>{
      let i=!1;
      this.widgets.forEach(r=>{
        r.notifyFileDecorationsChanges(t)&&(i=!0)
      }),i&&this._onDidChangeDecorations.fire()
    })), this._register(this.themeService.onDidColorThemeChange(()=>this.widgets.forEach(t=>t.notifyThemeChange()))), this._register(this.configurationService.onDidChangeConfiguration(t=>{
      t.affectsConfiguration(gOt)&&this.widgets.forEach(i=>i.notifyFileAssociationsChange())
    })), this._register(this.labelService.onDidChangeFormatters(t=>{
      this.widgets.forEach(i=>i.notifyFormattersChange(t.scheme))
    })), this._register(this.textFileService.untitled.onDidChangeLabel(t=>{
      this.widgets.forEach(i=>i.notifyUntitledLabelChange(t.resource))
    }))
  }
  get(e){
    return this.labels[e]
  }
  create(e, t){
    const i=this.instantiationService.createInstance(vCa, e, t), r={
      element:i.element,onDidRender:i.onDidRender,setLabel:(s,o,a)=>i.setLabel(s,o,a),setResource:(s,o)=>i.setResource(s,o),setFile:(s,o)=>i.setFile(s,o),clear:()=>i.clear(),dispose:()=>this.disposeWidget(i)
    };
    return this.labels.push(r), this.widgets.push(i), r
  }
  disposeWidget(e){
    const t=this.widgets.indexOf(e);
    t>-1&&(this.widgets.splice(t, 1), this.labels.splice(t, 1)), Bo(e)
  }
  clear(){
    this.widgets=Bo(this.widgets), this.labels=[]
  }
  dispose(){
    super.dispose(), this.clear()
  }
}, c5=__decorate([__param(1, ln), __param(2, Fn), __param(3, Il), __param(4, Lr), __param(5, Jl), __param(6, Nie), __param(7, bo), __param(8, Ol), __param(9, Gg), __param(10, Cc)], c5), RMe=class extends c5{
  get element(){
    return this.label
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m, p){
    super(p1t, i, r, s, o, a, l, u, d, m, p), this.label=this._register(this.create(e, t))
  }
}, RMe=__decorate([__param(2, ln), __param(3, Fn), __param(4, Il), __param(5, Lr), __param(6, Jl), __param(7, Nie), __param(8, bo), __param(9, Ol), __param(10, Gg), __param(11, Cc)], RMe), (function(n){
  n[n.Basic=1]="Basic", n[n.Full=2]="Full"
})(g1t||(g1t={
  
})), vCa=class extends fJ{
  constructor(e, t, i, r, s, o, a, l, u, d){
    super(e, t), this.languageService=i, this.modelService=r, this.decorationsService=s, this.labelService=o, this.textFileService=a, this.contextService=l, this.notebookDocumentService=u, this.environmentService=d, this._onDidRender=this._register(new Qe), this.onDidRender=this._onDidRender.event, this.label=void 0, this.decoration=this._register(new uo), this.options=void 0, this.computedIconClasses=void 0, this.computedLanguageId=void 0, this.computedPathLabel=void 0, this.computedWorkspaceFolderLabel=void 0, this.needsRedraw=void 0, this.isHidden=!1
  }
  notifyVisibilityChanged(e){
    e===this.isHidden&&(this.isHidden=!e, e&&this.needsRedraw&&(this.render({
      updateIcon:this.needsRedraw===g1t.Full,updateDecoration:this.needsRedraw===g1t.Full
    }), this.needsRedraw=void 0))
  }
  notifyModelLanguageChanged(e){
    this.handleModelEvent(e)
  }
  notifyModelAdded(e){
    this.handleModelEvent(e)
  }
  handleModelEvent(e){
    const t=BMe(this.label);
    t&&Zc(e.uri, t)&&this.computedLanguageId!==e.getLanguageId()&&(this.computedLanguageId=e.getLanguageId(), this.render({
      updateIcon:!0,updateDecoration:!1
    }))
  }
  notifyFileDecorationsChanges(e){
    if(!this.options)return!1;
    const t=BMe(this.label);
    return t&&this.options.fileDecorations&&e.affectsResource(t)?this.render({
      updateIcon:!1,updateDecoration:!0
    }):!1
  }
  notifyExtensionsRegistered(){
    this.render({
      updateIcon:!0,updateDecoration:!1
    })
  }
  notifyThemeChange(){
    this.render({
      updateIcon:!1,updateDecoration:!1
    })
  }
  notifyFileAssociationsChange(){
    this.render({
      updateIcon:!0,updateDecoration:!1
    })
  }
  notifyFormattersChange(e){
    BMe(this.label)?.scheme===e&&this.render({
      updateIcon:!1,updateDecoration:!1
    })
  }
  notifyUntitledLabelChange(e){
    Zc(e, BMe(this.label))&&this.render({
      updateIcon:!1,updateDecoration:!1
    })
  }
  notifyWorkspaceFoldersChange(){
    if(typeof this.computedWorkspaceFolderLabel=="string"){
      const e=BMe(this.label);
      je.isUri(e)&&this.label?.name===this.computedWorkspaceFolderLabel&&this.setFile(e,this.options)
    }
  }
  setFile(e, t){
    const i=t?.hideLabel;
    let r;
    if(!i){
      if(t?.fileKind===xg.ROOT_FOLDER){
        const o=this.contextService.getWorkspaceFolder(e);
        o&&(r=o.name,this.computedWorkspaceFolderLabel=r)
      }
      r||(r=pz(GP(e)))
    }
    let s;
    if(!t?.hidePath){
      const o=this.labelService.getUriLabel(Td(e),{
        relative:!0
      });
      o&&o!=="."&&(s=o)
    }
    this.setResource({
      resource:e,name:r,description:s,range:t?.range
    }, t)
  }
  setResource(e, t=Object.create(null)){
    const i=BMe(e), r=e?.resource&&!je.isUri(e.resource);
    if(!t.forceLabel&&!r&&i?.scheme===_n.untitled){
      const u=this.textFileService.untitled.get(i);
      if(u&&!u.hasAssociatedFilePath){
        if(typeof e.name=="string"&&(e.name=u.name),typeof e.description=="string"){
          const m=u.resource.path;
          e.name!==m?e.description=m:e.description=void 0
        }
        const d=u.resource.path;
        u.name!==d?t.title=`${u.name} \u2022 ${d}`:t.title=d
      }
    }
    if(!t.forceLabel&&!r&&i?.scheme===_n.vscodeNotebookCell){
      const u=this.notebookDocumentService.getNotebook(i),d=u?.getCellIndex(i);
      u&&d!==void 0&&typeof e.name=="string"&&(t.title=_(3265,null,e.name,`${d+1}`)),typeof e.name=="string"&&u&&d!==void 0&&typeof e.name=="string"&&(e.name=_(3266,null,e.name,`${d+1}`))
    }
    if(!t.forceLabel&&!r&&i?.scheme===_n.vscodeNotebookCellOutput){
      const u=this.notebookDocumentService.getNotebook(i),d=_Wl(i);
      if(d?.cellFragment){
        if(!d.notebook)return;
        const m=d.notebook.with({
          scheme:_n.vscodeNotebookCell,fragment:d.cellFragment
        }),p=u?.getCellIndex(m),g=d.outputIndex;
        p!==void 0&&g!==void 0&&typeof e.name=="string"?e.name=_(3267,null,e.name,`${p+1}`,`${g+1}`):p!==void 0&&typeof e.name=="string"&&(e.name=_(3268,null,e.name,`${p+1}`))
      }
    }
    const s=this.hasResourceChanged(e), o=s||this.hasPathLabelChanged(e), a=this.hasFileKindChanged(t), l=this.hasIconChanged(t);
    this.label=e, this.options=t, s&&(this.computedLanguageId=void 0), o&&(this.computedPathLabel=void 0), this.render({
      updateIcon:s||a||l,updateDecoration:s||a
    })
  }
  hasFileKindChanged(e){
    const t=e?.fileKind, i=this.options?.fileKind;
    return t!==i
  }
  hasResourceChanged(e){
    const t=BMe(e), i=BMe(this.label);
    return t&&i?t.toString()!==i.toString():!(!t&&!i)
  }
  hasPathLabelChanged(e){
    const t=BMe(e);
    return!!t&&this.computedPathLabel!==this.labelService.getUriLabel(t)
  }
  hasIconChanged(e){
    return this.options?.icon!==e?.icon
  }
  clear(){
    this.label=void 0, this.options=void 0, this.computedLanguageId=void 0, this.computedIconClasses=void 0, this.computedPathLabel=void 0, this.setLabel("")
  }
  render(e){
    if(this.isHidden)return this.needsRedraw!==g1t.Full&&(this.needsRedraw=e.updateIcon||e.updateDecoration?g1t.Full:g1t.Basic), !1;
    if(e.updateIcon&&(this.computedIconClasses=void 0), !this.label)return!1;
    const t={
      title:"",italic:this.options?.italic,strikethrough:this.options?.strikethrough,matches:this.options?.matches,descriptionMatches:this.options?.descriptionMatches,extraClasses:[],separator:this.options?.separator,domId:this.options?.domId,disabledCommand:this.options?.disabledCommand,labelEscapeNewLines:this.options?.labelEscapeNewLines,descriptionTitle:this.options?.descriptionTitle
    }, i=BMe(this.label);
    if(this.options?.title!==void 0&&(t.title=this.options.title), i&&i.scheme!==_n.data&&(!this.options?.title||typeof this.options.title!="string"&&!this.options.title.markdownNotSupportedFallback)&&(this.computedPathLabel||(this.computedPathLabel=this.labelService.getUriLabel(i)), !t.title||typeof t.title=="string"?t.title=this.computedPathLabel:t.title.markdownNotSupportedFallback||(t.title.markdownNotSupportedFallback=this.computedPathLabel)), this.options&&!this.options.hideIcon&&(this.computedIconClasses||(this.computedIconClasses=yS(this.modelService, this.languageService, i, this.options.fileKind, this.options.icon)), je.isUri(this.options.icon)&&(t.iconPath=this.options.icon), this.options.iconElement&&(t.iconElement=this.options.iconElement), t.extraClasses=this.computedIconClasses.slice(0)), this.options?.extraClasses&&t.extraClasses.push(...this.options.extraClasses), this.options?.fileDecorations&&i){
      e.updateDecoration&&(this.decoration.value=this.decorationsService.getDecoration(i,this.options.fileKind!==xg.FILE));
      const r=this.decoration.value;
      if(r){
        if(r.tooltip){
          if(typeof t.title=="string")t.title=`${t.title} \u2022 ${r.tooltip}`;
          else if(typeof t.title?.markdown=="string"){
            const s=`${t.title.markdown} \u2022 ${r.tooltip}`;
            t.title={
              markdown:s,markdownNotSupportedFallback:s
            }
          }
        }
        r.strikethrough&&(t.strikethrough=!0),this.options.fileDecorations.colors&&t.extraClasses.push(r.labelClassName),this.options.fileDecorations.badges&&(t.extraClasses.push(r.badgeClassName),t.extraClasses.push(r.iconClassName))
      }
    }
    return this.label.range&&(t.suffix=this.label.range.startLineNumber!==this.label.range.endLineNumber?`:${this.label.range.startLineNumber}-${this.label.range.endLineNumber}`:`:${this.label.range.startLineNumber}`), this.setLabel(this.label.name??"", this.label.description, t), this._onDidRender.fire(), !0
  }
  dispose(){
    super.dispose(), this.label=void 0, this.options=void 0, this.computedLanguageId=void 0, this.computedIconClasses=void 0, this.computedPathLabel=void 0, this.computedWorkspaceFolderLabel=void 0
  }
}, vCa=__decorate([__param(2, Jl), __param(3, Il), __param(4, Nie), __param(5, Ol), __param(6, Gg), __param(7, Lr), __param(8, Jpi), __param(9, Cc)], vCa)
}
}), Oxf, Uxf, B_i, PMe, $xf, xry=
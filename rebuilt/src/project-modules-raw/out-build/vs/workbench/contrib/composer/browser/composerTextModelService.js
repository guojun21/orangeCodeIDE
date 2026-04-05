// Module: out-build/vs/workbench/contrib/composer/browser/composerTextModelService.js
// Offset: 26932952 (bundle byte offset)
// Size: 679 bytes

rt(), td(), Er(), Wt(), ps(), gye(), iie=xi("composerTextModelService"), Wga=class extends at{
  constructor(e, t){
    super(), this._textModelService=e, this._workspaceContextService=t
  }
  async createModelReference(e, t, i){
    const r=this.getURIForComposer(e, t);
    return this._textModelService.createModelReference(r, i)
  }
  registerTextModelContentProvider(e, t){
    return this._textModelService.registerTextModelContentProvider(e, t)
  }
  getURIForComposer(e, t){
    return TSt(e, t, this._workspaceContextService)
  }
  dispose(){
    super.dispose()
  }
}, Wga=__decorate([__param(0, El), __param(1, Lr)], Wga), Vi(iie, Wga, 1)
}
}), Jnu, Whn, Oa, ly, cp=
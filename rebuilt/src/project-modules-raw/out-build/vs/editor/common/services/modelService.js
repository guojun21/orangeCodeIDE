// Module: out-build/vs/editor/common/services/modelService.js
// Offset: 32745060 (bundle byte offset)
// Size: 10915 bytes

yn(), rt(), _r(), nI(), ts(), bv(), z4o(), WE(), Ku(), sw(), Ei(), VD(), iw(), DOt(), zr(), np(), Wt(), jr(), c5f=class{
  constructor(n, e, t){
    this.model=n, this._modelEventListeners=new Ut, this.model=n, this._modelEventListeners.add(n.onWillDispose(()=>e(n))), this._modelEventListeners.add(n.onDidChangeLanguage(i=>t(n, i)))
  }
  dispose(){
    this._modelEventListeners.dispose()
  }
}, l5f=xv||Fs?1:2, u5f=class{
  constructor(n, e, t, i, r, s, o, a){
    this.uri=n, this.initialUndoRedoSnapshot=e, this.time=t, this.sharesUndoRedoStack=i, this.heapSize=r, this.sha1=s, this.versionId=o, this.alternativeVersionId=a
  }
}, gxa=class extends at{
  static{
    bEt=this
  }
  static{
    this.MAX_MEMORY_FOR_CLOSED_FILES_UNDO_STACK=20*1024*1024
  }
  constructor(e, t, i, r, s, o){
    super(), this._configurationService=e, this._resourcePropertiesService=t, this._undoRedoService=i, this._instantiationService=r, this.logService=s, this._languageService=o, this._onModelAdded=this._register(new Qe), this.onModelAdded=this._onModelAdded.event, this._onModelRemoved=this._register(new Qe), this.onModelRemoved=this._onModelRemoved.event, this._onModelModeChanged=this._register(new Qe), this.onModelLanguageChanged=this._onModelModeChanged.event, this._onModelSyncRequested=this._register(new Qe), this.onModelSyncRequested=this._onModelSyncRequested.event, this._modelCreationOptionsByLanguageAndResource=Object.create(null), this._models={
      
    }, this._disposedModels=new Map, this._disposedModelsHeapSize=0, this._register(this._configurationService.onDidChangeConfiguration(a=>this._updateModelOptions(a))), this._updateModelOptions(void 0)
  }
  static _readModelOptions(e, t){
    let i=J$.tabSize;
    if(e.editor&&typeof e.editor.tabSize<"u"){
      const p=parseInt(e.editor.tabSize,10);
      isNaN(p)||(i=p),i<1&&(i=1)
    }
    let r="tabSize";
    if(e.editor&&typeof e.editor.indentSize<"u"&&e.editor.indentSize!=="tabSize"){
      const p=parseInt(e.editor.indentSize,10);
      isNaN(p)||(r=Math.max(p,1))
    }
    let s=J$.insertSpaces;
    e.editor&&typeof e.editor.insertSpaces<"u"&&(s=e.editor.insertSpaces==="false"?!1:!!e.editor.insertSpaces);
    let o=l5f;
    const a=e.eol;
    a===`\r
`?o=2:a===`
`&&(o=1);
    let l=J$.trimAutoWhitespace;
    e.editor&&typeof e.editor.trimAutoWhitespace<"u"&&(l=e.editor.trimAutoWhitespace==="false"?!1:!!e.editor.trimAutoWhitespace);
    let u=J$.detectIndentation;
    e.editor&&typeof e.editor.detectIndentation<"u"&&(u=e.editor.detectIndentation==="false"?!1:!!e.editor.detectIndentation);
    let d=J$.largeFileOptimizations;
    e.editor&&typeof e.editor.largeFileOptimizations<"u"&&(d=e.editor.largeFileOptimizations==="false"?!1:!!e.editor.largeFileOptimizations);
    let m=J$.bracketPairColorizationOptions;
    return e.editor?.bracketPairColorization&&typeof e.editor.bracketPairColorization=="object"&&(m={
      enabled:!!e.editor.bracketPairColorization.enabled,independentColorPoolPerBracketType:!!e.editor.bracketPairColorization.independentColorPoolPerBracketType
    }), {
      isForSimpleWidget:t,tabSize:i,indentSize:r,insertSpaces:s,detectIndentation:u,defaultEOL:o,trimAutoWhitespace:l,largeFileOptimizations:d,bracketPairColorizationOptions:m
    }
  }
  _getEOL(e, t){
    if(e)return this._resourcePropertiesService.getEOL(e, t);
    const i=this._configurationService.getValue("files.eol", {
      overrideIdentifier:t
    });
    return i&&typeof i=="string"&&i!=="auto"?i:cf===3||cf===2?`
`:`\r
`
  }
  _shouldRestoreUndoStack(){
    const e=this._configurationService.getValue("files.restoreUndoStack");
    return typeof e=="boolean"?e:!0
  }
  getCreationOptions(e, t, i){
    const r=typeof e=="string"?e:e.languageId;
    let s=this._modelCreationOptionsByLanguageAndResource[r+t];
    if(!s){
      const o=this._configurationService.getValue("editor",{
        overrideIdentifier:r,resource:t
      }),a=this._getEOL(t,r);
      s=bEt._readModelOptions({
        editor:o,eol:a
      },i),this._modelCreationOptionsByLanguageAndResource[r+t]=s
    }
    return s
  }
  _updateModelOptions(e){
    const t=this._modelCreationOptionsByLanguageAndResource;
    this._modelCreationOptionsByLanguageAndResource=Object.create(null);
    const i=Object.keys(this._models);
    for(let r=0, s=i.length;
    r<s;
    r++){
      const o=i[r],a=this._models[o],l=a.model.getLanguageId(),u=a.model.uri;
      if(e&&!e.affectsConfiguration("editor",{
        overrideIdentifier:l,resource:u
      })&&!e.affectsConfiguration("files.eol",{
        overrideIdentifier:l,resource:u
      }))continue;
      const d=t[l+u],m=this.getCreationOptions(l,u,a.model.isForSimpleWidget);
      bEt._setModelOptionsForModel(a.model,m,d)
    }
  }
  static _setModelOptionsForModel(e, t, i){
    i&&i.defaultEOL!==t.defaultEOL&&e.getLineCount()===1&&e.setEOL(t.defaultEOL===1?0:1), !(i&&i.detectIndentation===t.detectIndentation&&i.insertSpaces===t.insertSpaces&&i.tabSize===t.tabSize&&i.indentSize===t.indentSize&&i.trimAutoWhitespace===t.trimAutoWhitespace&&fv(i.bracketPairColorizationOptions, t.bracketPairColorizationOptions))&&(t.detectIndentation?(e.detectIndentation(t.insertSpaces, t.tabSize), e.updateOptions({
      trimAutoWhitespace:t.trimAutoWhitespace,bracketColorizationOptions:t.bracketPairColorizationOptions
    })):e.updateOptions({
      insertSpaces:t.insertSpaces,tabSize:t.tabSize,indentSize:t.indentSize,trimAutoWhitespace:t.trimAutoWhitespace,bracketColorizationOptions:t.bracketPairColorizationOptions
    }))
  }
  _insertDisposedModel(e){
    this._disposedModels.set(vrt(e.uri), e), this._disposedModelsHeapSize+=e.heapSize
  }
  _removeDisposedModel(e){
    const t=this._disposedModels.get(vrt(e));
    return t&&(this._disposedModelsHeapSize-=t.heapSize), this._disposedModels.delete(vrt(e)), t
  }
  _ensureDisposedModelsHeapSize(e){
    if(this._disposedModelsHeapSize>e){
      const t=[];
      for(this._disposedModels.forEach(i=>{
        i.sharesUndoRedoStack||t.push(i)
      }),t.sort((i,r)=>i.time-r.time);
      t.length>0&&this._disposedModelsHeapSize>e;
      ){
        const i=t.shift();
        this._removeDisposedModel(i.uri),i.initialUndoRedoSnapshot!==null&&this._undoRedoService.restoreSnapshot(i.initialUndoRedoSnapshot)
      }
    }
  }
  _createModelData(e, t, i, r, s, o){
    const a=this.getCreationOptions(t, i, r), l=this._instantiationService.createInstance(N6, e, t, a, i, s, o);
    if(i&&this._disposedModels.has(vrt(i))){
      const m=this._removeDisposedModel(i),p=this._undoRedoService.getElements(i),g=this._getSHA1Computer(),f=g.canComputeSHA1(l)?g.computeSHA1(l)===m.sha1:!1;
      if(f||m.sharesUndoRedoStack){
        for(const A of p.past)t9e(A)&&A.matchesResource(i)&&A.setModel(l);
        for(const A of p.future)t9e(A)&&A.matchesResource(i)&&A.setModel(l);
        this._undoRedoService.setElementsValidFlag(i,!0,A=>t9e(A)&&A.matchesResource(i)),f&&(l._overwriteVersionId(m.versionId),l._overwriteAlternativeVersionId(m.alternativeVersionId),l._overwriteInitialUndoRedoSnapshot(m.initialUndoRedoSnapshot))
      }
      else m.initialUndoRedoSnapshot!==null&&this._undoRedoService.restoreSnapshot(m.initialUndoRedoSnapshot)
    }
    const u=vrt(l.uri);
    if(this._models[u])throw new Error("ModelService: Cannot add model because it already exists!");
    const d=new c5f(l, m=>this._onWillDispose(m), (m, p)=>this._onDidChangeLanguage(m, p));
    return this._models[u]=d, d
  }
  updateModel(e, t){
    const i=this.getCreationOptions(e.getLanguageId(), e.uri, e.isForSimpleWidget), {
      textBuffer:r,disposable:s
    }
    =POn(t, i.defaultEOL);
    if(e.equalsTextBuffer(r)){
      s.dispose();
      return
    }
    e.pushStackElement(), e.pushEOL(r.getEOL()===`\r
`?1:0), e.pushEditOperations([], bEt._computeEdits(e, r), ()=>[]), e.pushStackElement(), s.dispose()
  }
  static _commonPrefix(e, t, i, r, s, o){
    const a=Math.min(t, s);
    let l=0;
    for(let u=0;
    u<a&&e.getLineContent(i+u)===r.getLineContent(o+u);
    u++)l++;
    return l
  }
  static _commonSuffix(e, t, i, r, s, o){
    const a=Math.min(t, s);
    let l=0;
    for(let u=0;
    u<a&&e.getLineContent(i+t-u)===r.getLineContent(o+s-u);
    u++)l++;
    return l
  }
  static _computeEdits(e, t){
    const i=e.getLineCount(), r=t.getLineCount(), s=this._commonPrefix(e, i, 1, t, r, 1);
    if(i===r&&s===i)return[];
    const o=this._commonSuffix(e, i-s, s, t, r-s, s);
    let a, l;
    return o>0?(a=new Zt(s+1, 1, i-o+1, 1), l=new Zt(s+1, 1, r-o+1, 1)):s>0?(a=new Zt(s, e.getLineMaxColumn(s), i, e.getLineMaxColumn(i)), l=new Zt(s, 1+t.getLineLength(s), r, 1+t.getLineLength(r))):(a=new Zt(1, 1, i, e.getLineMaxColumn(i)), l=new Zt(1, 1, r, 1+t.getLineLength(r))), [zb.replaceMove(a, t.getValueInRange(l, 0))]
  }
  createModel(e, t, i, r, s, o){
    let a;
    return i?.scheme.endsWith("-anysphere")?(r===void 0&&(r=!0), s===void 0&&(s=!0), o===void 0&&(o=s), r||this.logService.debug("Creating model with anysphere scheme that is not as a simple widget: ", i.toString()), s||this.logService.debug("Creating model with anysphere scheme and not skipping lsp sync: ", i.toString())):(r===void 0&&(r=!1), s===void 0&&(s=!1), o===void 0&&(o=s)), t?a=this._createModelData(e, t, i, r, s, o):a=this._createModelData(e, o_, i, r, s, o), this._onModelAdded.fire(a.model), a.model
  }
  destroyModel(e){
    const t=this._models[vrt(e)];
    t&&t.model.dispose()
  }
  getModels(){
    const e=[], t=Object.keys(this._models);
    for(let i=0, r=t.length;
    i<r;
    i++){
      const s=t[i];
      e.push(this._models[s].model)
    }
    return e
  }
  getModel(e){
    const t=vrt(e), i=this._models[t];
    return i?i.model:null
  }
  syncModelWithLSP(e){
    e.syncedWithLSP||(e.skipLSPSync=!1, e.skipLSPRegistration=!1, this._languageService.requestRichLanguageFeatures(e.getLanguageId()), this._onModelSyncRequested.fire(e))
  }
  _schemaShouldMaintainUndoRedoElements(e){
    return e.scheme===_n.file||e.scheme===_n.vscodeRemote||e.scheme===_n.vscodeUserData||e.scheme===_n.vscodeNotebookCell||e.scheme==="fake-fs"
  }
  _onWillDispose(e){
    const t=vrt(e.uri), i=this._models[t], r=this._undoRedoService.getUriComparisonKey(e.uri)!==e.uri.toString();
    let s=!1, o=0;
    if(r||this._shouldRestoreUndoStack()&&this._schemaShouldMaintainUndoRedoElements(e.uri)){
      const u=this._undoRedoService.getElements(e.uri);
      if(u.past.length>0||u.future.length>0){
        for(const d of u.past)t9e(d)&&d.matchesResource(e.uri)&&(s=!0,o+=d.heapSize(e.uri),d.setModel(e.uri));
        for(const d of u.future)t9e(d)&&d.matchesResource(e.uri)&&(s=!0,o+=d.heapSize(e.uri),d.setModel(e.uri))
      }
    }
    const a=bEt.MAX_MEMORY_FOR_CLOSED_FILES_UNDO_STACK, l=this._getSHA1Computer();
    if(s)if(!r&&(o>a||!l.canComputeSHA1(e))){
      const u=i.model.getInitialUndoRedoSnapshot();
      u!==null&&this._undoRedoService.restoreSnapshot(u)
    }
    else this._ensureDisposedModelsHeapSize(a-o), this._undoRedoService.setElementsValidFlag(e.uri, !1, u=>t9e(u)&&u.matchesResource(e.uri)), this._insertDisposedModel(new u5f(e.uri, i.model.getInitialUndoRedoSnapshot(), Date.now(), r, o, l.computeSHA1(e), e.getVersionId(), e.getAlternativeVersionId()));
    else if(!r){
      const u=i.model.getInitialUndoRedoSnapshot();
      u!==null&&this._undoRedoService.restoreSnapshot(u)
    }
    delete this._models[t], i.dispose(), delete this._modelCreationOptionsByLanguageAndResource[e.getLanguageId()+e.uri], this._onModelRemoved.fire(e)
  }
  _onDidChangeLanguage(e, t){
    const i=t.oldLanguage, r=e.getLanguageId(), s=this.getCreationOptions(i, e.uri, e.isForSimpleWidget), o=this.getCreationOptions(r, e.uri, e.isForSimpleWidget);
    bEt._setModelOptionsForModel(e, o, s), this._onModelModeChanged.fire({
      model:e,oldLanguageId:i
    })
  }
  _getSHA1Computer(){
    return new vSi
  }
}, gxa=bEt=__decorate([__param(0, Fn), __param(1, ent), __param(2, qB), __param(3, ln), __param(4, Rr), __param(5, Jl)], gxa), vSi=class pzb{
  static{
    this.MAX_MODEL_SIZE=10*1024*1024
  }
  canComputeSHA1(e){
    return e.getValueLength()<=pzb.MAX_MODEL_SIZE
  }
  computeSHA1(e){
    const t=new yde, i=e.createSnapshot();
    let r;
    for(;
    r=i.read();
    )t.update(r);
    return t.digest()
  }
}
}
}), d5f, qly=
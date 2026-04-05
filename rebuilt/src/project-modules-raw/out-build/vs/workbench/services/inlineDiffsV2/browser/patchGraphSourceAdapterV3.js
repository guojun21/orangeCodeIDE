// Module: out-build/vs/workbench/services/inlineDiffsV2/browser/patchGraphSourceAdapterV3.js
// Offset: 33893085 (bundle byte offset)
// Size: 32537 bytes

yn(), vr(), rt(), oa(), zr(), Yr(), _M(), mJg(), Fvi(), _$f(), Bc(), Js(), Pa(), dmn(), ph(), Cde(), dvn=class{
  constructor(n){
    this._cacheVersion=-1, this._cacheSeedCount=-1, this.uri=n.uri, this.diffId=n.diffId, this.composerId=n.composerId, this.seedPatches=n.seedPatches, this.keptPatch=void 0
  }
}, C$f=class QSn extends at{
  static{
    this.UNKNOWN_COMPOSER="__unknown__"
  }
  static{
    this.DEBUG_LOG_ID="patch-graph"
  }
  static{
    this.TOMBSTONE_TTL_MS=5e3
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g, f, A, w, C){
    super(), this.patchGraphAdapterService=e, this.patchGraphService=t, this.textModelService=i, this.logService=r, this.undoRedoService=s, this.telemetryService=o, this.analyticsService=a, this.textFileService=l, this.fileService=u, this.nonAgentChangeTracker=d, this.diffDecorationVisibilityService=m, this.clientDebugLogService=p, this.experimentService=g, this.notebookService=f, this.composerEventService=A, this.cursorAuthenticationService=w, this.cmdKStateService=C, this.sourceId="patchGraphSourceAdapter3", this._onDidChange=this._register(new Qe), this.onDidChange=this._onDidChange.event, this._queue=this._register(new YFt), this._sessionByComposerUri=new Map, this._sessionById=new Map, this._modelRefByUri=this._register(new mp), this._modelContentListenerByUri=this._register(new mp), this._decorationIdsByUri=new Map, this._tombstoneByComposerUri=new Map, this._isSelfEditing=!1, this._orphanedTeardownSchedulers=this._register(new mp), this._sentryEnabled=!1, this._sentryEnabled=this.experimentService.checkFeatureGate("patch_graph_sentry_reporting"), this._register(this.experimentService.onDidChangeGates(x=>{
      (!x.changedGates||x.changedGates.has("patch_graph_sentry_reporting"))&&(this._sentryEnabled=this.experimentService.checkFeatureGate("patch_graph_sentry_reporting"))
    })), this._register(this.patchGraphAdapterService.onDidApplyAgentEdit(x=>{
      this._handleAppliedAgentEdit(x)
    })), this._register(this.diffDecorationVisibilityService.onDidChangeGlobal(()=>{
      this._refreshAllDecorations(),this._onDidChange.fire()
    })), this._register(this.composerEventService.onToRemoveDiffs(({
      uri:x
    })=>{
      const I=Iu.getComparisonKey(x),B=this._getSessionsForUri(I);
      for(const R of B)this._teardownSession(this._findComposerUriKeyForSession(R),R.diffId)
    })), this._register(this.textFileService.files.onDidChangeOrphaned(x=>{
      const I=x.resource;
      if(I.scheme===_n.vscodeNotebookCell)return;
      const B=Iu.getComparisonKey(I);
      if(!x.hasState(4)){
        this._orphanedTeardownSchedulers.deleteAndDispose(B);
        return
      }
      if(this._getSessionsForUri(B).length===0)return;
      const N=new Hu(()=>{
        if(this._store.isDisposed)return;
        this._orphanedTeardownSchedulers.deleteAndDispose(B);
        const M=this.textFileService.files.get(I);
        if(M&&!M.hasState(4))return;
        const O=this._getSessionsForUri(B);
        for(const $ of O)this._teardownSession(this._findComposerUriKeyForSession($),$.diffId)
      },250);
      this._orphanedTeardownSchedulers.deleteAndDispose(B),this._orphanedTeardownSchedulers.set(B,N),N.schedule()
    })), this._register(this.textFileService.files.onDidResolve(({
      model:x
    })=>{
      if(this._isSelfEditing)return;
      const I=x.resource;
      if(I.scheme===_n.vscodeNotebookCell)return;
      const B=Iu.getComparisonKey(I);
      if(this._getSessionsForUri(B).length===0)return;
      const N=this._modelRefByUri.get(B);
      if(!N||N.object.textEditorModel.isDisposed())return;
      const M=N.object.textEditorModel.getValue();
      this.nonAgentChangeTracker.recordExternalChanges(I,M),this._recomputeDescriptorFromModel(I,N)
    }))
  }
  _makeComposerUriKey(e, t){
    return`${e??QSn.UNKNOWN_COMPOSER}::${t}`
  }
  _parseComposerUriKey(e){
    const t=e.indexOf("::");
    return{
      composerId:e.slice(0,t),uriKey:e.slice(t+2)
    }
  }
  _getSessionsForUri(e){
    const t=[];
    for(const[i, r]of this._sessionByComposerUri)i.endsWith(`::${e}`)&&t.push(r);
    return t
  }
  _findComposerUriKeyForSession(e){
    for(const[t, i]of this._sessionByComposerUri)if(i===e)return t;
    return this._makeComposerUriKey(e.composerId, Iu.getComparisonKey(e.uri))
  }
  getDescriptors(){
    return[...this._sessionById.values()].map(e=>this._getDescriptorForSession(e)).filter(e=>e!==void 0&&e.changes.length>0).map(e=>this._applyVisibilityFlags(e))
  }
  getDescriptorsForUri(e){
    const t=Iu.getComparisonKey(e);
    return this._getSessionsForUri(t).map(i=>this._getDescriptorForSession(i)).filter(i=>i!==void 0&&i.changes.length>0).map(i=>this._applyVisibilityFlags(i))
  }
  getDescriptorById(e){
    const t=this._sessionById.get(e);
    if(!t)return;
    const i=this._getDescriptorForSession(t);
    if(!(!i||i.changes.length===0))return this._applyVisibilityFlags(i)
  }
  canHandle(e){
    return this._sessionById.has(e)
  }
  getRecentDiffDescriptors(e){
    const t=[];
    for(const[, i]of this._sessionByComposerUri)if(i.composerId===e){
      const r=this._getDescriptorForSession(i);
      r&&t.push(this._applyVisibilityFlags(r))
    }
    return t
  }
  getBaselineTextLines(e){
    const t=this._sessionById.get(e);
    if(!t)return;
    const i=this._modelRefByUri.get(Iu.getComparisonKey(t.uri));
    if(!i)return;
    const r=i.object.textEditorModel.getValue(), s=this._computeOriginal(t.uri, t.seedPatches, r);
    if(s===void 0)return;
    const o=this._computeBaseline(s, t.keptPatch);
    if(o.length!==0)return Zv(o)
  }
  _getDescriptorForSession(e){
    const t=this._modelRefByUri.get(Iu.getComparisonKey(e.uri));
    if(!t)return;
    const i=t.object.textEditorModel, r=i.getVersionId();
    if(e._cacheVersion===r&&e._cacheKeptPatchRef===e.keptPatch&&e._cacheSeedCount===e.seedPatches.length)return e._cachedDescriptor;
    const s=i.getValue(), o=this._computeDescriptor(e.uri, e.diffId, e.seedPatches, e.keptPatch, s, e.composerId);
    return e._cachedDescriptor=o, e._cacheVersion=r, e._cacheKeptPatchRef=e.keptPatch, e._cacheSeedCount=e.seedPatches.length, o
  }
  cancel(e){
    
  }
  async accept(e, t){
    const i=this._sessionById.get(e);
    if(!i)return;
    const r=this._modelRefByUri.get(Iu.getComparisonKey(i.uri));
    if(!r)return;
    const s=r.object.textEditorModel.getValue(), o=this._computeOriginal(i.uri, i.seedPatches, s);
    if(o===void 0)return;
    if(o===s){
      this._closePromptBarForDiff(i.diffId),this._teardownSession(this._findComposerUriKeyForSession(i),i.diffId);
      return
    }
    const a=i.keptPatch, l=this._getDescriptorForSession(i), u=this.patchGraphService.diff(o, s, {
      fileUri:i.uri,timestamp:Date.now(),patchSource:"human"
    });
    i.keptPatch=u.hunks.length>0?u:void 0;
    const d=this._getCellIdFromPatches(i.seedPatches), m={
      uri:i.uri,diffId:i.diffId,composerId:i.composerId,seedPatches:i.seedPatches,cellId:d
    };
    this.undoRedoService.pushElement(new pce("Accept All", "accept-all", this._getUndoResourceUri(i.uri), async()=>{
      const g=await this._getOrCreateModelRef(m.uri,m.cellId),f=g.object.textEditorModel.getValue(),A=this._sessionById.get(m.diffId),w=this._mergeSeeds(A?.seedPatches,m.seedPatches),C=this._computeDescriptor(m.uri,m.diffId,w,a,f,m.composerId);
      if(!C||C.changes.length===0){
        this.logService.warn("[patch-graph-v3] undo Accept All: descriptor empty after restore");
        return
      }
      const x=A??new dvn({
        uri:m.uri,diffId:m.diffId,composerId:m.composerId,seedPatches:w
      });
      x.seedPatches=w,x.keptPatch=a,this._commitSessionRestore(m.composerId,m.uri,x,g)
    }, async()=>{
      const g=this._sessionById.get(m.diffId);
      g&&(g.keptPatch=u.hunks.length>0?u:void 0,this._teardownSession(this._findComposerUriKeyForSession(g),m.diffId))
    })), this._clientDebugLog("accept", {
      diffId:i.diffId,composerId:i.composerId,seedCount:i.seedPatches.length
    });
    const p=t?.sourceContext??"editor";
    this._trackTelemetry(NFo, i.seedPatches), this._trackAcceptRejectDiffDetails("accept", i.seedPatches, p), this._emitPatchGraphDiffRemainingActionEvents("accept", i, l, p), this._closePromptBarForDiff(i.diffId), this._teardownSession(this._findComposerUriKeyForSession(i), i.diffId)
  }
  async reject(e, t, i){
    const r=this._sessionById.get(e);
    if(!r)return;
    const s=this._getCellIdFromPatches(r.seedPatches), a=r.seedPatches.some(B=>B.attribs.isNewlyCreatedCell===!0)?this._tryCaptureNotebookCellDeletionInfo(r.uri, s):void 0, u=this._modelRefByUri.get(Iu.getComparisonKey(r.uri))?.object.textEditorModel;
    if(!u)return;
    const d=u.getValue(), m=this._computeOriginal(r.uri, r.seedPatches, d);
    if(m===void 0)return;
    const p=this._getDescriptorForSession(r), g=p?this._precomputeGenerationUUIDsForDescriptor(r, p):void 0, f=this._computeBaseline(m, r.keptPatch), A=this.patchGraphService.diff(d, f, {
      fileUri:r.uri,timestamp:Date.now(),patchSource:"human"
    }), w=this.patchGraphService.splitPatch(A);
    for(const B of w)this.patchGraphService.registerPatch(B);
    this.nonAgentChangeTracker.updateLastKnownBaseline(r.uri, f), this._isSelfEditing=!0;
    try{
      u.applyEdits([{
        range:u.getFullModelRange(),text:f
      }
      ],!1)
    }
    finally{
      this._isSelfEditing=!1
    }
    const C=f.length===0&&r.uri.scheme!==_n.vscodeNotebookCell&&r.seedPatches.some(B=>B.status==="added");
    if(C)try{
      await this.fileService.del(r.uri)
    }
    catch{
      this.logService.error(`[patch-graph-v3] reject: failed to delete agent-created file ${r.uri.fsPath}`)
    }
    else await this._saveResource(r.uri, {
      skipSaveParticipants:!0,ignoreModifiedSince:!0
    });
    const x=r.keptPatch, I={
      uri:r.uri,diffId:r.diffId,composerId:r.composerId,seedPatches:r.seedPatches,rejectPatch:A,keptPatch:x,cellId:s,isNewlyCreatedFile:C
    };
    if(this.undoRedoService.pushElement(new pce("Reject All", "reject-all", this._getUndoResourceUri(r.uri), async()=>{
      const B=await this._getOrCreateModelRef(I.uri,I.cellId),R=B.object.textEditorModel,N=R.getValue(),M=this.patchGraphService.inverse(I.rejectPatch);
      let O;
      const $=this.patchGraphService.apply(M,X=>{
        O=X
      },N);
      if(O){
        this._clientDebugLog("undoRejectAllFailed",{
          composerId:I.composerId,diffId:I.diffId,uri:I.uri.fsPath,error:O.message
        }),this._uploadClientDebugLogs(),this.logService.error("[patch-graph-v3] undo Reject All: inverse patch failed",O);
        return
      }
      const H=this.patchGraphService.splitPatch(M);
      for(const X of H)this.patchGraphService.registerPatch(X);
      this.nonAgentChangeTracker.updateLastKnownBaseline(I.uri,$),this._isSelfEditing=!0;
      try{
        R.applyEdits([{
          range:R.getFullModelRange(),text:$
        }
        ],!1)
      }
      finally{
        this._isSelfEditing=!1
      }
      await this._saveResource(I.uri,{
        skipSaveParticipants:!0,ignoreModifiedSince:!0
      });
      const W=this._sessionById.get(I.diffId),z=this._mergeSeeds(W?.seedPatches,I.seedPatches),Y=this._computeDescriptor(I.uri,I.diffId,z,I.keptPatch,$,I.composerId);
      if(!Y||Y.changes.length===0){
        this.logService.warn("[patch-graph-v3] undo Reject All: descriptor empty after restore");
        return
      }
      const j=W??new dvn({
        uri:I.uri,diffId:I.diffId,composerId:I.composerId,seedPatches:z
      });
      j.seedPatches=z,j.keptPatch=I.keptPatch,this._commitSessionRestore(I.composerId,I.uri,j,B)
    }, async()=>{
      const B=this._sessionById.get(I.diffId);
      if(!B)return;
      const N=(await this._getOrCreateModelRef(I.uri,I.cellId)).object.textEditorModel,M=N.getValue(),O=this.patchGraphService.clonePatch(I.rejectPatch);
      let $;
      const H=this.patchGraphService.apply(O,z=>{
        $=z
      },M);
      if($){
        this._clientDebugLog("redoRejectAllFailed",{
          composerId:I.composerId,diffId:I.diffId,uri:I.uri.fsPath,error:$.message
        }),this._uploadClientDebugLogs(),this.logService.error("[patch-graph-v3] redo Reject All: apply patch failed",$);
        return
      }
      const W=this.patchGraphService.splitPatch(O);
      for(const z of W)this.patchGraphService.registerPatch(z);
      this.nonAgentChangeTracker.updateLastKnownBaseline(I.uri,H),this._isSelfEditing=!0;
      try{
        N.applyEdits([{
          range:N.getFullModelRange(),text:H
        }
        ],!1)
      }
      finally{
        this._isSelfEditing=!1
      }
      if(I.isNewlyCreatedFile)try{
        await this.fileService.del(I.uri)
      }
      catch{
        this.logService.error(`[patch-graph-v3] redo Reject All: failed to delete file ${I.uri.fsPath}`)
      }
      else await this._saveResource(I.uri,{
        skipSaveParticipants:!0,ignoreModifiedSince:!0
      });
      this._teardownSession(this._findComposerUriKeyForSession(B),I.diffId)
    })), this._clientDebugLog("reject", {
      diffId:r.diffId,composerId:r.composerId,seedCount:r.seedPatches.length
    }), !t?.rejectSilently){
      const B=t?.sourceContext??"editor";
      this._trackTelemetry(MFo,r.seedPatches),this._trackAcceptRejectDiffDetails("reject",r.seedPatches,B),this._emitPatchGraphDiffRemainingActionEvents("reject",r,p,B,g)
    }
    if(this._teardownSession(this._findComposerUriKeyForSession(r), r.diffId), a){
      const B=this.notebookService.getNotebookTextModel(a.notebookUri);
      B&&(B.applyEdits([{
        editType:1,index:a.cellIndex,count:1,cells:[]
      }
      ],!0,void 0,()=>{
        
      },void 0,!1),this.undoRedoService.pushElement(new pce("Undo Delete Notebook Cell","undo-delete-notebook-cell",a.notebookUri,async()=>{
        this.notebookService.getNotebookTextModel(a.notebookUri)?.applyEdits([{
          editType:1,index:a.cellIndex,count:0,cells:[a.cellData]
        }
        ],!0,void 0,()=>{
          
        },void 0,!1)
      },async()=>{
        this.notebookService.getNotebookTextModel(a.notebookUri)?.applyEdits([{
          editType:1,index:a.cellIndex,count:1,cells:[]
        }
        ],!0,void 0,()=>{
          
        },void 0,!1)
      })))
    }
  }
  acceptChange(e, t){
    const i=this._sessionById.get(e);
    if(!i)return!0;
    const r=this._modelRefByUri.get(Iu.getComparisonKey(i.uri));
    if(!r)return!0;
    const s=r.object.textEditorModel.getValue(), o=this._computeOriginal(i.uri, i.seedPatches, s);
    if(o===void 0)return!0;
    const a=this._computeBaseline(o, i.keptPatch), l=a.length===0?[]:Zv(a), u=s.length===0?[]:Zv(s), d=t.removedLinesOriginalRange.startLineNumber-1, m=t.removedLinesOriginalRange.endLineNumberExclusive-1, p=t.addedRange.startLineNumber-1, g=t.addedRange.endLineNumberExclusive-1, A=[...l.slice(0, d), ...u.slice(p, g), ...l.slice(m)].join(`
`), w=i.keptPatch, C=this.patchGraphService.diff(o, A, {
      fileUri:i.uri,timestamp:Date.now(),patchSource:"human"
    });
    i.keptPatch=C.hunks.length>0?C:void 0;
    const x=this._getCellIdFromPatches(i.seedPatches), I={
      uri:i.uri,diffId:i.diffId,composerId:i.composerId,seedPatches:i.seedPatches,cellId:x
    };
    this.undoRedoService.pushElement(new pce("Keep Change", "accept-change", this._getUndoResourceUri(i.uri), async()=>{
      const R=await this._getOrCreateModelRef(I.uri,I.cellId),N=R.object.textEditorModel.getValue(),M=this._sessionById.get(I.diffId),O=this._mergeSeeds(M?.seedPatches,I.seedPatches),$=this._computeDescriptor(I.uri,I.diffId,O,w,N,I.composerId);
      if(!$||$.changes.length===0){
        this.logService.warn("[patch-graph-v3] undo Keep: descriptor empty after restore");
        return
      }
      const H=M??new dvn({
        uri:I.uri,diffId:I.diffId,composerId:I.composerId,seedPatches:O
      });
      H.seedPatches=O,H.keptPatch=w,this._commitSessionRestore(I.composerId,I.uri,H,R)
    }, async()=>{
      const R=this._sessionById.get(I.diffId);
      if(!R)return;
      R.keptPatch=C.hunks.length>0?C:void 0;
      const N=this._getDescriptorForSession(R);
      !N||N.changes.length===0?this._teardownSession(this._findComposerUriKeyForSession(R),I.diffId):(this._refreshSessionDecorations(R),this._onDidChange.fire())
    })), this._clientDebugLog("acceptChange", {
      diffId:i.diffId,composerId:i.composerId,bStart:d,bEnd:m,cStart:p,cEnd:g
    }), this._trackTelemetry(NFo, i.seedPatches), this._trackAcceptRejectDiffDetails("accept", i.seedPatches, "editor"), this._emitPatchGraphDiffPartialActionEvent("accept", i, t, "editor");
    const B=this._getDescriptorForSession(i);
    return!B||B.changes.length===0?(this._closePromptBarForDiff(i.diffId), this._teardownSession(this._findComposerUriKeyForSession(i), i.diffId)):this._refreshSessionDecorations(i), this._onDidChange.fire(), !B||B.changes.length===0
  }
  rejectChange(e, t){
    const i=this._sessionById.get(e);
    if(!i)return!1;
    const s=this._modelRefByUri.get(Iu.getComparisonKey(i.uri))?.object.textEditorModel;
    if(!s)return!1;
    const o=s.getValue(), a=this._getDescriptorForSession(i);
    if(!a)return!1;
    const l=this._inferGenerationUUIDForChange(i, t), u=a.currentRange.startLineNumber, d=u+t.addedRange.startLineNumber-1, m=u+t.addedRange.endLineNumberExclusive-1, p=o.length===0?[]:Zv(o), g=p.slice(0, d-1), f=p.slice(m-1), w=[...g, ...t.removedTextLines, ...f].join(s.getEOL()), C=this.patchGraphService.diff(o, w, {
      fileUri:i.uri,timestamp:Date.now(),patchSource:"human"
    }), x=this.patchGraphService.splitPatch(C);
    for(const M of x)this.patchGraphService.registerPatch(M);
    this.nonAgentChangeTracker.updateLastKnownBaseline(i.uri, w), this._isSelfEditing=!0;
    try{
      s.applyEdits([{
        range:s.getFullModelRange(),text:w
      }
      ],!1)
    }
    finally{
      this._isSelfEditing=!1
    }
    this._saveResource(i.uri, {
      skipSaveParticipants:!0,ignoreModifiedSince:!0
    });
    const I=i.keptPatch, B=this._getCellIdFromPatches(i.seedPatches), R={
      uri:i.uri,diffId:i.diffId,composerId:i.composerId,seedPatches:i.seedPatches,rejectPatch:C,keptPatch:I,cellId:B
    };
    this.undoRedoService.pushElement(new pce("Undo Change", "reject-change", this._getUndoResourceUri(i.uri), async()=>{
      const M=await this._getOrCreateModelRef(R.uri,R.cellId),O=M.object.textEditorModel,$=O.getValue(),H=this.patchGraphService.inverse(R.rejectPatch);
      let W;
      const z=this.patchGraphService.apply(H,ne=>{
        W=ne
      },$);
      if(W){
        this._clientDebugLog("undoRejectChangeFailed",{
          composerId:R.composerId,diffId:R.diffId,uri:R.uri.fsPath,error:W.message
        }),this._uploadClientDebugLogs(),this.logService.error("[patch-graph-v3] undo rejectChange: inverse patch failed",W);
        return
      }
      const Y=this.patchGraphService.splitPatch(H);
      for(const ne of Y)this.patchGraphService.registerPatch(ne);
      this.nonAgentChangeTracker.updateLastKnownBaseline(R.uri,z),this._isSelfEditing=!0;
      try{
        O.applyEdits([{
          range:O.getFullModelRange(),text:z
        }
        ],!1)
      }
      finally{
        this._isSelfEditing=!1
      }
      await this._saveResource(R.uri,{
        skipSaveParticipants:!0,ignoreModifiedSince:!0
      });
      const j=this._sessionById.get(R.diffId),X=this._mergeSeeds(j?.seedPatches,R.seedPatches),ee=this._computeDescriptor(R.uri,R.diffId,X,R.keptPatch,z,R.composerId);
      if(!ee||ee.changes.length===0){
        this.logService.warn("[patch-graph-v3] undo rejectChange: descriptor empty after restore");
        return
      }
      const re=j??new dvn({
        uri:R.uri,diffId:R.diffId,composerId:R.composerId,seedPatches:X
      });
      re.seedPatches=X,re.keptPatch=R.keptPatch,this._commitSessionRestore(R.composerId,R.uri,re,M)
    }, async()=>{
      const M=this._sessionById.get(R.diffId);
      if(!M)return;
      const $=(await this._getOrCreateModelRef(R.uri,R.cellId)).object.textEditorModel,H=$.getValue(),W=this.patchGraphService.clonePatch(R.rejectPatch);
      let z;
      const Y=this.patchGraphService.apply(W,ee=>{
        z=ee
      },H);
      if(z){
        this._clientDebugLog("redoRejectChangeFailed",{
          composerId:R.composerId,diffId:R.diffId,uri:R.uri.fsPath,error:z.message
        }),this._uploadClientDebugLogs(),this.logService.error("[patch-graph-v3] redo rejectChange: apply patch failed",z);
        return
      }
      const j=this.patchGraphService.splitPatch(W);
      for(const ee of j)this.patchGraphService.registerPatch(ee);
      this.nonAgentChangeTracker.updateLastKnownBaseline(R.uri,Y),this._isSelfEditing=!0;
      try{
        $.applyEdits([{
          range:$.getFullModelRange(),text:Y
        }
        ],!1)
      }
      finally{
        this._isSelfEditing=!1
      }
      await this._saveResource(R.uri,{
        skipSaveParticipants:!0,ignoreModifiedSince:!0
      });
      const X=this._getDescriptorForSession(M);
      !X||X.changes.length===0?this._teardownSession(this._findComposerUriKeyForSession(M),R.diffId):(this._refreshSessionDecorations(M),this._onDidChange.fire())
    })), this._clientDebugLog("rejectChange", {
      diffId:i.diffId,composerId:i.composerId,absStart:d,absEndExclusive:m
    }), this._trackTelemetry(MFo, i.seedPatches), this._trackAcceptRejectDiffDetails("reject", i.seedPatches, "editor"), this._emitPatchGraphDiffPartialActionEvent("reject", i, t, "editor", l);
    const N=this._getDescriptorForSession(i);
    return!N||N.changes.length===0?this._teardownSession(this._findComposerUriKeyForSession(i), i.diffId):this._refreshSessionDecorations(i), this._onDidChange.fire(), !N||N.changes.length===0
  }
  async _handleAppliedAgentEdit(e){
    if(e.length===0)return;
    const t=e[0].attribs.fileUri, i=Iu.getComparisonKey(t), r=e[0].attribs.composerMetadata?.composerId, s=e[0].attribs.composerMetadata?.rootComposerId??r, o=this._makeComposerUriKey(s, i);
    this._clientDebugLog("agentEdit", {
      composerId:r,sessionComposerId:s,uri:t.fsPath,patchCount:e.length,patchIds:e.map(a=>a.id)
    }), await this._queue.queueFor(t, async()=>{
      const a=this._sessionByComposerUri.get(o);
      let l;
      if(!a&&(l=this._tombstoneByComposerUri.get(o),l)){
        this._tombstoneByComposerUri.delete(o);
        const x=Date.now()-l.timestamp;
        x>QSn.TOMBSTONE_TTL_MS&&(this._clientDebugLog("tombstoneExpired",{
          composerId:r,uri:t.fsPath,ageMs:x,seedCount:l.seedPatches.length
        }),l=void 0)
      }
      const u=a?.seedPatches??l?.seedPatches,d=a?.diffId??l?.diffId??Wr(),m=u?[...u,...e.filter(x=>!u.some(I=>I.id===x.id))]:[...e],p=this._getCellIdFromPatches(m),g=await this._getOrCreateModelRef(t,p),f=g.object.textEditorModel.getValue(),A=a?.keptPatch??l?.keptPatch,w=this._computeDescriptor(t,d,m,A,f,s);
      if(!w||w.changes.length===0)return;
      const C=a??new dvn({
        uri:t,diffId:d,composerId:s,seedPatches:m
      });
      a?C.seedPatches=m:l&&(C.seedPatches=m,C.keptPatch=A,this._clientDebugLog("tombstoneConsumed",{
        composerId:r,diffId:d,uri:t.fsPath,tombstoneSeedCount:l.seedPatches.length,mergedSeedCount:m.length,hadKeptPatch:!!l.keptPatch,ageMs:Date.now()-l.timestamp
      })),this._tombstoneByComposerUri.delete(o),this._sessionByComposerUri.set(o,C),this._sessionById.set(d,C),this._refreshDecorationsForUri(i,g),this._onDidChange.fire(),this._emitPatchGraphDiffDisplayedEvents(e,r,t),this._clientDebugLog(a?"sessionUpdate":"sessionStart",{
        composerId:r,sessionComposerId:s,diffId:d,uri:t.fsPath,seedCount:m.length,changesCount:w.changes.length
      })
    })
  }
  _computeOriginal(e, t, i){
    const r=this.patchGraphService.queryDescendantClosure(t, [{
      fileUri:e
    }
    ]);
    let s;
    const o=this.patchGraphService.revertPatches(r, a=>{
      s=a
    }, i);
    if(s){
      this.nonAgentChangeTracker.recordExternalChanges(e,i);
      const a=this.patchGraphService.queryDescendantClosure(t,[{
        fileUri:e
      }
      ]);
      let l;
      const u=this.patchGraphService.revertPatches(a,d=>{
        l=d
      },i);
      if(l){
        const d=t[0]?.attribs.composerMetadata?.composerId;
        this._clientDebugLog("computeOriginalFailed",{
          composerId:d,uri:e.fsPath,firstError:s.message,retryError:l.message,closureSize:r.length,retryClosureSize:a.length,seedCount:t.length,currentTextLength:i.length,closurePatches:r.map(m=>this._debugSerializePatch(m)),retryClosurePatches:a.map(m=>this._debugSerializePatch(m))
        }),this._uploadClientDebugLogs(),this.logService.warn(`[patch-graph-v3] failed to compute O for uri=${e.fsPath}`);
        return
      }
      return u
    }
    return o
  }
  _computeBaseline(e, t){
    if(!t||t.hunks.length===0)return e;
    let i;
    const r=this.patchGraphService.apply(t, s=>{
      i=s
    }, e);
    return i?(this._clientDebugLog("keptPatchFailed", {
      error:i.message,keptPatchHunks:t.hunks.length,originalTextLength:e.length
    }), this._uploadClientDebugLogs(), this.logService.warn("[patch-graph-v3] failed to apply keptPatch, falling back to O"), e):r
  }
  _computeDescriptor(e, t, i, r, s, o){
    const a=this._computeOriginal(e, i, s);
    if(a===void 0)return;
    const l=this._computeBaseline(a, r), u=l.length===0?[]:Zv(l), d=s.length===0?[]:Zv(s), m=hmn(u, d, !0);
    return{
      id:t,sourceId:this.sourceId,uri:e,currentRange:{
        startLineNumber:1,endLineNumberExclusive:d.length+1
      },changes:m.changes,metadata:{
        source:gce,hideDecorations:!1,hideDeletionViewZones:!1,composerId:o
      }
    }
  }
  _teardownSession(e, t, i){
    const r=this._sessionByComposerUri.get(e);
    i&&r?(this._tombstoneByComposerUri.set(e, {
      seedPatches:r.seedPatches,keptPatch:r.keptPatch,diffId:r.diffId,timestamp:Date.now()
    }), this._clientDebugLog("tombstoneCreated", {
      composerId:r.composerId,diffId:r.diffId,seedCount:r.seedPatches.length,hadKeptPatch:!!r.keptPatch
    })):this._tombstoneByComposerUri.delete(e);
    const{
      composerId:s,uriKey:o
    }
    =this._parseComposerUriKey(e);
    if(this._clientDebugLog("sessionEnd", {
      composerId:s,diffId:t,fromRecompute:i
    }), this._sessionByComposerUri.delete(e), this._sessionById.delete(t), this._getSessionsForUri(o).length===0){
      const l=this._modelRefByUri.get(o),u=this._decorationIdsByUri.get(o);
      l&&u&&l.object.textEditorModel.deltaDecorations(u,[]),this._decorationIdsByUri.delete(o),this._modelContentListenerByUri.deleteAndDispose(o),this._modelRefByUri.deleteAndDispose(o)
    }
    else{
      const l=this._modelRefByUri.get(o);
      l&&this._refreshDecorationsForUri(o,l)
    }
    this._onDidChange.fire()
  }
  _mergeSeeds(e, t){
    return e?[...e, ...t.filter(i=>!e.some(r=>r.id===i.id))]:t
  }
  _commitSessionRestore(e, t, i, r){
    const s=Iu.getComparisonKey(t), o=this._makeComposerUriKey(e, s), a=this._sessionByComposerUri.get(o);
    a&&a.diffId!==i.diffId&&this._sessionById.delete(a.diffId), this._tombstoneByComposerUri.delete(o), this._sessionByComposerUri.set(o, i), this._sessionById.set(i.diffId, i), this._refreshDecorationsForUri(s, r), this._onDidChange.fire()
  }
  _recomputeDescriptorFromModel(e, t){
    if(this._isSelfEditing)return;
    const i=Iu.getComparisonKey(e), r=this._getSessionsForUri(i);
    if(r.length!==0){
      for(const s of r){
        const o=this._getDescriptorForSession(s);
        (!o||o.changes.length===0)&&this._teardownSession(this._findComposerUriKeyForSession(s),s.diffId,!0)
      }
      this._sweepExpiredTombstones(),this._refreshDecorationsForUri(i,t),this._onDidChange.fire()
    }
  }
  _sweepExpiredTombstones(){
    if(this._tombstoneByComposerUri.size===0)return;
    const e=Date.now();
    for(const[t, i]of this._tombstoneByComposerUri)e-i.timestamp>QSn.TOMBSTONE_TTL_MS&&this._tombstoneByComposerUri.delete(t)
  }
  async _getOrCreateModelRef(e, t){
    const i=Iu.getComparisonKey(e), r=this._getModelReferenceUri(e, t), s=this._modelRefByUri.get(i);
    if(s){
      const l=s.object.textEditorModel;
      if(!l.isDisposed()&&Iu.isEqual(l.uri,r))return s;
      this._modelContentListenerByUri.deleteAndDispose(i),this._modelRefByUri.deleteAndDispose(i)
    }
    const o=await this.textModelService.createModelReference(r);
    this._modelRefByUri.set(i, o);
    const a=o.object.textEditorModel.onDidChangeContent(l=>{
      this._shouldRecomputeDescriptorFromChangeEvent(l)&&this._recomputeDescriptorFromModel(e,o)
    });
    return this._modelContentListenerByUri.set(i, a), o
  }
  _refreshSessionDecorations(e){
    const t=Iu.getComparisonKey(e.uri), i=this._modelRefByUri.get(t);
    i&&this._refreshDecorationsForUri(t, i)
  }
  _refreshDecorationsForUri(e, t){
    const i=this._getSessionsForUri(e), r=t.object.textEditorModel;
    if(r.isDisposed())return;
    const s=this._decorationIdsByUri.get(e)??[];
    if(this.diffDecorationVisibilityService.shouldHideInlineDiffs()||i.length===0){
      r.deltaDecorations(s,[]),this._decorationIdsByUri.delete(e);
      return
    }
    const o={
      getLineMaxColumn:d=>r.getLineMaxColumn(d),getValueInRange:d=>r.getValueInRange(d)
    }, l=i.map(d=>this._getDescriptorForSession(d)).filter(d=>!!d).flatMap(d=>gJg(d, !1, {
      isThemed:!0
    }, o)), u=r.deltaDecorations(s, l);
    this._decorationIdsByUri.set(e, u)
  }
  _refreshAllDecorations(){
    const e=new Set;
    for(const[t]of this._sessionByComposerUri){
      const{
        uriKey:i
      }
      =this._parseComposerUriKey(t);
      if(e.has(i))continue;
      e.add(i);
      const r=this._modelRefByUri.get(i);
      r&&this._refreshDecorationsForUri(i,r)
    }
  }
  _closePromptBarForDiff(e){
    const t=this.cmdKStateService.getPromptBarByDiffId(e);
    if(t){
      if(t.uri){
        const i=Iu.getComparisonKey(t.uri),r=this._modelRefByUri.get(i);
        r&&t.currentRangeDecorationId&&r.object.textEditorModel.deltaDecorations([t.currentRangeDecorationId],[])
      }
      this.cmdKStateService.removePromptBar(t.id)
    }
  }
  _trackTelemetry(e, t){
    const i=new Set(t.map(r=>r.attribs.composerMetadata?.composerGenerationID).filter(Ch));
    for(const r of i)this.telemetryService.publicLogCapture(e, {
      generationUUID:r
    })
  }
  _trackAcceptRejectDiffDetails(e, t, i){
    const r=new Map;
    for(const s of t){
      const o=s.attribs.composerMetadata?.composerGenerationID,a=s.attribs.toolCallId;
      if(!o||!a)continue;
      const l=`${o}:${a}`;
      let u=r.get(l);
      u||(u={
        linesAdded:0,linesRemoved:0
      },r.set(l,u));
      for(const d of s.hunks)for(const m of d.lines)m.type==="insert"?u.linesAdded+=1:m.type==="delete"&&(u.linesRemoved+=1)
    }
    for(const[s, o]of r.entries()){
      const[a,l]=s.split(":");
      this.analyticsService.trackEvent("composer.accept_reject_diff_details",{
        chatGenerationUUID:a,toolCallId:l,acceptOrReject:e,linesAdded:o.linesAdded,linesRemoved:o.linesRemoved,sourceContext:i
      })
    }
  }
  _computeLineStatsByGeneration(e){
    const t=new Map;
    for(const i of e){
      const r=i.attribs.composerMetadata?.composerGenerationID,s=r??"__unknown_generation__";
      let o=t.get(s);
      o||(o={
        generationUUID:r,linesAdded:0,linesRemoved:0
      },t.set(s,o));
      for(const a of i.hunks)for(const l of a.lines)l.type==="insert"?o.linesAdded+=1:l.type==="delete"&&(o.linesRemoved+=1)
    }
    return Array.from(t.values()).filter(i=>i.linesAdded>0||i.linesRemoved>0)
  }
  _inferGenerationUUIDForSession(e){
    const t=new Set(e.seedPatches.map(i=>i.attribs.composerMetadata?.composerGenerationID).filter(Ch));
    if(t.size===1)return t.values().next().value
  }
  _extractPatchIdFromOwner(e){
    if(e===mpe)return;
    const t=e.split(":");
    return t.length<3?e:(t.pop(), t.pop(), t.join(":"))
  }
  _buildSeedGenerationMap(e){
    const t=new Map;
    for(const i of e.seedPatches){
      const r=i.attribs.composerMetadata?.composerGenerationID;
      r&&t.set(i.id,r)
    }
    return t
  }
  _inferGenerationUUIDForChange(e, t){
    const i=this.patchGraphService.getProvenance(e.uri);
    if(!i)return this._inferGenerationUUIDForSession(e);
    const r=t.addedRange.startLineNumber, s=t.addedRange.endLineNumberExclusive, o=r>=s, a=Math.max(r, s-1), l=i.getContributingOwnersInRange(r, a, o);
    if(l.size===0)return this._inferGenerationUUIDForSession(e);
    const u=this._buildSeedGenerationMap(e), d=new Map;
    for(const g of l){
      const f=this._extractPatchIdFromOwner(g);
      if(!f)continue;
      const A=u.get(f);
      A&&d.set(A,(d.get(A)??0)+1)
    }
    if(d.size===0)return this._inferGenerationUUIDForSession(e);
    let m, p=0;
    for(const[g, f]of d)f>p&&(m=g, p=f);
    return m
  }
  _emitPatchGraphDiffDisplayedEvents(e, t, i){
    const r=this._computeLineStatsByGeneration(e);
    for(const s of r)this.composerEventService.fireDidPatchGraphDiffDisplayed({
      composerId:t,uri:i,generationUUID:s.generationUUID,linesAdded:s.linesAdded,linesRemoved:s.linesRemoved
    })
  }
  _precomputeGenerationUUIDsForDescriptor(e, t){
    return t.changes.map(i=>this._inferGenerationUUIDForChange(e, i))
  }
  _emitPatchGraphDiffRemainingActionEvents(e, t, i, r, s){
    if(!i||i.changes.length===0)return;
    const o=new Map;
    for(let a=0;
    a<i.changes.length;
    a++){
      const l=i.changes[a],u=Math.max(0,l.addedRange.endLineNumberExclusive-l.addedRange.startLineNumber),d=l.removedTextLines.length;
      if(u===0&&d===0)continue;
      const m=s?s[a]:this._inferGenerationUUIDForChange(t,l),p=m??"__unknown_generation__";
      let g=o.get(p);
      g||(g={
        generationUUID:m,linesAdded:0,linesRemoved:0
      },o.set(p,g)),g.linesAdded+=u,g.linesRemoved+=d
    }
    for(const a of o.values()){
      if(a.linesAdded===0&&a.linesRemoved===0)continue;
      const l={
        composerId:t.composerId,uri:t.uri,generationUUID:a.generationUUID,linesAdded:a.linesAdded,linesRemoved:a.linesRemoved,sourceContext:r
      };
      e==="accept"?this.composerEventService.fireDidPatchGraphDiffAccepted(l):this.composerEventService.fireDidPatchGraphDiffRejected(l)
    }
  }
  _emitPatchGraphDiffPartialActionEvent(e, t, i, r, s){
    const o=Math.max(0, i.addedRange.endLineNumberExclusive-i.addedRange.startLineNumber), a=i.removedTextLines.length;
    if(o===0&&a===0)return;
    const l=s!==void 0?s:this._inferGenerationUUIDForChange(t, i), u={
      composerId:t.composerId,uri:t.uri,generationUUID:l,linesAdded:o,linesRemoved:a,sourceContext:r
    };
    e==="accept"?this.composerEventService.fireDidPatchGraphDiffAccepted(u):this.composerEventService.fireDidPatchGraphDiffRejected(u)
  }
  _applyVisibilityFlags(e){
    const t=this.diffDecorationVisibilityService.shouldHideInlineDiffs();
    return{
      ...e,metadata:{
        ...e.metadata,hideDecorations:t,hideDeletionViewZones:t
      }
    }
  }
  _getCellIdFromPatches(e){
    for(const t of e)if(t.attribs.cellId)return t.attribs.cellId
  }
  _getModelReferenceUri(e, t){
    if(e.scheme!==_n.vscodeNotebookCell||!t)return e;
    const i=Dg.parse(e);
    return i?this.notebookService.getNotebookTextModel(i.notebook)?.cells.find(o=>o.metadata?.id===t)?.uri??e:e
  }
  _getUndoResourceUri(e){
    return e.scheme!==_n.vscodeNotebookCell?e:Dg.parse(e)?.notebook??e
  }
  _tryCaptureNotebookCellDeletionInfo(e, t){
    if(e.scheme!==_n.vscodeNotebookCell)return;
    const i=this._getModelReferenceUri(e, t), r=Dg.parse(i);
    if(!r)return;
    const s=this.notebookService.getNotebookTextModel(r.notebook);
    if(!s)return;
    let o=-1;
    if(t?o=s.cells.findIndex(u=>u.metadata?.id===t):o=s.cells.findIndex(u=>u.handle===r.handle), o===-1)return;
    const a=s.cells[o], l={
      source:a.getValue(),language:a.language,mime:a.mime,cellKind:a.cellKind,outputs:a.outputs??[],metadata:a.metadata,internalMetadata:a.internalMetadata,collapseState:a.collapseState
    };
    return{
      notebookUri:r.notebook,cellIndex:o,cellData:l
    }
  }
  _saveResource(e, t){
    return e.scheme===_n.vscodeNotebookCell?Promise.resolve(void 0):this.textFileService.save(e, t)
  }
  _shouldRecomputeDescriptorFromChangeEvent(e){
    if(e.isFlush||e.isEolChange)return!0;
    for(const t of e.changes){
      const i=this._countLineBreaks(t.text),r=t.range.endLineNumber-t.range.startLineNumber;
      if(i!==r)return!0
    }
    return!1
  }
  _countLineBreaks(e){
    let t=0;
    for(let i=0;
    i<e.length;
    i++)e.charCodeAt(i)===10&&t++;
    return t
  }
  _clientDebugLog(e, t){
    if(!this._sentryEnabled)return;
    const i=kx().isInternalUser?JSON.stringify({
      t:new Date().toISOString(),m:e,...t
    }):`${new Date().toISOString()} ${e}`;
    this.clientDebugLogService.log(QSn.DEBUG_LOG_ID, i)
  }
  _uploadClientDebugLogs(){
    this._sentryEnabled&&(this.cursorAuthenticationService.privacyMode()||this.clientDebugLogService.upload(QSn.DEBUG_LOG_ID))
  }
  _debugSerializePatch(e){
    return{
      id:e.id,source:e.attribs.patchSource,hunkCount:e.hunks.length,hunks:e.hunks.map(t=>({
        oldStart:t.oldStart,oldCount:t.oldLineCount,newStart:t.newStart,newCount:t.newLineCount,lines:t.lines.map(i=>({
          type:i.type,content:i.content
        }))
      }))
    }
  }
  dispose(){
    for(const[e, t]of this._modelRefByUri)t.object.textEditorModel.deltaDecorations(this._decorationIdsByUri.get(e)??[], []);
    this._decorationIdsByUri.clear(), this._sessionByComposerUri.clear(), this._sessionById.clear(), this._tombstoneByComposerUri.clear(), super.dispose()
  }
}
}
}), NDa, Tmy=
// Module: out-build/vs/editor/browser/services/inlineDiffService.js
// Offset: 27537245 (bundle byte offset)
// Size: 56578 bytes

Ti(), Vs(), ml(), yn(), rt(), cu(), zr(), Yr(), Yn(), Bc(), Ht(), Ei(), Er(), Wt(), So(), Dd(), Tw(), OSt(), kr(), Pa(), VD(), _d(), ps(), _Ee(), cp(), Zk(), UF(), _g(), ph(), z0(), Ud(), Vw(), mce(), ss(), Wu(), Ff(), Ix(), tl(), ts(), td(), lv(), Oh(), dmn(), mJg(), pJg(), Fvi(), sie(), F$e(), fL=xi("inlineDiffService"), fru="inlineDiffUndoRedo", Ufa=class extends at{
  static{
    gru=this
  }
  get diffInfos(){
    return Array.from(this.diffHandlers.values()).map(e=>({
      uri:e.inlineDiff.uri,diffId:e.id,composerMetadata:e.composerMetadata
    }))
  }
  static{
    this.registeredActions=[]
  }
  static registerAction(e){
    this.registeredActions.push(e)
  }
  recordCancelEvent(e){
    this.cppEventLogger.recordCmdKEvent(e.model, {
      requestId:e.requestId,promptBarId:e.promptBarId,eventType:{
        case:"interruptGeneration",value:{
          
        }
      }
    })
  }
  recordAcceptEvent(e){
    this.cppEventLogger.recordCmdKEvent(e.model, {
      requestId:e.requestId,promptBarId:e.promptBarId,eventType:{
        case:"acceptAll",value:{
          
        }
      }
    })
  }
  recordRejectEvent(e){
    this.cppEventLogger.recordCmdKEvent(e.model, {
      requestId:e.requestId,promptBarId:e.promptBarId,eventType:{
        case:"rejectAll",value:{
          ...e.actorRequestId!==void 0?{
            actorRequestId:e.actorRequestId
          }
          :{
            
          },...e.silent!==void 0?{
            silent:e.silent
          }
          :{
            
          }
        }
      }
    })
  }
  recordAfterRejectEvent(e){
    this.cppEventLogger.recordCmdKEvent(e.model, {
      requestId:e.requestId,promptBarId:e.promptBarId,eventType:{
        case:"afterReject",value:{
          
        }
      }
    })
  }
  recordPartialAcceptEvent(e){
    this.cppEventLogger.recordCmdKEvent(e.model, {
      requestId:e.requestId,promptBarId:e.promptBarId,eventType:{
        case:"acceptPartialDiff",value:{
          greenRange:e.greenRange,redLines:e.redLines,greenLines:e.greenLines
        }
      }
    })
  }
  recordPartialRejectEvent(e){
    this.cppEventLogger.recordCmdKEvent(e.model, {
      promptBarId:e.promptBarId,requestId:e.requestId,eventType:{
        case:"rejectPartialDiff",value:{
          greenRange:e.greenRange,redLines:e.redLines,greenLines:e.greenLines
        }
      }
    })
  }
  async reportEditFate(e, t, i){
    
  }
  fireApplyDiffEdits(e){
    this._onDidApplyDiffEdits.fire(e)
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g, f, A, w, C, x, I, B, R){
    if(super(), this.textModelService=e, this.instantiationService=t, this.reactiveStorageService=i, this.undoRedoService=r, this.editorService=s, this.uriIdentityService=o, this.telemetryService=a, this.cppEventLogger=l, this.codeEditorService=u, this.textFileService=d, this.storageService=m, this.workspaceContextService=p, this.composerEventService=g, this.aiService=f, this.cmdKStateService=A, this.analyticsService=w, this.composerDataService=C, this.experimentService=x, this.notificationService=I, this.pathService=B, this.notebookService=R, this.inlineDiffs=this._register(new j_([])), this.diffHandlers=new Map, this._inlineDiffCache=new Fb(5), this._persistedDiffIds=new Set, this._dirtyDiffIds=new Set, this._onDidChangeDiffInfos=this._register(new Qe), this.onDidChangeDiffInfos=this._onDidChangeDiffInfos.event, this._onDidAcceptDiff=this._register(new Qe), this.onDidAcceptDiff=this._onDidAcceptDiff.event, this._onDidRejectDiff=this._register(new Qe), this.onDidRejectDiff=this._onDidRejectDiff.event, this._onDidAddDiff=this._register(new Qe), this.onDidAddDiff=this._onDidAddDiff.event, this._onDidRemoveDiff=this._register(new Qe), this.onDidRemoveDiff=this._onDidRemoveDiff.event, this._onDidAddDiffFromUndoRedo=this._register(new Qe), this.onDidAddDiffFromUndoRedo=this._onDidAddDiffFromUndoRedo.event, this._onDidRemoveDiffFromUndoRedo=this._register(new Qe), this.onDidRemoveDiffFromUndoRedo=this._onDidRemoveDiffFromUndoRedo.event, this._onDidAcceptPartialDiff=this._register(new Qe), this.onDidAcceptPartialDiff=this._onDidAcceptPartialDiff.event, this._onDidRejectPartialDiff=this._register(new Qe), this.onDidRejectPartialDiff=this._onDidRejectPartialDiff.event, this._onDidApplyDiffEdits=this._register(new Qe), this.onDidApplyDiffEdits=this._onDidApplyDiffEdits.event, this._userPlansDir=lV(this.pathService.userHome({
      preferLocal:!0
    })), this.experimentService.checkFeatureGate("inline_diffs_v2_adapter")){
      this.storageService.cursorDiskKVClearPrefix(this.getInlineDiffStorageKeyPrefix()).catch(N=>console.error("[inlineDiff] Error clearing stale V1 diffs:",N));
      return
    }
    for(const N of gru.registeredActions)N(this.reactiveStorageService);
    this.storageService.cursorDiskKVClearPrefix(fru).catch(N=>console.error("[inlineDiff] Error clearing undo/redo data:", N)), this._register(this.storageService.cursorDiskKVOnShouldSave(async N=>{
      await this.persistInlineDiffs()
    })), this.loadInlineDiffs().catch(N=>{
      console.error("[inlineDiff] Error loading inline diffs:",N)
    }), this._register(this.composerEventService.onToRemoveDiffs(async N=>{
      const M=this.diffInfos.filter(O=>O.uri.toString()===N.uri.toString());
      for(const O of M)this.remove(O.diffId)
    }))
  }
  getInlineDiffDiskWorkspaceStorageKey(){
    return`inlineDiffs-${this.workspaceContextService.getWorkspace()?.id||"default"}`
  }
  getInlineDiffStorageKeyPrefix(){
    return`inlineDiff:${this.workspaceContextService.getWorkspace()?.id||"default"}:`
  }
  getInlineDiffStorageKey(e){
    return`${this.getInlineDiffStorageKeyPrefix()}${e}`
  }
  updateInlineDiff(e){
    this.inlineDiffs.change([...this.inlineDiffs.value.filter(t=>t.id!==e.id), e]), e.composerMetadata!==void 0&&this._dirtyDiffIds.add(e.id)
  }
  removeInlineDiff(e){
    const t=this.inlineDiffs.value.filter(i=>i.id!==e);
    t.length!==this.inlineDiffs.value.length&&this.inlineDiffs.change(t)
  }
  updateInlineDiffProperty(e, t, i){
    const r=this.inlineDiffs.value, s=r.findIndex(o=>o.id===e);
    if(s>=0){
      const o=[...r];
      o[s]={
        ...o[s],[t]:i
      },this.inlineDiffs.change(o),o[s].composerMetadata!==void 0&&this._dirtyDiffIds.add(e)
    }
  }
  async persistInlineDiffs(){
    try{
      const e=this.inlineDiffs.value.filter(t=>t.composerMetadata!==void 0&&this._dirtyDiffIds.has(t.id));
      if(e.length===0)return;
      await Promise.allSettled(e.map(async t=>{
        const i={
          diffId:t.id,uri:t.uri,originalTextLines:t.originalTextLines,generationUUID:t.generationUUID,composerMetadata:t.composerMetadata,cellId:t.cellId,hideDecorations:t.hideDecorations
        };
        await this.storageService.cursorDiskKVSet(this.getInlineDiffStorageKey(t.id),JSON.stringify(i)),this._dirtyDiffIds.delete(t.id),this._persistedDiffIds.add(t.id)
      }))
    }
    catch(e){
      console.error("[inlineDiff] Error persisting inline diffs:",e)
    }
  }
  async loadInlineDiffs(){
    try{
      let e=[];
      const t=await this.storageService.cursorDiskKVGetPrefix(this.getInlineDiffStorageKeyPrefix());
      if(t.length>0){
        for(const[,o]of t)try{
          const a=JSON.parse(o);
          e.push(a)
        }
        catch(a){
          console.error("[inlineDiff] Error parsing stored diff:",a)
        }
        console.log(`[inlineDiff] Loaded ${e.length} diffs from per-key storage`)
      }
      else{
        const o=await this.storageService.cursorDiskKVGet(this.getInlineDiffDiskWorkspaceStorageKey());
        if(o){
          const a=JSON.parse(o);
          Array.isArray(a)&&(e=a,console.log(`[inlineDiff] Migrating ${e.length} diffs from legacy single-blob format`),await Promise.allSettled(e.map(async l=>{
            await this.storageService.cursorDiskKVSet(this.getInlineDiffStorageKey(l.diffId),JSON.stringify(l))
          })),await this.storageService.cursorDiskKVClearPrefix(this.getInlineDiffDiskWorkspaceStorageKey()),console.log("[inlineDiff] Migration complete, deleted legacy storage key"))
        }
      }
      if(e.length===0)return;
      this._persistedDiffIds=new Set(e.map(o=>o.diffId));
      const i=new Set,r=[],s=[];
      await Promise.allSettled(e.map(async o=>{
        const a=je.revive(o.uri);
        i.has(a.toString())||(i.add(a.toString()),this.textFileService.isDirty(a)||s.push(a),r.push([o,await this.textModelService.createModelReference(a,!0)]))
      }));
      for(const[o,a]of r)try{
        if(this.getHandlerByDiffId(o.diffId)){
          a.dispose();
          continue
        }
        const{
          uri:l,originalTextLines:u,generationUUID:d,composerMetadata:m,cellId:p,hideDecorations:g
        }
        =o,f=je.revive(l);
        let A,w=[];
        try{
          const R=a.object.textEditorModel;
          if(w=R.getLinesContent(),cg(w,u)){
            this._persistedDiffIds.delete(o.diffId),this.storageService.cursorDiskKVClearPrefix(this.getInlineDiffStorageKey(o.diffId)).catch(M=>{
              console.error("[inlineDiff] Error deleting storage key for stale diff:",M)
            }),a.dispose();
            continue
          }
          g||R.setValue(u.join(`
`)),A={
            startLineNumber:1,endLineNumberExclusive:(g?w.length:R.getLineCount())+1
          }
        }
        catch{
          console.log("[inlineDiff] File no longer exists, skipping diff restoration:",f.toString()),a.dispose();
          continue
        }
        const C=m.codeblockId!==void 0||m.toolCallId!==void 0,x=m.composerId!==void 0&&C&&m.composerGenerationID!==void 0,I={
          id:o.diffId,uri:f,generationUUID:d,currentRange:A,originalTextLines:u,prompt:"",attachedToPromptBar:!1,source:gce,createdAt:Date.now(),hideDeletionViewZones:g??!1,hideDecorations:g,composerMetadata:x?{
            composerId:m.composerId,codeblockId:m.codeblockId,toolCallId:m.toolCallId,composerGenerationID:m.composerGenerationID
          }
          :void 0,cellId:p
        };
        let B;
        g?(a.dispose(),B=await this.addDecorationsOnlyDiff({
          ...I,newTextLines:w
        })):(B=this.addActiveDiff(I,a),this.addLinesToDiff(B.id,w),this.finishDiffSuccess(B.id)),this._dirtyDiffIds.delete(B.id),console.log(`[inlineDiff] Restored diff ${B.id} for ${f.toString()}`)
      }
      catch(l){
        console.error("[inlineDiff] Error loading individual diff:",l)
      }
      await Promise.allSettled(s.map(o=>this.textFileService.save(o,{
        reason:1,skipSaveParticipants:!0,force:!0,ignoreModifiedSince:!0
      }))),this.autoAcceptStalePlanFileDiffs()
    }
    catch(e){
      console.error("[inlineDiff] Error loading inline diffs from storage:",e)
    }
  }
  autoAcceptStalePlanFileDiffs(){
    const e=this.inlineDiffs.value.filter(t=>Rq(t.uri, this._userPlansDir));
    for(const t of e)console.log(`[inlineDiff] Auto-accepting stale plan file diff: ${t.uri.toString()}`), this.acceptDiff(t.id)
  }
  getHandlerByDiffId(e){
    return this.diffHandlers.get(e)
  }
  revealDiff(e){
    const t=this.diffHandlers.get(e);
    if(!t)return;
    const i=this.editorService.activeEditorPane;
    if(i===void 0)return;
    const r=i.getControl();
    r!==void 0&&Ig(r)&&this.uriIdentityService.extUri.isEqual(r.getModel()?.uri, t.inlineDiff.uri)&&r.revealRangeInCenter({
      startLineNumber:t.inlineDiff.currentRange.startLineNumber,startColumn:1,endLineNumber:t.inlineDiff.currentRange.endLineNumberExclusive,endColumn:1
    })
  }
  _remove(e){
    const t=this.cmdKStateService.getPromptBarByDiffId(e.id);
    t&&this.cmdKStateService.updatePromptBar(t.id, "diffId", void 0);
    const i=e.id, r=e.inlineDiff.uri, s=e.composerMetadata;
    this.diffHandlers.delete(i), e.remove(), this.removeInlineDiff(i), this._dirtyDiffIds.delete(i), this._persistedDiffIds.has(i)&&(this._persistedDiffIds.delete(i), this.storageService.cursorDiskKVClearPrefix(this.getInlineDiffStorageKey(i)).catch(o=>{
      console.error("[inlineDiff] Error deleting storage key for diff:",o)
    })), this._onDidRemoveDiff.fire({
      diffInfo:{
        uri:r,diffId:i,composerMetadata:s
      }
    }), this._onDidChangeDiffInfos.fire()
  }
  getStoredInlineDiff(e){
    if(this._inlineDiffCache.has(e)){
      const t=this._inlineDiffCache.get(e);
      if(t)return Promise.resolve(dhe(t))
    }
    return this.storageService.cursorDiskKVGet(e).then(t=>{
      if(t){
        const i=K2A(JSON.parse(t));
        return this._inlineDiffCache.set(e,i),i
      }
    })
  }
  setStoredInlineDiff(e, t){
    return t?(this._inlineDiffCache.set(e, dhe(t)), this.storageService.cursorDiskKVSet(e, JSON.stringify(t))):(this._inlineDiffCache.delete(e), this.storageService.cursorDiskKVClearPrefix(e))
  }
  getUndoResourceForInlineDiff(e){
    return e.uri.scheme!==_n.vscodeNotebookCell?e.uri:Dg.parse(e.uri)?.notebook??e.uri
  }
  tryResolveNotebookCellUriByCellId(e){
    if(e.uri.scheme!==_n.vscodeNotebookCell||!e.cellId)return;
    const t=Dg.parse(e.uri);
    if(!t)return;
    const i=this.notebookService.getNotebookTextModel(t.notebook);
    return i?i.cells.find(s=>s.metadata?.id===e.cellId)?.uri:void 0
  }
  getModelReferenceUri(e){
    return this.tryResolveNotebookCellUriByCellId(e)??e.uri
  }
  tryCaptureNotebookCellDeletionInfo(e){
    if(e.uri.scheme!==_n.vscodeNotebookCell)return;
    const t=Dg.parse(e.uri);
    if(!t)return;
    const i=this.notebookService.getNotebookTextModel(t.notebook);
    if(!i)return;
    const r=i.cells.findIndex(a=>a.handle===t.handle);
    if(r===-1)return;
    const s=i.cells[r], o={
      source:s.getValue(),language:s.language,mime:s.mime,cellKind:s.cellKind,outputs:s.outputs??[],metadata:s.metadata,internalMetadata:s.internalMetadata,collapseState:s.collapseState
    };
    return{
      notebookUri:t.notebook,cellIndex:r,cellData:o
    }
  }
  remove(e, t){
    const i=this.diffHandlers.get(e);
    if(!i)return;
    let r;
    const s=t?.shouldStorePrevState!==!1&&!i.inlineDiff.hideDecorations;
    let o;
    s&&(o=fJg(e), this.setStoredInlineDiff(o, i.inlineDiff).catch(g=>{
      console.error("[inlineDiff] Error storing undo data:",g)
    }));
    const a=i.inlineDiff.uri, l=this.getUndoResourceForInlineDiff(i.inlineDiff), u=i.promptBarId, d=i.composerMetadata?{
      ...i.composerMetadata
    }
    :void 0, m=bvA(i.inlineDiff), p=new XZ("Undo Remove Diff", "undo-remove-diff", e, l, async()=>{
      let g;
      try{
        let f;
        const A=this.getModelReferenceUri(i.inlineDiff);
        if(g=await this.textModelService.createModelReference(A),s&&o){
          const w=await this.getStoredInlineDiff(o);
          if(w)f={
            ...w,id:e,uri:g.object.textEditorModel.uri
          };
          else throw new Error("[inlineDiff] No stored data found for create diff undo")
        }
        else f={
          ...m,id:e,uri:g.object.textEditorModel.uri,originalTextLines:g.object.textEditorModel.getLinesContent().slice(m.currentRange.startLineNumber-1,m.currentRange.endLineNumberExclusive-1),newTextLines:g.object.textEditorModel.getLinesContent().slice(m.currentRange.startLineNumber-1,m.currentRange.endLineNumberExclusive-1),changes:[],onAccept:void 0,onReject:void 0
        };
        if(!f)throw new Error("[inlineDiff] No revived diff found for create diff undo");
        r=this.instantiationService.createInstance(bye,g,f,u),this.diffHandlers.set(e,r),this._onDidChangeDiffInfos.fire(),this._onDidAddDiffFromUndoRedo.fire({
          uri:f.uri,diffId:e,composerMetadata:d
        })
      }
      catch(f){
        console.error("[inlineDiff] Error retrieving undo data:",f)
      }
      finally{
        g?.dispose(),s&&o&&this.setStoredInlineDiff(o,void 0).catch(f=>console.error("[inlineDiff] Error cleaning up undo data:",f))
      }
    }, async()=>{
      try{
        const g=this.diffHandlers.get(e);
        if(!g)return;
        s&&o&&this.setStoredInlineDiff(o,g.inlineDiff),this.cancelInUndo(e),this._remove(g),this._onDidRemoveDiffFromUndoRedo.fire({
          diffInfo:{
            uri:g.inlineDiff.uri,diffId:e,composerMetadata:g.composerMetadata
          },accepted:t?.accepted??!1
        })
      }
      catch(g){
        console.error("[inlineDiff] Error in redo operation:",g)
      }
    });
    this.pushUndoElement(p, {
      
    }), (t?.closePromptBar??!1)&&i.promptBarId&&this._getPromptBar(i.promptBarId)?.diffId===e&&this._hidePromptBar(i.promptBarId), this._remove(i)
  }
  _getPromptBar(e){
    return a5c(this.cmdKStateService.getPromptBar(e))
  }
  _hidePromptBar(e){
    const t=this._getPromptBar(e);
    if(t?.uri===void 0)return;
    this.cmdKStateService.removePromptBar(e);
    const i={
      current:void 0
    };
    let r;
    if(this.textModelService.createModelReference(t.uri).then(s=>{
      i.current=this.getPromptBarCurrentRange(t,s.object.textEditorModel);
      const o=t.currentRangeDecorationId;
      o&&s.object.textEditorModel.deltaDecorations([o],[])
    }).finally(()=>{
      r?.dispose()
    }), t?.diffId===void 0){
      let s;
      this.textModelService.createModelReference(t.uri).then(o=>{
        if(s=o,t.modifyTextModelPrePromptBarBackwardEdit.length>0){
          const a=this.getPromptBarCurrentRange(t,o.object.textEditorModel);
          t.prePromptBarCursorPosition&&a&&pru(this.codeEditorService,{
            startLineNumber:a.startLineNumber,endLineNumber:a.endLineNumberExclusive-1,startColumn:1,endColumn:1
          },o.object.textEditorModel.uri,t.prePromptBarCursorPosition),Ovi(o.object.textEditorModel,t.modifyTextModelPrePromptBarBackwardEdit)
        }
      }).finally(()=>{
        s?.dispose()
      }),this.undoRedoService.pushElement(new pce("Undo Close Prompt Bar","undo-close-prompt-bar",t?.uri,async()=>{
        let o;
        try{
          o=await this.textModelService.createModelReference(t.uri),t.modifyTextModelPrePromptBarForwardEdit.length>0&&Ovi(o.object.textEditorModel,t.modifyTextModelPrePromptBarForwardEdit);
          const a=o.object.textEditorModel.deltaDecorations([],[{
            range:{
              startLineNumber:i.current?.startLineNumber??1,endLineNumber:(i.current?.endLineNumberExclusive??2)-1,startColumn:1,endColumn:o.object.textEditorModel.getLineMaxColumn((i.current?.endLineNumberExclusive??2)-1)
            },options:{
              description:"promptBar-tracking-range",isWholeLine:!0
            }
          }
          ])[0];
          Gw(()=>{
            this.cmdKStateService.updatePromptBar(t.id,"currentRangeDecorationId",a)
          })
        }
        finally{
          o?.dispose()
        }
      },async()=>{
        let o;
        try{
          o=await this.textModelService.createModelReference(t.uri),i.current=this.getPromptBarCurrentRange(t,o.object.textEditorModel);
          const a=t.currentRangeDecorationId;
          if(a&&o.object.textEditorModel.deltaDecorations([a],[]),this.cmdKStateService.removePromptBar(t.id),t.modifyTextModelPrePromptBarBackwardEdit.length>0){
            const l=this.getPromptBarCurrentRange(t,o.object.textEditorModel);
            t.prePromptBarCursorPosition&&l&&pru(this.codeEditorService,{
              startLineNumber:l.startLineNumber,endLineNumber:l.endLineNumberExclusive-1,startColumn:1,endColumn:1
            },o.object.textEditorModel.uri,t.prePromptBarCursorPosition),Ovi(o.object.textEditorModel,t.modifyTextModelPrePromptBarBackwardEdit)
          }
        }
        finally{
          o?.dispose()
        }
      }))
    }
    else{
      const s=new XZ("Undo Close Prompt Bar","undo-close-prompt-bar",t.diffId,t.uri,async()=>{
        let o;
        try{
          o=await this.textModelService.createModelReference(t.uri);
          const a=o.object.textEditorModel.deltaDecorations([],[{
            range:{
              startLineNumber:i.current?.startLineNumber??1,endLineNumber:(i.current?.endLineNumberExclusive??2)-1,startColumn:1,endColumn:o.object.textEditorModel.getLineMaxColumn((i.current?.endLineNumberExclusive??2)-1)
            },options:{
              description:"promptBar-tracking-range",isWholeLine:!0
            }
          }
          ])[0];
          Gw(()=>{
            this.cmdKStateService.updatePromptBar(t.id,"currentRangeDecorationId",a)
          })
        }
        finally{
          o?.dispose()
        }
      },async()=>{
        let o;
        try{
          o=await this.textModelService.createModelReference(t.uri),i.current=this.getPromptBarCurrentRange(t,o.object.textEditorModel);
          const a=t.currentRangeDecorationId;
          a&&o.object.textEditorModel.deltaDecorations([a],[]),this.cmdKStateService.removePromptBar(t.id)
        }
        finally{
          o?.dispose()
        }
      });
      this.pushUndoElement(s,{
        
      })
    }
  }
  hidePromptBar(e){
    this._hidePromptBar(e)
  }
  addActiveDiff(e, t, i){
    const r=(l, u, d, m)=>`${l.toString()}|${u}|${d}|${m}`, s=r(e.uri, e.currentRange.startLineNumber, e.currentRange.endLineNumberExclusive, e.composerMetadata?.composerId??"non-composer"), o=[...this.inlineDiffs.value];
    for(const l of o)if(r(l.uri, l.currentRange.startLineNumber, l.currentRange.endLineNumberExclusive, l.composerMetadata?.composerId??"non-composer")===s){
      const d=this.getHandlerByDiffId(l.id);
      d?this._remove(d):this.removeInlineDiff(l.id)
    }
    const a=this.addDiff(e, t, i);
    return a.activate(), a
  }
  addDiff(e, t, i){
    const r=this.instantiationService.createInstance(bye, t, e, i);
    this.diffHandlers.set(r.id, r), this._onDidChangeDiffInfos.fire();
    const s=r.id;
    e.composerMetadata!==void 0&&this._dirtyDiffIds.add(s);
    const o={
      uri:e.uri,diffId:s,composerMetadata:e.composerMetadata
    };
    this._onDidAddDiff.fire(o);
    let a, l=!1, u=i?this._getPromptBar(i):void 0;
    const d=fJg(s), m=new XZ("Undo Create Diff", "undo-create-diff", s, t.object.textEditorModel.uri, async()=>{
      try{
        const p=this.diffHandlers.get(s);
        if(!p)return;
        await this.setStoredInlineDiff(d,p.inlineDiff).catch(g=>console.error("[inlineDiff] Error storing undo data:",g)),this.cancelInUndo(s),u=i?this._getPromptBar(i):void 0,u?.diffId===p.id&&(l=!0),this._remove(p),this._onDidRemoveDiffFromUndoRedo.fire({
          diffInfo:{
            uri:e.uri,diffId:s,composerMetadata:p.composerMetadata
          },accepted:!1
        })
      }
      catch(p){
        console.error("[inlineDiff] Error retrieving undo data:",p)
      }
    }, async()=>{
      try{
        const p=await this.getStoredInlineDiff(d);
        if(p){
          const g=await this.textModelService.createModelReference(e.uri);
          a=this.instantiationService.createInstance(bye,g,{
            ...p,id:s
          },i),this.diffHandlers.set(s,a),this._onDidChangeDiffInfos.fire(),this._onDidAddDiffFromUndoRedo.fire({
            uri:e.uri,diffId:s,composerMetadata:a.composerMetadata
          }),l&&u&&this.cmdKStateService.replacePromptBar(u)
        }
        else console.error("[inlineDiff] No stored data found for create diff redo")
      }
      catch(p){
        console.error("[inlineDiff] Error in redo operation:",p)
      }
      finally{
        this.setStoredInlineDiff(d,void 0).catch(p=>console.error("[inlineDiff] Error cleaning up redo data:",p))
      }
    });
    return this.pushUndoElement(m, {
      
    }), r
  }
  cancelDiff(e){
    const t=this.diffHandlers.get(e);
    if(!t){
      this.removeInlineDiff(e);
      return
    }
    t.cancel(), t.finishFailure()
  }
  setDiff(e, t){
    const i=this.diffHandlers.get(e);
    i&&i.setDiff(t)
  }
  cancelInUndo(e){
    const t=this.diffHandlers.get(e);
    t&&t.cancelInUndo()
  }
  findClosestChange(e, t){
    const i=this.diffHandlers.get(e);
    if(i&&i instanceof bye)return i.findClosestChange(t)
  }
  acceptPartialDiff(e, t){
    const i=this.diffHandlers.get(e);
    if(!i)return!1;
    this.telemetryService.publicLogCapture("inlineDiffAcceptPartial", {
      generationUUID:i.inlineDiff.generationUUID
    });
    const r=this.getUndoResourceForInlineDiff(i.inlineDiff);
    this.pushUndoElement(new XZ("Undo Accept Partial Diff", "undo-accept-partial-diff", e, r, ()=>{
      
    }, ()=>{
      
    }), {
      breakConsolidation:!0
    });
    let s=[], o=[];
    if(i instanceof bye){
      const l=i.findClosestChange(t);
      s=i.inlineDiff.newTextLines.slice(l.addedRange.startLineNumber-1,l.addedRange.endLineNumberExclusive-1),o=[...l.removedTextLines]
    }
    const a=i.acceptPartialDiff(t);
    return this._onDidAcceptPartialDiff.fire({
      inlineDiff:i.inlineDiff,requestId:i.inlineDiff.generationUUID,file:i.inlineDiff.uri.toString(),previousContent:o.join(`
`),updatedContent:s.join(`
`),source:rO.COMPOSER,range:{
        startLineNumber:i.inlineDiff.currentRange.startLineNumber,endLineNumber:i.inlineDiff.currentRange.endLineNumberExclusive,startColumn:0,endColumn:-1
      },diffInfo:{
        diffId:e,uri:i.inlineDiff.uri,composerMetadata:i.composerMetadata
      },isDone:a,change:{
        accepted:s,rejected:o
      }
    }), a&&this.remove(e, {
      closePromptBar:!0,accepted:!0,shouldStorePrevState:!1
    }), a
  }
  rejectPartialDiff(e, t){
    const i=this.diffHandlers.get(e);
    if(!i)return!1;
    this.telemetryService.publicLogCapture("inlineDiffRejectPartial", {
      generationUUID:i.inlineDiff.generationUUID
    });
    const r=this.getUndoResourceForInlineDiff(i.inlineDiff);
    this.pushUndoElement(new XZ("Undo Reject Partial Diff", "undo-reject-partial-diff", e, r, ()=>{
      
    }, ()=>{
      
    }), {
      breakConsolidation:!0
    });
    let s=[], o=[];
    if(i instanceof bye){
      const l=i.findClosestChange(t);
      o=i.inlineDiff.newTextLines.slice(l.addedRange.startLineNumber-1,l.addedRange.endLineNumberExclusive-1),s=[...l.removedTextLines]
    }
    const a=i.rejectPartialDiff(t);
    return a&&this.remove(e, {
      accepted:!1,shouldStorePrevState:!1
    }), this._onDidRejectPartialDiff.fire({
      diffInfo:{
        diffId:e,uri:i.inlineDiff.uri,composerMetadata:i.composerMetadata
      },isDone:a,change:{
        accepted:s,rejected:o
      },inlineDiff:i.inlineDiff
    }), a
  }
  acceptDiff(e, t){
    const i=this.diffHandlers.get(e);
    if(!i)return;
    this.telemetryService.publicLogCapture(NFo, {
      generationUUID:i.inlineDiff.generationUUID
    });
    const r=this.getUndoResourceForInlineDiff(i.inlineDiff);
    this.pushUndoElement(new XZ("Undo Accept Diff", "undo-accept-diff", e, r, ()=>{
      
    }, ()=>{
      
    }), {
      breakConsolidation:t?.dontBreakConsolidation!==void 0?!t.dontBreakConsolidation:!0
    });
    let s=[], o=[];
    const a=[];
    i instanceof bye&&(i.inlineDiff.changes.forEach(l=>{
      const u=i.inlineDiff.newTextLines.slice(l.addedRange.startLineNumber-1,l.addedRange.endLineNumberExclusive-1),d=i.inlineDiff.originalTextLines.slice(l.removedLinesOriginalRange.startLineNumber-1,l.removedLinesOriginalRange.endLineNumberExclusive-1);
      s.push(...u),o.push(...d),a.push({
        removedLines:d,removedRange:{
          startLineNumber:l.removedLinesOriginalRange.startLineNumber,endLineNumberExclusive:l.removedLinesOriginalRange.endLineNumberExclusive
        },addedLines:u,addedRange:{
          startLineNumber:l.addedRange.startLineNumber,endLineNumberExclusive:l.addedRange.endLineNumberExclusive
        },fate:"accepted"
      })
    }), this.trackAcceptRejectDiffDetails("accept", i.inlineDiff.changes??[], t?.sourceContext??"editor")), i.accept(), this._onDidAcceptDiff.fire({
      requestId:i.inlineDiff.generationUUID,diffId:e,uri:i.inlineDiff.uri,inlineDiff:i.inlineDiff,composerMetadata:i.composerMetadata,change:{
        accepted:s,rejected:o
      },previousContent:o.join(`
`),updatedContent:s.join(`
`),source:rO.COMPOSER,file:i.inlineDiff.uri.toString(),range:{
        startLineNumber:i.inlineDiff.currentRange.startLineNumber,endLineNumber:i.inlineDiff.currentRange.endLineNumberExclusive,startColumn:0,endColumn:-1
      },sourceContext:t?.sourceContext||"editor",partialInlineDiffFates:a
    }), this.remove(e, {
      closePromptBar:!0,accepted:!0
    })
  }
  rejectDiff(e, t, i){
    const r=this.diffHandlers.get(e);
    if(!r){
      this.removeInlineDiff(e);
      return
    }
    t?.rejectSilently!==!0&&this.telemetryService.publicLogCapture(MFo, {
      generationUUID:r.inlineDiff.generationUUID
    });
    const s=this.getUndoResourceForInlineDiff(r.inlineDiff);
    this.pushUndoElement(new XZ("Undo Reject Diff", "undo-reject-diff", e, s, ()=>{
      
    }, ()=>{
      
    }), {
      breakConsolidation:t?.dontBreakConsolidation!==void 0?!t.dontBreakConsolidation:!0
    });
    const o=[];
    r instanceof bye&&(r.inlineDiff.changes.forEach(l=>{
      const u=r.inlineDiff.newTextLines.slice(l.addedRange.startLineNumber-1,l.addedRange.endLineNumberExclusive-1),d=r.inlineDiff.originalTextLines.slice(l.removedLinesOriginalRange.startLineNumber-1,l.removedLinesOriginalRange.endLineNumberExclusive-1);
      o.push({
        removedLines:d,removedRange:{
          startLineNumber:l.removedLinesOriginalRange.startLineNumber,endLineNumberExclusive:l.removedLinesOriginalRange.endLineNumberExclusive
        },addedLines:u,addedRange:{
          startLineNumber:l.addedRange.startLineNumber,endLineNumberExclusive:l.addedRange.endLineNumberExclusive
        },fate:"rejected"
      })
    }), this.trackAcceptRejectDiffDetails("reject", r.inlineDiff.changes??[], t?.sourceContext??"editor")), r.reject({
      rejectSilently:t?.rejectSilently
    }, i), r.callRejectCallback(), t?.rejectSilently||this._onDidRejectDiff.fire({
      diffId:e,uri:r.inlineDiff.uri,composerMetadata:r.composerMetadata,inlineDiff:r.inlineDiff,sourceContext:t?.sourceContext||"editor",partialInlineDiffFates:o
    });
    const a=r.inlineDiff.isNewlyCreatedCell===!0?this.tryCaptureNotebookCellDeletionInfo(r.inlineDiff):void 0;
    if(this.remove(e, {
      closePromptBar:t?.close&&t?.rejectSilently!==!0,accepted:!1,shouldStorePrevState:!1
    }), a){
      const l=this.notebookService.getNotebookTextModel(a.notebookUri);
      l&&(l.applyEdits([{
        editType:1,index:a.cellIndex,count:1,cells:[]
      }
      ],!0,void 0,()=>{
        
      },void 0,!1),this.pushUndoElement(new XZ("Undo Delete Notebook Cell","undo-delete-notebook-cell",e,s,()=>{
        this.notebookService.getNotebookTextModel(a.notebookUri)?.applyEdits([{
          editType:1,index:a.cellIndex,count:0,cells:[a.cellData]
        }
        ],!0,void 0,()=>{
          
        },void 0,!1)
      },()=>{
        this.notebookService.getNotebookTextModel(a.notebookUri)?.applyEdits([{
          editType:1,index:a.cellIndex,count:1,cells:[]
        }
        ],!0,void 0,()=>{
          
        },void 0,!1)
      }),{
        
      }))
    }
  }
  trackAcceptRejectDiffDetails(e, t, i){
    const r=new Map, s=(a, l)=>`${a}:${l}`, o=(a, l)=>{
      const u=s(a,l);
      return r.has(u)||r.set(u,{
        linesAdded:0,linesRemoved:0
      }),r.get(u)
    };
    for(const a of t){
      for(const l of a.addedLinesMetaData??[])if(l.composerGenerationID&&l.toolCallID){
        const u=o(l.composerGenerationID,l.toolCallID);
        u.linesAdded+=1
      }
      for(const l of a.removedLinesMetaData??[])if(l.composerGenerationID&&l.toolCallID){
        const u=o(l.composerGenerationID,l.toolCallID);
        u.linesRemoved+=1
      }
    }
    for(const[a, l]of r.entries()){
      const[u,d]=a.split(":");
      this.analyticsService.trackEvent("composer.accept_reject_diff_details",{
        chatGenerationUUID:u,toolCallId:d,acceptOrReject:e,linesAdded:l.linesAdded,linesRemoved:l.linesRemoved,sourceContext:i
      })
    }
  }
  finishDiffSuccess(e){
    const t=this.diffHandlers.get(e);
    t&&t.finishSuccess()
  }
  addLineToDiff(e, t){
    this.addLinesToDiff(e, [t])
  }
  addLinesToDiff(e, t){
    const i=this.diffHandlers.get(e);
    i&&i.addLinesToDiff(t)
  }
  async streamDiff({
    uri:e, originalLineRange:t, hideDeletionViewZones:i, generationUUID:r, streamingLines:s, originalTextLines:o, originalLineTokens:a, extraContextLinesAbove:l, extraContextLinesBelow:u, prompt:d, diffIdCallback:m, doneCallback:p, cancelGenerationWithNoChangesCallback:g, rejectCallback:f, promptBarId:A, composerId:w
  }){
    const C={
      uri:e,generationUUID:r,currentRange:t,originalTextLines:o,originalLineTokens:a,prompt:d,hideDeletionViewZones:i,attachedToPromptBar:m!==void 0,extraContextLinesAbove:l,extraContextLinesBelow:u,composerId:w
    }, x=await this.textModelService.createModelReference(e, !0), I=this.addDiff(C, x, A);
    I.activate(p, g, f), m!==void 0&&m(I.id);
    let B=!1, R=[];
    try{
      for await(const N of s)I.addLinesToDiff([N]),R.push(N)
    }
    catch{
      B=!0
    }
    if(!B&&A&&m){
      const N=e.path.split("/").pop()??"",M=N.includes(".")?N.split(".").pop()??"":"";
      let O=0,$=0;
      const H=I.inlineDiff.changes??[];
      for(const Y of H)O+=Y.addedRange.endLineNumberExclusive-Y.addedRange.startLineNumber,$+=Y.removedTextLines.length;
      const z=(w?this.composerDataService?.getComposerDataIfLoaded(w):void 0)?.modelConfig?.modelName??this.aiService.getModelDetails({
        specificModelField:"cmd-k"
      })?.modelName;
      this.analyticsService.trackEvent("cmdk.diff_displayed",{
        composerRequestID:r,composerId:w,fileExtension:M,promptBarID:A,linesAdded:O,linesRemoved:$,model:z
      })
    }
    B?I.finishFailure():I.finishSuccess()
  }
  pushUndoElement(e, t){
    if(t.breakConsolidation===!0){
      this.undoRedoService.pushElement(e);
      return
    }
    const i=this.undoRedoService.getLastElement(e.resource);
    i instanceof XZ?i.push(e):this.undoRedoService.pushElement(e)
  }
  dispose(){
    super.dispose();
    for(const e of this.diffHandlers.values())e.dispose();
    this.diffHandlers.clear(), this._onDidChangeDiffInfos.fire()
  }
  updateComposerMetadata(e, t){
    this.updateInlineDiffProperty(e, "composerMetadata", t);
    const i=this.diffHandlers.get(e);
    i&&(i.composerMetadata=t)
  }
  firePartialDiffCompletionEvent(e){
    this._onDidAcceptDiff.fire(e)
  }
  async addDecorationsOnlyDiff(e){
    const t=await this.textModelService.createModelReference(e.uri), i=this.inlineDiffs.value.find(a=>a.uri.toString()===e.uri.toString());
    i&&this.remove(i.id);
    const r=this.instantiationService.createInstance(bye, t, e, void 0);
    this.diffHandlers.set(r.id, r), e.composerMetadata!==void 0&&this._dirtyDiffIds.add(r.id);
    const s=r.getDiffState(!0, e.composerMetadata?.composerGenerationID, e.toolCallId);
    r.inlineDiff.changes=s.changes, r.inlineDiff.activeLine=s.activeLine, r.inlineDiff.pendingRange=s.pendingRange, this.updateInlineDiff(dhe(r.inlineDiff)), r.computeDecorations(), this._onDidChangeDiffInfos.fire(), e.composerMetadata&&this.updateComposerMetadata(r.id, e.composerMetadata);
    const o={
      uri:e.uri,diffId:r.id,composerMetadata:e.composerMetadata
    };
    return this._onDidAddDiff.fire(o), r
  }
  getPromptBarCurrentRange(e, t){
    if(e===void 0)return;
    const i=this.inlineDiffs.value.find(s=>s.id===e.diffId);
    if(i!==void 0)if(t){
      const s=t.getLineCount();
      if(!(i.currentRange.startLineNumber===1&&i.currentRange.endLineNumberExclusive===s+1))return i.currentRange
    }
    else return i.currentRange;
    const r=t?.getDecorationRange(e.currentRangeDecorationId);
    if(r)return{
      startLineNumber:r.startLineNumber,endLineNumberExclusive:r.endLineNumber+1
    }
  }
}, Ufa=gru=__decorate([__param(0, El), __param(1, ln), __param(2, ku), __param(3, qB), __param(4, yi), __param(5, xl), __param(6, ea), __param(7, dce), __param(8, fl), __param(9, Gg), __param(10, Hi), __param(11, Lr), __param(12, BA), __param(13, Jv), __param(14, I2), __param(15, uh), __param(16, Oa), __param(17, Tl), __param(18, ms), __param(19, kp), __param(20, JA)], Ufa), Vi(fL, Ufa, 1), bru=(n, e)=>({
  startLineNumber:Math.max(n.startLineNumber, e.startLineNumber), endLineNumberExclusive:Math.min(n.endLineNumberExclusive, e.endLineNumberExclusive)
}), bye=class extends at{
  getChangeHash(e){
    return`${e.removedLinesOriginalRange.startLineNumber}-${e.removedLinesOriginalRange.endLineNumberExclusive}-${e.addedRange.startLineNumber}-${e.addedRange.endLineNumberExclusive}`
  }
  getUndoResourceForUri(e){
    return e.scheme!==_n.vscodeNotebookCell?e:Dg.parse(e)?.notebook??e
  }
  get id(){
    return this.inlineDiff.id
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g, f, A){
    super(), this.inlineDiffService=r, this.undoRedoService=s, this.configurationService=o, this.notebookService=a, this.cppService=l, this.aiService=u, this.cmdKStateService=d, this.experimentService=m, this.composerDataService=p, this.notificationService=g, this.diffDecorationVisibilityService=f, this.diffChangeSourceRegistry=A, this.cachedDecorationIDs=[], this.hasShownThresholdNotification=!1, this.numAcceptedPartialDiffs=0, this.numRejectedPartialDiffs=0, this.changeFates=new Map, this.active=!1, this.lastEdits=[], this.agentEditedTextLines=void 0, this.modelRef=e, this._register(this.diffDecorationVisibilityService.onDidChangeGlobal(()=>{
      this.computeDecorations()
    })), this.promptBarId=i, this.composerMetadata=t.composerMetadata, this.toolCallId=t.toolCallId;
    let w=t.cellId;
    if(!w&&t.uri.scheme===_n.vscodeNotebookCell){
      const x=Dg.parse(t.uri);
      if(x){
        const I=this.notebookService.getNotebookTextModel(x.notebook);
        if(I){
          const B=I.cells.find(R=>R.handle===x.handle);
          B&&B.metadata&&"id"in B.metadata&&typeof B.metadata.id=="string"&&(w=B.metadata.id)
        }
      }
    }
    this.inlineDiff={
      id:Wr(),changes:[],activeLine:void 0,pendingRange:{
        startLineNumber:1,endLineNumberExclusive:t.currentRange.endLineNumberExclusive-t.currentRange.startLineNumber+1
      },newTextLines:t.newTextLines??[],onAccept:void 0,onReject:void 0,canUndoUpdates:!0,showNativeAcceptReject:!1,cellId:w,...t
    };
    const C=o.onDidChangeConfiguration(x=>{
      x.affectsConfiguration(NBe)&&this.computeDecorations()
    });
    if(this._register(C), t.attachedToPromptBar){
      const x=t.lastPromptBarCurrentRange??{
        startLineNumber:t.currentRange.startLineNumber,endLineNumberExclusive:t.currentRange.endLineNumberExclusive
      },I=this.modelRef.object.textEditorModel.deltaDecorations([],[{
        range:{
          startLineNumber:x.startLineNumber,endLineNumber:x.endLineNumberExclusive-1,startColumn:1,endColumn:this.modelRef.object.textEditorModel.getLineMaxColumn(x.endLineNumberExclusive-1)
        },options:{
          description:"promptBar-tracking-range",isWholeLine:!0
        }
      }
      ])[0];
      i&&(this.cmdKStateService.updatePromptBar(i,"diffId",this.inlineDiff.id),this.cmdKStateService.updatePromptBar(i,"currentRangeDecorationId",I))
    }
    this._register(e.object.textEditorModel.onDidChangeContent(x=>{
      for(const I of x.changes)switch(Y2A(this.inlineDiff.currentRange,I.range)){
        case Ztt.After:{
          if(this.inlineDiff.changes.length>0){
            const R=this.inlineDiff.changes[this.inlineDiff.changes.length-1];
            if(this.inlineDiff.currentRange.startLineNumber+R.addedRange.endLineNumberExclusive-1===I.range.startLineNumber&&(R.removedTextLines.join(x.eol)===I.text||R.removedTextLines.join(x.eol)+x.eol===I.text)&&I.range.startColumn===1&&I.range.startLineNumber===this.inlineDiff.currentRange.endLineNumberExclusive){
              for(const N of R.removedTextLines)this.inlineDiff.newTextLines.push(N);
              this.inlineDiff.currentRange=new rh(this.inlineDiff.currentRange.startLineNumber,this.inlineDiff.currentRange.endLineNumberExclusive+R.removedTextLines.length),this.inlineDiff.changes.pop(),this.inlineDiffService.updateInlineDiff(dhe(this.inlineDiff)),this.computeDecorations();
              return
            }
          }
          break
        }
        case Ztt.Before:{
          const R=I.text.split(`
`).length-(I.range.endLineNumber-I.range.startLineNumber+1);
          this.inlineDiff.currentRange=new rh(this.inlineDiff.currentRange.startLineNumber+R,this.inlineDiff.currentRange.endLineNumberExclusive+R),this.inlineDiffService.updateInlineDiff(dhe(this.inlineDiff)),this.computeDecorations();
          break
        }
        case Ztt.Overlap:{
          if(this.active)continue;
          this.processOverlapEdit(I,x.eol);
          break
        }
      }
    })), this.inlineDiffService.updateInlineDiff(dhe(this.inlineDiff)), this.computeDecorations()
  }
  processOverlapEdit(e, t){
    const i=this.lastEdits.find(x=>x.range.startLineNumber===e.range.startLineNumber&&x.range.startColumn===e.range.startColumn&&x.range.endLineNumber===e.range.endLineNumber&&x.range.endColumn===e.range.endColumn&&(x.text??"")===e.text);
    if(i){
      this.lastEdits=this.lastEdits.filter(x=>x!==i);
      return
    }
    let r=e.text, s=e.range.startColumn, o=e.range.endColumn, a=this.inlineDiff.currentRange.startLineNumber, l=e.range.startLineNumber-this.inlineDiff.currentRange.startLineNumber+1;
    l<1&&(l=1, s=1, r.includes(t)?(r=r.split(t).slice(1).join(t), a=e.range.startLineNumber+1):(console.warn("We technically have a bug here if the line is not at the start... To fix it we'd need some magic tho like remembering the entire state of the document... so we'll ignore it for now"), a=e.range.startLineNumber));
    let u=e.range.endLineNumber-this.inlineDiff.currentRange.startLineNumber+1, d=!1;
    u>this.inlineDiff.newTextLines.length&&(u=this.inlineDiff.newTextLines.length, o=this.inlineDiff.newTextLines[u-1].length+1, r.includes(t)?r=r.split(t).slice(0, -1).join(t):(console.warn("We technically have a bug here if the line is not at the start... To fix it we'd need some magic tho like remembering the entire state of the document... so we'll ignore it for now"), d=!0));
    const m=this.applyEditToLines(this.inlineDiff.newTextLines, {
      startLineIndex:l,endLineIndexInclusive:u,startColumn:s,endColumn:o,text:r,eol:t
    });
    d&&m.length>0&&m[m.length-1]===""&&m.pop();
    const p=new rh(a, a+m.length), g=(x, I, B)=>{
      let R=[],N=[],M=0;
      for(const O of I){
        let $=0,H=!1;
        for(const W of x){
          const z=bru(W.removedLinesOriginalRange,O.removedLinesOriginalRange);
          for(let ee=z.startLineNumber;
          ee<z.endLineNumberExclusive;
          ee++){
            H=!0;
            let re=W.removedLinesMetaData?W.removedLinesMetaData[ee-W.removedLinesOriginalRange.startLineNumber]:void 0;
            re&&(O.removedLinesMetaData[ee-O.removedLinesOriginalRange.startLineNumber]=re)
          }
          const Y={
            startLineNumber:W.addedRange.startLineNumber-$,endLineNumberExclusive:W.addedRange.endLineNumberExclusive-$
          },j={
            startLineNumber:O.addedRange.startLineNumber-M,endLineNumberExclusive:O.addedRange.endLineNumberExclusive-M
          },X=bru(Y,j);
          for(let ee=X.startLineNumber;
          ee<X.endLineNumberExclusive;
          ee++){
            const re=this.inlineDiff.newTextLines[ee+$-1],ne=m[ee+M-1];
            if(!B&&re!==ne)continue;
            H=!0;
            let pe=W.addedLinesMetaData?W.addedLinesMetaData[ee+$-W.addedRange.startLineNumber]:void 0;
            pe&&(O.addedLinesMetaData[ee+M-O.addedRange.startLineNumber]=pe)
          }
          $+=W.addedRange.endLineNumberExclusive-W.addedRange.startLineNumber,$-=W.removedLinesOriginalRange.endLineNumberExclusive-W.removedLinesOriginalRange.startLineNumber
        }
        M+=O.addedRange.endLineNumberExclusive-O.addedRange.startLineNumber,M-=O.removedLinesOriginalRange.endLineNumberExclusive-O.removedLinesOriginalRange.startLineNumber,R.push(O),N.push(!H)
      }
      return{
        finalChanges:R,userChanges:N
      }
    }, f=(x, I)=>{
      if(!x||x.length===0)return;
      let B,R=-1;
      for(let N=0;
      N<x.length;
      N++)if(x[N].composerGenerationID){
        B=x[N],R=N;
        break
      }
      if(!B&&I&&(B=I,R=0,x[0]=I),!!B){
        for(let N=R-1;
        N>=0&&!x[N].composerGenerationID;
        N--)x[N]=B;
        for(let N=R+1;
        N<x.length;
        N++)x[N].composerGenerationID?B=x[N]:x[N]=B;
        return B
      }
    }, A=this.composerMetadata?.composerId;
    let w=A?this.composerDataService.getComposerDataIfLoaded(A):void 0, C=[];
    if(cg(this.agentEditedTextLines, m)){
      this.agentEditedTextLines=void 0;
      const x=hmn(this.inlineDiff.originalTextLines,m,!0,this.composerMetadata?.composerGenerationID,this.toolCallId);
      C=g(this.inlineDiff.changes,x.changes,!1).finalChanges
    }
    else if(w?.isNAL){
      if(this.diffChangeSourceRegistry.isLegacyInlineDiffsUsed()&&w.status!=="generating"){
        let B=!1,R=0;
        for(const N of this.inlineDiff.changes){
          const M=N.addedRange.startLineNumber,O=N.addedRange.endLineNumberExclusive,$=O-M,H=N.removedLinesOriginalRange.endLineNumberExclusive-N.removedLinesOriginalRange.startLineNumber;
          if(l<O&&u>=M){
            B=!0;
            break
          }
          O<=l&&(R+=$-H)
        }
        if(!B){
          const N=l-R,M=u-R;
          N>=1&&M<=this.inlineDiff.originalTextLines.length&&(this.inlineDiff.originalTextLines=this.applyEditToLines(this.inlineDiff.originalTextLines,{
            startLineIndex:N,endLineIndexInclusive:M,startColumn:s,endColumn:o,text:r,eol:t
          }))
        }
      }
      const I=hmn(this.inlineDiff.originalTextLines,m,!0,this.composerMetadata?.composerGenerationID,this.toolCallId);
      C=g(this.inlineDiff.changes,I.changes,!0).finalChanges;
      for(const B of C){
        let R;
        B.removedLinesOriginalRange.startLineNumber!==B.removedLinesOriginalRange.endLineNumberExclusive&&(R=f(B.removedLinesMetaData,void 0)),B.addedRange.startLineNumber!==B.addedRange.endLineNumberExclusive&&(R=f(B.addedLinesMetaData,R))
      }
    }
    else C=hmn(this.inlineDiff.originalTextLines, m, !0).changes;
    if(this.inlineDiff.currentRange=p, this.inlineDiff.newTextLines=m, this.inlineDiff.changes=C, this.inlineDiff.changes.length===0){
      this.remove();
      return
    }
    this.inlineDiffService.updateInlineDiff(dhe(this.inlineDiff)), this.computeDecorations()
  }
  applyEditToLines(e, t){
    const r=(e[t.startLineIndex-1].slice(0, t.startColumn-1)+t.text+e[t.endLineIndexInclusive-1].slice(t.endColumn-1)).split(t.eol);
    return[...e.slice(0, t.startLineIndex-1), ...r, ...e.slice(t.endLineIndexInclusive)]
  }
  finishFailure(){
    if(!this.active)return;
    let e=!0;
    for(let i=0;
    i<this.inlineDiff.newTextLines.length;
    i++)if(this.inlineDiff.newTextLines[i]!==this.inlineDiff.originalTextLines[i]){
      e=!1;
      break
    }
    if(e){
      this.inlineDiffService.remove(this.inlineDiff.id),this._cancelGenerationWithNoChanges();
      return
    }
    const t=this.getDiffState(!1);
    this.inlineDiff.newTextLines=t.newFullRangeTextLines, this.handleDiffState(t), this.computeDecorations(), this._finish()
  }
  finishSuccess(){
    if(!this.active)return;
    const e=this.getDiffState(!0);
    this.handleDiffState(e), this.computeDecorations(), this._finish()
  }
  reject(e, t){
    const i=this.getUndoResourceForUri(this.inlineDiff.uri), r=[];
    this.cppService.shouldNotTriggerFromInlineDiffReject=!0, setTimeout(()=>{
      this.cppService.shouldNotTriggerFromInlineDiffReject=!1
    }, 1e3);
    for(const l of this.inlineDiff.changes){
      let u=l.removedTextLines.join(this.modelRef.object.textEditorModel.getEOL());
      const d=this.getGreenRange(l);
      l.addedRange.startLineNumber===l.addedRange.endLineNumberExclusive&&(u+=this.modelRef.object.textEditorModel.getEOL());
      const m={
        range:d,text:u,forceMoveMarkers:!0
      };
      r.push(m)
    }
    this.inlineDiffService.recordRejectEvent({
      model:this.modelRef.object.textEditorModel,requestId:this.inlineDiff.generationUUID,promptBarId:this.promptBarId,actorRequestId:t,silent:e?.rejectSilently
    }), e?.rejectSilently!==!0&&this.inlineDiffService.reportEditFate(this.inlineDiff.generationUUID, "reject", {
      numPartiallyAccepted:this.numAcceptedPartialDiffs,numPartiallyRejected:this.numRejectedPartialDiffs,numUnresolved:this.inlineDiff.changes.length
    });
    const s=[];
    try{
      s.push(...this.modelRef.object.textEditorModel.applyEdits(r,!0))
    }
    catch(l){
      console.warn("Weird undo edit bug that I don't like... But if it for the cursor state only then it is probably fine?",l)
    }
    this.inlineDiffService.recordAfterRejectEvent({
      model:this.modelRef.object.textEditorModel,requestId:this.inlineDiff.generationUUID,promptBarId:this.promptBarId
    }), this.removeDecorations(), this.inlineDiffService.removeInlineDiff(this.inlineDiff.id);
    const o=this.cmdKStateService.getPromptBarByDiffId(this.inlineDiff.id);
    o&&(this.inlineDiff.lastPromptBarCurrentRange=this.inlineDiffService.getPromptBarCurrentRange(o, this.modelRef.object.textEditorModel));
    const a=new XZ("Undo Reject Suggestion", "undo-reject-suggestion", this.inlineDiff.id, i, ()=>{
      try{
        this.modelRef.object.textEditorModel.applyEdits(s)
      }
      catch(l){
        console.error("[inlineDiff] Error retrieving undo data:",l)
      }
    }, ()=>{
      try{
        this.modelRef.object.textEditorModel.applyEdits(r)
      }
      catch(l){
        console.error("[inlineDiff] Error retrieving undo data:",l)
      }
    });
    this.inlineDiffService.pushUndoElement(a, {
      
    })
  }
  cancel(){
    this.inlineDiffService.recordCancelEvent({
      model:this.modelRef.object.textEditorModel,requestId:this.inlineDiff.generationUUID,promptBarId:this.promptBarId
    }), this.aiService.getGenerationMetadata(this.inlineDiff.generationUUID)?.type!=="composer"&&this.aiService.removeInprogressAIGeneration(this.inlineDiff.generationUUID)
  }
  compileAndFirePartialHistory(){
    if(this.changeFates.size===0||!this.composerMetadata)return;
    const e=[], t=Array.from(this.changeFates.entries()).sort(([i, r], [s, o])=>r.removedRange.startLineNumber-o.removedRange.startLineNumber);
    for(const[i, r]of t)e.push(r);
    if(this.numAcceptedPartialDiffs>0||this.numRejectedPartialDiffs>0){
      const i=this.numAcceptedPartialDiffs>0&&this.numRejectedPartialDiffs>0?"partially_accepted":this.numAcceptedPartialDiffs>0?"fully_accepted":"fully_rejected";
      this.inlineDiffService.firePartialDiffCompletionEvent({
        requestId:this.inlineDiff.generationUUID,diffId:this.inlineDiff.id,uri:this.inlineDiff.uri,inlineDiff:this.inlineDiff,composerMetadata:this.composerMetadata,change:{
          accepted:[],rejected:[]
        },previousContent:"",updatedContent:"",source:rO.COMPOSER,file:this.inlineDiff.uri.toString(),range:{
          startLineNumber:this.inlineDiff.currentRange.startLineNumber,endLineNumber:this.inlineDiff.currentRange.endLineNumberExclusive,startColumn:0,endColumn:-1
        },sourceContext:"composer",partialInlineDiffFates:e
      })
    }
  }
  remove(){
    this.compileAndFirePartialHistory(), this.removeDecorations(), this.inlineDiffService.removeInlineDiff(this.inlineDiff.id), this.dispose()
  }
  add(){
    this.computeDecorations(), this.inlineDiffService.updateInlineDiff(dhe(this.inlineDiff))
  }
  getGreenRange(e){
    const t=this.modelRef.object.textEditorModel, i=t.getLineCount();
    if(e.removedTextLines.length===0){
      let r=this.inlineDiff.currentRange.startLineNumber+e.addedRange.startLineNumber-1,s=this.inlineDiff.currentRange.startLineNumber+e.addedRange.endLineNumberExclusive-1;
      if(s<=i)return new Zt(r,1,s,1);
      {
        s=i;
        let o=1;
        return r>1&&(r--,o=t.getLineMaxColumn(r)),new Zt(r,o,s,t.getLineMaxColumn(s))
      }
    }
    else{
      const r=this.inlineDiff.currentRange.startLineNumber+e.addedRange.endLineNumberExclusive-1-1,s=Math.min(r,i);
      return e.addedRange.endLineNumberExclusive===e.addedRange.startLineNumber?new Zt(this.inlineDiff.currentRange.startLineNumber+e.addedRange.startLineNumber-1,1,this.inlineDiff.currentRange.startLineNumber+e.addedRange.startLineNumber-1,1):new Zt(this.inlineDiff.currentRange.startLineNumber+e.addedRange.startLineNumber-1,1,s,this.modelRef.object.textEditorModel.getLineMaxColumn(s))
    }
  }
  rejectPartialDiff(e){
    const t=this.getUndoResourceForUri(this.inlineDiff.uri), i=this.findClosestChange(e);
    this.inlineDiffService.trackAcceptRejectDiffDetails("reject", [i], "editor");
    const r=this.getChangeHash(i), s=this.inlineDiff.changes.length===1, o=this.getGreenRange(i), a=i.addedRange.endLineNumberExclusive===i.addedRange.startLineNumber?this.modelRef.object.textEditorModel.getEOL():"", l=o.endLineNumber>this.modelRef.object.textEditorModel.getLineCount(), u=this.modelRef.object.textEditorModel.getEOL(), d=(l?u:"")+i.removedTextLines.join(u)+a, m={
      range:o,text:d,forceMoveMarkers:!0
    };
    this.inlineDiffService.recordPartialRejectEvent({
      model:this.modelRef.object.textEditorModel,requestId:this.inlineDiff.generationUUID,redLines:d.split(`
`),greenLines:this.modelRef.object.textEditorModel.getValueInRange(o).split(`
`),greenRange:o,promptBarId:this.promptBarId
    }), this.changeFates.set(r, {
      fate:"rejected",removedLines:i.removedTextLines,removedRange:i.removedLinesOriginalRange,addedLines:this.inlineDiff.newTextLines.slice(i.addedRange.startLineNumber-1,i.addedRange.endLineNumberExclusive-1),addedRange:i.addedRange
    });
    const p=[];
    try{
      p.push(...this.modelRef.object.textEditorModel.applyEdits([m],!0))
    }
    catch(f){
      console.warn("Weird undo edit bug that I don't like... But if it for the cursor state only then it is probably fine?",f)
    }
    if(this.inlineDiffService.recordAfterRejectEvent({
      model:this.modelRef.object.textEditorModel,requestId:this.inlineDiff.generationUUID,promptBarId:this.promptBarId
    }), s){
      this.inlineDiffService.reportEditFate(this.inlineDiff.generationUUID,"partial",{
        numPartiallyAccepted:this.numAcceptedPartialDiffs,numPartiallyRejected:this.numRejectedPartialDiffs,numUnresolved:0
      });
      const f=this.cmdKStateService.getPromptBarByDiffId(this.inlineDiff.id);
      f&&(this.inlineDiff.lastPromptBarCurrentRange=this.inlineDiffService.getPromptBarCurrentRange(f,this.modelRef.object.textEditorModel))
    }
    this.numRejectedPartialDiffs++;
    const g=new XZ("Undo Accept Suggestion", "undo-accept-suggestion", this.inlineDiff.id, t, ()=>{
      try{
        this.modelRef.object.textEditorModel.applyEdits(p)
      }
      catch(f){
        console.error("[inlineDiff] Error undoing reject partial diff:",f)
      }
    }, ()=>{
      try{
        this.modelRef.object.textEditorModel.applyEdits([m])
      }
      catch(f){
        console.error("[inlineDiff] Error undoing reject partial diff:",f)
      }
    });
    return this.inlineDiffService.pushUndoElement(g, {
      
    }), s&&this.remove(), s
  }
  findClosestChange(e){
    return this.inlineDiff.changes[this.findClosestChangeIndex(e)]
  }
  findClosestChangeIndex(e){
    let t=e.lineNumber;
    t=e.lineNumber-this.inlineDiff.currentRange.startLineNumber+1;
    let i=0;
    const r=s=>Math.min(Math.abs(s.addedRange.endLineNumberExclusive-1-t), Math.abs(s.addedRange.startLineNumber-t));
    for(let s=1;
    s<this.inlineDiff.changes.length;
    s++){
      const o=this.inlineDiff.changes[s],a=r(o),l=r(this.inlineDiff.changes[i]);
      a<l&&(i=s)
    }
    return i
  }
  acceptPartialDiff(e){
    const t=this.getUndoResourceForUri(this.inlineDiff.uri), i=this.findClosestChangeIndex(e), r=this.inlineDiff.changes[i];
    this.inlineDiffService.trackAcceptRejectDiffDetails("accept", [r], "editor");
    const s=this.getChangeHash(r), o=this.inlineDiff.id, a=this.inlineDiffService;
    this.inlineDiffService.recordPartialAcceptEvent({
      model:this.modelRef.object.textEditorModel,requestId:this.inlineDiff.generationUUID,redLines:(r.removedTextLines.join(this.modelRef.object.textEditorModel.getEOL())+(r.addedRange.endLineNumberExclusive===r.addedRange.startLineNumber?this.modelRef.object.textEditorModel.getEOL():"")).split(`
`),greenLines:this.modelRef.object.textEditorModel.getValueInRange(this.getGreenRange(r)).split(`
`),greenRange:this.getGreenRange(r),promptBarId:this.promptBarId
    }), this.changeFates.set(s, {
      fate:"accepted",removedLines:r.removedTextLines,removedRange:r.removedLinesOriginalRange,addedLines:this.inlineDiff.newTextLines.slice(r.addedRange.startLineNumber-1,r.addedRange.endLineNumberExclusive-1),addedRange:r.addedRange
    });
    const l=r.removedLinesOriginalRange.startLineNumber-1, u=r.removedLinesOriginalRange.endLineNumberExclusive-r.removedLinesOriginalRange.startLineNumber, d=this.inlineDiff.originalTextLines.slice(l, l+u), m=this.inlineDiff.newTextLines.slice(r.addedRange.startLineNumber-1, r.addedRange.endLineNumberExclusive-1), p={
      index:l,removedLines:d,addedLines:m
    }, g=[...this.inlineDiff.originalTextLines.slice(0, p.index), ...p.addedLines, ...this.inlineDiff.originalTextLines.slice(p.index+u)];
    let f=structuredClone(this.inlineDiff.changes), A=r.addedRange.endLineNumberExclusive-r.addedRange.startLineNumber;
    A-=r.removedLinesOriginalRange.endLineNumberExclusive-r.removedLinesOriginalRange.startLineNumber;
    for(let x=i+1;
    x<this.inlineDiff.changes.length;
    x++){
      const I=this.inlineDiff.changes[x];
      I.removedLinesOriginalRange.startLineNumber+=A,I.removedLinesOriginalRange.endLineNumberExclusive+=A
    }
    this.inlineDiff.changes=this.inlineDiff.changes.filter(x=>x!==r);
    let w=structuredClone(this.inlineDiff.changes);
    this.inlineDiff.originalTextLines=g, this.inlineDiffService.updateInlineDiff(dhe(this.inlineDiff)), this.computeDecorations(), this.numAcceptedPartialDiffs++;
    const C=new XZ("Undo Accept Suggestion", "undo-accept-suggestion", this.inlineDiff.id, t, ()=>{
      const x=a.getHandlerByDiffId(o);
      if(!x)throw new Error("[inlineDiffService] Handler not found");
      const I=x.getUndoResourceForUri(x.inlineDiff.uri);
      this.undoRedoService.blockPushElements(I);
      try{
        x.inlineDiff.originalTextLines=[...x.inlineDiff.originalTextLines.slice(0,p.index),...p.removedLines,...x.inlineDiff.originalTextLines.slice(p.index+p.addedLines.length)],x.inlineDiff.changes=structuredClone(f),a.updateInlineDiff(dhe(x.inlineDiff)),x.computeDecorations(),x.numAcceptedPartialDiffs--
      }
      finally{
        this.undoRedoService.unblockPushElements(I)
      }
    }, ()=>{
      const x=a.getHandlerByDiffId(o);
      if(!x)throw new Error("[inlineDiffService] Handler not found");
      const I=x.getUndoResourceForUri(x.inlineDiff.uri);
      this.undoRedoService.blockPushElements(I);
      try{
        x.inlineDiff.originalTextLines=[...x.inlineDiff.originalTextLines.slice(0,p.index),...p.addedLines,...x.inlineDiff.originalTextLines.slice(p.index+p.removedLines.length)],x.inlineDiff.changes=structuredClone(w),x.inlineDiffService.updateInlineDiff(dhe(x.inlineDiff)),x.computeDecorations(),x.numAcceptedPartialDiffs++
      }
      finally{
        this.undoRedoService.unblockPushElements(I)
      }
    });
    return this.inlineDiffService.pushUndoElement(C, {
      
    }), this.inlineDiff.changes.length===0?(this.inlineDiffService.reportEditFate(this.inlineDiff.generationUUID, "partial", {
      numPartiallyAccepted:this.numAcceptedPartialDiffs,numPartiallyRejected:this.numRejectedPartialDiffs,numUnresolved:0
    }), this.remove(), !0):!1
  }
  accept(){
    this.inlineDiffService.recordAcceptEvent({
      model:this.modelRef.object.textEditorModel,requestId:this.inlineDiff.generationUUID,promptBarId:this.promptBarId
    }), this.inlineDiffService.reportEditFate(this.inlineDiff.generationUUID, "accept", {
      numPartiallyAccepted:this.numAcceptedPartialDiffs,numPartiallyRejected:this.numRejectedPartialDiffs,numUnresolved:this.inlineDiff.changes.length
    }), this.remove()
  }
  removeDecorations(){
    const e=this.cachedDecorationIDs;
    this.cachedDecorationIDs=[], this.deltaDecorations(e, [])
  }
  getDiffState(e, t, i){
    return hmn(this.inlineDiff.originalTextLines, this.inlineDiff.newTextLines, e, t, i)
  }
  addLinesToDiff(e){
    if(!this.active)return;
    const t=[];
    for(const r of e){
      (r.includes(`
`)||r.includes("\r"))&&console.warn("InlineDiffService#addLine: line contains newline characters, which is not supported");
      let s=r.replace(/\r/g,"");
      s=s.replace(/\n/g,""),t.push(s)
    }
    this.inlineDiff.newTextLines.push(...t);
    const i=this.getDiffState(!1);
    this.handleDiffState(i), this.computeDecorations()
  }
  _toDescriptor(){
    const e=this._shouldHideDecorations();
    return{
      id:this.inlineDiff.id,sourceId:"inline-diff",uri:this.inlineDiff.uri,currentRange:{
        startLineNumber:this.inlineDiff.currentRange.startLineNumber,endLineNumberExclusive:this.inlineDiff.currentRange.endLineNumberExclusive
      },changes:this.inlineDiff.changes,originalLineTokens:this.inlineDiff.originalLineTokens,streamingState:{
        activeLine:this.inlineDiff.activeLine,pendingRange:this.inlineDiff.pendingRange
      },metadata:{
        generationId:this.inlineDiff.generationUUID,composerId:this.inlineDiff.composerMetadata?.composerId,toolCallId:this.inlineDiff.toolCallId,hideDeletionViewZones:e,source:this.inlineDiff.source
      }
    }
  }
  _getModelAccess(){
    return{
      getLineMaxColumn:e=>this.modelRef.object.textEditorModel.getLineMaxColumn(e),getValueInRange:e=>this.modelRef.object.textEditorModel.getValueInRange(e)
    }
  }
  _isActivelyGenerating(){
    return this.aiService.inprogressAIGenerations.value.some(e=>e.generationUUID===this.inlineDiff.generationUUID)
  }
  _shouldHideDecorations(){
    return this.diffDecorationVisibilityService.shouldHideInlineDiffs()
  }
  computeDecorations(){
    if(this._shouldHideDecorations()){
      this.cachedDecorationIDs=this.deltaDecorations(this.cachedDecorationIDs,[]);
      return
    }
    const t=this.configurationService.getValue(NBe), i=this._toDescriptor(), r={
      isThemed:t??!1,showRemovedChanges:!0,showInsertedLineBackgrounds:!0
    }, s=gJg(i, this._isActivelyGenerating(), r, this._getModelAccess()), o=this.configurationService.getValue(c4t)??IFn, a=this.experimentService.getDynamicConfig("inline_diff_performance_config")?.maxDecorations??100;
    if(o&&this.inlineDiff.changes.length>a){
      if(!this.hasShownThresholdNotification){
        this.hasShownThresholdNotification=!0;
        const l=_(201,null);
        this.notificationService.prompt(Rs.Warning,l,[{
          label:_(202,null),run:()=>{
            this.configurationService.updateValue(c4t,!1)
          }
        }
        ],{
          neverShowAgain:{
            id:"inlineDiff.tooManyChangesWarning"
          }
        })
      }
      s.splice(0)
    }
    this.cachedDecorationIDs=this.deltaDecorations(this.cachedDecorationIDs, s)
  }
  deltaDecorations(e, t, i=0){
    return this.modelRef.object.textEditorModel.deltaDecorations(e, t, i)
  }
  fireApplyDiffEditsAsync(e, t, i, r, s){
    this.experimentService.checkFeatureGate("experimental_code_analytics_suggestions")&&queueMicrotask(()=>{
      const a=i.map(l=>{
        const u=r.getOffsetAt({
          lineNumber:l.range.startLineNumber,column:l.range.startColumn
        });
        let d=0;
        return(l.range.startLineNumber!==l.range.endLineNumber||l.range.startColumn!==l.range.endColumn)&&(d=r.getOffsetAt({
          lineNumber:l.range.endLineNumber,column:l.range.endColumn
        })-u),{
          ...l,rangeOffset:u,rangeLength:d
        }
      });
      this.inlineDiffService.fireApplyDiffEdits({
        uri:e,requestId:t,edits:a,source:rO.COMPOSER,composerMetadata:s
      })
    })
  }
  handleDiffState(e){
    const t=this.modelRef.object.textEditorModel, i=tFA(e, this.inlineDiff, this.modelRef);
    this.lastEdits=i;
    let r=[];
    r=t.applyEdits(i, !0), this.fireApplyDiffEditsAsync(this.inlineDiff.uri, this.inlineDiff.generationUUID, i, t, this.composerMetadata), this.inlineDiff.currentRange=new rh(this.inlineDiff.currentRange.startLineNumber, this.inlineDiff.currentRange.startLineNumber+e.newFullRangeTextLines.length), this.inlineDiff.changes=e.changes, this.inlineDiff.activeLine=e.activeLine, this.inlineDiff.pendingRange=e.pendingRange, this.inlineDiffService.updateInlineDiff(dhe(this.inlineDiff));
    const s=new XZ("Undo Update Diff", "undo-update-diff", this.inlineDiff.id, t.uri, async()=>{
      try{
        this.modelRef.object.textEditorModel.applyEdits(r)
      }
      catch(o){
        console.error("[inlineDiff] Error undoing update diff:",o)
      }
    }, async()=>{
      try{
        this.modelRef.object.textEditorModel.applyEdits(i)
      }
      catch(o){
        console.error("[inlineDiff] Error undoing update diff:",o)
      }
    });
    this.inlineDiffService.pushUndoElement(s, {
      
    })
  }
  cancelInUndo(){
    this.aiService.removeInprogressAIGeneration(this.inlineDiff.generationUUID), this.active=!1
  }
  setDiff(e){
    this.inlineDiff=e, this.inlineDiffService.updateInlineDiff(dhe(this.inlineDiff)), this.computeDecorations()
  }
  activate(e, t, i){
    this.active=!0, this.doneCallback=e, this.cancelGenerationWithNoChangesCallback=t, this.rejectCallback=i
  }
  _finish(){
    this.active=!1, this.doneCallback&&this.doneCallback({
      generationUUID:this.inlineDiff.generationUUID,diffRange:this.inlineDiff.currentRange,model:this.modelRef.object.textEditorModel
    })
  }
  _cancelGenerationWithNoChanges(){
    this.cancelGenerationWithNoChangesCallback&&this.cancelGenerationWithNoChangesCallback()
  }
  callRejectCallback(){
    this.rejectCallback&&this.rejectCallback()
  }
  dispose(){
    super.dispose(), this.modelRef?.dispose()
  }
}, bye=__decorate([__param(3, fL), __param(4, qB), __param(5, Fn), __param(6, JA), __param(7, gM), __param(8, Jv), __param(9, I2), __param(10, Tl), __param(11, Oa), __param(12, ms), __param(13, CEe), __param(14, K3)], bye), gce="speculative-full-file"
}
}), rFA=
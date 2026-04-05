// Module: out-build/vs/workbench/contrib/aiCpp/browser/cppEventLogger.js
// Offset: 27507435 (bundle byte offset)
// Size: 10702 bytes

Er(), Wt(), UNe(), Bfa(), Ud(), OSt(), Pa(), ps(), H6(), rt(), dru(), oB(), td(), yn(), Dd(), dce=xi("cppEventLoggerService"), Lfa=class{
  cppClient(){
    return this.cppServiceBackendClient.get()
  }
  constructor(e, t, i, r, s, o, a){
    this._cppTelemetryService=e, this._telemetryService=t, this._workspaceContextService=i, this._instantiationService=r, this._textModelService=s, this._reactiveStorageService=o, this._aiCodeTrackingService=a, this._onDidAcceptAiContent=new Qe, this.onDidAcceptAiContent=this._onDidAcceptAiContent.event, this._onDidSuggestCpp=new Qe, this.onDidSuggestCpp=this._onDidSuggestCpp.event, this._onDidRejectCpp=new Qe, this.onDidRejectCpp=this._onDidRejectCpp.event, this._onDidApplyCppEdits=new Qe, this.onDidApplyCppEdits=this._onDidApplyCppEdits.event, this.editorChangedTimeoutMap={
      
    }, this.recordDebouncedCursorPosition=cmn((l, u)=>{
      if(l.isDisposed())return;
      const d={
        case:"debouncedCursorPosition",position:u,modelVersion:l.getVersionId(),model:l
      };
      this._cppTelemetryService.recordCppSessionEvent(d)
    }, 150), this.cppServiceBackendClient=this._instantiationService.createInstance(YS, {
      service:Lvi
    }), this.recordCppSessionEvent=this._cppTelemetryService.recordCppSessionEvent.bind(this._cppTelemetryService)
  }
  async forceFlushExtHostEventLogger(){
    await this.extHostEventLogger?.forceFlush()
  }
  getExtension(e){
    const i=this._workspaceContextService.asRelativePath(e).split(".").pop();
    if(i!==void 0&&i.length>0&&i.length<8)return i.toLowerCase()
  }
  registerExtHostEventLogger(e){
    return this.extHostEventLogger=e, {
      dispose:()=>{
        this.extHostEventLogger=void 0
      }
    }
  }
  recordExtHostEvent(e){
    this._cppTelemetryService.canWeTrackTelem&&this.extHostEventLogger?.recordExtHostEvent(e)
  }
  recordScrollEvent(e, t, i){
    this._cppTelemetryService.recordCppSessionEvent({
      case:"scrollEvent",editorId:i,visibleRanges:t,modelVersion:e.getVersionId(),model:e
    })
  }
  recordEditorCloseEvent(e){
    this._cppTelemetryService.recordCppSessionEvent({
      case:"editorClose",editorId:e
    })
  }
  recordAiEvent(e, t, i){
    this._cppTelemetryService.recordCppSessionEvent({
      case:"aiEvent",requestId:e,startOrEnd:t,source:i
    })
  }
  recordCmdKEvent(e, t){
    this._cppTelemetryService.recordCppSessionEvent({
      case:"cmdKEvent",event:t,model:e,modelVersion:e.getVersionId()
    })
  }
  recordChatEvent(e){
    this._cppTelemetryService.recordCppSessionEvent({
      case:"chatEvent",event:e
    })
  }
  recordBugBotEvent(e){
    this._cppTelemetryService.recordCppSessionEvent({
      case:"bugBotEvent",event:e
    })
  }
  recordLspSuggestionEvent(e, t, i, r){
    this._cppTelemetryService.recordCppSessionEvent({
      case:"lspSuggestionEvent",editorId:t,model:e,modelVersion:e.getVersionId(),requestId:r,suggestions:i
    })
  }
  recordChangedEditor(e, t, i, r){
    const s={
      case:"editorChanged",modelVersion:e.getVersionId(),model:e,position:t,visibleRanges:i,editorId:r
    };
    this._cppTelemetryService.recordCppSessionEvent(s)
  }
  recordPartialAcceptSuggestionEvent(e, t, i){
    const r=Ktt(e, t), s={
      case:"acceptCppPartial",currentlyShownCppSuggestion:{
        modelVersionWhenTheChangeIsFirstIndicatedToTheUserButNotShownInTheModel:t.modelVersionWhenCreated,originalText:t.originalText??"",suggestionId:t.monotonicallyIncreasingSuggestionId,suggestionText:t.replaceText,rangeOfSuggestionInCurrentModel:r?{
          endColumn:r.endColumn,endLineNumber:r.endLineNumber,startColumn:r.startColumn,startLineNumber:r.startLineNumber
        }
        :void 0,bindingId:t.bindingId
      },edit:i,modelVersion:e.getVersionId(),model:e
    };
    this._cppTelemetryService.recordCppSessionEvent(s), this._telemetryService.publicLogCapture("cursor.acceptcppsuggestionpartial");
    const o=t.uri.path.split("/").pop();
    this.recordCppFate(t.requestId, YKe.PARTIAL_ACCEPT, o, performance.now());
    const a=this._workspaceContextService.asRelativePath(e.uri);
    this._aiCodeTrackingService.storeGeneratedContent(a, t.originalText??"", t.replaceText, {
      source:rO.TAB,fileExtension:this.getExtension(t.uri),fileName:a,requestId:t.requestId
    }).catch(l=>console.error("[AiCodeTracking] Error storing partial accept:", l)), this._onDidAcceptAiContent.fire({
      file:this._workspaceContextService.asRelativePath(e.uri),previousContent:t.originalText??"",updatedContent:t.replaceText,source:rO.TAB,range:{
        ...t.range,endLineNumber:t.range.endLineNumberInclusive
      },requestId:t.requestId,cppSource:t.source
    })
  }
  recordAcceptSuggestionEvent(e, t){
    const i=Ktt(e, t), r={
      case:"acceptCpp",currentlyShownCppSuggestion:{
        modelVersionWhenTheChangeIsFirstIndicatedToTheUserButNotShownInTheModel:t.modelVersionWhenCreated,originalText:t.originalText??"",suggestionId:t.monotonicallyIncreasingSuggestionId,suggestionText:t.replaceText,rangeOfSuggestionInCurrentModel:i?{
          endColumn:i.endColumn,endLineNumber:i.endLineNumber,startColumn:i.startColumn,startLineNumber:i.startLineNumber
        }
        :void 0,bindingId:t.bindingId
      },modelVersion:e.getVersionId(),model:e
    };
    this._cppTelemetryService.recordCppSessionEvent(r), this._telemetryService.publicLogCapture("cursor.acceptcppsuggestion");
    const s=this.getExtension(t.uri);
    this.recordCppFate(t.requestId, YKe.ACCEPT, s, performance.now());
    const o=this._workspaceContextService.asRelativePath(e.uri);
    this._aiCodeTrackingService.storeGeneratedContent(o, t.originalText??"", t.replaceText, {
      source:rO.TAB,fileExtension:this.getExtension(t.uri),fileName:o,requestId:t.requestId
    }).catch(a=>console.error("[AiCodeTracking] Error storing accept:", a)), this._onDidAcceptAiContent.fire({
      requestId:t.requestId,file:this._workspaceContextService.asRelativePath(e.uri),previousContent:t.originalText??"",updatedContent:t.replaceText,source:rO.TAB,range:{
        ...t.range,endLineNumber:t.range.endLineNumberInclusive
      },cppSource:t.source
    })
  }
  recordRejectSuggestionEvent(e, t){
    const i=Ktt(e, t), r={
      case:"rejectCpp",currentlyShownCppSuggestion:{
        modelVersionWhenTheChangeIsFirstIndicatedToTheUserButNotShownInTheModel:t.modelVersionWhenCreated,originalText:t.originalText??"",suggestionId:t.monotonicallyIncreasingSuggestionId,suggestionText:t.replaceText,rangeOfSuggestionInCurrentModel:i?{
          endColumn:i.endColumn,endLineNumber:i.endLineNumber,startColumn:i.startColumn,startLineNumber:i.startLineNumber
        }
        :void 0,bindingId:t.bindingId
      },modelVersion:e.getVersionId(),model:e
    };
    this._cppTelemetryService.recordCppSessionEvent(r), this._telemetryService.publicLogCapture("cursor.rejectcppsuggestion");
    const s=this.getExtension(t.uri);
    this.recordCppFate(t.requestId, YKe.REJECT, s, performance.now()), this._onDidRejectCpp.fire({
      requestId:t.requestId,file:this._workspaceContextService.asRelativePath(e.uri),previousContent:t.originalText??"",updatedContent:t.replaceText,source:rO.TAB,range:{
        ...t.range,endLineNumber:t.range.endLineNumberInclusive
      },cppSource:t.source
    })
  }
  recordFinishedCppGeneration(e, t){
    const i={
      case:"finishedCppGeneration",model:e,recoverableData:t,modelVersion:e.getVersionId()
    };
    this._cppTelemetryService.recordCppSessionEvent(i), this._telemetryService.publicLogCapture("cursor.fullcppsuggestion")
  }
  recordCppSuggestionEvent(e, t, i){
    const r=Ktt(e, t), s={
      case:"suggestCpp",currentlyShownCppSuggestion:{
        modelVersionWhenTheChangeIsFirstIndicatedToTheUserButNotShownInTheModel:t.modelVersionWhenCreated,originalText:t.originalText??"",suggestionId:t.monotonicallyIncreasingSuggestionId,suggestionText:t.replaceText,rangeOfSuggestionInCurrentModel:r?{
          endColumn:r.endColumn,endLineNumber:r.endLineNumber,startColumn:r.startColumn,startLineNumber:r.startLineNumber
        }
        :void 0,bindingId:t.bindingId
      },recoverableData:i,modelVersion:e.getVersionId(),model:e
    };
    this._cppTelemetryService.recordCppSessionEvent(s), this._telemetryService.publicLogCapture("cursor.suggestcpp"), this._onDidSuggestCpp.fire({
      requestId:t.requestId,file:this._workspaceContextService.asRelativePath(e.uri),previousContent:t.originalText??"",updatedContent:t.replaceText,source:rO.TAB,range:{
        ...t.range,endLineNumber:t.range.endLineNumberInclusive
      },cppSource:t.source
    })
  }
  recordCppTriggerEvent(e, t, i, r){
    this._cppTelemetryService.recordCppSessionEvent({
      case:"cppTrigger",generationUUID:t,cursorPosition:i,modelVersion:e.getVersionId(),model:e,source:r
    })
  }
  recordAcceptCursorPredictionEvent(e, t){
    const i={
      case:"acceptCursorPredictionEvent",prediction:t,model:e,modelVersion:e.getVersionId()
    };
    this._cppTelemetryService.recordCppSessionEvent(i)
  }
  recordRejectCursorPredictionEvent(e, t){
    const i={
      case:"rejectCursorPredictionEvent",prediction:t,model:e,modelVersion:e.getVersionId()
    };
    this._cppTelemetryService.recordCppSessionEvent(i)
  }
  recordSuggestCursorPredictionEvent(e, t){
    const i={
      case:"suggestCursorPredictionEvent",prediction:t,model:e,modelVersion:e.getVersionId()
    };
    this._cppTelemetryService.recordCppSessionEvent(i)
  }
  recordModelOpenedEvent(e){
    const t={
      case:"modelOpened",model:e,modelVersion:e.getVersionId()
    };
    this._cppTelemetryService.recordCppSessionEvent(t), this._telemetryService.publicLogCapture("cursor.modelopened")
  }
  recordLinterChange(e){
    const t={
      case:"linterError",errors:e.errors,model:e.model,modelVersion:e.modelVersion
    };
    this._cppTelemetryService.recordCppSessionEvent(t)
  }
  recordClipboardChange(e){
    const t={
      case:"clipboardChange",text:e
    };
    this._cppTelemetryService.recordCppSessionEvent(t)
  }
  recordQuickActionsChange(e){
    const t={
      case:"quickActionsChange",...e
    };
    this._cppTelemetryService.recordCppSessionEvent(t)
  }
  recordQuickActionFired(e){
    const t={
      case:"quickActionFired",...e
    };
    this._cppTelemetryService.recordCppSessionEvent(t)
  }
  recordCppFate(e, t, i, r){
    const s=new T4c({
      requestId:e,fate:t,performanceNowTime:r,extension:i
    }), o=new Promise((a, l)=>{
      setTimeout(()=>l(new Error("Timeout recording CPP fate event")),2e3)
    });
    this.cppClient().then(a=>{
      Promise.race([a.recordCppFate(s,{
        
      }),o]).then(()=>{
        
      }).catch(l=>{
        console.warn("Error recording CPP fate event:",l)
      })
    })
  }
  recordBugBotLinterEvent({
    model:e, requestId:t, eventType:i
  }){
    this._cppTelemetryService.recordCppSessionEvent({
      case:"bugBotLinterEvent",requestId:t,eventType:i,model:e,modelVersion:e.getVersionId()
    })
  }
  recordAnythingQuickAccessSelectionEvent(e, t, i){
    const r=new Ut, s=new Set, o=t.map(l=>{
      if(l.type==="separator"||l.type==="section"||s.size>16&&!s.has(l.resource.toString()))return l;
      s.add(l.resource.toString());
      const u=this._textModelService.createModelReference(l.resource);
      return r.add($i(async()=>{
        (await u).dispose()
      })),{
        ...l,textModelPromise:u
      }
    }), a={
      case:"anythingQuickAccessSelectionEvent",query:e,items:o,selectedIndices:i
    };
    this._cppTelemetryService.recordCppSessionEvent(a, r)
  }
  fireApplyCppEdits(e){
    this._onDidApplyCppEdits.fire(e)
  }
}, Lfa=__decorate([__param(0, Une), __param(1, ea), __param(2, Lr), __param(3, ln), __param(4, El), __param(5, ku), __param(6, Yz)], Lfa), Vi(dce, Lfa, 1)
}
});
function Mvi(n){
  return n.scheme!==_n.file&&n.scheme!==_n.vscodeRemote
}
function Ytt(n){
  if(n.folders.length)return n.folders.every(e=>Mvi(e.uri))?n.folders[0].uri:void 0;
  if(n.configuration&&Mvi(n.configuration))return n.configuration
}
function dJg(n){
  return Ytt(n)?.scheme
}
function V2A(n){
  return Ytt(n)?.authority
}
function umn(n){
  return Ytt(n)!==void 0
}
var hce=
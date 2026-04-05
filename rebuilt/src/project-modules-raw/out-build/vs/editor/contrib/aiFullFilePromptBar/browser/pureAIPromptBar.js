// Module: out-build/vs/editor/contrib/aiFullFilePromptBar/browser/pureAIPromptBar.js
// Offset: 33986248 (bundle byte offset)
// Size: 5290 bytes

Ie(), Ie(), Ie(), Ie(), Ie(), Ie(), Ie(), Ie(), Ie(), Ti(), qi(), zr(), $my(), n7(), mg(), t0(), G1t(), aC(), $rt(), tCu(), W$f=qe("<div class=opacity-60> / "), Q$f=qe('<div class="flex items-center gap-[40px] pure-ai-prompt-bar"><div class="flex items-center gap-1 ml-0.5"tabindex=0></div><div class=diff-review-trailing-actions><div class=diff-review-primary-actions>'), WDa=qe("<div>"), j$f=qe("<div class=pure-ai-prompt-bar>"), z$f=720
}
});
function Jmy(n){
  const e=wr(), t=pP(hvn), i=xe(()=>e.keybindingService.lookupKeybinding(mvn)?.getLabel()??""), r=pP(ODa), s=pP(UDa), o=pP(gvn), a=pP(pvn), [l, u]=lt([]);
  Ic(()=>{
    u([...e.diffChangeSourceRegistry.getDescriptors()]);
    const ee=e.diffChangeSourceRegistry.onDidChange(()=>{
      u([...e.diffChangeSourceRegistry.getDescriptors()])
    });
    Ai(()=>ee.dispose())
  });
  const d=xe(()=>{
    const ee=l().filter(ne=>ne.metadata?.source===gce).filter(ne=>!e.composerDataService.isWorktreeComposer(ne.metadata?.composerId)).filter(ne=>!FSt(ne.uri)).filter(ne=>!ne.metadata?.hideDecorations);
    if(!n.uri)return ee;
    const re=ee.find(pe=>VV(pe, n.uri)&&pe.metadata?.composerId)?.metadata?.composerId;
    return re?ee.filter(ne=>ne.metadata?.composerId===re):ee
  }), m=xe(()=>{
    const ee=d();
    return ee.length===0?[]:ee.sort((re, ne)=>{
      const pe=re.metadata?.createdAt,le=ne.metadata?.createdAt;
      return pe!==void 0&&le!==void 0?pe<le?-1:1:Iu.isEqual(re.uri,ne.uri)?re.currentRange.startLineNumber-ne.currentRange.startLineNumber:re.uri.toString()<ne.uri.toString()?-1:1
    }).flatMap(re=>re.changes.slice().sort((ne, pe)=>ne.addedRange.startLineNumber-pe.addedRange.startLineNumber).map(ne=>({
      uri:re.uri,startLineNumber:re.currentRange.startLineNumber+ne.addedRange.startLineNumber-1
    })))
  }), p=Tv(e.aiService.inprogressAIGenerations), g=xe(()=>{
    const ee=d();
    return ee.length===0||!n.uri?!1:ee.some(re=>p().some(ne=>ne.generationUUID===re.metadata?.generationId&&n.uri!==void 0&&VV(re, n.uri)&&ne.metadata?.type!=="composer"))
  }), f=xe(()=>n.uri?m().filter(ee=>n.uri!==void 0&&VV({
    uri:ee.uri
  }, n.uri)):[]), A=xe(()=>{
    const ee=d();
    return JDa(ee.map(ne=>({
      uri:ne.uri,currentRange:ne.currentRange,createdAt:ne.metadata?.createdAt
    }))).map(ne=>ne.toString())
  }), w=()=>{
    e.commandService.executeCommand(l1i, n.editor)
  }, C=()=>{
    n.editor.focus(), e.commandService.executeCommand(pvn)
  }, x=()=>{
    if(n.uri)return d().find(ee=>n.uri!==void 0&&VV(ee, n.uri))
  }, I=async()=>{
    const ee=x();
    ee&&(await e.diffChangeSourceRegistry.accept(ee.id), await cSt(e))
  }, B=()=>{
    const ee=x();
    ee&&e.diffChangeSourceRegistry.reject(ee.id)
  }, [R, N]=lt(0), [M, O]=lt(0), $=()=>{
    if(!Y()){
      N(0),O(0);
      return
    }
    if(wN.get(n.editor)){
      const re=n.uri,ne=d().filter(fe=>re!==void 0&&VV(fe,re)).flatMap(fe=>fe.changes.map(ke=>({
        startLineNumber:fe.currentRange.startLineNumber+ke.addedRange.startLineNumber-1,endLineNumber:fe.currentRange.startLineNumber+ke.addedRange.endLineNumberExclusive-1,startColumn:1,endColumn:1
      }))),pe=ne.length;
      O(pe);
      const le=n.editor.getPosition(),he=n.editor.getVisibleRanges();
      let be=-1;
      if(le&&he.some(fe=>fe.containsPosition(le))&&(be=ne.findIndex(fe=>le.lineNumber>=fe.startLineNumber&&le.lineNumber<=fe.endLineNumber)),be===-1&&he.length>0){
        const fe=Math.floor((he[0].startLineNumber+he[he.length-1].endLineNumber)/2);
        be=ne.reduce((ke,Se,Fe)=>Math.abs(Se.startLineNumber-fe)<Math.abs(ne[ke].startLineNumber-fe)?Fe:ke,0)
      }
      be===-1&&he.length>0&&(be=ne.findIndex(fe=>fe.startLineNumber>=he[0].startLineNumber&&fe.endLineNumber<=he[he.length-1].endLineNumber)),N(be+1)
    }
  };
  An(()=>{
    if(Y()){
      $();
      const ee=n.editor.onDidScrollChange($),re=n.editor.onDidChangeCursorPosition($),ne=n.editor.onDidChangeModelContent($);
      Ai(()=>{
        ee.dispose(),re.dispose(),ne.dispose()
      })
    }
    else N(0), O(0)
  });
  const H=(ee=!1)=>{
    const re=wN.get(n.editor);
    if(re){
      const ne=ee?R():void 0;
      re.navigateToChange("previous",ne),$()
    }
  }, W=(ee=!1)=>{
    const re=wN.get(n.editor);
    if(re){
      const ne=ee?R():void 0;
      re.navigateToChange("next",ne),$()
    }
  }, z=()=>{
    n.editor.focus(), e.commandService.executeCommand(gvn)
  }, Y=xe(()=>n.uri?d().some(ee=>n.uri!==void 0&&VV(ee, n.uri)):!1), j=()=>{
    const ee=wN.get(n.editor);
    if(ee){
      const re=R();
      re>0&&re<=M()&&ee.focusOnCurrentChange(re)
    }
  }, X=xe(()=>{
    if(!n.uri)return;
    const re=A().findIndex(ne=>ne===n.uri?.toString());
    return re===-1?void 0:re
  });
  return K(qmy, {
    get isGenerating(){
      return g()
    }, get inlineDiffs(){
      return d()
    }, get changesInCurrentFile(){
      return f()
    }, get uniqueFileUris(){
      return A()
    }, get uri(){
      return n.uri
    }, get fileIndexInInlineDiffs(){
      return X()
    }, onCancelGeneration:w, onNavigateToPreviousFile:C, onAcceptChanges:I, onRejectChanges:B, onNavigateToPreviousChange:()=>H(!0), onNavigateToNextChange:()=>W(!0), onNavigateToCurrentChange:j, onNavigateToNextFile:z, get acceptKeybinding(){
      return t()
    }, get rejectKeybinding(){
      return i()
    }, get nextChangeKeybinding(){
      return r()
    }, get previousChangeKeybinding(){
      return s()
    }, get nextFileKeybinding(){
      return o()
    }, get previousFileKeybinding(){
      return a()
    }, get currentVisibleChange(){
      return R()
    }, get totalChanges(){
      return M()
    }, get composerHandle(){
      return e.composerDataService.selectedComposerHandle
    }
  })
}
function V$f(n, e, t, i){
  return Qv(()=>{
    let r=e.getURI();
    return K(Jmy, {
      uri:r,editor:i
    })
  }, n, t)
}
function K$f(n, e, t){
  return Qv(()=>{
    const i=t.getModel()?.uri, r=eCu();
    return K(Xe, {
      get when(){
        return r()
      },get children(){
        return K(Omy,{
          editor:t,uri:i
        })
      }
    })
  }, n, e)
}
var Gmy=
// Module: out-build/vs/workbench/services/agent/browser/conversationActionManager.js
// Offset: 30148236 (bundle byte offset)
// Size: 2026 bytes

rkt(), cp(), Bie(), jpn=class extends RAi{
  constructor(n, e, t, i){
    if(super(), this.composerId=n, this.composerAbortController=e, this.instantiationService=t, this.generationUUID=i, this.addAbortCallback(()=>{
      const r=this.instantiationService.invokeFunction(l=>l.get(wM)),s=this.instantiationService.invokeFunction(l=>l.get(Oa)),o=s.getHandleIfLoaded(this.composerId);
      if(!o)return;
      const a=s.getComposerData(o);
      a?.status!=="generating"||a?.chatGenerationUUID!==this.generationUUID||(r.handleAbortChat(o),s.updateComposerDataSetStore(o,l=>l("conversationActionManager",void 0)))
    }), this.composerAbortController.signal.aborted?this.abort("composer_abort_controller_already_aborted"):(this.composerAbortControllerListener=()=>this.abort("composer_abort_controller_aborted"), this.composerAbortController.signal.addEventListener("abort", this.composerAbortControllerListener, {
      once:!0
    })), !this.signal.aborted)this.signalListener=()=>{
      const r=this.signal.reason??"linked_signal_aborted";
      this.composerAbortController.abort(r)
    }, this.signal.addEventListener("abort", this.signalListener, {
      once:!0
    });
    else{
      const r=this.signal.reason??"linked_signal_already_aborted";
      this.composerAbortController.abort(r)
    }
  }
  getGenerationUUID(){
    return this.generationUUID
  }
  dispose(){
    super.dispose(), this.composerAbortControllerListener&&!this.composerAbortController.signal.aborted&&(this.composerAbortController.signal.removeEventListener("abort", this.composerAbortControllerListener), this.composerAbortControllerListener=void 0), this.signalListener&&!this.signal.aborted&&(this.signal.removeEventListener("abort", this.signalListener), this.signalListener=void 0)
  }
}
}
});
function Eey(n){
  return n.replace(BCf, function(e, t, i, r, s, o){
    if(r)return"";
    if(s){
      const a=s.length;
      return s[a-1]===`
`?s[a-2]==="\r"?`\r
`:`
`:""
    }
    else return o?e.substring(1):e
  })
}
function Okt(n){
  const e=Eey(n);
  try{
    return JSON.parse(e)
  }
  catch{
    const i=e.replace(/, \s*([
  }
  \]])/g, "$1");
  return JSON.parse(i)
}
}
var BCf, zpn=
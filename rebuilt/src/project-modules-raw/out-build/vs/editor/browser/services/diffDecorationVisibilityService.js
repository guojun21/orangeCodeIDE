// Module: out-build/vs/editor/browser/services/diffDecorationVisibilityService.js
// Offset: 27535250 (bundle byte offset)
// Size: 1995 bytes

yn(), rt(), Er(), Wt(), rf(), kr(), Ud(), eu(), CEe=xi("diffDecorationVisibilityService"), Ofa=class extends at{
  constructor(e, t, i){
    super(), this.storageService=e, this.analyticsService=t, this.workbenchEnvironmentService=i, this._onDidChangeGlobal=this._register(new Qe), this.onDidChangeGlobal=this._onDidChangeGlobal.event, this._noInlineDiffsProp=hm(this.storageService, "noInlineDiffs"), this._register(this._noInlineDiffsProp), this._noInlineDiffsProp.recomputeInitiallyAndOnChange(this._store, ()=>{
      this._fireChangeEvent()
    })
  }
  _fireChangeEvent(){
    this._onDidChangeGlobal.fire({
      noInlineDiffs:this.getNoInlineDiffsSetting()
    })
  }
  shouldHideInlineDiffs(){
    if(this.workbenchEnvironmentService.isGlass===!0)return!0;
    const e=this._noInlineDiffsProp.get();
    return e!==null?e:!1
  }
  getNoInlineDiffsSetting(){
    const e=this._noInlineDiffsProp.get();
    return e!==null?e:!1
  }
  setNoInlineDiffsSetting(e){
    this.analyticsService.trackEvent("ide_settings.setting_changed", {
      settingId:"no_inline_diffs",section:"applying_changes",value:String(e)
    }), this._noInlineDiffsProp.set(e, void 0)
  }
}, Ofa=__decorate([__param(0, Hi), __param(1, uh), __param(2, Cc)], Ofa), Vi(CEe, Ofa, 1)
}
});
function fJg(n){
  return`${fru}-${n}-${Wr()}`
}
function pru(n, e, t, i){
  const r=n.listCodeEditors();
  for(const s of r)if(s.hasModel()&&Iu.isEqual(s.getModel().uri, t)){
    const o=s.getPosition();
    o&&o.lineNumber>=e.startLineNumber&&o.lineNumber<=e.endLineNumber?s.setPosition(i):o&&o.lineNumber>s.getModel().getLineCount()-(e.endLineNumber-e.startLineNumber+1)&&s.setPosition(new ar(s.getModel().getLineCount()-(e.endLineNumber-e.startLineNumber+1), o.column))
  }
}
function Ovi(n, e){
  try{
    n.applyEdits(e)
  }
  catch(t){
    console.warn("Expected error. But if this error happens and something looks weird, then we should investigate. It is related to the feature of having the cursor state go back to its original place if you escape out of a cmd-k generate prompt bar.", t)
  }
}
var gru, fL, fru, Ufa, bru, bye, gce, _M=
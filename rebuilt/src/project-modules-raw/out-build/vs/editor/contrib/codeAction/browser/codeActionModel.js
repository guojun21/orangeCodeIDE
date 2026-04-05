// Module: out-build/vs/editor/contrib/codeAction/browser/codeActionModel.js
// Offset: 4174560 (bundle byte offset)
// Size: 6666 bytes

vr(), _s(), yn(), QY(), rt(), Yr(), si(), pk(), tl(), db(), BW(), mve(), p5c=new Sn("supportedCodeAction", ""), g5c="_typescript.applyFixAllCodeAction", cJh=class extends at{
  constructor(n, e, t, i=250){
    super(), this._editor=n, this._markerService=e, this._signalChange=t, this._delay=i, this._autoTriggerTimer=this._register(new O$), this._register(this._markerService.onMarkerChanged(r=>this._onMarkerChanges(r))), this._register(this._editor.onDidChangeCursorPosition(()=>this._tryAutoTrigger()))
  }
  trigger(n){
    const e=this._getRangeOfSelectionUnlessWhitespaceEnclosed(n);
    this._signalChange(e?{
      trigger:n,selection:e
    }
    :void 0)
  }
  _onMarkerChanges(n){
    const e=this._editor.getModel();
    e&&n.some(t=>Zc(t, e.uri))&&this._tryAutoTrigger()
  }
  _tryAutoTrigger(){
    this._autoTriggerTimer.cancelAndSet(()=>{
      this.trigger({
        type:2,triggerAction:E9.Default
      })
    }, this._delay)
  }
  _getRangeOfSelectionUnlessWhitespaceEnclosed(n){
    if(!this._editor.hasModel())return;
    const e=this._editor.getSelection();
    if(n.type===1)return e;
    const t=this._editor.getOption(66).enabled;
    if(t!==Foe.Off){
      {
        if(t===Foe.On)return e;
        if(t===Foe.OnCode){
          if(!e.isEmpty())return e;
          const r=this._editor.getModel(),{
            lineNumber:s,column:o
          }
          =e.getPosition(),a=r.getLineContent(s);
          if(a.length===0)return;
          if(o===1){
            if(/\s/.test(a[0]))return
          }
          else if(o===r.getLineMaxColumn(s)){
            if(/\s/.test(a[a.length-1]))return
          }
          else if(/\s/.test(a[o-2])&&/\s/.test(a[o-1]))return
        }
      }
      return e
    }
  }
}, (function(n){
  let e;
  (function(i){
    i[i.Empty=0]="Empty", i[i.Triggered=1]="Triggered"
  })(e=n.Type||(n.Type={
    
  })), n.Empty={
    type:0
  };
  class t{
    constructor(r, s, o){
      this.trigger=r,this.position=s,this._cancellablePromise=o,this.type=1,this.actions=o.catch(a=>{
        if(bf(a))return r$o;
        throw a
      })
    }
    cancel(){
      this._cancellablePromise.cancel()
    }
  }
  n.Triggered=t
})(Dvt||(Dvt={
  
})), r$o=Object.freeze({
  allActions:[], validActions:[], dispose:()=>{
    
  }, documentation:[], hasAutoFix:!1, hasAIFix:!1, allAIFixes:!1
}), lJh=class extends at{
  constructor(n, e, t, i, r, s, o, a){
    super(), this._editor=n, this._registry=e, this._markerService=t, this._progressService=r, this.keybindingService=s, this._configurationService=o, this._reactiveStorageService=a, this._codeActionOracle=this._register(new uo), this._state=Dvt.Empty, this._onDidChangeState=this._register(new Qe), this.onDidChangeState=this._onDidChangeState.event, this.codeActionsDisposable=this._register(new uo), this._disposed=!1, this._supportedCodeActions=p5c.bindTo(i), this._register(this._editor.onDidChangeModel(()=>this._update())), this._register(this._editor.onDidChangeModelLanguage(()=>this._update())), this._register(this._registry.onDidChange(()=>this._update())), this._register(this._editor.onDidChangeConfiguration(l=>{
      l.hasChanged(66)&&this._update()
    })), this._update()
  }
  dispose(){
    this._disposed||(this._disposed=!0, super.dispose(), this.setState(Dvt.Empty, !0))
  }
  _settingEnabledNearbyQuickfixes(){
    const n=this._editor?.getModel();
    return this._configurationService?this._configurationService.getValue("editor.codeActionWidget.includeNearbyQuickFixes", {
      resource:n?.uri
    }):!1
  }
  _update(){
    if(this._disposed)return;
    this._codeActionOracle.value=void 0, this.setState(Dvt.Empty);
    const n=this._editor.getModel();
    if(n&&this._registry.has(n)&&!this._editor.getOption(96)){
      const e=this._registry.all(n).flatMap(t=>t.providedCodeActionKinds??[]);
      this._supportedCodeActions.set(e.join(" ")),this._codeActionOracle.value=new cJh(this._editor,this._markerService,t=>{
        if(!t){
          this.setState(Dvt.Empty);
          return
        }
        const i=t.selection.getStartPosition(),r=dw(async a=>{
          if(this._settingEnabledNearbyQuickfixes()&&t.trigger.type===1&&(t.trigger.triggerAction===E9.QuickFix||t.trigger.filter?.include?.contains(FA.QuickFix))){
            const u=await hve(this._registry,n,t.selection,t.trigger,a);
            this.codeActionsDisposable.value=u;
            const d=[...u.allActions];
            if(a.isCancellationRequested)return u.dispose(),r$o;
            const m=u.validActions?.some(g=>g.action.kind?FA.QuickFix.contains(new p0(g.action.kind)):!1),p=this._markerService.read({
              resource:n.uri
            });
            if(m){
              for(const g of u.validActions)g.action.command?.arguments?.some(f=>typeof f=="string"&&f.includes(g5c))&&(g.action.diagnostics=[...p.filter(f=>f.relatedInformation)]);
              return{
                validActions:u.validActions,allActions:d,documentation:u.documentation,hasAutoFix:u.hasAutoFix,hasAIFix:u.hasAIFix,allAIFixes:u.allAIFixes,dispose:()=>{
                  this.codeActionsDisposable.value=u
                }
              }
            }
            else if(!m&&p.length>0){
              const g=t.selection.getPosition();
              let f=g,A=Number.MAX_VALUE;
              const w=[...u.validActions];
              for(const x of p){
                const I=x.endColumn,B=x.endLineNumber,R=x.startLineNumber;
                if(B===g.lineNumber||R===g.lineNumber){
                  f=new ar(B,I);
                  const N={
                    type:t.trigger.type,triggerAction:t.trigger.triggerAction,filter:{
                      include:t.trigger.filter?.include?t.trigger.filter?.include:FA.QuickFix
                    },autoApply:t.trigger.autoApply,context:{
                      notAvailableMessage:t.trigger.context?.notAvailableMessage||"",position:f
                    }
                  },M=new Vl(f.lineNumber,f.column,f.lineNumber,f.column),O=await hve(this._registry,n,M,N,a);
                  if(a.isCancellationRequested)return O.dispose(),r$o;
                  if(O.validActions.length!==0){
                    for(const $ of O.validActions)$.action.command?.arguments?.some(H=>typeof H=="string"&&H.includes(g5c))&&($.action.diagnostics=[...p.filter(H=>H.relatedInformation)]);
                    u.allActions.length===0&&d.push(...O.allActions),Math.abs(g.column-I)<A?w.unshift(...O.validActions):w.push(...O.validActions)
                  }
                  A=Math.abs(g.column-I)
                }
              }
              const C=w.filter((x,I,B)=>B.findIndex(R=>R.action.title===x.action.title)===I);
              return C.sort((x,I)=>x.action.isPreferred&&!I.action.isPreferred?-1:!x.action.isPreferred&&I.action.isPreferred||x.action.isAI&&!I.action.isAI?1:!x.action.isAI&&I.action.isAI?-1:0),{
                validActions:C,allActions:d,documentation:u.documentation,hasAutoFix:u.hasAutoFix,hasAIFix:u.hasAIFix,allAIFixes:u.allAIFixes,dispose:()=>{
                  this.codeActionsDisposable.value=u
                }
              }
            }
          }
          if(t.trigger.type===1){
            const u=await hve(this._registry,n,t.selection,t.trigger,a);
            return this.codeActionsDisposable.value=u,u
          }
          const l=await hve(this._registry,n,t.selection,t.trigger,a);
          return this.codeActionsDisposable.value=l,l
        });
        t.trigger.type===1&&this._progressService?.showWhile(r,250);
        const s=new Dvt.Triggered(t.trigger,i,r);
        let o=!1;
        this._state.type===1&&(o=this._state.trigger.type===1&&s.type===1&&s.trigger.type===2&&this._state.position!==s.position),o?setTimeout(()=>{
          this.setState(s)
        },500):this.setState(s)
      },void 0),this._codeActionOracle.value.trigger({
        type:2,triggerAction:E9.Default
      })
    }
    else this._supportedCodeActions.reset()
  }
  trigger(n){
    this._codeActionOracle.value?.trigger(n), this.codeActionsDisposable.dispose()
  }
  setState(n, e){
    n!==this._state&&(this._state.type===1&&this._state.cancel(), this._state=n, !e&&!this._disposed&&this._onDidChangeState.fire(n))
  }
}
}
}), ZvA=
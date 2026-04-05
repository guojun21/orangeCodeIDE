// Module: out-build/vs/platform/hover/browser/hover.js
// Offset: 2320475 (bundle byte offset)
// Size: 1916 bytes

Wt(), rt(), Ei(), ri(), Kc=xi("hoverService"), Yoe=class extends at{
  get delay(){
    return this.isInstantlyHovering()?0:this.hoverOptions?.dynamicDelay?e=>this.hoverOptions?.dynamicDelay?.(e)??this._delay:this._delay
  }
  constructor(e, t, i={
    
  }, r, s){
    super(), this.placement=e, this.hoverOptions=t, this.overrideOptions=i, this.configurationService=r, this.hoverService=s, this.lastHoverHideTime=0, this.timeLimit=200, this.hoverDisposables=this._register(new Ut), this._delay=this.configurationService.getValue("workbench.hover.delay"), this._register(this.configurationService.onDidChangeConfiguration(o=>{
      o.affectsConfiguration("workbench.hover.delay")&&(this._delay=this.configurationService.getValue("workbench.hover.delay"))
    }))
  }
  showHover(e, t){
    const i=typeof this.overrideOptions=="function"?this.overrideOptions(e, t):this.overrideOptions;
    this.hoverDisposables.clear();
    const r=wf(e.target)?[e.target]:e.target.targetElements;
    for(const o of r)this.hoverDisposables.add(_f(o, "keydown", a=>{
      a.equals(9)&&this.hoverService.hideHover()
    }));
    const s=wf(e.content)?void 0:typeof e.content=="string"?e.content.toString():e.content.value;
    return this.hoverService.showInstantHover({
      ...e,...i,persistence:{
        hideOnKeyDown:!0,...i.persistence
      },id:s,appearance:{
        ...e.appearance,compact:!0,skipFadeInAnimation:this.isInstantlyHovering(),...i.appearance
      }
    }, t)
  }
  isInstantlyHovering(){
    return!!this.hoverOptions?.instantHover&&Date.now()-this.lastHoverHideTime<this.timeLimit
  }
  setInstantHoverTimeLimit(e){
    if(!this.hoverOptions?.instantHover)throw new Error("Instant hover is not enabled");
    this.timeLimit=e
  }
  onDidHideHover(){
    this.hoverDisposables.clear(), this.hoverOptions?.instantHover&&(this.lastHoverHideTime=Date.now())
  }
}, Yoe=__decorate([__param(3, Fn), __param(4, Kc)], Yoe), $3t={
  showHover:function(){
    throw new Error("Native hover function not implemented.")
  }, delay:0, showNativeHover:!0
}
}
}), bKe, q3t=
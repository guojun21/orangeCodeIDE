// Module: out-build/vs/workbench/contrib/chat/common/chatWidgetHistoryService.js
// Offset: 28334380 (bundle byte offset)
// Size: 888 bytes

yn(), Wt(), kr(), Qq(), lcu(), SS(), ucu=xi("IChatWidgetHistoryService"), dcu=40, oAa=class{
  constructor(e){
    this._onDidClearHistory=new Qe, this.onDidClearHistory=this._onDidClearHistory.event, this.memento=new EM("interactive-session", e);
    const t=this.memento.getMemento(1, 1);
    for(const i in t.history)t.history[i]=t.history[i].map(r=>typeof r=="string"?{
      text:r
    }
    :r);
    this.viewState=t
  }
  getHistory(e){
    const t=this.getKey(e);
    return this.viewState.history?.[t]??[]
  }
  getKey(e){
    return e===zh.Panel?yyi:e
  }
  saveHistory(e, t){
    this.viewState.history||(this.viewState.history={
      
    });
    const i=this.getKey(e);
    this.viewState.history[i]=t.slice(-dcu), this.memento.saveMemento()
  }
  clearHistory(){
    this.viewState.history={
      
    }, this.memento.saveMemento(), this._onDidClearHistory.fire()
  }
}, oAa=__decorate([__param(0, Hi)], oAa)
}
}), hP, Mme, vtf, aO=
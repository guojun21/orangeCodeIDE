// Module: out-build/vs/workbench/services/output/common/output.js
// Offset: 28438660 (bundle byte offset)
// Size: 1865 bytes

yn(), Ws(), si(), Wt(), rt(), Fcu="text/x-code-output", SAa="Log", fpn="text/x-code-log-output", kAa="log", e1="workbench.panel.output", Ocu=new Sn("inOutput", !1), Rnf=new Sn("activeLogOutput", !1), Ucu=new Sn("activeLogOutput.isLog", !1), $cu=new Sn("activeLogOutput.levelSettable", !1), qcu=new Sn("activeLogOutput.level", ""), Hcu=new Sn("activeLogOutput.levelIsDefault", !1), Jcu=new Sn("outputView.scrollLock", !1), Gcu=new Sn("activeOutputChannel", ""), Wcu=new Sn("output.filter.trace", !0), Qcu=new Sn("output.filter.debug", !0), jcu=new Sn("output.filter.info", !0), zcu=new Sn("output.filter.warning", !0), Vcu=new Sn("output.filter.error", !0), Kcu=new Sn("outputFilterFocus", !1), Ycu=new Sn("output.filter.categories", ""), iS=xi("outputService"), (function(n){
  n[n.Append=1]="Append", n[n.Replace=2]="Replace", n[n.Clear=3]="Clear"
})(aX||(aX={
  
})), TU={
  OutputChannels:"workbench.contributions.outputChannels"
}, Pnf=class extends at{
  constructor(){
    super(...arguments), this.channels=new Map, this._onDidRegisterChannel=this._register(new Qe), this.onDidRegisterChannel=this._onDidRegisterChannel.event, this._onDidRemoveChannel=this._register(new Qe), this.onDidRemoveChannel=this._onDidRemoveChannel.event, this._onDidUpdateChannelFiles=this._register(new Qe), this.onDidUpdateChannelSources=this._onDidUpdateChannelFiles.event
  }
  registerChannel(n){
    this.channels.has(n.id)||(this.channels.set(n.id, n), this._onDidRegisterChannel.fire(n.id))
  }
  getChannels(){
    const n=[];
    return this.channels.forEach(e=>n.push(e)), n
  }
  getChannel(n){
    return this.channels.get(n)
  }
  updateChannelSources(n, e){
    const t=this.channels.get(n);
    t&&$nt(t)&&(t.source=e, this._onDidUpdateChannelFiles.fire(t))
  }
  removeChannel(n){
    const e=this.channels.get(n);
    e&&(this.channels.delete(n), this._onDidRemoveChannel.fire(e))
  }
}, Di.add(TU.OutputChannels, new Pnf)
}
}), s5, Zcu, EAa, jq=
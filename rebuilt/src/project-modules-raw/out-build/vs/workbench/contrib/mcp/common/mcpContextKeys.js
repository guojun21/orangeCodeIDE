// Module: out-build/vs/workbench/contrib/mcp/common/mcpContextKeys.js
// Offset: 31016631 (bundle byte offset)
// Size: 1159 bytes

rt(), Uc(), Ht(), si(), AF(), Rqe(), (function(n){
  n.serverCount=new Sn("mcp.serverCount", void 0, {
    type:"number", description:_(8768, null)
  }), n.hasUnknownTools=new Sn("mcp.hasUnknownTools", void 0, {
    type:"boolean", description:_(8769, null)
  }), n.hasServersWithErrors=new Sn("mcp.hasServersWithErrors", void 0, {
    type:"boolean", description:_(8770, null)
  }), n.toolsCount=new Sn("mcp.toolsCount", void 0, {
    type:"number", description:_(8771, null)
  })
})(FMe||(FMe={
  
})), vgu=class extends at{
  static{
    this.ID="workbench.contrib.mcp.contextKey"
  }
  constructor(e, t){
    super();
    const i=FMe.serverCount.bindTo(t), r=FMe.toolsCount.bindTo(t), s=FMe.hasUnknownTools.bindTo(t);
    this._store.add(eM(FMe.hasServersWithErrors, t, o=>e.servers.read(o).some(a=>a.connectionState.read(o).state===3))), this._store.add(Oc(o=>{
      const a=e.servers.read(o),l=a.map(u=>u.tools.read(o));
      i.set(a.length),r.set(l.reduce((u,d)=>u+d.length,0)),s.set(e.lazyCollectionState.read(o)!==2||a.some(u=>{
        if(u.trusted.read(o)===!1)return!1;
        const d=u.toolsState.read(o);
        return d===0||d===2
      }))
    }))
  }
}, vgu=__decorate([__param(0, Vye), __param(1, wi)], vgu)
}
}), Wme, _it=
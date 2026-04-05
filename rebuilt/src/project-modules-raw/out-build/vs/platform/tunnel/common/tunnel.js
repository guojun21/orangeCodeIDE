// Module: out-build/vs/platform/tunnel/common/tunnel.js
// Offset: 27608440 (bundle byte offset)
// Size: 6564 bytes

yn(), rt(), Yn(), Ei(), Wt(), jr(), D2=xi("tunnelService"), uFA=xi("sharedTunnelsService"), (function(n){
  n.Http="http", n.Https="https"
})(Z3||(Z3={
  
})), (function(n){
  n.ConstantPrivate="constantPrivate", n.Private="private", n.Public="public"
})(tX||(tX={
  
})), (function(n){
  n[n.Notify=1]="Notify", n[n.OpenBrowser=2]="OpenBrowser", n[n.OpenPreview=3]="OpenPreview", n[n.Silent=4]="Silent", n[n.Ignore=5]="Ignore", n[n.OpenBrowserOnce=6]="OpenBrowserOnce"
})(snt||(snt={
  
})), Amn=["localhost", "127.0.0.1", "0:0:0:0:0:0:0:1", "::1"], qvi=["0.0.0.0", "0:0:0:0:0:0:0:0", "::"], BJg=class{
  constructor(n, e, t){
    this.remoteAddress=n, this.localAddress=e, this._dispose=t, this._onDispose=new Qe, this.onDidDispose=this._onDispose.event
  }
  dispose(){
    return this._onDispose.fire(), this._dispose()
  }
}, Wfa=class extends at{
  constructor(e, t){
    super(), this.logService=e, this.configurationService=t, this._onTunnelOpened=new Qe, this.onTunnelOpened=this._onTunnelOpened.event, this._onTunnelClosed=new Qe, this.onTunnelClosed=this._onTunnelClosed.event, this._onAddedTunnelProvider=new Qe, this.onAddedTunnelProvider=this._onAddedTunnelProvider.event, this._tunnels=new Map, this._canElevate=!1, this._canChangeProtocol=!0, this._privacyOptions=[], this._factoryInProgress=new Set
  }
  get hasTunnelProvider(){
    return!!this._tunnelProvider
  }
  get defaultTunnelHost(){
    const e=this.configurationService.getValue("remote.localPortHost");
    return!e||e==="localhost"?"127.0.0.1":"0.0.0.0"
  }
  setTunnelProvider(e){
    return this._tunnelProvider=e, e?(this._onAddedTunnelProvider.fire(), {
      dispose:()=>{
        this._tunnelProvider=void 0,this._canElevate=!1,this._privacyOptions=[]
      }
    }):(this._canElevate=!1, this._privacyOptions=[], this._onAddedTunnelProvider.fire(), {
      dispose:()=>{
        
      }
    })
  }
  setTunnelFeatures(e){
    this._canElevate=e.elevation, this._privacyOptions=e.privacyOptions, this._canChangeProtocol=e.protocol
  }
  get canChangeProtocol(){
    return this._canChangeProtocol
  }
  get canElevate(){
    return this._canElevate
  }
  get canChangePrivacy(){
    return this._privacyOptions.length>0
  }
  get privacyOptions(){
    return this._privacyOptions
  }
  get tunnels(){
    return this.getTunnels()
  }
  async getTunnels(){
    const e=[], t=Array.from(this._tunnels.values());
    for(const i of t){
      const r=Array.from(i.values());
      for(const s of r){
        const o=await s.value;
        o&&typeof o!="string"&&e.push(o)
      }
    }
    return e
  }
  async dispose(){
    super.dispose();
    for(const e of this._tunnels.values()){
      for(const{
        value:t
      }
      of e.values())await t.then(i=>typeof i!="string"?i?.dispose():void 0);
      e.clear()
    }
    this._tunnels.clear()
  }
  setEnvironmentTunnel(e, t, i, r, s){
    this.addTunnelToMap(e, t, Promise.resolve({
      tunnelRemoteHost:e,tunnelRemotePort:t,localAddress:i,privacy:r,protocol:s,dispose:()=>Promise.resolve()
    }))
  }
  async getExistingTunnel(e, t){
    (rnt(e)||int(e))&&(e=Amn[0]);
    const i=this.getTunnelFromMap(e, t);
    if(i)return++i.refcount, i.value
  }
  openTunnel(e, t, i, r, s, o=!1, a, l){
    this.logService.trace(`ForwardedPorts: (TunnelService) openTunnel request for ${t}:${i} on local port ${s}.`);
    const u=this._tunnelProvider??e;
    if(!u)return;
    if(t||(t="localhost"), r||(r=this.defaultTunnelHost), this._tunnelProvider&&this._factoryInProgress.has(i)){
      this.logService.debug("ForwardedPorts: (TunnelService) Another call to create a tunnel with the same address has occurred before the last one completed. This call will be ignored.");
      return
    }
    const d=this.retainOrCreateTunnel(u, t, i, r, s, o, a, l);
    return d?d.then(m=>{
      if(m){
        if(typeof m=="string")return this.logService.trace("ForwardedPorts: (TunnelService) The tunnel provider returned an error when creating the tunnel."),this.removeEmptyOrErrorTunnelFromMap(t,i),m
      }
      else{
        this.logService.trace("ForwardedPorts: (TunnelService) New tunnel is undefined."),this.removeEmptyOrErrorTunnelFromMap(t,i);
        return
      }
      this.logService.trace("ForwardedPorts: (TunnelService) New tunnel established.");
      const p=this.makeTunnel(m);
      return(m.tunnelRemoteHost!==t||m.tunnelRemotePort!==i)&&this.logService.warn("ForwardedPorts: (TunnelService) Created tunnel does not match requirements of requested tunnel. Host or port mismatch."),a&&m.privacy!==a&&this.logService.warn("ForwardedPorts: (TunnelService) Created tunnel does not match requirements of requested tunnel. Privacy mismatch."),this._onTunnelOpened.fire(p),p
    }):(this.logService.trace("ForwardedPorts: (TunnelService) Tunnel was not created."), d)
  }
  makeTunnel(e){
    return{
      tunnelRemotePort:e.tunnelRemotePort,tunnelRemoteHost:e.tunnelRemoteHost,tunnelLocalPort:e.tunnelLocalPort,localAddress:e.localAddress,privacy:e.privacy,protocol:e.protocol,dispose:async()=>{
        this.logService.trace(`ForwardedPorts: (TunnelService) dispose request for ${e.tunnelRemoteHost}:${e.tunnelRemotePort} `);
        const t=this._tunnels.get(e.tunnelRemoteHost);
        if(t){
          const i=t.get(e.tunnelRemotePort);
          i&&(i.refcount--,await this.tryDisposeTunnel(e.tunnelRemoteHost,e.tunnelRemotePort,i))
        }
      }
    }
  }
  async tryDisposeTunnel(e, t, i){
    if(i.refcount<=0){
      this.logService.trace(`ForwardedPorts: (TunnelService) Tunnel is being disposed ${e}:${t}.`);
      const r=i.value.then(async s=>{
        s&&typeof s!="string"&&(await s.dispose(!0),this._onTunnelClosed.fire({
          host:s.tunnelRemoteHost,port:s.tunnelRemotePort
        }))
      });
      return this._tunnels.has(e)&&this._tunnels.get(e).delete(t),r
    }
  }
  async closeTunnel(e, t){
    this.logService.trace(`ForwardedPorts: (TunnelService) close request for ${e}:${t} `);
    const i=this._tunnels.get(e);
    if(i&&i.has(t)){
      const r=i.get(t);
      r.refcount=0,await this.tryDisposeTunnel(e,t,r)
    }
  }
  addTunnelToMap(e, t, i){
    this._tunnels.has(e)||this._tunnels.set(e, new Map), this._tunnels.get(e).set(t, {
      refcount:1,value:i
    })
  }
  async removeEmptyOrErrorTunnelFromMap(e, t){
    const i=this._tunnels.get(e);
    if(i){
      const r=i.get(t),s=r?await r.value:void 0;
      (!s||typeof s=="string")&&i.delete(t),i.size===0&&this._tunnels.delete(e)
    }
  }
  getTunnelFromMap(e, t){
    const i=[e];
    int(e)?(i.push(...Amn), i.push(...qvi)):rnt(e)&&i.push(...qvi);
    const r=i.map(s=>this._tunnels.get(s));
    for(const s of r){
      const o=s?.get(t);
      if(o)return o
    }
  }
  canTunnel(e){
    return!!Gfa(e)
  }
  createWithProvider(e, t, i, r, s, o, a){
    this.logService.trace(`ForwardedPorts: (TunnelService) Creating tunnel with provider ${t}:${i} on local port ${r}.`);
    const l=i;
    this._factoryInProgress.add(l);
    const u=r===void 0?i:r, d={
      elevationRequired:s?this.isPortPrivileged(u):!1
    }, m={
      remoteAddress:{
        host:t,port:i
      },localAddressPort:r,privacy:o,public:o?o!==tX.Private:void 0,protocol:a
    }, p=e.forwardPort(m, d);
    return p?(this.addTunnelToMap(t, i, p), p.finally(()=>{
      this.logService.trace("ForwardedPorts: (TunnelService) Tunnel created by provider."),this._factoryInProgress.delete(l)
    })):this._factoryInProgress.delete(l), p
  }
}, Wfa=__decorate([__param(0, Rr), __param(1, Fn)], Wfa)
}
}), fce, Aye=
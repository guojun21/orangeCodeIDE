// Module: out-build/vs/workbench/services/path/common/pathService.js
// Offset: 27519318 (bundle byte offset)
// Size: 1661 bytes

d2(), zr(), Hl(), _r(), Yr(), Yn(), Wt(), hce(), ps(), eu(), Wf(), kp=xi("pathService"), Nfa=hru=class{
  constructor(e, t, i, r){
    this.localUserHome=e, this.remoteAgentService=t, this.environmentService=i, this.contextService=r, this.resolveOS=(async()=>(await this.remoteAgentService.getEnvironment())?.os||cf)(), this.resolveUserHome=(async()=>{
      const s=await this.remoteAgentService.getEnvironment();
      return this.maybeUnresolvedUserHome=s?.userHome??e
    })()
  }
  hasValidBasename(e, t, i){
    return typeof t=="string"||typeof t>"u"?this.resolveOS.then(r=>this.doHasValidBasename(e, r, t)):this.doHasValidBasename(e, t, i)
  }
  doHasValidBasename(e, t, i){
    return e.scheme===_n.file||e.scheme===_n.vscodeRemote?X0c(i??ca(e), t===1):!0
  }
  get defaultUriScheme(){
    return hru.findDefaultUriScheme(this.environmentService, this.contextService)
  }
  static findDefaultUriScheme(e, t){
    if(e.remoteAuthority)return _n.vscodeRemote;
    const i=dJg(t.getWorkspace());
    if(i)return i;
    const r=t.getWorkspace().folders[0];
    if(r)return r.uri.scheme;
    const s=t.getWorkspace().configuration;
    return s?s.scheme:_n.file
  }
  userHome(e){
    return e?.preferLocal?this.localUserHome:this.resolveUserHome
  }
  get resolvedUserHome(){
    return this.maybeUnresolvedUserHome
  }
  get path(){
    return this.resolveOS.then(e=>e===1?iE:Rm)
  }
  async fileURI(e){
    let t="";
    if(await this.resolveOS===1&&(e=e.replace(/\\/g, "/")), e[0]==="/"&&e[1]==="/"){
      const r=e.indexOf("/",2);
      r===-1?(t=e.substring(2),e="/"):(t=e.substring(2,r),e=e.substring(r)||"/")
    }
    return je.from({
      scheme:_n.file,authority:t,path:e,query:"",fragment:""
    })
  }
}, Nfa=hru=__decorate([__param(1, Vp), __param(2, Cc), __param(3, Lr)], Nfa)
}
}), JA, M$e, z0=
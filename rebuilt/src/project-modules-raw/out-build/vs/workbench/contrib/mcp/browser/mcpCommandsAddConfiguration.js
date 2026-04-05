// Module: out-build/vs/workbench/contrib/mcp/browser/mcpCommandsAddConfiguration.js
// Offset: 31023007 (bundle byte offset)
// Size: 7518 bytes

GD(), Lv(), vr(), zpn(), rt(), Uc(), Yr(), Yn(), Bc(), Ht(), hs(), Ei(), ns(), So(), Kl(), Pa(), ps(), Qme(), ss(), eu(), j_i(), _it(), oIf(), (function(n){
  n[n.Stdio=0]="Stdio", n[n.SSE=1]="SSE", n[n.NpmPackage=2]="NpmPackage", n[n.PipPackage=3]="PipPackage", n[n.DockerImage=4]="DockerImage"
})(iIf||(iIf={
  
})), tSa={
  2:{
    title:_(8687, null), placeholder:_(8688, null), pickLabel:_(8689, null), pickDescription:_(8690, null)
  }, 3:{
    title:_(8691, null), placeholder:_(8692, null), pickLabel:_(8693, null), pickDescription:_(8694, null)
  }, 4:{
    title:_(8695, null), placeholder:_(8696, null), pickLabel:_(8697, null), pickDescription:_(8698, null)
  }
}, (function(n){
  n.IsSupported="github.copilot.chat.mcp.setup.check", n.ValidatePackage="github.copilot.chat.mcp.setup.validatePackage", n.StartFlow="github.copilot.chat.mcp.setup.flow"
})(rIf||(rIf={
  
})), $gn=class{
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g){
    this._explicitConfigUri=e, this._quickInputService=t, this._configurationService=i, this._jsonEditingService=r, this._workspaceService=s, this._environmentService=o, this._commandService=a, this._mcpRegistry=l, this._openerService=u, this._editorService=d, this._fileService=m, this._notificationService=p, this._telemetryService=g
  }
  async getServerType(){
    const e=[{
      kind:0,label:_(8699,null),description:_(8700,null)
    }, {
      kind:1,label:_(8701,null),description:_(8702,null)
    }
    ];
    let t;
    try{
      t=await this._commandService.executeCommand("github.copilot.chat.mcp.setup.check")
    }
    catch{
      
    }
    return t&&(e.unshift({
      type:"separator",label:_(8703,null)
    }), e.push({
      type:"separator",label:_(8704,null)
    }, ...Object.entries(tSa).map(([r, {
      pickLabel:s,pickDescription:o
    }
    ])=>({
      kind:Number(r),label:s,description:o
    })))), (await this._quickInputService.pick(e, {
      placeHolder:_(8705,null)
    }))?.kind
  }
  async getStdioConfig(){
    const e=await this._quickInputService.input({
      title:_(8706,null),placeHolder:_(8707,null),ignoreFocusLost:!0
    });
    if(!e)return;
    this._telemetryService.publicLog2("mcp.addserver", {
      packageType:"stdio"
    });
    const t=e.match(/(?:[^\s"]+|"[^"]*")+/g);
    return{
      type:"stdio",command:t[0].replace(/"/g,""),args:t.slice(1).map(i=>i.replace(/"/g,""))
    }
  }
  async getSSEConfig(){
    const e=await this._quickInputService.input({
      title:_(8708,null),placeHolder:_(8709,null),ignoreFocusLost:!0
    });
    if(e)return this._telemetryService.publicLog2("mcp.addserver", {
      packageType:"sse"
    }), {
      type:"sse",url:e
    }
  }
  async getServerId(e=`my-mcp-server-${Wr().split("-")[0]}`){
    return await this._quickInputService.input({
      title:_(8710,null),placeHolder:_(8711,null),value:e,ignoreFocusLost:!0
    })
  }
  async getConfigurationTarget(){
    const e=[{
      target:2,label:_(8712,null),description:_(8713,null)
    }
    ];
    return this._environmentService.remoteAuthority&&e.push({
      target:4,label:_(8714,null),description:_(8715,null)
    }), this._workspaceService.getWorkspace().folders.length>0&&e.push({
      target:5,label:_(8716,null),description:_(8717,null)
    }), e.length===1?e[0].target:(await this._quickInputService.pick(e, {
      title:_(8718,null)
    }))?.target
  }
  async getAssistedConfig(e){
    const t=await this._quickInputService.input({
      ignoreFocusLost:!0,title:tSa[e].title,placeHolder:tSa[e].placeholder
    });
    if(!t)return;
    let i;
    (function(m){
      m.Retry="retry",m.Cancel="cancel",m.Allow="allow"
    })(i||(i={
      
    }));
    const s=new Ut().add(this._quickInputService.createQuickPick());
    s.title=_(8719, null), s.busy=!0, s.ignoreFocusOut=!0;
    const o=this.getPackageType(e);
    switch(this._telemetryService.publicLog2("mcp.addserver", {
      packageType:o
    }), this._commandService.executeCommand("github.copilot.chat.mcp.setup.validatePackage", {
      type:o,name:t,targetConfig:{
        ...Q_i,properties:{
          ...Q_i.properties,name:{
            type:"string",description:"Suggested name of the server, alphanumeric and hyphen only"
          }
        },required:[...Q_i.required||[],"name"]
      }
    }).then(m=>{
      !m||m.state==="error"?(s.title=m?.error||"Unknown error loading package",s.items=[{
        id:"retry",label:_(8720,null)
      },{
        id:"cancel",label:_(8721,null)
      }
      ]):(s.title=_(8722,null,t,m.publisher),s.items=[{
        id:"allow",label:_(8723,null)
      },{
        id:"cancel",label:_(8724,null)
      }
      ]),s.busy=!1
    }), await new Promise(m=>{
      s.onDidAccept(()=>m(s.selectedItems[0]?.id)),s.onDidHide(()=>m(void 0)),s.show()
    }).finally(()=>s.dispose())){
      case"retry":return this.getAssistedConfig(e);
      case"allow":break;
      case"cancel":default:return
    }
    const l=await this._commandService.executeCommand("github.copilot.chat.mcp.setup.flow", {
      name:t,type:o
    });
    if(!l)return;
    const{
      name:u,...d
    }
    =l;
    return{
      name:u,config:d
    }
  }
  showOnceDiscovered(e){
    const t=new Ut;
    t.add(Oc(i=>{
      const r=this._mcpRegistry.collections.read(i),s=TFt(r,o=>TFt(o.serverDefinitions.read(i),a=>a.label===e?{
        server:a,collection:o
      }
      :void 0));
      s&&(s.collection.presentation?.origin?this._openerService.openEditor({
        resource:s.collection.presentation.origin,options:{
          selection:s.server.presentation?.origin?.range,preserveFocus:!0
        }
      }):this._commandService.executeCommand(rSa.id,e),t.dispose())
    })), t.add(nC(()=>t.dispose(), 5e3))
  }
  writeToUserSetting(e, t, i, r){
    const s={
      ...ArA(this._configurationService.inspect(Ugn),i)
    };
    return s.servers={
      ...s.servers,[e]:t
    }, r&&(s.inputs=[...s.inputs||[], ...r]), this._configurationService.updateValue(Ugn, s, i)
  }
  async run(){
    const e=await this.getServerType();
    if(e===void 0)return;
    let t, i;
    switch(e){
      case 0:t=await this.getStdioConfig();
      break;
      case 1:t=await this.getSSEConfig();
      break;
      case 2:case 3:case 4:{
        const u=await this.getAssistedConfig(e);
        t=u?.config,i=u?.name;
        break
      }
      default:QN(e)
    }
    if(!t)return;
    const r=await this.getServerId(i);
    if(!r)return;
    let s;
    const o=this._workspaceService.getWorkspace();
    if(!this._explicitConfigUri&&(s=await this.getConfigurationTarget(), !s))return;
    const a=this._explicitConfigUri?je.parse(this._explicitConfigUri):s===5&&o.folders.length===1?je.joinPath(o.folders[0].uri, ".vscode", "mcp.json"):void 0;
    a?await this._jsonEditingService.write(a, [{
      path:["servers",r],value:t
    }
    ], !0):await this.writeToUserSetting(r, t, s);
    const l=this.getPackageType(e);
    l&&this._telemetryService.publicLog2("mcp.addserver.completed", {
      packageType:l,serverType:t.type,target:s===5?"workspace":"user"
    }), this.showOnceDiscovered(r)
  }
  async pickForUrlHandler(e, t=!1){
    const i=decodeURIComponent(ca(e)).replace(/\.json$/, ""), r=_(8725, null, i), s=[{
      id:"install",label:_(8726,null),description:_(8727,null)
    }, {
      id:"show",label:_(8728,null,i)
    }, {
      id:"rename",label:_(8729,null,i)
    }, {
      id:"cancel",label:_(8730,null)
    }
    ];
    t&&([s[0], s[1]]=[s[1], s[0]]);
    const o=await this._quickInputService.pick(s, {
      placeHolder:r,ignoreFocusLost:!0
    }), a=()=>this._editorService.getEditors(0).filter(l=>l.editor.resource?.toString()===e.toString());
    switch(o?.id){
      case"show":await this._editorService.openEditor({
        resource:e
      });
      break;
      case"install":await this._editorService.save(a());
      try{
        const l=await this._fileService.readFile(e),{
          inputs:u,...d
        }
        =Okt(l.value.toString());
        await this.writeToUserSetting(i,d,3,u),this._editorService.closeEditors(a()),this.showOnceDiscovered(i)
      }
      catch(l){
        this._notificationService.error(_(8731,null,i,l.message)),await this._editorService.openEditor({
          resource:e
        })
      }
      break;
      case"rename":{
        const l=await this._quickInputService.input({
          placeHolder:_(8732,null),value:i
        });
        if(l){
          const u=e.with({
            path:`/${encodeURIComponent(l)}.json`
          });
          return await this._editorService.save(a()),await this._fileService.move(e,u),this.pickForUrlHandler(u,t)
        }
        break
      }
    }
  }
  getPackageType(e){
    switch(e){
      case 2:return"npm";
      case 3:return"pip";
      case 4:return"docker";
      case 0:return"stdio";
      case 1:return"sse";
      default:return
    }
  }
}, $gn=__decorate([__param(1, ha), __param(2, Fn), __param(3, bX), __param(4, Lr), __param(5, Cc), __param(6, fr), __param(7, Wme), __param(8, yi), __param(9, yi), __param(10, Gr), __param(11, ms), __param(12, ea)], $gn)
}
}), xgu, qgn, z_i, Tgu=
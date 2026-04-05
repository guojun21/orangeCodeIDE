// Module: out-build/vs/workbench/services/agentData/browser/mentionsCapabilityService.js
// Offset: 28501257 (bundle byte offset)
// Size: 6533 bytes

iX(), cu(), zr(), Yr(), qg(), Dd(), ps(), IAa(), Vw(), uO(), Wu(), e5(), Byi(), Pf(), Nu(), O8A(), dMe=25, clu=class{
  constructor(n){
    this.workspace=n, this.didInitializeAnythingQuickAccessCaches=!1
  }
  getWorkspaceServicesForWorkspace(n){
    if(n)try{
      return n.instantiationService.invokeFunction(e=>{
        const t=r=>{
          try{
            return e.get(r)
          }
          catch{
            return
          }
        };
        return{
          anythingQuickAccessProvider:t(sqe)??(()=>{
            if(this.createdAnythingQuickAccessProvider)return this.createdAnythingQuickAccessProvider;
            try{
              return this.createdAnythingQuickAccessProvider=n.instantiationService.createInstance(sqe),this.createdAnythingQuickAccessProvider
            }
            catch{
              return
            }
          })(),workspaceContextService:t(Lr),cursorRulesService:t(FJ),aiService:t(Jv),terminalService:t(Jb),historyService:t(ek),reactiveStorageService:t(ku),experimentService:t(Tl),environmentService:t(lg)
        }
      })
    }
    catch{
      return
    }
  }
  getWorkspaceServices(){
    return this.getWorkspaceServicesForWorkspace(this.workspace)
  }
  async getWorkspaceServicesWithFallback(n=[]){
    const e=this.getWorkspaceServices();
    if(!e||!this.workspace)return{
      services:e,usedFallbackWorkspace:!1
    };
    if((e.workspaceContextService?.getWorkspace().folders.length??0)>0)return{
      services:e,usedFallbackWorkspace:!1
    };
    const i=this.workspace.instantiationService.invokeFunction(a=>{
      try{
        return a.get(ypn)
      }
      catch{
        return
      }
    });
    if(!i)return{
      services:e,usedFallbackWorkspace:!1
    };
    const r=i.getDiagnostics(), s=new Set, o=[];
    for(const a of n)s.has(a.id)||(s.add(a.id), o.push(a));
    for(const a of r.workspaces)s.has(a.workspaceId)||(s.add(a.workspaceId), o.push({
      id:a.workspaceId
    }));
    for(const a of o){
      if(a.id===this.workspace.workspaceIdentifier.id)continue;
      let l;
      try{
        l=await i.createWorkspaceReference(a);
        const u=this.getWorkspaceServicesForWorkspace(l.object),d=u?.workspaceContextService?.getWorkspace().folders.length??0;
        if(!u||d===0){
          l.dispose();
          continue
        }
        return{
          services:u,dispose:()=>l?.dispose(),usedFallbackWorkspace:!0
        }
      }
      catch{
        l?.dispose()
      }
    }
    return{
      services:e,usedFallbackWorkspace:!1
    }
  }
  buildFileMentionItems(n, e, t){
    if(!e.workspaceContextService)return[];
    const i=[], r=new Set;
    for(const s of t){
      const o=s.resource;
      if(!o||!alu(o))continue;
      const a=o.toString();
      if(r.has(a))continue;
      r.add(a);
      const l=ca(o),u=e.workspaceContextService.asRelativePath(Td(o)),d=e.workspaceContextService.asRelativePath(o),m=u||void 0;
      if(i.push({
        id:`file:${a}`,label:l,rawText:d||o.path||l,type:"file",description:m,payload:{
          case:"fileSelection",uri:o.toJSON()
        }
      }),i.length>=dMe)break
    }
    if(!n&&i.length<dMe&&e.historyService)for(const s of e.historyService.getHistory()){
      const o=xq(s)?s.resource:gp.getOriginalUri(s);
      if(!o||!alu(o))continue;
      const a=o.toString();
      if(r.has(a))continue;
      r.add(a);
      const l=ca(o),u=e.workspaceContextService.asRelativePath(Td(o)),d=e.workspaceContextService.asRelativePath(o),m=u||void 0;
      if(i.push({
        id:`file:${a}`,label:l,rawText:d||o.path||l,type:"file",description:m,payload:{
          case:"fileSelection",uri:o.toJSON()
        }
      }),i.length>=dMe)break
    }
    return i
  }
  buildFolderMentionItems(n, e, t){
    if(!e.workspaceContextService)return[];
    const i=[], r=new Set;
    for(const s of t){
      const o=s.resource;
      if(!o||!alu(o))continue;
      const a=Td(o),u=e.workspaceContextService.asRelativePath(a)||ca(a);
      if(!u||r.has(u))continue;
      r.add(u);
      const d=ca(a),m=u;
      if(i.push({
        id:`folder:${u}`,label:d,rawText:u,type:"folder",description:m,payload:{
          case:"folderSelection",relativePath:u
        }
      }),i.length>=dMe)break
    }
    if(!n&&i.length<dMe)for(const s of e.workspaceContextService.getWorkspace().folders){
      const o=s.uri,l=e.workspaceContextService.asRelativePath(o)||s.name||ca(o);
      if(!(!l||r.has(l))&&(r.add(l),i.push({
        id:`folder:${l}`,label:s.name||ca(o),rawText:l,type:"folder",description:l,payload:{
          case:"folderSelection",relativePath:l
        }
      }),i.length>=dMe))break
    }
    return i
  }
  async getSharedMentionFilePicks(n, e, t){
    if(!e.anythingQuickAccessProvider)return[];
    this.didInitializeAnythingQuickAccessCaches||(e.anythingQuickAccessProvider.initializeCaches(), this.didInitializeAnythingQuickAccessCaches=!0);
    let i=await e.anythingQuickAccessProvider.getFilePicks(o8(n), new fu, t);
    return!n&&i.length===0&&(i=await e.anythingQuickAccessProvider.getFilePicks(o8("."), new fu, t)), i
  }
  async getDocMentionItems(n, e){
    if(!e.reactiveStorageService||!e.aiService)return[];
    const t=e.reactiveStorageService.applicationUserPersistentStorage.personalDocs.map(s=>s.identifier), i=await e.aiService.availableDocs({
      additionalDocIdentifiers:t
    }), r=[];
    for(const s of i){
      const o=s.docIdentifier,a=s.metadata?.docName??"";
      if(!o||!a)continue;
      const l=s.metadata?.prefixUrl;
      if(olu(n,a,l)&&(r.push({
        id:`doc:${o}`,label:a,type:"doc",description:s.metadata?.public?"Official":void 0,secondaryText:l,payload:{
          case:"docSelection",docId:o,name:a,url:l
        }
      }),r.length>=dMe))break
    }
    return r
  }
  async getCursorRuleMentionItems(n, e){
    if(!e.cursorRulesService)return[];
    const t=await e.cursorRulesService.getAllRules(), i=[];
    for(const r of t){
      const s=r.filename;
      if(!s.endsWith(".mdc"))continue;
      const o=s.replace(/\.mdc$/i,"");
      if(olu(n,o,r.description)&&(i.push({
        id:`cursor-rule:${s}`,label:o,type:"cursorRule",description:r.description,payload:{
          case:"cursorRule",filename:s
        }
      }),i.length>=dMe))break
    }
    return i
  }
  async getTerminalMentionItems(n, e){
    if(!e.terminalService)return[];
    const t=[], i=new Set;
    for(const r of e.terminalService.instances){
      const s=r.resource;
      if(!s)continue;
      const o=s.toString();
      if(i.has(o))continue;
      i.add(o);
      const a=r.title||"Terminal";
      let l;
      try{
        l=await e.terminalService.getTerminalFilePathFromResource(s)
      }
      catch{
        l=void 0
      }
      const u=l||void 0;
      if(olu(n,a,u)&&(t.push({
        id:`terminal:${o}`,label:a,rawText:l||a,type:"terminal",description:u,payload:{
          case:"terminalFile",uri:s.toJSON(),text:a,terminalFilePath:l
        }
      }),t.length>=dMe))break
    }
    return t
  }
  async getMentionItems(n){
    const{
      services:e,dispose:t
    }
    =await this.getWorkspaceServicesWithFallback(), i=e?.environmentService!=null?e.environmentService.isExtensionDevelopment||!e.environmentService.isBuilt:!1, r=e?.experimentService!=null?F8A(e.experimentService, {
      forceEnableInDevBuild:i
    }):!0;
    if(!e||!r)return t?.(), [];
    try{
      if(n.cancellationToken.isCancellationRequested)return[];
      const s=U8A(n.query),o=await this.getSharedMentionFilePicks(s,e,n.cancellationToken).catch(()=>[]);
      if(n.cancellationToken.isCancellationRequested)return[];
      const a=this.buildFileMentionItems(s,e,o),l=this.buildFolderMentionItems(s,e,o);
      return[...a,...l]
    }
    finally{
      t?.()
    }
  }
  getMentionKindLabel(n){
    switch(n){
      case"file":return"File";
      case"folder":return"Folder";
      case"doc":return"Doc";
      case"cursorRule":return"Cursor Rule";
      case"terminal":return"Terminal";
      default:{
        const e=n;
        return"Unknown"
      }
    }
  }
}
}
}), hMe, Hnt=
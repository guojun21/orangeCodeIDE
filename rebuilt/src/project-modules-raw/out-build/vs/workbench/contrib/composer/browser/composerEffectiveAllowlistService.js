// Module: out-build/vs/workbench/contrib/composer/browser/composerEffectiveAllowlistService.js
// Offset: 30378423 (bundle byte offset)
// Size: 3400 bytes

yn(), zpn(), rt(), Wt(), Er(), ns(), _d(), aie(), Rl(), _g(), Dd(), Xpn=xi("composerEffectiveAllowlistService"), s0a=class extends at{
  constructor(e, t, i, r, s){
    super(), this._fileService=e, this._pathService=t, this._productService=i, this._uriIdentityService=r, this._reactiveStorageService=s, this._onDidChangePermissionsFile=this._register(new Qe), this.onDidChangePermissionsFile=this._onDidChangePermissionsFile.event, this._permissionsFileAllowlists={
      mcp:[],terminal:[]
    }, this._loadPermissionsFile(), this._register(this._fileService.onDidFilesChange(o=>this._onDidFilesChange(o)))
  }
  async _onDidFilesChange(e){
    const t=await this._getPermissionsFilePath();
    e.affects(t)&&await this._loadPermissionsFile()
  }
  async _getPermissionsFilePath(){
    const e=await this._pathService.userHome({
      preferLocal:!1
    }), t=this._productService.dataFolderName??".cursor";
    return this._uriIdentityService.extUri.joinPath(e, t, "permissions.json")
  }
  async _loadPermissionsFile(){
    try{
      const e=await this._getPermissionsFilePath();
      if(!await this._fileService.exists(e)){
        this._permissionsFileAllowlists={
          mcp:[],terminal:[]
        },this._onDidChangePermissionsFile.fire();
        return
      }
      const i=await this._fileService.readFile(e),r=Okt(i.value.toString()),s=Array.isArray(r.mcpAllowlist)?r.mcpAllowlist.filter(a=>typeof a=="string"):[],o=Array.isArray(r.terminalAllowlist)?r.terminalAllowlist.filter(a=>typeof a=="string"):[];
      this._permissionsFileAllowlists={
        mcp:s,terminal:o
      },this._onDidChangePermissionsFile.fire()
    }
    catch{
      this._permissionsFileAllowlists={
        mcp:[],terminal:[]
      },this._onDidChangePermissionsFile.fire()
    }
  }
  getPermissionsFileMcpAllowlist(){
    return this._permissionsFileAllowlists.mcp
  }
  getPermissionsFileTerminalAllowlist(){
    return this._permissionsFileAllowlists.terminal
  }
  getEffectiveMcpAllowlist(){
    const e=wU(), t=e.mcpAllowedTools??[], i=this._permissionsFileAllowlists.mcp;
    return e.isAdminControlled?t:i.length>0?i:t
  }
  getEffectiveTerminalAllowlist(){
    const e=wU(), t=e.allowedCommands??[], i=this._reactiveStorageService.applicationUserPersistentStorage.composerState.yoloCommandAllowlist??[], r=this._permissionsFileAllowlists.terminal;
    return e.isAdminControlled?t:r.length>0?r:i
  }
  canAddToAllowlistFromIde(e){
    return wU().isAdminControlled?!1:e==="mcp"?this._permissionsFileAllowlists.mcp.length===0:this._permissionsFileAllowlists.terminal.length===0
  }
}, s0a=__decorate([__param(0, Gr), __param(1, kp), __param(2, za), __param(3, xl), __param(4, ku)], s0a), Vi(Xpn, s0a, 1)
}
});
function o0a(n, e, t){
  const i=new Set, r=e.composerId;
  return wSf(n, e, r, t, i, void 0)
}
function wSf(n, e, t, i, r, s){
  if(r.has(t)||(r.add(t), !n.getComposerData(e)))return;
  const a=n.getToolFormer(e);
  if(!a)return;
  const l=a.getBubbleIdByToolCallId(i);
  if(l)return{
    composerHandle:e, bubbleId:l, rootBubbleId:s
  };
  const u=n.getLoadedConversation(e);
  if(!u||u.length===0)return;
  const d=[];
  for(let m=u.length-1;
  m>=0;
  m--){
    const p=u[m];
    if(!(p.capabilityType===void 0&&p.text===""))if(p.capabilityType===ko.TOOL_FORMER)d.push(p);
    else break
  }
  for(const m of d){
    const p=m.toolFormerData;
    if(!p||p.tool!==an.TASK_V2)continue;
    const g=p.additionalData?.status;
    if(!uty(g))continue;
    const f=p.additionalData?.composerData;
    if(!f?.composerId)continue;
    const A=p.params?.model, w=qmn(n, e, m.bubbleId, f.composerId, A), C=wSf(n, w, f.composerId, i, r, s??m.bubbleId);
    if(C)return C
  }
}
function uty(n){
  return n==="pending"||n==="loading"||n==="running"
}
var _Sf=
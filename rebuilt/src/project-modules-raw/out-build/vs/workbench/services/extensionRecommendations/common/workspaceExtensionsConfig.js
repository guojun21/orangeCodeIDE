// Module: out-build/vs/workbench/services/extensionRecommendations/common/workspaceExtensionsConfig.js
// Offset: 32604367 (bundle byte offset)
// Size: 8402 bytes

Vs(), yn(), aB(), rt(), oR(), ns(), Er(), Wt(), ps(), Kl(), hd(), Ku(), Ht(), Qme(), cu(), X1t=".vscode/extensions.json", irt=xi("IWorkspaceExtensionsConfigService"), PEa=class extends at{
  constructor(e, t, i, r, s, o){
    super(), this.workspaceContextService=e, this.fileService=t, this.quickInputService=i, this.modelService=r, this.languageService=s, this.jsonEditingService=o, this._onDidChangeExtensionsConfigs=this._register(new Qe), this.onDidChangeExtensionsConfigs=this._onDidChangeExtensionsConfigs.event, this._register(e.onDidChangeWorkspaceFolders(a=>this._onDidChangeExtensionsConfigs.fire())), this._register(t.onDidFilesChange(a=>{
      const l=e.getWorkspace();
      (l.configuration&&a.affects(l.configuration)||l.folders.some(u=>a.affects(u.toResource(X1t))))&&this._onDidChangeExtensionsConfigs.fire()
    }))
  }
  async getExtensionsConfigs(){
    const e=this.workspaceContextService.getWorkspace(), t=[], i=e.configuration?await this.resolveWorkspaceExtensionConfig(e.configuration):void 0;
    return i&&t.push(i), t.push(...await Promise.all(e.folders.map(r=>this.resolveWorkspaceFolderExtensionConfig(r)))), t
  }
  async getRecommendations(){
    const e=await this.getExtensionsConfigs();
    return xb(e.flatMap(t=>t.recommendations?t.recommendations.map(i=>i.toLowerCase()):[]))
  }
  async getUnwantedRecommendations(){
    const e=await this.getExtensionsConfigs();
    return xb(e.flatMap(t=>t.unwantedRecommendations?t.unwantedRecommendations.map(i=>i.toLowerCase()):[]))
  }
  async toggleRecommendation(e){
    e=e.toLowerCase();
    const t=this.workspaceContextService.getWorkspace(), i=t.configuration?await this.resolveWorkspaceExtensionConfig(t.configuration):void 0, r=new fu;
    await Promise.all(t.folders.map(async u=>{
      const d=await this.resolveWorkspaceFolderExtensionConfig(u);
      r.set(u.uri,d)
    }));
    const s=i&&i.recommendations?.some(u=>u.toLowerCase()===e), o=t.folders.filter(u=>r.get(u.uri)?.recommendations?.some(d=>d.toLowerCase()===e)), a=s||o.length>0, l=a?await this.pickWorkspaceOrFolders(o, s?t:void 0, _(14123, null)):await this.pickWorkspaceOrFolders(t.folders, t.configuration?t:void 0, _(14124, null));
    for(const u of l)bOt(u)?await this.addOrRemoveWorkspaceRecommendation(e, u, i, !a):await this.addOrRemoveWorkspaceFolderRecommendation(e, u, r.get(u.uri), !a)
  }
  async toggleUnwantedRecommendation(e){
    const t=this.workspaceContextService.getWorkspace(), i=t.configuration?await this.resolveWorkspaceExtensionConfig(t.configuration):void 0, r=new fu;
    await Promise.all(t.folders.map(async u=>{
      const d=await this.resolveWorkspaceFolderExtensionConfig(u);
      r.set(u.uri,d)
    }));
    const s=i&&i.unwantedRecommendations?.some(u=>u===e), o=t.folders.filter(u=>r.get(u.uri)?.unwantedRecommendations?.some(d=>d===e)), a=s||o.length>0, l=a?await this.pickWorkspaceOrFolders(o, s?t:void 0, _(14125, null)):await this.pickWorkspaceOrFolders(t.folders, t.configuration?t:void 0, _(14126, null));
    for(const u of l)bOt(u)?await this.addOrRemoveWorkspaceUnwantedRecommendation(e, u, i, !a):await this.addOrRemoveWorkspaceFolderUnwantedRecommendation(e, u, r.get(u.uri), !a)
  }
  async addOrRemoveWorkspaceFolderRecommendation(e, t, i, r){
    const s=[];
    if(r){
      Array.isArray(i.recommendations)?s.push({
        path:["recommendations",-1],value:e
      }):s.push({
        path:["recommendations"],value:[e]
      });
      const o=this.getEditToRemoveValueFromArray(["unwantedRecommendations"],i.unwantedRecommendations,e);
      o&&s.push(o)
    }
    else if(i.recommendations){
      const o=this.getEditToRemoveValueFromArray(["recommendations"],i.recommendations,e);
      o&&s.push(o)
    }
    if(s.length)return this.jsonEditingService.write(t.toResource(X1t), s, !0)
  }
  async addOrRemoveWorkspaceRecommendation(e, t, i, r){
    const s=[];
    if(i){
      if(r){
        const o=["extensions","recommendations"];
        Array.isArray(i.recommendations)?s.push({
          path:[...o,-1],value:e
        }):s.push({
          path:o,value:[e]
        });
        const a=this.getEditToRemoveValueFromArray(["extensions","unwantedRecommendations"],i.unwantedRecommendations,e);
        a&&s.push(a)
      }
      else if(i.recommendations){
        const o=this.getEditToRemoveValueFromArray(["extensions","recommendations"],i.recommendations,e);
        o&&s.push(o)
      }
    }
    else r&&s.push({
      path:["extensions"],value:{
        recommendations:[e]
      }
    });
    if(s.length)return this.jsonEditingService.write(t.configuration, s, !0)
  }
  async addOrRemoveWorkspaceFolderUnwantedRecommendation(e, t, i, r){
    const s=[];
    if(r){
      const o=["unwantedRecommendations"];
      Array.isArray(i.unwantedRecommendations)?s.push({
        path:[...o,-1],value:e
      }):s.push({
        path:o,value:[e]
      });
      const a=this.getEditToRemoveValueFromArray(["recommendations"],i.recommendations,e);
      a&&s.push(a)
    }
    else if(i.unwantedRecommendations){
      const o=this.getEditToRemoveValueFromArray(["unwantedRecommendations"],i.unwantedRecommendations,e);
      o&&s.push(o)
    }
    if(s.length)return this.jsonEditingService.write(t.toResource(X1t), s, !0)
  }
  async addOrRemoveWorkspaceUnwantedRecommendation(e, t, i, r){
    const s=[];
    if(i){
      if(r){
        const o=["extensions","unwantedRecommendations"];
        Array.isArray(i.recommendations)?s.push({
          path:[...o,-1],value:e
        }):s.push({
          path:o,value:[e]
        });
        const a=this.getEditToRemoveValueFromArray(["extensions","recommendations"],i.recommendations,e);
        a&&s.push(a)
      }
      else if(i.unwantedRecommendations){
        const o=this.getEditToRemoveValueFromArray(["extensions","unwantedRecommendations"],i.unwantedRecommendations,e);
        o&&s.push(o)
      }
    }
    else r&&s.push({
      path:["extensions"],value:{
        unwantedRecommendations:[e]
      }
    });
    if(s.length)return this.jsonEditingService.write(t.configuration, s, !0)
  }
  async pickWorkspaceOrFolders(e, t, i){
    const r=t?[...e, t]:[...e];
    if(r.length===1)return r;
    const s=e.map(a=>({
      label:a.name,description:_(14127,null),workspaceOrFolder:a,iconClasses:yS(this.modelService,this.languageService,a.uri,xg.ROOT_FOLDER)
    }));
    return t&&(s.push({
      type:"separator"
    }), s.push({
      label:_(14128,null),workspaceOrFolder:t
    })), (await this.quickInputService.pick(s, {
      placeHolder:i,canPickMany:!0
    })||[]).map(a=>a.workspaceOrFolder)
  }
  async resolveWorkspaceExtensionConfig(e){
    try{
      const t=await this.fileService.readFile(e),i=L1(t.value.toString()).extensions;
      return i?this.parseExtensionConfig(i):void 0
    }
    catch{
      
    }
  }
  async resolveWorkspaceFolderExtensionConfig(e){
    try{
      const t=await this.fileService.readFile(e.toResource(X1t)),i=L1(t.value.toString());
      return this.parseExtensionConfig(i)
    }
    catch{
      
    }
    return{
      
    }
  }
  parseExtensionConfig(e){
    return{
      recommendations:xb((e.recommendations||[]).map(t=>t.toLowerCase())),unwantedRecommendations:xb((e.unwantedRecommendations||[]).map(t=>t.toLowerCase()))
    }
  }
  getEditToRemoveValueFromArray(e, t, i){
    const r=t?.indexOf(i);
    if(r!==void 0&&r!==-1)return{
      path:[...e,r],value:void 0
    }
  }
}, PEa=__decorate([__param(0, Lr), __param(1, Gr), __param(2, ha), __param(3, Il), __param(4, Jl), __param(5, bX)], PEa), Vi(irt, PEa, 1)
}
});
function syu(){
  const n=Di.as(Dh.Configuration).getConfigurationProperties();
  return Object.keys(n).filter(e=>!!n[e].disallowSyncIgnore)
}
function Qfn(n=!1){
  const e=Di.as(Dh.Configuration).getConfigurationProperties(), t=Ely(e, n), i=syu();
  return xb([...t, ...i])
}
function Ely(n, e){
  const t=new Set;
  for(const i in n){
    if(e&&n[i].source)continue;
    const r=Qo(n[i].scope)?rlh(n[i].scope):n[i].scope;
    (n[i].ignoreSync||r===2||r===7)&&t.add(i)
  }
  return[...t.values()]
}
function xly(){
  const n="vscode://schemas/ignoredSettings", e=Di.as(Dh.Configuration);
  e.registerConfiguration({
    id:"settingsSync", order:30, title:_(2641, null), type:"object", properties:{
      [C3f]:{
        type:"boolean",description:_(2642,null),default:!0,scope:1,tags:["sync","usesOnlineServices"]
      },"settingsSync.ignoredExtensions":{
        type:"array",markdownDescription:_(2643,null),items:[{
          type:"string",pattern:tnt,errorMessage:_(2644,null)
        }
        ],default:[],scope:1,uniqueItems:!0,disallowSyncIgnore:!0,tags:["sync","usesOnlineServices"]
      },"settingsSync.ignoredSettings":{
        type:"array",description:_(2645,null),default:[],scope:1,$ref:n,additionalProperties:!0,uniqueItems:!0,disallowSyncIgnore:!0,tags:["sync","usesOnlineServices"]
      }
    }
  });
  const t=Di.as(KN.JSONContribution), i=()=>{
    const r=syu(), s=Qfn(), o=Object.keys(rz.properties).filter(u=>!s.includes(u)), a=s.filter(u=>!r.includes(u)), l={
      items:{
        type:"string",enum:[...o,...a.map(u=>`-${u}`)]
      }
    };
    t.registerSchema(n, l)
  };
  return e.onDidUpdateConfiguration(()=>i())
}
function Tly(n){
  return n&&$g(n)&&Qo(n.id)&&Array.isArray(n.scopes)
}
function w3f(n, ...e){
  return n?[n, ...e]:e
}
function oyu(n, e, t, i){
  return i.joinPath(t.userDataSyncHome, ...w3f(n, e, `lastSync${e}.json`))
}
function ayu(n){
  const e={
    
  };
  return e[cyu]=n, e
}
function RCi(n){
  return`sync.enable.${n}`
}
var _3f, C3f, S3f, PCi, rrt, srt, jfn, t2e, cyu, k3f, s7, BM, E3f, x3f, T3f, u7e, RM, Wce, LCi, n2e, NCi, Qce, MCi, jce, I3f, xk=
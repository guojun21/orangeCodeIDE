// Module: out-build/vs/platform/cursor/browser/aiEverythingProviderService.js
// Offset: 27594444 (bundle byte offset)
// Size: 4974 bytes

yn(), rt(), Er(), Wt(), AU=xi("everythingProviderService"), bJg=class extends at{
  constructor(){
    super(), this._onDidChangeCommandProvider=this._register(new Qe), this.onDidChangeCommandProvider=this._onDidChangeCommandProvider.event, this._commandProviderGeneration=0, this._routerProvider={
      supportedCommands:[],runCommand:(n,e,t)=>{
        const i=this._commandMap.get(n);
        return i?i.provider.runCommand(n,e,t):Promise.resolve(void 0)
      }
    }, this._commandMap=new Map
  }
  _emitCommandProviderChanges(n, e, t){
    for(const i of e)this._commandProviderGeneration++, this._onDidChangeCommandProvider.fire({
      providerId:n,command:i,state:t,generation:this._commandProviderGeneration
    })
  }
  registerEverythingProvider(n, e, t){
    if(t.length===0)throw new Error("EverythingProvider must declare at least one supported command");
    const i=new Set;
    for(const r of t){
      if(i.has(r))throw new Error(`EverythingProvider command '${r}' listed more than once in registration request`);
      i.add(r);
      const s=this._commandMap.get(r);
      if(s)throw new Error(`EverythingProvider command '${r}' already registered by provider ${s.providerId}`)
    }
    for(const r of t)this._commandMap.set(r, {
      providerId:n,provider:e
    });
    this._refreshRouter(), this._emitCommandProviderChanges(n, t, "registered")
  }
  unregisterEverythingProvider(n, e){
    const t=[];
    for(const i of e){
      const r=this._commandMap.get(i);
      r&&r.providerId===n&&(this._commandMap.delete(i),t.push(i))
    }
    this._refreshRouter(), this._emitCommandProviderChanges(n, t, "unregistered")
  }
  unregisterEverythingProviderById(n){
    let e=!1;
    const t=[];
    for(const[i, r]of Array.from(this._commandMap.entries()))r.providerId===n&&(this._commandMap.delete(i), e=!0, t.push(i));
    e&&(this._refreshRouter(), this._emitCommandProviderChanges(n, t, "unregistered"))
  }
  _refreshRouter(){
    if(this._commandMap.size===0){
      this.provider=void 0;
      return
    }
    this._routerProvider={
      supportedCommands:Array.from(this._commandMap.keys()),runCommand:this._routerProvider.runCommand
    }, this.provider=this._routerProvider
  }
  registerEverythingProviderAllLocal(n){
    this.onlyLocalProvider=n
  }
  unregisterEverythingProviderAllLocal(){
    this.onlyLocalProvider=void 0
  }
  async waitForEverythingProvider(n){
    return this.provider?this.provider:new Promise((e, t)=>{
      const i=Date.now(),r=()=>{
        if(this.provider){
          e(this.provider);
          return
        }
        if(Date.now()-i>=n){
          t(new Error("Timeout waiting for EverythingProvider"));
          return
        }
        setTimeout(r,100)
      };
      r()
    })
  }
  async waitForOnlyLocalProvider(n){
    return this.onlyLocalProvider?this.onlyLocalProvider:new Promise((e, t)=>{
      const i=Date.now(),r=()=>{
        if(this.onlyLocalProvider){
          e(this.onlyLocalProvider);
          return
        }
        if(Date.now()-i>=n){
          t(new Error("Timeout waiting for OnlyLocalProvider"));
          return
        }
        setTimeout(r,100)
      };
      r()
    })
  }
  async waitForCommandEverythingProvider(n, e){
    return this._commandMap.has(e)?this._commandMap.get(e).provider:new Promise((t, i)=>{
      const r=Date.now(),s=()=>{
        if(this._commandMap.has(e)){
          t(this._commandMap.get(e).provider);
          return
        }
        if(Date.now()-r>=n){
          i(new Error(`Timeout waiting for EverythingProvider with command '${e}'`));
          return
        }
        setTimeout(s,100)
      };
      s()
    })
  }
}, Vi(AU, bJg, 1)
}
});
function qfa(n){
  switch(n){
    case"win32-x64":return"Windows 64 bit";
    case"win32-arm64":return"Windows ARM";
    case"linux-x64":return"Linux 64 bit";
    case"linux-arm64":return"Linux ARM 64";
    case"linux-armhf":return"Linux ARM";
    case"alpine-x64":return"Alpine Linux 64 bit";
    case"alpine-arm64":return"Alpine ARM 64";
    case"darwin-x64":return"Mac";
    case"darwin-arm64":return"Mac Silicon";
    case"web":return"Web";
    case"universal":return"universal";
    case"unknown":return"unknown";
    case"undefined":return"undefined"
  }
}
function sFA(n){
  switch(n){
    case"win32-x64":return"win32-x64";
    case"win32-arm64":return"win32-arm64";
    case"linux-x64":return"linux-x64";
    case"linux-arm64":return"linux-arm64";
    case"linux-armhf":return"linux-armhf";
    case"alpine-x64":return"alpine-x64";
    case"alpine-arm64":return"alpine-arm64";
    case"darwin-x64":return"darwin-x64";
    case"darwin-arm64":return"darwin-arm64";
    case"web":return"web";
    case"universal":return"universal";
    default:return"unknown"
  }
}
function vJg(n, e){
  switch(n){
    case 3:return e==="x64"?"win32-x64":e==="arm64"?"win32-arm64":"unknown";
    case 2:return e==="x64"?"linux-x64":e==="arm64"?"linux-arm64":e==="arm"?"linux-armhf":"unknown";
    case"alpine":return e==="x64"?"alpine-x64":e==="arm64"?"alpine-arm64":"unknown";
    case 1:return e==="x64"?"darwin-x64":e==="arm64"?"darwin-arm64":"unknown";
    case 0:return"web"
  }
}
function gmn(n, e){
  return e==="web"&&!n.includes("web")
}
function Hfa(n, e, t){
  return gmn(e, t)?!1:n==="undefined"||n==="universal"?!0:n==="unknown"?!1:n===t
}
function oFA(n){
  return n&&typeof n=="object"&&typeof n.id=="string"&&(!n.uuid||typeof n.uuid=="string")
}
async function AJg(n, e){
  let t;
  try{
    t=await e.resolve(n)
  }
  catch(i){
    if(i.fileOperationResult===1)return 0;
    throw i
  }
  return t.children?(await Promise.all(t.children.map(r=>AJg(r.resource, e)))).reduce((r, s)=>r+s, 0):t.size??0
}
var tnt, USt, vru, $St, qNe, nnt, Aru, yJg, wJg, _Jg, CJg, SJg, kJg, EJg, yE, xJg, fmn, TJg, yru, Y3, CS, O$e, wru, qSt, Jfa, yU, bL, _ru, Cru, HSt, Gv=
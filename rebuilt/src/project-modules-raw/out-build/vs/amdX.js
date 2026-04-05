// Module: out-build/vs/amdX.js
// Offset: 30910254 (bundle byte offset)
// Size: 3010 bytes

zr(), _r(), Yn(), Bc(), f1t=!1, Hxf=class{
  constructor(n, e, t){
    this.id=n, this.dependencies=e, this.callback=t
  }
}, (function(n){
  n[n.Uninitialized=1]="Uninitialized", n[n.InitializedInternal=2]="InitializedInternal", n[n.InitializedExternal=3]="InitializedExternal"
})(b1t||(b1t={
  
})), Jxf=class LQb{
  static{
    this.INSTANCE=new LQb
  }
  constructor(){
    this._isWebWorker=typeof self=="object"&&self.constructor&&self.constructor.name==="DedicatedWorkerGlobalScope", this._isRenderer=typeof document=="object", this._defineCalls=[], this._state=b1t.Uninitialized
  }
  _initialize(){
    if(this._state===b1t.Uninitialized){
      if(globalThis.define){
        this._state=b1t.InitializedExternal;
        return
      }
    }
    else return;
    this._state=b1t.InitializedInternal, globalThis.define=(e, t, i)=>{
      typeof e!="string"&&(i=t,t=e,e=null),(typeof t!="object"||!Array.isArray(t))&&(i=t,t=null),this._defineCalls.push(new Hxf(e,t,i))
    }, globalThis.define.amd=!0, this._isRenderer?this._amdPolicy=globalThis._VSCODE_WEB_PACKAGE_TTP??window.trustedTypes?.createPolicy("amdLoader", {
      createScriptURL(e){
        if(e.startsWith(window.location.origin)||e.startsWith(`${_n.vscodeFileResource}://${bCc}`))return e;
        throw new Error(`[trusted_script_src] Invalid script url: ${e}`)
      }
    }):this._isWebWorker&&(this._amdPolicy=globalThis._VSCODE_WEB_PACKAGE_TTP??globalThis.trustedTypes?.createPolicy("amdLoader", {
      createScriptURL(e){
        return e
      }
    }))
  }
  async load(e){
    if(this._initialize(), this._state===b1t.InitializedExternal)return new Promise(o=>{
      const a=Wr();
      globalThis.define(a,[e],function(l){
        o(l)
      })
    });
    const t=await(this._isWebWorker?this._workerLoadScript(e):this._isRenderer?this._rendererLoadScript(e):this._nodeJSLoadScript(e));
    if(!t){
      console.warn(`Did not receive a define call from script ${e}`);
      return
    }
    const i={
      
    }, r=[], s=[];
    if(Array.isArray(t.dependencies))for(const o of t.dependencies)o==="exports"?r.push(i):s.push(o);
    if(s.length>0)throw new Error(`Cannot resolve dependencies for script ${e}. The dependencies are: ${s.join(", ")}`);
    return typeof t.callback=="function"?t.callback(...r)??i:t.callback
  }
  _rendererLoadScript(e){
    return new Promise((t, i)=>{
      const r=document.createElement("script");
      r.setAttribute("async","async"),r.setAttribute("type","text/javascript");
      const s=()=>{
        r.removeEventListener("load",o),r.removeEventListener("error",a)
      },o=l=>{
        s(),t(this._defineCalls.pop())
      },a=l=>{
        s(),i(l)
      };
      r.addEventListener("load",o),r.addEventListener("error",a),this._amdPolicy&&(e=this._amdPolicy.createScriptURL(e)),r.setAttribute("src",e),window.document.getElementsByTagName("head")[0].appendChild(r)
    })
  }
  async _workerLoadScript(e){
    return this._amdPolicy&&(e=this._amdPolicy.createScriptURL(e)), await import(e), this._defineCalls.pop()
  }
  async _nodeJSLoadScript(e){
    try{
      const t=(await import("fs")).default,i=(await import("vm")).default,r=(await import("module")).default,s=je.parse(e).fsPath,o=t.readFileSync(s).toString(),a=r.wrap(o.replace(/^#!.*/,""));
      return new i.Script(a).runInThisContext().apply(),this._defineCalls.pop()
    }
    catch(t){
      throw t
    }
  }
}, ACa=new Map
}
}), Gxf, Try=
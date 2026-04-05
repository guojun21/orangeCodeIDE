// Module: out-build/vs/workbench/contrib/mcp/common/mcpTypes.js
// Offset: 31014011 (bundle byte offset)
// Size: 2620 bytes

Lv(), np(), Vs(), Yn(), Ht(), HA(), Wt(), PTf="ext.", (function(n){
  n[n.WorkspaceFolder=0]="WorkspaceFolder", n[n.Workspace=100]="Workspace", n[n.User=200]="User", n[n.Extension=300]="Extension", n[n.Filesystem=400]="Filesystem", n[n.RemoteBoost=-50]="RemoteBoost"
})(LTf||(LTf={
  
})), (function(n){
  function e(t, i){
    return t.id===i.id&&t.remoteAuthority===i.remoteAuthority&&t.label===i.label&&t.isTrustedByDefault===i.isTrustedByDefault
  }
  n.equals=e
})(NTf||(NTf={
  
})), (function(n){
  function e(r){
    return r
  }
  n.toSerialized=e;
  function t(r){
    return{
      id:r.id,label:r.label,launch:fgu.fromSerialized(r.launch),variableReplacement:r.variableReplacement?ggu.fromSerialized(r.variableReplacement):void 0
    }
  }
  n.fromSerialized=t;
  function i(r, s){
    return r.id===s.id&&r.label===s.label&&cg(r.roots, s.roots, (o, a)=>o.toString()===a.toString())&&fv(r.launch, s.launch)&&fv(r.presentation, s.presentation)&&fv(r.variableReplacement, s.variableReplacement)
  }
  n.equals=i
})(KCa||(KCa={
  
})), (function(n){
  function e(i){
    return i
  }
  n.toSerialized=e;
  function t(i){
    return{
      section:i.section,folder:i.folder?{
        ...i.folder,uri:je.revive(i.folder.uri)
      }
      :void 0,target:i.target
    }
  }
  n.fromSerialized=t
})(ggu||(ggu={
  
})), (function(n){
  n[n.HasUnknown=0]="HasUnknown", n[n.LoadingUnknown=1]="LoadingUnknown", n[n.AllKnown=2]="AllKnown"
})(MTf||(MTf={
  
})), Vye=xi("IMcpService"), (function(n){
  n[n.Unknown=0]="Unknown", n[n.Cached=1]="Cached", n[n.RefreshingFromUnknown=2]="RefreshingFromUnknown", n[n.RefreshingFromCached=3]="RefreshingFromCached", n[n.Live=4]="Live"
})(FTf||(FTf={
  
})), (function(n){
  n[n.Stdio=1]="Stdio", n[n.SSE=2]="SSE"
})(OTf||(OTf={
  
})), (function(n){
  function e(i){
    return i
  }
  n.toSerialized=e;
  function t(i){
    switch(i.type){
      case 2:return{
        type:i.type,uri:je.revive(i.uri),headers:i.headers
      };
      case 1:return{
        type:i.type,cwd:i.cwd?je.revive(i.cwd):void 0,command:i.command,args:i.args,env:i.env,envFile:i.envFile
      }
    }
  }
  n.fromSerialized=t
})(fgu||(fgu={
  
})), (function(n){
  let e;
  (function(t){
    t[t.Stopped=0]="Stopped", t[t.Starting=1]="Starting", t[t.Running=2]="Running", t[t.Error=3]="Error"
  })(e=n.Kind||(n.Kind={
    
  })), n.toString=t=>{
    switch(t.state){
      case 0:return _(8789,null);
      case 1:return _(8790,null);
      case 2:return _(8791,null);
      case 3:return _(8792,null,t.message);
      default:QN(t)
    }
  }, n.toKindString=t=>{
    switch(t){
      case 0:return"stopped";
      case 1:return"starting";
      case 2:return"running";
      case 3:return"error";
      default:QN(t)
    }
  }, n.canBeStarted=t=>t===3||t===0, n.isRunning=t=>!n.canBeStarted(t.state)
})(Gme||(Gme={
  
})), UTf=class extends Error{
  constructor(n, e, t){
    super(`MPC ${e}: ${n}`), this.code=e, this.data=t
  }
}, bgu=class extends Error{
  
}
}
}), FMe, vgu, jry=
// Module: out-build/vs/platform/reactivestorage/browser/observable.js
// Offset: 4152822 (bundle byte offset)
// Size: 2980 bytes

Nbe(), rt(), w5e(), y5e(), kr(), YUo=class extends Gze{
  constructor(e, t, i, r){
    super(new N4(void 0, `storage/${e.key}`, void 0), o(), Xj), this.opts=e, this.storageScope=t, this.storageTarget=i, this.storageService=r, this._store=new Ut, this._settingValue=!1;
    const s=this._store.add(new Ut);
    this._store.add(r.onDidChangeValue(t, e.key, s)(a=>{
      this._settingValue||this.set(o(),void 0)
    }));
    function o(){
      const a=r.get(e.key,t);
      if(a!==void 0)try{
        return e.fromStorage(a)
      }
      catch{
        
      }
      return e.defaultValue
    }
  }
  _setValue(e){
    try{
      this._settingValue=!0,super._setValue(e),this.storageService.store(this.opts.key,this.opts.toStorage(e),this.storageScope,this.storageTarget)
    }
    finally{
      this._settingValue=!1
    }
  }
  dispose(){
    this._store.dispose()
  }
}, YUo=__decorate([__param(3, Hi)], YUo)
}
});
function hm(n, e){
  const t=L9t[e];
  return pvA({
    key:XUo(e), defaultValue:t.defaultValue, fromStorage:t.fromStorage, toStorage:t.toStorage
  })(t.storageScope, t.storageTarget, n)
}
function wb(n, e){
  const t=L9t[e], i=n.get(XUo(e), t.storageScope);
  return i?t.fromStorage(i):t.defaultValue
}
function l_(n, e=-1, t=0){
  return{
    fromStorage:i=>i==="true", toStorage:i=>i?"true":"false", defaultValue:n, storageScope:e, storageTarget:t
  }
}
function KHh(n, e=-1, t=0){
  return{
    fromStorage:i=>i==="true"?!0:i==="false"?!1:null, toStorage:i=>i===!0?"true":i===!1?"false":"null", defaultValue:n, storageScope:e, storageTarget:t
  }
}
function uae(n, e=-1, t=0){
  return{
    fromStorage:i=>Number(i), toStorage:i=>String(i), defaultValue:n, storageScope:e, storageTarget:t
  }
}
function tPe(n, e=-1, t=0){
  return{
    fromStorage:i=>i, toStorage:i=>i, defaultValue:n, storageScope:e, storageTarget:t
  }
}
function ZUo(n, e=-1, t=0){
  return{
    fromStorage:i=>i, toStorage:i=>i, defaultValue:n, storageScope:e, storageTarget:t
  }
}
function P9t(n, e=-1, t=0){
  return{
    fromStorage:i=>{
      try{
        const r=JSON.parse(i);
        if(Array.isArray(r))return r
      }
      catch{
        
      }
      return n
    }, toStorage:i=>JSON.stringify(i), defaultValue:n, storageScope:e, storageTarget:t
  }
}
function xvt(n, e=-1, t=0){
  return{
    fromStorage:i=>{
      try{
        const r=JSON.parse(i);
        if(typeof r=="object"&&r!==null)return r
      }
      catch{
        
      }
      return n
    }, toStorage:i=>JSON.stringify(i), defaultValue:n, storageScope:e, storageTarget:t
  }
}
function fvA(n){
  return(e, t)=>{
    if(t[n]===void 0)return t;
    const i=e.get(Hi), r=L9t[n];
    return i.store(XUo(n), r.toStorage(t[n]), r.storageScope, r.storageTarget), delete t[n], t
  }
}
function YHh(n, e, t){
  n===1&&(t.workspaceEligibleForSnippetLearning=t.eligibleForSnippetLearning, delete t.eligibleForSnippetLearning), t.copyPasteMentions=t.aiFeaturesCopyPasteState?.mentions, delete t.aiFeaturesCopyPasteState;
  for(const i in L9t)t=fvA(i)(e, t);
  if(n===1){
    const i=["isComposerBarChatCollapsed", "composerBarPosition", "devToolsPosition", "shouldExplicitlyShowFgComposerInBg", "enableDataHandleDebugging"];
    for(const r of i){
      const s=t.composerState?.[r];
      if(s!==void 0){
        const o=e.get(Hi),a=L9t[r];
        o.store(XUo(r),a.toStorage(s),a.storageScope,a.storageTarget),delete t.composerState[r]
      }
    }
  }
  return uvA(e), t
}
function XUo(n){
  return"cursor/"+n
}
var L9t, rf=
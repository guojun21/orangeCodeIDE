// Module: out-build/vs/workbench/contrib/aiBackgroundComposer/browser/worktreeComposerDataService.js
// Offset: 33808330 (bundle byte offset)
// Size: 1491 bytes

Wt(), rt(), Er(), kr(), ps(), gT(), vNe(), I0u=xi("worktreeComposerDataService"), Kki="worktrees.cachedBranchSelectionMode", lDa=class extends at{
  constructor(e, t){
    super(), this.storageService=e, this.workspaceContextService=t;
    const i=this.storageService.get(Kki, 1, rP.DEFAULT);
    [this.data, this.setData]=v3({
      branchSelectionMode:i
    }), this._register(this.storageService.onDidChangeValue(1, Kki, this._register(new Ut))(r=>{
      const s=this.storageService.get(Kki,1,rP.DEFAULT);
      this.setData("branchSelectionMode",s)
    }))
  }
  getBranchSelectionMode(){
    return this.data.branchSelectionMode
  }
  setBranchSelectionMode(e){
    this.setData("branchSelectionMode", e), this.storageService.store(Kki, e, 1, 1)
  }
}, lDa=__decorate([__param(0, Hi), __param(1, Lr)], lDa), Vi(I0u, lDa, 2)
}
});
function uDa(){
  
}
function gmy(n, e, t, i, r){
  const s=[];
  let o;
  for(;
  e;
  )s.push(e), o=e.previousComponent, delete e.previousComponent, e=o;
  s.reverse();
  let a=0, l=s.length, u=0, d=0;
  for(;
  a<l;
  a++){
    let p=s[a];
    if(p.removed){
      if(p.value=n.join(i.slice(d,d+p.count)),d+=p.count,a&&s[a-1].added){
        let g=s[a-1];
        s[a-1]=s[a],s[a]=g
      }
    }
    else{
      if(!p.added&&r){
        let g=t.slice(u,u+p.count);
        g=g.map(function(f,A){
          let w=i[d+A];
          return w.length>f.length?w:f
        }),p.value=n.join(g)
      }
      else p.value=n.join(t.slice(u,u+p.count));
      u+=p.count,p.added||(d+=p.count)
    }
  }
  let m=s[l-1];
  return l>1&&typeof m.value=="string"&&(m.added||m.removed)&&n.equals("", m.value)&&(s[l-2].value+=m.value, s.pop()), s
}
var D0u=
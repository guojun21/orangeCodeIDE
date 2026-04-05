// Module: out-build/vs/workbench/contrib/notebook/browser/viewModel/notebookOutlineEntryFactory.js
// Offset: 25023664 (bundle byte offset)
// Size: 1827 bytes

y3(), eV(), Ht(), Ifg(), lCA(), ph(), uD(), Wt(), td(), (function(n){
  n[n.NonHeaderOutlineLevel=7]="NonHeaderOutlineLevel"
})(Qfg||(Qfg={
  
})), LWl=xi("INotebookOutlineEntryFactory"), Kca=class{
  constructor(e, t, i){
    this.executionStateService=e, this.outlineModelService=t, this.textModelService=i, this.cellOutlineEntryCache={
      
    }, this.cachedMarkdownOutlineEntries=new WeakMap
  }
  getOutlineEntries(e, t){
    const i=[], r=e.cellKind===zd.Markup;
    let s=dCA(e), o=!1;
    if(r){
      const a=e.getText().substring(0,1e4),l=this.cachedMarkdownOutlineEntries.get(e),u=l?.alternativeId===e.getAlternativeId()?l.headers:Array.from(uCA(a));
      this.cachedMarkdownOutlineEntries.set(e,{
        alternativeId:e.getAlternativeId(),headers:u
      });
      for(const{
        depth:d,text:m
      }
      of u)o=!0,i.push(new Kpi(t++,d,e,m,!1,!1));
      o||(s=lbt({
        value:s
      }))
    }
    if(!o){
      const a=!r&&this.executionStateService.getCellExecution(e.uri);
      let l=s.trim();
      if(!r){
        const u=this.cellOutlineEntryCache[e.id];
        u&&(i.push(new Kpi(t++,7,e,l,!!a,a?a.isPaused:!1)),u.forEach(d=>{
          i.push(new Kpi(t++,d.level,e,d.name,!1,!1,d.range,d.kind))
        }))
      }
      i.length===0&&(l.length===0&&(l=_(9501,null)),i.push(new Kpi(t++,7,e,l,!!a,a?a.isPaused:!1)))
    }
    return i
  }
  async cacheSymbols(e, t){
    if(e.cellKind===zd.Markup)return;
    const i=await this.textModelService.createModelReference(e.uri);
    try{
      const r=i.object.textEditorModel,s=await this.outlineModelService.getOrCreate(r,t),o=PWl(s.getTopLevelSymbols(),8);
      this.cellOutlineEntryCache[e.id]=o
    }
    finally{
      i.dispose()
    }
  }
}, Kca=__decorate([__param(0, pE), __param(1, Gne), __param(2, El)], Kca)
}
});
function J3(n){
  if(!n)return;
  const e=n.split("+");
  if(e.length<2)return;
  const t=e[0];
  if(!t||t!=="background-composer")return;
  const i=e[1];
  if(i)return i
}
function Q1e(n){
  const e=J3(n);
  if(e&&e.startsWith("bc-"))return e
}
var W9=
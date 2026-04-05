// Module: out-build/vs/platform/prompts/common/config.js
// Offset: 31094932 (bundle byte offset)
// Size: 663 bytes

si(), Yye(), (function(n){
  n.KEY=aSa, n.LOCATIONS_KEY=Pgu, n.enabled=e=>{
    const t=e.getValue(aSa);
    return OIf(t)??!1
  }, n.enabledCtx=Ee.equals(`config.${aSa}`, !0), n.getLocationsValue=e=>{
    const t=e.getValue(Pgu);
    if(!(t==null||Array.isArray(t))&&typeof t=="object"){
      const i={
        
      };
      for(const[r,s]of Object.entries(t)){
        const o=r.trim(),a=OIf(s);
        a!==void 0&&o&&(i[o]=a)
      }
      return i
    }
  }, n.promptSourceFolders=e=>{
    const t=n.getLocationsValue(e);
    if(t&&typeof t=="object"){
      const i=[];
      t[cSa]!==!1&&i.push(cSa);
      for(const[r,s]of Object.entries(t))s===!1||r===cSa||i.push(r);
      return i
    }
    return[]
  }
})(Fce||(Fce={
  
}))
}
}), PSa, LSa, UIf=
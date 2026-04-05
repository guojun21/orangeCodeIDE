// Module: out-build/external/sentry/core/integrations/moduleMetadata.js
// Offset: 114563 (bundle byte offset)
// Size: 748 bytes

sW(), _Zd(), lde(), ONo=()=>({
  name:"ModuleMetadata", setup(n){
    n.on("beforeEnvelope", e=>{
      bBe(e,(t,i)=>{
        if(i==="event"){
          const r=Array.isArray(t)?t[1]:void 0;
          r&&(wZd(r),t[1]=r)
        }
      })
    }), n.on("applyFrameMetadata", e=>{
      if(e.type)return;
      const t=n.getOptions().stackParser;
      yZd(t,e)
    })
  }
})
}
});
function NVv(n){
  const e={
    
  };
  let t=0;
  for(;
  t<n.length;
  ){
    const i=n.indexOf("=", t);
    if(i===-1)break;
    let r=n.indexOf(";", t);
    if(r===-1)r=n.length;
    else if(r<i){
      t=n.lastIndexOf(";",i-1)+1;
      continue
    }
    const s=n.slice(t, i).trim();
    if(e[s]===void 0){
      let o=n.slice(i+1,r).trim();
      o.charCodeAt(0)===34&&(o=o.slice(1,-1));
      try{
        e[s]=o.indexOf("%")!==-1?decodeURIComponent(o):o
      }
      catch{
        e[s]=o
      }
    }
    t=r+1
  }
  return e
}
var MVv=
// Module: out-build/external/sentry/core/utils/applyScopeDataToEvent.js
// Offset: 69425 (bundle byte offset)
// Size: 762 bytes

cze(), qAc(), iW()
}
});
function Byc(n){
  const e=Ev._sentryDebugIds, t=Ev._debugIds;
  if(!e&&!t)return{
    
  };
  const i=e?Object.keys(e):[], r=t?Object.keys(t):[];
  if(lze&&i.length===cYd&&r.length===lYd)return lze;
  cYd=i.length, lYd=r.length, lze={
    
  }, Dpt||(Dpt={
    
  });
  const s=(o, a)=>{
    for(const l of o){
      const u=a[l],d=Dpt?.[l];
      if(d&&lze&&u)lze[d[0]]=u,Dpt&&(Dpt[l]=[d[0],u]);
      else if(u){
        const m=n(l);
        for(let p=m.length-1;
        p>=0;
        p--){
          const f=m[p]?.filename;
          if(f&&lze&&Dpt){
            lze[f]=u,Dpt[l]=[f,u];
            break
          }
        }
      }
    }
  };
  return e&&s(i, e), t&&s(r, t), lze
}
function Ryc(n, e){
  const t=Byc(n);
  if(!t)return[];
  const i=[];
  for(const r of e)r&&t[r]&&i.push({
    type:"sourcemap", code_file:r, debug_id:t[r]
  });
  return i
}
var Dpt, cYd, lYd, lze, uYd=
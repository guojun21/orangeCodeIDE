// Module: out-build/external/sentry/core/metrics/public-api.js
// Offset: 155025 (bundle byte offset)
// Size: 794 bytes

Yyc()
}
});
function Ywc(n={
  
}){
  const e=new Set(n.levels??ZXd), t=n.client;
  return{
    log(i){
      const{
        type:r,level:s,message:o,args:a,tag:l,date:u,...d
      }
      =i,m=t||sm();
      if(!m)return;
      const p=WYv(r,s);
      if(!e.has(p))return;
      const{
        normalizeDepth:g=3,normalizeMaxBreadth:f=1e3
      }
      =m.getOptions(),A=[];
      o&&A.push(o),a&&a.length>0&&A.push(jwc(a,g,f));
      const w=A.join(" ");
      d["sentry.origin"]="auto.log.consola",l&&(d["consola.tag"]=l),r&&(d["consola.type"]=r),s!=null&&typeof s=="number"&&(d["consola.level"]=s),X2t({
        level:p,message:w,attributes:d
      })
    }
  }
}
function WYv(n, e){
  if(n==="verbose")return"debug";
  if(n==="silent")return"trace";
  if(n){
    const t=XXd[n];
    if(t)return t
  }
  if(typeof e=="number"){
    const t=eeh[e];
    if(t)return t
  }
  return"info"
}
var ZXd, XXd, eeh, QYv=
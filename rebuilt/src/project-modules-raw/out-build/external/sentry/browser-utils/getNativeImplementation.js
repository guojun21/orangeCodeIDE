// Module: out-build/external/sentry/browser-utils/getNativeImplementation.js
// Offset: 229353 (bundle byte offset)
// Size: 1311 bytes

lm(), C2n(), AY(), N2n={
  
}
}
});
function yFt(n){
  K3e("xhr", n), Y3e("xhr", UeA)
}
function UeA(){
  if(!zC.XMLHttpRequest)return;
  const n=XMLHttpRequest.prototype;
  n.open=new Proxy(n.open, {
    apply(e, t, i){
      const r=new Error,s=MR()*1e3,o=gte(i[0])?i[0].toUpperCase():void 0,a=$eA(i[1]);
      if(!o||!a)return e.apply(t,i);
      t[goe]={
        method:o,url:a,request_headers:{
          
        }
      },o==="POST"&&a.match(/sentry_key/)&&(t.__sentry_own_request__=!0);
      const l=()=>{
        const u=t[goe];
        if(u&&t.readyState===4){
          try{
            u.status_code=t.status
          }
          catch{
            
          }
          const d={
            endTimestamp:MR()*1e3,startTimestamp:s,xhr:t,virtualError:r
          };
          ede("xhr",d)
        }
      };
      return"onreadystatechange"in t&&typeof t.onreadystatechange=="function"?t.onreadystatechange=new Proxy(t.onreadystatechange,{
        apply(u,d,m){
          return l(),u.apply(d,m)
        }
      }):t.addEventListener("readystatechange",l),t.setRequestHeader=new Proxy(t.setRequestHeader,{
        apply(u,d,m){
          const[p,g]=m,f=d[goe];
          return f&&gte(p)&&gte(g)&&(f.request_headers[p.toLowerCase()]=g),u.apply(d,m)
        }
      }),e.apply(t,i)
    }
  }), n.send=new Proxy(n.send, {
    apply(e, t, i){
      const r=t[goe];
      if(!r)return e.apply(t,i);
      i[0]!==void 0&&(r.body=i[0]);
      const s={
        startTimestamp:MR()*1e3,xhr:t
      };
      return ede("xhr",s),e.apply(t,i)
    }
  })
}
function $eA(n){
  if(gte(n))return n;
  try{
    return n.toString()
  }
  catch{
    
  }
}
var goe, qeA=
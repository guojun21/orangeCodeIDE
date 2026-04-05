// Module: out-build/external/sentry/core/utils/supports.js
// Offset: 194016 (bundle byte offset)
// Size: 2021 bytes

ZT(), US(), c3(), Jpt=Ev, sth=y_c
}
});
function Gpt(n, e){
  const t="fetch";
  K3e(t, n), Y3e(t, ()=>ath(void 0, e))
}
function __c(n){
  const e="fetch-body-resolved";
  K3e(e, n), Y3e(e, ()=>ath(xXv))
}
function ath(n, e=!1){
  e&&!dMo()||LB(Ev, "fetch", function(t){
    return function(...i){
      const r=new Error,{
        method:s,url:o
      }
      =TXv(i),a={
        args:i,fetchData:{
          method:s,url:o
        },startTimestamp:MR()*1e3,virtualError:r,headers:IXv(i)
      };
      return n||ede("fetch",{
        ...a
      }),t.apply(Ev,i).then(async l=>(n?n(l):ede("fetch",{
        ...a,endTimestamp:MR()*1e3,response:l
      }),l),l=>{
        if(ede("fetch",{
          ...a,endTimestamp:MR()*1e3,error:l
        }),uSe(l)&&l.stack===void 0&&(l.stack=r.stack,tW(l,"framesToPop",1)),l instanceof TypeError&&(l.message==="Failed to fetch"||l.message==="Load failed"||l.message==="NetworkError when attempting to fetch resource."))try{
          const u=new URL(a.fetchData.url);
          l.message=`${l.message} (${u.host})`
        }
        catch{
          
        }
        throw l
      })
    }
  })
}
async function EXv(n, e){
  if(n?.body){
    const t=n.body, i=t.getReader(), r=setTimeout(()=>{
      t.cancel().then(null,()=>{
        
      })
    }, 90*1e3);
    let s=!0;
    for(;
    s;
    ){
      let o;
      try{
        o=setTimeout(()=>{
          t.cancel().then(null,()=>{
            
          })
        },5e3);
        const{
          done:a
        }
        =await i.read();
        clearTimeout(o),a&&(e(),s=!1)
      }
      catch{
        s=!1
      }
      finally{
        clearTimeout(o)
      }
    }
    clearTimeout(r), i.releaseLock(), t.cancel().then(null, ()=>{
      
    })
  }
}
function xXv(n){
  let e;
  try{
    e=n.clone()
  }
  catch{
    return
  }
  EXv(e, ()=>{
    ede("fetch-body-resolved", {
      endTimestamp:MR()*1e3,response:n
    })
  })
}
function C_c(n, e){
  return!!n&&typeof n=="object"&&!!n[e]
}
function cth(n){
  return typeof n=="string"?n:n?C_c(n, "url")?n.url:n.toString?n.toString():"":""
}
function TXv(n){
  if(n.length===0)return{
    method:"GET", url:""
  };
  if(n.length===2){
    const[t, i]=n;
    return{
      url:cth(t),method:C_c(i,"method")?String(i.method).toUpperCase():"GET"
    }
  }
  const e=n[0];
  return{
    url:cth(e), method:C_c(e, "method")?String(e.method).toUpperCase():"GET"
  }
}
function IXv(n){
  const[e, t]=n;
  try{
    if(typeof t=="object"&&t!==null&&"headers"in t&&t.headers)return new Headers(t.headers);
    if(sKd(e))return new Headers(e.headers)
  }
  catch{
    
  }
}
var DXv=
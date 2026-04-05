// Module: out-build/external/sentry/core/profiling.js
// Offset: 135163 (bundle byte offset)
// Size: 2711 bytes

aT(), ZT(), US(), cXd={
  startProfiler:CKv, stopProfiler:SKv
}
}
});
function Lwc(n, e, t, i, r){
  if(!n.fetchData)return;
  const{
    method:s, url:o
  }
  =n.fetchData, a=yH()&&e(o);
  if(n.endTimestamp&&a){
    const g=n.fetchData.__span;
    if(!g)return;
    const f=i[g];
    f&&(TKv(f, n), EKv(f, n, r), delete i[g]);
    return
  }
  const{
    spanOrigin:l="auto.http.browser", propagateTraceparent:u=!1
  }
  =typeof r=="object"?r:{
    spanOrigin:r
  }, d=!!HP(), m=a&&d?pSe(DKv(o, s, l)):new bbe;
  if(n.fetchData.__span=m.spanContext().spanId, i[m.spanContext().spanId]=m, t(n.fetchData.url)){
    const g=n.args[0], f=n.args[1]||{
      
    }, A=xKv(g, f, yH()&&d?m:void 0, u);
    A&&(n.args[1]=f, f.headers=A)
  }
  const p=sm();
  if(p){
    const g={
      input:n.args,response:n.response,startTimestamp:n.startTimestamp,endTimestamp:n.endTimestamp
    };
    p.emit("beforeOutgoingRequestSpan", m, g)
  }
  return m
}
function EKv(n, e, t){
  (typeof t=="object"&&t!==null?t.onRequestSpanEnd:void 0)?.(n, {
    headers:e.response?.headers, error:e.error
  })
}
function xKv(n, e, t, i){
  const r=Lpt({
    span:t, propagateTraceparent:i
  }), s=r["sentry-trace"], o=r.baggage, a=r.traceparent;
  if(!s)return;
  const l=e.headers||(sKd(n)?n.headers:void 0);
  if(l)if(IKv(l)){
    const u=new Headers(l);
    if(u.get("sentry-trace")||u.set("sentry-trace", s), i&&a&&!u.get("traceparent")&&u.set("traceparent", a), o){
      const d=u.get("baggage");
      d?zNo(d)||u.set("baggage",`${d},${o}`):u.set("baggage",o)
    }
    return u
  }
  else if(Array.isArray(l)){
    const u=[...l];
    l.find(m=>m[0]==="sentry-trace")||u.push(["sentry-trace", s]), i&&a&&!l.find(m=>m[0]==="traceparent")&&u.push(["traceparent", a]);
    const d=l.find(m=>m[0]==="baggage"&&zNo(m[1]));
    return o&&!d&&u.push(["baggage", o]), u
  }
  else{
    const u="sentry-trace"in l?l["sentry-trace"]:void 0, d="traceparent"in l?l.traceparent:void 0, m="baggage"in l?l.baggage:void 0, p=m?Array.isArray(m)?[...m]:[m]:[], g=m&&(Array.isArray(m)?m.find(A=>zNo(A)):zNo(m));
    o&&!g&&p.push(o);
    const f={
      ...l,"sentry-trace":u??s,baggage:p.length>0?p.join(","):void 0
    };
    return i&&a&&!d&&(f.traceparent=a), f
  }
  else return{
    ...r
  }
}
function TKv(n, e){
  if(e.response){
    Spt(n, e.response.status);
    const t=e.response?.headers?.get("content-length");
    if(t){
      const i=parseInt(t);
      i>0&&n.setAttribute("http.response_content_length",i)
    }
  }
  else e.error&&n.setStatus({
    code:nE, message:"internal_error"
  });
  n.end()
}
function zNo(n){
  return n.split(",").some(e=>e.trim().startsWith(GMn))
}
function IKv(n){
  return typeof Headers<"u"&&hBe(n, Headers)
}
function DKv(n, e, t){
  const i=nFt(n);
  return{
    name:i?`${e} ${pwc(i)}`:e, attributes:BKv(n, i, e, t)
  }
}
function BKv(n, e, t, i){
  const r={
    url:n, type:"fetch", "http.method":t, [w1]:i, [HE]:"http.client"
  };
  return e&&(tFt(e)||(r["http.url"]=e.href, r["server.address"]=e.host), e.search&&(r["http.query"]=e.search), e.hash&&(r["http.fragment"]=e.hash)), r
}
var RKv=
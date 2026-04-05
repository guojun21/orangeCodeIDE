// Module: out-build/external/sentry/browser-utils/metrics/inp.js
// Offset: 217252 (bundle byte offset)
// Size: 7938 bytes

lm(), AY(), AFt(), jpt(), CMo=[], R2n=new Map, zpt=new Map, nnh=60, SMo={
  click:"click", pointerdown:"click", pointerup:"click", mousedown:"click", mouseup:"click", touchstart:"click", touchend:"click", mouseover:"hover", mouseout:"hover", mouseenter:"hover", mouseleave:"hover", pointerover:"hover", pointerout:"hover", pointerenter:"hover", pointerleave:"hover", dragstart:"drag", dragend:"drag", drag:"drag", dragenter:"drag", dragleave:"drag", dragover:"drag", drop:"drag", keydown:"press", keyup:"press", keypress:"press", input:"press"
}, inh=({
  metric:n
})=>{
  if(n.value==null)return;
  const e=m9(n.value);
  if(e>nnh)return;
  const t=n.entries.find(f=>f.duration===n.value&&SMo[f.name]);
  if(!t)return;
  const{
    interactionId:i
  }
  =t, r=SMo[t.name], s=m9(F$()+t.startTime), o=HP(), a=o?qP(o):void 0, l=i!=null?R2n.get(i):void 0, u=l?.span||a, d=u?jA(u).description:ry().getScopeData().transactionName, m=l?.elementName||vY(t.target), p={
    [w1]:"auto.http.browser.inp", [HE]:`ui.interaction.${r}`, [rze]:t.duration
  }, g=$_c({
    name:m, transaction:d, attributes:p, startTime:s
  });
  g&&(g.addEvent("inp", {
    [_pt]:"millisecond", [Cpt]:n.value
  }), g.end(s+e))
}
}
});
function rnh({
  recordClsStandaloneSpans:n, recordLcpStandaloneSpans:e, client:t
}){
  const i=B2n();
  if(i&&F$()){
    i.mark&&zC.performance.mark("sentry-tracing-init");
    const r=e?ceA(t):geA(), s=feA(), o=n?seA(t):peA();
    return()=>{
      r?.(),s(),o?.()
    }
  }
  return()=>{
    
  }
}
function snh(){
  fze("longtask", ({
    entries:n
  })=>{
    const e=HP();
    if(!e)return;
    const{
      op:t,start_timestamp:i
    }
    =jA(e);
    for(const r of n){
      const s=m9(F$()+r.startTime),o=m9(r.duration);
      t==="navigation"&&i&&s<i||bze(e,s,s+o,{
        name:"Main UI thread blocked",op:"ui.long-task",attributes:{
          [w1]:"auto.ui.browser.metrics"
        }
      })
    }
  })
}
function onh(){
  new PerformanceObserver(e=>{
    const t=HP();
    if(t)for(const i of e.getEntries()){
      if(!i.scripts[0])continue;
      const r=m9(F$()+i.startTime),{
        start_timestamp:s,op:o
      }
      =jA(t);
      if(o==="navigation"&&s&&r<s)continue;
      const a=m9(i.duration),l={
        [w1]:"auto.ui.browser.metrics"
      },u=i.scripts[0],{
        invoker:d,invokerType:m,sourceURL:p,sourceFunctionName:g,sourceCharPosition:f
      }
      =u;
      l["browser.script.invoker"]=d,l["browser.script.invoker_type"]=m,p&&(l["code.filepath"]=p),g&&(l["code.function"]=g),f!==-1&&(l["browser.script.source_char_position"]=f),bze(t,r,r+a,{
        name:"Main UI thread blocked",op:"ui.long-animation-frame",attributes:l
      })
    }
  }).observe({
    type:"long-animation-frame", buffered:!0
  })
}
function anh(){
  fze("event", ({
    entries:n
  })=>{
    const e=HP();
    if(e){
      for(const t of n)if(t.name==="click"){
        const i=m9(F$()+t.startTime),r=m9(t.duration),s={
          name:vY(t.target),op:`ui.interaction.${t.name}`,startTime:i,attributes:{
            [w1]:"auto.ui.browser.metrics"
          }
        },o=YLo(t.target);
        o&&(s.attributes["ui.component_name"]=o),bze(e,i,i+r,s)
      }
    }
  })
}
function peA(){
  return F_c(({
    metric:n
  })=>{
    const e=n.entries[n.entries.length-1];
    e&&(wbe.cls={
      value:n.value,unit:""
    }, EMo=e)
  }, !0)
}
function geA(){
  return O_c(({
    metric:n
  })=>{
    const e=n.entries[n.entries.length-1];
    e&&(wbe.lcp={
      value:n.value,unit:"millisecond"
    }, poe=e)
  }, !0)
}
function feA(){
  return YXv(({
    metric:n
  })=>{
    n.entries[n.entries.length-1]&&(wbe.ttfb={
      value:n.value,unit:"millisecond"
    })
  })
}
function cnh(n, e){
  const t=B2n(), i=F$();
  if(!t?.getEntries||!i)return;
  const r=m9(i), s=t.getEntries(), {
    op:o, start_timestamp:a
  }
  =jA(n);
  s.slice(H_c).forEach(l=>{
    const u=m9(l.startTime), d=m9(Math.max(0, l.duration));
    if(!(o==="navigation"&&a&&r+u<a))switch(l.entryType){
      case"navigation":{
        yeA(n,l,r);
        break
      }
      case"mark":case"paint":case"measure":{
        veA(n,l,u,d,r,e.ignorePerformanceApiSpans);
        const m=fMo(),p=l.startTime<m.firstHiddenTime;
        l.name==="first-paint"&&p&&(wbe.fp={
          value:l.startTime,unit:"millisecond"
        }),l.name==="first-contentful-paint"&&p&&(wbe.fcp={
          value:l.startTime,unit:"millisecond"
        });
        break
      }
      case"resource":{
        CeA(n,l,l.name,u,d,r,e.ignoreResourceSpans);
        break
      }
    }
  }), H_c=Math.max(s.length-1, 0), SeA(n), o==="pageload"&&(xeA(wbe), e.recordClsOnPageloadSpan||delete wbe.cls, e.recordLcpOnPageloadSpan||delete wbe.lcp, Object.entries(wbe).forEach(([l, u])=>{
    vyc(l, u.value, u.unit)
  }), n.setAttribute("performance.timeOrigin", r), n.setAttribute("performance.activationStart", Wpt()), keA(n, e)), poe=void 0, EMo=void 0, wbe={
    
  }
}
function beA(n){
  if(n?.entryType==="measure")try{
    return n.detail.devtools.track==="Components \u269B"
  }
  catch{
    return
  }
}
function veA(n, e, t, i, r, s){
  if(beA(e)||["mark", "measure"].includes(e.entryType)&&Qj(e.name, s))return;
  const o=mFt(!1), a=m9(o?o.requestStart:0), l=r+Math.max(t, a), u=r+t, d=u+i, m={
    [w1]:"auto.resource.browser.metrics"
  };
  l!==u&&(m["sentry.browser.measure_happened_before_request"]=!0, m["sentry.browser.measure_start_time"]=l), AeA(m, e), l<=d&&bze(n, l, d, {
    name:e.name, op:e.entryType, attributes:m
  })
}
function AeA(n, e){
  try{
    const t=e.detail;
    if(!t)return;
    if(typeof t=="object"){
      for(const[i,r]of Object.entries(t))if(r&&tde(r))n[`sentry.browser.measure.detail.${i}`]=r;
      else if(r!==void 0)try{
        n[`sentry.browser.measure.detail.${i}`]=JSON.stringify(r)
      }
      catch{
        
      }
      return
    }
    if(tde(t)){
      n["sentry.browser.measure.detail"]=t;
      return
    }
    try{
      n["sentry.browser.measure.detail"]=JSON.stringify(t)
    }
    catch{
      
    }
  }
  catch{
    
  }
}
function yeA(n, e, t){
  ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach(i=>{
    kMo(n, e, i, t)
  }), kMo(n, e, "secureConnection", t, "TLS/SSL"), kMo(n, e, "fetch", t, "cache"), kMo(n, e, "domainLookup", t, "DNS"), _eA(n, e, t)
}
function kMo(n, e, t, i, r=t){
  const s=weA(t), o=e[s], a=e[`${t}Start`];
  !a||!o||bze(n, i+m9(a), i+m9(o), {
    op:`browser.${r}`, name:e.name, attributes:{
      [w1]:"auto.ui.browser.metrics",...t==="redirect"&&e.redirectCount!=null?{
        "http.redirect_count":e.redirectCount
      }
      :{
        
      }
    }
  })
}
function weA(n){
  return n==="secureConnection"?"connectEnd":n==="fetch"?"domainLookupStart":`${n}End`
}
function _eA(n, e, t){
  const i=t+m9(e.requestStart), r=t+m9(e.responseEnd), s=t+m9(e.responseStart);
  e.responseEnd&&(bze(n, i, r, {
    op:"browser.request", name:e.name, attributes:{
      [w1]:"auto.ui.browser.metrics"
    }
  }), bze(n, s, r, {
    op:"browser.response", name:e.name, attributes:{
      [w1]:"auto.ui.browser.metrics"
    }
  }))
}
function CeA(n, e, t, i, r, s, o){
  if(e.initiatorType==="xmlhttprequest"||e.initiatorType==="fetch")return;
  const a=e.initiatorType?`resource.${e.initiatorType}`:"resource.other";
  if(o?.includes(a))return;
  const l={
    [w1]:"auto.resource.browser.metrics"
  }, u=uoe(t);
  u.protocol&&(l["url.scheme"]=u.protocol.split(":").pop()), u.host&&(l["server.address"]=u.host), l["url.same_origin"]=t.includes(zC.location.origin), EeA(e, l, [["responseStatus", "http.response.status_code"], ["transferSize", "http.response_transfer_size"], ["encodedBodySize", "http.response_content_length"], ["decodedBodySize", "http.decoded_response_content_length"], ["renderBlockingStatus", "resource.render_blocking_status"], ["deliveryType", "http.response_delivery_type"]]);
  const d={
    ...l, ...q_c(e)
  }, m=s+i, p=m+r;
  bze(n, m, p, {
    name:t.replace(zC.location.origin, ""), op:a, attributes:d
  })
}
function SeA(n){
  const e=zC.navigator;
  if(!e)return;
  const t=e.connection;
  t&&(t.effectiveType&&n.setAttribute("effectiveConnectionType", t.effectiveType), t.type&&n.setAttribute("connectionType", t.type), U_c(t.rtt)&&(wbe["connection.rtt"]={
    value:t.rtt, unit:"millisecond"
  })), U_c(e.deviceMemory)&&n.setAttribute("deviceMemory", `${e.deviceMemory} GB`), U_c(e.hardwareConcurrency)&&n.setAttribute("hardwareConcurrency", String(e.hardwareConcurrency))
}
function keA(n, e){
  poe&&e.recordLcpOnPageloadSpan&&(poe.element&&n.setAttribute("lcp.element", vY(poe.element)), poe.id&&n.setAttribute("lcp.id", poe.id), poe.url&&n.setAttribute("lcp.url", poe.url.trim().slice(0, 200)), poe.loadTime!=null&&n.setAttribute("lcp.loadTime", poe.loadTime), poe.renderTime!=null&&n.setAttribute("lcp.renderTime", poe.renderTime), n.setAttribute("lcp.size", poe.size)), EMo?.sources&&e.recordClsOnPageloadSpan&&EMo.sources.forEach((t, i)=>n.setAttribute(`cls.source.${i+1}`, vY(t.node)))
}
function EeA(n, e, t){
  t.forEach(([i, r])=>{
    const s=n[i];
    s!=null&&(typeof s=="number"&&s<lnh||typeof s=="string")&&(e[r]=s)
  })
}
function xeA(n){
  const e=mFt(!1);
  if(!e)return;
  const{
    responseStart:t, requestStart:i
  }
  =e;
  i<=t&&(n["ttfb.requestTime"]={
    value:t-i, unit:"millisecond"
  })
}
var lnh, H_c, wbe, poe, EMo, TeA=
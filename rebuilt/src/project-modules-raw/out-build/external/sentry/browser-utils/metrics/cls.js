// Module: out-build/external/sentry/browser-utils/metrics/cls.js
// Offset: 214136 (bundle byte offset)
// Size: 967 bytes

lm(), C2n(), AFt(), jpt()
}
});
function ceA(n){
  let e=0, t;
  if(!Yth("largest-contentful-paint"))return;
  const i=O_c(({
    metric:r
  })=>{
    const s=r.entries[r.entries.length-1];
    s&&(e=r.value, t=s)
  }, !0);
  Zth(n, (r, s)=>{
    leA(e, t, s, r), i()
  })
}
function leA(n, e, t, i){
  gze&&Jo.log(`Sending LCP span (${n})`);
  const r=m9((F$()||0)+(e?.startTime||0)), s=ry().getScopeData().transactionName, o=e?vY(e.element):"Largest contentful paint", a={
    [w1]:"auto.http.browser.lcp", [HE]:"ui.webvital.lcp", [rze]:0, "sentry.pageload.span_id":t, "sentry.report_event":i
  };
  e&&(e.element&&(a["lcp.element"]=vY(e.element)), e.id&&(a["lcp.id"]=e.id), e.url&&(a["lcp.url"]=e.url), e.loadTime!=null&&(a["lcp.loadTime"]=e.loadTime), e.renderTime!=null&&(a["lcp.renderTime"]=e.renderTime), e.size!=null&&(a["lcp.size"]=e.size));
  const l=$_c({
    name:o, transaction:s, attributes:a, startTime:r
  });
  l&&(l.addEvent("lcp", {
    [_pt]:"millisecond", [Cpt]:n
  }), l.end(r))
}
var ueA=
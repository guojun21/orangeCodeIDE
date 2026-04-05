// Module: out-build/external/sentry/browser-utils/metrics/utils.js
// Offset: 213368 (bundle byte offset)
// Size: 768 bytes

lm(), AY(), N_c()
}
});
function seA(n){
  let e=0, t;
  if(!Yth("layout-shift"))return;
  const i=F_c(({
    metric:r
  })=>{
    const s=r.entries[r.entries.length-1];
    s&&(e=r.value, t=s)
  }, !0);
  Zth(n, (r, s)=>{
    oeA(e, t, s, r), i()
  })
}
function oeA(n, e, t, i){
  gze&&Jo.log(`Sending CLS span (${n})`);
  const r=e?m9((F$()||0)+e.startTime):MR(), s=ry().getScopeData().transactionName, o=e?vY(e.sources[0]?.node):"Layout shift", a={
    [w1]:"auto.http.browser.cls", [HE]:"ui.webvital.cls", [rze]:0, "sentry.pageload.span_id":t, "sentry.report_event":i
  };
  e?.sources&&e.sources.forEach((u, d)=>{
    a[`cls.source.${d+1}`]=vY(u.node)
  });
  const l=$_c({
    name:o, transaction:s, attributes:a, startTime:r
  });
  l&&(l.addEvent("cls", {
    [_pt]:"", [Cpt]:n
  }), l.end(r))
}
var aeA=
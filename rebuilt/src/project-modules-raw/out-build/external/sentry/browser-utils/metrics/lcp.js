// Module: out-build/external/sentry/browser-utils/metrics/lcp.js
// Offset: 215103 (bundle byte offset)
// Size: 1169 bytes

lm(), C2n(), AFt(), jpt()
}
});
function ybe(n){
  return n&&((F$()||performance.timeOrigin)+n)/1e3
}
function q_c(n){
  const e={
    
  };
  if(n.nextHopProtocol!=null){
    const{
      name:t,version:i
    }
    =reA(n.nextHopProtocol);
    e["network.protocol.version"]=i, e["network.protocol.name"]=t
  }
  return F$()||B2n()?.timeOrigin?deA({
    ...e, "http.request.redirect_start":ybe(n.redirectStart), "http.request.redirect_end":ybe(n.redirectEnd), "http.request.worker_start":ybe(n.workerStart), "http.request.fetch_start":ybe(n.fetchStart), "http.request.domain_lookup_start":ybe(n.domainLookupStart), "http.request.domain_lookup_end":ybe(n.domainLookupEnd), "http.request.connect_start":ybe(n.connectStart), "http.request.secure_connection_start":ybe(n.secureConnectionStart), "http.request.connection_end":ybe(n.connectEnd), "http.request.request_start":ybe(n.requestStart), "http.request.response_start":ybe(n.responseStart), "http.request.response_end":ybe(n.responseEnd), "http.request.time_to_first_byte":n.responseStart!=null?n.responseStart/1e3:void 0
  }):e
}
function deA(n){
  return Object.fromEntries(Object.entries(n).filter(([, e])=>e!=null))
}
var Xth=
// Module: out-build/vs/workbench/contrib/aiCpp/browser/cppDebouncingService.js
// Offset: 27501302 (bundle byte offset)
// Size: 1424 bytes

Bc(), lJg=class{
  constructor(n, e, t){
    this.clientDebounceDuration=n, this.totalDebounceDuration=e, this.evictionDuration=t, this.debounceHistory=[]
  }
  setDebouncingDurations({
    clientDebounceDuration:n, totalDebounceDuration:e
  }){
    this.clientDebounceDuration=n, this.totalDebounceDuration=e
  }
  pruneOldRequests(){
    const n=performance.now()+performance.timeOrigin, e=[...this.debounceHistory.entries()].reverse();
    for(const[t, i]of e)n-i.startTime>this.evictionDuration&&this.debounceHistory.splice(t, 1)
  }
  runRequest(){
    this.pruneOldRequests();
    const n=performance.now()+performance.timeOrigin, e=Wr(), t=this.debounceHistory.filter(r=>r.startTime+this.totalDebounceDuration>n).map(r=>r.requestId);
    this.debounceHistory.push({
      requestId:e,startTime:n
    });
    const i=new AbortController;
    return{
      generationUUID:e,startTime:n,abortController:i,requestIdsToCancel:t
    }
  }
  async shouldDebounce(n, e=!1){
    const t=[...this.debounceHistory];
    let i=-1;
    for(const[l, u]of t.entries())u.requestId===n&&(i=l);
    if(i===-1)return!1;
    const r=performance.now()+performance.timeOrigin, s=t[i], o=r-s.startTime;
    return o<this.clientDebounceDuration&&!e?(await new Promise(l=>setTimeout(l, this.clientDebounceDuration-o)), await this.shouldDebounce(n, !0)):i===t.length-1?!1:t[i+1].startTime-s.startTime<this.clientDebounceDuration
  }
}
}
});
function Ktt(n, e){
  return n.getDecorationRange(e.decorationId)
}
var sO, Bfa=
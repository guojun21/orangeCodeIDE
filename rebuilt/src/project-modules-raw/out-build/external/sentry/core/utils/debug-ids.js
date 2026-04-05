// Module: out-build/external/sentry/core/utils/debug-ids.js
// Offset: 70187 (bundle byte offset)
// Size: 2533 bytes

c3()
}
});
function Pyc(n, e, t, i, r, s){
  const{
    normalizeDepth:o=3, normalizeMaxBreadth:a=1e3
  }
  =n, l={
    ...e, event_id:e.event_id||t.event_id||NB(), timestamp:e.timestamp||pBe()
  }, u=t.integrations||n.integrations.map(w=>w.name);
  uzv(l, n), mzv(l, u), r&&r.emit("applyFrameMetadata", e), e.type===void 0&&dzv(l, n.stackParser);
  const d=gzv(i, t.captureContext);
  t.mechanism&&nW(l, t.mechanism);
  const m=r?r.getEventProcessors():[], p=ode().getScopeData();
  if(s){
    const w=s.getScopeData();
    t5e(p, w)
  }
  if(d){
    const w=d.getScopeData();
    t5e(p, w)
  }
  const g=[...t.attachments||[], ...p.attachments];
  g.length&&(t.attachments=g), aYd(l, p);
  const f=[...m, ...p.eventProcessors];
  return sYd(f, l, t).then(w=>(w&&hzv(w), typeof o=="number"&&o>0?pzv(w, o, a):w))
}
function uzv(n, e){
  const{
    environment:t, release:i, dist:r, maxValueLength:s
  }
  =e;
  n.environment=n.environment||t||Ept, !n.release&&i&&(n.release=i), !n.dist&&r&&(n.dist=r);
  const o=n.request;
  o?.url&&(o.url=s?BMn(o.url, s):o.url)
}
function dzv(n, e){
  const t=Byc(e);
  n.exception?.values?.forEach(i=>{
    i.stacktrace?.frames?.forEach(r=>{
      r.filename&&(r.debug_id=t[r.filename])
    })
  })
}
function hzv(n){
  const e={
    
  };
  if(n.exception?.values?.forEach(i=>{
    i.stacktrace?.frames?.forEach(r=>{
      r.debug_id&&(r.abs_path?e[r.abs_path]=r.debug_id:r.filename&&(e[r.filename]=r.debug_id),delete r.debug_id)
    })
  }), Object.keys(e).length===0)return;
  n.debug_meta=n.debug_meta||{
    
  }, n.debug_meta.images=n.debug_meta.images||[];
  const t=n.debug_meta.images;
  Object.entries(e).forEach(([i, r])=>{
    t.push({
      type:"sourcemap",code_file:i,debug_id:r
    })
  })
}
function mzv(n, e){
  e.length>0&&(n.sdk=n.sdk||{
    
  }, n.sdk.integrations=[...n.sdk.integrations||[], ...e])
}
function pzv(n, e, t){
  if(!n)return null;
  const i={
    ...n, ...n.breadcrumbs&&{
      breadcrumbs:n.breadcrumbs.map(r=>({
        ...r,...r.data&&{
          data:jj(r.data,e,t)
        }
      }))
    }, ...n.user&&{
      user:jj(n.user,e,t)
    }, ...n.contexts&&{
      contexts:jj(n.contexts,e,t)
    }, ...n.extra&&{
      extra:jj(n.extra,e,t)
    }
  };
  return n.contexts?.trace&&i.contexts&&(i.contexts.trace=n.contexts.trace, n.contexts.trace.data&&(i.contexts.trace.data=jj(n.contexts.trace.data, e, t))), n.spans&&(i.spans=n.spans.map(r=>({
    ...r, ...r.data&&{
      data:jj(r.data,e,t)
    }
  }))), n.contexts?.flags&&i.contexts&&(i.contexts.flags=jj(n.contexts.flags, 3, t)), i
}
function gzv(n, e){
  if(!e)return n;
  const t=n?n.clone():new dSe;
  return t.update(e), t
}
function fzv(n){
  if(n)return bzv(n)?{
    captureContext:n
  }
  :vzv(n)?{
    captureContext:n
  }
  :n
}
function bzv(n){
  return n instanceof dSe||typeof n=="function"
}
function vzv(n){
  return Object.keys(n).some(e=>dYd.includes(e))
}
var dYd, Lyc=
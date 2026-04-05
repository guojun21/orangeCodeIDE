// Module: out-build/external/sentry/core/eventProcessors.js
// Offset: 67567 (bundle byte offset)
// Size: 1858 bytes

ZT(), US(), h9(), ZMn()
}
});
function aYd(n, e){
  const{
    fingerprint:t, span:i, breadcrumbs:r, sdkProcessingMetadata:s
  }
  =e;
  szv(n, e), i&&czv(n, i), lzv(n, t), ozv(n, r), azv(n, s)
}
function t5e(n, e){
  const{
    extra:t, tags:i, user:r, contexts:s, level:o, sdkProcessingMetadata:a, breadcrumbs:l, fingerprint:u, eventProcessors:d, attachments:m, propagationContext:p, transactionName:g, span:f
  }
  =e;
  _No(n, "extra", t), _No(n, "tags", i), _No(n, "user", r), _No(n, "contexts", s), n.sdkProcessingMetadata=PMn(n.sdkProcessingMetadata, a, 2), o&&(n.level=o), g&&(n.transactionName=g), f&&(n.span=f), l.length&&(n.breadcrumbs=[...n.breadcrumbs, ...l]), u.length&&(n.fingerprint=[...n.fingerprint, ...u]), d.length&&(n.eventProcessors=[...n.eventProcessors, ...d]), m.length&&(n.attachments=[...n.attachments, ...m]), n.propagationContext={
    ...n.propagationContext, ...p
  }
}
function _No(n, e, t){
  n[e]=PMn(n[e], t, 1)
}
function szv(n, e){
  const{
    extra:t, tags:i, user:r, contexts:s, level:o, transactionName:a
  }
  =e;
  Object.keys(t).length&&(n.extra={
    ...t, ...n.extra
  }), Object.keys(i).length&&(n.tags={
    ...i, ...n.tags
  }), Object.keys(r).length&&(n.user={
    ...r, ...n.user
  }), Object.keys(s).length&&(n.contexts={
    ...s, ...n.contexts
  }), o&&(n.level=o), a&&n.type!=="transaction"&&(n.transaction=a)
}
function ozv(n, e){
  const t=[...n.breadcrumbs||[], ...e];
  n.breadcrumbs=t.length?t:void 0
}
function azv(n, e){
  n.sdkProcessingMetadata={
    ...n.sdkProcessingMetadata, ...e
  }
}
function czv(n, e){
  n.contexts={
    trace:XAc(e), ...n.contexts
  }, n.sdkProcessingMetadata={
    dynamicSamplingContext:cde(e), ...n.sdkProcessingMetadata
  };
  const t=qP(e), i=jA(t).description;
  i&&!n.transaction&&n.type==="transaction"&&(n.transaction=i)
}
function lzv(n, e){
  n.fingerprint=n.fingerprint?Array.isArray(n.fingerprint)?n.fingerprint:[n.fingerprint]:[], e&&(n.fingerprint=n.fingerprint.concat(e)), n.fingerprint.length||delete n.fingerprint
}
var CNo=
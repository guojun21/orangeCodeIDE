// Module: out-build/external/sentry/core/logs/internal.js
// Offset: 80287 (bundle byte offset)
// Size: 421 bytes

gbe(), aT(), ZT(), CNo(), US(), h9(), wpt(), ide(), zyc(), kzv(), Tzv(), wYd=100
}
});
function Bzv(n){
  return[{
    type:"trace_metric", item_count:n.length, content_type:"application/vnd.sentry.items.trace-metric+json"
  }, {
    items:n
  }
  ]
}
function Rzv(n, e, t, i){
  const r={
    
  };
  return e?.sdk&&(r.sdk={
    name:e.sdk.name, version:e.sdk.version
  }), t&&i&&(r.dsn=ade(i)), fte(r, [Bzv(n)])
}
var Pzv=
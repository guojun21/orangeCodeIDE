// Module: out-build/external/sentry/core/logs/constants.js
// Offset: 77455 (bundle byte offset)
// Size: 389 bytes

vYd={
  trace:1, debug:5, info:9, warn:13, error:17, fatal:21
}
}
});
function Ezv(n){
  return[{
    type:"log", item_count:n.length, content_type:"application/vnd.sentry.items.log+json"
  }, {
    items:n
  }
  ]
}
function xzv(n, e, t, i){
  const r={
    
  };
  return e?.sdk&&(r.sdk={
    name:e.sdk.name, version:e.sdk.version
  }), t&&i&&(r.dsn=ade(i)), fte(r, [Ezv(n)])
}
var Tzv=
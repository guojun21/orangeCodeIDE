// Module: out-build/external/sentry/core/checkin.js
// Offset: 93907 (bundle byte offset)
// Size: 290 bytes

hSe(), lde()
}
});
function Qzv(n){
  const e=n._metadata?.sdk, t=e?.name&&e?.version?`${e?.name}/${e?.version}`:void 0;
  n.transportOptions={
    ...n.transportOptions, headers:{
      ...t&&{
        "user-agent":t
      },...n.transportOptions?.headers
    }
  }
}
var jzv=
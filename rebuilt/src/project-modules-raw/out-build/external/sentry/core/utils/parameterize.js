// Module: out-build/external/sentry/core/utils/parameterize.js
// Offset: 105312 (bundle byte offset)
// Size: 336 bytes

NNo=LNo
}
});
function dVv(n){
  n.user?.ip_address===void 0&&(n.user={
    ...n.user, ip_address:"{{auto}}"
  })
}
function gwc(n){
  "aggregates"in n?n.attrs?.ip_address===void 0&&(n.attrs={
    ...n.attrs, ip_address:"{{auto}}"
  }):n.ipAddress===void 0&&(n.ipAddress="{{auto}}")
}
var XYd=
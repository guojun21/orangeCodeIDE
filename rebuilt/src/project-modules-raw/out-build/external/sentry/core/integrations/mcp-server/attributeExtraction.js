// Module: out-build/external/sentry/core/integrations/mcp-server/attributeExtraction.js
// Offset: 149459 (bundle byte offset)
// Size: 1144 bytes

RNo(), cFt(), GXd(), JXd()
}
});
function QXd(n, e){
  return e?`${n} ${e}`:n
}
function jXd(n){
  let e, t;
  switch(n){
    case"request":e=qwc, t=LXd;
    break;
    case"notification-incoming":e=RXd, t=Hwc;
    break;
    case"notification-outgoing":e=PXd, t=Hwc;
    break
  }
  return{
    [HE]:e, [w1]:t, [c2]:NXd
  }
}
function zXd(n){
  const{
    type:e, message:t, transport:i, extra:r, callback:s
  }
  =n, {
    method:o
  }
  =t, a=t.params;
  let l;
  if(e==="request"){
    const g=Jwc(o, a||{
      
    });
    l=QXd(o, g.target)
  }
  else l=o;
  const u={
    ...HXd(i, r), [Fwc]:o, ...WXd(e, t, a), ...jXd(e)
  }, m=!!sm()?.getOptions().sendDefaultPii, p=KNo(u, m);
  return X3e({
    name:l, forceTransaction:!0, attributes:p
  }, s)
}
function fYv(n, e, t, i){
  return zXd({
    type:"notification-incoming", message:n, transport:e, extra:t, callback:i
  })
}
function bYv(n, e, t){
  return zXd({
    type:"notification-outgoing", message:n, transport:e, callback:t
  })
}
function vYv(n, e, t){
  const{
    method:i
  }
  =n, r=n.params, s=Jwc(i, r||{
    
  }), o=QXd(i, s.target), a={
    ...HXd(e, t), [Fwc]:i, ...WXd("request", n, r), ...jXd("request")
  }, u=!!sm()?.getOptions().sendDefaultPii, d=KNo(a, u);
  return{
    name:o, op:qwc, forceTransaction:!0, attributes:d
  }
}
var AYv=
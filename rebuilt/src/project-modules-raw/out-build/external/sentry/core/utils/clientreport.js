// Module: out-build/external/sentry/core/utils/clientreport.js
// Offset: 83384 (bundle byte offset)
// Size: 297 bytes

lde(), ide()
}
});
function TYd(n){
  const e=[];
  n.message&&e.push(n.message);
  try{
    const t=n.exception.values[n.exception.values.length-1];
    t?.value&&(e.push(t.value), t.type&&e.push(`${t.type}: ${t.value}`))
  }
  catch{
    
  }
  return e
}
var IYd=
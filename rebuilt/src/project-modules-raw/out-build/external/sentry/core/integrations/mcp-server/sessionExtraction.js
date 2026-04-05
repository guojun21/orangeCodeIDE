// Module: out-build/external/sentry/core/integrations/mcp-server/sessionExtraction.js
// Offset: 146916 (bundle byte offset)
// Size: 748 bytes

cFt(), $Xd(), YNo()
}
});
function Jwc(n, e){
  const t=Gwc[n];
  if(!t)return{
    attributes:{
      
    }
  };
  const i=t.targetField&&typeof e?.[t.targetField]=="string"?e[t.targetField]:void 0;
  return{
    target:i, attributes:i&&t.targetAttribute?{
      [t.targetAttribute]:i
    }
    :{
      
    }
  }
}
function mYv(n, e){
  const t={
    
  }, i=Gwc[n];
  if(!i)return t;
  if(i.captureArguments&&i.argumentsField&&e?.[i.argumentsField]){
    const r=e[i.argumentsField];
    if(typeof r=="object"&&r!==null)for(const[s, o]of Object.entries(r))t[`${u2n}.${s.toLowerCase()}`]=JSON.stringify(o)
  }
  return i.captureUri&&e?.uri&&(t[`${u2n}.uri`]=JSON.stringify(e.uri)), i.captureName&&e?.name&&(t[`${u2n}.name`]=JSON.stringify(e.name)), t
}
var Gwc, GXd=
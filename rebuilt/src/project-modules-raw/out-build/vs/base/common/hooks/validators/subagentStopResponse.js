// Module: out-build/vs/base/common/hooks/validators/subagentStopResponse.js
// Offset: 28066246 (bundle byte offset)
// Size: 1905 bytes

yce(), xJ(), FYg=n=>{
  const e=Uq(n);
  if(!e.isValid)return e;
  const t=[];
  return n!==void 0&&typeof n=="object"&&n!==null&&n.followup_message!==void 0&&typeof n.followup_message!="string"&&t.push("followup_message must be a string if provided"), oO(t.length===0, t)
}
}
});
function _ye(n){
  return n.type==="prompt"
}
function b3A(n, e){
  if(n==="deny"||e==="deny")return"deny";
  if(n==="ask"||e==="ask")return"ask";
  if(n==="allow"||e==="allow")return"allow"
}
function OYg(n, e){
  const t=[];
  return n?.trim()&&t.push(n.trim()), e?.trim()&&t.push(e.trim()), t.length>0?t.join(`

---

`):void 0
}
function v3A(n, e){
  if(!(!n&&!e))return{
    ...n||{
      
    }, ...e||{
      
    }
  }
}
function A3A(n, e){
  if(e.length===0)return;
  if(e.length===1)return e[0];
  const t=Mou.includes(n), i=n===df.sessionStart, r={
    
  };
  for(const s of e){
    const o=s;
    for(const[a, l]of Object.entries(o))if(l!==void 0){
      if(a==="permission"&&t){
        r[a]=b3A(r[a],l);
        continue
      }
      if(a==="user_message"||a==="agent_message"){
        r[a]=OYg(r[a],l);
        continue
      }
      if(a==="continue"&&typeof l=="boolean"){
        r[a]===void 0?r[a]=l:r[a]=r[a]&&l;
        continue
      }
      if(i){
        if(a==="env"&&typeof l=="object"&&l!==null){
          r[a]=v3A(r[a],l);
          continue
        }
        if(a==="additional_context"&&typeof l=="string"){
          r[a]=OYg(r[a],l);
          continue
        }
      }
      r[a]=l
    }
  }
  return r
}
function UYg(n){
  return Mou.includes(n)
}
function y3A(n, e, t){
  const i=n.trim(), r=e.trim();
  return i||(r?`Hook blocked with message: ${r}`:`Hook "${t}" blocked this action (exit code 2) but provided no reason.`)
}
function z$e(n, e){
  if(UYg(n))return{
    permission:"deny", user_message:e
  };
  if(n===df.beforeSubmitPrompt)return{
    continue:!1, user_message:e
  };
  if(n===df.sessionStart)return{
    continue:!1, user_message:e
  };
  if(n===df.stop)return{
    
  }
}
function w3A(n){
  if(UYg(n))return{
    permission:"allow"
  };
  if(n===df.beforeSubmitPrompt)return{
    continue:!0
  };
  if(n===df.sessionStart)return{
    continue:!0
  };
  if(n===df.stop)return{
    
  }
}
var Wba, Nou, PAi, df, $Yg, qYg, Mou, Cye=
// Module: out-build/vs/workbench/services/aiErrors/browser/errors.js
// Offset: 30354883 (bundle byte offset)
// Size: 1901 bytes

mD(), qp(), ml(), Ynt=class extends fA{
  constructor(n, e, t){
    super(`You have exceeded your usage limit for the ${n} model. Please upgrade your account.`), this.model=n, this.error=e, this.rerun=t
  }
  toMessage(){
    switch(this.error){
      case yc.FREE_USER_RATE_LIMIT_EXCEEDED:return`It seems like you're making an too many requests too quickly. Please try again in a minute. If you think this is a mistake, please contact ${Igt}`;
      case yc.PRO_USER_RATE_LIMIT_EXCEEDED:return`It seems like you're making an unusual number of AI requests. Please try again later. If you think this is a mistake, please contact ${Igt}`;
      case yc.FREE_USER_USAGE_LIMIT:return`Our servers are currently overloaded for non-pro users, and you've used your free quota. Please try again in a few minutes. If you think this is a mistake, please contact ${Igt}`;
      case yc.PRO_USER_USAGE_LIMIT:return`We're currently recieving a large number of slow requests and could not queue yours. Please try again. If you see this message often, please contact ${Igt}`;
      case yc.BAD_API_KEY:return"The provided API key is invalid. Please provide a valid API key.";
      case yc.BAD_MODEL_NAME:return`The model ${this.model} does not work with your current plan or api key`;
      case yc.INVALID_AUTH_ID:case yc.NOT_LOGGED_IN:case yc.AGENT_REQUIRES_LOGIN:case yc.USER_NOT_FOUND:return"You are not logged in. Please log in to continue.";
      case yc.NOT_HIGH_ENOUGH_PERMISSIONS:return"Without the pro plan, you do not have access to this feature/model.";
      case yc.UNSPECIFIED:default:return"An unspecified error occurred. Please try again"
    }
  }
}
}
});
function BU(n){
  (i=>{
    i.details=i.details.map(r=>{
      const s="value"in r&&r.value instanceof Uint8Array;
      if("value"in r&&s===!1){
        const o=Object.values(r.value);
        r.value=Uint8Array.from(o)
      }
      return r
    })
  })(n);
  const t=n.findDetails(cN);
  if(t)return t.at(0)
}
var Bwi, Qkt, e0a, $me=
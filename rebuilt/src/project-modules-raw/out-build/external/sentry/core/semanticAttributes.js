// Module: out-build/external/sentry/core/semanticAttributes.js
// Offset: 34587 (bundle byte offset)
// Size: 1382 bytes

c2="sentry.source", ize="sentry.sample_rate", MMn="sentry.previous_trace_sample_rate", HE="sentry.op", w1="sentry.origin", gBe="sentry.idle_span_finish_reason", _pt="sentry.measurement_unit", Cpt="sentry.measurement_value", FMn="sentry.custom_span_name", OMn="sentry.profile_id", rze="sentry.exclusive_time", _Kd="cache.hit", CKd="cache.key", SKd="cache.item_size", UMn="http.request.method", $Mn="url.full", rNo="sentry.link.type"
}
});
function JAc(n){
  if(n<400&&n>=100)return{
    code:qMn
  };
  if(n>=400&&n<500)switch(n){
    case 401:return{
      code:nE,message:"unauthenticated"
    };
    case 403:return{
      code:nE,message:"permission_denied"
    };
    case 404:return{
      code:nE,message:"not_found"
    };
    case 409:return{
      code:nE,message:"already_exists"
    };
    case 413:return{
      code:nE,message:"failed_precondition"
    };
    case 429:return{
      code:nE,message:"resource_exhausted"
    };
    case 499:return{
      code:nE,message:"cancelled"
    };
    default:return{
      code:nE,message:"invalid_argument"
    }
  }
  if(n>=500&&n<600)switch(n){
    case 501:return{
      code:nE,message:"unimplemented"
    };
    case 503:return{
      code:nE,message:"unavailable"
    };
    case 504:return{
      code:nE,message:"deadline_exceeded"
    };
    default:return{
      code:nE,message:"internal_error"
    }
  }
  return{
    code:nE, message:"internal_error"
  }
}
function Spt(n, e){
  n.setAttribute("http.response.status_code", e);
  const t=JAc(e);
  t.message!=="unknown_error"&&n.setStatus(t)
}
var GAc, qMn, nE, W2t=
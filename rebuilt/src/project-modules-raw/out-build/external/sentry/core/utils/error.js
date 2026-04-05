// Module: out-build/external/sentry/core/utils/error.js
// Offset: 192772 (bundle byte offset)
// Size: 1244 bytes

A_c=class extends Error{
  constructor(n, e="warn"){
    super(n), this.message=n, this.logLevel=e
  }
}
}
});
function _Xv(){
  try{
    return new ErrorEvent(""), !0
  }
  catch{
    return!1
  }
}
function CXv(){
  try{
    return new DOMError(""), !0
  }
  catch{
    return!1
  }
}
function SXv(){
  try{
    return new DOMException(""), !0
  }
  catch{
    return!1
  }
}
function rth(){
  return"history"in Jpt&&!!Jpt.history
}
function y_c(){
  if(!("fetch"in Jpt))return!1;
  try{
    return new Headers, new Request("http://www.example.com"), new Response, !0
  }
  catch{
    return!1
  }
}
function uMo(n){
  return n&&/^function\s+\w+\(\)\s+\{
    \s+\[native code\]\s+\
  }
  $/.test(n.toString())
}
function dMo(){
  if(typeof EdgeRuntime=="string")return!0;
  if(!y_c())return!1;
  if(uMo(Jpt.fetch))return!0;
  let n=!1;
  const e=Jpt.document;
  if(e&&typeof e.createElement=="function")try{
    const t=e.createElement("iframe");
    t.hidden=!0, e.head.appendChild(t), t.contentWindow?.fetch&&(n=uMo(t.contentWindow.fetch)), e.head.removeChild(t)
  }
  catch(t){
    Lg&&Jo.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", t)
  }
  return n
}
function w_c(){
  return"ReportingObserver"in Jpt
}
function kXv(){
  if(!y_c())return!1;
  try{
    return new Request("_", {
      referrerPolicy:"origin"
    }), !0
  }
  catch{
    return!1
  }
}
var Jpt, sth, oth=
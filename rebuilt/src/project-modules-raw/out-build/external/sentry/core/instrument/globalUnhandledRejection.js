// Module: out-build/external/sentry/core/instrument/globalUnhandledRejection.js
// Offset: 16335 (bundle byte offset)
// Size: 1274 bytes

c3(), IMn(), KLo=null
}
});
function uSe(n){
  switch(RAc.call(n)){
    case"[object Error]":case"[object Exception]":case"[object DOMException]":case"[object WebAssembly.Exception]":return!0;
    default:return hBe(n, Error)
  }
}
function U2t(n, e){
  return RAc.call(n)===`[object ${e}]`
}
function $2t(n){
  return U2t(n, "ErrorEvent")
}
function DMn(n){
  return U2t(n, "DOMError")
}
function DAc(n){
  return U2t(n, "DOMException")
}
function gte(n){
  return U2t(n, "String")
}
function Apt(n){
  return typeof n=="object"&&n!==null&&"__sentry_template_string__"in n&&"__sentry_template_values__"in n
}
function tde(n){
  return n===null||Apt(n)||typeof n!="object"&&typeof n!="function"
}
function bY(n){
  return U2t(n, "Object")
}
function Yje(n){
  return typeof Event<"u"&&hBe(n, Event)
}
function nKd(n){
  return typeof Element<"u"&&hBe(n, Element)
}
function iKd(n){
  return U2t(n, "RegExp")
}
function Zje(n){
  return!!(n?.then&&typeof n.then=="function")
}
function rKd(n){
  return bY(n)&&"nativeEvent"in n&&"preventDefault"in n&&"stopPropagation"in n
}
function hBe(n, e){
  try{
    return n instanceof e
  }
  catch{
    return!1
  }
}
function BAc(n){
  return!!(typeof n=="object"&&n!==null&&(n.__isVue||n._isVue))
}
function sKd(n){
  return typeof Request<"u"&&hBe(n, Request)
}
var RAc, h9=
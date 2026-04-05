// Module: out-build/vs/base/common/errorMessage.js
// Offset: 658568 (bundle byte offset)
// Size: 1574 bytes

Vs(), Js(), Ht()
}
});
function UFo(n){
  return _1(n)
}
function Ekc(n, e){
  return n!==Ju.Off&&n<=e
}
function jah(n, e, t){
  switch(e){
    case Ju.Trace:n.trace(t);
    break;
    case Ju.Debug:n.debug(t);
    break;
    case Ju.Info:n.info(t);
    break;
    case Ju.Warning:n.warn(t);
    break;
    case Ju.Error:n.error(t);
    break;
    case Ju.Off:break;
    default:throw new Error(`Invalid log level ${e}`)
  }
}
function L4t(n, e=!1){
  let t="";
  for(let i=0;
  i<n.length;
  i++){
    let r=n[i];
    if(r instanceof Error&&(r=Jw(r, e)), typeof r=="object")try{
      r=JSON.stringify(r)
    }
    catch{
      
    }
    t+=(i>0?" ":"")+r
  }
  return t
}
function zah(n){
  if(n.verbose)return Ju.Trace;
  if(typeof n.logLevel=="string"){
    const e=o4n(n.logLevel.toLowerCase());
    if(e!==void 0)return e
  }
  return a4n
}
function Hbe(n){
  switch(n){
    case Ju.Trace:return"trace";
    case Ju.Debug:return"debug";
    case Ju.Info:return"info";
    case Ju.Warning:return"warn";
    case Ju.Error:return"error";
    case Ju.Off:return"off"
  }
}
function xkc(n){
  switch(n){
    case Ju.Trace:return{
      original:"Trace",value:_(2115,null)
    };
    case Ju.Debug:return{
      original:"Debug",value:_(2116,null)
    };
    case Ju.Info:return{
      original:"Info",value:_(2117,null)
    };
    case Ju.Warning:return{
      original:"Warning",value:_(2118,null)
    };
    case Ju.Error:return{
      original:"Error",value:_(2119,null)
    };
    case Ju.Off:return{
      original:"Off",value:_(2120,null)
    }
  }
}
function o4n(n){
  switch(n){
    case"trace":return Ju.Trace;
    case"debug":return Ju.Debug;
    case"info":return Ju.Info;
    case"warn":return Ju.Warning;
    case"error":return Ju.Error;
    case"critical":return Ju.Error;
    case"off":return Ju.Off
  }
}
var Rr, YP, Ju, a4n, Ygt, Tkc, Vah, Kah, Yah, Zah, Xah, ech, tch, jr=
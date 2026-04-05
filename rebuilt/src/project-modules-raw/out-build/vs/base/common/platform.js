// Module: out-build/vs/base/common/platform.js
// Offset: 286129 (bundle byte offset)
// Size: 2693 bytes

if(Ht(), c5e="en", NFt=!1, agt=!1, MFt=!1, v0c=!1, A0c=!1, WMo=!1, y0c=!1, QMo=!1, w0c=!1, _0c=!1, FFt=void 0, K2n=c5e, jMo=c5e, C0c=void 0, EBe=void 0, xBe=globalThis, Kj=void 0, typeof xBe.vscode<"u"&&typeof xBe.vscode.process<"u"?Kj=xBe.vscode.process:typeof process<"u"&&typeof process?.versions?.node=="string"&&(Kj=process), S0c=typeof Kj?.versions?.electron=="string", mih=S0c&&Kj?.type==="renderer", typeof Kj=="object"){
  NFt=Kj.platform==="win32", agt=Kj.platform==="darwin", MFt=Kj.platform==="linux", v0c=MFt&&!!Kj.env.SNAP&&!!Kj.env.SNAP_REVISION, y0c=S0c, w0c=!!Kj.env.CI||!!Kj.env.BUILD_ARTIFACTSTAGINGDIRECTORY, FFt=c5e, K2n=c5e;
  const n=Kj.env.VSCODE_NLS_CONFIG;
  if(n)try{
    const e=JSON.parse(n);
    FFt=e.userLocale, jMo=e.osLocale, K2n=e.resolvedLanguage||c5e, C0c=e.languagePack?.translationsConfigFile
  }
  catch{
    
  }
  A0c=!0
}
else typeof navigator=="object"&&!mih?(EBe=navigator.userAgent, NFt=EBe.indexOf("Windows")>=0, agt=EBe.indexOf("Macintosh")>=0, QMo=(EBe.indexOf("Macintosh")>=0||EBe.indexOf("iPad")>=0||EBe.indexOf("iPhone")>=0)&&!!navigator.maxTouchPoints&&navigator.maxTouchPoints>0, MFt=EBe.indexOf("Linux")>=0, _0c=EBe?.indexOf("Mobi")>=0, WMo=!0, K2n=JMo()||c5e, FFt=navigator.language.toLowerCase(), jMo=FFt):console.error("Unable to resolve platform.");
(function(n){
  n[n.Web=0]="Web", n[n.Mac=1]="Mac", n[n.Linux=2]="Linux", n[n.Windows=3]="Windows"
})(pih||(pih={
  
})), Y2n=0, agt?Y2n=1:NFt?Y2n=3:MFt&&(Y2n=2), Sc=NFt, Fs=agt, xv=MFt, Z2n=v0c, kw=A0c, gih=y0c, Eu=WMo, fih=WMo&&typeof xBe.importScripts=="function", bih=fih?xBe.origin:void 0, ZL=QMo, k0c=_0c, C6=w0c, kH=Y2n, fSe=EBe, yC=K2n, (function(n){
  function e(){
    return yC
  }
  n.value=e;
  function t(){
    return yC.length===2?yC==="en":yC.length>=3?yC[0]==="e"&&yC[1]==="n"&&yC[2]==="-":!1
  }
  n.isDefaultVariant=t;
  function i(){
    return yC==="en"
  }
  n.isDefault=i
})(Ete||(Ete={
  
})), E0c=FFt, vih=jMo, x0c=C0c, Aih=typeof xBe.postMessage=="function"&&!xBe.importScripts, l5e=(()=>{
  if(Aih){
    const n=[];
    xBe.addEventListener("message", t=>{
      if(t.data&&t.data.vscodeScheduleAsyncWork)for(let i=0,r=n.length;
      i<r;
      i++){
        const s=n[i];
        if(s.id===t.data.vscodeScheduleAsyncWork){
          n.splice(i,1),s.callback();
          return
        }
      }
    });
    let e=0;
    return t=>{
      const i=++e;
      n.push({
        id:i,callback:t
      }),xBe.postMessage({
        vscodeScheduleAsyncWork:i
      },"*")
    }
  }
  return n=>setTimeout(n)
})(), (function(n){
  n[n.Windows=1]="Windows", n[n.Macintosh=2]="Macintosh", n[n.Linux=3]="Linux"
})(yih||(yih={
  
})), cf=agt||QMo?2:NFt?1:3, T0c=!0, I0c=!1, cgt=!!(fSe&&fSe.indexOf("Chrome")>=0), zMo=!!(fSe&&fSe.indexOf("Firefox")>=0), VMo=!!(!cgt&&fSe&&fSe.indexOf("Safari")>=0), KMo=!!(fSe&&fSe.indexOf("Edg/")>=0), D0c=!!(fSe&&fSe.indexOf("Android")>=0), YMo=void 0, Cze=Kj?.arch, Sze=Kj?.platform, wih=Kj?.versions?.node
}
}), _ih, cW, TBe=
// Module: out-build/vs/workbench/contrib/speech/common/speechService.js
// Offset: 28215608 (bundle byte offset)
// Size: 3044 bytes

Ht(), si(), Wt(), _r(), IEe=xi("speechService"), ukt=new Sn("hasSpeechProvider", !1, {
  type:"boolean", description:_(10900, null)
}), Sva=new Sn("speechToTextInProgress", !1, {
  type:"boolean", description:_(10901, null)
}), vau=new Sn("textToSpeechInProgress", !1, {
  type:"boolean", description:_(10902, null)
}), (function(n){
  n[n.Started=1]="Started", n[n.Recognizing=2]="Recognizing", n[n.Recognized=3]="Recognized", n[n.Stopped=4]="Stopped", n[n.Error=5]="Error"
})(n5||(n5={
  
})), (function(n){
  n[n.Started=1]="Started", n[n.Stopped=2]="Stopped", n[n.Error=3]="Error"
})(Cnt||(Cnt={
  
})), (function(n){
  n[n.Recognized=1]="Recognized", n[n.Stopped=2]="Stopped", n[n.Canceled=3]="Canceled"
})(Zmn||(Zmn={
  
})), (function(n){
  n.SpeechTimeout="accessibility.voice.speechTimeout", n.AutoSynthesize="accessibility.voice.autoSynthesize", n.SpeechLanguage="accessibility.voice.speechLanguage", n.IgnoreCodeBlocks="accessibility.voice.ignoreCodeBlocks"
})(lef||(lef={
  
})), Aau="accessibility.voice.speechLanguage", kva={
  "da-DK":{
    name:_(10903, null)
  }, "de-DE":{
    name:_(10904, null)
  }, "en-AU":{
    name:_(10905, null)
  }, "en-CA":{
    name:_(10906, null)
  }, "en-GB":{
    name:_(10907, null)
  }, "en-IE":{
    name:_(10908, null)
  }, "en-IN":{
    name:_(10909, null)
  }, "en-NZ":{
    name:_(10910, null)
  }, "en-US":{
    name:_(10911, null)
  }, "es-ES":{
    name:_(10912, null)
  }, "es-MX":{
    name:_(10913, null)
  }, "fr-CA":{
    name:_(10914, null)
  }, "fr-FR":{
    name:_(10915, null)
  }, "hi-IN":{
    name:_(10916, null)
  }, "it-IT":{
    name:_(10917, null)
  }, "ja-JP":{
    name:_(10918, null)
  }, "ko-KR":{
    name:_(10919, null)
  }, "nl-NL":{
    name:_(10920, null)
  }, "pt-PT":{
    name:_(10921, null)
  }, "pt-BR":{
    name:_(10922, null)
  }, "ru-RU":{
    name:_(10923, null)
  }, "sv-SE":{
    name:_(10924, null)
  }, "tr-TR":{
    name:_(10925, null)
  }, "zh-CN":{
    name:_(10926, null)
  }, "zh-HK":{
    name:_(10927, null)
  }, "zh-TW":{
    name:_(10928, null)
  }
}
}
});
function P9A(){
  const n=Di.as(Dh.Configuration);
  n.registerConfiguration(pef), n.registerConfiguration({
    ...vQ, properties:{
      "accessibility.dimUnfocused.enabled":{
        description:_(4700,null),type:"boolean",default:!1,tags:["accessibility"],scope:1
      },"accessibility.dimUnfocused.opacity":{
        markdownDescription:_(4701,null,"`#accessibility.dimUnfocused.enabled#`"),type:"number",minimum:.2,maximum:1,default:.75,tags:["accessibility"],scope:1
      },"accessibility.hideAccessibleView":{
        description:_(4702,null),type:"boolean",default:!1,tags:["accessibility"]
      }
    }
  })
}
function yau(n, e){
  return n(`accessibility.signalOptions.experimental.delays.${e}`)||n("accessibility.signalOptions")?.["experimental.delays"]?.[`${e}`]||n("accessibility.signalOptions")?.delays?.[`${e}`]
}
function L9A(n){
  return n("accessibility.signalOptions.volume")||n("accessibility.signalOptions")?.volume||n("accessibility.signals.sounds.volume")||n("audioCues.volume")
}
function N9A(n){
  return n("accessibility.signalOptions.debouncePositionChanges")||n("accessibility.signalOptions")?.debouncePositionChanges||n("accessibility.signals.debouncePositionChanges")||n("audioCues.debouncePositionChanges")
}
var Ece, AL, Xmn, Eva, xva, wau, bN, uef, epn, Tva, Iva, def, hef, mef, wV, Dva, lB, a8, c8, DEe, pef, _au, ZAi, gie=
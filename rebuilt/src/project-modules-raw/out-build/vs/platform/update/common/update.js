// Module: out-build/vs/platform/update/common/update.js
// Offset: 32641750 (bundle byte offset)
// Size: 1232 bytes

Js(), Wt(), (function(n){
  n.Uninitialized="uninitialized", n.Idle="idle", n.Disabled="disabled", n.CheckingForUpdates="checking for updates", n.AvailableForDownload="available for download", n.Downloading="downloading", n.Downloaded="downloaded", n.Updating="updating", n.Ready="ready"
})(j3f||(j3f={
  
})), (function(n){
  n[n.Setup=0]="Setup", n[n.Archive=1]="Archive", n[n.Snap=2]="Snap"
})(z3f||(z3f={
  
})), (function(n){
  n[n.NotBuilt=0]="NotBuilt", n[n.DisabledByEnvironment=1]="DisabledByEnvironment", n[n.ManuallyDisabled=2]="ManuallyDisabled", n[n.MissingConfiguration=3]="MissingConfiguration", n[n.InvalidConfiguration=4]="InvalidConfiguration", n[n.RunningAsAdmin=5]="RunningAsAdmin"
})(V3f||(V3f={
  
})), K3f={
  Uninitialized:{
    type:"uninitialized"
  }, Disabled:n=>({
    type:"disabled", reason:n
  }), Idle:(n, e)=>({
    type:"idle", updateType:n, error:e
  }), CheckingForUpdates:n=>({
    type:"checking for updates", explicit:n
  }), AvailableForDownload:n=>({
    type:"available for download", update:n
  }), Downloading:{
    type:"downloading"
  }, Downloaded:n=>({
    type:"downloaded", update:n
  }), Updating:n=>({
    type:"updating", update:n
  }), Ready:n=>({
    type:"ready", update:n
  })
}, OU=xi("updateService"), yyu="cursor.update.events"
}
}), h7e, HEa, crt=
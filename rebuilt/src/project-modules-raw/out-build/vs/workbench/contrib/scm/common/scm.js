// Module: out-build/vs/workbench/contrib/scm/common/scm.js
// Offset: 33874270 (bundle byte offset)
// Size: 1034 bytes

Wt(), o1i="workbench.view.scm", vO="workbench.scm", J0u="workbench.scm.repositories", _7e="workbench.scm.history", yN=xi("scm"), (function(n){
  n[n.Error=0]="Error", n[n.Warning=1]="Warning", n[n.Information=2]="Information"
})(p$f||(p$f={
  
})), (function(n){
  n[n.HistoryPrevious=0]="HistoryPrevious", n[n.HistoryNext=1]="HistoryNext"
})(a1i||(a1i={
  
})), (function(n){
  n.DiscoveryTime="discoveryTime", n.Name="name", n.Path="path"
})(g$f||(g$f={
  
})), a7=xi("scmView")
}
});
function G0u(){
  let n="abcdefghijklmnopqrstuvwxyz", e="";
  for(let t=0;
  t<10;
  t++)e+=n.charAt(Math.floor(Math.random()*n.length));
  return je.parse(`aichat-code-block-anysphere://${e}`)
}
function LDa(n){
  return n.getEditorState().read(()=>{
    const e=Wd();
    if(!dd(e))return!1;
    const t=e.anchor, i=e.focus;
    if(t.key!==i.key||t.offset!==i.offset||t.offset!==0)return!1;
    const r=t.getNode(), o=lf().getFirstChild();
    if(r===o)return!0;
    if(o&&r.getParent()===o){
      const a=r.getParent();
      if(a&&a.getFirstChild()===r)return!0
    }
    return!1
  })
}
var f$f, uvn=
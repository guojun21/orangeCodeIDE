// Module: out-build/vs/platform/quickinput/browser/renderQuickInputCustomDom.js
// Offset: 28463827 (bundle byte offset)
// Size: 1472 bytes

Ae({
  "out-build/vs/platform/quickinput/browser/renderQuickInputCustomDom.js"(){
    "use strict"
  }
});
function lO(n){
  const e=xe(()=>n.uri?n.uri:typeof n.fileName=="string"?n.workspaceContextService.resolveRelativePath(n.fileName):n.fileName), t=xe(()=>n.languageId?["file-icon", `${n.languageId}-lang-file-icon`]:yS(n.modelService, n.languageService, e(), n.fileKind, n.fileKind===xg.FOLDER?{
    id:"folder"
  }
  :void 0)), i=xe(()=>typeof n.height=="number"?`${n.height}px`:n.height?n.height:"18px"), r=xe(()=>{
    if(n.isFolder)return[Qt.asClassName(Be.folderTwo), "folder-icon-override !text-[12px] !flex !items-center !justify-center"].join(" ");
    const s=["monaco-icon-label", ...t(), "height-override-important"];
    return n.innerClass&&s.push(n.innerClass), n.class&&s.push(n.class), s.join(" ")
  });
  return(()=>{
    var s=Mnf(), o=s.firstChild, a=o.firstChild;
    return o.style.setProperty("position", "relative"), o.style.setProperty("height", "100%"), o.style.setProperty("width", "100%"), o.style.setProperty("display", "flex"), o.style.setProperty("align-items", "center"), o.style.setProperty("justify-content", "center"), a.style.setProperty("height", "100%"), ge(o, K(Xe, {
      get when(){
        return n.showWarningBadge||n.showErrorBadge
      },get children(){
        return K(Xcu,{
          get color(){
            return n.showWarningBadge?"var(--vscode-activityWarningBadge-background)":"var(--vscode-errorForeground)"
          }
        })
      }
    }), null), tn(l=>{
      var u={
        height:i(),...n.style
      },d=r();
      return l.e=La(s,u,l.e),d!==l.t&&Un(a,l.t=d),l
    }, {
      e:void 0,t:void 0
    }), s
  })()
}
var Nnf, Mnf, Xcu, h8=
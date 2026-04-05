// Module: out-build/vs/workbench/contrib/ui/browser/hooks/useIsUsingFileIconTheme.js
// Offset: 28468467 (bundle byte offset)
// Size: 621 bytes

Ti(), es()
}
});
function B8A(n, e, t){
  return Qv(()=>{
    const i=C7e(), r=fd(n.fsPath), s=i.labelService.getUriLabel(Td(n), {
      relative:!0
    }), o=Sie();
    return(()=>{
      var a=Onf(),l=a.firstChild,u=l.nextSibling;
      return ge(a,K(Xe,{
        get when(){
          return o()
        },get children(){
          var d=Fnf();
          return ge(d,K(lO,{
            fileName:r,get workspaceContextService(){
              return i.workspaceContextService
            },get modelService(){
              return i.modelService
            },get languageService(){
              return i.languageService
            }
          })),d
        }
      }),l),ge(l,r),ge(u,s),a
    })()
  }, e, t, {
    restrictToServices:Unf
  })
}
var Fnf, Onf, Unf, R8A=
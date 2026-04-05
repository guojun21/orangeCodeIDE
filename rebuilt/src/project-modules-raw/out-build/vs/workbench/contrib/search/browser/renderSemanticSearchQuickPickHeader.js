// Module: out-build/vs/workbench/contrib/search/browser/renderSemanticSearchQuickPickHeader.js
// Offset: 28469088 (bundle byte offset)
// Size: 1114 bytes

Ie(), Ie(), Ie(), Ti(), Hl(), Yr(), es(), h8(), cX(), Fnf=qe("<div class=mr-[-4px]>"), Onf=qe('<div class="h-[22px] flex gap-1 items-center overflow-hidden pl-[7px] opacity-80"><div class=text-[13px]></div><div class="flex-1 text-[13px] opacity-60 truncate">'), Unf=["labelService", "workspaceContextService", "modelService", "languageService", "themeService"]
}
});
function P8A(n, e, t, i){
  return Qv(()=>{
    const s=n.slice(-2);
    return(()=>{
      var o=$nf(),a=o.firstChild;
      return ge(a,K(ia,{
        each:s,children:({
          label:l
        },u)=>(()=>{
          var d=Hnf(),m=d.firstChild;
          return ge(m,l),ge(d,K(Xe,{
            get when(){
              return u()!==s.length-1
            },get children(){
              var p=qnf();
              return tn(()=>Un(p,`opacity-40 !text-[10px] ${Qt.asClassName(Be.chevronRight)}`)),p
            }
          }),null),tn(()=>Un(d,`flex gap-1 items-center ${u()!==s.length-1?"opacity-60":""}`)),d
        })()
      }),null),ge(a,K(Xe,{
        when:e,children:l=>(()=>{
          var u=Jnf(),d=u.firstChild;
          return ge(u,()=>l().startLineNumber,d),ge(u,()=>l().endLineNumber,null),u
        })()
      }),null),o
    })()
  }, t, i, {
    restrictToServices:[]
  })
}
var $nf, qnf, Hnf, Jnf, L8A=
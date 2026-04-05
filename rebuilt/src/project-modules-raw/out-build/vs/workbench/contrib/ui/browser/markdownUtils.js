// Module: out-build/vs/workbench/contrib/ui/browser/markdownUtils.js
// Offset: 34136657 (bundle byte offset)
// Size: 1746 bytes

DCu={
  NOTE:"Note", TIP:"Tip", IMPORTANT:"Important", WARNING:"Warning", CAUTION:"Caution"
}, f7f=/(?:<!--|&lt;
!--)\s*CURSOR_SUMMARY\s*(?:-->|--&gt;
)/i, b7f=/(?:<!--|&lt;
!--)\s*\/\s*CURSOR_SUMMARY\s*(?:-->|--&gt;
)/i
}
});
function Wpy(n){
  const[e, t]=lt(!1), [i, r]=lt(!1);
  let s;
  const o=d=>d&&(d=d.replace(/(&nbsp;
  |\s)*<a[^>]*cursor\.com[^>]*>[\s\S]*?<\/a>(&nbsp;
  |\s)*/gi, ""), d=ICu(d), d=d.replace(/(---\s*\n*\s*)+/g, `---
`), d.trim()), a=()=>n.content?o(n.content):"", l=()=>n.maxHeight??w7f, u=()=>{
    s&&r(s.scrollHeight>l())
  };
  return Ic(()=>{
    setTimeout(u, 0);
    const d=new ResizeObserver(()=>{
      u()
    });
    s&&d.observe(s), Ai(()=>{
      d.disconnect()
    })
  }), K(Xe, {
    get when(){
      return n.content
    }, get children(){
      var d=y7f(),m=d.firstChild,p=s;
      return typeof p=="function"?Bs(p,m):s=m,m.style.setProperty("overflow","hidden"),m.style.setProperty("position","relative"),ge(m,K(YDa,{
        get content(){
          return a()
        },get isTrusted(){
          return n.isTrusted??!1
        },supportThemeIcons:!0,supportHtml:!0
      }),null),ge(m,K(Xe,{
        get when(){
          return Ui(()=>!e())()&&i()
        },get children(){
          var g=v7f();
          return g.style.setProperty("position","absolute"),g.style.setProperty("bottom","0"),g.style.setProperty("left","0"),g.style.setProperty("right","0"),g.style.setProperty("height","40px"),g.style.setProperty("background","linear-gradient(to top, var(--vscode-editor-background) 0%, transparent 100%)"),g.style.setProperty("pointer-events","none"),g
        }
      }),null),ge(d,K(Xe,{
        get when(){
          return i()
        },get children(){
          var g=A7f();
          return g.addEventListener("click",()=>t(!e())),ge(g,()=>e()?"Less":"More"),g
        }
      }),null),tn(g=>(g=e()?"none":`${l()}px`)!=null?m.style.setProperty("max-height",g):m.style.removeProperty("max-height")),d
    }
  })
}
var v7f, A7f, y7f, w7f, Qpy=
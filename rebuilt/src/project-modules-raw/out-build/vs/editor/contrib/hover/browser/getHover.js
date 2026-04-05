// Module: out-build/vs/editor/contrib/hover/browser/getHover.js
// Offset: 4241107 (bundle byte offset)
// Size: 1396 bytes

vr(), Po(), _s(), Cu(), Cm(), nGh=class{
  constructor(n, e, t){
    this.provider=n, this.hover=e, this.ordinal=t
  }
}, RY("_executeHoverProvider", (n, e, t)=>{
  const i=n.get($u);
  return tGh(i.hoverProvider, e, t, Cs.None)
}), RY("_executeHoverProvider_recursive", (n, e, t)=>{
  const i=n.get($u);
  return tGh(i.hoverProvider, e, t, Cs.None, !0)
})
}
});
function _$o(n, e, t, i, r, s, o, a, l, u){
  const d=Ct("button.fix-in-composer"), m=Rt(d, Ct("span.text"));
  if(m.innerText=n, d.style.border="none", d.style.borderRadius="2px", d.style.cursor="pointer", d.style.padding="4px 8px", d.style.fontSize="12px", d.style.display="inline-flex", d.style.alignItems="center", d.style.justifyContent="center", d.style.userSelect="none", d.style.width="150px", e?(d.style.backgroundColor="var(--vscode-button-background)", d.style.color="var(--vscode-button-foreground)"):(d.style.backgroundColor="var(--vscode-button-secondaryBackground)", d.style.color="var(--vscode-button-secondaryForeground)"), d.style.marginRight="8px", d.classList.add("fix-in-composer-button-hover"), l){
    const p=Fs?"Cmd":"Ctrl";
    d.title=`${p}+click to fix in new chat`
  }
  return d.onclick=p=>{
    const g=!(p.ctrlKey||p.metaKey);
    r.publicLogCapture("Submitted Fix With Agent"), i.trackEvent("hover_bar.submit_fix", {
      useCurrent:g,mode:"edit"
    }), t.fixLinterErrorWithAI({
      errorMessage:s,editorUri:o,range:a,addToCurrent:g,editor:u
    })
  }, d
}
var rGh=
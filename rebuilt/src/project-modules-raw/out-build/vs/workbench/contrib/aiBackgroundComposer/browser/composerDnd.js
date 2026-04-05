// Module: out-build/vs/workbench/contrib/aiBackgroundComposer/browser/composerDnd.js
// Offset: 31459976 (bundle byte offset)
// Size: 2261 bytes

sN(), A8(), Efn(), lxe=class{
  constructor(n){
    this.bcId=n
  }
}, qce=class{
  constructor(n){
    this.composerId=n
  }
}, sNf=GB.getInstance(), oNf=GB.getInstance(), ovu=GB.getInstance()
}
});
function Jit(n){
  const e=n?.getContextKeyValue(ONe);
  return e!==void 0?e:bi.document.body.classList.contains(Bvi)
}
function say(n, e){
  try{
    const t=n.getContainer(bi);
    if(t){
      const i=$c(),r=i.document.createElement("div");
      r.style.position="absolute";
      const o=n.getContainer(bi,"workbench.parts.titlebar")?.clientHeight??0;
      r.style.top=`${o+8}px`,r.style.left="0",r.style.right="0",r.style.display="flex",r.style.alignItems="center",r.style.justifyContent="center",r.style.padding="0 12px",r.style.pointerEvents="none",r.style.zIndex="1002";
      const a=()=>{
        try{
          r.remove()
        }
        catch{
          
        }
      },l=i.document.createElement("div");
      l.style.display="inline-flex",l.style.alignItems="stretch",l.style.border="1px solid var(--cursor-stroke-secondary)",l.style.borderRadius="8px",l.style.background="var(--cursor-bg-elevated)",l.style.boxShadow="var(--vscode-widget-shadow, rgba(0,0,0,0.2)) 0px 2px 12px",l.style.pointerEvents="auto",l.style.fontSize="12px",l.style.fontWeight="400",l.style.fontFamily="var(--vscode-font-family)";
      const u=i.document.createElement("button");
      u.textContent="Switched to Agent Layout",u.style.border="none",u.style.background="transparent",u.style.outline="none",u.style.color="var(--vscode-panelTitle-activeForeground)",u.style.padding="6px 12px",u.style.cursor="pointer",u.style.fontSize="12px",u.style.fontFamily="var(--vscode-font-family)",u.style.fontWeight="400",u.addEventListener("click",async()=>{
        a()
      });
      const d=i.document.createElement("button");
      d.textContent="Go Back",d.style.border="none",d.style.outline="none",d.style.background="transparent",d.style.color="var(--vscode-panelTitle-activeForeground)",d.style.padding="6px 12px",d.style.cursor="pointer",d.style.fontSize="12px",d.style.fontFamily="var(--vscode-font-family)",d.style.fontWeight="400",d.addEventListener("click",async()=>{
        a();
        const p=n.getSideBarPosition()===0?"left":"right";
        await e.setUnifiedSidebarLocation(p)
      }),l.appendChild(u),l.appendChild(d),r.appendChild(l),t.appendChild(r),setTimeout(()=>{
        a()
      },15e3)
    }
  }
  catch{
    
  }
}
var n7e=
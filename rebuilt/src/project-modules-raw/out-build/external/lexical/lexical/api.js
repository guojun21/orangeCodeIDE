// Module: out-build/external/lexical/lexical/api.js
// Offset: 31665269 (bundle byte offset)
// Size: 2437 bytes

V_(), V_(), V_(), V_(), V_(), V_(), V_(), V_(), V_(), V_(), V_(), V_(), V_(), V_(), V_(), V_()
}
});
function way(n){
  const e=n.textContent;
  if(e!==null){
    const t=n.getAttribute("data-mention-key")||void 0, i=n.getAttribute("data-typeahead-type"), r=n.getAttribute("data-mention-metadata");
    let s=n.getAttribute("data-mention-name");
    s||(s=e.startsWith("@")?e.slice(1):e);
    let o=e;
    const a=i;
    o.startsWith("@")&&(a===eo.folder||a===eo.file||a===eo.terminal||a===eo.terminal_selection||a===eo.git_diff||a===eo.link||a===eo.mcp_attachment||a===eo.browser)&&(o=o.slice(1));
    let l;
    if(r)try{
      l=JSON.parse(r)
    }
    catch{
      l=void 0
    }
    const u=new H1t(s, void 0, o, void 0, a, l, t);
    return u.setMode("segmented").toggleDirectionless(), {
      node:u
    }
  }
  return null
}
function mNf(n){
  return typeof n=="object"&&n!==null&&"case"in n?n.case:n
}
function _ay(n){
  if(n===eo.link||n===eo.file||n===eo.cursor_command||n===eo.pr_diff||n===eo.git_pr||n===eo.current_pr||n===eo.mcp_attachment||n==="cursor_skill"||n==="subagent")return{
    cursor:"pointer"
  }
}
function Hie(n, e, t){
  const i=document.createDocumentFragment(), r=document.createElement("span");
  r.className=t?`mention-codicon-wrapper ${t}`:"mention-codicon-wrapper";
  const s=document.createElement("i");
  s.className=`codicon ${n}`;
  const o=document.createElement("span");
  o.textContent=e;
  const a=document.createElement("i");
  return a.className="codicon codicon-close", a.setAttribute("data-mention-remove", "true"), r.appendChild(s), r.appendChild(o), r.appendChild(a), i.appendChild(r), i
}
function Cay(){
  const n=$c(), e=n.document.querySelector(".monaco-workbench");
  if(e&&e instanceof n.HTMLElement)return e.classList.contains("file-icons-enabled");
  const t=n.document.createElement("span");
  t.className="show-file-icons", t.style.position="absolute", t.style.width="0", t.style.height="0", t.style.overflow="hidden";
  const i=n.document.createElement("span");
  i.className="monaco-icon-label file-icon", t.appendChild(i), n.document.body.appendChild(t);
  const r=n.getComputedStyle(i, "::before"), s=r.getPropertyValue("background-image"), o=r.getPropertyValue("-webkit-mask-image")||r.getPropertyValue("mask-image"), a=s!==""&&s!=="none"||o!==""&&o!=="none";
  return n.document.body.removeChild(t), a
}
function Hce(n, e, t, i, r, s, o, a, l){
  const u={
    selection:r||void 0, selectedOption:o||void 0
  }, d=new H1t(n, e, l, t, i, u, s, a);
  return d.setMode("segmented").toggleDirectionless(), d
}
function pNf(n){
  return n instanceof H1t
}
var mvu, pvu, H1t, J1t=
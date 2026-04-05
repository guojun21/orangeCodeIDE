// Module: out-build/vs/base/browser/ui/iconLabel/iconLabels.js
// Offset: 2078801 (bundle byte offset)
// Size: 9730 bytes

ri(), Jr(), c0h=new RegExp(`(\\\\)?\\$\\((${Qt.iconNameExpression}(?:${Qt.iconModifierExpression})?)(?:#([\\w-]+))?\\)`, "g")
}
});
function Jde(n, e={
  
}, t={
  
}){
  const i=new Ut;
  let r=!1;
  const s=pDc(e), {
    renderer:o, codeBlocks:a, syncCodeBlocks:l
  }
  =KuA(e, n), u=YuA(n);
  let d;
  if(e.fillInIncompleteTokens){
    const g={
      ...S9e,...t,renderer:o
    }, f=cbt(u, g), A=idA(f);
    d=r0h(A, g)
  }
  else d=mDc(u, {
    ...t, renderer:o, async:!1
  });
  n.supportThemeIcons&&(d=a_(d).map(f=>typeof f=="string"?f:f.outerHTML).join(""));
  const p=new DOMParser().parseFromString(bDc({
    isTrusted:n.isTrusted, ...e.sanitizerOptions
  }, d), "text/html");
  if(VuA(n, e, p.body), s.innerHTML=bDc({
    isTrusted:n.isTrusted, ...e.sanitizerOptions
  }, p.body.innerHTML), a.length>0)Promise.all(a).then(g=>{
    if(r)return;
    const f=new Map(g), A=s.querySelectorAll("div[data-code]");
    for(const w of A){
      const C=f.get(w.dataset.code??"");
      C&&um(w,C)
    }
    e.asyncRenderCallback?.()
  });
  else if(l.length>0){
    const g=new Map(l), f=s.querySelectorAll("div[data-code]");
    for(const A of f){
      const w=g.get(A.dataset.code??"");
      w&&um(A,w)
    }
  }
  if(e.asyncRenderCallback)for(const g of s.getElementsByTagName("img")){
    const f=i.add(ei(g, "load", ()=>{
      f.dispose(),e.asyncRenderCallback()
    }))
  }
  if(e.actionHandler){
    const g=e.actionHandler.disposables.add(new Hg(s, "click")), f=e.actionHandler.disposables.add(new Hg(s, "auxclick"));
    e.actionHandler.disposables.add(In.any(g.event, f.event)(A=>{
      const w=new yy(As(s),A);
      !w.leftButton&&!w.middleButton||l0h(n,e,w)
    })), e.actionHandler.disposables.add(ei(s, "keydown", A=>{
      const w=new vh(A);
      !w.equals(10)&&!w.equals(3)||l0h(n,e,w)
    }))
  }
  return{
    element:s, dispose:()=>{
      r=!0,i.dispose()
    }
  }
}
function VuA(n, e, t){
  for(const i of t.querySelectorAll("img, audio, video, source")){
    const r=i.getAttribute("src");
    if(r){
      let s=r;
      try{
        n.baseUri&&(s=fDc(je.from(n.baseUri),s))
      }
      catch{
        
      }
      if(i.setAttribute("src",u0h(n,s,!0)),e.remoteImageIsAllowed){
        const o=je.parse(s);
        o.scheme!==_n.file&&o.scheme!==_n.data&&!e.remoteImageIsAllowed(o)&&i.replaceWith(Ct("",void 0,i.outerHTML))
      }
    }
  }
  for(const i of t.querySelectorAll("a")){
    const r=i.getAttribute("href");
    if(i.setAttribute("href", ""), !r||/^data:|javascript:/i.test(r)||/^command:/i.test(r)&&!n.isTrusted||/^command:(\/\/\/)?_workbench\.downloadResource/i.test(r))i.replaceWith(...i.childNodes);
    else{
      let s=u0h(n,r,!1);
      n.baseUri&&(s=fDc(je.from(n.baseUri),r)),i.dataset.href=s
    }
  }
}
function KuA(n, e){
  const t=new abt;
  t.image=e5o.image, t.link=e5o.link, t.paragraph=e5o.paragraph;
  const i=[], r=[];
  return n.codeBlockRendererSync?t.code=({
    text:s, lang:o, raw:a
  })=>{
    const l=w3t.nextId(), u=n.codeBlockRendererSync(d0h(o), s, a);
    return r.push([l, u]), `<div class="code" data-code="${l}">${LA(s)}</div>`
  }
  :n.codeBlockRenderer&&(t.code=({
    text:s, lang:o
  })=>{
    const a=w3t.nextId(), l=n.codeBlockRenderer(d0h(o), s);
    return i.push(l.then(u=>[a, u])), `<div class="code" data-code="${a}">${LA(s)}</div>`
  }), e.supportHtml||(t.html=({
    text:s
  })=>n.sanitizerOptions?.replaceWithPlaintext?LA(s):(e.isTrusted?s.match(/^(<span[^>]+>)|(<\/\s*span>)$/):void 0)?s:""), {
    renderer:t, codeBlocks:i, syncCodeBlocks:r
  }
}
function YuA(n){
  let e=n.value;
  return e.length>1e5&&(e=`${e.substr(0,1e5)}\u2026`), n.supportThemeIcons&&(e=OuA(e)), e
}
function l0h(n, e, t){
  const i=t.target.closest("a[data-href]");
  if(wf(i))try{
    let r=i.dataset.href;
    r&&(n.baseUri&&(r=fDc(je.from(n.baseUri), r)), e.actionHandler.callback(r, t))
  }
  catch(r){
    Gc(r)
  }
  finally{
    t.preventDefault()
  }
}
function ZuA(n, e){
  let t;
  try{
    t=gW(decodeURIComponent(e))
  }
  catch{
    
  }
  return t?(t=yOt(t, i=>{
    if(n.uris&&n.uris[i])return je.revive(n.uris[i])
  }), encodeURIComponent(JSON.stringify(t))):e
}
function u0h(n, e, t){
  const i=n.uris&&n.uris[e];
  let r=je.revive(i);
  return t?e.startsWith(_n.data+":")?e:(r||(r=je.parse(e)), og.uriToBrowserUri(r).toString(!0)):!r||je.parse(e).toString()===r.toString()?e:(r.query&&(r=r.with({
    query:ZuA(n, r.query)
  })), r.toString())
}
function d0h(n){
  if(!n)return"";
  const e=n.split(/[\s+|:|, |\{
    |\?]/, 1);
    return e.length?e[0]:n
  }
  function fDc(n, e){
    return/^\w[\w\d+.-]*:/.test(e)?e:n.path.endsWith("/")?ACc(n, e).toString():ACc(Td(n), e).toString()
  }
  function bDc(n, e){
    const{
      config:t,allowedSchemes:i
    }
    =XuA(n), r=new Ut;
    r.add(p0h("uponSanitizeAttribute", (s, o)=>{
      if(o.attrName==="style"||o.attrName==="class"){
        if(s.tagName==="SPAN"){
          if(o.attrName==="style"){
            o.keepAttr=/^(color\:(#[0-9a-fA-F]+|var\(--vscode(-[a-zA-Z0-9]+)+\));
            )?(background-color\:(#[0-9a-fA-F]+|var\(--vscode(-[a-zA-Z0-9]+)+\));
            )?(border-radius:[0-9]+px;
            )?$/.test(o.attrValue);
            return
          }
          else if(o.attrName==="class"){
            o.keepAttr=/^codicon codicon-[a-z\-]+( codicon-modifier-[a-z\-]+)?$/.test(o.attrValue);
            return
          }
        }
        o.keepAttr=!1;
        return
      }
      else if(s.tagName==="INPUT"&&s.attributes.getNamedItem("type")?.value==="checkbox"){
        if(o.attrName==="type"&&o.attrValue==="checkbox"||o.attrName==="disabled"||o.attrName==="checked"){
          o.keepAttr=!0;
          return
        }
        o.keepAttr=!1
      }
    })), r.add(p0h("uponSanitizeElement", (s, o)=>{
      if(o.tagName==="input"&&(s.attributes.getNamedItem("type")?.value==="checkbox"?s.setAttribute("disabled",""):n.replaceWithPlaintext||s.remove()),n.replaceWithPlaintext&&!o.allowedTags[o.tagName]&&o.tagName!=="body"&&s.parentElement){
        let a,l;
        if(o.tagName==="#comment")a=`<!--${s.textContent}-->`;
        else{
          const p=g0h.includes(o.tagName),g=s.attributes.length?" "+Array.from(s.attributes).map(f=>`${f.name}="${f.value}"`).join(" "):"";
          a=`<${o.tagName}${g}>`,p||(l=`</${o.tagName}>`)
        }
        const u=document.createDocumentFragment(),d=s.parentElement.ownerDocument.createTextNode(a);
        u.appendChild(d);
        const m=l?s.parentElement.ownerDocument.createTextNode(l):void 0;
        for(;
        s.firstChild;
        )u.appendChild(s.firstChild);
        m&&u.appendChild(m),s.nodeType===Node.COMMENT_NODE?s.parentElement.insertBefore(u,s):s.parentElement.replaceChild(u,s)
      }
    })), r.add(VSc(i));
    try{
      return Rbe.sanitize(e,{
        ...t,RETURN_TRUSTED_TYPE:!0
      })
    }
    finally{
      r.dispose()
    }
  }
  function XuA(n){
    const e=[_n.http, _n.https, _n.mailto, _n.data, _n.file, _n.vscodeFileResource, _n.vscodeRemote, _n.vscodeRemoteResource];
    return n.isTrusted&&e.push(_n.command), {
      config:{
        ALLOWED_TAGS:n.allowedTags??[...nkc],ALLOWED_ATTR:vDc,ALLOW_UNKNOWN_PROTOCOLS:!0
      },allowedSchemes:e
    }
  }
  function rKe(n){
    return bT(n)?lbt(n):n
  }
  function lbt(n, e){
    let t=n.value??"";
    t.length>1e5&&(t=`${t.substr(0,1e5)}\u2026`);
    const i=mDc(t, {
      async:!1,renderer:e?v0h.value:b0h.value
    });
    return bDc({
      isTrusted:!1
    }, i).toString().replace(/&(#\d+|[a-zA-Z]+);
    /g, r=>f0h.get(r)??r).trim()
  }
  function h0h(){
    const n=new abt;
    return n.code=({
      text:e
    })=>LA(e), n.blockquote=({
      text:e
    })=>e+`
`, n.html=e=>"", n.heading=function({
      tokens:e
    }){
      return this.parser.parseInline(e)+`
`
    }, n.hr=()=>"", n.list=function({
      items:e
    }){
      return e.map(t=>this.listitem(t)).join(`
`)+`
`
    }, n.listitem=({
      text:e
    })=>e+`
`, n.paragraph=function({
      tokens:e
    }){
      return this.parser.parseInline(e)+`
`
    }, n.table=function({
      header:e,rows:t
    }){
      return e.map(i=>this.tablecell(i)).join(" ")+`
`+t.map(i=>i.map(r=>this.tablecell(r)).join(" ")).join(`
`)+`
`
    }, n.tablerow=({
      text:e
    })=>e, n.tablecell=function({
      tokens:e
    }){
      return this.parser.parseInline(e)
    }, n.strong=({
      text:e
    })=>e, n.em=({
      text:e
    })=>e, n.codespan=({
      text:e
    })=>LA(e), n.br=e=>`
`, n.del=({
      text:e
    })=>e, n.image=e=>"", n.text=({
      text:e
    })=>e, n.link=({
      text:e
    })=>e, n
  }
  function X3o(n){
    let e="";
    return n.forEach(t=>{
      e+=t.raw
    }), e
  }
  function m0h(n){
    if(n.tokens)for(let e=n.tokens.length-1;
    e>=0;
    e--){
      const t=n.tokens[e];
      if(t.type==="text"){
        const i=t.raw.split(`
`),r=i[i.length-1];
        if(r.includes("`"))return sdA(n);
        if(r.includes("**"))return ddA(n);
        if(r.match(/\*\w/))return odA(n);
        if(r.match(/(^|\s)__\w/))return hdA(n);
        if(r.match(/(^|\s)_\w/))return adA(n);
        if(edA(r)||tdA(r)&&n.tokens.slice(0,e).some(s=>s.type==="text"&&s.raw.match(/\[[^\]]*$/))){
          const s=n.tokens.slice(e+1);
          return s[0]?.type==="link"&&s[1]?.type==="text"&&s[1].raw.match(/^ *"[^"]*$/)||r.match(/^[^"]* +"[^"]*$/)?ldA(n):cdA(n)}else if(r.match(/(^|\s)\[\w*/))return udA(n)}}}function edA(n){return!!n.match(/(^|\s)\[.*\]\(\w*/)}function tdA(n){return!!n.match(/^[^\[]*\]\([^\)]*$/)}function ndA(n){const e=n.items[n.items.length-1],t=e.tokens?e.tokens[e.tokens.length-1]:void 0,i=u=>{const m=u.items.at(-1)?.tokens.at(-1);return m?.type==="heading"||m?.type==="list"&&i(m)};let r;if(t?.type==="text"&&!("inRawBlock"in e))r=m0h(t);else if(i(n)){const u=cbt(n.raw.trim()+" &nbsp;
          ")[0];return u.type!=="list"?void 0:u}if(!r||r.type!=="paragraph")return;const s=X3o(n.items.slice(0,-1)),o=e.raw.match(/^(\s*(-|\d+\.|\*) +)/)?.[0];if(!o)return;const a=o+X3o(e.tokens.slice(0,-1))+r.raw,l=cbt(s+a)[0];if(l.type==="list")return l}function idA(n){for(let e=0;e<A0h;e++){const t=rdA(n);if(t)n=t;else break}return n}function rdA(n){let e,t;for(e=0;e<n.length;e++){const i=n[e];if(i.type==="paragraph"&&i.raw.match(/(\n|^)\|/)){t=mdA(n.slice(e));break}if(e===n.length-1&&i.type==="list"){const r=ndA(i);if(r){t=[r];break}}if(e===n.length-1&&i.type==="paragraph"){const r=m0h(i);if(r){t=[r];break}}}if(t){const i=[...n.slice(0,e),...t];return i.links=n.links,i}return null}function sdA(n){return sKe(n,"`")}function odA(n){return sKe(n,"*")}function adA(n){return sKe(n,"_")}function cdA(n){return sKe(n,")")}function ldA(n){return sKe(n,'")')}function udA(n){return sKe(n,"](https://microsoft.com)")}function ddA(n){return sKe(n,"**")}function hdA(n){return sKe(n,"__")}function sKe(n,e){const t=X3o(Array.isArray(n)?n:[n]);return cbt(t+e)[0]}function mdA(n){const e=X3o(n),t=e.split(`
`);let i,r=!1;for(let s=0;s<t.length;s++){const o=t[s].trim();if(typeof i>"u"&&o.match(/^\s*\|/)){const a=o.match(/(\|[^\|]+)(?=\||$)/g);a&&(i=a.length)}else if(typeof i=="number")if(o.match(/^\s*\|/)){if(s!==t.length-1)return;r=!0}else return}if(typeof i=="number"&&i>0){const s=r?t.slice(0,-1).join(`
`):e,o=!!s.match(/\|\s*$/),a=s+(o?"":"|")+`
|${
            " --- |".repeat(i)
          }
          `;return cbt(a)}}function p0h(n,e){return Rbe.addHook(n,e),$i(()=>Rbe.removeHook(n))}var e5o,g0h,vDc,f0h,b0h,v0h,A0h,y3=
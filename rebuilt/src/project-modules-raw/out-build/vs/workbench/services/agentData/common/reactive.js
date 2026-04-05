// Module: out-build/vs/workbench/services/agentData/common/reactive.js
// Offset: 28168098 (bundle byte offset)
// Size: 7110 bytes

Yb=class{
  constructor(n){
    this._listeners=new Set, this._value=n
  }
  get value(){
    return this._value
  }
  set(n){
    this._value=n;
    for(const e of this._listeners)e(n)
  }
  onChange(n){
    return this._listeners.add(n), {
      dispose:()=>this._listeners.delete(n)
    }
  }
}, uva=class{
  constructor(n, e){
    this.sources=n, this.derive=e, this._listeners=new Set, this._value=this._compute(), this._subscriptions=n.map(t=>t.onChange(()=>{
      this._value=this._compute();
      for(const i of this._listeners)i(this._value)
    }))
  }
  get value(){
    return this._value
  }
  onChange(n){
    return this._listeners.add(n), {
      dispose:()=>this._listeners.delete(n)
    }
  }
  dispose(){
    for(const n of this._subscriptions)n.dispose();
    this._listeners.clear()
  }
  _compute(){
    const n=this.sources.map(e=>e.value);
    return this.derive(...n)
  }
}, NXg=class{
  constructor(n){
    this.sources=n, this._listeners=new Set, this._value=this._compute(), this._subscriptions=n.map(e=>e.onChange(()=>{
      this._value=this._compute();
      for(const t of this._listeners)t(this._value)
    }))
  }
  get value(){
    return this._value
  }
  onChange(n){
    return this._listeners.add(n), {
      dispose:()=>this._listeners.delete(n)
    }
  }
  dispose(){
    for(const n of this._subscriptions)n.dispose();
    this._listeners.clear()
  }
  _compute(){
    return this.sources.flatMap(n=>n.value)
  }
}, JAi=class{
  constructor(n, e){
    this._options={
      load:e.load,save:e.save,serialize:e.serialize??(r=>r),deserialize:e.deserialize??(r=>r)
    };
    const t=e.debounceSave??(r=>p9A(r));
    this._debouncedSave=t(this._options.save);
    let i=n;
    try{
      const r=this._options.load();
      r!==void 0&&(i=this._options.deserialize(r))
    }
    catch{
      
    }
    this._inner=new Yb(i)
  }
  get value(){
    return this._inner.value
  }
  set(n){
    this._inner.set(n);
    try{
      this._debouncedSave.schedule(this._options.serialize(n))
    }
    catch{
      
    }
  }
  flush(){
    this._debouncedSave.flush()
  }
  onChange(n){
    return this._inner.onChange(n)
  }
}
}
});
function g9A(n){
  const e={
    
  };
  try{
    for(const t of n.allServers())e[t.identifier]=t.name
  }
  catch{
    
  }
  return e
}
function MXg(n){
  return n.replace(/\\/g, "/")
}
function f9A(n, e){
  const t=MXg(n);
  if(t.endsWith("SKILL.md")){
    const i=t.split("/"), r=i[i.length-2];
    if(r&&r.length>0)return r
  }
  return e.replace(/\.md$/i, "")
}
async function FXg({
  services:n, existingRuleIds:e, existingSubagentNames:t, supportsSkills:i, supportsSubagents:r, onSelectOption:s, includeGlobalCommands:o=!0
}){
  try{
    const a=n.cursorCommandsService.getRecentlyUsedGlobalOrder(), l=Date.now(), u=new Map;
    a.forEach((C, x)=>{
      u.set(`${C.type}:${C.identifier}`,l-x*1e3)
    });
    const d=[], m=new Set, p=g9A(n.mcpService), [g, f, A]=await Promise.all([i?n.cursorRulesService.getAllRules().catch(()=>[]):Promise.resolve([]), n.cursorCommandsService.getCommands().catch(()=>[]), r?n.subagentsService.getAllSubagents().catch(()=>[]):Promise.resolve([])]), w=o?f:f.filter(C=>n.cursorCommandsService.getCommandMetadata?.(C.filename)?.source!=="global");
    if(i)try{
      const C=new Set(e);
      for(const x of g){
        const I=MXg(x.fullPath);
        if(!I.endsWith("SKILL.md")||C.has(x.filename)||!(I.includes(".cursor/skills/")||I.includes(".cursor/plugins/")||I.includes(".cursor/skills-cursor/")||I.includes(".claude/skills/")||I.includes(".claude/plugins/")||I.includes(".agents/skills/")||I.includes(".codex/skills/")))continue;
        const R=f9A(I,x.filename),N=u.get(`skill:${x.filename}`),M=x.description,O={
          case:"cursor_skill",filename:x.filename,displayName:R
        };
        d.push({
          id:`skill-${x.filename}`,name:R,description:x.description,type:"skill",lastUsedTime:N,tooltip:M?()=>Cd.createElement(XD,{
            size:"sm",gfm:!1,children:M
          }):void 0,payload:O,onSelect:()=>s(O)
        })
      }
    }
    catch{
      
    }
    try{
      for(const C of w){
        if(m.has(C.filename))continue;
        m.add(C.filename);
        const x=C.filename.replace(/\\/g,"/"),I=x.replace(/\.(md|mcp|txt)$/i,""),B=x.toLowerCase().endsWith(".mcp");
        let R;
        if(B){
          const W=I.split("/");
          if(W.length>1){
            const z=W[0],Y=p[z]??z,j=W.slice(1).join("/");
            R=`${Y}/${j}`
          }
          else R=I
        }
        else{
          const W=I.split("/");
          R=W[W.length-1]??I
        }
        const N=C.content?.split(/\r?\n/)[0]?.trim(),M=u.get(`command:${C.filename}`),O={
          case:"cursor_command",filename:C.filename,content:C.content
        },$=I.includes("/"),H=()=>{
          if(!(!C.content&&!$))return()=>Cd.createElement(Cd.Fragment,null,$&&Cd.createElement("div",{
            style:{
              fontSize:"11px",opacity:.7,marginBottom:"6px",fontFamily:"var(--vscode-editor-font-family, monospace)"
            }
          },`/${I}`),C.content&&Cd.createElement(XD,{
            size:"sm",gfm:!1,children:C.content
          }))
        };
        d.push({
          id:`command-${C.filename}`,name:R,description:B?void 0:N,type:"command",lastUsedTime:M,tooltip:H(),payload:O,onSelect:()=>s(O)
        })
      }
    }
    catch{
      
    }
    try{
      const C=n.mcpService.promptsCache();
      for(const[x,I]of Object.entries(C))for(const B of I){
        const R=`${x}/${B.name}.mcp`;
        if(m.has(R))continue;
        m.add(R);
        const M=`${p[x]??x}/${B.name}`,O=u.get(`command:${R}`),$=B.description,H={
          case:"cursor_command",filename:R,content:""
        };
        d.push({
          id:`mcp-${R}`,name:M,description:B.description,type:"command",lastUsedTime:O,tooltip:$?()=>Cd.createElement(XD,{
            size:"sm",gfm:!1,children:$
          }):void 0,payload:H,onSelect:()=>s(H)
        })
      }
    }
    catch{
      
    }
    if(r)try{
      const C=new Set(t);
      for(const x of A){
        if(C.has(x.name))continue;
        const I=u.get(`subagent:${x.name}`),B=x.description||x.prompt,R={
          case:"subagent",name:x.name,description:x.description,prompt:x.prompt,fullPath:x.fullPath
        };
        d.push({
          id:`subagent-${x.name}`,name:x.name,description:x.description,type:"subagent",lastUsedTime:I,tooltip:B?()=>Cd.createElement(XD,{
            size:"sm",gfm:!1,children:B
          }):void 0,payload:R,onSelect:()=>s(R)
        })
      }
    }
    catch{
      
    }
    return d
  }
  catch{
    return[]
  }
}
function b9A(n){
  const e=[];
  return n.reset&&e.push({
    id:"action-reset", name:"Reset", description:"Clear the conversation and start fresh", type:"action", onSelect:n.reset.onSelect, payload:{
      case:"slash_action",action:"reset"
    }
  }), n.summarize&&e.push({
    id:"action-summarize", name:"Summarize", description:"Summarize the conversation", type:"action", onSelect:n.summarize.onSelect, payload:{
      case:"slash_action",action:"summarize"
    }
  }), n.bugbot&&e.push({
    id:"action-bugbot", name:"Agent Review", description:"Request an agent to review your code", type:"action", onSelect:n.bugbot.onSelect, payload:{
      case:"slash_action",action:"bugbot"
    }
  }), n.openBrowser&&e.push({
    id:"action-open-browser", name:"Open Browser", description:"Open a browser for web interactions", type:"action", onSelect:n.openBrowser.onSelect, payload:{
      case:"slash_action",action:"open_browser"
    }
  }), n.pluginAdd&&e.push({
    id:"action-plugin-add", name:"/add-plugin", description:"Install a plugin from the marketplace", type:"action", onSelect:n.pluginAdd.onSelect, payload:{
      case:"slash_action",action:"plugin_add"
    }, tooltip:()=>Cd.createElement(XD, {
      size:"sm",gfm:!1,children:"Browse and install plugins from the Cursor marketplace. Type a search query after the command to find plugins."
    })
  }), n.pluginRemove&&e.push({
    id:"action-plugin-remove", name:"/remove-plugin", description:"Uninstall an installed plugin", type:"action", onSelect:n.pluginRemove.onSelect, payload:{
      case:"slash_action",action:"plugin_remove"
    }, tooltip:()=>Cd.createElement(XD, {
      size:"sm",gfm:!1,children:"Remove an installed plugin. Type a search query after the command to find plugins to uninstall."
    })
  }), e
}
function v9A(n, e){
  return e.trim().toLowerCase().replace(/^\//, "").length>0?Krl(n, e):Yrl(n.filter(r=>r.type==="skill"||r.type==="command"))
}
function A9A(n){
  return Zrl(n)
}
var OXg=
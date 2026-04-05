// Module: out-build/vs/workbench/contrib/composer/browser/capabilities/contextWindow.js
// Offset: 30374626 (bundle byte offset)
// Size: 3666 bytes

Uv(), SI(), S$e(), cp(), Fwi=class extends Pq{
  constructor(e, t, i){
    super(e, t, i), this.priority=100, this.type=ko.CONTEXT_WINDOW, this.name=Jtt[ko.CONTEXT_WINDOW], this.schema={
      
    }
  }
  static getContextUsagePercentage(e, t){
    try{
      return t.getComposerDataIfLoaded(e)?.contextUsagePercent
    }
    catch{
      return
    }
  }
  static getContextTokenData(e, t){
    try{
      const i=t.getComposerDataIfLoaded(e),r=i?.contextTokensUsed,s=i?.contextTokenLimit;
      return r!==void 0&&s!==void 0?{
        tokensUsed:r,tokenLimit:s
      }
      :void 0
    }
    catch{
      return
    }
  }
  static getContextWindowStatus(e, t){
    try{
      const i=t.getComposerDataIfLoaded(e),r=i?.contextUsagePercent,s=i?.contextTokensUsed,o=i?.contextTokenLimit;
      return r!==void 0?{
        percentageRemaining:100-r,tokensUsed:s,tokenLimit:o
      }
      :void 0
    }
    catch{
      return
    }
  }
}, Fwi=__decorate([__param(2, Oa)], Fwi), ace(ko.CONTEXT_WINDOW, Fwi)
}
});
function Owi(n){
  return n.trim().toLowerCase()
}
function aty(n){
  const e=n.trim();
  if(!e)return null;
  const t=e.indexOf(Vkt);
  if(t===-1)return Owi(e);
  const i=e.substring(0, t), r=e.substring(t+1);
  if(!i||!r)return null;
  const s=i===P2?P2:Owi(i), o=r===P2?P2:Owi(r);
  return`${s}${Vkt}${o}`
}
function JEe(n){
  if(n.length===0)return{
    valid:!1, error:"Name cannot be empty"
  };
  if(n.length>256)return console.warn(`[MCP] Name too long (${n.length} chars): ${n.substring(0,50)}...`), {
    valid:!1, error:`Name too long (${n.length} characters, maximum 256)`
  };
  if(n.trim().length===0)return{
    valid:!1, error:"Name cannot be empty or only whitespace"
  };
  for(const e of ySf)if(n.includes(e))return{
    valid:!1, error:`Name cannot contain ${e} character`
  };
  return{
    valid:!0
  }
}
function lmu(n, e){
  const t=n===P2?P2:Owi(n), i=e===P2?P2:Owi(e);
  if(t!==P2){
    const r=JEe(t);
    if(!r.valid)throw new Error(`Invalid server ID: ${r.error}`)
  }
  if(i!==P2){
    const r=JEe(i);
    if(!r.valid)throw new Error(`Invalid tool name: ${r.error}`)
  }
  return`${t}${Vkt}${i}`
}
function cty(n){
  const e=n.indexOf(Vkt);
  if(e===-1)return null;
  const t=n.substring(0, e), i=n.substring(e+1);
  return!t||!i?null:t===P2?i===P2?{
    serverId:P2, toolName:P2
  }
  :JEe(i).valid?{
    serverId:P2, toolName:i
  }
  :null:JEe(t).valid?i===P2?{
    serverId:t, toolName:P2
  }
  :JEe(i).valid?{
    serverId:t, toolName:i
  }
  :null:null
}
function lty(n, e){
  if(n.startsWith("mcp_")){
    const t=n.substring(4);
    if(e){
      const r=e.replace(/[^a-zA-Z0-9_-]/g,"_");
      if(t.startsWith(r+"_")){
        const s=t.substring(r.length+1);
        if(s)return{
          serverId:e,actualToolName:s
        }
      }
      return{
        serverId:e,actualToolName:t
      }
    }
    const i=t.indexOf("_");
    if(i!==-1&&i>0&&i<t.length-1){
      const r=t.substring(0,i),s=t.substring(i+1);
      if(r&&s)return{
        serverId:r,actualToolName:s
      }
    }
    return console.warn(`[MCP] Cannot parse tool name without serverNameFallback: ${n}`), null
  }
  return e?{
    serverId:e, actualToolName:n
  }
  :(console.warn(`[MCP] Cannot extract tool info from: ${n}`), null)
}
function vSf(n, e, t){
  const i=cty(t);
  if(!i)return console.warn(`Invalid MCP allowlist entry: ${t}`), !1;
  const r=e.toLowerCase(), s=i.toolName.toLowerCase();
  return i.serverId===P2?i.toolName===P2?!0:s===r:n.toLowerCase()!==i.serverId.toLowerCase()?!1:i.toolName===P2?!0:s===r
}
function umu(n){
  const{
    serverId:e, toolName:t, allowlist:i
  }
  =n, r=JEe(t), s=JEe(e);
  return!r.valid||!s.valid?!1:i.some(o=>vSf(e, t, o))
}
function ASf(n, e, t){
  const i=JEe(n), r=JEe(e);
  if(!i.valid||!r.valid)return console.error(`Cannot add MCP names with reserved characters to allowlist - serverId: '${e}', toolName: '${n}'`), t;
  const s=lmu(e, n);
  if(t.some(a=>a.toLowerCase()===s))return t;
  const o=lmu(e, P2);
  return t.some(a=>a.toLowerCase()===o)?t:[...t, s]
}
function r0a(n, e){
  const t=[];
  for(const i of n)e.includes(i.name)&&i.args.length>0&&i.args[0].type==="word"?t.push(i.name+" "+i.args[0].value):t.push(i.name);
  return[...new Set(t)]
}
var Vkt, P2, ySf, nit=
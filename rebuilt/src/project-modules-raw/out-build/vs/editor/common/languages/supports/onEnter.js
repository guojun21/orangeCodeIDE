// Module: out-build/vs/editor/common/languages/supports/onEnter.js
// Offset: 747663 (bundle byte offset)
// Size: 3519 bytes

_s(), oa(), Xze(), $ch=class oNi{
  constructor(e){
    e=e||{
      
    }, e.brackets=e.brackets||[["(", ")"], ["{", "}"], ["[", "]"]], this._brackets=[], e.brackets.forEach(t=>{
      const i=oNi._createOpenBracketRegExp(t[0]),r=oNi._createCloseBracketRegExp(t[1]);
      i&&r&&this._brackets.push({
        open:t[0],openRegExp:i,close:t[1],closeRegExp:r
      })
    }), this._regExpRules=e.onEnterRules||[]
  }
  onEnter(e, t, i, r){
    if(e>=3)for(let s=0, o=this._regExpRules.length;
    s<o;
    s++){
      const a=this._regExpRules[s];
      if([{
        reg:a.beforeText,text:i
      },{
        reg:a.afterText,text:r
      },{
        reg:a.previousLineText,text:t
      }
      ].every(u=>u.reg?(u.reg.lastIndex=0,u.reg.test(u.text)):!0))return a.action
    }
    if(e>=2&&i.length>0&&r.length>0)for(let s=0, o=this._brackets.length;
    s<o;
    s++){
      const a=this._brackets[s];
      if(a.openRegExp.test(i)&&a.closeRegExp.test(r))return{
        indentAction:$R.IndentOutdent
      }
    }
    if(e>=2&&i.length>0){
      for(let s=0,o=this._brackets.length;
      s<o;
      s++)if(this._brackets[s].openRegExp.test(i))return{
        indentAction:$R.Indent
      }
    }
    return null
  }
  static _createOpenBracketRegExp(e){
    let t=UI(e);
    return/\B/.test(t.charAt(0))||(t="\\b"+t), t+="\\s*$", oNi._safeRegExp(t)
  }
  static _createCloseBracketRegExp(e){
    let t=UI(e);
    return/\B/.test(t.charAt(t.length-1))||(t=t+"\\b"), t="^\\s*"+t, oNi._safeRegExp(t)
  }
  static _safeRegExp(e){
    try{
      return new RegExp(e)
    }
    catch(t){
      return Gc(t),null
    }
  }
}
}
});
function Gkc(n){
  return n&&typeof n=="object"&&(!n.overrideIdentifier||typeof n.overrideIdentifier=="string")&&(!n.resource||n.resource instanceof je)
}
function vrA(n){
  return n&&typeof n=="object"&&(!n.overrideIdentifiers||Array.isArray(n.overrideIdentifiers))&&!n.overrideIdentifier&&(!n.resource||n.resource instanceof je)
}
function qch(n){
  switch(n){
    case 1:return"APPLICATION";
    case 2:return"USER";
    case 3:return"USER_LOCAL";
    case 4:return"USER_REMOTE";
    case 5:return"WORKSPACE";
    case 6:return"WORKSPACE_FOLDER";
    case 7:return"DEFAULT";
    case 8:return"MEMORY"
  }
}
function ArA(n, e){
  switch(e){
    case 1:return n.applicationValue;
    case 2:return n.userValue;
    case 3:return n.userLocalValue;
    case 4:return n.userRemoteValue;
    case 5:return n.workspaceValue;
    case 6:return n.workspaceFolderValue;
    case 7:return n.defaultValue;
    case 8:return n.memoryValue;
    default:QN(e)
  }
}
function yrA(n){
  return n.applicationValue!==void 0||n.userValue!==void 0||n.userLocalValue!==void 0||n.userRemoteValue!==void 0||n.workspaceValue!==void 0||n.workspaceFolderValue!==void 0
}
function y4n(n, e){
  const t=Object.create(null);
  for(const i in n)Hch(t, i, n[i], e);
  return t
}
function Hch(n, e, t, i){
  const r=e.split("."), s=r.pop();
  let o=n;
  for(let a=0;
  a<r.length;
  a++){
    const l=r[a];
    let u=o[l];
    switch(typeof u){
      case"undefined":u=o[l]=Object.create(null);
      break;
      case"object":if(u===null){
        i(`Ignoring ${e} as ${r.slice(0,a+1).join(".")} is null`);
        return
      }
      break;
      default:i(`Ignoring ${e} as ${r.slice(0,a+1).join(".")} is ${JSON.stringify(u)}`);
      return
    }
    o=u
  }
  if(typeof o=="object"&&o!==null)try{
    o[s]=t
  }
  catch{
    i(`Ignoring ${e} as ${r.join(".")} is ${JSON.stringify(o)}`)
  }
  else i(`Ignoring ${e} as ${r.join(".")} is ${JSON.stringify(o)}`)
}
function wrA(n, e){
  const t=e.split(".");
  Jch(n, t)
}
function Jch(n, e){
  if(!n)return;
  const t=e.shift();
  if(e.length===0){
    delete n[t];
    return
  }
  if(Object.keys(n).indexOf(t)!==-1){
    const i=n[t];
    typeof i=="object"&&!Array.isArray(i)&&(Jch(i, e), Object.keys(i).length===0&&delete n[t])
  }
}
function n4o(n, e, t){
  function i(o, a){
    let l=o;
    for(const u of a){
      if(typeof l!="object"||l===null)return;
      l=l[u]
    }
    return l
  }
  const r=e.split("."), s=i(n, r);
  return typeof s>"u"?t:s
}
function Gch(n){
  return n.replace(/[\[\]]/g, "")
}
var Fn, Wch, Ei=
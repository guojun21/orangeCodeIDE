// Module: out-build/vs/base/common/jsonEdit.js
// Offset: 27633126 (bundle byte offset)
// Size: 2629 bytes

aB(), ant()
}
});
function _mn(n){
  return n.hasOwnProperty("workspace")
}
function cnt(n){
  return n.hasOwnProperty("folderUri")
}
function UJg(n){
  return Vfa(n)||$Jg(n)
}
function Vfa(n){
  const e=n;
  return typeof e?.path=="string"&&(!e.name||typeof e.name=="string")
}
function $Jg(n){
  const e=n;
  return typeof e?.uri=="string"&&(!e.name||typeof e.name=="string")
}
function Dru(n, e, t, i, r){
  if(n.scheme!==i.scheme)return{
    name:t, uri:n.toString(!0)
  };
  let s=e?void 0:r.relativePath(i, n);
  if(s!==void 0)s.length===0?s=".":Sc&&(s=qJg(s));
  else if(n.scheme===_n.file)s=n.fsPath, Sc&&(s=qJg(s));
  else if(r.isEqualAuthority(n.authority, i.authority))s=n.path;
  else return{
    name:t, uri:n.toString(!0)
  };
  return{
    name:t, path:s
  }
}
function qJg(n){
  return n=pz(n), JFt(n)||(n=vgt(n)), n
}
function Bru(n, e, t){
  const i=[], r=new Set, s=t.dirname(e);
  for(const o of n){
    let a;
    if(Vfa(o))o.path&&(a=t.resolvePath(s, o.path));
    else if($Jg(o))try{
      a=je.parse(o.uri),a.path[0]!==Rm.sep&&(a=a.with({
        path:Rm.sep+a.path
      }))
    }
    catch(l){
      console.warn(l)
    }
    if(a){
      const l=t.getComparisonKey(a);
      if(!r.has(l)){
        r.add(l);
        const u=o.name||t.basenameOrAuthority(a);
        i.push(new H4o({
          uri:a,name:u,index:i.length
        },o))
      }
    }
  }
  return i
}
function HJg(n, e, t, i, r){
  const s=fFA(e, n), o=r.dirname(e), a=r.dirname(i), l=[];
  for(const p of s.folders){
    const g=Vfa(p)?r.resolvePath(o, p.path):je.parse(p.uri);
    let f;
    t?f=!1:f=!Vfa(p)||FR(p.path), l.push(Dru(g, f, p.name, a, r))
  }
  const u={
    insertSpaces:!1, tabSize:4, eol:xv||Fs?`
`:`\r
`
  }, d=oie(n, ["folders"], l, u);
  let m=Iru(n, d);
  return Lze(s.remoteAuthority, vgi(i))&&(m=Iru(m, gFA(m, ["remoteAuthority"], u))), m
}
function fFA(n, e){
  const t=L1(e);
  if(t&&Array.isArray(t.folders))t.folders=t.folders.filter(i=>UJg(i));
  else throw new Error(`${n} looks like an invalid workspace file.`);
  return t
}
function bFA(n){
  return n.workspace&&typeof n.workspace=="object"&&typeof n.workspace.id=="string"&&typeof n.workspace.configPath=="string"
}
function vFA(n){
  return typeof n.folderUri=="string"
}
function AFA(n){
  return typeof n.fileUri=="string"
}
function yFA(n, e){
  const t={
    workspaces:[], files:[]
  };
  if(n){
    const i=function(s, o){
      for(let a=0;
      a<s.length;
      a++)try{
        o(s[a],a)
      }
      catch(l){
        e.warn(`Error restoring recent entry ${JSON.stringify(s[a])}: ${l.toString()}. Skip entry.`)
      }
    }, r=n;
    Array.isArray(r.entries)&&i(r.entries, s=>{
      const o=s.label,a=s.remoteAuthority;
      bFA(s)?t.workspaces.push({
        label:o,remoteAuthority:a,workspace:{
          id:s.workspace.id,configPath:je.parse(s.workspace.configPath)
        }
      }):vFA(s)?t.workspaces.push({
        label:o,remoteAuthority:a,folderUri:je.parse(s.folderUri)
      }):AFA(s)&&t.files.push({
        label:o,remoteAuthority:a,fileUri:je.parse(s.fileUri)
      })
    })
  }
  return t
}
var CM, vL=
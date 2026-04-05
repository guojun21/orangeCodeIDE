// Module: out-build/vs/platform/quickinput/common/quickInput.js
// Offset: 2382337 (bundle byte offset)
// Size: 4652 bytes

Wt(), zr(), ASh={
  ctrlCmd:!1, alt:!1, shift:!1
}, (function(n){
  n[n.Blur=1]="Blur", n[n.Gesture=2]="Gesture", n[n.Other=3]="Other"
})(I9e||(I9e={
  
})), (function(n){
  n.QuickPick="quickPick", n.InputBox="inputBox", n.QuickWidget="quickWidget"
})(ySh||(ySh={
  
})), (function(n){
  n[n.NONE=0]="NONE", n[n.FIRST=1]="FIRST", n[n.SECOND=2]="SECOND", n[n.LAST=3]="LAST"
})(IW||(IW={
  
})), (function(n){
  n[n.First=1]="First", n[n.Second=2]="Second", n[n.Last=3]="Last", n[n.Next=4]="Next", n[n.Previous=5]="Previous", n[n.NextPage=6]="NextPage", n[n.PreviousPage=7]="PreviousPage", n[n.NextSeparator=8]="NextSeparator", n[n.PreviousSeparator=9]="PreviousSeparator"
})(zE||(zE={
  
})), (function(n){
  n[n.Title=1]="Title", n[n.Inline=2]="Inline", n[n.Left=3]="Left"
})(Q3t||(Q3t={
  
})), hBc=class{
  constructor(n){
    this.options=n
  }
  getItemLabel(n){
    return n.label
  }
  getItemDescription(n){
    if(!this.options?.skipDescription)return n.description
  }
  getItemPath(n){
    if(!this.options?.skipPath)return n.resource?.scheme===_n.file?n.resource.fsPath:n.resource?.path
  }
}, DW=new hBc, ha=xi("quickInputService")
}
});
function vhA(n, e){
  const{
    os:t, tildify:i, relative:r
  }
  =e;
  if(r){
    const a=AhA(n, r, t);
    if(typeof a=="string")return a
  }
  let s=n.fsPath;
  if(t===1&&!Sc?s=s.replace(/\//g, "\\"):t!==1&&Sc&&(s=s.replace(/\\/g, "/")), t!==1&&i?.userHome){
    const a=i.userHome.fsPath;
    let l;
    n.scheme!==i.userHome.scheme&&n.path[0]===Rm.sep&&n.path[1]!==Rm.sep?l=i.userHome.with({
      path:n.path
    }).fsPath:l=s, s=$3n(l, a, t)
  }
  return(t===1?iE:Rm).normalize(pz(s, t===1))
}
function AhA(n, e, t){
  const i=t===1?iE:Rm, r=t===3?Iu:ySe, s=e.getWorkspace(), o=s.folders.at(0);
  if(!o)return;
  n.scheme!==o.uri.scheme&&n.path[0]===Rm.sep&&n.path[1]!==Rm.sep&&(n=o.uri.with({
    path:n.path
  }));
  const a=e.getWorkspaceFolder(n);
  if(!a)return;
  let l;
  if(r.isEqual(a.uri, n)?l="":l=r.relativePath(a.uri, n)??"", l&&(l=i.normalize(l)), s.folders.length>1&&!e.noPrefix){
    const u=a.name?a.name:r.basenameOrAuthority(a.uri);
    l=l?`${u} \u2022 ${l}`:u
  }
  return l
}
function pz(n, e=Sc){
  return cFn(n, e)?n.charAt(0).toUpperCase()+n.slice(1):n
}
function $3n(n, e, t=cf){
  if(t===1||!n||!e)return n;
  let i=j5o.original===e?j5o.normalized:void 0;
  i||(i=e, Sc&&(i=vgt(i)), i=`${xH(i,Rm.sep)}${Rm.sep}`, j5o={
    original:e, normalized:i
  });
  let r=n;
  return Sc&&(r=vgt(r)), (t===3?r.startsWith(i):pgt(r, i))?`~/${r.substr(i.length)}`:n
}
function mBc(n, e){
  return n.replace(/^~($|\/|\\)/, `${e}$1`)
}
function wSh(n, e=C1){
  const t=new Array(n.length);
  let i=!1;
  for(let r=0;
  r<n.length;
  r++){
    const s=n[r];
    if(s===""){
      t[r]=`.${e}`;
      continue
    }
    if(!s){
      t[r]=s;
      continue
    }
    i=!0;
    let o="", a=s;
    a.indexOf(j3t)===0?(o=a.substr(0, a.indexOf(j3t)+j3t.length), a=a.substr(a.indexOf(j3t)+j3t.length)):a.indexOf(e)===0?(o=a.substr(0, a.indexOf(e)+e.length), a=a.substr(a.indexOf(e)+e.length)):a.indexOf(z3t)===0&&(o=a.substr(0, a.indexOf(z3t)+z3t.length), a=a.substr(a.indexOf(z3t)+z3t.length));
    const l=a.split(e);
    for(let u=1;
    i&&u<=l.length;
    u++)for(let d=l.length-u;
    i&&d>=0;
    d--){
      i=!1;
      let m=l.slice(d,d+u).join(e);
      for(let p=0;
      !i&&p<n.length;
      p++)if(p!==r&&n[p]&&n[p].indexOf(m)>-1){
        const g=d+u===l.length,f=d>0&&n[p].indexOf(e)>-1?e+m:m,A=n[p].endsWith(f);
        i=!g||A
      }
      if(!i){
        let p="";
        (l[0].endsWith(":")||o!=="")&&(d===1&&(d=0,u++,m=l[0]+e+m),d>0&&(p=l[0]+e),p=o+p),d>0&&(p=p+fBc+e),p=p+m,d+u<l.length&&(p=p+e+fBc),t[r]=p
      }
    }
    i&&(t[r]=s)
  }
  return t
}
function _Sh(n, e=Object.create(null)){
  const t=[];
  let i=!1, r="";
  for(const s of n)if(s==="$"||i&&s==="{")r&&t.push({
    value:r, type:SRe.TEXT
  }), r="", i=!0;
  else if(s==="}"&&i){
    const o=e[r];
    if(typeof o=="string")o.length&&t.push({
      value:o,type:SRe.VARIABLE
    });
    else if(o){
      const a=t[t.length-1];
      (!a||a.type!==SRe.SEPARATOR)&&t.push({
        value:o.label,type:SRe.SEPARATOR
      })
    }
    r="", i=!1
  }
  else r+=s;
  return r&&!i&&t.push({
    value:r, type:SRe.TEXT
  }), t.filter((s, o)=>{
    if(s.type===SRe.SEPARATOR){
      const a=t[o-1],l=t[o+1];
      return[a,l].every(u=>u&&(u.type===SRe.VARIABLE||u.type===SRe.TEXT)&&u.value.length>0)
    }
    return!0
  }).map(s=>s.value).join("")
}
function AKe(n, e){
  return Fs||e?n.replace(/\(&&\w\)|&&/g, "").replace(/&/g, Fs?"&":"&&"):n.replace(/&&|&/g, t=>t==="&"?"&&":"&")
}
function Q5o(n, e){
  const t=n.replace(/\(&&\w\)|&&/g, "");
  if(e)return t;
  if(Fs)return{
    withMnemonic:t, withoutMnemonic:t
  };
  let i;
  return Sc?i=n.replace(/&&|&/g, r=>r==="&"?"&&":"&"):i=n.replace(/&&/g, "_"), {
    withMnemonic:i, withoutMnemonic:t
  }
}
function pBc(n){
  return n.replace(/&/g, "&&")
}
function gBc(n){
  if(n.endsWith("]")){
    const e=n.lastIndexOf(" [", n.length-2);
    if(e!==-1){
      const t=CSh(n.substring(0,e)),i=n.substring(e);
      return{
        name:t.name+i,parentPath:t.parentPath
      }
    }
  }
  return CSh(n)
}
function CSh(n){
  const e=n.indexOf("/")!==-1?Rm:iE, t=e.basename(n), i=e.dirname(n);
  return t.length?{
    name:t, parentPath:i
  }
  :{
    name:i, parentPath:""
  }
}
var j5o, fBc, j3t, z3t, SRe, iL=
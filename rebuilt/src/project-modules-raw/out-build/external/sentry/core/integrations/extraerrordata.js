// Module: out-build/external/sentry/core/integrations/extraerrordata.js
// Offset: 121586 (bundle byte offset)
// Size: 1673 bytes

ZT(), sW(), US(), h9(), xpt(), Wj(), mBe(), NZd="ExtraErrorData", MZd=((n={
  
})=>{
  const{
    depth:e=3, captureErrorCause:t=!0
  }
  =n;
  return{
    name:NZd, processEvent(i, r, s){
      const{
        maxValueLength:o
      }
      =s.getOptions();
      return YVv(i,r,e,t,o)
    }
  }
}), qNo=MZd
}
});
function FZd(n, e){
  let t=0;
  for(let i=n.length-1;
  i>=0;
  i--){
    const r=n[i];
    r==="."?n.splice(i, 1):r===".."?(n.splice(i, 1), t++):t&&(n.splice(i, 1), t--)
  }
  if(e)for(;
  t--;
  t)n.unshift("..");
  return n
}
function OZd(n){
  const e=n.length>1024?`<truncated>${n.slice(-1024)}`:n, t=GZd.exec(e);
  return t?t.slice(1):[]
}
function Ewc(...n){
  let e="", t=!1;
  for(let i=n.length-1;
  i>=-1&&!t;
  i--){
    const r=i>=0?n[i]:"/";
    r&&(e=`${r}/${e}`, t=r.charAt(0)==="/")
  }
  return e=FZd(e.split("/").filter(i=>!!i), !t).join("/"), (t?"/":"")+e||"."
}
function UZd(n){
  let e=0;
  for(;
  e<n.length&&n[e]==="";
  e++);
  let t=n.length-1;
  for(;
  t>=0&&n[t]==="";
  t--);
  return e>t?[]:n.slice(e, t-e+1)
}
function $Zd(n, e){
  n=Ewc(n).slice(1), e=Ewc(e).slice(1);
  const t=UZd(n.split("/")), i=UZd(e.split("/")), r=Math.min(t.length, i.length);
  let s=r;
  for(let a=0;
  a<r;
  a++)if(t[a]!==i[a]){
    s=a;
    break
  }
  let o=[];
  for(let a=s;
  a<t.length;
  a++)o.push("..");
  return o=o.concat(i.slice(s)), o.join("/")
}
function qZd(n){
  const e=HZd(n), t=n.slice(-1)==="/";
  let i=FZd(n.split("/").filter(r=>!!r), !e).join("/");
  return!i&&!e&&(i="."), i&&t&&(i+="/"), (e?"/":"")+i
}
function HZd(n){
  return n.charAt(0)==="/"
}
function XVv(...n){
  return qZd(n.join("/"))
}
function eKv(n){
  const e=OZd(n), t=e[0]||"";
  let i=e[1];
  return!t&&!i?".":(i&&(i=i.slice(0, i.length-1)), t+i)
}
function JZd(n, e){
  let t=OZd(n)[2]||"";
  return e&&t.slice(e.length*-1)===e&&(t=t.slice(0, t.length-e.length)), t
}
var GZd, WZd=
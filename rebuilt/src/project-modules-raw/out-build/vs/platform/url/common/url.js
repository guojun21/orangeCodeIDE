// Module: out-build/vs/platform/url/common/url.js
// Offset: 27615004 (bundle byte offset)
// Size: 8745 bytes

Wt(), fce=xi("urlService")
}
});
function Sru(n, e=!1){
  let t=0;
  const i=n.length;
  let r="", s=0, o=16, a=0;
  function l(A){
    let w=0, C=0;
    for(;
    w<A;
    ){
      const x=n.charCodeAt(t);
      if(x>=48&&x<=57)C=C*16+x-48;
      else if(x>=65&&x<=70)C=C*16+x-65+10;
      else if(x>=97&&x<=102)C=C*16+x-97+10;
      else break;
      t++,w++
    }
    return w<A&&(C=-1), C
  }
  function u(A){
    t=A, r="", s=0, o=16, a=0
  }
  function d(){
    const A=t;
    if(n.charCodeAt(t)===48)t++;
    else for(t++;
    t<n.length&&ymn(n.charCodeAt(t));
    )t++;
    if(t<n.length&&n.charCodeAt(t)===46)if(t++, t<n.length&&ymn(n.charCodeAt(t)))for(t++;
    t<n.length&&ymn(n.charCodeAt(t));
    )t++;
    else return a=3, n.substring(A, t);
    let w=t;
    if(t<n.length&&(n.charCodeAt(t)===69||n.charCodeAt(t)===101))if(t++, (t<n.length&&n.charCodeAt(t)===43||n.charCodeAt(t)===45)&&t++, t<n.length&&ymn(n.charCodeAt(t))){
      for(t++;
      t<n.length&&ymn(n.charCodeAt(t));
      )t++;
      w=t
    }
    else a=3;
    return n.substring(A, w)
  }
  function m(){
    let A="", w=t;
    for(;
    ;
    ){
      if(t>=i){
        A+=n.substring(w,t),a=2;
        break
      }
      const C=n.charCodeAt(t);
      if(C===34){
        A+=n.substring(w,t),t++;
        break
      }
      if(C===92){
        if(A+=n.substring(w,t),t++,t>=i){
          a=2;
          break
        }
        switch(n.charCodeAt(t++)){
          case 34:A+='"';
          break;
          case 92:A+="\\";
          break;
          case 47:A+="/";
          break;
          case 98:A+="\b";
          break;
          case 102:A+="\f";
          break;
          case 110:A+=`
`;
          break;
          case 114:A+="\r";
          break;
          case 116:A+="	";
          break;
          case 117:{
            const I=l(4);
            I>=0?A+=String.fromCharCode(I):a=4;
            break
          }
          default:a=5
        }
        w=t;
        continue
      }
      if(C>=0&&C<=31)if(Qfa(C)){
        A+=n.substring(w,t),a=2;
        break
      }
      else a=6;
      t++
    }
    return A
  }
  function p(){
    if(r="", a=0, s=t, t>=i)return s=i, o=17;
    let A=n.charCodeAt(t);
    if(kru(A)){
      do t++,r+=String.fromCharCode(A),A=n.charCodeAt(t);
      while(kru(A));
      return o=15
    }
    if(Qfa(A))return t++, r+=String.fromCharCode(A), A===13&&n.charCodeAt(t)===10&&(t++, r+=`
`), o=14;
    switch(A){
      case 123:return t++,o=1;
      case 125:return t++,o=2;
      case 91:return t++,o=3;
      case 93:return t++,o=4;
      case 58:return t++,o=6;
      case 44:return t++,o=5;
      case 34:return t++,r=m(),o=10;
      case 47:{
        const w=t-1;
        if(n.charCodeAt(t+1)===47){
          for(t+=2;
          t<i&&!Qfa(n.charCodeAt(t));
          )t++;
          return r=n.substring(w,t),o=12
        }
        if(n.charCodeAt(t+1)===42){
          t+=2;
          const C=i-1;
          let x=!1;
          for(;
          t<C;
          ){
            if(n.charCodeAt(t)===42&&n.charCodeAt(t+1)===47){
              t+=2,x=!0;
              break
            }
            t++
          }
          return x||(t++,a=1),r=n.substring(w,t),o=13
        }
        return r+=String.fromCharCode(A),t++,o=16
      }
      case 45:if(r+=String.fromCharCode(A),t++,t===i||!ymn(n.charCodeAt(t)))return o=16;
      case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return r+=d(),o=11;
      default:for(;
      t<i&&g(A);
      )t++,A=n.charCodeAt(t);
      if(s!==t){
        switch(r=n.substring(s,t),r){
          case"true":return o=8;
          case"false":return o=9;
          case"null":return o=7
        }
        return o=16
      }
      return r+=String.fromCharCode(A),t++,o=16
    }
  }
  function g(A){
    if(kru(A)||Qfa(A))return!1;
    switch(A){
      case 125:case 93:case 123:case 91:case 34:case 58:case 44:case 47:return!1
    }
    return!0
  }
  function f(){
    let A;
    do A=p();
    while(A>=12&&A<=15);
    return A
  }
  return{
    setPosition:u, getPosition:()=>t, scan:e?f:p, getToken:()=>o, getTokenValue:()=>r, getTokenOffset:()=>s, getTokenLength:()=>t-s, getTokenError:()=>a
  }
}
function kru(n){
  return n===32||n===9||n===11||n===12||n===160||n===5760||n>=8192&&n<=8203||n===8239||n===8287||n===12288||n===65279
}
function Qfa(n){
  return n===10||n===13||n===8232||n===8233
}
function ymn(n){
  return n>=48&&n<=57
}
function dFA(n, e){
  const t=[], i=new Object;
  let r;
  const s={
    value:{
      
    }, offset:0, length:0, type:"object", parent:void 0
  };
  let o=!1;
  function a(l, u, d, m){
    s.value=l, s.offset=u, s.length=d, s.type=m, s.colonOffset=void 0, r=s
  }
  try{
    ont(n, {
      onObjectBegin:(l,u)=>{
        if(e<=l)throw i;
        r=void 0,o=e>l,t.push("")
      },onObjectProperty:(l,u,d)=>{
        if(e<u||(a(l,u,d,"property"),t[t.length-1]=l,e<=u+d))throw i
      },onObjectEnd:(l,u)=>{
        if(e<=l)throw i;
        r=void 0,t.pop()
      },onArrayBegin:(l,u)=>{
        if(e<=l)throw i;
        r=void 0,t.push(0)
      },onArrayEnd:(l,u)=>{
        if(e<=l)throw i;
        r=void 0,t.pop()
      },onLiteralValue:(l,u,d)=>{
        if(e<u||(a(l,u,d,SEe(l)),e<=u+d))throw i
      },onSeparator:(l,u,d)=>{
        if(e<=u)throw i;
        if(l===":"&&r&&r.type==="property")r.colonOffset=u,o=!1,r=void 0;
        else if(l===","){
          const m=t[t.length-1];
          typeof m=="number"?t[t.length-1]=m+1:(o=!0,t[t.length-1]=""),r=void 0
        }
      }
    })
  }
  catch(l){
    if(l!==i)throw l
  }
  return{
    path:t, previousNode:r, isAtPropertyKey:o, matches:l=>{
      let u=0;
      for(let d=0;
      u<l.length&&d<t.length;
      d++)if(l[u]===t[d]||l[u]==="*")u++;
      else if(l[u]!=="**")return!1;
      return u===l.length
    }
  }
}
function L1(n, e=[], t=Hvi.DEFAULT){
  let i=null, r=[];
  const s=[];
  function o(l){
    Array.isArray(r)?r.push(l):i!==null&&(r[i]=l)
  }
  return ont(n, {
    onObjectBegin:()=>{
      const l={
        
      };
      o(l),s.push(r),r=l,i=null
    }, onObjectProperty:l=>{
      i=l
    }, onObjectEnd:()=>{
      r=s.pop()
    }, onArrayBegin:()=>{
      const l=[];
      o(l),s.push(r),r=l,i=null
    }, onArrayEnd:()=>{
      r=s.pop()
    }, onLiteralValue:o, onError:(l, u, d)=>{
      e.push({
        error:l,offset:u,length:d
      })
    }
  }, t), r[0]
}
function jfa(n, e=[], t=Hvi.DEFAULT){
  let i={
    type:"array", offset:-1, length:-1, children:[], parent:void 0
  };
  function r(l){
    i.type==="property"&&(i.length=l-i.offset, i=i.parent)
  }
  function s(l){
    return i.children.push(l), l
  }
  ont(n, {
    onObjectBegin:l=>{
      i=s({
        type:"object",offset:l,length:-1,parent:i,children:[]
      })
    }, onObjectProperty:(l, u, d)=>{
      i=s({
        type:"property",offset:u,length:-1,parent:i,children:[]
      }),i.children.push({
        type:"string",value:l,offset:u,length:d,parent:i
      })
    }, onObjectEnd:(l, u)=>{
      i.length=l+u-i.offset,i=i.parent,r(l+u)
    }, onArrayBegin:(l, u)=>{
      i=s({
        type:"array",offset:l,length:-1,parent:i,children:[]
      })
    }, onArrayEnd:(l, u)=>{
      i.length=l+u-i.offset,i=i.parent,r(l+u)
    }, onLiteralValue:(l, u, d)=>{
      s({
        type:SEe(l),offset:u,length:d,parent:i,value:l
      }),r(u+d)
    }, onSeparator:(l, u, d)=>{
      i.type==="property"&&(l===":"?i.colonOffset=u:l===","&&r(u))
    }, onError:(l, u, d)=>{
      e.push({
        error:l,offset:u,length:d
      })
    }
  }, t);
  const a=i.children[0];
  return a&&delete a.parent, a
}
function Eru(n, e){
  if(!n)return;
  let t=n;
  for(const i of e)if(typeof i=="string"){
    if(t.type!=="object"||!Array.isArray(t.children))return;
    let r=!1;
    for(const s of t.children)if(Array.isArray(s.children)&&s.children[0].value===i){
      t=s.children[1],r=!0;
      break
    }
    if(!r)return
  }
  else{
    const r=i;
    if(t.type!=="array"||r<0||!Array.isArray(t.children)||r>=t.children.length)return;
    t=t.children[r]
  }
  return t
}
function RJg(n){
  if(!n.parent||!n.parent.children)return[];
  const e=RJg(n.parent);
  if(n.parent.type==="property"){
    const t=n.parent.children[0].value;
    e.push(t)
  }
  else if(n.parent.type==="array"){
    const t=n.parent.children.indexOf(n);
    t!==-1&&e.push(t)
  }
  return e
}
function hFA(n, e, t=!1){
  return e>=n.offset&&e<n.offset+n.length||t&&e===n.offset+n.length
}
function PJg(n, e, t=!1){
  if(hFA(n, e, t)){
    const i=n.children;
    if(Array.isArray(i))for(let r=0;
    r<i.length&&i[r].offset<=e;
    r++){
      const s=PJg(i[r],e,t);
      if(s)return s
    }
    return n
  }
}
function ont(n, e, t=Hvi.DEFAULT){
  const i=Sru(n, !1);
  function r($){
    return $?()=>$(i.getTokenOffset(), i.getTokenLength()):()=>!0
  }
  function s($){
    return $?H=>$(H, i.getTokenOffset(), i.getTokenLength()):()=>!0
  }
  const o=r(e.onObjectBegin), a=s(e.onObjectProperty), l=r(e.onObjectEnd), u=r(e.onArrayBegin), d=r(e.onArrayEnd), m=s(e.onLiteralValue), p=s(e.onSeparator), g=r(e.onComment), f=s(e.onError), A=t&&t.disallowComments, w=t&&t.allowTrailingComma;
  function C(){
    for(;
    ;
    ){
      const $=i.scan();
      switch(i.getTokenError()){
        case 4:x(14);
        break;
        case 5:x(15);
        break;
        case 3:x(13);
        break;
        case 1:A||x(11);
        break;
        case 2:x(12);
        break;
        case 6:x(16);
        break
      }
      switch($){
        case 12:case 13:A?x(10):g();
        break;
        case 16:x(1);
        break;
        case 15:case 14:break;
        default:return $
      }
    }
  }
  function x($, H=[], W=[]){
    if(f($), H.length+W.length>0){
      let z=i.getToken();
      for(;
      z!==17;
      ){
        if(H.indexOf(z)!==-1){
          C();
          break
        }
        else if(W.indexOf(z)!==-1)break;
        z=C()
      }
    }
  }
  function I($){
    const H=i.getTokenValue();
    return $?m(H):a(H), C(), !0
  }
  function B(){
    switch(i.getToken()){
      case 11:{
        let $=0;
        try{
          $=JSON.parse(i.getTokenValue()),typeof $!="number"&&(x(2),$=0)
        }
        catch{
          x(2)
        }
        m($);
        break
      }
      case 7:m(null);
      break;
      case 8:m(!0);
      break;
      case 9:m(!1);
      break;
      default:return!1
    }
    return C(), !0
  }
  function R(){
    return i.getToken()!==10?(x(3, [], [2, 5]), !1):(I(!1), i.getToken()===6?(p(":"), C(), O()||x(4, [], [2, 5])):x(5, [], [2, 5]), !0)
  }
  function N(){
    o(), C();
    let $=!1;
    for(;
    i.getToken()!==2&&i.getToken()!==17;
    ){
      if(i.getToken()===5){
        if($||x(4,[],[]),p(","),C(),i.getToken()===2&&w)break
      }
      else $&&x(6,[],[]);
      R()||x(4,[],[2,5]),$=!0
    }
    return l(), i.getToken()!==2?x(7, [2], []):C(), !0
  }
  function M(){
    u(), C();
    let $=!1;
    for(;
    i.getToken()!==4&&i.getToken()!==17;
    ){
      if(i.getToken()===5){
        if($||x(4,[],[]),p(","),C(),i.getToken()===4&&w)break
      }
      else $&&x(6,[],[]);
      O()||x(4,[],[4,5]),$=!0
    }
    return d(), i.getToken()!==4?x(8, [4], []):C(), !0
  }
  function O(){
    switch(i.getToken()){
      case 3:return M();
      case 1:return N();
      case 10:return I(!0);
      default:return B()
    }
  }
  return C(), i.getToken()===17?t.allowEmptyContent?!0:(x(4, [], []), !1):O()?(i.getToken()!==17&&x(9, [], []), !0):(x(4, [], []), !1)
}
function SEe(n){
  switch(typeof n){
    case"boolean":return"boolean";
    case"number":return"number";
    case"string":return"string";
    case"object":{
      if(n){
        if(Array.isArray(n))return"array"
      }
      else return"null";
      return"object"
    }
    default:return"null"
  }
}
var LJg, NJg, MJg, Hvi, FJg, aB=
// Module: out-build/vs/base/common/jsonFormatter.js
// Offset: 27630270 (bundle byte offset)
// Size: 2856 bytes

aB()
}
});
function gFA(n, e, t){
  return oie(n, e, void 0, t)
}
function oie(n, e, t, i, r){
  const s=e.slice(), a=jfa(n, []);
  let l, u;
  for(;
  s.length>0&&(u=s.pop(), l=Eru(a, s), l===void 0&&t!==void 0);
  )typeof u=="string"?t={
    [u]:t
  }
  :t=[t];
  if(l)if(l.type==="object"&&typeof u=="string"&&Array.isArray(l.children)){
    const d=Eru(l, [u]);
    if(d!==void 0)if(t===void 0){
      if(!d.parent)throw new Error("Malformed AST");
      const m=l.children.indexOf(d.parent);
      let p,g=d.parent.offset+d.parent.length;
      if(m>0){
        const f=l.children[m-1];
        p=f.offset+f.length
      }
      else p=l.offset+1,l.children.length>1&&(g=l.children[1].offset);
      return JSt(n,{
        offset:p,length:g-p,content:""
      },i)
    }
    else return JSt(n, {
      offset:d.offset,length:d.length,content:JSON.stringify(t)
    }, i);
    else{
      if(t===void 0)return[];
      const m=`${JSON.stringify(u)}: ${JSON.stringify(t)}`,p=r?r(l.children.map(f=>f.children[0].value)):l.children.length;
      let g;
      if(p>0){
        const f=l.children[p-1];
        g={
          offset:f.offset+f.length,length:0,content:","+m
        }
      }
      else l.children.length===0?g={
        offset:l.offset+1,length:0,content:m
      }
      :g={
        offset:l.offset+1,length:0,content:m+","
      };
      return JSt(n,g,i)
    }
  }
  else if(l.type==="array"&&typeof u=="number"&&Array.isArray(l.children))if(t!==void 0){
    const d=`${JSON.stringify(t)}`;
    let m;
    if(l.children.length===0||u===0)m={
      offset:l.offset+1,length:0,content:l.children.length===0?d:d+","
    };
    else{
      const p=u===-1||u>l.children.length?l.children.length:u,g=l.children[p-1];
      m={
        offset:g.offset+g.length,length:0,content:","+d
      }
    }
    return JSt(n, m, i)
  }
  else{
    const d=u, m=l.children[d];
    let p;
    if(l.children.length===1)p={
      offset:l.offset+1,length:l.length-2,content:""
    };
    else if(l.children.length-1===d){
      const g=l.children[d-1],f=g.offset+g.length,A=l.offset+l.length;
      p={
        offset:f,length:A-2-f,content:""
      }
    }
    else p={
      offset:m.offset,length:l.children[d+1].offset-m.offset,content:""
    };
    return JSt(n, p, i)
  }
  else throw new Error(`Can not add ${typeof u!="number"?"index":"property"} to parent of type ${l.type}`);
  else return t===void 0?[]:JSt(n, {
    offset:a?a.offset:0, length:a?a.length:0, content:JSON.stringify(t)
  }, i)
}
function JSt(n, e, t){
  let i=Tru(n, e), r=e.offset, s=e.offset+e.content.length;
  if(e.length===0||e.content.length===0){
    for(;
    r>0&&!zfa(i, r-1);
    )r--;
    for(;
    s<i.length&&!zfa(i, s);
    )s++
  }
  const o=mFA(i, {
    offset:r, length:s-r
  }, t);
  for(let l=o.length-1;
  l>=0;
  l--){
    const u=o[l];
    i=Tru(i, u), r=Math.min(r, u.offset), s=Math.max(s, u.offset+u.length), s+=u.content.length-u.length
  }
  const a=n.length-(i.length-s)-r;
  return[{
    offset:r, length:a, content:i.substring(r, s)
  }
  ]
}
function Tru(n, e){
  return n.substring(0, e.offset)+e.content+n.substring(e.offset+e.length)
}
function Iru(n, e){
  const t=e.slice(0).sort((r, s)=>{
    const o=r.offset-s.offset;
    return o===0?r.length-s.length:o
  });
  let i=n.length;
  for(let r=t.length-1;
  r>=0;
  r--){
    const s=t[r];
    if(s.offset+s.length<=i)n=Tru(n, s);
    else throw new Error("Overlapping edit");
    i=s.offset
  }
  return n
}
var GSt=
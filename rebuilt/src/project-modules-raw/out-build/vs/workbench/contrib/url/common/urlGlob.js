// Module: out-build/vs/workbench/contrib/url/common/urlGlob.js
// Offset: 32854651 (bundle byte offset)
// Size: 1391 bytes

swu=(n, e)=>{
  let t=n.with({
    query:null, fragment:null
  }).toString(!0);
  const i=o=>o.replace(/\/+$/, "");
  e=i(e), t=i(t);
  const r=Array.from({
    length:t.length+1
  }).map(()=>Array.from({
    length:e.length+1
  }).map(()=>{
    
  }));
  if(/^[^./:]*:\/\//.test(e))return bxe(r, t, e, 0, 0);
  const s=/^(https?):\/\//.exec(t)?.[1];
  return s?bxe(r, t, `${s}://${e}`, 0, 0):!1
}, bxe=(n, e, t, i, r)=>{
  if(n[i]?.[r]!==void 0)return n[i][r];
  const s=[];
  if(i===e.length)return r===t.length;
  if(r===t.length)return e.slice(i)[0]==="/";
  if(e[i]===t[r]&&s.push(bxe(n, e, t, i+1, r+1)), t[r]+t[r+1]==="*."&&(["/", ":"].includes(e[i])||s.push(bxe(n, e, t, i+1, r)), s.push(bxe(n, e, t, i, r+2))), t[r]==="*"&&(i+1===e.length?s.push(bxe(n, e, t, i+1, r+1)):s.push(bxe(n, e, t, i+1, r)), s.push(bxe(n, e, t, i, r+1))), t[r]+t[r+1]===":*")if(e[i]===":"){
    let o=i+1;
    do o++;
    while(/[0-9]/.test(e[o]));
    s.push(bxe(n, e, t, o, r+2))
  }
  else s.push(bxe(n, e, t, i, r+2));
  return n[i][r]=s.some(o=>o===!0)
}
}
});
function o9f(n, e){
  if(n=je.parse(a9f(n)), e=e.map(a9f), luy(n.authority))return!0;
  for(let t=0;
  t<e.length;
  t++)if(e[t]==="*"||swu(n, e[t]))return!0;
  return!1
}
function a9f(n){
  const e=["github.com"];
  try{
    const t=typeof n=="string"?je.parse(n, !0):n;
    return e.includes(t.authority)?t.with({
      path:t.path.toLowerCase()
    }).toString(!0):t.toString(!0)
  }
  catch{
    return n.toString()
  }
}
function luy(n){
  return c9f.test(n)||l9f.test(n)
}
var c9f, l9f, u9f=
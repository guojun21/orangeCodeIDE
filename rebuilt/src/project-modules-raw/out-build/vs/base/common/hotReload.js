// Module: out-build/vs/base/common/hotReload.js
// Offset: 1932583 (bundle byte offset)
// Size: 1008 bytes

S6(), n3n=void 0, nbt()&&_wh(({
  oldExports:n, newSrc:e, config:t
})=>{
  if(t.mode==="patch-prototype")return i=>{
    for(const r in i){
      const s=i[r];
      if(console.log(`[hot-reload] Patching prototype methods of '${r}'`,{
        exportedItem:s
      }),typeof s=="function"&&s.prototype){
        const o=n[r];
        if(o){
          for(const a of Object.getOwnPropertyNames(s.prototype)){
            const l=Object.getOwnPropertyDescriptor(s.prototype,a),u=Object.getOwnPropertyDescriptor(o.prototype,a);
            l?.value?.toString()!==u?.value?.toString()&&console.log(`[hot-reload] Patching prototype method '${r}.${a}'`),Object.defineProperty(o.prototype,a,l)
          }
          i[r]=o
        }
      }
    }
    return!0
  }
})
}
});
function $de(n, e){
  return cuA([n], e), n
}
function cuA(n, e){
  nbt()&&m3("reload", i=>_wh(({
    oldExports:r
  })=>{
    if([...Object.values(r)].some(s=>n.includes(s)))return s=>(i(void 0), !0)
  })).read(e)
}
function i3n(n){
  if(!nbt())return F0(n);
  const e=n.name;
  let t=kIc.get(e);
  return t?setTimeout(()=>{
    t.set(n, void 0)
  }, 0):(t=Ua(e, n), kIc.set(e, t)), t
}
var kIc, v9e=
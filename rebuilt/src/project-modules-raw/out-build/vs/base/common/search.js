// Module: out-build/vs/base/common/search.js
// Offset: 25142737 (bundle byte offset)
// Size: 1050 bytes

oa()
}
});
function ivg(n){
  if(!n||n.length===0)return new ugi(null);
  const e=[], t=new ovg(n);
  for(let i=0, r=n.length;
  i<r;
  i++){
    const s=n.charCodeAt(i);
    if(s===92){
      if(i++,i>=r)break;
      const o=n.charCodeAt(i);
      switch(o){
        case 92:t.emitUnchanged(i-1),t.emitStatic("\\",i+1);
        break;
        case 110:t.emitUnchanged(i-1),t.emitStatic(`
`,i+1);
        break;
        case 116:t.emitUnchanged(i-1),t.emitStatic("	",i+1);
        break;
        case 117:case 85:case 108:case 76:t.emitUnchanged(i-1),t.emitStatic("",i+1),e.push(String.fromCharCode(o));
        break
      }
      continue
    }
    if(s===36){
      if(i++,i>=r)break;
      const o=n.charCodeAt(i);
      if(o===36){
        t.emitUnchanged(i-1),t.emitStatic("$",i+1);
        continue
      }
      if(o===48||o===38){
        t.emitUnchanged(i-1),t.emitMatchIndex(0,i+1,e),e.length=0;
        continue
      }
      if(49<=o&&o<=57){
        let a=o-48;
        if(i+1<r){
          const l=n.charCodeAt(i+1);
          if(48<=l&&l<=57){
            i++,a=a*10+(l-48),t.emitUnchanged(i-2),t.emitMatchIndex(a,i+1,e),e.length=0;
            continue
          }
        }
        t.emitUnchanged(i-1),t.emitMatchIndex(a,i+1,e),e.length=0;
        continue
      }
    }
  }
  return t.finalize()
}
var rvg, lQl, svg, ugi, dgi, ovg, avg=
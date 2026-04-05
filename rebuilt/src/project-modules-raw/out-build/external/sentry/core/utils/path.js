// Module: out-build/external/sentry/core/utils/path.js
// Offset: 123259 (bundle byte offset)
// Size: 580 bytes

GZd=/^(\S+:\\|\/?)([\s\S]*?)((?:\.{
  1, 2
}
|[^/\\]+?|)(\.[^./\\]*|))(?:[/\\]*)$/
}
});
function tKv({
  isBrowser:n, root:e, prefix:t
}){
  return i=>{
    if(!i.filename)return i;
    const r=/^[a-zA-Z]:\\/.test(i.filename)||i.filename.includes("\\")&&!i.filename.includes("/"), s=/^\//.test(i.filename);
    if(n){
      if(e){
        const o=i.filename;
        o.indexOf(e)===0&&(i.filename=o.replace(e,t))
      }
    }
    else if(r||s){
      const o=r?i.filename.replace(/^[a-zA-Z]:/,"").replace(/\\/g,"/"):i.filename,a=e?$Zd(e,o):JZd(o);
      i.filename=`${t}${a}`
    }
    return i
  }
}
var QZd, xwc, nKv=
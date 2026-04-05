// Module: out-build/vs/workbench/services/search/common/searchExtTypes.js
// Offset: 28175432 (bundle byte offset)
// Size: 1548 bytes

(function(n){
  n[n.None=1]="None", n[n.FilesExclude=2]="FilesExclude", n[n.SearchAndFilesExclude=3]="SearchAndFilesExclude"
})(UXg||(UXg={
  
})), (function(n){
  n[n.Information=1]="Information", n[n.Warning=2]="Warning"
})(dva||(dva={
  
}))
}
});
function jmn(n){
  return!!n.rangeLocations&&!!n.previewText
}
function qXg(n){
  return!!n.resource
}
function HXg(n){
  return!!n.message
}
function w9A(n){
  const e=n[0].startLineNumber;
  for(const t of n)if(t.startLineNumber!==e||t.endLineNumber!==e)return!1;
  return!0
}
function GAi(n, e=!0){
  const t=n&&n.files&&n.files.exclude, i=e&&n&&n.search&&n.search.exclude;
  if(!t&&!i)return{
    ...QAi
  };
  if(!t||!i){
    const o=mh(t||i||Object.create(null));
    return f3(o, QAi)
  }
  let r=Object.create(null);
  return r=f3(r, mh(t)), r=f3(r, mh(i), !0), r=f3(r, QAi), r
}
function WAi(n, e){
  return n.excludePattern&&nP(n.excludePattern, e)?!1:n.includePattern||n.usingSearchPaths?n.includePattern&&nP(n.includePattern, e)?!0:n.usingSearchPaths?!!n.folderQueries&&n.folderQueries.some(t=>{
    const i=t.folder.fsPath;
    if(aFn(e, i)){
      const r=DBe(i,e);
      return!t.includePattern||!!nP(t.includePattern,r)
    }
    else return!1
  }):!1:!0
}
function _9A(n){
  const e=n.message;
  if(bf(n))return new pva(e, YNe.canceled);
  try{
    const t=JSON.parse(e);
    return new pva(t.message, t.code)
  }
  catch{
    return new pva(e, YNe.other)
  }
}
function C9A(n, e){
  const t={
    ...n||{
      
    }, ...e||{
      
    }
  };
  return Object.keys(t).filter(i=>{
    const r=t[i];
    return typeof r=="boolean"&&r
  })
}
var hva, hie, Ant, iau, zmn, QAi, rau, sau, JXg, bQ, GXg, WXg, QXg, jXg, mva, oau, aau, zXg, VXg, YNe, pva, wE=
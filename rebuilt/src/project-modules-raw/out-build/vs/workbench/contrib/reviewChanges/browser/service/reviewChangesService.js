// Module: out-build/vs/workbench/contrib/reviewChanges/browser/service/reviewChangesService.js
// Offset: 27955581 (bundle byte offset)
// Size: 700 bytes

Wt(), vce=xi("reviewChangesService")
}
});
function PVg(n, e){
  let t=n.body, i=n.name, r=n.overview, s=n.todos;
  return e.plan!==void 0&&e.plan.length>0?t=e.plan:e.oldStr!==void 0&&e.newStr!==void 0&&(t=g4A(n.body, e.oldStr, e.newStr)), e.name!==void 0&&e.name.length>0&&(i=e.name), e.overview!==void 0&&e.overview.length>0&&(r=e.overview), e.todos!==void 0&&e.todos.length>0&&(s=e.todos), {
    body:t, name:i, overview:r, todos:s
  }
}
function g4A(n, e, t){
  if(e===""){
    if(n.trim()==="")return t;
    throw new Fsu(e, "empty_old_str_non_empty_plan")
  }
  if(!n.includes(e))throw new Fsu(e, "not_found");
  return n.replace(e, t)
}
var Fsu, f4A=
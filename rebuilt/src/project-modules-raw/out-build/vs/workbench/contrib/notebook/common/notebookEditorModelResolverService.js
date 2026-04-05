// Module: out-build/vs/workbench/contrib/notebook/common/notebookEditorModelResolverService.js
// Offset: 26922604 (bundle byte offset)
// Size: 596 bytes

Wt(), Lq=xi("INotebookModelResolverService")
}
});
function TSt(n, e, t){
  if(!e?.gitWorktree)return n;
  const i=t.getWorkspace();
  if(i.folders.length===0)return n;
  const r=i.folders[0].uri, s=n.scheme===_n.file&&r.scheme===_n.file, o=n.scheme===_n.vscodeRemote&&r.scheme===_n.vscodeRemote;
  return!s&&!o||n.authority!==r.authority||!n.path.startsWith(r.path)?n:n.with({
    path:n.path.replace(r.path, e.gitWorktree.worktreePath)
  })
}
function x$e(n, e, t){
  const i=e.resolveRelativePath(n);
  return TSt(i, t, e)
}
var gye=
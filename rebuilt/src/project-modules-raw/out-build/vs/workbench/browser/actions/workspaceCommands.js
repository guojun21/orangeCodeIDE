// Module: out-build/vs/workbench/browser/actions/workspaceCommands.js
// Offset: 31271643 (bundle byte offset)
// Size: 5245 bytes

Ht(), ps(), Uye(), Yr(), Po(), iL(), hs(), ns(), Pd(), Kl(), oR(), hd(), Ku(), ru(), Yn(), zr(), vL(), _g(), x0i="addRootFolder", sbu=dt(3262, "Add Folder to Workspace..."), obu="setRootFolder", zqe="_workbench.pickWorkspaceFolder", Ss.registerCommand({
  id:"workbench.action.files.openFileFolderInNewWindow", handler:n=>n.get(oy).pickFileFolderAndOpen({
    forceNewWindow:!0
  })
}), Ss.registerCommand({
  id:"_files.pickFolderAndOpen", handler:(n, e)=>n.get(oy).pickFolderAndOpen(e)
}), Ss.registerCommand({
  id:"workbench.action.files.openFolderInNewWindow", handler:n=>n.get(oy).pickFolderAndOpen({
    forceNewWindow:!0
  })
}), Ss.registerCommand({
  id:"workbench.action.files.openFileInNewWindow", handler:n=>n.get(oy).pickFileAndOpen({
    forceNewWindow:!0
  })
}), Ss.registerCommand({
  id:"workbench.action.openWorkspaceInNewWindow", handler:n=>n.get(oy).pickWorkspaceAndOpen({
    forceNewWindow:!0
  })
}), Ss.registerCommand({
  id:x0i, handler:async n=>{
    const e=n.get(uX), t=await IBf(n);
    !t||!t.length||await e.addFolders(t.map(i=>({
      uri:i
    })))
  }
}), Ss.registerCommand({
  id:obu, handler:async n=>{
    const e=n.get(uX), t=n.get(Lr), i=await IBf(n);
    !i||!i.length||await e.updateFolders(0, t.getWorkspace().folders.length, i.map(r=>({
      uri:r
    })))
  }
}), Ss.registerCommand(zqe, async function(n, e){
  const t=n.get(ha), i=n.get(Ol), r=n.get(Lr), s=n.get(Il), o=n.get(Jl), a=r.getWorkspace().folders;
  if(!a.length)return;
  const l=a.map(p=>{
    const g=p.name, f=i.getUriLabel(Td(p.uri), {
      relative:!0
    });
    return{
      label:g,description:f!==g?f:void 0,folder:p,iconClasses:yS(s,o,p.uri,xg.ROOT_FOLDER)
    }
  }), u=(e?e[0]:void 0)||Object.create(null);
  u.activeItem||(u.activeItem=l[0]), u.placeHolder||(u.placeHolder=_(3261, null)), typeof u.matchOnDescription!="boolean"&&(u.matchOnDescription=!0);
  const d=(e?e[1]:void 0)||Cs.None, m=await t.pick(l, u, d);
  if(m)return a[l.indexOf(m)]
}), Ss.registerCommand({
  id:"vscode.openFolder", handler:(n, e, t)=>{
    const i=n.get(fr);
    if(typeof t=="boolean"&&(t={
      forceNewWindow:t
    }), !e){
      const a={
        forceNewWindow:t?.forceNewWindow
      };
      return t?.forceLocalWindow&&(a.remoteAuthority=null,a.availableFileSystems=["file"]),i.executeCommand("_files.pickFolderAndOpen",a)
    }
    const r=je.from(e, !0), s={
      forceNewWindow:t?.forceNewWindow,cursorForceNewWindow:t?.cursorForceNewWindow,forceReuseWindow:t?.forceReuseWindow,noRecentEntry:t?.noRecentEntry,remoteAuthority:t?.forceLocalWindow?null:void 0,forceProfile:t?.forceProfile,forceTempProfile:t?.forceTempProfile
    }, o=vOt(r)||r.scheme===_n.untitled?{
      workspaceUri:r
    }
    :{
      folderUri:r
    };
    return i.executeCommand("_files.windowOpen", [o], s)
  }, metadata:{
    description:"Open a folder or workspace in the current window or new window depending on the newWindow argument. Note that opening in the same window will shutdown the current extension host process and start a new one on the given folder/workspace unless the newWindow parameter is set to true.", args:[{
      name:"uri",description:"(optional) Uri of the folder or workspace file to open. If not provided, a native dialog will ask the user for the folder",constraint:n=>n==null||n instanceof je
    }, {
      name:"options",description:"(optional) Options. Object with the following properties: `forceNewWindow`: Whether to open the folder/workspace in a new window or the same. Defaults to opening in the same window. `forceReuseWindow`: Whether to force opening the folder/workspace in the same window.  Defaults to false. `noRecentEntry`: Whether the opened URI will appear in the 'Open Recent' list. Defaults to false. Note, for backward compatibility, options can also be of type boolean, representing the `forceNewWindow` setting.",constraint:n=>n===void 0||typeof n=="object"||typeof n=="boolean"
    }
    ]
  }
}), Ss.registerCommand({
  id:"vscode.newWindow", handler:(n, e)=>{
    const t=n.get(fr), i={
      forceReuseWindow:e&&e.reuseWindow,remoteAuthority:e&&e.remoteAuthority
    };
    return t.executeCommand("_files.newWindow", i)
  }, metadata:{
    description:"Opens an new window depending on the newWindow argument.", args:[{
      name:"options",description:"(optional) Options. Object with the following properties: `reuseWindow`: Whether to open a new window or the same. Defaults to opening in a new window. ",constraint:n=>n===void 0||typeof n=="object"
    }
    ]
  }
}), Ss.registerCommand("_workbench.removeFromRecentlyOpened", function(n, e){
  return n.get(CM).removeRecentlyOpened([e])
}), Ss.registerCommand({
  id:"vscode.removeFromRecentlyOpened", handler:(n, e)=>{
    const t=n.get(CM);
    return typeof e=="string"?e=e.match(/^[^:/?#]+:\/\//)?je.parse(e):je.file(e):e=je.revive(e), t.removeRecentlyOpened([e])
  }, metadata:{
    description:"Removes an entry with the given path from the recently opened list.", args:[{
      name:"path",description:"URI or URI string to remove from recently opened.",constraint:n=>typeof n=="string"||n instanceof je
    }
    ]
  }
}), Ss.registerCommand("_workbench.addToRecentlyOpened", async function(n, e){
  const t=n.get(CM), i=e.uri, r=e.label, s=e.remoteAuthority;
  let o;
  return e.type==="workspace"?o={
    workspace:await t.getWorkspaceIdentifier(i), label:r, remoteAuthority:s
  }
  :e.type==="folder"?o={
    folderUri:i, label:r, remoteAuthority:s
  }
  :o={
    fileUri:i, label:r, remoteAuthority:s
  }, t.addRecentlyOpened([o])
}), Ss.registerCommand("_workbench.getRecentlyOpened", async function(n){
  return n.get(CM).getRecentlyOpened()
})
}
}), F1t, Fka, O1t, T0i, Uit, abu, Oka, DBf, Uka, cbu, lbu, ubu, Afn=
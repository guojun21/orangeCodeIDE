"use strict";

// Module: out-build/vs/workbench/browser/actions/workspaceCommands.js
// Offset: 31271643 (bundle byte offset)
// Size: 5245 bytes
Ht();
ps();
Uye();
Yr();
Po();
iL();
hs();
ns();
Pd();
Kl();
oR();
hd();
Ku();
ru();
Yn();
zr();
vL();
_g();
x0i = "addRootFolder";
sbu = dt(3262, "Add Folder to Workspace...");
obu = "setRootFolder";
zqe = "_workbench.pickWorkspaceFolder";
Ss.registerCommand({
  id: "workbench.action.files.openFileFolderInNewWindow",
  handler: n => n.get(oy).pickFileFolderAndOpen({
    forceNewWindow: true
  })
});
Ss.registerCommand({
  id: "_files.pickFolderAndOpen",
  handler: (n, e) => n.get(oy).pickFolderAndOpen(e)
});
Ss.registerCommand({
  id: "workbench.action.files.openFolderInNewWindow",
  handler: n => n.get(oy).pickFolderAndOpen({
    forceNewWindow: true
  })
});
Ss.registerCommand({
  id: "workbench.action.files.openFileInNewWindow",
  handler: n => n.get(oy).pickFileAndOpen({
    forceNewWindow: true
  })
});
Ss.registerCommand({
  id: "workbench.action.openWorkspaceInNewWindow",
  handler: n => n.get(oy).pickWorkspaceAndOpen({
    forceNewWindow: true
  })
});
Ss.registerCommand({
  id: x0i,
  handler: async n => {
    const e = n.get(uX);
    const t = await IBf(n);
    if (!!t && !!t.length) {
      await e.addFolders(t.map(i => ({
        uri: i
      })));
    }
  }
});
Ss.registerCommand({
  id: obu,
  handler: async n => {
    const e = n.get(uX);
    const t = n.get(Lr);
    const i = await IBf(n);
    if (!!i && !!i.length) {
      await e.updateFolders(0, t.getWorkspace().folders.length, i.map(r => ({
        uri: r
      })));
    }
  }
});
Ss.registerCommand(zqe, async function (n, e) {
  const t = n.get(ha);
  const i = n.get(Ol);
  const r = n.get(Lr);
  const s = n.get(Il);
  const o = n.get(Jl);
  const a = r.getWorkspace().folders;
  if (!a.length) {
    return;
  }
  const l = a.map(p => {
    const g = p.name;
    const f = i.getUriLabel(Td(p.uri), {
      relative: true
    });
    return {
      label: g,
      description: f !== g ? f : undefined,
      folder: p,
      iconClasses: yS(s, o, p.uri, xg.ROOT_FOLDER)
    };
  });
  const u = (e ? e[0] : undefined) || Object.create(null);
  u.activeItem ||= l[0];
  u.placeHolder ||= _(3261, null);
  if (typeof u.matchOnDescription != "boolean") {
    u.matchOnDescription = true;
  }
  const d = (e ? e[1] : undefined) || Cs.None;
  const m = await t.pick(l, u, d);
  if (m) {
    return a[l.indexOf(m)];
  }
});
Ss.registerCommand({
  id: "vscode.openFolder",
  handler: (n, e, t) => {
    const i = n.get(fr);
    if (typeof t == "boolean") {
      t = {
        forceNewWindow: t
      };
    }
    if (!e) {
      const a = {
        forceNewWindow: t?.forceNewWindow
      };
      if (t?.forceLocalWindow) {
        a.remoteAuthority = null;
        a.availableFileSystems = ["file"];
      }
      return i.executeCommand("_files.pickFolderAndOpen", a);
    }
    const r = je.from(e, true);
    const s = {
      forceNewWindow: t?.forceNewWindow,
      cursorForceNewWindow: t?.cursorForceNewWindow,
      forceReuseWindow: t?.forceReuseWindow,
      noRecentEntry: t?.noRecentEntry,
      remoteAuthority: t?.forceLocalWindow ? null : undefined,
      forceProfile: t?.forceProfile,
      forceTempProfile: t?.forceTempProfile
    };
    const o = vOt(r) || r.scheme === _n.untitled ? {
      workspaceUri: r
    } : {
      folderUri: r
    };
    return i.executeCommand("_files.windowOpen", [o], s);
  },
  metadata: {
    description: "Open a folder or workspace in the current window or new window depending on the newWindow argument. Note that opening in the same window will shutdown the current extension host process and start a new one on the given folder/workspace unless the newWindow parameter is set to true.",
    args: [{
      name: "uri",
      description: "(optional) Uri of the folder or workspace file to open. If not provided, a native dialog will ask the user for the folder",
      constraint: n => n == null || n instanceof je
    }, {
      name: "options",
      description: "(optional) Options. Object with the following properties: `forceNewWindow`: Whether to open the folder/workspace in a new window or the same. Defaults to opening in the same window. `forceReuseWindow`: Whether to force opening the folder/workspace in the same window.  Defaults to false. `noRecentEntry`: Whether the opened URI will appear in the 'Open Recent' list. Defaults to false. Note, for backward compatibility, options can also be of type boolean, representing the `forceNewWindow` setting.",
      constraint: n => n === undefined || typeof n == "object" || typeof n == "boolean"
    }]
  }
});
Ss.registerCommand({
  id: "vscode.newWindow",
  handler: (n, e) => {
    const t = n.get(fr);
    const i = {
      forceReuseWindow: e && e.reuseWindow,
      remoteAuthority: e && e.remoteAuthority
    };
    return t.executeCommand("_files.newWindow", i);
  },
  metadata: {
    description: "Opens an new window depending on the newWindow argument.",
    args: [{
      name: "options",
      description: "(optional) Options. Object with the following properties: `reuseWindow`: Whether to open a new window or the same. Defaults to opening in a new window. ",
      constraint: n => n === undefined || typeof n == "object"
    }]
  }
});
Ss.registerCommand("_workbench.removeFromRecentlyOpened", function (n, e) {
  return n.get(CM).removeRecentlyOpened([e]);
});
Ss.registerCommand({
  id: "vscode.removeFromRecentlyOpened",
  handler: (n, e) => {
    const t = n.get(CM);
    if (typeof e == "string") {
      e = e.match(/^[^:/?#]+:\/\//) ? je.parse(e) : je.file(e);
    } else {
      e = je.revive(e);
    }
    return t.removeRecentlyOpened([e]);
  },
  metadata: {
    description: "Removes an entry with the given path from the recently opened list.",
    args: [{
      name: "path",
      description: "URI or URI string to remove from recently opened.",
      constraint: n => typeof n == "string" || n instanceof je
    }]
  }
});
Ss.registerCommand("_workbench.addToRecentlyOpened", async function (n, e) {
  const t = n.get(CM);
  const i = e.uri;
  const r = e.label;
  const s = e.remoteAuthority;
  let o;
  if (e.type === "workspace") {
    o = {
      workspace: await t.getWorkspaceIdentifier(i),
      label: r,
      remoteAuthority: s
    };
  } else if (e.type === "folder") {
    o = {
      folderUri: i,
      label: r,
      remoteAuthority: s
    };
  } else {
    o = {
      fileUri: i,
      label: r,
      remoteAuthority: s
    };
  }
  return t.addRecentlyOpened([o]);
});
Ss.registerCommand("_workbench.getRecentlyOpened", async function (n) {
  return n.get(CM).getRecentlyOpened();
});

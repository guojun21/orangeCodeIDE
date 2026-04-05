// Module: out-build/vs/platform/prompts/common/constants.js
// Offset: 31049497 (bundle byte offset)
// Size: 407 bytes

Lv(), Hl(), OMe=".prompt.md", oSa="copilot-instructions.md", aSa="chat.promptFiles", Pgu="chat.promptFilesLocations", cSa=".github/prompts", Lqe=n=>{
  const e=fd(n.path);
  return e.endsWith(OMe)||e===oSa
}, lIf=n=>{
  Qb(Lqe(n), `Provided path '${n.fsPath}' is not a prompt file.`);
  const e=n.path.endsWith(oSa)?".md":OMe;
  return fd(n.path, e)
}
}
}), lSa, csy=
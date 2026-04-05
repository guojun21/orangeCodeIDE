// Module: out-build/vs/editor/browser/controller/editContext/editContext.js
// Offset: 1822639 (bundle byte offset)
// Size: 595 bytes

j$(), gIc=class extends yW{
  
}
}
});
function fIc(n, e){
  if(n.get(2)===1){
    const i=e.lookupKeybinding("editor.action.toggleScreenReaderAccessibilityMode")?.getAriaLabel(), r=e.lookupKeybinding("workbench.action.showCommands")?.getAriaLabel(), s=e.lookupKeybinding("workbench.action.openGlobalKeybindings")?.getAriaLabel(), o=_(181, null);
    return i?_(182, null, o, i):r?_(183, null, o, r):s?_(184, null, o, s):o
  }
  return n.get(4)
}
function Yyh(n){
  let e=0, t=-1;
  do{
    if(t=n.indexOf(`
`, t+1), t===-1)break;
    e++
  }
  while(!0);
  return e
}
var bIc, Zyh=
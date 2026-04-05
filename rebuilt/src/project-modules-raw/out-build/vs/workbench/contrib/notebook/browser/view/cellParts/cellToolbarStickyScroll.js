// Module: out-build/vs/workbench/contrib/notebook/browser/view/cellParts/cellToolbarStickyScroll.js
// Offset: 33262843 (bundle byte offset)
// Size: 480 bytes

rt(), sE()
}
});
function mki(n){
  return tM(n.getActions({
    shouldForwardArgs:!0
  }), e=>/^inline/.test(e))
}
function gdy(n, e, t, i){
  const r=n.get(kc), s=n.get(mo), o=n.get(ln), a=new ave(e, r, {
    getKeyBinding:l=>s.lookupKeybinding(l.id), actionViewItemProvider:(l, u)=>GR(o, l, u), renderDropdownAsChildElement:!0, hoverDelegate:t
  });
  return i&&a.getElement().classList.add(i), a
}
var pki, gki, fdy=
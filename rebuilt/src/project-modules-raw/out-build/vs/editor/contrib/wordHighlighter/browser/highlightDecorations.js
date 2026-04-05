// Module: out-build/vs/editor/contrib/wordHighlighter/browser/highlightDecorations.js
// Offset: 32762546 (bundle byte offset)
// Size: 1895 bytes

Hly(), xw(), bv(), Tg(), Ht(), Nl(), Io(), b5f=Rn("editor.wordHighlightBackground", {
  dark:"#575757B8", light:"#57575740", hcDark:null, hcLight:null
}, _(1702, null), !0), Rn("editor.wordHighlightStrongBackground", {
  dark:"#004972B8", light:"#0e639c40", hcDark:null, hcLight:null
}, _(1703, null), !0), Rn("editor.wordHighlightTextBackground", b5f, _(1704, null), !0), v5f=Rn("editor.wordHighlightBorder", {
  light:null, dark:null, hcDark:x_, hcLight:x_
}, _(1705, null)), Rn("editor.wordHighlightStrongBorder", {
  light:null, dark:null, hcDark:x_, hcLight:x_
}, _(1706, null)), Rn("editor.wordHighlightTextBorder", v5f, _(1707, null)), A5f=Rn("editorOverviewRuler.wordHighlightForeground", "#A0A0A0CC", _(1708, null), !0), y5f=Rn("editorOverviewRuler.wordHighlightStrongForeground", "#C0A0C0CC", _(1709, null), !0), w5f=Rn("editorOverviewRuler.wordHighlightTextForeground", q4n, _(1710, null), !0), _5f=Zh.register({
  description:"word-highlight-strong", stickiness:1, className:"wordHighlightStrong", overviewRuler:{
    color:kC(y5f), position:Tx.Center
  }, minimap:{
    color:kC(H4n), position:1
  }
}), C5f=Zh.register({
  description:"word-highlight-text", stickiness:1, className:"wordHighlightText", overviewRuler:{
    color:kC(w5f), position:Tx.Center
  }, minimap:{
    color:kC(H4n), position:1
  }
}), S5f=Zh.register({
  description:"selection-highlight-overview", stickiness:1, className:"selectionHighlight", overviewRuler:{
    color:kC(q4n), position:Tx.Center
  }, minimap:{
    color:kC(H4n), position:1
  }
}), k5f=Zh.register({
  description:"selection-highlight", stickiness:1, className:"selectionHighlight"
}), E5f=Zh.register({
  description:"word-highlight", stickiness:1, className:"wordHighlight", overviewRuler:{
    color:kC(A5f), position:Tx.Center
  }, minimap:{
    color:kC(H4n), position:1
  }
}), HI((n, e)=>{
  const t=n.getColor(g1c);
  t&&e.addRule(`.monaco-editor .selectionHighlight { background-color: ${t.transparent(.5)}; }`)
})
}
}), Myu, vxa, Wly=
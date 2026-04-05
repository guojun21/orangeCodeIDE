// Module: out-build/vs/editor/contrib/inlineCompletions/browser/controller/inlineCompletionContextKeys.js
// Offset: 25264018 (bundle byte offset)
// Size: 1307 bytes

si(), Ht(), Ht(), VS=class{
  static{
    this.inlineSuggestionVisible=new Sn("inlineSuggestionVisible", !1, _(1337, null))
  }
  static{
    this.inlineSuggestionHasIndentation=new Sn("inlineSuggestionHasIndentation", !1, _(1338, null))
  }
  static{
    this.inlineSuggestionHasIndentationLessThanTabSize=new Sn("inlineSuggestionHasIndentationLessThanTabSize", !0, _(1339, null))
  }
  static{
    this.suppressSuggestions=new Sn("inlineSuggestionSuppressSuggestions", void 0, _(1340, null))
  }
  static{
    this.cursorInIndentation=new Sn("cursorInIndentation", !1, _(1341, null))
  }
  static{
    this.hasSelection=new Sn("editor.hasSelection", !1, _(1342, null))
  }
  static{
    this.cursorAtInlineEdit=new Sn("cursorAtInlineEdit", !1, _(1343, null))
  }
  static{
    this.inlineEditVisible=new Sn("inlineEditIsVisible", !1, _(1344, null))
  }
  static{
    this.tabShouldJumpToInlineEdit=new Sn("tabShouldJumpToInlineEdit", !1, _(1345, null))
  }
  static{
    this.tabShouldAcceptInlineEdit=new Sn("tabShouldAcceptInlineEdit", !1, _(1346, null))
  }
  static{
    this.inInlineEditsPreviewEditor=new Sn("inInlineEditsPreviewEditor", !0, _(1347, null))
  }
}
}
});
function sSA(n){
  return n.sourceId+" @@ "+JSON.stringify({
    ...n, sourceId:void 0
  })
}
function oSA(n, e){
  return tp(e.onDidChangeContext, ()=>e.getContextKeyValue(n))
}
var MAg, Cgi, FAg=
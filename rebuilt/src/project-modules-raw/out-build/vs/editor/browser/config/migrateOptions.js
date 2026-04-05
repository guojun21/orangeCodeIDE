// Module: out-build/vs/editor/browser/config/migrateOptions.js
// Offset: 1454434 (bundle byte offset)
// Size: 4008 bytes

$On=class YGa{
  static{
    this.items=[]
  }
  constructor(e, t){
    this.key=e, this.migrate=t
  }
  apply(e){
    const t=YGa._read(e, this.key), i=s=>YGa._read(e, s), r=(s, o)=>YGa._write(e, s, o);
    this.migrate(t, i, r)
  }
  static _read(e, t){
    if(typeof e>"u")return;
    const i=t.indexOf(".");
    if(i>=0){
      const r=t.substring(0,i);
      return this._read(e[r],t.substring(i+1))
    }
    return e[t]
  }
  static _write(e, t, i){
    const r=t.indexOf(".");
    if(r>=0){
      const s=t.substring(0,r);
      e[s]=e[s]||{
        
      },this._write(e[s],t.substring(r+1),i);
      return
    }
    e[t]=i
  }
}, JY("wordWrap", [[!0, "on"], [!1, "off"]]), JY("lineNumbers", [[!0, "on"], [!1, "off"]]), JY("cursorBlinking", [["visible", "solid"]]), JY("renderWhitespace", [[!0, "boundary"], [!1, "none"]]), JY("renderLineHighlight", [[!0, "line"], [!1, "none"]]), JY("acceptSuggestionOnEnter", [[!0, "on"], [!1, "off"]]), JY("tabCompletion", [[!1, "off"], [!0, "onlySnippets"]]), JY("hover", [[!0, {
  enabled:!0
}
], [!1, {
  enabled:!1
}
]]), JY("parameterHints", [[!0, {
  enabled:!0
}
], [!1, {
  enabled:!1
}
]]), JY("autoIndent", [[!1, "advanced"], [!0, "full"]]), JY("matchBrackets", [[!0, "always"], [!1, "never"]]), JY("renderFinalNewline", [[!0, "on"], [!1, "off"]]), JY("cursorSmoothCaretAnimation", [[!0, "on"], [!1, "off"]]), JY("occurrencesHighlight", [[!0, "singleFile"], [!1, "off"]]), JY("wordBasedSuggestions", [[!0, "matchingDocuments"], [!1, "off"]]), JY("defaultColorDecorators", [[!0, "auto"], [!1, "never"]]), eve("autoClosingBrackets", (n, e, t)=>{
  n===!1&&(t("autoClosingBrackets", "never"), typeof e("autoClosingQuotes")>"u"&&t("autoClosingQuotes", "never"), typeof e("autoSurround")>"u"&&t("autoSurround", "never"))
}), eve("renderIndentGuides", (n, e, t)=>{
  typeof n<"u"&&(t("renderIndentGuides", void 0), typeof e("guides.indentation")>"u"&&t("guides.indentation", !!n))
}), eve("highlightActiveIndentGuide", (n, e, t)=>{
  typeof n<"u"&&(t("highlightActiveIndentGuide", void 0), typeof e("guides.highlightActiveIndentation")>"u"&&t("guides.highlightActiveIndentation", !!n))
}), ovh={
  method:"showMethods", function:"showFunctions", constructor:"showConstructors", deprecated:"showDeprecated", field:"showFields", variable:"showVariables", class:"showClasses", struct:"showStructs", interface:"showInterfaces", module:"showModules", property:"showProperties", event:"showEvents", operator:"showOperators", unit:"showUnits", value:"showValues", constant:"showConstants", enum:"showEnums", enumMember:"showEnumMembers", keyword:"showKeywords", text:"showWords", color:"showColors", file:"showFiles", reference:"showReferences", folder:"showFolders", typeParameter:"showTypeParameters", snippet:"showSnippets"
}, eve("suggest.filteredTypes", (n, e, t)=>{
  if(n&&typeof n=="object"){
    for(const i of Object.entries(ovh))n[i[0]]===!1&&typeof e(`suggest.${i[1]}`)>"u"&&t(`suggest.${i[1]}`, !1);
    t("suggest.filteredTypes", void 0)
  }
}), eve("quickSuggestions", (n, e, t)=>{
  if(typeof n=="boolean"){
    const i=n?"on":"off";
    t("quickSuggestions", {
      comments:i,strings:i,other:i
    })
  }
}), eve("experimental.stickyScroll.enabled", (n, e, t)=>{
  typeof n=="boolean"&&(t("experimental.stickyScroll.enabled", void 0), typeof e("stickyScroll.enabled")>"u"&&t("stickyScroll.enabled", n))
}), eve("experimental.stickyScroll.maxLineCount", (n, e, t)=>{
  typeof n=="number"&&(t("experimental.stickyScroll.maxLineCount", void 0), typeof e("stickyScroll.maxLineCount")>"u"&&t("stickyScroll.maxLineCount", n))
}), eve("codeActionsOnSave", (n, e, t)=>{
  if(n&&typeof n=="object"){
    let i=!1;
    const r={
      
    };
    for(const s of Object.entries(n))typeof s[1]=="boolean"?(i=!0, r[s[0]]=s[1]?"explicit":"never"):r[s[0]]=s[1];
    i&&t("codeActionsOnSave", r)
  }
}), eve("codeActionWidget.includeNearbyQuickfixes", (n, e, t)=>{
  typeof n=="boolean"&&(t("codeActionWidget.includeNearbyQuickfixes", void 0), typeof e("codeActionWidget.includeNearbyQuickFixes")>"u"&&t("codeActionWidget.includeNearbyQuickFixes", n))
}), eve("lightbulb.enabled", (n, e, t)=>{
  typeof n=="boolean"&&t("lightbulb.enabled", n?void 0:"off")
}), eve("inlineSuggest.edits.codeShifting", (n, e, t)=>{
  typeof n=="boolean"&&(t("inlineSuggest.edits.codeShifting", void 0), t("inlineSuggest.edits.allowCodeShifting", n?"always":"never"))
})
}
}), cvh, OSe, qOn=
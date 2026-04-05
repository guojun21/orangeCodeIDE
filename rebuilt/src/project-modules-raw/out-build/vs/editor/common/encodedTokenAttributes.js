// Module: out-build/vs/editor/common/encodedTokenAttributes.js
// Offset: 779122 (bundle byte offset)
// Size: 2626 bytes

(function(n){
  n[n.Null=0]="Null", n[n.PlainText=1]="PlainText"
})(vlh||(vlh={
  
})), (function(n){
  n[n.NotSet=-1]="NotSet", n[n.None=0]="None", n[n.Italic=1]="Italic", n[n.Bold=2]="Bold", n[n.Underline=4]="Underline", n[n.Strikethrough=8]="Strikethrough"
})(Alh||(Alh={
  
})), (function(n){
  n[n.None=0]="None", n[n.DefaultForeground=1]="DefaultForeground", n[n.DefaultBackground=2]="DefaultBackground"
})(ylh||(ylh={
  
})), (function(n){
  n[n.Other=0]="Other", n[n.Comment=1]="Comment", n[n.String=2]="String", n[n.RegEx=3]="RegEx"
})(wlh||(wlh={
  
})), (function(n){
  n[n.LANGUAGEID_MASK=255]="LANGUAGEID_MASK", n[n.TOKEN_TYPE_MASK=768]="TOKEN_TYPE_MASK", n[n.BALANCED_BRACKETS_MASK=1024]="BALANCED_BRACKETS_MASK", n[n.FONT_STYLE_MASK=30720]="FONT_STYLE_MASK", n[n.FOREGROUND_MASK=16744448]="FOREGROUND_MASK", n[n.BACKGROUND_MASK=4278190080]="BACKGROUND_MASK", n[n.ITALIC_MASK=2048]="ITALIC_MASK", n[n.BOLD_MASK=4096]="BOLD_MASK", n[n.UNDERLINE_MASK=8192]="UNDERLINE_MASK", n[n.STRIKETHROUGH_MASK=16384]="STRIKETHROUGH_MASK", n[n.SEMANTIC_USE_ITALIC=1]="SEMANTIC_USE_ITALIC", n[n.SEMANTIC_USE_BOLD=2]="SEMANTIC_USE_BOLD", n[n.SEMANTIC_USE_UNDERLINE=4]="SEMANTIC_USE_UNDERLINE", n[n.SEMANTIC_USE_STRIKETHROUGH=8]="SEMANTIC_USE_STRIKETHROUGH", n[n.SEMANTIC_USE_FOREGROUND=16]="SEMANTIC_USE_FOREGROUND", n[n.SEMANTIC_USE_BACKGROUND=32]="SEMANTIC_USE_BACKGROUND", n[n.LANGUAGEID_OFFSET=0]="LANGUAGEID_OFFSET", n[n.TOKEN_TYPE_OFFSET=8]="TOKEN_TYPE_OFFSET", n[n.BALANCED_BRACKETS_OFFSET=10]="BALANCED_BRACKETS_OFFSET", n[n.FONT_STYLE_OFFSET=11]="FONT_STYLE_OFFSET", n[n.FOREGROUND_OFFSET=15]="FOREGROUND_OFFSET", n[n.BACKGROUND_OFFSET=24]="BACKGROUND_OFFSET"
})(_lh||(_lh={
  
})), pF=class{
  static getLanguageId(n){
    return(n&255)>>>0
  }
  static getTokenType(n){
    return(n&768)>>>8
  }
  static containsBalancedBrackets(n){
    return(n&1024)!==0
  }
  static getFontStyle(n){
    return(n&30720)>>>11
  }
  static getForeground(n){
    return(n&16744448)>>>15
  }
  static getBackground(n){
    return(n&4278190080)>>>24
  }
  static getClassNameFromMetadata(n){
    let t="mtk"+this.getForeground(n);
    const i=this.getFontStyle(n);
    return i&1&&(t+=" mtki"), i&2&&(t+=" mtkb"), i&4&&(t+=" mtku"), i&8&&(t+=" mtks"), t
  }
  static getInlineStyleFromMetadata(n, e){
    const t=this.getForeground(n), i=this.getFontStyle(n);
    let r=`color: ${e[t]};`;
    i&1&&(r+="font-style: italic;"), i&2&&(r+="font-weight: bold;");
    let s="";
    return i&4&&(s+=" underline"), i&8&&(s+=" line-through"), s&&(r+=`text-decoration:${s};`), r
  }
  static getPresentationFromMetadata(n){
    const e=this.getForeground(n), t=this.getFontStyle(n);
    return{
      foreground:e,italic:!!(t&1),bold:!!(t&2),underline:!!(t&4),strikethrough:!!(t&8)
    }
  }
}
}
}), dm, Clh, $I=
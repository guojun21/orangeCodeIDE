// Module: out-build/vs/workbench/services/themes/common/workbenchThemeService.js
// Offset: 32600786 (bundle byte offset)
// Size: 3581 bytes

Wt(), Io(), Js(), d5=bo, f3f="[", b3f="]", DCi="*", v3f=/\[(.+?)\]/g, (function(n){
  n.COLOR_THEME="workbench.colorTheme", n.FILE_ICON_THEME="workbench.iconTheme", n.PRODUCT_ICON_THEME="workbench.productIconTheme", n.COLOR_CUSTOMIZATIONS="workbench.colorCustomizations", n.TOKEN_COLOR_CUSTOMIZATIONS="editor.tokenColorCustomizations", n.SEMANTIC_TOKEN_COLOR_CUSTOMIZATIONS="editor.semanticTokenColorCustomizations", n.PREFERRED_DARK_THEME="workbench.preferredDarkColorTheme", n.PREFERRED_LIGHT_THEME="workbench.preferredLightColorTheme", n.PREFERRED_HC_DARK_THEME="workbench.preferredHighContrastColorTheme", n.PREFERRED_HC_LIGHT_THEME="workbench.preferredHighContrastLightColorTheme", n.DETECT_COLOR_SCHEME="window.autoDetectColorScheme", n.DETECT_HC="window.autoDetectHighContrast", n.SYSTEM_COLOR_THEME="window.systemColorTheme"
})(Wv||(Wv={
  
})), (function(n){
  n.COLOR_THEME_DARK="Cursor Dark", n.COLOR_THEME_LIGHT="Cursor Light", n.COLOR_THEME_HC_DARK="Default High Contrast", n.COLOR_THEME_HC_LIGHT="Default High Contrast Light", n.COLOR_THEME_DARK_OLD="Default Dark+", n.COLOR_THEME_LIGHT_OLD="Default Light+", n.FILE_ICON_THEME="vs-seti", n.PRODUCT_ICON_THEME="Default"
})(NT||(NT={
  
})), A3f={
  "activityBar.activeBorder":"#0078d4", "activityBar.background":"#181818", "activityBar.border":"#2b2b2b", "activityBar.foreground":"#d7d7d7", "activityBar.inactiveForeground":"#868686", "editorGroup.border":"#ffffff17", "editorGroupHeader.tabsBackground":"#181818", "editorGroupHeader.tabsBorder":"#2b2b2b", "statusBar.background":"#181818", "statusBar.border":"#2b2b2b", "statusBar.foreground":"#cccccc", "statusBar.noFolderBackground":"#1f1f1f", "tab.activeBackground":"#1f1f1f", "tab.activeBorder":"#1f1f1f", "tab.activeBorderTop":"#0078d4", "tab.activeForeground":"#ffffff", "tab.border":"#2b2b2b", "textLink.foreground":"#4daafc", "titleBar.activeBackground":"#181818", "titleBar.activeForeground":"#cccccc", "titleBar.border":"#2b2b2b", "titleBar.inactiveBackground":"#1f1f1f", "titleBar.inactiveForeground":"#9d9d9d", "welcomePage.tileBackground":"#2b2b2b"
}, y3f={
  "activityBar.activeBorder":"#005FB8", "activityBar.background":"#f8f8f8", "activityBar.border":"#e5e5e5", "activityBar.foreground":"#1f1f1f", "activityBar.inactiveForeground":"#616161", "editorGroup.border":"#e5e5e5", "editorGroupHeader.tabsBackground":"#f8f8f8", "editorGroupHeader.tabsBorder":"#e5e5e5", "statusBar.background":"#f8f8f8", "statusBar.border":"#e5e5e5", "statusBar.foreground":"#3b3b3b", "statusBar.noFolderBackground":"#f8f8f8", "tab.activeBackground":"#ffffff", "tab.activeBorder":"#f8f8f8", "tab.activeBorderTop":"#005fb8", "tab.activeForeground":"#3b3b3b", "tab.border":"#e5e5e5", "textLink.foreground":"#005fb8", "titleBar.activeBackground":"#f8f8f8", "titleBar.activeForeground":"#1e1e1e", "titleBar.border":"#E5E5E5", "titleBar.inactiveBackground":"#f8f8f8", "titleBar.inactiveForeground":"#8b949e", "welcomePage.tileBackground":"#f3f3f3"
}, (function(n){
  function e(r){
    return r&&{
      _extensionId:r.extensionId,_extensionIsBuiltin:r.extensionIsBuiltin,_extensionName:r.extensionName,_extensionPublisher:r.extensionPublisher
    }
  }
  n.toJSONObject=e;
  function t(r){
    if(r&&Qo(r._extensionId)&&uT(r._extensionIsBuiltin)&&Qo(r._extensionName)&&Qo(r._extensionPublisher))return{
      extensionId:r._extensionId,extensionIsBuiltin:r._extensionIsBuiltin,extensionName:r._extensionName,extensionPublisher:r._extensionPublisher
    }
  }
  n.fromJSONObject=t;
  function i(r, s, o=!1){
    return{
      extensionPublisher:r,extensionId:`${r}.${s}`,extensionName:s,extensionIsBuiltin:o
    }
  }
  n.fromName=i
})(rwe||(rwe={
  
}))
}
}), X1t, irt, PEa, BCi=
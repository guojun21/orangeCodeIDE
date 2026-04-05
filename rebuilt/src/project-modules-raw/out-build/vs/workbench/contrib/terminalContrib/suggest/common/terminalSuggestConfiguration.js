// Module: out-build/vs/workbench/contrib/terminalContrib/suggest/common/terminalSuggestConfiguration.js
// Offset: 31289002 (bundle byte offset)
// Size: 3251 bytes

Ht(), (function(n){
  n.Enabled="terminal.integrated.suggest.enabled", n.QuickSuggestions="terminal.integrated.suggest.quickSuggestions", n.SuggestOnTriggerCharacters="terminal.integrated.suggest.suggestOnTriggerCharacters", n.RunOnEnter="terminal.integrated.suggest.runOnEnter", n.WindowsExecutableExtensions="terminal.integrated.suggest.windowsExecutableExtensions", n.Providers="terminal.integrated.suggest.providers", n.ShowStatusBar="terminal.integrated.suggest.showStatusBar", n.CdPath="terminal.integrated.suggest.cdPath", n.InlineSuggestion="terminal.integrated.suggest.inlineSuggestion", n.UpArrowNavigatesHistory="terminal.integrated.suggest.upArrowNavigatesHistory"
})(XBf||(XBf={
  
})), eRf=["exe", "bat", "cmd", "com", "msi", "ps1", "vbs", "js", "jar", "py", "rb", "pl", "sh"], Vqe="terminal.integrated.suggest", tRf={
  "terminal.integrated.suggest.enabled":{
    restricted:!0, markdownDescription:_(12041, null, "PowerShell v7+, zsh, bash, fish", "`#terminal.integrated.shellIntegration.enabled#`", "`true`"), type:"boolean", default:!1, tags:["preview"]
  }, "terminal.integrated.suggest.providers":{
    restricted:!0, markdownDescription:_(12042, null), type:"object", properties:{
      
    }, default:{
      "terminal-suggest":!0,"pwsh-shell-integration":!0
    }, tags:["preview"]
  }, "terminal.integrated.suggest.quickSuggestions":{
    restricted:!0, markdownDescription:_(12043, null, "`#terminal.integrated.suggest.suggestOnTriggerCharacters#`"), type:"object", properties:{
      commands:{
        description:_(12044,null),type:"string",enum:["off","on"]
      },arguments:{
        description:_(12045,null),type:"string",enum:["off","on"]
      },unknown:{
        description:_(12046,null),type:"string",enum:["off","on"]
      }
    }, default:{
      commands:"on",arguments:"on",unknown:"off"
    }, tags:["preview"]
  }, "terminal.integrated.suggest.suggestOnTriggerCharacters":{
    restricted:!0, markdownDescription:_(12047, null), type:"boolean", default:!0, tags:["preview"]
  }, "terminal.integrated.suggest.runOnEnter":{
    restricted:!0, markdownDescription:_(12048, null), enum:["ignore", "never", "exactMatch", "exactMatchIgnoreExtension", "always"], markdownEnumDescriptions:[_(12049, null), _(12050, null), _(12051, null), _(12052, null), _(12053, null)], default:"ignore", tags:["preview"]
  }, "terminal.integrated.suggest.windowsExecutableExtensions":{
    restricted:!0, markdownDescription:_(12054, null, eRf.sort().map(n=>`- ${n}`).join(`
`)), type:"object", default:{
      
    }, tags:["preview"]
  }, "terminal.integrated.suggest.showStatusBar":{
    restricted:!0, markdownDescription:_(12055, null), type:"boolean", default:!0, tags:["preview"]
  }, "terminal.integrated.suggest.cdPath":{
    restricted:!0, markdownDescription:_(12056, null), type:"string", enum:["off", "relative", "absolute"], markdownEnumDescriptions:[_(12057, null), _(12058, null), _(12059, null)], default:"absolute", tags:["preview"]
  }, "terminal.integrated.suggest.inlineSuggestion":{
    restricted:!0, markdownDescription:_(12060, null), type:"string", enum:["off", "alwaysOnTopExceptExactMatch", "alwaysOnTop"], markdownEnumDescriptions:[_(12061, null), _(12062, null), _(12063, null)], default:"alwaysOnTop", tags:["preview"]
  }, "terminal.integrated.suggest.upArrowNavigatesHistory":{
    restricted:!0, markdownDescription:_(12064, null), type:"boolean", default:!0, tags:["preview"]
  }
}
}
}), dbu, nRf, iRf, rRf=
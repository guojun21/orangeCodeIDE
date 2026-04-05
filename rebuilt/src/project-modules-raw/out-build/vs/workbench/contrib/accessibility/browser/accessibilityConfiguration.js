// Module: out-build/vs/workbench/contrib/accessibility/browser/accessibilityConfiguration.js
// Offset: 28218652 (bundle byte offset)
// Size: 16154 bytes

Ht(), Mp(), Ws(), si(), uP(), QS(), ZNe(), rt(), yn(), Js(), Ece=new Sn("accessibilityHelpIsShown", !1, !0), AL=new Sn("accessibleViewIsShown", !1, !0), Xmn=new Sn("accessibleViewSupportsNavigation", !1, !0), Eva=new Sn("accessibleViewVerbosityEnabled", !1, !0), xva=new Sn("accessibleViewGoToSymbolSupported", !1, !0), wau=new Sn("accessibleViewOnLastLine", !1, !0), bN=new Sn("accessibleViewCurrentProviderId", void 0, void 0), uef=new Sn("accessibleViewInCodeBlock", void 0, void 0), epn=new Sn("accessibleViewContainsCodeBlocks", void 0, void 0), Tva=new Sn("accessibleViewHasUnassignedKeybindings", void 0, void 0), Iva=new Sn("accessibleViewHasAssignedKeybindings", void 0, void 0), (function(n){
  n.DimUnfocusedEnabled="accessibility.dimUnfocused.enabled", n.DimUnfocusedOpacity="accessibility.dimUnfocused.opacity", n.HideAccessibleView="accessibility.hideAccessibleView", n.AccessibleViewCloseOnKeyPress="accessibility.accessibleView.closeOnKeyPress"
})(def||(def={
  
})), (function(n){
  n[n.Default=.75]="Default", n[n.Minimum=.2]="Minimum", n[n.Maximum=1]="Maximum"
})(hef||(hef={
  
})), (function(n){
  n.Terminal="accessibility.verbosity.terminal", n.DiffEditor="accessibility.verbosity.diffEditor", n.MergeEditor="accessibility.verbosity.mergeEditor", n.Chat="accessibility.verbosity.panelChat", n.InlineChat="accessibility.verbosity.inlineChat", n.TerminalChat="accessibility.verbosity.terminalChat", n.InlineCompletions="accessibility.verbosity.inlineCompletions", n.KeybindingsEditor="accessibility.verbosity.keybindingsEditor", n.Notebook="accessibility.verbosity.notebook", n.Editor="accessibility.verbosity.editor", n.Hover="accessibility.verbosity.hover", n.Notification="accessibility.verbosity.notification", n.EmptyEditorHint="accessibility.verbosity.emptyEditorHint", n.ReplEditor="accessibility.verbosity.replEditor", n.Comments="accessibility.verbosity.comments", n.DiffEditorActive="accessibility.verbosity.diffEditorActive", n.Debug="accessibility.verbosity.debug", n.Walkthrough="accessibility.verbosity.walkthrough", n.SourceControl="accessibility.verbosity.sourceControl"
})(mef||(mef={
  
})), wV={
  type:"boolean", default:!0, tags:["accessibility"]
}, Dva=Object.freeze({
  id:"accessibility", title:_(4563, null), type:"object"
}), lB={
  type:"string", enum:["auto", "on", "off"], default:"auto", enumDescriptions:[_(4564, null), _(4565, null), _(4566, null)], tags:["accessibility"]
}, a8={
  type:"object", tags:["accessibility"], additionalProperties:!1, default:{
    sound:"auto", announcement:"auto"
  }
}, c8={
  type:"string", enum:["auto", "off"], default:"auto", enumDescriptions:[_(4567, null), _(4568, null)], tags:["accessibility"]
}, DEe={
  type:"object", tags:["accessibility"], additionalProperties:!1, default:{
    sound:"auto"
  }
}, pef={
  ...Dva, scope:5, properties:{
    "accessibility.verbosity.terminal":{
      description:_(4569,null),...wV
    }, "accessibility.verbosity.diffEditor":{
      description:_(4570,null),...wV
    }, "accessibility.verbosity.panelChat":{
      description:_(4571,null),...wV
    }, "accessibility.verbosity.inlineChat":{
      description:_(4572,null),...wV
    }, "accessibility.verbosity.inlineCompletions":{
      description:_(4573,null),...wV
    }, "accessibility.verbosity.keybindingsEditor":{
      description:_(4574,null),...wV
    }, "accessibility.verbosity.notebook":{
      description:_(4575,null),...wV
    }, "accessibility.verbosity.hover":{
      description:_(4576,null),...wV
    }, "accessibility.verbosity.notification":{
      description:_(4577,null),...wV
    }, "accessibility.verbosity.emptyEditorHint":{
      description:_(4578,null),...wV
    }, "accessibility.verbosity.replEditor":{
      description:_(4579,null),...wV
    }, "accessibility.verbosity.comments":{
      description:_(4580,null),...wV
    }, "accessibility.verbosity.diffEditorActive":{
      description:_(4581,null),...wV
    }, "accessibility.verbosity.debug":{
      description:_(4582,null),...wV
    }, "accessibility.verbosity.walkthrough":{
      description:_(4583,null),...wV
    }, "accessibility.accessibleView.closeOnKeyPress":{
      markdownDescription:_(4584,null),type:"boolean",default:!0
    }, "accessibility.verbosity.sourceControl":{
      description:_(4585,null),...wV
    }, "accessibility.signalOptions.volume":{
      description:_(4586,null),type:"number",minimum:0,maximum:100,default:70,tags:["accessibility"]
    }, "accessibility.signalOptions.debouncePositionChanges":{
      description:_(4587,null),type:"boolean",default:!1,tags:["accessibility"]
    }, "accessibility.signalOptions.experimental.delays.general":{
      type:"object",description:"Delays for all signals besides error and warning at position",additionalProperties:!1,properties:{
        announcement:{
          description:_(4588,null),type:"number",minimum:0,default:3e3
        },sound:{
          description:_(4589,null),type:"number",minimum:0,default:400
        }
      },tags:["accessibility"]
    }, "accessibility.signalOptions.experimental.delays.warningAtPosition":{
      type:"object",additionalProperties:!1,properties:{
        announcement:{
          description:_(4590,null),type:"number",minimum:0,default:3e3
        },sound:{
          description:_(4591,null),type:"number",minimum:0,default:1e3
        }
      },tags:["accessibility"]
    }, "accessibility.signalOptions.experimental.delays.errorAtPosition":{
      type:"object",additionalProperties:!1,properties:{
        announcement:{
          description:_(4592,null),type:"number",minimum:0,default:3e3
        },sound:{
          description:_(4593,null),type:"number",minimum:0,default:1e3
        }
      },tags:["accessibility"]
    }, "accessibility.signals.lineHasBreakpoint":{
      ...a8,description:_(4594,null),properties:{
        sound:{
          description:_(4595,null),...lB
        },announcement:{
          description:_(4596,null),...c8
        }
      }
    }, "accessibility.signals.lineHasInlineSuggestion":{
      ...DEe,description:_(4597,null),properties:{
        sound:{
          description:_(4598,null),...lB,default:"off"
        }
      }
    }, "accessibility.signals.lineHasError":{
      ...a8,description:_(4599,null),properties:{
        sound:{
          description:_(4600,null),...lB
        },announcement:{
          description:_(4601,null),...c8,default:"off"
        }
      }
    }, "accessibility.signals.lineHasFoldedArea":{
      ...a8,description:_(4602,null),properties:{
        sound:{
          description:_(4603,null),...lB,default:"off"
        },announcement:{
          description:_(4604,null),...c8
        }
      }
    }, "accessibility.signals.lineHasWarning":{
      ...a8,description:_(4605,null),properties:{
        sound:{
          description:_(4606,null),...lB
        },announcement:{
          description:_(4607,null),...c8,default:"off"
        }
      }
    }, "accessibility.signals.positionHasError":{
      ...a8,description:_(4608,null),properties:{
        sound:{
          description:_(4609,null),...lB
        },announcement:{
          description:_(4610,null),...c8,default:"on"
        }
      }
    }, "accessibility.signals.positionHasWarning":{
      ...a8,description:_(4611,null),properties:{
        sound:{
          description:_(4612,null),...lB
        },announcement:{
          description:_(4613,null),...c8,default:"on"
        }
      }
    }, "accessibility.signals.onDebugBreak":{
      ...a8,description:_(4614,null),properties:{
        sound:{
          description:_(4615,null),...lB
        },announcement:{
          description:_(4616,null),...c8
        }
      }
    }, "accessibility.signals.noInlayHints":{
      ...a8,description:_(4617,null),properties:{
        sound:{
          description:_(4618,null),...lB
        },announcement:{
          description:_(4619,null),...c8
        }
      }
    }, "accessibility.signals.taskCompleted":{
      ...a8,description:_(4620,null),properties:{
        sound:{
          description:_(4621,null),...lB
        },announcement:{
          description:_(4622,null),...c8
        }
      }
    }, "accessibility.signals.taskFailed":{
      ...a8,description:_(4623,null),properties:{
        sound:{
          description:_(4624,null),...lB
        },announcement:{
          description:_(4625,null),...c8
        }
      }
    }, "accessibility.signals.terminalCommandFailed":{
      ...a8,description:_(4626,null),properties:{
        sound:{
          description:_(4627,null),...lB
        },announcement:{
          description:_(4628,null),...c8
        }
      }
    }, "accessibility.signals.terminalCommandSucceeded":{
      ...a8,description:_(4629,null),properties:{
        sound:{
          description:_(4630,null),...lB
        },announcement:{
          description:_(4631,null),...c8
        }
      }
    }, "accessibility.signals.terminalQuickFix":{
      ...a8,description:_(4632,null),properties:{
        sound:{
          description:_(4633,null),...lB
        },announcement:{
          description:_(4634,null),...c8
        }
      }
    }, "accessibility.signals.terminalBell":{
      ...a8,description:_(4635,null),properties:{
        sound:{
          description:_(4636,null),...lB
        },announcement:{
          description:_(4637,null),...c8
        }
      }
    }, "accessibility.signals.diffLineInserted":{
      ...DEe,description:_(4638,null),properties:{
        sound:{
          description:_(4639,null),...lB
        }
      }
    }, "accessibility.signals.diffLineModified":{
      ...DEe,description:_(4640,null),properties:{
        sound:{
          description:_(4641,null),...lB
        }
      }
    }, "accessibility.signals.diffLineDeleted":{
      ...DEe,description:_(4642,null),properties:{
        sound:{
          description:_(4643,null),...lB
        }
      }
    }, "accessibility.signals.chatEditModifiedFile":{
      ...DEe,description:_(4644,null),properties:{
        sound:{
          description:_(4645,null),...lB
        }
      }
    }, "accessibility.signals.notebookCellCompleted":{
      ...a8,description:_(4646,null),properties:{
        sound:{
          description:_(4647,null),...lB
        },announcement:{
          description:_(4648,null),...c8
        }
      }
    }, "accessibility.signals.notebookCellFailed":{
      ...a8,description:_(4649,null),properties:{
        sound:{
          description:_(4650,null),...lB
        },announcement:{
          description:_(4651,null),...c8
        }
      }
    }, "accessibility.signals.progress":{
      ...a8,description:_(4652,null),properties:{
        sound:{
          description:_(4653,null),...lB
        },announcement:{
          description:_(4654,null),...c8
        }
      }
    }, "accessibility.signals.chatRequestSent":{
      ...a8,description:_(4655,null),properties:{
        sound:{
          description:_(4656,null),...lB
        },announcement:{
          description:_(4657,null),...c8
        }
      }
    }, "accessibility.signals.chatResponseReceived":{
      ...DEe,description:_(4658,null),properties:{
        sound:{
          description:_(4659,null),...lB
        }
      }
    }, "accessibility.signals.codeActionTriggered":{
      ...DEe,description:_(4660,null),properties:{
        sound:{
          description:_(4661,null),...lB
        }
      }
    }, "accessibility.signals.codeActionApplied":{
      ...DEe,description:_(4662,null),properties:{
        sound:{
          description:_(4663,null),...lB
        }
      }
    }, "accessibility.signals.voiceRecordingStarted":{
      ...DEe,description:_(4664,null),properties:{
        sound:{
          description:_(4665,null),...lB
        }
      },default:{
        sound:"on"
      }
    }, "accessibility.signals.voiceRecordingStopped":{
      ...DEe,description:_(4666,null),properties:{
        sound:{
          description:_(4667,null),...lB,default:"off"
        }
      }
    }, "accessibility.signals.clear":{
      ...a8,description:_(4668,null),properties:{
        sound:{
          description:_(4669,null),...lB
        },announcement:{
          description:_(4670,null),...c8
        }
      }
    }, "accessibility.signals.editsUndone":{
      ...a8,description:_(4671,null),properties:{
        sound:{
          description:_(4672,null),...lB
        },announcement:{
          description:_(4673,null),...c8
        }
      }
    }, "accessibility.signals.editsKept":{
      ...a8,description:_(4674,null),properties:{
        sound:{
          description:_(4675,null),...lB
        },announcement:{
          description:_(4676,null),...c8
        }
      }
    }, "accessibility.signals.save":{
      type:"object",tags:["accessibility"],additionalProperties:!1,markdownDescription:_(4677,null),properties:{
        sound:{
          description:_(4678,null),type:"string",enum:["userGesture","always","never"],default:"never",enumDescriptions:[_(4679,null),_(4680,null),_(4681,null)]
        },announcement:{
          description:_(4682,null),type:"string",enum:["userGesture","always","never"],default:"never",enumDescriptions:[_(4683,null),_(4684,null),_(4685,null)]
        }
      },default:{
        sound:"never",announcement:"never"
      }
    }, "accessibility.signals.format":{
      type:"object",tags:["accessibility"],additionalProperties:!1,markdownDescription:_(4686,null),properties:{
        sound:{
          description:_(4687,null),type:"string",enum:["userGesture","always","never"],default:"never",enumDescriptions:[_(4688,null),_(4689,null),_(4690,null)]
        },announcement:{
          description:_(4691,null),type:"string",enum:["userGesture","always","never"],default:"never",enumDescriptions:[_(4692,null),_(4693,null),_(4694,null)]
        }
      },default:{
        sound:"never",announcement:"never"
      }
    }, "accessibility.underlineLinks":{
      type:"boolean",description:_(4695,null),default:!1
    }, "accessibility.debugWatchVariableAnnouncements":{
      type:"boolean",description:_(4696,null),default:!0
    }, "accessibility.replEditor.readLastExecutionOutput":{
      type:"boolean",description:_(4697,null),default:!0
    }, "accessibility.replEditor.autoFocusReplExecution":{
      type:"string",enum:["none","input","lastExecution"],default:"input",description:_(4698,null)
    }, "accessibility.windowTitleOptimized":{
      type:"boolean",default:!0,markdownDescription:_(4699,null,"`#window.title#`","`activeEditorState`")
    }
  }
}, _au=1200, ZAi=class extends at{
  static{
    this.ID="workbench.contrib.dynamicSpeechAccessibilityConfiguration"
  }
  constructor(e){
    super(), this.speechService=e, this._register(In.runAndSubscribe(e.onDidChangeHasSpeechProvider, ()=>this.updateConfiguration()))
  }
  updateConfiguration(){
    if(!this.speechService.hasSpeechProvider)return;
    const e=this.getLanguages(), t=Object.keys(e).sort((r, s)=>e[r].name.localeCompare(e[s].name));
    Di.as(Dh.Configuration).registerConfiguration({
      ...Dva,properties:{
        "accessibility.voice.speechTimeout":{
          markdownDescription:_(4703,null),type:"number",default:_au,minimum:0,tags:["accessibility"]
        },"accessibility.voice.ignoreCodeBlocks":{
          markdownDescription:_(4704,null),type:"boolean",default:!1,tags:["accessibility"]
        },"accessibility.voice.speechLanguage":{
          markdownDescription:_(4705,null),type:"string",enum:t,default:"auto",tags:["accessibility"],enumDescriptions:t.map(r=>e[r].name),enumItemLabels:t.map(r=>e[r].name)
        },"accessibility.voice.autoSynthesize":{
          type:"string",enum:["on","off"],enumDescriptions:[_(4706,null),_(4707,null)],markdownDescription:_(4708,null),default:"off",tags:["accessibility"]
        }
      }
    })
  }
  getLanguages(){
    return{
      auto:{
        name:_(4709,null)
      },...kva
    }
  }
}, ZAi=__decorate([__param(0, IEe)], ZAi), Di.as(t5.ConfigurationMigration).registerConfigurationMigrations([{
  key:"audioCues.volume", migrateFn:(n, e)=>[["accessibility.signalOptions.volume", {
    value:n
  }
  ], ["audioCues.volume", {
    value:void 0
  }
  ]]
}
]), Di.as(t5.ConfigurationMigration).registerConfigurationMigrations([{
  key:"audioCues.debouncePositionChanges", migrateFn:n=>[["accessibility.signalOptions.debouncePositionChanges", {
    value:n
  }
  ], ["audioCues.debouncePositionChanges", {
    value:void 0
  }
  ]]
}
]), Di.as(t5.ConfigurationMigration).registerConfigurationMigrations([{
  key:"accessibility.signalOptions", migrateFn:(n, e)=>{
    const t=yau(e, "general"), i=yau(e, "errorAtPosition"), r=yau(e, "warningAtPosition"), s=L9A(e), o=N9A(e), a=[];
    return s&&a.push(["accessibility.signalOptions.volume", {
      value:s
    }
    ]), t&&a.push(["accessibility.signalOptions.experimental.delays.general", {
      value:t
    }
    ]), i&&a.push(["accessibility.signalOptions.experimental.delays.errorAtPosition", {
      value:i
    }
    ]), r&&a.push(["accessibility.signalOptions.experimental.delays.warningAtPosition", {
      value:r
    }
    ]), o&&a.push(["accessibility.signalOptions.debouncePositionChanges", {
      value:o
    }
    ]), a.push(["accessibility.signalOptions", {
      value:void 0
    }
    ]), a
  }
}
]), Di.as(t5.ConfigurationMigration).registerConfigurationMigrations([{
  key:"accessibility.signals.sounds.volume", migrateFn:n=>[["accessibility.signalOptions.volume", {
    value:n
  }
  ], ["accessibility.signals.sounds.volume", {
    value:void 0
  }
  ]]
}
]), Di.as(t5.ConfigurationMigration).registerConfigurationMigrations([{
  key:"accessibility.signals.debouncePositionChanges", migrateFn:n=>[["accessibility.signalOptions.debouncePositionChanges", {
    value:n
  }
  ], ["accessibility.signals.debouncePositionChanges", {
    value:void 0
  }
  ]]
}
]), Di.as(t5.ConfigurationMigration).registerConfigurationMigrations([{
  key:"accessibility.voice.autoSynthesize", migrateFn:n=>{
    let e;
    if(n===!0)e="on";
    else if(n===!1)e="off";
    else return[];
    return[["accessibility.voice.autoSynthesize", {
      value:e
    }
    ]]
  }
}
]), Di.as(t5.ConfigurationMigration).registerConfigurationMigrations([{
  key:"accessibility.signals.chatResponsePending", migrateFn:(n, e)=>[["accessibility.signals.progress", {
    value:n
  }
  ], ["accessibility.signals.chatResponsePending", {
    value:void 0
  }
  ]]
}
]), Di.as(t5.ConfigurationMigration).registerConfigurationMigrations(rb.allAccessibilitySignals.map(n=>n.legacySoundSettingsKey?{
  key:n.legacySoundSettingsKey, migrateFn:(e, t)=>{
    const i=[], r=n.legacyAnnouncementSettingsKey;
    let s;
    return r&&(s=t(r)??void 0, s!==void 0&&typeof s!="string"&&(s=s?"auto":"off")), i.push([`${n.legacySoundSettingsKey}`, {
      value:void 0
    }
    ]), i.push([`${n.settingsKey}`, {
      value:s!==void 0?{
        announcement:s,sound:e
      }
      :{
        sound:e
      }
    }
    ]), i
  }
}
:void 0).filter(Ch)), Di.as(t5.ConfigurationMigration).registerConfigurationMigrations(rb.allAccessibilitySignals.filter(n=>!!n.legacyAnnouncementSettingsKey&&!!n.legacySoundSettingsKey).map(n=>({
  key:n.legacyAnnouncementSettingsKey, migrateFn:(e, t)=>{
    const i=[], r=t(n.settingsKey)?.sound||t(n.legacySoundSettingsKey);
    return e!==void 0&&typeof e!="string"&&(e=e?"auto":"off"), i.push([`${n.settingsKey}`, {
      value:e!==void 0?{
        announcement:e,sound:r
      }
      :{
        sound:r
      }
    }
    ]), i.push([`${n.legacyAnnouncementSettingsKey}`, {
      value:void 0
    }
    ]), i.push([`${n.legacySoundSettingsKey}`, {
      value:void 0
    }
    ]), i
  }
})))
}
}), Cau, Tye, Sau, kau=
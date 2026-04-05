// Module: out-build/vs/platform/reactivestorage/browser/reactiveStorageService.js
// Offset: 4160244 (bundle byte offset)
// Size: 8506 bytes

Ti(), gT(), Ie(), iM(), qp(), rt(), Wt(), iJ(), lvA(), rf(), ku=xi("reactiveStorageService"), Tvt="https://cursor.com", hhe="https://api2.cursor.sh", a8e="https://api3.cursor.sh", e$o="https://api4.cursor.sh", Ivt="https://api4.cursor.sh", Q6n="https://api3.cursor.sh", j6n="https://repo42.cursor.sh", z6n="https://agent.api5.cursor.sh", V6n="https://agentn.api5.cursor.sh", K6n="https://agent-gcpp-uswest.api5.cursor.sh", Y6n="https://agentn-gcpp-uswest.api5.cursor.sh", ZHh="https://agent-gcpp-eucentral.api5.cursor.sh", XHh="https://agentn-gcpp-eucentral.api5.cursor.sh", eJh="https://agent-gcpp-apsoutheast.api5.cursor.sh", tJh="https://agentn-gcpp-apsoutheast.api5.cursor.sh", N9t="KbZUR41cY7W6zRSdpSUJ7I7mLYBKOCmB", M9t="prod.authentication.cursor.sh", c8e={
  composer:{
    defaultModel:"default", fallbackModels:[], bestOfNDefaultModels:["composer-1", "claude-4.5-opus-high", "gpt-5.1-codex"]
  }, cmdK:{
    defaultModel:"default", fallbackModels:[], bestOfNDefaultModels:[]
  }, backgroundComposer:{
    defaultModel:"default", fallbackModels:[], bestOfNDefaultModels:[]
  }, planExecution:{
    defaultModel:"default", fallbackModels:[], bestOfNDefaultModels:[]
  }, spec:{
    defaultModel:"default", fallbackModels:[], bestOfNDefaultModels:[]
  }, deepSearch:{
    defaultModel:"default", fallbackModels:[], bestOfNDefaultModels:[]
  }, quickAgent:{
    defaultModel:"default", fallbackModels:[], bestOfNDefaultModels:[]
  }
}, nJh={
  composerState:{
    ...J4
  }, mcpServers:[], mcpDisabledTools:[], availableDefaultModels2:[{
    defaultOn:!0, name:"default", supportsAgent:!0, isRecommendedForBackgroundComposer:!0, parameterDefinitions:[], variants:[], legacySlugs:[]
  }
  ], featureModelConfigs:c8e, backgroundComposerState:{
    
  }, dialogDontAskAgainPreferences:{
    
  }, cursorIgnore:{
    hierarchicalEnabled:!1, ignoreSymlinks:!1
  }, teamAdminSettings:{
    cursorIgnore:{
      hierarchicalEnabled:!1,ignoreSymlinks:!1
    }, extensionSigningSettings:{
      verificationEnabled:!1
    }
  }, shouldShowViewZoneWhenPreviewBoxIsClipped6:!1, isFirstLoadForAutoVariants:!0, cppModelsState:VHh, aiSettings:{
    modelConfig:{
      "cmd-k":{
        modelName:"default",maxMode:!1
      },composer:{
        modelName:"default",maxMode:!1
      },"background-composer":{
        modelName:"default",maxMode:!0
      },"composer-ensemble":{
        modelName:"default",maxMode:!1
      },"plan-execution":{
        modelName:"default",maxMode:!1
      },spec:{
        modelName:"default",maxMode:!1
      },"deep-search":{
        modelName:"default",maxMode:!1
      },"quick-agent":{
        modelName:"default",maxMode:!1
      }
    }, modelsWithNoDefaultSwitch:[], modelDefaultSwitchOnNewChat:!1, completedModelMigrations:[], modelOverrideEnabled:[], modelOverrideDisabled:[]
  }, authenticationSettings:{
    githubLoggedIn:!1
  }, cursorCreds:{
    websiteUrl:Tvt, backendUrl:hhe, authClientId:N9t, authDomain:M9t, repoBackendUrl:j6n, telemBackendUrl:a8e, cmdkBackendUrl:Q6n, geoCppBackendUrl:e$o, cppConfigBackendUrl:Ivt, bcProxyUrl:hhe, agentBackendUrlPrivacy:{
      default:z6n,"us-west-1":K6n
    }, agentBackendUrlNonPrivacy:{
      default:V6n,"us-west-1":Y6n
    }, credentialsDisplayName:"Prod"
  }, cmdLineHookState:{
    ignored:!1, timesShown:0
  }, shouldOnlyImportOnAccept:!0, cppAutoImportDecorationStyle:"squiggle", newUserData:{
    toolUsageCount:{
      plainChat:"legacy",contextChat:"legacy",intentChat:"legacy"
    }
  }, azureState:{
    useAzure:!1
  }, personalDocs:[], cppInCmdF:!0, cppTriggerInComments:!0, cppShowWhitespaceOnlyChanges:!1, cppEnabled:!0, cppConfig:void 0, indexRepository:!0, haveNotImportedFromVSC:!1, shouldAutoParseCmdKLinks:!1, autoCreateNewChatAfterTimeout:!0, isFileSyncClientEnabled:!0, membershipType:void 0, fastApplyModelType:p9t.DEFAULT, explicitlyEnableSemanticSearch:!1, backgroundComposerEnv:"prod", preferredEmbeddingModel:AT.UNSPECIFIED, oneTimeSettings:{
    shouldDisableGithubCopilot:!0, hasAcceptedMaxModeConfirmation:!1
  }, eligibleForSnippetLearning:!1, goneThroughCodeSnippetOnboarding:!1, goneThroughCodeSnippetChangeManagement:!1, hasResetModelOnce:!1, systemNotificationsEnabled:!0, rpcFileLoggerEnabled:!1, rpcFileLoggerFolder:void 0
}, c5c=[(n, e)=>e.isBashMode2===!0?(delete e.isBashMode2, {
  ...e, isInterpreterMode:!0
}):e, (n, e)=>e.cursorCreds?.cppBackendUrl===void 0?{
  ...e, cursorCreds:{
    ...e.cursorCreds??{
      
    }, cppBackendUrl:a8e
  }
}
:e, (n, e)=>(e.cppEnabled===void 0&&(e.cppEnabled=!0), e), (n, e)=>{
  if(!e.personalDocs||e.personalDocs.length===0)return e;
  if(e.personalDocs.some(i=>i.numPages===void 0)){
    const i=e.personalDocs.map(r=>{
      const s=r.pages?.length??0;
      return{
        ...r,pages:[...(r.pages??[]).slice(0,10)],numPages:s
      }
    });
    return{
      ...e,personalDocs:i
    }
  }
  return e
}, YHh.bind(null, -1), (n, e)=>{
  const t=e.composerState??{
    
  };
  return t.maxOpenTabsMode===void 0?{
    ...e, composerState:{
      ...t,maxOpenTabsMode:"custom",maxOpenTabsCustomValue:void 0
    }
  }
  :e
}, (n, e)=>(e.systemNotificationsEnabled===void 0&&(e.systemNotificationsEnabled=!0), e), (n, e)=>{
  const t=e.composerState??{
    
  };
  if(t.modes4&&Array.isArray(t.modes4)){
    const i=t.modes4.map(r=>{
      if(typeof r=="object"&&r&&"id"in r&&"icon"in r){
        const s=r,o={
          agent:"infinity","review-edits":"targetTwo",chat:"chat",background:"cloudUpload",plan:"todos"
        };
        if(o[s.id]&&s.icon!==o[s.id])return{
          ...s,icon:o[s.id]
        }
      }
      return r
    });
    return{
      ...e,composerState:{
        ...t,modes4:i
      }
    }
  }
  return e
}, (n, e)=>{
  const t=e.composerState??{
    
  };
  if(t.modes4&&Array.isArray(t.modes4)&&!t.modes4.some(r=>typeof r=="object"&&r&&"id"in r&&r.id==="debug")){
    const r=J4.modes4?.find(s=>s.id==="debug");
    if(r)return{
      ...e,composerState:{
        ...t,modes4:[...t.modes4,r]
      }
    }
  }
  return e
}, (n, e)=>{
  const t=e.cursorCreds;
  if(!t)return e;
  let i=!1;
  const r={
    ...t
  };
  if(typeof t.agentBackendUrlPrivacy=="string"){
    const s=t.agentBackendUrlPrivacy, o=s===z6n?K6n:s;
    r.agentBackendUrlPrivacy={
      default:s,"us-west-1":o
    }, i=!0
  }
  if(typeof t.agentBackendUrlNonPrivacy=="string"){
    const s=t.agentBackendUrlNonPrivacy, o=s===V6n?Y6n:s;
    r.agentBackendUrlNonPrivacy={
      default:s,"us-west-1":o
    }, i=!0
  }
  return i?{
    ...e, cursorCreds:r
  }
  :e
}, (n, e)=>{
  const t=e.cursorCreds;
  return t&&t.credentialsDisplayName==="Prod (us-west-1 agent)"?{
    ...e, cursorCreds:{
      ...t,credentialsDisplayName:"Prod",agentBackendUrlPrivacy:{
        default:z6n,"us-west-1":K6n
      },agentBackendUrlNonPrivacy:{
        default:V6n,"us-west-1":Y6n
      }
    }
  }
  :e
}, (n, e)=>e.openAIBaseUrl===void 0||e.openAIBaseUrl===""?{
  ...e, openAIBaseUrl:null
}
:e], vvA=[(n, e)=>!e.tasksData||!e.tasksData.tasksDataSchemaVersion?{
  ...e, tasksData:INIT_WORKSPACE_USER_PERSISTENT_STORAGE.tasksData
}
:e, (n, e)=>{
  if(e.tasksData&&e.tasksData.tasks&&Array.isArray(e.tasksData.tasks)){
    const t=e.tasksData.tasks.map(i=>typeof i=="object"&&i&&"type"in i&&i.type==="started"?{
      ...i,SPECIAL_KEY_doNotPersist:!1
    }
    :i);
    return{
      ...e,tasksData:{
        ...e.tasksData,tasks:t
      }
    }
  }
  return e
}, (n, e)=>!e.onboardingMetadata||!e.onboardingMetadata.shouldAskToIndex?{
  ...e, onboardingMetadata:{
    shouldAskToIndex:!0
  }
}
:e, (n, e)=>(R9t({
  origObject:e, pathToKey:["persistentChatMetadata", lae.array, "injectedContext", "usedCodebase", "fileResults", lae.array, "file"], keyToRemove:"contents"
}), R9t({
  origObject:e, pathToKey:["persistentChatMetadata", lae.array, "injectedContext", "usedCodebase", "codeResults", lae.array, "codeBlock"], keyToRemove:"fileContents"
}), KUo({
  origObject:e, pathToKey:["persistentChatMetadata", lae.array, "injectedContext", "usedCurrentFile"], keyToKeep:"relativeFilePath"
}), R9t({
  origObject:e, pathToKey:["persistentChatMetadata", lae.array, "predictedContext", "usedCodebase", "fileResults", lae.array, "file"], keyToRemove:"contents"
}), R9t({
  origObject:e, pathToKey:["persistentChatMetadata", lae.array, "predictedContext", "usedCodebase", "codeResults", lae.array, "codeBlock"], keyToRemove:"fileContents"
}), KUo({
  origObject:e, pathToKey:["persistentChatMetadata", lae.array, "predictedContext", "usedCurrentFile"], keyToKeep:"relativeFilePath"
}), e), YHh.bind(null, 1)], t$o=class extends at{
  constructor(n){
    super(), this.owner={
      context:null,owner:null,owned:null,cleanups:null
    }
  }
  dispose(){
    super.dispose(), l9e(this.owner)
  }
  createImplicitEffect(n, e){
    c9e(this.owner, ()=>{
      An(n,e)
    })
  }
  createImplicitResource({
    depFn:n, produceFn:e, initialValue:t
  }){
    const i=c9e(this.owner, ()=>rI(n, e, {
      initialValue:t
    }));
    if(i===void 0)throw new Error("createResource returned undefined");
    return i
  }
  onChangeEffect({
    onChange:n, deps:e, runNowToo:t
  }){
    let i=!0;
    t!==void 0&&(i=!t), c9e(this.owner, ()=>{
      const r=Bf(e,(s,o,a)=>{
        try{
          return n({
            deps:s,prevDeps:o,prevReturnValue:a
          })
        }
        catch(l){
          console.error(l)
        }
      },{
        defer:i
      });
      An(r)
    })
  }
  render(n, e){
    const t=c9e(this.owner, ()=>DRe(n, e));
    if(t===void 0)throw new Error("render returned undefined");
    return{
      dispose:()=>t()
    }
  }
  createSignal(n, e){
    const t=c9e(this.owner, ()=>lt(n, e));
    if(t===void 0)throw new Error("signal returned undefined");
    return t
  }
  createStore(...[n, e]){
    const t=c9e(this.owner, ()=>n?v3(n, e):v3(e));
    if(t===void 0)throw new Error("createStore returned undefined");
    return t
  }
}, F9t=class{
  constructor(n){
    this.current=n
  }
}
}
}), l5c, n$o, AvA=
"use strict";

// Module: out-build/vs/platform/reactivestorage/browser/reactiveStorageService.js
// Offset: 4160244 (bundle byte offset)
// Size: 8506 bytes
Ti();
gT();
Ie();
iM();
qp();
rt();
Wt();
iJ();
lvA();
rf();
ku = xi("reactiveStorageService");
Tvt = "https://cursor.com";
hhe = "https://api2.cursor.sh";
a8e = "https://api3.cursor.sh";
e$o = "https://api4.cursor.sh";
Ivt = "https://api4.cursor.sh";
Q6n = "https://api3.cursor.sh";
j6n = "https://repo42.cursor.sh";
z6n = "https://agent.api5.cursor.sh";
V6n = "https://agentn.api5.cursor.sh";
K6n = "https://agent-gcpp-uswest.api5.cursor.sh";
Y6n = "https://agentn-gcpp-uswest.api5.cursor.sh";
ZHh = "https://agent-gcpp-eucentral.api5.cursor.sh";
XHh = "https://agentn-gcpp-eucentral.api5.cursor.sh";
eJh = "https://agent-gcpp-apsoutheast.api5.cursor.sh";
tJh = "https://agentn-gcpp-apsoutheast.api5.cursor.sh";
N9t = "KbZUR41cY7W6zRSdpSUJ7I7mLYBKOCmB";
M9t = "prod.authentication.cursor.sh";
c8e = {
  composer: {
    defaultModel: "default",
    fallbackModels: [],
    bestOfNDefaultModels: ["composer-1", "claude-4.5-opus-high", "gpt-5.1-codex"]
  },
  cmdK: {
    defaultModel: "default",
    fallbackModels: [],
    bestOfNDefaultModels: []
  },
  backgroundComposer: {
    defaultModel: "default",
    fallbackModels: [],
    bestOfNDefaultModels: []
  },
  planExecution: {
    defaultModel: "default",
    fallbackModels: [],
    bestOfNDefaultModels: []
  },
  spec: {
    defaultModel: "default",
    fallbackModels: [],
    bestOfNDefaultModels: []
  },
  deepSearch: {
    defaultModel: "default",
    fallbackModels: [],
    bestOfNDefaultModels: []
  },
  quickAgent: {
    defaultModel: "default",
    fallbackModels: [],
    bestOfNDefaultModels: []
  }
};
nJh = {
  composerState: {
    ...J4
  },
  mcpServers: [],
  mcpDisabledTools: [],
  availableDefaultModels2: [{
    defaultOn: true,
    name: "default",
    supportsAgent: true,
    isRecommendedForBackgroundComposer: true,
    parameterDefinitions: [],
    variants: [],
    legacySlugs: []
  }],
  featureModelConfigs: c8e,
  backgroundComposerState: {},
  dialogDontAskAgainPreferences: {},
  cursorIgnore: {
    hierarchicalEnabled: false,
    ignoreSymlinks: false
  },
  teamAdminSettings: {
    cursorIgnore: {
      hierarchicalEnabled: false,
      ignoreSymlinks: false
    },
    extensionSigningSettings: {
      verificationEnabled: false
    }
  },
  shouldShowViewZoneWhenPreviewBoxIsClipped6: false,
  isFirstLoadForAutoVariants: true,
  cppModelsState: VHh,
  aiSettings: {
    modelConfig: {
      "cmd-k": {
        modelName: "default",
        maxMode: false
      },
      composer: {
        modelName: "default",
        maxMode: false
      },
      "background-composer": {
        modelName: "default",
        maxMode: true
      },
      "composer-ensemble": {
        modelName: "default",
        maxMode: false
      },
      "plan-execution": {
        modelName: "default",
        maxMode: false
      },
      spec: {
        modelName: "default",
        maxMode: false
      },
      "deep-search": {
        modelName: "default",
        maxMode: false
      },
      "quick-agent": {
        modelName: "default",
        maxMode: false
      }
    },
    modelsWithNoDefaultSwitch: [],
    modelDefaultSwitchOnNewChat: false,
    completedModelMigrations: [],
    modelOverrideEnabled: [],
    modelOverrideDisabled: []
  },
  authenticationSettings: {
    githubLoggedIn: false
  },
  cursorCreds: {
    websiteUrl: Tvt,
    backendUrl: hhe,
    authClientId: N9t,
    authDomain: M9t,
    repoBackendUrl: j6n,
    telemBackendUrl: a8e,
    cmdkBackendUrl: Q6n,
    geoCppBackendUrl: e$o,
    cppConfigBackendUrl: Ivt,
    bcProxyUrl: hhe,
    agentBackendUrlPrivacy: {
      default: z6n,
      "us-west-1": K6n
    },
    agentBackendUrlNonPrivacy: {
      default: V6n,
      "us-west-1": Y6n
    },
    credentialsDisplayName: "Prod"
  },
  cmdLineHookState: {
    ignored: false,
    timesShown: 0
  },
  shouldOnlyImportOnAccept: true,
  cppAutoImportDecorationStyle: "squiggle",
  newUserData: {
    toolUsageCount: {
      plainChat: "legacy",
      contextChat: "legacy",
      intentChat: "legacy"
    }
  },
  azureState: {
    useAzure: false
  },
  personalDocs: [],
  cppInCmdF: true,
  cppTriggerInComments: true,
  cppShowWhitespaceOnlyChanges: false,
  cppEnabled: true,
  cppConfig: undefined,
  indexRepository: true,
  haveNotImportedFromVSC: false,
  shouldAutoParseCmdKLinks: false,
  autoCreateNewChatAfterTimeout: true,
  isFileSyncClientEnabled: true,
  membershipType: undefined,
  fastApplyModelType: p9t.DEFAULT,
  explicitlyEnableSemanticSearch: false,
  backgroundComposerEnv: "prod",
  preferredEmbeddingModel: AT.UNSPECIFIED,
  oneTimeSettings: {
    shouldDisableGithubCopilot: true,
    hasAcceptedMaxModeConfirmation: false
  },
  eligibleForSnippetLearning: false,
  goneThroughCodeSnippetOnboarding: false,
  goneThroughCodeSnippetChangeManagement: false,
  hasResetModelOnce: false,
  systemNotificationsEnabled: true,
  rpcFileLoggerEnabled: false,
  rpcFileLoggerFolder: undefined
};
c5c = [(n, e) => e.isBashMode2 === true ? (delete e.isBashMode2, {
  ...e,
  isInterpreterMode: true
}) : e, (n, e) => e.cursorCreds?.cppBackendUrl === undefined ? {
  ...e,
  cursorCreds: {
    ...(e.cursorCreds ?? {}),
    cppBackendUrl: a8e
  }
} : e, (n, e) => {
  if (e.cppEnabled === undefined) {
    e.cppEnabled = true;
  }
  return e;
}, (n, e) => {
  if (!e.personalDocs || e.personalDocs.length === 0) {
    return e;
  }
  if (e.personalDocs.some(i => i.numPages === undefined)) {
    const i = e.personalDocs.map(r => {
      const s = r.pages?.length ?? 0;
      return {
        ...r,
        pages: [...(r.pages ?? []).slice(0, 10)],
        numPages: s
      };
    });
    return {
      ...e,
      personalDocs: i
    };
  }
  return e;
}, YHh.bind(null, -1), (n, e) => {
  const t = e.composerState ?? {};
  if (t.maxOpenTabsMode === undefined) {
    return {
      ...e,
      composerState: {
        ...t,
        maxOpenTabsMode: "custom",
        maxOpenTabsCustomValue: undefined
      }
    };
  } else {
    return e;
  }
}, (n, e) => {
  if (e.systemNotificationsEnabled === undefined) {
    e.systemNotificationsEnabled = true;
  }
  return e;
}, (n, e) => {
  const t = e.composerState ?? {};
  if (t.modes4 && Array.isArray(t.modes4)) {
    const i = t.modes4.map(r => {
      if (typeof r == "object" && r && "id" in r && "icon" in r) {
        const s = r;
        const o = {
          agent: "infinity",
          "review-edits": "targetTwo",
          chat: "chat",
          background: "cloudUpload",
          plan: "todos"
        };
        if (o[s.id] && s.icon !== o[s.id]) {
          return {
            ...s,
            icon: o[s.id]
          };
        }
      }
      return r;
    });
    return {
      ...e,
      composerState: {
        ...t,
        modes4: i
      }
    };
  }
  return e;
}, (n, e) => {
  const t = e.composerState ?? {};
  if (t.modes4 && Array.isArray(t.modes4) && !t.modes4.some(r => typeof r == "object" && r && "id" in r && r.id === "debug")) {
    const r = J4.modes4?.find(s => s.id === "debug");
    if (r) {
      return {
        ...e,
        composerState: {
          ...t,
          modes4: [...t.modes4, r]
        }
      };
    }
  }
  return e;
}, (n, e) => {
  const t = e.cursorCreds;
  if (!t) {
    return e;
  }
  let i = false;
  const r = {
    ...t
  };
  if (typeof t.agentBackendUrlPrivacy == "string") {
    const s = t.agentBackendUrlPrivacy;
    const o = s === z6n ? K6n : s;
    r.agentBackendUrlPrivacy = {
      default: s,
      "us-west-1": o
    };
    i = true;
  }
  if (typeof t.agentBackendUrlNonPrivacy == "string") {
    const s = t.agentBackendUrlNonPrivacy;
    const o = s === V6n ? Y6n : s;
    r.agentBackendUrlNonPrivacy = {
      default: s,
      "us-west-1": o
    };
    i = true;
  }
  if (i) {
    return {
      ...e,
      cursorCreds: r
    };
  } else {
    return e;
  }
}, (n, e) => {
  const t = e.cursorCreds;
  if (t && t.credentialsDisplayName === "Prod (us-west-1 agent)") {
    return {
      ...e,
      cursorCreds: {
        ...t,
        credentialsDisplayName: "Prod",
        agentBackendUrlPrivacy: {
          default: z6n,
          "us-west-1": K6n
        },
        agentBackendUrlNonPrivacy: {
          default: V6n,
          "us-west-1": Y6n
        }
      }
    };
  } else {
    return e;
  }
}, (n, e) => e.openAIBaseUrl === undefined || e.openAIBaseUrl === "" ? {
  ...e,
  openAIBaseUrl: null
} : e];
vvA = [(n, e) => !e.tasksData || !e.tasksData.tasksDataSchemaVersion ? {
  ...e,
  tasksData: INIT_WORKSPACE_USER_PERSISTENT_STORAGE.tasksData
} : e, (n, e) => {
  if (e.tasksData && e.tasksData.tasks && Array.isArray(e.tasksData.tasks)) {
    const t = e.tasksData.tasks.map(i => typeof i == "object" && i && "type" in i && i.type === "started" ? {
      ...i,
      SPECIAL_KEY_doNotPersist: false
    } : i);
    return {
      ...e,
      tasksData: {
        ...e.tasksData,
        tasks: t
      }
    };
  }
  return e;
}, (n, e) => !e.onboardingMetadata || !e.onboardingMetadata.shouldAskToIndex ? {
  ...e,
  onboardingMetadata: {
    shouldAskToIndex: true
  }
} : e, (n, e) => {
  R9t({
    origObject: e,
    pathToKey: ["persistentChatMetadata", lae.array, "injectedContext", "usedCodebase", "fileResults", lae.array, "file"],
    keyToRemove: "contents"
  });
  R9t({
    origObject: e,
    pathToKey: ["persistentChatMetadata", lae.array, "injectedContext", "usedCodebase", "codeResults", lae.array, "codeBlock"],
    keyToRemove: "fileContents"
  });
  KUo({
    origObject: e,
    pathToKey: ["persistentChatMetadata", lae.array, "injectedContext", "usedCurrentFile"],
    keyToKeep: "relativeFilePath"
  });
  R9t({
    origObject: e,
    pathToKey: ["persistentChatMetadata", lae.array, "predictedContext", "usedCodebase", "fileResults", lae.array, "file"],
    keyToRemove: "contents"
  });
  R9t({
    origObject: e,
    pathToKey: ["persistentChatMetadata", lae.array, "predictedContext", "usedCodebase", "codeResults", lae.array, "codeBlock"],
    keyToRemove: "fileContents"
  });
  KUo({
    origObject: e,
    pathToKey: ["persistentChatMetadata", lae.array, "predictedContext", "usedCurrentFile"],
    keyToKeep: "relativeFilePath"
  });
  return e;
}, YHh.bind(null, 1)];
t$o = class extends at {
  constructor(n) {
    super();
    this.owner = {
      context: null,
      owner: null,
      owned: null,
      cleanups: null
    };
  }
  dispose() {
    super.dispose();
    l9e(this.owner);
  }
  createImplicitEffect(n, e) {
    c9e(this.owner, () => {
      An(n, e);
    });
  }
  createImplicitResource({
    depFn: n,
    produceFn: e,
    initialValue: t
  }) {
    const i = c9e(this.owner, () => rI(n, e, {
      initialValue: t
    }));
    if (i === undefined) {
      throw new Error("createResource returned undefined");
    }
    return i;
  }
  onChangeEffect({
    onChange: n,
    deps: e,
    runNowToo: t
  }) {
    let i = true;
    if (t !== undefined) {
      i = !t;
    }
    c9e(this.owner, () => {
      const r = Bf(e, (s, o, a) => {
        try {
          return n({
            deps: s,
            prevDeps: o,
            prevReturnValue: a
          });
        } catch (l) {
          console.error(l);
        }
      }, {
        defer: i
      });
      An(r);
    });
  }
  render(n, e) {
    const t = c9e(this.owner, () => DRe(n, e));
    if (t === undefined) {
      throw new Error("render returned undefined");
    }
    return {
      dispose: () => t()
    };
  }
  createSignal(n, e) {
    const t = c9e(this.owner, () => lt(n, e));
    if (t === undefined) {
      throw new Error("signal returned undefined");
    }
    return t;
  }
  createStore(...[n, e]) {
    const t = c9e(this.owner, () => n ? v3(n, e) : v3(e));
    if (t === undefined) {
      throw new Error("createStore returned undefined");
    }
    return t;
  }
};
F9t = class {
  constructor(n) {
    this.current = n;
  }
};

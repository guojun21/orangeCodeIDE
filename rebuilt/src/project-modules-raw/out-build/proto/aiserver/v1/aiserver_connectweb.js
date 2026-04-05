// Module: out-build/proto/aiserver/v1/aiserver_connectweb.js
// Offset: 28385374 (bundle byte offset)
// Size: 14622 bytes

iM(), Ka(), cv(), m8A(), p8A(), H6(), Nxh(), V8o(), xyi(), B8n(), Qmn(), KKe(), Bce={
  typeName:"aiserver.v1.AiService", methods:{
    serverTime:{
      name:"ServerTime",I:j9h,O:z9h,kind:vn.Unary
    }, healthCheck:{
      name:"HealthCheck",I:SOc,O:V9h,kind:vn.Unary
    }, privacyCheck:{
      name:"PrivacyCheck",I:K9h,O:Y9h,kind:vn.Unary
    }, timeLeftHealthCheck:{
      name:"TimeLeftHealthCheck",I:SOc,O:Z9h,kind:vn.Unary
    }, throwErrorCheck:{
      name:"ThrowErrorCheck",I:F9h,O:O9h,kind:vn.Unary
    }, availableModels:{
      name:"AvailableModels",I:COc,O:U9h,kind:vn.Unary
    }, streamChatTryReallyHard:{
      name:"StreamChatTryReallyHard",I:iYe,O:JRe,kind:vn.ServerStreaming
    }, rerankDocuments:{
      name:"RerankDocuments",I:yLh,O:wLh,kind:vn.Unary
    }, streamComposer:{
      name:"StreamComposer",I:iUo,O:JRe,kind:vn.ServerStreaming
    }, streamComposerContext:{
      name:"StreamComposerContext",I:wOc,O:_Oc,kind:vn.ServerStreaming
    }, warmComposerCache:{
      name:"WarmComposerCache",I:iUo,O:p6h,kind:vn.Unary
    }, keepComposerCacheWarm:{
      name:"KeepComposerCacheWarm",I:e$h,O:t$h,kind:vn.Unary
    }, countTokens:{
      name:"CountTokens",I:l$h,O:d$h,kind:vn.Unary
    }, streamPotentialLocs:{
      name:"StreamPotentialLocs",I:H8h,O:J8h,kind:vn.ServerStreaming
    }, streamPotentialLocsUnderneath:{
      name:"StreamPotentialLocsUnderneath",I:$8h,O:q8h,kind:vn.ServerStreaming
    }, streamPotentialLocsInitialQueries:{
      name:"StreamPotentialLocsInitialQueries",I:O8h,O:U8h,kind:vn.ServerStreaming
    }, getChatTitle:{
      name:"GetChatTitle",I:l6h,O:u6h,kind:vn.Unary
    }, getCompletion:{
      name:"GetCompletion",I:v6h,O:A6h,kind:vn.Unary
    }, isolatedTreesitter:{
      name:"IsolatedTreesitter",I:e6h,O:t6h,kind:vn.Unary
    }, getSimplePrompt:{
      name:"GetSimplePrompt",I:ROc,O:i6h,kind:vn.Unary
    }, getPassthroughPrompt:{
      name:"GetPassthroughPrompt",I:r6h,O:s6h,kind:vn.Unary
    }, checkLongFilesFit:{
      name:"CheckLongFilesFit",I:iYe,O:o6h,kind:vn.Unary
    }, getEvaluationPrompt:{
      name:"GetEvaluationPrompt",I:a6h,O:c6h,kind:vn.Unary
    }, getUserInfo:{
      name:"GetUserInfo",I:w6h,O:C6h,kind:vn.Unary
    }, streamChat:{
      name:"StreamChat",I:iYe,O:JRe,kind:vn.ServerStreaming
    }, streamChatWeb:{
      name:"StreamChatWeb",I:iYe,O:JRe,kind:vn.ServerStreaming
    }, warmChatCache:{
      name:"WarmChatCache",I:g6h,O:f6h,kind:vn.Unary
    }, streamEdit:{
      name:"StreamEdit",I:xOc,O:JRe,kind:vn.ServerStreaming
    }, preloadEdit:{
      name:"PreloadEdit",I:m8h,O:p8h,kind:vn.Unary
    }, streamFastEdit:{
      name:"StreamFastEdit",I:d8h,O:h8h,kind:vn.ServerStreaming
    }, streamGenerate:{
      name:"StreamGenerate",I:X9h,O:JRe,kind:vn.ServerStreaming
    }, streamInlineLongCompletion:{
      name:"StreamInlineLongCompletion",I:Ztf,O:JRe,kind:vn.ServerStreaming
    }, slashEdit:{
      name:"SlashEdit",I:s8h,O:o8h,kind:vn.ServerStreaming
    }, slashEditFollowUpWithPreviousEdits:{
      name:"SlashEditFollowUpWithPreviousEdits",I:a8h,O:c8h,kind:vn.ServerStreaming
    }, streamAiPreviews:{
      name:"StreamAiPreviews",I:tnf,O:nnf,kind:vn.ServerStreaming
    }, shouldTurnOnCppOnboarding:{
      name:"ShouldTurnOnCppOnboarding",I:KMh,O:YMh,kind:vn.Unary
    }, getComposerAutocomplete:{
      name:"GetComposerAutocomplete",I:eOc,O:VOh,kind:vn.Unary
    }, streamReview:{
      name:"StreamReview",I:e8h,O:r8h,kind:vn.ServerStreaming
    }, streamReviewChat:{
      name:"StreamReviewChat",I:t8h,O:n8h,kind:vn.ServerStreaming
    }, checkQueuePosition:{
      name:"CheckQueuePosition",I:DOc,O:Y8h,kind:vn.Unary
    }, checkUsageBasedPrice:{
      name:"CheckUsageBasedPrice",I:V8h,O:K8h,kind:vn.Unary
    }, doThisForMeCheck:{
      name:"DoThisForMeCheck",I:S6h,O:POc,kind:vn.Unary
    }, streamDoThisForMe:{
      name:"StreamDoThisForMe",I:I6h,O:R6h,kind:vn.ServerStreaming
    }, streamChatToolformer:{
      name:"StreamChatToolformer",I:iYe,O:LOc,kind:vn.ServerStreaming
    }, streamChatToolformerContinue:{
      name:"StreamChatToolformerContinue",I:P6h,O:LOc,kind:vn.ServerStreaming
    }, pushAiThought:{
      name:"PushAiThought",I:U6h,O:H6h,kind:vn.Unary
    }, checkDoableAsTask:{
      name:"CheckDoableAsTask",I:J6h,O:G6h,kind:vn.Unary
    }, reportGroundTruthCandidate:{
      name:"ReportGroundTruthCandidate",I:MUh,O:FUh,kind:vn.Unary
    }, reportCmdKFate:{
      name:"ReportCmdKFate",I:OUh,O:UUh,kind:vn.Unary
    }, showWelcomeScreen:{
      name:"ShowWelcomeScreen",I:P5h,O:L5h,kind:vn.Unary
    }, interfaceAgentInit:{
      name:"InterfaceAgentInit",I:W6h,O:Q6h,kind:vn.Unary
    }, streamInterfaceAgentStatus:{
      name:"StreamInterfaceAgentStatus",I:j6h,O:z6h,kind:vn.ServerStreaming
    }, taskGetInterfaceAgentStatus:{
      name:"TaskGetInterfaceAgentStatus",I:V6h,O:Y6h,kind:vn.ServerStreaming
    }, updateVscodeProfile:{
      name:"UpdateVscodeProfile",I:hOc,O:g5h,kind:vn.Unary
    }, taskInit:{
      name:"TaskInit",I:Z6h,O:X6h,kind:vn.Unary
    }, taskPause:{
      name:"TaskPause",I:aUh,O:cUh,kind:vn.Unary
    }, taskInfo:{
      name:"TaskInfo",I:oUh,O:FOc,kind:vn.Unary
    }, taskStreamLog:{
      name:"TaskStreamLog",I:eUh,O:lUh,kind:vn.ServerStreaming
    }, taskSendMessage:{
      name:"TaskSendMessage",I:mUh,O:pUh,kind:vn.Unary
    }, taskProvideResult:{
      name:"TaskProvideResult",I:dUh,O:hUh,kind:vn.Unary
    }, createExperimentalIndex:{
      name:"CreateExperimentalIndex",I:ixh,O:rxh,kind:vn.Unary
    }, listExperimentalIndexFiles:{
      name:"ListExperimentalIndexFiles",I:sxh,O:oxh,kind:vn.Unary
    }, listenExperimentalIndex:{
      name:"ListenExperimentalIndex",I:JRc,O:axh,kind:vn.ServerStreaming
    }, registerFileToIndex:{
      name:"RegisterFileToIndex",I:X9o,O:n8o,kind:vn.Unary
    }, setupIndexDependencies:{
      name:"SetupIndexDependencies",I:pxh,O:gxh,kind:vn.Unary
    }, computeIndexTopoSort:{
      name:"ComputeIndexTopoSort",I:fxh,O:bxh,kind:vn.Unary
    }, streamChatDeepContext:{
      name:"StreamChatDeepContext",I:R9h,O:P9h,kind:vn.ServerStreaming
    }, chooseCodeReferences:{
      name:"ChooseCodeReferences",I:e8o,O:n8o,kind:vn.Unary
    }, registerCodeReferences:{
      name:"RegisterCodeReferences",I:_xh,O:Cxh,kind:vn.Unary
    }, extractPaths:{
      name:"ExtractPaths",I:Dxh,O:Bxh,kind:vn.Unary
    }, summarizeWithReferences:{
      name:"SummarizeWithReferences",I:t8o,O:n8o,kind:vn.Unary
    }, documentationQuery:{
      name:"DocumentationQuery",I:IIh,O:DIh,kind:vn.Unary
    }, availableDocs:{
      name:"AvailableDocs",I:N9h,O:M9h,kind:vn.Unary
    }, reportFeedback:{
      name:"ReportFeedback",I:gUh,O:fUh,kind:vn.Unary
    }, reportBug:{
      name:"ReportBug",I:AUh,O:yUh,kind:vn.Unary
    }, streamChatContext:{
      name:"StreamChatContext",I:wOc,O:_Oc,kind:vn.ServerStreaming
    }, generateTldr:{
      name:"GenerateTldr",I:g9h,O:f9h,kind:vn.Unary
    }, taskStreamChatContext:{
      name:"TaskStreamChatContext",I:b9h,O:x9h,kind:vn.ServerStreaming
    }, rerankResults:{
      name:"RerankResults",I:m9h,O:p9h,kind:vn.Unary
    }, modelQuery:{
      name:"ModelQuery",I:yOc,O:c9h,kind:vn.Unary
    }, modelQueryV2:{
      name:"ModelQueryV2",I:yOc,O:u9h,kind:vn.ServerStreaming
    }, intentPrediction:{
      name:"IntentPrediction",I:V5h,O:K5h,kind:vn.Unary
    }, getChatSuggestions:{
      name:"GetChatSuggestions",I:nOc,O:t3h,kind:vn.Unary
    }, getUserInstructions:{
      name:"GetUserInstructions",I:n3h,O:i3h,kind:vn.Unary
    }, streamCursorTutor:{
      name:"StreamCursorTutor",I:o9h,O:a9h,kind:vn.ServerStreaming
    }, checkFeatureStatus:{
      name:"CheckFeatureStatus",I:gOc,O:fOc,kind:vn.Unary
    }, checkFeaturesStatus:{
      name:"CheckFeaturesStatus",I:q5h,O:H5h,kind:vn.Unary
    }, checkFeatureStatusUnauthenticated:{
      name:"CheckFeatureStatusUnauthenticated",I:gOc,O:fOc,kind:vn.Unary
    }, getEffectiveTokenLimit:{
      name:"GetEffectiveTokenLimit",I:G5h,O:W5h,kind:vn.Unary
    }, getContextScores:{
      name:"GetContextScores",I:I5h,O:D5h,kind:vn.Unary
    }, streamCpp:{
      name:"StreamCpp",I:q6o,O:ZMh,kind:vn.ServerStreaming
    }, cppConfig:{
      name:"CppConfig",I:H6o,O:t2h,kind:vn.Unary
    }, cppEditHistoryStatus:{
      name:"CppEditHistoryStatus",I:P4c,O:L4c,kind:vn.Unary
    }, cppAppend:{
      name:"CppAppend",I:PFh,O:LFh,kind:vn.Unary
    }, refreshTabContext:{
      name:"RefreshTabContext",I:m2h,O:I4c,kind:vn.Unary
    }, checkNumberConfig:{
      name:"CheckNumberConfig",I:bOc,O:vOc,kind:vn.Unary
    }, checkNumberConfigUnauthenticated:{
      name:"CheckNumberConfigUnauthenticated",I:bOc,O:vOc,kind:vn.Unary
    }, checkNumberConfigs:{
      name:"CheckNumberConfigs",I:Q5h,O:j5h,kind:vn.Unary
    }, streamTerminalAutocomplete:{
      name:"StreamTerminalAutocomplete",I:x8h,O:R8h,kind:vn.ServerStreaming
    }, streamPseudocodeGenerator:{
      name:"StreamPseudocodeGenerator",I:T8h,O:I8h,kind:vn.ServerStreaming
    }, streamPseudocodeMapper:{
      name:"StreamPseudocodeMapper",I:D8h,O:B8h,kind:vn.ServerStreaming
    }, acknowledgeGracePeriodDisclaimer:{
      name:"AcknowledgeGracePeriodDisclaimer",I:p3h,O:g3h,kind:vn.Unary
    }, streamAiLintBug:{
      name:"StreamAiLintBug",I:g8h,O:v8h,kind:vn.ServerStreaming
    }, streamAiCursorHelp:{
      name:"StreamAiCursorHelp",I:k8h,O:E8h,kind:vn.ServerStreaming
    }, logUserLintReply:{
      name:"LogUserLintReply",I:A8h,O:y8h,kind:vn.Unary
    }, logLinterExplicitUserFeedback:{
      name:"LogLinterExplicitUserFeedback",I:w8h,O:_8h,kind:vn.Unary
    }, streamFixMarkers:{
      name:"StreamFixMarkers",I:wUh,O:PUh,kind:vn.ServerStreaming
    }, reportInlineAction:{
      name:"ReportInlineAction",I:inf,O:rnf,kind:vn.Unary
    }, streamPriomptPrompt:{
      name:"StreamPriomptPrompt",I:U5h,O:$5h,kind:vn.ServerStreaming
    }, streamLint:{
      name:"StreamLint",I:NUh,O:JRe,kind:vn.ServerStreaming
    }, streamNewLintRule:{
      name:"StreamNewLintRule",I:C8h,O:JRe,kind:vn.ServerStreaming
    }, aiProject:{
      name:"AiProject",I:N5h,O:M5h,kind:vn.ServerStreaming
    }, toCamelCase:{
      name:"ToCamelCase",I:F5h,O:O5h,kind:vn.Unary
    }, reportGenerationFeedback:{
      name:"ReportGenerationFeedback",I:B5h,O:R5h,kind:vn.Unary
    }, getThoughtAnnotation:{
      name:"GetThoughtAnnotation",I:p5h,O:f5h,kind:vn.Unary
    }, streamWebCmdKV1:{
      name:"StreamWebCmdKV1",I:x5h,O:T5h,kind:vn.ServerStreaming
    }, streamNextCursorPrediction:{
      name:"StreamNextCursorPrediction",I:k5h,O:E5h,kind:vn.ServerStreaming
    }, isCursorPredictionEnabled:{
      name:"IsCursorPredictionEnabled",I:C5h,O:S5h,kind:vn.Unary
    }, getCppEditClassification:{
      name:"GetCppEditClassification",I:E4c,O:o2h,kind:vn.Unary
    }, getTerminalCompletion:{
      name:"GetTerminalCompletion",I:Q3h,O:j3h,kind:vn.Unary
    }, takeNotesOnCommitDiff:{
      name:"TakeNotesOnCommitDiff",I:w5h,O:_5h,kind:vn.Unary
    }, bulkEmbed:{
      name:"BulkEmbed",I:v5h,O:A5h,kind:vn.Unary
    }, backgroundCmdKEval:{
      name:"BackgroundCmdKEval",I:c5h,O:m5h,kind:vn.ServerStreaming
    }, backgroundCmdK:{
      name:"BackgroundCmdK",I:X3h,O:a5h,kind:vn.ServerStreaming
    }, streamCursorMotion:{
      name:"StreamCursorMotion",I:Y3h,O:Z3h,kind:vn.ServerStreaming
    }, calculateAutoSelection:{
      name:"CalculateAutoSelection",I:uOc,O:K3h,kind:vn.Unary
    }, getAtSymbolSuggestions:{
      name:"GetAtSymbolSuggestions",I:J3h,O:G3h,kind:vn.Unary
    }, getCodebaseQuestions:{
      name:"GetCodebaseQuestions",I:iYe,O:$3h,kind:vn.Unary
    }, cppEditHistoryAppend:{
      name:"CppEditHistoryAppend",I:q8n,O:NFh,kind:vn.Unary
    }, devOnlyGetPastRequestIds:{
      name:"DevOnlyGetPastRequestIds",I:F3h,O:U3h,kind:vn.Unary
    }, getFilesForComposer:{
      name:"GetFilesForComposer",I:$Uh,O:qUh,kind:vn.Unary
    }, tryParseTypeScriptTreeSitter:{
      name:"TryParseTypeScriptTreeSitter",I:N3h,O:M3h,kind:vn.Unary
    }, nameTab:{
      name:"NameTab",I:D3h,O:B3h,kind:vn.Unary
    }, isTerminalFinishedV2:{
      name:"IsTerminalFinishedV2",I:r3h,O:s3h,kind:vn.Unary
    }, testModelStatus:{
      name:"TestModelStatus",I:R3h,O:P3h,kind:vn.Unary
    }, findBugs:{
      name:"FindBugs",I:jUh,O:zUh,kind:vn.Unary
    }, contextReranking:{
      name:"ContextReranking",I:T3h,O:I3h,kind:vn.Unary
    }, autoContext:{
      name:"AutoContext",I:l3h,O:d3h,kind:vn.Unary
    }, writeGitCommitMessage:{
      name:"WriteGitCommitMessage",I:KUh,O:YUh,kind:vn.Unary
    }, writeGitBranchName:{
      name:"WriteGitBranchName",I:ZUh,O:XUh,kind:vn.Unary
    }, streamBugBot:{
      name:"StreamBugBot",I:D8n,O:iOc,kind:vn.ServerStreaming
    }, streamBugBotAgentic:{
      name:"StreamBugBotAgentic",I:E3h,O:rOc,kind:vn.BiDiStreaming
    }, streamBugBotAgenticSSE:{
      name:"StreamBugBotAgenticSSE",I:kye,O:rOc,kind:vn.ServerStreaming
    }, streamBugBotAgenticPoll:{
      name:"StreamBugBotAgenticPoll",I:K$e,O:Y$e,kind:vn.ServerStreaming
    }, streamUiBestOfNJudge:{
      name:"StreamUiBestOfNJudge",I:n6n,O:aOc,kind:vn.BiDiStreaming
    }, streamUiBestOfNJudgeSSE:{
      name:"StreamUiBestOfNJudgeSSE",I:kye,O:aOc,kind:vn.ServerStreaming
    }, streamUiBestOfNJudgePoll:{
      name:"StreamUiBestOfNJudgePoll",I:K$e,O:Y$e,kind:vn.ServerStreaming
    }, checkBugBotPrice:{
      name:"CheckBugBotPrice",I:h3h,O:m3h,kind:vn.Unary
    }, checkBugBotTelemetryHealthy:{
      name:"CheckBugBotTelemetryHealthy",I:f3h,O:b3h,kind:vn.Unary
    }, recordIdeBugReaction:{
      name:"RecordIdeBugReaction",I:v3h,O:A3h,kind:vn.Unary
    }, getSuggestedBugBotIterations:{
      name:"GetSuggestedBugBotIterations",I:y3h,O:w3h,kind:vn.Unary
    }, getEditorBugbotAutoRunStatus:{
      name:"GetEditorBugbotAutoRunStatus",I:_3h,O:C3h,kind:vn.Unary
    }, testBidi:{
      name:"TestBidi",I:o3h,O:a3h,kind:vn.BiDiStreaming
    }, streamDiffReview:{
      name:"StreamDiffReview",I:rUo,O:n$h,kind:vn.ServerStreaming
    }, streamDiffReviewByFile:{
      name:"StreamDiffReviewByFile",I:rUo,O:o$h,kind:vn.ServerStreaming
    }, getModelLabels:{
      name:"GetModelLabels",I:h$h,O:m$h,kind:vn.Unary
    }, getLastDefaultModelNudge:{
      name:"GetLastDefaultModelNudge",I:g$h,O:f$h,kind:vn.Unary
    }, getDefaultModelNudgeData:{
      name:"GetDefaultModelNudgeData",I:qOc,O:b$h,kind:vn.Unary
    }, getDefaultModel:{
      name:"GetDefaultModel",I:HOc,O:v$h,kind:vn.Unary
    }, reportCommitAiAnalytics:{
      name:"ReportCommitAiAnalytics",I:w$h,O:_$h,kind:vn.Unary
    }, testBedrockCredentials:{
      name:"TestBedrockCredentials",I:A$h,O:y$h,kind:vn.Unary
    }, reportAiCodeChangeMetrics:{
      name:"ReportAiCodeChangeMetrics",I:C$h,O:S$h,kind:vn.Unary
    }, reportProcessMetrics:{
      name:"ReportProcessMetrics",I:k$h,O:x$h,kind:vn.Unary
    }, reportProcessMetricsV2:{
      name:"ReportProcessMetricsV2",I:QOc,O:T$h,kind:vn.Unary
    }, reportClientNumericMetrics:{
      name:"ReportClientNumericMetrics",I:I$h,O:D$h,kind:vn.Unary
    }, potentiallyGenerateMemory:{
      name:"PotentiallyGenerateMemory",I:B$h,O:R$h,kind:vn.Unary
    }, knowledgeBaseAdd:{
      name:"KnowledgeBaseAdd",I:P$h,O:L$h,kind:vn.Unary
    }, knowledgeBaseList:{
      name:"KnowledgeBaseList",I:U$h,O:$$h,kind:vn.Unary
    }, knowledgeBaseRemove:{
      name:"KnowledgeBaseRemove",I:N$h,O:M$h,kind:vn.Unary
    }, knowledgeBaseUpdate:{
      name:"KnowledgeBaseUpdate",I:F$h,O:O$h,kind:vn.Unary
    }, fetchRelevantKnowledgeForConversation:{
      name:"FetchRelevantKnowledgeForConversation",I:J$h,O:G$h,kind:vn.Unary
    }, inferBackgroundComposerScripts:{
      name:"InferBackgroundComposerScripts",I:W$h,O:j$h,kind:vn.Unary
    }, getBackgroundComposerFeedbackLink:{
      name:"GetBackgroundComposerFeedbackLink",I:V$h,O:K$h,kind:vn.Unary
    }, getUsableModels:{
      name:"GetUsableModels",I:s4c,O:o4c,kind:vn.Unary
    }, getDefaultModelForCli:{
      name:"GetDefaultModelForCli",I:a4c,O:c4c,kind:vn.Unary
    }, streamComposerEnhancer:{
      name:"StreamComposerEnhancer",I:HUh,O:OOc,kind:vn.BiDiStreaming
    }, streamComposerEnhancerSSE:{
      name:"StreamComposerEnhancerSSE",I:kye,O:OOc,kind:vn.ServerStreaming
    }, streamComposerEnhancerPoll:{
      name:"StreamComposerEnhancerPoll",I:K$e,O:Y$e,kind:vn.ServerStreaming
    }, streamStt:{
      name:"StreamStt",I:p6n,O:KOc,kind:vn.BiDiStreaming
    }, streamSttSSE:{
      name:"StreamSttSSE",I:kye,O:KOc,kind:vn.ServerStreaming
    }, streamSttPoll:{
      name:"StreamSttPoll",I:K$e,O:Y$e,kind:vn.ServerStreaming
    }, nameAgent:{
      name:"NameAgent",I:n4c,O:i4c,kind:vn.Unary
    }, evaluatePromptHook:{
      name:"EvaluatePromptHook",I:cOc,O:L3h,kind:vn.Unary
    }
  }
}
}
});
function Tyi(n){
  const e=n;
  return typeof e?.location?.id=="string"&&typeof e.alignment=="number"
}
function g8A(n){
  const e=n;
  return(typeof e?.primary=="number"||Tyi(e?.primary))&&typeof e?.secondary=="number"
}
function f8A(n){
  const e=n;
  return!!e?.content&&Array.isArray(e?.commands)
}
var V0, Snf, gpn, knf, CE=
// Module: out-build/proto/agent/v1/report_bugfix_results_tool_pb.js
// Offset: 2836769 (bundle byte offset)
// Size: 14513 bytes

Ka(), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.FIXED=1]="FIXED", n[n.FALSE_POSITIVE=2]="FALSE_POSITIVE", n[n.COULD_NOT_FIX=3]="COULD_NOT_FIX", n[n.RESOLVED_BY_OTHER_FIX=4]="RESOLVED_BY_OTHER_FIX"
})(m9n||(m9n={
  
})), v.util.setEnumType(m9n, "agent.v1.BugfixVerdict", [{
  no:0, name:"BUGFIX_VERDICT_UNSPECIFIED"
}, {
  no:1, name:"BUGFIX_VERDICT_FIXED"
}, {
  no:2, name:"BUGFIX_VERDICT_FALSE_POSITIVE"
}, {
  no:3, name:"BUGFIX_VERDICT_COULD_NOT_FIX"
}, {
  no:4, name:"BUGFIX_VERDICT_RESOLVED_BY_OTHER_FIX"
}
]), u8o=class E5i extends ie{
  constructor(e){
    super(), this.bugId="", this.bugTitle="", this.verdict=m9n.UNSPECIFIED, this.explanation="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.BugfixResultItem"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"bug_id",kind:"scalar",T:9
    }, {
      no:2,name:"bug_title",kind:"scalar",T:9
    }, {
      no:3,name:"verdict",kind:"enum",T:v.getEnumType(m9n)
    }, {
      no:4,name:"explanation",kind:"scalar",T:9
    }, {
      no:5,name:"severity",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new E5i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new E5i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new E5i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(E5i, e, t)
  }
}, AIh=class x5i extends ie{
  constructor(e){
    super(), this.summary="", this.results=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ReportBugfixResultsArgs"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"summary",kind:"scalar",T:9
    }, {
      no:2,name:"results",kind:"message",T:u8o,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new x5i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new x5i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new x5i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(x5i, e, t)
  }
}, uPc=class T5i extends ie{
  constructor(e){
    super(), this.results=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ReportBugfixResultsSuccess"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"results",kind:"message",T:u8o,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new T5i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new T5i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new T5i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(T5i, e, t)
  }
}, dPc=class I5i extends ie{
  constructor(e){
    super(), this.error="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ReportBugfixResultsError"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"error",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new I5i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new I5i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new I5i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(I5i, e, t)
  }
}, yIh=class D5i extends ie{
  constructor(e){
    super(), this.result={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ReportBugfixResultsResult"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"message",T:uPc,oneof:"result"
    }, {
      no:2,name:"error",kind:"message",T:dPc,oneof:"result"
    }
    ])
  }
  static fromBinary(e, t){
    return new D5i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new D5i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new D5i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(D5i, e, t)
  }
}, wIh=class B5i extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ReportBugfixResultsToolCall"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"args",kind:"message",T:AIh
    }, {
      no:2,name:"result",kind:"message",T:yIh
    }
    ])
  }
  static fromBinary(e, t){
    return new B5i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new B5i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new B5i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(B5i, e, t)
  }
}
}
}), hPc={
  
};
WN(hPc, {
  AddTestParams:()=>WLc, AddTestResult:()=>QLc, AddTestResult_Feedback:()=>zLc, AddTestResult_RelatedInformation:()=>jLc, AddUiStepParams:()=>oLc, AddUiStepParams_SearchResult:()=>aLc, AddUiStepParams_SearchResults:()=>cLc, AddUiStepResult:()=>lLc, ApplyAgentDiffParams:()=>m5t, AskQuestionParams:()=>oke, AskQuestionParams_Option:()=>Q8o, AskQuestionParams_Question:()=>W8o, AskQuestionResult:()=>zY, AskQuestionResult_Answer:()=>j8o, AskQuestionStream:()=>XNc, AwaitTaskParams:()=>U8o, AwaitTaskResult:()=>BNc, AwaitTaskResult_TaskResultItem:()=>RNc, AwaitTaskStream:()=>PNc, BackgroundComposerFollowupParams:()=>D9n, BackgroundComposerFollowupResult:()=>T8o, BackgroundComposerFollowupStream:()=>fNc, BuiltinTool:()=>MKe, BuiltinToolCall:()=>rLc, BuiltinToolResult:()=>sLc, CallMcpToolParams:()=>T9n, CallMcpToolResult:()=>E8o, CallMcpToolStream:()=>HNc, ClientSideToolV2:()=>an, ClientSideToolV2Call:()=>nhe, ClientSideToolV2Result:()=>VR, ComputerUseParams:()=>zbt, ComputerUseResult:()=>$5t, ComputerUseStream:()=>tMc, CreateDiagramParams:()=>L9n, CreateDiagramResult:()=>P8o, CreateDiagramStream:()=>wNc, CreatePlanParams:()=>JKe, CreatePlanResult:()=>jbt, CreatePlanResult_Accepted:()=>QNc, CreatePlanResult_Modified:()=>zNc, CreatePlanResult_Rejected:()=>jNc, CreatePlanStream:()=>VNc, CreateRmFilesParams:()=>pLc, CreateRmFilesResult:()=>gLc, CustomToolCall:()=>NLc, CustomToolResult:()=>MLc, DeepSearchParams:()=>P9n, DeepSearchResult:()=>R8o, DeepSearchStream:()=>yNc, DeleteFileParams:()=>FKe, DeleteFileResult:()=>OKe, DeleteFileStream:()=>iLc, DeleteTestParams:()=>eNc, DeleteTestResult:()=>tNc, EditFileParams:()=>g5t, EditFileResult:()=>f9n, EditFileResult_EditFileHumanReview:()=>EPc, EditFileResult_FileDiff:()=>FRe, EditFileResult_FileDiff_ChunkDiff:()=>SPc, EditFileResult_FileDiff_Editor:()=>f5t, EditFileResult_HumanFeedback:()=>xPc, EditFileResult_RecoverableError:()=>kPc, EditFileResult_RecoverableError_RecoverableErrorType:()=>b5t, EditFileStream:()=>TPc, EditFileV2Params:()=>ihe, EditFileV2Params_StreamingEditCode:()=>_Pc, EditFileV2Params_StreamingEditText:()=>wPc, EditFileV2Result:()=>MRe, EditFileV2Stream:()=>CPc, EditParams:()=>qLc, EditParams_FrontendEditType:()=>T5t, EditResult:()=>HLc, EditResult_Feedback:()=>GLc, EditResult_RelatedInformation:()=>JLc, EndParams:()=>BLc, EndResult:()=>LLc, ErrorToolResult:()=>OLc, FetchPullRequestParams:()=>R9n, FetchPullRequestResult:()=>D8o, FetchPullRequestStream:()=>ANc, FetchRulesParams:()=>g9n, FetchRulesResult:()=>h8o, FetchRulesStream:()=>dNc, FixLintsParams:()=>N9n, FixLintsResult:()=>L8o, FixLintsResult_FileResult:()=>N8o, FixLintsStream:()=>_Nc, GetProjectStructureParams:()=>fLc, GetProjectStructureResult:()=>bLc, GetProjectStructureResult_File:()=>vLc, GetSymbolsParams:()=>rNc, GetSymbolsParams_LineRange:()=>sNc, GetSymbolsResult:()=>oNc, GetTestsParams:()=>YLc, GetTestsResult:()=>ZLc, GetTestsResult_Test:()=>XLc, GlobFileSearchParams:()=>O5t, GlobFileSearchResult:()=>Q9n, GlobFileSearchResult_Directory:()=>H8o, GlobFileSearchResult_File:()=>q8o, GlobFileSearchStream:()=>$Nc, GotodefDefinition:()=>FLc, GotodefParams:()=>x5t, GotodefResult:()=>k9n, GotodefStream:()=>SNc, HumanReview:()=>b9n, IssueComment:()=>vNc, Knowledge:()=>A8o, KnowledgeBaseParams:()=>B9n, KnowledgeBaseResult:()=>I8o, KnowledgeBaseStream:()=>bNc, ListDirParams:()=>A9n, ListDirResult:()=>v5t, ListDirResult_File:()=>BPc, ListDirStream:()=>RPc, ListDirV2Params:()=>M5t, ListDirV2Result:()=>F5t, ListDirV2Result_DirectoryTreeNode:()=>MNc, ListDirV2Result_DirectoryTreeNode_File:()=>FNc, ListDirV2Stream:()=>ONc, ListMcpResourcesParams:()=>D5t, ListMcpResourcesResult:()=>x9n, ListMcpResourcesResult_MCPResource:()=>k8o, ListMcpResourcesStream:()=>qNc, MCPParams:()=>Gbt, MCPParams_Tool:()=>F9e, MCPResult:()=>I5t, MCPStream:()=>mNc, MatchRange:()=>_8o, McpAuthParams:()=>Vbt, McpAuthResult:()=>V9n, McpAuthStream:()=>sMc, MissingFile:()=>v8o, MissingFile_MissingReason:()=>C5t, NewEditParams:()=>ULc, NewEditResult:()=>$Lc, NewFileParams:()=>ALc, NewFileResult:()=>RLc, NudgeMessage:()=>fPc, OutputLocation:()=>lNc, PlanPhase:()=>WNc, PullRequestReference:()=>B8o, Range:()=>wLc, ReadChunkParams:()=>TLc, ReadChunkResult:()=>ILc, ReadFileParams:()=>y9n, ReadFileResult:()=>w9n, ReadFileStream:()=>PPc, ReadFileV2Params:()=>Qbt, ReadFileV2Result:()=>O9e, ReadFileV2Stream:()=>UNc, ReadLintsParams:()=>P5t, ReadLintsResult:()=>M9n, ReadLintsStream:()=>CNc, ReadMcpResourceParams:()=>B5t, ReadMcpResourceResult:()=>R5t, ReadMcpResourceStream:()=>JNc, ReadProjectParams:()=>j9n, ReadProjectResult:()=>J8o, ReadProjectStream:()=>KNc, ReadSemsearchFilesParams:()=>_5t, ReadSemsearchFilesResult:()=>S5t, ReadSemsearchFilesStream:()=>tLc, ReadWithLinterParams:()=>uLc, ReadWithLinterResult:()=>dLc, ReapplyParams:()=>p9n, ReapplyResult:()=>d8o, ReapplyStream:()=>mPc, ReportBugfixResultsParams:()=>H5t, ReportBugfixResultsResult:()=>z8o, ReportBugfixResultsStream:()=>rMc, RipgrepRawSearchContentMatch:()=>G9n, RipgrepRawSearchContentResult:()=>H9n, RipgrepRawSearchCountResult:()=>U9n, RipgrepRawSearchError:()=>O9n, RipgrepRawSearchFileCount:()=>$9n, RipgrepRawSearchFileMatch:()=>J9n, RipgrepRawSearchFilesResult:()=>q9n, RipgrepRawSearchFilesResult_FileEntry:()=>INc, RipgrepRawSearchParams:()=>L5t, RipgrepRawSearchResult:()=>F9n, RipgrepRawSearchStream:()=>DNc, RipgrepRawSearchSuccess:()=>O8o, RipgrepRawSearchUnionResult:()=>N5t, RipgrepSearchParams:()=>_9n, RipgrepSearchParams_IPatternInfoProto:()=>LPc, RipgrepSearchParams_IPatternInfoProto_INotebookPatternInfoProto:()=>NPc, RipgrepSearchParams_ITextQueryBuilderOptionsProto:()=>MPc, RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExcludePatternProto:()=>OPc, RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExtraFileResourcesProto:()=>FPc, RipgrepSearchParams_ITextQueryBuilderOptionsProto_INotebookSearchConfigProto:()=>qPc, RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPathPatternBuilderProto:()=>g8o, RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPatternBuilderProto:()=>UPc, RipgrepSearchParams_ITextQueryBuilderOptionsProto_ITextSearchPreviewOptionsProto:()=>$Pc, RipgrepSearchResult:()=>f8o, RipgrepSearchResultInternal:()=>HPc, RipgrepSearchResultInternal_ICachedSearchStats:()=>ZPc, RipgrepSearchResultInternal_IFileMatch:()=>JPc, RipgrepSearchResultInternal_IFileSearchProviderStats:()=>XPc, RipgrepSearchResultInternal_IFileSearchStats:()=>VPc, RipgrepSearchResultInternal_IFileSearchStats_FileSearchProviderType:()=>y5t, RipgrepSearchResultInternal_ISearchEngineStats:()=>YPc, RipgrepSearchResultInternal_ISearchRange:()=>b8o, RipgrepSearchResultInternal_ISearchRangeSetPairing:()=>jPc, RipgrepSearchResultInternal_ITextSearchCompleteMessage:()=>zPc, RipgrepSearchResultInternal_ITextSearchContext:()=>QPc, RipgrepSearchResultInternal_ITextSearchMatch:()=>WPc, RipgrepSearchResultInternal_ITextSearchResult:()=>GPc, RipgrepSearchResultInternal_ITextSearchStats:()=>KPc, RipgrepSearchResultInternal_ITextSearchStats_TextSearchProviderType:()=>w5t, RipgrepSearchResultInternal_SearchCompletionExitCode:()=>C9n, RipgrepSearchResultInternal_TextSearchCompleteMessageType:()=>A5t, RipgrepSearchStream:()=>eLc, RunTerminalCommandEndedReason:()=>k3, RunTerminalCommandV2Params:()=>UKe, RunTerminalCommandV2Params_ExecutionOptions:()=>E9n, RunTerminalCommandV2Result:()=>rhe, RunTerminalCommandV2Stream:()=>uNc, RunTerminalCommandsParams:()=>hLc, RunTerminalCommandsResult:()=>mLc, RunTestParams:()=>VLc, RunTestResult:()=>KLc, SaveFileParams:()=>nNc, SaveFileResult:()=>iNc, ScratchpadResult:()=>kIh, SearchParams:()=>SLc, SearchResult:()=>xLc, SearchSymbolsParams:()=>I9n, SearchSymbolsResult:()=>x8o, SearchSymbolsResult_SymbolMatch:()=>pNc, SearchSymbolsStream:()=>gNc, SearchToolFileSearchResult:()=>kLc, SearchToolFileSearchResult_Line:()=>ELc, SemanticSearchArguments:()=>CIh, SemanticSearchFullParams:()=>k5t, SemanticSearchFullResult:()=>E5t, SemanticSearchFullStream:()=>nLc, SemanticSearchParams:()=>yLc, SemanticSearchResult:()=>_Lc, SemanticSearchResult_Item:()=>CLc, ServerSideToolResult:()=>SIh, ShellCommandParsingResult:()=>C8o, ShellCommandParsingResult_ExecutableCommand:()=>cNc, ShellCommandParsingResult_ExecutableCommandArg:()=>aNc, ShellType:()=>NKe, Step:()=>GNc, StreamedBackPartialToolCall:()=>APc, StreamedBackToolCall:()=>m8o, StreamedBackToolCallV2:()=>yPc, SummarizeCodeParams:()=>EIh, SummarizeCodeResult:()=>xIh, SummarizeCodeStream:()=>TIh, SwitchModeParams:()=>GKe, SwitchModeResult:()=>U5t, SwitchModeStream:()=>eMc, TaskParams:()=>M8o, TaskResult:()=>kNc, TaskResult_AsyncTaskResult:()=>ENc, TaskResult_CompletedTaskResult:()=>F8o, TaskStream:()=>xNc, TaskV2Params:()=>$Ke, TaskV2Result:()=>qKe, TaskV2Stream:()=>TNc, TodoItem:()=>QB, TodoReadParams:()=>W9n, TodoReadResult:()=>$8o, TodoReadStream:()=>LNc, TodoWriteParams:()=>Wbt, TodoWriteResult:()=>HKe, TodoWriteStream:()=>NNc, ToolCall:()=>w8o, ToolCallFileSearchParams:()=>v9n, ToolCallFileSearchResult:()=>p8o, ToolCallFileSearchResult_File:()=>DPc, ToolCallFileSearchStream:()=>IPc, ToolPullRequestResult:()=>y8o, ToolResult:()=>S9n, ToolResultAttachments:()=>bPc, ToolResultAttachments_DiscoveryBudgetReminder:()=>vPc, ToolResultAttachments_TodoReminderType:()=>p5t, ToolResultError:()=>ske, ToolResultError_EditFileError:()=>pPc, ToolResultError_SearchReplaceError:()=>gPc, UndoEditParams:()=>DLc, UndoEditResult:()=>PLc, UpdateProjectParams:()=>z9n, UpdateProjectResult:()=>G8o, UpdateProjectStream:()=>ZNc, UpdateProjectStringReplacement:()=>YNc, WebFetchParams:()=>WKe, WebFetchResult:()=>q5t, WebFetchStream:()=>iMc, WebSearchParams:()=>Hbt, WebSearchResult:()=>Jbt, WebSearchResult_WebReference:()=>S8o, WebSearchStream:()=>hNc, WriteShellStdinStream:()=>nMc
});
var an, NKe, MKe, k3, p9n, m5t, d8o, g9n, h8o, mPc, CIh, ske, pPc, gPc, nhe, VR, fPc, bPc, p5t, vPc, APc, m8o, yPc, ihe, wPc, _Pc, MRe, CPc, g5t, f9n, FRe, f5t, SPc, kPc, b5t, EPc, xPc, b9n, TPc, v9n, IPc, p8o, DPc, A9n, v5t, BPc, RPc, y9n, w9n, PPc, _9n, LPc, NPc, MPc, FPc, OPc, UPc, g8o, $Pc, qPc, f8o, HPc, A5t, C9n, JPc, GPc, WPc, QPc, jPc, b8o, zPc, VPc, y5t, KPc, w5t, YPc, ZPc, XPc, eLc, _5t, v8o, C5t, A8o, y8o, S5t, tLc, k5t, E5t, nLc, FKe, OKe, iLc, rLc, sLc, oLc, aLc, cLc, lLc, SIh, w8o, S9n, uLc, dLc, hLc, mLc, pLc, gLc, fLc, bLc, vLc, ALc, yLc, wLc, _8o, _Lc, CLc, SLc, kLc, ELc, xLc, TLc, ILc, DLc, BLc, RLc, PLc, LLc, NLc, kIh, MLc, x5t, FLc, k9n, OLc, ULc, $Lc, qLc, T5t, HLc, JLc, GLc, WLc, QLc, jLc, zLc, VLc, KLc, YLc, ZLc, XLc, eNc, tNc, nNc, iNc, rNc, sNc, oNc, C8o, aNc, cNc, UKe, E9n, lNc, rhe, uNc, dNc, Hbt, Jbt, S8o, hNc, Gbt, F9e, I5t, mNc, D5t, x9n, k8o, B5t, R5t, T9n, E8o, I9n, x8o, pNc, gNc, D9n, T8o, fNc, EIh, xIh, TIh, B9n, I8o, bNc, R9n, D8o, vNc, ANc, B8o, P9n, R8o, yNc, L9n, P8o, wNc, N9n, L8o, N8o, _Nc, P5t, M9n, CNc, SNc, M8o, kNc, F8o, ENc, xNc, $Ke, qKe, TNc, L5t, F9n, O9n, O8o, N5t, U9n, $9n, q9n, INc, H9n, J9n, G9n, DNc, U8o, BNc, RNc, PNc, W9n, QB, $8o, LNc, Wbt, HKe, NNc, M5t, F5t, MNc, FNc, ONc, Qbt, O9e, UNc, O5t, Q9n, q8o, H8o, $Nc, qNc, HNc, JNc, GNc, WNc, JKe, jbt, QNc, jNc, zNc, VNc, j9n, J8o, KNc, YNc, z9n, G8o, ZNc, oke, W8o, Q8o, zY, j8o, XNc, GKe, U5t, eMc, zbt, $5t, tMc, nMc, WKe, q5t, iMc, H5t, z8o, rMc, Vbt, V9n, sMc, Vg=
// Module: out-build/vs/base/common/hooks/types.js
// Offset: 28068151 (bundle byte offset)
// Size: 1580 bytes

ZOA(), XOA(), e3A(), t3A(), n3A(), i3A(), r3A(), s3A(), o3A(), a3A(), c3A(), l3A(), u3A(), d3A(), h3A(), m3A(), p3A(), g3A(), f3A(), Wba=60, Nou=5, PAi=2, df={
  beforeShellExecution:"beforeShellExecution", beforeMCPExecution:"beforeMCPExecution", afterShellExecution:"afterShellExecution", afterMCPExecution:"afterMCPExecution", beforeReadFile:"beforeReadFile", afterFileEdit:"afterFileEdit", beforeTabFileRead:"beforeTabFileRead", afterTabFileEdit:"afterTabFileEdit", stop:"stop", beforeSubmitPrompt:"beforeSubmitPrompt", afterAgentResponse:"afterAgentResponse", afterAgentThought:"afterAgentThought", sessionStart:"sessionStart", sessionEnd:"sessionEnd", preCompact:"preCompact", subagentStart:"subagentStart", subagentStop:"subagentStop", preToolUse:"preToolUse", postToolUse:"postToolUse", postToolUseFailure:"postToolUseFailure"
}, $Yg={
  [df.beforeShellExecution]:Lou, [df.beforeMCPExecution]:Lou, [df.afterShellExecution]:xYg, [df.afterMCPExecution]:EYg, [df.beforeReadFile]:AYg, [df.afterFileEdit]:yYg, [df.beforeTabFileRead]:wYg, [df.afterTabFileEdit]:_Yg, [df.beforeSubmitPrompt]:CYg, [df.stop]:SYg, [df.afterAgentResponse]:kYg, [df.afterAgentThought]:TYg, [df.sessionStart]:IYg, [df.sessionEnd]:DYg, [df.preCompact]:LYg, [df.subagentStart]:MYg, [df.subagentStop]:FYg, [df.preToolUse]:NYg, [df.postToolUse]:RYg, [df.postToolUseFailure]:BYg
}, qYg=(n, e)=>{
  const t=$Yg[n], i=t(e);
  return i.isValid?{
    success:!0, data:e
  }
  :{
    success:!1, errors:i.errors
  }
}, Mou=[df.beforeShellExecution, df.beforeMCPExecution, df.beforeReadFile, df.beforeTabFileRead, df.subagentStart, df.preToolUse]
}
}), HYg, JYg=
"use strict";

// Module: out-build/vs/workbench/services/agent/browser/toolCallHandlers/shell/shellToolCallHandler.js
// Offset: 30539225 (bundle byte offset)
// Size: 6274 bytes
Vg();
Uv();
Ud();
rt();
QSf = 50;
jSf = class {
  constructor(n) {
    this.context = n;
    this.bufferedOutputByCallId = new Map();
    this._isDisposed = false;
    tgt(this);
  }
  dispose() {
    if (!this._isDisposed) {
      this._isDisposed = true;
      ngt(this);
      for (const n of this.bufferedOutputByCallId.values()) {
        if (n.flushTimeout !== null) {
          clearTimeout(n.flushTimeout);
          n.flushTimeout = null;
        }
      }
      this.bufferedOutputByCallId.clear();
    }
  }
  getToolFormer() {
    const e = this.context.composerDataHandle.data.capabilities.find(t => t.type === ko.TOOL_FORMER);
    if (!e) {
      throw new Error("ToolFormer not found");
    }
    return e;
  }
  async handlePartialToolCall(n, e) {
    await this.handleToolCallStarted(n, e);
  }
  async handleToolCallDelta(n, e, t) {
    const i = this.getToolFormer();
    const r = i.getBubbleIdByToolCallId(t);
    if (!r) {
      return;
    }
    const s = i.getBubbleData(r);
    if (!s) {
      return;
    }
    let o = "";
    let a = "";
    if (e.delta.case === "stdout") {
      o = e.delta.value.content;
    } else if (e.delta.case === "stderr") {
      a = e.delta.value.content;
    }
    if (s.additionalData?.status !== "cancelled") {
      i.setBubbleData(r, {
        additionalData: {
          status: "running"
        }
      });
    }
    this.handleToolCallDeltaBuffered(t, o, a);
  }
  handleToolCallDeltaBuffered(n, e, t) {
    let i = this.bufferedOutputByCallId.get(n);
    if (!i) {
      i = {
        stdout: "",
        stderr: "",
        pendingStdout: "",
        pendingStderr: "",
        flushTimeout: null
      };
      this.bufferedOutputByCallId.set(n, i);
    }
    i.pendingStdout += e;
    i.pendingStderr += t;
    if (i.flushTimeout === null) {
      i.flushTimeout = setTimeout(() => {
        this.flushBufferedOutput(n);
      }, QSf);
    }
  }
  flushBufferedOutput(n) {
    if (this._isDisposed) {
      return;
    }
    const e = this.bufferedOutputByCallId.get(n);
    if (e) {
      if (e.flushTimeout !== null) {
        clearTimeout(e.flushTimeout);
        e.flushTimeout = null;
      }
      if (e.pendingStdout !== "" || e.pendingStderr !== "") {
        e.stdout += e.pendingStdout;
        e.stderr += e.pendingStderr;
        e.pendingStdout = "";
        e.pendingStderr = "";
        this.updateToolResult(n, e.stdout + e.stderr);
      }
    }
  }
  cleanupBufferedOutput(n) {
    const e = this.bufferedOutputByCallId.get(n);
    if (e) {
      if (e.flushTimeout !== null) {
        clearTimeout(e.flushTimeout);
      }
      this.bufferedOutputByCallId.delete(n);
    }
  }
  updateToolResult(n, e) {
    this.getToolFormer().handleToolResult(new VR({
      tool: an.RUN_TERMINAL_COMMAND_V2,
      toolCallId: n,
      result: {
        case: "runTerminalCommandV2Result",
        value: new rhe({
          output: e,
          exitCode: 0,
          rejected: false
        })
      }
    }), n, false);
  }
  async handleToolCallStarted(n, e, t = false) {
    const i = n.tool.value;
    const r = this.getToolFormer();
    const s = i.args;
    const o = s?.isBackground ?? false;
    const a = s?.command ?? "";
    if (!t) {
      try {
        const f = this.context.composerDataHandle.data.composerId;
        this.context.instantiationService.invokeFunction(w => w.get(Yz)).onShellToolCallStarted(e, a, f).catch(w => {
          console.error("[ShellToolCallHandler] Error notifying AI code tracking service:", w);
        });
      } catch (f) {
        console.error("[ShellToolCallHandler] Error notifying AI code tracking service:", f);
      }
    }
    const l = s !== undefined ? new UKe({
      command: s.command,
      cwd: s.workingDirectory,
      isBackground: o,
      requireUserApproval: false,
      options: s.timeout ? new E9n({
        timeout: s.timeout
      }) : undefined,
      parsingResult: s.parsingResult,
      requestedSandboxPolicy: s.requestedSandboxPolicy,
      commandDescription: s?.description ?? i?.description,
      classifierResult: s.classifierResult
    }) : undefined;
    let u = r.getBubbleIdByToolCallId(e);
    u ||= r.getOrCreateBubbleId({
      toolCallId: e,
      toolIndex: 0,
      modelCallId: "",
      toolCallType: an.RUN_TERMINAL_COMMAND_V2,
      name: "run_terminal_command_v2",
      params: l !== undefined ? {
        case: "runTerminalCommandV2Params",
        value: l
      } : undefined,
      rawArgs: "",
      toolCall: n
    });
    const p = r.getBubbleData(u)?.additionalData?.status === "pending";
    const g = s !== undefined ? "running" : "loading";
    r.setBubbleData(u, {
      params: l,
      ...(p ? {} : {
        additionalData: {
          status: g
        }
      })
    });
  }
  async handleToolCallCompleted(n, e) {
    const t = n.tool.value;
    const i = this.getToolFormer();
    let r = i.getBubbleIdByToolCallId(e);
    if (!r && (await this.handleToolCallStarted(n, e, true), r = i.getBubbleIdByToolCallId(e), !r)) {
      return;
    }
    const s = i.getBubbleData(r);
    if (!s) {
      return;
    }
    this.flushBufferedOutput(e);
    this.cleanupBufferedOutput(e);
    const a = t.args?.command ?? "";
    let l;
    if (t.result?.result?.case === "success" || t.result?.result?.case === "failure") {
      const u = t.result.result.value;
      const d = (u.stdout || "") + (u.stderr || "");
      const m = t.result.result.case === "success" && u.exitCode === 0;
      l = u.exitCode;
      const p = t.result.result.case === "success" ? t.result.result.value.shellId : undefined;
      const g = new rhe({
        output: d,
        exitCode: u.exitCode,
        rejected: false,
        backgroundShellId: p
      });
      if (s.additionalData?.status !== "cancelled") {
        i.setBubbleData(r, {
          additionalData: {
            status: m ? "success" : "error"
          }
        });
      }
      i.handleToolResult(new VR({
        tool: an.RUN_TERMINAL_COMMAND_V2,
        toolCallId: e,
        result: {
          case: "runTerminalCommandV2Result",
          value: g
        }
      }), e, true);
    } else if (t.result?.result?.case === "spawnError") {
      const u = t.result.result.value;
      i.setBubbleData(r, {
        additionalData: {
          status: "error"
        }
      });
      i.handleToolResult(new VR({
        tool: an.RUN_TERMINAL_COMMAND_V2,
        toolCallId: e,
        error: {
          clientVisibleErrorMessage: "Command failed to execute",
          modelVisibleErrorMessage: `Command failed: ${u.error}`,
          actualErrorMessageOnlySendFromClientToServerNeverTheOtherWayAroundBecauseThatMayBeASecurityRisk: u.error
        }
      }), e, true);
    } else if (t.result?.result?.case === "timeout") {
      i.setBubbleData(r, {
        additionalData: {
          status: "error"
        }
      });
      i.handleToolResult(new VR({
        tool: an.RUN_TERMINAL_COMMAND_V2,
        toolCallId: e,
        error: {
          clientVisibleErrorMessage: "Command timed out",
          modelVisibleErrorMessage: "Command execution timed out",
          actualErrorMessageOnlySendFromClientToServerNeverTheOtherWayAroundBecauseThatMayBeASecurityRisk: "Command execution timed out"
        }
      }), e, true);
    } else if (t.result?.result?.case === "rejected") {
      const u = t.result.result.value;
      i.setBubbleData(r, {
        additionalData: {
          status: "rejected"
        }
      });
      i.handleToolResult(new VR({
        tool: an.RUN_TERMINAL_COMMAND_V2,
        toolCallId: e,
        result: {
          case: "runTerminalCommandV2Result",
          value: new rhe({
            output: `Rejected: ${u.reason}`,
            exitCode: 1,
            rejected: true
          })
        }
      }), e, true);
    } else if (t.result?.result?.case === "permissionDenied") {
      const d = t.result.result.value.error || "Permission denied";
      const m = `Permission denied: ${d}`;
      i.setBubbleData(r, {
        additionalData: {
          status: "error"
        }
      });
      i.handleToolResult(new VR({
        tool: an.RUN_TERMINAL_COMMAND_V2,
        toolCallId: e,
        error: {
          clientVisibleErrorMessage: m,
          modelVisibleErrorMessage: m,
          actualErrorMessageOnlySendFromClientToServerNeverTheOtherWayAroundBecauseThatMayBeASecurityRisk: d
        }
      }), e, true);
    }
    try {
      const u = this.context.composerDataHandle.data.composerId;
      this.context.instantiationService.invokeFunction(m => m.get(Yz)).onShellToolCallCompleted(e, a, l, u).catch(m => {
        console.error("[ShellToolCallHandler] Error notifying AI code tracking service:", m);
      });
    } catch (u) {
      console.error("[ShellToolCallHandler] Error notifying AI code tracking service:", u);
    }
  }
};

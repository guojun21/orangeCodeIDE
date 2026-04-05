"use strict";

// Module: out-build/vs/workbench/contrib/composer/browser/mockComposerStreamController.js
// Offset: 30433299 (bundle byte offset)
// Size: 5942 bytes
Xkt();
_s();
Bc();
cv();
Vg();
mD();
qp();
qSf = class {
  constructor(n) {
    this.pendingMocks = new Map();
    this.activeStreams = new Map();
    this.logService = n;
  }
  createMock(n) {
    const e = Wr();
    const t = {
      mockId: e,
      composerId: n,
      events: new GEe(undefined)
    };
    this.pendingMocks.set(e, t);
    this.logService.info(`[mock composer] created mock ${e} (composer=${n})`);
    return e;
  }
  pushEvent(n, e) {
    const t = this.pendingMocks.get(n);
    if (t === undefined) {
      throw new Error(`Mock composer stream ${n} not found`);
    }
    const i = this.createMockEvent(t, e);
    t.events.push(i);
    this.logService.info(`[mock composer] pushed event for mock ${n} (kind=${e.kind})`);
  }
  completeMock(n) {
    const e = this.pendingMocks.get(n);
    if (e === undefined) {
      this.logService.warn(`[mock composer] completeMock called for unknown mock ${n}`);
      return;
    }
    e.events.end();
    this.logService.info(`[mock composer] completed mock ${n}`);
  }
  disposeMock(n) {
    const e = this.pendingMocks.get(n);
    if (e === undefined) {
      this.logService.warn(`[mock composer] disposeMock called for unknown mock ${n}`);
      return;
    }
    const t = e.generationUuid;
    if (t !== undefined) {
      this.logService.info(`[mock composer] disposing active mock ${n} (generation=${t})`);
      this.cleanupGeneration(t, new vf());
    } else {
      this.logService.info(`[mock composer] disposing pending mock ${n}`);
      this.pendingMocks.delete(n);
      e.events.error(new vf());
    }
  }
  abortMock(n) {
    this.disposeMock(n);
  }
  getMockStream(n, e, t, i) {
    const r = this.pickPendingMock(n);
    if (r === undefined) {
      return;
    }
    r.generationUuid = e;
    const s = () => {
      this.logService.info(`[mock composer] abort signaled for mock ${r.mockId} (generation=${e})`);
      this.disposeMock(r.mockId);
    };
    i.signal.addEventListener("abort", s);
    const o = {
      mock: r,
      pushable: t,
      abortController: i,
      abortListener: s
    };
    this.activeStreams.set(e, o);
    this.logService.info(`[mock composer] attached mock ${r.mockId} to generation ${e}`);
    return {
      stream: this.createStreamFromEvents(r, e)
    };
  }
  getActiveStream(n) {
    const e = this.activeStreams.get(n);
    if (e !== undefined) {
      return {
        mockId: e.mock.mockId
      };
    }
  }
  pickPendingMock(n) {
    for (const e of this.pendingMocks.values()) {
      if (e.generationUuid === undefined && e.composerId === n) {
        return e;
      }
    }
    for (const e of this.pendingMocks.values()) {
      if (e.generationUuid === undefined) {
        return e;
      }
    }
  }
  createStreamFromEvents(n, e) {
    const t = this;
    return async function* () {
      try {
        for await (const i of n.events) {
          yield t.createChunkForEvent(i, e);
        }
        yield t.createFinalChunk(e);
      } catch (i) {
        const r = i instanceof Error ? i : new Error(String(i));
        t.logService.error(`[mock composer] stream error for generation ${e}`, r);
        t.cleanupGeneration(e, r);
        throw r;
      } finally {
        t.cleanupGeneration(e, undefined);
      }
    }();
  }
  createMockEvent(n, e) {
    if (e.kind !== "tool-call") {
      return {
        step: e
      };
    }
    try {
      const t = nhe.fromJsonString(JSON.stringify(e.toolCall));
      return {
        step: e,
        parsedToolCall: t
      };
    } catch (t) {
      throw new Error(`Failed to parse tool call event: ${t instanceof Error ? t.message : String(t)}`);
    }
  }
  createChunkForEvent(n, e) {
    if (n.step.kind === "tool-call") {
      const i = n.parsedToolCall ?? nhe.fromJsonString(JSON.stringify(n.step.toolCall));
      return new J9e({
        response: {
          case: "clientSideToolV2Call",
          value: i
        },
        eventId: e
      });
    }
    if (n.step.kind === "agent-tool") {
      throw new Error("agent-tool steps should not be processed by MockComposerStreamController");
    }
    if (n.step.kind === "error") {
      throw this.createConnectErrorFromStep(n.step);
    }
    const t = new A8n();
    if (n.step.kind === "text") {
      t.text = n.step.value;
    } else if (n.step.kind === "thinking" || n.step.kind === "thinking-complete") {
      t.thinking = new n9t({
        text: n.step.value,
        isLastThinkingChunk: n.step.kind === "thinking-complete"
      });
    }
    if (n.step.metadata?.serverBubbleId !== undefined) {
      t.serverBubbleId = n.step.metadata.serverBubbleId;
    }
    if (n.step.metadata?.usageUuid !== undefined) {
      t.usageUuid = n.step.metadata.usageUuid;
    }
    return new J9e({
      response: {
        case: "streamUnifiedChatResponse",
        value: t
      },
      eventId: e
    });
  }
  mapErrorCode(n) {
    switch (n) {
      case "RATE_LIMITED_CHANGEABLE":
        return yc.RATE_LIMITED_CHANGEABLE;
      case "FREE_USER_RATE_LIMIT_EXCEEDED":
        return yc.FREE_USER_RATE_LIMIT_EXCEEDED;
      case "PRO_USER_RATE_LIMIT_EXCEEDED":
        return yc.PRO_USER_RATE_LIMIT_EXCEEDED;
      case "RESOURCE_EXHAUSTED":
        return yc.RESOURCE_EXHAUSTED;
      case "TIMEOUT":
        return yc.TIMEOUT;
      case "CUSTOM":
        return yc.CUSTOM;
      default:
        {
          const e = n;
          throw new Error(`Unknown error code: ${e}`);
        }
    }
  }
  createConnectErrorFromStep(n) {
    const e = this.mapErrorCode(n.errorCode);
    const t = new cN({
      error: e,
      details: {
        title: n.title ?? "Error",
        detail: n.detail ?? "An error occurred",
        isRetryable: n.isRetryable ?? true
      }
    });
    const i = new fA(n.detail ?? "Mock error", j0.ResourceExhausted);
    i.details.push({
      type: cN.typeName,
      value: t.toBinary(),
      debug: t.toJson()
    });
    this.logService.info(`[mock composer] throwing mock error (code=${n.errorCode})`);
    return i;
  }
  createFinalChunk(n) {
    return new J9e({
      response: {
        case: "streamUnifiedChatResponse",
        value: new A8n({
          text: ""
        })
      },
      eventId: n
    });
  }
  cleanupGeneration(n, e) {
    const t = this.activeStreams.get(n);
    if (t === undefined) {
      return;
    }
    this.activeStreams.delete(n);
    t.abortController.signal.removeEventListener("abort", t.abortListener);
    if (e !== undefined && !(e instanceof vf)) {
      t.pushable.error(e);
      t.mock.events.error(e);
    } else {
      t.pushable.end();
      t.mock.events.end();
    }
    const i = t.mock;
    i.generationUuid = undefined;
    this.pendingMocks.delete(i.mockId);
    this.logService.info(`[mock composer] cleaned up mock ${i.mockId} (generation=${n})`);
  }
};

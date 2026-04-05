"use strict";

// Module: out-build/external/sentry/core/tracing/sentryNonRecordingSpan.js
// Offset: 46083 (bundle byte offset)
// Size: 2715 bytes
tze();
iW();
bbe = class {
    constructor(n = {}) {
        this._traceId = n.traceId || rde();
        this._spanId = n.spanId || sde();
    }
    spanContext() {
        return {
            spanId: this._spanId,
            traceId: this._traceId,
            traceFlags: syc
        };
    }
    end(n) {}
    setAttribute(n, e) {
        return this;
    }
    setAttributes(n) {
        return this;
    }
    setStatus(n) {
        return this;
    }
    updateName(n) {
        return this;
    }
    isRecording() {
        return false;
    }
    addEvent(n, e, t) {
        return this;
    }
    addLink(n) {
        return this;
    }
    addLinks(n) {
        return this;
    }
    recordException(n, e) {}
};

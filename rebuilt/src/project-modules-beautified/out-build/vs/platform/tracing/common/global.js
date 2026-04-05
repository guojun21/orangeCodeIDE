"use strict";

// Module: out-build/vs/platform/tracing/common/global.js
// Offset: 562171 (bundle byte offset)
// Size: 890 bytes
C4t();
M4();
rah = "https://80ec2259ebfad12d8aa2afe6eb4f6dd5@metrics.cursor.sh/4508016051945472";
sah = "https://0a7b82d23ca5f4635708bc8e9957e4bd@o4504648565915648.ingest.us.sentry.io/4509635758522369";
if (globalThis._CURSOR_SENTRY === undefined) {
  globalThis._CURSOR_SENTRY = {
    buffer: [],
    enabled: true,
    allowCrashReportsWhenDisabled: false,
    loggerSampleRate: 1,
    sentry: undefined,
    tracesSampleRate: Ube.developmentTooling ? 1 : 0.01,
    trace2SampleRate: Ube.developmentTooling ? 1 : 0.01,
    profilesSampleRate: 0,
    jsonStringifySampleRate: 0,
    replaysSessionSampleRate: 0,
    isInternalUser: false,
    transport: LiA()
  };
}

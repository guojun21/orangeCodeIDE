"use strict";

// Module: out-build/proto/aiserver/v1/cpp_connectweb.js
// Offset: 27502943 (bundle byte offset)
// Size: 493 bytes
H6();
Ka();
Lvi = {
  typeName: "aiserver.v1.CppService",
  methods: {
    markCppForEval: {
      name: "MarkCppForEval",
      I: b2h,
      O: A2h,
      kind: vn.Unary
    },
    streamHoldCpp: {
      name: "StreamHoldCpp",
      I: d2h,
      O: h2h,
      kind: vn.ServerStreaming
    },
    availableModels: {
      name: "AvailableModels",
      I: l2h,
      O: u2h,
      kind: vn.Unary
    },
    recordCppFate: {
      name: "RecordCppFate",
      I: T4c,
      O: c2h,
      kind: vn.Unary
    },
    addTabRequestToEval: {
      name: "AddTabRequestToEval",
      I: g2h,
      O: f2h,
      kind: vn.Unary
    }
  }
};

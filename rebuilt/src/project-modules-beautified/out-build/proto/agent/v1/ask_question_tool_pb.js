"use strict";

// Module: out-build/proto/agent/v1/ask_question_tool_pb.js
// Offset: 3162801 (bundle byte offset)
// Size: 5645 bytes
Ka();
n2c = class eJi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.AskQuestionToolCall";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "args",
      kind: "message",
      T: Q5t
    }, {
      no: 2,
      name: "result",
      kind: "message",
      T: cke
    }]);
  }
  static fromBinary(e, t) {
    return new eJi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new eJi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new eJi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(eJi, e, t);
  }
};
Q5t = class tJi extends ie {
  constructor(e) {
    super();
    this.title = "";
    this.questions = [];
    this.runAsync = false;
    this.asyncOriginalToolCallId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.AskQuestionArgs";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "title",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "questions",
      kind: "message",
      T: i2c,
      repeated: true
    }, {
      no: 5,
      name: "run_async",
      kind: "scalar",
      T: 8
    }, {
      no: 6,
      name: "async_original_tool_call_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new tJi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new tJi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new tJi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(tJi, e, t);
  }
};
i2c = class nJi extends ie {
  constructor(e) {
    super();
    this.id = "";
    this.prompt = "";
    this.options = [];
    this.allowMultiple = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.AskQuestionArgs.Question";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "prompt",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "options",
      kind: "message",
      T: r2c,
      repeated: true
    }, {
      no: 4,
      name: "allow_multiple",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new nJi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new nJi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new nJi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(nJi, e, t);
  }
};
r2c = class iJi extends ie {
  constructor(e) {
    super();
    this.id = "";
    this.label = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.AskQuestionArgs.Option";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "label",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new iJi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new iJi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new iJi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(iJi, e, t);
  }
};
s2c = class rJi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.AskQuestionAsync";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new rJi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new rJi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new rJi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(rJi, e, t);
  }
};
cke = class sJi extends ie {
  constructor(e) {
    super();
    this.result = {
      case: undefined
    };
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.AskQuestionResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "success",
      kind: "message",
      T: d8n,
      oneof: "result"
    }, {
      no: 2,
      name: "error",
      kind: "message",
      T: wBh,
      oneof: "result"
    }, {
      no: 3,
      name: "rejected",
      kind: "message",
      T: f6o,
      oneof: "result"
    }, {
      no: 4,
      name: "async",
      kind: "message",
      T: s2c,
      oneof: "result"
    }]);
  }
  static fromBinary(e, t) {
    return new sJi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new sJi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new sJi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(sJi, e, t);
  }
};
d8n = class oJi extends ie {
  constructor(e) {
    super();
    this.answers = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.AskQuestionSuccess";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "answers",
      kind: "message",
      T: g6o,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new oJi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new oJi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new oJi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(oJi, e, t);
  }
};
g6o = class aJi extends ie {
  constructor(e) {
    super();
    this.questionId = "";
    this.selectedOptionIds = [];
    this.freeformText = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.AskQuestionSuccess.Answer";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "question_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "selected_option_ids",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 3,
      name: "freeform_text",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new aJi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new aJi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new aJi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(aJi, e, t);
  }
};
wBh = class cJi extends ie {
  constructor(e) {
    super();
    this.errorMessage = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.AskQuestionError";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "error_message",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new cJi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new cJi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new cJi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(cJi, e, t);
  }
};
f6o = class lJi extends ie {
  constructor(e) {
    super();
    this.reason = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.AskQuestionRejected";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "reason",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new lJi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new lJi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new lJi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(lJi, e, t);
  }
};

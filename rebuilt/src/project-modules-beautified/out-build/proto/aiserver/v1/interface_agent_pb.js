"use strict";

// Module: out-build/proto/aiserver/v1/interface_agent_pb.js
// Offset: 3716691 (bundle byte offset)
// Size: 5330 bytes
Ka();
Z4c = class Dir extends ie {
  constructor(e) {
    super();
    this.interfaceRelativeWorkspacePath = "";
    this.interfaceLines = [];
    this.testLines = [];
    this.implementationLines = [];
    this.language = "";
    this.testingFramework = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.InterfaceAgentClientState";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 3,
      name: "interface_relative_workspace_path",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "interface_lines",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 5,
      name: "test_relative_workspace_path",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 10,
      name: "test_lines",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 6,
      name: "implementation_relative_workspace_path",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 7,
      name: "implementation_lines",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 8,
      name: "language",
      kind: "scalar",
      T: 9
    }, {
      no: 9,
      name: "testing_framework",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Dir().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Dir().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Dir().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Dir, e, t);
  }
};
X4c = class Bir extends ie {
  constructor(e) {
    super();
    this.validateConfiguration = eJ.UNSPECIFIED;
    this.stubNewFunction = eJ.UNSPECIFIED;
    this.verifySpec = eJ.UNSPECIFIED;
    this.writeTestPlan = eJ.UNSPECIFIED;
    this.writeTests = eJ.UNSPECIFIED;
    this.writeImplementation = eJ.UNSPECIFIED;
    this.implementNewFunction = eJ.UNSPECIFIED;
    this.runTests = eJ.UNSPECIFIED;
    this.validateConfigurationMessage = "";
    this.stubNewFunctionMessage = "";
    this.verifySpecMessage = "";
    this.writeTestPlanMessage = "";
    this.writeTestsMessage = "";
    this.writeImplementationMessage = "";
    this.implementNewFunctionMessage = "";
    this.runTestsMessage = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.InterfaceAgentStatus";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "validate_configuration",
      kind: "enum",
      T: v.getEnumType(eJ)
    }, {
      no: 2,
      name: "stub_new_function",
      kind: "enum",
      T: v.getEnumType(eJ)
    }, {
      no: 3,
      name: "verify_spec",
      kind: "enum",
      T: v.getEnumType(eJ)
    }, {
      no: 15,
      name: "write_test_plan",
      kind: "enum",
      T: v.getEnumType(eJ)
    }, {
      no: 4,
      name: "write_tests",
      kind: "enum",
      T: v.getEnumType(eJ)
    }, {
      no: 5,
      name: "write_implementation",
      kind: "enum",
      T: v.getEnumType(eJ)
    }, {
      no: 6,
      name: "implement_new_function",
      kind: "enum",
      T: v.getEnumType(eJ)
    }, {
      no: 7,
      name: "run_tests",
      kind: "enum",
      T: v.getEnumType(eJ)
    }, {
      no: 8,
      name: "validate_configuration_message",
      kind: "scalar",
      T: 9
    }, {
      no: 9,
      name: "stub_new_function_message",
      kind: "scalar",
      T: 9
    }, {
      no: 10,
      name: "verify_spec_message",
      kind: "scalar",
      T: 9
    }, {
      no: 16,
      name: "write_test_plan_message",
      kind: "scalar",
      T: 9
    }, {
      no: 11,
      name: "write_tests_message",
      kind: "scalar",
      T: 9
    }, {
      no: 12,
      name: "write_implementation_message",
      kind: "scalar",
      T: 9
    }, {
      no: 13,
      name: "implement_new_function_message",
      kind: "scalar",
      T: 9
    }, {
      no: 14,
      name: "run_tests_message",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Bir().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Bir().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Bir().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Bir, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.WAITING = 1] = "WAITING";
  n[n.RUNNING = 2] = "RUNNING";
  n[n.SUCCESS = 3] = "SUCCESS";
  n[n.FAILURE = 4] = "FAILURE";
})(eJ ||= {});
v.util.setEnumType(eJ, "aiserver.v1.InterfaceAgentStatus.Status", [{
  no: 0,
  name: "STATUS_UNSPECIFIED"
}, {
  no: 1,
  name: "STATUS_WAITING"
}, {
  no: 2,
  name: "STATUS_RUNNING"
}, {
  no: 3,
  name: "STATUS_SUCCESS"
}, {
  no: 4,
  name: "STATUS_FAILURE"
}]);

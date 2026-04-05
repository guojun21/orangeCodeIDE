// Module: out-build/proto/aiserver/v1/interface_agent_pb.js
// Offset: 3716691 (bundle byte offset)
// Size: 5330 bytes

Ka(), Z4c=class Dir extends ie{
  constructor(e){
    super(), this.interfaceRelativeWorkspacePath="", this.interfaceLines=[], this.testLines=[], this.implementationLines=[], this.language="", this.testingFramework="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.InterfaceAgentClientState"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:3,name:"interface_relative_workspace_path",kind:"scalar",T:9
    }, {
      no:4,name:"interface_lines",kind:"scalar",T:9,repeated:!0
    }, {
      no:5,name:"test_relative_workspace_path",kind:"scalar",T:9,opt:!0
    }, {
      no:10,name:"test_lines",kind:"scalar",T:9,repeated:!0
    }, {
      no:6,name:"implementation_relative_workspace_path",kind:"scalar",T:9,opt:!0
    }, {
      no:7,name:"implementation_lines",kind:"scalar",T:9,repeated:!0
    }, {
      no:8,name:"language",kind:"scalar",T:9
    }, {
      no:9,name:"testing_framework",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Dir().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Dir().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Dir().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Dir, e, t)
  }
}, X4c=class Bir extends ie{
  constructor(e){
    super(), this.validateConfiguration=eJ.UNSPECIFIED, this.stubNewFunction=eJ.UNSPECIFIED, this.verifySpec=eJ.UNSPECIFIED, this.writeTestPlan=eJ.UNSPECIFIED, this.writeTests=eJ.UNSPECIFIED, this.writeImplementation=eJ.UNSPECIFIED, this.implementNewFunction=eJ.UNSPECIFIED, this.runTests=eJ.UNSPECIFIED, this.validateConfigurationMessage="", this.stubNewFunctionMessage="", this.verifySpecMessage="", this.writeTestPlanMessage="", this.writeTestsMessage="", this.writeImplementationMessage="", this.implementNewFunctionMessage="", this.runTestsMessage="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.InterfaceAgentStatus"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"validate_configuration",kind:"enum",T:v.getEnumType(eJ)
    }, {
      no:2,name:"stub_new_function",kind:"enum",T:v.getEnumType(eJ)
    }, {
      no:3,name:"verify_spec",kind:"enum",T:v.getEnumType(eJ)
    }, {
      no:15,name:"write_test_plan",kind:"enum",T:v.getEnumType(eJ)
    }, {
      no:4,name:"write_tests",kind:"enum",T:v.getEnumType(eJ)
    }, {
      no:5,name:"write_implementation",kind:"enum",T:v.getEnumType(eJ)
    }, {
      no:6,name:"implement_new_function",kind:"enum",T:v.getEnumType(eJ)
    }, {
      no:7,name:"run_tests",kind:"enum",T:v.getEnumType(eJ)
    }, {
      no:8,name:"validate_configuration_message",kind:"scalar",T:9
    }, {
      no:9,name:"stub_new_function_message",kind:"scalar",T:9
    }, {
      no:10,name:"verify_spec_message",kind:"scalar",T:9
    }, {
      no:16,name:"write_test_plan_message",kind:"scalar",T:9
    }, {
      no:11,name:"write_tests_message",kind:"scalar",T:9
    }, {
      no:12,name:"write_implementation_message",kind:"scalar",T:9
    }, {
      no:13,name:"implement_new_function_message",kind:"scalar",T:9
    }, {
      no:14,name:"run_tests_message",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Bir().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Bir().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Bir().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Bir, e, t)
  }
}, (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.WAITING=1]="WAITING", n[n.RUNNING=2]="RUNNING", n[n.SUCCESS=3]="SUCCESS", n[n.FAILURE=4]="FAILURE"
})(eJ||(eJ={
  
})), v.util.setEnumType(eJ, "aiserver.v1.InterfaceAgentStatus.Status", [{
  no:0, name:"STATUS_UNSPECIFIED"
}, {
  no:1, name:"STATUS_WAITING"
}, {
  no:2, name:"STATUS_RUNNING"
}, {
  no:3, name:"STATUS_SUCCESS"
}, {
  no:4, name:"STATUS_FAILURE"
}
])
}
}), e6n, h9t, eOc, VOh, KOh, YOh, ZOh, XOh, e3h, tOc, nOc, t3h, n3h, i3h, r3h, s3h, o3h, a3h, c3h, l3h, u3h, d3h, h3h, m3h, p3h, g3h, f3h, b3h, v3h, A3h, y3h, w3h, _3h, C3h, S3h, t6n, k3h, iOc, E3h, rOc, sOc, oOc, x3h, n6n, aOc, T3h, I3h, D3h, B3h, R3h, P3h, cOc, L3h, N3h, M3h, F3h, O3h, U3h, $3h, q3h, H3h, J3h, G3h, W3h, Q3h, j3h, lOc, tYe, uOc, z3h, V3h, K3h, Y3h, Z3h, X3h, i6n, dOc, e5h, t5h, n5h, i5h, r5h, s5h, o5h, a5h, c5h, r6n, l5h, u5h, d5h, h5h, m5h, p5h, hOc, g5h, f5h, b5h, v5h, A5h, y5h, w5h, _5h, LgA, C5h, S5h, k5h, mOc, pOc, E5h, x5h, T5h, I5h, D5h, B5h, Qte, R5h, P5h, L5h, N5h, M5h, F5h, O5h, U5h, $5h, gOc, q5h, H5h, J5h, G5h, W5h, fOc, bOc, vOc, Q5h, j5h, z5h, V5h, K5h, Y5h, Z5h, X5h, e9h, t9h, n9h, i9h, r9h, AOc, s9h, o9h, a9h, yOc, s6n, c9h, l9h, u9h, d9h, h9h, o6n, m9t, m9h, p9h, g9h, f9h, b9h, v9h, A9h, y9h, w9h, _9h, C9h, S9h, k9h, E9h, x9h, wOc, T9h, _Oc, I9h, D9h, B9h, R9h, P9h, L9h, N9h, M9h, F9h, O9h, COc, U9h, HRe, nUo, $9h, q9h, nYe, H9h, J9h, G9h, W9h, Q9h, j9h, z9h, SOc, V9h, a6n, K9h, Y9h, Z9h, X9h, e8h, kOc, c6n, t8h, n8h, i8h, r8h, s8h, p9t, o8h, EOc, a8h, c8h, l8h, u8h, d8h, h8h, xOc, m8h, p8h, g8h, TOc, f8h, b8h, v8h, A8h, y8h, w8h, l6n, _8h, C8h, S8h, k8h, E8h, x8h, IOc, T8h, I8h, D8h, B8h, R8h, P8h, L8h, N8h, M8h, F8h, iYe, O8h, U8h, $8h, q8h, H8h, J8h, iUo, G8h, W8h, Q8h, j8h, NgA, z8h, V8h, K8h, DOc, Y8h, Z8h, X8h, e6h, t6h, BOc, n6h, ROc, i6h, r6h, s6h, o6h, a6h, u6n, d6n, c6h, l6h, u6h, MgA, d6h, JRe, h6h, m6h, p6h, g6h, f6h, b6h, v6h, A6h, y6h, w6h, _6h, C6h, S6h, POc, k6h, E6h, x6h, T6h, I6h, D6h, B6h, R6h, P6h, LOc, L6h, N6h, M6h, NOc, F6h, MOc, O6h, U6h, $6h, q6h, H6h, J6h, G6h, W6h, Q6h, j6h, z6h, V6h, K6h, Y6h, Z6h, X6h, eUh, tUh, nUh, iUh, rUh, sUh, oUh, aUh, cUh, FOc, lUh, uUh, dUh, hUh, mUh, pUh, gUh, h6n, fUh, bUh, vUh, AUh, RW, yUh, wUh, _Uh, CUh, SUh, kUh, EUh, xUh, TUh, IUh, DUh, BUh, RUh, PUh, LUh, NUh, MUh, FUh, OUh, m6n, UUh, FgA, $Uh, qUh, HUh, OOc, JUh, GUh, WUh, QUh, jUh, zUh, VUh, KUh, YUh, ZUh, XUh, e$h, t$h, rUo, UOc, $Oc, n$h, i$h, r$h, s$h, o$h, a$h, c$h, l$h, u$h, d$h, h$h, m$h, p$h, g$h, f$h, qOc, b$h, HOc, v$h, A$h, y$h, OgA, UgA, JOc, GOc, sUo, w$h, _$h, C$h, WOc, S$h, k$h, E$h, x$h, QOc, jOc, T$h, I$h, zOc, D$h, B$h, R$h, P$h, L$h, N$h, M$h, F$h, O$h, U$h, $$h, q$h, $gA, qgA, H$h, J$h, G$h, W$h, Q$h, j$h, z$h, V$h, K$h, HgA, VOc, JgA, Y$h, Z$h, X$h, dvt, p6n, KOc, iM=
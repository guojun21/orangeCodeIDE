"use strict";

// Module: out-build/proto/agent/v1/todo_tool_pb.js
// Offset: 3111195 (bundle byte offset)
// Size: 6617 bytes
Ka();
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.PENDING = 1] = "PENDING";
  n[n.IN_PROGRESS = 2] = "IN_PROGRESS";
  n[n.COMPLETED = 3] = "COMPLETED";
  n[n.CANCELLED = 4] = "CANCELLED";
})(KY ||= {});
v.util.setEnumType(KY, "agent.v1.TodoStatus", [{
  no: 0,
  name: "TODO_STATUS_UNSPECIFIED"
}, {
  no: 1,
  name: "TODO_STATUS_PENDING"
}, {
  no: 2,
  name: "TODO_STATUS_IN_PROGRESS"
}, {
  no: 3,
  name: "TODO_STATUS_COMPLETED"
}, {
  no: 4,
  name: "TODO_STATUS_CANCELLED"
}]);
U9e = class A7i extends ie {
  constructor(e) {
    super();
    this.id = "";
    this.content = "";
    this.status = KY.UNSPECIFIED;
    this.createdAt = Eo.zero;
    this.updatedAt = Eo.zero;
    this.dependencies = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.TodoItem";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "content",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "status",
      kind: "enum",
      T: v.getEnumType(KY)
    }, {
      no: 4,
      name: "created_at",
      kind: "scalar",
      T: 3
    }, {
      no: 5,
      name: "updated_at",
      kind: "scalar",
      T: 3
    }, {
      no: 6,
      name: "dependencies",
      kind: "scalar",
      T: 9,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new A7i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new A7i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new A7i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(A7i, e, t);
  }
};
IMc = class y7i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.UpdateTodosToolCall";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "args",
      kind: "message",
      T: DMc
    }, {
      no: 2,
      name: "result",
      kind: "message",
      T: BMc
    }]);
  }
  static fromBinary(e, t) {
    return new y7i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new y7i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new y7i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(y7i, e, t);
  }
};
DMc = class w7i extends ie {
  constructor(e) {
    super();
    this.todos = [];
    this.merge = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.UpdateTodosArgs";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "todos",
      kind: "message",
      T: U9e,
      repeated: true
    }, {
      no: 2,
      name: "merge",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new w7i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new w7i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new w7i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(w7i, e, t);
  }
};
BMc = class _7i extends ie {
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
    this.typeName = "agent.v1.UpdateTodosResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "success",
      kind: "message",
      T: RMc,
      oneof: "result"
    }, {
      no: 2,
      name: "error",
      kind: "message",
      T: SDh,
      oneof: "result"
    }]);
  }
  static fromBinary(e, t) {
    return new _7i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new _7i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new _7i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(_7i, e, t);
  }
};
RMc = class C7i extends ie {
  constructor(e) {
    super();
    this.todos = [];
    this.totalCount = 0;
    this.wasMerge = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.UpdateTodosSuccess";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "todos",
      kind: "message",
      T: U9e,
      repeated: true
    }, {
      no: 2,
      name: "total_count",
      kind: "scalar",
      T: 5
    }, {
      no: 3,
      name: "was_merge",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new C7i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new C7i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new C7i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(C7i, e, t);
  }
};
SDh = class S7i extends ie {
  constructor(e) {
    super();
    this.error = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.UpdateTodosError";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "error",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new S7i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new S7i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new S7i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(S7i, e, t);
  }
};
kDh = class k7i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.ReadTodosToolCall";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "args",
      kind: "message",
      T: EDh
    }, {
      no: 2,
      name: "result",
      kind: "message",
      T: xDh
    }]);
  }
  static fromBinary(e, t) {
    return new k7i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new k7i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new k7i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(k7i, e, t);
  }
};
EDh = class E7i extends ie {
  constructor(e) {
    super();
    this.statusFilter = [];
    this.idFilter = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.ReadTodosArgs";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "status_filter",
      kind: "enum",
      T: v.getEnumType(KY),
      repeated: true
    }, {
      no: 2,
      name: "id_filter",
      kind: "scalar",
      T: 9,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new E7i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new E7i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new E7i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(E7i, e, t);
  }
};
xDh = class x7i extends ie {
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
    this.typeName = "agent.v1.ReadTodosResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "success",
      kind: "message",
      T: TDh,
      oneof: "result"
    }, {
      no: 2,
      name: "error",
      kind: "message",
      T: IDh,
      oneof: "result"
    }]);
  }
  static fromBinary(e, t) {
    return new x7i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new x7i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new x7i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(x7i, e, t);
  }
};
TDh = class T7i extends ie {
  constructor(e) {
    super();
    this.todos = [];
    this.totalCount = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.ReadTodosSuccess";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "todos",
      kind: "message",
      T: U9e,
      repeated: true
    }, {
      no: 2,
      name: "total_count",
      kind: "scalar",
      T: 5
    }]);
  }
  static fromBinary(e, t) {
    return new T7i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new T7i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new T7i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(T7i, e, t);
  }
};
IDh = class I7i extends ie {
  constructor(e) {
    super();
    this.error = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.ReadTodosError";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "error",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new I7i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new I7i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new I7i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(I7i, e, t);
  }
};

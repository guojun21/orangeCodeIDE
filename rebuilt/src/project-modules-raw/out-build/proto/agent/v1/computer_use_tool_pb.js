// Module: out-build/proto/agent/v1/computer_use_tool_pb.js
// Offset: 2825594 (bundle byte offset)
// Size: 11175 bytes

Ka(), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.LEFT=1]="LEFT", n[n.RIGHT=2]="RIGHT", n[n.MIDDLE=3]="MIDDLE", n[n.BACK=4]="BACK", n[n.FORWARD=5]="FORWARD"
})(the||(the={
  
})), v.util.setEnumType(the, "agent.v1.MouseButton", [{
  no:0, name:"MOUSE_BUTTON_UNSPECIFIED"
}, {
  no:1, name:"MOUSE_BUTTON_LEFT"
}, {
  no:2, name:"MOUSE_BUTTON_RIGHT"
}, {
  no:3, name:"MOUSE_BUTTON_MIDDLE"
}, {
  no:4, name:"MOUSE_BUTTON_BACK"
}, {
  no:5, name:"MOUSE_BUTTON_FORWARD"
}
]), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.UP=1]="UP", n[n.DOWN=2]="DOWN", n[n.LEFT=3]="LEFT", n[n.RIGHT=4]="RIGHT"
})(M9e||(M9e={
  
})), v.util.setEnumType(M9e, "agent.v1.ScrollDirection", [{
  no:0, name:"SCROLL_DIRECTION_UNSPECIFIED"
}, {
  no:1, name:"SCROLL_DIRECTION_UP"
}, {
  no:2, name:"SCROLL_DIRECTION_DOWN"
}, {
  no:3, name:"SCROLL_DIRECTION_LEFT"
}, {
  no:4, name:"SCROLL_DIRECTION_RIGHT"
}
]), h5t=class c5i extends ie{
  constructor(e){
    super(), this.x=0, this.y=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.Coordinate"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"x",kind:"scalar",T:5
    }, {
      no:2,name:"y",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new c5i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new c5i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new c5i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(c5i, e, t)
  }
}, l8o=class l5i extends ie{
  constructor(e){
    super(), this.toolCallId="", this.actions=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ComputerUseArgs"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"tool_call_id",kind:"scalar",T:9
    }, {
      no:2,name:"actions",kind:"message",T:oPc,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new l5i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new l5i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new l5i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(l5i, e, t)
  }
}, oPc=class u5i extends ie{
  constructor(e){
    super(), this.action={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ComputerUseAction"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"mouse_move",kind:"message",T:cIh,oneof:"action"
    }, {
      no:2,name:"click",kind:"message",T:lIh,oneof:"action"
    }, {
      no:3,name:"mouse_down",kind:"message",T:uIh,oneof:"action"
    }, {
      no:4,name:"mouse_up",kind:"message",T:dIh,oneof:"action"
    }, {
      no:5,name:"drag",kind:"message",T:hIh,oneof:"action"
    }, {
      no:6,name:"scroll",kind:"message",T:mIh,oneof:"action"
    }, {
      no:7,name:"type",kind:"message",T:pIh,oneof:"action"
    }, {
      no:8,name:"key",kind:"message",T:gIh,oneof:"action"
    }, {
      no:9,name:"wait",kind:"message",T:fIh,oneof:"action"
    }, {
      no:10,name:"screenshot",kind:"message",T:bIh,oneof:"action"
    }, {
      no:11,name:"cursor_position",kind:"message",T:vIh,oneof:"action"
    }
    ])
  }
  static fromBinary(e, t){
    return new u5i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new u5i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new u5i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(u5i, e, t)
  }
}, cIh=class d5i extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.MouseMoveAction"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"coordinate",kind:"message",T:h5t
    }
    ])
  }
  static fromBinary(e, t){
    return new d5i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new d5i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new d5i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(d5i, e, t)
  }
}, lIh=class h5i extends ie{
  constructor(e){
    super(), this.button=the.UNSPECIFIED, this.count=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ClickAction"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"coordinate",kind:"message",T:h5t,opt:!0
    }, {
      no:2,name:"button",kind:"enum",T:v.getEnumType(the)
    }, {
      no:3,name:"count",kind:"scalar",T:5
    }, {
      no:4,name:"modifier_keys",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new h5i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new h5i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new h5i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(h5i, e, t)
  }
}, uIh=class m5i extends ie{
  constructor(e){
    super(), this.button=the.UNSPECIFIED, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.MouseDownAction"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"button",kind:"enum",T:v.getEnumType(the)
    }
    ])
  }
  static fromBinary(e, t){
    return new m5i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new m5i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new m5i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(m5i, e, t)
  }
}, dIh=class p5i extends ie{
  constructor(e){
    super(), this.button=the.UNSPECIFIED, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.MouseUpAction"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"button",kind:"enum",T:v.getEnumType(the)
    }
    ])
  }
  static fromBinary(e, t){
    return new p5i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new p5i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new p5i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(p5i, e, t)
  }
}, hIh=class g5i extends ie{
  constructor(e){
    super(), this.path=[], this.button=the.UNSPECIFIED, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.DragAction"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"path",kind:"message",T:h5t,repeated:!0
    }, {
      no:2,name:"button",kind:"enum",T:v.getEnumType(the)
    }
    ])
  }
  static fromBinary(e, t){
    return new g5i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new g5i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new g5i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(g5i, e, t)
  }
}, mIh=class f5i extends ie{
  constructor(e){
    super(), this.direction=M9e.UNSPECIFIED, this.amount=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ScrollAction"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"coordinate",kind:"message",T:h5t,opt:!0
    }, {
      no:2,name:"direction",kind:"enum",T:v.getEnumType(M9e)
    }, {
      no:3,name:"amount",kind:"scalar",T:5
    }, {
      no:4,name:"modifier_keys",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new f5i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new f5i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new f5i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(f5i, e, t)
  }
}, pIh=class b5i extends ie{
  constructor(e){
    super(), this.text="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.TypeAction"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"text",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new b5i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new b5i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new b5i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(b5i, e, t)
  }
}, gIh=class v5i extends ie{
  constructor(e){
    super(), this.key="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.KeyAction"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"key",kind:"scalar",T:9
    }, {
      no:2,name:"hold_duration_ms",kind:"scalar",T:5,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new v5i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new v5i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new v5i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(v5i, e, t)
  }
}, fIh=class A5i extends ie{
  constructor(e){
    super(), this.durationMs=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.WaitAction"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"duration_ms",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new A5i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new A5i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new A5i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(A5i, e, t)
  }
}, bIh=class y5i extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ScreenshotAction"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new y5i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new y5i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new y5i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(y5i, e, t)
  }
}, vIh=class w5i extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.CursorPositionAction"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new w5i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new w5i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new w5i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(w5i, e, t)
  }
}, d9n=class _5i extends ie{
  constructor(e){
    super(), this.result={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ComputerUseResult"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"message",T:aPc,oneof:"result"
    }, {
      no:2,name:"error",kind:"message",T:cPc,oneof:"result"
    }
    ])
  }
  static fromBinary(e, t){
    return new _5i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new _5i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new _5i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(_5i, e, t)
  }
}, aPc=class C5i extends ie{
  constructor(e){
    super(), this.actionCount=0, this.durationMs=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ComputerUseSuccess"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"action_count",kind:"scalar",T:5
    }, {
      no:2,name:"duration_ms",kind:"scalar",T:5
    }, {
      no:3,name:"screenshot",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"log",kind:"scalar",T:9,opt:!0
    }, {
      no:5,name:"screenshot_path",kind:"scalar",T:9,opt:!0
    }, {
      no:6,name:"cursor_position",kind:"message",T:h5t,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new C5i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new C5i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new C5i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(C5i, e, t)
  }
}, cPc=class S5i extends ie{
  constructor(e){
    super(), this.error="", this.actionCount=0, this.durationMs=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ComputerUseError"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"error",kind:"scalar",T:9
    }, {
      no:2,name:"action_count",kind:"scalar",T:5
    }, {
      no:3,name:"duration_ms",kind:"scalar",T:5
    }, {
      no:4,name:"log",kind:"scalar",T:9,opt:!0
    }, {
      no:5,name:"screenshot",kind:"scalar",T:9,opt:!0
    }, {
      no:6,name:"screenshot_path",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new S5i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new S5i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new S5i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(S5i, e, t)
  }
}, lPc=class k5i extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ComputerUseToolCall"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"args",kind:"message",T:l8o
    }, {
      no:2,name:"result",kind:"message",T:d9n
    }
    ])
  }
  static fromBinary(e, t){
    return new k5i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new k5i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new k5i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(k5i, e, t)
  }
}
}
}), m9n, u8o, AIh, uPc, dPc, yIh, wIh, _Ih=
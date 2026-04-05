"use strict";

// Module: out-build/proto/aiserver/v1/telemetry_pb.js
// Offset: 28360239 (bundle byte offset)
// Size: 25135 bytes
Ka();
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.CLICK = 1] = "CLICK";
  n[n.POINTER = 2] = "POINTER";
  n[n.TOUCH = 3] = "TOUCH";
  n[n.KEYDOWN = 4] = "KEYDOWN";
  n[n.KEYUP = 5] = "KEYUP";
  n[n.SCROLL = 6] = "SCROLL";
  n[n.LONG_ANIMATION_FRAME = 7] = "LONG_ANIMATION_FRAME";
  n[n.MOUSEDOWN = 8] = "MOUSEDOWN";
  n[n.MOUSEUP = 9] = "MOUSEUP";
})(Cyi ||= {});
v.util.setEnumType(Cyi, "aiserver.v1.PerformanceEventType", [{
  no: 0,
  name: "PERFORMANCE_EVENT_TYPE_UNSPECIFIED"
}, {
  no: 1,
  name: "PERFORMANCE_EVENT_TYPE_CLICK"
}, {
  no: 2,
  name: "PERFORMANCE_EVENT_TYPE_POINTER"
}, {
  no: 3,
  name: "PERFORMANCE_EVENT_TYPE_TOUCH"
}, {
  no: 4,
  name: "PERFORMANCE_EVENT_TYPE_KEYDOWN"
}, {
  no: 5,
  name: "PERFORMANCE_EVENT_TYPE_KEYUP"
}, {
  no: 6,
  name: "PERFORMANCE_EVENT_TYPE_SCROLL"
}, {
  no: 7,
  name: "PERFORMANCE_EVENT_TYPE_LONG_ANIMATION_FRAME"
}, {
  no: 8,
  name: "PERFORMANCE_EVENT_TYPE_MOUSEDOWN"
}, {
  no: 9,
  name: "PERFORMANCE_EVENT_TYPE_MOUSEUP"
}]);
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.WALL = 1] = "WALL";
  n[n.ALLOCATION = 2] = "ALLOCATION";
  n[n.CPU = 3] = "CPU";
})(FEe ||= {});
v.util.setEnumType(FEe, "aiserver.v1.ProfileKind", [{
  no: 0,
  name: "PROFILE_KIND_UNSPECIFIED"
}, {
  no: 1,
  name: "PROFILE_KIND_WALL"
}, {
  no: 2,
  name: "PROFILE_KIND_ALLOCATION"
}, {
  no: 3,
  name: "PROFILE_KIND_CPU"
}]);
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.CLICK = 1] = "CLICK";
  n[n.KEYPRESS = 2] = "KEYPRESS";
})(Ont ||= {});
v.util.setEnumType(Ont, "aiserver.v1.InteractionType", [{
  no: 0,
  name: "INTERACTION_TYPE_UNSPECIFIED"
}, {
  no: 1,
  name: "INTERACTION_TYPE_CLICK"
}, {
  no: 2,
  name: "INTERACTION_TYPE_KEYPRESS"
}]);
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.INTERNAL = 1] = "INTERNAL";
  n[n.SERVER = 2] = "SERVER";
  n[n.CLIENT = 3] = "CLIENT";
  n[n.PRODUCER = 4] = "PRODUCER";
  n[n.CONSUMER = 5] = "CONSUMER";
})(vAa ||= {});
v.util.setEnumType(vAa, "aiserver.v1.SpanKind", [{
  no: 0,
  name: "SPAN_KIND_UNSPECIFIED"
}, {
  no: 1,
  name: "SPAN_KIND_INTERNAL"
}, {
  no: 2,
  name: "SPAN_KIND_SERVER"
}, {
  no: 3,
  name: "SPAN_KIND_CLIENT"
}, {
  no: 4,
  name: "SPAN_KIND_PRODUCER"
}, {
  no: 5,
  name: "SPAN_KIND_CONSUMER"
}]);
inf = class Aws extends ie {
  constructor(e) {
    super();
    this.action = "";
    this.generationUuid = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ReportInlineActionRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "action",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "generation_uuid",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Aws().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Aws().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Aws().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Aws, e, t);
  }
};
rnf = class yws extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ReportInlineActionResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new yws().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new yws().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new yws().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(yws, e, t);
  }
};
Syi = class wws extends ie {
  constructor(e) {
    super();
    this.metrics = {};
    this.metricsList = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ReportMetricsRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "metrics",
      kind: "map",
      K: 9,
      V: {
        kind: "message",
        T: snf
      }
    }, {
      no: 2,
      name: "metrics_list",
      kind: "message",
      T: onf,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new wws().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new wws().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new wws().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(wws, e, t);
  }
};
snf = class _ws extends ie {
  constructor(e) {
    super();
    this.tags = {};
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ReportMetricsRequest.Metric";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "value",
      kind: "scalar",
      T: 1,
      opt: true
    }, {
      no: 2,
      name: "tags",
      kind: "map",
      K: 9,
      V: {
        kind: "scalar",
        T: 9
      }
    }]);
  }
  static fromBinary(e, t) {
    return new _ws().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new _ws().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new _ws().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(_ws, e, t);
  }
};
onf = class Cws extends ie {
  constructor(e) {
    super();
    this.name = "";
    this.tags = {};
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ReportMetricsRequest.NamedMetric";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "name",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "value",
      kind: "scalar",
      T: 1,
      opt: true
    }, {
      no: 3,
      name: "tags",
      kind: "map",
      K: 9,
      V: {
        kind: "scalar",
        T: 9
      }
    }]);
  }
  static fromBinary(e, t) {
    return new Cws().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Cws().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Cws().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Cws, e, t);
  }
};
kyi = class Sws extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ReportMetricsResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new Sws().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Sws().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Sws().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Sws, e, t);
  }
};
anf = class kws extends ie {
  constructor(e) {
    super();
    this.name = "";
    this.startTime = 0;
    this.duration = 0;
    this.executionStart = 0;
    this.forcedStyleAndLayoutDuration = 0;
    this.pauseDuration = 0;
    this.sourceUrl = "";
    this.sourceFunctionName = "";
    this.sourceCharPosition = 0;
    this.invokerType = "";
    this.windowAttribution = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ScriptTiming";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "name",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "start_time",
      kind: "scalar",
      T: 1
    }, {
      no: 3,
      name: "duration",
      kind: "scalar",
      T: 1
    }, {
      no: 4,
      name: "execution_start",
      kind: "scalar",
      T: 1
    }, {
      no: 5,
      name: "forced_style_and_layout_duration",
      kind: "scalar",
      T: 1
    }, {
      no: 6,
      name: "pause_duration",
      kind: "scalar",
      T: 1
    }, {
      no: 7,
      name: "source_url",
      kind: "scalar",
      T: 9
    }, {
      no: 8,
      name: "source_function_name",
      kind: "scalar",
      T: 9
    }, {
      no: 9,
      name: "source_char_position",
      kind: "scalar",
      T: 5
    }, {
      no: 10,
      name: "invoker",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 11,
      name: "invoker_type",
      kind: "scalar",
      T: 9
    }, {
      no: 12,
      name: "window_attribution",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new kws().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new kws().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new kws().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(kws, e, t);
  }
};
cnf = class Ews extends ie {
  constructor(e) {
    super();
    this.eventType = Cyi.UNSPECIFIED;
    this.performanceTimestamp = 0;
    this.scripts = [];
    this.metadata = {};
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.PerformanceEvent";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "event_type",
      kind: "enum",
      T: v.getEnumType(Cyi)
    }, {
      no: 2,
      name: "timestamp",
      kind: "message",
      T: $0
    }, {
      no: 3,
      name: "performance_timestamp",
      kind: "scalar",
      T: 1
    }, {
      no: 4,
      name: "duration",
      kind: "scalar",
      T: 1,
      opt: true
    }, {
      no: 5,
      name: "target_element",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 6,
      name: "target_class",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 7,
      name: "target_id",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 26,
      name: "target_aria_id",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 8,
      name: "client_x",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 9,
      name: "client_y",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 10,
      name: "key",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 11,
      name: "code",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 12,
      name: "ctrl_key",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 13,
      name: "alt_key",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 14,
      name: "shift_key",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 15,
      name: "meta_key",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 16,
      name: "scroll_x",
      kind: "scalar",
      T: 1,
      opt: true
    }, {
      no: 17,
      name: "scroll_y",
      kind: "scalar",
      T: 1,
      opt: true
    }, {
      no: 18,
      name: "scroll_delta_x",
      kind: "scalar",
      T: 1,
      opt: true
    }, {
      no: 19,
      name: "scroll_delta_y",
      kind: "scalar",
      T: 1,
      opt: true
    }, {
      no: 21,
      name: "render_start",
      kind: "scalar",
      T: 1,
      opt: true
    }, {
      no: 22,
      name: "style_and_layout_start",
      kind: "scalar",
      T: 1,
      opt: true
    }, {
      no: 23,
      name: "first_ui_event_timestamp",
      kind: "scalar",
      T: 1,
      opt: true
    }, {
      no: 24,
      name: "blocking_duration",
      kind: "scalar",
      T: 1,
      opt: true
    }, {
      no: 25,
      name: "scripts",
      kind: "message",
      T: anf,
      repeated: true
    }, {
      no: 20,
      name: "metadata",
      kind: "map",
      K: 9,
      V: {
        kind: "scalar",
        T: 9
      }
    }]);
  }
  static fromBinary(e, t) {
    return new Ews().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ews().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ews().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Ews, e, t);
  }
};
lnf = class xws extends ie {
  constructor(e) {
    super();
    this.additionalMetadata = {};
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SystemMetadata";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "timestamp",
      kind: "message",
      T: $0
    }, {
      no: 2,
      name: "memory_used_mb",
      kind: "scalar",
      T: 1,
      opt: true
    }, {
      no: 3,
      name: "memory_total_mb",
      kind: "scalar",
      T: 1,
      opt: true
    }, {
      no: 4,
      name: "cpu_usage_percent",
      kind: "scalar",
      T: 1,
      opt: true
    }, {
      no: 5,
      name: "active_tabs_count",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 6,
      name: "open_editors_count",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 7,
      name: "window_focused",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 8,
      name: "window_size",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 9,
      name: "additional_metadata",
      kind: "map",
      K: 9,
      V: {
        kind: "scalar",
        T: 9
      }
    }]);
  }
  static fromBinary(e, t) {
    return new xws().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new xws().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new xws().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(xws, e, t);
  }
};
unf = class Tws extends ie {
  constructor(e) {
    super();
    this.sessionId = "";
    this.events = [];
    this.clientVersion = "";
    this.clientCommit = "";
    this.platformTags = {};
    this.metrics = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SubmitPerformanceEventsRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "session_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "events",
      kind: "message",
      T: cnf,
      repeated: true
    }, {
      no: 3,
      name: "system_metadata",
      kind: "message",
      T: lnf,
      opt: true
    }, {
      no: 4,
      name: "client_version",
      kind: "scalar",
      T: 9
    }, {
      no: 5,
      name: "client_commit",
      kind: "scalar",
      T: 9
    }, {
      no: 6,
      name: "platform_tags",
      kind: "map",
      K: 9,
      V: {
        kind: "scalar",
        T: 9
      }
    }, {
      no: 7,
      name: "window_type",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 8,
      name: "metrics",
      kind: "message",
      T: pnf,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new Tws().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Tws().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Tws().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Tws, e, t);
  }
};
dnf = class Iws extends ie {
  constructor(e) {
    super();
    this.success = false;
    this.eventsProcessed = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SubmitPerformanceEventsResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "success",
      kind: "scalar",
      T: 8
    }, {
      no: 2,
      name: "error_message",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 3,
      name: "events_processed",
      kind: "scalar",
      T: 5
    }]);
  }
  static fromBinary(e, t) {
    return new Iws().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Iws().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Iws().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Iws, e, t);
  }
};
Dcu = class Dws extends ie {
  constructor(e) {
    super();
    this.profileData = new Uint8Array(0);
    this.profileConfigId = "";
    this.profileKind = FEe.UNSPECIFIED;
    this.tags = {};
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.CapturedProfile";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "timestamp",
      kind: "message",
      T: $0
    }, {
      no: 2,
      name: "duration",
      kind: "message",
      T: n5t
    }, {
      no: 3,
      name: "profile_data",
      kind: "scalar",
      T: 12
    }, {
      no: 4,
      name: "profile_config_id",
      kind: "scalar",
      T: 9
    }, {
      no: 5,
      name: "profile_kind",
      kind: "enum",
      T: v.getEnumType(FEe)
    }, {
      no: 6,
      name: "tags",
      kind: "map",
      K: 9,
      V: {
        kind: "scalar",
        T: 9
      }
    }]);
  }
  static fromBinary(e, t) {
    return new Dws().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Dws().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Dws().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Dws, e, t);
  }
};
Bcu = class Bws extends ie {
  constructor(e) {
    super();
    this.id = "";
    this.type = Ont.UNSPECIFIED;
    this.performanceStartTimestamp = 0;
    this.performanceEndTimestamp = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.Interaction";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "type",
      kind: "enum",
      T: v.getEnumType(Ont)
    }, {
      no: 3,
      name: "performance_start_timestamp",
      kind: "scalar",
      T: 1
    }, {
      no: 4,
      name: "performance_end_timestamp",
      kind: "scalar",
      T: 1
    }]);
  }
  static fromBinary(e, t) {
    return new Bws().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Bws().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Bws().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Bws, e, t);
  }
};
Rcu = class Rws extends ie {
  constructor(e) {
    super();
    this.traceData = new Uint8Array(0);
    this.tags = {};
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.CapturedWebProfile";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "timestamp",
      kind: "message",
      T: $0
    }, {
      no: 3,
      name: "trace_data",
      kind: "scalar",
      T: 12
    }, {
      no: 4,
      name: "tags",
      kind: "map",
      K: 9,
      V: {
        kind: "scalar",
        T: 9
      }
    }]);
  }
  static fromBinary(e, t) {
    return new Rws().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Rws().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Rws().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Rws, e, t);
  }
};
Pcu = class Pws extends ie {
  constructor(e) {
    super();
    this.profiles = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SubmitProfileRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "profiles",
      kind: "message",
      T: Dcu,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new Pws().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Pws().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Pws().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Pws, e, t);
  }
};
hnf = class Lws extends ie {
  constructor(e) {
    super();
    this.profileIds = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SubmitProfileResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "profile_ids",
      kind: "scalar",
      T: 9,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new Lws().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Lws().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Lws().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Lws, e, t);
  }
};
Lcu = class Nws extends ie {
  constructor(e) {
    super();
    this.interactions = [];
    this.sessionId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SubmitInteractionWindowRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "time_origin",
      kind: "message",
      T: $0
    }, {
      no: 2,
      name: "web_profile",
      kind: "message",
      T: Rcu
    }, {
      no: 3,
      name: "interactions",
      kind: "message",
      T: Bcu,
      repeated: true
    }, {
      no: 4,
      name: "session_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Nws().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Nws().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Nws().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Nws, e, t);
  }
};
mnf = class Mws extends ie {
  constructor(e) {
    super();
    this.success = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SubmitInteractionWindowResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "success",
      kind: "scalar",
      T: 8
    }, {
      no: 2,
      name: "error_message",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Mws().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Mws().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Mws().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Mws, e, t);
  }
};
pnf = class Fws extends ie {
  constructor(e) {
    super();
    this.name = "";
    this.value = 0;
    this.metadata = {};
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.PerformanceMetric";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "timestamp",
      kind: "message",
      T: $0
    }, {
      no: 2,
      name: "name",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "value",
      kind: "scalar",
      T: 1
    }, {
      no: 4,
      name: "unit",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 5,
      name: "metadata",
      kind: "map",
      K: 9,
      V: {
        kind: "scalar",
        T: 9
      }
    }]);
  }
  static fromBinary(e, t) {
    return new Fws().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Fws().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Fws().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Fws, e, t);
  }
};
Ncu = class Ows extends ie {
  constructor(e) {
    super();
    this.traceId = "";
    this.spanId = "";
    this.name = "";
    this.attributes = {};
    this.links = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.TraceSpan";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "trace_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "span_id",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "parent_span_id",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 4,
      name: "name",
      kind: "scalar",
      T: 9
    }, {
      no: 5,
      name: "start_time",
      kind: "message",
      T: $0
    }, {
      no: 6,
      name: "end_time",
      kind: "message",
      T: $0
    }, {
      no: 7,
      name: "attributes",
      kind: "map",
      K: 9,
      V: {
        kind: "scalar",
        T: 9
      }
    }, {
      no: 8,
      name: "error",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 9,
      name: "trace_state",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 10,
      name: "flags",
      kind: "scalar",
      T: 13,
      opt: true
    }, {
      no: 11,
      name: "kind",
      kind: "enum",
      T: v.getEnumType(vAa),
      opt: true
    }, {
      no: 12,
      name: "status",
      kind: "message",
      T: gnf,
      opt: true
    }, {
      no: 13,
      name: "links",
      kind: "message",
      T: fnf,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new Ows().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ows().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ows().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Ows, e, t);
  }
};
gnf = class Uws extends ie {
  constructor(e) {
    super();
    this.message = "";
    this.code = Eyi.UNSPECIFIED;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.Status";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "message",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "code",
      kind: "enum",
      T: v.getEnumType(Eyi)
    }]);
  }
  static fromBinary(e, t) {
    return new Uws().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Uws().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Uws().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Uws, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.OK = 1] = "OK";
  n[n.ERROR = 2] = "ERROR";
})(Eyi ||= {});
v.util.setEnumType(Eyi, "aiserver.v1.Status.StatusCode", [{
  no: 0,
  name: "STATUS_CODE_UNSPECIFIED"
}, {
  no: 1,
  name: "STATUS_CODE_OK"
}, {
  no: 2,
  name: "STATUS_CODE_ERROR"
}]);
fnf = class $ws extends ie {
  constructor(e) {
    super();
    this.traceId = "";
    this.spanId = "";
    this.attributes = {};
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.TraceLink";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "trace_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "span_id",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "trace_state",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 4,
      name: "attributes",
      kind: "map",
      K: 9,
      V: {
        kind: "scalar",
        T: 9
      }
    }, {
      no: 5,
      name: "flags",
      kind: "scalar",
      T: 13,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new $ws().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new $ws().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new $ws().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals($ws, e, t);
  }
};
Mcu = class qws extends ie {
  constructor(e) {
    super();
    this.spans = [];
    this.clientVersion = "";
    this.clientCommit = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SubmitSpansRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "spans",
      kind: "message",
      T: Ncu,
      repeated: true
    }, {
      no: 2,
      name: "client_version",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "client_commit",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new qws().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new qws().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new qws().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(qws, e, t);
  }
};
bnf = class Hws extends ie {
  constructor(e) {
    super();
    this.success = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SubmitSpansResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "success",
      kind: "scalar",
      T: 8
    }, {
      no: 2,
      name: "error_message",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Hws().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Hws().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Hws().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Hws, e, t);
  }
};
vnf = class Jws extends ie {
  constructor(e) {
    super();
    this.sessionId = "";
    this.events = [];
    this.clientVersion = "";
    this.clientCommit = "";
    this.platformTags = {};
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SubmitToolCallEventsRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "session_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "events",
      kind: "message",
      T: ynf,
      repeated: true
    }, {
      no: 3,
      name: "client_version",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "client_commit",
      kind: "scalar",
      T: 9
    }, {
      no: 5,
      name: "platform_tags",
      kind: "map",
      K: 9,
      V: {
        kind: "scalar",
        T: 9
      }
    }, {
      no: 6,
      name: "window_type",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Jws().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Jws().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Jws().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Jws, e, t);
  }
};
Anf = class Gws extends ie {
  constructor(e) {
    super();
    this.success = false;
    this.eventsProcessed = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SubmitToolCallEventsResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "success",
      kind: "scalar",
      T: 8
    }, {
      no: 2,
      name: "error_message",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 3,
      name: "events_processed",
      kind: "scalar",
      T: 5
    }]);
  }
  static fromBinary(e, t) {
    return new Gws().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Gws().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Gws().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Gws, e, t);
  }
};
ynf = class Wws extends ie {
  constructor(e) {
    super();
    this.toolCallId = "";
    this.toolType = "";
    this.chatRequestUuid = "";
    this.modelName = "";
    this.isParallel = false;
    this.success = false;
    this.metadata = {};
    this.isStream = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ToolCallTelemetryEvent";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "tool_call_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "tool_type",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "chat_request_uuid",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "model_name",
      kind: "scalar",
      T: 9
    }, {
      no: 5,
      name: "start_time",
      kind: "message",
      T: $0
    }, {
      no: 6,
      name: "end_time",
      kind: "message",
      T: $0
    }, {
      no: 7,
      name: "duration",
      kind: "message",
      T: n5t
    }, {
      no: 8,
      name: "is_parallel",
      kind: "scalar",
      T: 8
    }, {
      no: 9,
      name: "parallel_batch_size",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 10,
      name: "success",
      kind: "scalar",
      T: 8
    }, {
      no: 11,
      name: "error_message",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 12,
      name: "metadata",
      kind: "map",
      K: 9,
      V: {
        kind: "scalar",
        T: 9
      }
    }, {
      no: 13,
      name: "approval_wait_duration",
      kind: "message",
      T: n5t,
      opt: true
    }, {
      no: 14,
      name: "is_stream",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new Wws().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Wws().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Wws().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Wws, e, t);
  }
};
wnf = class Qws extends ie {
  constructor(e) {
    super();
    this.sessionId = "";
    this.events = [];
    this.clientVersion = "";
    this.clientCommit = "";
    this.platformTags = {};
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SubmitChatRequestEventsRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "session_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "events",
      kind: "message",
      T: Cnf,
      repeated: true
    }, {
      no: 3,
      name: "client_version",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "client_commit",
      kind: "scalar",
      T: 9
    }, {
      no: 5,
      name: "platform_tags",
      kind: "map",
      K: 9,
      V: {
        kind: "scalar",
        T: 9
      }
    }, {
      no: 6,
      name: "window_type",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Qws().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Qws().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Qws().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Qws, e, t);
  }
};
_nf = class jws extends ie {
  constructor(e) {
    super();
    this.success = false;
    this.eventsProcessed = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SubmitChatRequestEventsResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "success",
      kind: "scalar",
      T: 8
    }, {
      no: 2,
      name: "error_message",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 3,
      name: "events_processed",
      kind: "scalar",
      T: 5
    }]);
  }
  static fromBinary(e, t) {
    return new jws().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new jws().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new jws().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(jws, e, t);
  }
};
Cnf = class zws extends ie {
  constructor(e) {
    super();
    this.chatRequestUuid = "";
    this.requestedModel = "";
    this.actualModel = "";
    this.success = false;
    this.completionStatus = "";
    this.metadata = {};
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ChatRequestTelemetryEvent";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "chat_request_uuid",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "requested_model",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "actual_model",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "start_time",
      kind: "message",
      T: $0
    }, {
      no: 5,
      name: "end_time",
      kind: "message",
      T: $0
    }, {
      no: 6,
      name: "duration",
      kind: "message",
      T: n5t
    }, {
      no: 7,
      name: "success",
      kind: "scalar",
      T: 8
    }, {
      no: 8,
      name: "error_message",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 9,
      name: "transport",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 10,
      name: "completion_status",
      kind: "scalar",
      T: 9
    }, {
      no: 11,
      name: "metadata",
      kind: "map",
      K: 9,
      V: {
        kind: "scalar",
        T: 9
      }
    }, {
      no: 12,
      name: "total_ttft_ms",
      kind: "scalar",
      T: 1,
      opt: true
    }, {
      no: 13,
      name: "total_generate_ms",
      kind: "scalar",
      T: 1,
      opt: true
    }, {
      no: 14,
      name: "total_stream_ms",
      kind: "scalar",
      T: 1,
      opt: true
    }, {
      no: 15,
      name: "total_request_ms",
      kind: "scalar",
      T: 1,
      opt: true
    }, {
      no: 16,
      name: "model_call_count",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 17,
      name: "total_tool_call_latency",
      kind: "scalar",
      T: 1,
      opt: true
    }, {
      no: 18,
      name: "tool_call_count",
      kind: "scalar",
      T: 5,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new zws().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new zws().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new zws().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(zws, e, t);
  }
};

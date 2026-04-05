// Module: out-build/proto/anyrun/v1/pod_pb.js
// Offset: 27694736 (bundle byte offset)
// Size: 11649 bytes

Ka(), isu(), FGg(), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.CLONE=1]="CLONE", n[n.BUILD=2]="BUILD", n[n.POST_CREATE=3]="POST_CREATE", n[n.UPDATE_CONTENT=4]="UPDATE_CONTENT", n[n.POST_START=5]="POST_START"
})(Vvi||(Vvi={
  
})), v.util.setEnumType(Vvi, "anyrun.v1.PodCreatingPhase", [{
  no:0, name:"POD_CREATING_PHASE_UNSPECIFIED"
}, {
  no:1, name:"POD_CREATING_PHASE_CLONE"
}, {
  no:2, name:"POD_CREATING_PHASE_BUILD"
}, {
  no:3, name:"POD_CREATING_PHASE_POST_CREATE"
}, {
  no:4, name:"POD_CREATING_PHASE_UPDATE_CONTENT"
}, {
  no:5, name:"POD_CREATING_PHASE_POST_START"
}
]), OGg=class Sps extends ie{
  constructor(e){
    super(), this.ports=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="anyrun.v1.PodPorts"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"ports",kind:"message",T:gba,repeated:!0
    }, {
      no:2,name:"default_port_config",kind:"message",T:fba,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Sps().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Sps().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Sps().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Sps, e, t)
  }
}, YFA=class kps extends ie{
  constructor(e){
    super(), this.portName="", this.containerPort=0, this.hostPort=0, this.visibility={
      case:void 0
    }, this.authentication={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="anyrun.v1.PortState"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"port_name",kind:"scalar",T:9
    }, {
      no:2,name:"container_port",kind:"scalar",T:13
    }, {
      no:3,name:"host_port",kind:"scalar",T:13
    }, {
      no:4,name:"public",kind:"message",T:ZI,oneof:"visibility"
    }, {
      no:5,name:"private",kind:"message",T:ZI,oneof:"visibility"
    }, {
      no:6,name:"open",kind:"message",T:ZI,oneof:"authentication"
    }, {
      no:7,name:"token",kind:"message",T:ZI,oneof:"authentication"
    }
    ])
  }
  static fromBinary(e, t){
    return new kps().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new kps().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new kps().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(kps, e, t)
  }
}, Kvi=class Eps extends ie{
  constructor(e){
    super(), this.status={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="anyrun.v1.PodStatus"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"creating",kind:"message",T:$Gg,oneof:"status"
    }, {
      no:2,name:"running",kind:"message",T:qGg,oneof:"status"
    }, {
      no:3,name:"failed",kind:"message",T:HGg,oneof:"status"
    }, {
      no:4,name:"terminated",kind:"message",T:JGg,oneof:"status"
    }
    ])
  }
  static fromBinary(e, t){
    return new Eps().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Eps().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Eps().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Eps, e, t)
  }
}, Yvi=class xps extends ie{
  constructor(e){
    super(), this.tenantId="", this.podId="", this.resourceVersion=0, this.name="", this.labels={
      
    }, this.creationTimestamp=Eo.zero, this.workload="", this.nodeId="", this.networkToken="", this.lowCardinalityLabels=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="anyrun.v1.Pod"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"tenant_id",kind:"scalar",T:9
    }, {
      no:2,name:"pod_id",kind:"scalar",T:9
    }, {
      no:9,name:"resource_version",kind:"scalar",T:13
    }, {
      no:10,name:"name",kind:"scalar",T:9
    }, {
      no:11,name:"labels",kind:"map",K:9,V:{
        kind:"scalar",T:9
      }
    }, {
      no:12,name:"creation_timestamp",kind:"scalar",T:4
    }, {
      no:13,name:"deletion_timestamp",kind:"scalar",T:4,opt:!0
    }, {
      no:14,name:"hibernation_timestamp",kind:"scalar",T:4,opt:!0
    }, {
      no:4,name:"resource_requests",kind:"message",T:zvi
    }, {
      no:20,name:"hibernated_resource_requests",kind:"message",T:zvi
    }, {
      no:17,name:"resource_limits",kind:"message",T:tsu,opt:!0
    }, {
      no:18,name:"cache",kind:"scalar",T:8,opt:!0
    }, {
      no:19,name:"cache_tag",kind:"scalar",T:9,opt:!0
    }, {
      no:21,name:"workload",kind:"scalar",T:9
    }, {
      no:5,name:"node_id",kind:"scalar",T:9
    }, {
      no:15,name:"hibernated",kind:"scalar",T:8,opt:!0
    }, {
      no:7,name:"network_token",kind:"scalar",T:9
    }, {
      no:8,name:"status",kind:"message",T:Kvi
    }, {
      no:6,name:"ports",kind:"message",T:OGg
    }, {
      no:22,name:"internal_proxy_port",kind:"scalar",T:13,opt:!0
    }, {
      no:16,name:"config",kind:"message",T:rsu,opt:!0
    }, {
      no:23,name:"modified_timestamp",kind:"scalar",T:4,opt:!0
    }, {
      no:24,name:"pod_awake_since",kind:"scalar",T:4,opt:!0
    }, {
      no:25,name:"low_cardinality_labels",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new xps().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new xps().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new xps().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(xps, e, t)
  }
}, UGg=class Tps extends ie{
  constructor(e){
    super(), this.items=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="anyrun.v1.PodCollection"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"items",kind:"message",T:Yvi,repeated:!0
    }, {
      no:2,name:"next_cursor",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Tps().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Tps().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Tps().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Tps, e, t)
  }
}, ZFA=class Ips extends ie{
  constructor(e){
    super(), this.update={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="anyrun.v1.PodUpdate"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"event_id",kind:"scalar",T:9,opt:!0
    }, {
      no:2,name:"initial",kind:"message",T:UGg,oneof:"update"
    }, {
      no:3,name:"added",kind:"message",T:Yvi,oneof:"update"
    }, {
      no:4,name:"updated",kind:"message",T:Yvi,oneof:"update"
    }, {
      no:5,name:"removed",kind:"message",T:Yvi,oneof:"update"
    }
    ])
  }
  static fromBinary(e, t){
    return new Ips().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ips().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ips().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ips, e, t)
  }
}, XFA=class Dps extends ie{
  constructor(e){
    super(), this.labels={
      
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="anyrun.v1.PodFilter"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"pod_id",kind:"scalar",T:9,opt:!0
    }, {
      no:2,name:"labels",kind:"map",K:9,V:{
        kind:"scalar",T:9
      }
    }
    ])
  }
  static fromBinary(e, t){
    return new Dps().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Dps().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Dps().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Dps, e, t)
  }
}, $Gg=class Bps extends ie{
  constructor(e){
    super(), this.phase=Vvi.UNSPECIFIED, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="anyrun.v1.PodCreatingStatus"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"phase",kind:"enum",T:v.getEnumType(Vvi)
    }
    ])
  }
  static fromBinary(e, t){
    return new Bps().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Bps().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Bps().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Bps, e, t)
  }
}, qGg=class Rps extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="anyrun.v1.PodRunningStatus"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"missed_heartbeat_deadline",kind:"scalar",T:4,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Rps().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Rps().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Rps().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Rps, e, t)
  }
}, HGg=class Pps extends ie{
  constructor(e){
    super(), this.reason="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="anyrun.v1.PodFailedStatus"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"reason",kind:"scalar",T:9
    }, {
      no:2,name:"failure_details",kind:"message",T:GGg,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Pps().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Pps().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Pps().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Pps, e, t)
  }
}, JGg=class Lps extends ie{
  constructor(e){
    super(), this.reason="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="anyrun.v1.PodTerminatedStatus"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"reason",kind:"scalar",T:9
    }, {
      no:2,name:"exit_code",kind:"scalar",T:13,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Lps().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Lps().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Lps().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Lps, e, t)
  }
}, GGg=class Nps extends ie{
  constructor(e){
    super(), this.details={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="anyrun.v1.PodFailureDetails"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"install_command_failure",kind:"message",T:WGg,oneof:"details"
    }, {
      no:2,name:"docker_build_failure",kind:"message",T:QGg,oneof:"details"
    }, {
      no:3,name:"git_clone_failure",kind:"message",T:jGg,oneof:"details"
    }, {
      no:4,name:"git_checkout_failure",kind:"message",T:zGg,oneof:"details"
    }
    ])
  }
  static fromBinary(e, t){
    return new Nps().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Nps().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Nps().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Nps, e, t)
  }
}, WGg=class Mps extends ie{
  constructor(e){
    super(), this.isSystem=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="anyrun.v1.InstallCommandFailure"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"is_system",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Mps().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Mps().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Mps().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Mps, e, t)
  }
}, QGg=class Fps extends ie{
  constructor(e){
    super(), this.exitCode=Eo.zero, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="anyrun.v1.DockerBuildFailure"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"exit_code",kind:"scalar",T:3
    }
    ])
  }
  static fromBinary(e, t){
    return new Fps().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Fps().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Fps().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Fps, e, t)
  }
}, jGg=class Ops extends ie{
  constructor(e){
    super(), this.exitCode=Eo.zero, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="anyrun.v1.GitCloneFailure"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"exit_code",kind:"scalar",T:3
    }
    ])
  }
  static fromBinary(e, t){
    return new Ops().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ops().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ops().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ops, e, t)
  }
}, zGg=class Ups extends ie{
  constructor(e){
    super(), this.exitCode=Eo.zero, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="anyrun.v1.GitCheckoutFailure"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"exit_code",kind:"scalar",T:3
    }
    ])
  }
  static fromBinary(e, t){
    return new Ups().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ups().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ups().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ups, e, t)
  }
}, e4A=class $ps extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="anyrun.v1.DaemonPod"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:2,name:"status",kind:"message",T:Kvi
    }, {
      no:3,name:"internal_proxy_port",kind:"scalar",T:13,opt:!0
    }, {
      no:4,name:"default_port_config",kind:"message",T:fba,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new $ps().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new $ps().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new $ps().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals($ps, e, t)
  }
}
}
}), zSt, VGg, ssu, KGg, YGg, ZGg, Zvi, osu, XGg, eWg, tWg, nWg, iWg, asu, rWg, sWg, oWg, aWg, cWg, n4A=
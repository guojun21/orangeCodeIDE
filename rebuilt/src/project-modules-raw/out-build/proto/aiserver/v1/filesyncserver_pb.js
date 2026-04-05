// Module: out-build/proto/aiserver/v1/filesyncserver_pb.js
// Offset: 3500958 (bundle byte offset)
// Size: 13714 bytes

Ka(), qp(), (function(n){
  n[n.FS_UPLOAD_ERROR_TYPE_UNSPECIFIED=0]="FS_UPLOAD_ERROR_TYPE_UNSPECIFIED", n[n.FS_UPLOAD_ERROR_TYPE_NON_EXISTANT=1]="FS_UPLOAD_ERROR_TYPE_NON_EXISTANT", n[n.FS_UPLOAD_ERROR_TYPE_HASH_MISMATCH=2]="FS_UPLOAD_ERROR_TYPE_HASH_MISMATCH"
})(L8n||(L8n={
  
})), v.util.setEnumType(L8n, "aiserver.v1.FSUploadErrorType", [{
  no:0, name:"FS_UPLOAD_ERROR_TYPE_UNSPECIFIED"
}, {
  no:1, name:"FS_UPLOAD_ERROR_TYPE_NON_EXISTANT"
}, {
  no:2, name:"FS_UPLOAD_ERROR_TYPE_HASH_MISMATCH"
}
]), (function(n){
  n[n.FS_SYNC_ERROR_TYPE_UNSPECIFIED=0]="FS_SYNC_ERROR_TYPE_UNSPECIFIED", n[n.FS_SYNC_ERROR_TYPE_NON_EXISTANT=1]="FS_SYNC_ERROR_TYPE_NON_EXISTANT", n[n.FS_SYNC_ERROR_TYPE_HASH_MISMATCH=2]="FS_SYNC_ERROR_TYPE_HASH_MISMATCH"
})(N8n||(N8n={
  
})), v.util.setEnumType(N8n, "aiserver.v1.FSSyncErrorType", [{
  no:0, name:"FS_SYNC_ERROR_TYPE_UNSPECIFIED"
}, {
  no:1, name:"FS_SYNC_ERROR_TYPE_NON_EXISTANT"
}, {
  no:2, name:"FS_SYNC_ERROR_TYPE_HASH_MISMATCH"
}
]), y4c=class rZi extends ie{
  constructor(e){
    super(), this.uuid="", this.relativeWorkspacePath="", this.contents="", this.modelVersion=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.FSUploadFileRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"uuid",kind:"scalar",T:9
    }, {
      no:2,name:"relative_workspace_path",kind:"scalar",T:9
    }, {
      no:3,name:"contents",kind:"scalar",T:9
    }, {
      no:4,name:"model_version",kind:"scalar",T:5
    }, {
      no:5,name:"sha256_hash",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new rZi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new rZi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new rZi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(rZi, e, t)
  }
}, w4c=class sZi extends ie{
  constructor(e){
    super(), this.error=L8n.FS_UPLOAD_ERROR_TYPE_UNSPECIFIED, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.FSUploadFileResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"error",kind:"enum",T:v.getEnumType(L8n)
    }
    ])
  }
  static fromBinary(e, t){
    return new sZi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new sZi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new sZi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(sZi, e, t)
  }
}, a9t=class oZi extends ie{
  constructor(e){
    super(), this.modelVersion=0, this.relativeWorkspacePath="", this.updates=[], this.expectedFileLength=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.FilesyncUpdateWithModelVersion"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"model_version",kind:"scalar",T:5
    }, {
      no:2,name:"relative_workspace_path",kind:"scalar",T:9
    }, {
      no:3,name:"updates",kind:"message",T:NMh,repeated:!0
    }, {
      no:4,name:"expected_file_length",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new oZi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new oZi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new oZi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(oZi, e, t)
  }
}, NMh=class aZi extends ie{
  constructor(e){
    super(), this.startPosition=0, this.endPosition=0, this.changeLength=0, this.replacedString="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SingleUpdateRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"start_position",kind:"scalar",T:5
    }, {
      no:2,name:"end_position",kind:"scalar",T:5
    }, {
      no:3,name:"change_length",kind:"scalar",T:5
    }, {
      no:4,name:"replaced_string",kind:"scalar",T:9
    }, {
      no:5,name:"range",kind:"message",T:wF
    }
    ])
  }
  static fromBinary(e, t){
    return new aZi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new aZi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new aZi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(aZi, e, t)
  }
}, _4c=class cZi extends ie{
  constructor(e){
    super(), this.uuid="", this.relativeWorkspacePath="", this.modelVersion=0, this.filesyncUpdates=[], this.sha256Hash="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.FSSyncFileRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"uuid",kind:"scalar",T:9
    }, {
      no:2,name:"relative_workspace_path",kind:"scalar",T:9
    }, {
      no:3,name:"model_version",kind:"scalar",T:5
    }, {
      no:4,name:"filesync_updates",kind:"message",T:a9t,repeated:!0
    }, {
      no:5,name:"sha256_hash",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new cZi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new cZi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new cZi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(cZi, e, t)
  }
}, C4c=class lZi extends ie{
  constructor(e){
    super(), this.error=N8n.FS_SYNC_ERROR_TYPE_UNSPECIFIED, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.FSSyncFileResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"error",kind:"enum",T:v.getEnumType(N8n)
    }
    ])
  }
  static fromBinary(e, t){
    return new lZi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new lZi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new lZi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(lZi, e, t)
  }
}, MMh=class uZi extends ie{
  constructor(e){
    super(), this.uuid="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.FSIsEnabledForUserRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"uuid",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new uZi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new uZi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new uZi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(uZi, e, t)
  }
}, FMh=class dZi extends ie{
  constructor(e){
    super(), this.enabled=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.FSIsEnabledForUserResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"enabled",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new dZi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new dZi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new dZi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(dZi, e, t)
  }
}, OMh=class hZi extends ie{
  constructor(e){
    super(), this.uuid="", this.authId="", this.relativeWorkspacePath="", this.modelVersion=0, this.filesyncUpdates=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.FSGetFileContentsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"uuid",kind:"scalar",T:9
    }, {
      no:2,name:"auth_id",kind:"scalar",T:9
    }, {
      no:3,name:"relative_workspace_path",kind:"scalar",T:9
    }, {
      no:4,name:"model_version",kind:"scalar",T:5
    }, {
      no:5,name:"filesync_updates",kind:"message",T:a9t,repeated:!0
    }, {
      no:6,name:"sha256_hash",kind:"scalar",T:9,opt:!0
    }, {
      no:7,name:"earliest_time",kind:"message",T:$0,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new hZi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new hZi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new hZi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(hZi, e, t)
  }
}, UMh=class mZi extends ie{
  constructor(e){
    super(), this.contents="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.FSGetFileContentsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"contents",kind:"scalar",T:9
    }, {
      no:2,name:"sha256_hash",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new mZi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new mZi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new mZi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(mZi, e, t)
  }
}, $Mh=class pZi extends ie{
  constructor(e){
    super(), this.relativeWorkspacePath="", this.required=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.FileRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"relative_workspace_path",kind:"scalar",T:9
    }, {
      no:2,name:"requested_version",kind:"scalar",T:5,opt:!0
    }, {
      no:3,name:"sha256_hash",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"required",kind:"scalar",T:8
    }, {
      no:5,name:"earliest_time",kind:"message",T:$0,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new pZi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new pZi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new pZi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(pZi, e, t)
  }
}, qMh=class gZi extends ie{
  constructor(e){
    super(), this.authId="", this.filesyncUpdates=[], this.fileRequests=[], this.getAllRecentFiles=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.FSGetMultiFileContentsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"auth_id",kind:"scalar",T:9
    }, {
      no:2,name:"filesync_updates",kind:"message",T:a9t,repeated:!0
    }, {
      no:3,name:"file_requests",kind:"message",T:$Mh,repeated:!0
    }, {
      no:4,name:"get_all_recent_files",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new gZi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new gZi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new gZi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(gZi, e, t)
  }
}, HMh=class fZi extends ie{
  constructor(e){
    super(), this.relativeWorkspacePath="", this.contents="", this.modelVersion=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.FileRetrieved"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"relative_workspace_path",kind:"scalar",T:9
    }, {
      no:2,name:"contents",kind:"scalar",T:9
    }, {
      no:3,name:"model_version",kind:"scalar",T:5
    }, {
      no:4,name:"last_modified",kind:"message",T:$0
    }
    ])
  }
  static fromBinary(e, t){
    return new fZi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new fZi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new fZi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(fZi, e, t)
  }
}, JMh=class bZi extends ie{
  constructor(e){
    super(), this.files=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.FSGetMultiFileContentsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"files",kind:"message",T:HMh,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new bZi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new bZi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new bZi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(bZi, e, t)
  }
}, GMh=class vZi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.FSInternalHealthCheckRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"from_server",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new vZi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new vZi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new vZi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(vZi, e, t)
  }
}, WMh=class AZi extends ie{
  constructor(e){
    super(), this.success=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.FSInternalHealthCheckResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new AZi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new AZi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new AZi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(AZi, e, t)
  }
}, QMh=class yZi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.FSConfigRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new yZi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new yZi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new yZi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(yZi, e, t)
  }
}, jMh=class wZi extends ie{
  constructor(e){
    super(), this.checkFilesyncHashPercent=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.FSConfigResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"check_filesync_hash_percent",kind:"scalar",T:2
    }, {
      no:2,name:"rate_limiter_breaker_reset_time_ms",kind:"scalar",T:5,opt:!0
    }, {
      no:3,name:"rate_limiter_rps",kind:"scalar",T:5,opt:!0
    }, {
      no:4,name:"rate_limiter_burst_capacity",kind:"scalar",T:5,opt:!0
    }, {
      no:5,name:"max_recent_updates_stored",kind:"scalar",T:5,opt:!0
    }, {
      no:6,name:"max_model_version_cache_size",kind:"scalar",T:5,opt:!0
    }, {
      no:7,name:"max_file_size_to_sync_bytes",kind:"scalar",T:5,opt:!0
    }, {
      no:8,name:"sync_retry_max_attempts",kind:"scalar",T:5,opt:!0
    }, {
      no:9,name:"sync_retry_initial_delay_ms",kind:"scalar",T:5,opt:!0
    }, {
      no:10,name:"sync_retry_time_multiplier",kind:"scalar",T:5,opt:!0
    }, {
      no:11,name:"file_sync_status_max_cache_size",kind:"scalar",T:5,opt:!0
    }, {
      no:12,name:"successive_syncs_required_for_reliance",kind:"scalar",T:5,opt:!0
    }, {
      no:13,name:"extra_successful_syncs_needed_after_errors",kind:"scalar",T:5,opt:!0
    }, {
      no:14,name:"big_change_stripping_threshold_bytes",kind:"scalar",T:5,opt:!0
    }, {
      no:15,name:"last_n_updates_to_send",kind:"scalar",T:5,opt:!0
    }, {
      no:16,name:"file_sync_status_ttl_ms",kind:"scalar",T:5,opt:!0
    }, {
      no:17,name:"sync_debounce_ms",kind:"scalar",T:5,opt:!0
    }, {
      no:18,name:"sync_update_threshold",kind:"scalar",T:5,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new wZi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new wZi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new wZi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(wZi, e, t)
  }
}
}
}), YKe, Gte, k4c, zMh, VMh, KMh, YMh, q6o, yz, ZMh, XMh, e2h, H6o, t2h, j9e, n2h, i2h, r2h, s2h, J6o, E4c, o2h, a2h, G6o, x4c, T4c, c2h, l2h, u2h, d2h, h2h, wz, m2h, I4c, p2h, EgA, W6o, g2h, f2h, b2h, M8n, v2h, D4c, A2h, sae, c9t, y2h, ZKe, F8n, w2h, B4c, _2h, C2h, S2h, k2h, E2h, x2h, Q6o, avt, T2h, I2h, D2h, j6o, kF, B2h, R2h, cvt, P2h, L2h, N2h, M2h, R4c, O8n, F2h, O2h, U2h, $2h, q2h, H2h, J2h, G2h, W2h, Q2h, j2h, z2h, V2h, K2h, Y2h, Z2h, X2h, eFh, tFh, nFh, iFh, rFh, sFh, oFh, U8n, aFh, $8n, cFh, lFh, uFh, dFh, hFh, mFh, pFh, gFh, fFh, bFh, vFh, AFh, yFh, z9e, _z, wFh, _Fh, CFh, SFh, kFh, EFh, xFh, TFh, IFh, DFh, BFh, z6o, RFh, PFh, LFh, q8n, XKe, NFh, P4c, L4c, MFh, V6o, FFh, OFh, UFh, $Fh, qFh, HFh, N4c, xgA, TgA, JFh, H8n, GFh, WFh, QFh, jFh, zFh, VFh, KFh, Wte, YFh, J8n, ZFh, dke, XFh, e4h, M4c, t4h, n4h, i4h, r4h, H6=
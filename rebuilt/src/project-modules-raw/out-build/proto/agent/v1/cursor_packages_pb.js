// Module: out-build/proto/agent/v1/cursor_packages_pb.js
// Offset: 3209647 (bundle byte offset)
// Size: 2012 bytes

Ka(), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.CURSOR_PROJECT=1]="CURSOR_PROJECT", n[n.CURSOR_PERSONAL=2]="CURSOR_PERSONAL", n[n.CLAUDE_SKILL=3]="CLAUDE_SKILL", n[n.CLAUDE_PLUGIN=4]="CLAUDE_PLUGIN"
})(Zbt||(Zbt={
  
})), v.util.setEnumType(Zbt, "agent.v1.PackageType", [{
  no:0, name:"PACKAGE_TYPE_UNSPECIFIED"
}, {
  no:1, name:"PACKAGE_TYPE_CURSOR_PROJECT"
}, {
  no:2, name:"PACKAGE_TYPE_CURSOR_PERSONAL"
}, {
  no:3, name:"PACKAGE_TYPE_CLAUDE_SKILL"
}, {
  no:4, name:"PACKAGE_TYPE_CLAUDE_PLUGIN"
}
]), TRh=class DGi extends ie{
  constructor(e){
    super(), this.name="", this.filePath="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.CursorPackagePrompt"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"name",kind:"scalar",T:9
    }, {
      no:2,name:"file_path",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new DGi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new DGi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new DGi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(DGi, e, t)
  }
}, lgA=class BGi extends ie{
  constructor(e){
    super(), this.name="", this.description="", this.folderPath="", this.enabled=!1, this.prompts=[], this.readmeFilePath="", this.packageType=Zbt.UNSPECIFIED, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.CursorPackage"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"name",kind:"scalar",T:9
    }, {
      no:2,name:"description",kind:"scalar",T:9
    }, {
      no:3,name:"folder_path",kind:"scalar",T:9
    }, {
      no:4,name:"enabled",kind:"scalar",T:8
    }, {
      no:5,name:"parse_error",kind:"scalar",T:9,opt:!0
    }, {
      no:6,name:"prompts",kind:"message",T:TRh,repeated:!0
    }, {
      no:7,name:"readme_file_path",kind:"scalar",T:9
    }, {
      no:8,name:"package_type",kind:"enum",T:v.getEnumType(Zbt)
    }
    ])
  }
  static fromBinary(e, t){
    return new BGi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new BGi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new BGi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(BGi, e, t)
  }
}
}
}), IRh, dgA=
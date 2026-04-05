// Module: out-build/proto/aiserver/v1/lint_pb.js
// Offset: 3684079 (bundle byte offset)
// Size: 13042 bytes

Ka(), qp(), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.SPECIFIC_RULES=1]="SPECIFIC_RULES", n[n.COMPILE_ERRORS=2]="COMPILE_ERRORS", n[n.CHANGE_BEHAVIOR=3]="CHANGE_BEHAVIOR", n[n.RELEVANCE=5]="RELEVANCE", n[n.USER_AWARENESS=6]="USER_AWARENESS", n[n.CORRECTNESS=7]="CORRECTNESS", n[n.CHUNKING=8]="CHUNKING", n[n.TYPO=9]="TYPO", n[n.CONFIDENCE=10]="CONFIDENCE", n[n.DISMISSED_BUGS=11]="DISMISSED_BUGS"
})(lvt||(lvt={
  
})), v.util.setEnumType(lvt, "aiserver.v1.LintDiscriminator", [{
  no:0, name:"LINT_DISCRIMINATOR_UNSPECIFIED"
}, {
  no:1, name:"LINT_DISCRIMINATOR_SPECIFIC_RULES"
}, {
  no:2, name:"LINT_DISCRIMINATOR_COMPILE_ERRORS"
}, {
  no:3, name:"LINT_DISCRIMINATOR_CHANGE_BEHAVIOR"
}, {
  no:5, name:"LINT_DISCRIMINATOR_RELEVANCE"
}, {
  no:6, name:"LINT_DISCRIMINATOR_USER_AWARENESS"
}, {
  no:7, name:"LINT_DISCRIMINATOR_CORRECTNESS"
}, {
  no:8, name:"LINT_DISCRIMINATOR_CHUNKING"
}, {
  no:9, name:"LINT_DISCRIMINATOR_TYPO"
}, {
  no:10, name:"LINT_DISCRIMINATOR_CONFIDENCE"
}, {
  no:11, name:"LINT_DISCRIMINATOR_DISMISSED_BUGS"
}
]), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.NAIVE=1]="NAIVE", n[n.COMMENT_PIPELINE=2]="COMMENT_PIPELINE", n[n.SIMPLE_BUG=3]="SIMPLE_BUG", n[n.SIMPLE_LINT_RULES=4]="SIMPLE_LINT_RULES"
})(uvt||(uvt={
  
})), v.util.setEnumType(uvt, "aiserver.v1.LintGenerator", [{
  no:0, name:"LINT_GENERATOR_UNSPECIFIED"
}, {
  no:1, name:"LINT_GENERATOR_NAIVE"
}, {
  no:2, name:"LINT_GENERATOR_COMMENT_PIPELINE"
}, {
  no:3, name:"LINT_GENERATOR_SIMPLE_BUG"
}, {
  no:4, name:"LINT_GENERATOR_SIMPLE_LINT_RULES"
}
]), j4c=class qnr extends ie{
  constructor(e){
    super(), this.relativeFilePath="", this.lineSelection="", this.tokenStartIndex=0, this.tokenEndIndex=0, this.likelyAlternateToken="", this.lineChunkIndexZeroBased=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.LintExplanationRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"relative_file_path",kind:"scalar",T:9
    }, {
      no:2,name:"chunk",kind:"message",T:d9t
    }, {
      no:3,name:"line_selection",kind:"scalar",T:9
    }, {
      no:4,name:"token_start_index",kind:"scalar",T:5
    }, {
      no:5,name:"token_end_index",kind:"scalar",T:5
    }, {
      no:6,name:"likely_alternate_token",kind:"scalar",T:9
    }, {
      no:7,name:"line_chunk_index_zero_based",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new qnr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new qnr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new qnr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(qnr, e, t)
  }
}, gOh=class Hnr extends ie{
  constructor(e){
    super(), this.explanation="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.LintExplanationResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"explanation",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Hnr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Hnr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Hnr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Hnr, e, t)
  }
}, fOh=class Jnr extends ie{
  constructor(e){
    super(), this.origLine="", this.newLine="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.LintExplanationResponse2"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"orig_line",kind:"scalar",T:9
    }, {
      no:2,name:"new_line",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Jnr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Jnr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Jnr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Jnr, e, t)
  }
}, d9t=class Gnr extends ie{
  constructor(e){
    super(), this.chunkContents="", this.startLineNumber=0, this.numRemainingLines=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.LintChunk"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:2,name:"chunk_contents",kind:"scalar",T:9
    }, {
      no:3,name:"start_line_number",kind:"scalar",T:5
    }, {
      no:4,name:"num_remaining_lines",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new Gnr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Gnr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Gnr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Gnr, e, t)
  }
}, bOh=class Wnr extends ie{
  constructor(e){
    super(), this.relativeFilePath="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.LintChunkRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"relative_file_path",kind:"scalar",T:9
    }, {
      no:2,name:"chunk",kind:"message",T:d9t
    }, {
      no:3,name:"use_speculative_linter",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Wnr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Wnr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Wnr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Wnr, e, t)
  }
}, vOh=class Qnr extends ie{
  constructor(e){
    super(), this.chunkTokens=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.LintChunkResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"chunk_tokens",kind:"message",T:eUo,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Qnr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Qnr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Qnr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Qnr, e, t)
  }
}, AOh=class jnr extends ie{
  constructor(e){
    super(), this.relativeFilePath="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.LintFimChunkRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"relative_file_path",kind:"scalar",T:9
    }, {
      no:2,name:"prefix",kind:"message",T:d9t
    }, {
      no:3,name:"suffix",kind:"message",T:d9t
    }, {
      no:4,name:"middle",kind:"message",T:d9t
    }
    ])
  }
  static fromBinary(e, t){
    return new jnr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new jnr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new jnr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(jnr, e, t)
  }
}, yOh=class znr extends ie{
  constructor(e){
    super(), this.middleChunkTokens=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.LintFimChunkResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"middle_chunk_tokens",kind:"message",T:eUo,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new znr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new znr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new znr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(znr, e, t)
  }
}, wOh=class Vnr extends ie{
  constructor(e){
    super(), this.relativeFilePath="", this.fileContents="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.LintFileRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"relative_file_path",kind:"scalar",T:9
    }, {
      no:2,name:"file_contents",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Vnr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Vnr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Vnr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Vnr, e, t)
  }
}, _Oh=class Knr extends ie{
  constructor(e){
    super(), this.token="", this.logProbability=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TokensWithLogprobs"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"token",kind:"scalar",T:9
    }, {
      no:2,name:"log_probability",kind:"scalar",T:2
    }
    ])
  }
  static fromBinary(e, t){
    return new Knr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Knr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Knr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Knr, e, t)
  }
}, eUo=class Ynr extends ie{
  constructor(e){
    super(), this.tokensWithLogprobs=[], this.actualToken="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TokenIndex"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"tokens_with_logprobs",kind:"message",T:_Oh,repeated:!0
    }, {
      no:2,name:"actual_token",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Ynr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ynr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ynr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ynr, e, t)
  }
}, COh=class Znr extends ie{
  constructor(e){
    super(), this.tokens=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.LintFileResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"tokens",kind:"message",T:eUo,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Znr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Znr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Znr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Znr, e, t)
  }
}, SOh=class Xnr extends ie{
  constructor(e){
    super(), this.discriminator=lvt.UNSPECIFIED, this.allow=!1, this.reasoning="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.LintDiscriminatorResult"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"discriminator",kind:"enum",T:v.getEnumType(lvt)
    }, {
      no:2,name:"allow",kind:"scalar",T:8
    }, {
      no:3,name:"reasoning",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Xnr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Xnr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Xnr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Xnr, e, t)
  }
}, Z8n=class eir extends ie{
  constructor(e){
    super(), this.relativeWorkspacePath="", this.uuid="", this.message="", this.replaceText="", this.replaceInitialText="", this.reevaluateInitialText="", this.generator=uvt.UNSPECIFIED, this.discriminatorResults=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AiLintBug"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"relative_workspace_path",kind:"scalar",T:9
    }, {
      no:8,name:"uuid",kind:"scalar",T:9
    }, {
      no:2,name:"message",kind:"scalar",T:9
    }, {
      no:3,name:"replace_range",kind:"message",T:wF
    }, {
      no:4,name:"replace_text",kind:"scalar",T:9
    }, {
      no:5,name:"replace_initial_text",kind:"scalar",T:9
    }, {
      no:6,name:"reevaluate_range",kind:"message",T:wF
    }, {
      no:7,name:"reevaluate_initial_text",kind:"scalar",T:9
    }, {
      no:9,name:"generator",kind:"enum",T:v.getEnumType(uvt)
    }, {
      no:10,name:"discriminator_results",kind:"message",T:SOh,repeated:!0
    }, {
      no:11,name:"logprobs_payload",kind:"message",T:kOh
    }
    ])
  }
  static fromBinary(e, t){
    return new eir().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new eir().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new eir().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(eir, e, t)
  }
}, kOh=class tir extends ie{
  constructor(e){
    super(), this.chunk="", this.problematicLine="", this.startCol=0, this.endCol=0, this.mostLikelyReplace="", this.lineChunkIndexZeroBased=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.LogprobsLintPayload"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"chunk",kind:"scalar",T:9
    }, {
      no:2,name:"problematic_line",kind:"scalar",T:9
    }, {
      no:3,name:"start_col",kind:"scalar",T:5
    }, {
      no:4,name:"end_col",kind:"scalar",T:5
    }, {
      no:5,name:"most_likely_replace",kind:"scalar",T:9
    }, {
      no:6,name:"line_chunk_index_zero_based",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new tir().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new tir().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new tir().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(tir, e, t)
  }
}, BgA=class nir extends ie{
  constructor(e){
    super(), this.relativeWorkspacePath="", this.uuid="", this.message="", this.lineNumber=0, this.reevaluateInitialText="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AiLintInlineSuggestion"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"relative_workspace_path",kind:"scalar",T:9
    }, {
      no:8,name:"uuid",kind:"scalar",T:9
    }, {
      no:2,name:"message",kind:"scalar",T:9
    }, {
      no:3,name:"line_number",kind:"scalar",T:5
    }, {
      no:4,name:"reevaluate_range",kind:"message",T:wF
    }, {
      no:5,name:"reevaluate_initial_text",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new nir().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new nir().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new nir().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(nir, e, t)
  }
}, RgA=class iir extends ie{
  constructor(e){
    super(), this.relativeWorkspacePath="", this.uuid="", this.message="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AiLintOutOfFlowSuggestion"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"relative_workspace_path",kind:"scalar",T:9
    }, {
      no:8,name:"uuid",kind:"scalar",T:9
    }, {
      no:2,name:"message",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new iir().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new iir().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new iir().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(iir, e, t)
  }
}, EOh=class rir extends ie{
  constructor(e){
    super(), this.text="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AiLintRule"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"text",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new rir().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new rir().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new rir().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(rir, e, t)
  }
}
}
}), z4c, TOh, V4c, IOh, DOh, BOh, K4c, ROh=
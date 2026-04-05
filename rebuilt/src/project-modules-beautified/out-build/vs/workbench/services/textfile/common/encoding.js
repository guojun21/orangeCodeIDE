"use strict";

// Module: out-build/vs/workbench/services/textfile/common/encoding.js
// Offset: 31163070 (bundle byte offset)
// Size: 5140 bytes
gde();
Ql();
KEe();
Po();
Vs();
MU = "utf8";
HMe = "utf8bom";
Bit = "utf16be";
Rit = "utf16le";
m0i = [254, 255];
XSa = [255, 254];
afn = [239, 187, 191];
bDf = 512;
vDf = 512;
ADf = 4096;
yDf = 65536;
(function (n) {
  n[n.STREAM_IS_BINARY = 1] = "STREAM_IS_BINARY";
})(wDf ||= {});
_Df = class extends Error {
  constructor(n, e) {
    super(n);
    this.decodeStreamErrorKind = e;
  }
};
CDf = class pjb {
  static async create(e) {
    let t;
    if (e !== MU) {
      t = (await DQ("@vscode/iconv-lite-umd", "lib/iconv-lite-umd.js")).getDecoder(wfu(e));
    } else {
      const i = new TextDecoder();
      t = {
        write(r) {
          return i.decode(r, {
            stream: true
          });
        },
        end() {
          return i.decode();
        }
      };
    }
    return new pjb(t);
  }
  constructor(e) {
    this.iconvLiteDecoder = e;
  }
  write(e) {
    return this.iconvLiteDecoder.write(e);
  }
  end() {
    return this.iconvLiteDecoder.end();
  }
};
SDf = ["ascii", "utf-16", "utf-32"];
kDf = {
  ibm866: "cp866",
  big5: "cp950"
};
RQ = {
  utf8: {
    labelLong: "UTF-8",
    labelShort: "UTF-8",
    order: 1,
    alias: "utf8bom",
    guessableName: "UTF-8"
  },
  utf8bom: {
    labelLong: "UTF-8 with BOM",
    labelShort: "UTF-8 with BOM",
    encodeOnly: true,
    order: 2,
    alias: "utf8"
  },
  utf16le: {
    labelLong: "UTF-16 LE",
    labelShort: "UTF-16 LE",
    order: 3,
    guessableName: "UTF-16LE"
  },
  utf16be: {
    labelLong: "UTF-16 BE",
    labelShort: "UTF-16 BE",
    order: 4,
    guessableName: "UTF-16BE"
  },
  windows1252: {
    labelLong: "Western (Windows 1252)",
    labelShort: "Windows 1252",
    order: 5,
    guessableName: "windows-1252"
  },
  iso88591: {
    labelLong: "Western (ISO 8859-1)",
    labelShort: "ISO 8859-1",
    order: 6
  },
  iso88593: {
    labelLong: "Western (ISO 8859-3)",
    labelShort: "ISO 8859-3",
    order: 7
  },
  iso885915: {
    labelLong: "Western (ISO 8859-15)",
    labelShort: "ISO 8859-15",
    order: 8
  },
  macroman: {
    labelLong: "Western (Mac Roman)",
    labelShort: "Mac Roman",
    order: 9
  },
  cp437: {
    labelLong: "DOS (CP 437)",
    labelShort: "CP437",
    order: 10
  },
  windows1256: {
    labelLong: "Arabic (Windows 1256)",
    labelShort: "Windows 1256",
    order: 11
  },
  iso88596: {
    labelLong: "Arabic (ISO 8859-6)",
    labelShort: "ISO 8859-6",
    order: 12
  },
  windows1257: {
    labelLong: "Baltic (Windows 1257)",
    labelShort: "Windows 1257",
    order: 13
  },
  iso88594: {
    labelLong: "Baltic (ISO 8859-4)",
    labelShort: "ISO 8859-4",
    order: 14
  },
  iso885914: {
    labelLong: "Celtic (ISO 8859-14)",
    labelShort: "ISO 8859-14",
    order: 15
  },
  windows1250: {
    labelLong: "Central European (Windows 1250)",
    labelShort: "Windows 1250",
    order: 16,
    guessableName: "windows-1250"
  },
  iso88592: {
    labelLong: "Central European (ISO 8859-2)",
    labelShort: "ISO 8859-2",
    order: 17,
    guessableName: "ISO-8859-2"
  },
  cp852: {
    labelLong: "Central European (CP 852)",
    labelShort: "CP 852",
    order: 18
  },
  windows1251: {
    labelLong: "Cyrillic (Windows 1251)",
    labelShort: "Windows 1251",
    order: 19,
    guessableName: "windows-1251"
  },
  cp866: {
    labelLong: "Cyrillic (CP 866)",
    labelShort: "CP 866",
    order: 20,
    guessableName: "IBM866"
  },
  cp1125: {
    labelLong: "Cyrillic (CP 1125)",
    labelShort: "CP 1125",
    order: 21,
    guessableName: "IBM1125"
  },
  iso88595: {
    labelLong: "Cyrillic (ISO 8859-5)",
    labelShort: "ISO 8859-5",
    order: 22,
    guessableName: "ISO-8859-5"
  },
  koi8r: {
    labelLong: "Cyrillic (KOI8-R)",
    labelShort: "KOI8-R",
    order: 23,
    guessableName: "KOI8-R"
  },
  koi8u: {
    labelLong: "Cyrillic (KOI8-U)",
    labelShort: "KOI8-U",
    order: 24
  },
  iso885913: {
    labelLong: "Estonian (ISO 8859-13)",
    labelShort: "ISO 8859-13",
    order: 25
  },
  windows1253: {
    labelLong: "Greek (Windows 1253)",
    labelShort: "Windows 1253",
    order: 26,
    guessableName: "windows-1253"
  },
  iso88597: {
    labelLong: "Greek (ISO 8859-7)",
    labelShort: "ISO 8859-7",
    order: 27,
    guessableName: "ISO-8859-7"
  },
  windows1255: {
    labelLong: "Hebrew (Windows 1255)",
    labelShort: "Windows 1255",
    order: 28,
    guessableName: "windows-1255"
  },
  iso88598: {
    labelLong: "Hebrew (ISO 8859-8)",
    labelShort: "ISO 8859-8",
    order: 29,
    guessableName: "ISO-8859-8"
  },
  iso885910: {
    labelLong: "Nordic (ISO 8859-10)",
    labelShort: "ISO 8859-10",
    order: 30
  },
  iso885916: {
    labelLong: "Romanian (ISO 8859-16)",
    labelShort: "ISO 8859-16",
    order: 31
  },
  windows1254: {
    labelLong: "Turkish (Windows 1254)",
    labelShort: "Windows 1254",
    order: 32
  },
  iso88599: {
    labelLong: "Turkish (ISO 8859-9)",
    labelShort: "ISO 8859-9",
    order: 33
  },
  windows1258: {
    labelLong: "Vietnamese (Windows 1258)",
    labelShort: "Windows 1258",
    order: 34
  },
  gbk: {
    labelLong: "Simplified Chinese (GBK)",
    labelShort: "GBK",
    order: 35
  },
  gb18030: {
    labelLong: "Simplified Chinese (GB18030)",
    labelShort: "GB18030",
    order: 36
  },
  cp950: {
    labelLong: "Traditional Chinese (Big5)",
    labelShort: "Big5",
    order: 37,
    guessableName: "Big5"
  },
  big5hkscs: {
    labelLong: "Traditional Chinese (Big5-HKSCS)",
    labelShort: "Big5-HKSCS",
    order: 38
  },
  shiftjis: {
    labelLong: "Japanese (Shift JIS)",
    labelShort: "Shift JIS",
    order: 39,
    guessableName: "SHIFT_JIS"
  },
  eucjp: {
    labelLong: "Japanese (EUC-JP)",
    labelShort: "EUC-JP",
    order: 40,
    guessableName: "EUC-JP"
  },
  euckr: {
    labelLong: "Korean (EUC-KR)",
    labelShort: "EUC-KR",
    order: 41,
    guessableName: "EUC-KR"
  },
  windows874: {
    labelLong: "Thai (Windows 874)",
    labelShort: "Windows 874",
    order: 42
  },
  iso885911: {
    labelLong: "Latin/Thai (ISO 8859-11)",
    labelShort: "ISO 8859-11",
    order: 43
  },
  koi8ru: {
    labelLong: "Cyrillic (KOI8-RU)",
    labelShort: "KOI8-RU",
    order: 44
  },
  koi8t: {
    labelLong: "Tajik (KOI8-T)",
    labelShort: "KOI8-T",
    order: 45
  },
  gb2312: {
    labelLong: "Simplified Chinese (GB 2312)",
    labelShort: "GB 2312",
    order: 46,
    guessableName: "GB2312"
  },
  cp865: {
    labelLong: "Nordic DOS (CP 865)",
    labelShort: "CP 865",
    order: 47
  },
  cp850: {
    labelLong: "Western European DOS (CP 850)",
    labelShort: "CP 850",
    order: 48
  }
};
p0i = (() => {
  const n = {};
  for (const e in RQ) {
    if (RQ[e].guessableName) {
      n[e] = RQ[e];
    }
  }
  return n;
})();

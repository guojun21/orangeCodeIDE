"use strict";

// Module: out-build/vs/editor/browser/viewParts/minimap/minimapCharSheet.js
// Offset: 1673360 (bundle byte offset)
// Size: 688 bytes
(function (n) {
  n[n.START_CH_CODE = 32] = "START_CH_CODE";
  n[n.END_CH_CODE = 126] = "END_CH_CODE";
  n[n.UNKNOWN_CODE = 65533] = "UNKNOWN_CODE";
  n[n.CHAR_COUNT = 96] = "CHAR_COUNT";
  n[n.SAMPLED_CHAR_HEIGHT = 16] = "SAMPLED_CHAR_HEIGHT";
  n[n.SAMPLED_CHAR_WIDTH = 10] = "SAMPLED_CHAR_WIDTH";
  n[n.BASE_CHAR_HEIGHT = 2] = "BASE_CHAR_HEIGHT";
  n[n.BASE_CHAR_WIDTH = 1] = "BASE_CHAR_WIDTH";
  n[n.RGBA_CHANNELS_CNT = 4] = "RGBA_CHANNELS_CNT";
  n[n.RGBA_SAMPLED_ROW_WIDTH = 3840] = "RGBA_SAMPLED_ROW_WIDTH";
})($Ah ||= {});
qAh = (() => {
  const n = [];
  for (let e = 32; e <= 126; e++) {
    n.push(e);
  }
  n.push(65533);
  return n;
})();
HAh = (n, e) => {
  n -= 32;
  if (n < 0 || n > 96) {
    if (e <= 2) {
      return (n + 96) % 96;
    } else {
      return 95;
    }
  } else {
    return n;
  }
};

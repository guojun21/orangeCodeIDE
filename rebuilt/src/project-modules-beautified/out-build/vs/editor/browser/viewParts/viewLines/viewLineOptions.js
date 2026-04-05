"use strict";

// Module: out-build/vs/editor/browser/viewParts/viewLines/viewLineOptions.js
// Offset: 1653397 (bundle byte offset)
// Size: 1186 bytes
KOn = class {
    constructor(n, e) {
        this.themeType = e;
        const t = n.options;
        const i = t.get(52);
        if (t.get(40) === "off") {
            this.renderWhitespace = t.get(104);
        } else {
            this.renderWhitespace = "none";
        }
        this.renderControlCharacters = t.get(99);
        this.spaceWidth = i.spaceWidth;
        this.middotWidth = i.middotWidth;
        this.wsmiddotWidth = i.wsmiddotWidth;
        this.useMonospaceOptimizations = i.isMonospace && !t.get(33);
        this.canUseHalfwidthRightwardsArrow = i.canUseHalfwidthRightwardsArrow;
        this.lineHeight = t.get(68);
        this.stopRenderingLineAfter = t.get(122);
        this.fontLigatures = t.get(53);
        this.useGpu = t.get(39) === "on";
    }
    equals(n) {
        return this.themeType === n.themeType && this.renderWhitespace === n.renderWhitespace && this.renderControlCharacters === n.renderControlCharacters && this.spaceWidth === n.spaceWidth && this.middotWidth === n.middotWidth && this.wsmiddotWidth === n.wsmiddotWidth && this.useMonospaceOptimizations === n.useMonospaceOptimizations && this.canUseHalfwidthRightwardsArrow === n.canUseHalfwidthRightwardsArrow && this.lineHeight === n.lineHeight && this.stopRenderingLineAfter === n.stopRenderingLineAfter && this.fontLigatures === n.fontLigatures && this.useGpu === n.useGpu;
    }
};

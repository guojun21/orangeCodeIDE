"use strict";

// Module: out-build/vs/base/browser/fastDomNode.js
// Offset: 1436997 (bundle byte offset)
// Size: 4863 bytes
qH = class {
  constructor(n) {
    this.domNode = n;
    this._maxWidth = "";
    this._width = "";
    this._height = "";
    this._top = "";
    this._left = "";
    this._bottom = "";
    this._right = "";
    this._paddingTop = "";
    this._paddingLeft = "";
    this._paddingBottom = "";
    this._paddingRight = "";
    this._fontFamily = "";
    this._fontWeight = "";
    this._fontSize = "";
    this._fontStyle = "";
    this._fontFeatureSettings = "";
    this._fontVariationSettings = "";
    this._textDecoration = "";
    this._lineHeight = "";
    this._letterSpacing = "";
    this._className = "";
    this._display = "";
    this._position = "";
    this._visibility = "";
    this._color = "";
    this._backgroundColor = "";
    this._layerHint = false;
    this._contain = "none";
    this._boxShadow = "";
  }
  focus() {
    this.domNode.focus();
  }
  setMaxWidth(n) {
    const e = Woe(n);
    if (this._maxWidth !== e) {
      this._maxWidth = e;
      this.domNode.style.maxWidth = this._maxWidth;
    }
  }
  setWidth(n) {
    const e = Woe(n);
    if (this._width !== e) {
      this._width = e;
      this.domNode.style.width = this._width;
    }
  }
  setHeight(n) {
    const e = Woe(n);
    if (this._height !== e) {
      this._height = e;
      this.domNode.style.height = this._height;
    }
  }
  setTop(n) {
    const e = Woe(n);
    if (this._top !== e) {
      this._top = e;
      this.domNode.style.top = this._top;
    }
  }
  setLeft(n) {
    const e = Woe(n);
    if (this._left !== e) {
      this._left = e;
      this.domNode.style.left = this._left;
    }
  }
  setBottom(n) {
    const e = Woe(n);
    if (this._bottom !== e) {
      this._bottom = e;
      this.domNode.style.bottom = this._bottom;
    }
  }
  setRight(n) {
    const e = Woe(n);
    if (this._right !== e) {
      this._right = e;
      this.domNode.style.right = this._right;
    }
  }
  setPaddingTop(n) {
    const e = Woe(n);
    if (this._paddingTop !== e) {
      this._paddingTop = e;
      this.domNode.style.paddingTop = this._paddingTop;
    }
  }
  setPaddingLeft(n) {
    const e = Woe(n);
    if (this._paddingLeft !== e) {
      this._paddingLeft = e;
      this.domNode.style.paddingLeft = this._paddingLeft;
    }
  }
  setPaddingBottom(n) {
    const e = Woe(n);
    if (this._paddingBottom !== e) {
      this._paddingBottom = e;
      this.domNode.style.paddingBottom = this._paddingBottom;
    }
  }
  setPaddingRight(n) {
    const e = Woe(n);
    if (this._paddingRight !== e) {
      this._paddingRight = e;
      this.domNode.style.paddingRight = this._paddingRight;
    }
  }
  setFontFamily(n) {
    if (this._fontFamily !== n) {
      this._fontFamily = n;
      this.domNode.style.fontFamily = this._fontFamily;
    }
  }
  setFontWeight(n) {
    if (this._fontWeight !== n) {
      this._fontWeight = n;
      this.domNode.style.fontWeight = this._fontWeight;
    }
  }
  setFontSize(n) {
    const e = Woe(n);
    if (this._fontSize !== e) {
      this._fontSize = e;
      this.domNode.style.fontSize = this._fontSize;
    }
  }
  setFontStyle(n) {
    if (this._fontStyle !== n) {
      this._fontStyle = n;
      this.domNode.style.fontStyle = this._fontStyle;
    }
  }
  setFontFeatureSettings(n) {
    if (this._fontFeatureSettings !== n) {
      this._fontFeatureSettings = n;
      this.domNode.style.fontFeatureSettings = this._fontFeatureSettings;
    }
  }
  setFontVariationSettings(n) {
    if (this._fontVariationSettings !== n) {
      this._fontVariationSettings = n;
      this.domNode.style.fontVariationSettings = this._fontVariationSettings;
    }
  }
  setTextDecoration(n) {
    if (this._textDecoration !== n) {
      this._textDecoration = n;
      this.domNode.style.textDecoration = this._textDecoration;
    }
  }
  setLineHeight(n) {
    const e = Woe(n);
    if (this._lineHeight !== e) {
      this._lineHeight = e;
      this.domNode.style.lineHeight = this._lineHeight;
    }
  }
  setLetterSpacing(n) {
    const e = Woe(n);
    if (this._letterSpacing !== e) {
      this._letterSpacing = e;
      this.domNode.style.letterSpacing = this._letterSpacing;
    }
  }
  setClassName(n) {
    if (this._className !== n) {
      this._className = n;
      this.domNode.className = this._className;
    }
  }
  toggleClassName(n, e) {
    this.domNode.classList.toggle(n, e);
    this._className = this.domNode.className;
  }
  setDisplay(n) {
    if (this._display !== n) {
      this._display = n;
      this.domNode.style.display = this._display;
    }
  }
  setPosition(n) {
    if (this._position !== n) {
      this._position = n;
      this.domNode.style.position = this._position;
    }
  }
  setVisibility(n) {
    if (this._visibility !== n) {
      this._visibility = n;
      this.domNode.style.visibility = this._visibility;
    }
  }
  setColor(n) {
    if (this._color !== n) {
      this._color = n;
      this.domNode.style.color = this._color;
    }
  }
  setBackgroundColor(n) {
    if (this._backgroundColor !== n) {
      this._backgroundColor = n;
      this.domNode.style.backgroundColor = this._backgroundColor;
    }
  }
  setLayerHinting(n) {
    if (this._layerHint !== n) {
      this._layerHint = n;
      this.domNode.style.transform = this._layerHint ? "translate3d(0px, 0px, 0px)" : "";
    }
  }
  setBoxShadow(n) {
    if (this._boxShadow !== n) {
      this._boxShadow = n;
      this.domNode.style.boxShadow = n;
    }
  }
  setContain(n) {
    if (this._contain !== n) {
      this._contain = n;
      this.domNode.style.contain = this._contain;
    }
  }
  setAttribute(n, e) {
    this.domNode.setAttribute(n, e);
  }
  removeAttribute(n) {
    this.domNode.removeAttribute(n);
  }
  appendChild(n) {
    this.domNode.appendChild(n.domNode);
  }
  removeChild(n) {
    this.domNode.removeChild(n.domNode);
  }
};

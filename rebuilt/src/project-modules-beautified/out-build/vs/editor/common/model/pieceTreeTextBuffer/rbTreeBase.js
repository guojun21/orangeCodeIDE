"use strict";

// Module: out-build/vs/editor/common/model/pieceTreeTextBuffer/rbTreeBase.js
// Offset: 1142434 (bundle byte offset)
// Size: 1752 bytes
fOo = class {
  constructor(n, e) {
    this.piece = n;
    this.color = e;
    this.size_left = 0;
    this.lf_left = 0;
    this.parent = this;
    this.left = this;
    this.right = this;
  }
  next() {
    if (this.right !== jb) {
      return jEc(this.right);
    }
    let n = this;
    while (n.parent !== jb && n.parent.left !== n) {
      n = n.parent;
    }
    if (n.parent === jb) {
      return jb;
    } else {
      return n.parent;
    }
  }
  prev() {
    if (this.left !== jb) {
      return ogh(this.left);
    }
    let n = this;
    while (n.parent !== jb && n.parent.right !== n) {
      n = n.parent;
    }
    if (n.parent === jb) {
      return jb;
    } else {
      return n.parent;
    }
  }
  detach() {
    this.parent = null;
    this.left = null;
    this.right = null;
  }
};
(function (n) {
  n[n.Black = 0] = "Black";
  n[n.Red = 1] = "Red";
})(cgh ||= {});
jb = new fOo(null, 0);
jb.parent = jb;
jb.left = jb;
jb.right = jb;
jb.color = 0;

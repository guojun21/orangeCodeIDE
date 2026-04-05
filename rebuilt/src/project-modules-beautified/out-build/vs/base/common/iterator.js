"use strict";

// Module: out-build/vs/base/common/iterator.js
// Offset: 255877 (bundle byte offset)
// Size: 2543 bytes
Js();
(function (n) {
  function e(R) {
    return R && typeof R == "object" && typeof R[Symbol.iterator] == "function";
  }
  n.is = e;
  const t = Object.freeze([]);
  function i() {
    return t;
  }
  n.empty = i;
  function* r(R) {
    yield R;
  }
  n.single = r;
  function s(R) {
    if (e(R)) {
      return R;
    } else {
      return r(R);
    }
  }
  n.wrap = s;
  function o(R) {
    return R || t;
  }
  n.from = o;
  function* a(R) {
    for (let N = R.length - 1; N >= 0; N--) {
      yield R[N];
    }
  }
  n.reverse = a;
  function l(R) {
    return !R || R[Symbol.iterator]().next().done === true;
  }
  n.isEmpty = l;
  function u(R) {
    return R[Symbol.iterator]().next().value;
  }
  n.first = u;
  function d(R, N) {
    let M = 0;
    for (const O of R) {
      if (N(O, M++)) {
        return true;
      }
    }
    return false;
  }
  n.some = d;
  function m(R, N) {
    for (const M of R) {
      if (N(M)) {
        return M;
      }
    }
  }
  n.find = m;
  function* p(R, N) {
    for (const M of R) {
      if (N(M)) {
        yield M;
      }
    }
  }
  n.filter = p;
  function* g(R, N) {
    let M = 0;
    for (const O of R) {
      yield N(O, M++);
    }
  }
  n.map = g;
  function* f(R, N) {
    let M = 0;
    for (const O of R) {
      yield* N(O, M++);
    }
  }
  n.flatMap = f;
  function* A(...R) {
    for (const N of R) {
      if (s0c(N)) {
        yield* N;
      } else {
        yield N;
      }
    }
  }
  n.concat = A;
  function w(R, N, M) {
    let O = M;
    for (const $ of R) {
      O = N(O, $);
    }
    return O;
  }
  n.reduce = w;
  function C(R) {
    let N = 0;
    for (const M of R) {
      N++;
    }
    return N;
  }
  n.length = C;
  function* x(R, N, M = R.length) {
    if (N < -R.length) {
      N = 0;
    }
    if (N < 0) {
      N += R.length;
    }
    if (M < 0) {
      M += R.length;
    } else if (M > R.length) {
      M = R.length;
    }
    for (; N < M; N++) {
      yield R[N];
    }
  }
  n.slice = x;
  function I(R, N = Number.POSITIVE_INFINITY) {
    const M = [];
    if (N === 0) {
      return [M, R];
    }
    const O = R[Symbol.iterator]();
    for (let $ = 0; $ < N; $++) {
      const H = O.next();
      if (H.done) {
        return [M, n.empty()];
      }
      M.push(H.value);
    }
    return [M, {
      [Symbol.iterator]() {
        return O;
      }
    }];
  }
  n.consume = I;
  async function B(R) {
    const N = [];
    for await (const M of R) {
      N.push(M);
    }
    return Promise.resolve(N);
  }
  n.asyncToArray = B;
})(bl ||= {});

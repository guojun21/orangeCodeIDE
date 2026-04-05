"use strict";

// Module: out-build/vs/platform/quickinput/browser/pickerQuickAccess.js
// Offset: 27636160 (bundle byte offset)
// Size: 5371 bytes
vr();
Po();
rt();
Js();
(function (n) {
  n[n.NO_ACTION = 0] = "NO_ACTION";
  n[n.CLOSE_PICKER = 1] = "CLOSE_PICKER";
  n[n.REFRESH_PICKER = 2] = "REFRESH_PICKER";
  n[n.REMOVE_ITEM = 3] = "REMOVE_ITEM";
})(HF ||= {});
nX = class extends at {
  constructor(n, e) {
    super();
    this.prefix = n;
    this.options = e;
  }
  provide(n, e, t) {
    const i = new Ut();
    n.canAcceptInBackground = !!this.options?.canAcceptInBackground;
    n.matchOnLabel = n.matchOnDescription = n.matchOnDetail = n.sortByLabel = false;
    let r;
    const s = i.add(new uo());
    const o = async () => {
      r?.dispose(true);
      n.busy = false;
      const l = s.value = new Ut();
      r = l.add(new Wc(e));
      const u = r.token;
      let d = n.value.substring(this.prefix.length);
      if (!this.options?.shouldSkipTrimPickFilter) {
        d = d.trim();
      }
      const m = this._getPicks(d, l, u, t);
      const p = (f, A) => {
        let w;
        let C;
        if (Rru(f)) {
          w = f.items;
          C = f.active;
        } else {
          w = f;
        }
        if (w.length === 0) {
          if (A) {
            return false;
          }
          if ((d.length > 0 || n.hideInput) && this.options?.noResultsPick) {
            if (Aze(this.options.noResultsPick)) {
              w = [this.options.noResultsPick(d)];
            } else {
              w = [this.options.noResultsPick];
            }
          }
        }
        n.items = w;
        if (C) {
          n.activeItems = [C];
        }
        return true;
      };
      const g = async f => {
        let A = false;
        let w = false;
        await Promise.all([(async () => {
          if ((typeof f.mergeDelay != "number" || !(await Af(f.mergeDelay), u.isCancellationRequested)) && !w) {
            A = p(f.picks, true);
          }
        })(), (async () => {
          n.busy = true;
          try {
            const C = await f.additionalPicks;
            if (u.isCancellationRequested) {
              return;
            }
            let x;
            let I;
            if (Rru(f.picks)) {
              x = f.picks.items;
              I = f.picks.active;
            } else {
              x = f.picks;
            }
            let B;
            let R;
            if (Rru(C)) {
              B = C.items;
              R = C.active;
            } else {
              B = C;
            }
            if (B.length > 0 || !A) {
              let N;
              if (!I && !R) {
                const M = n.activeItems[0];
                if (M && x.indexOf(M) !== -1) {
                  N = M;
                }
              }
              p({
                items: [...x, ...B],
                active: I || R || N
              });
            }
          } finally {
            if (!u.isCancellationRequested) {
              n.busy = false;
            }
            w = true;
          }
        })()]);
      };
      if (m !== null) {
        if (JJg(m)) {
          await g(m);
        } else if (!(m instanceof Promise)) {
          p(m);
        } else {
          n.busy = true;
          try {
            const f = await m;
            if (u.isCancellationRequested) {
              return;
            }
            if (JJg(f)) {
              await g(f);
            } else {
              p(f);
            }
          } finally {
            if (!u.isCancellationRequested) {
              n.busy = false;
            }
          }
        }
      }
    };
    i.add(n.onDidChangeValue(() => o()));
    o();
    i.add(n.onDidAccept(l => {
      if (t?.handleAccept) {
        if (!l.inBackground) {
          n.hide();
        }
        t.handleAccept?.(n.activeItems[0], l.inBackground);
        return;
      }
      const [u] = n.selectedItems;
      if (typeof u?.accept == "function") {
        if (!l.inBackground) {
          n.hide();
        }
        u.accept(n.keyMods, l);
      }
    }));
    const a = async (l, u) => {
      if (typeof u.trigger != "function") {
        return;
      }
      const d = u.buttons?.indexOf(l) ?? -1;
      if (d >= 0) {
        const m = u.trigger(d, n.keyMods);
        const p = typeof m == "number" ? m : await m;
        if (e.isCancellationRequested) {
          return;
        }
        switch (p) {
          case HF.NO_ACTION:
            break;
          case HF.CLOSE_PICKER:
            n.hide();
            break;
          case HF.REFRESH_PICKER:
            o();
            break;
          case HF.REMOVE_ITEM:
            {
              const g = n.items.indexOf(u);
              if (g !== -1) {
                const f = n.items.slice();
                const A = f.splice(g, 1);
                const w = n.activeItems.filter(x => x !== A[0]);
                const C = n.keepScrollPosition;
                n.keepScrollPosition = true;
                n.items = f;
                if (w) {
                  n.activeItems = w;
                }
                n.keepScrollPosition = C;
              }
              break;
            }
        }
      }
    };
    i.add(n.onDidTriggerItemButton(({
      button: l,
      item: u
    }) => a(l, u)));
    i.add(n.onDidTriggerSeparatorButton(({
      button: l,
      separator: u
    }) => a(l, u)));
    return i;
  }
};

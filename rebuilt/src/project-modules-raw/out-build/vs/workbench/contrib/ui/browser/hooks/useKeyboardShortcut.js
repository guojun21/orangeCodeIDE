// Module: out-build/vs/workbench/contrib/ui/browser/hooks/useKeyboardShortcut.js
// Offset: 33883271 (bundle byte offset)
// Size: 474 bytes

Ti(), es(), pP=(n, e)=>{
  const t=wr(), [i, r]=lt(void 0), s=()=>e?.useDefaultKeybindingEvenIfNotActive?t.keybindingService.lookupDefaultKeybindings(n):t.keybindingService.lookupKeybindings(n);
  return An(()=>{
    const o=s().at(0)?.getLabel()??void 0;
    r(o);
    const a=t.keybindingService.onDidUpdateKeybindings(()=>{
      const l=s().at(0)?.getLabel()??void 0;
      r(l)
    });
    Ai(()=>{
      a.dispose()
    })
  }), i
}
}
}), w$f, Emy=
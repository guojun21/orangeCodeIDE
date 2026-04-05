// Module: out-build/vs/platform/layout/browser/zIndexRegistry.js
// Offset: 30784184 (bundle byte offset)
// Size: 2003 bytes

ri(), KC(), vr(), (function(n){
  n[n.Base=0]="Base", n[n.Sash=35]="Sash", n[n.SuggestWidget=40]="SuggestWidget", n[n.Hover=50]="Hover", n[n.DragImage=1e3]="DragImage", n[n.MenubarMenuItemsHolder=2e3]="MenubarMenuItemsHolder", n[n.ContextView=2500]="ContextView", n[n.ModalDialog=2600]="ModalDialog", n[n.PaneDropOverlay=1e4]="PaneDropOverlay"
})(TQ||(TQ={
  
})), h1f=Object.keys(TQ).filter(n=>!isNaN(Number(n))).map(n=>Number(n)).sort((n, e)=>e-n), m1f=class{
  constructor(){
    this.styleSheet=wC(), this.zIndexMap=new Map, this.scheduler=new Hu(()=>this.updateStyleElement(), 200)
  }
  registerZIndex(n, e, t){
    if(this.zIndexMap.get(t))throw new Error(`z-index with name ${t} has already been registered.`);
    const i=n+e;
    if(iiy(i)!==n)throw new Error(`Relative layer: ${n} + z-index: ${e} exceeds next layer ${i}.`);
    return this.zIndexMap.set(t, i), this.scheduler.schedule(), this.getVarName(t)
  }
  getVarName(n){
    return`--z-index-${n}`
  }
  updateStyleElement(){
    th(this.styleSheet);
    let n="";
    this.zIndexMap.forEach((e, t)=>{
      n+=`${this.getVarName(t)}: ${e};
`
    }), uW(":root", n, this.styleSheet)
  }
}, p1f=new m1f
}
});
function hgn(n){
  switch(n.type){
    case Fv.LIGHT:return Xr.fromHex("#F3F3F3");
    case Fv.HIGH_CONTRAST_LIGHT:return Xr.fromHex("#FFFFFF");
    case Fv.HIGH_CONTRAST_DARK:return Xr.fromHex("#000000");
    default:return Xr.fromHex("#252526")
  }
}
var E0a, f1f, Bmu, b1f, _qe, Rmu, v1f, riy, x0a, A1f, T0a, y1f, r_i, w1f, s_i, _1f, o_i, C1f, S1f, siy, oiy, I0a, k1f, aiy, mgn, D0a, E1f, x1f, Pmu, pgn, T1f, ciy, Lmu, I1f, D1f, B1f, B0a, Cqe, R1f, P1f, L1f, N1f, M1f, F1f, liy, uiy, diy, qme, O1f, Nmu, Mmu, a_i, U1f, $1f, hiy, q1f, QEe, ggn, H1f, miy, piy, giy, fiy, Fmu, biy, viy, Aiy, J1f, yiy, wiy, _iy, Omu, cit, G1f, Umu, $mu, W1f, qmu, Q1f, wMe, Sqe, lit, Hmu, Ciy, Jmu, Gmu, Siy, jEe, BV, j1f, uit, Wmu, Qmu, z1f, V1f, kiy, jmu, R0a, K1f, Y1f, Z1f, zmu, X1f, eEf, tEf, Eiy, xiy, nEf, iEf, Tiy, Iiy, Diy, Biy, Riy, Piy, rEf, sEf, mO, s1t, _Me, Liy, oEf, Vmu, o1t, aEf, cEf, Kmu, Niy, lEf, uEf, dEf, $ye, P0a, fgn, hEf, Ymu, mEf, Zmu, Miy, Fiy, Oiy, Uiy, pEf, $iy, qiy, Hiy, Jiy, gEf, fEf, Giy, a1t, Wiy, bEf, Xmu, Qiy, jiy, ziy, Viy, epu, tpu, ky=
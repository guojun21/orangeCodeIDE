// Module: out-build/external/statsig/client-core/UrlConfiguration.js
// Offset: 26678827 (bundle byte offset)
// Size: 621 bytes

Lhn(), Opa(), r2g={
  [Cme._initialize]:"i", [Cme._rgstr]:"e", [Cme._download_config_specs]:"d"
}, qtu=class{
  constructor(n, e, t, i){
    this.customUrl=null, this.fallbackUrls=null, this.endpoint=n, this.endpointDnsKey=r2g[n], e&&(this.customUrl=e), !e&&t&&(this.customUrl=t.endsWith("/")?`${t}${n}`:`${t}/${n}`), i&&(this.fallbackUrls=i);
    const r=zMg[n];
    this.defaultUrl=`${r}/${n}`
  }
  getUrl(){
    return this.customUrl??this.defaultUrl
  }
  getChecksum(){
    const n=(this.fallbackUrls??[]).sort().join(",");
    return Itt(this.customUrl+n)
  }
}
}
}), jpa, zpa, Htu, Jtu, Vpa, Gtu, o2g, qbi, Wtu=
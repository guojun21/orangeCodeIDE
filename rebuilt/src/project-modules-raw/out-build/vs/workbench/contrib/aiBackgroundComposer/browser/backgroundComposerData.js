// Module: out-build/vs/workbench/contrib/aiBackgroundComposer/browser/backgroundComposerData.js
// Offset: 25609247 (bundle byte offset)
// Size: 1188 bytes

gT(), iJ(), jk(), jkA(), (function(n){
  n.DEFAULT="default", n.CURRENT="current", n.CURRENT_WITH_CHANGES="current-with-changes"
})(rP||(rP={
  
})), m_g=1, p_g=new Set(["pyc", "pyo", "pyd", "exe", "dll", "so", "dylib", "a", "lib", "o", "obj", "png", "jpg", "jpeg", "gif", "bmp", "ico", "tiff", "webp", "svg", "mp4", "avi", "mov", "wmv", "flv", "webm", "mkv", "mp3", "wav", "flac", "aac", "ogg", "wma", "zip", "tar", "gz", "bz2", "xz", "rar", "7z", "pdf", "doc", "docx", "xls", "xlsx", "ppt", "pptx", "ttf", "otf", "woff", "woff2", "eot", "db", "sqlite", "sqlite3", "bin", "dat", "dmg", "iso", "img"])
}
});
function Y9(n, e){
  if(!n)throw new Error(e)
}
function Sua(n){
  if(typeof n!="number")throw new Error("invalid int 32: "+typeof n);
  if(!Number.isInteger(n)||n>A_g||n<y_g)throw new Error("invalid int 32: "+n)
}
function ezl(n){
  if(typeof n!="number")throw new Error("invalid uint 32: "+typeof n);
  if(!Number.isInteger(n)||n>v_g||n<0)throw new Error("invalid uint 32: "+n)
}
function g_g(n){
  if(typeof n!="number")throw new Error("invalid float 32: "+typeof n);
  if(Number.isFinite(n)&&(n>f_g||n<b_g))throw new Error("invalid float 32: "+n)
}
var f_g, b_g, v_g, A_g, y_g, ANe=
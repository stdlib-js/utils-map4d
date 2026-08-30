"use strict";var F=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(l){throw (r=0, l)}};};var E=F(function(x,b){
var m=require('@stdlib/assert-is-array-like-object/dist'),S=require('@stdlib/assert-is-function/dist'),v=require('@stdlib/error-tools-fmtprodmsg/dist');function T(a,r,l){var d,g,f,h,n,u,s,p,w,y,c,e,t,i,o;if(!m(a))throw new TypeError(v('1Vd2O',a));if(!S(r))throw new TypeError(v('1Vd2H',r));for(p=a.length,d=[],e=0;e<p;e++){if(n=a[e],!m(n))throw new TypeError(v('1VdBO',e,n));for(w=n.length,g=[],t=0;t<w;t++){if(u=n[t],!m(u))throw new TypeError(v('1VdBP',e,t,u));for(y=u.length,f=[],i=0;i<y;i++){if(s=u[i],!m(s))throw new TypeError(v('1VdBQ',e,t,i,s));for(c=s.length,h=[],o=0;o<c;o++)h.push(r.call(l,s[o],[e,t,i,o],a));f.push(h)}g.push(f)}d.push(g)}return d}b.exports=T
});var V=E();module.exports=V;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

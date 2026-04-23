"use strict";var F=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var b=F(function(x,c){
var m=require('@stdlib/assert-is-array-like-object/dist'),S=require('@stdlib/assert-is-function/dist'),v=require('@stdlib/error-tools-fmtprodmsg/dist');function T(a,r,E){var l,d,g,f,n,u,s,h,p,w,y,e,t,i,o;if(!m(a))throw new TypeError(v('1Vd2O',a));if(!S(r))throw new TypeError(v('1Vd2H',r));for(h=a.length,l=[],e=0;e<h;e++){if(n=a[e],!m(n))throw new TypeError(v('1VdBO',e,n));for(p=n.length,d=[],t=0;t<p;t++){if(u=n[t],!m(u))throw new TypeError(v('1VdBP',e,t,u));for(w=u.length,g=[],i=0;i<w;i++){if(s=u[i],!m(s))throw new TypeError(v('1VdBQ',e,t,i,s));for(y=s.length,f=[],o=0;o<y;o++)f.push(r.call(E,s[o],[e,t,i,o],a));g.push(f)}d.push(g)}l.push(d)}return l}c.exports=T
});var V=b();module.exports=V;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

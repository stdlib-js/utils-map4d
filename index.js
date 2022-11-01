// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).map4d=t()}(this,(function(){"use strict";var e=Math.floor;function t(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&(r=t.length,e(r)===r)&&t.length>=0&&t.length<=4294967295;var r}var r=/./,n="function"==typeof Object.defineProperty?Object.defineProperty:null;var o,i=Object.defineProperty,u=Object.prototype,f=u.toString,l=u.__defineGetter__,c=u.__defineSetter__,a=u.__lookupGetter__,p=u.__lookupSetter__;o=function(){try{return n({},"x",{}),!0}catch(e){return!1}}()?i:function(e,t,r){var n,o,i,y;if("object"!=typeof e||null===e||"[object Array]"===f.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===f.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(a.call(e,t)||p.call(e,t)?(n=e.__proto__,e.__proto__=u,delete e[t],e[t]=r.value,e.__proto__=n):e[t]=r.value),i="get"in r,y="set"in r,o&&(i||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&l&&l.call(e,t,r.get),y&&c&&c.call(e,t,r.set),e};var y=o;function s(e,t,r){y(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function b(e){return"boolean"==typeof e}var d="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return d&&"symbol"==typeof Symbol.toStringTag}var h=Object.prototype.toString;var w=Object.prototype.hasOwnProperty;var g="function"==typeof Symbol?Symbol.toStringTag:"";var m=v()?function(e){var t,r,n,o,i;if(null==e)return h.call(e);r=e[g],i=g,t=null!=(o=e)&&w.call(o,i);try{e[g]=void 0}catch(t){return h.call(e)}return n=h.call(e),t?e[g]=r:delete e[g],n}:function(e){return h.call(e)},_=Boolean.prototype.toString;var j=v();function E(e){return"object"==typeof e&&(e instanceof Boolean||(j?function(e){try{return _.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===m(e)))}function S(e){return b(e)||E(e)}function T(){return new Function("return this;")()}s(S,"isPrimitive",b),s(S,"isObject",E);var O="object"==typeof self?self:null,A="object"==typeof window?window:null,k="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},B="object"==typeof k?k:null;var C=function(e){if(arguments.length){if(!b(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return T()}if(O)return O;if(A)return A;if(B)return B;throw new Error("unexpected error. Unable to resolve global object.")}(),P=C.document&&C.document.childNodes,x=Int8Array;function V(){return/^\s*function\s*([^(]*)/i}var G=/^\s*function\s*([^(]*)/i;s(V,"REGEXP",G);var L=Array.isArray?Array.isArray:function(e){return"[object Array]"===m(e)};function M(e){return null!==e&&"object"==typeof e}function F(e){var t,r,n,o;if(("Object"===(r=m(e).slice(8,-1))||"Error"===r)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(t=G.exec(n.toString()))return t[1]}return M(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}s(M,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(t){var r,n;if(!L(t))return!1;if(0===(r=t.length))return!1;for(n=0;n<r;n++)if(!1===e(t[n]))return!1;return!0}}(M));var I="function"==typeof r||"object"==typeof x||"function"==typeof P?function(e){return F(e).toLowerCase()}:function(e){var t;return null===e?"null":"object"===(t=typeof e)?F(e).toLowerCase():t};function R(){var e,t=arguments,r=t[0],n="https://stdlib.io/e/"+r+"?";for(e=1;e<t.length;e++)n+="&arg[]="+encodeURIComponent(t[e]);return n}return function(e,r,n){var o,i,u,f,l,c,a,p,y,s,b,d,v,h,w;if(!t(e))throw new TypeError(R("0kf2a",e));if("function"!==I(r))throw new TypeError(R("0kf2S",r));for(p=e.length,o=[],d=0;d<p;d++){if(!t(l=e[d]))throw new TypeError(R("0kfCB",d,l));for(y=l.length,i=[],v=0;v<y;v++){if(!t(c=l[v]))throw new TypeError(R("0kfCC",d,v,c));for(s=c.length,u=[],h=0;h<s;h++){if(!t(a=c[h]))throw new TypeError(R("0kfCD",d,v,h,a));for(b=a.length,f=[],w=0;w<b;w++)f.push(r.call(n,a[w],d,v,h,w,e));u.push(f)}i.push(u)}o.push(i)}return o}}));
//# sourceMappingURL=index.js.map

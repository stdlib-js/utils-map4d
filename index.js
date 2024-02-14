// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).map4d=r()}(this,(function(){"use strict";var e=Math.floor;function r(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&(i=r.length,e(i)===i)&&r.length>=0&&r.length<=4294967295;var i}var i=/./,t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty;function a(e){return"number"==typeof e}function o(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function s(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+o(n):o(n)+e,t&&(e="-"+e)),e}var c=String.prototype.toLowerCase,l=String.prototype.toUpperCase;function p(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!a(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=s(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=s(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===l.call(e.specifier)?l.call(i):c.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function u(e){return"string"==typeof e}var f=Math.abs,g=String.prototype.toLowerCase,d=String.prototype.toUpperCase,h=String.prototype.replace,w=/e\+(\d)$/,b=/e-(\d)$/,v=/^(\d+)$/,y=/^(\d+)e/,m=/\.0$/,E=/\.0*e/,x=/(\..*[^0])0*e/;function k(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!a(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":f(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=h.call(i,x,"$1e"),i=h.call(i,E,"e"),i=h.call(i,m,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=h.call(i,w,"e+0$1"),i=h.call(i,b,"e-0$1"),e.alternate&&(i=h.call(i,v,"$1."),i=h.call(i,y,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===d.call(e.specifier)?d.call(i):g.call(i)}function S(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function V(e,r,i){var t=r-e.length;return t<0?e:e=i?e+S(t):S(t)+e}var T=String.fromCharCode,j=isNaN,F=Array.isArray;function $(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function _(e){var r,i,t,n,a,o,c,l,f;if(!F(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,l=0;l<e.length;l++)if(u(t=e[l]))o+=t;else{if(r=void 0!==t.precision,!(t=$(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),i=t.flags,f=0;f<i.length;f++)switch(n=i.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,j(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,j(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=p(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!j(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=j(a)?String(t.arg):T(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=k(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=s(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=V(t.arg,t.width,t.padRight)),o+=t.arg||"",c+=1}return o}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function A(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function C(e){var r,i,t,n;for(i=[],n=0,t=I.exec(e);t;)(r=e.slice(n,I.lastIndex-t[0].length)).length&&i.push(r),i.push(A(t)),n=I.lastIndex,t=I.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function R(e){return"string"==typeof e}function Z(e){var r,i;if(!R(e))throw new TypeError(Z("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[C(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return _.apply(null,r)}var O,L=Object.prototype,W=L.toString,P=L.__defineGetter__,G=L.__defineSetter__,B=L.__lookupGetter__,N=L.__lookupSetter__;O=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?n:function(e,r,i){var t,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===W.call(e))throw new TypeError(Z("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===W.call(i))throw new TypeError(Z("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((n="value"in i)&&(B.call(e,r)||N.call(e,r)?(t=e.__proto__,e.__proto__=L,delete e[r],e[r]=i.value,e.__proto__=t):e[r]=i.value),a="get"in i,o="set"in i,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&P&&P.call(e,r,i.get),o&&G&&G.call(e,r,i.set),e};var U=O;function X(e,r,i){U(e,r,{configurable:!1,enumerable:!1,writable:!1,value:i})}function M(e){return"boolean"==typeof e}function z(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var q=z();function D(){return q&&"symbol"==typeof Symbol.toStringTag}var H=Object.prototype.toString;var J=Object.prototype.hasOwnProperty;function K(e,r){return null!=e&&J.call(e,r)}var Q="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof Q?Q.toStringTag:"";var ee=D()?function(e){var r,i,t;if(null==e)return H.call(e);i=e[Y],r=K(e,Y);try{e[Y]=void 0}catch(r){return H.call(e)}return t=H.call(e),r?e[Y]=i:delete e[Y],t}:function(e){return H.call(e)},re=Boolean,ie=Boolean.prototype.toString;var te=D();function ne(e){return"object"==typeof e&&(e instanceof re||(te?function(e){try{return ie.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===ee(e)))}function ae(e){return M(e)||ne(e)}function oe(){return new Function("return this;")()}X(ae,"isPrimitive",M),X(ae,"isObject",ne);var se="object"==typeof self?self:null,ce="object"==typeof window?window:null,le="object"==typeof global?global:null,pe="object"==typeof globalThis?globalThis:null;var ue=function(e){if(arguments.length){if(!M(e))throw new TypeError(Z("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return oe()}if(pe)return pe;if(se)return se;if(ce)return ce;if(le)return le;throw new Error("unexpected error. Unable to resolve global object.")}(),fe=ue.document&&ue.document.childNodes,ge=Int8Array;function de(){return/^\s*function\s*([^(]*)/i}var he=/^\s*function\s*([^(]*)/i;X(de,"REGEXP",he);var we=z();var be=Object.prototype.toString;var ve="function"==typeof Symbol?Symbol:void 0,ye="function"==typeof ve?ve.toStringTag:"";var me=we&&"symbol"==typeof Symbol.toStringTag?function(e){var r,i,t;if(null==e)return be.call(e);i=e[ye],r=K(e,ye);try{e[ye]=void 0}catch(r){return be.call(e)}return t=be.call(e),r?e[ye]=i:delete e[ye],t}:function(e){return be.call(e)};var Ee=Array.isArray?Array.isArray:function(e){return"[object Array]"===me(e)};function xe(e){return"number"==typeof e}function ke(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function Se(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+ke(n):ke(n)+e,t&&(e="-"+e)),e}var Ve=String.prototype.toLowerCase,Te=String.prototype.toUpperCase;function je(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!xe(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=Se(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=Se(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===Te.call(e.specifier)?Te.call(i):Ve.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function Fe(e){return"string"==typeof e}var $e=Math.abs,_e=String.prototype.toLowerCase,Ie=String.prototype.toUpperCase,Ae=String.prototype.replace,Ce=/e\+(\d)$/,Re=/e-(\d)$/,Ze=/^(\d+)$/,Oe=/^(\d+)e/,Le=/\.0$/,We=/\.0*e/,Pe=/(\..*[^0])0*e/;function Ge(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!xe(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":$e(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=Ae.call(i,Pe,"$1e"),i=Ae.call(i,We,"e"),i=Ae.call(i,Le,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=Ae.call(i,Ce,"e+0$1"),i=Ae.call(i,Re,"e-0$1"),e.alternate&&(i=Ae.call(i,Ze,"$1."),i=Ae.call(i,Oe,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===Ie.call(e.specifier)?Ie.call(i):_e.call(i)}function Be(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function Ne(e,r,i){var t=r-e.length;return t<0?e:e=i?e+Be(t):Be(t)+e}var Ue=String.fromCharCode,Xe=isNaN,Me=Array.isArray;function ze(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function qe(e){var r,i,t,n,a,o,s,c,l;if(!Me(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(Fe(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=ze(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,l=0;l<i.length;l++)switch(n=i.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,Xe(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,Xe(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=je(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!Xe(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Xe(a)?String(t.arg):Ue(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=Ge(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=Se(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Ne(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var De=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function He(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Je(e){var r,i,t,n;for(i=[],n=0,t=De.exec(e);t;)(r=e.slice(n,De.lastIndex-t[0].length)).length&&i.push(r),i.push(He(t)),n=De.lastIndex,t=De.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function Ke(e){return"string"==typeof e}function Qe(e){var r,i;if(!Ke(e))throw new TypeError(Qe("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Je(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return qe.apply(null,r)}function Ye(e){return null!==e&&"object"==typeof e}function er(e){var r,i,t,n;if(("Object"===(i=ee(e).slice(8,-1))||"Error"===i)&&e.constructor){if("string"==typeof(t=e.constructor).name)return t.name;if(r=he.exec(t.toString()))return r[1]}return Ye(n=e)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":i}X(Ye,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(Qe("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var i,t;if(!Ee(r))return!1;if(0===(i=r.length))return!1;for(t=0;t<i;t++)if(!1===e(r[t]))return!1;return!0}}(Ye));var rr="function"==typeof i||"object"==typeof ge||"function"==typeof fe?function(e){return er(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?er(e).toLowerCase():r};function ir(e){return"number"==typeof e}function tr(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function nr(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+tr(n):tr(n)+e,t&&(e="-"+e)),e}var ar=String.prototype.toLowerCase,or=String.prototype.toUpperCase;function sr(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!ir(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=nr(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=nr(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===or.call(e.specifier)?or.call(i):ar.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function cr(e){return"string"==typeof e}var lr=Math.abs,pr=String.prototype.toLowerCase,ur=String.prototype.toUpperCase,fr=String.prototype.replace,gr=/e\+(\d)$/,dr=/e-(\d)$/,hr=/^(\d+)$/,wr=/^(\d+)e/,br=/\.0$/,vr=/\.0*e/,yr=/(\..*[^0])0*e/;function mr(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!ir(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":lr(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=fr.call(i,yr,"$1e"),i=fr.call(i,vr,"e"),i=fr.call(i,br,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=fr.call(i,gr,"e+0$1"),i=fr.call(i,dr,"e-0$1"),e.alternate&&(i=fr.call(i,hr,"$1."),i=fr.call(i,wr,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===ur.call(e.specifier)?ur.call(i):pr.call(i)}function Er(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function xr(e,r,i){var t=r-e.length;return t<0?e:e=i?e+Er(t):Er(t)+e}var kr=String.fromCharCode,Sr=isNaN,Vr=Array.isArray;function Tr(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function jr(e){var r,i,t,n,a,o,s,c,l;if(!Vr(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(cr(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=Tr(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,l=0;l<i.length;l++)switch(n=i.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,Sr(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,Sr(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=sr(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!Sr(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Sr(a)?String(t.arg):kr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=mr(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=nr(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=xr(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var Fr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $r(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function _r(e){var r,i,t,n;for(i=[],n=0,t=Fr.exec(e);t;)(r=e.slice(n,Fr.lastIndex-t[0].length)).length&&i.push(r),i.push($r(t)),n=Fr.lastIndex,t=Fr.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function Ir(e){return"string"==typeof e}function Ar(e){var r,i,t;if(!Ir(e))throw new TypeError(Ar("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=_r(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return jr.apply(null,i)}return function(e,i,t){var n,a,o,s,c,l,p,u,f,g,d,h,w,b,v;if(!r(e))throw new TypeError(Ar("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if("function"!==rr(i))throw new TypeError(Ar("invalid argument. Second argument must be a function. Value: `%s`.",i));for(u=e.length,n=[],h=0;h<u;h++){if(!r(c=e[h]))throw new TypeError(Ar("invalid argument. First argument must be a four-dimensional nested array. Index: `%u`. Value: `%s`.",h,c));for(f=c.length,a=[],w=0;w<f;w++){if(!r(l=c[w]))throw new TypeError(Ar("invalid argument. First argument must be a four-dimensional nested array. Indices: (%u, %u). Value: `%s`.",h,w,l));for(g=l.length,o=[],b=0;b<g;b++){if(!r(p=l[b]))throw new TypeError(Ar("invalid argument. First argument must be a four-dimensional nested array. Indices: (%u, %u, %u). Value: `%s`.",h,w,b,p));for(d=p.length,s=[],v=0;v<d;v++)s.push(i.call(t,p[v],[h,w,b,v],e));o.push(s)}a.push(o)}n.push(a)}return n}}));
//# sourceMappingURL=index.js.map

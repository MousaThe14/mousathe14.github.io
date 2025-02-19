(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var q;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var da="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ea(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=ea(this);function t(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&da(c,a,{configurable:!0,writable:!0,value:b})}}
t("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;da(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&da(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(aa(this))}})}return a});
function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function ka(a){if(!(a instanceof Array)){a=u(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function la(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ma="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)la(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||ma});
var na="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},oa;
if("function"==typeof Object.setPrototypeOf)oa=Object.setPrototypeOf;else{var pa;a:{var qa={a:!0},ra={};try{ra.__proto__=qa;pa=ra.a;break a}catch(a){}pa=!1}oa=pa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var sa=oa;
function v(a,b){a.prototype=na(b.prototype);a.prototype.constructor=a;if(sa)sa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.pa=b.prototype}
function ta(){this.H=!1;this.m=null;this.i=void 0;this.h=1;this.v=this.s=0;this.X=this.j=null}
function ua(a){if(a.H)throw new TypeError("Generator is already running");a.H=!0}
ta.prototype.N=function(a){this.i=a};
function va(a,b){a.j={dc:b,oc:!0};a.h=a.s||a.v}
ta.prototype.return=function(a){this.j={return:a};this.h=this.v};
function w(a,b,c){a.h=c;return{value:b}}
ta.prototype.D=function(a){this.h=a};
function ya(a,b,c){a.s=b;void 0!=c&&(a.v=c)}
function za(a,b){a.h=b;a.s=0}
function Aa(a){a.s=0;var b=a.j.dc;a.j=null;return b}
function Ba(a){a.X=[a.j];a.s=0;a.v=0}
function Ca(a){var b=a.X.splice(0)[0];(b=a.j=a.j||b)?b.oc?a.h=a.s||a.v:void 0!=b.D&&a.v<b.D?(a.h=b.D,a.j=null):a.h=a.v:a.h=0}
function Da(a){this.h=new ta;this.i=a}
function Ea(a,b){ua(a.h);var c=a.h.m;if(c)return Fa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ga(a)}
function Fa(a,b,c,d){try{var e=b.call(a.h.m,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.H=!1,e;var f=e.value}catch(g){return a.h.m=null,va(a.h,g),Ga(a)}a.h.m=null;d.call(a.h,f);return Ga(a)}
function Ga(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.H=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,va(a.h,c)}a.h.H=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.oc)throw b.dc;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ha(a){this.next=function(b){ua(a.h);a.h.m?b=Fa(a,a.h.m.next,b,a.h.N):(a.h.N(b),b=Ga(a));return b};
this.throw=function(b){ua(a.h);a.h.m?b=Fa(a,a.h.m["throw"],b,a.h.N):(va(a.h,b),b=Ga(a));return b};
this.return=function(b){return Ea(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ja(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function x(a){return Ja(new Ha(new Da(a)))}
function Ka(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
t("Reflect.setPrototypeOf",function(a){return a?a:sa?function(b,c){try{return sa(b,c),!0}catch(d){return!1}}:null});
t("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.H=!1;var h=this.m();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.v()})}this.h.push(g)};
var e=fa.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.v=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.m(l)}}}this.h=null};
c.prototype.m=function(g){this.j(function(){throw g;})};
b.prototype.m=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.Gb),reject:g(this.v)}};
b.prototype.Gb=function(g){if(g===this)this.v(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.Gc(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.Fb(g):this.s(g)}};
b.prototype.Fb=function(g){var h=void 0;try{h=g.then}catch(k){this.v(k);return}"function"==typeof h?this.Hc(h,g):this.s(g)};
b.prototype.v=function(g){this.N(2,g)};
b.prototype.s=function(g){this.N(1,g)};
b.prototype.N=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.Hb();this.X()};
b.prototype.Hb=function(){var g=this;e(function(){if(g.Ga()){var h=fa.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.Ga=function(){if(this.H)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.X=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.Gc=function(g){var h=this.m();g.tb(h.resolve,h.reject)};
b.prototype.Hc=function(g,h){var k=this.m();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,p){return"function"==typeof r?function(y){try{l(r(y))}catch(A){m(A)}}:p}
var l,m,n=new b(function(r,p){l=r;m=p});
this.tb(k(g,l),k(h,m));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.tb=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.H=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),m=l.next();!m.done;m=l.next())d(m.value).tb(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(y){return function(A){r[y]=A;p--;0==p&&l(r)}}
var r=[],p=0;do r.push(void 0),p++,d(k.value).tb(n(r.length-1),m),k=h.next();while(!k.done)})};
return b});
t("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!la(k,g)){var l=new c;da(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m.delete(k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!la(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&la(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&la(k,g)&&la(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&la(k,g)&&la(k[g],this.h)?delete k[g][this.h]:!1};
return b});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.h;return ha(function(){if(l){for(;l.head!=h.h;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.data_[l];if(m&&la(h.data_,l))for(h=0;h<m.length;h++){var n=m[h];if(k!==k&&n.key!==n.key||k===n.key)return{id:l,list:m,index:h,entry:n}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this.data_={};this.h=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.data_[l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},l.list.push(l.entry),this.h.previous.next=l.entry,this.h.previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function La(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=La(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
t("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=La(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
t("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
t("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
t("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
function Ma(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.entries",function(a){return a?a:function(){return Ma(this,function(b,c){return[b,c]})}});
t("Array.prototype.keys",function(a){return a?a:function(){return Ma(this,function(b){return b})}});
t("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
t("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
t("Array.prototype.values",function(a){return a?a:function(){return Ma(this,function(b,c){return c})}});
t("Object.setPrototypeOf",function(a){return a||sa});
t("Set",function(a){function b(c){this.h=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)la(b,d)&&c.push([d,b[d]]);return c}});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==La(this,b,"includes").indexOf(b,c||0)}});
var z=this||self;function B(a,b,c){a=a.split(".");c=c||z;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function C(a,b){a=a.split(".");b=b||z;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Na(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Oa(a){var b=Na(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Pa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Qa(a){return Object.prototype.hasOwnProperty.call(a,Ra)&&a[Ra]||(a[Ra]=++Sa)}
var Ra="closure_uid_"+(1E9*Math.random()>>>0),Sa=0;function Ta(a,b,c){return a.call.apply(a.bind,arguments)}
function Ua(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Xa(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Xa=Ta:Xa=Ua;return Xa.apply(null,arguments)}
function D(a,b){function c(){}
c.prototype=b.prototype;a.pa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ld=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Ya(a){return a}
;function Za(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Za);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
D(Za,Error);Za.prototype.name="CustomError";function $a(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.m=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function ab(){}
function bb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var cb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},db=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},eb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},fb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
db(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function gb(a,b){b=cb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function hb(a){return Array.prototype.concat.apply([],arguments)}
function ib(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function jb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Oa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function kb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function lb(a){var b=mb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function nb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function ob(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=ob(a[c]);return b}
var pb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function qb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<pb.length;f++)c=pb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var rb;function sb(){}
function tb(a){return new sb(ub,a)}
var ub={};tb("");var vb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},wb=/&/g,xb=/</g,yb=/>/g,zb=/"/g,Ab=/'/g,Bb=/\x00/g,Hb=/[\x00&<>"']/;function Ib(a,b){this.h=b===Jb?a:""}
Ib.prototype.toString=function(){return this.h.toString()};
var Jb={},Kb=new Ib("about:invalid#zClosurez",Jb);var Lb,Mb=C("CLOSURE_FLAGS"),Nb=Mb&&Mb[610401301];Lb=null!=Nb?Nb:!1;function Ob(){var a=z.navigator;return a&&(a=a.userAgent)?a:""}
var Pb,Qb=z.navigator;Pb=Qb?Qb.userAgentData||null:null;function Rb(a){return Lb?Pb?Pb.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}
function E(a){return-1!=Ob().indexOf(a)}
;function Sb(){return Lb?!!Pb&&0<Pb.brands.length:!1}
function Tb(){return Sb()?!1:E("Trident")||E("MSIE")}
function Ub(){return Sb()?Rb("Chromium"):(E("Chrome")||E("CriOS"))&&!(Sb()?0:E("Edge"))||E("Silk")}
;var Vb={};function Wb(a){this.h=Vb===Vb?a:""}
Wb.prototype.toString=function(){return this.h.toString()};function Xb(a){Hb.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(wb,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(xb,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(yb,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(zb,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(Ab,"&#39;")),-1!=a.indexOf("\x00")&&(a=a.replace(Bb,"&#0;")));return a}
;var Yb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Zb(a){return a?decodeURI(a):a}
function $b(a){return Zb(a.match(Yb)[3]||null)}
function ac(a){var b=a.match(Yb);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function bc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)bc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function cc(a){var b=[],c;for(c in a)bc(c,a[c],b);return b.join("&")}
var dc=/#|$/;function ec(a,b){var c=a.search(dc);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.slice(d,-1!==e?e:0).replace(/\+/g," "))}
;function fc(a){z.setTimeout(function(){throw a;},0)}
;function gc(){return E("iPhone")&&!E("iPod")&&!E("iPad")}
;function hc(a){hc[" "](a);return a}
hc[" "]=function(){};var mc=Sb()?!1:E("Opera"),nc=Tb(),oc=E("Edge"),pc=E("Gecko")&&!(-1!=Ob().toLowerCase().indexOf("webkit")&&!E("Edge"))&&!(E("Trident")||E("MSIE"))&&!E("Edge"),qc=-1!=Ob().toLowerCase().indexOf("webkit")&&!E("Edge");function rc(){var a=z.document;return a?a.documentMode:void 0}
var sc;a:{var tc="",uc=function(){var a=Ob();if(pc)return/rv:([^\);]+)(\)|;)/.exec(a);if(oc)return/Edge\/([\d\.]+)/.exec(a);if(nc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(qc)return/WebKit\/(\S+)/.exec(a);if(mc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
uc&&(tc=uc?uc[1]:"");if(nc){var vc=rc();if(null!=vc&&vc>parseFloat(tc)){sc=String(vc);break a}}sc=tc}var wc=sc,xc;if(z.document&&nc){var yc=rc();xc=yc?yc:parseInt(wc,10)||void 0}else xc=void 0;var zc=xc;var Ac=gc()||E("iPod"),Bc=E("iPad");!E("Android")||Ub();Ub();var Cc=E("Safari")&&!(Ub()||(Sb()?0:E("Coast"))||(Sb()?0:E("Opera"))||(Sb()?0:E("Edge"))||(Sb()?Rb("Microsoft Edge"):E("Edg/"))||(Sb()?Rb("Opera"):E("OPR"))||E("Firefox")||E("FxiOS")||E("Silk")||E("Android"))&&!(gc()||E("iPad")||E("iPod"));var Dc={},Ec=null;
function Fc(a,b){Oa(a);void 0===b&&(b=0);if(!Ec){Ec={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));Dc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===Ec[h]&&(Ec[h]=g)}}}b=Dc[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+l+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var Gc="undefined"!==typeof Uint8Array,Hc=!nc&&"function"===typeof z.btoa;var Ic="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;function Jc(a,b){if(Ic)return a[Ic]|=b;if(void 0!==a.ma)return a.ma|=b;Object.defineProperties(a,{ma:{value:b,configurable:!0,writable:!0,enumerable:!1}});return b}
function Kc(a,b){Ic?a[Ic]&&(a[Ic]&=~b):void 0!==a.ma&&(a.ma&=~b)}
function F(a){var b;Ic?b=a[Ic]:b=a.ma;return null==b?0:b}
function Mc(a,b){Ic?a[Ic]=b:void 0!==a.ma?a.ma=b:Object.defineProperties(a,{ma:{value:b,configurable:!0,writable:!0,enumerable:!1}});return a}
function Nc(a){Jc(a,1);return a}
function Oc(a,b){Mc(b,(a|0)&-51)}
function Pc(a,b){Mc(b,(a|18)&-41)}
;var Qc={};function Rc(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Sc,Tc=Object.freeze(Mc([],23));function Uc(a){if(F(a.M)&2)throw Error();}
function Vc(a){var b=a.length;(b=b?a[b-1]:void 0)&&Rc(b)?b.g=1:(b={},a.push((b.g=1,b)))}
;function Wc(a){return a.displayName||a.name||"unknown type name"}
function Xc(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Wc(b)+" but got "+(a&&Wc(a.constructor)));return a}
function Yc(a,b){var c=F(a),d=c;0===d&&(d|=b&16);d|=b&2;d!==c&&Mc(a,d)}
;function Zc(a){var b=a.h+a.Ia;return a.ha||(a.ha=a.M[b]={})}
function $c(a,b,c){return-1===b?null:b>=a.h?a.ha?a.ha[b]:void 0:c&&a.ha&&(c=a.ha[b],null!=c)?c:a.M[b+a.Ia]}
function G(a,b,c,d){Uc(a);return ad(a,b,c,d)}
function ad(a,b,c,d){a.i&&(a.i=void 0);if(b>=a.h||d)return Zc(a)[b]=c,a;a.M[b+a.Ia]=c;(c=a.ha)&&b in c&&delete c[b];return a}
function bd(a,b,c,d,e){var f=$c(a,b,d);Array.isArray(f)||(f=Tc);var g=F(f);g&1||Nc(f);if(e)g&2||Jc(f,18),c&1||Object.freeze(f);else{e=!(c&2);var h=g&2;c&1||!h?e&&g&16&&!h&&Kc(f,16):(f=Nc(Array.prototype.slice.call(f)),ad(a,b,f,d))}return f}
function fd(a,b,c,d){Uc(a);(c=gd(a,c))&&c!==b&&null!=d&&ad(a,c,void 0,!1);ad(a,b,d)}
function gd(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=$c(a,e)&&(0!==c&&ad(a,c,void 0,!1),c=e)}return c}
function hd(a,b,c){var d=void 0===d?!1:d;var e=$c(a,c,d);var f=F(a.M),g=!1;null==e||"object"!==typeof e||(g=Array.isArray(e))||e.Pb!==Qc?g?(Yc(e,f),b=new b(e)):b=void 0:b=e;b!==e&&null!=b&&ad(a,c,b,d);e=b;if(null==e)return e;F(a.M)&2||(b=e,F(b.M)&2&&(f=id(b,!1),f.i=b,b=f),b!==e&&(e=b,ad(a,c,e,d)));return e}
function H(a,b,c,d){Uc(a);null!=d?Xc(d,b):d=void 0;return ad(a,c,d)}
function jd(a,b,c,d,e){Uc(a);null!=e?Xc(e,b):e=void 0;fd(a,c,d,e)}
function kd(a,b,c,d,e){Uc(a);var f=null==d?Tc:Nc([]);if(null!=d){for(var g=!!d.length,h=0;h<d.length;h++){var k=d[h];Xc(k,b);g=g&&!(F(k.M)&2);f[h]=k.M}b=f;g=(g?8:0)|1;f=F(b);(f&g)!==g&&(Object.isFrozen(b)&&(b=Array.prototype.slice.call(b)),Mc(b,f|g));f=b;a.ca||(a.ca={});a.ca[c]=d}else a.ca&&(a.ca[c]=void 0);return ad(a,c,f,e)}
function ld(a,b,c,d){var e=F(a.M);if(e&2)throw Error();var f=!!(e&2);a.ca||(a.ca={});var g=a.ca[b],h=bd(a,b,3,void 0,f);if(g)!f&&Object.isFrozen(g)&&(g=Array.prototype.slice.call(g),a.ca[b]=g),f=g;else{var k=h;f=[];g=!!(e&2);var l=!!(F(k)&2);h=k;!g&&l&&(k=Array.prototype.slice.call(k));e|=l?2:0;for(var m=0;m<k.length;m++){var n=k[m];var r=c;Array.isArray(n)?(Yc(n,e),n=new r(n)):n=void 0;void 0!==n&&(l||(l=!!(2&F(n.M))),f.push(n))}a.ca[b]=f;l=!l;m=F(k);e=m|33;e=l?e|8:e&-9;m!=e&&(Object.isFrozen(k)&&
(k=Array.prototype.slice.call(k)),Mc(k,e));h!==k&&ad(a,b,k);g&&Jc(f,18);g&&Object.freeze(f)}c=null!=d?Xc(d,c):new c;a=bd(a,b,2,void 0,!1);f.push(c);a.push(c.M);F(c.M)&2&&Kc(a,8)}
function md(a,b){a=$c(a,b);return null==a?"":a}
function nd(a,b){var c=gd(a,od)===b;return $c(a,c?b:-1)}
;var pd;function qd(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a)if(Array.isArray(a)){if(0!==(F(a)&128))return a=Array.prototype.slice.call(a),Vc(a),a}else if(Gc&&null!=a&&a instanceof Uint8Array){if(Hc){for(var b="";10240<a.length;)b+=String.fromCharCode.apply(null,a.subarray(0,10240)),a=a.subarray(10240);b+=String.fromCharCode.apply(null,a);a=btoa(b)}else a=Fc(a);return a}}return a}
;function rd(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&F(a)&1?void 0:f&&F(a)&2?a:sd(a,b,c,void 0!==d,e,f);else if(Rc(a)){var g={},h;for(h in a)g[h]=rd(a[h],b,c,d,e,f);a=g}else a=b(a,d);return a}}
function sd(a,b,c,d,e,f){var g=F(a);d=d?!!(g&16):void 0;a=Array.prototype.slice.call(a);for(var h=0;h<a.length;h++)a[h]=rd(a[h],b,c,d,e,f);c(g,a);return a}
function td(a){return a.Pb===Qc?a.toJSON():qd(a)}
function ud(a,b){a&128&&Vc(b)}
;function vd(a,b,c){c=void 0===c?Pc:c;if(null!=a){if(Gc&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=F(a);if(d&2)return a;if(b&&!(d&32)&&(d&16||0===d))return Mc(a,d|18),a;a=sd(a,vd,d&4?Pc:c,!0,!1,!0);b=F(a);b&4&&b&2&&Object.freeze(a);return a}return a.Pb===Qc?wd(a):a}}
function xd(a,b,c,d,e,f,g){(a=a.ca&&a.ca[c])?(d=0<a.length?a[0].constructor:void 0,f=F(a),f&2||(a=eb(a,wd),Pc(f,a),Object.freeze(a)),kd(b,d,c,a,e)):G(b,c,vd(d,f,g),e)}
function wd(a){if(F(a.M)&2)return a;a=id(a,!0);Jc(a.M,18);return a}
function id(a,b){var c=a.M,d=[];Jc(d,16);var e=a.constructor.h;e&&d.push(e);e=a.ha;if(e){d.length=c.length;var f={};d[d.length-1]=f}0!==(F(c)&128)&&Vc(d);b=b||F(a.M)&2?Pc:Oc;f=a.constructor;F(d);pd=d;d=new f(d);pd=void 0;a.nc&&(d.nc=a.nc.slice());f=!!(F(c)&16);for(var g=e?c.length-1:c.length,h=0;h<g;h++)xd(a,d,h-a.Ia,c[h],!1,f,b);if(e)for(var k in e)c=e[k],g=+k,Number.isNaN(g),xd(a,d,g,c,!0,f,b);return d}
;function J(a,b,c,d){null==a&&(a=pd);pd=void 0;var e=this.constructor.h;if(null==a){a=e?[e]:[];var f=48;var g=!0;d&&(f|=128);Mc(a,f)}else{if(!Array.isArray(a))throw Error();if(e&&e!==a[0])throw Error();f=Jc(a,0)|32;g=0!==(16&f);if(d){if(f|=128,0<a.length){var h=a[a.length-1];if(Rc(h)&&"g"in h){delete h.g;var k=!0,l;for(l in h){k=!1;break}k&&a.pop()}}}else if(128&f)throw Error();Mc(a,f)}this.Ia=e?0:-1;this.ca=void 0;this.M=a;a:{f=this.M.length;e=f-1;if(f&&(f=this.M[e],Rc(f))){this.ha=f;this.h=e-this.Ia;
break a}void 0!==b&&-1<b?(this.h=Math.max(b,e+1-this.Ia),this.ha=void 0):this.h=Number.MAX_VALUE}if(!d&&this.ha&&"g"in this.ha)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(c){b=g&&!0;d=this.h;var m;for(g=0;g<c.length;g++)e=c[g],e<d?(e+=this.Ia,(f=a[e])?yd(f,b):a[e]=Tc):(m||(m=Zc(this)),(f=m[e])?yd(f,b):m[e]=Tc)}F(this.M)}
J.prototype.toJSON=function(){var a=this.M,b;Sc?b=a:b=sd(a,td,ud,void 0,!1,!1);return b};
function zd(a){Sc=!0;try{return JSON.stringify(a.toJSON(),Ad)}finally{Sc=!1}}
J.prototype.clone=function(){return id(this,!1)};
function yd(a,b){if(Array.isArray(a)){var c=F(a),d=1;!b||c&2||(d|=16);(c&d)!==d&&Mc(a,c|d)}}
J.prototype.Pb=Qc;J.prototype.toString=function(){return this.M.toString()};
function Ad(a,b){return qd(b)}
;var Bd=window;tb("csi.gstatic.com");tb("googleads.g.doubleclick.net");tb("partner.googleadservices.com");tb("pubads.g.doubleclick.net");tb("securepubads.g.doubleclick.net");tb("tpc.googlesyndication.com");function Cd(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
q=Cd.prototype;q.clone=function(){return new Cd(this.x,this.y)};
q.equals=function(a){return a instanceof Cd&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
q.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
q.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
q.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Dd(a,b){this.width=a;this.height=b}
q=Dd.prototype;q.clone=function(){return new Dd(this.width,this.height)};
q.aspectRatio=function(){return this.width/this.height};
q.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
q.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
q.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Ed(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Fd(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Gd(a){var b=C("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||z.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Hd(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Id[c])c=Id[c];else{c=String(c);if(!Id[c]){var f=/function\s+([^\(]+)/m.exec(c);Id[c]=f?f[1]:"[Anonymous]"}c=Id[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Hd(a,b){b||(b={});b[Jd(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[Jd(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Hd(a,b));return c}
function Jd(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Id={};/*

 SPDX-License-Identifier: Apache-2.0
*/
var Kd;try{new URL("s://g"),Kd=!0}catch(a){Kd=!1}var Ld=Kd;function Md(a,b){a.removeAttribute("srcdoc");if(b instanceof Ib)b instanceof Ib&&b.constructor===Ib?b=b.h:(Na(b),b="type_error:SafeUrl");else{b:if(Ld){try{var c=new URL(b)}catch(d){c="https:";break b}c=c.protocol}else c:{c=document.createElement("a");try{c.href=b}catch(d){c=void 0;break c}c=c.protocol;c=":"===c||""===c?"https:":c}b="javascript:"!==c?b:void 0}void 0!==b&&(a.src=b);for(b="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");0<
a.sandbox.length;)a.sandbox.remove(a.sandbox.item(0));for(c=0;c<b.length;c++)a.sandbox.supports&&!a.sandbox.supports(b[c])||a.sandbox.add(b[c])}
;function Nd(a){this.cd=a}
function Od(a){return new Nd(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Pd=[Od("data"),Od("http"),Od("https"),Od("mailto"),Od("ftp"),new Nd(function(a){return/^[^:]*([/?#]|$)/.test(a)})];
function Qd(a,b){b=void 0===b?Pd:b;for(var c=0;c<b.length;++c){var d=b[c];if(d instanceof Nd&&d.cd(a))return new Ib(a,Jb)}}
function Rd(a){var b=void 0===b?Pd:b;return Qd(a,b)||Kb}
;function Sd(a){var b=Td;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Ud(){var a=[];Sd(function(b){a.push(b)});
return a}
var Td={sd:"allow-forms",td:"allow-modals",ud:"allow-orientation-lock",vd:"allow-pointer-lock",wd:"allow-popups",xd:"allow-popups-to-escape-sandbox",yd:"allow-presentation",zd:"allow-same-origin",Ad:"allow-scripts",Bd:"allow-top-navigation",Cd:"allow-top-navigation-by-user-activation"},Vd=bb(function(){return Ud()});
function Wd(){var a=Xd(),b={};db(Vd(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Xd(){var a=void 0===a?document:a;return a.createElement("iframe")}
;var Yd=(new Date).getTime();function Zd(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;var $d="client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");ka($d);function ae(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var r=g,p=0;64>p;p+=4)r[p/4]=n[p]<<24|n[p+1]<<16|n[p+2]<<8|n[p+3];for(p=16;80>p;p++)n=r[p-3]^r[p-8]^r[p-14]^r[p-16],r[p]=(n<<1|n>>>31)&4294967295;n=e[0];var y=e[1],A=e[2],I=e[3],O=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var T=I^y&(A^I);var Q=1518500249}else T=y^A^I,Q=1859775393;else 60>p?(T=y&A|I&(y|A),Q=2400959708):(T=y^A^I,Q=3395469782);T=((n<<5|n>>>27)&4294967295)+T+O+Q+r[p]&4294967295;O=I;I=A;A=(y<<30|y>>>2)&4294967295;y=n;n=T}e[0]=e[0]+n&4294967295;e[1]=e[1]+y&4294967295;e[2]=
e[2]+A&4294967295;e[3]=e[3]+I&4294967295;e[4]=e[4]+O&4294967295}
function c(n,r){if("string"===typeof n){n=unescape(encodeURIComponent(n));for(var p=[],y=0,A=n.length;y<A;++y)p.push(n.charCodeAt(y));n=p}r||(r=n.length);p=0;if(0==l)for(;p+64<r;)b(n.slice(p,p+64)),p+=64,m+=64;for(;p<r;)if(f[l++]=n[p++],m++,64==l)for(l=0,b(f);p+64<r;)b(n.slice(p,p+64)),p+=64,m+=64}
function d(){var n=[],r=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var p=63;56<=p;p--)f[p]=r&255,r>>>=8;b(f);for(p=r=0;5>p;p++)for(var y=24;0<=y;y-=8)n[r++]=e[p]>>y&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,Mc:function(){for(var n=d(),r="",p=0;p<n.length;p++)r+="0123456789ABCDEF".charAt(Math.floor(n[p]/16))+"0123456789ABCDEF".charAt(n[p]%16);return r}}}
;function be(a,b,c){var d=String(z.location.href);return d&&a&&b?[b,ce(Zd(d),a,c||null)].join(" "):null}
function ce(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],db(d,function(h){e.push(h)}),de(e.join(" "));
var f=[],g=[];db(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];db(d,function(h){e.push(h)});
a=de(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function de(a){var b=ae();b.update(a);return b.Mc().toLowerCase()}
;var ee={};function fe(a){this.h=a||{cookie:""}}
q=fe.prototype;q.isEnabled=function(){if(!z.navigator.cookieEnabled)return!1;if(this.h.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{Mb:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
q.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Td;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Mb}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
q.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=vb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
q.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Mb:0,path:b,domain:c});return d};
q.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=vb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var ge=new fe("undefined"==typeof document?null:document);function he(a){return!!ee.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function ie(a,b,c,d){(a=z[a])||(a=(new fe(document)).get(b));return a?be(a,c,d):null}
function je(a){var b=void 0===b?!1:b;var c=Zd(String(z.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=z.__SAPISID||z.__APISID||z.__3PSAPISID||z.__OVERRIDE_SID;he(e)&&(f=f||z.__1PSAPISID);if(f)e=!0;else{var g=new fe(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID")||g.get("OSID");he(e)&&(f=f||g.get("__Secure-1PAPISID"));e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?z.__SAPISID:z.__APISID,e||(e=new fe(document),
e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?be(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&he(b)&&((b=ie("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=ie("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;"undefined"!==typeof TextDecoder&&new TextDecoder;var ke="undefined"!==typeof TextEncoder?new TextEncoder:null,le=ke?function(a){return ke.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function me(){this.j=this.j;this.v=this.v}
me.prototype.j=!1;me.prototype.dispose=function(){this.j||(this.j=!0,this.Sa())};
me.prototype.Sa=function(){if(this.v)for(;this.v.length;)this.v.shift()()};function pe(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
pe.prototype.stopPropagation=function(){this.j=!0};
pe.prototype.preventDefault=function(){this.defaultPrevented=!0};var qe=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{z.addEventListener("test",function(){},b),z.removeEventListener("test",function(){},b)}catch(c){}return a}();function re(a,b){pe.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
D(re,pe);var se={2:"touch",3:"pen",4:"mouse"};
re.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(pc){a:{try{hc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:se[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&re.pa.preventDefault.call(this)};
re.prototype.stopPropagation=function(){re.pa.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
re.prototype.preventDefault=function(){re.pa.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var te="closure_listenable_"+(1E6*Math.random()|0);var ue=0;function ve(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.xb=e;this.key=++ue;this.lb=this.sb=!1}
function we(a){a.lb=!0;a.listener=null;a.proxy=null;a.src=null;a.xb=null}
;function xe(a){this.src=a;this.listeners={};this.h=0}
xe.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=ye(a,b,d,e);-1<g?(b=a[g],c||(b.sb=!1)):(b=new ve(b,this.src,f,!!d,e),b.sb=c,a.push(b));return b};
xe.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=ye(e,b,c,d);return-1<b?(we(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function ze(a,b){var c=b.type;c in a.listeners&&gb(a.listeners[c],b)&&(we(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function ye(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.lb&&f.listener==b&&f.capture==!!c&&f.xb==d)return e}return-1}
;var Ae="closure_lm_"+(1E6*Math.random()|0),Be={},Ce=0;function De(a,b,c,d,e){if(d&&d.once)Ee(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)De(a,b[f],c,d,e);else c=Fe(c),a&&a[te]?a.Ka(b,c,Pa(d)?!!d.capture:!!d,e):Ge(a,b,c,!1,d,e)}
function Ge(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Pa(e)?!!e.capture:!!e,h=He(a);h||(a[Ae]=h=new xe(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Ie();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)qe||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Je(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Ce++}}
function Ie(){function a(c){return b.call(a.src,a.listener,c)}
var b=Ke;return a}
function Ee(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ee(a,b[f],c,d,e);else c=Fe(c),a&&a[te]?a.h.add(String(b),c,!0,Pa(d)?!!d.capture:!!d,e):Ge(a,b,c,!0,d,e)}
function Le(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Le(a,b[f],c,d,e);else(d=Pa(d)?!!d.capture:!!d,c=Fe(c),a&&a[te])?a.h.remove(String(b),c,d,e):a&&(a=He(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=ye(b,c,d,e)),(c=-1<a?b[a]:null)&&Me(c))}
function Me(a){if("number"!==typeof a&&a&&!a.lb){var b=a.src;if(b&&b[te])ze(b.h,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Je(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Ce--;(c=He(b))?(ze(c,a),0==c.h&&(c.src=null,b[Ae]=null)):we(a)}}}
function Je(a){return a in Be?Be[a]:Be[a]="on"+a}
function Ke(a,b){if(a.lb)a=!0;else{b=new re(b,this);var c=a.listener,d=a.xb||a.src;a.sb&&Me(a);a=c.call(d,b)}return a}
function He(a){a=a[Ae];return a instanceof xe?a:null}
var Ne="__closure_events_fn_"+(1E9*Math.random()>>>0);function Fe(a){if("function"===typeof a)return a;a[Ne]||(a[Ne]=function(b){return a.handleEvent(b)});
return a[Ne]}
;function Oe(){me.call(this);this.h=new xe(this);this.Ga=this;this.N=null}
D(Oe,me);Oe.prototype[te]=!0;Oe.prototype.addEventListener=function(a,b,c,d){De(this,a,b,c,d)};
Oe.prototype.removeEventListener=function(a,b,c,d){Le(this,a,b,c,d)};
function Pe(a,b){var c=a.N;if(c){var d=[];for(var e=1;c;c=c.N)d.push(c),++e}a=a.Ga;c=b.type||b;"string"===typeof b?b=new pe(b,a):b instanceof pe?b.target=b.target||a:(e=b,b=new pe(c,a),qb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=Qe(g,c,!0,b)&&e}b.j||(g=b.h=a,e=Qe(g,c,!0,b)&&e,b.j||(e=Qe(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=Qe(g,c,!1,b)&&e}
Oe.prototype.Sa=function(){Oe.pa.Sa.call(this);if(this.h){var a=this.h,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,we(d[e]);delete a.listeners[c];a.h--}}this.N=null};
Oe.prototype.Ka=function(a,b,c,d){return this.h.add(String(a),b,!1,c,d)};
function Qe(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.lb&&g.capture==c){var h=g.listener,k=g.xb||g.src;g.sb&&ze(a.h,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Re(a){Oe.call(this);var b=this;this.X=this.m=0;this.ia=null!=a?a:{ka:function(e,f){return setTimeout(e,f)},
Qa:function(e){clearTimeout(e)}};
var c,d;this.i=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.s=function(){return x(function(e){return w(e,Se(b),0)})};
window.addEventListener("offline",this.s);window.addEventListener("online",this.s);this.X||Te(this)}
v(Re,Oe);function Ue(){var a=Ve;Re.h||(Re.h=new Re(a));return Re.h}
Re.prototype.dispose=function(){window.removeEventListener("offline",this.s);window.removeEventListener("online",this.s);this.ia.Qa(this.X);delete Re.h};
Re.prototype.da=function(){return this.i};
function Te(a){a.X=a.ia.ka(function(){var b;return x(function(c){if(1==c.h)return a.i?(null==(b=window.navigator)?0:b.onLine)?c.D(3):w(c,Se(a),3):w(c,Se(a),3);Te(a);c.h=0})},3E4)}
function Se(a,b){return a.H?a.H:a.H=new Promise(function(c){var d,e,f,g;return x(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,ya(h,2,3),d&&(a.m=a.ia.ka(function(){d.abort()},b||2E4)),w(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:Ba(h);a.H=void 0;a.m&&(a.ia.Qa(a.m),a.m=0);g!==a.i&&(a.i=g,a.i?Pe(a,"networkstatus-online"):Pe(a,"networkstatus-offline"));c(g);Ca(h);break;case 2:Aa(h),g=!1,h.D(3)}})})}
;function We(){this.data_=[];this.h=-1}
We.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data_[a]!==b&&(this.data_[a]=b,this.h=-1)};
We.prototype.get=function(a){return!!this.data_[a]};
function Xe(a){-1===a.h&&(a.h=fb(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function Ye(a){J.call(this,a)}
v(Ye,J);function Ze(a){J.call(this,a,-1,$e)}
v(Ze,J);function af(a,b){return G(a,2,b)}
function bf(a,b){return G(a,3,b)}
function cf(a,b){return G(a,4,b)}
function df(a,b){return G(a,5,b)}
function ef(a,b){return G(a,9,b)}
function ff(a,b){return kd(a,Ye,10,b)}
function gf(a,b){return G(a,11,b)}
function hf(a,b){return G(a,1,b)}
function jf(a,b){return G(a,7,b)}
var $e=[10,6];var kf="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function lf(a){var b;return null!=(b=a.google_tag_data)?b:a.google_tag_data={}}
function mf(a){var b,c;return"function"===typeof(null==(b=a.navigator)?void 0:null==(c=b.userAgentData)?void 0:c.getHighEntropyValues)}
function nf(){var a=window;if(!mf(a))return null;var b=lf(a);if(b.uach_promise)return b.uach_promise;a=a.navigator.userAgentData.getHighEntropyValues(kf).then(function(c){null!=b.uach||(b.uach=c);return c});
return b.uach_promise=a}
function of(a){var b;return gf(ff(df(af(hf(cf(jf(ef(bf(new Ze,a.architecture||""),a.bitness||""),a.mobile||!1),a.model||""),a.platform||""),a.platformVersion||""),a.uaFullVersion||""),(null==(b=a.fullVersionList)?void 0:b.map(function(c){var d=new Ye;d=G(d,1,c.brand);return G(d,2,c.version)}))||[]),a.wow64||!1)}
function pf(){var a,b;return null!=(b=null==(a=nf())?void 0:a.then(function(c){return of(c)}))?b:null}
;function qf(a,b){this.j=a;this.m=b;this.i=0;this.h=null}
qf.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function rf(a,b){a.m(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;var sf;function tf(){var a=z.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!E("Presto")&&(a=function(){var e=Ed();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Xa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!Tb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Zb;c.Zb=null;e()}};
return function(e){d.next={Zb:e};d=d.next;b.port2.postMessage(0)}}return function(e){z.setTimeout(e,0)}}
;function uf(){this.i=this.h=null}
uf.prototype.add=function(a,b){var c=vf.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
uf.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var vf=new qf(function(){return new wf},function(a){return a.reset()});
function wf(){this.next=this.scope=this.h=null}
wf.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
wf.prototype.reset=function(){this.next=this.scope=this.h=null};var xf,yf=!1,zf=new uf;function Af(a,b){xf||Bf();yf||(xf(),yf=!0);zf.add(a,b)}
function Bf(){if(z.Promise&&z.Promise.resolve){var a=z.Promise.resolve(void 0);xf=function(){a.then(Cf)}}else xf=function(){var b=Cf;
"function"!==typeof z.setImmediate||z.Window&&z.Window.prototype&&(Sb()||!E("Edge"))&&z.Window.prototype.setImmediate==z.setImmediate?(sf||(sf=tf()),sf(b)):z.setImmediate(b)}}
function Cf(){for(var a;a=zf.remove();){try{a.h.call(a.scope)}catch(b){fc(b)}rf(vf,a)}yf=!1}
;function Df(a,b){this.h=a[z.Symbol.iterator]();this.i=b}
Df.prototype[Symbol.iterator]=function(){return this};
Df.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value),done:a.done}};
function Ef(a,b){return new Df(a,b)}
;function Ff(){this.blockSize=-1}
;function Gf(){this.blockSize=-1;this.blockSize=64;this.h=[];this.v=[];this.s=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.m=this.i=0;this.reset()}
D(Gf,Ff);Gf.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.m=this.i=0};
function Hf(a,b,c){c||(c=0);var d=a.s;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
Gf.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.v,f=this.i;d<b;){if(0==f)for(;d<=c;)Hf(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Hf(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Hf(this,e);f=0;break}}this.i=f;this.m+=b}};
Gf.prototype.digest=function(){var a=[],b=8*this.m;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.v[c]=b&255,b/=256;Hf(this,this.v);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function If(){}
If.prototype.next=function(){return Jf};
var Jf={done:!0,value:void 0};function Kf(a){return{value:a,done:!1}}
If.prototype.ja=function(){return this};function Lf(a){if(a instanceof Mf||a instanceof Nf||a instanceof Of)return a;if("function"==typeof a.next)return new Mf(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Mf(function(){return a[Symbol.iterator]()});
if("function"==typeof a.ja)return new Mf(function(){return a.ja()});
throw Error("Not an iterator or iterable.");}
function Mf(a){this.i=a}
Mf.prototype.ja=function(){return new Nf(this.i())};
Mf.prototype[Symbol.iterator]=function(){return new Of(this.i())};
Mf.prototype.h=function(){return new Of(this.i())};
function Nf(a){this.i=a}
v(Nf,If);Nf.prototype.next=function(){return this.i.next()};
Nf.prototype[Symbol.iterator]=function(){return new Of(this.i)};
Nf.prototype.h=function(){return new Of(this.i)};
function Of(a){Mf.call(this,function(){return a});
this.j=a}
v(Of,Mf);Of.prototype.next=function(){return this.j.next()};function Pf(a,b){this.i={};this.h=[];this.j=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Pf)for(c=Qf(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Qf(a){Rf(a);return a.h.concat()}
q=Pf.prototype;q.has=function(a){return Sf(this.i,a)};
q.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||Tf;Rf(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Tf(a,b){return a===b}
q.clear=function(){this.i={};this.j=this.size=this.h.length=0};
q.remove=function(a){return this.delete(a)};
q.delete=function(a){return Sf(this.i,a)?(delete this.i[a],--this.size,this.j++,this.h.length>2*this.size&&Rf(this),!0):!1};
function Rf(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];Sf(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],Sf(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
q.get=function(a,b){return Sf(this.i,a)?this.i[a]:b};
q.set=function(a,b){Sf(this.i,a)||(this.size+=1,this.h.push(a),this.j++);this.i[a]=b};
q.forEach=function(a,b){for(var c=Qf(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
q.clone=function(){return new Pf(this)};
q.keys=function(){return Lf(this.ja(!0)).h()};
q.values=function(){return Lf(this.ja(!1)).h()};
q.entries=function(){var a=this;return Ef(this.keys(),function(b){return[b,a.get(b)]})};
q.ja=function(a){Rf(this);var b=0,c=this.j,d=this,e=new If;e.next=function(){if(c!=d.j)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return Jf;var f=d.h[b++];return Kf(a?f:d.i[f])};
return e};
function Sf(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;var Uf=z.JSON.stringify;function Vf(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Wf(a){this.h=0;this.H=void 0;this.m=this.i=this.j=null;this.v=this.s=!1;if(a!=ab)try{var b=this;a.call(void 0,function(c){Xf(b,2,c)},function(c){Xf(b,3,c)})}catch(c){Xf(this,3,c)}}
function Yf(){this.next=this.context=this.i=this.j=this.h=null;this.m=!1}
Yf.prototype.reset=function(){this.context=this.i=this.j=this.h=null;this.m=!1};
var Zf=new qf(function(){return new Yf},function(a){a.reset()});
function $f(a,b,c){var d=Zf.get();d.j=a;d.i=b;d.context=c;return d}
Wf.prototype.then=function(a,b,c){return ag(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Wf.prototype.$goog_Thenable=!0;Wf.prototype.cancel=function(a){if(0==this.h){var b=new bg(a);Af(function(){cg(this,b)},this)}};
function cg(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.m||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?cg(c,b):(f?(d=f,d.next==c.m&&(c.m=d),d.next=d.next.next):dg(c),eg(c,e,3,b)))}a.j=null}else Xf(a,3,b)}
function fg(a,b){a.i||2!=a.h&&3!=a.h||gg(a);a.m?a.m.next=b:a.i=b;a.m=b}
function ag(a,b,c,d){var e=$f(null,null,null);e.h=new Wf(function(f,g){e.j=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.i=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof bg?g(h):f(k)}catch(l){g(l)}}:g});
e.h.j=a;fg(a,e);return e.h}
Wf.prototype.X=function(a){this.h=0;Xf(this,2,a)};
Wf.prototype.Ga=function(a){this.h=0;Xf(this,3,a)};
function Xf(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.X,f=a.Ga;if(d instanceof Wf){fg(d,$f(e||ab,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Pa(d))try{var k=d.then;if("function"===typeof k){hg(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.H=c,a.h=b,a.j=null,gg(a),3!=b||c instanceof bg||ig(a,c))}}
function hg(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function gg(a){a.s||(a.s=!0,Af(a.N,a))}
function dg(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.m=null);return b}
Wf.prototype.N=function(){for(var a;a=dg(this);)eg(this,a,this.h,this.H);this.s=!1};
function eg(a,b,c,d){if(3==c&&b.i&&!b.m)for(;a&&a.v;a=a.j)a.v=!1;if(b.h)b.h.j=null,jg(b,c,d);else try{b.m?b.j.call(b.context):jg(b,c,d)}catch(e){kg.call(null,e)}rf(Zf,b)}
function jg(a,b,c){2==b?a.j.call(a.context,c):a.i&&a.i.call(a.context,c)}
function ig(a,b){a.v=!0;Af(function(){a.v&&kg.call(null,b)})}
var kg=fc;function bg(a){Za.call(this,a)}
D(bg,Za);bg.prototype.name="cancel";function K(a){me.call(this);this.H=1;this.m=[];this.s=0;this.h=[];this.i={};this.N=!!a}
D(K,me);q=K.prototype;q.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.H;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.H=e+3;d.push(e);return e};
function lg(a,b,c){var d=mg;if(a=d.i[a]){var e=d.h;(a=a.find(function(f){return e[f+1]==b&&e[f+2]==c}))&&d.nb(a)}}
q.nb=function(a){var b=this.h[a];if(b){var c=this.i[b];0!=this.s?(this.m.push(a),this.h[a+1]=function(){}):(c&&gb(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
q.ab=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.N)for(e=0;e<c.length;e++){var g=c[e];ng(this.h[g+1],this.h[g+2],d)}else{this.s++;try{for(e=0,f=c.length;e<f&&!this.j;e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.s--,0<this.m.length&&0==this.s)for(;c=this.m.pop();)this.nb(c)}}return 0!=e}return!1};
function ng(a,b,c){Af(function(){a.apply(b,c)})}
q.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.nb,this),delete this.i[a])}else this.h.length=0,this.i={}};
q.Sa=function(){K.pa.Sa.call(this);this.clear();this.m.length=0};function og(a){this.h=a}
og.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,Uf(b))};
og.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
og.prototype.remove=function(a){this.h.remove(a)};function pg(a){this.h=a}
D(pg,og);function qg(a){this.data=a}
function rg(a){return void 0===a||a instanceof qg?a:new qg(a)}
pg.prototype.set=function(a,b){pg.pa.set.call(this,a,rg(b))};
pg.prototype.i=function(a){a=pg.pa.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
pg.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function sg(a){this.h=a}
D(sg,pg);sg.prototype.set=function(a,b,c){if(b=rg(b)){if(c){if(c<Date.now()){sg.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}sg.pa.set.call(this,a,b)};
sg.prototype.i=function(a){var b=sg.pa.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())sg.prototype.remove.call(this,a);else return b}};function tg(){}
;function ug(){}
D(ug,tg);ug.prototype[Symbol.iterator]=function(){return Lf(this.ja(!0)).h()};
ug.prototype.clear=function(){var a=Array.from(this);a=u(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function vg(a){this.h=a}
D(vg,ug);q=vg.prototype;q.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
q.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
q.remove=function(a){this.h.removeItem(a)};
q.ja=function(a){var b=0,c=this.h,d=new If;d.next=function(){if(b>=c.length)return Jf;var e=c.key(b++);if(a)return Kf(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Kf(e)};
return d};
q.clear=function(){this.h.clear()};
q.key=function(a){return this.h.key(a)};function wg(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
D(wg,vg);function xg(a,b){this.i=a;this.h=null;var c;if(c=nc)c=!(9<=Number(zc));if(c){yg||(yg=new Pf);this.h=yg.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),yg.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
D(xg,ug);var zg={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},yg=null;function Ag(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return zg[b]})}
q=xg.prototype;q.set=function(a,b){this.h.setAttribute(Ag(a),b);Bg(this)};
q.get=function(a){a=this.h.getAttribute(Ag(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
q.remove=function(a){this.h.removeAttribute(Ag(a));Bg(this)};
q.ja=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new If;d.next=function(){if(b>=c.length)return Jf;var e=c[b++];if(a)return Kf(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Kf(e)};
return d};
q.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Bg(this)};
function Bg(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Cg(a,b){this.i=a;this.h=b+"::"}
D(Cg,ug);Cg.prototype.set=function(a,b){this.i.set(this.h+a,b)};
Cg.prototype.get=function(a){return this.i.get(this.h+a)};
Cg.prototype.remove=function(a){this.i.remove(this.h+a)};
Cg.prototype.ja=function(a){var b=this.i[Symbol.iterator](),c=this,d=new If;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return Kf(a?e.slice(c.h.length):c.i.get(e))};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var L={},Dg="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;L.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
L.Tb=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var Eg={Pa:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
ec:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},Fg={Pa:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
ec:function(a){return[].concat.apply([],a)}};
L.md=function(){Dg?(L.Ha=Uint8Array,L.qa=Uint16Array,L.Fc=Int32Array,L.assign(L,Eg)):(L.Ha=Array,L.qa=Array,L.Fc=Array,L.assign(L,Fg))};
L.md();var Gg=!0;try{new Uint8Array(1)}catch(a){Gg=!1}for(var Hg=new L.Ha(256),Ig=0;256>Ig;Ig++)Hg[Ig]=252<=Ig?6:248<=Ig?5:240<=Ig?4:224<=Ig?3:192<=Ig?2:1;Hg[254]=Hg[254]=1;
function Jg(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new L.Ha(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var dh={};dh=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var eh={},fh,gh=[],hh=0;256>hh;hh++){fh=hh;for(var ih=0;8>ih;ih++)fh=fh&1?3988292384^fh>>>1:fh>>>1;gh[hh]=fh}eh=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^gh[(a^b[d])&255];return a^-1};var jh={};jh={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function kh(a){for(var b=a.length;0<=--b;)a[b]=0}
var lh=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],mh=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],nh=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],oh=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],ph=Array(576);kh(ph);var qh=Array(60);kh(qh);var rh=Array(512);kh(rh);var sh=Array(256);kh(sh);var th=Array(29);kh(th);var uh=Array(30);kh(uh);function vh(a,b,c,d,e){this.Ac=a;this.Rc=b;this.Qc=c;this.Nc=d;this.gd=e;this.ic=a&&a.length}
var wh,xh,yh;function zh(a,b){this.cc=a;this.Xa=0;this.Ca=b}
function Ah(a,b){a.K[a.pending++]=b&255;a.K[a.pending++]=b>>>8&255}
function N(a,b,c){a.P>16-c?(a.V|=b<<a.P&65535,Ah(a,a.V),a.V=b>>16-a.P,a.P+=c-16):(a.V|=b<<a.P&65535,a.P+=c)}
function Bh(a,b,c){N(a,c[2*b],c[2*b+1])}
function Ch(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function Dh(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=Ch(d[e]++,e))}
function Eh(a){var b;for(b=0;286>b;b++)a.Y[2*b]=0;for(b=0;30>b;b++)a.Ja[2*b]=0;for(b=0;19>b;b++)a.S[2*b]=0;a.Y[512]=1;a.wa=a.bb=0;a.ea=a.matches=0}
function Fh(a){8<a.P?Ah(a,a.V):0<a.P&&(a.K[a.pending++]=a.V);a.V=0;a.P=0}
function Gh(a,b,c){Fh(a);Ah(a,c);Ah(a,~c);L.Pa(a.K,a.window,b,c,a.pending);a.pending+=c}
function Hh(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Ih(a,b,c){for(var d=a.L[c],e=c<<1;e<=a.va;){e<a.va&&Hh(b,a.L[e+1],a.L[e],a.depth)&&e++;if(Hh(b,d,a.L[e],a.depth))break;a.L[c]=a.L[e];c=e;e<<=1}a.L[c]=d}
function Jh(a,b,c){var d=0;if(0!==a.ea){do{var e=a.K[a.fb+2*d]<<8|a.K[a.fb+2*d+1];var f=a.K[a.Lb+d];d++;if(0===e)Bh(a,f,b);else{var g=sh[f];Bh(a,g+256+1,b);var h=lh[g];0!==h&&(f-=th[g],N(a,f,h));e--;g=256>e?rh[e]:rh[256+(e>>>7)];Bh(a,g,c);h=mh[g];0!==h&&(e-=uh[g],N(a,e,h))}}while(d<a.ea)}Bh(a,256,b)}
function Kh(a,b){var c=b.cc,d=b.Ca.Ac,e=b.Ca.ic,f=b.Ca.Nc,g,h=-1;a.va=0;a.Ua=573;for(g=0;g<f;g++)0!==c[2*g]?(a.L[++a.va]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.va;){var k=a.L[++a.va]=2>h?++h:0;c[2*k]=1;a.depth[k]=0;a.wa--;e&&(a.bb-=d[2*k+1])}b.Xa=h;for(g=a.va>>1;1<=g;g--)Ih(a,c,g);k=f;do g=a.L[1],a.L[1]=a.L[a.va--],Ih(a,c,1),d=a.L[1],a.L[--a.Ua]=g,a.L[--a.Ua]=d,c[2*k]=c[2*g]+c[2*d],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=k,a.L[1]=k++,Ih(a,c,1);while(2<=a.va);a.L[--a.Ua]=
a.L[1];g=b.cc;k=b.Xa;d=b.Ca.Ac;e=b.Ca.ic;f=b.Ca.Rc;var l=b.Ca.Qc,m=b.Ca.gd,n,r=0;for(n=0;15>=n;n++)a.ra[n]=0;g[2*a.L[a.Ua]+1]=0;for(b=a.Ua+1;573>b;b++){var p=a.L[b];n=g[2*g[2*p+1]+1]+1;n>m&&(n=m,r++);g[2*p+1]=n;if(!(p>k)){a.ra[n]++;var y=0;p>=l&&(y=f[p-l]);var A=g[2*p];a.wa+=A*(n+y);e&&(a.bb+=A*(d[2*p+1]+y))}}if(0!==r){do{for(n=m-1;0===a.ra[n];)n--;a.ra[n]--;a.ra[n+1]+=2;a.ra[m]--;r-=2}while(0<r);for(n=m;0!==n;n--)for(p=a.ra[n];0!==p;)d=a.L[--b],d>k||(g[2*d+1]!==n&&(a.wa+=(n-g[2*d+1])*g[2*d],g[2*
d+1]=n),p--)}Dh(c,h,a.ra)}
function Lh(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];++g<h&&l===f||(g<k?a.S[2*l]+=g:0!==l?(l!==e&&a.S[2*l]++,a.S[32]++):10>=g?a.S[34]++:a.S[36]++,g=0,e=l,0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function Mh(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];if(!(++g<h&&l===f)){if(g<k){do Bh(a,l,a.S);while(0!==--g)}else 0!==l?(l!==e&&(Bh(a,l,a.S),g--),Bh(a,16,a.S),N(a,g-3,2)):10>=g?(Bh(a,17,a.S),N(a,g-3,3)):(Bh(a,18,a.S),N(a,g-11,7));g=0;e=l;0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function Nh(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.Y[2*c])return 0;if(0!==a.Y[18]||0!==a.Y[20]||0!==a.Y[26])return 1;for(c=32;256>c;c++)if(0!==a.Y[2*c])return 1;return 0}
var Oh=!1;function Ph(a,b,c){a.K[a.fb+2*a.ea]=b>>>8&255;a.K[a.fb+2*a.ea+1]=b&255;a.K[a.Lb+a.ea]=c&255;a.ea++;0===b?a.Y[2*c]++:(a.matches++,b--,a.Y[2*(sh[c]+256+1)]++,a.Ja[2*(256>b?rh[b]:rh[256+(b>>>7)])]++);return a.ea===a.ib-1}
;function Qh(a,b){a.msg=jh[b];return b}
function Rh(a){for(var b=a.length;0<=--b;)a[b]=0}
function Sh(a){var b=a.state,c=b.pending;c>a.F&&(c=a.F);0!==c&&(L.Pa(a.jb,b.K,b.kb,c,a.Ya),a.Ya+=c,b.kb+=c,a.Ub+=c,a.F-=c,b.pending-=c,0===b.pending&&(b.kb=0))}
function P(a,b){var c=0<=a.aa?a.aa:-1,d=a.l-a.aa,e=0;if(0<a.level){2===a.B.Ib&&(a.B.Ib=Nh(a));Kh(a,a.zb);Kh(a,a.vb);Lh(a,a.Y,a.zb.Xa);Lh(a,a.Ja,a.vb.Xa);Kh(a,a.Xb);for(e=18;3<=e&&0===a.S[2*oh[e]+1];e--);a.wa+=3*(e+1)+14;var f=a.wa+3+7>>>3;var g=a.bb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)N(a,b?1:0,3),Gh(a,c,d);else if(4===a.strategy||g===f)N(a,2+(b?1:0),3),Jh(a,ph,qh);else{N(a,4+(b?1:0),3);c=a.zb.Xa+1;d=a.vb.Xa+1;e+=1;N(a,c-257,5);N(a,d-1,5);N(a,e-4,4);for(f=0;f<e;f++)N(a,a.S[2*oh[f]+
1],3);Mh(a,a.Y,c-1);Mh(a,a.Ja,d-1);Jh(a,a.Y,a.Ja)}Eh(a);b&&Fh(a);a.aa=a.l;Sh(a.B)}
function R(a,b){a.K[a.pending++]=b}
function Th(a,b){a.K[a.pending++]=b>>>8&255;a.K[a.pending++]=b&255}
function Uh(a,b){var c=a.pc,d=a.l,e=a.ba,f=a.sc,g=a.l>a.T-262?a.l-(a.T-262):0,h=a.window,k=a.Da,l=a.oa,m=a.l+258,n=h[d+e-1],r=h[d+e];a.ba>=a.hc&&(c>>=2);f>a.o&&(f=a.o);do{var p=b;if(h[p+e]===r&&h[p+e-1]===n&&h[p]===h[d]&&h[++p]===h[d+1]){d+=2;for(p++;h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&d<m;);p=258-(m-d);d=m-258;if(p>e){a.Wa=b;e=p;if(p>=f)break;n=h[d+e-1];r=h[d+e]}}}while((b=l[b&k])>g&&0!==--c);return e<=
a.o?e:a.o}
function Vh(a){var b=a.T,c;do{var d=a.Dc-a.o-a.l;if(a.l>=b+(b-262)){L.Pa(a.window,a.window,b,b,0);a.Wa-=b;a.l-=b;a.aa-=b;var e=c=a.yb;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.oa[--e],a.oa[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.B.U)break;e=a.B;c=a.window;f=a.l+a.o;var g=e.U;g>d&&(g=d);0===g?c=0:(e.U-=g,L.Pa(c,e.input,e.Na,g,f),1===e.state.wrap?e.A=dh(e.A,c,g,f):2===e.state.wrap&&(e.A=eh(e.A,c,g,f)),e.Na+=g,e.Oa+=g,c=g);a.o+=c;if(3<=a.o+a.Z)for(d=a.l-a.Z,a.C=a.window[d],a.C=
(a.C<<a.ta^a.window[d+1])&a.sa;a.Z&&!(a.C=(a.C<<a.ta^a.window[d+3-1])&a.sa,a.oa[d&a.Da]=a.head[a.C],a.head[a.C]=d,d++,a.Z--,3>a.o+a.Z););}while(262>a.o&&0!==a.B.U)}
function Wh(a,b){for(var c;;){if(262>a.o){Vh(a);if(262>a.o&&0===b)return 1;if(0===a.o)break}c=0;3<=a.o&&(a.C=(a.C<<a.ta^a.window[a.l+3-1])&a.sa,c=a.oa[a.l&a.Da]=a.head[a.C],a.head[a.C]=a.l);0!==c&&a.l-c<=a.T-262&&(a.G=Uh(a,c));if(3<=a.G)if(c=Ph(a,a.l-a.Wa,a.G-3),a.o-=a.G,a.G<=a.Nb&&3<=a.o){a.G--;do a.l++,a.C=(a.C<<a.ta^a.window[a.l+3-1])&a.sa,a.oa[a.l&a.Da]=a.head[a.C],a.head[a.C]=a.l;while(0!==--a.G);a.l++}else a.l+=a.G,a.G=0,a.C=a.window[a.l],a.C=(a.C<<a.ta^a.window[a.l+1])&a.sa;else c=Ph(a,0,a.window[a.l]),
a.o--,a.l++;if(c&&(P(a,!1),0===a.B.F))return 1}a.Z=2>a.l?a.l:2;return 4===b?(P(a,!0),0===a.B.F?3:4):a.ea&&(P(a,!1),0===a.B.F)?1:2}
function Xh(a,b){for(var c,d;;){if(262>a.o){Vh(a);if(262>a.o&&0===b)return 1;if(0===a.o)break}c=0;3<=a.o&&(a.C=(a.C<<a.ta^a.window[a.l+3-1])&a.sa,c=a.oa[a.l&a.Da]=a.head[a.C],a.head[a.C]=a.l);a.ba=a.G;a.vc=a.Wa;a.G=2;0!==c&&a.ba<a.Nb&&a.l-c<=a.T-262&&(a.G=Uh(a,c),5>=a.G&&(1===a.strategy||3===a.G&&4096<a.l-a.Wa)&&(a.G=2));if(3<=a.ba&&a.G<=a.ba){d=a.l+a.o-3;c=Ph(a,a.l-1-a.vc,a.ba-3);a.o-=a.ba-1;a.ba-=2;do++a.l<=d&&(a.C=(a.C<<a.ta^a.window[a.l+3-1])&a.sa,a.oa[a.l&a.Da]=a.head[a.C],a.head[a.C]=a.l);while(0!==
--a.ba);a.La=0;a.G=2;a.l++;if(c&&(P(a,!1),0===a.B.F))return 1}else if(a.La){if((c=Ph(a,0,a.window[a.l-1]))&&P(a,!1),a.l++,a.o--,0===a.B.F)return 1}else a.La=1,a.l++,a.o--}a.La&&(Ph(a,0,a.window[a.l-1]),a.La=0);a.Z=2>a.l?a.l:2;return 4===b?(P(a,!0),0===a.B.F?3:4):a.ea&&(P(a,!1),0===a.B.F)?1:2}
function Yh(a,b){for(var c,d,e,f=a.window;;){if(258>=a.o){Vh(a);if(258>=a.o&&0===b)return 1;if(0===a.o)break}a.G=0;if(3<=a.o&&0<a.l&&(d=a.l-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.l+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.G=258-(e-d);a.G>a.o&&(a.G=a.o)}3<=a.G?(c=Ph(a,1,a.G-3),a.o-=a.G,a.l+=a.G,a.G=0):(c=Ph(a,0,a.window[a.l]),a.o--,a.l++);if(c&&(P(a,!1),0===a.B.F))return 1}a.Z=0;return 4===b?(P(a,!0),0===a.B.F?3:4):a.ea&&
(P(a,!1),0===a.B.F)?1:2}
function Zh(a,b){for(var c;;){if(0===a.o&&(Vh(a),0===a.o)){if(0===b)return 1;break}a.G=0;c=Ph(a,0,a.window[a.l]);a.o--;a.l++;if(c&&(P(a,!1),0===a.B.F))return 1}a.Z=0;return 4===b?(P(a,!0),0===a.B.F?3:4):a.ea&&(P(a,!1),0===a.B.F)?1:2}
function $h(a,b,c,d,e){this.Uc=a;this.fd=b;this.jd=c;this.ed=d;this.Sc=e}
var ai;ai=[new $h(0,0,0,0,function(a,b){var c=65535;for(c>a.fa-5&&(c=a.fa-5);;){if(1>=a.o){Vh(a);if(0===a.o&&0===b)return 1;if(0===a.o)break}a.l+=a.o;a.o=0;var d=a.aa+c;if(0===a.l||a.l>=d)if(a.o=a.l-d,a.l=d,P(a,!1),0===a.B.F)return 1;if(a.l-a.aa>=a.T-262&&(P(a,!1),0===a.B.F))return 1}a.Z=0;if(4===b)return P(a,!0),0===a.B.F?3:4;a.l>a.aa&&P(a,!1);return 1}),
new $h(4,4,8,4,Wh),new $h(4,5,16,8,Wh),new $h(4,6,32,32,Wh),new $h(4,4,16,16,Xh),new $h(8,16,32,32,Xh),new $h(8,16,128,128,Xh),new $h(8,32,128,256,Xh),new $h(32,128,258,1024,Xh),new $h(32,258,258,4096,Xh)];
function bi(){this.B=null;this.status=0;this.K=null;this.wrap=this.pending=this.kb=this.fa=0;this.u=null;this.ga=0;this.method=8;this.Va=-1;this.Da=this.Vb=this.T=0;this.window=null;this.Dc=0;this.head=this.oa=null;this.sc=this.hc=this.strategy=this.level=this.Nb=this.pc=this.ba=this.o=this.Wa=this.l=this.La=this.vc=this.G=this.aa=this.ta=this.sa=this.Jb=this.yb=this.C=0;this.Y=new L.qa(1146);this.Ja=new L.qa(122);this.S=new L.qa(78);Rh(this.Y);Rh(this.Ja);Rh(this.S);this.Xb=this.vb=this.zb=null;
this.ra=new L.qa(16);this.L=new L.qa(573);Rh(this.L);this.Ua=this.va=0;this.depth=new L.qa(573);Rh(this.depth);this.P=this.V=this.Z=this.matches=this.bb=this.wa=this.fb=this.ea=this.ib=this.Lb=0}
function ci(a,b){if(!a||!a.state||5<b||0>b)return a?Qh(a,-2):-2;var c=a.state;if(!a.jb||!a.input&&0!==a.U||666===c.status&&4!==b)return Qh(a,0===a.F?-5:-2);c.B=a;var d=c.Va;c.Va=b;if(42===c.status)if(2===c.wrap)a.A=0,R(c,31),R(c,139),R(c,8),c.u?(R(c,(c.u.text?1:0)+(c.u.Aa?2:0)+(c.u.za?4:0)+(c.u.name?8:0)+(c.u.comment?16:0)),R(c,c.u.time&255),R(c,c.u.time>>8&255),R(c,c.u.time>>16&255),R(c,c.u.time>>24&255),R(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),R(c,c.u.Rd&255),c.u.za&&c.u.za.length&&(R(c,
c.u.za.length&255),R(c,c.u.za.length>>8&255)),c.u.Aa&&(a.A=eh(a.A,c.K,c.pending,0)),c.ga=0,c.status=69):(R(c,0),R(c,0),R(c,0),R(c,0),R(c,0),R(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),R(c,3),c.status=113);else{var e=8+(c.Vb-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.l&&(e|=32);c.status=113;Th(c,e+(31-e%31));0!==c.l&&(Th(c,a.A>>>16),Th(c,a.A&65535));a.A=1}if(69===c.status)if(c.u.za){for(e=c.pending;c.ga<(c.u.za.length&65535)&&(c.pending!==c.fa||(c.u.Aa&&c.pending>
e&&(a.A=eh(a.A,c.K,c.pending-e,e)),Sh(a),e=c.pending,c.pending!==c.fa));)R(c,c.u.za[c.ga]&255),c.ga++;c.u.Aa&&c.pending>e&&(a.A=eh(a.A,c.K,c.pending-e,e));c.ga===c.u.za.length&&(c.ga=0,c.status=73)}else c.status=73;if(73===c.status)if(c.u.name){e=c.pending;do{if(c.pending===c.fa&&(c.u.Aa&&c.pending>e&&(a.A=eh(a.A,c.K,c.pending-e,e)),Sh(a),e=c.pending,c.pending===c.fa)){var f=1;break}f=c.ga<c.u.name.length?c.u.name.charCodeAt(c.ga++)&255:0;R(c,f)}while(0!==f);c.u.Aa&&c.pending>e&&(a.A=eh(a.A,c.K,c.pending-
e,e));0===f&&(c.ga=0,c.status=91)}else c.status=91;if(91===c.status)if(c.u.comment){e=c.pending;do{if(c.pending===c.fa&&(c.u.Aa&&c.pending>e&&(a.A=eh(a.A,c.K,c.pending-e,e)),Sh(a),e=c.pending,c.pending===c.fa)){f=1;break}f=c.ga<c.u.comment.length?c.u.comment.charCodeAt(c.ga++)&255:0;R(c,f)}while(0!==f);c.u.Aa&&c.pending>e&&(a.A=eh(a.A,c.K,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.u.Aa?(c.pending+2>c.fa&&Sh(a),c.pending+2<=c.fa&&(R(c,a.A&255),R(c,a.A>>8&255),a.A=0,
c.status=113)):c.status=113);if(0!==c.pending){if(Sh(a),0===a.F)return c.Va=-1,0}else if(0===a.U&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return Qh(a,-5);if(666===c.status&&0!==a.U)return Qh(a,-5);if(0!==a.U||0!==c.o||0!==b&&666!==c.status){d=2===c.strategy?Zh(c,b):3===c.strategy?Yh(c,b):ai[c.level].Sc(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.F&&(c.Va=-1),0;if(2===d&&(1===b?(N(c,2,3),Bh(c,256,ph),16===c.P?(Ah(c,c.V),c.V=0,c.P=0):8<=c.P&&(c.K[c.pending++]=c.V&255,c.V>>=8,c.P-=
8)):5!==b&&(N(c,0,3),Gh(c,0,0),3===b&&(Rh(c.head),0===c.o&&(c.l=0,c.aa=0,c.Z=0))),Sh(a),0===a.F))return c.Va=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(R(c,a.A&255),R(c,a.A>>8&255),R(c,a.A>>16&255),R(c,a.A>>24&255),R(c,a.Oa&255),R(c,a.Oa>>8&255),R(c,a.Oa>>16&255),R(c,a.Oa>>24&255)):(Th(c,a.A>>>16),Th(c,a.A&65535));Sh(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var di={};di=function(){this.input=null;this.Oa=this.U=this.Na=0;this.jb=null;this.Ub=this.F=this.Ya=0;this.msg="";this.state=null;this.Ib=2;this.A=0};var ei=Object.prototype.toString;
function fi(a){if(!(this instanceof fi))return new fi(a);a=this.options=L.assign({level:-1,method:8,chunkSize:16384,Ea:15,hd:8,strategy:0,Cc:""},a||{});a.raw&&0<a.Ea?a.Ea=-a.Ea:a.Vc&&0<a.Ea&&16>a.Ea&&(a.Ea+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.B=new di;this.B.F=0;var b=this.B;var c=a.level,d=a.method,e=a.Ea,f=a.hd,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=Qh(b,-2);else{8===e&&(e=9);var k=new bi;
b.state=k;k.B=b;k.wrap=h;k.u=null;k.Vb=e;k.T=1<<k.Vb;k.Da=k.T-1;k.Jb=f+7;k.yb=1<<k.Jb;k.sa=k.yb-1;k.ta=~~((k.Jb+3-1)/3);k.window=new L.Ha(2*k.T);k.head=new L.qa(k.yb);k.oa=new L.qa(k.T);k.ib=1<<f+6;k.fa=4*k.ib;k.K=new L.Ha(k.fa);k.fb=1*k.ib;k.Lb=3*k.ib;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.Oa=b.Ub=0;b.Ib=2;c=b.state;c.pending=0;c.kb=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.A=2===c.wrap?0:1;c.Va=0;if(!Oh){d=Array(16);for(f=g=0;28>f;f++)for(th[f]=g,e=0;e<1<<lh[f];e++)sh[g++]=
f;sh[g-1]=f;for(f=g=0;16>f;f++)for(uh[f]=g,e=0;e<1<<mh[f];e++)rh[g++]=f;for(g>>=7;30>f;f++)for(uh[f]=g<<7,e=0;e<1<<mh[f]-7;e++)rh[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)ph[2*e+1]=8,e++,d[8]++;for(;255>=e;)ph[2*e+1]=9,e++,d[9]++;for(;279>=e;)ph[2*e+1]=7,e++,d[7]++;for(;287>=e;)ph[2*e+1]=8,e++,d[8]++;Dh(ph,287,d);for(e=0;30>e;e++)qh[2*e+1]=5,qh[2*e]=Ch(e,5);wh=new vh(ph,lh,257,286,15);xh=new vh(qh,mh,0,30,15);yh=new vh([],nh,0,19,7);Oh=!0}c.zb=new zh(c.Y,wh);c.vb=new zh(c.Ja,xh);c.Xb=new zh(c.S,
yh);c.V=0;c.P=0;Eh(c);c=0}else c=Qh(b,-2);0===c&&(b=b.state,b.Dc=2*b.T,Rh(b.head),b.Nb=ai[b.level].fd,b.hc=ai[b.level].Uc,b.sc=ai[b.level].jd,b.pc=ai[b.level].ed,b.l=0,b.aa=0,b.o=0,b.Z=0,b.G=b.ba=2,b.La=0,b.C=0);b=c}}else b=-2;if(0!==b)throw Error(jh[b]);a.header&&(b=this.B)&&b.state&&2===b.state.wrap&&(b.state.u=a.header);if(a.gb){var l;"string"===typeof a.gb?l=Jg(a.gb):"[object ArrayBuffer]"===ei.call(a.gb)?l=new Uint8Array(a.gb):l=a.gb;a=this.B;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,
2===b||1===b&&42!==l.status||l.o)b=-2;else{1===b&&(a.A=dh(a.A,f,g,0));l.wrap=0;g>=l.T&&(0===b&&(Rh(l.head),l.l=0,l.aa=0,l.Z=0),c=new L.Ha(l.T),L.Pa(c,f,g-l.T,l.T,0),f=c,g=l.T);c=a.U;d=a.Na;e=a.input;a.U=g;a.Na=0;a.input=f;for(Vh(l);3<=l.o;){f=l.l;g=l.o-2;do l.C=(l.C<<l.ta^l.window[f+3-1])&l.sa,l.oa[f&l.Da]=l.head[l.C],l.head[l.C]=f,f++;while(--g);l.l=f;l.o=2;Vh(l)}l.l+=l.o;l.aa=l.l;l.Z=l.o;l.o=0;l.G=l.ba=2;l.La=0;a.Na=d;a.input=e;a.U=c;l.wrap=b;b=0}else b=-2;if(0!==b)throw Error(jh[b]);this.Id=!0}}
fi.prototype.push=function(a,b){var c=this.B,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=Jg(a):"[object ArrayBuffer]"===ei.call(a)?c.input=new Uint8Array(a):c.input=a;c.Na=0;c.U=c.input.length;do{0===c.F&&(c.jb=new L.Ha(d),c.Ya=0,c.F=d);a=ci(c,e);if(1!==a&&0!==a)return gi(this,a),this.ended=!0,!1;if(0===c.F||0===c.U&&(4===e||2===e))if("string"===this.options.Cc){var f=L.Tb(c.jb,c.Ya);b=f;f=f.length;if(65537>f&&(b.subarray&&Gg||!b.subarray))b=
String.fromCharCode.apply(null,L.Tb(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=L.Tb(c.jb,c.Ya),this.chunks.push(b)}while((0<c.U||0===c.F)&&1!==a);if(4===e)return(c=this.B)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=Qh(c,-2):(c.state=null,a=113===d?Qh(c,-3):0)):a=-2,gi(this,a),this.ended=!0,0===a;2===e&&(gi(this,0),c.F=0);return!0};
function gi(a,b){0===b&&(a.result="string"===a.options.Cc?a.chunks.join(""):L.ec(a.chunks));a.chunks=[];a.err=b;a.msg=a.B.msg}
function hi(a,b){b=b||{};b.Vc=!0;b=new fi(b);b.push(a,!0);if(b.err)throw b.msg||jh[b.err];return b.result}
;function ii(a){this.name=a}
;var ji=new ii("rawColdConfigGroup");var ki=new ii("rawHotConfigGroup");function li(a){J.call(this,a)}
v(li,J);function mi(a){J.call(this,a)}
v(mi,J);function ni(a){J.call(this,a,-1,oi)}
v(ni,J);var oi=[2];function pi(a){J.call(this,a,-1,qi)}
v(pi,J);pi.prototype.getPlayerType=function(){return $c(this,36)};
pi.prototype.setHomeGroupInfo=function(a){return H(this,ni,81,a)};
var qi=[9,66,24,32,86,100,101];function ri(a){J.call(this,a)}
v(ri,J);ri.prototype.getKey=function(){return md(this,1)};
ri.prototype.la=function(){return md(this,2===gd(this,si)?2:-1)};
var si=[2,3,4,5,6];function ti(a){J.call(this,a,-1,ui)}
v(ti,J);var ui=[15,26,28];function vi(a){J.call(this,a,-1,wi)}
v(vi,J);var wi=[5];function xi(a){J.call(this,a)}
v(xi,J);function yi(a){J.call(this,a,-1,zi)}
v(yi,J);yi.prototype.setSafetyMode=function(a){return G(this,5,a)};
var zi=[12];function Ai(a){J.call(this,a,-1,Bi)}
v(Ai,J);var Bi=[12];var Ci={Hd:"WEB_DISPLAY_MODE_UNKNOWN",Dd:"WEB_DISPLAY_MODE_BROWSER",Fd:"WEB_DISPLAY_MODE_MINIMAL_UI",Gd:"WEB_DISPLAY_MODE_STANDALONE",Ed:"WEB_DISPLAY_MODE_FULLSCREEN"};function Di(a){J.call(this,a)}
v(Di,J);Di.prototype.getKey=function(){return md(this,1)};
Di.prototype.la=function(){return md(this,2)};function Ei(a){J.call(this,a,-1,Fi)}
v(Ei,J);var Fi=[4,5];function Gi(a){J.call(this,a)}
v(Gi,J);function Hi(a){J.call(this,a)}
v(Hi,J);var Ii=[2,3,4];function Ji(a){J.call(this,a)}
v(Ji,J);function Ki(a){J.call(this,a)}
v(Ki,J);function Li(a){J.call(this,a)}
v(Li,J);function Mi(a){J.call(this,a,-1,Ni)}
v(Mi,J);var Ni=[10,17];function Oi(a){J.call(this,a)}
v(Oi,J);function Pi(a){J.call(this,a)}
v(Pi,J);function Qi(a){J.call(this,a)}
v(Qi,J);function Ri(a){J.call(this,a,470)}
v(Ri,J);
var Si=[2,3,5,6,7,11,13,20,21,22,23,24,28,32,37,45,59,72,73,74,76,78,79,80,85,91,97,100,102,105,111,117,119,126,127,136,146,148,151,156,157,158,159,163,164,168,176,177,178,179,184,188,189,190,191,193,194,195,196,197,198,199,200,201,202,203,204,205,206,208,209,215,219,222,225,226,227,229,232,233,234,240,241,244,247,248,249,251,254,255,256,257,258,259,260,261,266,270,272,278,288,291,293,300,304,308,309,310,311,313,314,319,320,321,323,324,327,328,330,331,332,334,337,338,340,344,348,350,351,352,353,354,
355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,383,388,389,402,403,410,411,412,413,414,415,416,417,418,423,424,425,426,427,429,430,431,439,441,444,448,458,469];function Ti(a){J.call(this,a)}
v(Ti,J);function Ui(a){J.call(this,a)}
v(Ui,J);Ui.prototype.getPlaylistId=function(){return nd(this,2)};
var od=[1,2];function Vi(a){J.call(this,a,-1,Wi)}
v(Vi,J);var Wi=[3];var Xi=z.window,Yi,Zi,$i=(null==Xi?void 0:null==(Yi=Xi.yt)?void 0:Yi.config_)||(null==Xi?void 0:null==(Zi=Xi.ytcfg)?void 0:Zi.data_)||{};B("yt.config_",$i);function aj(){var a=arguments;1<a.length?$i[a[0]]=a[1]:1===a.length&&Object.assign($i,a[0])}
function S(a,b){return a in $i?$i[a]:b}
function bj(){return S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")}
function cj(){var a=$i.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;var dj=[];function ej(a){dj.forEach(function(b){return b(a)})}
function fj(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){gj(b)}}:a}
function gj(a,b,c,d,e){var f=C("yt.logging.errors.log");f?f(a,"ERROR",b,c,d,void 0,e):(f=S("ERRORS",[]),f.push([a,"ERROR",b,c,d,void 0,e]),aj("ERRORS",f));ej(a)}
function hj(a,b,c,d,e){var f=C("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=S("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),aj("ERRORS",f))}
;function U(a){a=ij(a);return"string"===typeof a&&"false"===a?!1:!!a}
function W(a,b){a=ij(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function ij(a){var b=S("EXPERIMENTS_FORCED_FLAGS",{})||{};return void 0!==b[a]?b[a]:S("EXPERIMENT_FLAGS",{})[a]}
function jj(){for(var a=[],b=S("EXPERIMENTS_FORCED_FLAGS",{}),c=u(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=S("EXPERIMENT_FLAGS",{});var e=u(Object.keys(c));for(d=e.next();!d.done;d=e.next())d=d.value,d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var kj=0;B("ytDomDomGetNextId",C("ytDomDomGetNextId")||function(){return++kj});var lj={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function mj(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in lj||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function nj(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
mj.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
mj.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
mj.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var mb=z.ytEventsEventsListeners||{};B("ytEventsEventsListeners",mb);var oj=z.ytEventsEventsCounter||{count:0};B("ytEventsEventsCounter",oj);
function pj(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return lb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Pa(e[4])&&Pa(d)&&nb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function qj(a){a&&("string"==typeof a&&(a=[a]),db(a,function(b){if(b in mb){var c=mb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?rj()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete mb[b]}}))}
var rj=bb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function sj(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=pj(a,b,c,d);if(e)return e;e=++oj.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new mj(h);if(!Fd(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new mj(h);
h.currentTarget=a;return c.call(a,h)};
g=fj(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),rj()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);mb[e]=[a,b,c,g,d];return e}
;function tj(a,b){"function"===typeof a&&(a=fj(a));return window.setTimeout(a,b)}
function uj(a,b){"function"===typeof a&&(a=fj(a));return window.setInterval(a,b)}
;var vj=/^[\w.]*$/,wj={q:!0,search_query:!0};function xj(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=yj(f[0]||""),h=yj(f[1]||"");g in c?Array.isArray(c[g])?jb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(n){var k=n,l=f[0],m=String(xj);k.args=[{key:l,value:f[1],query:a,method:zj==m?"unchanged":m}];wj.hasOwnProperty(l)||hj(k)}}return c}
var zj=String(xj);function Aj(a){var b=[];kb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];db(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Bj(a){"?"==a.charAt(0)&&(a=a.substr(1));return xj(a,"&")}
function Cj(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Bj(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=cc(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.slice(0,f),e,b.slice(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function Dj(a){if(!b)var b=window.location.href;var c=a.match(Yb)[1]||null,d=$b(a);c&&d?(a=a.match(Yb),b=b.match(Yb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?$b(b)==d&&(Number(b.match(Yb)[4]||null)||null)==(Number(a.match(Yb)[4]||null)||null):!0;return a}
function yj(a){return a&&a.match(vj)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function Ej(a){var b=Fj;a=void 0===a?C("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Yd;e.flash="0";a:{try{var f=b.h.top.location.href}catch(ba){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Bd:g;try{var h=g.history.length}catch(ba){h=0}e.u_his=h;var k;e.u_h=null==(k=Bd.screen)?void 0:k.height;var l;e.u_w=null==(l=Bd.screen)?void 0:l.width;var m;e.u_ah=null==(m=Bd.screen)?void 0:m.availHeight;var n;e.u_aw=
null==(n=Bd.screen)?void 0:n.availWidth;var r;e.u_cd=null==(r=Bd.screen)?void 0:r.colorDepth}catch(ba){}h=b.h;try{var p=h.screenX;var y=h.screenY}catch(ba){}try{var A=h.outerWidth;var I=h.outerHeight}catch(ba){}try{var O=h.innerWidth;var T=h.innerHeight}catch(ba){}try{var Q=h.screenLeft;var wa=h.screenTop}catch(ba){}try{O=h.innerWidth,T=h.innerHeight}catch(ba){}try{var Lc=h.screen.availWidth;var Ia=h.screen.availTop}catch(ba){}p=[Q,wa,p,y,Lc,Ia,A,I,O,T];y=b.h.top;try{var xa=(y||window).document,ca=
"CSS1Compat"==xa.compatMode?xa.documentElement:xa.body;var ia=(new Dd(ca.clientWidth,ca.clientHeight)).round()}catch(ba){ia=new Dd(-12245933,-12245933)}xa=ia;ia={};var ja=void 0===ja?z:ja;ca=new We;ja.SVGElement&&ja.document.createElementNS&&ca.set(0);y=Wd();y["allow-top-navigation-by-user-activation"]&&ca.set(1);y["allow-popups-to-escape-sandbox"]&&ca.set(2);ja.crypto&&ja.crypto.subtle&&ca.set(3);ja.TextDecoder&&ja.TextEncoder&&ca.set(4);ja=Xe(ca);ia.bc=ja;ia.bih=xa.height;ia.biw=xa.width;ia.brdim=
p.join();b=b.i;b=(ia.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,ia.wgl=!!Bd.WebGLRenderingContext,ia);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Fj=new function(){var a=window.document;this.h=window;this.i=a};
B("yt.ads_.signals_.getAdSignalsString",function(a){return Aj(Ej(a))});Date.now();var Gj="XMLHttpRequest"in z?function(){return new XMLHttpRequest}:null;
function Hj(){if(!Gj)return null;var a=Gj();return"open"in a?a:null}
;var Ij={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},Jj="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ka($d)),Kj=!1;
function Lj(a,b){b=void 0===b?{}:b;var c=Dj(a),d=U("web_ajax_ignore_global_headers_if_set"),e;for(e in Ij){var f=S(Ij[e]);"X-Goog-Visitor-Id"!==e||f||(f=S("VISITOR_DATA"));!f||!c&&$b(a)||d&&void 0!==b[e]||!(U("move_vss_away_from_login_info_cookie")||"X-Goog-AuthUser"!==e&&"X-Goog-PageId"!==e)||(b[e]=f)}U("move_vss_away_from_login_info_cookie")&&c&&S("SESSION_INDEX")&&(b["X-Yt-Auth-Test"]="test");"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!$b(a))b["X-YouTube-Utc-Offset"]=
String(-(new Date).getTimezoneOffset());if(c||!$b(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&$b(a)||(b["X-YouTube-Ad-Signals"]=Aj(Ej()));return b}
function Mj(a){var b=window.location.search,c=$b(a);U("debug_handle_relative_url_for_query_forward_killswitch")||!c&&Dj(a)&&(c=document.location.hostname);var d=Zb(a.match(Yb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Bj(b),f={};db(Jj,function(g){e[g]&&(f[g]=e[g])});
return Cj(a,f||{},!1)}
function Nj(a,b){var c=b.format||"JSON";a=Oj(a,b);var d=Pj(a,b),e=!1,f=Qj(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,n=400<=k.status&&500>k.status,r=500<=k.status&&600>k.status;if(l||n||r)m=Rj(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=
!!m}m=m||{};n=b.context||z;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.onFinish&&b.onFinish.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=tj(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||z,f))},d)}return f}
function Oj(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=S("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=Cj(a,b||{},!0);return a}
function Pj(a,b){var c=S("XSRF_FIELD_NAME"),d=S("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams;var g=S("XSRF_FIELD_NAME");var h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||$b(a)&&!b.withCredentials&&$b(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(U("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=Bj(e),qb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):cc(e));if(!(a=e)&&(a=f)){a:{for(var k in f){f=!1;break a}f=!0}a=!f}!Kj&&a&&"POST"!=b.method&&(Kj=!0,gj(Error("AJAX request with postData should use POST")));return e}
function Rj(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,hj(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Sj(a):null)e={},db(a.getElementsByTagName("*"),function(g){e[g.tagName]=Tj(g)})}d&&Uj(e);
return e}
function Uj(a){if(Pa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b];if(void 0===rb){var e=null;var f=z.trustedTypes;if(f&&f.createPolicy){try{e=f.createPolicy("goog#html",{createHTML:Ya,createScript:Ya,createScriptURL:Ya})}catch(g){z.console&&z.console.error(g.message)}rb=e}else rb=e}d=(e=rb)?e.createHTML(d):d;a[c]=new Wb(d)}else Uj(a[b])}}
function Sj(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Tj(a){var b="";db(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Vj(a,b){b.method="POST";b.postParams||(b.postParams={});return Nj(a,b)}
function Qj(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&fj(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=Hj();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;U("debug_forward_web_query_parameters")&&(a=Mj(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Lj(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var Wj=Ac||Bc;var Xj=[{Ob:function(a){return"Cannot read property '"+a.key+"'"},
Ab:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Ob:function(a){return"Cannot call '"+a.key+"'"},
Ab:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Ob:function(a){return a.key+" is not defined"},
Ab:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Zj={Ba:[],ya:[{Kc:Yj,weight:500}]};function Yj(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function ak(){this.ya=[];this.Ba=[]}
var bk;function ck(){if(!bk){var a=bk=new ak;a.Ba.length=0;a.ya.length=0;Zj.Ba&&a.Ba.push.apply(a.Ba,Zj.Ba);Zj.ya&&a.ya.push.apply(a.ya,Zj.ya)}return bk}
;var dk=new K;function ek(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=fk(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=fk(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=fk(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function fk(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function gk(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=hk(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=ek(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?hk(e+".ve",f,g,h):0;d+=g;d+=hk(e,a[e],b,c);if(500<d)break}}else c[b]=ik(a),d+=c[b].length;else c[b]=ik(a),d+=c[b].length;return d}
function hk(a,b,c,d){c+="."+a;a=ik(b);d[c]=a;return c.length+a.length}
function ik(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function jk(){}
;function kk(){if(!z.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return z.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":z.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":z.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":z.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;B("ytglobal.prefsUserPrefsPrefs_",C("ytglobal.prefsUserPrefsPrefs_")||{});var lk={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},mk={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},nk={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},ok={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function pk(){var a=z.navigator;return a?a.connection:void 0}
;function qk(a){var b=Ka.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ka(b))}
v(qk,Error);function rk(){try{return sk(),!0}catch(a){return!1}}
function sk(){if(void 0!==S("DATASYNC_ID"))return S("DATASYNC_ID");throw new qk("Datasync ID not set","unknown");}
;function tk(){}
function uk(a,b){return vk(a,0,b)}
tk.prototype.ka=function(a,b){return vk(a,1,b)};function wk(){tk.apply(this,arguments)}
v(wk,tk);function xk(){wk.h||(wk.h=new wk);return wk.h}
function vk(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=C("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):tj(a,c||0)}
wk.prototype.Qa=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=C("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
wk.prototype.start=function(){var a=C("yt.scheduler.instance.start");a&&a()};
var Ve=xk();function yk(a){var b=new wg;if(b.h)try{b.h.setItem("__sak","1");b.h.removeItem("__sak");var c=!0}catch(d){c=!1}else c=!1;(b=c?a?new Cg(b,a):b:null)||(a=new xg(a||"UserDataSharedStore"),b=a.h?a:null);this.h=(a=b)?new sg(a):null;this.i=document.domain||window.location.hostname}
yk.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Uf(b))}catch(f){return}else e=escape(b);b=this.i;ge.set(""+a,e,{Mb:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
yk.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=ge.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
yk.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;ge.remove(""+a,"/",void 0===b?"youtube.com":b)};var zk=function(){var a;return function(){a||(a=new yk("ytidb"));return a}}();
function Ak(){var a;return null==(a=zk())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Bk=[],Ck=!1;function Dk(a){Ck||(Bk.push({type:"ERROR",payload:a}),10<Bk.length&&Bk.shift())}
function Ek(a,b){Ck||(Bk.push({type:"EVENT",eventType:a,payload:b}),10<Bk.length&&Bk.shift())}
;function Fk(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function Gk(a){return a.substr(0,a.indexOf(":"))||a}
;var Hk={},Ik=(Hk.AUTH_INVALID="No user identifier specified.",Hk.EXPLICIT_ABORT="Transaction was explicitly aborted.",Hk.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Hk.MISSING_INDEX="Index not created.",Hk.MISSING_OBJECT_STORES="Object stores not created.",Hk.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Hk.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Hk.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Hk.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Hk.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Hk.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Hk.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Hk),Jk={},Kk=(Jk.AUTH_INVALID="ERROR",Jk.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Jk.EXPLICIT_ABORT="IGNORED",Jk.IDB_NOT_SUPPORTED="ERROR",Jk.MISSING_INDEX=
"WARNING",Jk.MISSING_OBJECT_STORES="ERROR",Jk.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Jk.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Jk.QUOTA_EXCEEDED="WARNING",Jk.QUOTA_MAYBE_EXCEEDED="WARNING",Jk.UNKNOWN_ABORT="WARNING",Jk.INCOMPATIBLE_DB_VERSION="WARNING",Jk),Lk={},Mk=(Lk.AUTH_INVALID=!1,Lk.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Lk.EXPLICIT_ABORT=!1,Lk.IDB_NOT_SUPPORTED=!1,Lk.MISSING_INDEX=!1,Lk.MISSING_OBJECT_STORES=!1,Lk.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Lk.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Lk.QUOTA_EXCEEDED=!1,Lk.QUOTA_MAYBE_EXCEEDED=!0,Lk.UNKNOWN_ABORT=!0,Lk.INCOMPATIBLE_DB_VERSION=!1,Lk);function X(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?Ik[a]:c;d=void 0===d?Kk[a]:d;e=void 0===e?Mk[a]:e;qk.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,X.prototype)}
v(X,qk);function Nk(a,b){X.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Ik.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Nk.prototype)}
v(Nk,X);function Ok(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Ok.prototype)}
v(Ok,Error);var Pk=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Qk(a,b,c,d){b=Gk(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof X)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new X("QUOTA_EXCEEDED",a);if(Cc&&"UnknownError"===e.name)return new X("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Ok)return new X("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Pk.some(function(f){return e.message.includes(f)}))return new X("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new X("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",Qd:e.name})];e.level="WARNING";return e}
function Rk(a,b,c){var d=Ak();return new X("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function Sk(a){if(!a)throw Error();throw a;}
function Tk(a){return a}
function Uk(a){this.h=a}
function Vk(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=u(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=u(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
Vk.resolve=function(a){return new Vk(new Uk(function(b,c){a instanceof Vk?a.then(b,c):b(a)}))};
Vk.reject=function(a){return new Vk(new Uk(function(b,c){c(a)}))};
Vk.prototype.then=function(a,b){var c=this,d=null!=a?a:Tk,e=null!=b?b:Sk;return new Vk(new Uk(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){Wk(c,c,d,f,g)}),c.i.push(function(){Xk(c,c,e,f,g)})):"FULFILLED"===c.state.status?Wk(c,c,d,f,g):"REJECTED"===c.state.status&&Xk(c,c,e,f,g)}))};
function Yk(a,b){a.then(void 0,b)}
function Wk(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Vk?Zk(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Xk(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Vk?Zk(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Zk(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Vk?Zk(a,b,f,d,e):d(f)},function(f){e(f)})}
;function $k(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function al(a){return new Promise(function(b,c){$k(a,b,c)})}
function bl(a){return new Vk(new Uk(function(b,c){$k(a,b,c)}))}
;function cl(a,b){return new Vk(new Uk(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var dl=window,Y=dl.ytcsi&&dl.ytcsi.now?dl.ytcsi.now:dl.performance&&dl.performance.timing&&dl.performance.now&&dl.performance.timing.navigationStart?function(){return dl.performance.timing.navigationStart+dl.performance.now()}:function(){return(new Date).getTime()};function el(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(Y());this.i=!1}
q=el.prototype;q.add=function(a,b,c){return fl(this,[a],{mode:"readwrite",W:!0},function(d){return d.objectStore(a).add(b,c)})};
q.clear=function(a){return fl(this,[a],{mode:"readwrite",W:!0},function(b){return b.objectStore(a).clear()})};
q.close=function(){this.h.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
function gl(a,b,c){a=a.h.createObjectStore(b,c);return new hl(a)}
q.delete=function(a,b){return fl(this,[a],{mode:"readwrite",W:!0},function(c){return c.objectStore(a).delete(b)})};
q.get=function(a,b){return fl(this,[a],{mode:"readonly",W:!0},function(c){return c.objectStore(a).get(b)})};
function Tl(a,b,c){return fl(a,[b],{mode:"readwrite",W:!0},function(d){d=d.objectStore(b);return bl(d.h.put(c,void 0))})}
q.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function fl(a,b,c,d){var e,f,g,h,k,l,m,n,r,p,y,A;return x(function(I){switch(I.h){case 1:var O={mode:"readonly",W:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?O.mode=c:Object.assign(O,c);e=O;a.transactionCount++;f=e.W?3:1;g=0;case 2:if(h){I.D(3);break}g++;k=Math.round(Y());ya(I,4);l=a.h.transaction(b,e.mode);O=new Ul(l);O=Vl(O,d);return w(I,O,6);case 6:return m=I.i,n=Math.round(Y()),Wl(a,k,n,g,void 0,b.join(),e),I.return(m);case 4:r=Aa(I);p=Math.round(Y());y=Qk(r,a.h.name,b.join(),a.h.version);
if((A=y instanceof X&&!y.h)||g>=f)Wl(a,k,p,g,y,b.join(),e),h=y;I.D(2);break;case 3:return I.return(Promise.reject(h))}})}
function Wl(a,b,c,d,e,f,g){b=c-b;e?(e instanceof X&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&Ek("QUOTA_EXCEEDED",{dbName:Gk(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof X&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),Ek("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),Xl(a,!1,d,f,b,g.tag),Dk(e)):Xl(a,!0,d,f,b,g.tag)}
function Xl(a,b,c,d,e,f){Ek("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
q.getName=function(){return this.h.name};
function hl(a){this.h=a}
q=hl.prototype;q.add=function(a,b){return bl(this.h.add(a,b))};
q.autoIncrement=function(){return this.h.autoIncrement};
q.clear=function(){return bl(this.h.clear()).then(function(){})};
function Yl(a,b,c){a.h.createIndex(b,c,{unique:!1})}
function Zl(a,b){return $l(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
q.delete=function(a){return a instanceof IDBKeyRange?Zl(this,a):bl(this.h.delete(a))};
q.get=function(a){return bl(this.h.get(a))};
q.index=function(a){try{return new am(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Ok(a,this.h.name);throw b;}};
q.getName=function(){return this.h.name};
q.keyPath=function(){return this.h.keyPath};
function $l(a,b,c){a=a.h.openCursor(b.query,b.direction);return bm(a).then(function(d){return cl(d,c)})}
function Ul(a){var b=this;this.h=a;this.j=new Map;this.i=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.i){e=X;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function Vl(a,b){var c=new Promise(function(d,e){try{Yk(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
Ul.prototype.abort=function(){this.h.abort();this.i=!0;throw new X("EXPLICIT_ABORT");};
Ul.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.j.get(a);b||(b=new hl(a),this.j.set(a,b));return b};
function am(a){this.h=a}
q=am.prototype;q.delete=function(a){return cm(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
q.get=function(a){return bl(this.h.get(a))};
q.getKey=function(a){return bl(this.h.getKey(a))};
q.keyPath=function(){return this.h.keyPath};
q.unique=function(){return this.h.unique};
function cm(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return bm(a).then(function(d){return cl(d,c)})}
function dm(a,b){this.request=a;this.cursor=b}
function bm(a){return bl(a).then(function(b){return b?new dm(a,b):null})}
q=dm.prototype;q.advance=function(a){this.cursor.advance(a);return bm(this.request)};
q.continue=function(a){this.cursor.continue(a);return bm(this.request)};
q.delete=function(){return bl(this.cursor.delete()).then(function(){})};
q.getKey=function(){return this.cursor.key};
q.la=function(){return this.cursor.value};
q.update=function(a){return bl(this.cursor.update(a))};function em(a,b,c){return new Promise(function(d,e){function f(){r||(r=new el(g.result,{closed:n}));return r}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Ic,k=c.Jc,l=c.nd,m=c.upgrade,n=c.closed,r;g.addEventListener("upgradeneeded",function(p){try{if(null===p.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");p.dataLoss&&"none"!==p.dataLoss&&Ek("IDB_DATA_CORRUPTED",{reason:p.dataLossMessage||"unknown reason",dbName:Gk(a)});var y=f(),A=new Ul(g.transaction);m&&
m(y,function(I){return p.oldVersion<I&&p.newVersion>=I},A);
A.done.catch(function(I){e(I)})}catch(I){e(I)}});
g.addEventListener("success",function(){var p=g.result;k&&p.addEventListener("versionchange",function(){k(f())});
p.addEventListener("close",function(){Ek("IDB_UNEXPECTEDLY_CLOSED",{dbName:Gk(a),dbVersion:p.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function fm(a,b,c){c=void 0===c?{}:c;return em(a,b,c)}
function gm(a,b){b=void 0===b?{}:b;var c,d,e,f;return x(function(g){if(1==g.h)return ya(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Ic)&&c.addEventListener("blocked",function(){e()}),w(g,al(c),4);
if(2!=g.h)return za(g,0);f=Aa(g);throw Qk(f,a,"",-1);})}
;function hm(a,b){this.name=a;this.options=b;this.j=!0;this.v=this.m=0}
hm.prototype.i=function(a,b,c){c=void 0===c?{}:c;return fm(a,b,c)};
hm.prototype.delete=function(a){a=void 0===a?{}:a;return gm(this.name,a)};
function im(a,b){return new X("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function jm(a,b){if(!b)throw Rk("openWithToken",Gk(a.name));return km(a)}
function km(a){function b(){var f,g,h,k,l,m,n,r,p,y;return x(function(A){switch(A.h){case 1:return g=null!=(f=Error().stack)?f:"",ya(A,2),w(A,a.i(a.name,a.options.version,d),4);case 4:h=A.i;for(var I=a.options,O=[],T=u(Object.keys(I.Za)),Q=T.next();!Q.done;Q=T.next()){Q=Q.value;var wa=I.Za[Q],Lc=void 0===wa.ld?Number.MAX_VALUE:wa.ld;!(h.h.version>=wa.eb)||h.h.version>=Lc||h.h.objectStoreNames.contains(Q)||O.push(Q)}k=O;if(0===k.length){A.D(5);break}l=Object.keys(a.options.Za);m=h.objectStoreNames();
if(a.v<W("ytidb_reopen_db_retries",0))return a.v++,h.close(),Dk(new X("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),A.return(b());if(!(a.m<W("ytidb_remake_db_retries",1))){A.D(6);break}a.m++;return w(A,a.delete(),7);case 7:return Dk(new X("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),A.return(b());case 6:throw new Nk(m,l);case 5:return A.return(h);case 2:n=Aa(A);if(n instanceof DOMException?
"VersionError"!==n.name:"DOMError"in self&&n instanceof DOMError?"VersionError"!==n.name:!(n instanceof Object&&"message"in n)||"An attempt was made to open a database using a lower version than the existing version."!==n.message){A.D(8);break}return w(A,a.i(a.name,void 0,Object.assign({},d,{upgrade:void 0})),9);case 9:r=A.i;p=r.h.version;if(void 0!==a.options.version&&p>a.options.version+1)throw r.close(),a.j=!1,im(a,p);return A.return(r);case 8:throw c(),n instanceof Error&&!U("ytidb_async_stack_killswitch")&&
(n.stack=n.stack+"\n"+g.substring(g.indexOf("\n")+1)),Qk(n,a.name,"",null!=(y=a.options.version)?y:-1);}})}
function c(){a.h===e&&(a.h=void 0)}
if(!a.j)throw im(a);if(a.h)return a.h;var d={Jc:function(f){f.close()},
closed:c,nd:c,upgrade:a.options.upgrade};var e=b();a.h=e;return a.h}
;var lm=new hm("YtIdbMeta",{Za:{databases:{eb:1}},upgrade:function(a,b){b(1)&&gl(a,"databases",{keyPath:"actualName"})}});
function mm(a,b){var c;return x(function(d){if(1==d.h)return w(d,jm(lm,b),2);c=d.i;return d.return(fl(c,["databases"],{W:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return bl(f.h.put(a,void 0)).then(function(){})})}))})}
function nm(a,b){var c;return x(function(d){if(1==d.h)return a?w(d,jm(lm,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function om(a,b){var c,d;return x(function(e){return 1==e.h?(c=[],w(e,jm(lm,b),2)):3!=e.h?(d=e.i,w(e,fl(d,["databases"],{W:!0,mode:"readonly"},function(f){c.length=0;return $l(f.objectStore("databases"),{},function(g){a(g.la())&&c.push(g.la());return g.continue()})}),3)):e.return(c)})}
function pm(a){return om(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
;var qm,rm=new function(){}(new function(){});
function sm(){var a,b,c,d;return x(function(e){switch(e.h){case 1:a=Ak();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=Wj)f=/WebKit\/([0-9]+)/.exec(Ob()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Ob()),f=!(f&&602<=parseInt(f[1],10)));if(f||oc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
ya(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return w(e,mm(d,rm),4);case 4:return w(e,nm("yt-idb-test-do-not-use",rm),5);case 5:return e.return(!0);case 2:return Aa(e),e.return(!1)}})}
function tm(){if(void 0!==qm)return qm;Ck=!0;return qm=sm().then(function(a){Ck=!1;var b;if(null!=(b=zk())&&b.h){var c;b={hasSucceededOnce:(null==(c=Ak())?void 0:c.hasSucceededOnce)||a};var d;null==(d=zk())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function um(){return C("ytglobal.idbToken_")||void 0}
function vm(){var a=um();return a?Promise.resolve(a):tm().then(function(b){(b=b?rm:void 0)&&B("ytglobal.idbToken_",b);return b})}
;new Vf;function wm(a){if(!rk())throw a=new X("AUTH_INVALID",{dbName:a}),Dk(a),a;var b=sk();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function xm(a,b,c,d){var e,f,g,h,k,l;return x(function(m){switch(m.h){case 1:return f=null!=(e=Error().stack)?e:"",w(m,vm(),2);case 2:g=m.i;if(!g)throw h=Rk("openDbImpl",a,b),U("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),Dk(h),h;Fk(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:wm(a);ya(m,3);return w(m,mm(k,g),5);case 5:return w(m,fm(k.actualName,b,d),6);case 6:return m.return(m.i);case 3:return l=Aa(m),ya(m,7),w(m,nm(k.actualName,g),9);case 9:za(m,
8);break;case 7:Aa(m);case 8:throw l;}})}
function ym(a,b,c){c=void 0===c?{}:c;return xm(a,b,!1,c)}
function zm(a,b,c){c=void 0===c?{}:c;return xm(a,b,!0,c)}
function Am(a,b){b=void 0===b?{}:b;var c,d;return x(function(e){if(1==e.h)return w(e,vm(),2);if(3!=e.h){c=e.i;if(!c)return e.return();Fk(a);d=wm(a);return w(e,gm(d.actualName,b),3)}return w(e,nm(d.actualName,c),0)})}
function Bm(a,b,c){a=a.map(function(d){return x(function(e){return 1==e.h?w(e,gm(d.actualName,b),2):w(e,nm(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Cm(){var a=void 0===a?{}:a;var b,c;return x(function(d){if(1==d.h)return w(d,vm(),2);if(3!=d.h){b=d.i;if(!b)return d.return();Fk("LogsDatabaseV2");return w(d,pm(b),3)}c=d.i;return w(d,Bm(c,a,b),0)})}
function Dm(a,b){b=void 0===b?{}:b;var c;return x(function(d){if(1==d.h)return w(d,vm(),2);if(3!=d.h){c=d.i;if(!c)return d.return();Fk(a);return w(d,gm(a,b),3)}return w(d,nm(a,c),0)})}
;function Em(a,b){hm.call(this,a,b);this.options=b;Fk(a)}
v(Em,hm);function Fm(a,b){var c;return function(){c||(c=new Em(a,b));return c}}
Em.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.Eb?zm:ym)(a,b,Object.assign({},c))};
Em.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Eb?Dm:Am)(this.name,a)};
function Gm(a,b){return Fm(a,b)}
;var Hm={},Im=Gm("ytGcfConfig",{Za:(Hm.coldConfigStore={eb:1},Hm.hotConfigStore={eb:1},Hm),Eb:!1,upgrade:function(a,b){b(1)&&(Yl(gl(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),Yl(gl(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Jm(a){return jm(Im(),a)}
function Km(a,b,c){var d,e,f;return x(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:Y()},w(g,Jm(c),2);case 2:return e=g.i,w(g,e.clear("hotConfigStore"),3);case 3:return w(g,Tl(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function Lm(a,b,c,d){var e,f,g;return x(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:Y()},w(h,Jm(d),2);case 2:return f=h.i,w(h,f.clear("coldConfigStore"),3);case 3:return w(h,Tl(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function Mm(a){var b,c;return x(function(d){return 1==d.h?w(d,Jm(a),2):3!=d.h?(b=d.i,c=void 0,w(d,fl(b,["coldConfigStore"],{mode:"readwrite",W:!0},function(e){return cm(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.la()})}),3)):d.return(c)})}
function Nm(a){var b,c;return x(function(d){return 1==d.h?w(d,Jm(a),2):3!=d.h?(b=d.i,c=void 0,w(d,fl(b,["hotConfigStore"],{mode:"readwrite",W:!0},function(e){return cm(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.la()})}),3)):d.return(c)})}
;function Om(){this.h=0}
function Pm(a,b,c){var d,e,f;return x(function(g){if(1==g.h){if(!U("update_log_event_config"))return g.D(0);c&&(a.i=c,B("yt.gcf.config.hotConfigGroup",a.i));a.hotHashData=b;B("yt.gcf.config.hotHashData",a.hotHashData);return(d=um())?c?g.D(4):w(g,Nm(d),5):g.D(0)}4!=g.h&&(e=g.i,c=null==(f=e)?void 0:f.config);return w(g,Km(c,b,d),0)})}
function Qm(a,b,c){var d,e,f,g;return x(function(h){if(1==h.h){if(!U("update_log_event_config"))return h.D(0);a.coldHashData=b;B("yt.gcf.config.coldHashData",a.coldHashData);return(d=um())?c?h.D(4):w(h,Mm(d),5):h.D(0)}4!=h.h&&(e=h.i,c=null==(f=e)?void 0:f.config);if(!c)return h.D(0);g=c.configData;return w(h,Lm(c,b,g,d),0)})}
;function Rm(){return"INNERTUBE_API_KEY"in $i&&"INNERTUBE_API_VERSION"in $i}
function Sm(){return{Wc:S("INNERTUBE_API_KEY"),Xc:S("INNERTUBE_API_VERSION"),Kb:S("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),jc:S("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Yc:S("INNERTUBE_CONTEXT_CLIENT_NAME",1),kc:S("INNERTUBE_CONTEXT_CLIENT_VERSION"),mc:S("INNERTUBE_CONTEXT_HL"),lc:S("INNERTUBE_CONTEXT_GL"),Zc:S("INNERTUBE_HOST_OVERRIDE")||"",bd:!!S("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),ad:!!S("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",!1),appInstallData:S("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Tm(a){var b={client:{hl:a.mc,gl:a.lc,clientName:a.jc,clientVersion:a.kc,configInfo:a.Kb}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=z.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=S("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=jj();0<c.length&&(b.request={internalExperimentFlags:c});Um(a,void 0,b);Vm(void 0,b);Wm(void 0,b);Xm(a,void 0,b);Ym(void 0,b);U("start_sending_config_hash")&&Zm(void 0,b);S("DELEGATED_SESSION_ID")&&
!U("pageid_as_header_web")&&(b.user={onBehalfOfUser:S("DELEGATED_SESSION_ID")});a=Object;c=a.assign;for(var d=b.client,e={},f=u(Object.entries(Bj(S("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=u(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function $m(a){var b=new Ai,c=new pi;G(c,1,a.mc);G(c,2,a.lc);G(c,16,a.Yc);G(c,17,a.kc);if(a.Kb){var d=a.Kb,e=new li;d.coldConfigData&&G(e,1,d.coldConfigData);d.appInstallData&&G(e,6,d.appInstallData);d.coldHashData&&G(e,3,d.coldHashData);d.hotHashData&&G(e,5,d.hotHashData);H(c,li,62,e)}if((d=z.devicePixelRatio)&&1!=d){if(null!=d&&"number"!==typeof d)throw Error("Value of float/double field must be a number|null|undefined, found "+typeof d+": "+d);G(c,65,d)}d=S("EXPERIMENTS_TOKEN","");""!==d&&G(c,
54,d);d=jj();if(0<d.length){e=new ti;for(var f=0;f<d.length;f++){var g=new ri;G(g,1,d[f].key);fd(g,2,si,d[f].value);ld(e,15,ri,g)}H(b,ti,5,e)}Um(a,c);Vm(b);Wm(c);Xm(a,c);Ym(c);U("start_sending_config_hash")&&Zm(c);S("DELEGATED_SESSION_ID")&&!U("pageid_as_header_web")&&(a=new yi,G(a,3,S("DELEGATED_SESSION_ID")));a=u(Object.entries(Bj(S("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=u(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?G(c,12,e):"cmodel"===d?G(c,13,e):"cbr"===d?G(c,87,e):"cbrver"===
d?G(c,88,e):"cos"===d?G(c,18,e):"cosver"===d?G(c,19,e):"cplatform"===d&&G(c,42,e);H(b,pi,1,c);return b}
function Um(a,b,c){a=a.jc;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=hd(b,mi,96)||new mi;var d=kk();d=Object.keys(Ci).indexOf(d);d=-1===d?null:d;null!==d&&G(c,3,d);H(b,mi,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=kk())}
function Vm(a,b){var c=C("yt.embedded_player.embed_url");c&&(a?(b=hd(a,vi,7)||new vi,G(b,4,c),H(a,vi,7,b)):b&&(b.thirdParty={embedUrl:c}))}
function Wm(a,b){var c;if(U("web_log_memory_total_kbytes")&&(null==(c=z.navigator)?0:c.deviceMemory)){var d;c=null==(d=z.navigator)?void 0:d.deviceMemory;a?G(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function Xm(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=hd(b,li,62))?d:new li;G(c,6,a.appInstallData);H(b,li,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Ym(a,b){a:{var c=pk();if(c){var d=lk[c.type||"unknown"]||"CONN_UNKNOWN";c=lk[c.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===d&&"CONN_UNKNOWN"!==c&&(d=c);if("CONN_UNKNOWN"!==d)break a;if("CONN_UNKNOWN"!==c){d=c;break a}}d=void 0}d&&(a?G(a,61,mk[d]):b&&(b.client.connectionType=d));U("web_log_effective_connection_type")&&(d=pk(),d=null!=d&&d.effectiveType?ok.hasOwnProperty(d.effectiveType)?ok[d.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,d&&(a?G(a,94,nk[d]):
b&&(b.client.effectiveConnectionType=d)))}
function an(a,b,c){c=void 0===c?{}:c;var d={};S("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":S("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||S("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.Kd||S("AUTHORIZATION");if(!b)if(a)b="Bearer "+C("gapi.auth.getToken")().Jd;else{jk.h||(jk.h=new jk);a={};if(c=je([]))a.Authorization=c,c=void 0,void 0===c&&(c=Number(S("SESSION_INDEX",0)),c=isNaN(c)?0:c),U("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=
c.toString()),"INNERTUBE_HOST_OVERRIDE"in $i||(a["X-Origin"]=window.location.origin),"DELEGATED_SESSION_ID"in $i&&(a["X-Goog-PageId"]=S("DELEGATED_SESSION_ID"));U("pageid_as_header_web")||delete a["X-Goog-PageId"];d=Object.assign({},d,a)}b&&(d.Authorization=b);return d}
function Zm(a,b){Om.h||(Om.h=new Om);var c=Om.h;var d=Y()-c.h;if(0!==c.h&&d<W("send_config_hash_timer"))c=void 0;else{d=C("yt.gcf.config.coldConfigData");var e=C("yt.gcf.config.hotHashData"),f=C("yt.gcf.config.coldHashData");d&&e&&f&&(c.h=Y());c={coldConfigData:d,hotHashData:e,coldHashData:f}}if(e=c)if(c=e.coldConfigData,d=e.coldHashData,e=e.hotHashData,c&&d&&e)if(a){var g;b=null!=(g=hd(a,li,62))?g:new li;G(b,1,c);G(b,3,d);G(b,5,e);H(a,li,62,b)}else b&&(b.client.configInfo=b.client.configInfo||{},
b.client.configInfo.coldConfigData=c,b.client.configInfo.coldHashData=d,b.client.configInfo.hotHashData=e)}
;var bn=C("ytPubsub2Pubsub2Instance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.nb;K.prototype.publish=K.prototype.ab;K.prototype.clear=K.prototype.clear;B("ytPubsub2Pubsub2Instance",bn);B("ytPubsub2Pubsub2SubscribedKeys",C("ytPubsub2Pubsub2SubscribedKeys")||{});B("ytPubsub2Pubsub2TopicToKeys",C("ytPubsub2Pubsub2TopicToKeys")||{});B("ytPubsub2Pubsub2IsAsync",C("ytPubsub2Pubsub2IsAsync")||{});B("ytPubsub2Pubsub2SkipSubKey",null);
function cn(a,b){var c=C("ytPubsub2Pubsub2Instance");c&&c.publish.call(c,a.toString(),a,b)}
;function dn(a,b,c){c=void 0===c?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&cn("meta_logging_csi_event",{Wd:a,Vd:b})}
;var en=W("max_body_size_to_compress",5E5),fn=W("min_body_size_to_compress",500),gn=!0,hn=0,jn=0,kn=W("compression_performance_threshold",250),ln=W("slow_compressions_before_abandon_count",10);
function mn(a,b,c,d){var e=Y(),f={startTime:e},g={startTime:e,ticks:{},infos:{}};if(gn&&void 0!==hi)try{var h=(new Blob(b.split(""))).size;if(!(h>en||h<fn)){var k=hi(le(b)),l=Y();f.endTime=l;g.ticks.gelc=l;jn++;U("disable_compression_due_to_performance_degredation")&&l-e>=kn&&(hn++,U("abandon_compression_after_N_slow_zips")?jn===W("compression_disable_point")&&hn>ln&&(gn=!1):gn=!1);U("gel_compression_csi_killswitch")||!U("log_gel_compression_latency")&&!U("log_gel_compression_latency_lr")||(U("use_new_cml")?
dn("gel_compression",g,{sampleRate:.1}):.001>=Math.random()&&cn("gel_compression_latency_payload",f));if(window.Blob){var m=k.length<(new Blob(b.split(""))).size;m||gj(new qk("Compressed req body is larger than uncompressed","original size: "+(new Blob(b.split(""))).size,"compressed size: "+k.length));var n=m}else n=!0;if(n||!U("only_compress_gel_if_smaller"))c.headers||(c.headers={}),c.headers["Content-Encoding"]="gzip",c.postBody=k,c.postParams=void 0}d(a,c)}catch(r){hj(r),d(a,c)}else d(a,c)}
;function nn(a){a=Object.assign({},a);delete a.Authorization;var b=je();if(b){var c=new Gf;c.update(S("INNERTUBE_API_KEY"));c.update(b);a.hash=Fc(c.digest(),3)}return a}
;var on;function pn(){on||(on=new yk("yt.innertube"));return on}
function qn(a,b,c,d){if(d)return null;d=pn().get("nextId",!0)||1;var e=pn().get("requests",!0)||{};e[d]={method:a,request:b,authState:nn(c),requestTime:Math.round(Y())};pn().set("nextId",d+1,86400,!0);pn().set("requests",e,86400,!0);return d}
function rn(a){var b=pn().get("requests",!0)||{};delete b[a];pn().set("requests",b,86400,!0)}
function sn(a){var b=pn().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(Y())-d.requestTime)){var e=d.authState,f=nn(an(!1));nb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Y())),tn(a,d.method,e,{}));delete b[c]}}pn().set("requests",b,86400,!0)}}
;function un(a){this.rb=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.Ta=function(){};
this.now=Date.now;this.hb=!1;var b;this.Bc=null!=(b=a.Bc)?b:100;var c;this.zc=null!=(c=a.zc)?c:1;var d;this.xc=null!=(d=a.xc)?d:2592E6;var e;this.wc=null!=(e=a.wc)?e:12E4;var f;this.yc=null!=(f=a.yc)?f:5E3;var g;this.I=null!=(g=a.I)?g:void 0;this.wb=!!a.wb;var h;this.ub=null!=(h=a.ub)?h:.1;var k;this.Bb=null!=(k=a.Bb)?k:10;a.handleError&&(this.handleError=a.handleError);a.Ta&&(this.Ta=a.Ta);a.hb&&(this.hb=a.hb);a.rb&&(this.rb=a.rb);this.J=a.J;this.ia=a.ia;this.O=a.O;this.R=a.R;this.xa=a.xa;this.Rb=
a.Rb;this.Qb=a.Qb;vn(this)&&(!this.J||this.J("networkless_logging"))&&wn(this)}
function wn(a){vn(a)&&!a.hb&&(a.h=!0,a.wb&&Math.random()<=a.ub&&a.O.Lc(a.I),xn(a),a.R.da()&&a.mb(),a.R.Ka(a.Rb,a.mb.bind(a)),a.R.Ka(a.Qb,a.Yb.bind(a)))}
q=un.prototype;q.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(vn(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.O.set(d,this.I).then(function(e){d.id=e;c.R.da()&&yn(c,d)}).catch(function(e){yn(c,d);
zn(c,e)})}else this.xa(a,b)};
q.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(vn(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.J&&this.J("nwl_skip_retry")&&(e.skipRetry=c);if(this.R.da()||this.J&&this.J("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return x(function(k){if(1==k.h)return w(k,d.O.set(e,d.I).catch(function(l){zn(d,l)}),2);
f(g,h);k.h=0})}}this.xa(a,b,e.skipRetry)}else this.O.set(e,this.I).catch(function(g){d.xa(a,b,e.skipRetry);
zn(d,g)})}else this.xa(a,b,this.J&&this.J("nwl_skip_retry")&&c)};
q.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(vn(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.O.Ra(d.id,c.I):e=!0;c.R.Ma&&c.J&&c.J("vss_network_hint")&&c.R.Ma(!0);f(g,h)};
this.xa(d.url,d.options);this.O.set(d,this.I).then(function(g){d.id=g;e&&c.O.Ra(d.id,c.I)}).catch(function(g){zn(c,g)})}else this.xa(a,b)};
q.mb=function(){var a=this;if(!vn(this))throw Rk("throttleSend");this.i||(this.i=this.ia.ka(function(){var b;return x(function(c){if(1==c.h)return w(c,a.O.fc("NEW",a.I),2);if(3!=c.h)return b=c.i,b?w(c,yn(a,b),3):(a.Yb(),c.return());a.i&&(a.i=0,a.mb());c.h=0})},this.Bc))};
q.Yb=function(){this.ia.Qa(this.i);this.i=0};
function yn(a,b){var c,d;return x(function(e){switch(e.h){case 1:if(!vn(a))throw c=Rk("immediateSend"),c;if(void 0===b.id){e.D(2);break}return w(e,a.O.dd(b.id,a.I),3);case 3:(d=e.i)||a.Ta(Error("The request cannot be found in the database."));case 2:if(An(a,b,a.xc)){e.D(4);break}a.Ta(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.D(5);break}return w(e,a.O.Ra(b.id,a.I),5);case 5:return e.return();case 4:b.skipRetry||(b=Bn(a,b));if(!b){e.D(0);break}if(!b.skipRetry||
void 0===b.id){e.D(8);break}return w(e,a.O.Ra(b.id,a.I),8);case 8:a.xa(b.url,b.options,!!b.skipRetry),e.h=0}})}
function Bn(a,b){if(!vn(a))throw Rk("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return x(function(m){switch(m.h){case 1:g=Cn(f);(h=Dn(f))&&a.J&&a.J("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.J&&a.J("nwl_consider_error_code")&&g||a.J&&!a.J("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.Bb)){m.D(2);break}if(!a.R.Db){m.D(3);break}return w(m,a.R.Db(),3);case 3:if(a.R.da()){m.D(2);break}c(e,f);if(!a.J||!a.J("nwl_consider_error_code")||void 0===(null==(k=b)?void 0:k.id)){m.D(6);
break}return w(m,a.O.Sb(b.id,a.I,!1),6);case 6:return m.return();case 2:if(a.J&&a.J("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.Bb)return m.return();a.potentialEsfErrorCounter++;if(void 0===(null==(l=b)?void 0:l.id)){m.D(8);break}return b.sendCount<a.zc?w(m,a.O.Sb(b.id,a.I,!0,h?!1:void 0),12):w(m,a.O.Ra(b.id,a.I),8);case 12:a.ia.ka(function(){a.R.da()&&a.mb()},a.yc);
case 8:c(e,f),m.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return x(function(h){if(1==h.h)return void 0===(null==(g=b)?void 0:g.id)?h.D(2):w(h,a.O.Ra(b.id,a.I),2);a.R.Ma&&a.J&&a.J("vss_network_hint")&&a.R.Ma(!0);d(e,f);h.h=0})};
return b}
function An(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function xn(a){if(!vn(a))throw Rk("retryQueuedRequests");a.O.fc("QUEUED",a.I).then(function(b){b&&!An(a,b,a.wc)?a.ia.ka(function(){return x(function(c){if(1==c.h)return void 0===b.id?c.D(2):w(c,a.O.Sb(b.id,a.I),2);xn(a);c.h=0})}):a.R.da()&&a.mb()})}
function zn(a,b){a.Ec&&!a.R.da()?a.Ec(b):a.handleError(b)}
function vn(a){return!!a.I||a.rb}
function Cn(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function Dn(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var En;
function Fn(){if(En)return En();var a={};En=Gm("LogsDatabaseV2",{Za:(a.LogsRequestsStore={eb:2},a),Eb:!1,upgrade:function(b,c,d){c(2)&&gl(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),Yl(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return En()}
;function Gn(a){return jm(Fn(),a)}
function Hn(a,b){var c,d,e,f,g;return x(function(h){if(1==h.h)return c={startTime:Y(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},d={startTime:Y(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},w(h,Gn(b),2);if(3!=h.h)return e=h.i,f=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:S("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),w(h,Tl(e,"LogsRequestsStore",f),3);g=h.i;c.od=Y();d.ticks.tc=Y();In(d,c);return h.return(g)})}
function Jn(a,b){var c,d,e,f,g,h,k,l;return x(function(m){if(1==m.h)return c={startTime:Y(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},d={startTime:Y(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},w(m,Gn(b),2);if(3!=m.h)return e=m.i,f=S("INNERTUBE_CONTEXT_CLIENT_NAME",0),g=[a,f,0],h=[a,f,Y()],k=IDBKeyRange.bound(g,h),l=void 0,w(m,fl(e,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(n){return cm(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:k,direction:"prev"},
function(r){r.la()&&(l=r.la(),"NEW"===a&&(l.status="QUEUED",r.update(l)))})}),3);
c.od=Y();d.ticks.tc=Y();In(d,c);return m.return(l)})}
function Kn(a,b){var c;return x(function(d){if(1==d.h)return w(d,Gn(b),2);c=d.i;return d.return(fl(c,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",bl(f.h.put(g,void 0)).then(function(){return g})})}))})}
function Ln(a,b,c,d){c=void 0===c?!0:c;var e;return x(function(f){if(1==f.h)return w(f,Gn(b),2);e=f.i;return f.return(fl(e,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),void 0!==d&&(k.options.compress=d),bl(h.h.put(k,void 0)).then(function(){return k})):Vk.resolve(void 0)})}))})}
function Mn(a,b){var c;return x(function(d){if(1==d.h)return w(d,Gn(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function Nn(a){var b,c;return x(function(d){if(1==d.h)return w(d,Gn(a),2);b=d.i;c=Y()-2592E6;return w(d,fl(b,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(e){return $l(e.objectStore("LogsRequestsStore"),{},function(f){if(f.la().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function On(){x(function(a){return w(a,Cm(),0)})}
function In(a,b){U("nwl_csi_killswitch")||(U("use_new_cml")?dn("networkless_performance",a,{sampleRate:1}):.01>=Math.random()&&cn("nwl_transaction_latency_payload",b))}
;var Pn={},Qn=Gm("ServiceWorkerLogsDatabase",{Za:(Pn.SWHealthLog={eb:1},Pn),Eb:!0,upgrade:function(a,b){b(1)&&Yl(gl(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function Rn(a){return jm(Qn(),a)}
function Sn(a){var b,c;x(function(d){if(1==d.h)return w(d,Rn(a),2);b=d.i;c=Y()-2592E6;return w(d,fl(b,["SWHealthLog"],{mode:"readwrite",W:!0},function(e){return $l(e.objectStore("SWHealthLog"),{},function(f){if(f.la().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Tn(a){var b;return x(function(c){if(1==c.h)return w(c,Rn(a),2);b=c.i;return w(c,b.clear("SWHealthLog"),0)})}
;var Un={},Vn=0;function Wn(a){var b=new Image,c=""+Vn++;Un[c]=b;b.onload=b.onerror=function(){delete Un[c]};
b.src=a}
;function Xn(){this.h=new Map;this.i=!1}
function Yn(){if(!Xn.h){var a=C("yt.networkRequestMonitor.instance")||new Xn;B("yt.networkRequestMonitor.instance",a);Xn.h=a}return Xn.h}
Xn.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
Xn.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
Xn.prototype.removeParams=function(a){return a.split("?")[0]};
Xn.prototype.removeParams=Xn.prototype.removeParams;Xn.prototype.isEndpointCFR=Xn.prototype.isEndpointCFR;Xn.prototype.requestComplete=Xn.prototype.requestComplete;Xn.getInstance=Yn;var Zn;function $n(){Zn||(Zn=new yk("yt.offline"));return Zn}
function ao(a){if(U("offline_error_handling")){var b=$n().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);$n().set("errors",b,2592E3,!0)}}
;function Z(){Oe.call(this);var a=this;this.m=!1;this.i=Ue();this.i.Ka("networkstatus-online",function(){if(a.m&&U("offline_error_handling")){var b=$n().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new qk(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;gj(d)}$n().set("errors",{},2592E3,!0)}}})}
v(Z,Oe);function bo(){if(!Z.h){var a=C("yt.networkStatusManager.instance")||new Z;B("yt.networkStatusManager.instance",a);Z.h=a}return Z.h}
q=Z.prototype;q.da=function(){return this.i.da()};
q.Ma=function(a){this.i.i=a};
q.Tc=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
q.Oc=function(){this.m=!0};
q.Ka=function(a,b){return this.i.Ka(a,b)};
q.Db=function(a){a=Se(this.i,a);a.then(function(b){U("use_cfr_monitor")&&Yn().requestComplete("generate_204",b)});
return a};
Z.prototype.sendNetworkCheckRequest=Z.prototype.Db;Z.prototype.listen=Z.prototype.Ka;Z.prototype.enableErrorFlushing=Z.prototype.Oc;Z.prototype.getWindowStatus=Z.prototype.Tc;Z.prototype.networkStatusHint=Z.prototype.Ma;Z.prototype.isNetworkAvailable=Z.prototype.da;Z.getInstance=bo;function co(a){a=void 0===a?{}:a;Oe.call(this);var b=this;this.i=this.H=0;this.m=bo();var c=C("yt.networkStatusManager.instance.listen").bind(this.m);c&&(a.Cb?(this.Cb=a.Cb,c("networkstatus-online",function(){eo(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){eo(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){Pe(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Pe(b,"publicytnetworkstatus-offline")})))}
v(co,Oe);co.prototype.da=function(){var a=C("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.m)():!0};
co.prototype.Ma=function(a){var b=C("yt.networkStatusManager.instance.networkStatusHint").bind(this.m);b&&b(a)};
co.prototype.Db=function(a){var b=this,c;return x(function(d){c=C("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.m);return U("skip_network_check_if_cfr")&&Yn().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.Ma((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.da())})):c?d.return(c(a)):d.return(!0)})};
function eo(a,b){a.Cb?a.i?(Ve.Qa(a.H),a.H=Ve.ka(function(){a.s!==b&&(Pe(a,b),a.s=b,a.i=Y())},a.Cb-(Y()-a.i))):(Pe(a,b),a.s=b,a.i=Y()):Pe(a,b)}
;var fo;function go(){var a=un.call;fo||(fo=new co({Od:!0,Nd:!0}));a.call(un,this,{O:{Lc:Nn,Ra:Mn,fc:Jn,dd:Kn,Sb:Ln,set:Hn},R:fo,handleError:function(b,c,d){var e,f=null==d?void 0:null==(e=d.error)?void 0:e.code;if(400===f||415===f){var g;gj(new qk(b.message,c,null==d?void 0:null==(g=d.error)?void 0:g.code),void 0,void 0,void 0,!0)}else gj(b)},
Ta:hj,xa:ho,now:Y,Ec:ao,ia:xk(),Rb:"publicytnetworkstatus-online",Qb:"publicytnetworkstatus-offline",wb:!0,ub:.1,Bb:W("potential_esf_error_limit",10),J:U,hb:!(rk()&&"www.youtube-nocookie.com"!==$b(document.location.toString()))});this.j=new Vf;U("networkless_immediately_drop_all_requests")&&On();Dm("LogsDatabaseV2")}
v(go,un);function io(){var a=C("yt.networklessRequestController.instance");a||(a=new go,B("yt.networklessRequestController.instance",a),U("networkless_logging")&&vm().then(function(b){a.I=b;wn(a);a.j.resolve();a.wb&&Math.random()<=a.ub&&a.I&&Sn(a.I);U("networkless_immediately_drop_sw_health_store")&&jo(a)}));
return a}
go.prototype.writeThenSend=function(a,b){b||(b={});rk()||(this.h=!1);un.prototype.writeThenSend.call(this,a,b)};
go.prototype.sendThenWrite=function(a,b,c){b||(b={});rk()||(this.h=!1);un.prototype.sendThenWrite.call(this,a,b,c)};
go.prototype.sendAndWrite=function(a,b){b||(b={});rk()||(this.h=!1);un.prototype.sendAndWrite.call(this,a,b)};
go.prototype.awaitInitialization=function(){return this.j.promise};
function jo(a){var b;x(function(c){if(!a.I)throw b=Rk("clearSWHealthLogsDb"),b;return c.return(Tn(a.I).catch(function(d){a.handleError(d)}))})}
function ho(a,b,c){U("use_cfr_monitor")&&ko(a,b);if(U("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(Y())));else{var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(Y())}if(c&&0===Object.keys(b).length){var e=void 0===e?"":e;var f=void 0===f?!1:f;if(a)if(e)Qj(a,void 0,"POST",e);else if(S("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))Qj(a,void 0,"GET","",void 0,void 0,f);else{b:{try{var g=new $a({url:a});if(g.j&&g.i||
g.m){var h=Zb(a.match(Yb)[5]||null);var k=!(!h||!h.endsWith("/aclk")||"1"!==ec(a,"ri"));break b}}catch(m){}k=!1}if(k){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var l=!0;break b}}catch(m){}l=!1}c=l?!0:!1}else c=!1;c||Wn(a)}}else b.compress?b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),mn(a,b.postBody,b,Nj)):mn(a,JSON.stringify(b.postParams),b,Vj):Nj(a,b)}
function ko(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Yn().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Yn().requestComplete(a,!0);d(e,f)}}
;var lo=z.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1};B("ytNetworklessLoggingInitializationOptions",lo);function mo(a){var b=this;this.config_=null;a?this.config_=a:Rm()&&(this.config_=Sm());uk(function(){sn(b)},5E3)}
mo.prototype.isReady=function(){!this.config_&&Rm()&&(this.config_=Sm());return!!this.config_};
function tn(a,b,c,d){function e(y){y=void 0===y?!1:y;var A;if(d.retry&&"www.youtube-nocookie.com"!=h&&(y||U("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(A=qn(b,c,l,k)),A)){var I=g.onSuccess,O=g.onFetchSuccess;g.onSuccess=function(Q,wa){rn(A);I(Q,wa)};
c.onFetchSuccess=function(Q,wa){rn(A);O(Q,wa)}}try{if(y&&d.retry&&!d.qc.bypassNetworkless)g.method="POST",d.qc.writeThenSend?io().writeThenSend(p,g):io().sendAndWrite(p,g);
else if(d.compress)if(g.postBody){var T=g.postBody;"string"!==typeof T&&(T=JSON.stringify(g.postBody));mn(p,T,g,Nj)}else mn(p,JSON.stringify(g.postParams),g,Vj);else U("web_all_payloads_via_jspb")?Nj(p,g):Vj(p,g)}catch(Q){if("InvalidAccessError"==Q.name)A&&(rn(A),A=0),hj(Error("An extension is blocking network request."));else throw Q;}A&&uk(function(){sn(a)},5E3)}
!S("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&hj(new qk("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new qk("innertube xhrclient not ready",b,c,d);gj(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(y,A){if(d.onSuccess)d.onSuccess(A)},
onFetchSuccess:function(y){if(d.onSuccess)d.onSuccess(y)},
onError:function(y,A){if(d.onError)d.onError(A)},
onFetchError:function(y){if(d.onError)d.onError(y)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.Zc)&&(h=f);var k=a.config_.bd||!1,l=an(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var m="/youtubei/"+a.config_.Xc+"/"+b,n={alt:"json"},r=a.config_.ad&&f;r=r&&f.startsWith("Bearer");r||(n.key=a.config_.Wc);var p=Cj(""+h+m,n||{},!0);C("ytNetworklessLoggingInitializationOptions")&&
lo.isNwlInitialized?tm().then(function(y){e(y)}):e(!1)}
;function no(a){this.X=a;this.h=null;this.s=0;this.N=null;this.H=0;this.i=[];for(a=0;4>a;a++)this.i.push(0);this.m=0;this.Fb=sj(window,"mousemove",Xa(this.Gb,this));this.Hb=uj(Xa(this.Ga,this),25)}
D(no,me);no.prototype.Gb=function(a){void 0===a.h&&nj(a);var b=a.h;void 0===a.i&&nj(a);this.h=new Cd(b,a.i)};
no.prototype.Ga=function(){if(this.h){var a=Y();if(0!=this.s){var b=this.N,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.s);this.i[this.m]=.5<Math.abs((d-this.H)/this.H)?1:0;for(c=b=0;4>c;c++)b+=this.i[c]||0;3<=b&&this.X();this.H=d}this.s=a;this.N=this.h;this.m=(this.m+1)%4}};
no.prototype.Sa=function(){window.clearInterval(this.Hb);qj(this.Fb)};var oo={};
function po(){var a={},b=void 0===a.kd?!1:a.kd;a=void 0===a.Pc?!0:a.Pc;if(null==C("_lact",window)){var c=parseInt(S("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;B("_lact",c,window);B("_fact",c,window);-1==c&&qo();sj(document,"keydown",qo);sj(document,"keyup",qo);sj(document,"mousedown",qo);sj(document,"mouseup",qo);b?sj(window,"touchmove",function(){ro("touchmove",200)},{passive:!0}):(sj(window,"resize",function(){ro("resize",200)}),a&&sj(window,"scroll",function(){ro("scroll",200)}));
new no(function(){ro("mouse",100)});
sj(document,"touchstart",qo,{passive:!0});sj(document,"touchend",qo,{passive:!0})}}
function ro(a,b){oo[a]||(oo[a]=!0,Ve.ka(function(){qo();oo[a]=!1},b))}
function qo(){null==C("_lact",window)&&po();var a=Date.now();B("_lact",a,window);-1==C("_fact",window)&&B("_fact",a,window);(a=C("ytglobal.ytUtilActivityCallback_"))&&a()}
function so(){var a=C("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var to=z.ytPubsubPubsubInstance||new K,uo=z.ytPubsubPubsubSubscribedKeys||{},vo=z.ytPubsubPubsubTopicToKeys||{},wo=z.ytPubsubPubsubIsSynchronous||{};K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.nb;K.prototype.publish=K.prototype.ab;K.prototype.clear=K.prototype.clear;B("ytPubsubPubsubInstance",to);B("ytPubsubPubsubTopicToKeys",vo);B("ytPubsubPubsubIsSynchronous",wo);B("ytPubsubPubsubSubscribedKeys",uo);var xo=Symbol("injectionDeps");function yo(){this.key=Om}
function zo(){this.i=new Map;this.h=new Map}
zo.prototype.resolve=function(a){return a instanceof yo?Ao(this,a.key,[],!0):Ao(this,a,[])};
function Ao(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.i.get(b);c.push(b);if(void 0!==d.rd)var e=d.rd;else if(d.qd)e=d[xo]?Bo(a,d[xo],c):[],e=d.qd.apply(d,ka(e));else if(d.pd){e=d.pd;var f=e[xo]?Bo(a,e[xo],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ka(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Ud||a.h.set(b,e);return e}
function Bo(a,b,c){return b?b.map(function(d){return d instanceof yo?Ao(a,d.key,c,!0):Ao(a,d,c)}):[]}
;var Co;function Do(){this.store={};this.h={}}
Do.prototype.storePayload=function(a,b){a=Eo(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);return a};
Do.prototype.extractMatchingEntries=function(a){a=Fo(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ka(this.store[a[c]])),delete this.store[a[c]]);return b};
Do.prototype.getSequenceCount=function(a){a=Fo(this,a);for(var b=0,c=0;c<a.length;c++)b+=this.store[a[c]].length||0;return b};
function Fo(a,b){var c=Eo(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(1>=d.length&&Eo(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(Go(b.auth,g[0])){var h=b.isJspb;Go(void 0===h?"undefined":h?"true":"false",g[1])&&Go(b.cttAuthInfo,g[2])&&e.push(d[f])}}return a.h[c]=e}
function Go(a,b){return void 0===a||"undefined"===a?!0:a===b}
Do.prototype.getSequenceCount=Do.prototype.getSequenceCount;Do.prototype.extractMatchingEntries=Do.prototype.extractMatchingEntries;Do.prototype.storePayload=Do.prototype.storePayload;function Eo(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo].join("/")}
;var Ho=W("initial_gel_batch_timeout",2E3),Io=W("gel_queue_timeout_max_ms",6E4),Jo=Math.pow(2,16)-1,Ko=void 0;function Lo(){this.j=this.h=this.i=0}
var Mo=new Lo,No=new Lo,Oo,Po=!0,Qo=z.ytLoggingTransportTokensToCttTargetIds_||{};B("ytLoggingTransportTokensToCttTargetIds_",Qo);var Ro=z.ytLoggingTransportTokensToJspbCttTargetIds_||{};B("ytLoggingTransportTokensToJspbCttTargetIds_",Ro);var So={};function To(){var a=C("yt.logging.ims");a||(a=new Do,B("yt.logging.ims",a));return a}
function Uo(a,b){U("web_all_payloads_via_jspb")&&hj(new qk("transport.log called for JSON in JSPB only experiment"));if("log_event"===a.endpoint){Vo(a);var c=Wo(a);So[c]=!0;var d={cttAuthInfo:c,isJspb:!1};To().storePayload(d,a.payload);Xo(b,c,!1,d)}}
function Yo(a,b){if("log_event"===a.endpoint){Vo(void 0,a);var c=Wo(a,!0);So[c]=!0;var d={cttAuthInfo:c,isJspb:!0};To().storePayload(d,a.payload.toJSON());Xo(b,c,!0,d)}}
function Xo(a,b,c,d){c=void 0===c?!1:c;a&&(Ko=new a);a=W("tvhtml5_logging_max_batch_ads_fork")||W("tvhtml5_logging_max_batch")||W("web_logging_max_batch")||100;var e=Y(),f=c?No.j:Mo.j,g=0;d&&(g=To().getSequenceCount(d));g>=a?Oo||(Oo=Zo(function(){$o({writeThenSend:!0},U("flush_only_full_queue")?b:void 0,c);Oo=void 0},0)):10<=e-f&&(ap(c),c?No.j=e:Mo.j=e)}
function bp(a,b){U("web_all_payloads_via_jspb")&&hj(new qk("transport.logIsolatedGelPayload called in JSPB only experiment"));if("log_event"===a.endpoint){Vo(a);var c=Wo(a),d=new Map;d.set(c,[a.payload]);b&&(Ko=new b);return new Wf(function(e,f){Ko&&Ko.isReady()?cp(d,Ko,e,f,{bypassNetworkless:!0},!0):e()})}}
function dp(a,b){if("log_event"===a.endpoint){Vo(void 0,a);var c=Wo(a,!0),d=new Map;d.set(c,[a.payload.toJSON()]);b&&(Ko=new b);return new Wf(function(e){Ko&&Ko.isReady()?ep(d,Ko,e,{bypassNetworkless:!0},!0):e()})}}
function Wo(a,b){var c="";if(a.dangerousLogToVisitorSession)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new Ui;c.videoId?fd(d,1,od,c.videoId):c.playlistId&&fd(d,2,od,c.playlistId);Ro[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Qo[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function $o(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;!c&&U("web_all_payloads_via_jspb")&&hj(new qk("transport.flushLogs called for JSON in JSPB only experiment"));new Wf(function(d,e){c?(fp(No.i),fp(No.h),No.h=0):(fp(Mo.i),fp(Mo.h),Mo.h=0);if(Ko&&Ko.isReady()){var f=a,g=c,h=Ko;f=void 0===f?{}:f;g=void 0===g?!1:g;var k=new Map,l=new Map;if(void 0!==b)g?(e=To().extractMatchingEntries({isJspb:g,cttAuthInfo:b}),k.set(b,e),ep(k,h,d,f)):(k=To().extractMatchingEntries({isJspb:g,cttAuthInfo:b}),l.set(b,
k),cp(l,h,d,e,f));else if(g){e=u(Object.keys(So));for(g=e.next();!g.done;g=e.next())l=g.value,g=To().extractMatchingEntries({isJspb:!0,cttAuthInfo:l}),0<g.length&&k.set(l,g),delete So[l];ep(k,h,d,f)}else{k=u(Object.keys(So));for(g=k.next();!g.done;g=k.next()){g=g.value;var m=To().extractMatchingEntries({isJspb:!1,cttAuthInfo:g});0<m.length&&l.set(g,m);delete So[g]}cp(l,h,d,e,f)}}else ap(c),d()})}
function ap(a){a=void 0===a?!1:a;if(U("web_gel_timeout_cap")&&(!a&&!Mo.h||a&&!No.h)){var b=Zo(function(){$o({writeThenSend:!0},void 0,a)},Io);
a?No.h=b:Mo.h=b}fp(a?No.i:Mo.i);b=S("LOGGING_BATCH_TIMEOUT",W("web_gel_debounce_ms",1E4));U("shorten_initial_gel_batch_timeout")&&Po&&(b=Ho);b=Zo(function(){$o({writeThenSend:!0},void 0,a)},b);
a?No.i=b:Mo.i=b}
function cp(a,b,c,d,e,f){e=void 0===e?{}:e;var g=Math.round(Y()),h=a.size,k={};a=u(a);for(var l=a.next();!l.done;k={ob:k.ob,Fa:k.Fa,cb:k.cb,qb:k.qb,pb:k.pb},l=a.next()){var m=u(l.value);l=m.next().value;m=m.next().value;k.Fa=ob({context:Tm(b.config_||Sm())});if(!Oa(m)&&!U("throw_err_when_logevent_malformed_killswitch")){d();break}k.Fa.events=m;(m=Qo[l])&&gp(k.Fa,l,m);delete Qo[l];k.cb="visitorOnlyApprovedKey"===l;hp(k.Fa,g,k.cb);ip(e);k.qb=function(n){U("update_log_event_config")&&Ve.ka(function(){return x(function(r){return w(r,
jp(n),0)})});
h--;h||c()};
k.ob=0;k.pb=function(n){return function(){n.ob++;if(e.bypassNetworkless&&1===n.ob)try{tn(b,"log_event",n.Fa,kp({writeThenSend:!0},n.cb,n.qb,n.pb,f)),Po=!1}catch(r){gj(r),d()}h--;h||c()}}(k);
try{tn(b,"log_event",k.Fa,kp(e,k.cb,k.qb,k.pb,f)),Po=!1}catch(n){gj(n),d()}}}
function ep(a,b,c,d,e){d=void 0===d?{}:d;var f=Math.round(Y()),g=a.size,h=new Map([].concat(ka(a)));h=u(h);for(var k=h.next();!k.done;k=h.next()){var l=u(k.value).next().value,m=a.get(l);k=new Vi;var n=$m(b.config_||Sm());H(k,Ai,1,n);m=m?lp(m):[];m=u(m);for(n=m.next();!n.done;n=m.next())ld(k,3,Ri,n.value);(m=Ro[l])&&mp(k,l,m);delete Ro[l];l="visitorOnlyApprovedKey"===l;np(k,f,l);ip(d);k=zd(k);l=kp(d,l,function(r){U("update_log_event_config")&&Ve.ka(function(){return x(function(p){return w(p,jp(r),
0)})});
g--;g||c()},function(){g--;
g||c()},e);
l.headers["Content-Type"]="application/json+protobuf";l.postBodyFormat="JSPB";l.postBody=k;tn(b,"log_event","",l);Po=!1}}
function ip(a){U("always_send_and_write")&&(a.writeThenSend=!1)}
function kp(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,qc:a,dangerousLogToVisitorSession:b,Md:!!e,headers:{},postBodyFormat:"",postBody:"",compress:U("compress_gel")||U("compress_gel_lr")};op()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(Y())));return a}
function hp(a,b,c){op()||(a.requestTimeMs=String(b));U("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=S("EVENT_ID"))&&(c=pp(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function np(a,b,c){op()||G(a,2,b);if(!c&&(b=S("EVENT_ID"))){c=pp();var d=new Ti;G(d,1,b);G(d,2,c);H(a,Ti,5,d)}}
function pp(){var a=S("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*Jo/2));a++;a>Jo&&(a=1);aj("BATCH_CLIENT_COUNTER",a);return a}
function gp(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function mp(a,b,c){if(nd(c,1))var d=1;else if(c.getPlaylistId())d=2;else return;H(a,Ui,4,c);a=hd(a,Ai,1)||new Ai;c=hd(a,yi,3)||new yi;var e=new xi;G(e,2,b);G(e,1,d);ld(c,12,xi,e);H(a,yi,3,c)}
function lp(a){for(var b=[],c=0;c<a.length;c++)try{b.push(new Ri(a[c]))}catch(d){gj(new qk("Transport failed to deserialize "+String(a[c])))}return b}
function Vo(a,b){if(C("yt.logging.transport.enableScrapingForTest")){var c=C("yt.logging.transport.scrapedPayloadsForTesting"),d=C("yt.logging.transport.payloadToScrape");b&&(b=C("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);if(d&&1<=d.length)for(b=0;b<d.length;b++)if(a&&a.payload[d[b]]){var e=void 0;c.push((null==(e=a)?void 0:e.payload)[d[b]])}B("yt.logging.transport.scrapedPayloadsForTesting",c)}}
function op(){return U("use_request_time_ms_header")||U("lr_use_request_time_ms_header")}
function Zo(a,b){return U("transport_use_scheduler")?uk(a,b):tj(a,b)}
function fp(a){U("transport_use_scheduler")?Ve.Qa(a):window.clearTimeout(a)}
function jp(a){var b,c,d,e,f,g,h,k,l,m;return x(function(n){if(1==n.h){d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup;var r=d?d[ki.name]:void 0;e=r;g=null==(f=d)?void 0:f.hotHashData;r=d?d[ji.name]:void 0;h=r;l=null==(k=d)?void 0:k.coldHashData;Co||(Co=new zo);r=Co;return(m=r.resolve.call(r,new yo))?g?e?w(n,Pm(m,g,e),2):w(n,Pm(m,g),2):n.D(2):n.return()}return l?h?w(n,Qm(m,l,h),0):w(n,Qm(m,l),0):n.D(0)})}
;var qp=z.ytLoggingGelSequenceIdObj_||{};B("ytLoggingGelSequenceIdObj_",qp);function rp(a){$o(void 0,void 0,void 0===a?!1:a)}
function sp(a){qp[a]=a in qp?qp[a]+1:0;return qp[a]}
;var tp=[];
function up(a,b){var c=void 0===c?{}:c;var d=mo;S("ytLoggingEventsDefaultDisabled",!1)&&mo===mo&&(d=null);if(U("web_all_payloads_via_jspb"))c.timestamp||(c.timestamp=Y()),tp.push({Sd:a,payload:b,options:c});else{c=void 0===c?{}:c;var e={},f=Math.round(c.timestamp||Y());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;U("enable_unknown_lact_fix_on_html5")&&po();a=so();e.context={lastActivityMs:String(c.timestamp||!isFinite(a)?-1:a)};U("log_sequence_info_on_gel_web")&&c.sequenceGroup&&(a=e.context,
b=c.sequenceGroup,b={index:sp(b),groupKey:b},a.sequence=b,c.endOfSequence&&delete qp[c.sequenceGroup]);(c.sendIsolatedPayload?bp:Uo)({endpoint:"log_event",payload:e,cttAuthInfo:c.cttAuthInfo,dangerousLogToVisitorSession:c.dangerousLogToVisitorSession},d)}}
;var vp=z.ytLoggingGelSequenceIdObj_||{};B("ytLoggingGelSequenceIdObj_",vp);function wp(a){var b=void 0;b=void 0===b?{}:b;var c=!1;S("ytLoggingEventsDefaultDisabled",!1)&&(c=!0);c=c?null:mo;b=void 0===b?{}:b;var d=Math.round(b.timestamp||Y());G(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=so();d=new Qi;G(d,1,b.timestamp||!isFinite(e)?-1:e);if(U("log_sequence_info_on_gel_web")&&b.sequenceGroup){e=b.sequenceGroup;var f=sp(e),g=new Pi;G(g,2,f);G(g,1,e);H(d,Pi,3,g);b.endOfSequence&&delete vp[b.sequenceGroup]}H(a,Qi,33,d);(b.sendIsolatedPayload?dp:Yo)({endpoint:"log_event",payload:a,
cttAuthInfo:b.cttAuthInfo,dangerousLogToVisitorSession:b.dangerousLogToVisitorSession},c)}
;var xp=new Set,yp=0,zp=0,Ap=0,Bp=[],Cp=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Dp(a){try{xp.add(a.message)}catch(b){}yp++}
function Ep(){for(var a=u(Cp),b=a.next();!b.done;b=a.next()){var c=Ob();if(c&&0<=c.toLowerCase().indexOf(b.value.toLowerCase()))return!0}return!1}
function Fp(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:S("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=u(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=bj())for(b=u(Object.keys(c)),d=b.next();!d.done;d=b.next())d=
d.value,a.postParams[d]=c[d];c=S("SERVER_NAME");b=S("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}Nj(S("ECATCHER_REPORT_HOST","")+"/error_204",a)}
;function Gp(){var a;return x(function(b){return(a=pf())?b.return(a.then(function(c){c=zd(c);for(var d=[],e=0,f=0;f<c.length;f++){var g=c.charCodeAt(f);255<g&&(d[e++]=g&255,g>>=8);d[e++]=g}return Fc(d,3)})):b.return(Promise.resolve(null))})}
;var Hp={};function Ip(a){return Hp[a]||(Hp[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Jp={},Kp=[],mg=new K,Lp={};function Mp(){for(var a=u(Kp),b=a.next();!b.done;b=a.next())b=b.value,b()}
function Np(a,b){var c;"yt:"===a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[Ip(b)]:a.getAttribute("data-"+b):null;return c}
function Op(a){mg.ab.apply(mg,arguments)}
;function Pp(a){this.h=a||{};a=[this.h,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.toString().replace("http://","https://"))}
function Qp(a,b){a=[a.h,window.YTConfig||{}];for(var c=0;c<a.length;c++){var d=a[c][b];if(void 0!==d)return d}return null}
function Rp(a,b,c){Sp||(Sp={},sj(window,"message",function(d){a:{if(d.origin===Qp(a,"host")){try{var e=JSON.parse(d.data)}catch(f){e=void 0;break a}if(d=Sp[e.id])d.H=!0,d.H&&(db(d.s,d.sendMessage,d),d.s.length=0),d.Wb(e)}e=void 0}return e}));
Sp[c]=b}
var Sp=null;var Tp=window;
function Up(a,b,c){this.v=this.h=this.i=null;this.j=0;this.H=!1;this.s=[];this.m=null;this.X={};if(!a)throw Error("YouTube player element ID required.");this.id=Qa(this);this.N=c;c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"===a.tagName.toLowerCase(),b.host||(b.host=c?ac(a.src):"https://www.youtube.com"),this.i=new Pp(b),c||(b=Vp(this,a),this.v=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.h=a,this.h.id||(this.h.id="widget"+Qa(this.h)),Jp[this.h.id]=this,window.postMessage){this.m=
new K;Wp(this);b=Qp(this.i,"events");for(var d in b)b.hasOwnProperty(d)&&this.addEventListener(d,b[d]);for(var e in Lp)Lp.hasOwnProperty(e)&&Xp(this,e)}}
q=Up.prototype;q.setSize=function(a,b){this.h.width=a.toString();this.h.height=b.toString();return this};
q.getIframe=function(){return this.h};
q.Wb=function(a){Yp(this,a.event,a)};
q.addEventListener=function(a,b){var c=b;"string"===typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.m.subscribe(a,c);Zp(this,a);return this};
function Xp(a,b){b=b.split(".");if(2===b.length){var c=b[1];a.N===b[0]&&Zp(a,c)}}
q.destroy=function(){this.h&&this.h.id&&(Jp[this.h.id]=null);var a=this.m;a&&"function"==typeof a.dispose&&a.dispose();if(this.v){a=this.h;var b=a.parentNode;b&&b.replaceChild(this.v,a)}else(a=this.h)&&a.parentNode&&a.parentNode.removeChild(a);Sp&&(Sp[this.id]=null);this.i=null;a=this.h;for(var c in mb)mb[c][0]==a&&qj(c);this.v=this.h=null};
q.ac=function(){return{}};
function $p(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.H?a.sendMessage(b):a.s.push(b)}
function Yp(a,b,c){a.m.j||(c={target:a,data:c},a.m.ab(b,c),Op(a.N+"."+b,c))}
function Vp(a,b){var c=document.createElement("iframe");b=b.attributes;for(var d=0,e=b.length;d<e;d++){var f=b[d].value;null!=f&&""!==f&&"null"!==f&&c.setAttribute(b[d].name,f)}c.setAttribute("frameBorder","0");c.setAttribute("allowfullscreen","1");c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");c.setAttribute("title","YouTube "+Qp(a.i,"title"));(b=Qp(a.i,"width"))&&c.setAttribute("width",b.toString());(b=Qp(a.i,"height"))&&
c.setAttribute("height",b.toString());var g=a.ac();g.enablejsapi=window.postMessage?1:0;window.location.host&&(g.origin=window.location.protocol+"//"+window.location.host);g.widgetid=a.id;window.location.href&&db(["debugjs","debugcss"],function(k){var l=ec(window.location.href,k);null!==l&&(g[k]=l)});
var h=""+Qp(a.i,"host")+("/embed/"+Qp(a.i,"videoId"))+"?"+cc(g);Tp.yt_embedsEnableUaChProbe?Gp().then(function(k){var l=new URL(h),m=Number(l.searchParams.get("reloads"));isNaN(m)&&(m=0);l.searchParams.set("reloads",(m+1).toString());k&&l.searchParams.set("uach",k);l.searchParams.set("uats",Math.floor(window.performance.timeOrigin).toString());k=Qd(l.href).toString();Md(c,Rd(k));c.sandbox.add("allow-presentation","allow-top-navigation");return k}):Tp.yt_embedsEnableIframeSrcWithIntent?(Md(c,Rd(h)),
c.sandbox.add("allow-presentation","allow-top-navigation")):c.src=h;
return c}
q.uc=function(){this.h&&this.h.contentWindow?this.sendMessage({event:"listening"}):window.clearInterval(this.j)};
function Wp(a){Rp(a.i,a,a.id);a.j=uj(a.uc.bind(a),250);sj(a.h,"load",function(){window.clearInterval(a.j);a.j=uj(a.uc.bind(a),250)})}
function Zp(a,b){a.X[b]||(a.X[b]=!0,$p(a,"addEventListener",[b]))}
q.sendMessage=function(a){a.id=this.id;a.channel="widget";var b=JSON.stringify(a),c=[ac(this.h.src||"").replace("http:","https:")];if(this.h.contentWindow)for(var d=0;d<c.length;d++)try{this.h.contentWindow.postMessage(b,c[d])}catch(ic){if(ic.name&&"SyntaxError"===ic.name){if(!(ic.message&&0<ic.message.indexOf("target origin ''"))){var e=void 0,f=ic;e=void 0===e?{}:e;e.name=S("INNERTUBE_CONTEXT_CLIENT_NAME",1);e.version=S("INNERTUBE_CONTEXT_CLIENT_VERSION");var g="WARNING",h=!1;g=void 0===g?"ERROR":
g;h=void 0===h?!1:h;if(f){f.hasOwnProperty("level")&&f.level&&(g=f.level);if(U("console_log_js_exceptions")){var k=f,l=[];l.push("Name: "+k.name);l.push("Message: "+k.message);k.hasOwnProperty("params")&&l.push("Error Params: "+JSON.stringify(k.params));k.hasOwnProperty("args")&&l.push("Error args: "+JSON.stringify(k.args));l.push("File name: "+k.fileName);l.push("Stacktrace: "+k.stack);window.console.log(l.join("\n"),k)}if(!(5<=yp)){var m=void 0,n=void 0,r=f,p=e,y=Gd(r),A=y.message||"Unknown Error",
I=y.name||"UnknownError",O=y.stack||r.i||"Not available";if(O.startsWith(I+": "+A)){var T=O.split("\n");T.shift();O=T.join("\n")}var Q=y.lineNumber||"Not available",wa=y.fileName||"Not available",Lc=O,Ia=0;if(r.hasOwnProperty("args")&&r.args&&r.args.length)for(var xa=0;xa<r.args.length&&!(Ia=gk(r.args[xa],"params."+xa,p,Ia),500<=Ia);xa++);else if(r.hasOwnProperty("params")&&r.params){var ca=r.params;if("object"===typeof r.params)for(n in ca){if(ca[n]){var ia="params."+n,ja=ik(ca[n]);p[ia]=ja;Ia+=
ia.length+ja.length;if(500<Ia)break}}else p.params=ik(ca)}if(Bp.length)for(var ba=0;ba<Bp.length&&!(Ia=gk(Bp[ba],"params.context."+ba,p,Ia),500<=Ia);ba++);navigator.vendor&&!p.hasOwnProperty("vendor")&&(p["device.vendor"]=navigator.vendor);var V={message:A,name:I,lineNumber:Q,fileName:wa,stack:Lc,params:p,sampleWeight:1},il=Number(r.columnNumber);isNaN(il)||(V.lineNumber=V.lineNumber+":"+il);if("IGNORED"===r.level)m=0;else a:{for(var jl=ck(),kl=u(jl.Ba),Kg=kl.next();!Kg.done;Kg=kl.next()){var ll=
Kg.value;if(V.message&&V.message.match(ll.Pd)){m=ll.weight;break a}}for(var ml=u(jl.ya),Lg=ml.next();!Lg.done;Lg=ml.next()){var nl=Lg.value;if(nl.Kc(V)){m=nl.weight;break a}}m=1}V.sampleWeight=m;for(var ol=u(Xj),Mg=ol.next();!Mg.done;Mg=ol.next()){var Ng=Mg.value;if(Ng.Ab[V.name])for(var pl=u(Ng.Ab[V.name]),Og=pl.next();!Og.done;Og=pl.next()){var ql=Og.value,ne=V.message.match(ql.regexp);if(ne){V.params["params.error.original"]=ne[0];for(var Pg=ql.groups,rl={},jc=0;jc<Pg.length;jc++)rl[Pg[jc]]=ne[jc+
1],V.params["params.error."+Pg[jc]]=ne[jc+1];V.message=Ng.Ob(rl);break}}}V.params||(V.params={});var sl=ck();V.params["params.errorServiceSignature"]="msg="+sl.Ba.length+"&cb="+sl.ya.length;V.params["params.serviceWorker"]="false";z.document&&z.document.querySelectorAll&&(V.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));tb("sample").constructor!==sb&&(V.params["params.fconst"]="true");var cd=V;window.yterr&&"function"===typeof window.yterr&&window.yterr(cd);
if(0!==cd.sampleWeight&&!xp.has(cd.message))if(h&&U("web_enable_error_204")){var tl=cd;Fp(void 0===g?"ERROR":g,tl);Dp(tl)}else{var Qg=void 0,Rg=void 0,ul=void 0,vl=void 0,Sg=void 0,M=cd,Cb=g;Cb=void 0===Cb?"ERROR":Cb;if("ERROR"===Cb){dk.ab("handleError",M);if(U("record_app_crashed_web")&&0===Ap&&1===M.sampleWeight)if(Ap++,U("errors_via_jspb")){var fq=new Oi;Sg=G(fq,1,1);if(!U("report_client_error_with_app_crash_ks")){var gq=new Mi,hq=new Li,iq=new Ki,jq=new Ji;var kq=G(jq,1,M.message);var lq=H(iq,
Ji,3,kq);vl=H(hq,Ki,5,lq);ul=H(gq,Li,9,vl);H(Sg,Mi,4,ul)}var wl=new Ri;jd(wl,Oi,20,Si,Sg);wp(wl)}else{var xl={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};U("report_client_error_with_app_crash_ks")||(xl.systemHealth={crashData:{clientError:{logMessage:{message:M.message}}}});up("appCrashed",xl)}zp++}else"WARNING"===Cb&&dk.ab("handleWarning",M);if(U("kevlar_gel_error_routing"))a:{var dd=Cb;if(U("errors_via_jspb")){if(Ep())Rg=void 0;else{var kc=new Gi;G(kc,1,M.stack);M.fileName&&G(kc,4,M.fileName);var Va=
M.lineNumber&&M.lineNumber.split?M.lineNumber.split(":"):[];if(0!==Va.length)if(1===Va.length&&!isNaN(Number(Va[0]))){var mq=kc,yl=Number(Va[0]);Na(yl);G(mq,2,yl)}else if(2===Va.length&&!isNaN(Number(Va[0]))&&!isNaN(Number(Va[1]))){var nq=kc,zl=Number(Va[0]);Na(zl);G(nq,2,zl);var oq=kc,Al=Number(Va[1]);Na(Al);G(oq,3,Al)}var Db=new Ji;G(Db,1,M.message);G(Db,3,M.name);var pq=Db,Bl=M.sampleWeight;Na(Bl);G(pq,6,Bl);"ERROR"===dd?G(Db,2,2):"WARNING"===dd?G(Db,2,1):G(Db,2,0);var Tg=new Hi;G(Tg,1,!0);jd(Tg,
Gi,3,Ii,kc);var Eb=new Ei;G(Eb,3,window.location.href);for(var Cl=S("FEXP_EXPERIMENTS",[]),Ug=0;Ug<Cl.length;Ug++){var Dl=Eb,qq=Cl[Ug];Uc(Dl);bd(Dl,5,2,!1,!1).push(qq)}var Vg=bj();if(!cj()&&Vg)for(var El=u(Object.keys(Vg)),Fb=El.next();!Fb.done;Fb=El.next()){var Fl=Fb.value,Wg=new Di;G(Wg,1,Fl);G(Wg,2,String(Vg[Fl]));ld(Eb,4,Di,Wg)}var Xg=M.params;if(Xg){var Gl=u(Object.keys(Xg));for(Fb=Gl.next();!Fb.done;Fb=Gl.next()){var Hl=Fb.value,Yg=new Di;G(Yg,1,"client."+Hl);G(Yg,2,String(Xg[Hl]));ld(Eb,4,
Di,Yg)}}var Il=S("SERVER_NAME"),Jl=S("SERVER_VERSION");if(Il&&Jl){var Zg=new Di;G(Zg,1,"server.name");G(Zg,2,Il);ld(Eb,4,Di,Zg);var $g=new Di;G($g,1,"server.version");G($g,2,Jl);ld(Eb,4,Di,$g)}var oe=new Ki;H(oe,Ei,1,Eb);H(oe,Hi,2,Tg);H(oe,Ji,3,Db);Rg=oe}var Kl=Rg;if(!Kl)break a;var Ll=new Ri;jd(Ll,Ki,163,Si,Kl);wp(Ll)}else{if(Ep())Qg=void 0;else{var ed={stackTrace:M.stack};M.fileName&&(ed.filename=M.fileName);var Wa=M.lineNumber&&M.lineNumber.split?M.lineNumber.split(":"):[];0!==Wa.length&&(1!==
Wa.length||isNaN(Number(Wa[0]))?2!==Wa.length||isNaN(Number(Wa[0]))||isNaN(Number(Wa[1]))||(ed.lineNumber=Number(Wa[0]),ed.columnNumber=Number(Wa[1])):ed.lineNumber=Number(Wa[0]));var ah={level:"ERROR_LEVEL_UNKNOWN",message:M.message,errorClassName:M.name,sampleWeight:M.sampleWeight};"ERROR"===dd?ah.level="ERROR_LEVEL_ERROR":"WARNING"===dd&&(ah.level="ERROR_LEVEL_WARNNING");var rq={isObfuscated:!0,browserStackInfo:ed},lc={pageUrl:window.location.href,kvPairs:[]};S("FEXP_EXPERIMENTS")&&(lc.experimentIds=
S("FEXP_EXPERIMENTS"));var bh=bj();if(!cj()&&bh)for(var Ml=u(Object.keys(bh)),Gb=Ml.next();!Gb.done;Gb=Ml.next()){var Nl=Gb.value;lc.kvPairs.push({key:Nl,value:String(bh[Nl])})}var ch=M.params;if(ch){var Ol=u(Object.keys(ch));for(Gb=Ol.next();!Gb.done;Gb=Ol.next()){var Pl=Gb.value;lc.kvPairs.push({key:"client."+Pl,value:String(ch[Pl])})}}var Ql=S("SERVER_NAME"),Rl=S("SERVER_VERSION");Ql&&Rl&&(lc.kvPairs.push({key:"server.name",value:Ql}),lc.kvPairs.push({key:"server.version",value:Rl}));Qg={errorMetadata:lc,
stackTrace:rq,logMessage:ah}}var Sl=Qg;if(!Sl)break a;up("clientError",Sl)}if("ERROR"===dd||U("errors_flush_gel_always_killswitch"))b:{if(U("web_fp_via_jspb")&&(rp(!0),!U("web_fp_via_jspb_and_json")))break b;rp()}}U("suppress_error_204_logging")||Fp(Cb,M);Dp(M)}}}}}else throw ic;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function aq(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function bq(a){return 0===a.search("get")||0===a.search("is")}
;function cq(a,b){Up.call(this,a,Object.assign({title:"video player",videoId:"",width:640,height:360},b||{}),"player");this.na={};this.playerInfo={};this.videoTitle=""}
v(cq,Up);q=cq.prototype;q.ac=function(){var a=Qp(this.i,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!==window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=Qp(this.i,"embedConfig")){if(Pa(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
q.Wb=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(Pa(a))for(var c in a)a.hasOwnProperty(c)&&(this.na[c]=a[c]);break;case "infoDelivery":dq(this,a);break;case "initialDelivery":Pa(a)&&(window.clearInterval(this.j),this.playerInfo={},this.na={},eq(this,a.apiInterface),dq(this,a));break;default:Yp(this,b,a)}};
function dq(a,b){if(Pa(b)){for(var c in b)b.hasOwnProperty(c)&&(a.playerInfo[c]=b[c]);a.playerInfo.hasOwnProperty("videoData")&&(b=a.playerInfo.videoData,b.hasOwnProperty("title")&&b.title?(b=b.title,b!==a.videoTitle&&(a.videoTitle=b,a.h.setAttribute("title",b))):(a.videoTitle="",a.h.setAttribute("title","YouTube "+Qp(a.i,"title"))))}}
function eq(a,b){db(b,function(c){this[c]||("getCurrentTime"===c?this[c]=function(){var d=this.playerInfo.currentTime;if(1===this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:aq(c)?this[c]=function(){this.playerInfo={};
this.na={};$p(this,c,arguments);return this}:bq(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){$p(this,c,arguments);
return this})},a)}
q.getVideoEmbedCode=function(){var a=Qp(this.i,"host")+("/embed/"+Qp(this.i,"videoId")),b=Number(Qp(this.i,"width")),c=Number(Qp(this.i,"height"));if(isNaN(b)||isNaN(c))throw Error("Invalid width or height property");b=Math.floor(b);c=Math.floor(c);var d=this.videoTitle;a=Xb(a);d=Xb(null!=d?d:"YouTube video player");return'<iframe width="'+b+'" height="'+c+'" src="'+a+'" title="'+(d+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')};
q.getOptions=function(a){return this.na.namespaces?a?this.na[a]?this.na[a].options||[]:[]:this.na.namespaces||[]:[]};
q.getOption=function(a,b){if(this.na.namespaces&&a&&b&&this.na[a])return this.na[a][b]};
function sq(a){if("iframe"!==a.tagName.toLowerCase()){var b=Np(a,"videoid");b&&(b={videoId:b,width:Np(a,"width"),height:Np(a,"height")},new cq(a,b))}}
;B("YT.PlayerState.UNSTARTED",-1);B("YT.PlayerState.ENDED",0);B("YT.PlayerState.PLAYING",1);B("YT.PlayerState.PAUSED",2);B("YT.PlayerState.BUFFERING",3);B("YT.PlayerState.CUED",5);B("YT.get",function(a){return Jp[a]});
B("YT.scan",Mp);B("YT.subscribe",function(a,b,c){mg.subscribe(a,b,c);Lp[a]=!0;for(var d in Jp)Jp.hasOwnProperty(d)&&Xp(Jp[d],a)});
B("YT.unsubscribe",function(a,b,c){lg(a,b,c)});
B("YT.Player",cq);Up.prototype.destroy=Up.prototype.destroy;Up.prototype.setSize=Up.prototype.setSize;Up.prototype.getIframe=Up.prototype.getIframe;Up.prototype.addEventListener=Up.prototype.addEventListener;cq.prototype.getVideoEmbedCode=cq.prototype.getVideoEmbedCode;cq.prototype.getOptions=cq.prototype.getOptions;cq.prototype.getOption=cq.prototype.getOption;
Kp.push(function(a){var b=a;b||(b=document);a=ib(b.getElementsByTagName("yt:player"));var c=b||document;if(c.querySelectorAll&&c.querySelector)b=c.querySelectorAll(".yt-player");else{var d;c=document;b=b||c;if(b.querySelectorAll&&b.querySelector)b=b.querySelectorAll(".yt-player");else if(b.getElementsByClassName){var e=b.getElementsByClassName("yt-player");b=e}else{e=b.getElementsByTagName("*");var f={};for(c=d=0;b=e[c];c++){var g=b.className,h;if(h="function"==typeof g.split)h=0<=cb(g.split(/\s+/),
"yt-player");h&&(f[d++]=b)}f.length=d;b=f}}b=ib(b);db(hb(a,b),sq)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||Mp();var tq=z.onYTReady;tq&&tq();var uq=z.onYouTubeIframeAPIReady;uq&&uq();var vq=z.onYouTubePlayerAPIReady;vq&&vq();}).call(this);

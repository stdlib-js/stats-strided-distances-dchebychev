"use strict";var y=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var f=y(function(F,x){
var d=require('@stdlib/math-base-special-abs/dist');function E(e,r,a,o,i,t,s){var n,v,u,c,q;if(e<=0)return NaN;for(v=o,u=s,n=d(r[v]-i[u]),v+=a,u+=t,c=1;c<e;c++)q=d(r[v]-i[u]),q>n&&(n=q),v+=a,u+=t;return n}x.exports=E
});var m=y(function(G,p){
var b=require('@stdlib/strided-base-stride2offset/dist'),O=f();function g(e,r,a,o,i){var t=b(e,a),s=b(e,i);return O(e,r,a,t,o,i,s)}p.exports=g
});var R=y(function(H,l){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=m(),w=f();k(j,"ndarray",w);l.exports=j
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),B=require('@stdlib/assert-is-error/dist'),C=R(),h,_=A(z(__dirname,"./native.js"));B(_)?h=C:h=_;module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

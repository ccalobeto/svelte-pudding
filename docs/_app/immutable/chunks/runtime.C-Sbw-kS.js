var Ct=Array.isArray,Dt=Array.from,Ot=Object.defineProperty,fn=Object.getOwnPropertyDescriptor,Nt=Object.getOwnPropertyDescriptors,qt=Object.prototype,Ft=Array.prototype,bt=Object.getPrototypeOf;function Pt(n){return typeof n=="function"}const Lt=()=>{};function pn(n){for(var t=0;t<n.length;t++)n[t]()}const w=2,hn=4,Y=8,sn=16,m=32,W=64,nn=128,S=256,G=512,p=1024,k=2048,B=4096,N=8192,q=16384,$n=32768,dn=65536,Kn=1<<19,En=1<<20,Mt=Symbol("$state"),Ht=Symbol("legacy props"),Yt=Symbol("");function wn(n){return n===this.v}function Zn(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function zn(n){return!Zn(n,this.v)}function Wn(n){throw new Error("effect_in_teardown")}function Xn(){throw new Error("effect_in_unowned_derived")}function Jn(n){throw new Error("effect_orphan")}function Qn(){throw new Error("effect_update_depth_exceeded")}function Bt(){throw new Error("hydration_failed")}function Ut(n){throw new Error("props_invalid_value")}function jt(){throw new Error("state_descriptors_fixed")}function Vt(){throw new Error("state_prototype_fixed")}function nt(){throw new Error("state_unsafe_local_read")}function tt(){throw new Error("state_unsafe_mutation")}let rt=!1;function yn(n){return{f:0,v:n,reactions:null,equals:wn,version:0}}function Gt(n){return et(yn(n))}function $t(n,t=!1){const r=yn(n);return t||(r.equals=zn),r}function et(n){return o!==null&&o.f&w&&(T===null?yt([n]):T.push(n)),n}function lt(n,t){return o!==null&&mt()&&o.f&(w|sn)&&(T===null||!T.includes(n))&&tt(),st(n,t)}function st(n,t){return n.equals(t)||(n.v=t,n.version=Yn(),Tn(n,k),a!==null&&a.f&p&&!(a.f&m)&&(c!==null&&c.includes(n)?(A(a,k),Q(a)):g===null?Tt([n]):g.push(n))),t}function Tn(n,t){var r=n.reactions;if(r!==null)for(var e=r.length,l=0;l<e;l++){var s=r[l],u=s.f;u&k||(A(s,t),u&(p|S)&&(u&w?Tn(s,B):Q(s)))}}function mn(n){console.warn("hydration_mismatch")}const Kt=1,Zt=2,zt=4,Wt=8,Xt=16,Jt=1,Qt=4,nr=8,tr=16,rr=1,er=2,ut="[",at="[!",ot="]",An={},lr=Symbol(),sr="http://www.w3.org/2000/svg";let I=!1;function ur(n){I=n}let y;function P(n){if(n===null)throw mn(),An;return y=n}function ar(){return P(R(y))}function or(n){if(I){if(R(y)!==null)throw mn(),An;y=n}}function ir(n=1){if(I){for(var t=n,r=y;t--;)r=R(r);y=r}}function fr(){for(var n=0,t=y;;){if(t.nodeType===8){var r=t.data;if(r===ot){if(n===0)return t;n-=1}else(r===ut||r===at)&&(n+=1)}var e=R(t);t.remove(),t=e}}var _n,it,gn,kn;function _r(){if(_n===void 0){_n=window,it=document;var n=Element.prototype,t=Node.prototype;gn=fn(t,"firstChild").get,kn=fn(t,"nextSibling").get,n.__click=void 0,n.__className="",n.__attributes=null,n.__styles=null,n.__e=void 0,Text.prototype.__t=void 0}}function tn(n=""){return document.createTextNode(n)}function rn(n){return gn.call(n)}function R(n){return kn.call(n)}function cr(n,t){if(!I)return rn(n);var r=rn(y);if(r===null)r=y.appendChild(tn());else if(t&&r.nodeType!==3){var e=tn();return r==null||r.before(e),P(e),e}return P(r),r}function vr(n,t){if(!I){var r=rn(n);return r instanceof Comment&&r.data===""?R(r):r}return y}function pr(n,t=1,r=!1){let e=I?y:n;for(var l;t--;)l=e,e=R(e);if(!I)return e;var s=e==null?void 0:e.nodeType;if(r&&s!==3){var u=tn();return e===null?l==null||l.after(u):e.before(u),P(u),u}return P(e),e}function hr(n){n.textContent=""}function dr(n){var t=w|k;a===null?t|=S:a.f|=En;var r=o!==null&&o.f&w?o:null;const e={children:null,ctx:E,deps:null,equals:wn,f:t,fn:n,reactions:null,v:null,version:0,parent:r??a};return r!==null&&(r.children??(r.children=[])).push(e),e}function xn(n){var t=n.children;if(t!==null){n.children=null;for(var r=0;r<t.length;r+=1){var e=t[r];e.f&w?un(e):b(e)}}}function ft(n){for(var t=n.parent;t!==null;){if(!(t.f&w))return t;t=t.parent}return null}function In(n){var t,r=a;z(ft(n));try{xn(n),t=Bn(n)}finally{z(r)}return t}function Sn(n){var t=In(n),r=(C||n.f&S)&&n.deps!==null?B:p;A(n,r),n.equals(t)||(n.v=t,n.version=Yn())}function un(n){xn(n),H(n,0),A(n,q),n.v=n.children=n.deps=n.ctx=n.reactions=null}function Rn(n){a===null&&o===null&&Jn(),o!==null&&o.f&S&&Xn(),an&&Wn()}function _t(n,t){var r=t.last;r===null?t.last=t.first=n:(r.next=n,n.prev=r,t.last=n)}function F(n,t,r,e=!0){var l=(n&W)!==0,s=a,u={ctx:E,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:n|k,first:null,fn:t,last:null,next:null,parent:l?null:s,prev:null,teardown:null,transitions:null,version:0};if(r){var _=D;try{cn(!0),J(u),u.f|=$n}catch(i){throw b(u),i}finally{cn(_)}}else t!==null&&Q(u);var v=r&&u.deps===null&&u.first===null&&u.nodes_start===null&&u.teardown===null&&(u.f&En)===0;if(!v&&!l&&e&&(s!==null&&_t(u,s),o!==null&&o.f&w)){var h=o;(h.children??(h.children=[])).push(u)}return u}function Er(n){const t=F(Y,null,!1);return A(t,p),t.teardown=n,t}function wr(n){Rn();var t=a!==null&&(a.f&m)!==0&&E!==null&&!E.m;if(t){var r=E;(r.e??(r.e=[])).push({fn:n,effect:a,reaction:o})}else{var e=Cn(n);return e}}function yr(n){return Rn(),ct(n)}function Tr(n){const t=F(W,n,!0);return()=>{b(t)}}function Cn(n){return F(hn,n,!1)}function ct(n){return F(Y,n,!0)}function mr(n){return vt(n)}function vt(n,t=0){return F(Y|sn|t,n,!0)}function Ar(n,t=!0){return F(Y|m,n,!0,t)}function Dn(n){var t=n.teardown;if(t!==null){const r=an,e=o;vn(!0),Z(null);try{t.call(null)}finally{vn(r),Z(e)}}}function On(n){var t=n.deriveds;if(t!==null){n.deriveds=null;for(var r=0;r<t.length;r+=1)un(t[r])}}function Nn(n,t=!1){var r=n.first;for(n.first=n.last=null;r!==null;){var e=r.next;b(r,t),r=e}}function pt(n){for(var t=n.first;t!==null;){var r=t.next;t.f&m||b(t),t=r}}function b(n,t=!0){var r=!1;if((t||n.f&Kn)&&n.nodes_start!==null){for(var e=n.nodes_start,l=n.nodes_end;e!==null;){var s=e===l?null:R(e);e.remove(),e=s}r=!0}Nn(n,t&&!r),On(n),H(n,0),A(n,q);var u=n.transitions;if(u!==null)for(const v of u)v.stop();Dn(n);var _=n.parent;_!==null&&_.first!==null&&qn(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes_start=n.nodes_end=null}function qn(n){var t=n.parent,r=n.prev,e=n.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),t!==null&&(t.first===n&&(t.first=e),t.last===n&&(t.last=r))}function gr(n,t){var r=[];Fn(n,r,!0),ht(r,()=>{b(n),t&&t()})}function ht(n,t){var r=n.length;if(r>0){var e=()=>--r||t();for(var l of n)l.out(e)}else t()}function Fn(n,t,r){if(!(n.f&N)){if(n.f^=N,n.transitions!==null)for(const u of n.transitions)(u.is_global||r)&&t.push(u);for(var e=n.first;e!==null;){var l=e.next,s=(e.f&dn)!==0||(e.f&m)!==0;Fn(e,t,s?r:!1),e=l}}}function kr(n){bn(n,!0)}function bn(n,t){if(n.f&N){U(n)&&J(n),n.f^=N;for(var r=n.first;r!==null;){var e=r.next,l=(r.f&dn)!==0||(r.f&m)!==0;bn(r,l?t:!1),r=e}if(n.transitions!==null)for(const s of n.transitions)(s.is_global||t)&&s.in()}}const dt=typeof requestIdleCallback>"u"?n=>setTimeout(n,1):requestIdleCallback;let $=!1,K=!1,en=[],ln=[];function Pn(){$=!1;const n=en.slice();en=[],pn(n)}function Ln(){K=!1;const n=ln.slice();ln=[],pn(n)}function xr(n){$||($=!0,queueMicrotask(Pn)),en.push(n)}function Ir(n){K||(K=!0,dt(Ln)),ln.push(n)}function Et(){$&&Pn(),K&&Ln()}const Mn=0,wt=1;let j=!1,V=Mn,L=!1,M=null,D=!1,an=!1;function cn(n){D=n}function vn(n){an=n}let x=[],O=0;let o=null;function Z(n){o=n}let a=null;function z(n){a=n}let T=null;function yt(n){T=n}let c=null,d=0,g=null;function Tt(n){g=n}let Hn=0,C=!1,E=null;function Yn(){return++Hn}function mt(){return!rt}function U(n){var u,_;var t=n.f;if(t&k)return!0;if(t&B){var r=n.deps,e=(t&S)!==0;if(r!==null){var l;if(t&G){for(l=0;l<r.length;l++)((u=r[l]).reactions??(u.reactions=[])).push(n);n.f^=G}for(l=0;l<r.length;l++){var s=r[l];if(U(s)&&Sn(s),e&&a!==null&&!C&&!((_=s==null?void 0:s.reactions)!=null&&_.includes(n))&&(s.reactions??(s.reactions=[])).push(n),s.version>n.version)return!0}}e||A(n,p)}return!1}function At(n,t){for(var r=t;r!==null;){if(r.f&nn)try{r.fn(n);return}catch{r.f^=nn}r=r.parent}throw j=!1,n}function gt(n){return(n.f&q)===0&&(n.parent===null||(n.parent.f&nn)===0)}function X(n,t,r,e){if(j){if(r===null&&(j=!1),gt(t))throw n;return}r!==null&&(j=!0);{At(n,t);return}}function Bn(n){var on;var t=c,r=d,e=g,l=o,s=C,u=T,_=E,v=n.f;c=null,d=0,g=null,o=v&(m|W)?null:n,C=!D&&(v&S)!==0,T=null,E=n.ctx;try{var h=(0,n.fn)(),i=n.deps;if(c!==null){var f;if(H(n,d),i!==null&&d>0)for(i.length=d+c.length,f=0;f<c.length;f++)i[d+f]=c[f];else n.deps=i=c;if(!C)for(f=d;f<i.length;f++)((on=i[f]).reactions??(on.reactions=[])).push(n)}else i!==null&&d<i.length&&(H(n,d),i.length=d);return h}finally{c=t,d=r,g=e,o=l,C=s,T=u,E=_}}function kt(n,t){let r=t.reactions;if(r!==null){var e=r.indexOf(n);if(e!==-1){var l=r.length-1;l===0?r=t.reactions=null:(r[e]=r[l],r.pop())}}r===null&&t.f&w&&(c===null||!c.includes(t))&&(A(t,B),t.f&(S|G)||(t.f^=G),H(t,0))}function H(n,t){var r=n.deps;if(r!==null)for(var e=t;e<r.length;e++)kt(n,r[e])}function J(n){var t=n.f;if(!(t&q)){A(n,p);var r=a,e=E;a=n;try{t&sn?pt(n):Nn(n),On(n),Dn(n);var l=Bn(n);n.teardown=typeof l=="function"?l:null,n.version=Hn}catch(s){X(s,n,r,e||n.ctx)}finally{a=r}}}function Un(){if(O>1e3){O=0;try{Qn()}catch(n){if(M!==null)X(n,M,null);else throw n}}O++}function jn(n){var t=n.length;if(t!==0){Un();var r=D;D=!0;try{for(var e=0;e<t;e++){var l=n[e];l.f&p||(l.f^=p);var s=[];Vn(l,s),xt(s)}}finally{D=r}}}function xt(n){var t=n.length;if(t!==0)for(var r=0;r<t;r++){var e=n[r];if(!(e.f&(q|N)))try{U(e)&&(J(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?qn(e):e.fn=null))}catch(l){X(l,e,null,e.ctx)}}}function It(){if(L=!1,O>1001)return;const n=x;x=[],jn(n),L||(O=0,M=null)}function Q(n){V===Mn&&(L||(L=!0,queueMicrotask(It))),M=n;for(var t=n;t.parent!==null;){t=t.parent;var r=t.f;if(r&(W|m)){if(!(r&p))return;t.f^=p}}x.push(t)}function Vn(n,t){var r=n.first,e=[];n:for(;r!==null;){var l=r.f,s=(l&m)!==0,u=s&&(l&p)!==0,_=r.next;if(!u&&!(l&N))if(l&Y){if(s)r.f^=p;else try{U(r)&&J(r)}catch(f){X(f,r,null,r.ctx)}var v=r.first;if(v!==null){r=v;continue}}else l&hn&&e.push(r);if(_===null){let f=r.parent;for(;f!==null;){if(n===f)break n;var h=f.next;if(h!==null){r=h;continue n}f=f.parent}}r=_}for(var i=0;i<e.length;i++)v=e[i],t.push(v),Vn(v,t)}function Gn(n){var t=V,r=x;try{Un();const l=[];V=wt,x=l,L=!1,jn(r);var e=n==null?void 0:n();return Et(),(x.length>0||l.length>0)&&Gn(),O=0,M=null,e}finally{V=t,x=r}}async function Sr(){await Promise.resolve(),Gn()}function St(n){var i;var t=n.f,r=(t&w)!==0;if(r&&t&q){var e=In(n);return un(n),e}if(o!==null){T!==null&&T.includes(n)&&nt();var l=o.deps;c===null&&l!==null&&l[d]===n?d++:c===null?c=[n]:c.push(n),g!==null&&a!==null&&a.f&p&&!(a.f&m)&&g.includes(n)&&(A(a,k),Q(a))}else if(r&&n.deps===null)for(var s=n,u=s.parent,_=s;u!==null;)if(u.f&w){var v=u;_=v,u=v.parent}else{var h=u;(i=h.deriveds)!=null&&i.includes(_)||(h.deriveds??(h.deriveds=[])).push(_);break}return r&&(s=n,U(s)&&Sn(s)),n.v}function Rr(n){const t=o;try{return o=null,n()}finally{o=t}}const Rt=~(k|B|p);function A(n,t){n.f=n.f&Rt|t}function Cr(n,t=1){var r=St(n),e=t===1?r++:r--;return lt(n,r),e}function Dr(n,t=!1,r){E={p:E,c:null,e:null,m:!1,s:n,x:null,l:null}}function Or(n){const t=E;if(t!==null){const u=t.e;if(u!==null){var r=a,e=o;t.e=null;try{for(var l=0;l<u.length;l++){var s=u[l];z(s.effect),Z(s.reaction),Cn(s.fn)}}finally{z(r),Z(e)}}E=t.p,t.m=!0}return{}}export{lt as $,kr as A,gr as B,xr as C,a as D,dn as E,Kt as F,st as G,An as H,N as I,Zt as J,Fn as K,hr as L,ht as M,ot as N,o as O,Wt as P,$t as Q,yn as R,Xt as S,Yt as T,bt as U,Ir as V,Nt as W,Mt as X,qt as Y,Ft as Z,jt as _,Dr as a,fn as a0,lr as a1,St as a2,Vt as a3,Ut as a4,Qt as a5,zn as a6,m as a7,W as a8,z as a9,sr as aA,ir as aB,Cr as aC,Zn as aD,Jt as aa,rt as ab,nr as ac,Ht as ad,dr as ae,tr as af,Pt as ag,rr as ah,er as ai,Cn as aj,ct as ak,vr as al,pr as am,it as an,Gn as ao,Ot as ap,yr as aq,Sr as ar,Gt as as,Z as at,Kn as au,ut as av,_r as aw,Bt as ax,Tr as ay,Er as az,vt as b,cr as c,ar as d,Ar as e,y as f,R as g,I as h,mn as i,rn as j,b as k,E as l,Rr as m,Lt as n,tn as o,Or as p,zt as q,or as r,P as s,mr as t,wr as u,Ct as v,Dt as w,at as x,fr as y,ur as z};

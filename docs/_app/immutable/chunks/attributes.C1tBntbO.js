import{o as sr,b as ir,q as X,h as T,s as L,d as fr,v as nr,w as Z,x as ur,y as z,z as M,f as S,I as C,A as j,e as m,B as tr,C as lr,D as K,F as H,G as U,J as $,K as vr,L as _r,M as or,k as cr,j as dr,N as hr,O as pr,P as Ar,Q as Er,R as F,S as gr,g as yr,T as J,U as Tr,V as Nr,W as Ir}from"./runtime.Ctd-Fm3Y.js";import{c as kr,i as wr,d as Rr,e as Sr,f as br,n as Cr,g as Or}from"./store.5x8R1Tli.js";function $r(r,a){return a}function xr(r,a,e,u){for(var t=[],o=a.length,d=0;d<o;d++)vr(a[d].e,t,!0);var c=o>0&&t.length===0&&e!==null;if(c){var y=e.parentNode;_r(y),y.append(e),u.clear(),k(r,a[0].prev,a[o-1].next)}or(t,()=>{for(var E=0;E<o;E++){var h=a[E];c||(u.delete(h.k),k(r,h.prev,h.next)),cr(h.e,!c)}})}function Br(r,a,e,u,t,o=null){var d=r,c={flags:a,items:new Map,first:null},y=(a&X)!==0;if(y){var E=r;d=T?L(dr(E)):E.appendChild(sr())}T&&fr();var h=null,N=!1;ir(()=>{var i=e(),_=nr(i)?i:i==null?[]:Z(i),l=_.length;if(N&&l===0)return;N=l===0;let p=!1;if(T){var f=d.data===ur;f!==(l===0)&&(d=z(),L(d),M(!1),p=!0)}if(T){for(var n=null,g,A=0;A<l;A++){if(S.nodeType===8&&S.data===hr){d=S,p=!0,M(!1);break}var s=_[A],v=u(s,A);g=rr(S,c,n,null,s,v,A,t,a),c.items.set(v,g),n=g}l>0&&L(z())}if(!T){var w=pr;Lr(_,c,d,t,a,(w.f&C)!==0,u)}o!==null&&(l===0?h?j(h):h=m(()=>o(d)):h!==null&&tr(h,()=>{h=null})),p&&M(!0),e()}),T&&(d=S)}function Lr(r,a,e,u,t,o,d){var q,G,P,V;var c=(t&Ar)!==0,y=(t&(H|$))!==0,E=r.length,h=a.items,N=a.first,i=N,_,l=null,p,f=[],n=[],g,A,s,v;if(c)for(v=0;v<E;v+=1)g=r[v],A=d(g,v),s=h.get(A),s!==void 0&&((q=s.a)==null||q.measure(),(p??(p=new Set)).add(s));for(v=0;v<E;v+=1){if(g=r[v],A=d(g,v),s=h.get(A),s===void 0){var w=i?i.e.nodes_start:e;l=rr(w,a,l,l===null?a.first:l.next,g,A,v,u,t),h.set(A,l),f=[],n=[],i=l.next;continue}if(y&&Mr(s,g,v,t),s.e.f&C&&(j(s.e),c&&((G=s.a)==null||G.unfix(),(p??(p=new Set)).delete(s))),s!==i){if(_!==void 0&&_.has(s)){if(f.length<n.length){var b=n[0],I;l=b.prev;var B=f[0],O=f[f.length-1];for(I=0;I<f.length;I+=1)Q(f[I],b,e);for(I=0;I<n.length;I+=1)_.delete(n[I]);k(a,B.prev,O.next),k(a,l,B),k(a,O,b),i=b,l=O,v-=1,f=[],n=[]}else _.delete(s),Q(s,i,e),k(a,s.prev,s.next),k(a,s,l===null?a.first:l.next),k(a,l,s),l=s;continue}for(f=[],n=[];i!==null&&i.k!==A;)(o||!(i.e.f&C))&&(_??(_=new Set)).add(i),n.push(i),i=i.next;if(i===null)continue;s=i}f.push(s),l=s,i=s.next}if(i!==null||_!==void 0){for(var R=_===void 0?[]:Z(_);i!==null;)(o||!(i.e.f&C))&&R.push(i),i=i.next;var x=R.length;if(x>0){var er=t&X&&E===0?e:null;if(c){for(v=0;v<x;v+=1)(P=R[v].a)==null||P.measure();for(v=0;v<x;v+=1)(V=R[v].a)==null||V.fix()}xr(a,R,er,h)}}c&&lr(()=>{var Y;if(p!==void 0)for(s of p)(Y=s.a)==null||Y.apply()}),K.first=a.first&&a.first.e,K.last=l&&l.e}function Mr(r,a,e,u){u&H&&U(r.v,a),u&$?U(r.i,e):r.i=e}function rr(r,a,e,u,t,o,d,c,y){var E=(y&H)!==0,h=(y&gr)===0,N=E?h?Er(t):F(t):t,i=y&$?F(d):d,_={i,v:N,k:o,a:null,e:null,prev:e,next:u};try{return _.e=m(()=>c(r,N,i),T),_.e.prev=e&&e.e,_.e.next=u&&u.e,e===null?a.first=_:(e.next=_,e.e.next=_.e),u!==null&&(u.prev=_,u.e.prev=_.e),_}finally{}}function Q(r,a,e){for(var u=r.next?r.next.e.nodes_start:e,t=a?a.e.nodes_start:e,o=r.e.nodes_start;o!==u;){var d=yr(o);t.before(o),o=d}}function k(r,a,e){a===null?r.first=e:(a.next=e,a.e.next=e&&e.e),e!==null&&(e.prev=a,e.e.prev=a&&a.e)}function qr(r){if(T){var a=!1,e=()=>{if(!a){if(a=!0,r.hasAttribute("value")){var u=r.value;D(r,"value",null),r.value=u}if(r.hasAttribute("checked")){var t=r.checked;D(r,"checked",null),r.checked=t}}};r.__on_r=e,Ir(e),kr()}}function Gr(r,a){var e=r.__attributes??(r.__attributes={});e.value===(e.value=a)||r.value===a&&(a!==0||r.nodeName!=="PROGRESS")||(r.value=a)}function D(r,a,e,u){var t=r.__attributes??(r.__attributes={});T&&(t[a]=r.getAttribute(a),a==="src"||a==="srcset"||a==="href"&&r.nodeName==="LINK")||t[a]!==(t[a]=e)&&(a==="style"&&"__styles"in r&&(r.__styles={}),a==="loading"&&(r[Tr]=e),e==null?r.removeAttribute(a):typeof e!="string"&&ar(r).includes(a)?r[a]=e:r.setAttribute(a,e))}function Pr(r,a,e,u,t=!1,o=!1,d=!1){var c=a||{},y=r.tagName==="OPTION";for(var E in a)E in e||(e[E]=null);var h=ar(r),N=r.__attributes??(r.__attributes={});for(const f in e){let n=e[f];if(y&&f==="value"&&n==null){r.value=r.__value="",c[f]=n;continue}var i=c[f];if(n!==i){c[f]=n;var _=f[0]+f[1];if(_!=="$$"){if(_==="on"){const g={},A="$$"+f;let s=f.slice(2);var l=Or(s);if(wr(s)&&(s=s.slice(0,-7),g.capture=!0),!l&&i){if(n!=null)continue;r.removeEventListener(s,c[A],g),c[A]=null}if(n!=null)if(l)r[`__${s}`]=n,Sr([s]);else{let v=function(w){c[f].call(this,w)};c[A]=Rr(s,r,v,g)}}else if(f==="style"&&n!=null)r.style.cssText=n+"";else if(f==="autofocus")br(r,!!n);else if(f==="__value"||f==="value"&&n!=null)r.value=r[f]=r.__value=n;else{var p=f;t||(p=Cr(p)),n==null&&!o?(N[f]=null,r.removeAttribute(f)):h.includes(p)&&(o||typeof n!="string")?r[p]=n:typeof n!="function"&&(T&&(p==="src"||p==="href"||p==="srcset")||D(r,p,n))}f==="style"&&"__styles"in r&&(r.__styles={})}}}return c}var W=new Map;function ar(r){var a=W.get(r.nodeName);if(a)return a;W.set(r.nodeName,a=[]);for(var e,u=J(r),t=Element.prototype;t!==u;){e=Nr(u);for(var o in e)e[o].set&&a.push(o);u=J(u)}return a}export{Pr as a,Gr as b,Br as e,$r as i,qr as r,D as s};
const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.TVrkoUaj.js","../chunks/disclose-version.Bg9kRutz.js","../chunks/runtime.Ctd-Fm3Y.js","../chunks/template.C0ghi9iV.js","../chunks/snippet.DCn9Z2SB.js","../assets/0.DnuYshJC.css","../nodes/1.CaaDi_W5.js","../chunks/store.5x8R1Tli.js","../chunks/entry.BmAPSykC.js","../chunks/paths.Dv3cHVwi.js","../chunks/index-client.CBbBiVWX.js","../nodes/2.EhJH3Axv.js","../chunks/copy.DpoC0QzE.js","../chunks/attributes.C1tBntbO.js","../chunks/props.nFf31fFe.js","../nodes/3.VURsvFZm.js","../nodes/4.Boew6wdu.js","../chunks/this.DBUbGj2m.js","../assets/4.CO4jlTh2.css","../nodes/5.C_f6so4-.js","../assets/5.BosP74pi.css","../nodes/6.B4Ak0S0g.js","../assets/6.XV3wtUv8.css","../nodes/7.RBcn971s.js"])))=>i.map(i=>d[i]);
var B=r=>{throw TypeError(r)};var U=(r,t,s)=>t.has(r)||B("Cannot "+s);var i=(r,t,s)=>(U(r,t,"read from private field"),s?s.call(r):t.get(r)),x=(r,t,s)=>t.has(r)?B("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(r):t.set(r,s),A=(r,t,s,a)=>(U(r,t,"write to private field"),a?a.call(r,s):t.set(r,s),s);import{a2 as v,ad as F,$ as L,ao as H,ap as J,Q as K,a as X,aq as Z,u as M,al as w,am as N,p as $,ar as tt,c as et,t as rt,r as st,as as T,ae as D}from"../chunks/runtime.Ctd-Fm3Y.js";import{k as ot,m as nt,u as at,a as it}from"../chunks/store.5x8R1Tli.js";import"../chunks/disclose-version.Bg9kRutz.js";import{i as I,c as S,b as V}from"../chunks/this.DBUbGj2m.js";import{a as R,t as Q,d as C,e as ct}from"../chunks/template.C0ghi9iV.js";import{p as j,a as lt}from"../chunks/props.nFf31fFe.js";import{o as ut}from"../chunks/index-client.CBbBiVWX.js";function mt(r){return class extends dt{constructor(t){super({component:r,...t})}}}var g,u;class dt{constructor(t){x(this,g);x(this,u);var h;var s=new Map,a=(o,e)=>{var m=K(e);return s.set(o,m),m};const c=new Proxy({...t.props||{},$$events:{}},{get(o,e){return v(s.get(e)??a(e,Reflect.get(o,e)))},has(o,e){return e===F?!0:(v(s.get(e)??a(e,Reflect.get(o,e))),Reflect.has(o,e))},set(o,e,m){return L(s.get(e)??a(e,m),m),Reflect.set(o,e,m)}});A(this,u,(t.hydrate?ot:nt)(t.component,{target:t.target,anchor:t.anchor,props:c,context:t.context,intro:t.intro??!1,recover:t.recover})),(!((h=t==null?void 0:t.props)!=null&&h.$$host)||t.sync===!1)&&H(),A(this,g,c.$$events);for(const o of Object.keys(i(this,u)))o==="$set"||o==="$destroy"||o==="$on"||J(this,o,{get(){return i(this,u)[o]},set(e){i(this,u)[o]=e},enumerable:!0});i(this,u).$set=o=>{Object.assign(c,o)},i(this,u).$destroy=()=>{at(i(this,u))}}$set(t){i(this,u).$set(t)}$on(t,s){i(this,g)[t]=i(this,g)[t]||[];const a=(...c)=>s.call(this,...c);return i(this,g)[t].push(a),()=>{i(this,g)[t]=i(this,g)[t].filter(c=>c!==a)}}$destroy(){i(this,u).$destroy()}}g=new WeakMap,u=new WeakMap;const ft="modulepreload",_t=function(r,t){return new URL(r,t).href},G={},b=function(t,s,a){let c=Promise.resolve();if(s&&s.length>0){const o=document.getElementsByTagName("link"),e=document.querySelector("meta[property=csp-nonce]"),m=(e==null?void 0:e.nonce)||(e==null?void 0:e.getAttribute("nonce"));c=Promise.allSettled(s.map(l=>{if(l=_t(l,a),l in G)return;G[l]=!0;const y=l.endsWith(".css"),k=y?'[rel="stylesheet"]':"";if(!!a)for(let d=o.length-1;d>=0;d--){const _=o[d];if(_.href===l&&(!y||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${k}`))return;const n=document.createElement("link");if(n.rel=y?"stylesheet":ft,y||(n.as="script"),n.crossOrigin="",n.href=l,m&&n.setAttribute("nonce",m),document.head.appendChild(n),y)return new Promise((d,_)=>{n.addEventListener("load",d),n.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${l}`)))})}))}function h(o){const e=new Event("vite:preloadError",{cancelable:!0});if(e.payload=o,window.dispatchEvent(e),!e.defaultPrevented)throw o}return c.then(o=>{for(const e of o||[])e.status==="rejected"&&h(e.reason);return t().catch(h)})},At={};var ht=Q('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),vt=Q("<!> <!>",1);function gt(r,t){X(t,!0);let s=j(t,"components",23,()=>[]),a=j(t,"data_0",3,null),c=j(t,"data_1",3,null);Z(()=>t.stores.page.set(t.page)),M(()=>{t.stores,t.page,t.constructors,s(),t.form,a(),c(),t.stores.page.notify()});let h=T(!1),o=T(!1),e=T(null);ut(()=>{const E=t.stores.page.subscribe(()=>{v(h)&&(L(o,!0),tt().then(()=>{L(e,lt(document.title||"untitled page"))}))});return L(h,!0),E});const m=D(()=>t.constructors[1]);var l=vt(),y=w(l);I(y,()=>t.constructors[1],E=>{var n=C();const d=D(()=>t.constructors[0]);var _=w(n);S(_,()=>v(d),(P,p)=>{V(p(P,{get data(){return a()},get form(){return t.form},children:(f,bt)=>{var q=C(),W=w(q);S(W,()=>v(m),(Y,z)=>{V(z(Y,{get data(){return c()},get form(){return t.form}}),O=>s()[1]=O,()=>{var O;return(O=s())==null?void 0:O[1]})}),R(f,q)},$$slots:{default:!0}}),f=>s()[0]=f,()=>{var f;return(f=s())==null?void 0:f[0]})}),R(E,n)},E=>{var n=C();const d=D(()=>t.constructors[0]);var _=w(n);S(_,()=>v(d),(P,p)=>{V(p(P,{get data(){return a()},get form(){return t.form}}),f=>s()[0]=f,()=>{var f;return(f=s())==null?void 0:f[0]})}),R(E,n)});var k=N(y,2);I(k,()=>v(h),E=>{var n=ht(),d=et(n);I(d,()=>v(o),_=>{var P=ct();rt(()=>it(P,v(e))),R(_,P)}),st(n),R(E,n)}),R(r,l),$()}const Tt=mt(gt),Dt=[()=>b(()=>import("../nodes/0.TVrkoUaj.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url),()=>b(()=>import("../nodes/1.CaaDi_W5.js"),__vite__mapDeps([6,1,2,7,3,8,9,10]),import.meta.url),()=>b(()=>import("../nodes/2.EhJH3Axv.js"),__vite__mapDeps([11,1,2,3,12,7,13,14,9]),import.meta.url),()=>b(()=>import("../nodes/3.VURsvFZm.js"),__vite__mapDeps([15,1,3,2]),import.meta.url),()=>b(()=>import("../nodes/4.Boew6wdu.js"),__vite__mapDeps([16,1,2,3,14,7,13,17,4,12,18]),import.meta.url),()=>b(()=>import("../nodes/5.C_f6so4-.js"),__vite__mapDeps([19,1,3,2,20]),import.meta.url),()=>b(()=>import("../nodes/6.B4Ak0S0g.js"),__vite__mapDeps([21,1,2,7,3,13,14,10,9,22]),import.meta.url),()=>b(()=>import("../nodes/7.RBcn971s.js"),__vite__mapDeps([23,1]),import.meta.url)],It=[],St={"/":[2],"/about":[3],"/demo":[4],"/demo/elements":[5],"/demo/fonts":[6],"/demo/ig-story":[7]},yt={handleError:({error:r})=>{console.error(r)},reroute:()=>{},transport:{}},Et=Object.fromEntries(Object.entries(yt.transport).map(([r,t])=>[r,t.decode])),Vt=!1,Ct=(r,t)=>Et[r](t);export{Ct as decode,Et as decoders,St as dictionary,Vt as hash,yt as hooks,At as matchers,Dt as nodes,Tt as root,It as server_loads};
import"../chunks/disclose-version.Bg9kRutz.js";import{h as B,a as ce,d as ae,b as he,E as xe,c as be,f as ye,l as Se,u as de,s as me,y as Ce,aA as ue,w as De,v as Ae,i as Ie,al as f,S as u,U as S,T as m,P as E,a3 as i,af as L,W as oe,Q as H,R as X,n as ie,a0 as le,as as W,aB as ke,aC as Ee}from"../chunks/runtime.DVH13VNt.js";import{b as Me,a as r,t as y,d as D,e as Te}from"../chunks/template.C0wajh7j.js";import{s as ne,p as T,a as fe}from"../chunks/props.BNjdiRtb.js";import{s as k,d as we}from"../chunks/render.qiwAwwbk.js";import{e as N,i as P}from"../chunks/each.GjXLdAKA.js";import{c as se,b as Re,i as Q}from"../chunks/this.DVb0dhGs.js";import{s as _e}from"../chunks/snippet.Ei52mYw-.js";import{c as Le}from"../chunks/copy.DpoC0QzE.js";import{h as pe}from"../chunks/html.BWOvpuFP.js";import{a as qe,s as Be,b as Ne}from"../chunks/attributes.BrGyezFo.js";function re(a,e,o,t,l,v){let c=B;B&&ce();var n,p,s=null;B&&ae.nodeType===1&&(s=ae,ce());var g=B?ae:a,d;he(()=>{const _=e()||null;var A=_==="svg"?ue:null;_!==n&&(d&&(_===null?De(d,()=>{d=null,p=null}):_===p?Ae(d):Ie(d)),_&&_!==p&&(d=be(()=>{if(s=B?s:A?document.createElementNS(A,_):document.createElement(_),Me(s,s),t){var x=B?ye(s):s.appendChild(Se());B&&(x===null?de(!1):me(x)),t(s,x)}Ce.nodes_end=s,g.before(s)})),n=_,n&&(p=n))},xe),c&&(de(!0),me(g))}function Pe(a,e,o){if(o){if(a.classList.contains(e))return;a.classList.add(e)}else{if(!a.classList.contains(e))return;a.classList.remove(e)}}var $e=y('<section id="demo-link"><h2>Link</h2> <p><a href="elements">Default element styles demo</a></p> <p><a href="fonts">Pudding-hosted font previews</a></p></section>');function Oe(a){var e=$e();r(a,e)}var je=y('<section id="demo-image"><h2>Image</h2> <p>img tag</p> <img src="../assets/demo/test.jpg" alt="cat" class="svelte-o47y6s"> <p>background image</p> <div class="svelte-o47y6s"></div></section>');function Fe(a){var e=je();r(a,e)}var Je=y('<section id="demo-element"><h2>Dynamic Svelte Element</h2> <!></section>');function Ue(a){const e=[{tag:"h3",text:"I am a h3 tag."},{tag:"p",text:"I am p tag."}];var o=Je(),t=f(u(o),2);N(t,17,()=>e,P,(l,v)=>{let c=()=>i(v).tag,n=()=>i(v).text;var p=D(),s=S(p);re(s,c,!1,(g,d)=>{var _=Te();E(()=>k(_,n())),r(d,_)}),r(l,p)}),m(o),r(a,o)}var Ve=y("<p> </p>");function ze(a,e){var o=Ve(),t=u(o);m(o),E(()=>k(t,`I am component A and my favorite number is ${e.number??""}.`)),r(a,o)}var Ge=y("<p> </p>");function Ke(a,e){var o=Ge(),t=u(o);m(o),E(()=>k(t,`I am component B and my name is ${e.name??""}.`)),r(a,o)}var Qe=y('<section id="demo-component"><h2>Dynamic Svelte Component</h2> <!></section>');function We(a){const e={A:ze,B:Ke},o=[{component:"A",number:42},{component:"B",name:"Russell"}];var t=Qe(),l=f(u(t),2);N(l,17,()=>o,P,(v,c)=>{var n=D();const p=L(()=>e[i(c).component]);var s=S(n);se(s,()=>i(p),(g,d)=>{d(g,ne(()=>i(c)))}),r(v,n)}),m(t),r(a,t)}var He=y("<div><!></div>");function Xe(a,e){X(e,!0);let o=T(e,"root",3,null),t=T(e,"top",3,0),l=T(e,"bottom",3,0),v=T(e,"increments",3,100),c=T(e,"value",15,void 0),n=[],p=[],s=[],g=[],d;function _(){let h=0,C=0;for(let I=0;I<n.length;I++)n[I]>h&&(h=n[I],C=I);h>0?c(C):c(void 0)}function A(h,C){const I=G=>{G[0].isIntersecting;const $=G[0].intersectionRatio;n[C]=$,_()},w=t()?t()*-1:0,q=l()?l()*-1:0,U=`${w}px 0px ${q}px 0px`,V={root:o(),rootMargin:U,threshold:p};g[C]&&g[C].disconnect();const z=new IntersectionObserver(I,V);z.observe(h),g[C]=z}function x(){s.length&&s.forEach(A)}oe(()=>{for(let h=0;h<v()+1;h++)p.push(h/v());s=d.querySelectorAll(":scope > *:not(iframe)"),x()}),oe(()=>{t(),l(),x()});var b=He(),M=u(b);_e(M,()=>e.children??ie),m(b),Re(b,h=>d=h,()=>d),r(a,b),H()}var Ye=y('<div class="step svelte-12sq0x6"><p class="svelte-12sq0x6"> </p></div>'),Ze=y('<section id="scrolly"><h2 class="svelte-12sq0x6">Scrolly <span> </span></h2> <div class="spacer svelte-12sq0x6"></div> <!> <div class="spacer svelte-12sq0x6"></div></section>');function et(a){let e=W(void 0);var o=Ze(),t=u(o),l=f(u(t)),v=u(l,!0);m(l),m(t);var c=f(t,4);Xe(c,{get value(){return i(e)},set value(n){le(e,fe(n))},children:(n,p)=>{var s=D(),g=S(s);N(g,16,()=>[0,1,2,3,4],P,(d,_,A)=>{var x=Ye();const b=L(()=>i(e)===A);var M=u(x),h=u(M,!0);m(M),m(x),E(()=>{Pe(x,"active",i(b)),k(h,_)}),r(d,x)}),r(n,s)},$$slots:{default:!0}}),ke(2),m(o),E(()=>k(v,i(e)||"-")),r(a,o)}const tt='{"meta":{"title":"Title TK","description":"Description tk."},"body":[{"section":"intro","content":[{"type":"h4","value":"An h4 element with no attributes"},{"type":"text","value":"Some random text here, followed by an img tag."},{"type":"img","value":{"src":"../assets/demo/test.jpg","alt":"A cat"}},{"type":"Test","value":{"label":"I’m a custom component!","value":"50"}}]}]}';var at=y("<p><!></p>"),ot=y("<section><!></section>");function nt(a,e){X(e,!0);let o=T(e,"components",19,()=>({})),t=T(e,"body",19,()=>[]);var l=D(),v=S(l);N(v,17,t,P,(c,n)=>{let p=()=>i(n).section,s=()=>i(n).content;var g=ot();const d=L(()=>p().toLowerCase().replace(/[^a-z0-9]/g,"")),_=L(()=>o()[p()]);var A=u(g);Q(A,()=>i(_),x=>{var b=D(),M=S(b);se(M,()=>i(_),(h,C)=>{C(h,ne(s))}),r(x,b)},x=>{var b=D(),M=S(b);N(M,17,s,P,(C,I)=>{let w=()=>i(I).type,q=()=>i(I).value;var U=D();const V=L(()=>o()[w()]),z=L(()=>typeof q()=="string");var G=S(U);Q(G,()=>i(V),$=>{var O=D(),Y=S(O);se(Y,()=>i(V),(j,R)=>{R(j,ne(q))}),r($,O)},$=>{var O=D(),Y=S(O);Q(Y,()=>w()==="text",j=>{var R=at(),Z=u(R);pe(Z,q),m(R),r(j,R)},j=>{var R=D(),Z=S(R);Q(Z,()=>i(z),ee=>{var F=D(),te=S(F);re(te,w,!1,(K,ve)=>{var J=D(),ge=S(J);pe(ge,q),r(ve,J)}),r(ee,F)},ee=>{var F=D(),te=S(F);re(te,w,!1,(K,ve)=>{let J;E(()=>J=qe(K,J,{...q()},void 0,K.namespaceURI===ue,K.nodeName.includes("-")))}),r(ee,F)},!0),r(j,R)},!0),r($,O)}),r(C,U)}),r(x,b)}),m(g),E(()=>Be(g,"id",i(d))),r(c,g)}),r(a,l),H()}var st=y('<p> </p> <progress max="100"></progress>',1);function rt(a,e){let o=T(e,"label",3,"A"),t=T(e,"value",3,0);var l=st(),v=S(l),c=u(v,!0);m(v);var n=f(v,2);E(()=>{k(c,o()),Ne(n,t())}),r(a,l)}var it=y('<section id="cms"><h2>MicroCMS</h2> <code><pre> </pre></code> <!></section>');function lt(a,e){X(e,!0);const{body:o}=Le,t={Test:rt};var l=it(),v=f(u(l),2),c=u(v),n=u(c,!0);E(()=>k(n,tt.replace(/\t/g," "))),m(c),m(v);var p=f(v,2);nt(p,{components:t,body:o}),m(l),r(a,l),H()}const vt=(a,e=ie)=>{var o=ct(),t=u(o),l=u(t,!0);m(t);var v=f(t,2),c=u(v,!0);m(v),m(o),E(()=>{k(l,e().name),k(c,e().age)}),r(a,o)};var ct=y('<div class="person svelte-1ltx6da"><p class="svelte-1ltx6da"> </p> <p class="svelte-1ltx6da"> </p></div>'),dt=(a,e)=>Ee(e),mt=(a,e)=>e.random(Math.floor(Math.random()*10)),pt=y('<h2>Svelte5</h2> <h3>Reactive variables 3 ways:</h3> <button class="svelte-1ltx6da">count++</button> <p class="svelte-1ltx6da"> </p> <p class="svelte-1ltx6da"> </p> <p class="svelte-1ltx6da"> </p> <h3>Children (previously slots):</h3> <div class="children"><!></div> <h3>Dispatch Event</h3> <button class="svelte-1ltx6da">Random</button>  <h3>Snippets</h3> <div class="people svelte-1ltx6da"></div>',1);function ut(a,e){X(e,!0),T(e,"age",3,30);const o=[{name:"John",age:30},{name:"Jill",age:45}];let t=W(0),l=L(()=>i(t)*2),v=L(()=>i(t)*2),c=W(0);oe(()=>{le(c,i(t)*2)});var n=pt(),p=f(S(n),4);p.__click=[dt,t];var s=f(p,2),g=u(s);m(s);var d=f(s,2),_=u(d);m(d);var A=f(d,2),x=u(A);m(A);var b=f(A,4),M=u(b);_e(M,()=>e.children??ie),m(b);var h=f(b,4);h.__click=[mt,e];var C=f(h,4);N(C,21,()=>o,P,(I,w)=>{vt(I,()=>i(w))}),m(C),E(()=>{k(g,`${i(t)??""} doubled is ${i(l)??""} (derived)`),k(_,`${i(t)??""} doubled is ${i(v)??""} (derived by)`),k(x,`${i(t)??""} doubled is ${i(c)??""} ($effect)`)}),r(a,n),H()}we(["click"]);var ft=y('<div id="demo" class="svelte-m1ilu3"><h1>Demo</h1> <!> <!> <!> <!> <!> <!> <!></div>');function _t(a){let e=W(0);function o(d){console.log(d)}var t=ft(),l=f(u(t),2);ut(l,{get value(){return i(e)},set value(d){le(e,fe(d))},random:o});var v=f(l,2);Oe(v);var c=f(v,2);Fe(c);var n=f(c,2);Ue(n);var p=f(n,2);We(p);var s=f(p,2);lt(s,{});var g=f(s,2);et(g),m(t),r(a,t)}function Et(a){_t(a)}export{Et as component};
import{o as Ce,t as se}from"../chunks/index.1bfeb56d.js";import{S as ze,a as Be,I as q,g as qe,f as Fe,b as ge,c as ce,s as M,i as ye,d as Q,e as z,P as Me,h as We}from"../chunks/singletons.a51fab03.js";import{R as He,H as ee}from"../chunks/control.e7f5239e.js";function Xe(n,i){return n==="/"||i==="ignore"?n:i==="never"?n.endsWith("/")?n.slice(0,-1):n:i==="always"&&!n.endsWith("/")?n+"/":n}function Ze(n){return n.split("%25").map(decodeURI).join("%25")}function Qe(n){for(const i in n)n[i]=decodeURIComponent(n[i]);return n}const et=["href","pathname","search","searchParams","toString","toJSON"];function tt(n,i){const p=new URL(n);for(const c of et){let u=p[c];Object.defineProperty(p,c,{get(){return i(),u},enumerable:!0,configurable:!0})}return nt(p),p}function nt(n){Object.defineProperty(n,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const at="/__data.json";function rt(n){return n.replace(/\/$/,"")+at}function Ge(n){try{return JSON.parse(sessionStorage[n])}catch{}}function Ve(n,i){const p=JSON.stringify(i);try{sessionStorage[n]=p}catch{}}function ot(...n){let i=5381;for(const p of n)if(typeof p=="string"){let c=p.length;for(;c;)i=i*33^p.charCodeAt(--c)}else if(ArrayBuffer.isView(p)){const c=new Uint8Array(p.buffer,p.byteOffset,p.byteLength);let u=c.length;for(;u;)i=i*33^c[--u]}else throw new TypeError("value must be a string or TypedArray");return(i>>>0).toString(36)}const le=window.fetch;window.fetch=(n,i)=>((n instanceof Request?n.method:(i==null?void 0:i.method)||"GET")!=="GET"&&te.delete(ve(n)),le(n,i));const te=new Map;function it(n,i){const p=ve(n,i),c=document.querySelector(p);if(c!=null&&c.textContent){const{body:u,...d}=JSON.parse(c.textContent),L=c.getAttribute("data-ttl");return L&&te.set(p,{body:u,init:d,ttl:1e3*Number(L)}),Promise.resolve(new Response(u,d))}return le(n,i)}function st(n,i,p){if(te.size>0){const c=ve(n,p),u=te.get(c);if(u){if(performance.now()<u.ttl&&["default","force-cache","only-if-cached",void 0].includes(p==null?void 0:p.cache))return new Response(u.body,u.init);te.delete(c)}}return le(i,p)}function ve(n,i){let c=`script[data-sveltekit-fetched][data-url=${JSON.stringify(n instanceof Request?n.url:n)}]`;if(i!=null&&i.headers||i!=null&&i.body){const u=[];i.headers&&u.push([...new Headers(i.headers)].join(",")),i.body&&(typeof i.body=="string"||ArrayBuffer.isView(i.body))&&u.push(i.body),c+=`[data-hash="${ot(...u)}"]`}return c}const ct=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function lt(n){const i=[];return{pattern:n==="/"?/^\/$/:new RegExp(`^${ut(n).map(c=>{const u=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(c);if(u)return i.push({name:u[1],matcher:u[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const d=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(c);if(d)return i.push({name:d[1],matcher:d[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!c)return;const L=c.split(/\[(.+?)\](?!\])/);return"/"+L.map((_,g)=>{if(g%2){if(_.startsWith("x+"))return we(String.fromCharCode(parseInt(_.slice(2),16)));if(_.startsWith("u+"))return we(String.fromCharCode(..._.slice(2).split("-").map(A=>parseInt(A,16))));const m=ct.exec(_);if(!m)throw new Error(`Invalid param: ${_}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,$,P,E,O]=m;return i.push({name:E,matcher:O,optional:!!$,rest:!!P,chained:P?g===1&&L[0]==="":!1}),P?"(.*?)":$?"([^/]*)?":"([^/]+?)"}return we(_)}).join("")}).join("")}/?$`),params:i}}function ft(n){return!/^\([^)]+\)$/.test(n)}function ut(n){return n.slice(1).split("/").filter(ft)}function dt(n,i,p){const c={},u=n.slice(1);let d=0;for(let L=0;L<i.length;L+=1){const l=i[L],_=u[L-d];if(l.chained&&l.rest&&d){c[l.name]=u.slice(L-d,L+1).filter(g=>g).join("/"),d=0;continue}if(_===void 0){l.rest&&(c[l.name]="");continue}if(!l.matcher||p[l.matcher](_)){c[l.name]=_;const g=i[L+1],m=u[L+1];g&&!g.rest&&g.optional&&m&&(d=0);continue}if(l.optional&&l.chained){d++;continue}return}if(!d)return c}function we(n){return n.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function pt({nodes:n,server_loads:i,dictionary:p,matchers:c}){const u=new Set(i);return Object.entries(p).map(([l,[_,g,m]])=>{const{pattern:$,params:P}=lt(l),E={id:l,exec:O=>{const A=$.exec(O);if(A)return dt(A,P,c)},errors:[1,...m||[]].map(O=>n[O]),layouts:[0,...g||[]].map(L),leaf:d(_)};return E.errors.length=E.layouts.length=Math.max(E.errors.length,E.layouts.length),E});function d(l){const _=l<0;return _&&(l=~l),[_,n[l]]}function L(l){return l===void 0?l:[u.has(l),n[l]]}}async function ht(n){var i;for(const p in n)if(typeof((i=n[p])==null?void 0:i.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(n).map(async([c,u])=>[c,await u])));return n}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const mt=-1,gt=-2,yt=-3,wt=-4,_t=-5,bt=-6;function vt(n,i){if(typeof n=="number")return u(n,!0);if(!Array.isArray(n)||n.length===0)throw new Error("Invalid input");const p=n,c=Array(p.length);function u(d,L=!1){if(d===mt)return;if(d===yt)return NaN;if(d===wt)return 1/0;if(d===_t)return-1/0;if(d===bt)return-0;if(L)throw new Error("Invalid input");if(d in c)return c[d];const l=p[d];if(!l||typeof l!="object")c[d]=l;else if(Array.isArray(l))if(typeof l[0]=="string"){const _=l[0],g=i==null?void 0:i[_];if(g)return c[d]=g(u(l[1]));switch(_){case"Date":c[d]=new Date(l[1]);break;case"Set":const m=new Set;c[d]=m;for(let E=1;E<l.length;E+=1)m.add(u(l[E]));break;case"Map":const $=new Map;c[d]=$;for(let E=1;E<l.length;E+=2)$.set(u(l[E]),u(l[E+1]));break;case"RegExp":c[d]=new RegExp(l[1],l[2]);break;case"Object":c[d]=Object(l[1]);break;case"BigInt":c[d]=BigInt(l[1]);break;case"null":const P=Object.create(null);c[d]=P;for(let E=1;E<l.length;E+=2)P[l[E]]=u(l[E+1]);break;default:throw new Error(`Unknown type ${_}`)}}else{const _=new Array(l.length);c[d]=_;for(let g=0;g<l.length;g+=1){const m=l[g];m!==gt&&(_[g]=u(m))}}else{const _={};c[d]=_;for(const g in l){const m=l[g];_[g]=u(m)}}return c[d]}return u(0)}function Et(n){return n.filter(i=>i!=null)}const B=Ge(ze)??{},Z=Ge(Be)??{};function _e(n){B[n]=Q()}function kt(n,i){var $e;const p=pt(n),c=n.nodes[0],u=n.nodes[1];c(),u();const d=document.documentElement,L=[],l=[];let _=null;const g={before_navigate:[],after_navigate:[]};let m={branch:[],error:null,url:null},$=!1,P=!1,E=!0,O=!1,A=!1,J=!1,H=!1,F,N=($e=history.state)==null?void 0:$e[q];N||(N=Date.now(),history.replaceState({...history.state,[q]:N},"",location.href));const fe=B[N];fe&&(history.scrollRestoration="manual",scrollTo(fe.x,fe.y));let V,Ee,ne;async function ke(){ne=ne||Promise.resolve(),await ne,ne=null;const t=new URL(location.href),e=W(t,!0);_=null,await Ae(e,t,[])}function Se(t){l.some(e=>e==null?void 0:e.snapshot)&&(Z[t]=l.map(e=>{var r;return(r=e==null?void 0:e.snapshot)==null?void 0:r.capture()}))}function Re(t){var e;(e=Z[t])==null||e.forEach((r,a)=>{var s,o;(o=(s=l[a])==null?void 0:s.snapshot)==null||o.restore(r)})}function Le(){_e(N),Ve(ze,B),Se(N),Ve(Be,Z)}async function ue(t,{noScroll:e=!1,replaceState:r=!1,keepFocus:a=!1,state:s={},invalidateAll:o=!1},h,f){return typeof t=="string"&&(t=new URL(t,qe(document))),ie({url:t,scroll:e?Q():null,keepfocus:a,redirect_chain:h,details:{state:s,replaceState:r},nav_token:f,accepted:()=>{o&&(H=!0)},blocked:()=>{},type:"goto"})}async function Ie(t){return _={id:t.id,promise:Ue(t).then(e=>(e.type==="loaded"&&e.state.error&&(_=null),e))},_.promise}async function ae(...t){const r=p.filter(a=>t.some(s=>a.exec(s))).map(a=>Promise.all([...a.layouts,a.leaf].map(s=>s==null?void 0:s[1]())));await Promise.all(r)}async function Ae(t,e,r,a,s,o={},h){var y,w,R;Ee=o;let f=t&&await Ue(t);if(!f){if(ye(e,z))return await G(e);f=await xe(e,{id:null},await X(new Error(`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(t==null?void 0:t.url)||e,Ee!==o)return!1;if(f.type==="redirect")if(r.length>10||r.includes(e.pathname))f=await re({status:500,error:await X(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return ue(new URL(f.location,e).href,{},[...r,e.pathname],o),!1;else((y=f.props.page)==null?void 0:y.status)>=400&&await M.updated.check()&&await G(e);if(L.length=0,H=!1,O=!0,a&&(_e(a),Se(a)),(w=f.props.page)!=null&&w.url&&f.props.page.url.pathname!==e.pathname&&(e.pathname=(R=f.props.page)==null?void 0:R.url.pathname),s&&s.details){const{details:v}=s,I=v.replaceState?0:1;if(v.state[q]=N+=I,history[v.replaceState?"replaceState":"pushState"](v.state,"",e),!v.replaceState){let S=N+1;for(;Z[S]||B[S];)delete Z[S],delete B[S],S+=1}}if(_=null,P?(m=f.state,f.props.page&&(f.props.page.url=e),F.$set(f.props)):Pe(f),s){const{scroll:v,keepfocus:I}=s,{activeElement:S}=document;if(await se(),E){const U=e.hash&&document.getElementById(decodeURIComponent(e.hash.slice(1)));v?scrollTo(v.x,v.y):U?U.scrollIntoView():scrollTo(0,0)}const b=document.activeElement!==S&&document.activeElement!==document.body;!I&&!b&&await be()}else await se();E=!0,f.props.page&&(V=f.props.page),h&&h(),O=!1}function Pe(t){var a;m=t.state;const e=document.querySelector("style[data-sveltekit]");e&&e.remove(),V=t.props.page,F=new n.root({target:i,props:{...t.props,stores:M,components:l},hydrate:!0}),Re(N);const r={from:null,to:{params:m.params,route:{id:((a=m.route)==null?void 0:a.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};g.after_navigate.forEach(s=>s(r)),P=!0}async function Y({url:t,params:e,branch:r,status:a,error:s,route:o,form:h}){let f="never";for(const S of r)(S==null?void 0:S.slash)!==void 0&&(f=S.slash);t.pathname=Xe(t.pathname,f),t.search=t.search;const y={type:"loaded",state:{url:t,params:e,branch:r,error:s,route:o},props:{constructors:Et(r).map(S=>S.node.component)}};h!==void 0&&(y.props.form=h);let w={},R=!V,v=0;for(let S=0;S<Math.max(r.length,m.branch.length);S+=1){const b=r[S],U=m.branch[S];(b==null?void 0:b.data)!==(U==null?void 0:U.data)&&(R=!0),b&&(w={...w,...b.data},R&&(y.props[`data_${v}`]=w),v+=1)}return(!m.url||t.href!==m.url.href||m.error!==s||h!==void 0&&h!==V.form||R)&&(y.props.page={error:s,params:e,route:{id:(o==null?void 0:o.id)??null},status:a,url:new URL(t),form:h??null,data:R?w:V.data}),y}async function de({loader:t,parent:e,url:r,params:a,route:s,server_data_node:o}){var w,R,v;let h=null;const f={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},y=await t();if((w=y.universal)!=null&&w.load){let I=function(...b){for(const U of b){const{href:D}=new URL(U,r);f.dependencies.add(D)}};const S={route:{get id(){return f.route=!0,s.id}},params:new Proxy(a,{get:(b,U)=>(f.params.add(U),b[U])}),data:(o==null?void 0:o.data)??null,url:tt(r,()=>{f.url=!0}),async fetch(b,U){let D;b instanceof Request?(D=b.url,U={body:b.method==="GET"||b.method==="HEAD"?void 0:await b.blob(),cache:b.cache,credentials:b.credentials,headers:b.headers,integrity:b.integrity,keepalive:b.keepalive,method:b.method,mode:b.mode,redirect:b.redirect,referrer:b.referrer,referrerPolicy:b.referrerPolicy,signal:b.signal,...U}):D=b;const C=new URL(D,r);return I(C.href),C.origin===r.origin&&(D=C.href.slice(r.origin.length)),P?st(D,C.href,U):it(D,U)},setHeaders:()=>{},depends:I,parent(){return f.parent=!0,e()}};h=await y.universal.load.call(null,S)??null,h=h?await ht(h):null}return{node:y,loader:t,server:o,universal:(R=y.universal)!=null&&R.load?{type:"data",data:h,uses:f}:null,data:h??(o==null?void 0:o.data)??null,slash:((v=y.universal)==null?void 0:v.trailingSlash)??(o==null?void 0:o.slash)}}function Oe(t,e,r,a,s){if(H)return!0;if(!a)return!1;if(a.parent&&t||a.route&&e||a.url&&r)return!0;for(const o of a.params)if(s[o]!==m.params[o])return!0;for(const o of a.dependencies)if(L.some(h=>h(new URL(o))))return!0;return!1}function pe(t,e){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?e??null:null}async function Ue({id:t,invalidating:e,url:r,params:a,route:s}){if((_==null?void 0:_.id)===t)return _.promise;const{errors:o,layouts:h,leaf:f}=s,y=[...h,f];o.forEach(k=>k==null?void 0:k().catch(()=>{})),y.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let w=null;const R=m.url?t!==m.url.pathname+m.url.search:!1,v=m.route?s.id!==m.route.id:!1;let I=!1;const S=y.map((k,T)=>{var K;const j=m.branch[T],x=!!(k!=null&&k[0])&&((j==null?void 0:j.loader)!==k[1]||Oe(I,v,R,(K=j.server)==null?void 0:K.uses,a));return x&&(I=!0),x});if(S.some(Boolean)){try{w=await Ke(r,S)}catch(k){return re({status:k instanceof ee?k.status:500,error:await X(k,{url:r,params:a,route:{id:s.id}}),url:r,route:s})}if(w.type==="redirect")return w}const b=w==null?void 0:w.nodes;let U=!1;const D=y.map(async(k,T)=>{var he;if(!k)return;const j=m.branch[T],x=b==null?void 0:b[T];if((!x||x.type==="skip")&&k[1]===(j==null?void 0:j.loader)&&!Oe(U,v,R,(he=j.universal)==null?void 0:he.uses,a))return j;if(U=!0,(x==null?void 0:x.type)==="error")throw x;return de({loader:k[1],url:r,params:a,route:s,parent:async()=>{var De;const Te={};for(let me=0;me<T;me+=1)Object.assign(Te,(De=await D[me])==null?void 0:De.data);return Te},server_data_node:pe(x===void 0&&k[0]?{type:"skip"}:x??null,k[0]?j==null?void 0:j.server:void 0)})});for(const k of D)k.catch(()=>{});const C=[];for(let k=0;k<y.length;k+=1)if(y[k])try{C.push(await D[k])}catch(T){if(T instanceof He)return{type:"redirect",location:T.location};let j=500,x;if(b!=null&&b.includes(T))j=T.status??j,x=T.error;else if(T instanceof ee)j=T.status,x=T.body;else{if(await M.updated.check())return await G(r);x=await X(T,{params:a,url:r,route:{id:s.id}})}const K=await je(k,C,o);return K?await Y({url:r,params:a,branch:C.slice(0,K.idx).concat(K.node),status:j,error:x,route:s}):await xe(r,{id:s.id},x,j)}else C.push(void 0);return await Y({url:r,params:a,branch:C,status:200,error:null,route:s,form:e?void 0:null})}async function je(t,e,r){for(;t--;)if(r[t]){let a=t;for(;!e[a];)a-=1;try{return{idx:a+1,node:{node:await r[t](),loader:r[t],data:{},server:null,universal:null}}}catch{continue}}}async function re({status:t,error:e,url:r,route:a}){const s={};let o=null;if(n.server_loads[0]===0)try{const w=await Ke(r,[!0]);if(w.type!=="data"||w.nodes[0]&&w.nodes[0].type!=="data")throw 0;o=w.nodes[0]??null}catch{(r.origin!==location.origin||r.pathname!==location.pathname||$)&&await G(r)}const f=await de({loader:c,url:r,params:s,route:a,parent:()=>Promise.resolve({}),server_data_node:pe(o)}),y={node:await u(),loader:u,universal:null,server:null,data:null};return await Y({url:r,params:s,branch:[f,y],status:t,error:e,route:null})}function W(t,e){if(ye(t,z))return;const r=oe(t);for(const a of p){const s=a.exec(r);if(s)return{id:t.pathname+t.search,invalidating:e,route:a,params:Qe(s),url:t}}}function oe(t){return Ze(t.pathname.slice(z.length)||"/")}function Ne({url:t,type:e,intent:r,delta:a}){var f,y;let s=!1;const o={from:{params:m.params,route:{id:((f=m.route)==null?void 0:f.id)??null},url:m.url},to:{params:(r==null?void 0:r.params)??null,route:{id:((y=r==null?void 0:r.route)==null?void 0:y.id)??null},url:t},willUnload:!r,type:e};a!==void 0&&(o.delta=a);const h={...o,cancel:()=>{s=!0}};return A||g.before_navigate.forEach(w=>w(h)),s?null:o}async function ie({url:t,scroll:e,keepfocus:r,redirect_chain:a,details:s,type:o,delta:h,nav_token:f,accepted:y,blocked:w}){const R=W(t,!1),v=Ne({url:t,type:o,delta:h,intent:R});if(!v){w();return}const I=N;y(),A=!0,P&&M.navigating.set(v),await Ae(R,t,a,I,{scroll:e,keepfocus:r,details:s},f,()=>{A=!1,g.after_navigate.forEach(S=>S(v)),M.navigating.set(null)})}async function xe(t,e,r,a){return t.origin===location.origin&&t.pathname===location.pathname&&!$?await re({status:a,error:r,url:t,route:e}):await G(t)}function G(t){return location.href=t.href,new Promise(()=>{})}function Ye(){let t;d.addEventListener("mousemove",o=>{const h=o.target;clearTimeout(t),t=setTimeout(()=>{a(h,2)},20)});function e(o){a(o.composedPath()[0],1)}d.addEventListener("mousedown",e),d.addEventListener("touchstart",e,{passive:!0});const r=new IntersectionObserver(o=>{for(const h of o)h.isIntersecting&&(ae(oe(new URL(h.target.href))),r.unobserve(h.target))},{threshold:0});function a(o,h){const f=Fe(o,d);if(!f)return;const{url:y,external:w}=ge(f,z);if(w)return;const R=ce(f);if(!R.reload)if(h<=R.preload_data){const v=W(y,!1);v&&Ie(v)}else h<=R.preload_code&&ae(oe(y))}function s(){r.disconnect();for(const o of d.querySelectorAll("a")){const{url:h,external:f}=ge(o,z);if(f)continue;const y=ce(o);y.reload||(y.preload_code===Me.viewport&&r.observe(o),y.preload_code===Me.eager&&ae(oe(h)))}}g.after_navigate.push(s),s()}function X(t,e){return t instanceof ee?t.body:n.hooks.handleError({error:t,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}return{after_navigate:t=>{Ce(()=>(g.after_navigate.push(t),()=>{const e=g.after_navigate.indexOf(t);g.after_navigate.splice(e,1)}))},before_navigate:t=>{Ce(()=>(g.before_navigate.push(t),()=>{const e=g.before_navigate.indexOf(t);g.before_navigate.splice(e,1)}))},disable_scroll_handling:()=>{(O||!P)&&(E=!1)},goto:(t,e={})=>ue(t,e,[]),invalidate:t=>{if(typeof t=="function")L.push(t);else{const{href:e}=new URL(t,location.href);L.push(r=>r.href===e)}return ke()},invalidateAll:()=>(H=!0,ke()),preload_data:async t=>{const e=new URL(t,qe(document)),r=W(e,!1);if(!r)throw new Error(`Attempted to preload a URL that does not belong to this app: ${e}`);await Ie(r)},preload_code:ae,apply_action:async t=>{if(t.type==="error"){const e=new URL(location.href),{branch:r,route:a}=m;if(!a)return;const s=await je(m.branch.length,r,a.errors);if(s){const o=await Y({url:e,params:m.params,branch:r.slice(0,s.idx).concat(s.node),status:t.status??500,error:t.error,route:a});m=o.state,F.$set(o.props),se().then(be)}}else t.type==="redirect"?ue(t.location,{invalidateAll:!0},[]):(F.$set({form:null,page:{...V,form:t.data,status:t.status}}),await se(),F.$set({form:t.data}),t.type==="success"&&be())},_start_router:()=>{var t;history.scrollRestoration="manual",addEventListener("beforeunload",e=>{var a;let r=!1;if(Le(),!A){const s={from:{params:m.params,route:{id:((a=m.route)==null?void 0:a.id)??null},url:m.url},to:null,willUnload:!0,type:"leave",cancel:()=>r=!0};g.before_navigate.forEach(o=>o(s))}r?(e.preventDefault(),e.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Le()}),(t=navigator.connection)!=null&&t.saveData||Ye(),d.addEventListener("click",e=>{if(e.button||e.which!==1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)return;const r=Fe(e.composedPath()[0],d);if(!r)return;const{url:a,external:s,target:o}=ge(r,z);if(!a)return;if(o==="_parent"||o==="_top"){if(window.parent!==window)return}else if(o&&o!=="_self")return;const h=ce(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:"))return;if(s||h.reload){Ne({url:a,type:"link"})?A=!0:e.preventDefault();return}const[y,w]=a.href.split("#");if(w!==void 0&&y===location.href.split("#")[0]){J=!0,_e(N),m.url=a,M.page.set({...V,url:a}),M.page.notify();return}ie({url:a,scroll:h.noscroll?Q():null,keepfocus:h.keep_focus??!1,redirect_chain:[],details:{state:{},replaceState:h.replace_state??a.href===location.href},accepted:()=>e.preventDefault(),blocked:()=>e.preventDefault(),type:"link"})}),d.addEventListener("submit",e=>{if(e.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(e.target),a=e.submitter;if(((a==null?void 0:a.formMethod)||r.method)!=="get")return;const o=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(ye(o,z))return;const h=e.target,{keep_focus:f,noscroll:y,reload:w,replace_state:R}=ce(h);if(w)return;e.preventDefault(),e.stopPropagation();const v=new FormData(h),I=a==null?void 0:a.getAttribute("name");I&&v.append(I,(a==null?void 0:a.getAttribute("value"))??""),o.search=new URLSearchParams(v).toString(),ie({url:o,scroll:y?Q():null,keepfocus:f??!1,redirect_chain:[],details:{state:{},replaceState:R??o.href===location.href},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async e=>{var r;if((r=e.state)!=null&&r[q]){if(e.state[q]===N)return;const a=B[e.state[q]];if(m.url.href.split("#")[0]===location.href.split("#")[0]){B[N]=Q(),N=e.state[q],scrollTo(a.x,a.y);return}const s=e.state[q]-N;let o=!1;await ie({url:new URL(location.href),scroll:a,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{N=e.state[q]},blocked:()=>{history.go(-s),o=!0},type:"popstate",delta:s}),o||Re(N)}}),addEventListener("hashchange",()=>{J&&(J=!1,history.replaceState({...history.state,[q]:++N},"",location.href))});for(const e of document.querySelectorAll("link"))e.rel==="icon"&&(e.href=e.href);addEventListener("pageshow",e=>{e.persisted&&M.navigating.set(null)})},_hydrate:async({status:t=200,error:e,node_ids:r,params:a,route:s,data:o,form:h})=>{$=!0;const f=new URL(location.href);({params:a={},route:s={id:null}}=W(f,!1)||{});let y;try{const w=r.map(async(R,v)=>{const I=o[v];return I!=null&&I.uses&&(I.uses=Je(I.uses)),de({loader:n.nodes[R],url:f,params:a,route:s,parent:async()=>{const S={};for(let b=0;b<v;b+=1)Object.assign(S,(await w[b]).data);return S},server_data_node:pe(I)})});y=await Y({url:f,params:a,branch:await Promise.all(w),status:t,error:e,form:h,route:p.find(({id:R})=>R===s.id)??null})}catch(w){if(w instanceof He){await G(new URL(w.location,location.href));return}y=await re({status:w instanceof ee?w.status:500,error:await X(w,{url:f,params:a,route:s}),url:f,route:s})}Pe(y)}}}async function Ke(n,i){const p=new URL(n);p.pathname=rt(n.pathname),p.searchParams.append("x-sveltekit-invalidated",i.map(u=>u?"1":"").join("_"));const c=await le(p.href);if(!c.ok)throw new ee(c.status,await c.json());return new Promise(async u=>{var m;const d=new Map,L=c.body.getReader(),l=new TextDecoder;function _($){return vt($,{Promise:P=>new Promise((E,O)=>{d.set(P,{fulfil:E,reject:O})})})}let g="";for(;;){const{done:$,value:P}=await L.read();if($&&!g)break;for(g+=!P&&g?`
`:l.decode(P);;){const E=g.indexOf(`
`);if(E===-1)break;const O=JSON.parse(g.slice(0,E));if(g=g.slice(E+1),O.type==="redirect")return u(O);if(O.type==="data")(m=O.nodes)==null||m.forEach(A=>{(A==null?void 0:A.type)==="data"&&(A.uses=Je(A.uses),A.data=_(A.data))}),u(O);else if(O.type==="chunk"){const{id:A,data:J,error:H}=O,F=d.get(A);d.delete(A),H?F.reject(_(H)):F.fulfil(_(J))}}}})}function Je(n){return{dependencies:new Set((n==null?void 0:n.dependencies)??[]),params:new Set((n==null?void 0:n.params)??[]),parent:!!(n!=null&&n.parent),route:!!(n!=null&&n.route),url:!!(n!=null&&n.url)}}function be(){const n=document.querySelector("[autofocus]");if(n)n.focus();else{const i=document.body,p=i.getAttribute("tabindex");return i.tabIndex=-1,i.focus({preventScroll:!0}),p!==null?i.setAttribute("tabindex",p):i.removeAttribute("tabindex"),new Promise(c=>{setTimeout(()=>{var u;c((u=getSelection())==null?void 0:u.removeAllRanges())})})}}async function It(n,i,p){const c=kt(n,i);We({client:c}),p?await c._hydrate(p):c.goto(location.href,{replaceState:!0}),c._start_router()}export{It as start};

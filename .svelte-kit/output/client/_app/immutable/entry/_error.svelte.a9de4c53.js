import{S as T,i as A,s as D,k as f,q as y,a as j,l as x,m as g,r as E,h as u,c as C,n as v,b as G,G as l,u as I,C as S,L}from"../chunks/index.1bfeb56d.js";import{p as M}from"../chunks/stores.e1c020d6.js";function N(i){var P;let e,n,s=i[1].status+"",t,c,a,d,h=((P=i[1].error)==null?void 0:P.message)+"",w,k,m,_;return{c(){e=f("main"),n=f("p"),t=y(s),c=j(),a=f("div"),d=f("p"),w=y(h),k=j(),m=f("p"),_=y(i[0]),this.h()},l(o){e=x(o,"MAIN",{class:!0});var r=g(e);n=x(r,"P",{class:!0});var p=g(n);t=E(p,s),p.forEach(u),c=C(r),a=x(r,"DIV",{class:!0});var b=g(a);d=x(b,"P",{class:!0});var q=g(d);w=E(q,h),q.forEach(u),k=C(b),m=x(b,"P",{class:!0});var $=g(m);_=E($,i[0]),$.forEach(u),b.forEach(u),r.forEach(u),this.h()},h(){v(n,"class","font-mono text-9xl md:text-[10rem] lg:text-[12rem] xl:text-[15rem] dark:text-white w-full mb-8 md:mb-0 md:w-1/2 text-center"),v(d,"class","font-brand text-5xl md:text-6xl lg:text-8xl xl:text-9xl dark:text-white mb-6 text-center md:text-left"),v(m,"class","font-brand text-lg md:text-xl lg:text-2xl dark:text-white opacity-40"),v(a,"class","w-full md:w-1/3"),v(e,"class","dark:bg-stone-900 bg-new-white transition-colors h-screen w-full flex flex-col md:flex-row items-center justify-center md:justify-start px-8 md:px-16 lg:px-24")},m(o,r){G(o,e,r),l(e,n),l(n,t),l(e,c),l(e,a),l(a,d),l(d,w),l(a,k),l(a,m),l(m,_)},p(o,[r]){var p;r&2&&s!==(s=o[1].status+"")&&I(t,s),r&2&&h!==(h=((p=o[1].error)==null?void 0:p.message)+"")&&I(w,h),r&1&&I(_,o[0])},i:S,o:S,d(o){o&&u(e)}}}function O(i,e,n){var c;let s;L(i,M,a=>n(1,s=a));let t=(c=s.error)==null?void 0:c.description;if(!t)switch(s.status){case 404:t="This link either stopped existing, no longer exists, or never existed in the first place, you may want to check if the link is correct!";break;case 401:t="Please log in! This page contains data which needs you to be logged in!";break;case 403:t="You don't have permission to visit this page! If you think this is an error, contact an admin!";break;case 500:t="Our servers are currently blowing up, look what you did!";break;default:t="We haven't coded a message for this error yet! If you think we should, reach out to us, or, if you're a dev, make a pull request."}return[t,s]}class Y extends T{constructor(e){super(),A(this,e,O,N,D,{})}}export{Y as default};

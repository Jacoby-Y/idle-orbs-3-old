const nt=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}};nt();function W(){}function Ye(e){return e()}function We(){return Object.create(null)}function ee(e){e.forEach(Ye)}function rt(e){return typeof e=="function"}function te(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let ve;function F(e,t){return ve||(ve=document.createElement("a")),ve.href=t,e===ve.href}function ot(e){return Object.keys(e).length===0}function Ze(e,...t){if(e==null)return W;const s=e.subscribe(...t);return s.unsubscribe?()=>s.unsubscribe():s}function xe(e){let t;return Ze(e,s=>t=s)(),t}function C(e,t,s){e.$$.on_destroy.push(Ze(t,s))}function N(e,t,s){return e.set(s),t}function g(e,t){e.appendChild(t)}function x(e,t,s){e.insertBefore(t,s||null)}function E(e){e.parentNode.removeChild(e)}function _e(e,t){for(let s=0;s<e.length;s+=1)e[s]&&e[s].d(t)}function y(e){return document.createElement(e)}function T(e){return document.createTextNode(e)}function $(){return T(" ")}function V(e,t,s,l){return e.addEventListener(t,s,l),()=>e.removeEventListener(t,s,l)}function p(e,t,s){s==null?e.removeAttribute(t):e.getAttribute(t)!==s&&e.setAttribute(t,s)}function it(e){return Array.from(e.childNodes)}function B(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function re(e,t,s,l){s===null?e.style.removeProperty(t):e.style.setProperty(t,s,l?"important":"")}let be;function ct(){if(be===void 0){be=!1;try{typeof window!="undefined"&&window.parent&&window.parent.document}catch{be=!0}}return be}function at(e,t){getComputedStyle(e).position==="static"&&(e.style.position="relative");const l=y("iframe");l.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),l.setAttribute("aria-hidden","true"),l.tabIndex=-1;const n=ct();let r;return n?(l.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=V(window,"message",i=>{i.source===l.contentWindow&&t()})):(l.src="about:blank",l.onload=()=>{r=V(l.contentWindow,"resize",t)}),g(e,l),()=>{(n||r&&l.contentWindow)&&r(),E(l)}}function R(e,t,s){e.classList[s?"add":"remove"](t)}let de;function ge(e){de=e}function ut(){if(!de)throw new Error("Function called outside component initialization");return de}function et(e){ut().$$.on_mount.push(e)}const ue=[],Te=[],Me=[],Le=[],ft=Promise.resolve();let Ce=!1;function gt(){Ce||(Ce=!0,ft.then(tt))}function Se(e){Me.push(e)}const Ee=new Set;let ke=0;function tt(){const e=de;do{for(;ke<ue.length;){const t=ue[ke];ke++,ge(t),dt(t.$$)}for(ge(null),ue.length=0,ke=0;Te.length;)Te.pop()();for(let t=0;t<Me.length;t+=1){const s=Me[t];Ee.has(s)||(Ee.add(s),s())}Me.length=0}while(ue.length);for(;Le.length;)Le.pop()();Ce=!1,Ee.clear(),ge(e)}function dt(e){if(e.fragment!==null){e.update(),ee(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Se)}}const Oe=new Set;let J;function ht(){J={r:0,c:[],p:J}}function pt(){J.r||ee(J.c),J=J.p}function he(e,t){e&&e.i&&(Oe.delete(e),e.i(t))}function Ae(e,t,s,l){if(e&&e.o){if(Oe.has(e))return;Oe.add(e),J.c.push(()=>{Oe.delete(e),l&&(s&&e.d(1),l())}),e.o(t)}}function je(e){e&&e.c()}function pe(e,t,s,l){const{fragment:n,on_mount:r,on_destroy:i,after_update:o}=e.$$;n&&n.m(t,s),l||Se(()=>{const a=r.map(Ye).filter(rt);i?i.push(...a):ee(a),e.$$.on_mount=[]}),o.forEach(Se)}function me(e,t){const s=e.$$;s.fragment!==null&&(ee(s.on_destroy),s.fragment&&s.fragment.d(t),s.on_destroy=s.fragment=null,s.ctx=[])}function mt(e,t){e.$$.dirty[0]===-1&&(ue.push(e),gt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ie(e,t,s,l,n,r,i,o=[-1]){const a=de;ge(e);const c=e.$$={fragment:null,ctx:null,props:r,update:W,not_equal:n,bound:We(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:We(),dirty:o,skip_bound:!1,root:t.target||a.$$.root};i&&i(c.root);let v=!1;if(c.ctx=s?s(e,t.props||{},(f,m,...u)=>{const d=u.length?u[0]:m;return c.ctx&&n(c.ctx[f],c.ctx[f]=d)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](d),v&&mt(e,f)),m}):[],c.update(),v=!0,ee(c.before_update),c.fragment=l?l(c.ctx):!1,t.target){if(t.hydrate){const f=it(t.target);c.fragment&&c.fragment.l(f),f.forEach(E)}else c.fragment&&c.fragment.c();t.intro&&he(e.$$.fragment),pe(e,t.target,t.anchor,t.customElement),tt()}ge(a)}class ce{$destroy(){me(this,1),this.$destroy=W}$on(t,s){const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(s),()=>{const n=l.indexOf(s);n!==-1&&l.splice(n,1)}}$set(t){this.$$set&&!ot(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const se=[];function K(e,t=W){let s;const l=new Set;function n(o){if(te(e,o)&&(e=o,s)){const a=!se.length;for(const c of l)c[1](),se.push(c,e);if(a){for(let c=0;c<se.length;c+=2)se[c][0](se[c+1]);se.length=0}}}function r(o){n(o(e))}function i(o,a=W){const c=[o,a];return l.add(c),l.size===1&&(s=t(n)||W),o(e),()=>{l.delete(c),l.size===0&&(s(),s=null)}}return{set:n,update:r,subscribe:i}}const Ne=(e,t)=>{const s=Math.pow(10,t);return Math.floor(e*s)/s},ye=["","K","M","B","T","Qa","Qi","Sx","Sp","O","N","D","UD","DD","TD","QuD","QiD","SxD","SpD","OD","ND","V","UV","DV","TV","QaV","QiV","SxV","SpV","OV","NV","T","UT","DT","TT","QaT","QiT","SxT","SpT","OT","NT"],fe=(e,t=1,s=0,l=!1)=>{const n=e/1e3,r=s>=ye.length;return n<1||r?r?Ne(e,t)+ye[ye.length-1]:s==0?Ne(e,t):Ne(e,t)+ye[s]:fe(n,t,s+1,r)},Qe=(e,t,s)=>{const l=(t-1)/2*t;return e*t+s*l},_t=(e,t,s,l)=>Math.sqrt((s-e)*(s-e)+(l-t)*(l-t)),we=Math.abs,Q=(e,t)=>Math.floor(Math.random()*(t+1-e)+e),Be=e=>{if(!e)return;const t=e.split(" ");for(let s=0;s<t.length;s++)t[s]=t[s][0].toUpperCase()+t[s].slice(1);return t.join(" ")};let ae=0;const I=K(0),L=K(0);L.subscribe(e=>{if(e<0){L.set(0);return}Math.floor(e)!=e&&(ae+=e-Math.floor(e),ae>=1&&(e+=Math.floor(ae),ae-=Math.floor(ae)),L.set(Math.floor(e)))});const st=K(0),De=45,vt=()=>st.update(e=>(e+1)%De);let bt=setInterval(vt,1e3/De),kt;const $e=K(kt),P={w:1600,h:900},q=K({prog:0,max:De*3,unlocked:!1,unlock_cost:100,size:100,speed_cost:100,size_cost:100}),Y=K([{rarity:"common",value:1,sockets:[]}]),Z=K([]),G={common:{scrap_value:5,chance:40,color:"white",get_value:()=>Q(1,1),get_sockets:()=>Q(0,1)},uncommon:{scrap_value:10,chance:20,color:"lime",get_value:()=>Q(2,5),get_sockets:()=>Q(1,2)},rare:{scrap_value:20,chance:15,color:"aqua",get_value:()=>Q(5,10),get_sockets:()=>Q(2,3)},epic:{scrap_value:40,chance:10,color:"violet",get_value:()=>Q(10,15),get_sockets:()=>Q(3,4)},legendary:{scrap_value:70,chance:5,color:"gold",get_value:()=>Q(15,20),get_sockets:()=>Q(4,5)},magic:{scrap_value:50,chance:10,color:"pink",get_value:()=>Q(5,30),get_sockets:()=>Q(1,6)}},ze=(e,t)=>({desc:e,weight:t}),oe={helium:ze("Orb is lighter.",15),ice:ze("Orb takes less drag",15),midas:ze("Orb value increases by $3.",5),magnetic:ze("Orb is attracted to the collector.",1)},yt=Object.keys(oe).reduce((e,t)=>e+oe[t].weight,0),ne={cash:50,dust:10},Pe=()=>{const e=Q(0,yt);let t="midas";Object.keys(oe).reduce((s,l)=>{const n=s+oe[l].weight;return e>=s&&e<n&&(t=l),n},0),Z.update(s=>[...s,t])},Ve=()=>{let e=Math.round(Math.random()*100);const[t,s]=(()=>{for(const n in G){if(!Object.hasOwnProperty.call(G,n))continue;const r=G[n];if(e-=r.chance,e<=0)return[n,r]}})(),l={rarity:"common",value:1,sockets:[]};l.rarity=t,l.value=s.get_value(),l.sockets=Array.from(Array(s.get_sockets())).map(()=>""),Y.update(n=>[...n,l])},lt=K(200);window.onbeforeunload=()=>{clearInterval(bt)};const X={value(e){if(!!e)return e.value+e.sockets.reduce((t,s)=>s=="midas"?t+1:t,0)*3},lessDrag(e){if(!!e)return e.sockets.reduce((t,s)=>s=="ice"?t+1:t,0)},lessGravity(e){if(!!e)return e.sockets.reduce((t,s)=>s=="helium"?t+1:t,0)},magnetic(e){if(!!e)return e.sockets.reduce((t,s)=>s=="magnetic"?t+1:t,0)}};let S;$e.subscribe(e=>S=e);var H={circle(e,t,s,l,n=!0,r=1){S.beginPath(),S.arc(e,t,s,0,2*Math.PI),n?(S.fillStyle=l,S.fill()):(S.lineWidth=r,S.strokeStyle=l,S.stroke())},rect(e,t,s,l,n,r=!0,i=1){r?(S.fillStyle=n,S.fillRect(e,t,s,l)):(S.strokeStyle=n,S.lineWidth=i,S.strokeRect(e,t,s,l))},line1(e,t,s,l,n,r){S.strokeStyle=n,S.lineWidth=r,S.beginPath(),S.moveTo(e,t),S.lineTo(s,l),S.stroke()},lineAtAngle(e,t,s,l,n,r=1){S.strokeStyle=n,S.lineWidth=r,S.beginPath(),S.moveTo(e,t),S.lineTo(e+Math.cos(s)*l,t+Math.sin(s)*l),S.stroke()},clear(e,t,s,l){S.clearRect(e,t,s,l)},transform(e=0,t=0,s=0){S.translate(e,t),S.rotate(s)},resetTransform(){S.setTransform(1,0,0,1,0,0)}};const le=(()=>{const e=l=>{L.update(n=>n+X.value(l)/(De/2))},t={l:[],new(l){this.l.push(l)},step(l){const n=this.l[l];n.x+=n.vx,n.y+=n.vy,n.x-10<0?(n.x=10,n.vx=we(n.vx)):n.y-10<0&&(n.y=10,n.vy=we(n.vy)),n.x+10>P.w?(n.x=P.w-10,n.vx=we(n.vx)*-1):n.y>P.h-10&&(n.y=P.h-10,n.vy=we(n.vy)*-1)}};let s=[];return Y.subscribe(l=>s=l),{update(){for(let l=0;l<s.length;l++){const n=s[l];t.l[l]==null&&t.new({x:P.w*Math.random(),y:P.h*Math.random(),vx:10,vy:10});const{x:r,y:i}=t.l[l],o=t.l[l];o.vy+=.8-X.lessGravity(n)*.1,o.vx*=Math.min(1,.99+.3*X.lessDrag(n)),o.vy*=Math.min(1,.99+.3*X.lessDrag(n));const a=_t(o.x,o.y,P.w/2,P.h/3);a<xe(lt)&&(e(n),H.line1(P.w/2,P.h/3,r,i,"#99990066",4));const c=X.magnetic(n);if(c>0&&a>50){const v=Math.atan2(P.h/3-o.y,P.w/2-o.x);o.vx+=Math.cos(v)/3*c,o.vy+=Math.sin(v)/3*c}H.circle(r,i,10,G[n.rarity].color),t.step(l)}},bounce(l=!1){for(let n=0;n<t.l.length;n++){const r=t.l[n];r.y<P.h-xe(q).size-20||(r.vy-=25+10*Math.random(),l?r.vx+=(P.w/2-r.x)/70:this.mouse_x>=0&&(r.vx+=(this.mouse_x-r.x)/70),r.vx+=-.5+Math.random())}},mouse_x:-1,info:s,get phys(){return t}}})();function wt(e){let t,s;return{c(){t=y("canvas"),p(t,"class","svelte-zypm5v"),Se(()=>e[4].call(t))},m(l,n){x(l,t,n),e[3](t),s=at(t,e[4].bind(t))},p:W,i:W,o:W,d(l){l&&E(t),e[3](null),s()}}}const zt="#3c5b5f";function Mt(e,t,s){let l,n,r,i,o,a;C(e,Z,h=>s(9,l=h)),C(e,I,h=>s(10,n=h)),C(e,L,h=>s(11,r=h)),C(e,$e,h=>s(12,i=h)),C(e,lt,h=>s(13,o=h)),C(e,q,h=>s(14,a=h));let c,v=!1,f=!1,m,u;const d=h=>{v&&f==!1||(f==!0&&(f=!1),H.rect(0,0,m,u,zt),H.rect(0,u-a.size,m,a.size,"#005555"),H.rect(0,u-a.size*(a.prog/a.max),m,a.size,"#005c5c"),a.unlocked&&(N(q,a.prog++,a),a.prog>=a.max&&(le.bounce(!0),N(q,a.prog=0,a)),q.set(a)),le.update(),H.circle(m/2,u/3,10,"#aa9900"),H.circle(m/2,u/3,o,"#aa9900",!1,3),H.circle(m/2,u/3,o,"#aaaa0022"))};et(()=>{N($e,i=c.getContext("2d",{alpha:!1,desynchronized:!0}),i),i.scale(1,2),s(1,m=P.w=s(0,c.width=1600/2,c)),s(2,u=P.h=s(0,c.height=900,c)),st.subscribe(d),document.body.onkeydown=({key:h})=>{h==" "?v=!v:h=="s"?f=!0:h=="i"?console.log(le.info):h=="0"?N(L,r=0,r):h=="m"?N(L,r+=50,r):h=="d"?N(I,n+=50,n):h=="p"?console.log(le.phys):h=="t"?console.log(l):h=="1"?Array.from(Array(10)).forEach(()=>Ve()):h=="2"&&Array.from(Array(10)).forEach(()=>Pe())},s(0,c.onmousedown=h=>{le.mouse_x=h.offsetX,le.bounce()},c)});function O(h){Te[h?"unshift":"push"](()=>{c=h,s(0,c)})}function _(){m=this.clientWidth,u=this.clientHeight,s(1,m),s(2,u)}return[c,m,u,O,_]}class Ot extends ce{constructor(t){super(),ie(this,t,Mt,wt,te,{})}}function qe(e,t,s){const l=e.slice();return l[14]=t[s],l[16]=s,l}function Re(e,t,s){const l=e.slice();return l[17]=t[s],l[16]=s,l}function Ie(e,t,s){const l=e.slice();return l[19]=t[s],l[21]=s,l}function Ue(e){let t,s;return{c(){t=y("img"),p(t,"class","socket svelte-g92ugn"),F(t.src,s="/src/assets/"+(e[19]==""?"default":e[19])+".svg")||p(t,"src",s),p(t,"alt",e[2]),R(t,"transp",e[19]==""),R(t,"sel",e[0]==e[17]&&e[1]==e[21])},m(l,n){x(l,t,n)},p(l,n){n&8&&!F(t.src,s="/src/assets/"+(l[19]==""?"default":l[19])+".svg")&&p(t,"src",s),n&4&&p(t,"alt",l[2]),n&8&&R(t,"transp",l[19]==""),n&11&&R(t,"sel",l[0]==l[17]&&l[1]==l[21])},d(l){l&&E(t)}}}function Tt(e){let t;return{c(){t=y("p"),t.textContent="Double Click to Quickly Scrap",p(t,"id","scrap-hint"),p(t,"class","svelte-g92ugn")},m(s,l){x(s,t,l)},d(s){s&&E(t)}}}function Ge(e){let t,s,l=e[16]+1+"",n,r,i,o,a,c,v,f,m,u=e[17].sockets,d=[];for(let w=0;w<u.length;w+=1)d[w]=Ue(Ie(e,u,w));let O=e[16]==0&&Tt();function _(...w){return e[9](e[17],...w)}function h(){return e[10](e[17])}return{c(){t=y("div"),s=y("h3"),n=T(l),r=$(),i=y("div"),o=$(),a=y("div");for(let w=0;w<d.length;w+=1)d[w].c();c=$(),O&&O.c(),v=$(),p(s,"class","count svelte-g92ugn"),p(i,"class","img svelte-g92ugn"),re(i,"background-color",G[e[17].rarity].color),p(a,"class","sockets svelte-g92ugn"),p(t,"class","orb-card svelte-g92ugn"),R(t,"sel",e[0]==e[17])},m(w,b){x(w,t,b),g(t,s),g(s,n),g(t,r),g(t,i),g(t,o),g(t,a);for(let k=0;k<d.length;k+=1)d[k].m(a,null);g(t,c),O&&O.m(t,null),g(t,v),f||(m=[V(t,"click",_),V(t,"dblclick",h)],f=!0)},p(w,b){if(e=w,b&8&&re(i,"background-color",G[e[17].rarity].color),b&15){u=e[17].sockets;let k;for(k=0;k<u.length;k+=1){const M=Ie(e,u,k);d[k]?d[k].p(M,b):(d[k]=Ue(M),d[k].c(),d[k].m(a,null))}for(;k<d.length;k+=1)d[k].d(1);d.length=u.length}b&9&&R(t,"sel",e[0]==e[17])},d(w){w&&E(t),_e(d,w),O&&O.d(),f=!1,ee(m)}}}function St(e){var M;let t,s,l,n,r,i,o=(e[2]?Be(e[2]):"None")+"",a,c,v,f,m,u=(e[2]?(M=oe[e[2]])==null?void 0:M.desc:"...")+"",d,O,_,h,w,b=e[4],k=[];for(let z=0;z<b.length;z+=1)k[z]=He(qe(e,b,z));return{c(){t=y("div"),s=y("div"),l=y("img"),r=$(),i=y("h2"),a=T(o),c=$(),v=y("br"),f=$(),m=y("span"),d=T(u),O=$(),_=y("div");for(let z=0;z<k.length;z+=1)k[z].c();F(l.src,n="/src/assets/"+(e[2]==""?"default":e[2])+".svg")||p(l,"src",n),p(l,"alt",e[2]),p(l,"class","svelte-g92ugn"),R(l,"transp",e[2]==""),p(m,"class","svelte-g92ugn"),p(i,"id","current-info"),p(i,"class","svelte-g92ugn"),p(s,"id","current"),p(s,"class","svelte-g92ugn"),p(_,"id","socket-list"),re(_,"grid-template-columns","repeat("+e[4].length+", max-content)"),p(_,"class","svelte-g92ugn"),p(t,"id","socket-info"),p(t,"class","svelte-g92ugn")},m(z,D){x(z,t,D),g(t,s),g(s,l),g(s,r),g(s,i),g(i,a),g(i,c),g(i,v),g(i,f),g(i,m),g(m,d),g(t,O),g(t,_);for(let j=0;j<k.length;j+=1)k[j].m(_,null);h||(w=V(l,"click",e[11]),h=!0)},p(z,D){var j;if(D&4&&!F(l.src,n="/src/assets/"+(z[2]==""?"default":z[2])+".svg")&&p(l,"src",n),D&4&&p(l,"alt",z[2]),D&4&&R(l,"transp",z[2]==""),D&4&&o!==(o=(z[2]?Be(z[2]):"None")+"")&&B(a,o),D&4&&u!==(u=(z[2]?(j=oe[z[2]])==null?void 0:j.desc:"...")+"")&&B(d,u),D&80){b=z[4];let A;for(A=0;A<b.length;A+=1){const U=qe(z,b,A);k[A]?k[A].p(U,D):(k[A]=He(U),k[A].c(),k[A].m(_,null))}for(;A<k.length;A+=1)k[A].d(1);k.length=b.length}D&16&&re(_,"grid-template-columns","repeat("+z[4].length+", max-content)")},d(z){z&&E(t),_e(k,z),h=!1,w()}}}function At(e){var b,k;let t,s,l,n=((b=e[0])==null?void 0:b.rarity)+"",r,i,o,a,c=X.value(e[0])+"",v,f,m,u,d=G[(k=e[0])==null?void 0:k.rarity].scrap_value+"",O,_,h,w;return{c(){t=y("div"),s=y("h2"),l=T("Rarity: "),r=T(n),i=$(),o=y("h2"),a=T("Value: "),v=T(c),f=$(),m=y("button"),u=T("Scrap for "),O=T(d),_=T("\u0110 (Dust)"),p(m,"id","scrap-btn"),p(m,"class","svelte-g92ugn"),p(t,"id","orb-info"),p(t,"class","svelte-g92ugn")},m(M,z){x(M,t,z),g(t,s),g(s,l),g(s,r),g(t,i),g(t,o),g(o,a),g(o,v),g(t,f),g(t,m),g(m,u),g(m,O),g(m,_),h||(w=V(m,"click",e[8]),h=!0)},p(M,z){var D,j;z&1&&n!==(n=((D=M[0])==null?void 0:D.rarity)+"")&&B(r,n),z&1&&c!==(c=X.value(M[0])+"")&&B(v,c),z&1&&d!==(d=G[(j=M[0])==null?void 0:j.rarity].scrap_value+"")&&B(O,d)},d(M){M&&E(t),h=!1,w()}}}function He(e){let t,s,l,n,r;function i(){return e[12](e[16])}return{c(){t=y("img"),p(t,"class","socket svelte-g92ugn"),F(t.src,s="/src/assets/"+e[14]+".svg")||p(t,"src",s),p(t,"alt",l=e[14])},m(o,a){x(o,t,a),n||(r=V(t,"click",i),n=!0)},p(o,a){e=o,a&16&&!F(t.src,s="/src/assets/"+e[14]+".svg")&&p(t,"src",s),a&16&&l!==(l=e[14])&&p(t,"alt",l)},d(o){o&&E(t),n=!1,r()}}}function jt(e){let t,s,l,n,r,i=e[3],o=[];for(let f=0;f<i.length;f+=1)o[f]=Ge(Re(e,i,f));function a(f,m){if(f[0]!=null&&f[1]<0)return At;if(f[0]!=null&&f[1]>=0)return St}let c=a(e),v=c&&c(e);return{c(){t=y("main"),s=y("div"),l=y("div");for(let f=0;f<o.length;f+=1)o[f].c();r=$(),v&&v.c(),p(l,"id","orbs"),p(l,"class","svelte-g92ugn"),p(s,"id","orbs-wrapper"),p(s,"style",n=e[0]==null?"":"height: calc(65%);"),p(s,"class","svelte-g92ugn"),p(t,"class","svelte-g92ugn")},m(f,m){x(f,t,m),g(t,s),g(s,l);for(let u=0;u<o.length;u+=1)o[u].m(l,null);g(t,r),v&&v.m(t,null)},p(f,[m]){if(m&303){i=f[3];let u;for(u=0;u<i.length;u+=1){const d=Re(f,i,u);o[u]?o[u].p(d,m):(o[u]=Ge(d),o[u].c(),o[u].m(l,null))}for(;u<o.length;u+=1)o[u].d(1);o.length=i.length}m&1&&n!==(n=f[0]==null?"":"height: calc(65%);")&&p(s,"style",n),c===(c=a(f))&&v?v.p(f,m):(v&&v.d(1),v=c&&c(f),v&&(v.c(),v.m(t,null)))},i:W,o:W,d(f){f&&E(t),_e(o,f),v&&v.d()}}}function Dt(e,t,s){let l,n,r,i;C(e,Y,h=>s(3,n=h)),C(e,Z,h=>s(4,r=h)),C(e,I,h=>s(13,i=h));const o=({target:h},w)=>{const b=h.classList.contains("socket");if(w==f&&!b&&m<0){s(0,f=null),s(1,m=-1);return}if(s(0,f=w),b){const k=[].slice.call(h.parentElement.children).indexOf(h);s(1,m=k)}else s(1,m=-1)},a=h=>{const w=r[h];r.splice(h,1),l!=""&&r.push(l),Z.set(r),s(0,f.sockets[m]=w,f),Y.set(n)},c=()=>{l!=""&&(N(Z,r=[...r,l],r),s(0,f.sockets[m]="",f),Y.set(n))},v=(h=null)=>{h!=null&&s(0,f=h),!(n.length<=1)&&(N(I,i+=G[f==null?void 0:f.rarity].scrap_value,i),f.sockets.forEach(w=>w!=""&&r.push(w)),n.splice(n.indexOf(f),1),Y.set(n),s(0,f=null),s(1,m=-1))};let f=null,m=-1;const u=(h,w)=>o(w,h),d=h=>v(h),O=()=>c(),_=h=>a(h);return e.$$.update=()=>{e.$$.dirty&3&&s(2,l=f==null?void 0:f.sockets[m])},[f,m,l,n,r,o,a,c,v,u,d,O,_]}class Et extends ce{constructor(t){super(),ie(this,t,Dt,jt,te,{})}}function Nt(e){let t,s,l=e[1].unlock_cost+"",n,r,i;return{c(){t=y("h2"),s=T("Unlock Auto Bounce: $"),n=T(l),p(t,"class","buy-btn svelte-1s00o3")},m(o,a){x(o,t,a),g(t,s),g(t,n),r||(i=V(t,"click",e[6]),r=!0)},p(o,a){a&2&&l!==(l=o[1].unlock_cost+"")&&B(n,l)},d(o){o&&E(t),r=!1,i()}}}function Ct(e){let t,s,l=e[1].speed_cost+"",n,r,i;return{c(){t=y("h2"),s=T("Auto Bounce Speed: $"),n=T(l),p(t,"class","buy-btn svelte-1s00o3")},m(o,a){x(o,t,a),g(t,s),g(t,n),r||(i=V(t,"click",e[7]),r=!0)},p(o,a){a&2&&l!==(l=o[1].speed_cost+"")&&B(n,l)},d(o){o&&E(t),r=!1,i()}}}function $t(e){let t,s,l,n,r,i=e[0].cash+"",o,a,c,v=e[0].dust+"",f,m,u,d,O,_,h,w,b,k,M;function z(A,U){return A[1].unlocked?Ct:Nt}let D=z(e),j=D(e);return{c(){t=y("main"),s=y("h2"),l=T("Buy Orb: "),n=y("span"),r=T("$"),o=T(i),a=T(" or "),c=y("span"),f=T(v),m=T("\u0110"),u=$(),d=y("h2"),O=T("Buy Orb Trait: "),_=y("span"),_.textContent=`$${ne.cash}`,h=T(" or "),w=y("span"),w.textContent=`${ne.dust}\u0110`,b=$(),j.c(),p(n,"class","svelte-1s00o3"),p(c,"class","svelte-1s00o3"),p(s,"class","buy-wrapper-btn svelte-1s00o3"),p(_,"class","svelte-1s00o3"),p(w,"class","svelte-1s00o3"),p(d,"class","buy-wrapper-btn svelte-1s00o3"),p(t,"class","svelte-1s00o3")},m(A,U){x(A,t,U),g(t,s),g(s,l),g(s,n),g(n,r),g(n,o),g(s,a),g(s,c),g(c,f),g(c,m),g(t,u),g(t,d),g(d,O),g(d,_),g(d,h),g(d,w),g(t,b),j.m(t,null),k||(M=[V(n,"click",e[2]),V(c,"click",e[3]),V(_,"click",e[4]),V(w,"click",e[5])],k=!0)},p(A,[U]){U&1&&i!==(i=A[0].cash+"")&&B(o,i),U&1&&v!==(v=A[0].dust+"")&&B(f,v),D===(D=z(A))&&j?j.p(A,U):(j.d(1),j=D(A),j&&(j.c(),j.m(t,null)))},i:W,o:W,d(A){A&&E(t),j.d(),k=!1,ee(M)}}}function Pt(e,t,s){let l,n,r,i,o;C(e,q,d=>s(1,n=d)),C(e,L,d=>s(9,r=d)),C(e,I,d=>s(10,i=d)),C(e,Y,d=>s(8,o=d));const a=()=>{r<l.cash||(N(L,r-=l.cash,r),Ve())},c=()=>{i<l.dust||(N(I,i-=l.dust,i),Ve())},v=()=>{r<ne.cash||(N(L,r-=ne.cash,r),Pe())},f=()=>{i<ne.dust||(N(I,i-=ne.dust,i),Pe())},m=()=>{r<n.unlock_cost||(N(L,r-=n.unlock_cost,r),N(q,n.unlocked=!0,n),q.set(n))},u=()=>{r<n.speed_cost||(N(L,r-=n.speed_cost,r),N(q,n.max=Math.round(n.max*.95),n),q.set(n))};return e.$$.update=()=>{e.$$.dirty&256&&s(0,l={cash:Qe(20,o.length,20),dust:Qe(5,o.length,5)})},[l,n,a,c,v,f,m,u,o]}class Vt extends ce{constructor(t){super(),ie(this,t,Pt,$t,te,{})}}function Fe(e,t,s){const l=e.slice();return l[6]=t[s],l[8]=s,l}function Ke(e){let t,s,l,n,r;function i(){return e[4](e[8])}return{c(){t=y("img"),p(t,"class","socket svelte-1xfl1lf"),F(t.src,s="/src/assets/"+e[6]+".svg")||p(t,"src",s),p(t,"alt",l=e[6])},m(o,a){x(o,t,a),n||(r=V(t,"click",i),n=!0)},p(o,a){e=o,a&2&&!F(t.src,s="/src/assets/"+e[6]+".svg")&&p(t,"src",s),a&2&&l!==(l=e[6])&&p(t,"alt",l)},d(o){o&&E(t),n=!1,r()}}}function Wt(e){let t,s,l,n,r,i,o,a,c,v,f,m=e[1].sort(),u=[];for(let d=0;d<m.length;d+=1)u[d]=Ke(Fe(e,m,d));return{c(){t=y("main"),s=y("div"),l=y("div"),n=T("Click"),r=y("br"),i=T("to"),o=y("br"),a=T("Scrap"),c=$();for(let d=0;d<u.length;d+=1)u[d].c();p(l,"id","scrap-toggle"),re(l,"background-color",e[0]?"#00b100":"#b10000"),p(l,"class","svelte-1xfl1lf"),p(s,"id","trait-grid"),p(s,"class","svelte-1xfl1lf"),p(t,"class","svelte-1xfl1lf")},m(d,O){x(d,t,O),g(t,s),g(s,l),g(l,n),g(l,r),g(l,i),g(l,o),g(l,a),g(s,c);for(let _=0;_<u.length;_+=1)u[_].m(s,null);v||(f=V(l,"click",e[3]),v=!0)},p(d,[O]){if(O&1&&re(l,"background-color",d[0]?"#00b100":"#b10000"),O&6){m=d[1].sort();let _;for(_=0;_<m.length;_+=1){const h=Fe(d,m,_);u[_]?u[_].p(h,O):(u[_]=Ke(h),u[_].c(),u[_].m(s,null))}for(;_<u.length;_+=1)u[_].d(1);u.length=m.length}},i:W,o:W,d(d){d&&E(t),_e(u,d),v=!1,f()}}}function xt(e,t,s){let l,n;C(e,I,c=>s(5,l=c)),C(e,Z,c=>s(1,n=c));let r=!1;const i=c=>{!r||(Z.update(v=>(v.splice(c,1),v)),N(I,l+=2,l))};return[r,n,i,()=>s(0,r=!r),c=>i(c)]}class Lt extends ce{constructor(t){super(),ie(this,t,xt,Wt,te,{})}}function Xe(e,t,s){const l=e.slice();return l[6]=t[s],l[8]=s,l}function Je(e){let t,s=e[6]+"",l,n,r;function i(){return e[5](e[8])}return{c(){t=y("h2"),l=T(s),p(t,"class","svelte-16rl2zl"),R(t,"selected",e[0]==e[8])},m(o,a){x(o,t,a),g(t,l),n||(r=V(t,"click",i),n=!0)},p(o,a){e=o,a&1&&R(t,"selected",e[0]==e[8])},d(o){o&&E(t),n=!1,r()}}}function Qt(e){let t,s,l,n=fe(e[1])+"",r,i,o=fe(e[2])+"",a,c,v,f,m,u,d,O=e[3],_=[];for(let b=0;b<O.length;b+=1)_[b]=Je(Xe(e,O,b));var h=e[4][e[0]];function w(b){return{}}return h&&(u=new h(w())),{c(){t=y("main"),s=y("h3"),l=T("$"),r=T(n),i=y("br"),a=T(o),c=T("\u0110"),v=$(),f=y("nav");for(let b=0;b<_.length;b+=1)_[b].c();m=$(),u&&je(u.$$.fragment),p(s,"id","cash-txt"),p(s,"class","svelte-16rl2zl"),p(f,"class","svelte-16rl2zl"),p(t,"class","svelte-16rl2zl")},m(b,k){x(b,t,k),g(t,s),g(s,l),g(s,r),g(s,i),g(s,a),g(s,c),g(t,v),g(t,f);for(let M=0;M<_.length;M+=1)_[M].m(f,null);g(t,m),u&&pe(u,t,null),d=!0},p(b,[k]){if((!d||k&2)&&n!==(n=fe(b[1])+"")&&B(r,n),(!d||k&4)&&o!==(o=fe(b[2])+"")&&B(a,o),k&9){O=b[3];let M;for(M=0;M<O.length;M+=1){const z=Xe(b,O,M);_[M]?_[M].p(z,k):(_[M]=Je(z),_[M].c(),_[M].m(f,null))}for(;M<_.length;M+=1)_[M].d(1);_.length=O.length}if(h!==(h=b[4][b[0]])){if(u){ht();const M=u;Ae(M.$$.fragment,1,0,()=>{me(M,1)}),pt()}h?(u=new h(w()),je(u.$$.fragment),he(u.$$.fragment,1),pe(u,t,null)):u=null}},i(b){d||(u&&he(u.$$.fragment,b),d=!0)},o(b){u&&Ae(u.$$.fragment,b),d=!1},d(b){b&&E(t),_e(_,b),u&&me(u)}}}function Bt(e,t,s){let l,n;C(e,L,c=>s(1,l=c)),C(e,I,c=>s(2,n=c));let r=1;return[r,l,n,["Orbs","Shop","Traits","Prestige","Settings"],[Et,Vt,Lt],c=>s(0,r=c)]}class qt extends ce{constructor(t){super(),ie(this,t,Bt,Qt,te,{})}}function Rt(e){let t,s,l,n,r;return s=new Ot({}),n=new qt({}),{c(){t=y("main"),je(s.$$.fragment),l=$(),je(n.$$.fragment),p(t,"class","svelte-1j2xve")},m(i,o){x(i,t,o),pe(s,t,null),g(t,l),pe(n,t,null),e[1](t),r=!0},p:W,i(i){r||(he(s.$$.fragment,i),he(n.$$.fragment,i),r=!0)},o(i){Ae(s.$$.fragment,i),Ae(n.$$.fragment,i),r=!1},d(i){i&&E(t),me(s),me(n),e[1](null)}}}function It(e,t,s){let l;const n=()=>{let i=1;const o=document.body.clientWidth,a=document.body.clientHeight;o*.5625>=a?i=a/900:i=o/1600,s(0,l.style.transform=`translate(-50%, -50%) scale(${i}, ${i})`,l),console.log("scaling!")};et(()=>{n()}),window.onresize=n;function r(i){Te[i?"unshift":"push"](()=>{l=i,s(0,l)})}return[l,r]}class Ut extends ce{constructor(t){super(),ie(this,t,It,Rt,te,{})}}new Ut({target:document.body});
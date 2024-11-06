import{V,W as P,X as $,Y as E,Z as T,H as q,_ as H,D as m,$ as N,Q as C,a0 as j,a1 as Q,a2 as S,M as y,L as I,I as X,l as v,a3 as Z,a4 as z,a5 as F,a6 as G,a7 as J,a8 as K,P as U,i as x,p as rr,k as R,o as er,c as tr,n as D,b as ar,a9 as nr,g as sr,B as ir}from"./runtime.0_5emo0q.js";import{b as ur}from"./disclose-version.DUPKk8lL.js";const M=new Set,O=new Set;function or(r,e,n,a){function s(t){if(a.capture||g.call(e,t),!t.cancelBubble){var o=H,l=m;E(null),T(null);try{return n.call(this,t)}finally{E(o),T(l)}}}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?P(()=>{e.addEventListener(r,s,a)}):e.addEventListener(r,s,a),s}function hr(r,e,n,a,s){var t={capture:a,passive:s},o=or(r,e,n,t);(e===document.body||e===window||e===document)&&V(()=>{e.removeEventListener(r,o,t)})}function vr(r){for(var e=0;e<r.length;e++)M.add(r[e]);for(var n of O)n(r)}function g(r){var A;var e=this,n=e.ownerDocument,a=r.type,s=((A=r.composedPath)==null?void 0:A.call(r))||[],t=s[0]||r.target,o=0,l=r.__root;if(l){var d=s.indexOf(l);if(d!==-1&&(e===document||e===window)){r.__root=e;return}var _=s.indexOf(e);if(_===-1)return;d<=_&&(o=d)}if(t=s[o]||r.target,t!==e){$(r,"currentTarget",{configurable:!0,get(){return t||n}});var L=H,f=m;E(null),T(null);try{for(var i,u=[];t!==null;){var c=t.assignedSlot||t.parentNode||t.host||null;try{var b=t["__"+a];if(b!==void 0&&!t.disabled)if(q(b)){var[Y,...B]=b;Y.apply(t,[r,...B])}else b.call(t,r)}catch(p){i?u.push(p):i=p}if(r.cancelBubble||c===e||c===null)break;t=c}if(i){for(let p of u)queueMicrotask(()=>{throw p});throw i}}finally{r.__root=e,delete r.currentTarget,E(L),T(f)}}}const fr=["touchstart","touchmove"];function cr(r){return fr.includes(r)}function gr(r,e){var n=e==null?"":typeof e=="object"?e+"":e;n!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=n,r.nodeValue=n==null?"":n+"")}function lr(r,e){return W(r,e)}function pr(r,e){N(),e.intro=e.intro??!1;const n=e.target,a=R,s=v;try{for(var t=C(n);t&&(t.nodeType!==8||t.data!==j);)t=Q(t);if(!t)throw S;y(!0),I(t),X();const o=W(r,{...e,anchor:t});if(v===null||v.nodeType!==8||v.data!==Z)throw z(),S;return y(!1),o}catch(o){if(o===S)return e.recover===!1&&F(),N(),G(n),y(!1),lr(r,e);throw o}finally{y(a),I(s)}}const h=new Map;function W(r,{target:e,anchor:n,props:a={},events:s,context:t,intro:o=!0}){N();var l=new Set,d=f=>{for(var i=0;i<f.length;i++){var u=f[i];if(!l.has(u)){l.add(u);var c=cr(u);e.addEventListener(u,g,{passive:c});var b=h.get(u);b===void 0?(document.addEventListener(u,g,{passive:c}),h.set(u,1)):h.set(u,b+1)}}};d(J(M)),O.add(d);var _=void 0,L=K(()=>{var f=n??e.appendChild(U());return x(()=>{if(t){rr({});var i=tr;i.c=t}s&&(a.$$events=s),R&&ur(f,null),_=r(f,a)||{},R&&(m.nodes_end=v),t&&er()}),()=>{var c;for(var i of l){e.removeEventListener(i,g);var u=h.get(i);--u===0?(document.removeEventListener(i,g),h.delete(i)):h.set(i,u)}O.delete(d),k.delete(_),f!==n&&((c=f.parentNode)==null||c.removeChild(f))}});return k.set(_,L),_}let k=new WeakMap;function yr(r){const e=k.get(r);e&&e()}function dr(r,e,n){if(r==null)return e(void 0),D;const a=ar(()=>r.subscribe(e,n));return a.unsubscribe?()=>a.unsubscribe():a}let w=!1;function wr(r,e,n){const a=n[e]??(n[e]={store:null,source:nr(void 0),unsubscribe:D});if(a.store!==r)if(a.unsubscribe(),a.store=r??null,r==null)a.source.v=void 0,a.unsubscribe=D;else{var s=!0;a.unsubscribe=dr(r,t=>{s?a.source.v=t:ir(a.source,t)}),s=!1}return sr(a.source)}function Er(){const r={};return V(()=>{for(var e in r)r[e].unsubscribe()}),r}function Tr(r){var e=w;try{return w=!1,[r(),w]}finally{w=e}}export{gr as a,wr as b,Tr as c,vr as d,hr as e,pr as h,lr as m,Er as s,yr as u};
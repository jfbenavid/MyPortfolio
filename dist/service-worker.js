if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,i,n)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const t={uri:location.origin+r.slice(1)};return Promise.all(i.map((r=>{switch(r){case"exports":return s;case"module":return t;default:return e(r)}}))).then((e=>{const r=n(...e);return s.default||(s.default=r),s}))})))}}define("./service-worker.js",["./workbox-15dd0bab"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"337.bundle.4b08796774b59d221a7b.js",revision:null},{url:"CNAME",revision:"60dfb340b1de15a993f3a5ab37996749"},{url:"bundle.4b08796774b59d221a7b.js",revision:null},{url:"bundle.4b08796774b59d221a7b.js.LICENSE.txt",revision:"f7e623707d9b37a3821ec4c3548a4309"},{url:"index.html",revision:"17b2069301eb64d762d370779e5b43aa"}],{})}));
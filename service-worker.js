if(!self.define){let e,n={};const i=(i,r)=>(i=new URL(i+".js",r).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,t)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(n[c])return;let o={};const s=e=>i(e,c),l={module:{uri:c},exports:o,require:s};n[c]=Promise.all(r.map((e=>l[e]||s(e)))).then((e=>(t(...e),o)))}}define(["./workbox-6b1d7bba"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"337.bundle.b5fcbe85c575e823b58c.js",revision:null},{url:"CNAME",revision:"60dfb340b1de15a993f3a5ab37996749"},{url:"bundle.b5fcbe85c575e823b58c.js",revision:null},{url:"bundle.b5fcbe85c575e823b58c.js.LICENSE.txt",revision:"8f06b9e0c45e6669bf287c6947cdbc57"},{url:"index.html",revision:"037e392ead98ed99631393af0ceeb2e9"}],{})}));

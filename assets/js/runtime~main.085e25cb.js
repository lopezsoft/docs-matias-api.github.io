(()=>{"use strict";var e,a,c,t,f,r={},d={};function o(e){var a=d[e];if(void 0!==a)return a.exports;var c=d[e]={id:e,loaded:!1,exports:{}};return r[e].call(c.exports,c,c.exports,o),c.loaded=!0,c.exports}o.m=r,o.c=d,e=[],o.O=(a,c,t,f)=>{if(!c){var r=1/0;for(i=0;i<e.length;i++){c=e[i][0],t=e[i][1],f=e[i][2];for(var d=!0,b=0;b<c.length;b++)(!1&f||r>=f)&&Object.keys(o.O).every((e=>o.O[e](c[b])))?c.splice(b--,1):(d=!1,f<r&&(r=f));if(d){e.splice(i--,1);var n=t();void 0!==n&&(a=n)}}return a}f=f||0;for(var i=e.length;i>0&&e[i-1][2]>f;i--)e[i]=e[i-1];e[i]=[c,t,f]},o.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return o.d(a,{a:a}),a},c=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var f=Object.create(null);o.r(f);var r={};a=a||[null,c({}),c([]),c(c)];for(var d=2&t&&e;"object"==typeof d&&!~a.indexOf(d);d=c(d))Object.getOwnPropertyNames(d).forEach((a=>r[a]=()=>e[a]));return r.default=()=>e,o.d(f,r),f},o.d=(e,a)=>{for(var c in a)o.o(a,c)&&!o.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:a[c]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((a,c)=>(o.f[c](e,a),a)),[])),o.u=e=>"assets/js/"+({53:"935f2afb",948:"8717b14a",992:"2ea3453b",1136:"3d58418a",1871:"6e2eab70",1914:"d9f32620",1924:"62053ec8",2254:"5cc064b5",2267:"59362658",2362:"e273c56f",2373:"9c5ad383",2535:"814f3328",2724:"770ce1a3",3085:"1f391b9e",3089:"a6aa9e1f",3161:"698a6ddd",3237:"1df93b7f",3272:"129803e8",3411:"8eaa9412",3476:"b4698d68",3499:"0a636e63",3514:"73664a40",3608:"9e4087bc",3724:"a317a6d6",3746:"46290661",3833:"271797d6",3958:"6fc192d0",4013:"01a85c17",4368:"a94703ab",4595:"8414566c",4750:"c05410cd",5692:"73828f11",5755:"5de3710e",6103:"ccc49370",6110:"43afe84d",6225:"c36f6cc9",6274:"e3e906f0",6581:"8ad6a7e5",6927:"22fee5f4",7414:"393be207",7918:"17896441",8059:"96c6bab5",8073:"79f86d9b",8136:"6a106629",8364:"d95209f5",8382:"458eccfd",8518:"a7bd4aaa",8610:"6875c492",8636:"f4f34a3a",8841:"b9a388ea",8856:"c13c6515",8867:"c68d57de",9003:"925b3f96",9045:"85c0f87f",9095:"7022b031",9642:"7661071f",9661:"5e95c892",9671:"0e384e19",9817:"14eb3368",9860:"7515a57b"}[e]||e)+"."+{53:"09d33618",948:"7f1a132f",992:"784889cc",1136:"95fb29f7",1772:"cb561cbc",1871:"b18f0e37",1914:"c03deb65",1924:"79015043",2254:"893d1a7d",2267:"87b16d3f",2362:"fd10a4f6",2373:"9339c215",2535:"056e7f9d",2724:"15e662b8",3085:"d6ba38de",3089:"9b8c3eb1",3161:"804ebffd",3237:"e51da541",3272:"7e314455",3411:"aa91bed0",3476:"d44393f7",3499:"6cbcdb91",3514:"0f137073",3608:"0a4363ae",3724:"c8019617",3746:"e6524ce3",3833:"fa24a20f",3958:"425c35ba",4013:"262502c1",4368:"ae9190d2",4595:"48e50a0f",4750:"a7492abb",4774:"e24b4dd2",5692:"d0356586",5755:"2b19c960",6103:"55e83d96",6110:"992c2970",6225:"f7c80f27",6274:"7dc03f78",6581:"421ca6f9",6927:"c9ef258f",7414:"bc48c39e",7918:"61405ac6",8059:"eb45651a",8073:"1445678b",8136:"0d737dac",8364:"69a840da",8382:"1b956e17",8518:"ded6c535",8610:"992bde97",8636:"468eed2f",8841:"8607c0c9",8856:"6e2aaf9c",8867:"1bf07248",9003:"bbb7b3a9",9045:"41c67701",9095:"9dddbf78",9642:"ea7d6f6c",9661:"5ce048e1",9671:"485f75b1",9677:"278aa2cb",9817:"356e2c82",9860:"1b2d5e92"}[e]+".js",o.miniCssF=e=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),t={},f="MATIAS-API:",o.l=(e,a,c,r)=>{if(t[e])t[e].push(a);else{var d,b;if(void 0!==c)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==f+c){d=u;break}}d||(b=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.setAttribute("data-webpack",f+c),d.src=e),t[e]=[a];var l=(a,c)=>{d.onerror=d.onload=null,clearTimeout(s);var f=t[e];if(delete t[e],d.parentNode&&d.parentNode.removeChild(d),f&&f.forEach((e=>e(c))),a)return a(c)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=l.bind(null,d.onerror),d.onload=l.bind(null,d.onload),b&&document.head.appendChild(d)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="/docs-matias-api.github.io/",o.gca=function(e){return e={17896441:"7918",46290661:"3746",59362658:"2267","935f2afb":"53","8717b14a":"948","2ea3453b":"992","3d58418a":"1136","6e2eab70":"1871",d9f32620:"1914","62053ec8":"1924","5cc064b5":"2254",e273c56f:"2362","9c5ad383":"2373","814f3328":"2535","770ce1a3":"2724","1f391b9e":"3085",a6aa9e1f:"3089","698a6ddd":"3161","1df93b7f":"3237","129803e8":"3272","8eaa9412":"3411",b4698d68:"3476","0a636e63":"3499","73664a40":"3514","9e4087bc":"3608",a317a6d6:"3724","271797d6":"3833","6fc192d0":"3958","01a85c17":"4013",a94703ab:"4368","8414566c":"4595",c05410cd:"4750","73828f11":"5692","5de3710e":"5755",ccc49370:"6103","43afe84d":"6110",c36f6cc9:"6225",e3e906f0:"6274","8ad6a7e5":"6581","22fee5f4":"6927","393be207":"7414","96c6bab5":"8059","79f86d9b":"8073","6a106629":"8136",d95209f5:"8364","458eccfd":"8382",a7bd4aaa:"8518","6875c492":"8610",f4f34a3a:"8636",b9a388ea:"8841",c13c6515:"8856",c68d57de:"8867","925b3f96":"9003","85c0f87f":"9045","7022b031":"9095","7661071f":"9642","5e95c892":"9661","0e384e19":"9671","14eb3368":"9817","7515a57b":"9860"}[e]||e,o.p+o.u(e)},(()=>{var e={1303:0,532:0};o.f.j=(a,c)=>{var t=o.o(e,a)?e[a]:void 0;if(0!==t)if(t)c.push(t[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var f=new Promise(((c,f)=>t=e[a]=[c,f]));c.push(t[2]=f);var r=o.p+o.u(a),d=new Error;o.l(r,(c=>{if(o.o(e,a)&&(0!==(t=e[a])&&(e[a]=void 0),t)){var f=c&&("load"===c.type?"missing":c.type),r=c&&c.target&&c.target.src;d.message="Loading chunk "+a+" failed.\n("+f+": "+r+")",d.name="ChunkLoadError",d.type=f,d.request=r,t[1](d)}}),"chunk-"+a,a)}},o.O.j=a=>0===e[a];var a=(a,c)=>{var t,f,r=c[0],d=c[1],b=c[2],n=0;if(r.some((a=>0!==e[a]))){for(t in d)o.o(d,t)&&(o.m[t]=d[t]);if(b)var i=b(o)}for(a&&a(c);n<r.length;n++)f=r[n],o.o(e,f)&&e[f]&&e[f][0](),e[f]=0;return o.O(i)},c=self.webpackChunkMATIAS_API=self.webpackChunkMATIAS_API||[];c.forEach(a.bind(null,0)),c.push=a.bind(null,c.push.bind(c))})()})();
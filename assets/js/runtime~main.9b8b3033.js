(()=>{"use strict";var e,a,f,t,d,r={},c={};function b(e){var a=c[e];if(void 0!==a)return a.exports;var f=c[e]={id:e,loaded:!1,exports:{}};return r[e].call(f.exports,f,f.exports,b),f.loaded=!0,f.exports}b.m=r,b.c=c,e=[],b.O=(a,f,t,d)=>{if(!f){var r=1/0;for(i=0;i<e.length;i++){f=e[i][0],t=e[i][1],d=e[i][2];for(var c=!0,o=0;o<f.length;o++)(!1&d||r>=d)&&Object.keys(b.O).every((e=>b.O[e](f[o])))?f.splice(o--,1):(c=!1,d<r&&(r=d));if(c){e.splice(i--,1);var n=t();void 0!==n&&(a=n)}}return a}d=d||0;for(var i=e.length;i>0&&e[i-1][2]>d;i--)e[i]=e[i-1];e[i]=[f,t,d]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var d=Object.create(null);b.r(d);var r={};a=a||[null,f({}),f([]),f(f)];for(var c=2&t&&e;"object"==typeof c&&!~a.indexOf(c);c=f(c))Object.getOwnPropertyNames(c).forEach((a=>r[a]=()=>e[a]));return r.default=()=>e,b.d(d,r),d},b.d=(e,a)=>{for(var f in a)b.o(a,f)&&!b.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,f)=>(b.f[f](e,a),a)),[])),b.u=e=>"assets/js/"+({53:"935f2afb",948:"8717b14a",992:"2ea3453b",1136:"3d58418a",1871:"6e2eab70",1914:"d9f32620",1924:"62053ec8",2254:"5cc064b5",2267:"59362658",2362:"e273c56f",2373:"9c5ad383",2535:"814f3328",2724:"770ce1a3",3085:"1f391b9e",3089:"a6aa9e1f",3161:"698a6ddd",3237:"1df93b7f",3272:"129803e8",3411:"8eaa9412",3476:"b4698d68",3499:"0a636e63",3514:"73664a40",3608:"9e4087bc",3724:"a317a6d6",3746:"46290661",3833:"271797d6",3958:"6fc192d0",4013:"01a85c17",4368:"a94703ab",4595:"8414566c",4750:"c05410cd",5692:"73828f11",5755:"5de3710e",6103:"ccc49370",6110:"43afe84d",6225:"c36f6cc9",6274:"e3e906f0",6581:"8ad6a7e5",6927:"22fee5f4",7414:"393be207",7918:"17896441",8059:"96c6bab5",8073:"79f86d9b",8136:"6a106629",8364:"d95209f5",8382:"458eccfd",8518:"a7bd4aaa",8610:"6875c492",8636:"f4f34a3a",8841:"b9a388ea",8856:"c13c6515",8867:"c68d57de",9003:"925b3f96",9045:"85c0f87f",9095:"7022b031",9642:"7661071f",9661:"5e95c892",9671:"0e384e19",9817:"14eb3368",9860:"7515a57b"}[e]||e)+"."+{53:"8b1469f4",948:"e3a7ec91",992:"01ca01dd",1136:"a78f3277",1772:"99806854",1871:"a3fc2e85",1914:"a9eaff9f",1924:"801ab46e",2254:"4b67a05e",2267:"278557a1",2362:"5044787d",2373:"53a59632",2535:"b989956c",2724:"9620e64e",3085:"f61ad6a7",3089:"249d5355",3161:"777bd2b2",3237:"57f20dc9",3272:"614b91b3",3411:"6d1b310c",3476:"c5bce500",3499:"93683f31",3514:"57b7399f",3608:"ed24a13c",3724:"32ba509a",3746:"b72a53a8",3833:"03082f37",3958:"ba2e747e",4013:"5c9852ce",4368:"2a7e36c0",4595:"06bfa71e",4750:"888a592a",4774:"ed69f490",5692:"ef0a3f1d",5755:"5eee2982",6103:"a27fc3b8",6110:"0013a946",6225:"99c2b175",6274:"5d6839c0",6581:"44264ae8",6927:"bd4f661a",7414:"eb4e27e3",7918:"bcfa0d18",8059:"243db3be",8073:"581ac170",8136:"631661cd",8364:"f031ed5e",8382:"ac6e756e",8518:"b9f15dc9",8610:"2a931b8c",8636:"97cac495",8841:"06337c14",8856:"680deb99",8867:"5a5d1bc2",9003:"fcfa0dc1",9045:"0915a433",9095:"9606255e",9642:"1e102fd1",9661:"4309cf30",9671:"19bf5089",9677:"71cbcc25",9817:"c180948e",9860:"a1a873a3"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),t={},d="apiubl-2-1:",b.l=(e,a,f,r)=>{if(t[e])t[e].push(a);else{var c,o;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==d+f){c=u;break}}c||(o=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,b.nc&&c.setAttribute("nonce",b.nc),c.setAttribute("data-webpack",d+f),c.src=e),t[e]=[a];var l=(a,f)=>{c.onerror=c.onload=null,clearTimeout(s);var d=t[e];if(delete t[e],c.parentNode&&c.parentNode.removeChild(c),d&&d.forEach((e=>e(f))),a)return a(f)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),o&&document.head.appendChild(c)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/docs-matias-api.github.io/",b.gca=function(e){return e={17896441:"7918",46290661:"3746",59362658:"2267","935f2afb":"53","8717b14a":"948","2ea3453b":"992","3d58418a":"1136","6e2eab70":"1871",d9f32620:"1914","62053ec8":"1924","5cc064b5":"2254",e273c56f:"2362","9c5ad383":"2373","814f3328":"2535","770ce1a3":"2724","1f391b9e":"3085",a6aa9e1f:"3089","698a6ddd":"3161","1df93b7f":"3237","129803e8":"3272","8eaa9412":"3411",b4698d68:"3476","0a636e63":"3499","73664a40":"3514","9e4087bc":"3608",a317a6d6:"3724","271797d6":"3833","6fc192d0":"3958","01a85c17":"4013",a94703ab:"4368","8414566c":"4595",c05410cd:"4750","73828f11":"5692","5de3710e":"5755",ccc49370:"6103","43afe84d":"6110",c36f6cc9:"6225",e3e906f0:"6274","8ad6a7e5":"6581","22fee5f4":"6927","393be207":"7414","96c6bab5":"8059","79f86d9b":"8073","6a106629":"8136",d95209f5:"8364","458eccfd":"8382",a7bd4aaa:"8518","6875c492":"8610",f4f34a3a:"8636",b9a388ea:"8841",c13c6515:"8856",c68d57de:"8867","925b3f96":"9003","85c0f87f":"9045","7022b031":"9095","7661071f":"9642","5e95c892":"9661","0e384e19":"9671","14eb3368":"9817","7515a57b":"9860"}[e]||e,b.p+b.u(e)},(()=>{var e={1303:0,532:0};b.f.j=(a,f)=>{var t=b.o(e,a)?e[a]:void 0;if(0!==t)if(t)f.push(t[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var d=new Promise(((f,d)=>t=e[a]=[f,d]));f.push(t[2]=d);var r=b.p+b.u(a),c=new Error;b.l(r,(f=>{if(b.o(e,a)&&(0!==(t=e[a])&&(e[a]=void 0),t)){var d=f&&("load"===f.type?"missing":f.type),r=f&&f.target&&f.target.src;c.message="Loading chunk "+a+" failed.\n("+d+": "+r+")",c.name="ChunkLoadError",c.type=d,c.request=r,t[1](c)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,f)=>{var t,d,r=f[0],c=f[1],o=f[2],n=0;if(r.some((a=>0!==e[a]))){for(t in c)b.o(c,t)&&(b.m[t]=c[t]);if(o)var i=o(b)}for(a&&a(f);n<r.length;n++)d=r[n],b.o(e,d)&&e[d]&&e[d][0](),e[d]=0;return b.O(i)},f=self.webpackChunkapiubl_2_1=self.webpackChunkapiubl_2_1||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))})()})();
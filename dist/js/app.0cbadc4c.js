(function(e){function t(t){for(var r,a,s=t[0],l=t[1],c=t[2],u=0,d=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==i[s]&&(r=!1)}r&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},a={app:0},i={app:0},o=[];function s(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-099fbacd":"92553db2","chunk-09b38550":"e67394c4","chunk-1695ebce":"9fc997fb","chunk-2d0bdefe":"585e3f98","chunk-2d221c74":"59b3a01c","chunk-450b945a":"b4251e47","chunk-5b7360e5":"0bc2fa40"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-450b945a":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-099fbacd":"31d6cfe0","chunk-09b38550":"31d6cfe0","chunk-1695ebce":"31d6cfe0","chunk-2d0bdefe":"31d6cfe0","chunk-2d221c74":"31d6cfe0","chunk-450b945a":"703c6d48","chunk-5b7360e5":"31d6cfe0"}[e]+".css",i=l.p+r,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var c=o[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===r||u===i))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],u=c.getAttribute("data-href");if(u===r||u===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],f.parentNode.removeChild(f),n(o)},f.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){a[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=o);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(e);var d=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}i[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var f=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},1545:function(e,t,n){e.exports=n.p+"img/YaoDev.d894a4b2.jpg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("main",{staticClass:"text-gray-400 bg-black"},[n("TopNav",{directives:[{name:"show",rawName:"v-show",value:"links"!==e.$route.name,expression:"$route.name !== 'links'"}]}),n("transition",{attrs:{name:"view",appear:""}},[n("router-view")],1)],1)])},i=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"text-gray-400 bg-black body-font"},[n("div",{staticClass:"container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row"},[e._m(0),n("nav",{staticClass:"flex flex-wrap items-center justify-center text-base md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700"},[n("router-link",{staticClass:"mr-5 hover:text-white",attrs:{to:"/"}},[e._v("home")]),n("router-link",{staticClass:"mr-5 hover:text-white",attrs:{to:"projects"}},[e._v("projekte")]),n("router-link",{staticClass:"mr-5 hover:text-white",attrs:{to:"about"}},[e._v("über mich")]),n("router-link",{staticClass:"mr-5 hover:text-white",attrs:{to:"impressum"}},[e._v("impressum")])],1)])])},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a",{staticClass:"flex items-center mb-4 font-medium text-white title-font md:mb-0"},[r("img",{staticClass:"w-10 h-10 text-white p-0.5 bg-purple-500 rounded-full",attrs:{alt:"hero",src:n("1545")}}),r("span",{staticClass:"ml-3 text-xl"},[e._v("yao.earth")])])}],l={name:"TopNav"},c=l,u=n("2877"),d=Object(u["a"])(c,o,s,!1,null,null,null),f=d.exports,h={name:"App",components:{TopNav:f}},m=h,p=(n("034f"),Object(u["a"])(m,a,i,!1,null,null,null)),b=p.exports,v=n("8c4f"),x=(n("ba8c"),n("d3b7"),n("3ca3"),n("ddb0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("IndexHero"),n("SocialMedia"),n("Features")],1)}),g=[],k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container px-5 py-24 mx-auto"},[n("div",{staticClass:"flex flex-col w-full mb-20 text-center"},[n("h1",{staticClass:"mb-4 text-6xl font-bold text-white sm:text-6xl title-font"},[e._v("🌎yao.earth")]),n("transition",{attrs:{name:"view",appear:""}},[n("p",{directives:[{name:"show",rawName:"v-show",value:void 0!==this.$route.query.redirect&&1==this.redirectInfo,expression:"this.$route.query.redirect !== undefined && this.redirectInfo == true"}],staticClass:"mx-auto mt-2 text-lg leading-relaxed text-gray-400 lg:w-2/3",attrs:{id:"redirectInfo"}},[e._v(e._s("➡️Weitergeleitet von "+this.$route.query.redirect+".ch"))])])],1)])},w=[],y={name:"Hero",data:function(){return{redirectInfo:!0}},created:function(){var e=this;setTimeout((function(){return e.redirectInfo=!1}),2e3)}},C=y,_=Object(u["a"])(C,k,w,!1,null,null,null),j=_.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"grid px-20 mx-auto space-y-10 place-items-center sm:my-auto"},[n("div",{staticClass:"flex items-center justify-center space-x-3"},e._l(e.socials,(function(e){return n("div",{key:e.id},[n("SoMediaIcon",{attrs:{tooltip:e.tooltip,icon:e.icon,url:e.url}})],1)})),0)])},E=[],S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{attrs:{href:e.url,target:"_blank"}},[n("span",{staticClass:"text-3xl SoMediaIcon",class:[e.icon]})])},O=[],I={name:"SoMediaIcon",props:{icon:String,name:String,url:String}},P=I,$=Object(u["a"])(P,S,O,!1,null,null,null),T=$.exports,L=n("f5cb"),N=n.n(L),A=[{id:N()("social-"),name:"Instagram",url:"https://yao.earth/instagram",icon:"fab fa-instagram"},{id:N()("social-"),name:"Twitter",url:"https://yao.earth/twitter",icon:"fab fa-twitter"},{id:N()("social-"),name:"Github",url:"https://yao.earth/github",icon:"fab fa-github"},{id:N()("social-"),name:"Linkedin",url:"https://yao.earth/linkedin",icon:"fab fa-linkedin"},{id:N()("social-"),name:"Email",url:"mailto:yao@ywk.ch",icon:"fas fa-envelope",isEmail:!0}],B=A,H={name:"SocialMedia",data:function(){return{socials:B}},components:{SoMediaIcon:T}},q=H,F=Object(u["a"])(q,M,E,!1,null,null,null),D=F.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"text-gray-400 bg-black body-font"},[n("div",{staticClass:"container px-5 py-24 mx-auto"},[n("h1",{staticClass:"mb-20 text-2xl font-medium text-center text-white sm:text-3xl title-font"},[e._v(" Wo möchtest du hin? ")]),n("div",{staticClass:"flex flex-wrap -mx-4 -mt-4 -mb-10 space-y-6 sm:-m-4 md:space-y-0"},[n("div",{staticClass:"flex p-4 md:w-1/3"},[n("div",{staticClass:"inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mb-4 text-purple-400 bg-gray-800 rounded-full"},[n("svg",{staticClass:"w-6 h-6",attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M22 12h-4l-3 9L9 3l-3 9H2"}})])]),n("div",{staticClass:"flex-grow pl-6"},[n("h2",{staticClass:"mb-2 text-lg font-medium text-white title-font"},[e._v(" Meine Links ")]),n("p",{staticClass:"text-base leading-relaxed"},[e._v(" Gelange direkt zu meinen Social Media Accounts, Kontaktmöglichkeiten oder CV. ")]),n("router-link",{staticClass:"inline-flex items-center mt-3 text-purple-400",attrs:{to:"/links"}},[e._v("Mehr erfahren "),n("svg",{staticClass:"w-4 h-4 ml-2",attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M5 12h14M12 5l7 7-7 7"}})])])],1)]),n("div",{staticClass:"flex p-4 md:w-1/3"},[n("div",{staticClass:"inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mb-4 text-purple-400 bg-gray-800 rounded-full"},[n("svg",{staticClass:"w-6 h-6",attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"}},[n("circle",{attrs:{cx:"6",cy:"6",r:"3"}}),n("circle",{attrs:{cx:"6",cy:"18",r:"3"}}),n("path",{attrs:{d:"M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"}})])]),n("div",{staticClass:"flex-grow pl-6"},[n("h2",{staticClass:"mb-2 text-lg font-medium text-white title-font"},[e._v(" Meine Projekte ")]),n("p",{staticClass:"text-base leading-relaxed"},[e._v(" Egal ob auf der Arbeit oder in meiner Freizeit. Ein Projekt habe ich immer am laufen. Hier eine Liste an Projekten, die ich selbst gestartet habe. ")]),n("router-link",{staticClass:"inline-flex items-center mt-3 text-purple-400",attrs:{to:"/projects"}},[e._v("Mehr erfahren "),n("svg",{staticClass:"w-4 h-4 ml-2",attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M5 12h14M12 5l7 7-7 7"}})])])],1)]),n("div",{staticClass:"flex p-4 md:w-1/3"},[n("div",{staticClass:"inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mb-4 text-purple-400 bg-gray-800 rounded-full"},[n("svg",{staticClass:"w-6 h-6",attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"}}),n("circle",{attrs:{cx:"12",cy:"7",r:"4"}})])]),n("div",{staticClass:"flex-grow pl-6"},[n("h2",{staticClass:"mb-2 text-lg font-medium text-white title-font"},[e._v(" Über mich ")]),n("p",{staticClass:"text-base leading-relaxed"},[e._v(" Du hast vielleicht schon bereits etwas über mich gelesen. Ich möchte mich gerne vorstellen, damit ihr mich besser kennenlernt. ")]),n("router-link",{staticClass:"inline-flex items-center mt-3 text-purple-400",attrs:{to:"/about"}},[e._v("Mehr erfahren "),n("svg",{staticClass:"w-4 h-4 ml-2",attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M5 12h14M12 5l7 7-7 7"}})])])],1)])])]),n("ul",e._l(e.posts,(function(t){return n("li",{key:t.id,domProps:{textContent:e._s(t.title)}})})),0)])},K=[],G=n("bc3a"),J=n.n(G),W={name:"Features",mounted:function(){var e=this;J.a.get("https://jsonplaceholder.typicode.com/posts").then((function(e){return console.log(e.data)})).catch((function(t){return e.posts=[{title:"No playlists found"}]})).finally((function(){return console.log("Data loading complete. For developers: https://ywk.ch/dev")}))},data:function(){return{posts:null}}},Y=W,U=Object(u["a"])(Y,z,K,!1,null,null,null),V=U.exports,Q={name:"Home",title:"Home",components:{IndexHero:j,Features:V,SocialMedia:D}},R=Q,X=Object(u["a"])(R,x,g,!1,null,"2ac29876",null),Z=X.exports,ee=n("2274");r["a"].use(v["a"]),r["a"].use(ee["a"],{suffix:"🌎yao.earth"});var te=new v["a"]({mode:"history",routes:[{path:"/",name:"index",component:Z},{path:"/projects",name:"projects",component:function(){return n.e("chunk-09b38550").then(n.bind(null,"adf5"))}},{path:"/about",name:"about",component:function(){return n.e("chunk-1695ebce").then(n.bind(null,"0bd2"))}},{path:"/impressum",name:"impressum",component:function(){return n.e("chunk-099fbacd").then(n.bind(null,"761a"))}},{path:"/education/periodensystem",name:"education",component:function(){return n.e("chunk-5b7360e5").then(n.bind(null,"4dd6"))},alias:"/files/periodensystem"},{path:"/education/stundenplan",name:"education",component:function(){return n.e("chunk-450b945a").then(n.bind(null,"aee1"))},alias:"/stundenplan"},{path:"/links",name:"links",component:function(){return n.e("chunk-2d0bdefe").then(n.bind(null,"2db8"))}},{path:"/github",beforeEnter:function(){location.href="http://github.com/kaiseryao"},alias:["/gh","/git"]},{path:"/instagram",beforeEnter:function(){location.href="http://www.instagram.com/yao.earth"},alias:["/ig","/insta"]},{path:"/linkedin",beforeEnter:function(){location.href="https://www.linkedin.com/in/yaokaiser/"},alias:["/li"]},{path:"/twitter",beforeEnter:function(){location.href="http://www.twitter.com/KaiserYao"},alias:"/tw"},{path:"/discord",beforeEnter:function(){location.href="https://discord.com/users/649332192119357460"},alias:"/dc"},{path:"/quizlet",beforeEnter:function(){location.href="https://quizlet.com/class/19641601/"},alias:"/ql"},{path:"*",name:"404",component:function(){return n.e("chunk-2d221c74").then(n.bind(null,"cc97"))}}]}),ne=te,re=n("f0eb"),ae=n("0a63"),ie=n.n(ae),oe=n("4c95"),se=n.n(oe),le=n("ad3d");r["a"].component("font-awesome-icon",le["a"]),r["a"].use(v["a"]),r["a"].use(re["default"]),r["a"].use(ie.a),r["a"].use(se.a),r["a"].config.productionTip=!1,new r["a"]({router:ne,render:function(e){return e(b)}}).$mount("#app")},"85ec":function(e,t,n){},ba8c:function(e,t,n){}});
//# sourceMappingURL=app.0cbadc4c.js.map
(function(e){function t(t){for(var i,o,s=t[0],u=t[1],l=t[2],c=0,d=[];c<s.length;c++)o=s[c],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(e[i]=u[i]);h&&h(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(i=!1)}i&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var i={},o={index:0},r={index:0},a=[];function s(e){return u.p+"assets/js/"+({}[e]||e)+"."+{"chunk-1327ea9b":"e1d121b8","chunk-2d0b91da":"37549101","chunk-2d0e4a43":"9c6240b6","chunk-2d21a3d2":"43b458b3","chunk-2d22d746":"564b2e97","chunk-317b7f86":"9028f3ad","chunk-35795e9f":"c57e51d3","chunk-575556ec":"afca4456","chunk-9716aca2":"e961dba8","chunk-10ac0a8a":"2d004166","chunk-44feedb4":"8fe65a26"}[e]+".js"}function u(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-317b7f86":1,"chunk-35795e9f":1,"chunk-575556ec":1,"chunk-9716aca2":1,"chunk-10ac0a8a":1,"chunk-44feedb4":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var i="assets/css/"+({}[e]||e)+"."+{"chunk-1327ea9b":"31d6cfe0","chunk-2d0b91da":"31d6cfe0","chunk-2d0e4a43":"31d6cfe0","chunk-2d21a3d2":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-317b7f86":"db0539aa","chunk-35795e9f":"6dee9076","chunk-575556ec":"f4aaa25c","chunk-9716aca2":"2d37772e","chunk-10ac0a8a":"90b93c5c","chunk-44feedb4":"ff6a8049"}[e]+".css",r=u.p+i,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var l=a[s],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===i||c===r))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],c=l.getAttribute("data-href");if(c===i||c===r)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var i=t&&t.target&&t.target.src||r,a=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=i,delete o[e],h.parentNode.removeChild(h),n(a)},h.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(h)})).then((function(){o[e]=0})));var i=r[e];if(0!==i)if(i)t.push(i[2]);else{var a=new Promise((function(t,n){i=r[e]=[t,n]}));t.push(i[2]=a);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=s(e);var d=new Error;l=function(t){c.onerror=c.onload=null,clearTimeout(h);var n=r[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",d.name="ChunkLoadError",d.type=i,d.request=o,n[1](d)}r[e]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=i,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)u.d(n,i,function(t){return e[t]}.bind(null,i));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="Fotocage/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var h=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0534":function(e,t,n){"use strict";n("3f1d")},"225b":function(e,t,n){},"26fb":function(e,t,n){},"365c":function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return d}));var i=n("5530"),o=n("bc3a"),r=n.n(o),a=r.a.create({baseURL:"/api"}),s=function(e,t,n){a.put("/upload/image",e,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:t}).then((function(e){n(e)})).catch((function(e){console.log("ERROR",e)}))},u=function(e){a.get("/images").then((function(t){var n,i=null===(n=t.data)||void 0===n?void 0:n.images;i.length||(i=[]),e(i)})).catch((function(t){e({error:!0}),console.log(t)}))},l=function(e,t){a.post("/login",Object(i["a"])({},e)).then((function(e){e.data.status?t({user:e.data.user}):t({error:!0})})).catch((function(e){return console.log(e)}))},c=function(e,t){a.post("/registration",Object(i["a"])({},e)).then((function(e){e.data.status?t({id:e.data.user.id,auth:e.data.user.auth,role:e.data.user.role,timeStampSession:e.data.user.timeStampSession}):t({error:!0})})).catch((function(e){return console.log(e)}))},d=function(e,t){a.get("/auth/".concat(e.id,"/status")).then((function(e){e.data.session?t({id:e.data.user.id,auth:e.data.user.auth,role:e.data.user.role,timeStampSession:e.data.user.timeStampSession}):t(e.data.session)})).catch((function(e){return console.log(e)}))}},"3be0":function(e,t,n){},"3f1d":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("f89a"),n("6672"),n("3be0");var i=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],a={name:"App",created:function(){this.axios.get("/api/list/users",{params:{count:5}}).then((function(e){console.info(e.data.users)}))}},s=a,u=(n("a69a"),n("2877")),l=Object(u["a"])(s,o,r,!1,null,"593d9d50",null),c=l.exports,d=n("2106"),h=n.n(d),m=n("bc3a"),f=n.n(m),p=n("4fc9"),v=n.n(p),g=n("8c4f"),b=(n("b0c0"),n("9dfb"),n("6d11")),y=n.n(b),w=function(e,t,n){e.name&&y.a.start(),n()},S=function(e,t){i["a"].nextTick((function(){document.title=e.meta.title||""})),y.a.done()},E=(n("d3b7"),n("3ca3"),n("ddb0"),n("2f62")),T=n("365c"),k=(n("159b"),function e(t,n){var i=[],o=function(){return!!t};return o()?(n.some((function(n){if(!Object.prototype.hasOwnProperty.call(n,"meta")&&n.children&&e(n.children),n.meta){var o=n.meta.permissions;Array.isArray(o)&&o&&o.forEach((function(e){e.role===t&&n.meta.visibleAccess&&i.push({title:n.meta.title,name:n.name,icon:n.name})}))}})),i):i}),L=k,x={state:{isLoggedIn:!!JSON.parse(localStorage.getItem("loggin")),images:[],userId:JSON.parse(localStorage.getItem("id"))||null,role:localStorage.getItem("role")||"guest",timeStampSession:localStorage.getItem("timeStampSession")||null},mutations:{setLogin:function(e,t){var n=t.id,i=t.auth,o=t.role,r=t.timeStampSession;e.isLoggedIn=i,e.userId=n,e.role=o,e.timeStampSession=r,localStorage.setItem("loggin",i),localStorage.setItem("id",n),localStorage.setItem("role",o),localStorage.setItem("timeStampSession",r)},setRoutes:function(e,t){e.routesMenu=t}},actions:{updateStatusLogin:function(e,t){var n=e.commit;n("setLogin",t)},refreshSession:function(e){var t=e.state,n=e.commit,i=e.dispatch;return new Promise((function(e,o){Object(T["e"])({id:t.userId},(function(t){t?n("setLogin",t):i("logout"),e(!!t)}))}))},logout:function(e){var t=e.commit,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return new Promise((function(e,i){t("setLogin",{auth:!1,id:null,role:"guest",timeStampSession:null}),e(!n)}))}},getters:{routesAccessByUser:function(e){var t=D[0].children;return L(e.role,t)}},modules:{}};i["a"].use(E["a"]);var O=new E["a"].Store(x),M=function(){return!!O.state.isLoggedIn},$=function(e){var t=e.redirect;M()?O.dispatch("refreshSession").then((function(e){e?t():t({name:"Login"})})):M()||t({name:"Login"})},N=$,_=n("1da1"),A=(n("96cf"),function(){return!!O.state.isLoggedIn}),z=function(){var e=Object(_["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.redirect,A()&&n({name:"Home"});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=z,H=function(){return n.e("chunk-575556ec").then(n.bind(null,"9be7"))},R=function(){return n.e("chunk-1327ea9b").then(n.bind(null,"33e2"))},j=function(){return n.e("chunk-2d0b91da").then(n.bind(null,"3227"))},I={path:"/",component:H,children:[{path:"",name:"Home",alias:"/gallery",redirect:{name:"Gallery"},component:function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))}},{path:"upload",name:"Upload",component:function(){return n.e("chunk-35795e9f").then(n.bind(null,"8970"))},meta:{title:"Upload",visibleAccess:!0,middleware:{attach:[N]},permissions:[{role:"photographer",access:!0},{role:"admin",access:!0}]}},{path:"gallery",name:"Gallery",component:function(){return n.e("chunk-317b7f86").then(n.bind(null,"9772"))},meta:{title:"Gallery",visibleAccess:!0,middleware:{attach:[N]},permissions:[{role:"photographer",access:!0},{role:"admin",access:!0},{role:"guest",access:!1}]}},{path:"about",name:"About",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))},meta:{title:"About",visibleAccess:!1,middleware:{attach:[N]},permissions:[{role:"photographer",access:!0},{role:"admin",access:!0}]}}]},W={path:"/auth",name:"Auth",component:R,redirect:{name:"Login"},children:[{path:"registration",name:"Registration",component:function(){return Promise.all([n.e("chunk-9716aca2"),n.e("chunk-44feedb4")]).then(n.bind(null,"b973"))},meta:{title:"Registration",middleware:{attach:[C],ignore:[N]}}},{path:"login",name:"Login",component:function(){return Promise.all([n.e("chunk-9716aca2"),n.e("chunk-10ac0a8a")]).then(n.bind(null,"d9c9"))},meta:{title:"Login",middleware:{attach:[C],ignore:[N]}}}]},P={path:"/*",component:j,redirect:{name:"Error-Not-Found"},middleware:{ignore:[N]},children:[{path:"page-not-found",name:"Error-Not-Found",component:function(){return n.e("chunk-2d0e4a43").then(n.bind(null,"90a7"))}}]},D=[I,W,P];i["a"].use(g["a"]);var B={mode:"history",base:"Fotocage/",routes:D},U=new g["a"](B);U.beforeEach(w),U.afterEach(S);var q=U,X=n("0c6e"),F=(n("a9e3"),n("7db0"),n("a4d3"),n("e01a"),n("fb6a"),function(){this.namespace="api",this.post("/login",(function(e,t){var n=JSON.parse(t.requestBody),i=e.users.findBy({login:n.login,password:n.password});return i?(i.update({auth:!0,timeStampSession:Date.now()}),console.log("[SERVER]: Loggin user - ",String(i.login)),{status:!0,user:{id:Number(i.id),login:String(i.login),auth:i.id>0,role:i.role,timeStampSession:Date.now()}}):new X["c"](401,{some:"header"},{status:!0,user:{id:null,auth:!1}})})),this.post("/registration",(function(e,t){var n=JSON.parse(t.requestBody),i=e.users.create({login:n.login,password:n.password,auth:!1,role:"guest",timeStampSession:Date.now()});return i?(i.update({auth:!0}),console.log("[SERVER]: New user - ",String(i.login)),{status:!0,user:{id:Number(i.id),login:String(i.login),auth:i.id>0,role:i.role,timeStampSession:Date.now()}}):new X["c"](401,{some:"header"},{status:!0,user:{id:null,auth:!1}})})),this.get("/auth/:userId/status",(function(e,t){var n=e.users.find(t.params.userId),i=Date.now(),o=9e5,r=n.timeStampSession,a=i-r,s=function(){return!!r},u=function(){return!!n};return u()&&(a>o||s())?(n.update({auth:!0,timeStampSession:i}),{session:!0,user:{id:Number(n.id),login:String(n.login),auth:n.id>0,role:n.role,timeStampSession:i}}):{session:!1,user:{id:null,auth:!1}}})),this.put("/upload/image",(function(e,t){var n=JSON.parse(t.requestBody);return console.log("[SERVER UPLOAD]: ",n),e.images.create({src:n.src,title:n.title,filename:n.name,description:n.description}),{status:!0}})),this.get("/images",(function(e,t){var n=e.images.all();return n})),this.get("/list/users",(function(e,t){var n=e.users.all();if(t.queryParams.count){var i=t.queryParams.count;return n.slice(0,i)}return n}))}),J=n("359c"),K=n.n(J),G={user:X["b"]},V={user:X["a"].extend({name:function(){return K.a.name.middleName()},email:function(){return K.a.internet.email()},login:function(){return K.a.name.firstName()},password:function(){return K.a.internet.password()},auth:function(){return!1}})},Y={image:X["b"]},Q={image:X["a"].extend({src:function(){return K.a.image.image()},filename:function(){return K.a.name.title()+".jpg"},title:function(){return K.a.name.title()},description:function(){return K.a.lorem.words()}})};X["d"].extend();function Z(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"development",t=Object(X["e"])({models:{user:G.user,image:Y.image},factories:{user:V.user,image:Q.image},environment:e,routes:F,seeds:function(e){e.createList("user",2,{role:"photographer"}),e.createList("user",3,{role:"reader"}),e.create("user",{name:K.a.name.middleName(),email:K.a.internet.email(),login:"Test",password:"test",auth:!1,role:"admin"}),e.create("user",{name:K.a.name.middleName(),email:K.a.internet.email(),login:"Test2",password:"test2",auth:!1,role:"guest"}),e.create("user",{name:K.a.name.middleName(),email:K.a.internet.email(),login:"Test3",password:"test3",auth:!1,role:"photographer"}),e.createList("image",5)}});return t}var ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.visible?n("div",{class:e.containerClass},[n("transition",{attrs:{name:e.guaranteedOverlayTransition},on:{"before-enter":e.beforeOverlayTransitionEnter,"after-enter":e.afterOverlayTransitionEnter,"before-leave":e.beforeOverlayTransitionLeave,"after-leave":e.afterOverlayTransitionLeave}},[e.visibility.overlay?n("div",{staticClass:"vm--overlay",attrs:{"data-modal":e.name,"aria-expanded":e.visibility.overlay.toString()},on:{click:function(t){return t.target!==t.currentTarget?null:(t.stopPropagation(),e.onOverlayClick(t))}}},[n("div",{staticClass:"vm--top-right-slot"},[e._t("top-right")],2)]):e._e()]),n("transition",{attrs:{name:e.guaranteedModalTransition},on:{"before-enter":e.beforeModalTransitionEnter,"after-enter":e.afterModalTransitionEnter,"before-leave":e.beforeModalTransitionLeave,"after-leave":e.afterModalTransitionLeave}},[e.visibility.modal?n("div",{ref:"modal",class:e.modalClass,style:e.modalStyle,attrs:{"aria-expanded":e.visibility.modal.toString(),role:"dialog","aria-modal":"true"}},[e._t("default"),e.resizable&&!e.isAutoHeight?n("resizer",{attrs:{"min-width":e.minWidth,"min-height":e.minHeight,"max-width":e.maxWidth,"max-height":e.maxHeight},on:{resize:e.onModalResize}}):e._e()],2):e._e()])],1):e._e()},te=[],ne=n("5530"),ie=n("3835"),oe=(n("aff5"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.className})}),re=[],ae=n("ade3"),se=(n("25f0"),n("4de4"),n("d81d"),n("1276"),n("ac1f"),n("498a"),n("13d5c"),function(e,t,n){return n<e?e:n>t?t:n}),ue=["INPUT","TEXTAREA","SELECT"],le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(){return(e++).toString()}}(),ce=function(){var e=document.createElement("div");return document.body.appendChild(e),e},de=function(){"undefined"!==typeof document&&document.activeElement&&"BODY"!==document.activeElement.tagName&&document.activeElement.blur&&document.activeElement.blur()},he=function(){var e=window,t=e.innerWidth,n=document.documentElement.clientWidth;return t&&n?Math.min(t,n):n||t},me=function(e){var t=e.split(";").map((function(e){return e.trim()})).filter(Boolean),n=t.map((function(e){return e.split(":")}));return n.reduce((function(e,t){var n=Object(ie["a"])(t,2),i=n[0],o=n[1];return Object(ne["a"])(Object(ne["a"])({},e),{},Object(ae["a"])({},i,o))}),{})},fe=function(e){return e&&-1!==ue.indexOf(e.nodeName)},pe=function(e){return e.touches&&e.touches.length>0?e.touches[0]:e},ve={name:"VueJsModalResizer",props:{minHeight:{type:Number,default:0},minWidth:{type:Number,default:0},maxWidth:{type:Number,default:Number.MAX_SAFE_INTEGER},maxHeight:{type:Number,default:Number.MAX_SAFE_INTEGER}},data:function(){return{clicked:!1,size:{}}},mounted:function(){this.$el.addEventListener("mousedown",this.start,!1)},computed:{className:function(){var e=this.clicked;return["vue-modal-resizer",{clicked:e}]}},methods:{start:function(e){this.clicked=!0,window.addEventListener("mousemove",this.mousemove,!1),window.addEventListener("mouseup",this.stop,!1),e.stopPropagation(),e.preventDefault()},stop:function(){this.clicked=!1,window.removeEventListener("mousemove",this.mousemove,!1),window.removeEventListener("mouseup",this.stop,!1),this.$emit("resize-stop",{element:this.$el.parentElement,size:this.size})},mousemove:function(e){this.resize(e)},resize:function(e){var t=this.$el.parentElement;if(t){var n=e.clientX-t.offsetLeft,i=e.clientY-t.offsetTop,o=Math.min(he(),this.maxWidth),r=Math.min(window.innerHeight,this.maxHeight);n=se(this.minWidth,o,n),i=se(this.minHeight,r,i),this.size={width:n,height:i},t.style.width=n+"px",t.style.height=i+"px",this.$emit("resize",{element:t,size:this.size})}}}},ge=ve,be=(n("0534"),Object(u["a"])(ge,oe,re,!1,null,null,null)),ye=be.exports,we=n("53ca"),Se=(n("4d63"),"[-+]?[0-9]*.?[0-9]+"),Ee=[{name:"px",regexp:new RegExp("^".concat(Se,"px$"))},{name:"%",regexp:new RegExp("^".concat(Se,"%$"))},{name:"px",regexp:new RegExp("^".concat(Se,"$"))}],Te=function(e){if("auto"===e)return{type:e,value:0};var t=Ee.find((function(t){return t.regexp.test(e)}));return t?{type:t.name,value:parseFloat(e)}:{type:"",value:e}},ke=function(e){switch(Object(we["a"])(e)){case"number":return{type:"px",value:e};case"string":return Te(e);default:return{type:"",value:e}}},Le=function(e){if("string"===typeof e){var t=ke(e);return("%"===t.type||"px"===t.type)&&t.value>0}return e>=0},xe=n("6dd8"),Oe="undefined"!==typeof window&&window.ResizeObserver?ResizeObserver:xe["a"],Me=Oe,$e=n("d4ec"),Ne=n("bee2"),_e=n("2909"),Ae='button:not([disabled]), select:not([disabled]), a[href]:not([disabled]), area[href]:not([disabled]), [contentEditable=""]:not([disabled]), [contentEditable="true"]:not([disabled]), [contentEditable="TRUE"]:not([disabled]), textarea:not([disabled]), iframe:not([disabled]), input:not([disabled]), summary:not([disabled]), [tabindex]:not([tabindex="-1"])',ze=function(e){return"Tab"===e.key||9===e.keyCode},Ce=function(e,t){return Object(_e["a"])(e.querySelectorAll(t)||[])},He=function(e){return Ce(e,Ae)},Re=function(e){return e==document.activeElement},je=function(){return!document.activeElement},Ie=function(){function e(){Object($e["a"])(this,e),this.root=null,this.elements=[],this.onKeyDown=this.onKeyDown.bind(this),this.enable=this.enable.bind(this),this.disable=this.disable.bind(this),this.firstElement=this.firstElement.bind(this),this.lastElement=this.lastElement.bind(this)}return Object(Ne["a"])(e,[{key:"lastElement",value:function(){return this.elements[this.elements.length-1]||null}},{key:"firstElement",value:function(){return this.elements[0]||null}},{key:"onKeyDown",value:function(e){if(ze(e))return e.shiftKey&&Re(this.firstElement())?(this.lastElement().focus(),void e.preventDefault()):je()||Re(this.lastElement())?(this.firstElement().focus(),void e.preventDefault()):void 0}},{key:"enabled",value:function(){return!!this.root}},{key:"enable",value:function(e){if(e){this.root=e,this.elements=He(this.root);var t=this.firstElement();t&&t.focus(),this.root.addEventListener("keydown",this.onKeyDown)}}},{key:"disable",value:function(){this.root.removeEventListener("keydown",this.onKeyDown),this.root=null}}]),e}(),We=Ie,Pe="vm-transition--default",De={Enter:"enter",Entering:"entering",Leave:"leave",Leaving:"leavng"},Be={name:"VueJsModal",props:{name:{required:!0,type:String},resizable:{type:Boolean,default:!1},adaptive:{type:Boolean,default:!1},draggable:{type:[Boolean,String],default:!1},scrollable:{type:Boolean,default:!1},focusTrap:{type:Boolean,default:!1},reset:{type:Boolean,default:!1},overlayTransition:{type:String,default:"vm-transition--overlay"},transition:{type:String,default:"vm-transition--modal"},clickToClose:{type:Boolean,default:!0},classes:{type:[String,Array],default:function(){return[]}},styles:{type:[String,Array,Object]},minWidth:{type:Number,default:0,validator:function(e){return e>=0}},minHeight:{type:Number,default:0,validator:function(e){return e>=0}},maxWidth:{type:Number,default:Number.MAX_SAFE_INTEGER},maxHeight:{type:Number,default:Number.MAX_SAFE_INTEGER},width:{type:[Number,String],default:600,validator:Le},height:{type:[Number,String],default:300,validator:function(e){return"auto"===e||Le(e)}},shiftX:{type:Number,default:.5,validator:function(e){return e>=0&&e<=1}},shiftY:{type:Number,default:.5,validator:function(e){return e>=0&&e<=1}}},components:{Resizer:ye},data:function(){return{visible:!1,visibility:{modal:!1,overlay:!1},overlayTransitionState:null,modalTransitionState:null,shiftLeft:0,shiftTop:0,modal:{width:0,widthType:"px",height:0,heightType:"px",renderedHeight:0},viewportHeight:0,viewportWidth:0}},created:function(){this.setInitialSize()},beforeMount:function(){this.$modal.subscription.$on("toggle",this.onToggle),window.addEventListener("resize",this.onWindowResize),window.addEventListener("orientationchange",this.onWindowResize),this.onWindowResize(),this.scrollable&&!this.isAutoHeight&&console.warn('Modal "'.concat(this.name,'" has scrollable flag set to true ')+'but height is not "auto" ('.concat(this.height,")")),this.clickToClose&&window.addEventListener("keyup",this.onEscapeKeyUp)},mounted:function(){var e=this;this.resizeObserver=new Me((function(t){if(t.length>0){var n=Object(ie["a"])(t,1),i=n[0];e.modal.renderedHeight=i.contentRect.height}})),this.$focusTrap=new We},beforeDestroy:function(){this.$modal.subscription.$off("toggle",this.onToggle),window.removeEventListener("resize",this.onWindowResize),window.removeEventListener("orientationchange",this.onWindowResize),this.clickToClose&&window.removeEventListener("keyup",this.onEscapeKeyUp),document.body.classList.remove("vm--block-scroll")},computed:{guaranteedOverlayTransition:function(){return this.overlayTransition||Pe},guaranteedModalTransition:function(){return this.transition||Pe},isAutoHeight:function(){return"auto"===this.modal.heightType},position:function(){var e=this.viewportHeight,t=this.viewportWidth,n=this.shiftLeft,i=this.shiftTop,o=this.shiftX,r=this.shiftY,a=this.trueModalWidth,s=this.trueModalHeight,u=t-a,l=Math.max(e-s,0),c=n+o*u,d=i+r*l;return{left:parseInt(se(0,u,c)),top:!s&&this.isAutoHeight?void 0:parseInt(se(0,l,d))}},trueModalWidth:function(){var e=this.viewportWidth,t=this.modal,n=this.adaptive,i=this.minWidth,o=this.maxWidth,r="%"===t.widthType?e/100*t.width:t.width;if(n){var a=Math.max(i,Math.min(e,o));return se(i,a,r)}return r},trueModalHeight:function(){var e=this.viewportHeight,t=this.modal,n=this.isAutoHeight,i=this.adaptive,o=this.minHeight,r=this.maxHeight,a="%"===t.heightType?e/100*t.height:t.height;if(n)return this.modal.renderedHeight;if(i){var s=Math.max(o,Math.min(e,r));return se(o,s,a)}return a},autoHeight:function(){return this.adaptive&&this.modal.renderedHeight>=this.viewportHeight?Math.max(this.minHeight,this.viewportHeight)+"px":"auto"},containerClass:function(){return["vm--container",this.scrollable&&this.isAutoHeight&&"scrollable"]},modalClass:function(){return["vm--modal",this.classes]},stylesProp:function(){return"string"===typeof this.styles?me(this.styles):this.styles},modalStyle:function(){return[this.stylesProp,{top:this.position.top+"px",left:this.position.left+"px",width:this.trueModalWidth+"px",height:this.isAutoHeight?this.autoHeight:this.trueModalHeight+"px"}]},isComponentReadyToBeDestroyed:function(){return this.overlayTransitionState===De.Leave&&this.modalTransitionState===De.Leave}},watch:{isComponentReadyToBeDestroyed:function(e){e&&(this.visible=!1)}},methods:{startTransitionEnter:function(){this.visibility.overlay=!0,this.visibility.modal=!0},startTransitionLeave:function(){this.visibility.overlay=!1,this.visibility.modal=!1},beforeOverlayTransitionEnter:function(){this.overlayTransitionState=De.Entering},afterOverlayTransitionEnter:function(){this.overlayTransitionState=De.Enter},beforeOverlayTransitionLeave:function(){this.overlayTransitionState=De.Leaving},afterOverlayTransitionLeave:function(){this.overlayTransitionState=De.Leave},beforeModalTransitionEnter:function(){var e=this;this.modalTransitionState=De.Entering,this.$nextTick((function(){e.resizeObserver.observe(e.$refs.modal)}))},afterModalTransitionEnter:function(){this.modalTransitionState=De.Enter,this.draggable&&this.addDraggableListeners(),this.focusTrap&&this.$focusTrap.enable(this.$refs.modal);var e=this.createModalEvent({state:"opened"});this.$emit("opened",e)},beforeModalTransitionLeave:function(){this.modalTransitionState=De.Leaving,this.resizeObserver.unobserve(this.$refs.modal),this.$focusTrap.enabled()&&this.$focusTrap.disable()},afterModalTransitionLeave:function(){this.modalTransitionState=De.Leave;var e=this.createModalEvent({state:"closed"});this.$emit("closed",e)},onToggle:function(e,t,n){if(this.name===e){var i="undefined"===typeof t?!this.visible:t;this.toggle(i,n)}},setInitialSize:function(){var e=ke(this.width),t=ke(this.height);this.modal.width=e.value,this.modal.widthType=e.type,this.modal.height=t.value,this.modal.heightType=t.type},onEscapeKeyUp:function(e){27===e.which&&this.visible&&this.$modal.hide(this.name)},onWindowResize:function(){this.viewportWidth=he(),this.viewportHeight=window.innerHeight,this.ensureShiftInWindowBounds()},createModalEvent:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(ne["a"])({name:this.name,ref:this.$refs.modal||null},e)},onModalResize:function(e){this.modal.widthType="px",this.modal.width=e.size.width,this.modal.heightType="px",this.modal.height=e.size.height;var t=this.modal.size;this.$emit("resize",this.createModalEvent({size:t}))},open:function(e){var t=this;this.reset&&(this.setInitialSize(),this.shiftLeft=0,this.shiftTop=0),this.scrollable&&document.body.classList.add("vm--block-scroll");var n=!1,i=function(){n=!0},o=this.createModalEvent({cancel:i,state:"before-open",params:e});this.$emit("before-open",o),n?this.scrollable&&document.body.classList.remove("vm--block-scroll"):(de(),this.visible=!0,this.$nextTick((function(){t.startTransitionEnter()})))},close:function(e){this.scrollable&&document.body.classList.remove("vm--block-scroll");var t=!1,n=function(){t=!0},i=this.createModalEvent({cancel:n,state:"before-close",params:e});this.$emit("before-close",i),t||this.startTransitionLeave()},toggle:function(e,t){var n=this.visible;n!==e&&(e?this.open(t):this.close(t))},getDraggableElement:function(){return!0===this.draggable?this.$refs.modal:"string"===typeof this.draggable?this.$refs.modal.querySelector(this.draggable):null},onOverlayClick:function(){this.clickToClose&&this.toggle(!1)},addDraggableListeners:function(){var e=this,t=this.getDraggableElement();if(t){var n=0,i=0,o=0,r=0,a=function(t){var a=t.target;if(!fe(a)){var l=pe(t),c=l.clientX,d=l.clientY;document.addEventListener("mousemove",s),document.addEventListener("touchmove",s),document.addEventListener("mouseup",u),document.addEventListener("touchend",u),n=c,i=d,o=e.shiftLeft,r=e.shiftTop}},s=function(t){var a=pe(t),s=a.clientX,u=a.clientY;e.shiftLeft=o+s-n,e.shiftTop=r+u-i,t.preventDefault()},u=function t(n){e.ensureShiftInWindowBounds(),document.removeEventListener("mousemove",s),document.removeEventListener("touchmove",s),document.removeEventListener("mouseup",t),document.removeEventListener("touchend",t),n.preventDefault()};t.addEventListener("mousedown",a),t.addEventListener("touchstart",a)}},ensureShiftInWindowBounds:function(){var e=this.viewportHeight,t=this.viewportWidth,n=this.shiftLeft,i=this.shiftTop,o=this.shiftX,r=this.shiftY,a=this.trueModalWidth,s=this.trueModalHeight,u=t-a,l=Math.max(e-s,0),c=n+o*u,d=i+r*l;this.shiftLeft-=c-se(0,u,c),this.shiftTop-=d-se(0,l,d)}}},Ue=Be,qe=(n("cc1a"),Object(u["a"])(Ue,ee,te,!1,null,null,null)),Xe=qe.exports,Fe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.$modal.context.componentName,{tag:"component",attrs:{name:"dialog",height:"auto",classes:["vue-dialog",this.params.class],width:e.width,"shift-y":.3,adaptive:!0,"focus-trap":!0,clickToClose:e.clickToClose,transition:e.transition},on:{"before-open":e.beforeOpened,"before-close":e.beforeClosed,opened:function(t){return e.$emit("opened",t)},closed:function(t){return e.$emit("closed",t)}}},[n("div",{staticClass:"vue-dialog-content"},[e.params.title?n("div",{staticClass:"vue-dialog-content-title",domProps:{innerHTML:e._s(e.params.title||"")}}):e._e(),e.params.component?n(e.params.component,e._b({tag:"component"},"component",e.params.props,!1)):n("div",{domProps:{innerHTML:e._s(e.params.text||"")}})],1),e.buttons?n("div",{staticClass:"vue-dialog-buttons"},e._l(e.buttons,(function(t,i){return n("button",{key:i,class:t.class||"vue-dialog-button",style:e.buttonStyle,attrs:{type:"button",tabindex:"0"},domProps:{innerHTML:e._s(t.title)},on:{click:function(t){return t.stopPropagation(),e.click(i,t)}}},[e._v(e._s(t.title))])})),0):n("div",{staticClass:"vue-dialog-buttons-none"})])},Je=[],Ke={name:"VueJsDialog",props:{width:{type:[Number,String],default:400},clickToClose:{type:Boolean,default:!0},transition:{type:String}},data:function(){return{params:{}}},computed:{buttons:function(){return this.params.buttons||[]},buttonStyle:function(){return{flex:"1 1 ".concat(100/this.buttons.length,"%")}}},methods:{beforeOpened:function(e){this.params=e.params||{},this.$emit("before-opened",e)},beforeClosed:function(e){this.params={},this.$emit("before-closed",e)},click:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"click",i=this.buttons[e],o=null===i||void 0===i?void 0:i.handler;"function"===typeof o&&o(e,t,{source:n})}}},Ge=Ke,Ve=(n("ed8c"),Object(u["a"])(Ge,Fe,Je,!1,null,null,null)),Ye=Ve.exports,Qe="[vue-js-modal] $modal() received an unsupported argument as a first argument.",Ze=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"modals-container"}},e._l(e.modals,(function(t){return n("modal",e._g(e._b({key:t.id,on:{closed:function(n){return e.remove(t.id)}}},"modal",t.modalAttrs,!1),t.modalListeners),[n(t.component,e._g(e._b({tag:"component",on:{close:function(n){return e.$modal.hide(t.modalAttrs.name,n)}}},"component",t.componentAttrs,!1),e.$listeners))],1)})),1)},et=[],tt=(n("c740"),n("a434"),"dynamic_modal_"),nt={data:function(){return{modals:[]}},created:function(){this.$root.__modalContainer=this},mounted:function(){var e=this;this.$modal.subscription.$on("hide-all",(function(){e.modals=[]}))},methods:{add:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=le(),a=i.name||tt+r;this.modals.push({id:r,modalAttrs:Object(ne["a"])(Object(ne["a"])({},i),{},{name:a}),modalListeners:o,component:e,componentAttrs:n}),this.$nextTick((function(){t.$modal.show(a)}))},remove:function(e){var t=this.modals.findIndex((function(t){return t.id===e}));-1!==t&&this.modals.splice(t,1)}}},it=nt,ot=Object(u["a"])(it,Ze,et,!1,null,null,null),rt=ot.exports,at=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=new e,i={root:null,componentName:t.componentName||"Modal"},o=function(e,t){n.$emit("toggle",e,!0,t)},r=function(e,n){var o,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=arguments.length>3?arguments[3]:void 0,s=null===(o=i.root)||void 0===o?void 0:o.__modalContainer,u=t.dynamicDefaults||{};null===s||void 0===s||s.add(e,n,Object(ne["a"])(Object(ne["a"])({},u),r),a)},a=function(t){i.root=t;var n=ce();new e({parent:t,render:function(e){return e(rt)}}).$mount(n)},s=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var i=t[0];switch(Object(we["a"])(i)){case"string":o.apply(void 0,t);break;case"object":case"function":r.apply(void 0,t);break;default:console.warn(Qe,i)}},u=function(e,t){n.$emit("toggle",e,!1,t)},l=function(){n.$emit("hide-all")},c=function(e,t){n.$emit("toggle",e,void 0,t)};return{context:i,subscription:n,show:s,hide:u,hideAll:l,toggle:c,setDynamicModalContainer:a}},st=at,ut={install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!e.prototype.$modal){var n=new st(e,t);Object.defineProperty(e.prototype,"$modal",{get:function(){var t=this;if(t instanceof e){var i=t.$root;n.context.root||n.setDynamicModalContainer(i)}return n}}),e.component(n.context.componentName,Xe),t.dialog&&e.component("VDialog",Ye)}}},lt=ut,ct=lt;i["a"].use(v.a,q),i["a"].use(ct),i["a"].use(h.a,f.a),Z();t["default"]=new i["a"]({router:q,store:O,render:function(e){return e(c)}}).$mount("#app")},6672:function(e,t,n){},"6d11":function(e,t,n){var i,o;n("7037").default;n("5319"),n("ac1f"),n("fb6a"),function(r,a){i=a,o="function"===typeof i?i.call(t,n,t,e):i,void 0===o||(e.exports=o)}(0,(function(){var e={version:"0.2.0"},t=e.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'\n      <div class="bar" role="bar">\n        <div class="peg"></div>\n      </div>\n      <div class="spinner" role="spinner">\n        <div class="spinner-icon"></div>\n      </div>'};function n(e,t,n){return e<t?t:e>n?n:e}function i(e){return 100*(-1+e)}function o(e,n,o){var r;return r="translate3d"===t.positionUsing?{transform:"translate3d("+i(e)+"%,0,0)"}:"translate"===t.positionUsing?{transform:"translate("+i(e)+"%,0)"}:{"margin-left":i(e)+"%"},r.transition="all "+n+"ms "+o,r}e.configure=function(e){var n,i;for(n in e)i=e[n],void 0!==i&&e.hasOwnProperty(n)&&(t[n]=i);return this},e.status=null,e.set=function(i){var s=e.isStarted();i=n(i,t.minimum,1),e.status=1===i?null:i;var u=e.render(!s),l=u.querySelector(t.barSelector),c=t.speed,d=t.easing;return u.offsetWidth,r((function(n){""===t.positionUsing&&(t.positionUsing=e.getPositioningCSS()),a(l,o(i,c,d)),1===i?(a(u,{transition:"none",opacity:1}),u.offsetWidth,setTimeout((function(){a(u,{transition:"all "+c+"ms linear",opacity:0}),setTimeout((function(){e.remove(),n()}),c)}),c)):setTimeout(n,c)})),this},e.isStarted=function(){return"number"===typeof e.status},e.start=function(){e.status||e.set(0);var n=function n(){setTimeout((function(){e.status&&(e.trickle(),n())}),t.trickleSpeed)};return t.trickle&&n(),this},e.done=function(t){return t||e.status?e.inc(.3+.5*Math.random()).set(1):this},e.inc=function(t){var i=e.status;return i?("number"!==typeof t&&(t=(1-i)*n(Math.random()*i,.1,.95)),i=n(i+t,0,.994),e.set(i)):e.start()},e.trickle=function(){return e.inc(Math.random()*t.trickleRate)},function(){var t=0,n=0;e.promise=function(i){return i&&"resolved"!==i.state()?(0===n&&e.start(),t++,n++,i.always((function(){n--,0===n?(t=0,e.done()):e.set((t-n)/t)})),this):this}}(),e.render=function(n){if(e.isRendered())return document.getElementById("nprogress");u(document.documentElement,"nprogress-busy");var o=document.createElement("div");o.id="nprogress",o.innerHTML=t.template;var r,s=o.querySelector(t.barSelector),l=n?"-100":i(e.status||0),c=document.querySelector(t.parent);return a(s,{transition:"all 0 linear",transform:"translate3d("+l+"%,0,0)"}),t.showSpinner||(r=o.querySelector(t.spinnerSelector),r&&d(r)),c!=document.body&&u(c,"nprogress-custom-parent"),c.appendChild(o),o},e.remove=function(){l(document.documentElement,"nprogress-busy"),l(document.querySelector(t.parent),"nprogress-custom-parent");var e=document.getElementById("nprogress");e&&d(e)},e.isRendered=function(){return!!document.getElementById("nprogress")},e.getPositioningCSS=function(){var e=document.body.style,t="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";return t+"Perspective"in e?"translate3d":t+"Transform"in e?"translate":"margin"};var r=function(){var e=[];function t(){var n=e.shift();n&&n(t)}return function(n){e.push(n),1==e.length&&t()}}(),a=function(){var e=["Webkit","O","Moz","ms"],t={};function n(e){return e.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,(function(e,t){return t.toUpperCase()}))}function i(t){var n=document.body.style;if(t in n)return t;var i,o=e.length,r=t.charAt(0).toUpperCase()+t.slice(1);while(o--)if(i=e[o]+r,i in n)return i;return t}function o(e){return e=n(e),t[e]||(t[e]=i(e))}function r(e,t,n){t=o(t),e.style[t]=n}return function(e,t){var n,i,o=arguments;if(2==o.length)for(n in t)i=t[n],void 0!==i&&t.hasOwnProperty(n)&&r(e,n,i);else r(e,o[1],o[2])}}();function s(e,t){var n="string"==typeof e?e:c(e);return n.indexOf(" "+t+" ")>=0}function u(e,t){var n=c(e),i=n+t;s(n,t)||(e.className=i.substring(1))}function l(e,t){var n,i=c(e);s(e,t)&&(n=i.replace(" "+t+" "," "),e.className=n.substring(1,n.length-1))}function c(e){return(" "+(e.className||"")+" ").replace(/\s+/gi," ")}function d(e){e&&e.parentNode&&e.parentNode.removeChild(e)}return e}))},"9dfb":function(e,t,n){},a69a:function(e,t,n){"use strict";n("f7d5")},cc1a:function(e,t,n){"use strict";n("26fb")},ed8c:function(e,t,n){"use strict";n("225b")},f7d5:function(e,t,n){},f89a:function(e,t,n){}});
!function(){var t,e={3698:function(t,e,n){"use strict";var o=function(){!function(t,e){var n,o=0,r=0,a=0;function i(){n=setInterval(c,75)}function c(){var c=e[r];0==o?++a==c.length&&(o=1,clearInterval(n),setTimeout(i,2e3)):1==o&&0==--a&&(a=0,o=0,++r==e.length&&(r=0));var s=c.substring(0,a);t.textContent=s}i()}(document.querySelector(".hero__typing-text--type"),["быстро","недорого","круглосуточно","надежно"])};var r=function(){var t=document.querySelectorAll(".counter__number"),e=document.querySelector(".counter"),n=1,o=function(){window.innerHeight+window.scrollY>=e.offsetTop+e.offsetHeight/2&&n<2&&t.forEach((function(t){!function(t){var e=+t.getAttribute("data-count"),o=1500,r=1;e>100&&(r=116);var a=0,i=Math.round(o/(e/r)),c=setInterval((function(){(a+=r)==e&&(clearInterval(c),n+=2),t.innerText=a}),i)}(t)}))};o(),window.addEventListener("scroll",(function(){o()}))};var a=function(){var t=document.querySelectorAll(".testimonials__photo"),e=document.querySelectorAll(".testimonials__content"),n=document.querySelector(".testimonials__header");function o(){e.forEach((function(t){t.classList.add("hide"),t.classList.remove("show","fadeIn")})),t.forEach((function(t){t.classList.remove("active")}))}function r(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;e[n]?(e[n].classList.add("show","fadeIn"),e[n].classList.remove("hide"),t[n].classList.add("active")):(e[e.length-1].classList.add("show","fadeIn"),e[e.length-1].classList.remove("hide"),t[n].classList.add("active"))}e.length>0?(o(),r(),n.addEventListener("mouseover",(function(e){var n=e.target;n&&n.classList.contains("testimonials__photo")&&t.forEach((function(t,e){n==t&&(o(),r(e))}))}))):document.querySelector(".testimonials").style.display="none"};var i=function(){var t,e,n,o,r,a,i,c,s,u=document.querySelector(".calculating__result span"),l=document.querySelectorAll(".calculating__checkbox"),d=document.getElementById("ditch"),g=document.getElementById("steer"),f=document.getElementById("preoder"),p=document.getElementById("minus"),m=document.getElementById("plus"),v=document.getElementById("wheelnumber"),h=0;function b(){var s;t&&n&&e&&o&&r?(a=d.checked?500:0,i=g.checked?500:0,c=f.checked?.9:1,s="day"===n?0:500,u.textContent=Math.round(s+ +o+ +r*e*c+a+i+500*h)):u.textContent="0"}function y(t,e){document.querySelectorAll(t).forEach((function(t){t.classList.remove(e),t.getAttribute("id")===localStorage.getItem("time")&&t.classList.add(e),t.getAttribute("data-tarif")===localStorage.getItem("tarif")&&t.classList.add(e)}))}function _(e,a){var i=document.querySelectorAll(e);i.forEach((function(e){e.addEventListener("click",(function(e){e.target.getAttribute("data-tarif")?(t=+e.target.getAttribute("data-tarif"),o=+e.target.getAttribute("data-fix"),r=+e.target.getAttribute("data-price"),localStorage.setItem("tarif",+e.target.getAttribute("data-tarif")),localStorage.setItem("fix",+e.target.getAttribute("data-fix")),localStorage.setItem("priceForKm",+e.target.getAttribute("data-price"))):(n=e.target.getAttribute("id"),localStorage.setItem("time",e.target.getAttribute("id"))),i.forEach((function(t){t.classList.remove(a)})),e.target.classList.add(a),b()}))}))}localStorage.getItem("time")?n=localStorage.getItem("time"):(n="day",localStorage.setItem("time","day")),localStorage.getItem("tarif")?t=localStorage.getItem("tarif"):(t=2,localStorage.setItem("tarif",2)),localStorage.getItem("fix")?o=localStorage.getItem("fix"):(o=2e3,localStorage.setItem("fix",2e3)),localStorage.getItem("priceForKm")?r=localStorage.getItem("priceForKm"):(r=50,localStorage.setItem("priceForKm",50)),b(),y("#daynight div","calculating__choose-item_active"),y(".calculating__choose__car li","calculating__choose-item_active"),_("#daynight div","calculating__choose-item_active"),_(".calculating__choose__car li","calculating__choose-item_active"),(s=document.querySelector("#kilo")).addEventListener("input",(function(){s.value.match(/\D/g)||0===s.value.length?s.style.border="1px solid red":s.style.border="none",e=+s.value,b()})),l.forEach((function(t){t.addEventListener("click",(function(){b()}))})),m.addEventListener("click",(function(){++h>20&&(h=20),v.textContent=h,b()})),p.addEventListener("click",(function(){--h<0&&(h=0),v.textContent=h,b()}))},c=n(9886);c.ZP.use([c.pt,c.Breakpoints]);var s=function(){new c.ZP(".mySwiper",{loop:!0,slidesPerView:6,spaceBetween:0,centeredSlides:!0,autoplay:{delay:2500,disableOnInteraction:!1,pauseOnMouseEnter:!0},breakpoints:{320:{slidesPerView:1},700:{slidesPerView:3},1025:{slidesPerView:6}}})};var u=function(){var t=document.querySelectorAll(".button-to-top");window.addEventListener("scroll",(function(){0!==window.pageYOffset?t.forEach((function(t){t.classList.add("active")})):t.forEach((function(t){t.classList.remove("active")}))})),t.forEach((function(t){t.addEventListener("click",(function(t){t.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})}))}))};var l=function(){var t=document.querySelector(".footer__posts"),e=document.querySelectorAll(".post__title");function n(t,e){e=+e,t.length>0&&t.forEach((function(t){var n=t.textContent;n.length>e&&(n=n.slice(0,e)+"...",t.textContent=n)}))}t&&n(t.querySelectorAll("a"),30),e&&n(e,51)};var d=function(){var t=document.querySelector(".modal__background"),e=document.querySelector(".modal"),n=function(){var t=document.createElement("div");t.style.width="50px",t.style.height="50px",t.style.overflowY="scroll",t.style.visability="hidden",document.body.appendChild(t);var e=t.offsetWidth-t.clientWidth;return t.remove(),e}();function o(){e.classList.add("modal-close"),e.classList.remove("modal-open"),document.body.style.overflow="",document.body.style.marginRight="0px"}e.addEventListener("click",(function(e){e.target!==t&&""!=e.target.getAttribute("data-close")||o()})),document.addEventListener("keydown",(function(t){"Escape"===t.code&&e.classList.contains("modal-open")&&o()})),window.addEventListener("scroll",(function t(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight&&(e.classList.add("modal-open"),e.classList.remove("modal-close"),document.body.style.overflow="hidden",document.body.style.marginRight="".concat(n,"px"),window.removeEventListener("scroll",t))}))};var g=function(){var t=document.querySelector(".burger"),e=document.querySelector(".burger__menu"),n=document.querySelector(".burger__bg");t&&t.addEventListener("click",(function(o){e.classList.toggle("active"),n.classList.toggle("active"),t.classList.toggle("active"),document.body.classList.toggle("no-scroll")}))};var f=function(){var t=document.querySelectorAll(".accordion__item");t&&t.forEach((function(t){t.addEventListener("click",(function(t){var e=t.currentTarget,n=e.querySelector(".accordion__header"),o=e.querySelector(".accordion__body");e.classList.toggle("open"),e.classList.contains("open")?(n.setAttribute("aria-expanded",!0),o.setAttribute("aria-hidden",!1),o.style.maxHeight=o.scrollHeight+"px"):(n.setAttribute("aria-expanded",!1),o.setAttribute("aria-hidden",!0),o.style.maxHeight=null)}))}))};var p=function(){var t=document.querySelectorAll(".nav__link"),e=document.querySelector("main").getAttribute("id");t.forEach((function(t){t.classList.remove("active"),t.getAttribute("data-nav")===e&&t.classList.add("active")}))};var m=function(){},v=n(5566),h=n.n(v);window.addEventListener("DOMContentLoaded",(function(){h().init(),document.querySelector("#home-page")&&(o(),r(),a(),s(),d(),f()),document.querySelector("#calculating-page")&&i(),m(),u(),l(),g(),p()}));b(n(9985)),b(n(3121)),b(n(962)),b(n(4455)),b(n(3565)),b(n(4400));function b(t){var e={};return t.keys().map((function(n,o){e[n.replace("./","")]=t(n)})),e}},4877:function(t,e,n){"use strict";n.r(e),e.default=n.p+"images/background/bg-wave.svg"},6114:function(t,e,n){"use strict";n.r(e),e.default=n.p+"images/background/counter-bg.svg"},1630:function(t,e,n){"use strict";n.r(e),e.default=n.p+"images/background/post-bg.svg"},8117:function(t,e,n){"use strict";n.r(e),e.default=n.p+"images/background/romb-bg.svg"},505:function(t,e,n){"use strict";n.r(e),e.default=n.p+"images/background/sale-offer-bg.svg"},731:function(t,e,n){"use strict";n.r(e),e.default=n.p+"images/calculator/cross.png"},6031:function(t,e,n){"use strict";n.r(e),e.default=n.p+"images/calculator/day.svg"},3431:function(t,e,n){"use strict";n.r(e),e.default=n.p+"images/calculator/jip.png"},1893:function(t,e,n){"use strict";n.r(e),e.default=n.p+"images/calculator/light-car.png"},5364:function(t,e,n){"use strict";n.r(e),e.default=n.p+"images/calculator/minivan.png"},9793:function(t,e,n){"use strict";n.r(e),e.default=n.p+"images/calculator/moto.png"},4397:function(t,e,n){"use strict";n.r(e),e.default=n.p+"images/calculator/night.svg"},3825:function(t,e,n){"use strict";n.r(e),e.default=n.p+"images/calculator/special.png"},5737:function(t,e,n){"use strict";n.r(e),e.default=n.p+"images/calculator/truck.png"},6885:function(t,e,n){"use strict";n.r(e),e.default=n.p+"images/calculator/van.png"},8977:function(t,e,n){"use strict";n.r(e),e.default=n.p+"images/crossover.png"},9089:function(t,e,n){"use strict";n.r(e),e.default=n.p+"images/evacuator-24-spb-1.jpg"},2002:function(t,e,n){"use strict";n.r(e),e.default=n.p+"images/evacuator-24-spb.jpg"},6108:function(t,e,n){"use strict";n.r(e),e.default=n.p+"images/evacuator-call.png"},9494:function(t,e,n){"use strict";n.r(e),e.default=n.p+"images/galery/evacuator-spb-24-1.jpg"},1399:function(t,e,n){"use strict";n.r(e),e.default=n.p+"images/galery/evacuator-spb-24-10.jpg"},9840:function(t,e,n){"use strict";n.r(e),e.default=n.p+"images/galery/evacuator-spb-24-11.jpg"},3665:function(t,e,n){"use strict";n.r(e),e.default=n.p+"images/galery/evacuator-spb-24-12.jpg"},487:function(t,e,n){"use strict";n.r(e),e.default=n.p+"images/galery/evacuator-spb-24-2.jpg"},7359:function(t,e,n){"use strict";n.r(e),e.default=n.p+"images/galery/evacuator-spb-24-3.jpg"},4756:function(t,e,n){"use strict";n.r(e),e.default=n.p+"images/galery/evacuator-spb-24-5.jpg"},4105:function(t,e,n){"use strict";n.r(e),e.default=n.p+"images/galery/evacuator-spb-24-6.jpg"},2756:function(t,e,n){"use strict";n.r(e),e.default=n.p+"images/galery/evacuator-spb-24-7.jpg"},632:function(t,e,n){"use strict";n.r(e),e.default=n.p+"images/galery/evacuator-spb-24-8.jpg"},6860:function(t,e,n){"use strict";n.r(e),e.default=n.p+"images/galery/evacuator-spb-24-9.jpg"},7296:function(t,e,n){"use strict";n.r(e),e.default=n.p+"images/hook.png"},6565:function(t,e,n){"use strict";n.r(e),e.default=n.p+"images/logo.png"},4876:function(t,e,n){"use strict";n.r(e),e.default=n.p+"images/post-images/post-1.jpg"},6423:function(t,e,n){"use strict";n.r(e),e.default=n.p+"images/post-images/post-2.jpg"},9501:function(t,e,n){"use strict";n.r(e),e.default=n.p+"images/post-images/post.jpg"},5662:function(t,e,n){"use strict";n.r(e),e.default=n.p+"images/standard-car.png"},3470:function(t,e,n){"use strict";n.r(e),e.default=n.p+"images/testimonials/photo-9.jpg"},6761:function(t,e,n){"use strict";n.r(e),e.default=n.p+"images/testimonials/testimonial-photo-1.jpg"},5327:function(t,e,n){"use strict";n.r(e),e.default=n.p+"images/testimonials/testimonial-photo-2.jpg"},3663:function(t,e,n){"use strict";n.r(e),e.default=n.p+"images/testimonials/testimonial-photo-3.jpg"},6009:function(t,e,n){"use strict";n.r(e),e.default=n.p+"images/testimonials/testimonial-photo-4.jpg"},1758:function(t,e,n){"use strict";n.r(e),e.default=n.p+"images/testimonials/testimonial-photo-5.jpg"},2733:function(t,e,n){"use strict";n.r(e),e.default=n.p+"images/testimonials/testimonial-photo-6.jpg"},3347:function(t,e,n){"use strict";n.r(e),e.default=n.p+"images/truck.jpg"},2879:function(t,e,n){"use strict";n.r(e),e.default=n.p+"images/truck.png"},3121:function(t,e,n){var o={"./bg-wave.svg":4877,"./counter-bg.svg":6114,"./post-bg.svg":1630,"./romb-bg.svg":8117,"./sale-offer-bg.svg":505};function r(t){var e=a(t);return n(e)}function a(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}r.keys=function(){return Object.keys(o)},r.resolve=a,t.exports=r,r.id=3121},3565:function(t,e,n){var o={"./cross.png":731,"./day.svg":6031,"./jip.png":3431,"./light-car.png":1893,"./minivan.png":5364,"./moto.png":9793,"./night.svg":4397,"./special.png":3825,"./truck.png":5737,"./van.png":6885};function r(t){var e=a(t);return n(e)}function a(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}r.keys=function(){return Object.keys(o)},r.resolve=a,t.exports=r,r.id=3565},962:function(t,e,n){var o={"./evacuator-spb-24-1.jpg":9494,"./evacuator-spb-24-10.jpg":1399,"./evacuator-spb-24-11.jpg":9840,"./evacuator-spb-24-12.jpg":3665,"./evacuator-spb-24-2.jpg":487,"./evacuator-spb-24-3.jpg":7359,"./evacuator-spb-24-5.jpg":4756,"./evacuator-spb-24-6.jpg":4105,"./evacuator-spb-24-7.jpg":2756,"./evacuator-spb-24-8.jpg":632,"./evacuator-spb-24-9.jpg":6860};function r(t){var e=a(t);return n(e)}function a(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}r.keys=function(){return Object.keys(o)},r.resolve=a,t.exports=r,r.id=962},4400:function(t,e,n){var o={"./post-1.jpg":4876,"./post-2.jpg":6423,"./post.jpg":9501};function r(t){var e=a(t);return n(e)}function a(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}r.keys=function(){return Object.keys(o)},r.resolve=a,t.exports=r,r.id=4400},4455:function(t,e,n){var o={"./photo-9.jpg":3470,"./testimonial-photo-1.jpg":6761,"./testimonial-photo-2.jpg":5327,"./testimonial-photo-3.jpg":3663,"./testimonial-photo-4.jpg":6009,"./testimonial-photo-5.jpg":1758,"./testimonial-photo-6.jpg":2733};function r(t){var e=a(t);return n(e)}function a(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}r.keys=function(){return Object.keys(o)},r.resolve=a,t.exports=r,r.id=4455},9985:function(t,e,n){var o={"./crossover.png":8977,"./evacuator-24-spb-1.jpg":9089,"./evacuator-24-spb.jpg":2002,"./evacuator-call.png":6108,"./hook.png":7296,"./logo.png":6565,"./standard-car.png":5662,"./truck.jpg":3347,"./truck.png":2879};function r(t){var e=a(t);return n(e)}function a(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}r.keys=function(){return Object.keys(o)},r.resolve=a,t.exports=r,r.id=9985}},n={};function o(t){var r=n[t];if(void 0!==r)return r.exports;var a=n[t]={exports:{}};return e[t].call(a.exports,a,a.exports,o),a.exports}o.m=e,t=[],o.O=function(e,n,r,a){if(!n){var i=1/0;for(l=0;l<t.length;l++){n=t[l][0],r=t[l][1],a=t[l][2];for(var c=!0,s=0;s<n.length;s++)(!1&a||i>=a)&&Object.keys(o.O).every((function(t){return o.O[t](n[s])}))?n.splice(s--,1):(c=!1,a<i&&(i=a));if(c){t.splice(l--,1);var u=r();void 0!==u&&(e=u)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[n,r,a]},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,{a:e}),e},o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},function(){var t;o.g.importScripts&&(t=o.g.location+"");var e=o.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=t}(),function(){var t={179:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var r,a,i=n[0],c=n[1],s=n[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(r in c)o.o(c,r)&&(o.m[r]=c[r]);if(s)var l=s(o)}for(e&&e(n);u<i.length;u++)a=i[u],o.o(t,a)&&t[a]&&t[a][0](),t[i[u]]=0;return o.O(l)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}(),o.O(void 0,[445],(function(){return o(1202)}));var r=o.O(void 0,[445],(function(){return o(3698)}));r=o.O(r)}();
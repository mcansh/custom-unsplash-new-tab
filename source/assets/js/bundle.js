!function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={};t.m=e,t.c=o,t.i=function(e){return e},t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4)}([function(e,t,o){"use strict";o.d(t,"a",function(){return n}),o.d(t,"b",function(){return r});var n=document.querySelector.bind(document),r=document.querySelectorAll.bind(document);Node.prototype.on=window.on=function(e,t){this.addEventListener(e,t)},NodeList.prototype.__proto__=Array.prototype,NodeList.prototype.on=NodeList.prototype.addEventListener=function(e,t){this.forEach(function(o,n){o.on(e,t)})}},function(e,t,o){"use strict";o.d(t,"a",function(){return n}),o.d(t,"b",function(){return r});var n="551c50eda7975cf9ef9aaa4e043667f7566231fb7f09992b748630f2bfd81e8b",r="087479c2e8aed540a1ff89cbc306a2a317d21df98bcee598119c7bcbd0837290"},function(e,t,o){var n,r;!function(i){var s=!1;if(n=i,void 0!==(r="function"==typeof n?n.call(t,o,t,e):n)&&(e.exports=r),s=!0,e.exports=i(),s=!0,!s){var a=window.Cookies,c=window.Cookies=i();c.noConflict=function(){return window.Cookies=a,c}}}(function(){function e(){for(var e=0,t={};e<arguments.length;e++){var o=arguments[e];for(var n in o)t[n]=o[n]}return t}function t(o){function n(t,r,i){var s;if("undefined"!=typeof document){if(arguments.length>1){if(i=e({path:"/"},n.defaults,i),"number"==typeof i.expires){var a=new Date;a.setMilliseconds(a.getMilliseconds()+864e5*i.expires),i.expires=a}i.expires=i.expires?i.expires.toUTCString():"";try{s=JSON.stringify(r),/^[\{\[]/.test(s)&&(r=s)}catch(e){}r=o.write?o.write(r,t):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)),t=t.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),t=t.replace(/[\(\)]/g,escape);var c="";for(var u in i)i[u]&&(c+="; "+u,i[u]!==!0&&(c+="="+i[u]));return document.cookie=t+"="+r+c}t||(s={});for(var l=document.cookie?document.cookie.split("; "):[],f=0;f<l.length;f++){var d=l[f].split("="),h=d.slice(1).join("=");'"'===h.charAt(0)&&(h=h.slice(1,-1));try{var p=d[0].replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent);if(h=o.read?o.read(h,p):o(h,p)||h.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent),this.json)try{h=JSON.parse(h)}catch(e){}if(t===p){s=h;break}t||(s[p]=h)}catch(e){}}return s}}return n.set=n,n.get=function(e){return n.call(n,e)},n.getJSON=function(){return n.apply({json:!0},[].slice.call(arguments))},n.defaults={},n.remove=function(t,o){n(t,"",e(o,{expires:-1}))},n.withConverter=t,n}return t(function(){})})},function(e,t){!function(e){"use strict";function t(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function o(e){return"string"!=typeof e&&(e=String(e)),e}function n(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return m.iterable&&(t[Symbol.iterator]=function(){return t}),t}function r(e){this.map={},e instanceof r?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function i(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function s(e){return new Promise(function(t,o){e.onload=function(){t(e.result)},e.onerror=function(){o(e.error)}})}function a(e){var t=new FileReader,o=s(t);return t.readAsArrayBuffer(e),o}function c(e){var t=new FileReader,o=s(t);return t.readAsText(e),o}function u(e){for(var t=new Uint8Array(e),o=new Array(t.length),n=0;n<t.length;n++)o[n]=String.fromCharCode(t[n]);return o.join("")}function l(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function f(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,e)if("string"==typeof e)this._bodyText=e;else if(m.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(m.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(m.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(m.arrayBuffer&&m.blob&&w(e))this._bodyArrayBuffer=l(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!m.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e)&&!_(e))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=l(e)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):m.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},m.blob&&(this.blob=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?i(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(a)}),this.text=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return c(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(u(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},m.formData&&(this.formData=function(){return this.text().then(p)}),this.json=function(){return this.text().then(JSON.parse)},this}function d(e){var t=e.toUpperCase();return g.indexOf(t)>-1?t:e}function h(e,t){t=t||{};var o=t.body;if(e instanceof h){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new r(e.headers)),this.method=e.method,this.mode=e.mode,o||null==e._bodyInit||(o=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new r(t.headers)),this.method=d(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function p(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var o=e.split("="),n=o.shift().replace(/\+/g," "),r=o.join("=").replace(/\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(r))}}),t}function y(e){var t=new r;return e.split(/\r?\n/).forEach(function(e){var o=e.split(":"),n=o.shift().trim();if(n){var r=o.join(":").trim();t.append(n,r)}}),t}function b(e,t){t||(t={}),this.type="default",this.status="status"in t?t.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new r(t.headers),this.url=t.url||"",this._initBody(e)}if(!e.fetch){var m={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e};if(m.arrayBuffer)var v=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],w=function(e){return e&&DataView.prototype.isPrototypeOf(e)},_=ArrayBuffer.isView||function(e){return e&&v.indexOf(Object.prototype.toString.call(e))>-1};r.prototype.append=function(e,n){e=t(e),n=o(n);var r=this.map[e];this.map[e]=r?r+","+n:n},r.prototype.delete=function(e){delete this.map[t(e)]},r.prototype.get=function(e){return e=t(e),this.has(e)?this.map[e]:null},r.prototype.has=function(e){return this.map.hasOwnProperty(t(e))},r.prototype.set=function(e,n){this.map[t(e)]=o(n)},r.prototype.forEach=function(e,t){for(var o in this.map)this.map.hasOwnProperty(o)&&e.call(t,this.map[o],o,this)},r.prototype.keys=function(){var e=[];return this.forEach(function(t,o){e.push(o)}),n(e)},r.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),n(e)},r.prototype.entries=function(){var e=[];return this.forEach(function(t,o){e.push([o,t])}),n(e)},m.iterable&&(r.prototype[Symbol.iterator]=r.prototype.entries);var g=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];h.prototype.clone=function(){return new h(this,{body:this._bodyInit})},f.call(h.prototype),f.call(b.prototype),b.prototype.clone=function(){return new b(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new r(this.headers),url:this.url})},b.error=function(){var e=new b(null,{status:0,statusText:""});return e.type="error",e};var E=[301,302,303,307,308];b.redirect=function(e,t){if(E.indexOf(t)===-1)throw new RangeError("Invalid status code");return new b(null,{status:t,headers:{location:e}})},e.Headers=r,e.Request=h,e.Response=b,e.fetch=function(e,t){return new Promise(function(o,n){var r=new h(e,t),i=new XMLHttpRequest;i.onload=function(){var e={status:i.status,statusText:i.statusText,headers:y(i.getAllResponseHeaders()||"")};e.url="responseURL"in i?i.responseURL:e.headers.get("X-Request-URL");var t="response"in i?i.response:i.responseText;o(new b(t,e))},i.onerror=function(){n(new TypeError("Network request failed"))},i.ontimeout=function(){n(new TypeError("Network request failed"))},i.open(r.method,r.url,!0),"include"===r.credentials&&(i.withCredentials=!0),"responseType"in i&&m.blob&&(i.responseType="blob"),r.headers.forEach(function(e,t){i.setRequestHeader(t,e)}),i.send(void 0===r._bodyInit?null:r._bodyInit)})},e.fetch.polyfill=!0}}("undefined"!=typeof self?self:this)},function(e,t,o){"use strict";function n(){fetch(p+"/users/"+I+"/collections?client_id="+h.a+"&access_token="+y,{method:"GET"}).then(function(e){return e.json()}).then(function(e){e.length>10&&(o.i(d.a)("#collections ul").innerHTML+="<li>check console for info</li>"),e.forEach(function(e){o.i(d.a)("#collections ul").innerHTML+='\n        <li>\n          <a data-collection="'+e.id+'" href="#">'+e.title+"</a>\n        </li>\n      "}),o.i(d.b)("#collections ul li a").forEach(function(e){e.addEventListener("click",r)})}).catch(function(e){return console.error(e)})}function r(e){var t=this.dataset.collection;e.preventDefault(),fetch(p+"/collections/"+t+"/add?photo_id="+m+"&client_id="+h.a+"&access_token="+y,{method:"POST"}).then(function(e){return e.json()}).then(function(e){console.log(e),o.i(d.a)("#add").classList.add("added")}).catch(function(e){return console.error(e)})}function i(){fetch(p+"/photos/"+m+"/stats?access_token="+y,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){console.log(e),o.i(d.a)("#like span").textContent=e.likes}).catch(function(e){return console.error(e)})}function s(e){e.preventDefault(),D===!0?(D=!1,fetch(p+"/photos/"+m+"/like?access_token="+y,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(){A.classList.remove("liked"),i()}).catch(function(e){return console.error(e)})):(D=!0,fetch(p+"/photos/"+m+"/like?access_token="+y,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(){A.classList.add("liked"),i()}).catch(function(e){return console.error(e)}))}function a(){o.i(d.b)(".popover").forEach(function(e){e.classList.remove("is-visible")})}function c(e){e.preventDefault(),a(),this.nextElementSibling.classList.toggle("is-visible")}function u(){var e=o.i(d.a)("#query").value,t=o.i(d.a)("#user").value;console.log(S),console.log(e),f.set("searchQuery",e),f.set("searchUser",t),location.reload()}Object.defineProperty(t,"__esModule",{value:!0});var l=o(3),f=(o.n(l),o(2)),d=(o.n(f),o(0)),h=o(1),p="https://api.unsplash.com",y=window.atob(f.get("accessToken")),b=p+"/photos/random?count=1&collections=155105&client_id="+h.a,m=void 0,v=void 0,w="https://mcansh.github.io/unsplash-new-tab",_="https://unsplash.com/oauth",g=_+"/authorize?client_id="+h.a+"&redirect_uri="+w+"&response_type=code&scope=public+read_user+write_likes+read_collections+write_collections",E=o.i(d.a)("#login"),x=o.i(d.a)("main"),k=o.i(d.a)("#download[download]"),T=o.i(d.a)("#view"),A=o.i(d.a)("#like"),B=o.i(d.a)("#profile"),C=o.i(d.a)("#name"),U=o.i(d.a)("#location"),j=o.i(d.a)(".make.model"),P=o.i(d.a)(".res"),L=o.i(d.a)(".downloads"),O=f.get("searchQuery"),S=f.get("searchUser"),D=void 0,I=f.get("currentUser");if(""===y||"undefined"===y?E.href=g:(!function(){fetch(p+"/me?client_id="+h.a+"&access_token="+y,{method:"GET"}).then(function(e){return e.json()}).then(function(e){f.set("currentUser",e.username),n()}).catch(function(e){return console.error(e)})}(),E.parentElement.remove(),b+="&access_token="+y),O?(console.log("found a query but not a user"),f.remove(S),b+="&query="+O):S?(console.log("found a user but not a query"),b+="&username="+S,f.remove(O)):S&&O&&(console.log("found both a query and user"),b+="&query="+O+"&username="+S),location.search.length){var R=window.location.search,F=decodeURIComponent(R),q=F.split("?");if(q.length){q[1].split("&").forEach(function(e){e.match(/^code=/)&&(v=e.replace(/^code=/,""),v=v.replace("/",""))})}v?(window.code=v,function(){fetch(_+"/token/?client_id="+h.a+"&client_secret="+h.b+"&redirect_uri="+w+"&code="+v+"&grant_type=authorization_code",{method:"POST"}).then(function(e){return e.json()}).then(function(e){console.log(e),y=window.btoa(e.access_token),f.set("accessToken",y),location.href=w}).catch(function(e){return console.error(e)})}()):v||y||console.error("no login code = no login for you")}fetch(b,{method:"GET"}).then(function(e){return e.json()}).then(function(e){var t=e[0];if(console.log(t),m=t.id,x.style.backgroundColor=t.color,x.style.backgroundImage="url("+t.urls.full+")",T.href=t.links.html,B.style.backgroundImage="url("+t.user.profile_image.large+")",k.href="https://unsplash.com/photos/"+t.id+"/download",C.href=t.user.links.html,C.textContent=t.user.name,o.i(d.a)("#like span").textContent=t.likes,t.exif.model){var n=t.exif.make,r=t.exif.model;r.includes(n)?j.textContent="Camera: "+r:j.textContent="Camera: "+n+" "+r}else j.remove();t.liked_by_user===!0&&(D=!0,A.classList.add("liked")),P.textContent="Resolution: "+t.width+"x"+t.height,L.textContent="Downloads: "+t.downloads.toLocaleString(),t.location?(U.textContent=t.location.title,U.href="https://unsplash.com/search/"+t.location.title):U.remove()}).catch(function(e){return console.error(e)}),o.i(d.b)(".button.opener").forEach(function(e){e.addEventListener("click",c)}),A.addEventListener("click",s),o.i(d.a)("main").addEventListener("click",a),function(){var e=o.i(d.a)("#query");o.i(d.a)("#user").value=S,e.value=O}(),o.i(d.a)("#save").addEventListener("click",u),document.addEventListener("keyup",function(e){13===e.keyCode&&u()})}]);
//# sourceMappingURL=bundle.js.map
!function(e){function t(r){if(o[r])return o[r].exports;var n=o[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var o={};t.m=e,t.c=o,t.i=function(e){return e},t.d=function(e,o,r){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4)}([function(e,t,o){"use strict";o.d(t,"a",function(){return r}),o.d(t,"b",function(){return n});var r=document.querySelector.bind(document),n=document.querySelectorAll.bind(document);Node.prototype.on=window.on=function(e,t){this.addEventListener(e,t)},NodeList.prototype.__proto__=Array.prototype,NodeList.prototype.on=NodeList.prototype.addEventListener=function(e,t){this.forEach(function(o,r){o.on(e,t)})}},function(e,t,o){"use strict";o.d(t,"a",function(){return r}),o.d(t,"b",function(){return n});var r="551c50eda7975cf9ef9aaa4e043667f7566231fb7f09992b748630f2bfd81e8b",n="087479c2e8aed540a1ff89cbc306a2a317d21df98bcee598119c7bcbd0837290"},function(e,t,o){var r,n;!function(i){var s=!1;if(r=i,void 0!==(n="function"==typeof r?r.call(t,o,t,e):r)&&(e.exports=n),s=!0,e.exports=i(),s=!0,!s){var a=window.Cookies,c=window.Cookies=i();c.noConflict=function(){return window.Cookies=a,c}}}(function(){function e(){for(var e=0,t={};e<arguments.length;e++){var o=arguments[e];for(var r in o)t[r]=o[r]}return t}function t(o){function r(t,n,i){var s;if("undefined"!=typeof document){if(arguments.length>1){if(i=e({path:"/"},r.defaults,i),"number"==typeof i.expires){var a=new Date;a.setMilliseconds(a.getMilliseconds()+864e5*i.expires),i.expires=a}try{s=JSON.stringify(n),/^[\{\[]/.test(s)&&(n=s)}catch(e){}return n=o.write?o.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)),t=t.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),t=t.replace(/[\(\)]/g,escape),document.cookie=[t,"=",n,i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}t||(s={});for(var c=document.cookie?document.cookie.split("; "):[],u=0;u<c.length;u++){var l=c[u].split("="),f=l.slice(1).join("=");'"'===f.charAt(0)&&(f=f.slice(1,-1));try{var d=l[0].replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent);if(f=o.read?o.read(f,d):o(f,d)||f.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent),this.json)try{f=JSON.parse(f)}catch(e){}if(t===d){s=f;break}t||(s[d]=f)}catch(e){}}return s}}return r.set=r,r.get=function(e){return r.call(r,e)},r.getJSON=function(){return r.apply({json:!0},[].slice.call(arguments))},r.defaults={},r.remove=function(t,o){r(t,"",e(o,{expires:-1}))},r.withConverter=t,r}return t(function(){})})},function(e,t){!function(e){"use strict";function t(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function o(e){return"string"!=typeof e&&(e=String(e)),e}function r(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return m.iterable&&(t[Symbol.iterator]=function(){return t}),t}function n(e){this.map={},e instanceof n?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function i(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function s(e){return new Promise(function(t,o){e.onload=function(){t(e.result)},e.onerror=function(){o(e.error)}})}function a(e){var t=new FileReader,o=s(t);return t.readAsArrayBuffer(e),o}function c(e){var t=new FileReader,o=s(t);return t.readAsText(e),o}function u(e){for(var t=new Uint8Array(e),o=new Array(t.length),r=0;r<t.length;r++)o[r]=String.fromCharCode(t[r]);return o.join("")}function l(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function f(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,e)if("string"==typeof e)this._bodyText=e;else if(m.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(m.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(m.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(m.arrayBuffer&&m.blob&&w(e))this._bodyArrayBuffer=l(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!m.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e)&&!_(e))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=l(e)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):m.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},m.blob&&(this.blob=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?i(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(a)}),this.text=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return c(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(u(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},m.formData&&(this.formData=function(){return this.text().then(p)}),this.json=function(){return this.text().then(JSON.parse)},this}function d(e){var t=e.toUpperCase();return g.indexOf(t)>-1?t:e}function h(e,t){t=t||{};var o=t.body;if(e instanceof h){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new n(e.headers)),this.method=e.method,this.mode=e.mode,o||null==e._bodyInit||(o=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new n(t.headers)),this.method=d(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function p(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var o=e.split("="),r=o.shift().replace(/\+/g," "),n=o.join("=").replace(/\+/g," ");t.append(decodeURIComponent(r),decodeURIComponent(n))}}),t}function y(e){var t=new n;return e.split(/\r?\n/).forEach(function(e){var o=e.split(":"),r=o.shift().trim();if(r){var n=o.join(":").trim();t.append(r,n)}}),t}function b(e,t){t||(t={}),this.type="default",this.status="status"in t?t.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new n(t.headers),this.url=t.url||"",this._initBody(e)}if(!e.fetch){var m={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e};if(m.arrayBuffer)var v=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],w=function(e){return e&&DataView.prototype.isPrototypeOf(e)},_=ArrayBuffer.isView||function(e){return e&&v.indexOf(Object.prototype.toString.call(e))>-1};n.prototype.append=function(e,r){e=t(e),r=o(r);var n=this.map[e];this.map[e]=n?n+","+r:r},n.prototype.delete=function(e){delete this.map[t(e)]},n.prototype.get=function(e){return e=t(e),this.has(e)?this.map[e]:null},n.prototype.has=function(e){return this.map.hasOwnProperty(t(e))},n.prototype.set=function(e,r){this.map[t(e)]=o(r)},n.prototype.forEach=function(e,t){for(var o in this.map)this.map.hasOwnProperty(o)&&e.call(t,this.map[o],o,this)},n.prototype.keys=function(){var e=[];return this.forEach(function(t,o){e.push(o)}),r(e)},n.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),r(e)},n.prototype.entries=function(){var e=[];return this.forEach(function(t,o){e.push([o,t])}),r(e)},m.iterable&&(n.prototype[Symbol.iterator]=n.prototype.entries);var g=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];h.prototype.clone=function(){return new h(this,{body:this._bodyInit})},f.call(h.prototype),f.call(b.prototype),b.prototype.clone=function(){return new b(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new n(this.headers),url:this.url})},b.error=function(){var e=new b(null,{status:0,statusText:""});return e.type="error",e};var x=[301,302,303,307,308];b.redirect=function(e,t){if(x.indexOf(t)===-1)throw new RangeError("Invalid status code");return new b(null,{status:t,headers:{location:e}})},e.Headers=n,e.Request=h,e.Response=b,e.fetch=function(e,t){return new Promise(function(o,r){var n=new h(e,t),i=new XMLHttpRequest;i.onload=function(){var e={status:i.status,statusText:i.statusText,headers:y(i.getAllResponseHeaders()||"")};e.url="responseURL"in i?i.responseURL:e.headers.get("X-Request-URL");var t="response"in i?i.response:i.responseText;o(new b(t,e))},i.onerror=function(){r(new TypeError("Network request failed"))},i.ontimeout=function(){r(new TypeError("Network request failed"))},i.open(n.method,n.url,!0),"include"===n.credentials&&(i.withCredentials=!0),"responseType"in i&&m.blob&&(i.responseType="blob"),n.headers.forEach(function(e,t){i.setRequestHeader(t,e)}),i.send(void 0===n._bodyInit?null:n._bodyInit)})},e.fetch.polyfill=!0}}("undefined"!=typeof self?self:this)},function(e,t,o){"use strict";function r(){fetch(d+"/photos/"+y+"/stats?access_token="+h,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){console.log(e),o.i(l.a)("#like span").textContent=e.likes}).catch(function(e){return console.error(e)})}function n(e){e.preventDefault(),U===!0?(U=!1,fetch(d+"/photos/"+y+"/like?access_token="+h,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(){A.classList.remove("liked"),r()}).catch(function(e){return console.error(e)})):(U=!0,fetch(d+"/photos/"+y+"/like?access_token="+h,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(){A.classList.add("liked"),r()}).catch(function(e){return console.error(e)}))}function i(){o.i(l.b)(".popover").forEach(function(e){e.classList.remove("is-visible")})}function s(e){e.preventDefault(),i(),o.i(l.a)("#more + .popover").classList.toggle("is-visible")}function a(e){e.preventDefault(),i(),o.i(l.a)("#exif + .popover").classList.toggle("is-visible")}Object.defineProperty(t,"__esModule",{value:!0});var c=o(3),u=(o.n(c),o(2)),l=(o.n(u),o(0)),f=o(1),d="https://api.unsplash.com",h=window.atob(u.get("accessToken")||"bnVsbA=="),p=void 0,y=void 0,b=void 0,m=location.origin,v="https://unsplash.com/oauth",w=v+"/authorize?client_id="+f.a+"&redirect_uri="+m+"&response_type=code&scope=public+read_user+write_likes+read_collections+write_collections",_=o.i(l.a)("#login"),g=o.i(l.a)("main"),x=o.i(l.a)("#download[download]"),E=o.i(l.a)("#view"),A=o.i(l.a)("#like"),T=o.i(l.a)("#profile"),k=o.i(l.a)("#name"),B=o.i(l.a)("#location"),C=o.i(l.a)(".make.model"),j=o.i(l.a)(".res"),P=o.i(l.a)(".downloads"),U=void 0;if(""===h||void 0===h||"null"===h?(_.href=w,p=d+"/photos/random?count=1&collections=155105&client_id="+f.a):(_.parentElement.remove(),p=d+"/photos/random?count=1&collections=155105&client_id="+f.a+"&access_token="+h),location.search.length){var O=window.location.search,L=decodeURIComponent(O),S=L.split("?");if(S.length){S[1].split("&").forEach(function(e){e.match(/^code=/)&&(b=e.replace(/^code=/,""),b=b.replace("/",""))})}b?(window.code=b,function(){fetch(v+"/token/?client_id="+f.a+"&client_secret="+f.b+"&redirect_uri="+m+"&code="+b+"&grant_type=authorization_code",{method:"POST"}).then(function(e){return e.json()}).then(function(e){h=window.btoa(e.access_token),u.set("accessToken",h),location.href=m}).catch(function(e){console.error(e)})}()):b||h||console.error("no login code = no login for you")}fetch(p,{method:"GET"}).then(function(e){return e.json()}).then(function(e){var t=e[0];if(console.log(t),y=t.id,g.style.backgroundColor=t.color,g.style.backgroundImage="url("+t.urls.regular+")",E.href=t.links.html,T.style.backgroundImage="url("+t.user.profile_image.large+")",x.href="https://unsplash.com/photos/"+t.id+"/download",k.href=t.user.links.html,k.textContent=t.user.name,o.i(l.a)("#like span").textContent=t.likes,null!==t.exif.model){var r=t.exif.make,n=t.exif.model;n.includes(r)?C.textContent="Camera: "+n:C.textContent="Camera: "+r+" "+n}else C.remove();t.liked_by_user===!0&&(U=!0,A.classList.add("liked")),j.textContent="Resolution: "+t.width+"x"+t.height,P.textContent="Downloads: "+t.downloads.toLocaleString(),t.location?(B.textContent=t.location.title,B.href="https://unsplash.com/search/"+t.location.title):B.remove()}).catch(function(e){return console.error(e)}),o.i(l.a)("#more").addEventListener("click",s),A.addEventListener("click",n),o.i(l.a)("#exif").addEventListener("click",a),o.i(l.a)("main").addEventListener("click",i)}]);
//# sourceMappingURL=bundle.js.map
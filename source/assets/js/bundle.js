!function(e){function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}var t={};return o.m=e,o.c=t,o.i=function(e){return e},o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},o.p="",o(o.s=2)}([function(e,o,t){"use strict";t.d(o,"a",function(){return n});var n=document.querySelector.bind(document);document.querySelectorAll.bind(document);Node.prototype.on=window.on=function(e,o){this.addEventListener(e,o)},NodeList.prototype.__proto__=Array.prototype,NodeList.prototype.on=NodeList.prototype.addEventListener=function(e,o){this.forEach(function(t,n){t.on(e,o)})}},function(e,o,t){"use strict";t.d(o,"a",function(){return n}),t.d(o,"b",function(){return i});var n="551c50eda7975cf9ef9aaa4e043667f7566231fb7f09992b748630f2bfd81e8b",i="087479c2e8aed540a1ff89cbc306a2a317d21df98bcee598119c7bcbd0837290"},function(e,o,t){"use strict";function n(){location.href=P}function i(e){e.preventDefault(),t.i(v.a)("#more + .popover").classList.toggle("is-visible")}function c(){fetch("https://unsplash.com/oauth/token/?client_id="+g.a+"&client_secret="+g.b+"&redirect_uri="+P+"&code="+A+"&grant_type=authorization_code",{method:"POST"}).then(function(e){return e.json()}).then(function(e){console.log(e.access_token),D=e.access_token,localStorage.setItem("accessToken",D),n()}).catch(function(e){console.error(e)})}function a(){fetch(k+"/photos/"+O+"/stats?access_token="+D,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){t.i(v.a)("#like span").textContent=e.likes}).catch(function(e){console.error(e)})}function r(e){e.preventDefault(),fetch(k+"/photos/"+O+"/like?access_token="+D,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(){x.classList.add("liked")}),a()}function s(e){e.preventDefault(),fetch(k+"/photos/"+O+"/like?access_token="+D,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(){x.classList.remove("liked")}),a()}function l(){var e=t.i(v.a)("#query").value,o=t.i(v.a)("#user").value;console.log(z),console.log(e),localStorage.setItem("searchQuery",e),localStorage.setItem("searchUser",o),location.reload()}function u(){var e=t.i(v.a)("#query"),o=t.i(v.a)("#user");o.value=z,e.value=U}function d(e){e.preventDefault(),t.i(v.a)("#exif + .popover").classList.toggle("is-visible")}function f(e){e.preventDefault(),t.i(v.a)("#settings + .popover").classList.toggle("is-visible")}function p(){fetch(k+"/me/?access_token="+D,{method:"GET"}).then(function(e){return e.json()}).then(function(e){G=e.username,fetch(k+"/users/"+G+"/collections/?access_token="+D,{method:"GET"}).then(function(e){return e.json()}).then(function(e){window.myCollections=e.map(function(e,o){return e.id}),t.i(v.a)("#add + .popover ul").innerHTML=N.map(function(e,o){return'\n            <li>\n              <a href="#">'+e.id+"</a>\n            </li>\n          "}).join("")})})}function h(){t.i(v.a)("#add + .popover").classList.toggle("is-visible")}function m(){t.i(v.a)(".popover").classList.remove("is-visible")}Object.defineProperty(o,"__esModule",{value:!0});var v=t(0),g=t(1),k="https://api.unsplash.com",_=void 0,y=t.i(v.a)("main"),b=t.i(v.a)("#download"),L=t.i(v.a)("#more"),E=t.i(v.a)("#profile"),w=t.i(v.a)("#name"),x=t.i(v.a)("#like"),C=t.i(v.a)("#location"),j=t.i(v.a)("#view"),T=t.i(v.a)("#login"),S=t.i(v.a)(".make.model"),q=t.i(v.a)(".res"),I=t.i(v.a)(".downloads"),D=localStorage.getItem("accessToken"),O=void 0,A=void 0,P="http://mcansh.local:5757",G=void 0,N=void 0,M="https://unsplash.com/oauth/authorize?client_id="+g.a+"&redirect_uri="+P+"&response_type=code&scope=public+read_user+write_likes+read_collections+write_collections",U=localStorage.getItem("searchQuery"),z=localStorage.getItem("searchUser");null===U&&null===z?(console.log("neither a query or user was found"),_=k+"/photos/random?featured=true&client_id="+g.a+"&access_token="+D):null!==U&&null===z?(console.log("found a query but not a user"),_=k+"/photos/random?featured=true&query="+U+"&client_id="+g.a+"&access_token="+D):null!==z&&null===U?(console.log("found a user but not a query"),_=k+"/photos/random?featured=true&username="+z+"&client_id="+g.a+"&access_token="+D):null!==z&&null!==U?(console.log("found both a query and user"),_=k+"/photos/random?featured=true&username="+z+"&query="+U+"&client_id="+g.a+"&access_token="+D):console.error("🤔"),console.log(_),null===D||void 0===D||"null"===D||"undefined"===D?x.href=M:T.parentElement.remove(),"chrome-extension:"===location.protocol?(P=location.origin+"/index.html",console.log(P)):"mcansh.local"===location.hostname?(P="http://mcansh.local:5757/",console.log(P)):(P="https://mcansh.github.io/unsplash-new-tab/",console.log(P)),T.href=M,fetch(_,{method:"GET"}).then(function(e){return e.json()}).then(function(e){O=e.id,y.style.backgroundColor=e.color,y.style.backgroundImage="url(https://unsplash.com/photos/"+e.id+"/download)",j.href=e.links.html,E.style.backgroundImage="url("+e.user.profile_image.large+")",b.href=e.links.download,w.href=e.user.links.html,w.textContent=e.user.name,t.i(v.a)("#like span").textContent=e.likes,null!==e.exif.model?S.textContent="Camera: "+e.exif.model:S.remove(),e.liked_by_user===!0?x.classList.add("liked"):console.log("you dont alreAdy like this photo"),q.textContent="Resolution: "+e.width+"x"+e.height,I.textContent="Downloads: "+e.downloads.toLocaleString(),null!==e.location?(C.textContent=e.user.location,C.href="https://unsplash.com/search/"+e.user.location):C.remove()}),location.search.length&&!function(){var e=window.location.search,o=decodeURIComponent(e),t=/^code=/,i=o.split("?");if(i.length){var a=i[1].split("&");a.forEach(function(e){e.match(t)&&(A=e.replace(t,""),A=A.replace("/",""))})}A?(console.log("CODE: "+A),window.code=A,c()):(console.error("no login code = no login for you"),n())}(),x.classList.contains("liked")?(x.addEventListener("click",s),x.removeEventListener("click",r)):(x.addEventListener("click",r),x.removeEventListener("click",s)),u(),t.i(v.a)("#save").addEventListener("click",l),L.addEventListener("click",i),t.i(v.a)("#settings").addEventListener("click",f),t.i(v.a)("#exif").addEventListener("click",d),p(),t.i(v.a)("#add").addEventListener("click",h),t.i(v.a)("main").addEventListener("click",m),t.i(v.a)(".button").addEventListener("click",m),document.addEventListener("keyup",function(e){13===e.keyCode&&l()})}]);
//# sourceMappingURL=bundle.js.map
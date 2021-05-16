(()=>{"use strict";var e={297:(e,t,n)=>{e.exports=n.p+"2f68b4b810d08baec782.svg"},206:(e,t,n)=>{e.exports=n.p+"96e4ef44bc81d082da4f.svg"},886:(e,t,n)=>{e.exports=n.p+"3dd951ef5e73060e7472.svg"},697:(e,t,n)=>{e.exports=n.p+"5633bb16956269f00c2e.png"},269:(e,t)=>{var n=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("unable to locate global object")}();e.exports=t=n.fetch,n.fetch&&(t.default=n.fetch.bind(n)),t.Headers=n.Headers,t.Request=n.Request,t.Response=n.Response}},t={};function n(i){var a=t[i];if(void 0!==a)return a.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,n),s.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");i.length&&(e=i[i.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{let e=n(269),t=new class{constructor(e,t){this.urlBase=e,this.urlBaseEpisode=t,this.dataBase=this.changeDataEpisodeCharacters(),this.dataEpisode=this.getEpisodes(),this.filter={status:[],species:[],gender:[],origin:[],location:[],episode:[],order:null},this.filterData=this.filtrar()}async getData(t=this.urlBase){let n=[],i=t;for(;i;){let t=await e(i),a=await t.json();n.push(...a.results),i=a.info.next}return n}async getEpisodes(){let e=await this.getData(this.urlBaseEpisode),t=[];return e.forEach((e=>{t.push([e.id,e.name])})),t}async changeDataEpisodeCharacters(){let e=await this.getData(),t=await this.dataEpisode;return e.forEach((e=>{let n=[],i=e.episode;if(1!=i.length)i.forEach((e=>{let i=e.split("/")[5];t.forEach((e=>{e[0]==i&&n.push(e[1])}))}));else{let e=i[0].split("/")[5];t.forEach((t=>{t[0]==e&&n.push(t[1])}))}e.episode=n})),e}async filtrar(){let e=await this.dataBase,t=this.filterStatus(e),n=this.filterSpecies(t),i=this.filterGender(n),a=this.filterOrigin(i),s=this.filterLocation(a),c=this.filterEpisodes(s),o=this.order(c);return this.filterData=o,c}order(e){let t=this.filter.order;return null==t?e:"ascendente"==t?(e.sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0})),e):"descendente"==t?(e.sort((function(e,t){return e.name>t.name?-1:e.name<t.name?1:0})),e):void 0}filterStatus(e){let t=this.filter.status,n=[];return 0!==t.length?(e.forEach((e=>{t.includes(e.status)&&n.push(e)})),n):e}filterSpecies(e){let t=this.filter.species,n=[];return 0!==t.length?(e.forEach((e=>{t.includes(e.species)&&n.push(e)})),n):e}filterGender(e){let t=this.filter.gender,n=[];return 0!==t.length?(e.forEach((e=>{t.includes(e.gender)&&n.push(e)})),n):e}filterOrigin(e){let t=this.filter.origin,n=[];return 0!==t.length?(e.forEach((e=>{t.includes(e.origin.name)&&n.push(e)})),n):e}filterLocation(e){let t=this.filter.location,n=[];return 0!==t.length?(e.forEach((e=>{t.includes(e.location.name)&&n.push(e)})),n):e}filterEpisodes(e){let t=this.filter.episode,n=[];return 0!==t.length?(e.forEach((e=>{e.episode.forEach((i=>{t.includes(i)&&(n.includes(e)||n.push(e))}))})),n):e}async getOptionsSpecies(){const e=new Set;return(await this.getData()).forEach((t=>{e.add(t.species)})),e}async getOptionsGender(){const e=new Set;return(await this.getData()).forEach((t=>{e.add(t.gender)})),e}async getOptionsOrigin(){const e=new Set;return(await this.getData()).forEach((t=>{e.add(t.origin.name)})),e}async getOptionsLocation(){const e=new Set;return(await this.getData()).forEach((t=>{e.add(t.location.name)})),e}async getOptionsEpisodiosName(){let e=[];return(await this.getData(this.urlBaseEpisode)).forEach((t=>{e.push(t.name)})),e}}("https://rickandmortyapi.com/api/character","https://rickandmortyapi.com/api/episode"),i=new class{constructor(e,t,n=0,i){this.pageNumber=e,this.initPageBlock=1,screen.width<768?(this.endPageBlock=5,this.numberOfPagesInPagination=5):(this.endPageBlock=10,this.numberOfPagesInPagination=10),this.numberCharactersPage=t,this.numberOfPages=n}}(1,20,0);var a=n(297),s=n(886),c=n(206),o=n(697);let r=e=>{let t=`  <div class="cCharacterCard__id hidden">\n                  <p>${e.id}</p>\n                </div>\n\n                <img class="cCharacterCard__img" src="${e.image}" alt="">\n\n                <div class="cCharacterCard__txt">\n                  <div class="txt__name">${e.name}</div>\n                  <div class="txt__status"></div>\n                </div>\n\n                <div class="cCharacterCard__info hidden">\n                  \n                  <div class="info">\n\n                    <div class="info__description">\n                        <div class="gender"></div>\n                    </div>               \n                  </div>\n\n                  <svg class="info__svg" width="60" height="38" viewBox="0 0 60 38" fill="none" xmlns="http://www.w3.org/2000/svg">\n                    <path d="M59 1H31.2709H6.336L1 14V37H52.5299L59 26.2414V1Z" stroke="#1E2327" stroke-width="2"/>\n                  </svg>\n\n                  \n                </div>`,n=document.createElement("div");return n.classList.add("cCharacterCard"),n.insertAdjacentHTML("afterbegin",t),n.addEventListener("mouseenter",(e=>{!function(e){let t=e.querySelector(".cCharacterCard__id"),n=e.querySelector(".cCharacterCard__info");t.classList.remove("hidden"),n.classList.remove("hidden")}(e.path[0])})),n.addEventListener("mouseleave",(e=>{!function(e){let t=e.querySelector(".cCharacterCard__id"),n=e.querySelector(".cCharacterCard__info");t.classList.add("hidden"),n.classList.add("hidden")}(e.path[0])})),n.addEventListener("click",(()=>{!function(e){document.querySelector(".cCharacters__characters").appendChild((e=>{let t=` <div class="cInfoContainer">\n                <div class="cInfoContainer__contents">\n                  <div class="contents__title">${e.name}</div>\n                  <img class="contents__img" src=${e.image} alt="">\n                  <div class="contents__info">\n                    <div class="info__text">Status: ${e.status}</div>\n                    <div class="info__text">Specie: ${e.species}</div>\n                    <div class="info__text">Type: ${e.type}</div>\n                    <div class="info__text">Gender: ${e.gender}</div>\n                    <div class="info__text">Origin: ${e.origin.name}</div>\n                    <div class="info__text">Location: ${e.location.name}</div>\n                    <div class="cOptionButton">\n                            <div class="cOptionButton__title">Episodios</div>\n                            <div class="cOptionButton__container hidden"></div>\n                    </div>\n                  </div>\n                </div>\n              </div>`,n=document.createElement("div");n.classList.add("cCharacterInfo"),n.innerHTML=t,function(e,t){let n=t.querySelector(".contents__title");e.name.length>=20&&(n.style.fontSize="11px")}(e,n),n.addEventListener("click",(e=>{!function(e){let t=document.querySelector(".cCharacterInfo"),n=document.querySelector("html");e==t&&(t.remove(),n.classList.remove("scrollHidden"))}(e.target)}));let i=n.querySelector(".cOptionButton__title");return async function(e,t){let n=e.nextSibling.nextSibling;t.episode.forEach((e=>{n.innerHTML+=`<div id="${e}" class="options">${e}</div>`})),n.querySelectorAll(".options").forEach((e=>{e.addEventListener("click",(e=>{e.target.classList.toggle("options--selected")}))}))}(i,e),i.addEventListener("click",(e=>{var t;(t=e.target).classList.toggle("cOptionButton__title--selected"),t.nextSibling.nextSibling.classList.toggle("hidden")})),n})(e)),document.querySelector("html").classList.add("scrollHidden")}(e)})),function(e){let t=n.querySelector(".txt__status");switch(e.status){case"Dead":t.classList.add("txt__status--dead");break;case"Alive":t.classList.add("txt__status--alive");break;case"unknown":t.classList.add("txt__status--unknown")}}(e),function(e){let t=n.querySelector(".gender");switch(e.gender){case"Female":t.style.backgroundImage=`url(${a})`;break;case"Male":t.style.backgroundImage=`url(${s})`;break;case"Genderless":t.style.backgroundImage=`url(${c})`;break;case"unknown":t.style.backgroundImage=`url(${o})`}}(e),function(e,t){let n=t.querySelector(".txt__name");e.name.length>=30&&(n.style.fontSize="12px")}(e,n),n};async function l(){let e=await t.filtrar();i.numberOfPages=Math.ceil(e.length/i.numberCharactersPage);let n=document.querySelector(".cCharacters__characters");n.innerHTML="",e.length>i.numberCharactersPage?(e.slice(i.numberCharactersPage*(i.pageNumber-1),i.numberCharactersPage*i.pageNumber).forEach((e=>{n.appendChild(r(e))})),document.querySelector(".pageNumbering").innerHTML='    <div id="previous" class="bottom"> < </div>\n                  <div class=\'pageNumbering__index\'></div>\n                  <div id="next" class="bottom">></div>',document.querySelector("#previous").addEventListener("click",(()=>{!async function(){i.pageNumber>1&&(i.pageNumber-=1),window.location.hash=`#/personajes/${i.pageNumber}`}()})),document.querySelector("#next").addEventListener("click",(()=>{!async function(){let e=i.numberOfPages;i.pageNumber<e&&(i.pageNumber+=1),window.location.hash=`#/personajes/${i.pageNumber}`}()})),async function(){let e=i.numberOfPages,t=document.querySelector(".pageNumbering__index");if(screen.width<768){if(e<=i.numberOfPagesInPagination){let n=1;for(;n<=e;)t.innerHTML+=`<a  id="${n}" class="indexNumber">${n}</a>`,n++}else if(i.pageNumber-1==i.endPageBlock){let e=i.pageNumber-4;for(i.initPageBlock=e,i.endPageBlock++;e<=i.endPageBlock;)t.innerHTML+=`<a  id="${e}" class="indexNumber">${e}</a>`,e++}else if(i.pageNumber+1==i.initPageBlock){let e=i.pageNumber;for(i.initPageBlock=e,i.endPageBlock=e+4;e<=i.endPageBlock;)t.innerHTML+=`<a  id="${e}" class="indexNumber">${e}</a>`,e++}else if(i.pageNumber>=i.initPageBlock&&i.pageNumber<=i.endPageBlock){let e=i.initPageBlock;for(;e<=i.endPageBlock;)t.innerHTML+=`<a  id="${e}" class="indexNumber">${e}</a>`,e++}else if(i.pageNumber<i.initPageBlock)if(i.pageNumber-2<1){i.initPageBlock=1,i.endPageBlock=i.initPageBlock+4;let e=i.initPageBlock;for(;e<=i.endPageBlock;)t.innerHTML+=`<a  id="${e}" class="indexNumber">${e}</a>`,e++}else{i.initPageBlock=i.pageNumber-2,i.endPageBlock=i.initPageBlock+4;let e=i.initPageBlock;for(;e<=i.endPageBlock;)t.innerHTML+=`<a  id="${e}" class="indexNumber">${e}</a>`,e++}else if(i.pageNumber>i.endPageBlock)if(i.pageNumber+2<e){i.endPageBlock=i.pageNumber+2,i.initPageBlock=i.endPageBlock-4;let e=i.initPageBlock;for(;e<=i.endPageBlock;)t.innerHTML+=`<a  id="${e}" class="indexNumber">${e}</a>`,e++}else if(i.pageNumber+1<=e){i.endPageBlock=i.pageNumber+1,i.initPageBlock=i.endPageBlock-4;let e=i.initPageBlock;for(;e<=i.endPageBlock;)t.innerHTML+=`<a  id="${e}" class="indexNumber">${e}</a>`,e++}else{i.endPageBlock=i.pageNumber,i.initPageBlock=i.endPageBlock-4;let e=i.initPageBlock;for(;e<=i.endPageBlock;)t.innerHTML+=`<a  id="${e}" class="indexNumber">${e}</a>`,e++}}else if(e<=i.numberOfPagesInPagination){let n=1;for(;n<=e;)t.innerHTML+=`<a  id="${n}" class="indexNumber">${n}</a>`,n++}else if(i.pageNumber-1==i.endPageBlock){let e=i.pageNumber-9;for(i.initPageBlock=e,i.endPageBlock++;e<=i.endPageBlock;)t.innerHTML+=`<a  id="${e}" class="indexNumber">${e}</a>`,e++}else if(i.pageNumber+1==i.initPageBlock){let e=i.pageNumber;for(i.initPageBlock=e,i.endPageBlock=e+9;e<=i.endPageBlock;)t.innerHTML+=`<a  id="${e}" class="indexNumber">${e}</a>`,e++}else if(i.pageNumber>=i.initPageBlock&&i.pageNumber<=i.endPageBlock){let e=i.initPageBlock;for(;e<=i.endPageBlock;)t.innerHTML+=`<a href="/#/personajes/${e}" id="${e}" class="indexNumber">${e}</a>`,e++}else if(i.pageNumber<i.initPageBlock)if(i.pageNumber-2<1){i.initPageBlock=1,i.endPageBlock=i.initPageBlock+9;let e=i.initPageBlock;for(;e<=i.endPageBlock;)t.innerHTML+=`<a href="/#/personajes/${e}" id="${e}" class="indexNumber">${e}</a>`,e++}else{i.initPageBlock=i.pageNumber-2,i.endPageBlock=i.initPageBlock+9;let e=i.initPageBlock;for(;e<=i.endPageBlock;)t.innerHTML+=`<a href="/#/personajes/${e}" id="${e}" class="indexNumber">${e}</a>`,e++}else if(i.pageNumber>i.endPageBlock)if(i.pageNumber+2<e){i.endPageBlock=i.pageNumber+2,i.initPageBlock=i.endPageBlock-9;let e=i.initPageBlock;for(;e<=i.endPageBlock;)t.innerHTML+=`<a href="/#/personajes/${e}" id="${e}" class="indexNumber">${e}</a>`,e++}else if(i.pageNumber+1<=e){i.endPageBlock=i.pageNumber+1,i.initPageBlock=i.endPageBlock-9;let e=i.initPageBlock;for(;e<=i.endPageBlock;)t.innerHTML+=`<a href="/#/personajes/${e}" id="${e}" class="indexNumber">${e}</a>`,e++}else{i.endPageBlock=i.pageNumber,i.initPageBlock=i.endPageBlock-9;let e=i.initPageBlock;for(;e<=i.endPageBlock;)t.innerHTML+=`<a  id="${e}" class="indexNumber">${e}</a>`,e++}document.getElementById(i.pageNumber).classList.add("indexNumber__selected"),document.querySelectorAll(".indexNumber").forEach((e=>{e.addEventListener("click",(()=>{window.location.hash=`/#/personajes/${e.id}`,i.pageNumber=parseInt(e.id)}))}))}()):(e.forEach((e=>{n.appendChild(r(e))})),document.querySelector(".pageNumbering").innerHTML="<div class='pageNumbering__index'> <div class='indexNumber indexNumber__selected'>1</div> </div>")}let d=[];function u(){let e=document.querySelector(".cSearch");screen.width>=768?document.querySelector(".cOptionsBar").insertAdjacentElement("afterbegin",e):document.querySelector(".app").insertAdjacentElement("afterbegin",e)}function g(){let e=document.querySelector(".header__icon-menu"),t=document.querySelector(".header__menu");screen.width>=768?(e.classList.add("hidden"),t.classList.remove("hidden")):(e.classList.remove("hidden"),t.classList.add("hidden"))}window.addEventListener("hashchange",(()=>{(e=>{let t=window.location.hash.split("/");switch(t[1]){case"home":return console.log("home");case"personajes":let e=parseInt(t[2]);return e&&(e<=i.numberOfPages?(i.pageNumber=e,l()):console.log("número de paginas mayor")),console.log("personajes");case"juegos":return console.log("juegos");default:console.log("404!!")}})()})),window.addEventListener("resize",(()=>{g()})),window.addEventListener("load",(()=>{window.location.hash="#/personajes/1",g()})),document.querySelector(".header").insertAdjacentElement("afterend",(()=>{let e=document.createElement("main");return e.classList.add("app"),e.appendChild((()=>{let e=document.createElement("div");return e.classList.add("cSearch"),e.innerHTML='      <button class="cSearch__buttonSend"></button>\n                        <input class="cSearch__search" type="search"  id ="buscador" placeholder="Buscar">',e})()),e.appendChild((()=>{let e=document.createElement("div");return e.classList.add("cOptionsBar"),e.insertAdjacentHTML("afterbegin",'  <div class="cOptionsBar__right">\n\n                    <div class="cOptionButton">\n                      <div class="cOptionButton__title menu__title">Filtrar</div>\n\n                      <div class="cOptionButton__container menu__container hidden">\n                        <div class="cOptionButton">\n                          <div class="cOptionButton__title">Especie</div>\n                          <div class="cOptionButton__container hidden"></div>\n                        </div>\n\n                        <div class="cOptionButton">\n                          <div class="cOptionButton__title">Género</div>\n                          <div class="cOptionButton__container hidden"></div>\n                        </div>\n\n                        <div class="cOptionButton">\n                          <div class="cOptionButton__title">Origen</div>\n                          <div class="cOptionButton__container hidden"></div>\n                        </div>\n\n                        <div class="cOptionButton">\n                          <div class="cOptionButton__title">Locación</div>\n                          <div class="cOptionButton__container hidden"></div>\n                        </div>\n\n                        <div class="cOptionButton">\n                          <div class="cOptionButton__title">Episodios</div>\n                          <div class="cOptionButton__container hidden"></div>\n                        </div>\n                      </div> \n\n                    </div>\n\n                    <div class="cOptionButton">\n                      <div class="cOptionButton__title menu__title">Ordenar</div>\n                      <div class="cOptionButton__container menu__container hidden">\n                        <div class="containerOptions">\n                          <div id="ascendente" class="options">A-Z</div>\n                          <div id="descendente" class="options">Z-A</div>\n                        </div>\n                      </div>\n                    </div>\n                      \n\n                    <div class="cOptionsBar__lifeBar">\n                      <div class="lifeBar">\n                        <div id="Alive" class="containerLife  containerLife--alive hideContainerLife"></div>\n                        <div id="Dead" class="containerLife  containerLife--dead hideContainerLife"></div>\n                        <div id="unknown" class="containerLife  containerLife--unknown hideContainerLife"></div>\n                      </div>\n                    </div>\n                  </div>'),e.querySelectorAll(".containerLife").forEach((e=>{e.addEventListener("click",(e=>{!function(e){if(e.classList.toggle("hideContainerLife"),d.includes(e.id)){let t=d.indexOf(e.id);d.splice(t,1)}else d.push(e.id);t.filter.status=d,l()}(e.path[0])}))})),e.querySelectorAll(".cOptionButton__title").forEach((e=>{!async function(e){let n=e.nextSibling.nextSibling;switch(e.textContent){case"Especie":(await t.getOptionsSpecies()).forEach((e=>{let i=document.createElement("div");i.classList.add("options"),i.setAttribute("id",e),i.textContent=e,i.addEventListener("click",(()=>{let n=t.filter.species;n.includes(e)?(n.splice(n.indexOf(e),1),l()):(n.push(e),l()),i.classList.toggle("options--selected"),window.location.hash="#/personajes/1"})),n.appendChild(i)}));break;case"Género":(await t.getOptionsGender()).forEach((e=>{let i=document.createElement("div");i.classList.add("options"),i.setAttribute("id",e),i.textContent=e,i.addEventListener("click",(()=>{let n=t.filter.gender;n.includes(e)?(n.splice(n.indexOf(e),1),l()):(n.push(e),l()),i.classList.toggle("options--selected"),window.location.hash="#/personajes/1"})),n.appendChild(i)}));break;case"Origen":(await t.getOptionsOrigin()).forEach((e=>{let i=document.createElement("div");i.classList.add("options"),i.setAttribute("id",e),i.textContent=e,i.addEventListener("click",(()=>{let n=t.filter.origin;n.includes(e)?(n.splice(n.indexOf(e),1),l()):(n.push(e),l()),i.classList.toggle("options--selected"),window.location.hash="#/personajes/1"})),n.appendChild(i)}));break;case"Locación":(await t.getOptionsLocation()).forEach((e=>{let i=document.createElement("div");i.classList.add("options"),i.setAttribute("id",e),i.textContent=e,i.addEventListener("click",(()=>{let n=t.filter.location;n.includes(e)?(n.splice(n.indexOf(e),1),l()):(n.push(e),l()),i.classList.toggle("options--selected"),window.location.hash="#/personajes/1"})),n.appendChild(i)}));break;case"Episodios":(await t.getOptionsEpisodiosName()).forEach((e=>{let i=document.createElement("div");i.classList.add("options"),i.setAttribute("id",e),i.textContent=e,i.addEventListener("click",(()=>{let n=t.filter.episode;n.includes(e)?(n.splice(n.indexOf(e),1),l()):(n.push(e),l()),i.classList.toggle("options--selected"),window.location.hash="#/personajes/1"})),n.appendChild(i)}))}}(e),e.addEventListener("click",(e=>function(e){let t=document.querySelectorAll(".cOptionButton__title--selected"),n=document.querySelectorAll(".cOptionButton__container"),i=e.nextSibling.nextSibling;e.classList.toggle("cOptionButton__title--selected"),i.classList.contains("menu__container")?(i.classList.toggle("hidden"),n.forEach((e=>{e.classList.contains("menu__container")&&e!=i&&e.classList.add("hidden")}))):(i.classList.toggle("hidden"),n.forEach((e=>{e.classList.contains("menu__container")||e.classList.contains("hidden")||e==i||e.classList.add("hidden")}))),t.forEach((t=>{t.classList.contains("menu__title")&&e.classList.contains("menu__title")?(t.classList.remove("cOptionButton__title--selected"),n.forEach((e=>{e.classList.contains("menu__container")||e.classList.contains("hidden")||e==i||e.classList.add("hidden")}))):t.classList.contains("menu__title")||t.classList.remove("cOptionButton__title--selected")}))}(e.path[0])))})),window.onclick=e=>{var t;(t=e.target).classList.contains("menu__title")||t.classList.contains("options")||t.classList.contains("cOptionButton__title")||(document.querySelectorAll(".cOptionButton__container").forEach((e=>{e.classList.add("hidden")})),document.querySelectorAll(".cOptionButton__title--selected").forEach((e=>{e.classList.remove("cOptionButton__title--selected")})))},e.querySelectorAll(".options").forEach((e=>{e.addEventListener("click",(e=>{!function(e){t.filter.order=e.id,l(),function(e){document.querySelectorAll(".cOptionButton__container").forEach((e=>{e.classList.add("hidden")})),document.querySelectorAll(".cOptionButton__title--selected").forEach((e=>{e.classList.remove("cOptionButton__title--selected")})),function(e){let t=e.parentNode.querySelector(".options--selected");null!=t&&t.classList.remove("options--selected"),e.classList.add("options--selected")}(e)}(e),window.location.hash="#/personajes/1"}(e.target)}))})),e})()),e.appendChild((()=>{let e=document.createElement("div");return e.classList.add("cCharacters"),e.innerHTML=' <div class="cCharacters__characters"></div>',e.insertAdjacentElement("beforeend",(()=>{let e=document.createElement("div");return e.classList.add("pageNumbering"),e})()),l(),e})()),window.addEventListener("resize",(()=>{u()})),window.addEventListener("load",(()=>{u()})),e})())})()})();
import "./styles/style.scss"
import {router} from "./router/indexRoutes.js"
import {main} from "./views/home/home.js"

window.addEventListener("hashchange", (e)=>{
   router({
      oldUrl:e.oldURL,
      newUrl:window.location.hash
   })
})

//la primera vez esto da igual se coloca el hash pero no activa hashchange
window.addEventListener("load",()=>{
   window.location.hash = "#/personajes/1"
});

//se añade el main dentro de la página
let header = document.querySelector(".header")
header.insertAdjacentElement("afterend",main())




























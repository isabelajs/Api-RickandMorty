import "./styles/style.scss"
import {router} from "./router/indexRoutes.js"
import {main} from "./views/home/home.js"



window.addEventListener("hashchange", ()=>{
   router(window.location.hash)
})

//cambio de posicion en los elementos del header
window.addEventListener("resize",()=>{hiddenElementsHeader()});
window.addEventListener("load",()=>{hiddenElementsHeader()});

function hiddenElementsHeader(){
   let iconMenu = document.querySelector(".header__icon-menu")
   let menu = document.querySelector(".header__menu")

   if (screen.width >= 768){     
      iconMenu.classList.add("hidden")
      menu.classList.remove("hidden")
   }else{
      iconMenu.classList.remove("hidden")
      menu.classList.add("hidden")
   }
}

//se añade el main dentro de la página
let header = document.querySelector(".header")
header.insertAdjacentElement("afterend",main())






























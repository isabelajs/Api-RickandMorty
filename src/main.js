import "./styles/style.scss"

import {router} from "./router/indexRoutes.js"

window.addEventListener("hashchange", ()=>{
   router(window.location.hash)
})

window.onresize = pepe;
window.onload = pepe;

function pepe(){
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

import "./styles/style.scss"
import {router} from "./router/indexRoutes.js"
import {getData} from "./utils/getData.js"

window.addEventListener("hashchange", ()=>{
   router(window.location.hash)
})

//cambio de elementos del header
window.addEventListener("resize",()=>{hiddenElementsHeader(),moveSearch()});
window.addEventListener("load",()=>{hiddenElementsHeader(),moveSearch()});

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

function moveSearch(){
   let search = document.querySelector(".cSearch")
   if(screen.width>=768){
      let optionsBar = document.querySelector(".cOptionsBar")
      optionsBar.insertAdjacentElement("afterbegin",search)
   } else{
      let app = document.querySelector(".app")
      app.insertAdjacentElement("afterbegin",search)
   }
   
}

//cambio del componente optionbutton
let optionButtons =  document.querySelectorAll(".cOptionButton")
optionButtons.forEach(button =>{button.addEventListener("click", (x)=>buttonAppearanceChange(x.path[0]))})


function buttonAppearanceChange(button){
   button.classList.toggle("cOptionButton--selected")
}

//cambio la selección en los estados de vida
let containerLife = document.querySelectorAll(".containerLife")
containerLife.forEach(container =>{container.addEventListener("click", (x)=>{selectStatusLife(x.path[0])})})

function selectStatusLife(container){
   container.classList.toggle("hideContainerLife")
}

let urlData ="https://rickandmortyapi.com/api/character";

// getData(urlData).then(x=>console.log(x))
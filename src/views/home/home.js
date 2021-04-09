import {cSearch} from "./cSearch.js"
import {cOptionsBar} from "./cOptionsBar.js"
import{cCharacterCard} from "./cCharacterCard.js"

let main = ()=>{
   let cMain = document.createElement("main")
   cMain.classList.add("app")
   cMain.appendChild(cSearch())
   cMain.appendChild(cOptionsBar())
   cMain.appendChild(cCharacterCard())

   //cambio de posicion en los elementos del header
   window.addEventListener("resize",()=>{moveSearch()});
   window.addEventListener("load",()=>{moveSearch()});

   //cambio del componente optionbutton
   let optionButtons =  cMain.querySelectorAll(".cOptionButton")
   optionButtons.forEach(button =>{button.addEventListener("click", (x)=>buttonAppearanceChange(x.path[0]))})
   
   
   
   return cMain

}




export {main}


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



function buttonAppearanceChange(button){
   button.classList.toggle("cOptionButton--selected")
}
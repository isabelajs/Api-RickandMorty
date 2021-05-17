import {cSearch} from "./cSearch.js"
import {cOptionsBar} from "./cOptionsBar.js"
import{cCharacters} from "./cCharacters/cCharacters.js"


let main = ()=>{
   let cMain = document.createElement("main")
   cMain.classList.add("app")
   cMain.appendChild(cSearch())
   cMain.appendChild(cOptionsBar())
   cMain.appendChild(cCharacters())

   //cambio de posicion en los elementos del header
   window.addEventListener("resize",()=>{moveSearch()});
   window.addEventListener("load",()=>{moveSearch()});

   
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






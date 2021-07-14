import {cSearch} from "./cSearch.js"
import {cOptionsBar} from "./cOptionsBar.js"
import{cCharacters} from "./cCharacters/cCharacters.js"
import {dataPage} from '../../utils/Data';
import {renderPageNumbering} from './cCharacters/pagination'
import {dataCharacters} from '../../utils/Data'
// to observe width of screen

let statusSize

//se crea el componente app
let main = ()=>{
   let cMain = document.createElement("main")
   cMain.classList.add("app")

   //esto se crea sincrono
   cMain.appendChild(cSearch())

   //ya no son sincronos 

   //aca fetch de toda la informacion y cuando la informacion ya este .then(
   cMain.appendChild(cOptionsBar())
   cMain.appendChild(cCharacters())


   
   // change position of searchBar and config the numberofpagesinpagination 
   window.addEventListener("resize",()=> {

      if(!dataCharacters.loading){
         renderPageNumbering()
      }

      handleChangeSize()

   });

   window.addEventListener("load",()=>handleChangeSize());


   return cMain

}

const handleChangeSize = ()=>{

   const newWidth = window.innerWidth

   let search = document.querySelector(".cSearch")
   let optionsBar = document.querySelector(".cOptionsBar")
   
   if(newWidth < 768) {
      if(statusSize == undefined || statusSize == 'desktop') {
         optionsBar.insertAdjacentElement("afterend",search)
         dataPage.numberOfPagesInPagination = 5
         statusSize = 'mobile'
      }

   }else{

      if(statusSize == undefined || statusSize == 'mobile') {
         optionsBar.insertAdjacentElement("afterbegin",search)
         dataPage.numberOfPagesInPagination = 10
         statusSize = 'desktop'
      }
   }
}


export {main}
